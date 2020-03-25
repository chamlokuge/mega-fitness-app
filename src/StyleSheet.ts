import { Theme } from 'react-native-elements';
import { DefaultTheme } from '@react-navigation/native';

interface MyTheme extends Theme {
  colors: {[key: string]: string}
}

const colors = {
  ...DefaultTheme.colors,
  text: '#ffffff',
  primary: '#375a7f',
  background: '#222222',
  success: '#00bc8c',
  danger: '#E74C3C',
}

export const navTheme = {
  ...DefaultTheme,
  colors,
}

export const theme = {
  Text: {
    style: {
      color: colors.text,
      textAlign: 'center',
    }
  },
  Button: {
    buttonStyle: {
      backgroundColor: colors.primary,
      borderRadius: 10,
    },
    containerStyle: {
      margin: 10,
      backgroundColor: colors.background,
    } 
  },
  ListItem: {
    titleStyle: {
      textAlign: 'left',
    },
    subtitleStyle: {
      color: colors.text,
      textAlign: 'right',
    },
    containerStyle: {
      backgroundColor: colors.background,
    },
    chevron: true,
    bottomDivider: true,
  },
  Card: {
    containerStyle: {
      backgroundColor: colors.background,
    },
    titleStyle: {
      color: colors.text,
    }
  },
  Slider: {
    thumbTintColor: colors.success
  },
  colors,
} as MyTheme;