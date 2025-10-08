import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";

import App from './App.js';
import TodoList from "./TodoList.js";
import TodoAdd from "./TodoAdd";
import todos from "./todos.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index={true} element={<TodoList list={todos}/>} />
            <Route path='/add' element={<TodoAdd />} />
        </Route>
    )
);

export default router;