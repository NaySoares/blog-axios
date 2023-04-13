export const Navbar = () => {
  return (
    <div className="mx-auto w-full">
      <nav
        className="flex mx-auto items-center justify-between p-6 lg:px-8 bg-bg-default border-b-2 border-theme-divider 2xl:border-none"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-align">
          <a href="#" className="-m-1.5 p-1">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
            />
          </a>
          <div className="flex mx-3 text-align">
            <span className="text-xl font-bold text-white">E.Soares</span>
          </div>
        </div>
      </nav>
    </div>
  );
};
