/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AuditState } from './audit-state';

export interface OperationAuditRes {
    'id'?: string;
    'code'?: string | null;
    'description'?: string | null;
    'imageUrl'?: Array<string> | null;
    'state'?: AuditState;
    'reviewTime'?: string | null;
    'advice'?: string | null;
    'operator'?: string | null;
    'createTime'?: string;
}



