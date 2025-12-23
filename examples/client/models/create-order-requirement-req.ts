/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { CreateOrderRequirementItemReq } from './create-order-requirement-item-req';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface CreateOrderRequirementReq {
    'orderType'?: OrderType;
    'latestDeliveryTime'?: string;
    'items'?: Array<CreateOrderRequirementItemReq> | null;
}



