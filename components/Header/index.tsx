import React, { useState } from 'react';
import { useUser } from 'hooks/useUser';
import Drawer from 'components/Drawer';
import LinkButton from 'components/Button/LinkButton';
import Button from 'components/Button/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser();

  return (
    <header className="w-full px-4 py-3 overflow-hidden  md:py-6 md:px-[80px] shadow-header">
      <nav className="w-full">
        <ul className="flex items-center justify-between w-full flex-nowrap">
          <li>
            <LinkButton href="/">AuthExample</LinkButton>
          </li>
          {user ? (
            <li>
              <Button
                className="flex content-center"
                onClick={() => setIsOpen(prev => !prev)}
              >
                <p className="ml-2 text-lg text-gray-100">{user?.username}</p>
                <img
                  src="/images/menu-lines.svg"
                  alt="menu"
                  className="ml-2 w-8"
                />
              </Button>
            </li>
          ) : (
            <li className="mr-3 hover:text-main-3 py-2 px-4 rounded-default">
              <LinkButton href="/login">Login</LinkButton>
            </li>
          )}
        </ul>
      </nav>
      <Drawer isOpen={isOpen} user={user} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
