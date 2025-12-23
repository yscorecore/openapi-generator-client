/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderPlanListDto } from './order-plan-list-dto';

export interface OrderPlanListDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<OrderPlanListDto> | null;
    'totalRows'?: number;
}

