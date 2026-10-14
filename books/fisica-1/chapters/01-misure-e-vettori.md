---
chapter: 1
title: Misure e vettori
---

## p1 | Introduzione

Misurare significa confrontare una grandezza con un’unità e dichiarare quanto è affidabile il risultato. In fisica, una misura senza unità o senza incertezza è incompleta: saperla scrivere e interpretare permette di confrontare dati, valutare esperimenti e scegliere formule coerenti. I vettori, a loro volta, descrivono quantità per cui conta anche la direzione, come lo spostamento e la velocità. Imparare a scomporli e a combinarli rende più chiara la descrizione dei fenomeni nello spazio.

Non sono richieste conoscenze preliminari specifiche. È utile avere familiarità con le operazioni aritmetiche e con le idee di modulo e direzione; i concetti necessari saranno introdotti nel capitolo.

Al termine saprai esprimere una misura con il valore medio, la sua incertezza e le unità del Sistema Internazionale, distinguendo gli effetti degli errori sistematici e casuali e usando strumenti statistici per stimare la dispersione dei dati. Saprai inoltre controllare le formule con l’analisi dimensionale. Per i vettori, saprai usare i versori degli assi, ricavare e combinare le componenti cartesiane e calcolare i prodotti scalare e vettoriale, interpretandone il significato geometrico. Saprai anche riconoscere come cambia un versore quando ruota, una base utile per affrontare lo studio del moto circolare e del corpo rigido.

## p2 | Metodo sperimentale e misure

### Grandezze fisiche e incertezza di misura

La fisica è una scienza basata sul **metodo sperimentale**, messo a punto da Galileo, che si articola in quattro fasi: osservazione e raccolta dei dati, formulazione delle ipotesi, verifica sperimentale (ed eventuale modifica delle ipotesi), e infine formulazione di leggi matematiche.

**Definizione 1.1** (Grandezza fisica). Una grandezza fisica è una proprietà o caratteristica di un fenomeno o di un corpo che può essere misurata quantitativamente ed è definita se è stato indicato il modo operativo per misurarla e se la misura è riproducibile. Le grandezze fisiche si dividono in grandezze scalari, per cui basta il valore numerico della misura, e grandezze vettoriali, per le quali occorre specificare modulo, direzione e verso. Due grandezze si dicono omogenee se hanno la stessa dimensione; il Sistema Internazionale fissa sette grandezze fondamentali (tempo in secondi, lunghezza in metri, massa in chilogrammi, intensità di corrente in ampere, temperatura in kelvin, quantità di materia in mole, intensità luminosa in candele) da cui derivano tutte le altre.

Una misura si può ottenere in modo diretto, confrontando la grandezza con un campione omogeneo, oppure in modo indiretto, tramite un'espressione matematica che la lega ad altre grandezze misurate direttamente. In ogni caso il risultato va sempre accompagnato dalla sua incertezza, perché una misura senza incertezza non fornisce alcuna informazione sulla sua affidabilità

$$X = \bar{x} \pm \sigma_x \ \ \lbrack X\rbrack $$

cioè grandezza uguale a valore numerico più o meno incertezza, nell'unità di misura appropriata.

### Errori sistematici ed errori casuali

L'incertezza di una misura può dipendere da più fattori. Si distinguono in particolare l'accuratezza, che dipende dall'operatore, l'errore strumentale, legato alla sensibilità dello strumento, l'**errore sistematico**, che dipende dal metodo sperimentale e si manifesta sempre nella stessa direzione (per esempio uno strumento sempre tarato in difetto), e l'**errore accidentale** (o casuale), che si verifica in entrambe le direzioni e può essere ridotto solo mediante l'analisi statistica di più misure ripetute.

Per una misura diretta ripetuta $n$ volte, il valore riportato è la media aritmetica delle misure. Si possono riportare separatamente l'errore strumentale e quello sistematico, come nell'espressione seguente.

$$X = \bar{x} \pm \varepsilon_m \pm \varepsilon_{sist} \ \ \lbrack X\rbrack $$

