/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { DeepProcessingStatus } from './deep-processing-status';

export interface StockDeepItemListDto {
    'id'?: string;
    'orderId'?: string;
    'goodsName'?: string | null;
    'goodsAmount'?: number;
    'goodsPrice'?: number;
    'imageUrl'?: Array<string> | null;
    'totalPrice'?: number;
    'goodsUnit'?: string | null;
    'createUser'?: string | null;
    'createTime'?: string;
    'status'?: DeepProcessingStatus;
    'deepProcessingGoodsName'?: string | null;
    'date'?: string | null;
    'deppProessingPrice'?: number;
    'videoCode'?: string | null;
    'receiveUser'?: string | null;
    'schoolName'?: string | null;
}



