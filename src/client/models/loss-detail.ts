/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface LossDetail {
    'batchCode'?: string | null;
    'materialFullName'?: string | null;
    'stockInAmount'?: number;
    'stockOutAmount'?: number;
    'stockReturnAmount'?: number;
    'deepProcessingAmount'?: number;
    'lossAmount'?: number;
    'unit'?: UnitType;
}



