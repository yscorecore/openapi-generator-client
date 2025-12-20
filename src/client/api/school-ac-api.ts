/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AcInfoCodeResult } from "../models"

/**
 * SchoolAcApi - API class
 */
export class SchoolAcApi {
    /**
     * 
     * @param string id 
     */
    public acIdGet(id: string): Promise<AcInfoCodeResult> {
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

