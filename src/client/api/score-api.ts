/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { ScoreDtoCodeResult } from "../models"

/**
 * ScoreApi - API class
 */
export class ScoreApi {
    /**
     * 
     * @summary 获取所有打分
     */
    public scoreGet(): Promise<ScoreDtoCodeResult> {
        return send({
            url: '/score',
            method: 'GET',
        });
    }
}

/**
 * ScoreApi - instance
 */
export const ScoreApiInstance = new ScoreApi();

