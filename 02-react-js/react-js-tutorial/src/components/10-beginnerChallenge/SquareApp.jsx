import Square from "./Square";
import Input from "./Input";
import { useState, useEffect } from "react";
import { GoBackToTableOfContent } from "../utils/TableOfContent";

function SquareApp() {
    const [colorValue, setColorValue] = useState("");
    const [hexValue, setHexValue] = useState("");
    const [isDarkText, setIsDarkText] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsDarkText(prevFlag => !prevFlag);
        }, 500);
        return () => clearInterval(intervalId);
    }, []); 

    return (
        <div className="container">
            <div className="SquareApp">
                <GoBackToTableOfContent />
                <Square colorValue={colorValue} hexValue={hexValue} isDarkText={isDarkText} />
                <Input
                    colorValue={colorValue}
                    setColorValue={setColorValue}
                    setHexValue={setHexValue}
                    isDarkText={isDarkText}
                    setIsDarkText={setIsDarkText}
                />
            </div>
        </div>
    );
}

export default SquareApp;
