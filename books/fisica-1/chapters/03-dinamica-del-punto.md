---
chapter: 3
title: Dinamica del punto
---

## p1 | Introduzione

La dinamica del punto permette di capire come le forze determinano il moto e l’equilibrio dei corpi. È una base essenziale per affrontare problemi in cui intervengono vincoli, attrito, molle o più corpi collegati: situazioni che richiedono di individuare tutte le forze e applicare le leggi di Newton con attenzione.

Per seguire il capitolo è utile saper descrivere posizione, velocità e accelerazione e conoscere le grandezze fondamentali della cinematica del punto. Queste conoscenze serviranno per collegare la risultante delle forze al cambiamento del moto, scegliere gli assi più adatti e interpretare le equazioni ottenute.

Al termine saprai costruire diagrammi di corpo libero e proiettare le equazioni del moto, determinare reazioni vincolari e condizioni di equilibrio, distinguere attrito statico e dinamico e analizzare sistemi con molle. Potrai inoltre usare quantità di moto e impulso per studiare le interazioni, ricavare il moto da una forza assegnata e affrontare traiettorie curve, dal pendolo alle guide circolari. Imparerai a riconoscere quando si conserva la quantità di moto e a evitare errori frequenti, come confondere l’attrito statico con il suo valore massimo o dedurre una velocità minima dalla sola energia.

## p2 | Principi della dinamica

