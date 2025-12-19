/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { SchoolMenuDto } from './school-menu-dto';

export interface MenuOneDay {
    'menuDate'?: string;
    'dayOfWeek'?: number;
    'dayName'?: string | null;
    'breakfast'?: Array<SchoolMenuDto> | null;
    'lunch'?: Array<SchoolMenuDto> | null;
    'dinner'?: Array<SchoolMenuDto> | null;
    'morningExtraMeal'?: Array<SchoolMenuDto> | null;
    'afternoonExtraMeal'?: Array<SchoolMenuDto> | null;
    'eveningExtraMeal'?: Array<SchoolMenuDto> | null;
}

