const kategorie = {
  	przyslowiaKat: ["Bez pracy nie ma kołaczy", "Im dalej w las tym więcej drzew","Na bezrybiu i rak ryba", "Adwokat niech głowę, a koń niech ma nogi", "Aksamity, atłasy sławy nie czynią", "Apetyt rośnie w miarę jedzenia", "Bez matki nie ma chatki", "Bogatemu to i byk się ocieli", "Bo pić trzeba umieć", "Bierz nogi za pas, póki jeszcze czas", "Chcesz być bogatym, bądź siedem lat świnią", "Co cię nie zabije, to cię wzmocni", "Co dwie głowy, to nie jedna", "Co jedna głowa wymyśli, to druga odmyśli", "Co się źle zaczyna, to się dobrze kończy", "Czego nie można zmienić, to trzeba polubić", "Czuć się jak ryba w wodzie", "Dla chcącego nic trudnego", "Dla głupiego każdy dzień święto", "Do ludzi po naukę, do matki po koszulę", "Do Rzymu przez Krym", "Dobry początek to połowa roboty", "Dzieci i ryby głosu nie mają", "Gdy kota nie ma, myszy harcują"],
  	filmyKat: ["Fantastyczne zwierzęta i jak je znaleźć", "Skazani na Shawshank", "Skazany na śmierć", "Nie z tego świata", "Czterej pancerni i pies", "Batman vs Superman", "Moda na sukces", "Gra o tron", "Ogniem i mieczem", "Świat według kiepskich", "Ojciec chrzestny", "Forrest Gump", "Pulp Fiction", "Leon zawodowiec", "House of cards", "Kompania braci", "Miasteczki Twin Peaks", "Stranger Things", "Rodzina Soprano", "Synowie Anarchii", "Teoria Wielkiego Podrywu", "Jak poznałem waszą matkę", "Dwóch i pół", "Człowiek z blizną", "Most na rzece Kwai", "Leon zawodowiec", "Chłopiec w pasiastej piżamie", "Braveheart waleczne serce", "W pogoni za szczęściem", "Bękarty wojny", "Szeregowiec Ryan", "Wróg u bram", "Mechaniczna pomarańcza", "XXX", "Requiem dla snu", "Złap mnie jeśli potrafisz", "Jak rozpętałem drugą wojnę światową", "Chłpaki nie płaczą",], 
	zwierzetaKat: ["Diabeł tasmański", "Płetwal błękitny", "Antypola gnu", "Słoń indyjski", "Słoń afrykański", "Nosorożec", "Hipopotam", "Sowa śnieżna", "Tygrys bengalski", "Lew morski", "Surykatka", "Kura jedwabista", "Orzeł bielik", "Pies dingo", "Niedźwiedź brunatny", "Waran z Komodo", "Żarłacz biały", "Diugoń przybrzeżny", "Kozica górska", "Jeżozwierz", "Salamandra plamista", "Kobra królewska", "Wielbłąd dwugarbny", "Wielbłąd jednogarbny", "Niedźwiedź polarny", "Pingwin królewski", "Goryl górski", "Orangutan borneański", "Szympans karłowaty", "Konik Polski", "Koń Przewalskiego", "Żółw jaszczurowaty","Piesek preriowy"],
	geografiaKat: ["Dolina pięciu stawów", "Wyspy Zielonego Przylądka", "Mount Rushmore", "Mount Everest", "Morze Śródziemnomorskie", "Chińska Republika Ludowa", "Korea Północna", "Korea Północna", "Rów mariański", "Australia i Oceania", "Papua i Nowa Gwinea", "Bośnia i Hercegowina", "Pojezierze Mazurskie", "Wyżyna Krakowsko-Częstochowska", "Nowa Funlandia", "Wyżyna meksykańska", "Góry Skaliste", "Wielkie Jezioro Niedźwiedzie", "Dolina Rodanu", "Kanał Panamski", "Zatoka Amundsena", "Półwysep Skandynawski", "Kordyliera Środkowa", "Nowa Kaledonia", "Cieśnina Gibraltarka", "Kanał La Manche", "Nizina Eufratu i Tygrysu", "Zatoka Bengalska", "Kotlina Dżungarska", "Pustynia Alszan", "Góry przylądkowe", "Kilimandżaro", "Jezioro ALberta Konga", "Pustynia Kalahari", "Wielki kanion", "Ziemia Baffina", "Półwysep Paraguana", "Wielkie Góry Wododziałowe", "Puszcza Białowieska"],
};

var planszaX = document.getElementById('plansza');

var haslo;
var dlugosc;
var ukryteHaslo = "";
var ile_skuch;
var obraz;


function wybierzKat(choice) {
	ile_skuch = 0;
	ukryteHaslo = "";
  	var losowanieHasla = Math.floor(Math.random() * kategorie[choice].length);
	haslo = kategorie[choice][losowanieHasla];
	haslo = haslo.toUpperCase();
	dlugosc = haslo.length;
	if ( planszaX !== ""){
		for (i=0; i<dlugosc; i++){
		if (haslo.charAt(i)==" ") ukryteHaslo = ukryteHaslo+" ";
		else if (haslo.charAt(i)==",") ukryteHaslo=ukryteHaslo+",";
		else ukryteHaslo = ukryteHaslo + "-";
		};
	};
	planszaX.innerHTML = ukryteHaslo;
	start();
	var obraz = "img/s0.jpg";
	document.getElementById("szubienica").innerHTML = "<img src=\""+obraz+"\"/>";
}





var litery =  new Array(35)

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";



function start(){	
	var trescDiva = "";
	for (i=0; i<=34; i++){
	var element = "lit"+i;			
		trescDiva = trescDiva + "<div class=\"litera\" onclick=\"sprawdz("+i+")\" id=\""+element+"\">"+litery[i]+"</div>";		
	}
	document.getElementById("alfabet").innerHTML = trescDiva;	
} 

String.prototype.ustawZnak = function(miejsce, znak){

	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak +this.substr(miejsce+1);
}


function sprawdz(nr){
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++){
		if (haslo.charAt(i) == litery[nr]){
			ukryteHaslo = ukryteHaslo.ustawZnak(i, litery[nr]);
			trafiona = true;
		}
	}
	if (trafiona == true ){
		
		var element = "lit"+nr;	
		document.getElementById(element).style.color="#00c000";
		document.getElementById(element).style.border="5px solid #00c000";
		document.getElementById(element).style.cursor="default";
		
		planszaX.innerHTML = ukryteHaslo;	
		
	}
	else{
		
		var element = "lit"+nr;	
		document.getElementById(element).style.color="#c00000";
		document.getElementById(element).style.border="5px solid #c00000";
		document.getElementById(element).style.cursor="default";
		document.getElementById(element).setAttribute("onclick",";");
		
		//skucha
		
		ile_skuch++;
		var obraz = "img/s"+ile_skuch+".jpg";
		document.getElementById("szubienica").innerHTML = "<img src=\""+obraz+"\"/>";
		
	}
	
	//wygrana
	if (haslo == ukryteHaslo)
	document.getElementById("alfabet").innerHTML = "Wygrana! Podano prawidłowe hasło: " +haslo+ "<br/><br/> Liczba skuch wynosi= " +ile_skuch+".<br/><br/>Jeżeli chcesz zagrać ponownie wybierz kategorie"
	
	//przegrana
	if (ile_skuch > 5)
	document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło: " +haslo+ "<br/><br/>Jeżeli chcesz zagrać ponownie wybierz kategorie"
}

