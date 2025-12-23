/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockWarningReq {
    'name': string;
    'threshold': number;
    'enabled'?: boolean;
    'isMaterial'?: boolean;
    'unit'?: UnitType;
}



