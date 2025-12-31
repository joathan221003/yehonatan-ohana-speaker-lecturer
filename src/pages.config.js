import Home from './pages/Home';
import Static from './pages/Static';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Static": Static,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};