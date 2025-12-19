/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { TopicCategory } from './topic-category';
// May contain unused imports in some cases
// @ts-ignore
import type { TopicStatus } from './topic-status';

export interface TopicDto {
    'id'?: string;
    'topicCode'?: string | null;
    'category'?: TopicCategory;
    'content'?: string | null;
    'suggestion'?: string | null;
    'publicUserId'?: string;
    'userIpAddress'?: string | null;
    'isAnonymous'?: boolean;
    'userName'?: string | null;
    'userTel'?: string | null;
    'images'?: Array<string> | null;
    'isPushed'?: boolean;
    'status'?: TopicStatus;
    'createTime'?: string | null;
    'acceptedOrRejectedDate'?: string | null;
    'acceptedOrRejectedUser'?: string | null;
    'completeDate'?: string | null;
    'completeUser'?: string | null;
    'reply'?: string | null;
}



