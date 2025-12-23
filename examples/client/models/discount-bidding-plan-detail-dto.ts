/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ConfirmDto } from './confirm-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { DiscountBiddingReplyDto } from './discount-bidding-reply-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { DiscountBiddingStatus } from './discount-bidding-status';

export interface DiscountBiddingPlanDetailDto {
    'id'?: string;
    'createTime'?: string;
    'materialType'?: number;
    'materialTypeName'?: string | null;
    'status'?: DiscountBiddingStatus;
    'biddingDeadline'?: string;
    'remarks'?: string | null;
    'imageUrl'?: Array<string> | null;
    'estimatedTotalPrice'?: number;
    'estimatedDinnerCount'?: number;
    'startDate'?: string;
    'endDate'?: string;
    'confirm'?: ConfirmDto;
    'replies'?: Array<DiscountBiddingReplyDto> | null;
}



