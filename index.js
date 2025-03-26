import {MainPage} from "./pages/main/index.js";

localStorage.removeItem('access_token');


const root = document.getElementById('root');

const mainPage = new MainPage(root);
mainPage.render();


window.onAuthSuccess = () => {
    mainPage.render();
};
