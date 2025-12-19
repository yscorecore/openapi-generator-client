/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AccompanyKind } from './accompany-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface AccompanyDto {
    'id'?: string;
    'kind'?: MealKind;
    'accompanyKind'?: AccompanyKind;
    'name'?: string | null;
    'imageUrl'?: string | null;
}



