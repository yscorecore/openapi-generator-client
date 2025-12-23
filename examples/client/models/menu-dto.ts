/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MealType } from './meal-type';

export interface MenuDto {
    'kind'?: MealKind;
    'id'?: string;
    'name'?: string | null;
    'type'?: MealType;
    'imageUrl'?: string | null;
}



