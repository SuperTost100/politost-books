---
chapter: 6
title: Moti relativi
---

## p1 | Introduzione

Descrivere un moto significa sempre specificare rispetto a quale riferimento si osserva. Quando il riferimento si sposta o ruota, posizione, velocità e accelerazione misurate da un osservatore possono differire da quelle misurate da un altro; anche le leggi della dinamica richiedono allora termini aggiuntivi per descrivere correttamente il moto. Capire queste trasformazioni è utile per analizzare situazioni concrete, dai sistemi accelerati alla rotazione terrestre, e per riconoscere quando gli effetti del riferimento non inerziale sono trascurabili.

Per affrontare il capitolo servono le basi della cinematica e della dinamica del punto: descrivere posizione, velocità e accelerazione e applicare la seconda legge di Newton. Al termine saprai trasformare queste grandezze tra un riferimento fisso e uno mobile, distinguendo il moto relativo da quello dovuto alla traslazione e alla rotazione del riferimento. Saprai inoltre scrivere le equazioni del moto in un riferimento non inerziale, individuare le forze apparenti e interpretarne gli effetti. Potrai applicare il metodo a casi come un ascensore o un vagone accelerato, una piattaforma rotante e la caduta libera sulla Terra, valutando quando le correzioni dovute alla rotazione sono rilevanti.

## p2 | Velocità e accelerazioni relative

Finora il moto di un punto materiale è sempre stato descritto rispetto a un'unica terna di assi. In molte situazioni concrete, però, è utile (o necessario) confrontare le descrizioni che due osservatori diversi, in moto l'uno rispetto all'altro, danno dello stesso moto: un passeggero su un treno e una persona sulla banchina, un nuotatore e la corrente del fiume, un punto su una piattaforma che gira e un osservatore a terra. Sperimentalmente è stato provato che le leggi fisiche non dipendono dalla scelta del sistema di riferimento; questa invarianza vale in particolare per i sistemi inerziali, ma quando i due osservatori sono in moto relativo accelerato le grandezze cinematiche misurate (posizione, velocità, accelerazione) non coincidono, e vanno collegate da opportune relazioni di trasformazione.

