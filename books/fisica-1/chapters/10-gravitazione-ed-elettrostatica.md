---
chapter: 10
title: Gravitazione ed elettrostatica
---

## p1 | Introduzione

La gravitazione e l’elettrostatica descrivono due interazioni fondamentali e offrono un terreno comune per capire come le forze a distanza dipendano dalle sorgenti e dalla geometria. Studiare questi modelli aiuta a passare dal calcolo della forza alla descrizione tramite campo e potenziale, strumenti utili per affrontare problemi che vanno dai satelliti alle distribuzioni di carica.

Per seguire il capitolo servono le idee di momento angolare e di lavoro ed energia. La prima permette di interpretare il moto orbitale e le leggi di Keplero; la seconda consente di ricavare velocità orbitali e di fuga e di collegare il lavoro del campo alla variazione di energia potenziale.

Al termine saprai applicare la legge di gravitazione universale e le leggi di Keplero, distinguendo massa inerziale e massa gravitazionale. Saprai calcolare e sommare vettorialmente i campi generati da masse e cariche, usare il potenziale per descrivere il lavoro e ricavare il campo dalla sua variazione spaziale. Imparerai inoltre a interpretare l’angolo solido e ad applicare il teorema di Gauss nei casi di simmetria, confrontando il campo all’interno e all’esterno di gusci e sfere.

## p2 | Gravitazione e leggi di Keplero

