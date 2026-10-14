---
chapter: 14
title: Secondo principio ed entropia
---

## p1 | Introduzione

Il primo principio permette di tenere conto dell’energia scambiata, ma da solo non dice quali trasformazioni siano possibili né quanta parte del calore possa diventare lavoro. In questo capitolo il secondo principio chiarisce questi limiti: permette di confrontare le prestazioni delle macchine termiche e dei frigoriferi e di riconoscere il ruolo delle trasformazioni reversibili. L’entropia offre poi un criterio per descrivere l’irreversibilità e valutare l’evoluzione complessiva di un sistema e dell’ambiente.

Per affrontare il capitolo occorre conoscere il primo principio della termodinamica, le trasformazioni dei gas ideali e il lavoro associato a un ciclo nel piano pressione-volume. È utile saper calcolare calore, lavoro e variazioni di energia interna, oltre a distinguere tra trasformazioni isoterme, isocore, isobare e adiabatiche.

Al termine saprai analizzare cicli termodinamici, calcolare il rendimento di motori e il coefficiente di prestazione dei frigoriferi, e confrontarli con il limite di Carnot. Saprai inoltre determinare le variazioni di entropia di gas, sorgenti e corpi con capacità termica finita, anche nei cambiamenti di fase e negli scambi irreversibili. Potrai infine calcolare la variazione di entropia dell’universo e usarne il segno per valutare se un processo è possibile e quanto è irreversibile.

## p2 | Macchine termiche e frigoriferi

### Macchine termiche

Una **macchina termica** è un dispositivo che, scambiando calore con l'ambiente, compie un ciclo termodinamico (ovvero una trasformazione chiusa, con stato finale coincidente con lo stato iniziale) producendo lavoro netto positivo. Poiché il ciclo è chiuso, $\Delta U = 0$ e il primo principio impone $Q = W$: il sistema trasforma in lavoro tutto il calore netto assorbito. Se durante il ciclo il sistema assorbe lavoro dall'ambiente e, scambiando calore, viene prodotto lavoro, si parla di ciclo termico; se invece il ciclo richiede che venga fornito lavoro esterno per estrarre calore da una sorgente fredda e cederlo a una più calda, il ciclo si chiama frigorifero e il dispositivo macchina frigorifera.

Nel caso di una macchina termica il fluido scambia calore con almeno due sorgenti: assorbe una quantità $Q_A>0$ da una sorgente calda e cede una quantità $Q_C<0$ a una sorgente fredda, per un calore totale $Q=Q_A+Q_C$. Analogamente il lavoro totale del ciclo è la somma algebrica del lavoro compiuto nelle fasi di espansione, $W_F>0$, e di quello subito nelle fasi di compressione, $W_S<0$: $W = W_F + W_S$.

Si definisce **rendimento** del ciclo la quantità adimensionale

:::formula{id="14.1" label="Rendimento di un ciclo termico"}
$$\eta = \frac{W}{Q_A} = \frac{Q_A+Q_C}{Q_A} = 1 + \frac{Q_C}{Q_A} = 1 - \frac{|Q_C|}{Q_A}$$
:::

che rappresenta la frazione di calore assorbito effettivamente convertita in lavoro utile. Sperimentalmente, e come conseguenza del secondo principio della termodinamica che sarà enunciato nella sezione successiva, si osserva sempre

$$0 \le \eta < 1,$$

