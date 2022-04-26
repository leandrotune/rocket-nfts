import styled from "styled-components";

export const Container = styled.main`
    max-width: 1277px;
    margin: 0 auto; 
    padding-top: 197px;

`

export const Content = styled.div`
   margin: 0 auto; 

    display: flex;
    justify-content: space-between;

    p {
        font-size: 18px;
        font-weight: 400;
        width: 401px;
        height: 88px;
        color: var(--text-color);
        padding-bottom: 150px ;
    }
`

export const GalleryArtists = styled.div`
    width: 369px;
    height: 87px;

    display: flex;

    .artists {
        width: 169px;
        height: 87px;

        display: flex;

        img {
            width: 95px;
            height: 87px;
        }
    }

    span {
        font-weight: 700;
    }
`

export const Title = styled.h1`
    width: 596px;
    height: 246px;
    font-size: 50px;
    font-weight: 700;
    color: var(--text-color);

    span { 
        color: var(--color-logo);
    }
`

export const Gallery = styled.div`
    margin-top: 100px;
    width: 1277px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;

    img {
        width: 307.13px;
        height: 197.98px;
    }
`