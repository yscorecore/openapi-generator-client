/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { TargetAndWay } from './target-and-way';

export interface DisinfectDto {
    'id'?: string;
    'date'?: string;
    'createTime'?: string;
    'targetAndWays'?: Array<TargetAndWay> | null;
    'images'?: Array<string> | null;
    'operators'?: Array<string> | null;
    'supervisors'?: Array<string> | null;
    'createUser'?: string | null;
    'schoolName'?: string | null;
}

