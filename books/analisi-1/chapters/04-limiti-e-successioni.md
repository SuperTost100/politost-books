---
chapter: 4
title: Limiti e successioni
---

## p1 | Introduzione

Il concetto di limite costituisce il fondamento su cui si costruisce tutta l'analisi matematica: continuità, derivate e integrali si definiscono a partire da esso. Comprendere a fondo questa nozione significa acquisire lo strumento che permette di descrivere rigorosamente il comportamento di una funzione vicino a un punto o all'infinito, superando l'intuizione geometrica con un linguaggio formale e verificabile.

Per affrontare il capitolo è necessario avere familiarità con le [funzioni reali](ref:chapter/3#p2), in particolare con il concetto di dominio, grafico e proprietà elementari come monotonia e periodicità. Sarà inoltre utile ricordare le proprietà algebriche dei numeri reali, essenziali per manipolare le disuguaglianze che compaiono nelle verifiche dirette.

Al termine del percorso lo studente saprà riconoscere e classificare i punti notevoli di un insieme, applicare correttamente la definizione epsilon-delta per verificare un limite, utilizzare i teoremi di unicità, permanenza del segno e confronto per calcolare o stimare limiti senza ricorrere sempre alla definizione. Sarà in grado di studiare la convergenza delle successioni, sfruttare il legame tra sottosuccessioni e limite di funzione, e applicare i criteri del rapporto e della radice per analizzare successioni definite da prodotti, potenze o fattoriali. Questi strumenti, insieme alla gerarchia degli infiniti, prepareranno il terreno per il calcolo dei limiti di funzioni più complesse nei capitoli successivi.

## p2 | Intorni e punti notevoli

In questa sezione introduciamo il linguaggio degli **intorni**, che useremo sistematicamente per formulare la definizione di limite, e classifichiamo i punti notevoli di un sottoinsieme di $\mathbb{R}$: punti interni, isolati, di accumulazione e di frontiera. Si tratta di nozioni puramente topologiche, indipendenti dal concetto di funzione, che servono a descrivere "dove" si può far tendere la variabile $x$ e "come" un insieme è disposto rispetto ai suoi punti.

### Intorni in $\mathbb{R}$

**Definizione 4.1 (Intorno).** Dato $x_0 \in \mathbb{R}$ e $r>0$, si chiama **intorno di centro $x_0$ e raggio $r$** l'intervallo aperto

$$I_r(x_0) = \;\rbrack x_0-r,\, x_0+r\lbrack  \,.$$

Osserviamo che

$$I_r(x_0) = \{x \in \mathbb{R} : x_0-r < x < x_0+r\} = \{x \in \mathbb{R} : -r < x-x_0 < r\} = \{x \in \mathbb{R} : |x-x_0| < r\},$$

quindi un intorno è esattamente l'insieme dei punti che distano da $x_0$ meno di $r$, nel senso del valore assoluto introdotto in [Valore assoluto](ref:chapter/1#p4). Scriveremo semplicemente $I(x_0)$ quando il raggio non è rilevante.

Si definiscono anche l'**intorno destro** $I^+_r(x_0) = \,\rbrack x_0, x_0+r\lbrack $ e l'**intorno sinistro** $I^-_r(x_0) = \,\rbrack x_0-r, x_0\lbrack $. Per $x_0 = +\infty$ (rispettivamente $-\infty$) un intorno è un insieme del tipo $\rbrack M,+\infty\lbrack $ (rispettivamente $\rbrack -\infty,M\lbrack $), con $M \in \mathbb{R}$.

**Errore tipico 4.1.** Non bisogna confondere la nozione generale di *insieme* con quella di *intorno*: un intorno è sempre un intervallo aperto centrato nel punto (o una semiretta, se $x_0 = \pm\infty$), mentre un insieme qualsiasi $A \subseteq \mathbb{R}$ può avere una forma arbitraria.

### Punti interni, isolati, di accumulazione e di frontiera

Fissiamo un insieme $A \subseteq \mathbb{R}$ e un punto $x_0 \in \mathbb{R}$. Le quattro nozioni seguenti classificano la posizione di $x_0$ rispetto ad $A$, usando come strumento gli intorni appena definiti.

**Definizione 4.2 (Punto interno).** Diciamo che $x_0$ è un **punto interno** ad $A$ se esiste un intorno $I$ di $x_0$ tale che $I \subseteq A$, cioè se esiste $\delta>0$ con $\,\rbrack x_0-\delta, x_0+\delta\lbrack \, \subseteq A$. L'insieme dei punti interni di $A$ si chiama **parte interna** di $A$ e si indica con $\operatorname{int}(A)$; vale sempre $\operatorname{int}(A) \subseteq A$.

**Definizione 4.3 (Punto isolato).** Diciamo che $x_0$ è un **punto isolato** di $A$ se esiste un intorno $I$ di $x_0$ tale che $A \cap I = \{x_0\}$, cioè se $x_0 \in A$ ed esiste un intorno di $x_0$ che non contiene altri punti di $A$. Un insieme $A$ costituito solo da punti isolati si dice **discreto**.

**Definizione 4.4 (Punto di accumulazione).** Diciamo che $x_0$ è un **punto di accumulazione** per $A$ se ogni intorno di $x_0$ contiene almeno un punto di $A$ diverso da $x_0$. In formule, per ogni $r>0$:

$$\left( I_r(x_0) \setminus \{x_0\} \right) \cap A \neq \emptyset.$$

Questa nozione non richiede che $x_0$ appartenga ad $A$: un punto di accumulazione per $A$ può anche stare fuori da $A$. Essa è la condizione essenziale affinché abbia senso scrivere $\lim_{x \to x_0} f(x)$, come vedremo nella prossima sezione.

**Definizione 4.5 (Punto di frontiera).** Diciamo che $x_0$ è un **punto di frontiera** per $A$ se per ogni intorno $I$ di $x_0$ si ha $A \cap I \neq \emptyset$ e $A^c \cap I \neq \emptyset$, cioè ogni intorno di $x_0$ contiene sia punti di $A$ che punti del complementare di $A$. L'insieme dei punti di frontiera si indica con $\operatorname{Fr}(A)$.

**Osservazione 4.1.** Un punto interno ad $A$ appartiene necessariamente ad $A$ e non può essere di frontiera, perché un suo intorno è interamente contenuto in $A$. Un punto isolato di $A$ è sempre un punto di frontiera (ogni suo intorno contiene punti fuori da $A$) ma non è un punto di accumulazione per $A$: le due nozioni sono in un certo senso complementari rispetto ai punti di $A$ stesso.

**Esempio svolto 4.1.** Consideriamo $A = \,\rbrack 0,1\lbrack \, \cup \{2\} \subseteq \mathbb{R}$ e classifichiamo alcuni punti notevoli.

- Ogni $x_0 \in \,\rbrack 0,1\lbrack \,$ è un punto interno ad $A$: basta scegliere $\delta < \min\{x_0, 1-x_0\}$ per avere $\,\rbrack x_0-\delta, x_0+\delta[\, \subseteq \,]0,1\lbrack \, \subseteq A$.
- $x_0 = 2$ è un punto isolato di $A$: per $r = 1$ l'intorno $\,\rbrack 1,3\lbrack $ interseca $A$ solo in $\{2\}$.
- $x_0 = 0$ e $x_0 = 1$ sono punti di accumulazione per $A$ (ogni intorno contiene punti di $\,\rbrack 0,1\lbrack \,$ diversi da $x_0$) ma non appartengono ad $A$; sono anche punti di frontiera.
- L'insieme dei punti di accumulazione di $A$ è l'intervallo chiuso $\lbrack 0,1\rbrack $: il punto $2$ non è di accumulazione perché, essendo isolato, esiste un suo intorno privo di altri punti di $A$.
- $\operatorname{Fr}(A) = \{0,1,2\}$: i punti interni $\rbrack 0,1\lbrack $ non sono di frontiera, mentre $0$, $1$ (di accumulazione ma non interni) e $2$ (isolato) lo sono.

**Errore tipico 4.2.** Uno sbaglio frequente consiste nel credere che un punto di accumulazione debba appartenere all'insieme $A$: non è così, come mostrano $x_0=0$ e $x_0=1$ nell'esempio precedente. Un secondo errore comune è pensare che un punto isolato non possa mai comparire come punto di frontiera: in realtà ogni punto isolato è automaticamente di frontiera, perché un suo intorno piccolo contiene sempre anche punti del complementare di $A$.

Le nozioni di questa sezione sono il presupposto indispensabile per la [Definizione di limite](ref:chapter/4#p3): il limite $\lim_{x\to x_0} f(x)$ si potrà definire solo quando $x_0$ è un punto di accumulazione per il dominio di $f$, condizione che garantisce che esistano punti del dominio arbitrariamente vicini a $x_0$ (diversi da $x_0$ stesso) in cui valutare $f$.

## p3 | Definizione di limite

### Motivazione e definizione generale

Lo studio del comportamento di una funzione $f$ vicino a un punto che non necessariamente appartiene al suo dominio (o "vicino a $\pm\infty$") è il problema centrale di questo capitolo. Perché l'espressione "$x$ che tende a $x_0$" abbia senso, $x_0$ deve essere un punto di accumulazione per $\operatorname{dom} f$, nozione già introdotta nella sezione precedente: ogni intorno di $x_0$ deve contenere punti del dominio diversi da $x_0$ stesso, [testo](ref:chapter/4#p2). Questo è ciò che rende possibile "avvicinarsi" a $x_0$ restando dentro al dominio di $f$.

La definizione di limite, nella sua forma più generale, si esprime in termini di intorni e vale simultaneamente per tutti i casi (punto finito o infinito, limite finito o infinito).

**Definizione 4.6** (limite di una funzione). Siano $f: \operatorname{dom}(f) \to \mathbb{R}$, $x_0 \in \mathbb{R}^* = \mathbb{R} \cup \{-\infty,+\infty\}$ e $\ell \in \mathbb{R}^*$. Se $x_0$ è reale, supponiamo che sia un punto di accumulazione per $\operatorname{dom}(f)$, cioè che ogni intorno di $x_0$ contenga punti del dominio diversi da $x_0$. Se $x_0=+\infty$, supponiamo che $\operatorname{dom}(f)$ sia non limitato superiormente; se $x_0=-\infty$, supponiamo che sia non limitato inferiormente. Diciamo che $f$ ha limite $\ell$ per $x$ che tende a $x_0$ se e solo se per ogni intorno $I(\ell)$ esiste un intorno $I(x_0)$ tale che, per ogni $x \in \operatorname{dom}(f) \cap I(x_0)$ con $x \neq x_0$, si ha $f(x) \in I(\ell)$. In tal caso scriviamo $\lim_{x\to x_0} f(x) = \ell$.

:::formula{id="4.1" label="Definizione di limite tramite intorni"}
$$\forall I(\ell)\ \exists I(x_0) \text{ tale che } x \in \operatorname{dom}(f) \cap I(x_0),\ x \neq x_0 \implies f(x) \in I(\ell)$$
:::

L'eleganza di questa formulazione sta nel fatto che racchiude in un'unica frase tutti i casi possibili: basta esplicitare cosa significhi "intorno di $x_0$" e "intorno di $\ell$" a seconda che siano numeri reali oppure $\pm\infty$. Nella pratica degli esercizi, però, è indispensabile saper scrivere la definizione esplicitamente, caso per caso, con le disuguaglianze che ne derivano: è questo il contenuto della prossima sottosezione.

### I quattro casi espliciti

Ricordiamo che l'intorno di centro $x_0 \in \mathbb{R}$ e raggio $r>0$ è $I_r(x_0) = \left\rbrack x_0-r, x_0+r\right\lbrack  = \{x \in \mathbb{R} : |x-x_0|<r\}$, mentre l'intorno di $+\infty$ è un insieme del tipo $\left\rbrack M,+\infty\right\lbrack $ e quello di $-\infty$ è $\left\rbrack -\infty,M\right\lbrack $, [testo](ref:chapter/4#p2). Sostituendo queste espressioni nella Definizione 4.6 si ottengono le quattro formulazioni $\varepsilon$-$\delta$ che si usano concretamente.

**Caso 1: $x_0$ finito, $\ell$ finito.** $f$ ha limite finito $\ell$ per $x \to x_0$ se e solo se

:::formula{id="4.2" label="Limite finito, punto finito"}
$$\forall \varepsilon>0\ \exists \delta>0 \text{ tale che } \forall x \in \operatorname{dom}(f),\ 0<|x-x_0|<\delta \implies |f(x)-\ell|<\varepsilon$$
:::

Si noti la condizione $0<|x-x_0|$, che esclude $x=x_0$: il valore (se esiste) che $f$ assume in $x_0$ non ha alcun ruolo nella definizione di limite. Quando $x_0 \in \operatorname{dom}(f)$ e, in più, $\ell = f(x_0)$, questa stessa condizione definisce la continuità di $f$ in $x_0$, nozione che riprenderemo nella sezione dedicata.

**Caso 2: $x_0$ finito, $\ell = +\infty$ (analogamente $\ell=-\infty$).** $f$ diverge positivamente per $x \to x_0$ se e solo se

:::formula{id="4.3" label="Limite infinito, punto finito"}
$$\forall M>0\ \exists \delta>0 \text{ tale che } \forall x \in \operatorname{dom}(f),\ 0<|x-x_0|<\delta \implies f(x)>M$$
:::

Per $\ell=-\infty$ basta sostituire la conclusione con $f(x)<-M$. Un esempio tipico è $f(x)=1/x$ per $x\to 0^+$, che useremo più sotto per illustrare la discontinuità di seconda specie.

**Caso 3: $x_0=+\infty$ (analogamente $x_0=-\infty$), $\ell$ finito.** $f$ ha limite finito $\ell$ per $x \to +\infty$ se e solo se

:::formula{id="4.4" label="Limite finito, punto infinito"}
$$\forall \varepsilon>0\ \exists M>0 \text{ tale che } \forall x \in \operatorname{dom}(f),\ x>M \implies |f(x)-\ell|<\varepsilon$$
:::

**Caso 4: $x_0=+\infty$, $\ell=+\infty$ (e le combinazioni analoghe con segni diversi).** $f$ diverge a $+\infty$ per $x\to+\infty$ se e solo se

:::formula{id="4.5" label="Limite infinito, punto infinito"}
$$\forall M>0\ \exists N>0 \text{ tale che } \forall x \in \operatorname{dom}(f),\ x>N \implies f(x)>M$$
:::

Nell'esempio $f(x)=2^x$ su tutto $\mathbb{R}$, si verifica facilmente che $\lim_{x\to+\infty} 2^x = +\infty$ (caso 4) mentre $\lim_{x\to-\infty} 2^x = 0$ (caso 3, con $\ell=0$).

:::image{src="assets/831bfb75-esponenziale-limiti.svg" alt="Grafico di 2 elevato a x con asintoto orizzontale y=0" caption="Fig. 4.1 — La funzione 2^x diverge a +infinito per x che tende a +infinito e tende a 0 per x che tende a -infinito"}
:::

### Limiti unilateri

Quando si vuole studiare il comportamento di $f$ avvicinandosi a $x_0$ solo da destra o solo da sinistra, si usano gli intorni destro e sinistro $I^+_r(x_0) = \left\rbrack x_0, x_0+r\right\lbrack $ e $I^-_r(x_0) = \left\rbrack x_0-r, x_0\right\lbrack $ al posto dell'intorno bilatero nella Definizione 4.6. Perché il limite destro sia definito, $x_0$ deve essere punto di accumulazione di $\operatorname{dom}(f)$ da destra: ogni intorno destro di $x_0$ deve contenere punti del dominio. Analogamente, il limite sinistro richiede che $x_0$ sia punto di accumulazione di $\operatorname{dom}(f)$ da sinistra. Si scrive allora

:::formula{id="4.6" label="Limite destro e limite sinistro"}
$$\lim_{x\to x_0^+} f(x) = \ell_1 \qquad \text{e} \qquad \lim_{x\to x_0^-} f(x) = \ell_2$$
:::

Esplicitamente, per il limite destro finito in punto finito, se $x_0$ è punto di accumulazione del dominio da destra, la definizione è $\forall \varepsilon>0\ \exists \delta>0$ tale che, per ogni $x\in\operatorname{dom}(f)$, $x_0<x<x_0+\delta$ implica $|f(x)-\ell_1|<\varepsilon$. Per il limite sinistro finito si richiede invece che $x_0$ sia punto di accumulazione del dominio da sinistra e che $x_0-\delta<x<x_0$. Le condizioni di accumulazione dal lato considerato valgono anche per i limiti infiniti. Per $x_0$ finito, i casi visti sopra (limite finito, $+\infty$ o $-\infty$) si scrivono da destra o da sinistra sostituendo l'intorno bilatero di $x_0$ con quello unilatero opportuno. Per $x_0 = \pm\infty$ la distinzione tra destra e sinistra non ha senso.

Un esempio istruttivo è la funzione con un salto in $x_0=0$, per cui $\lim_{x\to 0^-} f(x) = 0$ mentre $\lim_{x\to 0^+} f(x) = 1$: poiché i due limiti laterali esistono finiti ma sono diversi, $x_0=0$ è un punto di discontinuità di prima specie (o "salto"), argomento che verrà approfondito nella sezione sui punti di discontinuità.

:::image{src="assets/831bfb75-salto-unilateri.svg" alt="Funzione con salto in x=0 tra i valori 0 e 1" caption="Fig. 4.2 — Limite sinistro uguale a 0 e limite destro uguale a 1 in x=0: un punto di discontinuita di salto"}
:::

Un secondo esempio è $f(x) = 1/x$ per $x\neq 0$: si ha $\lim_{x\to 0^-} f(x) = -\infty$ e $\lim_{x\to 0^+} f(x) = +\infty$, entrambi infiniti, e questo tipo di comportamento caratterizza una discontinuità di seconda specie.

### Verificare un limite con la definizione

Verificare un limite "con la definizione" significa, dato candidato $\ell$ (e dato $x_0$), dimostrare che la proprietà $\varepsilon$-$\delta$ (o $\varepsilon$-$M$, a seconda del caso) è effettivamente soddisfatta per ogni scelta del parametro universale ($\varepsilon$ oppure $M$), esibendo esplicitamente il parametro esistenziale ($\delta$, $M$ o $N$) in funzione di esso.

**Esempio 4.2.** Verifichiamo che $\displaystyle\lim_{x\to 3} (2x-1) = 5$ usando la Definizione 4.6 nella forma del Caso 1.

Fissiamo $\varepsilon>0$ arbitrario. Vogliamo trovare $\delta>0$ tale che

$$0<|x-3|<\delta \implies |(2x-1)-5|<\varepsilon.$$

Calcoliamo $|(2x-1)-5| = |2x-6| = 2|x-3|$. La condizione da garantire diventa quindi $2|x-3|<\varepsilon$, cioè $|x-3|<\varepsilon/2$. Basta allora scegliere $\delta = \varepsilon/2$: per ogni $x$ con $0<|x-3|<\delta$ si ha

$$|(2x-1)-5| = 2|x-3| < 2\delta = \varepsilon,$$

come richiesto. Poiché $\varepsilon>0$ era arbitrario, la definizione è verificata e il limite è confermato.

**Esempio 4.3.** Verifichiamo che $\displaystyle\lim_{x\to+\infty} \frac{1}{x} = 0$, usando il Caso 3 (con $x_0=+\infty$, $\ell=0$).

Fissiamo $\varepsilon>0$. Vogliamo $M>0$ tale che $x>M \implies |1/x - 0|<\varepsilon$, cioè $1/x<\varepsilon$ (osservando che per $x>0$ si ha $1/x>0$), ossia $x>1/\varepsilon$. Basta scegliere $M=1/\varepsilon$: per ogni $x>M$ si ha

$$\left|\frac{1}{x}\right| = \frac{1}{x} < \frac{1}{M} = \varepsilon.$$

Questo conclude la verifica.

**Esempio 4.4.** Verifichiamo che $\displaystyle\lim_{x\to 2} \frac{1}{(x-2)^2} = +\infty$, usando il Caso 2.

Fissiamo $M>0$. Vogliamo $\delta>0$ tale che $0<|x-2|<\delta \implies \dfrac{1}{(x-2)^2}>M$. La disuguaglianza $\dfrac{1}{(x-2)^2}>M$ equivale, per $M>0$, a $(x-2)^2 < 1/M$, cioè $|x-2| < 1/\sqrt{M}$. Basta scegliere $\delta = 1/\sqrt{M}$: per ogni $x$ con $0<|x-2|<\delta$ si ha $(x-2)^2 < \delta^2 = 1/M$, da cui $\dfrac{1}{(x-2)^2} > M$, come richiesto.

Questi tre esempi mostrano il metodo generale: si parte dalla disuguaglianza da garantire sul valore di $f$, la si manipola algebricamente fino a isolare $|x-x_0|$ (o $x$, nel caso di limiti all'infinito), e da questa manipolazione si legge direttamente la scelta di $\delta$ (o di $M$) in funzione del parametro iniziale.

### Errori tipici

Un primo errore frequente è confondere la nozione di intorno con quella di insieme generico: un intorno di $x_0$ deve contenere un intervallo aperto centrato in $x_0$ (o una semiretta, nel caso di $\pm\infty$), non un insieme qualunque che contenga $x_0$.

Un secondo errore è dimenticare la condizione $x \neq x_0$ (cioè $0<|x-x_0|$) nella definizione: il valore di $f$ in $x_0$, se definito, non entra mai nel calcolo del limite, e uno studente che verifica un limite confondendosi con $f(x_0)$ sta in realtà verificando (o smentendo) la continuità, non il limite.

Un terzo errore, tipico quando si cerca $\delta$ in funzione di $\varepsilon$, è non verificare che la maggiorazione trovata valga davvero per ogni $x$ nell'intorno scelto: occorre sempre ripercorrere la catena di disuguaglianze dal basso verso l'alto, partendo da $|x-x_0|<\delta$ e arrivando a $|f(x)-\ell|<\varepsilon$, e non limitarsi a "risolvere" formalmente la disequazione senza controllare i passaggi.

Infine, va ricordato che l'unicità del limite (quando esiste) è un teorema, non una definizione: se $\ell_1$ ed $\ell_2$ soddisfano entrambi la Definizione 4.6 per lo stesso $x_0$, allora necessariamente $\ell_1=\ell_2$; questo risultato, insieme ai teoremi di permanenza del segno e di confronto, sarà dimostrato nella prossima sezione.

## p4 | Teoremi sui limiti

I teoremi che seguono sono gli strumenti fondamentali per lavorare con i limiti dopo averne data la definizione: permettono di dimostrare che il valore del limite è univocamente determinato, di trasferire informazioni di segno dalla funzione al suo limite (e viceversa, in un intorno), e soprattutto di **calcolare** limiti di funzioni che non si sanno trattare direttamente, incastrandole tra due funzioni di cui si conosce già il limite. In tutto ciò che segue $f, g, h$ sono funzioni reali definite su un sottoinsieme $A \subseteq \mathbb{R}$, e $x_0 \in \mathbb{R} \cup \{\pm\infty\}$ è un punto di accumulazione di $A$ (o del dominio in gioco), secondo la nozione introdotta in [Intorni e punti notevoli](ref:chapter/4#p2) e usata nella [Definizione di limite](ref:chapter/4#p3).

### Unicità del limite

**Teorema 4.1 (di unicità del limite).** Siano $f : \operatorname{dom}(f) \to \mathbb{R}$, $x_0 \in \mathbb{R} \cup \{\pm\infty\}$ un punto di accumulazione per $\operatorname{dom}(f)$, e supponiamo che esistano $l_1, l_2 \in \mathbb{R} \cup \{\pm\infty\}$ entrambi verificanti la definizione di $\lim_{x \to x_0} f(x)$. Allora $l_1 = l_2$.

*Dimostrazione.* Supponiamo per assurdo che $l_1 \neq l_2$. Esistono allora intorni disgiunti $J_1$ e $J_2$ rispettivamente di $l_1$ e $l_2$: per due valori finiti distinti si possono scegliere intervalli aperti disgiunti; se uno dei valori è infinito, si sceglie una semiretta che non contiene l’altro; se sono $+\infty$ e $-\infty$, si scelgono due semirette disgiunte. Per la definizione di limite esistono intorni $U_1$ e $U_2$ di $x_0$ tali che $f(x) \in J_i$ per ogni $x \in \operatorname{dom}(f) \cap U_i$ con $x \neq x_0$, per $i=1,2$. L’intersezione $U_1 \cap U_2$ è ancora un intorno di $x_0$. Poiché $x_0$ è punto di accumulazione di $\operatorname{dom}(f)$, esiste $\bar{x} \in \operatorname{dom}(f) \cap U_1 \cap U_2$ con $\bar{x} \neq x_0$. Ne seguirebbe $f(\bar{x}) \in J_1 \cap J_2$, impossibile perché gli intorni sono disgiunti. Dunque $l_1 = l_2$. $\square$

**Osservazione 4.2.** Questo teorema giustifica la scrittura $\lim_{x \to x_0} f(x) = l$ come uguaglianza tra oggetti ben definiti: se il limite esiste, non ha senso parlare "di un limite" tra più possibili, ne esiste uno solo.

### Permanenza del segno

**Teorema 4.2 (di permanenza del segno).** Sia $f : \operatorname{dom}(f) \to \mathbb{R}$ e sia $x_0$ punto di accumulazione di $\operatorname{dom}(f)$. Se esiste $\lim_{x \to x_0} f(x) = l > 0$ (eventualmente $l = +\infty$), allora esiste un intorno $I(x_0)$ tale che

$$
f(x) > 0 \qquad \forall x \in \operatorname{dom}(f) \cap I(x_0) \setminus \{x_0\}.
$$

Analogamente, se $l < 0$ (eventualmente $l = -\infty$), esiste un intorno $I(x_0)$ in cui $f(x) < 0$ per ogni $x \neq x_0$.

*Dimostrazione.* Se $l \in \mathbb{R}$ e $l > 0$, applichiamo la definizione di limite con l’intorno $I_r(l) = \rbrack l-r,l+r\lbrack $, scegliendo $r = \frac{l}{2} > 0$. Poiché $I_r(l) \subseteq \rbrack 0,+\infty\lbrack $, esiste un intorno $U$ di $x_0$ tale che $f(x) \in I_r(l)$ per ogni $x \in \operatorname{dom}(f) \cap U$ con $x \neq x_0$; quindi $f(x) > 0$. Se $l = +\infty$, usiamo come intorno del limite la semiretta $\rbrack 0,+\infty\lbrack $ e otteniamo la stessa conclusione. Per $l < 0$ finito si sceglie un intorno del limite contenuto in $\rbrack -\infty,0\lbrack $; per $l = -\infty$ si usa direttamente tale semiretta. In ogni caso l’intorno $U$ fornito dalla definizione è quello richiesto. $\square$

**Corollario 4.1.** Sia $f : \operatorname{dom}(f) \to \mathbb{R}$ e $x_0$ punto di accumulazione di $\operatorname{dom}(f)$. Se esiste un intorno $I(x_0)$ tale che $f(x) \geq 0$ per ogni $x \in I(x_0) \cap \operatorname{dom}(f)$, ed esiste $\lim_{x \to x_0} f(x) = l$, allora $l \geq 0$.

Se esistesse $l < 0$, la permanenza del segno darebbe un intorno $U_1$ di $x_0$ nel quale $f(x) < 0$ per ogni $x \in \operatorname{dom}(f) \cap U_1$ con $x \neq x_0$. L’ipotesi fornisce un intorno $U_2$ in cui $f(x) \geq 0$ sui punti del dominio. L’intersezione $U_1 \cap U_2$ è un intorno di $x_0$ e, poiché $x_0$ è punto di accumulazione del dominio, contiene un punto del dominio diverso da $x_0$: lì le due disuguaglianze sarebbero incompatibili. Quindi $l \geq 0$.

**Errore tipico 4.3.** Molti studenti credono che da $f(x) > 0$ in un intorno di $x_0$ segua $l > 0$ in senso stretto. Questo è falso: il corollario garantisce solo $l \geq 0$. Un controesempio tipico è $f(x) = x^2$ per $x \to 0$: si ha $f(x) > 0$ per ogni $x \neq 0$, ma $\lim_{x \to 0} f(x) = 0$, non strettamente positivo. La disuguaglianza stretta si "indebolisce" passando al limite.

### Limitatezza locale

**Teorema 4.3 (di limitatezza locale).** Sia $f : \operatorname{dom}(f) \to \mathbb{R}$ e sia $x_0$ punto di accumulazione di $\operatorname{dom}(f)$. Se esiste $\lim_{x \to x_0} f(x) = l \in \mathbb{R}$, allora esiste un intorno $I(x_0)$ tale che $f$ è limitata su $\operatorname{dom}(f) \cap I(x_0)$.

*Dimostrazione.* Applichiamo la definizione di limite con l’intorno $\rbrack l-1,l+1\lbrack $: esiste un intorno $I(x_0)$ tale che $l-1 < f(x) < l+1$ per ogni $x \in \operatorname{dom}(f) \cap I(x_0)$ con $x \neq x_0$. Su questi punti vale quindi $|f(x)| < |l| + 1$. Se $x_0 \in \operatorname{dom}(f)$ si aggiunge il solo valore $f(x_0)$, e $|f(x)| \le \max\{|l|+1, |f(x_0)|\}$ su tutto $\operatorname{dom}(f) \cap I(x_0)$. $\square$

**Osservazione 4.3.** L’ipotesi $l \in \mathbb{R}$ è necessaria: $f(x) = 1/x^2$ ha limite $+\infty$ per $x \to 0$ e non è limitata in nessun intorno di $0$. Il viceversa è falso: $f(x) = \sin(1/x)$ è limitata vicino a $0$, ma non ha limite per $x \to 0$.

### Teoremi del confronto

Il primo risultato permette di confrontare i limiti di due funzioni a partire da una disuguaglianza locale tra le funzioni stesse.

**Teorema 4.4 (primo teorema del confronto).** Siano $f, g : A \to \mathbb{R}$, con $A \subseteq \mathbb{R}$, e $x_0 \in \mathbb{R} \cup \{\pm\infty\}$ punto di accumulazione per $A$. Supponiamo che:

1. esista un intorno $I(x_0)$ tale che $f(x) \leq g(x)$ per ogni $x \in I(x_0) \cap A$;
2. esista $\lim_{x \to x_0} f(x) = l$;
3. esista $\lim_{x \to x_0} g(x) = m$.

Allora $l \leq m$.

*Dimostrazione (idea).* Supponiamo per assurdo che $l > m$. Esistono intorni disgiunti $J_l$ di $l$ e $J_m$ di $m$ tali che ogni elemento di $J_l$ sia maggiore di ogni elemento di $J_m$. Questo vale anche se uno o entrambi i limiti sono infiniti, scegliendo intervalli o semirette adeguati. Per la definizione dei due limiti e per l’ipotesi di confronto, esiste un intorno comune $U$ di $x_0$ in cui, per ogni $x \in A \cap U$ con $x \neq x_0$, si ha $f(x) \in J_l$, $g(x) \in J_m$ e $f(x) \leq g(x)$. Poiché $x_0$ è punto di accumulazione di $A$, tale intersezione contiene un punto $\bar{x} \neq x_0$; ma allora ogni elemento di $J_l$ è maggiore di ogni elemento di $J_m$, in contraddizione con $f(\bar{x}) \leq g(\bar{x})$. Pertanto $l \leq m$. $\square$

**Osservazione 4.4.** Il risultato vale anche se l'ipotesi è una disuguaglianza stretta $f(x) < g(x)$: la conclusione resta comunque $l \leq m$, mai $l < m$. Non si può in generale rafforzare la conclusione.

**Variante per i limiti infiniti.** Siano $f, g : A \to \mathbb{R}$ e $x_0$ come sopra, con $f(x) \leq g(x)$ in un intorno di $x_0$ (escluso al più $x_0$).

- Se $\lim_{x \to x_0} f(x) = +\infty$, allora anche $\lim_{x \to x_0} g(x) = +\infty$.
- Se $\lim_{x \to x_0} g(x) = -\infty$, allora anche $\lim_{x \to x_0} f(x) = -\infty$.

Questa variante è molto utile per stabilire limiti infiniti senza conoscere esplicitamente il valore della funzione più "difficile": basta minorarla (o maggiorarla) con una funzione più semplice che diverge.

**Esempio 4.5.** Confrontiamo $f(x) = \sin x + 10$ e $g(x) = e^{-x} + 100$ su tutto $\mathbb{R}$. Poiché $\sin x \leq 1$ e $e^{-x} \geq 0$, si ha $f(x) \leq 11 \leq 100 \leq g(x)$ per ogni $x \in \mathbb{R}$, quindi $f(x) \leq g(x)$ ovunque. Se entrambe ammettono limite per $x \to x_0$ (per qualunque $x_0$ fissato), il primo teorema del confronto garantisce che il limite di $f$ non supera mai quello di $g$.

Quando invece una funzione è compresa tra **due** funzioni che tendono allo stesso limite finito, si parla del teorema dei carabinieri.

**Teorema 4.5 (dei carabinieri, o secondo teorema del confronto).** Siano $A \subseteq \mathbb{R}$ non vuoto, $f, g, h : A \to \mathbb{R}$ e $x_0 \in \mathbb{R} \cup \{\pm\infty\}$ punto di accumulazione per $A$. Supponiamo che:

1. esista un intorno $I(x_0)$ tale che $f(x) \leq g(x) \leq h(x)$ per ogni $x \in A \cap I(x_0) \setminus \{x_0\}$;
2. esistano $\lim_{x \to x_0} f(x) = \lim_{x \to x_0} h(x) = l \in \mathbb{R}$.

Allora esiste anche $\lim_{x \to x_0} g(x) = l$.

*Dimostrazione.* Fissiamo un intorno $I_\varepsilon(l) = \rbrack l-\varepsilon,l+\varepsilon\lbrack $. Per la definizione di limite applicata a $f$ e a $h$, esistono intorni $U_1$ e $U_2$ di $x_0$ tali che $f(x),h(x) \in I_\varepsilon(l)$ rispettivamente per ogni $x \in A \cap U_1$ e $x \in A \cap U_2$ diversi da $x_0$. Sia $U$ l’intersezione di $U_1$, $U_2$ e dell’intorno in cui vale $f(x) \leq g(x) \leq h(x)$. Per ogni $x \in A \cap U$ con $x \neq x_0$ si ha allora

$$
l - \varepsilon < f(x) \leq g(x) \leq h(x) < l + \varepsilon,
$$

perciò $g(x) \in I_\varepsilon(l)$. Questo prova che $\lim_{x \to x_0} g(x) = l$. $\square$

Intuitivamente, la funzione $g$ è "schiacciata" tra $f$ e $h$: se le due funzioni estreme convergono allo stesso valore, anche quella intermedia è costretta a convergervi.

**Esempio svolto 4.6.** Calcoliamo $\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right)$. La funzione non ha limite immediato per sostituzione, perché $\sin(1/x)$ oscilla indefinitamente vicino a $x = 0$ e non ha limite. Tuttavia, per ogni $x \neq 0$ vale $-1 \leq \sin(1/x) \leq 1$, quindi, moltiplicando per $x^2 \geq 0$,

$$
-x^2 \leq x^2 \sin\left(\frac{1}{x}\right) \leq x^2 \qquad \forall x \neq 0.
$$

Poiché $\lim_{x \to 0} (-x^2) = \lim_{x \to 0} x^2 = 0$, il teorema dei carabinieri garantisce che

$$
\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right) = 0.
$$

:::image{src="assets/f3b5ae8c-teorema-carabinieri-esempio.svg" alt="Grafico di x^2 sin(1/x) compreso tra le parabole -x^2 e x^2 vicino a x=0" caption="Fig. 4.3 — La funzione g(x) = x^2 sin(1/x) è schiacciata tra f(x) = -x^2 e h(x) = x^2 in un intorno di x = 0"}
:::

Questa tecnica è esattamente quella alla base della dimostrazione del [(6.6)](ref:formula/6.6), ripresa nella sezione sui [Limiti notevoli](ref:chapter/6#p2).

**Errore tipico 4.4.** Nell'applicare il teorema dei carabinieri si deve controllare che la disuguaglianza $f(x) \leq g(x) \leq h(x)$ valga davvero in un intorno di $x_0$ (eventualmente escluso $x_0$), non su tutto il dominio: basta che valga localmente. È inoltre indispensabile che i due limiti estremi coincidano; se $f$ e $h$ tendono a valori diversi, il teorema non si applica e non si può concludere nulla sul limite di $g$.

## p5 | Limiti di funzioni monotone

### Perché serve un teorema sulle funzioni monotone

In generale un limite può non esistere. Per le funzioni monotone, invece, l'esistenza dei limiti unilateri è garantita, e il loro valore si legge direttamente sull'insieme dei valori assunti dalla funzione. Per le definizioni di funzione crescente e decrescente si veda la sezione [Funzioni limitate e monotone, massimi e minimi](ref:chapter/3#p5). Per l'estremo superiore e inferiore si veda [Maggioranti, minoranti ed estremi](ref:chapter/1#p5).

### Enunciato

**Teorema 4.6** (limiti unilateri delle funzioni monotone). Sia $f$ definita e monotona in un intorno destro (rispettivamente sinistro) di $x_0$. Allora esiste il limite destro (rispettivamente sinistro) di $f$ in $x_0$, finito o infinito, ed è un estremo superiore o inferiore dei valori di $f$ su quell'intorno.

Più precisamente, sia $f$ monotona in $\rbrack x_0-r,x_0\lbrack $ e in $\rbrack x_0,x_0+r\lbrack $, con $r>0$. Se $f$ è crescente si ha

$$\lim_{x\to x_0^-} f(x)=\sup_{x\in\,\rbrack x_0-r,\,x_0\lbrack } f(x),\qquad \lim_{x\to x_0^+} f(x)=\inf_{x\in\,\rbrack x_0,\,x_0+r\lbrack } f(x).$$

Se $f$ è decrescente, $\sup$ e $\inf$ si scambiano.

Il motivo è intuitivo. Avvicinandosi a $x_0$ da sinistra, una funzione crescente non può che salire. I suoi valori o restano limitati, e allora si accumulano sul loro estremo superiore, oppure crescono senza limite verso $+\infty$. Il caso $\sup=+\infty$ è incluso, perché gli estremi sono presi in $\mathbb{R}^*$. Lo stesso vale per $x_0=\pm\infty$ con gli intorni di $\pm\infty$.

**Dimostrazione** (limite destro, $f$ crescente). Sia $\ell=\inf_{\rbrack x_0,x_0+r\lbrack } f$.

- Se $\ell\in\mathbb{R}$, fissiamo $\varepsilon>0$. Per la caratterizzazione dell'estremo inferiore esiste $x_1\in\,\rbrack x_0,x_0+r\lbrack $ con $f(x_1)<\ell+\varepsilon$. Per $x_0<x<x_1$ la monotonia dà $\ell\le f(x)\le f(x_1)<\ell+\varepsilon$, cioè $|f(x)-\ell|<\varepsilon$ in un intorno destro di $x_0$.
- Se $\ell=-\infty$, per ogni $M$ esiste $x_1$ con $f(x_1)<M$. Per $x_0<x<x_1$ si ha $f(x)\le f(x_1)<M$.

Gli altri casi sono analoghi. □

### Discontinuità delle funzioni monotone

**Corollario 4.2.** Sia $f$ crescente in un intervallo $I$ e sia $x_0$ interno a $I$. Allora esistono finiti i limiti $\ell_- = \lim_{x\to x_0^-}f(x)$ e $\ell_+ = \lim_{x\to x_0^+}f(x)$, e vale

$$\ell_-\le f(x_0)\le \ell_+.$$

Di conseguenza $f$ è continua in $x_0$ se e solo se $\ell_- = \ell_+$. Se invece $\ell_- < \ell_+$, la discontinuità in $x_0$ è di prima specie, cioè di salto. Le discontinuità eliminabili e quelle di seconda specie non possono quindi comparire. Se $f$ è decrescente, si ha invece $\ell_-\ge f(x_0)\ge\ell_+$; in questo caso la discontinuità è di salto quando $\ell_->\ell_+$. La continuità equivale ancora a $\ell_- = \ell_+$.

Per $x<x_0$ si ha $f(x)\le f(x_0)$, quindi $f(x_0)$ è un maggiorante dei valori a sinistra e $\ell_- = \sup\le f(x_0)$. Analogamente $f(x_0)$ è un minorante dei valori a destra e dunque $f(x_0)\le\inf = \ell_+$. I limiti sono perciò finiti. Se $\ell_- = \ell_+$ il teorema del confronto dà $\lim_{x\to x_0}f(x)=f(x_0)$.

Agli estremi dell'intervallo si considera solo il limite unilatero disponibile, che esiste comunque per il teorema.

:::image{src="assets/212dc628-monotona-salto.svg" alt="Grafico di una funzione crescente con un salto in x = 1" caption="Fig. 4.4 — Funzione crescente con salto in x = 1: il limite sinistro è 1, il limite destro è 2 e il valore f(1) = 1,5 sta in mezzo."}
:::

**Esempio 4.7.** Sia $f(x)=x$ per $x<1$, $f(1)=\tfrac32$ e $f(x)=x+1$ per $x>1$. La funzione è crescente su $\mathbb{R}$. I limiti unilateri sono

$$\lim_{x\to1^-}f(x)=\sup_{x<1}x=1,\qquad \lim_{x\to1^+}f(x)=\inf_{x>1}(x+1)=2.$$

Vale $1\le f(1)=\tfrac32\le 2$, come previsto dal corollario. Poiché $1\ne2$, in $x=1$ c'è una discontinuità di salto di ampiezza $2-1=1$.

### Errori tipici

**Errore tipico 4.5.** Credere che il limite di una funzione monotone sia $f(x_0)$. Il teorema riguarda i limiti unilateri, che sono estremi dei valori vicini a $x_0$ e non coincidono necessariamente con $f(x_0)$. Si veda il valore $f(1)=\tfrac32$ nell'esempio.

**Errore tipico 4.6.** Dimenticare l'ipotesi di monotonia in un intorno del punto. Se $f$ è monotona solo a tratti, il teorema si applica separatamente su ciascun tratto vicino a $x_0$. Per $\sin(1/x)$ vicino a $0$ non si può applicare, e infatti i limiti non esistono.

**Errore tipico 4.7.** Concludere che una funzione monotona è continua, oppure che il teorema vieti i salti. Il teorema esclude soltanto le discontinuità diverse dal salto.

Per la classificazione generale dei punti di discontinuità si veda [Punti di discontinuità](ref:chapter/5#p3).

## p6 | Algebra dei limiti e forme indeterminate

Dopo aver definito il limite e dimostrato i teoremi di unicità, permanenza del segno e confronto, serve uno strumento per **calcolare** i limiti senza tornare ogni volta alla definizione. Questo strumento è l'algebra dei limiti: se due funzioni hanno limite, anche la loro somma, il prodotto e il quoziente lo hanno, e il limite si ottiene operando sui limiti. Il calcolo ha però dei punti deboli: in alcuni casi i limiti di $f$ e $g$ non bastano a determinare quello di $f+g$, $f\cdot g$ o $f/g$. Sono le **forme indeterminate**.

### Teoremi sull'algebra dei limiti

**Teorema 4.7** (algebra dei limiti). Siano $f,g: A\to\mathbb{R}$, con $A\subseteq\mathbb{R}$, e sia $x_0\in\mathbb{R}\cup\{-\infty,+\infty\}$ un punto di accumulazione di $A$. Supponiamo che esistano

$$
\lim_{x\to x_0} f(x)=\ell_1,\qquad \lim_{x\to x_0} g(x)=\ell_2,\qquad \ell_1,\ell_2\in\mathbb{R}^*.
$$

Allora, **purché le operazioni a destra abbiano senso in $\mathbb{R}^*$**, valgono:

:::formula{id="4.7" label="Limite di somma e prodotto"}
$$\lim_{x\to x_0}\big(f(x)+g(x)\big)=\ell_1+\ell_2,\qquad \lim_{x\to x_0}\big(f(x)\cdot g(x)\big)=\ell_1\cdot\ell_2$$
:::

:::formula{id="4.8" label="Limite del quoziente"}
$$\lim_{x\to x_0}\frac{f(x)}{g(x)}=\frac{\ell_1}{\ell_2}\qquad(\ell_2\neq 0)$$
:::

Per il quoziente si richiede inoltre $\ell_2\ne0$. Per $\ell_2=0$ si veda più avanti. La dimostrazione, per $\ell_1,\ell_2$ finiti, si fa con la definizione di limite e la disuguaglianza triangolare. Non la riportiamo, perché il programma non la richiede.

Che cosa significa "avere senso in $\mathbb{R}^*$"? Nei reali estesi si usano le convenzioni seguenti, con $\ell\in\mathbb{R}$:

- $\ell+(\pm\infty)=\pm\infty$, $\ (+\infty)+(+\infty)=+\infty$, $\ (-\infty)+(-\infty)=-\infty$;
- $\ell\cdot(\pm\infty)=\pm\infty$ se $\ell>0$, $\ \mp\infty$ se $\ell<0$; $\ (\pm\infty)\cdot(\pm\infty)$ si calcola con la regola dei segni;
- $\ell/(\pm\infty)=0$ per $\ell\in\mathbb{R}$, e $\pm\infty/\ell=\pm\infty$ (con la regola dei segni) se $\ell\neq0$;
- $\ell/0$ con $\ell\neq0$ vale $\infty$, ma solo con il segno: il limite è $+\infty$ o $-\infty$ se $g\to0$ **con segno costante** (per esempio $g\to0^+$) e il numeratore tende a $\ell\ne0$.

Sono utili anche due fatti sul prodotto con infinitesimi o infiniti: se $f\to0$ e $g$ è limitata allora $f\cdot g\to0$; se $f\to+\infty$ e $\inf g>0$ allora $f\cdot g\to+\infty$.

### Forme indeterminate

Le operazioni che **non** hanno senso in $\mathbb{R}^*$ sono le forme indeterminate:

$$+\infty-\infty,\qquad 0\cdot\infty,\qquad \frac{0}{0},\qquad \frac{\infty}{\infty},\qquad 1^{\infty},\qquad 0^0,\qquad \infty^0.$$

Le ultime tre si ottengono dalle potenze $f^g=e^{g\log f}$ e si riconducono a $0\cdot\infty$. Anche la forma $\frac{0}{0}$ compare esplicitamente nelle fonti.

"Indeterminata" non vuol dire "il limite non esiste". Vuol dire che i soli limiti di $f$ e $g$ non bastano: bisogna studiare le funzioni. Con $x\to+\infty$ si ha infatti:

- $x^2-x\to+\infty-\infty$ e il limite vale $+\infty$;
- $x-x^2$ ha la stessa forma e il limite vale $-\infty$;
- $(x+3)-x$ ha la stessa forma e il limite vale $3$.

**Errore tipico 4.8.** Scrivere "$\infty-\infty=0$" oppure "$\frac{\infty}{\infty}=1$" oppure "$1^\infty=1$". Sono tutte forme indeterminate, e il loro valore dipende dalle funzioni coinvolte.

Un'altra trappola: $\frac{1}{0}$ **non** è una forma indeterminata, ma bisogna controllare il segno di $g$. Per esempio $\frac1x$ per $x\to0$ non ha limite (i limiti laterali sono $\pm\infty$), mentre $\frac1{x^2}\to+\infty$.

### Funzioni razionali

Per una funzione razionale $\frac{P(x)}{Q(x)}$ si distinguono due casi.

**Caso $x\to\pm\infty$.** Si raccoglie al numeratore e al denominatore la potenza di grado massimo. Se $P$ ha grado $p$ e coefficiente direttivo $a$, e $Q$ ha grado $q$ e coefficiente direttivo $b$, il limite è $a/b$ se $p=q$, è $0$ se $p<q$, ed è $\pm\infty$ se $p>q$, con segno dato dai coefficienti e dal segno di $x^{p-q}$. Questo si basa sul principio di eliminazione dei termini trascurabili, che è trattato in dettaglio in [Infiniti e infinitesimi](ref:chapter/6#p3).

**Esempio 4.8.** Calcoliamo $\displaystyle\lim_{x\to+\infty}\frac{3x^2-x+1}{2x^2+5}$. È della forma $\frac{\infty}{\infty}$. Raccogliendo $x^2$:

$$
\frac{x^2\left(3-\frac1x+\frac1{x^2}\right)}{x^2\left(2+\frac5{x^2}\right)}=\frac{3-\frac1x+\frac1{x^2}}{2+\frac5{x^2}}\longrightarrow\frac32.
$$

Qui l'ultimo passaggio usa il teorema sull'algebra dei limiti, perché numeratore e denominatore hanno ora limiti finiti con denominatore non nullo.

**Caso $x\to x_0\in\mathbb{R}$.** Se $Q(x_0)\neq0$, il limite è $\frac{P(x_0)}{Q(x_0)}$. Se $P(x_0)=Q(x_0)=0$ (forma $\frac00$) si **scompone** il numeratore e il denominatore, perché entrambi contengono il fattore $(x-x_0)$, e si semplifica.

**Esempio 4.9.** Calcoliamo $\displaystyle\lim_{x\to1}\frac{x^2-1}{x-1}$. Per $x\neq1$:

$$
\frac{x^2-1}{x-1}=\frac{(x-1)(x+1)}{x-1}=x+1,
$$

quindi il limite vale $1+1=2$. La semplificazione è lecita perché nel limite si considera sempre $x\neq x_0$.

**Esempio 4.10.** Calcoliamo $\displaystyle\lim_{x\to2}\frac{x+1}{(x-2)^2}$. Il numeratore tende a $3\ne0$ e il denominatore tende a $0$ restando positivo: il limite è $+\infty$. Invece $\displaystyle\lim_{x\to2}\frac{x+1}{x-2}$ non esiste, perché il limite destro è $+\infty$ e il sinistro è $-\infty$.

### Funzioni irrazionali

Con le radici le forme indeterminate si risolvono di solito in due modi.

1. **Razionalizzazione.** Per $\sqrt{a}-\sqrt{b}$ si moltiplica e si divide per $\sqrt a+\sqrt b$, usando $(\sqrt a-\sqrt b)(\sqrt a+\sqrt b)=a-b$.
2. **Raccoglimento del termine dominante** sotto radice, ricordando che $\sqrt{x^2}=|x|$.

**Esempio 4.11.** Calcoliamo $\displaystyle\lim_{x\to+\infty}\left(\sqrt{x^2+x}-x\right)$, che è della forma $+\infty-\infty$. Razionalizziamo:

$$
\sqrt{x^2+x}-x=\frac{(x^2+x)-x^2}{\sqrt{x^2+x}+x}=\frac{x}{\sqrt{x^2+x}+x}.
$$

Per $x>0$ si ha $\sqrt{x^2+x}=x\sqrt{1+\frac1x}$, quindi

$$
\frac{x}{x\sqrt{1+\frac1x}+x}=\frac{1}{\sqrt{1+\frac1x}+1}\longrightarrow\frac{1}{1+1}=\frac12.
$$

**Esempio 4.12.** Calcoliamo $\displaystyle\lim_{x\to-\infty}\frac{\sqrt{x^2+1}}{x}$. Per $x<0$ vale $\sqrt{x^2+1}=|x|\sqrt{1+\frac1{x^2}}=-x\sqrt{1+\frac1{x^2}}$. Quindi

$$
\frac{\sqrt{x^2+1}}{x}=-\sqrt{1+\frac1{x^2}}\longrightarrow-1.
$$

**Errore tipico 4.9.** Scrivere $\sqrt{x^2}=x$ quando $x\to-\infty$. La formula corretta è $\sqrt{x^2}=|x|$, che per $x<0$ vale $-x$. Dimenticarlo cambia il segno del risultato.

### Metodo riassuntivo

Per calcolare un limite:

1. si sostituisce il valore limite e si controlla se compare una forma indeterminata;
2. se non compare, si applica l'algebra dei limiti e si ha il risultato (attenzione ai segni quando il denominatore tende a $0$);
3. se compare, si trasforma l'espressione (scomposizione, razionalizzazione, raccoglimento del termine dominante, termini trascurabili) fino a eliminarla;
4. per altre tecniche si usano i [limiti notevoli](ref:chapter/6#p2) e il [teorema di de l'Hôpital](ref:chapter/7#p5).

**Errore tipico 4.10.** Calcolare "a pezzi" una forma indeterminata, per esempio sostituire $x\to\infty$ solo in una parte di un'espressione e lasciare il resto. L'algebra dei limiti si applica solo quando **ogni** limite esiste e l'operazione ha senso.

## p7 | Successioni e sottosuccessioni

### Successioni: definizione e comportamento al limite

Una **successione** è un caso particolare di funzione: si tratta di una funzione definita non su un generico sottoinsieme di $\mathbb{R}$, ma sull'insieme dei numeri naturali.

:::formula{id="4.9" label="Definizione di successione"}
$$(a_n)_{n\in\mathbb{N}} \quad\text{è una funzione}\quad a: \mathbb{N} \to \mathbb{R}, \qquad a(n) = a_n$$
:::

Il valore $a_n = a(n)$ si chiama **termine $n$-esimo** della successione. Spesso una successione viene data tramite una formula esplicita (ad esempio $a_n = \frac{1}{n}$ per $n\in\mathbb{N}^+$) oppure tramite una legge ricorsiva, in cui $a_{n+1}$ è espresso in funzione di $a_n$ (e, eventualmente, di qualche termine precedente). Per definire l'esempio su tutta $\mathbb{N}$, occorre assegnare separatamente $a_0$.

Poiché $+\infty$ è l'unico punto di accumulazione di $\mathbb{N}$ in $\mathbb{R}^*$, l'unico limite sensato per una successione è quello per $n \to +\infty$; per questo motivo si scrive semplicemente $\lim_n a_n$ o $a_n \to l$, omettendo l'indicazione $n \to +\infty$.

:::formula{id="4.10" label="Classificazione del limite di una successione"}
$$a_n \to l \in \mathbb{R}^* \quad\Longrightarrow\quad
\begin{cases}
\text{convergente} & \text{se } l \in \mathbb{R} \\
\text{infinitesima} & \text{se } l = 0 \\
\text{divergente positiva} & \text{se } l = +\infty \\
\text{divergente negativa} & \text{se } l = -\infty
\end{cases}$$
:::

Quando una successione non converge né diverge (non ammette limite), si dice che è **oscillante**.

Nello studio delle successioni è utile distinguere tra proprietà che valgono per *quasi tutti* i termini e proprietà che si verificano solo *a tratti*.

:::formula{id="4.11" label="Proprietà definitiva e frequente"}
$$\begin{aligned}
&\text{una proprietà vale \emph{definitivamente} per } (a_n) \iff \exists N \in \mathbb{N} \text{ tale che valga } \forall n \ge N \\
&\text{una proprietà vale \emph{frequentemente} per } (a_n) \iff \forall N \in \mathbb{N}\ \exists n \ge N \text{ per cui vale}
\end{aligned}$$
:::

Queste nozioni permettono di enunciare in modo compatto, ad esempio, la definizione di successione convergente: $a_n \to l$ se e solo se per ogni intorno $I$ di $l$ si ha $a_n \in I$ definitivamente, in perfetta coerenza con la [definizione di limite](ref:chapter/4#p3) già vista per le funzioni.

Tutti i teoremi sui limiti dimostrati per le funzioni — unicità, permanenza del segno, confronto — valgono senza modifiche per le successioni, pensandole come funzioni di dominio $\mathbb{N}$ con $x_0 = +\infty$; non è dunque necessario ridimostrarli (si veda [Teoremi sui limiti](ref:chapter/4#p4)).

### Successioni monotone

Una classe di successioni particolarmente importante, perché il loro comportamento al limite è sempre determinato, è quella delle successioni monotone.

:::formula{id="4.12" label="Successione crescente e decrescente"}
$$\begin{aligned}
(a_n) \text{ è crescente} &\iff a_n \le a_{n+1} \quad \forall n \in \mathbb{N} \\
(a_n) \text{ è decrescente} &\iff a_n \ge a_{n+1} \quad \forall n \in \mathbb{N}
\end{aligned}$$
:::

Se le disuguaglianze sono strette si parla di monotonia in senso stretto.

**Teorema 4.8 (limite delle successioni monotone).** Sia $(a_n)$ una successione monotona. Allora $(a_n)$ ammette limite (finito o infinito) e

:::formula{id="4.13" label="Limite di una successione monotona"}
$$\lim_{n\to+\infty} a_n =
\begin{cases}
\sup_{n\in\mathbb{N}} a_n & \text{se } (a_n) \text{ è crescente} \\
\inf_{n\in\mathbb{N}} a_n & \text{se } (a_n) \text{ è decrescente}
\end{cases}$$
:::

In particolare, se $(a_n)$ è crescente e superiormente limitata, il limite è finito e coincide con l'estremo superiore dell'insieme dei valori $\{a_n : n \in \mathbb{N}\}$, grazie al [principio dell'estremo superiore](ref:chapter/1#p6); se invece non è limitata superiormente, $a_n \to +\infty$. Il caso decrescente è analogo. Questo risultato è il caso particolare, per $x_0 = +\infty$, del teorema sul limite delle funzioni monotone.

**Esempio 4.13.** La successione $a_n = \left(1 + \frac{1}{n}\right)^n$, definita per $n\in\mathbb{N}^+$, si dimostra essere crescente e superiormente limitata; per il Teorema 4.8 essa ammette dunque limite finito, che si definisce come il numero $e$:

$$\lim_{n\to+\infty} \left(1+\frac{1}{n}\right)^n = e.$$

Questo limite di successione riguarda soltanto valori agli indici interi e, da solo, non implica i corrispondenti limiti per una variabile reale. Per passare dai limiti notevoli delle successioni a quelli delle funzioni occorrono dimostrazioni specifiche, che si trovano nella sezione [Limiti notevoli](ref:chapter/6#p2).

**Errore tipico 4.11.** Molti studenti credono che una successione monotona ma non limitata non abbia limite: in realtà il Teorema 4.8 garantisce *sempre* l'esistenza del limite per una successione monotona, eventualmente infinito. Ciò che il teorema non garantisce, in generale, è la finitezza del limite.

### Sottosuccessioni

Data una successione $(a_n)$, si può selezionare un sottoinsieme infinito dei suoi termini, rispettando l'ordine originario: si ottiene così una **sottosuccessione**.

:::formula{id="4.14" label="Sottosuccessione"}
$$\text{Sia } (n_k)_{k\in\mathbb{N}} \text{ strettamente crescente in } \mathbb{N}. \quad (a_{n_k})_{k\in\mathbb{N}} \text{ è detta sottosuccessione di } (a_n)_{n\in\mathbb{N}}.$$
:::

Intuitivamente, una sottosuccessione "scarta" alcuni termini della successione originaria senza alterare l'ordine dei rimanenti; ad esempio $(a_{2k})_k$ è la sottosuccessione dei termini di indice pari.

**Proposizione 4.1.** Se $a_n \to l \in \mathbb{R}^*$, allora ogni sottosuccessione $(a_{n_k})_k$ estratta da $(a_n)$ converge allo stesso limite: $a_{n_k} \to l$.

Questo fatto è lo strumento chiave per dimostrare che una successione **non** ammette limite: basta esibire due sottosuccessioni che convergono a limiti diversi, oppure una sola sottosuccessione che non ha limite.

**Esempio 4.14 (non esistenza del limite).** Consideriamo $a_n = (-1)^n$. La sottosuccessione dei termini di indice pari è $a_{2k} = (-1)^{2k} = 1 \to 1$, mentre la sottosuccessione dei termini di indice dispari è $a_{2k+1} = (-1)^{2k+1} = -1 \to -1$. Poiché le due sottosuccessioni convergono a limiti distinti ($1 \ne -1$), per la Proposizione 4.1 la successione $(a_n)$ non può ammettere limite.

Lo stesso principio vale per le funzioni: se $f(x) = \sin(1/x)$ per $x \to 0$, scegliendo $x_n = \frac{1}{2n\pi}$ per $n\in\mathbb{N}^+$ si ottiene $f(x_n) = 0 \to 0$, mentre scegliendo $y_n = \frac{1}{2n\pi + \pi/2}$ per $n\in\mathbb{N}^+$ si ottiene $f(y_n) = 1 \to 1$: dunque $\lim_{x\to 0} \sin(1/x)$ non esiste. Questa equivalenza è garantita dal teorema seguente, che lega limiti di funzione e limiti di successione.

**Teorema 4.9 (caratterizzazione sequenziale del limite).** Sia $f: \operatorname{dom} f \to \mathbb{R}$ e sia $x_0$ punto di accumulazione di $\operatorname{dom} f$. Allora

:::formula{id="4.15" label="Caratterizzazione sequenziale del limite"}
$$\lim_{x\to x_0} f(x) = l \iff \text{per ogni successione } (x_n) \text{ con } x_n \in \operatorname{dom} f \setminus \{x_0\},\ x_n \to x_0,\ \text{si ha } f(x_n) \to l.$$
:::

In particolare, se si trovano due successioni $x_n \to x_0$ e $y_n \to x_0$ tali che $f(x_n)$ e $f(y_n)$ convergono a limiti diversi, allora $\lim_{x\to x_0} f(x)$ non esiste: è esattamente questa l'idea usata nell'esempio con $\sin(1/x)$.

### Il teorema di Bolzano-Weierstrass

Non ogni successione ammette limite, ma si può sempre dire qualcosa sulle sue sottosuccessioni.

**Teorema 4.10 (estrazione monotona).** Ogni successione $(a_n)$ a valori reali possiede una sottosuccessione monotona.

**Teorema 4.11 (Bolzano-Weierstrass).** Ogni successione limitata $(a_n)$ possiede una sottosuccessione convergente.

La dimostrazione combina i due risultati: per il Teorema 4.10 esiste una sottosuccessione $(a_{n_k})$ monotona; essendo $(a_n)$ limitata, anche $(a_{n_k})$ lo è, e per il Teorema 4.8 una successione monotona e limitata converge a un limite finito. $\square$

Il teorema di Bolzano-Weierstrass è utile quando si sa che una successione è limitata e si vuole garantire l'esistenza di una sottosuccessione convergente, senza determinarne il limite. Se l'insieme dei valori della successione è anche infinito, la sua limitatezza garantisce l'esistenza di un punto di accumulazione; un insieme limitato con un solo valore, invece, non ne ha.

**Errore tipico 4.12.** Il teorema di Bolzano-Weierstrass garantisce l'esistenza di *una* sottosuccessione convergente, non la convergenza della successione intera: una successione limitata può benissimo essere oscillante, come $(-1)^n$, che è limitata ma non converge, pur avendo (ovviamente) sottosuccessioni convergenti (quella dei pari e quella dei dispari).

## p8 | Come viene chiesto all'esame

Delle 83 sessioni d'esame passate, 32 contengono almeno una domanda sugli argomenti di questo capitolo. Dall'elenco emergono due situazioni ricorrenti. La prima è il calcolo dei limiti agli estremi del dominio, che è il punto (a) dell'esercizio di studio di funzione. La seconda è l'esercizio teorico, che chiede di enunciare e usare un teorema del confronto. Le domande teoriche riguardano quasi sempre limiti, monotonia e confronto, e spesso chiedono di dimostrare o di smentire un'affermazione.

### Confronto e carabinieri: enunciare, dimostrare, applicare

**Cosa chiede l'esame.** Di solito è il secondo esercizio della prova e ha tre punti: enunciare un teorema del confronto, usarlo per dimostrare una proprietà di una funzione data per disuguaglianza, calcolare un limite con la mantissa o con una funzione limitata. Il teorema è quasi sempre quello dei carabinieri o una sua variante con limite finito o $+\infty$.

**Metodo.**

1. Scrivi l'enunciato con tutte le ipotesi: due funzioni (o successioni) con lo stesso limite $\ell$ e una terza compresa tra loro almeno in un intorno del punto. La terza funzione ha allora lo stesso limite $\ell$. Il teorema è nella sezione [Teoremi sui limiti](ref:chapter/4#p4).
2. Traduci l'ipotesi data in una doppia disuguaglianza. Per esempio $|g(x)|\le h(x)$ equivale a $-h(x)\le g(x)\le h(x)$.
3. Calcola i limiti dei due estremi e, se coincidono, concludi.
4. Se l'esercizio chiede la continuità o la derivabilità in un punto $x_0$, ricorda che l'ipotesi fornisce anche il valore in $x_0$. Per la derivabilità porta il rapporto incrementale in modulo e maggioralo.
5. Se uno dei due fattori è limitato (come $\cos x$ o la mantissa $M(x)\in\lbrack 0,1\lbrack $) e l'altro tende a $0$, i carabinieri danno limite $0$. Se invece il termine limitato si somma a uno che tende a $+\infty$, basta il confronto con limite infinito.

**Errori tipici.**

- Usare il teorema senza verificare che i due limiti esterni siano uguali.
- Passare al limite in una disuguaglianza stretta, ottenendo ancora una disuguaglianza stretta.
- Dimenticare che il risultato dipende dalle disuguaglianze valide in un intorno e non solo in un punto.
- Scrivere "$\lim f\cdot g=0\cdot$ limitata" senza giustificare la limitatezza del secondo fattore.

**Esempi.**

- Esame del 22 gennaio 2025 - turno 1 - versione 4, esercizio 2: dopo aver enunciato i carabinieri, da $|g(x)|\le|x-2|$ si ottiene $g(2)=0$ e $g(x)\to0$, quindi $g$ è continua in $2$. Da $|g(x)|\le(x-2)^2$ si ha $\left|\frac{g(x)-g(2)}{x-2}\right|\le|x-2|\to0$, quindi $g'(2)=0$. Le altre versioni dello stesso esercizio cambiano soltanto il punto.
- Esame del 31 gennaio 2018 - Io turno, esercizio 2, versione B: si mostra che $f(x)+M(x)\to+\infty$ se $f\to+\infty$. Basta osservare che $M(x)\ge0$, quindi $f(x)+M(x)\ge f(x)$, e applicare il confronto con limite infinito.
- Esame del 1 febbraio 2017 - IIo turno, esercizio 2: se $f'(x)<-3$ per ogni $x$, il teorema di Lagrange su $\lbrack 0,x\rbrack $ dà $f(x)<f(0)-3x$. Il confronto con $-3x\to-\infty$ conclude.

### Oscillazioni, mantissa e non esistenza del limite

**Cosa chiede l'esame.** Una funzione periodica come la mantissa $M(kx)$, oppure un fattore del tipo $\sin x$ o $\cos x$ moltiplicato per una funzione che ha limite. Si chiede di dimostrare che un limite non esiste, oppure di calcolare "se esistono" alcuni limiti. In quest'ultimo caso almeno uno non esiste.

**Metodo.**

1. Se devi provare che non esiste $\lim_{x\to+\infty}M(kx)$, con $k>0$, scegli due successioni $x_n\to+\infty$ e $y_n\to+\infty$ su cui $M(kx)$ vale costantemente valori diversi. Per esempio $x_n=n/k$ dà $M(kx_n)=0$, mentre $y_n=(n+\tfrac12)/k$ dà $M(ky_n)=\tfrac12$.
2. Concludi con la caratterizzazione sequenziale e con l'unicità del limite. Se il limite esistesse, tutte le successioni dovrebbero avere lo stesso limite. Gli strumenti sono in [Successioni e sottosuccessioni](ref:chapter/4#p7) e [Teoremi sui limiti](ref:chapter/4#p4).
3. Per un limite come $x^6M(2x)+\sqrt[3]{x}$ non cercare l'oscillazione. Poiché $M\ge0$, la somma è maggiore o uguale a $\sqrt[3]{x}\to+\infty$, quindi il limite è $+\infty$.
4. Per un quoziente come $\dfrac{x(\sin x-2)}{x-2}$ separa il fattore che converge, $\frac{x}{x-2}\to1$, dal fattore oscillante. Se il fattore oscillante non ha limite, nemmeno il prodotto ce l'ha. Lo si dimostra con due successioni lungo le quali $\sin x$ assume valori diversi, per esempio $x_n=\tfrac{\pi}{2}+2n\pi$ e $y_n=-\tfrac{\pi}{2}+2n\pi$ (con segno adeguato per $x\to-\infty$).

**Errori tipici.**

- Dire che un limite "non esiste perché oscilla" senza esibire le due successioni.
- Applicare l'algebra dei limiti a un fattore privo di limite.
- Scegliere due successioni per cui i valori della funzione hanno lo stesso limite non prova la non esistenza del limite.
- Dimenticare che $-1\le\sin x\le1$ non basta se l'altro fattore non tende a $0$.

**Esempi.**

- Esame del 22 gennaio 2025 - turno 2 - versione 1, esercizio 2: la domanda è la definizione di funzione periodica, poi la non esistenza di $\lim_{x\to+\infty}M(2x)$ con le successioni $n/2$ e $(n+\tfrac12)/2$. Infine un limite che si risolve per confronto e uno senza limite per la presenza di $\sin x-2$.
- Esame del 31 gennaio 2018 - Io turno, esercizio 2, versione A: richiede il confronto per limite finito e un quoziente con $M(4^{-x})$. Per $x\to-\infty$ l'argomento $4^{-x}\to+\infty$ e il quoziente va studiato con il confronto, mentre per $x\to+\infty$ l'argomento tende a $0$ e il comportamento è diverso. Vanno quindi distinti i due casi.

### Limiti agli estremi del dominio nello studio di funzione

**Cosa chiede l'esame.** Il punto (a) dell'esercizio 1 (9 punti) chiede dominio, simmetrie, limiti agli estremi del dominio e asintoti. Compare in tutte le sessioni dal 2023 al 2025 presenti nell'elenco. Le funzioni contengono esponenziali, radici, valori assoluti o logaritmi.

**Metodo.**

1. Determina il dominio e individua gli estremi, finiti e infiniti, in cui servono i limiti. Per le funzioni definite a tratti, studia a parte ogni ramo.
2. Semplifica prima di calcolare: per esempio $e^{\frac12\log x}=\sqrt{x}$ per $x>0$, oppure $|x|=x$ o $-x$ a seconda del segno.
3. Calcola ogni limite con l'algebra dei limiti e riconosci le forme indeterminate ([Algebra dei limiti e forme indeterminate](ref:chapter/4#p6)). Se compaiono radici con differenza, razionalizza.
4. Quando serve confrontare esponenziali, potenze e logaritmi, usa la gerarchia degli infiniti e i confronti tra funzioni studiati nella sezione [Infiniti e infinitesimi](ref:chapter/6#p3).
5. Nei punti in cui il comportamento a destra e a sinistra differisce (valori assoluti, $e^{1/x}$, denominatori che si annullano) calcola i due limiti unilateri separatamente ([Definizione di limite](ref:chapter/4#p3)).
6. Per individuare tutti gli asintoti orizzontali, studia separatamente i limiti per $x\to-\infty$ e per $x\to+\infty$. Ogni limite finito in uno di questi versi dà un asintoto orizzontale da quel lato; ogni limite infinito in un punto finito dà un asintoto verticale.

**Errori tipici.**

- Scambiare $\sqrt{x^2}$ con $x$ invece di $|x|$, specie per $x\to-\infty$.
- Lasciare una forma $+\infty-\infty$ senza razionalizzare.
- Calcolare solo il limite bilatero in un punto dove i limiti unilateri differiscono.
- Considerare un asintoto orizzontale a $-\infty$ sufficiente per individuare tutti gli asintoti orizzontali senza studiare il limite a $+\infty$.

**Esempi.**

- Esame del 25 gennaio 2023 - turno 1, esercizio 1: con $f(x)=\sqrt{x^2+3x}-|x|$, il dominio è $\rbrack -\infty,-3\rbrack \cup\lbrack 0,+\infty\lbrack $. Per $x\to+\infty$ si razionalizza e si ottiene $\frac{3x}{\sqrt{x^2+3x}+x}\to\frac32$. Per $x\to-\infty$ si ha $|x|=-x$ e il limite vale $-\frac32$.
- Esame dell'11 aprile 2024, esercizio 1: con $\arctan\frac{|x|+1}{|x|-1}$ i limiti a $\pm\infty$ valgono $\frac{\pi}{4}$. Vicino a $x=\pm1$ i limiti unilateri danno $\pm\frac{\pi}{2}$ perché $|x|-1$ cambia segno.
- Esame del 21 giugno 2024 - turno U - versione 1, esercizio 1: la funzione è definita a tratti, con un ramo contenente $e^{-1/x}$ e un ramo nullo. L'esame richiede i limiti agli estremi e in $0$ ramo per ramo.
- Esame del 22 gennaio 2025 - turno 1 - versione 1, esercizio 1: per $f(x)=e^{-x/6}\sqrt[3]{x-3}$ il dominio è tutto $\mathbb{R}$. A $+\infty$ la gerarchia degli infiniti fa vincere l'esponenziale e dà l'asintoto $y=0$.

### Affermazioni vere o false su monotonia, limitatezza e successioni

**Cosa chiede l'esame.** Una proposizione da dimostrare o smentire, spesso con "vera o falsa?". Si usa quasi sempre il teorema sul limite delle funzioni o successioni monotone. In altri casi si cerca un controesempio o si studia una successione concreta.

**Metodo.**

1. Decidi per prima cosa se l'affermazione è plausibile. Una successione limitata non è convergente in generale; per una funzione monotona, il teorema garantisce il limite appropriato a un estremo dell'intervallo oppure il limite della successione per $n\to+\infty$.
2. Se è vera, scrivi le ipotesi e applica il teorema sul limite di una funzione o successione monotona. Per una successione monotona definita su tutti gli indici naturali, il limite per $n\to+\infty$ coincide con il suo estremo superiore se è crescente e con il suo estremo inferiore se è decrescente. Per una funzione monotona su un intervallo, il limite è l'estremo superiore o inferiore dei valori assunti secondo il verso di avvicinamento: una funzione crescente su $\rbrack a,b\lbrack $ ha limite destro in $a$ pari all'estremo inferiore e limite sinistro in $b$ pari all'estremo superiore; per una funzione decrescente vale il contrario. Si veda [Successioni e sottosuccessioni](ref:chapter/4#p7). Poi confronta con altri valori, per esempio con $f(1)$ o con un valore interno.
3. Se è falsa, costruisci un controesempio esplicito e verifica tutte le ipotesi. Spesso funziona $(-1)^n$ o una funzione come $1-x$.
4. Per la monotonia di una composizione, studia come cambiano le disuguaglianze: crescente seguita da decrescente dà decrescente.
5. Per una successione concreta, studia monotonia e limite, poi determina massimo, minimo o estremi dell'insieme dei valori.

**Errori tipici.**

- Pensare che una funzione positiva e decrescente abbia limite strettamente positivo: il limite può essere $0$.
- Affermare che il limite sia uguale al valore in un estremo, mentre il teorema dà solo una disuguaglianza.
- Confondere estremo inferiore e minimo, quando l'estremo non è raggiunto.
- Dimostrare con un solo esempio un'affermazione vera in generale.

**Esempi.**

- Esame del 28 gennaio 2016 - IIIo turno, esercizio 2: per ogni $f$ crescente su $\rbrack 0,1\rbrack $ si prova $\lim_{x\to1^-}f(x)\le f(1)$ usando il teorema di monotonia.
- Esame del 13 febbraio 2018, esercizio 2: per mostrare che $\lim_{x\to3^+}f(x)\ne+\infty$ con $f$ crescente su $\rbrack 3,5\lbrack $, osserva che il limite è l'estremo inferiore di $f$ su $\rbrack 3,5\lbrack $, che è minore o uguale a $f(4)$. Questo esclude che il limite sia $+\infty$, ma non ne prova la finitezza.
- Esame del 30 gennaio 2019 - Io turno, esercizio 2A: nella successione $a_n=\arctan\frac{2n+3}{n+1}$, l'argomento $2+\frac1{n+1}$ è decrescente, quindi la successione è decrescente. Il primo termine è il massimo, mentre l'estremo inferiore è il limite $\arctan2$, non raggiunto.
- Esame del 28 gennaio 2016 - IIo turno, esercizio 2: per smentire "una successione compresa fra $1$ e $3$ ha limite" basta $a_n=2+(-1)^n$ e le due sottosuccessioni di indice pari e dispari.

### Altri argomenti, in breve

Gli argomenti elencati compaiono con frequenza diversa: alcuni in una sola sessione, altri in più sessioni. Non richiedono un metodo dedicato.

- La definizione di o-piccolo e di ordine di infinito o infinitesimo rispetto a un campione ([Infiniti e infinitesimi](ref:chapter/6#p3)) appare in tre esercizi: Esame del 1 febbraio 2017 - Io turno, esercizio 2, Esame del 12 febbraio 2019 - Io turno, esercizio 2 (con anche la definizione di asintoto obliquo) ed Esame del 28 gennaio 2016 - IIo turno, esercizio 2.
- La limitatezza di una funzione moltiplicata per una che tende a $+\infty$ compare in Esame del 9 febbraio 2021, esercizio 2 (punto (a)).
- La definizione di continuità con il limite compare in Esame dell'11 febbraio 2020 - IIo turno, esercizio 2.
- L'esistenza del limite di $G(x)=\int_2^x g(t)\,dt$ per $g$ positiva, per monotonia, compare in Esame del 25 gennaio 2022 - Io turno, esercizio 2.

In tutti questi casi la tecnica è la stessa: scrivi la definizione con gli intorni e riconduci la domanda a un teorema già visto in questo capitolo.
