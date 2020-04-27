import Home from './pages/home/Home'
import User from './pages/user/Users'

const routesConfig = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/user',
    component: User,
    exact: true
  }
]

export default routesConfig
