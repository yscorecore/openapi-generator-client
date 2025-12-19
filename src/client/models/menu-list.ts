/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MenuDate } from './menu-date';
// May contain unused imports in some cases
// @ts-ignore
import type { MenuOneDay } from './menu-one-day';

export interface MenuList {
    'menuDate'?: Array<MenuDate> | null;
    'menu'?: Array<MenuOneDay> | null;
}

