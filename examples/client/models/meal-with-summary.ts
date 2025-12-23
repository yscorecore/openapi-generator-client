/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ApplicableSeason } from './applicable-season';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MealMaterialForSummary } from './meal-material-for-summary';
// May contain unused imports in some cases
// @ts-ignore
import type { MealType } from './meal-type';
// May contain unused imports in some cases
// @ts-ignore
import type { NutritionAggInfo } from './nutrition-agg-info';

export interface MealWithSummary {
    'id'?: string;
    'name'?: string | null;
    'kind'?: Array<MealKind> | null;
    'mainMaterials'?: Array<string> | null;
    'mealMaterials'?: Array<MealMaterialForSummary> | null;
    'applicableSeasons'?: Array<ApplicableSeason> | null;
    'mealType'?: MealType;
    'totalPrice'?: number | null;
    'isManaged'?: boolean;
    'isRice'?: boolean;
    'isNoodles'?: boolean;
    'nutritionAgg'?: NutritionAggInfo;
}



