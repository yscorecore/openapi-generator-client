/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface LossException {
    'stockInItemCode'?: string | null;
    'goodsName'?: string | null;
    'goodsAmount'?: number;
    'stockOutAmount'?: number;
    'stockReturnAmount'?: number;
    'deepProcessingAmount'?: number;
    'lossAmount'?: number;
    'unit'?: UnitType;
}



