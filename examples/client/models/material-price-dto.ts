/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MarketType } from './market-type';
// May contain unused imports in some cases
// @ts-ignore
import type { SourceType } from './source-type';

export interface MaterialPriceDto {
    'areaCode'?: string | null;
    'productName'?: string | null;
    'productionUnit'?: string | null;
    'materialName'?: string | null;
    'unitPrice'?: number;
    'date'?: string;
    'market'?: string | null;
    'sourceChannel'?: string | null;
    'sourceType'?: SourceType;
    'marketType'?: MarketType;
    'packagingUnit'?: string | null;
    'absoluteUnitPrice'?: number;
    'brand'?: string | null;
    'fromUser'?: string | null;
}



