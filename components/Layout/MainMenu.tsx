import { Menu } from 'antd'
import Link from 'next/link'

export const menuData = [
  { key: 'home', name: 'Home', path: '/' },
  { key: 'about', name: 'About', path: '/about' },
  { key: 'todo', name: 'Todo', path: '/todo' },
]

const MainMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      className="h-16 max-h-full flex items-center bg-gray-darkest">
      {menuData.map((menu) => (
        <Menu.Item key={menu.key} className="custom-menu-item">
          <Link href={menu.path}>
            <a>{menu.name}</a>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default MainMenu
