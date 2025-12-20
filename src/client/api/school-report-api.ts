/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { DeepProcessingStatus } from "../models"
import type { MealKind } from "../models"
import type { OrderType } from "../models"
import type { StockDeepItemReportDtoCodeResult } from "../models"
import type { StockInIReportDtoCodeResult } from "../models"
import type { StockInItemReportDtoCodeResult } from "../models"
import type { StockOutItemDtoV2PagedListCodeResult } from "../models"
import type { StockOutItemReportDtoCodeResult } from "../models"
import type { StockReturnItemReportDtoCodeResult } from "../models"
import type { StockReturnReportDtoCodeResult } from "../models"

/**
 * SchoolReportApi - API class
 */
export class SchoolReportApi {
    /**
     * 
     * @summary 二次加工记录
     * @param string? startDate 
     * @param string? endDate 
     * @param DeepProcessingStatus? status 
     * @param string? materialName 
     * @param string? deepMaterialName 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public reportStockDeepGet(startDate?: string | null, endDate?: string | null, status?: DeepProcessingStatus, materialName?: string | null, deepMaterialName?: string | null, schoolId?: string | null, offset?: number, limit?: number): Promise<StockDeepItemReportDtoCodeResult> {
        return send({
            url: '/Report/stock_deep',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                Status: status,
                MaterialName: materialName,
                DeepMaterialName: deepMaterialName,
                SchoolId: schoolId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 入库信息查询
     * @param string? schoolId 
     * @param string? startDate 
     * @param string? endDate 
     * @param Array<string>? supplier 
     * @param OrderType? orderType 
     * @param boolean? isEvidence 
     * @param string? materialName 
     * @param boolean? isSupplerNameNull 
     * @param boolean? needPay 
     * @param number? materialType 
     * @param number? offset 
     * @param number? limit 
     */
    public reportStockInGet(schoolId?: string | null, startDate?: string | null, endDate?: string | null, supplier?: Array<string> | null, orderType?: OrderType, isEvidence?: boolean | null, materialName?: string | null, isSupplerNameNull?: boolean, needPay?: boolean | null, materialType?: number | null, offset?: number, limit?: number): Promise<StockInItemReportDtoCodeResult> {
        return send({
            url: '/Report/stock_in',
            method: 'GET',
            params: {
                SchoolId: schoolId,
                StartDate: startDate,
                EndDate: endDate,
                Supplier: supplier,
                OrderType: orderType,
                IsEvidence: isEvidence,
                MaterialName: materialName,
                IsSupplerNameNull: isSupplerNameNull,
                NeedPay: needPay,
                MaterialType: materialType,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 入库回执单
     * @param string? orderId 
     */
    public reportStockInReportGet(orderId?: string): Promise<StockInIReportDtoCodeResult> {
        return send({
            url: '/Report/stock_in_report',
            method: 'GET',
            params: {
                orderId: orderId,
            },
        });
    }
    /**
     * 
     * @summary 出库记录
     * @param string? schoolId 
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? kind 
     * @param string? materialName 
     * @param Array<string>? supplier 
     * @param boolean? isNutritious 
     * @param OrderType? orderType 
     * @param number? materialType 
     * @param number? offset 
     * @param number? limit 
     */
    public reportStockOutGet(schoolId?: string | null, startDate?: string | null, endDate?: string | null, kind?: MealKind, materialName?: string | null, supplier?: Array<string> | null, isNutritious?: boolean | null, orderType?: OrderType, materialType?: number | null, offset?: number, limit?: number): Promise<StockOutItemReportDtoCodeResult> {
        return send({
            url: '/Report/stock_out',
            method: 'GET',
            params: {
                SchoolId: schoolId,
                StartDate: startDate,
                EndDate: endDate,
                Kind: kind,
                MaterialName: materialName,
                Supplier: supplier,
                IsNutritious: isNutritious,
                OrderType: orderType,
                MaterialType: materialType,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public reportStockOutV2Get(schoolId?: string | null, offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<StockOutItemDtoV2PagedListCodeResult> {
        return send({
            url: '/Report/stock_out/v2',
            method: 'GET',
            params: {
                SchoolId: schoolId,
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
    /**
     * 
     * @summary 退货记录
     * @param string? schoolId 
     * @param string? startDate 
     * @param string? endDate 
     * @param Array<string>? supplier 
     * @param string? materialName 
     * @param boolean? isSupplerNameNull 
     * @param number? offset 
     * @param number? limit 
     */
    public reportStockReturnGet(schoolId?: string | null, startDate?: string | null, endDate?: string | null, supplier?: Array<string> | null, materialName?: string | null, isSupplerNameNull?: boolean, offset?: number, limit?: number): Promise<StockReturnItemReportDtoCodeResult> {
        return send({
            url: '/Report/stock_return',
            method: 'GET',
            params: {
                SchoolId: schoolId,
                StartDate: startDate,
                EndDate: endDate,
                Supplier: supplier,
                MaterialName: materialName,
                IsSupplerNameNull: isSupplerNameNull,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 退货回执单
     * @param string? returnId 
     */
    public reportStockReturnReportGet(returnId?: string): Promise<StockReturnReportDtoCodeResult> {
        return send({
            url: '/Report/stock_return_report',
            method: 'GET',
            params: {
                returnId: returnId,
            },
        });
    }
}

/**
 * SchoolReportApi - instance
 */
export const SchoolReportApiInstance = new SchoolReportApi();

