---
chapter: 5
title: Momento angolare
---

## p1 | Introduzione

Capire come una forza possa far ruotare un corpo, e quando questa rotazione si conserva, è essenziale per descrivere moti che la sola energia non basta a spiegare. Il momento angolare permette di collegare la forza alla variazione del moto attorno a un punto e offre strumenti efficaci per interpretare le orbite, dal passaggio ravvicinato al pianeta fino al moto sotto l’azione di una forza centrale.

Per affrontare il capitolo servono le basi della dinamica del punto materiale e del lavoro e dell’energia: occorre saper applicare le leggi di Newton e seguire le trasformazioni dell’energia meccanica. È utile anche avere familiarità con i vettori e con il prodotto vettoriale, perché sia il momento di una forza sia il momento angolare dipendono dalla posizione scelta come polo.

Al termine saprai calcolare il momento di una forza e il momento angolare rispetto a un polo, riconoscere quando il polo scelto porta a una quantità conservata e applicare la conservazione del momento angolare alle forze centrali. Potrai inoltre descrivere il moto orbitale combinando momento angolare ed energia, interpretare la velocità areolare costante e collegare il segno dell’energia al tipo di orbita.

## p2 | Momento di una forza

### Definizione di momento di una forza rispetto a un polo

Nello studio della dinamica rotazionale non basta conoscere l'intensità di una forza applicata a un corpo: conta anche *dove* essa è applicata rispetto a un punto di riferimento, perché a parità di forza l'effetto di rotazione può essere molto diverso. Questa informazione geometrica è catturata dal momento della forza.

**Definizione 5.1** (Momento di una forza). Data una forza $\vec{F}$ applicata nel punto $P$ e scelto arbitrariamente un punto $O$, detto polo, il momento della forza rispetto a $O$ è il vettore

$$\vec{M}_O=\vec{r}\times\vec{F}$$

dove $\vec{r}=P-O$ è il vettore posizione di $P$ rispetto al polo $O$.

