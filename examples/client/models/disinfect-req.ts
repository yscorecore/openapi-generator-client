/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { DisinfectModel } from './disinfect-model';

export interface DisinfectReq {
    'images'?: Array<string> | null;
    'operators'?: Array<string> | null;
    'supervisors'?: Array<string> | null;
    'targetAndWays'?: Array<DisinfectModel> | null;
}

