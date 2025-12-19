/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockInItemDto {
    'id'?: string;
    'createUser'?: string | null;
    'createTime'?: string;
    'orderItemId'?: string;
    'materialId'?: string;
    'materialFullName'?: string | null;
    'materialUnit'?: UnitType;
    'stockInItemCode'?: string | null;
    'goodsUnit'?: string | null;
    'goodsPrice'?: number;
    'goodsAmount'?: number;
}



