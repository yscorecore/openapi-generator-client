/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { CodeResult } from "../models"
import type { CreatePatrolRecordDto } from "../models"
import type { GuidCodeResult } from "../models"
import type { ModifyPatrolRecordDto } from "../models"
import type { PointPatrolRecordDtoPaginationDataCodeResult } from "../models"
import type { PointPatrolTypeDtoPaginationDataCodeResult } from "../models"

/**
 * SchoolPointPatrolApi - API class
 */
export class SchoolPointPatrolApi {
    /**
     * 
     * @summary 审核记录
     * @param string id 
     */
    public pointPatrolAuditIdPost(id: string): Promise<CodeResult> {
        return send({
            url: `/point-patrol/audit/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'POST',
        });
    }
    /**
     * 
     * @summary 删除打卡
     * @param string id 
     */
    public pointPatrolIdDelete(id: string): Promise<CodeResult> {
        return send({
            url: `/point-patrol/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 提交打卡
     * @param CreatePatrolRecordDto? createPatrolRecordDto 
     */
    public pointPatrolPost(createPatrolRecordDto?: CreatePatrolRecordDto): Promise<GuidCodeResult> {
        return send({
            url: `/point-patrol`,
            method: 'POST',
            body: createPatrolRecordDto,
        });
    }
    /**
     * 
     * @summary 更新打卡记录
     * @param ModifyPatrolRecordDto? modifyPatrolRecordDto 
     */
    public pointPatrolPut(modifyPatrolRecordDto?: ModifyPatrolRecordDto): Promise<CodeResult> {
        return send({
            url: `/point-patrol`,
            method: 'PUT',
            body: modifyPatrolRecordDto,
        });
    }
    /**
     * 
     * @summary 获取打卡记录
     * @param number? type 
     * @param string? startTime 
     * @param string? endTime 
     * @param number? offset 
     * @param number? limit 
     */
    public pointPatrolRecordsGet(type?: number | null, startTime?: string | null, endTime?: string | null, offset?: number, limit?: number): Promise<PointPatrolRecordDtoPaginationDataCodeResult> {
        return send({
            url: `/point-patrol/records`,
            method: 'GET',
            params: {
                Type: type,
                StartTime: startTime,
                EndTime: endTime,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 获取打卡类型
     * @param number? offset 
     * @param number? limit 
     */
    public pointPatrolTypesGet(offset?: number, limit?: number): Promise<PointPatrolTypeDtoPaginationDataCodeResult> {
        return send({
            url: `/point-patrol/types`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
            },
        });
    }
}

/**
 * SchoolPointPatrolApi - instance
 */
export const SchoolPointPatrolApiInstance = new SchoolPointPatrolApi();

