---
chapter: 8
title: Corpo rigido: cinematica e inerzia
---

## p1 | Introduzione

Per descrivere il moto di un corpo rigido non basta seguire un singolo punto: occorre capire come si combinano la traslazione del centro di massa e la rotazione del corpo. Questa prospettiva permette di collegare il moto dei diversi punti, calcolare l’energia e il momento angolare e affrontare situazioni concrete come una ruota che rotola o un’asta in equilibrio. Il momento d’inerzia misura quanto la distribuzione della massa rispetto a un asse influenza la rotazione; perciò saperlo calcolare e riferire correttamente all’asse scelto è essenziale sia nella dinamica sia nei problemi di statica.

È utile conoscere già i sistemi di punti: la posizione del centro di massa, la quantità di moto e i momenti delle forze. Su queste basi si può interpretare un corpo rigido come un insieme di punti le cui distanze reciproche restano costanti, e distinguere i suoi diversi tipi di moto.

Al termine del capitolo saprai descrivere la velocità dei punti di un corpo in moto generale, calcolare momenti d’inerzia per forme semplici e corpi composti e trasportarli tra assi paralleli. Potrai usare i teoremi di Huygens-Steiner e di König, riconoscere quando momento angolare e velocità angolare sono paralleli e impostare le condizioni di equilibrio per ricavare tensioni e reazioni vincolari, scegliendo con criterio il polo e trattando l’attrito statico come una forza incognita entro il suo limite.

## p2 | Corpo rigido e suoi moti

### Definizione e proprietà del corpo rigido

**Definizione 8.1** (corpo rigido). Un sistema fisico composto da un insieme di punti materiali sottoposti a un'interazione mutua tale da mantenerli in posizione fissa l'uno rispetto all'altro è chiamato corpo rigido. Equivalentemente, dati due punti qualsiasi $i$ e $j$ del corpo, con masse $m_i$ e $m_j$, la loro distanza reciproca resta costante nel tempo.

Nel modello ideale il corpo rigido è indeformabile; nella realtà ogni corpo si deforma in qualche misura sotto l'azione delle forze, ma l'approssimazione di rigidità è ottima quando le deformazioni sono trascurabili rispetto alle dimensioni del problema.

Una conseguenza importante riguarda il centro di massa: a differenza di un generico sistema di punti materiali, in un corpo rigido il centro di massa non cambia posizione rispetto agli altri punti del corpo, ma occupa sempre un punto ben determinato (anche se eventualmente esterno al corpo). Questo permette di trattare il centro di massa come un vero e proprio punto geometrico solidale al corpo.

