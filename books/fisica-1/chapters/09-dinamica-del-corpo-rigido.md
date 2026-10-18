---
chapter: 9
title: Dinamica del corpo rigido
---

## p1 | Introduzione

Per descrivere il moto di un corpo rigido non basta conoscere la forza risultante: occorre capire come i momenti delle forze ne cambiano la rotazione e come i vincoli influenzano l’intero sistema. Questo capitolo collega le leggi della dinamica alla rotazione attorno a un asse, al rotolamento e agli urti, strumenti essenziali per affrontare situazioni in cui traslazione e rotazione si condizionano a vicenda.

È utile avere già familiarità con la cinematica del corpo rigido e con il momento d’inerzia. In particolare, servono le relazioni tra velocità e accelerazione angolari, il momento angolare, le equazioni cardinali e i principi di conservazione dell’energia e della quantità di moto. Queste conoscenze permettono di distinguere quali grandezze si conservano e quali equazioni vanno applicate in presenza di un asse o di un perno.

Al termine saprai impostare e risolvere problemi di rotazione attorno a un asse fisso, compresi i pendoli composti e i sistemi con carrucole dotate di massa. Saprai analizzare il rotolamento determinando l’attrito statico dalle equazioni del moto e verificando la condizione di aderenza, e distinguere il rotolamento puro dallo strisciamento. Negli urti con corpi rigidi vincolati saprai scegliere il polo opportuno, applicare la conservazione della componente pertinente del momento angolare e riconoscere quando la quantità di moto o l’energia non si conservano.

## p2 | Rotazione attorno a un asse fisso