Dalle proprietà del prodotto vettoriale, già introdotte nella sezione su [vettori e versori](ref:chapter/1#p3), $\vec{M}_O$ è perpendicolare sia a $\vec{r}$ sia a $\vec{F}$, quindi perpendicolare al piano individuato da $\vec{r}$ e da $\vec{F}$; il suo verso si stabilisce con la regola della mano destra. L'unità di misura nel SI è

$$

[M] = \mathrm{N}\cdot\mathrm{m} = \mathrm{kg}\cdot\mathrm{m}^2\cdot\mathrm{s}^{-2}.
$$

Si noti che dimensionalmente coincide con quella dell'energia, ma $\vec{M}$ è un vettore e l'energia uno scalare: non vanno mai confusi.

Il momento dipende in generale dal polo scelto: cambiando $O$ cambia $\vec{r}$ e dunque, salvo casi particolari, cambia anche $\vec{M}_O$. Quando più forze $\vec{F}_1,\dots,\vec{F}_n$ agiscono sul medesimo punto materiale, il momento totale rispetto a un polo $O$ è pari al momento della forza risultante, cioè alla somma vettoriale dei momenti delle singole forze.

:::formula{id="5.1" label="Momento di una forza rispetto a un polo"}
$$\vec{M}_O = \vec{r}\times\vec{F}$$
:::

Quando il punto di applicazione non è un singolo punto materiale ma un corpo rigido (per esempio un disco che ruota attorno a un asse), la stessa definizione si applica forza per forza: il momento di $\vec{f}$ rispetto a un polo $O$ fa ruotare il corpo in un verso che dipende dal segno di $\vec{M}_O$ lungo l'asse di rotazione.

### Il braccio e il calcolo rapido del modulo

Nella pratica è spesso più comodo calcolare il modulo del momento senza passare per le componenti del prodotto vettoriale.

**Definizione 5.2** (Braccio). Si traccia la retta $r$ lungo la direzione di azione di $\vec{F}$ (la retta d'azione) e si chiama braccio $b$ la distanza tra questa retta e il polo $O$. Vale

$$
b = |\vec{r}|\sin\alpha,
$$

dove $\alpha$ è l'angolo tra $\vec{r}$ e $\vec{F}$.

**Teorema 5.1** (Modulo del momento tramite il braccio). Con le notazioni precedenti,

$$

|\vec{M}_O| = bF.
$$

:::formula{id="5.2" label="Modulo del momento tramite il braccio"}
$$|\vec{M}_O| = b\,F = |\vec{r}|\,F\sin\alpha$$
:::

Da questa relazione seguono due osservazioni molto usate negli esercizi. Il momento è massimo quando $\vec{r}$ è perpendicolare a $\vec{F}$, cioè quando $\vec{r}\perp\vec{F}$ ($\alpha=\pi/2$), ed è nullo quando $\vec{r}$ è parallelo a $\vec{F}$: in tal caso la retta d'azione di $\vec{F}$ passa per il polo $O$, il braccio è nullo ($b=0$).

Questo secondo caso è particolarmente utile nella scelta del polo quando si deve calcolare l'equilibrio di un corpo rigido: scegliendo $O$ sulla retta d'azione di una forza incognita, quella forza esce dall'equazione dei momenti. Per esempio, in un corpo rigido vincolato in un punto $A$ tramite un appoggio che esercita una reazione normale $\vec{N}$ applicata proprio in $A$, $\vec{N}$ ha braccio nullo rispetto al polo $A$ e quindi non contribuisce al momento totale; scegliere $A$ come polo è allora conveniente perché elimina l'incognita $\vec{N}$ dall'equazione dei momenti. Analogamente, la forza peso applicata nel centro di massa ha momento nullo se il polo coincide con il centro di massa stesso, e una reazione normale applicata colinearmente alla direzione di $\vec{r}$, il vettore che va dal polo al punto di applicazione, ha momento nullo anche con polo diverso.

### Momento rispetto a un asse

Accanto al momento rispetto a un polo, in molte applicazioni (in particolare per corpi vincolati a ruotare attorno a un asse fisso) interessa la componente di $\vec{M}_O$ lungo un asse $z$ scelto, detta momento assiale $M_z$. Si ottiene proiettando $\vec{M}_O$, calcolato rispetto a un polo $O$ sull'asse, sulla direzione dell'asse stesso. Questa grandezza sarà ripresa e messa in relazione con il momento d'inerzia e l'accelerazione angolare, tramite $M_z = I_z\alpha$, nello studio della [rotazione attorno a un asse fisso](ref:chapter/9#p2); qui basta osservare che, per il calcolo pratico, il momento assiale di una forza si ottiene scomponendo $\vec{M}_O$ nelle sue componenti e isolando quella lungo l'asse.

La scorciatoia $|\vec{M}_O| = bF$ fornisce direttamente il modulo del momento assiale solo quando la forza $\vec{F}$ è contenuta in un piano perpendicolare all'asse e il polo $O$ è scelto come intersezione fra l'asse e tale piano: soltanto in questo caso $\vec{M}_O$ risulta parallelo all'asse, il suo modulo coincide con quello del momento assiale e il verso è dato dalla regola della mano destra rispetto all'asse.

Se la forza ha anche una componente parallela all'asse, oppure se il polo $O$ si trova sull'asse ma fuori dal piano perpendicolare a esso, il momento può avere componenti perpendicolari all'asse: la sua componente assiale non coincide in generale con il suo modulo, ma vale sempre $M_z = \vec{M}_O\cdot\hat{u}_z$. Il modulo del momento rispetto a qualunque polo resta invece $|\vec{M}_O|=bF$. Per ottenere correttamente $M_z$ occorre calcolare il momento rispetto a un polo situato sull'asse e proiettare il vettore risultante sulla direzione dell'asse. Se si dispone soltanto del momento $\vec{M}_O$ calcolato rispetto a un polo $O$ esterno all'asse, si può trasportarlo a un polo $O'$ appartenente all'asse con la formula

$$\vec{M}_{O'}=\vec{M}_O-(O'-O)\times\vec{F},$$

poi proiettare il risultato su $\hat{u}_z$ per ricavare $M_z$.

### Esempio svolto

**Dati.** Un'asta rigida orizzontale, incernierata a un estremo nel punto $O$, ha lunghezza $l = 1{,}2\ \mathrm{m}$. All'altro estremo è applicata una forza $\vec{F}$ di modulo $F = 40\ \mathrm{N}$, diretta verso il basso ma inclinata di $\theta = 30°$ rispetto alla verticale, nel piano dell'asta.

**Schema.** Si pone l'origine nel polo $O$, con $\hat{u}_x$ lungo l'asta (verso l'estremo libero) e $\hat{u}_y$ verticale verso l'alto; $\hat{u}_z = \hat{u}_x\times\hat{u}_y$ esce dal foglio.

**Scelta del riferimento.** Il punto di applicazione della forza è $P$, con

$$
\vec{r} = P-O = l\,\hat{u}_x.
$$

La forza, inclinata di $\theta$ rispetto alla verticale (verso il basso), ha componenti

$$
\vec{F} = F\sin\theta\,\hat{u}_x - F\cos\theta\,\hat{u}_y.
$$

**Equazioni.** Il momento rispetto al polo $O$ è

$$
\vec{M}_O = \vec{r}\times\vec{F} = \left(l\,\hat{u}_x\right)\times\left(F\sin\theta\,\hat{u}_x - F\cos\theta\,\hat{u}_y\right).
$$

Usando $\hat{u}_x\times\hat{u}_x = \vec{0}$ e $\hat{u}_x\times\hat{u}_y = \hat{u}_z$, si ottiene

$$
\vec{M}_O = -lF\cos\theta\,\hat{u}_z.
$$

**Verifica con il braccio.** La componente di $\vec{F}$ lungo $\vec{r}$ (cioè $F\sin\theta\,\hat{u}_x$) non produce momento, perché $\vec{r}$ e questa componente sono paralleli; solo la componente perpendicolare all'asta, di modulo $F\cos\theta$, contribuisce. La distanza tra il polo e la retta d'azione della forza è dunque $b = l\cos\theta$, e

$$
|\vec{M}_O| = bF = lF\cos\theta.
$$

:::image{src="assets/830b368f-braccio-esempio-asta.svg" alt="Diagramma vettoriale con asta orizzontale da O a P, retta d'azione della forza F tratteggiata e segmento del braccio b tracciato dal polo O fino al piede della perpendicolare su tale retta." caption="Fig. 5.1 — Schema dell'esempio: asta orizzontale da O a P, forza F inclinata di 30° rispetto alla verticale per P. La retta d'azione di F (tratteggiata) è distante b = l cosθ ≈ 1,04 m dal polo O: questo è il braccio usato per calcolare il modulo del momento."}
:::

**Numeri.**

$$
|\vec{M}_O| = (1{,}2\ \mathrm{m})(40\ \mathrm{N})\cos 30° = 1{,}2\ \mathrm{m}\times 40\ \mathrm{N}\times 0{,}866 \approx 42\ \mathrm{N}\cdot\mathrm{m}.
$$

Il verso è entrante nel foglio ($-\hat{u}_z$), coerente con una forza che tende a far ruotare l'asta in senso orario.

**Controllo.** Le unità sono $\mathrm{N}\cdot\mathrm{m}$, corrette per un momento. L'ordine di grandezza (decine di $\mathrm{N}\cdot\mathrm{m}$) è ragionevole per una forza di decine di newton applicata a un braccio di circa un metro. Se $\theta\to 90°$ (forza orizzontale, parallela all'asta), $\vec{r}$ e $\vec{F}$ sono paralleli e il braccio $b$ tende a zero, quindi anche il momento tende a zero.

### Errori tipici

**Errore tipico 5.1** (scritture prive di significato per il momento). Alcune scritture ricorrenti negli elaborati sono formalmente scorrette e vanno evitate.

- $\vec{M} = fR$ (con la freccia solo su un fattore, o freccia "più lunga" sopra il prodotto): è priva di significato, perché il prodotto vettoriale non è un'operazione fra uno scalare e un vettore, né un semplice prodotto con il simbolo di vettore spostato.
- $\vec{M} = R\times f$, dove $R$ e $f$ compaiono senza freccia: anche questa è priva di significato, perché il prodotto vettoriale $\times$ è definito solo fra due vettori, non fra due scalari.
- $\vec{M} = R\,\vec{f}$ (prodotto di uno scalare per il vettore $\vec{f}$): questa scrittura è dimensionalmente plausibile ma concettualmente sbagliata, perché attribuirebbe a $\vec{M}$ la stessa direzione di $\vec{f}$, mentre il prodotto vettoriale produce per definizione un vettore ortogonale a entrambi i fattori.

La forma corretta, rispetto al polo $O$, è sempre

$$
\vec{M}_O = \vec{r}\times\vec{F},
$$

con entrambi i fattori scritti come vettori e il risultato perpendicolare al piano individuato da $\vec{r}$ e dalla forza. Un secondo errore frequente consiste nel dimenticare che il momento dipende dal polo scelto, confrontando o sommando momenti calcolati rispetto a poli diversi come se fossero la stessa grandezza; prima di ogni calcolo è quindi indispensabile dichiarare esplicitamente il polo $O$ usato.

## p3 | Momento angolare del punto

### Definizione di momento angolare

Il teorema dell'impulso, visto nella sezione su [quantità di moto e impulso](ref:chapter/3#p3), lega la variazione della quantità di moto all'azione di una forza nel tempo. Esiste un teorema analogo per le rotazioni, che lega la variazione di una nuova grandezza vettoriale, il momento angolare, al momento delle forze applicate, definito nella sezione precedente su [momento di una forza](ref:chapter/5#p2).

**Definizione 5.3** (Momento angolare). Dato un punto materiale di massa $m$, posizione $\vec{r}$ rispetto a un polo $O$ scelto in modo arbitrario, e velocità $\vec{v}$, si definisce momento angolare del punto rispetto al polo $O$ la quantità vettoriale

:::formula{id="5.3" label="Momento angolare di un punto materiale"}
$$\vec{L}_O = \vec{r} \times m\vec{v} = \vec{r} \times \vec{p}$$
:::

dove $\vec{r} = P - O$ è il vettore posizione del punto rispetto al polo e $\vec{p} = m\vec{v}$ è la quantità di moto. Per questo motivo $\vec{L}_O$ è detto anche momento della quantità di moto. La sua direzione è perpendicolare al piano individuato da $\vec{r}$ e $\vec{v}$, e il verso è fissato dalla regola della mano destra applicata al prodotto vettoriale $\vec{r}\times\vec{v}$.

Come già osservato per il momento di una forza, anche $\vec{L}_O$ dipende in generale dal polo scelto: cambiando $O$ cambia sia il vettore $\vec{r}$ sia, quindi, il momento angolare. Il modulo di $\vec{L}_O$ è massimo quando $\vec{r}\perp\vec{p}$ ed è nullo quando $\vec{r}$ e $\vec{p}$ sono paralleli, cioè quando, in quell'istante, la velocità è diretta radialmente rispetto al polo, ossia la retta tangente alla traiettoria in quel punto passa per $O$. Questa è, in generale, una condizione soltanto istantanea: una forza applicata successivamente può incurvare la traiettoria, cosicché gli istanti successivi non siano più radiali rispetto a $O$. Solo in un moto interamente radiale l'intera traiettoria giace su una retta passante per il polo.

Se si scompone la velocità nelle componenti radiale e trasversa, $\vec{v} = \vec{v}_r + \vec{v}_\theta$, il contributo di $\vec{v}_r$ al momento angolare si annulla, perché $\vec{r}$ e $\vec{v}_r$ sono paralleli e il loro prodotto vettoriale è nullo. Resta quindi

$$\vec{L}_O = \vec{r} \times m\vec{v} = \vec{r} \times m\vec{v}_\theta .$$

In particolare, nel moto circolare con il polo $O$ scelto nel piano del moto e coincidente con il centro della traiettoria, $\vec{r}$ e $\vec{v}$ sono sempre ortogonali, e il momento angolare risulta ortogonale al piano del moto, con modulo

:::formula{id="5.4" label="Momento angolare nel moto circolare"}
$$|\vec{L}_O| = |\vec{r} \times m\vec{v}| = mrv = mr^2\omega$$
:::

essendo $v = r\left|d\theta/dt\right| = r|\omega|$, avendo scelto $\theta$ crescente nel verso del moto, come visto nella sezione sul [moto circolare](ref:chapter/2#p6).

### Teorema del momento angolare

Il legame fra il momento angolare e il momento delle forze applicate è espresso dal seguente teorema.

**Teorema 5.2** (del momento angolare, polo fisso). Sia $O$ un punto fisso in un sistema di riferimento inerziale, e sia $\vec{M}_O$ il momento risultante di tutte le forze applicate a un punto materiale di massa $m$, calcolato rispetto a $O$. Allora

:::formula{id="5.5" label="Teorema del momento angolare (polo fisso)"}
$$\frac{d\vec{L}_O}{dt} = \vec{M}_O$$
:::

ossia la derivata rispetto al tempo del momento angolare rispetto a un polo fisso è uguale al momento risultante delle forze rispetto allo stesso polo.

**Dimostrazione.** Derivando la definizione di $\vec{L}_O = \vec{r} \times m\vec{v}$ rispetto al tempo, con $O$ fisso,

$$\frac{d\vec{L}_O}{dt} = \frac{d\vec{r}}{dt} \times m\vec{v} + \vec{r} \times m\frac{d\vec{v}}{dt}.$$

Il primo termine contiene $d\vec{r}/dt$, che essendo $O$ fisso coincide con la velocità $\vec{v}$ del punto materiale nel riferimento inerziale; quindi tale termine è $\vec{v}\times m\vec{v} = \vec{0}$, perché il prodotto vettoriale di un vettore con sé stesso (a meno di una costante moltiplicativa) è nullo. Nel secondo termine, poiché il riferimento è inerziale, vale la seconda legge della dinamica $m\,d\vec{v}/dt = \vec{F}$, dove $\vec{F}$ è la forza risultante applicata al punto; dunque $\vec{r}\times m\,d\vec{v}/dt = \vec{r}\times\vec{F} = \vec{M}_O$, il momento risultante rispetto a $O$. Si ottiene quindi

$$\frac{d\vec{L}_O}{dt} = \vec{0} + \vec{M}_O = \vec{M}_O,$$

dimostrando l'enunciato. $\blacksquare$

Se il polo $O$ non è fisso ma si muove con velocità $\vec{v}_O$, un calcolo analogo (nel quale $d\vec{r}/dt = \vec{v} - \vec{v}_O$) porta alla relazione più generale

$$\vec{M}_O = \frac{d\vec{L}_O}{dt} + \vec{v}_O \times (m\vec{v}),$$

che si riduce al teorema precedente quando $\vec{v}_O = \vec{0}$. Nel seguito il polo sarà sempre considerato fisso, salvo avviso contrario.

Osserviamo l'analogia completa fra il teorema del momento angolare e la forma generale della seconda legge della dinamica, [formula (3.2)](ref:formula/3.2): la forza risultante gioca, per la quantità di moto, lo stesso ruolo che il momento risultante gioca per il momento angolare.

### Conservazione del momento angolare

Il teorema del momento angolare fornisce immediatamente la condizione di conservazione.

**Corollario 5.1** (conservazione del momento angolare). Se il momento risultante delle forze agenti su un punto materiale, calcolato rispetto a un polo fisso $O$, è nullo in ogni istante,

$$\vec{M}_O = \vec{0} \quad \Longrightarrow \quad \frac{d\vec{L}_O}{dt} = \vec{0},$$

allora il momento angolare rispetto a quel polo si conserva

:::formula{id="5.6" label="Conservazione del momento angolare del punto materiale"}
$$\vec{L}_O = \text{costante}$$
:::

durante tutto il moto.

Questa condizione si verifica in due situazioni tipiche: quando la forza risultante è nulla (il punto non è soggetto ad alcuna accelerazione, caso banale già incluso nella conservazione della quantità di moto), oppure, più interessante, quando la forza risultante non è nulla ma la sua direzione passa sempre per il polo $O$. In quest'ultimo caso $\vec{r}$ e $\vec{F}$ sono paralleli, e quindi $\vec{M}_O = \vec{r}\times\vec{F} = \vec{0}$ anche se $\vec{F} \ne \vec{0}$: questa situazione, in cui $\vec{L}$ si conserva pur in presenza di forze, è caratteristica delle forze centrali e sarà approfondita nella sezione dedicata alle [forze centrali](ref:chapter/5#p4).

Come nel caso della quantità di moto, per produrre una variazione finita del momento angolare è necessario che un momento di forza agisca per un intervallo di tempo non nullo: integrando il teorema fra gli istanti $t_1$ e $t_2$,

$$\int_{t_1}^{t_2} \vec{M}_O\, dt = \vec{L}_O(t_2) - \vec{L}_O(t_1) = \Delta \vec{L}_O,$$

relazione detta teorema del momento dell'impulso, perfettamente analoga a [formula (3.7)](ref:formula/3.7) per la quantità di moto.

### Esempio svolto: punto vincolato a una guida circolare da un filo

Consideriamo un punto materiale di massa $m$ che si muove su un piano orizzontale privo di attrito, trattenuto unicamente da un filo ideale che lo collega al punto fisso $O$, con tensione $\vec{T} = -T(r)\,\hat{u}_r$ (nessun'altra forza orizzontale agisce sul punto). Supponiamo che il punto si muova inizialmente di moto circolare uniforme a raggio $r_1$, con velocità tutta trasversa $v_{\theta,1}$. Tirando il filo, il raggio viene fatto variare fino al valore $r_2$: durante la variazione la traiettoria non è più circolare, perché il punto acquista anche una componente di velocità radiale $v_r$. Vogliamo determinare la componente trasversa $v_{\theta,2}$ della velocità quando il raggio torna a essere costante e pari a $r_2$, a parità di momento angolare rispetto a $O$.

**Schema.** Il polo scelto è il centro $O$ della traiettoria, fisso nel riferimento inerziale. La sola forza agente nel piano è la tensione del filo, diretta radialmente.

**Momento della tensione.** Poiché $\vec{r} = r\,\hat{u}_r$ e $\vec{T} = -T(r)\,\hat{u}_r$ sono paralleli,

$$\vec{M}_T = \vec{r} \times \vec{T} = r\,\hat{u}_r \times \big(-T(r)\,\hat{u}_r\big) = -rT(r)\,(\hat{u}_r \times \hat{u}_r) = \vec{0}.$$

**Conservazione.** Dal teorema del momento angolare, {{formula:5.5}}, con $\vec{M}_O = \vec{M}_T = \vec{0}$ segue $\vec{L}_O = \text{costante}$. Poiché il moto avviene nel piano orizzontale, $\vec{r}$ e $\vec{p} = m\vec{v}$ giacciono in quel piano, e quindi $\vec{L}_O$ è ortogonale al piano e ha solo componente $L_z$ costante.

**Modulo.** Scomponendo la velocità nelle componenti radiale e trasversa, $\vec{v} = \vec{v}_r + \vec{v}_\theta$, il contributo di $\vec{v}_r$ al momento angolare è nullo, perché $\vec{r}$ e $\vec{v}_r$ sono paralleli. Orientando l'asse $z$ nel verso di $\vec{L}_O$, in modo che $v_\theta$ sia positiva, resta quindi $|\vec{L}_O| = L_z = m\,r\,v_\theta(r) = \text{costante}$, relazione valida anche nei tratti in cui la traiettoria non è circolare; con un'orientazione diversa dell'asse $z$ si avrebbe più in generale $L_z = m\,r\,v_\theta$ e $|\vec{L}_O| = m\,r\,|v_\theta|$.

**Soluzione letterale.** Se il raggio passa da $r_1$ (con velocità trasversa $v_{\theta,1}$) a $r_2$ (con velocità trasversa $v_{\theta,2}$),

$$m r_1 v_{\theta,1} = m r_2 v_{\theta,2} \quad \Longrightarrow \quad v_{\theta,2} = v_{\theta,1}\,\frac{r_1}{r_2}.$$

**Controllo.** Se il filo viene accorciato ($r_2 < r_1$) la componente trasversa della velocità aumenta ($v_{\theta,2} > v_{\theta,1}$): è coerente con l'esperienza quotidiana del pattinatore che accelera la rotazione ritirando le braccia verso il centro, pur in assenza, in questo esempio semplificato, di momenti applicati. L'equazione è dimensionalmente corretta, poiché entrambi i membri hanno le dimensioni di $\mathrm{kg\,m^2\,s^{-1}}$.

:::image{src="assets/b1eb456c-velocita-trasversa-raggio-momento-angolare.svg" alt="Grafico dell'iperbole v_θ = L/(m r), con due punti evidenziati: r₁ con v_θ,1 più piccola e r₂ minore di r₁ con v_θ,2 maggiore di v_θ,1" caption="Fig. 5.2 — Velocità trasversa v_θ in funzione del raggio r a parità di momento angolare L = m r v_θ: quando il filo viene accorciato da r₁ a r₂ < r₁, la velocità trasversa aumenta da v_θ,1 a v_θ,2 > v_θ,1, mantenendo costante il prodotto r v_θ."}
:::

:::image{src="assets/b1eb456c-pattinatore-conservazione-momento-angolare.jpg" alt="Pattinatore su ghiaccio in rotazione con le braccia raccolte vicino al corpo" caption="Fig. 5.3 — Il pattinatore che ritira le braccia verso il corpo aumenta la propria velocità di rotazione: un esempio quotidiano di conservazione del momento angolare quando il momento delle forze esterne rispetto all'asse di rotazione è nullo. Foto: deerstop / Wikimedia Commons, CC0"}
:::

### Errori tipici

**Errore tipico 5.2** (scrivere il prodotto vettoriale come un prodotto scalare mascherato). Come già segnalato per il momento di una forza, è sbagliato scrivere $\vec{L} = m r v$ come se fosse una definizione vettoriale: l'espressione $mrv$ è soltanto il modulo di $\vec{L}_O$ nel caso particolare del moto circolare con polo nel centro, {{formula:5.4}}; in generale $\vec{L}_O$ è un vettore ortogonale al piano di $\vec{r}$ e $\vec{v}$, e la sua direzione non coincide con quella di nessuno dei due vettori fattori. Lo stesso errore, descritto nella sezione sul [momento di una forza](ref:chapter/5#p2), si ripete qui se si scrive $\vec{L} = \vec{r}\,\vec{v}\,m$ o simili: il prodotto vettoriale non è un semplice prodotto di moduli con una freccia sopra.

**Errore tipico 5.3** (dimenticare che la conservazione dipende dal polo). $\vec{L}_O$ può conservarsi rispetto a un certo polo $O$ e non conservarsi rispetto a un altro polo $O'$, perché il momento delle forze $\vec{M}_O$ dipende dalla scelta del polo. Prima di applicare la conservazione del momento angolare occorre sempre verificare che il momento risultante delle forze sia nullo rispetto allo specifico polo scelto nel problema, non rispetto a un polo generico.

**Errore tipico 5.4** (confondere conservazione di $\vec{L}$ con conservazione delle sue singole componenti scalari). Quando $\vec{L}_O$ è costante, resta costante l'intero vettore: se si esprime $\vec{L}_O$ come prodotto $m r v$ di grandezze scalari (come nel moto circolare), non è lecito concludere che $r$ e $v$ siano separatamente costanti, ma soltanto che il loro prodotto lo è, come mostrato nell'esempio precedente dove $r$ varia e $v$ varia di conseguenza.

## p4 | Forze centrali

### Definizione e proprietà di base

Una classe di forze particolarmente importante in fisica, sia a livello microscopico (forza elettrostatica) che macroscopico (forza gravitazionale), è quella delle forze centrali.

**Definizione 5.4** (forza centrale). Si definisce forza centrale una forza agente in una certa regione dello spazio con le seguenti proprietà: in qualsiasi punto la sua direzione passa sempre per un punto fisso, detto centro della forza, e il suo modulo è funzione soltanto della distanza dal centro stesso. Scegliendo come polo $O$ il centro della forza e indicando con $\hat{u}_r$ il versore radiale uscente da $O$, una forza centrale si scrive

:::formula{id="5.7" label="Definizione di forza centrale"}
$$\vec{F} = F(r)\,\hat{u}_r$$
:::

dove $F(r) > 0$ corrisponde a una forza repulsiva e $F(r) < 0$ a una forza attrattiva. Esempi tipici sono la forza gravitazionale $\vec{F} = -\dfrac{G m_1 m_2}{r^2}\hat{u}_r$ e la forza elettrostatica, già incontrate nella sezione [Forze conservative ed energia potenziale](ref:chapter/4#p4), ma la trattazione che segue vale per qualunque $F(r)$.

Il punto cruciale è che, scegliendo come polo $O$ proprio il centro della forza, il momento della forza (già definito in [Momento di una forza](ref:chapter/5#p2) come {{formula:5.1}}) è sempre nullo, perché $\vec{r}$ e $\vec{F}$ sono paralleli:

$$\vec{M}_O = \vec{r}\times\vec{F} = r\hat{u}_r \times F(r)\hat{u}_r = 0 .$$

Questa osservazione, insieme al teorema del momento angolare già dimostrato in [Momento angolare del punto](ref:chapter/5#p3), è la chiave di tutta la sezione.

### Conservazione del momento angolare: moto piano e velocità areolare costante

**Teorema 5.3.** Sia $P$ un punto materiale di massa $m$ soggetto a una forza centrale di centro $O$, con $O$ scelto come polo fisso in un riferimento inerziale. Allora il momento angolare $\vec{L}_O = \vec{r}\times m\vec{v}$ è costante nel tempo; di conseguenza il moto avviene in un piano fisso passante per $O$ e il raggio vettore $\vec{r}$ spazza aree uguali in tempi uguali (velocità areolare costante).

*Dimostrazione.* Applicando il teorema del momento angolare del punto materiale, $\frac{d\vec{L}_O}{dt} = \vec{M}_O$, e osservando che per una forza centrale $\vec{M}_O = \vec{r}\times\vec{F} = r\hat{u}_r \times F(r)\hat{u}_r = 0$, si ottiene

:::formula{id="5.8" label="Conservazione del momento angolare in un campo di forze centrali"}
$$\frac{d\vec{L}_O}{dt} = \vec{r}\times\vec{F} = 0 \quad\Longrightarrow\quad \vec{L}_O = \vec{r}\times m\vec{v} = \text{costante}$$
:::

Poiché $\vec{L}_O$ è per definizione ortogonale sia a $\vec{r}$ sia a $\vec{v}$, e il suo valore (compreso il verso) non cambia nel tempo, se $L=|\vec{L}_O|>0$ i vettori $\vec{r}$ e $\vec{v}$ devono restare sempre nel piano passante per $O$ e ortogonale a $\vec{L}_O$: il moto è dunque piano. Se invece $\vec{L}_O=\vec{0}$, cioè $\vec{r}$ e $\vec{v}$ sono sempre paralleli tra loro, il vettore nullo non individua alcun piano ortogonale a cui riferirsi; in questo caso particolare, comunque compatibile con la conservazione di $\vec{L}_O$, il moto è radiale e resta confinato sulla retta determinata dalla posizione e dalla velocità iniziali, e va quindi trattato separatamente dal caso generale $L>0$ discusso sopra. È importante notare che a essere costante è il vettore $\vec{L}_O$ nel suo complesso, non le singole componenti di $\vec{r}$ e $\vec{v}$ separatamente.

Conviene allora descrivere il moto nel piano con coordinate polari $(r,\theta)$ centrate in $O$, usando la scomposizione della velocità in componente radiale e trasversa già vista in [Moto nel piano](ref:chapter/2#p5): $\vec{v} = \dot r\,\hat{u}_r + r\dot\theta\,\hat{u}_\theta$. Poiché $\vec{r}$ e la componente radiale $\vec{v}_r$ sono paralleli, il loro prodotto vettoriale si annulla, e resta solo il contributo della componente trasversa:

$$\vec{L}_O = \vec{r}\times m\vec{v} = \vec{r}\times m(\vec{v}_r+\vec{v}_\theta) = \vec{r}\times m\vec{v}_\theta ,$$

che in modulo dà $L = m r v_\theta = m r^2 |\dot\theta|$, essendo $L$ il modulo del momento angolare, sempre non negativo, mentre $\dot\theta$ può essere negativo se il moto procede nel verso opposto a quello scelto come positivo. Conviene allora orientare l'asse ortogonale al piano del moto in modo che risulti $\dot\theta\ge 0$: con questa convenzione, che adottiamo nel seguito, si ha semplicemente $L = m r^2\dot\theta$. Nell'intervallo infinitesimo $dt$ il raggio vettore spazza un'area approssimabile a un triangolo di base $r\,d\theta$ e altezza $r$, quindi $dA = \frac12 r^2 d\theta$, da cui la velocità areolare

:::formula{id="5.9" label="Velocità areolare e sua costanza"}
$$\frac{dA}{dt} = \frac12 r^2\frac{d\theta}{dt} = \frac{L}{2m} = \text{costante}$$
:::

poiché sia $L$ sia $m$ sono costanti. In sintesi: la traiettoria di un punto che si muove in un campo di forze centrali giace in un piano fisso passante per il centro ed è percorsa in modo tale che la velocità areolare rimanga costante. Questo è esattamente il contenuto geometrico della seconda legge di Keplero, che sarà ripreso in [Gravitazione e leggi di Keplero](ref:chapter/10#p2).

Un'applicazione immediata è il caso di un corpo vincolato a un filo teso che si muove su un piano orizzontale liscio, dove la tensione $\vec{T}=-T(r)\hat{u}_r$ è una forza centrale rispetto al centro della circonferenza: il momento della tensione è nullo e dunque $L_z = m\,r\,v_\theta(r)$ si conserva, così che, se il raggio passa da $r_1$ a $r_2$, $r_1 v_{\theta,1} = r_2 v_{\theta,2}$, cioè $v_{\theta,2} = v_{\theta,1}\dfrac{r_1}{r_2}$; quando in ciascuna delle due fasi il moto è circolare, la velocità trasversa coincide con la velocità totale del punto, e la relazione si scrive semplicemente $m r_1 v_1 = m r_2 v_2$, cioè $v_2 = v_1 \dfrac{r_1}{r_2}$.

### Le forze centrali sono conservative

Le forze centrali godono anche di una seconda proprietà notevole: sono sempre conservative, indipendentemente dalla forma specifica di $F(r)$.

**Teorema 5.4.** Ogni forza centrale $\vec{F}=F(r)\hat{u}_r$ è conservativa.

*Dimostrazione.* Il lavoro elementare lungo un generico spostamento $d\vec{s}$ è

$$W_{AB} = \int_A^B \vec{F}\cdot d\vec{s} = \int_A^B F(r)\,\hat{u}_r\cdot d\vec{s} .$$

Il prodotto scalare $\hat{u}_r\cdot d\vec{s} = ds\cos\theta$, dove $\theta$ è l'angolo tra $\hat{u}_r$ e $d\vec{s}$, rappresenta esattamente la variazione $dr$ del modulo di $\vec{r}$ lungo lo spostamento. Quindi

:::formula{id="5.10" label="Lavoro di una forza centrale come funzione delle sole coordinate degli estremi"}
$$W_{AB} = \int_{r_A}^{r_B} F(r)\,dr = E_p(r_A) - E_p(r_B)$$
:::

essendo il risultato una funzione soltanto delle distanze $r_A$ ed $r_B$ dal centro, e non del cammino seguito: questa è precisamente la condizione che definisce una forza conservativa, enunciata in [Forze conservative ed energia potenziale](ref:chapter/4#p4). Ne segue che a ogni forza centrale è associata un'energia potenziale $E_p(r)$ con $\vec{F}=-\vec{\nabla}E_p$, come già visto per il caso gravitazionale ed elettrostatico.

### Equazione del moto radiale: formula di Binet

La conservazione del momento angolare permette di eliminare il tempo dall'equazione del moto e di ottenere un'equazione puramente geometrica per la traiettoria, nel caso $L\neq 0$: se infatti $L=0$ il moto è radiale, con $\theta$ costante, e la formula che segue non è applicabile. Dalla costanza di $r^2\dot\theta = L/m$ (con l'orientazione scelta in modo che $\dot\theta\ge 0$) segue che la componente trasversa dell'accelerazione è nulla,

$$a_\theta = \frac{1}{r}\frac{d}{dt}\!\left(r^2\frac{d\theta}{dt}\right) = 0 ,$$

e quindi tutta l'accelerazione è radiale. Esprimendo $\dfrac{dr}{dt}$ e $\dfrac{d^2r}{dt^2}$ in funzione di $\theta$ tramite $r^2\dot\theta = L/m$ (lecito perché $L\neq 0$ e, per l'orientazione scelta, $\dot\theta\ge0$), si arriva alla

:::formula{id="5.11" label="Formula di Binet"}
$$\vec{a} = -\frac{L^2}{m^2 r^2}\left[\frac{d^2}{d\theta^2}\!\left(\frac{1}{r}\right) + \frac{1}{r}\right]\hat{u}_r$$
:::

che lega la forma della traiettoria $r(\theta)$ al modulo della forza centrale tramite $\vec{F} = m\vec{a}$, ossia, in componente radiale con segno, $F(r) = m a_r$, dove $a_r$ è la componente radiale (con segno) dell'accelerazione ricavata dalla formula di Binet. Questa relazione è lo strumento con cui si dimostra che, nel caso gravitazionale $F(r)\propto 1/r^2$, le orbite sono coniche (prima legge di Keplero); l'approfondimento è lasciato a [Gravitazione e leggi di Keplero](ref:chapter/10#p2).

### Energia meccanica e momento angolare nei problemi di orbita

Nei problemi di orbita (satelliti, pianeti, cariche in campo centrale) la strategia generale è combinare le due leggi di conservazione appena stabilite: momento angolare $L=mrv_\theta$ costante ed energia meccanica $E_m = E_k+E_p$ costante.

Per un'orbita circolare di raggio $r$ attorno a una massa $M$, la velocità si ottiene imponendo che la forza gravitazionale fornisca l'accelerazione centripeta, $v^2 = GM/r$, e l'energia meccanica diventa

:::formula{id="5.12" label="Energia meccanica su un'orbita circolare"}
$$E_m = \frac12 m v^2 - \frac{GMm}{r} = -\frac12\,\frac{GMm}{r}$$
:::

cioè, su un'orbita circolare, l'energia cinetica (positiva) è in valore assoluto pari alla metà dell'energia potenziale (negativa), e l'energia meccanica totale è negativa e pari alla metà di $E_p$. Più in generale, limitandoci al problema gravitazionale newtoniano con l'energia potenziale nulla all'infinito, $E_p(\infty)=0$, e alle traiettorie con momento angolare $L>0$, il segno di $E_m$ classifica il tipo di orbita: iperbolica se $E_m>0$, parabolica se $E_m=0$, ellittica se $E_m<0$. Il caso limite $L=0$, pure compatibile con il teorema di conservazione dimostrato sopra, corrisponde invece a un moto puramente radiale, che non descrive un'ordinaria orbita e può terminare in una collisione con il centro della forza; va quindi trattato separatamente e non rientra in questa classificazione.

:::image{src="assets/f00793db-classificazione-orbite-energia.svg" alt="Diagramma con tre livelli di energia meccanica E_m: positivo per l'orbita iperbolica, nullo per la parabolica, negativo per l'ellittica." caption="Fig. 5.4 — Il segno dell'energia meccanica E_m classifica il tipo di orbita in un campo gravitazionale con energia potenziale nulla all'infinito, per momento angolare L>0: iperbolica, parabolica o ellittica."}
:::

Per un'orbita ellittica, la conservazione del momento angolare collega velocità e distanza dal centro nei due punti estremi dell'orbita, afelio (distanza massima) e perielio (distanza minima), dove $\vec{r}$ e $\vec{v}$ sono ortogonali tra loro:

:::formula{id="5.13" label="Momento angolare all'afelio e al perielio"}
$$L_z^a = m\,r_a v_a = m\,r_p v_p = L_z^p$$
:::

Questa relazione, combinata con la conservazione dell'energia meccanica tra afelio e perielio, costituisce il sistema tipico per determinare le due velocità incognite $v_a$ e $v_p$ a partire dai raggi $r_a$, $r_p$ (o viceversa).

**Esempio 5.1.** Un pianeta di massa $m$ descrive un'orbita ellittica attorno al Sole, di massa $M\gg m$, con distanza al perielio $r_p$ e distanza all'afelio $r_a$. Determinare le velocità $v_p$ e $v_a$ nei due punti, sapendo che in essi $\vec{r}$ e $\vec{v}$ sono ortogonali.

*Schema e riferimento.* Polo $O$ nel Sole, assunto fisso in quanto $M\gg m$; la forza gravitazionale esercitata dal Sole sul pianeta è centrale rispetto a $O$, quindi si conservano sia il momento angolare $\vec{L}_O$ sia l'energia meccanica $E_m$ del pianeta.

*Equazioni.* Al perielio e all'afelio $\vec{r}$ e $\vec{v}$ sono ortogonali, quindi $L_z^p = m r_p v_p$ e $L_z^a = m r_a v_a$; dalla conservazione del momento angolare {{formula:5.13}} segue $r_p v_p = r_a v_a$. La conservazione dell'energia meccanica dà $\frac12 v_p^2 - \dfrac{GM}{r_p} = \frac12 v_a^2 - \dfrac{GM}{r_a}$.

*Soluzione letterale.* Sostituendo $v_a = v_p\,r_p/r_a$, ricavato dalla conservazione del momento angolare, nella conservazione dell'energia meccanica si ottiene $\frac12 v_p^2\left\lbrack 1-\left(\dfrac{r_p}{r_a}\right)^2\right\rbrack  = GM\left(\dfrac{1}{r_p}-\dfrac{1}{r_a}\right)$, da cui

$$v_p = \sqrt{\frac{2GM\,r_a}{r_p(r_a+r_p)}}, \qquad v_a = \sqrt{\frac{2GM\,r_p}{r_a(r_a+r_p)}} .$$

*Controllo.* Le dimensioni di $v_p$ e $v_a$ sono quelle di una velocità. Nel limite di orbita circolare, $r_p=r_a=r$, entrambe le espressioni si riducono a $v_p=v_a=\sqrt{GM/r}$, coerente con la velocità orbitale circolare già ricavata in [Gravitazione e leggi di Keplero](ref:chapter/10#p2). Inoltre $v_p>v_a$ poiché $r_a>r_p$, come richiesto dalla costanza della velocità areolare.

:::image{src="assets/f00793db-orbita-ellittica-perielio-afelio.svg" alt="Ellisse con il Sole posto in uno dei due fuochi, con il punto di perielio più vicino e il punto di afelio più lontano evidenziati sull'asse maggiore." caption="Fig. 5.5 — Orbita ellittica con il Sole in un fuoco: il perielio è il punto di distanza minima r_p, l'afelio il punto di distanza massima r_a; in entrambi r e v sono ortogonali."}
:::

### Errori tipici

**Errore tipico 5.5.** Scrivere il momento di una forza centrale come un'uguaglianza vettore-scalare, ad esempio $\vec{M} = \vec{R}\times f$ con $f$ scalare, oppure usare simboli come $\vec{f}R$ senza alcun significato; il prodotto vettoriale va sempre scritto tra due vettori, indicando esplicitamente il polo rispetto a cui si calcola il momento, $\vec{M}_O=\vec{r}\times\vec{F}$.

**Errore tipico 5.6.** Concludere erroneamente che, poiché $\vec{L}_O$ è costante, anche $r$ e $v_\theta$ separatamente debbano restarlo: la costanza riguarda il prodotto vettoriale nel suo complesso, non le singole componenti del moto, come mostra la relazione $v_\theta(r)=v_{\theta,1} r_1/r$. La sola conservazione del momento angolare determina $v_\theta(r)$, ma non il modulo della velocità totale $v(r)$; nel campo centrale conservativo trattato qui, quest'ultimo si può determinare anche per orbite non circolari usando anche la conservazione dell'energia meccanica.

**Errore tipico 5.7.** Usare la sola conservazione dell'energia meccanica, senza la conservazione del momento angolare, per determinare due incognite (ad esempio velocità all'afelio e al perielio): le due leggi vanno sempre combinate, perché l'energia meccanica da sola non distingue le direzioni di $\vec{v}$ in punti diversi dell'orbita.
