import { render, screen } from '@testing-library/react';
import Main from './main';

// Tests Main rather than App because App transitively imports react-markdown
// (ESM), which CRA 5's Jest does not transform. Full app flows are covered by
// Playwright in playwright/.
test('Main renders header and description props', () => {
  render(
    <Main
      backimg="/test.png"
      header="Test Header"
      description={<p>Test description body</p>}
    />
  );
  expect(
    screen.getByRole('heading', { level: 1, name: 'Test Header' })
  ).toBeInTheDocument();
  expect(screen.getByText('Test description body')).toBeInTheDocument();
});
