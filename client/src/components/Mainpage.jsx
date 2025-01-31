import ExploreBar from './ExploreBar';
import Painel from './Painel'
import './styles/mainpage.css'
function MainPage(){
    return(
    <>
    <div class = 'exploreBar'>
        <ExploreBar></ExploreBar>
    </div>
    <div class = 'painel'>
        <Painel></Painel>
    </div>
    </>)
}

export default MainPage;