

//hae tiedot: OMENA
document.querySelector("#omena").addEventListener("click", (event) => {      // lisätään on click kuuntelija

  const poista = document.getElementById("#leffat");                      //ensimmäiseksi tyhjennetään leffat divin sisältö, tämä tyhjentää mahdolliset edelliset tulokset
  leffat.textContent = null;

  var xhttp = new XMLHttpRequest();                                    //tehdään XMLHttpRequest objekti ja tarkistetaan valmius ennen kuin jatketaan
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var xml = xhttp.responseXML;                                         //XML vastaus = xml
        var leffat = xml.getElementsByTagName('Title');                      //haetaan XML vastauksesta tietoja tagin perusteella
        var kuvat = xml.getElementsByTagName('EventMediumImagePortrait');;
        var pituus = xml.getElementsByTagName('LengthInMinutes');
        var ikäraja = xml.getElementsByTagName('Rating');
        var varaa = xml.getElementsByTagName('ShowURL');


        for (var i = 0; i < leffat.length; i++){                      //tulostetaan tiedot haluttuun muotoon
          const uusleffa =  document.createElement("h3")              //niin monta kertaa kuin leffoja on
                                                                      //ensin tehdään elementti, sen jälkeen
          const uk= document.createElement("image");                  //lisätään sisältö muuttujaan ja lopuksi appendChild leffat
          uk.innerHTML = "<img src='"+kuvat[i].innerHTML+"'> </img>";
          document.querySelector("#leffat").appendChild(uk);


          uusleffa.innerHTML = leffat[i].innerHTML +"("+ ikäraja[i].innerHTML +")" ;
          document.querySelector("#leffat").appendChild(uusleffa);

          const uusvaraus =  document.createElement("a");
          uusvaraus.innerHTML = "<a href='" +varaa[i].innerHTML +"'>Varaa liput!</a>"  ;
          document.querySelector("#leffat").appendChild(uusvaraus);


          const uuspituus =  document.createElement("p");
          uuspituus.innerHTML = pituus[i].innerHTML +" Min." ;
          document.querySelector("#leffat").appendChild(uuspituus);






        }



      }
  };
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1039&dt=25.11.2022", true); //XML get
  xhttp.send();
})

//hae tiedot: SELLO
document.querySelector("#sello").addEventListener("click", (event) => {      // lisätään on click kuuntelija

  const poista = document.getElementById("#leffat");                      //ensimmäiseksi tyhjennetään leffat divin sisältö, tämä tyhjentää mahdolliset edelliset tulokset
  leffat.textContent = null;

  var xhttp = new XMLHttpRequest();                                    //tehdään XMLHttpRequest objekti ja tarkistetaan valmius ennen kuin jatketaan
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var xml = xhttp.responseXML;                                         //XML vastaus = xml
        var leffat = xml.getElementsByTagName('Title');                      //haetaan XML vastauksesta tietoja tagin perusteella
        var kuvat = xml.getElementsByTagName('EventMediumImagePortrait');;
        var pituus = xml.getElementsByTagName('LengthInMinutes');
        var ikäraja = xml.getElementsByTagName('Rating');
        var varaa = xml.getElementsByTagName('ShowURL');


        for (var i = 0; i < leffat.length; i++){                      //tulostetaan tiedot haluttuun muotoon
          const uusleffa =  document.createElement("h3")              //niin monta kertaa kuin leffoja on
                                                                      //ensin tehdään elementti, sen jälkeen
          const uk= document.createElement("image");                  //lisätään sisältö muuttujaan ja lopuksi appendChild leffat
          uk.innerHTML = "<img src='"+kuvat[i].innerHTML+"'> </img>";
          document.querySelector("#leffat").appendChild(uk);


          uusleffa.innerHTML = leffat[i].innerHTML +"("+ ikäraja[i].innerHTML +")" ;
          document.querySelector("#leffat").appendChild(uusleffa);

          const uusvaraus =  document.createElement("a");
          uusvaraus.innerHTML = "<a href='" +varaa[i].innerHTML +"'>Varaa liput!</a>"  ;
          document.querySelector("#leffat").appendChild(uusvaraus);


          const uuspituus =  document.createElement("p");
          uuspituus.innerHTML = pituus[i].innerHTML +" Min." ;
          document.querySelector("#leffat").appendChild(uuspituus);






        }



      }
  };
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1038&dt=25.11.2022", true); //XML get
  xhttp.send();
})

