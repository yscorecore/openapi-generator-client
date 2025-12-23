/* tslint:disable */
/* eslint-disable */



export interface CreateDailyCheckDto {
    'userId'?: string;
    'temperature'?: number;
    'createTime'?: string;
    'imageUrl'?: string | null;
    'frontOfHandImageUrl'?: string | null;
    'exceptions'?: Array<string> | null;
    'isPersonReport'?: boolean | null;
}

