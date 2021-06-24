import styled from 'styled-components';

export const StyledInterests = styled.div`
  .box-section {
    padding: 40px;
    display: flex;
  
    .interests-container {
      margin: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 20px;

      .interests-icon {
        color: ${({ theme }) => theme.accent};
        margin-right: 20px;
        min-width: 40px;
        height: 40px;
      }
    }
  } 

  @media ${({ device }) => device.tablet} {
    .box-section {
      flex-direction: column;

      .interests-container {
        justify-content: flex-start;

        .interests-text {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;