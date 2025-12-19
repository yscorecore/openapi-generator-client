/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { PriceKind } from './price-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { PriceState } from './price-state';
// May contain unused imports in some cases
// @ts-ignore
import type { ProdctionStatus } from './prodction-status';
// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockItemInfo {
    'id'?: string;
    'createTime'?: string;
    'createUser'?: string | null;
    'videoCode'?: string | null;
    'startTime'?: string;
    'endTime'?: string;
    'imageUrl'?: Array<string> | null;
    'goodsAmount'?: number;
    'peelingAmount'?: number;
    'weight'?: number | null;
    'fromCheng'?: string | null;
    'stockInItemCode'?: string | null;
    'orderItemId'?: string;
    'stockInId'?: string;
    'materialId'?: string;
    'goodsName'?: string | null;
    'goodsUnitName'?: string | null;
    'goodsAbsoluteUnit'?: UnitType;
    'goodsAbsoluteUnitPrice'?: number;
    'goodsUnit'?: string | null;
    'goodsPrice'?: number;
    'goodsFactor'?: number;
    'requirement'?: number;
    'brand'?: string | null;
    'qgp'?: number;
    'qgpUnit'?: QgpUnit;
    'productDate'?: string;
    'materialType'?: number;
    'unit'?: UnitType;
    'totalPrice'?: number;
    'certificateUrl'?: Array<string> | null;
    'isCompleted'?: boolean;
    'reasion'?: string | null;
    'status'?: ProdctionStatus;
    'completeUser'?: string | null;
    'completeTime'?: string | null;
    'invalidPrice'?: boolean;
    'priceKind'?: PriceKind;
    'priceState'?: PriceState;
    'stockInSupplierName'?: string | null;
    'stockInDate'?: string;
}



