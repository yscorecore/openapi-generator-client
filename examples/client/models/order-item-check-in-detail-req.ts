/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { CheckWarning } from './check-warning';

export interface OrderItemCheckInDetailReq {
    'itemId'?: string;
    'duration'?: number;
    'goodsAmount'?: number;
    'peelingAmount'?: number;
    'weight'?: number;
    'imageUrl'?: string | null;
    'seq'?: number;
    'warnings'?: Array<CheckWarning> | null;
}

