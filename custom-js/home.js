redesign();
function redesign()
{
    const h1 = document.getElementById("myH1");     //get h1 element
    h1.innerHTML = "Manchester United Fan Page";    //Change Text

    const video = document.getElementById("myVid"); //Get Video element
    video.src = "https://www.youtube.com/embed/wcgn6E07E2c"; //Change video

    const h2 = document.getElementById("myh2");     //Get h2 element
    h2.innerHTML = "Club Background"                //Change text
    h2.style.backgroundColor = "#ff0000";               //Change background color to red

    const p = document.getElementById("mypara");    //get p element
    p.innerHTML = "Manchester United have won a record 20 League titles, 12 FA Cups, five League Cups, and a record 21 FA Community Shields. They have won the European Cup/UEFA Champions League three times, and the UEFA Europa League, the UEFA Cup Winners' Cup, the UEFA Super Cup, the Intercontinental Cup and the FIFA Club World Cup once each.[5][6] In 1968, under the management of Matt Busby, 10 years after eight of the club's players were killed in the Munich air disaster, they became the first English club to win the European Cup. Alex Ferguson is the club's longest-serving and most successful manager, winning 38 trophies, including 13 league titles, five FA Cups, and two Champions League titles between 1986 and 2013.[7][8] In the 1998–99 season, under Ferguson, the club became the first in the history of English football to achieve the European treble of the Premier League, FA Cup, and UEFA Champions League.[9] In winning the UEFA Europa League under José Mourinho in 2016–17, they became one of five clubs to have won the original three main UEFA club competitions (the Champions League, Europa League and Cup Winners' Cup). Manchester United is one of the most widely supported football clubs in the world[10][11] and has rivalries with Liverpool, Manchester City, Arsenal and Leeds United." //Text from Wikipedia added

    const article = document.getElementById("myarticle");   //Get the article element which will have child elements appended to it

    const newH2 = document.createElement("h2");             //Create h2 element
    newH2.innerHTML = "Current Manager - Erik Ten Hag"      //Add text
    newH2.style.backgroundColor = "#ff0000";                    //Add Styling
    article.appendChild(newH2);                             //Append h2 element to article

    const managerSection = document.createElement("section");   //Create section element
    managerSection.style.float = "left";                        //style the section to float left
    const newImg = document.createElement("img");               //create img element
    newImg.src = "https://e3.365dm.com/22/04/1600x900/skynews-erik-ten-hag-ajax-manchester-united_5738180.png?20220413110044"; //Give img element source
    newImg.style.width = "500px";                               //Styling img
    newImg.style.height = "275px";                              //Styling img
    newImg.style.paddingRight = "5px";                          //Styling img
    managerSection.appendChild(newImg);                         //Append img to section
    article.appendChild(managerSection);                        //Append section to article

    const managerp = document.createElement("p");               //Create p element
    managerp.innerHTML="Erik ten Hag (born 2 February 1970) is a Dutch professional football coach and former player, who is currently the manager of Premier League club Manchester United. As a player, Ten Hag played as a centre-back in the Dutch league for 13 years, making appearances for Twente (three spells), De Graafschap, RKC Waalwijk and Utrecht. He won the 1990–91 Eerste Divisie with De Graafschap and the 2000–01 KNVB Cup with Twente. On 21 April 2022, Ten Hag was appointed as manager of Manchester United starting from end of the 2021–22 season until June 2025, with the option of extending for a further year.[17] Mitchell van der Gaag and Steve McClaren were later revealed to be joining Ten Hag as part of his coaching staff.[18] On 16 May 2022, it was confirmed that Ten Hag had left his Ajax role early in order to begin his preparations as Manchester United manager for the 2022–23 season.[19] Ten Hag lost his first Premier League match, 1–2 at home to Brighton & Hove Albion on 7 August 2022.[20] Following a 4–0 defeat away to Brentford on 13 August 2022[21] in his second Premier League match, Ten Hag became the first Manchester United manager since John Chapman in 1921 to lose his first two games in charge.[22] On 22 August 2022, Ten Hag won his first competitive game as Manchester United manager when his side recorded a 2–1 victory against arch-rivals Liverpool at Old Trafford. This was United's first league win against Liverpool since March 2018.[23]"; //Add text to p element, text is from wikipedia
    article.appendChild(managerp);                              //Append p element to article

    const transfersH2 = document.createElement("h2");             //Create h2 element
    transfersH2.innerHTML = "New Signings"      //Add text
    transfersH2.style.backgroundColor = "#ff0000";                    //Add Styling
    article.appendChild(transfersH2);                             //Append h2 element to article

    const playerSection = document.createElement("section");   //Create section element
    const images = ["https://e0.365dm.com/22/09/1600x900/skysports-antony-manchester-united_5883145.png?20220901093445", "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt116676207aec93a9/62ed138569288f10f6341fe1/GettyImages-1412027262.jpg", "https://i2-prod.manchestereveningnews.co.uk/sport/football/article25386344.ece/ALTERNATES/s615/0_GettyImages-1244157347.jpg", "https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article25040336.ece/ALTERNATES/s615/0_GettyImages-1242658593.jpg", "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6328dbec88146757/6377ce513a8ccf6309314d73/GettyImages-1437737458.jpg?auto=webp&format=jpg&quality=100", "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt14bad02ab8e1b907/6310e07876781d17769d2a3a/Martin_Dubravka_Manchester_United_2022-23.jpg?format=jpg"]; //Declaring an array of player pictures
    const names = ["Antony", "Christian Eriksen", "Casemiro", "Tyrell Malacia", "Lisandro Martinez", "Martin Dubravka"]; //Declaring Player Names
    for(let i=0; i<images.length; i++) //for loop to create and add divs, h3s and imgs
    {
        const newdiv = document.createElement("div");
        newdiv.style.float = "left";
        const newh3 = document.createElement("h3");
        newh3.innerHTML = names[i];
        newdiv.appendChild(newh3);
        const playerimg = document.createElement("img");
        playerimg.src = images[i];
        playerimg.style.width = "225px";
        playerimg.style.height = "200px";
        newdiv.appendChild(playerimg);
        playerSection.appendChild(newdiv);
    }
    article.appendChild(playerSection); //append section to article
    const playerP = document.createElement("p");    //creating p element
    playerP.innerHTML = "An Eventful first transfer window under Erik Ten Hag saw Manchester United sign 6 new players. The club spent 162.5 Million in total which marquee signing Antony costing 85.5 million from Ten Hag's previous employers Ajax."; //adding text to p element
    playerP.style.float = "left"; //add styling
    article.appendChild(playerP); //append to article

}