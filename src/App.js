import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TodoList from './container/TodoListPage'
import NotFound from './container/NotFoundPage'

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" component={TodoList} exact/>
              <Route component={NotFound}/>
          </Switch>

      </BrowserRouter>
  );
}

export default App;
