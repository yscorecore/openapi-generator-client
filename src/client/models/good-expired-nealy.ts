/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ProdctionStatus } from './prodction-status';
// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';

export interface GoodExpiredNealy {
    'id'?: string;
    'dueDay'?: number;
    'goodsName'?: string | null;
    'stockInItemCode'?: string | null;
    'brand'?: string | null;
    'goodsCountOrAmount'?: number;
    'qgp'?: number;
    'qgpUnit'?: QgpUnit;
    'productDate'?: string;
    'status'?: ProdctionStatus;
    'unitName'?: string | null;
    'stockInDate'?: string;
}



