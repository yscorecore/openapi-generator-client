/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { CertificateKind } from './certificate-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { CertificateType } from './certificate-type';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderItemCheckInDetailRes } from './order-item-check-in-detail-res';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderItemStatus } from './order-item-status';
// May contain unused imports in some cases
// @ts-ignore
import type { PriceKind } from './price-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface OrderItemCode {
    'id'?: string;
    'goodsName'?: string | null;
    'goodsUnitName'?: string | null;
    'goodsAbsoluteUnit'?: UnitType;
    'goodsFactor'?: number;
    'originalPrice'?: number;
    'goodsPrice'?: number;
    'qgp'?: number;
    'qgpUnit'?: QgpUnit;
    'productCode'?: string | null;
    'remarks'?: string | null;
    'productDate'?: string;
    'certificateKind'?: CertificateKind;
    'certificateType'?: CertificateType;
    'priceKind'?: PriceKind;
    'unit'?: UnitType;
    'requirement'?: number;
    'certificate'?: Array<string> | null;
    'picture'?: Array<string> | null;
    'brand'?: string | null;
    'details'?: Array<OrderItemCheckInDetailRes> | null;
    'status'?: OrderItemStatus;
    'materialSpecId'?: string;
    'acId'?: string | null;
}



