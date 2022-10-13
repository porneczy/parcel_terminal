
  
## Tartalom

  - [Feladat leírása](#feladat-leírása) 
  - [Követelmények](#követelmények)
  - [Környezet kialakítása](#környezet-kialakíása)
	  - [Telepítés és konfigurálás](#telepítés-és-konfigurálás)
  - [Program használata](#program-használata)
	  - [Futár vagyok](#futár-vagyok)
	  - [Ügyfél vagyok](#ügyfél-vagyok)
  - [Program Frontend oldali felépítése](#a-program-frontend-oldali-felépítése)
	  - [Courier](#courier)
		  - [BoxSizeCheckbox](#boxsizcheckbox)
		  - [StorageSelection](#storageselection)
		  - [DeadLinePicker](#deadlinepicker)
		  - [CustomerEmail](#customeremail)
		  - [CourierSendForm](#couriersendform)

## Feladat leírása
 - A, B és C méretű boxok léteznek, a futár tudjon megadni egy határidőt, amíg kivehető a csomag, kérlek, vedd figyelembe, hogy érintő képernyőn könnyebb lehet pár karaktert beírni, mint naptárból dátumot választania.
Az alkalmazásnak képes kell legyen az ügyfeleknek is a csomagot átadni azonosító (többféle is lehet) + jelszó segítségével.
 
A Frontend és a Backend legyen külön:
- Frontend megjelenítő rész a futár és a ügyfél részére, tartalmaz frontend oldali üzleti logikát
- Backend tartalmazza a fennmaradó üzleti logikát
 
A dokumentációnak az alkalmazás működését és a végrehajtott teszteket kell bemutatni.

## Követelmények

- A program egy MERN Stack alkalmazás, ezáltal az indításhoz szükséges az alábbi technológiák megléte
	- MERN ([Mongo DB (5.0.13)](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.13-signed.msi), Express JS, React JS, Node JS)
![enter image description here](https://webimages.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png?auto=format,compress)

## Környezet kialakítása
### Telepítés és konfigurálás

- [Segítség a MongoDB telepítéséhez](https://www.mongodb.com/docs/manual/administration/install-community/)

(Fejlesztői környezetben MongoDB 5.0.13-as verziója futott)
A MongoDB telepítése után létre kell hozni azt a könyvtárat, ahol az adatokat tárolni fogja.
Fejlszetői környezetben használt mappa:
```bash
 C:\data\db
```
Ezután egy terminálban elindítjuk a MongoDB Service-t
```bash
 C:\mongodb\bin> mongod
```
Majd egy másik terminálban létrehozzuk az adatbázist
```bash
 C:\mongodb\bin> mongo
 > use parcelTerminal
```
A repó klónozását követően VSCode-ban a "client" és "server" mappában egyaránt futtassuk az "npm intall"-t.
```bash
$ npm install
```
Hozzunk létre 2 párhuzamosan futó terminált a VSCode-ban, a "server" mappában futtasuk le a következő parancsot az indításhoz
```bash
$ nodemon index.js
```
A másik terminálban pedig a "client" mappában futtasuk le a következő parancsot az indításhoz
```bash
$ npm start
```
Ha minden rendben lezajlott, el is indult a program.
(
	server: http://localhost:3000/
	client: http://localhost:8000/
	MongoDB: mongodb://127.0.0.1:27017/parcelTerminal
)
## Program használata
  - Indítást követően 2 lehetőség van. "Futár vagyok" és "Ügyfél vagyok".
  ### Futár vagyok
 - A "Futár vagyok" gomb megnyomása után a következő felület fogad.
 
![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-13%20153450.jpg)
- A "Csomag mérete" block-ban kiválasztjuk, mekkora csomagot szeretnénk elhelyezni valamelyik fiókban, majd a "Szabad tároló kiválasztása" block-ban meghatározzuk a csomag pontos helyét.
 - A fiókok mérete megegyezik a csomagok méretével, a program nem fogja engedni, hogy kicsi ("A" típusú) tárolóban nagy ("C" típusú) csomagot rakjunk, mert nem férne bele. (kisebb csomagot tudunk nagyobb tárolóba rakni) 
 - Illetve a már foglalt fiókokba se enged 1-nél több csomagot belerakni.
 - Példa:
 
![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-13%20154924.jpg)

 - Következő block a "Határidő kiválasztása". Ezzel megadható a ügyfélnek egy határidő, amíg ki tudja venni a csomagot.
 -  A program nem engedi az aktuális mai napot és annál korábbi dátumot elfogadni, illetve nem fogad el olyan dátumot, ami nem valós. 
 - Csak és kizárolag számokat lehet a mezőbe beírni, a szükséges "/" jelet autómatikusan kiteszi. 
 - Példa:
 
![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-13%20160252.jpg)

 - Következő block az "Ügyféladatok". Itt egy ügyfélazonosítót adhatunk meg e-mail formában. e-mail validáció a következő regex segítségével történik:  (tartalmaznia kell egy "@" és egy "." karaktert, ezek előtt és után legalább 1db karaktert.)
```jsx
/\S+@\S+\.\S+/
```
 - Miután minden szükséges adatok helyesen kitöltöttünk, csakis kizárólag akkor enged a program a "rögzítés" gombra kattintani. 
 - Ezzel bekerült az adatbázisba a csomag.
 - A program generál egy 6 számból álló véletlenszerű jelszót is, aminek megléte feltétlen szükséges az ügyfél oldalon. 
 - "vágolapra másol" gombbal lemásolhatjuk a szükséges adatokat, így nem szükséges az adatbáziba belépni.
 - Példa:
 
![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-13%20161444.jpg)
 - Bezárást követően az oldal ujratöltődik.
### Ügyfél vagyok
 - Visszalépés után az "ügyfél vagyok" gombra kattintva  megjelenik a "csomag átvétele" felület.
 
![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-13%20161609.jpg)

 - Itt lehetősége van az ügyfélnek "átvenni" a csomagját, miután beírta a szükséges adatokat.
 - Itt megjelenik egy "Teszt Dátum" dátumválasztó teszt jelleggel, arra az esetre, ha nem szeretnénk kivárni amíg lejár a határidő. :)
 - Ha minden adatunk helyes (email, kód, határidő), abban az esetben "kinyílik a fiók" és az adatok törlődnek az adatbázisból.
 - Bármi más esetben egy hiaüzenetet kapunk.
 
![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-13%20161658.jpg)
![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-13%20161549.jpg)
## A program Frontend oldai felépítése
 - A program UI részéhez a Mui lett használva.
	 - Az [Mui](https://mui.com/) egy open-source React libary, a projektben egy alap felhasználói élményért volt felelős.
 - Dátumkezelés [Day.JS](https://day.js.org/)-el történik.
	 - Kis helyet foglaló, gyors dátumkezelő
	
### könyvtárszerkezet

 - A program frontend részén lévő konyvtárszerkezet:
 
 ![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-13%20172253.jpg)

 - 3 csoporta vannak felosztva a komponensek
	 - Welcome
	 - Courier
	 - Customer
 - A Welcome/Welcome.jsx komponensben található a 2 gomb, ami fogad a főoldalon.
	 - itt a 2 oldalra történő navigálás `react-router` segítségével történt

### Courier

 - A Courier/Courier.jsx komponensbe van importálva a CourierDialog.jsx-en kívül mindegyik Courier mappában található komponens
	 - itt történik a `getData` függvénnyel, `axios`-al egy `GET` kérés az adatbázis felé amivel a következő `state`-be ment minden adatot az adatbázisból.
 ```js
const [data, setData] =  useState([]);
```
 ```js
const  getData  = () => {
	axios({
		method: 'get',
		url: 'http://localhost:3000/api/parcels/',
	})
		.then(function (response) {
		setData(response.data.data)
		});
}
useEffect(() => {
	getData()
}, [])
```


#### BoxSizeCheckbox

 - Ebben a komponensben a "csomag mérete" block található
 - A `<RadioGroup />`-on el van helyezve egy `onClick` esemény ami meghívja a `handleChange()` függvényt ami egy `state`-be menti a felvett csomag méretét.
 ```js
 const  handleChange  = (event) => {
	setBoxSize(event.target.value)
}; 
```

#### StorageSelection

 - Ebben a komponensben a "Szabad tároló kiválasztása" block található
 - Létezik 3 tömb ( `box_A_radioInputs`, `box_B_radioInputs`, `box_C_radioInputs` ) amiben A, B és C sor cellák találhatók.
 - Mindhárom tömbön végigiterál egy `.map()` metódus így jól és átláthatóan lehet a checkboxokat kezelni
 - A checkboxoknak van 1-1 `disabled` `prop`-a ami `true` és `false` értéket vehet fel, `false` esetén lehet használni, `true` esetén pedig nem kattintható, nem vesz fel értéket.
 - A sor cellákhoz is tartozik 1-1 state, ami `true` és `false` értéket tud felvenni, amire egy `if()` feltételt írva a lehet szabályozni, hogy nagyobb csomag esetén ne lehessen kisebb tárolóba berakni a csomagot.
 ```js
if (boxSize  ===  "b") {
	setBox_A_Disabled(true)
	setBox_B_Disabled(false)
	setBox_C_Disabled(false)
```
 - A cellák `disabled` `prop`-a akkor vesz fel `true` értéket ha vagy a sor vagy a már foglalt box `true` értéket ad vissza
  ```js
disabled={box_A_Disabled  ||  reservedBoxes.includes(radioInput.value) ?  true  :  false}
```
 -  Az előző `handleChange()` függvény mintájára `userBox,setUserbox` `state`-be menti a kiválasztott tárolót.
 
### DeadLinePicker
 - Ebben a komponensben a "Határidő választása" block található
 - Itt a `<DesktopDatePicker />` Mui komponens van használva
 - `porp`-nak megadható `disablePast={true}` lehetővé teszi, hogy az aktuális mai napnál régebbi értéket ne tudjon felvenni
 - Aktuális mai dátum és a DatePicker kezdeti értéke egyben a határidő is a következő state
 ```js
 const [dateValue, setDateValue] =  useState(dayjs());
```
 - `onChange`-re egy validációnak szolgáló `handleChange()` függyény fut le
 ```js
const  handleChange  = (newValue) => {
	if (newValue) {
		if (newValue.$d.toString() ===  "Invalid Date") {
			setDateError('válassz valós dátumot');
			return
		}
		const  newDateSum  =  newValue.year() +  newValue.month() +  newValue.date()
		const  todaySum  =  dayjs().year() +  dayjs().month() +  dayjs().date()
		if (newDateSum  <=  todaySum) {
			setDateError('válassz későbbi időpontot');
		} else {
			setDateError(null);
			setDateValue(newValue);
		}
	}
};
```
 - itt azt veszi figyelembe, ha a mező nem üres, akkor a második `if()`-be belépve megvizsgálja a `DatePicker` által validált értéket, és ha az `Invalid Date` akkor error üzenetben megjelenik a "válassz valós dátumot" és ures `return`-al tér vissza
 - A `newDateSum` és a `todaySum` pedig egy-egy szám, az előbbi az `DatePicker`  aktuális `value` év, hónap,nap összege. PL: 2022+10+13= 2045 (0-11 -ig számolja a hónapokat, de itt ez most nem releváns)
 - `todaySum` pedig az aktuális mai dátum "összege"
 - ezekkel az értékekkel és a feltétellel azt érjük el, hogy ne lehessen a mai napot megadni határidőnek, ezzel legalább 1 napot hagyva az ügyfélnek átvenni a csomagját.

### CustomerEmail
 -   Ebben a komponensben a “Ügyféladatok” block található
 - `isValidEmail()`függvény `true` és `false` értékkel térhet vissza, ha a kapott string megfelel a `regex`-nek a `.test()` metódus ezt ellenőrzni és visszaad `true` vagy `false`-t
  ```js
function isValidEmail(email) {
	return /\S+@\S+\.\S+/.test(email);
}
```

 
### CourierSendForm

- Ebben a komponensben, az "rögzítés" gomb, a hozzá tartozó függvények, pin kód generálás és `POST`-olás található
- A felhasználó pin kódja itt jön létre, egy 6 jegyű számot generlál 0 és 900 000 tartományban, majd hozzáad 100 000-et. A faktor 900 000, nem pedig 899 999, mivel a `Math.random()`függvény a [0, 1 tartományba eső számokat állítja elő, azaz magát az 1-et nem tartalmazza.
```js
Math.floor(100000  +  Math.random() *  900000)
```
 - a "rögzítés" gombnak van egy `disabled` `prop`-a ami az alábbi `state` hatására vesz fel `true` vagy `false` értéket
  ```js
disabled={buttonDisabled}
```
 ```js
const [buttonDisabled, setButtonDisabled] =  useState(true);
```
  - ezt az értéket egy feltétellel tudjuk módosítani
 ```js
if (userBox  &&  dateError  ===  null  &&  emailError  ===  null) {
	setButtonDisabled(false)
}
```
 - HA van kiválasztva fiók ÉS a dátum error szöveg eltűnt ÉS az email error szöveg eltűnt AKKOR a `disabled` prop `false` értéket kap és el elnegedi küldeni az adatokat.
 - Az adatok küldése `axios` `POST` method-al történik
 ```js
axios({
	method: 'post',
	url: 'http://localhost:3000/api/parcel/',
	data: {
		box: userBox,
		deadLine: dateValue.year() +  "."  + (dateValue.month() +  1) +  "."  +  dateValue.date(),
		email: userEmail,
		pw: pin,
	}
})
```
