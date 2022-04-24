import logoImg from "../../assets/logo.svg"
import { ButtonConnectWallet } from "../ButtonConnectWallet"

import { Container, Content, Menu } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="logo da Rocket NFTs" />
                <Menu>
                    <ul>
                        <li>comprar <span>nft</span></li>
                        <li>sobre</li>
                        <li>faq</li>
                    </ul>
                </Menu>
                <ButtonConnectWallet />
            </Content>
        </Container>
    )
}