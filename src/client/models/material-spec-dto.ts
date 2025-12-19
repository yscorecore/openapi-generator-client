/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface MaterialSpecDto {
    'materialId'?: string;
    'materialName'?: string | null;
    'materialType'?: number;
    'materialTypeName'?: string | null;
    'unit'?: UnitType;
    'factor'?: number;
    'fullName'?: string | null;
    'isMain'?: boolean;
    'isManaged'?: boolean;
    'remark'?: string | null;
    'isStandard'?: boolean;
    'edible'?: boolean;
    'imageUrl'?: Array<string> | null;
    'minPrice'?: number | null;
    'maxPrice'?: number | null;
}



