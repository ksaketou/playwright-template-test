import { test } from '@playwright/test'
import { User } from '../../services/user/User'
import { RestValidations } from '../../services/RestValidations'
import { HttpStatusCodes } from '../../utils/HttpStatusCodes'
import { getTestData } from '../../utils/DataReader'

test.describe.configure({ mode: 'parallel' });

test.describe("TS_WS_XXX_001: Manage users @API", () => {
  let user: User
  let rest = new RestValidations()

  test('TC_001: GET users', async ({request}) => {
    // get users
    user = new User(request)
    const users = await user.getUsers()

    // validate response
    rest.verifyStatusCode(users, HttpStatusCodes.OK)
    rest.verifyResponseText(users, getTestData('EXPECTED_LAST_NAME', 1))
  });

  test('TC_002: ADD user', async ({request}) => {
    // add user
    user = new User(request)
    const newUser = await user.addUser()

    // validate response
    rest.verifyStatusCode(newUser, HttpStatusCodes.CREATED)
    rest.verifyResponseText(newUser, getTestData('EXPECTED_JOB', 1))

  });

  test('TC_003: UPDATE user', async ({ request }) => {
    // update user
    user = new User(request)
    const updateUser = await user.updateUser()

    // validate response
    rest.verifyStatusCode(updateUser, HttpStatusCodes.OK)
    rest.verifyResponseText(updateUser, getTestData('EXPECTED_RESPONSE_BODY_UPDATED', 1))

  });

  test('TC_004: DELETE user', async ({ request }) => {
    // delete user
    user = new User(request)
    const deleteUser = await user.deleteUser()

    // validate response
    rest.verifyStatusCode(deleteUser, HttpStatusCodes.NO_CONTENT)
  });

})