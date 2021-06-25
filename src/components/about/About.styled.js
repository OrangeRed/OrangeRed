import styled from 'styled-components';

export const StyledAbout = styled.div`  
  .title-box {
    margin-bottom: 30px
  }
  .info-box {
    display: flex;
  }
  .image-container {
    flex: 40%;
    display: flex;
    padding-bottom: 24px;
    justify-content: flex-end;

    img {
      width: 323px;
      height: 323px;
    }
  }
  .info-grid {
    flex: 60%;
    display: grid;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    grid-auto-columns: 1fr;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }
  @media ${({ device }) => device.tablet} {
    .info-box {
      flex-direction: column;
    }
    .image-container {
      justify-content: center;
    }
    .info-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      p {
        padding-bottom: 0;
      }
    }
  }
`;