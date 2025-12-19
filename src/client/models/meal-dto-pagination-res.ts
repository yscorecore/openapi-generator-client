/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealDto } from './meal-dto';

export interface MealDtoPaginationRes {
    'page'?: number;
    'size'?: number;
    'items'?: Array<MealDto> | null;
    'totalRows'?: number;
    'totalPages'?: number;
}

