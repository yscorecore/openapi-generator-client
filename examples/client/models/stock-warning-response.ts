/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockWarningResponse {
    'id'?: string;
    'name'?: string | null;
    'threshold'?: number;
    'enabled'?: boolean;
    'isMaterial'?: boolean;
    'unit'?: UnitType;
    'schoolId'?: string;
    'orgCode'?: string | null;
    'createTime'?: string;
}



