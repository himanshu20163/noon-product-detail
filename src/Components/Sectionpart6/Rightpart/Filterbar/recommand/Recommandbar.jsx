
import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { CSSTransition } from "react-transition-group";
import "./recommand.css";

import { MdChevronLeft, MdChevronRight, MdMenu } from "react-icons/md";

export default function Recommendedbar() {
  return (
    <div >
      <DropdownMenu />
    </div>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 20);
  }

  return (
    <>
      <Menu className="dropdown" closeOnSelect={false}>
        <MenuButton as={Button} rightIcon={<MdChevronRight />}>
          Recommanded
        </MenuButton>
        <MenuList style={{ height: menuHeight }} className="dropdown" >
          <CSSTransition
            in={activeMenu === "main"}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}
          >
            <div className="main-menu">
              <MenuItem onClick={() => setActiveMenu("settings")}>
                <Text>Price High to Low</Text>        
              </MenuItem>
              <MenuItem onClick={() => setActiveMenu("animals")}>
              Price Low to High
                
              </MenuItem>
              <MenuItem>
                New Arrival

              </MenuItem>
              <MenuItem>
               Best Rated
              </MenuItem>
            </div>
          </CSSTransition>
        </MenuList>
      </Menu>
    </>
  );
}

