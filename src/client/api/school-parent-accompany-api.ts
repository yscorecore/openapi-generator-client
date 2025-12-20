/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AddParentAccompanyDto } from "../models"
import type { AuditRequestDto } from "../models"
import type { CodeResult } from "../models"
import type { EditParentAccompanyDto } from "../models"
import type { GuidCodeResult } from "../models"
import type { ParentAccompanyPlanDetailDtoCodeResult } from "../models"
import type { ParentAccompanyPlanDtoPaginationDataCodeResult } from "../models"

/**
 * SchoolParentAccompanyApi - API class
 */
export class SchoolParentAccompanyApi {
    /**
     * 
     * @summary 家长陪餐审核
     * @param AuditRequestDto? auditRequestDto 
     */
    public parentAccompanyAuditPost(auditRequestDto?: AuditRequestDto): Promise<CodeResult> {
        return send({
            url: '/parent-accompany/audit',
            method: 'POST',
            body: auditRequestDto,
        });
    }
    /**
     * 
     * @summary 获取家长陪餐详情
     * @param string id 
     */
    public parentAccompanyPlanIdGet(id: string): Promise<ParentAccompanyPlanDetailDtoCodeResult> {
        return send({
            url: '/parent-accompany/plan/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 查询家长陪餐列表
     * @param string? startTime 
     * @param number? offset 
     * @param number? limit 
     */
    public parentAccompanyPlanListGet(startTime?: string | null, offset?: number, limit?: number): Promise<ParentAccompanyPlanDtoPaginationDataCodeResult> {
        return send({
            url: '/parent-accompany/plan/list',
            method: 'GET',
            params: {
                StartTime: startTime,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 创建陪餐计划
     * @param AddParentAccompanyDto? addParentAccompanyDto 
     */
    public parentAccompanyPlanPost(addParentAccompanyDto?: AddParentAccompanyDto): Promise<GuidCodeResult> {
        return send({
            url: '/parent-accompany/plan',
            method: 'POST',
            body: addParentAccompanyDto,
        });
    }
    /**
     * 
     * @summary 更改家长陪餐
     * @param EditParentAccompanyDto? editParentAccompanyDto 
     */
    public parentAccompanyPlanPut(editParentAccompanyDto?: EditParentAccompanyDto): Promise<CodeResult> {
        return send({
            url: '/parent-accompany/plan',
            method: 'PUT',
            body: editParentAccompanyDto,
        });
    }
}

/**
 * SchoolParentAccompanyApi - instance
 */
export const SchoolParentAccompanyApiInstance = new SchoolParentAccompanyApi();

