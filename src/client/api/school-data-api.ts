/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { DeepProcessingItemModelListCodeResult } from "../models"
import type { MenuSampleModelListCodeResult } from "../models"
import type { OrderSampleModelListCodeResult } from "../models"
import type { SchoolWithMealInfoModelCodeResult } from "../models"
import type { StockInModelListCodeResult } from "../models"
import type { StockOutItemModelListCodeResult } from "../models"
import type { StockReturnItemModelListCodeResult } from "../models"

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
    public schoolDataDeepprocessingItemGet(start?: string | null, end?: string | null): Promise<DeepProcessingItemModelListCodeResult> {
        return send({
            url: `/school_data/deepprocessing_item`,
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
    public schoolDataMenuSampleGet(start?: string | null, end?: string | null): Promise<MenuSampleModelListCodeResult> {
        return send({
            url: `/school_data/menu_sample`,
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
    public schoolDataOrderSampleGet(start?: string | null, end?: string | null): Promise<OrderSampleModelListCodeResult> {
        return send({
            url: `/school_data/order_sample`,
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
    public schoolDataSchoolInfoGet(start?: string | null, end?: string | null): Promise<SchoolWithMealInfoModelCodeResult> {
        return send({
            url: `/school_data/school_info`,
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
    public schoolDataStockInGet(start?: string | null, end?: string | null): Promise<StockInModelListCodeResult> {
        return send({
            url: `/school_data/stock_in`,
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
    public schoolDataStockOutGet(start?: string | null, end?: string | null): Promise<StockOutItemModelListCodeResult> {
        return send({
            url: `/school_data/stock_out`,
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
    public schoolDataStockReturnGet(start?: string | null, end?: string | null): Promise<StockReturnItemModelListCodeResult> {
        return send({
            url: `/school_data/stock_return`,
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

