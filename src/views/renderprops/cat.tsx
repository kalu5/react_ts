/*
 * @Author: kalu5
 * @Date: 2021-04-30 11:11:27
 * @LastEditors: kalu5
 * @LastEditTime: 2021-04-30 11:28:49
 * @filePath: Do not edit
 */
import * as React from 'react';

interface Mouse {
    x: number,
    y: number
}
export interface Props {
    mouse: Mouse
}

function Cat ({ mouse } : Props) {
    return (
        <h1> 鼠标位置  x: { mouse.x } y: { mouse.y } </h1>
    )
}

export default Cat;