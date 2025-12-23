/* tslint:disable */
/* eslint-disable */

import { send } from "../base"

/**
 * ConfigApi - API class
 */
export class ConfigApi {
    /**
     * 
     * @summary 查询配置信息
     * @param string hwcode 
     */
    public configGet(hwcode: string): Promise<{ [key: string]: any; }> {
        return send({
            url: '/config',
            method: 'GET',
            headers: {
                hwcode: hwcode,
            },
        });
    }
}

/**
 * ConfigApi - instance
 */
export const ConfigApiInstance = new ConfigApi();

