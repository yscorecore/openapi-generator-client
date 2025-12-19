/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { DiningCostDto } from './dining-cost-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface DiningOutDto {
    'id'?: string;
    'date'?: string;
    'kind'?: MealKind;
    'isNutritious'?: boolean;
    'totalCount'?: number;
    'summary'?: DiningCostDto;
    'schoolName'?: string | null;
    'schoolId'?: string;
}



