---
chapter: 7
title: Serie di funzioni e serie di potenze
---

## p1 | Introduzione

Le successioni e le serie di funzioni permettono di costruire nuove funzioni come limiti di approssimazioni più semplici. Capire se la convergenza è puntuale o uniforme è essenziale: dalla sua forma dipende quando si possono conservare proprietà come continuità, integrabilità e derivabilità. Le serie di potenze, a loro volta, offrono un modo efficace per rappresentare e calcolare funzioni, ma il loro comportamento può cambiare agli estremi dell’intervallo di convergenza e, nel piano complesso, dipende dalla distanza dalle singolarità.

Per affrontare il capitolo occorre saper studiare le serie numeriche, in particolare verificarne la convergenza e riconoscere il ruolo dei termini. Queste conoscenze serviranno per analizzare le serie di funzioni, applicare il criterio di Weierstrass e capire quando è lecito integrare o derivare termine a termine.

Al termine saprai distinguere i diversi tipi di convergenza, determinare il raggio e l’insieme di convergenza di una serie di potenze, compresi i punti estremi, e sviluppare funzioni in serie di Taylor e di Maclaurin. Saprai inoltre usare gli sviluppi notevoli, ricavare nuovi sviluppi con sostituzioni e integrazioni e interpretare le serie di potenze anche per variabili complesse.

## p2 | Successioni di funzioni

Una successione numerica $\{a_n\}$ ha come limite un numero. Una successione di funzioni $\{f_n\}$ ha come limite, quando esiste, una funzione, e qui nascono due problemi. Il primo è dare un senso preciso a "$f_n$ si avvicina a $f$". Il secondo è capire quali proprietà (continuità, integrale, derivata) passano da $f_n$ al limite. Le serie di funzioni, che incontreremo nella [sezione dedicata](ref:chapter/7#p3), sono successioni di somme parziali, quindi tutto ciò che segue vale anche per loro. Per i richiami sulle successioni numeriche si veda [Richiami sulle successioni](ref:chapter/6#p2).

### Successioni di funzioni e convergenza puntuale

**Definizione 7.1** (successione di funzioni). Sia $X\subseteq\mathbb{R}$ e sia $n_0\ge 0$ un intero. Se per ogni $n\ge n_0$ è data una funzione $f_n : X\to\mathbb{R}$, la famiglia $\{f_n\}_{n\ge n_0}$ si dice successione di funzioni.

Esempi sono $f_n(x)=\sin\left(x+\frac1n\right)$ con $n\ge 1$ e $f_n(x)=x^n$ con $n\ge 0$, entrambe su $X=\mathbb{R}$. Il primo passo dello studio consiste nel fissare un punto $x\in X$ e guardare la successione numerica $\{f_n(x)\}$.

**Definizione 7.2** (convergenza puntuale). La successione $\{f_n\}$ converge puntualmente a $f$ in $A\subseteq X$ se, per ogni $x\in A$, $\lim_{n\to\infty}f_n(x)=f(x)$.

Nella convergenza puntuale ogni punto $x$ ha la sua "velocità" di convergenza, e la velocità può peggiorare quanto si vuole al variare di $x$. Per questo la convergenza puntuale conserva poche proprietà, come vedremo.

### Norma del sup e convergenza uniforme

Per misurare la distanza tra due funzioni si usa una norma.

**Definizione 7.3** (norma di funzione). Sia $\mathcal F$ uno spazio vettoriale di funzioni reali definite su $\Omega\subseteq\mathbb{R}^n$. Una norma è un'applicazione $f\mapsto\|f\|$ da $\mathcal F$ in $\mathbb{R}$ tale che, per ogni $f,g\in\mathcal F$ e $\alpha\in\mathbb{R}$:

1. $\|f\|\ge 0$, e $\|f\|=0$ se e solo se $f$ è la funzione nulla (positività);
2. $\|\alpha f\|=|\alpha|\,\|f\|$ (omogeneità);
3. $\|f+g\|\le\|f\|+\|g\|$ (disuguaglianza triangolare).

Sullo spazio delle funzioni limitate su $\Omega$ si definisce la norma del sup (o norma infinito).

:::formula{id="7.1" label="Norma dell'estremo superiore"}
$$\|g\|_{\infty,A}=\sup_{x\in A}|g(x)|$$
:::

Se $A$ è compatto e $g$ è continua, per il teorema di Weierstrass il sup è un massimo e si parla di norma del massimo $\|g\|_{C^0(A)}$.

**Definizione 7.4** (convergenza uniforme). La successione $\{f_n\}$ converge uniformemente a $f$ in $A$, e si scrive $f_n\rightrightarrows f$, se $f_n-f$ è limitata su $A$ definitivamente e

:::formula{id="7.2" label="Convergenza uniforme"}
$$\lim_{n\to\infty}\|f_n-f\|_{\infty,A}=\lim_{n\to\infty}\sup_{x\in A}|f_n(x)-f(x)|=0$$
:::

In altre parole, per ogni $\varepsilon>0$ esiste $N$ tale che $|f_n(x)-f(x)|<\varepsilon$ per ogni $n\ge N$ e **per ogni** $x\in A$ simultaneamente.

Alcuni testi chiamano questa nozione convergenza totale, ed è il nome usato nelle fonti da cui questo corso attinge.

**Proposizione 7.1.** Se $f_n\rightrightarrows f$ in $A$, allora $f_n\to f$ puntualmente in $A$. Il viceversa è falso.

La proposizione segue da $|f_n(x)-f(x)|\le\|f_n-f\|_{\infty,A}$. Un controesempio del viceversa è $f_n(x)=x^n$ su $\lbrack 0,1\rbrack $, trattato nel seguito.

### Metodo operativo

Per studiare la convergenza di $\{f_n\}$ su un insieme $A$:

1. si calcola il limite puntuale $f(x)=\lim_n f_n(x)$ per ogni $x\in A$;
2. si cerca $M_n=\sup_{x\in A}|f_n(x)-f(x)|$, studiando la derivata di $f_n-f$ oppure maggiorando;
3. se $M_n\to0$ la convergenza è uniforme, altrimenti no.

Quando basta una maggiorazione $|f_n-f|\le M_n$ con $M_n\to0$ indipendente da $x$, non serve trovare il sup esatto. Così si tratta $f_n(x)=\sin(x+\frac1n)$, che converge uniformemente a $\sin x$ su $\mathbb{R}$. Per la formula di prostaferesi

$$
\left|\sin\left(x+\tfrac1n\right)-\sin x\right|=2\left|\sin\tfrac{1}{2n}\cos\left(x+\tfrac1{2n}\right)\right|\le 2\sin\tfrac1{2n},
$$

e il secondo membro è infinitesimo.

Se invece le $f_n$ sono continue e il limite puntuale $f$ non lo è, la convergenza non può essere uniforme (si veda il teorema sulla continuità più sotto).

**Esempio 7.1** ($x^n$ su $\lbrack 0,1\rbrack $). Sia $f_n(x)=x^n$. Il limite puntuale è $f(x)=0$ per $x\in\lbrack 0,1)$ e $f(1)=1$. La funzione limite è discontinua in $1$, quindi la convergenza non è uniforme su $\lbrack 0,1\rbrack $. Lo si verifica anche con il sup: su $\lbrack 0,1)$ si ha $\sup|x^n-0|=1$ per ogni $n$, che non tende a $0$.

