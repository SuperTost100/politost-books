---
chapter: 4
title: Lavoro ed energia
---

## p1 | Introduzione

Per descrivere il moto non basta sapere come varia la velocità: occorre anche capire quanta energia una forza trasferisce lungo il percorso. In questo capitolo il lavoro collega la forza applicata allo spostamento effettivo e permette di affrontare problemi di moto senza ricostruire ogni dettaglio della traiettoria nel tempo. L’energia cinetica e il lavoro delle forze chiariscono poi come cambiano velocità e stato energetico di un sistema.

È utile saper applicare le leggi della dinamica del punto e descrivere il moto e le forze in forma vettoriale. Con queste basi, imparerai a calcolare il lavoro come integrale lungo un cammino, anche quando la traiettoria è curva, e a distinguere il lavoro dalla potenza, che misura la rapidità del trasferimento di energia. Saprai usare il teorema dell’energia cinetica per ricavare una velocità, tenendo conto anche del lavoro dissipativo dell’attrito. Infine, riconoscerai quando una forza è conservativa, assocerai a essa un’energia potenziale e userai la conservazione dell’energia meccanica per risolvere problemi e interpretare gli equilibri. Questi strumenti saranno utili nello studio delle forze centrali e dei sistemi di punti materiali.

## p2 | Lavoro e integrali di linea

### Definizione di lavoro come integrale di linea

Si consideri un punto materiale che si sposta lungo una traiettoria $\gamma$ dalla posizione $A$ alla posizione $B$, sotto l'azione di una forza $\vec{F}(x,y,z)$ (eventualmente variabile punto per punto). Si definisce **lavoro elementare** della forza, compiuto durante uno spostamento infinitesimo $d\vec{r}$, la quantità scalare

$$\delta W = \vec{F}(x,y,z)\cdot d\vec{r} .$$

Il prodotto scalare rende conto del fatto che solo la componente della forza parallela allo spostamento compie lavoro: se $\theta$ è l'angolo fra $\vec{F}$ e $d\vec{r}$, allora $\delta W = F\cos\theta\, ds = F_T\, ds$, dove $F_T$ è la componente tangenziale della forza e $ds = |d\vec{r}|$ è l'elemento di lunghezza d'arco.

Il **lavoro totale** compiuto lungo l'intero cammino $\gamma$ da $A$ a $B$ si ottiene sommando (integrando) i contributi infinitesimi $\delta W$:

:::formula{id="4.1" label="Lavoro come integrale di linea"}
$$W_{AB} = \int_{A,\gamma}^{B} \vec{F}(x,y,z)\cdot d\vec{r}$$
:::

In coordinate cartesiane, scrivendo $\vec{F} = F_x\hat{u}_x + F_y\hat{u}_y + F_z\hat{u}_z$ e $d\vec{r} = dx\,\hat{u}_x + dy\,\hat{u}_y + dz\,\hat{u}_z$, il prodotto scalare si traduce in una somma di integrali in ciascuna variabile:

:::formula{id="4.2" label="Lavoro in componenti cartesiane"}
$$W_{AB} = \int_{A,\gamma}^{B} \big[F_x(x,y,z)\,dx + F_y(x,y,z)\,dy + F_z(x,y,z)\,dz\big]$$
:::

L'unità di misura del lavoro è il joule, definito dal prodotto dell'unità di forza per l'unità di lunghezza: $\lbrack W\rbrack  = \lbrack F\rbrack \lbrack L\rbrack  = \lbrack M\rbrack \lbrack L\rbrack ^2\lbrack T\rbrack ^{-2}$, cioè $1\ \text{J} = 1\ \text{N} \times 1\ \text{m}$. Si compie un lavoro di 1 J quando una forza costante di 1 N sposta il punto materiale di 1 m nella propria direzione.

Il segno del lavoro elementare $\delta W$ dipende dall'angolo $\theta$ tra la forza e lo spostamento istantaneo: è positivo (lavoro **motore**) se $0 \le \theta < \pi/2$, nullo se $\theta = \pi/2$, negativo (lavoro **resistente**) se $\pi/2 < \theta \le \pi$. Se l'angolo $\theta$ resta nello stesso intervallo per tutto il cammino, cioè se la componente tangenziale $F_T$ mantiene lo stesso segno, anche il lavoro totale $W_{AB}$ ha quel segno; se invece $\theta$ varia lungo il percorso, il segno di $W_{AB}$ non è deciso dal valore dell'angolo in un singolo punto, ma dal risultato dell'integrale, che somma contributi di segno eventualmente diverso. In particolare il lavoro elementare è nullo anche quando la risultante delle forze è nulla, oppure quando non c'è spostamento: una forza perpendicolare alla traiettoria in ogni suo punto (come la reazione normale di un vincolo liscio) non compie mai lavoro.

### Proprietà del lavoro

Il lavoro gode di due proprietà additive, conseguenza immediata della linearità del prodotto scalare e dell'integrale.

Se sul punto agiscono più forze $\vec{F}_1, \vec{F}_2, \vec{F}_3, \dots$, il lavoro della loro risultante è la somma dei lavori delle singole forze lungo lo stesso cammino:

:::formula{id="4.3" label="Additività del lavoro rispetto alle forze"}
$$W_{1,AB} + W_{2,AB} + W_{3,AB} + \dots = \int_{A,\gamma}^{B} \vec{F}_1\cdot d\vec{r} + \int_{A,\gamma}^{B} \vec{F}_2\cdot d\vec{r} + \dots = \int_{A,\gamma}^{B} \vec{F}\cdot d\vec{r} = W_{AB}$$
:::

Se invece il cammino si divide in due tratti consecutivi, da $A$ a $B$ e da $B$ a $C$, il lavoro totale da $A$ a $C$ è la somma dei lavori sui due tratti:

:::formula{id="4.4" label="Additività del lavoro rispetto al cammino"}
$$W_{AB} + W_{BC} = \int_{A,\gamma}^{B} \vec{F}\cdot d\vec{r} + \int_{B,\gamma}^{C} \vec{F}\cdot d\vec{r} = \int_{A,\gamma}^{C} \vec{F}\cdot d\vec{r} = W_{AC}$$
:::

Queste due proprietà sono il motivo per cui, in presenza di più forze, si può sempre scegliere se calcolare il lavoro di ciascuna forza separatamente e poi sommare, oppure calcolare prima la forza risultante.

### Calcolo del lavoro lungo un cammino parametrico

In generale $\vec{F}$ non è costante e il cammino $\gamma$ non è una retta: per calcolare l'integrale {{formula:4.2}} occorre esprimere le variabili $x, y, z$ (o le coordinate polari, o l'angolo $\theta$) in funzione di un unico parametro, in modo da ridurre l'integrale di linea a un integrale ordinario in una sola variabile.

