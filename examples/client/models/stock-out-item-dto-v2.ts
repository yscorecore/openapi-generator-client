/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemDtoV2 } from './stock-in-item-dto-v2';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockOutItemDtoV2 {
    'stockInItemId'?: string;
    'stockInItem'?: StockInItemDtoV2;
    'stockInItemCode'?: string | null;
    'stockOutId'?: string;
    'goodsPrice'?: number;
    'goodsAmount'?: number;
    'totalPrice'?: number;
    'fromStockIn'?: boolean;
    'fromStockOutItemId'?: string | null;
    'id'?: string;
    'createTime'?: string;
    'createUser'?: string | null;
    'stockOutDate'?: string;
    'stockOutMealKind'?: MealKind;
    'unit'?: UnitType;
    'schoolId'?: string;
    'schoolName'?: string | null;
}



