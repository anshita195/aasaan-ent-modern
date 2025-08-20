import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

describe('Header Component', () => {
  it('renders clinic name and contact information', () => {
    render(<Header />)
    
    expect(screen.getByText('AASAAN ENT Clinic')).toBeInTheDocument()
    expect(screen.getByText('7240868002')).toBeInTheDocument()
    expect(screen.getByText('Mon-Sat: 5:10 PM - 9:00 PM')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has accessible phone link', () => {
    render(<Header />)
    
    const phoneLink = screen.getByRole('link', { name: /7240868002/i })
    expect(phoneLink).toHaveAttribute('href', 'tel:+917240868002')
  })

  it('renders emergency contact prominently', () => {
    render(<Header />)
    
    expect(screen.getByText('Emergency: 7240868002')).toBeInTheDocument()
  })
})
