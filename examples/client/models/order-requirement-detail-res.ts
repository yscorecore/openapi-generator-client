/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderRequirementItemRes } from './order-requirement-item-res';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderRequirementRes } from './order-requirement-res';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderRequirementStatus } from './order-requirement-status';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface OrderRequirementDetailRes {
    'id'?: string;
    'createUser'?: string | null;
    'schoolName'?: string | null;
    'items'?: Array<OrderRequirementItemRes> | null;
    'orderType'?: OrderType;
    'status'?: OrderRequirementStatus;
    'latestDeliveryTime'?: string;
    'parentId'?: string | null;
    'subRequirementCount'?: number;
    'orderSchoolUser'?: string | null;
    'orderSchoolUserTel'?: string | null;
    'reportSchool'?: string | null;
    'rejectedReason'?: string | null;
    'subRequirements'?: Array<OrderRequirementRes> | null;
}



