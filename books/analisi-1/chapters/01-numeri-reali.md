---
chapter: 1
title: Numeri reali
---

## p1 | Introduzione

I numeri reali costituiscono il terreno su cui si edifica tutta l'analisi matematica: limiti, continuità, derivate e integrali trovano senso solo grazie alla struttura particolare di $\mathbb{R}$, che va ben oltre quella di $\mathbb{Q}$. Questo capitolo costruisce gli strumenti concettuali e tecnici indispensabili per affrontare con rigore ogni argomento successivo del corso.

Non sono richieste conoscenze pregresse specifiche: il capitolo parte dagli insiemi numerici di base, assumendo soltanto familiarità con le operazioni aritmetiche elementari e con la logica delle proposizioni, utile per comprendere il principio di induzione e le dimostrazioni per casi legate al valore assoluto.

Al termine del percorso lo studente saprà collocare correttamente $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ e $\mathbb{C}$ nella loro gerarchia, manipolare intervalli e disuguaglianze con il valore assoluto, e dimostrare proprietà per induzione, anche utilizzando il coefficiente binomiale e il binomio di Newton. Soprattutto, acquisirà la capacità di determinare maggioranti, minoranti, estremo superiore e inferiore di un sottoinsieme di $\mathbb{R}$, distinguendoli con precisione da massimo e minimo.

Il punto culminante è il principio dell'estremo superiore, conseguenza dell'assioma di completezza: una proprietà che distingue profondamente $\mathbb{R}$ da $\mathbb{Q}$ e che sarà il fondamento invocato più avanti per dimostrare teoremi centrali come l'esistenza degli zeri, il teorema di Weierstrass e la convergenza delle successioni monotone limitate.

## p2 | Insiemi numerici e intervalli

### Gli insiemi numerici

Lo studio dell'Analisi Matematica si fonda su una catena di insiemi numerici, ciascuno costruito per risolvere i limiti del precedente. Vale la gerarchia di inclusione

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C},$$

"dai numeri naturali fino ai numeri complessi".

