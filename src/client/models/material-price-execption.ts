/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface MaterialPriceExecption {
    'stockInItemCode'?: string | null;
    'schoolName'?: string | null;
    'schoolAreaFullName'?: string | null;
    'goodsName'?: string | null;
    'goodsPrice'?: number;
    'areaCode'?: string | null;
    'date'?: string;
    'brand'?: string | null;
    'unit'?: UnitType;
    'avgMaterialPrice'?: number;
    'avgMaterialPriceFloat'?: number;
    'normalizedPrice'?: number | null;
    'avgPriceUnit'?: UnitType;
    'materialPriceIds'?: Array<string> | null;
}



