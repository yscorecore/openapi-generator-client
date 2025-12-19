/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MaterialPriceExecption } from './material-price-execption';
// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemPriceExecption } from './stock-in-item-price-execption';

export interface PriceExecption {
    'stockInPriceExecption'?: Array<StockInItemPriceExecption> | null;
    'materialPriceExecption'?: Array<MaterialPriceExecption> | null;
}

