/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AccompanyMealDto } from "../models"
import type { AccompanyUserDto } from "../models"
import type { LeaderMealComment } from "../models"
import type { MealKind } from "../models"
import type { ResigterAccompanyUserDto } from "../models"

/**
 * SchoolAccompanyForAccompanyUserApi - API class
 */
export class SchoolAccompanyForAccompanyUserApi {
    /**
     * 
     * @summary 获取当前用户
     * @param string? schoolCode 
     */
    public accompanyCurrentUserGet(schoolCode?: string | null): Promise<AccompanyUserDto> {
        return send({
            url: '/accompany/current-user',
            method: 'GET',
            params: {
                schoolCode: schoolCode,
            },
        });
    }
    /**
     * 
     * @summary 获取当前学校的陪餐信息
     * @param string? schoolCode 
     */
    public accompanyMealInfoGet(schoolCode?: string | null): Promise<AccompanyMealDto> {
        return send({
            url: '/accompany/meal-info',
            method: 'GET',
            params: {
                schoolCode: schoolCode,
            },
        });
    }
    /**
     * 
     * @summary 陪餐用户注册
     * @param ResigterAccompanyUserDto? resigterAccompanyUserDto 
     */
    public accompanyRegisterUserPost(resigterAccompanyUserDto?: ResigterAccompanyUserDto): Promise<string> {
        return send({
            url: '/accompany/register-user',
            method: 'POST',
            body: resigterAccompanyUserDto,
        });
    }
    /**
     * 
     * @summary 新增陪餐记录
     * @param string schoolCode 
     * @param MealKind? kind 
     * @param string? suggestion 
     * @param LeaderMealComment? store 
     * @param string? mealIds 
     * @param Array<string>? favoriteMealIds 
     * @param Array<File>? files 
     */
    public accompanySuggestionPost(schoolCode: string, kind?: MealKind, suggestion?: string | null, store?: LeaderMealComment, mealIds?: string | null, favoriteMealIds?: Array<string> | null, files?: Array<File> | null): Promise<string> {
        return send({
            url: '/accompany/suggestion',
            method: 'POST',
            forms: {
                Kind: kind,
                Suggestion: suggestion,
                SchoolCode: schoolCode,
                Store: store,
                MealIds: mealIds,
                FavoriteMealIds: favoriteMealIds,
                files: files,
            },
        });
    }
}

/**
 * SchoolAccompanyForAccompanyUserApi - instance
 */
export const SchoolAccompanyForAccompanyUserApiInstance = new SchoolAccompanyForAccompanyUserApi();

