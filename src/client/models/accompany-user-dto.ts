/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AccompanyKind } from './accompany-kind';

export interface AccompanyUserDto {
    'id'?: string;
    'wechatId'?: string | null;
    'name'?: string | null;
    'isActive'?: boolean;
    'kind'?: AccompanyKind;
    'isPublic'?: boolean;
}



