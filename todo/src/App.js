import React, { Component } from 'react';
import styled from 'styled-components';

//components
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';
import { TodoForm } from './components/TodoForm';

//import styled components
import MainHeading from './components/partial_components/MainHeading';

//css
import './App.css';

//styled components
const EnvironmentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dbe6f6;
  background: linear-gradient(to right, #c5796d, #dbe6f6);
`;

const TodoAppContainer = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

class App extends Component {
  render() {
    return (
      <EnvironmentContainer>
        <TodoAppContainer>
          <MainHeading>Todo List</MainHeading>
          <FilterTodo />
          <TodoList />
          <TodoForm />
        </TodoAppContainer>
      </EnvironmentContainer>
    );
  }
}
export default App;
