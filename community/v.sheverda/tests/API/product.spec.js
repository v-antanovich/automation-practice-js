import { test, expect } from '@playwright/test';

import { ProductApi } from '../../API/apiList/productApi';
import { productApiUrl } from '../../API/data/product/urls';

test('should get all products list', async ({ request }) => {
    const productApi = new ProductApi(request);

    const response = await productApi.getAllProductsList(productApiUrl);
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(Array.isArray(responseBody.products)).toBe(true);
});
