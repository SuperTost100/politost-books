---
chapter: 7
title: Sistemi di punti
---

## p1 | Introduzione

Studiare un sistema di punti permette di capire quali aspetti del moto dipendono dalle forze esterne e quali descrivono invece il movimento complessivo dei suoi componenti. Questa distinzione è essenziale per affrontare problemi come il rinculo di un cannone, la rotazione di un insieme di masse e gli urti, nei quali le forze interne possono cambiare il moto dei singoli punti senza alterare la quantità di moto totale. Il capitolo mostra inoltre come scomporre il moto e l’energia di un sistema in una parte associata al centro di massa e una parte relativa ai suoi punti.

Per seguire il percorso servono le idee di lavoro ed energia, momento angolare e moti relativi. È utile saper applicare le leggi di conservazione e distinguere una grandezza vettoriale da una scalare, oltre a saper scomporre vettori lungo assi scelti.

Al termine saprai individuare le forze esterne e interne, trovare il centro di massa e applicare le equazioni cardinali per descrivere la quantità di moto e il momento angolare. Saprai stabilire quando queste grandezze si conservano e usare le leggi di conservazione appropriate per risolvere urti unidimensionali e obliqui, elastici o anelastici, calcolando anche l’energia cinetica dissipata.

## p2 | Forze interne ed esterne

Quando si studia il moto di un singolo punto materiale, tutte le forze che agiscono su di esso provengono, in un certo senso, dall'esterno di quel punto: sono le forze che altri corpi esercitano su di esso. Quando invece si considera un **sistema di punti materiali**, cioè un insieme di $n > 1$ punti che interagiscono tra loro e con il resto dell'universo, diventa necessario distinguere due tipi di forze che agiscono su ciascun punto del sistema, perché solo questa distinzione permette di scrivere equazioni di moto complessive per l'intero sistema, senza dover risolvere separatamente il moto di ognuno degli $n$ punti.

### Classificazione delle forze: interne ed esterne

**Definizione 7.1** (sistema di punti materiali). Si consideri un sistema di $n > 1$ punti materiali di massa $m_1, m_2, \dots, m_i, \dots, m_n$, interagenti tra di loro e con il resto dell'universo. La forza risultante $\vec{F}_i$ agente sull'$i$-esimo punto si scrive come somma di due contributi,

$$\vec{F}_i = \vec{F}_i^{(E)} + \vec{F}_i^{(I)},$$

dove $\vec{F}_i^{(E)}$ è la risultante delle **forze esterne** agenti sul punto $P_i$ (dovute all'interazione tra il sistema e il resto dell'universo) e $\vec{F}_i^{(I)}$ è la risultante delle **forze interne** agenti su $P_i$, cioè delle forze esercitate dagli altri $n-1$ punti del sistema.

Le forze interne possono avere natura qualsiasi: tensioni di fili, forze elastiche, forze elettriche, magnetiche, gravitazionali, forze di contatto o di attrito tra i punti del sistema; possono essere conservative o non conservative. Ciò che le accomuna non è la loro natura fisica, ma il fatto di essere scambiate esclusivamente tra punti appartenenti al sistema considerato.

È fondamentale osservare che la ripartizione tra forze interne ed esterne non è una proprietà assoluta della forza, ma dipende da come viene definito il sistema: la stessa interazione fisica può essere una forza esterna se si considera solo uno dei due corpi coinvolti, e diventare una forza interna se si allarga il sistema fino a includerli entrambi. Il moto di ciascun punto $P_i$ dipende dalla risultante totale $\vec{F}_i$, ma è proprio la scelta del sistema a determinare quale parte di tale risultante venga classificata come interna e quale come esterna.

