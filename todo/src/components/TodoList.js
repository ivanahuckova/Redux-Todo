import React from 'react';

export default class TodoList {
  textRef = React.createRef();

  render() {
    return (
      <div>
        <div>todo items</div>
        <form>
          <input placeholder="input your todo" ref={this.textRef} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