La dinamica del punto materiale studia il moto in relazione alle sue cause. Per descrivere compiutamente il moto di un punto occorre conoscere le forze che agiscono su di esso, i parametri che intervengono in modo rilevante (per esempio attriti e resistenza dell'aria) e le relazioni cinematiche già stabilite in [Moto rettilineo](ref:chapter/2#p2) e in [Moto nel piano](ref:chapter/2#p5). La **forza** è la grandezza fisica che esprime e misura l'interazione tra sistemi fisici, interazione che può avvenire a distanza o per contatto; sono le forze a causare la variazione dello stato di moto di un corpo.

### Forza, massa e riferimenti inerziali

**Definizione 3.1** (primo principio della dinamica, o principio d'inerzia). Un corpo non soggetto a forze non subisce cambiamenti di velocità: permane nel suo stato di quiete se era in quiete ($\vec{v}=0$), oppure prosegue con moto rettilineo uniforme se $\vec{v}$ era costante e non nulla.

L'assenza di forze non implica l'assenza di moto, ma soltanto la costanza della velocità; un moto accelerato, al contrario, segnala sempre la presenza di una forza risultante non nulla. Il principio d'inerzia si applica anche quando sul punto agiscono più forze la cui somma vettoriale è nulla: in tal caso l'effetto netto è identico a quello dell'assenza totale di forze.

Il principio d'inerzia vale rigorosamente solo in particolari sistemi di riferimento, detti inerziali.

**Definizione 3.2** (riferimento inerziale). Un sistema di riferimento si dice inerziale se in esso vale rigorosamente la legge di inerzia, cioè se un punto non soggetto a forze, lanciato con velocità arbitraria in una direzione qualunque, si muove di moto rettilineo uniforme, oppure resta in quiete se era in quiete.

**Teorema 3.1** (relatività galileiana). Dato un sistema di riferimento inerziale, ogni altro sistema in moto rettilineo uniforme rispetto a esso è a sua volta inerziale. Di conseguenza non è possibile, tramite esperimenti di meccanica, stabilire se un sistema inerziale sia in quiete o in moto rispetto a un altro: non ha senso parlare di moto assoluto.

Un sistema di riferimento che accelera rispetto a un sistema inerziale è invece non inerziale: in esso compaiono le cosiddette forze apparenti, che non derivano da alcuna interazione fondamentale e sono trattate in [Forze apparenti](ref:chapter/6#p3).

**Legge** (seconda legge di Newton). Se un punto materiale di massa $m$ si muove rispetto a un sistema di riferimento inerziale con accelerazione $\vec{a}$, esso è soggetto a una forza risultante $\vec{F}_T$ data dalla relazione vettoriale

:::formula{id="3.1" label="Seconda legge di Newton"}
$$\vec{F}_T = m\vec{a} = m\frac{d\vec{v}}{dt} = m\frac{d^2\vec{r}}{dt^2}$$
:::

L'unità di misura della forza nel SI è il newton, $1\ \text{N} = 1\ \text{kg} \cdot 1\ \text{m/s}^2$: è l'intensità di una forza che, applicata a un corpo di massa $1\ \text{kg}$, gli imprime un'accelerazione di modulo $1\ \text{m/s}^2$.

La grandezza $m$ che compare nella legge è la **massa inerziale** del punto: essa esprime l'inerzia del punto, cioè la sua resistenza a variare lo stato di moto, ossia a variare la propria velocità in modulo, direzione o verso. A parità di forza applicata, l'effetto dinamico (l'accelerazione prodotta) è tanto maggiore quanto minore è la massa. È opportuno distinguere questa grandezza dal peso $\vec{P}=m\vec{g}$, che è una forza e dipende dal campo gravitazionale locale, mentre la massa inerziale è una proprietà intrinseca del corpo.

Se $\vec{F}=0$ la seconda legge restituisce $\vec{a}=0$ e quindi $\vec{v}=\text{cost}$: il primo principio è dunque contenuto come caso particolare nella seconda legge, che ne costituisce la formulazione quantitativa generale.

Introducendo la quantità di moto $\vec{p}=m\vec{v}$ (già definita nelle unità del libro e ripresa in [Quantità di moto e impulso](ref:chapter/3#p3)), se la massa resta costante nel tempo la derivata di $\vec{p}$ fornisce una forma equivalente e più generale della seconda legge

:::formula{id="3.2" label="Forma generale della seconda legge mediante la quantità di moto"}
$$\frac{d\vec{p}}{dt} = m\frac{d\vec{v}}{dt} = m\vec{a} = \vec{F}_{TOT}$$
:::

dove $\vec{F}_{TOT}$ è la risultante di tutte le forze applicate al punto materiale.

**Legge** (terza legge di Newton, o principio di azione e reazione). Se un corpo $A$ esercita su un corpo $B$ una forza $\vec{F}_{A,B}$, il corpo $B$ reagisce esercitando su $A$ una forza $\vec{F}_{B,A}$ con lo stesso modulo e la stessa direzione, ma verso opposto, e con la stessa retta d'azione:

:::formula{id="3.3" label="Principio di azione e reazione"}
$$\vec{F}_{A,B} = -\vec{F}_{B,A}$$
:::

Non esistono forze isolate: ogni forza va considerata come membro di una coppia azione-reazione, e l'interazione tra due corpi è sempre mutua. Una conseguenza immediata è che, se due punti materiali di massa $m_1$ e $m_2$ interagiscono solo tra loro in un sistema inerziale, le loro accelerazioni istantanee $\vec{a}_1$ e $\vec{a}_2$ soddisfano $\vec{a}_2 = -(m_1/m_2)\vec{a}_1$.

**Errore tipico 3.1.** Confondere le forze di una coppia azione-reazione (che agiscono su due corpi diversi, $A$ e $B$) con due forze in equilibrio applicate allo stesso corpo. La terza legge non dice nulla sull'equilibrio di un singolo punto materiale: l'equilibrio di un corpo richiede che la risultante delle forze applicate a quel corpo sia nulla, condizione del tutto distinta dal principio di azione e reazione.

### Il diagramma di corpo libero

Per applicare la seconda legge a un problema concreto occorre prima individuare tutte e sole le forze che agiscono sul punto materiale in esame, rappresentandole in un diagramma di corpo libero: un disegno in cui il corpo è isolato dall'ambiente e ogni interazione con l'esterno (peso, reazioni vincolari, tensioni, attriti, forze applicate) è sostituita da un vettore forza applicato nel punto. Dallo studio del moto si ottengono informazioni solo sulla risultante $\vec{R}=\sum_i\vec{F}_i$, non sulle singole forze componenti; se il corpo è in quiete o si muove di moto rettilineo uniforme, la forza agente è nulla, ma questo non significa che non agiscano forze, bensì che la loro risultante è nulla.

Una volta disegnato il diagramma, si fissa un sistema di riferimento (cartesiano, oppure intrinseco con i versori tangente e normale) e si proietta la seconda legge sugli assi scelti. Scomponendo ciascuna forza e l'accelerazione lungo due direzioni ortogonali $\hat{u}_\parallel$ e $\hat{u}_\perp$, l'equazione vettoriale $\vec{F}=m\vec{a}$ diventa un sistema di equazioni scalari indipendenti, una per ciascuna direzione

$$F_\parallel \hat{u}_\parallel + F_\perp \hat{u}_\perp = m\left(a_\parallel\,\hat{u}_\parallel + a_\perp\,\hat{u}_\perp\right) \quad\Longrightarrow\quad \begin{cases} F_\parallel = ma_\parallel \\ F_\perp = ma_\perp \end{cases}$$

**Esempio 3.1** (corpo su un piano inclinato liscio). Un punto materiale di massa $m$ si muove senza attrito su un piano inclinato di un angolo $\theta$ rispetto all'orizzontale, soggetto solo al peso $\vec{P}=m\vec{g}$ e alla reazione normale $\vec{N}$ del vincolo. Il diagramma di corpo libero contiene due sole forze, $\vec{P}$ e $\vec{N}$, e la seconda legge si scrive $\vec{P}+\vec{N}=m\vec{a}$. Scegliendo l'asse $x$ parallelo al piano (verso il basso lungo la discesa) e l'asse $y$ perpendicolare a esso, la proiezione dà il sistema

$$\begin{cases} y:\ mg\cos\theta - N = 0 \\ x:\ mg\sin\theta = ma \end{cases}$$

da cui si ricava $N = mg\cos\theta$ e $a = g\sin\theta$: l'accelerazione lungo il piano non dipende dalla massa, in coerenza con il fatto che tutti i corpi in caduta libera (o lungo un piano liscio) accelerano allo stesso modo.

Quando le forze non sono tutte dirette lungo un'unica retta, si proietta sui due assi cartesiani $x$ e $y$: due vettori sono uguali se e solo se sono uguali, separatamente, le loro componenti lungo ciascun versore. Se sul punto agiscono, per esempio, due tensioni $\vec{T}_1 = f_x(t)\,\hat{u}_x$ e $\vec{T}_2 = f_y\,\hat{u}_y$, la seconda legge $\vec{T}_1+\vec{T}_2 = m\vec{a}$ equivale al sistema scalare

$$\begin{cases} f_x(t) = ma_x \\ f_y = ma_y \end{cases}$$

**Errore tipico 3.2.** Scomporre la forza peso su un piano inclinato scrivendo $mg\sin\theta$ e $mg\cos\theta$ come se fossero già vettori diretti, rispettivamente, lungo il piano e perpendicolarmente a esso. In realtà $mg\sin\theta$ e $mg\cos\theta$ sono soltanto i moduli delle componenti: i vettori componenti corretti sono $\vec{P}_x = (mg\sin\theta)\,\hat{u}_x$ e $\vec{P}_y = -(mg\cos\theta)\,\hat{u}_y$, dove $\hat{u}_x$ e $\hat{u}_y$ sono i versori (da definire esplicitamente) delle direzioni longitudinale e normale al piano. Confondere il modulo di una componente con il vettore componente stesso porta a errori di segno sistematici, specialmente quando si cambia l'orientazione del piano o il verso di percorrenza.

### Dalla forza alla legge oraria

Il problema inverso — nota la forza come funzione del tempo, determinare la legge oraria — si risolve integrando due volte l'equazione del moto, in analogia con quanto già fatto in [Moto rettilineo](ref:chapter/2#p2) a partire da un'accelerazione nota. Proiettando $\vec{F}=m\vec{a}$ su un asse (per esempio $x$) e usando $a_x = d^2x/dt^2$, si ottiene l'equazione differenziale del moto. Se la forza dipende dalla posizione o dalla velocità, occorre invece risolvere l'equazione differenziale specifica del moto, come precisato nel paragrafo conclusivo.

$$\frac{d^2x}{dt^2} = \frac{f_x(t)}{m}$$

che si risolve in due passi successivi: prima si integra una volta per ottenere la legge della velocità $v_x(t)$, usando $d^2x/dt^2 = dv_x/dt$ e il teorema fondamentale del calcolo integrale

:::formula{id="3.4" label="Velocità per integrazione dell'equazione del moto"}
$$\int_0^t \frac{dv_x}{dt'}\,dt' = \int_0^t \frac{f_x(t')}{m}\,dt' \quad\Longrightarrow\quad v_x(t) = v_x(0) + \frac{1}{m}\int_0^t f_x(t')\,dt'$$
:::

poi si integra ancora, usando $v_x = dx/dt$, per ottenere la legge oraria della posizione

:::formula{id="3.5" label="Legge oraria per integrazione della velocità"}
$$x(t) = x(0) + \int_0^t v_x(t')\,dt'$$
:::

**Esempio 3.2** (forza proporzionale al tempo su una guida rettilinea). Dati: un corpo di massa $m=5\ \text{kg}$ si muove lungo l'asse $x$, inizialmente nell'origine ($x(0)=0$) con velocità $v_0=v(0)=-3\ \text{m/s}$ (diretta verso sinistra). Tramite una fune gli viene applicata una forza diretta verso destra che cresce nel tempo secondo $F(t)=ct$, con $c=8\ \text{N/s}$. Si vuole determinare la legge della velocità $v(t)$ e, successivamente, la legge oraria $x(t)$.

Schema delle forze: la guida è orizzontale e vincola il corpo a muoversi lungo l'asse $x$. Sul corpo agiscono la tensione $F(t)=ct$ lungo $x$, il peso $\\vec{P}=m\\vec{g}$ verso il basso e la reazione normale $\vec{N}$ della guida verso l'alto. Le forze trasversali si compensano, quindi la loro risultante è nulla; lungo $x$ resta la sola tensione.

Equazioni: dalla seconda legge di Newton lungo $x$

$$F = ma \quad\Longrightarrow\quad a(t) = \frac{F(t)}{m} = \frac{c\,t}{m}$$

Soluzione letterale: integrando l'accelerazione tra $0$ e $t$,

$$\int_0^t a(t')\,dt' = \int_0^t \frac{c\,t'}{m}\,dt' \quad\Longrightarrow\quad v(t)-v(0) = \frac{c}{2m}t^2 \quad\Longrightarrow\quad v(t) = v_0 + \frac{c}{2m}t^2$$

e integrando ancora,

$$\int_0^t v(t')\,dt' = \int_0^t \left(v_0+\frac{c}{2m}t'^2\right)dt' \quad\Longrightarrow\quad x(t)-x(0) = v_0 t + \frac{c}{6m}t^3 \quad\Longrightarrow\quad x(t) = v_0 t + \frac{c}{6m}t^3$$

Numeri: con $m=5\ \text{kg}$, $c=8\ \text{N/s}$, $v_0=-3\ \text{m/s}$,

$$v(t) = -3\,\text{m/s} + (0{,}8\,\text{m/s}^3)t^2, \qquad x(t) = (-3\,\text{m/s})t + (0{,}267\,\text{m/s}^3)t^3$$

Se si vuole, per esempio, l'istante $t^*$ in cui la velocità raggiunge $v^*=+8\ \text{m/s}$ (per esempio per tagliare la fune), basta imporre $v(t^*)=v^*$:

$$v^* = v_0 + \frac{c}{2m}t^{*2} \quad\Longrightarrow\quad t^* = \sqrt{\frac{2m}{c}\left(v^*-v_0\right)} = \sqrt{\frac{2\cdot 5}{8}\cdot 11}\ \text{s} \approx 3{,}71\ \text{s}$$

Controllo: le dimensioni di $c/m$ sono $\lbrack \text{N/s}\rbrack /\lbrack \text{kg}\rbrack  = \lbrack \text{m/s}^3\rbrack $, coerenti con il fatto che $\frac{c}{2m}t^2$ deve avere le dimensioni di una velocità; l'ordine di grandezza di $t^*$ (pochi secondi) è ragionevole per una variazione di velocità di $11\ \text{m/s}$ prodotta da una forza che cresce con pendenza $8\ \text{N/s}$ su una massa di $5\ \text{kg}$.

:::image{src="assets/3d6e6a1a-legge-velocita-forza-lineare.svg" alt="Parabola v(t) = -3 + 0,8 t^2 con punto evidenziato a t* dove v = 8 m/s" caption="Fig. 3.1 — Legge della velocità v(t) ricavata da una forza F(t) = c t: la curva è una parabola, e l'istante t* in cui v raggiunge il valore v* si legge come intersezione con la retta orizzontale v = v*."}
:::

Il procedimento a due passi illustrato sopra vale quando la forza dipende solo dal tempo, $f_x(t)$: in tal caso l'equazione $m\,d^2x/dt^2=f_x(t)$ si integra direttamente due volte, come negli esempi precedenti. Quando la forza dipende invece dalla posizione o dalla velocità, $f_x(x,v,t)$, la situazione è diversa: per esempio nel caso della forza elastica, trattata in [Forza elastica](ref:chapter/3#p6), l'equazione $-kx=m\,d^2x/dt^2$ conduce all'equazione differenziale del moto armonico già studiata in [Moto armonico](ref:chapter/2#p4) (vedi [formula (2.20)](ref:formula/2.20)), mentre nel moto con resistenza viscosa, trattato in [Forze di attrito](ref:chapter/3#p5), l'equazione del moto ha una struttura ancora diversa. In generale queste equazioni differenziali non si riducono a una semplice separazione delle variabili, e vanno risolte con la tecnica appropriata al caso specifico.

**Errore tipico 3.3.** Scrivere un passaggio intermedio in cui un membro dell'uguaglianza ha unità di misura e l'altro è un numero puro, per esempio omettendo di dividere per $m$ o di riportare le unità durante l'integrazione. Un'uguaglianza dimensionalmente inconsistente in un passaggio intermedio è priva di significato anche se il risultato finale appare numericamente plausibile; ogni riga di calcolo, non solo la prima e l'ultima, deve essere dimensionalmente corretta.

## p3 | Quantità di moto e impulso

La seconda legge di Newton, enunciata nella forma $\vec{F} = m\vec{a}$ nella sezione [Principi della dinamica](ref:chapter/3#p2), presuppone implicitamente che la massa del punto materiale resti costante durante il moto. Esistono però situazioni, come un urto fra due corpi o il moto di un sistema a massa variabile, in cui è più naturale ragionare in termini della grandezza che la seconda legge fa effettivamente variare: la quantità di moto. Questa sezione introduce la quantità di moto, l'impulso di una forza e il teorema che li collega, strumenti indispensabili per trattare le forze che agiscono in intervalli di tempo molto brevi ma con intensità elevata.

### Quantità di moto

**Definizione 3.3** (Quantità di moto). Si definisce quantità di moto di un punto materiale di massa $m$ che si muove con velocità $\vec{v}$ il vettore

$$\vec{p} = m\vec{v},$$

con dimensioni $\lbrack p\rbrack  = \lbrack M\rbrack \lbrack L\rbrack \lbrack T\rbrack ^{-1}$, cioè $\mathrm{kg\cdot m/s} = \mathrm{N\cdot s}$. La quantità di moto individua lo stato dinamico del punto: una sua variazione può derivare da un cambiamento del modulo della velocità, della sua direzione o verso, oppure, nei sistemi a massa variabile, da un cambiamento della massa stessa.

Se la massa $m$ è costante, derivando $\vec{p}$ rispetto al tempo si ritrova la seconda legge di Newton nella sua forma generale, già introdotta come {{formula:3.2}}

$$\frac{d\vec{p}}{dt} = m\frac{d\vec{v}}{dt} = m\vec{a} = \vec{F}_{TOT},$$

dove $\vec{F}_{TOT}$ è la risultante di tutte le forze applicate al punto materiale. Questa relazione, scritta con $\vec{p}$, è la forma più generale della seconda legge di Newton per un punto materiale di massa costante oppure, più in generale, per un sistema materiale chiuso, cioè costituito sempre dalle stesse particelle, la cui massa totale non cambia nel tempo. Se invece si considera un sistema aperto che scambia massa con l'esterno, come un razzo che espelle propellente o un sacco che perde materiale, la derivata $d\vec{p}/dt$ della quantità di moto del solo materiale rimasto non è in generale uguale alla sola risultante delle forze esterne: occorre includere anche il flusso di quantità di moto trasportato dalla massa che entra o che esce dal sistema, come mostrerà l'esempio del sacco forato più avanti in questa sezione.

### Impulso e teorema dell'impulso

Dalla relazione $\vec{F}dt = d\vec{p}$ si vede che l'azione di una forza durante un intervallo infinitesimo $dt$ produce una variazione infinitesima della quantità di moto. Si definisce quindi l'impulso elementare di una forza $\vec{F}(t)$ come

$$d\vec{J}(t) = \vec{F}(t)\,dt,$$

e, integrando su un intervallo finito $\lbrack t_0, t\rbrack $, l'impulso totale

:::formula{id="3.6" label="Impulso di una forza"}
$$\vec{J}(t_0, t) = \int_{t_0}^{t} \vec{F}(t)\,dt.$$
:::

Se la forza è costante nell'intervallo considerato, può essere portata fuori dal segno di integrale e si ottiene $\vec{J}(t_0,t) = \vec{F}(t-t_0)$.

L'impulso gode di due proprietà additive, utili nei calcoli. La prima è l'additività rispetto alle forze: se sul punto agiscono contemporaneamente più forze $\vec{F}_1(t), \vec{F}_2(t), \vec{F}_3(t), \dots$, l'impulso della loro risultante nello stesso intervallo è la somma dei singoli impulsi,

$$\vec{J}(t_0,t) = \int_{t_0}^{t}\vec{F}(t)\,dt = \vec{J}_1(t_0,t) + \vec{J}_2(t_0,t) + \vec{J}_3(t_0,t) \dots$$

La seconda è l'additività rispetto al tempo: l'impulso di una forza su due intervalli consecutivi $\lbrack t_0,t_1\rbrack $ e $\lbrack t_1,t_2\rbrack $ è uguale all'impulso calcolato sull'intero intervallo $\lbrack t_0,t_2\rbrack $,

$$\vec{J}(t_0,t_2) = \vec{J}(t_0,t_1) + \vec{J}(t_1,t_2).$$

Queste due proprietà seguono direttamente dalla linearità dell'integrale e permettono, ad esempio, di sommare separatamente gli effetti di forze diverse oppure di suddividere un intervallo di tempo complicato in sottointervalli più semplici.

:::image{src="assets/7b42e0ee-forza-impulsiva.svg" alt="Grafico di una forza impulsiva in funzione del tempo, a campana, con area sottesa pari all'impulso" caption="Fig. 3.2 — Una forza impulsiva F(t): intensa ma concentrata in un breve intervallo di tempo. L'area sotto la curva, tra t0 e t, è l'impulso J"}
:::

**Teorema 3.2** (dell'impulso). Quando su un punto materiale di massa $m$ agisce, in un intervallo di tempo finito $\lbrack t_0,t\rbrack $, una risultante di forze $\vec{F}(t)$, la variazione della quantità di moto del punto è uguale all'impulso totale della forza risultante. La dimostrazione usa la definizione di impulso e la seconda legge di Newton:

$$\vec{J}(t_0,t) = \int_{t_0}^{t}\vec{F}(t)\,dt = \int_{t_0}^{t} m\vec{a}\,dt = \int_{t_0}^{t} m\,\frac{d\vec{v}}{dt}\,dt = \int_{\vec{v}_0}^{\vec{v}} m\,d\vec{v} = m\vec{v} - m\vec{v}_0 = \vec{p} - \vec{p}_0 = \Delta\vec{p}.$$

:::formula{id="3.7" label="Teorema dell'impulso"}
$$\vec{J}(t_0,t) = \Delta\vec{p} = \vec{p} - \vec{p}_0.$$
:::

Se la massa è costante, il teorema si riscrive in termini della sola velocità,

$$\vec{J} = m(\vec{v} - \vec{v}_0) = m\Delta\vec{v}.$$

È importante distinguere il ruolo di questa relazione da quello della seconda legge di Newton nella forma $\vec{F} = d\vec{p}/dt$: quest'ultima vale istante per istante, mentre il teorema dell'impulso descrive l'effetto complessivo di una forza su un intervallo di tempo finito, senza richiedere la conoscenza dettagliata di $\vec{F}(t)$ in ogni istante, ma soltanto il suo integrale nel tempo.

Questo risultato è particolarmente utile per le **forze impulsive**: forze di intensità elevata ma che agiscono per un intervallo di tempo molto breve, trascurabile rispetto al tempo di osservazione del fenomeno, come accade tipicamente negli urti fra due corpi. In questi casi non è quasi mai possibile misurare $\vec{F}(t)$ istante per istante, ma si può comunque determinare l'impulso complessivo, e quindi la variazione di quantità di moto, conoscendo soltanto le velocità del corpo immediatamente prima e immediatamente dopo l'urto.

### Conservazione della quantità di moto

Se la risultante delle forze applicate a un punto materiale è nulla in tutto un intervallo di tempo, anche l'impulso di tale risultante è nullo in quell'intervallo. Dal teorema dell'impulso segue allora $\Delta\vec{p} = \vec{0}$, cioè la quantità di moto resta costante.

**Teorema 3.3** (Conservazione della quantità di moto del punto materiale). In assenza di forza risultante applicata, la quantità di moto di un punto materiale rimane costante nel tempo, ossia si conserva.

:::formula{id="3.8" label="Conservazione della quantità di moto"}
$$\vec{F}_{TOT} = \vec{0} \ \Longrightarrow\ \vec{p}(t) = \text{costante}.$$
:::

Questo enunciato riguarda un singolo punto materiale; per un sistema di due o più punti che interagiscono fra loro (per esempio durante un urto) la conservazione si applica alla quantità di moto totale del sistema, ed è una conseguenza della prima equazione cardinale della dinamica, trattata nella sezione [Prima equazione cardinale e quantità di moto](ref:chapter/7#p4). Le forze impulsive che si sviluppano durante l'urto sono forze interne al sistema: per il principio di azione e reazione ({{formula:3.3}}) il loro impulso totale sul sistema è nullo, e in assenza di forze esterne la quantità di moto totale si conserva attraverso l'urto. Se invece sono presenti forze esterne, la conservazione resta valida in buona approssimazione purché la durata dell'urto sia sufficientemente breve e le forze esterne non siano a loro volta impulsive, cosicché il loro impulso nell'intervallo dell'urto risulti trascurabile rispetto a quello delle forze interne.

È utile sottolineare fin da ora, in vista della sezione sugli [Urti](ref:chapter/7#p7), una differenza concettuale importante fra quantità di moto ed energia meccanica durante un urto: la quantità di moto totale del sistema è una funzione continua del tempo anche durante l'urto, perché le forze impulsive interne hanno impulso totale nullo per il principio di azione e reazione. L'energia cinetica totale, invece, in generale diminuisce tra l'istante immediatamente prima e l'istante immediatamente dopo un urto anelastico, perché una parte di essa viene dissipata nelle deformazioni, negli attriti interni e nella generazione di calore durante l'interazione: questa diminuzione avviene con continuità nel tempo reale, lungo il breve ma finito intervallo in cui agiscono le forze impulsive. Soltanto nel modello idealizzato dell'urto istantaneo, in cui tale intervallo viene fatto tendere a zero, la diminuzione di energia cinetica appare come un salto discontinuo che dipende dalle masse dei corpi coinvolti. Nell'urto elastico, invece, l'energia cinetica totale si conserva. La quantità di moto, pur conservandosi attraverso l'urto, non è costante nel tempo quando sono presenti forze esterne continue. L'energia meccanica, dal suo canto, resta costante negli intervalli di tempo che precedono e seguono l'urto a condizione che in quegli intervalli non compiano lavoro forze non conservative, per esempio attriti esterni al sistema: se invece tali forze agiscono anche fuori dall'intervallo dell'urto, l'energia meccanica varia pure in quelle fasi. Durante un urto anelastico diminuisce se una parte dell'energia meccanica viene dissipata dalle forze interne.

### Esempio svolto

Un corpo di massa $m = 1 \ \mathrm{kg}$, attaccato a una molla ideale di costante elastica $k = 100 \ \mathrm{N/m}$, viene lanciato con velocità iniziale $v_0 = 5 \ \mathrm{m/s}$ a partire dalla posizione di equilibrio della molla. Si vuole calcolare l'impulso della forza elastica dall'istante iniziale $t=0$ all'istante $t_{max}$ in cui l'elongazione è massima.

Dati: $m = 1 \ \mathrm{kg}$, $k = 100 \ \mathrm{N/m}$, $v_0 = 5 \ \mathrm{m/s}$.

Schema delle forze: trascurando l'attrito, l'unica forza orizzontale è la forza elastica $F_{el}(t) = -m v_0 \omega \sin(\omega t)$, con pulsazione $\omega = \sqrt{k/m}$, coerente con il moto armonico descritto nella sezione [Moto armonico](ref:chapter/2#p4).

Riferimento: asse $x$ lungo la direzione del moto, origine nella posizione di equilibrio.

Soluzione letterale (primo modo, integrazione diretta). L'elongazione massima si raggiunge quando $v(t_{max}) = 0$, cioè per $\omega t_{max} = \pi/2$. Allora

$$J = \int_0^{t_{max}} F_{el}(t)\,dt = -\int_0^{\pi/(2\omega)} m v_0 \omega \sin(\omega t)\,dt = m v_0 \cos(\omega t)\Big|_0^{\pi/(2\omega)} = m v_0 (0 - 1) = -m v_0.$$

Soluzione letterale (secondo modo, teorema dell'impulso). In alternativa, applicando {{formula:3.7}},

$$J = p(t_{max}) - p(0) = m v(t_{max}) - m v_0 = 0 - m v_0 = -m v_0,$$

perché all'istante di elongazione massima la velocità, e quindi la quantità di moto, è nulla.

Numeri: $J = -1 \ \mathrm{kg} \cdot 5 \ \mathrm{m/s} = -5 \ \mathrm{kg\cdot m/s}$.

Controllo: i due metodi, uno basato sull'integrazione diretta di $F_{el}(t)$ e l'altro sul teorema dell'impulso, danno lo stesso risultato, come deve essere per consistenza del teorema stesso; il segno negativo indica che l'impulso ha verso opposto a $v_0$, cioè la molla frena il corpo. Le unità, $\mathrm{kg\cdot m/s}$, sono coerenti con $\lbrack p\rbrack =\lbrack M\rbrack \lbrack L\rbrack \lbrack T\rbrack ^{-1}$.

Un secondo esempio, di tipo diverso, mostra come vada trattato con cautela un sistema a massa variabile. Un sacco appeso, forato, perde materiale durante la caduta secondo la legge $m(t) = m_0 - ct$, mentre viaggia con velocità orizzontale iniziale $v_0$; sul sacco e sulla sabbia che fuoriesce dal foro non agisce alcuna forza orizzontale.

Per trattare correttamente questo sistema a massa variabile non basta scrivere che la quantità di moto del solo sacco rimasto si conservi: bisogna considerare il sistema chiuso costituito dal sacco più tutta la sabbia già fuoriuscita, e tener conto del flusso di quantità di moto portato via dalla sabbia che esce dal foro,

$$m(t)\frac{dv}{dt} = F_{ext} + u_{rel}\frac{dm}{dt},$$

dove $u_{rel}$ è la velocità orizzontale della sabbia che fuoriesce, relativa al sacco, nell'istante in cui lo abbandona. Poiché il foro lascia semplicemente colare la sabbia, senza impartirle alcuna spinta orizzontale aggiuntiva, si ha $u_{rel}=0$; inoltre $F_{ext}=0$ per ipotesi. Ne segue $dv/dt = 0$, cioè

$$v(t) = v_0 \quad \text{per ogni } t.$$

La velocità orizzontale del sacco non cambia nel tempo: ogni granello di sabbia, sia quello ancora contenuto nel sacco sia quello già fuoriuscito, conserva la velocità orizzontale $v_0$ che aveva al lancio, perché su nessuno di essi agisce mai una forza orizzontale. La quantità di moto del sacco residuo, $m(t)v_0 = (m_0-ct)v_0$, diminuisce nel tempo non perché il sacco acceleri, ma perché la sua massa diminuisce: la quantità di moto mancante è esattamente quella portata via dalla sabbia già fuoriuscita, che continua a muoversi con la stessa velocità $v_0$. La relazione $m(t)v(t)=m_0v_0$, talvolta proposta per questo problema, è errata perché identifica $m_0v_0$ con la quantità di moto del solo sacco residuo, mentre $m_0v_0$ è la quantità di moto dell'intero sistema chiuso, sacco più sabbia fuoriuscita, che resta costante proprio perché nessuna delle due parti accelera.

**Errore tipico 3.4**. Un errore frequente consiste nell'applicare $\vec{F} = m\vec{a}$ a sistemi a massa variabile trattando $m$ come costante all'interno della derivata, oppure nel dimenticare che il teorema dell'impulso fornisce la variazione complessiva di $\vec{p}$ su un intervallo e non il valore della forza in un istante particolare. È altrettanto sbagliato confondere la conservazione della quantità di moto con la conservazione dell'energia meccanica durante un urto: la prima vale (per il sistema isolato) anche quando l'urto è anelastico, mentre la seconda in generale non vale. Infine, come per ogni relazione vettoriale, va evitato di scrivere uguaglianze fra una grandezza vettoriale e una scalare, per esempio confondendo il modulo dell'impulso con una delle sue componenti senza dichiarare gli assi; un controllo dimensionale e vettoriale dei passaggi intermedi permette di individuare questi errori prima di arrivare al risultato numerico.

## p4 | Reazioni vincolari ed equilibrio

### Condizione di equilibrio statico del punto materiale

Un punto materiale è in **equilibrio statico** se, soggetto a un insieme di forze $\vec{F}_i$, resta fermo nel tempo: velocità nulla e accelerazione nulla in ogni istante. Per la seconda legge della dinamica (richiamata nella sezione [Principi della dinamica](ref:chapter/3#p2)), questo accade se e solo se la risultante di tutte le forze applicate è nulla.

**Definizione 3.4** (equilibrio statico del punto). Un punto materiale soggetto alla risultante $\vec{R} = \sum_i \vec{F}_i$ è in equilibrio statico se $\vec{R} = \vec{0}$ e la sua velocità iniziale è nulla; in tal caso resta in quiete per ogni $t$.

Poiché un vettore è nullo se e solo se lo sono tutte le sue componenti, la condizione vettoriale equivale a un sistema di equazioni scalari, una per ciascun asse scelto.

:::formula{id="3.9" label="Condizione di equilibrio statico del punto"}
$$\vec{R} = \sum_i \vec{F}_i = \vec{0} \quad \Longleftrightarrow \quad \sum_i F_{i,x} = \sum_i F_{i,y} = \sum_i F_{i,z} = 0$$
:::

Viceversa, se un punto materiale soggetto a una risultante non nulla di forze resta comunque fermo, significa che l'ambiente circostante esercita sul corpo una forza aggiuntiva, uguale e contraria alla risultante delle altre forze, tale da ripristinare $\vec{R} = \vec{0}$: questa forza è detta **reazione vincolare**. Per trovarla basta quindi imporre la condizione di equilibrio e risolverla rispetto all'incognita vincolare, senza mai assegnarle a priori un'espressione analitica fissa.

### Reazione normale e tensione del filo ideale

La reazione vincolare assume forme diverse a seconda del tipo di vincolo.

**Definizione 3.5** (reazione normale $N$). Quando un punto materiale appoggia su una superficie, il vincolo esercita una forza $\vec{N}$ sempre perpendicolare alla superficie di appoggio, diretta dalla superficie verso il corpo; il suo modulo è una grandezza positiva, non data da una formula universale, ma da determinarsi caso per caso imponendo le condizioni di equilibrio (o, nel moto, l'equazione del moto) nella direzione normale al vincolo; $N$ si annulla se il contatto viene a mancare.

Un vincolo diverso è il filo (o fune) ideale, che si incontra tipicamente quando un corpo è sospeso o collegato ad altri da una corda.

**Definizione 3.6** (tensione di un filo ideale). Un filo si dice ideale se è inestensibile (lunghezza costante) e di massa trascurabile. La forza che il filo esercita alle sue estremità è detta tensione $\vec{T}$; essa è diretta lungo il filo stesso e, se il filo collega due punti materiali, è uguale in modulo alle due estremità e di verso opposto.

:::formula{id="3.10" label="Tensione di un filo ideale che collega due masse"}
$$T_1 = T_2 \qquad \vec{T}_1 = -\vec{T}_2$$
:::

Un filo reale, a differenza di quello ideale, ha una tensione massima $T_{max}$ oltre la quale si spezza: nei problemi di base si assume sempre il filo ideale, salvo indicazione contraria.

Un caso immediato di applicazione è il pendolo semplice nella sua posizione di equilibrio verticale: il punto materiale di massa $m$ è appeso tramite un filo inestensibile e di massa trascurabile, e nella configurazione di quiete la tensione bilancia esattamente il peso.

:::formula{id="3.11" label="Tensione del filo nella posizione di equilibrio verticale"}
$$T_f = mg$$
:::

Questo risultato è un caso particolare della condizione di equilibrio del punto, e sarà generalizzato per angoli qualunque nella sezione sulla [dinamica del moto curvilineo](ref:chapter/3#p7).

### Equilibrio sul piano inclinato

Il problema più ricorrente in cui reazione normale e (talvolta) attrito o tensione compaiono insieme è quello del punto materiale su un piano inclinato di un angolo $\theta$ rispetto all'orizzontale. Conviene sempre scegliere gli assi $\hat{u}_\parallel$ (longitudinale, lungo il piano) e $\hat{u}_\perp$ (ortogonale, uscente dal piano), anziché gli assi orizzontale-verticale, perché in questo riferimento la reazione normale ha una sola componente non nulla.

La forza peso $\vec{P} = m\vec{g}$ va scomposta come somma vettoriale delle sue componenti lungo questi due assi:

$$\vec{P} = \vec{P}_\parallel + \vec{P}_\perp, \qquad \vec{P}_\parallel = P_\parallel\, \hat{u}_\parallel, \quad \vec{P}_\perp = P_\perp\, \hat{u}_\perp$$

con $P_\parallel = -mg\sin\theta$ e $P_\perp = -mg\cos\theta$ (il segno meno indica che entrambe le componenti puntano verso il basso, cioè nei versi negativi scelti).

Se il corpo è appoggiato sul piano e resta fermo (nessun moto, solo contatto con eventuale attrito statico), l'equazione di equilibrio nella direzione ortogonale al piano dà immediatamente la reazione normale, perché il corpo non penetra né si stacca dal piano:

:::formula{id="3.12" label="Reazione normale sul piano inclinato"}
$$N = -P_\perp = mg\cos\theta$$
:::

questo risultato vale sia in condizioni statiche sia nel caso in cui il corpo scivoli lungo il piano, poiché in entrambi i casi l'accelerazione nella direzione ortogonale è nulla.

Nella direzione longitudinale, se è presente attrito statico $f_s$, l'equilibrio richiede che esso bilanci esattamente la componente longitudinale del peso, purché il suo modulo non superi il valore massimo consentito dalla condizione di aderenza (approfondita nella sezione sulle [forze di attrito](ref:chapter/3#p5)):

:::formula{id="3.13" label="Condizione di equilibrio su piano inclinato scabro"}
$$|P_\parallel| = |f_s| \le |f_s^{\max}| = \mu_s\, mg\cos\theta$$
:::

Da qui segue che il corpo resta in quiete per ogni angolo $\theta$ compreso tra $0$ e un angolo limite $\theta_s$, detto angolo di aderenza, tale che $\tan\theta_s = \mu_s$; oltre questo angolo il corpo non può più restare fermo.

**Esempio 3.3.** Un blocco di massa $m = 2,0$ kg è appoggiato su un piano inclinato di $\theta = 30^\circ$ rispetto all'orizzontale, con coefficiente di attrito statico $\mu_s = 0,40$. Si vuole stabilire se il blocco resta in equilibrio e, in caso affermativo, calcolare la reazione normale e la forza di attrito statico necessarie.

Schema delle forze: peso $\vec{P} = m\vec{g}$, reazione normale $\vec{N}$, attrito statico $\vec{f}_s$, tutte applicate al punto materiale; si sceglie il riferimento $(\hat{u}_\parallel, \hat{u}_\perp)$ con $\hat{u}_\parallel$ diretto verso l'alto lungo il piano.

Equazioni di equilibrio: $N + P_\perp = 0$ e $f_s + P_\parallel = 0$, cioè $N = mg\cos\theta$ e $f_s = mg\sin\theta$ (in modulo, con $f_s$ diretto verso l'alto lungo il piano per opporsi alla tendenza a scivolare).

Soluzione letterale: il blocco resta in equilibrio se e solo se $mg\sin\theta \le \mu_s\, mg\cos\theta$, cioè $\tan\theta \le \mu_s$.

Sostituendo i numeri: $\tan 30^\circ = 0{,}577$, mentre $\mu_s = 0{,}40$; poiché $0{,}577 > 0{,}40$, la condizione non è soddisfatta e il blocco **non** è in equilibrio, ma inizia a scivolare verso il basso. Se invece l'angolo fosse stato $\theta = 20^\circ$ ($\tan 20^\circ = 0{,}364 < \mu_s$), l'equilibrio sarebbe stato possibile, con $N = mg\cos 20^\circ = 2{,}0\ \text{kg} \cdot 9{,}81\ \text{m/s}^2 \cdot 0{,}940 = 18{,}4\ \text{N}$ e $f_s = mg\sin 20^\circ = 6{,}71\ \text{N}$, valore inferiore al massimo consentito $f_s^{\max} = \mu_s N = 7{,}4\ \text{N}$.

Controllo: entrambe le forze hanno le dimensioni corrette di un newton, e gli ordini di grandezza sono coerenti con un peso di circa $19{,}6$ N; il rapporto $f_s/N = \tan\theta$ è adimensionale, come deve essere.

**Errore tipico 3.5.** Un errore molto diffuso è scomporre il peso scrivendo direttamente due vettori $m\vec{g}\sin\theta$ e $m\vec{g}\cos\theta$ come se fossero diretti rispettivamente lungo il piano e perpendicolarmente ad esso. Questa scrittura è priva di senso: il vettore $m\vec{g}\sin\theta$ ha la stessa direzione di $\vec{g}$, cioè punta sempre verticalmente verso il basso, qualunque sia $\theta$, e lo stesso vale per $m\vec{g}\cos\theta$. La scomposizione corretta richiede di introdurre esplicitamente i versori $\hat{u}_\parallel$ e $\hat{u}_\perp$ e scrivere $\vec{P} = P_\parallel \hat{u}_\parallel + P_\perp \hat{u}_\perp$, con $P_\parallel$ e $P_\perp$ scalari (con segno) che moltiplicano i versori corretti.

Un secondo errore tipico consiste nel considerare la forza di attrito statico sempre pari al suo valore massimo $\mu_s N$: in realtà $f_s$ è un'incognita del problema, al pari della reazione vincolare e della tensione, e il suo valore è determinato dalla condizione di equilibrio; la relazione $|f_s| \le \mu_s N$ fornisce solo un limite superiore, non il valore effettivo, a meno che il corpo non sia proprio sul punto di scivolare.

Infine, va sempre evitato di scrivere uguaglianze intermedie fra un numero puro e una grandezza dimensionata: ogni passaggio deve riportare le unità di misura corrette, altrimenti il risultato, anche se numericamente corretto, è una scrittura priva di significato fisico.

## p5 | Forze di attrito

Le forze di attrito radente nascono dalle forze di coesione microscopica tra due superfici a contatto; il loro coefficiente dipende dallo stato delle superfici e dalla composizione chimica dei materiali in gioco, non dall'estensione della superficie di contatto. Una proprietà fondamentale, valida per tutte le forze di attrito radente, è che il contatto tra le superfici è sempre in grado di esercitare una forza di attrito radente quando serve una forza tangenziale per impedire uno scorrimento relativo (o la tendenza a esso), anche se possono essere ridotte lubrificando o levigando le superfici; il valore effettivo dell'attrito statico può però essere nullo, quando non è richiesta alcuna forza tangenziale per mantenere la quiete relativa. In ogni caso le forze di attrito radente non possono mai generare uno scorrimento relativo tra le superfici a contatto: possono solo opporsi a uno scorrimento relativo esistente, o a una tendenza allo scorrimento relativo, tra le due superfici in contatto. Il corpo nel suo insieme può comunque accelerare rispetto al suolo, come accade a un'automobile che parte grazie all'aderenza degli pneumatici: in quel caso è proprio l'attrito statico, opponendosi allo scivolamento della gomma sull'asfalto, a rendere possibile l'avanzamento del veicolo.

Questa proprietà impone una scelta preliminare in ogni problema con attrito, bisogna cioè stabilire se le due superfici sono in quiete relativa (regime di aderenza, attrito statico) oppure sono in moto relativo (attrito dinamico). I due regimi sono descritti da modelli diversi, e usare il modello sbagliato è l'errore più frequente in questo argomento.

### Attrito statico

**Definizione 3.7** (forza di attrito statico). Quando un corpo appoggiato su una superficie è in quiete rispetto a essa, la superficie esercita su di esso, oltre alla reazione normale $\vec{N}$, una forza di attrito statico $\vec{f}_s$ parallela al piano di contatto. Tale forza non ha un valore prefissato a priori mediante una formula: il suo valore si determina dalle equazioni del moto del corpo, oppure dalle equazioni di equilibrio quando il corpo è fermo, imponendo in ogni caso il vincolo $|\vec{f}_s| \le \mu_s N$, dove $\mu_s N$ rappresenta un valore massimo e non il valore effettivo della forza

$$
F_{s,\mathrm{MAX}} = \mu_s N,
$$

dove $\mu_s$ è il coefficiente di attrito statico, adimensionale, dipendente dalla coppia di materiali a contatto ma non dalla superficie di contatto.

:::formula{id="3.14" label="Valore massimo della forza di attrito statico"}
$$F_{s,\mathrm{MAX}} = \mu_s N$$
:::

La condizione che garantisce la quiete (condizione di aderenza) è quindi una disuguaglianza, non un'uguaglianza:
$$
|\vec{f}_s| \le \mu_s N.
$$

:::formula{id="3.15" label="Condizione di aderenza"}
$$|\vec{f}_s| \le \mu_s N$$
:::

Il corpo resta in quiete per ogni valore della forza applicata parallela al piano tale che la componente da equilibrare non superi $\mu_s N$; se questa componente supera la soglia, il corpo si mette in moto e il modello di attrito statico non è più valido.

**Errore tipico 3.6.** Lo sbaglio più comune è scrivere sempre $f_s = \mu_s N$, come se l'attrito statico assumesse automaticamente il valore massimo. Questo è falso: $\mu_s N$ è soltanto il tetto che $|\vec{f}_s|$ non può superare, mentre il valore effettivo di $f_s$ dipende dalle altre forze in gioco (ad esempio dalla tensione di un filo collegato al corpo) ed è in generale minore del massimo. Va determinato imponendo l'equilibrio del corpo, non sostituendo $\mu_s N$ direttamente nelle equazioni.

**Esempio 3.4** (angolo limite di distacco su un piano inclinato scabro). Un blocco di massa $m$ è appoggiato sulla sommità di un piano inclinato di angolo $\theta$, con coefficiente di attrito statico $\mu_s$. Si vuole determinare l'angolo massimo $\theta_s$ al di sotto del quale il blocco, lasciato da fermo, non scivola; equivalentemente, a parità di inclinazione $\theta$, si cerca il valore minimo di $\mu_s$ necessario perché il blocco resti in quiete.

Schema delle forze: peso $m\vec{g}$, scomposto in componente parallela al piano $mg\sin\theta$ (verso il basso lungo il piano) e componente normale $mg\cos\theta$; reazione normale $\vec{N}$; attrito statico $\vec{f}_s$ diretto verso l'alto lungo il piano, come mostrato nella sezione sulle [reazioni vincolari ed equilibrio](ref:chapter/3#p4). Dall'equilibrio lungo la normale si ha $N = mg\cos\theta$ ({{formula:3.12}}).

Il blocco inizia a scivolare quando la componente del peso lungo il piano supera il valore massimo che l'attrito statico può fornire:

$$
mg\sin\theta > \mu_s\, mg\cos\theta \iff \tan\theta > \mu_s.
$$

Il corpo resta quindi fermo per $\theta \le \theta_s$, con $\tan\theta_s = \mu_s$, e inizia a scivolare per $\theta > \theta_s$. Numericamente, per $\theta = \pi/10$ (18°) si ottiene $\tan\theta = 0{,}32$: se il coefficiente di attrito statico del blocco è $\mu_s < 0{,}32$ il blocco scivola, mentre se $\mu_s \ge 0{,}32$ resta fermo. Il controllo dimensionale è immediato, poiché $\mu_s$ e $\tan\theta$ sono entrambi adimensionali.

### Attrito dinamico

**Definizione 3.8** (forza di attrito dinamico). Quando le due superfici sono in moto relativo, la superficie esercita sul corpo una forza di attrito dinamico $\vec{f}_d$, parallela al piano di contatto, diretta in verso opposto alla velocità relativa $\vec{v}_{\mathrm{rel}}$ tra il punto di contatto del corpo e la superficie su cui esso scorre (e non necessariamente alla velocità del corpo in un riferimento assoluto, che coincide con $\vec{v}_{\mathrm{rel}}$ solo quando la superficie di appoggio è essa stessa in quiete), di modulo costante (non dipendente dalla velocità) e pari a

$$
\vec{f}_d = -\mu_d N\, \frac{\vec{v}_{\mathrm{rel}}}{|\vec{v}_{\mathrm{rel}}|},
$$

dove $\mu_d$ è il coefficiente di attrito dinamico. Nel modello qui adottato si assume tipicamente $\mu_d < \mu_s$, anche se questa disuguaglianza non è universale per ogni coppia di superfici e ogni condizione di moto.

:::formula{id="3.16" label="Forza di attrito dinamico"}
$$\vec{f}_d = -\mu_d N\, \frac{\vec{v}_{\mathrm{rel}}}{|\vec{v}_{\mathrm{rel}}|}, \qquad |\vec{f}_d| = \mu_d N$$
:::

A differenza dell'attrito statico, l'attrito dinamico è un valore noto a priori (una volta note $\mu_d$ e $N$), non un'incognita da determinare dall'equilibrio: se il punto materiale scivola, basta inserire $\mu_d N$ nella seconda legge di Newton.

Un caso che richiede particolare attenzione è quello di un corpo rigido che rotola senza strisciare: il punto di contatto istantaneo è fermo rispetto al piano, quindi la forza di attrito che agisce su di esso è di tipo statico, non dinamico, ed è un'incognita del problema vincolata solo da $F_{\mathrm{att}} \le \mu_s N$; essa va determinata insieme al moto del centro di massa e alla condizione di puro rotolamento, come si vedrà nel capitolo sul [corpo rigido](ref:chapter/8#p2).

**Errore tipico 3.7.** Scrivere $F_{\mathrm{att}} = \mu_d N$ oppure $F_{\mathrm{att}} = \mu_s N$ per un corpo che rotola senza strisciare è sempre sbagliato: la prima forma confonde statico con dinamico (il punto di contatto non scivola), la seconda confonde il valore massimo possibile con il valore effettivo dell'attrito statico.

**Esempio 3.5** (sistema di due corpi collegati con attrito dinamico). Una massa $m_1 = 2{,}0$ kg pende verticalmente, collegata tramite un filo ideale e una carrucola ideale a una massa $m_2 = 5{,}0$ kg che scivola su un piano orizzontale scabro con $\mu_d = 0{,}30$. Il sistema è già in moto, con $m_1$ che scende e $m_2$ che viene trainata verso la carrucola; si determinino l'accelerazione del sistema e la tensione del filo.

Diagramma di corpo libero: su $m_1$ agiscono il peso $m_1 g$ (verso il basso) e la tensione $T$ (verso l'alto); su $m_2$ agiscono la tensione $T$ (verso il moto), la reazione normale $N_2 = m_2 g$ e l'attrito dinamico $f_d = \mu_d N_2$ (opposto al moto). Scegliendo come verso positivo quello del moto effettivo (discesa di $m_1$, scorrimento di $m_2$), le equazioni della dinamica sono

$$
\begin{aligned}
m_1 g - T &= m_1 a, \\
T - \mu_d m_2 g &= m_2 a.
\end{aligned}
$$

Sommando le due equazioni si elimina $T$:

$$
a = \frac{g\,(m_1 - \mu_d m_2)}{m_1 + m_2}.
$$

Numericamente,

$$
a = \frac{9{,}81\ \mathrm{m/s^2} \cdot (2{,}0\ \mathrm{kg} - 0{,}30 \cdot 5{,}0\ \mathrm{kg})}{2{,}0\ \mathrm{kg} + 5{,}0\ \mathrm{kg}} = \frac{9{,}81 \cdot 0{,}50}{7{,}0}\ \mathrm{m/s^2} \approx 0{,}70\ \mathrm{m/s^2}.
$$

Dalla prima equazione, $T = m_1(g-a) = 2{,}0\ \mathrm{kg} \cdot (9{,}81 - 0{,}70)\ \mathrm{m/s^2} \approx 18{,}2\ \mathrm{N}$. Controllo: sostituendo nella seconda equazione, $18{,}2\ \mathrm{N} - 0{,}30 \cdot 5{,}0\ \mathrm{kg} \cdot 9{,}81\ \mathrm{m/s^2} \approx 3{,}5\ \mathrm{N}$, che deve uguagliare $m_2 a = 5{,}0\ \mathrm{kg}\cdot 0{,}70\ \mathrm{m/s^2} \approx 3{,}5\ \mathrm{N}$: coerente. L'ordine di grandezza di $a$ (inferiore a $g$, come deve essere in presenza di attrito che si opponga al moto) e le unità (m/s² per $a$, N per $T$) sono corretti.

Il passaggio dall'aderenza allo scorrimento può essere riassunto osservando l'andamento dell'attrito in funzione della forza applicata: finché il corpo è in quiete, l'attrito statico cresce di pari passo con la forza applicata, in modo da equilibrarla esattamente, fino a raggiungere il suo valore massimo $\mu_s N$. Superata questa soglia il corpo comincia a scivolare e l'attrito cambia natura, assestandosi al valore costante dell'attrito dinamico $\mu_d N$, inferiore al massimo valore statico poiché $\mu_d < \mu_s$.

### Attrito viscoso

**Definizione 3.9** (forza di attrito viscoso). Quando un corpo si muove all'interno di un fluido, oltre alle eventuali forze di attrito radente compare una forza di attrito viscoso $\vec{F}_v$, parallela alla velocità del corpo ma di verso opposto, con intensità proporzionale al modulo della velocità:

$$
\vec{F}_v = -\beta \vec{v} = -\kappa \eta\, \vec{v},
$$

dove $\eta$ è il coefficiente di viscosità del fluido e $\kappa$ un fattore che dipende dalla forma del corpo, legato al coefficiente complessivo dalla relazione $\beta = \kappa\eta$. Nel seguito si userà sempre $\beta$ come unico coefficiente di attrito viscoso nelle equazioni del moto, definendo separatamente la costante di tempo $\lambda = \beta/m$ per descrivere il decadimento esponenziale della velocità.

:::formula{id="3.17" label="Forza di attrito viscoso"}
$$\vec{F}_v = -\beta \vec{v}$$
:::

A differenza dell'attrito radente, l'attrito viscoso non ammette una condizione di equilibrio statico analoga a $|f_s|\le \mu_s N$: se $v=0$ la forza viscosa si annulla identicamente, quindi non può bilanciare altre forze applicate a un corpo in quiete. Per questo motivo un corpo soggetto soltanto al peso e all'attrito viscoso (ad esempio in caduta in un fluido) non resta mai fermo, ma la sua velocità cresce finché la forza viscosa, crescendo con $v$, non arriva a equilibrare la forza motrice: il moto tende così, al limite, a un moto uniforme a velocità costante (velocità limite), e non più a un moto uniformemente accelerato come accadrebbe in assenza di attrito.

Nel caso in cui non vi sia alcuna forza motrice (ad esempio un punto materiale che si muove orizzontalmente ed entra in una regione viscosa), l'equazione del moto lungo la direzione del moto è

$$
m\frac{dv}{dt} = -\beta\,v \quad \Longrightarrow \quad a = -\lambda\,v, \qquad \lambda \equiv \frac{\beta}{m},
$$

che è la stessa equazione a variabili separabili del moto smorzato esponenzialmente già incontrata nel moto rettilineo (si veda [Moto rettilineo](ref:chapter/2#p2)). La sua soluzione, con condizione iniziale $v(0) = v_0$, è

$$
v(t) = v_0\, e^{-\lambda t}.
$$

:::formula{id="3.18" label="Legge della velocità nel moto con attrito viscoso"}
$$v(t) = v_0\, e^{-\lambda t}$$
:::

La costante $\tau = 1/\lambda$ è il tempo di smorzamento: dopo un tempo $\tau$ la velocità si è ridotta a $v_0/e$.

:::formula{id="3.19" label="Tempo di smorzamento viscoso"}
$$\tau = \frac{1}{\lambda}$$
:::

Integrando ulteriormente $v(t)$ si ottiene la legge oraria della posizione, con $x(0) = 0$:

$$
x(t) = \int_0^t v_0 e^{-\lambda t'}\, dt' = \frac{v_0}{\lambda}\left(1 - e^{-\lambda t}\right).
$$

:::formula{id="3.20" label="Legge oraria della posizione nel moto con attrito viscoso"}
$$x(t) = \frac{v_0}{\lambda}\left(1 - e^{-\lambda t}\right)$$
:::

Si noti che per $t \to \infty$ la posizione tende asintoticamente al valore finito $x(\infty) = v_0/\lambda$, mentre la velocità tende a zero: il corpo percorre una distanza finita senza mai arrestarsi in un tempo finito.

Quando sul corpo agisce anche una forza esterna costante (ad esempio il peso, nel moto in un fluido viscoso lungo gli assi $x$ e $z$), le componenti dell'equazione della dinamica si scrivono

$$
m a_x = F_x = -\beta v_x, \qquad m a_z = F_z = -mg - \beta v_z,
$$

e la legge oraria completa $(x(t), z(t))$ si ottiene risolvendo questo sistema componente per componente, con le condizioni iniziali del problema.

**Esempio 3.6** (velocità limite in assenza di forza motrice). Una particella si muove lungo l'asse $x$ con velocità costante $v_0 = 2{,}0$ m/s quando entra in una regione occupata da un liquido viscoso, dove il moto viene smorzato con costante $\lambda = 3{,}0\ \mathrm{s^{-1}}$. Si scelgano origine delle posizioni e dei tempi nel punto e nell'istante di ingresso nella regione viscosa: $x(0) = 0$, $v(0) = v_0$.

La legge della velocità è $v(t) = v_0 e^{-\lambda t}$ ({{formula:3.18}}) e il tempo di smorzamento vale $\tau = 1/\lambda = 1/(3{,}0\ \mathrm{s^{-1}}) \approx 0{,}33$ s. La legge oraria della posizione è $x(t) = (v_0/\lambda)(1-e^{-\lambda t})$ ({{formula:3.20}}). Dopo $t = 1{,}0$ s dall'ingresso,

$$
x(1{,}0\ \mathrm{s}) = \frac{2{,}0\ \mathrm{m/s}}{3{,}0\ \mathrm{s^{-1}}}\left(1 - e^{-3{,}0}\right) \approx 0{,}667\ \mathrm{m} \times 0{,}950 \approx 0{,}63\ \mathrm{m}.
$$

Controllo: le unità (m/s)/(s⁻¹) = m sono corrette, e il risultato, inferiore alla distanza $v_0 \tau \approx 0{,}67$ m che la particella percorrerebbe se mantenesse per sempre la velocità iniziale per un tempo $\tau$, è plausibile poiché il moto è frenato.

:::image{src="assets/ed85a843-velocita-decadimento-viscoso.svg" alt="Grafico della velocità v(t) = v0 exp(-gamma t) che decade esponenzialmente verso zero" caption="Fig. 3.3 — Decadimento esponenziale della velocità per una particella che entra in una regione viscosa, con v0 = 2 m/s e gamma = 3 s^-1."}
:::

**Errore tipico 3.8.** Applicare al moto viscoso le formule del moto uniformemente accelerato (ad esempio $v = v_0 - a t$) è sbagliato, perché l'accelerazione $a = -\lambda v$ non è costante ma dipende dalla velocità istantanea: l'equazione del moto va risolta per separazione di variabili, come mostrato sopra, e non con le leggi del moto rettilineo uniformemente accelerato richiamate in [Moto rettilineo](ref:chapter/2#p2).

## p6 | Forza elastica

### La legge di Hooke

**Definizione 3.10** (forza elastica). Si definisce forza elastica una forza di direzione costante, con verso sempre rivolto verso un punto fisso $O$, detto centro, e con modulo proporzionale alla distanza da $O$. Se si assume come asse $x$ la direzione della forza e come origine il centro $O$, la forza elastica si scrive

:::formula{id="3.21" label="Legge di Hooke"}
$$\vec{F} = -k\,x\,\hat{u}_x$$
:::

dove $k > 0$ è la costante elastica e $\hat{u}_x$ è il versore dell'asse $x$. Il segno negativo esprime il fatto che la forza è sempre diretta verso il centro (verso le $x$ decrescenti se $x>0$, verso le $x$ crescenti se $x<0$): per questo si parla di forza di richiamo.

Il caso pratico più importante è quello di una molla ideale, di massa trascurabile e lunghezza a riposo $l_0$ finita. Se la molla è vincolata a un estremo e all'altro estremo è applicato un punto materiale di posizione $l$, la forza esercitata dalla molla sul punto vale

$$\vec{F}_{el} = -k(l - l_0)\,\hat{u}_x,$$

dove $x = l - l_0$ è l'allungamento (se $x>0$ la molla è allungata, se $x<0$ è compressa) e $k$ ha dimensioni $\lbrack k\rbrack  = \lbrack F\rbrack \lbrack L\rbrack ^{-1} = \mathrm{N\,m^{-1}}$. Se la molla viene estesa la forza richiama il punto verso la posizione di riposo; se viene compressa la forza ha la stessa espressione ma verso opposto, cioè spinge nuovamente verso $l_0$. Il modulo della forza di richiamo è proporzionale alla deformazione solo fino a che non si supera il limite di elasticità della molla, oltre il quale la legge di Hooke non è più valida.

Dal lavoro della forza elastica si ricava l'energia potenziale elastica associata. Per uno spostamento da $A$ a $B$ lungo l'asse $x$,

$$W_{A\to B} = \int_A^B (-k x)\,dx = -\frac{1}{2}k x_B^2 + \frac{1}{2}k x_A^2 = -\Delta E_p,$$

da cui

:::formula{id="3.22" label="Energia potenziale elastica"}
$$E_p(x) = \frac{1}{2}k x^2$$
:::

coerentemente con il fatto che la forza elastica è una forza conservativa. Questa espressione sarà ripresa e dimostrata in modo sistematico nella sezione su [forze conservative ed energia potenziale](ref:chapter/4#p4).

### Moto armonico di una massa su una molla

Si consideri un punto materiale di massa $m$ attaccato all'estremo libero di una molla ideale di costante elastica $k$, con l'altro estremo fissato, vincolato a muoversi lungo l'asse della molla. Applicando la seconda legge della dinamica (vedi [principi della dinamica](ref:chapter/3#p2), {{formula:3.1}}) con $x = l - l_0$ spostamento dalla posizione di riposo,

$$-kx = ma = m\frac{d^2x}{dt^2} \quad \Longrightarrow \quad \frac{d^2x}{dt^2} = -\frac{k}{m}x \,$$

Ponendo

$$\omega = \sqrt{\frac{k}{m}},$$

l'equazione diventa $\ddot{x} + \omega^2 x = 0$, che è esattamente l'equazione differenziale del moto armonico [formula (2.20)](ref:formula/2.20) già studiata nella sezione sul [moto armonico](ref:chapter/2#p4). La soluzione generale è dunque la legge oraria [formula (2.14)](ref:formula/2.14), $x(t) = A\sin(\omega t + \varphi)$, equivalente alla forma [formula (2.21)](ref:formula/2.21), $x(t) = C\cos(\omega t) + D\sin(\omega t)$. Il periodo e la pulsazione sono determinati esclusivamente dal rapporto tra la costante elastica e la massa:

$$\omega = \sqrt{\frac{k}{m}}, \qquad T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}} \,$$

Le costanti $A,\varphi$ (o $C,D$) si fissano come sempre dalle condizioni iniziali $x_0 = x(0)$, $v_0 = \dot{x}(0)$, secondo [formula (2.22)](ref:formula/2.22).

:::image{src="assets/b01ae562-molla-moto-armonico.svg" alt="Grafico sinusoidale di x(t)/A in funzione di t, un periodo completo" caption="Fig. 3.4 — Andamento nel tempo dell'elongazione di una massa attaccata a una molla, a partire da x(0)=0 con velocità iniziale massima"}
:::

È utile ricordare la relazione di fase tra posizione, velocità e accelerazione nel moto armonico, già vista in generale: nel punto di massimo allungamento (o massima compressione) la velocità è nulla e l'accelerazione, quindi anche la forza elastica, è massima in modulo, perché $|F_{el}|=k|x|$ è massima quando $|x|$ è massima. Viceversa, nel punto di equilibrio ($x=0$) l'accelerazione e la forza elastica sono nulle, mentre la velocità è massima in modulo.

**Esempio 3.7** (massa-molla lanciata dalla posizione di equilibrio). Un corpo di massa $m = 1\ \mathrm{kg}$ è attaccato all'estremo di una molla di costante elastica $k = 100\ \mathrm{N/m}$; all'istante $t=0$ si trova nella posizione di equilibrio della molla con velocità iniziale $v_0 = 5\ \mathrm{m/s}$. Si vuole determinare la legge oraria e l'elongazione massima.

Dati: $m=1\ \mathrm{kg}$, $k=100\ \mathrm{N/m}$, $v_0 = 5\ \mathrm{m/s}$, $x_0 = 0$.

Schema delle forze: sul corpo agisce solo la forza elastica $F_{el} = -kx$, proiettata lungo l'asse della molla (nessuna componente trasversale, moto rettilineo perché la velocità iniziale è diretta come $\hat{u}_x$).

Riferimento: asse $x$ con origine nella posizione di equilibrio della molla, verso coincidente con quello di $v_0$; con questa scelta $x(0)=0$.

Equazione del moto: $\ddot{x} + \omega^2 x = 0$ con $\omega = \sqrt{k/m}$.

Soluzione letterale: imponendo $x(0)=0=C$, la soluzione generale [formula (2.21)](ref:formula/2.21) si riduce a $x(t) = D\sin(\omega t)$, e da $\dot{x}(0) = D\omega = v_0$ si ottiene $D = v_0/\omega$, cioè

$$x(t) = \frac{v_0}{\omega}\sin(\omega t).$$

L'elongazione massima in modulo è dunque

$$A = \frac{v_0}{\omega} = v_0\sqrt{\frac{m}{k}} \,$$

Numeri: $\omega = \sqrt{100\ \mathrm{N/m} / 1\ \mathrm{kg}} = 10\ \mathrm{rad/s}$, quindi

$$A = 5\ \mathrm{m/s} \cdot \sqrt{\frac{1\ \mathrm{kg}}{100\ \mathrm{N/m}}} = 0{,}50\ \mathrm{m} \,$$

Controllo: dimensionalmente $\lbrack v_0\rbrack \cdot\sqrt{\lbrack m\rbrack /\lbrack k\rbrack } = (\mathrm{m/s})\cdot\sqrt{\mathrm{kg}/(\mathrm{N/m})} = (\mathrm{m/s})\cdot\sqrt{\mathrm{s}^2} = \mathrm{m}$, coerente; l'ordine di grandezza (mezzo metro) è ragionevole per una molla da laboratorio con questi valori di $k$ e $v_0$.

### Molle in serie e in parallelo

Quando più molle sono collegate fra loro, è spesso utile sostituire il sistema con un'unica molla equivalente di costante $k_{eff}$, tale da riprodurre la stessa relazione tra forza applicata e spostamento totale.

**Molle in serie.** Si considerino due molle di costanti $k_1$ e $k_2$ collegate in serie (un estremo della prima libero e attaccato a una massa $m$, l'altro estremo attaccato al punto $A$, a cui è attaccato anche l'estremo della seconda molla, il cui altro estremo è fissato a una parete). Se nel punto di giunzione $A$ si immagina una massa infinitesima $m_A \to 0$, la seconda legge della dinamica applicata ad $A$ dà $-k_1\Delta l_1 + k_2 \Delta l_2 = m_A a_A$, e nel limite $m_A\to 0$ la risultante delle forze su $A$ deve annullarsi:

$$k_1 \Delta l_1 = k_2 \Delta l_2.$$

Dalla relazione $k_1 \Delta l_1 = k_2 \Delta l_2$ e da $\Delta l_{tot} = \Delta l_1 + \Delta l_2$ si ottiene $\Delta l_1 = (k_2/k_1)\Delta l_2$, dunque $\Delta l_{tot} = \frac{k_1+k_2}{k_1}\Delta l_2$, da cui $\Delta l_2 = \frac{k_1}{k_1+k_2}\Delta l_{tot}$ e quindi $\Delta l_1 = \Delta l_{tot} - \Delta l_2 = \frac{k_2}{k_1+k_2}\Delta l_{tot}$. La massa $m$ è attaccata alla prima molla, quindi la sua equazione del moto è $-k_1\Delta l_1 = ma$; sostituendo l'espressione di $\Delta l_1$ appena trovata si ottiene

$$-\frac{k_1 k_2}{k_1+k_2}\Delta l_{tot} = ma,$$

cioè il sistema delle due molle in serie si comporta come un'unica molla di costante efficace

:::formula{id="3.23" label="Costante elastica equivalente di molle in serie"}
$$k_{eff} = \frac{k_1 k_2}{k_1+k_2} \quad \Longleftrightarrow \quad \frac{1}{k_{eff}} = \frac{1}{k_1} + \frac{1}{k_2}$$
:::

Lo stesso risultato si può ottenere considerando l'equilibrio statico di due molle in serie che sostengono un peso: dette $m_1, m_2$ le masse appese in due configurazioni e $k_1, k_2$ le relative costanti, imponendo l'equilibrio in ciascun punto di giunzione si arriva alla stessa combinazione degli allungamenti e alla stessa $k_{eff}$. È importante osservare che, in una combinazione in serie, è la molla più morbida (quella con $k$ più piccolo) a dominare il comportamento complessivo, perché $k_{eff} \le \min(k_1,k_2)$: in serie le molle si "ammorbidiscono" a vicenda.

**Molle in parallelo.** Se due molle di costanti $k_1$ e $k_2$ sono collegate in parallelo, agendo entrambe sullo stesso punto materiale con lo stesso spostamento $x$, la forza totale è la somma delle due forze elastiche:

$$F_{tot} = -k_1 x - k_2 x = -(k_1+k_2)x,$$

e quindi il sistema si comporta come un'unica molla di costante efficace

:::formula{id="3.24" label="Costante elastica equivalente di molle in parallelo"}
$$k_{eff} = k_1 + k_2$$
:::

A differenza del caso in serie, in parallelo è la molla più rigida a dominare il comportamento, poiché $k_{eff} \ge \max(k_1,k_2)$.

**Errore tipico 3.9.** Uno sbaglio frequente è applicare alle molle le stesse regole di composizione delle resistenze elettriche senza verificarle: la formula di somma degli inversi vale per la serie delle molle e non per il parallelo, esattamente l'opposto di quanto succede per resistori (dove la somma diretta vale per la serie). Conviene sempre ridimostrare la relazione a partire dall'equilibrio nei punti di giunzione, come fatto sopra, piuttosto che applicare meccanicamente una formula mnemonica.

### Molle su piani inclinati e in presenza di forze costanti

Quando sulla massa agisce, oltre alla forza elastica, anche una forza costante $\vec{F}_0$ diretta come l'asse della molla (per esempio la forza peso in una molla verticale), è essenziale distinguere con cura la lunghezza della molla dall'eventuale coordinata verticale di posizione, e fissare l'orientazione della molla (cioè il verso in cui la sua lunghezza cresce) prima di attribuire un segno a $F_0$. Indicando con $z$ la lunghezza istantanea della molla, sempre positiva, e con $l_0$ la sua lunghezza a riposo, l'equazione del moto si scrive

$$m\frac{d^2z}{dt^2} = -k(z - l_0) + F_0.$$

Introducendo una nuova lunghezza di riposo efficace $l_0' = l_0 + F_0/k$, l'equazione diventa $m\ddot{z} = -k(z - l_0')$, cioè quella di una molla efficace con la medesima costante elastica $k$ ma lunghezza a riposo $l_0'$. Nel caso particolare di una molla verticale sospesa a un sostegno fisso, con un corpo di massa $m$ appeso all'estremo libero, conviene misurare $z$ come lunghezza della molla, crescente verso il basso: il peso agisce proprio nel verso in cui la molla tende ad allungarsi, dunque $F_0 = +mg$, e si ottiene $l_0' = l_0 + mg/k$. Il sistema oscilla ancora di moto armonico con pulsazione $\omega = \sqrt{k/m}$, ma attorno alla nuova posizione di equilibrio $l_0'$, maggiore della lunghezza a riposo della molla scarica per effetto del peso sospeso, come è fisicamente intuitivo. Questo metodo di "assorbire" una forza costante in una nuova posizione di equilibrio evita di portarsi dietro un termine costante nell'equazione differenziale, e sarà utile anche in altri contesti con forze costanti sovrapposte a forze di richiamo.

Quando la molla è disposta lungo un piano inclinato scabro o liscio di angolo $\theta$, si procede scomponendo il peso $\vec{P}$ nelle componenti parallela e perpendicolare al piano come già fatto per il piano inclinato nella sezione su [reazioni vincolari ed equilibrio](ref:chapter/3#p4):

$$P_\parallel = -mg\sin\theta, \qquad P_\perp = -mg\cos\theta,$$

dove la componente perpendicolare è bilanciata esattamente dalla reazione normale del piano e non produce accelerazione in quella direzione. Se il piano è liscio, l'equazione del moto lungo il piano si scrive sommando la componente della forza elastica alla componente del peso $P_\parallel$, esattamente come nel caso della molla verticale: si può definire una lunghezza di riposo efficace che incorpora $mg\sin\theta$, riconducendo il problema a un'oscillazione armonica attorno a una nuova posizione di equilibrio. Se invece il piano è scabro, alla forza elastica e a $P_\parallel$ si aggiunge la forza di attrito esercitata dal piano, che si oppone alla tendenza al moto fino a un valore massimo quando la massa è in quiete (attrito statico) oppure ha verso opposto alla velocità quando la massa è in moto (attrito dinamico), come discusso nella sezione sulle [forze di attrito](ref:chapter/3#p5). In questo caso il moto non è in generale armonico: l'attrito statico può bloccare la massa in una posizione di equilibrio diversa da quella determinata dalla sola forza elastica e dal peso, se la componente $P_\parallel$ più la forza elastica non superano la forza di attrito statico massima; l'attrito dinamico, quando il corpo è in moto, dissipa energia meccanica a ogni oscillazione, per cui l'ampiezza del moto non si mantiene costante nel tempo. Occorre quindi trattare separatamente la condizione di equilibrio (verificando l'aderenza) e, se questa non è soddisfatta, l'equazione del moto con l'attrito dinamico, valida tratto per tratto tra un'inversione del verso del moto e la successiva.

**Esempio 3.8** (equilibrio con molla e forza esterna su piano scabro). Una massa $m = 3\ \mathrm{kg}$, posta su un piano orizzontale scabro, è collegata a una molla di costante elastica $k = 640\ \mathrm{N/m}$ e massa trascurabile; all'estremo libero della molla agisce, parallelamente al piano, una forza esterna $F_{ext} = 16\ \mathrm{N}$ diretta verso destra, e il sistema è osservato in quiete.

Dati: $m=3\ \mathrm{kg}$, $k=640\ \mathrm{N/m}$, $F_{ext}=16\ \mathrm{N}$.

Schema delle forze sulla massa $m$: forza elastica $F_{el}$ della molla e forza di attrito statico $f_s$ esercitata dal piano; sul punto di applicazione esterno agiscono $F_{ext}$ e $F_{el}$.

Riferimento: asse $x$ orizzontale, verso positivo coincidente con quello di $F_{ext}$.

Equazione di equilibrio sull'estremo libero della molla: $F_{ext} + F_{el} = 0$, da cui $F_{el} = -F_{ext}$ e

$$\Delta l = \frac{F_{ext}}{k}.$$

Numeri:

$$\Delta l = \frac{16\ \mathrm{N}}{640\ \mathrm{N/m}} = 0{,}025\ \mathrm{m} \,$$

Controllo: $\lbrack \mathrm{N}\rbrack /\lbrack \mathrm{N/m}\rbrack  = \mathrm{m}$, dimensionalmente corretto; un allungamento di $2{,}5\ \mathrm{cm}$ è un ordine di grandezza plausibile per una molla di rigidezza $640\ \mathrm{N/m}$ soggetta a una forza di $16\ \mathrm{N}$.

Sulla massa $m$, l'equilibrio lungo $x$ richiede che la forza di attrito statico eserciti sul corpo una forza pari e opposta alla forza elastica trasmessa dalla molla ($F_{el}$ sulla massa ha lo stesso modulo di $\Delta l \cdot k$ calcolato sopra, per la terza legge di Newton applicata alla molla ideale), così che $|f_s| = k\Delta l = F_{ext} = 16\ \mathrm{N}$: dalla condizione di aderenza $|f_s|\le \mu_s mg$ (vedi [forze di attrito](ref:chapter/3#p5)) si ottiene un vincolo inferiore su $\mu_s$.

**Errore tipico 3.10.** Un errore comune è dimenticare che la molla, essendo ideale e di massa trascurabile, trasmette la stessa forza a entrambi gli estremi: non bisogna introdurre due costanti elastiche diverse, né attribuire una forza elastica diversa ai due estremi della stessa molla, così come per la tensione di un filo ideale {{formula:3.10}}. Un secondo errore frequente è confondere l'allungamento $x = l - l_0$ con la lunghezza $l$ della molla, scrivendo $F = -kl$ invece di $F=-k(l-l_0)$: questo è corretto solo se si sceglie l'origine dell'asse proprio nella posizione di riposo della molla, come conviene sempre fare per semplificare i calcoli.

## p7 | Dinamica del moto curvilineo

### La forza centripeta nel moto curvilineo

Nello studio del [moto nel piano](ref:chapter/2#p5) e del [moto circolare](ref:chapter/2#p6) si è visto che l'accelerazione di un punto che percorre una traiettoria curva si scompone sempre in una componente tangenziale $a_T = dv/dt$, che fa variare il modulo della velocità, e una componente normale (centripeta) $a_N = v^2/\rho$, che fa variare la direzione della velocità. Applicando la seconda legge della dinamica a questa scomposizione si ottiene

$$
\vec{F} = m a_T\, \hat{u}_T + m a_N\, \hat{u}_N = m\frac{dv}{dt}\,\hat{u}_T + \frac{mv^2}{\rho}\,\hat{u}_N .
$$

La componente ortogonale alla traiettoria della risultante delle forze si chiama **forza centripeta** $F_N$ (o $F_c$), mentre la componente tangenziale si chiama **forza tangenziale** $F_T$. È importante sottolineare che la forza centripeta non è un nuovo tipo di forza: è semplicemente il nome che si dà alla componente, ortogonale alla traiettoria, della risultante delle forze reali che agiscono sul punto (peso, tensione, reazione normale, attrito, ecc.).

:::formula{id="3.25" label="Forza centripeta"}
$$
F_c = m a_c = \frac{m v^2}{R}
$$
:::

dove $R$ è il raggio di curvatura della traiettoria nel punto considerato e $v$ il modulo della velocità in quell'istante. Se la componente tangenziale è nulla, $F_T = 0$, il modulo della velocità resta costante e il moto è uniforme; viceversa, nei punti in cui la velocità e la curvatura della traiettoria sono entrambe non nulle, la forza centripeta non è mai nulla, perché la direzione della velocità cambia comunque. Può invece annullarsi in un punto isolato in cui la curvatura si azzera, come un flesso percorso a velocità non nulla: lì $\rho \to \infty$ e quindi $F_c = mv^2/\rho \to 0$, pur restando il moto complessivamente curvilineo.

Una conseguenza notevole, già incontrata nel moto dei gravi, è che nelle applicazioni del moto circolare la massa si elide spesso nelle equazioni: applicando $\vec{F}_{TOT} = m\vec{a}$, se le uniche forze agenti sono proporzionali a $m$ (come il peso $mg$), la cinematica risultante (velocità, periodo) non dipende dalla massa del corpo. Si definisce inoltre **equilibrio dinamico** la condizione in cui, in presenza di forze, il modulo della velocità resta costante: nel moto rettilineo ciò richiede risultante nulla, ma nel moto circolare esiste sempre una forza centripeta, diretta verso il centro, che pur essendo presente (anche costante) non altera il modulo della velocità.

Questa idea si applica a tre situazioni tipiche d'esame: il pendolo, l'auto in curva e il giro della morte. Su una curva piana, la forza centripeta necessaria è fornita dall'attrito statico tra pneumatici e strada (si veda [Forze di attrito](ref:chapter/3#p5)); su una curva sopraelevata è fornita (in parte o del tutto) dalla componente orizzontale della reazione normale. In entrambi i casi non si introduce alcuna forza nuova: si individua semplicemente quale forza reale, o quale sua componente, svolge il ruolo di $F_c$.

### Il pendolo semplice: equazione del moto e tensione del filo

Il **pendolo semplice** è un punto materiale di massa $m$ appeso tramite un filo ideale, inestensibile e di massa trascurabile, lungo $L$. Nella posizione di equilibrio statico (filo verticale) la tensione vale $T_f = mg$, come già ricavato in [Reazioni vincolari ed equilibrio](ref:chapter/3#p4) ({{formula:3.11}}).

Spostando il punto dalla verticale di un angolo $\theta$, il peso e la tensione contribuiscono alla risultante lungo la tangente alla traiettoria e lungo la normale, diretta verso il centro. La componente tangenziale si annulla al passaggio per la verticale, mentre quella normale si annulla nei punti di inversione solo se il filo resta teso:

$$
R_T = -mg\sin\theta = m a_T, \qquad R_N = T_f - mg\cos\theta = m a_N .
$$

Il segno negativo nella componente tangenziale indica che la forza di richiamo è sempre opposta allo spostamento angolare rispetto alla verticale. Poiché il punto si muove su un arco di cerchio di raggio $L$, valgono $a_T = L\, d^2\theta/dt^2$ e $a_N = v^2/L$, da cui

:::formula{id="3.26" label="Equazione differenziale del pendolo semplice"}
$$
\frac{d^2\theta}{dt^2} = -\frac{g}{L}\sin\theta
$$
:::

Questa è un'equazione differenziale del secondo ordine non lineare (per la presenza di $\sin\theta$); la sua soluzione esatta fornisce la legge oraria $\theta(t)$, ma non è esprimibile con funzioni elementari. Per piccole oscillazioni si usa lo sviluppo di Taylor del seno troncato al primo ordine, $\sin\theta \approx \theta$, che riconduce l'equazione a quella del moto armonico già incontrata in [Moto armonico](ref:chapter/2#p4):

$$
\frac{d^2\theta}{dt^2} + \omega^2\theta = 0, \qquad \omega^2 = \frac{g}{L},
$$

con soluzione $\theta(t) = \theta_0\sin(\omega t + \varphi)$, analoga a [formula (2.14)](ref:formula/2.14). Il periodo delle piccole oscillazioni è allora

:::formula{id="3.27" label="Periodo del pendolo semplice (piccole oscillazioni)"}
$$
T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{L}{g}}
$$
:::

indipendente dall'ampiezza $\theta_0$: è la proprietà di **isocronismo delle piccole oscillazioni**.

Dall'equazione lungo la normale, $m v^2/L = T_f - mg\cos\theta$, si vede che la tensione dipende anche dalla velocità e quindi non è determinata dal solo angolo. Se il pendolo è rilasciato da fermo all'angolo $\theta_0$, la conservazione dell'energia meccanica dà $v^2(\theta)=2gL(\cos\theta-\cos\theta_0)$. Sostituendo, si ottiene la tensione in funzione dell'angolo, finché il filo resta teso:

:::formula{id="3.28" label="Tensione del filo del pendolo rilasciato da fermo"}
$$
T_f(\theta) = mg\left(3\cos\theta - 2\cos\theta_0\right)
$$
:::

La tensione è massima quando il pendolo passa per la posizione di riposo ($\theta = 0$) ed è minima nei punti di inversione ($\theta = \theta_0$), dove vale $T_f = mg\cos\theta_0$. Il filo resta teso solo dove $T_f(\theta) \geq 0$. La tensione non compie lavoro, perché in ogni istante è ortogonale allo spostamento ($\vec{T}\cdot d\vec{r} = 0$); questa proprietà permette di applicare la conservazione dell'energia meccanica al pendolo.

### Esempio svolto: reazione vincolare in una guida circolare verticale

**Dati**: un punto materiale di massa $m = 200$ kg entra con velocità $v_A = 20$ m/s in una guida circolare verticale liscia di raggio $R = 5$ m. Il punto percorre il lato interno di una guida unilaterale, che può spingerlo verso il centro ma non trattenerlo quando perde il contatto. Il punto $A$ è il più basso della guida, $B$ è al livello del centro (quota $R$) e $C$ è il punto più alto (quota $2R$), con angolo $\theta$ misurato dal centro rispetto all'orizzontale: $\theta_A = -\pi/2$, $\theta_B = 0$, $\theta_C = \pi/2$. Si vuole la reazione normale $N$ nei tre punti.

**Schema delle forze**: sul punto agiscono il peso $m\vec{g}$ e la reazione normale della guida $\vec{N}$ (la guida è liscia, quindi niente attrito). Scomponendo lungo i versori polari radiale $\hat{u}_r$ (uscente dal centro) e trasverso $\hat{u}_\theta$:

$$
F_r = -mg\sin\theta - N, \qquad F_\theta = -mg\cos\theta .
$$

**Equazioni del moto**: fino a che il punto resta sulla guida il moto è circolare, quindi la componente radiale dell'accelerazione è centripeta, $a_r = -v^2/R$. Uguagliando $F_r = m a_r$ si ottiene l'equazione radiale e quindi la reazione vincolare in funzione dell'angolo:

:::formula{id="3.29" label="Reazione normale in una guida circolare verticale"}
$$
N(\theta) = m\left(\frac{v^2}{R} - g\sin\theta\right)
$$
:::

**Soluzione letterale e numerica**. Usando le velocità nei tre punti (ottenibili dalla conservazione dell'energia meccanica, anticipata dal capitolo sull'energia: $v_B \approx 17{,}38$ m/s, $v_C \approx 14{,}28$ m/s):

- in $A$: $N_A = m\left(\dfrac{v_A^2}{R} + g\right) = 200\left(\dfrac{400}{5} + 9{,}81\right) \approx 17\,962$ N;
- in $B$: $N_B = m\dfrac{v_B^2}{R} = 200\cdot\dfrac{(17{,}38)^2}{5} \approx 12\,083$ N;
- in $C$: $N_C = m\left(\dfrac{v_C^2}{R} - g\right) = 200\left(\dfrac{(14{,}28)^2}{5} - 9{,}81\right) \approx 6\,195$ N.

**Controllo**: le tre reazioni sono tutte positive e decrescenti man mano che il punto sale, come atteso fisicamente (la guida spinge sempre verso l'interno).

**Velocità minima di ingresso**. Poiché il punto percorre il lato interno di una guida unilaterale che può solo spingerlo verso il centro, la reazione deve soddisfare $N(\theta) \geq 0$ finché il punto resta a contatto. Se $N$ si annulla prima che il corpo raggiunga $C$, il punto perde il contatto e cade liberamente. La velocità minima in $A$ si ottiene imponendo $N(\theta_C) = 0$, cioè $v_C^2 = gR$, non $v_C = 0$. Combinando questa condizione con la conservazione dell'energia meccanica, $\frac{1}{2}mv_A^2 = \frac{1}{2}mv_C^2 + 2mgR$, si ottiene $v_{A,\min} = \sqrt{5gR} \approx 15{,}7$ m/s.

### Errori tipici

**Errore tipico 3.11** (confondere reazione vincolare e peso in modulo). In $A$ il corpo sta curvando e ha accelerazione centripeta non nulla, $a_r = -v_A^2/R$; quindi la risultante delle forze non è nulla e $N_A$ non è semplicemente $mg$, ma $m(v_A^2/R + g)$.

**Errore tipico 3.12** (usare solo la conservazione dell'energia per la velocità minima nel giro della morte). Imporre $v_C = 0$ nella sola conservazione dell'energia dà $v_{A,\min} = \sqrt{4gR}$, un valore inferiore ma fisicamente impossibile per il punto sul lato interno di una guida unilaterale: sostituendo $v_C = 0$ nell'espressione della reazione si ottiene $N_C = -mg < 0$, cioè una reazione diretta verso l'esterno, che la guida non può esercitare. La reazione vincolare non compie lavoro e perciò non compare nella conservazione dell'energia, ma resta la condizione che determina se il moto può restare circolare; il valore corretto è $v_{A,\min} = \sqrt{5gR}$, maggiore di $\sqrt{4gR}$.
