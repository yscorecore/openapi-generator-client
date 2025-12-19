/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AppResourceInfo } from './app-resource-info';

export interface AppResourceInfoPagedList {
    'hasNext'?: boolean;
    'limit'?: number;
    'items'?: Array<AppResourceInfo> | null;
    'offset'?: number;
    'totalCount'?: number;
    'aggs'?: { [key: string]: any; } | null;
}

