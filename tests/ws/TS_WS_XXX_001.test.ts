import { test } from '@playwright/test'
import { User } from '../../services/user/User'
import { RestValidations } from '../../services/RestValidations'
import { HttpStatusCodes } from '../../utils/HttpStatusCodes'
import { getTestData } from '../../utils/DataReader'

test.describe.configure({ mode: 'parallel' });

test.describe("TS_WS_XXX_001: Manage users @WebService", () => {
  let user: User
  let rest = new RestValidations()

  test('TC_WS_01: GET users', async ({request}) => {
    // get users
    user = new User(request)
    const users = await user.getUsers()

    // validate response
    rest.verifyStatusCode(users, HttpStatusCodes.OK)
    rest.verifyResponseText(users, getTestData('EXPECTED_LAST_NAME'))
  });

  test('TC_WS_02: ADD user', async ({request}) => {
    // add user
    user = new User(request)
    const newUser = await user.addUser()

    // validate response
    rest.verifyStatusCode(newUser, HttpStatusCodes.CREATED)
    rest.verifyResponseText(newUser, getTestData('EXPECTED_JOB'))

  });

  test('TC_WS_03: UPDATE user', async ({ request }) => {
    // update user
    user = new User(request)
    const updateUser = await user.updateUser()

    // validate response
    rest.verifyStatusCode(updateUser, HttpStatusCodes.CREATED)
    rest.verifyResponseText(updateUser, getTestData('EXPECTED_RESPONSE_BODY_UPDATED'))

  });

  test('TC_WS_04: DELETE user', async ({ request }) => {
    // delete user
    user = new User(request)
    const deleteUser = await user.deleteUser()

    // validate response
    rest.verifyStatusCode(deleteUser, HttpStatusCodes.NO_CONTENT)
  });

})