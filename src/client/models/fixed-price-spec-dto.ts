/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { FixPriceHistoryDto } from './fix-price-history-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface FixedPriceSpecDto {
    'id'?: string;
    'materialId'?: string;
    'unit'?: UnitType;
    'fullName'?: string | null;
    'factor'?: number;
    'isMain'?: boolean;
    'materialType'?: number;
    'materialTypeName'?: string | null;
    'schoolId'?: string | null;
    'schoolName'?: string | null;
    'fixedPriceHistorys'?: Array<FixPriceHistoryDto> | null;
}



