/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ModifyOrderRequirementItemReq } from './modify-order-requirement-item-req';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface ModifyOrderRequirementReq {
    'id'?: string;
    'orderType'?: OrderType;
    'latestDeliveryTime'?: string;
    'items'?: Array<ModifyOrderRequirementItemReq> | null;
}