//hae tiedot: ITIS
document.querySelector("#itis").addEventListener("click", (event) => {      // lisätään on click kuuntelija

  const poista = document.getElementById("#leffat");                      //ensimmäiseksi tyhjennetään leffat divin sisältö, tämä tyhjentää mahdolliset edelliset tulokset
  leffat.textContent = null;

  var xhttp = new XMLHttpRequest();                                    //tehdään XMLHttpRequest objekti ja tarkistetaan valmius ennen kuin jatketaan
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var xml = xhttp.responseXML;                                         //XML vastaus = xml
        var leffat = xml.getElementsByTagName('Title');                      //haetaan XML vastauksesta tietoja tagin perusteella
        var kuvat = xml.getElementsByTagName('EventMediumImagePortrait');;
        var pituus = xml.getElementsByTagName('LengthInMinutes');
        var ikäraja = xml.getElementsByTagName('Rating');
        var varaa = xml.getElementsByTagName('ShowURL');


        for (var i = 0; i < leffat.length; i++){                      //tulostetaan tiedot haluttuun muotoon
          const uusleffa =  document.createElement("h3")              //niin monta kertaa kuin leffoja on
                                                                      //ensin tehdään elementti, sen jälkeen
          const uk= document.createElement("image");                  //lisätään sisältö muuttujaan ja lopuksi appendChild leffat
          uk.innerHTML = "<img src='"+kuvat[i].innerHTML+"'> </img>";
          document.querySelector("#leffat").appendChild(uk);


          uusleffa.innerHTML = leffat[i].innerHTML +"("+ ikäraja[i].innerHTML +")" ;
          document.querySelector("#leffat").appendChild(uusleffa);

          const uusvaraus =  document.createElement("a");
          uusvaraus.innerHTML = "<a href='" +varaa[i].innerHTML +"'>Varaa liput!</a>"  ;
          document.querySelector("#leffat").appendChild(uusvaraus);


          const uuspituus =  document.createElement("p");
          uuspituus.innerHTML = pituus[i].innerHTML +" Min." ;
          document.querySelector("#leffat").appendChild(uuspituus);






        }



      }
  };
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1045&dt=25.11.2022", true); //XML get
  xhttp.send();
})

//hae tiedot: KINOPALATSI
document.querySelector("#kpalatsi").addEventListener("click", (event) => {      // lisätään on click kuuntelija

  const poista = document.getElementById("#leffat");                      //ensimmäiseksi tyhjennetään leffat divin sisältö, tämä tyhjentää mahdolliset edelliset tulokset
  leffat.textContent = null;

  var xhttp = new XMLHttpRequest();                                    //tehdään XMLHttpRequest objekti ja tarkistetaan valmius ennen kuin jatketaan
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var xml = xhttp.responseXML;                                         //XML vastaus = xml
        var leffat = xml.getElementsByTagName('Title');                      //haetaan XML vastauksesta tietoja tagin perusteella
        var kuvat = xml.getElementsByTagName('EventMediumImagePortrait');;
        var pituus = xml.getElementsByTagName('LengthInMinutes');
        var ikäraja = xml.getElementsByTagName('Rating');
        var varaa = xml.getElementsByTagName('ShowURL');


        for (var i = 0; i < leffat.length; i++){                      //tulostetaan tiedot haluttuun muotoon
          const uusleffa =  document.createElement("h3")              //niin monta kertaa kuin leffoja on
                                                                      //ensin tehdään elementti, sen jälkeen
          const uk= document.createElement("image");                  //lisätään sisältö muuttujaan ja lopuksi appendChild leffat
          uk.innerHTML = "<img src='"+kuvat[i].innerHTML+"'> </img>";
          document.querySelector("#leffat").appendChild(uk);


          uusleffa.innerHTML = leffat[i].innerHTML +"("+ ikäraja[i].innerHTML +")" ;
          document.querySelector("#leffat").appendChild(uusleffa);

          const uusvaraus =  document.createElement("a");
          uusvaraus.innerHTML = "<a href='" +varaa[i].innerHTML +"'>Varaa liput!</a>"  ;
          document.querySelector("#leffat").appendChild(uusvaraus);


          const uuspituus =  document.createElement("p");
          uuspituus.innerHTML = pituus[i].innerHTML +" Min." ;
          document.querySelector("#leffat").appendChild(uuspituus);






        }



      }
  };
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1031&dt=25.11.2022", true); //XML get
  xhttp.send();
})

