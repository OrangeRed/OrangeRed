import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box; 
    -moz-box-sizing:border-box; 
    -webkit-box-sizing:border-box; 
    -ms-box-sizing:border-box;
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.body};
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    transition: background 0.2s linear;
  }
  h1 {
    color: ${({ theme }) => theme.title};
    font-size: 62px;
    padding-bottom: 5px;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  h2 {
    color: ${({ theme }) => theme.title};
    font-size: 36px;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  h3 {
    color: ${({ theme }) => theme.title};
    font-size: 24px;
    padding-top: 5px;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  h4 {
    color: ${({ theme }) => theme.accent};
    font-size: 18px;
    padding-bottom: 10px;
    position: relative;
    z-index: 2;
  }
  hr {
    height: 2px;
    background-color: ${({ theme }) => theme.accent};
    border: none;
    width: 400px;
    margin: auto;
    z-index: 2;
    @media ${({ device }) => device.mobileL} {
      width: 100%;
    }
  }
  p {
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
  }
  ul {
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    margin-top: 5px;
    line-height: 1.5;
    li {
      font-size: 16px;
      margin-right: 20px;
      margin-bottom: 6px;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 12px;
      color: ${({ theme }) => theme.accent};
      span {
        color: ${({ theme }) => theme.body};
      }
    }
  }
  .max-width-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px 0 24px;
  }
  .section-container {
    padding-top: 50px;
    padding-bottom: 36px;
  }
  .projects-container {
    margin-top: 50px;
  }
  .footer-container {
    margin-top: 50px;
  }
  .box-section {
    background-color: ${({ theme }) => theme.secondaryBackground};
    border-radius: 2px;
  }
  .grid-column {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 24px;
    padding-left: 0px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  @media ${({ device }) => device.mobileL} {
    .grid-column {
      padding: 24px;
    }
  }
`;