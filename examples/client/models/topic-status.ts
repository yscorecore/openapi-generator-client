/* tslint:disable */
/* eslint-disable */




export const TopicStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_9: 9,
    NUMBER_MINUS_1: -1
} as const;

export type TopicStatus = typeof TopicStatus[keyof typeof TopicStatus];



