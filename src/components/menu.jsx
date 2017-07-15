
import React from "react";
import ReactDOM from "react-dom";

import { Menu } from "semantic-ui-react";
import { compose, withHandlers, withState } from "recompose";

const Logo = require("../assets/logo-small.png");
const MenuBar = ({ activeItem, handleItemClick }) => (
  <div>

      <Menu
        size="massive"
        style={{ height: "60px" }}

      >
        <Menu.Item>
       <img src={Logo} />
     </Menu.Item>
        <Menu.Item
          name="Home"
          active={activeItem === "Home"}
          onClick={handleItemClick}
        >
         Home
        </Menu.Item>

        <Menu.Item
          name="About"
          active={activeItem === "About"}
          onClick={handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          name="Services"
          active={activeItem === "Services"}
          onClick={handleItemClick}
        >
        Services
        </Menu.Item>
        <Menu.Item
          name="Contacts"
          active={activeItem === "Contacts"}
          onClick={handleItemClick}
        >
        Contacts
        </Menu.Item>
      </Menu>
    </div>
);
const enhance = compose(
        withState("activeItem", "setactiveitem", ""),
        withHandlers({
          handleItemClick: props => (event) => {
          let value = event.target.innerText;
          props.setactiveitem(value);
          window.location = `http://www.interwidecs.com/${value}`;
        },

        }),
);


export default enhance(MenuBar);
