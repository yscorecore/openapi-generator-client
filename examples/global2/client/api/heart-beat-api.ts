/* tslint:disable */
/* eslint-disable */

import { send } from "../base"

/**
 * HeartBeatApi - API class
 */
export class HeartBeatApi {
    /**
     * 
     * @summary 心跳检查
     * @param string hwcode 
     */
    public heartBeatGet(hwcode: string): Promise<void> {
        return send({
            url: '/HeartBeat',
            method: 'GET',
            headers: {
                hwcode: hwcode,
            },
        });
    }
}

/**
 * HeartBeatApi - instance
 */
export const heartBeatApi = new HeartBeatApi();

