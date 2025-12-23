/* tslint:disable */
/* eslint-disable */




export const StreamType = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type StreamType = typeof StreamType[keyof typeof StreamType];



