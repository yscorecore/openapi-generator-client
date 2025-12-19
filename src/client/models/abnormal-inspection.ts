/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface AbnormalInspection {
    'stockInItemId'?: string;
    'stockInItemCode'?: string | null;
    'goodsAmount'?: number;
    'goodsName'?: string | null;
    'goodsUnit'?: string | null;
    'goodsPrice'?: number;
    'unit'?: UnitType;
    'totalPrice'?: number;
    'certificateUrl'?: Array<string> | null;
    'reasion'?: string | null;
    'completeUser'?: string | null;
    'completeTime'?: string | null;
    'startTime'?: string;
    'endTime'?: string;
    'videoCode'?: string | null;
    'nvrCode'?: string | null;
    'nvrChannel'?: number | null;
    'tags'?: Array<string> | null;
    'viewerCount'?: number;
    'imageUrl'?: Array<string> | null;
    'peelingAmount'?: number;
    'weight'?: number | null;
    'count'?: number | null;
}



