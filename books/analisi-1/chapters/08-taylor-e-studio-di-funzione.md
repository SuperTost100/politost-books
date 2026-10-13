---
chapter: 8
title: Formula di Taylor e studio di funzione
---

## p1 | Introduzione

Quando una funzione non è immediatamente riconducibile ai limiti notevoli o alle regole elementari di derivazione, serve uno strumento più potente: la possibilità di approssimare una funzione qualsiasi, nell'intorno di un punto, con un polinomio che ne riproduce il comportamento fino a un ordine arbitrario di precisione. Questo è il contenuto della formula di Taylor, che in questo capitolo diventa il filo conduttore per affrontare due problemi classici dell'analisi: il calcolo di limiti altrimenti indeterminati e la costruzione del grafico di una funzione in ogni suo dettaglio qualitativo.

Per seguire la trattazione occorre padroneggiare il calcolo differenziale di base: derivate di ordine superiore, regole di derivazione, significato geometrico di derivata prima e seconda, e una certa familiarità con il calcolo dei limiti e con il simbolo di o-piccolo.

Al termine del capitolo lo studente saprà scrivere lo sviluppo di Taylor delle funzioni elementari e utilizzarlo per risolvere limiti in forme indeterminate, determinando con precisione ordine di infinitesimo e parte principale. Saprà inoltre classificare i punti stazionari di una funzione tramite il segno delle derivate successive, distinguere convessità, concavità e punti di flesso, e infine condurre uno studio di funzione completo, dal dominio al grafico qualitativo, includendo il caso in cui la funzione dipenda da un parametro da determinare a posteriori.

## p2 | Polinomio e formula di Taylor

### Motivazione: migliorare l'approssimazione lineare

