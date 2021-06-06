import Link from 'next/link'

export const menuData = [
  { key: 'home', name: 'Home', path: '/' },
  { key: 'about', name: 'About', path: '/about' },
  { key: 'todo', name: 'Todo', path: '/todo' },
]

const MainMenu = () => {
  return (
    <div className="flex items-center">
      {menuData.map((menu) => (
        <div
          key={menu.key}
          className="h-16 flex items-center px-5 hover:bg-gray-darkest">
          <Link href={menu.path}>
            <a className="text-white hover:text-white">{menu.name}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MainMenu
