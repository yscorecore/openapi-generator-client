/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { SafeOrderConfig } from './safe-order-config';

export interface SchoolConfigForAutoPurchaseDto {
    'autoSendDailyOrder'?: boolean;
    'autoDailyOrderDays'?: number;
    'autoSendSafeOrder'?: boolean;
    'config'?: SafeOrderConfig;
    'exceptionNotification'?: boolean;
    'exceptionNotificationPhone'?: string | null;
}

