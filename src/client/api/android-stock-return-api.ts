/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { AddCarryOverReq } from "../models"
import type { BooleanCodeResult } from "../models"
import type { CheckDetailReq } from "../models"
import type { CheckDetailResCodeResult } from "../models"
import type { CheckDetailResListCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { GuidCodeResult } from "../models"
import type { ImageBindInfo } from "../models"
import type { ModifyCheckMultipleReq } from "../models"
import type { StockInForReturnDtoListCodeResult } from "../models"
import type { StockReturnAddBySoftReq } from "../models"
import type { StockReturnAddReq } from "../models"

/**
 * AndroidStockReturnApi - API class
 */
export class AndroidStockReturnApi {
    /**
     * 
     * @param ImageBindInfo? imageBindInfo 
     */
    public scaleReturnBindImagePost(imageBindInfo?: ImageBindInfo): Promise<BooleanCodeResult> {
        return send({
            url: `/scale/return/bind-image`,
            method: 'POST',
            body: imageBindInfo,
        });
    }
    /**
     * 
     * @summary 增加退货
     * @param StockReturnAddBySoftReq? stockReturnAddBySoftReq 
     */
    public scaleReturnBySoftPost(stockReturnAddBySoftReq?: StockReturnAddBySoftReq): Promise<GuidCodeResult> {
        return send({
            url: `/scale/return-by-soft`,
            method: 'POST',
            body: stockReturnAddBySoftReq,
        });
    }
    /**
     * 
     * @param AddCarryOverReq? addCarryOverReq 
     */
    public scaleReturnCarryOverPost(addCarryOverReq?: AddCarryOverReq): Promise<CodeResult> {
        return send({
            url: `/scale/return/carry-over`,
            method: 'POST',
            body: addCarryOverReq,
        });
    }
    /**
     * 
     * @param string? stockInId 
     */
    public scaleReturnChecksGet(stockInId?: string): Promise<CheckDetailResListCodeResult> {
        return send({
            url: `/scale/return/checks`,
            method: 'GET',
            params: {
                stockInId: stockInId,
            },
        });
    }
    /**
     * 
     * @summary 删除单次验收
     * @param string id 
     */
    public scaleReturnChecksIdDelete(id: string): Promise<BooleanCodeResult> {
        return send({
            url: `/scale/return/checks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @param CheckDetailReq? checkDetailReq 
     */
    public scaleReturnChecksPost(checkDetailReq?: CheckDetailReq): Promise<CheckDetailResCodeResult> {
        return send({
            url: `/scale/return/checks`,
            method: 'POST',
            body: checkDetailReq,
        });
    }
    /**
     * 
     * @param ModifyCheckMultipleReq? modifyCheckMultipleReq 
     */
    public scaleReturnModifyCheckMultiplePost(modifyCheckMultipleReq?: ModifyCheckMultipleReq): Promise<CodeResult> {
        return send({
            url: `/scale/return/modifyCheckMultiple`,
            method: 'POST',
            body: modifyCheckMultipleReq,
        });
    }
    /**
     * 
     */
    public scaleReturnOrdersGet(): Promise<StockInForReturnDtoListCodeResult> {
        return send({
            url: `/scale/return_orders`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 增加退货
     * @param StockReturnAddReq? stockReturnAddReq 
     */
    public scaleReturnPost(stockReturnAddReq?: StockReturnAddReq): Promise<GuidCodeResult> {
        return send({
            url: `/scale/return`,
            method: 'POST',
            body: stockReturnAddReq,
        });
    }
}

/**
 * AndroidStockReturnApi - instance
 */
export const AndroidStockReturnApiInstance = new AndroidStockReturnApi();

