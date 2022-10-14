
  
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
		  - [CourierDialog](#courierdialog)
	  - [Customer](#customer)
 - [Program Backend oldali felépítése](#a-program-backend-oldali-felépítése)
	 - [Könyvtárszerkezet](#könytárszerkezet)
	 - [db\index](#dbindex)
	 - [models\parcel-model](#modelsparcel-model)
	 - [controllers\parcel-ctrl](#controllersparcel-ctrl)
	 - [routes\parcel-router](#routesparcel-router)

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

## Courier
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
 - ebbe a komponensbe van importálva a `CourierDialog.jsx`
 
 ### CourierDialog
  - Ebben a komponensben a beküldés utáni felugró ablak található
  - Itt megjelennek csomag kivételéhez szükséges adatok, egyfajta összegzés
  - A copyClipboard függvény pedig a vágólapra másolja ezeket az adatokat
   ```js
const  copyClipboard  = () => {
navigator.clipboard.writeText("Tároló: "  + (userBox  ?  userBox.toUpperCase() :  userBox) +  "\nHatáridő: "  +  dateValue.year() +  "."  + (dateValue.month() +  1) +  "."  +  dateValue.date() +  "\ne-mail: "  +  userEmail  +  "\njelszó: "  +  pin)
}
```
 - a bezárás gomb megnyomásával illetve a dialog-ból való kikattintásra a dialog eltűnik és az oldal újratöltődik
## Customer
### Customer
 - Ebben a komponensben található az ügvfél oldali bejelentkezés, a tesztelésnek használt `DateChanger` és ide van importálva a sikeres és sikertelen elküldés `Dialog`.
 - A 2 beviteli mező `onChange`-re van egy `handleChange` függvény, ami a bevitel tipusától függően tárolja egy `state`-ben az email-t és a jelszót.
```js
const  handleChange  =  event  => {
	if (event.target.id  ===  "email") {
		setUserEmail(event.target.value)
	}
	if (event.target.id  ===  "password") {
		setUserPin(event.target.value)
	}
}
```
 - A lenti gomb-nak itt is van egy `disabled` `prop`-a ami a lent található `DateChanger`  validációja által visszaadott értéket vizsgája egy feltételben.
``` js
disabled={testDateError  ===  "válassz valós dátumot"  ?  true  :  false}
```
 - A gomb rendelkezik egy `onClick` eseménnyel is, `checkEmailAndPin()` ami ellenőrzi, hogy a beirt adatok mindegyike megegyezik-e valamelyik felvett csomag adataival.
 ``` js
const  checkEmailAndPin  = () => {
	let  validation  =  false
	  
	data.map((parcel) => {
		const  actualParcelDeadLineSum  =  Number(parcel.deadLine.substring(0, 4)) +  Number(parcel.deadLine.substring(5, 7)) +  Number(parcel.deadLine.substring(8, 10))
		const  testDateValueSum  =  testDateValue.year() +  testDateValue.month() +  testDateValue.date()
	  
		if (parcel.email  ===  userEmail  &&  parcel.pw  ===  Number(userPin) &&  actualParcelDeadLineSum  >=  testDateValueSum) {
			handleClickOpenSuccessDialog()
			validation  =  true
			setUserBoxName(parcel.box)
			setUserID(parcel._id)
		}
	})
	if (!validation) {
		handleClickOpenErrorDialog()
	}
}
 ```
  - Itt létrehoz egy `validation` változót ami `false` vagy `true` éréket fehet fel. kezdeti értéke `false`. Ha az ellenőrzésre szolgáló feltétel nem teljesül, marad `false` értéken a `validation` és ilyenkor a hibaüzenet `Dialog` fog lefutni. 
  - a függvény egy `.map()` `method`-al végigiterál a `data`-n (ebben van minden adatbázis adat amit `axios`-al az elején beleraktunk)
  - itt létrehoz 2 `const`, `actualParcelDeadLineSum` és `testDateValueSum`. Az előbbi az éppen aktuális `data` adathoz tartózó határidőt "adja össze" a `DeadLinePicker`-nél is használt módszerrel, annyi különbséggel, hogy az adatbázisban szereplő határidő egy `string`, amit "szét szed" év/hó/nap részekre `.substing()` method-al, majd `Number` tipússá alakítja.
  - ugyanezt átalakítás nélkül megcsinálja a `testDateValueSum` `const`-al is, ami a teszt dátumválasztó értéke.
  - Majd egy feltételben ellenöris minden szükséges adatot a fiók kinyitásához.
	  - HA az aktuális `data` adathoz tartozó email cim megegyezik az email mezőbe beírt email címmel ÉS ugyanez a `Pin`-el ÉS a határidő összeg nagyobb vagy egyenlő mint a tesztdátum (alapesetben itt is az aktuális mai dátum) AKKOR a sikeres `Dialog` fog lefutni, a `validation` változó `true` értéket vesz fel és state-be rakja a `box` nevét (pl: A4) és az aktuális `data` adathoz tartozó `ID`-t amire a törléskor lesz szükség.
	  - Mivel ez csak abban az esetben teljesül, ha minden feltétel helyes, ellenkező esetben a `validation` értéke nem változik és az `error` `Dialog` fog lefutni ami egy egyszerű hiaüzenetet tartalmaz.
 - Ha minden adatunk helyes, akkor a `CustomerDialogSuccess` fog lefutni, ami tartalmazza, hogy melyik fiókból tudjuk kivenni a csomagot. Ha ezt az Dialog-ot bezárjuk akkor egy `handleCloseSuccessDialog()` függvény fut le, ami magát a `DEL` kérést tartalmazza, és kitörli az adatbázisból a fenti feltételben látott `setUserID(parcel._id)` state-be rakott `ID`-ű höz tartozó rekordot.
 ``` js
 axios
	.delete(`http://localhost:3000/api/parcel/${userID}`)
	.then(resp  =>  resp.data)
 ```
  - ezután az oldal újratöltődik. 
 
## Program Backend oldali felépítése
  
### könyvtárszerkezet

 - A program backend részén lévő konyvtárszerkezet:

![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-14%20100415.jpg)
 
 
 -  A MongoDB egy séma nélküli NoSQL-dokumentum-adatbázis. Ez azt jelenti, hogy JSON-dokumentumokat tárolhat benne, és ezeknek a dokumentumoknak a szerkezete változhat, mivel nem kényszerítik ki, mint az SQL-adatbázisok. Ez a NoSQL használatának egyik előnye, mivel felgyorsítja az alkalmazásfejlesztést és csökkenti a telepítések bonyolultságát.

### db\index

 - A Mongoose egy Object Data Modeling (ODM) könyvtár a MongoDB és a Node.js számára. Kezeli az adatok közötti kapcsolatokat, biztosítja a séma érvényesítését, valamint a kódban lévő objektumok és az objektumok MongoDB-beli reprezentációi közötti fordítására szolgál.

![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-14%20103206.jpg)
 
 ``` js
 mongoose
	.connect('mongodb://127.0.0.1:27017/parcelTerminal', { useNewUrlParser: true })
	.catch(e  => {
	console.error('Connection error', e.message)
	})
 ```
  - `127.0.0.1:27017` cím jelzi a `server`-t, `parcelTerminal` pedig az adatbázis neve

### models\parcel-model
 - A Mongoose séma határozza meg a dokumentum szerkezetét, alapértelmezett értékeket, érvényesítőket stb.
  - A séma egy objektumon keresztül határozza meg a dokumentum tulajdonságait, ahol a kulcsnév megegyezik a gyűjteményben lévő tulajdonság nevével.
  ``` js
 const  Parcel  =  new  Schema(
	{
		box: { type: String, required: true },
		deadLine: { type: String, required: true },
		email: { type: String, required: true },
		pw: { type: Number, required: true },
	},
	{ timestamps: true },
) 
  ```

### controllers\parcel-ctrl
 - Itt létrehozzuk az összes szükséges CRUD-műveletet
 - `createParcel` szolgál az új rekordok létrehozására. (`POST`)
 - `getParcels` a rekordok lekérdezésére. (`GET`)
 - `deleteParcel` pedig a törlésre. (`DEL`) 

### routes\parcel-router
 - Itt hozzuk létre a `REST` végpontokat.
 ``` js
 router.post('/parcel', ParcelCtrl.createParcel)
router.get('/parcels', ParcelCtrl.getParcels)
router.delete('/parcel/:id', ParcelCtrl.deleteParcel)
 ```

### index.js
 - [Express.js](https://expressjs.com/) egy JavaScript keretrendszer A Node.js környezetben tárolt egyoldalas és többoldalas alkalmazásokra.
 - Jelen esetben a `server` a `3000`-es porton fut
 - Az app.use() a köztesszoftver függvény csatlakoztatására vagy egy megadott elérési útra történő csatlakoztatására szolgál, a köztesszoftver-függvény akkor kerül végrehajtásra, ha az alap elérési útja megegyezik.
``` js
app.use('/api', parcelRouter)
```
 - A fenti kódban az app.use() csatolja az parcel-router.js fájl „/api” elérési útját.
