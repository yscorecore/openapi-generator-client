/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface AutoPurchaseConfigReqDto {
    'materialSpecId'?: string;
    'mainSupplierId'?: string;
    'minStockIn'?: number;
    'minOrderCount'?: number;
    'orderType'?: OrderType;
    'isActive'?: boolean;
    'determineMinOrderCount'?: boolean;
}



