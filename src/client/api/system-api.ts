/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { ImageDto } from "../models"
import type { ImageStatusInfo } from "../models"
import type { SchoolImageAddDto } from "../models"
import type { SchoolImageType } from "../models"
import type { SchoolImageUpdateDto } from "../models"

/**
 * SystemApi - API class
 */
export class SystemApi {
    /**
     * 
     * @summary 获取图片过期和即将过期的数量
     */
    public systemAllimagersGet(): Promise<Array<ImageStatusInfo>> {
        return send({
            url: '/System/allimagers',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取资质图，健康图等
     * @param SchoolImageType group 健康图：Health,资质许可证等:Qualification
     */
    public systemImagesGroupGet(group: SchoolImageType): Promise<ImageDto> {
        return send({
            url: '/System/images/{group}'
                .replace(`{${"group"}}`, encodeURIComponent(String(group))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 新增学校图片
     * @param Array<SchoolImageAddDto>? schoolImageAddDto 
     */
    public systemSchoolimageAddPost(schoolImageAddDto?: Array<SchoolImageAddDto> | null): Promise<boolean> {
        return send({
            url: '/System/schoolimage/add',
            method: 'POST',
            body: schoolImageAddDto,
        });
    }
    /**
     * 
     * @summary 删除学校图片
     * @param string? id 
     */
    public systemSchoolimageDeleteDelete(id?: string): Promise<boolean> {
        return send({
            url: '/System/schoolimage/delete',
            method: 'DELETE',
            params: {
                id: id,
            },
        });
    }
    /**
     * 
     * @summary 修改学校图片
     * @param SchoolImageUpdateDto? schoolImageUpdateDto 
     */
    public systemSchoolimageUpdatePut(schoolImageUpdateDto?: SchoolImageUpdateDto): Promise<boolean> {
        return send({
            url: '/System/schoolimage/update',
            method: 'PUT',
            body: schoolImageUpdateDto,
        });
    }
}

/**
 * SystemApi - instance
 */
export const SystemApiInstance = new SystemApi();