Si introducono due terne cartesiane: una terna fissa $Oxyz$, con versori $\hat{u}_x,\hat{u}_y,\hat{u}_z$, e una terna mobile $O'x'y'z'$, con versori $\hat{u}_{x'},\hat{u}_{y'},\hat{u}_{z'}$, in moto qualsiasi rispetto alla prima. Un punto materiale $P$ viene osservato da entrambi i riferimenti: le sue coordinate nel riferimento fisso definiscono il vettore posizione $\vec{r}$, le sue coordinate nel riferimento mobile il vettore posizione $\vec{r}\,'$. La relazione tra le due posizioni è

:::formula{id="6.1" label="Posizione relativa tra sistema fisso e sistema mobile"}
$$\vec{r} = \vec{OO'} + \vec{r}\,', \qquad \vec{r} = x\hat{u}_x+y\hat{u}_y+z\hat{u}_z, \quad \vec{r}\,' = x'\hat{u}_{x'}+y'\hat{u}_{y'}+z'\hat{u}_{z'}$$
:::

dove $\vec{OO'}$ è il vettore che individua l'origine mobile rispetto a quella fissa. Chiameremo **velocità assoluta** $\vec{v}=d\vec{r}/dt$ quella misurata nel riferimento fisso, e **velocità relativa** $\vec{v}\,'=d\vec{r}\,'/dt$ quella misurata nel riferimento mobile, calcolata derivando solo le componenti $x',y',z'$ a versori $\hat{u}_{x'},\hat{u}_{y'},\hat{u}_{z'}$ costanti. Analogamente si definisce la velocità dell'origine mobile $\vec{v}_{O'}=d\vec{OO'}/dt$.

### Riferimenti in traslazione

Il caso più semplice si ha quando il riferimento mobile trasla rispetto a quello fisso senza ruotare: gli assi $x',y',z'$ restano sempre paralleli agli assi $x,y,z$, cioè i versori $\hat{u}_{x'},\hat{u}_{y'},\hat{u}_{z'}$ sono costanti nel tempo. In questo caso derivando direttamente $\vec{r}=\vec{OO'}+\vec{r}\,'$ non compare alcun termine correttivo dovuto alla rotazione dei versori, e si ottengono le seguenti **relazioni cinematiche per riferimenti in traslazione**, valide anche se l'origine mobile $O'$ accelera rispetto a quella fissa:

$$\vec{v} = \vec{v}_{O'} + \vec{v}\,', \qquad \vec{a} = \vec{a}_{O'} + \vec{a}\,'$$

come caso particolare (con $\vec{\omega}=\vec{0}$) del teorema generale che enunceremo nella sottosezione successiva. La velocità (e l'accelerazione) assoluta è semplicemente la somma vettoriale della velocità (accelerazione) relativa e di quella dell'origine mobile: non compaiono né termine centripeto né termine di Coriolis, perché nessuno dei due richiede una rotazione degli assi. Si parla propriamente di **trasformazioni di Galileo** soltanto quando $\vec{v}_{O'}$ è costante nel tempo, cosicché entrambi i riferimenti risultano inerziali; se invece l'origine mobile accelera, le stesse relazioni restano valide come semplici relazioni cinematiche tra riferimenti in traslazione, ma non collegano due riferimenti inerziali.

**Esempio 6.1** (attraversamento di un fiume con corrente non uniforme). Un nuotatore attraversa un fiume di larghezza $L = 20\ \text{m}$ partendo dal punto $A$ e puntando sempre in direzione normale alle sponde. Rispetto all'acqua la sua velocità relativa è costante e pari a $v_y = 3{,}6\ \text{km/h} = 1{,}0\ \text{m/s}$, diretta lungo $y$ (perpendicolare alla corrente). La corrente ha una velocità di trascinamento che varia con la distanza $y$ dalla sponda di partenza secondo $v(y)=\lambda y(L-y)$, con $\lambda = 5{,}0\cdot10^{-3}\ \text{m}^{-1}\text{s}^{-1}$. Si vuole determinare la coordinata $x_B$ del punto di arrivo.

Si scelgono gli assi con $x$ lungo la corrente e $y$ lungo la direzione di attraversamento; la velocità assoluta del nuotatore ha quindi le due componenti

$$\frac{dy}{dt} = v_y = \text{costante}, \qquad \frac{dx}{dt} = v(y) = \lambda y(L-y),$$

:::image{src="assets/77388cff-profilo-velocita-corrente-fiume.svg" alt="Grafico a campana della velocità della corrente in funzione della distanza dalla sponda di partenza" caption="Fig. 6.1 — Velocità di trascinamento della corrente v(y) = λy(L−y) lungo la larghezza del fiume: nulla alle due sponde, massima a metà"}
:::

ottenute applicando la composizione delle velocità $\vec{v} = \vec{v}\,' + \vec{v}_{\text{corrente}}$: la componente $y$ è interamente dovuta al nuoto (velocità relativa), la componente $x$ è interamente dovuta al trascinamento della corrente. Integrando la prima equazione si ha $y(t)=v_y t$, da cui $dt = dy/v_y$; sostituendo nella seconda e separando le variabili,

$$x_B = \int_0^{L} \frac{\lambda y(L-y)}{v_y}\,dy = \frac{\lambda}{v_y}\left(\frac{L^3}{2}-\frac{L^3}{3}\right) = \frac{\lambda L^3}{6 v_y}.$$

Numericamente,

$$x_B = \frac{5{,}0\cdot10^{-3}\ \text{m}^{-1}\text{s}^{-1}\cdot (20\ \text{m})^3}{6\cdot 1{,}0\ \text{m/s}} \approx 6{,}7\ \text{m},$$

mentre $y_B = L = 20\ \text{m}$. Il controllo dimensionale è immediato: $\lbrack \lambda\rbrack \lbrack L^3\rbrack /\lbrack v\rbrack  = (\text{m}^{-1}\text{s}^{-1})(\text{m}^3)/(\text{m/s}) = \text{m}$, coerente con una lunghezza; l'ordine di grandezza (pochi metri su una larghezza di 20 m) è ragionevole per una corrente debole.

:::image{src="assets/77388cff-traiettoria-nuotatore-fiume.svg" alt="Curva della posizione x in funzione di y per il nuotatore che attraversa il fiume" caption="Fig. 6.2 — Traiettoria del nuotatore nel piano xy: la deriva x(y) dovuta alla corrente, da A (y=0) a B (y=L=20 m, x_B ≈ 6,7 m)"}
:::

**Errore tipico 6.1** è applicare le trasformazioni di Galileo anche quando gli assi mobili ruotano, dimenticando i termini aggiuntivi legati a $\vec{\omega}$ che vengono introdotti nella sottosezione seguente; un altro errore frequente è confondere la velocità di trascinamento (quella dell'origine o del punto del riferimento mobile coincidente con $P$) con la velocità relativa del corpo rispetto al mezzo.

### Riferimenti in rotazione

Se il riferimento mobile ruota, con velocità angolare $\vec{\omega}$, rispetto al riferimento fisso, i versori $\hat{u}_{x'},\hat{u}_{y'},\hat{u}_{z'}$ non sono più costanti: la loro derivata è data dalle [formula (1.13)](ref:formula/1.13), già introdotte in [Vettori e versori](ref:chapter/1#p3), che qui si scrivono riferite al sistema mobile come $d\hat{u}_{x'}/dt=\vec{\omega}\times\hat{u}_{x'}$ e analoghe per $\hat{u}_{y'},\hat{u}_{z'}$. Derivando $\vec{r}=\vec{OO'}+\vec{r}\,'$ e tenendo conto di questi termini si ottiene il risultato fondamentale di questa sezione.

**Teorema 6.1** (delle velocità relative). Siano $Oxyz$ un riferimento fisso e $O'x'y'z'$ un riferimento mobile che ruota con velocità angolare $\vec{\omega}(t)$ rispetto al primo. Per un punto materiale $P$ vale

:::formula{id="6.2" label="Teorema delle velocità relative"}
$$\vec{v} = \vec{v}_{O'} + \vec{v}\,' + \vec{\omega}\times \vec{r}\,'$$
:::

dove $\vec{v}$ è la velocità assoluta, $\vec{v}_{O'}$ la velocità dell'origine mobile, $\vec{v}\,'$ la velocità relativa e $\vec{\omega}\times\vec{r}\,'$ il termine correttivo legato alla rotazione degli assi mobili. Si noti che $d\vec{r}\,'/dt \neq \vec{v}\,'$ in generale: la derivata completa della posizione relativa include anche la rotazione dei versori, mentre $\vec{v}\,'$ per definizione tiene conto solo della variazione delle componenti $x',y',z'$.

Si definisce **velocità di trascinamento** la velocità che il punto $P$ avrebbe se fosse fermo rispetto al riferimento mobile, cioè la differenza tra velocità assoluta e velocità relativa:

:::formula{id="6.3" label="Velocità di trascinamento"}
$$\vec{v}_t = \vec{v} - \vec{v}\,' = \vec{v}_{O'} + \vec{\omega}\times \vec{r}\,'$$
:::

Essa è la somma di un termine traslatorio $\vec{v}_{O'}$ e di un termine rotatorio $\vec{\omega}\times\vec{r}\,'$. Nei casi limite: se $\vec{\omega}=\vec{0}$ si ha moto di pura traslazione e $\vec{v}_t=\vec{v}_{O'}$ (le relazioni cinematiche per riferimenti in traslazione viste sopra, che diventano trasformazioni di Galileo quando $\vec{v}_{O'}$ è costante); se $\vec{v}_{O'}=\vec{0}$ si ha moto di pura rotazione attorno a $O'$ e $\vec{v}_t=\vec{\omega}\times\vec{r}\,'$.

Derivando ancora una volta rispetto al tempo si ottiene il teorema analogo per le accelerazioni.

**Teorema 6.2** (delle accelerazioni relative). Con le stesse ipotesi del teorema precedente, l'accelerazione assoluta del punto $P$ vale

:::formula{id="6.4" label="Teorema delle accelerazioni relative"}
$$\vec{a} = \vec{a}\,' + \vec{a}_{O'} + \vec{\omega}\times(\vec{\omega}\times \vec{r}\,') + \frac{d\vec{\omega}}{dt}\times \vec{r}\,' + 2\vec{\omega}\times \vec{v}\,'$$
:::

dove $\vec{a}$ è l'accelerazione assoluta, $\vec{a}\,'$ l'accelerazione relativa, $\vec{a}_{O'}$ l'accelerazione dell'origine mobile. È conveniente raggruppare i termini in tre contributi, scrivendo

$$\vec{a} = \vec{a}\,' + \vec{a}_T + \vec{a}_{Co},$$

dove l'**accelerazione di trascinamento** raccoglie tutti i termini che dipendono solo dal moto relativo tra i due riferimenti (non dal moto di $P$ rispetto al mobile),

:::formula{id="6.5" label="Accelerazione di trascinamento"}
$$\vec{a}_T = \vec{a}_{O'} + \vec{\omega}\times(\vec{\omega}\times \vec{r}\,') + \frac{d\vec{\omega}}{dt}\times \vec{r}\,'$$
:::

e l'**accelerazione di Coriolis** (o complementare) dipende invece dal moto di $P$ rispetto al mobile tramite la velocità relativa $\vec{v}\,'$,

:::formula{id="6.6" label="Accelerazione di Coriolis"}
$$\vec{a}_{Co} = 2\vec{\omega}\times \vec{v}\,'$$
:::

Nell'accelerazione di trascinamento il termine $\vec{a}_{O'}$ è traslatorio puro, mentre il termine $\vec{\omega}\times(\vec{\omega}\times\vec{r}\,')$ è detto **termine centripeto**, perché punta verso l'asse di rotazione con modulo $\omega^2 r'_\perp$, dove $r'_\perp$ è la distanza di $P$ dall'asse di rotazione, cioè la componente di $\vec r\,'$ ortogonale a $\vec\omega$. La corrispondente **accelerazione (o forza) centrifuga**, che compare come termine apparente nell'equazione del moto scritta nel riferimento rotante, ha segno opposto, $-\vec{\omega}\times(\vec{\omega}\times\vec{r}\,')$, e punta verso l'esterno; si veda la sezione sulle [forze apparenti](ref:chapter/6#p3). Il termine $\dfrac{d\vec{\omega}}{dt}\times\vec{r}\,'$ compare solo se la velocità angolare non è costante (in modulo o direzione). Come nel caso delle velocità, nei casi limite si semplifica: se il riferimento mobile non ruota durante l'intervallo di tempo considerato, cioè $\vec{\omega}=\vec{0}$ e $d\vec{\omega}/dt=\vec{0}$, resta solo $\vec{a}=\vec{a}\,'+\vec{a}_{O'}$ (se invece $\vec{\omega}$ si annulla soltanto nell'istante considerato ma $d\vec{\omega}/dt\neq\vec{0}$, nell'accelerazione resta comunque il termine $(d\vec{\omega}/dt)\times\vec{r}\,'$); se $\vec{v}_{O'}=\vec{0}$ e $\vec{\omega}=\text{costante}$ (pura rotazione uniforme attorno a un punto fisso) resta $\vec{a}=\vec{a}\,'+\vec{\omega}\times(\vec{\omega}\times\vec{r}\,')+2\vec{\omega}\times\vec{v}\,'$.

**Esempio 6.2** (due punti su circonferenze concentriche con la stessa velocità angolare e la stessa fase). Due punti materiali 1 e 2 percorrono, con la stessa velocità angolare costante $\omega$ e la stessa fase iniziale, due circonferenze concentriche di raggio $r_1$ e $R$ nel piano $xy$; essendo $\omega$ identica e la fase comune, la coordinata angolare $\theta(t)$ dei due punti coincide in ogni istante, e dunque anche i versori polari $\hat{u}_r(t)$ e $\hat{u}_\theta(t)$, calcolati rispetto al centro comune, sono gli stessi per entrambi. Le velocità e le accelerazioni nel riferimento fisso sono, per il moto circolare uniforme, puramente tangenziali e puramente centripete, [vedi la sezione sul moto circolare](ref:chapter/2#p6):

$$\vec{v}_1 = r_1\omega\,\hat{u}_\theta, \quad \vec{v}_2 = R\omega\,\hat{u}_\theta, \qquad \vec{a}_1 = -r_1\omega^2\,\hat{u}_r, \quad \vec{a}_2 = -R\omega^2\,\hat{u}_r.$$

Poiché, grazie alla fase comune, i due punti condividono in ogni istante gli stessi versori $\hat{u}_r$ e $\hat{u}_\theta$, le grandezze cinematiche di 1 e di 2 sono espresse nella stessa base vettoriale, e la loro differenza si riduce a una semplice sottrazione di componenti, senza bisogno di introdurre un riferimento mobile né di applicare i teoremi delle velocità e delle accelerazioni relative:

$$\vec{v} = \vec{v}_2 - \vec{v}_1 = (R-r_1)\,\omega\,\hat{u}_\theta, \qquad \vec{a} = \vec{a}_2 - \vec{a}_1 = -(R-r_1)\,\omega^2\,\hat{u}_r$$

. Il controllo di coerenza è immediato: se $R=r_1$ i due punti coincidono sempre e sia $\vec{v}$ sia $\vec{a}$ relative si annullano, come deve essere.

**Errore tipico 6.2** è scrivere $\vec{v} = \vec{v}_{O'} + \vec{v}\,'$ dimenticando il termine $\vec{\omega}\times\vec{r}\,'$ non appena il riferimento mobile ruota (per esempio una piattaforma girevole), oppure, simmetricamente, applicare il termine di Coriolis $2\vec{\omega}\times\vec{v}\,'$ anche quando il punto è in quiete nel riferimento mobile ($\vec{v}\,'=\vec{0}$), caso in cui tale termine è identicamente nullo. Un altro errore frequente è confondere il termine centripeto $\vec{\omega}\times(\vec{\omega}\times\vec{r}\,')$, che ha modulo $\omega^2 r'_\perp$, con $r'_\perp$ distanza di $P$ dall'asse di rotazione, ed è diretto verso l'asse di rotazione (il termine centrifugo, apparente, ha lo stesso modulo ma segno opposto), con l'accelerazione di Coriolis, che invece è ortogonale sia a $\vec{\omega}$ sia a $\vec{v}\,'$ e si annulla per un punto fermo rispetto al riferimento mobile. Queste scomposizioni dell'accelerazione sono il punto di partenza per interpretare, nella sezione successiva, i termini $-m\vec{a}_T$ e $-m\vec{a}_{Co}$ come [forze apparenti](ref:chapter/6#p3) in un riferimento non inerziale.

## p3 | Forze apparenti

### Perché servono le forze apparenti

Nella sezione precedente abbiamo scomposto l'accelerazione assoluta di un punto materiale come $\vec{a} = \vec{a}' + \vec{a}_T + \vec{a}_{Co}$, somma dell'accelerazione relativa, di trascinamento e di Coriolis (vedi [Velocità e accelerazioni relative](ref:chapter/6#p2), {{formula:6.4}}). Se il riferimento fisso $Oxyz$ è inerziale, in esso vale la seconda legge della dinamica nella sua forma più semplice: le forze che vi compaiono sono le forze vere, cioè quelle riconducibili alle interazioni fondamentali (gravitazionale, elastica, di contatto, elettromagnetica).

Un osservatore solidale con il riferimento mobile $O'x'y'z'$, però, misura l'accelerazione relativa $\vec{a}'$, non $\vec{a}$. Sostituendo la scomposizione delle accelerazioni nella seconda legge $\vec{F} = m\vec{a}$ si ottiene

$$\vec{F}-m\vec{a}_T-m\vec{a}_{Co}=m\vec{a}'$$

che riscriviamo come un'equazione formalmente analoga alla seconda legge di Newton, ma valida nel riferimento mobile.

**Definizione 6.1** (forza apparente). In un sistema di riferimento non inerziale, il prodotto della massa del punto materiale per l'accelerazione misurata in quel sistema è uguale alla forza vera agente sul punto più le *forze apparenti*, dette anche forze d'inerzia:

$$m\vec{a}' = \vec{F} + \vec{F}_{\text{app}}, \qquad \vec{F}_{\text{app}} = -m\vec{a}_T - m\vec{a}_{Co}$$

dove $\vec{F}$ è la risultante delle sole forze vere. Le forze apparenti non derivano da alcuna interazione fondamentale: esistono esclusivamente perché il sistema di riferimento è accelerato, e scompaiono identicamente in qualunque sistema inerziale.

Non bisogna però credere che qualunque accelerazione del riferimento modifichi la lettura di una bilancia: se l'ascensore accelera orizzontalmente, la normale esercitata dal piatto su un corpo appoggiato può restare $N = mg$, perché la componente verticale dell'accelerazione resta nulla. Occorre allora distinguere la somma delle forze vere e apparenti, $\vec{F} + \vec{F}_{\text{app}} = m\vec{a}'$, dalla forza esercitata da un particolare sostegno (bilancia, sedile, filo): la forza del sostegno si ricava dall'equazione completa, tenendo conto di tutte le forze vere e apparenti. Definiamo *peso apparente* la forza $\vec{N}$ che un sostegno orizzontale (una bilancia) esercita su un corpo in quiete rispetto a esso: proiettando $m\vec{a}' = m\vec{g} + \vec{N} + \vec{F}_{\text{app}}$ lungo la direzione di misura (verticale) si ottiene $N$ in funzione della sola componente di $\vec{a}_T$ lungo quella direzione, cioè dell'accelerazione del riferimento proiettata sulla direzione in cui la bilancia misura.

### Forza di trascinamento, centrifuga e di Coriolis

Richiamando la scomposizione dell'accelerazione di trascinamento

$$\vec{a}_T = \vec{a}_{O'} + \vec{\omega}\times(\vec{\omega}\times\vec{r}') + \frac{d\vec{\omega}}{dt}\times\vec{r}'$$

({{formula:6.5}}) e di quella di Coriolis $\vec{a}_{Co} = 2\vec{\omega}\times\vec{v}'$ ({{formula:6.6}}), la forza apparente si scompone in tre contributi distinti:

:::formula{id="6.7" label="Forza di trascinamento"}
$$\vec{F}_T = -m\vec{a}_{O'} - m\frac{d\vec{\omega}}{dt}\times\vec{r}'$$
:::

dovuta al moto traslatorio accelerato dell'origine $O'$ e alla variazione di $\vec{\omega}$ nel tempo;

:::formula{id="6.8" label="Forza centrifuga"}
$$\vec{F}_{\text{cf}} = -m\,\vec{\omega}\times(\vec{\omega}\times\vec{r}')$$
:::

diretta verso l'esterno rispetto all'asse di rotazione, che compare ogniqualvolta il riferimento ruota; essa bilancia, per un corpo in quiete nel riferimento rotante, la forza vera che fornisce l'accelerazione centripeta osservata dal riferimento inerziale;

:::formula{id="6.9" label="Forza di Coriolis"}
$$\vec{F}_{\text{Co}} = -2m\,\vec{\omega}\times\vec{v}'$$
:::

presente solo quando il punto si muove ($\vec{v}' \neq \vec{0}$) rispetto al riferimento rotante; dipende quindi dal moto relativo di $P$, non dalla sua posizione. La seconda legge nel riferimento non inerziale si scrive allora

$$m\vec{a}' = \vec{F} + \vec{F}_T + \vec{F}_{\text{cf}} + \vec{F}_{\text{Co}}.$$

Nel caso particolare, molto frequente negli esercizi, di un riferimento mobile che trasla con accelerazione costante $\vec{A}$ rispetto al suolo (vagone, ascensore, piano inclinato trainato) si ha $\vec{\omega} = \vec{0}$, quindi non compaiono né forza centrifuga né forza di Coriolis, e resta solo

$$\vec{F}_{\text{app}} = -m\vec{A}$$

con il segno meno da non dimenticare: la forza apparente è sempre opposta all'accelerazione del riferimento.

### Esempio: ascensore in moto accelerato

Un passeggero di massa $m$ si trova su una bilancia all'interno di un ascensore che accelera verso l'alto con accelerazione $\vec{a}_0$ di modulo $a_0$.

**Dati**: massa $m$, accelerazione dell'ascensore $a_0$ (verso l'alto), accelerazione di gravità $g$.

**Schema delle forze**: nel riferimento inerziale del palazzo agiscono sul passeggero il peso $m\vec{g}$ (verso il basso) e la reazione normale della bilancia $\vec{N}$ (verso l'alto); il moto è verticale con accelerazione $\vec{a}_0$ pari a quella dell'ascensore.

**Riferimento inerziale (del palazzo)**: proiettando lungo la verticale, orientata positiva verso l'alto,

$$N - mg = ma_0 \quad\Rightarrow\quad N = m(g+a_0).$$

**Riferimento non inerziale (dell'ascensore)**: nel riferimento solidale con la cabina il passeggero è in quiete ($a' = 0$); oltre al peso e alla normale compare la forza apparente di trascinamento $\vec{F}_{\text{app}} = -m\vec{a}_0$, diretta verso il basso perché $\vec{a}_0$ è verso l'alto:

$$N - mg - ma_0 = 0 \quad\Rightarrow\quad N = m(g+a_0),$$

in perfetto accordo con il calcolo precedente. Il valore $N$ misurato dalla bilancia è il "peso apparente": maggiore di $mg$ quando l'ascensore accelera verso l'alto, minore quando accelera verso il basso, nullo nella caduta libera ($a_0 = -g$). Il controllo dimensionale è immediato: $\lbrack m\rbrack \lbrack g+a_0\rbrack  = \text{kg}\cdot\text{m/s}^2 = \text{N}$.

:::image{src="assets/79009b55-peso-apparente-ascensore.svg" alt="Retta N/(mg) = 1 + a0/g con punti evidenziati in a0 = 0 e a0 = -g" caption="Fig. 6.3 — Peso apparente N misurato dalla bilancia, in rapporto a mg, in funzione dell'accelerazione dell'ascensore a0 in rapporto a g: N cresce se l'ascensore accelera verso l'alto e si annulla in caduta libera (a0 = -g)."}
:::

### Esempio: pendolo in un vagone accelerato

Un pendolo semplice di lunghezza $l = 0,4\ \text{m}$ è appeso al soffitto di un vagone che avanza con accelerazione orizzontale $A = 5\ \text{m/s}^2$.

**Schema delle forze (nel riferimento del vagone)**: tensione $\vec{T}$ del filo, peso $m\vec{g}$, forza apparente $\vec{F}_{\text{app}} = -m\vec{A}$ orizzontale e opposta al moto del vagone.

**Riferimento scelto**: quello non inerziale solidale col vagone, in cui scriviamo $\vec{F} + \vec{F}_{\text{app}} = m\vec{a}\,'$, con $\vec{F} = m\vec{g} + \vec{T}$ somma delle forze reali e $\vec{a}\,'$ accelerazione relativa al vagone.

**Equazioni** (assi $\hat{u}_x$ orizzontale nel verso del moto, $\hat{u}_y$ verticale verso l'alto, $\theta$ angolo del filo dalla verticale, $a_x', a_y'$ componenti dell'accelerazione relativa):

$$\begin{cases} T\sin\theta - mA = ma_x' \\ -mg + T\cos\theta = ma_y' \end{cases}$$

**Soluzione letterale**: all'equilibrio relativo ($a_x' = a_y' = 0$) nel riferimento del vagone,

$$T\sin\theta = mA, \qquad T\cos\theta = mg \quad\Rightarrow\quad \tan\theta = \frac{A}{g}, \qquad T = m\sqrt{g^2+A^2}$$

.

**Numeri**: $\theta = \arctan(5/9{,}81) = 0{,}47\ \text{rad} \approx 27°$.

:::image{src="assets/79009b55-angolo-pendolo-vagone.svg" alt="Curva crescente θ(A) = arcotangente di A su g, convertita in gradi, con il punto A=5, θ=27" caption="Fig. 6.4 — Angolo di equilibrio θ del pendolo nel vagone accelerato in funzione dell'accelerazione orizzontale A, secondo tanθ = A/g: per A = 5 m/s² si ritrova il valore θ ≈ 27° calcolato nell'esempio."}
:::

Il pendolo si assesta dunque in una posizione obliqua, come se fosse soggetto a una gravità efficace $\vec{g}_{\text{eff}} = \vec{g} - \vec{A}$, somma vettoriale della gravità reale e della forza apparente per unità di massa, di modulo $g_{\text{eff}} = \sqrt{g^2+A^2}$. Le piccole oscillazioni attorno a questa posizione obliqua sono ancora armoniche, con periodo

$$T_{\text{osc}} = 2\pi\sqrt{\frac{l}{\sqrt{g^2+A^2}}}$$

, da confrontare con [formula (3.27)](ref:formula/3.27) del pendolo in quiete, in cui compare semplicemente $g$ al posto di $g_{\text{eff}}$.

Lo stesso schema si applica a un corpo su un piano inclinato solidale con un sistema accelerato (vagone, carrello): ci si mette nel riferimento non inerziale del piano, si sommano alle forze reali (peso, reazione normale, attrito) la forza apparente $-m\vec{A}$, e si impone l'equilibrio relativo per trovare la condizione sull'angolo e sul coefficiente di attrito statico.

### Esempio: piattaforma rotante e forza centrifuga

Una particella di massa $m$ è collegata al centro di una piattaforma orizzontale, che ruota con velocità angolare costante $\omega$, tramite una molla di costante elastica $k$ e lunghezza di riposo $r_0$; la particella ruota solidale alla piattaforma, descrivendo un moto circolare uniforme di raggio $r$ incognito rispetto al centro.

**Riferimento inerziale (del laboratorio)**: la particella si muove di moto circolare uniforme. Il peso e la reazione normale della piattaforma si compensano verticalmente; proiettando la seconda legge lungo la direzione radiale, l'unica forza reale è quella elastica e fornisce l'accelerazione centripeta. Supponiamo $r_0 > 0$ e $k > m\omega^2$, condizione necessaria perché esista un raggio di equilibrio positivo e finito:

$$-k(r-r_0) = -m\omega^2 r \quad\Rightarrow\quad r = \frac{r_0}{1-\dfrac{m\omega^2}{k}}$$

(si richiede $r > r_0$, cioè la molla allungata).

**Riferimento non inerziale (solidale con la particella, che ruota con $\omega$)**: la particella è in quiete, $\vec{a}' = \vec{0}$, ma oltre alla forza elastica reale compare la forza centrifuga $\vec{F}_{\text{cf}} = +m\omega^2 r\,\hat{u}_r$:

$$-k(r-r_0)\hat{u}_r + m\omega^2 r\,\hat{u}_r = m\vec{a}' = \vec{0}$$

che riproduce esattamente la stessa equazione di equilibrio, con il termine centripeto ora spostato al primo membro e interpretato come forza centrifuga apparente. I due metodi, applicati correttamente, danno sempre lo stesso risultato numerico: cambia solo l'interpretazione fisica dei termini, non l'equazione finale.

Lo stesso schema, con l'aggiunta della forza apparente di trascinamento traslatorio $-m\vec{a}_t$, permette di studiare un corpo (per esempio un cilindro che rotola) appoggiato su una piattaforma che trasla con accelerazione $\vec{a}_t$: ci si pone nel riferimento della piattaforma, in cui il piano di appoggio è fermo, e si aggiunge a ogni corpo la forza apparente $-m\vec{a}_t$ oltre alle forze reali.

### Errori tipici

- Scrivere la forza apparente con il segno sbagliato: $\vec{F}_{\text{app}} = -m\vec{a}_T$ (o $-m\vec{a}_{O'}$ nel caso puramente traslatorio), mai $+m\vec{a}_T$; il segno meno è essenziale e va sempre controllato.

- Introdurre la forza centrifuga anche nel riferimento inerziale del laboratorio: in tale riferimento esistono solo le forze vere, e l'accelerazione centripeta compare a secondo membro dell'equazione $\vec{F} = m\vec{a}$, non come forza aggiuntiva.

- Dimenticare il termine di Coriolis quando la velocità relativa ha una componente perpendicolare all'asse di rotazione: la forza di Coriolis non è presente per un corpo fermo rispetto al riferimento rotante, e si annulla anche quando $\vec{v}'$ è parallela a $\vec{\omega}$, poiché il loro prodotto vettoriale è nullo; compare invece non appena $\vec{v}'$ possiede una componente ortogonale a $\vec{\omega}$.

- Confondere il riferimento in cui si scrive l'equazione: occorre sempre dichiarare esplicitamente se si sta lavorando nel riferimento inerziale (solo forze vere) o in quello non inerziale (forze vere più forze apparenti), per evitare di sommare due volte lo stesso effetto.

- Applicare meccanicamente formule del pendolo o del piano inclinato in quiete dimenticando di sostituire $g$ con la gravità efficace $g_{\text{eff}} = \sqrt{g^2+A^2}$ quando il sistema è accelerato orizzontalmente.

## p4 | La Terra come riferimento

La Terra non è un sistema di riferimento inerziale: ruota attorno al proprio asse con velocità angolare $\omega$ costante in modulo e direzione (un giro in circa $23\,\text{h}\,56\,\text{min}$, quindi $\omega \approx 7,29\cdot 10^{-5}\ \text{rad/s}$), e il suo centro si muove di moto non rettilineo attorno al Sole. In tutti i problemi di meccanica svolti finora si è trascurato questo effetto, trattando il laboratorio terrestre come un riferimento inerziale: ora si vuole stimare l'errore commesso con tale approssimazione, applicando le decomposizioni $\vec{a} = \vec{a}' + \vec{a}_T + \vec{a}_C$ e $m\vec{a}' = \vec{F} - m\vec{a}_T - m\vec{a}_C$ già introdotte per i moti relativi e le forze apparenti.

### Peso apparente e gravità efficace

Si fissi un riferimento solidale con la superficie terrestre, con origine O' in un punto a latitudine $\phi$: poiché O' è trascinato dalla rotazione terrestre attorno al centro della Terra, esso possiede un'accelerazione $\vec{a}_{O'} = \vec{\omega}\times(\vec{\omega}\times\vec{R})$, dove $\vec{R}$ è il vettore che va dall'asse di rotazione a O', di modulo $R_T\cos\phi$ (essendo $R_T$ il raggio terrestre). Si noti che $\vec a_{O'}$ non è il termine $\vec\omega\times(\vec\omega\times\vec r\,')$ del teorema delle accelerazioni relative, che per un corpo fermo in O' (dove $\vec r\,'=\vec 0$) si annullerebbe: $\vec a_{O'}$ è invece l'accelerazione dell'origine stessa del riferimento mobile, cioè la sua accelerazione centripeta nel moto circolare che O', insieme a tutta la superficie terrestre, compie attorno all'asse di rotazione, e non dipende dunque dall'annullarsi o meno di $\vec r\,'$. La forza di gravitazione universale esercitata dalla Terra su un corpo di massa $m$ fermo in O' definisce l'accelerazione di gravità "vera" $\vec{g}_0$, diretta verso il centro della Terra. Applicando il teorema delle accelerazioni relative a un tale corpo, per cui $\vec{r}\,'=\vec{0}$ e $\vec{v}\,'=\vec{0}$, l'osservatore solidale con la superficie misura, oltre a $\vec{g}_0$, una forza apparente dovuta esclusivamente al trascinamento dell'origine O', cioè al termine $-m\vec a_{O'}$:

$$\vec{F}_{\text{centr}} = -m\vec{a}_{O'} = -m\vec{\omega}\times(\vec{\omega}\times\vec{R})$$

diretta verso l'esterno dell'asse di rotazione, con modulo $m\omega^2 R_T\cos\phi$, dove $R_T\cos\phi = |\vec{R}|$, cioè la distanza di O' dall'asse di rotazione. L'accelerazione di gravità misurata localmente, detta accelerazione di gravità efficace, è dunque la somma vettoriale di $\vec{g}_0$ e del termine $-\vec{a}_{O'}$, in perfetta analogia con la composizione $\vec{g}_{\text{eff}} = \vec{g} - \vec{A}$ già incontrata per un vagone accelerato:

$$\vec{g}_{\text{eff}} = \vec{g}_0 - \vec{a}_{O'} = \vec{g}_0 - \vec{\omega}\times(\vec{\omega}\times\vec{R})$$

Il contributo centrifugo è massimo all'equatore ($\phi = 0$, dove vale circa $\omega^2 R_T \approx 0,034\ \text{m/s}^2$, meno dello $0,4\%$ di $g$) e nullo ai poli ($\phi = \pm 90°$), dove l'asse di rotazione passa per il punto di osservazione. Per questo motivo il modulo della gravità efficace è leggermente minore all'equatore che ai poli, e la sua direzione non coincide esattamente con quella verso il centro della Terra, ma è leggermente deviata verso l'equatore. La forza esercitata dal sostegno sul corpo, misurata da una bilancia o da un dinamometro, ha verso opposto a $\vec{g}_{\text{eff}}$; la deviazione della gravità efficace è nulla esattamente ai poli e all'equatore, dove per simmetria il termine centrifugo è parallelo (o nullo rispetto) a $\vec{g}_0$.

:::image{src="assets/d33fbe37-riduzione-peso-latitudine.svg" alt="Riduzione relativa della gravità efficace in funzione della latitudine" caption="Fig. 6.5 — Andamento qualitativo del termine centrifugo relativo in funzione della latitudine"}
:::

### Deviazione dei gravi verso est

Il secondo effetto, più sottile, è dovuto all’accelerazione di Coriolis $\vec{a}_{Co} = 2\vec{\omega}\times\vec{v}'$, che compare quando $\vec{v}'$ ha una componente perpendicolare a $\vec{\omega}$. Si introduce in O' una terna locale destrorsa formata da un asse verticale $\hat{u}_z'$ (approssimato con la direzione radiale uscente), un asse $\hat{u}_y'$ orientato verso nord (orizzontale, nel piano meridiano) e un asse $\hat{u}_x'$ orientato verso est (orizzontale, tangente al parallelo). In questa terna la velocità angolare terrestre, che è parallela all'asse di rotazione, si proietta come $\vec{\omega} = \omega\cos\phi\,\hat{u}_y' + \omega\sin\phi\,\hat{u}_z'$, priva di componente lungo est. Il simbolo $\vec{g}$ che compare nella formula seguente indica l'accelerazione di gravità efficace $\vec{g}_{\text{eff}}$ già introdotta, che tiene conto della correzione centrifuga valutata in O'. Per un corpo che cade verticalmente (quindi con $\vec{v}\,'$ diretta lungo $-\hat{u}_z'$, inizialmente senza componente verso est) con velocità relativa di modulo $v'$, l'accelerazione misurata sulla Terra si scrive, trascurando l'ulteriore e piccolissima correzione centrifuga dovuta allo spostamento del corpo rispetto a O' durante la caduta,

$$\vec{a}' = \vec{g} + 2\omega v'\cos\phi\,\hat{u}_x'$$

dove il termine in $2\omega v'\cos\phi$ è l'accelerazione di Coriolis, diretta lungo $+\hat{u}_x'$ (cioè verso est, essendo $\hat{u}_y'$ stato definito verso nord), responsabile di una caduta dei gravi deviata verso est rispetto alla verticale, come riportano le fonti del corso.

**Esempio 6.3** (deviazione verso est di un grave in caduta libera). Un corpo viene lasciato cadere da fermo da un'altezza $h$ a latitudine $\phi$. Si vuole stimare lo spostamento verso est accumulato durante la caduta, trascurando la resistenza dell'aria e il piccolo contributo centrifugo rispetto a quello di Coriolis (termine di ordine superiore).

In prima approssimazione la velocità relativa resta quella del moto verticale non perturbato, $v'(t) \approx g t$ (diretta verso il basso), così che l'accelerazione orizzontale verso est vale

$$a_x'(t) \approx 2\omega g t \cos\phi$$

Integrando due volte con condizioni iniziali nulle si ottiene

$$v_x'(t) = \omega g t^2 \cos\phi, \qquad x'(t) = \frac{1}{3}\omega g t^3 \cos\phi$$

Il tempo di caduta da un'altezza $h$ è $t^\ast = \sqrt{2h/g}$ (richiamando la legge oraria del moto verticale, [formula (2.9)](ref:formula/2.9)), quindi la deviazione totale verso est risulta

$$x'(t^\ast) = \frac{1}{3}\omega\cos\phi\sqrt{\frac{8h^3}{g}}$$

Per $h = 100\ \text{m}$ e $\phi = 45°$ si ha $t^\ast = \sqrt{2\cdot 100/9,81}\ \text{s} \approx 4,52\ \text{s}$ e

$$x'(t^\ast) \approx \frac{1}{3}\cdot 7,29\cdot 10^{-5}\ \text{s}^{-1}\cdot \cos 45° \cdot \sqrt{\frac{8\cdot (100\ \text{m})^3}{9,81\ \text{m/s}^2}} \approx 1,6\ \text{cm}$$

:::image{src="assets/d33fbe37-deviazione-est-caduta.svg" alt="Grafico della deviazione verso est in funzione del tempo durante una caduta libera di 100 metri a latitudine 45 gradi" caption="Fig. 6.6 — Deviazione verso est x'(t) durante la caduta libera dell'esempio (h = 100 m, φ = 45°): la crescita è cubica nel tempo e raggiunge circa 1,6 cm all'istante di impatto t* ≈ 4,52 s"}
:::

un effetto piccolissimo ma non nullo, coerente con l'ordine di grandezza di $\omega$: nessun esperimento di laboratorio ordinario lo rivela, ma esso è misurabile con strumenti di precisione ed è la stessa causa fisica della deviazione dei venti e delle correnti oceaniche su scala planetaria (effetto Coriolis). Il controllo dimensionale conferma $\lbrack \omega\rbrack \lbrack g\rbrack \lbrack t^3\rbrack  = \text{s}^{-1}\cdot\text{m/s}^2\cdot\text{s}^3 = \text{m}$, coerente con una lunghezza.

**Errore tipico 6.3.** Un errore frequente consiste nel trascurare completamente gli effetti della rotazione terrestre anche quando l'esercizio richiede esplicitamente una stima quantitativa (confondendo "piccolo" con "nullo"), oppure nel sommare scalarmente i moduli di $\vec{g}_0$ e del termine centrifugo senza tenerne conto come vettori con direzioni diverse a latitudine intermedia, un errore analogo a quello già segnalato per la scomposizione della forza peso sul piano inclinato. Un secondo errore tipico è introdurre la forza di Coriolis anche quando si risolve il problema nel riferimento inerziale (ad esempio un osservatore fuori dalla Terra): le forze apparenti compaiono solo nelle equazioni scritte nel riferimento non inerziale.
