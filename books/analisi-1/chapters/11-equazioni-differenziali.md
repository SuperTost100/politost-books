---
chapter: 11
title: Equazioni differenziali
---

## p1 | Introduzione

Le equazioni differenziali sono lo strumento matematico con cui si descrive l'evoluzione di una grandezza nel tempo a partire dalla conoscenza del suo tasso di variazione: popolazioni che crescono, correnti elettriche che si scaricano, sistemi meccanici che oscillano sono tutti fenomeni la cui legge non è data direttamente, ma emerge risolvendo un'equazione in cui compaiono una funzione incognita e le sue derivate. Questo capitolo affronta i casi più importanti e trattabili con metodi espliciti: le equazioni lineari del primo ordine, quelle a variabili separabili e le equazioni lineari del secondo ordine a coefficienti costanti, insieme al problema di Cauchy, che permette di selezionare un'unica soluzione tra le infinite possibili fissando opportune condizioni iniziali.

Per affrontare il capitolo è indispensabile avere familiarità con il calcolo integrale, in particolare con le tecniche di calcolo di primitive, poiché ogni metodo risolutivo richiede di determinare uno o più integrali.

Al termine del percorso lo studente sarà in grado di riconoscere il tipo di equazione differenziale di fronte a cui si trova, applicare il metodo risolutivo adeguato (fattore integrante, separazione di variabili, polinomio caratteristico e metodo di somiglianza), determinare l'intervallo massimale di esistenza di una soluzione e risolvere problemi di Cauchy sia del primo che del secondo ordine, giustificando esistenza e unicità tramite i teoremi appropriati.

## p2 | Generalità e problema di Cauchy

Un'equazione differenziale è una relazione che lega una funzione incognita $y$, pensata come funzione di una variabile indipendente $t$ (o $x$), alle sue derivate. In generale la si scrive nella forma implicita

