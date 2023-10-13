import { APIRequestContext } from "@playwright/test";

export class ApiBase {
  constructor(protected readonly request: APIRequestContext) {}

  protected async get(url: string) {
    return this.request.get(url);
  }

  protected async post(url: string, params: object) {
    return this.request.post(url, params);
  }

  protected async put(url: string, params: object) {
    return this.request.put(url, params);
  }

  protected async delete(url: string) {
    return this.request.delete(url);
  }
}
