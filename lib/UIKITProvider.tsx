import { GlobalStyles } from '@/ui-kit/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/ui-kit/@themes';
import { Provider as MOBXProvider } from 'mobx-react';
import * as baseStores from '@/ui-kit/base/stores';
import { Messages } from '@/ui-kit/Message';
import { PropsWithChildren } from 'react';

import '@/styles/globals.css';

export const UIKITProvider: React.FC<PropsWithChildren> = (props) => {
    return (
      <ThemeProvider theme={theme.NFTea}>
        <MOBXProvider {...baseStores}>
          {props.children}  
          <GlobalStyles />
          <Messages />
        </MOBXProvider>
      </ThemeProvider>
    );
};