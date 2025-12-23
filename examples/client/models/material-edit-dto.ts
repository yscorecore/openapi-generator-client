/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { CertificateKind } from './certificate-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MaterialSpecEditDto } from './material-spec-edit-dto';

export interface MaterialEditDto {
    'id'?: string;
    'type'?: number;
    'ingredientsNutritionStandardId'?: string;
    'isDeepProcessing'?: boolean;
    'certificateKind'?: CertificateKind;
    'specs'?: Array<MaterialSpecEditDto> | null;
}



