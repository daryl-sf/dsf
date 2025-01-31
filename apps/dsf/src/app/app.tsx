import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { Route, Routes } from 'react-router-dom';
import { TriTimerFrontend } from '@dsf/tri-timer-frontend';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route index element={<NxWelcome title="dsf" />} />
        <Route path="/tri-timer" element={<TriTimerFrontend />} />
        {/* Catch all 404 */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </StyledApp>
  );
}

export default App;
