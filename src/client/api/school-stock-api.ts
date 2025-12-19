/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { StockItemInfoPaginationDataCodeResult } from "../models"

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
    public stockinListGet(materialSpecId?: string | null, offset?: number, limit?: number): Promise<StockItemInfoPaginationDataCodeResult> {
        return send({
            url: `/stockin/list`,
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

