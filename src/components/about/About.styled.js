import styled from 'styled-components';

export const StyledAbout = styled.div`
  .test-box {
    display: flex;
  }
  .image-container {
    flex: 50%;

    img {
      padding-left: 45px;
      padding-right: 45px;
      max-width: 100%;
    }
  }
  .info-grid {
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
    .test-box {
      flex-direction: column;
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