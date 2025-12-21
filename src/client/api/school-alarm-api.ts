/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AlarmEventDto } from "../models"
import type { AlarmEventDtoPaginationData } from "../models"
import type { AlarmType } from "../models"
import type { UploadAlarmEventReq } from "../models"

/**
 * SchoolAlarmApi - API class
 */
export class SchoolAlarmApi {
    /**
     * 
     * @summary 获取告警信息
     * @param number? topN 
     * @param string? dateTime 
     * @param boolean? sort 
     */
    public alarmGet(topN?: number, dateTime?: string | null, sort?: boolean): Promise<Array<AlarmEventDto>> {
        return send({
            url: '/alarm',
            method: 'GET',
            params: {
                topN: topN,
                dateTime: dateTime,
                sort: sort,
            },
        });
    }
    /**
     * 
     * @summary 获取告警列表
     * @param AlarmType? alarmType 
     * @param string? startDate 
     * @param string? endDate 
     * @param number? offset 
     * @param number? limit 
     */
    public alarmListGet(alarmType?: AlarmType, startDate?: string | null, endDate?: string | null, offset?: number, limit?: number): Promise<AlarmEventDtoPaginationData> {
        return send({
            url: '/alarm/list',
            method: 'GET',
            params: {
                AlarmType: alarmType,
                StartDate: startDate,
                EndDate: endDate,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 异常上报
     * @param UploadAlarmEventReq? uploadAlarmEventReq 
     */
    public alarmPost(uploadAlarmEventReq?: UploadAlarmEventReq): Promise<void> {
        return send({
            url: '/alarm',
            method: 'POST',
            body: uploadAlarmEventReq,
        });
    }
}

/**
 * SchoolAlarmApi - instance
 */
export const SchoolAlarmApiInstance = new SchoolAlarmApi();

