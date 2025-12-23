/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface DinnerDto {
    'date'?: string;
    'mealKinds'?: Array<MealKind> | null;
}

