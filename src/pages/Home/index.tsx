import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { SectionInformation } from "../../components/SectionInformation";

import GlobalStyle from '../../../styles/global'

import { Container, Content } from './styles'

export function Home() {
    return (
        <Container>
            <Content>
                <Header />
                <Main />
            </Content>

            <SectionInformation />
            <GlobalStyle />
        </Container>
    )
}