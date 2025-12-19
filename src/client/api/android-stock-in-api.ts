/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { GoodExpiredNealyListCodeResult } from "../models"
import type { MaterialPriceDtoListCodeResult } from "../models"
import type { OrderInfoForStockInListCodeResult } from "../models"

/**
 * AndroidStockInApi - API class
 */
export class AndroidStockInApi {
    /**
     * 
     * @summary 获取快缺过期食材信息
     */
    public scaleExpiredNealyGet(): Promise<GoodExpiredNealyListCodeResult> {
        return send({
            url: `/Scale/expiredNealy`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取参考价格
     * @param string? materialName 
     */
    public scaleStockInPricesGet(materialName?: string | null): Promise<MaterialPriceDtoListCodeResult> {
        return send({
            url: `/Scale/stockIn/prices`,
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
    public scaleStockinOrderListGet(orderId?: string | null): Promise<OrderInfoForStockInListCodeResult> {
        return send({
            url: `/Scale/stockin/order_list`,
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

