/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MainSupplierStatus } from './main-supplier-status';

export interface SchoolSupplierDto {
    'id'?: string;
    'name'?: string | null;
    'totalCount'?: number;
    'totalPrices'?: number;
    'qualityScore'?: number | null;
    'timeScore'?: number | null;
    'serviceScore'?: number | null;
    'overallScore'?: number | null;
    'mainSupplierStatus'?: MainSupplierStatus;
    'inBlack'?: boolean;
    'minServiceTime'?: string;
    'maxServiceTime'?: string;
    'licenceImage'?: string | null;
    'imageUrl'?: Array<string> | null;
    'contact'?: string | null;
    'location'?: string | null;
    'contactTel'?: string | null;
}



