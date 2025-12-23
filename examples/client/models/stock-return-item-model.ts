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
import type { UnitType } from './unit-type';

export interface StockReturnItemModel {
    'stockInItemId'?: string;
    'stockInItemGoodsName'?: string | null;
    'stockInItemGoodsPrice'?: number;
    'stockInItemBrand'?: string | null;
    'stockInItemQgp'?: number;
    'stockInItemProductDate'?: string;
    'stockInItemMaterialType'?: number;
    'stockInItemUnit'?: UnitType;
    'stockInItemCode'?: string | null;
    'stockReturnDate'?: string;
    'stockReturnOrderOrderSource'?: OrderSource;
    'stockReturnOrderOrderType'?: OrderType;
    'stockReturnId'?: string;
    'materialId'?: string;
    'totalPrice'?: number;
    'stockReturnSupplierName'?: string | null;
    'stockReturnOrderId'?: string | null;
    'stockReturnSupplierId'?: string | null;
    'startTime'?: string;
    'endTime'?: string;
    'goodsAmount'?: number;
    'stockReturnCreateUser'?: string | null;
    'imageUrl'?: Array<string> | null;
}



