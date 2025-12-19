/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { Grade } from "../models"
import type { IngredientTypeInfoDtoCodeResult } from "../models"
import type { IngredientsNutritionStandardDtoListCodeResult } from "../models"
import type { IngredientsTypeStandardDtoCodeResult } from "../models"
import type { MealKind } from "../models"
import type { MealNutritionsStandardDtoCodeResult } from "../models"
import type { NutritionInfoDtoCodeResult } from "../models"

/**
 * SchoolNutritionApi - API class
 */
export class SchoolNutritionApi {
    /**
     * 
     * @summary 根据时间和用餐类型获取本餐食材类型重量
     * @param string? dateTime 
     * @param string? endDate 
     * @param MealKind? mealKind 
     * @param Array<string>? mealIds 
     * @param number? day 
     */
    public nutritionIngredienttypeinfoGet(dateTime?: string | null, endDate?: string | null, mealKind?: MealKind, mealIds?: Array<string> | null, day?: number): Promise<IngredientTypeInfoDtoCodeResult> {
        return send({
            url: `/nutrition/ingredienttypeinfo`,
            method: 'GET',
            params: {
                dateTime: dateTime,
                endDate: endDate,
                mealKind: mealKind,
                mealIds: mealIds,
                day: day,
            },
        });
    }
    /**
     * 
     * @summary 根据时间和用餐类型获取本餐营养含量
     * @param string? dateTime 
     * @param string? endDate 
     * @param MealKind? mealKind 
     * @param Array<string>? mealIds 
     * @param number? day 
     */
    public nutritionNutritioninfoGet(dateTime?: string | null, endDate?: string | null, mealKind?: MealKind, mealIds?: Array<string> | null, day?: number): Promise<NutritionInfoDtoCodeResult> {
        return send({
            url: `/nutrition/nutritioninfo`,
            method: 'GET',
            params: {
                dateTime: dateTime,
                endDate: endDate,
                mealKind: mealKind,
                mealIds: mealIds,
                day: day,
            },
        });
    }
    /**
     * 
     * @summary 根据年级获取标准食材类型信息
     * @param Grade grade 
     * @param MealKind? mealKind 
     */
    public nutritionStandardingredienttypeInfoGradeGet(grade: Grade, mealKind?: MealKind): Promise<IngredientsTypeStandardDtoCodeResult> {
        return send({
            url: `/nutrition/standardingredienttypeInfo/{grade}`
                .replace(`{${"grade"}}`, encodeURIComponent(String(grade))),
            method: 'GET',
            params: {
                mealKind: mealKind,
            },
        });
    }
    /**
     * 
     * @summary 根据年级获取标准营养信息
     * @param Grade grade 
     * @param MealKind? mealKind 
     */
    public nutritionStandardnutritioninfoGradeGet(grade: Grade, mealKind?: MealKind): Promise<MealNutritionsStandardDtoCodeResult> {
        return send({
            url: `/nutrition/standardnutritioninfo/{grade}`
                .replace(`{${"grade"}}`, encodeURIComponent(String(grade))),
            method: 'GET',
            params: {
                mealKind: mealKind,
            },
        });
    }
    /**
     * 
     * @summary 食物营养成分
     */
    public nutritionStandardsGet(): Promise<IngredientsNutritionStandardDtoListCodeResult> {
        return send({
            url: `/nutrition/standards`,
            method: 'GET',
        });
    }
}

/**
 * SchoolNutritionApi - instance
 */
export const SchoolNutritionApiInstance = new SchoolNutritionApi();

