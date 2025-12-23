/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface MonthInvoiceInfo {
    'id'?: string;
    'isNutritious'?: boolean;
    'totalAmount'?: number;
    'stockIns'?: Array<string> | null;
    'fileUrls'?: Array<string> | null;
    'subjectName'?: string | null;
    'supplierId'?: string | null;
    'orderType'?: OrderType;
}



