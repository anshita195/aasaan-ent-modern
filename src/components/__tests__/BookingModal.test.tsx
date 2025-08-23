import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingModal from '../BookingModal';

describe('BookingModal', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('does not render when isOpen is false', () => {
    render(<BookingModal isOpen={false} onClose={mockOnClose} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders correctly when isOpen is true', () => {
    render(<BookingModal isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Book Your Appointment')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Call us directly to book your appointment, get consultation, or enquire about our services./
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Call \+91 7240868002/ })
    ).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    render(<BookingModal isOpen={true} onClose={mockOnClose} />);
    const closeButton = screen.getByLabelText('Close contact modal');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when the overlay is clicked', () => {
    render(<BookingModal isOpen={true} onClose={mockOnClose} />);
    // The overlay is the parent of the dialog but doesn't have a specific role.
    // We can get it by its test id.
    const overlay = screen.getByTestId('booking-modal-overlay');
    fireEvent.click(overlay);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when the modal content is clicked', () => {
    render(<BookingModal isOpen={true} onClose={mockOnClose} />);
    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog);
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('calls onCallClick when the call button is clicked', () => {
    const mockOnCallClick = jest.fn();
    render(
      <BookingModal
        isOpen={true}
        onClose={mockOnClose}
        onCallClick={mockOnCallClick}
      />
    );

    const callButton = screen.getByRole('button', { name: /Call \+91 7240868002/ });
    fireEvent.click(callButton);

    expect(mockOnCallClick).toHaveBeenCalledTimes(1);
  });
});
