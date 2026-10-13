---
chapter: 5
title: Continuità
---

## p1 | Introduzione

La continuità è una delle proprietà più naturali che possiamo chiedere a una funzione: significa, intuitivamente, che piccole variazioni della variabile indipendente producono piccole variazioni del valore della funzione, senza salti o rotture improvvise. Questo capitolo formalizza tale idea intuitiva attraverso il linguaggio rigoroso dei limiti già incontrato nella sezione sulla [definizione di limite](ref:chapter/4#p3), mostrando come la continuità in un punto coincida con l'uguaglianza tra limite e valore della funzione.

Per affrontare questo capitolo è indispensabile conoscere bene la definizione di limite, le tecniche di calcolo dei limiti e il concetto di limite laterale, oltre alla caratterizzazione dei limiti tramite successioni. Questi strumenti verranno costantemente richiamati, sia per classificare i punti in cui una funzione perde la continuità, sia per dimostrare i teoremi fondamentali che da essa derivano.

Lo studio della continuità non ha solo valore teorico: i risultati presentati, in particolare il teorema di esistenza degli zeri e il teorema di Weierstrass, forniscono gli strumenti per dimostrare l'esistenza di soluzioni di equazioni e l'esistenza di massimi e minimi, questioni centrali in tutta l'analisi matematica. Al termine del capitolo si sarà in grado di stabilire se una funzione è continua, classificarne le eventuali discontinuità, determinare parametri che garantiscano la continuità di funzioni definite a tratti e applicare consapevolmente i grandi teoremi di esistenza, preparando il terreno per il calcolo differenziale.

## p2 | Funzioni continue

La continuità è la proprietà che rende il grafico di una funzione "privo di salti": intuitivamente, $f$ è continua in un punto se, avvicinandosi a quel punto, il valore della funzione si avvicina al valore che essa assume esattamente in quel punto. Questa idea intuitiva va però precisata con una definizione rigorosa, analoga a quella di limite già incontrata in precedenza, e va poi estesa dal singolo punto a un intero insieme.

### Continuità in un punto

**Definizione 5.1 (continuità in un punto).** Sia $f: \operatorname{dom}(f) \to \mathbb{R}$ e sia $x_0 \in \operatorname{dom}(f)$. Si dice che $f$ è continua in $x_0$ se e solo se

$$\forall \varepsilon > 0 \; \exists \delta > 0 \text{ tale che } \forall x \in \operatorname{dom}(f), \; |x - x_0| < \delta \implies |f(x) - f(x_0)| < \varepsilon.$$

Rispetto alla definizione di limite data in [Definizione di limite](ref:chapter/4#p3), qui compare una differenza essenziale: non si richiede $x \neq x_0$, e non è necessario che $x_0$ sia un punto di accumulazione del dominio. Infatti se $x_0$ è un punto isolato del dominio la condizione è automaticamente soddisfatta (basta scegliere $\delta$ abbastanza piccolo da isolare $x_0$), e ogni funzione è continua in un punto isolato del proprio dominio. Quando invece $x_0$ è un punto di accumulazione di $\operatorname{dom}(f)$, la definizione si riconduce esattamente alla nozione di limite:

:::formula{id="5.1" label="Continuità tramite il limite"}
$$f \text{ continua in } x_0 \iff \lim_{x\to x_0} f(x) = f(x_0).$$
:::

Questa equivalenza è il criterio pratico che useremo quasi sempre: per verificare la continuità in $x_0$ basta calcolare il limite per $x \to x_0$ (con le tecniche già sviluppate nel capitolo sui limiti) e confrontarlo con $f(x_0)$.

Esiste anche una caratterizzazione equivalente per successioni, del tutto analoga a quella vista per i limiti di funzione:

:::formula{id="5.2" label="Caratterizzazione della continuità per successioni"}
$$f \text{ continua in } x_0 \iff \text{per ogni successione } (a_n) \subseteq \operatorname{dom}(f) \text{ con } a_n \to x_0 \text{ si ha } f(a_n) \to f(x_0).$$
:::

Questa forma è particolarmente utile per dimostrare che una funzione **non** è continua in un punto: basta esibire una successione $a_n \to x_0$ per cui $f(a_n)$ non tende a $f(x_0)$.

**Esempio 5.1 (verifica diretta con la definizione).** Verifichiamo che $f(x) = 2x + 3$ è continua in $x_0 = 1$. Si ha $f(1) = 5$. Fissato $\varepsilon > 0$ arbitrario, vogliamo trovare $\delta > 0$ tale che $|x-1| < \delta \implies |f(x) - 5| < \varepsilon$. Calcoliamo

$$|f(x) - 5| = |2x + 3 - 5| = |2x - 2| = 2|x - 1|.$$

Quindi basta scegliere $\delta = \varepsilon/2$: se $|x-1| < \delta$ allora $|f(x) - 5| = 2|x-1| < 2\delta = \varepsilon$. La definizione è verificata, dunque $f$ è continua in $x_0 = 1$. In pratica, per una funzione elementare come questa, è molto più rapido usare la caratterizzazione con il limite: $\lim_{x\to 1}(2x+3) = 5 = f(1)$, quindi $f$ è continua in $1$.

### Continuità su un insieme e operazioni con funzioni continue

**Definizione 5.2 (continuità su un insieme).** Una funzione $f$ si dice continua su un insieme $A \subseteq \operatorname{dom}(f)$ se è continua in ogni punto di $A$. Quando diciamo semplicemente "$f$ è continua" (senza specificare altro) intendiamo che $f$ è continua in ogni punto del suo dominio.

Verificare la continuità su un insieme richiede quindi, in linea di principio, di controllare la definizione punto per punto; nella pratica ciò non è necessario perché la continuità si propaga attraverso le operazioni algebriche e la composizione, a partire dalla continuità delle funzioni elementari (polinomi, funzioni esponenziali, logaritmiche, trigonometriche, potenze, ecc., continue su tutto il loro dominio naturale).

**Proposizione 5.1 (operazioni algebriche).** Se $f$ e $g$ sono continue in $x_0$, allora anche $f+g$, $f-g$, $f \cdot g$ sono continue in $x_0$, e $f/g$ è continua in $x_0$ purché $g(x_0) \neq 0$. Questo segue immediatamente dai teoremi algebrici sui limiti applicati alla caratterizzazione {{formula:5.1}}.

**Teorema 5.1 (continuità della funzione composta).** Siano $x_0 \in A$, $f : A \to \mathbb{R}$ continua in $x_0$ e $g : B \to \mathbb{R}$ continua in $f(x_0)$, con $f(A) \subseteq B$. Allora $g \circ f$ è continua in $x_0$. In particolare, se $f$ è continua su $A$ e $g$ è continua su $f(A)$, allora $g \circ f$ è continua su $A$.

Grazie a questo teorema, per stabilire la continuità di funzioni costruite componendo funzioni elementari (come $\sin(x^2 + 1)$, $\log(1 + e^x)$, $\sqrt{|x-2|}$) non occorre tornare alla definizione $\varepsilon$-$\delta$: basta riconoscere che si tratta di composizioni e prodotti/quozienti di funzioni elementari continue nel loro dominio naturale.

**Teorema 5.2 (continuità della funzione inversa).** Sia $f : I \to \mathbb{R}$ continua e strettamente monotona su un intervallo $I$. Allora $f$ è invertibile, l'immagine $J = f(I)$ è un intervallo e la funzione inversa $f^{-1} : J \to I$ è anch'essa continua (e monotona nello stesso senso di $f$).

Questo risultato giustifica, ad esempio, la continuità di $\arcsin$, $\arccos$, $\arctan$ e $\log$, viste come inverse rispettivamente di $\sin$ ristretta a $\left\lbrack -\frac{\pi}{2}, \frac{\pi}{2}\right\rbrack $, $\cos$ ristretta a $\lbrack 0,\pi\rbrack $, $\tan$ ristretta a $\left\rbrack -\frac{\pi}{2}, \frac{\pi}{2}\right\lbrack $ ed $\exp$.

Vale infine la pena di anticipare una relazione che verrà dimostrata nel capitolo sul calcolo differenziale: se $f$ è derivabile in $x_0$, allora $f$ è continua in $x_0$. Il viceversa è falso, come mostra l'esempio classico di $f(x) = |x|$, continua ma non derivabile in $x=0$ per la presenza di un punto angoloso; torneremo su questo nella sezione sui [punti di non derivabilità](ref:chapter/7#p3).

### Determinare parametri per la continuità di funzioni definite a tratti

Una delle applicazioni più frequenti in sede d'esame consiste nel trovare i valori di uno o più parametri che rendono continua una funzione definita a tratti in un punto di raccordo $x_0$. Il metodo è sempre lo stesso e si basa sulla caratterizzazione {{formula:5.1}}: poiché in generale il limite per $x \to x_0$ di una funzione a tratti può non esistere se i due limiti unilateri sono diversi, occorre imporre che

$$\lim_{x \to x_0^-} f(x) = \lim_{x \to x_0^+} f(x) = f(x_0).$$

Quando $x_0$ appartiene a uno solo dei due rami, si calcola $f(x_0)$ da quel ramo e si verifica che entrambi i limiti laterali coincidano con tale valore. È sufficiente confrontare tra loro i limiti laterali solo se si sa già che il ramo che contiene $x_0$ è continuo in quel punto.

**Esempio 5.2.** Determiniamo per quali valori di $a \in \mathbb{R}$ la funzione

$$f(x) = \begin{cases} x^2 + a & \text{se } x \le 1 \\ 2x + 1 & \text{se } x > 1 \end{cases}$$

è continua su tutto $\mathbb{R}$.

Su $\rbrack -\infty, 1\lbrack $ e su $\rbrack 1, +\infty\lbrack $ la funzione è continua per ogni valore di $a$, trattandosi di polinomi (funzioni elementari continue sul loro dominio naturale). L'unico punto da controllare è quindi $x_0 = 1$, dove i due rami si incontrano. Calcoliamo i due limiti laterali:

$$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} (x^2 + a) = 1 + a,$$

$$\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (2x+1) = 3.$$

Inoltre $f(1) = 1^2 + a = 1+a$, poiché il punto $x=1$ appartiene al primo ramo. Perché $f$ sia continua in $x_0=1$ deve valere

$$1 + a = 3 \quad \Longrightarrow \quad a = 2.$$

In conclusione, $f$ è continua su tutto $\mathbb{R}$ se e solo se $a = 2$; per ogni altro valore di $a$ il punto $x=1$ è un punto di discontinuità (la classificazione di questo tipo di discontinuità sarà affrontata nella sezione successiva).

:::image{src="assets/28b492c2-continuita-parametro.svg" alt="Grafico della funzione a tratti con a=2, i due rami si saldano in modo continuo nel punto (1,3)" caption="Fig. 5.1 — Il parametro a=2 salda senza salti i due rami nel punto di raccordo x=1"}
:::

Quando i parametri incogniti sono due (ad esempio $a$ e $b$ in una funzione a tre tratti), spesso occorre imporre la continuità in due punti di raccordo distinti, ottenendo un sistema di due equazioni nelle due incognite; il procedimento per ciascun punto resta identico a quello appena illustrato.

### Errori tipici

Un primo errore frequente consiste nel dimenticare di controllare il valore $f(x_0)$ stesso: non basta che i due limiti laterali coincidano fra loro, occorre che coincidano anche con il valore effettivamente assunto dalla funzione in $x_0$ (altrimenti si ha una discontinuità eliminabile, come vedremo nella prossima sezione).

Un secondo errore è credere che continuità e derivabilità siano la stessa cosa, oppure usare indifferentemente l'una al posto dell'altra: la continuità in $x_0$ non implica affatto la derivabilità in $x_0$, come mostra l'esempio di $f(x)=|x|$ in $x=0$.

Un terzo errore riguarda i punti isolati del dominio: in tali punti la funzione è sempre continua per definizione, anche se ciò può apparire controintuitivo a chi pensa alla continuità solo in termini di limite bilatero; la definizione $\varepsilon$-$\delta$ non richiede che $x_0$ sia di accumulazione.

Infine, quando si lavora con funzioni a tratti bisogna prestare attenzione a quale ramo "contiene" effettivamente il punto di raccordo (cioè se la disuguaglianza nella definizione a tratti è stretta o debole), perché è da lì che si ricava il valore corretto di $f(x_0)$ da confrontare con i due limiti laterali: nell'Esempio 5.2, usare $f(1) = 2 \cdot 1 + 1 = 3$ invece di $f(1) = 1^2+a$ sarebbe un errore, perché $x=1$ appartiene al primo ramo e non al secondo.

## p3 | Punti di discontinuità

Nella sezione precedente abbiamo definito la continuità di una funzione in un punto: se $f: \operatorname{dom}(f) \to \mathbb{R}$ e $x_0 \in \operatorname{dom}(f)$, allora $f$ è continua in $x_0$ se e solo se

$$\forall \varepsilon > 0 \ \exists \delta > 0 \text{ tale che } \forall x \in \operatorname{dom}(f), \ |x - x_0| < \delta \implies |f(x) - f(x_0)| < \varepsilon,$$

cioè, equivalentemente, se $x_0$ è anche punto di accumulazione di $\operatorname{dom}(f)$, se e solo se $\lim_{x \to x_0} f(x) = f(x_0)$. Se invece $x_0$ è un punto isolato del dominio (cioè esiste un intorno di $x_0$ che non contiene altri punti del dominio), la condizione $\varepsilon$-$\delta$ è automaticamente verificata e $f$ è sempre continua in $x_0$, ma il limite $\lim_{x \to x_0} f(x)$ non è definito, poiché la definizione di limite richiede che $x_0$ sia punto di accumulazione del dominio: in tal caso l'equivalenza con il limite semplicemente non si applica.

Quando la condizione di continuità non è verificata in un punto $x_0 \in \operatorname{dom}(f)$, diciamo che $f$ è discontinua in $x_0$ e che $x_0$ è un **punto di discontinuità**. Se invece $x_0 \notin \operatorname{dom}(f)$, la continuità di $f$ in quel punto non è definita: un limite finito permette eventualmente di colmare la **lacuna** con un prolungamento continuo.

Distingueremo le discontinuità eliminabili, di prima specie (o di salto) e di seconda specie in base ai limiti laterali. Considereremo anche le lacune fuori dal dominio che possono essere colmate per continuità.

### Discontinuità eliminabile

**Definizione 5.3.** Un punto di discontinuità $x_0 \in \operatorname{dom}(f)$ si dice **eliminabile** se esiste finito il limite

$$\lim_{x \to x_0} f(x) = l \in \mathbb{R}, \qquad \text{con } l \neq f(x_0).$$

Se $x_0$ appartiene al dominio e il limite finito non coincide con $f(x_0)$, la discontinuità è eliminabile: assegnando a $f(x_0)$ il valore del limite si ottiene una funzione continua nel punto. Se invece $x_0$ è escluso dal dominio ma il limite finito esiste, si parla di **lacuna prolungabile**: definendo la funzione in $x_0$ con quel valore si ottiene un prolungamento continuo.

**Esempio 5.3.** Consideriamo $f(x) = \dfrac{x^2 - 1}{x - 1}$, definita per $x \neq 1$. Per $x \neq 1$ possiamo scrivere

$$f(x) = \frac{(x-1)(x+1)}{x-1} = x + 1,$$

semplificazione lecita perché stiamo considerando $x \neq 1$. La funzione $g(x) = x+1$ è continua su tutto $\mathbb{R}$, dunque esiste

$$\lim_{x \to 1} f(x) = 1 + 1 = 2.$$

Poiché $x_0 = 1$ non appartiene al dominio di $f$ ma il limite esiste finito, possiamo costruire il **prolungamento per continuità**

$$\tilde{f}(x) = \begin{cases} \dfrac{x^2-1}{x-1} & \text{se } x \neq 1 \\ 2 & \text{se } x = 1 \end{cases}$$

che risulta continua su tutto $\mathbb{R}$.

:::image{src="assets/4890567d-discontinuita-eliminabile.svg" alt="retta y = x + 1 con un buco in x = 1 e il punto (1,2) evidenziato" caption="Fig. 5.2 — Discontinuità eliminabile: il buco in x = 1 si colma ponendo f(1) = 2"}
:::

Un errore tipico è credere che, una volta semplificata l'espressione algebrica, la funzione originaria e quella semplificata siano la stessa funzione. Non è così: $f(x) = \frac{x^2-1}{x-1}$ e $g(x) = x+1$ hanno la stessa espressione per $x \neq 1$ ma domini diversi ($\operatorname{dom}(f) = \mathbb{R} \setminus \{1\}$, $\operatorname{dom}(g) = \mathbb{R}$); è il prolungamento $\tilde f$, e non $f$ stessa, a essere continua anche in $x=1$.

### Discontinuità di prima specie (salto)

**Definizione 5.4.** Un punto di discontinuità $x_0$ è detto di **prima specie** (o **di salto**) quando esistono finiti entrambi i limiti laterali ma sono diversi fra loro:

$$\lim_{x \to x_0^+} f(x) = l_1 \in \mathbb{R}, \qquad \lim_{x \to x_0^-} f(x) = l_2 \in \mathbb{R}, \qquad \text{con } l_1 \neq l_2.$$

Graficamente il grafico di $f$ presenta un vero e proprio "salto" verticale di ampiezza $|l_1 - l_2|$, detta **ampiezza del salto**. A differenza del caso eliminabile, qui non c'è alcun modo di ridefinire $f(x_0)$ per rendere la funzione continua in $x_0$: qualunque valore si scelga per $f(x_0)$, almeno uno dei due limiti laterali non potrà coincidere con esso.

**Esempio 5.4.** Sia

$$f(x) = \begin{cases} 0 & \text{se } x < 0 \\ 1 & \text{se } x \geq 0 \end{cases}$$

Si ha $\lim_{x \to 0^-} f(x) = 0$ e $\lim_{x \to 0^+} f(x) = 1$. Poiché i due limiti laterali esistono finiti ma sono diversi, $x_0 = 0$ è un punto di discontinuità di salto.

### Discontinuità di seconda specie

**Definizione 5.5.** Se $x_0$ è punto di accumulazione del dominio da entrambi i lati, un punto di discontinuità $x_0$ si dice di **seconda specie** quando almeno uno dei due limiti laterali non esiste, oppure è infinito ($+\infty$ o $-\infty$).

È sufficiente che una sola delle due condizioni (limite laterale inesistente o infinito) si verifichi da un solo lato per classificare la discontinuità come di seconda specie: non è necessario che il comportamento patologico riguardi entrambi i lati, purché entrambi i limiti laterali siano comunque definiti, cioè $x_0$ sia punto di accumulazione del dominio sia a destra che a sinistra.

Se invece $x_0$ è un estremo del dominio (per esempio l'estremo di un intervallo $\lbrack a,b\rbrack $) oppure, più in generale, $\operatorname{dom}(f)$ si accumula in $x_0$ solo da un lato, ha senso considerare un unico limite laterale, quello dal lato in cui il dominio si accumula. In questi punti la classificazione eliminabile/salto/seconda specie va riferita a quell'unico limite: la discontinuità è eliminabile se tale limite esiste finito e diverso da $f(x_0)$, ed è di seconda specie se quel limite non esiste oppure è infinito; la categoria di salto, che richiede per definizione due limiti laterali finiti e distinti, non si applica in questi punti. Per esempio, sulla funzione definita su $\lbrack 0,1\rbrack $ che vale $1$ in $x_0=0$ e $0$ altrove, il punto $0$ è un estremo del dominio: ha senso solo il limite destro, $\lim_{x \to 0^+} f(x) = 0 \neq f(0) = 1$, quindi la discontinuità in $0$ è eliminabile; non ha senso invece parlare di limite sinistro, perché il dominio non si accumula a sinistra di $0$, e dunque non si deve concludere che si tratti anche di una discontinuità di seconda specie.

**Esempio 5.5.** Consideriamo

$$f(x) = \begin{cases} \dfrac{1}{x} & \text{se } x \neq 0 \\ 0 & \text{se } x = 0 \end{cases}$$

Si ha $\lim_{x \to 0^-} f(x) = -\infty$ e $\lim_{x \to 0^+} f(x) = +\infty$: entrambi i limiti laterali sono infiniti, quindi $x_0 = 0$ è un punto di discontinuità di seconda specie.

:::image{src="assets/4890567d-discontinuita-seconda-specie.svg" alt="iperbole y = 1/x con asintoto verticale in x = 0" caption="Fig. 5.3 — Discontinuità di seconda specie: i limiti laterali in x = 0 divergono a più e meno infinito"}
:::

Un altro esempio di discontinuità di seconda specie è la funzione $f(x)=\sin\!\left(\frac{1}{x}\right)$ per $x\neq 0$, completata ponendo $f(0)=0$. In $x=0$ nessuno dei due limiti laterali esiste: i valori oscillano indefinitamente.

### Funzioni con parte intera, valore assoluto e parametri

La classificazione appena introdotta si applica in particolare alle funzioni costruite con la **parte intera** $\lbrack x\rbrack $, già definita come il più grande intero minore o uguale a $x$, e con il **valore assoluto**.

La funzione parte intera $f(x) = \lbrack x\rbrack $ è discontinua in ogni $x_0 \in \mathbb{Z}$: infatti, per $x_0 = n \in \mathbb{Z}$,

$$\lim_{x \to n^-} \lbrack x\rbrack  = n - 1, \qquad \lim_{x \to n^+} \lbrack x\rbrack  = n = f(n).$$

I due limiti laterali esistono finiti ma sono diversi, quindi ogni $n \in \mathbb{Z}$ è un punto di discontinuità di prima specie (salto), di ampiezza sempre pari a $1$. Su tutti i punti non interi, invece, $\lbrack x\rbrack $ è localmente costante e dunque continua.

La funzione valore assoluto $f(x) = |x|$, al contrario, è **continua** su tutto $\mathbb{R}$, incluso $x_0 = 0$: non presenta alcuna discontinuità, ma solo un **punto angoloso**, cioè un punto in cui la funzione è continua ma non derivabile, perché le derivate destra e sinistra esistono finite ma sono diverse. Questo verrà approfondito nel capitolo sul calcolo differenziale; ricordiamo che derivabilità implica continuità, ma non vale il viceversa.

**Errore tipico 5.1.** Molti studenti, trovandosi di fronte a un valore assoluto nel grafico della funzione, pensano automaticamente a una discontinuità. In realtà il valore assoluto non introduce mai discontinuità: $|f(x)|$ è continua ovunque $f$ sia continua, perché la funzione modulo è essa stessa continua su tutto $\mathbb{R}$ e la composizione di funzioni continue è continua. Analogamente, $f(x) = x|x|$ è continua con derivata prima continua su tutto $\mathbb{R}$ (è di classe $C^1(\mathbb{R})$), pur non essendo derivabile due volte in $x_0=0$: infatti $f'(x) = 2|x|$, che in $0$ non è derivabile (per $x \neq 0$ si ha $f''(x) = 2$ a destra e $f''(x) = -2$ a sinistra).

**Funzioni definite a tratti con un parametro.** Un tipo di esercizio molto frequente consiste nel chiedere di determinare i valori di un parametro reale (spesso indicato con $k$ o $a$) affinché una funzione definita a tratti risulti continua in un punto di raccordo $x_0$. Il metodo è sempre lo stesso.

1. Si calcolano separatamente il limite sinistro, il limite destro e $f(x_0)$. Per ciascun limite laterale si usa l'espressione valida sul lato corrispondente.
2. Si impone che entrambi i limiti laterali coincidano con $f(x_0)$. Il valore di un'espressione in $x_0$ coincide automaticamente con il limite dal lato pertinente solo se quell'espressione è continua in $x_0$ da quel lato.
3. Si risolve l'equazione o il sistema nel parametro.

**Esempio 5.6.** Sia

$$f(x) = \begin{cases} kx + 1 & \text{se } x \leq 0 \\ \dfrac{\sin x}{x} & \text{se } x > 0 \end{cases}$$

Il punto critico è $x_0 = 0$. Da sinistra, $f(0) = \lim_{x \to 0^-}(kx+1) = 1$ per ogni $k$. Da destra, usando il limite notevole del seno,

$$\lim_{x \to 0^+} \frac{\sin x}{x} = 1.$$

I due limiti coincidono già per ogni valore di $k$: la continuità in $x_0 = 0$ non impone alcuna condizione su $k$ in questo caso, perché il parametro compare solo nella parte che genera il valore $f(0)=1$ indipendentemente da esso. Questo tipo di situazione va sempre controllato con attenzione: non bisogna fermarsi a metà calcolo assumendo che il parametro debba necessariamente comparire nell'equazione finale.

Se invece la funzione fosse

$$g(x) = \begin{cases} kx^2 + 2 & \text{se } x \leq 1 \\ 3x - 1 & \text{se } x > 1 \end{cases}$$

allora $g(1) = k + 2$ (valore dato dall'espressione per $x \leq 1$, che include $x_0=1$), mentre $\lim_{x \to 1^+} g(x) = 3 \cdot 1 - 1 = 2$. Imponendo l'uguaglianza $k + 2 = 2$ si ottiene $k = 0$: solo per questo valore del parametro $g$ risulta continua in $x_0 = 1$. Per ogni $k \neq 0$, $x_0=1$ è un punto di discontinuità di prima specie, con ampiezza del salto pari a $|k|$.

### Perché la classificazione conta

La distinzione tra questi comportamenti ha una conseguenza pratica: una discontinuità eliminabile si risolve modificando il valore della funzione nel punto; una lacuna prolungabile si colma definendo quel valore. In presenza di un salto o di una discontinuità di seconda specie, invece, nessuna assegnazione nel solo punto rende la funzione continua. Nei prossimi teoremi (esistenza degli zeri, valori intermedi, Weierstrass) l'ipotesi di continuità su un intervallo chiuso e limitato sarà **essenziale**: una discontinuità di salto può, per esempio, permettere a una funzione di passare da valori negativi a valori positivi senza mai annullarsi. Un controesempio esplicito compare nella sezione sul [teorema di esistenza degli zeri](ref:chapter/5#p4).

## p4 | Teorema di esistenza degli zeri

### Motivazione ed enunciato

Supponiamo di voler stabilire se un'equazione del tipo $f(x) = 0$ ha soluzione in un certo intervallo, senza poterla risolvere esplicitamente. L'idea geometrica è semplice: se il grafico di una funzione continua parte sotto l'asse delle $x$ e finisce sopra (o viceversa), per "passare" da un lato all'altro deve necessariamente attraversare l'asse. Questa intuizione, che fallisce appena la funzione presenta un salto, viene formalizzata dal teorema seguente.

:::formula{id="5.3" label="Teorema di esistenza degli zeri"}
$$\begin{aligned}
&\text{Sia } f: [a,b] \to \mathbb{R} \text{ continua in ogni punto di } [a,b],\\
&\text{con } f(a) \cdot f(b) < 0.\\
&\text{Allora } \exists\, c \in \,]a,b[ \text{ tale che } f(c) = 0.
\end{aligned}$$
:::

Le ipotesi da verificare con cura prima di applicare il teorema sono due, entrambe indispensabili:

- $f$ deve essere continua su **tutto** l'intervallo chiuso e limitato $\lbrack a,b\rbrack $, estremi compresi.
- $f(a)$ e $f(b)$ devono avere segno discorde, cioè $f(a) \cdot f(b) < 0$.

Se la funzione non è continua, la conclusione può cadere: una funzione con un salto può passare da valori negativi a valori positivi senza mai annullarsi, semplicemente "saltando" l'asse $x$. Per questo l'ipotesi di continuità è fondamentale e non va mai omessa nello svolgimento di un esercizio.

:::image{src="assets/3f43c0d3-teorema-zeri-bisezione.svg" alt="Grafico di f su [a,b] con f(a) negativo e f(b) positivo, che interseca l'asse x in un punto c" caption="Fig. 5.4 — Grafico di una funzione continua con segni discordi agli estremi"}
:::

### Dimostrazione (metodo di bisezione)

La dimostrazione è costruttiva: fornisce un algoritmo (il **metodo di bisezione**) che individua un punto di annullamento restringendo progressivamente un intervallo.

Supponiamo, senza perdita di generalità, che $f(a) < 0$ e $f(b) > 0$. Poniamo $a_0 = a$, $b_0 = b$. Ad ogni passo $n$ consideriamo il punto medio dell'intervallo corrente e valutiamo $f$ in esso:

$$\frac{a_n+b_n}{2} \longrightarrow f\left(\frac{a_n+b_n}{2}\right) =
\begin{cases}
0 &\Rightarrow c = \dfrac{a_n+b_n}{2} \quad \text{(STOP, trovato lo zero)}\\[4pt]
<0 &\Rightarrow \text{poniamo } a_{n+1} = \dfrac{a_n+b_n}{2},\quad b_{n+1} = b_n\\[4pt]
>0 &\Rightarrow \text{poniamo } b_{n+1} = \dfrac{a_n+b_n}{2},\quad a_{n+1} = a_n
\end{cases}$$

In questo modo, se il processo non termina prima, si ottiene per ogni $n$ che $f(a_{n+1}) < 0$ e $f(b_{n+1}) > 0$, mentre l'ampiezza dell'intervallo si dimezza ad ogni passo:

$$b_{n+1} - a_{n+1} = \frac{b-a}{2^{n+1}}.$$

La successione $(b_n)$ è decrescente e limitata (inferiormente da $a$), quindi per il teorema sulle successioni monotone converge a un limite $c_2$; analogamente $(a_n)$ è crescente e limitata, quindi converge a un limite $c_1$. Poiché

$$b_n - a_n = \frac{b-a}{2^n} \xrightarrow\lbrack n\to\infty\rbrack {} 0,$$

passando al limite si ottiene $c_2 - c_1 = 0$, e per il teorema di unicità del limite (richiamato nella sezione sui [teoremi sui limiti](ref:chapter/4#p4)) segue $c_2 = c_1 =: c$.

Resta da verificare che $f(c) = 0$. Per costruzione $f(a_n) \le 0$ per ogni $n$ (con $a_n \to c$) e $f(b_n) \ge 0$ per ogni $n$ (con $b_n \to c$); per continuità di $f$ in $c$ e per il teorema di permanenza del segno (passaggio al limite nelle disuguaglianze), si ha

$$f(c) \le 0 \qquad \text{e} \qquad f(c) \ge 0,$$

da cui necessariamente $f(c) = 0$. $\square$

### Osservazioni ed errori tipici

**Errore tipico 5.2.** Il teorema garantisce l'esistenza di **almeno** un punto $c$ in cui $f(c) = 0$, ma non dice nulla sulla sua posizione esatta né sulla sua unicità: queste informazioni, se richieste, vanno dedotte con altri strumenti (tipicamente studiando il segno della derivata, come illustrato più sotto). Molti studenti scrivono "esiste un'unica soluzione" applicando solo il teorema degli zeri: questa conclusione è scorretta se non si aggiunge un argomento di monotonia.

**Osservazione 5.1.** Il teorema richiede che l'intervallo $\lbrack a,b\rbrack $ sia chiuso e limitato e che la continuità valga su tutto $\lbrack a,b\rbrack $, compresi gli estremi. In molti esercizi conviene lavorare su un intervallo illimitato o aperto: in tal caso si può ricorrere al seguente corollario, che sostituisce i valori $f(a)$, $f(b)$ con i limiti di $f$ agli estremi dell'intervallo.

:::formula{id="5.4" label="Esistenza di zeri con limiti discordi agli estremi"}
$$\begin{aligned}
&\text{Sia } f \text{ continua su un intervallo } I,\\
&\text{con limiti (finiti o infiniti) non nulli e discordi agli estremi di } I.\\
&\text{Allora } f \text{ ha almeno uno zero in } I.
\end{aligned}$$
:::

Un secondo corollario utile riformula il teorema per equazioni della forma $f(x) = g(x)$, con due funzioni continue che "si scambiano" in posizione relativa:

:::formula{id="5.5" label="Esistenza di un'intersezione tra due funzioni continue"}
$$\begin{aligned}
&\text{Siano } f, g \text{ continue su } [a,b], \text{ con } f(a) < g(a) \text{ e } f(b) > g(b).\\
&\text{Allora } \exists\, c \in \,]a,b[ \text{ tale che } f(c) = g(c).
\end{aligned}$$
:::

Questo corollario si ottiene applicando il teorema degli zeri alla funzione ausiliaria $h(x) = f(x) - g(x)$, continua su $\lbrack a,b\rbrack $ (per le proprietà di continuità delle funzioni continue viste nella sezione sulle [funzioni continue](ref:chapter/5#p2)), con $h(a) < 0$ e $h(b) > 0$.

### Esempio svolto: esistenza e conteggio delle soluzioni

**Esempio 5.7.** Dimostriamo che l'equazione

$$x^3 - x - 1 = 0$$

ha almeno una soluzione reale, e stabiliamo se tale soluzione è unica.

**Esistenza.** La funzione $f(x) = x^3 - x - 1$ è un polinomio, dunque continua su tutto $\mathbb{R}$, in particolare su $\lbrack 1,2\rbrack $. Calcoliamo i valori agli estremi:

$$f(1) = 1 - 1 - 1 = -1 < 0, \qquad f(2) = 8 - 2 - 1 = 5 > 0.$$

Poiché $f$ è continua su $\lbrack 1,2\rbrack $ e $f(1) \cdot f(2) < 0$, per il teorema di esistenza degli zeri esiste almeno un punto $c \in \,\rbrack 1,2\lbrack $ tale che $f(c) = 0$.

**Unicità.** Calcoliamo la derivata (strumento che sarà studiato nel capitolo sul [calcolo differenziale](ref:chapter/7#p2)):

$$f'(x) = 3x^2 - 1.$$

Su $\lbrack 1,2\rbrack $ si ha $x^2 \ge 1$, quindi $3x^2 - 1 \ge 2 > 0$: la derivata è strettamente positiva su tutto l'intervallo, dunque $f$ è strettamente crescente su $\lbrack 1,2\rbrack $ e in particolare iniettiva. Una funzione strettamente monotona assume ogni valore al più una volta, quindi lo zero trovato è **unico** in $\lbrack 1,2\rbrack $.

In conclusione, l'equazione $x^3 - x - 1 = 0$ ha esattamente una soluzione nell'intervallo $\lbrack 1,2\rbrack $.

Questo schema — teorema degli zeri per l'esistenza, segno della derivata per l'unicità — è lo strumento standard per contare le soluzioni di un'equazione in un intervallo, e verrà ripreso sistematicamente nel capitolo sul calcolo differenziale, in particolare dopo l'introduzione dei [teoremi di Fermat, Rolle e Lagrange](ref:chapter/7#p4).

**Osservazione 5.2.** Il teorema degli zeri, applicato a un polinomio reale di grado dispari, fornisce un risultato notevole già incontrato nel capitolo sui numeri complessi: ogni polinomio a coefficienti reali di grado dispari ha almeno una radice reale. Infatti, il comportamento agli infiniti del polinomio (che tende a $+\infty$ da un lato e a $-\infty$ dall'altro, o viceversa, a seconda del segno del coefficiente direttivo) garantisce segni discordi su un intervallo sufficientemente grande, e si applica il corollario sui limiti agli estremi.

**Errore tipico 5.3.** Un errore frequente consiste nel verificare $f(a) \cdot f(b) < 0$ su un intervallo in cui $f$ non è definita o non è continua in qualche punto interno (ad esempio per la presenza di un asintoto verticale o di un punto di discontinuità, discussi nella sezione sui [punti di discontinuità](ref:chapter/5#p3)): in tal caso il teorema non si può applicare, anche se i segni agli estremi sono discordi, perché manca l'ipotesi di continuità su tutto l'intervallo.

## p5 | Teorema di Weierstrass

### Motivazione ed enunciato

Il [teorema di esistenza degli zeri](ref:chapter/5#p4) garantisce che una funzione continua che cambia segno agli estremi di un intervallo chiuso e limitato si annulla in un punto interno. Il teorema di Weierstrass risponde a una domanda complementare: una funzione continua su $\lbrack a,b\rbrack $ ammette sempre un valore massimo e un valore minimo, raggiunti effettivamente in qualche punto dell'intervallo? La risposta è affermativa, e questo risultato è già stato richiamato nella sezione su [funzioni limitate e monotone](ref:chapter/3#p5); qui lo enunciamo di nuovo per intero, ne discutiamo il ruolo delle ipotesi con controesempi e ne deduciamo una delle conseguenze più importanti, il teorema dei valori intermedi.

**Teorema 5.3 (di Weierstrass).** Sia $f : \lbrack a,b\rbrack  \to \mathbb{R}$ una funzione continua, con $a, b \in \mathbb{R}$ e $a < b$. Allora $f$ è limitata su $\lbrack a,b\rbrack $ e ammette almeno un punto di minimo assoluto $x_m \in \lbrack a,b\rbrack $ e almeno un punto di massimo assoluto $x_M \in \lbrack a,b\rbrack $, cioè

$$\exists\, x_m, x_M \in \lbrack a,b\rbrack  \ \text{tali che} \ \forall x \in \lbrack a,b\rbrack  \quad f(x_m) \le f(x) \le f(x_M).$$

Questo risultato è già stato indicato con la formula [formula (3.18)](ref:formula/3.18). Le ipotesi del teorema sono tre, tutte essenziali: la funzione $f$ deve essere **continua**, il dominio deve essere un **intervallo chiuso** e l'intervallo deve essere **limitato**. Il teorema fornisce una condizione *sufficiente*: non dà alcuna informazione su come trovare $x_m$ e $x_M$, né esclude che il massimo o il minimo siano raggiunti in più punti.

Un corollario immediato è che $f$ è limitata su $\lbrack a,b\rbrack $, con $m = f(x_m)$ e $M = f(x_M)$.

**Osservazione 5.3 (idea della dimostrazione).** Per assurdo si mostra prima che $f$ è limitata superiormente su $\lbrack a,b\rbrack $: se non lo fosse, esisterebbe una successione $(x_n) \subseteq \lbrack a,b\rbrack $ con $f(x_n) \to +\infty$; per il teorema di Bolzano-Weierstrass (richiamato nella sezione sulle [successioni e sottosuccessioni](ref:chapter/4#p5)) $(x_n)$ ammette una sottosuccessione $(x_{n_k})$ convergente a un punto $x_0 \in \lbrack a,b\rbrack $ (qui è essenziale che $\lbrack a,b\rbrack $ sia chiuso e limitato), e la continuità di $f$ in $x_0$ costringerebbe $f(x_{n_k})$ a convergere a $f(x_0)$; ma la stessa sottosuccessione, essendo estratta da $(x_n)$, deve tendere anch'essa a $+\infty$, il che è assurdo. Essendo $f$ limitata superiormente, l'insieme $f(\lbrack a,b\rbrack )$ ammette estremo superiore finito $M$; usando ancora una successione che si approssima a $M$ e il medesimo argomento di estrazione, si prova che $M$ è effettivamente raggiunto, cioè è un massimo. Lo stesso argomento, applicato a $-f$, dà l'esistenza del minimo. $\square$

### Il ruolo di ciascuna ipotesi: controesempi

Ogni ipotesi del teorema di Weierstrass è indispensabile: rimuovendone anche una sola, la conclusione può fallire.

**Manca la continuità.** La funzione

$$f(x) = \begin{cases} \dfrac{1}{x} & x \ne 0 \\ 0 & x = 0 \end{cases}$$

è definita su $\lbrack -1,1\rbrack $, intervallo chiuso e limitato, ma ha una discontinuità di seconda specie in $x_0 = 0$, dove $\lim_{x \to 0^-} f(x) = -\infty$ e $\lim_{x \to 0^+} f(x) = +\infty$. Di conseguenza $f$ non è limitata su $\lbrack -1,1\rbrack $ e non esiste né un massimo né un minimo assoluto. Più in generale, se $f$ non fosse continua potrebbe presentare un salto o una discontinuità eliminabile e mancare comunque di punti di estremo assoluto.

:::image{src="assets/61f8c47d-weierstrass-controesempio-discontinua.svg" alt="Grafico di 1/x su [-1,1] con asintoto verticale in x=0" caption="Fig. 5.5 — Senza continuità: f(x) = 1/x su [-1,1] non è limitata"}
:::

**L'intervallo non è chiuso.** La funzione $f(x) = x$ è continua su $\rbrack 0,1\lbrack $, intervallo limitato ma non chiuso: $f$ non ammette né massimo né minimo assoluto, perché $\sup f = 1$ e $\inf f = 0$ non sono raggiunti da nessun punto del dominio (gli estremi $0$ e $1$ sono esclusi).

:::image{src="assets/61f8c47d-weierstrass-controesempio-aperto.svg" alt="Grafico di f(x)=x sull'intervallo aperto (0,1) con estremi esclusi" caption="Fig. 5.6 — Senza chiusura dell'intervallo: f(x) = x su ]0,1[ non raggiunge estremo superiore né inferiore"}
:::

**L'intervallo non è limitato.** La funzione $f(x) = x$ è continua sull'intervallo chiuso $\lbrack 0, +\infty\lbrack $, ma $\lbrack 0,+\infty\lbrack $ non è limitato: $f$ ammette minimo assoluto in $x = 0$, ma non è limitata superiormente e dunque non ha massimo.

**Errore tipico 5.4.** Uno sbaglio frequente è applicare il teorema di Weierstrass a un intervallo del tipo $\rbrack a,b\rbrack $ o $\lbrack a,b\lbrack $ semiaperto, oppure dimenticare di verificare la continuità su *tutto* $\lbrack a,b\rbrack $ (incluso agli estremi) prima di concludere l'esistenza di massimo e minimo: basta un solo punto di discontinuità, anche interno, per impedire l'applicazione del teorema. Ciò non significa che la funzione sia necessariamente priva di massimo o di minimo assoluto: una funzione discontinua può comunque ammetterli, ma la loro esistenza non è più garantita dal teorema di Weierstrass e va verificata con altri strumenti.

### Dal teorema di Weierstrass al teorema dei valori intermedi

Combinando il teorema di Weierstrass con il [teorema di esistenza degli zeri](ref:chapter/5#p4) si ottiene un risultato che descrive completamente l'immagine di una funzione continua su un intervallo.

**Teorema 5.4 (dei valori intermedi).** Sia $f : \lbrack a,b\rbrack  \to \mathbb{R}$ una funzione continua, con $a, b \in \mathbb{R}$ e $a < b$. Allora $f$ assume tutti i valori compresi tra $f(a)$ e $f(b)$: per ogni $y_0$ compreso tra $f(a)$ e $f(b)$ esiste $\bar{x} \in \lbrack a,b\rbrack $ tale che $f(\bar{x}) = y_0$.

:::formula{id="5.6" label="Teorema dei valori intermedi"}
$$f \ \text{continua su} \ [a,b], \quad y_0 \ \text{compreso tra} \ f(a) \ \text{e} \ f(b) \ \implies \ \exists\, \bar{x} \in [a,b] : f(\bar{x}) = y_0$$
:::

**Dimostrazione.** Se $y_0 = f(a)$ oppure $y_0 = f(b)$ la tesi è ovvia. Supponiamo $f(a) < y_0 < f(b)$ (il caso $f(a) > y_0 > f(b)$ è analogo) e definiamo $g(x) = f(x) - y_0$ su $\lbrack a,b\rbrack $. La funzione $g$ è continua, poiché differenza di funzioni continue, e soddisfa $g(a) = f(a) - y_0 < 0$ e $g(b) = f(b) - y_0 > 0$, dunque $g(a) \cdot g(b) < 0$. Per il teorema di esistenza degli zeri esiste $\bar{x} \in \rbrack a,b\lbrack $ tale che $g(\bar{x}) = 0$, cioè $f(\bar{x}) = y_0$. $\square$

In realtà il teorema vale più in generale su un qualunque intervallo $I$ (non necessariamente chiuso o limitato): se $f : I \to \mathbb{R}$ è continua e assume i valori $y_1, y_2$, allora assume anche ogni valore intermedio. Da ciò segue un corollario molto utile: se $f$ è continua su un intervallo $I$, allora l'immagine $f(I)$ è a sua volta un intervallo, con estremi $\inf_I f$ e $\sup_I f$. Quando $I = \lbrack a,b\rbrack $, grazie al teorema di Weierstrass tali estremi sono raggiunti, e grazie al teorema dei valori intermedi appena dimostrato vengono assunti anche tutti i valori compresi tra essi: si ottiene quindi precisamente $f(\lbrack a,b\rbrack ) = \lbrack m, M\rbrack $ con $m = f(x_m)$ e $M = f(x_M)$.

Una applicazione classica di questo corollario è la dimostrazione che ogni polinomio reale di grado dispari ha almeno una radice reale, già discussa nella sezione sui [polinomi ed equazioni in $\mathbb{C}$](ref:chapter/2#p5): poiché $\lim_{x \to -\infty} p(x)$ e $\lim_{x \to +\infty} p(x)$ hanno segni opposti, il teorema dei valori intermedi (nella sua versione per limiti agli estremi di un intervallo illimitato) garantisce l'esistenza di uno zero.

**Esempio 5.8.** Si vuole mostrare che l'equazione $x^5 - 3x + 1 = 0$ ha almeno tre soluzioni reali distinte. Poniamo $f(x) = x^5 - 3x + 1$, funzione continua su tutto $\mathbb{R}$ (è un polinomio), e calcoliamo:

$$f(-2) = -32 + 6 + 1 = -25 < 0, \qquad f(-1) = -1 + 3 + 1 = 3 > 0,$$

$$f(0) = 1 > 0, \qquad f(1) = 1 - 3 + 1 = -1 < 0, \qquad f(2) = 32 - 6 + 1 = 27 > 0.$$

Su ciascuno degli intervalli chiusi $\lbrack -2,-1\rbrack $, $\lbrack 0,1\rbrack $, $\lbrack 1,2\rbrack $ la funzione $f$ è continua e assume valori di segno opposto agli estremi; per il teorema di esistenza degli zeri esiste quindi almeno una soluzione in ciascuno di questi tre intervalli, e dunque l'equazione ha almeno tre soluzioni reali distinte: una nell'interno di ciascun intervallo, e questi interni sono disgiunti (gli estremi $-1$ e $1$, dove gli intervalli si toccano, non possono essere zeri perché $f$ vi assume valori non nulli). Si osservi che questo argomento prova l'*esistenza* di (almeno) tre radici, ma non la loro unicità all'interno di ciascun intervallo né il loro valore esatto: per queste informazioni servono strumenti del calcolo differenziale, come lo studio del segno della derivata.

**Errore tipico 5.5.** Non bisogna confondere l'ipotesi del teorema dei valori intermedi (continuità su un intervallo) con la monotonia: la funzione può non essere monotona, e assumere comunque ogni valore intermedio anche più volte. Viceversa, non si può applicare il teorema a un dominio che non sia un intervallo (ad esempio un'unione di intervalli disgiunti), perché in tal caso la funzione potrebbe "saltare" valori intermedi senza violare la continuità su ciascun pezzo del dominio.
