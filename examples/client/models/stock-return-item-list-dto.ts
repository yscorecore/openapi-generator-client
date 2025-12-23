/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockReturnItemListDto {
    'date'?: string;
    'stockInItemCode'?: string | null;
    'supplierName'?: string | null;
    'startTime'?: string | null;
    'endTime'?: string | null;
    'allTotalPrice'?: number;
    'materialId'?: string;
    'videoCode'?: string | null;
    'imageUrl'?: Array<string> | null;
    'goodsAmount'?: number;
    'peelingAmount'?: number;
    'goodsName'?: string | null;
    'goodsUnit'?: string | null;
    'goodsPrice'?: number;
    'materialType'?: number;
    'unit'?: UnitType;
    'unitAmount'?: number | null;
    'stockAmount'?: number | null;
    'totalPrice'?: number;
    'createTime'?: string;
    'createUser'?: string | null;
    'schoolName'?: string | null;
}



