import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  height: 100vh;
  header {
    padding: 24px;
    border-bottom: 1px solid ${props => props.theme.colors.background_2};

    .content {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 45px;
      }

      > div {
        display: flex;
        gap: 16px;

        button {
          height: 40px;
        }
      }
    }

    @media (max-width: 640px) {
      .content {
        flex-direction: column;

        > div {
          gap: 16px;
        }
        > img {
          margin-bottom: 16px;
        }
      }
    }

    @media (max-width: 460px) {
      .content {
        > div {
          flex-direction: column;
          gap: 16px;
        }
        > img {
          margin-bottom: 16px;
        }
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: ${props => props.theme.colors.h1};
      }

      span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 9999px;
        padding: 8px 16px;
        color: #ffffff;
        font-weight: 500;
        font-size: 14px;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        .user-info {
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          span {
            margin-left: 8px;
            color: ${props => props.theme.colors.h1};
            font-weight: 500;
            font-size: 14px;
          }
        }

        > span {
          font-size: 14px;
          color: ${props => props.theme.colors.h1};
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: #835afd;
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }
    .question-list {
      margin-top: 32px;
    }
  }
`;

export const SwitchContainer = styled.div`
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
`;
