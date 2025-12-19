/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MarketType } from './market-type';
// May contain unused imports in some cases
// @ts-ignore
import type { SourceType } from './source-type';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface ReferencePriceDto {
    'productName'?: string | null;
    'materialName'?: string | null;
    'productionUnit'?: UnitType;
    'unitPrice'?: number;
    'date'?: string;
    'market'?: string | null;
    'sourceChannel'?: string | null;
    'sourceType'?: SourceType;
    'marketType'?: MarketType;
    'expirationDate'?: string;
    'packagingUnit'?: UnitType;
    'absoluteUnitPrice'?: number;
    'brand'?: string | null;
    'fromUser'?: string | null;
}



