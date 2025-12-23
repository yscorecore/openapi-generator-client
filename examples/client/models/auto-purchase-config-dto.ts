/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MainSupplierDto } from './main-supplier-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MaterialSpecForAutoPurchaseDto } from './material-spec-for-auto-purchase-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface AutoPurchaseConfigDto {
    'materialSpecId'?: string;
    'mainSupplierId'?: string;
    'minStockIn'?: number;
    'minOrderCount'?: number;
    'orderType'?: OrderType;
    'isActive'?: boolean;
    'determineMinOrderCount'?: boolean;
    'id'?: string;
    'materialSpec'?: MaterialSpecForAutoPurchaseDto;
    'mainSupplier'?: MainSupplierDto;
}



