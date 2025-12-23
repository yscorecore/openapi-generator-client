/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { CheckWarning } from './check-warning';

export interface CheckDetailRes {
    'id'?: string;
    'itemId'?: string;
    'startTime'?: string;
    'endTime'?: string;
    'goodsAmount'?: number;
    'peelingAmount'?: number;
    'weight'?: number;
    'imageUrl'?: string | null;
    'warnings'?: Array<CheckWarning> | null;
    'seq'?: number;
    'multiple'?: number;
    'createTime'?: string;
    'createUser'?: string | null;
}

