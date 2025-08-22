import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'

describe('Header Component', () => {
  it('renders the header with logo and call to action', () => {
    // Mock the onBookingClick function
    const mockBookingClick = jest.fn()

    render(<Header onBookingClick={mockBookingClick} />)

    // Check for the clinic logo
    const logo = screen.getByAltText(/AASAAN ENT Clinic Logo/i)
    expect(logo).toBeInTheDocument()

    // Check that call-to-action links exist (using getAllBy to handle multiple)
    const callLinks = screen.getAllByRole('link', { name: /Call \+91 7240868002/i })
    expect(callLinks.length).toBeGreaterThan(0)
    expect(callLinks[0]).toHaveAttribute('href', 'tel:+917240868002')

    // Check for navigation links
    expect(screen.getByRole('link', { name: /Home होम/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services सेवाएं/i })).toBeInTheDocument()

    // Check that phone number links exist (using getAllBy to handle multiple)
    const phoneLinks = screen.getAllByRole('link', { name: /7240868002/i })
    expect(phoneLinks.length).toBeGreaterThan(0)
  })
})
