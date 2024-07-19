import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
// import {AcmeLogo} from "./AcmeLogo.jsx";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const menuItems = [
        {
            label: "Home",
            route: "/"
        },
        {
            label: "Venues",
            route: "/venues"
        },
        {
            label: "Events",
            route: "/events"
        },
        {
            label: "About",
            route: "/about"
        }
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gray-100">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">Futsal Booking</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    menuItems.map(item =>
                        <NavbarItem className="cursor-pointer">
                            <Link to={item.route}>
                                {item.label}
                            </Link>
                        </NavbarItem>
                    )
                }
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="success" href="#" variant="flat">
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}


export default NavigationBar;