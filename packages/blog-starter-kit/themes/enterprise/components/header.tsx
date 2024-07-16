import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import HamburgerSVG from './icons/svgs/HamburgerSVG';
import { PublicationLogo } from './publication-logo';
import PublicationSidebar from './sidebar';

// Placeholder for the new logo component
const NewLogo = () => (
  <div className="text-2xl font-bold text-white">
    Bestin<span className="text-blue-500">SG</span>
  </div>
);

export const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const { publication } = useAppContext();

  const menuItems = [
    { label: 'Best Maid Agency', url: '#' },
    { label: 'Best Part-Time Maid Agency', url: '#' },
    { label: 'Best Indian Agency', url: '#' },
  ];

  const toggleSidebar = () => {
    setIsSidebarVisible((prevVisibility) => !prevVisibility);
  };

  const navList = (
    <ul className="flex flex-row items-center gap-4 text-white">
      {menuItems.map((item) => (
        <li key={item.url}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-200 block max-w-[200px] truncate text-ellipsis whitespace-nowrap rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="border-b bg-slate-950 py-5 dark:border-neutral-800 dark:bg-neutral-900">
      <Container className="grid grid-cols-4 gap-5 px-5">
        <div className="col-span-2 flex flex-1 flex-row items-center gap-2 lg:col-span-1">
          <div className="lg:hidden">
            <Button
              type="outline"
              label=""
              icon={<HamburgerSVG className="h-5 w-5 stroke-current" />}
              className="rounded-xl border-transparent !px-3 !py-2 text-white hover:bg-slate-900 dark:hover:bg-neutral-800"
              onClick={toggleSidebar}
            />

            {isSidebarVisible && (
              <PublicationSidebar navbarItems={menuItems} toggleSidebar={toggleSidebar} />
            )}
          </div>
          <div className="hidden lg:block">
            <NewLogo />
          </div>
        </div>

        <nav className="col-span-2 hidden lg:flex justify-center">
          {navList}
        </nav>

        <div className="col-span-1 hidden lg:flex justify-end items-center">
          <Button
            type="outline"
            label="Subscribe"
            className="rounded-full border-white text-white hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
          />
        </div>
      </Container>

      <div className="mt-5 flex justify-center lg:hidden">
        <NewLogo />
      </div>
    </header>
  );
};
