/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MainSupplierMaterialTypeConfigDto } from './main-supplier-material-type-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MainSupplierStatus } from './main-supplier-status';

export interface AreaMainSupplierDto {
    'id'?: string;
    'supplierId'?: string;
    'supplierLocation'?: string | null;
    'supplierLng'?: number;
    'supplierLat'?: number;
    'supplierName'?: string | null;
    'supplierQualityScore'?: number | null;
    'supplierTimeScore'?: number | null;
    'supplierServiceScore'?: number | null;
    'supplierOverallScore'?: number | null;
    'status'?: MainSupplierStatus;
    'serviceTypes'?: Array<MainSupplierMaterialTypeConfigDto> | null;
}



