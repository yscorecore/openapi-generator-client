/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { SupplierInfo } from './supplier-info';
// May contain unused imports in some cases
// @ts-ignore
import type { SupplierUserInfo1 } from './supplier-user-info1';

export interface OrderReplyInfo1 {
    'createTime'?: string;
    'id'?: string;
    'supplies'?: SupplierInfo;
    'suppliesId'?: string;
    'supplierUserId'?: string;
    'supplierUser'?: SupplierUserInfo1;
    'overallScore'?: number | null;
    'totalPrice'?: number;
    'priceScore'?: number;
    'scoreScore'?: number;
    'totalScore'?: number;
}

