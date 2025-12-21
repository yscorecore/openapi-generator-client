/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { OrderType } from "../models"
import type { StockDto } from "../models"
import type { StockInItemModelInfoStockInItemModelSummaryPaginationData } from "../models"
import type { StockSummaryDto } from "../models"

/**
 * SchoolScaleApi - API class
 */
export class SchoolScaleApi {
    /**
     * 
     * @summary 获取基于入库单的库存数据
     * @param boolean? onlyStock 是否只显示有存量的入库单
     * @param OrderType? orderType 订单类型，null:全部，0：混合，1：营养餐，2：非营养餐
     */
    public scaleStockAllListGet(onlyStock?: boolean, orderType?: OrderType): Promise<Array<StockSummaryDto>> {
        return send({
            url: '/Scale/stock/all_list',
            method: 'GET',
            params: {
                onlyStock: onlyStock,
                orderType: orderType,
            },
        });
    }
    /**
     * 
     * @summary 获取某个入库的详细库存数据
     * @param string? stockInId 
     */
    public scaleStockDetailGet(stockInId?: string): Promise<StockDto> {
        return send({
            url: '/Scale/stock/detail',
            method: 'GET',
            params: {
                stockInId: stockInId,
            },
        });
    }
    /**
     * 
     * @summary 获取入库信息
     * @param string? startDate 
     * @param string? endDate 
     * @param Array<string>? supplier 
     * @param OrderType? orderType 
     * @param string? materialName 
     * @param boolean? isSupplerNameNull 
     * @param number? offset 
     * @param number? limit 
     */
    public scaleStockinitemInfoGet(startDate?: string | null, endDate?: string | null, supplier?: Array<string> | null, orderType?: OrderType, materialName?: string | null, isSupplerNameNull?: boolean, offset?: number, limit?: number): Promise<StockInItemModelInfoStockInItemModelSummaryPaginationData> {
        return send({
            url: '/Scale/stockinitem_info',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                Supplier: supplier,
                OrderType: orderType,
                MaterialName: materialName,
                IsSupplerNameNull: isSupplerNameNull,
                Offset: offset,
                Limit: limit,
            },
        });
    }
}

/**
 * SchoolScaleApi - instance
 */
export const SchoolScaleApiInstance = new SchoolScaleApi();

