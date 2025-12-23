/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface DiningCostDtoByOrderType {
    'id'?: string;
    'schoolId'?: string;
    'date'?: string;
    'kind'?: MealKind;
    'totalCount'?: number;
    'orderType'?: OrderType;
    'costTotalPrice'?: number;
    'stockOutTotalPrice'?: number;
    'lossTotalPrice'?: number;
    'month'?: string;
    'week'?: string;
    'studentDinningsCount'?: number;
    'accompanyCount'?: number;
    'publicAccompanyCount'?: number;
    'internalAccompanyCount'?: number;
    'costPerPerson'?: number;
    'actualCostPerPerson'?: number | null;
    'schoolName'?: string | null;
}