dove $\varepsilon_m$ è l'errore strumentale e $\varepsilon_{sist}$ è l'errore sistematico. Se si desidera esprimere un'unica incertezza complessiva, si può porre $\varepsilon_{tot} = \varepsilon_m + \varepsilon_{sist}$ e scrivere $X = \bar{x} \pm \varepsilon_{tot} \ \ \lbrack X\rbrack $. Se la differenza tra il valore massimo e il valore minimo delle misure supera l'errore strumentale, è necessario aumentare il numero di misure e trattare l'incertezza con gli strumenti della statistica.

### Valore medio, errore standard e semidispersione massima

Data una serie di $n$ misure dirette $x_1, \dots, x_n$ della stessa grandezza, il **valore medio** è

$$\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$$

Una stima grossolana dell'incertezza dovuta agli errori casuali è la **semidispersione massima**

:::formula{id="1.1" label="Semidispersione massima"}
$$\delta_x = \frac{x_{max} - x_{min}}{2}$$
:::

che fornisce un limite superiore immediato, ma poco raffinato, dell'incertezza.

Una stima più accurata si ottiene tramite la **devianza**

$$D_x = \sum_{i=1}^{n} (x_i - \bar{x})^2$$

e la **varianza**, che misura la dispersione delle misure intorno al valore medio. Quando la media è stimata dal campione, come in questo caso, si usa la varianza empirica con denominatore $n-1$, indipendentemente dalla numerosità del campione. La formula con denominatore $n$ si applica invece se la media vera è nota a priori.

$$\sigma^2 = \frac{1}{n}\sum_{i=1}^{n} (x_i - \mu)^2$$

dove $\mu$ è la media vera nota a priori. Per $n$ grande la differenza numerica tra questa formula e quella con denominatore $n-1$ è trascurabile, ma quando si stima la media dal campione resta corretta la varianza empirica.

:::formula{id="1.2" label="Varianza empirica"}
$$s_x^2 = \frac{1}{n-1}\sum_{i=1}^{n} (x_i - \bar{x})^2$$
:::

L'**errore standard** (o deviazione standard, o scarto tipo) è la radice quadrata della varianza

:::formula{id="1.3" label="Errore standard empirico"}
$$s_x = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n} (x_i - \bar{x})^2}$$
:::

**Esempio 1.1.** Si considerino cinque misure della lunghezza di un'asta: $x_1=12{,}1$ cm, $x_2=12{,}3$ cm, $x_3=11{,}9$ cm, $x_4=12{,}2$ cm, $x_5=12{,}0$ cm.

Il valore medio è $\bar{x} = (12{,}1+12{,}3+11{,}9+12{,}2+12{,}0)/5 = 12{,}1$ cm.

La semidispersione massima è $\delta_x = (12{,}3-11{,}9)/2 = 0{,}2$ cm.

La somma dei quadrati degli scarti dalla media è $\sum_{i=1}^{5}(x_i-\bar{x})^2 = 0{,}10\ \text{cm}^2$, da cui l'errore standard empirico $s_x = \sqrt{0{,}10/4} \approx 0{,}16$ cm.

Il risultato si scrive quindi $X = (12{,}10 \pm 0{,}16)$ cm usando l'errore standard, oppure $X = (12{,}1 \pm 0{,}2)$ cm usando la semidispersione massima come stima grossolana.

Per misure indirette, cioè funzioni $f(x,y,z,\dots)$ di più grandezze misurate direttamente, l'errore si propaga tramite le derivate parziali

$$\sigma_f = \sqrt{\left(\frac{\partial f}{\partial x}\right)^2 \sigma_x^2 + \left(\frac{\partial f}{\partial y}\right)^2 \sigma_y^2 + \cdots}$$

calcolate rispetto a una variabile alla volta, tenendo costanti le altre, supponendo che le misure dirette $x, y, z, \dots$ siano statisticamente indipendenti tra loro.

L'errore standard esprime la bontà media della singola misura e il limite di confidenza associato: si dimostra che il 68,3% dei risultati cade entro $\sigma$ dal valore vero, il 95,4% entro $2\sigma$ e il 99,7% entro $3\sigma$. Un **errore relativo** utile per giudicare la qualità della misura è

$$\varepsilon_r = \frac{\sigma_x}{|\bar{x}|}, \qquad \varepsilon_{r\%} = \frac{\sigma_x}{|\bar{x}|} \times 100$$

