import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import {getTodos, addTodo} from './api.js';

import App from './App.js';
import TodoList from "./TodoList.js";
import TodoAdd from "./TodoAdd";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index={true} element={<TodoList />} loader={getTodos} />
            <Route path='/add' element={<TodoAdd />} action={addTodo} />
        </Route>
    )
);

export default router;