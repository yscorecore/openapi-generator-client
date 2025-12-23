/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { DeepProcessingStatus } from './deep-processing-status';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderSource } from './order-source';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface DeepProcessingItemModel {
    'deepProcessingOrderOrderSource'?: OrderSource;
    'deepProcessingDate'?: string;
    'startTime'?: string;
    'endTime'?: string;
    'deepProcessingOrderOrderType'?: OrderType;
    'deepProcessingId'?: string;
    'stockInItemId'?: string;
    'stockInItemDate'?: string;
    'GoodsName'?: string | null;
    'DeepProcessingGoodsName'?: string | null;
    'stockInItemGoodsPrice'?: number;
    'stockInItemBrand'?: string | null;
    'stockInItemQgp'?: number;
    'stockInItemProductDate'?: string;
    'stockInItemMaterialType'?: number;
    'stockInItemUnit'?: UnitType;
    'stockInItemStockInItemCode'?: string | null;
    'totalPrice'?: number;
    'imageUrl'?: Array<string> | null;
    'goodsAmount'?: number;
    'createUser'?: string | null;
    'isCompleted'?: boolean;
    'deepProcessingStatus'?: DeepProcessingStatus;
}



