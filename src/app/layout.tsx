import { FC, PropsWithChildren } from 'react';
import bender from '@src/styles/fonts/bender';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={bender.className}>{children}</body>
  </html>
);

export default RootLayout;
