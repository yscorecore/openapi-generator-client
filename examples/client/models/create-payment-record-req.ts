/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { PaymentType } from './payment-type';

export interface CreatePaymentRecordReq {
    'date'?: string;
    'operator'?: string | null;
    'stockInIds'?: Array<string> | null;
    'totalAmount'?: number;
    'recipient'?: string | null;
    'certificateUrl'?: Array<string> | null;
    'remark'?: string | null;
    'type'?: PaymentType;
}



