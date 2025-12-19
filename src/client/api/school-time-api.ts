/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { DateTimeCodeResult } from "../models"

/**
 * SchoolTimeApi - API class
 */
export class SchoolTimeApi {
    /**
     * 
     * @summary 获取当前时间
     */
    public timeNowGet(): Promise<DateTimeCodeResult> {
        return send({
            url: `/time/now`,
            method: 'GET',
        });
    }
}

/**
 * SchoolTimeApi - instance
 */
export const SchoolTimeApiInstance = new SchoolTimeApi();

