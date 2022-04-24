import styled from "styled-components";

export const Button = styled.button`
    margin: 0;
    width: 230PX;
    height: 57px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    img {
        max-width: 30px;
        height: 30px;
    }

    span {
        font-size: 16px;
        font-weight: 700;
        text-transform: capitalize;
    }
`