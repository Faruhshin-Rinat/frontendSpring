import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';   // даёт компонентам доступ к хранилищу
import store from './store';
import List from "./list/List";
import Main from "./main/Main";
import Player from "./player/Player";
import Chart from "./chart/Chart";
import Testing from "./testing/Testing"; // новая страница теста

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/charts",
    element: <Chart />,
  },
  {
    path: "/player/:id",
    element: <Player />,
  },
  {
    path: "/testing",        // маршрут страницы "Проверь себя"
    element: <Testing />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>            {/* оборачиваем приложение хранилищем */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
