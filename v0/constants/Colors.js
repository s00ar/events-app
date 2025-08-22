/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// Hospital Metropolitano corporate blues
const primary = '#0061A7';
const secondary = '#28A9E0';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    primary,
    secondary,
    tint: primary,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: primary,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    primary,
    secondary,
    tint: secondary,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: secondary,
  },
};
