import styled from 'styled-components';

export const StyledOtherProjects = styled.div`  
  .projects-grid {
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    a, a:hover, a:active, a:visited, a:focus {
      text-decoration:none;
    }
    .projects-grid-col {
      position: relative;
      overflow: hidden;
      &:hover {
        background-color: ${({ theme }) => theme.backgroundActive};
      }
      .link-container {
        padding-top: 20px;

        .FaExternalLinkAlt {
          height: 16px;
        }
      }
      h4 {
          margin-top: 10px;
          margin-bottom: 10px;
          text-align: center;
      }
    }
  }
  @media ${({ device }) => device.tablet} {
    .projects-grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media ${({ device }) => device.mobileL} {
    .projects-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
    }
  }
`;