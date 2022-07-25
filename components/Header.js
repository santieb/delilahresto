import Image from 'next/image'

const Header = () => {
  return (
    <>
    <nav className="drop-shadow-lg bg-white border-gray-200 px-14 py-6 rounded ">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap ">Delilah Resto</span>
        </div>
        <Image src='/assets/img/resto.jpg' alt={'image'} width={30} height={30} className="mr-3 h-6 sm:h-10" />
        <div className="flex items-center">
        Santiago
          <button className="flex mx-4 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" type="button" data-dropdown-toggle="dropdown">
            <Image src='/assets/img/resto.jpg' alt={'user'} width={30} height={30} className="w-8 h-8 rounded-full"></Image>
          </button>
          <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow" id="dropdown">
            <ul className="py-1" aria-labelledby="dropdown">
              <li className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                My account
              </li>
              <li className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Header
