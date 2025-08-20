import { render } from '@testing-library/react'
import Services from '../Services'

describe('Services Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Services />)
    expect(container.firstChild).toBeTruthy()
  })

  it('contains services content', () => {
    const { container } = render(<Services />)
    expect(container.textContent).toContain('Our Services')
  })
})
