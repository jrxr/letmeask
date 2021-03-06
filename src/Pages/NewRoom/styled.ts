import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  background: ${props => props.theme.colors.background};

  aside {
    flex: 7;

    background: ${props => props.theme.colors.background_2};
    color: ${props => props.theme.colors.text};

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
  }

  main {
    flex: 8;

    padding: 0 32px;
    background: ${props => props.theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
      color: ${props => props.theme.colors.h2};
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: #fff;
        border: 1px solid #a8a8b3;
      }

      button {
        margin-top: 16px;
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: 14px;
      color: ${props => props.theme.colors.separator};
      margin-top: 16px;

      a {
        color: #e559f9;
      }
    }
  }

  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #ea4335;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 14px;
    color: ${props => props.theme.colors.separator};

    margin: 32px 0;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      flex: 1;
      height: 1px;
      background: ${props => props.theme.colors.separator};
      margin-right: 16px;
    }

    &:after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${props => props.theme.colors.separator};
      margin-left: 16px;
    }
  }

  @media (max-width: 790px) {
    flex-direction: column;

    aside {
      align-items: center;
    }

    .main-content {
      margin: 50px 0;
    }
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
