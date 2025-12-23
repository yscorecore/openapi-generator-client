/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface InvoiceInfo {
    'subjectName'?: string | null;
    'supplierId'?: string | null;
    'stockIns'?: Array<string> | null;
    'totalAmount'?: number;
    'orderType'?: OrderType;
}



