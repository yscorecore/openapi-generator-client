/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { SchoolKind } from './school-kind';

export interface UserLoginInfo {
    'schoolId'?: string;
    'orgCode'?: string | null;
    'schoolName'?: string | null;
    'schoolKind'?: SchoolKind;
    'hardwareCode'?: string | null;
    'userId'?: string | null;
    'userName'?: string | null;
    'isLogin'?: boolean;
    'isAdmin'?: boolean;
    'schoolLat'?: number;
    'schoolLng'?: number;
    'areaCode'?: string | null;
    'changeOrgVisible'?: boolean;
}



