---
chapter: 2
title: Cinematica del punto
---

## p1 | Introduzione

Descrivere il moto significa capire come cambia la posizione di un punto nel tempo e collegare quel cambiamento alla velocità e all’accelerazione. Questi strumenti permettono di interpretare situazioni quotidiane e di risolvere problemi di meccanica con un metodo comune, dai movimenti lungo una linea alle traiettorie nel piano.

Per affrontare il capitolo servono le idee di misura e vettore: saper indicare grandezze, unità di misura, direzioni e versi. Da qui si costruiscono le descrizioni del moto in coordinate cartesiane, polari e intrinseche, distinguendo la variazione del modulo della velocità dal cambiamento della sua direzione. Le relazioni tra posizione, velocità e accelerazione aiutano a ricavare una legge oraria quando è nota l’accelerazione, e a controllare che formule e condizioni iniziali siano coerenti.

Al termine saprai analizzare moti rettilinei uniformi e uniformemente accelerati, il moto verticale di un grave, il moto armonico e quello circolare, sia uniforme sia accelerato. Saprai inoltre scomporre un moto nel piano nelle sue componenti e trattare il lancio parabolico, determinando traiettoria, altezza massima, tempo di volo e gittata. Potrai scegliere la descrizione più adatta al problema e riconoscere gli errori di segno, di unità e di interpretazione delle grandezze.

## p2 | Moto rettilineo

Il moto rettilineo è il caso più semplice di moto di un punto materiale: la traiettoria è una retta, sulla quale si fissano un'origine e un verso, e l'intera informazione cinematica è contenuta in un'unica funzione scalare $x(t)$, detta legge oraria. Tutte le grandezze che descrivono il moto — velocità e accelerazione — si ottengono da $x(t)$ per derivazione, oppure, nota una di esse, si risale alle altre per integrazione.

### Dalla posizione alla velocità e all'accelerazione

La **velocità media** nell'intervallo $\lbrack t_1, t_2\rbrack $ misura lo spostamento complessivo diviso il tempo impiegato,

$$v_m = \frac{\Delta x}{\Delta t} = \frac{x_2 - x_1}{t_2 - t_1},$$

ma non dà informazioni su come il moto si è svolto all'interno dell'intervallo.

La **velocità istantanea** rappresenta invece la rapidità di variazione della posizione in un singolo istante $t$, ed è il limite della velocità media su un intervallo che tende a zero:

:::formula{id="2.1" label="Velocità istantanea"}
$$v(t) = \lim_{\Delta t \to 0} \frac{\Delta x(t)}{\Delta t} = \frac{dx(t)}{dt}$$
:::

Il segno di $v(t)$ indica il verso di percorrenza rispetto al riferimento scelto.

Analogamente, l'**accelerazione media** è $a_m = \Delta v/\Delta t$, mentre l'**accelerazione istantanea** è la derivata della velocità rispetto al tempo, cioè la derivata seconda della posizione:

:::formula{id="2.2" label="Accelerazione istantanea"}
$$a(t) = \frac{dv}{dt} = \frac{d^2x}{dt^2}$$
:::

Se $a = 0$ la velocità è costante (moto rettilineo uniforme); se $a > 0$ la velocità cresce nel tempo, se $a < 0$ diminuisce. Il segno di $a$ da solo non basta a dire se il punto accelera o frena: ciò dipende dal segno concorde o discorde con $v$.

### Dall'integrazione alla legge oraria: moto uniforme e uniformemente accelerato

Il percorso inverso — da $v(t)$ a $x(t)$, o da $a(t)$ a $v(t)$ — richiede un'integrazione, ed è sempre possibile grazie al teorema fondamentale del calcolo integrale. Scrivendo $dx = v(t)\,dt$ e integrando tra l'istante iniziale $t_0$ (in cui la posizione vale $x_0$) e l'istante generico $t$, si ottiene la legge oraria valida per **qualunque** moto rettilineo, purché sia nota $v(t)$:

