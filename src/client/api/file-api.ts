/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { FileUploadObjectCodeResult } from "../models"

/**
 * FileApi - API class
 */
export class FileApi {
    /**
     * 
     * @param string category 
     */
    public apiFileUploadCategoryPost(category: string | null): Promise<FileUploadObjectCodeResult> {
        return send({
            url: `/api/File/upload/{category}`
                .replace(`{${"category"}}`, encodeURIComponent(String(category))),
            method: 'POST',
        });
    }
}

/**
 * FileApi - instance
 */
export const FileApiInstance = new FileApi();

