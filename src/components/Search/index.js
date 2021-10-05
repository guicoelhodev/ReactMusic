import { Input } from 'design/Input';
import * as S from './style';
import { AiOutlineSearch } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

const SearchMusic = () => {

    const history = useHistory();

    return(
        <S.Container>
            <p>Procure sua música preferida, lembre-se de procurar usando o nome do cantor, título ou albúm</p>
            <S.SearchMusic>
                <Input />
                <button onClick={() => history.push('/home/results')}>
                    <AiOutlineSearch />
                </button>
            </S.SearchMusic>
        </S.Container>
    )
}

export default SearchMusic