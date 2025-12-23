/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface PerCapitaMealCostDto {
    'menuId'?: string;
    'date'?: string;
    'kind'?: MealKind;
    'materialId'?: string;
    'mealId'?: string;
    'materialName'?: string | null;
    'amount'?: number;
    'estimatedPrice'?: number;
    'perCapita'?: number;
    'stockOutPrice'?: number;
    'dinerCount'?: number;
    'menuName'?: string | null;
}



