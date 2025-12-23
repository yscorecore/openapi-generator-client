/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { SchoolImageType } from './school-image-type';

export interface SchoolImageUpdateDto {
    'id'?: string;
    'url'?: string | null;
    'expiringDate'?: string | null;
    'name'?: string | null;
    'category'?: SchoolImageType;
}



