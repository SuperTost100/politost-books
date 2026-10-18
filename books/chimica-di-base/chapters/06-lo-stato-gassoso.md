---
chapter: 6
title: Lo stato gassoso
---

## p1 | Introduzione

Capire lo stato gassoso permette di collegare misure osservabili, come pressione, volume e temperatura, al numero di particelle e alle trasformazioni chimiche. Le leggi dei gas ideali offrono strumenti per calcolare quantità di sostanza e volumi nelle reazioni; lo studio delle miscele chiarisce come ciascun gas contribuisca alla pressione totale. La teoria cinetica spiega queste relazioni attraverso il moto delle particelle, mentre il confronto con i gas reali mostra quando le approssimazioni ideali non sono più sufficienti.

Per affrontare il capitolo serve saper svolgere calcoli stechiometrici, convertire le unità di misura e riconoscere il reagente limitante. Sarà inoltre utile prestare attenzione alla temperatura assoluta: nei calcoli con i gas si esprime in kelvin.

Al termine saprai applicare l’equazione di stato per ricavare una variabile incognita e usare i volumi gassosi nei problemi stechiometrici. Potrai determinare la massa molare da una misura di densità, calcolare pressioni parziali e frazioni molari nelle miscele, e interpretare effusione e diffusione con la legge di Graham. Saprai infine collegare la velocità delle particelle alla temperatura, valutare le deviazioni dall’idealità tramite il fattore di comprimibilità e stimare il comportamento di un gas reale con l’equazione di van der Waals.

## p2 | Pressione e leggi dei gas ideali

Lo stato gassoso è il più semplice da descrivere quantitativamente perché le particelle che costituiscono un gas interagiscono debolmente tra loro: a differenza di liquidi e solidi, un gas occupa sempre tutto il volume a disposizione e si mescola in qualsiasi proporzione con altri gas. Questa sezione fissa il linguaggio con cui si misura la pressione e stabilisce le leggi empiriche che legano pressione, volume, temperatura e quantità di sostanza di un gas, riunendole nell'equazione di stato dei gas ideali, strumento che verrà usato ripetutamente anche nei calcoli stechiometrici.

### Pressione e sua misura

**Definizione 6.1** (Pressione). La pressione $P$ di un fluido su una superficie è il rapporto tra la forza $F$ che agisce ortogonalmente su quella superficie e l'area $A$ della superficie stessa

$$P = \frac{F}{A}$$

Nel Sistema Internazionale l'unità di pressione è il pascal, definito come $1\ \text{Pa} = 1\ \text{N}/\text{m}^2$; trattandosi di un'unità molto piccola, in chimica si usano più spesso l'atmosfera, il millimetro di mercurio (o torr) e il bar. Le relazioni di conversione sono

$$1\ \text{atm} = 101\,325\ \text{Pa}, \qquad 1\ \text{mmHg} = \frac{1}{760}\ \text{atm}, \qquad 1\ \text{bar} = 10^5\ \text{Pa}$$

equivalentemente, al livello del mare $1\ \text{atm}$ corrisponde esattamente a una colonna di mercurio alta $760\ \text{mm}$, cioè $1\ \text{atm} = 760\ \text{mmHg}$. L'atmosfera corrisponde, per definizione storica, alla pressione media dell'aria al livello del mare.

La pressione atmosferica si misura con il barometro, inventato da Evangelista Torricelli nel 1643: un tubo di vetro lungo circa un metro, chiuso a un'estremità, riempito di mercurio e capovolto in una vaschetta di mercurio. L'aria esterna spinge il mercurio nel tubo fino a un'altezza che, al livello del mare e in condizioni ordinarie, si stabilizza a $760\ \text{mm}$; il barometro è di fatto un manometro differenziale in cui il riferimento è il vuoto assoluto. La pressione di un gas contenuto in un recipiente si misura invece con un manometro, che può essere a tubo chiuso (il vuoto fa da riferimento, come nel barometro) o a tubo aperto (il riferimento è la pressione atmosferica). Nel manometro a tubo chiuso, la differenza fra le altezze delle colonne di mercurio corrisponde alla pressione del gas; in quello a tubo aperto corrisponde alla differenza tra la pressione del gas e quella atmosferica: la pressione del gas è quindi la somma delle due pressioni se il livello del mercurio è più basso nel ramo collegato al recipiente, e la loro differenza se è più alto.

Nei calcoli sui gas la temperatura va sempre espressa in kelvin, secondo la relazione

$$T(\text{K}) = t(^\circ\text{C}) + 273{,}15$$

già introdotta come [formula (1.1)](ref:formula/1.1): lo zero assoluto, $0\ \text{K}$, corrisponde a $-273{,}15\ ^\circ\text{C}$ ed è la temperatura a cui, idealmente, il volume di un gas si annullerebbe.

**Errore tipico 6.1**. Dimenticare la conversione in kelvin è l'errore più frequente nei problemi sui gas: tutte le leggi che seguono usano la temperatura assoluta, non quella in gradi Celsius, perché solo $T$ in kelvin è direttamente proporzionale all'energia cinetica media delle particelle.

### Leggi empiriche ed equazione di stato

Un gas ideale (o perfetto) è un modello teorico in cui le particelle sono puntiformi, non hanno volume proprio, non esercitano forze di attrazione o repulsione reciproca e urtano fra loro e con le pareti del recipiente in modo perfettamente elastico, senza perdita di energia cinetica. Nessun gas reale soddisfa esattamente queste ipotesi, ma molti gas semplici (N$_2$, O$_2$, gas nobili) le approssimano bene ad alta temperatura e bassa pressione, condizioni in cui le particelle sono in media lontane tra loro.

