/* tslint:disable */
/* eslint-disable */




export const TopicCategory = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;

export type TopicCategory = typeof TopicCategory[keyof typeof TopicCategory];



