import { Notice } from "@/components/ui"
import { NavLink } from "react-router-dom"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons"
import {Bag, Search} from "react-bootstrap-icons"
import { slide as BugerMenu } from "react-burger-menu"
import { useEffect, useState } from "react"

const Header = () => {

  const mainMenu = [
    {
      id: 1,
      name: 'Sale',
      link: '/sale'
    },
    {
      id: 2,
      name: 'New In',
      link: '#'
    },
    {
      id: 3,
      name: 'Man',
      link: '/shop'
    },
    {
      id: 4,
      name: 'Woman',
      link: '#'
    },
    {
      id: 5,
      name: 'Eyewear',
      link: '#'
    },
    {
      id: 6,
      name: 'Kids',
      link: '#'
    }
  ]

  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };

  return (
    <header className={`w-full ${stickyClass}`}>
      {/* Notice */}
      <Notice
        status="info"
        noticeBodyClass={'bg-primary'}
        noticeTextClass={'text-white'}
      >
        UP TO 50% OFF ON SELECTED STYLES.
      </Notice>

      <div className="pageContent flex justify-between py-2 border-b bg-white">
        {/* Mobile Menu */}
        <div className="relative md:hidden">
          <BugerMenu  customBurgerIcon={<HamburgerIcon />}>
            {
              mainMenu.map((item) => {
                return (
                  <NavLink key={'burger_' + item.id} className={`uppercase text-base font-semibold hover:text-primary`} to={item.link}>{item.name}</NavLink>
                )
              })
            }
          </BugerMenu>
        </div>

        <div className="logo text-2xl font-bold"><NavLink to={'/'}>King & Queen</NavLink></div>
        <div className="middleMenu md:flex gap-6 items-center hidden">
          {
            mainMenu.map((item) => {
              return (
                <NavLink key={'header_' + item.id} className={`uppercase text-base font-semibold hover:text-primary`} to={item.link}>{item.name}</NavLink>
              )
            })
          }
        </div>

        <div className="rightMenu hidden md:flex gap-6 items-center">
          <NavLink className={`uppercase text-base font-semibold hover:text-primary`} >Search</NavLink>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className={`uppercase text-base font-semibold hover:text-primary p-0`}
            >EN</MenuButton>
            <MenuList gap={4} className="bg-white px-6 py-8 flex flex-col gap-6 border">
              <h3 className="text-xl font-bold uppercase mb-4">Select Language</h3>
              <MenuItem>
                <span className="uppercase underline">English</span>
              </MenuItem>
              <MenuItem>
                <span className="uppercase underline">Italiano</span>
              </MenuItem>
            </MenuList>
          </Menu>

          <NavLink to={"/login"} className={`uppercase text-base font-semibold hover:text-primary`} >Login</NavLink>

          <NavLink className={`uppercase text-base font-semibold hover:text-primary`}>Wishlist (<span>0</span>)</NavLink>

          <NavLink className={`uppercase text-base font-semibold hover:text-primary`}>Bag (<span>0</span>)</NavLink>
        </div>

        <div className="mobileRightMenu md:hidden flex gap-6 items-center">
          <Search className="text-xl" />
          <Bag className="text-xl" />
        </div>
      </div>
    </header>
  )
}

export default Header