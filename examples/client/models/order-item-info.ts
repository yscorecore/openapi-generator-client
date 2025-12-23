/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MaterialSpecInfo } from './material-spec-info';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderItemStatus } from './order-item-status';
// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';

export interface OrderItemInfo {
    'createTime'?: string;
    'id'?: string;
    'orderId'?: string;
    'orderPlanItemId'?: string | null;
    'orderReplyItemId'?: string | null;
    'materialSpecId'?: string;
    'materialSpec'?: MaterialSpecInfo;
    'requirement'?: number;
    'certificate'?: Array<string> | null;
    'remarks'?: string | null;
    'unitPrice'?: number;
    'brand'?: string | null;
    'qgp'?: number;
    'qgpUnit'?: QgpUnit;
    'productDate'?: string;
    'status'?: OrderItemStatus;
}