//hae tiedot: MAXIM
document.querySelector("#maxim").addEventListener("click", (event) => {      // lisätään on click kuuntelija

  const poista = document.getElementById("#leffat");                      //ensimmäiseksi tyhjennetään leffat divin sisältö, tämä tyhjentää mahdolliset edelliset tulokset
  leffat.textContent = null;

  var xhttp = new XMLHttpRequest();                                    //tehdään XMLHttpRequest objekti ja tarkistetaan valmius ennen kuin jatketaan
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var xml = xhttp.responseXML;                                         //XML vastaus = xml
        var leffat = xml.getElementsByTagName('Title');                      //haetaan XML vastauksesta tietoja tagin perusteella
        var kuvat = xml.getElementsByTagName('EventMediumImagePortrait');;
        var pituus = xml.getElementsByTagName('LengthInMinutes');
        var ikäraja = xml.getElementsByTagName('Rating');
        var varaa = xml.getElementsByTagName('ShowURL');


        for (var i = 0; i < leffat.length; i++){                      //tulostetaan tiedot haluttuun muotoon
          const uusleffa =  document.createElement("h3")              //niin monta kertaa kuin leffoja on
                                                                      //ensin tehdään elementti, sen jälkeen
          const uk= document.createElement("image");                  //lisätään sisältö muuttujaan ja lopuksi appendChild leffat
          uk.innerHTML = "<img src='"+kuvat[i].innerHTML+"'> </img>";
          document.querySelector("#leffat").appendChild(uk);


          uusleffa.innerHTML = leffat[i].innerHTML +"("+ ikäraja[i].innerHTML +")" ;
          document.querySelector("#leffat").appendChild(uusleffa);

          const uusvaraus =  document.createElement("a");
          uusvaraus.innerHTML = "<a href='" +varaa[i].innerHTML +"'>Varaa liput!</a>"  ;
          document.querySelector("#leffat").appendChild(uusvaraus);


          const uuspituus =  document.createElement("p");
          uuspituus.innerHTML = pituus[i].innerHTML +" Min." ;
          document.querySelector("#leffat").appendChild(uuspituus);






        }



      }
  };
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1032&dt=25.11.2022", true); //XML get
  xhttp.send();
})

