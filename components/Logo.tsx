import Link from 'next/link'

const Logo = () => {
  return (
    <div className="h-full flex justify-start items-center space-x-2">
      <div className="flex-none w-8 h-8 bg-gray-dark rounded-full"></div>
      <Link href="/">
        <a className="text-gray-300 text-white hover:text-blue">Logo</a>
      </Link>
    </div>
  )
}

export default Logo
