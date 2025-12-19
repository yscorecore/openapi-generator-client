/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';

export interface StockInItemAddReq {
    'itemId'?: string;
    'amount'?: number;
    'productDate'?: string;
    'unitPrice'?: number;
    'qgp'?: number;
    'qgpUnit'?: QgpUnit;
    'imageUrl'?: Array<string> | null;
}



