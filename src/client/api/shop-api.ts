/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AddShoppingCart } from "../models"
import type { ShopCarOrder } from "../models"
import type { ShoppingCartDto } from "../models"
import type { UpdateShoppingCart } from "../models"

/**
 * ShopApi - API class
 */
export class ShopApi {
    /**
     * 
     * @param Array<AddShoppingCart>? addShoppingCart 
     */
    public apiShopCreateBatchPost(addShoppingCart?: Array<AddShoppingCart> | null): Promise<string> {
        return send({
            url: '/api/Shop/createBatch',
            method: 'POST',
            body: addShoppingCart,
        });
    }
    /**
     * 
     * @param AddShoppingCart? addShoppingCart 
     */
    public apiShopCreatePost(addShoppingCart?: AddShoppingCart): Promise<string> {
        return send({
            url: '/api/Shop/create',
            method: 'POST',
            body: addShoppingCart,
        });
    }
    /**
     * 
     * @param ShopCarOrder? shopCarOrder 
     */
    public apiShopCreateShopOrderPost(shopCarOrder?: ShopCarOrder): Promise<void> {
        return send({
            url: '/api/Shop/createShopOrder',
            method: 'POST',
            body: shopCarOrder,
        });
    }
    /**
     * 
     * @param string id 
     */
    public apiShopDelIdDelete(id: string): Promise<boolean> {
        return send({
            url: '/api/Shop/del/{Id}'
                .replace(`{${"Id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @param UpdateShoppingCart? updateShoppingCart 
     */
    public apiShopEditPost(updateShoppingCart?: UpdateShoppingCart): Promise<void> {
        return send({
            url: '/api/Shop/edit',
            method: 'POST',
            body: updateShoppingCart,
        });
    }
    /**
     * 
     * @param string id 
     */
    public apiShopQueryShopCartByGoodsIdIdGet(id: string): Promise<ShoppingCartDto> {
        return send({
            url: '/api/Shop/queryShopCartByGoodsId/{Id}'
                .replace(`{${"Id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
}

/**
 * ShopApi - instance
 */
export const ShopApiInstance = new ShopApi();

