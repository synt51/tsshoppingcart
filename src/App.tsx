import React from 'react';
import './App.scss';
import Home from './pages/Home'
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Change from "./pages/ChangeItem";
import homeController, {IHomeController} from "./controller/homeController";
import ListPage from "./pages/ListPage";

export default function App() {
    const controller: IHomeController = homeController()

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path={"/"} element={<Home controller={controller}/>}/>
                    <Route path={"/change/:name"} element={<Change controller={controller}/>}/>
                    <Route path={"/lists"} element={<ListPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
