import * as S from './style';
import Cogumelo from 'assets/images/cogumelo.png'
import { HeartIcon, PlayButton } from 'design/PlayButton';
import { FaPlay } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs'
import DeezerIMG from 'assets/images/deezer-logo.png';

const PlayerAudio = () => {


    return(
        <S.ContainerPlayer>
           <h2>Tocando agora</h2>
            <h3>Djonga - mãe</h3>

            <S.ImageDiv>
                <S.Image src={Cogumelo} alt="Capa do álbum" />
            </S.ImageDiv>
            <aside>
                <p>cantor: Djonga</p>
                <p>2:30 min</p>
            </aside>
            <S.PlayerInteraction>
                <PlayButton><FaPlay /></PlayButton>
                <HeartIcon><BsFillHeartFill /></HeartIcon>
            </S.PlayerInteraction>

            <p>Clique e escute a música completa no deezer</p>
            <S.DeezerButton>
                <S.Img src={DeezerIMG} alt="Acessar a música completa no deezer" />
            </S.DeezerButton>
        </S.ContainerPlayer>
    )
}

export default PlayerAudio;