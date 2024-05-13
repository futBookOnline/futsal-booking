import SearchBar from "@/components/FormElements/SearchBar"
import Logo from "@/components/Logo/Logo";
import Button from "@/components/FormElements/Button";

const Header =()=>{
   return (
   <div className="home-header">
     <Logo />
     <SearchBar placeholder="search futsal"/>
     <Button text="Login"/>
   </div>
   )
}

export default Header;