Quando gli errori casuali sono molti e indipendenti e gli errori sistematici sono trascurabili, vale il seguente risultato.

**Teorema 1.1** (del limite centrale). Se una misura è soggetta a molte sorgenti di errori casuali indipendenti tra loro e a errori sistematici trascurabili, la distribuzione dei valori misurati è approssimata, al crescere del numero di misure, da una curva a campana simmetrica e centrata sul valore medio, detta distribuzione normale o di Gauss

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\exp\left\lbrack -\frac{(x-x_0)^2}{2\sigma^2}\right\rbrack $$

dove $\sigma$ rappresenta la deviazione standard: distribuzioni più strette corrispondono a esperimenti più precisi.

### Controllo dimensionale di una formula

Ogni grandezza fisica è composta da un valore numerico e da un'unità di misura; scrivere un risultato intermedio o finale senza unità di misura è un errore, perché un risultato dimensionalmente sbagliato è una scrittura priva di significato, molto più grave di un errore numerico. Per questo conviene svolgere i calcoli in forma simbolica e sostituire i valori numerici con le rispettive unità solo alla fine, effettuando le semplificazioni sia sui numeri sia sulle unità. In ogni uguaglianza, anche intermedia, il membro sinistro deve avere le stesse dimensioni del membro destro: non ha senso, per esempio, eguagliare un vettore a uno scalare o un numero puro a una grandezza dimensionata.

L'**analisi dimensionale** è una condizione necessaria ma non sufficiente per la correttezza di un'espressione, e serve in particolare a scegliere tra formule alternative o a determinare l'unità di misura di una costante incognita.

**Esempio 1.2.** Si vuole calcolare l'accelerazione di gravità a una quota $H = 120$ km sopra la superficie di Marte, di massa $M = 0,64\cdot 10^{24}$ kg e raggio $R = 3,37\cdot 10^{6}$ m, non ricordando se la formula corretta sia $a = GM/r^2$ oppure $a = GM/r$, con $G = 6,67\cdot 10^{-11} \text{ m}^3/(\text{kg}\,\text{s}^2)$.

- Dati: $M = 0{,}64\cdot 10^{24}$ kg, $r = R+H = 3{,}37\cdot 10^{6}\,\text{m} + 1{,}20\cdot 10^{5}\,\text{m} = 3{,}49\cdot 10^{6}$ m, $G = 6{,}67\cdot 10^{-11}\,\text{m}^3/(\text{kg}\,\text{s}^2)$.

- Controllo dimensionale della prima formula

$$\lbrack a\rbrack  = \lbrack G\rbrack \frac{\lbrack M\rbrack }{\lbrack r\rbrack ^2} = \frac{\text{m}^3}{\text{kg}\,\text{s}^2}\cdot\frac{\text{kg}}{\text{m}^2} = \frac{\text{m}}{\text{s}^2}$$

compatibile con un'accelerazione.

- Controllo della seconda formula

$$\lbrack a\rbrack  = \lbrack G\rbrack \frac{\lbrack M\rbrack }{\lbrack r\rbrack } = \frac{\text{m}^3}{\text{kg}\,\text{s}^2}\cdot\frac{\text{kg}}{\text{m}} = \frac{\text{m}^2}{\text{s}^2}$$

che non è un'accelerazione.

- Conclusione: poiché un'accelerazione deve avere dimensione $\text{m/s}^2$, la formula corretta è $a = GM/r^2$.

- Numeri: sostituendo i valori si ottiene

$$a = \frac{GM}{r^2} = \frac{6{,}67\cdot 10^{-11}\cdot 0{,}64\cdot 10^{24}}{(3{,}49\cdot 10^{6})^2} \approx 3{,}5\ \text{m/s}^2$$

- Controllo: l'ordine di grandezza è ragionevole, essendo inferiore all'accelerazione di gravità terrestre, come ci si attende per un pianeta più piccolo della Terra.

Lo stesso ragionamento permette di dedurre le unità di misura di costanti incognite in una legge oraria. Se $x(t) = v_0 t + \alpha t^2 + \beta t^3$, con $\lbrack x\rbrack =\text{m}$ e $\lbrack t\rbrack =\text{s}$, ogni addendo deve avere dimensione di una lunghezza, da cui $\lbrack \alpha\rbrack  = \text{m/s}^2$ e

