/*
 * @Author: kalu5
 * @Date: 2021-04-29 10:03:42
 * @LastEditors: kalu5
 * @LastEditTime: 2021-04-30 15:58:13
 * @filePath: Do not edit
 */
import * as React from 'react';

export interface Props {
    name: string;
    char?: number;
}

interface State {
    curChar: number;
}

class HelloState extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            curChar: this.props.char || 1
        }
    
    }

    
    addChar () {
        this.upDateChar (this.state.curChar + 1);
    }

    reduceChar () {
        this.upDateChar (this.state.curChar - 1);
    }

    upDateChar (char: number) {
        this.setState({
            curChar: char
        })
    }

    render () {
        return (
            <div className="state-box">
                <h1> Hello + { changeChar(this.state.curChar) } </h1>
                <button onClick= { this.addChar.bind (this) } >添加</button>
                <button onClick={ this.reduceChar.bind(this) }>减少</button>
            </div>
        )
    }
}

export default HelloState;

function changeChar (char: number) {
    return Array(char + 1).join('!');
}