Lo stato di una quantità fissata di gas è descritto da quattro variabili: pressione $P$, volume $V$, temperatura assoluta $T$ e numero di moli $n$. Tra la metà del Seicento e l'inizio dell'Ottocento furono stabilite sperimentalmente quattro leggi che legano a due a due queste variabili, mantenendo costanti le altre due.

**Legge di Boyle** (isoterme). A temperatura e numero di moli costanti, il volume di un gas è inversamente proporzionale alla sua pressione:

:::formula{id="6.1" label="Legge di Boyle"}
$$P \cdot V = k \qquad \Longrightarrow \qquad P_1 V_1 = P_2 V_2 \quad (T, n \text{ costanti})$$
:::

**Legge di Charles** (isobare). A pressione e numero di moli costanti, il volume di un gas è direttamente proporzionale alla sua temperatura assoluta:

:::formula{id="6.2" label="Legge di Charles"}
$$\frac{V}{T} = k \qquad \Longrightarrow \qquad \frac{V_1}{T_1} = \frac{V_2}{T_2} \quad (P, n \text{ costanti})$$
:::

**Legge di Gay-Lussac** (isocore). A volume e numero di moli costanti, la pressione di un gas è direttamente proporzionale alla sua temperatura assoluta:

:::formula{id="6.3" label="Legge di Gay-Lussac"}
$$\frac{P}{T} = k \qquad \Longrightarrow \qquad \frac{P_1}{T_1} = \frac{P_2}{T_2} \quad (V, n \text{ costanti})$$
:::

**Principio di Avogadro**. A temperatura e pressione costanti, il volume di un gas è direttamente proporzionale al numero di moli presenti:

:::formula{id="6.4" label="Principio di Avogadro"}
$$\frac{V}{n} = k \quad (P, T \text{ costanti})$$
:::

In forma equivalente: a parità di temperatura e pressione, volumi uguali di gas diversi contengono lo stesso numero di particelle. Combinando le quattro leggi empiriche si ottiene un'unica relazione che lega simultaneamente tutte le variabili di stato, detta equazione di stato dei gas ideali:

:::formula{id="6.5" label="Equazione di stato dei gas ideali"}
$$P V = n R T$$
:::

dove $R$ è la costante universale dei gas. L'analisi dimensionale, con $P$ in atm e $V$ in L, impone $R = 0{,}08206\ \text{L}\cdot\text{atm}\,\text{mol}^{-1}\,\text{K}^{-1}$, spesso arrotondato a $0{,}0821$; usando $P$ in Pa e $V$ in m$^3$ si ha invece $R = 8{,}314\ \text{J}/(\text{mol}\cdot\text{K})$. Occorre sempre dichiarare quale valore di $R$ si impiega e verificare che le unità di $P$, $V$ e $T$ siano coerenti con quel valore.

Le condizioni normali di temperatura e pressione (NTP, spesso chiamate anche STP) sono $0\ ^\circ\text{C}$ e $1\ \text{atm}$: in queste condizioni una mole di qualunque gas ideale occupa lo stesso volume, detto volume molare normale, pari a $22{,}4\ \text{L}$, indipendentemente dalla natura chimica del gas.

I problemi sui gas si presentano in due forme tipiche. Nel primo caso una variabile cambia e si chiede l'effetto su un'altra, mentre due restano costanti: occorre riconoscere quale delle quattro leggi empiriche si applica e impostare il rapporto tra stato iniziale e stato finale. Nel secondo caso si conoscono tre delle quattro variabili $P, V, n, T$ in un'unica condizione, e si usa direttamente l'equazione di stato per ricavare la quarta.

:::image{src="assets/72b86fdb-isoterme-boyle.svg" alt="Grafico di pressione contro volume per isoterme a diverse temperature" caption="Fig. 6.1 — Isoterme di Boyle: a temperatura costante P e V sono inversamente proporzionali; isoterme a T più alta si trovano più in alto nel piano P-V"}
:::

**Esempio svolto 6.1**. Un volume d'aria occupa $24{,}8\ \text{cm}^3$ alla pressione di $1{,}12\ \text{atm}$; se la pressione aumenta a $2{,}64\ \text{atm}$, calcolare il nuovo volume.

*Dati*: $P_1 = 1{,}12\ \text{atm}$, $V_1 = 24{,}8\ \text{cm}^3$, $P_2 = 2{,}64\ \text{atm}$; $T$ e $n$ costanti.

*Strategia*: due variabili ($P$, $V$) cambiano mantenendo $T$ e $n$ costanti, quindi si applica la {{formula:6.1}}.

*Calcolo*:

$$P_1 V_1 = P_2 V_2 \quad \Longrightarrow \quad V_2 = \frac{P_1 V_1}{P_2} = \frac{1{,}12 \times 24{,}8}{2{,}64} = 10{,}5\ \text{cm}^3 = 1{,}05 \times 10^{-2}\ \text{L}$$

*Verifica*: la pressione è aumentata di un fattore circa $2{,}4$ e il volume si è ridotto di un fattore circa $2{,}4$, come richiesto dalla proporzionalità inversa.

Un secondo esempio mostra l'uso diretto dell'equazione di stato. Un recipiente di volume $438\ \text{L}$ contiene $0{,}885\ \text{kg}$ di ossigeno a $21\ ^\circ\text{C}$; si vuole la pressione.

*Dati*: $V = 438\ \text{L}$, $m(\text{O}_2) = 885\ \text{g}$, $M(\text{O}_2) = 32{,}00\ \text{g/mol}$, $T = 21 + 273{,}15 = 294{,}15\ \text{K}$.

*Strategia*: si conoscono tre variabili ($V$, $n$ ricavabile da $m/M$, $T$) e manca $P$: si usa l'equazione di stato riscritta come $P = nRT/V$.

*Calcolo*:

