
import { useState, useEffect } from "react";  // Importing useEffect hook
import { Card, CardBody } from "@nextui-org/react"; 

const AlertCard = ({ cardText, type = "success" }) => {
    const alertColor = type === "error" ? "red" : type === "warning" ? "yellow" : "green";
    const [message, setMessage] = useState(cardText);

    useEffect(() => {
        if (cardText) {
            setMessage(cardText);
            setTimeout(() => {
                setMessage(''); // Clear message after 2500ms
            }, 2500);
        }
    }, [cardText]);  // Run effect when cardText changes

    return (
        message && (
            <Card
                style={{
                    minWidth: "20rem", 
                    borderWidth: "2px", 
                    borderStyle: "solid", 
                    borderColor: alertColor, 
                    position: 'absolute', 
                    top: '1rem', 
                    right: '50%', 
                    transform: 'translateX(-50%)',
                }}
            >
                <CardBody>
                    <p>{message}</p>  {/* Display message instead of cardText */}
                </CardBody>
            </Card>
        )
    );
};

export default AlertCard;

































