/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AppversionInfo } from "../models"

/**
 * UpgradeApi - API class
 */
export class UpgradeApi {
    /**
     * 
     * @summary 获取最近一次的升级的版本信息
     * @param string appName 
     * @param string hwcode 
     * @param boolean? manual 
     */
    public upgradeGet(appName: string, hwcode: string, manual?: boolean): Promise<AppversionInfo> {
        return send({
            url: '/upgrade',
            method: 'GET',
            params: {
                appName: appName,
                hwcode: hwcode,
                manual: manual,
            },
        });
    }
}

/**
 * UpgradeApi - instance
 */
export const UpgradeApiInstance = new UpgradeApi();

