import React, { ReactElement } from 'react';

export default function HeaderMenu(): ReactElement {
  const menuItems = [{ name: 'a' }];

  return (
    <nav className="p-4 flex justify-end">
      {menuItems.map((item) => {
        return <a href="/home">{item.name}</a>;
      })}
    </nav>
  );
}
