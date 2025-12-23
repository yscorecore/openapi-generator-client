/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AccompanyRequestStatus } from './accompany-request-status';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface ParentAccompanyRequestDto {
    'id'?: string;
    'date'?: string;
    'grade'?: string | null;
    'studentName'?: string | null;
    'parentName'?: string | null;
    'parentTel'?: string | null;
    'kind'?: MealKind;
    'status'?: AccompanyRequestStatus;
    'auditTime'?: string | null;
    'auditUser'?: string | null;
    'createTime'?: string;
}