:::formula{id="2.3" label="Legge oraria per integrazione della velocità"}
$$x(t) = x_0 + \int_{t_0}^{t} v(t')\,dt'$$
:::

Geometricamente, l'integrale $\int_{t_1}^{t_2} v(t)\,dt$ è l'area sottesa dal grafico di $v(t)$ tra $t_1$ e $t_2$, e rappresenta lo spostamento $\Delta x = x(t_2) - x(t_1)$: non la distanza percorsa in modulo, ma la somma algebrica degli spostamenti, con segno.

Per risalire alla legge oraria occorre sempre conoscere, oltre a $v(t)$, la condizione iniziale $x_0$: la stessa $v(t)$ descrive infiniti moti diversi, uno per ogni scelta di $x_0$.

Allo stesso modo, integrando $dv = a(t)\,dt$ si ottiene la velocità in funzione del tempo a partire dall'accelerazione:

:::formula{id="2.4" label="Velocità per integrazione dell'accelerazione"}
$$v(t) = v_0 + \int_{t_0}^{t} a(t')\,dt'$$
:::

Due casi particolari, molto frequenti negli esercizi, meritano le formule esplicite.

**Moto rettilineo uniforme** ($v = \text{costante}$): integrando la {{formula:2.3}} con $v$ costante si ha

:::formula{id="2.5" label="Legge oraria del moto rettilineo uniforme"}
$$x(t) = x_0 + v(t - t_0)$$
:::

In questo caso la velocità istantanea coincide, per ogni intervallo, con la velocità media.

**Moto rettilineo uniformemente accelerato** ($a = \text{costante} \ne 0$): integrando $a$ costante si ottiene prima la velocità, poi, integrando ancora, la posizione:

:::formula{id="2.6" label="Velocità nel moto uniformemente accelerato"}
$$v(t) = v_0 + a(t - t_0)$$
:::

:::formula{id="2.7" label="Legge oraria del moto uniformemente accelerato"}
$$x(t) = x_0 + v_0(t - t_0) + \frac{1}{2}a(t - t_0)^2$$
:::

Eliminando il tempo tra le due relazioni precedenti si ricava una terza formula, utilissima quando il tempo non è noto o non interessa:

:::formula{id="2.8" label="Relazione tra velocità e spostamento nel moto uniformemente accelerato"}
$$v^2 = v_0^2 + 2a(x - x_0)$$
:::

Il moto verticale di caduta libera (o di lancio) vicino alla superficie terrestre, trascurando la resistenza dell'aria, è il caso particolare più importante di moto uniformemente accelerato, con $a = -g$ se l'asse è orientato verso l'alto; è trattato in dettaglio in [Moto verticale](ref:chapter/2#p3).

:::image{src="assets/477930f8-mrua-area-sottesa.svg" alt="Grafico di v in funzione di t, retta crescente con pendenza a, con l'area sottesa tra due istanti t1 e t2 evidenziata" caption="Fig. 2.1 — La velocità nel moto uniformemente accelerato cresce linearmente nel tempo; l'area sotto la retta tra due istanti è lo spostamento Δx"}
:::

### Separazione delle variabili: $a(v)$ e $a(x)$

Quando l'accelerazione è nota non in funzione del tempo ma della posizione, $a(x)$, conviene cambiare variabile usando la regola della derivata composta:

$$a = \frac{dv}{dt} = \frac{dv}{dx}\cdot\frac{dx}{dt} = v\,\frac{dv}{dx}.$$

Da questa relazione, separando le variabili ($a(x)\,dx = v\,dv$) e integrando tra la posizione iniziale $x_0$ (con velocità $v_0$) e la posizione $x$, si ottiene:

$$\int_{x_0}^{x} a(x')\,dx' = \frac{1}{2}v^2 - \frac{1}{2}v_0^2.$$

Poiché la relazione fornisce $v^2$, il segno di $v$ (cioè il verso del moto) va determinato a parte, dai segni di $v_0$ e dell'andamento di $a(x)$; non è automaticamente fissato dalla formula.

Un secondo caso tipico è quello in cui l'accelerazione dipende dalla velocità stessa, $a(v)$, come nel **moto rettilineo smorzato esponenzialmente**, in cui $a$ è sempre opposta a $v$:

$$\frac{dv}{dt} = -kv \quad \Longrightarrow \quad \ln\left(\frac{v}{v_0}\right) = -kt \quad \Longrightarrow \quad v(t) = v_0\,e^{-kt},$$

dove $v_0$ è la velocità all'istante iniziale $t=0$ e $k$ (spesso indicato con $\gamma = 1/\tau$, l'inverso di un tempo di smorzamento caratteristico) ha le dimensioni dell'inverso di un tempo. Integrando ulteriormente, con la condizione iniziale $x(0) = x_0$, si ottiene la legge oraria, e passando a $v(x)$ tramite $v\,dv/dx = -kv$ si trova anche la posizione limite verso cui il moto tende:

$$x(t) = x_0 + \frac{v_0}{k}\left(1 - e^{-kt}\right), \qquad v(x) = v_0 - k(x - x_0),$$

dove la velocità $v(t) = v_0 e^{-kt}$ decresce esponenzialmente e tende a zero solo asintoticamente, per $t \to \infty$, senza mai annullarsi esattamente in un istante finito. Corrispondentemente la posizione tende, per $t \to \infty$, al valore limite $x_0 + v_0/k$, che dipende dalla posizione iniziale $x_0$: se $x_0 = 0$ si ritrova $x \to v_0/k$, ma in generale il punto di arresto asintotico è $x_0 + v_0/k$. Questo tipo di moto, legato a un'equazione differenziale lineare del primo ordine, ricompare nella descrizione delle oscillazioni smorzate; si veda [Moto armonico](ref:chapter/2#p4).

### Esempio svolto

Una particella si muove lungo l'asse $x$ con legge della velocità $v(t) = v_0 + at$, dove $v_0 = 2{,}0$ m/s e $a = 9{,}81$ m/s². All'istante $t = 0$ la particella si trova in $x = 2{,}0$ m. Si chiede: (1) la posizione all'istante $t = 1{,}0$ s; (2) l'istante in cui la particella raggiunge $x = 4{,}0$ m.

Si applica la {{formula:2.3}} integrando tra $t=0$ s e $t=1{,}0$ s:

$$x(1\text{ s}) = x(0) + \int_{0}^{1\text{ s}} (v_0 + at)\,dt = 2{,}0\text{ m} + \left\lbrack v_0 t + \frac{a}{2}t^2\right\rbrack _{0}^{1\text{ s}}.$$

Sostituendo i valori numerici con le unità:

$$x(1\text{ s}) = 2{,}0\text{ m} + 2{,}0\text{ m} + 4{,}91\text{ m} = 8{,}9\text{ m}.$$

Per il secondo punto si integra tra $t=0$ e l'istante incognito $t^*$ in cui $x(t^*) = 4{,}0$ m, ottenendo $\frac{a}{2}t^{*2} + v_0 t^* = 2{,}0$ m, cioè un'equazione di secondo grado in $t^*$:

$$a\,t^{*2} + 2v_0 t^* - 4{,}0\text{ m} = 0.$$

Delle due soluzioni si scarta quella con il segno "$-$", che darebbe un tempo negativo privo di significato fisico (un istante precedente a $t=0$); resta la soluzione positiva

$$t^* = \frac{-v_0 + \sqrt{v_0^2 + 2a\cdot 2{,}0\text{ m}}}{a} \approx 0{,}47\text{ s}.$$

Si verifica che questo valore è compatibile con quanto trovato al punto precedente: con $a \approx 9{,}8$ m/s² e $v_0 = 2{,}0$ m/s, in meno di un secondo la particella percorre pochi metri, coerentemente con lo spostamento di $2{,}0$ m richiesto per passare da $x=2{,}0$ m a $x=4{,}0$ m.

Come controllo, il risultato numerico va verificato dimensionalmente (ogni addendo in metri) e per ordine di grandezza: con $a \approx 9{,}8$ m/s² in meno di un secondo lo spostamento aggiuntivo di circa 5 m è ragionevole.

Un secondo esempio classico (problema di Mazzoldi) chiede di determinare l'accelerazione e il tempo di percorrenza di un tratto $\Delta x$ note le velocità agli estremi $v_1$, $v_2$ di un moto uniformemente accelerato. Combinando $\Delta x = t^*(v_1+v_2)/2$ con $a = (v_2-v_1)/t^*$ si elimina $t^*$ e si ottiene

$$a = \frac{v_2^2 - v_1^2}{2\,\Delta x},$$

che è un riarrangiamento della {{formula:2.8}}; da qui, sostituendo $v_1 = 1{,}9$ m/s, $v_2 = 8{,}2$ m/s, $\Delta x = 10$ m, si trova $a = 3{,}18$ m/s² e, dalla relazione $v_2 = v_1 + a t^*$, $t^* = 1{,}98$ s.

**Errore tipico 2.1**

Un errore frequente è scrivere un'uguaglianza in cui un membro è un numero puro e l'altro una grandezza dimensionata, ad esempio calcolare una componente di forza come

$$F_x = mg\sin\theta = 5\cdot 9{,}81\cdot \frac{1}{2}\text{ \lbrack numero puro\rbrack } = 24{,}5\text{ N \lbrack forza\rbrack } \qquad \textbf{SBAGLIATO},$$

dove il passaggio intermedio confonde un fattore adimensionale con il risultato finale in newton. Ogni singola uguaglianza di una catena di passaggi deve essere dimensionalmente corretta, non solo il primo e l'ultimo membro: un controllo dimensionale sistematico, come discusso in [Metodo sperimentale e misure](ref:chapter/1#p2), permette di scartare subito formule come $a = (v_2-v_1)/(2\Delta x)$ (dimensionalmente errata) a favore di $a = (v_2^2-v_1^2)/(2\Delta x)$.

Un secondo errore tipico riguarda il moto **vario** (accelerazione non costante nel tempo, ad esempio accelerazione $a_1$ fino a un istante $t_1$ e poi $a_2$): la legge oraria per il secondo tratto va scritta usando come condizioni iniziali la posizione e la velocità raggiunte alla fine del primo tratto, cioè $x(t) = x_1 + v_1(t-t_1) + \tfrac12 a_2(t-t_1)^2$, e **non** $x(t) = x_1 + v_1 t + \tfrac12 a_2 t^2$: quest'ultima scrittura non soddisfa la condizione $x(t_1) = x_1$ e introduce un errore sistematico nella legge oraria.

## p3 | Moto verticale

Il moto verticale di un grave è l'applicazione più naturale delle leggi del moto rettilineo uniformemente accelerato studiate nella sezione [Moto rettilineo](ref:chapter/2#p2): in questo caso l'accelerazione costante è quella di gravità.

### Ipotesi e impostazione del problema

Se si trascura l'attrito con l'aria, un corpo lasciato libero di cadere vicino alla superficie terrestre si muove con un'accelerazione costante in modulo e direzione, pari a $g = 9{,}81 \ \text{m/s}^2$, diretta verticalmente verso il basso. Il moto è quindi un caso particolare di moto rettilineo uniformemente accelerato, con l'unica avvertenza di scegliere correttamente il segno dell'accelerazione in base al riferimento adottato.

La costante $g$ non dipende dalla massa, dalla forma o dalla natura del corpo, ma dipende fisicamente dalla latitudine e dalla quota del punto di osservazione, poiché il suo valore locale diminuisce (seppur di poco) allontanandosi dal centro della Terra. Nelle leggi orarie che seguono si assume $g$ costante lungo tutta la traiettoria: questa è un'approssimazione valida quando l'escursione verticale del moto è piccola rispetto al raggio terrestre, come accade in tutti i casi pratici considerati in questa sezione.

Conviene fissare un asse $z$ verticale, con origine al suolo e verso positivo verso l'alto. Con questa scelta l'accelerazione di gravità ha componente negativa, $a_z = -g$, mentre quota e velocità iniziali, $h_0$ e $v_0$, possono avere segno qualunque secondo il caso considerato (corpo lasciato cadere, lanciato verso l'alto o verso il basso). Alcuni testi usano invece un asse orientato verso il basso, nel qual caso $g$ compare con segno positivo: la fisica del problema non cambia, cambia solo la convenzione di segno.

### Leggi orarie del grave

Applicando le leggi generali del moto uniformemente accelerato con $t_0 = 0$, $x_0 = h_0$, $v_0$ e $a = -g$, la velocità e la quota al tempo $t$ valgono

:::formula{id="2.9" label="Legge oraria del moto verticale"}
$$z(t) = h_0 + v_0 t - \frac{1}{2} g t^2$$
:::

:::formula{id="2.10" label="Velocità nel moto verticale"}
$$v(t) = \frac{dz}{dt} = v_0 - g t$$
:::

Queste due relazioni descrivono tutti i casi di interesse, a seconda dei valori assegnati a $h_0$ e $v_0$: un corpo lasciato cadere senza velocità iniziale corrisponde a $v_0 = 0$; un corpo lanciato verso l'alto da terra corrisponde a $h_0 = 0$ e $v_0 > 0$; un corpo lanciato verso il basso corrisponde a $v_0 < 0$.

In particolare, per un grave lanciato verso l'alto a partire dal suolo ($h_0 = 0$, $v_0 > 0$), le leggi orarie si riducono a $v(t) = v_0 - g t$ e $z(t) = v_0 t - \tfrac{1}{2} g t^2$; dopo aver raggiunto il punto più alto il corpo ridiscende esattamente come un corpo lasciato cadere da quella quota, poiché in quell'istante la velocità è nulla.

### Quota massima e tempo di volo

Le formule seguenti valgono per un lancio verso l'alto, cioè per $v_0 > 0$: in tal caso la quota è massima quando la velocità si annulla, perché in quell'istante $z(t)$ ha derivata nulla ed è un punto di massimo (l'accelerazione, negativa, garantisce che non si tratti di un minimo). Imponendo $v(t_{\max}) = v_0 - g t_{\max} = 0$ si ottiene l'istante di quota massima, e sostituendolo nella legge oraria si ottiene la quota massima stessa. Se invece $v_0 \le 0$ (corpo lasciato cadere o lanciato verso il basso), la velocità non si annulla mai durante il moto successivo al lancio: il corpo scende fin dall'istante iniziale, e la quota massima durante il volo è semplicemente la quota di partenza, $z_{\max} = h_0$, raggiunta a $t = 0$.

:::formula{id="2.11" label="Istante e valore della quota massima (per $v_0>0$)"}
$$t_{\max} = \frac{v_0}{g}, \qquad z_{\max} = z(t_{\max}) = h_0 + \frac{v_0^2}{2g} \qquad (v_0 > 0)$$
:::

Il tempo di volo $t^{*}$, cioè l'istante in cui il corpo raggiunge il suolo, si trova imponendo $z(t^{*}) = 0$ nella legge oraria, che diventa un'equazione di secondo grado in $t^{*}$:

$$\frac{1}{2} g t^{*2} - v_0 t^{*} - h_0 = 0.$$

Se $h_0 > 0$, le due soluzioni dell'equazione hanno sempre segno opposto, perché il loro prodotto vale $-2h_0/g < 0$: si tiene solo quella positiva, perché prima dell'istante iniziale il corpo non era ancora in moto libero. Se invece $h_0 = 0$, cioè il lancio avviene da terra, una delle due soluzioni è banalmente $t = 0$, l'istante stesso del lancio; l'altra soluzione, $t^{*} = 2v_0/g$, è positiva e rappresenta un vero tempo di volo solo quando $v_0 > 0$, cioè quando il corpo viene effettivamente lanciato verso l'alto e poi ricade. Se $h_0 = 0$ e $v_0 \le 0$ non esiste alcun istante futuro di impatto: il corpo si trova già al suolo all'istante iniziale e non compie alcun volo.

:::formula{id="2.12" label="Tempo di volo"}
$$t^{*} = \frac{v_0 + \sqrt{v_0^2 + 2 g h_0}}{g}$$
:::

La velocità di impatto al suolo si ottiene sostituendo $t^{*}$ nella legge della velocità; il risultato si semplifica notevolmente:

:::formula{id="2.13" label="Velocità di impatto al suolo"}
$$v^{*} = v(t^{*}) = v_0 - g t^{*} = -\sqrt{v_0^2 + 2 g h_0}$$
:::

Il segno negativo indica che, al momento dell'impatto, il corpo si muove verso il basso, come deve essere. Si osservi inoltre che $|v^{*}| \ge |v_0|$ ogni volta che $h_0 \ge 0$: il corpo tocca il suolo con una velocità in modulo maggiore o uguale a quella di lancio, perché la discesa aggiunge energia cinetica rispetto al punto di partenza.

:::image{src="assets/3c11527e-quota-sasso-lanciato.svg" alt="Legge oraria della quota del sasso lanciato verso l'alto da un'altezza iniziale, con il massimo evidenziato" caption="Fig. 2.2 — Quota z(t) di un grave lanciato verso l'alto da h0 = 2 m con v0 = 10 m/s: la quota massima si raggiunge quando la velocità si annulla"}
:::

**Esempio 2.1** (sasso lanciato verticalmente)

Un uomo lancia verso l'alto, lungo l'asse $z$, un sasso da un'altezza $h_0 = 2 \ \text{m}$ dal suolo, con velocità iniziale $v_0 = 10 \ \text{m/s}$. Si vuole determinare la quota massima raggiunta e la velocità di impatto al suolo.

Si scelga l'asse $z$ orientato verso l'alto, con origine al suolo, e come istante iniziale $t = 0$ quello del lancio. Il moto è uniformemente accelerato con accelerazione $-g$, quota iniziale $h_0 = 2 \ \text{m}$ e velocità iniziale $v_0 = 10 \ \text{m/s}$.

Le leggi orarie sono quelle di {{formula:2.9}} e {{formula:2.10}}. La quota massima si ottiene da {{formula:2.11}}:

$$t_{\max} = \frac{v_0}{g} = \frac{10 \ \text{m/s}}{9{,}81 \ \text{m/s}^2} \approx 1{,}02 \ \text{s},$$

$$z_{\max} = h_0 + \frac{v_0^2}{2g} = 2 \ \text{m} + \frac{(10 \ \text{m/s})^2}{2 \cdot 9{,}81 \ \text{m/s}^2} \approx 7{,}10 \ \text{m}.$$

La velocità di impatto al suolo si ottiene da {{formula:2.13}}:

$$v^{*} = -\sqrt{v_0^2 + 2 g h_0} = -\sqrt{(10 \ \text{m/s})^2 + 2 \cdot 9{,}81 \ \text{m/s}^2 \cdot 2 \ \text{m}} = -\sqrt{139{,}24} \ \text{m/s} \approx -11{,}8 \ \text{m/s}.$$

Il modulo della velocità di impatto, $11{,}8 \ \text{m/s}$, è maggiore di quello della velocità di lancio, $10 \ \text{m/s}$, come ci si deve aspettare: la caduta dalla quota massima $z_{\max}$ fino al suolo accelera il sasso oltre la velocità con cui era partito. Il controllo dimensionale è immediato: sotto radice si somma un termine in $\text{m}^2/\text{s}^2$ con un termine $g h_0$ che ha le stesse dimensioni, e il risultato finale è in $\text{m/s}$, come richiesto.

**Errore tipico 2.2**

L'errore più frequente nel moto verticale è dimenticare il segno meno nell'accelerazione di gravità quando l'asse è orientato verso l'alto, scrivendo $z(t) = h_0 + v_0 t + \tfrac{1}{2} g t^2$ al posto della forma corretta: questo produce una quota sempre crescente, fisicamente assurda per un corpo lanciato in alto.

Un secondo errore tipico, non specifico del moto verticale ma particolarmente insidioso nei calcoli con $g$, consiste nell'omettere le unità di misura nei passaggi intermedi: scrivere semplicemente $H = \tfrac12 \cdot 9{,}81 \cdot 2^2 = 19{,}6$ senza unità non permette di controllare la coerenza dimensionale del risultato, e può nascondere errori di impostazione della formula. Riportare sempre le unità in ogni passaggio, come indicato in [Metodo sperimentale e misure](ref:chapter/1#p2), è l'unico modo sicuro per accorgersi di questi errori prima del risultato finale.

## p4 | Moto armonico

Il moto armonico è uno dei moti periodici più importanti della meccanica, perché descrive il comportamento di un punto materiale soggetto a una forza di richiamo proporzionale allo spostamento (come la [forza elastica](ref:chapter/3#p6)), e compare come limite di piccole oscillazioni in moltissimi sistemi fisici. Si dice che un moto è periodico quando, a intervalli di tempo regolari, il punto torna a passare nella stessa posizione con la stessa velocità. Il moto armonico è il caso particolare, unidimensionale, in cui questo avvenga con legge oraria sinusoidale.

### Legge oraria, periodo e frequenza

**Definizione 2.1** (Moto armonico semplice). Un punto materiale che si muove lungo un asse compie un moto armonico semplice quando la sua legge oraria è del tipo

:::formula{id="2.14" label="Legge oraria del moto armonico semplice"}
$$x(t) = A \sin(\omega t + \varphi)$$
:::

dove $A$, $\omega$, $\varphi$ sono costanti: $A > 0$ è l'**ampiezza** del moto (in metri), ossia il massimo spostamento dalla posizione centrale $x = 0$, essendo il moto compreso nell'intervallo $\lbrack -A, A\rbrack $ con ampiezza totale $2A$; $\omega t + \varphi$ è la **fase** (in radianti); $\varphi$ è la **fase iniziale** e $\omega > 0$ è la **pulsazione** (o frequenza angolare), con dimensioni di un reciproco di tempo. Si richiede $\omega > 0$: il caso $\omega = 0$ non descrive un moto oscillante, mentre un valore negativo di $\omega$ darebbe una fase decrescente nel tempo, descrivibile in modo equivalente con $\omega > 0$ e una fase iniziale opportuna, per cui questa scelta non comporta perdita di generalità. Cambiare $\varphi$ equivale semplicemente a traslare l'origine dei tempi.

Poiché il seno è periodico di periodo $2\pi$, basta porre $t_1 = t_0 + \frac{2\pi}{\omega}$ per verificare che $x(t_1) = x(t_0)$ per ogni $t_0$: il moto si ripete identicamente dopo un tempo

:::formula{id="2.15" label="Periodo del moto armonico"}
$$T = \frac{2\pi}{\omega}$$
:::

detto **periodo**. Un valore grande di $\omega$ corrisponde a un periodo piccolo, cioè a un moto che si ripete rapidamente; viceversa per $\omega$ piccolo il moto è lento.

La **frequenza** $\nu$ (misurata in hertz, $\mathrm{Hz} = \mathrm{s}^{-1}$) conta il numero di oscillazioni compiute in un secondo:

:::formula{id="2.16" label="Frequenza del moto armonico"}
$$\nu = \frac{1}{T} = \frac{\omega}{2\pi}$$
:::

Si noti che periodo e frequenza dipendono solo da $\omega$, e non dall'ampiezza $A$: due moti armonici con la stessa pulsazione ma ampiezze diverse hanno esattamente lo stesso periodo. Alcuni testi scrivono la legge oraria in forma equivalente con il coseno al posto del seno; cambia solo la convenzione sulla fase iniziale, non la fisica del problema.

Derivando la legge oraria si ottengono velocità e accelerazione:

:::formula{id="2.17" label="Velocità nel moto armonico"}
$$v(t) = \frac{dx}{dt} = \omega A \cos(\omega t + \varphi)$$
:::

:::formula{id="2.18" label="Accelerazione nel moto armonico"}
$$a(t) = \frac{dv}{dt} = \frac{d^2x}{dt^2} = -\omega^2 A \sin(\omega t + \varphi) = -\omega^2 x(t)$$
:::

La velocità ha ampiezza $\omega A$ ed è massima (in modulo) nel centro di oscillazione $x = 0$, dove si annulla agli estremi $x = \pm A$ (punti di inversione del moto). L'accelerazione ha ampiezza $\omega^2 A$, si annulla nel centro di oscillazione e assume valore massimo in modulo agli estremi: essa è sempre proporzionale e di segno opposto allo spostamento dal centro, $a = -\omega^2 x$. Le tre grandezze $x$, $v$, $a$ sono sfasate tra loro: la velocità è in quadratura di fase rispetto alla posizione (sfasamento $\pi/2$), mentre l'accelerazione è in opposizione di fase rispetto alla posizione (sfasamento $\pi$).

Eliminando il tempo tra $x(t)$ e $v(t)$ si ricava anche la relazione diretta tra velocità e posizione:

:::formula{id="2.19" label="Velocità in funzione della posizione"}
$$v^2(x) = \omega^2 \left(A^2 - x^2\right)$$
:::

utile per trovare rapidamente la velocità in un punto senza passare per la legge oraria completa.

:::image{src="assets/38f89a24-fasi-moto-armonico.svg" alt="Posizione, velocità e accelerazione nel moto armonico in funzione del tempo" caption="Fig. 2.3 — Andamento di x(t), v(t) e a(t) per un moto armonico con A = 1, omega = 1, phi = 0: si notano gli sfasamenti di pi/2 e di pi"}
:::

### Equazione differenziale e soluzione generale

**Teorema 2.1** (Equazione differenziale del moto armonico). Un moto rettilineo diverso dalla quiete nell'origine è armonico semplice se e solo se la sua accelerazione è, istante per istante, proporzionale allo spostamento dalla posizione di equilibrio con costante di proporzionalità negativa, cioè se e solo se $x(t)$ soddisfa

:::formula{id="2.20" label="Equazione differenziale del moto armonico"}
$$\frac{d^2x}{dt^2} + \omega^2 x = 0$$
:::

per ogni $t$, con $\omega$ costante reale positiva.

Questa è una condizione necessaria e sufficiente: ogni legge oraria sinusoidale del tipo $A\sin(\omega t + \varphi)$ la soddisfa (verifica diretta per sostituzione); viceversa, a parte la soluzione di equilibrio costante $x(t) = 0$ per ogni $t$ — che si può interpretare come il caso degenere $A = 0$, escluso dalla definizione di moto armonico semplice che richiede $A > 0$ — ogni altra soluzione dell'equazione differenziale è necessariamente di questa forma. Una forma equivalente, spesso più comoda per imporre le condizioni iniziali, è

:::formula{id="2.21" label="Soluzione generale in forma C,D"}
$$x(t) = C \cos(\omega t) + D \sin(\omega t)$$
:::

con $C$ e $D$ costanti reali da determinare. Le due scritture sono equivalenti: sviluppando $A\sin(\omega t + \varphi) = A\cos\varphi \sin(\omega t) + A\sin\varphi \cos(\omega t)$ si vede che $D = A\cos\varphi$ e $C = A\sin\varphi$. Se il centro di oscillazione non coincide con l'origine dell'asse ma con una posizione $x_c$, basta traslare: $x(t) = x_c + C\cos(\omega t) + D\sin(\omega t)$.

**Errore tipico 2.3.** Non ogni moto oscillante è armonico: per concludere che un moto è armonico occorre verificare che la sua legge oraria soddisfi l'equazione $\ddot{x} + \omega^2 x = 0$ per **tutti** gli istanti $t$, non solo in alcuni punti particolari. Ad esempio una legge oraria come $x(t) = u\,t\,(1 - 2\sin\omega t)$ oscilla ma, calcolando $\ddot{x} + \omega^2 x$, si trova un'espressione che non si annulla identicamente: quel moto non è armonico, anche se contiene un termine sinusoidale.

L'esempio più importante di questa equazione è il sistema massa-molla: applicando la seconda legge della dinamica a una massa $m$ attaccata a una molla di costante elastica $k$, con $x$ pari all'allungamento rispetto alla posizione di riposo, si ha $-kx = m\ddot{x}$, cioè $\ddot{x} = -\frac{k}{m}x$, che è l'equazione del moto armonico con pulsazione $\omega = \sqrt{k/m}$ e periodo $T = 2\pi\sqrt{m/k}$ (si veda la sezione sulla [forza elastica](ref:chapter/3#p6) per la derivazione completa della forza di richiamo).

### Ampiezza e fase dalle condizioni iniziali

Assegnate le condizioni iniziali $x(0) = x_0$ e $v(0) = v_0$ (con $\omega$ nota, fissata dal problema fisico), le costanti $A$ e $\varphi$ — oppure $C$ e $D$ — si determinano imponendole nella legge oraria e nella sua derivata.

Usando la forma $x(t) = C\cos(\omega t) + D\sin(\omega t)$, con $v(t) = -C\omega\sin(\omega t) + D\omega\cos(\omega t)$, basta porre $t = 0$:

$$
x(0) = C, \qquad v(0) = D\omega
$$

da cui $C = x_0$ e $D = v_0/\omega$. Se, ad esempio, $x_0 = 0$ si ottiene semplicemente $x(t) = \frac{v_0}{\omega}\sin(\omega t)$.

Usando invece la forma $x(t) = A\sin(\omega t + \varphi)$, ponendo $t = 0$ in $x(t)$ e in $v(t) = \omega A \cos(\omega t + \varphi)$ si ottiene il sistema

$$\sin\varphi = \frac{x_0}{A}, \qquad \cos\varphi = \frac{v_0}{A\omega}$$

Elevando al quadrato e sommando si elimina $\varphi$ e si ricava l'ampiezza:

:::formula{id="2.22" label="Ampiezza dalle condizioni iniziali"}
$$A = \sqrt{x_0^2 + \left(\frac{v_0}{\omega}\right)^2}$$
:::

Se $A = 0$ (cioè $x_0 = 0$ e $v_0 = 0$) il punto è fermo nell'origine, il moto si riduce alla quiete $x(t) = 0$ e la fase $\varphi$ non ha significato. Se invece $A > 0$, la fase si ricava dai segni di $\sin\varphi = x_0/A$ e $\cos\varphi = v_0/(A\omega)$: quando $v_0 \neq 0$ si può scrivere $\operatorname{tg}\varphi = \dfrac{x_0\,\omega}{v_0}$ e scegliere, tra le due soluzioni che differiscono di $\pi$, quella compatibile con i segni di $\sin\varphi$ e $\cos\varphi$, ricordando che $\operatorname{arctg}$ restituisce per convenzione valori in $\left\rbrack -\frac{\pi}{2}, \frac{\pi}{2}\right\lbrack $; se invece $v_0 = 0$ (con $x_0 \neq 0$) la tangente non è definita e si pone direttamente $\varphi = \frac{\pi}{2}$ se $x_0 > 0$, oppure $\varphi = -\frac{\pi}{2}$ se $x_0 < 0$, coerentemente con $\cos\varphi = 0$.

**Errore tipico 2.4.** Calcolare $\varphi = \operatorname{arctg}\left(\frac{x_0 \omega}{v_0}\right)$ e fermarsi lì, senza controllare il quadrante: se $\sin\varphi > 0$ e $\cos\varphi < 0$ (cioè $x_0 > 0$ e $v_0 < 0$), la fase corretta si trova nel secondo quadrante e vale $\varphi = \pi + \operatorname{arctg}\left(\frac{x_0\omega}{v_0}\right)$, non il valore restituito direttamente dalla calcolatrice.

### Esempio svolto

Una massa $m = 1 \text{ kg}$ è attaccata a una molla di costante elastica $k = 100 \text{ N/m}$, vincolata a un estremo fisso e appoggiata senza attrito su un piano orizzontale. All'istante iniziale la molla si trova alla lunghezza di riposo e la massa ha velocità $v_0 = 5 \text{ m/s}$. Si vuole la legge oraria del moto.

Si sceglie come origine dell'asse $x$ la posizione di equilibrio della molla, cosicché l'allungamento coincide con $x$ e la condizione iniziale di posizione è $x(0) = 0$.

Applicando la seconda legge della dinamica alla forza elastica, $F_{el} = ma$ con $F_{el} = -kx$, si ottiene $-kx = m\ddot{x}$, cioè

$$\ddot{x} = -\frac{k}{m}x = -\omega^2 x, \qquad \omega = \sqrt{\frac{k}{m}}$$

che è l'equazione del moto armonico con centro nell'origine.

La soluzione generale è $x(t) = C\cos(\omega t) + D\sin(\omega t)$, con velocità $v(t) = -C\omega\sin(\omega t) + D\omega\cos(\omega t)$. Imponendo $x(0) = 0$ e $v(0) = v_0$ si trova $C = 0$ e $D\omega = v_0$, quindi $D = v_0/\omega$.

Numericamente, $\omega = \sqrt{100 \text{ N/m} / 1 \text{ kg}} = 10 \text{ s}^{-1}$, da cui $D = 5 \text{ m/s} / 10 \text{ s}^{-1} = 0{,}5 \text{ m}$. La legge oraria è dunque

$$x(t) = (0{,}5 \text{ m}) \sin\left((10 \text{ s}^{-1}) t\right)$$

Controllo: le dimensioni di $D$ sono quelle di una lunghezza, coerenti con $x$; il periodo risulta $T = 2\pi/\omega \approx 0{,}63 \text{ s}$, un valore plausibile per una molla non troppo rigida e una massa di 1 kg.

### Cenni sul moto armonico smorzato

Finora si è assunta l'assenza di attriti, condizione in cui l'ampiezza resta costante nel tempo. In presenza di un attrito di tipo viscoso, proporzionale e opposto alla velocità, il moto si modifica; nel regime di smorzamento debole, descritto più avanti in questo stesso paragrafo, l'oscillazione persiste ma la sua ampiezza decresce progressivamente nel tempo, fino a estinguersi, mentre nei regimi critico e sovracritico, anch'essi descritti più avanti, il sistema torna alla posizione di equilibrio senza oscillare.

Un caso limite, in cui non è presente alcuna forza di richiamo elastico ma solo l'attrito viscoso, dà luogo a un moto (non oscillante) con velocità che decresce esponenzialmente: partendo da $\frac{dv}{dt} = -kv$ si separa le variabili e si integra, ottenendo $\ln(v/v_0) = -kt$, cioè

:::formula{id="2.23" label="Velocità nel moto con sola forza di attrito viscoso"}
$$v(t) = v_0\, e^{-kt}$$
:::

La corrispondente legge oraria si trova integrando ulteriormente; assumendo $x(0) = 0$, si ottiene $x(t) = \frac{v_0}{k}\left(1 - e^{-kt}\right)$, e la velocità in funzione della posizione è $v(x) = v_0 - kx$: il punto si arresta asintoticamente nella posizione $x = v_0/k$. Per una posizione iniziale $x_0$ generica basta traslare la legge oraria, ottenendo $x(t) - x_0 = \frac{v_0}{k}\left(1 - e^{-kt}\right)$, mentre la relazione tra velocità e posizione diventa $v(x) = v_0 - k(x - x_0)$.

Quando invece è presente sia la forza di richiamo elastica sia l'attrito viscoso, si parla propriamente di **oscillatore armonico smorzato**: la posizione tipica ha la forma di una sinusoide moltiplicata per un fattore esponenziale decrescente, del tipo $x(t) = A\sin(\omega t)\, e^{-\gamma t}$, dove $\gamma = 1/\tau$ è legato al tempo caratteristico di smorzamento $\tau$. A differenza del caso di sola attrito viscoso, qui la velocità dell'oscillatore, ottenuta derivando questa legge oraria, cambia periodicamente segno a ogni oscillazione e non segue in generale un singolo andamento esponenziale: resta comunque racchiusa tra due curve inviluppo che decrescono esponenzialmente nel tempo. A seconda del rapporto tra l'intensità dell'attrito e la forza di richiamo elastica si distinguono qualitativamente tre regimi: lo **smorzamento debole** (o sottocritico), in cui il sistema oscilla con ampiezza che decresce lentamente nel tempo; lo **smorzamento critico**, caso di transizione in cui il sistema ritorna all'equilibrio nel modo più rapido possibile senza oscillare; e lo **smorzamento forte** (o sovracritico), in cui il sistema ritorna all'equilibrio lentamente e senza oscillare.

:::formula{id="2.24" label="Decadimento esponenziale della velocità nel moto smorzato"}
$$v(t) = v_0\, e^{-\gamma t}, \qquad \gamma = \frac{1}{\tau}$$
:::

Fisicamente, questo tipo di legge oraria descrive ad esempio il moto di una massa attaccata a una molla in presenza di attrito, come un carrello su una guida con resistenza dell'aria o una sospensione meccanica: a ogni oscillazione lo scostamento massimo (a destra e a sinistra del centro) si riduce di un fattore costante rispetto all'oscillazione precedente, e il moto tende asintoticamente alla posizione di equilibrio. La trattazione quantitativa completa dell'equazione differenziale dell'oscillatore smorzato, e il confronto con il caso dell'oscillatore forzato, richiede strumenti che esulano da questa sezione introduttiva; qui è sufficiente saper riconoscere qualitativamente i tre regimi e la forma della soluzione.

:::image{src="assets/38f89a24-oscillatore-smorzato.svg" alt="Oscillazione con ampiezza decrescente nel tempo racchiusa tra due esponenziali" caption="Fig. 2.4 — Moto armonico smorzato debolmente: l'ampiezza delle oscillazioni decresce nel tempo racchiusa tra le curve inviluppo esponenziali"}
:::

## p5 | Moto nel piano

Quando la traiettoria di un punto materiale non è una retta, non basta più una sola coordinata per descriverne il moto: occorre un vettore posizione, oppure una coppia di coordinate scalari, e bisogna specificare esplicitamente direzione e verso di velocità e accelerazione. Si parla allora di moto nel piano (o nello spazio, con l'aggiunta di una terza coordinata). Le relazioni vettoriali che legano posizione, velocità e accelerazione non dipendono dal sistema di riferimento scelto per descriverle: cartesiano, polare o intrinseco sono soltanto modi diversi di scrivere lo stesso vettore, e il loro impiego va scelto in base a quale rende più semplice il problema.

### Coordinate cartesiane e coordinate polari

In un sistema cartesiano con versori fissi $\hat{u}_x, \hat{u}_y$ il vettore posizione si scrive

$$\vec{r}(t) = \overrightarrow{OP} = x(t)\hat{u}_x + y(t)\hat{u}_y .$$

Derivando rispetto al tempo, e ricordando che i versori cartesiani sono costanti, si ottengono velocità e accelerazione per componenti.

:::formula{id="2.25" label="Velocità in coordinate cartesiane nel piano"}
$$\vec{v} = \frac{d\vec{r}}{dt} = \frac{dx}{dt}\hat{u}_x + \frac{dy}{dt}\hat{u}_y = v_x\hat{u}_x + v_y\hat{u}_y, \qquad v = |\vec{v}| = \sqrt{v_x^2+v_y^2}$$
:::

Questa scrittura è diretta conseguenza della derivata di un vettore in componenti, già introdotta per i versori degli assi; qui si applica semplicemente al vettore posizione.

:::formula{id="2.26" label="Accelerazione in coordinate cartesiane nel piano"}
$$\vec{a} = \frac{d\vec{v}}{dt} = \frac{dv_x}{dt}\hat{u}_x + \frac{dv_y}{dt}\hat{u}_y = a_x\hat{u}_x + a_y\hat{u}_y$$
:::

Alternativamente si può individuare P con le coordinate polari $r(t)$ (distanza dall'origine) e $\theta(t)$ (angolo rispetto all'asse x), legate a quelle cartesiane da

:::formula{id="2.27" label="Relazione tra coordinate cartesiane e polari"}
$$x = r\cos\theta, \qquad y = r\sin\theta, \qquad r = \sqrt{x^2+y^2}, \qquad \theta = \operatorname{atan2}(y,x) \pmod{2\pi} \ \ (r>0)$$
:::

L'ultima relazione vale soltanto quando $r>0$, cioè quando il punto P non coincide con l'origine: nell'origine, $x=y=0$, l'angolo polare $\theta$ è indeterminato (qualsiasi direzione è compatibile con $r=0$) e la funzione $\operatorname{atan2}(0,0)$ non è definita. Per $r>0$, la sola $\tan\theta = y/x$ non individua univocamente il quadrante in cui si trova $\theta$ (perché $\tan\theta$ ha periodo $\pi$, non $2\pi$) e non è definita per $x=0$. La funzione $\operatorname{atan2}(y,x)$ restituisce invece l'angolo principale, che determina $\theta$ modulo $2\pi$; per seguire il moto nel tempo occorre scegliere una funzione angolare continua, che può differire dall'angolo principale di multipli di $2\pi$. In alternativa si può usare $\tan\theta = y/x$ purché si verifichi separatamente il segno di $x$ e di $y$ per scegliere la soluzione nel quadrante giusto.

In questo sistema si introducono due versori mobili, il versore radiale $\hat{u}_r$ (diretto come $\vec{r}$) e il versore trasverso $\hat{u}_\theta$ (perpendicolare a $\hat{u}_r$, nel verso di $\theta$ crescente), definiti in componenti cartesiane da

$$\hat{u}_r(t) = \cos\theta(t)\,\hat{u}_x + \sin\theta(t)\,\hat{u}_y, \qquad \hat{u}_\theta(t) = -\sin\theta(t)\,\hat{u}_x + \cos\theta(t)\,\hat{u}_y .$$

Poiché $\theta(t)$ varia nel tempo, questi versori ruotano; derivandoli si trova, in accordo con le formule di Poisson già incontrate per un versore rotante,

:::formula{id="2.28" label="Derivate dei versori polari"}
$$\dot{\hat{u}}_r = \dot\theta\,\hat{u}_\theta, \qquad \dot{\hat{u}}_\theta = -\dot\theta\,\hat{u}_r$$
:::

(si veda anche [formula (1.13)](ref:formula/1.13) e [formula (1.11)](ref:formula/1.11)).

Derivando $\vec{r} = r\hat{u}_r$ e usando queste relazioni si ottiene la velocità in coordinate polari.

:::formula{id="2.29" label="Velocità in coordinate polari"}
$$\vec{v} = \dot r\,\hat{u}_r + r\dot\theta\,\hat{u}_\theta = \vec{v}_r + \vec{v}_\theta$$
:::

Il termine $\vec{v}_r = \dot r\,\hat{u}_r$ è la velocità radiale, legata alla variazione del modulo di $\vec{r}$; il termine $\vec{v}_\theta = r\dot\theta\,\hat{u}_\theta$ è la velocità trasversa, legata alla variazione di direzione di $\vec{r}$.

Derivando ancora una volta si ottiene l'accelerazione.

:::formula{id="2.30" label="Accelerazione in coordinate polari"}
$$\vec{a} = \left(\ddot r - r\dot\theta^2\right)\hat{u}_r + \left(2\dot r\dot\theta + r\ddot\theta\right)\hat{u}_\theta = \vec{a}_r + \vec{a}_\theta$$
:::

Il primo termine è l'accelerazione radiale, il secondo l'accelerazione trasversa; si noti che il termine $-r\dot\theta^2\,\hat{u}_r$ compare anche quando $r$ è costante (moto circolare), e sarà centrale nel prossimo capitolo.

**Errore tipico 2.5.** Nelle coordinate polari non si deve confondere $\dot r$ (variazione del modulo del raggio vettore) con il modulo della velocità $v = |\vec{v}|$: in generale $v \neq \dot r$, perché anche la componente trasversa contribuisce al modulo. Allo stesso modo l'accelerazione radiale $a_r = \ddot r - r\dot\theta^2$ non coincide con $\ddot r$ se il punto cambia direzione angolare.

### Coordinate intrinseche: velocità e accelerazione

Quando la traiettoria è nota a priori, conviene descrivere il moto con le coordinate intrinseche (o naturali). Si fissa un punto origine O sulla traiettoria e si definisce $s(t)$, l'ascissa curvilinea orientata, cioè la lunghezza, presa con segno, dell'arco di curva percorso a partire da O secondo un verso di percorrenza stabilito una volta per tutte; a ogni istante si definiscono anche due versori legati alla traiettoria.

**Definizione 2.2** (coordinate intrinseche). Dato un punto P sulla traiettoria a distanza curvilinea $s(t)$ da un'origine O fissata sulla curva, si definiscono: il versore tangente $\hat{u}_T(t)$, tangente alla traiettoria nel verso di $s$ crescente; il versore normale $\hat{u}_N(t)$, perpendicolare a $\hat{u}_T$ e orientato verso la concavità della curva (verso il centro del cerchio osculatore); il raggio di curvatura $\rho(t)$, raggio della circonferenza (cerchio osculatore) che meglio approssima la traiettoria nel punto considerato.

La velocità è sempre tangente alla traiettoria, perché lo spostamento infinitesimo $d\vec{s}$ avviene lungo la curva stessa.

:::formula{id="2.31" label="Velocità in coordinate intrinseche"}
$$\vec{v} = \dot s(t)\,\hat{u}_T(t)$$
:::

Il modulo della velocità è quindi $v = |\dot s|$. Se $\dot s > 0$ il punto si muove nel verso di $s$ crescente, cioè nello stesso verso in cui è stato definito $\hat{u}_T$; se $\dot s < 0$ il punto si muove nel verso opposto, e la velocità vettoriale $\vec{v} = \dot s\,\hat{u}_T$ punta allora in direzione $-\hat{u}_T$.

Per l'accelerazione si deriva ulteriormente, tenendo conto che ora anche il versore $\hat{u}_T$ dipende dal tempo.

:::formula{id="2.32" label="Accelerazione in coordinate intrinseche (forma generale)"}
$$\vec{a} = \ddot s(t)\,\hat{u}_T(t) + \dot s(t)\,\dot{\hat{u}}_T(t)$$
:::

Per calcolare $\dot{\hat{u}}_T$ si considera il punto P', molto vicino a P, raggiunto dopo un intervallo $\Delta t$: i cerchi osculatori in P e in P' hanno pressoché lo stesso raggio $\rho(t)$, per cui si possono costruire due triangoli simili che danno

$$\frac{|\Delta\hat{u}_T|}{|\hat{u}_T|} = \frac{|\Delta s|}{\rho(t)} \quad\Longrightarrow\quad \lim_{\Delta t\to 0}\frac{|\Delta\hat{u}_T|}{\Delta t} = \left|\frac{\dot s}{\rho(t)}\right|,$$

ossia $|\dot{\hat{u}}_T| = |\dot s|/\rho(t)$, con direzione necessariamente ortogonale a $\hat{u}_T$ (perché $\hat{u}_T$ ha modulo costante), quindi parallela a $\hat{u}_N$. Occorre però determinare con cura il verso di questo vettore derivata, che non coincide automaticamente con quello dell'accelerazione normale. Se il punto percorre la curva nel verso di $s$ crescente ($\dot s>0$), $\hat{u}_T$ ruota verso la concavità al crescere di $s$, e si trova $\dot{\hat{u}}_T = (\dot s/\rho)\,\hat{u}_N$, cioè la derivata punta verso la concavità, nello stesso verso di $\hat{u}_N$. Se invece il punto percorre la curva nel verso di $s$ decrescente ($\dot s<0$), $\hat{u}_T$ ruota nel verso opposto al crescere del tempo, e la stessa relazione $\dot{\hat{u}}_T = (\dot s/\rho)\,\hat{u}_N$ dà ora un vettore diretto in verso opposto alla concavità (perché il coefficiente $\dot s/\rho$ è negativo). In entrambi i casi vale dunque la formula unica

$$
\dot{\hat{u}}_T = \frac{\dot s}{\rho}\,\hat{u}_N,
$$

ed è il prodotto successivo di questa derivata per $\dot s$, cioè il termine $\dot s\,\dot{\hat{u}}_T = (\dot s^2/\rho)\,\hat{u}_N$ nell'accelerazione, a risultare sempre diretto verso la concavità, qualunque sia il segno di $\dot s$: è questo il motivo per cui l'accelerazione normale è sempre centripeta, anche quando la derivata del versore tangente non lo è.

### Separazione dell'accelerazione tangenziale e centripeta

Sostituendo questo risultato nella formula generale si ottiene la decomposizione fondamentale dell'accelerazione nel moto piano.

:::formula{id="2.33" label="Accelerazione tangenziale e normale (centripeta)"}
$$\vec{a} = \ddot s(t)\,\hat{u}_T(t) + \frac{\dot s^2(t)}{\rho(t)}\,\hat{u}_N(t) = \vec{a}_T + \vec{a}_N$$
:::

La componente tangenziale con segno $a_T = \ddot s$ è parallela a $\hat{u}_T$ ed esprime la variazione dell'ascissa curvilinea. Essa coincide con $dv/dt$, la variazione del modulo della velocità, soltanto quando il punto percorre la curva nel verso di $s$ crescente, cioè quando $\dot s \ge 0$: in questo caso $v=\dot s$ e dunque $a_T = \ddot s = dv/dt$. Se invece il punto percorre la traiettoria nel verso di $s$ decrescente ($\dot s<0$), poiché $v=|\dot s|=-\dot s$ si ha $dv/dt = -\ddot s$, cioè $a_T$ e $dv/dt$ hanno segno opposto (pur avendo lo stesso modulo). Nel seguito, salvo avviso contrario, si considera un moto con $\dot s \ge 0$, cosicché $a_T = \ddot s = dv/dt$ senza ambiguità. La componente normale (o centripeta) $a_N = \dot s^2/\rho = v^2/\rho$ è ortogonale alla velocità, è sempre diretta verso il centro del cerchio osculatore, ed esprime la variazione di direzione della velocità.

Valgono le seguenti conseguenze, utili per classificare rapidamente un moto:

- se $a_T \neq 0$ il moto è necessariamente vario (il modulo della velocità cambia nel tempo);
- se $a_N \neq 0$ il moto è necessariamente curvilineo (la direzione della velocità cambia nel tempo);
- soltanto nel moto rettilineo uniforme entrambe le componenti sono nulle, perché $\rho \to \infty$ annulla $a_N$ e $v$ costante annulla $a_T$.

Il modulo dell'accelerazione, essendo $\hat{u}_T \perp \hat{u}_N$, si ottiene per somma pitagorica delle due componenti.

:::formula{id="2.34" label="Modulo dell'accelerazione nel moto piano"}
$$a = \sqrt{a_T^2 + a_N^2} = \sqrt{\left(\frac{dv}{dt}\right)^2 + \frac{v^4}{\rho^2}}$$
:::

**Esempio 2.2.** Un punto materiale si muove con velocità istantanea di componenti cartesiane $v_x = 18,6$ m/s e $v_y = -19,8$ m/s, mentre è soggetto alla sola accelerazione di gravità $\vec{a} = -g\,\hat{u}_y$, con $g = 9,81$ m/s². Si vogliono trovare le componenti tangenziale e normale dell'accelerazione in quell'istante.

*Schema.* La direzione tangente alla traiettoria coincide, istante per istante, con la direzione di $\vec{v}$; l'accelerazione $\vec{a}$, essendo costante e verticale, va proiettata su $\hat{u}_T$ (parallelo a $\vec{v}$) e sulla direzione ortogonale $\hat{u}_N$.

*Riferimento.* Si introduce l'angolo $\theta$ che $\vec{v}$ forma con l'orizzontale, con

$$\cos\theta = \frac{v_x}{\sqrt{v_x^2+v_y^2}}, \qquad \sin\theta = \frac{|v_y|}{\sqrt{v_x^2+v_y^2}} .$$

*Equazioni.* La componente tangenziale è la proiezione di $\vec{a}$ lungo $\hat{u}_T$, quella normale la proiezione lungo $\hat{u}_N$:

$$a_T = g\,\frac{|v_y|}{\sqrt{v_x^2+v_y^2}}, \qquad a_N = g\,\frac{v_x}{\sqrt{v_x^2+v_y^2}} .$$

*Numeri.* Il modulo della velocità è $\sqrt{v_x^2+v_y^2} = \sqrt{(18{,}6\ \text{m/s})^2 + (19{,}8\ \text{m/s})^2} = 27{,}2$ m/s, da cui

$$a_T = 9{,}81\ \frac{\text{m}}{\text{s}^2}\cdot\frac{19{,}8\ \text{m/s}}{27{,}2\ \text{m/s}} = 7{,}14\ \frac{\text{m}}{\text{s}^2}, \qquad a_N = 9{,}81\ \frac{\text{m}}{\text{s}^2}\cdot\frac{18{,}6\ \text{m/s}}{27{,}2\ \text{m/s}} = 6{,}71\ \frac{\text{m}}{\text{s}^2}.$$

*Controllo.* $\sqrt{a_T^2+a_N^2} = \sqrt{7{,}14^2+6{,}71^2}\ \text{m/s}^2 = 9{,}80$ m/s², in accordo (a meno degli arrotondamenti) con $g$: era atteso, perché $a_T$ e $a_N$ non sono altro che le due proiezioni ortogonali del medesimo vettore $\vec{g}$.

**Errore tipico 2.6.** È sbagliato scrivere $\vec{a} = a_T + a_N$ senza i versori, oppure confondere $a_T$ e $a_N$ con il vettore $\vec{a}$ stesso: un'uguaglianza tra un vettore e uno scalare (o tra due vettori con direzioni diverse) è priva di significato fisico, non soltanto numericamente sbagliata. È altrettanto scorretto, nel calcolo con le coordinate polari, scambiare l'accelerazione radiale $a_r$ (in m/s²) con l'accelerazione angolare $\ddot\theta$ (in s$^{-2}$): le due grandezze hanno dimensioni diverse e non sono intercambiabili in un'uguaglianza.

Le tre descrizioni — cartesiana, polare, intrinseca — sono equivalenti e si traducono l'una nell'altra; la scelta dipende da cosa è noto nel problema. Se la traiettoria è un cerchio, le coordinate polari e intrinseche si semplificano notevolmente, come si vedrà in dettaglio nella sezione dedicata al [moto circolare](ref:chapter/2#p6); se invece il moto è la composizione di due moti rettilinei indipendenti, come nella caduta di un proiettile, conviene partire dalle coordinate cartesiane, come si farà nella sezione sul [moto parabolico](ref:chapter/2#p7).

## p6 | Moto circolare

Il moto circolare è il caso più importante di moto curvilineo piano: la traiettoria è una circonferenza di raggio $R$, e proprio perché la direzione della velocità cambia continuamente, l'accelerazione centripeta $v^2/R$ è diversa da zero in ogni istante in cui la velocità ha modulo non nullo, anche quando tale modulo resta costante; essa si annulla soltanto quando il punto è istantaneamente fermo, come accade alla fine della frenata nell'esempio svolto più avanti in questa sezione. È naturale descrivere questo moto non con la coordinata curvilinea $s(t)$ lungo la circonferenza, ma con l'angolo $\theta(t)$ sotteso dall'arco percorso, lavorando quindi in coordinate polari con centro nel centro O della circonferenza e raggio costante $r(t) = R$.

### Grandezze angolari

**Definizione 2.3** (angolo al centro e sue derivate). Se un punto si muove lungo una circonferenza di raggio $R$ con centro O, la posizione angolare $\theta(t)$ è legata allo spazio percorso $s(t)$ da

$$s(t) = R\,\theta(t) \quad\Longleftrightarrow\quad \theta(t) = \frac{s(t)}{R},$$

e le coordinate cartesiane del punto sono $x(t) = R\cos\theta(t)$, $y(t) = R\sin\theta(t)$.

Si definisce **velocità angolare** la derivata temporale dell'angolo,

$$\omega = \frac{d\theta}{dt} = \frac{1}{R}\frac{ds}{dt},$$

dove $ds/dt$ è la velocità con cui si muove il punto lungo la circonferenza, presa con il proprio segno: positiva se il moto avviene nel verso delle $\theta$ crescenti, negativa nel verso opposto. Il modulo della velocità vale quindi $v = |\omega|\,R$, mentre $\omega$ stesso può essere negativo quando il punto percorre la circonferenza in verso orario. Quando $v$ non è costante in modulo, anche $\omega$ varia nel tempo e si definisce l'**accelerazione angolare**

$$\alpha = \frac{d^2\theta}{dt^2} = \frac{d\omega}{dt} = \frac{1}{R}\frac{d^2s}{dt^2},$$

legata al modulo della componente tangenziale dell'accelerazione dalla relazione $|a_T| = |\alpha|\,R$,

dove $a_T$ è la componente tangenziale dell'accelerazione, definita con il proprio segno in coordinate intrinseche nella sezione su [Moto nel piano](ref:chapter/2#p5). La componente normale (centripeta) vale invece

$$a_N = \frac{v^2}{R} = \omega^2 R,$$

e non è mai nulla, essendo sempre diversa da zero finché il punto percorre la circonferenza.

:::formula{id="2.35" label="Velocità angolare e sua relazione con v"}
$$\omega = \frac{d\theta}{dt} = \frac{1}{R}\frac{ds}{dt}, \qquad v = |\omega|\,R$$
:::

:::formula{id="2.36" label="Accelerazione angolare e componente centripeta"}
$$\alpha = \frac{d^2\theta}{dt^2} = \frac{d\omega}{dt}, \qquad |a_T| = |\alpha|\,R, \qquad a_N = \omega^2 R = \frac{v^2}{R}$$
:::

Come nel moto rettilineo, se è nota la legge oraria angolare $\theta(t)$ bastano due derivazioni successive per ottenere $\omega(t)$ e $\alpha(t)$; viceversa, nota $\alpha(t)$, l'integrazione dà

$$\theta(t) = \theta_0 + \int_{t_0}^{t}\omega(t)\,dt, \qquad \omega(t) = \omega_0 + \int_{t_0}^{t}\alpha(t)\,dt,$$

e, se è nota invece $\alpha(\theta)$ in funzione dell'angolo, si separano le variabili come già visto per $a(x)$ nel [Moto rettilineo](ref:chapter/2#p2):

$$\alpha\,d\theta = \omega\,d\omega \quad\Longrightarrow\quad \int_{\theta_0}^{\theta}\alpha(\theta)\,d\theta = \frac{1}{2}\omega^2 - \frac{1}{2}\omega_0^2.$$

:::formula{id="2.37" label="Relazione tra accelerazione angolare e angolo"}
$$\int_{\theta_0}^{\theta}\alpha(\theta)\,d\theta = \frac{1}{2}\omega^2 - \frac{1}{2}\omega_0^2$$
:::

### Moto circolare uniforme e uniformemente accelerato

Il moto circolare si dice **uniforme** se in tempi uguali viene percorso lo stesso arco $s$, cioè se $v$ (e quindi $\omega$) è costante. Il modulo della velocità è costante ma la sua direzione cambia continuamente, quindi l'accelerazione totale non è nulla: si ha $a_T = 0$ e $a = a_N$, un'accelerazione costante in modulo e sempre ortogonale alla traiettoria. Le leggi orarie, in perfetta analogia con il moto rettilineo uniforme, sono

$$s(t) = s_0 + vt, \qquad \theta(t) = \theta_0 + \omega t.$$

:::formula{id="2.38" label="Leggi orarie del moto circolare uniforme"}
$$\theta(t) = \theta_0 + \omega t, \qquad s(t) = s_0 + vt$$
:::

Il tempo necessario a percorrere un giro completo ($2\pi R$) è il **periodo di rivoluzione**

$$T = \frac{2\pi R}{v} = \frac{2\pi}{|\omega|}.$$

:::formula{id="2.39" label="Periodo del moto circolare uniforme"}
$$T = \frac{2\pi R}{v} = \frac{2\pi}{|\omega|}$$
:::

Vale la pena osservare che, proiettando il moto circolare uniforme sugli assi cartesiani, si ottengono due moti armonici sfasati di $\pi/2$,

$$x(t) = R\cos(\omega t + \varphi), \qquad y(t) = R\sin(\omega t + \varphi),$$

con la stessa pulsazione $\omega$ introdotta nella sezione sul [Moto armonico](ref:chapter/2#p4): il moto circolare uniforme è, in un certo senso, la composizione di due moti armonici ortogonali.

Se invece il modulo della velocità varia, il moto è **non uniforme**: $a_T \neq 0$ e $a_N$ non è costante, perché dipende da $v^2$. Il caso più semplice, e il più frequente agli esami, è il moto circolare **uniformemente accelerato**, in cui $\alpha$ è costante. Integrando come nel moto rettilineo uniformemente accelerato si trova

$$\omega(t) = \omega_0 + \alpha(t - t_0), \qquad \theta(t) = \theta_0 + \omega_0(t - t_0) + \frac{1}{2}\alpha(t - t_0)^2.$$

:::formula{id="2.40" label="Leggi orarie del moto circolare uniformemente accelerato"}
$$\omega(t) = \omega_0 + \alpha t, \qquad \theta(t) = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2$$
:::

Vale inoltre, per ogni moto circolare uniformemente accelerato con $\alpha \neq 0$, la relazione che generalizza $v_f^2 = v_0^2 + 2a\Delta x$ del moto rettilineo:

$$\Delta\theta = \theta_f - \theta_i = \frac{\omega_f^2 - \omega_i^2}{2\alpha},$$

con $\alpha$ accelerazione angolare costante e diversa da zero: l'analogia con il moto rettilineo è completa, con lo spazio sostituito dall'angolo e la velocità dalla velocità angolare. Se invece $\alpha = 0$ il moto è circolare uniforme e questa formula perde significato, perché si avrebbe una divisione per zero: in tal caso si usa semplicemente $\Delta\theta = \omega\,\Delta t$, coerente con le leggi orarie del moto circolare uniforme già viste.

:::formula{id="2.41" label="Relazione tra velocità angolari e angolo percorso (per $\alpha \neq 0$)"}
$$\Delta\theta = \frac{\omega_f^2 - \omega_i^2}{2\alpha}, \qquad \alpha \neq 0$$
:::

### La relazione vettoriale $\vec{v} = \vec{\omega} \times \vec{r}$

Le grandezze angolari sono in realtà associate a vettori. La **velocità angolare vettoriale** $\vec{\omega}$ ha modulo $d\theta/dt$, direzione perpendicolare al piano della circonferenza, e verso tale che, guardando dalla punta del vettore verso il piano, il moto appaia percorso in senso antiorario (regola della mano destra). Con questa convenzione vale

$$\vec{v} = \vec{\omega} \times \vec{r},$$

dove $\vec{r}$ è il vettore posizione rispetto a un punto qualunque dell'asse di rotazione; se $\vec{\omega}$ è applicata nel centro O della circonferenza, $|\vec{r}| = R$, ma la relazione resta valida applicando $\vec{\omega}$ in un punto qualsiasi dell'asse. Questo risultato richiama le formule di Poisson per la derivata di un versore rotante già incontrate in [Vettori e versori](ref:chapter/1#p3) ([formula (1.13)](ref:formula/1.13)): $\vec{v} = \vec{\omega}\times\vec{r}$ ne è l'applicazione diretta al moto circolare.

:::formula{id="2.42" label="Velocità nel moto circolare come prodotto vettoriale"}
$$\vec{v} = \vec{\omega} \times \vec{r}$$
:::

Derivando questa relazione rispetto al tempo si ottiene l'accelerazione, introducendo il vettore **accelerazione angolare** $\vec{\alpha} = d\vec{\omega}/dt$. Il vettore $\vec{\alpha}$ giace lungo lo stesso asse di $\vec{\omega}$ (perpendicolare al piano della circonferenza), con verso concorde a $\vec{\omega}$ se il modulo $\omega$ sta aumentando, e con verso opposto se $\omega$ sta diminuendo: è il caso, ad esempio, di una frenata angolare, in cui $\vec{\alpha}$ risulta antiparallelo a $\vec{\omega}$ — proprio la situazione dell'esempio svolto più avanti in questa sezione.

$$\vec{a} = \frac{d\vec{v}}{dt} = \frac{d\vec{\omega}}{dt}\times\vec{r} + \vec{\omega}\times\frac{d\vec{r}}{dt} = \vec{\alpha}\times\vec{r} + \vec{\omega}\times\vec{v}.$$

Il primo termine $\vec{\alpha}\times\vec{r}$ è la componente tangenziale dell'accelerazione, il secondo $\vec{\omega}\times\vec{v}$ la componente normale (centripeta). Prendendo i moduli si ottengono le relazioni già incontrate: per la componente centripeta $a_N = \omega^2 R = v^2/R$, sempre valida indipendentemente dal segno di $\omega$, e per la componente tangenziale $|a_T| = |\alpha| R$. Per avere la componente tangenziale con il proprio segno occorre invece fissare il verso del versore tangente $\hat{u}_T$, concorde con il verso di percorrenza scelto come positivo: con questa convenzione $a_T = \alpha R$, con $\alpha$ e $a_T$ dello stesso segno. Nell'esempio di frenata discusso più avanti, in cui l'accelerazione angolare vale $-\alpha$ con $\alpha>0$, la componente tangenziale con segno risulta $a_T = -\alpha R$, mentre il suo modulo è $\alpha R$.

$$|a_T| = |\alpha|\,R, \qquad a_N = \omega^2 R = \frac{v^2}{R}, \qquad |\alpha| = \frac{|a_T|}{R}.$$

:::formula{id="2.43" label="Accelerazione nel moto circolare in forma vettoriale"}
$$\vec{a} = \vec{\alpha}\times\vec{r} + \vec{\omega}\times\vec{v}$$
:::

In coordinate polari, con $\hat{u}_r$ e $\hat{u}_\theta$ versori radiale e trasverso, la stessa decomposizione si scrive

$$\vec{a} = -\omega^2(t) R\,\hat{u}_r + \alpha(t) R\,\hat{u}_\theta,$$

equivalente, per il moto circolare, alla notazione in coordinate intrinseche $\vec{a} = a_T\hat{u}_T + a_N\hat{u}_N$ introdotta nella sezione [Moto nel piano](ref:chapter/2#p5); l'unica differenza è che qui $\hat{u}_N = -\hat{u}_r$.

### Esempio svolto

**Esempio 2.3** (moto circolare uniformemente decelerato). Un punto materiale si muove con moto circolare uniforme lungo una circonferenza di raggio $R = 40\ \text{cm}$. A un certo istante, quando $\theta = 0$ e $\omega = \omega_0 = 5\ \text{s}^{-1}$, il punto inizia a frenare con decelerazione angolare costante e si ferma dopo aver percorso esattamente un giro. Si chiede il tempo $t_f$ impiegato a fermarsi, la posizione angolare e il modulo dell'accelerazione all'istante $t_f/2$.

Dati: $R = 0{,}40\ \text{m}$, $\omega_0 = 5\ \text{s}^{-1}$, $\theta_0 = 0$, decelerazione angolare costante $-\alpha$ (con $\alpha > 0$ incognita), $\theta(t_f) = 2\pi$, $\omega(t_f) = 0$.

Schema: posto l'istante iniziale $t=0$ nel momento in cui il punto comincia a frenare, il moto è circolare uniformemente accelerato con accelerazione angolare negativa, quindi

$$\theta(t) = \omega_0 t - \frac{1}{2}\alpha t^2, \qquad \omega(t) = \omega_0 - \alpha t, \qquad \alpha > 0.$$

Imponendo le condizioni finali $\theta(t_f) = 2\pi$ e $\omega(t_f) = 0$ si ha un sistema di due equazioni nelle due incognite $t_f$ e $\alpha$:

$$\begin{aligned}
\omega_0 t_f - \frac{1}{2}\alpha t_f^2 &= 2\pi,\\
\omega_0 - \alpha t_f &= 0.
\end{aligned}$$

Dalla seconda equazione $\alpha = \omega_0/t_f$; sostituendo nella prima,

$$\omega_0 t_f - \frac{1}{2}\omega_0 t_f = \frac{1}{2}\omega_0 t_f = 2\pi \quad\Longrightarrow\quad t_f = \frac{4\pi}{\omega_0}.$$

Numericamente,

$$t_f = \frac{4\pi}{5\ \text{s}^{-1}} \approx 2{,}51\ \text{s}, \qquad \alpha = \frac{\omega_0}{t_f} = \frac{\omega_0^2}{4\pi} \approx 1{,}99\ \text{s}^{-2}.$$

All'istante $t_f/2 \approx 1{,}26\ \text{s}$ la velocità angolare vale

$$\omega\!\left(\frac{t_f}{2}\right) = \omega_0 - \alpha\frac{t_f}{2} = \omega_0 - \frac{\omega_0}{2} = \frac{\omega_0}{2} = 2{,}5\ \text{s}^{-1},$$

mentre la posizione angolare si ottiene da $\theta(t_f/2) = \omega_0 (t_f/2) - \tfrac12 \alpha (t_f/2)^2$, che dà $\theta(t_f/2) = \tfrac{3}{2}\pi \approx 4{,}71\ \text{rad}$, cioè tre quarti di giro. L'accelerazione in quell'istante ha entrambe le componenti diverse da zero, perché il moto non è uniforme. L'accelerazione angolare istantanea è $-\alpha$ (il punto sta decelerando), quindi, scegliendo il versore tangente $\hat{u}_T$ concorde con il verso di percorrenza, la componente tangenziale con segno vale $a_T = -\alpha R$; qui interessa però il suo modulo:

$$|a_T| = \alpha R \approx 1{,}99\ \text{s}^{-2} \cdot 0{,}40\ \text{m} \approx 0{,}80\ \text{m/s}^2, \qquad a_N = \omega^2\!\left(\frac{t_f}{2}\right) R \approx (2{,}5\ \text{s}^{-1})^2 \cdot 0{,}40\ \text{m} \approx 2{,}5\ \text{m/s}^2,$$

$$a = \sqrt{a_T^2 + a_N^2} \approx \sqrt{0{,}80^2 + 2{,}5^2}\ \text{m/s}^2 \approx 2{,}6\ \text{m/s}^2.$$

Controllo: le unità sono coerenti ($\text{s}^{-2}\cdot\text{m} = \text{m/s}^2$); l'ordine di grandezza è ragionevole per un punto che percorre una circonferenza di raggio $40\ \text{cm}$ fermandosi in poco più di due secondi. Il risultato conferma che, a metà decelerazione, il punto ha ancora velocità angolare non nulla e dunque accelerazione centripeta significativa, oltre alla componente tangenziale dovuta alla frenata.

### Errore tipico

**Errore tipico 2.7.** Confondere l'accelerazione angolare $\alpha$ (dimensionalmente $\text{s}^{-2}$) con l'accelerazione tangenziale $a_T$ (dimensionalmente $\text{m/s}^2$): le due grandezze sono legate da $a_T = \alpha R$, ma non sono la stessa cosa, e un controllo dimensionale rapido evita l'errore. Allo stesso modo, è un errore frequente applicare le leggi orarie del moto circolare uniforme ($a_T = 0$) a un moto in cui l'accelerazione angolare non è nulla: va sempre verificato, dal testo del problema, se $\omega$ (o $v$) è davvero costante prima di scegliere le formule da usare. Infine, nella relazione vettoriale $\vec{v} = \vec{\omega}\times\vec{r}$ bisogna rispettare l'ordine del prodotto vettoriale e il verso di $\vec{\omega}$ dato dalla regola della mano destra: scambiare i due vettori o sbagliarne il verso produce un vettore con direzione opposta o comunque errata, un errore che tradisce una lacuna sulla definizione stessa di prodotto vettoriale.

## p7 | Moto parabolico

### Definizione e scomposizione del moto

Il moto parabolico è il moto di un punto materiale $P$ lanciato con velocità iniziale $\vec{v}_0$ che forma un angolo $\theta$ con l'asse delle ascisse, soggetto poi alla sola accelerazione di gravità $\vec{g}$. È il caso tipico di un proiettile lanciato in aria trascurando la resistenza dell'aria.

Scegliendo gli assi cartesiani con $\hat{u}_x$ orizzontale e $\hat{u}_y$ verticale verso l'alto, l'accelerazione di gravità ha componenti $\vec{g} = (0,-g)$: è diretta interamente lungo $y$ e non ha componente lungo $x$. Di conseguenza il moto bidimensionale si può vedere come la somma di due moti rettilinei indipendenti: lungo $x$ non agisce alcuna forza e il moto è rettilineo uniforme a velocità costante, mentre lungo $y$ agisce la forza peso e il moto è rettilineo uniformemente accelerato, con la stessa struttura già vista nel [moto rettilineo](ref:chapter/2#p2) e nel [moto verticale](ref:chapter/2#p3).

Questa indipendenza è una conseguenza diretta della scomposizione vettoriale: l'accelerazione $\vec{a} = \vec{g}$ ha componente nulla lungo $x$ e componente costante $-g$ lungo $y$, per cui le due equazioni del moto si integrano separatamente, esattamente come nel caso cartesiano generale discusso nel [moto nel piano](ref:chapter/2#p5).

Indicando con $v_0 = |\vec{v}_0|$ il modulo della velocità di lancio e con $\theta_0$ l'angolo di lancio, le componenti della velocità iniziale sono $v_{0,x} = v_0\cos\theta_0$ e $v_{0,y} = v_0\sin\theta_0$. Applicando a ciascuna componente le leggi del {{formula:2.5}} e del {{formula:2.7}}, con origine dei tempi nell'istante di lancio e posizione iniziale $(x_0, y_0)$, si ottengono le leggi orarie del moto parabolico:

:::formula{id="2.44" label="Leggi orarie del moto parabolico"}
$$\begin{aligned} x(t) &= x_0 + v_0 \cos\theta_0 \, t \\ y(t) &= y_0 + v_0 \sin\theta_0 \, t - \frac{1}{2}gt^2 \end{aligned}$$
:::

con la componente verticale della velocità data da $v_y(t) = v_0\sin\theta_0 - gt$, mentre $v_x(t) = v_0\cos\theta_0$ resta costante per tutta la durata del moto.

### Equazione della traiettoria

La traiettoria è l'insieme delle posizioni successive del punto, descritta come curva $y(x)$, cioè come relazione tra le coordinate del punto indipendente dal tempo. Per ottenerla si elimina il parametro $t$ tra le due leggi orarie: dalla prima equazione si ricava

Questo procedimento richiede che la componente orizzontale della velocità iniziale sia non nulla, cioè $v_0\cos\theta_0 \neq 0$, in modo da poter dividere per essa. Nel caso particolare di un lancio verticale, con $\theta_0 = \pm 90°$ e dunque $v_0\cos\theta_0 = 0$, il moto si riduce al [moto verticale](ref:chapter/2#p3) già descritto a parte, e la traiettoria non è descrivibile come grafico di una funzione $y(x)$: va trattato separatamente con le sole formule del moto rettilineo lungo $y$.

$$t = \frac{x - x_0}{v_0 \cos\theta_0},$$

e sostituendo questa espressione nella legge oraria verticale si arriva, posto per semplicità $x_0 = y_0 = 0$ (origine nel punto di lancio), all'equazione cartesiana della traiettoria:

:::formula{id="2.45" label="Equazione della traiettoria nel moto parabolico"}
$$y(x) = x\tan\theta_0 - \frac{g}{2v_0^2\cos^2\theta_0}x^2$$
:::

Si tratta dell'equazione di una parabola con la concavità verso il basso, come anticipa il nome del moto; la sua curvatura dipende dal rapporto tra $g$ e il quadrato della componente orizzontale della velocità iniziale. Se il lancio avviene da una quota iniziale $h \ne 0$ (ad esempio da un balcone o da un dirupo), con la stessa procedura si ottiene la forma più generale

$$y = h + \frac{v_{0y}}{v_{0x}}x - \frac{g}{2v_{0x}^2}x^2,$$

dove $v_{0x} = v_0\cos\theta$ e $v_{0y} = v_0\sin\theta$.

:::image{src="assets/d8b70a99-traiettoria-parabolica.svg" alt="Parabola della traiettoria con quota massima e gittata evidenziate" caption="Fig. 2.5 — Traiettoria parabolica: la quota massima si trova a metà della gittata"}
:::

### Quota massima e tempo di salita

Il punto di massima altezza è quello in cui la componente verticale della velocità si annulla, perché lì il moto verticale inverte il segno della velocità. Questo accade solo se la componente verticale iniziale della velocità è positiva, cioè $v_0\sin\theta_0 > 0$: in tal caso, imponendo $v_y(t_M) = v_0\sin\theta_0 - gt_M = 0$ si ottiene un istante $t_M > 0$ successivo al lancio. Se invece $v_0\sin\theta_0 \le 0$, cioè in un lancio orizzontale o diretto verso il basso, la componente verticale della velocità è già nulla o negativa all'istante del lancio e decresce ulteriormente da lì in poi: durante il volo successivo al lancio il punto materiale non raggiunge mai una quota superiore a quella di partenza, per cui la quota massima coincide con la quota di lancio stessa, raggiunta proprio all'istante $t=0$. Nel seguito si assume dunque $v_0\sin\theta_0 > 0$. Imponendo $v_y(t_M) = v_0\sin\theta_0 - gt_M = 0$ si ottiene l'istante

$$t_M = \frac{v_0\sin\theta_0}{g},$$

che, sostituito nelle leggi orarie, fornisce le coordinate del vertice della parabola:

:::formula{id="2.46" label="Quota massima e sua ascissa nel moto parabolico"}
$$x_M = x_0 + \frac{v_0^2\sin 2\theta_0}{2g}, \qquad y_M = y_0 + \frac{v_0^2\sin^2\theta_0}{2g}$$
:::

In presenza di una quota di lancio $h$, la stessa quantità $\dfrac{v_0^2\sin^2\theta}{2g}$ va semplicemente aggiunta a $h$. Si osservi che il calcolo della quota massima a partire dalla velocità verticale è l'esatto analogo, applicato alla sola componente $y$, di quanto già visto per il [moto verticale](ref:chapter/2#p3): il lancio con un angolo $\theta$ equivale, dal punto di vista della componente verticale, a un grave lanciato in verticale con velocità iniziale $v_{0y} = v_0\sin\theta$.

### Gittata

La gittata $d$ è la distanza orizzontale, a partire dal punto di lancio, alla quale il punto materiale ripassa per la quota di lancio, nell'ipotesi che il lancio avvenga verso l'alto, cioè $v_0\sin\theta_0 > 0$: solo in questo caso la parabola presenta, oltre al punto di lancio, un secondo punto futuro alla medesima quota. Se $v_0\sin\theta_0 \le 0$ il punto materiale si allontana dalla quota di lancio senza mai ripassarvi, e la nozione di gittata qui definita non si applica. Si assume inoltre che il lancio avvenga con componente orizzontale della velocità positiva, cioè $v_0\cos\theta_0 > 0$ (lancio verso destra, con $0 < \theta_0 < 90°$), così che la gittata sia data dallo spostamento orizzontale con segno $d = x_2 - x_0$. Nel caso $v_0\sin\theta_0 > 0$ e $v_0\cos\theta_0 > 0$, la gittata si calcola imponendo $y(x) = y_0$ nell'equazione della traiettoria: oltre alla soluzione banale $x_1 = x_0$ (il punto di lancio stesso), si trova

$$x_2 - x_0 = \frac{2v_0^2\cos\theta_0\sin\theta_0}{g} = \frac{v_0^2\sin 2\theta_0}{g} = 2(x_M - x_0),$$

ossia la gittata:

:::formula{id="2.47" label="Gittata del moto parabolico"}
$$d = \frac{v_0^2\sin 2\theta_0}{g}$$
:::

Questa formula vale esclusivamente quando il punto di lancio e il punto di caduta si trovano alla stessa quota; se le due quote sono diverse occorre ripartire dalle leggi orarie, come mostrato nell'esempio seguente.

Notiamo infine che, quando punto di lancio e punto di arrivo si trovano alla stessa quota, il punto di massima altezza si trova a metà della gittata rispetto al punto di lancio, cioè $x_M = x_0 + d/2$ (che si riduce a $x_M = d/2$ solo se $x_0 = 0$), poiché la parabola è simmetrica rispetto alla verticale passante per il vertice. Derivando $d(\theta_0)$ rispetto a $\theta_0$ e annullando la derivata si trova che la gittata è massima per $\theta_0 = 45°$, con valore $(d)_{max} = v_0^2/g$.

### Esempio svolto

**Esempio 2.4** (lancio da un'altezza $h$).
Un oggetto viene lanciato dal balcone di una finestra con velocità iniziale di modulo $v_0 = 15\text{ m/s}$, ad un angolo $\theta = 60°$ rispetto all'orizzontale. La finestra si trova a un'altezza $h = 8\text{ m}$ dal suolo. Si vogliono determinare l'altezza massima raggiunta, il tempo di caduta al suolo e la distanza orizzontale di caduta.

*Schema e riferimento.* Si scelga l'origine $(0,0)$ nel punto di lancio, con $\hat{u}_x$ orizzontale e $\hat{u}_y$ verticale verso l'alto, e l'istante del lancio come $t=0$. Il suolo si trova a quota $y = -h$.

*Equazioni.* Le componenti della velocità iniziale sono $v_{0x} = v_0\cos\theta$ e $v_{0y} = v_0\sin\theta$. Il moto lungo $x$ è rettilineo uniforme, $x(t) = v_{0x}t$; il moto lungo $y$, soggetto alla sola forza peso, è uniformemente accelerato, $y(t) = v_{0y}t - \frac{1}{2}gt^2$ (con $y$ misurata a partire dal punto di lancio).

*Altezza massima.* Dalla condizione $v_y(t_{top}) = 0$ si trova $t_{top} = v_{0y}/g$, e sostituendo si ottiene l'incremento di quota $\Delta h = v_{0y}^2/(2g)$ rispetto al punto di lancio, da cui l'altezza massima rispetto al suolo:

$$h_{max} = h + \frac{v_{0y}^2}{2g} = h + \frac{v_0^2\sin^2\theta}{2g} = 8\text{ m} + \frac{(15\text{ m/s})^2\sin^2(60°)}{2\cdot 9,81\text{ m/s}^2} = 16,6\text{ m}.$$

*Tempo di caduta.* Il suolo si trova alla quota $y = -h$ rispetto al punto di lancio; imponendo $-h = v_{0y}t^* - \frac{1}{2}g t^{*2}$, cioè $0 = h + v_{0y}t^* - \frac{1}{2}gt^{*2}$, si ottiene un'equazione di secondo grado in $t^*$ le cui due radici hanno segno opposto. Si scarta la radice negativa, priva di significato fisico, e si tiene:

$$t^* = \frac{v_{0y} + \sqrt{v_{0y}^2 + 2gh}}{g} = \frac{15\sin(60°)\ \text{m/s} + \sqrt{(15\sin 60°\ \text{m/s})^2 + 2\cdot 9,81\text{ m/s}^2\cdot 8\text{ m}}}{9,81\text{ m/s}^2} \approx 3,16\text{ s}.$$

*Distanza di caduta.* Sostituendo $t^*$ nella legge oraria orizzontale:

$$d = x(t^*) = v_{0x}t^* = v_0\cos\theta \cdot t^* = 15\text{ m/s} \cdot \cos(60°) \cdot 3,16\text{ s} \approx 23,7\text{ m}.$$

*Controllo.* Ogni termine ha le dimensioni corrette (una lunghezza $d$, una lunghezza $h_{max}$, un tempo $t^*$), e gli ordini di grandezza sono ragionevoli per un lancio a mano da un primo piano: altezza massima di circa il doppio dell'altezza di partenza, tempo di volo di pochi secondi, distanza orizzontale dell'ordine di $20$–$25\text{ m}$. Si noti che, trovandosi qui il punto di lancio e il punto di caduta ad altezze diverse, non si poteva applicare direttamente la {{formula:2.47}}, valida solo per lanci e cadute alla stessa quota.

### Errori tipici

**Errore tipico 2.8** (segno dell'accelerazione di gravità).
Un errore frequente è dimenticare il segno meno davanti a $g$ nella legge oraria verticale, scrivendo $y(t) = y_0 + v_{0y}t + \frac{1}{2}gt^2$ invece di $y(t) = y_0 + v_{0y}t - \frac{1}{2}gt^2$: con gli assi orientati verso l'alto, l'accelerazione di gravità è negativa.

**Errore tipico 2.9** (uso della gittata fuori dalle sue ipotesi).
La formula {{formula:2.47}} vale solo quando punto di lancio e punto di caduta sono alla stessa quota. Se le quote sono diverse (lancio da un balcone, da una scogliera, eccetera) occorre ripartire dalle leggi orarie complete e risolvere $y(t^*) = 0$ rispetto alla quota del punto di arrivo, come nell'esempio precedente.

**Errore tipico 2.10** (caduta libera applicata a un corpo con velocità iniziale non nulla).
La formula del tempo di caduta libera $t_{cl} = \sqrt{2h/g}$ vale solo se la velocità verticale iniziale è nulla; non si può applicarla al tempo totale di volo di un proiettile lanciato con componente verticale della velocità iniziale $v_{0y} \ne 0$, perché in quel caso all'istante del lancio la componente verticale della velocità non è nulla. Se invece il proiettile è lanciato con velocità iniziale interamente orizzontale, cioè $v_{0y} = 0$, il tempo di caduta da un'altezza $h$ coincide proprio con $\sqrt{2h/g}$.

**Errore tipico 2.11** (energia cinetica scritta come somma dei moduli).
Quando si calcola l'energia cinetica $E_k = \frac{1}{2}m|\vec{v}|^2$ di un proiettile, occorre usare $|\vec{v}|^2 = v_x^2(t) + v_y^2(t)$, somma dei quadrati delle componenti; è un errore grave sommare i moduli delle due componenti invece dei loro quadrati.
