/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MenuItemSummary } from './menu-item-summary';

export interface MenuSummary {
    'date'?: string;
    'kind'?: MealKind;
    'menus'?: Array<MenuItemSummary> | null;
    'estimatePrice'?: number | null;
    'realPrice'?: number;
    'totalStockOut'?: number;
    'totalLoss'?: number;
    'totalCount'?: number;
}