$$\lbrack \beta\rbrack  = \frac{\text{m}}{\text{s}^3}$$

**Errore tipico 1.1.** Scrivere $F_x = mg\sin\theta = 5\cdot 9{,}81\cdot \frac{1}{2} = 24{,}5$ N è sbagliato, perché nel passaggio intermedio compare un'uguaglianza tra un numero puro e una forza: ogni uguaglianza, anche intermedia, deve avere senso dimensionale, non solo il primo e l'ultimo membro. La forma corretta riporta sempre le unità in ogni passaggio

$$F_x = mg\sin\theta = 5\ \text{kg}\cdot 9{,}81\ \text{m/s}^2\cdot \tfrac{1}{2} = 24{,}5\ \text{kg}\cdot\text{m/s}^2 = 24{,}5\ \text{N}$$

. Allo stesso modo, calcolare un'altezza di caduta come $H = \tfrac{1}{2}\cdot 9{,}81\cdot 2^2 = 19{,}6$, senza unità, produce una scrittura priva di significato anche se il valore numerico finale è corretto; un errore ancora diverso, come confondere $t = \Delta x / v = 100/55 = 1{,}8$ s, con $\Delta x = 100$ m e $v = 55$ km/h, senza convertire $v$ in metri al secondo, è sbagliato sia numericamente, perché il valore corretto, convertendo $v \approx 15{,}3$ m/s, è $t = 100/15{,}3 \approx 6{,}5$ s, sia dimensionalmente, perché compare un'uguaglianza tra un numero puro e una quantità dimensionata. Infine, un controllo dimensionale rapido permette di scartare risultati come $a = gM(\sin\theta_2-\sin\theta_1)/(m+2)$, dove al denominatore compare la somma priva di senso tra una massa e un numero puro, e tra due possibili formule cinematiche per l'accelerazione permette di individuare quale sia dimensionalmente corretta controllando che il tempo e l'accelerazione ottenuti abbiano rispettivamente le dimensioni di s e di $\text{m/s}^2$. Una buona abitudine finale, oltre al controllo dimensionale, è verificare che l'ordine di grandezza del risultato sia fisicamente ragionevole.

## p3 | Vettori e versori

