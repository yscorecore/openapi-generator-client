/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MaterialSpecDto1 } from './material-spec-dto1';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface MaterialAmountWithSpcesDto {
    'amount'?: number;
    'name'?: string | null;
    'materialType'?: number;
    'absoluteUnit'?: UnitType;
    'mealUnit'?: UnitType;
    'specs'?: Array<MaterialSpecDto1> | null;
    'recommendSpecId'?: string;
}