Quando un corpo rigido ruota attorno a un asse fisso $z$, tutti i suoi punti descrivono archi di circonferenza su piani perpendicolari all'asse, con la stessa velocità angolare $\omega$ istante per istante, mentre la velocità lineare $v_i = \omega R_i$ dipende dalla distanza $R_i$ del punto dall'asse. Questa osservazione, già usata per definire cinematicamente la rotazione nella sezione su [Corpo rigido e suoi moti](ref:chapter/8#p2), permette ora di scrivere l'equazione dinamica che governa il moto, sfruttando la seconda equazione cardinale ([formula (7.14)](ref:formula/7.14)) già stabilita per i sistemi di punti materiali.

### Equazione del moto di rotazione

Per un corpo rigido che ruota attorno a un asse fisso $z$, il momento angolare assiale di ciascun punto $P_i$ rispetto a un polo $O$ sull'asse si ottiene proiettando $\vec{L}_i = \vec{r}_i \times m_i \vec{v}_i$ sulla direzione di $z$; usando $r_i \sin\theta_i = R_i$ si trova $L_{i,z} = m_i R_i^2 \omega$. Sommando su tutti i punti del corpo si ottiene il momento angolare assiale totale

$$L_z = \sum_i L_{i,z} = \sum_i \big(m_i R_i^2\big)\,\omega = I_z\,\omega ,$$

dove $I_z = \sum_i m_i R_i^2$ è il momento d'inerzia già introdotto nella sezione su [Momento d'inerzia](ref:chapter/8#p3). Il momento d'inerzia gioca, nella dinamica rotazionale, il ruolo che la massa gioca nella dinamica traslazionale: a parità di momento delle forze, un $I_z$ maggiore produce una variazione più lenta di $\omega$.

**Teorema 9.1** (equazione del moto di rotazione, caso assialsimmetrico). Se l'asse di rotazione coincide con un asse di simmetria del corpo, la componente del momento angolare ortogonale all'asse può annullarsi per simmetria. Più in generale, se l'asse coincide con un asse principale d'inerzia, tale componente si annulla perché il tensore d'inerzia applicato alla velocità angolare parallela a quell'asse restituisce un momento angolare parallelo all'asse. In entrambi i casi il momento angolare totale è parallelo a $\vec{\omega}$,

$$\vec{L} = \vec{L}_z = I_z\,\vec{\omega} ,$$

e derivando rispetto al tempo, con $I_z$ costante nel tempo per un corpo rigido rispetto al proprio asse fisso,

$$\vec{M} = \frac{d\vec{L}}{dt} = \frac{d(I_z\vec{\omega})}{dt} = I_z\,\vec{\alpha} \quad\Longrightarrow\quad \vec{M} = I_z\,\vec{\alpha} .$$

Qui $\vec{M}$ è il momento risultante delle forze esterne rispetto al polo scelto sull'asse.

Anche quando l'asse di rotazione non è un asse di simmetria, e quindi $\vec{L}$ non è parallelo a $\vec{\omega}$, resta comunque valida l'equazione scalare per la sola componente assiale: partendo da $L_z = I_z\omega$ e derivando,

$$M_z = \frac{dL_z}{dt} = I_z\,\frac{d\omega}{dt} = I_z\,\alpha .$$

L'equazione assiale resta valida anche se la componente trasversale del momento angolare non è nulla. Le sue variazioni richiedono componenti trasversali del momento risultante, che possono essere esercitate dal vincolo per mantenere fisso l'asse. Non descrivono necessariamente una precessione dell'asse.

:::formula{id="9.1" label="Equazione del moto di rotazione attorno a un asse fisso"}
$$M_z = I_z\,\alpha$$
:::

Questa è l'analogo rotazionale di $\vec{R} = m\vec{a}$: il momento assiale risultante delle forze esterne produce un'accelerazione angolare proporzionale al momento d'inerzia rispetto all'asse. Dalla conoscenza delle forze esterne, del loro punto di applicazione e di $I_z$ si ricava $\alpha(t)$ e, per integrazione, $\omega(t)$ e $\theta(t)$, con le stesse tecniche già viste nel [moto circolare](ref:chapter/2#p6): se $M_z = 0$ il corpo ruota di moto circolare uniforme (o resta in quiete), se $M_z$ è costante il moto è uniformemente accelerato, se $M_z$ varia nel tempo il moto è vario.

**Errore tipico 9.1.** Scrivere $M_z = I\alpha$ usando il momento d'inerzia rispetto a un asse diverso da quello di rotazione (per esempio rispetto al centro di massa anziché all'asse del perno), oppure trascurare che $I_z$ va calcolato sommando i contributi di tutti i corpi rigidi coinvolti rispetto allo stesso asse comune, come già segnalato nella sezione sul [momento d'inerzia](ref:chapter/8#p3).

### Pendolo composto

Si definisce **pendolo composto** (o pendolo fisico) qualunque corpo rigido che possa oscillare, sotto l'azione del proprio peso, in un piano verticale attorno a un asse orizzontale fisso $O$ che non passa per il centro di massa. Indichiamo con $h$ la distanza tra l'asse $O$ e il centro di massa, e con $\theta$ l'angolo che la congiungente $O$-$CM$ forma con la verticale.

Quando il pendolo è spostato dalla posizione di equilibrio, l'unica forza che genera un momento di richiamo verso la verticale è il peso, applicato nel centro di massa; sommando i contributi di tutti gli elementi di massa del corpo, il momento assiale risultante vale

$$M_z = -mgh\sin\theta ,$$

dove il segno negativo indica che ad angoli positivi corrisponde un'accelerazione angolare negativa, che riporta il pendolo verso la verticale. Applicando {{formula:9.1}} si ottiene l'equazione differenziale del moto

$$\frac{d^2\theta}{dt^2} + \frac{mgh}{I_z}\sin\theta = 0 ,$$

dove $I_z$ è il momento d'inerzia del corpo rispetto all'asse $O$, legato al momento d'inerzia rispetto al centro di massa dal teorema di Huygens-Steiner, [formula (8.13)](ref:formula/8.13), nella forma $I_z = I_{CM} + mh^2$.

:::formula{id="9.2" label="Equazione del moto del pendolo composto"}
$$\frac{d^2\theta}{dt^2} + \frac{mgh}{I_z}\sin\theta = 0$$
:::

Per piccole oscillazioni, con $\sin\theta \approx \theta$, l'equazione si riduce a quella del moto armonico semplice già incontrata nella sezione sul [moto armonico](ref:chapter/2#p4),

$$\frac{d^2\theta}{dt^2} + \Omega^2 \theta = 0 , \qquad \Omega = \sqrt{\frac{mgh}{I_z}} , \qquad T = \frac{2\pi}{\Omega} = 2\pi\sqrt{\frac{I_z}{mgh}} ,$$

La soluzione generale è $\theta(t) = A\sin(\Omega t + \varphi)$, dove $A$ è l'ampiezza e $\varphi$ la fase iniziale. In termini dell'angolo iniziale $\theta(0)=\theta_0$ e della velocità angolare iniziale $\omega(0)=\omega_0$, si può scrivere $\theta(t) = \theta_0\cos(\Omega t) + \frac{\omega_0}{\Omega}\sin(\Omega t)$.

:::formula{id="9.3" label="Periodo delle piccole oscillazioni del pendolo composto"}
$$T = 2\pi\sqrt{\frac{I_z}{mgh}}$$
:::

Definendo la **lunghezza ridotta** del pendolo composto come $l = I_z/(mh)$, il periodo assume la stessa forma del pendolo semplice già vista in [Dinamica del moto curvilineo](ref:chapter/3#p7) ([formula (3.27)](ref:formula/3.27)):

$$T = 2\pi\sqrt{\frac{l}{g}} .$$

:::formula{id="9.4" label="Lunghezza ridotta del pendolo composto"}
$$l = \frac{I_z}{mh}$$
:::

Questo risultato mostra che ogni pendolo composto si comporta, ai fini del periodo, come un pendolo semplice di lunghezza equivalente $l$, concentrata idealmente a distanza $l$ dall'asse.

**Esempio svolto 9.1.** Un'asta omogenea di massa $m$ e lunghezza $L$ oscilla attorno a un asse orizzontale passante per un suo estremo. Si vuole il periodo delle piccole oscillazioni.

Dati: asta omogenea, massa $m$, lunghezza $L$, asse per un estremo.

Schema: l'unica forza con momento non nullo rispetto all'asse è il peso applicato nel centro di massa, a distanza $h = L/2$ dall'asse.

Riferimento: polo $O$ sull'asse di rotazione, angolo $\theta$ misurato dalla verticale.

Momento d'inerzia: dalla sezione sul [momento d'inerzia](ref:chapter/8#p3), $I_z = \frac{1}{3}mL^2$ (momento rispetto a un estremo, equivalente alla chiave [formula (8.6)](ref:formula/8.6)).

Soluzione letterale: applicando {{formula:9.3}} con $h = L/2$,

$$T = 2\pi\sqrt{\frac{I_z}{mgh}} = 2\pi\sqrt{\frac{\frac{1}{3}mL^2}{mg\frac{L}{2}}} = 2\pi\sqrt{\frac{2L}{3g}} .$$

Numeri: per $L = 1,00$ m e $g = 9,81$ m/s², $T = 2\pi\sqrt{\dfrac{2(1,00\ \text{m})}{3(9,81\ \text{m/s}^2)}} \approx 2\pi\sqrt{0,0680\ \text{s}^2} \approx 1,64$ s.

Controllo: il risultato ha le dimensioni corrette di un tempo e l'ordine di grandezza è ragionevole per un'asta di circa un metro; per confronto, un pendolo semplice della stessa lunghezza $L$ avrebbe periodo $2\pi\sqrt{L/g} \approx 2,01$ s, maggiore, perché la sua lunghezza ridotta $l = 2L/3$ è minore di $L$.

:::image{src="assets/6fe3911d-periodo-pendolo-composto-vs-semplice.svg" alt="Grafico del periodo T in funzione di L per il pendolo composto (asta) e per il pendolo semplice" caption="Fig. 9.1 — Periodo delle piccole oscillazioni in funzione della lunghezza L: il pendolo composto dato dall'asta oscillante attorno a un estremo ha sempre periodo minore del pendolo semplice di pari lunghezza, perché la sua lunghezza ridotta è 2L/3."}
:::

### Sistemi con carrucole e fili

Molti problemi coinvolgono punti materiali collegati da fili inestensibili a una carrucola di massa non trascurabile e momento d'inerzia $I$ rispetto al proprio asse, con il filo che non slitta sulla carrucola (puro rotolamento filo-carrucola) e un perno privo di attrito. In questi sistemi occorre scrivere un'equazione per ciascun corpo materiale e, per la carrucola, due equazioni distinte: una per il moto traslatorio del centro di massa (che, se l'asse è fisso, resta fermo) e una per il moto rotatorio attorno al centro di massa, perché la carrucola è un corpo rigido esteso e non un punto materiale.

**Esempio svolto 9.2.** Una carrucola di raggio $R$, massa $m$ e momento d'inerzia $I$ rispetto al proprio asse sostiene due masse $m_1 > m_2$ appese ai due capi di un filo ideale che non slitta sulla puleggia; l'asse è privo di attrito. Si vogliono determinare le accelerazioni delle masse, le tensioni del filo e la reazione del perno.

Dati: $R$, $m$, $I$, $m_1 > m_2$, filo ideale inestensibile che non slitta, perno senza attrito.

Schema delle forze: sulla massa $m_1$ agiscono il peso $m_1g$ e la tensione $T_1$; sulla massa $m_2$ agiscono $m_2g$ e $T_2$; sulla carrucola agiscono le due tensioni $T_1$, $T_2$ applicate al bordo, il peso $mg$ e la reazione vincolare del perno $N$.

Riferimento: asse positivo verso il basso per $m_1$ (che scende, essendo $m_1 > m_2$) e verso l'alto per $m_2$ (che sale), con accelerazione comune in modulo $a$.

Equazioni: per i due corpi appesi, dalla seconda legge di Newton,

$$m_1 g - T_1 = m_1 a , \qquad m_2 g - T_2 = -m_2 a \quad\text{} .$$

Per la carrucola, il moto traslatorio del centro di massa (fermo) dà

$$T_1 + T_2 + mg - N = 0 \quad\Longrightarrow\quad N = mg + T_1 + T_2 ,$$

mentre il moto rotatorio attorno al centro di massa, applicando {{formula:9.1}} con momento delle due tensioni rispetto all'asse pari a $(T_1 - T_2)R$, dà

$$I\alpha = (T_1 - T_2)R \quad\text{} .$$

La condizione di puro rotolamento del filo sulla puleggia lega l'accelerazione angolare a quella lineare dei due corpi:

$$\alpha = \frac{a}{R} \quad\text{} .$$

Soluzione letterale: sostituendo $\alpha = a/R$ nell'equazione della carrucola e risolvendo il sistema di quattro equazioni nelle quattro incognite $T_1$, $T_2$, $a$, $N$, si ottiene l'accelerazione comune in modulo, con $m_1$ che accelera verso il basso e $m_2$ verso l'alto,

$$a = \frac{(m_1-m_2)g}{m_1 + m_2 + \frac{I}{R^2}} ,$$

$$T_1 = m_1 g\,\frac{2m_2 + \frac{I}{R^2}}{m_1 + m_2 + \frac{I}{R^2}} , \qquad T_2 = m_2 g\,\frac{2m_1 + \frac{I}{R^2}}{m_1 + m_2 + \frac{I}{R^2}} .$$

$$N = T_1 + T_2 + mg = g\,\frac{4m_1 m_2 + m(m_1+m_2) + \frac{I}{R^2}(m+m_1+m_2)}{m_1 + m_2 + \frac{I}{R^2}} \quad\text{} .$$

Controllo: nel limite $I \to 0$, in cui la carrucola ha inerzia trascurabile, si ritrova $T_1 = T_2 = \dfrac{2m_1 m_2}{m_1+m_2}g$ e $N = mg + 2T_1$. Per una carrucola senza massa occorre porre anche $m \to 0$, ottenendo $N = 2T_1$. Questo è coerente con il caso di carrucola ideale già incontrato con le [reazioni vincolari ed equilibrio](ref:chapter/3#p4), in cui l'uguaglianza delle tensioni ai due lati era un'ipotesi; quando la carrucola ha inerzia, invece, $T_1 \ne T_2$ perché serve un momento netto per accelerarla angolarmente.

Lo stesso schema si applica a un filo avvolto attorno al bordo di un disco (o di un sistema di dischi coassiali) che sostiene una massa appesa: se il disco di raggio $R_1$ ha momento d'inerzia totale $I_{DD}$ rispetto al proprio asse, la seconda equazione cardinale per il disco dà $I_{DD}\,\alpha = R_1 T$, mentre l'inestensibilità del filo impone $a = \alpha R_1$ fra l'accelerazione di discesa della massa appesa e l'accelerazione angolare del disco.

**Errore tipico 9.2.** Nei sistemi con carrucole di massa non trascurabile è sbagliato assumere $T_1 = T_2$: questa uguaglianza vale solo per la carrucola ideale priva di massa (e quindi di momento d'inerzia), già vista in [Reazioni vincolari ed equilibrio](ref:chapter/3#p4); qui la differenza $T_1 - T_2$ è proprio la causa dell'accelerazione angolare della carrucola. È altrettanto sbagliato dimenticare l'equazione del moto traslatorio del centro di massa della carrucola per calcolare la reazione vincolare $N$: anche se l'asse è fisso e il centro di massa non si sposta, questa equazione resta necessaria perché contiene l'incognita $N$, che non compare nell'equazione rotazionale.

## p3 | Energia nel moto del corpo rigido

### Energia cinetica di rotazione attorno a un asse fisso

Consideriamo un corpo rigido che ruota con velocità angolare $\omega$ attorno a un asse fisso $z$. Ogni punto del corpo, a distanza $R_i$ dall'asse, si muove di moto circolare con velocità $v_i = R_i\omega$. L'energia cinetica totale, somma delle energie cinetiche dei singoli punti, vale quindi

$$E_k = \sum_i \frac{1}{2}m_i v_i^2 = \sum_i \frac{1}{2}m_i R_i^2\omega^2 = \frac{1}{2}\omega^2\sum_i m_i R_i^2 = \frac{1}{2}I_z\omega^2 ,$$

dove $I_z$ è il momento d'inerzia del corpo rispetto all'asse $z$, già definito e calcolato per i corpi notevoli nella sezione sul [momento d'inerzia](ref:chapter/8#p3).

:::formula{id="9.5" label="Energia cinetica nella rotazione attorno a un asse fisso"}
$$E_k = \frac{1}{2}I_z\omega^2$$
:::

Nel caso in cui il momento angolare sia parallelo alla velocità angolare (asse di simmetria o asse principale d'inerzia, come discusso nella sezione sull'[ellissoide d'inerzia](ref:chapter/8#p5)), vale $L_z = I_z\omega$, da cui si ottiene una forma alternativa utile quando si conosce il momento angolare invece della velocità angolare.

:::formula{id="9.6" label="Energia cinetica in funzione del momento angolare assiale"}
$$E_k = \frac{L_z^2}{2I_z}$$
:::

### Lavoro di un momento e teorema dell'energia cinetica in rotazione

Il teorema dell'energia cinetica, dimostrato in generale nella sezione sull'[energia cinetica e il teorema lavoro-energia](ref:chapter/4#p3) e per i sistemi di punti nella sezione sull'[energia cinetica di un sistema](ref:chapter/7#p6), si applica anche alla rotazione del corpo rigido attorno a un asse fisso. Partendo dall'equazione del moto rotazionale {{formula:9.1}}, già ricavata nella sezione sulla [rotazione attorno a un asse fisso](ref:chapter/9#p2), scriviamo il lavoro infinitesimo in forma differenziale:

$$dW = dE_k = I_z\omega\, d\omega = I_z\frac{d\theta}{dt}\,\alpha\, dt = I_z\alpha\, d\theta = M_z\, d\theta .$$

Il lavoro compiuto dal momento risultante $M_z$ su una rotazione infinitesima $d\theta$ vale dunque $M_z\,d\theta$, in perfetta analogia con il lavoro di una forza $F\,dx$ nel moto rettilineo: il momento gioca il ruolo della forza e l'angolo quello dello spostamento.

:::formula{id="9.7" label="Lavoro infinitesimo di un momento"}
$$dW = M_z\, d\theta$$
:::

Integrando, quando il corpo passa da una velocità angolare iniziale $\omega_{in}$ a una finale $\omega_{fin}$ per effetto dell'applicazione di un momento esterno, il lavoro totale compiuto coincide con la variazione di energia cinetica:

$$W = \Delta E_k = \frac{1}{2}I_z\omega_{fin}^2 - \frac{1}{2}I_z\omega_{in}^2 .$$

Se il momento è costante nel tempo, $W = M_z\,\Delta\theta$; se varia, occorre calcolare l'integrale $\int M_z\, d\theta$ lungo la rotazione effettivamente compiuta, esattamente come si fa per il lavoro di una forza lungo un cammino, già discusso nella sezione su [lavoro e integrali di linea](ref:chapter/4#p2).

### Energia cinetica nella rototraslazione: il secondo teorema di König

Quando l'asse di rotazione non passa per il centro di massa, oppure il corpo è animato da un moto di rototraslazione piana generale (il centro di massa trasla in un piano mentre il corpo ruota con velocità angolare $\omega$ attorno a un asse, passante per il centro di massa, perpendicolare a tale piano), occorre richiamare il secondo teorema di König, già enunciato per un sistema generico di punti nella sezione sull'[energia cinetica di un sistema](ref:chapter/7#p6) e specializzato al corpo rigido nella sezione sui [teoremi di Huygens-Steiner e di König](ref:chapter/8#p4). In questo caso, con $I_{CM}$ momento d'inerzia rispetto all'asse per il centro di massa parallelo a $\vec\omega$, l'energia cinetica è data dalla somma dell'energia cinetica dovuta al moto rispetto al centro di massa e dell'energia cinetica di traslazione del centro di massa:

$$E_k = \frac{1}{2}I_{CM}\omega^2 + \frac{1}{2}mv_{CM}^2 .$$

Questa è esattamente la forma [formula (8.15)](ref:formula/8.15) già introdotta: il primo termine è l'energia cinetica "interna", calcolata nel sistema del centro di massa (dove il moto osservato è una pura rotazione), il secondo è l'energia cinetica dovuta al moto di trascinamento del centro di massa. Questa decomposizione sarà il punto di partenza per lo studio del [rotolamento](ref:chapter/9#p4), dove compare esplicitamente nella forma $E_k=\frac12 Mv_{CM}^2+\frac12 I\omega^2$.

### Conservazione dell'energia meccanica nel corpo rigido

La condizione di conservazione dell'energia meccanica, già vista per il punto materiale e per i sistemi nella sezione sulle [forze conservative ed energia potenziale](ref:chapter/4#p4), si estende al corpo rigido con la medesima condizione generale: l'energia meccanica si conserva quando il lavoro totale compiuto dalle forze non conservative è nullo, $W_{nc}=0$. Questa condizione è soddisfatta non solo in assenza di attrito, ma anche quando le forze di attrito presenti non compiono lavoro; non basta invece la sola assenza di lavoro dell'attrito se sul corpo agiscono altre forze non conservative, come una forza motrice applicata o una reazione vincolare che si sposta: in tal caso occorre verificare che il lavoro complessivo di tutte le forze non conservative, somma dei singoli contributi, si annulli. Se il centro di massa resta in un piano orizzontale, la variazione di energia potenziale gravitazionale è nulla; in un sistema in cui l'unica energia potenziale variabile è quella gravitazionale, è quindi sufficiente considerare solo l'energia cinetica. Se invece cambia la quota del centro di massa, la variazione di energia potenziale gravitazionale è $\Delta E_p = mg\,\Delta z_{CM}$. Altre energie potenziali, come quella elastica, possono variare anche a quota costante e vanno incluse nel bilancio.

Il caso più importante in cui un attrito agisce senza dissipare energia, e quindi $W_{nc}=0$ anche in sua presenza, è il **moto di puro rotolamento** (condizione cinematica $v_{CM}=\omega R$, studiata in dettaglio nella sezione sul [rotolamento](ref:chapter/9#p4)). Al moto di puro rotolamento sotto l'azione di forze conservative, come la forza peso, si può applicare la legge di conservazione dell'energia meccanica: la forza di attrito agisce infatti sul punto di contatto, che è istantaneamente fermo, per cui lo spostamento in quell'istante è nullo e di conseguenza è nullo anche il lavoro dell'attrito.

In formula, per ogni istante del moto, $dW_{att}=\vec{F}_{att}\cdot d\vec{s}=0$ perché $d\vec{s}=0$ nel punto di contatto; integrando lungo l'intero moto si ottiene $W_{att}=0$ e dunque $\Delta E_m = 0$. È importante notare che il punto materiale di contatto cambia istante per istante lungo il corpo, per cui quest'ultimo percorre comunque una distanza finita in un tempo finito, pur avendo l'attrito un lavoro globalmente nullo.

### Esempio svolto

Due punti materiali di massa uguale $m = 0,50\ \text{kg}$ sono posti agli estremi di una sottile asta rigida di massa trascurabile e lunghezza $2R = 40\ \text{cm}$, e ruotano in un piano orizzontale con velocità angolare costante $\omega = 10\ \text{s}^{-1}$ rispetto al centro dell'asta. Il sistema è montato su una piattaforma a cuscino d'aria che trasla con velocità $v_0 = 0,80\ \text{m/s}$. Si vuole calcolare l'energia cinetica totale del sistema nel riferimento del laboratorio.

Scegliamo come polo il centro di massa, che coincide con il centro dell'asta e trasla solidalmente alla piattaforma con velocità $v_0$. Applichiamo il secondo teorema di König:

$$E_k = \underbrace{\frac{1}{2}Mv_{CM}^2}_{\text{energia cinetica del CM}} + E_k' .$$

Il termine di traslazione del centro di massa, con $M=2m$, vale

$$\frac{1}{2}Mv_{CM}^2 = \frac{1}{2}(2m)v_0^2 = mv_0^2 .$$

Per l'energia cinetica rispetto al centro di massa $E_k'$ possiamo procedere in due modi equivalenti. Nel primo, osserviamo che rispetto al CM le due masse si muovono di moto circolare uniforme con velocità $|\vec v'_1|=|\vec v'_2|=\omega R$, per cui

$$E_k' = \frac{1}{2}m\omega^2R^2 + \frac{1}{2}m\omega^2R^2 = m\omega^2R^2 .$$

Nel secondo modo, poiché il centro di massa si trova sull'asse di rotazione, usiamo direttamente {{formula:9.5}} con il momento d'inerzia dell'asta $I = \sum_i m_i d_i^2 = mR^2+mR^2 = 2mR^2$, ottenendo

$$E_k' = \frac{1}{2}I\omega^2 = \frac{1}{2}(2mR^2)\omega^2 = m\omega^2R^2 ,$$

in accordo con il primo metodo.

Sommando i due contributi,

$$E_k = mv_0^2 + m\omega^2R^2 = m\left(v_0^2+\omega^2R^2\right) .$$

Sostituendo i valori numerici ($m=0,50\ \text{kg}$, $v_0=0,80\ \text{m/s}$, $\omega=10\ \text{s}^{-1}$, $R=0,20\ \text{m}$):

$$E_k = 0,50\ \text{kg}\left\lbrack (0,80\ \text{m/s})^2+(10\ \text{s}^{-1})^2(0,20\ \text{m})^2\right\rbrack  = 0,50\ \text{kg}\,(0,64+4,0)\ \text{m}^2/\text{s}^2 \approx 2,3\ \text{J} .$$

Il controllo dimensionale è immediato: $\lbrack \text{kg}\rbrack \cdot\lbrack \text{m}^2/\text{s}^2\rbrack  = \text{J}$, e l'ordine di grandezza (pochi joule) è ragionevole per masse sub-chilogrammiche con velocità dell'ordine del metro al secondo.

Un disco omogeneo di massa $M = 2,0\ \text{kg}$ e raggio $R = 0,20\ \text{m}$ parte da fermo e rotola senza strisciare lungo un piano inclinato, scendendo di un dislivello $h = 0,50\ \text{m}$. Assumendo trascurabili le altre forze non conservative e usando $I_{CM}=\frac{1}{2}MR^2$, calcoliamo la velocità del centro di massa alla fine della discesa.

Nel puro rotolamento l'attrito statico non compie lavoro; si conserva quindi l'energia meccanica. Ponendo a zero l'energia potenziale gravitazionale nella posizione finale, il bilancio tra posizione iniziale e finale è

$$Mgh = \frac{1}{2}Mv_{CM}^2 + \frac{1}{2}I_{CM}\omega^2 .$$

La condizione di rotolamento lega le due velocità: $v_{CM}=\omega R$. Sostituendo $I_{CM}=\frac{1}{2}MR^2$ e $\omega=v_{CM}/R$ nel bilancio, otteniamo

$$Mgh = \frac{1}{2}Mv_{CM}^2 + \frac{1}{4}Mv_{CM}^2 = \frac{3}{4}Mv_{CM}^2,$$

da cui

$$v_{CM}=\sqrt{\frac{4gh}{3}} = \sqrt{\frac{4(9,81\ \text{m/s}^2)(0,50\ \text{m})}{3}} \approx 2,6\ \text{m/s}.$$

La massa si semplifica nel bilancio: la velocità finale dipende dal dislivello e dalla distribuzione della massa, qui rappresentata dal momento d'inerzia del disco. Il risultato comprende sia l'energia cinetica traslazionale del centro di massa sia quella rotazionale.

### Errori tipici

Un errore frequente è trascurare il termine rotazionale $\frac12 I_{CM}\omega^2$ nell'energia cinetica di un corpo rigido che trasla e ruota insieme, scrivendo solo $\frac12 mv_{CM}^2$ come se il corpo fosse un punto materiale: il teorema di König richiede sempre entrambi i contributi quando il corpo ruota rispetto al proprio centro di massa, come mostrato nell'esempio con il disco che rotola sul piano inclinato, dove l'energia cinetica consta sia dell'energia cinetica del centro di massa sia di quella rotazionale.

Un secondo errore riguarda il lavoro dell'attrito nel puro rotolamento: molti studenti, osservando che il corpo avanza e quindi "si muove", concludono erroneamente che l'attrito compia lavoro negativo come nello strisciamento. Occorre invece ricordare che il lavoro va calcolato nel punto di applicazione della forza, cioè il punto di contatto, la cui velocità istantanea è nulla nel puro rotolamento: per questo motivo l'attrito statico non dissipa energia meccanica, pur essendo esso l'agente che rende possibile il rotolamento stesso.

Infine, come già segnalato nella sezione sul [momento di una forza](ref:chapter/5#p2), è un errore di scrittura frequente confondere il prodotto vettoriale con un prodotto scalare nelle espressioni del momento, scrivendo ad esempio $\vec M = R\times f$ con $R$ e $f$ privi di freccia: tali scritture sono prive di significato perché il prodotto vettoriale si applica a vettori, non a scalari. Un controllo dimensionale sistematico sui risultati letterali, prima di sostituire i numeri, permette di individuare rapidamente simili inconsistenze.

## p4 | Rotolamento

Il rotolamento è il moto tipico di ruote, dischi, cilindri e sfere che si muovono su un piano senza scivolare: è uno dei casi di rototraslazione più importanti, perché combina il moto del centro di massa con la rotazione del corpo attorno ad esso, legati fra loro da un unico vincolo cinematico. Distinguiamo tre situazioni cinematiche per un corpo rigido circolare (disco, cilindro, sfera) appoggiato su un piano: se tutti i punti del corpo hanno la stessa velocità, parallela al piano, il corpo trasla e striscia (non ruota); se il corpo ruota ma il punto di contatto ha velocità non nulla rispetto al piano, si parla di rotolamento con strisciamento; se infine il punto di contatto ha velocità nulla rispetto al piano, si ha un moto di puro rotolamento.

### Puro rotolamento

Nel moto di puro rotolamento, in ogni istante il corpo si comporta come se ruotasse attorno a un asse fisso passante per il punto di contatto $C$ con il piano, detto centro di istantanea rotazione, con velocità angolare $\omega$; si tratta però di un asse geometrico, non materiale, che si sposta insieme al corpo istante per istante: nell'intervallo $dt$ successivo il contatto avviene in un punto $C'$ infinitamente vicino a $C$, e la rotazione istantanea si ripete attorno al nuovo asse. Poiché in ogni istante il corpo ruota (idealmente) attorno a $C$, la velocità di un punto qualsiasi $P$ del corpo è ortogonale al segmento $PC$ e ha modulo proporzionale alla distanza da $C$,

$$v = \omega \, \overline{PC} .$$

Per collegare questa descrizione geometrica alla velocità del centro di massa si applica il [teorema delle velocità relative](ref:chapter/6#p2), scegliendo il centro di massa come origine del riferimento mobile: la velocità del punto di contatto $C$, a distanza $\vec{r}$ dal CM, vale

$$\vec{v}_C = \vec{v}_{CM} + \vec{\omega}\times\vec{r} .$$

**Definizione 9.1** (condizione di puro rotolamento). Un corpo rigido circolare di raggio $R$ che si muove su un piano è in moto di puro rotolamento se la velocità del punto di contatto istantaneo è nulla, $\vec{v}_C = \vec{0}$. In tal caso dalla relazione precedente si ottiene $\vec{v}_{CM} = -\vec{\omega}\times\vec{r}$, da cui, in modulo,

:::formula{id="9.8" label="Condizione di puro rotolamento"}
$$v_{CM} = \omega R \qquad \Longrightarrow \qquad a_{CM} = \alpha R$$
:::

La seconda relazione si ottiene derivando la prima nel tempo, essendo $R$ costante. Equivalentemente, si può osservare che la velocità del punto di contatto, vista dal sistema del laboratorio, è la somma della velocità traslatoria $\vec{v}_{CM}$ e della velocità $\vec{v}'_{cont} = \vec{\omega}\times\vec{r}'_{cont}$ vista dal sistema del centro di massa: nel puro rotolamento questi due termini sono uguali e opposti, e si cancellano esattamente, lasciando il punto di contatto istantaneamente fermo nel laboratorio, pur essendo il corpo in moto. È importante notare che questo non è contraddittorio: il punto di contatto fisico sul piano cambia istante per istante, man mano che il disco rotola.

La condizione {{formula:9.8}} fornisce il legame cinematico tra traslazione e rotazione, ma per scrivere le equazioni dinamiche occorre ancora scegliere un polo per il momento angolare. Le due scelte più comode sono:

- il centro di massa CM, per il quale vale sempre la [seconda equazione cardinale](ref:chapter/7#p5) $I_{CM}\,d\omega/dt = M'_{tot}$, indipendentemente dal fatto che il CM sia o non sia un punto fisso. Scegliendo questo polo, il peso, la reazione normale e un'eventuale tensione applicata sull'asse hanno braccio nullo (sono applicati in CM o diretti lungo il raggio), e l'unico momento non nullo è in genere quello della forza di attrito, $M'_{att} = R\,F_{att}$;
- il punto di contatto istantaneo $C$: trattandolo come polo si usa il momento d'inerzia rispetto a quell'asse, $I_C = I_{CM} + mR^2$ per il [teorema di Huygens-Steiner](ref:chapter/8#p4); il vantaggio è che la forza di attrito, applicata proprio in $C$, ha braccio nullo e non compare nell'equazione dei momenti, che si riduce a $M_{peso} + M_N = I_C\,\alpha$.

Entrambe le scelte sono legittime e portano allo stesso risultato per $\alpha$; conviene scegliere $C$ quando si vuole eliminare subito l'incognita $F_{att}$ dall'equazione dei momenti, e il CM quando si deve comunque scrivere l'equazione di traslazione (nella quale $F_{att}$ compare sempre).

**Errore tipico 9.3.** Nel moto di puro rotolamento la forza di attrito è di tipo statico, perché agisce su un punto istantaneamente fermo rispetto al piano; è quindi un'incognita del problema, non un dato noto. Sono entrambi scorretti gli errori

$$F_{att} = \mu_d N = \mu_d mg\cos\theta \quad \text{SBAGLIATO}, \qquad F_{att} = \mu_s N = \mu_s mg\cos\theta \quad \text{SBAGLIATO} :$$

il primo perché l'attrito non è dinamico (non c'è strisciamento), il secondo perché $\mu_s N$ è solo il valore massimo che l'attrito statico può raggiungere, non il suo valore effettivo, che vale $0 \le |F_{att}| \le \mu_s N$. Il valore corretto di $F_{att}$ deve essere ricavato come incognita, risolvendo insieme l'equazione di traslazione del CM (prima equazione cardinale) e l'equazione della rotazione attorno al CM (seconda equazione cardinale, data anche da [[6fe3911d-8c54-4e0a-ad45-5312fa18e7be|questa sezione](ref:chapter/9#p2)] come $M_z = I_z\alpha$), insieme alla condizione di puro rotolamento {{formula:9.8}}.

Una volta determinato $F_{att}$, bisogna sempre verificare che il moto di puro rotolamento sia effettivamente possibile, cioè che

$$|F_{att}| \le \mu_s N$$

(condizione di aderenza, già incontrata per il punto materiale). Se questa disuguaglianza è violata, il moto non può essere di puro rotolamento e il corpo rotola strisciando.

Un caso tipico in cui conviene esprimere questa condizione come limite su una forza applicata è il seguente: un corpo di massa $m$, raggio $R$ e momento d'inerzia $I$ rispetto al proprio asse, appoggiato su un piano orizzontale scabro, è spinto da una forza orizzontale $F$ applicata all'asse. Scegliendo il CM come polo si ottengono le equazioni di traslazione e di rotazione

$$F - f_a = ma_{CM}, \qquad f_a R = I\alpha ,$$

che, combinate con la condizione di puro rotolamento $a_{CM}=\alpha R$, danno

$$a_{CM} = \frac{F}{m\left(1+\dfrac{I}{mR^2}\right)}, \qquad f_a = \frac{I}{R^2}\,a_{CM} = \frac{F}{\dfrac{R^2}{I}m+1} .$$

Imponendo la condizione di aderenza $f_a \le \mu_s N = \mu_s mg$ si trova il valore massimo di $F$ compatibile con il puro rotolamento,

:::formula{id="9.9" label="Limite per il puro rotolamento sotto forza applicata"}
$$F \le \mu_s mg\left(\frac{R^2}{I}m+1\right) = F_{lim} .$$
:::

Se $F$ supera $F_{lim}$, il corpo rotola e striscia simultaneamente.

**Esempio 9.3.** Un disco omogeneo di massa $M$ e raggio $R$, momento d'inerzia $I=\tfrac{1}{2}MR^2$, è appoggiato su un piano scabro inclinato di un angolo $\theta$ rispetto all'orizzontale; all'asse del disco è fissato un filo ideale e inestensibile che, passando per una carrucola ideale posta in cima al piano, sostiene una massa $m$ che pende verticalmente. Il disco rotola senza strisciare mentre $m$ scende.

*Schema delle forze.* Sul disco agiscono il peso $M\vec{g}$, la reazione normale $\vec{N}$, la tensione $\vec{T}$ (diretta lungo il piano) e l'attrito statico $\vec{F}_{att}$ (incognito) nel punto di contatto. Su $m$ agiscono il peso $m\vec{g}$ e la stessa tensione $\vec{T}$ (in modulo, filo ideale).

*Equazioni.* Scegliendo l'asse $\hat{u}_\parallel$ lungo il piano (verso la salita) per il disco, e il verso positivo verso il basso per $m$, con il CM come polo per la rotazione del disco si ottiene il sistema

$$\begin{aligned}
mg - T &= ma && \text{(traslazione di } m\text{)}\\
-Mg\sin\theta - F_{att} + T &= Ma && \text{(traslazione del CM del disco)}\\
\frac{I}{R^2}\,a &= F_{att} && \text{(rotazione del disco attorno al CM)}
\end{aligned}$$

dove si è già usata la condizione di filo inestensibile $a_{CM}=a$ e la condizione di puro rotolamento {{formula:9.8}} per scrivere $\alpha=a/R$ e sostituire $I\alpha/R = (I/R^2)a = F_{att}$ nella terza equazione.

*Soluzione letterale.* Sommando le tre equazioni si elimina $T$ e $F_{att}$:

$$mg - Mg\sin\theta = \left(m+M+\frac{I}{R^2}\right)a \quad\Longrightarrow\quad a = g\,\frac{m-M\sin\theta}{m+M+I/R^2} .$$

Con $I=\tfrac12 MR^2$ si ha $I/R^2 = M/2$, quindi

$$a = g\,\frac{m-M\sin\theta}{m+\tfrac32 M}.$$

Di conseguenza $F_{att} = \tfrac12 M a$ e $T = m(g-a)$.

*Controllo (condizione di aderenza).* Affinché il moto sia effettivamente di puro rotolamento occorre $F_{att}\le \mu_s Mg\cos\theta$, cioè

$$\tfrac12 M a \le \mu_s Mg\cos\theta \quad\Longrightarrow\quad \mu_s \ge \frac{m-M\sin\theta}{(2m+3M)\cos\theta} .$$

Se i dati numerici del problema non soddisfano questa disuguaglianza, il disco non può rotolare senza strisciare e il problema deve essere rifatto con attrito dinamico $F_{att}=\mu_d Mg\cos\theta$ noto a priori, al posto dell'incognita $F_{att}$.

**Errore tipico 9.4.** Si noti che $F_{att} \neq \mu_s Mg\cos\theta$ nell'esempio precedente: quel valore è il massimo ammissibile, non il valore effettivo, che dipende anche dalla massa $m$ e dall'angolo $\theta$ secondo la formula trovata sopra.

Infine, è utile ricordare che nel moto di puro rotolamento sotto l'azione di forze conservative (ad esempio il peso) si può applicare la [conservazione dell'energia meccanica](ref:chapter/4#p4): la forza di attrito statico, agendo in un punto istantaneamente fermo, ha spostamento nullo e dunque non compie lavoro.

### Rotolamento con strisciamento

Quando le condizioni iniziali di velocità del centro di massa $v_{CM,0}$ e di velocità angolare $\omega_0$ non soddisfano la relazione {{formula:9.8}}, il punto di contatto ha velocità relativa non nulla rispetto al piano: il corpo striscia, e la forza di attrito è di tipo dinamico, con modulo noto $F_{att}=\mu_d N$ (si veda la sezione sulle [forze di attrito](ref:chapter/3#p5)), diretta in modo da opporsi allo strisciamento relativo nel punto di contatto. In questa fase le equazioni del moto sono completamente determinate e permettono di seguire l'evoluzione di $v_{CM}(t)$ e $\omega(t)$. Nell'esempio seguente, in cui l'unica forza orizzontale agente è l'attrito dinamico, si può mostrare che esiste un istante $t^*$ in cui le due grandezze soddisfano la condizione di puro rotolamento. In generale, però, questa transizione non è garantita: occorre verificare, risolvendo le equazioni del moto proprie del problema considerato, sia l'esistenza effettiva di un istante $t^*$ in cui $v_{CM}(t^*)=\omega(t^*)R$, sia, una volta raggiunta tale condizione cinematica, che l'attrito statico disponibile sia sufficiente a soddisfare la condizione di aderenza $|F_{att}|\le \mu_s N$; solo se entrambe le verifiche sono positive il corpo prosegue effettivamente rotolando senza più strisciare, altrimenti il moto può continuare a strisciare anche dopo $t^*$.

**Esempio 9.4.** Un disco omogeneo di massa $m=2,0$ kg e raggio $R=0,10$ m, con $I_{CM}=\tfrac12 mR^2$, viene lanciato su un piano orizzontale scabro con velocità iniziale del centro di massa $v_0=4,0$ m/s e velocità angolare iniziale nulla, $\omega_0=0$ (il disco inizialmente striscia senza ruotare). Il coefficiente di attrito dinamico tra disco e piano è $\mu_d=0,20$. Si vuole determinare dopo quanto tempo il disco inizia a rotolare senza strisciare, e la velocità del centro di massa in quell'istante.

*Schema e riferimento.* Poiché il punto di contatto si muove in avanti rispetto al piano (il disco trasla senza ancora ruotare), la forza di attrito dinamico è diretta all'indietro, con modulo $F_{att}=\mu_d mg$ (la reazione normale vale $N=mg$ su piano orizzontale).

*Equazioni.* Per la traslazione del CM,

$$-\mu_d mg = ma_{CM} \quad\Longrightarrow\quad a_{CM} = -\mu_d g .$$

La stessa forza di attrito, applicata al bordo del disco, genera un momento che accelera la rotazione (facendo aumentare $\omega$ nel verso che produce rotolamento in avanti):

$$\mu_d mg R = I_{CM}\,\alpha \quad\Longrightarrow\quad \alpha = \frac{\mu_d mg R}{\tfrac12 mR^2} = \frac{2\mu_d g}{R} .$$

*Leggi orarie.* Integrando con le condizioni iniziali,

$$v_{CM}(t) = v_0 - \mu_d g\, t, \qquad \omega(t) = \alpha\, t = \frac{2\mu_d g}{R}\,t .$$

*Istante di transizione.* Il puro rotolamento inizia quando $v_{CM}(t^*)=\omega(t^*)R$:

$$v_0 - \mu_d g\,t^* = 2\mu_d g\,t^* \quad\Longrightarrow\quad t^* = \frac{v_0}{3\mu_d g}.$$

*Numeri.* $t^* = \dfrac{4,0\ \text{m/s}}{3\cdot 0,20\cdot 9,81\ \text{m/s}^2} = 0,68$ s.

La velocità del centro di massa in quell'istante vale

$$v_{CM}(t^*) = v_0 - \mu_d g\,t^* = v_0\left(1-\frac{1}{3}\right) = \frac{2}{3}v_0 = 2,7\ \text{m/s},$$

e la corrispondente velocità angolare $\omega(t^*) = v_{CM}(t^*)/R = 27$ rad/s.

*Controllo.* Le unità sono corrette (tempo in secondi, velocità in m/s) e il risultato $v_{CM}(t^*) < v_0$ è dimensionalmente e fisicamente ragionevole, poiché l'attrito dinamico ha solo decelerato la traslazione e accelerato la rotazione fino a eguagliarle; da $t^*$ in avanti, se non intervengono altre forze esterne, il disco prosegue di puro rotolamento a velocità costante.

:::image{src="assets/5eaa0825-transizione-rotolamento-strisciamento.svg" alt="Due rette, una decrescente che rappresenta v_CM(t) e una crescente che rappresenta ωR(t), che si incontrano nel punto t* = 0,68 s, v = 2,7 m/s" caption="Fig. 9.2 — Velocità del centro di massa v_CM(t) e velocità del bordo ωR(t) durante la fase di strisciamento del disco lanciato con v0 = 4,0 m/s e ω0 = 0: le due curve si incontrano all'istante t* = 0,68 s, quando inizia il puro rotolamento."}
:::

Questo stesso meccanismo spiega perché, in generale, il rotolamento comporta necessariamente una fase di strisciamento ogniqualvolta le condizioni iniziali di $v_{CM}$ e $\omega$ non siano già compatibili con {{formula:9.8}}: tale fase dissipa energia meccanica, perché durante lo strisciamento l'attrito è dinamico e compie lavoro negativo (a differenza del caso di puro rotolamento, in cui il lavoro dell'attrito è sempre nullo).

## p5 | Urti con corpi rigidi

Negli urti che coinvolgono un corpo rigido vincolato (un'asta incernierata, un disco montato su un perno), le condizioni di conservazione viste per i sistemi liberi di punti materiali (vedi [Urti](ref:chapter/7#p7)) vanno riesaminate con attenzione, perché il vincolo introduce una forza esterna impulsiva la cui azione sul sistema va valutata caso per caso.

### Urto vincolato: definizioni e impulso angolare

Un **urto** resta, come già definito, un evento isolato nel quale una forza relativamente intensa agisce per un tempo breve (trascurabile rispetto ai tempi caratteristici del moto) su due o più corpi in contatto; le forze che i due corpi si scambiano durante l'urto sono forze impulsive interne al sistema che urta.

Si parla di **urto vincolato** quando uno dei corpi coinvolti (tipicamente un corpo rigido) è a sua volta soggetto a un vincolo esterno, per esempio un perno o una cerniera, che esercita una reazione vincolare sul sistema durante l'urto. In questo caso il sistema "punto materiale + corpo rigido" non è isolato: la reazione del vincolo è una forza esterna, e in generale essa stessa diventa impulsiva durante l'urto (si esercita per un tempo brevissimo ma con intensità elevata, proprio per impedire al punto vincolato di accelerare bruscamente).

Per trattare questi urti conviene estendere al momento angolare il teorema dell'impulso visto per la quantità di moto. Supponendo che il polo $O$ sia fisso in un riferimento inerziale, integrando il teorema del momento angolare (seconda equazione cardinale) tra un istante immediatamente precedente e uno immediatamente successivo all'urto si ottiene il **teorema dell'impulso angolare**. Questa forma del teorema vale appunto per un polo fisso: se il polo si muovesse, la derivata di $\vec{L}_O$ conterrebbe un termine aggiuntivo legato al moto del polo stesso.

:::formula{id="9.10" label="Teorema dell'impulso angolare"}
$$\int_{t_1}^{t_2} \vec{M}_O\, dt = \vec{L}_O(t_2) - \vec{L}_O(t_1) = \Delta \vec{L}_O$$
:::

L'azione di un momento durante un intervallo di tempo finito produce una variazione finita del momento angolare rispetto al polo $O$; se il momento è generato da una forza impulsiva $\vec{F}(t)$ applicata in un punto di vettore posizione $\vec{r}(t)$ rispetto a $O$, si ha $\int \vec{M}_O\,dt=\int \left(\vec{r}(t)\times\vec{F}(t)\right)dt$. Portare $\vec{r}$ fuori dall'integrale, scrivendo $\vec{r}(t)\times\int\vec{F}\,dt=\vec{r}\times\vec{J}$, richiede che il punto di applicazione resti fermo rispetto a $O$ durante tutto l'intervallo: per un urto di durata finita questa è solo un'approssimazione. Nel limite di urto istantaneo, in cui la durata dell'urto tende a zero e il punto di applicazione non ha tempo di spostarsi apprezzabilmente, l'integrale tende a $\vec{r}(t_*)\times\vec{J}=\Delta\vec{L}_O$, dove $t_*$ è l'istante dell'urto e la grandezza $\vec{r}(t_*)\times\vec{J}$ prende il nome di momento dell'impulso.

### Quali grandezze si conservano

Il punto centrale nell'analisi di un urto vincolato è la scelta del polo rispetto a cui calcolare il momento angolare. Se si sceglie come polo $O$ proprio il punto in cui agisce la reazione vincolare (il perno), il momento della reazione rispetto a quel polo è nullo, perché il braccio è nullo:

$$\vec{M}_{\vec{R}}=\vec{r}\times\vec{R}=\vec{0}\times\vec{R}=\vec{0}$$

Di conseguenza, se non ci sono altre forze esterne impulsive con momento non nullo rispetto al perno, il momento angolare del sistema rispetto al perno si conserva attraverso l'urto

:::formula{id="9.11" label="Conservazione del momento angolare in un urto vincolato"}
$$\vec{L}_{O,\,\text{prima}} = \vec{L}_{O,\,\text{dopo}} \qquad (O = \text{polo del vincolo})$$
:::

anche se, in generale, la quantità di moto totale del sistema **non si conserva**, perché la reazione vincolare è una forza esterna impulsiva non bilanciata.

Due osservazioni completano il quadro.

- La forza peso, a differenza della reazione del perno, è una forza **non impulsiva**: anche se il suo momento rispetto al polo non è nullo, l'integrale di tale momento su un intervallo di tempo che tende a zero tende anch'esso a zero, quindi il peso non introduce discontinuità nel momento angolare durante l'urto. Il momento angolare resta allora continuo nel tempo anche quando il peso lo fa variare con continuità prima e dopo l'urto. In particolare, se all'istante dell'urto il braccio del peso rispetto al polo è nullo (per esempio perché l'asta è verticale e il peso è parallelo al braccio), il momento delle forze esterne è addirittura nullo in quell'istante.
- Quando il vincolo mantiene fisso solo un asse (non l'intero punto di applicazione, come nel caso di un disco su un perno che fissa l'asse $z$ ma lascia libere le altre direzioni), in generale il vettore $\vec{L}$ non si conserva né nel tempo né attraverso l'urto, perché il perno può esercitare anche un momento vincolare impulsivo lungo le direzioni trasversali, per esempio tramite attrito tra il perno e l'asse. Infatti un vincolo reale può trasmettere coppie impulsive attorno all'asse stesso. Tuttavia, se il vincolo è ideale (non esercita momento impulsivo in direzione assiale, per esempio perché l'attrito nel perno è trascurabile) e non agiscono altre forze esterne impulsive con momento non nullo rispetto all'asse, la **componente assiale** $L_z$ lungo l'asse fissato dal vincolo si conserva attraverso l'urto, perché in queste condizioni il momento della reazione vincolare rispetto a quell'asse è nullo. È questa componente, e non l'intero vettore, la grandezza da usare nei bilanci, purché si sia verificata esplicitamente l'assenza di momenti impulsivi assiali esterni al sistema.

In sintesi, per un urto vincolato occorre sempre individuare esplicitamente quale componente (o quale momento angolare rispetto a quale polo) si conserva, prima di scrivere qualunque equazione di bilancio; la quantità di moto totale, salvo casi particolari, non è conservata.

### Esempio: punto materiale che urta un'asta incernierata nel centro

Un'asta rigida omogenea di lunghezza $l = 1,0\ \text{m}$ e massa $M = 12\ \text{kg}$ è imperniata nel suo centro ed è libera di ruotare senza attrito in un piano orizzontale. Un oggetto puntiforme di massa $m = 1,0\ \text{kg}$ viene lanciato con velocità $\vec{v} = 2,0\ \hat{u}_x\ \text{m/s}$ contro un estremo dell'asta, orientata lungo $y$. Dopo l'urto l'oggetto rimbalza con velocità $\vec{v}' = -0,50\ \hat{u}_x\ \text{m/s}$.

Il sistema asta + oggetto non è isolato (il perno esercita una reazione vincolare $\vec{R}$), quindi la quantità di moto totale non si conserva. Scegliendo come polo il perno, il momento di $\vec{R}$ è nullo e il momento angolare rispetto al perno si conserva attraverso l'urto, come stabilito sopra.

Prima dell'urto l'asta è ferma, quindi tutto il momento angolare è portato dall'oggetto:

$$\vec{L}_{\text{prima}} = \frac{l}{2}\, m v\, \hat{u}_z$$

con $\hat{u}_z$ uscente dal piano.

Dopo l'urto l'oggetto rimbalza con velocità $v'$ (nota) mentre l'asta ruota con velocità angolare $\omega$ incognita, con momento d'inerzia $I = \frac{1}{12}Ml^2$ (asse centrale):

$$\vec{L}_{\text{dopo}} = \frac{l}{2}\, m v'\, \hat{u}_z + I \omega\, \hat{u}_z$$

Uguagliando le due espressioni:

$$\frac{l}{2} m v = \frac{l}{2} m v' + I\omega \quad\Rightarrow\quad \omega = \frac{\frac{l}{2}m(v-v')}{I}$$

Numericamente $I = \frac{1}{12}(12\ \text{kg})(1,0\ \text{m})^2 = 1,0\ \text{kg}\cdot\text{m}^2$, quindi

$$\omega = \frac{0,50\ \text{m}\cdot 1,0\ \text{kg}\cdot(2,0+0,50)\ \text{m/s}}{1,0\ \text{kg}\cdot\text{m}^2} = 1,25\ \text{s}^{-1}$$

in accordo con il valore riportato nelle soluzioni di riferimento.

L'impulso ricevuto dal perno si ottiene dalla variazione della quantità di moto totale, dato che tutta la variazione di $\vec{p}$ del sistema (il contributo dell'asta resta nullo, perché il suo centro di massa coincide con il perno) è dovuta alla reazione vincolare:

$$\vec{J} = \vec{p}_{\text{dopo}} - \vec{p}_{\text{prima}} = m\vec{v}' - m\vec{v} = -m(v+|v'|)\,\hat{u}_x$$

Numericamente $J = (1,0\ \text{kg})(2,0+0,50)\ \text{m/s} = 2,5\ \text{kg}\cdot\text{m/s}$, diretto in verso opposto a $\vec{v}$.

Se invece l'urto fosse **elastico** (energia cinetica conservata, oltre al momento angolare), $v'$ non sarebbe più un dato ma un'incognita, e si dovrebbe risolvere il sistema

$$\begin{cases} \dfrac{l}{2}mv = \dfrac{l}{2}mv'' + I\omega' \\\lbrack 4pt\rbrack  \dfrac{1}{2}mv^2 = \dfrac{1}{2}mv''^2 + \dfrac{1}{2}I\omega'^2 \end{cases}$$

Risolvendo e sostituendo $I=\frac{1}{12}Ml^2$ si trova, con i dati numerici dell'esercizio, $\omega' = 1,6\ \text{s}^{-1}$ e $v'' = -1,2\ \text{m/s}$ (l'oggetto rimbalza indietro), con impulso sul perno $J' = 3,2\ \text{kg}\cdot\text{m/s}$.

### Esempio: asta incernierata a un estremo che urta un punto materiale

Un'asta di lunghezza $l = 1,2\ \text{m}$ e massa $M = 0,50\ \text{kg}$ è incernierata nel suo estremo $A$ e può oscillare senza attrito in un piano verticale. Parte da ferma in posizione orizzontale e, raggiunta la posizione verticale, urta un piccolo oggetto di massa $m = 0,25\ \text{kg}$, inizialmente fermo, che parte con velocità orizzontale $v_0$, mentre l'asta si ferma.

Prima dell'urto bisogna determinare la velocità angolare $\omega_-$ dell'asta nell'istante in cui raggiunge la verticale, usando la conservazione dell'energia meccanica durante la caduta (non c'è urto in questa fase):

$$Mg\frac{l}{2} = \frac{1}{2}I_A \omega_-^2 \qquad I_A = \frac{1}{3}Ml^2$$

da cui

$$\omega_- = \sqrt{\frac{3g}{l}} = \sqrt{\frac{3\cdot 9,81\ \text{m/s}^2}{1,2\ \text{m}}} \approx 4,95\ \text{s}^{-1}$$

All'istante dell'urto, scegliendo come polo il perno $A$, il momento della reazione vincolare è nullo, e il momento della forza peso è trascurabile perché non impulsivo (oltre ad annullarsi in quell'istante, essendo l'asta verticale e il peso parallelo al braccio): il momento angolare rispetto ad $A$ si conserva attraverso l'urto.

Prima dell'urto il momento angolare è tutto portato dall'asta in rotazione, $\vec{L}_{\text{prima}} = I_A\omega_-\,\hat{u}_z$; dopo l'urto l'asta si ferma e tutto il momento angolare passa al punto materiale, che si muove con velocità orizzontale $v_0$ a distanza $l$ dal perno: $\vec{L}_{\text{dopo}} = m v_0 l\,\hat{u}_z$.

Uguagliando:

$$I_A\omega_- = m v_0 l \quad\Rightarrow\quad v_0 = \frac{I_A\omega_-}{ml}$$

Con $I_A = \frac{1}{3}(0,50\ \text{kg})(1,2\ \text{m})^2 = 0,24\ \text{kg}\cdot\text{m}^2$:

$$v_0 = \frac{(0,24\ \text{kg}\cdot\text{m}^2)(4,95\ \text{s}^{-1})}{(0,25\ \text{kg})(1,2\ \text{m})} \approx 3,96\ \text{m/s}$$

Il controllo dimensionale è immediato ($\text{kg}\cdot\text{m}^2\cdot\text{s}^{-1}/(\text{kg}\cdot\text{m}) = \text{m/s}$) e l'ordine di grandezza è ragionevole per un urto in cui l'oggetto, pur avendo massa minore dell'asta, riceve tutto il momento angolare che l'asta possedeva rispetto al perno appena prima dell'urto. Si noti che, non essendo specificato che l'urto sia elastico, l'energia cinetica non si conserva nell'urto: parte di essa viene dissipata (deformazioni anelastiche), mentre a conservarsi è soltanto il momento angolare rispetto al perno.

### Esempio: punto materiale che cade su un disco rotante attorno a un asse verticale

Un disco di massa $M$ e raggio $R$ ruota con velocità angolare $\omega$ in un piano orizzontale, attorno a un asse verticale fissato da un perno che passa per il centro del disco. Si assume che il perno sia privo di attrito e non eserciti alcun momento impulsivo attorno all'asse verticale $z$, cioè che l'unico effetto del vincolo sia quello di mantenere fisso l'asse di rotazione. Un punto materiale di massa $m$ cade da un'altezza $h$ e urta il disco a distanza $d<R$ dal centro, rimanendovi attaccato.

In questo caso il perno fissa non solo il centro del disco, ma l'intero asse di rotazione: esso può quindi esercitare, oltre alla reazione $\vec{R}$ che impedisce al centro di massa di spostarsi, anche un momento vincolare impulsivo diretto lungo l'asse orizzontale, necessario a impedire che l'urto (eccentrico) faccia inclinare l'asse di rotazione. Questo momento vincolare rende impossibile la conservazione del vettore $\vec{L}$ completo. La componente lungo l'asse verticale $z$ resta invece conservata attraverso l'urto, ma solo in virtù dell'ipotesi fatta sopra: se il perno non esercita alcun momento impulsivo assiale, il momento della reazione vincolare rispetto all'asse $z$ è nullo e $L_z$ non subisce discontinuità. Se invece il vincolo trasmettesse una coppia impulsiva attorno a $z$ (per esempio per attrito nel perno), nemmeno $L_z$ si conserverebbe.

Prima dell'urto, la componente $L_z$ è dovuta soltanto alla rotazione del disco (la velocità del punto materiale in caduta è verticale, quindi contribuisce solo a componenti orizzontali di $\vec{L}$, non a $L_z$):

$$L_{z,\text{prima}} = I_D\,\omega \qquad I_D = \frac{1}{2}MR^2$$

Dopo l'urto il punto materiale, incollato al disco a distanza $d$ dall'asse, ruota solidalmente con esso aumentandone il momento d'inerzia:

$$L_{z,\text{dopo}} = (I_D + md^2)\,\omega'$$

Dalla conservazione $L_{z,\text{prima}} = L_{z,\text{dopo}}$:

$$I_D\,\omega = (I_D+md^2)\,\omega' \quad\Rightarrow\quad \omega' = \omega\,\frac{1}{1+2\dfrac{m}{M}\dfrac{d^2}{R^2}}$$

:::image{src="assets/98f7db94-omega-finale-vs-distanza-impatto.svg" alt="Grafico del rapporto omega primo su omega in funzione di d su R per il disco con massa incollata" caption="Fig. 9.3 — Rapporto ω'/ω tra la velocità angolare del disco dopo e prima dell'urto, in funzione della distanza relativa d/R a cui il punto materiale si incolla, per m/M = 0,5: più l'urto è eccentrico, più il momento d'inerzia aumenta e la rotazione si rallenta."}
:::

Il risultato mostra, in modo del tutto analogo al caso del disco libero visto nella sezione sul [rotolamento](ref:chapter/9#p4) e nei [teoremi di König](ref:chapter/8#p4), che l'aumento del momento d'inerzia dovuto alla massa aggiunta rallenta la rotazione, proprio come previsto dalla conservazione del momento angolare assiale introdotta nella sezione sulla [rotazione attorno a un asse fisso](ref:chapter/9#p2).

**Errore tipico 9.5**

Un errore frequente consiste nell'applicare automaticamente la conservazione della quantità di moto totale a un urto che coinvolge un corpo vincolato, come se il perno non esistesse: la reazione vincolare è una forza esterna impulsiva, e salvo casi particolari $\vec{p}$ non si conserva. Un secondo errore è imporre la conservazione dell'intero vettore momento angolare quando il vincolo fissa solo un asse (non un punto isolato): anche ammettendo che la componente assiale $L_z$ si conservi, le altre componenti subiscono comunque una variazione impulsiva dovuta al momento vincolare incognito. Va inoltre ricordato che la conservazione di $L_z$ non è automatica: essa richiede che non vi siano momenti impulsivi esterni lungo l'asse, compresi eventuali momenti impulsivi trasmessi dal vincolo stesso (per esempio per attrito nel perno); se il vincolo fissa l'asse trasmettendo anche una coppia impulsiva assiale, nemmeno $L_z$ si conserva. Un terzo errore è assumere che l'urto sia elastico senza che il testo lo specifichi esplicitamente, usando la conservazione dell'energia cinetica al posto, o in aggiunta, alla sola conservazione del momento angolare: se non è detto altrimenti, l'unica grandezza di cui si ha certezza è la conservazione del momento angolare rispetto al polo opportuno.
