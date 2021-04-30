/*
 * @Author: kalu5
 * @Date: 2021-04-30 11:00:34
 * @LastEditors: kalu5
 * @LastEditTime: 2021-04-30 11:33:26
 * @filePath: Do not edit
 */

import * as React from 'react';
import Mouse from './index';
import Cat from './cat';

interface Props {
    x: number,
    y: number
}

function MouseChild () {
    return (
        <Mouse render={ (mouse: Props) => (
            <Cat mouse={ mouse } />
        ) } />
    )
}

export default MouseChild;