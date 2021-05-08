import React from 'react';
import { User } from 'lib/user';
import Link from 'next/link';

type Props = {
  isOpen: boolean,
  user: User,
  setIsOpen: (a: boolean) => void
};

const routes = [
  { title: 'Account Settings', url: '/profile' },
  { title: 'Logout', url: '/api/auth/logout', fontColor: 'text-error' }
];

const Drawer: React.FC<Props> = ({ isOpen, user, setIsOpen }) => (
  <>
    <div
      className={` top-0 left-0 z-10 w-full h-full transition-all duration-300 ease-in-out transform bg-black   ${
        isOpen ? 'absolute opacity-50' : 'opacity-0 hidden'
      }`}
      onClick={() => setIsOpen(false)}
      aria-hidden="true"
    />
    <aside
      className={`fixed top-0 right-0 z-30 w-64 h-full overflow-auto transition-all duration-300 ease-in-out transform gradient pt-16 pl-8 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          src={user?.image || '/images/userPlaceHolder.png'}
          alt={`${user?.username}`}
          className="w-16 h-16 rounded-full"
        />
        <p className="mt-2 text-2xl font-bold text-black">{user?.username}</p>
      </div>
      <ul className="mt-16">
        {routes.map(route => (
          <li
            key={route.title}
            className={`my-3 text-lg font-bold  transform w-[fit-content] hover:scale-110 ${
              route?.fontColor || 'text-black'
            }`}
          >
            <Link href={route.url}>
              <a>{route.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  </>
);

export default Drawer;
