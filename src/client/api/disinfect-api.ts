/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BooleanCodeResult } from "../models"
import type { DisinfectDtoPaginationDataCodeResult } from "../models"
import type { DisinfectReq } from "../models"
import type { DisinfectTarget } from "../models"
import type { DisinfectWay } from "../models"

/**
 * DisinfectApi - API class
 */
export class DisinfectApi {
    /**
     * 
     * @summary 查询消杀记录
     * @param string? startDate 
     * @param string? endDate 
     * @param DisinfectTarget? target 
     * @param DisinfectWay? way 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public disinfectGet(startDate?: string, endDate?: string, target?: DisinfectTarget, way?: DisinfectWay, schoolId?: string | null, offset?: number, limit?: number): Promise<DisinfectDtoPaginationDataCodeResult> {
        return send({
            url: `/disinfect`,
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                Target: target,
                Way: way,
                SchoolId: schoolId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 删除消杀记录
     * @param string id 
     */
    public disinfectIdDelete(id: string): Promise<BooleanCodeResult> {
        return send({
            url: `/disinfect/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 新增消杀记录
     * @param DisinfectReq? disinfectReq 
     */
    public disinfectPost(disinfectReq?: DisinfectReq): Promise<BooleanCodeResult> {
        return send({
            url: `/disinfect`,
            method: 'POST',
            body: disinfectReq,
        });
    }
}

/**
 * DisinfectApi - instance
 */
export const DisinfectApiInstance = new DisinfectApi();

