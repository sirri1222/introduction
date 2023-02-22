import React, { useEffect } from "react";

const MobileMenu = ({ setPage, open, setOpen }) => {
  return (
    <div className={open ? "mobile active" : "mobile"}>
      <ul className="mobile-menu">
        <li
          onClick={() => {
            setPage(0);
            setOpen(false);
          }}
        >
          <span>Home</span>
        </li>
        <li
          onClick={() => {
            setPage(1);
            setOpen(false);
          }}
        >
          <span>Profile</span>
        </li>
        <li
          onClick={() => {
            setPage(2);
            setOpen(false);
          }}
        >
          <span>Skill</span>
        </li>
        <li
          onClick={() => {
            setPage(3);
            setOpen(false);
          }}
        >
          <span>Portfolio</span>
        </li>
        <li
          onClick={() => {
            setPage(4);
            setOpen(false);
          }}
        >
          <span>Life</span>
        </li>
        <li
          onClick={() => {
            setPage(5);
            setOpen(false);
          }}
        >
          <span>Vision</span>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