$$n = \frac{885}{32{,}00} = 27{,}7\ \text{mol}, \qquad P = \frac{n R T}{V} = \frac{27{,}7 \times 0{,}08206 \times 294{,}15}{438} = 1{,}53\ \text{atm}$$

### Gas e stechiometria

Quando un gas compare come reagente o prodotto in una reazione chimica, l'equazione di stato permette di convertire il suo volume in moli (e viceversa) esattamente come si farebbe con la massa, inserendosi nella procedura in quattro passi già introdotta per i [calcoli stechiometrici](ref:chapter/4#p4): bilanciare la reazione, convertire in moli la quantità nota (usando $n = PV/(RT)$ se il dato è in volume, pressione e temperatura), applicare il [formula (4.2)](ref:formula/4.2), riconvertire nell'unità richiesta.

**Esempio svolto 6.2**. Il potassio reagisce con il cloro secondo $2\ \text{K}_{(s)} + \text{Cl}_{2(g)} \rightarrow 2\ \text{KCl}_{(s)}$. Calcolare la massa di KCl prodotta quando $5{,}25\ \text{L}$ di cloro, mantenuti a $293\ \text{K}$ e $0{,}950\ \text{atm}$, reagiscono con $17{,}0\ \text{g}$ di potassio.

*Dati*: $V(\text{Cl}_2) = 5{,}25\ \text{L}$, $T = 293\ \text{K}$, $P = 0{,}950\ \text{atm}$, $m(\text{K}) = 17{,}0\ \text{g}$, $M(\text{K}) = 39{,}10\ \text{g/mol}$, $M(\text{KCl}) = 74{,}55\ \text{g/mol}$.

