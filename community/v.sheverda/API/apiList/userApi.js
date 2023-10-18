import { BaseApi } from './baseApi';

export class UserApi extends BaseApi {
    constructor(request) {
        super(request);
    }
    async createUser(url, params) {
        return this.request.post(url, params);
    }

    async updateUser(url, params) {
        return this.request.put(url, params);
    }

    async deleteUser(url, params) {
        return this.request.delete(url, params);
    }

    async loginUser(url, params) {
        return this.request.post(url, params);
    }
}
