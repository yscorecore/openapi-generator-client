/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"

/**
 * SchoolStudentDinningApi - API class
 */
export class SchoolStudentDinningApi {
    /**
     * 
     * @summary 就餐码
     * @param string? school 
     * @param boolean? isHyaline 
     */
    public studentDinningShowcodeGet(school?: string, isHyaline?: boolean): Promise<void> {
        return send({
            url: `/student-dinning/showcode`,
            method: 'GET',
            params: {
                school: school,
                is_hyaline: isHyaline,
            },
        });
    }
}

/**
 * SchoolStudentDinningApi - instance
 */
export const SchoolStudentDinningApiInstance = new SchoolStudentDinningApi();

