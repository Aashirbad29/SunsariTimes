import React from 'react';

export default function Navbar() {
  const navItems = ["Home", "Style Guide", "Documentation", "Demos", "Features", "Posts", "Archive", "Tags", "Authors", "Account", "Get Theme"];

  return (
    <nav className="navbar">
      {navItems.map(item => (
        <a key={item} href="#">{item}</a>
      ))}
    </nav>
  );
}