$$F\left(t,\, y(t),\, y'(t),\, \ldots,\, y^{(n)}(t)\right)=0.$$

Risolvere un'equazione differenziale significa trovare tutte le funzioni $y$ che, sostituite insieme alle loro derivate, rendono l'uguaglianza vera su un intervallo. A differenza delle equazioni algebriche, qui l'incognita non è un numero ma una funzione, e le soluzioni, come vedremo, sono tipicamente infinite, parametrizzate da una o più costanti arbitrarie.

### Ordine e forma normale

**Definizione 11.1 (ordine).** Si dice **ordine** di un'equazione differenziale il massimo ordine di derivazione dell'incognita che compare nell'equazione.

Ad esempio $y'=y$ è un'equazione del primo ordine, mentre $y'' + y^3 = 0$ è un'equazione del secondo ordine, perché la derivata di ordine più alto che vi figura è $y''$.

**Definizione 11.2 (forma normale).** Un'equazione differenziale di ordine $n$ si dice scritta in **forma normale** quando la derivata di ordine massimo è esplicitata al primo membro:

:::formula{id="11.1" label="Equazione differenziale in forma normale"}
$$y^{(n)}(t) = g\left(t,\, y(t),\, y'(t),\, \ldots,\, y^{(n-1)}(t)\right)$$
:::

Un'equazione può già essere data in questa forma, oppure può essere necessario qualche passaggio algebrico per ricondurla ad essa. Per esempio $y'=y$ è già in forma normale, $y''+y^3=0$ non lo è, ma basta isolare $y''$ per ottenere $y''=-y^3$, che è di nuovo in forma normale.

**Definizione 11.3 (soluzione).** Una funzione $y: I \to \mathbb{R}$, con $I$ intervallo, derivabile $n$ volte su $I$, è **soluzione** dell'equazione differenziale sull'intervallo $I$ se e solo se

$$F\left(t,\, y(t),\, y'(t),\, \ldots,\, y^{(n)}(t)\right) = 0 \quad \text{per ogni } t \in I.$$

In particolare, se l'equazione è scritta in forma normale come in {{formula:11.1}}, la condizione di soluzione si riduce a $y^{(n)}(t) = g\left(t,\, y(t),\, y'(t),\, \ldots,\, y^{(n-1)}(t)\right)$ per ogni $t \in I$, dove $g$ è la funzione a secondo membro della forma normale, in generale distinta dalla $F$ dell'equazione implicita.

Si osservi che il concetto di soluzione è sempre legato a un intervallo: la stessa espressione analitica può essere soluzione su un intervallo e non essere definita (o non essere derivabile) su un intervallo più grande. Questo aspetto sarà centrale quando, nella sezione sulle [equazioni a variabili separabili](ref:chapter/11#p4), parleremo di intervallo massimale di una soluzione.

### Tipi di equazioni differenziali

In questo capitolo tratteremo tre famiglie di equazioni per cui esiste un metodo risolutivo completo, o quasi completo.

- **Equazioni lineari del primo ordine**, della forma $y' = a(t)y + b(t)$. Ad esempio $y'=y$ rientra in questa categoria con $a(t)=1$ e $b(t)=0$, così come $y' = t^2 y + \cos t$, con $a(t)=t^2$ e $b(t)=\cos t$.
- **Equazioni a variabili separabili**, della forma $y' = f(y)\cdot g(t)$, cioè prodotto di una funzione della sola $y$ per una funzione della sola $t$. Ad esempio $y' = \cos y \cdot (t^2+1)$ ha $f(y) = \cos y$ e $g(t) = t^2+1$.
- **Equazioni lineari del secondo ordine a coefficienti costanti**, della forma $y'' + ay' + by = f(t)$ con $a, b \in \mathbb{R}$. Un esempio tipico, proveniente dalla fisica, è l'equazione dell'oscillatore armonico $y'' + ky = 0$, che corrisponde ad $a=0$, $b=k$, $f(t)=0$.

**Errore tipico 11.1.** Non sempre la classificazione è immediata a prima vista: spesso occorre svolgere prodotti, raccogliere termini o semplificare prima di riconoscere il tipo di equazione. Per esempio $y' = t^3(y+1)$ non è scritta né come lineare né come a variabili separabili nella forma canonica, ma svolgendo il prodotto diventa $y' = t^3 y + t^3$, che è lineare con $a(t) = t^3$ e $b(t) = t^3$. Al contrario, un'equazione come $y' = y + \cos ty$ può sembrare a variabili separabili per la presenza del prodotto $ty$ dentro al coseno, ma non è né lineare né a variabili separabili, perché il termine $\cos(ty)$ non si fattorizza come prodotto di una funzione di sola $y$ per una di sola $t$.

### Il problema di Cauchy

Un'equazione differenziale, da sola, ammette tipicamente infinite soluzioni al variare di una o più costanti arbitrarie: per fissare una soluzione specifica occorre imporre delle condizioni iniziali.

**Definizione 11.4 (problema di Cauchy).** Dato un'equazione differenziale in forma normale di ordine $n$, con secondo membro $g$, si dice **problema di Cauchy** (o problema ai valori iniziali) il sistema

:::formula{id="11.2" label="Problema di Cauchy"}
$$\begin{cases} y^{(n)}(t) = g\left(t,\, y(t),\, y'(t),\, \ldots,\, y^{(n-1)}(t)\right) \\ y(t_0) = y_0 \\ y'(t_0) = y_1 \\ \;\;\vdots \\ y^{(n-1)}(t_0) = y_{n-1} \end{cases}$$
:::

per qualche $t_0, y_0, y_1, \ldots, y_{n-1} \in \mathbb{R}$. Il numero di condizioni iniziali richieste è sempre pari all'ordine $n$ dell'equazione.

Una funzione $\bar y: I \to \mathbb{R}$ è **soluzione del problema di Cauchy** se $\bar y$ è soluzione dell'equazione differenziale sull'intervallo $I$, se $t_0 \in I$, e se $\bar y$ e le sue derivate fino all'ordine $n-1$ soddisfano le condizioni iniziali date.

In sintesi, mentre l'equazione differenziale da sola seleziona una famiglia di soluzioni (al variare di costanti arbitrarie), il problema di Cauchy, imponendo le condizioni iniziali, seleziona (quando va bene) un'unica soluzione all'interno di quella famiglia.

**Esempio 11.1.** Consideriamo il problema di Cauchy

$$\begin{cases} y' = y \\ y(1) = 3. \end{cases}$$

Si tratta di un'equazione del primo ordine, dunque è richiesta esattamente una condizione iniziale, qui fornita in $t_0=1$. Le soluzioni dell'equazione $y'=y$ sono tutte le funzioni della forma $y(t) = ke^t$, con $k \in \mathbb{R}$ costante arbitraria. Imponiamo la condizione iniziale:

$$k e^{1} = 3 \quad \Longrightarrow \quad k = \frac{3}{e}.$$

Sostituendo si ottiene l'unica soluzione del problema di Cauchy:

$$y(t) = \frac{3}{e}\,e^t = 3e^{t-1}.$$

:::image{src="assets/085f8d30-soluzione-cauchy-esponenziale.svg" alt="grafico di y = 3 e^(t-1) con il punto (1,3) evidenziato" caption="Fig. 11.1 — La curva integrale che passa per il punto (1,3): tra tutte le y = k e^t, la condizione iniziale seleziona k = 3/e"}
:::

Questo esempio illustra bene il meccanismo generale: l'equazione da sola fornisce una famiglia a un parametro di curve (tutte le funzioni $ke^t$), mentre la condizione iniziale seleziona, tra queste curve, quella che passa per il punto $(t_0, y_0) = (1,3)$ del piano.

### Teoremi di esistenza e unicità

Le condizioni iniziali sono essenziali non solo per selezionare una soluzione, ma perché, senza ulteriori ipotesi sui dati dell'equazione, la soluzione del problema di Cauchy potrebbe non esistere oppure non essere unica. Per ciascuna delle famiglie di equazioni che studieremo esiste un teorema che garantisce, sotto opportune ipotesi di regolarità, esistenza e unicità della soluzione. Li anticipiamo qui negli enunciati generali; le rispettive dimostrazioni e i metodi risolutivi sono trattati nelle sezioni dedicate.

**Teorema 11.1 (esistenza e unicità, caso lineare del primo ordine).** Sia

$$y' = a(t)y + b(t)$$

con $a, b: I \to \mathbb{R}$ continue su un intervallo $I$. Allora, per ogni $t_0 \in I$ e per ogni $y_0 \in \mathbb{R}$, il problema di Cauchy

:::formula{id="11.3" label="Esistenza e unicità per equazioni lineari del primo ordine"}
$$\begin{cases} y' = a(t)y+b(t) \\ y(t_0) = y_0 \end{cases} \quad \Longrightarrow \quad \text{esiste un'unica soluzione definita su tutto } I.$$
:::

L'ipotesi chiave è la sola continuità di $a$ e $b$ su $I$: sotto questa ipotesi la soluzione non solo esiste ed è unica, ma è anche definita sull'intero intervallo $I$ in cui $a$ e $b$ sono continue, senza bisogno di restringere il dominio. Questo risultato sarà dimostrato e applicato in dettaglio nella sezione sulle [equazioni lineari del primo ordine](ref:chapter/11#p3).

**Teorema 11.2 (esistenza e unicità locale, caso a variabili separabili).** Sia

$$y' = f(y)\,g(t)$$

con $g$ continua in un intorno di $t_0$ e $f$ continua in un intorno di $y_0$. Allora il problema di Cauchy

$$\begin{cases} y' = f(y)g(t) \\ y(t_0) = y_0 \end{cases}$$

ammette almeno una soluzione locale, definita cioè su un intervallo sufficientemente piccolo attorno a $t_0$. Se inoltre $f$ è di classe $C^1$ in un intorno di $y_0$ (cioè derivabile con derivata continua), la soluzione è localmente unica: esiste un intervallo (eventualmente più piccolo) attorno a $t_0$ in cui la soluzione del problema di Cauchy è unica. Una conseguenza dell'unicità locale è che due soluzioni che si incontrano in un punto in cui le ipotesi del teorema sono verificate, cioè dove $f$ è di classe $C^1$, coincidono in tutto un intorno di quel punto: lì non possono attraversarsi. Possono però separarsi più avanti, in un punto in cui $f$ non è di classe $C^1$, e due soluzioni distinte possono incontrarsi proprio in un punto di questo tipo. Per escludere intersezioni lungo tutto l'intervallo comune di definizione occorre quindi verificare che le ipotesi di unicità valgano in ogni punto attraversato dalle soluzioni, e non solo nell'intorno del dato iniziale.

Si noti la differenza rispetto al caso lineare: qui l'esistenza e l'unicità sono garantite solo **localmente**, cioè in un intorno di $t_0$, e non necessariamente su tutto l'intervallo di continuità dei dati. Questa distinzione sarà approfondita nella sezione sulle [equazioni a variabili separabili](ref:chapter/11#p4), dove introdurremo la nozione di intervallo massimale di una soluzione.

**Teorema 11.3 (esistenza e unicità, caso lineare del secondo ordine a coefficienti costanti).** Se $f: I \to \mathbb{R}$ è continua, allora per ogni $t_0 \in I$ e per ogni $y_0, y_1 \in \mathbb{R}$ il problema di Cauchy

$$\begin{cases} y'' + ay' + by = f(t) \\ y(t_0) = y_0 \\ y'(t_0) = y_1 \end{cases} \qquad t_0 \in I$$

ammette un'unica soluzione definita su tutto $I$. Questo risultato richiede, coerentemente con quanto visto per l'ordine dell'equazione, esattamente due condizioni iniziali (il valore della funzione e della sua derivata prima in $t_0$): sarà usato nella sezione sulle [equazioni lineari del secondo ordine a coefficienti costanti](ref:chapter/11#p5) insieme al polinomio caratteristico per costruire esplicitamente l'integrale generale.

**Osservazione 11.1.** In tutti e tre i casi il numero di condizioni iniziali richieste coincide con l'ordine dell'equazione, e la regolarità richiesta sui dati (continuità, eventualmente di classe $C^1$) è l'ipotesi che garantisce l'unicità: quando tale ipotesi manca, come accade in alcuni problemi a variabili separabili con $f$ solo continua e non derivabile, l'esistenza può ancora sussistere ma l'unicità può venire a mancare. Per questo motivo, prima di applicare uno di questi teoremi, è indispensabile verificare con cura quale forma assume l'equazione e quali ipotesi di regolarità sono effettivamente soddisfatte dai coefficienti o dalle funzioni $f$ e $g$ coinvolte.

## p3 | Equazioni lineari del primo ordine

### Definizione e forma dell'equazione

Si dice **equazione differenziale lineare del primo ordine** un'equazione della forma

:::formula{id="11.4" label="Equazione lineare del primo ordine"}
$$y' = a(t)\,y + b(t)$$
:::

dove $a, b : I \to \mathbb{R}$ sono funzioni continue su un intervallo $I$, detti **coefficienti** dell'equazione. Se $a$ e $b$ non dipendono dalla variabile indipendente ma sono costanti si parla di equazione a coefficienti costanti; se $b(t) \equiv 0$ l'equazione si dice **omogenea**.

Per esempio $y' = y$ è lineare con $a(t) = 1$ e $b(t) = 0$, mentre $y' = t^2 y + \cos t$ è lineare con $a(t) = t^2$ e $b(t) = \cos t$. Non bisogna invece confondere questa forma con equazioni che, pur somigliandole, non sono lineari: ad esempio $y' = y + \cos(ty)$ non è lineare (il termine $\cos(ty)$ mescola $t$ e $y$ in modo non lineare).

Questa è una delle due famiglie di equazioni del primo ordine (insieme a quelle a variabili separabili, trattate nella sezione successiva) per cui disponiamo di un metodo risolutivo esplicito e generale, discusso nella sezione introduttiva sul [problema di Cauchy](ref:chapter/11#p2).

### La formula risolutiva: il metodo del fattore integrante

Vogliamo determinare tutte le soluzioni $y : I \to \mathbb{R}$ dell'equazione {{formula:11.4}}, con $a, b : I \to \mathbb{R}$ continue. Poiché $a$ è continua, essa ammette una primitiva $A(t)$ su $I$; il problema si riconduce quindi al calcolo di primitive.

Scriviamo l'equazione portando il termine in $y$ a primo membro,

$$y' - a(t)\,y = b(t),$$

e moltiplichiamo entrambi i membri per il **fattore integrante** $e^{-A(t)}$, dove $A(t) = \int a(t)\,dt$:

$$e^{-A(t)}y' - e^{-A(t)}a(t)\,y = e^{-A(t)}b(t).$$

Il punto chiave è che il primo membro è esattamente la derivata del prodotto $e^{-A(t)}y$, per la regola di derivazione del prodotto e del fatto che $\frac{d}{dt}e^{-A(t)} = -a(t)e^{-A(t)}$:

$$\frac{d}{dt}\Big(e^{-A(t)}\,y\Big) = e^{-A(t)}b(t).$$

Integrando entrambi i membri rispetto a $t$ si ottiene

$$e^{-A(t)}y = \int e^{-A(t)}b(t)\,dt,$$

e moltiplicando per $e^{A(t)}$ si arriva alla formula risolutiva:

:::formula{id="11.5" label="Formula risolutiva delle equazioni lineari del primo ordine"}
$$y(t) = e^{\int a(t)\,dt} \int e^{-\int a(t)\,dt}\,b(t)\,dt$$
:::

In questa scrittura l'integrale indefinito $\int a(t)\,dt$ rappresenta una qualunque primitiva fissata $A(t)$, mentre l'integrale indefinito esterno genera la costante di integrazione $+c$, $c \in \mathbb{R}$, che fornisce l'**integrale generale** dell'equazione: al variare di $c$ si ottengono infinite soluzioni distinte.

Nel caso omogeneo ($b(t) \equiv 0$) la formula si semplifica immediatamente in

$$y(t) = k\,e^{\int a(t)\,dt}, \qquad k \in \mathbb{R}.$$

coerentemente con il fatto che l'integrale che compare a fattore si annulla.

**Osservazione 11.2.** La formula risolutiva mostra che, per trovare l'integrale generale di un'equazione lineare del primo ordine, occorrono sempre due calcoli di primitiva: uno per ottenere $A(t) = \int a(t)\,dt$ (il fattore integrante) e uno per ottenere $\int e^{-A(t)}b(t)\,dt$. Conviene quindi prima calcolare $A(t)$ con attenzione, poi sostituire e risolvere l'integrale rimanente, eventualmente con le tecniche viste nella sezione sugli [integrali indefiniti](ref:chapter/9#p2).

### Esistenza e unicità del problema di Cauchy

Associando all'equazione lineare una condizione iniziale si ottiene il problema di Cauchy

$$\begin{cases} y' = a(t)\,y + b(t) \\ y(t_0) = y_0. \end{cases}$$

**Teorema 11.4 (esistenza e unicità per le equazioni lineari).** *Siano $a, b : I \to \mathbb{R}$ continue su un intervallo $I$ e sia $t_0 \in I$. Allora, per ogni $y_0 \in \mathbb{R}$, il problema di Cauchy*

$$\begin{cases} y' = a(t)\,y + b(t) \\ y(t_0) = y_0 \end{cases}$$

*ammette una e una sola soluzione $y : I \to \mathbb{R}$, definita su tutto l'intervallo $I$*.

*Dimostrazione.* Dalla formula risolutiva, ogni soluzione è della forma $y(t) = e^{A(t)}\lbrack G(t) + k\rbrack $, dove $A(t)$ è una primitiva fissata di $a(t)$ e $G(t)$ è una primitiva fissata di $e^{-A(t)}b(t)$, al variare della costante $k \in \mathbb{R}$. Imponendo la condizione iniziale,

$$y(t_0) = e^{A(t_0)}\big\lbrack G(t_0) + k\big\rbrack  = y_0.$$

Moltiplicando per $e^{-A(t_0)}$ si ottiene

$$e^{-A(t_0)}y_0 = G(t_0) + k,$$

da cui

$$k = e^{-A(t_0)}y_0 - G(t_0).$$

Questa equazione determina $k$ in modo unico, quindi esiste una e una sola costante $k$ che soddisfa la condizione iniziale, e dunque una e una sola soluzione del problema di Cauchy. $\square$

A differenza di quanto accade per equazioni non lineari (dove l'intervallo massimale di esistenza può essere più piccolo del dominio dei coefficienti, come si vedrà per le equazioni a variabili separabili), per le equazioni lineari la soluzione è **sempre definita su tutto l'intervallo $I$** su cui $a$ e $b$ sono continue: non ci sono "esplosioni" né restringimenti dell'intervallo da cercare a posteriori.

### Esempio svolto

Risolviamo il problema di Cauchy

$$\begin{cases} y' = y \\ y(1) = 3. \end{cases}$$

Qui $a(t) = 1$ e $b(t) = 0$: l'equazione è lineare omogenea. Una primitiva di $a(t) = 1$ è $A(t) = t$, quindi per la formula risolutiva (caso omogeneo)

$$y(t) = k\,e^{t}, \qquad k \in \mathbb{R},$$

che è l'integrale generale. Imponendo la condizione iniziale $y(1) = 3$:

$$k\,e^{1} = 3 \implies k = \frac{3}{e}.$$

Sostituendo si ottiene la soluzione del problema di Cauchy:

$$y(t) = \frac{3}{e}\,e^{t} = 3\,e^{t-1}.$$

Poiché $a(t) = 1$ è continua su tutto $\mathbb{R}$, per il Teorema 11.4 questa è l'unica soluzione definita su $I = \mathbb{R}$.

Consideriamo ora un esempio non omogeneo e non a coefficienti costanti. Vogliamo l'integrale generale di

$$y' = \frac{1}{t}\,y + t, \qquad t > 0.$$

Qui $a(t) = 1/t$ e $b(t) = t$, entrambe continue su $I = \rbrack 0, +\infty\lbrack $. Una primitiva di $a(t)$ è $A(t) = \log t$, quindi il fattore integrante è $e^{-A(t)} = e^{-\log t} = 1/t$. Calcoliamo

$$\int e^{-A(t)}b(t)\,dt = \int \frac{1}{t}\cdot t \, dt = \int 1\,dt = t + c.$$

Per la formula risolutiva,

$$y(t) = e^{A(t)}\big\lbrack t + c\big\rbrack  = t\,(t + c) = t^2 + c\,t, \qquad c \in \mathbb{R}.$$

Questo è l'integrale generale, definito su tutto $\rbrack 0,+\infty\lbrack $ per ogni valore di $c$.

### Errori tipici

- **Dimenticare la costante di integrazione.** La formula risolutiva contiene un integrale indefinito: senza la costante $c$ non si ottiene l'integrale generale ma una singola soluzione, perdendo tutte le altre infinite soluzioni dell'equazione.

- **Confondere equazione lineare e a variabili separabili.** Alcune equazioni, come $y' = t^3(y+1)$, si possono scrivere sia nella forma $y' = a(t)y + b(t)$ (lineare, con $a(t) = t^3$, $b(t) = t^3$) sia nella forma $y' = f(y)g(t)$ (a variabili separabili). In questi casi entrambi i metodi funzionano e conviene scegliere quello più rapido; non bisogna però dare per scontato che ogni equazione che "sembra" lineare lo sia davvero, come nel caso $y' = y + \cos(ty)$, che non appartiene a nessuna delle due categorie.

- **Segno sbagliato nel fattore integrante.** È frequente confondere $e^{A(t)}$ con $e^{-A(t)}$ nei due passaggi della dimostrazione: il fattore che moltiplica l'equazione originale è $e^{-A(t)}$ (con $A$ primitiva di $a$), mentre a fine calcolo si moltiplica per $e^{A(t)}$ per isolare $y$. Conviene sempre verificare il risultato sostituendolo nell'equazione di partenza.

- **Confondere l'intervallo su cui il teorema garantisce esistenza e unicità con il dominio massimale di una soluzione.** Il Teorema 11.4 richiede $a$ e $b$ continue sull'intervallo $I$ che contiene $t_0$, e garantisce l'esistenza e l'unicità della soluzione proprio su tutto quell'intervallo $I$: se per esempio $a(t) = 1/t$, l'equazione stessa non è definita in $t = 0$ (il coefficiente non esiste in quel punto), quindi $I$ va scelto contenuto in $\rbrack 0,+\infty\lbrack $ oppure in $\rbrack -\infty,0\lbrack $, senza attraversare l'origine. Attenzione però a non generalizzare questa conclusione: una discontinuità (o una mancata definizione) di un coefficiente impedisce di applicare il teorema in quel punto, ma non implica automaticamente che nessuna soluzione possa essere prolungata attraverso di esso. Per esempio, con $a(t) = \operatorname{sgn}(t)$ e $b(t) = -\operatorname{sgn}(t)$, entrambe definite anche in $t=0$ pur essendo discontinue, la funzione costante $y(t) = 1$ risolve l'equazione su tutto $\mathbb{R}$: il teorema non si applica attraverso il punto di discontinuità, ma una soluzione particolare può comunque esistere e restare valida oltre quel punto.

## p4 | Equazioni a variabili separabili

### Definizione e impostazione del problema

Un'equazione differenziale del primo ordine si dice **a variabili separabili** se può essere scritta nella forma

:::formula{id="11.6" label="Equazione a variabili separabili"}
$$y' = f(y)\, g(t)$$
:::

dove $f$ è una funzione definita su un intervallo di $\mathbb{R}$ (la variabile dipendente $y$) e $g$ è una funzione definita su un intervallo $I$ (la variabile indipendente $t$). Il nome deriva dal fatto che il secondo membro è il prodotto di una funzione della sola $y$ e di una funzione della sola $t$.

Questa forma va distinta con attenzione da quella delle equazioni lineari studiate nella sezione precedente [Equazioni lineari del primo ordine](ref:chapter/11#p3), $y' = a(t)y + b(t)$: non è raro che un'equazione possa essere scritta in entrambi i modi dopo un raccoglimento, come nell'esempio $y' = t^3(y+1)$, che è contemporaneamente lineare (con $a(t)=t^3$, $b(t)=t^3$) e a variabili separabili (con $f(y)=y+1$, $g(t)=t^3$). Non bisogna però credere che ogni equazione "mista" rientri in uno dei due schemi: ad esempio $y' = y + \cos(ty)$ non è né lineare né a variabili separabili, perché il termine $\cos(ty)$ non si fattorizza nel prodotto di una funzione di sola $t$ per una di sola $y$.

### Ricerca delle soluzioni costanti

Il primo passo nella risoluzione di una qualunque equazione differenziale, e in particolare di una a variabili separabili, è controllare se esistono **soluzioni costanti**. Si pone $y(t) = k$ per una costante $k$, da cui $y'(t) = 0$, e si sostituisce nell'equazione:

:::formula{id="11.7" label="Soluzioni costanti"}
$$y(t)=k\text{ è soluzione costante su }I \iff k\in\operatorname{dom}f\text{ e }f(k)g(t)=0\quad\forall t\in I$$
:::

Se $g$ non è identicamente nulla su $I$, le soluzioni costanti corrispondono esattamente agli zeri di $f$. Se invece $g$ è identicamente nulla, ogni costante $k\in\operatorname{dom}f$ è soluzione.

**Esempio 11.2.** Per $y' = y(y-1)$, con $f(y) = y^2 - y$ e $g(t) = 1$, imponendo $f(k)=0$ si ottiene $k(k-1)=0$, quindi $k=0$ e $k=1$ sono le due soluzioni costanti $y(t)=0$ e $y(t)=1$.

### Separazione delle variabili e integrazione

Supponiamo ora $y_0$ non sia uno zero di $f$, cioè $f(y_0) \neq 0$. Per continuità di $f$ esiste un intorno $I(y_0)$ su cui $f(y) \neq 0$, e su tale intorno possiamo dividere l'equazione per $f(y)$:

$$\frac{y'(t)}{f(y(t))} = g(t).$$

Poiché $f$ è continua e non nulla su $I(y_0)$, la funzione $1/f$ è continua e quindi ammette una primitiva $F$; analogamente, se $g$ è continua su un intervallo $I(t_0)$ essa ammette una primitiva $G$. Integrando entrambi i membri rispetto a $t$ si ottiene

:::formula{id="11.8" label="Formula risolutiva per separazione di variabili"}
$$F(y(t)) = G(t) + c, \qquad c \in \mathbb{R},$$
:::

da cui, essendo $F$ invertibile su $I(y_0)$ (perché $1/f$ ha segno costante), si ricava esplicitamente $y(t) = F^{-1}(G(t)+c)$.

Nella pratica conviene seguire la regola mnemonica che tratta $y'$ come il quoziente $dy/dt$:

$$\frac{dy}{dt} = f(y)\,g(t) \ \Longrightarrow\ \frac{dy}{f(y)} = g(t)\,dt \ \Longrightarrow\ \int \frac{dy}{f(y)} = \int g(t)\,dt. $$

Questa scrittura, pur non essendo una manipolazione rigorosa di "differenziali" ma solo un modo mnemonico di riassumere il procedimento precedente, è il metodo operativo standard.

**Metodo risolutivo, passo per passo:**

1. Si cercano le soluzioni costanti verificando $f(k)g(t)=0$ per ogni $t$ dell'intervallo considerato; se $g$ non è identicamente nulla, basta risolvere $f(k)=0$.
2. Sugli intervalli in cui $f(y) \neq 0$ si separano le variabili e si integra: $\int \frac{dy}{f(y)} = \int g(t)\,dt$, ottenendo $F(y) = G(t) + c$.
3. Se è assegnato un problema di Cauchy con dato $y(t_0) = y_0$, si determina la costante $c$ imponendo la condizione iniziale: $c = F(y_0) - G(t_0)$.

### Il problema di Cauchy ed il teorema di esistenza e unicità

Come già visto nella sezione sul [problema di Cauchy](ref:chapter/11#p2), accoppiare l'equazione a una condizione iniziale seleziona, tra le infinite soluzioni dell'equazione, quella (o quelle) che soddisfano il dato assegnato. Per le equazioni a variabili separabili il problema si scrive

$$\begin{cases} y' = f(y)\,g(t) \\ y(t_0) = y_0 \end{cases}$$

Una funzione derivabile $P:I\to\mathbb{R}$ è soluzione del problema di Cauchy se $I$ è un intervallo contenente $t_0$ sul quale $g$ è definita, $P(t)\in\operatorname{dom}f$ e $P'(t)=f(P(t))g(t)$ per ogni $t\in I$, e $P(t_0)=y_0$.

**Teorema 11.5 (esistenza e unicità locale).** Dato il problema di Cauchy $y' = f(y)g(t)$, $y(t_0) = y_0$, se $g$ è continua in un intorno $I(t_0)$ e $f$ è continua in un intorno $I(y_0)$, allora esiste una soluzione locale $P \colon \tilde I(t_0) \to \hat I(y_0)$. Se inoltre $f$ è di classe $C^1$ in $I(y_0)$, la soluzione è anche unica in un opportuno intorno $\tilde I(t_0)$.

La continuità garantisce l'esistenza locale, mentre l'ipotesi $f\in C^1$ garantisce l'unicità locale. Se due soluzioni passano per un punto in cui $f$ è di classe $C^1$ in un intorno del valore assunto, coincidono in un intorno di quel punto. Se tale ipotesi vale per tutti i valori assunti dalle soluzioni, due soluzioni che si incontrano coincidono su tutto l'intervallo comune di definizione. In particolare, dove vale questa ipotesi, una soluzione non costante non può attraversare una soluzione costante $y=k$.

### Osservazione: l'intervallo massimale di soluzione

Il teorema precedente fornisce una soluzione *locale*, definita su un intorno di $t_0$. Un **intervallo massimale di soluzione** è un intervallo contenente $t_0$ sul quale la soluzione soddisfa l'equazione e oltre il quale non può essere prolungata come soluzione. Per trovarlo, si verifica prima dove la formula ricavata per separazione soddisfa l'equazione, poi si controlla se la soluzione può essere prolungata ai suoi estremi. In assenza di unicità, possono esistere prolungamenti diversi.

Il dominio della formula separata, da solo, non determina l'intervallo massimale. Per esempio, per $y'=2\sqrt{\max\{y,0\}}$ con $y(0)=1$, il ramo $y(t)=(t+1)^2$ soddisfa l'equazione per $t>-1$ e si prolunga ponendo $y(t)=0$ per $t\leq -1$. La funzione così ottenuta è derivabile e soddisfa l'equazione su tutto $\mathbb{R}$. In altri casi la soluzione può tendere a $+\infty$ in un tempo finito e non ammettere prolungamento.

### Esempio svolto completo

Risolviamo il problema di Cauchy

$$\begin{cases} y' = y^2 \\ y(0) = 1 \end{cases}$$

**Soluzioni costanti.** Qui $f(y) = y^2$ e $g(t) = 1$; l'unico zero di $f$ è $k=0$, quindi $y(t) \equiv 0$ è soluzione costante. Poiché il dato iniziale $y_0 = 1 \neq 0$, la soluzione cercata non è quella costante, e per l'unicità (essendo $f(y)=y^2$ di classe $C^1$) il suo grafico non potrà mai toccare la retta $y=0$.

**Separazione delle variabili.** Per $y \neq 0$,

$$\frac{dy}{y^2} = dt \ \Longrightarrow\ \int \frac{dy}{y^2} = \int dt \ \Longrightarrow\ -\frac{1}{y} = t + c.$$

**Condizione iniziale.** Imponendo $y(0) = 1$: $-\dfrac{1}{1} = 0 + c$, quindi $c = -1$.

**Soluzione esplicita.** Da $-\dfrac{1}{y} = t - 1$ si ricava

$$y(t) = \frac{1}{1-t}.$$

**Intervallo massimale.** L'espressione $\dfrac{1}{1-t}$ è definita per ogni $t \neq 1$; il dominio naturale è $\rbrack -\infty,1\lbrack \, \cup \,\rbrack 1,+\infty\lbrack $. Poiché il punto iniziale è $t_0 = 0$, la componente connessa da scegliere è quella che lo contiene, cioè

$$I_{\max} = \,\rbrack -\infty, 1\lbrack .$$

Per $t \to 1^-$ si ha $y(t) \to +\infty$: la soluzione esplode in tempo finito, e questo è il motivo per cui l'intervallo massimale è limitato superiormente, nonostante $f$ e $g$ siano funzioni continue (anzi, $C^\infty$) su tutto $\mathbb{R}$.

:::image{src="assets/a7d25861-soluzione-esplosiva.svg" alt="grafico di 1/(1-x) con asintoto verticale in x=1" caption="Fig. 11.2 — Soluzione y(t) = 1/(1-t) del problema di Cauchy y' = y^2, y(0) = 1: l'intervallo massimale è ]-infinito, 1[ a causa dell'asintoto verticale in t=1"}
:::

### Errori tipici

- **Dimenticare le soluzioni costanti.** Prima di dividere per $f(y)$, si verifica se esistono soluzioni $y(t)=k$: occorre che $f(k)g(t)=0$ per ogni $t$ dell'intervallo considerato.
- **Confondere equazioni lineari e a variabili separabili.** Alcune equazioni, come $y' = t^3(y+1)$, si possono risolvere con entrambi i metodi; altre, come $y' = y + \cos(ty)$, non rientrano in nessuno dei due schemi.
- **Identificare l'intervallo massimale con il dominio della formula separata.** Si verifica che la formula soddisfi l'equazione e si controlla se la soluzione possa essere prolungata agli estremi, anche quando la formula separata non è più utilizzabile.
- **Dimenticare la costante di integrazione o la condizione $f(y)\neq 0$.** La primitiva $F$ usata nel metodo è definita sull'intervallo in cui $f$ non si annulla; prima di scrivere $y(t)=F^{-1}(G(t)+c)$, si verifica che la soluzione resti in tale intervallo.

## p5 | Equazioni lineari del secondo ordine a coefficienti costanti

Le **equazioni differenziali lineari del secondo ordine a coefficienti costanti** sono equazioni della forma

$$y'' + a y' + b y = f(t), \qquad a, b \in \mathbb{R},$$

dove $f$ è una funzione continua su un intervallo $I$. Quando $f(t) = 0$ per ogni $t$ l'equazione si dice **omogenea**; altrimenti si parla di **equazione completa**.

La strategia risolutiva, analoga a quella già vista per le equazioni lineari del primo ordine (si veda [Equazioni lineari del primo ordine](ref:chapter/11#p3)), consiste in due passi: prima si determina l'integrale generale dell'equazione omogenea associata, poi si cerca una soluzione particolare dell'equazione completa, e si somma l'una all'altra.

### Equazione omogenea

Per risolvere $y'' + a y' + b y = 0$ si introduce il **polinomio caratteristico**

$$p(\lambda) = \lambda^2 + a\lambda + b,$$

e si studia l'equazione algebrica $p(\lambda) = 0$. Il segno del discriminante $\Delta = a^2 - 4b$ determina la natura delle due radici $\lambda_1, \lambda_2$ e, con esse, la forma delle soluzioni dell'omogenea.

:::formula{id="11.9" label="Equazione caratteristica dell'omogenea di secondo ordine"}
$$\lambda^2 + a\lambda + b = 0$$
:::

**Caso $\Delta > 0$: due radici reali distinte.** Si trovano $\lambda_1 \ne \lambda_2 \in \mathbb{R}$ e le due soluzioni dell'omogenea sono

$$\varphi_1(t) = e^{\lambda_1 t}, \qquad \varphi_2(t) = e^{\lambda_2 t}.$$

**Caso $\Delta = 0$: una radice reale doppia.** Si trova $\lambda \in \mathbb{R}$ con molteplicità $2$, e le due soluzioni sono

$$\varphi_1(t) = e^{\lambda t}, \qquad \varphi_2(t) = t e^{\lambda t}.$$

**Caso $\Delta < 0$: due radici complesse coniugate.** Si trovano $\lambda_{1,2} = \alpha \pm i\beta$ con $\alpha, \beta \in \mathbb{R}$, $\beta \ne 0$. Usando la formula di Eulero si ottiene

$$\varphi_1(t) = e^{(\alpha + i\beta)t} = e^{\alpha t}\left(\cos\beta t + i \sin\beta t\right), \qquad \varphi_2(t) = e^{(\alpha - i\beta)t} = e^{\alpha t}\left(\cos\beta t - i \sin\beta t\right).$$

Poiché l'equazione ha coefficienti reali, la parte reale e la parte immaginaria di $\varphi_1$ sono soluzioni reali: $e^{\alpha t}\cos\beta t$ ed $e^{\alpha t}\sin\beta t$. In ciascuno dei tre casi, se due soluzioni reali dell'omogenea non sono proporzionali, ogni loro combinazione lineare con coefficienti reali è ancora una soluzione e tali combinazioni formano l'**integrale generale** dell'omogenea.

Applicando questo fatto ai tre casi precedenti, l'integrale generale dell'omogenea $y_{om}(t)$ è:

:::formula{id="11.10" label="Integrale generale dell'equazione omogenea"}
$$

y_{om}(t) =
\begin{cases}
c_1 e^{\lambda_1 t} + c_2 e^{\lambda_2 t} & \text{se } \Delta > 0 \\[4pt]
c_1 e^{\lambda t} + c_2 t e^{\lambda t} & \text{se } \Delta = 0 \\[4pt]
e^{\alpha t}\left(c_1 \cos\beta t + c_2 \sin\beta t\right) & \text{se } \Delta < 0
\end{cases}
\qquad c_1, c_2 \in \mathbb{R}.
$$
:::

Il caso $\Delta < 0$ produce soluzioni **oscillanti** con ampiezza modulata dal fattore esponenziale $e^{\alpha t}$: se $\alpha < 0$ le oscillazioni si attenuano (comportamento di tipo smorzato), se $\alpha > 0$ crescono, se $\alpha = 0$ restano di ampiezza costante.

:::image{src="assets/a3e900b7-soluzione-oscillante-omogenea.svg" alt="Grafico di una funzione oscillante con ampiezza che decresce esponenzialmente, insieme alle sue due curve inviluppo" caption="Fig. 11.3 — Soluzione dell'omogenea nel caso di radici complesse coniugate, con l'inviluppo esponenziale che la contiene"}
:::

**Errore tipico 11.2.** Molti studenti confondono il caso $\Delta = 0$ con il caso $\Delta > 0$ e scrivono $c_1 e^{\lambda t} + c_2 e^{\lambda t}$, che è in realtà un'unica funzione (le due soluzioni sarebbero proporzionali, con $k=1$) e non l'integrale generale. La seconda soluzione indipendente va cercata moltiplicando per $t$, esattamente come indicato nel caso $\Delta = 0$.

### Equazione completa

Per l'equazione completa $y'' + a y' + b y = f(t)$ vale il seguente risultato di struttura.

**Teorema 11.6 (struttura dell'integrale generale).** L'integrale generale dell'equazione completa è dato da

$$y(t) = y_{om}(t) + y_p(t),$$

dove $y_{om}(t)$ è l'integrale generale dell'equazione omogenea associata e $y_p(t)$ è una qualsiasi soluzione particolare dell'equazione completa.

L'esistenza e l'unicità della soluzione del problema di Cauchy associato sono garantite dal seguente teorema.

**Teorema 11.7 (esistenza e unicità).** Se $f : I \to \mathbb{R}$ è continua, allora per ogni $t_0 \in I$ e per ogni $y_0, y_1 \in \mathbb{R}$ esiste un'unica soluzione del problema di Cauchy

$$

\begin{cases}
y'' + a y' + b y = f(t) \\
y(t_0) = y_0 \\
y'(t_0) = y_1
\end{cases}
\qquad t_0 \in I.
$$

:::formula{id="11.11" label="Esistenza e unicità per il problema di Cauchy di secondo ordine"}
$$
\begin{cases}
y'' + a y' + b y = f(t) \\
y(t_0) = y_0 \\
y'(t_0) = y_1
\end{cases}
$$
:::

Si noti che, come già osservato per il problema di Cauchy in generale, le condizioni iniziali richieste sono tante quante l'ordine dell'equazione: qui due, una su $y$ e una su $y'$, entrambe nello stesso punto $t_0$.

Resta da determinare una soluzione particolare $y_p$. Quando $f(t)$ ha una forma specifica si può usare il **metodo di somiglianza**, che consiste nel cercare $y_p$ nella stessa famiglia di $f$, con un fattore polinomiale correttivo in caso di **risonanza** con l'equazione omogenea.

**Caso $f(t) = P(t) e^{\alpha t}$, con $P$ polinomio.**

- Se $\alpha$ non è radice del polinomio caratteristico: $y_p(t) = Q(t) e^{\alpha t}$, con $Q$ polinomio dello stesso grado di $P$.
- Se $\alpha$ è radice di molteplicità $1$ del polinomio caratteristico (risonanza semplice): $y_p(t) = t\, Q(t) e^{\alpha t}$.
- Se $\alpha$ è radice di molteplicità $2$ del polinomio caratteristico (risonanza doppia): $y_p(t) = t^2 Q(t) e^{\alpha t}$.

:::formula{id="11.12" label="Metodo di somiglianza per un polinomio moltiplicato per un esponenziale"}
$$
y_p(t) =
\begin{cases}
Q(t) e^{\alpha t} & \alpha \text{ non è radice di } p(\lambda) \\
t\, Q(t) e^{\alpha t} & \alpha \text{ è radice semplice di } p(\lambda) \\
t^2 Q(t) e^{\alpha t} & \alpha \text{ è radice doppia di } p(\lambda)
\end{cases}
$$
:::

**Caso $f(t) = e^{\alpha t}\left(P(t)\cos\beta t + Q(t)\sin\beta t\right)$, con $P, Q$ polinomi e $\beta\ne 0$.**

- Se $\alpha + i\beta$ non è radice del polinomio caratteristico: $y_p(t) = e^{\alpha t}\left(\tilde P(t)\cos\beta t + \tilde Q(t)\sin\beta t\right)$.
- Se $\alpha + i\beta$ è radice del polinomio caratteristico (risonanza): $y_p(t) = t\, e^{\alpha t}\left(\tilde P(t)\cos\beta t + \tilde Q(t)\sin\beta t\right)$.

In entrambi i sottocasi, $\tilde P$ e $\tilde Q$ hanno grado **al più** pari al massimo dei gradi dei polinomi non nulli fra $P$ e $Q$: alcuni coefficienti possono essere nulli e uno dei due polinomi cercati può essere nullo. Se $P$ e $Q$ sono entrambi nulli, si può scegliere $y_p=0$. Se $\beta=0$, il termine noto diventa $P(t)e^{\alpha t}$ e si applica la regola precedente, compreso il fattore $t^2$ quando $\alpha$ è radice doppia.

:::formula{id="11.13" label="Metodo di somiglianza per un termine esponenziale trigonometrico"}
$$
y_p(t) =
\begin{cases}
e^{\alpha t}\left(\tilde P(t)\cos\beta t + \tilde Q(t)\sin\beta t\right) & \alpha + i\beta \text{ non è radice di } p(\lambda) \\
t\, e^{\alpha t}\left(\tilde P(t)\cos\beta t + \tilde Q(t)\sin\beta t\right) & \alpha + i\beta \text{ è radice di } p(\lambda)
\end{cases}
\qquad \beta\ne 0.
$$
:::

Quando il termine noto è somma di più contributi, $f(t) = b_1(t) + b_2(t)$, si applica il **principio di sovrapposizione**: si cerca una soluzione particolare $y_{p,1}$ per $b_1$ e una soluzione particolare $y_{p,2}$ per $b_2$, separatamente, e si somma. Per la linearità dell'operatore $y \mapsto y'' + ay' + by$, $y_p(t) = y_{p,1}(t) + y_{p,2}(t)$ è soluzione particolare per $f(t) = b_1(t) + b_2(t)$.

:::formula{id="11.14" label="Principio di sovrapposizione degli effetti"}
$$f(t) = b_1(t) + b_2(t) \quad \Longrightarrow \quad y_p(t) = y_{p,1}(t) + y_{p,2}(t)$$
:::

**Esempio 11.3.** Risolviamo il problema di Cauchy

$$
\begin{cases}
y'' - 2y' - 15y = e^t \\
y(0) = -\dfrac{5}{12} \\
y'(0) = 1.
\end{cases}
$$

**Passo 1 (omogenea).** L'equazione caratteristica è $\lambda^2 - 2\lambda - 15 = 0$, da cui $\lambda_{1,2} = 1 \pm 4$, quindi $\lambda_1 = 5$ e $\lambda_2 = -3$: due radici reali distinte ($\Delta > 0$), con

$$\varphi_1(t) = e^{5t}, \qquad \varphi_2(t) = e^{-3t}.$$

**Passo 2 (integrale generale dell'omogenea).**

$$y_{om}(t) = c_1 e^{5t} + c_2 e^{-3t}, \qquad c_1, c_2 \in \mathbb{R}.$$

**Passo 3 (soluzione particolare).** Il termine noto è $f(t) = 1 \cdot e^{1 \cdot t}$, quindi $\alpha = 1$ e $P(t) = 1$ (polinomio di grado zero). Poiché $\alpha = 1$ non è radice del polinomio caratteristico ($1 \ne 5$ e $1 \ne -3$), si cerca

$$y_p(t) = k e^t.$$

Derivando, $y_p'(t) = k e^t$ e $y_p''(t) = k e^t$; sostituendo nell'equazione completa,

$$k e^t - 2k e^t - 15 k e^t = e^t \;\Longrightarrow\; k - 2k - 15k = 1 \;\Longrightarrow\; -16k = 1 \;\Longrightarrow\; k = -\frac{1}{16}.$$

Quindi $y_p(t) = -\dfrac{1}{16} e^t$.

**Passo 4 (integrale generale della completa).**

$$y(t) = y_{om}(t) + y_p(t) = c_1 e^{5t} + c_2 e^{-3t} - \frac{1}{16} e^t.$$

**Passo 5 (condizioni iniziali).** Si ha $y'(t) = 5c_1 e^{5t} - 3c_2 e^{-3t} - \dfrac{1}{16} e^t$. Imponendo $y(0) = -\dfrac{5}{12}$ e $y'(0) = 1$ si ottiene il sistema

$$
\begin{cases}
c_1 + c_2 - \dfrac{1}{16} = -\dfrac{5}{12} \\
5c_1 - 3c_2 - \dfrac{1}{16} = 1
\end{cases}
$$

che, risolto, dà $c_1 = 0$ e $c_2 = -\dfrac{17}{48}$. La soluzione del problema di Cauchy è quindi

$$y(t) = -\frac{17}{48} e^{-3t} - \frac{1}{16} e^t.$$

Come sempre accade con un problema di Cauchy, le due condizioni iniziali selezionano, tra le infinite soluzioni dell'equazione differenziale (parametrizzate da $c_1, c_2$), un'unica soluzione; senza di esse resterebbe una famiglia a due parametri.

**Errori tipici.**

- Dimenticare di controllare se $\alpha$ (o $\alpha + i\beta$, quando $\beta\ne 0$) è radice del polinomio caratteristico: saltare questo controllo porta a una forma di prova per $y_p$ sbagliata, che risulta anche soluzione dell'omogenea e non permette di determinare i coefficienti per sostituzione (si ottiene un'identità del tipo $0 = f(t)$, impossibile se $f$ non è nulla).
- Imporre che $\tilde P$ e $\tilde Q$ abbiano entrambi grado pari al massimo tra i gradi di $P$ e $Q$: il grado richiesto è solo un limite superiore e uno dei polinomi cercati può essere nullo.
- Applicare le condizioni iniziali sull'integrale generale dell'**omogenea** $y_{om}$ invece che su quello della **completa** $y = y_{om} + y_p$: le costanti $c_1, c_2$ vanno determinate solo dopo aver aggiunto $y_p$.
- Non derivare correttamente $y_p$ prima di sostituirla nell'equazione: un errore di segno o di derivazione in questo passo compromette il calcolo di $k$ o dei coefficienti del polinomio $Q$.
