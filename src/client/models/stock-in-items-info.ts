/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ProdctionStatus } from './prodction-status';
// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockInItemsInfo {
    'stockInItemCode'?: string | null;
    'orderItemId'?: string;
    'stockInId'?: string;
    'materialId'?: string;
    'goodsName'?: string | null;
    'goodsUnit'?: string | null;
    'goodsPrice'?: number;
    'requirement'?: number;
    'goodsAmount'?: number;
    'brand'?: string | null;
    'qgp'?: number;
    'qgpUnit'?: QgpUnit;
    'productDate'?: string;
    'materialType'?: number;
    'unit'?: UnitType;
    'totalPrice'?: number;
    'certificateUrl'?: Array<string> | null;
    'startTime'?: string;
    'endTime'?: string;
    'status'?: ProdctionStatus;
    'completeUser'?: string | null;
    'completeTime'?: string | null;
    'videoCode'?: string | null;
    'nvrChannel'?: number;
    'nvrCode'?: string | null;
}



