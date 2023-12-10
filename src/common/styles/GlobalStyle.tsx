import { createGlobalStyle } from 'styled-components';
import './reset.css';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Pretendard";
  font-weight: 45 920;
  font-style: normal;
  font-display: swap;
  
  src: url("src/assets/font/PretendardVariable.woff2") format("woff2-variations");
}

html{
    font-family: "Pretendard";
}

h1{
    font-size: 34px;
    font-weight: 700;
}
h2{
    font-size: 18px;
    font-weight: 600;
}
h3{
    font-size: 16px;
    font-weight: 600;
}
body{
    font-size: 16px;
    font-weight: 600;
}
`;

export default GlobalStyle;
