import { Container, Content, ContentPrimary, ContentSecondary } from "./styles";

import bannnerImg from '../../assets/banner.png'

export function SectionInformation() {
    return (
        <Container>
            <Content>
                <ContentPrimary>
                    <p>10k+<span>artes</span></p>
                    <p>200+<span>vendas</span></p>
                    <p>20<span>artistas</span></p>
                </ContentPrimary>

                <ContentSecondary>
                    <div className="container">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span>potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
                            <span>Lorem ipsum</span>
                        </div>


                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span>potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>

                    <img src={bannnerImg} alt="Banner" />
                </ContentSecondary>
            </Content>
        </Container>
    )
}