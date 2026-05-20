import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AccountsExplorer } from './AccountsExplorer'

describe('AccountsExplorer — full user flow', () => {
  it('allows a user to browse all categories and explore products within each', async () => {
    render(<AccountsExplorer />)

    // Starts on Savings — opens a product and reads the description
    expect(screen.getByText('Savings')).toBeInTheDocument()
    await userEvent.click(screen.getByText('Simple Saver'))
    expect(screen.getByText('An easy-access savings account with no lock-in.')).toBeInTheDocument()

    // Moves to Home Buying — previous product description is gone
    await userEvent.click(screen.getByRole('button', { name: 'Next category' }))
    expect(screen.getByText('Home Buying')).toBeInTheDocument()
    expect(
      screen.queryByText('An easy-access savings account with no lock-in.')
    ).not.toBeInTheDocument()

    // Opens the only product in Home Buying
    await userEvent.click(screen.getByText('Lifetime ISA'))
    expect(screen.getByText('Save for your first home')).toBeInTheDocument()

    // Moves to Investments — the last category
    await userEvent.click(screen.getByRole('button', { name: 'Next category' }))
    expect(screen.getByText('Investments')).toBeInTheDocument()
    expect(screen.queryByText('Save for your first home')).not.toBeInTheDocument()

    // Next button is now disabled — cannot go further
    expect(screen.getByRole('button', { name: 'Next category' })).toBeDisabled()

    // Opens a product, then switches to another — only the second is shown
    await userEvent.click(screen.getByText('Cash ISA'))
    expect(screen.getByText('A tax-free savings account.')).toBeInTheDocument()
    await userEvent.click(screen.getByText('Stocks & Shares ISA'))
    expect(screen.queryByText('A tax-free savings account.')).not.toBeInTheDocument()
    expect(screen.getByText('Invest in a tax-efficient way.')).toBeInTheDocument()

    // Opens the pension product (lives under Investments)
    await userEvent.click(screen.getByText('Personal Pension'))
    expect(
      screen.getByText('Save for retirement with tax relief on contributions.')
    ).toBeInTheDocument()

    // Navigates all the way back to Savings
    await userEvent.click(screen.getByRole('button', { name: 'Previous category' }))
    await userEvent.click(screen.getByRole('button', { name: 'Previous category' }))
    expect(screen.getByText('Savings')).toBeInTheDocument()

    // Previous button is now disabled — back at the start
    expect(screen.getByRole('button', { name: 'Previous category' })).toBeDisabled()
  })
})
