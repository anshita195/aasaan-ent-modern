import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Services from '../Services'

describe('Services Component', () => {
  it('renders main heading and services', () => {
    render(<Services />)

    // Check for main heading
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument()
    expect(screen.getByText(/हमारी सेवाएं/i)).toBeInTheDocument()

    // Check for actual services from the component
    expect(screen.getAllByText(/General ENT Examination/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Stammering, Speech Therapy, AVT/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Vertigo/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Polyp Removal/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Endoscopy/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Cochlear Implant, Hearing Aids/i)[0]).toBeInTheDocument()
  })

  it('displays call to enquire buttons', () => {
    render(<Services />)

    // Check for call buttons
    const callButtons = screen.getAllByText(/Call to Enquire/i)
    expect(callButtons.length).toBeGreaterThan(0)
    
    // Check that the first button has correct href
    const firstCallButton = screen.getAllByRole('link', { name: /Call for.*consultation/i })[0]
    expect(firstCallButton).toHaveAttribute('href', 'tel:+917240868002')
  })
})
