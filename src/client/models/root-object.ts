/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { App } from './app';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';
// May contain unused imports in some cases
// @ts-ignore
import type { UserLoginInfo } from './user-login-info';

export interface RootObject {
    'localUser'?: UserLoginInfo;
    'remoteUser'?: User;
    'apps'?: Array<App> | null;
}

