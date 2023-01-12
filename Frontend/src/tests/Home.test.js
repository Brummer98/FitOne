import { render, screen } from '@testing-library/react';
import Navbar2 from "../components/Navbar2.0";

test('renders the landing page', () => {
    render(<Navbar2 />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  // Yeah