/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AccompanyKind } from "../models"
import type { AccompanyRecordDto } from "../models"
import type { AccompanyRecordDtoPaginationData } from "../models"
import type { AccompanyUserDto } from "../models"
import type { BatchCreateAccompanyDto } from "../models"
import type { CreateAccompanyDto } from "../models"
import type { CreatePublicAccompanyDto } from "../models"
import type { LeaderMealComment } from "../models"
import type { MealKind } from "../models"
import type { PutAccompanyDto } from "../models"
import type { UpdateMode } from "../models"

/**
 * SchoolAccompanyApi - API class
 */
export class SchoolAccompanyApi {
    /**
     * 
     * @summary 批量陪餐导入
     * @param Array<CreateAccompanyDto>? createAccompanyDto 
     */
    public accompanyBatchCreateAccompanyPost(createAccompanyDto?: Array<CreateAccompanyDto> | null): Promise<void> {
        return send({
            url: '/accompany/batch-create-accompany',
            method: 'POST',
            body: createAccompanyDto,
        });
    }
    /**
     * 
     * @summary 批量创建陪餐/共餐记录
     * @param UpdateMode? mode 
     * @param Array<BatchCreateAccompanyDto>? batchCreateAccompanyDto 
     */
    public accompanyBatchCreatePost(mode?: UpdateMode, batchCreateAccompanyDto?: Array<BatchCreateAccompanyDto> | null): Promise<void> {
        return send({
            url: '/accompany/batch-create',
            method: 'POST',
            params: {
                mode: mode,
            },
            body: batchCreateAccompanyDto,
        });
    }
    /**
     * 
     * @summary 批量删除陪餐/共餐记录
     * @param Array<string>? requestBody 
     */
    public accompanyBatchDeletePost(requestBody?: Array<string> | null): Promise<number> {
        return send({
            url: '/accompany/batch-delete',
            method: 'POST',
            body: requestBody,
        });
    }
    /**
     * 
     * @summary \"删除陪餐/共餐记录
     * @param string? id 
     */
    public accompanyDelete(id?: string): Promise<boolean> {
        return send({
            url: '/accompany',
            method: 'DELETE',
            params: {
                id: id,
            },
        });
    }
    /**
     * 
     * @param string id 
     */
    public accompanyDeleteAccompantUsersIdDelete(id: string): Promise<boolean> {
        return send({
            url: '/accompany/deleteAccompantUsers/{Id}'
                .replace(`{${"Id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 陪餐记录
     * @param string? startDate 
     * @param string? endDate 
     * @param AccompanyKind? accompanyKind 
     */
    public accompanyListGet(startDate?: string, endDate?: string, accompanyKind?: AccompanyKind): Promise<Array<AccompanyRecordDto>> {
        return send({
            url: '/accompany/list',
            method: 'GET',
            params: {
                startDate: startDate,
                endDate: endDate,
                accompanyKind: accompanyKind,
            },
        });
    }
    /**
     * 
     * @summary 分页获取陪餐记录
     * @param Array<AccompanyKind>? accompanyKinds 
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? kind 
     * @param boolean? isNutritious 
     * @param LeaderMealComment? score 
     * @param boolean? isPublic 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public accompanyPaginationQueryGet(accompanyKinds?: Array<AccompanyKind> | null, startDate?: string | null, endDate?: string | null, kind?: MealKind, isNutritious?: boolean | null, score?: LeaderMealComment, isPublic?: boolean | null, schoolId?: string | null, offset?: number, limit?: number): Promise<AccompanyRecordDtoPaginationData> {
        return send({
            url: '/accompany/pagination-query',
            method: 'GET',
            params: {
                AccompanyKinds: accompanyKinds,
                StartDate: startDate,
                EndDate: endDate,
                Kind: kind,
                IsNutritious: isNutritious,
                Score: score,
                IsPublic: isPublic,
                SchoolId: schoolId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 创建陪餐/共餐记录
     * @param CreateAccompanyDto? createAccompanyDto 
     */
    public accompanyPost(createAccompanyDto?: CreateAccompanyDto): Promise<string> {
        return send({
            url: '/accompany',
            method: 'POST',
            body: createAccompanyDto,
        });
    }
    /**
     * 
     * @summary 查询外部陪餐
     * @param string? lastTime 
     * @param number? limit 
     */
    public accompanyPublicListGet(lastTime?: string | null, limit?: number): Promise<Array<AccompanyRecordDto>> {
        return send({
            url: '/accompany/public/list',
            method: 'GET',
            params: {
                lastTime: lastTime,
                limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 创建外部陪餐
     * @param CreatePublicAccompanyDto? createPublicAccompanyDto 
     */
    public accompanyPublicPost(createPublicAccompanyDto?: CreatePublicAccompanyDto): Promise<string> {
        return send({
            url: '/accompany/public',
            method: 'POST',
            body: createPublicAccompanyDto,
        });
    }
    /**
     * 
     * @summary 获取陪餐码
     * @param string? school 
     * @param boolean? isHyaline 
     */
    public accompanyShowcodeGet(school?: string, isHyaline?: boolean): Promise<void> {
        return send({
            url: '/accompany/showcode',
            method: 'GET',
            params: {
                school: school,
                is_hyaline: isHyaline,
            },
        });
    }
    /**
     * 
     * @summary 更新陪餐用户信息
     * @param PutAccompanyDto? putAccompanyDto 
     */
    public accompanyUpdateUserPut(putAccompanyDto?: PutAccompanyDto): Promise<boolean> {
        return send({
            url: '/accompany/update-user',
            method: 'PUT',
            body: putAccompanyDto,
        });
    }
    /**
     * 
     * @summary 陪���用户数量
     * @param AccompanyKind? accompanyKind 
     */
    public accompanyUsersCountGet(accompanyKind?: AccompanyKind): Promise<number> {
        return send({
            url: '/accompany/users/count',
            method: 'GET',
            params: {
                accompanyKind: accompanyKind,
            },
        });
    }
    /**
     * 
     * @summary 获取所有的陪餐用户
     */
    public accompanyUsersGet(): Promise<Array<AccompanyUserDto>> {
        return send({
            url: '/accompany/users',
            method: 'GET',
        });
    }
}

/**
 * SchoolAccompanyApi - instance
 */
export const SchoolAccompanyApiInstance = new SchoolAccompanyApi();

