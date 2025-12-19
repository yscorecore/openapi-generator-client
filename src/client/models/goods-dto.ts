/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { GoodsStatus } from './goods-status';
// May contain unused imports in some cases
// @ts-ignore
import type { MainSupplierDto1 } from './main-supplier-dto1';
// May contain unused imports in some cases
// @ts-ignore
import type { MaterialSpecDto } from './material-spec-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';

export interface GoodsDto {
    'id'?: string;
    'supplierId'?: string;
    'supplier'?: MainSupplierDto1;
    'materialSpec'?: MaterialSpecDto;
    'materialSpecId'?: string;
    'details'?: string | null;
    'logoImage'?: string | null;
    'bannerImages'?: Array<string> | null;
    'productDate'?: string | null;
    'qgpUnit'?: QgpUnit;
    'qgp'?: number;
    'price'?: number | null;
    'brand'?: string | null;
    'certificateUrl'?: Array<string> | null;
    'status'?: GoodsStatus;
}



