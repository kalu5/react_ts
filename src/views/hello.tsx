/*
 * @Author: kalu5
 * @Date: 2021-04-29 09:37:07
 * @LastEditors: kalu5
 * @LastEditTime: 2021-04-29 09:40:18
 * @filePath: Do not edit
 */

import * as React from 'react';

export interface Props {
    name: string;
    char?: number;
}

export default function Hello ({ name, char = 1 }: Props) {
    return (
        <div className="hello-box">
            <h1>Hello + {  name + addChar(char) }</h1>
        </div>
    )
}

function addChar (char: number) {
    return Array(char + 1).join('!');
}