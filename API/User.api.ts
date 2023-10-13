import { APIRequestContext } from "@playwright/test";
import { ApiBase } from "./baseApi.api";
import { data } from "../data/reqresData";

export class ApiUser extends ApiBase {
  constructor(protected readonly request: APIRequestContext) {
    super(request);
  }

  async getUser(url: string) {
    return super.get(url);
  }

  async getUsers(url: string) {
    return super.get(url);
  }

  async createUser(url: string, params: object) {
    return super.post(url, params);
  }

  async loginUser(url: string, params: object) {
    return super.post(url, params);
  }

  async getToken() {
    const response = await super.post(data.loginUrl, data.body);
    const responceBody = await response.json();
    const token = responceBody["token"];
    return token;
  }

  async registerUser(url: string, data: object) {
    const response = await super.post(url, data);
    return response;
  }

  async updateUser(url: string, data: object) {
    const response = await super.put(url, data);
    return response;
  }

  async deleteUser(url: string) {
    return super.delete(url);
  }
}
