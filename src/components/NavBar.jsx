import { HamMenu, Arrow, Chevron } from "../assets/icons";
import { qoruz_logo } from "../assets";
import Button from "../components/Button";
import { useState } from "react";

const NavBar = () => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <>
      <header className="sticky z-20 top-0 sm:hidden flex bg-white justify-between items-center py-[16px] px-[26px] border-b border-[#99999933]">
        <img src={qoruz_logo} alt="qoruz-logo" />
        <span onClick={() => setMenuOpenState(!menuOpenState)}>
          <HamMenu
            sx={{
              className: "cursor-pointer",
            }}
            width={24}
            height={24}
            color="#200D00"
          />
        </span>
      </header>

      {/* mobile nav menu */}
      <nav
        className={`
         sm:hidden
        ${
          menuOpenState
            ? "h-menu-open ease-out pt-[23px] mt-[73px]"
            : "h-0 m-0 pt-0 ease-in"
        }
      overflow-hidden transition-all duration-700   
     px-[24px] select-none flex flex-col justify-between
    fixed top-0 z-10 left-0 right-0  bg-[#FFFBF6]`}
      >
        <ul>
          <li className="flex justify-between items-center cursor-pointer py-[16px] border-b border-[#99999933]">
            <span>Product</span>
            <Arrow width={12} height={12} color="#200D00" />
          </li>
          <li className="flex justify-between items-center cursor-pointer py-[16px] border-b border-[#99999933]">
            <span> Resources</span>
            <Arrow width={12} height={12} color="#200D00" />
          </li>
          <li className="flex justify-between items-center cursor-pointer py-[16px] border-b border-[#99999933]">
            <span>Pricing</span>
          </li>
        </ul>

        <Button
          className="
      bg-primary-orange-600
      hover:bg-primary-orange-700
      text-white
      leading-[16px]
      py-[16px]
      
      mb-[24px]
      font-bold
      rounded-[12px]
      w-full
      "
          iconRight={<Arrow color="#fff" width={12} height={12} />}
        >
          Get started free
        </Button>
      </nav>

      <header className="hidden sm:flex justify-between items-center py-[16px] gap-y-5 flex-wrap px-[80px] xl:px-[160px]">
        <nav className="flex items-center gap-x-8">
          <img className="cursor-pointer" src={qoruz_logo} alt="qoruz-logo" />

          <ul className="flex gap-x-8 text-primary-black-600 font-normal leading-[24px]">
            <li className="flex items-center cursor-pointer">
              Solutions{" "}
              <span className="ml-1">
                <Chevron width={10} height={7} color="#200D00" />
              </span>
            </li>
            <li className="flex items-center cursor-pointer">
              Resources{" "}
              <span className="ml-1">
                <Chevron width={10} height={7} color="#200D00" />
              </span>
            </li>
            <li className="flex items-center cursor-pointer">
              Features{" "}
              <span className="ml-1">
                <Chevron width={10} height={7} color="#200D00" />
              </span>
            </li>
            <li className="flex items-center cursor-pointer">Pricing </li>
          </ul>
        </nav>

        <div className="flex items-center gap-x-4">
          <Button
            className="bg-transparent
              text-bg-primary-black-600
              leading-[16px]
              font-bold
              rounded-[12px]
              "
            iconRight={<Arrow color="#200D00" width={13} height={13} />}
          >
            Log in
          </Button>

          <Button
            className="bg-primary-orange-600
              hover:bg-primary-orange-700
              text-white
              leading-[16px]
              py-[20px]
              px-[32px]
              font-bold
              rounded-[12px]
              "
            iconRight={<Arrow color="#fff" width={13} height={13} />}
          >
            Get started free
          </Button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
