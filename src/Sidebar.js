import React from "react";
import { links, social } from './data';

function Sidebar() {
  return (
    <>
      <ul className="social">
        {social.map((socialItem) => {
          return (
            <li key={socialItem.id}>
              <a href={socialItem.url}>{socialItem.icon}</a>
            </li>
          );
        })}
      </ul>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.id}>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Sidebar;
