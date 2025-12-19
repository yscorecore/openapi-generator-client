/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { BillItem } from './bill-item';

export interface BillItemListCodeResult {
    'code'?: string | null;
    'message'?: string | null;
    'data'?: Array<BillItem> | null;
}

