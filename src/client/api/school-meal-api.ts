/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AddMealDto } from "../models"
import type { BooleanCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { EditMealDto } from "../models"
import type { GuidCodeResult } from "../models"
import type { MealDtoPaginationDataCodeResult } from "../models"
import type { MealDtoPaginationResCodeResult } from "../models"
import type { MealKind } from "../models"
import type { MealWithSummaryListCodeResult } from "../models"
import type { MenuItemDetailListCodeResult } from "../models"

/**
 * SchoolMealApi - API class
 */
export class SchoolMealApi {
    /**
     * 
     * @summary 批量添加菜品
     * @param Array<AddMealDto>? addMealDto 
     */
    public mealBatchAddMealPost(addMealDto?: Array<AddMealDto> | null): Promise<CodeResult> {
        return send({
            url: '/meal/batchAddMeal',
            method: 'POST',
            body: addMealDto,
        });
    }
    /**
     * 
     * @summary 根据餐次获取全部菜品
     * @param MealKind? mealKind 
     * @param number? page 
     * @param number? size 
     */
    public mealGet(mealKind?: MealKind, page?: number, size?: number): Promise<MealDtoPaginationResCodeResult> {
        return send({
            url: '/meal',
            method: 'GET',
            params: {
                MealKind: mealKind,
                Page: page,
                Size: size,
            },
        });
    }
    /**
     * 
     * @summary 获取所有菜品
     * @param MealKind? mealKind 
     * @param number? offset 
     * @param number? limit 
     */
    public mealGetMealsGet(mealKind?: MealKind, offset?: number, limit?: number): Promise<MealDtoPaginationDataCodeResult> {
        return send({
            url: '/meal/getMeals',
            method: 'GET',
            params: {
                MealKind: mealKind,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 根据ID删除菜品
     * @param string id 菜品Id
     */
    public mealIdDelete(id: string): Promise<BooleanCodeResult> {
        return send({
            url: '/meal/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 新增菜品
     * @param AddMealDto? addMealDto 需新增的菜品
     */
    public mealPost(addMealDto?: AddMealDto): Promise<GuidCodeResult> {
        return send({
            url: '/meal',
            method: 'POST',
            body: addMealDto,
        });
    }
    /**
     * 
     * @summary 修改菜品
     * @param EditMealDto? editMealDto 待修改的菜品
     */
    public mealPut(editMealDto?: EditMealDto): Promise<BooleanCodeResult> {
        return send({
            url: '/meal',
            method: 'PUT',
            body: editMealDto,
        });
    }
    /**
     * 
     * @param string id 
     */
    public mealQueryMealDetailsIdGet(id: string): Promise<MenuItemDetailListCodeResult> {
        return send({
            url: '/meal/query-meal-details/{Id}'
                .replace(`{${"Id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 菜品统计
     * @param boolean? hasPrice 
     */
    public mealSummaryGet(hasPrice?: boolean): Promise<MealWithSummaryListCodeResult> {
        return send({
            url: '/meal/summary',
            method: 'GET',
            params: {
                hasPrice: hasPrice,
            },
        });
    }
}

/**
 * SchoolMealApi - instance
 */
export const SchoolMealApiInstance = new SchoolMealApi();

