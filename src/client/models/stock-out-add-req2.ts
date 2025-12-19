/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { StockOutItemReq } from './stock-out-item-req';

export interface StockOutAddReq2 {
    'items': Array<StockOutItemReq>;
    'receiveUser': string;
    'reviewer'?: string | null;
    'date'?: string;
    'mealKind'?: MealKind;
    'totalCount'?: number;
}



