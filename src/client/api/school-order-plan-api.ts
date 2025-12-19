/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BooleanCodeResult } from "../models"
import type { CompletedStockInInfoCodeResult } from "../models"
import type { CompletedStockInInfoListCodeResult } from "../models"
import type { CompletedStockInInfoPaginationDataCodeResult } from "../models"
import type { ConfirmDetailsCodeResult } from "../models"
import type { ConfirmReplyInfo } from "../models"
import type { ConfirmedOrderInfoCodeResult } from "../models"
import type { ConfirmedOrderInfoListCodeResult } from "../models"
import type { ConfirmedOrderInfoPaginationDataCodeResult } from "../models"
import type { CreateOrderPlanFromRequirementReq } from "../models"
import type { CreateOrderPlanReq } from "../models"
import type { CreateOrderPlanReqV3 } from "../models"
import type { ModifyOrderTimeReq } from "../models"
import type { ModifyRemark } from "../models"
import type { ModifyRequirementReq } from "../models"
import type { NewOrderPlanInfoCodeResult } from "../models"
import type { NewOrderPlanInfoListCodeResult } from "../models"
import type { NewOrderPlanInfoPaginationDataCodeResult } from "../models"
import type { OrderPlanCreatedDto2CodeResult } from "../models"
import type { OrderPlanCreatedDtoV4CodeResult } from "../models"
import type { OrderSource } from "../models"
import type { OrderType } from "../models"
import type { QrCodeImageCodeResult } from "../models"

/**
 * SchoolOrderPlanApi - API class
 */
