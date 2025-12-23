/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { PaymentRecordDtoPaginationData } from './payment-record-dto-pagination-data';

export interface PaymentRecordWithTotalAmount {
    'totalAmount'?: number;
    'paymentRecords'?: PaymentRecordDtoPaginationData;
}