- $\mathbb{N} = \{0, 1, 2, 3, \dots\}$ è l'insieme dei **numeri naturali**; si scrive $\mathbb{N}^+ = \mathbb{N} \setminus \{0\}$ per escludere lo zero. In $\mathbb{N}$ non si può sempre sottrarre.
- $\mathbb{Z}$ è l'insieme dei **numeri interi**, che aggiunge a $\mathbb{N}$ gli opposti; in $\mathbb{Z}$ la sottrazione è sempre definita, ma non la divisione.
- $\mathbb{Q}$ è l'insieme dei **numeri razionali**, cioè dei rapporti $\frac{p}{q}$ con $p \in \mathbb{Z}$, $q \in \mathbb{Z} \setminus \{0\}$; in $\mathbb{Q}$ si possono eseguire le quattro operazioni (tranne la divisione per zero), ma non tutte le equazioni algebriche hanno soluzione razionale: ad esempio non esiste $x \in \mathbb{Q}$ tale che $x^2 = 2$.
- $\mathbb{R}$ è l'insieme dei **numeri reali**, che completa $\mathbb{Q}$ aggiungendo i numeri irrazionali. È proprio questa completezza, formalizzata dal principio dell'estremo superiore, a rendere $\mathbb{R}$ l'ambiente naturale dell'Analisi; se ne parlerà in dettaglio in [Principio dell'estremo superiore](ref:chapter/1#p6).
- $\mathbb{C}$ è l'insieme dei **numeri complessi**, della forma $z = a + ib$ con $a, b \in \mathbb{R}$; i numeri reali sono il caso particolare $z = a + i0$. I numeri complessi saranno trattati a partire da [Forma algebrica e operazioni](ref:chapter/2#p2).

Una proprietà fondamentale che lega $\mathbb{Q}$ a $\mathbb{R}$ è la densità.

**Definizione 1.1.** Un sottoinsieme $A \subseteq \mathbb{R}$ si dice denso in $\mathbb{R}$ se e solo se ogni intervallo aperto non vuoto contiene almeno un punto di $A$.

L'insieme $\mathbb{Q}$ è denso in $\mathbb{R}$: qualsiasi numero reale può essere approssimato quanto si vuole da un numero razionale, troncandone opportunamente le cifre decimali e controllando così l'errore commesso. Questa proprietà, pur rendendo $\mathbb{Q}$ "fitto" sulla retta reale, non basta a garantire la completezza: tra due razionali possono "mancare" numeri reali (come $\sqrt{2}$), ed è questo il motivo per cui il principio dell'estremo superiore vale in $\mathbb{R}$ ma non in $\mathbb{Q}$, come si vedrà più avanti.

**Errore tipico 1.1.** Confondere la densità di $\mathbb{Q}$ in $\mathbb{R}$ con l'uguaglianza $\mathbb{Q} = \mathbb{R}$: $\mathbb{Q}$ è denso ma è un sottoinsieme proprio e "più piccolo" (numerabile) di $\mathbb{R}$.

### Intervalli di $\mathbb{R}$

**Definizione 1.2.** Un sottoinsieme $I \subseteq \mathbb{R}$ si dice intervallo se e solo se per ogni $a, b \in I$ con $a < b$ si ha

$$
\{x \in \mathbb{R} : a \le x \le b\} \subseteq I,
$$

cioè $I$ "non ha buchi".

In questo libro gli intervalli si indicano sempre con parentesi quadre, mai con la notazione $(a,b)$ usata in altri testi (incluse alcune dispense di riferimento, che impiegano appunto $(a,b)$):

- $\lbrack a, b\rbrack  = \{x \in \mathbb{R} : a \le x \le b\}$, intervallo **chiuso**;
- $\rbrack a, b\lbrack  = \{x \in \mathbb{R} : a < x < b\}$, intervallo **aperto**;
- $\lbrack a, b\lbrack  = \{x \in \mathbb{R} : a \le x < b\}$ e $\rbrack a, b\rbrack  = \{x \in \mathbb{R} : a < x \le b\}$, intervalli **semiaperti**.

Gli estremi $a$ e $b$ sono detti rispettivamente estremo sinistro ed estremo destro dell'intervallo; se $a = b$ l'intervallo chiuso $\lbrack a,a\rbrack $ si riduce al singoletto $\{a\}$, mentre gli altri tipi sono vuoti.

Un intervallo può anche essere **illimitato** su uno o entrambi i lati, usando i simboli $-\infty$ e $+\infty$ (che non sono numeri reali, ma elementi di $\mathbb{R}^* = \mathbb{R} \cup \{-\infty, +\infty\}$):

- $\lbrack a, +\infty\lbrack  = \{x \in \mathbb{R} : x \ge a\}$;
- $\rbrack a, +\infty\lbrack  = \{x \in \mathbb{R} : x > a\}$;
- $\rbrack -\infty, b\rbrack  = \{x \in \mathbb{R} : x \le b\}$;
- $\rbrack -\infty, b\lbrack  = \{x \in \mathbb{R} : x < b\}$;
- $\rbrack -\infty, +\infty\lbrack  = \mathbb{R}$.

Accanto agli intervalli illimitati, conviene ricordare la nozione generale di sottoinsieme limitato: $A \subseteq \mathbb{R}$, $A \ne \emptyset$, è limitato superiormente se esiste $M \in \mathbb{R}$ tale che $x \le M$ per ogni $x \in A$, ed è limitato inferiormente se esiste $m \in \mathbb{R}$ tale che $x \ge m$ per ogni $x \in A$; $A$ è limitato se lo è in entrambi i sensi, e illimitato altrimenti. Ad esempio $ \lbrack 2, +\infty\lbrack  $ è illimitato superiormente: per ogni $M \in \mathbb{R}$ esiste sempre un elemento di $\lbrack 2,+\infty\lbrack $ maggiore di $M$. Questi concetti verranno approfonditi, insieme a maggioranti, minoranti, massimo, minimo, estremo superiore ed estremo inferiore, nella sezione [Maggioranti, minoranti ed estremi](ref:chapter/1#p5).

**Esempio 1.1.** Scriviamo come intervallo l'insieme delle soluzioni di $1 \le x < 5$: si tratta di $\lbrack 1, 5\lbrack $, limitato, chiuso a sinistra e aperto a destra, con $\min = 1$ ma privo di massimo (il punto $5$ non è incluso).

**Errore tipico 1.2.** Scrivere $\lbrack 1, 5)$ o $(1, 5\rbrack $ mescolando parentesi tonde e quadre: in questo testo la semiapertura si indica sempre spostando la parentesi quadra dal lato chiuso verso l'esterno, cioè $\lbrack 1, 5\lbrack $ e $\rbrack 1, 5\rbrack $, mai con parentesi tonde.

## p3 | Principio di induzione e coefficiente binomiale

### Il principio di induzione

Molte proposizioni matematiche riguardano una proprietà $P(n)$ che deve valere per ogni numero naturale $n$ (o per ogni $n$ a partire da un certo $n_0$). Verificarla caso per caso è impossibile, perché i naturali sono infiniti: il principio di induzione fornisce uno strumento rigoroso per dimostrare enunciati di questo tipo con un numero finito di passi.

**Teorema 1.1 (Principio di induzione).** *Sia $P(n)$ una proposizione definita per ogni $n \in \mathbb{N}$ con $n \geq n_0$, dove $n_0 \in \mathbb{N}$ è fissato. Se:*

1. *(base induttiva) $P(n_0)$ è vera;*
2. *(passo induttivo) per ogni $n \geq n_0$, se $P(n)$ è vera allora è vera anche $P(n+1)$;*

*allora $P(n)$ è vera per ogni $n \geq n_0$.*

L'idea è quella dell'"effetto domino": la base garantisce che il primo tassello cada, e il passo induttivo garantisce che ogni tassello, cadendo, fa cadere il successivo; dunque cadono tutti i tasselli da $n_0$ in avanti.

**Errore tipico 1.3.** Molti studenti, nel passo induttivo, dimenticano di usare l'ipotesi induttiva "$P(n)$ vera" per dedurre $P(n+1)$, limitandosi a verificare $P(n+1)$ per un valore fissato di $n$: questa è una semplice verifica puntuale, che non prova nulla per gli $n$ successivi. Diverso è il caso in cui $P(n+1)$ venga dimostrata a partire da un $n$ arbitrario (cioè senza fissarne il valore, ma lasciandolo generico), senza però appoggiarsi all'ipotesi induttiva: in tal caso la dimostrazione, pur non essendo un'induzione in senso stretto, è comunque valida per ogni indice successivo, perché l'arbitrarietà di $n$ garantisce che l'argomento si applichi a tutti i casi. Il vero problema nasce solo quando si sostituisce un $n$ arbitrario con un valore numerico specifico.

**Esempio 1.2.** Dimostriamo che per ogni $n \in \mathbb{N}^+$ vale

$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}.$$

*Base:* per $n=1$ si ha $\sum_{k=1}^1 k = 1$ e $\frac{1 \cdot 2}{2} = 1$, dunque la formula è vera.

*Passo induttivo:* supponiamo vera $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$ (ipotesi induttiva) e mostriamo che vale per $n+1$:

$$\sum_{k=1}^{n+1} k = \sum_{k=1}^{n} k + (n+1) = \frac{n(n+1)}{2} + (n+1) = \frac{n(n+1) + 2(n+1)}{2} = \frac{(n+1)(n+2)}{2},$$

che è esattamente la formula richiesta con $n+1$ al posto di $n$. Per il principio di induzione la formula vale per ogni $n \geq 1$. $\square$

**Esempio 1.3 (disuguaglianza di Bernoulli).** Per ogni $x \geq -1$ e per ogni $n \in \mathbb{N}^+$ vale

$$(1+x)^n \geq 1 + nx.$$

*Base:* per $n=1$ la proprietà si riduce a $(1+x)^1 = 1+x \geq 1 + x$, che è vera (con il segno di uguaglianza). Si parte da $n=1$ e non da $n=0$ perché per $x=-1$ l'espressione $(1+x)^0$ coinvolgerebbe $0^0$, che non è definito.

*Passo induttivo:* supponiamo $(1+x)^n \geq 1+nx$. Poiché $1+x \geq 0$ (per ipotesi $x \geq -1$), moltiplicando entrambi i membri per $1+x$ si conserva il verso della disuguaglianza:

$$(1+x)^{n+1} = (1+x)^n(1+x) \geq (1+nx)(1+x) = 1 + (n+1)x + nx^2 \geq 1 + (n+1)x,$$

dove l'ultima disuguaglianza segue da $nx^2 \geq 0$. Dunque la proprietà vale per $n+1$, e per induzione per ogni $n \in \mathbb{N}^+$. $\square$

### Coefficiente binomiale

**Definizione 1.3.** Per $n, k \in \mathbb{N}$ con $0 \leq k \leq n$, il **coefficiente binomiale** è

$$\binom{n}{k} = \frac{n!}{k!(n-k)!},$$

dove $n! = n(n-1)\cdots 2 \cdot 1$ per $n \geq 1$ e $0! = 1$.

Il numero $\binom{n}{k}$ conta quanti sottoinsiemi di $k$ elementi si possono scegliere da un insieme di $n$ elementi; da questa interpretazione discendono le proprietà fondamentali:

- **Simmetria:** $\binom{n}{k} = \binom{n}{n-k}$, perché scegliere $k$ elementi da tenere equivale a scegliere $n-k$ elementi da scartare.
- **Casi estremi:** $\binom{n}{0} = \binom{n}{n} = 1$.
- **Formula di Tartaglia (Pascal):** $\binom{n+1}{k} = \binom{n}{k-1} + \binom{n}{k}$ per $1 \leq k \leq n$, che genera il triangolo di Tartaglia riga per riga.

:::formula{id="1.1" label="Coefficiente binomiale"}
$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$
:::

### La formula del binomio di Newton

**Teorema 1.2 (Binomio di Newton).** *Per ogni $a, b \in \mathbb{R}$ (o anche $a,b \in \mathbb{C}$) e ogni $n \in \mathbb{N}^+$ vale*

$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k.$$

:::formula{id="1.2" label="Binomio di Newton"}
$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$
:::

Nella somma, ogni fattore con esponente $0$ vale per convenzione $1$ e viene semplicemente omesso dal prodotto, anche quando la base corrispondente è $a=0$ oppure $b=0$: ciò evita di dover dare significato a $0^0$. Ad esempio, per $a=0$ tutti i termini con $k<n$ contengono un fattore $a^{n-k}$ con $n-k \geq 1$ e sono quindi nulli, mentre resta il solo termine con $k=n$, cioè $b^n$, che a sua volta vale $0$ se anche $b=0$.

La dimostrazione standard procede per induzione su $n$, usando la formula di Tartaglia nel passo induttivo per ricombinare i termini della somma. La base è $n=1$, per cui la formula si riduce a $a+b=a+b$; l'identità $\binom{n}{k-1}+\binom{n}{k}=\binom{n+1}{k}$ consente poi di passare da $n$ a $n+1$.

**Esempio 1.4.** Sviluppiamo $(a+b)^4$. Dalla riga $n=4$ del triangolo di Tartaglia i coefficienti sono $1, 4, 6, 4, 1$, quindi

$$(a+b)^4 = a^4 + 4a^3 b + 6 a^2 b^2 + 4 a b^3 + b^4.$$

**Errore tipico 1.4.** Un errore frequente è scrivere $\binom{n}{k}$ come $n \cdot k$ oppure confondere l'ordine degli esponenti, dimenticando che l'esponente di $a$ decresce da $n$ a $0$ mentre quello di $b$ cresce da $0$ a $n$: conviene sempre controllare che la somma degli esponenti in ogni termine sia uguale a $n$.

Il principio di induzione tornerà utile più avanti, ad esempio nel verificare formule chiuse per successioni ricorsive (si veda [Successioni e sottosuccessioni](ref:chapter/4#p5)) e nel calcolo con i numeri complessi tramite la formula di De Moivre (si veda [Forma trigonometrica ed esponenziale](ref:chapter/2#p3)).

## p4 | Valore assoluto

Il valore assoluto (o modulo) di un numero reale misura la sua distanza dall'origine, indipendentemente dal segno. Compare nella definizione degli intorni, dei limiti e della continuità, nello studio della derivabilità della funzione $f(x)=|x|$ e nella stima degli integrali.

### Definizione e proprietà fondamentali

**Definizione 1.4.** Sia $x \in \mathbb{R}$. Si chiama **valore assoluto** (o modulo) di $x$ il numero

$$|x| = \begin{cases} x & \text{se } x \ge 0 \\ -x & \text{se } x < 0 \end{cases}$$

Dalla definizione segue che $|x| \ge 0$ per ogni $x \in \mathbb{R}$, che $|x|=0$ se e solo se $x=0$ e che $|-x|=|x|$. Geometricamente, $|x|$ è la distanza di $x$ dall'origine sulla retta reale; più in generale, $|x-y|$ è la distanza tra $x$ e $y$. Un **intorno** di centro $x_0$ e raggio $r>0$ è l'intervallo aperto $I_r(x_0)=(x_0-r,x_0+r)=\{x\in\mathbb{R}:|x-x_0|<r\}$.

Nella definizione di limite $\lim_{x\to x_0}f(x)=\ell$, quando $x$ si avvicina a $x_0$ nel dominio di $f$ con $x\ne x_0$, si richiede che $|f(x)-\ell|<\varepsilon$ per $|x-x_0|<\delta$; il valore $f(x_0)$ potrebbe non essere definito. Per la continuità in $x_0$, invece, $f(x_0)$ è definito e si richiede $|f(x)-f(x_0)|<\varepsilon$ per $|x-x_0|<\delta$.

Valgono inoltre le seguenti proprietà algebriche, che si verificano distinguendo i casi di segno:

- $|x \cdot y| = |x| \cdot |y|$ per ogni $x, y \in \mathbb{R}$;
- $\left| \dfrac{x}{y} \right| = \dfrac{|x|}{|y|}$ per ogni $x \in \mathbb{R}$, $y \ne 0$;
- $|x|^2 = x^2$, da cui $|x| = \sqrt{x^2}$;
- $-|x| \le x \le |x|$ per ogni $x \in \mathbb{R}$.

Per i numeri complessi restano valide le proprietà del modulo del prodotto e del quoziente. Se $z=a+ib$, il quadrato del modulo è $|z|^2=a^2+b^2=z\bar z$; in generale non è uguale a $z^2$. La disuguaglianza $-|x|\le x\le |x|$ riguarda i numeri reali, perché i numeri complessi non sono ordinati in questo modo.

### La disuguaglianza triangolare

Il risultato più importante riguardante il valore assoluto è la disuguaglianza triangolare, che useremo per stimare somme e differenze.

**Teorema 1.3 (disuguaglianza triangolare).** Per ogni $x, y \in \mathbb{R}$ si ha

:::formula{id="1.3" label="Disuguaglianza triangolare"}
$$|x + y| \le |x| + |y|$$
:::

**Dimostrazione.** Dalla proprietà $-|x| \le x \le |x|$ e $-|y| \le y \le |y|$, sommando membro a membro si ottiene

$$-(|x|+|y|) \le x+y \le |x|+|y|,$$

dalle quali segue $|x+y| \le |x|+|y|$, poiché per ogni $a \ge 0$ si ha $|t| \le a \iff -a \le t \le a$. $\square$

Applicando il teorema a $x = a-b$ e $y = b$ si ottiene $|a| \le |a-b| + |b|$, cioè $|a|-|b| \le |a-b|$; scambiando $a$ e $b$ si ha anche $|b|-|a| \le |b-a| = |a-b|$. Combinando le due disuguaglianze si ottiene la forma inversa della disuguaglianza triangolare:

:::formula{id="1.4" label="Disuguaglianza triangolare inversa"}
$$\big||x|-|y|\big| \le |x-y|$$
:::

valida per ogni $x, y \in \mathbb{R}$. Una conseguenza utile nel calcolo degli integrali è che, se $a\le b$ e $f$ è integrabile su $\lbrack a,b\rbrack $, allora $\left|\int_a^b f(x)\,dx\right|\le\int_a^b|f(x)|\,dx$. Il risultato sarà ripreso nel capitolo sugli integrali.

### Equazioni e disequazioni con valore assoluto

Per risolvere equazioni e disequazioni in cui compare uno o più valori assoluti, il metodo generale consiste nell'eliminare il modulo distinguendo i casi secondo il segno dell'argomento, oppure usando le seguenti equivalenze, valide per $a \ge 0$:

$$|f(x)| = a \iff f(x) = a \ \text{ oppure } \ f(x) = -a,$$

$$|f(x)| < a \iff -a < f(x) < a, \qquad |f(x)| > a \iff f(x) < -a \ \text{ oppure } \ f(x) > a.$$

Se al secondo membro compare un'espressione $g(x)$ il cui segno non è noto, occorre distinguere i casi:

- $|f(x)|=g(x)$ richiede $g(x)\ge 0$; sotto questa condizione equivale a $f(x)=g(x)$ oppure $f(x)=-g(x)$.
- $|f(x)|<g(x)$ richiede $g(x)>0$ e allora equivale a $-g(x)<f(x)<g(x)$. Per $|f(x)|\le g(x)$ è necessario $g(x)\ge 0$ e vale l'equivalenza con $-g(x)\le f(x)\le g(x)$.
- $|f(x)|>g(x)$ è sempre vera dove $g(x)<0$; dove $g(x)\ge 0$ equivale a $f(x)<-g(x)$ oppure $f(x)>g(x)$. Analogamente, $|f(x)|\ge g(x)$ è sempre vera dove $g(x)\le 0$; dove $g(x)>0$ equivale a $f(x)\le-g(x)$ oppure $f(x)\ge g(x)$.

**Esempio 1.5.** Risolviamo la disequazione

$$|2x - 1| \le x + 2.$$

Il membro di sinistra è sempre $\ge 0$, quindi è necessario che $x + 2 \ge 0$, cioè $x \ge -2$. Sotto questa condizione la disequazione equivale al sistema

$$-(x+2) \le 2x-1 \le x+2,$$

che si scompone in due disequazioni:

$$2x - 1 \le x+2 \implies x \le 3,$$

$$2x-1 \ge -(x+2) \implies 3x \ge -1 \implies x \ge -\tfrac{1}{3}.$$

Mettendo insieme le condizioni $x \ge -2$, $x \le 3$ e $x \ge -\tfrac{1}{3}$, l'insieme delle soluzioni è

$$S = \left\lbrack -\tfrac{1}{3}, 3\right\rbrack .$$

**Esempio 1.6.** Risolviamo ora l'equazione con due valori assoluti

$$|x-1| - |x+2| = 1.$$

I punti in cui gli argomenti si annullano sono $x=1$ e $x=-2$; distinguiamo quindi tre intervalli.

Per $x < -2$: $|x-1| = 1-x$, $|x+2| = -x-2$, e l'equazione diventa $(1-x) - (-x-2) = 3$, che non è mai uguale a $1$: nessuna soluzione in questo intervallo.

Per $-2 \le x < 1$: $|x-1| = 1-x$, $|x+2| = x+2$, e l'equazione diventa $(1-x)-(x+2) = -2x-1 = 1$, da cui $x = -1$, che appartiene all'intervallo considerato.

Per $x \ge 1$: $|x-1| = x-1$, $|x+2| = x+2$, e l'equazione diventa $(x-1)-(x+2) = -3$, mai uguale a $1$: nessuna soluzione.

Quindi l'unica soluzione è $x = -1$.

La funzione $f(x) = |x|$, in particolare, non è derivabile nell'origine: i limiti del rapporto incrementale da destra e da sinistra valgono rispettivamente $1$ e $-1$, finiti ma diversi, e $x=0$ è quindi un punto angoloso, come vedremo nel capitolo sulla derivabilità.

:::image{src="assets/122916aa-grafico-valore-assoluto.svg" alt="Grafico della funzione valore assoluto con punto angoloso nell'origine" caption="Fig. 1.1 — Grafico di f(x) = |x|: le due semirette formano un punto angoloso in x = 0"}
:::

### Errori tipici

**Errore tipico 1.5.** Scrivere $\sqrt{x^2} = x$ senza condizioni: in realtà $\sqrt{x^2} = |x|$, e l'uguaglianza $\sqrt{x^2}=x$ vale solo se $x \ge 0$.

**Errore tipico 1.6.** Risolvere $|f(x)|<g(x)$ senza imporre $g(x)>0$, oppure elevare al quadrato prima di controllare il segno di $g(x)$. Se $g(x)\le 0$, la disequazione stretta è falsa; elevarla al quadrato senza questa verifica può introdurre soluzioni spurie.

**Errore tipico 1.7.** Semplificare $|a+b|$ come $|a|+|b|$: la disuguaglianza triangolare è in generale stretta, e l'uguaglianza $|a+b|=|a|+|b|$ vale se e solo se $a$ e $b$ hanno lo stesso segno (o uno dei due è nullo). Un uso corretto e consapevole di moduli e radici, insieme alle loro proprietà fondamentali, è uno dei requisiti di base richiesti nella prova scritta.

## p5 | Maggioranti, minoranti ed estremi

Dato un sottoinsieme $A \subseteq \mathbb{R}$, una delle prime domande che ci si pone è se i suoi elementi possano crescere o decrescere indefinitamente, oppure se restino confinati entro certi limiti. Questa sezione formalizza l'idea di insieme limitato e introduce gli strumenti — maggioranti, minoranti, massimo, minimo, estremo superiore ed estremo inferiore — che permettono di descrivere con precisione il comportamento "ai bordi" di un insieme di numeri reali.

### Insiemi limitati, maggioranti e minoranti

Sia $A \subseteq \mathbb{R}$, $A \neq \varnothing$.

**Definizione 1.5.** $A$ si dice **limitato superiormente** se $\exists M \in \mathbb{R}$ tale che $\forall x \in A$ si ha $x \leq M$. Ogni numero $M$ con questa proprietà si chiama **maggiorante** di $A$.

**Definizione 1.6.** $A$ si dice **limitato inferiormente** se $\exists m \in \mathbb{R}$ tale che $\forall x \in A$ si ha $x \geq m$. Ogni numero $m$ con questa proprietà si chiama **minorante** di $A$.

**Definizione 1.7.** $A$ si dice **limitato** se è limitato sia superiormente che inferiormente, cioè se esistono $m, M \in \mathbb{R}$ tali che $m \leq x \leq M$ per ogni $x \in A$.

Un insieme che non è limitato si dice **illimitato**. Attenzione: basta che l'insieme sia illimitato da un solo lato (superiormente oppure inferiormente) per dire che è illimitato nel suo complesso; non è necessario che lo sia da entrambi i lati.

Se $A$ non è limitato superiormente, nessun numero reale può fare da maggiorante: per ogni $M \in \mathbb{R}$ esiste sempre qualche $x \in A$ con $x > M$. In questo caso si scrive convenzionalmente $\sup A = +\infty$. Analogamente, se $A$ non è limitato inferiormente si scrive $\inf A = -\infty$.

È importante osservare che un maggiorante (o un minorante) di $A$ non deve necessariamente appartenere ad $A$, e di solito non è unico. Ad esempio, se $A = \lbrack 0,1\rbrack  \cup \{2\}$, sia $M = 2$ sia $M = 250$ sono maggioranti di $A$: infatti ogni elemento di $A$ è $\leq 250$ e anche $\leq 2$. In generale, se $M$ è un maggiorante di $A$, anche ogni $M' > M$ lo è.

**Esempio 1.7.** L'insieme $A = \lbrack 2, +\infty\lbrack $ è illimitato superiormente: per ogni $M \in \mathbb{R}$, scegliendo $x = \max\{2, M+1\}$ si ha $x \in A$ e $x > M$. È invece limitato inferiormente, e $m=2$ è un minorante.

### Massimo e minimo

Un maggiorante può appartenere o no all'insieme. Quando ciò accade, si parla di massimo.

**Definizione 1.8.** $M \in \mathbb{R}$ è il **massimo** di $A$ (si scrive $M = \max A$) se e solo se:
1. $M$ è un maggiorante di $A$, cioè $x \leq M$ per ogni $x \in A$;
2. $M \in A$.

Analogamente, $m \in \mathbb{R}$ è il **minimo** di $A$ (si scrive $m = \min A$) se e solo se $m$ è un minorante di $A$ e $m \in A$.

Riprendendo l'esempio $A = \lbrack 0,1\rbrack  \cup \{2\}$: $M = 2$ è un maggiorante che appartiene ad $A$, quindi $M = \max A$; invece $M = 250$, pur essendo un maggiorante, non appartiene ad $A$ e dunque non è il massimo. Il minimo di $A$ è $m = 0$, che è un minorante appartenente ad $A$.

Non tutti gli insiemi limitati possiedono massimo o minimo: ad esempio $A = \,\rbrack 0,1\lbrack \,$ è limitato (ogni elemento è compreso tra $0$ e $1$) ma non ha né massimo né minimo, perché $0$ e $1$ non appartengono ad $A$ e, per ogni elemento $x \in A$, si può sempre trovare un elemento di $A$ più vicino ai bordi. Serve quindi una nozione più fine, che catturi il comportamento "al limite" anche quando massimo e minimo non esistono: è l'estremo superiore e l'estremo inferiore.

**Errore tipico:** confondere maggiorante con massimo. Un maggiorante è un qualunque numero reale che domina l'insieme dall'alto (e non è unico, né deve appartenere ad $A$); il massimo, se esiste, è l'unico maggiorante che appartiene ad $A$. Molti studenti scrivono "$M = \max A$" quando in realtà $M$ è soltanto uno dei maggioranti.

### Caratterizzazione degli estremi

Tra tutti i maggioranti di un insieme limitato superiormente, ce n'è uno privilegiato: il più piccolo. Questo numero si chiama estremo superiore.

**Definizione 1.9.** Sia $A \subseteq \mathbb{R}$, $A \neq \varnothing$, limitato superiormente. $M \in \mathbb{R}$ è l'**estremo superiore** di $A$ (si scrive $M = \sup A$) se $M$ è il minimo dei maggioranti di $A$. Se $M \in A$, allora $\sup A = \max A$.

In modo del tutto analogo, se $A$ è limitato inferiormente, l'**estremo inferiore** $\inf A$ è il massimo dei minoranti di $A$; se $\inf A \in A$, allora $\inf A = \min A$.

La definizione "minimo dei maggioranti" è corretta ma poco maneggevole nella pratica degli esercizi. È molto più utile la seguente caratterizzazione equivalente, formulata con un $\varepsilon$ arbitrario.

:::formula{id="1.5" label="Caratterizzazione dell'estremo superiore"}
$$M = \sup A \iff \begin{cases} \forall x \in A, \quad x \leq M \\ \forall \varepsilon > 0 \ \exists x \in A \ \text{tale che} \ M - \varepsilon < x \end{cases}$$
:::

La prima condizione dice che $M$ è un maggiorante di $A$. La seconda dice che $M$ è il più piccolo dei maggioranti: comunque si scelga una quantità positiva $\varepsilon$, anche piccolissima, il numero $M - \varepsilon$ non è più un maggiorante, perché esiste almeno un elemento di $A$ che lo supera. In altre parole, nessun numero più piccolo di $M$ può fare da maggiorante: l'insieme $A$ si "avvicina" a $M$ quanto si vuole.

In modo simmetrico si caratterizza l'estremo inferiore.

:::formula{id="1.6" label="Caratterizzazione dell'estremo inferiore"}
$$m = \inf A \iff \begin{cases} \forall x \in A, \quad x \geq m \\ \forall \varepsilon > 0 \ \exists x \in A \ \text{tale che} \ x < m + \varepsilon \end{cases}$$
:::

Anche qui, la seconda condizione esprime il fatto che $m$ è il più grande dei minoranti: se si somma a $m$ una quantità positiva $\varepsilon$, si supera sempre qualche elemento di $A$, per cui nessun numero maggiore di $m$ può essere un minorante.

**Esempio 1.8.** Verifichiamo che $\sup A = 1$ per $A = \,\rbrack 0,1\lbrack \,$.

Intanto $1$ è un maggiorante, perché $x < 1$ per ogni $x \in A$ (quindi in particolare $x \leq 1$). Verifichiamo la seconda condizione: fissato un arbitrario $\varepsilon > 0$, dobbiamo trovare $x \in A$ tale che $1 - \varepsilon < x$. Se $\varepsilon \geq 1$, basta prendere un qualunque $x \in A$, ad esempio $x = \tfrac{1}{2}$, perché $1 - \varepsilon \leq 0 < \tfrac12$. Se $0 < \varepsilon < 1$, possiamo scegliere

$$
x = 1 - \frac{\varepsilon}{2},
$$

che soddisfa $0 < x < 1$ (quindi $x \in A$) e $1 - \varepsilon < x$. In entrambi i casi esiste l'elemento richiesto, dunque la seconda condizione è verificata per ogni $\varepsilon > 0$, e si conclude $\sup A = 1$. Si noti che $1 \notin A$: l'estremo superiore esiste anche quando il massimo non esiste.

Con un ragionamento analogo si verifica che $\inf A = 0$, e nemmeno questo valore appartiene ad $A$: anche in questo caso minimo ed estremo inferiore non coincidono.

**Esempio 1.9.** Consideriamo la successione $a_n = \dfrac{n}{n+1}$ per $n \in \mathbb{N}$, e studiamo $A = \{a_n : n \in \mathbb{N}\}$.

Poiché $a_n = 1 - \dfrac{1}{n+1}$, si ha $a_n < 1$ per ogni $n$, e $a_n$ cresce al crescere di $n$: il più piccolo elemento è $a_0 = 0$, che quindi è il minimo di $A$ (e coincide con $\inf A$). L'insieme è limitato superiormente da $M = 1$, e si verifica facilmente la caratterizzazione con $\varepsilon$: fissato $\varepsilon > 0$, basta scegliere $n$ sufficientemente grande da avere $\dfrac{1}{n+1} < \varepsilon$, cioè $n > \dfrac{1}{\varepsilon} - 1$; per un tale $n$ si ha $a_n = 1 - \dfrac{1}{n+1} > 1 - \varepsilon$. Dunque $\sup A = 1$. Poiché nessun termine della successione raggiunge mai il valore $1$, l'insieme non ha massimo.

**Errore tipico:** nella verifica della condizione con $\varepsilon$, dimenticare che $\varepsilon$ deve essere arbitrario e trovare l'elemento $x \in A$ solo per qualche valore particolare di $\varepsilon$ (ad esempio solo per $\varepsilon = 0{,}1$). La dimostrazione è completa solo se si esibisce, per ogni $\varepsilon > 0$ generico, un elemento $x \in A$ che soddisfa la disuguaglianza richiesta, come fatto negli esempi precedenti.

Osserviamo infine che sup e inf, quando esistono finiti, sono unici: se $M_1$ e $M_2$ fossero entrambi estremo superiore di $A$, ciascuno sarebbe il minimo dei maggioranti, quindi $M_1 \leq M_2$ e $M_2 \leq M_1$, da cui $M_1 = M_2$.

L'esistenza dell'estremo superiore per ogni insieme non vuoto e limitato superiormente di numeri reali non è un fatto ovvio: è un risultato fondamentale, legato alla struttura completa di $\mathbb{R}$, che viene enunciato e discusso nella prossima sezione come [principio dell'estremo superiore](ref:chapter/1#p6).

## p6 | Principio dell'estremo superiore

Nella sezione precedente abbiamo visto come, per un insieme $A \subseteq \mathbb{R}$ limitato superiormente, l'estremo superiore $\sup A$ sia il minimo dei maggioranti, caratterizzato dalla proprietà {{formula:1.5}} (ragionamento analogo per $\inf A$, caratterizzato da {{formula:1.6}}). Resta però da chiarire una domanda cruciale, finora data per scontata negli esempi svolti: un insieme limitato superiormente **ammette sempre** un estremo superiore? La risposta è affermativa in $\mathbb{R}$, ma non in $\mathbb{Q}$, e questa differenza è proprio ciò che rende $\mathbb{R}$ l'ambiente naturale dell'Analisi Matematica.

### L'assioma di completezza (Dedekind)

La proprietà che garantisce l'esistenza dell'estremo superiore si chiama **assioma di continuità**, o **assioma di Dedekind**, ed è uno degli assiomi che caratterizzano $\mathbb{R}$ fra tutti i campi ordinati. Esso afferma che, se $A$ e $B$ sono sottoinsiemi non vuoti di $\mathbb{R}$ tali che ogni elemento di $A$ è minore o uguale a ogni elemento di $B$, allora esiste un numero reale $c$ tale che $x \le c \le M$ per ogni $x \in A$ e ogni $M \in B$. Questo è esattamente ciò che manca a $\mathbb{Q}$: come vedremo, esistono separazioni di $\mathbb{Q}$ che non hanno nessun elemento separatore razionale.

### Teorema 5.1 (Principio dell'estremo superiore e dell'estremo inferiore)

Sia $A \subseteq \mathbb{R}$, $A \ne \emptyset$.

- Se $A$ è limitato superiormente, allora $A$ ammette estremo superiore, cioè esiste $\sup A \in \mathbb{R}$.
- Se $A$ è limitato inferiormente, allora $A$ ammette estremo inferiore, cioè esiste $\inf A \in \mathbb{R}$.

:::formula{id="1.7" label="Principio dell'estremo superiore"}
$$A \subseteq \mathbb{R},\ A \ne \emptyset,\ A \text{ limitato superiormente} \implies \exists \sup A \in \mathbb{R}$$
:::

Questo risultato segue dall'assioma di continuità di Dedekind, cioè l'assioma di completezza di $\mathbb{R}$ implica il principio dell'estremo superiore.

**Dimostrazione** (del caso superiormente limitato). Sia $A$ limitato superiormente, cosicché esiste $M \in \mathbb{R}$ tale che $x \le M$ per ogni $x \in A$. Indichiamo con

$$
M_A = \{M \in \mathbb{R} : M \text{ è maggiorante di } A\}.
$$

Per costruzione $A$ e $M_A$ sono insiemi separati, cioè $x \le M$ per ogni $x \in A$ e ogni $M \in M_A$. Per l'assioma di Dedekind esiste allora $c \in \mathbb{R}$ tale che

$$
x \le c \le M \qquad \forall x \in A,\ \forall M \in M_A.
$$

Dalla prima disuguaglianza, $c$ è un maggiorante di $A$. Dalla seconda, $c$ è minore o uguale a ogni altro maggiorante di $A$, dunque $c$ è il più piccolo dei maggioranti, cioè $c = \sup A$. $\quad\square$

La dimostrazione per l'estremo inferiore è analoga, scambiando il ruolo di maggioranti e minoranti.

**Osservazione 1.1.** Il teorema garantisce l'**esistenza** di $\sup A$ e $\inf A$, ma non fornisce un metodo per calcolarli: per questo si continua a usare la caratterizzazione con $\varepsilon$ vista nella sezione precedente, oppure si identifica l'estremo per via diretta quando l'insieme è descritto da una formula semplice.

### Perché il principio fallisce in $\mathbb{Q}$

L'insieme $\mathbb{Q}$ è denso in $\mathbb{R}$: ogni intervallo aperto $\rbrack a,b\lbrack $ contiene almeno un punto di $\mathbb{Q}$, poiché ogni numero reale può essere approssimato quanto si vuole da un numero razionale arrotondandolo a un numero sufficiente di cifre decimali, con errore controllato. Tuttavia la densità non basta a garantire la completezza: $\mathbb{Q}$, con l'ordine usuale, **non** verifica l'assioma di Dedekind, e dunque il principio dell'estremo superiore può fallire se ci si limita a lavorare dentro $\mathbb{Q}$.

**Esempio 1.10.** Consideriamo l'insieme

$$
A = \{x \in \mathbb{Q} : x^2 < 2\}.
$$

$A$ è un sottoinsieme non vuoto di $\mathbb{Q}$ (contiene ad esempio $x=1$) ed è limitato superiormente in $\mathbb{Q}$ (ogni razionale $M > \sqrt2$, come $M=2$, è un maggiorante). Se $A$ ammettesse un estremo superiore $c \in \mathbb{Q}$, dovrebbe essere necessariamente $c^2 = 2$, poiché:

- se fosse $c^2 < 2$, si potrebbe costruire un razionale $c' > c$ con $c'^2 < 2$ ancora in $A$, contraddicendo la minimalità di $c$ come maggiorante;
- se fosse $c^2 > 2$, si potrebbe trovare un razionale $c'' < c$ che resta maggiorante di $A$, contraddicendo la minimalità di $c$.

Ma non esiste alcun numero razionale $c$ con $c^2 = 2$ (è il classico risultato sull'irrazionalità di $\sqrt2$). Dunque $A$, benché limitato superiormente in $\mathbb{Q}$, **non ammette estremo superiore in $\mathbb{Q}$**: il "candidato" naturale, $\sqrt2$, semplicemente non appartiene a $\mathbb{Q}$. In $\mathbb{R}$, invece, lo stesso insieme (visto come sottoinsieme di $\mathbb{R}$) ammette estremo superiore, ed è esattamente $\sup A = \sqrt2$, in accordo con il Teorema 5.1.

Questo esempio mostra concretamente perché serve un assioma apposito (quello di Dedekind) per passare da $\mathbb{Q}$ a $\mathbb{R}$: $\mathbb{R}$ si può pensare come il "completamento" di $\mathbb{Q}$, ottenuto riempiendo esattamente i buchi come quello appena descritto.

### Errore tipico

Uno sbaglio frequente è confondere la densità di $\mathbb{Q}$ in $\mathbb{R}$ con la completezza: il fatto che tra due razionali qualsiasi ce ne sia sempre un altro (e quindi infiniti altri) non implica che ogni sottoinsieme limitato di $\mathbb{Q}$ abbia un estremo superiore razionale. Densità e completezza sono proprietà distinte: $\mathbb{Q}$ ha la prima ma non la seconda, mentre $\mathbb{R}$ ha entrambe. Un altro errore comune è pensare che il principio dell'estremo superiore serva a *calcolare* $\sup A$: il teorema afferma solo che $\sup A$ esiste come numero reale, non fornisce una formula; il calcolo effettivo richiede l'analisi diretta dell'insieme o l'uso della caratterizzazione con $\varepsilon$.

Il principio dell'estremo superiore e inferiore sarà lo strumento fondamentale per dimostrare, più avanti, risultati come il teorema di esistenza degli zeri e il teorema di Weierstrass per le funzioni continue (si vedano le sezioni [Teorema di esistenza degli zeri](ref:chapter/5#p4) e [Teorema di Weierstrass](ref:chapter/5#p5)), oltre a garantire la buona definizione di limiti di successioni monotone limitate.
