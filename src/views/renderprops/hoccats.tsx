/*
 * @Author: kalu5
 * @Date: 2021-04-30 14:32:32
 * @LastEditors: kalu5
 * @LastEditTime: 2021-04-30 15:17:29
 * @filePath: Do not edit
 */

import * as React from 'react';

interface MouseState {
    x: number,
    y: number
}

export interface Props {
    mouse: MouseState
}

function Cats ({ mouse }: Props) {
    return (
        <h5> 复用的状态{ mouse.x  } { mouse.y } </h5>
    )
}

export default Cats;