Se il cammino è assegnato direttamente in forma parametrica vettoriale $\vec{r}(u) = x(u)\hat{u}_x + y(u)\hat{u}_y + z(u)\hat{u}_z$, con $u$ che varia da $u_A$ (corrispondente ad $A$) a $u_B$ (corrispondente a $B$), l'integrale di linea si riduce direttamente a un integrale ordinario nella variabile $u$:

:::formula{id="4.5" label="Lavoro lungo un cammino parametrizzato"}
$$W_{AB} = \int_{u_A}^{u_B} \vec{F}(\vec{r}(u)) \cdot \frac{d\vec{r}}{du}\, du$$
:::

questa è la formula operativa da applicare ogni volta che il cammino è fornito tramite una parametrizzazione $\vec r(u)$, qualunque sia il significato geometrico del parametro $u$ (tempo, angolo, ascissa curvilinea, ...).

Il procedimento generale è il seguente:

1. si scrive l'equazione del cammino $\gamma$ (per esempio una retta $y = ax+b$, una parabola, un arco di circonferenza);
2. si scelgono come variabile indipendente una delle coordinate (o il parametro naturale, come l'angolo $\theta$ nel moto circolare), e si esprimono le altre variabili e i loro differenziali in funzione di essa;
3. si sostituisce nell'integrale {{formula:4.2}}, ottenendo un integrale definito con estremi corrispondenti ai punti $A$ e $B$;
4. si risolve l'integrale e si sostituiscono i valori numerici.

Quando il campo di forze è **uniforme** (costante in ogni punto del percorso), il calcolo si semplifica ulteriormente: la forza esce dall'integrale e il lavoro dipende solo dal vettore spostamento netto $\vec{r}_B - \vec{r}_A$, non dalla forma del cammino percorso.

**Esempio 4.1** (lavoro di una forza costante lungo un tratto rettilineo)

*Dati*: un punto materiale di massa $m = 0,9\ \text{kg}$ è soggetto a una forza costante $\vec{F} = (f_e, -mg)$, con $f_e = 50\ \text{N}$, somma di una spinta orizzontale costante e del peso. Il punto si sposta lungo una retta dal punto $A = (0\ \text{m}, 3\ \text{m})$ al punto $B = (1\ \text{m}, 5\ \text{m})$.

*Schema*: il percorso è il segmento $AB$ nel piano $xy$; la forza ha due componenti costanti, una lungo $x$ e una lungo $y$.

*Riferimento*: assi cartesiani $x$ orizzontale, $y$ verticale verso l'alto.

*Equazioni*. Poiché la forza è uniforme,

$$W_{A\to B} = \vec{F}\cdot \int_A^B d\vec{r} = \vec{F}\cdot(\vec{r}_B - \vec{r}_A) = f_e(x_B - x_A) - mg(y_B - y_A) .$$

*Soluzione letterale*: essendo $x_B - x_A$ e $y_B - y_A$ noti, basta sostituire.

*Numeri*:

$$W_{A\to B} = 50\ \text{N}\,(1\ \text{m} - 0\ \text{m}) - 0,9\ \text{kg}\cdot 9,81\ \text{m/s}^2\,(5\ \text{m} - 3\ \text{m}) = 50\ \text{J} - 17,66\ \text{J} = 32,3\ \text{J} .$$

*Controllo*: il risultato ha le dimensioni di un'energia (J); il segno positivo è coerente, poiché la componente orizzontale della forza e lo spostamento orizzontale hanno lo stesso verso e il loro contributo prevale su quello, negativo, del peso durante la salita.

Lo stesso risultato si ottiene parametrizzando il cammino con l'equazione della retta $y = ax+b$ che lo contiene, scegliendo $x$ come variabile indipendente: da $dy = a\,dx$ e dagli estremi $x_A, x_B$ si ricava

$$W_{A\to B} = \int_{x_A}^{x_B} (F_x + F_y a)\,dx = (F_x + F_y a)(x_B - x_A),$$

formula valida ogniqualvolta la forza è costante lungo un tratto rettilineo. Se il cammino è invece un arco di parabola o, più in generale, una curva $y=y(x)$ o $x=x(y)$, si procede allo stesso modo: si scrive $dy$ (o $dx$) in funzione del differenziale della variabile scelta e si integra tra i valori che essa assume agli estremi $A$ e $B$ del tratto.

Quando il cammino è un arco di circonferenza di raggio $R$ descritto dall'angolo $\theta$, è naturale usare $\theta$ come parametro: con $d\vec{s} = R\,d\theta\,\hat{u}_\theta$, e ricordando che $\hat{u}_r \cdot \hat{u}_\theta = 0$, solo la componente tangenziale della forza (o dell'accelerazione, se si moltiplica per $m$) contribuisce al lavoro. Nel caso di un moto circolare uniformemente accelerato, con accelerazione tangenziale costante $a_\theta = R\alpha$, si ha

$$W_{\mathrm{arco}} = m\,a_\theta R \int_{\theta_A}^{\theta_B} d\theta = m\alpha R^2 (\theta_B - \theta_A) .$$

In modo equivalente, il lavoro nel moto circolare può essere espresso tramite il momento della forza $M$ rispetto al centro, poiché $ds = r\,d\theta$ e la componente radiale della forza ha momento nullo rispetto al centro:

:::formula{id="4.6" label="Lavoro nel moto circolare tramite il momento della forza"}
$$W = \int_{\theta_A}^{\theta_B} M\,d\theta$$
:::

**Errore tipico 4.1**. Nel ridurre l'integrale di linea a un integrale in una sola variabile, uno sbaglio frequente è confondere il vettore spostamento netto $\vec{r}_B - \vec{r}_A$ con la lunghezza dell'arco percorso: i due coincidono solo se il cammino è rettilineo. Per campi di forza uniformi il lavoro dipende solo dal primo, ma per campi di forza non uniformi occorre davvero integrare lungo la curva effettiva. Un secondo errore tipico, altrettanto diffuso, è scrivere $W = \vec{F}\cdot \vec{s}$ o $W = \vec{F}\, \Delta\vec{s}$ omettendo il segno di integrale: tali scritture sono dimensionalmente plausibili ma concettualmente sbagliate ogni volta che la forza non è costante lungo il percorso; la forma corretta resta sempre $W = \int \vec{F}\cdot d\vec{s}$.

### Potenza di una forza

La rapidità con cui una forza compie lavoro è misurata dalla **potenza**. Si definisce **potenza istantanea** il lavoro elementare compiuto nell'unità di tempo:

:::formula{id="4.7" label="Potenza istantanea"}
$$P = \frac{\delta W}{dt} = \vec{F}\cdot \vec{v} = F_T\, v$$
:::

