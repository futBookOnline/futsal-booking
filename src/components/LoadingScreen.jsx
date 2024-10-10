import { Spinner } from "@nextui-org/react"

const LoadingScreen = () => {
    return <div className="h-full bg-[#b1e9d8] absolute w-full min-h-screen z-99 flex items-center justify-center">
        <Spinner label="Loading..." color="success" />
    </div>
}

export default LoadingScreen;