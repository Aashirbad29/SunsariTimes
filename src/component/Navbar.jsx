import React from 'react';

export default function Navbar() {
  const navItems = [
    { label: "Home", hasDropdown: false },
    { label: "Style Guide", hasDropdown: false },
    { label: "Documentation", hasDropdown: false },
    { label: "Demos", hasDropdown: true },
    { label: "Features", hasDropdown: true },
    { label: "Posts", hasDropdown: true },
    { label: "Archive", hasDropdown: false },
    { label: "Tags", hasDropdown: true },
    { label: "Authors", hasDropdown: true },
    { label: "Account", hasDropdown: true },
    { label: "Get Theme", hasDropdown: false },
  ];

  return (
    <div className="navbar-outer">
  <div className="navbar container">
    <div className="navbar-border-top" />
    <div className="navbar-content">
      {navItems.map(item => (
        <a key={item.label} href="#">
          {item.label}
          {item.hasDropdown && <span className="dropdown-icon">▾</span>}
        </a>
      ))}
    </div>
    <div className="navbar-border-bottom" />
  </div>
</div>

  );
}
