import LoadingScreen from "@/components/LoadingScreen";

const GlobalLayout = ({ isLoading, children }) => {
    return (
        <div className="relative h-auto">
            {isLoading && <LoadingScreen />}
            {children}
        </div>
    );
};

export default GlobalLayout;