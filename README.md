
  
## Tartalom

  - [Függőségek](#függőségek)
  - [Telepítés](#telepítés)
  - [Program használata](#program-használata)


## Függőségek

- A program egy MERN Stack alkalmazás, ezáltal az indításhoz szükséges az alábbi technológiák megléte
	- MERN ([Mongo DB (5.0.13)](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.13-signed.msi), Express JS, React JS, Node JS)
![enter image description here](https://webimages.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png?auto=format,compress)

## Telepítés

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

 - Következő block az "Ügyféladatok". Itt egy ügyfélazonosítót adhatunk meg e-mail formában. e-mail validáció a következő regex segitségével történik:  (tartalmaznia kell egy "@" és egy "." karaktert, ezek előtt és után legalább 1db karaktert.)
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

 - Visszalépés után az "ügyfél vagyok" gombra kattintva  megjelenik a "csomag átvétele" felület.
 
![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-13%20161609.jpg)

 - Itt lehetősége van az ügyfélnek "átvenni" a csomagját, miután beírta a szükséges adatokat.
 - Itt megjelenik egy "Teszt Dátum" dátumválasztó teszt jelleggel, arra az esetre, ha nem szeretnénk kivárni amíg lejár a határidő. :)
 - Ha minden adatunk helyes (email, kód, határidő), abban az esetben "kinyílik a fiók" és az adatok törlődnek az adatbázisból.
 - Bármi más esetben egy hiaüzenetet kapunk.
 
![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-13%20161658.jpg)
![enter image description here](https://raw.githubusercontent.com/porneczy/parcel_terminal/main/documentationImg/Screenshot%202022-10-13%20161549.jpg)
