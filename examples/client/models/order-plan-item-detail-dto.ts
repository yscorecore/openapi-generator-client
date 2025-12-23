/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderPlanStatus } from './order-plan-status';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderReplyDetailDto } from './order-reply-detail-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface OrderPlanItemDetailDto {
    'id'?: string;
    'createUser'?: string | null;
    'createTime'?: string;
    'orderPlanId'?: string;
    'requirement'?: number;
    'remarks'?: string | null;
    'brand'?: string | null;
    'materialSpecId'?: string;
    'materialSpecFullName'?: string | null;
    'materialSpecUnit'?: UnitType;
    'status'?: OrderPlanStatus;
    'details'?: Array<OrderReplyDetailDto> | null;
}



