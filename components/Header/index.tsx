import React, { useState } from 'react';
import Link from 'next/link';
import { useUser } from 'hooks/useUser';
import Drawer from 'components/Drawer';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser();

  return (
    <header className="w-full px-4 py-3 overflow-hidden  md:py-6 md:px-[80px] shadow-header ">
      <nav className="w-full">
        <ul className="flex items-center justify-between w-full flex-nowrap">
          <li>
            <Link href="/">
              <a>
                <p>Bookaid</p>
              </a>
            </Link>
          </li>
          {user ? (
            <li>
              <button
                className="flex content-center"
                onClick={() => setIsOpen(prev => !prev)}
              >
                <img
                  src={user?.image || '/images/userPlaceHolder.png'}
                  alt={`${user?.username}`}
                  className="w-8 h-8 rounded-full"
                />
                <p className="ml-2 text-lg text-black">{user?.username}</p>
                <img
                  src="/images/menu-lines.svg"
                  alt="menu"
                  className="ml-2 w-8"
                />
              </button>
            </li>
          ) : (
            <li className="mr-3 hover:text-main-3 py-2 px-4 rounded-default">
              <Link href="/login">
                <a>Login / Signup</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Drawer isOpen={isOpen} user={user} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
