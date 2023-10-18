export class BaseApi {
    request;
    constructor(request) {
        this.request = request;
    }
    async get(url) {
        return this.request.get(url);
    }

    async post(url, params) {
        return this.request.post(url, params);
    }

    async put(url, params) {
        return this.request.put(url, params);
    }

    async delete(url, params) {
        return this.request.delete(url, params);
    }
}
