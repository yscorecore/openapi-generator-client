/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { TogetherPersonKind } from './together-person-kind';

export interface TogetherMealPersonDto {
    'id'?: string;
    'name'?: string | null;
    'mealKinds'?: Array<MealKind> | null;
    'remark'?: string | null;
    'kind'?: TogetherPersonKind;
    'schoolName'?: string | null;
    'schoolId'?: string;
}



