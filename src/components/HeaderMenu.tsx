import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderMenu(): ReactElement {
  const menuItems = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/my-timeline', name: 'My Timeline' },
  ];

  return (
    <nav className="p-4 flex justify-end">
      {menuItems.map((item) => {
        return (
          <Link className="p-3" to="{item.path}" key="{item.id}">
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
