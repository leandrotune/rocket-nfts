import logo_MetaMaskImg from '../../assets/logo_MetaMask.svg'
import { Button } from './styles'

export function ButtonConnectWallet() {
    return (
        <Button>
            <img src={logo_MetaMaskImg} alt="logo meta mask" />
            <span>conectar carteira</span>
        </Button>
    )
}