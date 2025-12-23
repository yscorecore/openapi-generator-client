/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { DishInfo } from "../models"
import type { DishRequestInfo } from "../models"

/**
 * SchoolAIMealApi - API class
 */
export class SchoolAIMealApi {
    /**
     * 
     * @param DishRequestInfo? dishRequestInfo 
     */
    public smartrecipesGetPost(dishRequestInfo?: DishRequestInfo): Promise<Array<DishInfo>> {
        return send({
            url: '/smartrecipes/get',
            method: 'POST',
            body: dishRequestInfo,
        });
    }
}

/**
 * SchoolAIMealApi - instance
 */
export const SchoolAIMealApiInstance = new SchoolAIMealApi();

