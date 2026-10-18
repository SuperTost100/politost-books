---
chapter: 12
title: Temperatura e calore
---

## p1 | Introduzione

Per descrivere come i corpi si riscaldano, si raffreddano e cambiano dimensione, non basta conoscere l’energia: occorre distinguere temperatura e calore e capire come si misurano e si scambiano. Queste idee permettono di interpretare fenomeni quotidiani e di affrontare problemi pratici, dalla temperatura finale di una miscela alla variazione di lunghezza di una struttura esposta al caldo.

Per seguire il capitolo è utile saper riconoscere le forme di trasferimento dell’energia e applicare il concetto di lavoro affrontato in [Lavoro e integrali di linea](ref:chapter/4#p2). Su queste basi si costruirà una descrizione operativa della temperatura e dell’equilibrio termico, si vedrà come il calore può trasferirsi o accompagnare un cambiamento di fase e si quantificherà la dilatazione dei materiali. Si considereranno inoltre conduzione, convezione e irraggiamento, collegando le leggi fisiche a situazioni concrete.

Al termine, saprai impostare bilanci calorimetrici per trovare la temperatura di equilibrio, includendo quando serve il calore latente, e calcolare le variazioni lineari e volumiche dovute a un cambiamento di temperatura. Saprai anche scegliere le relazioni adatte per stimare il calore trasferito e la potenza termica, mantenendo coerenti unità di misura e convenzioni di segno.

## p2 | Sistemi termodinamici ed equilibrio

La termodinamica studia le trasformazioni e gli scambi di energia tra sistemi macroscopici, piuttosto che il moto dettagliato delle singole particelle che li costituiscono; storicamente il suo problema originario è la produzione di lavoro con mezzi termici.

### Sistema, ambiente e universo termodinamico

**Definizione 12.1** (Sistema termodinamico). Si definisce sistema termodinamico una porzione individuata di materia o di spazio, costituita da una o più parti, isolata concettualmente ai fini dello studio: un volume di gas, un liquido in equilibrio con il suo vapore, un insieme di blocchi solidi diversi. Nel caso particolare di un sistema chiuso, formato da una quantità definita di materia contenente un numero elevatissimo di particelle, la termodinamica non ne descrive il moto individuale, ma le trasformazioni macroscopiche che avvengono tramite scambi energetici.

**Definizione 12.2** (Ambiente). L'ambiente circostante (o semplicemente ambiente) è l'insieme, costituito da una o più parti, con cui il sistema può interagire; esso serve a definire le caratteristiche fisiche macroscopiche del sistema e la loro evoluzione.

**Definizione 12.3** (Universo termodinamico). L'insieme di sistema e ambiente costituisce l'universo termodinamico, che va sempre considerato un sistema isolato.

A seconda del tipo di scambio consentito con l'ambiente, un sistema si dice:

- aperto, se scambia sia energia sia materia;
- chiuso, se scambia soltanto energia;
- isolato, se non scambia né energia né materia.

### Variabili di stato ed equilibrio termodinamico

Un sistema termodinamico è descritto da un numero ristretto di grandezze dette variabili termodinamiche: pressione $p$, volume $V$, temperatura $T$, massa, concentrazione, densità, e così via. Tra queste si distinguono due categorie:

- le variabili estensive, che esprimono una proprietà globale del sistema, dipendente dalla sua estensione, e sono additive (ad esempio massa e volume);
- le variabili intensive, che esprimono una proprietà locale, puntuale, e non sono additive (ad esempio pressione e temperatura).

**Definizione 12.4** (Stato di un sistema). Lo stato di un sistema termodinamico è l'insieme dei valori assunti dalle variabili di stato, che identifica in modo univoco il sistema in un dato istante.

**Definizione 12.5** (Equilibrio termodinamico). Lo stato di un sistema è detto di equilibrio quando le variabili termodinamiche che lo descrivono sono costanti nel tempo; in tal caso le variabili vengono anche dette variabili di stato. Occorre tuttavia distinguere l'equilibrio termodinamico dal semplice stato stazionario: in quest'ultimo le variabili sono costanti nel tempo, ma possono persistere flussi macroscopici attraverso il sistema, come accade in una parete attraversata da un flusso di calore costante. Nell'equilibrio termodinamico, invece, non deve sussistere alcun flusso macroscopico né alcun processo spontaneo in atto. L'equilibrio termodinamico richiede il soddisfacimento simultaneo di tre condizioni:

1. equilibrio meccanico, cioè annullamento della risultante e del momento risultante delle forze (si veda la condizione [formula (8.20)](ref:formula/8.20) già discussa per il corpo rigido, nella sezione [Statica del corpo rigido](ref:chapter/8#p6));
2. equilibrio chimico, cioè assenza di evoluzione netta della composizione del sistema: possono in linea di principio svolgersi reazioni dirette e inverse, purché il loro effetto complessivo sulla composizione sia nullo;
3. equilibrio termico, cioè uniformità della temperatura in ogni punto del sistema.

In uno stato di equilibrio esiste in generale una relazione precisa tra le variabili termodinamiche, detta equazione di stato.

### Trasformazioni termodinamiche

**Definizione 12.6** (Trasformazione). Dati due stati di equilibrio di un sistema, il passaggio dall'uno all'altro è detto trasformazione termodinamica. Per convenzione, si considerano sempre come stato iniziale e stato finale di una trasformazione due stati di equilibrio.

Alcune trasformazioni particolari, molto usate nel seguito, prendono nome dalla variabile che resta costante durante il processo: isoterma ($T = \text{costante}$), isobara ($p = \text{costante}$), isocora ($V = \text{costante}$); si dice invece adiabatica una trasformazione durante la quale non vi è scambio di calore tra sistema e ambiente.

Una trasformazione reale avviene in generale attraverso stati intermedi di non equilibrio, poiché le variabili termodinamiche non sono definite in modo uniforme durante il processo. Se però si opera con variazioni molto piccole delle coordinate termodinamiche, lasciando il tempo al sistema di ristabilire l'equilibrio dopo ciascuna piccola variazione, ogni stato intermedio può essere considerato di equilibrio: si parla in questo caso di trasformazione quasi-statica.

**Definizione 12.7** (Trasformazione reversibile). Una trasformazione si dice reversibile se avviene attraverso stati di equilibrio, in assenza di qualsiasi forza dissipativa, e se al termine sistema e ambiente possono essere riportati agli stati iniziali senza lasciare alcun effetto residuo su nessuno dei due. In particolare, ogni scambio di calore coinvolto deve avvenire tra corpi con differenza di temperatura infinitesima: un trasferimento di calore attraverso una differenza finita di temperatura è infatti irreversibile anche in assenza di attrito, poiché non è possibile invertirlo senza lasciare traccia nell'ambiente.

**Definizione 12.8** (Trasformazione irreversibile). Una trasformazione è detta irreversibile se, una volta compiuta, non esiste alcun modo di invertirla che riporti sia il sistema sia l'ambiente agli stati iniziali senza lasciare alcuna traccia residua. Ciò accade in particolare se la trasformazione passa attraverso stati di non equilibrio, se avviene in presenza di forze dissipative, oppure se comporta uno scambio di calore attraverso una differenza finita di temperatura: quest'ultimo caso può risultare irreversibile anche quando il sistema attraversa soltanto stati di equilibrio e non sono presenti forze dissipative, poiché resta comunque impossibile ripristinare contemporaneamente sistema e ambiente.

La quasi-staticità è dunque condizione necessaria ma non sufficiente per la reversibilità: una trasformazione quasi-statica in presenza di attrito resta irreversibile.

### Equilibrio termico e principio zero

Due sistemi $A$ e $B$, ciascuno in equilibrio termodinamico, con temperature rispettivamente $T_A$ e $T_B$, si dicono in equilibrio termico tra loro quando $T_A = T_B$: la temperatura è dunque l'indice dell'equilibrio termico tra due sistemi.

Un modo per far raggiungere l'equilibrio termico a due sistemi è metterli a contatto. Una parete si dice diatermica se permette il passaggio di calore tra i due sistemi posti a contatto, e adiabatica se invece lo impedisce: una parete adiabatica è dunque definita dalla sua incapacità di lasciare passare calore, indipendentemente dal fatto che i due sistemi si trovino già alla stessa temperatura e il loro stato rimanga perciò invariato anche con una parete diatermica. Due sistemi separati da una parete diatermica si dicono in contatto termico; un sistema circondato interamente da pareti adiabatiche, che non consentono alcuno scambio di calore con l'esterno, si dice adiabatico.

**Teorema 12.1** (Principio zero della termodinamica). Se due sistemi $A$ e $B$ sono ciascuno in equilibrio termico con un terzo sistema $T$, allora $A$ e $B$ sono in equilibrio termico tra loro.

Il principio zero è ciò che rende possibile, e logicamente consistente, l'uso di un termometro: basta che lo strumento (il "terzo sistema") raggiunga l'equilibrio termico separatamente con due corpi per poter concludere, senza doverli mettere direttamente a contatto, se quei due corpi sono o no in equilibrio termico tra loro. Questa idea sarà resa operativa nella prossima sezione, dove la condizione di equilibrio termico con un termometro campione permetterà di costruire una vera e propria scala di temperatura.

**Errore tipico 12.1**. Un errore concettuale frequente, che si ripresenterà nello studio del primo principio, consiste nello scrivere $\Delta W$ o $\Delta Q$ per indicare una variazione di lavoro o di calore tra due stati, come se fossero funzioni di stato. Questo non ha senso: lavoro e calore dipendono dalla trasformazione seguita e non sono univocamente determinati dallo stato iniziale e finale del sistema, a differenza delle variabili di stato come $p$, $V$, $T$. Tale distinzione, qui solo anticipata, sarà cruciale nella sezione su [Calore e lavoro](ref:chapter/12#p4) e nel [Primo principio ed energia interna](ref:chapter/13#p2).

## p3 | Temperatura e termometria

### Dall'equilibrio termico alla misura della temperatura

La sezione precedente ha introdotto l'equilibrio termico come uno dei tre requisiti dell'equilibrio termodinamico, osservando che due sistemi A e B, ciascuno in equilibrio, si dicono in equilibrio termico tra loro quando hanno la stessa temperatura: la temperatura è dunque l'indice dell'equilibrio termico tra due sistemi. Questa osservazione, per quanto intuitiva, non basta a costruire uno strumento di misura: serve un principio che garantisca che il confronto di temperatura tra due sistemi possa avvenire anche senza metterli direttamente in contatto.

**Principio zero della termodinamica**. Se un corpo A e un corpo B sono in equilibrio termico con un terzo corpo T, allora A e B sono in equilibrio termico tra loro. In modo equivalente, siano due sistemi ciascuno in equilibrio termico con un terzo sistema: i due sistemi di partenza sono anch'essi in equilibrio termico tra loro. Il principio zero è ciò che rende possibile l'uso di un termometro: il corpo T è il termometro stesso, e confrontare A e B con T equivale a confrontarli tra loro senza bisogno di metterli fisicamente a contatto.

A questo si collega la distinzione tra pareti diatermiche e adiabatiche. Due sistemi messi a contatto tramite una parete che permette il passaggio di calore raggiungono inevitabilmente l'equilibrio termico; tale parete si dice diatermica. Una parete adiabatica, invece, è definita semplicemente come una parete che non permette alcuno scambio di calore tra i due sistemi che separa; un sistema circondato da pareti adiabatiche è detto esso stesso adiabatico. L'assenza di scambio di calore attraverso la parete non implica che i due sistemi non siano già in equilibrio termico, né esclude che possano diventarlo per altre vie: la parete adiabatica si limita a impedire che il calore sia il meccanismo attraverso cui tale equilibrio viene raggiunto o mantenuto. La temperatura è una grandezza scalare, proprietà di tutti i sistemi termodinamici in equilibrio, e due sistemi sono in equilibrio termico tra loro se e solo se hanno la stessa temperatura. L'uguaglianza delle temperature garantisce dunque soltanto l'equilibrio termico reciproco, non necessariamente l'equilibrio meccanico o chimico tra i due sistemi.

### Caratteristica termometrica e punto fisso

Per trasformare l'idea qualitativa di temperatura in una grandezza misurabile occorrono due condizioni.

La prima è l'esistenza di una grandezza $X$ che caratterizza un fenomeno fisico e che varia con la temperatura in modo riproducibile; $X$ si chiama caratteristica termometrica, e la temperatura si definisce come una funzione $\theta(X)$ di $X$, detta funzione termometrica. Il dispositivo che realizza il fenomeno fisico e fornisce il valore di $X$ si chiama termometro. Esempi di caratteristica termometrica sono la lunghezza di una colonna di liquido, la resistenza elettrica di un conduttore, la pressione di un gas a volume costante.

La seconda condizione è l'esistenza di un punto fisso: un sistema in uno stato di equilibrio definibile con precisione e facilmente riproducibile, al quale si attribuisce convenzionalmente un valore arbitrario di temperatura. Storicamente, a partire dal 1954 il punto fisso campione adottato fu il punto triplo dell'acqua, lo stato in cui ghiaccio, acqua liquida e vapore saturo coesistono in equilibrio; a questo stato venne assegnata per convenzione la temperatura

$$
T_{pt} \equiv 273,16\ \text{K}
$$

dove K è il kelvin, una delle sette unità fondamentali del Sistema Internazionale. Questa convenzione ha definito il kelvin fino al 2019; dal 2019 il kelvin del SI è invece definito fissando esattamente il valore numerico della costante di Boltzmann, $k_B = 1,380649\times 10^{-23}\ \text{J/K}$, e il punto triplo dell'acqua non è più l'elemento che definisce l'unità, ma resta un riferimento sperimentale la cui temperatura misurata risulta prossima a $273,16\ \text{K}$.

Scegliendo per semplicità una funzione termometrica lineare, $\theta = aX$, la costante $a$ si fissa imponendo che al punto fisso corrisponda proprio $T_{pt}$:

$$
a = \frac{\theta}{X} \quad\Longrightarrow\quad \theta(X_{pt}) = a X_{pt} = 273,16 \ \text{K} \quad\Longrightarrow\quad a = \frac{273,16\ \text{K}}{X_{pt}}.
$$

Sostituendo si ottiene la relazione valida per i termometri in cui si assume la proporzionalità diretta $\theta = aX$, con lo zero della scala termometrica posto in $X = 0$ (una relazione affine del tipo $\theta = aX + b$ richiederebbe invece un'altra calibrazione, con una seconda condizione oltre al punto fisso):

:::formula{id="12.1" label="Temperatura empirica di un termometro"}
$$T = 273,16\, \frac{X}{X_{pt}}\ \text{K}$$
:::

La temperatura ottenuta da questa formula si chiama temperatura empirica, perché termometri che usano caratteristiche $X$ diverse (colonna di mercurio, resistenza di platino, pressione di un gas) forniscono in generale valori leggermente diversi, tranne al punto fisso stesso, dove per costruzione tutti coincidono con $T_{pt}$. Il termometro assoluto (basato sul gas a basse pressioni, per cui la scala risulta indipendente dalla sostanza) è quello che giustifica l'uso di questa relazione come scala di riferimento.

### Scale termometriche e conversioni

La scala che usa direttamente $T$ in kelvin, con lo zero posto al cosiddetto zero assoluto, è la scala Kelvin: è quella adottata nel SI e quella da usare in tutte le equazioni di stato e nelle formule termodinamiche di questo libro. Nell'uso corrente si impiega anche la scala Celsius, indicata con $t$ in °C, definita da:

:::formula{id="12.2" label="Conversione tra Celsius e Kelvin"}
$$t(^\circ\text{C}) = T(\text{K}) - 273,15 \qquad\Longleftrightarrow\qquad T(\text{K}) = t(^\circ\text{C}) + 273,15$$
:::

L'offset è $273,15$ e non $273,16$: per convenzione lo zero della scala Celsius è posto a $0{,}01\ \text{K}$ sotto il punto triplo dell'acqua, cioè alla temperatura di fusione del ghiaccio a pressione atmosferica normale. Le due scale hanno la stessa ampiezza di grado (un intervallo di $1\ \text{K}$ equivale a un intervallo di $1\ ^\circ\text{C}$): ciò che cambia è solo l'origine.

Esistono inoltre due scale di uso anglosassone, utili a riconoscere le conversioni in un problema che le presenti:

:::formula{id="12.3" label="Scale Fahrenheit e Rankine"}
$$T(^\circ\text{R}) = \frac{9}{5}T(\text{K}), \qquad T(^\circ\text{F}) = \frac{9}{5}T(\text{K}) - 459,67 = \frac{9}{5}t(^\circ\text{C}) + 32$$
:::

:::image{src="assets/404bc269-scala-fahrenheit-celsius.svg" alt="Retta che mette in corrispondenza la temperatura in Fahrenheit e in Celsius, con intersezione a -40" caption="Fig. 12.1 — Relazione lineare tra temperatura Fahrenheit e Celsius: la pendenza è 9/5, non 1 come tra Kelvin e Celsius, e le due scale coincidono a −40°"}
:::

La scala Rankine è l'analoga assoluta della Fahrenheit, così come il Kelvin lo è della Celsius: anche in questo caso le due scale differiscono solo per l'origine, non per l'ampiezza del grado (un grado Fahrenheit è $5/9$ di un kelvin).

:::image{src="assets/404bc269-scale-celsius-kelvin.svg" alt="Retta che mette in corrispondenza la temperatura in Celsius e in Kelvin" caption="Fig. 12.2 — Relazione lineare tra temperatura Celsius e temperatura Kelvin: stessa pendenza, origine spostata di 273,15 K"}
:::

**Errore tipico 12.2**. Confondere l'ampiezza del grado con l'origine della scala: scrivere $T(\text{K}) = 273,15 \cdot t(^\circ\text{C})$ (moltiplicazione invece di somma) è dimensionalmente scorretto e numericamente assurdo per $t = 0\ ^\circ\text{C}$. La conversione Celsius-Kelvin è sempre una traslazione additiva, non un riscalamento.

### Esempio svolto: conversione di temperature in un bilancio termico

Un esercizio tipico di calorimetria richiede di esprimere tutte le temperature in kelvin prima di procedere con qualunque bilancio o equazione di stato.

**Dati**. Un disco di ferro si trova inizialmente alla temperatura $t_{i,\text{Fe}} = -20\ ^\circ\text{C}$; una quantità di ossigeno gassoso si trova alla temperatura $t_{i,\text{O}_2} = 30\ ^\circ\text{C}$.

**Soluzione**. Si applica la formula di conversione {{formula:12.2}}:
$$T_{i,\text{Fe}} = (273,15 - 20)\ \text{K} = 253,15\ \text{K}$$
$$T_{i,\text{O}_2} = (273,15 + 30)\ \text{K} = 303,15\ \text{K}$$

**Controllo**. Entrambi i valori sono positivi e dell'ordine delle centinaia di kelvin, come ci si aspetta per temperature ordinarie lontane dallo zero assoluto; il disco di ferro, più freddo in Celsius, resta più freddo anche in Kelvin, perché la traslazione è la stessa per entrambe le temperature.

Lo stesso tipo di conversione ricorre sistematicamente nei problemi di calorimetria e di trasformazioni dei gas, ad esempio con $t_1 = -15\ ^\circ\text{C} \to T_1 = 258{,}15\ \text{K}$ e $t_2 = 60\ ^\circ\text{C} \to T_2 = 333{,}15\ \text{K}$, oppure $t_1 = 250\ ^\circ\text{C} \to T_1 = 523{,}15\ \text{K}$: la regola è sempre la stessa, somma algebrica di $273{,}15$.

### Errori tipici legati alle unità di misura

**Errore tipico 12.3** (mancata conversione delle unità prima del calcolo). Nel calcolare la temperatura di una mole di gas ideale biatomico con $V_A = 10$ litri e $p_A = 1$ bar tramite l'equazione di stato, è necessario prima convertire tutti i dati in unità SI: $V_A = 10\cdot 10^{-3}\ \text{m}^3$ e $p_A = 10^5\ \text{Pa}$. Il calcolo corretto dà:

$$
T_A = \frac{p_A V_A}{nR} = \frac{10^5\ \text{N/m}^2 \cdot 10^{-2}\ \text{m}^3}{1\ \text{mol}\cdot 8{,}314\ \text{J/(mol K)}} = 120{,}3\ \text{K}.
$$

Se invece si usano i numeri grezzi (bar e litri) senza convertire, si ottiene $T_A = \frac{1\cdot 10}{1\cdot 8{,}314} = 1{,}203\ \text{K}$: un risultato sbagliato di due ordini di grandezza, oltre a essere un'uguaglianza priva di senso tra un numero puro e una grandezza dimensionata. Dimenticare la conversione $1\ \text{bar} = 10^5\ \text{Pa}$ è l'errore più frequente, e produce sistematicamente risultati sbagliati di cinque ordini di grandezza: ogni volta che un risultato di temperatura appare implausibile (troppo vicino allo zero assoluto o enormemente più grande dell'atteso), conviene ricontrollare prima di tutto le conversioni di pressione e volume in unità SI, come già raccomandato a proposito dell'analisi dimensionale nella sezione su [metodo sperimentale e misure](ref:chapter/1#p2).

## p4 | Calore e lavoro

### Gli esperimenti di Joule e l'equivalenza calore-lavoro

Nella sezione precedente abbiamo visto che il principio zero permette di definire operativamente la temperatura attraverso l'equilibrio termico [testo](ref:chapter/12#p3). Resta però da chiarire **come** un sistema possa cambiare temperatura, e se esista un legame quantitativo fra le due grandezze che finora abbiamo trattato separatamente in meccanica (il lavoro) e in termodinamica (il calore).

Verso la metà del 1800 Joule condusse una serie di esperimenti fondamentali per chiarire gli effetti termici del lavoro meccanico, utilizzando un contenitore a pareti adiabatiche contenente una massa nota di acqua. In quattro dispositivi diversi si fornisce lavoro meccanico al sistema senza alcuno scambio di calore con l'esterno:

1. un mulinello viene messo in rotazione nell'acqua spendendo un lavoro $W_1$ fornito dall'energia potenziale di due masse che scendono sotto l'azione della gravità; con palette fisse che impediscono all'acqua di ruotare in blocco, l'acqua agitata dal mulinello si riscalda per attrito;
2. un conduttore di resistenza $R$, immerso nell'acqua e percorso da corrente, richiede un lavoro elettrico $W_2$ per far circolare la corrente;
3. un gas contenuto in un recipiente a pareti diatermiche, a sua volta immerso nell'acqua, viene compresso con un lavoro $W_3$;
4. due blocchi di metallo immersi nell'acqua vengono strofinati tra loro, spendendo un lavoro $W_4$ contro le forze di attrito.

L'osservazione sperimentale generale è che, per un sistema adiabatico portato tra gli stessi stati di equilibrio iniziale e finale, il lavoro scambiato non dipende dal cammino seguito. I quattro dispositivi illustrano modi diversi di fornire energia al sistema e non rappresentano necessariamente trasformazioni tra stati complessivi identici: gas, conduttore e blocchi metallici non sono presenti in tutti i casi. Se si confronta soltanto il riscaldamento dell'acqua, occorre quindi contabilizzare anche le variazioni di energia interna degli altri componenti, quando presenti. Il principio sperimentale riguarda il sistema scelto e i suoi stati estremi; non richiede che i quattro apparati abbiano la stessa composizione. Per analogia con il lavoro delle forze conservative, si introduce una funzione di stato, l'**energia interna** $U$, tale che

:::formula{id="12.4" label="Lavoro adiabatico ed energia interna"}
$$W_{ad} = -\Delta U = U_{in} - U_{fin}$$
:::

dove $U$ dipende soltanto dalle coordinate termodinamiche dello stato del sistema, non dal cammino seguito per raggiungerlo. Con la convenzione dei segni adottata (positivo il lavoro compiuto dal sistema sull'ambiente), se il sistema compie lavoro verso l'esterno la sua energia interna diminuisce; se il sistema subisce lavoro dall'esterno, $U$ aumenta.

Lo stesso aumento di temperatura dell'acqua può però essere ottenuto senza compiere alcun lavoro, semplicemente mettendo il sistema a contatto con un corpo più caldo. Se la stessa variazione di stato (la stessa $\Delta T$) si può raggiungere sia tramite scambio di calore sia tramite lavoro meccanico, si postula l'equivalenza degli effetti delle due procedure, scrivendo per il caso di puro scambio di calore (lavoro nullo)

:::formula{id="12.5" label="Calore e variazione di energia interna"}
$$Q = \Delta U$$
:::

con la convenzione che $Q$ è positivo se il calore è ceduto al sistema dall'ambiente. Confrontando le due relazioni precedenti per la stessa variazione di stato si ottiene l'**equivalenza calore-lavoro**

:::formula{id="12.6" label="Equivalenza calore-lavoro"}
$$Q = -W_{ad}$$
:::

Questa equazione, oltre a stabilire che il calore si misura nella stessa unità del lavoro (il joule), mostra che esiste un meccanismo di scambio di energia — lo scambio di calore — che non comporta movimenti macroscopici osservabili, ma che è energeticamente equivalente al lavoro meccanico. Quando un sistema scambia sia calore sia lavoro con l'ambiente lungo una trasformazione da uno stato $A$ a uno stato $B$, la combinazione delle due relazioni precedenti porta alla forma generale $\Delta U = Q - W$, che sarà enunciata come primo principio della termodinamica e discussa in dettaglio in [Primo principio ed energia interna](ref:chapter/13#p2).

**Errore tipico 12.4**

Un errore concettuale frequente, segnalato esplicitamente nelle guide alla risoluzione dei problemi, consiste nello scrivere $\Delta Q_{AB}$ o $\Delta W_{AB}$ come se calore e lavoro fossero funzioni di stato (cioè come differenze $Q(B)-Q(A)$ o $W(B)-W(A)$). Il simbolo $\Delta f$ ha senso solo se $f$ è definita punto per punto nello spazio degli stati termodinamici; $Q$ e $W$ non lo sono, perché il loro valore dipende dal particolare cammino seguito tra $A$ e $B$ e non soltanto dagli stati estremi. Solo l'energia interna $U$ è una funzione di stato, e solo per essa è corretto scrivere $\Delta U_{AB} = U(B) - U(A)$.

### Il lavoro termodinamico come integrale di p dV

Nelle trasformazioni di un fluido (tipicamente un gas) contenuto in un cilindro con pistone, il lavoro meccanico scambiato con l'ambiente ha un'espressione diretta in termini delle variabili di stato $p$ e $V$. Se il pistone, sotto l'azione della pressione $p$ esercitata ortogonalmente su una superficie $S$, si sposta di una quantità infinitesima $dh$ nella direzione concorde alla forza, il lavoro infinitesimo compiuto è

$$F = pS, \qquad dV = S\,dh, \qquad \delta W = F\,dh = pS\,dh = p\,dV$$

dove $dV$ è il volume infinitesimo spazzato dalla superficie nello spostamento. Questa relazione vale quando $p$ è la pressione del sistema stesso, cioè quando la trasformazione è quasi statica e il pistone si trova in equilibrio meccanico istante per istante (la pressione esterna applicata sul pistone eguaglia, a meno di infinitesimi, la pressione del gas); in tal caso la relazione è valida per contenitori di forma qualsiasi:

:::formula{id="12.7" label="Lavoro termodinamico infinitesimo"}
$$\delta W = p\,dV$$
:::

Integrando tra uno stato iniziale $A$ e uno stato finale $B$ si ottiene il lavoro della trasformazione finita

:::formula{id="12.8" label="Lavoro termodinamico come integrale di p dV"}
$$W_{AB} = \int_A^B p(V)\,dV$$
:::

Questa espressione esplicita richiede di conoscere la funzione $p(V)$ lungo tutta la trasformazione, cosa possibile in due situazioni tipiche:

- **Trasformazione reversibile**: il sistema passa per una successione continua di stati di equilibrio, e quindi la pressione $p$ è definita in ogni stato intermedio come funzione continua di $V$; l'integrale ha senso punto per punto lungo il cammino quasi-statico.
- **Pressione esterna nota e costante**: anche se la trasformazione è irreversibile (per esempio un'espansione improvvisa contro una pressione atmosferica costante $p_{amb}$), il lavoro si calcola comunque come

:::formula{id="12.9" label="Lavoro a pressione esterna costante"}
$$W_{AB} = p_{amb}(V_B - V_A)$$
:::

Nel piano di Clapeyron, con assi $(V,p)$ come convenuto per tutto il libro, il lavoro di una trasformazione reversibile è rappresentato geometricamente dall'area compresa fra la curva $p(V)$ e l'asse dei volumi. Da questa interpretazione discendono le seguenti proprietà di segno:

- in un'espansione ($V_B > V_A$) il gas compie lavoro sull'ambiente, $W > 0$;
- in una compressione ($V_B < V_A$) il gas subisce lavoro, $W < 0$;
- in una trasformazione isocora ($\Delta V = 0$) è nullo il solo lavoro di espansione $\delta W = p\,dV$, cioè $\int p\,dV = 0$; il lavoro complessivamente scambiato dal sistema può comunque essere diverso da zero se sono presenti altre forme di lavoro, come il lavoro elettrico o quello trasmesso da un agitatore, già incontrate negli esperimenti di Joule;
- in un ciclo reversibile, il lavoro è dato dall'area racchiusa dal ciclo nel piano $(V,p)$: positivo se il ciclo è percorso in senso orario, negativo se percorso in senso antiorario.

:::image{src="assets/950f301a-lavoro-pdv-isoterma.svg" alt="Area sotto una curva isoterma nel piano V,p" caption="Fig. 12.3 — Il lavoro di una trasformazione reversibile è l'area compresa fra la curva p(V) e l'asse dei volumi"}
:::

**Esempio svolto 12.1**

Un cilindro contiene $n = 3\ \text{mol}$ di un gas ideale biatomico, inizialmente in equilibrio con un serbatoio d'acqua a $T_A = 373{,}2\ \text{K}$. Il gas viene compresso in modo isotermo e reversibile fino a un terzo del volume iniziale, $V_B = V_A/3$. Si vuole calcolare il lavoro $W_{A\to B}$ compiuto dal gas in questa fase.

*Dati*: $n = 3\ \text{mol}$, $T_A = 373{,}2\ \text{K}$, $V_B = V_A/3$, $R = 8{,}314\ \text{J}/(\text{mol}\cdot\text{K})$.

*Equazioni*. Poiché la trasformazione è isoterma e reversibile, in ogni istante vale l'equazione di stato dei gas ideali $pV = nRT_A$, da cui $p(V) = nRT_A/V$. Sostituendo nella definizione di lavoro:

$$W_{A\to B} = \int_{V_A}^{V_B} p\,dV = \int_{V_A}^{V_B} \frac{nRT_A}{V}\,dV = nRT_A \ln\frac{V_B}{V_A} = nRT_A \ln\frac{1}{3}$$

*Numeri*.

$$W_{A\to B} = 3\ \text{mol} \cdot 8{,}314\ \frac{\text{J}}{\text{mol}\cdot\text{K}} \cdot 373{,}2\ \text{K} \cdot \ln\frac{1}{3} \approx -10226\ \text{J}$$

*Controllo*. Il risultato è negativo, coerentemente con il fatto che il gas viene compresso ($V_B < V_A$): il lavoro è subito dal gas, non compiuto da esso. L'ordine di grandezza (circa $10^4\ \text{J}$) è ragionevole per moli di gas a temperatura ambiente compresse di un fattore 3.

**Errore tipico 12.5**

Un errore frequente è applicare la formula $W = p_{amb}(V_B - V_A)$ quando la pressione varia durante la trasformazione (ad esempio in una trasformazione isoterma o adiabatica reversibile): quella formula vale solo se la pressione esterna è nota ed effettivamente costante durante tutto il processo, altrimenti occorre risolvere l'integrale $\int p(V)\,dV$ con la relazione $p(V)$ corretta per quella specifica trasformazione. Un secondo errore è dimenticare che $\delta W = p\,dV$ richiede che $p$ sia la pressione del sistema (o quella esterna, se costante) e non una pressione arbitraria scelta per comodità di calcolo.

## p5 | Calorimetria

La calorimetria è la branca della termodinamica che studia la misura del calore scambiato durante i processi fisici e chimici; in particolare, si occupa di quantificare l'energia termica assorbita o rilasciata da un sistema, misurando le variazioni di temperatura che avvengono durante tali processi. Il calore scambiato da un sistema contribuisce, insieme al lavoro, al bilancio della sua energia interna secondo il primo principio della termodinamica, $\Delta U = Q - W$, che sarà formalizzato in una sezione successiva; la variazione di energia interna non è però in generale proporzionale al solo calore scambiato, e può anche essere nulla, come accade per esempio in un'espansione isoterma reversibile di un gas ideale, dove $Q = W$ e $\Delta U = 0$. Qui ci limitiamo a usare il fatto, già incontrato nella sezione su [calore e lavoro](ref:chapter/12#p4), che il calore è una forma di energia in transito e non una funzione di stato.

### Calore specifico e capacità termica

Si osserva sperimentalmente che, in una trasformazione in cui il calore scambiato è l'unico scambio energetico che contribuisce alla variazione di temperatura, scambiando una quantità di calore $Q$ con un corpo di massa $m$ senza che avvenga un cambiamento di fase, la sua temperatura varia in proporzione a $Q$, purché nell'intervallo di temperatura considerato il calore specifico della sostanza non cambi sensibilmente; per un gas, inoltre, il valore del calore specifico dipende dal vincolo imposto alla trasformazione (per esempio a volume costante o a pressione costante), come vedremo più avanti. Il calore specifico $c$ rappresenta il calore che occorre scambiare con l'unità di massa di una data sostanza, alla temperatura $T$ e in una trasformazione di tipo specificato, per farne variare la temperatura di $1\ \text{K}$.

:::formula{id="12.10" label="Calore scambiato tramite il calore specifico"}
$$Q = cm(T_f - T_i), \qquad \delta Q = cm\,dT \;\Rightarrow\; c = \frac{1}{m}\frac{\delta Q}{dT}$$
:::

Il calore specifico dipende in generale dalla temperatura; se nell'intervallo considerato non si può ritenere costante, il calore totale scambiato si calcola integrando.

$$Q = \int_{T_i}^{T_f} m\,c(T)\,dT$$

Nel seguito, salvo avviso contrario, assumeremo $c$ costante nell'intervallo di temperatura in esame.

Il coefficiente di proporzionalità tra il calore scambiato da un corpo e la sua variazione di temperatura (indipendentemente dalla sostanza) è la capacità termica $C$, misurata in $\text{J/K}$; essa è legata al calore specifico dalla relazione $C = cm$.

:::formula{id="12.11" label="Capacità termica"}
$$Q = C\,\Delta T = C(T_f - T_i), \qquad C = cm$$
:::

Quando è più comodo riferirsi al numero di moli $n$ di una sostanza piuttosto che alla sua massa, si definisce il calore specifico molare, indicato con un simbolo distinto $c_n$ per non confonderlo con il calore specifico per unità di massa $c$ usato finora, dato che le due grandezze hanno unità di misura diverse: $\text{J/(mol·K)}$ per $c_n$ contro $\text{J/(kg·K)}$ per $c$.

:::formula{id="12.12" label="Calore specifico molare"}
$$c_n = \frac{1}{n}\frac{\delta Q}{dT}, \qquad \delta Q = nc_n\,dT, \qquad Q = nc_n(T_f - T_i) \text{ se } c_n \text{ costante}$$
:::

Questa notazione, con i simboli $c_V$ e $c_p$ per i calori specifici molari dei gas misurati rispettivamente a volume costante e a pressione costante, sarà riutilizzata nelle sezioni sui [gas ideali](ref:chapter/13#p3) e sulle loro trasformazioni, dove il pedice specifica di volta in volta il vincolo imposto alla trasformazione.

### Cambiamenti di fase e calore latente

Un cambiamento di fase è il passaggio di una sostanza da una fase a un'altra, dovuto alla sottrazione o cessione di calore. Per una sostanza pura mantenuta a pressione costante, durante tutto il cambiamento di stato la temperatura della sostanza rimane costante; se invece la pressione a cui avviene la transizione cambia, anche la temperatura di transizione può variare. Il modulo della quantità di calore scambiata nel cambiamento di stato di una massa $m$ è proporzionale a $m$ secondo un coefficiente $\lambda$, detto calore latente e misurato in $\text{J/kg}$.

:::formula{id="12.13" label="Modulo del calore scambiato in un cambiamento di fase"}
$$|Q| = \lambda m$$
:::

Con la convenzione $Q>0$ per il calore assorbito dal sistema, il segno di $Q$ dipende dal verso della transizione: nella fusione, nella vaporizzazione e nella sublimazione il sistema assorbe calore e si ha $Q=+\lambda m$, mentre nella solidificazione e nella condensazione il sistema cede calore e si ha $Q=-\lambda m$. In opportune condizioni i cambiamenti di fase sono trasformazioni praticamente reversibili. Il calore latente dipende dal tipo di transizione (fusione, vaporizzazione, ...) e dalla sostanza, ed è tabulato sperimentalmente; occorre quindi sempre usare il valore di $\lambda$ relativo alla transizione in oggetto, mai confondere, ad esempio, il calore latente di fusione con quello di vaporizzazione.

### Bilancio termico e temperatura di equilibrio

Consideriamo due corpi inizialmente a temperature diverse, posti in contatto termico in un contenitore adiabatico (nessun calore netto entra o esce dal sistema). Il corpo più caldo raggiungerà una temperatura di equilibrio inferiore a quella originale, il più freddo una temperatura superiore; sebbene la variazione di energia interna dell'insieme dei due corpi sia nulla, ciascun corpo singolarmente varia la propria energia interna, poiché il più caldo la cede al più freddo. Applicando il primo principio a ciascun corpo,

$$\Delta U_1 = Q_1 < 0, \qquad \Delta U_2 = Q_2 > 0,$$

e poiché le due variazioni sono uguali in modulo e opposte in segno, si ottiene la condizione di bilancio termico.

:::formula{id="12.14" label="Bilancio termico tra due corpi isolati"}
$$Q_1 = -Q_2$$
:::

Se entrambi i corpi restano nella medesima fase e con calore specifico costante nell'intervallo di temperatura attraversato, e assumendo trascurabile la capacità termica del contenitore (o calorimetro) rispetto a quella dei due corpi messi a contatto, $Q_1 = c_1 m_1(T_{eq}-T_1)$ e $Q_2 = c_2 m_2(T_{eq}-T_2)$; sostituendo nella condizione di bilancio e risolvendo per $T_{eq}$ si ottiene la temperatura di equilibrio.

:::formula{id="12.15" label="Temperatura di equilibrio in un calorimetro"}
$$T_{eq} = \frac{m_1 c_1 T_1 + m_2 c_2 T_2}{m_1 c_1 + m_2 c_2}$$
:::

Questa espressione mostra che $T_{eq}$ è una media delle temperature iniziali pesata dalle rispettive capacità termiche $C_1=m_1c_1$ e $C_2=m_2c_2$, in perfetta analogia con la coordinata del centro di massa di due punti pesata dalle rispettive masse, già incontrata nella sezione sul [centro di massa](ref:chapter/7#p3). La stessa logica si estende a un numero qualunque di corpi in contatto termico, imponendo che la somma algebrica dei calori scambiati da ciascuno sia nulla.

**Esempio 12.2** (equilibrio termico tra un gas e un solido). Un disco di ferro di massa $m_{Fe}=0{,}20\ \text{kg}$, prelevato da una cella frigorifera a $-20\ ^\circ\text{C}$, viene immerso in un recipiente adiabatico a volume costante contenente $n=2\ \text{mol}$ di ossigeno ($\text{O}_2$, gas biatomico) alla temperatura di $30\ ^\circ\text{C}$. Il calore specifico del ferro è $c_{Fe}=469\ \text{J/(kg·K)}$ e il volume del disco è trascurabile rispetto a quello del recipiente. Si vuole la temperatura finale di equilibrio.

Convertiamo i dati in SI: $T_{i,Fe} = 253{,}15\ \text{K}$, $T_{i,O_2} = 303{,}15\ \text{K}$.

Poiché il recipiente è adiabatico, tutto il calore ceduto dall'ossigeno (più caldo) è assorbito dal ferro (più freddo), senza perdite verso l'esterno; applichiamo quindi il bilancio termico {{formula:12.14}}, $Q_{tot}=Q_{O_2}+Q_{Fe}=0$.

Il raffreddamento dell'ossigeno avviene a volume costante, quindi $Q_{O_2} = n c_V (T_f - T_{i,O_2})$ con $c_V=\tfrac{5}{2}R$ per un gas biatomico; il ferro scambia $Q_{Fe}=m_{Fe}c_{Fe}(T_f-T_{i,Fe})$.

Sostituendo nel bilancio e risolvendo per $T_f$,

$$T_f = \frac{n\frac{5}{2}R\,T_{i,O_2} + m_{Fe}c_{Fe}\,T_{i,Fe}}{n\frac{5}{2}R + m_{Fe}c_{Fe}}.$$

Numericamente, $n\tfrac{5}{2}R = 2\ \text{mol}\cdot\tfrac{5}{2}\cdot 8{,}314\ \text{J/(mol·K)} \approx 41{,}6\ \text{J/K}$ e $m_{Fe}c_{Fe} = 0{,}20\ \text{kg}\cdot469\ \text{J/(kg·K)} \approx 93{,}8\ \text{J/K}$; sostituendo si ottiene $T_f \approx 268{,}5\ \text{K}$ ($\approx -4{,}7\ ^\circ\text{C}$).

Controllo: $T_f$ è compresa tra $T_{i,Fe}$ e $T_{i,O_2}$, come richiesto dal bilancio termico, e più vicina a $T_{i,Fe}$ perché la capacità termica del ferro ($93{,}8\ \text{J/K}$) è superiore a quella del gas ($41{,}6\ \text{J/K}$): un corpo con maggiore capacità termica "pesa" di più nella media.

**Esempio 12.3** (bilancio termico con cambiamento di fase). Un pezzo di ghiaccio di massa $m_{gh}=30\ \text{g}$ a $T_1=-15\ ^\circ\text{C}$ viene immerso in un recipiente adiabatico con $m_a=50\ \text{g}$ di acqua a $T_2=60\ ^\circ\text{C}$, con $c_{gh}=2051{,}5\ \text{J/(kg·K)}$, $\lambda_{f}=3{,}3\cdot10^5\ \text{J/kg}$ e $c_a = 4186\ \text{J/(kg·K)}$. Svolgiamo il bilancio in temperature assolute: $T_1=258{,}15\ \text{K}$, $T_2=333{,}15\ \text{K}$, mentre la temperatura di fusione del ghiaccio a pressione atmosferica è $T_0 = 0\ ^\circ\text{C} = 273{,}15\ \text{K}$.

Il ghiaccio, per sciogliersi completamente, deve prima scaldarsi fino a $T_0=0\ ^\circ\text{C}$ e poi fondere; il calore necessario è $Q_{gh,1}=m_{gh}c_{gh}(T_0-T_1)+m_{gh}\lambda_f$. Il massimo calore che l'acqua può cedere raffreddandosi da $T_2$ a $T_0$ è $|Q_{a,1}| = m_a c_a(T_2-T_0)$; il ghiaccio si scioglie completamente se $Q_{gh,1}\le |Q_{a,1}|$. Numericamente $Q_{gh,1}\approx 10823\ \text{J}$ e $|Q_{a,1}|\approx 12558\ \text{J}$, quindi il ghiaccio fonde interamente.

A quel punto l'acqua originaria si trova ancora a una temperatura $T^*>T_0$, calcolabile da $Q_{gh,1}=-m_ac_a(T^*-T_2)$, da cui $T^*\approx 281{,}4\ \text{K}$. Nel recipiente ci sono ora due masse d'acqua liquida, a $T_0$ e a $T^*$: imponendo il bilancio termico finale $m_{gh}c_a(T_f-T_0)+m_ac_a(T_f-T^*)=0$ si ricava

$$T_f = \frac{m_{gh}T_0+m_aT^*}{m_{gh}+m_a} \approx 278{,}3\ \text{K} \;(\approx 5{,}2\ ^\circ\text{C}).$$

:::image{src="assets/e164df6b-bilancio-termico-ghiaccio-acqua.svg" alt="Temperatura del ghiaccio e dell'acqua in funzione del calore scambiato, con le due curve che si incontrano alla temperatura di equilibrio" caption="Fig. 12.4 — Bilancio termico dell'esempio con cambiamento di fase: il ghiaccio (curva crescente) si scalda da −15 °C a 0 °C, fonde a temperatura costante, poi si scalda come acqua, mentre l'acqua iniziale a 60 °C si raffredda cedendo calore (curva decrescente); le due curve si incontrano alla temperatura di equilibrio T_f ≈ 5,2 °C."}
:::

Questo esempio mostra il metodo generale per i bilanci con cambiamento di fase: si verifica prima se la transizione si completa (confrontando il calore richiesto con quello disponibile), e solo poi si scrive il bilancio termico finale usando per ciascuna sostanza il calore specifico della fase in cui effettivamente si trova.

**Errore tipico 12.6**

Un errore frequente è scrivere direttamente $Q_1=c_1m_1(T_{eq}-T_1)$ senza prima verificare se durante lo scambio di calore avviene un cambiamento di fase: se la temperatura di equilibrio ipotizzata supera (o è inferiore a) la temperatura di transizione di una delle sostanze, bisogna scomporre il calcolo in più fasi (riscaldamento/raffreddamento più eventuale calore latente), come nel secondo esempio. Un secondo errore, segnalato anche a proposito del primo principio, è trattare $Q$ e $W$ come funzioni di stato scrivendo $\Delta Q_{A\to B}$ o $\Delta W_{A\to B}$: questa notazione presuppone che calore e lavoro siano definiti punto per punto nello spazio degli stati termodinamici, cosa falsa, poiché solo l'energia interna è una funzione di stato. Occorre quindi scrivere $Q_{A\to B}$ o semplicemente $Q$ per indicare il calore scambiato durante la trasformazione, mai una sua "variazione".

## p6 | Dilatazione termica

La dilatazione termica è il fenomeno per cui le dimensioni di un corpo variano al variare della temperatura, a pressione costante. Nei solidi e nei liquidi si osserva che il volume aumenta al crescere di $T$; questo stesso principio è alla base del funzionamento dei termometri a liquido, già incontrati nella sezione su [Temperatura e termometria](ref:chapter/12#p3).

### Dilatazione lineare

**Definizione 12.9** (dilatazione lineare). Se la variazione di temperatura $\Delta T$ è sufficientemente piccola e le dimensioni del corpo variano poco rispetto al valore iniziale, la variazione $\Delta L$ di una lunghezza $L$ del corpo è proporzionale a $\Delta T$, a pressione costante.

:::formula{id="12.16" label="Dilatazione lineare"}
$$\Delta L = \lambda L \Delta T$$
:::

Il coefficiente $\lambda$ si chiama coefficiente di dilatazione lineare, è caratteristico del materiale ed esprime la variazione relativa di lunghezza per variazione unitaria di temperatura.

:::formula{id="12.17" label="Coefficiente di dilatazione lineare"}
$$\lambda = \frac{1}{L}\frac{\Delta L}{\Delta T}$$
:::

La lunghezza finale dopo la dilatazione risulta quindi $L_{\mathrm{fin}} = L + \Delta L = L(1 + \lambda \Delta T)$.

### Dilatazione volumica

Per calcolare la variazione di volume occorre distinguere due casi: i corpi isotropi, in cui $\lambda$ ha lo stesso valore in tutte le direzioni e la forma del corpo si conserva nella dilatazione, e i corpi anisotropi (tipicamente i solidi cristallini), in cui $\lambda$ dipende dalla direzione considerata.

Per un corpo isotropo a forma di parallelepipedo di lati $l_1, l_2, l_3$ e volume $V = l_1 l_2 l_3$, alla temperatura $T + \Delta T$ ciascun lato si dilata dello stesso fattore $(1+\lambda \Delta T)$, quindi

$$V + \Delta V = l_1(1+\lambda \Delta T)\, l_2(1+\lambda \Delta T)\, l_3(1+\lambda \Delta T) = V(1+\lambda \Delta T)^3 \approx V(1 + 3\lambda \Delta T),$$

dove si è trascurato il contributo dei termini in $(\lambda \Delta T)^2$ e $(\lambda \Delta T)^3$, legittimo perché $\lambda \Delta T \ll 1$.

Si definisce allora il coefficiente di dilatazione cubica (o volumica) $\alpha$ come la variazione relativa di volume per variazione unitaria di temperatura.

:::formula{id="12.18" label="Dilatazione volumica"}
$$\alpha = \frac{1}{V}\frac{\Delta V}{\Delta T}, \qquad \Delta V = V\alpha \Delta T$$
:::

Per un corpo isotropo si ha $\alpha = 3\lambda$, indipendentemente dalla forma dell'oggetto; analogamente, per una lastra piana isotropa il coefficiente di dilatazione superficiale vale $2\lambda$.

Poiché la massa del corpo non cambia con la temperatura, all'aumentare del volume la densità diminuisce. Un'eccezione notevole è l'acqua tra $0\ \mathrm{^\circ C}$ e $4\ \mathrm{^\circ C}$, dove il coefficiente di dilatazione cubica è negativo: il volume diminuisce all'aumentare di $T$, cioè la densità aumenta, raggiungendo il massimo a $4\ \mathrm{^\circ C}$.

:::image{src="assets/31f210d5-dilatazione-anomala-acqua.svg" alt="Grafico della densità dell'acqua in funzione della temperatura, con un massimo a 4 gradi Celsius" caption="Fig. 12.5 — Densità dell'acqua in funzione della temperatura tra 0 °C e 10 °C: il massimo si ha a 4 °C, dove il coefficiente di dilatazione cubica cambia segno."}
:::

### Dilatazione nei gas: legge isobara

Anche per un gas a pressione costante si osserva sperimentalmente che il volume varia linearmente con la temperatura (legge isobara di Volta-Gay Lussac), con $\alpha$ coefficiente dipendente dal tipo di gas e praticamente costante lungo la trasformazione.

:::formula{id="12.19" label="Legge isobara di Volta-Gay Lussac"}
$$V = V_0\left(1 + \alpha\, t(^{\circ}\mathrm{C})\right)$$
:::

Questa legge empirica, con $t$ espressa in gradi Celsius e $V_0$ il volume a $t=0\ \mathrm{^\circ C}$, sarà ripresa e formalizzata nella trattazione dell'equazione di stato dei gas ideali, in [Gas ideali](ref:chapter/13#p3).

### Esempio svolto

Una sbarra di alluminio ($\lambda = 2,4\cdot 10^{-5}\ \mathrm{K^{-1}}$) ha lunghezza $L_0 = 2,000\ \mathrm{m}$ a $t_0 = 20\ \mathrm{^\circ C}$. Si vuole calcolare la sua lunghezza e il suo allungamento quando viene riscaldata a $t_1 = 120\ \mathrm{^\circ C}$, e la variazione percentuale del suo volume (supponendo la sbarra isotropa).

Dati: $L_0 = 2,000\ \mathrm{m}$, $\lambda = 2,4\cdot 10^{-5}\ \mathrm{K^{-1}}$, $\Delta T = t_1 - t_0 = 100\ \mathrm{K}$ (una variazione di temperatura in gradi Celsius coincide numericamente con quella in kelvin, come visto in [Temperatura e termometria](ref:chapter/12#p3)).

Applicando {{formula:12.16}}:

$$\Delta L = \lambda L_0 \Delta T = 2,4\cdot 10^{-5}\ \mathrm{K^{-1}} \cdot 2,000\ \mathrm{m} \cdot 100\ \mathrm{K} = 4,8\cdot 10^{-3}\ \mathrm{m}.$$

Quindi $L_{\mathrm{fin}} = L_0 + \Delta L = 2,0048\ \mathrm{m}$.

Per la variazione relativa di volume, essendo la sbarra isotropa, $\alpha = 3\lambda = 7,2\cdot 10^{-5}\ \mathrm{K^{-1}}$, e tramite {{formula:12.18}}:

$$\frac{\Delta V}{V} = \alpha \Delta T = 7,2\cdot 10^{-5}\ \mathrm{K^{-1}} \cdot 100\ \mathrm{K} = 7,2\cdot 10^{-3} = 0,72\%.$$

Controllo: le unità si cancellano correttamente ($\mathrm{K^{-1}}\cdot \mathrm{K} = $ numero puro), e l'ordine di grandezza (allungamento di pochi millimetri su due metri, variazione di volume inferiore all'1 %) è coerente con l'ipotesi $\lambda \Delta T \ll 1$ che ha permesso di trascurare i termini quadratici nella derivazione di $\alpha$.

**Errore tipico 12.7**

Un errore frequente consiste nell'applicare {{formula:12.18}} usando $\lambda$ al posto di $\alpha = 3\lambda$, oppure nell'omettere la conversione tra $\Delta T$ in kelvin e in gradi Celsius quando compaiono anche altre grandezze termodinamiche nello stesso esercizio (ad esempio pressione e volume di un gas, da convertire in unità SI prima di sostituire nei calcoli). Come già osservato in generale, un risultato privo delle corrette unità di misura nei passaggi intermedi, o calcolato senza convertire preventivamente i dati, è una scrittura priva di significato, un errore più grave di un semplice errore numerico.

## p7 | Trasmissione del calore

Il secondo principio della termodinamica stabilisce che il calore fluisce spontaneamente da un sistema a temperatura più alta verso uno a temperatura più bassa; quando due sistemi in grado di scambiare calore raggiungono la stessa temperatura, si trovano in equilibrio termico, come stabilito dal principio zero visto in [Sistemi termodinamici ed equilibrio](ref:chapter/12#p2). Il processo con cui l'energia fluisce da una regione più calda a una più fredda si chiama trasmissione del calore, e avviene secondo tre meccanismi distinti: conduzione, convezione e irraggiamento.

### Conduzione: la legge di Fourier

Si ha **conduzione** quando, in un corpo esteso con temperatura non uniforme, c'è trasmissione di energia al suo interno senza trasporto di materia.

Si consideri una parete di superficie $A$ e spessore infinitesimo $dx$, con un gradiente di temperatura al suo interno. La quantità di calore scambiata attraverso la parete nel tempo $dt$ è indicata con $\delta Q$ ed è data dalla **legge di Fourier**

:::formula{id="12.20" label="Legge di Fourier per la conduzione"}
$$\delta Q = -k(T)\,\frac{dT}{dx}\,A\,dt$$
:::

dove $k$ è il coefficiente di conduttività termica, che dipende dal materiale e in generale dalla temperatura, con $\lbrack k\rbrack  = \mathrm{J/(m\cdot s\cdot K)}$; il segno negativo indica che il flusso di calore è diretto nel verso in cui la temperatura diminuisce, cioè opposto al gradiente $dT/dx$.

L'esistenza di un gradiente di temperatura, cioè l'assenza di equilibrio termico globale, è la condizione necessaria per avere trasmissione di calore attraverso il corpo; se $T$ è uniforme, $\delta Q/dt = 0$.

Dividendo la legge di Fourier per $dt$ si ottiene il flusso di calore $\delta Q/dt$

$$\frac{\delta Q}{dt} = -kA\,\frac{dT}{dx} \quad\Rightarrow\quad dT = -\frac{1}{kA}\frac{\delta Q}{dt}\,dx .$$

Se $k$ non dipende dalla temperatura e il regime è stazionario (cioè $\delta Q/dt$ è costante nel tempo e nello spazio lungo la parete), integrando questa equazione fra $x=0$ (dove la temperatura è $T_1$) e la generica coordinata $x$ si ottiene il profilo lineare

:::formula{id="12.21" label="Profilo di temperatura in regime stazionario"}
$$T(x) = T_1 - \frac{1}{kA}\frac{\delta Q}{dt}\,x$$
:::

valido per una parete piana omogenea in condizioni stazionarie, con $k$ costante.

:::image{src="assets/0dc82005-profilo-temperatura-parete.svg" alt="Temperatura decrescente linearmente attraverso una parete piana" caption="Fig. 12.6 — Profilo stazionario di temperatura T(x) in una parete piana soggetta a conduzione, con pendenza costante proporzionale al flusso di calore"}
:::

### Convezione

All'interno di un fluido il calore si propaga soprattutto per **convezione**: il fluido, scaldandosi vicino alla sorgente, diminuisce la propria densità, risale e viene sostituito da fluido più freddo e più denso, innescando correnti convettive che coinvolgono tutta la massa fluida. A differenza della conduzione, nella convezione c'è sia trasmissione di energia sia trasporto di materia.

Il passaggio di calore tra un solido a temperatura $T$ e il fluido circostante a temperatura $T_0 < T$ coinvolge in generale conduzione, convezione e irraggiamento insieme, ed è quindi complesso da descrivere esattamente. Tuttavia, se $\Delta T = T - T_0$ non è troppo grande, è possibile descriverlo in prima approssimazione con la legge di Newton del raffreddamento

:::formula{id="12.22" label="Legge di Newton per lo scambio convettivo"}
$$Q = h\,(T-T_0)\,S\,t$$
:::

dove $S$ è la superficie di contatto fra il solido e il fluido, $t$ il tempo di scambio e $h$ la conducibilità termica esterna, un coefficiente che dipende dalla natura del fluido e dal tipo di moto convettivo: a titolo di esempio, per un filo caldo immerso in aria si ha $h \approx 10\ \mathrm{J/(m^2\cdot s\cdot K)}$.

### Irraggiamento: la legge di Stefan-Boltzmann

A differenza di conduzione e convezione, l'**irraggiamento** non richiede un mezzo materiale: il calore viene scambiato come radiazione elettromagnetica, che si propaga anche nel vuoto. Tutti i corpi emettono radiazione elettromagnetica, visibile per i corpi più caldi e infrarossa per quelli più freddi.

La potenza irraggiata per unità di superficie (potere emissivo) da un corpo con emissività $e$ alla temperatura assoluta $T$ (in kelvin) è data dalla **legge di Stefan-Boltzmann**

:::formula{id="12.23" label="Legge di Stefan-Boltzmann"}
$$\epsilon = \sigma e T^4$$
:::

dove $\sigma = 5{,}67\times10^{-8}\ \mathrm{W/(m^2\cdot K^4)}$ è la costante di Stefan-Boltzmann e $0 \le e \le 1$ è l'emissività del corpo, che dipende dalla natura della superficie. La potenza totale irraggiata da un corpo di superficie $S$ si ottiene moltiplicando $\epsilon$ per $S$, cioè $P_{irr} = \sigma e S T^4$. Ad esempio, un corpo con $e = 0{,}90$, $S = 1{,}0\ \mathrm{m^2}$ e $T = 300\ \mathrm{K}$ irraggia $P_{irr} = 5{,}67\times10^{-8}\times0{,}90\times1{,}0\times300^4 \approx 413\ \mathrm{W}$.

:::image{src="assets/0dc82005-potere-emissivo-stefan-boltzmann.svg" alt="Curva del potere emissivo che cresce come la quarta potenza della temperatura assoluta" caption="Fig. 12.7 — Potere emissivo ε = σeT⁴ in funzione della temperatura assoluta T, per e = 0,90: la crescita è fortemente non lineare, alla quarta potenza"}
:::

Questa espressione dà soltanto la potenza emessa dal corpo, non lo scambio netto con l'ambiente circostante, che a sua volta irraggia verso il corpo. Se il corpo a temperatura $T$ è interamente circondato da un ambiente a temperatura uniforme $T_0$, che si comporta come una superficie molto più estesa del corpo e capace di assorbire e riemettere come un corpo nero, il corpo assorbe dall'ambiente una potenza pari a $\sigma e S T_0^4$. Lo scambio netto di potenza per irraggiamento è allora la differenza fra potenza emessa e potenza assorbita

:::formula{id="12.24" label="Potenza netta scambiata per irraggiamento"}
$$P_{netta} = \sigma e S \left(T^4 - T_0^4\right)$$
:::

se $T > T_0$ il corpo cede calore netto all'ambiente, mentre se $T < T_0$ ne assorbe, in accordo con il verso naturale della trasmissione del calore dal corpo più caldo verso quello più freddo.

Poiché la dipendenza dalla temperatura è alla quarta potenza, l'irraggiamento diventa il meccanismo dominante alle alte temperature, mentre a basse temperature resta spesso trascurabile rispetto a conduzione e convezione: è questo il principio su cui si basa il vaso Dewar, un contenitore a doppia parete argentata sotto vuoto, che elimina conduzione e convezione nell'intercapedine lasciando solo una piccola componente di irraggiamento.

:::image{src="assets/0dc82005-vaso-dewar.png" alt="Vaso Dewar a doppia parete in sezione, con intercapedine sotto vuoto e superficie argentata" caption="Fig. 12.8 — Un vaso Dewar a doppia parete argentata sotto vuoto: l'intercapedine priva d'aria elimina conduzione e convezione, lasciando solo una piccola componente di irraggiamento. Immagine: B. Burger 1907 / Wikimedia Commons, Public domain"}
:::

### Esempio svolto

Una parete piana di area $A = 2{,}0\ \mathrm{m^2}$ e spessore $d = 0{,}10\ \mathrm{m}$ separa due ambienti alle temperature costanti $T_1 = 293\ \mathrm{K}$ (interno) e $T_2 = 278\ \mathrm{K}$ (esterno). Il materiale ha conduttività termica $k = 0{,}80\ \mathrm{J/(m\cdot s\cdot K)}$, supposta costante. Si vuole calcolare la potenza termica che fluisce attraverso la parete in regime stazionario.

In regime stazionario il flusso $\delta Q/dt$ è costante lungo $x$, quindi il profilo $T(x)$ è lineare fra $T_1$ e $T_2$: la pendenza è $(T_2-T_1)/d$. Dalla legge di Fourier $\delta Q/dt = -kA\,dT/dx$, con $dT/dx = (T_2-T_1)/d$, si ottiene

$$\frac{\delta Q}{dt} = kA\,\frac{T_1-T_2}{d} .$$

Sostituendo i numeri,

$$\frac{\delta Q}{dt} = 0{,}80\ \mathrm{\frac{J}{m\cdot s\cdot K}} \times 2{,}0\ \mathrm{m^2} \times \frac{293\ \mathrm{K} - 278\ \mathrm{K}}{0{,}10\ \mathrm{m}} = 240\ \mathrm{W} .$$

Il risultato è positivo perché il calore fluisce nel verso delle temperature decrescenti, dall'interno verso l'esterno, come richiesto dal segno meno nella legge di Fourier. L'ordine di grandezza (poche centinaia di watt per pochi metri quadrati con un $\Delta T$ di 15 K) è coerente con quanto ci si aspetta per una parete non isolante.

### Errori tipici

**Errore tipico 12.8**

Uno sbaglio frequente consiste nell'usare le grandezze $Q$ e $W$ come se fossero funzioni di stato, scrivendo ad esempio $\Delta Q$ per indicare il calore scambiato in una trasformazione: il primo principio della termodinamica stabilisce invece che né il calore né il lavoro sono funzioni dello stato termodinamico, mentre l'energia interna lo è. Lo stesso principio vale per la potenza termica scambiata per conduzione, convezione o irraggiamento, che è sempre una grandezza di scambio (dipendente dal processo), non una variazione di una funzione di stato.

Un secondo errore comune è non convertire o uniformare le unità di misura prima di sostituire nelle formule, ad esempio mescolando centimetri e metri, oppure gradi Celsius e kelvin nella legge di Stefan-Boltzmann, che richiede la temperatura assoluta: un errore di questo tipo può produrre risultati sbagliati anche di diversi ordini di grandezza.
