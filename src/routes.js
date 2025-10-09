import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import {getTodos, addTodo, getTodo, actTodo} from './api.js';
import Error404 from "./Error404.js";

import App from './App.js';
import TodoList from "./TodoList.js";
import TodoAdd from "./TodoAdd";
import TodoDetail from "./TodoDetail.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index={true} element={<TodoList />} loader={getTodos} />
            <Route path='/add' element={<TodoAdd />} action={addTodo} />
            <Route path=':key' element={<TodoDetail />} loader={getTodo} action={actTodo} errorElement={<Error404 />}/>
        </Route>
    )
);

export default router;