/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CertExpiredDetailsCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { DataExceptionDetailsCodeResult } from "../models"
import type { ExceptionType } from "../models"
import type { OperationExceptionDetailsCodeResult } from "../models"
import type { OutOfDateDetailsCodeResult } from "../models"
import type { SchoolEventDtoPaginationDataCodeResult } from "../models"
import type { SchoolEventProcessDto } from "../models"
import type { SystemAnomalyCodeResult } from "../models"

/**
 * SchoolEventApi - API class
 */
export class SchoolEventApi {
    /**
     * 
     * @summary 证件过期
     * @param string? id 
     * @param ExceptionType? type 
     */
    public schooleventCertExpiredDetailsGet(id?: string, type?: ExceptionType): Promise<CertExpiredDetailsCodeResult> {
        return send({
            url: `/schoolevent/certExpiredDetails`,
            method: 'GET',
            params: {
                id: id,
                type: type,
            },
        });
    }
    /**
     * 
     * @summary 异常消息列表
     * @param string? starTime 
     * @param string? endTime 
     * @param ExceptionType? category 
     * @param number? detailCount 
     * @param string? summaryClassification 
     * @param number? offset 
     * @param number? limit 
     */
    public schooleventDataGet(starTime?: string | null, endTime?: string | null, category?: ExceptionType, detailCount?: number | null, summaryClassification?: string | null, offset?: number, limit?: number): Promise<SchoolEventDtoPaginationDataCodeResult> {
        return send({
            url: `/schoolevent/data`,
            method: 'GET',
            params: {
                StarTime: starTime,
                EndTime: endTime,
                Category: category,
                DetailCount: detailCount,
                SummaryClassification: summaryClassification,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 数据异常详情
     * @param string? id 
     * @param ExceptionType? type 
     */
    public schooleventDataexceptiondetailsGet(id?: string, type?: ExceptionType): Promise<DataExceptionDetailsCodeResult> {
        return send({
            url: `/schoolevent/dataexceptiondetails`,
            method: 'GET',
            params: {
                id: id,
                type: type,
            },
        });
    }
    /**
     * 
     * @summary 操作异常详情
     * @param string? id 
     * @param ExceptionType? type 
     */
    public schooleventOperationexceptionGet(id?: string, type?: ExceptionType): Promise<OperationExceptionDetailsCodeResult> {
        return send({
            url: `/schoolevent/operationexception`,
            method: 'GET',
            params: {
                id: id,
                type: type,
            },
        });
    }
    /**
     * 
     * @summary 过期商品详情
     * @param string? id 
     * @param ExceptionType? type 
     */
    public schooleventOutofdatedetailsGet(id?: string, type?: ExceptionType): Promise<OutOfDateDetailsCodeResult> {
        return send({
            url: `/schoolevent/outofdatedetails`,
            method: 'GET',
            params: {
                id: id,
                type: type,
            },
        });
    }
    /**
     * 
     * @summary 设置学校异常通知消息为已完成
     * @param SchoolEventProcessDto? schoolEventProcessDto 
     */
    public schooleventProcessPost(schoolEventProcessDto?: SchoolEventProcessDto): Promise<CodeResult> {
        return send({
            url: `/schoolevent/process`,
            method: 'POST',
            body: schoolEventProcessDto,
        });
    }
    /**
     * 
     * @summary 设备异常详情
     * @param string? id 
     * @param ExceptionType? type 
     */
    public schooleventSystemanomailyGet(id?: string, type?: ExceptionType): Promise<SystemAnomalyCodeResult> {
        return send({
            url: `/schoolevent/systemanomaily`,
            method: 'GET',
            params: {
                id: id,
                type: type,
            },
        });
    }
}

/**
 * SchoolEventApi - instance
 */
export const SchoolEventApiInstance = new SchoolEventApi();

