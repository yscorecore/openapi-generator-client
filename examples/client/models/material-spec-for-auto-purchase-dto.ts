/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface MaterialSpecForAutoPurchaseDto {
    'id'?: string;
    'materialId'?: string;
    'materialAbsoluteUnit'?: UnitType;
    'materialName'?: string | null;
    'fullName'?: string | null;
    'factor'?: number;
    'unit'?: UnitType;
    'isMain'?: boolean;
    'isAvailable'?: boolean;
}



