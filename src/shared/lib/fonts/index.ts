import { createGlobalStyle } from 'styled-components';

export const FontsStyle = createGlobalStyle`
    @font-face {
    font-family: "San Francisco";
    font-weight: 400;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
      }
          @font-face {
    font-family: "San Francisco Bold";
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff");
      }
`;