L'ultima uguaglianza segue dal fatto che $d\vec{r}/dt = \vec{v}$, e mostra che solo la componente della forza parallela alla velocità istantanea contribuisce alla potenza erogata; una forza ortogonale alla velocità (come la reazione normale di un vincolo, o la forza centripeta in un moto circolare uniforme) ha potenza nulla in ogni istante.

Si definisce inoltre **potenza media** il rapporto tra il lavoro totale compiuto e l'intervallo di tempo in cui è stato svolto:

:::formula{id="4.8" label="Potenza media"}
$$\bar{P} = \frac{W}{t}$$
:::

L'unità di misura della potenza è il watt: $\lbrack \text{potenza}\rbrack  = \lbrack W\rbrack /\lbrack T\rbrack  = \text{J/s} = \text{W}$. A parità di lavoro compiuto, è più potente il dispositivo che lo eroga in meno tempo.

**Esempio 4.2** (potenza di trazione)

*Dati*: un corpo si muove con velocità costante $v = 20\ \text{m/s}$ sotto l'azione di una forza di trazione $\vec{F}$ parallela alla velocità, di modulo $F = 500\ \text{N}$.

*Equazioni*: essendo $\vec{F}$ parallela a $\vec{v}$, $P = F_T v = F v$.

*Numeri*: $P = 500\ \text{N} \times 20\ \text{m/s} = 1,0\cdot 10^4\ \text{W} = 10\ \text{kW}$.

*Controllo*: le unità N $\times$ m/s $=$ J/s $=$ W sono corrette; l'ordine di grandezza (decine di kW) è tipico della potenza di trazione di un veicolo a velocità di crociera.

**Errore tipico 4.2**. Si tende a confondere lavoro e potenza, in particolare a ritenere che una forza grande implichi necessariamente una potenza grande: la potenza dipende anche dalla velocità (o, equivalentemente, dal tempo impiegato), per cui la stessa forza può corrispondere a potenze molto diverse se applicata a velocità diverse. Una forza può inoltre avere potenza istantanea nulla in certi istanti del moto, quelli in cui risulta perpendicolare alla velocità, pur compiendo lavoro non nullo in altri tratti in cui la sua componente tangenziale è diversa da zero: solo se la forza è perpendicolare alla velocità in ogni istante del moto, allora la sua potenza e il suo lavoro lungo qualunque tratto sono entrambi nulli.

## p3 | Energia cinetica e teorema lavoro-energia

### Energia cinetica

Per un punto materiale di massa $m$ che si muove con velocità $\vec{v}$, si introduce la grandezza scalare energia cinetica (indicata anche con $T$), definita, assumendo la massa costante nel tempo, come

:::formula{id="4.9" label="Energia cinetica del punto materiale"}
$$E_k = T = \frac{1}{2} m v^2$$
:::

L'energia cinetica ha le dimensioni $\lbrack E_k\rbrack  = \lbrack M\rbrack \lbrack L\rbrack ^2\lbrack T\rbrack ^{-2}$, cioè la stessa unità di misura del lavoro, il joule ($\mathrm{J} = \mathrm{N}\cdot\mathrm{m}$). Va osservata una differenza concettuale importante: del lavoro si parla sempre come di una grandezza *scambiata* durante uno spostamento, mentre dell'energia si dice che un sistema la *possiede* in un dato istante, in funzione del suo stato di moto.

### Teorema dell'energia cinetica