Su $\lbrack 0,a\rbrack $ con $a<1$ si ha invece $\sup_{\lbrack 0,a\rbrack }|x^n|=a^n\to0$: la convergenza è uniforme. Il difetto di uniformità si concentra vicino a $x=1$.

:::image{src="assets/b9fdfceb-potenze-x-alla-n.svg" alt="Grafici di x^n per n = 1, 2, 5, 20 su [0,1]" caption="Fig. 7.1 — Le funzioni xⁿ su [0,1] si schiacciano verso 0 ma restano vicine a 1 in un intorno sinistro di x = 1: il limite puntuale è discontinuo e il sup di |xⁿ| su [0,1) vale sempre 1."}
:::

**Errore tipico 7.1.** Dimenticare il passo 1 e confrontare $f_n$ con un limite non verificato punto per punto. Per $x^n$ su $\lbrack 0,1\rbrack $ il limite non è $0$ ovunque, perché $f(1)=1$: bisogna calcolare $f$ in ogni punto, estremi compresi. Un altro scambio frequente è $\lim_n\sup_x|f_n|$ con $\sup_x\lim_n|f_n|$: in generale sono diversi, e proprio la loro differenza segnala la mancanza di uniformità.

### Esempio svolto: calcolo esplicito del sup

Sia $f_n(x)=n\,x(1-x^2)^n$ su $\lbrack -1,1\rbrack $.

**Passo 1: limite puntuale.** Si ha $f_n(\pm1)=0$ per ogni $n$. Per $x\in(-1,1)$ vale $0\le1-x^2<1$, quindi $(1-x^2)^n$ decade a zero più velocemente di quanto $n$ cresca (gerarchia degli infiniti). Dunque $f_n(x)\to0$ per ogni $x\in[-1,1]$, cioè $f=0$.

**Passo 2: sup.** Le $f_n$ sono dispari, quindi si lavora su $\lbrack 0,1\rbrack $. Derivando,

$$
f_n'(x)=n(1-x^2)^n-2n^2x^2(1-x^2)^{n-1}=n(1-x^2)^{n-1}\bigl(1-x^2-2nx^2\bigr).
$$

Il fattore tra parentesi si annulla in $x=1/\sqrt{1+2n}$, che è il punto di massimo. Il valore massimo è

$$
\sup_{\lbrack -1,1\rbrack }|f_n|=f_n\!\left(\tfrac1{\sqrt{1+2n}}\right)=\frac{n}{\sqrt{1+2n}}\left(\frac{2n}{1+2n}\right)^n.
$$

Il fattore $\left(\frac{2n}{1+2n}\right)^n=\left(1-\frac1{1+2n}\right)^n$ tende a $e^{-1/2}$, mentre $\frac{n}{\sqrt{1+2n}}\to+\infty$.

**Passo 3: conclusione.** Poiché $\|f_n-f\|_{\infty}\to+\infty$, la convergenza non è uniforme su $\lbrack -1,1\rbrack $, e non lo è nemmeno su $\lbrack 0,1\rbrack $.

**Conseguenza.** Calcolando con $t=1-x^2$,

$$
\int_0^1 f_n(x)\,dx=\frac n2\int_0^1 t^n\,dt=\frac{n}{2(n+1)}\longrightarrow\frac12,\qquad\text{ma}\qquad\int_0^1\lim_{n\to\infty}f_n(x)\,dx=0.
$$

Lo scambio tra limite e integrale fallisce.

### Teoremi di passaggio al limite

Sotto convergenza uniforme le proprietà delle $f_n$ si trasferiscono a $f$.

**Teorema 7.1** (continuità del limite). Siano $f_n$ continue su $A$ e $f_n\rightrightarrows f$ in $A$. Allora $f$ è continua su $A$.

Per questo il limite puntuale discontinuo di $x^n$ esclude la convergenza uniforme su $\lbrack 0,1\rbrack $.

**Teorema 7.2** (integrazione). Sia $I=\lbrack a,b\rbrack $ limitato e chiuso, siano le $f_n$ integrabili su $I$ e $f_n\rightrightarrows f$ in $I$. Allora $f$ è integrabile su $I$ e

$$
\int_a^b f_n(x)\,dx\longrightarrow\int_a^b f(x)\,dx.
$$

**Teorema 7.3** (derivazione). Siano $f_n$ di classe $C^1$ su $I=\lbrack a,b\rbrack $ e supponiamo che
1. $f_n\to f$ puntualmente in $I$;
2. $f_n'\rightrightarrows g$ in $I$.

Allora $f\in C^1(I)$, $f'=g$, e inoltre $f_n\rightrightarrows f$ in $I$.

In formule, $\lim_n f_n'(x)=\left(\lim_n f_n(x)\right)'$ per ogni $x\in I$: le operazioni di limite e derivazione si scambiano.

