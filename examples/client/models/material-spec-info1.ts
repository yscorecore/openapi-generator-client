/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { CertificateKind } from './certificate-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface MaterialSpecInfo1 {
    'createTime'?: string;
    'id'?: string;
    'materialId'?: string;
    'materialName'?: string | null;
    'materialCertificateKind'?: CertificateKind;
    'materialAbsoluteUnit'?: UnitType;
    'materialType'?: number;
    'materialTypeName'?: string | null;
    'unit'?: UnitType;
    'factor'?: number;
    'fullName'?: string | null;
}