Il legame fra lavoro ed energia cinetica non è un postulato indipendente, ma una conseguenza diretta del secondo principio della dinamica. Per dimostrarlo conviene riprendere la definizione di lavoro lungo una traiettoria già introdotta in [Lavoro e integrali di linea](ref:chapter/4#p2)

$$W_{AB,\gamma} = \int_{A,\gamma}^{B} \vec{F}\cdot d\vec{l}$$

dove $\vec{F} = \vec{F}_{TOT}$ è la risultante di tutte le forze applicate al punto materiale.

**Teorema 4.1** (dell'energia cinetica). Sia un punto materiale di massa $m$ costante che si sposta lungo una traiettoria $\gamma$ da un punto $A$ a un punto $B$, sotto l'azione di una forza risultante $\vec{F}$ qualunque (conservativa o no). Allora il lavoro totale compiuto da $\vec{F}$ nello spostamento da $A$ a $B$ è uguale alla variazione di energia cinetica del punto

:::formula{id="4.10" label="Teorema dell'energia cinetica"}
$$W_{AB,\gamma} = E_{k,B} - E_{k,A} = \Delta E_k$$
:::

**Dimostrazione.** Scrivendo lo spostamento infinitesimo come $d\vec{l} = \vec{v}\, dt = v\, dt\, \hat{u}_T$ e utilizzando il secondo principio della dinamica $\vec{F} = m\vec{a}$, l'accelerazione si scompone nelle sue componenti intrinseche già introdotte nel moto nel piano

$$\vec{a} = \frac{dv}{dt}\hat{u}_T + \frac{v^2}{\rho}\hat{u}_N$$

Sostituendo nel prodotto scalare che definisce il lavoro infinitesimo si ottiene

$$\vec{F}\cdot d\vec{l} = \left(m\frac{dv}{dt}\hat{u}_T + m\frac{v^2}{\rho}\hat{u}_N\right)\cdot(v\, dt\, \hat{u}_T) = m\frac{dv}{dt}\, v\, dt = m\, v\, dv$$

poiché $\hat{u}_T\cdot\hat{u}_T = 1$ e $\hat{u}_N\cdot\hat{u}_T = 0$ (il prodotto scalare di versori perpendicolari è nullo): la componente normale dell'accelerazione, responsabile della sola variazione di direzione della velocità, non contribuisce al lavoro. Integrando lungo il cammino tra la velocità iniziale $v_A$ e quella finale $v_B$ si ottiene infine

$$W_{AB,\gamma} = \int_{A,\gamma}^{B}\vec{F}\cdot d\vec{l} = \int_{v_A}^{v_B} m\,v\,dv = \frac{1}{2}mv_B^2 - \frac{1}{2}mv_A^2 = E_{k,B} - E_{k,A}$$

che è la tesi. $\blacksquare$

Il teorema è valido indipendentemente dalla natura delle forze coinvolte, purché $\vec{F}$ sia la risultante di tutte le forze agenti (comprese eventuali reazioni vincolari e attriti), perché la dimostrazione usa solo il secondo principio della dinamica. Dal segno del lavoro totale si legge immediatamente l'evoluzione dell'energia cinetica tra gli estremi del percorso: se $W_{AB,\gamma} > 0$ l'energia cinetica finale è maggiore di quella iniziale, se $W_{AB,\gamma} < 0$ è minore, se $W_{AB,\gamma} = 0$ allora $E_{k,B} = E_{k,A}$. Quest'ultimo caso non implica che l'energia cinetica resti costante durante tutto il moto da $A$ a $B$: lungo il percorso essa può variare, salendo e scendendo, purché il bilancio complessivo si annulli. Per poter affermare che l'energia cinetica resta effettivamente costante in ogni istante del moto occorre invece che il lavoro sia nullo su ogni sottotratto del percorso.

Va sottolineato un punto che genera spesso confusione: una forza compie lavoro solo se il punto di applicazione si sposta. Se una forza agisce su un corpo che non si muove (ad esempio perché un vincolo, come l'attrito statico, lo impedisce), quella forza non compie alcun lavoro, anche se il suo modulo è diverso da zero.

### Il lavoro dell'attrito e il bilancio energetico

Quando fra le forze agenti compaiono forze non conservative — tipicamente le forze di attrito radente o viscoso — non è possibile introdurre per esse un'energia potenziale, e il loro lavoro va calcolato esplicitamente dalla definizione di integrale di linea. La reazione normale, quando il vincolo è fisso nel riferimento considerato, non compie lavoro, perché in questo caso essa è perpendicolare in ogni istante alla velocità del punto materiale, e dunque allo spostamento; se invece il vincolo stesso è mobile nel riferimento scelto, la normale resta perpendicolare alla superficie di contatto ma non necessariamente alla velocità del punto, e può quindi compiere lavoro. Le forze di attrito, in particolare, costituiscono la classe delle cosiddette forze dissipative.

Per l'attrito dinamico, quando la superficie di contatto è ferma nel riferimento considerato e sia $N$ sia $\mu_d$ restano costanti lungo il percorso, la forza ha modulo costante $f_d = \mu_d N$ e verso opposto allo spostamento del corpo; in queste condizioni il lavoro lungo un tratto di traiettoria da $A$ a $B$ vale

:::formula{id="4.11" label="Lavoro della forza di attrito dinamico"}
$$W_{att} = \int_A^B \vec{f}_d\cdot d\vec{s} = -\mu_d N \int_A^B ds = -\mu_d N\, \ell_{AB}$$
:::

dove $\ell_{AB}$ è la lunghezza del cammino effettivamente percorso (non lo spostamento netto $|\vec{r}_B - \vec{r}_A|$, salvo che la traiettoria sia rettilinea e a verso costante). Se invece $N$ o $\mu_d$ variano lungo il cammino, il lavoro va espresso in forma integrale

$$W_{att} = -\int_{A,\gamma}^{B} \mu_d N\, ds$$

espressione che si riduce alla precedente solo quando $N$ e $\mu_d$ sono costanti. In entrambi i casi, finché la superficie di contatto è ferma nel riferimento scelto, il lavoro dell'attrito dinamico è sempre negativo, perché la forza si oppone al moto del corpo: l'attrito sottrae energia al punto materiale. Va però tenuto presente che l'attrito dinamico si oppone, in generale, allo scorrimento relativo fra le superfici a contatto, non necessariamente al moto del corpo nel riferimento scelto: se è la superficie stessa a muoversi, l'attrito che essa esercita sul corpo può compiere lavoro positivo.

Scrivendo la risultante delle forze come somma di una parte conservativa e di una parte non conservativa, $\vec{F} = \vec{F}_{cons} + \vec{F}_{nc}$, il teorema dell'energia cinetica permette di separare i due contributi. Usando la relazione fra lavoro delle forze conservative ed energia potenziale (che sarà definita rigorosamente nella sezione successiva), $W_c = E_{p,A} - E_{p,B}$, si ottiene

$$W = W_c + W_{nc} = E_{k,B} - E_{k,A}$$

$$E_{p,A} - E_{p,B} + W_{nc} = E_{k,B} - E_{k,A}$$

da cui, raccogliendo i termini di energia meccanica $E_m = E_k + E_p$ in $A$ e in $B$,

:::formula{id="4.12" label="Teorema dell'energia meccanica (forze non conservative)"}
$$W_{nc} = E_{k,B} - E_{k,A} - E_{p,A} + E_{p,B} = E_{m,B} - E_{m,A} = \Delta E_m$$
:::

La presenza di forze non conservative non comporta di per sé una variazione dell'energia meccanica tra gli estremi considerati: se il loro lavoro complessivo $W_{nc}$ è nullo, si ha $E_{m,B} = E_{m,A}$. Perché l'energia meccanica resti costante durante tutto il moto, il lavoro delle forze non conservative deve essere nullo su ogni sottotratto del percorso. L'energia meccanica varia tra gli estremi quando il lavoro complessivo delle forze non conservative è diverso da zero, e in tal caso la sua variazione è uguale a quel lavoro. Si tratta del teorema dell'energia meccanica, da non confondere con il principio di conservazione dell'energia meccanica: quest'ultimo vale quando il lavoro non conservativo è nullo su ogni sottotratto.

Quando l'attrito dinamico agisce su una superficie ferma nel riferimento considerato, il suo lavoro sul corpo è sempre negativo. Se l'attrito è l'unica forza non conservativa che compie lavoro nel tratto considerato, l'energia meccanica del sistema diminuisce ogni volta che esso agisce: $\Delta E_m = W_{att} < 0$. Se invece agiscono anche altre forze non conservative che compiono lavoro — ad esempio una trazione applicata al corpo — il bilancio va scritto come $\Delta E_m = W_{att} + W_{altre}$, e il segno complessivo dipende dal confronto fra i due contributi: una trazione sufficientemente intensa può compensare o superare il lavoro negativo dell'attrito, lasciando $E_m$ costante o addirittura crescente. Nel solo caso in cui l'attrito sia l'unica forza non conservativa attiva, questo fatto resta vero anche lungo un percorso chiuso, in cui un punto materiale torna nella posizione di partenza, purché la superficie di contatto resti ferma nel riferimento scelto durante tutto il tragitto: se nel tragitto ha agito soltanto l'attrito, l'energia cinetica finale nel punto di partenza sarà minore di quella iniziale, a differenza di quanto accadrebbe se agissero solo forze conservative (per cui l'energia cinetica tornerebbe al valore di partenza).

### Esempio svolto

**Esempio 4.3.** Un corpo di massa $m$ parte da fermo e scivola lungo un tratto di piano inclinato scabro, con angolo $\theta$ rispetto all'orizzontale e coefficiente di attrito dinamico $\mu_d$, percorrendo una lunghezza $\Delta s$ lungo il piano prima di raggiungere la base. Si vuole determinare la velocità $v_B$ alla fine del tratto usando il teorema dell'energia cinetica.

*Dati.* Massa $m$; angolo $\theta$; coefficiente $\mu_d$; lunghezza percorsa $\Delta s$; velocità iniziale $v_A = 0$.

*Schema delle forze.* Sul corpo agiscono il peso $m\vec{g}$, la reazione normale $\vec{N}$ e l'attrito dinamico $\vec{f}_d$, diretto in verso opposto al moto (verso l'alto lungo il piano). Scegliendo l'asse $x$ parallelo al piano, orientato nel verso del moto discendente, la componente del peso lungo $x$ vale $mg\sin\theta$ (motrice) mentre l'attrito vale $-\mu_d N = -\mu_d mg\cos\theta$ (resistente). La reazione normale non compie lavoro perché $\vec{N}\perp d\vec{s}$ in ogni istante.

*Applicazione del teorema.* Il lavoro totale compiuto dalle forze lungo il tratto $\Delta s$ è

$$W = \left(mg\sin\theta - \mu_d mg\cos\theta\right)\Delta s$$

Per il teorema dell'energia cinetica, $W = E_{k,B} - E_{k,A} = \frac{1}{2}mv_B^2 - 0$, dunque

$$\frac{1}{2}mv_B^2 = mg\left(\sin\theta - \mu_d\cos\theta\right)\Delta s$$

$$v_B = \sqrt{2g\Delta s\left(\sin\theta - \mu_d\cos\theta\right)}$$

*Controllo.* Il risultato è dimensionalmente corretto, $\lbrack v_B\rbrack  = \sqrt{\lbrack \mathrm{m/s^2}\rbrack \lbrack \mathrm{m}\rbrack } = \mathrm{m/s}$; inoltre, se $\mu_d = 0$ si ritrova il risultato del piano inclinato liscio. La condizione $\mu_d < \tan\theta$ è necessaria per applicare questo esempio di discesa, poiché garantisce un radicando positivo; se invece, considerando il coefficiente di attrito statico $\mu_s$ (non dato in questo esempio), risulta $\mu_s \geq \tan\theta$, il corpo resta fermo e l'ipotesi di scivolamento da fermo non è applicabile, mentre un radicando negativo o nullo segnala soltanto che tale ipotesi non vale, senza di per sé dimostrare che l'attrito statico trattenga il corpo. Lo stesso bilancio, se il moto avviene su un tratto successivo dove interviene anche una forza elastica, si estende sommando il relativo lavoro della molla, $W_{el} = \frac{1}{2}k(\Delta l_A)^2 - \frac{1}{2}k(\Delta l_B)^2$, fra gli estremi dell'allungamento (nel caso particolare in cui la deformazione iniziale è nulla, $\Delta l_A = 0$, l'espressione si riduce a $-\frac{1}{2}k(\Delta l_B)^2$), come richiesto da un bilancio energetico con molla e attrito combinati.

