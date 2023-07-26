import { privateRoutes } from '@/routes/privateRoutes'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      HEADER
      <nav>
        {privateRoutes[0].children.map(({ path, name, icon }: any, i: any) => {
          return (
            icon && (
              <NavLink to={path} key={i}>
                <span>{name}</span>
              </NavLink>
            )
          )
        })}
      </nav>
    </header>
  )
}
