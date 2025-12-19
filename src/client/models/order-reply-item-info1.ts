/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';

export interface OrderReplyItemInfo1 {
    'createTime'?: string;
    'id'?: string;
    'orderReplyId'?: string;
    'orderPlanItemId'?: string;
    'unitPrice'?: number | null;
    'brand'?: string | null;
    'qgp'?: number | null;
    'qgpUnit'?: QgpUnit;
    'productDate'?: string | null;
    'picture'?: Array<string> | null;
    'certificate'?: Array<string> | null;
    'orderReplySuppliesId'?: string;
    'totalPrice'?: number;
    'priceScore'?: number;
    'scoreScore'?: number;
    'totalScore'?: number;
}



