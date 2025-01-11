import { APIRequestContext, APIResponse } from "@playwright/test"

export class Service {
    private request: APIRequestContext
  
    constructor(request) {
      this.request = request;
    }

    async get(endpoint:string) : Promise<APIResponse> {
        return await this.request.get(endpoint);
    }

    async post(endpoint:string, body:string) : Promise<APIResponse> {
        //define headers for request
        const headers: Headers = new Headers()
        headers.set('Content-Type', 'application/json')
        headers.set('Accept', 'application/json')


        const response = await this.request.post(endpoint,
        {
            data: {
            body: body,
            headers: headers
            }
        });

        return response

    }

    async update(endpoint:string, body:string) : Promise<APIResponse> {
        //define headers for request
        const headers: Headers = new Headers()
        headers.set('Content-Type', 'application/json')
        headers.set('Accept', 'application/json')


        const response = await this.request.post(endpoint,
        {
            data: {
            body: body,
            headers: headers
            }
        });

        return response

    }

    async delete(endpoint:string) : Promise<APIResponse> {
        return await this.request.delete(endpoint);
    }

}