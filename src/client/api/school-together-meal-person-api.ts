/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BooleanCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { GuidCodeResult } from "../models"
import type { TogetherMealPersonCreateDto } from "../models"
import type { TogetherMealPersonDto } from "../models"
import type { TogetherMealPersonDtoPaginationDataCodeResult } from "../models"
import type { TogetherPersonByAnonymous } from "../models"

/**
 * SchoolTogetherMealPersonApi - API class
 */
export class SchoolTogetherMealPersonApi {
    /**
     * 
     * @summary 创建共餐人
     * @param TogetherPersonByAnonymous? togetherPersonByAnonymous 
     */
    public togetherMealPersonsAnonymousCreatePost(togetherPersonByAnonymous?: TogetherPersonByAnonymous): Promise<CodeResult> {
        return send({
            url: '/TogetherMealPersons/anonymous/create',
            method: 'POST',
            body: togetherPersonByAnonymous,
        });
    }
    /**
     * 
     * @summary 批量添加共餐人员
     * @param Array<TogetherMealPersonCreateDto>? togetherMealPersonCreateDto 
     */
    public togetherMealPersonsBatchCreatePost(togetherMealPersonCreateDto?: Array<TogetherMealPersonCreateDto> | null): Promise<CodeResult> {
        return send({
            url: '/TogetherMealPersons/batch-create',
            method: 'POST',
            body: togetherMealPersonCreateDto,
        });
    }
    /**
     * 
     * @summary 批量删除共餐
     * @param Array<string>? requestBody 
     */
    public togetherMealPersonsBatchDelete(requestBody?: Array<string> | null): Promise<BooleanCodeResult> {
        return send({
            url: '/TogetherMealPersons/batch',
            method: 'DELETE',
            body: requestBody,
        });
    }
    /**
     * 
     * @summary 添加共餐人员
     * @param TogetherMealPersonCreateDto? togetherMealPersonCreateDto 
     */
    public togetherMealPersonsCreatePost(togetherMealPersonCreateDto?: TogetherMealPersonCreateDto): Promise<GuidCodeResult> {
        return send({
            url: '/TogetherMealPersons/create',
            method: 'POST',
            body: togetherMealPersonCreateDto,
        });
    }
    /**
     * 
     * @summary 删除共餐
     * @param string id 
     */
    public togetherMealPersonsIdDelete(id: string): Promise<BooleanCodeResult> {
        return send({
            url: '/TogetherMealPersons/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取共餐人员列表
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public togetherMealPersonsListGet(schoolId?: string | null, offset?: number, limit?: number): Promise<TogetherMealPersonDtoPaginationDataCodeResult> {
        return send({
            url: '/TogetherMealPersons/list',
            method: 'GET',
            params: {
                SchoolId: schoolId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 更新共餐人信息
     * @param TogetherMealPersonDto? togetherMealPersonDto 
     */
    public togetherMealPersonsPut(togetherMealPersonDto?: TogetherMealPersonDto): Promise<CodeResult> {
        return send({
            url: '/TogetherMealPersons',
            method: 'PUT',
            body: togetherMealPersonDto,
        });
    }
    /**
     * 
     * @summary 展示共餐码
     * @param string? school 
     * @param boolean? isHyaline 
     */
    public togetherMealPersonsShowTogetherCodeGet(school?: string, isHyaline?: boolean): Promise<void> {
        return send({
            url: '/TogetherMealPersons/showTogetherCode',
            method: 'GET',
            params: {
                school: school,
                is_hyaline: isHyaline,
            },
        });
    }
}

/**
 * SchoolTogetherMealPersonApi - instance
 */
export const SchoolTogetherMealPersonApiInstance = new SchoolTogetherMealPersonApi();

