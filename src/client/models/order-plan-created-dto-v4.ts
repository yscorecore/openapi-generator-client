/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderPlanCreatedResV4 } from './order-plan-created-res-v4';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface OrderPlanCreatedDtoV4 {
    'orderPlanId'?: string;
    'schoolName'?: string | null;
    'orderCode'?: string | null;
    'orderType'?: OrderType;
    'orderPlanCount'?: number;
    'plans'?: Array<OrderPlanCreatedResV4> | null;
}



