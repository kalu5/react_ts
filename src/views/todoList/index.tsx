/*
 * @Author: kalu5
 * @Date: 2021-04-29 15:57:39
 * @LastEditors: kalu5
 * @LastEditTime: 2021-04-29 16:21:03
 * @filePath: Do not edit
 */

import * as React from 'react';

export interface Props {}
interface State {
    value: string,
    list: Array<string>
}
class TodoList extends React.Component <Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {
            value: '',
            list: [
                'I am first normal'
            ]
        }
    }

    changeValue = (e: any) => {
        this.updateValue(e.target.value);
    }

    deleteList (index: number) {
        let newLists = JSON.parse(JSON.stringify(this.state.list));
        newLists.splice(index, 1);
        this.updateList (newLists);
    }

    addList = () => {
        let newLists = JSON.parse(JSON.stringify(this.state.list));
        newLists.push(this.state.value);
        this.updateList (newLists);
        this.updateValue ('');
    }

    updateValue = (value: string) => {
        this.setState ({
            value
        })
    }

    updateList = (list: string[]) => {
        this.setState({
            list
        })
    }

    render () {
        return (
            <div>
                { 
                    this.state.list.map((item: string, index: number) => {
                        return (
                            <p key={ index }>{ item } <span onClick={ this.deleteList.bind(this, index) }>删除</span> </p>
                        )
                    })
                }

                <input type="text" value={ this.state.value } onChange={ this.changeValue } />
                <button onClick={ this.addList } >添加</button>
            </div>
        )
    }
}

export default TodoList;










