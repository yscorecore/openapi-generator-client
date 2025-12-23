/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeInfo } from "../models"

/**
 * CodeApi - API class
 */
export class CodeApi {
    /**
     * 
     */
    public codesAllGet(): Promise<{ [key: string]: Array<CodeInfo>; }> {
        return send({
            url: '/codes/all',
            method: 'GET',
        });
    }
}

/**
 * CodeApi - instance
 */
export const CodeApiInstance = new CodeApi();

