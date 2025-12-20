/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { OrderType } from "../models"
import type { StockLossDtoPaginationDataCodeResult } from "../models"
import type { StockLossRecoreDetailDtoPagedListCodeResult } from "../models"

/**
 * SchoolStockLossApi - API class
 */
export class SchoolStockLossApi {
    /**
     * 
     * @summary 获取损耗
     * @param string? stockInItemId 
     * @param string? startDate 
     * @param string? endDate 
     * @param boolean? ignoreZero 
     * @param string? materialName 
     * @param OrderType? orderType 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public stocklossAllGet(stockInItemId?: string | null, startDate?: string | null, endDate?: string | null, ignoreZero?: boolean | null, materialName?: string | null, orderType?: OrderType, schoolId?: string | null, offset?: number, limit?: number): Promise<StockLossDtoPaginationDataCodeResult> {
        return send({
            url: '/stockloss/all',
            method: 'GET',
            params: {
                StockInItemId: stockInItemId,
                StartDate: startDate,
                EndDate: endDate,
                IgnoreZero: ignoreZero,
                MaterialName: materialName,
                OrderType: orderType,
                SchoolId: schoolId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 获取损耗
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public stocklossQueryLossGet(offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<StockLossRecoreDetailDtoPagedListCodeResult> {
        return send({
            url: '/stockloss/queryLoss',
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
                Agg: agg,
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
}

/**
 * SchoolStockLossApi - instance
 */
export const SchoolStockLossApiInstance = new SchoolStockLossApi();

