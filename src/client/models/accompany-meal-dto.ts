/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AccompanyMenuDto } from './accompany-menu-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MealInfo } from './meal-info';

export interface AccompanyMealDto {
    'mealInfos'?: Array<MealInfo> | null;
    'menus'?: Array<AccompanyMenuDto> | null;
}

