/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AuditState } from "../models"
import type { BooleanCodeResult } from "../models"
import type { OperationAuditDto } from "../models"
import type { OperationAuditInfo } from "../models"
import type { OperationAuditResPaginationDataCodeResult } from "../models"

/**
 * SchoolOperationAuditApi - API class
 */
export class SchoolOperationAuditApi {
    /**
     * 
     * @summary 查询数据审核
     * @param string? startTime 
     * @param string? endTime 
     * @param AuditState? state 
     * @param number? offset 
     * @param number? limit 
     */
    public operationauditGetGet(startTime?: string | null, endTime?: string | null, state?: AuditState, offset?: number, limit?: number): Promise<OperationAuditResPaginationDataCodeResult> {
        return send({
            url: `/operationaudit/get`,
            method: 'GET',
            params: {
                StartTime: startTime,
                EndTime: endTime,
                State: state,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 删除数据审核
     * @param string id 
     */
    public operationauditIdDelete(id: string): Promise<BooleanCodeResult> {
        return send({
            url: `/operationaudit/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 添加数据审核
     * @param OperationAuditDto? operationAuditDto 
     */
    public operationauditPostPost(operationAuditDto?: OperationAuditDto): Promise<BooleanCodeResult> {
        return send({
            url: `/operationaudit/post`,
            method: 'POST',
            body: operationAuditDto,
        });
    }
    /**
     * 
     * @summary 更新数据审核
     * @param OperationAuditInfo? operationAuditInfo 
     */
    public operationauditUpdateoperationauditPut(operationAuditInfo?: OperationAuditInfo): Promise<BooleanCodeResult> {
        return send({
            url: `/operationaudit/updateoperationaudit`,
            method: 'PUT',
            body: operationAuditInfo,
        });
    }
}

/**
 * SchoolOperationAuditApi - instance
 */
export const SchoolOperationAuditApiInstance = new SchoolOperationAuditApi();

