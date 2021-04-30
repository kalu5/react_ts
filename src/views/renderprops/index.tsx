/*
 * @Author: kalu5
 * @Date: 2021-04-30 10:40:57
 * @LastEditors: kalu5
 * @LastEditTime: 2021-04-30 12:15:24
 * @filePath: Do not edit
 */
import * as React from 'react';

export interface Props {
    render: any
}

interface State {
    x: number,
    y: number
}

class RenderProp extends React.Component <Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    changeSize = (e: any) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render () {
        return (
            <div style={{ height: '100vh' }} onMouseMove={ this.changeSize }>
                { /**使用renderProps,动态渲染 , 组件需要渲染的内容 */ }
                { this.props.render(this.state) }
            </div>
        )
    }
}

export default RenderProp;