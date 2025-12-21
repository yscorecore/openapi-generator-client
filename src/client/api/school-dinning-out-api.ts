/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BatchStudentDiningDto } from "../models"
import type { DiningCostDtoByOrderTypePaginationData } from "../models"
import type { DiningOutDetailsDto } from "../models"
import type { DiningOutDtoPaginationData } from "../models"
import type { MealKind } from "../models"
import type { MealkindDiner } from "../models"
import type { ModifyTotalCountReq } from "../models"
import type { OrderType } from "../models"
import type { ReportReq } from "../models"
import type { SaveStudentDinningDto } from "../models"

/**
 * SchoolDinningOutApi - API class
 */
export class SchoolDinningOutApi {
    /**
     * 
     * @summary 
     */
    public dinningoutAvailableDinneroutsGet(): Promise<Array<MealkindDiner>> {
        return send({
            url: '/dinningout/available-dinnerouts',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 批量查询出餐记录
     * @param Array<string>? requestBody 
     */
    public dinningoutBatchDetailsPost(requestBody?: Array<string> | null): Promise<Array<DiningOutDetailsDto>> {
        return send({
            url: '/dinningout/batch-details',
            method: 'POST',
            body: requestBody,
        });
    }
    /**
     * 
     * @param Array<BatchStudentDiningDto>? batchStudentDiningDto 
     */
    public dinningoutBatchSaveStudentDiningPost(batchStudentDiningDto?: Array<BatchStudentDiningDto> | null): Promise<void> {
        return send({
            url: '/dinningout/batch-save-student-dining',
            method: 'POST',
            body: batchStudentDiningDto,
        });
    }
    /**
     * 
     * @summary 根据ID查询出餐记录
     * @param string? id 
     */
    public dinningoutDetailsGet(id?: string): Promise<DiningOutDetailsDto> {
        return send({
            url: '/dinningout/details',
            method: 'GET',
            params: {
                id: id,
            },
        });
    }
    /**
     * 
     * @summary 删除出餐记录
     * @param string id 
     */
    public dinningoutIdDelete(id: string): Promise<void> {
        return send({
            url: '/dinningout/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 根据订单类型查询出餐记录
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? kind 
     * @param OrderType? orderType 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public dinningoutListByOrderTypeGet(startDate?: string | null, endDate?: string | null, kind?: MealKind, orderType?: OrderType, schoolId?: string | null, offset?: number, limit?: number): Promise<DiningCostDtoByOrderTypePaginationData> {
        return send({
            url: '/dinningout/listByOrderType',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                Kind: kind,
                OrderType: orderType,
                SchoolId: schoolId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 查询出餐记录
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? kind 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public dinningoutListGet(startDate?: string | null, endDate?: string | null, kind?: MealKind, schoolId?: string | null, offset?: number, limit?: number): Promise<DiningOutDtoPaginationData> {
        return send({
            url: '/dinningout/list',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                Kind: kind,
                SchoolId: schoolId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 修改出餐人数
     * @param ModifyTotalCountReq? modifyTotalCountReq 
     */
    public dinningoutModifyCountPost(modifyTotalCountReq?: ModifyTotalCountReq): Promise<void> {
        return send({
            url: '/dinningout/modify-count',
            method: 'POST',
            body: modifyTotalCountReq,
        });
    }
    /**
     * 
     * @summary 人数上报
     * @param ReportReq? reportReq 
     */
    public dinningoutReportTo3rdPost(reportReq?: ReportReq): Promise<void> {
        return send({
            url: '/dinningout/report-to-3rd',
            method: 'POST',
            body: reportReq,
        });
    }
    /**
     * 
     * @summary 保存学生出餐
     * @param SaveStudentDinningDto? saveStudentDinningDto 
     */
    public dinningoutSaveStudentDinningPost(saveStudentDinningDto?: SaveStudentDinningDto): Promise<void> {
        return send({
            url: '/dinningout/save-student-dinning',
            method: 'POST',
            body: saveStudentDinningDto,
        });
    }
}

/**
 * SchoolDinningOutApi - instance
 */
export const SchoolDinningOutApiInstance = new SchoolDinningOutApi();

