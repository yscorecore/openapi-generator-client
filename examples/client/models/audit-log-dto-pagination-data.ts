/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AuditLogDto } from './audit-log-dto';

export interface AuditLogDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<AuditLogDto> | null;
    'totalRows'?: number;
}

