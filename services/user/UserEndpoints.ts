import config from "../../playwright.config"


export enum UserEndpoints {

    GET_USERS = '/api/users?page=2',
    ADD_USER = '/api/users',
    UPDATE_USER = '/api/users/2',
    DELETE_USER = '/api/users/2'

}

export function getRestUrl(endpoint: UserEndpoints): string {
    return config.RESTURL+endpoint
}