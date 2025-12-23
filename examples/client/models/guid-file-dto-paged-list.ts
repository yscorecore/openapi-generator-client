/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { GuidFileDto } from './guid-file-dto';

export interface GuidFileDtoPagedList {
    'hasNext'?: boolean;
    'limit'?: number;
    'items'?: Array<GuidFileDto> | null;
    'offset'?: number;
    'totalCount'?: number;
    'aggs'?: { [key: string]: any; } | null;
}

