/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { CountRequestDto } from "../models"
import type { CountResponseDtoCodeResult } from "../models"

/**
 * PaymentApi - API class
 */
export class PaymentApi {
    /**
     * 
     * @summary 刷脸仪人数统计
     * @param CountRequestDto? countRequestDto 
     */
    public paymentCountingPost(countRequestDto?: CountRequestDto): Promise<CountResponseDtoCodeResult> {
        return send({
            url: `/payment/counting`,
            method: 'POST',
            body: countRequestDto,
        });
    }
}

/**
 * PaymentApi - instance
 */
export const PaymentApiInstance = new PaymentApi();

