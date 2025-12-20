/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { StringCodeInfoListDictionaryCodeResult } from "../models"

/**
 * CodeApi - API class
 */
export class CodeApi {
    /**
     * 
     */
    public codesAllGet(): Promise<StringCodeInfoListDictionaryCodeResult> {
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

