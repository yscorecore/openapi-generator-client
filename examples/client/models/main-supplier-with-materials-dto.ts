/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface MainSupplierWithMaterialsDto {
    'id'?: string;
    'areaCode'?: string | null;
    'supplierName'?: string | null;
    'supplierId'?: string;
    'materialSpecId'?: string;
    'specName'?: string | null;
    'factor'?: number;
    'unit'?: UnitType;
    'absoluteUnit'?: UnitType;
    'isManaged'?: boolean;
    'isAvailable'?: boolean;
}



