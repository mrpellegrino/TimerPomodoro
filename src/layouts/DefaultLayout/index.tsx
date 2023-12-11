import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutConteainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutConteainer>
      <Header />
      <Outlet />
    </LayoutConteainer>
  )
}
