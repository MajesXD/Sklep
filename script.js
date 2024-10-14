function gonight() {
    document.getElementById("bodyday").classList.toggle("bodynight");
}

function loadbanner(){
    var ban = `<a class="home" href="homepage.html"><img class="homeicon" src="img/home.png"></a>
    
    <a class="ubrania" href="clothes.html"><p>Ubrania</p></a>

    <a class="rozmiary" >Dobierz rozmiar</a>

    <div class="wyszukiwarka">Wyszukaj:
        <div><input class="searchbar" type="text"></div>
        <div class="searchgo" role="button"><img src="img/search.png"></div>
    </div>

    <div class="koszyk" role="button">
        <div class="cart">
            <img src="img/cart.png" class="carticon">
        </div>
        <div class="cartcounter">5</div>
    </div>

    <div class="trybnocny" role="button" onclick="gonight()">
        <div class="sun"><img class="sunimg" src="img/sun.png"></div>
        <div class="slash">/</div>
        <div class="moon"><img class="moonimg" src="img/moon.png"></div>
    </div>`
    document.getElementById("banner").innerHTML=ban;
}