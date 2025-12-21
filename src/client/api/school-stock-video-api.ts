/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { StockEventItemDto } from "../models"

/**
 * SchoolStockVideoApi - API class
 */
export class SchoolStockVideoApi {
    /**
     * 
     * @param string? startTime 
     */
    public stockVideoEarliestTimeGet(startTime?: string): Promise<string> {
        return send({
            url: '/stock/video/earliest-time',
            method: 'GET',
            params: {
                startTime: startTime,
            },
        });
    }
    /**
     * 
     * @summary 获取各个步骤的视频信息
     * @param string? startTime 
     */
    public stockVideoNewGet(startTime?: string): Promise<Array<StockEventItemDto>> {
        return send({
            url: '/stock/video/new',
            method: 'GET',
            params: {
                startTime: startTime,
            },
        });
    }
}

/**
 * SchoolStockVideoApi - instance
 */
export const SchoolStockVideoApiInstance = new SchoolStockVideoApi();