La gravitazione è la prima delle interazioni fondamentali che lo studio della meccanica permette di trattare in modo quantitativo completo: una singola legge di forza, applicata ai principi della dinamica già visti in [Principi della dinamica](ref:chapter/3#p2), rende conto sia della caduta dei gravi sia del moto dei pianeti. Storicamente il percorso fu inverso: prima Keplero descrisse cinematicamente le orbite osservate, poi Newton ne dedusse la legge di forza.

### Le leggi di Keplero

Sulla base delle osservazioni astronomiche di Tycho Brahe, Johannes Kepler formulò tra il 1600 e il 1620 tre leggi empiriche sul moto dei pianeti attorno al Sole.

**Prima legge di Keplero.** I pianeti percorrono attorno al Sole orbite piane ed ellittiche, aventi il Sole in uno dei due fuochi.

**Seconda legge di Keplero.** Il raggio vettore che congiunge il Sole a un pianeta descrive aree proporzionali ai tempi impiegati a descriverle, cioè la velocità areolare è costante,

$$
\frac{dA}{dt} = \text{costante} .
$$

Questa legge è una conseguenza del fatto che la forza gravitazionale è centrale: essendo $\vec{F} = F(r)\hat{u}_r$ sempre diretta lungo la congiungente col centro di forza, il momento di $\vec{F}$ rispetto al Sole è nullo e dunque il momento angolare $\vec{L}$ si conserva; la costanza di $\vec{L}$ equivale, come già mostrato in [Forze centrali](ref:chapter/5#p4), alla costanza della velocità areolare.

**Terza legge di Keplero.** Il quadrato del periodo di rivoluzione $T$ di ogni pianeta è proporzionale al cubo del semiasse maggiore $r$ della sua orbita ellittica,

$$

T^2 = k r^3 ,
$$

dove la costante $k$ non dipende dal pianeta considerato ma solo dal corpo centrale (il Sole), nell'approssimazione in cui quest'ultimo resta fermo, ossia quando la massa $m$ del pianeta è trascurabile rispetto alla massa $M$ del Sole, $m \ll M$. Nel problema a due corpi, in cui anche il corpo centrale si muove attorno al centro di massa comune, il periodo di rivoluzione dipende dalla somma $M+m$, come si vedrà più avanti.

Le tre leggi di Keplero forniscono una descrizione puramente cinematica del moto planetario; non spiegano quale forza lo produca. Questa spiegazione dinamica fu fornita da Newton con la legge di gravitazione universale.

### La legge di gravitazione universale

**Definizione 10.1** (forza gravitazionale). Date due masse puntiformi, di dimensioni trascurabili rispetto alla loro distanza mutua, tra esse agisce una forza attrattiva diretta lungo la retta congiungente le due masse, il cui modulo è direttamente proporzionale al prodotto delle masse e inversamente proporzionale al quadrato della distanza.

In forma vettoriale, indicando con $\hat{u}_{12}$ il versore che va dalla massa $m_1$ alla massa $m_2$ e con $r_{12}$ la loro distanza,

:::formula{id="10.1" label="Legge di gravitazione universale"}
$$\vec{F}_{12} = -G\,\frac{m_1 m_2}{r_{12}^2}\,\hat{u}_{12}$$
:::

dove $G = 6{,}67\cdot 10^{-11}\ \mathrm{N\cdot m^2/kg^2}$ è la costante di gravitazione universale. Per il terzo principio della dinamica, $\vec{F}_{21} = -\vec{F}_{12}$.

Il fatto stesso che questa forza sia centrale (diretta lungo la congiungente, con modulo funzione della sola distanza) basta a garantire la seconda legge di Keplero, come osservato sopra.

### Massa inerziale e massa gravitazionale

Nella legge di gravitazione universale la massa di un corpo misura la sua capacità di generare ed essere soggetto a un'attrazione gravitazionale; questa proprietà è, a priori, concettualmente distinta dalla massa che compare nella seconda legge della dinamica $\vec{F} = m\vec{a}$, dove la massa misura la resistenza del corpo a essere accelerato, cioè la sua inerzia.

Si introducono quindi due grandezze in linea di principio diverse:

- la **massa inerziale** $m_I$, che compare in $\vec{F} = m_I\vec{a}$ ed esprime l'inerzia del corpo;
- la **massa gravitazionale** $m_G$, che compare nella legge di gravitazione universale ed esprime la capacità di attrarre e di essere attratto gravitazionalmente.

Sulla superficie terrestre, l'accelerazione di gravità di un corpo si scrive uguagliando la forza peso (seconda legge della dinamica, con massa inerziale) alla forza gravitazionale esercitata dalla Terra (con massa gravitazionale),

$$
m_I g = G\,\frac{m_G M_{T}}{R_T^2} \ \Longrightarrow\ g = G\,\frac{M_T}{R_T^2}\,\frac{m_G}{m_I} .
$$

Numerosi esperimenti, a partire dalla metà del XIX secolo, hanno verificato che $g$ non dipende dal corpo in caduta, cioè che il rapporto $m_G/m_I$ è una costante universale; esperimenti successivi (a partire da quelli di Eötvös) hanno confermato che questo rapporto vale $1$ con una precisione dell'ordine di $10^{-12}$.

Si può quindi scegliere una normalizzazione delle masse e della costante $G$ in cui $m_G=m_I=m$. Questa identificazione, oggi nota come **principio di equivalenza**, riflette un risultato sperimentale e non è una conseguenza logica della legge di gravitazione; con questa normalizzazione, tutti i corpi cadono con la stessa accelerazione in un dato campo gravitazionale.

### Terza legge di Keplero per orbite circolari

Per un'orbita circolare di raggio $r$, l'accelerazione del corpo orbitante è puramente centripeta, $\vec{a} = -\dfrac{v^2}{r}\hat{u}_r$. Applicando la seconda legge della dinamica alla forza gravitazionale esercitata da un corpo centrale di massa $M$ su un corpo di massa $m$,

$$
-G\frac{Mm}{r^2}\hat{u}_r = -m\frac{v^2}{r}\hat{u}_r \ \Longrightarrow\ G\frac{M}{r} = v^2 .
$$

Nel moto circolare uniforme vale $v = \omega r = \dfrac{2\pi r}{T}$ (già visto in [Moto circolare](ref:chapter/2#p6)); sostituendo si ottiene

:::formula{id="10.2" label="Velocità orbitale su un'orbita circolare"}
$$v = \sqrt{\frac{GM}{r}}$$
:::

e, elevando al quadrato la relazione $v=2\pi r/T$,

$$
G\frac{M}{r} = (2\pi)^2\frac{r^2}{T^2} \ \Longrightarrow\ T = 2\pi\sqrt{\frac{r^3}{GM}} .
$$

Elevando ancora al quadrato si ritrova la terza legge di Keplero in forma esplicita per orbite circolari:

:::formula{id="10.3" label="Terza legge di Keplero per orbite circolari"}
$$T^2 = \frac{4\pi^2}{GM}\,r^3$$
:::

che è proprio $T^2 = kr^3$ con $k = 4\pi^2/(GM)$: la costante $k$ dipende solo dalla massa del corpo centrale, non da quella del pianeta o satellite orbitante, nell'approssimazione in cui il corpo centrale resta fermo, valida quando $m\ll M$. Nel problema a due corpi, in cui anche il corpo centrale si muove attorno al centro di massa comune, il periodo relativo si ottiene sostituendo $M$ con $M+m$, cioè $T^2 = \dfrac{4\pi^2}{G(M+m)}\,r^3$.

Questo calcolo mostra in modo diretto come la legge di gravitazione universale (dinamica) implichi la terza legge di Keplero (cinematica), chiudendo il cerchio tra le due descrizioni introdotte in apertura di sezione.

### Velocità di fuga

La **velocità di fuga** $v_F$ da un corpo celeste di massa $M$ e raggio $R$ è la velocità minima con cui occorre lanciare un corpo dalla sua superficie perché esso raggiunga una distanza infinita, cioè sfugga definitivamente al campo gravitazionale.

Applicando la conservazione dell'energia meccanica tra la superficie ($r=R$) e l'infinito (dove l'energia potenziale gravitazionale si annulla, come sarà formalizzato in [Potenziale gravitazionale e teorema di Gauss](ref:chapter/10#p5)),

$$
\frac{1}{2}mv_F^2 - G\frac{Mm}{R} = \frac{1}{2}mv_\infty^2 ,
$$

il valore minimo di $v_F$ corrisponde a $v_\infty = 0$, cioè il corpo arriva all'infinito con velocità nulla. Si ottiene quindi

:::formula{id="10.4" label="Velocità di fuga"}
$$v_F = \sqrt{\frac{2GM}{R}}$$
:::

:::image{src="assets/0a630f03-velocita-orbitale-vs-fuga.svg" alt="Due curve decrescenti, v(r) e v_F(r), con v_F sempre sopra v" caption="Fig. 10.1 — Velocità orbitale circolare v(r) e velocità di fuga v_F(r) in funzione della distanza r dal centro del corpo attrattore: la seconda è sempre radice di 2 volte la prima, ed entrambe decrescono al crescere di r."}
:::

La velocità di fuga non dipende dalla massa del corpo lanciato, ma solo dalla massa e dal raggio del corpo celeste da cui si vuole fuggire.

**Esempio 10.1.** Un satellite viene posto in orbita circolare a $300\ \mathrm{km}$ di altezza sopra la superficie terrestre. Si vuole calcolare la sua velocità orbitale e il periodo, e confrontarli con la velocità di fuga dalla superficie terrestre.

:::image{src="assets/0a630f03-satellite-orbita-bassa.jpg" alt="Satellite artificiale in orbita attorno alla Terra vista dallo spazio" caption="Fig. 10.2 — Un satellite artificiale in orbita bassa attorno alla Terra, come quello dell'esempio a 300 km di altezza. Foto: NASA Johnson Space Center / Wikimedia Commons, Public domain"}
:::

Dati: raggio terrestre $R_T = 6{,}37\cdot 10^6\ \mathrm{m}$, massa terrestre $M_T = 5{,}98\cdot 10^{24}\ \mathrm{kg}$, altitudine $h = 300\ \mathrm{km} = 3{,}00\cdot 10^5\ \mathrm{m}$, $G = 6{,}67\cdot 10^{-11}\ \mathrm{N\cdot m^2/kg^2}$.

Schema: il satellite percorre un'orbita circolare di raggio $r = R_T + h$ attorno al centro della Terra; la forza gravitazionale fornisce l'accelerazione centripeta.

Riferimento: origine nel centro della Terra, versore radiale $\hat{u}_r$ uscente.

Equazioni: {{formula:10.2}} e {{formula:10.3}}.

Soluzione letterale: $r = R_T + h$, $v = \sqrt{GM_T/r}$, $T = 2\pi\sqrt{r^3/(GM_T)}$.

Numeri: $r = 6{,}37\cdot 10^6\ \mathrm{m} + 3{,}00\cdot 10^5\ \mathrm{m} = 6{,}67\cdot 10^6\ \mathrm{m}$.

$$
GM_T = 6{,}67\cdot 10^{-11}\cdot 5{,}98\cdot 10^{24}\ \mathrm{m^3/s^2} = 3{,}99\cdot 10^{14}\ \mathrm{m^3/s^2} .
$$

$$
v = \sqrt{\frac{3{,}99\cdot 10^{14}}{6{,}67\cdot 10^6}}\ \mathrm{m/s} = \sqrt{5{,}98\cdot 10^{7}}\ \mathrm{m/s} \approx 7{,}73\cdot 10^3\ \mathrm{m/s} = 7{,}73\ \mathrm{km/s} .
$$

$$
T = \frac{2\pi r}{v} = \frac{2\pi\cdot 6{,}67\cdot 10^6\ \mathrm{m}}{7{,}73\cdot 10^3\ \mathrm{m/s}} \approx 5{,}42\cdot 10^3\ \mathrm{s} \approx 1\,\mathrm{h}\,30\,\mathrm{min} .
$$

Per confronto, la velocità di fuga dalla superficie terrestre è
$$v_F = \sqrt{\frac{2GM_T}{R_T}} = \sqrt{\frac{2\cdot 3{,}99\cdot 10^{14}}{6{,}37\cdot 10^6}}\ \mathrm{m/s} \approx 1{,}12\cdot 10^4\ \mathrm{m/s} = 11{,}2\ \mathrm{km/s} . $$

Controllo: dimensionalmente $\lbrack GM/r\rbrack  = \mathrm{m^3\,s^{-2}/m} = \mathrm{m^2/s^2}$, coerente con una velocità al quadrato. Numericamente $v < v_F$ come deve essere: il satellite è legato, mentre $v_F$ rappresenta la soglia per sfuggire del tutto al campo gravitazionale; l'ordine di grandezza (pochi $\mathrm{km/s}$) è quello tipico dei satelliti in orbita bassa.

**Errore tipico 10.1.** Un errore frequente è usare il raggio della Terra $R_T$ al posto del raggio dell'orbita $r = R_T + h$ nelle formule di velocità orbitale e periodo: le formule {{formula:10.2}} e {{formula:10.3}} vanno sempre applicate con la distanza dal centro del corpo attrattore, non con la quota sopra la sua superficie. Un secondo errore è confondere massa inerziale e massa gravitazionale trattandole come concettualmente identiche per definizione, invece di riconoscere che la loro uguaglianza è un risultato sperimentale (il principio di equivalenza) e non un'ovvietà logica.

## p3 | Campo gravitazionale

### Il concetto di campo

La forza di gravitazione universale, come la forza di Coulomb che vedremo più avanti, agisce a distanza e in apparenza senza che nulla si propaghi nello spazio tra le due masse. Per evitare l'idea di un'azione istantanea e a distanza si introduce il concetto di campo: ogni massa modifica le proprietà dello spazio circostante, e questa modifica agisce poi su una seconda massa posta in quel punto. Simbolicamente, Massa 1 $\leftrightarrow$ campo $\leftrightarrow$ Massa 2. Un campo è una grandezza fisica, scalare o vettoriale, alla quale è possibile associare un valore definito in ogni punto di una regione di spazio.

Questa nozione era già stata anticipata quando si è parlato dell'accelerazione $\vec{g}$ prossima alla superficie terrestre, nella sezione su [Gravitazione e leggi di Keplero](ref:chapter/10#p2): $\vec{g}$ è precisamente il campo gravitazionale generato dalla Terra, valutato in prossimità della sua superficie.

### Campo generato da una massa puntiforme

**Definizione 10.2** (Campo gravitazionale). Si consideri una massa sorgente $M$ posta in un punto $O$. Il campo gravitazionale $\vec{G}$ generato da $M$ in un punto $P$ a distanza $r$ da $O$ è definito come la forza per unità di massa che $M$ esercita su una massa di prova $m_0$ posta in $P$

$$\vec{G}(P) = \frac{\vec{F}}{m_0}$$

dove $m_0$ deve essere sufficientemente piccola da non perturbare la distribuzione della massa sorgente, così che $\vec{F}$ sia effettivamente la sola forza dovuta a $M$.

Usando la legge di gravitazione universale, il campo generato da una massa puntiforme $M$ (o da una distribuzione a simmetria sferica, come si vedrà nella sezione successiva) vale

:::formula{id="10.5" label="Campo gravitazionale di una massa puntiforme"}
$$\vec{G}(P) = -G\frac{M}{r^2}\hat{u}_r$$
:::

dove $\hat{u}_r$ è il versore radiale uscente dalla massa sorgente verso il punto $P$ e il segno meno rende conto del fatto che il campo è sempre diretto verso la massa che lo genera (forza attrattiva).

Il campo $\vec{G}$ ha le dimensioni di un'accelerazione, m/s², ed è numericamente pari all'accelerazione impressa a qualunque corpo di prova posto in quel punto: in prossimità della superficie terrestre $\vec{G}$ coincide con $\vec{g}$. Questa definizione va tenuta distinta dal potenziale gravitazionale $V$ (grandezza scalare, energia potenziale per unità di massa), che sarà introdotto nella sezione su [Potenziale gravitazionale e teorema di Gauss](ref:chapter/10#p5), dove si mostrerà che $\vec{G} = -\vec{\nabla}V$.

### Principio di sovrapposizione

Le formule precedenti valgono per una singola massa puntiforme. Quando nello spazio sono presenti più masse sorgenti $m_1, m_2, \dots, m_n$, il campo gravitazionale totale in un punto $P$ si ottiene applicando il **principio di sovrapposizione**: si calcola il campo che ciascuna massa genererebbe da sola in $P$, come se le altre non ci fossero, e si somma vettorialmente il risultato.

Se $\vec{G}_i$ è il campo generato dalla massa $m_i$ a distanza $r_i$ da $P$,

:::formula{id="10.6" label="Principio di sovrapposizione del campo gravitazionale"}
$$\vec{G}(P) = \sum_{i=1}^{n} \vec{G}_i = -G\sum_{i=1}^{n} \frac{m_i}{r_i^2}\,\hat{u}_i$$
:::

dove ogni $\hat{u}_i$ è il versore che punta dalla massa $m_i$ verso $P$, in accordo con la stessa convenzione adottata per il campo di una massa puntiforme.

La stessa idea si estende a una distribuzione continua di massa: si suddivide la distribuzione in elementi infinitesimi $dm$, si calcola il campo infinitesimo $d\vec{G}$ generato da ciascuno come se fosse puntiforme, e si integra su tutta la distribuzione,

$$\vec{G}(P) = -G\int \frac{dm}{r^2}\,\hat{u}_r.$$

In questa scrittura $\hat{u}_r$ indica, per ciascun elemento di massa $dm$, il versore diretto da $dm$ verso il punto $P$, coerentemente con la convenzione già adottata per le sorgenti puntiformi e discrete. Questa scrittura è la generalizzazione naturale della somma discreta al caso continuo; il suo calcolo diventa in genere semplice solo quando la distribuzione ha una simmetria che permette di prevedere la direzione del campo risultante (come nel caso della simmetria sferica, trattato con il teorema di Gauss nella sezione successiva).

Le linee di forza offrono una rappresentazione grafica del campo: il vettore campo è tangente alla linea in ogni punto, le linee nascono o terminano sulle masse sorgenti, la loro densità (numero di linee per unità di superficie) è proporzionale all'intensità del campo, e la loro disposizione nello spazio rispecchia in genere le simmetrie delle sorgenti.

### Esempio svolto

**Esempio 10.2.** Due masse puntiformi identiche $m_1 = m_2 = 2{,}0\cdot10^{3}$ kg sono poste nel piano $xy$ nei punti $A=(-1{,}0;\,0)$ m e $B=(1{,}0;\,0)$ m. Si calcoli il campo gravitazionale nel punto $P=(0;\,2{,}0)$ m.

*Dati.* $m_1=m_2=2{,}0\cdot10^3$ kg, coordinate di $A$, $B$, $P$ come sopra, $G = 6{,}67\cdot10^{-11}\ \text{N}\cdot\text{m}^2/\text{kg}^2$.

*Schema.* Per simmetria rispetto all'asse $y$, i due vettori campo $\vec{G}_1$ e $\vec{G}_2$ hanno uguale modulo e sono simmetrici rispetto a tale asse: le componenti orizzontali si elidono, quelle verticali si sommano.

:::image{src="assets/c1ffc0ec-esempio-campo-due-masse-geometria.svg" alt="Punti A, B e P nel piano xy con le distanze dell'esempio" caption="Fig. 10.3 — Geometria dell'esempio: le masse identiche in A e B sono simmetriche rispetto all'asse y, mentre P si trova sull'asse y a quota 2,0 m."}
:::

*Riferimento.* Assi cartesiani $x,y$ con origine nel punto medio di $AB$, versori $\hat{u}_x$, $\hat{u}_y$.

*Equazioni.* La distanza di $P$ da ciascuna massa è

$$r = \sqrt{1{,}0^2 + 2{,}0^2}\ \text{m} = \sqrt{5{,}0}\ \text{m} = 2{,}236\ \text{m}.$$

Il modulo del campo generato da ciascuna massa in $P$ è

$$G_i = G\frac{m_i}{r^2}.$$

Il versore che punta da $A$ (o da $B$) verso $P$ ha componente verticale $+2{,}0\ \text{m}/r$ (verso l'alto) e componente orizzontale $\pm 1{,}0\ \text{m}/r$; nella {{formula:10.6}} questo versore compare preceduto dal segno meno, cosicché le componenti orizzontali si cancellano e resta una componente verticale negativa, diretta verso le masse.

$$G_y(P) = -2\,G\frac{m}{r^2}\cdot\frac{2{,}0\ \text{m}}{r} = -\frac{(4{,}0\ \text{m})\,G\,m}{r^3}.$$

*Numeri.*

$$G_y(P) = -\frac{(4{,}0\ \text{m}) \cdot (6{,}67\cdot10^{-11}\ \text{N}\cdot\text{m}^2/\text{kg}^2)(2{,}0\cdot10^{3}\ \text{kg})}{(2{,}236\ \text{m})^3} \approx -4{,}8\cdot10^{-8}\ \text{m/s}^2.$$

Quindi $\vec{G}(P) \approx -4{,}8\cdot10^{-8}\,\hat{u}_y$ m/s².

*Controllo.* Le unità del risultato sono N/kg $=$ m/s², coerenti con la definizione di campo come forza per unità di massa; il verso negativo (verso il basso, cioè verso le masse) è quello aspettato per un campo attrattivo, e la cancellazione delle componenti orizzontali è imposta dalla simmetria del problema, come previsto allo schema iniziale.

### Errori tipici

**Errore tipico 10.2** (somma scalare invece che vettoriale). Un errore frequente consiste nel sommare i moduli dei singoli campi $G_i$ invece delle loro componenti vettoriali, ottenendo nell'esempio precedente un valore eccessivo rispetto a quello corretto, perché si ignora la cancellazione delle componenti orizzontali imposta dalla simmetria del problema. Il principio di sovrapposizione richiede sempre di decomporre ciascun $\vec{G}_i$ nelle sue componenti cartesiane e di sommare componente per componente, come indicato dalla {{formula:10.6}}.

**Errore tipico 10.3** (dipendenza errata dalla distanza). Un secondo errore tipico è confondere la dipendenza del campo dalla distanza, scrivendo $G \propto 1/r$ invece di $G \propto 1/r^2$. Il controllo dimensionale smaschera immediatamente l'errore: con $\lbrack G_{\text{cost}}\rbrack  = \text{m}^3/(\text{kg}\cdot\text{s}^2)$, la formula $a = G_{\text{cost}}\,M/r^2$ dà $\lbrack a\rbrack =\text{m/s}^2$ (corretta), mentre $a = G_{\text{cost}}\,M/r$ darebbe $\lbrack a\rbrack  = \text{m}^2/\text{s}^2$, privo di senso per un'accelerazione. Più in generale, un risultato numericamente sbagliato resta comunque un risultato, mentre una scrittura dimensionalmente inconsistente è priva di significato fisico e costituisce un errore ben più grave; per questo ogni passaggio intermedio del calcolo di un campo va sempre accompagnato dalle unità di misura.

:::image{src="assets/c1ffc0ec-campo-gravitazionale-dipendenza-r.svg" alt="Confronto tra l'andamento 1/r² del campo gravitazionale e l'errato 1/r" caption="Fig. 10.4 — Il campo gravitazionale di una massa puntiforme decresce come l'inverso del quadrato della distanza, non come l'inverso della distanza: la differenza tra le due dipendenze diventa evidente già a distanze moderate."}
:::

## p4 | Angolo solido

### Definizione di angolo solido

**Definizione 10.3** (angolo solido). Dati nello spazio tridimensionale un punto $O$ e una linea chiusa $C$, si definisce angolo solido la parte di spazio delimitata dalla superficie laterale formata da tutte le semirette che hanno origine in $O$ e passano per i punti di $C$. Un angolo solido è dunque un cono infinito generalizzato, con vertice in $O$.

La misura dell'angolo solido è costruita per analogia con quella dell'angolo piano in radianti: nel piano si traccia una circonferenza di raggio $r$ centrata nel vertice dell'angolo e si divide per $r$ la lunghezza dell'arco tagliato dall'angolo.

Nel caso dello spazio tridimensionale si traccia invece una sfera di raggio $r$ centrata nel vertice dell'angolo solido; l'angolo solido ritaglia sulla superficie della sfera una porzione di area $S$. La misura dell'angolo solido, espressa in steradianti (sr), si ottiene dividendo $S$ per $r^2$

:::formula{id="10.7" label="Angolo solido sotteso da una superficie sferica"}
$$\Omega = \frac{S}{r^2}$$
:::

Poiché $\Omega$ è il rapporto fra due grandezze omogenee (due aree), è adimensionale; lo steradiante è un'unità di misura convenzionale, analoga al radiante per gli angoli piani, e non va mai omessa quando si riporta il valore numerico di $\Omega$. L'angolo solido sotteso dall'intera sfera, cioè quello che "vede" tutto lo spazio attorno a $O$, vale

:::formula{id="10.8" label="Angolo solido totale attorno a un punto"}
$$\Omega_{\text{tot}} = \frac{4\pi r^2}{r^2} = 4\pi \ \text{sr}$$
:::

valore che ricorreremo spesso nel [teorema di Gauss](ref:chapter/10#p5).

### Angolo solido infinitesimo e vettore superficie

Per una superficie qualunque, non necessariamente sferica, è comodo introdurre dapprima il vettore superficie. Data una superficie piana di estensione $S$, il vettore superficie associato ha modulo pari a $S$ (misurato in $\text{m}^2$) e direzione perpendicolare alla superficie stessa, con il verso scelto per convenzione (versore normale $\hat{u}_n$).

Si consideri ora un elemento di superficie infinitesima $dS$, sufficientemente piccolo da poter essere considerato piano, al quale è associato il vettore

$$d\vec{S} = \hat{u}_n \, dS .$$

Sia $O$ un punto esterno a $dS$, posto a distanza $r$ da esso, e sia $\hat{u}_r$ il versore che va da $O$ verso l'elemento di superficie. L'elemento $dS$ è visto da $O$ sotto un angolo solido infinitesimo $d\Omega$, dato da

:::formula{id="10.9" label="Angolo solido infinitesimo sotteso da un elemento di superficie"}
$$d\Omega = \frac{|\hat{u}_r \cdot \hat{u}_n| \, dS}{r^2}$$
:::

Se si conserva il verso scelto per la normale, il prodotto senza valore assoluto definisce invece l'angolo solido orientato, che può essere negativo.

Il valore assoluto del prodotto scalare seleziona l'area proiettata perpendicolarmente alla direzione di osservazione: solo la proiezione "frontale" della superficie, vista da $O$, contribuisce all'angolo solido non orientato. Se la superficie è perpendicolare a $\hat{u}_r$, si ha $|\hat{u}_r \cdot \hat{u}_n| = 1$ e quindi $d\Omega = dS/r^2$, coerente con la definizione data sopra. Senza valore assoluto, il prodotto scalare conserva il segno determinato dal verso della normale e rappresenta l'angolo solido orientato.

Per gli integrali di flusso si usa l'angolo solido orientato, così il segno del prodotto scalare tiene conto del verso della normale. Questa distinzione è essenziale nella dimostrazione del teorema di Gauss applicato al campo gravitazionale (e, per analogia, al campo elettrostatico): consente di trasformare l'integrale di flusso di un campo che decresce come $1/r^2$ in un integrale sull'angolo solido orientato, indipendente dalla forma della superficie.

### Esempio svolto

Si vuole calcolare l'angolo solido sotteso, rispetto al vertice $O$, da un cono circolare retto di semiapertura angolare $\alpha$.

*Dati.* Semiangolo di apertura $\alpha$; vertice del cono in $O$.

*Schema.* Si considera una sfera di raggio $r$ centrata in $O$: il cono ritaglia su di essa una calotta sferica di semiapertura angolare $\alpha$.

*Calcolo.* L'area della calotta sferica compresa tra l'asse del cono e l'angolo $\alpha$ si ottiene integrando in coordinate polari sferiche, con $\theta$ misurato dall'asse del cono:

$$S = \int_0^{2\pi} \int_0^{\alpha} r^2 \sin\theta \, d\theta \, d\varphi = 2\pi r^2 \big\lbrack -\cos\theta\big\rbrack _0^{\alpha} = 2\pi r^2 (1-\cos\alpha).$$

Dividendo per $r^2$, come richiesto dalla definizione di $\Omega$, si ottiene

$$\Omega = 2\pi (1-\cos\alpha).$$

*Controllo.* Per $\alpha \to \pi$ (cono che si apre su tutto lo spazio) si ha $\cos\alpha \to -1$ e $\Omega \to 4\pi$ sr, in accordo con l'angolo solido totale attorno a un punto. Per $\alpha \to 0$ (cono molto stretto) $\Omega \to 0$, come atteso.

:::image{src="assets/9e3c7d96-angolo-solido-cono.svg" alt="Grafico dell'angolo solido Ω in funzione della semiapertura angolare α del cono, con asintoto orizzontale a 4π sr." caption="Fig. 10.5 — Angolo solido Ω sotteso da un cono di semiapertura α, secondo Ω = 2π(1−cos α): parte da 0 per α→0 e tende a 4π sr per α→π, come l'angolo solido totale attorno a un punto."}
:::

**Errore tipico 10.4.** Nella formula per l'angolo solido infinitesimo, il numeratore è un prodotto scalare tra vettori. Il suo valore assoluto dà l'angolo solido non orientato, mentre il prodotto con segno dà quello orientato, usato negli integrali di flusso. Scrivere $\hat{u}_r dS/r^2$ senza il punto del prodotto scalare o confondere $\hat{u}_r \cdot \hat{u}_n$ con il modulo di $dS$ porta a risultati dimensionalmente corretti ma concettualmente sbagliati, perché si perde la dipendenza dall'inclinazione della superficie rispetto alla direzione di osservazione.

## p5 | Potenziale gravitazionale e teorema di Gauss

### Energia potenziale e potenziale gravitazionale

La forza gravitazionale è una forza centrale, quindi è conservativa, come dimostrato nella sezione sulle [forze centrali](ref:chapter/5#p4). Consideriamo una massa $m_2$ che si muove in un campo gravitazionale generato da una massa sorgente $m_1$: il lavoro infinitesimo compiuto dalla forza gravitazionale durante uno spostamento $d\vec{s}$ è

$$\delta W = \vec{F}\cdot d\vec{s} = -\frac{G m_1 m_2}{r^2}\,\hat{u}_r\cdot d\vec{s},$$

dove $\hat{u}_r$ è il versore radiale uscente dalla massa sorgente $m_1$, lo stesso versore radiale usato nel resto del capitolo.

Integrando si ottiene l'energia potenziale gravitazionale già introdotta nella sezione sulle [forze conservative](ref:chapter/4#p4),

$$E_p = -\frac{G m_1 m_2}{r}.$$

Il segno negativo riflette il carattere attrattivo della forza: l'energia potenziale è nulla a distanza infinita e, poiché l'avvicinamento delle masse comporta lavoro positivo della forza gravitazionale (quindi aumento di energia cinetica e, per la conservazione dell'energia meccanica, diminuzione dell'energia potenziale), $E_p$ deve essere negativa a ogni distanza finita.

Dividendo $E_p$ per la massa $m_2$ che subisce l'interazione si ottiene una grandezza che dipende solo dalla massa sorgente $m_1$, detta **potenziale gravitazionale** del campo prodotto da $m_1$:

:::formula{id="10.10" label="Potenziale gravitazionale"}
$$V_1 = \frac{E_p}{m_2} = -\frac{G m_1}{r}$$
:::

:::image{src="assets/3c70884c-potenziale-gravitazionale-andamento.svg" alt="Grafico di V(r): curva negativa che tende a meno infinito per r che tende a zero e cresce asintoticamente a zero per r che tende a infinito" caption="Fig. 10.6 — Andamento del potenziale gravitazionale V(r) = -Gm₁/r generato da una massa puntiforme m₁, in funzione della distanza r dal centro"}
:::

La situazione è simmetrica nelle due masse: si può scrivere altrettanto bene $E_p = m_1 V_2$ con $V_2 = -Gm_2/r$ visto come potenziale generato da $m_2$ nel punto in cui si trova $m_1$. Il potenziale si misura in J/kg e rappresenta l'energia potenziale per unità di massa posta in quel punto del campo.

Il lavoro compiuto dalla forza gravitazionale su $m_2$ per uno spostamento generico dal punto $A$ al punto $B$ nel campo di $m_1$ si scrive quindi in termini della sola variazione di potenziale:

:::formula{id="10.11" label="Lavoro tramite la differenza di potenziale"}
$$W_{AB} = -\Delta E_p = -m_2\,\Delta V_1 = m_2\left(V_{1,A} - V_{1,B}\right)$$
:::

Tra campo gravitazionale e potenziale sussiste la relazione differenziale, analoga a quella già vista tra forza ed energia potenziale ([formula (4.13)](ref:formula/4.13)):

:::formula{id="10.12" label="Campo come gradiente del potenziale"}
$$\vec{G} = -\vec{\nabla} V$$
:::

Si chiama **superficie equipotenziale** una superficie su cui $V$ è costante: per qualunque spostamento tra due suoi punti il lavoro della forza gravitazionale è nullo, poiché dipende solo dalla differenza di potenziale tra gli estremi.

Questo linguaggio in termini di potenziale non modifica i risultati già ottenuti nella sezione sulle [forze centrali](ref:chapter/5#p4): la classificazione delle orbite in iperboliche ($E_m>0$), paraboliche ($E_m=0$) ed ellittiche ($E_m<0$) resta quella stabilita tramite [formula (5.12)](ref:formula/5.12), e la velocità di fuga {{formula:10.4}} si ricava imponendo che l'energia meccanica all'infinito, dove $V=0$, sia nulla o positiva.

### Teorema di Gauss per il campo gravitazionale

Il teorema di Gauss è uno strumento che collega il campo gravitazionale sulla superficie di una regione chiusa alla massa contenuta al suo interno, e risulta particolarmente utile per calcolare il campo generato da distribuzioni di massa dotate di simmetria. Consideriamo un insieme di masse e una superficie chiusa $S$ che ne racchiude alcune. In ogni punto di $S$ il campo $\vec{G}$ è quello totale dovuto a tutte le masse presenti, interne ed esterne. Si definisce il flusso elementare

:::formula{id="10.13" label="Flusso elementare del campo gravitazionale"}
$$d\Phi = \vec{G}\cdot \hat{u}_n\, dS$$
:::

dove $\hat{u}_n$ è il versore normale uscente alla superficie $S$ (la stessa convenzione adottata nella sezione sull'[angolo solido](ref:chapter/10#p4)) e $dS$ è l'elemento di superficie, e il flusso totale attraverso $S$ è $\Phi = \oint_S \vec{G}\cdot\hat{u}_n\,dS$.

**Teorema 10.1** (di Gauss per la gravitazione). Se la superficie chiusa non passa per alcuna massa puntiforme (una massa posta esattamente sulla superficie renderebbe il campo singolare nell'integrale di flusso), il flusso del campo gravitazionale attraverso di essa è proporzionale alla somma delle masse interne alla superficie:

:::formula{id="10.14" label="Teorema di Gauss per il campo gravitazionale"}
$$\Phi = -4\pi G \sum_i m_i$$
:::

L'ipotesi essenziale alla base del teorema è che il campo dipenda dall'inverso del quadrato della distanza: il risultato vale esclusivamente per campi di questo tipo.

**Dimostrazione.** Per una singola massa puntiforme $M$ posta all'interno di $S$, il campo in un punto generico a distanza $r$ da $M$ è $\vec{G} = -GM \hat{u}_r / r^2$. Il contributo al flusso di un elemento $dS$ con normale uscente $\hat{u}_n$ è

$$d\Phi = \vec{G}\cdot\hat{u}_n\,dS = -GM\,\frac{\hat{u}_r\cdot\hat{u}_n\,dS}{r^2} = -GM\, d\Omega_{\mathrm{or}},$$

dove $d\Omega_{\mathrm{or}} = (\hat{u}_r\cdot\hat{u}_n)\,dS/r^2$ è l'angolo solido orientato sotteso da $dS$ visto dal punto dove si trova $M$. A differenza dell'angolo solido infinitesimo definito con valore assoluto nella sezione sull'[angolo solido](ref:chapter/10#p4) ({{formula:10.9}}), qui il segno di $d\Omega_{\mathrm{or}}$ dipende dall'orientazione relativa di $\hat{u}_r$ e $\hat{u}_n$: per una superficie non convessa alcuni contributi risultano negativi, ed è proprio integrando questa versione orientata, e non il suo valore assoluto, che la dimostrazione dà come risultato $4\pi$ anche in presenza di concavità.

Integrando l'angolo solido orientato su tutta la superficie chiusa, il suo valore totale è $4\pi$ sr ({{formula:10.8}}), da cui $\Phi = -4\pi GM$. Se la massa $M$ è invece esterna a $S$, la superficie chiusa sottende, vista da $M$, un angolo solido orientato netto nullo, quindi il suo contributo al flusso totale è nullo. Sommando su tutte le masse presenti, interne ed esterne, e applicando la sovrapposizione dei campi, si ottiene {{formula:10.14}}: il campo che compare nell'integrale è quello totale generato da tutte le masse, ma il flusso attraverso l'intera superficie chiusa dipende soltanto dalle masse interne. $\blacksquare$

La superficie chiusa usata per applicare il teorema (detta superficie gaussiana) è in generale una superficie geometrica immaginaria, scelta per comodità di calcolo, e non deve coincidere con il contorno fisico di un oggetto.

### Campo gravitazionale di una sfera omogenea

Il teorema di Gauss permette di dimostrare che il campo generato da una distribuzione di massa a simmetria sferica, in un punto esterno a essa, coincide con quello di una massa puntiforme pari alla massa totale, posta nel centro.

Consideriamo una distribuzione sferica di raggio $R$ e massa totale $m$, a densità uniforme. Per simmetria, in un punto $P$ qualsiasi il campo $\vec{G}$ deve essere radiale: se non lo fosse, la componente tangenziale dovrebbe avere una direzione privilegiata, in contraddizione con l'isotropia della distribuzione attorno al proprio centro. Scriviamo quindi $\vec{G} = -G(r)\,\hat{u}_r$.

**Caso $r \ge R$ (punto esterno o sulla superficie).** Come superficie gaussiana scegliamo una sfera concentrica di raggio $r$. Su di essa $G(r)$ è costante per simmetria e sempre parallelo (o antiparallelo) alla normale, quindi

$$\Phi = \oint -G(r)\,\hat{u}_r\cdot\hat{u}_n\,dS = -G(r)\oint dS = -4\pi r^2 G(r) = -4\pi G m,$$

da cui

:::formula{id="10.15" label="Campo gravitazionale all'esterno di una sfera omogenea"}
$$G(r) = G\frac{m}{r^2}, \qquad r \ge R.$$
:::

Il risultato coincide con quello di una massa puntiforme $m$ nel centro, confermando quanto usato implicitamente nella sezione sulla [gravitazione e le leggi di Keplero](ref:chapter/10#p2).

**Caso $r < R$, guscio sferico cavo.** Se tutta la massa è concentrata su un guscio sottile di raggio $R$, qualunque superficie gaussiana sferica di raggio $r<R$ non racchiude alcuna massa, quindi il flusso attraverso di essa è nullo e per simmetria

:::formula{id="10.16" label="Campo gravitazionale all'interno di un guscio sferico"}
$$G(r) = 0, \qquad r < R.$$
:::

**Caso $r < R$, sfera piena omogenea.** Se la massa è distribuita in tutto il volume con densità uniforme $\rho_0$, la superficie gaussiana di raggio $r<R$ racchiude solo la frazione di massa contenuta in quel raggio, $m(r) = \rho_0 \frac{4}{3}\pi r^3$. Il teorema di Gauss dà allora

$$\Phi = -4\pi G\, m(r) = -4\pi G\,\rho_0\frac{4}{3}\pi r^3 = -G(r)\cdot 4\pi r^2,$$

:::formula{id="10.17" label="Campo gravitazionale all'interno di una sfera omogenea piena"}
$$G(r) = \frac{4}{3}\pi G\rho_0\, r, \qquad r < R.$$
:::

All'interno di una sfera omogenea il campo cresce quindi linearmente con la distanza dal centro, annullandosi nel centro stesso, mentre all'esterno decresce come $1/r^2$; il massimo si trova in $r=R$, dove le due espressioni coincidono.

:::image{src="assets/3c70884c-campo-sfera-omogenea.svg" alt="Grafico di G(r): crescita lineare per r minore di R, decrescenza come 1 su r al quadrato per r maggiore di R, con massimo in r = R" caption="Fig. 10.7 — Andamento del campo gravitazionale G(r) di una sfera omogenea di raggio R e massa M, in funzione della distanza r dal centro"}
:::

**Esempio 10.3.** Modelliamo la Terra come una sfera omogenea di massa $M_T = 5,98\cdot10^{24}\ \text{kg}$ e raggio $R_T = 6,37\cdot10^{6}\ \text{m}$. Calcoliamo il campo gravitazionale sulla superficie e a metà del raggio.

Dati: $G$ (costante gravitazionale) $=6,67\cdot10^{-11}\ \text{N}\cdot\text{m}^2/\text{kg}^2$, $M_T$, $R_T$ come sopra.

Sulla superficie ($r=R_T$) applichiamo {{formula:10.15}}:

$$G(R_T) = G\frac{M_T}{R_T^2} = \frac{(6,67\cdot10^{-11})(5,98\cdot10^{24})}{(6,37\cdot10^{6})^2}\ \text{m/s}^2 \approx 9,82\ \text{m/s}^2,$$

in accordo con il valore noto di $g$ al suolo.

A metà del raggio ($r = R_T/2$, modello di densità uniforme) applichiamo {{formula:10.17}}, osservando che $G(r) = G(R_T)\cdot(r/R_T)$:

$$G\!\left(\frac{R_T}{2}\right) = G(R_T)\cdot\frac{1}{2} \approx 9,82 \cdot 0,5\ \text{m/s}^2 = 4,91\ \text{m/s}^2.$$

Controllo: il risultato è positivo, ha le dimensioni di un'accelerazione, e dimezza correttamente il valore superficiale, coerentemente con l'andamento lineare previsto da {{formula:10.17}}; nella realtà la densità terrestre non è uniforme (il nucleo è molto più denso del mantello), quindi questo è solo un modello approssimato.

**Errore tipico 10.5.** Un errore frequente è assumere che il campo all'interno di una qualunque distribuzione sferica sia nullo, confondendo il caso del guscio cavo ({{formula:10.16}}) con quello della sfera piena, dove invece il campo cresce linearmente con $r$ ({{formula:10.17}}). Un secondo errore tipico è applicare il teorema di Gauss a forze che non seguono la legge dell'inverso del quadrato, oppure dimenticare che, sebbene il campo nell'integrale di flusso sia generato da tutte le masse presenti, solo quelle interne alla superficie gaussiana contribuiscono al flusso totale.

## p6 | Cenni di elettrostatica

L'interazione gravitazionale e quella elettrostatica condividono la stessa struttura matematica: entrambe sono descritte da una forza centrale che decresce con l'inverso del quadrato della distanza, e in entrambi i casi conviene introdurre il concetto di campo. Il campo è una grandezza fisica, scalare o vettoriale, definita in ogni punto di una regione di spazio, che media l'interazione tra le sorgenti senza bisogno di invocare un'azione istantanea a distanza: una carica (o una massa) sorgente modifica le proprietà dello spazio circostante, e questa modifica agisce poi su una seconda carica (o massa) posta in quel punto.

### Legge di Coulomb e campo elettrostatico

**Definizione 10.4** (Forza di Coulomb). Due cariche puntiformi $q_1$ e $q_2$ poste nel vuoto a distanza $r$ interagiscono con una forza di modulo

:::formula{id="10.18" label="Legge di Coulomb"}
$$F = k\,\frac{|q_1 q_2|}{r^2}, \qquad k = \frac{1}{4\pi\varepsilon_0}, \qquad \varepsilon_0 = 8{,}85\cdot 10^{-12}\ \frac{\mathrm{C}^2}{\mathrm{N\,m}^2}$$
:::

diretta lungo la congiungente delle due cariche: repulsiva se $q_1 q_2 > 0$, attrattiva se $q_1 q_2 < 0$.

In perfetta analogia con il campo gravitazionale (trattato nella sezione [Campo gravitazionale](ref:chapter/10#p3)), si definisce il **campo elettrostatico** generato da una carica sorgente $Q$ in un punto $P$ come la forza per unità di carica che una piccola carica di prova $q_0$, posta in $P$, subirebbe

:::formula{id="10.19" label="Campo elettrostatico di una carica puntiforme"}
$$\vec{E}(P) = \frac{\vec{F}_0}{q_0} = k\,\frac{Q}{r^2}\,\hat{u}_{S\to P}$$
:::

dove $\hat{u}_{S\to P}$ è il versore che va dalla sorgente $S$ al punto $P$ e $r$ è la distanza tra i due.

Dato che la forza elettrostatica è centrale, essa è anche conservativa, esattamente come la forza gravitazionale: su una carica $q_0$ immersa nel campo agisce

$$\vec{F}_{q_0} = q_0\vec{E} = m\vec{a},$$

equazione del moto da cui si parte per studiare la dinamica di una carica in un campo noto.

### Principio di sovrapposizione

**Teorema 10.2** (Principio di sovrapposizione per il campo elettrostatico). Se $n$ cariche sorgenti $Q_1,\dots,Q_n$ generano ciascuna, isolatamente, un campo $\vec{E}_i$, il campo totale nel punto $P$ è la somma vettoriale

:::formula{id="10.20" label="Sovrapposizione del campo elettrostatico"}
$$\vec{E}(P) = \sum_{i=1}^{n} \vec{E}_i(P) = \sum_{i=1}^{n} k\,\frac{Q_i}{r_i^2}\,\hat{u}_i$$
:::

Questa proprietà è l'esatto analogo della sovrapposizione già vista per il campo gravitazionale (formula {{formula:10.6}}) e discende dalla linearità della legge di Coulomb rispetto a ciascuna carica sorgente.

**Esempio 10.4.** Due cariche puntiformi $Q$ e $3Q$ (con $Q>0$) sono poste rispettivamente nei punti $(-a,0)$ e $(b,0)$ sull'asse $x$, con le cariche orientate in modo che il campo di $3Q$ nell'origine punti verso $-x$. Si vuole il campo elettrico totale nell'origine.

Dati: $Q_1 = Q$ a distanza $a$, $Q_2 = 3Q$ a distanza $b$, entrambe sull'asse $x$.

Scelta del riferimento: asse $x$ lungo la congiungente delle cariche, origine nel punto di calcolo.

Equazioni: applicando {{formula:10.19}} a ciascuna sorgente e sommando come richiesto da {{formula:10.20}},

$$\vec{E}(0,0) = \vec{E}_1(0,0) + \vec{E}_2(0,0) = \frac{1}{4\pi\varepsilon_0}\frac{Q}{a^2}(1,0) - \frac{1}{4\pi\varepsilon_0}\frac{3Q}{b^2}(1,0) = \frac{1}{4\pi\varepsilon_0}\left(\frac{Q}{a^2} - \frac{3Q}{b^2},\,0\right).$$

Il campo si annulla quando $Q/a^2 = 3Q/b^2$, cioè per $b = a\sqrt{3}$: la condizione di equilibrio del campo dipende solo dal rapporto geometrico tra le distanze, non dal valore assoluto di $Q$.

### Potenziale elettrostatico

Poiché la forza elettrostatica è conservativa, ad essa è associata un'energia potenziale. Calcolando il lavoro della forza di Coulomb lungo la congiungente radiale tra due punti a distanza $r_A$ e $r_B$ dalla sorgente,

$$W = k\,q\,q_0\int_{r_A}^{r_B}\frac{1}{r^2}\,dr = k\,q\,q_0\left\lbrack -\frac{1}{r_B}+\frac{1}{r_A}\right\rbrack  = -E_p(r_B) + E_p(r_A),$$

si ottiene l'energia potenziale elettrostatica di una coppia di cariche puntiformi

:::formula{id="10.21" label="Energia potenziale elettrostatica"}
$$E_p(r) = \frac{k\,q\,q_0}{r}$$
:::

in perfetta analogia con l'energia potenziale gravitazionale già vista in [Forze centrali](ref:chapter/5#p4).

Dividendo $E_p$ per la carica di prova $q_0$ si definisce il **potenziale elettrostatico** generato da una carica puntiforme $Q$

:::formula{id="10.22" label="Potenziale elettrostatico di una carica puntiforme"}
$$V(r) = \frac{Q}{4\pi\varepsilon_0 r} = k\,\frac{Q}{r}$$
:::

:::image{src="assets/0dc2501f-potenziale-elettrostatico-puntiforme.svg" alt="Grafico del potenziale elettrostatico V in funzione della distanza r, con andamento 1 su r" caption="Fig. 10.8 — Potenziale elettrostatico V(r) generato da una carica puntiforme Q positiva: decresce come 1/r e tende a zero per r che tende a infinito, a differenza del campo E che decresce come 1/r²."}
:::

legato al campo dalla relazione $V(A)-V(B) = \int_{A,\gamma}^{B}\vec{E}\cdot d\vec{s}$, e il lavoro compiuto dal campo su una carica $q_0$ che si sposta da $A$ a $B$ vale

:::formula{id="10.23" label="Lavoro del campo elettrostatico"}
$$W_{A\to B} = -q_0\Delta V = q_0\left[V(A)-V(B)\right], \qquad E_p = q_0 V$$
:::

Come per il campo, anche il potenziale generato da più cariche sorgenti si ottiene per sovrapposizione (somma scalare, non vettoriale, essendo $V$ una grandezza scalare)

:::formula{id="10.24" label="Sovrapposizione del potenziale elettrostatico"}
$$V(\vec{r}) = \sum_{i=1}^{n} V_i(\vec{r}) = \sum_{i=1}^{n} \frac{1}{4\pi\varepsilon_0}\frac{Q_i}{|\vec{r}-\vec{r}_i|}$$
:::

Il legame inverso tra campo e potenziale, valido anche in più dimensioni, è dato dal gradiente

$$\vec{E}(x,y) = -\vec{\nabla}V(x,y) = \left(-\frac{\partial V}{\partial x}, -\frac{\partial V}{\partial y}\right),$$

del tutto analogo a quanto già visto per il campo gravitazionale, $\vec{G} = -\vec{\nabla}V$, nella sezione [Potenziale gravitazionale e teorema di Gauss](ref:chapter/10#p5). Conseguenza diretta della conservatività del campo elettrostatico è che il lavoro per spostare una carica da un punto $A$ a un punto $D$ non dipende dal percorso scelto, ma solo dai punti iniziale e finale.

Il teorema di Gauss, già dimostrato per il campo gravitazionale, si estende identicamente al campo elettrostatico: il flusso attraverso una superficie chiusa è proporzionale alla carica netta racchiusa,

$$\Phi_{\Sigma}(\vec{E}) = \oint_{\Sigma}\vec{E}\cdot\hat{u}_n\,d\Sigma = \frac{1}{\varepsilon_0}\sum_{i} q_i = \frac{Q_{\mathrm{int}}}{\varepsilon_0},$$

dove il versore normale è orientato verso l'esterno della superficie, cosicché una carica interna positiva dà flusso uscente positivo; se la carica netta racchiusa è nulla il flusso totale è nullo, pur potendo le linee di campo attraversare la superficie sia entrando sia uscendo.

**Errore tipico 10.6.** Scrivere $\Delta W_{A\to B}$ o trattare il lavoro come se fosse la variazione di una funzione di stato è concettualmente scorretto: il lavoro non è definito punto per punto nello spazio, ma è sempre una quantità associata a un percorso, anche quando (come nel caso conservativo) il suo valore finisce per dipendere solo dagli estremi. Vanno inoltre sommate vettorialmente le intensità di campo (mai sommate come scalari i loro moduli) e verificata sempre l'omogeneità dimensionale di ogni passaggio, poiché un risultato numericamente sbagliato resta comunque un risultato, mentre uno dimensionalmente inconsistente è privo di significato fisico.
