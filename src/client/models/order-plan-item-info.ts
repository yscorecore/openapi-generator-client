/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MaterialSpecInfo } from './material-spec-info';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderPlanStatus } from './order-plan-status';

export interface OrderPlanItemInfo {
    'createTime'?: string;
    'id'?: string;
    'orderPlanId'?: string;
    'requirement'?: number;
    'remarks'?: string | null;
    'brand'?: string | null;
    'materialSpecId'?: string;
    'materialSpec'?: MaterialSpecInfo;
    'status'?: OrderPlanStatus;
}



