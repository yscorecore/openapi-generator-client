/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { MetadataInfo } from "../models"

/**
 * MetadataApi - API class
 */
export class MetadataApi {
    /**
     * 
     */
    public apiMetadataListAllGet(): Promise<Array<string>> {
        return send({
            url: '/api/Metadata/list-all',
            method: 'GET',
        });
    }
    /**
     * 
     * @param string name 
     */
    public apiMetadataNameGet(name: string | null): Promise<MetadataInfo> {
        return send({
            url: '/api/Metadata/{name}'
                .replace(`{${"name"}}`, encodeURIComponent(String(name))),
            method: 'GET',
        });
    }
}

/**
 * MetadataApi - instance
 */
export const MetadataApiInstance = new MetadataApi();

