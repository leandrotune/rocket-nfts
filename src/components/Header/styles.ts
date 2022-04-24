import styled from "styled-components";

export const Container = styled.header`
    margin: 0 auto;
    max-width: 1277px;
    height: 50px;
`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    padding-top: 57px;

    img {
        width: 265px;
        height: 43px
    }
`
export const Menu = styled.nav`
    width: 343px;

    ul {
        display: flex;
        justify-content: space-between;


        li {
            font-size: 18px;
            font-weight: 400;
            text-decoration: none;
            text-transform: capitalize;
            list-style: none;
            color: var(--text-color);
            
            span {
                text-transform: uppercase;
            }
        }

        li:nth-child(3) {
            text-transform: uppercase;
        }
    }
`