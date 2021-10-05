import * as S from './style';
import { RiLogoutBoxLine } from 'react-icons/ri';
import LogoTitle from 'design/LogoTitle';
import { useHistory } from 'react-router-dom'


const Header = () => {

    const history = useHistory();

    var data = new Date();

    let day = String(data.getDate());
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();

    return(
        <S.HeaderContainer>
            <S.LogOut onClick={() => history.push('/')}>
                <RiLogoutBoxLine />
            </S.LogOut>
            <S.Informations>
                <LogoTitle />
                <div>
                    <p>Cidade: São Paulo</p>
                    <p>{`${day} / ${mes} / ${ano}`}</p>
                </div>
                <S.ContainerButtons>
                    <S.ButtonPage onClick={() => history.push('/home')}>Página home</S.ButtonPage>
                    <S.ButtonPage onClick={() => history.push('/home/myPlaylist')}>Minha playlist</S.ButtonPage>
                </S.ContainerButtons>
            </S.Informations>
        </S.HeaderContainer>
    )
}
export default Header;