import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <Link to="/">
      <header className="header-container">
        <h1 className="title text-center text-white">Copy Paste</h1>
      </header>
    </Link>
  );
}
