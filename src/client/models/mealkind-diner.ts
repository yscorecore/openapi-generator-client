/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MealMode } from './meal-mode';

export interface MealkindDiner {
    'mealKind'?: MealKind;
    'mealMode'?: MealMode;
    'date'?: string;
    'isDefault'?: boolean;
    'defaultStudentCount'?: number;
    'isNutritious'?: boolean;
    'completedStockOutTotalPrice'?: number;
    'menuCount'?: number;
}



