/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { DateTimeArrayCodeResult } from "../models"

/**
 * HaveDataTimeApi - API class
 */
export class HaveDataTimeApi {
    /**
     * 
     * @summary 获取有出餐人数的数据日期
     */
    public havedatatimeDinnercountDateGet(): Promise<DateTimeArrayCodeResult> {
        return send({
            url: `/havedatatime/dinnercount_date`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取有菜单数据的日期
     */
    public havedatatimeMenuDateGet(): Promise<DateTimeArrayCodeResult> {
        return send({
            url: `/havedatatime/menu_date`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取有晨检数据的日期
     */
    public havedatatimeMorningDateGet(): Promise<DateTimeArrayCodeResult> {
        return send({
            url: `/havedatatime/morning_date`,
            method: 'GET',
        });
    }
}

/**
 * HaveDataTimeApi - instance
 */
export const HaveDataTimeApiInstance = new HaveDataTimeApi();

