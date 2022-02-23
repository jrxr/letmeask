import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      background_2: string;
      text: string;
      separator: string;
      h1: string;
      h2: string;
    };
  }
}
