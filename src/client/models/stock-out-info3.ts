/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { StockOutItemDetails3 } from './stock-out-item-details3';

export interface StockOutInfo3 {
    'date'?: string;
    'mealKind'?: MealKind;
    'totalCount'?: number;
    'stockInItems': Array<StockOutItemDetails3>;
}



