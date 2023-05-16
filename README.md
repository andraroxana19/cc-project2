Introducere

Aplicația „Pizza Menu App” pune la dispozitie clientilor unui restaurant de pizza meniul disponibil si posibilitatea de a comanda una chiar la ei acasa, totodata de a si vizualiza comenzile sale.
Informațiile furnizate in aplicație se preiau din cadrul unei baze de date remote care functioneaza  in cloud, MONGODB.
Pentru realizarea Backend-ului am folosit NextJS cu ajutorul unui server express împreuna cu un API cu care sunt realizate operațiile CRUD pe aceasta  baza de date, iar front-end-ul este realizat in React.
Aplicatia finala a fost publicata cu ajutorul unei platforme in cloud, VERCEL.
Descriere tehnologii cloud folosite

MONGODB API: 
Baza de date este salvată în cloud și pentru aceasta am ales MONGODB. 
Cu ajutorul ei clienții pot adăuga pizza în comanda lor într-o colecție pe care o putem accesa ulterior pentru a obține detaliile comenzilor. Este facilitata, de asemenea ștergerea unei comenzi din baza de date în cazul în care clienților dorește asta.
Aceleași posibilități sunt furnizate și pentru vizualizarea meniului disponibil la restaurant.
Pentru a realiza aceste operatii CRUD pe baza de date am scris 2 routere, fiecare cu cate 4 metode: 1 de tip GET, 1 de tip POST, 1 de tip PUT si 1 de tip DELETE.

Records.js:					      Orders.js:						
Metodele HTTP din API-ul pentru comunicarea cu baza de date
Pentru Meniul disponibil al restaurantului:
Metoda Get Menu nu primeste niciun parametru sau body si intoarce meniul de pizza 
salvat in baza de date.
Metoda Add a pizza in the Menu primeste prin intermediul body-ului 3 informatii: nume, marime si link-ul catre o imagine reprezentativa, iar pe baza acestora creaza un nou document pe care il adauga in colectia din baza de date.
Metoda Update Pizza  primeste ca parametrul id-ul unui element din meniu care va fi modificat in colectia din baza de date.
Metoda Delete Pizza  primeste ca parametrul id-ul unui element din meniu care va fi sters din colectia din baza de date.

Pentru comenzile clientului:
Metoda Get Orders nu primeste niciun parametru sau body si intoarce comenzile
salvate in baza de date.
Metoda Add Order primeste prin intermediul body-ului 4 informatii: nume, marime, cantitatea dorita si informatiile de contact ale clientului, iar pe baza acestora creaza un nou document pe care il adauga in colectia din baza de date.
Metoda Update Order primeste ca parametrul id-ul unui element din comanda care va fi modificat în colecția din baza de date.
Metoda Delete Order primeste ca parametrul id-ul unei comenzi care va fi ștearsă din colecția din baza de date.



Autentificare și autorizare servicii utilizate
Conexiunea si utilizarea bazei de date in cloud MongoDB are nevoie de o cheie unica generata (NEXT_ATLAS_URI) la crearea bazei de date in MongoDb Atlas ce este alcatuita din username si parola furnizata care este ascunsa in imaginea de mai jos, dar necesita totodata si numele bazei de date (NEXT_ATLAS_DATABASE). Aceste informatii sunt salvate in folderul .env din cadrul front-end-ului.

Colectiile orders si records din baza de date CloudComputing:


Capturi ecran aplicație
Pagina initiala








Vizualizarea meniului




Plasarea unei comenzi


Vizualizarea comenzilor



Referinte

Link-ul public catre aplicatie: https://cc-pizza-5prlmic23-andraroxana19.vercel.app
Link demo aplicatie YouTube: https://youtu.be/WEgF2woFtRo

