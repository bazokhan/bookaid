import React from 'react';
import { User } from '@prisma/client';
import Link from 'next/link';

type Props = {
  isOpen: boolean,
  user: User,
  setIsOpen: (a: boolean) => void
};

const routes = [
  { title: 'My accounts', url: '/' },
  { title: 'User Settings', url: '/profile' },
  { title: 'Logout', url: '/api/auth/logout', fontColor: 'text-error' }
];

const Drawer: React.FC<Props> = ({ isOpen, user, setIsOpen }) => (
  <>
    <div
      className={`h-screen top-0 left-0 z-10 w-full transition-all duration-300 ease-in-out transform bg-black   ${
        isOpen ? 'absolute opacity-50' : 'opacity-0 hidden'
      }`}
      onClick={() => setIsOpen(false)}
      aria-hidden="true"
    />
    <aside
      className={`fixed bg-white top-0 right-0 z-30 w-64 h-screen overflow-auto transition-all duration-300 ease-in-out transform gradient pt-16 pl-8 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col items-center">
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
