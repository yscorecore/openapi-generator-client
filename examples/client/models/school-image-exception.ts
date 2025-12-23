/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { SchoolImageStatus } from './school-image-status';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolImageType } from './school-image-type';

export interface SchoolImageException {
    'url'?: string | null;
    'expiringDate'?: string | null;
    'name'?: string | null;
    'category'?: SchoolImageType;
    'status'?: SchoolImageStatus;
    'createTime'?: string;
}



