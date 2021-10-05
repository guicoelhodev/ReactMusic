import * as S from './style';
import Cogumelo from 'assets/images/cogumelo.png';
import { FaPlay } from 'react-icons/fa';

const CardMusic = () => {

    return(
        <S.ContainerMusic>
            <aside>
                <S.ImgMusic src={Cogumelo} alt="capa do álbum" />
            </aside>
            <div>
                <h5>Djonga mãe</h5>
                <h6>Cantor: Djonga MC</h6>
                <p>2:30 min</p>
            </div>
            <S.MiniPlay>
                <FaPlay />
            </S.MiniPlay>
        </S.ContainerMusic>
    )
}

export default CardMusic
