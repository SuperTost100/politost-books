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

- Ogni $x_0 \in \,\rbrack 0,1\lbrack \,$ è un punto interno ad $A$: basta scegliere $\delta < \min\{x_0, 1-x_0\}$ per avere $\,\rbrack x_0-\delta, x_0+\delta\lbrack \, \subseteq \,\rbrack 0,1\lbrack \, \subseteq A$.
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

### Teoremi del confronto

Il primo risultato permette di confrontare i limiti di due funzioni a partire da una disuguaglianza locale tra le funzioni stesse.

**Teorema 4.3 (primo teorema del confronto).** Siano $f, g : A \to \mathbb{R}$, con $A \subseteq \mathbb{R}$, e $x_0 \in \mathbb{R} \cup \{\pm\infty\}$ punto di accumulazione per $A$. Supponiamo che:

1. esista un intorno $I(x_0)$ tale che $f(x) \leq g(x)$ per ogni $x \in I(x_0) \cap A$;
2. esista $\lim_{x \to x_0} f(x) = l$;
3. esista $\lim_{x \to x_0} g(x) = m$.

Allora $l \leq m$.

*Dimostrazione (idea).* Supponiamo per assurdo che $l > m$. Esistono intorni disgiunti $J_l$ di $l$ e $J_m$ di $m$ tali che ogni elemento di $J_l$ sia maggiore di ogni elemento di $J_m$. Questo vale anche se uno o entrambi i limiti sono infiniti, scegliendo intervalli o semirette adeguati. Per la definizione dei due limiti e per l’ipotesi di confronto, esiste un intorno comune $U$ di $x_0$ in cui, per ogni $x \in A \cap U$ con $x \neq x_0$, si ha $f(x) \in J_l$, $g(x) \in J_m$ e $f(x) \leq g(x)$. Poiché $x_0$ è punto di accumulazione di $A$, tale intersezione contiene un punto $\bar{x} \neq x_0$; ma allora ogni elemento di $J_l$ è maggiore di ogni elemento di $J_m$, in contraddizione con $f(\bar{x}) \leq g(\bar{x})$. Pertanto $l \leq m$. $\square$

**Osservazione 4.3.** Il risultato vale anche se l'ipotesi è una disuguaglianza stretta $f(x) < g(x)$: la conclusione resta comunque $l \leq m$, mai $l < m$. Non si può in generale rafforzare la conclusione.

**Variante per i limiti infiniti.** Siano $f, g : A \to \mathbb{R}$ e $x_0$ come sopra, con $f(x) \leq g(x)$ in un intorno di $x_0$ (escluso al più $x_0$).

- Se $\lim_{x \to x_0} f(x) = +\infty$, allora anche $\lim_{x \to x_0} g(x) = +\infty$.
- Se $\lim_{x \to x_0} g(x) = -\infty$, allora anche $\lim_{x \to x_0} f(x) = -\infty$.

Questa variante è molto utile per stabilire limiti infiniti senza conoscere esplicitamente il valore della funzione più "difficile": basta minorarla (o maggiorarla) con una funzione più semplice che diverge.

**Esempio 4.5.** Confrontiamo $f(x) = \sin x + 10$ e $g(x) = e^{-x} + 100$ su tutto $\mathbb{R}$. Poiché $\sin x \leq 1$ e $e^{-x} \geq 0$, si ha $f(x) \leq 11 \leq 100 \leq g(x)$ per ogni $x \in \mathbb{R}$, quindi $f(x) \leq g(x)$ ovunque. Se entrambe ammettono limite per $x \to x_0$ (per qualunque $x_0$ fissato), il primo teorema del confronto garantisce che il limite di $f$ non supera mai quello di $g$.

Quando invece una funzione è compresa tra **due** funzioni che tendono allo stesso limite finito, si parla del teorema dei carabinieri.

**Teorema 4.4 (dei carabinieri, o secondo teorema del confronto).** Siano $A \subseteq \mathbb{R}$ non vuoto, $f, g, h : A \to \mathbb{R}$ e $x_0 \in \mathbb{R} \cup \{\pm\infty\}$ punto di accumulazione per $A$. Supponiamo che:

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