I vettori sono lo strumento matematico con cui la fisica descrive le grandezze che, per essere definite completamente, richiedono non solo un valore numerico ma anche una direzione e un verso, come già osservato a proposito delle grandezze vettoriali in [testo](ref:chapter/1#p2). Un vettore è la rappresentazione matematica di una grandezza vettoriale e può essere pensato come un segmento orientato che, applicato a un'origine, individua la posizione di un punto $P$ nello spazio oppure descrive direttamente la grandezza fisica in esame (una forza, una velocità, un campo).

### Componenti e versori

**Definizione 1.2** (versore). Un versore è un vettore di modulo unitario, diretto lungo un asse di cui individua il verso positivo. Nel sistema di riferimento cartesiano $Oxyz$ si indicano con $\hat{u}_x, \hat{u}_y, \hat{u}_z$ i versori degli assi $x, y, z$.

Ogni vettore $\vec{a}$ si può scrivere come combinazione lineare dei versori degli assi, con coefficienti dati dalle sue componenti cartesiane $a_x, a_y, a_z$:

:::formula{id="1.4" label="Vettore in componenti cartesiane"}
$$\vec{a} = a_x \hat{u}_x + a_y \hat{u}_y + a_z \hat{u}_z$$
:::

Questa scrittura è la base di tutto il calcolo vettoriale: ogni operazione tra vettori (somma, prodotto per uno scalare, prodotto scalare, prodotto vettoriale) si traduce in un'operazione sulle rispettive componenti.

Il modulo del vettore si ricava dal teorema di Pitagora generalizzato alle tre dimensioni

:::formula{id="1.5" label="Modulo di un vettore"}
$$|\vec{a}| = \sqrt{a_x^2 + a_y^2 + a_z^2}$$
:::

mentre la direzione si ottiene dagli angoli che il vettore forma con gli assi. Nel piano, se $\theta$ è l'angolo formato da $\vec{a}$ con l'asse $x$, valgono le relazioni

$$a_x = |\vec{a}| \cos\theta, \qquad a_y = |\vec{a}| \sin\theta, \qquad \tan\theta = \frac{a_y}{a_x}.$$

In tre dimensioni, indicando con $\theta$ l'angolo tra $\vec{a}$ e l'asse $z$ e con $\varphi$ l'angolo di proiezione sul piano $xy$ (coordinate sferiche), si ha

$$a_x = a \sin\theta \cos\varphi, \qquad a_y = a \sin\theta \sin\varphi, \qquad a_z = a \cos\theta.$$

La somma e la differenza di due vettori si eseguono sommando o sottraendo le componenti omologhe; geometricamente la somma corrisponde alla diagonale del parallelogramma costruito su $\vec{a}$ e $\vec{b}$, la differenza all'altra diagonale:

:::formula{id="1.6" label="Somma e differenza di vettori"}
$$\vec{c} = \vec{a} \pm \vec{b} = (a_x \pm b_x)\hat{u}_x + (a_y \pm b_y)\hat{u}_y + (a_z \pm b_z)\hat{u}_z$$
:::

Il prodotto di uno scalare $k$ per un vettore $\vec{a}$ è il vettore $k\vec{a}$, che ha la stessa direzione di $\vec{a}$, modulo $|k|\,|\vec{a}|$ e verso uguale a quello di $\vec{a}$ se $k>0$, opposto se $k<0$; in componenti si moltiplica ciascuna componente per $k$:

$$k\vec{a} = k a_x \hat{u}_x + k a_y \hat{u}_y + k a_z \hat{u}_z.$$

**Errore tipico 1.2** (confondere un vettore scomposto con uno scalato). Un errore molto frequente, tipico della scomposizione della forza peso $\vec{P} = m\vec{g}$ lungo un piano inclinato di angolo $\theta$, consiste nello scrivere le componenti come $m\vec{g}\sin\theta$ e $m\vec{g}\cos\theta$. Questa scrittura è priva di significato come vettori componenti: $m\vec{g}\sin\theta$ ha la stessa direzione di $\vec{g}$ (verticale verso il basso) e modulo $|mg\sin\theta|$, non la direzione del piano. La scomposizione corretta richiede di definire prima i versori $\hat{u}_x$ e $\hat{u}_y$ paralleli e perpendicolari al piano, e di scrivere $\vec{P} = \vec{P}_x + \vec{P}_y$ con $\vec{P}_x = P_x \hat{u}_x$ e $\vec{P}_y = P_y \hat{u}_y$, dove $P_x = mg\sin\theta$ e $P_y = -mg\cos\theta$ sono numeri (le componenti), non vettori. In generale $mg\sin\theta\,\hat{u}_x \neq m\vec{g}\sin\theta$: pur avendo lo stesso modulo, sono vettori con direzioni completamente diverse, e confonderli rivela una lacuna sulla definizione stessa di vettore.

**Esempio 1.3.** Un vettore $\vec{a}$ ha componenti $a_x = 3,0$ m e $a_y = 4,0$ m nel piano $xy$. Si vogliono modulo e direzione.

Dati: $a_x = 3,0$ m, $a_y = 4,0$ m.

Soluzione letterale: $|\vec{a}| = \sqrt{a_x^2 + a_y^2}$, $\theta = \arctan(a_y/a_x)$.

Numeri: $|\vec{a}| = \sqrt{(3,0\ \text{m})^2 + (4,0\ \text{m})^2} = \sqrt{9,0 + 16} \ \text{m} = 5,0$ m; $\theta = \arctan(4,0/3,0) \approx 53°$ rispetto all'asse $x$.

Controllo dimensionale: $a_x, a_y$ e $|\vec{a}|$ sono tutte lunghezze in metri, coerentemente con {{formula:1.5}}; l'angolo è adimensionale, come deve essere l'argomento dell'arcotangente.

### Prodotto scalare e prodotto vettoriale

**Definizione 1.3** (prodotto scalare). Dati due vettori $\vec{A}$ e $\vec{B}$ che formano un angolo $\theta$, il loro prodotto scalare è lo scalare

:::formula{id="1.7" label="Prodotto scalare"}
$$\vec{A} \cdot \vec{B} = |\vec{A}|\,|\vec{B}| \cos\theta$$
:::

Geometricamente, $|\vec{A}| \cos\theta$ è la proiezione di $\vec{A}$ sulla direzione di $\vec{B}$: il prodotto scalare misura quindi quanto due vettori sono "allineati". Il prodotto scalare è commutativo; se $\vec{A} \cdot \vec{B} = 0$ allora $\vec{A}$ e $\vec{B}$ sono perpendicolari oppure uno dei due è il vettore nullo; infine $\vec{A} \cdot \vec{A} = |\vec{A}|^2$.

In componenti cartesiane il prodotto scalare si calcola come somma dei prodotti delle componenti omonime

:::formula{id="1.8" label="Prodotto scalare in componenti"}
$$\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z$$
:::

**Definizione 1.4** (prodotto vettoriale). Dati due vettori $\vec{A}$ e $\vec{B}$ che formano un angolo $\theta$, il loro prodotto vettoriale è il vettore $\vec{C} = \vec{A} \times \vec{B}$ ortogonale al piano individuato da $\vec{A}$ e $\vec{B}$, con verso dato dalla regola della mano destra e modulo

:::formula{id="1.9" label="Modulo del prodotto vettoriale"}
$$|\vec{A} \times \vec{B}| = |\vec{A}|\,|\vec{B}| \sin\theta$$
:::

Geometricamente, $|\vec{A} \times \vec{B}|$ è l'area del parallelogramma costruito su $\vec{A}$ e $\vec{B}$. Il prodotto vettoriale non è commutativo: $\vec{A} \times \vec{B} = -\vec{B} \times \vec{A}$; se $\vec{A} \times \vec{B} = \vec{0}$ allora $\vec{A}$ e $\vec{B}$ sono paralleli (o uno è il vettore nullo).

Il calcolo in componenti si effettua con il determinante simbolico

:::formula{id="1.10" label="Prodotto vettoriale come determinante"}
$$\vec{A} \times \vec{B} = \begin{vmatrix} \hat{u}_x & \hat{u}_y & \hat{u}_z \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix}$$
:::

