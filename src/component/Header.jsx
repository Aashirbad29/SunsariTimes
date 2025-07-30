import React, { useState, useEffect } from 'react';
import { FacebookOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons';
import { LinkedinOutlined } from '@ant-design/icons';
import { TwitterOutlined } from '@ant-design/icons';
import { PinterestOutlined } from '@ant-design/icons';

export default function Header() {
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const engDate = today.toLocaleDateString('en-US', options);
    setDateString(engDate);
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FacebookOutlined /></a>
          <a href="#" aria-label="Pinterest"><PinterestOutlined /></a>
          <a href="#" aria-label="Instagram"><InstagramOutlined /></a>
          <a href="#" aria-label="Twitter"><TwitterOutlined /></a>
          <a href="#" aria-label="LinkedIn"><LinkedinOutlined /></a>
        </div>
        <div className="actions">
          <input placeholder="Search" />
          <a href="#" className="sign-in">Sign in</a>
          <a href="#" className="write-post">Write a Post</a>
        </div>
      </div>
      <header className="header">
        <div className="logo">SUNSARI TIMES</div>
        <div className="date">{dateString}</div>
      </header>
    </>
  );
}
