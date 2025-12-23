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
import type { MaterialSpecDto1 } from './material-spec-dto1';
// May contain unused imports in some cases
// @ts-ignore
import type { PriceKind } from './price-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { SampleIngredientsNutritionStandardDto } from './sample-ingredients-nutrition-standard-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface MaterialDetailDto {
    'id'?: string;
    'name'?: string | null;
    'typeName'?: string | null;
    'type'?: number;
    'absoluteUnit'?: UnitType;
    'mealUnit'?: UnitType;
    'ingredientsNutritionStandardId'?: string;
    'specs'?: Array<MaterialSpecDto1> | null;
    'areaCode'?: string | null;
    'isManaged'?: boolean;
    'isDaily'?: boolean;
    'isPeriod'?: boolean;
    'isDeepProcessing'?: boolean;
    'certificateKind'?: CertificateKind;
    'certificateType'?: CertificateType;
    'disabled'?: boolean;
    'priceKind'?: PriceKind;
    'forceCertificate'?: boolean;
    'postPriceSupportReply'?: boolean;
    'latestFixPriceTime'?: string | null;
    'ingredientsNutritionStandard'?: SampleIngredientsNutritionStandardDto;
}



