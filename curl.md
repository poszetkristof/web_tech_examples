A curl használata
=================

Telepítés
---------

* Linux (Ubuntu):
  ```
  apt install curl
  ```

* macOS: a curl az operációs rendszerrel együtt települ a számítógépre, ezért nem szükséges külön telepíteni.

* Windows: <https://curl.se/windows/>

  * A Windows 10 és 11 is tartalmazza ugyan a curl-t, de az egy korlátozott lehetőségekkel és képességekkel rendelkező _build_, a részleteket lásd [itt](https://curl.se/windows/microsoft.html). Például nincs HTTP/2 és HTTP/3 támogatás.

  * Meg kell jegyezni, hogy a curl a [Git for Windows](https://gitforwindows.org/) része is, tehát rendelkezésre áll a Git BASH-ban. Azonban ebből is hiányoznak bizonyos lehetőségek, mint például a HTTP/2 és HTTP/3 támogatás.

  * A PowerShell-ben a `curl` parancs egy alias egy olyan cmdlet-re, aminek semmi köze sincs a curl eszközhöz. Ezért a PowerShell-ben `curl.exe` módon lehet a curl eszközre hivatkozni.

* Telepítés a [Miniconda](https://docs.conda.io/en/latest/miniconda.html) révén (Linux, macOS, Windows):
  ```
  conda install curl
  ```

A példák kipróbálása
--------------------

A dokumentum parancsai Bash-ban történő végrehajtáshoz készültek, azonban a legtöbb parancs bármiféle módosítás nélkül működik a Windows parancssorban is. A többi parancs is könnyen a Windows parancssorra adaptálható a speciális karakterek levédéséhez a `\` karakter helyett a `^` karakter használatával.

Rendelkezésre állás ellenőrzése
-------------------------------

```
curl
curl --version
curl -V
```

Segítség
--------

Rendelkezésre álló parancssori opciók megjelenítése:

```
curl --help
curl -h
```

Kézikönyv megjelenítése:

```
curl --manual
curl -M
man curl
```

Dokumentáció: <https://curl.se/docs/>

Alapvető használat
------------------

Webhely: <https://ip-api.com/>

```
curl ip-api.com/json
curl http://ip-api.com/json
curl http://ip-api.com/json -O
curl http://ip-api.com/json -O -s
curl http://ip-api.com/json -o ip-api.json -s
curl http://ip-api.com/json -o ip-api.json -v -s
curl --head http://ip-api.com/json
curl --head http://ip-api.com/json -v
curl -X DELETE http://ip-api.com/json -v
```

Átirányítás
-----------

A böngészők automatikusan kezelik az átirányításokat, a curl azonban nem.

### Példa (1)

Webhely: <http://www.w3.org/>

```
curl http://w3.org -v
curl http://w3.org -v --location -o w3.html
curl http://w3.org -v -L -o w3.html
```

### Példa (2)

URL rövidítő szolgáltatás: <https://is.gd/>

```
curl -s "https://is.gd/create.php?format=simple&url=https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP" > shorturl.txt
cat shorturl.txt
cat shorturl.txt | xargs curl -Is | grep -i ^Location
```

Tartalomegyeztetés
------------------

### Példa (1): ugyanaz a tartalom több különböző nyelven

Webhely: <http://www.gnu.org/>

```
curl http://www.gnu.org/ -v -H Accept-Language:de -o gnu.de.html
curl http://www.gnu.org/ -v -H Accept-Language:fr -o gnu.fr.html
```

### Példa (2): átirányítás webhely mobil verziójára

Webhely: <https://www.youtube.com/>

```
curl https://www.youtube.com/ --http1.1 -v --user-agent "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1"
```

Lásd: <https://www.whatismybrowser.com/guides/the-latest-user-agent/>

### Példa (3): ugyanaz a tartalom több különböző formátumban

Lásd: <https://www.dbpedia.org/>

```
curl https://dbpedia.org/resource/Grumpy_Cat -v
curl https://dbpedia.org/resource/Grumpy_Cat -v -H Accept:text/html
curl https://dbpedia.org/resource/Grumpy_Cat -v -H Accept:text/html -L -o Grumpy_Cat.html
curl https://dbpedia.org/resource/Grumpy_Cat -v -H Accept:application/json
curl https://dbpedia.org/resource/Grumpy_Cat -v -H Accept:application/json -L -O
```

Minták
------

### Példa (1)

Lásd: <https://www.gnu.org/licenses/>

```
curl https://www.gnu.org/licenses/gpl-3.0.\{html,md,txt\} -O
curl "https://www.gnu.org/licenses/gpl-3.0.{html,md,txt}" -O
curl "https://www.gnu.org/licenses/gpl-3.0.{html,md,txt}" -O -v
curl "https://www.gnu.org/licenses/gpl-3.0.{html,md,txt}" --create-dirs -o "licenses/gpl-3.0.#1"
```

### Példa (2)

Lásd: <https://en.wikisource.org/wiki/The_Hound_of_the_Baskervilles_(Newnes,_1902)>

```
curl https://en.wikisource.org/wiki/The_Hound_of_the_Baskervilles_\(Newnes,_1902\)/Chapter_[1-15] -O
curl https://en.wikisource.org/wiki/The_Hound_of_the_Baskervilles_\(Newnes,_1902\)/Chapter_[1-15] --create-dirs -o "The_Hound_of_the_Baskervilles/Chapter_#1.html"
```

Több kérés
----------

```
curl https://www.gnu.org/licenses/gpl-3.0.txt -O https://www.apache.org/licenses/LICENSE-2.0.txt -O
curl --head https://dbpedia.org/resource/Hungary https://dbpedia.org/resource/Budapest
curl -H Accept:application/json https://dbpedia.org/resource/Hungary https://dbpedia.org/resource/Budapest -v
curl -H Accept:application/json https://dbpedia.org/resource/Hungary --next -H Accept:application/rdf+xml https://dbpedia.org/resource/Budapest -v
```

Megszakított átvitel folytatása
-------------------------------

Lásd: <https://download.bbbike.org/osm/bbbike/Budapest/>

Szakítsuk meg az átvitelt a <kbd>CTRL</kbd> + <kbd>C</kbd> megnyomásával:

```
curl https://download.bbbike.org/osm/bbbike/Budapest/Budapest.osm.gz -O
```

Az átvitel folytatása:

```
curl https://download.bbbike.org/osm/bbbike/Budapest/Budapest.osm.gz -O -C -
```

Tartományra vonatkozó kérések
-----------------------------

Lásd: <https://www.gnu.org/licenses/gpl-3.0.txt>

Az első 100 bájt:

```
curl https://www.gnu.org/licenses/gpl-3.0.txt -r 0-99
curl https://www.gnu.org/licenses/gpl-3.0.txt -r 0-99 -v
```

Az utolsó 100 bájt:

```
curl https://www.gnu.org/licenses/gpl-3.0.txt -r -100
curl https://www.gnu.org/licenses/gpl-3.0.txt -r -100 -v
```

Az első és utolsó 100 bájt:

```
curl https://www.gnu.org/licenses/gpl-3.0.txt -r 0-99,-100
curl https://www.gnu.org/licenses/gpl-3.0.txt -r 0-99,-100 -v
```

Feltételes kérések
------------------

Lásd: <https://earthquake.usgs.gov/earthquakes/feed/v1.0/csv.php>

```
curl https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv -O --http1.1 -v
curl https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv -O --http1.1 -z all_hour.csv -v
sleep 60; curl https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv -O --http1.1 -z all_hour.csv -v
```

Űrlap adatok küldése
--------------------

### Példa (1): GET

Webhely: <https://blackwells.co.uk/>

```
curl https://blackwells.co.uk/bookshop/search?keyword=sherlock+holmes\&pubDateFrom=2022\&pubDateTo=2023 -o search.html -v
curl --get https://blackwells.co.uk/bookshop/search -d keyword=sherlock+holmes -d pubDateFrom=2022 -d pubDateTo=2023 -o search.html -v
curl --get https://blackwells.co.uk/bookshop/search --data-urlencode keyword="sherlock holmes" -d pubDateFrom=2022 -d pubDateTo=2023 -o search.html -v
```

### Példa (2): POST

Webhely: <https://www.base64encode.org/>

```
curl https://www.base64encode.org/ --http1.1 -d input=Hello,\ World! -d charset=UTF-8 -d separator=lf -o output.html --trace-ascii trace.txt -s
```

Web API-k használata
--------------------

### Példa (1): wttr.in

Lásd: <https://wttr.in/>, <https://github.com/chubin/wttr.in>

```
curl http://wttr.in
curl http://wttr.in/:help
curl http://wttr.in/London
curl http://wttr.in/New+York
curl http://wttr.in/~Tower+Bridge
curl http://wttr.in/~Mount+Everest
curl http://wttr.in/ -H Accept-Language:en
curl http://wttr.in/ -H Accept-Language:de
curl http://wttr.in?lang=hu
curl http://wttr.in?lang=en
curl http://wttr.in?lang=de
curl http://hu.wttr.in
curl http://de.wttr.in
curl http://wttr.in/?format=1
curl http://wttr.in/?format=2
curl http://wttr.in/?format=3
curl http://wttr.in/?format=4
curl http://wttr.in/?format=j1
curl http://wttr.in/Budapest?format=v2
curl http://v2.wttr.in/Budapest
curl http://wttr.in/Moon
```

### Példa (2): fájlmegosztás (temp.sh)

Lásd: <https://temp.sh/>

```
echo "Hello, World!" > hello.txt
curl -F "file=@hello.txt" https://temp.sh/upload
```

Sütik
-----

Lásd: <https://curl.se/docs/http-cookies.html>

```
rm -f cookies.txt
curl https://www.youtube.com/ -c cookies.txt -o /dev/null -v
cat cookies.txt
curl https://www.youtube.com/watch?v=pTBjHjRhx_Y -b cookies.txt -o /dev/null -v
```

Hitelesítés
-----------

### Példa (1): API kulcs

Webhely: [Rebrickable API](https://rebrickable.com/api/)

Swagger UI az API-hoz: <https://rebrickable.com/api/v3/swagger/>

Az API használatához API kulcs szükséges, mely [itt](https://rebrickable.com/users/jeszy/settings/#api) generálható (bejelentkezés szükséges).

```
curl https://rebrickable.com/api/v3/lego/sets/60386-1/ -H "Authorization: key <your-api-key>" -v
curl https://rebrickable.com/api/v3/lego/sets/60386-1/minifigs/ -H "Authorization: key <your-api-key>" -v
curl https://rebrickable.com/api/v3/lego/sets/60386-1/parts/ -H "Authorization: key <your-api-key>" -v
```

Móka és szórakozás
------------------

### VT100 animáció

Webhely: <http://artscene.textfiles.com/vt100/>

```
curl -s http://artscene.textfiles.com/vt100/globe.vt | pv -L4K -q
```
### ASCII animáció

Webhely: <http://ascii.live/> <https://github.com/hugomd/ascii-live>

```
curl http://ascii.live/forrest
curl ascii.live/list
curl ascii.live/rick
curl ascii.live/donut
```

Böngésző megszemélyesítése
--------------------------

Bizonyos webhelyek nem szeretik azokat a felhasználói ágenseket, melyek nem böngészők, és például 403 (Forbidden) állapotkódú válaszokat küldenek a curl által küldött kérésekre. Ekkor meg lehet próbálni a [curl-impersonate](https://github.com/lwthiker/curl-impersonate) programot, mely a curl egy olyan speciális összeállítása, mely meg tudja személyesíteni a főbb böngészőket, mint például a Firefox vagy a Chrome.

Például a

```
curl --head https://www.nasdaq.com/
```

parancs hibával terminál.

A szerver becsapásához használjuk helyette a

```
curl_chrome116 --head https://www.nasdaq.com/
```

parancsot, mely egy Chrome böngészőt személyesít meg.

Meg kell jegyezni, hogy a curl-impersonate Linux és macOS rendszerekre áll rendelkezésre.

Itt olvashatsz arról, hogy hogyan tudják blokkolni a webhelyek az olyan felhasználói ágenseket, melyek nem böngészők:

* [TLS fingerprinting](https://lwthiker.com/networks/2022/06/17/tls-fingerprinting.html)
* [HTTP/2 fingerprinting](https://lwthiker.com/networks/2022/06/17/http2-fingerprinting.html)

Sajnos a curl-impersonate nem mindig képes becsapni a webhelyeket. Például nem érhető el a programmal a [Netflix](https://www.netflix.com/) webhely. Tehát például a

```
curl_chrome116 --head https://www.netflix.com/hu/
```

parancs végrehajtásának eredménye egy 403 (Forbidden) állapotkódú válasz.

Sok esetben a webhelyet hosztoló [Cloudflare](https://www.cloudflare.com/) okozza a problémát. A Cloudflare [Browser Integrity Check](https://developers.cloudflare.com/waf/tools/browser-integrity-check/) lehetősége szolgál  a nem böngésző felhasználói ágensek kizárására, mely alapértelmezésben aktiválva van.