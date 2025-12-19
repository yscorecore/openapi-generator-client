/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MaterialDetailDto } from './material-detail-dto';

export interface MaterialDetailDtoPaginationRes {
    'page'?: number;
    'size'?: number;
    'items'?: Array<MaterialDetailDto> | null;
    'totalRows'?: number;
    'totalPages'?: number;
}

