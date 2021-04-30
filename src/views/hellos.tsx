/*
 * @Author: kalu5
 * @Date: 2021-04-29 09:42:53
 * @LastEditors: kalu5
 * @LastEditTime: 2021-04-29 09:46:20
 * @filePath: Do not edit
 */
import * as React from 'react';

export interface Props {
    name: string;
    char?: number;
}

class Hellos extends React.Component<Props, object> {
    render () {
        const { name, char = 1 } = this.props;
        return (
            <div className="hello-box">
                <h1> Hello + { name + addChar(char) } </h1>
            </div>
        )
    }
}

export default Hellos;

function addChar (char: number) {
    return Array(char + 1).join('!');
}
