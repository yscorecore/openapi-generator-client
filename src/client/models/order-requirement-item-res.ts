/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface OrderRequirementItemRes {
    'id'?: string;
    'amount'?: number;
    'remarks'?: string | null;
    'materialSpecId'?: string;
    'materialSpecFullName'?: string | null;
    'unit'?: UnitType;
    'materialTypeName'?: string | null;
}



