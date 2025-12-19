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

export interface StockInItemInfo {
    'createTime'?: string;
    'id'?: string;
    'stockInItemCode'?: string | null;
    'orderItemId'?: string;
    'stockInId'?: string;
    'materialId'?: string;
    'goodsName'?: string | null;
    'goodsUnit'?: string | null;
    'goodsPrice'?: number;
    'brand'?: string | null;
    'goodsAmount'?: number;
    'imageUrl'?: Array<string> | null;
    'qgp'?: number;
    'qgpUnit'?: QgpUnit;
    'productDate'?: string;
    'materialType'?: number;
    'unit'?: UnitType;
    'videoCode'?: string | null;
    'startTime'?: string;
    'endTime'?: string;
    'totalPrice'?: number;
    'certificateUrl'?: Array<string> | null;
    'isCompleted'?: boolean;
    'status'?: ProdctionStatus;
}



