import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('displays the Moneybox brand name', () => {
    render(<Header />)
    expect(screen.getByRole('heading', { name: 'Moneybox' })).toBeInTheDocument()
  })
})
