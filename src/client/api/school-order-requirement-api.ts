/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BatchCreateOrderRequirementReq } from "../models"
import type { BooleanCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { CreateOrderRequirementReq } from "../models"
import type { GuidCodeResult } from "../models"
import type { ModifyOrderRequirementReq } from "../models"
import type { OrderRequirementDetailResCodeResult } from "../models"
import type { OrderRequirementResPaginationDataCodeResult } from "../models"
import type { OrderRequirementStatus } from "../models"
import type { RejectRequirement } from "../models"
import type { UploadRequirementReq } from "../models"

/**
 * SchoolOrderRequirementApi - API class
 */
export class SchoolOrderRequirementApi {
    /**
     * 
     * @summary 批量创建需求单
     * @param BatchCreateOrderRequirementReq? batchCreateOrderRequirementReq 
     */
    public orderRequirementBatchPost(batchCreateOrderRequirementReq?: BatchCreateOrderRequirementReq): Promise<CodeResult> {
        return send({
            url: '/order-requirement/batch',
            method: 'POST',
            body: batchCreateOrderRequirementReq,
        });
    }
    /**
     * 
     * @summary 分页获取需求单
     * @param OrderRequirementStatus? status 
     * @param string? startDate 
     * @param string? endDate 
     * @param number? offset 
     * @param number? limit 
     */
    public orderRequirementGet(status?: OrderRequirementStatus, startDate?: string | null, endDate?: string | null, offset?: number, limit?: number): Promise<OrderRequirementResPaginationDataCodeResult> {
        return send({
            url: '/order-requirement',
            method: 'GET',
            params: {
                Status: status,
                StartDate: startDate,
                EndDate: endDate,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 删除需求单
     * @param string id 
     */
    public orderRequirementIdDelete(id: string): Promise<CodeResult> {
        return send({
            url: '/order-requirement/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取需求单详情-
     * @param string id 
     */
    public orderRequirementIdGet(id: string): Promise<OrderRequirementDetailResCodeResult> {
        return send({
            url: '/order-requirement/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 创建需求单
     * @param CreateOrderRequirementReq? createOrderRequirementReq 
     */
    public orderRequirementPost(createOrderRequirementReq?: CreateOrderRequirementReq): Promise<GuidCodeResult> {
        return send({
            url: '/order-requirement',
            method: 'POST',
            body: createOrderRequirementReq,
        });
    }
    /**
     * 
     * @summary 更新需求单
     * @param ModifyOrderRequirementReq? modifyOrderRequirementReq 
     */
    public orderRequirementPut(modifyOrderRequirementReq?: ModifyOrderRequirementReq): Promise<BooleanCodeResult> {
        return send({
            url: '/order-requirement',
            method: 'PUT',
            body: modifyOrderRequirementReq,
        });
    }
    /**
     * 
     * @summary 驳回
     * @param RejectRequirement? rejectRequirement 
     */
    public orderRequirementRejectedPost(rejectRequirement?: RejectRequirement): Promise<CodeResult> {
        return send({
            url: '/order-requirement/rejected',
            method: 'POST',
            body: rejectRequirement,
        });
    }
    /**
     * 
     * @summary 需求单上报
     * @param UploadRequirementReq? uploadRequirementReq 
     */
    public orderRequirementUploadRequirementPost(uploadRequirementReq?: UploadRequirementReq): Promise<CodeResult> {
        return send({
            url: '/order-requirement/uploadRequirement',
            method: 'POST',
            body: uploadRequirementReq,
        });
    }
}

/**
 * SchoolOrderRequirementApi - instance
 */
export const SchoolOrderRequirementApiInstance = new SchoolOrderRequirementApi();

