import ButtonElement from "@/components/FormElements/ButtonElement";

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-xl font-semibold text-blue-800 mb-3">Sorry! Page not found</p>
            <ButtonElement buttonLabel="Return to home" icon="fa-solid fa-arrow-left"/>
        </div>
    )
}

export default Error404;