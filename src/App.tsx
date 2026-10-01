/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './context/ThemeContext';
import { MasterDeck } from './components/MasterDeck';

export default function App() {
  return (
    <ThemeProvider>
      <MasterDeck />
    </ThemeProvider>
  );
}


