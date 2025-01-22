import { APIRequestContext, APIResponse } from "@playwright/test"

export class Service {
    private request: APIRequestContext
  
    constructor(request) {
      this.request = request;
    }

    async get(endpoint:string) : Promise<APIResponse> {
        return await this.request.get(endpoint);
    }

    async post(endpoint: string, body: any, headers: Record<string, string> = {}): Promise<APIResponse> {
        // Default headers
        const defaultHeaders: Record<string, string> = {
            'Content-Type': 'text/plain',
            'Accept': '*/*',
        };
    
        // Merge default headers with custom headers
        const mergedHeaders = { ...defaultHeaders, ...headers };
    
        // Make the POST request
        const response = await this.request.post(endpoint, {
            data: body,
            headers: mergedHeaders,
        });
    
        return response;
    }
    

    async update(endpoint: string, body: any, headers: Record<string, string> = {}): Promise<APIResponse> {
        // Default headers
        const defaultHeaders: Record<string, string> = {
            'Content-Type': 'text/plain',
            'Accept': '*/*',
        };
    
        // Merge default headers with custom headers
        const mergedHeaders = { ...defaultHeaders, ...headers };
    
        const response = await this.request.put(endpoint, {
            data: body,
            headers: mergedHeaders,
        });

        return response

    }

    async delete(endpoint:string) : Promise<APIResponse> {
        return await this.request.delete(endpoint);
    }

}