/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CheckDetailReq } from "../models"
import type { CheckDetailRes } from "../models"
import type { CodeResult } from "../models"
import type { ImageBindInfo } from "../models"
import type { MealKindWithDate } from "../models"
import type { ModifyCheckMultipleReq } from "../models"
import type { StockInItemCodes } from "../models"
import type { StockOutAddReq } from "../models"
import type { StockOutAddReq2 } from "../models"
import type { StockOutFromStockInAddReq } from "../models"
import type { StockOutFromStockInAddReq2 } from "../models"
import type { StockOutFromStockInAddReq3 } from "../models"
import type { StockOutItemInfo } from "../models"

/**
 * AndroidStockOutApi - API class
 */
export class AndroidStockOutApi {
    /**
     * 
     * @param string? stockInId 
     * @param string? stockInItemId 
     */
    public scaleOutAllstockitemsGet(stockInId?: string | null, stockInItemId?: string | null): Promise<Array<StockInItemCodes>> {
        return send({
            url: '/scale/out/allstockitems',
            method: 'GET',
            params: {
                StockInId: stockInId,
                StockInItemId: stockInItemId,
            },
        });
    }
    /**
     * 
     * @param ImageBindInfo? imageBindInfo 
     */
    public scaleOutBindImagePost(imageBindInfo?: ImageBindInfo): Promise<boolean> {
        return send({
            url: '/scale/out/bind-image',
            method: 'POST',
            body: imageBindInfo,
        });
    }
    /**
     * 
     * @param StockOutAddReq2? stockOutAddReq2 
     */
    public scaleOutBySoftPost(stockOutAddReq2?: StockOutAddReq2): Promise<string> {
        return send({
            url: '/scale/out-by-soft',
            method: 'POST',
            body: stockOutAddReq2,
        });
    }
    /**
     * 
     */
    public scaleOutChecksGet(): Promise<Array<CheckDetailRes>> {
        return send({
            url: '/scale/out/checks',
            method: 'GET',
        });
    }
    /**
     * 
     * @param string id 
     */
    public scaleOutChecksIdDelete(id: string): Promise<boolean> {
        return send({
            url: '/scale/out/checks/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @param CheckDetailReq? checkDetailReq 
     */
    public scaleOutChecksPost(checkDetailReq?: CheckDetailReq): Promise<CheckDetailRes> {
        return send({
            url: '/scale/out/checks',
            method: 'POST',
            body: checkDetailReq,
        });
    }
    /**
     * 
     * @param StockOutFromStockInAddReq? stockOutFromStockInAddReq 
     */
    public scaleOutFromInPost(stockOutFromStockInAddReq?: StockOutFromStockInAddReq): Promise<string> {
        return send({
            url: '/scale/out-from-in',
            method: 'POST',
            body: stockOutFromStockInAddReq,
        });
    }
    /**
     * 
     * @param StockOutFromStockInAddReq2? stockOutFromStockInAddReq2 
     */
    public scaleOutFromInV2Post(stockOutFromStockInAddReq2?: StockOutFromStockInAddReq2): Promise<CodeResult> {
        return send({
            url: '/scale/out-from-in/v2',
            method: 'POST',
            body: stockOutFromStockInAddReq2,
        });
    }
    /**
     * 
     * @param ModifyCheckMultipleReq? modifyCheckMultipleReq 
     */
    public scaleOutModifyCheckMultiplePost(modifyCheckMultipleReq?: ModifyCheckMultipleReq): Promise<CodeResult> {
        return send({
            url: '/scale/out/modifyCheckMultiple',
            method: 'POST',
            body: modifyCheckMultipleReq,
        });
    }
    /**
     * 
     * @param StockOutAddReq? stockOutAddReq 
     */
    public scaleOutPost(stockOutAddReq?: StockOutAddReq): Promise<string> {
        return send({
            url: '/scale/out',
            method: 'POST',
            body: stockOutAddReq,
        });
    }
    /**
     * 
     * @param Array<MealKindWithDate>? mealKindWithDate 
     */
    public scaleOutSummaryAmountPost(mealKindWithDate?: Array<MealKindWithDate> | null): Promise<Array<StockOutItemInfo>> {
        return send({
            url: '/scale/out/summary-amount',
            method: 'POST',
            body: mealKindWithDate,
        });
    }
    /**
     * 
     * @param StockOutFromStockInAddReq3? stockOutFromStockInAddReq3 
     */
    public scaleOutV3Post(stockOutFromStockInAddReq3?: StockOutFromStockInAddReq3): Promise<CodeResult> {
        return send({
            url: '/scale/out/v3',
            method: 'POST',
            body: stockOutFromStockInAddReq3,
        });
    }
}

/**
 * AndroidStockOutApi - instance
 */
export const AndroidStockOutApiInstance = new AndroidStockOutApi();

