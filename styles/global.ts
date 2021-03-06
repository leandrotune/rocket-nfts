import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
      --body-background: #0e0e0e;
      --color-logo: #ff5b50;
      --card-color: #252525;
      --text-color: #FFFFFF;
      --subtitle-color: #5a5757;
      --black-text: #000;
      --color-input: #0D0D0D;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size:93,75%; // 15px
        }

        @media (max-width: 720px) {
            font-size:87,5%; // 14px
        }
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
    }
`