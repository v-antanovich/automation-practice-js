import { BaseApi } from './baseApi';

export class ProductApi extends BaseApi {
    constructor(request) {
        super(request);
    }

    async getAllProductsList(url) {
        return this.request.get(url);
    }
}
