/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { CheckWarning } from './check-warning';

export interface OrderItemCheckInDetailRes {
    'id'?: string;
    'startTime'?: string;
    'endTime'?: string;
    'createUser'?: string | null;
    'createTime'?: string;
    'itemId'?: string;
    'goodsAmount'?: number;
    'peelingAmount'?: number;
    'weight'?: number;
    'imageUrl'?: string | null;
    'warnings'?: Array<CheckWarning> | null;
    'seq'?: number;
    'multiple'?: number;
}

