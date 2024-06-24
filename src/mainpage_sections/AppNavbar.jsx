import React from 'react';
import { Link } from 'react-router-dom';
import LoginAccount from "@/user/LoginAccount";
import logo from "../assets/images/logo/logo-white.svg"
// import "../assets/css/custom-navbar.css"

export default function AppNavbar({ scrolled }) {
  return (
    <div className={`ud-header ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="fixed left-0 top-0 z-40 flex w-full items-center transition-all duration-300 ease-in-out bg-primary">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-100 max-w-full px-4">
              <a href="#" className="navbar-logo block w-full py-5">
                <img
                  src={logo}
                  alt="logo"
                  className="header-logo w-full"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  id="navbarToggler"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
                >
                  <ul className="block lg:flex 2xl:ml-20">
                    <li className="group relative">
                      <a
                        href="#home"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                      >
                        Home
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#about"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                      >
                        About
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#pricing"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#team"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                      >
                        Team
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#contact"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="group relative">
                    <a
                        href="javascript:void(0)"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                      >
                        Blog
                      </a>
                      {/* <Link
                        to="/blogs"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                      >
                        Blog
                      </Link> */}
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <button
                  className="loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70"
                  onClick={() => document.getElementById('my_modal_3').showModal()}
                >
                  Log In
                </button>
                {/* <a
                  href="signup.html"
                  className="signupBtn mx-2 flex items-center justify-center rounded-lg bg-white py-3 px-4 text-base font-medium text-dark transition duration-300 ease-in-out hover:bg-opacity-90 sm:px-7"
                >
                  Sign Up
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DaisyUI Modal */}
      <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle" onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.target.close();
        }
      }}>
        <div className="modal-action">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
          <LoginAccount />
        </div>
      </dialog>
    </div>
  );
}
