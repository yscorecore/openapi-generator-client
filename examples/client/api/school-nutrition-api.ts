/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { Grade } from "../models"
import type { IngredientTypeInfoDto } from "../models"
import type { IngredientsNutritionStandardDto } from "../models"
import type { IngredientsTypeStandardDto } from "../models"
import type { MealKind } from "../models"
import type { MealNutritionsStandardDto } from "../models"
import type { NutritionInfoDto } from "../models"

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
    public nutritionIngredienttypeinfoGet(dateTime?: string | null, endDate?: string | null, mealKind?: MealKind, mealIds?: Array<string> | null, day?: number): Promise<IngredientTypeInfoDto> {
        return send({
            url: '/nutrition/ingredienttypeinfo',
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
    public nutritionNutritioninfoGet(dateTime?: string | null, endDate?: string | null, mealKind?: MealKind, mealIds?: Array<string> | null, day?: number): Promise<NutritionInfoDto> {
        return send({
            url: '/nutrition/nutritioninfo',
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
    public nutritionStandardingredienttypeInfoGradeGet(grade: Grade, mealKind?: MealKind): Promise<IngredientsTypeStandardDto> {
        return send({
            url: '/nutrition/standardingredienttypeInfo/{grade}'
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
    public nutritionStandardnutritioninfoGradeGet(grade: Grade, mealKind?: MealKind): Promise<MealNutritionsStandardDto> {
        return send({
            url: '/nutrition/standardnutritioninfo/{grade}'
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
    public nutritionStandardsGet(): Promise<Array<IngredientsNutritionStandardDto>> {
        return send({
            url: '/nutrition/standards',
            method: 'GET',
        });
    }
}

/**
 * SchoolNutritionApi - instance
 */
export const SchoolNutritionApiInstance = new SchoolNutritionApi();

