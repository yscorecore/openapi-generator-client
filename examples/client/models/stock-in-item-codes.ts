/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderSource } from './order-source';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';
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

export interface StockInItemCodes {
    'id'?: string;
    'orderItemId'?: string;
    'goodsName'?: string | null;
    'goodsAbsoluteUnit'?: UnitType;
    'code'?: string | null;
    'supplierName'?: string | null;
    'orderType'?: OrderType;
    'goodsCountOrAmount'?: number;
    'summaryRestPercent'?: number;
    'goodsFactor'?: number;
    'materialTypeName'?: string | null;
    'materialType'?: number;
    'unitName'?: string | null;
    'status'?: ProdctionStatus;
    'createTime'?: string;
    'goodsPrice'?: number;
    'qgp'?: number;
    'qgpUnit'?: QgpUnit;
    'productDate'?: string;
    'priceState'?: PriceState;
    'unit'?: UnitType;
    'goodsUnitName'?: string | null;
    'orderSource'?: OrderSource;
    'brand'?: string | null;
    'materialId'?: string;
}



