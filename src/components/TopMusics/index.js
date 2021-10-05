import CardMusic from "components/Music";
import SearchMusic from "components/Search"
import { ContainerMusic } from "design/ContainerMusic";
import { Container } from "design/ContainerPages";

const TopMusics = () => {

    var Cards = [1,1,1,1,1,1,1,1,1,1,1];


    return(
        <Container>
            <SearchMusic />
            <p>Bom dia Guilherme, veja aqui as melhores do ranking que separamos pra você</p>
            <ContainerMusic>
                {
                    Cards.map((item) => {
                        return <CardMusic />
                    })
                }
            </ContainerMusic>
        </Container>
    )
}

export default TopMusics