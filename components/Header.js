import React from "react";
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';
 
const Header = (props) => {
  
    return (
        <Menu 
            style={{marginTop: '10px'}}
        >

            <Link href='/' className="item">
                {/* <a > */}
                    CrowdCoin
                {/* </a> */}
            </Link>
            
            <Menu.Menu position='right'>

                <Link href='/' className="item">
                    {/* <a className="item"> */}
                        Campaigns
                    {/* </a> */}
                </Link>

                <Link href='/campaigns/new' className="item">
                    {/* <a className="item"> */}
                        +
                    {/* </a> */}
                </Link>

            </Menu.Menu>

        </Menu>
    )

};

export default Header;