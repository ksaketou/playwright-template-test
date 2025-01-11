import { APIRequestContext, APIResponse } from "@playwright/test";
import { UserEndpoints, getRestUrl } from "./UserEndpoints"
import { getTestData, loadJSONFile } from '../../utils/DataReader'
import { getWSmessagesPath } from "../../utils/Resources";
import { Service } from "../../utils/common/Service";

export class User {
  private request: APIRequestContext
  private service: Service

  constructor(request) {
    this.request = request;
    this.service = new Service(request)
  }

  async getUsers(): Promise<APIResponse> {
    return await this.service.get(getRestUrl(UserEndpoints.GET_USERS));
  }

  async addUser(): Promise<APIResponse> {

    const newUser = await this.service.post(getRestUrl(UserEndpoints.ADD_USER), 
    loadJSONFile(getWSmessagesPath() + getTestData('ADD_USER_JSON_FILENAME')));

    console.log("got response:", await newUser.json())
    return newUser
  }

  async updateUser(): Promise<APIResponse> {

    const updateUser = await this.service.update(getRestUrl(UserEndpoints.UPDATE_USER), 
    loadJSONFile(getWSmessagesPath() + getTestData('UPDATE_USER_JSON_FILENAME')));

    console.log("got response:", await updateUser.json())
    return updateUser
  }

  async deleteUser(): Promise<APIResponse> {
    return await this.service.delete(getRestUrl(UserEndpoints.DELETE_USER));
  }

}