**Errore tipico 1.3** (scritture prive di significato per un prodotto vettoriale). Nel calcolare il momento di una forza $\vec{M} = \vec{R} \times \vec{f}$ rispetto a un polo, sono scorrette scritture come $\vec{M} = \vec{f}R$ (il prodotto vettoriale non è "una freccia più lunga" sopra un prodotto ordinario), $\vec{M} = R \times f$ (il simbolo $\times$ si usa solo tra due vettori, non tra scalari) oppure $\vec{M} = R\vec{f}$ (questa scrittura darebbe a $\vec{M}$ la stessa direzione di $\vec{f}$, mentre il prodotto vettoriale è per definizione ortogonale a entrambi i fattori). La forma corretta è sempre $\vec{M} = \vec{R} \times \vec{f}$, un vettore perpendicolare al piano di $\vec{R}$ e $\vec{f}$.

### Derivata di un vettore

Quando un vettore $\vec{a}(t)$ dipende dal tempo, la sua derivata si definisce componente per componente, poiché i versori fissi $\hat{u}_x, \hat{u}_y, \hat{u}_z$ non dipendono da $t$:

$$\frac{d\vec{a}}{dt} = \frac{da_x}{dt}\hat{u}_x + \frac{da_y}{dt}\hat{u}_y + \frac{da_z}{dt}\hat{u}_z.$$

Il caso interessante, e tipico della cinematica, è quello di un versore $\hat{n}(t)$ che ruota nel tempo, mantenendo modulo costante ma cambiando direzione: ad esempio il versore radiale di un moto curvilineo o il versore di un asse solidale a un corpo rigido. Poiché $\hat{n} \cdot \hat{n} = 1$ per ogni $t$, derivando si ottiene

:::formula{id="1.11" label="Ortogonalità della derivata di un versore"}
$$0 = \frac{d(\hat{n}\cdot\hat{n})}{dt} = 2\,\hat{n}\cdot\frac{d\hat{n}}{dt} \quad \Longrightarrow \quad \hat{n} \perp \frac{d\hat{n}}{dt}$$
:::

