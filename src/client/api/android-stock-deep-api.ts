/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BooleanCodeResult } from "../models"
import type { CheckDetailReq } from "../models"
import type { CheckDetailResCodeResult } from "../models"
import type { CheckDetailResListCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { GuidCodeResult } from "../models"
import type { ImageBindInfo } from "../models"
import type { ModifyCheckMultipleReq } from "../models"
import type { StockDeepAddReq } from "../models"
import type { StockDeepAddReq2 } from "../models"
import type { StockInItemCodesListCodeResult } from "../models"

/**
 * AndroidStockDeepApi - API class
 */
export class AndroidStockDeepApi {
    /**
     * 
     */
    public scaleDeepAllstockitemsGet(): Promise<StockInItemCodesListCodeResult> {
        return send({
            url: `/scale/deep/allstockitems`,
            method: 'GET',
        });
    }
    /**
     * 
     * @param ImageBindInfo? imageBindInfo 
     */
    public scaleDeepBindImagePost(imageBindInfo?: ImageBindInfo): Promise<BooleanCodeResult> {
        return send({
            url: `/scale/deep/bind-image`,
            method: 'POST',
            body: imageBindInfo,
        });
    }
    /**
     * 
     */
    public scaleDeepChecksGet(): Promise<CheckDetailResListCodeResult> {
        return send({
            url: `/scale/deep/checks`,
            method: 'GET',
        });
    }
    /**
     * 
     * @param string id 
     */
    public scaleDeepChecksIdDelete(id: string): Promise<BooleanCodeResult> {
        return send({
            url: `/scale/deep/checks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @param CheckDetailReq? checkDetailReq 
     */
    public scaleDeepChecksPost(checkDetailReq?: CheckDetailReq): Promise<CheckDetailResCodeResult> {
        return send({
            url: `/scale/deep/checks`,
            method: 'POST',
            body: checkDetailReq,
        });
    }
    /**
     * 
     * @param ModifyCheckMultipleReq? modifyCheckMultipleReq 
     */
    public scaleDeepModifyCheckMultiplePost(modifyCheckMultipleReq?: ModifyCheckMultipleReq): Promise<CodeResult> {
        return send({
            url: `/scale/deep/modifyCheckMultiple`,
            method: 'POST',
            body: modifyCheckMultipleReq,
        });
    }
    /**
     * 
     * @param StockDeepAddReq? stockDeepAddReq 
     */
    public scaleDeepPost(stockDeepAddReq?: StockDeepAddReq): Promise<GuidCodeResult> {
        return send({
            url: `/scale/deep`,
            method: 'POST',
            body: stockDeepAddReq,
        });
    }
    /**
     * 
     * @param StockDeepAddReq2? stockDeepAddReq2 
     */
    public scaleDeepSoftPost(stockDeepAddReq2?: StockDeepAddReq2): Promise<GuidCodeResult> {
        return send({
            url: `/scale/deep/soft`,
            method: 'POST',
            body: stockDeepAddReq2,
        });
    }
}

/**
 * AndroidStockDeepApi - instance
 */
export const AndroidStockDeepApiInstance = new AndroidStockDeepApi();

