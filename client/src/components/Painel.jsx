import MainSearchBar from "./MainSearchBar"
import './styles/mainpage.css'
import BookDisplay from "./BookDisplay"
function Painel(){
    return(
        <>
            <>
                <MainSearchBar></MainSearchBar>
            </>
            <>
                <BookDisplay></BookDisplay>
            </>
        </>
    )
}

export default Painel