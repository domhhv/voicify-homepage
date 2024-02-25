import { render } from '@testing-library/react';

import AccountDropdown, { AccountDropdownProps } from './AccountDropdown';

describe(AccountDropdown.name, () => {
  const props: AccountDropdownProps = {
    credits: 100,
    avatarUrl: 'https://example.com/avatar.png',
  };

  it('should render correct credits amount', () => {
    const { getByRole } = render(<AccountDropdown {...props} />);
    expect(getByRole('user-credits')).toHaveTextContent('100');
  });

  it('should render correct avatar url', () => {
    const { getByRole } = render(<AccountDropdown {...props} />);
    const uri = `/_next/image?url=${encodeURIComponent('https://example.com/avatar.png')}&w=96&q=75`;
    expect(getByRole('user-avatar')).toHaveAttribute('src', uri);
  });
});
