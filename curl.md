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