/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { AddMenuSampleDto } from "../models"
import type { BooleanCodeResult } from "../models"
import type { EditSample } from "../models"
import type { ImageBindInfo } from "../models"
import type { Int32CodeResult } from "../models"
import type { Int32MenuSampleTemplateListDictionaryCodeResult } from "../models"
import type { MealKind } from "../models"
import type { MenuSampleDtoPaginationDataCodeResult } from "../models"
import type { MenuSampleTemplateCodeResult } from "../models"

/**
 * SchoolMenuSampleApi - API class
 */
export class SchoolMenuSampleApi {
    /**
     * 
     * @summary 添加成品留样
     * @param AddMenuSampleDto? addMenuSampleDto 
     */
    public menuSamplesAddPost(addMenuSampleDto?: AddMenuSampleDto): Promise<MenuSampleTemplateCodeResult> {
        return send({
            url: `/menu/samples/add`,
            method: 'POST',
            body: addMenuSampleDto,
        });
    }
    /**
     * 
     * @summary 设置留样图
     * @param ImageBindInfo? imageBindInfo 
     */
    public menuSamplesBindImagePost(imageBindInfo?: ImageBindInfo): Promise<BooleanCodeResult> {
        return send({
            url: `/menu/samples/bind-image`,
            method: 'POST',
            body: imageBindInfo,
        });
    }
    /**
     * 
     * @param EditSample? editSample 
     */
    public menuSamplesEditPost(editSample?: EditSample): Promise<BooleanCodeResult> {
        return send({
            url: `/menu/samples/edit`,
            method: 'POST',
            body: editSample,
        });
    }
    /**
     * 
     * @summary 重置成品留样
     * @param string id 
     */
    public menuSamplesIdDelete(id: string): Promise<Int32CodeResult> {
        return send({
            url: `/menu/samples/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 查询成品留样
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? kind 
     * @param string? materialName 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public menuSamplesListGet(startDate?: string | null, endDate?: string | null, kind?: MealKind, materialName?: string | null, schoolId?: string | null, offset?: number, limit?: number): Promise<MenuSampleDtoPaginationDataCodeResult> {
        return send({
            url: `/menu/samples/list`,
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                Kind: kind,
                MaterialName: materialName,
                SchoolId: schoolId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 获取今日留样
     * @param string? date 
     */
    public menuSamplesTemplatesGet(date?: string | null): Promise<Int32MenuSampleTemplateListDictionaryCodeResult> {
        return send({
            url: `/menu/samples/templates`,
            method: 'GET',
            params: {
                date: date,
            },
        });
    }
    /**
     * 
     * @summary 获取今日留样
     */
    public menuSamplesTodayGet(): Promise<Int32MenuSampleTemplateListDictionaryCodeResult> {
        return send({
            url: `/menu/samples/today`,
            method: 'GET',
        });
    }
}

/**
 * SchoolMenuSampleApi - instance
 */
export const SchoolMenuSampleApiInstance = new SchoolMenuSampleApi();

