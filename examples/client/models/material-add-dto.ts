/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { CertificateKind } from './certificate-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MaterialSpecAddDto } from './material-spec-add-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface MaterialAddDto {
    'type'?: number;
    'ingredientsNutritionStandardId'?: string;
    'isDeepProcessing'?: boolean;
    'certificateKind'?: CertificateKind;
    'name': string;
    'absoluteUnit'?: UnitType;
    'specs'?: Array<MaterialSpecAddDto> | null;
}



