import React from 'react';

//import styled components
import Input from './partial_components/Input';

export default function FilterTodo(props) {
  return (
    <div>
      <Input placeholder="filter your todos..." />
    </div>
  );
}
