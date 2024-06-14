import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import { routerProvider } from "./components/approutes";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(routerProvider);

