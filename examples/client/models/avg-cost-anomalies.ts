/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AreaConfiguration } from './area-configuration';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface AvgCostAnomalies {
    'configuration'?: AreaConfiguration;
    'nutritionMealAvgCost'?: number | null;
    'nutritionMealStudentCount'?: number | null;
    'nutritionMealStockOutTotalPrice'?: number | null;
    'nutritionMeal'?: MealKind;
}



