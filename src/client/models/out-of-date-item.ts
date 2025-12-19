/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface OutOfDateItem {
    'batchCode'?: string | null;
    'materialFullName'?: string | null;
    'remainderAmount'?: number;
    'unit'?: UnitType;
    'productDate'?: string | null;
    'qgp'?: number;
    'qgpUnit'?: QgpUnit;
}



