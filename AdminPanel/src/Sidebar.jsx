// eslint-disable-next-line no-unused-vars
import React from "react";
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar() {
    return(
        <aside id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_brand">
                    <BsCart3 className="=icon_header" /> SHOP
                </div>
                <span className="icon close_icon">X</span>
            </div>

            <ul className="sidebar_list">
                <li className="sidebar_list_item">
                    <a href="">
                    <BsGrid1X2Fill className="icon" /> Dashboard
                    </a>
                </li>
                <li className="sidebar_list_item">
                    <a href="">
                    <BsFillArchiveFill className="icon" /> Products
                    </a>
                </li>
                <li className="sidebar_list_item">
                    <a href="">
                    <BsPeopleFill className="icon" /> Customers
                    </a>
                </li>
                <li className="sidebar_list_item">
                    <a href="">
                    <BsListCheck className="icon" /> Inventory
                    </a>
                </li>
                <li className="sidebar_list_item">
                    <a href="">
                    <BsFillGrid3X3GapFill className="icon" /> Categories
                    </a>
                </li>
                <li className="sidebar_list_item">
                    <a href="">
                    <BsMenuButtonWideFill className="icon" /> Reports
                    </a>
                </li>
                <li className="sidebar_list_item">
                    <a href="">
                    <BsFillGearFill className="icon" /> Settings
                    </a>
                </li>
            </ul>

        </aside>
    )
}

export default Sidebar