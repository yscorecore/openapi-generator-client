/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OperationObject } from './operation-object';

export interface AuditLogDto {
    'schoolAreaName'?: string | null;
    'schoolName'?: string | null;
    'typeName'?: string | null;
    'description'?: string | null;
    'requestUrl'?: string | null;
    'requestTime'?: string | null;
    'requestIP'?: string | null;
    'createUser'?: string | null;
    'createTime'?: string;
    'errorMessage'?: string | null;
    'duration'?: number;
    'success'?: boolean;
    'operationData'?: OperationObject;
}

