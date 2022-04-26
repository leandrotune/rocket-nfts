import { Header } from "../../components/Header";
import { SectionMain } from "../../components/SectionMain";

import { Container } from './styles'

export function Home() {
    return (
        <Container>
            <Header />
            <SectionMain />
        </Container>
    )
}