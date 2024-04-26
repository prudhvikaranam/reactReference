import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/header";
import { routerProvider } from "./components/approutes";

console.log('App');
const App = <Header />

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(routerProvider);
