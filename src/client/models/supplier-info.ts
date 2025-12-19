/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MainSupplierInfo } from './main-supplier-info';
// May contain unused imports in some cases
// @ts-ignore
import type { MainSupplierStatus } from './main-supplier-status';

export interface SupplierInfo {
    'id'?: string;
    'name'?: string | null;
    'score'?: number | null;
    'qualityScore'?: number | null;
    'timeScore'?: number | null;
    'status'?: MainSupplierStatus;
    'serviceScore'?: number | null;
    'contactTel'?: string | null;
    'contact'?: string | null;
    'lat'?: number;
    'lng'?: number;
    'minBidingPrice'?: number | null;
    'minBidingCount'?: number | null;
    'maxBidingDistince'?: number | null;
    'mainSupplier'?: Array<MainSupplierInfo> | null;
}



