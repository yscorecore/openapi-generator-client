/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface AutoPurchaseConfigForEditReqDto {
    'id'?: string;
    'materialSpecId'?: string;
    'mainSupplierId'?: string;
    'minStockIn': number;
    'minOrderCount': number;
    'orderType'?: OrderType;
}



