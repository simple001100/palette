import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialVimeo } from "react-icons/ti";
import { AiFillPhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import logo from "../../images/logo 0.png";
import "./NavBar.css";

export const NavBar = () => {
  const [isDesktop] = useState(window.innerWidth > 700);

  return (
    <nav className="navigbar">
      <div className="nav-center">
        <div
          className="nav-header"
          style={{ paddingRight: isDesktop ? "30px" : "1px" }}
        >
          <NavLink to="/">
            <img src={logo} alt="ArtForSmart" />
          </NavLink>
        </div>
        <ul
          className={"nav-links"}
          style={{ paddingRight: isDesktop ? "100px" : "1px" }}
        >
          <li>
            <NavLink
              to="/home"
              className="nav-links__item-link"
              activeClassName="nav-links__item-link--active"
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/competitions"
              className="nav-links__item-link"
              activeClassName="nav-links__item-link--active"
            >
              Галерея
            </NavLink>
          </li>
        </ul>
        <ul className={"nav-links"}>
          <li>
            <a className="header-phone" href="tel:+375222722893">
              {isDesktop ? (
                "+375222722893"
              ) : (
                <AiFillPhone className="nav-icon"></AiFillPhone>
              )}
            </a>
          </li>
          <li>
            <a className="header-email" href="mailto:studclub300@mail.ru">
              {isDesktop ? (
                "studclub300@mail.ru"
              ) : (
                <FiMail className="nav-icon" />
              )}
            </a>
          </li>
          <li>
            <a
              className="nav-icon"
              href="https://www.instagram.com/studclub300"
            >
              <FaInstagramSquare className="nav-icon" />
            </a>
          </li>
          <li>
            <a className="nav-icon" href="https://vk.com/studclub_bru">
              <TiSocialVimeo className="nav-icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
