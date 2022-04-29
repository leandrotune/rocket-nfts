import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--body-background);
`

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1440.01px;
    height: 660.01px;

    display: grid;
    grid-template-columns: 281px 1158px;

    background-color: var(--body-background);
`

export const ContentPrimary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    border-right: 1px solid #545757;
    border-bottom: 1px solid #545757;

    p {
        font-size: 50px;
        font-weight: 600;
        color: var(--text-color);
    }
    
    span {
        display: block;
        font-size: 20px;
        font-weight: 600;
        text-transform: capitalize;
        color: var(--subtitle-color);
        
    }
`

export const ContentSecondary = styled.div`
    margin-top: 70px;
    border-bottom: 1px solid #545757;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .container {
        display: flex;
        justify-content: center;

        div {
            display: flex;
            flex-direction: column;
            padding-right: 56px;

           p {
                width: 435px;
                height: 115px;

                font-size: 18px;
                font-weight: 400;
                color: var(--text-color);

                span {
                    color: var(--color-logo);
                    text-decoration-line: underline;
                }
            }

            span {
                color: var(--text-color);
                margin-top: 50px;
                text-decoration-line: underline;
            } 
        }
        
    }

    img {
        max-width: 1158px;
        height: 300px;
    }
`