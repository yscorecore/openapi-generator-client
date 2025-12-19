/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { BiddingMarketType } from './bidding-market-type';
// May contain unused imports in some cases
// @ts-ignore
import type { MobileNotification } from './mobile-notification';
// May contain unused imports in some cases
// @ts-ignore
import type { VideoShowTime } from './video-show-time';

export interface AreaConfiguration {
    'internetAvgRriceFloattingRange'?: number;
    'localOfTheDayAvgPriceFloattingRange'?: number;
    'ingredientNames'?: Array<string> | null;
    'floatingRangeOfDinerCountDiff'?: number;
    'lossFloattingRange'?: number;
    'capitaCostSuperiorFloattingRange'?: number;
    'capitaCostDownFloattingRange'?: number;
    'mobileNotifications'?: Array<MobileNotification> | null;
    'marketType'?: BiddingMarketType;
    'marketNotice'?: string | null;
    'isHideAvgCostAnomaliesException'?: boolean;
    'videoShowTime'?: VideoShowTime;
    'compareSameSpecWhenOverLocalAvgPrice'?: boolean;
}