//hae tiedot: TENNISPALATSI
document.querySelector("#tpalatsi").addEventListener("click", (event) => {      // lisätään on click kuuntelija

  const poista = document.getElementById("#leffat");                      //ensimmäiseksi tyhjennetään leffat divin sisältö, tämä tyhjentää mahdolliset edelliset tulokset
  leffat.textContent = null;

  var xhttp = new XMLHttpRequest();                                    //tehdään XMLHttpRequest objekti ja tarkistetaan valmius ennen kuin jatketaan
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var xml = xhttp.responseXML;                                         //XML vastaus = xml
        var leffat = xml.getElementsByTagName('Title');                      //haetaan XML vastauksesta tietoja tagin perusteella
        var kuvat = xml.getElementsByTagName('EventMediumImagePortrait');;
        var pituus = xml.getElementsByTagName('LengthInMinutes');
        var ikäraja = xml.getElementsByTagName('Rating');
        var varaa = xml.getElementsByTagName('ShowURL');


        for (var i = 0; i < leffat.length; i++){                      //tulostetaan tiedot haluttuun muotoon
          const uusleffa =  document.createElement("h3")              //niin monta kertaa kuin leffoja on
                                                                      //ensin tehdään elementti, sen jälkeen
          const uk= document.createElement("image");                  //lisätään sisältö muuttujaan ja lopuksi appendChild leffat
          uk.innerHTML = "<img src='"+kuvat[i].innerHTML+"'> </img>";
          document.querySelector("#leffat").appendChild(uk);


          uusleffa.innerHTML = leffat[i].innerHTML +"("+ ikäraja[i].innerHTML +")" ;
          document.querySelector("#leffat").appendChild(uusleffa);

          const uusvaraus =  document.createElement("a");
          uusvaraus.innerHTML = "<a href='" +varaa[i].innerHTML +"'>Varaa liput!</a>"  ;
          document.querySelector("#leffat").appendChild(uusvaraus);


          const uuspituus =  document.createElement("p");
          uuspituus.innerHTML = pituus[i].innerHTML +" Min." ;
          document.querySelector("#leffat").appendChild(uuspituus);






        }



      }
  };
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1033&dt=25.11.2022", true); //XML get
  xhttp.send();
})

//hae tiedot: FLAMINGO
document.querySelector("#flamingo").addEventListener("click", (event) => {      // lisätään on click kuuntelija

  const poista = document.getElementById("#leffat");                      //ensimmäiseksi tyhjennetään leffat divin sisältö, tämä tyhjentää mahdolliset edelliset tulokset
  leffat.textContent = null;

  var xhttp = new XMLHttpRequest();                                    //tehdään XMLHttpRequest objekti ja tarkistetaan valmius ennen kuin jatketaan
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var xml = xhttp.responseXML;                                         //XML vastaus = xml
        var leffat = xml.getElementsByTagName('Title');                      //haetaan XML vastauksesta tietoja tagin perusteella
        var kuvat = xml.getElementsByTagName('EventMediumImagePortrait');;
        var pituus = xml.getElementsByTagName('LengthInMinutes');
        var ikäraja = xml.getElementsByTagName('Rating');
        var varaa = xml.getElementsByTagName('ShowURL');


        for (var i = 0; i < leffat.length; i++){                      //tulostetaan tiedot haluttuun muotoon
          const uusleffa =  document.createElement("h3")              //niin monta kertaa kuin leffoja on
                                                                      //ensin tehdään elementti, sen jälkeen
          const uk= document.createElement("image");                  //lisätään sisältö muuttujaan ja lopuksi appendChild leffat
          uk.innerHTML = "<img src='"+kuvat[i].innerHTML+"'> </img>";
          document.querySelector("#leffat").appendChild(uk);


          uusleffa.innerHTML = leffat[i].innerHTML +"("+ ikäraja[i].innerHTML +")" ;
          document.querySelector("#leffat").appendChild(uusleffa);

          const uusvaraus =  document.createElement("a");
          uusvaraus.innerHTML = "<a href='" +varaa[i].innerHTML +"'>Varaa liput!</a>"  ;
          document.querySelector("#leffat").appendChild(uusvaraus);


          const uuspituus =  document.createElement("p");
          uuspituus.innerHTML = pituus[i].innerHTML +" Min." ;
          document.querySelector("#leffat").appendChild(uuspituus);






        }



      }
  };
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1013&dt=25.11.2022", true); //XML get  a
  xhttp.send();
})