*Strategia*: si convertono entrambi i reagenti in moli, si individua il reagente limitante con il criterio già visto nella sezione sui [calcoli stechiometrici](ref:chapter/4#p4), poi si passa alla massa di prodotto.

*Calcolo*: le moli di cloro si ricavano dall'equazione di stato,

$$n(\text{Cl}_2) = \frac{PV}{RT} = \frac{0{,}950 \times 5{,}25}{0{,}08206 \times 293} = 0{,}2075\ \text{mol}$$

le moli di potassio sono $n(\text{K}) = 17{,}0 / 39{,}10 = 0{,}4348\ \text{mol}$. Il rapporto stechiometrico richiede $2\ \text{mol}$ di K per $1\ \text{mol}$ di Cl$_2$: dato che $0{,}4348 / 2 = 0{,}2174\ \text{mol}$ di Cl$_2$ equivalente sarebbero necessarie contro le $0{,}2075\ \text{mol}$ disponibili, il cloro è il reagente limitante. Si calcolano quindi le moli e la massa di KCl a partire da Cl$_2$:

$$n(\text{KCl}) = 2 \times n(\text{Cl}_2) = 2 \times 0{,}2075 = 0{,}4150\ \text{mol}$$

$$m(\text{KCl}) = n(\text{KCl}) \times M(\text{KCl}) = 0{,}4150 \times 74{,}55 = 30{,}9\ \text{g}$$

*Verifica*: il risultato coincide con il valore riportato dalla fonte, $30{,}9\ \text{g}$.

**Errore tipico 6.2**. In questi problemi un errore ricorrente è usare direttamente il volume del gas come se fosse proporzionale alle moli senza prima verificare che temperatura e pressione siano effettivamente quelle note: il volume di un gas da solo non determina le moli, serve sempre l'equazione di stato completa (a meno che non ci si trovi esattamente in condizioni normali, dove si può usare il {{formula:6.5}} con il volume molare di $22{,}4\ \text{L/mol}$). Un secondo errore tipico, quando compaiono due reagenti gassosi o un reagente gassoso e uno solido, è dimenticare di verificare il reagente limitante prima di calcolare il prodotto, procedimento già discusso nella sezione sui [calcoli stechiometrici](ref:chapter/4#p4).

## p3 | Densità, massa molare e miscele gassose

### Densità e massa molare di un gas

L'equazione di stato dei gas ideali, già introdotta in [Pressione e leggi dei gas ideali](ref:chapter/6#p2), permette di collegare la densità di un gas alla sua massa molare. Poiché una mole di qualunque gas occupa lo stesso volume alle stesse condizioni di temperatura e pressione, le differenze di densità tra gas diversi dipendono esclusivamente dalle loro masse molari diverse.

Partendo da $PV = nRT$ e sostituendo $n = \frac{m}{M}$ (con $m$ massa del campione e $M$ massa molare, notazione fissata in [Masse atomiche, mole e massa molare](ref:chapter/2#p5)), si ottiene

$$P V = \frac{m}{M} R T \quad \Longrightarrow \quad \frac{m}{V} = \frac{P \cdot M}{R T}.$$

Poiché $\rho = \frac{m}{V}$, la densità di un gas ideale è data da

:::formula{id="6.6" label="Densità di un gas ideale"}
$$\rho = \frac{P \cdot M}{R T}$$
:::

Questa relazione mostra che, a parità di temperatura, la densità di un gas è direttamente proporzionale alla pressione e alla sua massa molare, e inversamente proporzionale alla temperatura assoluta. Per questo motivo un gas caldo è meno denso di un gas freddo alla stessa pressione: è il principio su cui si basa il volo delle mongolfiere.

:::image{src="assets/f30e9ef5-densita-aria-vs-temperatura.svg" alt="Grafico della densità dell'aria che diminuisce in modo iperbolico con l'aumentare della temperatura, a pressione costante" caption="Fig. 6.2 — Densità dell'aria (massa molare media circa 29 g/mol) in funzione della temperatura assoluta, a pressione costante di 1 atm: a temperatura più alta la densità diminuisce, come previsto da ρ = pM/(RT)."}
:::

Invertendo la relazione precedente si ricava la massa molare di un gas a partire da una misura sperimentale della sua densità, della pressione e della temperatura:

:::formula{id="6.7" label="Massa molare da densità, pressione e temperatura"}
$$M = \frac{\rho \cdot R \cdot T}{P}$$
:::

Questa è una delle procedure sperimentali più comuni per determinare la massa molare di una sostanza gassosa o facilmente vaporizzabile: si misura la massa di un volume noto di gas a $T$ e $P$ note, si calcola $\rho = m/V$ e si applica la formula precedente.

**Esempio svolto 6.3** (massa molare da una misura di densità)

Un campione gassoso occupa un volume di 2,00 L a 1,50 atm e 27 °C; la sua massa è 4,20 g. Si vuole determinare la massa molare del gas.

1. Dati: $V = 2,00\ \text{L}$, $P = 1,50\ \text{atm}$, $t = 27\ \text{°C}$, $m = 4,20\ \text{g}$.
2. Strategia: si calcola prima la densità $\rho = m/V$, poi si applica la formula {{formula:6.7}} usando $R = 0,08206\ \text{L·atm/(mol·K)}$ e convertendo la temperatura in kelvin ([formula (1.1)](ref:formula/1.1)): $T = 27 + 273,15 = 300,15\ \text{K}$.
3. Calcolo:

$$\rho = \frac{4,20\ \text{g}}{2,00\ \text{L}} = 2,10\ \text{g/L}$$

$$M = \frac{\rho \cdot R \cdot T}{P} = \frac{2,10 \cdot 0,08206 \cdot 300,15}{1,50} = 34,5\ \text{g/mol}$$

4. Verifica: il valore è ragionevole per un gas leggero (confrontabile con $\text{H}_2\text{S}$, $M = 34,08\ \text{g/mol}$); sostituendo $M$, $P$, $T$ nella formula della densità si ritrova $\rho = 2,10\ \text{g/L}$, coerente con il dato di partenza.

**Errore tipico 6.3**

Un errore frequente è usare la temperatura in gradi Celsius al posto della temperatura assoluta in kelvin: poiché la dipendenza del volume (e quindi della densità) da $T$ è lineare solo in kelvin, dimenticare la conversione introduce un errore sistematico nel risultato finale.

### Miscele gassose e legge di Dalton

Tutti i gas si mescolano spontaneamente in qualsiasi proporzione, grazie al moto casuale delle loro particelle, dando quasi sempre luogo a miscele omogenee. L'equazione di stato resta valida anche per una miscela gassosa, per due motivi: i gas si mescolano in modo omogeneo in qualunque rapporto, e ciascun gas della miscela si comporta come se fosse l'unico presente nel recipiente, a meno che i gas non reagiscano chimicamente tra loro.

**Definizione 6.2** (pressione parziale). In una miscela di gas, la pressione parziale $p_i$ di un componente $i$ è la pressione che quel gas eserciterebbe se occupasse da solo l'intero volume del recipiente, alla stessa temperatura della miscela. Per un gas ideale essa si calcola con l'equazione di stato applicata al solo componente $i$:

$$p_i = \frac{n_i \cdot R \cdot T}{V}$$

dove $n_i$ sono le moli del componente $i$ e $V$ è il volume totale occupato dalla miscela.

**Teorema 6.1** (legge di Dalton delle pressioni parziali). In una miscela di gas ideali non reagenti tra loro, mantenuta a volume e temperatura costanti, la pressione totale $P$ è la somma delle pressioni parziali dei singoli componenti:

:::formula{id="6.8" label="Legge di Dalton delle pressioni parziali"}
$$P = \sum_i p_i$$
:::

Le ipotesi richieste sono quindi due: i gas devono essere assimilabili a gas ideali, e non devono reagire chimicamente tra loro (se avviene una reazione, o una dissociazione gassosa, il numero di moli di ciascuna specie cambia nel tempo e la legge va applicata separatamente a ogni istante, non tra stato iniziale e finale complessivi).

Ciascun componente di una miscela gassosa contribuisce al numero totale di moli $n_{tot}$ con una frazione, detta **frazione molare** del componente $i$:

:::formula{id="6.9" label="Frazione molare di un componente in miscela gassosa"}
$$x_i = \frac{n_i}{n_{tot}}$$
:::

I valori di $x_i$ sono sempre compresi tra 0 e 1, e la somma delle frazioni molari di tutti i componenti di una miscela è sempre uguale a 1. Per un gas ideale, la percentuale in volume di un componente coincide numericamente con la sua percentuale in moli.

Poiché, a $T$ e $V$ fissati, la pressione di ciascun componente è proporzionale al suo numero di moli, la legge di Dalton si può riscrivere anche in funzione delle frazioni molari:

:::formula{id="6.10" label="Pressione parziale in funzione della frazione molare"}
$$p_i = x_i \cdot P$$
:::

Questa seconda forma è spesso più rapida da usare quando sono note la composizione percentuale (o le frazioni molari) e la pressione totale della miscela, mentre la forma $p_i = n_i R T / V$ è preferibile quando sono note le moli di ciascun gas e il volume del recipiente.

**Esempio svolto 6.4** (pressione parziale in una miscela gassosa)

Una miscela gassosa in un recipiente da 5,0 L, mantenuto a 45 °C, contiene 11,7 g di idrogeno, 0,39 mol di anidride carbonica e 7,28 g di azoto. Si vuole calcolare la pressione parziale dell'azoto.

1. Dati: $m_{\text{N}_2} = 7,28\ \text{g}$, $V = 5,0\ \text{L}$, $t = 45\ \text{°C}$.
2. Strategia: conviene calcolare direttamente le moli di azoto e applicare $p_i = n_i R T / V$, poiché non è richiesta la pressione totale della miscela. In alternativa si potrebbero calcolare le moli di tutti i componenti, la pressione totale con {{formula:6.8}} e poi usare {{formula:6.10}}: i due metodi sono equivalenti.
3. Calcolo: le moli di azoto si ottengono con [formula (2.4)](ref:formula/2.4),

$$n_{\text{N}_2} = \frac{7,28\ \text{g}}{28,00\ \text{g/mol}} = 0,260\ \text{mol}$$

la temperatura assoluta è $T = 45 + 273,15 = 318,15\ \text{K}$, quindi

$$p_{\text{N}_2} = \frac{n_{\text{N}_2} \cdot R \cdot T}{V} = \frac{0,260 \cdot 0,08206 \cdot 318,15}{5,0} = 1,4\ \text{atm}$$

4. Verifica: le unità sono coerenti ($\text{mol} \cdot \text{L·atm/(mol·K)} \cdot \text{K} / \text{L} = \text{atm}$); il valore ottenuto è una frazione plausibile della pressione totale della miscela, che risulterebbe più alta includendo anche idrogeno e anidride carbonica.

**Errore tipico 6.4**

Uno sbaglio comune è confondere la frazione molare con la frazione in massa: $x_i = n_i/n_{tot}$ richiede sempre di lavorare con le moli, non con le masse dei singoli componenti; un secondo errore è applicare la legge di Dalton a miscele in cui i gas reagiscono tra loro (per esempio in presenza di dissociazione gassosa), dove il numero di moli totale non è costante e l'equazione di stato va applicata con cautela istante per istante.

## p4 | Teoria cinetica, effusione e diffusione

La termodinamica dei gas descritta nelle sezioni precedenti tratta pressione, volume e temperatura come grandezze macroscopiche, misurabili con un manometro o un termometro, senza chiedersi cosa accada alle singole particelle. La teoria cinetica dei gas è la parte della meccanica statistica che collega queste grandezze macroscopiche al comportamento dinamico delle particelle, interpretando a livello molecolare due fenomeni fondamentali: la pressione esercitata da una massa gassosa e la sua temperatura. Il punto di partenza è che, pur valendo in linea di principio le leggi della meccanica classica per ciascuna particella, è del tutto impraticabile risolvere individualmente le equazioni del moto per ciascuna delle $6{,}022\times10^{23}$ particelle presenti anche in una piccola quantità di gas; si ragiona invece sui valori medi delle grandezze dinamiche (velocità, energia cinetica) dell'insieme delle particelle.

### Postulati della teoria cinetica

**Definizione 6.3** (postulati del gas ideale secondo la teoria cinetica).
Il modello del gas ideale, già usato nella trattazione delle leggi dei gas (vedi [Pressione e leggi dei gas ideali](ref:chapter/6#p2)), si fonda su quattro ipotesi sul comportamento microscopico delle particelle.

1. **Volume delle particelle.** Un gas è costituito da un numero enorme di particelle (atomi o molecole); il volume di ciascuna particella è trascurabile rispetto al volume del recipiente, cioè le particelle hanno massa ma volume nullo. La distanza media tra due urti successivi (cammino libero medio) è molto maggiore delle dimensioni delle particelle stesse.
2. **Moto delle particelle.** Le particelle sono in moto rettilineo, caotico e continuo, interrotto solo dagli urti contro le pareti del recipiente o contro altre particelle. L'energia cinetica media è proporzionale alla temperatura assoluta del gas.
3. **Urti elastici.** Gli urti tra le particelle, e tra le particelle e le pareti, sono perfettamente elastici: le particelle collidenti si scambiano energia, ma non ne perdono per attrito, cosicché l'energia cinetica totale del sistema resta costante.
4. **Assenza di interazioni.** Tra le particelle non si instaura alcuna forza di attrazione o repulsione.

Da questi postulati discende un risultato centrale della teoria: a una data temperatura, tutti i gas possiedono la stessa energia cinetica media, indipendentemente dalla loro massa molare. La pressione misurata macroscopicamente è l'effetto, somma su un numero enorme di urti, della forza che ciascuna particella esercita sulla parete al momento dell'urto; dipende quindi dall'energia cinetica media delle particelle e dalla loro concentrazione (numero di particelle per unità di volume). In questo modo la teoria cinetica fornisce un'interpretazione molecolare della legge di Boyle: a temperatura costante, comprimere il gas aumenta la frequenza degli urti sulla parete a parità di energia cinetica media, e quindi la pressione.

### Energia cinetica e velocità quadratica media

Per una singola particella di massa $m$ e velocità istantanea $v$, l'energia cinetica è $E_k = \tfrac{1}{2}mv^2$; ma, poiché ogni urto cambia la velocità della particella, è utile considerare un valore mediato nel tempo su tutte le particelle del gas. Si definisce **velocità quadratica media** $\bar{u}$ la radice quadrata della media dei quadrati delle velocità delle particelle, $\bar{u} = \sqrt{\overline{v^2}}$; una particella che si muovesse esattamente alla velocità $\bar{u}$ avrebbe l'energia cinetica media dell'insieme.

:::formula{id="6.11" label="Energia cinetica media per mole di gas"}
$$E_k = \frac{1}{2}M\,\bar{u}^2 = \frac{3}{2}RT$$
:::

dove $M$ è la massa molare del gas (in kg/mol se si vuole $E_k$ in joule) e $R$ la costante dei gas. Uguagliando i due membri si ottiene la velocità quadratica media.

:::formula{id="6.12" label="Velocità quadratica media"}
$$\bar{u} = \sqrt{\frac{3RT}{M}}$$
:::

Questa relazione mostra esplicitamente che, a parità di temperatura, $\bar{u}$ non è la stessa per tutti i gas: gas con $M$ più piccola hanno $\bar{u}$ più grande, perché l'energia cinetica media $\tfrac{1}{2}M\bar{u}^2$ deve restare la stessa per ogni gas alla stessa temperatura. In termini di singola particella, introducendo la costante di Boltzmann $k_B = R/N_A = 1{,}381\times10^{-23}\ \text{J/K}$, l'energia cinetica media per particella si scrive in modo equivalente come segue.

:::formula{id="6.13" label="Energia cinetica media per particella"}
$$E_k = \frac{3}{2}k_B T$$
:::

e questa forma rende evidente che, per $T \to 0\ \text{K}$, l'agitazione termica si annulla e l'energia cinetica totale tende a zero.

La distribuzione delle velocità delle particelle in un gas non è un singolo numero ma una curva, la **distribuzione di Maxwell-Boltzmann**: al crescere di $T$ la curva si allarga e il suo massimo (velocità più probabile) si sposta verso valori più alti; a parità di temperatura, un gas più leggero ha una distribuzione spostata verso velocità maggiori rispetto a un gas più pesante.

:::image{src="assets/c4c35b59-distribuzione-maxwell-boltzmann.svg" alt="Due curve a campana asimmetrica che rappresentano la frazione di molecole in funzione della velocità, per una temperatura bassa e una temperatura alta" caption="Fig. 6.3 — Distribuzione di Maxwell-Boltzmann: al crescere di T la curva si allarga e il massimo si sposta verso velocità più alte"}
:::

**Esempio svolto 6.5.** Calcolare la velocità quadratica media delle molecole di $\text{N}_2$ (gas ideale) contenute in un recipiente a $20\ \text{°C}$.

*Dati.* $T = 20\ \text{°C} = 293{,}15\ \text{K}$; $M(\text{N}_2) = 28{,}0\ \text{g/mol} = 0{,}0280\ \text{kg/mol}$; $R = 8{,}314\ \text{J/(mol·K)}$.

*Strategia.* Si applica {{formula:6.12}}, ricordando che $R$ in J/(mol·K) richiede $M$ in kg/mol per ottenere $\bar{u}$ in m/s.

*Calcolo.*
$$\bar{u} = \sqrt{\frac{3\times 8{,}314\ \text{J/(mol·K)}\times 293{,}15\ \text{K}}{0{,}0280\ \text{kg/mol}}} = \sqrt{2{,}611\times 10^{5}\ \text{m}^2/\text{s}^2} \approx 511\ \text{m/s}$$

*Verifica.* Il valore è coerente con quello riportato per $\text{N}_2$ a $20\ \text{°C}$ e $1\ \text{atm}$, dove la velocità media è circa $470\ \text{m/s}$ e $\bar{u}$ circa $510\ \text{m/s}$: le due velocità (media semplice e quadratica media) sono vicine ma non identiche, perché mediano in modo diverso la distribuzione delle velocità. Dividendo la velocità media per il cammino libero medio (circa $6{,}6\times10^{-8}\ \text{m}$ per $\text{N}_2$ in queste condizioni) si ottiene la frequenza degli urti, dell'ordine di $7{,}1\times10^{9}$ urti al secondo per ciascuna molecola.

### Effusione, diffusione e legge di Graham

La teoria cinetica permette di interpretare due fenomeni di trasporto dei gas.

**Definizione 6.4** (effusione). L'effusione è il passaggio di un gas, sotto pressione, attraverso un'apertura molto piccola verso un recipiente a pressione molto più bassa (anche il vuoto).

**Definizione 6.5** (diffusione). La diffusione gassosa è il processo con cui un gas si mescola con un altro gas, fino a raggiungere una pressione parziale uniforme in ogni punto del recipiente. La velocità di diffusione effettiva è molto più bassa della velocità quadratica media delle singole molecole, perché il percorso di ciascuna particella è continuamente deviato dagli urti con le altre molecole (moto a zig-zag).

Studiando l'effusione, Thomas Graham osservò che la velocità di effusione (numero di moli che effondono nell'unità di tempo) è inversamente proporzionale alla radice quadrata della densità del gas; poiché a parità di $P$ e $T$ la densità di un gas è proporzionale alla sua massa molare, questo equivale a dire che la velocità di effusione è inversamente proporzionale alla radice quadrata della massa molare.

**Teorema 6.2** (legge di Graham dell'effusione).
A parità di condizioni sperimentali, confrontando l'effusione di due gas 1 e 2, vale

:::formula{id="6.14" label="Legge di Graham dell'effusione"}
$$\frac{v_1}{v_2} = \sqrt{\frac{M_2}{M_1}}$$
:::

dove $v_i$ è la velocità di effusione del gas $i$ e $M_i$ la sua massa molare. Il gas con massa molare minore effonde più velocemente, perché a parità di temperatura (quindi di energia cinetica media) le sue molecole hanno velocità più alta. La relazione si ricava imponendo l'uguaglianza dell'energia cinetica media dei due gas alla stessa temperatura, $\tfrac{1}{2}M_1\bar{u}_1^2 = \tfrac{1}{2}M_2\bar{u}_2^2$. Per la diffusione, in cui la velocità effettiva dipende anche dagli urti con le molecole del mezzo attraversato, lo stesso rapporto fornisce solo una stima, valida quando le condizioni sperimentali dei due gas (geometria del recipiente, mezzo in cui diffondono) sono confrontabili.

La legge di Graham permette di determinare la massa molare incognita di un gas confrontando la sua velocità di effusione con quella di un gas di massa molare nota. Per confrontare i fronti di diffusione, il rapporto ricavato dalla legge può fornire una stima quando i due gas diffondono nello stesso mezzo e in condizioni sperimentali confrontabili; si possono misurare, per esempio, i tempi impiegati e le distanze percorse dai fronti.

**Esempio svolto 6.6.** In un tubo si introducono $\text{HCl}$ ($M = 36{,}5\ \text{g/mol}$) da un'estremità e $\text{NH}_3$ ($M = 17{,}0\ \text{g/mol}$) dall'altra; i due gas diffondono l'uno verso l'altro e, dove si incontrano, reagiscono formando un anello bianco di $\text{NH}_4\text{Cl}$. Stimare il rapporto tra le velocità di diffusione dei due gas e prevedere in quale punto del tubo si forma l'anello.

*Strategia.* Si applica {{formula:6.14}} con 1 = $\text{NH}_3$ e 2 = $\text{HCl}$.

*Calcolo.*
$$\frac{v_{\text{NH}_3}}{v_{\text{HCl}}} = \sqrt{\frac{M_{\text{HCl}}}{M_{\text{NH}_3}}} = \sqrt{\frac{36{,}5}{17{,}0}} = \sqrt{2{,}147} \approx 1{,}47$$

*Verifica e interpretazione.* L'ammoniaca diffonde circa 1,5 volte più velocemente dell'acido cloridrico, perché è più leggera; l'anello di $\text{NH}_4\text{Cl}$ si forma quindi più vicino all'estremità da cui è entrato l'$\text{HCl}$, come effettivamente osservato nell'esperimento.

**Errore tipico 6.5.** Nella legge di Graham lo studente spesso scrive il rapporto delle masse molari invertito rispetto a quello delle velocità, concludendo erroneamente che il gas più pesante effonde più velocemente. Nella {{formula:6.14}} la massa molare del gas che compare al numeratore della velocità ($v_1$) va messa al denominatore della radice ($M_2$, cioè la massa dell'altro gas); conviene sempre verificare il risultato con il buon senso fisico, visto che a parità di temperatura il gas più leggero deve risultare quello più veloce. Un altro errore frequente è confondere la velocità quadratica media delle molecole, dell'ordine di centinaia di metri al secondo, con la velocità con cui si osserva macroscopicamente la diffusione, molto più lenta a causa degli urti continui tra le molecole.

## p5 | Gas reali

Le leggi dei gas ideali studiate nelle sezioni precedenti descrivono bene il comportamento dei gas reali solo in determinate condizioni. L'equazione $PV = nRT$ e la teoria cinetica da cui discende (vedi [Pressione e leggi dei gas ideali](ref:chapter/6#p2) e [Teoria cinetica, effusione e diffusione](ref:chapter/6#p4)) si basano su due ipotesi semplificative: le molecole sono masse puntiformi prive di volume proprio e non esercitano alcuna forza le une sulle altre tranne negli urti, che sono perfettamente elastici.

Nella realtà nessuna delle due ipotesi è esatta: le molecole hanno un volume finito, determinato dalle dimensioni degli atomi e dalle lunghezze di legame, e al loro interno sono presenti particelle cariche che danno origine a forze intermolecolari sia attrattive che repulsive. Sono quindi attese deviazioni dal comportamento ideale, tanto più marcate quanto più le condizioni si allontanano da quelle in cui l'approssimazione ideale funziona bene.

Un gas reale si comporta in modo quasi ideale a temperature prossime a quella ambientale e a pressioni non troppo elevate ($P \lesssim 1\ \text{atm}$): in questo intervallo l'equazione di stato dei gas ideali correla bene pressione, volume, temperatura e numero di moli. A temperature basse e pressioni alte, invece, cioè quando il gas si avvicina alla propria temperatura di liquefazione, le deviazioni diventano significative: gli atomi e le molecole hanno un volume finito anche in prossimità dello zero assoluto, interagiscono fra loro, e questo è proprio il motivo per cui i gas possono condensare in liquidi.

### Il fattore di comprimibilità

Per quantificare la deviazione dall'idealità si definisce il fattore di comprimibilità

:::formula{id="6.15" label="Fattore di comprimibilità"}
$$Z = \frac{PV}{RT}$$
:::

Per un gas ideale $Z = 1$ a qualunque pressione, perché $PV = nRT$ con $n = 1\ \text{mol}$. Se si riporta in un grafico $Z$ in funzione della pressione esterna per una mole di gas reale, la curva tipica (quella osservata per il metano, $\text{CH}_4$) scende sotto il valore $1$ a pressioni moderate per poi risalire proporzionalmente alla pressione quando questa diventa molto alta.

Questo andamento è il risultato di due effetti che si sovrappongono parzialmente.

- A pressioni basse o moderate domina l'attrazione intermolecolare: quando una molecola si avvicina alla parete del recipiente viene richiamata dalle molecole vicine, e il suo urto contro la parete è meno energico. L'effetto, ripetuto su tutto il campione, riduce la pressione misurata rispetto a quella di un gas ideale, quindi $Z < 1$; abbassando ulteriormente la temperatura questo stesso effetto può portare alla condensazione del gas.
- A pressioni molto alte il volume libero disponibile per il moto delle molecole si riduce fortemente, e diventa importante il volume occupato dalle molecole stesse (non più trascurabile rispetto al volume del recipiente). In queste condizioni il volume escluso e le repulsioni a corto raggio fanno aumentare la pressione più rapidamente di quanto previsto dal modello ideale, così $Z$ cresce sopra $1$.

Gas con molecole molto piccole e forze intermolecolari deboli, come $\text{H}_2$ e $\text{He}$, non mostrano la fase iniziale con $Z < 1$: per essi l'effetto del volume molecolare domina già a pressioni basse, e $Z$ cresce con la pressione fin dall'inizio.

:::image{src="assets/08742662-comprimibilita-gas-reali.svg" alt="Fattore di comprimibilità Z in funzione della pressione per un gas ideale, per un gas tipico come CH4 e per H2" caption="Fig. 6.4 — Andamento del fattore di comprimibilità Z=PV/RT con la pressione: il gas ideale resta a Z=1, un gas tipico come CH4 scende sotto 1 per le attrazioni intermolecolari e poi risale per il volume molecolare, mentre H2 cresce da subito."}
:::

### L'equazione di van der Waals

Nel 1873 Johannes van der Waals propose di correggere l'equazione di stato dei gas ideali in due punti, uno per ciascuna causa di deviazione appena descritta: aumentare la pressione misurata di un termine che tenga conto delle attrazioni intermolecolari, e diminuire il volume misurato di un termine che tenga conto del volume escluso al moto dei centri molecolari.

**Equazione di van der Waals.** Per $n$ moli di gas reale in un volume $V$ a temperatura $T$,

:::formula{id="6.16" label="Equazione di van der Waals"}
$$\left(P + \frac{n^2 a}{V^2}\right)\left(V - nb\right) = nRT$$
:::

dove $a$ e $b$ sono le costanti di van der Waals, numeri positivi determinati sperimentalmente, caratteristici di ciascun gas.

Il significato dei due termini correttivi è il seguente.

- Il termine $\dfrac{n^2 a}{V^2}$ è la pressione interna (o pressione di coesione) dovuta alle attrazioni intermolecolari: queste riducono la pressione reale rispetto a quella ideale, perché le forze attrattive rallentano le molecole dirette verso le pareti, che quindi urtano con meno energia e meno frequenza; la pressione da usare nell'equazione ideale va dunque corretta in aumento, $P_{\text{ideale}} = P_{\text{reale}} + a n^2/V^2$. La costante $a$ è tanto più grande quanto più intense sono le forze attrattive intermolecolari, ed è legata alla complessità della molecola e al numero di elettroni.
- Il termine $nb$, detto covolume, rappresenta una correzione del volume disponibile al moto delle particelle: va sottratto al volume del recipiente. Nel modello di sfere rigide, il volume escluso al moto dei centri molecolari è circa quattro volte il volume fisicamente occupato dalle molecole. La costante $b$ è legata al volume molecolare.

Per un gas ideale $a = b = 0$, perché le particelle non si attraggono e occupano volume nullo; quanto più piccole sono $a$ e $b$, tanto più il gas reale si comporta come un gas ideale.

L'importanza relativa dei due termini correttivi dipende dalla pressione. A pressioni basse il covolume $b$ è trascurabile rispetto a $V$ e le molecole sono così distanziate che anche il termine $a/V^2$ è praticamente nullo: l'equazione si riduce a quella dei gas ideali. A pressioni medie (dell'ordine di 50-150 atm) il volume diminuisce abbastanza da far sentire il peso del termine $a/V^2$. A pressioni molto alte (oltre 150 atm) il covolume $b$ non è più trascurabile rispetto a $V$, e $V - nb$ diventa significativamente minore di $V$. L'equazione di van der Waals, proprio per questo, permette di descrivere anche il processo di liquefazione dei gas: ogni gas possiede una temperatura critica, la massima temperatura alla quale può ancora esistere in fase liquida (per il $\text{CO}_2$, ad esempio, $T_c = 31\ ^\circ\text{C}$).

**Esempio svolto 6.7.** Si vogliono confrontare la pressione prevista dal modello ideale e quella prevista dal modello di van der Waals per $1,00\ \text{mol}$ di $\text{CO}_2$ racchiusa in un volume di $1,00\ \text{L}$ a $T = 273,15\ \text{K}$, note le costanti $a = 3,59\ \text{L}^2\cdot\text{atm/mol}^2$ e $b = 0,0427\ \text{L/mol}$.

1. Dati: $n = 1,00\ \text{mol}$, $V = 1,00\ \text{L}$, $T = 273,15\ \text{K}$, $R = 0,08206\ \text{L}\cdot\text{atm/(mol}\cdot\text{K)}$.
2. Strategia: si calcola $P$ con $PV = nRT$ e, separatamente, con {{formula:6.16}} risolta per $P$.
3. Calcolo del modello ideale:

$\displaystyle P_{\text{ideale}} = \frac{nRT}{V} = \frac{(1,00)(0,08206)(273,15)}{1,00} = 22,41\ \text{atm}$
4. Calcolo del modello di van der Waals:

$\displaystyle P_{\text{reale}} = \frac{nRT}{V - nb} - \frac{n^2 a}{V^2} = \frac{22,41}{1,00 - 0,0427} - \frac{3,59}{(1,00)^2} = 23,41 - 3,59 = 19,8\ \text{atm}$
5. Verifica: il valore reale è circa il $12\%$ inferiore a quello ideale, in accordo con il fatto che, a questa densità elevata ($1\ \text{mol}$ in $1\ \text{L}$), le attrazioni intermolecolari del $\text{CO}_2$ pesano più del covolume e fanno sì che $Z < 1$, come previsto dal grafico del fattore di comprimibilità.

**Errore tipico 6.6.** Uno sbaglio frequente è dimenticare che le costanti $a$ e $b$ dipendono dal gas considerato: non esiste un'unica coppia di valori valida per tutte le sostanze, e vanno sempre ricavate dalle tabelle o fornite nei dati dell'esercizio. Un secondo errore comune è confondere il segno delle correzioni, scrivendo $P - a n^2/V^2$ al posto di $P + a n^2/V^2$ dentro la parentesi, oppure $V + nb$ al posto di $V - nb$: conviene ricordare che il termine attrattivo abbassa la pressione reale, mentre il volume escluso la aumenta; il volume disponibile al moto è sempre minore del volume del recipiente. Infine, l'equazione di van der Waals corregge l'idealità dovuta a volume finito e interazioni molecolari, e non va confusa con la correzione dell'equazione di stato mediante il coefficiente di van't Hoff, che si applica invece quando una sostanza gassosa si dissocia parzialmente per effetto del riscaldamento e il numero di moli presenti cambia nel tempo.
