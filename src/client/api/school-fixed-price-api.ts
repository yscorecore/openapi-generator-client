/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { CodeResult } from "../models"
import type { FixSpecPriceReq } from "../models"
import type { FixedPriceSpecDtoPaginationDataCodeResult } from "../models"

/**
 * SchoolFixedPriceApi - API class
 */
export class SchoolFixedPriceApi {
    /**
     * 
     * @summary 获取食材的固定价格
     * @param string? name 
     * @param number? materialType 
     * @param number? offset 
     * @param number? limit 
     */
    public schoolFixedPriceGet(name?: string | null, materialType?: number | null, offset?: number, limit?: number): Promise<FixedPriceSpecDtoPaginationDataCodeResult> {
        return send({
            url: `/SchoolFixedPrice`,
            method: 'GET',
            params: {
                Name: name,
                MaterialType: materialType,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 设置固定价格
     * @param Array<FixSpecPriceReq>? fixSpecPriceReq 
     */
    public schoolFixedPricePost(fixSpecPriceReq?: Array<FixSpecPriceReq> | null): Promise<CodeResult> {
        return send({
            url: `/SchoolFixedPrice`,
            method: 'POST',
            body: fixSpecPriceReq,
        });
    }
}

/**
 * SchoolFixedPriceApi - instance
 */
export const SchoolFixedPriceApiInstance = new SchoolFixedPriceApi();

