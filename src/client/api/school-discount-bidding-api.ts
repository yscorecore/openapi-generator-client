/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeResult } from "../models"
import type { ConfirmReplyReq } from "../models"
import type { CreateDiscountBiddingPlanDto } from "../models"
import type { DiscountBiddingPlanDetailDtoCodeResult } from "../models"
import type { DiscountBiddingPlanDtoPaginationDataCodeResult } from "../models"
import type { GuidCodeResult } from "../models"

/**
 * SchoolDiscountBiddingApi - API class
 */
export class SchoolDiscountBiddingApi {
    /**
     * 
     * @summary 确认竞价
     * @param ConfirmReplyReq? confirmReplyReq 
     */
    public discountBiddingConfirmPost(confirmReplyReq?: ConfirmReplyReq): Promise<GuidCodeResult> {
        return send({
            url: `/discount-bidding/confirm`,
            method: 'POST',
            body: confirmReplyReq,
        });
    }
    /**
     * 
     * @summary 删除折扣竞价
     * @param string id 
     */
    public discountBiddingIdDelete(id: string): Promise<CodeResult> {
        return send({
            url: `/discount-bidding/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取竞价详情
     * @param string id 
     */
    public discountBiddingIdGet(id: string): Promise<DiscountBiddingPlanDetailDtoCodeResult> {
        return send({
            url: `/discount-bidding/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取折扣竞价列表
     * @param number? offset 
     * @param number? limit 
     */
    public discountBiddingListGet(offset?: number, limit?: number): Promise<DiscountBiddingPlanDtoPaginationDataCodeResult> {
        return send({
            url: `/discount-bidding/list`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 创建折扣竞价
     * @param CreateDiscountBiddingPlanDto? createDiscountBiddingPlanDto 
     */
    public discountBiddingPost(createDiscountBiddingPlanDto?: CreateDiscountBiddingPlanDto): Promise<GuidCodeResult> {
        return send({
            url: `/discount-bidding`,
            method: 'POST',
            body: createDiscountBiddingPlanDto,
        });
    }
}

/**
 * SchoolDiscountBiddingApi - instance
 */
export const SchoolDiscountBiddingApiInstance = new SchoolDiscountBiddingApi();

