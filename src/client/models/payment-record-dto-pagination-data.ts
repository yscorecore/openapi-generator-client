/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { PaymentRecordDto } from './payment-record-dto';

export interface PaymentRecordDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<PaymentRecordDto> | null;
    'totalRows'?: number;
}

