/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CostInfoCostSummaryPaginationDataCodeResult } from "../models"
import type { DinningOutDtoListCodeResult } from "../models"
import type { MealKind } from "../models"

/**
 * SchoolCostApi - API class
 */
export class SchoolCostApi {
    /**
     * 
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? kind 
     * @param number? offset 
     * @param number? limit 
     */
    public costDailyGet(startDate?: string | null, endDate?: string | null, kind?: MealKind, offset?: number, limit?: number): Promise<CostInfoCostSummaryPaginationDataCodeResult> {
        return send({
            url: '/cost/daily',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                Kind: kind,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 人均顿值详情
     * @param string? date 
     * @param MealKind? kind 
     */
    public costDetailsGet(date?: string, kind?: MealKind): Promise<DinningOutDtoListCodeResult> {
        return send({
            url: '/cost/details',
            method: 'GET',
            params: {
                date: date,
                kind: kind,
            },
        });
    }
    /**
     * 
     * @summary 月人均顿值
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? kind 
     * @param number? offset 
     * @param number? limit 
     */
    public costMonthlyGet(startDate?: string | null, endDate?: string | null, kind?: MealKind, offset?: number, limit?: number): Promise<CostInfoCostSummaryPaginationDataCodeResult> {
        return send({
            url: '/cost/monthly',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                Kind: kind,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 周人均顿值
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? kind 
     * @param number? offset 
     * @param number? limit 
     */
    public costWeeklyGet(startDate?: string | null, endDate?: string | null, kind?: MealKind, offset?: number, limit?: number): Promise<CostInfoCostSummaryPaginationDataCodeResult> {
        return send({
            url: '/cost/weekly',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                Kind: kind,
                Offset: offset,
                Limit: limit,
            },
        });
    }
}

/**
 * SchoolCostApi - instance
 */
export const SchoolCostApiInstance = new SchoolCostApi();