export class SchoolOrderPlanApi {
    /**
     * 
     * @summary 已完成
     * @param string? lastOrderCode 
     * @param number? limit 
     * @param string? startTime 
     * @param string? endTime 
     * @param OrderSource? orderSource 
     */
    public ordersCompletedGet(lastOrderCode?: string | null, limit?: number, startTime?: string | null, endTime?: string | null, orderSource?: OrderSource): Promise<CompletedStockInInfoListCodeResult> {
        return send({
            url: `/orders/completed`,
            method: 'GET',
            params: {
                LastOrderCode: lastOrderCode,
                Limit: limit,
                StartTime: startTime,
                EndTime: endTime,
                OrderSource: orderSource,
            },
        });
    }
    /**
     * 
     * @summary 已完成详情
     * @param string id 
     */
    public ordersCompletedIdGet(id: string): Promise<CompletedStockInInfoCodeResult> {
        return send({
            url: `/orders/completed/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 已完成-分页
     * @param string? startTime 
     * @param string? endTime 
     * @param OrderType? orderType 
     * @param number? offset 
     * @param number? limit 
     */
    public ordersCompletedPageGet(startTime?: string | null, endTime?: string | null, orderType?: OrderType, offset?: number, limit?: number): Promise<CompletedStockInInfoPaginationDataCodeResult> {
        return send({
            url: `/orders/completed/page`,
            method: 'GET',
            params: {
                StartTime: startTime,
                EndTime: endTime,
                OrderType: orderType,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 确认采购单报价
     * @param ConfirmReplyInfo? confirmReplyInfo 
     */
    public ordersConfirmPost(confirmReplyInfo?: ConfirmReplyInfo): Promise<BooleanCodeResult> {
        return send({
            url: `/orders/confirm`,
            method: 'POST',
            body: confirmReplyInfo,
        });
    }
    /**
     * 
     * @summary 待入库
     * @param string? lastOrderCode 
     * @param number? limit 
     * @param string? startTime 
     * @param string? endTime 
     * @param OrderSource? orderSource 
     */
    public ordersConfirmedGet(lastOrderCode?: string | null, limit?: number, startTime?: string | null, endTime?: string | null, orderSource?: OrderSource): Promise<ConfirmedOrderInfoListCodeResult> {
        return send({
            url: `/orders/confirmed`,
            method: 'GET',
            params: {
                LastOrderCode: lastOrderCode,
                Limit: limit,
                StartTime: startTime,
                EndTime: endTime,
                OrderSource: orderSource,
            },
        });
    }
    /**
     * 
     * @summary 待入库详情
     * @param string id 
     */
    public ordersConfirmedIdGet(id: string): Promise<ConfirmedOrderInfoCodeResult> {
        return send({
            url: `/orders/confirmed/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 待入库-分页
     * @param string? startTime 
     * @param string? endTime 
     * @param OrderType? orderType 
     * @param number? offset 
     * @param number? limit 
     */
    public ordersConfirmedPageGet(startTime?: string | null, endTime?: string | null, orderType?: OrderType, offset?: number, limit?: number): Promise<ConfirmedOrderInfoPaginationDataCodeResult> {
        return send({
            url: `/orders/confirmed/page`,
            method: 'GET',
            params: {
                StartTime: startTime,
                EndTime: endTime,
                OrderType: orderType,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 发送需求单
     * @param CreateOrderPlanFromRequirementReq? createOrderPlanFromRequirementReq 
     */
    public ordersCreateFromRequirementPost(createOrderPlanFromRequirementReq?: CreateOrderPlanFromRequirementReq): Promise<OrderPlanCreatedDto2CodeResult> {
        return send({
            url: `/orders/create-from-requirement`,
            method: 'POST',
            body: createOrderPlanFromRequirementReq,
        });
    }
    /**
     * 
     * @summary 创建采购单
     * @param CreateOrderPlanReq? createOrderPlanReq 
     */
    public ordersCreatePost(createOrderPlanReq?: CreateOrderPlanReq): Promise<OrderPlanCreatedDto2CodeResult> {
        return send({
            url: `/orders/create`,
            method: 'POST',
            body: createOrderPlanReq,
        });
    }
    /**
     * 
     * @summary 创建采购单v3
     * @param CreateOrderPlanReqV3? createOrderPlanReqV3 
     */
    public ordersCreateV3Post(createOrderPlanReqV3?: CreateOrderPlanReqV3): Promise<OrderPlanCreatedDtoV4CodeResult> {
        return send({
            url: `/orders/create/v3`,
            method: 'POST',
            body: createOrderPlanReqV3,
        });
    }
    /**
     * 
     * @summary 创建采购单v4
     * @param Array<CreateOrderPlanReqV3>? createOrderPlanReqV3 
     */
    public ordersCreateV4Post(createOrderPlanReqV3?: Array<CreateOrderPlanReqV3> | null): Promise<OrderPlanCreatedDtoV4CodeResult> {
        return send({
            url: `/orders/create/v4`,
            method: 'POST',
            body: createOrderPlanReqV3,
        });
    }
    /**
     * 
     * @summary 获取采购单详情
     * @param string orderCode 
     */
    public ordersDetailForSupplierByOrderCodeOrderCodeGet(orderCode: string | null): Promise<NewOrderPlanInfoCodeResult> {
        return send({
            url: `/orders/detail_for_supplier_by_orderCode/{orderCode}`
                .replace(`{${"orderCode"}}`, encodeURIComponent(String(orderCode))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取采购单的供货商
     * @param string orderPlanId 
     */
    public ordersDetailForSupplierOrderPlanIdGet(orderPlanId: string): Promise<NewOrderPlanInfoCodeResult> {
        return send({
            url: `/orders/detail_for_supplier/{orderPlanId}`
                .replace(`{${"orderPlanId"}}`, encodeURIComponent(String(orderPlanId))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 删除采购单食材
     * @param string orderPlanItemId 
     */
    public ordersItemDeleteOrderPlanItemIdDelete(orderPlanItemId: string): Promise<BooleanCodeResult> {
        return send({
            url: `/orders/item/delete/{orderPlanItemId}`
                .replace(`{${"orderPlanItemId"}}`, encodeURIComponent(String(orderPlanItemId))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @param Array<ModifyRemark>? modifyRemark 
     */
    public ordersModifyOrderplanItemRemarkPost(modifyRemark?: Array<ModifyRemark> | null): Promise<BooleanCodeResult> {
        return send({
            url: `/orders/modify-orderplan-item-remark`,
            method: 'POST',
            body: modifyRemark,
        });
    }
    /**
     * 
     * @param ModifyRequirementReq? modifyRequirementReq 
     */
    public ordersModifyOrderplanItemRequirementPost(modifyRequirementReq?: ModifyRequirementReq): Promise<BooleanCodeResult> {
        return send({
            url: `/orders/modify-orderplan-item-requirement`,
            method: 'POST',
            body: modifyRequirementReq,
        });
    }
    /**
     * 
     * @summary 更改送货配送时间
     * @param ModifyOrderTimeReq? modifyOrderTimeReq 
     */
    public ordersModifyTimePost(modifyOrderTimeReq?: ModifyOrderTimeReq): Promise<BooleanCodeResult> {
        return send({
            url: `/orders/modify-time`,
            method: 'POST',
            body: modifyOrderTimeReq,
        });
    }
    /**
     * 
     * @summary 是否需要分享
     * @param Array<string>? ids 
     */
    public ordersNeedShareGet(ids?: Array<string> | null): Promise<BooleanCodeResult> {
        return send({
            url: `/orders/need-share`,
            method: 'GET',
            params: {
                ids: ids,
            },
        });
    }
    /**
     * 
     * @summary 待采购列表页
     * @param string? lastOrderCode 
     * @param number? limit 
     * @param string? startTime 
     * @param string? endTime 
     * @param OrderSource? orderSource 
     */
    public ordersNewGet(lastOrderCode?: string | null, limit?: number, startTime?: string | null, endTime?: string | null, orderSource?: OrderSource): Promise<NewOrderPlanInfoListCodeResult> {
        return send({
            url: `/orders/new`,
            method: 'GET',
            params: {
                LastOrderCode: lastOrderCode,
                Limit: limit,
                StartTime: startTime,
                EndTime: endTime,
                OrderSource: orderSource,
            },
        });
    }
    /**
     * 
     * @summary 根据ID获取待采购
     * @param string id 
     */
    public ordersNewIdGet(id: string): Promise<NewOrderPlanInfoCodeResult> {
        return send({
            url: `/orders/new/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 分页获取待采购
     * @param string? startTime 
     * @param string? endTime 
     * @param OrderType? orderType 
     * @param number? offset 
     * @param number? limit 
     */
    public ordersNewPageGet(startTime?: string | null, endTime?: string | null, orderType?: OrderType, offset?: number, limit?: number): Promise<NewOrderPlanInfoPaginationDataCodeResult> {
        return send({
            url: `/orders/new/page`,
            method: 'GET',
            params: {
                StartTime: startTime,
                EndTime: endTime,
                OrderType: orderType,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 删除采购单
     * @param string orderPlanId 
     */
    public ordersOrderPlanDeleteOrderPlanIdDelete(orderPlanId: string): Promise<BooleanCodeResult> {
        return send({
            url: `/orders/orderPlan/delete/{orderPlanId}`
                .replace(`{${"orderPlanId"}}`, encodeURIComponent(String(orderPlanId))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取供货商报价
     * @param string orderPlanId 
     */
    public ordersReplyDetailsOrderPlanIdGet(orderPlanId: string): Promise<ConfirmDetailsCodeResult> {
        return send({
            url: `/orders/reply-details/{orderPlanId}`
                .replace(`{${"orderPlanId"}}`, encodeURIComponent(String(orderPlanId))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 分享采购单的二维码
     * @param string orderCode 
     */
    public ordersShareOrderPlanOrderCodeGet(orderCode: string | null): Promise<QrCodeImageCodeResult> {
        return send({
            url: `/orders/share/orderPlan/{orderCode}`
                .replace(`{${"orderCode"}}`, encodeURIComponent(String(orderCode))),
            method: 'GET',
        });
    }
}

/**
 * SchoolOrderPlanApi - instance
 */
export const SchoolOrderPlanApiInstance = new SchoolOrderPlanApi();

