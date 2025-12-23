/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface BatchInfo {
    'stockInItemId'?: string;
    'materialFullName'?: string | null;
    'batchCode'?: string | null;
    'price'?: number;
    'supplier'?: string | null;
    'brand'?: string | null;
    'imageUrl'?: Array<string> | null;
    'videoCode'?: string | null;
    'unitPrice'?: number | null;
    'date'?: string;
    'unit'?: UnitType;
    'viewerCount'?: number;
    'factor'?: number;
    'materialMaterialAbsoluteUnit'?: UnitType;
    'normalizedPrice'?: number;
}



