/* tslint:disable */
/* eslint-disable */




export const NoticeMessageType = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;

export type NoticeMessageType = typeof NoticeMessageType[keyof typeof NoticeMessageType];