Alle forze interne si applica sempre il terzo principio della dinamica (azione e reazione), già visto nella sezione sui [principi della dinamica](ref:chapter/3#p2): se $\vec{F}_{i,j}$ è la forza esercitata dal punto $P_j$ sul punto $P_i$, allora

$$\vec{F}_{i,j} = -\vec{F}_{j,i}.$$

Le due forze di una coppia interna hanno dunque stesso modulo e versi opposti, come garantito dall'uguaglianza vettoriale precedente; possono essere attrattive o repulsive a seconda della natura dell'interazione. L'uguaglianza $\vec{F}_{i,j} = -\vec{F}_{j,i}$ non implica invece, da sola, che le due forze condividano anche la stessa retta d'azione: questa proprietà ulteriore, detta centralità delle forze interne rispetto alla coppia di punti, sarà introdotta come ipotesi aggiuntiva più avanti, quando servirà per dimostrare l'annullarsi del momento delle forze interne.

**Errore tipico 7.1.** Il principio di azione e reazione si applica a qualunque interazione, quindi anche alle forze esterne: la reazione a una forza esterna è applicata al resto dell'universo e non ha alcun effetto sul sistema studiato. Non va quindi cercata, all'interno del sistema, una "reazione" a una forza esterna.

### Risultante delle forze interne

**Teorema 7.1.** La risultante di tutte le forze interne a un sistema di punti materiali è nulla.

*Ipotesi:* sistema di riferimento inerziale; per ogni coppia di punti vale il terzo principio della dinamica, $\vec{F}_{i,j} = -\vec{F}_{j,i}$.

*Dimostrazione.* Sommando su tutti i punti la risultante delle forze interne agenti su ciascuno,

$$\vec{F}_i^{(I)} = \sum_{j} \vec{F}_{i,j},$$

la risultante totale delle forze interne al sistema vale

$$\vec{R}^{(I)} = \sum_i \vec{F}_i^{(I)} = \sum_{i,j} \vec{F}_{i,j}.$$

Nella doppia somma, le forze interne compaiono sempre in coppie opposte $\vec{F}_{i,j}$ e $\vec{F}_{j,i} = -\vec{F}_{i,j}$, che si cancellano esattamente a due a due. Il risultato è dunque $\vec{R}^{(I)} = \vec{0}$.

:::formula{id="7.1" label="Risultante delle forze interne"}
$$\vec{R}^{(I)} = \sum_i \vec{F}_i^{(I)} = \sum_{i,j} \vec{F}_{i,j} = \vec{0}$$
:::

È importante notare che questo risultato riguarda la *somma* delle forze interne sull'intero sistema, non la risultante delle forze interne su un singolo punto: in generale $\vec{F}_i^{(I)} \neq \vec{0}$, perché non c'è ragione per cui le forze che gli altri punti esercitano su $P_i$ si bilancino tra loro.

Sommando risultante interna ed esterna, la risultante totale delle forze che agiscono sul sistema coincide sempre con la sola risultante delle forze esterne:

:::formula{id="7.2" label="Risultante totale delle forze su un sistema"}
$$\vec{R} = \vec{R}^{(I)} + \vec{R}^{(E)} = \vec{R}^{(E)} = \sum_i \vec{F}_i^{(E)}$$
:::

Questo risultato è ciò che renderà possibile, nella sezione sulla [prima equazione cardinale](ref:chapter/7#p4), descrivere il moto del centro di massa del sistema usando soltanto le forze esterne, esattamente come già accadeva per la conservazione della quantità di moto vista nella sezione [Quantità di moto e impulso](ref:chapter/3#p3).

### Momento delle forze interne

**Teorema 7.2.** Il momento risultante, rispetto a un polo qualsiasi, di tutte le forze interne a un sistema di punti materiali è nullo.

*Ipotesi:* oltre al terzo principio della dinamica, si assume che le forze interne siano *centrali rispetto alla coppia di punti che le scambiano*, cioè dirette lungo la retta congiungente $P_i$ e $P_j$: il vettore posizione relativa $\vec{r}_{i,j} = \vec{r}_j - \vec{r}_i$ è parallelo a $\vec{F}_{i,j}$. Questa è un'ipotesi aggiuntiva rispetto al solo terzo principio, verificata ad esempio da un'interazione gravitazionale o elettrostatica fra due punti materiali, oppure da una molla ideale che collega direttamente due punti del sistema. Non si tratta invece di una proprietà generale di ogni forza elastica né di ogni reazione vincolare ideale: una forza elastica di flessione o la reazione trasversale di un vincolo possono non essere dirette lungo la congiungente dei due punti, e in quei casi l'ipotesi di centralità va verificata caso per caso.

*Dimostrazione.* Si calcoli, rispetto a un polo $O$ arbitrario, la somma dei momenti della coppia di forze interne scambiate tra $P_i$ e $P_j$:

$$\vec{M}_{i,j}^{(I)} = \vec{r}_i \times \vec{F}_{i,j} + \vec{r}_j \times \vec{F}_{j,i} = \vec{r}_i \times \vec{F}_{i,j} - \vec{r}_j \times \vec{F}_{i,j} = (\vec{r}_i - \vec{r}_j) \times \vec{F}_{i,j} = -\vec{r}_{i,j} \times \vec{F}_{i,j}.$$

:::image{src="assets/406232d1-centralita-forze-interne.svg" alt="Diagramma vettoriale con un polo O e due punti P_i e P_j: i vettori posizione r_i e r_j partono da O, il vettore r_ij congiunge P_i a P_j ed è la retta d'azione delle forze interne centrali F_ij e F_ji." caption="Fig. 7.1 — Punti P_i e P_j rispetto a un polo O: i vettori posizione r_i e r_j individuano i due punti, mentre r_ij congiunge P_i a P_j. Se la forza interna F_ij è centrale, cioè diretta lungo la stessa retta di r_ij, il prodotto vettoriale r_ij × F_ij è nullo: per questo il momento della coppia interna si annulla."}
:::

Poiché $\vec{r}_{i,j}$ è parallelo a $\vec{F}_{i,j}$, il prodotto vettoriale è nullo per ogni coppia di punti:

$$\vec{M}_{i,j}^{(I)} = \vec{0}.$$

Sommando su tutte le coppie distinte $\{i,j\}$, con $i<j$, si ottiene il momento totale delle forze interne, che è anch'esso nullo, poiché ciascun addendo lo è singolarmente.

:::formula{id="7.3" label="Momento delle forze interne"}
$$\vec{M}^{(I)} = -\sum_{i<j} \vec{r}_{i,j} \times \vec{F}_{i,j} = \vec{0}$$
:::

Questo risultato è alla base della **seconda equazione cardinale**, già incontrata per il punto materiale nella sezione sul [momento angolare del punto](ref:chapter/5#p3) e che per un sistema di punti, con polo $O$ fisso in un riferimento inerziale, diventa

$$\frac{d\vec{L}_O}{dt} = \vec{M}_O^{(E)} + \vec{M}_O^{(I)} = \vec{M}_O^{(E)},$$

cioè la derivata temporale del momento angolare del sistema dipende soltanto dal momento delle forze esterne: le forze interne non contribuiscono mai alla sua variazione. La trattazione completa di questo teorema, incluso il caso di un polo in moto, è svolta nella sezione sul [momento angolare di un sistema](ref:chapter/7#p5).

### Osservazione: il lavoro delle forze interne non è nullo

A differenza della risultante e del momento, il **lavoro** complessivo delle forze interne non si annulla in generale. Se $P_i$ e $P_j$ subiscono spostamenti $d\vec{r}_i$ e $d\vec{r}_j$ diversi, il lavoro infinitesimo della coppia di forze interne scambiate vale

$$\vec{F}_{i,j}\cdot d\vec{r}_i + \vec{F}_{j,i}\cdot d\vec{r}_j = -\vec{F}_{i,j}\cdot d\vec{r}_{i,j},$$

Se le forze interne sono centrali rispetto alla coppia di punti, cioè dirette lungo la congiungente $P_i P_j$ come nell'ipotesi adottata per il momento delle forze interne, allora $-\vec{F}_{i,j}\cdot d\vec{r}_{i,j}$ è proporzionale alla variazione della distanza $\left|\vec{r}_{i,j}\right|$, e il lavoro della coppia si annulla quando tale distanza resta costante nel tempo, cioè quando i due punti non si avvicinano né si allontanano. Per forze interne non centrali questa conclusione non vale: il lavoro della coppia può essere nullo anche mentre la distanza relativa varia, e può essere diverso da zero anche a distanza costante, perché in quel caso la forza ha in generale una componente trasversale alla congiungente che compie lavoro indipendentemente dalla variazione di $\left|\vec{r}_{i,j}\right|$. È proprio l'assenza di variazione della distanza relativa, per forze interne centrali, la condizione caratteristica del corpo rigido, che sarà definito nella sezione [Corpo rigido e suoi moti](ref:chapter/8#p2): per questo nel corpo rigido il lavoro delle forze interne (vincolari) può essere trascurato, mentre in un sistema deformabile generico va tenuto in conto, come si vedrà nella sezione sull'[energia cinetica di un sistema](ref:chapter/7#p6).

### Esempio svolto: classificazione delle forze in un urto con molla

**Dati.** Su un piano orizzontale liscio sono posti due punti materiali di masse $m_1 = 0,15 \text{ kg}$ e $m_2 = 0,37 \text{ kg}$, a contatto tra loro. Il punto $m_1$ è collegato a una molla di costante elastica $k$, inizialmente a riposo. Si comprime la molla di $12 \text{ cm}$ spostando $m_1$ verso sinistra (con $m_2$ fermo), poi si lascia andare $m_1$ da fermo. Il punto $m_1$ ritorna verso $m_2$ e lo urta in modo completamente anelastico.

**Classificazione delle forze.** Conviene definire il sistema come l'insieme $\{m_1, m_2\}$. Durante l'urto, $m_1$ e $m_2$ interagiscono con una coppia di forze mutue che sono, per definizione, forze interne al sistema; esse danno luogo a una deformazione e alla successiva adesione dei due corpi (urto anelastico). La molla, invece, agisce solo su $m_1$ e non appartiene al sistema: la forza elastica è dunque una forza esterna al sistema $\{m_1, m_2\}$, che in generale non è isolato.

**Osservazione chiave.** L'urto tra $m_1$ e $m_2$ avviene proprio quando le due masse si trovano nella posizione di equilibrio della molla, $x_0$. In quell'istante preciso la forza elastica (esterna al sistema) è nulla per definizione, anche se durante la breve durata dell'urto le masse si spostano leggermente da $x_0$ e la forza elastica può assumere valori non nulli. Assumendo che l'urto sia sufficientemente breve, al limite istantaneo, l'impulso trasmesso dalla molla nell'intervallo di tempo dell'urto risulta trascurabile rispetto a quello scambiato tra $m_1$ e $m_2$: sotto questa ipotesi si può applicare la conservazione della quantità di moto del sistema $\{m_1, m_2\}$ per calcolare la velocità comune dopo l'urto, pur non essendo il sistema isolato in generale. Questo esempio mostra con chiarezza perché la classificazione interna/esterna debba essere rifatta con attenzione a ogni istante e per ogni scelta del sistema: la stessa forza elastica, che in altri istanti modificherebbe la quantità di moto del sistema, in un urto istantaneo centrato sulla posizione di equilibrio non produce un impulso apprezzabile.

Un secondo esempio istruttivo riguarda due blocchi sovrapposti, uno dei quali scivola sotto l'azione di una forza esterna $F$: se tra i due blocchi esiste attrito, il blocco inferiore esercita su quello superiore una forza $\mu_D m g$ (forza interna al sistema dei due blocchi) che lo trascina nel moto, mentre per il terzo principio della dinamica il blocco superiore esercita sull'inferiore una forza uguale e contraria. Anche qui le due forze di attrito reciproco sono interne al sistema costituito dai due blocchi, mentre $F$ resta esterna.

### Errori tipici

- Pensare che la risultante delle forze interne su *ciascun* punto sia nulla: in generale non lo è. È nulla soltanto la somma estesa a tutto il sistema, perché solo in quella somma le coppie azione-reazione si cancellano a due a due.
- Dimenticare che la classificazione interna/esterna dipende dalla scelta del sistema: una forza può essere esterna per un sottosistema e interna per un sistema più ampio.
- Scrivere il prodotto vettoriale del momento come un prodotto scalare o con notazioni prive di senso, ad esempio $\vec{M} = \vec{fR}$ oppure $\vec{M} = R \times f$ con $R$ e $f$ scalari privi di freccia: il prodotto vettoriale si esegue solo fra due vettori, come già richiamato nella sezione sul [momento di una forza](ref:chapter/5#p2).
- Confondere l'annullarsi del momento delle forze interne (valido per qualsiasi polo, grazie alla centralità delle forze interne rispetto alla coppia di punti) con l'annullarsi del lavoro delle forze interne, che in generale non è nullo se la distanza fra i punti varia nel tempo.

## p3 | Centro di massa

Un sistema di punti materiali, anche se ciascun punto obbedisce alla seconda legge della dinamica, ha un comportamento complessivo che conviene descrivere con una sola grandezza geometrica di sintesi. Questo capitolo introduce a tale scopo il centro di massa, il cui moto risulta governato soltanto dalle forze esterne, come si è già mostrato per la risultante e il momento delle forze interne nella sezione [Forze interne ed esterne](ref:chapter/7#p2).

### Centro di massa di un sistema discreto

**Definizione 7.2** (Centro di massa).
Dato un sistema di $N$ punti materiali di massa $m_i$ e posizione $\vec{r}_i$ ($i = 1, \dots, N$) in un riferimento $Oxyz$, si definisce centro di massa (CM) il punto geometrico individuato dal raggio vettore

:::formula{id="7.4" label="Centro di massa di un sistema discreto"}
$$\vec{r}_{CM} = \frac{\sum_i m_i \vec{r}_i}{\sum_i m_i} = \frac{m_1 \vec{r}_1 + m_2 \vec{r}_2 + \cdots + m_N \vec{r}_N}{m_1 + m_2 + \cdots + m_N}$$
:::

In componenti cartesiane si ha equivalentemente

:::formula{id="7.5" label="Coordinate del centro di massa"}
$$x_{CM} = \frac{\sum_i m_i x_i}{\sum_i m_i} \qquad y_{CM} = \frac{\sum_i m_i y_i}{\sum_i m_i} \qquad z_{CM} = \frac{\sum_i m_i z_i}{\sum_i m_i}$$
:::

Il centro di massa è un punto geometrico, non necessariamente occupato da materia: può cadere all'esterno del sistema, come nel caso di un anello o di una ferro di cavallo. La sua posizione rispetto ai punti del sistema non dipende dal riferimento scelto, mentre le sue coordinate numeriche cambiano se si cambia origine: passando da $O$ a un nuovo polo $O'$, con $\vec{r}_i = \vec{r}'_i + \overrightarrow{OO'}$, si trova

$$\vec{r}'_{CM} = \vec{r}_{CM} + \overrightarrow{O'O}$$

ossia il CM si trasla come qualunque altro punto del sistema sotto cambio di riferimento.

### Velocità, accelerazione e quantità di moto del centro di massa

Derivando rispetto al tempo la definizione di $\vec{r}_{CM}$ si ottiene la velocità del centro di massa

:::formula{id="7.6" label="Velocità del centro di massa"}
$$\vec{v}_{CM} = \frac{d\vec{r}_{CM}}{dt} = \frac{\sum_i m_i \vec{v}_i}{\sum_i m_i} = \frac{\vec{P}}{m}$$
:::

dove $\vec{P} = \sum_i m_i \vec{v}_i$ è la quantità di moto totale del sistema e $m = \sum_i m_i$ la massa totale. In altre parole, la quantità di moto totale del sistema coincide con quella di un punto materiale che abbia massa $m$, posizione $\vec{r}_{CM}$ e velocità $\vec{v}_{CM}$.

Derivando ancora si ottiene l'accelerazione del centro di massa $\vec{a}_{CM} = \sum_i m_i \vec{a}_i / \sum_i m_i$. Se il riferimento è inerziale, applicando la seconda legge a ciascun punto ($m_i \vec{a}_i = \vec{F}_i^{(E)} + \vec{F}_i^{(I)}$) e sommando su tutti i punti, il contributo delle forze interne si annulla perché la loro risultante è nulla, come dimostrato nella sezione precedente; resta così il teorema del moto del centro di massa, che verrà ripreso con il nome di prima equazione cardinale nella sezione [Prima equazione cardinale e quantità di moto](ref:chapter/7#p4). Questo risultato giustifica l'affermazione secondo cui il centro di massa si muove come un punto materiale in cui sia concentrata tutta la massa del sistema e a cui sia applicata la risultante delle forze esterne; il moto del centro di massa dipende dunque soltanto dalle forze esterne, anche se le forze interne possono comunque alterare il moto relativo dei singoli punti del sistema.

### Centro di massa di un corpo continuo

Quando il sistema di punti è distribuito con continuità, come accade per un corpo rigido o più in generale per un corpo deformabile, le somme discrete si sostituiscono con integrali sull'elemento di massa infinitesimo $dm$. Si introduce la densità di volume

:::formula{id="7.7" label="Densità di massa e passaggio al continuo"}
$$m = \int dm = \int \rho \, dV \qquad \rho = \frac{dm}{dV}$$
:::

e, quando la geometria lo richiede, le densità superficiali $\rho_s = dm/dS$ (unità $\mathrm{kg\, m^{-2}}$) oppure lineari $\rho_l = dm/dl$ (unità $\mathrm{kg\, m^{-1}}$), con $m = \int \rho_s \, dS$ oppure $m = \int \rho_l \, dl$ rispettivamente.

La definizione di centro di massa si estende allora in modo naturale sostituendo la somma con l'integrale:

:::formula{id="7.8" label="Centro di massa di un corpo continuo"}
$$\vec{r}_{CM} = \frac{\int \vec{r} \, dm}{\int dm} = \frac{\int \vec{r} \, dm}{m} = \frac{\int \vec{r} \, \rho \, dV}{m}$$
:::

Se il corpo è omogeneo ($\rho$ costante) l'espressione si semplifica in

$$\vec{r}_{CM} = \frac{\rho \int \vec{r} \, dV}{m} = \frac{1}{V} \int \vec{r} \, dV$$

che mostra come, per un corpo omogeneo, la posizione del centro di massa dipenda soltanto dalla forma geometrica del corpo e non dalla sua massa totale o dal materiale di cui è fatto.

### Simmetrie e proprietà distributiva

Il calcolo diretto dell'integrale può spesso essere evitato sfruttando le simmetrie del corpo. Se un corpo rigido omogeneo è simmetrico rispetto a un punto, a un asse o a un piano, il centro di massa coincide con il centro di simmetria oppure appartiene, rispettivamente, all'asse o al piano di simmetria; quando esistono più elementi di simmetria, il centro di massa si trova sulla loro intersezione. Per esempio il centro di massa di una sfera omogenea è il suo centro, quello di un cilindro omogeneo cade sull'asse, a metà altezza.

Un secondo strumento utile è la proprietà distributiva del centro di massa: se un sistema viene scomposto in più sottosistemi, il centro di massa dell'intero sistema coincide con il centro di massa dei centri di massa dei sottosistemi, ciascuno pensato come un punto materiale che porta la massa totale del proprio sottosistema. Questo permette, ad esempio, di trattare un corpo composto da un'asta e un disco calcolando separatamente i due centri di massa parziali e poi combinandoli come se fossero due punti materiali.

### Esempio svolto: sistema discreto di tre particelle

Un sistema è composto da tre particelle: $m_1 = 0,6 \text{ kg}$ in $\vec{r}_1 = (4\hat{u}_x + 2\hat{u}_y) \text{ m}$, $m_2 = 0,3 \text{ kg}$ in $\vec{r}_2 = -3\hat{u}_x \text{ m}$, $m_3 = 0,4 \text{ kg}$ in $\vec{r}_3 = (2\hat{u}_x - 2\hat{u}_y) \text{ m}$. Si vuole calcolare la posizione del centro di massa.

Applicando le coordinate del centro di massa componente per componente:

$$x_{CM} = \frac{m_1 x_1 + m_2 x_2 + m_3 x_3}{m_1 + m_2 + m_3} = \frac{0,6 \text{ kg} \cdot 4 \text{ m} + 0,3 \text{ kg} \cdot (-3 \text{ m}) + 0,4 \text{ kg} \cdot 2 \text{ m}}{(0,6 + 0,3 + 0,4) \text{ kg}} = 1,77 \text{ m}$$

$$y_{CM} = \frac{0,6 \text{ kg} \cdot 2 \text{ m} + 0,3 \text{ kg} \cdot 0 \text{ m} + 0,4 \text{ kg} \cdot (-2 \text{ m})}{(0,6 + 0,3 + 0,4) \text{ kg}} = 0,31 \text{ m}$$

Il punto $(1,77; 0,31) \text{ m}$ cade all'interno del triangolo individuato dalle tre masse, come ci si attende dal fatto che il centro di massa è una media pesata delle posizioni. Il controllo dimensionale è immediato: ogni termine ha le dimensioni di $\text{kg} \cdot \text{m}$ al numeratore e $\text{kg}$ al denominatore, da cui $x_{CM}, y_{CM}$ risultano in metri.

:::image{src="assets/f80b27f5-centro-massa-tre-particelle.svg" alt="Punti m1, m2, m3 nel piano xy con il centro di massa calcolato al loro interno" caption="Fig. 7.2 — Posizione delle tre particelle e del centro di massa nell'esempio svolto"}
:::

### Esempio svolto: asta omogenea e asta a densità variabile

Un'asta sottile di lunghezza $L = 2 \text{ m}$ e massa $m = 50 \text{ g}$ è appoggiata sull'asse $x$ con l'estremo sinistro nell'origine. Si chiede il centro di massa nel caso omogeneo e nel caso in cui la densità lineare cresca linearmente da $\lambda_1$ (estremo sinistro) a $\lambda_2$ (estremo destro), con $\lambda_1 = 5 \cdot 10^{-4} \text{ kg/m}$.

:::image{src="assets/f80b27f5-densita-lineare-asta.svg" alt="retta crescente che rappresenta lambda(x) da lambda1 a lambda2 su un intervallo da 0 a L" caption="Fig. 7.3 — Densità lineare di massa crescente lungo un'asta, da λ₁ all'estremo sinistro a λ₂ all'estremo destro"}
:::

Nel caso omogeneo la densità lineare è costante, $\lambda(x) = m/L$, e il centro di massa si calcola con

$$x_{CM} = \int_0^L x \, \frac{m}{L} \, \frac{dx}{m} = \frac{1}{L} \int_0^L x \, dx = \frac{L}{2} = \frac{2 \text{ m}}{2} = 1 \text{ m}$$

ossia il punto medio dell'asta, in accordo con il criterio di simmetria.

Nel caso a densità variabile si ha $\lambda(x) = \lambda_1 + \dfrac{\lambda_2 - \lambda_1}{L} x$, e integrando $x_{CM} = \int_0^L x \lambda(x) \, dx / m$ si trova, dopo aver eliminato $\lambda_2$ tramite la condizione $m = \int_0^L \lambda(x) dx$,

$$x_{CM} = \frac{2L}{3} - \frac{L^2}{6m} \lambda_1 \approx 1,33 \text{ m}$$

Il valore ottenuto è maggiore del punto medio $1 \text{ m}$ del caso omogeneo: il centro di massa si sposta verso l'estremo più denso, come è ragionevole aspettarsi assegnando maggior peso ai punti dove si concentra più massa.

### Errori tipici

- Dimenticare che il centro di massa è una media pesata dalle masse, e non una semplice media geometrica delle posizioni: scambiare $m_i$ con pesi uguali porta a un punto diverso dal CM, a meno che tutte le masse siano effettivamente identiche.
- Applicare la formula discreta $\sum m_i r_i / \sum m_i$ a un corpo continuo senza passare all'integrale con l'elemento $dm$, oppure confondere densità di volume, superficiale e lineare usando l'unità di misura sbagliata.
- Assumere che il centro di massa cada sempre all'interno del corpo materiale: per corpi non convessi o con cavità (anello, ferro di cavallo) il CM può trovarsi in un punto dello spazio privo di materia.
- Nel ricavare il moto del CM con il teorema del moto del centro di massa, pensare che le forze interne vadano incluse nella risultante: come mostrato in [Forze interne ed esterne](ref:chapter/7#p2), la loro risultante è identicamente nulla e quindi non influisce sull'accelerazione del CM, pur potendo modificare il moto relativo dei singoli punti del sistema.

## p4 | Prima equazione cardinale e quantità di moto

Nella sezione precedente abbiamo visto che le forze interne di un sistema di punti materiali hanno risultante e momento nulli rispetto a qualunque polo ([forze interne ed esterne](ref:chapter/7#p2)). Questo fatto ha una conseguenza molto potente: per descrivere il moto del centro di massa di un sistema non è mai necessario conoscere le forze interne, per quanto complicate esse siano (urti, esplosioni, attriti reciproci). Questa sezione formalizza l'idea in un teorema — il **teorema del moto del centro di massa**, detto anche **prima equazione cardinale** — e ne ricava la conseguenza più usata negli esercizi: la conservazione della quantità di moto totale.

### Il teorema del moto del centro di massa

Consideriamo un sistema di $N$ punti materiali $P_i$, di massa $m_i$, osservato da un riferimento inerziale. Su ciascun punto agisce una forza risultante che si decompone in parte esterna e parte interna,

$$m_i \vec{a}_i = \vec{F}_i = \vec{F}_i^{(E)} + \vec{F}_i^{(I)} ,$$

dove $\vec{F}_i^{(I)}$ raccoglie le forze scambiate con gli altri punti del sistema e $\vec{F}_i^{(E)}$ le forze dovute al resto dell'universo.

Sommando questa relazione su tutti i punti del sistema,

$$\sum_{i=1}^{N} \vec{F}_i^{(I)} + \sum_{i=1}^{N} \vec{F}_i^{(E)} = \sum_{i=1}^{N} m_i \vec{a}_i ,$$

e ricordando che la risultante delle forze interne è nulla ({{formula:7.1}}), il primo addendo scompare: le forze interne si annullano sempre a due a due per il terzo principio della dinamica.

Nella sezione sul [centro di massa](ref:chapter/7#p3) abbiamo definito $\vec{r}_{CM} = \dfrac{\sum_i m_i \vec{r}_i}{M}$ con $M = \sum_i m_i$, e derivando due volte rispetto al tempo si ottiene l'accelerazione del centro di massa

$$\vec{a}_{CM} = \frac{\sum_{i=1}^N m_i \vec{a}_i}{M}.$$

Sostituendo nell'equazione precedente si arriva al risultato centrale di questa sezione.

:::formula{id="7.9" label="Teorema del moto del centro di massa (prima equazione cardinale)"}
$$M \vec{a}_{CM} = \sum_{i=1}^{N} \vec{F}_i^{(E)} = \vec{R}^{(E)}$$
:::

Il centro di massa di un sistema si muove esattamente come un punto materiale fittizio di massa pari alla massa totale $M$ del sistema, soggetto alla sola risultante delle forze esterne $\vec{R}^{(E)}$. Le forze interne, qualunque esse siano, non possono modificare lo stato di moto del centro di massa: possono soltanto ridistribuire quantità di moto tra i punti del sistema, cambiando il moto di ciascun punto preso singolarmente ma non quello del CM.

Questo è il risultato che giustifica, ad esempio, perché un proiettile che esplode in volo continua ad avere il centro di massa dei frammenti su una traiettoria parabolica identica a quella che avrebbe avuto il proiettile intatto, oppure perché i movimenti interni di un acrobata non alterano la traiettoria parabolica del suo centro di massa durante un salto.

### Forma in termini della quantità di moto

Nella sezione su [quantità di moto e impulso](ref:chapter/3#p3) abbiamo mostrato che la quantità di moto totale del sistema coincide con quella del centro di massa, $\vec{p}_{tot} = M \vec{v}_{CM}$. Derivando quest'ultima relazione rispetto al tempo,

$$\frac{d\vec{p}_{tot}}{dt} = \frac{d}{dt}\big(M\vec{v}_{CM}\big) = M\vec{a}_{CM} = \vec{R}^{(E)},$$

che è una riscrittura equivalente del teorema precedente: la risultante delle forze esterne è uguale alla derivata temporale della quantità di moto totale del sistema.

:::formula{id="7.10" label="Prima equazione cardinale in forma di quantità di moto"}
$$\vec{R}^{(E)} = \frac{d\vec{p}_{tot}}{dt}$$
:::

Questa forma è l'analogo, per un sistema di punti, della forma generale della seconda legge della dinamica già incontrata per il punto materiale ([formula (3.2)](ref:formula/3.2)): la risultante delle forze esterne gioca lo stesso ruolo che la forza totale gioca per un singolo punto, a patto di usare la quantità di moto *totale* del sistema.

### Conservazione della quantità di moto di un sistema

Se la risultante delle forze esterne è nulla — perché il sistema è isolato, oppure perché le forze esterne presenti si bilanciano — la prima equazione cardinale implica immediatamente che $\vec{p}_{tot}$ non cambia nel tempo.

:::formula{id="7.11" label="Conservazione della quantità di moto di un sistema"}
$$\vec{R}^{(E)} = \vec{0} \quad \Longrightarrow \quad \frac{d\vec{p}_{tot}}{dt} = \vec{0} \quad \Longrightarrow \quad \vec{p}_{tot} = \text{costante}$$
:::

In questo caso il centro di massa si muove di moto rettilineo uniforme (o resta in quiete, se $\vec{v}_{CM}=0$). È importante distinguere con attenzione due livelli:

- la quantità di moto **totale** del sistema resta costante;
- le quantità di moto dei **singoli punti** $\vec{p}_i = m_i \vec{v}_i$ in generale continuano a variare nel tempo, perché su ciascun punto agiscono le forze interne (che si cancellano solo nella somma, non punto per punto).

Un caso tipico è quello di un sistema cannone più proiettile, inizialmente fermo: il sistema complessivo è isolato (trascurando l'attrito del cannone col terreno in direzione orizzontale), quindi la sua quantità di moto totale resta nulla prima e dopo lo sparo, anche se le quantità di moto del cannone e del proiettile presi singolarmente saltano bruscamente, in modo uguale e opposto, nell'istante dello sparo.

**Conservazione parziale.** Non sempre tutte le componenti della quantità di moto si conservano. Se la risultante delle forze esterne ha una componente nulla lungo una certa direzione $\hat{u}$ (anche se non è nulla globalmente), allora si conserva solo la componente $p_{tot,u} = \vec{p}_{tot}\cdot\hat{u}$ lungo quella direzione. È il caso, per esempio, di un'esplosione in volo di un proiettile: la forza peso ha componente orizzontale nulla, quindi la componente orizzontale della quantità di moto totale dei frammenti si conserva, mentre quella verticale no, perché la gravità (forza esterna) continua ad agire.

### Esempio svolto: rinculo di un cannone

**Dati.** Un cannone di massa $M = 800\ \text{kg}$, inizialmente fermo su un terreno orizzontale privo di attrito, spara orizzontalmente un proiettile di massa $m = 5,0\ \text{kg}$ con velocità, rispetto al terreno, $v = 400\ \text{m/s}$. Si vuole calcolare la velocità di rinculo $V$ del cannone subito dopo lo sparo.

**Schema e sistema di riferimento.** Si sceglie come sistema l'insieme {cannone + proiettile}. Lungo la direzione orizzontale le uniche forze esterne possibili sarebbero l'attrito col terreno, che per ipotesi è nullo; le forze interne (la spinta della polvere da sparo sul proiettile e la reazione sul cannone) non contribuiscono alla risultante esterna. Si assume l'asse $x$ orizzontale, orientato come la direzione di sparo.

**Equazioni.** Poiché la componente orizzontale della risultante delle forze esterne è nulla, si applica {{formula:7.11}} lungo $x$:

$$p_{tot,x}(\text{prima}) = p_{tot,x}(\text{dopo})$$

Prima dello sparo il sistema è fermo, quindi $p_{tot,x}=0$. Dopo lo sparo,

$$0 = M V + m v .$$

**Soluzione letterale.**

$$V = -\frac{m}{M}v.$$

**Numeri.**

$$V = -\frac{5,0\ \text{kg}}{800\ \text{kg}}\cdot 400\ \text{m/s} = -2,5\ \text{m/s}.$$

**Controllo.** Il segno negativo indica che il cannone rincula in verso opposto al proiettile, come atteso fisicamente; dimensionalmente $\lbrack \text{kg}/\text{kg}\rbrack \cdot\lbrack \text{m/s}\rbrack  = \text{m/s}$ è corretto, e l'ordine di grandezza (pochi metri al secondo, contro le centinaia del proiettile) è coerente con il fatto che $m \ll M$.

:::image{src="assets/5ba94a72-quantita-moto-cannone-proiettile.svg" alt="Grafico a gradini della quantità di moto del cannone, del proiettile e della loro somma in funzione del tempo intorno all'istante dello sparo" caption="Fig. 7.4 — Quantità di moto di cannone e proiettile nell'istante dello sparo: saltano in modo uguale e opposto, mentre la somma resta nulla"}
:::

### Errori tipici

- Applicare la conservazione della quantità di moto senza prima verificare che la risultante delle forze esterne (o la sua componente lungo la direzione di interesse) sia davvero nulla. Un vincolo esterno, anche se non compie lavoro, può comunque avere una risultante non nulla e impedire la conservazione: per esempio in un disco vincolato a un perno, la reazione del perno è una forza esterna che in generale non è nulla, quindi non si può dare per scontata la conservazione di $\vec{P}$ del disco senza controllare esplicitamente questa condizione.

- Confondere la costanza della quantità di moto *totale* del sistema con la costanza delle quantità di moto dei singoli punti: queste ultime variano liberamente per effetto delle forze interne, anche quando $\vec{p}_{tot}$ resta rigorosamente costante.

- Dimenticare che la conservazione può valere solo in una direzione (quella priva di componenti di forze esterne) e tentare di applicarla anche alle componenti dove una forza esterna, come il peso, è presente.

- Scrivere il teorema del moto del centro di massa come se la massa totale moltiplicasse l'accelerazione di un singolo punto qualunque del sistema, anziché l'accelerazione del centro di massa definito tramite la media pesata sulle masse.

## p5 | Momento angolare di un sistema

Il [momento angolare del punto materiale](ref:chapter/5#p3) si estende in modo naturale a un sistema di $N$ punti materiali, somma di tutti i contributi individuali. Come già accaduto per la quantità di moto nella [prima equazione cardinale](ref:chapter/7#p4), ci chiediamo quale equazione governi l'evoluzione temporale di questa grandezza e quale ruolo giochino le forze interne, di cui conosciamo già risultante e momento nulli (ved. [Forze interne ed esterne](ref:chapter/7#p2)).

### Definizione e derivata temporale con polo mobile

**Definizione 7.3** (momento angolare di un sistema di punti). Dato un sistema di $N$ punti materiali di massa $m_i$, posizione $\vec{r}_i$ e velocità $\vec{v}_i$, rispetto a un polo $O$ si definisce

:::formula{id="7.12" label="Momento angolare di un sistema di punti"}
$$\vec{L}_O = \sum_i \vec{r}_i \times m_i \vec{v}_i = \sum_i \vec{L}_{O,i}$$
:::

dove $\vec{r}_i$ è il raggio vettore $OP_i$. Il polo $O$ non deve necessariamente coincidere con l'origine degli assi, e in generale può anche muoversi nel tempo; in tal caso entrambi gli estremi del vettore $\vec{r}_i$ sono in movimento.

Derivando $\vec{L}_O$ rispetto al tempo, con un polo $O$ che si muove con velocità $\vec{v}_O$ rispetto al riferimento inerziale, si ottiene

$$\frac{d\vec{L}_O}{dt} = \sum_i \frac{d\vec{r}_i}{dt}\times m_i\vec{v}_i + \sum_i \vec{r}_i\times m_i\vec{a}_i.$$

Il primo termine contiene $(\vec{v}_i-\vec{v}_O)\times m_i\vec{v}_i$, che si riduce a $-\vec{v}_O\times m_i\vec{v}_i$ perché $\vec{v}_i\times \vec{v}_i=\vec{0}$; il secondo termine, usando $m_i\vec{a}_i=\vec{F}_i=\vec{F}_i^{(E)}+\vec{F}_i^{(I)}$, produce il momento delle forze esterne $\vec{M}^{(E)}=\sum_i \vec{r}_i\times \vec{F}_i^{(E)}$ e quello delle forze interne $\vec{M}^{(I)}$. In definitiva

:::formula{id="7.13" label="Derivata del momento angolare con polo mobile"}
$$\frac{d\vec{L}_O}{dt} = -\vec{v}_O\times m\vec{v}_{CM} + \vec{M}^{(E)} + \vec{M}^{(I)}$$
:::

Qui $m$ è la massa totale del sistema e $\vec{v}_{CM}$ la velocità del centro di massa.

Resta da valutare $\vec{M}^{(I)}$. Considerando la coppia di forze interne $\vec{F}_{i,j}$ (esercitata su $i$ da $j$) e $\vec{F}_{j,i}=-\vec{F}_{i,j}$ (terzo principio), il loro contributo al momento vale

$$\vec{M}_{i,j}^{(I)} = \vec{r}_i\times \vec{F}_{i,j} + \vec{r}_j\times \vec{F}_{j,i} = (\vec{r}_i-\vec{r}_j)\times \vec{F}_{i,j} = -\vec{r}_{i,j}\times \vec{F}_{i,j},$$

dove $\vec{r}_{i,j}=P_iP_j$. Poiché per ipotesi la forza interna è diretta lungo la congiungente dei due punti, $\vec{r}_{i,j}$ è parallelo a $\vec{F}_{i,j}$, e quindi $\vec{M}_{i,j}^{(I)}=\vec{0}$ per ogni coppia. Sommando su tutte le coppie si conclude $\vec{M}^{(I)}=\vec{0}$, coerentemente con quanto già dimostrato per la risultante delle forze interne (ved. {{formula:7.3}}).

### Seconda equazione cardinale

Sostituendo $\vec{M}^{(I)}=\vec{0}$ nella formula precedente si ottiene la forma generale, valida per qualsiasi polo (anche mobile):

$$\frac{d\vec{L}_O}{dt} = \vec{M}^{(E)} - \vec{v}_O\times m\vec{v}_{CM}.$$

Il termine $-\vec{v}_O\times m\vec{v}_{CM}$ è nullo in almeno quattro casi: il polo $O$ è fisso nel riferimento inerziale ($\vec{v}_O=\vec{0}$); il centro di massa è in quiete ($\vec{v}_{CM}=\vec{0}$); il polo coincide con il centro di massa, per cui $\vec{v}_O=\vec{v}_{CM}$ e il prodotto vettoriale di un vettore con se stesso si annulla; oppure $\vec{v}_O$ è parallelo a $\vec{v}_{CM}$ in ogni istante. In tutti questi casi si ottiene la **seconda equazione cardinale**:

:::formula{id="7.14" label="Seconda equazione cardinale"}
$$\frac{d\vec{L}_O}{dt} = \vec{M}^{(E)}$$
:::

**Teorema 7.3** (del momento angolare per un sistema di punti). Supponendo, come stabilito sopra, che le forze interne siano dirette lungo la congiungente delle coppie di punti (così che il loro momento risultante $\vec{M}^{(I)}$ sia nullo), se il polo $O$ è fisso nel riferimento inerziale oppure coincide con il centro di massa del sistema, l'evoluzione nel tempo del momento angolare del sistema è determinata unicamente dal momento risultante delle forze esterne rispetto a $O$; le forze interne non danno alcun contributo. Se le forze interne non fossero centrali, il solo terzo principio non basterebbe a garantire $\vec{M}^{(I)}=\vec{0}$, e l'enunciato andrebbe formulato richiedendo direttamente questa condizione sul momento delle forze interne.

Nel caso del polo nel centro di massa vale un'osservazione ulteriore: anche se il sistema di riferimento del CM è in generale non inerziale (perché traslante con accelerazione $\vec{a}_{CM}$), il momento risultante rispetto al centro di massa è dato dal solo momento delle forze esterne reali, senza contributi delle forze apparenti di trascinamento. Di conseguenza il momento angolare calcolato rispetto al centro di massa assume lo stesso valore sia nel riferimento inerziale sia nel riferimento del centro di massa. Questo è il motivo per cui, nella pratica, il polo nel centro di massa è quasi sempre la scelta più comoda quando il corpo trasla e ruota insieme (un esempio tipico è il corpo rigido in rotolamento, ripreso in [Corpo rigido e suoi moti](ref:chapter/8#p2)).

Quando invece il polo è fisso ma non coincide con il centro di massa e il sistema trasla (come un disco che ruota attorno a un proprio asse fisso), la seconda equazione cardinale si applica direttamente con il momento delle forze esterne reali rispetto a quell'asse, senza alcun termine correttivo, perché $\vec{v}_O=\vec{0}$.

### Conservazione del momento angolare di un sistema

**Teorema 7.4** (conservazione del momento angolare). Se, con un polo scelto come sopra (fisso o nel CM), il momento delle forze esterne è nullo, allora il momento angolare del sistema resta costante nel tempo:

:::formula{id="7.15" label="Conservazione del momento angolare di un sistema"}
$$\vec{M}^{(E)} = \vec{0} \ \Longrightarrow\ \vec{L}_O = \text{costante}$$
:::

Questa situazione si realizza in due casi distinti. Se il sistema è isolato (nessuna forza esterna), il momento angolare si conserva rispetto a qualsiasi polo per cui il termine $-\vec{v}_O\times m\vec{v}_{CM}$ si annulli; in questo caso, come visto nella [prima equazione cardinale](ref:chapter/7#p4), si conserva anche la quantità di moto totale. Se invece sono presenti forze esterne ma il loro momento risultante è nullo solo rispetto a un particolare polo (per esempio perché tutte passano per quel punto, come nel caso delle forze centrali), la conservazione di $\vec{L}$ vale soltanto per quel polo, non per un polo generico. Va sempre ricordato che, cambiando polo, cambia in generale il valore del momento angolare: la conservazione è quindi una proprietà legata alla scelta specifica del polo, non una proprietà intrinseca del sistema.

### Primo teorema di König per il momento angolare

È spesso utile scomporre il momento angolare in un contributo dovuto al moto del centro di massa e un contributo dovuto al moto interno del sistema rispetto al centro di massa. Introduciamo il sistema di riferimento del centro di massa: origine nel CM, assi paralleli a quelli del riferimento inerziale (quindi in generale non inerziale, perché trasla con il CM). In questo riferimento la posizione e la velocità di ogni punto si scrivono $\vec{r}_i = \vec{r}_{CM} + \vec{r}'_i$ e $\vec{v}_i = \vec{v}_{CM} + \vec{v}'_i$.

Prendendo come polo l'origine del riferimento inerziale, il momento angolare totale diventa

$$\vec{L} = \sum_i (\vec{r}_{CM}+\vec{r}'_i)\times m_i(\vec{v}_{CM}+\vec{v}'_i) = \sum_i \vec{r}_{CM}\times m_i\vec{v}_{CM} + \sum_i \vec{r}_{CM}\times m_i\vec{v}'_i + \sum_i \vec{r}'_i\times m_i\vec{v}_{CM} + \sum_i \vec{r}'_i\times m_i\vec{v}'_i.$$

Il primo termine è il momento angolare di un punto fittizio di massa pari alla massa totale $m$, posto nel centro di massa e dotato della sua velocità $\vec{v}_{CM}$; viene chiamato momento angolare del centro di massa, $\vec{r}_{CM}\times m\vec{v}_{CM}$. Il secondo e il terzo termine si annullano, perché contengono rispettivamente $\sum_i m_i\vec{v}'_i = \vec{0}$ e $\sum_i m_i\vec{r}'_i = \vec{0}$ (per definizione di centro di massa nel riferimento del CM). L'ultimo termine è il momento angolare rispetto al centro di massa, indicato con $\vec{L}'$.

Si ottiene così il **primo teorema di König**:

:::formula{id="7.16" label="Primo teorema di König per il momento angolare"}
$$\vec{L} = \vec{r}_{CM}\times m\vec{v}_{CM} + \vec{L}', \qquad \vec{L}' = \sum_i m_i\, \vec{r}'_i\times \vec{v}'_i$$
:::

Il momento angolare del sistema, calcolato rispetto a un polo fisso nel riferimento inerziale, è dunque la somma del momento angolare dovuto al moto del centro di massa e del momento angolare dovuto al moto interno rispetto al centro di massa. Questa scomposizione è lo strumento fondamentale per trattare il corpo rigido: nel caso particolare in cui tutto il moto interno sia una rotazione rigida attorno al centro di massa, in generale $\vec{L}'$ non è parallelo a $\vec{\omega}$, perché il legame tra le due grandezze è mediato dal tensore d'inerzia rispetto al centro di massa, $\vec{L}' = I_{CM}\vec{\omega}$ in senso tensoriale. Solo se il moto è piano (asse di rotazione fisso e perpendicolare al piano del moto) oppure se $\vec{\omega}$ è diretto lungo un asse principale d'inerzia passante per il centro di massa, la relazione si riduce alla forma scalare $\vec{L}' = I_{CM}\vec{\omega}$, come vedremo nel capitolo dedicato (ved. [Teoremi di Huygens-Steiner e di König](ref:chapter/8#p4) e [Ellissoide d'inerzia](ref:chapter/8#p5)).

### Esempio svolto

**Esempio 7.1.** Due punti materiali di massa uguale $m = 0,50\ \text{kg}$ sono fissati agli estremi di un'asta rigida di massa trascurabile, lunga $2R = 0,40\ \text{m}$, e ruotano nel piano orizzontale con velocità angolare costante $\omega = 10\ \text{s}^{-1}$ attorno al centro dell'asta. Il sistema è montato su una piattaforma che trasla con velocità costante $v_0 = 0,80\ \text{m/s}$ lungo una retta fissa. Si vuole calcolare il momento angolare del sistema rispetto a un polo $O$ fisso, giacente sulla retta percorsa dal centro di massa, usando il primo teorema di König.

*Dati*: $m=0,50\ \text{kg}$ per ciascun punto, $R=0,20\ \text{m}$, $\omega=10\ \text{s}^{-1}$, $v_0=0,80\ \text{m/s}$.

*Schema e riferimento*: scegliamo l'asse $z$ perpendicolare al piano del moto e l'asse $x$ lungo la direzione di $v_0$, con il polo $O$ fisso su quella retta.

:::image{src="assets/9ab5bcdb-schema-esempio-due-punti-rotanti.svg" alt="Due punti materiali su una circonferenza di raggio R centrata nel centro di massa CM, con il polo fisso O sulla stessa retta orizzontale percorsa dal centro di massa" caption="Fig. 7.5 — Schema dell'esempio nell'istante considerato: i due punti di massa m ruotano sulla circonferenza di raggio R attorno al centro di massa CM, che percorre la retta fissa passante per il polo O"}
:::

*Momento angolare interno*. Nel riferimento del centro di massa i due punti percorrono una circonferenza di raggio $R$ con velocità relativa di modulo $v' = R\omega$, in direzioni opposte rispetto al centro: entrambi i contributi $m\vec{r}'_i\times\vec{v}'_i$ hanno lo stesso verso (lungo $\hat{u}_z$), quindi si sommano. Usando [formula (5.4)](ref:formula/5.4) per ciascun punto e moltiplicando per due,

$$L' = 2\, m R^2 \omega = 2\cdot(0,50\ \text{kg})\cdot(0,20\ \text{m})^2\cdot(10\ \text{s}^{-1}) = 0,40\ \text{kg}\cdot\text{m}^2/\text{s},$$

diretto lungo $\hat{u}_z$.

*Momento angolare del centro di massa*. Il centro di massa percorre la retta fissa passante per il polo $O$ (stesso asse $x$), quindi in ogni istante $\vec{r}_{CM}(t)$ è parallelo a $\vec{v}_{CM}=v_0\hat{u}_x$: il prodotto vettoriale $\vec{r}_{CM}\times m\vec{v}_{CM}$ è nullo in ogni istante, qualunque sia $t$.

*Soluzione*. Per il primo teorema di König, {{formula:7.16}} applicato a questo caso dà

$$\vec{L}_O(t) = \vec{0} + \vec{L}' = 0,40\ \text{kg}\cdot\text{m}^2/\text{s}\ \hat{u}_z \quad \text{per ogni } t.$$

*Controllo*. Le unità sono corrette: $\text{kg}\cdot\text{m}^2\cdot\text{s}^{-1}$, coerenti con $\lbrack \vec{L}\rbrack =\lbrack \vec{r}\rbrack \lbrack m\rbrack \lbrack \vec{v}\rbrack $. Il risultato è costante nel tempo pur essendo il sistema soggetto, in generale, a forze esterne (le reazioni vincolari dell'asta e della piattaforma): questo non contraddice la seconda equazione cardinale, perché il moto rettilineo del centro di massa lungo una retta passante per il polo rende nullo, istante per istante, il momento di queste forze rispetto a $O$. Si noti che, se il polo fosse scelto fuori da quella retta, il termine $\vec{r}_{CM}\times m\vec{v}_{CM}$ non sarebbe più nullo e il valore di $\vec{L}_O$ cambierebbe, in accordo con l'osservazione che il momento angolare dipende dal polo.

:::image{src="assets/9ab5bcdb-momento-angolare-funzione-distanza-polo.svg" alt="Retta che mostra come il momento angolare rispetto al polo O cresca linearmente con la distanza d dalla retta del centro di massa, a partire dal valore 0,40 chilogrammo metro quadrato al secondo per d uguale zero" caption="Fig. 7.6 — Momento angolare L_O dell'esempio in funzione della distanza d del polo dalla retta percorsa dal centro di massa: resta pari a L' = 0,40 kg·m²/s solo se d = 0, altrimenti cresce linearmente"}
:::

### Errori tipici

**Errore tipico 7.2** (scrittura del prodotto vettoriale). Scrivere $\vec{M} = \vec{f}R$ oppure $\vec{M} = R\times f$ è privo di significato: nel primo caso non esiste alcuna operazione di "prodotto con freccia più lunga"; nel secondo il simbolo $\times$ è un prodotto vettoriale, che si applica solo a due vettori, mentre $R$ e $f$ scritti senza freccia denotano grandezze scalari. In nessun caso $\vec{M}$ (e per lo stesso motivo $\vec{L}$) può avere la stessa direzione del vettore $\vec{f}$ o $\vec{v}$ da cui proviene, perché il prodotto vettoriale produce sempre un vettore ortogonale a entrambi i fattori.

**Errore tipico 7.3** (uguaglianze dimensionalmente o tipologicamente errate). In ogni uguaglianza i due membri devono essere dello stesso tipo: un'espressione vettoriale non può mai essere eguagliata a una scalare, e una grandezza finita non può essere eguagliata a una infinitesima. Un controllo dimensionale e di tipo (vettore contro scalare) individua rapidamente errori di questo genere, che sono più gravi di un semplice errore numerico perché rendono la scrittura priva di significato fisico. Nel calcolo del momento angolare di un sistema questo errore si presenta tipicamente quando si somma impropriamente $\vec{L}'$ (vettore) con una grandezza scalare come $I\omega$ scritta senza specificarne la direzione, o quando si confonde $m\vec{v}_{CM}$ con $m v_{CM}\hat{u}_x$ se la velocità del centro di massa non è effettivamente lungo quell'asse.

**Errore tipico 7.4** (dimenticare la dipendenza dal polo). Applicare la conservazione del momento angolare a un polo diverso da quello per cui il momento delle forze esterne è effettivamente nullo è un errore frequente: la conservazione, quando non deriva dall'isolamento completo del sistema, vale solo per il polo specifico individuato dalla condizione $\vec{M}^{(E)}=\vec{0}$, e non si estende automaticamente a un altro polo.

## p6 | Energia cinetica di un sistema

### Energia cinetica totale e lavoro delle forze interne

Per un sistema di $N$ punti materiali $P_i$, di massa $m_i$ e velocità $\vec{v}_i$ rispetto a un riferimento inerziale $Oxyz$, si definisce l'energia cinetica totale come la somma delle energie cinetiche dei singoli punti

:::formula{id="7.17" label="Energia cinetica totale di un sistema"}
$$E_k = \sum_i E_{k,i} = \sum_i \frac{1}{2}m_i v_i^2$$
:::

Questa è una somma di scalari, non di vettori: a differenza della quantità di moto totale e del momento angolare totale, non esiste un contributo "interno" da sottrarre a priori, perché ogni termine $\frac{1}{2}m_iv_i^2$ è già una grandezza scalare definita punto per punto.

Per ricavare il teorema dell'energia cinetica del sistema si parte, come nel caso del singolo punto materiale (visto nella sezione [Energia cinetica e teorema lavoro-energia](ref:chapter/4#p3)), dal lavoro infinitesimo compiuto sul generico punto $P_i$ per uno spostamento $d\vec{r}_i$. Scomponendo la forza totale su $P_i$ nella parte esterna e nella parte interna,

$$dW_i = \vec{F}_i\cdot d\vec{r}_i = \vec{F}_i^{(E)}\cdot d\vec{r}_i + \vec{F}_i^{(I)}\cdot d\vec{r}_i = dW_i^{(E)} + dW_i^{(I)}$$

A differenza di quanto accade per la risultante delle forze interne (nulla per qualunque sistema, come dimostrato nella sezione [Forze interne ed esterne](ref:chapter/7#p2)), il momento delle forze interne si annulla soltanto a condizione che tali forze siano centrali, cioè dirette lungo la congiungente ciascuna coppia di punti interagenti, o più in generale assumendo che il loro momento risultante sia nullo. Questa stessa ipotesi di centralità è quella che permette, come si vedrà, di scrivere il lavoro delle forze interne in funzione delle sole distanze reciproche tra i punti. In ogni caso, anche sotto tale ipotesi, il lavoro complessivo delle forze interne **non** si annulla in generale. Il contributo $dW^{(I)}$ è infatti composto da tanti termini del tipo

$$\vec{F}_{i,j}\cdot d\vec{r}_i + \vec{F}_{j,i}\cdot d\vec{r}_j = -\vec{F}_{i,j}\cdot d\vec{r}_{i,j}$$

dove $\vec{r}_{i,j} = \vec{r}_j - \vec{r}_i$ è la posizione relativa dei due punti: per il terzo principio $\vec{F}_{j,i} = -\vec{F}_{i,j}$, ma lo spostamento relativo $d\vec{r}_{i,j}$ non è in generale nullo, quindi la somma di questi termini non si annulla. Se inoltre le forze interne sono centrali, ossia $\vec{F}_{i,j}$ è parallela a $\vec{r}_{i,j}$, il lavoro infinitesimo di ciascuna coppia dipende dalla variazione della distanza reciproca. Se le forze sono anche conservative, il lavoro tra due configurazioni dipende solo dalle distanze iniziali e finali; in tal caso si annulla se tali distanze restano costanti, come accade nel corpo rigido.

Integrando il lavoro infinitesimo di ciascun punto da una configurazione $A$ a una configurazione $B$ vale, per ogni singolo punto, il teorema dell'energia cinetica già visto per il punto materiale,

$$W_i = W_i^{(E)} + W_i^{(I)} = \frac{1}{2}m_i v_{i,B}^2 - \frac{1}{2}m_i v_{i,A}^2$$

Sommando su tutti i punti del sistema si ottiene il risultato cercato.

**Teorema 7.5** (dell'energia cinetica per un sistema di punti materiali). Per un sistema di $N$ punti materiali, il lavoro totale compiuto dalle forze esterne e interne tra due configurazioni $A$ e $B$ è pari alla variazione dell'energia cinetica totale del sistema

:::formula{id="7.18" label="Teorema dell'energia cinetica per un sistema"}
$$W^{(E)} + W^{(I)} = \sum_{i=1}^N \frac{1}{2}m_i v_{i,B}^2 - \sum_{i=1}^N \frac{1}{2}m_i v_{i,A}^2 = E_{k,B} - E_{k,A} = \Delta E_k$$
:::

A differenza del teorema dell'energia cinetica del punto materiale, qui il contributo delle forze interne $W^{(I)}$ compare esplicitamente e in generale non si può trascurare: va calcolato o stimato caso per caso (per esempio tramite la deformazione elastica, l'attrito interno, o la dissipazione in un urto anelastico, come si vedrà nella sezione [Urti](ref:chapter/7#p7)).

### Teorema di König per l'energia cinetica

Il teorema dell'energia cinetica non distingue, nella sua forma precedente, quale parte dell'energia sia dovuta al moto d'insieme del sistema e quale al moto interno dei punti attorno al centro di massa. Questa distinzione è fornita dal teorema di König, l'analogo per l'energia cinetica di quello già visto per il momento angolare nella sezione [Momento angolare di un sistema](ref:chapter/7#p5).

**Teorema 7.6** (di König per l'energia cinetica). Sia $O$ un riferimento inerziale e $O'$ il riferimento del centro di massa, con origine in $\vec{r}_{CM}$ e assi che mantengono orientazione fissa rispetto a $O$ (non rotante). Per ogni punto $P_i$ del sistema vale la scomposizione

$$\vec{r}_i = \vec{r}_{CM} + \vec{r}_i', \qquad \vec{v}_i = \vec{v}_{CM} + \vec{v}_i'$$

dove $\vec{v}_i'$ è la velocità di $P_i$ misurata nel riferimento del centro di massa. Allora l'energia cinetica totale calcolata nel riferimento inerziale si scrive come somma dell'energia cinetica del centro di massa e dell'energia cinetica relativa al centro di massa

:::formula{id="7.19" label="Teorema di König per l'energia cinetica"}
$$E_k = \frac{1}{2}M v_{CM}^2 + E_k' = E_{k,CM} + E_k'$$
:::

**Dimostrazione.** Sostituendo $\vec{v}_i = \vec{v}_{CM} + \vec{v}_i'$ nella definizione di $E_k$,

$$E_k = \sum_i \frac{1}{2}m_i v_i^2 = \sum_i \frac{1}{2}m_i\left(\vec{v}_{CM} + \vec{v}_i'\right)^2 = \sum_i \frac{1}{2}m_i v_{CM}^2 + \sum_i \frac{1}{2}m_i v_i'^2 + \sum_i m_i \vec{v}_{CM}\cdot \vec{v}_i'$$

Il primo termine, poiché $v_{CM}$ non dipende da $i$, è $\frac{1}{2}Mv_{CM}^2$, l'energia cinetica che avrebbe un punto materiale di massa pari a quella totale del sistema, concentrata nel centro di massa e animata della sua velocità. Il secondo termine è per definizione $E_k'$, l'energia cinetica calcolata nel riferimento del centro di massa. Il terzo termine si annulla perché

$$\sum_i m_i \vec{v}_{CM}\cdot \vec{v}_i' = \vec{v}_{CM}\cdot \sum_i m_i \vec{v}_i' = 0$$

dato che per definizione di centro di massa la quantità di moto totale nel riferimento del centro di massa è nulla, $\sum_i m_i \vec{v}_i' = \vec{0}$. Si ottiene così {{formula:7.19}}. $\blacksquare$

Il teorema di König mostra dunque che l'energia cinetica totale di un sistema si decompone sempre in due parti: una dovuta al moto di trascinamento del centro di massa, $E_{k,CM} = \frac{1}{2}Mv_{CM}^2$, e una dovuta al moto relativo dei punti rispetto al centro di massa, $E_k'$. Si noti che un risultato analogo non si può ripetere per la quantità di moto totale, perché $\vec{P} = M\vec{v}_{CM}$ mentre $\vec{P}' = \vec{0}$ per costruzione: il teorema di König ha senso solo per energia cinetica e momento angolare, non per la quantità di moto.

### Esempio: due masse rotanti su una piattaforma in moto

Due punti materiali di uguale massa $m = 0,5\ \text{kg}$ sono fissati agli estremi di un'asta rigida di massa trascurabile e lunghezza $2R = 0,40\ \text{m}$, e ruotano nel piano orizzontale con velocità angolare costante $\omega = 10\ \text{s}^{-1}$ attorno al centro dell'asta. Il sistema è montato su una piattaforma che si muove con velocità $v_0 = 0,8\ \text{m/s}$. Si vuole calcolare l'energia cinetica totale del sistema dei due punti.

Il centro di massa del sistema coincide con il centro dell'asta (per simmetria) e si muove solidalmente con la piattaforma con velocità $v_0$, quindi $v_{CM} = v_0$. Applicando il teorema di König,

$$E_k = \frac{1}{2}Mv_{CM}^2 + E_k' = \frac{1}{2}(2m)v_0^2 + E_k' = mv_0^2 + E_k'$$

L'energia cinetica relativa al centro di massa $E_k'$ si può calcolare in due modi equivalenti. Nel primo, osservando che rispetto al centro di massa entrambe le masse descrivono un moto circolare uniforme di raggio $R$ e quindi $|\vec{v}_1'| = |\vec{v}_2'| = \omega R$,

$$E_k' = \frac{1}{2}m\,\omega^2 R^2 + \frac{1}{2}m\,\omega^2 R^2 = m\,\omega^2 R^2$$

Nel secondo modo, poiché il centro di massa giace sull'asse di rotazione, si può usare il momento d'inerzia del sistema rispetto a quell'asse, $I = \sum_i m_i d_i^2 = mR^2 + mR^2 = 2mR^2$, da cui $E_k' = \frac{1}{2}I\omega^2 = m\omega^2 R^2$, in accordo con il primo metodo (il secondo modo verrà ripreso sistematicamente nella sezione sul [Momento d'inerzia](ref:chapter/8#p3)).

Sostituendo i valori numerici $m = 0,5\ \text{kg}$, $v_0 = 0,8\ \text{m/s}$, $\omega = 10\ \text{s}^{-1}$, $R = 0,20\ \text{m}$,

$$E_{k,CM} = mv_0^2 = 0,5\ \text{kg}\cdot (0,8\ \text{m/s})^2 = 0,32\ \text{J}$$

$$E_k' = m\omega^2 R^2 = 0,5\ \text{kg}\cdot(10\ \text{s}^{-1})^2\cdot(0,20\ \text{m})^2 = 2,0\ \text{J}$$

$$E_k = E_{k,CM} + E_k' = 0,32\ \text{J} + 2,0\ \text{J} = 2,32\ \text{J}$$

Il controllo dimensionale è immediato ($\text{kg}\cdot(\text{m/s})^2 = \text{J}$), e l'ordine di grandezza è ragionevole: la quota maggiore di energia cinetica proviene dal moto relativo rotatorio, più rapido del moto di trascinamento della piattaforma, per masse di mezzo chilogrammo con velocità dell'ordine del metro al secondo.

Il teorema di König per l'energia cinetica è particolarmente utile nello studio degli urti: come si vedrà nella sezione [Urti](ref:chapter/7#p7), l'energia cinetica totale di un sistema di due punti si può sempre scrivere come $E_k = \frac{1}{2}(m_1+m_2)v_{CM}^2 + E_k'$, dove il primo termine non varia se la quantità di moto totale si conserva, mentre il secondo, $E_k'$, rappresenta esattamente l'energia disponibile per essere dissipata o restituita durante l'urto.

**Errore tipico 7.5**

- Scrivere $\Delta W$ al posto di $W$, come se il lavoro fosse una funzione di stato: il lavoro delle forze (esterne o interne) è una grandezza definita lungo un cammino, non associata a uno stato del sistema, quindi non va mai indicato con un simbolo di variazione $\Delta$.
- Confondere la variazione di energia cinetica, fornita dal teorema dell'energia cinetica, con la variazione di energia meccanica: il teorema dell'energia cinetica coinvolge sempre il lavoro di *tutte* le forze agenti (comprese quelle conservative), mentre il teorema dell'energia meccanica isola il lavoro delle sole forze non conservative.
- Omettere il segno negativo nel lavoro delle forze interne non conservative: nell'urto completamente anelastico, dove l'energia cinetica relativa finale è nulla, si ha $W^{(I)} = -E_k' < 0$; in un urto anelastico parziale, in cui resta un'energia cinetica relativa finale $E_{k,fin}'$ diversa da zero, il lavoro interno è invece $W^{(I)} = E_{k,fin}' - E_{k,in}'$. Dimenticare questo segno, o applicare sempre $W^{(I)} = -E_k'$ anche quando l'urto non è completamente anelastico, equivale a non riconoscere che l'energia meccanica del sistema diminuisce in presenza di dissipazione interna.
- Calcolare l'energia cinetica trascurando una componente della velocità, per esempio scrivendo $E_k = \frac{1}{2}mv_x^2$ invece di $\frac{1}{2}m(v_x^2+v_y^2)$ nel moto nel piano: l'energia cinetica richiede sempre il modulo al quadrato della velocità completa.

## p7 | Urti

### Definizioni e grandezze conservate

**Definizione 7.4** (Urto). Un urto è un evento isolato nel quale una forza relativamente intensa agisce per un tempo relativamente breve (trascurabile rispetto al tempo di osservazione) su due o più corpi in contatto tra loro. Se $L$ e $R$ sono i due corpi, $L$ esercita su $R$ una forza $\vec{F}(t)$ e, per il terzo principio della dinamica, $R$ esercita su $L$ la forza $-\vec{F}(t)$; $\vec{F}(t)$ è detta forza impulsiva.

Le forze impulsive che si manifestano durante l'urto sono forze interne al sistema costituito dai corpi che urtano, perché nascono dall'interazione reciproca e obbediscono al terzo principio. Se $\vec{F}_{est}(t)$ è la risultante delle forze esterne agenti durante l'urto, la prima equazione cardinale implica che la variazione della quantità di moto totale del sistema tra l'istante immediatamente precedente e quello immediatamente successivo all'urto è pari all'impulso esterno totale

$$\Delta\vec{P} = \vec{P}_{fin} - \vec{P}_{in} = \int \vec{F}_{est}(t)\, dt$$

Una forza esterna finita può produrre un impulso non nullo durante un urto di durata finita. La quantità di moto totale si conserva esattamente quando l'impulso esterno totale è nullo. Nel limite idealizzato in cui la durata dell'urto tende a zero (urto istantaneo), se le forze esterne presenti restano di intensità finita (cioè non sono anch'esse impulsive), il loro impulso $\int \vec{F}_{est}(t)\, dt$ tende a zero insieme alla durata dell'intervallo di integrazione, e quindi la quantità di moto totale del sistema si conserva in ottima approssimazione attraverso l'urto, qualunque sia la natura delle forze interne. È questa approssimazione, valida quando le forze esterne sono finite e la durata dell'urto è trascurabile rispetto ai tempi caratteristici del moto, che si userà sistematicamente nel seguito del capitolo.

:::formula{id="7.20" label="Conservazione della quantità di moto in un urto"}
$$\vec{P}_{in} = m_1\vec{v}_{1,in} + m_2\vec{v}_{2,in} = m_1\vec{v}_{1,fin} + m_2\vec{v}_{2,fin} = \vec{P}_{fin}$$
:::

Di conseguenza anche la velocità del centro di massa non viene alterata dall'urto, poiché $\vec{P} = (m_1+m_2)\vec{v}_{CM}$ resta costante; variano invece le quantità di moto dei singoli punti per effetto dell'impulso della forza di interazione. La conservazione di $\vec{P}$ dipende solo dal fatto che il sistema sia isolato durante l'urto (ossia che le uniche forze impulsive siano interne), indipendentemente dal tipo di forze interne in gioco.

Lo stesso non vale per l'energia. A priori non è noto se le forze interne che si sviluppano durante l'urto siano conservative, quindi non si può assumere che l'energia meccanica, né che l'energia cinetica, si conservino. Conviene allora limitare l'attenzione alle sole energie cinetiche: se nell'energia meccanica $E_m$ si includono soltanto le energie potenziali associate a forze esterne (che non variano apprezzabilmente, essendo trascurabili gli spostamenti durante l'urto), e si suppone che le eventuali energie potenziali interne (per esempio quelle di deformazione elastica residua) abbiano lo stesso valore immediatamente prima e immediatamente dopo l'urto, allora la variazione di energia meccanica del sistema coincide con la sola variazione di energia cinetica.

:::formula{id="7.21" label="Variazione dell'energia meccanica in un urto"}
$$\Delta E_m = \Delta E_k$$
:::

Questa osservazione permette di classificare gli urti in base a cosa accade all'energia cinetica. Un urto si dice **elastico** se, oltre alla quantità di moto, si conserva anche l'energia cinetica totale. Un caso tipico in cui questo si realizza è quello in cui le forze interne di interazione sono conservative e i corpi, dopo essersi deformati elasticamente durante l'urto, recuperano istantaneamente la loro configurazione iniziale: in tal caso l'energia potenziale interna associata alla deformazione è la stessa prima e dopo l'urto, e la conservazione dell'energia meccanica si traduce in conservazione dell'energia cinetica. Un urto si dice **anelastico** se la quantità di moto si conserva (sistema isolato durante l'urto) ma l'energia cinetica non si conserva: parte di essa viene assorbita nell'interazione e convertita in energia potenziale di deformazione permanente o in calore; è il caso più generale di urto. Il caso limite in cui i due corpi, dopo l'urto, restano attaccati e si muovono con la stessa velocità è detto urto **completamente anelastico**.

È un errore comune ritenere che, poiché il sistema è isolato durante l'urto, debba conservarsi anche l'energia cinetica: la conservazione della quantità di moto dipende solo dall'assenza di forze esterne impulsive, mentre la conservazione dell'energia dipende anche dalla natura (conservativa o no) delle forze interne che agiscono durante l'interazione.

**Errore tipico 7.6.** In presenza di vincoli esterni (un perno, una guida), la quantità di moto del sistema che urta non si conserva in generale, perché la reazione vincolare è una forza esterna impulsiva; in questi casi conviene scegliere come polo il punto del vincolo stesso: se la forza vincolare è applicata proprio lì, il suo momento è nullo e si può invocare la conservazione del momento angolare rispetto a quel polo, anche quando la quantità di moto non si conserva.

### Urti completamente anelastici

Nell'urto completamente anelastico i due punti materiali, di masse $m_1$ e $m_2$, restano attaccati dopo l'urto formando un unico corpo puntiforme di massa $M = m_1 + m_2$. Indicando con $\vec{v}_1$ e $\vec{v}_2$ le velocità iniziali e con $\vec{v}_{fin}$ la velocità comune (misurata nel riferimento del laboratorio) immediatamente dopo l'urto, la conservazione della quantità di moto dà

:::formula{id="7.22" label="Velocità finale nell'urto completamente anelastico"}
$$\vec{v}_{fin} = \frac{m_1\vec{v}_1 + m_2\vec{v}_2}{m_1 + m_2} = \vec{v}_{CM}$$
:::

ossia la velocità finale comune coincide con la velocità del centro di massa, che l'urto non altera. Questa relazione vale identicamente in una, due o tre dimensioni, poiché è un'uguaglianza vettoriale.

Per l'energia cinetica, applicando il teorema di König al sistema prima dell'urto, $E_{k,in} = \frac{1}{2}Mv_{CM}^2 + E_k'$, dove $E_k'$ è l'energia cinetica nel sistema del centro di massa; dopo l'urto i due punti sono fermi tra loro, quindi $E_{k,fin} = \frac{1}{2}Mv_{CM}^2$. Ne segue che l'energia cinetica finale è sempre minore di quella iniziale, e la quantità dissipata è esattamente $E_k'$:

:::formula{id="7.23" label="Energia dissipata nell'urto completamente anelastico"}
$$\Delta E_k = E_{k,fin} - E_{k,in} = \frac{1}{2}(m_1+m_2)v_{CM}^2 - \frac{1}{2}m_1v_1^2 - \frac{1}{2}m_2v_2^2 = -E_k'$$
:::

Il lavoro compiuto, a spese dell'energia cinetica iniziale, per produrre la deformazione permanente dei due corpi non viene recuperato: le forze interne che si sviluppano in un urto completamente anelastico non sono conservative.

**Esempio 7.2.** Un carrello di massa $m_1 = 2,0$ kg si muove con velocità $v_1 = 3,0$ m/s lungo una rotaia priva di attrito e urta in modo completamente anelastico un secondo carrello di massa $m_2 = 1,0$ kg, inizialmente fermo ($v_2 = 0$). Calcoliamo la velocità finale comune e l'energia dissipata.

Dati: $m_1 = 2,0$ kg, $v_1 = 3,0$ m/s, $m_2 = 1,0$ kg, $v_2 = 0$.

Schema: moto rettilineo lungo un unico asse $x$; il sistema $m_1+m_2$ è isolato durante l'urto (le rotaie sono lisce e non esercitano forze impulsive).

Applicando {{formula:7.22}} lungo $x$

$$v_{fin} = \frac{m_1v_1 + m_2v_2}{m_1+m_2} = \frac{2,0\text{ kg}\cdot 3,0\text{ m/s} + 0}{3,0\text{ kg}} = 2,0\text{ m/s}$$

L'energia cinetica iniziale è

$$E_{k,in} = \frac{1}{2}(2,0\text{ kg})(3,0\text{ m/s})^2 = 9,0\text{ J}$$

mentre quella finale è

$$E_{k,fin} = \frac{1}{2}(3,0\text{ kg})(2,0\text{ m/s})^2 = 6,0\text{ J}$$

Quindi la variazione di energia cinetica è $\Delta E_k = E_{k,fin}-E_{k,in} = -3,0$ J, e l'energia dissipata, pari all'opposto di questa variazione, è $E_{diss} = E_{k,in}-E_{k,fin} = 3,0$ J: un terzo dell'energia cinetica iniziale si è convertita in deformazione e calore. Il controllo dimensionale è immediato (joule) e l'ordine di grandezza è ragionevole, essendo la velocità finale compresa tra $0$ e $v_1$, come richiesto dalla media pesata delle masse.

Lo stesso schema si applica, in buona approssimazione, quando prima dell'urto uno dei due corpi è collegato a una forza esterna conservativa (per esempio una molla): se l'urto avviene nella posizione in cui tale forza è nulla all'istante del contatto (ad esempio nella posizione di riposo della molla), ciò non garantisce da solo l'isolamento del sistema durante l'urto, perché la posizione del corpo può variare leggermente nel corso dell'interazione e la forza esterna, nulla all'istante iniziale, può diventare non nulla durante l'urto; in un intervallo di durata finita essa potrebbe quindi impartire un impulso esterno non trascurabile. Se però, come si assume nella definizione di urto, la durata dell'interazione è sufficientemente breve rispetto ai tempi caratteristici del moto nelle fasi precedente e successiva, lo spostamento del corpo durante l'urto resta trascurabile e con esso l'impulso trasmesso dalla forza esterna, che risulta allora trascurabile rispetto alla variazione di quantità di moto prodotta dalle forze impulsive interne. In questa approssimazione il sistema si può considerare istantaneamente isolato durante l'urto e si può applicare la conservazione della quantità di moto esattamente come sopra, esattamente come nell'esempio discusso in apertura del capitolo sulla [quantità di moto e impulso](ref:chapter/3#p3). Nelle fasi precedente e successiva all'urto, invece, il sistema non è isolato e vale la conservazione dell'energia meccanica, non quella della quantità di moto.

### Urti elastici

Un urto si dice elastico quando si conservano sia la quantità di moto totale sia l'energia cinetica totale:

:::formula{id="7.24" label="Leggi di conservazione nell'urto elastico"}
$$\vec{P}_{in} = \vec{P}_{fin} \qquad E_{k,in} = E_{k,fin}$$
:::

Nel caso unidimensionale, con i due corpi che si muovono prima e dopo l'urto lungo la stessa retta, queste due equazioni scalari bastano a determinare le due incognite $v_{1,fin}$ e $v_{2,fin}$ in funzione delle velocità iniziali $v_{1,in}$, $v_{2,in}$.

Conviene lavorare nel sistema di riferimento del centro di massa, dove la quantità di moto totale è nulla per definizione:

$$m_1 v_{1,in}' = -m_2 v_{2,in}' \qquad m_1 v_{1,fin}' = -m_2 v_{2,fin}'$$

Sostituendo nella conservazione dell'energia cinetica scritta nel riferimento del CM e usando $v_{2,in}' = -\dfrac{m_1}{m_2}v_{1,in}'$, $v_{2,fin}' = -\dfrac{m_1}{m_2}v_{1,fin}'$, si trova $v_{1,in}'^2 = v_{1,fin}'^2$. Questa uguaglianza dei quadrati ammette, oltre alla soluzione $v_{1,fin}' = -v_{1,in}'$, anche la soluzione banale $v_{1,fin}' = v_{1,in}'$, che corrisponderebbe a un moto in cui le velocità non cambiano affatto, ossia i due corpi non interagiscono realmente tra loro. Per scartare questa soluzione occorre imporre la condizione fisica dell'urto: i due corpi devono avvicinarsi tra loro prima dell'urto e separarsi dopo l'urto, ossia la loro velocità relativa deve invertire il segno passando dall'istante iniziale a quello finale. Poiché nel riferimento del CM la velocità relativa è proporzionale a $v_{1}'$, questa condizione seleziona la soluzione con segno opposto: nel riferimento del centro di massa ciascuna velocità cambia soltanto di segno durante l'urto elastico, $v_{1,fin}' = -v_{1,in}'$. Tornando al riferimento del laboratorio tramite $v_{1,fin} = v_{1,fin}' + v_{CM} = 2v_{CM} - v_{1,in}$ e sostituendo $v_{CM} = \dfrac{m_1v_{1,in}+m_2v_{2,in}}{m_1+m_2}$, si ottengono le velocità finali nel riferimento del laboratorio:

:::formula{id="7.25" label="Velocità finali nell'urto elastico unidimensionale"}
$$v_{1,fin} = \frac{(m_1-m_2)v_{1,in} + 2m_2v_{2,in}}{m_1+m_2} \qquad v_{2,fin} = \frac{(m_2-m_1)v_{2,in} + 2m_1v_{1,in}}{m_1+m_2}$$
:::

**Esempio 7.3.** Due sfere si muovono lungo la stessa retta con $m_1 = 2,0$ kg, $v_{1,in} = 4,0$ m/s e $m_2 = 1,0$ kg, $v_{2,in} = -2,0$ m/s, e urtano elasticamente. Calcoliamo le velocità finali e verifichiamo la conservazione dell'energia.

Dati: $m_1=2,0$ kg, $v_{1,in}=4,0$ m/s, $m_2=1,0$ kg, $v_{2,in}=-2,0$ m/s.

Applicando {{formula:7.25}}:

$$v_{1,fin} = \frac{(2,0-1,0)\cdot 4,0 + 2\cdot 1,0\cdot(-2,0)}{3,0} = \frac{4,0-4,0}{3,0} = 0\text{ m/s}$$

$$v_{2,fin} = \frac{(1,0-2,0)\cdot(-2,0) + 2\cdot 2,0\cdot 4,0}{3,0} = \frac{2,0+16}{3,0} = 6,0\text{ m/s}$$

Verifica della quantità di moto: $P_{in} = 2,0\cdot 4,0 + 1,0\cdot(-2,0) = 6,0$ kg·m/s; $P_{fin} = 2,0\cdot 0 + 1,0\cdot 6,0 = 6,0$ kg·m/s. Verifica dell'energia: $E_{k,in} = \frac{1}{2}(2,0)(4,0)^2 + \frac{1}{2}(1,0)(-2,0)^2 = 16+2,0 = 18$ J; $E_{k,fin} = \frac{1}{2}(2,0)(0)^2 + \frac{1}{2}(1,0)(6,0)^2 = 18$ J. Entrambe le grandezze sono conservate, come richiesto.

In generale, nel caso particolare $m_1 = m_2$, le velocità iniziali e finali risultano scambiate ($v_{1,fin}=v_{2,in}$, $v_{2,fin}=v_{1,in}$); se invece $m_2 \gg m_1$ e $v_{2,in}=0$, si ritrova $v_{1,fin}\approx -v_{1,in}$ (rimbalzo contro una parete fissa) e $v_{2,fin}\approx 0$.

:::image{src="assets/e55426ce-velocita-finali-urto-elastico-vs-rapporto-masse.svg" alt="Grafico di v1 finale su v1 iniziale e v2 finale su v1 iniziale in funzione di m2 su m1" caption="Fig. 7.7 — Velocità finali dell'urto elastico unidimensionale, con v2,in = 0, in funzione del rapporto delle masse m2/m1: per m1 = m2 le velocità si scambiano, per m2 molto maggiore di m1 il corpo 1 rimbalza con velocità opposta a quella iniziale."}
:::

Quando i due corpi, invece di separarsi completamente dopo l'urto o restare attaccati, si separano parzialmente dissipando solo una frazione dell'energia cinetica, si introduce il **coefficiente di restituzione** $e$, definito nel sistema di riferimento del centro di massa come il rapporto (cambiato di segno) tra quantità di moto (o velocità) finale e iniziale di ciascun punto rispetto al CM:

:::formula{id="7.26" label="Coefficiente di restituzione"}
$$e = -\frac{p_{1,fin}'}{p_{1,in}'} = -\frac{v_{1,fin}'}{v_{1,in}'} = -\frac{p_{2,fin}'}{p_{2,in}'} = -\frac{v_{2,fin}'}{v_{2,in}'}$$
:::

Ripercorrendo lo stesso procedimento visto per l'urto elastico, ma senza imporre $v_{1,fin}' = -v_{1,in}'$ bensì $v_{1,fin}' = -e\,v_{1,in}'$, si ottengono le velocità finali nel riferimento del laboratorio in funzione di $e$:

:::formula{id="7.27" label="Velocità finale in funzione del coefficiente di restituzione"}
$$v_{1,fin} = \frac{(e+1)m_2v_{2,in} + (m_1-em_2)v_{1,in}}{m_1+m_2}$$
:::

e analogamente per $v_{2,fin}$ scambiando gli indici $1 \leftrightarrow 2$. L'energia cinetica finale nel riferimento del CM risulta proporzionale a quella iniziale secondo $E_k'^{,fin} = e^2 E_k'^{,in}$, da cui la variazione relativa di energia cinetica nell'urto:

:::formula{id="7.28" label="Variazione relativa di energia cinetica tramite il coefficiente di restituzione"}
$$\frac{\Delta E_k'}{E_k'^{,in}} = e^2 - 1$$
:::

Per $e=1$ l'energia cinetica si conserva integralmente e si ritrova l'urto elastico; per $e=0$ si ha $v_{1,fin}'=v_{2,fin}'=0$ (nessuna velocità relativa residua rispetto al CM), ossia l'urto completamente anelastico, in cui tutta l'energia cinetica $E_k'$ calcolata nel riferimento del CM viene dissipata. Valori intermedi $0<e<1$ descrivono gli urti anelastici reali, in cui i corpi si separano ma con una velocità relativa inferiore a quella d'impatto.

:::image{src="assets/e55426ce-energia-dissipata-vs-coefficiente-restituzione.svg" alt="Grafico di (E_k' finale meno E_k' iniziale) su E_k' iniziale uguale a e al quadrato meno uno, per e tra 0 e 1" caption="Fig. 7.8 — Variazione relativa di energia cinetica nel riferimento del centro di massa in funzione del coefficiente di restituzione e: per e=1 l'energia si conserva (urto elastico), per e=0 si dissipa tutta E_k' (urto completamente anelastico)."}
:::

### Urti obliqui

Quando le velocità iniziali e finali non giacciono tutte sulla stessa retta, l'urto si dice obliquo (o bidimensionale) e la conservazione della quantità di moto deve essere imposta come uguaglianza vettoriale, che equivale a due equazioni scalari indipendenti ottenute proiettando lungo due assi cartesiani $x$ e $y$ nel piano del moto:

$$m_1v_{1x,in} + m_2v_{2x,in} = m_1v_{1x,fin} + m_2v_{2x,fin}$$

$$m_1v_{1y,in} + m_2v_{2y,in} = m_1v_{1y,fin} + m_2v_{2y,fin}$$

Se l'urto è anche completamente anelastico, la velocità finale comune si ottiene direttamente proiettando la relazione {{formula:7.22}} sui due assi, senza bisogno dell'ipotesi di conservazione dell'energia (che in generale non vale). Se invece l'urto è elastico, alle due equazioni di conservazione della quantità di moto si aggiunge la conservazione dell'energia cinetica totale; tuttavia, a differenza del caso unidimensionale, in due dimensioni le incognite (le due componenti di ciascuna velocità finale, cioè quattro incognite scalari) sono più delle equazioni di conservazione disponibili (tre), e il problema resta indeterminato a meno di informazioni aggiuntive, tipicamente la direzione di uno dei due corpi dopo l'urto (nota, per esempio, dalla geometria dell'urto o dalla direzione di uno dei due angoli di diffusione).

**Esempio 7.4.** Una sfera di massa $m_1 = 2,0$ kg si muove con velocità $v_0 = 6,0$ m/s lungo l'asse $x$ e urta elasticamente una seconda sfera identica, di massa $m_2 = 2,0$ kg, inizialmente ferma. Dopo l'urto la prima sfera prosegue formando un angolo $\theta_1 = 30°$ con la direzione iniziale. Calcoliamo le velocità finali delle due sfere e la direzione della seconda.

Dati: $m_1=m_2=m=2,0$ kg; $v_0=6,0$ m/s; $\theta_1=30°$.

Schema: assi $x$ (direzione iniziale di $m_1$) e $y$ perpendicolare nel piano del moto; il sistema è isolato durante l'urto; l'angolo $\theta_2$ della seconda sfera è misurato dall'asse $x$ dalla parte opposta rispetto a $\theta_1$, come richiesto dalla componente $y$ nulla della quantità di moto totale iniziale.

Le due equazioni di conservazione della quantità di moto e quella dell'energia cinetica, con masse uguali, si scrivono

$$v_0 = v_{1,fin}\cos\theta_1 + v_{2,fin}\cos\theta_2 \qquad 0 = v_{1,fin}\sin\theta_1 - v_{2,fin}\sin\theta_2 \qquad v_0^2 = v_{1,fin}^2 + v_{2,fin}^2$$

Ricavando $v_{2,fin}\cos\theta_2$ e $v_{2,fin}\sin\theta_2$ dalle prime due equazioni, elevando al quadrato, sommando e confrontando con la terza equazione si ottiene, dopo semplificazione,

$$v_{1,fin} = v_0\cos\theta_1 \qquad v_{2,fin} = v_0\sin\theta_1 \qquad \theta_2 = 90° - \theta_1$$

Numericamente

$$v_{1,fin} = 6,0\text{ m/s}\cdot\cos 30° \approx 5,2\text{ m/s} \qquad v_{2,fin} = 6,0\text{ m/s}\cdot\sin 30° = 3,0\text{ m/s} \qquad \theta_2 = 60°$$

Verifica della quantità di moto lungo $x$: $v_{1,fin}\cos 30° + v_{2,fin}\cos 60° \approx 4,5+1,5 = 6,0$ m/s, pari a $v_0$. Verifica dell'energia: $v_{1,fin}^2+v_{2,fin}^2 \approx 27+9 = 36\text{ m}^2/\text{s}^2 = v_0^2$. In questo caso particolare di masse uguali, le due velocità finali risultano sempre perpendicolari tra loro ($\theta_1+\theta_2=90°$), una proprietà caratteristica dell'urto elastico tra masse identiche con una inizialmente ferma.

:::image{src="assets/e55426ce-traiettorie-urto-obliquo-elastico.svg" alt="Due semirette dall'origine, una a 30 gradi sopra l'asse x e una a 60 gradi sotto, perpendicolari tra loro" caption="Fig. 7.9 — Direzioni delle due sfere identiche dopo l'urto elastico obliquo dell'esempio: la prima si muove a θ1 = 30° dall'asse x, la seconda a θ2 = 60° dalla parte opposta; le due traiettorie risultano perpendicolari tra loro."}
:::

**Esempio 7.5.** Due automobili identiche, ciascuna di massa $m = 1,0\cdot 10^3$ kg, si scontrano a un incrocio: la prima viaggia lungo $x$ con velocità $v_{1,in}=15$ m/s, la seconda lungo $y$ con velocità $v_{2,in}=10$ m/s; dopo l'urto, che è completamente anelastico, le due vetture restano incastrate e si muovono insieme. Calcoliamo il modulo e la direzione della velocità finale.

Dati: $m_1=m_2=m=1,0\cdot 10^3$ kg; $\vec{v}_{1,in}=(15;\,0)$ m/s; $\vec{v}_{2,in}=(0;\,10)$ m/s.

Schema: assi $x$ (direzione della prima auto) e $y$ (direzione della seconda), origine nel punto d'urto; il sistema delle due auto è isolato durante l'urto (le forze d'attrito col suolo, finite, non sono impulsive).

Proiettando la conservazione della quantità di moto sui due assi, con $M=2m$

$$v_{x}' = \frac{m\cdot 15\text{ m/s} + m\cdot 0}{2m} = 7,5\text{ m/s} \qquad v_{y}' = \frac{m\cdot 0 + m\cdot 10\text{ m/s}}{2m} = 5,0\text{ m/s}$$

Il modulo della velocità finale è

$$v' = \sqrt{v_x'^2+v_y'^2} = \sqrt{(7,5)^2+(5,0)^2}\text{ m/s} \approx 9,0\text{ m/s}$$

e la direzione, misurata rispetto all'asse $x$, è $\varphi = \arctan(v_y'/v_x') = \arctan(5,0/7,5) \approx 34°$. Il controllo di coerenza: il modulo di $\vec{v}'$ è compreso tra $0$ e $\sqrt{15^2+10^2}\text{ m/s}\approx 18$ m/s, come deve essere per una media pesata vettoriale delle velocità iniziali.

**Errore tipico 7.7.** Nel risolvere un urto obliquo è scorretto sommare i moduli delle quantità di moto iniziali per ottenere il modulo della quantità di moto finale: la conservazione vale componente per componente (o, equivalentemente, come somma vettoriale), e solo dopo aver sommato le componenti si calcola il modulo del vettore risultante. È altrettanto scorretto, in un urto obliquo non completamente anelastico, imporre la sola conservazione dell'energia cinetica trascurando che le due componenti della quantità di moto forniscono due equazioni scalari distinte, necessarie entrambe per determinare il moto.
