/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface OrderSampleDto {
    'stockInItemId'?: string;
    'batchCode'?: string | null;
    'supplier'?: string | null;
    'brand'?: string | null;
    'fullName'?: string | null;
    'imageUrl'?: string | null;
    'date'?: string;
    'weight'?: number;
    'id'?: string;
    'createTime'?: string;
    'destroyTime'?: string;
    'createUser'?: string | null;
    'orderType'?: OrderType;
    'schoolName'?: string | null;
}



