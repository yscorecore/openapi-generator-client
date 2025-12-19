/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { CodeResult } from "../models"
import type { GuidArrayCodeResult } from "../models"
import type { GuidCreateFileDto } from "../models"
import type { GuidCreateFolderDto } from "../models"
import type { GuidRenameFileDto } from "../models"

/**
 * CloudFileApi - API class
 */
export class CloudFileApi {
    /**
     * 
     * @param Array<string>? requestBody 
     */
    public apiCloudFileDelete(requestBody?: Array<string> | null): Promise<CodeResult> {
        return send({
            url: `/api/CloudFile`,
            method: 'DELETE',
            body: requestBody,
        });
    }
    /**
     * 
     * @param Array<GuidCreateFolderDto>? guidCreateFolderDto 
     */
    public apiCloudFileFoldersPost(guidCreateFolderDto?: Array<GuidCreateFolderDto> | null): Promise<GuidArrayCodeResult> {
        return send({
            url: `/api/CloudFile/folders`,
            method: 'POST',
            body: guidCreateFolderDto,
        });
    }
    /**
     * 
     * @param Array<GuidCreateFileDto>? guidCreateFileDto 
     */
    public apiCloudFilePost(guidCreateFileDto?: Array<GuidCreateFileDto> | null): Promise<GuidArrayCodeResult> {
        return send({
            url: `/api/CloudFile`,
            method: 'POST',
            body: guidCreateFileDto,
        });
    }
    /**
     * 
     * @param GuidRenameFileDto? guidRenameFileDto 
     */
    public apiCloudFileRenamePost(guidRenameFileDto?: GuidRenameFileDto): Promise<CodeResult> {
        return send({
            url: `/api/CloudFile/rename`,
            method: 'POST',
            body: guidRenameFileDto,
        });
    }
}

/**
 * CloudFileApi - instance
 */
export const CloudFileApiInstance = new CloudFileApi();

