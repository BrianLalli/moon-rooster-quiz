// Theme.ts

import { Theme } from './styled';

export const themes: Record<string, Theme> = {
  light: {
    colors: {
      primaryText: '#11052C', // question text color
      secondaryText: '#2D264B', // answer text color
      themeText: '#000000',
      themeColor: '#1c75bc', // Updated primary color
      themeGradient: 'linear-gradient(to right, #1c75bc, #61DBFB)',
      background: '#E5E5E5',
      cardBackground: '#FFFFFF',
      selectTopicBg: '#FFFFFF',
      appLogo: '#000000',
      buttonText: '#FFFFFF',
      outlineButtonText: '#1c75bc', // Updated primary color
      buttonBackground: 'linear-gradient(90.04deg, #1c75bc 0.03%, #61DBFB 99.96%)', // Updated primary color
      selectedAnswer: '#61DBFB',
      infoText: '#FF783F', // skip tag text
      infoBackground: '#ffb23f26', // skip tag background
      border: '#EAEAEA',
      answerBg: '#ffffff',
      disabledCard: '#fbf4ecbc',
      disabledButton: '#e7e8e9',
      success: '#12B40E',
      successLight: '#DDFFDC',
      danger: '#FF143E',
      dangerLight: '#FFD7DE',
      white: '#FFFFFF',
      black: '#000000',
      dark: '#282526',
      darkGray: '#9fa3a9',
      darkerGray: '#817a8e',
    },
    fonts: {
      anekMalayalam: 'Anek Malayalam',
    },
    shadows: {
      activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
    },
    paddings: {
      container: '15px',
      pageTop: '30px',
    },
    margins: {
      pageTop: '30px',
    },
  },
  dark: {
    colors: {
      primaryText: '#FFFFFF', // question text color
      secondaryText: '#FFFFFF', // answer text color
      themeText: '#FFFFFF',
      themeColor: '#1c75bc', // Updated to match primary color
      themeGradient: 'linear-gradient(90deg, #1c75bc 0%, #281e20 100%)', // Updated to match primary color
      background: 'linear-gradient(90deg, #1c75bc 0%, #281e20 100%)', // Updated to match primary color
      cardBackground: '#241a1a',
      selectTopicBg: '#21191C',
      appLogo: '#FFFFFF',
      buttonText: '#000000',
      outlineButtonText: '#ffffff',
      buttonBackground: 'linear-gradient(90.04deg, #1c75bc 0.03%, #61DBFB 99.96%)', // Updated to match primary color
      selectedAnswer: '#61DBFB',
      infoText: '#FF783F', // skip tag text
      infoBackground: '#ffb23f26', // skip tag background
      border: 'transparent',
      answerBg: '#151113',
      disabledCard: '#00000080',
      disabledButton: '#181214',
      success: '#12B40E',
      successLight: '#151113',
      danger: '#FF143E',
      dangerLight: '#151113',
      white: '#FFFFFF',
      black: '#000000',
      dark: '#282526',
      darkGray: '#9fa3a9',
      darkerGray: '#817a8e',
    },
    fonts: {
      anekMalayalam: 'Anek Malayalam',
    },
    shadows: {
      activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
    },
    paddings: {
      container: '15px',
      pageTop: '30px',
    },
    margins: {
      pageTop: '30px',
    },
  },
};
