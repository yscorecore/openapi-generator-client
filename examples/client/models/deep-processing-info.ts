/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ProdctionStatus } from './prodction-status';
// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';

export interface DeepProcessingInfo {
    'deepProcessingId'?: string;
    'stockInItemId'?: string;
    'stockInItemGoodsName'?: string | null;
    'stockInItemGoodsUnit'?: string | null;
    'stockInItemGoodsPrice'?: number;
    'stockInItemRequirement'?: number;
    'stockInItemBrand'?: string | null;
    'stockInItemQgp'?: number;
    'stockInItemQgpUnit'?: QgpUnit;
    'stockInItemProductDate'?: string;
    'stockInItemStatus'?: ProdctionStatus;
    'totalPrice'?: number;
    'videoCode'?: string | null;
    'nvrChannel'?: number;
    'nvrCode'?: string | null;
    'startTime'?: string;
    'endTime'?: string;
    'tags'?: Array<string> | null;
    'viewerCount'?: number;
    'imageUrl'?: Array<string> | null;
    'goodsAmount'?: number;
    'peelingAmount'?: number;
    'weight'?: number | null;
}



