/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { OrderCategory } from "../models"
import type { OrderChannel } from "../models"
import type { OrderPlanDetailDtoCodeResult } from "../models"
import type { OrderPlanListDtoPaginationDataCodeResult } from "../models"
import type { OrderPlanStatus } from "../models"
import type { OrderPlanSummaryDtoCodeResult } from "../models"
import type { OrderType } from "../models"

/**
 * SchoolOrderFlowApi - API class
 */
export class SchoolOrderFlowApi {
    /**
     * 
     * @summary 根据订单编号获取采购单详情
     * @param string code 
     */
    public orderFlowsDetailsCodeGet(code: string | null): Promise<OrderPlanDetailDtoCodeResult> {
        return send({
            url: '/order-flows/details/{code}'
                .replace(`{${"code"}}`, encodeURIComponent(String(code))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 采购单列表
     * @param string? startDate 
     * @param string? endDate 
     * @param OrderType? orderType 
     * @param OrderCategory? category 
     * @param OrderChannel? channel 
     * @param OrderPlanStatus? status 
     * @param string? orderCode 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public orderFlowsListGet(startDate?: string | null, endDate?: string | null, orderType?: OrderType, category?: OrderCategory, channel?: OrderChannel, status?: OrderPlanStatus, orderCode?: string | null, schoolId?: string | null, offset?: number, limit?: number): Promise<OrderPlanListDtoPaginationDataCodeResult> {
        return send({
            url: '/order-flows/list',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                OrderType: orderType,
                Category: category,
                Channel: channel,
                Status: status,
                OrderCode: orderCode,
                SchoolId: schoolId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 统计采购单数据
     * @param string code 
     */
    public orderFlowsSummaryCodeGet(code: string | null): Promise<OrderPlanSummaryDtoCodeResult> {
        return send({
            url: '/order-flows/summary/{code}'
                .replace(`{${"code"}}`, encodeURIComponent(String(code))),
            method: 'GET',
        });
    }
}

/**
 * SchoolOrderFlowApi - instance
 */
export const SchoolOrderFlowApiInstance = new SchoolOrderFlowApi();

