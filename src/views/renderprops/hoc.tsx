/*
 * @Author: kalu5
 * @Date: 2021-04-30 14:28:44
 * @LastEditors: kalu5
 * @LastEditTime: 2021-04-30 15:55:25
 * @filePath: Do not edit
 */

import * as React from 'react';
import Cats from './hoccats';

export interface Props {}
interface MouseState {
    x: number,
    y: number
}
function Hoc (Cats: any) {
    return class extends React.Component<Props, MouseState> {
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
                    <Cats mouse={ this.state } />
                </div>
            )
        }
    }
}

const NewHoc = Hoc (Cats)
export default NewHoc;