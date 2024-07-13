import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "react-router-dom";


const NavigationBar = (props) => {

    const { brand, navList } = props

    const brandType = brand?.type.toLowerCase();


    return (
        <Navbar>
            {/*checking for brand logo and text */}
            {
                brand && <NavbarBrand>
                    {brandType == "image" ?
                        <img src={brand.url} /> : <h2>{brand.name}</h2>
                    }
                </NavbarBrand>
            }

            <NavbarContent>
                {/**navigation links */}
                {
                    navList.map(navItem =>
                        <NavbarItem>
                            <Link to={navItem.route} >
                                {navItem.label}
                            </Link>
                        </NavbarItem>
                    )
                }
            </NavbarContent>
        </Navbar>
    )
}

export default NavigationBar;