import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Favorite from './pages/Favorite';
import Reco from './pages/Reco';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "favorite",
        element: <Favorite />,
    },
    {
        path: "reco",
        element: <Reco />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);