Nella sezione sulla [derivata e la retta tangente](ref:chapter/7#p2) abbiamo visto la prima formula dell'incremento finito

$$f(x) = f(x_0) + f'(x_0)(x-x_0) + o(x-x_0) \qquad x \to x_0,$$

che approssima $f$ vicino a $x_0$ con la retta tangente, commettendo un errore trascurabile rispetto a $(x-x_0)$.

Per ottenere un'approssimazione migliore proviamo ad aggiungere un termine di secondo grado, cercando $A \in \mathbb{R}$ tale che

$$f(x) = f(x_0) + f'(x_0)(x-x_0) + A(x-x_0)^2 + o\big((x-x_0)^2\big) \qquad x \to x_0.$$

Se $f$ è derivabile due volte in $x_0$, applicando il teorema di de l'Hôpital al rapporto che definisce il resto si trova

$$\lim_{x\to x_0}\frac{f(x)-f(x_0)-f'(x_0)(x-x_0)-A(x-x_0)^2}{(x-x_0)^2} = \frac{1}{2}f''(x_0) - A,$$

e questo limite si annulla precisamente quando $A = \frac{1}{2}f''(x_0)$. Si ottiene così il **polinomio di Taylor di grado 2**

$$f(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{1}{2}f''(x_0)(x-x_0)^2 + o\big((x-x_0)^2\big).$$

L'idea si generalizza a un grado $n$ qualunque: più derivate successive di $f$ in $x_0$ usiamo, migliore è (in generale) l'approssimazione polinomiale vicino a $x_0$.

### Polinomio di Taylor e formula con resto di Peano

**Definizione 8.1 (Polinomio di Taylor).** Sia $n \in \mathbb{N}$ e sia $f : A \to \mathbb{R}$, con $A \subseteq \mathbb{R}$, derivabile $n$ volte nel punto $x_0 \in A$. Si chiama **polinomio di Taylor di ordine $n$ centrato in $x_0$** il polinomio

:::formula{id="8.1" label="Polinomio di Taylor di ordine n"}
$$T_{n,x_0}(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k = f(x_0) + f'(x_0)(x-x_0) + \frac{f''(x_0)}{2!}(x-x_0)^2 + \cdots + \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n.$$
:::

dove i coefficienti sono dati dalle derivate successive di $f$ calcolate in $x_0$.

**Osservazione 8.1.** Il polinomio $T_{n,x_0}$ è l'unico polinomio di grado al più $n$ tale che $T_{n,x_0}^{(k)}(x_0) = f^{(k)}(x_0)$ per ogni $k = 0, \dots, n$: condivide con $f$ il valore e le prime $n$ derivate nel punto $x_0$, e per questo ne è la migliore approssimazione polinomiale locale di quel grado.

**Teorema 8.1 (Formula di Taylor con resto di Peano).** Sia $n \in \mathbb{N}^+$. Sia $f : A \to \mathbb{R}$, con $A \subseteq \mathbb{R}$, derivabile $n$ volte in $x_0 \in A$. Allora

:::formula{id="8.2" label="Formula di Taylor con resto di Peano"}
$$f(x) = T_{n,x_0}(x) + o\big((x-x_0)^n\big) \qquad x \to x_0.$$
:::

**Osservazione 8.2.** Per $n=1$ questa formula si riduce esattamente alla prima formula dell'incremento finito.

Quando $x_0 = 0$ la formula di Taylor si chiama anche **formula (o sviluppo) di Maclaurin**.

### Formula di Taylor con resto di Lagrange

Il resto di Peano è utile per il calcolo dei limiti, perché ha solo carattere qualitativo (ci dice che l'errore è trascurabile, non quanto vale). Quando serve una stima quantitativa dell'errore si usa il resto di Lagrange.

**Teorema 8.2 (Formula di Taylor con resto di Lagrange).** Sia $n \in \mathbb{N}^+$. Sia $f : A \to \mathbb{R}$, con $A \subseteq \mathbb{R}$, derivabile $n$ volte su un intervallo $I$, con $f^{(n)}$ continua su $I$; sia $x_0 \in I$ e sia $f$ derivabile $n+1$ volte su $I \setminus \{x_0\}$. Sia $T_{n,x_0}$ il polinomio di Taylor di $f$ centrato in $x_0$ di ordine $n$. Allora, per ogni $x \in I \setminus \{x_0\}$, esiste $c$ compreso tra $x_0$ e $x$ tale che

:::formula{id="8.3" label="Formula di Taylor con resto di Lagrange"}
$$f(x) = T_{n,x_0}(x) + \frac{f^{(n+1)}(c)}{(n+1)!}(x-x_0)^{n+1}.$$
:::

Per $x = x_0$ la formula è banalmente vera senza bisogno di alcuna ipotesi su $f^{(n+1)}$: entrambi i membri valgono $f(x_0)$, poiché $T_{n,x_0}(x_0) = f(x_0)$ e il termine di resto si annulla.

Il resto di Lagrange generalizza il teorema di Lagrange ([teoremi di Fermat, Rolle e Lagrange](ref:chapter/7#p4)): si noti infatti che per $n=0$ la formula di Taylor con resto di Lagrange coincide esattamente con [formula (7.12)](ref:formula/7.12).

**Errore tipico 8.1.** Le ipotesi dei due resti sono diverse: il resto di Peano richiede solo l'esistenza di $f^{(n)}(x_0)$ nel punto, mentre il resto di Lagrange richiede, su un intervallo $I$ che contiene $x_0$, che $f$ sia derivabile $n$ volte con $f^{(n)}$ continua e derivabile $n+1$ volte almeno in $I\setminus\{x_0\}$ (Teorema 8.2). Non si può usare il resto di Lagrange se la funzione non è sufficientemente regolare in un intorno di $x_0$, e non si deve confondere il punto $c$ (generico, non noto esplicitamente) con $x_0$.

### Sviluppi di Maclaurin delle funzioni elementari

Per il calcolo dei limiti è fondamentale avere a disposizione gli sviluppi di Maclaurin (cioè centrati in $x_0=0$) con resto di Peano delle funzioni elementari. Si ottengono applicando la Definizione 8.1 e calcolando le derivate successive in $0$:

- Esponenziale:
 $\displaystyle e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)$
- Logaritmo:
 $\displaystyle \log(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3)$
- Seno:
 $\displaystyle \sin x = x - \frac{x^3}{6} + o(x^3)$
- Coseno:
 $\displaystyle \cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)$
- Potenza (binomio generalizzato), per $\alpha \in \mathbb{R}$:
 $\displaystyle (1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2 + o(x^2)$

Notiamo che per $\sin x$ e $\cos x$ compaiono solo le potenze dispari e pari di $x$ rispettivamente: è una conseguenza del fatto che il seno è dispari e il coseno è pari (vedi [Simmetrie, periodicità e funzioni particolari](ref:chapter/3#p4)); tutti i coefficienti dell'altra parità si annullano identicamente.

:::image{src="assets/8131eac5-taylor-seno.svg" alt="confronto tra sin(x) e i suoi polinomi di Taylor di grado 1 e 3 vicino a x=0" caption="Fig. 8.1 — Il polinomio di Taylor x meno x al cubo su 6 approssima sin(x) vicino a 0 meglio della sola retta tangente x"}
:::

**Errore tipico 8.2.** Molti studenti ricordano gli sviluppi solo "a memoria" senza controllare l'ordine del resto: se un esercizio richiede precisione all'ordine $x^4$ e si usa lo sviluppo del coseno troncato a $x^2$, si perde un termine che può essere decisivo nel limite. Conviene sempre determinare in anticipo l'ordine necessario guardando a che potenza i termini principali si cancellano.

### Calcolo di limiti e ordini di infinitesimo con Taylor

Lo strumento chiave per usare gli sviluppi nel calcolo dei limiti è il **principio di eliminazione dei termini trascurabili** (già incontrato in [Infiniti e infinitesimi](ref:chapter/6#p3)): se $f = o(g)$ per $x \to x_0$ ([formula (6.9)](ref:formula/6.9)), allora nelle somme i termini $o(\cdot)$ possono essere trascurati rispetto al termine dominante, purché si confrontino numeratore e denominatore in modo omogeneo.

**Esempio 8.1.** Calcoliamo

$$\lim_{x \to 0} \frac{\sin x - x}{x^3}.$$

Qui il numeratore è una forma indeterminata del tipo $0/0$ e non basta la retta tangente ($\sin x \approx x$), perché $\sin x - x$ si annullerebbe al primo ordine. Usiamo lo sviluppo di Maclaurin del seno con resto di Peano fino all'ordine 3:

$$\sin x = x - \frac{x^3}{6} + o(x^3) \qquad x \to 0.$$

Sostituendo,

$$\sin x - x = -\frac{x^3}{6} + o(x^3),$$

quindi

$$\lim_{x \to 0} \frac{\sin x - x}{x^3} = \lim_{x \to 0} \left(-\frac{1}{6} + \frac{o(x^3)}{x^3}\right) = -\frac{1}{6},$$

perché $\dfrac{o(x^3)}{x^3} \to 0$ per definizione di $o$-piccolo. In questo modo abbiamo anche determinato che $\sin x - x$ è un infinitesimo di ordine $3$ rispetto al campione $x$, con parte principale $-\dfrac{x^3}{6}$ (si veda [formula (6.10)](ref:formula/6.10)).

**Esempio 8.2.** Riprendiamo il limite

$$\lim_{x \to +\infty} \frac{e^x + x}{e^{2x} + \log x}.$$

Per $x \to +\infty$ confrontiamo i termini con la gerarchia degli infiniti ([formula (6.11)](ref:formula/6.11)): $x = o(e^x)$ e $\log x = o(e^{2x})$. Allora

$$\lim_{x \to +\infty} \frac{e^x + o(e^x)}{e^{2x} + o(e^{2x})} = \lim_{x \to +\infty} \frac{e^x}{e^{2x}} = \lim_{x \to +\infty} \frac{1}{e^x} = 0.$$

Questo esempio mostra che il principio di eliminazione dei termini trascurabili è anche il metodo naturale per trattare limiti all'infinito, non solo sviluppi locali in un punto finito: l'idea di "tenere solo il termine dominante e scartare l'$o$-piccolo" è la stessa.

**Errore tipico 8.3.** Un errore frequente è sommare o moltiplicare sviluppi di ordini diversi senza controllare che il risultato finale sia coerente. Per esempio, consideriamo

$$\lim_{x\to 0}\frac{e^x(1+x)-1-2x}{x^2}.$$

Usiamo gli sviluppi $e^x=1+x+\frac{x^2}{2}+o(x^2)$ e $1+x=1+x$. Nel prodotto conserviamo i termini fino al secondo ordine: i prodotti di grado superiore sono $o(x^2)$, dunque

$$e^x(1+x)=\left(1+x+\frac{x^2}{2}+o(x^2)\right)(1+x)=1+2x+\frac{3}{2}x^2+o(x^2).$$

Sottraendo $1+2x$ e dividendo per $x^2$ si ottiene

$$\lim_{x\to 0}\frac{e^x(1+x)-1-2x}{x^2}=\frac{3}{2}.$$

Il resto resta $o(x^2)$ perché il fattore $1+x$ è limitato vicino a $0$; si troncano i prodotti oltre il secondo ordine solo dopo aver verificato che sono trascurabili rispetto a $x^2$. Un secondo errore tipico, segnalato come una delle cause più comuni di errore allo scritto, è sbagliare il calcolo di una derivata nell'ottenere i coefficienti del polinomio di Taylor, il che porta a sviluppi scorretti e quindi a conclusioni errate su limiti, massimi, minimi e convessità: conviene sempre ricontrollare le derivate successive prima di sostituire.

## p3 | Caratterizzazione dei punti critici

In questa sezione raccogliamo tutti gli strumenti per decidere, una volta trovati i punti stazionari di una funzione, se si tratta di massimi relativi, minimi relativi o punti di flesso, e per studiare la convessità del grafico. Il [teorema di Fermat](ref:chapter/7#p4) fornisce solo una condizione **necessaria**: $f'(x_0) = 0$ in un punto interno di massimo o minimo relativo in cui $f$ è derivabile, ma non garantisce che un punto con derivata nulla sia effettivamente un estremo. Occorrono criteri ulteriori, che sfruttano il segno della derivata prima nell'intorno del punto oppure le derivate successive tramite lo sviluppo di Taylor.

### Punti stazionari: richiami e dove cercarli

Ricordiamo che $x_0$ è un **punto stazionario** (o punto critico) di $f$ se $f$ è derivabile in $x_0$ e $f'(x_0) = 0$ [formula (7.9)](ref:formula/7.9). Se $x_0 \in A$ è un punto interno al dominio ed è punto di massimo o di minimo relativo per $f$, e $f$ è derivabile in $x_0$, allora $x_0$ è un punto stazionario. Questo risultato, già visto nella sezione sui [teoremi di Fermat, Rolle e Lagrange](ref:chapter/7#p4), ci dice **dove cercare** i candidati punti di estremo relativo o assoluto di una funzione derivabile su un intervallo: i punti interni in cui $f'(x) = 0$, i punti interni in cui $f$ non è derivabile e, se si cercano estremi assoluti su $\lbrack a,b\rbrack $, i punti $a$ e $b$. Non basta però trovare $f'(x_0) = 0$: bisogna classificare il punto, e per farlo esistono due strade complementari, che esaminiamo di seguito.

### Classificazione tramite il segno della derivata prima

Il primo criterio, già usato nella sezione sul [test di monotonia](ref:chapter/7#p4), consiste nello studiare il segno di $f'$ a sinistra e a destra del punto critico.

:::formula{id="8.4" label="Classificazione di un punto critico tramite il segno di f'"}
$$
\begin{aligned}
&f'(x) \ge 0 \text{ a sinistra di } x_0 \text{ e } f'(x) \le 0 \text{ a destra di } x_0 \implies x_0 \text{ è punto di massimo relativo},\\
&f'(x) \le 0 \text{ a sinistra di } x_0 \text{ e } f'(x) \ge 0 \text{ a destra di } x_0 \implies x_0 \text{ è punto di minimo relativo}.
\end{aligned}
$$
:::

L'ipotesi è che $f$ sia continua in un intorno di $x_0$ e derivabile nell'intorno privato di $x_0$. Se $f'$ è non negativa a sinistra e non positiva a destra, $f$ cresce fino a $x_0$ e poi decresce: $x_0$ è un massimo relativo. Il caso simmetrico dà un minimo relativo. Se $f'$ ha lo stesso segno stretto sui due lati, $x_0$ non è un estremo relativo; con disuguaglianze non strette, invece, può esserlo, come accade per una funzione localmente costante. Il segno di $f'$ da solo non permette di dichiarare un flesso: occorre verificare che la convessità cambi attraversando $x_0$.

Questo criterio è il più generale perché si applica anche quando $f$ non è derivabile in $x_0$ (basta che lo sia in un intorno privato di $x_0$): è infatti lo stesso schema usato per i punti interni di non derivabilità nella sezione sui [punti di non derivabilità](ref:chapter/7#p3), tramite il [teorema tappabuchi](ref:chapter/7#p3).

### Classificazione tramite le derivate successive

Quando calcolare il segno di $f'$ vicino a $x_0$ è scomodo (per esempio perché il segno dipende da espressioni complicate), è spesso più comodo usare le derivate successive, appoggiandosi alla formula di Taylor con resto di Peano vista nella sezione precedente.

**Proposizione 8.1 (classificazione dei punti critici).** Sia $n \in \mathbb{N}$, $n \ge 2$, e sia $f$ derivabile $n-1$ volte in un intorno di $x_0$, con $f^{(n)}(x_0)$ esistente. Supponiamo che

$$
f'(x_0) = f''(x_0) = \cdots = f^{(n-1)}(x_0) = 0, \qquad f^{(n)}(x_0) \neq 0.
$$

Allora:

:::formula{id="8.5" label="Classificazione tramite la prima derivata non nulla"}
$$
\begin{aligned}
&n \text{ pari}, \; f^{(n)}(x_0) > 0 &&\implies x_0 \text{ punto di minimo relativo},\\
&n \text{ pari}, \; f^{(n)}(x_0) < 0 &&\implies x_0 \text{ punto di massimo relativo},\\
&n \text{ dispari}, \; f^{(n)}(x_0) > 0 &&\implies x_0 \text{ flesso ascendente a tangente orizzontale},\\
&n \text{ dispari}, \; f^{(n)}(x_0) < 0 &&\implies x_0 \text{ flesso discendente a tangente orizzontale}.
\end{aligned}
$$
:::

La formula di Taylor con resto di Peano centrata in $x_0$ dà

$$
f(x)-f(x_0)=\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+o\big((x-x_0)^n\big) \qquad x\to x_0.
$$

Per $x$ sufficientemente vicino a $x_0$, il segno di $f(x)-f(x_0)$ coincide con quello del termine dominante. Se $n$ è pari, tale segno è positivo su entrambi i lati quando $f^{(n)}(x_0)>0$, e negativo su entrambi quando $f^{(n)}(x_0)<0$: si ottengono rispettivamente un minimo e un massimo relativi.

Se $n$ è dispari, allora $n\ge 3$. Applicando Taylor anche a $f'$ e a $f''$, grazie alle derivate esistenti nell'intorno di $x_0$, si ottiene

$$
\begin{aligned}
f'(x)&=\frac{f^{(n)}(x_0)}{(n-1)!}(x-x_0)^{n-1}+o\big((x-x_0)^{n-1}\big),\\
f''(x)&=\frac{f^{(n)}(x_0)}{(n-2)!}(x-x_0)^{n-2}+o\big((x-x_0)^{n-2}\big),\qquad x\to x_0.
\end{aligned}
$$

Poiché $n-1$ è pari, $f'$ ha sui due lati il segno di $f^{(n)}(x_0)$: $f$ è localmente crescente se questo è positivo, decrescente se è negativo. Poiché $n-2$ è dispari, $f''$ cambia segno attraversando $x_0$. La convessità cambia quindi in $x_0$, dove $f'(x_0)=0$: il punto è un flesso ascendente o discendente a tangente orizzontale secondo il segno di $f^{(n)}(x_0)$. $\square$

In forma mnemonica, il metodo si riassume così: si calcolano le derivate successive in $x_0$ finché non si trova la prima diversa da zero; detto $n$ il suo ordine,

- se $n$ è pari e tale derivata è positiva: minimo relativo;
- se $n$ è pari e tale derivata è negativa: massimo relativo;
- se $n$ è dispari e tale derivata è positiva: flesso ascendente;
- se $n$ è dispari e tale derivata è negativa: flesso discendente.

Il caso più familiare è $n = 2$: se $f'(x_0) = 0$ e $f''(x_0) \neq 0$, il segno di $f''(x_0)$ decide da solo se $x_0$ è un massimo ($f''(x_0) < 0$) o un minimo ($f''(x_0) > 0$). Se invece $f''(x_0) = 0$ il test con $n=2$ non si applica e occorre passare alla derivata terza, quarta, e così via, fino a trovare la prima non nulla.

### Convessità, concavità e punti di flesso

La derivata seconda controlla non solo la classificazione dei punti stazionari, ma anche la forma globale del grafico.

**Definizione 8.2.** Sia $f: A \to \mathbb{R}$ derivabile in un punto interno $x_0$ di $A$, e sia $E_{f,x_0}(x) = f(x_0) + f'(x_0)(x-x_0)$ l'equazione della retta tangente al grafico in $x_0$. Diciamo che $f$ è **convessa** in $x_0$ se e solo se esiste un intorno di $x_0$ in cui $f(x) \ge E_{f,x_0}(x)$, e che $f$ è **concava** in $x_0$ se e solo se $f(x) \le E_{f,x_0}(x)$ in tale intorno (per la convessità/concavità stretta si richiede la disuguaglianza stretta per ogni $x \neq x_0$ dell'intorno, dato che in $x_0$ vale sempre l'uguaglianza $f(x_0) = E_{f,x_0}(x_0)$). Diciamo che $x_0$ è un **punto di flesso** di $f$ se esiste un intorno di $x_0$ in cui $f$ cambia convessità, cioè è convessa da un lato e concava dall'altro.

In termini di derivate, per $f$ derivabile su un intervallo $I$ si ha che $f$ è convessa su $I$ se e solo se $f'$ è crescente su $I$, e se $f'$ è strettamente crescente su $I$ allora $f$ è strettamente convessa su $I$. Se inoltre $f$ è derivabile due volte su $I$, questo criterio si traduce nel segno della derivata seconda.

**Corollario 8.1.** Sia $f$ derivabile due volte su un intervallo $I$. Allora:

:::formula{id="8.6" label="Convessità e segno della derivata seconda"}
$$
\begin{aligned}
&f \text{ convessa su } I \iff f''(x) \ge 0 \;\; \forall x \in I, &&f''(x) > 0 \;\; \forall x \in I \implies f \text{ strettamente convessa},\\
&f \text{ concava su } I \iff f''(x) \le 0 \;\; \forall x \in I, &&f''(x) < 0 \;\; \forall x \in I \implies f \text{ strettamente concava}.
\end{aligned}
$$
:::

Per la caratterizzazione puntuale di convessità/concavità in un singolo punto $x_0$ in cui $f$ è derivabile due volte: se $f''(x_0) > 0$ allora $f$ è convessa in $x_0$, se $f''(x_0) < 0$ allora $f$ è concava in $x_0$. Se invece $f''(x_0) = 0$ il test non decide da solo: può esserci un punto di flesso, ma anche un punto in cui la convessità non cambia (come accade in un minimo di ordine $4$, dove $f''$ si annulla ma non c'è cambio di concavità).

Quanto ai punti di flesso: se $f$ è derivabile due volte in un intorno di $x_0$ ed $x_0$ è un punto di flesso, allora necessariamente $f''(x_0) = 0$ (condizione necessaria, analoga al teorema di Fermat per la derivata prima). Viceversa, una condizione sufficiente è che $f''$ cambi segno attraversando $x_0$: se $f''(x_0) = 0$ e $f''$ ha segno diverso a destra e a sinistra di $x_0$, allora $x_0$ è effettivamente un punto di flesso. Attenzione: $f''(x_0) = 0$ da solo **non basta**, esattamente come $f'(x_0) = 0$ da solo non basta a garantire un estremo; va sempre verificato (con il segno di $f''$ o con le derivate successive) che la concavità cambi effettivamente.

:::image{src="assets/ad961d84-flesso-cubica.svg" alt="grafico di x al cubo con flesso a tangente orizzontale nell'origine" caption="Fig. 8.2 — f(x) = x^3: derivata prima e derivata seconda nulle in 0, ma f'''(0) diverso da 0: flesso ascendente a tangente orizzontale e cambio di convessità"}
:::

La funzione $f(x) = x^3$ riassume in un solo esempio entrambi i criteri: $f'(x) = 3x^2$, quindi $f'(0) = 0$ e $x_0 = 0$ è stazionario; $f''(x) = 6x$, quindi $f''(0) = 0$ e il test della derivata seconda non decide; passando a $f'''(x) = 6$, si trova $f'''(0) = 6 \neq 0$ con $n = 3$ dispari e positivo, quindi $0$ è un flesso ascendente a tangente orizzontale, coerentemente con il fatto che $f''$ cambia segno (negativa per $x<0$, positiva per $x>0$): $f$ passa da concava a convessa attraversando l'origine.

### Esempio svolto

Supponiamo che una funzione $f$ ammetta, centrato in $x_0=5$, lo sviluppo di Taylor di ordine $4$:

$$
f(x)=-7+2(x-5)^4+o\big((x-5)^4\big),\qquad x\to 5.
$$

Le derivate di ordine $1$, $2$ e $3$ sono nulle in $x_0=5$. Dal coefficiente di $(x-5)^4$ ricaviamo

$$
\frac{f^{(4)}(5)}{4!}=2\implies f^{(4)}(5)=2\cdot4!=48>0.
$$

Siamo quindi nel caso $n=4$ (pari) con $f^{(4)}(5)>0$: per la {{formula:8.5}}, $x_0=5$ è un punto di minimo relativo, con valore $f(5)=-7$.

:::image{src="assets/ad961d84-minimo-quartico.svg" alt="grafico di una quartica con minimo in x=5" caption="Fig. 8.3 — f(x) = -7 + 2(x-5)^4 vicino a x=5: tutte le derivate nulle fino all'ordine 3, quarta derivata positiva, quindi minimo relativo"}
:::

Osserviamo che qui il criterio del segno della derivata prima sarebbe stato meno immediato, perché non conosciamo $f$ esplicitamente lontano da $x_0$: il vantaggio del criterio con le derivate successive è proprio che utilizza solo informazioni locali in $x_0$, già disponibili dallo sviluppo di Taylor.

### Errori tipici

- Dichiarare un punto di massimo o minimo solo perché $f'(x_0) = 0$, senza verificare il segno di $f'$ attorno al punto o il segno della prima derivata successiva non nulla: come ricorda il teorema di Fermat, l'annullarsi della derivata è solo condizione **necessaria**, non sufficiente.
- Fermarsi a $f''(x_0) = 0$ e concludere automaticamente che si tratti di un punto di flesso: occorre controllare che $f''$ cambi effettivamente segno, oppure proseguire con le derivate di ordine superiore, perché $f''(x_0)=0$ è solo condizione necessaria per il flesso.
- Sbagliare il calcolo di una derivata (specialmente la seconda o la terza, con prodotti e composizioni): è uno degli errori più frequenti tra chi non supera la prova scritta, perché si propaga a tutta la classificazione di massimi, minimi e convessità; conviene sempre ricontrollare i calcoli delle derivate prima di trarre conclusioni.
- Dimenticare che il criterio basato sul segno della derivata prima richiede solo continuità in $x_0$ e derivabilità in un intorno privato di $x_0$: è applicabile anche nei punti angolosi o nelle cuspidi interni al dominio, che restano candidati punti di estremo anche se $f$ non è derivabile lì, come già osservato parlando dei [punti di non derivabilità](ref:chapter/7#p3).
- Nel teorema di Rolle e nel teorema di Fermat, non verificare tutte le ipotesi (continuità sull'intervallo chiuso, derivabilità sull'intervallo aperto, punto interno al dominio): la loro violazione può far sparire completamente il punto a derivata nulla, come mostrano i controesempi standard con punti angolosi o funzioni discontinue.

## p4 | Studio di funzione completo

Lo **studio di funzione completo** è l'esercizio che riassume quasi tutti gli strumenti del calcolo differenziale sviluppati nei capitoli precedenti: dominio e simmetrie (cfr. [Funzioni: dominio, immagine, iniettività](ref:chapter/3#p2) e [Simmetrie, periodicità e funzioni particolari](ref:chapter/3#p4)), limiti agli estremi del dominio ([Definizione di limite](ref:chapter/4#p3)), continuità ([Funzioni continue](ref:chapter/5#p2)), segno della derivata prima per la monotonia ([formula (7.13)](ref:formula/7.13)) e segno della derivata seconda per la convessità, oltre alla caratterizzazione dei punti critici tramite le derivate successive studiata nella sezione precedente. Lo schema procedurale standard è il seguente.

1. Determinare il dominio $\operatorname{dom} f$ e, se possibile, eventuali simmetrie (parità, disparità, periodicità) per restringere lo studio a una metà del dominio.
2. Calcolare i limiti di $f$ agli estremi del dominio e nei punti di discontinuità eliminabili dal dominio stesso, classificando gli asintoti.
3. Studiare il segno di $f'$ per determinare gli intervalli di monotonia e i punti di massimo/minimo relativo.
4. Studiare il segno di $f''$ per determinare la convessità e i punti di flesso, eventualmente usando le derivate successive quando $f'$ o $f''$ si annullano senza cambiare segno.
5. Riassumere tutte le informazioni in una tabella dei segni e tracciare il grafico qualitativo.

Negli esercizi d'esame compare spesso una variante: la funzione dipende da un parametro reale, e la domanda chiede di determinare il parametro in modo che il grafico abbia una certa proprietà (un asintoto dato, un punto di flesso in un punto prefissato, un massimo di valore noto). Il metodo non cambia: si svolge lo studio tenendo il parametro come costante letterale, e si impone la condizione richiesta solo alla fine, sulle formule già ottenute.

### Asintoti

**Definizione 8.3 (asintoto verticale).** Sia $x_0\in\mathbb{R}$ un punto di accumulazione di $\operatorname{dom} f$, appartenente o no al dominio. La retta $x=x_0$ è un **asintoto verticale** per $f$ se almeno un limite unilaterale, calcolato lungo il dominio, è infinito:

$$\lim_{x\to x_0^+}f(x)=\pm\infty\qquad\text{oppure}\qquad\lim_{x\to x_0^-}f(x)=\pm\infty.$$

Per cercare gli asintoti verticali si esaminano le ascisse reali di accumulazione del dominio, comprese quelle in cui la funzione è definita. Gli asintoti per $x\to+\infty$ e $x\to-\infty$ si studiano separatamente.

**Definizione 8.4 (asintoto orizzontale).** Se $\operatorname{dom} f$ è illimitato superiormente o inferiormente e il corrispondente limite è finito,

$$\lim_{x\to+\infty}f(x)=L\in\mathbb{R}\qquad\left(\text{oppure }\lim_{x\to-\infty}f(x)=L\in\mathbb{R}\right),$$

la retta $y=L$ è un **asintoto orizzontale** nel verso considerato.

Quando il limite a $+\infty$ (o a $-\infty$) è infinito, non c'è asintoto orizzontale, ma può esistere un asintoto obliquo.

:::formula{id="8.7" label="Asintoto obliquo"}
$$f(x) = mx + q + o(1), \qquad x \to +\infty \quad \left(\text{oppure } x \to -\infty\right), \qquad \text{dove} \qquad m = \lim_{x\to +\infty} \frac{f(x)}{x} \in \mathbb{R}\setminus\{0\}, \quad q = \lim_{x\to +\infty} \big(f(x) - mx\big) \in \mathbb{R}.$$
:::

La retta $y = mx + q$ è l'**asintoto obliquo** di $f$ per $x \to +\infty$. Se $m = 0$ si ricade nel caso dell'asintoto orizzontale (quindi i due casi sono mutuamente esclusivi); se uno dei due limiti che definiscono $m$ o $q$ non esiste o è infinito, l'asintoto obliquo non esiste. Lo stesso procedimento si ripete, indipendentemente, per $x \to -\infty$: i coefficienti $m$ e $q$ possono essere diversi nei due versi.

**Osservazione 8.3.** Il calcolo di $m$ e $q$ si riconduce spesso a uno sviluppo di Taylor nella variabile $t = 1/x$ attorno a $t = 0$: se $f(x) = mx + q + \frac{c}{x} + o\!\left(\frac{1}{x}\right)$ per $x \to \infty$, i coefficienti $m, q$ sono immediati dal confronto con lo sviluppo. Questa tecnica, basata sugli sviluppi di Maclaurin visti nella sezione sul [Polinomio e formula di Taylor](ref:chapter/8#p2), è particolarmente efficiente per funzioni contenenti radici, esponenziali o logaritmi all'infinito.

**Errore tipico 8.4.** Un errore frequente è calcolare $q$ come $\lim_{x\to+\infty} f(x) - mx$ usando per $m$ un valore approssimato o arrotondato: $m$ deve essere il valore esatto del limite, altrimenti il limite che definisce $q$ risulta artificiosamente infinito o nullo. Un secondo errore è dimenticare di controllare $x \to -\infty$ separatamente quando il dominio è illimitato in entrambe le direzioni: gli asintoti a $+\infty$ e a $-\infty$ possono coincidere, essere diversi, oppure esistere solo da un lato.

### Dal segno delle derivate al grafico

Una volta noti dominio, simmetrie e asintoti, si studia la derivata prima $f'$ sul dominio. Il test di monotonia [formula (7.13)](ref:formula/7.13) permette di tradurre il segno di $f'$ in intervalli di crescenza e decrescenza:

- $f'(x) \geq 0$ su un intervallo $I$ $\Rightarrow$ $f$ crescente su $I$ (strettamente se $f'(x) > 0$ tranne eventualmente in punti isolati);
- $f'(x) \leq 0$ su $I$ $\Rightarrow$ $f$ decrescente su $I$;
- $f'(x) = 0$ su tutto $I$ $\Rightarrow$ $f$ costante su $I$.

I punti in cui $f'$ cambia segno (punti stazionari interni, [formula (7.9)](ref:formula/7.9), oppure punti interni di non derivabilità, cfr. [Punti di non derivabilità](ref:chapter/7#p3)) sono candidati a massimi o minimi relativi, purché $f$ sia continua nel punto: come già richiesto dal criterio della sezione precedente, il passaggio da derivata positiva a negativa indica un massimo, quello da negativa a positiva un minimo, solo se $f$ è continua in quel punto. Senza continuità la conclusione può fallire, come mostra $f(x) = x^2$ per $x \neq 0$ e $f(0) = 1$: la derivata è negativa a sinistra e positiva a destra di $0$, ma $0$ è in realtà un punto di massimo relativo, perché $f(0)=1$ supera i valori di $f$ in un intorno dell'origine. Se $f'$ non cambia segno attraverso un punto stazionario, questo test non vi individua un estremo stretto. Per stabilire se sia un flesso a tangente orizzontale occorre verificare separatamente il cambio di convessità; quando sono applicabili, le derivate successive possono aiutare nella verifica, come spiegato nella sezione sulla [Caratterizzazione dei punti critici](ref:chapter/8#p3).

Lo studio del segno di $f''$ fornisce in modo analogo la convessità: $f''(x) \geq 0$ su un intervallo implica $f$ convessa (equivalentemente $f'$ crescente), $f''(x) \leq 0$ implica $f$ concava. I punti in cui $f''$ cambia segno sono punti di flesso: se $f''(x_0) = 0$ e $f''$ assume segni opposti a destra e a sinistra di $x_0$, allora $x_0$ è un punto di flesso per $f$.

A questo punto si costruisce una tabella dei segni di $f'$ e $f''$ sull'intero dominio (con i punti critici, i punti di non derivabilità e i punti di discontinuità come separatori), da cui si leggono simultaneamente monotonia e convessità, e quindi la forma qualitativa del grafico in ciascun sottointervallo: crescente e convesso, crescente e concavo, decrescente e convesso, decrescente e concavo. Il grafico finale si ottiene disegnando gli asintoti come rette di riferimento, posizionando i punti critici e di flesso con il loro valore, e raccordando i vari tratti rispettando la forma indicata dalla tabella.

**Esempio 8.3.** Si studi la funzione

$$f(x)=\frac{x^3}{x^2-1}.$$

*Dominio e simmetrie.* Il denominatore si annulla per $x = \pm 1$, quindi $\operatorname{dom} f = \mathbb{R} \setminus \{-1, 1\}$, insieme simmetrico rispetto all'origine. Si ha $f(-x) = \dfrac{(-x)^3}{(-x)^2-1} = \dfrac{-x^3}{x^2-1} = -f(x)$, quindi $f$ è dispari ([formula (3.8)](ref:formula/3.8)): il grafico è simmetrico rispetto all'origine, e basta studiare $f$ per $x \geq 0$.

*Limiti e asintoti.* Per $x\to\pm1$ il numeratore tende a un valore non nullo mentre il denominatore tende a $0$. In particolare,

$$\lim_{x\to1^+}f(x)=+\infty,\qquad\lim_{x\to1^-}f(x)=-\infty.$$

Per disparità, $\lim_{x\to-1^-}f(x)=-\infty$ e $\lim_{x\to-1^+}f(x)=+\infty$: le rette $x=1$ e $x=-1$ sono asintoti verticali. Per $x\to+\infty$, la funzione diverge positivamente, quindi non ha asintoto orizzontale. Per l'asintoto obliquo si calcola

$$m=\lim_{x\to+\infty}\frac{f(x)}{x}=\lim_{x\to+\infty}\frac{x^2}{x^2-1}=1,$$

$$q=\lim_{x\to+\infty}\left(\frac{x^3}{x^2-1}-x\right)=\lim_{x\to+\infty}\frac{x}{x^2-1}=0.$$

La retta $y=x$ è dunque asintoto obliquo per $x\to+\infty$ e, per disparità, anche per $x\to-\infty$.

*Derivata prima.* Per $x\ne\pm1$,

$$f'(x)=\frac{3x^2(x^2-1)-2x^4}{(x^2-1)^2}=\frac{x^2(x^2-3)}{(x^2-1)^2}.$$

La derivata è positiva per $|x|>\sqrt3$, negativa per $|x|<\sqrt3$ con $x\ne0,\pm1$, e nulla in $x=0$ e $x=\pm\sqrt3$. Separando gli intervalli agli asintoti, $f$ è crescente su $\rbrack -\infty,-\sqrt3\lbrack $ e $\rbrack \sqrt3,+\infty\lbrack $; è decrescente su $\rbrack -\sqrt3,-1\lbrack $, $\rbrack -1,1\lbrack $ e $\rbrack 1,\sqrt3\lbrack $. In $x=\sqrt3$ ha un minimo relativo di valore $3\sqrt3/2$; per disparità, in $x=-\sqrt3$ ha un massimo relativo di valore $-3\sqrt3/2$. In $x=0$ la derivata non cambia segno: la classificazione come flesso richiede lo studio della convessità.

*Derivata seconda e convessità.* Derivando ancora si ottiene

$$f''(x)=\frac{2x(x^2+3)}{(x^2-1)^3}.$$

La derivata seconda è negativa su $\rbrack -\infty,-1\lbrack $ e $\rbrack 0,1\lbrack $, positiva su $\rbrack -1,0\lbrack $ e $\rbrack 1,+\infty\lbrack $. La funzione è quindi concava nei primi due intervalli e convessa negli altri due. In $x=0$ la convessità cambia e $f'(0)=0$: l'origine è un flesso a tangente orizzontale. I punti $x=\pm1$ non sono flessi perché non appartengono al dominio.

Mettendo insieme asintoti, monotonia e convessità si ottiene il grafico qualitativo seguente.

:::image{src="assets/ab4a5b0e-grafico-x3-su-x2-meno-1.svg" alt="Grafico di x al cubo diviso x al quadrato meno uno, con asintoti verticali in x=1 e x=-1 e asintoto obliquo y=x" caption="Fig. 8.4 — Studio completo di f(x) = x^3/(x^2-1): asintoti verticali in x=\pm 1, asintoto obliquo y=x, minimo relativo in x=\sqrt{3}, massimo relativo in x=-\sqrt{3}, flesso nell'origine"}
:::

**Esempio 8.4 (con parametro).** Per $k>0$ fissato, si studi la funzione

$$f_k(x)=\frac{x^3}{x^2-k}.$$

Il dominio è $\mathbb{R}\setminus\{-\sqrt{k},\sqrt{k}\}$ e $f_k$ è dispari. Il suo segno è negativo su $\rbrack -\infty,-\sqrt{k}\lbrack $ e $\rbrack 0,\sqrt{k}\lbrack $, positivo su $\rbrack -\sqrt{k},0\lbrack $ e $\rbrack \sqrt{k},+\infty\lbrack $; inoltre $f_k(0)=0$. Le rette $x=\pm\sqrt{k}$ sono asintoti verticali: da sinistra e da destra di $-\sqrt{k}$ i limiti valgono rispettivamente $-\infty$ e $+\infty$, mentre da sinistra e da destra di $\sqrt{k}$ valgono rispettivamente $-\infty$ e $+\infty$. Poiché $f_k(x)=x+\dfrac{kx}{x^2-k}$, la retta $y=x$ è asintoto obliquo in entrambi i versi dell'infinito.

Le derivate sono

$$f_k'(x)=\frac{x^2(x^2-3k)}{(x^2-k)^2},\qquad f_k''(x)=\frac{2kx(x^2+3k)}{(x^2-k)^3}.$$

La tabella dei segni, suddivisa anche in corrispondenza degli asintoti, dà i seguenti tratti del grafico:

- Su $\rbrack -\infty,-\sqrt{3k}\lbrack $ si ha $f_k'>0$ e $f_k''<0$: la funzione cresce ed è concava.
- Su $\rbrack -\sqrt{3k},-\sqrt{k}\lbrack $ si ha $f_k'<0$ e $f_k''<0$: decresce ed è concava.
- Su $\rbrack -\sqrt{k},0\lbrack $ si ha $f_k'<0$ e $f_k''>0$: decresce ed è convessa.
- Su $\rbrack 0,\sqrt{k}\lbrack $ si ha $f_k'<0$ e $f_k''<0$: decresce ed è concava.
- Su $\rbrack \sqrt{k},\sqrt{3k}\lbrack $ si ha $f_k'<0$ e $f_k''>0$: decresce ed è convessa.
- Su $\rbrack \sqrt{3k},+\infty\lbrack $ si ha $f_k'>0$ e $f_k''>0$: cresce ed è convessa.

In $x=-\sqrt{3k}$ si trova un massimo relativo di valore $-3\sqrt{3k}/2$; in $x=\sqrt{3k}$ un minimo relativo di valore $3\sqrt{3k}/2$. L'origine è un flesso a tangente orizzontale. Il grafico qualitativo ha tre rami: quello a sinistra di $-\sqrt{k}$ sale dall'asintoto $y=x$ fino al massimo e poi scende verso $-\infty$; quello centrale scende da $+\infty$ a $-\infty$ passando per l'origine; quello a destra di $\sqrt{k}$ scende da $+\infty$ fino al minimo e poi risale verso l'asintoto $y=x$. I rami esterni sono simmetrici rispetto all'origine.

Se si richiede che il minimo relativo valga $3$, si impone $3\sqrt{3k}/2=3$. Ne segue $\sqrt{3k}=2$, dunque $k=4/3$.

**Errore tipico 8.5.** Nello studio di funzioni con parametro, un errore comune è sostituire subito un valore numerico al parametro (per "semplificare"), perdendo così la possibilità di rispondere alla domanda che chiede proprio di determinarlo; un secondo errore è dimenticare che il segno di espressioni contenenti il parametro (per esempio $x^2 - 3k$) dipende dal segno di $k$ stesso, per cui la discussione dei casi $k > 0$, $k = 0$, $k < 0$ va fatta esplicitamente quando il testo non specifica il segno di $k$. Infine, come ricordato più volte nel capitolo sul calcolo differenziale, la causa più frequente di errore nello studio di funzione resta un calcolo sbagliato della derivata prima o seconda: conviene sempre ricontrollare le derivate prima di dedurne monotonia e convessità.
