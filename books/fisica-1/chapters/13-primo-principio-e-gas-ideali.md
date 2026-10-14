---
chapter: 13
title: Primo principio e gas ideali
---

## p1 | Introduzione

Per capire come un gas si riscalda, si espande o compie lavoro, non basta conoscere le formule: occorre distinguere l’energia scambiata con l’ambiente dall’energia interna del sistema. Il primo principio offre questo bilancio e permette di seguire l’energia lungo trasformazioni diverse. Il capitolo collega poi le grandezze misurabili, come pressione, volume e temperatura, al moto delle molecole, mostrando come il modello microscopico spieghi le proprietà macroscopiche del gas.

È utile conoscere già i concetti di temperatura e calore introdotti in [Temperatura e termometria](ref:chapter/12#p3) e in [Calore e lavoro](ref:chapter/12#p4), insieme alle unità di misura delle grandezze fisiche e alle conversioni tra esse. Serviranno inoltre familiarità con le proporzioni e con le equazioni, per ricavare una grandezza incognita da una relazione tra variabili.

Al termine saprai applicare il primo principio alle trasformazioni dei gas ideali, determinando calore, lavoro e variazione di energia interna nei casi più comuni. Saprai usare l’equazione di stato per descrivere lo stato di un gas e riconoscere quando l’energia interna dipende soltanto dalla temperatura. Infine, userai la teoria cinetica e il principio di equipartizione per collegare il calore specifico e l’energia interna ai gradi di libertà delle molecole.

## p2 | Primo principio ed energia interna

Nella sezione precedente si è visto come l'esperimento di Joule permetta di definire l'energia interna $U$ attraverso il lavoro adiabatico, e come calore e lavoro meccanico siano due forme equivalenti di scambio di energia (si veda [Calore e lavoro](ref:chapter/12#p4)). In questa sezione si generalizza quel risultato al caso più comune, in cui un sistema scambia con l'ambiente sia calore sia lavoro, ottenendo l'enunciato completo del primo principio della termodinamica.

### Convenzione dei segni

Prima di enunciare il principio è indispensabile fissare senza ambiguità il segno delle due grandezze scambiate, perché è la fonte più comune di errore negli esercizi.

Si definisce positivo il calore $Q$ quando è assorbito dal sistema (fornito dall'ambiente al sistema), e negativo quando è ceduto dal sistema all'ambiente.

Si definisce positivo il lavoro $W$ quando è compiuto dal sistema sull'ambiente (il sistema si espande cedendo energia meccanica all'esterno); si assume negativo quando è l'ambiente a compiere lavoro sul sistema (il sistema viene compresso). Coerentemente, se il sistema compie lavoro positivo verso l'esterno, a parità di altre condizioni la sua energia interna diminuisce, mentre se il lavoro è compiuto sul sistema l'energia interna aumenta.

Questa è la stessa convenzione già usata nella sezione [Calore e lavoro](ref:chapter/12#p4) per il lavoro termodinamico $\delta W = p\, dV$, ed è la convenzione standard con cui nel seguito verranno rappresentate le macchine termiche.

### Enunciato del primo principio

Si consideri un sistema che, oltre a scambiare lavoro meccanico con l'ambiente, possa scambiare anche calore, cioè energia trasmessa senza che vi sia un corrispondente moto macroscopico osservabile. Si trova sperimentalmente, in ogni caso esaminato, il seguente risultato.

**Teorema 13.1** (primo principio della termodinamica). Per un sistema chiuso, se durante una trasformazione da uno stato di equilibrio $A$ a uno stato di equilibrio $B$ le variazioni delle energie cinetica e potenziale macroscopiche sono nulle, allora la differenza $Q_{A\to B}-W_{A\to B}$ dipende solo dagli stati estremi $A$ e $B$, anche se $Q_{A\to B}$ e $W_{A\to B}$ dipendono individualmente dal percorso seguito.

Questo fatto sperimentale permette di scrivere

:::formula{id="13.1" label="Primo principio della termodinamica"}
$$\Delta U_{A\to B} = Q_{A\to B} - W_{A\to B}$$
:::

dove $U$ è detta energia interna del sistema. Il primo principio è assunto come postulato fondato sull'esperienza, analogamente al modo in cui si era postulata l'esistenza dell'energia potenziale per le forze conservative in meccanica.

In forma infinitesima, per una trasformazione elementare, si scrive

:::formula{id="13.2" label="Primo principio in forma infinitesima"}
$$dU = \delta Q - \delta W$$
:::

da cui, integrando lungo la trasformazione da $A$ a $B$,

$$Q_{A\to B} = \int_A^B \delta Q, \qquad W_{A\to B} = \int_A^B \delta W, \qquad \Delta U_{A\to B} = \int_A^B dU = U(B) - U(A).$$

Si è scelto deliberatamente il simbolo $\delta$ per le quantità infinitesime di calore e di lavoro, in contrasto con il simbolo $d$ usato per l'energia interna: questa distinzione notazionale anticipa la proprietà fondamentale discussa nel prossimo paragrafo.

### L'energia interna come funzione di stato

Dal primo principio discendono diverse conseguenze concettuali importanti, che vale la pena isolare con cura.

Esiste una funzione delle sole coordinate termodinamiche del sistema (cioè una funzione di stato), chiamata energia interna, tale che le sue variazioni $\Delta U$ coincidono con il bilancio netto degli scambi energetici $Q-W$ fra sistema e ambiente durante una qualunque trasformazione che unisca gli stessi due stati. Essendo $U$ funzione di stato, il suo valore in un dato stato di equilibrio non dipende dalla storia con cui il sistema è arrivato a quello stato, ma solo dalle coordinate termodinamiche che lo caratterizzano in quel momento.

Il primo principio costituisce quindi l'espressione del bilancio energetico di una trasformazione termodinamica: l'energia fornita a un sistema (per via termica o meccanica) non si "perde", ma viene immagazzinata come energia interna e può essere successivamente restituita all'ambiente.

Il termine energia interna non indica l'energia cinetica del sistema considerato come un unico corpo macroscopico (quella è già energia meccanica, trattata nei capitoli precedenti), ma un'energia legata alle proprietà microscopiche del sistema, come il moto disordinato delle molecole e le interazioni intramolecolari; tale energia non dipende dal moto del sistema nel suo insieme, ma dal suo stato termodinamico, e in particolare, come si vedrà, dalla sua temperatura.

**Definizione 13.1** (differenziale esatto e non esatto). La variazione infinitesima di energia interna $dU$ è un differenziale esatto: il suo integrale lungo un qualunque cammino chiuso è nullo, e $\int_A^B dU$ dipende solo dagli estremi $A$, $B$. Le quantità infinitesime di calore $\delta Q$ e di lavoro $\delta W$ non sono invece differenziali esatti: i loro integrali lungo cammini diversi che congiungono $A$ a $B$ danno in generale risultati diversi, e per questo si scrivono con il simbolo $\delta$ e non con $d$.

Una conseguenza immediata, utile nel calcolo pratico, è che in una trasformazione ciclica (lo stato finale coincide con lo stato iniziale) si ha sempre $\Delta U = 0$, e dunque $Q = W$: il calore netto assorbito in un ciclo è pari al lavoro netto compiuto dal sistema. Questa osservazione sarà il punto di partenza per lo studio delle macchine termiche nei capitoli successivi.

Essendo $U$ una funzione di stato, per calcolarne la variazione tra due stati $A$ e $B$ si può scegliere qualunque trasformazione (anche fittizia, purché compatibile con le equazioni di stato del sistema) che li congiunga, anche se diversa dalla trasformazione reale: il risultato per $\Delta U$ sarà lo stesso, mentre $Q$ e $W$ singolarmente cambieranno in base al percorso scelto. Questa tecnica, detta scomposizione in trasformazioni ausiliarie, verrà usata sistematicamente per i gas ideali nella sezione successiva.

### Esempio svolto

**Esempio 13.1.** Un sistema termodinamico passa da uno stato $A$ a uno stato $B$ lungo due trasformazioni diverse.

Lungo la trasformazione (I) il sistema assorbe un calore $Q_{\mathrm I} = 500\ \mathrm{J}$ e compie un lavoro $W_{\mathrm I} = 200\ \mathrm{J}$ sull'ambiente.

Lungo la trasformazione (II), che collega gli stessi stati $A$ e $B$ ma con un percorso diverso, il sistema compie un lavoro $W_{\mathrm{II}} = 50\ \mathrm{J}$ sull'ambiente. Si chiede quale calore $Q_{\mathrm{II}}$ venga scambiato lungo (II).

*Schema.* Gli stati $A$ e $B$ sono fissati; $U$ dipende solo da essi, quindi $\Delta U$ deve essere identica per i due percorsi, mentre $Q$ e $W$ possono differire.

*Soluzione letterale.* Applicando il primo principio {{formula:13.1}} alla trasformazione (I),

$$\Delta U_{A\to B} = Q_{\mathrm I} - W_{\mathrm I}.$$

Poiché $U$ è funzione di stato, la stessa $\Delta U_{A\to B}$ vale anche per la trasformazione (II):

$$\Delta U_{A\to B} = Q_{\mathrm{II}} - W_{\mathrm{II}} \quad \Longrightarrow \quad Q_{\mathrm{II}} = \Delta U_{A\to B} + W_{\mathrm{II}}.$$

*Numeri.* Dalla trasformazione (I):

$$\Delta U_{A\to B} = 500\ \mathrm{J} - 200\ \mathrm{J} = 300\ \mathrm{J}.$$

Sostituendo nella trasformazione (II):

$$Q_{\mathrm{II}} = 300\ \mathrm{J} + 50\ \mathrm{J} = 350\ \mathrm{J}.$$

*Controllo.* $\Delta U$ è la stessa nei due casi (300 J), come deve essere trattandosi di una funzione di stato, mentre $Q$ e $W$ sono diversi nei due percorsi (500 J e 200 J contro 350 J e 50 J): questo è proprio il contenuto fisico del primo principio enunciato sopra. Il segno positivo di $Q_{\mathrm{II}}$ indica calore assorbito dal sistema, coerente con la convenzione adottata.

### Errore tipico

**Errore tipico 13.1.** Uno degli errori concettuali più gravi, e più frequenti, consiste nello scrivere $\Delta Q_{A\to B}$ o $\Delta W_{A\to B}$ al posto di $Q_{A\to B}$ e $W_{A\to B}$. Il simbolo $\Delta f$ ha senso solo se $f$ è una funzione di stato, cioè una funzione definita in ogni punto dello spazio delle coordinate termodinamiche, di cui si possa calcolare la differenza $\Delta f \doteq f(B) - f(A)$ tra due stati. Scrivere $\Delta W_{A\to B}$ significherebbe trattare il lavoro come una funzione di stato di cui si calcola la variazione $W(B)-W(A)$, e analogamente per $\Delta Q_{A\to B}$; ma il primo principio stabilisce esattamente il contrario, cioè che né $Q$ né $W$ sono funzioni di stato, mentre lo è soltanto $U$. Chi scrive $\Delta Q_{A\to B}$ o $\Delta W_{A\to B}$, anche se esegue correttamente i calcoli numerici, dimostra di non avere compreso il contenuto del primo principio. La notazione corretta è dunque sempre

$$\Delta U_{A\to B} = Q_{A\to B} - W_{A\to B},$$

con $Q_{A\to B}$ e $W_{A\to B}$ (senza $\Delta$) a indicare le quantità di calore e di lavoro scambiate durante quella particolare trasformazione.

Un secondo errore di notazione, dello stesso tipo, consiste nello scrivere $\Delta U = n c_V\, dT$ al posto della forma corretta per una trasformazione finita, $\Delta U = n c_V \Delta T$: il simbolo $d$ va riservato alle quantità infinitesime, il simbolo $\Delta$ alle variazioni finite fra due stati; mescolarli produce espressioni dimensionalmente ambigue e concettualmente scorrette. La dimostrazione di questa relazione per il gas ideale, e il ruolo del calore specifico molare $c_V$, sono oggetto della sezione [Gas ideali](ref:chapter/13#p3).

## p3 | Gas ideali

### La mole e l'equazione di stato

Per descrivere quantitativamente un gas occorre innanzitutto fissare l'unità di misura della quantità di sostanza. Si chiama mole la quantità di sostanza che contiene esattamente $6{,}02214076\cdot10^{23}$ entità elementari. La costante di Avogadro $N_A = 6{,}02214076\cdot10^{23}\ \mathrm{mol^{-1}}$ esprime invece quante entità elementari sono contenute in una mole, e ha le dimensioni dell'inverso di una quantità di sostanza. Il riferimento agli atomi contenuti in $0{,}012\ \mathrm{kg}$ dell'isotopo 12 del carbonio corrisponde alla precedente definizione SI della mole. Se un sistema contiene $N$ entità elementari, il numero di moli è $n = N/N_A$.

La legge di Avogadro afferma che, nel modello dei gas ideali, volumi uguali di gas diversi alla stessa temperatura e pressione contengono lo stesso numero di molecole. Di conseguenza, una mole di gas ideale a una data temperatura e pressione occupa lo stesso volume. Alla pressione atmosferica $p_0 = 101325\ \mathrm{Pa}$ e alla temperatura $T_0 = 273{,}15\ \mathrm{K}$, il volume molare del modello ideale vale $V_m = 0{,}022414\ \mathrm{m^3} = 22{,}414\ \mathrm{L}$, cosicché $n$ moli occupano un volume $nV_m$. Nei gas reali il volume molare può differire da questo valore.

Il gas ideale (o perfetto) è un modello astratto cui tendono molti gas reali in condizioni di pressione bassa (buona approssimazione già alla pressione atmosferica) e di temperatura non troppo bassa, per evitare la condensazione, né troppo alta. Il modello si basa su quattro ipotesi: le molecole sono assimilate a sfere di volume trascurabile rispetto al volume del recipiente; il loro moto avviene con uguale probabilità in ogni direzione; non esistono forze di attrazione o repulsione tra le molecole, e gli urti molecola-molecola e molecola-parete sono elastici; a ciascuna molecola si applicano le leggi della meccanica classica.

Un gas si dice ideale quando, in ogni stato di equilibrio, le sue coordinate termodinamiche $p$, $V$, $T$ obbediscono all'equazione di stato dei gas perfetti, ottenuta combinando la legge isoterma di Boyle ($pV = \text{costante}$ a $T$ fissata), le leggi isobara e isocora di Volta-Gay Lussac e la legge di Avogadro.

:::formula{id="13.3" label="Equazione di stato dei gas ideali"}
$$pV = nRT$$
:::

con $R = 8{,}314\ \mathrm{J/(mol\,K)}$ costante universale dei gas e $T$ la temperatura assoluta in kelvin. L'equazione mostra che tra le tre variabili $p$, $V$, $T$ soltanto due sono indipendenti: fissate due di esse in uno stato di equilibrio, la terza è univocamente determinata.

Quando il gas percorre una trasformazione quasi-statica da uno stato $A$ a uno stato $B$, il punto rappresentativo si muove con continuità nel piano di Clapeyron $(V,p)$ seguendo una curva definita, perché in ogni istante il gas si trova in uno stato di equilibrio; se invece la trasformazione non è quasi-statica, gli stati intermedi non sono di equilibrio e non esiste una curva ben definita da tracciare, indipendentemente dal fatto che la trasformazione sia reversibile o irreversibile. Questa distinzione, già introdotta nella sezione su [Sistemi termodinamici ed equilibrio](ref:chapter/12#p2), tornerà centrale nella sezione sulle [Trasformazioni dei gas ideali](ref:chapter/13#p4).

### L'energia interna del gas ideale dipende solo da T

La sezione precedente ha enunciato il primo principio nella forma $\Delta U = Q - W$ con la convenzione di segno del libro, e ha mostrato che $U$ è una funzione di stato (si veda [Primo principio ed energia interna](ref:chapter/13#p2)). Resta da stabilire da quali variabili dipenda $U$ per un gas ideale; la risposta si ottiene dall'esperienza di Joule sull'espansione libera.

Si considera un recipiente a pareti rigide e diatermiche, diviso in due parti uguali da un rubinetto: nella parte sinistra è presente il gas, nella parte destra il vuoto. Il recipiente è a sua volta immerso in un contenitore adiabatico (un calorimetro) e il sistema è inizialmente in equilibrio alla temperatura $T$. Aprendo il rubinetto il gas si espande liberamente, occupando tutto il volume disponibile; l'espansione è detta libera perché nessuna forza esterna la contrasta. Sperimentalmente si osserva che, qualunque sia il grado di apertura del rubinetto, la temperatura del liquido calorimetrico al termine del processo è sempre pari al valore iniziale $T$.

Da questa osservazione seguono due conseguenze. Primo, il gas non scambia calore con il calorimetro ($Q=0$) né compie lavoro sull'esterno ($W=0$), perché l'espansione avviene nel vuoto e non contro alcuna pressione esterna; dal primo principio si ha quindi $\Delta U = Q - W = 0$. L'espansione libera è in realtà una trasformazione adiabatica irreversibile: non essendo quasi-statica, le variabili termodinamiche non sono definite negli stati intermedi, che non sono stati di equilibrio.

**Definizione 13.2** (espansione libera adiabatica). Un gas in espansione libera adiabatica, in un sistema chiuso che non scambia calore con l'esterno, non varia la propria energia interna. Se il gas potesse scambiare calore con l'ambiente durante l'espansione, l'assenza di lavoro ($W=0$) non basterebbe a garantire $\Delta U = 0$, poiché dal primo principio resterebbe $\Delta U = Q$.

Secondo, nell'esperimento la temperatura finale coincide con quella iniziale, mentre pressione e volume differiscono tra i due stati. L'esperimento di Joule descritto sopra confronta soltanto uno stato iniziale e uno stato finale in cui il volume raddoppia; il risultato si generalizza però a un rapporto qualsiasi tra volume iniziale e finale, ripetendo l'esperimento con recipienti di forma e frazioni di volume diverse: in ogni caso la temperatura finale coincide con quella iniziale. Questa generalizzazione, assunta qui come fatto sperimentale per il modello di gas ideale, troverà una giustificazione microscopica nella sezione sulla [Teoria cinetica ed equipartizione](ref:chapter/13#p5), dove si mostra che, nel modello di molecole rigide privo di struttura interna, l'energia interna del gas ideale coincide con la sola energia cinetica delle molecole, funzione della sola temperatura e indipendente dal volume occupato. Se le molecole possiedono anche gradi di libertà vibrazionali, come illustrato in quella stessa sezione, all'energia cinetica si aggiunge un'energia potenziale intramolecolare associata alle vibrazioni; tuttavia, per il principio di equipartizione, anche questo contributo dipende soltanto dalla temperatura e non dal volume occupato dal gas, cosicché l'energia interna del gas ideale resta comunque funzione della sola $T$. Per concludere che, nel gas ideale, $U$ dipende soltanto dalla temperatura occorre dunque estendere l'invarianza dell'energia interna osservata sperimentalmente alle espansioni libere tra volumi iniziali e finali arbitrari. Nei gas reali, nei liquidi e nei solidi si osservano invece variazioni di temperatura nell'espansione libera, segno di una dipendenza residua dell'energia interna dal volume.

Per ottenere l'espressione esplicita di $\Delta U$ in funzione di $T$ si considerano due stati di equilibrio generici $A$ e $B$ di $n$ moli di gas ideale, collegati tramite due trasformazioni di comodo: prima una isocora $A \to C$ (volume costante), poi una isoterma $C \to B$ (temperatura costante). Poiché $U$ dipende solo da $T$, lungo l'isoterma $C \to B$ l'energia interna non varia, cioè $U_B = U_C$; quindi $\Delta U_{A\to B} = U_B - U_A = U_C - U_A$, che è proprio la variazione di energia interna nella sola trasformazione isocora $A \to C$.

Applicando il primo principio alla trasformazione isocora, in cui $W=0$ perché il volume non cambia, si ottiene $\Delta U = Q$, dove $Q$ è il calore scambiato a volume costante. Introducendo il calore specifico molare a volume costante $c_V$ (definito da $\delta Q = n c_V\,dT$ nelle trasformazioni isocore), e assumendolo indipendente dalla temperatura in un primo intervallo di validità, si ricava l'espressione generale, valida per qualunque trasformazione del gas ideale perché $U$ dipende solo da $T$.

:::formula{id="13.4" label="Energia interna del gas ideale"}
$$\Delta U = U_B - U_A = n\int_{T_A}^{T_B} c_V(T)\,dT$$
:::

Se $c_V$ è costante nell'intervallo di temperatura considerato, l'integrale si riduce a $\Delta U = n c_V (T_B - T_A)$.

Questa relazione è il cuore del risultato: a differenza di quanto accade per solidi e liquidi, in cui $U$ dipende in generale anche dal volume, per il gas ideale basta conoscere la variazione di temperatura per calcolare $\Delta U$, indipendentemente dal tipo di trasformazione percorsa. Il calcolo esplicito di $c_V$ (e della relazione di Mayer $c_p - c_V = R$ tra i calori specifici molari a pressione e a volume costante) è rimandato alla sezione sulle [Trasformazioni dei gas ideali](ref:chapter/13#p4), dove si mostra anche che $\gamma = c_p/c_V$ vale $5/3$ per i gas monoatomici e $7/5$ per quelli biatomici.

### Esempio svolto

**Esempio 13.2.** Una mole di gas ideale biatomico occupa un volume $V_A = 10\ \mathrm{L}$ ed è tenuta alla pressione $p_A = 1$ bar. Calcolare la temperatura del gas.

Dati: $n = 1$ mol, $V_A = 10\ \mathrm{L}$, $p_A = 1$ bar.

Si convertono tutti i dati nelle unità del Sistema Internazionale prima di sostituire nell'equazione di stato:
$$V_A = 10\ \mathrm{L} = 10\cdot10^{-3}\ \mathrm{m^3} = 10^{-2}\ \mathrm{m^3}, \qquad p_A = 1\ \mathrm{bar} = 10^5\ \mathrm{Pa}.$$

Dall'equazione di stato {{formula:13.3}} si ricava la temperatura:
$$T_A = \frac{p_A V_A}{nR}.$$

Sostituendo i valori numerici con le relative unità:
$$T_A = \frac{(1\cdot10^5\ \mathrm{N/m^2})(10^{-2}\ \mathrm{m^3})}{(1\ \mathrm{mol})\left(8{,}314\ \mathrm{J/(mol\,K)}\right)} = \frac{10^3\ \mathrm{N\,m}}{8{,}314\ \mathrm{J/K}} = 120{,}3\ \mathrm{K}.$$

Il controllo dimensionale è immediato: $\mathrm{N\,m} = \mathrm{J}$, quindi il numeratore ha unità $\mathrm{J}$ e il denominatore unità $\mathrm{J/K}$. Il rapporto ha dunque unità $\mathrm{J}/(\mathrm{J/K}) = \mathrm{K}$. L'ordine di grandezza, poco più di cento kelvin, è compatibile con un gas a bassa pressione racchiuso in un piccolo volume.

### Errore tipico

**Errore tipico 13.2** (unità di misura non convertite). Un errore ricorrente consiste nell'applicare l'equazione di stato sostituendo direttamente i numeri dati nell'enunciato senza convertirli nelle unità del Sistema Internazionale, ad esempio scrivendo

$$
T_A = \frac{p_A V_A}{nR} = \frac{1\cdot10}{1\cdot 8{,}314} = 1{,}203\ \mathrm{K} \qquad \text{(SBAGLIATO)}
$$

usando $p_A$ in bar e $V_A$ in litri senza conversione. L'errore produce due difetti: un risultato numericamente sbagliato di diversi ordini di grandezza, e un'uguaglianza priva di significato fisico tra un numero puro (il rapporto fra i dati non convertiti) e una grandezza dimensionata (la temperatura). La regola, già richiamata nella sezione su [Temperatura e termometria](ref:chapter/12#p3), è di convertire sempre pressione, volume e temperatura nelle unità SI (Pa, $\mathrm{m^3}$, K) prima di sostituire nell'equazione di stato.

## p4 | Trasformazioni dei gas ideali

Le quattro trasformazioni quasi-statiche fondamentali — isocora, isobara, isoterma, adiabatica — sono già state definite nella sezione su [Sistemi termodinamici ed equilibrio](ref:chapter/12#p2); qui le applichiamo al gas ideale per calcolare esplicitamente $Q$, $W$ e $\Delta U$. Nel piano di Clapeyron $(V,p)$ una trasformazione isoterma è un ramo di iperbole, un'isobara un segmento orizzontale e un'isocora un segmento verticale; una trasformazione che attraversa stati di equilibrio è rappresentata da una curva continua, mentre una trasformazione che passa per stati di non equilibrio si disegna con una linea tratteggiata. In ogni caso vale il primo principio $\Delta U = Q - W$ con la convenzione di segno già fissata, e per il gas ideale l'energia interna dipende solo dalla temperatura, qualunque sia la trasformazione. In generale, se $c_V$ varia con $T$, la variazione di energia interna va calcolata con $\Delta U = n\int_{T_A}^{T_B} c_V(T)\,dT$; nelle applicazioni che seguono assumiamo, come è usuale in questo contesto, che $c_V$ (e quindi anche $c_p$ e $\gamma = c_p/c_V$) siano costanti nell'intervallo di temperatura considerato, cosicché si possa scrivere semplicemente $\Delta U = n c_V \Delta T$; questa stessa ipotesi è necessaria per integrare l'equazione delle adiabatiche reversibili e ottenere $T V^{\gamma-1} = \text{costante}$.

### Isocore, isobare, isoterme

**Trasformazione isocora.** Il gas è chiuso in un recipiente rigido e diatermico, quindi $V=\text{cost}$ e non vi è parete mobile su cui il gas possa compiere lavoro: $W=0$. Dal primo principio

$$Q_{AB} = \Delta U = n c_V (T_B - T_A)$$

tutto il calore scambiato va in energia interna. Dall'equazione di stato, a volume costante, $p/T = nR/V = \text{costante}$, quindi $p_A/T_A = p_B/T_B$: se il gas assorbe calore ($Q>0$) pressione e temperatura aumentano insieme, se cede calore diminuiscono insieme.

**Trasformazione isobara.** Il gas è in un recipiente con una parete mobile su cui agisce una pressione esterna costante $p$. Il calore scambiato e la variazione di energia interna sono

$$Q_{AB} = n c_p (T_B - T_A), \qquad \Delta U = n c_V (T_B - T_A)$$

e il lavoro, ricavato per differenza tramite il primo principio, vale

$$W_{AB} = Q_{AB} - \Delta U = n(c_p - c_V)(T_B - T_A)$$

coincidendo, come deve, con $W_{AB} = p(V_B - V_A) = nR(T_B - T_A)$ ottenuto direttamente dall'equazione di stato. Vale inoltre $V_A/T_A = V_B/T_B$.

:::formula{id="13.5" label="Calore e lavoro in una trasformazione isobara"}
$$Q = n c_p \Delta T, \qquad W = p\Delta V = nR\Delta T$$
:::

**Relazione di Mayer.** Confrontando le due trasformazioni precedenti fra gli stessi estremi di temperatura si ricava il legame fra $c_p$ e $c_V$. Si considerino due trasformazioni con la stessa $\Delta T$: una isocora da $A$ a $B$ e una isobara da $A$ a $C$. Per l'isocora

$$Q_V = n c_V \Delta T = \Delta U, \qquad W=0$$

per l'isobara

$$Q_p = n c_p \Delta T = \Delta U + p\Delta V$$

Ma $\Delta U$ è la stessa nelle due trasformazioni, perché per il gas ideale dipende solo da $\Delta T$, che è uguale nei due casi. Sostituendo $\Delta U = n c_V \Delta T$ e $p\Delta V = nR\Delta T$ (equazione di stato) nella seconda relazione e uguagliando si ottiene, dopo aver diviso per $n\Delta T$,

:::formula{id="13.6" label="Relazione di Mayer"}
$$c_p - c_V = R$$
:::

che mostra perché $c_p > c_V$: a pressione costante parte del calore assorbito serve a compiere lavoro di espansione, non solo ad aumentare l'energia interna. Definendo il rapporto

:::formula{id="13.7" label="Rapporto dei calori specifici"}
$$\gamma = \frac{c_p}{c_V} > 1$$
:::

i valori previsti dal modello cinetico (ripresi nella sezione successiva) sono $\gamma = 5/3$ per i gas monoatomici e $\gamma = 7/5$ per i gas biatomici; dalla relazione di Mayer segue anche $c_V = R/(\gamma-1)$.

**Trasformazione isoterma reversibile.** Il gas è a contatto con una sorgente di calore a temperatura $T$ costante, cosicché $\Delta U = 0$ e $Q_{AB}=W_{AB}$. Se la trasformazione è reversibile il lavoro si calcola esplicitamente usando $p=nRT/V$:

:::formula{id="13.8" label="Calore e lavoro in una isoterma reversibile"}
$$Q_{AB} = W_{AB} = \int_A^B p\,dV = \int_A^B \frac{nRT}{V}\,dV = nRT\ln\left(\frac{V_B}{V_A}\right)$$
:::

con $p_A V_A = p_B V_B$. In un'espansione isoterma il gas compie lavoro positivo e assorbisce calore, pur non variando la propria temperatura; in una compressione subisce lavoro negativo e cede calore. Un errore tipico è pensare che $Q=0$ perché $T$ non cambia: al contrario, proprio perché $\Delta U=0$, tutto il calore scambiato si trasforma in lavoro, e lo scambio di calore in un'isoterma reversibile non è mai nullo.

### Adiabatiche

Una trasformazione è adiabatica quando il sistema è termicamente isolato, $Q=0$, per cui il primo principio si riduce a

$$\Delta U = -W$$

ossia tutto il lavoro compiuto dal gas (o sul gas) proviene esclusivamente dalla variazione della sua energia interna.

Se l'adiabatica è anche reversibile, si può ricavare l'equazione della curva nel piano di Clapeyron partendo dal primo principio in forma infinitesima:

$$\delta Q = dU + \delta W = n c_V\,dT + p\,dV = 0$$

Sostituendo $p = nRT/V$ dall'equazione di stato,

$$n c_V\,dT + \frac{nRT}{V}\,dV = 0$$

e usando la relazione di Mayer $R = c_p - c_V$ si ottiene, dividendo per $nc_V$,

$$\frac{dT}{T} + (\gamma-1)\frac{dV}{V} = 0$$

che, integrata tra lo stato iniziale $A$ e lo stato finale $B$ assumendo $\gamma$ costante nell'intervallo (come stabilito all'inizio della sezione), dà $\ln(V_B/V_A)^{\gamma-1} = \ln(T_A/T_B)$, cioè

:::formula{id="13.9" label="Equazione delle adiabatiche reversibili in T e V"}
$$T\,V^{\gamma-1} = \text{costante}$$
:::

Con un procedimento analogo, eliminando $T$ tramite $pV=nRT$, si ottengono le due forme equivalenti

:::formula{id="13.10" label="Equazione delle adiabatiche reversibili in p e V"}
$$p\,V^{\gamma} = \text{costante}, \qquad T\,p^{\frac{1-\gamma}{\gamma}} = \text{costante}$$
:::

Nel piano $(V,p)$ una curva adiabatica reversibile è più inclinata di un'isoterma passante per lo stesso punto, perché $\gamma>1$: a parità di espansione, la pressione cala più rapidamente lungo l'adiabatica.

:::image{src="assets/282f2feb-isoterma-vs-adiabatica.svg" alt="Confronto fra una curva isoterma e una curva adiabatica reversibile nel piano V-p, uscenti dallo stesso punto" caption="Fig. 13.1 — Isoterma (p proporzionale a 1/V) e adiabatica reversibile (p proporzionale a 1/V^gamma) a partire dallo stesso stato iniziale: l'adiabatica è più inclinata perché gamma > 1"}
:::

Il lavoro in un'adiabatica reversibile si ottiene direttamente da $W=-\Delta U$:

:::formula{id="13.11" label="Lavoro in una trasformazione adiabatica reversibile"}
$$W_{AB} = -\Delta U_{AB} = n c_V (T_A - T_B) = \frac{p_A V_A - p_B V_B}{\gamma - 1}$$
:::

espressione equivalente ricavata usando $c_V = R/(\gamma-1)$ e l'equazione di stato nei due stati.

**Esempio 13.3.** Due moli di un gas ideale monoatomico ($\gamma = 5/3$, $c_V = \tfrac{3}{2}R$) occupano inizialmente $V_A = 10{,}0\ \text{L}$ a $T_A = 400\ \text{K}$. Il gas si espande adiabaticamente e reversibilmente fino a $V_B = 20{,}0\ \text{L}$. Si vogliono $T_B$, $\Delta U$, $Q$ e $W$.

Dalla {{formula:13.9}}:

$$T_B = T_A \left(\frac{V_A}{V_B}\right)^{\gamma - 1} = 400\ \text{K} \cdot (0{,}500)^{2/3} = 400\ \text{K} \cdot 0{,}630 = 252\ \text{K}$$

L'energia interna varia secondo {{formula:13.4}}, con $c_V = \tfrac{3}{2}(8{,}314\ \text{J/(mol·K)}) = 12{,}47\ \text{J/(mol·K)}$:

$$\Delta U = n c_V (T_B - T_A) = 2\ \text{mol} \cdot 12{,}47\ \frac{\text{J}}{\text{mol·K}} \cdot (252 - 400)\ \text{K} \approx -3{,}69\cdot 10^3\ \text{J}$$

Essendo adiabatica, $Q=0$, e dal primo principio $W = Q - \Delta U = 3{,}69\cdot 10^3\ \text{J}$. Il controllo con la {{formula:13.11}} usando $p_A V_A = nRT_A = 6{,}65\cdot 10^3\ \text{J}$ e $p_B V_B = nRT_B = 4{,}19\cdot 10^3\ \text{J}$ dà $W = (6{,}65 - 4{,}19)\cdot 10^3/(2/3) \approx 3{,}69\cdot 10^3\ \text{J}$, in accordo. Il segno positivo di $W$ è coerente con un'espansione: il gas compie lavoro sull'ambiente a spese della propria energia interna, che infatti diminuisce e la temperatura scende.

### Trasformazioni irreversibili

Una trasformazione reversibile avviene attraverso una successione continua di stati di equilibrio e in assenza di forze dissipative. Una trasformazione è irreversibile se presenta forze dissipative o se attraversa stati di non equilibrio, o per entrambe le ragioni. L’irreversibilità, da sola, non implica che le variabili termodinamiche siano indefinibili negli stati intermedi: in una trasformazione quasi-statica dissipativa, per esempio con attrito, gli stati del gas possono essere di equilibrio e $p$ e $T$ possono essere definite. Se invece la trasformazione non è quasi-statica, queste grandezze possono non essere definite o uniformi nel gas, e non si può descrivere il percorso con una funzione $p=p(V)$. In generale, il lavoro al pistone dipende dalla forza esterna effettiva che agisce sulla parete mobile; quando la pressione del gas è definita, essa non determina da sola il lavoro in presenza di attrito o di altre dissipazioni. Il primo principio resta valido: poiché $\Delta U$ dipende solo dagli stati iniziale e finale, basta conoscere $T_A$ e $T_B$ per ottenere $\Delta U = n c_V(T_B-T_A)$. Il lavoro va calcolato in base alle condizioni effettive del processo e il calore si ricava da $Q = \Delta U + W$.

**Espansione contro pressione esterna costante.** Se il gas si espande o si comprime contro una pressione esterna costante $p_{\text{amb}}$, il lavoro scambiato con l’ambiente si calcola usando la pressione esterna effettiva, indipendentemente dal fatto che gli stati intermedi del gas siano o meno di equilibrio:

:::formula{id="13.12" label="Lavoro contro pressione esterna costante"}
$$W = p_{\text{amb}}(V_B - V_A)$$
:::

Questo è il caso tipico di un pistone libero caricato da un peso o dalla pressione atmosferica, per cui, in assenza di attrito, $p_{\text{amb}} = p_B$, cioè la pressione esterna coincide con la pressione del gas nello stato finale di equilibrio. Si confrontino ora due trasformazioni che collegano gli stessi stati estremi di equilibrio $A$ e $B$: un'isoterma reversibile e un processo irreversibile contro pressione esterna costante pari a $p_B$. A parità di $V_A$ e $V_B$ e di questi stati estremi, il lavoro $nRT\ln(V_B/V_A)$ dell'isoterma reversibile è in generale diverso (e maggiore in un'espansione) da $p_{\text{amb}}(V_B-V_A) = p_B(V_B-V_A)$. Nel processo reversibile la pressione esterna differisce solo infinitesimamente da quella del gas in ogni istante; con pressione esterna costante, invece, la differenza tra le pressioni durante la trasformazione può causare un'accelerazione o dissipazioni.

**Espansione libera (di Joule).** È il caso limite di espansione irreversibile: un gas occupa una parte di un recipiente a pareti rigide e adiabatiche, mentre l'altra parte è vuota; aprendo un rubinetto il gas si espande senza che vi sia alcuna forza esterna che si opponga al suo moto. Non essendoci né ambiente né forza resistente, il gas non scambia lavoro né calore:

:::formula{id="13.13" label="Calore e lavoro nell'espansione libera"}
$$Q = 0, \qquad W = 0 \implies \Delta U = 0$$
:::

questo risultato, già usato nella sezione sui [Gas ideali](ref:chapter/13#p3) per dimostrare che $U$ dipende solo da $T$, mostra ora un'altra faccia importante: l'espansione libera è adiabatica ($Q=0$) e collega due stati di equilibrio, iniziale e finale, alla stessa temperatura ($T_A=T_B$, perché $\Delta U=0$ per un gas ideale), ma non è una trasformazione isoterma né quasi-statica. Durante il processo il gas passa per stati di non equilibrio in cui pressione e temperatura non sono uniformi nel volume, quindi la trasformazione non può essere descritta dall'equazione $pV^\gamma = \text{costante}$, valida solo per le adiabatiche reversibili: solo gli stati iniziale e finale, entrambi di equilibrio, sono legati da $p_A V_A = nRT_A$ e $p_B V_B = nRT_B$ con $T_A=T_B$.

**Errore tipico 13.3.** Uno sbaglio frequente è applicare $pV^\gamma=\text{costante}$ a una qualunque trasformazione con $Q=0$: questa relazione vale soltanto se la trasformazione adiabatica è anche reversibile (quasi-statica). Nell'espansione libera, pur essendo $Q=0$, la trasformazione è fortemente irreversibile e la relazione $pV^\gamma=\text{costante}$ non si applica agli stati intermedi; usarla per calcolare, ad esempio, una pressione o un volume intermedio porta a un risultato privo di significato fisico. Un secondo errore comune è calcolare il lavoro con $W=\int p\,dV$ usando la pressione del gas anche quando la trasformazione è irreversibile: in questi casi occorre invece usare la pressione esterna, nota e costante, oppure, se non c'è nessuna resistenza (espansione libera), porre $W=0$ per definizione del processo, non per un calcolo integrale.

## p5 | Teoria cinetica ed equipartizione

### Il modello cinetico del gas ideale

La sezione precedente ha introdotto l'equazione di stato {{formula:13.3}} come legge empirica e ha mostrato, tramite l'esperienza di Joule, che l'energia interna di un gas ideale dipende solo dalla temperatura ([testo](ref:chapter/13#p3)). Il modello cinetico spiega questi fatti macroscopici a partire da un'immagine microscopica del gas, interpretato come un insieme di un numero enorme di molecole in moto disordinato.

**Definizione 13.3** (ipotesi del modello cinetico). Un gas ideale è costituito da molecole identiche che soddisfano le seguenti ipotesi.

1. Le molecole sono in moto continuo e disordinato (caos molecolare): la velocità media di insieme è nulla e la densità è uniforme nel recipiente.
2. Gli urti tra molecole e tra molecole e pareti sono perfettamente elastici, cioè conservano energia cinetica totale e quantità di moto.
3. Le forze intermolecolari agiscono solo durante gli urti; al di fuori degli urti l'energia potenziale di interazione è trascurabile, per cui l'unica forma di energia presente è quella cinetica.
4. La distanza media tra le molecole è molto maggiore delle loro dimensioni, cosicché il volume occupato dalle molecole stesse è trascurabile rispetto al volume del recipiente.

Sotto queste ipotesi la pressione che il gas esercita sulle pareti del recipiente non è altro che l'effetto macroscopico medio degli urti di un numero enorme di molecole contro la superficie, e può essere calcolata a partire dalla dinamica di un singolo urto elastico, come mostrato nel paragrafo successivo.

### Pressione dal modello cinetico

Si consideri un gas di $N$ molecole identiche di massa $m$, contenuto in un recipiente cubico di lato $L$ e volume $V=L^3$. Nel calcolo seguente si trascurano gli urti intermolecolari tra due urti consecutivi di una molecola contro la stessa parete: la sua componente della velocità $v_x$ resta quindi costante durante il tragitto. Un urto elastico contro una parete perpendicolare all'asse $x$ inverte tale componente. La variazione della quantità di moto della molecola ha modulo $2m|v_x|$; per il teorema dell'impulso ([formula (3.7)](ref:formula/3.7)), la parete riceve un impulso di uguale modulo. Tra due urti successivi contro la stessa parete la molecola percorre la distanza $2L$, quindi il tempo tra gli urti è $2L/|v_x|$ e la frequenza degli urti è $|v_x|/(2L)$. La forza media esercitata da quella molecola sulla parete è dunque $m v_x^2/L$. Sommando i contributi delle molecole e dividendo per l'area $L^2$, la pressione risulta $p = (m/V)\sum_{i=1}^{N}v_{x,i}^2 = (mN/V)\overline{v_x^2}$. Poiché il moto è isotropo, le tre componenti hanno la stessa media quadratica e $\overline{v^2}=\overline{v_x^2}+\overline{v_y^2}+\overline{v_z^2}=3\overline{v_x^2}$. Pertanto $\overline{v_x^2}=\overline{v^2}/3$ e, posto $v_{qm}=\sqrt{\overline{v^2}}$, si ottiene la pressione in funzione delle grandezze microscopiche

$$p = \frac{mN}{V}\frac{v_{qm}^2}{3},$$

dove $v_{qm} = \sqrt{\overline{v^2}}$ è la velocità quadratica media delle molecole, cioè la radice quadrata della media dei quadrati delle velocità molecolari. Da questa relazione segue immediatamente

$$pV = \frac{1}{3}mNv_{qm}^2. $$

Questa è la forma del modello cinetico spesso detta equazione della pressione microscopica.

:::formula{id="13.14" label="Pressione dal modello cinetico"}
$$p = \frac{mN}{V}\frac{v_{qm}^2}{3} \qquad \Longleftrightarrow \qquad pV = \frac{1}{3}mNv_{qm}^2$$
:::

### Significato microscopico della temperatura

L'energia cinetica media di traslazione di una molecola è, per definizione,

$$\bar{K} = \frac{1}{2}mv_{qm}^2 \qquad \Longrightarrow \qquad v_{qm}^2 = \frac{2\bar{K}}{m}. $$

Sostituendo questa espressione in {{formula:13.14}} si ottiene

$$pV = \frac{1}{3}mN\frac{2\bar{K}}{m} = \frac{2}{3}N\bar{K},$$

e confrontando con l'equazione di stato $pV = nRT$ ({{formula:13.3}}) si trova

$$\frac{2}{3}N\bar{K} = nRT. $$

Introducendo il numero di Avogadro $N_A$ tramite $n = N/N_A$ e la costante di Boltzmann $k_B = R/N_A \approx 1{,}381\cdot 10^{-23}\ \text{J/K}$, per cui $nR = Nk_B$, si arriva al risultato centrale del modello cinetico

$$\frac{2}{3}N\bar{K} = Nk_BT \qquad \Longrightarrow \qquad \bar{K} = \frac{3}{2}k_BT. $$

:::formula{id="13.15" label="Energia cinetica media traslazionale di una molecola"}
$$\bar{K} = \frac{3}{2}k_BT$$
:::

Questo risultato dà alla temperatura assoluta un'interpretazione microscopica precisa: $T$ è la misura dell'energia cinetica media del moto di agitazione termica delle molecole, indipendentemente dalla loro massa o dalla natura chimica del gas. In particolare $T=0\ \text{K}$ corrisponde, in questo modello classico, all'arresto completo del moto molecolare disordinato.

### Equipartizione dell'energia

Il fattore $3$ in {{formula:13.15}} deriva dal fatto che la posizione di una molecola puntiforme (gas monoatomico) richiede tre coordinate indipendenti, cioè tre **gradi di libertà**. Il principio di equipartizione generalizza questa osservazione.

**Teorema 13.2** (equipartizione dell'energia, Maxwell-Boltzmann). Nel regime classico e all'equilibrio termico, ogni termine quadratico indipendente presente nell'energia contribuisce in media con un'energia pari a $\tfrac{1}{2}k_BT$. Il teorema si applica ai termini quadratici attivi, cinetici o potenziali, e non indistintamente a ogni grado di libertà geometrico. Per esempio, un modo vibratorio armonico attivo comprende un termine quadratico cinetico e uno potenziale, ciascuno con contributo medio $\tfrac{1}{2}k_BT$, per un contributo totale di $k_BT$. Nei gas reali alcuni modi possono restare inattivi per effetto della quantizzazione, soprattutto a basse temperature.

$$\bar{E} = \frac{f}{2}k_BT. $$

:::formula{id="13.16" label="Principio di equipartizione dell'energia"}
$$\bar{E} = \frac{f}{2}k_BT$$
:::

Il numero $f$ nella relazione di equipartizione conta i termini quadratici indipendenti e attivi dell'energia, non le coordinate geometriche. Nei modelli molecolari rigidi considerati qui, il conteggio geometrico dei gradi di libertà coincide con quello dei termini quadratici cinetici attivi.

- Una molecola **monoatomica** è assimilabile a un punto materiale: basta conoscere le sue tre coordinate cartesiane per individuarne la posizione, quindi $f=3$ (solo energia cinetica traslazionale, con tre termini quadratici indipendenti).
- Una molecola **biatomica rigida** è costituita da due atomi a distanza fissata. Le posizioni dei due atomi richiederebbero $6$ coordinate cartesiane, ma la condizione di rigidità (distanza costante tra i due atomi) elimina un grado di libertà, lasciandone $f = 6-1 = 5$. Questi cinque gradi di libertà corrispondono a tre traslazioni del centro di massa e due rotazioni attorno agli assi perpendicolari alla congiungente degli atomi (la rotazione attorno all'asse della molecola non contribuisce, per ragioni di simmetria del momento d'inerzia).
- Lo stesso argomento, applicato a un sistema rigido di $N_{at}$ atomi (o a un corpo rigido continuo), dà in generale $f = 3N_{at} - (\text{numero di vincoli di rigidità})$; per una molecola triatomica rigida non lineare si trovano $9-3=6$ gradi di libertà.

Moltiplicando l'energia media per molecola per il numero totale di molecole $nN_A$, si ottiene l'energia interna del gas in funzione dei soli gradi di libertà e della temperatura

$$U = nN_A\frac{f}{2}k_BT = n\frac{f}{2}RT. $$

:::formula{id="13.17" label="Energia interna in funzione dei gradi di libertà"}
$$U = n\frac{f}{2}RT$$
:::

Questa espressione è compatibile con il risultato generale {{formula:13.4}} ($\Delta U = nc_V\Delta T$) ricavato nella sezione precedente: derivando $U$ rispetto a $T$ a $n$ fissato si ottiene direttamente il calore specifico molare a volume costante,

$$c_V = \frac{1}{n}\frac{dU}{dT} = \frac{f}{2}R. $$

:::formula{id="13.18" label="Calore specifico molare a volume costante dai gradi di libertà"}
$$c_V = \frac{1}{n}\frac{dU}{dT} = \frac{f}{2}R$$
:::

Per i due casi di interesse pratico si ottengono i valori teorici seguenti.

- Gas **monoatomico** ($f=3$): $c_V = \dfrac{3}{2}R$.
- Gas **biatomico** ($f=5$): $c_V = \dfrac{5}{2}R$.

Dalla relazione di Mayer $c_p - c_V = R$ (ricavata nella sezione sulle [trasformazioni dei gas ideali](ref:chapter/13#p4)) si ottengono allora anche i calori specifici a pressione costante e il rapporto $\gamma = c_p/c_V$: $c_p = \tfrac{5}{2}R$ e $\gamma = \tfrac{5}{3}$ per i gas monoatomici, $c_p = \tfrac{7}{2}R$ e $\gamma = \tfrac{7}{5}$ per i gas biatomici. Questi valori sono verificati sperimentalmente con buona approssimazione a temperatura ambiente; a temperature più alte i gradi di libertà vibratori delle molecole biatomiche (non contati qui perché "congelati" a basse temperature) cominciano a contribuire, e il modello va corretto con la meccanica quantistica — argomento che esula dal corso.

### Esempio svolto

Tre moli di un gas ideale biatomico si trovano inizialmente in equilibrio alla temperatura $T_A = 373{,}2\ \text{K}$. Il gas viene compresso isotermicamente fino a un terzo del volume iniziale ($V_B = V_A/3$), poi riportato adiabaticamente e reversibilmente al volume iniziale ($V_C = V_A$). Si vuole calcolare il calore scambiato durante il successivo riscaldamento isocoro che lo riporta alla temperatura iniziale $T_A$.

**Dati.** $n = 3\ \text{mol}$, $T_A = 373{,}2\ \text{K}$, $V_B = V_A/3$, $V_C = V_A$, gas biatomico quindi $f=5$, $\gamma = c_p/c_V = 7/5$.

**Schema.** La trasformazione $C \to A$ è isocora (a $V=V_A$ costante): il calore scambiato eguaglia $\Delta U$, perché il lavoro è nullo.

**Equazioni.** Essendo $B\to C$ adiabatica reversibile, vale l'equazione delle adiabatiche $TV^{\gamma-1} = \text{costante}$ (ricavata in [Trasformazioni dei gas ideali](ref:chapter/13#p4)), da cui

$$T_BV_B^{\gamma-1} = T_CV_C^{\gamma-1} \quad\Longrightarrow\quad T_C = T_B\left(\frac{V_B}{V_C}\right)^{\gamma-1}. $$

Essendo $A \to B$ isoterma, $T_B = T_A$; inoltre $V_B/V_C = 1/3$. Il calore nella trasformazione isocora $C\to A$ vale

$$Q_{C\to A} = \Delta U = nc_V(T_A - T_C) = \frac{5}{2}nR\left\lbrack T_A - T_A\left(\frac{1}{3}\right)^{\gamma-1}\right\rbrack  = \frac{5}{2}nRT_A\left\lbrack 1 - \left(\frac{1}{3}\right)^{\gamma-1}\right\rbrack . $$

**Numeri.** Con $n=3\ \text{mol}$, $R = 8{,}314\ \text{J/(mol·K)}$, $T_A = 373{,}2\ \text{K}$ e $\gamma - 1 = 2/5$,

$$Q_{C\to A} = \frac{5}{2}\cdot 3\ \text{mol}\cdot 8{,}314\ \frac{\text{J}}{\text{mol·K}}\cdot 373{,}2\ \text{K}\cdot\left\lbrack 1-\left(\frac{1}{3}\right)^{2/5}\right\rbrack  \approx 8275\ \text{J}. $$

**Controllo.** Il risultato è positivo, cioè il gas assorbe calore nella trasformazione isocora, come ci si aspetta: il gas si trova a $T_C < T_A$ (essendosi raffreddato nell'espansione adiabatica $B\to C$) e deve essere riscaldato fino a $T_A$. L'ordine di grandezza (alcuni kJ, per moli di gas e salti di temperatura di decine di kelvin) è coerente con $c_V \sim 20\ \text{J/(mol·K)}$.

### Errore tipico

Un errore concettuale frequente, anche quando i calcoli numerici sono eseguiti correttamente, consiste nello scrivere $\Delta Q_{A\to B}$ o $\Delta W_{A\to B}$ come se calore e lavoro fossero variazioni di una funzione di stato. Scrivere $\Delta f$ per una grandezza $f$ presuppone che $f$ sia definita punto per punto nello spazio degli stati termodinamici, cosa che non vale per $Q$ e $W$: solo l'energia interna $U$ è funzione di stato, e le sue variazioni si scrivono correttamente $\Delta U_{A\to B} = Q_{A\to B} - W_{A\to B}$, con $Q_{A\to B}$ e $W_{A\to B}$ senza delta davanti. Questo errore era già stato segnalato per il primo principio generale nella sezione [Primo principio ed energia interna](ref:chapter/13#p2) e si ripresenta tipicamente nei bilanci energetici di cicli composti da più trasformazioni, come quello dell'esempio precedente.

Un secondo errore tipico, già incontrato nella sezione sui [Gas ideali](ref:chapter/13#p3), consiste nel sostituire pressione e volume nell'equazione di stato senza convertirli nelle unità del Sistema Internazionale (pascal e metri cubi) prima di dividere per $nR$: il risultato numerico per $T$ risulta allora sbagliato di diversi ordini di grandezza, pur avendo l'unità di misura formalmente corretta (kelvin).