### Errori tipici

**Errore tipico 4.3** (dimenticare il segno del lavoro dissipativo). Il lavoro di una forza di attrito è sempre negativo quando questa agisce effettivamente nel verso opposto al moto. Scrivere $W_{att} = +\mu_d m g \cos\theta\, \Delta s$ invece che con il segno meno, o assegnare un lavoro positivo alle forze dissipative in un bilancio percentuale di energia, è un errore grave: equivale a far crescere l'energia meccanica del sistema invece di farla diminuire.

**Errore tipico 4.4** (energia cinetica calcolata con una sola componente della velocità). In un moto nel piano o nello spazio l'energia cinetica richiede il modulo al quadrato dell'intero vettore velocità, $E_k = \frac{1}{2}m(v_x^2 + v_y^2 + v_z^2)$, e non la sola componente orizzontale o verticale; nel moto nel piano si ha semplicemente $v_z = 0$, per cui l'espressione si riduce a $E_k = \frac{1}{2}m(v_x^2 + v_y^2)$. Trascurare una componente diversa da zero (errore frequente nel moto parabolico) porta a un valore di $E_k$ sistematicamente sbagliato.

**Errore tipico 4.5** (confondere il teorema con il principio di conservazione). Il teorema dell'energia meccanica, $\Delta E_m = W_{nc}$, è sempre valido; il principio di conservazione dell'energia meccanica, $\Delta E_m = 0$, è invece un caso particolare, valido solo quando le forze non conservative non compiono lavoro (ad esempio assenza di attrito, oppure attrito che agisce perpendicolarmente al moto). Applicare la conservazione dell'energia meccanica in presenza di attrito porta a un bilancio energetico scorretto.

## p4 | Forze conservative ed energia potenziale

Nella sezione precedente abbiamo visto che il lavoro della forza peso e della forza elastica dipende soltanto dalla posizione iniziale e finale del punto materiale, mentre il lavoro dell'attrito dipende anche dal cammino percorso. Questa distinzione non è un dettaglio tecnico: è la base su cui si costruisce il concetto di energia potenziale e il principio di conservazione dell'energia meccanica, due degli strumenti più usati per risolvere problemi di dinamica senza dover integrare direttamente l'equazione del moto.

### Forze conservative

**Definizione 4.1** (forza conservativa). Una forza $\vec{F}(x,y,z)$ si dice conservativa se il lavoro compiuto lungo un cammino $\gamma$ che unisce due punti $A$ e $B$ non dipende dalla particolare traiettoria scelta, ma soltanto dai punti $A$ e $B$. Le forze per cui il lavoro non dipende dalla traiettoria vengono dette conservative.

Una conseguenza immediata di questa proprietà riguarda i percorsi chiusi. Se il lavoro da $A$ a $B$ non dipende dal cammino, allora il lavoro lungo un percorso chiuso (dove il punto finale coincide con quello iniziale) deve essere nullo, perché si può sempre spezzare il percorso chiuso in due tratti da $A$ a $B$ lungo cammini diversi, che devono dare lo stesso contributo con segno opposto. Lungo un percorso chiuso, il lavoro compiuto da forze di tipo conservativo è nullo. A livello infinitesimo, scomponendo il lavoro nelle sue componenti cartesiane, questa condizione si scrive come circuitazione nulla

$$\oint (F_x\, dx + F_y\, dy + F_z\, dz) = \oint \vec{F}\cdot d\vec{s} = 0 .$$

