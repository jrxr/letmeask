import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background_2};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + div {
    margin-top: 10px;
  }

  &.highlighted {
    background: #570f48;
    border: 1px solid #835afd;

    footer .user-info span {
      color: #fff;
    }
  }

  &.answered {
    background: #570f48;
  }

  p {
    color: #fff;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

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
        color: #fff;
        font-size: 14px;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #fff;
        gap: 8px;

        &.liked {
          color: #fff;

          svg path {
            stroke: #fff;
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;
