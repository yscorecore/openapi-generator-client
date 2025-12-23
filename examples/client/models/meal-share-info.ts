/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AccompanyDto } from './accompany-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MenuDto } from './menu-dto';

export interface MealShareInfo {
    'menus'?: Array<MenuDto> | null;
    'accompanys'?: Array<AccompanyDto> | null;
}

