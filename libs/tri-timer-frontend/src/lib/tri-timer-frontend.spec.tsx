import { render } from '@testing-library/react';

import TriTimerFrontend from './tri-timer-frontend';

describe('TriTimerFrontend', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TriTimerFrontend />);
    expect(baseElement).toBeTruthy();
  });
});
