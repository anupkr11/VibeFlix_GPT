import React from "react";

const Header = () => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 w-full px-16 py-8 bg-gradient-to-b from-black/50 to-black/0 z-10">
        <img
          className="w-60"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Header;
