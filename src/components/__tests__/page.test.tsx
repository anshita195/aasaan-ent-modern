import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from '../../app/page'

// Mock the BookingModal component since it's not essential for this test
jest.mock('../BookingModal', () => {
  return function MockBookingModal() {
    return <div data-testid="booking-modal">Booking Modal</div>
  }
})

describe('Home Page', () => {
  it('renders main sections and key content', () => {
    render(<HomePage />)

    // Check for main clinic name (use getAllBy since it appears multiple times)
    const clinicNames = screen.getAllByText(/AASAAN ENT CLINIC/i)
    expect(clinicNames.length).toBeGreaterThan(0)

    // Check for key sections
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument()
    expect(screen.getByText(/About Dr\. Anil Kumar Jain/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()

    // Check for call-to-action elements
    const callLinks = screen.getAllByRole('link', { name: /Call \+91 7240868002/i })
    expect(callLinks.length).toBeGreaterThan(0)

    // Check for doctor information (use getAllBy since name appears multiple times)
    const doctorNames = screen.getAllByText(/Dr\. Anil Kumar Jain/i)
    expect(doctorNames.length).toBeGreaterThan(0)
  })

  it('renders navigation menu', () => {
    render(<HomePage />)

    // Check for navigation links
    expect(screen.getByRole('link', { name: /Home होम/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services सेवाएं/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About परिचय/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Locations स्थान/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact संपर्क/i })).toBeInTheDocument()
  })
})
