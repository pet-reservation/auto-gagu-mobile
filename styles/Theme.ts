import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      title20: string;
      title24: string;
      content14: string;
      content17: string;
    };
    fontColor: {
      white: string;
      black: string;
    };
  }
}

export const Theme: DefaultTheme = {
  fontSize: {
    title20: '20px',
    title24: '24px',
    content14: '14px',
    content17: '17px',
  },
  fontColor: {
    white: '#fff',
    black: '#000',
  },
};