Questa relazione, con la notazione introdotta nella sezione su [lavoro e integrali di linea](ref:chapter/4#p2), equivale a dire che la circuitazione di $\vec{F}$ è nulla lungo qualunque percorso chiuso.

Si dimostra che l'annullarsi della circuitazione su ogni percorso chiuso è condizione necessaria e sufficiente per l'esistenza di una funzione delle coordinate, l'energia potenziale, le cui derivate parziali cambiate di segno restituiscono le componenti della forza. In termini operativi, per stabilire se un campo di forze $\vec{F}(x,y)$ assegnato è conservativo si può procedere in due modi equivalenti.

- Calcolare il lavoro lungo un percorso chiuso qualsiasi: se risulta diverso da zero, la forza non è conservativa, perché per una forza conservativa il lavoro deve annullarsi su ogni percorso chiuso, non solo su quello scelto.
- Cercare direttamente una funzione $E_p(x,y,z)$ tale che $F_x = -\partial E_p/\partial x$, $F_y = -\partial E_p/\partial y$, $F_z = -\partial E_p/\partial z$: se tale funzione esiste, la forza è conservativa.

È un errore tipico pensare che l'annullarsi del lavoro su un singolo percorso chiuso basti a concludere che la forza è conservativa. Se il lavoro lungo quel percorso è nullo, questo risultato non permette da solo di concludere la conservatività, perché per una forza conservativa il lavoro deve annullarsi su qualunque percorso chiuso, non solo su quello calcolato. Per avere la certezza occorre esibire esplicitamente la funzione energia potenziale, oppure far vedere che su un altro percorso chiuso il lavoro non è nullo, il che basta a escludere la conservatività.

**Esempio 4.4.** Si considerino i due campi di forza $\vec{F}_1(x,y) = a\,xy\,\hat{u}_x + \frac{a}{2}x^2\,\hat{u}_y$, con $a = 1\ \text{N/m}^2$, e $\vec{F}_2(x,y) = a\,x^2\,\hat{u}_y$, con $a = 3\ \text{N/m}^2$. Si consideri il percorso triangolare chiuso $A\to B\to C\to A$ con $A=(0,0)$, $B=(x_B,2x_B)$ e $C=(x_B,0)$, dove $x_B = 1\ \text{m}$: il lato $AB$ sta sulla retta $y=2x$, il lato $BC$ è verticale e il lato $CA$ sta sull'asse $x$. Calcolando separatamente il lavoro sui tre lati, per $\vec{F}_1$ si trova $W_{AB} = a x_B^3$, $W_{BC} = -a x_B^3$, $W_{CA} = 0$, dunque $W_{A\to B\to C\to A} = 0$; per $\vec{F}_2$ si trova invece $W_{AB} = \tfrac{2}{3}a x_B^3$, $W_{BC} = -2a x_B^3$, $W_{CA} = 0$, dunque $W_{A\to B\to C\to A} = -\tfrac{4}{3}a x_B^3 \neq 0$. Per $\vec{F}_1$ si verifica poi che esiste effettivamente una funzione potenziale, $E_p(x,y) = -\tfrac{a}{2}x^2 y + \text{cost}$, che riproduce correttamente entrambe le componenti; $\vec{F}_1$ è dunque conservativa. Per $\vec{F}_2$, invece, il lavoro non nullo lungo un percorso chiuso basta a escludere la conservatività, e dunque non può esistere per essa alcuna energia potenziale.

I corsi di Analisi mostrano che, quando $\vec{F}$ è definito e derivabile con continuità su un dominio semplicemente connesso, la condizione di circuitazione nulla equivale all'annullarsi del rotore di $\vec{F}$ in ogni punto

$$\vec{\nabla}\times\vec{F} = \vec{0} ,$$

cioè, in componenti,

$$\frac{\partial F_z}{\partial y}=\frac{\partial F_y}{\partial z}, \qquad \frac{\partial F_x}{\partial z}=\frac{\partial F_z}{\partial x}, \qquad \frac{\partial F_y}{\partial x}=\frac{\partial F_x}{\partial y} .$$

Questo criterio locale è spesso più comodo da verificare rispetto al calcolo diretto di un integrale di linea, perché richiede solo di confrontare le derivate parziali incrociate delle componenti della forza, senza bisogno di scegliere o parametrizzare alcun cammino. Applichiamolo al campo $\vec{F}_1(x,y) = a\,xy\,\hat{u}_x + \frac{a}{2}x^2\,\hat{u}_y$ dell'esempio precedente, che ha solo le componenti $x$ e $y$: in questo caso basta verificare la condizione $\partial F_{1y}/\partial x = \partial F_{1x}/\partial y$. Si trova $\partial F_{1y}/\partial x = a x$ e $\partial F_{1x}/\partial y = a x$: le due derivate coincidono in ogni punto del piano, dunque il rotore di $\vec{F}_1$ è identicamente nullo, e il campo è conservativo su tutto il piano, in pieno accordo con il fatto che per esso esiste effettivamente una funzione energia potenziale.

### Energia potenziale e gradiente

**Definizione 4.2** (energia potenziale). Data una forza conservativa $\vec{F}$, si chiama energia potenziale associata a $\vec{F}$ una funzione scalare $E_p(x,y,z)$, definita a meno di una costante additiva arbitraria, tale che

$$F_x = -\frac{\partial E_p}{\partial x}, \qquad F_y = -\frac{\partial E_p}{\partial y}, \qquad F_z = -\frac{\partial E_p}{\partial z} .$$

Questa definizione è presa dalle fonti. In forma compatta, usando il gradiente, questa relazione si scrive

:::formula{id="4.13" label="Forza come opposto del gradiente dell'energia potenziale"}
$$\vec{F} = -\vec{\nabla} E_p$$
:::

La forza è l'opposto del gradiente dell'energia potenziale, ed è quindi diretta lungo il verso di massima diminuzione di $E_p$. L'insieme dei punti in cui $E_p$ è costante si chiama superficie equipotenziale; uno spostamento lungo una superficie equipotenziale non compie lavoro, e di conseguenza la forza associata è sempre ortogonale, in ogni punto, alla superficie equipotenziale che passa per quel punto.

Integrando l'espressione del lavoro infinitesimo $d\mathcal{L} = \vec{F}\cdot d\vec{r} = -dE_p$ lungo un cammino $\gamma$ da $A$ a $B$ si ottiene la relazione fondamentale già introdotta a proposito del [teorema dell'energia cinetica](ref:chapter/4#p3):

$$W_{A\to B,\gamma} = \int_{A,\gamma}^{B} \vec{F}\cdot d\vec{r} = -\int_{A,\gamma}^{B} dE_p = E_p(A) - E_p(B) = -\Delta E_p .$$

Da questa scrittura seguono le due conseguenze annunciate sopra: il lavoro di una forza conservativa dipende solo dalla posizione iniziale $A$ e finale $B$, non dal cammino $\gamma$, e si annulla lungo una curva chiusa, perché in tal caso $A$ e $B$ coincidono e quindi $E_p(A) = E_p(B)$.

Vediamo ora come ricavare $E_p$ per le forze più comuni, applicando sempre la stessa procedura: si parte dal lavoro infinitesimo $d\mathcal{L} = \vec{F}\cdot d\vec{r}$ e si integra da una posizione di riferimento alla posizione generica.

Per la forza peso $\vec{P} = -mg\,\hat{u}_z$, con asse $z$ verticale verso l'alto, il lavoro per uno spostamento da una quota $z_0$ a una quota $z$ vale

$$W = \int_{z_0}^{z} (-mg\,\hat{u}_z)\cdot(dz\,\hat{u}_z) = -mg\,(z - z_0) ,$$

da cui, confrontando con $W = -\Delta E_p$, si ottiene l'energia potenziale gravitazionale, a meno della costante additiva legata alla scelta dell'origine delle quote:

$$E_p(z) = mgz .$$

Per la forza elastica $\vec{F}_{el} = -kx\,\hat{u}_x$, lo stesso procedimento dà

$$\int_{A,\gamma}^{B} d\mathcal{L} = \int_{x_A,\gamma}^{x} (-kx)\,dx = -\frac{1}{2}kx^2 + \frac{1}{2}kx_A^2 ,$$

che fornisce, già fissata nella sezione sulla [forza elastica](ref:chapter/3#p6), l'energia potenziale elastica [formula (3.22)](ref:formula/3.22). Un errore tipico è scrivere $E_p = -\tfrac{1}{2}kx^2$ trasportando il segno meno della forza anche nell'energia potenziale; il segno meno compare solo nella relazione $F = -dE_p/dx$, non nell'espressione di $E_p$ stessa. Con la scelta usuale di porre $E_p=0$ quando la deformazione è nulla, cioè $x=0$, si ottiene $E_p = \tfrac{1}{2}kx^2 \geq 0$; questa non negatività non è una proprietà generale dell'energia potenziale, che essendo definita a meno di una costante additiva arbitraria può in linea di principio assumere anche valori negativi, ma è una conseguenza di quella specifica scelta dello zero dell'energia.

Per le forze centrali, cioè le forze il cui modulo dipende solo dalla distanza $r$ da un centro fisso e la cui direzione è sempre quella del versore radiale $\hat{u}_r$ (studiate in dettaglio nella sezione sulle [forze centrali](ref:chapter/5#p4)), il lavoro infinitesimo si riduce a una funzione della sola variazione di $r$:

$$W = \int_A^B F(r)\,\hat{u}_r\cdot d\vec{s} = \int_{r_A}^{r_B} F(r)\,dr = \mathcal{F}(r_B) - \mathcal{F}(r_A)$$

poiché $\hat{u}_r\cdot d\vec{s} = ds\cos\theta = dr$ è la variazione del modulo di $r$ lungo lo spostamento, e $\mathcal{F}$ è una primitiva di $F$, cioè una funzione tale che $\mathcal{F}'(r) = F(r)$. Il lavoro dipende solo da una funzione delle coordinate di $A$ e $B$: questa è precisamente la condizione perché la forza sia conservativa. Per la forza gravitazionale tra due masse, $\vec{F}(r) = -\dfrac{Gm_1 m_2}{r^2}\,\hat{u}_r$, integrando si ottiene l'energia potenziale gravitazionale

$$E_p(r) = -\frac{Gm_1 m_2}{r} ,$$

dove il segno negativo riflette la natura attrattiva della forza. Con lo stesso procedimento, per la forza elettrostatica tra due cariche $q$ e $q_0$ si trova

$$E_p(r) = \frac{q\,q_0}{4\pi\varepsilon_0\, r} ,$$

espressione analoga a [formula (10.21)](ref:formula/10.21), dove $\varepsilon_0$ è la costante dielettrica del vuoto già introdotta nella sezione sui [cenni di elettrostatica](ref:chapter/10#p6). Questa energia potenziale ha lo stesso andamento in $1/r$ del caso gravitazionale, ma segno opposto per cariche dello stesso segno: mentre la forza gravitazionale è sempre attrattiva, la forza elettrostatica tra due cariche omonime è repulsiva, e l'energia potenziale corrispondente è positiva e decresce allontanando le cariche, coerentemente con questa natura repulsiva.

:::image{src="assets/cfcb3087-energia-potenziale-gravitazionale-elettrostatica.svg" alt="Due curve E_p(r): una negativa che cresce verso zero, una positiva che decresce verso zero" caption="Fig. 4.1 — Energia potenziale in funzione della distanza r: gravitazionale (sempre negativa, forza attrattiva) ed elettrostatica tra cariche omonime (sempre positiva, forza repulsiva), entrambe nulle per r che tende a infinito"}
:::

La forza d'attrito radente, invece, non è conservativa: in generale il suo lavoro si calcola solo tramite l'integrale $W = \int_{A,\gamma}^{B} \vec{F}_{ad}\cdot d\vec{s}$, che dipende dal cammino effettivamente seguito e non solo dai punti $A$ e $B$, come già visto nella sezione sulle [forze di attrito](ref:chapter/3#p5) nei casi in cui $\mu_d$ o la reazione normale $N$ variano lungo il percorso, oppure la superficie di contatto è essa stessa in moto. Soltanto quando $\mu_d$ e $N$ sono costanti e la superficie è ferma nel riferimento scelto il lavoro si riduce a {{formula:4.11}}, proporzionale alla sola lunghezza del cammino percorso. In ogni caso, poiché tale lavoro non è esprimibile come differenza dei valori di una funzione delle sole coordinate di $A$ e $B$, non si può definire un'energia potenziale per l'attrito, e nel bilancio energetico esso va sempre trattato attraverso la definizione diretta di lavoro, come già fatto nella sezione sul [teorema lavoro-energia](ref:chapter/4#p3).

### Conservazione dell'energia meccanica

Quando sul punto materiale agiscono soltanto forze conservative, il teorema dell'energia cinetica {{formula:4.10}} e la relazione $W = -\Delta E_p$ forniscono due espressioni dello stesso lavoro totale:

$$W = \Delta E_k, \qquad W = -\Delta E_p .$$

Uguagliando si ottiene $\Delta E_k + \Delta E_p = 0$, cioè la somma dell'energia cinetica e dell'energia potenziale resta costante durante il moto. Definendo l'energia meccanica come $E_m = E_k + E_p$, si enuncia il seguente risultato.

**Teorema 4.2** (conservazione dell'energia meccanica). Se su un punto materiale agiscono soltanto forze conservative, la somma dell'energia cinetica e dell'energia potenziale si conserva durante il moto:

:::formula{id="4.14" label="Conservazione dell'energia meccanica"}
$$E_m = E_k + E_p = \text{costante}$$
:::

Questo risultato è preso dalle fonti. Il lavoro ottenuto a spese di una diminuzione di energia potenziale si traduce in un corrispondente aumento di energia cinetica, e viceversa, proprio perché la loro somma resta costante. Quando, come avviene in generale, agiscono sia forze conservative sia forze non conservative (per esempio l'attrito), il lavoro totale si scompone in $W = W_c + W_{nc}$, e ripetendo il calcolo precedente si trova che la variazione di energia meccanica è uguale al lavoro delle sole forze non conservative,

$$W_{nc} = E_{k,B} - E_{k,A} - E_{p,A} + E_{p,B} = E_{m,B} - E_{m,A} ,$$

relazione già introdotta come {{formula:4.12}} nella sezione precedente: in presenza di forze non conservative l'energia meccanica non resta costante, e la sua variazione è data esattamente dal lavoro delle forze non conservative. Il principio di conservazione dell'energia meccanica è dunque un caso particolare di questo teorema più generale, quello in cui $W_{nc} = 0$.

**Esempio 4.5.** Un corpo di massa $m = 1\ \text{kg}$ cade da un'altezza $H$ (da determinare, con $H>l_0$) su una molla verticale ideale di costante elastica $k = 500\ \text{N/m}$ e lunghezza a riposo $l_0 = 1\ \text{m}$, con l'estremo inferiore fissato a terra e l'estremo superiore libero, inizialmente non compressa, a quota $l_0$. Il corpo parte da fermo alla quota $z=H$, sopra l'estremo libero della molla. Si vuole trovare $H$ sapendo che, alla massima compressione, la molla si è ridotta a un terzo della sua lunghezza a riposo, cioè la quota del corpo rispetto all'estremo fisso della molla vale $z = l_0/3$.

Schema: assumendo l'asse $z$ verticale verso l'alto con origine all'estremo fisso della molla, sul corpo agiscono solo peso e forza elastica, entrambe conservative; non c'è attrito, quindi l'energia meccanica si conserva durante tutta la caduta e la compressione.

Stato iniziale (corpo fermo alla quota $z = H$, molla non compressa): l'energia cinetica è nulla e l'energia potenziale elastica è nulla, quindi

$$E_i = mgH .$$

Stato finale (massima compressione, alla quota $z = l_0/3$): l'energia cinetica è nulla perché il corpo è momentaneamente in quiete, e restano l'energia potenziale gravitazionale e quella elastica:

$$E_f = mgz + \frac{1}{2}k(z - l_0)^2 .$$

Uguagliando $E_i = E_f$ con $z = l_0/3$:

$$mgH = mg\,\frac{l_0}{3} + \frac{1}{2}k\left(\frac{l_0}{3} - l_0\right)^2 ,$$

da cui, isolando $H$,

$$H = \frac{l_0}{3} + \frac{k}{2mg}\left(\frac{2l_0}{3}\right)^2 .$$

Numericamente, con $m = 1\ \text{kg}$, $g = 9{,}81\ \text{m/s}^2$, $k = 500\ \text{N/m}$, $l_0 = 1\ \text{m}$:

$$H = \frac{1}{3}\ \text{m} + \frac{500\ \text{N/m}}{2\cdot 1\ \text{kg}\cdot 9{,}81\ \text{m/s}^2}\left(\frac{2}{3}\ \text{m}\right)^2 \approx 0{,}33\ \text{m} + 11{,}33\ \text{m} \approx 11{,}7\ \text{m} .$$

Controllo: le unità sono coerenti, poiché $\text{N}\cdot\text{s}^2/\text{kg} = \text{m}$ dato che $1\ \text{N} = 1\ \text{kg}\cdot\text{m/s}^2$; il risultato è dell'ordine di grandezza plausibile, dato che la molla è molto rigida e deve assorbire una caduta considerevole prima di arrestare il corpo.

Lo studio della funzione $E_p(x)$ permette anche di individuare le posizioni di equilibrio e il tipo di moto nelle loro vicinanze, senza risolvere l'equazione del moto. Poiché $F(x) = -dE_p/dx$, un punto $x_0$ è di equilibrio se e solo se $dE_p/dx$ si annulla in $x_0$, cioè se $E_p$ ha in quel punto un punto stazionario. Se in un intorno di $x_0$ risulta $dE_p/dx<0$ per $x<x_0$ e $dE_p/dx>0$ per $x>x_0$, la forza è sempre diretta verso $x_0$ non appena il punto materiale se ne allontana di poco, e l'equilibrio è stabile: per piccoli spostamenti il moto è oscillatorio attorno a $x_0$, come già visto per la forza elastica, il cui potenziale $\tfrac{1}{2}kx^2$ ha minimo isolato in $x=0$ e verifica ovunque questa condizione sul segno della derivata. Il solo fatto che $x_0$ sia un minimo locale stretto di $E_p$ non basta, in generale, a garantire questo comportamento della forza in tutto un intorno, perché il potenziale potrebbe presentare piccole oscillazioni con altri punti stazionari arbitrariamente vicini a $x_0$; la condizione che garantisce con certezza il richiamo verso $x_0$ è quella sul segno della derivata appena enunciata. Analogamente, se in un intorno di $x_0$ risulta $dE_p/dx>0$ per $x<x_0$ e $dE_p/dx<0$ per $x>x_0$, la forza si allontana da $x_0$ appena il punto materiale viene spostato, e l'equilibrio è instabile; anche in questo caso il solo essere $x_0$ un massimo locale stretto non basta da solo a garantire tale comportamento in ogni punto dell'intorno. Diverso è il caso in cui $E_p$ resta costante su un intero tratto, non un minimo isolato ma un tratto piatto del grafico: in tal caso ogni punto del tratto è una posizione di equilibrio, perché la derivata di $E_p$ vi è ovunque nulla, ma non esiste alcuna forza di richiamo né alcun moto oscillatorio attorno a una posizione precisa, dato che il punto materiale resta semplicemente fermo dove si trova, senza essere né respinto né riportato verso un punto particolare.

:::image{src="assets/cfcb3087-equilibrio-stabile-instabile-indifferente.svg" alt="Curva con una buca, una gobba e un tratto orizzontale" caption="Fig. 4.2 — Energia potenziale E_p(x) qualitativa con tre tipi di equilibrio: minimo isolato (stabile), massimo isolato (instabile) e tratto piatto (indifferente, nessuna forza di richiamo)"}
:::

:::image{src="assets/cfcb3087-energia-potenziale-pozzo.svg" alt="Energia potenziale a forma di parabola con minimo nell'origine" caption="Fig. 4.3 — Energia potenziale elastica E_p(x) = (1/2) k x^2: il minimo in x = 0 è una posizione di equilibrio stabile"}
:::

Un tipico errore è dimenticare che la condizione di equilibrio riguarda la derivata prima di $E_p$, non il suo valore: un punto in cui $E_p$ è grande ma costante (un tratto piatto del grafico) è comunque un punto di equilibrio, mentre un punto in cui $E_p$ è piccolo ma con pendenza diversa da zero non lo è. Un secondo errore, già segnalato a proposito del lavoro, è scrivere uguaglianze dimensionalmente incoerenti nei passaggi intermedi, per esempio confondendo un numero puro con una grandezza dotata di unità; ogni singola uguaglianza di una catena di passaggi deve avere senso dimensionale, non solo il primo e l'ultimo membro.

Queste idee di energia potenziale e di equilibrio a partire da $E_p(x)$ saranno riprese nello studio del moto nel campo gravitazionale, nella sezione sulle [forze centrali](ref:chapter/5#p4), e torneranno nel bilancio energetico dei sistemi di punti materiali trattato più avanti nel capitolo sui sistemi.
