/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealDto } from './meal-dto';

export interface MealDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<MealDto> | null;
    'totalRows'?: number;
}

