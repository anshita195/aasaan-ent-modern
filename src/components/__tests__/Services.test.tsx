import { render, screen } from '@testing-library/react'
import { Services } from '../Services'

describe('Services Component', () => {
  it('renders all ENT services', () => {
    render(<Services />)
    
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('General ENT Examination')).toBeInTheDocument()
    expect(screen.getByText('Cochlear Implant Surgery')).toBeInTheDocument()
    expect(screen.getByText('ENT Endoscopy')).toBeInTheDocument()
    expect(screen.getByText('Speech Therapy')).toBeInTheDocument()
    expect(screen.getByText('Hearing Aid Fitting')).toBeInTheDocument()
    expect(screen.getByText('Vertigo Treatment')).toBeInTheDocument()
  })

  it('has proper accessibility structure', () => {
    render(<Services />)
    
    const heading = screen.getByRole('heading', { name: /our services/i })
    expect(heading).toBeInTheDocument()
    
    const serviceItems = screen.getAllByRole('article')
    expect(serviceItems).toHaveLength(6)
  })

  it('displays service descriptions', () => {
    render(<Services />)
    
    expect(screen.getByText(/comprehensive examination/i)).toBeInTheDocument()
    expect(screen.getByText(/advanced surgical procedure/i)).toBeInTheDocument()
  })
})
