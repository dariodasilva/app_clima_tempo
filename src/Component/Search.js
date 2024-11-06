
function Search(props){

    function detectarPesquisa(e){
        e.preventDefault();
        let valorAtual = document.querySelector('input[name=pesquisaInput]').value;
        // alert(valorAtual);
        /*
            Fazer a requisição da API.
        */

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${valorAtual}&appid=3ac319c18665e0bf5b6cfe0623fbeef5&units=metric`;
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            const{main, name, sys, weather} = data;
            // console.log(data)
            if(sys != undefined)
                console.log(sys.country)
            if(weather != undefined)
            // console.log(weather[0]['id']);
                console.log(weather[0]['description']);
            if(main != undefined)
                console.log(main.temp_min);
            if(main != undefined)
                console.log(main.temp_max);
            if(name != undefined)
                console.log(name)
        })
    }
    return(
        <div className="search">
            <h2 className="search h2">Digite a cidade para saber a previsão</h2>
            <form onSubmit={(e)=>detectarPesquisa(e)}>
                <input placeholder={props.input}  type="text" name="pesquisaInput"/>
                <input type="submit" value="Pesquisar por cidade..." />
            </form>
        </div>
    )
}

export default Search;