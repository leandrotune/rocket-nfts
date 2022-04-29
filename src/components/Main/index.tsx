import { Container, Content, Gallery, GalleryArtists, Title } from "./styles";

import badgeImg from '../../assets/badge.svg'

import galeriaUm_Img from '../../assets/artista-1.png'
import galeriaThree_Img from '../../assets/artista-3.png'
import galeriaSix_Img from '../../assets/artista-6.png'
import galeriaSeven_Img from '../../assets/artista-7.png'


import galeria1 from '../../assets/galeria-1.png'
import galeria2 from '../../assets/galeria-2.png'
import galeria3 from '../../assets/galeria-3.png'
import galeria4 from '../../assets/galeria-4.png'
import galeria5 from '../../assets/galeria-5.png'
import galeria6 from '../../assets/galeria-6.png'
import galeria7 from '../../assets/galeria-7.png'
import galeria8 from '../../assets/galeria-8.png'

export function Main() {
    return (
        <Container>
            <Content>
                <div>
                    <p>Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). Compre, venda e descubra ativos digitais exclusivos para você.</p>
                    <GalleryArtists>
                        <div className="artists">
                            <img src={galeriaUm_Img} alt="Artista 1" />
                            <img src={galeriaThree_Img} alt="Artista 2" />
                            <img src={galeriaSix_Img} alt="Artista 3" />
                            <img src={galeriaSeven_Img} alt="Artista 4" />
                        </div>
                        <p><span>+10</span>Artistas selecionados</p>
                    </GalleryArtists>
                </div>

                <Title>
                    Descubra a verdadeira arte digital e colecione diversas <span>NFTs</span>
                </Title>

                <img src={badgeImg} alt="Imagem Badge" />
            </Content>

            <Gallery>
                <img src={galeria1} alt="Galeria 1" />
                <img src={galeria2} alt="Galeria 2" />
                <img src={galeria3} alt="Galeria 3" />
                <img src={galeria4} alt="Galeria 4" />
                <img src={galeria5} alt="Galeria 5" />
                <img src={galeria6} alt="Galeria 6" />
                <img src={galeria7} alt="Galeria 7" />
                <img src={galeria8} alt="Galeria 8" />
            </Gallery>
        </Container>
    )
}