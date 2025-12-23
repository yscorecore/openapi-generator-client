/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ProdctionStatus } from './prodction-status';
// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';

export interface StockException {
    'goodsName'?: string | null;
    'qgp'?: number;
    'qgpUnit'?: QgpUnit;
    'productDate'?: string;
    'status'?: ProdctionStatus;
    'stockInId'?: string;
    'stockInItemCode'?: string | null;
    'goodsUnit'?: string | null;
    'goodsPrice'?: number;
}



