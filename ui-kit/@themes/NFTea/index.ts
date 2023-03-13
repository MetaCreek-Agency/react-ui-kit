import { UiKitTheme } from '@/ui-kit/@themes';
import { theme as foodCityTheme } from '../foodCity';
import { button } from './button';
import { inputBase } from './inputBase';

export const theme: UiKitTheme = {
  ...foodCityTheme, // дефолтная тема

  button,
  inputBase,
};
