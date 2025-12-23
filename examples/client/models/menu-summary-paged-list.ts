/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MenuSummary } from './menu-summary';

export interface MenuSummaryPagedList {
    'hasNext'?: boolean;
    'limit'?: number;
    'items'?: Array<MenuSummary> | null;
    'offset'?: number;
    'totalCount'?: number;
    'aggs'?: { [key: string]: any; } | null;
}

