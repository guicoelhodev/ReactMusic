
import PlayerAudio from "components/PlayerAudio";
import { CenterContent } from "GlobalStyle";
import Home from "pages/Home";
import UserLogin from "pages/UserLogin/index";
import { BrowserRouter, Route } from "react-router-dom";

const AppRouter = () => {

    return(
        <BrowserRouter>
            <Route exact path="/" component={UserLogin} />

            <CenterContent>
                <Route path="/home">
                    <PlayerAudio />
                    <Home />
                </Route>
            </CenterContent>
        </BrowserRouter>
    )
}

export default AppRouter
