/* tslint:disable */
/* eslint-disable */




export const OrgLevel = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;

export type OrgLevel = typeof OrgLevel[keyof typeof OrgLevel];



