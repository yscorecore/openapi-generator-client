/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CertExpiredDetails } from "../models"
import type { DataExceptionDetails } from "../models"
import type { ExceptionType } from "../models"
import type { OperationExceptionDetails } from "../models"
import type { OutOfDateDetails } from "../models"
import type { SchoolEventDtoPaginationData } from "../models"
import type { SchoolEventProcessDto } from "../models"
import type { SystemAnomaly } from "../models"

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
    public schooleventCertExpiredDetailsGet(id?: string, type?: ExceptionType): Promise<CertExpiredDetails> {
        return send({
            url: '/schoolevent/certExpiredDetails',
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
    public schooleventDataGet(starTime?: string | null, endTime?: string | null, category?: ExceptionType, detailCount?: number | null, summaryClassification?: string | null, offset?: number, limit?: number): Promise<SchoolEventDtoPaginationData> {
        return send({
            url: '/schoolevent/data',
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
    public schooleventDataexceptiondetailsGet(id?: string, type?: ExceptionType): Promise<DataExceptionDetails> {
        return send({
            url: '/schoolevent/dataexceptiondetails',
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
    public schooleventOperationexceptionGet(id?: string, type?: ExceptionType): Promise<OperationExceptionDetails> {
        return send({
            url: '/schoolevent/operationexception',
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
    public schooleventOutofdatedetailsGet(id?: string, type?: ExceptionType): Promise<OutOfDateDetails> {
        return send({
            url: '/schoolevent/outofdatedetails',
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
    public schooleventProcessPost(schoolEventProcessDto?: SchoolEventProcessDto): Promise<void> {
        return send({
            url: '/schoolevent/process',
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
    public schooleventSystemanomailyGet(id?: string, type?: ExceptionType): Promise<SystemAnomaly> {
        return send({
            url: '/schoolevent/systemanomaily',
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

