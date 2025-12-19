/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ConfirmedOrderInfo } from './confirmed-order-info';

export interface ConfirmedOrderInfoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<ConfirmedOrderInfo> | null;
    'totalRows'?: number;
}

