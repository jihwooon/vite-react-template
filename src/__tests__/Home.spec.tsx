import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest'

import Home from '@/page/Home'

describe('Home Component', () => {
  test('renders correctly', () => {
    render(<Home />);
    const element = screen.getByText(/home/i);

    expect(element).toBeInTheDocument()
  });
})
