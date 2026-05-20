import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AccountsExplorer } from './AccountsExplorer'

describe('AccountsExplorer', () => {
  it('shows the first category and its products by default', () => {
    render(<AccountsExplorer />)
    expect(screen.getByText('Savings')).toBeInTheDocument()
    expect(screen.getByText('Simple Saver')).toBeInTheDocument()
  })

  it('navigates to the next category when the next button is clicked', async () => {
    render(<AccountsExplorer />)
    await userEvent.click(screen.getByRole('button', { name: 'Next category' }))
    expect(screen.getByText('Home Buying')).toBeInTheDocument()
    expect(screen.getByText('Lifetime ISA')).toBeInTheDocument()
  })

  it('navigates to the previous category when the previous button is clicked', async () => {
    render(<AccountsExplorer />)
    await userEvent.click(screen.getByRole('button', { name: 'Next category' }))
    await userEvent.click(screen.getByRole('button', { name: 'Previous category' }))
    expect(screen.getByText('Simple Saver')).toBeInTheDocument()
  })

  it('shows a product description when the user opens a product', async () => {
    render(<AccountsExplorer />)
    await userEvent.click(screen.getByText('Simple Saver'))
    expect(screen.getByText('An easy-access savings account with no lock-in.')).toBeInTheDocument()
  })

  it('closes a product when the user clicks it again', async () => {
    render(<AccountsExplorer />)
    await userEvent.click(screen.getByText('Simple Saver'))
    await userEvent.click(screen.getByText('Simple Saver'))
    expect(
      screen.queryByText('An easy-access savings account with no lock-in.')
    ).not.toBeInTheDocument()
  })

  it('only shows one product description at a time', async () => {
    render(<AccountsExplorer />)
    await userEvent.click(screen.getByText('Simple Saver'))
    await userEvent.click(screen.getByText('32 Day Notice'))
    expect(
      screen.queryByText('An easy-access savings account with no lock-in.')
    ).not.toBeInTheDocument()
    expect(
      screen.getByText('Earn a higher rate by giving 32 days notice to withdraw.')
    ).toBeInTheDocument()
  })
})
