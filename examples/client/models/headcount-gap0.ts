/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AreaConfiguration } from './area-configuration';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface HeadcountGap {
    'configuration'?: AreaConfiguration;
    'nutritionMeal'?: MealKind;
    'nutritionMealStudentCount'?: number | null;
    'beneficiariesCount'?: number | null;
}



