/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { DailyExceptionModelCodeResult } from "../models"
import type { TodoOperateCodeResult } from "../models"

/**
 * DailyExceptionApi - API class
 */
export class DailyExceptionApi {
    /**
     * 
     * @summary 今日异常
     */
    public dailyexceptionExceptionGet(): Promise<DailyExceptionModelCodeResult> {
        return send({
            url: `/dailyexception/exception`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 今日待办
     */
    public dailyexceptionTodotodayGet(): Promise<TodoOperateCodeResult> {
        return send({
            url: `/dailyexception/todotoday`,
            method: 'GET',
        });
    }
}

/**
 * DailyExceptionApi - instance
 */
export const DailyExceptionApiInstance = new DailyExceptionApi();

