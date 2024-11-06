import {useState} from 'react';

function Search(props){

    const [cidade,setCidade] = useState("");

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
            if(sys != undefined){

            if(weather != undefined){

               const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
              
               setCidade(`
                <div class="containerCidade">
                <p>Temperatura: ${main.temp}</p>
                <p>País: ${sys.country}</p>
                <p>Cidade: ${name}</p>
                <p>${weather[0]['description']}</p>
                <img src="${icon}" />
                </div>

                `);


                }
            }else{
                setCidade("")
            }

        })
    }
    return(
        <div className="searchWraper">

        <div className="search">
            <h2 className="search h2">Digite a cidade para saber a previsão</h2>
            <form onSubmit={(e)=>detectarPesquisa(e)}>
                <input placeholder={props.placeholder}  type="text" name="pesquisaInput"/>
                <input type="submit" value="Pesquisar por cidade..." />
            </form>
        </div>

{

    (cidade!= "")?

    <div dangerouslySetInnerHTML={{__html: cidade}} />:

    <div>Pesquise por algo acima...</div>

}

</div>
    )
}

export default Search;