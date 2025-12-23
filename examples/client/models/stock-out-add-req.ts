/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface StockOutAddReq {
    'checkIds': Array<string>;
    'receiveUser': string;
    'reviewer'?: string | null;
    'date'?: string;
    'mealKind'?: MealKind;
    'totalCount'?: number;
}



