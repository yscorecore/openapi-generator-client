/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { StockItemInfoPaginationData } from "../models"

/**
 * SchoolStockApi - API class
 */
export class SchoolStockApi {
    /**
     * 
     * @summary 获取入库详情
     * @param string? materialSpecId 
     * @param number? offset 
     * @param number? limit 
     */
    public stockinListGet(materialSpecId?: string | null, offset?: number, limit?: number): Promise<StockItemInfoPaginationData> {
        return send({
            url: '/stockin/list',
            method: 'GET',
            params: {
                MaterialSpecId: materialSpecId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
}

/**
 * SchoolStockApi - instance
 */
export const SchoolStockApiInstance = new SchoolStockApi();

