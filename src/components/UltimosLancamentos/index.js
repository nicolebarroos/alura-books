import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import styled from 'styled-components'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../images/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const UltimosLancamentos = () => {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor={'#EB9B00'} tamanho={'36px'}>últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt="imagem últimos lançamentos" />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro} />

        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos