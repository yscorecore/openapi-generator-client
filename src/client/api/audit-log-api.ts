/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AuditLogDtoPaginationDataCodeResult } from "../models"
import type { ParamsOfAuditLogIEnumerableCodeResult } from "../models"

/**
 * AuditLogApi - API class
 */
export class AuditLogApi {
    /**
     * 
     * @summary 获取所有的操作日志类型
     */
    public auditlogGettypenamesGet(): Promise<ParamsOfAuditLogIEnumerableCodeResult> {
        return send({
            url: `/auditlog/gettypenames`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 审计日志列表
     * @param string? startDate 
     * @param string? endDate 
     * @param string? typeName 
     * @param string? requestIP 
     * @param string? desciptipn 
     * @param string? createUser 
     * @param boolean? success 
     * @param number? offset 
     * @param number? limit 
     */
    public auditlogSchoolauditlogGet(startDate?: string | null, endDate?: string | null, typeName?: string | null, requestIP?: string | null, desciptipn?: string | null, createUser?: string | null, success?: boolean | null, offset?: number, limit?: number): Promise<AuditLogDtoPaginationDataCodeResult> {
        return send({
            url: `/auditlog/schoolauditlog`,
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                TypeName: typeName,
                RequestIP: requestIP,
                Desciptipn: desciptipn,
                CreateUser: createUser,
                Success: success,
                Offset: offset,
                Limit: limit,
            },
        });
    }
}

/**
 * AuditLogApi - instance
 */
export const AuditLogApiInstance = new AuditLogApi();

