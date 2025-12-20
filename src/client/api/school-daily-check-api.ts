/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BooleanCodeResult } from "../models"
import type { CheckType } from "../models"
import type { CreateDailyCheckDto } from "../models"
import type { DailyCheckDtoPaginationDataCodeResult } from "../models"
import type { UpdateDailyCheckDto } from "../models"

/**
 * SchoolDailyCheckApi - API class
 */
export class SchoolDailyCheckApi {
    /**
     * 
     * @summary 新增每日检查
     * @param CreateDailyCheckDto? createDailyCheckDto 
     */
    public morningcheckAddPost(createDailyCheckDto?: CreateDailyCheckDto): Promise<BooleanCodeResult> {
        return send({
            url: '/morningcheck/add',
            method: 'POST',
            body: createDailyCheckDto,
        });
    }
    /**
     * 
     * @summary 删除每日检查
     * @param string id 
     */
    public morningcheckIdDelete(id: string): Promise<BooleanCodeResult> {
        return send({
            url: '/morningcheck/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 查询每日检查
     * @param string? startDate 
     * @param string? endDate 
     * @param string? name 
     * @param CheckType? checkType 
     * @param boolean? passed 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public morningcheckListGet(startDate?: string | null, endDate?: string | null, name?: string | null, checkType?: CheckType, passed?: boolean | null, schoolId?: string | null, offset?: number, limit?: number): Promise<DailyCheckDtoPaginationDataCodeResult> {
        return send({
            url: '/morningcheck/list',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                Name: name,
                CheckType: checkType,
                Passed: passed,
                SchoolId: schoolId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 晨检仪上报每日检查
     * @param File file 
     * @param string userId 
     * @param number temperature 
     * @param File? frontFile 
     * @param string? createTime 
     * @param Array<string>? exceptions 
     * @param boolean? isPersonReport 
     */
    public morningcheckPost(file: File, userId: string, temperature: number, frontFile?: File | null, createTime?: string | null, exceptions?: Array<string> | null, isPersonReport?: boolean | null): Promise<BooleanCodeResult> {
        return send({
            url: '/morningcheck',
            method: 'POST',
            forms: {
                File: file,
                FrontFile: frontFile,
                UserId: userId,
                Temperature: temperature,
                CreateTime: createTime,
                Exceptions: exceptions,
                IsPersonReport: isPersonReport,
            },
        });
    }
    /**
     * 
     * @summary 检查上报
     * @param UpdateDailyCheckDto? updateDailyCheckDto 
     */
    public morningcheckPut(updateDailyCheckDto?: UpdateDailyCheckDto): Promise<BooleanCodeResult> {
        return send({
            url: '/morningcheck',
            method: 'PUT',
            body: updateDailyCheckDto,
        });
    }
}

/**
 * SchoolDailyCheckApi - instance
 */
export const SchoolDailyCheckApiInstance = new SchoolDailyCheckApi();

