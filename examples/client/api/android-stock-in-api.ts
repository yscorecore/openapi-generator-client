/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { GoodExpiredNealy } from "../models"
import type { MaterialPriceDto } from "../models"
import type { OrderInfoForStockIn } from "../models"

/**
 * AndroidStockInApi - API class
 */
export class AndroidStockInApi {
    /**
     * 
     * @summary 获取快缺过期食材信息
     */
    public scaleExpiredNealyGet(): Promise<Array<GoodExpiredNealy>> {
        return send({
            url: '/Scale/expiredNealy',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取参考价格
     * @param string? materialName 
     */
    public scaleStockInPricesGet(materialName?: string | null): Promise<Array<MaterialPriceDto>> {
        return send({
            url: '/Scale/stockIn/prices',
            method: 'GET',
            params: {
                MaterialName: materialName,
            },
        });
    }
    /**
     * 
     * @summary 获取当天要入库采购单信息
     * @param string? orderId 
     */
    public scaleStockinOrderListGet(orderId?: string | null): Promise<Array<OrderInfoForStockIn>> {
        return send({
            url: '/Scale/stockin/order_list',
            method: 'GET',
            params: {
                orderId: orderId,
            },
        });
    }
}

/**
 * AndroidStockInApi - instance
 */
export const AndroidStockInApiInstance = new AndroidStockInApi();

