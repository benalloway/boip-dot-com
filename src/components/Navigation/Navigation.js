import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { title: "About us", to: "/about" },
  { title: "Residential Services", to: "/residential" },
  { title: "Business Solutions", to: "/business" },
  { title: "Support Request", to: "/support" },
  { title: "Contact us", to: "/contact" },
];

function Navigation() {
  const pathName = useLocation().pathname;

  return (
    <Disclosure
      as="nav"
      className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
              <div className="px-2 flex items-center lg:px-0">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img
                      className="block h-8 w-auto"
                      src="https://myboip.com/wp-content/uploads/2017/04/logo-png.png"
                      alt="BOIP"
                    />
                  </Link>
                </div>
                <div className="hidden lg:block lg:ml-10">
                  <div className="flex space-x-4">
                    {navigation.map((item, itemIdx) =>
                      pathName === item.to ? (
                        <Link
                          key={`${item.title}`}
                          to={item.to}
                          className="bg-indigo-700 text-white block rounded-md py-2 px-3 text-base font-medium"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        /* Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" */
                        <Link
                          key={`${item.title}`}
                          to={item.to}
                          className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"
                        >
                          {item.title}
                        </Link>
                      )
                    )}
                  </div>
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, itemIdx) =>
                pathName === item.to ? (
                  <Link
                    key={`${item.title}`}
                    to={item.to}
                    className="bg-indigo-700 text-white block rounded-md py-2 px-3 text-base font-medium"
                  >
                    {item.title}
                  </Link>
                ) : (
                  /* Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" */
                  <Link
                    key={`${item.title}`}
                    to={item.to}
                    className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export { Navigation };
