/*
 * @Author: kalu5
 * @Date: 2021-04-28 15:09:46
 * @LastEditors: kalu5
 * @LastEditTime: 2021-04-30 15:58:24
 * @filePath: Do not edit
 */
import React from 'react';
import './App.css';
import Hello from './views/hello';
import Hellos from './views/hellos';
import HelloState from './views/state';
import TodoList from './views/todoList/index';
import MouseChild from './views/renderprops/child';
import NewHoc from './views/renderprops/hoc';

function App() {
  return (
    <div className="App">
      <Hello name='Func Ts React' char={ 3 } />
      <Hellos name='Class Ts React' char={ 4 } />
      <HelloState name='Class State Ts React' char={ 5 } />
      <TodoList />
      <NewHoc />
      <MouseChild  />
      
    </div>
  );
}

export default App;
