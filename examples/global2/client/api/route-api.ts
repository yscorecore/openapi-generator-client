/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { RouteInfo } from "../models/route-info"

/**
 * RouteApi - API class
 */
class RouteApi {
    /**
     * 
     * @summary 获取硬件的配置信息
     * @param string hwcode 
     */
    public routeGet(hwcode: string): Promise<RouteInfo> {
        return send({
            url: '/route',
            method: 'GET',
            params: {
                hwcode: hwcode,
            },
        });
    }
}

/**
 * RouteApi - instance
 */
export const routeApi = new RouteApi();

