import { APIRequestContext, APIResponse } from "@playwright/test";
import { UserEndpoints, getRestUrl } from "./UserEndpoints"
import { getTestData, loadJSONFile } from '../../utils/DataReader'
import { getTemplatesPath } from "../../utils/Resources";
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

    // set headers
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const newUser = await this.service.post(getRestUrl(UserEndpoints.ADD_USER), 
    loadJSONFile(getTemplatesPath() + getTestData('FILENAME', 1)), headers);

    console.log("got response:", await newUser.json())
    return newUser
  }

  async updateUser(): Promise<APIResponse> {

    // set headers
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const updateUser = await this.service.update(getRestUrl(UserEndpoints.UPDATE_USER), 
    loadJSONFile(getTemplatesPath() + getTestData('FILENAME', 2)), headers);

    console.log("got response:", await updateUser.json())
    return updateUser
  }

  async deleteUser(): Promise<APIResponse> {
    return await this.service.delete(getRestUrl(UserEndpoints.DELETE_USER));
  }

}