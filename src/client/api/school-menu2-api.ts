/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BooleanCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { MenuCreateInfo } from "../models"
import type { MenuImageInfo } from "../models"
import type { MenuPlanedCountInfo } from "../models"
import type { MenuSummaryPagedListCodeResult } from "../models"
import type { MenuVisibleInfo } from "../models"

/**
 * SchoolMenu2Api - API class
 */
export class SchoolMenu2Api {
    /**
     * 
     * @summary 判断菜品是否被菜谱引用（只判断当天之后的菜谱，不包含当天的）
     * @param string? mealId 
     */
    public menuCheckReferencedMealGet(mealId?: string): Promise<BooleanCodeResult> {
        return send({
            url: '/menu/check-referenced-meal',
            method: 'GET',
            params: {
                mealId: mealId,
            },
        });
    }
    /**
     * 
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public menuQueryMenuSummaryGet(offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<MenuSummaryPagedListCodeResult> {
        return send({
            url: '/menu/query-menu-summary',
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
                Agg: agg,
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @summary 新增菜谱
     * @param boolean? mergeOnly 
     * @param Array<MenuCreateInfo>? menuCreateInfo 
     */
    public menuSavePost(mergeOnly?: boolean, menuCreateInfo?: Array<MenuCreateInfo> | null): Promise<BooleanCodeResult> {
        return send({
            url: '/menu/save',
            method: 'POST',
            params: {
                mergeOnly: mergeOnly,
            },
            body: menuCreateInfo,
        });
    }
    /**
     * 
     * @summary 设置对公示端可见
     * @param MenuVisibleInfo? menuVisibleInfo 
     */
    public menuSetVisiblePut(menuVisibleInfo?: MenuVisibleInfo): Promise<CodeResult> {
        return send({
            url: '/menu/set-visible',
            method: 'PUT',
            body: menuVisibleInfo,
        });
    }
    /**
     * 
     * @summary 将菜品的信息同步给菜谱，如果带量信息修改了，则同步给菜谱
     * @param string? mealId 
     */
    public menuSyncMealToMenusPost(mealId?: string): Promise<BooleanCodeResult> {
        return send({
            url: '/menu/sync-meal-to-menus',
            method: 'POST',
            params: {
                mealId: mealId,
            },
        });
    }
    /**
     * 
     * @summary 修改计划数量
     * @param MenuPlanedCountInfo? menuPlanedCountInfo 
     */
    public menuUpdatePlanedCountPut(menuPlanedCountInfo?: MenuPlanedCountInfo): Promise<CodeResult> {
        return send({
            url: '/menu/update-planed-count',
            method: 'PUT',
            body: menuPlanedCountInfo,
        });
    }
    /**
     * 
     * @summary 上传或是删除配餐图
     * @param MenuImageInfo? menuImageInfo 
     */
    public menuUpdatePut(menuImageInfo?: MenuImageInfo): Promise<BooleanCodeResult> {
        return send({
            url: '/menu/update',
            method: 'PUT',
            body: menuImageInfo,
        });
    }
}

/**
 * SchoolMenu2Api - instance
 */
export const SchoolMenu2ApiInstance = new SchoolMenu2Api();

