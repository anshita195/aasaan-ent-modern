import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'

describe('Header Component', () => {
  it('renders the clinic name and call to action', () => {
    // Mock the onBookingClick function
    const mockOnBookingClick = jest.fn()

    render(<Header onBookingClick={mockOnBookingClick} />)

    // Check for the clinic name
    const clinicName = screen.getByText(/AASAAN ENT CLINIC/i)
    expect(clinicName).toBeInTheDocument()

    // Check that call-to-action links exist (using getAllBy to handle multiple)
    const callLinks = screen.getAllByRole('link', { name: /Call \+91 7240868002/i })
    expect(callLinks.length).toBeGreaterThan(0)
    expect(callLinks[0]).toHaveAttribute('href', 'tel:+917240868002')

    // Check that phone number links exist (using getAllBy to handle multiple)
    const phoneLinks = screen.getAllByRole('link', { name: /7240868002/i })
    expect(phoneLinks.length).toBeGreaterThan(0)
  })
})