Questo risultato è generale: **la derivata di un versore è sempre perpendicolare al versore stesso**, un fatto che vale per qualunque vettore a modulo costante, non solo per gli assi cartesiani.

Un esempio concreto è il versore rotante nel piano, parametrizzato da un angolo $\theta(t)$ variabile:

$$\hat{\lambda}(t) = \cos\theta(t)\,\hat{u}_x + \sin\theta(t)\,\hat{u}_y, \qquad \hat{\mu}(t) = -\sin\theta(t)\,\hat{u}_x + \cos\theta(t)\,\hat{u}_y,$$

dove $\hat{\mu}$ è il versore ottenuto ruotando $\hat{\lambda}$ di $90°$ in senso antiorario.

:::image{src="assets/48612b66-versore-rotante.svg" alt="Versore che ruota su una circonferenza unitaria, con le componenti lungo gli assi x e y" caption="Fig. 1.1 — Il versore lambda(t) percorre la circonferenza unitaria; le sue componenti cartesiane sono coseno e seno dell'angolo theta(t)."}
:::

Derivando rispetto al tempo con la regola di derivazione delle funzioni composte, e indicando con il punto la derivata temporale ($\dot\theta = d\theta/dt$), si trova

:::formula{id="1.12" label="Derivata di versori rotanti nel piano"}
$$\dot{\hat{\lambda}}(t) = \dot\theta(t)\,\hat{\mu}(t), \qquad \dot{\hat{\mu}}(t) = -\dot\theta(t)\,\hat{\lambda}(t)$$
:::

Si osservi che, come previsto, $\hat{\lambda} \cdot \dot{\hat{\lambda}} = \dot\theta\,(\hat{\lambda}\cdot\hat{\mu}) = 0$, poiché $\hat{\lambda}$ e $\hat{\mu}$ sono sempre ortogonali tra loro: la derivata del versore è ruotata di $90°$ rispetto al versore stesso e il suo modulo è $|\dot\theta|$, cioè la rapidità con cui l'angolo varia. Questo schema è alla base dello studio del [moto circolare](ref:chapter/2#p6) e del [moto nel piano](ref:chapter/2#p5).

Lo stesso risultato si generalizza a un versore solidale a un corpo rigido che ruota nello spazio tridimensionale con velocità angolare $\vec\omega$. Le **formule di Poisson** permettono di ricavare la derivata temporale di un vettore a modulo costante e solidale al corpo in rotazione, scomponendo la derivata lungo gli altri due versori della terna mobile e sfruttando il fatto che la derivata di un versore è ortogonale a se stesso.

Definendo le componenti della velocità angolare come

$$\omega_x = \frac{d\hat{u}_y}{dt}\cdot\hat{u}_z, \qquad \omega_y = \frac{d\hat{u}_z}{dt}\cdot\hat{u}_x, \qquad \omega_z = \frac{d\hat{u}_x}{dt}\cdot\hat{u}_y,$$

si dimostra che le derivate dei versori della terna mobile si scrivono come prodotto vettoriale con $\vec\omega = \omega_x \hat{u}_x + \omega_y \hat{u}_y + \omega_z \hat{u}_z$:

:::formula{id="1.13" label="Formule di Poisson"}
$$\frac{d\hat{u}_x}{dt} = \vec{\omega} \times \hat{u}_x, \qquad \frac{d\hat{u}_y}{dt} = \vec{\omega} \times \hat{u}_y, \qquad \frac{d\hat{u}_z}{dt} = \vec{\omega} \times \hat{u}_z$$
:::

Queste relazioni saranno riprese e sfruttate ampiamente nello studio del [corpo rigido e dei suoi moti](ref:chapter/8#p2) e nello studio delle [velocità e accelerazioni relative](ref:chapter/6#p2) tra riferimenti in rotazione.

**Errore tipico 1.4** (coerenza dimensionale nelle uguaglianze vettoriali). In qualunque uguaglianza il membro sinistro deve essere dello stesso tipo del membro destro: non ha senso scrivere un'equazione in cui un vettore è eguagliato a uno scalare, né mescolare in modo incoerente le unità di misura delle grandezze coinvolte, come già discusso nel [metodo sperimentale e misure](ref:chapter/1#p2) a proposito del controllo dimensionale delle formule.
