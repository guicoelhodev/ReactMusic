import { Button } from "design/Button";
import { Input } from "design/Input";
import LogoTitle from "design/LogoTitle";
import * as S from './style'
import { useHistory } from "react-router";

const UserLogin = () => {

    const history = useHistory();

    return(
        <S.ContainerUser>
            <LogoTitle />
            <h2>O seu aplicativo de músicas da web</h2>
            <p>Antes de acessar a plataforma, precisamos de algumas informações </p>
            <section>
                <label>Nome</label>
                <Input placeholder="Digite seu primeiro nome" />
            </section>

            <section>
                <label>Cidade</label>
                <Input placeholder="Digite a cidade que você está" />
            </section>

            <aside>
                <Button onClick={() => history.push('/home')}>
                    Acessar
                </Button>
            </aside>
        </S.ContainerUser>
    )
}

export default UserLogin;