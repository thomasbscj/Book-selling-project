function MainSearchBar(){
    return(
    <>
        <form action = '/search' method='get'>
            <input class = 's' name = 's' type = 'text' placeholder="Search"></input>
            <input class = 'mainSearchSubmit' type = 'submit'></input>
        </form>
    </>
    )
}

export default MainSearchBar