/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { DinnerOutDto1 } from './dinner-out-dto1';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockLossRecoreDetailDto {
    'amount'?: number;
    'goodsPrice'?: number;
    'totalPrice'?: number;
    'stockOutItemId'?: string | null;
    'diningOutId'?: string;
    'diningOut'?: DinnerOutDto1;
    'isZero'?: boolean;
    'orderType'?: OrderType;
    'goodsName'?: string | null;
    'unit'?: UnitType;
    'stockInItemCode'?: string | null;
    'schoolId'?: string;
    'isDeleted'?: boolean;
}



