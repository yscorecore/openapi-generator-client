/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ModifyScope } from './modify-scope';

export interface StockInItemModify {
    'id'?: string;
    'certificateUrl'?: Array<string> | null;
    'beginDate'?: string | null;
    'endDate'?: string | null;
    'modifyScope'?: ModifyScope;
    'supplierId'?: string | null;
    'onlyContainsNoCertificate'?: boolean;
    'materialId'?: string | null;
    'materialType'?: number | null;
}



