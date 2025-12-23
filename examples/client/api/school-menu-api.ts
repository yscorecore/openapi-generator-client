/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { MealKind } from "../models"
import type { MenuCapitaInfoDto } from "../models"
import type { MenuCapitalInfoRes } from "../models"
import type { MenuDto2 } from "../models"
import type { MenuList } from "../models"
import type { MenuNutritiousInfoDto } from "../models"
import type { MenuWeekCopies } from "../models"
import type { PerCapitaMealCostDto } from "../models"

/**
 * SchoolMenuApi - API class
 */
export class SchoolMenuApi {
    /**
     * 
     * @summary 获取指定时间段内菜谱的预估人均顿值
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? mealKind 
     * @param boolean? isEstimated 
     * @param Array<string>? mealIds 
     * @param number? day 
     */
    public menuCapitaInfoGet(startDate?: string | null, endDate?: string | null, mealKind?: MealKind, isEstimated?: boolean, mealIds?: Array<string> | null, day?: number): Promise<MenuCapitaInfoDto> {
        return send({
            url: '/menu/capita_info',
            method: 'GET',
            params: {
                startDate: startDate,
                endDate: endDate,
                mealKind: mealKind,
                isEstimated: isEstimated,
                mealIds: mealIds,
                Day: day,
            },
        });
    }
    /**
     * 
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? mealKind 
     * @param boolean? isEstimated 
     * @param Array<string>? mealIds 
     */
    public menuCapitaInfoNewGet(startDate?: string | null, endDate?: string | null, mealKind?: MealKind, isEstimated?: boolean, mealIds?: Array<string> | null): Promise<MenuCapitalInfoRes> {
        return send({
            url: '/menu/capita_info/new',
            method: 'GET',
            params: {
                startDate: startDate,
                endDate: endDate,
                mealKind: mealKind,
                isEstimated: isEstimated,
                mealIds: mealIds,
            },
        });
    }
    /**
     * 
     * @summary 复制菜谱
     * @param MenuWeekCopies? menuWeekCopies 
     */
    public menuCopyPost(menuWeekCopies?: MenuWeekCopies): Promise<number> {
        return send({
            url: '/menu/copy',
            method: 'POST',
            body: menuWeekCopies,
        });
    }
    /**
     * 
     * @summary 删除菜谱
     * @param string menuId 
     */
    public menuDeleteMenuIdDelete(menuId: string): Promise<number> {
        return send({
            url: '/menu/delete/{menuId}'
                .replace(`{${"menuId"}}`, encodeURIComponent(String(menuId))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取当前日期往上3周，往下一个月所有周信息和指定日期所在周的菜单
     * @param string? dateSelected 可空，默认为当前日期
     */
    public menuListGet(dateSelected?: string | null): Promise<MenuList> {
        return send({
            url: '/menu/list',
            method: 'GET',
            params: {
                dateSelected: dateSelected,
            },
        });
    }
    /**
     * 
     * @summary 获取指定时间段内菜谱的营养标准是否达标
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? mealKind 
     * @param boolean? isEstimated 
     * @param Array<string>? mealIds 
     * @param number? day 
     */
    public menuNutritiousInfoGet(startDate?: string | null, endDate?: string | null, mealKind?: MealKind, isEstimated?: boolean, mealIds?: Array<string> | null, day?: number): Promise<MenuNutritiousInfoDto> {
        return send({
            url: '/menu/nutritious_info',
            method: 'GET',
            params: {
                startDate: startDate,
                endDate: endDate,
                mealKind: mealKind,
                isEstimated: isEstimated,
                mealIds: mealIds,
                Day: day,
            },
        });
    }
    /**
     * 
     * @summary 获取人均顿值信息
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? kind 
     */
    public menuPerCapitaMealCostGet(startDate?: string, endDate?: string, kind?: MealKind): Promise<Array<PerCapitaMealCostDto>> {
        return send({
            url: '/menu/per_capita_meal_cost',
            method: 'GET',
            params: {
                startDate: startDate,
                endDate: endDate,
                kind: kind,
            },
        });
    }
    /**
     * 
     * @param string? startDate 
     * @param string? endDate 
     * @param MealKind? kind 
     */
    public menuPerCapitaMealCostNewGet(startDate?: string, endDate?: string, kind?: MealKind): Promise<Array<PerCapitaMealCostDto>> {
        return send({
            url: '/menu/per_capita_meal_cost/new',
            method: 'GET',
            params: {
                startDate: startDate,
                endDate: endDate,
                kind: kind,
            },
        });
    }
    /**
     * 
     * @summary 菜谱查询
     * @param string? startDate 
     * @param string? endDate 
     */
    public menuQueryGet(startDate?: string | null, endDate?: string | null): Promise<Array<MenuDto2>> {
        return send({
            url: '/menu/query',
            method: 'GET',
            params: {
                startDate: startDate,
                endDate: endDate,
            },
        });
    }
}

/**
 * SchoolMenuApi - instance
 */
export const SchoolMenuApiInstance = new SchoolMenuApi();

