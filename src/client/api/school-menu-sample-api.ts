/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AddMenuSampleDto } from "../models"
import type { EditSample } from "../models"
import type { ImageBindInfo } from "../models"
import type { MealKind } from "../models"
import type { MenuSampleDtoPaginationData } from "../models"
import type { MenuSampleTemplate } from "../models"

/**
 * SchoolMenuSampleApi - API class
 */
export class SchoolMenuSampleApi {
    /**
     * 
     * @summary 添加成品留样
     * @param AddMenuSampleDto? addMenuSampleDto 
     */
    public menuSamplesAddPost(addMenuSampleDto?: AddMenuSampleDto): Promise<MenuSampleTemplate> {
        return send({
            url: '/menu/samples/add',
            method: 'POST',
            body: addMenuSampleDto,
        });
    }
    /**
     * 
     * @summary 设置���样图
     * @param ImageBindInfo? imageBindInfo 
     */
    public menuSamplesBindImagePost(imageBindInfo?: ImageBindInfo): Promise<boolean> {
        return send({
            url: '/menu/samples/bind-image',
            method: 'POST',
            body: imageBindInfo,
        });
    }
    /**
     * 
     * @param EditSample? editSample 
     */
    public menuSamplesEditPost(editSample?: EditSample): Promise<boolean> {
        return send({
            url: '/menu/samples/edit',
            method: 'POST',
            body: editSample,
        });
    }
    /**
     * 
     * @summary 重置成品留样
     * @param string id 
     */
    public menuSamplesIdDelete(id: string): Promise<number> {
        return send({
            url: '/menu/samples/{id}'
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
    public menuSamplesListGet(startDate?: string | null, endDate?: string | null, kind?: MealKind, materialName?: string | null, schoolId?: string | null, offset?: number, limit?: number): Promise<MenuSampleDtoPaginationData> {
        return send({
            url: '/menu/samples/list',
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
    public menuSamplesTemplatesGet(date?: string | null): Promise<{ [key: string]: Array<MenuSampleTemplate>; }> {
        return send({
            url: '/menu/samples/templates',
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
    public menuSamplesTodayGet(): Promise<{ [key: string]: Array<MenuSampleTemplate>; }> {
        return send({
            url: '/menu/samples/today',
            method: 'GET',
        });
    }
}

/**
 * SchoolMenuSampleApi - instance
 */
export const SchoolMenuSampleApiInstance = new SchoolMenuSampleApi();