Questa tecnica è esattamente quella alla base della dimostrazione del [formula (6.6)](ref:formula/6.6), ripresa nella sezione sui [Limiti notevoli](ref:chapter/6#p2).

**Errore tipico 4.4.** Nell'applicare il teorema dei carabinieri si deve controllare che la disuguaglianza $f(x) \leq g(x) \leq h(x)$ valga davvero in un intorno di $x_0$ (eventualmente escluso $x_0$), non su tutto il dominio: basta che valga localmente. È inoltre indispensabile che i due limiti estremi coincidano; se $f$ e $h$ tendono a valori diversi, il teorema non si applica e non si può concludere nulla sul limite di $g$.

## p5 | Successioni e sottosuccessioni

### Successioni: definizione e comportamento al limite

Una **successione** è un caso particolare di funzione: si tratta di una funzione definita non su un generico sottoinsieme di $\mathbb{R}$, ma sull'insieme dei numeri naturali.

:::formula{id="4.7" label="Definizione di successione"}
$$(a_n)_{n\in\mathbb{N}} \quad\text{è una funzione}\quad a: \mathbb{N} \to \mathbb{R}, \qquad a(n) = a_n$$
:::

Il valore $a_n = a(n)$ si chiama **termine $n$-esimo** della successione. Spesso una successione viene data tramite una formula esplicita (ad esempio $a_n = \frac{1}{n}$ per $n\in\mathbb{N}^+$) oppure tramite una legge ricorsiva, in cui $a_{n+1}$ è espresso in funzione di $a_n$ (e, eventualmente, di qualche termine precedente). Per definire l'esempio su tutta $\mathbb{N}$, occorre assegnare separatamente $a_0$.

Poiché $+\infty$ è l'unico punto di accumulazione di $\mathbb{N}$ in $\mathbb{R}^*$, l'unico limite sensato per una successione è quello per $n \to +\infty$; per questo motivo si scrive semplicemente $\lim_n a_n$ o $a_n \to l$, omettendo l'indicazione $n \to +\infty$.

:::formula{id="4.8" label="Classificazione del limite di una successione"}
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

:::formula{id="4.9" label="Proprietà definitiva e frequente"}
$$\begin{aligned}
&\text{una proprietà vale \emph{definitivamente} per } (a_n) \iff \exists N \in \mathbb{N} \text{ tale che valga } \forall n \ge N \\
&\text{una proprietà vale \emph{frequentemente} per } (a_n) \iff \forall N \in \mathbb{N}\ \exists n \ge N \text{ per cui vale}
\end{aligned}$$
:::

Queste nozioni permettono di enunciare in modo compatto, ad esempio, la definizione di successione convergente: $a_n \to l$ se e solo se per ogni intorno $I$ di $l$ si ha $a_n \in I$ definitivamente, in perfetta coerenza con la [definizione di limite](ref:chapter/4#p3) già vista per le funzioni.

Tutti i teoremi sui limiti dimostrati per le funzioni — unicità, permanenza del segno, confronto — valgono senza modifiche per le successioni, pensandole come funzioni di dominio $\mathbb{N}$ con $x_0 = +\infty$; non è dunque necessario ridimostrarli (si veda [Teoremi sui limiti](ref:chapter/4#p4)).

### Successioni monotone

Una classe di successioni particolarmente importante, perché il loro comportamento al limite è sempre determinato, è quella delle successioni monotone.

:::formula{id="4.10" label="Successione crescente e decrescente"}
$$\begin{aligned}
(a_n) \text{ è crescente} &\iff a_n \le a_{n+1} \quad \forall n \in \mathbb{N} \\
(a_n) \text{ è decrescente} &\iff a_n \ge a_{n+1} \quad \forall n \in \mathbb{N}
\end{aligned}$$
:::

Se le disuguaglianze sono strette si parla di monotonia in senso stretto.

**Teorema 4.5 (limite delle successioni monotone).** Sia $(a_n)$ una successione monotona. Allora $(a_n)$ ammette limite (finito o infinito) e

:::formula{id="4.11" label="Limite di una successione monotona"}
$$\lim_{n\to+\infty} a_n =
\begin{cases}
\sup_{n\in\mathbb{N}} a_n & \text{se } (a_n) \text{ è crescente} \\
\inf_{n\in\mathbb{N}} a_n & \text{se } (a_n) \text{ è decrescente}
\end{cases}$$
:::

In particolare, se $(a_n)$ è crescente e superiormente limitata, il limite è finito e coincide con l'estremo superiore dell'insieme dei valori $\{a_n : n \in \mathbb{N}\}$, grazie al [principio dell'estremo superiore](ref:chapter/1#p6); se invece non è limitata superiormente, $a_n \to +\infty$. Il caso decrescente è analogo. Questo risultato è il caso particolare, per $x_0 = +\infty$, del teorema sul limite delle funzioni monotone.

**Esempio 4.7.** La successione $a_n = \left(1 + \frac{1}{n}\right)^n$, definita per $n\in\mathbb{N}^+$, si dimostra essere crescente e superiormente limitata; per il Teorema 4.5 essa ammette dunque limite finito, che si definisce come il numero $e$:

$$\lim_{n\to+\infty} \left(1+\frac{1}{n}\right)^n = e.$$

Questo limite di successione riguarda soltanto valori agli indici interi e, da solo, non implica i corrispondenti limiti per una variabile reale. Per passare dai limiti notevoli delle successioni a quelli delle funzioni occorrono dimostrazioni specifiche, che si trovano nella sezione [Limiti notevoli](ref:chapter/6#p2).

**Errore tipico 4.5.** Molti studenti credono che una successione monotona ma non limitata non abbia limite: in realtà il Teorema 4.5 garantisce *sempre* l'esistenza del limite per una successione monotona, eventualmente infinito. Ciò che il teorema non garantisce, in generale, è la finitezza del limite.

### Sottosuccessioni

Data una successione $(a_n)$, si può selezionare un sottoinsieme infinito dei suoi termini, rispettando l'ordine originario: si ottiene così una **sottosuccessione**.

:::formula{id="4.12" label="Sottosuccessione"}
$$\text{Sia } (n_k)_{k\in\mathbb{N}} \text{ strettamente crescente in } \mathbb{N}. \quad (a_{n_k})_{k\in\mathbb{N}} \text{ è detta sottosuccessione di } (a_n)_{n\in\mathbb{N}}.$$
:::

Intuitivamente, una sottosuccessione "scarta" alcuni termini della successione originaria senza alterare l'ordine dei rimanenti; ad esempio $(a_{2k})_k$ è la sottosuccessione dei termini di indice pari.

**Proposizione 4.1.** Se $a_n \to l \in \mathbb{R}^*$, allora ogni sottosuccessione $(a_{n_k})_k$ estratta da $(a_n)$ converge allo stesso limite: $a_{n_k} \to l$.

Questo fatto è lo strumento chiave per dimostrare che una successione **non** ammette limite: basta esibire due sottosuccessioni che convergono a limiti diversi, oppure una sola sottosuccessione che non ha limite.

**Esempio 4.8 (non esistenza del limite).** Consideriamo $a_n = (-1)^n$. La sottosuccessione dei termini di indice pari è $a_{2k} = (-1)^{2k} = 1 \to 1$, mentre la sottosuccessione dei termini di indice dispari è $a_{2k+1} = (-1)^{2k+1} = -1 \to -1$. Poiché le due sottosuccessioni convergono a limiti distinti ($1 \ne -1$), per la Proposizione 4.1 la successione $(a_n)$ non può ammettere limite.

Lo stesso principio vale per le funzioni: se $f(x) = \sin(1/x)$ per $x \to 0$, scegliendo $x_n = \frac{1}{2n\pi}$ per $n\in\mathbb{N}^+$ si ottiene $f(x_n) = 0 \to 0$, mentre scegliendo $y_n = \frac{1}{2n\pi + \pi/2}$ per $n\in\mathbb{N}^+$ si ottiene $f(y_n) = 1 \to 1$: dunque $\lim_{x\to 0} \sin(1/x)$ non esiste. Questa equivalenza è garantita dal teorema seguente, che lega limiti di funzione e limiti di successione.

**Teorema 4.6 (caratterizzazione sequenziale del limite).** Sia $f: \operatorname{dom} f \to \mathbb{R}$ e sia $x_0$ punto di accumulazione di $\operatorname{dom} f$. Allora

:::formula{id="4.13" label="Caratterizzazione sequenziale del limite"}
$$\lim_{x\to x_0} f(x) = l \iff \text{per ogni successione } (x_n) \text{ con } x_n \in \operatorname{dom} f \setminus \{x_0\},\ x_n \to x_0,\ \text{si ha } f(x_n) \to l.$$
:::

In particolare, se si trovano due successioni $x_n \to x_0$ e $y_n \to x_0$ tali che $f(x_n)$ e $f(y_n)$ convergono a limiti diversi, allora $\lim_{x\to x_0} f(x)$ non esiste: è esattamente questa l'idea usata nell'esempio con $\sin(1/x)$.

### Il teorema di Bolzano-Weierstrass

Non ogni successione ammette limite, ma si può sempre dire qualcosa sulle sue sottosuccessioni.

**Teorema 4.7 (estrazione monotona).** Ogni successione $(a_n)$ a valori reali possiede una sottosuccessione monotona.

**Teorema 4.8 (Bolzano-Weierstrass).** Ogni successione limitata $(a_n)$ possiede una sottosuccessione convergente.

La dimostrazione combina i due risultati: per il Teorema 4.7 esiste una sottosuccessione $(a_{n_k})$ monotona; essendo $(a_n)$ limitata, anche $(a_{n_k})$ lo è, e per il Teorema 4.5 una successione monotona e limitata converge a un limite finito. $\square$

Il teorema di Bolzano-Weierstrass è utile quando si sa che una successione è limitata e si vuole garantire l'esistenza di una sottosuccessione convergente, senza determinarne il limite. Se l'insieme dei valori della successione è anche infinito, la sua limitatezza garantisce l'esistenza di un punto di accumulazione; un insieme limitato con un solo valore, invece, non ne ha.

**Errore tipico 4.6.** Il teorema di Bolzano-Weierstrass garantisce l'esistenza di *una* sottosuccessione convergente, non la convergenza della successione intera: una successione limitata può benissimo essere oscillante, come $(-1)^n$, che è limitata ma non converge, pur avendo (ovviamente) sottosuccessioni convergenti (quella dei pari e quella dei dispari).

## p6 | Criteri del rapporto e della radice

Quando il termine generale di una successione è definito da un prodotto di fattori che cambiano con $n$ (potenze, fattoriali, esponenziali), il calcolo diretto del limite tramite le operazioni algebriche studiate in precedenza può risultare complicato o portare a forme indeterminate. I due criteri che seguono permettono di stabilire il comportamento della successione confrontando termini consecutivi (criterio del rapporto) oppure analizzando la radice $n$-esima del termine generale (criterio della radice).

### Criterio del rapporto

**Teorema 4.9 (Criterio del rapporto).** Sia $(a_n)_{n\in\mathbb{N}}$ una successione a termini positivi e sia $l\in\mathbb{R}^*$ tale che

$$\lim_{n\to+\infty}\frac{a_{n+1}}{a_n}=l.$$

Allora:

- se $l>1$ si ha $\lim_{n\to+\infty} a_n=+\infty$;
- se $l<1$ si ha $\lim_{n\to+\infty} a_n=0$.

:::formula{id="4.14" label="Criterio del rapporto per successioni"}
$$\lim_{n\to+\infty}\frac{a_{n+1}}{a_n}=l \implies \begin{cases} l>1 \implies a_n\to+\infty \\ l<1 \implies a_n\to 0\end{cases}$$
:::

**Dimostrazione (caso $l<1$).** Per definizione di limite, fissato $\varepsilon>0$ tale che $l+\varepsilon<1$, esiste $n_0$ tale che per ogni $n>n_0$

$$l-\varepsilon<\frac{a_{n+1}}{a_n}<l+\varepsilon,$$

da cui, essendo $a_n>0$,

$$a_{n+1}<(l+\varepsilon)a_n.$$

Iterando la disuguaglianza a partire da $a_{n_0+1}$ si ottiene, per $n>n_0$,

$$0<a_{n+1}<(l+\varepsilon)^{\,n-n_0}a_{n_0+1}.$$

Poiché $0<l+\varepsilon<1$, la quantità $(l+\varepsilon)^{\,n-n_0}$ tende a $0$ e, per il teorema del confronto, $a_n\to 0$. Se $l>1$, anche quando $l=+\infty$, si fissa $q$ con $1<q<l$ nel caso finito, oppure un qualunque $q>1$ nel caso infinito. Da un certo indice $N$ in poi si ha $a_{n+1}>q a_n$; quindi $a_n>q^{\,n-N}a_N$ per $n>N$ e $a_n\to+\infty$. $\square$

Se $l=1$ il criterio non fornisce alcuna informazione: esistono successioni con $\frac{a_{n+1}}{a_n}\to 1$ che convergono, altre che divergono e altre ancora con comportamento oscillante.

### Criterio della radice

**Teorema 4.10 (Criterio della radice).** Sia $(a_n)_{n\in\mathbb{N}}$ una successione a termini positivi e sia $l\in\mathbb{R}^*$ tale che

$$\lim_{n\to+\infty}\sqrt[n]{a_n}=l.$$

Allora:

- se $l>1$ si ha $\lim_{n\to+\infty} a_n=+\infty$;
- se $l<1$ si ha $\lim_{n\to+\infty} a_n=0$.

:::formula{id="4.15" label="Criterio della radice per successioni"}
$$\lim_{n\to+\infty}\sqrt[n]{a_n}=l \implies \begin{cases} l>1 \implies a_n\to+\infty \\ l<1 \implies a_n\to 0\end{cases}$$
:::

Se $l<1$, si sceglie $\varepsilon>0$ con $l+\varepsilon<1$. Per $n$ sufficientemente grande, $a_n<(l+\varepsilon)^n$, dunque $a_n\to 0$. Se $l>1$ è finito, si sceglie $q$ con $1<q<l$; se $l=+\infty$, si sceglie un qualunque $q>1$. In entrambi i casi, definitivamente $\sqrt[n]{a_n}>q$, perciò $a_n>q^n\to+\infty$. Se $l=1$, il criterio non è conclusivo.

**Esempio 4.9.** Si studi il limite di $a_n=\dfrac{2^n}{n!}$ con il criterio del rapporto. I termini sono positivi e

$$\frac{a_{n+1}}{a_n}=\frac{2^{n+1}}{(n+1)!}\cdot\frac{n!}{2^n}=\frac{2}{n+1}\;\longrightarrow\;0.$$

Essendo $l=0<1$, per il {{formula:4.14}} si conclude $a_n\to 0$.

**Esempio 4.10.** Si studi $a_n=\left(\dfrac{1}{2}+\dfrac{1}{n}\right)^{n}$ con il criterio della radice. Si ha

$$\sqrt[n]{a_n}=\frac{1}{2}+\frac{1}{n}\;\longrightarrow\;\frac{1}{2}.$$

Essendo $l=\frac{1}{2}<1$, per il {{formula:4.15}} si conclude $a_n\to 0$.

**Errore tipico 4.7.** Molti studenti applicano meccanicamente il criterio del rapporto o della radice anche quando il limite del rapporto (o della radice) vale esattamente $1$, concludendo in modo errato la convergenza o la divergenza della successione. In quel caso i criteri non dicono nulla e occorre uno studio diretto, per esempio tramite confronto con successioni note o tramite le tecniche del capitolo sui [limiti notevoli](ref:chapter/6#p2). Un secondo errore frequente è applicare i criteri a successioni che non sono a termini (eventualmente definitivamente) positivi: l'ipotesi $a_n>0$ è essenziale per poter dividere e per il confronto con le potenze.

### Gerarchia degli infiniti per successioni

I criteri precedenti permettono di confrontare tra loro le principali successioni divergenti e di stabilire un ordine di "velocità" di divergenza, detto gerarchia degli infiniti. Per $n\to+\infty$, con $a>1$, $p>0$, $q>0$ e $c>1$, vale

$$(\log_a n)^p \;\ll\; n^q \;\ll\; c^n \;\ll\; n! \;\ll\; n^n,$$

dove il simbolo $\ll$ indica che il termine a sinistra è trascurabile rispetto a quello a destra, cioè che il loro rapporto tende a $0$.

:::formula{id="4.16" label="Gerarchia degli infiniti per successioni"}
$$(\log_a n)^p \ll n^q \ll c^n \ll n! \ll n^n \qquad (a>1,\ p>0,\ q>0,\ c>1)$$
:::

Il primo confronto richiede un argomento distinto. Posto $r=q/p>0$, sia $k$ l'intero tale che $2^k\le n<2^{k+1}$. Allora

$$0\le\frac{\log_a n}{n^r}\le\frac{(k+1)\log_a 2}{2^{kr}}\longrightarrow 0,$$

perché il rapporto tra termini consecutivi della successione a destra tende a $2^{-r}<1$. Elevando alla potenza $p$ si ottiene $(\log_a n)^p/n^q\to0$. Per gli altri confronti il criterio del rapporto è conclusivo: i rapporti tra termini consecutivi di $n^q/c^n$ e $c^n/n!$ tendono rispettivamente a $1/c<1$ e a $0$. Per $b_n=n!/n^n$ si ha

$$\frac{b_{n+1}}{b_n}=\left(\frac{n}{n+1}\right)^n\le\frac12,$$

poiché $(1+1/n)^n\ge2$; quindi anche $b_n\to0$. La gerarchia permette di riconoscere i termini trascurabili nei limiti, secondo il [principio di eliminazione dei termini trascurabili](ref:chapter/6#p4). I confronti tra logaritmi, potenze ed esponenziali valgono anche per le funzioni di variabile reale, trattate nella sezione sugli [infiniti e infinitesimi](ref:chapter/6#p3).
