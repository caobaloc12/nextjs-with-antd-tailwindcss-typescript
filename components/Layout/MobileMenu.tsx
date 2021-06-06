import Link from 'next/link'
import { menuData } from './MainMenu'

interface IProps {
  onClick: () => void
}

const MobileMenu = ({ onClick }: IProps) => {
  return (
    <div className="bg-gray-darkest flex flex-col divide-y divide-gray-dark">
      {menuData.map((menu) => (
        <div key={menu.key} className="w-full px-2 py-3">
          <Link href={menu.path}>
            <a className="text-white" onClick={onClick}>
              {menu.name}
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MobileMenu
