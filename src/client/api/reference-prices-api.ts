/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { ReferencePriceDtoListCodeResult } from "../models"

/**
 * ReferencePricesApi - API class
 */
export class ReferencePricesApi {
    /**
     * 
     * @summary 获取食材的询价列表
     * @param string? materialName 
     * @param string? date 
     * @param boolean? isWholesale 
     * @param Array<string>? materialPriceIds 
     */
    public referencepricePriceGet(materialName?: string | null, date?: string, isWholesale?: boolean, materialPriceIds?: Array<string> | null): Promise<ReferencePriceDtoListCodeResult> {
        return send({
            url: '/referenceprice/price',
            method: 'GET',
            params: {
                MaterialName: materialName,
                Date: date,
                IsWholesale: isWholesale,
                MaterialPriceIds: materialPriceIds,
            },
        });
    }
}

/**
 * ReferencePricesApi - instance
 */
export const ReferencePricesApiInstance = new ReferencePricesApi();

