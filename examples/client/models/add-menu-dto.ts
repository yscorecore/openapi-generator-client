/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MealType } from './meal-type';

export interface AddMenuDto {
    'name'?: string | null;
    'mealType'?: MealType;
    'imageUrl'?: string | null;
    'kind'?: MealKind;
}



