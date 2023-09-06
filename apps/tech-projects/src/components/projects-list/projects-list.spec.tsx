import { render } from '@testing-library/react';

import ProjectsList from './projects-list';

describe('ProjectsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectsList />);
    expect(baseElement).toBeTruthy();
  });
});