**Esempio 7.2** (il teorema di integrazione è solo sufficiente, e serve l'uniformità). Sia $f_n(x)=xn^2e^{-nx}$ su $\lbrack 0,1\rbrack $. Il limite puntuale è $0$, e $\int_0^1 0\,dx=0$. Con $t=nx$ si ha invece

$$
\int_0^1 f_n(x)\,dx=\int_0^n te^{-t}\,dt=1-(n+1)e^{-n}\longrightarrow1.
$$

Gli integrali non convergono all'integrale del limite, quindi la convergenza non può essere uniforme su $\lbrack 0,1\rbrack $.

**Errore tipico 7.2.** Credere che la sola convergenza puntuale basti per scambiare limite e integrale, o che nel teorema di derivazione basti la convergenza puntuale delle derivate. Un controesempio per la derivata è $f_n(x)=\frac{x^n}{n}$ su $\lbrack 0,1\rbrack $. Si ha $|f_n(x)|\le\frac1n$, quindi $f_n\rightrightarrows0$. Ma $f_n'(x)=x^{n-1}$ converge solo puntualmente a $g$, con $g=0$ su $\lbrack 0,1)$ e $g(1)=1$. Questa $g$ è discontinua, quindi la convergenza di $f_n'$ non è uniforme, e $g$ non coincide con $f'=0$.

Per riassumere, l'ipotesi giusta per derivare termine a termine riguarda la successione delle **derivate**: serve $f_n'\rightrightarrows g$, non basta $f_n\rightrightarrows f$.

## p3 | Serie di funzioni

Una serie di funzioni è una serie numerica i cui termini dipendono da un parametro $x$. Il suo studio consiste nel capire per quali $x$ converge e quanto bene la somma parziale approssima la somma, cioè con quale tipo di convergenza. Le proprietà della somma (continuità, integrabilità, derivabilità) dipendono da questa scelta, come per le [successioni di funzioni](ref:chapter/7#p2).

### Definizioni

Sia $\{f_k\}$ una successione di funzioni $f_k : A \subseteq \mathbb{R} \to \mathbb{R}$. La **serie di funzioni** $\sum_{k=0}^{\infty} f_k(x)$ ha come **somma parziale** (ridotta) la funzione

$$
s_n(x) = \sum_{k=0}^{n} f_k(x), \qquad x \in A.
$$

La serie converge in $x$ se converge la serie numerica $\sum_{k=0}^{\infty} f_k(x)$, cioè se esiste finito $\lim_{n\to\infty} s_n(x)$.

**Definizione 7.5** (convergenza puntuale, assoluta, uniforme, totale). Sia $A \subseteq \mathbb{R}$.

1. La serie **converge puntualmente** in $A$ a $s : A \to \mathbb{R}$ se $s_n(x) \to s(x)$ per ogni $x \in A$.
2. La serie **converge assolutamente** in $A$ se per ogni $x \in A$ converge la serie numerica $\sum_{k=0}^{\infty} |f_k(x)|$.
3. La serie **converge uniformemente** in $A$ a $s$ se $s_n \rightrightarrows s$ in $A$, cioè $\|s_n - s\|_{\infty,A} = \sup_{x\in A}|s_n(x) - s(x)| \to 0$.
4. La serie **converge totalmente** in $A$ se le funzioni $f_k$ sono limitate in $A$ e converge la serie numerica
$\displaystyle \sum_{k=0}^{\infty} \|f_k\|_{\infty,A} = \sum_{k=0}^{\infty} \sup_{x\in A} |f_k(x)|.$

L'insieme di convergenza puntuale si trova con i criteri per le serie numeriche, trattando $x$ come parametro. Per le serie di segno qualunque si usano i criteri visti in [Serie di segno qualunque](ref:chapter/6#p5). Per quella uniforme occorre invece stimare $\sup_x |s(x)-s_n(x)|$, cioè il resto, in tutto l'insieme $A$ considerato.

### Relazioni tra i tipi di convergenza

**Teorema 7.4.** Se la serie converge totalmente in $A$, allora converge assolutamente e uniformemente in $A$ (e quindi anche puntualmente).

In generale valgono le implicazioni

$$
\text{totale} \;\Longrightarrow\; \text{uniforme} \;\Longrightarrow\; \text{puntuale},\qquad \text{totale} \;\Longrightarrow\; \text{assoluta} \;\Longrightarrow\; \text{puntuale},
$$

e nessuna delle frecce si inverte. Assoluta e uniforme, in particolare, non sono confrontabili: una non implica l'altra.

### Criterio di Weierstrass

La convergenza totale è la più comoda da verificare, perché riduce il problema a una serie numerica.

**Teorema 7.5** (criterio di Weierstrass). Siano $f_k : A \to \mathbb{R}$ e sia $\{M_k\}$ una successione di numeri reali tali che

$$
|f_k(x)| \le M_k \quad \text{per ogni } x \in A \text{ e per ogni } k, \qquad \sum_{k} M_k < \infty.
$$

Allora $\sum_k f_k$ converge totalmente (quindi assolutamente e uniformemente) in $A$.

Infatti $\|f_k\|_{\infty,A} \le M_k$, e si applica il confronto per le serie a termini positivi. Il criterio è solo sufficiente. Il metodo operativo è:

1. si cerca una stima $|f_k(x)| \le M_k$ valida su tutto $A$, con $M_k$ indipendente da $x$;
2. si studia la serie numerica $\sum M_k$ con i criteri delle serie a termini positivi;
3. se $\sum M_k$ converge, la convergenza è totale su $A$.

**Esempio 7.3.** Si studi $\sum_{k=1}^{\infty} \dfrac{\sin(kx)}{k^2}$ su $\mathbb{R}$.

Per ogni $x \in \mathbb{R}$ e ogni $k \ge 1$ vale $|\sin(kx)| \le 1$, quindi

$$
\left|\frac{\sin(kx)}{k^2}\right| \le \frac{1}{k^2} = M_k.
$$

La serie $\sum 1/k^2$ è l'armonica generalizzata con $\alpha = 2 > 1$ e converge. Per il criterio di Weierstrass la serie converge totalmente, e dunque uniformemente, su tutto $\mathbb{R}$.

**Errore tipico 7.3.** Nel criterio di Weierstrass la maggiorazione $M_k$ non deve dipendere da $x$. Scrivere $\left|\frac{x^k}{k^2}\right| \le \frac{|x|^k}{k^2}$ e studiare la convergenza di questa serie numerica per ogni $x$ fissato dà solo la convergenza assoluta puntuale, non quella totale. Su un insieme non limitato come $\mathbb{R}$ questa stima non porta a nulla, perché $\sup_{x\in\mathbb{R}} |x|^k = +\infty$.

### Un esempio completo: la serie geometrica

**Esempio 7.4.** Si studi la serie $\sum_{k=0}^{\infty} x^k$.

*Convergenza puntuale e assoluta.* Per la serie geometrica converge se e solo se $|x| < 1$. Per $|x|<1$ converge anche $\sum |x|^k$, quindi la convergenza è assoluta. Si ha

$$
s_n(x) = \frac{1 - x^{n+1}}{1 - x}, \qquad s(x) = \frac{1}{1-x}.
$$

*Convergenza uniforme in $(-1,1)$.* Il resto è

$$
s(x) - s_n(x) = \frac{x^{n+1}}{1-x}.
$$

Per $x \to 1^-$ questa quantità tende a $+\infty$, quindi $\sup_{x\in(-1,1)} |s - s_n| = +\infty$ per ogni $n$ e la convergenza non è uniforme in $(-1,1)$. Non è neppure totale, perché $\sup_{(-1,1)} |x^k| = 1$ e $\sum 1 = +\infty$.

*Convergenza totale in $\lbrack -a,a\rbrack $, con $0<a<1$.* Qui $\sup_{\lbrack -a,a\rbrack } |x^k| = a^k$ e $\sum a^k < \infty$. Per Weierstrass la convergenza è totale, quindi uniforme.

:::image{src="assets/9fabee4e-serie-geometrica-ridotte.svg" alt="Grafici di 1/(1-x) e delle ridotte s3 e s6 della serie geometrica su (-1,1)" caption="Fig. 7.2 — Somma s(x) = 1/(1-x) e ridotte s3, s6 della serie geometrica: vicino a x = 0 le ridotte aderiscono alla somma, ma al tendere di x a 1 lo scarto cresce senza limite, e per questo la convergenza non è uniforme su (-1,1)."}
:::

**Errore tipico 7.4.** Dedurre la convergenza uniforme su $(-1,1)$ dal fatto che per ogni $x$ fissato $s_n(x) \to s(x)$. La convergenza puntuale non controlla il comportamento vicino agli estremi: serve il $\sup$ su tutto l'insieme, che qui è infinito. La convergenza è uniforme su ogni sottoinsieme di $\lbrack -a,a\rbrack $, con $0<a<1$.

### Il caso uniforme ma non totale

Il criterio di Weierstrass non è necessario. Le funzioni costanti $f_k(x) = \dfrac{(-1)^k}{k+1}$ definiscono una serie che converge uniformemente su ogni $A$. Infatti la somma parziale non dipende da $x$ e la serie numerica converge per il criterio di Leibniz. Però $\|f_k\|_{\infty} = \dfrac{1}{k+1}$ e $\sum \dfrac{1}{k+1}$ diverge, quindi non c'è convergenza totale. Quando il criterio di Weierstrass fallisce, per la convergenza uniforme occorre quindi stimare direttamente il resto.

### Proprietà della somma

Questi risultati seguono dai teoremi analoghi per le successioni $s_n$.

**Teorema 7.6** (continuità). Se le $f_k$ sono continue in un intervallo $I$ e $\sum f_k$ converge uniformemente in $I$ a $s$, allora $s$ è continua in $I$.

**Teorema 7.7** (integrazione termine a termine). Se le $f_k$ sono continue in $\lbrack a,b\rbrack $ e $\sum f_k$ converge uniformemente in $\lbrack a,b\rbrack $ a $s$, allora

$$
\int_a^b s(x)\,dx = \sum_{k=0}^{\infty} \int_a^b f_k(x)\,dx.
$$

**Teorema 7.8** (derivazione termine a termine). Sia $I$ un intervallo limitato e siano $f_k \in C^1(I)$. Se $\sum f_k$ converge in almeno un punto di $I$ e la serie delle derivate $\sum f_k'$ converge uniformemente in $I$, allora $\sum f_k$ converge uniformemente in $I$ a una funzione $s \in C^1(I)$ e

$$
s'(x) = \sum_{k=0}^{\infty} f_k'(x).
$$

**Errore tipico 7.5.** Nel teorema di derivazione l'ipotesi riguarda la serie delle *derivate*. Verificare la convergenza uniforme di $\sum f_k$ non basta: le derivate possono comportarsi male, e senza le ipotesi la formula $s' = \sum f_k'$ può essere falsa o priva di senso.

Per esempio la serie $\sum \sin(kx)/k^2$ converge totalmente, ma la serie delle derivate $\sum \cos(kx)/k$ non converge totalmente su $\mathbb{R}$ e in $x=0$ diverge. Il teorema di derivazione non si applica e non si può scrivere $s'(0)=\sum \cos(0)/k$.

Per le serie di potenze, dove la convergenza totale sui compatti dell'intervallo di convergenza rende queste operazioni sempre lecite, si veda [Serie di potenze](ref:chapter/7#p4).

## p4 | Serie di potenze

Una serie di potenze è una serie di funzioni i cui termini sono monomi in $x-x_0$. La sua somma è un "polinomio di grado infinito" e può essere derivata e integrata come un polinomio, ma solo dentro il suo intervallo di convergenza. Qui si impara a trovare questo intervallo, a controllarne gli estremi e a usare derivazione e integrazione termine a termine per calcolare somme.

### Definizione e insieme di convergenza

**Definizione 7.6** (serie di potenze). Siano $x_0\in\mathbb{R}$ e $\{a_k\}_{k\ge 0}$ una successione numerica. Si chiama serie di potenze una serie della forma

$$
\sum_{k=0}^{\infty} a_k (x-x_0)^k = a_0 + a_1(x-x_0) + a_2(x-x_0)^2+\dots
$$

Il punto $x_0$ è il **centro** e i numeri $a_k$ sono i **coefficienti**. Nel centro la serie converge qualunque siano i coefficienti, perché si riduce ad $a_0$.

La sostituzione $y=x-x_0$ riconduce sempre al caso del centro nell'origine, che si studia d'ora in poi.

Il risultato che governa tutta la teoria è il seguente: se $\sum a_k \bar x^k$, con $\bar x\neq 0$, ha i termini limitati (in particolare se converge), allora $\sum a_k x^k$ converge assolutamente per ogni $x$ con $|x|<|\bar x|$. Ne segue che l'insieme di convergenza è un intervallo centrato nell'origine. Si definisce allora il **raggio di convergenza**

$$
R=\sup\left\{x\in\mathbb{R} : \sum_{k=0}^{\infty} a_k x^k \text{ converge}\right\}.
$$

Per una serie centrata in $x_0$ le possibilità sono tre.

- $R=0$: la serie converge solo in $x_0$.
- $R=+\infty$: la serie converge in ogni $x\in\mathbb{R}$.
- $0<R<+\infty$: l'insieme di convergenza $A$ soddisfa
$\displaystyle \{x : |x-x_0|<R\}\subseteq A\subseteq \{x : |x-x_0|\le R\}.$

Dentro l'intervallo $(x_0-R,x_0+R)$ la convergenza è assoluta. Fuori dall'intervallo $\lbrack x_0-R,x_0+R\rbrack $ la serie non converge. Nei due estremi $x_0\pm R$ può succedere di tutto, e va studiato caso per caso.

### Calcolo del raggio con i criteri del rapporto e della radice

:::formula{id="7.3" label="Raggio di convergenza: criteri del rapporto e della radice"}
$$\lim_{k\to\infty}\frac{|a_{k+1}|}{|a_k|}=\ell \quad\text{oppure}\quad \lim_{k\to\infty}\sqrt[k]{|a_k|}=\ell \quad\Longrightarrow\quad R=\begin{cases}0 & \text{se } \ell=+\infty,\\ +\infty & \text{se } \ell=0,\\ \dfrac{1}{\ell} & \text{se } 0<\ell<+\infty.\end{cases}$$
:::

**Ipotesi.** Il criterio del rapporto richiede $a_k\ne 0$ per ogni $k$ e l'esistenza del limite. Quello della radice richiede solo l'esistenza del limite.

L'idea della dimostrazione è applicare il criterio del rapporto (o della radice) per serie numeriche alla serie dei moduli. Per $x\ne 0$ il rapporto tra termini consecutivi tende a $\ell|x|$, e la serie converge se $\ell|x|<1$, cioè $|x|<1/\ell$.

Sono due esempi tipici.

- La serie $\sum_{k=0}^\infty k\,x^k$ ha $R=1$, perché $\sqrt[k]{k}\to 1$.
- Per $\sum_{k=0}^\infty \frac{k!}{k^k}x^k$ si ha
$\displaystyle \frac{|a_{k+1}|}{|a_k|}=\frac{(k+1)!}{(k+1)^{k+1}}\cdot\frac{k^k}{k!}=\left(\frac{k}{k+1}\right)^k=\left(1+\frac1k\right)^{-k}\to e^{-1},$
quindi $R=e$.

**Serie lacunari.** Quando infiniti coefficienti sono nulli, il limite di $|a_{k+1}|/|a_k|$ non ha senso e la formula non si applica. Nella serie $\sum_{k=0}^\infty x^{k!}$ gli unici coefficienti non nulli sono quelli di indice $k!$. Si applica allora direttamente il criterio del rapporto numerico ai termini $x^{k!}$:

$$
\left|\frac{x^{(k+1)!}}{x^{k!}}\right|=|x|^{k\cdot k!}\to\begin{cases}0 & |x|<1,\\ +\infty & |x|>1.\end{cases}
$$

Quindi $R=1$, e la serie non converge né in $x=1$ né in $x=-1$.

Quando la serie contiene solo potenze di $(x-x_0)^m$ con $m$ fisso, conviene porre $y=(x-x_0)^m$, studiare la serie in $y$ e tornare a $x$ alla fine (si veda l'esempio sugli estremi).

### Convergenza agli estremi

Per $0<R<+\infty$ il raggio non dice nulla su $x=x_0\pm R$. In quei punti la serie si riduce a una serie numerica, da studiare con i criteri noti: confronto con la serie armonica generalizzata, criterio di Leibniz, condizione necessaria.

Un esempio è la serie binomiale $\sum_{k}\binom{\alpha}{k}x^k$ con $\alpha\in\mathbb{R}\setminus\mathbb{N}$. Ha sempre $R=1$, ma converge in $x=-1$ solo se $\alpha>0$ e in $x=1$ solo se $\alpha>-1$.

Se la serie converge assolutamente in $x=R$ (centro nell'origine), la convergenza è totale su ogni intervallo $\lbrack -a,R\rbrack $ con $0<a<R$. Vale un risultato analogo se converge assolutamente in $x=-R$.

**Esempio 7.5** (raggio e insieme di convergenza). Studiamo

$$
\sum_{k=2}^{\infty}\frac{2k+1}{(k-1)(k+2)}(x-2)^{2k}.
$$

1. Il centro è $x_0=2$ e compaiono solo potenze pari. Si pone $y=(x-2)^2\ge 0$ e si studia $\sum_{k\ge 2} c_k y^k$ con $c_k=\frac{2k+1}{(k-1)(k+2)}$.
2. Si ha $c_k\sim \frac{2}{k}$ e $\sqrt[k]{c_k}\to 1$. Per il criterio della radice la serie in $y$ ha raggio $1$.
3. Per $y=1$ la serie è $\sum c_k$ con $c_k\sim 2/k$. Per confronto asintotico con la serie armonica diverge.
4. Per $y=-1$ la serie è a segni alterni e converge per il criterio di Leibniz. Quindi in $y$ l'insieme di convergenza è $-1\le y<1$.
5. Si torna a $x$. La condizione $-1\le (x-2)^2$ è sempre vera, mentre $(x-2)^2<1$ equivale a $-1<x-2<1$. La serie ha $R=1$ e converge esattamente in $(1,3)$.

**Errore tipico 7.6.** Dopo la sostituzione $y=(x-x_0)^m$ ci si ferma al risultato in $y$ e si scrive "converge per $-1\le y<1$". Bisogna sempre tradurre la condizione in $x$ e controllare che i punti ottenuti esistano. Qui $y=-1$ è un punto in cui la serie in $y$ converge, ma nessun $x$ reale gli corrisponde: $(x-2)^2=-1$ è impossibile. Gli estremi $x=1$ e $x=3$ corrispondono a $y=1$, dove la serie diverge, e per questo l'intervallo è aperto.

**Errore tipico 7.7.** Concludere che negli estremi "la serie converge perché il limite del rapporto vale $1$" (oppure "diverge"). Quando $\ell|x|=1$ il criterio è inconcludente: negli estremi si rifà lo studio con le serie numeriche.

### Operazioni sulle serie di potenze

Date $\sum a_kx^k$ e $\sum b_kx^k$ con raggi $R_1$ e $R_2$, la serie somma $\sum (a_k+b_k)x^k$ ha raggio $R\ge\min(R_1,R_2)$. Se $R_1\ne R_2$ vale l'uguaglianza.

**Errore tipico 7.8.** Scrivere $R=\min(R_1,R_2)$ anche quando $R_1=R_2$. Per cancellazione di termini il raggio della somma può essere strettamente maggiore: esistono due serie con $R_1=R_2=2$ la cui somma è $\sum_{k\ge1}\frac{4}{4^k-1}x^k$, che ha raggio $R=4$.

### Derivazione e integrazione termine a termine

Le serie $\sum a_kx^k$ e $\sum k\,a_kx^k$ hanno lo stesso raggio di convergenza. Perciò derivando o integrando una serie di potenze il raggio non cambia. Si applicano i teoremi di derivazione e integrazione per serie di funzioni, che richiedono la convergenza totale. Questa si ha su ogni intervallo chiuso contenuto in $(x_0-R,x_0+R)$.

**Teorema 7.9** (derivazione e integrazione per serie di potenze). Sia $s(x)=\sum_{k=0}^\infty a_k(x-x_0)^k$ con raggio $R>0$. Allora, per ogni $x$ con $|x-x_0|<R$:

- $s$ è derivabile e $s'(x)=\sum_{k=1}^\infty k\,a_k(x-x_0)^{k-1}$;
- $\displaystyle\int_{x_0}^{x}s(t)\,dt=\sum_{k=0}^\infty \frac{a_k}{k+1}(x-x_0)^{k+1}$.

Le serie ottenute hanno lo stesso raggio $R$. In particolare $s\in C^\infty$ e i coefficienti sono

$$
a_k=\frac{s^{(k)}(x_0)}{k!}.
$$

La formula dei coefficienti si ottiene derivando $k$ volte e valutando in $x_0$.

Si parte dalla serie geometrica $\sum_{k\ge0}x^k=\frac1{1-x}$ per $|x|<1$. Sostituendo $-x$ al posto di $x$ e integrando da $0$ a $x$ si ottiene $\log(1+x)$. Sostituendo $-x^2$ e integrando si ottiene $\arctan x$.

:::formula{id="7.4" label="Serie di log(1+x) e arctan x"}
$$\log(1+x)=\sum_{k=0}^{\infty}\frac{(-1)^k}{k+1}x^{k+1}=\sum_{k=1}^{\infty}\frac{(-1)^{k-1}}{k}x^k,\qquad \arctan x=\sum_{k=0}^{\infty}\frac{(-1)^k}{2k+1}x^{2k+1}\qquad (|x|<1)$$
:::

Le serie hanno raggio $1$ in entrambi i casi, e fuori da $\lbrack -1,1\rbrack $ le ridotte si allontanano dalla funzione.

:::image{src="assets/25e86c54-arctan-ridotte-taylor.svg" alt="Grafico di arctan x e di due polinomi ridotti della sua serie" caption="Fig. 7.3 — arctan x e le ridotte di grado 5 e 9 della serie: in (-1,1) i polinomi aderiscono alla funzione, fuori divergono rapidamente"}
:::

**Esempio 7.6** (calcolo di una somma). Calcoliamo $S(x)=\sum_{k=1}^\infty k^2x^k$ per $|x|<1$.

1. Per $x=0$ la somma vale $0$. Sia $x\ne 0$ con $|x|<1$.
2. Si parte da $\sum_{k=0}^\infty x^k=\frac1{1-x}$ e si deriva termine a termine due volte:
$\displaystyle \sum_{k=1}^\infty kx^{k-1}=\frac1{(1-x)^2},\qquad \sum_{k=2}^\infty k(k-1)x^{k-2}=\frac2{(1-x)^3}.$
3. Nella seconda serie si cambia indice ponendo $j=k-1$, così che parta da $j=1$ e compaia $x^{j-1}$. Poi si scrive $j(j+1)=j^2+j$ e si usa di nuovo la prima formula:
$\displaystyle \frac{2}{(1-x)^3}=\sum_{j=1}^\infty j(j+1)x^{j-1}=\sum_{j=1}^\infty j^2x^{j-1}+\sum_{j=1}^\infty jx^{j-1}=\frac1x\,S(x)+\frac1{(1-x)^2}.$
4. Si isola $S(x)$:
$\displaystyle S(x)=\frac{2x}{(1-x)^3}-\frac{x}{(1-x)^2}=\frac{2x-x(1-x)}{(1-x)^3}=\frac{x^2+x}{(1-x)^3}.$

Come controllo, in $x=\tfrac12$ si ottiene $\sum k^2/2^k=\frac{1/4+1/2}{1/8}=6$.

**Errore tipico 7.9.** Derivando $\sum_{k\ge0}x^k$ si dimentica che il termine $k=0$ sparisce: la serie derivata parte da $k=1$ (la derivata seconda da $k=2$) e ha esponente $k-1$ (rispettivamente $k-2$). Si sbaglia poi il cambio di indice, trattando $\sum_{k\ge 2}k(k-1)x^{k-2}$ come se avesse potenza $x^{k}$: il cambio di indice va fatto per intero e il fattore $x$ o $1/x$ che ne deriva va tenuto. Conviene verificare sempre la formula con un valore numerico, come sopra.

**Errore tipico 7.10.** Integrare termine a termine dimenticando il punto base: l'integrale va preso da $x_0$ a $x$ (qui da $0$ a $x$). Una costante lasciata indeterminata falsa la somma.

**Errore tipico 7.11.** Pensare che derivare o integrare non modifichi nulla. Il raggio resta lo stesso, ma il comportamento agli estremi può cambiare. La serie $\sum x^k/k$ converge in $x=-1$, mentre la sua derivata $\sum x^{k-1}$ no. Dopo ogni operazione gli estremi vanno riesaminati.

## p5 | Serie di Taylor e funzioni analitiche

Il capitolo ha mostrato che una serie di potenze definisce una funzione regolare nel suo intervallo di convergenza. Qui si percorre la strada inversa: data $f$, si cerca una serie di potenze che la rappresenti. Per i coefficienti la risposta è obbligata, ma non basta a garantire che la serie abbia come somma proprio $f$.

### Serie di Taylor e funzioni analitiche

Supponiamo che in un intervallo $(x_0-\delta,x_0+\delta)$ si abbia $f(x)=\sum_{k=0}^{\infty}a_k(x-x_0)^k$. Per la derivazione termine a termine (si veda [Serie di potenze](ref:chapter/7#p4)) i coefficienti sono necessariamente $a_k=f^{(k)}(x_0)/k!$.

:::formula{id="7.5" label="Serie di Taylor centrata in x₀"}
$$\sum_{k=0}^{\infty}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k$$
:::

**Definizione 7.7** (serie di Taylor, funzione analitica). La serie in {{formula:7.5}} si dice serie di Taylor di $f$ centrata in $x_0$. Se ha raggio di convergenza positivo e la sua somma coincide con $f$ in un intorno di $x_0$, la funzione $f$ si dice sviluppabile in serie di Taylor, o **analitica**, in $x_0$. Per $x_0=0$ si parla di serie di Maclaurin.

Le ridotte della serie sono i polinomi di Taylor $s_n(x)=T_{n,x_0}f(x)$ (si veda [Formula di Taylor](ref:chapter/2#p5)). Dunque $f$ è analitica in $x_0$ se e solo se $T_{n,x_0}f(x)\to f(x)$ in un intorno di $x_0$, cioè se il resto $r_n(x)=f(x)-s_n(x)$ tende a $0$.

### Non basta essere $C^\infty$

Scrivere la serie di Taylor richiede soltanto che $f$ abbia derivate di ogni ordine in $x_0$. Questo non basta. La funzione $f(x)=e^{-1/x^2}$ per $x\neq0$, con $f(0)=0$, è di classe $C^\infty$ su $\mathbb{R}$ e ha $f^{(k)}(0)=0$ per ogni $k$. La sua serie di Maclaurin è quindi identicamente nulla e non rappresenta $f$ in nessun intorno dell'origine.

:::image{src="assets/14ee7127-controesempio-e-meno-uno-su-x2.svg" alt="Grafico di e^(-1/x²) e della funzione nulla" caption="Fig. 7.4 — La funzione e^(-1/x²) è piattissima in 0 ma non nulla fuori dall'origine: la sua serie di Maclaurin è la funzione nulla (tratteggiata)."}
:::

### Un criterio di analiticità

**Teorema 7.10** (condizione sufficiente). Sia $f\in C^\infty(x_0-\delta,x_0+\delta)$ con $\delta>0$. Se esistono $k_0\ge0$ e $M>0$ tali che per ogni $k\ge k_0$

$$
|f^{(k)}(x)|\le M\,\frac{k!}{\delta^k}\qquad\forall x\in(x_0-\delta,x_0+\delta),
$$

allora $f$ è sviluppabile in serie di Taylor in $x_0$ e il raggio di convergenza è almeno $\delta$.

L'idea della dimostrazione: con il resto di Lagrange $r_n(x)=\frac{f^{(n+1)}(x_n)}{(n+1)!}(x-x_0)^{n+1}$ l'ipotesi dà $|r_n(x)|\le M\left(\frac{|x-x_0|}{\delta}\right)^{n+1}$, che tende a $0$ per $|x-x_0|<\delta$.

Il caso più usato è quello delle **derivate equilimitate**: se $|f^{(k)}(x)|\le M$ su $(x_0-\delta,x_0+\delta)$ per ogni $k$, la condizione vale, perché $k!/\delta^k\to\infty$. Vale anche se $|f^{(k)}|\le M^k$.

### Sviluppi notevoli

Il criterio delle derivate equilimitate si applica a $e^x$, perché $|f^{(k)}|=e^x\le e^{\delta}$ su $(-\delta,\delta)$ e $\delta$ è arbitrario. Si applica anche a $\sin x$ e $\cos x$, che hanno $M=1$. Si ottengono così gli sviluppi di Maclaurin seguenti.

:::formula{id="7.6" label="Serie di Maclaurin di e^x"}
$$e^x=\sum_{k=0}^{\infty}\frac{x^k}{k!},\qquad \forall x\in\mathbb{R}$$
:::

:::formula{id="7.7" label="Serie di Maclaurin di seno e coseno"}
$$\sin x=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k+1)!}x^{2k+1},\qquad \cos x=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}x^{2k},\qquad \forall x\in\mathbb{R}$$
:::

Per $\alpha\in\mathbb{R}\setminus\mathbb{N}$ vale la **serie binomiale**, con raggio $R=1$, dove $\binom{\alpha}{k}=\frac{\alpha(\alpha-1)\cdots(\alpha-k+1)}{k!}$.

:::formula{id="7.8" label="Serie binomiale"}
$$(1+x)^{\alpha}=\sum_{k=0}^{\infty}\binom{\alpha}{k}x^k,\qquad \forall x\in(-1,1)$$
:::

Per $\alpha=-1$ si ritrova $\frac{1}{1+x}=\sum_{k=0}^{\infty}(-1)^kx^k$. Gli sviluppi di $\log(1+x)$ e $\arctan x$ sono già stati ricavati (formula {{formula:7.4}}).

### Sviluppare funzioni composte e combinazioni

Quasi mai conviene calcolare le derivate di $f$. Si parte dagli sviluppi notevoli e si usano le operazioni sulle serie di potenze: sostituzione, prodotto per una potenza, somma, derivazione e integrazione termine a termine. Derivazione e integrazione conservano il raggio di convergenza; per sostituzioni e somme occorre ricalcolarlo. Per esempio, ponendo $-x^2$ al posto di $x$ nella serie esponenziale si ha $e^{-x^2}=\sum_{k=0}^{\infty}(-1)^k\frac{x^{2k}}{k!}$ su tutto $\mathbb{R}$. Integrando termine a termine si ottiene

$$
\operatorname{erf}x=\frac{2}{\sqrt{\pi}}\int_0^xe^{-t^2}dt=\frac{2}{\sqrt{\pi}}\sum_{k=0}^{\infty}\frac{(-1)^kx^{2k+1}}{k!\,(2k+1)}.
$$

**Esempio 7.7** (derivate in $0$ da uno sviluppo). Calcolare $f^{(7)}(0)$ per $f(x)=x\,e^{-x^2}$.

1. Dallo sviluppo di $e^{-x^2}$, moltiplicando per $x$: $f(x)=\sum_{k=0}^{\infty}(-1)^k\frac{x^{2k+1}}{k!}$.
2. Il coefficiente di $x^7$ si ottiene per $2k+1=7$, cioè $k=3$: $a_7=\frac{(-1)^3}{3!}=-\frac16$.
3. Poiché $a_k=f^{(k)}(0)/k!$, si ha $f^{(7)}(0)=7!\cdot a_7=5040\cdot\left(-\frac16\right)=-840$.

**Errore tipico 7.12.** Si scambia il coefficiente con la derivata e si scrive $f^{(7)}(0)=a_7=-\frac16$. Il coefficiente è $f^{(k)}(0)/k!$: la derivata si ottiene moltiplicando per $k!$. Un secondo errore è prendere $k=7$ invece di $2k+1=7$ negli sviluppi con soli esponenti dispari. In questa funzione dispari non compaiono termini di grado pari, i cui coefficienti sono quindi nulli.

**Esempio 7.8** (cambio di centro). Sviluppare $f(x)=\frac{1}{x+2}$ in $x_0=0$ e in $x_0=1$.

1. In $x_0=0$: $\frac{1}{2+x}=\frac12\cdot\frac{1}{1+x/2}=\sum_{k=0}^{\infty}\frac{(-1)^k}{2^{k+1}}x^k$, valida per $\left|\frac x2\right|<1$, quindi $R=2$.
2. In $x_0=1$ si scrive $x+2=3+(x-1)$ e si ottiene $\frac13\cdot\frac{1}{1+\frac{x-1}{3}}=\sum_{k=0}^{\infty}\frac{(-1)^k}{3^{k+1}}(x-1)^k$, con $R=3$.

Il raggio coincide con la distanza dal centro alla singolarità $x=-2$.

**Errore tipico 7.13.** Si sviluppa $\frac{1}{x+2}$ in potenze di $x-1$ riutilizzando la serie centrata in $0$, o si pone il fattore $\frac12$ fuori dalla somma senza elevarlo a $k$. Per sfruttare la serie geometrica occorre portare il denominatore alla forma $1+t$ con $t$ proporzionale a $(x-x_0)$. Il termine di ordine $k$ contiene allora $\frac{1}{a^{k+1}}$, dove $a$ è il numero che sta al posto di $2$ (o di $3$).

### Riconoscere le funzioni analitiche

Le funzioni razionali sono analitiche in ogni punto interno al loro dominio. Più in generale, le funzioni elementari sono analitiche nei punti in cui le operazioni che le compongono sono analitiche; per radici e potenze non intere occorre particolare attenzione agli zeri dell'argomento. Per $\frac{1}{1+x}$ il raggio della serie in $x_0\neq-1$ è $|1+x_0|$, la distanza dalla singolarità.

**Errore tipico 7.14.** Si conclude che una funzione analitica ovunque abbia serie di Taylor con raggio $+\infty$. La funzione $\frac{1}{1+x^2}$ è analitica in ogni $x_0\in\mathbb{R}$, ma in $x_0=0$ si ha $\sum_{k=0}^{\infty}(-1)^kx^{2k}$ con $R=1$; in generale $R=\sqrt{1+x_0^2}$. Il raggio resta finito per effetto delle singolarità $\pm i$ nel piano complesso, che si vedono nella sezione [Serie di potenze in $\mathbb{C}$](ref:chapter/7#p6).

Riassumendo, per riconoscere l'analiticità di $f$ in $x_0$:

- se $f$ è una combinazione di funzioni elementari nei punti in cui le operazioni che la compongono sono analitiche, è analitica e si sviluppa con le serie notevoli; per radici e potenze non intere occorre particolare attenzione agli zeri dell'argomento;
- se è solo $C^\infty$, occorre una stima delle derivate come $|f^{(k)}|\le Mk!/\delta^k$;
- la regolarità $C^\infty$ da sola non basta (esempio $e^{-1/x^2}$).

## p6 | Serie di potenze in ℂ

Le serie di potenze studiate in [Serie di potenze](ref:chapter/7#p4) e [Serie di Taylor e funzioni analitiche](ref:chapter/7#p5) hanno senso anche se la variabile è un numero complesso. Questo permette di estendere a $\mathbb{C}$ le funzioni $e^x$, $\sin x$, $\cos x$ senza ricorrere a una nuova definizione geometrica: basta sostituire $z$ a $x$ nei loro sviluppi di Maclaurin.

### Serie di potenze in $\mathbb{C}$

**Definizione 7.8** (serie di potenze complessa). Una serie di potenze in $\mathbb{C}$ è un'espressione

$$
\sum_{k=0}^{\infty} a_k (z-z_0)^k,
$$

dove $\{a_k\}_{k\ge 0}$ è una successione di numeri complessi, $z_0\in\mathbb{C}$ è il centro e $z$ è la variabile complessa.

I concetti di convergenza puntuale, assoluta e totale si estendono sostituendo al valore assoluto il modulo $|\cdot|$ di $\mathbb{C}$.

Il risultato di riferimento è questo: l'intervallo di convergenza reale viene sostituito da un **disco di convergenza**, centrato in $z_0$ e di raggio $R\in[0,+\infty]$. Per $|z-z_0|<R$ la serie converge, per $|z-z_0|>R$ non converge. Sulla circonferenza $|z-z_0|=R$ occorre uno studio caso per caso.

Per $z=x\in\mathbb{R}$ e $z_0\in\mathbb{R}$ si ritrova la serie di potenze reale. Il disco interseca l'asse reale nell'intervallo $(x_0-R,x_0+R)$.

### Esponenziale, seno e coseno complessi

Le tre serie reali di Maclaurin (si vedano {{formula:7.6}} e {{formula:7.7}}) hanno senso per ogni $z\in\mathbb{C}$. Si assumono come **definizione** delle funzioni complesse.

:::formula{id="7.9" label="Esponenziale complesso"}
$$e^{z} = \sum_{k=0}^{\infty} \frac{z^k}{k!}, \qquad z\in\mathbb{C}$$
:::

:::formula{id="7.10" label="Seno complesso"}
$$\sin z = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k+1)!}\, z^{2k+1}, \qquad z\in\mathbb{C}$$
:::

:::formula{id="7.11" label="Coseno complesso"}
$$\cos z = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k)!}\, z^{2k}, \qquad z\in\mathbb{C}$$
:::

Le tre serie convergono in tutto il piano complesso, quindi $R=+\infty$ e le funzioni corrispondenti sono analitiche su $\mathbb{C}$.

Il motivo è lo stesso del caso reale. Per l'esponenziale il rapporto dei moduli di due termini consecutivi vale

$$
\frac{|z|^{k+1}/(k+1)!}{|z|^{k}/k!}=\frac{|z|}{k+1}\to 0 \quad (k\to\infty)
$$

per ogni $z$ fissato, e il criterio del rapporto dà convergenza assoluta. Per seno e coseno si procede in modo analogo.

### Funzioni razionali e raggio di convergenza

Una funzione razionale $f(z)=P(z)/Q(z)$, con $P$ e $Q$ polinomi a coefficienti complessi primi tra loro, è analitica in $\mathbb{C}$ privato degli zeri di $Q$. Fissato $z_0\in\operatorname{dom} f$, la serie di Taylor centrata in $z_0$ ha raggio di convergenza uguale alla **distanza di $z_0$ dallo zero di $Q$ più vicino**, cioè dalla più vicina singolarità.

**Esempio 7.9.** Sia $f(z)=\dfrac{1}{1+z^2}$. Gli zeri del denominatore sono $z=\pm i$.

1. Con centro $z_0=0$: $|0-i|=|0+i|=1$, quindi $R=1$. Si ritrova $f(x)=\sum_{k=0}^\infty(-1)^k x^{2k}$ con raggio $1$.
2. Con centro $z_0=1$: le distanze sono $|1-i|=\sqrt2$ e $|1+i|=\sqrt2$, quindi $R=\sqrt2$.
3. In generale, per $z_0=x_0\in\mathbb{R}$ si ha $R=\min(|x_0-i|,|x_0+i|)=\sqrt{1+x_0^2}$.
4. Con centro $z_0=i/2$ (che non è uno zero del denominatore): $|i/2-i|=\tfrac12$ e $|i/2+i|=\tfrac32$, quindi $R=\tfrac12$.

:::image{src="assets/d63cf840-disco-convergenza-razionale.svg" alt="Disco di convergenza di 1/(1+z^2) centrato in z0 = 1" caption="Fig. 7.5 — Il disco di centro z0 = 1 e raggio radice di 2 arriva fino alle singolarità i e -i, che stanno sulla sua circonferenza."}
:::

**Errore tipico 7.15.** Dedurre dal fatto che $\dfrac{1}{1+x^2}$ è $C^\infty$ su tutto $\mathbb{R}$ che la sua serie di Taylor converga su tutto $\mathbb{R}$. La funzione è analitica in ogni punto reale, ma il raggio di convergenza della serie centrata in $x_0$ è finito, e vale $\sqrt{1+x_0^2}$. Il motivo è che nel piano complesso esistono le singolarità $\pm i$, anche se sull'asse reale non si vedono.
