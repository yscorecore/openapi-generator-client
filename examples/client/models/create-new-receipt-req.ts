/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ReceiptChannel } from './receipt-channel';

export interface CreateNewReceiptReq {
    'date'?: string;
    'amount'?: number;
    'operator'?: string | null;
    'certificateUrl'?: Array<string> | null;
    'remark'?: string | null;
    'channel'?: ReceiptChannel;
}



