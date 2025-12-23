/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AggData } from './agg-data';
// May contain unused imports in some cases
// @ts-ignore
import type { AlarmEventDto } from './alarm-event-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { AreaAggDataDto } from './area-agg-data-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { CheckCount } from './check-count';
// May contain unused imports in some cases
// @ts-ignore
import type { Complaint } from './complaint';
// May contain unused imports in some cases
// @ts-ignore
import type { LeaderMealDto1 } from './leader-meal-dto1';
// May contain unused imports in some cases
// @ts-ignore
import type { MenuDto1 } from './menu-dto1';
// May contain unused imports in some cases
// @ts-ignore
import type { ReservedSample } from './reserved-sample';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolEventDto } from './school-event-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemDto2 } from './stock-in-item-dto2';
// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemGruopByDto } from './stock-in-item-gruop-by-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { StudentCount } from './student-count';
// May contain unused imports in some cases
// @ts-ignore
import type { VideoPathDto } from './video-path-dto';

export interface AllDataDto {
    'peiCanDto'?: Array<Array<LeaderMealDto1>> | null;
    'menuDto'?: Array<Array<MenuDto1>> | null;
    'reservedSample'?: Array<ReservedSample> | null;
    'stockInItemDto'?: Array<StockInItemDto2> | null;
    'stockInItemGruopByDto'?: StockInItemGruopByDto;
    'areaAggData'?: Array<AreaAggDataDto> | null;
    'videoPathDto'?: Array<VideoPathDto> | null;
    'checkCount'?: Array<CheckCount> | null;
    'studentCount'?: Array<StudentCount> | null;
    'complaint'?: Array<Complaint> | null;
    'schoolEvents'?: Array<SchoolEventDto> | null;
    'alarmEvents'?: Array<AlarmEventDto> | null;
    'aggData'?: AggData;
}

