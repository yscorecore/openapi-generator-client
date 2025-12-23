/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderPlanCreatedRes } from './order-plan-created-res';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface OrderPlanCreatedDto2 {
    'orderPlanId'?: string;
    'schoolName'?: string | null;
    'orderCode'?: string | null;
    'orderPlanCount'?: number;
    'orderType'?: OrderType;
    'plans'?: Array<OrderPlanCreatedRes> | null;
}



