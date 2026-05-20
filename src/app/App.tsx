import { Layout } from '../shared/components/Layout'
import { Header } from '../shared/components/Header'
import { AccountsExplorer } from '../features/accounts-explorer/components/AccountsExplorer'

export const App = () => {
  return (
    <Layout>
      <Header />
      <AccountsExplorer />
    </Layout>
  )
}
