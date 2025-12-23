/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { DailyExceptionModel } from "../models"
import type { TodoOperate } from "../models"

/**
 * DailyExceptionApi - API class
 */
export class DailyExceptionApi {
    /**
     * 
     * @summary 今日异常
     */
    public dailyexceptionExceptionGet(): Promise<DailyExceptionModel> {
        return send({
            url: '/dailyexception/exception',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 今日待办
     */
    public dailyexceptionTodotodayGet(): Promise<TodoOperate> {
        return send({
            url: '/dailyexception/todotoday',
            method: 'GET',
        });
    }
}

/**
 * DailyExceptionApi - instance
 */
export const DailyExceptionApiInstance = new DailyExceptionApi();

