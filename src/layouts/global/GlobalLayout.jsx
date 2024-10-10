import LoadingScreen from "@/components/LoadingScreen";
import NavigationBar from "../../components/Navbar/Navbar";

const GlobalLayout = ({ isLoading, children }) => {
    return (
        <>
            {isLoading ?
                // retun loading screen
                <LoadingScreen />
                :
                <div className="min-h-screen">
                    <NavigationBar />
                    {/* content wrapper */}
                    <div className="relative flex flex-col px-32 py-6">
                        {children}
                    </div>
                </div>
            }
        </>
    );
};

export default GlobalLayout;