Per un sistema rigido valgono tutte le proprietà generali già stabilite per un sistema di punti materiali: le forze interne hanno risultante e momento nulli rispetto a qualunque polo (si veda [Forze interne ed esterne](ref:chapter/7#p2)), per cui valgono la prima e la seconda equazione cardinale ([Prima equazione cardinale e quantità di moto](ref:chapter/7#p4), [Momento angolare di un sistema](ref:chapter/7#p5)). In un corpo rigido, inoltre, le distanze reciproche sono costanti, per cui il lavoro delle forze interne è identicamente nullo: questa proprietà, già anticipata nella sezione sulle forze interne ed esterne, sarà sfruttata nel teorema dell'energia cinetica del corpo rigido.

### Moti del corpo rigido

Si distinguono tre tipi fondamentali di moto rigido.

**Moto di traslazione.** Tutti i punti del corpo descrivono traiettorie identiche (sovrapponibili per traslazione) e hanno, in ogni istante, la stessa velocità, pari a quella del centro di massa; questa velocità può variare nel tempo in modulo, direzione e verso. Conoscere il moto del centro di massa equivale quindi a conoscere il moto di ogni punto del corpo. In questo caso la dinamica del corpo rigido si riduce a quella di un punto materiale di massa pari alla massa totale, situato nel centro di massa; il momento angolare rispetto a un polo $O$ vale semplicemente

$$
\vec{L}_O = \vec{r}_{CM}\times m\vec{v}_{CM} = \vec{r}_{CM}\times\vec{p},
$$

dove $\vec{p}$ è la quantità di moto totale del sistema: $\vec{L}_O$ dipende quindi soltanto dal moto del centro di massa.

**Moto di rotazione attorno a un asse fisso.** Tutti i punti del corpo descrivono traiettorie circolari, giacenti su piani fra loro paralleli, con i centri delle circonferenze allineati su un unico asse, detto asse di rotazione. La rigidità del corpo impone che, in un dato istante, tutti i punti abbiano la stessa velocità angolare $\vec{\omega}$, parallela all'asse di rotazione; le velocità tangenziali dei singoli punti sono invece diverse, proporzionali alla distanza $R_i$ dall'asse secondo $v_i = \omega R_i$. L'equazione dinamica fondamentale di questo moto è il teorema del momento angolare, già visto per i sistemi di punti,

$$
\vec{M}_O = \frac{d\vec{L}_O}{dt},
$$

che in questo contesto è anche nota come seconda equazione cardinale applicata alla rotazione; la sua forma scalare rispetto all'asse $z$ di rotazione, con il momento d'inerzia $I_z$, sarà ricavata nella sezione su [Rotazione attorno a un asse fisso](ref:chapter/9#p2).

**Moto di rototraslazione.** È il moto rigido più generale: ogni spostamento infinitesimo del corpo può sempre essere scomposto nella somma di una traslazione infinitesima, individuata da $\vec{v}$, e di una rotazione infinitesima, individuata da $\vec{\omega}$, entrambe in generale variabili nel tempo. Per descriverlo si impiegano contemporaneamente il teorema del moto del centro di massa e il teorema del momento angolare, scegliendo come polo un punto fisso del riferimento inerziale oppure il centro di massa.

### La relazione fondamentale delle velocità in un corpo rigido

Consideriamo due punti generici $P$ e $Q$ di un corpo rigido in moto di rototraslazione, e un punto $O$ (anch'esso solidale al corpo, eventualmente coincidente con il centro di massa). Le velocità di $P$ e $Q$ si scrivono

$$
\vec{v}_P = \vec{v}_O + \vec{\omega}\times\vec{OP}, \qquad \vec{v}_Q = \vec{v}_O + \vec{\omega}\times\vec{OQ},
$$

dove $\vec{v}_O$ rappresenta il contributo di traslazione (la velocità che avrebbe l'intero corpo se non ruotasse) e il secondo termine rappresenta una rotazione istantanea attorno a un asse passante per $O$, con velocità angolare $\vec{\omega}$.

Per un corpo rigido, la velocità angolare istantanea è unica e comune a tutti i suoi punti, indipendentemente dal punto scelto per descrivere il moto. Le due relazioni esprimono dunque questa stessa velocità angolare; sottraendole si ricava la relazione tra le velocità di $P$ e $Q$.

$$
\vec{v}_P - \vec{v}_Q = \vec{\omega}\times(\vec{OP}-\vec{OQ}) = \vec{\omega}\times\vec{QP} \quad\Longrightarrow\quad \vec{v}_P = \vec{v}_Q + \vec{\omega}\times\vec{QP}.
$$

:::formula{id="8.1" label="Relazione delle velocità in un corpo rigido"}
$$
\vec{v}_P = \vec{v}_{O'} + \vec{\omega}\times\vec{O'P}
$$
:::

dove $O'$ è un punto arbitrario, solidale al corpo rigido (eventualmente mobile nel riferimento inerziale), $\vec{v}_{O'}$ è la sua velocità e $\vec{\omega}$ è la velocità angolare del corpo, la stessa per tutti i punti.

Il moto di $P$ risulta ancora una rototraslazione, caratterizzata però dalla velocità $\vec{v}_Q$ (o $\vec{v}_{O'}$) del nuovo polo e dalla stessa velocità angolare $\vec{\omega}$, che individua un asse di rotazione istantaneo passante per il nuovo polo. In particolare, se il punto scelto come polo è istantaneamente fermo, il moto si riduce, in quell'istante, a una pura rotazione attorno a esso. La velocità angolare delle due descrizioni (rispetto a $O$ o rispetto a $Q$) coincide, perché in un intervallo di tempo $dt$ l'angolo $d\theta$ descritto in una rotazione è lo stesso angolo descritto nell'altra, essendo il corpo indeformabile.

Questa relazione è formalmente identica al teorema delle velocità relative già incontrato per riferimenti mobili (si veda [Velocità e accelerazioni relative](ref:chapter/6#p2), [formula (6.2)](ref:formula/6.2)), nel caso particolare in cui il punto in esame sia fermo rispetto al riferimento mobile ($\vec{v}' = \vec{0}$): il riferimento mobile solidale al corpo rigido gioca qui il ruolo del corpo stesso.

### Esempio svolto: velocità dei punti di una ruota che rotola

**Dati.** Una ruota di raggio $R$ rotola su un piano orizzontale. Il centro $O$ della ruota si muove con velocità $\vec{v}_O$ orizzontale e la ruota ruota con velocità angolare $\vec{\omega}$ (perpendicolare al piano del moto). Si vuole la velocità del punto $C$ di contatto con il piano e del punto $A$ diametralmente opposto a $C$ (in cima alla ruota), nell'ipotesi che il punto di contatto abbia velocità nulla (puro rotolamento).

**Schema e riferimento.** Si pone l'asse $x$ orizzontale nel senso del moto, l'asse $y$ verticale verso l'alto, origine nel centro $O$ della ruota; $\vec{OC} = -R\,\hat{u}_y$, $\vec{OA} = R\,\hat{u}_y$, $\vec{\omega} = -\omega\,\hat{u}_z$ (rotazione orientata in modo che la ruota avanzi verso $+x$).

**Equazioni.** Dalla relazione {{formula:8.1}} con polo $O$,

$$
\vec{v}_C = \vec{v}_O + \vec{\omega}\times\vec{OC}, \qquad \vec{v}_A = \vec{v}_O + \vec{\omega}\times\vec{OA}.
$$

**Soluzione letterale.** Con $\vec{v}_O = v_O\,\hat{u}_x$ e $\vec{\omega}=-\omega\hat{u}_z$,

$$
\vec{\omega}\times\vec{OC} = (-\omega\hat{u}_z)\times(-R\hat{u}_y) = -\omega R\,\hat{u}_x, \qquad \vec{\omega}\times\vec{OA} = (-\omega\hat{u}_z)\times(R\hat{u}_y) = \omega R\,\hat{u}_x,
$$

da cui

$$
v_C = v_O - \omega R, \qquad v_A = v_O + \omega R.
$$

Imponendo la condizione di puro rotolamento, $v_C = 0$, si ottiene la relazione $v_O = \omega R$, coerente con quanto si ritroverà nella sezione sul [Rotolamento](ref:chapter/9#p4): il punto di contatto ha in ogni istante velocità nulla nel riferimento del laboratorio, perché la velocità di trascinamento del centro di massa e la velocità di rotazione del punto di contatto attorno al centro si cancellano esattamente. Con $v_O=\omega R$ si trova allora $v_A = 2\omega R = 2v_O$: il punto più alto della ruota si muove al doppio della velocità del centro.

**Controllo.** Dimensionalmente $\lbrack \omega R\rbrack  = \mathrm{rad/s}\cdot\mathrm{m} = \mathrm{m/s}$, coerente con una velocità; il risultato $v_A = 2v_O$ è ragionevole perché $A$ è istantaneamente il punto più lontano dal centro di istantanea rotazione $C$ (distanza $2R$), mentre $O$ ne è a distanza $R$, e nel moto di rotazione istantanea attorno a $C$ la velocità è proporzionale alla distanza da $C$.

### Errore tipico

Un errore frequente è trattare $\vec{\omega}$ come se dipendesse dal punto scelto come polo, ad esempio scrivendo una $\vec{\omega}$ diversa per ciascun punto del corpo rigido: la relazione {{formula:8.1}} mostra invece che $\vec{\omega}$ è un'unica grandezza, comune a tutto il corpo, indipendente dal polo; solo la velocità di traslazione $\vec{v}_{O'}$ cambia al cambiare del polo. Un secondo errore è confondere il punto di contatto istantaneo (centro di istantanea rotazione) con un punto materiale fisso del corpo: nel rotolamento il punto geometrico di contatto cambia istante per istante, pur avendo velocità nulla in ciascun istante.

## p3 | Momento d'inerzia

### Definizione di momento d'inerzia

Nella sezione precedente abbiamo visto che, per un corpo rigido che ruota attorno a un asse $z$ fisso, la componente assiale del momento angolare totale si scrive $L_z = I_z\omega$, dove compare la grandezza scalare

:::formula{id="8.2" label="Momento d'inerzia di un sistema discreto"}
$$I_z = \sum_i m_i R_i^2 = \sum_i m_i (x_i^2 + y_i^2)$$
:::

con $R_i$ distanza del punto $i$-esimo dall'asse $z$. Il momento d'inerzia gioca, nei moti rotatori, lo stesso ruolo che la massa gioca nei moti traslatori: misura l'inerzia del corpo rispetto alle variazioni di velocità angolare. A differenza della massa, però, $I_z$ non è una proprietà intrinseca del corpo: per calcolarlo occorre conoscere non solo la distribuzione delle masse ma anche la posizione e l'orientazione dell'asse rispetto al corpo stesso. Lo stesso corpo ha quindi momenti d'inerzia diversi rispetto ad assi diversi, anche se tutti passano per lo stesso punto.

Per un corpo rigido continuo, la somma discreta diventa un integrale sulla distribuzione di massa.

:::formula{id="8.3" label="Momento d'inerzia di un corpo continuo"}
$$I_z = \int R^2\, dm$$
:::

A seconda di come è distribuita la massa, l'integrale si può scrivere usando la densità volumica $\rho$, superficiale $\sigma$ o lineare $\lambda$ e la misura corrispondente:

$$I_z = \int_V R^2\rho\, dV, \qquad I_z = \int_S R^2\sigma\, dS, \qquad I_z = \int_L R^2\lambda\, d\ell$$

dove $R$ è la distanza dall'asse di rotazione. Le densità sono introdotte nella sezione sul [centro di massa](ref:chapter/7#p3). Il momento d'inerzia è inoltre una grandezza **additiva**: se un corpo è l'unione di parti disgiunte, il momento d'inerzia totale rispetto a un dato asse è la somma dei momenti d'inerzia delle singole parti calcolati rispetto a quello stesso asse.

:::formula{id="8.4" label="Additività del momento d'inerzia"}
$$I_{\text{tot}} = \sum_k I_k \qquad \text{(tutti gli } I_k \text{ rispetto allo stesso asse)}$$
:::

### Calcolo per integrazione dei corpi omogenei notevoli

**Asta sottile omogenea.** Sia $M$ la massa e $L$ la lunghezza, con densità lineare $\lambda = M/L$ costante. Ponendo l'origine nel centro dell'asta e l'asse $z$ perpendicolare all'asta nel suo punto medio, un elemento di massa $dm = \lambda\, dx$ a distanza $x$ dall'asse contribuisce con $x^2\, dm$. Integrando tra $-L/2$ e $L/2$:

$$I_{CM} = \int_{-L/2}^{L/2} \lambda x^2\, dx = \lambda \left\lbrack \frac{x^3}{3}\right\rbrack _{-L/2}^{L/2} = \lambda \frac{L^3}{12} = \frac{1}{12} M L^2$$

:::formula{id="8.5" label="Momento d'inerzia dell'asta rispetto al centro"}
$$I_{CM} = \frac{1}{12} M L^2$$
:::

Questo risultato è confermato dalle fonti del corso. Se invece l'asse passa per un estremo dell'asta, l'integrazione va da $0$ a $L$:

$$I_p = \int_0^L \lambda x^2\, dx = \frac{1}{3} M L^2$$

:::formula{id="8.6" label="Momento d'inerzia dell'asta rispetto a un estremo"}
$$I_p = \frac{1}{3} M L^2$$
:::

coerente con il valore riportato nelle fonti per l'asta incernierata a un perno all'estremo. Si osservi che $I_p > I_{CM}$: spostare l'asse lontano dal centro di massa aumenta sempre il momento d'inerzia, come sarà formalizzato dal teorema di Huygens-Steiner nella sezione successiva.

**Anello sottile.** Se tutta la massa $M$ è distribuita a distanza $R$ dall'asse centrale (perpendicolare al piano dell'anello e passante per il suo centro), ogni elemento contribuisce con lo stesso $R^2$, per cui l'integrale si riduce a

:::formula{id="8.7" label="Momento d'inerzia dell'anello rispetto all'asse centrale"}
$$I = M R^2$$
:::

risultato usato ad esempio nel moto di un anello che rotola. Rispetto a un diametro (asse nel piano dell'anello, passante per il centro), per simmetria il momento d'inerzia si dimezza rispetto a un diametro ortogonale, e la somma dei due deve eguagliare $I$ dell'asse centrale (teorema degli assi perpendicolari per figure piane): si ottiene $I = \frac{1}{2}MR^2$.

**Disco (o cilindro pieno) omogeneo.** Sia $M$ la massa, $R$ il raggio, densità superficiale $\sigma = M/(\pi R^2)$. Scomponendo il disco in corone circolari sottili di raggio $r$ e spessore $dr$, la massa della corona è $dm = \sigma\, 2\pi r\, dr$ e il suo contributo al momento d'inerzia (rispetto all'asse perpendicolare al disco passante per il centro) è $r^2\, dm$. Integrando:

$$I = \int_0^R r^2\, \sigma\, 2\pi r\, dr = 2\pi\sigma \frac{R^4}{4} = \frac{1}{2}\sigma \pi R^2\, R^2 = \frac{1}{2} M R^2$$

:::formula{id="8.8" label="Momento d'inerzia del disco rispetto all'asse centrale"}
$$I = \frac{1}{2} M R^2$$
:::

in accordo con le fonti, che riportano questo valore sia per il disco libero sia per il disco di un sistema puleggia-massa. Rispetto a un diametro passante per il centro, tenendo conto anche dell'eventuale spessore (lunghezza) $L$ del cilindro lungo l'asse, vale $I = \frac{1}{4}MR^2 + \frac{1}{12}ML^2$; per un disco sottile ($L\to 0$) si riduce a $I=\frac14 MR^2$.

:::formula{id="8.9" label="Momento d'inerzia del disco rispetto a un diametro"}
$$I_{\text{diametro}} = \frac{1}{4} M R^2 + \frac{1}{12} M L^2$$
:::

**Cilindro cavo (corona cilindrica).** Per un cilindro con raggio interno $R_1$ e raggio esterno $R_2$, lo stesso integro di corone circolari tra $R_1$ e $R_2$ dà, rispetto all'asse centrale,

:::formula{id="8.10" label="Momento d'inerzia del cilindro cavo"}
$$I = \frac{1}{2} M (R_1^2 + R_2^2)$$
:::

che per $R_1\to 0$ riproduce il disco pieno e per $R_1\to R_2$ riproduce l'anello sottile.

**Sfera.** Per una sfera piena omogenea di massa $M$ e raggio $R$, scomponiamo il volume in dischi sottili perpendicolari a un diametro, che prendiamo come asse $z$, con $-R\le z\le R$. Il raggio del disco alla quota $z$ è dato dall'equazione della sfera, $r(z) = \sqrt{R^2-z^2}$, e la sua massa è $dm = \rho\, \pi\, r(z)^2\, dz$, con $\rho = \dfrac{M}{\frac{4}{3}\pi R^3}$. Ogni disco ruota attorno al proprio asse centrale, quindi contribuisce con $\frac12 r(z)^2\, dm$ (si veda il risultato del disco omogeneo sopra). Integrando su tutta la sfera:

$$I = \int_{-R}^{R} \frac12 r(z)^2\, dm = \frac12 \rho\pi \int_{-R}^{R} \left(R^2-z^2\right)^2 dz = \frac12 \rho\pi \cdot \frac{16}{15}R^5 = \frac{2}{5} M R^2$$

si ottiene quindi rispetto a un diametro

:::formula{id="8.11" label="Momento d'inerzia della sfera piena"}
$$I = \frac{2}{5} M R^2$$
:::

valore utilizzato ad esempio nel rotolamento di una sfera su un piano inclinato. Per un guscio sferico sottile (tutta la massa sulla superficie, a distanza $R$ dal centro), un'analoga integrazione sulla superficie dà

:::formula{id="8.12" label="Momento d'inerzia del guscio sferico sottile"}
$$I = \frac{2}{3} M R^2$$
:::

coerentemente con le fonti del corso. In entrambi i casi il momento d'inerzia è lo stesso rispetto a qualunque diametro, per la simmetria sferica della distribuzione di massa.

### Momento d'inerzia di corpi composti

Quando un corpo rigido è costituito da più parti rigidamente connesse (per esempio un'asta con un disco alle estremità, o un sistema di dischi coassiali), il momento d'inerzia totale rispetto a un asse si calcola sommando i momenti d'inerzia delle singole parti, **tutti calcolati rispetto allo stesso asse**. Se una parte non ha l'asse di rotazione passante per il proprio centro di massa, occorrerà prima trasportare il suo momento d'inerzia con il teorema di Huygens-Steiner, trattato nella sezione successiva; qui ci limitiamo al caso in cui l'asse comune passa già per il centro di massa di ciascuna parte.

Un esempio istruttivo è il doppio disco coassiale: se due dischi di raggi $R_1, R_2$ e masse $m_1, m_2$ condividono lo stesso asse di rotazione perpendicolare passante per i rispettivi centri, il momento d'inerzia dell'insieme è semplicemente

$$I_{DD} = I_1 + I_2 = \frac{1}{2} m_1 R_1^2 + \frac{1}{2} m_2 R_2^2$$

Se, per esempio, $R_2 = 2R_1$ e $m_2 = 1{,}5\, m_1$, si ottiene $I_{DD} = \frac12 m_1 R_1^2 + \frac12 \cdot 1{,}5\, m_1 (2R_1)^2 = \left(\frac12+3\right)m_1 R_1^2 = \frac{7}{2} m_1 R_1^2$.

**Esempio 8.1** (disco e asta sovrapposti).

*Dati.* Un disco omogeneo di massa $m_D = 2{,}4$ kg e raggio $R=16$ cm ruota attorno al proprio asse verticale centrale con velocità angolare costante $\omega_1 = 10\ \text{s}^{-1}$. All'istante $t=0$ si appoggia sul disco, concentrica con esso, un'asta omogenea inizialmente ferma, di massa $m_A = m_D$ e lunghezza $d = 2R$, con il centro dell'asta coincidente con il centro del disco. Tra disco e asta c'è attrito, che li porta a ruotare insieme con velocità angolare $\omega_2$. Si chiede $\omega_2$.

*Schema e riferimento.* Prendiamo come polo l'asse $z$ di rotazione, verticale, passante per i centri comuni di disco e asta. L'attrito tra disco e asta è una forza interna al sistema {disco+asta}; non ci sono momenti esterni assiali (il perno non esercita momento lungo $z$), quindi il momento angolare assiale $L_z$ si conserva durante l'interazione.

*Equazioni.* Prima dell'urto solo il disco ruota: $L_z(0) = I_D \omega_1$. Dopo, disco e asta ruotano insieme con $\omega_2$: $L_z(t_{\text{fin}}) = (I_D+I_A)\omega_2$. Dalla conservazione:

$$I_D \omega_1 = (I_D + I_A)\, \omega_2 \quad\Rightarrow\quad \omega_2 = \frac{I_D}{I_D+I_A}\,\omega_1$$

*Soluzione letterale.* Con $I_D = \frac12 m_D R^2$ (asse centrale del disco) e $I_A = \frac{1}{12} m_A d^2$ (asse per il centro dell'asta, perpendicolare a essa, coincidente con l'asse del disco), e usando $d=2R$, $m_A=m_D$:

$$\omega_2 = \frac{\tfrac12 m_D R^2}{\tfrac12 m_D R^2 + \tfrac{1}{12} m_D (2R)^2}\,\omega_1 = \frac{\tfrac12}{\tfrac12+\tfrac13}\,\omega_1 = \frac{m_D}{m_D + \tfrac23 m_A}\,\omega_1 = \frac{3}{5}\,\omega_1$$

.

*Numeri.* $I_D = \tfrac12(2{,}4\ \text{kg})(0{,}16\ \text{m})^2 = 0{,}0307\ \text{kg}\cdot\text{m}^2$; $I_A = \tfrac{1}{12}(2{,}4\ \text{kg})(0{,}32\ \text{m})^2 = 0{,}0205\ \text{kg}\cdot\text{m}^2$; $I_D+I_A = 0{,}0512\ \text{kg}\cdot\text{m}^2$. Quindi $\omega_2 = \dfrac{0{,}0307}{0{,}0512}\cdot 10\ \text{s}^{-1} = 6{,}0\ \text{s}^{-1}$.

*Controllo.* Il risultato ha le dimensioni corrette di una velocità angolare; $\omega_2 < \omega_1$ come atteso, poiché il momento d'inerzia totale è aumentato (l'asta si aggiunge al disco) e il momento angolare, conservandosi, impone una velocità angolare più piccola.

**Errore tipico 8.1.** Un errore frequente è sommare momenti d'inerzia calcolati rispetto ad assi diversi (per esempio il momento d'inerzia di una parte rispetto al proprio centro di massa e quello di un'altra parte rispetto a un asse esterno), oppure usare $I_A = \frac{1}{3}m_A d^2$ (formula per l'asse a un estremo) quando l'asse passa invece per il centro dell'asta: la formula corretta va scelta in base alla posizione effettiva dell'asse rispetto al corpo, non per abitudine. Un secondo errore tipico è dimenticare che il momento d'inerzia di un corpo continuo richiede un vero integrale sulla distribuzione di massa, e non può essere ottenuto trattando tutta la massa come concentrata nel centro di massa (questo darebbe $I=0$ per un corpo che ruota attorno a un asse passante per il proprio centro di massa, risultato in generale sbagliato). Infine, va sempre verificato che l'asse di integrazione sia quello richiesto dal problema: lo stesso corpo ha momenti d'inerzia diversi rispetto ad assi diversi, anche se paralleli, come mostrato dal confronto tra $I_{CM}=\frac{1}{12}ML^2$ e $I_p=\frac13ML^2$ per l'asta.

## p4 | Teoremi di Huygens-Steiner e di König

Nella sezione precedente abbiamo calcolato il momento d'inerzia di asta, anello, disco, cilindro e sfera rispetto ad assi che passano per il centro di massa o che coincidono con assi di simmetria. Nella pratica, però, un corpo rigido ruota spesso attorno a un asse qualsiasi, non baricentrico: una porta attorno ai suoi cardini, un'asta incernierata a un estremo, una ruota che oscilla attorno a un perno decentrato. Calcolare $I$ per integrazione diretta rispetto a un asse generico può essere complicato; il teorema di Huygens-Steiner permette di ottenere il momento d'inerzia rispetto a un asse qualsiasi a partire da quello, spesso già noto, calcolato rispetto a un asse parallelo passante per il centro di massa.

Il secondo tema della sezione è l'estensione dei teoremi di König, già visti per un generico sistema di punti, al caso particolare del corpo rigido: vedremo come energia cinetica e momento angolare di un corpo rigido in rototraslazione si scrivano come somma di un termine "di centro di massa" e di un termine "di rotazione pura", con quest'ultimo espresso tramite il momento d'inerzia.

### Il teorema di Huygens-Steiner

**Teorema 8.1** (di Huygens-Steiner). Sia un corpo rigido di massa $m$ e sia $z'$ un asse passante per il centro di massa del corpo. Sia $z$ un asse parallelo a $z'$, a distanza $a$ da esso. Allora il momento d'inerzia del corpo rispetto a $z$ si scrive

:::formula{id="8.13" label="Teorema di Huygens-Steiner"}
$$I_z = I_{CM} + m a^2$$
:::

dove $I_{CM}$ è il momento d'inerzia del corpo rispetto all'asse $z'$ baricentrico.

**Dimostrazione.** Si scelga $O$ come proiezione ortogonale del centro di massa sull'asse $z$. Si considerino due sistemi di coordinate con assi $z$ e $z'$ paralleli, il primo con origine $O$ e il secondo con origine nel centro di massa. Si orienti l'asse $y'$ lungo la congiungente $OO'$, così che la distanza tra i due assi sia $a$ e le coordinate siano legate da

$$x = x', \qquad z = z', \qquad y = y' + a.$$

Il momento d'inerzia di un generico punto $P_i$ del corpo rispetto all'asse $z$ è $m_i(x_i^2+y_i^2)$. Sommando su tutti i punti e usando la trasformazione di coordinate,

$$
\begin{aligned}
I_z &= \sum_i m_i\left(x_i^2+y_i^2\right) = \sum_i m_i\left[x_i'^2+(y_i'+a)^2\right] \\
&= \sum_i m_i\left(x_i'^2+y_i'^2\right) + a^2\sum_i m_i + 2a\sum_i m_i y_i'.
\end{aligned}
$$

Il primo termine è per definizione il momento d'inerzia $I_{CM}$ rispetto all'asse baricentrico $z'$; il secondo termine è $ma^2$; il terzo termine è nullo perché $\sum_i m_i y_i' = m\, y'_{CM}$, e la coordinata $y'$ del centro di massa, valutata nel sistema con origine nel centro di massa stesso, è per definizione uguale a zero. Si ottiene così $I_z = I_{CM} + ma^2$. $\blacksquare$

Il teorema è utile in due direzioni: permette di calcolare $I_z$ noto $I_{CM}$ (il caso più frequente), oppure, viceversa, di ricavare $I_{CM}$ a partire da un momento d'inerzia già noto rispetto a un asse decentrato. Si osservi che, per $a=0$, la formula si riduce all'identità $I_z = I_{CM}$: tra tutti gli assi paralleli a una direzione fissata, l'asse baricentrico è quello di momento d'inerzia minimo, poiché $ma^2 \ge 0$.

**Errore tipico 8.2.** Il teorema si applica solo tra un asse qualsiasi e l'asse *parallelo passante per il centro di massa*: non è lecito applicarlo direttamente tra due assi paralleli entrambi non baricentrici. In tal caso occorre passare per l'asse baricentrico come tappa intermedia, cioè calcolare prima $I_{CM} = I_{z_1} - m a_1^2$ e poi $I_{z_2} = I_{CM} + m a_2^2$.

### Esempio: momento d'inerzia dell'asta rispetto a un estremo

Si consideri un'asta omogenea di massa $M$ e lunghezza $l$, di cui è noto, per integrazione diretta, il momento d'inerzia rispetto all'asse baricentrico perpendicolare all'asta, $I_{CM} = \frac{1}{12}Ml^2$. Si vuole il momento d'inerzia $I_p$ rispetto a un asse parallelo passante per un estremo.

La distanza tra l'asse baricentrico e l'asse all'estremo è $a = l/2$. Per il teorema di Huygens-Steiner,

$$I_p = I_{CM} + M\left(\frac{l}{2}\right)^2 = \frac{1}{12}Ml^2 + \frac{1}{4}Ml^2 = \frac{1}{3}Ml^2.$$

Il controllo dimensionale è immediato ($\lbrack I\rbrack  = \text{kg}\cdot\text{m}^2$); l'ordine di grandezza è coerente, e il risultato $I_p = \frac{1}{3}Ml^2$ è quello standard usato nei problemi di pendolo composto e di asta incernierata a un estremo.

### I teoremi di König per un sistema di punti: richiamo

Nella sezione sul [momento angolare di un sistema](ref:chapter/7#p5) e in quella sull'[energia cinetica di un sistema](ref:chapter/7#p6) sono già stati enunciati e dimostrati i due teoremi di König per un generico sistema di punti materiali. Li richiamiamo qui perché nel corpo rigido assumono una forma particolarmente semplice.

Per un sistema di punti, assunto un polo $O$ fisso nel riferimento inerziale, si definisce il riferimento del centro di massa come il riferimento con origine nel centro di massa e assi paralleli a quelli inerziali; tale riferimento è in generale non inerziale, ma la quantità di moto totale calcolata al suo interno è sempre nulla, e il momento angolare rispetto al centro di massa ha lo stesso valore sia calcolato nel riferimento inerziale sia calcolato nel riferimento del centro di massa.

Decomponendo $\vec{r}_i = \vec{r}_{CM} + \vec{r}_i'$ e $\vec{v}_i = \vec{v}_{CM} + \vec{v}_i'$ nella definizione di momento angolare, i termini misti si annullano perché $\sum_i m_i \vec{r}_i' = 0$ e $\sum_i m_i \vec{v}_i' = 0$, e si ottiene il **primo teorema di König**, [formula (7.16)](ref:formula/7.16), cioè $\vec{L}_O = \vec{r}_{CM}\times m\vec{v}_{CM} + \vec{L}'$: il momento angolare del sistema è la somma del momento angolare del centro di massa (come se tutta la massa fosse concentrata lì) e del momento angolare relativo al centro di massa.

Analogamente, decomponendo la velocità nell'espressione dell'energia cinetica totale, il termine misto $\sum_i m_i \vec{v}_{CM}\cdot\vec{v}_i'$ si annulla per lo stesso motivo, e si ottiene il **secondo teorema di König**, [formula (7.19)](ref:formula/7.19), cioè $E_k = \frac{1}{2}Mv_{CM}^2 + E_k'$: l'energia cinetica del sistema è la somma dell'energia cinetica del centro di massa e dell'energia cinetica relativa al centro di massa.

### Applicazione al corpo rigido

Nel caso del corpo rigido, il moto nel riferimento del centro di massa è una pura rotazione con velocità angolare $\vec{\omega}$ (la stessa velocità angolare del moto assoluto, poiché $\vec{\omega}$ non dipende dal polo, come già osservato nella sezione sul [corpo rigido e i suoi moti](ref:chapter/8#p2)). Se l'asse di rotazione è un asse principale d'inerzia o un asse di simmetria, in modo che $\vec{L}'$ risulti parallelo a $\vec{\omega}$, i due teoremi di König si traducono nelle forme seguenti.

Per il momento angolare assiale, usando $L_z' = I_{CM}\omega$ (con $I_{CM}$ momento d'inerzia rispetto all'asse baricentrico parallelo a $\vec{\omega}$):

:::formula{id="8.14" label="Momento angolare di un corpo rigido (König)"}
$$\vec{L}_O = \vec{r}_{CM}\times m\vec{v}_{CM} + I_{CM}\,\vec{\omega}$$
:::

Per l'energia cinetica, usando $E_k' = \frac{1}{2}I_{CM}\omega^2$ (energia cinetica di rotazione pura attorno al centro di massa):

:::formula{id="8.15" label="Energia cinetica di un corpo rigido (König)"}
$$E_k = \frac{1}{2}Mv_{CM}^2 + \frac{1}{2}I_{CM}\omega^2$$
:::

Quest'ultima formula si ricava anche direttamente dal teorema di Huygens-Steiner: se il corpo ruota con velocità angolare $\omega$ attorno a un asse fisso $z$, parallelo a quello baricentrico e a distanza $a$ da esso, l'energia cinetica di rotazione attorno a $z$ è $E_k = \frac{1}{2}I_z\omega^2$. Sostituendo {{formula:8.13}},

$$E_k = \frac{1}{2}I_z\omega^2 = \frac{1}{2}(I_{CM}+ma^2)\omega^2 = \frac{1}{2}I_{CM}\omega^2 + \frac{1}{2}ma^2\omega^2.$$

Poiché il centro di massa descrive un moto circolare di raggio $a$ attorno a $z$, vale $v_{CM} = a\omega$, da cui $\frac{1}{2}ma^2\omega^2 = \frac{1}{2}mv_{CM}^2$, e si ritrova esattamente {{formula:8.15}}. Questo mostra che il teorema di Huygens-Steiner e il secondo teorema di König, nel caso particolare della rotazione rigida attorno a un asse fisso, sono due modi equivalenti di scrivere la stessa decomposizione dell'energia cinetica.

Nel caso più generale di rototraslazione (il corpo non ruota attorno a un asse fisso nello spazio, ma trasla e ruota insieme), la formula {{formula:8.15}} resta valida, a patto di interpretare $v_{CM}$ come la velocità effettiva del centro di massa e $\omega$ come la velocità angolare istantanea di rotazione attorno al centro di massa; è questa la forma usata, per esempio, nel disco che rotola.

### Esempio svolto: energia cinetica e momento angolare di un sistema su piattaforma mobile

**Dati.** Due punti materiali di uguale massa $m = 0,5\text{ kg}$ sono agli estremi di un'asta rigida di massa trascurabile e lunghezza $2R = 0,40\text{ m}$, e ruotano in un piano orizzontale attorno al centro dell'asta con velocità angolare costante $\omega = 10\text{ s}^{-1}$. Il sistema è montato su una piattaforma che trasla con velocità $v_0 = 0,8\text{ m/s}$. Si vuole l'energia cinetica totale del sistema nel riferimento del laboratorio e il momento angolare rispetto al centro di massa.

**Schema e scelta del riferimento.** Il centro di massa del sistema coincide con il centro dell'asta e si muove solidalmente alla piattaforma con velocità $v_0$; nel riferimento del centro di massa i due punti compiono un moto circolare uniforme di raggio $R$ con velocità angolare $\omega$.

**Equazioni.** Per il secondo teorema di König, [formula (7.19)](ref:formula/7.19),

$$E_k = \frac{1}{2}Mv_{CM}^2 + E_k', \qquad M = 2m.$$

L'energia cinetica relativa al centro di massa si calcola in due modi equivalenti: direttamente dalle velocità relative, $E_k' = \frac{1}{2}m(\omega R)^2 + \frac{1}{2}m(\omega R)^2 = m\omega^2 R^2$, oppure tramite il momento d'inerzia del sistema rispetto all'asse di rotazione, $I = \sum_i m_i d_i^2 = 2mR^2$, da cui $E_k' = \frac{1}{2}I\omega^2 = m\omega^2 R^2$: i due metodi coincidono, come deve essere.

**Soluzione letterale e numerica.**

$$E_k = \frac{1}{2}(2m)v_0^2 + m\omega^2 R^2 = m\left(v_0^2 + \omega^2 R^2\right).$$

Sostituendo $m=0,5\text{ kg}$, $v_0=0,8\text{ m/s}$, $\omega=10\text{ s}^{-1}$, $R=0,20\text{ m}$:

$$E_k = 0,5\text{ kg}\left\lbrack (0,8\text{ m/s})^2 + (10\text{ s}^{-1})^2(0,20\text{ m})^2\right\rbrack  = 0,5\text{ kg}\,(0,64 + 4,00)\text{ m}^2/\text{s}^2 = 2,32\text{ J}.$$

Per il momento angolare relativo al centro di massa, essendo il centro di massa sull'asse di rotazione, $\vec{L}' = I\vec{\omega} = 2mR^2\,\vec{\omega}$; numericamente $|\vec{L}'| = 2(0,5\text{ kg})(0,20\text{ m})^2(10\text{ s}^{-1}) = 0,40\text{ kg}\cdot\text{m}^2/\text{s}$.

**Controllo.** Le unità sono quelle corrette (joule per l'energia, $\text{kg}\cdot\text{m}^2/\text{s}$ per il momento angolare); entrambi i contributi (traslazione del CM e rotazione relativa) sono positivi, come deve essere per energia cinetica e per il modulo del momento angolare.

**Errore tipico 8.3.** Un errore frequente è dimenticare il contributo $\frac{1}{2}Mv_{CM}^2$ quando il centro di massa è in moto (per esempio su una piattaforma mobile), limitandosi a calcolare solo l'energia cinetica di rotazione relativa: i due teoremi di König vanno applicati insieme, non sostituendo l'uno all'altro. Un secondo errore è usare $I_{CM}$ al posto di $I_z$ (o viceversa) senza prima verificare, tramite {{formula:8.13}}, a quale asse ci si riferisce: il momento d'inerzia non è una proprietà intrinseca del corpo, ma dipende sempre dalla posizione dell'asse scelto.

## p5 | Ellissoide d'inerzia

### Il momento d'inerzia rispetto a un asse qualsiasi

Nelle sezioni precedenti abbiamo calcolato il momento d'inerzia di un corpo rigido rispetto ad assi particolari, scelti per la loro simmetria. Vogliamo ora affrontare il problema generale: dato un corpo rigido e un punto $O$ solidale al corpo, come varia il momento d'inerzia al variare dell'asse di rotazione passante per $O$?

Fissiamo in $O$ una terna di assi $x, y, z$ solidale al corpo. Un asse di rotazione passante per $O$ è individuato dal suo versore

$$\hat{u} = \alpha \hat{u}_x + \beta \hat{u}_y + \gamma \hat{u}_z ,$$

dove $\alpha, \beta, \gamma$ sono i coseni direttori dell'asse, cioè le componenti di $\hat{u}$ rispetto alla terna scelta. Per ogni punto $P_i$ del corpo, di vettore posizione $\vec{r}_i = x_i \hat{u}_x + y_i \hat{u}_y + z_i \hat{u}_z$, la distanza dall'asse di rotazione è $R_i = |\hat{u}\times\vec{r}_i|$, da cui il contributo al momento d'inerzia $m_i R_i^2 = m_i(\hat{u}\times\vec{r}_i)^2$.

Sviluppando il prodotto vettoriale in componenti e sommando su tutti i punti del corpo, si ottiene la formula generale

:::formula{id="8.16" label="Momento d'inerzia rispetto a un asse qualsiasi"}
$$I = I_{xx}\alpha^2 + I_{yy}\beta^2 + I_{zz}\gamma^2 - 2I_{xy}\alpha\beta - 2I_{yz}\beta\gamma - 2I_{zx}\gamma\alpha ,$$
:::

valida per qualunque asse passante per $O$, dove $I_{xx}, I_{yy}, I_{zz}$ sono i momenti d'inerzia rispetto agli assi coordinati,

$$I_{xx} = \sum_i m_i(y_i^2+z_i^2), \qquad I_{yy} = \sum_i m_i(x_i^2+z_i^2), \qquad I_{zz} = \sum_i m_i(x_i^2+y_i^2),$$

e $I_{xy} = \sum_i m_i x_i y_i$, $I_{yz} = \sum_i m_i y_i z_i$, $I_{zx} = \sum_i m_i z_i x_i$ sono detti prodotti d'inerzia.

### Il teorema di Poinsot e l'ellissoide d'inerzia

Fissiamo una lunghezza di riferimento $\ell_0$ e un momento d'inerzia di riferimento $I_0$, espresso nella stessa unità usata per $I$, in modo che il rapporto $I_0/I$ sia adimensionale. Prendiamo, su ciascun asse passante per $O$, il punto $P$ tale che $OP = \ell_0\sqrt{I_0/I}$, dove $I$ è il momento d'inerzia relativo a quell'asse: questa distanza ha correttamente le dimensioni di una lunghezza, a differenza di $1/\sqrt{I}$. Indichiamo con $X,Y,Z$ le coordinate geometriche di $P$ nel sistema solidale al corpo, distinte dalle coordinate fisiche $x,y,z$ usate per definire momenti e prodotti d'inerzia. Poiché $P$ giace sull'asse di coseni direttori $\alpha,\beta,\gamma$ a distanza $OP$ da $O$, si ha $X = OP\,\alpha = \ell_0\sqrt{I_0/I}\,\alpha$, e analogamente $Y = \ell_0\sqrt{I_0/I}\,\beta$, $Z = \ell_0\sqrt{I_0/I}\,\gamma$. Sostituendo queste espressioni nella formula generale del momento d'inerzia e semplificando il fattore comune $I$, si ottiene l'equazione

:::formula{id="8.17" label="Equazione dell'ellissoide d'inerzia"}
$$I_{xx}X^2 + I_{yy}Y^2 + I_{zz}Z^2 - 2I_{xy}XY - 2I_{yz}YZ - 2I_{zx}ZX = I_0\ell_0^2 .$$
:::

Il luogo dei punti $P$ che soddisfano questa relazione, al variare dell'asse, è una superficie quadratica. Se il momento d'inerzia è positivo per ogni asse passante per $O$, la superficie è chiusa e prende il nome di **ellissoide d'inerzia del corpo relativo al punto $O$**.

**Teorema 8.2** (di Poinsot). Se il momento d'inerzia è positivo per qualunque asse passante per $O$, l'ellissoide d'inerzia relativo a $O$ è una superficie chiusa, fissa rispetto al corpo e indipendente dalla scelta degli assi usati per calcolarlo: dipende solo dal punto $O$ e dalle costanti di riferimento $\ell_0, I_0$ scelte per costruirlo. La distanza tra $O$ e il punto $P$ in cui un asse passante per $O$ interseca l'ellissoide è $\ell_0\sqrt{I_0/I}$, dove $I$ è il momento d'inerzia del corpo rispetto a quell'asse: nota questa distanza, e fissati $\ell_0, I_0$, si ricava immediatamente $I$. Se invece esiste un asse per cui $I=0$, come può accadere per una distribuzione di massa collineare, la superficie non è chiusa e la costruzione dà una superficie degenere, non un ellissoide.

Questo risultato è notevole: permette di determinare geometricamente il momento d'inerzia rispetto a qualsiasi asse per $O$ una volta nota la superficie dell'ellissoide, senza dover ripetere il calcolo per integrazione per ogni nuova direzione.

### Assi principali d'inerzia

Nel caso generale l'ellissoide ha un diametro massimo e uno minimo, tra loro perpendicolari; questi due assi, insieme a un terzo perpendicolare a entrambi, si chiamano **assi dell'ellissoide**. Se si scelgono come assi $x,y,z$ solidali al corpo proprio questi tre assi, tutti i prodotti d'inerzia si annullano e l'equazione dell'ellissoide si riduce alla forma canonica

:::formula{id="8.18" label="Ellissoide d'inerzia rispetto agli assi principali"}
$$I_x X^2 + I_y Y^2 + I_z Z^2 = 1 ,$$
:::

dove $I_x, I_y, I_z$ sono detti **momenti principali d'inerzia** e i corrispondenti assi **assi principali d'inerzia** relativi a $O$.

**Definizione 8.2.** Se il punto $O$ coincide con il centro di massa del corpo, si parla di **ellissoide centrale d'inerzia** e di **assi centrali d'inerzia**.

Gli assi centrali d'inerzia sono sempre almeno tre e ortogonali tra loro; possono essercene di più se il corpo possiede particolari simmetrie. Se l'ellissoide è una sfera, cioè i momenti principali sono tutti uguali, ogni asse passante per $O$ è un asse principale d'inerzia.

Nella pratica, gli assi principali coincidono con gli assi di simmetria del corpo quando questi esistono: per un cilindro o una sfera omogenea, ad esempio, l'asse geometrico di simmetria è sempre un asse principale.

### Parallelismo tra $\vec{L}$ e $\vec{\omega}$

Il motivo per cui gli assi principali sono importanti è il legame con il momento angolare.

**Teorema 8.3.** Dato un corpo rigido e fissato un punto $O$ solidale al corpo, fisso in un riferimento inerziale (oppure, più in generale, considerando il momento angolare $\vec{L}_O$ calcolato con le velocità dei punti del corpo relative a $O$), esistono almeno tre assi passanti per $O$ e ortogonali tra loro tali che, quando il corpo ruota attorno a uno di essi, il momento angolare $\vec{L}_O$ è parallelo alla velocità angolare $\vec{\omega}$. Questi assi sono gli assi principali d'inerzia relativi a $O$. Se $O$ non è fisso nel riferimento inerziale e non coincide con il centro di massa, il momento angolare calcolato con le velocità assolute contiene in generale anche il termine $m\,\vec{r}_{CM/O}\times\vec{v}_O$, che può rendere il momento angolare non parallelo a $\vec{\omega}$ anche lungo un asse principale: in tal caso conviene sempre riferirsi al momento angolare relativo a $O$.

In tal caso si può scrivere semplicemente

:::formula{id="8.19" label="Parallelismo tra momento angolare e velocità angolare"}
$$\vec{L} = I \vec{\omega}, \qquad L = L_z, \qquad L_{\perp} = 0 ,$$
:::

dove $I$ è il momento principale d'inerzia relativo a quell'asse. Il parallelismo vale anche, in particolare, quando l'asse di rotazione è un asse di simmetria del corpo: in questo caso, per ogni punto del corpo esiste un punto simmetrico dalla parte opposta dell'asse la cui componente ortogonale di momento angolare ha lo stesso modulo e verso opposto, cosicché la somma delle componenti ortogonali si annulla e resta solo $\vec{L} = \vec{L}_z = I_z\vec{\omega}$.

Se invece l'asse di rotazione non è né un asse di simmetria né un asse principale d'inerzia, il momento angolare ha, in generale, anche una componente ortogonale all'asse, $\vec{L}_\perp \neq \vec{0}$. Se il corpo è vincolato a ruotare attorno a quell'asse, fisso nel riferimento inerziale, con velocità angolare $\vec{\omega}$ costante come vettore (stessa direzione e stesso modulo nel tempo), la componente $\vec{L}_\perp$ ruota insieme al corpo, cosicché $\vec{L}$ varia nel tempo descrivendo un moto di precessione attorno all'asse: questo richiede un momento di forze esterne non nullo, tipicamente fornito dai vincoli, anche a $\omega$ costante. Questa conclusione vale per una rotazione imposta attorno a un asse fisso non principale; un corpo rigido libero, in assenza di momento esterno, può invece ruotare istantaneamente attorno a una direzione non principale senza che tale direzione resti fissa nel corpo: in questo caso è la direzione dell'asse di rotazione (e quindi di $\vec{\omega}$) a variare nel tempo, mentre il momento angolare $\vec{L}$ resta costante nel riferimento inerziale.

**Errore tipico 8.4**

Un errore frequente consiste nell'assumere sempre $\vec{L} = I\vec{\omega}$ per un corpo rotante, indipendentemente dall'asse scelto. Questa relazione, con $I$ scalare e $\vec{L}$ parallelo a $\vec{\omega}$, vale solo se l'asse di rotazione è un asse principale d'inerzia (in particolare un asse di simmetria) relativo al polo usato; in caso contrario occorre tenere conto della componente $\vec{L}_\perp$, che in generale non è nulla anche se il corpo ruota attorno a un asse fisso con $\omega$ costante.

Questa distinzione sarà utile nella sezione sulla [statica del corpo rigido](ref:chapter/8#p6) e in generale ogni volta che si debba scrivere il momento angolare di un corpo rigido in rotazione: conviene sempre verificare, prima di usare $L = I\omega$, che l'asse scelto sia effettivamente principale o di simmetria.

## p6 | Statica del corpo rigido

### Condizioni di equilibrio del corpo rigido

Per il punto materiale l'equilibrio statico si riduce all'annullamento della risultante delle forze applicate, come stabilito nella sezione sulle [reazioni vincolari ed equilibrio](ref:chapter/3#p4): $\vec{R} = \vec{0}$ [formula (3.9)](ref:formula/3.9). Per un corpo rigido questa condizione resta necessaria, ma non è più sufficiente: anche se la risultante delle forze esterne è nulla, il corpo può ruotare attorno al proprio centro di massa, perché per un corpo estesa conta anche il punto di applicazione di ciascuna forza, cioè il suo momento.

Le condizioni di equilibrio statico di un corpo rigido, note come equazioni cardinali della statica, richiedono quindi che si annullino simultaneamente la risultante e il momento risultante di tutte le forze esterne rispetto a un polo $O$ scelto a piacere.

:::formula{id="8.20" label="Equazioni cardinali della statica del corpo rigido"}
$$
\begin{cases}
\vec{R}^{(E)} = \sum_i \vec{F}_i^{(E)} = \vec{0} \\[4pt]
\vec{M}_O^{(E)} = \sum_i \vec{M}_{O,i}^{(E)} = \vec{0}
\end{cases}
$$
:::

La prima equazione garantisce che il centro di massa non subisca alcuna accelerazione; la seconda garantisce che il momento angolare rispetto al polo scelto non vari nel tempo. Affinché il corpo rigido resti effettivamente in quiete, cioè privo sia di moto traslatorio sia di moto rotatorio, occorre inoltre che esso sia inizialmente fermo: le equazioni cardinali della statica, da sole, impongono accelerazione del centro di massa e variazione del momento angolare nulle, ma non arrestano un corpo che stia già traslando o ruotando.

Questa osservazione completa quanto visto per la [prima equazione cardinale e quantità di moto](ref:chapter/7#p4) e per la [seconda equazione cardinale](ref:chapter/7#p5): le equazioni cardinali della dinamica, applicate al caso particolare $\vec{a}_{CM} = \vec{0}$ e $d\vec{L}_O/dt = \vec{0}$, si riducono esattamente alle due condizioni di statica appena scritte.

Un fatto fondamentale, dimostrato in generale nella sezione sul [momento di una forza](ref:chapter/5#p2), è che se le due equazioni cardinali sono verificate per una certa scelta del polo $O$, allora sono verificate anche per qualsiasi altra scelta $O'$. L'equilibrio statico è dunque una proprietà del sistema, non del polo utilizzato per calcolare i momenti.

**Errore tipico 8.5**

Un errore frequente consiste nel pensare che, una volta verificato $\vec{R}=\vec{0}$, l'equilibrio sia garantito anche dal punto di vista rotazionale. Non è così: occorre sempre imporre separatamente anche l'annullamento del momento risultante. Un altro errore tipico è ritenere le reazioni vincolari, le tensioni e le forze d'attrito statico dei dati del problema: sono invece incognite che vanno determinate proprio imponendo le equazioni cardinali.

### Scelta del polo e strategia risolutiva

Poiché il risultato non dipende dal polo, è conveniente scegliere come polo un punto in cui è applicata una forza incognita (tipicamente una reazione vincolare), così che il suo momento sia nullo per definizione (braccio nullo) e non compaia nell'equazione dei momenti. Questo riduce il numero di incognite nell'equazione dei momenti.

Lo schema risolutivo per un problema di statica del corpo rigido è il seguente.

1. Si individuano tutte le forze esterne applicate al corpo (pesi, tensioni, reazioni vincolari, attriti), disegnando il diagramma di corpo libero.
2. Si scelgono gli assi cartesiani e si scompongono tutte le forze in componenti.
3. Si impone $\vec{R}^{(E)}=\vec{0}$, ottenendo tante equazioni scalari quante sono le componenti indipendenti.
4. Si scelgono un polo opportuno e si impone $\vec{M}_O^{(E)}=\vec{0}$, calcolando ciascun momento come $\vec{M}_{O,i}=\vec{r}_i\times\vec{F}_i$, con $\vec{r}_i$ dal polo al punto di applicazione della forza.
5. Si risolve il sistema algebrico risultante per le incognite (tensioni, reazioni, angoli di equilibrio).

Nel calcolo dei momenti è essenziale trasportare parallelamente il vettore forza in modo che la sua coda coincida con la coda del vettore posizione dal polo al punto di applicazione, per poter applicare correttamente la regola della mano destra.

### Esempio svolto: il ponte levatoio

**Esempio 8.2** (ponte levatoio)

Una tavola omogenea $AB$ di massa $m = 600$ kg e lunghezza $l = 4$ m è incernierata in $A$ e tenuta in equilibrio a un angolo $\theta = 30°$ rispetto all'orizzontale da una fune che la collega, nel punto $B$, a un punto $C$ posto sulla verticale per $A$ a distanza $l$ da $A$. Si vogliono determinare la tensione della fune e la reazione vincolare in $A$.

Si definiscono gli assi $x$ orizzontale, $y$ verticale verso l'alto, $z$ uscente dal foglio. Le forze esterne sono il peso, la tensione $\vec{T}$ e la reazione vincolare $\vec{R}$ in $A$:

$$
m\vec{g} = -mg\,\hat{u}_y, \qquad
\vec{T} = -T\cos\frac{\pi}{6}\,\hat{u}_x + T\sin\frac{\pi}{6}\,\hat{u}_y, \qquad
\vec{R} = R_x\,\hat{u}_x + R_y\,\hat{u}_y.
$$

Reazione vincolare e tensione sono incognite da determinare, non dati del problema.

Dalla prima equazione cardinale $m\vec{g}+\vec{T}+\vec{R}=\vec{0}$ si ottengono, separando le componenti $x$ e $y$:

$$
\begin{cases}
R_x = T\cos\dfrac{\pi}{6} \\[4pt]
R_y = mg - T\sin\dfrac{\pi}{6}
\end{cases}
$$

Due incognite ($R_x$, $R_y$) sono già espresse in funzione di $T$; serve un'equazione aggiuntiva, data dai momenti.

Scegliendo $A$ come polo, la reazione $\vec{R}$ non contribuisce al momento, perché il suo braccio è nullo. Restano i momenti del peso e della tensione:

$$
\vec{M}_{peso} = -mg\,\frac{l}{2}\sin\!\left(\frac{\pi}{2}+\theta\right)\hat{u}_z, \qquad
\vec{M}_T = \frac{T\,l\cos\theta}{\sqrt{2(1-\sin\theta)}}\,\hat{u}_z.
$$

Quest'ultima espressione segue dal prodotto vettoriale $\vec{r}_B\times\vec{T}$, con $\vec{r}_B=l(\cos\theta,\sin\theta,0)$ il punto di applicazione della tensione rispetto al polo $A$ e $\vec{T}$ diretta lungo $\vec{BC}=l(-\cos\theta,\,1-\sin\theta,\,0)$: è una formula valida per qualsiasi angolo $\theta$, e non solo per il valore particolare $\theta=30°$ qui considerato.

Imponendo $\vec{M}_{peso}+\vec{M}_T=\vec{0}$ si ricava $T=\dfrac{mg}{2}$ e, con $\theta=30°$, si trova l'angolo di $\vec{R}$ rispetto all'orizzontale pari a $\pi/3$. Sostituendo $m = 600$ kg e $g = 9{,}81$ m/s² si ottiene $T = mg/2 = 2{,}94\cdot10^3$ N.

Sostituendo $m = 600$ kg e $g = 9,81$ m/s²:

$$
R_x = \frac{\sqrt{3}}{4}mg = 2549\ \text{N}, \qquad
R_y = \frac{3}{4}mg = 4414\ \text{N}.
$$

Le due componenti hanno le dimensioni corrette di una forza (N) e il loro ordine di grandezza è compatibile con il peso della tavola ($mg \approx 5886$ N), come richiesto dalla verifica dimensionale.

### Esempio svolto: asta in equilibrio su un fulcro

**Esempio 8.3** (asta con due masse appoggiate)

Un'asta omogenea di lunghezza $l$ e massa $m_a$, con due masse $m_1$ e $m_2$ appoggiate alle estremità, è in equilibrio orizzontale grazie a un fulcro posto a distanza $x_F$ dall'estremo sinistro.

Le forze esterne sono i tre pesi e la reazione vincolare $\vec{R}$ del fulcro. Dalla prima equazione cardinale:

$$
R_x = 0, \qquad R_y = (m_1+m_2+m_a)\,g.
$$

Scegliendo come polo il fulcro $F$, la reazione $\vec{R}$ ha momento nullo, e l'equazione dei momenti (con $m_a g$ applicato nel centro dell'asta) dà

$$
x_F\,m_1 - (l-x_F)\,m_2 - \left(\frac{l}{2}-x_F\right)m_a = 0 \;\;\Longrightarrow\;\; x_F = l\,\frac{m_2+\dfrac{m_a}{2}}{m_1+m_2+m_a}.
$$

Si verifica che il centro di massa dell'intero sistema, calcolabile con il metodo visto nella sezione sul [centro di massa](ref:chapter/7#p3), coincide esattamente con il fulcro $x_F$: risultato coerente, perché se il centro di massa fosse spostato rispetto al fulcro il peso totale genererebbe un momento non nullo.

### Errori tipici con l'attrito statico

Nei problemi di equilibrio con attrito (travi incastrate, ruote su piani inclinati, scale appoggiate a pareti scabre) la forza di attrito statico $\vec{f}_s$ è un'incognita del problema, al pari di tensioni e reazioni vincolari, e va determinata dalle equazioni cardinali.

### Esempio svolto: scala appoggiata a una parete

**Esempio 8.4** (scala con attrito al suolo)

Una scala omogenea di lunghezza $L = 5$ m e massa $m = 20$ kg è appoggiata, con l'estremo superiore, contro una parete verticale liscia e, con l'estremo inferiore, su un pavimento scabro con coefficiente di attrito statico $\mu_s = 0{,}4$. La scala forma un angolo $\theta = 60°$ con il pavimento. Si vuole verificare se la scala resta in equilibrio in questa configurazione.

Le forze esterne applicate alla scala sono: il peso $m\vec{g}$, applicato nel punto medio della scala; la reazione normale della parete $\vec{N}_p$, orizzontale, applicata all'estremo superiore (la parete è liscia, quindi non vi è componente tangenziale); la reazione normale del pavimento $\vec{N}_s$, verticale, e la forza di attrito statico $\vec{f}_s$, orizzontale, entrambe applicate all'estremo inferiore.

Scegliendo $x$ orizzontale e $y$ verticale verso l'alto, la prima equazione cardinale $\vec{R}^{(E)}=\vec{0}$ fornisce

$$
\begin{cases}
f_s - N_p = 0 \\
N_s - mg = 0
\end{cases}
$$

Scegliendo come polo l'estremo inferiore della scala, dove sono applicate $\vec{N}_s$ e $\vec{f}_s$, questi due vettori hanno braccio nullo e non contribuiscono al momento. Restano i momenti del peso, applicato a distanza $L/2$ lungo la scala, e della reazione della parete $N_p$, applicata all'estremo superiore a distanza $L$: imponendo $\vec{M}^{(E)}=\vec{0}$ si ottiene

$$
N_p\, L\sin\theta - mg\,\frac{L}{2}\cos\theta = 0 \;\;\Longrightarrow\;\; N_p = \frac{mg}{2\tan\theta}.
$$

Dalla prima equazione cardinale segue allora $f_s = N_p = \dfrac{mg}{2\tan\theta}$.

Sostituendo i dati numerici, $mg = 20\ \text{kg}\cdot 9{,}81\ \text{m/s}^2 = 196{,}2$ N, $N_s = mg = 196{,}2$ N e

$$
f_s = \frac{196{,}2\ \text{N}}{2\tan 60°} \approx 56{,}6\ \text{N}.
$$

Per verificare che la configurazione sia effettivamente di equilibrio occorre controllare che l'attrito richiesto non superi quello massimo disponibile, $f_{s,max}=\mu_s N_s = 0{,}4\cdot196{,}2\ \text{N} \approx 78{,}5$ N. Poiché $|f_s|\approx56{,}6\ \text{N} \le f_{s,max}\approx78{,}5$ N, la condizione di aderenza è soddisfatta e la scala resta effettivamente in equilibrio.

Un cilindro appoggiato su un piano inclinato scabro e trattenuto da una fune orizzontale illustra bene il punto: il testo garantisce solo che l'attrito statico sia sufficiente a impedire lo slittamento, cioè

$$
|f_s| \le f_{s,max} = \mu_s N,
$$

ma non impone $|f_s| = \mu_s N$.

### Esempio svolto: mensola trattenuta per attrito in una guida scabra

**Esempio 8.5** (mensola serrata per attrito)

Una mensola rigida orizzontale a sbalzo, di peso trascurabile e lunghezza $l = 0{,}5$ m, sporge da una parete e sostiene all'estremo libero $B$ un carico $F = 100$ N diretto verso il basso. La mensola è trattenuta da due pioli posti nella parete, $A$ in alto e $A'$ in basso, distanti $d = 0{,}1$ m. I pioli esercitano sulla mensola forze normali orizzontali uguali e opposte, di modulo $N$; il coefficiente di attrito statico ai contatti è $\mu_s = 0{,}5$. Determiniamo la normale necessaria all'equilibrio e verifichiamo la condizione di aderenza.

Le forze esterne applicate alla mensola sono: il carico $\vec{F} = -F\,\hat{u}_y$ in $B$; la reazione normale orizzontale $\vec{N}_A$ nel piolo superiore $A$ e la reazione normale orizzontale $\vec{N}_{A'} = -\vec{N}_A$ nel piolo inferiore $A'$, entrambe di modulo $N$; le forze di attrito statico verticali $\vec{f}_A$ e $\vec{f}_{A'}$, applicate rispettivamente in $A$ e $A'$.

Dall'equilibrio delle forze lungo gli assi orizzontale e verticale si ottiene

$$
\begin{cases}
N_A-N_{A'}=0 \\
f_A+f_{A'}-F=0
\end{cases}
$$

Quindi $N_A=N_{A'}=N$ e $f_A+f_{A'}=F$.

Scegliendo il piolo superiore $A$ come polo, la forza $\vec{N}_A$ e la forza $\vec{f}_A$ hanno entrambe braccio nullo rispetto ad $A$ e non contribuiscono al momento. Restano i momenti di $\vec{N}_{A'}$, applicata a distanza verticale $d$ da $A$, e di $\vec{F}$, applicata a distanza orizzontale $l$ da $A$: imponendo $\vec{M}_A^{(E)} = \vec{0}$ si ottiene

$$
N_{A'}\,d - F\,l = 0 \quad\Longrightarrow\quad N = \frac{F\,l}{d}.
$$

Sostituendo i dati numerici, $N = \dfrac{100\ \text{N}\cdot 0{,}5\ \text{m}}{0{,}1\ \text{m}} = 500$ N.

La forza d'attrito complessiva richiesta è $f_A+f_{A'}=F=100$ N. Per controllare l'aderenza ai due contatti, occorre verificare che esista una ripartizione delle forze d'attrito che soddisfi $|f_A|\leq\mu_s N$ e $|f_{A'}|\leq\mu_s N$. Una ripartizione simmetrica, $f_A=f_{A'}=50$ N, è possibile perché ciascun contatto può esercitare al massimo $\mu_sN=0{,}5\cdot500\ \text{N}=250$ N. La mensola resta quindi in equilibrio senza slittare.

**Errore tipico 8.6**

È un errore frequente scrivere direttamente $f_s = \mu_s N\cos\theta$ (o $f_s=\mu_s mg\cos\theta$) come se l'attrito statico assumesse sempre il suo valore massimo: questo vale soltanto al limite di distacco, non in condizioni generali di equilibrio. In generale il valore vero di $f_s$ dipende dalle altre forze in gioco (tensioni, pesi, angoli) e deve essere ricavato risolvendo il sistema completo delle equazioni cardinali, come già segnalato nella sezione sulle [forze di attrito](ref:chapter/3#p5).

Va infine ricordato, come richiamato nella sezione sul [metodo sperimentale e misure](ref:chapter/1#p2) a proposito dell'analisi dimensionale, che nelle equazioni cardinali ogni uguaglianza deve avere membri omogenei: non ha senso eguagliare un vettore a uno scalare, errore che si commette facilmente quando si scrivono momenti e forze senza tenere traccia della loro natura vettoriale.
