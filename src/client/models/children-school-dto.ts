/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrgLevel } from './org-level';
// May contain unused imports in some cases
// @ts-ignore
import type { PurchaseKind } from './purchase-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolKind } from './school-kind';

export interface ChildrenSchoolDto {
    'id'?: string;
    'name'?: string | null;
    'areaCode'?: string | null;
    'orgCode'?: string | null;
    'code'?: string | null;
    'lng'?: number;
    'lat'?: number;
    'purchaseKind'?: PurchaseKind;
    'kind'?: SchoolKind;
    'level'?: OrgLevel;
    'owner'?: boolean;
}



