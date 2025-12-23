/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockOutModel } from './stock-out-model';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockOutItemModel {
    'stockOut'?: StockOutModel;
    'materialFactor'?: number;
    'stockInItemGoodsName'?: string | null;
    'stockInItemGoodsUnit'?: string | null;
    'stockInItemGoodsPrice'?: number;
    'stockInItemRequirement'?: number;
    'stockInItemBrand'?: string | null;
    'stockInItemQgp'?: number;
    'stockInItemMaterialType'?: number;
    'stockInItemUnit'?: UnitType;
    'goodsAmount'?: number;
    'peelingAmount'?: number;
    'weight'?: number | null;
    'totalPrice'?: number;
    'priceOfMealPer'?: number;
}



