import '@testing-library/jest-dom'

// Extend Jest matchers
expect.extend({
  toBeInTheDocument: (received) => {
    const pass = received !== null
    return {
      message: () => `expected element ${pass ? 'not ' : ''}to be in document`,
      pass,
    }
  },
  toHaveAttribute: (received, attr, value) => {
    const pass = received && received.getAttribute && received.getAttribute(attr) === value
    return {
      message: () => `expected element ${pass ? 'not ' : ''}to have attribute ${attr}=${value}`,
      pass,
    }
  }
})

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    }
  },
}))

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />
  },
}))

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    section: 'section',
    h1: 'h1',
    h2: 'h2',
    p: 'p',
    button: 'button',
    a: 'a',
    header: 'header',
    nav: 'nav',
    span: 'span',
  },
  AnimatePresence: ({ children }) => children,
}))

// Mock window.gtag
Object.defineProperty(window, 'gtag', {
  value: jest.fn(),
  writable: true,
})

// Mock window.umami
Object.defineProperty(window, 'umami', {
  value: {
    track: jest.fn(),
  },
  writable: true,
})
