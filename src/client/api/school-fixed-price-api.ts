/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { FixSpecPriceReq } from "../models"
import type { FixedPriceSpecDtoPaginationData } from "../models"

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
    public schoolFixedPriceGet(name?: string | null, materialType?: number | null, offset?: number, limit?: number): Promise<FixedPriceSpecDtoPaginationData> {
        return send({
            url: '/SchoolFixedPrice',
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
    public schoolFixedPricePost(fixSpecPriceReq?: Array<FixSpecPriceReq> | null): Promise<void> {
        return send({
            url: '/SchoolFixedPrice',
            method: 'POST',
            body: fixSpecPriceReq,
        });
    }
}

/**
 * SchoolFixedPriceApi - instance
 */
export const SchoolFixedPriceApiInstance = new SchoolFixedPriceApi();

