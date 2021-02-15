import Button from "./Button"
import {useLocation} from "react-router-dom"

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation();


    return (
        <>
        <header className="header">
            <h1>{title}</h1>
            
            { location.pathname === "/" && (
                <Button  color={showAdd ? "Red" : "Green"} title={showAdd ? "Close" : "Add"} onClick={onAdd}/>                
            
            )
            }
        </header>
        </>
    )
}

export default Header
