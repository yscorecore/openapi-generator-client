/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AcInfo } from "../models"

/**
 * SchoolAcApi - API class
 */
export class SchoolAcApi {
    /**
     * 
     * @param string id 
     */
    public acIdGet(id: string): Promise<AcInfo> {
        return send({
            url: '/ac/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
}

/**
 * SchoolAcApi - instance
 */
export const SchoolAcApiInstance = new SchoolAcApi();