cioè il lavoro prodotto è sempre minore del calore assorbito e il calore ceduto non è mai nullo: una macchina non può restituire interamente in lavoro il calore prelevato da un'unica sorgente. Questo risultato anticipa l'enunciato di Kelvin-Planck del secondo principio, discusso in [Secondo principio](ref:chapter/14#p3).

### Macchine frigorifere e coefficiente di prestazione

In una **macchina frigorifera** il ciclo è percorso in senso inverso rispetto al ciclo termico: il sistema assorbe lavoro dall'esterno ($W<0$) e, complessivamente, cede calore, sottraendo calore $Q_0>0$ a una sorgente fredda e cedendone una quantità maggiore in modulo a una sorgente calda. Si definisce **coefficiente di prestazione** (o efficienza) del ciclo frigorifero il rapporto

:::formula{id="14.2" label="Coefficiente di prestazione di un ciclo frigorifero"}
$$\xi = \frac{Q_0}{|W|}$$
:::

tanto più grande quanto minore è il lavoro speso a parità di calore sottratto alla sorgente fredda. A differenza del rendimento, $\xi$ non è limitato superiormente da 1: può assumere valori anche molto maggiori di 1, perché misura un rapporto tra due grandezze di segno concorde e non una frazione dell'energia totale scambiata.

### Lettura di un ciclo nel piano $(V,p)$

Il piano di Clapeyron $(V,p)$ è lo strumento grafico standard per analizzare un ciclo. Per una trasformazione reversibile da uno stato $A$ a uno stato $B$ il lavoro è

$$W = \int_A^B p\,dV,$$

Il piano di Clapeyron $(V,p)$ è lo strumento grafico standard per analizzare un ciclo. Per una trasformazione reversibile da uno stato $A$ a uno stato $B$ il lavoro è

$$W = \int_A^B p\,dV,$$

pari all'area compresa fra la curva della trasformazione e l'asse dei volumi; se la pressione esterna è nota e costante (anche in una trasformazione irreversibile) si usa invece $W=p_{\text{est}}(V_B-V_A)$, già introdotta in [Calore e lavoro](ref:chapter/12#p4). In una trasformazione ciclica **reversibile**, in cui ogni stato intermedio è uno stato di equilibrio e il ciclo ammette quindi un percorso ben definito nel piano $(V,p)$, il lavoro totale è pari all'area racchiusa dal ciclo: se il ciclo è percorso in **senso orario** si ha $W>0$ (ciclo termico, lavoro prodotto), se è percorso in **senso antiorario** si ha $W<0$ (ciclo frigorifero, lavoro assorbito). In una trasformazione isocora il lavoro è sempre nullo, perché non c'è variazione di volume. Se il ciclo contiene trasformazioni irreversibili, il percorso disegnato nel piano $(V,p)$ non rappresenta in generale gli stati effettivamente attraversati dal sistema, e il lavoro non può essere identificato con l'area del diagramma: va invece calcolato trasformazione per trasformazione a partire dalla pressione esterna effettivamente applicata, per esempio con $W=p_{\text{est}}(V_B-V_A)$ quando quest'ultima è costante.

Un punto cruciale per riconoscere a vista le trasformazioni di un ciclo è che, a parità di punto di partenza, le adiabatiche reversibili hanno pendenza maggiore delle isoterme nel piano $(V,p)$, poiché $\gamma = c_p/c_V > 1$: le isoterme soddisfano $pV=\text{cost}$, le adiabatiche $pV^\gamma=\text{cost}$.

:::image{src="assets/2ca43188-isoterma-adiabatica-pendenza.svg" alt="Due curve nel piano V-p che si incontrano in un punto comune, con l'adiabatica più inclinata dell'isoterma" caption="Fig. 14.1 — Confronto tra un'isoterma reversibile e un'adiabatica reversibile che passano per lo stesso punto nel piano (V,p)"}
:::

### Il ciclo di Carnot

Il **ciclo di Carnot** è il ciclo termico reversibile per eccellenza, costituito da quattro trasformazioni reversibili:

- $A \to B$: espansione isoterma reversibile a temperatura $T_2$ (sorgente calda);
- $B \to C$: espansione adiabatica reversibile;
- $C \to D$: compressione isoterma reversibile a temperatura $T_1<T_2$ (sorgente fredda);
- $D \to A$: compressione adiabatica reversibile.

Consideriamo il caso in cui il fluido operativo sia un gas ideale, in modo da poter calcolare esplicitamente i calori e i lavori scambiati nelle singole trasformazioni; il risultato sul rendimento che ne seguirà vale invece in generale, indipendentemente dal fluido impiegato, come garantito dal teorema di Carnot. Lungo le due isoterme si ha $Q_{AB}=W_{AB}=nRT_2\ln\frac{V_B}{V_A}>0$ e $Q_{CD}=W_{CD}=nRT_1\ln\frac{V_D}{V_C}<0$, mentre nelle due adiabatiche $\Delta U_{BC}=-\Delta U_{DA}$ e $W_{BC}=-W_{DA}$, poiché le adiabatiche collegano le stesse due isoterme e sono percorse in modo simmetrico. Sommando tutti i contributi il lavoro totale del ciclo risulta

$$W = Q_A+Q_C = nR\left(T_2\ln\frac{V_B}{V_A}+T_1\ln\frac{V_D}{V_C}\right).$$

Usando la relazione tra i volumi delle adiabatiche (che lega $V_B/V_A$ a $V_C/V_D$) si ottiene, dopo semplificazione, il rendimento del ciclo di Carnot

:::formula{id="14.3" label="Rendimento del ciclo di Carnot"}
$$\eta_{\text{Carnot}} = 1 - \frac{T_1}{T_2}$$
:::

Il risultato notevole è che $\eta_{\text{Carnot}}$ **non dipende dal fluido** impiegato, ma solo dalle due temperature estreme a cui avvengono gli scambi isotermi di calore. Lo stesso ciclo, percorso in senso antiorario ($A\to D\to C\to B\to A$), descrive una macchina frigorifera di Carnot reversibile, con $Q_0=nRT_1\ln\frac{V_C}{V_D}>0$ assorbito dalla sorgente fredda e $Q_C=nRT_2\ln\frac{V_A}{V_B}<0$ ceduto alla sorgente calda; il lavoro totale è negativo, $W=nR(T_1-T_2)\ln\frac{V_C}{V_D}<0$, e il coefficiente di prestazione diventa

:::formula{id="14.4" label="Coefficiente di prestazione del frigorifero di Carnot"}
$$\xi_{\text{Carnot}} = \frac{T_1}{T_2 - T_1}$$
:::

### Il ciclo di Stirling

Il **ciclo di Stirling** è composto da quattro trasformazioni reversibili: un'espansione isoterma alla temperatura $T_2$, un raffreddamento isocoro da $T_2$ a $T_1$, una compressione isoterma a $T_1$, e un riscaldamento isocoro da $T_1$ a $T_2$. Assumendo che il fluido operativo sia un gas ideale, l'energia interna dipende solo dalla temperatura, per cui le due isocore collegano gli stessi due stati di temperatura $T_1$ e $T_2$ indipendentemente dal volume a cui si svolgono: il calore ceduto nel raffreddamento da $T_2$ a $T_1$ è, in modulo, uguale al calore assorbito nel successivo riscaldamento da $T_1$ a $T_2$. Se il ciclo dispone di un **rigeneratore perfetto**, capace di accumulare il calore ceduto durante il raffreddamento isocoro e restituirlo integralmente al gas durante il riscaldamento isocoro successivo, allora l'unico calore scambiato con l'esterno è quello delle due isoterme, e il rendimento del ciclo di Stirling coincide con quello del ciclo di Carnot tra le stesse temperature estreme:

$$\eta_{\text{Stirling}} = 1 - \frac{T_1}{T_2} = \eta_{\text{Carnot}} \qquad \text{(con rigeneratore perfetto)}.$$

Il vantaggio pratico del ciclo di Stirling è la realizzabilità con uno scambiatore di calore rigenerativo che recupera, nelle due isocore, il calore scambiato internamente al fluido. Se il rigeneratore è assente o imperfetto, il calore necessario al riscaldamento isocoro deve essere fornito, almeno in parte, da una sorgente esterna: in tal caso il calore complessivamente assorbito dall'esterno aumenta rispetto al solo calore scambiato nell'isoterma a $T_2$, e il rendimento effettivo del ciclo di Stirling risulta inferiore a $\eta_{\text{Carnot}}$.

### Cicli Otto e Diesel

Accanto ai cicli puramente teorici di Carnot e Stirling, due cicli idealizzati che schematizzano il funzionamento dei motori a combustione interna sono il ciclo Otto e il ciclo Diesel. Nella trattazione che segue si assume che il fluido operativo sia un gas ideale con calori specifici $c_V$ e $c_p$ costanti, condizione necessaria perché valgano le relazioni adiabatiche $TV^{\gamma-1}=\text{cost}$ usate nel seguito e i rendimenti riportati di seguito. Entrambi sono descritti tramite il rapporto di compressione $r = V_1/V_2$ (rapporto tra il volume massimo e quello minimo del cilindro) e il coefficiente $\gamma = c_p/c_V$ del fluido operativo.

Il **ciclo Otto** (motore ad accensione comandata, a benzina) è costituito da una compressione adiabatica reversibile, un riscaldamento isocoro, un'espansione adiabatica reversibile e un raffreddamento isocoro. Poiché nelle due isocore il calore scambiato è $Q=nc_V\Delta T$, e le temperature agli estremi delle adiabatiche sono legate dal rapporto di compressione tramite $TV^{\gamma-1}=\text{cost}$, il rendimento si scrive nella forma standard

$$\eta_{\text{Otto}} = 1 - \frac{1}{r^{\gamma-1}}.$$

Il rendimento di Otto cresce quindi con il rapporto di compressione $r$, ma non dipende dalle temperature estreme del ciclo (a differenza del ciclo di Carnot).

Il **ciclo Diesel** (motore ad accensione spontanea) differisce dall'Otto per il fatto che l'immissione di calore avviene a pressione costante (isobara) invece che a volume costante; introducendo il rapporto di combustione $r_c = V_3/V_2$ (rapporto tra i volumi all'inizio e alla fine della fase di combustione isobara), il rendimento assume la forma

$$\eta_{\text{Diesel}} = 1 - \frac{1}{\gamma\, r^{\gamma-1}}\cdot\frac{r_c^\gamma - 1}{r_c - 1}.$$

Questi due cicli non sono né reversibili nella pratica né percorsi con sorgenti a temperatura costante, e per questo i loro rendimenti sono sempre inferiori a quello di Carnot calcolato tra le rispettive temperature estreme.

### Esempio svolto: rendimento di un ciclo reversibile a quattro trasformazioni

**Esempio 14.1.** Un gas ideale biatomico ($n=0{,}42\ \text{mol}$, $\gamma=7/5$) compie il ciclo reversibile: $A\to B$ compressione isoterma, con $V_A=10^{-2}\ \text{m}^3$, $p_A=1\cdot10^5\ \text{Pa}$, $V_B=2\cdot10^{-3}\ \text{m}^3$; $B\to C$ riscaldamento isocoro fino a $p_C=1\cdot10^6\ \text{Pa}$; $C\to D$ espansione adiabatica; $D\to A$ raffreddamento isocoro fino a $V_D=V_A$.

*Dati e stati termodinamici.* Dall'equazione di stato $pV=nRT$ si ottiene $T_A = \dfrac{p_AV_A}{nR} = 286\ \text{K}$, e poiché $A\to B$ è isoterma $T_B=T_A=286\ \text{K}$, con $p_B = nRT_B/V_B = 5\cdot10^5\ \text{Pa}$. Poiché $B\to C$ è isocora, $V_C=V_B=2\cdot10^{-3}\ \text{m}^3$, e da $p_CV_C=nRT_C$ si trova $T_C = 573\ \text{K}$. Lungo l'adiabatica $C\to D$ vale $p_CV_C^\gamma = p_DV_D^\gamma$, da cui $p_D = p_C(V_C/V_D)^{7/5} = 1{,}05\cdot10^5\ \text{Pa}$ e, dall'equazione di stato, $T_D = 301\ \text{K}$.

*Calori e lavori nelle quattro trasformazioni.* Nell'isoterma $A\to B$: $Q_{AB}=W_{AB}=nRT_A\ln\frac{V_B}{V_A} = -1{,}61\ \text{kJ}$ (calore e lavoro ceduti, poiché il gas viene compresso). Nell'isocora $B\to C$: $W_{BC}=0$ e $Q_{BC}=n\frac{5}{2}R(T_C-T_B)=2{,}5\ \text{kJ}$ (calore assorbito). Nell'adiabatica $C\to D$: $Q_{CD}=0$ e, dal primo principio, $W_{CD}=-\Delta U_{CD}=n\frac{5}{2}R(T_C-T_D)=2{,}37\ \text{kJ}$ (lavoro compiuto dal gas). Nell'isocora $D\to A$: $W_{DA}=0$ e $Q_{DA}=n\frac{5}{2}R(T_A-T_D)=-0{,}131\ \text{kJ}$ (calore ceduto).

*Rendimento.* L'unico calore assorbito è quello dell'isocora $B\to C$, mentre il calore ceduto si ha nelle trasformazioni $A\to B$ e $D\to A$; applicando {{formula:14.1}}:

$$\eta = 1-\frac{|Q_{AB}|+|Q_{DA}|}{Q_{BC}} = 1-\frac{|-1{,}61\ \text{kJ}|+|-0{,}131\ \text{kJ}|}{2{,}5\ \text{kJ}} = 0{,}304.$$

*Controllo.* $\eta\approx 0{,}30$ è compreso tra 0 e 1 come richiesto dal secondo principio, ed è inferiore al rendimento di Carnot calcolabile tra le temperature estreme del ciclo ($T_A=T_B=286\ \text{K}$, $T_C=573\ \text{K}$), $\eta_{\text{Carnot}}=1-286/573\approx0{,}50$: coerente, perché il ciclo proposto non è un ciclo di Carnot (ha due isocore invece di due adiabatiche separate dalle isoterme).

### Errori tipici

**Errore tipico 14.1** (confondere $Q$ e $W$ con funzioni di stato). Scrivere $\Delta Q_{A\to B}$ o $\Delta W_{A\to B}$ al posto di $Q_{A\to B}$, $W_{A\to B}$ presuppone che calore e lavoro siano definiti punto per punto nello spazio degli stati e che se ne possa calcolare una variazione; questo è concettualmente sbagliato, perché solo l'energia interna è funzione di stato, mentre $\delta Q$ e $\delta W$ sono quantità infinitesime non associate a un differenziale esatto, già segnalato in [Primo principio ed energia interna](ref:chapter/13#p2).

**Errore tipico 14.2** (dimenticare il segno del lavoro dato dal verso di percorrenza). Calcolare l'area racchiusa da un ciclo senza controllare se è percorso in senso orario o antiorario porta a sbagliare il segno di $W$ e quindi a confondere una macchina termica con una macchina frigorifera.

**Errore tipico 14.3** (applicare $\eta=1-T_1/T_2$ a cicli che non sono di Carnot). La formula {{formula:14.3}} vale solo per il ciclo di Carnot (e per il ciclo di Stirling con rigeneratore perfetto, che ha lo stesso rendimento); per qualunque altro ciclo, incluso Otto e Diesel, il rendimento va calcolato dalla definizione generale {{formula:14.1}} a partire dai calori scambiati in ciascuna trasformazione.

## p3 | Secondo principio

Il primo principio della termodinamica stabilisce la conservazione dell'energia ma non pone alcun vincolo sul *verso* delle trasformazioni: secondo $\Delta U = Q - W$ nulla impedirebbe, in linea di principio, di trasformare integralmente in lavoro il calore assorbito da un'unica sorgente, oppure di far passare spontaneamente calore da un corpo freddo a uno caldo. L'esperienza mostra invece che queste trasformazioni non si osservano mai: mentre il lavoro si trasforma sempre integralmente in calore (per attrito, ad esempio), il processo inverso è limitato. Il secondo principio della termodinamica formalizza questa asimmetria.

### Il ciclo monotermo

Si consideri un ciclo termodinamico che scambia calore con un'unica sorgente a temperatura uniforme. Una conseguenza immediata del secondo principio, nella forma di Kelvin-Planck che enunceremo subito, è che un tale ciclo (detto **ciclo monotermo**) non può produrre lavoro netto positivo: devono valere le disuguaglianze

:::formula{id="14.5" label="Disuguaglianze del ciclo monotermo"}
$$Q \le 0, \qquad W \le 0$$
:::

Il sistema che compie un ciclo monotermo può solo assorbire lavoro dall'ambiente e cederlo come calore alla sorgente (trasformazione integrale di lavoro in calore, sempre permessa), oppure non scambiare nulla. Se il ciclo monotermo fosse reversibile, potremmo percorrerlo anche al contrario, ottenendo $Q \ge 0$, $W \ge 0$; poiché il segno di maggiore è escluso dalle disuguaglianze precedenti, l'unica possibilità compatibile con entrambi i versi è

$$Q = 0, \qquad W = 0.$$

Questo risultato mostra perché, per ottenere lavoro netto in modo continuo (una macchina termica), sono sempre necessarie almeno due sorgenti a temperature diverse: il rendimento $\eta = W/Q_A$ (definito nella sezione su [macchine termiche e frigoriferi](ref:chapter/14#p2)) non può mai raggiungere il valore $1$, perché ciò richiederebbe $Q_C = 0$, cioè un ciclo monotermo produttivo di lavoro.

### Enunciati di Kelvin-Planck e di Clausius

Il secondo principio della termodinamica si esprime tradizionalmente attraverso due enunciati, apparentemente riferiti a fenomeni diversi ma, come si dimostrerà, logicamente equivalenti.

**Enunciato** (di Kelvin-Planck). È impossibile realizzare un processo che abbia come unico risultato la trasformazione in lavoro del calore fornito da una sorgente a temperatura uniforme.

Equivalentemente, non è possibile realizzare una macchina termica con rendimento $\eta = 1$.

**Enunciato** (di Clausius). È impossibile realizzare un processo che abbia come unico risultato il trasferimento di una quantità di calore da un corpo a un altro a temperatura maggiore.

Equivalentemente, non è possibile realizzare una macchina frigorifera che non assorba lavoro.

L'aggettivo *unico* è essenziale in entrambi gli enunciati. Se non ci fosse, l'enunciato di Clausius sarebbe banalmente falso: un frigorifero reale trasferisce calore da un corpo freddo a uno caldo, ma lo fa assorbendo lavoro dall'ambiente, cioè non è l'*unico* risultato del processo.

### Equivalenza degli enunciati

**Teorema 14.1**. Gli enunciati di Kelvin-Planck e di Clausius sono equivalenti: se è possibile realizzare un processo che viola uno dei due, allora è possibile realizzarne uno che viola anche l'altro.

La dimostrazione procede in due direzioni.

**Falsità di Kelvin-Planck $\Rightarrow$ falsità di Clausius.** Supponiamo di avere una macchina 1 che viola l'enunciato di Kelvin-Planck, cioè capace di trasformare integralmente in lavoro il calore assorbito da una sorgente a temperatura $T_1$: $Q_A = W > 0$. Usiamo questo lavoro $W$ per far funzionare una macchina 2 che opera come frigorifero ordinario (non viola Clausius), assorbendo dalla stessa sorgente a $T_1$ il calore $Q_1 > 0$ e cedendo calore a una sorgente a temperatura maggiore $T_2 > T_1$, assorbendo il lavoro $-W<0$. Il sistema combinato 1+2 preleva complessivamente dalla sorgente a $T_1$ il calore $Q_A + Q_1 = W + Q_1$ (somma di quanto assorbito dalla macchina 1 e di quanto assorbito dal frigorifero 2) e cede alla sorgente a $T_2$ il calore

$$Q_2 = -(Q_A + Q_1) = -(W + Q_1) < 0.$$

Il lavoro scambiato con l'esterno dal sistema complessivo è nullo, dato che il lavoro $W$ prodotto dalla macchina 1 è interamente assorbito dal frigorifero 2, e l'unico effetto netto è il passaggio di una quantità di calore $W + Q_1$ dalla sorgente fredda a quella calda: questo viola l'enunciato di Clausius.

**Falsità di Clausius $\Rightarrow$ falsità di Kelvin-Planck.** Supponiamo ora di avere una macchina frigorifera 1 che viola l'enunciato di Clausius, cioè che trasferisce calore da una sorgente fredda a una calda senza assorbire lavoro netto. Affianchiamole una macchina termica 2 ordinaria che compie lavoro $W>0$ assorbendo calore dalla sorgente calda e cedendo il calore $Q_1$ a quella fredda, con $Q_2 + Q_1 = W$, scegliendo (o scalando opportunamente) il funzionamento della macchina 1 in modo che il calore da essa trasferito dalla sorgente fredda alla sorgente calda sia uguale in modulo a $Q_1$. Analizzando il sistema 1+2 si trova che la sorgente fredda non scambia calore netto, perché quanto riceve dalla macchina 2 è esattamente compensato da quanto la macchina 1 preleva per trasferirlo alla sorgente calda, mentre il sistema complessivo converte integralmente in lavoro il calore assorbito dalla sola sorgente calda: questo viola l'enunciato di Kelvin-Planck.

Le due implicazioni mostrano che negare uno dei due enunciati permette di negare anche l'altro; per contrapposizione, i due enunciati sono logicamente equivalenti, e si useranno indistintamente come forma del secondo principio della termodinamica.

### Teorema di Carnot

Una volta stabilito che il rendimento di una macchina termica non può mai essere $1$, resta da determinare quale sia il massimo rendimento ottenibile tra due sorgenti date a temperature $T_1$ e $T_2$ (con $T_1<T_2$). La risposta è data dal teorema di Carnot.

**Teorema 14.2** (di Carnot). Tutte le macchine termiche reversibili che operano tra le stesse due sorgenti a temperature $T_1$ e $T_2$ hanno il medesimo rendimento; qualsiasi altra macchina (irreversibile) che lavori tra le stesse sorgenti ha rendimento minore o uguale. Il risultato non dipende dalla sostanza che descrive il ciclo.

**Dimostrazione.** Si considerino due macchine termiche a due sorgenti che forniscono lo stesso lavoro $W$: una macchina $R$, reversibile, e una macchina $X$, su cui non si fa alcuna ipotesi di reversibilità. Indichiamo con $Q_1, Q_2$ i calori scambiati da $X$ con le sorgenti a $T_1$ e $T_2$, e con $Q_1', Q_2'$ quelli scambiati da $R$. Dal primo principio applicato a ciascun ciclo si ha

$$Q_2 + Q_1 = W = Q_1' + Q_2' \quad \Longrightarrow \quad Q_1 - Q_1' = -(Q_2 - Q_2').$$

I rendimenti delle due macchine sono $\eta_X = W/Q_2$ e $\eta_R = W/Q_2'$. Supponiamo per assurdo che $\eta_X > \eta_R$: allora $W/Q_2 > W/Q_2'$, da cui $Q_2 < Q_2'$, quindi $Q_2 - Q_2' < 0$ e, per l'uguaglianza precedente, $Q \equiv Q_1 - Q_1' > 0$.

Poiché $R$ è reversibile, possiamo farla funzionare al contrario come frigorifero, assorbendo il lavoro $W$ prodotto da $X$: si costruisce così una macchina composta $X+R$ che non scambia lavoro netto con l'ambiente. Il bilancio dei calori di questo sistema composto dà

- la macchina assorbe il calore $Q = Q_1 - Q_1' > 0$ dalla sorgente a $T_1$;
- la macchina cede il calore $-Q = Q_2 - Q_2' < 0$ alla sorgente a $T_2$;
- non viene scambiato lavoro con l'ambiente esterno.

L'unico effetto netto del sistema $X+R$ è dunque il passaggio di calore dalla sorgente fredda $T_1$ a quella calda $T_2$ senza alcun lavoro esterno: questo viola l'enunciato di Clausius. L'ipotesi di partenza $\eta_X > \eta_R$ è dunque falsa, e deve valere

$$\eta_X \le \eta_R.$$

Se anche $X$ fosse reversibile, si potrebbe ripetere l'argomento scambiando i ruoli (facendo funzionare $R$ come macchina termica e $X$ come frigorifero), ottenendo $\eta_X \ge \eta_R$. L'unica possibilità compatibile con entrambe le disuguaglianze è $\eta_X = \eta_R$ quando entrambe le macchine sono reversibili. $\blacksquare$

Il teorema di Carnot stabilisce dunque che il rendimento delle macchine reversibili tra due sorgenti costituisce il limite superiore invalicabile per qualunque macchina, reversibile o no, che operi tra le stesse temperature. Il valore di questo rendimento massimo si determina studiando un ciclo reversibile particolare, il ciclo di Carnot percorso da un gas ideale (già introdotto nella sezione precedente), e il risultato si estende a tutte le macchine reversibili indipendentemente dalla sostanza

:::formula{id="14.6" label="Rendimento massimo tra due sorgenti"}
$$\eta_{max} = 1 - \frac{T_1}{T_2}$$
:::

Per una macchina reversibile, scrivendo $\eta = 1 + Q_1/Q_2$ e uguagliando a $1-T_1/T_2$ si ottiene la relazione tra calori scambiati e temperature delle sorgenti; per una macchina qualunque vale invece la disuguaglianza

:::formula{id="14.7" label="Relazione tra calori e temperature per due sorgenti"}
$$\frac{Q_1}{T_1} + \frac{Q_2}{T_2} \le 0$$
:::

con il segno di uguaglianza valido se e solo se la macchina è reversibile. Questa relazione, qui ricavata per due sole sorgenti, verrà generalizzata a un numero arbitrario di sorgenti (e a un continuo di sorgenti) nella disuguaglianza di Clausius, oggetto della sezione successiva.

### Esempio svolto

**Esempio 14.2.** Due macchine termiche operano tra le stesse due sorgenti, una fredda a $T_1 = 300\ \mathrm{K}$ e una calda a $T_2 = 600\ \mathrm{K}$. La prima, reversibile, assorbe un calore $Q_{ass,R} = 2$ kJ dalla sorgente calda e produce un lavoro $W$. La seconda, irreversibile, ha rendimento $\eta_I = 0{,}3$ e produce lo stesso lavoro $W$. Si vogliono il lavoro $W$ e il confronto con il limite di Carnot.

*Schema.* Entrambe le macchine scambiano calore con le stesse due sorgenti a $T_1$ (fredda) e $T_2$ (calda); la macchina $R$ è reversibile, la macchina $I$ non lo è.

*Soluzione.* Per la macchina reversibile, il teorema di Carnot impone $\eta_R = \eta_{max} = 1 - T_1/T_2$, quindi

$$\eta_R = 1 - \frac{300\ \mathrm{K}}{600\ \mathrm{K}} = 0{,}50.$$

Il lavoro prodotto è

$$W = \eta_R \, Q_{ass,R} = 0{,}50 \cdot 2\ \text{kJ} = 1\ \text{kJ}$$

coerente con il valore riportato dalle fonti. Per la macchina irreversibile, che produce lo stesso lavoro $W = 1$ kJ con rendimento $\eta_I = 0{,}3$, il calore assorbito dalla sorgente calda è

$$Q_{ass,I} = \frac{W}{\eta_I} = \frac{1\ \text{kJ}}{0{,}3} \approx 3{,}33\ \text{kJ}$$

e il calore ceduto alla sorgente fredda, per il primo principio applicato al ciclo, vale

$$|Q_{ced,I}| = Q_{ass,I}(1-\eta_I) = 3{,}33\ \text{kJ} \cdot (1-0{,}3) \approx 2{,}33\ \text{kJ}.$$

*Controllo.* Si verifica immediatamente che $\eta_I = 0{,}3 < \eta_R = 0{,}50 = \eta_{max}$: la macchina irreversibile, come impone il teorema di Carnot, resta sempre sotto il limite fissato dalla macchina reversibile che opera tra le stesse sorgenti. Il controllo dimensionale è immediato: tutte le grandezze sono espresse in kJ o in rapporti adimensionali.

### Errore tipico

Un errore frequente è credere che il rendimento massimo $\eta_{max}=1-T_1/T_2$ si applichi a *qualunque* macchina che lavori tra le temperature estreme di un ciclo, anche quando il ciclo scambia calore con più di due sorgenti: il teorema di Carnot vale esattamente per macchine che scambiano calore con **esattamente due** sorgenti a temperatura fissata; il caso generale a più sorgenti richiede la disuguaglianza di Clausius, trattata nella sezione successiva. Un secondo errore tipico è dimenticare l'aggettivo *unico* negli enunciati di Kelvin-Planck e di Clausius, concludendo erroneamente che un frigorifero reale (che pure trasferisce calore dal freddo al caldo) violi il secondo principio: la presenza del lavoro assorbito dall'ambiente rende il processo compatibile con l'enunciato di Clausius, proprio perché il trasferimento di calore non è l'unico effetto del processo. Infine, va evitata la confusione tra l'enunciato di equivalenza (dimostrato per assurdo, mostrando che la violazione di uno implica la violazione dell'altro) e una pretesa identità diretta dei due processi fisici: Kelvin-Planck e Clausius descrivono fenomeni sperimentali diversi, ma sono logicamente inseparabili.

## p4 | Teorema di Clausius ed entropia

Il teorema di Carnot, dimostrato nella sezione precedente, confronta i rendimenti di macchine che scambiano calore con **due** sorgenti. Il teorema di Clausius estende questo risultato a un numero arbitrario di sorgenti (anche infinito), e costituisce il passo decisivo che permette di definire una nuova funzione di stato: l'entropia. Da questa definizione segue poi il principio di aumento dell'entropia, la formulazione più operativa del secondo principio della termodinamica, già enunciato nella forma di Kelvin-Planck e Clausius nella sezione [Secondo principio](ref:chapter/14#p3).

### Disuguaglianza di Clausius

**Teorema 14.3** (di Clausius). Sia M una macchina termica (reversibile o irreversibile) che compie un ciclo scambiando calore $Q_i$ con $n$ sorgenti a temperature $T_i$ ($i=1,\dots,n$, tutte con $T_i>0$). Allora

:::formula{id="14.8" label="Disuguaglianza di Clausius (sorgenti discrete)"}
$$\sum_{i=1}^{n} \frac{Q_i}{T_i} \le 0$$
:::

dove l'uguaglianza vale se e solo se M è reversibile.

**Dimostrazione.** Si introduce una sorgente ausiliaria a temperatura $T_0>0$ e, per ciascuna sorgente $T_i$, una macchina reversibile $R_i$ che opera fra $T_0$ e $T_i$ in modo da scambiare con $T_i$ il calore $-Q_i$, ossia il calore opposto a quello scambiato da M con la medesima sorgente. Per ciascuna macchina ausiliaria reversibile, essendo valida la relazione di Carnot fra due sole sorgenti, si ha

$$R_i:\ -\frac{Q_i}{T_i} + \frac{Q_{0i}}{T_0} = 0 \quad\Longrightarrow\quad \frac{Q_{0i}}{T_0} = \frac{Q_i}{T_i}$$

Sommando su tutte le $n$ macchine ausiliarie si ottiene

$$\frac{1}{T_0}\sum_{i=1}^{n} Q_{0i} = \sum_{i=1}^{n}\frac{Q_i}{T_i}$$

Al termine di un ciclo completo di M e delle $n$ macchine $R_i$, ciascuna sorgente $T_i$ ha scambiato con M il calore $Q_i$ e con $R_i$ il calore $-Q_i$: il bilancio netto con ogni sorgente intermedia è nullo, e l'unico scambio di calore dell'insieme (M $+$ tutte le $R_i$) avviene con l'unica sorgente $T_0$. Il sistema complessivo compie dunque un **ciclo monotermo**, per il quale, come stabilito dall'enunciato di Kelvin-Planck, il calore totale scambiato non può essere positivo:

$$\sum_{i=1}^n Q_{0i} \le 0 \quad\Longrightarrow\quad \sum_{i=1}^n \frac{Q_i}{T_i} \le 0$$

poiché $T_0>0$. Se M è reversibile, si può invertire il verso di percorrenza del ciclo (scambiando i segni di tutti i calori), e la disuguaglianza vale anche nel verso opposto; questo è possibile solo se vale l'uguaglianza.

Quando la macchina scambia calore con un continuo di sorgenti (ad esempio restando a contatto termico istante per istante con l'ambiente a temperatura variabile), la somma discreta diventa un integrale di linea chiuso lungo il ciclo: indicando con $\delta Q$ il calore infinitesimo scambiato quando la sorgente è a temperatura $T$,

:::formula{id="14.9" label="Disuguaglianza di Clausius (forma integrale)"}
$$\oint \frac{\delta Q}{T} \le 0$$
:::

con il segno di uguaglianza riservato ai cicli reversibili.

### Definizione di entropia

La disuguaglianza di Clausius, nel caso dell'uguaglianza, permette di definire una nuova funzione di stato. Siano $A$ e $B$ due stati di equilibrio collegati da due trasformazioni reversibili distinte, $1$ e $2$. Poiché sono reversibili, si può percorrere la $2$ a ritroso da $B$ ad $A$: la composizione $1+(-2)$ è allora un ciclo reversibile, per cui vale l'uguaglianza di Clausius:

$$\oint \frac{\delta Q}{T} = \int_A^B\!\left(\frac{\delta Q}{T}\right)_{\!1} + \int_B^A\!\left(\frac{\delta Q}{T}\right)_{\!-2} = \int_A^B\!\left(\frac{\delta Q}{T}\right)_{\!1} - \int_A^B\!\left(\frac{\delta Q}{T}\right)_{\!2} = 0$$

da cui $\int_A^B(\delta Q/T)_1 = \int_A^B(\delta Q/T)_2$: l'integrale non dipende dalla particolare trasformazione reversibile scelta tra $A$ e $B$, ma solo dagli stati estremi. Questo risultato giustifica la

**Definizione 14.1** (entropia). Si definisce entropia la funzione di stato $S$ tale che, per ogni trasformazione reversibile che collega $A$ a $B$,

:::formula{id="14.10" label="Variazione di entropia"}
$$\int_A^B \left(\frac{\delta Q}{T}\right)_{rev} = S(B) - S(A) = \Delta S$$
:::

o, in forma infinitesima,

:::formula{id="14.11" label="Entropia in forma differenziale"}
$$dS = \left(\frac{\delta Q}{T}\right)_{rev}$$
:::

L'unità di misura di $S$ nel SI è J/K.

Il punto cruciale è che $\delta Q$ non è un differenziale esatto (il calore scambiato dipende dal cammino, come già visto a proposito del primo principio), ma il rapporto $\delta Q/T$, calcolato lungo una trasformazione reversibile, lo è: la sua integrazione fra due stati dà sempre lo stesso risultato, indipendentemente dal cammino reversibile scelto.

L'entropia è inoltre una grandezza **additiva** ed **estensiva**: dati due sistemi, l'entropia del sistema complessivo è la somma delle entropie dei due sistemi, conseguenza del fatto che energia interna, lavoro e calore scambiati dal sistema complessivo sono anch'essi somme delle rispettive grandezze dei sottosistemi; a parità di stato intensivo, raddoppiando la massa di un sistema la sua entropia raddoppia.

Una conseguenza pratica fondamentale è la seguente regola di calcolo, valida anche quando la trasformazione realmente seguita è irreversibile.

**Definizione operativa.** Per calcolare la variazione di entropia $\Delta S$ di un sistema tra uno stato $A$ e uno stato $B$ collegati da una trasformazione irreversibile, è sufficiente scegliere una qualunque trasformazione reversibile che collega gli stessi stati $A$ e $B$ e applicare a questa la {{formula:14.10}}: poiché $S$ è funzione di stato, il risultato ottenuto è valido indipendentemente dalla trasformazione reale percorsa.

### Principio di aumento dell'entropia

Consideriamo ora un ciclo composto da una trasformazione irreversibile da $A$ a $B$ (trasformazione $1$) seguita da una trasformazione reversibile da $B$ ad $A$ (trasformazione $-2$): il ciclo complessivo è irreversibile, e dunque per la disuguaglianza di Clausius vale la disuguaglianza stretta:

$$\oint \frac{\delta Q}{T} = \int_A^B\!\left(\frac{\delta Q}{T}\right)_{irrev} - \int_A^B\!\left(\frac{\delta Q}{T}\right)_{rev} < 0$$

da cui

$$S_B - S_A = \int_A^B\!\left(\frac{\delta Q}{T}\right)_{rev} > \int_A^B\!\left(\frac{\delta Q}{T}\right)_{irrev}$$

Questa disuguaglianza è integrata sull'intera trasformazione $A\to B$, supposta irreversibile nel suo complesso: ciò non implica che la disuguaglianza sia stretta in ogni tratto infinitesimo del percorso, poiché una trasformazione complessivamente irreversibile può contenere tratti localmente reversibili, nei quali vale l'uguaglianza. In forma locale, per una generica trasformazione reale, si scrive dunque:

$$dS \ge \frac{\delta Q}{T}$$

con l'uguaglianza nei tratti in cui la trasformazione è localmente reversibile, e la disuguaglianza stretta in quelli localmente irreversibili.

Se il sistema è termicamente isolato, non scambia calore con l'esterno lungo la trasformazione reale, quindi $\delta Q=0$ nel termine di destra, e si ottiene

$$S_B - S_A \ge 0 \quad\Longrightarrow\quad S_B \ge S_A$$

da cui il

**Teorema 14.4** (principio di aumento dell'entropia). L'entropia di un sistema chiuso, privo di scambio di materia con l'esterno e termicamente isolato, non può mai diminuire: aumenta se la trasformazione è irreversibile, resta costante se e solo se la trasformazione è reversibile. In forma infinitesima, formulazione matematica del secondo principio della termodinamica:

:::formula{id="14.12" label="Principio di aumento dell'entropia"}
$$dS \ge 0$$
:::

Questo enunciato richiede non solo l'isolamento termico, ma anche che il sistema sia **chiuso**, cioè privo di scambio di materia con l'esterno: se il sistema scambia materia, può diminuire la propria entropia anche restando termicamente isolato ($\delta Q=0$), poiché la materia in uscita (o in entrata) porta con sé una propria entropia. Poiché l'**universo termodinamico** (sistema più ambiente) è per definizione un sistema isolato, chiuso e termicamente, il principio si applica sempre a esso:

:::formula{id="14.13" label="Variazione di entropia dell'universo"}
$$\Delta S_U = \Delta S_{sist} + \Delta S_{amb} \ge 0$$
:::

Da questa relazione discendono tre casi notevoli:

- trasformazioni reversibili: $\Delta S_U = 0$, quindi $\Delta S_{sist} = -\Delta S_{amb}$;
- trasformazioni irreversibili: $\Delta S_U > 0$, quindi $\Delta S_{amb} > -\Delta S_{sist}$;
- trasformazioni cicliche del sistema ($\Delta S_{sist} = 0$, essendo $S$ funzione di stato): $\Delta S_{amb} \ge 0$, con l'uguaglianza riservata al ciclo reversibile.

Poiché ogni processo naturale reale comporta qualche grado di irreversibilità (attrito, scambi termici a differenza finita di temperatura, espansioni libere, eccetera), si conclude che ogni processo naturale si svolge necessariamente nel verso che fa aumentare l'entropia complessiva del sistema e del suo ambiente. È bene sottolineare che il principio non vieta affatto che l'entropia di un sottosistema diminuisca (ad esempio un corpo che si raffredda), purché l'aumento di entropia dell'ambiente compensi e superi tale diminuzione.

**Esempio 14.3** (scambio di calore fra due sorgenti). Due sorgenti ideali, a temperature costanti $T_1$ e $T_2$ con $T_2 > T_1$, sono poste in contatto termico: la sorgente calda cede il calore $Q>0$ e la sorgente fredda lo assorbe. Si vuole calcolare la variazione di entropia dell'universo in questo processo, chiaramente irreversibile poiché avviene con una differenza finita di temperatura.

Il processo è isotermo per ciascuna sorgente, quindi per calcolare la variazione di entropia di ognuna si può applicare direttamente la {{formula:14.10}} con $T$ costante, immaginando una trasformazione reversibile fra gli stessi stati iniziale e finale di ciascuna sorgente. La sorgente fredda (a $T_1$) assorbe $Q$:

$$\Delta S_1 = \int \frac{\delta Q}{T_1} = \frac{1}{T_1}\int \delta Q = \frac{Q}{T_1} > 0$$

La sorgente calda (a $T_2$) cede $-Q$:

$$\Delta S_2 = \int \frac{-\delta Q}{T_2} = -\frac{Q}{T_2} < 0$$

La variazione di entropia dell'universo (sistema isolato costituito dalle due sorgenti) è la somma delle due, per l'additività dell'entropia:

$$\Delta S_U = \Delta S_1 + \Delta S_2 = Q\left(\frac{1}{T_1} - \frac{1}{T_2}\right) = Q\,\frac{T_2 - T_1}{T_1 T_2}$$

Poiché $T_2 > T_1 > 0$, il numeratore $T_2-T_1$ e il denominatore $T_1T_2$ sono entrambi positivi, dunque $\Delta S_U > 0$, in accordo con il principio di aumento dell'entropia applicato a un processo irreversibile. Si osservi che il processo inverso (calore che fluisce spontaneamente dal corpo freddo al corpo caldo) darebbe $\Delta S_U < 0$: per questo motivo è vietato dal secondo principio, coerentemente con l'enunciato di Clausius già visto nella sezione [Secondo principio](ref:chapter/14#p3).

**Errore tipico 14.4.** Un errore frequente è calcolare la variazione di entropia integrando $\delta Q/T$ lungo la trasformazione realmente seguita, quando questa è irreversibile: se il sistema scambia calore con una sorgente a temperatura $T$ diversa dalla propria temperatura istantanea, l'integrale $\int(\delta Q/T)_{irrev}$ non coincide con $\Delta S$, ma è strettamente minore (per i sistemi che scambiano calore con l'esterno questo integrale può anche risultare negativo pur essendo $\Delta S>0$). Per i sistemi isolati, invece, $\delta Q=0$ lungo tutta la trasformazione reale, per cui l'integrale $\int(\delta Q/T)_{irrev}$ è sempre nullo, anche quando $\Delta S>0$. Occorre sempre costruire una trasformazione reversibile fittizia fra gli stessi stati estremi e integrare lungo quella.

Un secondo errore tipico è applicare $dS\ge0$ al sistema isolato quando in realtà il sistema scambia calore con l'ambiente: in tal caso il principio vale per l'insieme sistema $+$ ambiente (l'universo termodinamico), non per il sistema da solo, che può benissimo vedere diminuire la propria entropia.

Infine, va evitato di confondere la disuguaglianza di Clausius $\oint \delta Q/T \le 0$, relativa a un **ciclo** (qualunque trasformazione periodica, reversibile o no), con la definizione di entropia $dS=(\delta Q/T)_{rev}$, che vale lungo una trasformazione **non ciclica** reversibile: sono due enunciati distinti, il secondo ottenuto dal primo applicato a un ciclo costruito appositamente con due cammini fra gli stessi estremi. Il calcolo esplicito di $\Delta S$ per gas ideali, cambiamenti di fase e scambi termici tra corpi di capacità termica finita, con numerosi esempi completi, è svolto nella sezione [Calcolo delle variazioni di entropia](ref:chapter/14#p5).

## p5 | Calcolo delle variazioni di entropia

La definizione di entropia introdotta nella sezione precedente, $dS = (\delta Q/T)_{rev}$, permette di calcolare $\Delta S$ per qualunque trasformazione, anche irreversibile, purché si scelga, tra gli stati iniziale e finale, una qualunque trasformazione reversibile che li collega: l'entropia è infatti una funzione di stato, e il suo valore dipende solo dalle coordinate termodinamiche degli estremi, non dal cammino seguito.

**Definizione 14.2** (metodo generale di calcolo di $\Delta S$). Dati due stati $A$ e $B$ di un sistema, collegati da una trasformazione qualsiasi (reversibile o irreversibile), si ha

$$S(B) - S(A) = \int_{A}^{B} \left(\frac{\delta Q}{T}\right)_{rev}$$

dove l'integrale va calcolato lungo una qualsiasi trasformazione reversibile che congiunga $A$ a $B$, anche se la trasformazione fisicamente realizzata è irreversibile.

L'entropia è inoltre una grandezza additiva ed estensiva: l'entropia di un sistema composto da più parti è la somma delle entropie delle singole parti, e raddoppiando la massa di un sistema la sua entropia raddoppia.

### Gas ideali

Per $n$ moli di gas ideale che passano dallo stato $A(p_A,V_A,T_A)$ allo stato $B(p_B,V_B,T_B)$, lungo una qualunque trasformazione (anche irreversibile), si assume che il calore specifico molare a volume costante $c_V$ sia costante nell'intervallo di temperatura compreso tra $T_A$ e $T_B$ (ipotesi ragionevole per un gas ideale su un intervallo non troppo ampio); se invece $c_V$ dipende da $T$, il primo termine del risultato seguente va sostituito con $n\int_{T_A}^{T_B} c_V(T)\,dT/T$. Per ottenere l'espressione si scelgono una isocora seguita da una isoterma reversibili (o una qualsiasi altra coppia di trasformazioni reversibili equivalenti) per calcolare l'integrale della definizione. Il risultato è

:::formula{id="14.14" label="Variazione di entropia di un gas ideale"}
$$\Delta S = S(B)-S(A) = n c_V \ln\left(\frac{T_B}{T_A}\right) + nR \ln\left(\frac{V_B}{V_A}\right)$$
:::

equivalente, tramite l'equazione di stato [formula (13.3)](ref:formula/13.3) e la relazione di Mayer [formula (13.6)](ref:formula/13.6), alle forme

$$\Delta S = n c_V \ln\left(\frac{p_B}{p_A}\right) + n c_p \ln\left(\frac{V_B}{V_A}\right) = n c_p \ln\left(\frac{T_B}{T_A}\right) - nR \ln\left(\frac{p_B}{p_A}\right)$$

utili quando i dati del problema sono espressi in termini di pressione piuttosto che di volume.

Per le trasformazioni elementari si ottengono i casi particolari:

:::formula{id="14.15" label="Variazione di entropia in una isoterma"}
$$\Delta S = nR \ln\left(\frac{V_B}{V_A}\right)$$
:::

:::formula{id="14.16" label="Variazione di entropia in una isocora"}
$$\Delta S = n c_V \ln\left(\frac{T_B}{T_A}\right)$$
:::

:::formula{id="14.17" label="Variazione di entropia in una isobara"}
$$\Delta S = n c_p \ln\left(\frac{T_B}{T_A}\right)$$
:::

Nella trasformazione adiabatica reversibile il calore scambiato è nullo in ogni istante, quindi $\Delta S = 0$: una tale trasformazione è detta anche isoentropica. Questo risultato vale solo se l'adiabatica è reversibile; un'adiabatica irreversibile (per esempio un'espansione libera) ha in generale $\Delta S \ne 0$, come mostra l'esempio seguente.

**Esempio 14.4.** Cinque moli di gas ideale biatomico ($c_V = \frac{5}{2}R$, $\gamma = 7/5$) si trovano alla temperatura $T_1 = 250\ ^\circ\mathrm{C} = 523{,}15\ \mathrm{K}$ in un cilindro di volume $V_1$, collegato tramite un rubinetto chiuso a un secondo cilindro vuoto di volume $V_2$. Il gas compie prima un'espansione adiabatica reversibile fino al volume $V_1' = 4V_1$; poi si apre il rubinetto e il gas fluisce liberamente nel secondo cilindro, di volume $V_2 = V_1'$, con l'intero sistema termicamente isolato e a pareti rigide.

Nella prima fase la trasformazione è adiabatica reversibile, quindi $\Delta S_1 = 0$ per quanto appena visto. La temperatura al termine di questa fase si ricava dall'equazione delle adiabatiche [formula (13.9)](ref:formula/13.9):

$$T_1' = T_1 \left(\frac{V_1}{V_1'}\right)^{\gamma-1} = T_1 \left(\frac{1}{4}\right)^{2/5} = 523{,}15\ \mathrm{K} \times 0{,}574 \approx 300{,}5\ \mathrm{K}$$

Nella seconda fase il gas subisce un'espansione libera: non c'è scambio di calore con l'esterno ($Q=0$, i cilindri sono isolati) e il gas non compie lavoro contro nulla (il secondo cilindro è vuoto), quindi $W=0$. Dal primo principio $\Delta U = Q - W = 0$, e poiché l'energia interna del gas ideale dipende solo dalla temperatura, $T_f = T_1'$. La trasformazione è però irreversibile (non quasi-statica): per calcolare $\Delta S_2$ si usa una trasformazione reversibile fittizia tra gli stessi stati, applicando {{formula:14.14}} con $T_f = T_1'$:

$$\Delta S_2 = n c_V \ln\left(\frac{T_f}{T_1'}\right) + nR \ln\left(\frac{V_f}{V_1'}\right) = 0 + nR\ln(2)$$

poiché il volume finale $V_f = V_1' + V_2 = 2V_1'$ e il termine logaritmico in temperatura si annulla. Numericamente

$$\Delta S_2 = 5\ \mathrm{mol} \times 8{,}314\ \mathrm{J/(mol\cdot K)} \times \ln 2 \approx 28{,}8\ \mathrm{J/K}$$

La variazione di entropia totale del gas è $\Delta S = \Delta S_1 + \Delta S_2 \approx 28{,}8\ \mathrm{J/K} > 0$. Poiché il sistema è isolato termicamente e meccanicamente (pareti rigide, nessun contatto con sorgenti), questa è anche la variazione di entropia dell'universo: il risultato positivo è coerente con l'irreversibilità dell'espansione libera.

### Sorgenti e corpi

Una **sorgente di calore** è un corpo a capacità termica così grande che la sua temperatura resta costante durante lo scambio di calore (vedi [Macchine termiche e frigoriferi](ref:chapter/14#p2)). Se una sorgente a temperatura $T$ scambia il calore $Q$ (con il segno abituale, positivo se assorbito), la sua variazione di entropia è semplicemente

$$\Delta S = \frac{Q}{T}$$

perché la temperatura è costante e può essere portata fuori dall'integrale.

Lo scambio tra due sorgenti a temperature diverse è già stato analizzato nella sezione precedente: il trasferimento di calore dalla sorgente calda a quella fredda aumenta l'entropia dell'universo, come espresso da {{formula:14.18}}. Ci concentriamo qui sui corpi a capacità termica finita, la cui temperatura varia durante lo scambio.

:::formula{id="14.18" label="Variazione di entropia nello scambio tra due sorgenti"}
$$\Delta S_U = \Delta S_1 + \Delta S_2 = Q\left(\frac{1}{T_1} - \frac{1}{T_2}\right) = Q\,\frac{T_2-T_1}{T_1 T_2} > 0$$
:::

Se invece una delle due parti è un **corpo a capacità termica finita** (massa $m$, calore specifico $c$), la sua temperatura varia durante lo scambio e non si può portarla fuori dall'integrale: bisogna immaginare di metterlo in contatto successivo con infinite sorgenti a temperature $T_1, T_1+dT, \dots, T_2$, in modo che ogni scambio infinitesimo $dQ = mc\,dT$ sia reversibile. Nel seguito si assume che il calore specifico $c$ sia costante nell'intervallo tra $T_1$ e $T_2$ e che in tale intervallo non avvenga alcun cambiamento di fase; la stessa ipotesi vale per le formule successive relative alla sorgente a temperatura fissa, alla temperatura di equilibrio e ai due corpi a contatto. Se $c$ dipendesse dalla temperatura, basterebbe sostituire $mc$ con $mc(T)$ sotto il segno di integrale. Integrando,

:::formula{id="14.19" label="Variazione di entropia di un corpo a capacità termica finita"}
$$\Delta S_{\text{corpo}} = \int_{T_1}^{T_2} \frac{mc\,dT}{T} = mc\ln\left(\frac{T_2}{T_1}\right)$$
:::

positiva se il corpo si riscalda ($T_2>T_1$) e negativa se si raffredda. Se il corpo scambia calore con una sorgente a temperatura fissa $T_2$ (per esempio l'ambiente), la variazione di entropia della sorgente è

$$\Delta S_{\text{amb}} = \frac{Q_{\text{amb}}}{T_2} = \frac{mc(T_1-T_2)}{T_2}$$

e la somma $\Delta S_U = \Delta S_{\text{corpo}} + \Delta S_{\text{amb}} = mc\ln(T_2/T_1) + mc(T_1-T_2)/T_2$ risulta sempre positiva, confermando l'irreversibilità del processo.

Nel caso di due corpi a capacità termica finita (masse $m_1,m_2$, calori specifici $c_1,c_2$, temperature iniziali $T_1 < T_2$) messi a contatto in un recipiente adiabatico, la temperatura di equilibrio è quella già ricavata nella calorimetria (richiamando [formula (12.15)](ref:formula/12.15)):

$$T_C = \frac{m_1 c_1 T_1 + m_2 c_2 T_2}{m_1 c_1 + m_2 c_2}$$

e le variazioni di entropia dei due corpi, calcolate ciascuna lungo una successione reversibile di sorgenti come sopra, sono

:::formula{id="14.20" label="Variazione di entropia nello scambio tra due corpi"}
$$\Delta S_1 = m_1 c_1 \ln\left(\frac{T_C}{T_1}\right) > 0, \qquad \Delta S_2 = m_2 c_2 \ln\left(\frac{T_C}{T_2}\right) < 0$$
:::

Il corpo più freddo guadagna entropia, quello più caldo ne perde, ma la somma $\Delta S_1 + \Delta S_2$ è sempre positiva poiché lo scambio di calore tra corpi a temperatura diversa è irreversibile.

Infine, un cambiamento di fase reversibile è un processo isotermo: se un corpo di massa $m$ cambia fase alla temperatura $T$ con calore latente $\lambda$ (vedi [Calorimetria](ref:chapter/12#p5)), la sua variazione di entropia è data da {{formula:14.21}}, con il segno positivo per la fusione o la vaporizzazione, durante le quali il corpo assorbe calore, e negativo per i processi inversi, la solidificazione o la condensazione, durante i quali il corpo cede calore.

:::formula{id="14.21" label="Variazione di entropia in un cambiamento di fase reversibile"}
$$\Delta S = \frac{m\lambda}{T} \quad \text{(fusione o vaporizzazione)}, \qquad \Delta S = -\frac{m\lambda}{T} \quad \text{(solidificazione o condensazione)}$$
:::

dove $\lambda>0$ è il consueto calore latente della sostanza, e dove entrambe le espressioni si ottengono integrando $dQ/T$ a temperatura costante lungo la trasformazione reversibile, con $dQ = \pm m\lambda$ a seconda del verso del cambiamento di fase.

### Entropia dell'universo

Per applicare il principio di aumento dell'entropia, consideriamo la miscelazione irreversibile di due corpi in un recipiente adiabatico. La variazione complessiva si ottiene sommando le variazioni di entropia dei due corpi.

**Esempio 14.5.** Un corpo di massa $m_1 = 1\,\mathrm{kg}$ di acqua (calore specifico $c=4186\,\mathrm{J/(kg\cdot K)}$) a temperatura $T_1=283\,\mathrm{K}$ viene mescolato, in un recipiente adiabatico, con un corpo di massa $m_2=2\,\mathrm{kg}$ di acqua alla temperatura $T_2=353\,\mathrm{K}$.

La temperatura di equilibrio, data da [formula (12.15)](ref:formula/12.15), vale

$$T_C = \frac{m_1 c T_1 + m_2 c T_2}{(m_1+m_2)\,c} = \frac{1\times 283 + 2\times 353}{3}\,\mathrm{K} \approx 329{,}7\,\mathrm{K}$$

Applicando {{formula:14.20}}, le variazioni di entropia sono

$$\Delta S_1 = 1\,\mathrm{kg} \times 4186\,\mathrm{J/(kg\cdot K)} \times \ln\left(\frac{329{,}667}{283}\right) \approx 639\,\mathrm{J/K}$$

$$\Delta S_2 = 2\,\mathrm{kg} \times 4186\,\mathrm{J/(kg\cdot K)} \times \ln\left(\frac{329{,}667}{353}\right) \approx -572{,}5\,\mathrm{J/K}$$

La variazione complessiva è quindi

$$\Delta S_U = \Delta S_1 + \Delta S_2 \approx 66{,}4\,\mathrm{J/K} > 0$$

Il segno positivo conferma che la miscelazione è irreversibile.

La temperatura finale comune è compresa tra quelle iniziali. Il corpo freddo aumenta la propria entropia, mentre quello caldo la diminuisce; per stabilire il verso spontaneo del processo, si sommano le due variazioni:

:::formula{id="14.22" label="Classificazione dei processi tramite l'entropia dell'universo"}
$$\begin{aligned} \text{reversibile:}\quad & \Delta S_U = 0 \\ \text{irreversibile:}\quad & \Delta S_U > 0 \\ \text{ciclica (sistema):}\quad & \Delta S_{\text{sist}} = 0,\ \Delta S_{\text{amb}} \ge 0 \end{aligned}$$
:::

L'entropia, essendo una funzione di stato, può essere usata come coordinata termodinamica indipendente al pari di volume e pressione, dando luogo al **diagramma $(S,T)$**: una trasformazione reversibile vi è rappresentata da una linea continua tra i due stati. Una trasformazione realmente irreversibile e priva di stati intermedi di equilibrio, come un'espansione libera, non ha una rappresentazione univoca in questo piano: si disegna invece la trasformazione reversibile equivalente, usata per il calcolo di $\Delta S$, al posto della trasformazione fisica realmente seguita. Esistono tuttavia trasformazioni irreversibili ma quasi statiche, i cui stati intermedi sono comunque stati di equilibrio con $S$ e $T$ ben definite (per esempio uno scambio di calore quasi statico con una sorgente a temperatura di poco diversa da quella del sistema): anche queste trasformazioni tracciano una curva reale nel piano $(S,T)$. In tal caso, però, l'area sottesa da tale curva non coincide in generale con il calore effettivamente scambiato, perché la relazione $\delta Q_{rev} = T\,dS$ vale solo lungo un cammino reversibile; riserviamo quindi l'integrale $\int T\,dS$ al calore associato a una trasformazione reversibile, sia essa quella realmente seguita o quella scelta per il calcolo di $\Delta S$: positiva se $S$ aumenta, cioè se il sistema assorbe calore.

$$Q_{rev} = \int_A^B T\,dS$$

e in un ciclo reversibile l'area racchiusa è la somma algebrica dei calori scambiati, positiva se il ciclo è percorso in senso orario; essendo un ciclo ($\Delta U=0$), quella stessa area rappresenta anche il lavoro compiuto, in perfetta analogia con il ruolo dell'area nel piano $(V,p)$. In questo diagramma un'isoterma reversibile è un segmento orizzontale e un'adiabatica reversibile è un segmento verticale (coerentemente con $\Delta S = 0$), mentre una trasformazione isocora o isobara reversibile è rappresentata da una curva crescente con la temperatura, come illustrato nella figura seguente.

:::image{src="assets/b7b57303-diagramma-s-t-isoterma-isocora.svg" alt="Diagramma entropia-temperatura con una retta orizzontale (isoterma) e una curva crescente (isocora) che partono dallo stesso punto" caption="Fig. 14.2 — Andamento qualitativo di un'isoterma reversibile e di una trasformazione isocora reversibile nel piano (S, T), a partire dallo stesso stato iniziale."}
:::

**Errore tipico 14.5.** Un errore frequente è applicare direttamente la formula $\Delta S = n c_V \ln(T_B/T_A) + nR\ln(V_B/V_A)$ (o le analoghe per sorgenti e corpi) a una trasformazione irreversibile usando il calore effettivamente scambiato lungo quella trasformazione, invece di ragionare sempre in termini degli stati iniziale e finale e di una trasformazione reversibile fittizia che li collega: nell'espansione libera, per esempio, il calore scambiato è nullo ma $\Delta S \ne 0$, perché il calore nullo si riferisce alla trasformazione reale (irreversibile), non a quella reversibile usata per calcolare $\Delta S$. Un secondo errore tipico è scrivere $\Delta Q$ o $\Delta W$ come se fossero variazioni di una funzione di stato: calore e lavoro non sono funzioni di stato (vedi [Primo principio ed energia interna](ref:chapter/13#p2)), mentre l'entropia lo è, e solo per essa ha senso scrivere $\Delta S = S(B)-S(A)$. Un terzo errore è confondere $\Delta S_{\text{sist}}$ con $\Delta S_U$: in un ciclo il sistema torna allo stato di partenza e quindi $\Delta S_{\text{sist}} = 0$ sempre, ma questo non implica affatto che il ciclo sia reversibile, poiché l'irreversibilità si manifesta nell'aumento di entropia dell'ambiente, $\Delta S_{\text{amb}} > 0$.
