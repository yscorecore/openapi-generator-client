/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { SchoolKind } from './school-kind';

export interface FreeSchoolDto {
    'areaCode': string;
    'schoolName': string;
    'kind'?: SchoolKind;
    'base64Image': string;
    'lng'?: number;
    'lat'?: number;
    'address': string;
    'user'?: string | null;
    'userTel': string;
    'userOpenId'?: string | null;
}



