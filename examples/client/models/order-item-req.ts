/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';

export interface OrderItemReq {
    'materialSpecId'?: string;
    'unitPrice'?: number;
    'brand'?: string | null;
    'productDate'?: string;
    'productCode'?: string | null;
    'qgp'?: number;
    'qgpUnit'?: QgpUnit;
}



