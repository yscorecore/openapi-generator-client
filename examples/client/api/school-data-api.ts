/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { DeepProcessingItemModel } from "../models"
import type { MenuSampleModel } from "../models"
import type { OrderSampleModel } from "../models"
import type { SchoolWithMealInfoModel } from "../models"
import type { StockInModel } from "../models"
import type { StockOutItemModel } from "../models"
import type { StockReturnItemModel } from "../models"

/**
 * SchoolDataApi - API class
 */
export class SchoolDataApi {
    /**
     * 
     * @summary 深加工
     * @param string? start 
     * @param string? end 
     */
    public schoolDataDeepprocessingItemGet(start?: string | null, end?: string | null): Promise<Array<DeepProcessingItemModel>> {
        return send({
            url: '/school_data/deepprocessing_item',
            method: 'GET',
            params: {
                start: start,
                end: end,
            },
        });
    }
    /**
     * 
     * @summary 成品留样
     * @param string? start 
     * @param string? end 
     */
    public schoolDataMenuSampleGet(start?: string | null, end?: string | null): Promise<Array<MenuSampleModel>> {
        return send({
            url: '/school_data/menu_sample',
            method: 'GET',
            params: {
                start: start,
                end: end,
            },
        });
    }
    /**
     * 
     * @summary 原材料留样
     * @param string? start 
     * @param string? end 
     */
    public schoolDataOrderSampleGet(start?: string | null, end?: string | null): Promise<Array<OrderSampleModel>> {
        return send({
            url: '/school_data/order_sample',
            method: 'GET',
            params: {
                start: start,
                end: end,
            },
        });
    }
    /**
     * 
     * @summary 获取学校的出入库，配置信息
     * @param string? start 
     * @param string? end 
     */
    public schoolDataSchoolInfoGet(start?: string | null, end?: string | null): Promise<SchoolWithMealInfoModel> {
        return send({
            url: '/school_data/school_info',
            method: 'GET',
            params: {
                start: start,
                end: end,
            },
        });
    }
    /**
     * 
     * @summary 入库
     * @param string? start 
     * @param string? end 
     */
    public schoolDataStockInGet(start?: string | null, end?: string | null): Promise<Array<StockInModel>> {
        return send({
            url: '/school_data/stock_in',
            method: 'GET',
            params: {
                start: start,
                end: end,
            },
        });
    }
    /**
     * 
     * @summary 出库
     * @param string? start 
     * @param string? end 
     */
    public schoolDataStockOutGet(start?: string | null, end?: string | null): Promise<Array<StockOutItemModel>> {
        return send({
            url: '/school_data/stock_out',
            method: 'GET',
            params: {
                start: start,
                end: end,
            },
        });
    }
    /**
     * 
     * @summary 退货
     * @param string? start 
     * @param string? end 
     */
    public schoolDataStockReturnGet(start?: string | null, end?: string | null): Promise<Array<StockReturnItemModel>> {
        return send({
            url: '/school_data/stock_return',
            method: 'GET',
            params: {
                start: start,
                end: end,
            },
        });
    }
}

/**
 * SchoolDataApi - instance
 */
export const SchoolDataApiInstance = new SchoolDataApi();

