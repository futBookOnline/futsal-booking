import { Spinner } from "@nextui-org/react"

const LoadingScreen = () => {
    return <div className="h-full bg-neutral-800 absolute w-full">
        <Spinner label="Loading..." color="primary" />
    </div>
}

export default LoadingScreen;