/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';

export interface OrderReplyItemInfo {
    'createTime'?: string;
    'id'?: string;
    'orderReplyId'?: string;
    'orderPlanItemId'?: string;
    'certificate'?: Array<string> | null;
    'isAvailable'?: boolean;
    'unitPrice'?: number | null;
    'brand'?: string | null;
    'qgp'?: number | null;
    'qgpUnit'?: QgpUnit;
    'productDate'?: string | null;
    'isWon'?: boolean;
}



