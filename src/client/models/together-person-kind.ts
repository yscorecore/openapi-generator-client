/* tslint:disable */
/* eslint-disable */




export const TogetherPersonKind = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_9: 9
} as const;

export type TogetherPersonKind = typeof TogetherPersonKind[keyof typeof TogetherPersonKind];



