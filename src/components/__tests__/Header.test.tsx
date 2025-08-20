import { render } from '@testing-library/react'
import Header from '../Header'

describe('Header Component', () => {
  const mockOnBookingClick = jest.fn()
  
  it('renders without crashing', () => {
    const { container } = render(<Header onBookingClick={mockOnBookingClick} />)
    expect(container.firstChild).toBeTruthy()
  })

  it('contains clinic name', () => {
    const { container } = render(<Header onBookingClick={mockOnBookingClick} />)
    expect(container.textContent).toContain('AASAAN ENT CLINIC')
  })
})
