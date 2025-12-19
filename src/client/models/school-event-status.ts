/* tslint:disable */
/* eslint-disable */




export const SchoolEventStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_9: 9
} as const;

export type SchoolEventStatus = typeof SchoolEventStatus[keyof typeof SchoolEventStatus];



