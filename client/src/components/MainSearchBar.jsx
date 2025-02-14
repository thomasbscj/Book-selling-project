function MainSearchBar(){
    return(
        <div class = 'searchBar'>
            <form action = '/search' method='get'>
                <input class = 's' name = 's' type = 'text' placeholder="Search"></input>
                <input class = 'mainSearchSubmit' type = 'submit'></input>
            </form>
        </div>
    )
}

export default MainSearchBar