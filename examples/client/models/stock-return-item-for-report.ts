/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockReturnItemForReport {
    'id'?: string;
    'seq'?: number;
    'startTime'?: string;
    'endTime'?: string;
    'unit'?: UnitType;
    'materialId'?: string;
    'weight'?: number | null;
    'imageUrl'?: Array<string> | null;
    'createUser'?: string | null;
    'leftAmount'?: number;
    'goodsPrice'?: number;
    'totalPrice'?: number;
    'goodsAmount'?: number;
    'unitAmount'?: number | null;
    'peelingAmount'?: number;
    'stockInItemId'?: string;
    'stockInItemCode'?: string | null;
    'stockInItemBrand'?: string | null;
    'stockInItemGoodsName'?: string | null;
    'stockInItemGoodsUnit'?: string | null;
    'stockReturnId'?: string;
    'stockReturnDate'?: string;
    'stockReturnCreateUser'?: string | null;
    'stockReturnSchoolName'?: string | null;
    'stockReturnSupplierName'?: string | null;
}



