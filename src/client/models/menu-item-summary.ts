/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MenuItemDetail } from './menu-item-detail';

export interface MenuItemSummary {
    'name'?: string | null;
    'id'?: string;
    'mealId'?: string;
    'estimatePrice'?: number | null;
    'isNutritious'?: boolean;
    'details'?: Array<MenuItemDetail> | null;
}

