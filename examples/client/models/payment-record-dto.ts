/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { PaymentType } from './payment-type';

export interface PaymentRecordDto {
    'id'?: string;
    'date'?: string;
    'operator'?: string | null;
    'totalAmount'?: number;
    'recipient'?: string | null;
    'certificateUrl'?: Array<string> | null;
    'remark'?: string | null;
    'createTime'?: string;
    'isMonthSummaryFinished'?: boolean;
    'lastMonthSummaryDate'?: string | null;
    'type'?: PaymentType;
    'schoolName'?: string | null;
}



