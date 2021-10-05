import Header from 'components/Header';
import MyPlaylist from 'components/MyPlaylist';
import Results from 'components/Results';
import TopMusics from 'components/TopMusics';
import { Switch, Route } from "react-router-dom";

import * as S from './style';

const Home = () => {

    return(
        <S.Container>
            <S.EmptyDiv />
            <section>
                <Header />

                <Switch>
                    <Route exact path="/home" component={TopMusics} />
                    <Route path="/home/results" component={Results} />
                    <Route path="/home/myPlaylist" component={MyPlaylist} />
                </Switch>
            </section>
        </S.Container>
    )
}

export default Home;