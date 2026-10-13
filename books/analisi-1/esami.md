---
type: esami
printable: true
---

:::exercise{id="X2015-1" type="esame" chapter="9" difficulty="medio"}
## Domanda
**Esame del 13 febbraio 2015 - Io turno**

**Esercizio 2.** Sia

$$
g(x)=
\begin{cases}
\displaystyle \frac{3}{10}-\frac{3}{1+x^2} & \text{se }x\leq 3,\\
2(x\log 3-x\log x) & \text{se }x>3.
\end{cases}
$$

1. Calcolare $\displaystyle\int_0^6 g(x)\,dx$.

2. Dire se esiste $c\in\lbrack 0,6\rbrack $ tale che $g(c)$ è uguale alla media integrale di $g$ su $\lbrack 0,6\rbrack $. Giustificarne la risposta.

:::solution
**Esercizio 2.** Consideriamo la funzione

$$
g(x)=
\begin{cases}
\frac{3}{10}-\frac{3}{1+x^2} & \text{se }x\leq 3,\\
2(x\log 3-x\log x) & \text{se }x>3.
\end{cases}
$$

1. Si ha che

$$
\begin{aligned}
\int_0^6 g(x)\,dx
&=\int_0^3\left(\frac{3}{10}-\frac{3}{1+x^2}\right)\,dx
+\int_3^6 2(x\log 3-x\log x)\,dx\\
&=\left[\frac{3}{10}x-3\arctan x\right]_0^3
+\int_3^6 2x\log 3\,dx-\int_3^6 2x\log x\,dx.
\end{aligned}
$$

Integrando per parti l’ultimo integrale si ottiene

$$
\begin{aligned}
\int_0^6 g(x)\,dx
&=\frac{9}{10}-3\arctan 3+\log 3\left[x^2\right]_3^6-\left[x^2\log x\right]_3^6+\int_3^6 x\,dx\\
&=\frac{9}{10}-3\arctan 3+27\log 3-36\log 6+9\log 3+\frac{27}{2}\\
&=\frac{72}{5}-3\arctan 3-36\log 2.
\end{aligned}
$$

2. La funzione $g$ è continua in ogni $x\neq 3$. Controlliamo in $x=3$. Si ha che

$$
g(3)=\lim_{x\to 3^-}g(x)=0=\lim_{x\to 3^+}g(x).
$$

Quindi $g$ è continua anche in $x=3$. In particolare $g$ è continua in $\lbrack 0,6\rbrack $. Per il Teorema della media integrale esiste $c\in\lbrack 0,6\rbrack $ tale che $g(c)$ è uguale alla media integrale di $g$ su $\lbrack 0,6\rbrack $.
:::
:::

:::exercise{id="X2015-2" type="esame" chapter="10" difficulty="medio"}
## Domanda
**Esame del 13 febbraio 2015 - IIo turno**

**Esercizio 2 (Variante 1).**

a) Sia $f:\lbrack 0,+\infty)\to\mathbb{R}$ una funzione continua. Scrivere la definizione di convergenza dell’integrale improprio

$$
\int_0^{+\infty} f(x)\,dx.
$$

b) Dimostrare che se $f(x)\geq 0$ su $\lbrack 0,+\infty)$, l’integrale $\int_0^{+\infty} f(x)\,dx$ non può essere indeterminato.

c) Studiare il comportamento dell’integrale improprio

$$
\int_0^{+\infty}\frac{x^2+\sin x}{x^2+1}\,dx.
$$

:::solution
**Esercizio 2 (Variante 1)**

a) Per definizione l’integrale improprio $\int_0^{+\infty} f(x)\,dx$ converge se esiste finito il limite

$$
\lim_{c\to+\infty}\int_0^c f(x)\,dx.
$$

b) Consideriamo la funzione $F:\lbrack 0,+\infty)\to\mathbb{R}$ definita da

$$
F(c)=\int_0^c f(x)\,dx.
$$

Essendo $f(x)\geq 0$ per ogni $x\geq 0$, risulta che $F$ è crescente. Infatti, se $0\leq c_1<c_2$, allora

$$
F(c_2)=\int_0^{c_2} f(x)\,dx=\underbrace{\int_0^{c_1} f(x)\,dx}_{=F(c_1)}+\underbrace{\int_{c_1}^{c_2} f(x)\,dx}_{\geq 0}\geq F(c_1)\geq 0.
$$

Per il teorema sui limiti delle funzioni monotone esiste $\lim_{c\to+\infty}F(c)$ che quindi è un numero reale $\geq 0$ oppure $+\infty$. Ne segue che l’integrale improprio di $f$ tra $0$ e $+\infty$ converge o diverge positivamente.

c) La funzione $f(x)=\dfrac{x^2+\sin x}{x^2+1}$ è continua su $\lbrack 0,+\infty)$ e quindi è localmente integrabile su $\lbrack 0,+\infty)$.

Osserviamo che

$$
\forall x\geq 0:\qquad \frac{x^2-1}{x^2+1}\leq \frac{x^2+\sin x}{x^2+1}
$$

e

$$
\forall x\geq 1:\qquad \frac{x^2-1}{x^2+1}\geq 0.
$$

Inoltre $\lim_{x\to+\infty}\frac{x^2-1}{x^2+1}=1$. Ne segue che $\int_0^{+\infty}\frac{x^2-1}{x^2+1}\,dx$ diverge, e per il criterio del confronto anche $\int_0^{+\infty}\frac{x^2+\sin x}{x^2+1}\,dx$ diverge.
:::
:::

:::exercise{id="X2015-3" type="esame" chapter="10" difficulty="medio"}
## Domanda
**Esame del 13 febbraio 2015 - IIo turno**

**Esercizio 2 (Variante 2).** Sia $f:\lbrack 0,1)\to\mathbb{R}$ una funzione continua tale che $\lim_{x\to1^-}f(x)=+\infty$.

Scrivere la definizione di convergenza dell’integrale improprio $\int_0^1 f(x)\,dx$.

Dimostrare che se $f(x)\geq 0$ su $(0,1)$, allora l’integrale $\int_0^1 f(x)\,dx$ non può essere indeterminato.

Studiare il comportamento dell’integrale improprio $\int_0^1\frac{\sin(x-1)}{(x-1)^2}\,dx$.

:::solution
Per definizione, l’integrale improprio $\int_0^1 f(x)\,dx$ converge se esiste finito il limite

$$\lim_{c\to1^-}\int_0^c f(x)\,dx.$$

La funzione $F:\lbrack 0,1)\to\mathbb{R}$ definita da $F(c)=\int_0^c f(x)\,dx$ è la funzione integrale di $f$ sull’intervallo $\lbrack 0,1)$. Per ogni $0\leq a<b<1$, il valore di $f$ nel singolo punto $0$ non influisce sull’integrale e, poiché $f(x)\geq0$ per $x\in(0,1)$, si ha $\int_a^b f(x)\,dx\geq0$. Pertanto $F(b)-F(a)\geq0$, e $F$ è monotona crescente su $\lbrack 0,1)$. Per il teorema sui limiti delle funzioni monotone, esiste il limite $\lim_{c\to1^-}F(c)$, finito oppure infinito. Perciò l’integrale improprio $\int_0^1 f(x)\,dx$ non può essere indeterminato.

Se $x\in\lbrack 0,1)$, allora $x-1\in\lbrack -1,0)$. Dunque $\frac{\sin(x-1)}{(x-1)^2}\leq0$ per ogni $x\in\lbrack 0,1)$. Quindi l’integrale improprio $\int_0^1\frac{\sin(x-1)}{(x-1)^2}\,dx$ converge oppure diverge a $-\infty$.

Poiché la funzione seno è dispari, si ha

$$\frac{\sin(x-1)}{(x-1)^2}=-\frac{\sin(1-x)}{(1-x)^2}\sim-\frac{1}{1-x},\qquad x\to1^-. $$

Poiché l’integrale improprio $\int_0^1\frac{1}{1-x}\,dx$ diverge a $+\infty$, per il criterio del confronto asintotico anche l’integrale improprio $\int_0^1\frac{\sin(1-x)}{(1-x)^2}\,dx$ diverge a $+\infty$. Quindi l’integrale improprio $\int_0^1\frac{\sin(x-1)}{(x-1)^2}\,dx$ diverge a $-\infty$.
:::
:::

:::exercise{id="X2016-1" type="esame" chapter="5" difficulty="difficile"}
## Domanda
**Esame del 28 gennaio 2016 - IIo turno**

Sia data la funzione

$$
f(x)=
\begin{cases}
\dfrac{(x+2)^2}{\log(x+2)}-3 & x\in(-2,-1)\cup(-1,+\infty)\\
-3 & x\leq -2.
\end{cases}
$$

a) Studiare i limiti agli estremi del dominio. Studiare la continuità di $f$ sul suo dominio.

b) Studiare la derivabilità di $f$ e calcolarne la derivata, dove esiste.

c) Determinare gli intervalli di monotonia di $f$ e i suoi punti di massimo e di minimo, specificandone il tipo.

d) Disegnare un grafico qualitativo di $f$.

e) Data la funzione

$$
f_k(x)=
\begin{cases}
\dfrac{(x+2)^2}{\log(x+2)}-3 & x\in(-2,-1)\\
-3+(x+2)^k & x\leq -2,
\end{cases}
$$

1) determinare i valori di $k\in\mathbb{N}$ per cui $f_k$ è continua in $(-\infty,-1)$;

2) determinare i valori di $k\in\mathbb{N}$ per cui $f_k$ è di classe $C^1$ in $\rbrack -\infty,-1\lbrack $.

:::solution
a) La funzione logaritmo è definita se e solo se l’argomento è maggiore di zero. Dunque la funzione $g(x)=\dfrac{(x+2)^2}{\log(x+2)}$ è definita se e solo se $x+2>0$ e $\log(x+2)\neq 0$, cioè se e solo se $x\in(-2,-1)\cup(-1,+\infty)$. Ne segue che $\operatorname{dom} f=\mathbb{R}\setminus\{-1\}$.

Poiché $\log(x+2)$ è un infinito di ordine inferiore rispetto a $(x+2)^2$ per $x\to+\infty$, si ha che $\lim_{x\to+\infty}f(x)=+\infty$. Inoltre

$$
\lim_{x\to-\infty}f(x)=-3,\qquad
\lim_{x\to-1^+}f(x)=+\infty,\qquad
\lim_{x\to-1^-}f(x)=-\infty.
$$

Poiché $\dfrac{(x+2)^2}{\log(x+2)}$ è un infinito di ordine superiore a $x$ per $x\to+\infty$, la funzione non ammette asintoto obliquo destro.

La funzione $f$ è continua in $(-\infty,-2)$ perché è una funzione costante, ed è continua in $(-2,-1)\cup(-1,+\infty)$ perché composizione di funzioni continue. Inoltre $\lim_{x\to-2^-}f(x)=\lim_{x\to-2^+}f(x)=-3=f(-2)$. Quindi $f$ è continua anche in $x=-2$ e quindi è continua in tutto il suo dominio.

b) Si ha

$$
f'(x)=
\begin{cases}
\dfrac{x+2}{\log^2(x+2)}(2\log(x+2)-1) & x>-2,\ x\neq-1\\
0 & x<-2.
\end{cases}
$$

Poiché $\lim_{x\to-2^+}f'(x)=0$, se ne conclude che $f$ è derivabile in $x=-2$ con $f'(-2)=0$ e quindi $f$ è derivabile in tutto il suo dominio.

c) Per $x>-2$ si ha

$$
f'(x)=\frac{x+2}{\log^2(x+2)}(2\log(x+2)-1)>0
\quad\Longleftrightarrow\quad
x>\sqrt{e}-2
$$

mentre

$$
f'(x)=0
\quad\Longleftrightarrow\quad
x\leq -2\quad\text{oppure}\quad x=\sqrt{e}-2.
$$

Possiamo concludere che:

- $f$ è decrescente (non strettamente) in $(-\infty,-1)$ ed è strettamente decrescente in $\lbrack -2,-1)$ e in $(-1,\sqrt{e}-2\rbrack $;
- $f$ è crescente (non strettamente) in $(-\infty,-2\rbrack $ ed è strettamente crescente in $\lbrack \sqrt{e}-2,+\infty)$;
- i punti $x<-2$ e $x=\sqrt{e}-2$ sono punti di minimo locale (non assoluto) per $f$; nel punto $x=\sqrt{e}-2$ il grafico passa per $\left(\sqrt{e}-2,\,2e-3\right)$;
- i punti $x\leq -2$ sono anche punti di massimo locale (non assoluto) per $f$.

Infine, dal punto a), la funzione è inferiormente e superiormente illimitata; ne concludiamo che $f$ non ammette punti di massimo o minimo assoluti.

d) Di seguito è riportato un grafico qualitativo di $f$.

[figure: Grafico qualitativo di $f$, con asintoto verticale $x=-1$ e asintoto orizzontale $y=-3$ per il ramo a sinistra; il ramo a destra ha un minimo nel punto $\left(\sqrt{e}-2,\,2e-3\right)$.]

e) Consideriamo la funzione

$$
f_k(x)=
\begin{cases}
\dfrac{(x+2)^2}{\log(x+2)}-3 & x\in(-2,-1)\\
-3+(x+2)^k & x\leq -2.
\end{cases}
$$

1) Si ha $f_0(-2)=-2$ (convenendo, come di consueto, che la funzione $(x-x_0)^0$ sia uguale a $1$ anche in $x=x_0$), mentre $f_k(-2)=-3$ per $k\geq1$. Quindi

$$
\lim_{x\to-2^+} f_k(x)=f_k(-2)=\lim_{x\to-2^-}f_k(x)=-3
$$

per $k\geq1$. Per $k=0$, invece, il limite sinistro vale $-2$, mentre il limite destro vale $-3=f_0(-2)$. La funzione è dunque continua in $x=-2$ se e solo se $k\geq1$. Altrove la funzione è continua perché composizione di funzioni elementari continue.

2) Per $k\geq1$ si ha che $f'_k(x)=k(x+2)^{k-1}$ se $x<-2$. Ricordando il punto b), ne segue facilmente che

$$
\lim_{x\to-2^+} f'_k(x)=0=\lim_{x\to-2^-}f'_k(x)
$$

(e la funzione è derivabile in $x=-2$) se e solo se $k\geq2$ e $f'_k(-2)=0$. In particolare, il limite di cui sopra garantisce anche la continuità della derivata in $x=-2$. Siccome altrove la derivata è continua perché composizione di funzioni elementari continue, se ne conclude che $f_k$ è di classe $C^1$ per ogni $k\geq2$.
:::
:::

:::exercise{id="X2016-2" type="esame" chapter="10" difficulty="medio"}
## Domanda
**Esame del 10 febbraio 2016 - Io turno**

**Esercizio 2**

a) Sia data una funzione continua $f:\lbrack 1,+\infty)\to\mathbb{R}$. Scrivere le definizioni di convergenza e di convergenza assoluta dell’integrale improprio

$$
\int_1^{+\infty} f(x)\,dx.
$$

b) Studiare il comportamento del seguente integrale improprio motivando i passaggi svolti

$$
\int_1^{+\infty}\frac{\sin x}{x^2}\,dx.
$$

:::solution
**Esercizio 2**

a) Per definizione l’integrale improprio $\int_1^{+\infty} f(x)\,dx$ converge se esiste finito il limite

$$
\lim_{c\to+\infty}\int_1^c f(x)\,dx.
$$

Per definizione l’integrale improprio $\int_1^{+\infty} f(x)\,dx$ converge assolutamente se esiste finito il limite

$$
\lim_{c\to+\infty}\int_1^c |f(x)|\,dx.
$$

Per il criterio della convergenza assoluta, se l’integrale improprio $\int_1^{+\infty} f(x)\,dx$ converge assolutamente, allora converge. Il viceversa in generale non è vero.

b) La funzione $\frac{\sin x}{x^2}$ è continua e dunque localmente integrabile in $\lbrack 1,+\infty)$.

Studiamo la convergenza assoluta: poiché $0\leq \left|\frac{\sin x}{x^2}\right|\leq \frac{1}{x^2}$ e poiché $\int_1^{+\infty}\frac{1}{x^2}\,dx$ converge, per il teorema del confronto l’integrale assegnato converge assolutamente, e dunque $\int_1^{+\infty}\frac{\sin x}{x^2}\,dx$ converge.
:::
:::

:::exercise{id="X2016-3" type="esame" chapter="4" difficulty="medio"}
## Domanda
**Esame del 23 giugno 2016 - Io turno**

**Esercizio 2.**

a) Sia $\lim_{n\to\infty}a_n=\lim_{n\to\infty}c_n=l\in\mathbb{R}$ e sia $a_n\le b_n\le c_n$, per ogni $n\ge10^5$. Spiegare in base a quale teorema è possibile calcolare $\lim_{n\to\infty}b_n$.

b) Enunciare il teorema usato al punto precedente.

c) Sia $a_n=n\log n$. Calcolare, se esistono, i seguenti limiti, motivando la risposta:

$$
(1)\quad \lim_{n\to\infty}\frac{1}{a_n}(2e+\cos n\pi),
\qquad (2)\quad \lim_{n\to\infty}a_n(-1+\cos n\pi).
$$

:::solution
**Esercizio 2.**

a) Per il secondo teorema del confronto (noto anche come teorema dei due carabinieri), poiché esiste un intorno di $+\infty$ in cui $a_n\le b_n\le c_n$ e poiché $\lim_{n\to\infty}a_n=\lim_{n\to\infty}c_n=l\in\mathbb{R}$, allora anche $\lim_{n\to\infty}b_n=l$.

b) **Teorema (secondo teorema del confronto).** Siano $A\subseteq\mathbb{R}$ non vuoto, $f,g,h:A\to\mathbb{R}$ tre funzioni e $x_0\in\mathbb{R}\cup\{\pm\infty\}$ un punto di accumulazione per $A$. Supponiamo che:

1. Esistano $\lim_{x\to x_0}f(x)=\lim_{x\to x_0}h(x)=l\in\mathbb{R}$.
2. Esista un intorno $I(x_0)$ di $x_0$ tale che per ogni $x\in(A\cap I(x_0))\setminus\{x_0\}$ si abbia $f(x)\le g(x)\le h(x)$.

Allora $\lim_{x\to x_0}g(x)=l$.

c)

1. Poiché per ogni $t\in\mathbb{R}$ si ha $-1\le\cos t\le1$ e $a_n>0$ per ogni $n\ge2$, si ha:

$$
\frac{1}{a_n}(2e-1)\le\frac{1}{a_n}(2e+\cos n\pi)\le\frac{1}{a_n}(2e+1).
$$

Poiché

$$
\lim_{n\to\infty}\frac{1}{n\log n}(2e-1)=\lim_{n\to\infty}\frac{1}{n\log n}(2e+1)=0,
$$

per il secondo teorema del confronto anche $\lim_{n\to\infty}\frac{1}{a_n}(2e+\cos n\pi)=0$.

2. Poiché $\cos n\pi=(-1)^n$, si deve considerare la successione

$$
b_n=a_n(-1+\cos n\pi)=n\log n\bigl(-1+(-1)^n\bigr).
$$

Per ogni $n=2k$, con $n\ge2$, si ha che $b_n=b_{2k}=0$. Per ogni $n=2k+1$, con $n\ge3$, si ha che $b_n=b_{2k+1}=-(2k+1)\log(2k+1)$ e quindi

$$
\lim_{k\to+\infty}b_{2k}=0\ne\lim_{k\to+\infty}b_{2k+1}=-\infty.
$$

Ne segue che $(b_n)$ non ha limite.
:::
:::

:::exercise{id="X2016-4" type="esame" chapter="9" difficulty="medio"}
## Domanda
**Esame del 21 settembre 2016**

Sia

$$
h(x)=
\begin{cases}
\dfrac{x-3}{x+1} & \text{se } 1\le x\le 3,\\
x-3 & \text{se } 3<x\le 4.
\end{cases}
$$

a) Calcolare l’area della parte di piano delimitata dall’asse $x$, dalle rette $x=1$, $x=4$ e dal grafico di $h(x)$.

b) Enunciare il Teorema fondamentale del calcolo integrale.

c) Verificare se la funzione assegnata al punto a) soddisfa le ipotesi del Teorema fondamentale del calcolo integrale nell’intervallo $\lbrack 1,4\rbrack $.

:::solution
a) La funzione è non positiva in $\lbrack 1,3\rbrack $ e non negativa in $(3,4\rbrack $. L’area richiesta è

$$
A=-\int_1^3\frac{x-3}{x+1}\,dx+\int_3^4(x-3)\,dx.
$$

Poiché $\frac{x-3}{x+1}=1-\frac{4}{x+1}$,

$$
A=-\left[x-4\ln(x+1)\right]_1^3+\left[\frac{(x-3)^2}{2}\right]_3^4
=4\ln 2-2+\frac12
=4\ln 2-\frac32.
$$

b) Sia $f:\lbrack a,b\rbrack \to\mathbb{R}$ una funzione continua e sia $F$ una sua primitiva in $\lbrack a,b\rbrack $. Allora

$$
\int_a^b f(x)\,dx=F(b)-F(a).
$$

c) La funzione $h$ è continua in $x=3$: $h(3)=0$, mentre $\lim_{x\to 3^+}h(x)=0$ e $\lim_{x\to 3^-}h(x)=0$. La funzione è anche continua agli estremi e su ciascun tratto, perciò soddisfa le ipotesi del Teorema fondamentale del calcolo integrale nell’intervallo $\lbrack 1,4\rbrack $.
:::
:::

:::exercise{id="X2017-1" type="esame" chapter="2" difficulty="medio"}
## Domanda
**Esame del 14 febbraio 2017 - IIo turno**

**Esercizio 2**

a) Determinare e rappresentare graficamente tutte le soluzioni $z\in\mathbb{C}$ dell’equazione

$$
(z-i)^3+27=0.
$$

b) Rappresentare graficamente, nel piano complesso, gli insiemi

$$
A=\left\{z\in\mathbb{C}:1\leq |z|\leq 2,\ 0\leq \arg(z)\leq \frac{\pi}{3}\right\},
\qquad
B=\{z^2:z\in A\}.
$$

:::solution
**Esercizio 2**

a) Posto $w=z-i$ si ha che

$$
(z-i)^3+27=0 \quad\Longleftrightarrow\quad (z-i)^3=-27 \quad\Longleftrightarrow\quad w^3=-27.
$$

Le radici cubiche di $-27=27\cdot e^{i\pi}$ sono date da

$$
w_k=\sqrt[3]{27}\cdot e^{i(\pi/3+2k\pi/3)}=3\cdot e^{i(\pi/3+2k\pi/3)},\qquad k=0,1,2.
$$

Dunque sono

$$
w_0=3e^{i\pi/3}=\frac{3}{2}+i\frac{3\sqrt{3}}{2},\qquad
w_1=3e^{i\pi}=-3,\qquad
w_2=3e^{i5\pi/3}=\frac{3}{2}-i\frac{3\sqrt{3}}{2}.
$$

Pertanto le soluzioni dell’equazione $(z-i)^3+27=0$ sono i tre numeri $z_k=w_k+i$, con $k=0,1,2$, cioè

$$
z_0=\frac{3}{2}+i\left(1+\frac{3\sqrt{3}}{2}\right),\qquad
z_1=-3+i,\qquad
z_2=\frac{3}{2}+i\left(1-\frac{3\sqrt{3}}{2}\right).
$$

Essi sono rappresentati nel piano di Gauss dai tre punti della circonferenza di centro $(0,1)$ e raggio $3$.

b) Posto $z=x+iy$, si ha $1\leq |z|\leq 2 \Longleftrightarrow 1\leq x^2+y^2\leq 4$; dunque nel piano di Gauss soddisfano questa disequazione i punti della corona circolare compresa tra le due circonferenze di raggi $1$ e $2$.

I numeri complessi $z$ per cui $0\leq \arg(z)\leq \frac{\pi}{3}$ sono i punti dell’angolo compreso tra la semiretta dell’asse reale positivo e la semiretta che forma con esso un angolo di $\frac{\pi}{3}$. Dunque l’insieme $A$ è rappresentato dai punti della corona circolare compresa tra i raggi $1$ e $2$ e gli angoli $0$ e $\frac{\pi}{3}$.

Per capire chi è $B$, scriviamo i punti di $A$ in forma polare: posto $z=\rho e^{i\theta}$, si ha

$$
z\in A \quad\Longleftrightarrow\quad 1\leq \rho\leq 2,\quad 0\leq \theta\leq \frac{\pi}{3}.
$$

Poiché $z^2=\rho^2e^{2i\theta}$, si ha

$$
w\in B \quad\Longleftrightarrow\quad 1\leq |w|\leq 4,\quad 0\leq \arg(w)\leq \frac{2\pi}{3}.
$$

Dunque l’insieme $B$ è la parte della corona circolare compresa tra i raggi $1$ e $4$ e gli angoli $0$ e $\frac{2\pi}{3}$.
:::
:::

:::exercise{id="X2017-2" type="esame" chapter="9" difficulty="medio"}
## Domanda
**Esame del 3 luglio 2017**

**Esercizio 2.**

a) Enunciare il teorema della media integrale per le funzioni continue.

b) Si consideri la funzione

$$
f(x)=
\begin{cases}
1 & \text{se } x<0,\\
x & \text{se } x\geq 0.
\end{cases}
$$

Calcolare la media integrale della funzione sugli intervalli $\lbrack -1,1\rbrack $ e $\lbrack -1,\frac12\rbrack $, e dire se la media integrale è anche uno dei valori che la funzione assume in tali intervalli.

:::solution
**Esercizio 2.**

a) **Teorema (della media integrale per le funzioni continue)**

Siano $a,b\in\mathbb{R}$ con $a<b$ e sia $f:\lbrack a,b\rbrack \to\mathbb{R}$ una funzione continua. Allora esiste $x_0\in\lbrack a,b\rbrack $ tale che $f(x_0)=m(f;a,b)$, dove $m(f;a,b)$ è la media integrale di $f$ sull’intervallo $\lbrack a,b\rbrack $ definita da

$$
m(f;a,b)=\frac{1}{b-a}\int_a^b f(x)\,dx.
$$

b) La media integrale della funzione nell’intervallo $\lbrack -1,1\rbrack $ è

$$
m(f;-1,1)=\frac{1}{2}\int_{-1}^{1}f(x)\,dx
=\frac{1}{2}\left(\int_{-1}^{0}f(x)\,dx+\int_{0}^{1}f(x)\,dx\right)
=\frac{1}{2}\left(1+\frac{1}{2}\right)=\frac{3}{4}.
$$

Poiché $f\left(\frac{3}{4}\right)=\frac{3}{4}$ e $x=\frac{3}{4}\in\lbrack -1,1\rbrack $, possiamo concludere che la media integrale di $f$ su $\lbrack -1,1\rbrack $ è uno dei valori che la funzione assume su questo intervallo.

La media integrale della funzione nell’intervallo $\left\lbrack -1,\frac{1}{2}\right\rbrack $ è

$$
m\left(f;-1,\frac{1}{2}\right)=\frac{1}{\frac{3}{2}}\int_{-1}^{\frac{1}{2}}f(x)\,dx
=\frac{2}{3}\left(\int_{-1}^{0}f(x)\,dx+\int_{0}^{\frac{1}{2}}f(x)\,dx\right)
=\frac{2}{3}\left(1+\frac{1}{8}\right)=\frac{3}{4}.
$$

Poiché $f(x)=1$ per ogni $x\in\lbrack -1,0)$ e $0\leq f(x)\leq\frac{1}{2}$ per ogni $x\in\left\lbrack 0,\frac{1}{2}\right\rbrack $, possiamo concludere che non esiste alcun punto $x\in\left\lbrack -1,\frac{1}{2}\right\rbrack $ in cui $f$ assume il valore della sua media integrale su questo intervallo.
:::
:::

:::exercise{id="X2017-3" type="esame" chapter="5" difficulty="facile"}
## Domanda
**Esame del 19 settembre 2017**

**Esercizio 2**

(a) Supponiamo che una funzione prenda valori di segno opposto in due punti $a$ e $b$. Indicare condizioni sotto le quali il valore $0$ appartiene all’immagine della funzione.

(b) Si consideri la funzione

$$
g(x)=\operatorname{sgn}((x-1)(x+3)),\qquad \text{dove}\qquad
\operatorname{sgn}(t)=
\begin{cases}
1 & \text{se }t>0\\
0 & \text{se }t=0\\
-1 & \text{se }t<0.
\end{cases}
$$

Dire se la funzione $g$ si annulla sull’intervallo $\lbrack 0,4\rbrack $ e dire se, in tale intervallo, essa soddisfa le condizioni date al punto (a).

:::solution
**Esercizio 2**

a) Possiamo imporre la condizione che la funzione sia continua in $\lbrack a,b\rbrack $. Questa condizione, unita all’ipotesi che la funzione prenda valori di segno opposto in $a$ e in $b$, garantisce, per il Teorema degli zeri, che la funzione abbia almeno uno zero in $\lbrack a,b\rbrack $.

b) La funzione assegnata risulta essere uguale a:

$$
g(x)=
\begin{cases}
1 & \text{se }x<-3\\
0 & \text{se }x=-3\\
-1 & \text{se }-3<x<1\\
0 & \text{se }x=1\\
1 & \text{se }x>1.
\end{cases}
$$

Dunque la funzione è discontinua nell’intervallo $\lbrack 0,4\rbrack $, $g(0)=-1<0$, $g(4)=1>0$ e ha uno zero in $x=1$. Pertanto non soddisfa le condizioni del punto precedente.

Osserviamo che questo fatto non è sorprendente: il Teorema degli zeri fornisce una condizione sufficiente, ma non necessaria, all’esistenza degli zeri. Dunque esistono funzioni, come la $g$ assegnata in questo esercizio, che sono discontinue, hanno valori di segno opposto agli estremi dell’intervallo e hanno degli zeri.

Proponiamo un altro esempio, in cui $h$ è ovunque discontinua e ha infiniti zeri.

$$
h(x)=
\begin{cases}
-1 & \text{se }x\in(-\infty,0)\cap\mathbb{Q}\\
1 & \text{se }x\in[0,+\infty)\cap\mathbb{Q}\\
0 & \text{se }x\in\mathbb{R}\setminus\mathbb{Q}.
\end{cases}
$$

In questo caso $h$ è ovunque discontinua, $h(-1)=-1<0$ e $h(1)=1>0$. I punti irrazionali di $\lbrack -1,1\rbrack $ sono gli zeri (infiniti) di $h$.
:::
:::

:::exercise{id="X2018-1" type="esame" chapter="4" difficulty="medio"}
## Domanda
**Esame del 31 gennaio 2018 - Io turno**

**Esercizio 2, versione A**

(a) Enunciare un teorema del confronto per funzioni con limite finito.

(b) Mostrare che se $f(x)$ è una funzione tale che $\lim_{x\to+\infty} f(x)=0$ e $M(x)$ è la funzione mantissa, allora

$$\lim_{x\to+\infty} f(x)M(x)=0.$$

(c) Calcolare, se esistono, i limiti

$$\lim_{x\to-\infty}\frac{4^{-x}+1}{M(4^{-x})+1},\qquad
\lim_{x\to+\infty}\frac{4^{-x}+1}{M(4^{-x})+1}$$

dove $M(x)$ è la funzione mantissa.

:::solution
**Svolgimento**

(a) Si enunciano entrambi i teoremi del confronto nel caso di limiti finiti. È sufficiente enunciarne uno a scelta.

Primo teorema del confronto. Siano $f$ e $g$ due funzioni definite su un insieme $A\subseteq\mathbb{R}$ e sia $x_0$ un punto di accumulazione di $A$. Supponiamo che esista un intorno $I$ di $x_0$ tale che, per ogni $x\in I\cap A\setminus\{x_0\}$, $f(x)\leq g(x)$, e che esistano i limiti

$$\lim_{x\to x_0}f(x)=\ell\in\mathbb{R},\qquad \lim_{x\to x_0}g(x)=m\in\mathbb{R}.$$

Allora $\ell\leq m$.

Secondo teorema del confronto, o dei due carabinieri. Siano $f$, $g$ e $h$ tre funzioni definite su un insieme $A\subseteq\mathbb{R}$ e sia $x_0$ un punto di accumulazione di $A$. Supponiamo che esista un intorno $I$ di $x_0$ tale che, per ogni $x\in I\cap A\setminus\{x_0\}$, $f(x)\leq g(x)\leq h(x)$, e che

$$\lim_{x\to x_0}f(x)=\lim_{x\to x_0}h(x)=\ell\in\mathbb{R}.$$

Allora esiste il limite $\lim_{x\to x_0}g(x)=\ell$.

(b) Ricordiamo che $M(x)=x-\lbrack x\rbrack $ è una funzione periodica di periodo $1$, tale che $0\leq M(x)<1$ per ogni $x\in\mathbb{R}$. Quindi, per ogni $x\in\operatorname{dom}f$,

$$0\leq |f(x)M(x)|\leq |f(x)|.$$

Poiché $\lim_{x\to+\infty}f(x)=0$ se e solo se $\lim_{x\to+\infty}|f(x)|=0$, per il teorema dei due carabinieri segue che

$$\lim_{x\to+\infty}|f(x)M(x)|=0,$$

e dunque $\lim_{x\to+\infty}f(x)M(x)=0$.

Lo stesso risultato si dimostra anche dalla definizione di limite. Infatti, $\lim_{x\to+\infty}f(x)=0$ se, per ogni $\varepsilon>0$, esiste $a\in\mathbb{R}$ tale che, se $x\in(a,+\infty)\cap\operatorname{dom}f$, allora $|f(x)|<\varepsilon$. Per tali $x$ si ha

$$0\leq |f(x)M(x)|\leq |f(x)|<\varepsilon,$$

e quindi, per definizione di limite, $\lim_{x\to+\infty}f(x)M(x)=0$.

(c) Poiché $1\leq M(4^{-x})+1<2$, si ha $\frac{1}{2}<\frac{1}{M(4^{-x})+1}\leq 1$ per ogni $x\in\mathbb{R}$. Pertanto

$$\frac{1}{2}(4^{-x}+1)<\frac{4^{-x}+1}{M(4^{-x})+1}\leq 4^{-x}+1,\qquad \forall x\in\mathbb{R}.$$

Poiché $\lim_{x\to-\infty}\frac{1}{2}(4^{-x}+1)=+\infty$, per il teorema del confronto nel caso di limiti infiniti,

$$\lim_{x\to-\infty}\frac{4^{-x}+1}{M(4^{-x})+1}=+\infty.$$

Per $x\to+\infty$, poniamo $t=4^{-x}$; allora $t\to0^+$ e $M(t)\to0$. Ne segue che

$$\lim_{x\to+\infty}\frac{4^{-x}+1}{M(4^{-x})+1}=\lim_{t\to0^+}\frac{t+1}{M(t)+1}=1.$$
:::
:::

:::exercise{id="X2018-2" type="esame" chapter="4" difficulty="medio"}
## Domanda
**Esame del 31 gennaio 2018 - Io turno**

**Esercizio 2, versione B**

(a) Enunciare un teorema del confronto per funzioni con limite $+\infty$.

(b) Mostrare che se $f(x)$ è una funzione tale che $\lim_{x\to+\infty} f(x)=+\infty$ e $M(x)$ è la funzione mantissa, allora

$$
\lim_{x\to+\infty}(f(x)+M(x))=+\infty.
$$

(c) Calcolare, se esistono, i limiti

$$
\lim_{x\to-\infty}\frac{2^x+1}{M(2^x)+1},\qquad
\lim_{x\to+\infty}\frac{2^x+1}{M(2^x)+1}
$$

dove $M(x)$ è la funzione mantissa.

:::solution
**Esercizio 2, versione B**

(a) Siano $f$ e $g$ due funzioni definite su un insieme $A\subseteq\mathbb{R}$ e sia $x_0$ un punto di accumulazione di $A$, dove $x_0$ può essere un numero reale oppure $+\infty$. Supponiamo che esista un intorno $I$ di $x_0$ tale che, per ogni $x\in I\cap A\setminus\{x_0\}$, $g(x)\geq f(x)$, e che

$$
\lim_{x\to x_0}f(x)=+\infty.
$$

Allora

$$
\lim_{x\to x_0}g(x)=+\infty.
$$

In particolare, se $x_0=+\infty$, l'ipotesi significa che esiste $a\in\mathbb{R}$ tale che, per ogni $x\in(a,+\infty)\cap A$, si ha $g(x)\geq f(x)$, cioè la disuguaglianza vale per $x$ sufficientemente grande.

(b) Per ogni $x\in\operatorname{dom}f$, $f(x)+M(x)\geq f(x)$. Poiché

$$
\lim_{x\to+\infty}f(x)=+\infty,
$$

per il teorema enunciato in precedenza, applicato con $x_0=+\infty$, si ha anche

$$
\lim_{x\to+\infty}(f(x)+M(x))=+\infty.
$$

Lo stesso risultato si può dimostrare utilizzando la definizione di limite. Infatti, $\lim_{x\to+\infty}f(x)=+\infty$ se per ogni $k\in\mathbb{R}$ esiste $a\in\mathbb{R}$ tale che, se $x\in(a,+\infty)\cap\operatorname{dom}f$, allora $f(x)>k$. Dunque, per $x\in(a,+\infty)\cap\operatorname{dom}f$ si ha

$$
f(x)+M(x)\geq f(x)>k.
$$

Per definizione di limite,

$$
\lim_{x\to+\infty}(f(x)+M(x))=+\infty.
$$

(c) Ponendo $t=2^x$, si ha $t\to0^+$ quando $x\to-\infty$. Per $0<t<1$, la mantissa soddisfa $M(t)=t$, dunque il rapporto è identicamente uguale a $1$ in tale intervallo:

$$
\lim_{x\to-\infty}\frac{2^x+1}{M(2^x)+1}
=\lim_{t\to0^+}\frac{t+1}{M(t)+1}=1.
$$

Per il secondo limite, osserviamo che per ogni $x\in\mathbb{R}$ la mantissa soddisfa $0\leq M(2^x)<1$, dunque

$$
1\leq M(2^x)+1<2.
$$

Quando $x\to+\infty$ si ha $2^x\to+\infty$, quindi per $x$ sufficientemente grande $2^x+1>0$ e

$$
\frac{2^x+1}{M(2^x)+1}\geq\frac{2^x+1}{2}.
$$

Poiché $\lim_{x\to+\infty}\frac{2^x+1}{2}=+\infty$, per il teorema del confronto enunciato in (a), applicato con $x_0=+\infty$, si conclude che

$$
\lim_{x\to+\infty}\frac{2^x+1}{M(2^x)+1}=+\infty.
$$
:::
:::

:::exercise{id="X2018-3" type="esame" chapter="9" difficulty="medio"}
## Domanda
**Esame del 31 gennaio 2018 - IIo turno**

**Esercizio 2, versione A**

**a)** Enunciare il Teorema della Media Integrale.

**b)** Dato $a>0$, determinare $M\in\mathbb{R}$ tale che

$$
\int_0^a e^{-x^2}\,dx\leq M.
$$

**c)** Mostrare che la funzione integrale

$$
F(x)=\int_0^x e^{-t^2}\,dt
$$

ha asintoti orizzontali.

:::solution
**Esercizio 2, versione A**

**a)** Data una funzione integrabile $f$ su un intervallo chiuso $\lbrack a,b\rbrack $, con $a<b$, si dice *media integrale* di $f$ su $\lbrack a,b\rbrack $ il numero reale

$$
\frac{1}{b-a}\int_a^b f(x)\,dx.
$$

**Teorema della Media Integrale**

1. Sia $f$ una funzione integrabile su un intervallo chiuso $\lbrack a,b\rbrack $, con $a<b$; siano

$$
i=\inf\{f(x):x\in[a,b]\}\quad\text{e}\quad s=\sup\{f(x):x\in[a,b]\}.
$$

   Allora

$$
i\leq\frac{1}{b-a}\int_a^b f(x)\,dx\leq s.
$$

2. Sia $f$ una funzione continua su un intervallo chiuso $\lbrack a,b\rbrack $, con $a<b$. Allora esiste $c\in\lbrack a,b\rbrack $ tale che

$$
f(c)=\frac{1}{b-a}\int_a^b f(x)\,dx.
$$

**b)** Poiché $e^{-x^2}\leq 1$ per ogni $x\in\mathbb{R}$, per la monotonia dell’integrale si ha

$$
\int_0^a e^{-x^2}\,dx\leq\int_0^a 1\,dx=a.
$$

Possiamo quindi scegliere $M=a$.

**c)** La funzione integrale assegnata ha asintoti orizzontali se e solo se

$$
\lim_{x\to+\infty}\int_0^x e^{-t^2}\,dt
\quad\text{e}\quad
\lim_{x\to-\infty}\int_0^x e^{-t^2}\,dt=\lim_{x\to-\infty}\left(-\int_x^0 e^{-t^2}\,dt\right)
$$

esistono finiti, uguali a $\ell_1,\ell_2\in\mathbb{R}$ rispettivamente. In questo caso $F$ ha asintoto orizzontale destro di equazione $y=\ell_1$ e asintoto orizzontale sinistro di equazione $y=\ell_2$.

I due limiti esistono finiti se e soltanto se gli integrali impropri

$$
\int_0^{+\infty}e^{-x^2}\,dx
\quad\text{e}\quad
\int_{-\infty}^0e^{-x^2}\,dx
$$

convergono. Poiché $e^{-x^2}=o\left(\frac{1}{x^2}\right)$ per $x\to\pm\infty$, per il criterio del confronto asintotico i due integrali impropri convergono. Pertanto la funzione integrale assegnata ha asintoti orizzontali destro e sinistro.
:::
:::

:::exercise{id="X2018-4" type="esame" chapter="9" difficulty="medio"}
## Domanda
**Esame del 31 gennaio 2018 - IIo turno**

**Esercizio 2, versione B**

(a) Enunciare il Teorema Fondamentale del Calcolo Integrale.

(b) Dato $a>0$ determinare $M\in\mathbb{R}$ tale che

$$
\int_0^a e^{x^2}\,dx\leq M.
$$

(c) Mostrare che la funzione integrale

$$
F(x)=\int_0^x e^{t^2}\,dt
$$

non ha asintoti orizzontali.

:::solution
**Esercizio 2, versione B**

a) Teorema Fondamentale del Calcolo Integrale

Sia $f$ una funzione continua su un intervallo aperto $I$. Dati $x_0,x\in I$ consideriamo la funzione integrale

$$
F(x)=\int_{x_0}^x f(t)\,dt.
$$

Allora la funzione $F$ è derivabile su $I$ e $F'(x)=f(x)$, per ogni $x\in I$.

b) Poiché $f(x)=e^{x^2}$ è crescente su $\lbrack 0,a\rbrack $, $f(x)\leq f(a)=e^{a^2}$ per ogni $x\in\lbrack 0,a\rbrack $. Dunque, per la monotonia dell’integrale:

$$
\int_0^a e^{x^2}\,dx\leq\int_0^a e^{a^2}\,dx=ae^{a^2}.
$$

La disuguaglianza richiesta è verificata per ogni $M\geq ae^{a^2}$.

c) In questo caso

$$
\lim_{x\to+\infty}e^{x^2}=\lim_{x\to-\infty}e^{x^2}=+\infty.
$$

Dunque gli integrali impropri

$$
\int_0^{+\infty}e^{x^2}\,dx\qquad\text{e}\qquad\int_{-\infty}^0e^{x^2}\,dx
$$

divergono e la funzione integrale $\int_0^x e^{t^2}\,dt$ non ha asintoti orizzontali.
:::
:::

:::exercise{id="X2018-5" type="esame" chapter="2" difficulty="medio"}
## Domanda
**Esame del 18 settembre 2018**

**Esercizio 2**

(a) Dire che cosa si intende per rappresentazione algebrica e per rappresentazione trigonometrica (o polare) di un numero complesso.

(b) Determinare e rappresentare nel piano complesso di Argand-Gauss le radici cubiche complesse del numero $w=-1$.

(c) Risolvere in $\mathbb{C}$ l’equazione $\left(2z+\frac{1}{2}\right)^3=-1$.

:::solution
**Esercizio 2**

a) Posto formalmente $i=\sqrt{-1}$, un qualunque numero complesso viene rappresentato in forma algebrica come $z=a+ib$, con $a,b\in\mathbb{R}$.

Il numero complesso $z$ può essere identificato con la coppia $(a,b)\in\mathbb{R}^2$ e venire quindi rappresentato nel piano cartesiano, che in questo caso prende il nome di piano di Argand-Gauss. Si può quindi rappresentare $z$ in coordinate polari, ottenendo la cosiddetta rappresentazione trigonometrica di un numero complesso:

$$
z=\rho(\cos\vartheta+i\sin\vartheta)
$$

dove $\rho=\sqrt{a^2+b^2}$ è la distanza del punto $P(a,b)$ dall’origine. Se $z\neq 0$, ossia $P\neq O$, $\vartheta$ è l’angolo formato dalla semiretta $OP$ con il semiasse delle ascisse positive, individuato in modo univoco a meno di multipli interi di $2\pi$. Se invece $z=0$, si ha $\rho=0$ e $P$ coincide con l’origine: in questo caso la semiretta $OP$ non è definita e l’angolo $\vartheta$ può essere scelto in modo arbitrario.

b) In forma trigonometrica, si ha $w=-1=1(\cos\pi+i\sin\pi)$. Dette $z_i$, con $i=0,1,2$, le radici cubiche in campo complesso di $w$, si ha che:

$$
|z_i|=\sqrt[3]{|-1|}=1,\quad i=0,1,2
$$

$$
\vartheta_0=\frac{\pi}{3},\qquad \vartheta_1=\frac{\pi+2\pi}{3}=\pi,\qquad \vartheta_2=\frac{\pi+4\pi}{3}=\frac{5\pi}{3}
$$

Ne segue che:

$$
z_0=\cos\frac{\pi}{3}+i\sin\frac{\pi}{3}=\frac{1}{2}+\frac{\sqrt{3}}{2}i
$$

$$
z_1=\cos\pi+i\sin\pi=-1
$$

$$
z_2=\cos\frac{5\pi}{3}+i\sin\frac{5\pi}{3}=\frac{1}{2}-\frac{\sqrt{3}}{2}i
$$

Nel piano di Argand-Gauss i tre punti costituiscono i vertici di un triangolo equilatero, inscritto nella circonferenza di centro l’origine e raggio $1$.

c) Dobbiamo risolvere l’equazione

$$
\left(2z+\frac{1}{2}\right)^3=-1.
$$

Se poniamo $v=2z+\frac{1}{2}$, otteniamo l’equazione $v^3=-1$, le cui soluzioni sono le tre radici cubiche di $-1$, che abbiamo calcolato al punto precedente. Poiché $z=\frac{1}{2}\left(v-\frac{1}{2}\right)$, le tre soluzioni dell’equazione sono:

$$
z_0=\frac{1}{2}\left(\frac{1}{2}+\frac{\sqrt{3}}{2}i-\frac{1}{2}\right)=\frac{\sqrt{3}}{4}i
$$

$$
z_1=\frac{1}{2}\left(-1-\frac{1}{2}\right)=-\frac{3}{4}
$$

$$
z_2=\frac{1}{2}\left(\frac{1}{2}-\frac{\sqrt{3}}{2}i-\frac{1}{2}\right)=-\frac{\sqrt{3}}{4}i
$$
:::
:::

:::exercise{id="X2019-1" type="esame" chapter="1" difficulty="medio"}
## Domanda
**Esame del 30 gennaio 2019 - Io turno**

**Esercizio 2, versione A**

**a)** Sia l’insieme $A\subseteq\mathbb{R}$ non vuoto e inferiormente limitato. Dare la definizione di estremo inferiore di $A$.

**b)** Stabilire se la successione

$$a_n=\arctan\left(\frac{2n+3}{n+1}\right)\qquad(n\in\mathbb{N}=\{0,1,2,\dots\})$$

è monotona ed eventualmente di che tipo.

**c)** Dato l’insieme $A=\{a_n:n\in\mathbb{N}\}$, determinare (se esistono) minimo o estremo inferiore, massimo o estremo superiore di $A$, motivando la risposta.

:::solution
**Esercizio 2, versione A**

**a)** Sia $A\subseteq\mathbb{R}$ non vuoto e inferiormente limitato. Si dice estremo inferiore di $A$ il massimo dei minoranti di $A$, vale a dire quel numero reale $\ell$ tale che

- $\forall x\in A,\quad \ell\le x$
- $\forall\varepsilon>0,\quad \exists x\in A$ tale che $\ell\le x<\ell+\varepsilon$.

Se $A=\emptyset$, ogni numero reale è un minorante di $A$: non esistendo un massimo dei minoranti in $\mathbb{R}$, l’insieme vuoto non ha estremo inferiore reale (per convenzione si pone $\inf\emptyset=+\infty$).

**b)** Consideriamo la successione

$$a_n=\arctan\left(\frac{2n+3}{n+1}\right)\qquad(n\in\mathbb{N}=\{0,1,2,\dots\}).$$

Osserviamo che

$$b_n=\frac{2n+3}{n+1}=\frac{2(n+1)+1}{n+1}=2+\frac{1}{n+1}.$$

Poiché, per ogni $n\ge 0$

$$b_{n+1}=2+\frac{1}{n+2}<b_n=2+\frac{1}{n+1},$$

la successione $b_n$ è strettamente decrescente. La funzione $\arctan(\cdot)$ è strettamente crescente su $\mathbb{R}$, e dunque la successione $a_n$ è strettamente decrescente.

Per mostrare che la successione è decrescente, si può usare anche un altro metodo. Infatti, la successione $a_n$ risulta essere la restrizione ai numeri naturali della funzione

$$f(x)=\arctan\left(\frac{2x+3}{x+1}\right)$$

definita su $\mathbb{R}\setminus\{-1\}$. Poiché

$$f'(x)=\frac{1}{1+\left(\frac{2x+3}{x+1}\right)^2}\cdot\frac{-1}{(x+1)^2}<0\qquad\forall x\in(-1,+\infty),$$

$f$ è strettamente decrescente su $(-1,+\infty)$. Ne segue che anche la sua restrizione ai numeri naturali, vale a dire $f(n)=a_n$, è strettamente decrescente.

**c)** Consideriamo l’insieme $A=\{a_n:n\in\mathbb{N}\}$, non vuoto. Poiché la successione è strettamente decrescente, il massimo di $A$ risulta essere uguale al primo termine della successione. Con la convenzione $\mathbb{N}=\{0,1,2,\dots\}$ adottata in questo esercizio, il primo termine è $a_0$, dunque

$$\max A = a_0 = \arctan 3.$$

(Se invece si adottasse la convenzione $\mathbb{N}=\{1,2,3,\dots\}$, il primo termine sarebbe $a_1=\arctan\left(\frac{5}{2}\right)$, e sarebbe questo il valore del massimo.)

Il teorema sui limiti di funzioni monotone ci dice che, in entrambe le convenzioni,

$$\inf A=\lim_{n\to+\infty}a_n=\arctan 2\notin A.$$

Ne segue che $A$ ha massimo (uguale ad $\arctan 3$, oppure ad $\arctan\left(\frac{5}{2}\right)$ secondo la convenzione scelta per $\mathbb{N}$) ed ha estremo inferiore (ma non minimo) uguale a $\arctan 2$.
:::
:::

:::exercise{id="X2019-2" type="esame" chapter="9" difficulty="medio"}
## Domanda
**Esame del 30 gennaio 2019 - IIo turno**

**Esercizio 2, versione A**

(a) Enunciare la proprietà di additività dell’integrale rispetto al dominio di integrazione.

(b) Detta $f\colon\lbrack -3,3\rbrack \to\mathbb{R}$ una funzione continua e pari, usare la proprietà di additività dell’integrale rispetto al dominio di integrazione per dimostrare che

$$
\int_{-3}^{3} f(x)\sin x\,dx=0.
$$

(c) Sia $g\colon\lbrack -3,3\rbrack \to\mathbb{R}$ continua e tale che $g(x)\ge 0$ per ogni $x\in\lbrack -3,3\rbrack $ e $g(0)>0$.

Dimostrare che

$$
\int_{-3}^{3} g(x)\,dx>0.
$$

:::solution
**Esercizio 2, versione A**

**a)** Sia data una funzione integrabile $f$ su un intervallo chiuso e limitato $I$. Per ogni $a,b,c\in I$, è vero che

$$
\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx.
$$

**b)** Sia $f$ una funzione continua e pari su $\lbrack -3,3\rbrack $. Allora la funzione $g(x)=f(x)\sin x$ è dispari; infatti $g(-x)=f(-x)\sin(-x)=-f(x)\sin x$. Consideriamo ora

$$
\int_{-3}^{3}g(x)\,dx=\int_{-3}^{0}g(x)\,dx+\int_{0}^{3}g(x)\,dx=I_1+I_2.
$$

Poniamo $t=-x$; abbiamo che

$$
\begin{aligned}
I_1&=\int_{-3}^{0}g(x)\,dx=\int_{3}^{0}[-g(-t)]\,dt=\int_{3}^{0}g(t)\,dt\\
&=-\int_{0}^{3}g(t)\,dt=-I_2.
\end{aligned}
$$

e dunque

$$
\int_{-3}^{3}f(x)\sin x\,dx=\int_{-3}^{3}g(x)\,dx=-I_2+I_2=0.
$$

**c)** Per ipotesi, $g$ è continua e non negativa su $\lbrack -3,3\rbrack $. Inoltre $g(0)>0$. Per continuità in $0$, esiste $\delta\in(0,3)$ tale che $g(x)>\frac{g(0)}{2}$ per ogni $x\in(-\delta,\delta)$. Per continuità, la disuguaglianza vale anche agli estremi: $g(-\delta)\ge\frac{g(0)}{2}$ e $g(\delta)\ge\frac{g(0)}{2}$. Pertanto $g(x)\ge\frac{g(0)}{2}$ per ogni $x\in\lbrack -\delta,\delta\rbrack $.

Le proprietà degli integrali ci garantiscono che:

- Se $g(x)\ge 0$ su $\lbrack a,b\rbrack $, allora $\displaystyle\int_a^b g(x)\,dx\ge 0$.
- Se $g(x)\ge\frac{g(0)}{2}$ su $\lbrack -\delta,\delta\rbrack $, allora

$$
\int_{-\delta}^{\delta}g(x)\,dx\ge\int_{-\delta}^{\delta}\frac{g(0)}{2}\,dx=2\delta\cdot\frac{g(0)}{2}=\delta g(0).
$$

Utilizzando poi la proprietà di additività rispetto al dominio, si ha che

$$
\begin{aligned}
\int_{-3}^{3}g(x)\,dx
&=\int_{-3}^{-\delta}g(x)\,dx+\int_{-\delta}^{\delta}g(x)\,dx+\int_{\delta}^{3}g(x)\,dx\\
&\ge 0+\delta g(0)+0\ge\delta g(0)>0.
\end{aligned}
$$
:::
:::

:::exercise{id="X2019-3" type="esame" chapter="9" difficulty="medio"}
## Domanda
**Esame del 28 giugno 2019**

**Esercizio 2**

(a) **Versione A.** Dare la definizione di primitiva di una funzione $f$ su un intervallo aperto $I\subseteq\mathbb{R}$.

**Versione B.** Dare la definizione di funzione continua in un punto $x_0\in\mathbb{R}$ e in un intervallo $I\subseteq\mathbb{R}$.

(b) **Versione A.** È vero che, se $f(x)$ è continua su $I$, allora la funzione $\dfrac{f(x)}{1+(f(x))^2}$ ammette almeno una primitiva su $I$? Motivare la risposta.

**Versione B.** È vero che, se $f(x)$ è continua su $I$, allora la funzione $\log 3+(f(x))^2$ ammette almeno una primitiva su $I$? Motivare la risposta.

(c) Determinare tutte le primitive della funzione $f(x)=x|x-1|$ su $\mathbb{R}$.

:::solution
**Esercizio 2**

(a) **Versione A.**

Si dice primitiva di $f$ su $I$ (se esiste) una funzione $F$ derivabile su $I$ e tale che $F'(x)=f(x)$, per ogni $x\in I$.

**Versione B.**

Si dice che una funzione $f$ è continua in $x_0\in\operatorname{dom}f$ se:

$$
\forall\varepsilon>0\;\exists\delta>0\quad \forall x\in\operatorname{dom}f,\ |x-x_0|<\delta\Longrightarrow |f(x)-f(x_0)|<\varepsilon.
$$

Equivalentemente, indicato con $I_\varepsilon(y)$ l'intorno di $y$ di raggio $\varepsilon$:

$$
\forall I_\varepsilon(f(x_0))\;\exists I_\delta(x_0)\quad x\in I_\delta(x_0)\cap\operatorname{dom}f\Longrightarrow f(x)\in I_\varepsilon(f(x_0)).
$$

Inoltre, $f$ è continua su $I$ se è continua per ogni $x\in I$.

(b) **Versione A.** Dal Teorema fondamentale del calcolo integrale discende che tutte le funzioni continue su un intervallo aperto $I$ hanno primitive su $I$.

Osserviamo che $1+(f(x))^2>0$ e continua per ogni $x\in I$; dunque anche $\dfrac{f(x)}{1+(f(x))^2}$ è continua su $I$, perché è quoziente di funzioni continue, con il denominatore diverso da $0$. Dunque la funzione ammette primitive su $I$.

**Versione B.** Osserviamo che $\log 3$ è una costante e che $(f(x))^2$ è continua su $I$, in quanto prodotto di funzioni continue. La somma $\log 3+(f(x))^2$ è dunque continua su $I$, essendo somma di una costante e di una funzione continua, e pertanto ammette primitive su $I$.

(c) La funzione

$$
f(x)=x|x-1|=\begin{cases}
x^2-x & x\geq 1,\\
-x^2+x & x<1.
\end{cases}
$$

Per determinarne le primitive, calcoliamo prima di tutto le primitive $F_1$ definite per $x<1$ e le $F_2$ definite per $x\geq 1$. Abbiamo che:

$$
\begin{aligned}
F_1(x)&=-\frac{1}{3}x^3+\frac{1}{2}x^2+k_1 && x<1,\\
F_2(x)&=\frac{1}{3}x^3-\frac{1}{2}x^2+k_2 && x\geq 1.
\end{aligned}
$$

E inoltre:

$$
\begin{aligned}
\lim_{x\to 1^-}F_1(x)&=-\frac{1}{3}+\frac{1}{2}+k_1=\frac{1}{6}+k_1,\\
\lim_{x\to 1^+}F_2(x)&=\frac{1}{3}-\frac{1}{2}+k_2=-\frac{1}{6}+k_2.
\end{aligned}
$$

Per avere funzioni continue anche in $x=1$ poniamo $F(1)=C$, cioè

$$
\frac{1}{6}+k_1=C=-\frac{1}{6}+k_2,
$$

da cui $k_1=C-\dfrac{1}{6}$ e $k_2=C+\dfrac{1}{6}$. Otteniamo così, al variare di $C\in\mathbb{R}$, le funzioni continue:

$$
F(x)=\begin{cases}
\frac{1}{3}x^3-\frac{1}{2}x^2+C+\frac{1}{6} & x\geq 1,\\
-\frac{1}{3}x^3+\frac{1}{2}x^2+C-\frac{1}{6} & x<1.
\end{cases}
$$

Osserviamo che, per ogni $C\in\mathbb{R}$, $F'(x)=f(x)$ per ogni $x\ne 1$; inoltre $F$ è continua in $x=1$ e

$$
\lim_{x\to 1^-}F'(x)=\lim_{x\to 1^+}F'(x)=f(1)=0.
$$

Il Teorema del tappabuchi ci permette di concludere che $F$ è derivabile anche in $x=1$ e $F'(1)=0$. Abbiamo così che le funzioni $F(x)$, al variare di $C\in\mathbb{R}$, costituiscono l'insieme delle primitive di $f$ su $\mathbb{R}$.‌
:::
:::

:::exercise{id="X2019-4" type="esame" chapter="10" difficulty="medio"}
## Domanda
**Esame del 10 settembre 2019**

**Esercizio 2**

(a) Calcolare il valore dell’integrale improprio

$$
\int_0^{+\infty}\frac{3}{3e^3+e^{t+3}}\,dt.
$$

(b) Si consideri la funzione

$$
F(x)=\int_0^x\frac{3}{3e^3+e^{t+3}}\,dt,\qquad x\geq 0.
$$

Mostrare che la funzione $F(x^5)$ è crescente sull’intervallo $\lbrack 0,+\infty)$.

(c) Determinare l’estremo superiore della funzione $F(x^5)$ sull’intervallo $\lbrack 0,+\infty)$.

:::solution
**Esercizio 2**

a) Osserviamo che la funzione integranda

$$
f(t)=\frac{3}{3e^3+e^{t+3}}
$$

è continua e strettamente positiva su $\mathbb{R}$. Inoltre, poiché $f(t)\sim 3e^{-(t+3)}$ per $t\to+\infty$, i teoremi del confronto asintotico ci permettono di concludere che l’integrale improprio converge a un valore positivo.

Per calcolare il valore dell’integrale improprio, ricordiamo che

$$
\int_0^{+\infty} f(t)\,dt=\lim_{z\to+\infty}\int_0^z\frac{3}{3e^3+e^{t+3}}\,dt.
$$

Per calcolare quell’integrale definito, possiamo procedere in due modi.

**Metodo 1**

$$
\int_0^z\frac{3}{3e^3+e^{t+3}}\,dt=\frac{3}{e^3}\int_0^z\frac{1}{3+e^t}\,dt.
$$

Ponendo $s=e^t$, abbiamo che $ds=e^t\,dt$, da cui segue che $dt=\frac{1}{s}\,ds$. Quindi

$$
\int_0^z\frac{3}{3e^3+e^{t+3}}\,dt=\frac{3}{e^3}\int_1^{e^z}\frac{1}{s}\cdot\frac{1}{3+s}\,ds.
$$

Utilizzando il metodo dei fratti semplici, vediamo che

$$
\frac{1}{s}\cdot\frac{1}{3+s}=\frac{1}{3}\left[\frac{1}{s}-\frac{1}{3+s}\right].
$$

Dunque:

$$
\begin{aligned}
\int_0^z\frac{3}{3e^3+e^{t+3}}\,dt
&=\frac{3}{e^3}\int_1^{e^z}\frac{1}{s}\cdot\frac{1}{3+s}\,ds\\
&=\frac{3}{e^3}\int_1^{e^z}\frac{1}{3}\left[\frac{1}{s}-\frac{1}{3+s}\right]ds\\
&=\frac{1}{e^3}\left[\log\frac{s}{3+s}\right]_1^{e^z}\\
&=\frac{1}{e^3}\left(\log\frac{e^z}{3+e^z}-\log\frac{1}{4}\right).
\end{aligned}
$$

Quindi:

$$
\lim_{z\to+\infty}\int_0^z\frac{3}{3e^3+e^{t+3}}\,dt=e^{-3}\log 4.
$$

**Metodo 2**

$$
\begin{aligned}
\int_0^z\frac{3}{3e^3+e^{t+3}}\,dt
&=\frac{1}{e^3}\int_0^z\frac{3}{3+e^t}\,dt\\
&=\frac{1}{e^3}\int_0^z\left(1-\frac{e^t}{3+e^t}\right)dt\\
&=\frac{1}{e^3}\left[t-\log(3+e^t)\right]_0^z\\
&=\frac{1}{e^3}\left[z-\log(3+e^z)+\log 4\right]\\
&=\frac{1}{e^3}\left[\log 4-\log(3e^{-z}+1)\right].
\end{aligned}
$$

Ne segue che

$$
\int_0^{+\infty}\frac{3}{3e^3+e^{t+3}}\,dt=e^{-3}\log 4.
$$

b) Poiché $f(t)>0$ per ogni $t\geq 0$, la funzione integrale $F(x)=\int_0^x f(t)\,dt$ è strettamente crescente su $\lbrack 0,+\infty)$. La funzione $g(x)=x^5$ è anch’essa strettamente crescente su $\lbrack 0,+\infty)$; dunque $F(x^5)$ è strettamente crescente su $\lbrack 0,+\infty)$ perché composizione di funzioni strettamente crescenti.

Possiamo ottenere lo stesso risultato applicando il teorema fondamentale del calcolo integrale, che garantisce, dato che la funzione integranda è continua, che $F$ è derivabile per $x>0$ e che $F'(x)=f(x)$. Allora, per $x>0$,

$$
\frac{d}{dx}F(x^5)=F'(x^5)(x^5)'=f(x^5)\cdot 5x^4>0.
$$

Ne segue che $F(x^5)$ è crescente su $\lbrack 0,+\infty)$.

c) Applicando il teorema sui limiti di funzioni monotone alla funzione strettamente crescente $F(x^5)$ otteniamo che

$$
\sup_{x\in[0,+\infty)}F(x^5)=\lim_{x\to+\infty}F(x^5)=\lim_{z\to+\infty}F(z)=\int_0^{+\infty}f(t)\,dt=e^{-3}\log 4.
$$
:::
:::

:::exercise{id="X2020-1" type="esame" chapter="1" difficulty="medio"}
## Domanda
**Esame del 29 gennaio 2020 - Io turno**

**Esercizio 2, versione A**

(a) Fornire la definizione di estremo inferiore di un sottoinsieme $A\subseteq\mathbb{R}$ ed enunciare la proprietà di completezza di $\mathbb{R}$.

(b) Dato l'insieme

$$
A=\left\{\frac{4}{n}-2:\ n\in\mathbb{Z},\ n\ne 0\right\}\cup\{10\},
$$

determinare (se esistono e motivando) $\sup A$, $\inf A$, $\max A$, $\min A$.

(c) Determinare (se esistono e motivando) $\sup g(A)$, $\inf g(A)$, $\max g(A)$, $\min g(A)$, dove $A$ è l'insieme del punto precedente e $g(x)=e^{|x|}$.

:::solution
**Soluzione**

(a) Si dice estremo inferiore di un insieme non vuoto e inferiormente limitato $A$ il massimo dei minoranti di $A$, vale a dire quel numero reale $\ell$ tale che

- $\forall x\in A$, $\ell\le x$;
- $\forall\varepsilon>0$, esiste $x\in A$ tale che $\ell\le x<\ell+\varepsilon$.

Proprietà di completezza di $\mathbb{R}$. Ogni sottoinsieme non vuoto e limitato di $\mathbb{R}$ ha estremo inferiore e estremo superiore, entrambi appartenenti a $\mathbb{R}$.

In alternativa, per ogni coppia di sottoinsiemi $A,B$ di $\mathbb{R}$ che soddisfano le seguenti proprietà:

- $A\ne\varnothing$, $B\ne\varnothing$;
- $A\cup B=\mathbb{R}$;
- $\forall a\in A$, $\forall b\in B$, $a\le b$;

esiste $z\in\mathbb{R}$ tale che, per ogni $a\in A$ e $b\in B$, $a\le z\le b$.

(b) Consideriamo l'insieme $\left\{\frac{4}{n}-2:n\in\mathbb{Z},\ n\ne 0\right\}$. È facile osservare che

$$
\begin{aligned}
&\forall n\le -1:\quad -6=\frac{4}{-1}-2\le \frac{4}{n}-2<-2,\\
&\forall n\ge 1:\quad -2<\frac{4}{n}-2\le \frac{4}{1}-2=2<10.
\end{aligned}
$$

Dunque l'insieme $A$ è limitato superiormente e inferiormente, e

- $\sup A=\max A=10$;
- $\inf A=\min A=-6$.

(c) La funzione $g(x)=e^{|x|}$ è pari ed è crescente per $x\ge 0$. Da quanto detto nel punto (b), sappiamo che, se $x\in A$, allora $0\le |x|\le 10$, e che $0,10\in A$. Dunque, poiché $g$ è crescente per $x\ge 0$, abbiamo che

- $\sup\{e^{|x|}:x\in A\}=\max\{e^{|x|}:x\in A\}=e^{10}$;
- $\inf\{e^{|x|}:x\in A\}=\min\{e^{|x|}:x\in A\}=e^0=1$.
:::
:::

:::exercise{id="X2020-2" type="esame" chapter="1" difficulty="medio"}
## Domanda
**Esame del 29 gennaio 2020 - Io turno**

**Esercizio 2, versione C**

(a) Fornire la definizione di estremo inferiore di un sottoinsieme $A\subseteq\mathbb{R}$ ed enunciare la proprietà di completezza di $\mathbb{R}$.

(b) Dato l'insieme

$$
A=\left\{\frac{4}{n}: n\in\mathbb{Z},\ n\ne 0\right\}\cup\{10\},
$$

determinare (se esistono e motivando) $\sup A$, $\inf A$, $\max A$, $\min A$.

(c) Determinare (se esistono e motivando) $\sup g(A)$, $\inf g(A)$, $\max g(A)$, $\min g(A)$, dove $A$ è l'insieme del punto precedente e $g(x)=e^{|x|}$.

:::solution
**Esercizio 2, versione C**

(a) Sia $A\subseteq\mathbb{R}$ non vuoto. Un numero $m\in\mathbb{R}$ si dice **estremo inferiore** di $A$, e si scrive $m=\inf A$, se:

- $m$ è un minorante di $A$, cioè $m\le a$ per ogni $a\in A$;
- $m$ è il più grande dei minoranti, cioè per ogni altro minorante $m'$ di $A$ si ha $m'\le m$.

**Proprietà di completezza di $\mathbb{R}$.** Ogni sottoinsieme non vuoto di $\mathbb{R}$ limitato superiormente possiede estremo superiore in $\mathbb{R}$. Equivalentemente, ogni sottoinsieme non vuoto di $\mathbb{R}$ limitato inferiormente possiede estremo inferiore in $\mathbb{R}$.

(b) Consideriamo l'insieme

$$
A=\left\{\frac{4}{n}: n\in\mathbb{Z},\ n\ne 0\right\}\cup\{10\}.
$$

Per ogni $n\le -1$, si ha $-4\le \frac{4}{n}<0$. Per ogni $n\ge 1$, si ha $0<\frac{4}{n}\le 4$. Inoltre, $4<10$. Dunque l'insieme $A$ è limitato superiormente e inferiormente, e

- $\sup A=\max A=10$;
- $\inf A=\min A=-4$.

(c) La funzione $g(x)=e^{|x|}$ è pari ed è crescente per $x\ge 0$. Da quanto detto al punto (b), sappiamo che, se $x\in A$, allora $0<|x|\le 10$, con $0\notin A$ e $10\in A$. Inoltre, $\inf\{|x|:x\in A\}=0$. Dunque, poiché $g$ è crescente per $x\ge 0$, abbiamo che

- $\sup\{e^{|x|}:x\in A\}=\max\{e^{|x|}:x\in A\}=e^{10}$;
- $\inf\{e^{|x|}:x\in A\}=1$.

Per verificare quest'ultimo valore, osserviamo che per ogni $n\ge 1$ si ha $\frac{4}{n}\in A$, e per la continuità della funzione esponenziale

$$
\lim_{n\to +\infty} e^{4/n} = e^{0} = 1.
$$

D'altra parte, per ogni $x\in A$ si ha $|x|>0$ e quindi $g(x)=e^{|x|}>1$. Pertanto $1$ è un minorante di $g(A)$ che viene approssimato arbitrariamente bene dai valori $e^{4/n}$, e dunque $\inf g(A)=1$. Poiché nessun elemento di $g(A)$ è uguale a $1$, l'insieme $g(A)$ non ha minimo.
:::
:::

:::exercise{id="X2020-3" type="esame" chapter="5" difficulty="facile"}
## Domanda
**Esame del 11 febbraio 2020 - IIo turno**

Sia $f:\mathbb{R}\to\mathbb{R}$ una funzione e sia $a\in\mathbb{R}$.

(a) Dare la definizione di continuità per la funzione $f$ nel punto $a$.

Si consideri la proprietà:

$$
\text{(P)}\qquad (x-a)^3 f(x)>0\ \text{per }x\ne a.
$$

(b) Dare un esempio di funzione $f$ che sia continua in $\mathbb{R}$ e che soddisfi la proprietà (P).

(c) Dimostrare che se $f:\mathbb{R}\to\mathbb{R}$ è continua in $a$ e soddisfa la proprietà (P), allora $f(a)=0$.

:::solution
(a) Si dice che una funzione $f:\mathbb{R}\to\mathbb{R}$ è continua in $a\in\mathbb{R}$ se

$$
\forall\varepsilon>0\ \exists\delta>0\quad |x-a|<\delta\ \Longrightarrow\ |f(x)-f(a)|<\varepsilon.
$$

Se indichiamo con $B_\rho(b)$ un intorno di $b$ di raggio $\rho$, la stessa definizione può essere formulata così:

$$
\forall B_\varepsilon(f(a))\ \exists B_\delta(a)\quad x\in B_\delta(a)\ \Longrightarrow\ f(x)\in B_\varepsilon(f(a)).
$$

(b) Per esempio, la funzione $f(x)=x-a$ è continua in $\mathbb{R}$ ed è tale che

$$
f(x)(x-a)^3=(x-a)^4>0
$$

per ogni $x\ne a$.

(c) Osserviamo che $(x-a)^3<0$ per ogni $x<a$ e $(x-a)^3>0$ per ogni $x>a$. Se $f(x)(x-a)^3>0$ per $x\ne a$, necessariamente $f(x)<0$ per ogni $x<a$ e $f(x)>0$ per ogni $x>a$.

Poiché $f$ è continua in $a$, si ha $\lim_{x\to a}f(x)=f(a)$. Per il teorema della permanenza del segno,

$$
\lim_{x\to a^-}f(x)=f(a)\leq 0,\qquad
\lim_{x\to a^+}f(x)=f(a)\geq 0.
$$

Ne segue che $f(a)=0$.
:::
:::

:::exercise{id="X2020-4" type="esame" chapter="5" difficulty="difficile"}
## Domanda
**Esame del 11 febbraio 2020 - Io turno**

**Esercizio 2, Versione A.**

(a) Enunciare il teorema di esistenza degli zeri.

(b) Dimostrare che la funzione $f(x)=e^x+x^3$ si annulla in un unico punto $x_0\in\mathbb{R}$.

(c) Studiare l’invertibilità della funzione $g(x)=\log f(x)$; determinare il più grande intervallo in cui la funzione $g$ risulta invertibile, specificando il dominio e l’immagine della funzione inversa.

:::solution
**Esercizio 2, versione A.**

a) *Teorema di esistenza degli zeri.*

Sia $f$ una funzione continua sull’intervallo chiuso $\lbrack a,b\rbrack $, tale che $f(a)\cdot f(b)<0$.

Allora $f$ ha almeno uno zero in $(a,b)$, vale a dire che esiste $c\in(a,b)$ tale che $f(c)=0$.

b) La funzione $f(x)=e^x+x^3$ è continua e strettamente crescente (perché somma di funzioni strettamente crescenti) su $\mathbb{R}$.

**Metodo 1.** Poiché $\lim_{x\to-\infty}f(x)=-\infty$ e $\lim_{x\to+\infty}f(x)=+\infty$, per un corollario del Teorema di esistenza degli zeri $f$ ha un unico zero $c\in\mathbb{R}$.

**Metodo 2.** Osserviamo che $f(0)=e^0=1$ e $f(-2)=e^{-2}-8<0$. Il Teorema degli zeri ci permette di concludere che $f$ ha un unico zero $c$, che appartiene a $(-2,0)$.

c) La funzione $g(x)=\log(e^x+x^3)$ è definita in $(c,+\infty)$, dove $f(x)>0$. Inoltre, $g$ è continua e strettamente crescente, perché composizione di funzioni continue e strettamente crescenti. Ne segue che $g:(c,+\infty)\to\operatorname{Im}g$ è invertibile.

Dato che $\lim_{x\to c}g(x)=-\infty$ e $\lim_{x\to+\infty}g(x)=+\infty$, dal Teorema dei valori intermedi segue che $\operatorname{Im}g=(-\infty,+\infty)$.

Dunque la funzione inversa $g^{-1}$ ha $\operatorname{dom}g^{-1}=\operatorname{Im}g=\mathbb{R}$ e $\operatorname{Im}g^{-1}=\operatorname{dom}g=(c,+\infty)$.
:::
:::

:::exercise{id="X2020-5" type="esame" chapter="2" difficulty="facile"}
## Domanda
**Esame del 23 giugno 2020**

**Esercizio 2.**

(a) Dato il numero complesso $z=2+3i$, rappresentare nel piano complesso l’insieme dei numeri complessi $w$ tali che $\operatorname{Im}(z\overline{w})=0$.

(b) Ripetere l’esercizio (a) con $z=a+ib\ne 0$ ($a,b$ sono parametri reali). Che differenza c’è tra i tre casi $a=0$, $b=0$, e $a,b$ entrambi non nulli?

(c) Dato $\alpha\ne 0$ parametro reale, rappresentare in forma esponenziale il numero complesso $z=\alpha+i|\alpha|$.

:::solution
**Esercizio 2.**

(a) Dato $z=2+3i$, dobbiamo determinare l’insieme dei numeri complessi $w=x+iy$ tali che $\operatorname{Im}(z\overline{w})=0$. Dato che

$$
z\overline{w}=(2+3i)(x-iy)=(2x+3y)+i(3x-2y),
$$

$$
\operatorname{Im}(z\overline{w})=3x-2y=0\quad\Longleftrightarrow\quad 2y=3x.
$$

Dunque l’insieme dei punti $w=x+iy$ che soddisfano l’equazione è rappresentato nel piano complesso da una retta passante per l’origine, di equazione $2y=3x$.

(b) Se consideriamo un qualunque numero complesso $z=a+ib\ne 0$, otteniamo che

$$
\operatorname{Im}(z\overline{w})=bx-ay=0\quad\Longleftrightarrow\quad ay=bx
$$

e dunque

- Se $a=0$, soddisfano l’equazione tutti i numeri complessi tali che $x=\operatorname{Re}w=0$, e dunque tutti i punti dell’asse immaginario.
- Se $b=0$, soddisfano l’equazione tutti i numeri complessi tali che $y=\operatorname{Im}w=0$, e dunque tutti i punti dell’asse reale.
- Se $a\ne 0$ e $b\ne 0$, si ottengono tutti i punti della retta di equazione $y=\frac{b}{a}x$.

(c) Ricordiamo che dato un numero complesso si ha che $z=x+iy=\rho(\cos\vartheta+i\sin\vartheta)=\rho e^{i\vartheta}$, dove $\rho=\sqrt{x^2+y^2}$. Nel nostro caso, considerato un numero reale $\alpha\ne 0$ e $z=\alpha+i|\alpha|$, abbiamo

$$
\begin{aligned}
\rho&=\sqrt{\alpha^2+|\alpha|^2}=|\alpha|\sqrt{2},\\
\cos\vartheta&=\frac{\alpha}{|\alpha|\sqrt{2}}=\frac{\operatorname{sgn}(\alpha)}{\sqrt{2}},\\
\sin\vartheta&=\frac{|\alpha|}{|\alpha|\sqrt{2}}=\frac{1}{\sqrt{2}}.
\end{aligned}
$$

Se ne ricava che:

- Se $\alpha>0$, $\vartheta=\frac{\pi}{4}$ e $z=|\alpha|\sqrt{2}\,e^{i\pi/4}$.
- Se $\alpha<0$, $\vartheta=\frac{3\pi}{4}$ e $z=|\alpha|\sqrt{2}\,e^{i3\pi/4}$.
:::
:::

:::exercise{id="X2020-6" type="esame" chapter="6" difficulty="medio"}
## Domanda
**Esame del 15 settembre 2020**

**Esercizio 2**

(a) Siano $f$, $g$ e $h$ funzioni definite in un intorno di $x_0 \in \mathbb{R} \cup \{-\infty, +\infty\}$ privato eventualmente di $x_0$. Dare le definizioni di $f \sim h$ e $g = o(h)$ per $x \to x_0$.

(b) Calcolare la parte principale della funzione

$$
f(x) = e^{\sqrt{1+x}} - e
$$

per $x \to 0$, rispetto all’infinitesimo campione $x$.

(c) Data la funzione $f(x) = e^{\sqrt{1+x}} - e$ discussa al punto (b) del presente esercizio, discutere il comportamento dell’integrale

$$
\int_0^1 \frac{f(x)}{x^\alpha}\,dx
$$

al variare del parametro $\alpha \in \mathbb{R}$.

:::solution
**Esercizio 2**

(a) Posto che esista un intorno $B(x_0)$ di $x_0$ tale che per ogni $x \in B(x_0) \setminus \{x_0\}$, $h(x) \ne 0$, si dice che:

- $f \sim h$ per $x \to x_0$ se

$$
\lim_{x\to x_0}\frac{f(x)}{h(x)}=1.
$$

- $g=o(h)$ per $x \to x_0$ se

$$
\lim_{x\to x_0}\frac{g(x)}{h(x)}=0.
$$

(b) Si ha

$$
f(x)=e^{\sqrt{1+x}}-e=e\left(e^{\sqrt{1+x}-1}-1\right),
$$

con $t=\sqrt{1+x}-1 \to 0$ per $x \to 0$. Ricordando che

$$
e^t-1\sim t \quad\text{per }t\to 0,
$$

e che

$$
\sqrt{1+x}-1\sim \frac{1}{2}x \quad\text{per }x\to 0,
$$

si ottiene

$$
f(x)=e\left(e^{\sqrt{1+x}-1}-1\right)\sim e\left(\sqrt{1+x}-1\right)\sim \frac{e}{2}x \quad\text{per }x\to 0.
$$

Ne segue che

$$
f(x)=\frac{e}{2}x+o(x) \quad\text{per }x\to 0,
$$

e che la parte principale di $f$ rispetto a $x$, per $x \to 0$, è $\frac{e}{2}x$.

(c) La funzione integranda $\frac{f(x)}{x^\alpha}$ non è definita in $x=0$, dunque l’integrale va in ogni caso interpretato a priori come improprio in tale punto. Se esiste finito

$$
\lim_{x\to 0}\frac{f(x)}{x^\alpha},
$$

la funzione $\frac{f(x)}{x^\alpha}$ si prolunga per continuità in $x=0$, e l’integrale improprio converge: il suo valore coincide con quello dell’integrale ordinario (definito) del prolungamento continuo su $\lbrack 0,1\rbrack $. Se invece

$$
\lim_{x\to 0}\left|\frac{f(x)}{x^\alpha}\right|=+\infty,
$$

l’integrale è propriamente improprio e occorre studiarne la convergenza confrontando l’ordine di infinito dell’integranda con quello del criterio di convergenza per gli integrali impropri in un punto.

Dal punto (b) sappiamo che $f$ è un infinitesimo di ordine $1$ rispetto a $x$, per $x \to 0$, cioè $\frac{f(x)}{x^\alpha}\sim \frac{e}{2}x^{1-\alpha}$. Dunque:

- Se $\alpha \leq 1$, si ha $\lim_{x\to 0}\frac{f(x)}{x^\alpha}\in\mathbb{R}$, l’integranda si prolunga con continuità in $x=0$ e l’integrale (improprio per definizione, ma di fatto calcolabile come integrale ordinario del prolungamento continuo) converge, con lo stesso valore dell’integrale definito del prolungamento su $\lbrack 0,1\rbrack $.
- Se $1<\alpha<2$, l’integranda è un infinito in $x=0$ di ordine $\alpha-1<1$ rispetto a $x$; pertanto l’integrale improprio converge.
- Se $\alpha\geq 2$, l’integranda è un infinito in $x=0$ di ordine $\alpha-1\geq 1$ rispetto a $x$; pertanto l’integrale improprio diverge.

In conclusione, l’integrale converge per $\alpha<2$ e diverge (a $+\infty$) per $\alpha\geq 2$.
:::
:::

:::exercise{id="X2021-1" type="esame" chapter="1" difficulty="medio"}
## Domanda
**Esame del 27 gennaio 2021 - IIo turno**

**Esercizio 2**

(a) Dare la definizione di insieme limitato e discutere l'affermazione

$$
A\subseteq\mathbb{R}\text{ è limitato se e solo se }A\text{ è costituito da un numero finito di elementi}.
$$

Sia $f:\mathbb{R}\to\mathbb{R}$ la funzione definita da

$$
f(x)=\begin{cases}x^5\sin\frac{1}{x^4} & \text{se }x\ne 0,\\0 & \text{se }x=0.\end{cases}
$$

(b) Sia $X$ l'insieme degli zeri della funzione $f$. Descrivere l'insieme $X$ e determinare $\inf X$, $\sup X$. Esistono $\min X$ e $\max X$? Motivare le risposte.

(c) Dimostrare che per ogni $r>0$ si ha $X\cap\{x\in\mathbb{R}:0<|x|<r\}\ne\varnothing$.

:::solution
**Esercizio 2**

(a) Va bene una qualunque delle definizioni date a lezione, tra le quali:

- $A$ è limitato se esistono $H,K\in\mathbb{R}$ tali che $H\leq a\leq K$ per ogni $a\in A$;
- $A$ è limitato se esiste $M>0$ tale che $|a|\leq M$ per ogni $a\in A$.

L'affermazione è falsa: esistono insiemi limitati che sono costituiti da un numero infinito di elementi. Per esempio, l'intervallo $(0,1)$ è limitato e contiene infiniti elementi.

Si consideri ora la funzione $f$ definita da

$$
f(x)=\begin{cases}x^5\sin\dfrac{1}{x^4} & \text{se }x\ne 0,\\0 & \text{se }x=0.\end{cases}
$$

(b) Notiamo che la funzione $f$ è dispari. Infatti, la funzione $x\mapsto x^5$ è dispari, mentre la funzione $x\mapsto x^4$ è pari e dunque la funzione seno non vede il cambio di segno:

$$
f(-x)=(-x)^5\sin\frac{1}{(-x)^4}=-x^5\sin\frac{1}{x^4}=-f(x).
$$

L'insieme $X$ è dunque simmetrico rispetto all'origine.

Descriviamo ora l'insieme $X$: esso contiene il punto $0$ e tutti i punti dell'insieme

$$
\left\{x\in\mathbb{R}\setminus\{0\}:\sin\frac{1}{x^4}=0\right\}
=\left\{x\in\mathbb{R}\setminus\{0\}:\frac{1}{x^4}=k\pi,\ k\in\mathbb{Z}\setminus\{0\}\right\}
=\left\{x\in\mathbb{R}:x=\frac{\pm1}{\sqrt[4]{k\pi}},\ k\in\mathbb{N}\setminus\{0\}\right\}.
$$

Dunque abbiamo che

$$
X=\{0\}\cup\left\{x_k=\frac{\pm1}{\sqrt[4]{k\pi}},\ k\in\mathbb{N}\setminus\{0\}\right\}.
$$

Per $k\to+\infty$, $x_k\to0$, pertanto l'insieme $X$ è limitato. Allora esistono $\inf X$ e $\sup X$.

Inoltre, siccome la successione $\{|x_k|\}$ è strettamente decrescente e infinitesima, essa assume valore massimo per il primo indice possibile, che sarà $k=1$. In corrispondenza di tale indice, scegliendo il segno positivo, troviamo che

$$
\sup X=\max X=\frac{1}{\sqrt[4]{\pi}},
$$

e, per simmetria dell'insieme $X$ rispetto all'origine, scegliendo il segno negativo con $k=1$ troviamo che

$$
\inf X=\min X=-\frac{1}{\sqrt[4]{\pi}}.
$$

(c) Per gli studenti che hanno trattato l'argomento a lezione, osserviamo che si tratta di dimostrare che $0$ è un punto di accumulazione di $X$.

Per la dimostrazione esplicita, sia $r>0$ fissato. Vogliamo determinare se esiste $k\ne0$ naturale tale che $|x_k|<r$. Questa condizione è equivalente a

$$
|x_k|<r\quad\Longleftrightarrow\quad\frac{1}{\sqrt[4]{k\pi}}<r\quad\Longleftrightarrow\quad\sqrt[4]{k\pi}>\frac{1}{r}\quad\Longleftrightarrow\quad k>\frac{1}{\pi r^4}.
$$

La proprietà archimedea dei numeri reali garantisce che esiste $k\in\mathbb{N}$ per cui quest'ultima disuguaglianza è verificata.
:::
:::

:::exercise{id="X2021-2" type="esame" chapter="5" difficulty="medio"}
## Domanda
**Esame del 27 gennaio 2021 - Io turno**

**Esercizio 2**

(i) Enunciare il Teorema di esistenza degli zeri.

(ii) Dire, motivando la risposta, se la seguente affermazione è vera o falsa.

“Se $f : \mathbb{R} \longrightarrow \mathbb{R}$ è una funzione strettamente crescente tale che

$$
\lim_{x\to-\infty} f(x) = -\infty
\qquad\text{e}\qquad
\lim_{x\to+\infty} f(x) = +\infty,
$$

allora esiste $x \in \mathbb{R}$ tale che $f(x) = 0$.”

(iii) Dimostrare che la funzione $f : \mathbb{R} \longrightarrow \mathbb{R}$ definita da

$$
f(x) = e^x - \cos x + x\arctan x - \frac{1}{2}\log(1+x^2)
$$

ha almeno un punto critico in $\left(-\frac{\pi}{2},0\right)$.

:::solution
**Esercizio 2**

(i) *Enunciato del Teorema degli zeri*

Sia $f:\lbrack a,b\rbrack \longrightarrow\mathbb{R}$ una funzione continua su $\lbrack a,b\rbrack $, tale che $f(a)\cdot f(b)<0$.

Allora esiste $c\in(a,b)$ tale che $f(c)=0$.

Il punto $c$ è detto zero di $f$.

(ii) Consideriamo la seguente proposizione.

Sia $f$ strettamente crescente su $\mathbb{R}$, tale che

$$
\lim_{x\to-\infty}f(x)=-\infty\qquad\text{e}\qquad\lim_{x\to+\infty}f(x)=+\infty.
$$

Allora esiste $x\in\mathbb{R}$ tale che $f(x)=0$.

La proposizione è falsa. Per esempio la funzione

$$
f(x)=\begin{cases}
x-1 & x<1\\
x+1 & x\ge 1
\end{cases}
$$

soddisfa tutte le ipotesi ma non ha zeri.

(iii) Consideriamo ora la funzione

$$
f(x)=e^x-\cos x+x\arctan x-\frac{1}{2}\log(1+x^2),\qquad x\in\left(-\frac{\pi}{2},0\right).
$$

Dobbiamo dimostrare che $f$ ha almeno un punto critico nell’intervallo $\left(-\frac{\pi}{2},0\right)$, cioè ha almeno un punto $x\in\left(-\frac{\pi}{2},0\right)$ in cui $f'(x)=0$.

Osserviamo che

$$
\begin{aligned}
f'(x)&=e^x+\sin x+\arctan x+x\cdot\frac{1}{1+x^2}-\frac{1}{2}\cdot\frac{2x}{1+x^2}\\
&=e^x+\sin x+\arctan x.
\end{aligned}
$$

Senza tentare di risolvere l’equazione $f'(x)=0$, osserviamo che $f'$ è continua in $\left\lbrack -\frac{\pi}{2},0\right\rbrack $, e che

$$
f'\left(-\frac{\pi}{2}\right)=e^{-\pi/2}-1+\arctan\left(-\frac{\pi}{2}\right)=e^{-\pi/2}-1-\arctan\left(\frac{\pi}{2}\right)<0,
$$

$f'(0)=1>0$, dato che $e^{-\pi/2}<1$ e inoltre $\arctan\left(\frac{\pi}{2}\right)>0$.

Possiamo quindi applicare il Teorema degli zeri per concludere che $f'$ ha almeno uno zero in $\left(-\frac{\pi}{2},0\right)$, che corrisponde ad un punto critico di $f$.
:::
:::

:::exercise{id="X2021-3" type="esame" chapter="4" difficulty="medio"}
## Domanda
**Esame del 9 febbraio 2021**

**Esercizio 2**

(a) Siano $f,g$ due funzioni definite in $U\setminus\{x_0\}$, dove $U$ è un intorno di $x_0\in\mathbb{R}\cup\{+\infty,-\infty\}$. Sapendo che $f$ è limitata e $\lim_{x\to x_0}g(x)=+\infty$, cosa si può affermare riguardo all’esistenza ed al valore dei limiti

$$
\lim_{x\to x_0}(f(x)+g(x)),\qquad
\lim_{x\to x_0}f(x)g(x),\qquad
\lim_{x\to x_0}\frac{f(x)}{g(x)}\ ?
$$

Motivare le risposte.

(b) Determinare tutti i valori di $\alpha\geq 0$ per cui esiste il limite

$$
\lim_{x\to+\infty}x^2(M(x)+\alpha)
$$

dove $M(x)$ indica la mantissa di $x$.

:::solution
**Esercizio 2**

(a) Nel seguito, indichiamo con $B(x_0)$ un intorno di $x_0$. Inoltre, ricordiamo che

- $\lim_{x\to x_0}g(x)=+\infty$ se per ogni $k\in\mathbb{R}$ esiste $B(x_0)$ tale che, per $x\in B(x_0)\cap U\setminus\{x_0\}$, $g(x)>k$.
- $f$ è limitata in $U\setminus\{x_0\}$ se esiste $M>0$ tale che, per ogni $x\in U\setminus\{x_0\}$, $-M\leq f(x)\leq M$.

Ne segue che

$$
\lim_{x\to x_0}(f(x)+g(x))=+\infty.
$$

Infatti, dato che, se $k$ varia in $\mathbb{R}$ anche $k-M$ varia in $\mathbb{R}$, si ha che per ogni $h=k-M\in\mathbb{R}$ esiste $B(x_0)$ tale che, per $x\in B(x_0)\cap U\setminus\{x_0\}$, $(f(x)+g(x))>-M+k=h$.

Per quanto riguarda

$$
\lim_{x\to x_0}f(x)g(x),
$$

non si può stabilire a priori il comportamento del limite; possono infatti presentarsi casi diversi. Per esempio, se consideriamo $x_0=+\infty$, $f(x)=\sin x$ e $g(x)=x$, tutte le ipotesi sono rispettate e $\lim_{x\to+\infty}x\sin x$ non esiste.

Nel caso in cui esistano $B(x_0)$ e $\ell>0$ tali che, per ogni $x\in B(x_0)\setminus\{x_0\}$, $f(x)>\ell$, si può dimostrare, usando la definizione di limite, che $\lim_{x\to x_0}f(x)g(x)=+\infty$.

Se invece $f(x)<-\ell$, si ha che $\lim_{x\to x_0}f(x)g(x)=-\infty$.

Dato che $\lim_{x\to x_0}g(x)=+\infty$, esiste un intorno $B(x_0)$ tale che, per ogni $x\in B(x_0)\cap U\setminus\{x_0\}$, $g(x)>0$; in particolare in tale intorno la funzione $\frac{1}{g(x)}$ è ben definita e

$$
\lim_{x\to x_0}\frac{1}{g(x)}=0.
$$

Poiché $f$ è limitata, per ogni $x\in B(x_0)\cap U\setminus\{x_0\}$ vale

$$
-M\frac{1}{g(x)}\leq f(x)\cdot\frac{1}{g(x)}\leq M\frac{1}{g(x)},
$$

e dal teorema dei due carabinieri, applicato in tale intorno, segue che

$$
\lim_{x\to x_0}\frac{f(x)}{g(x)}=0.
$$

(b) Ricordiamo che, per ogni $x\in\mathbb{R}$, $0\leq M(x)=x-\lbrack x\rbrack <1$ e $\alpha\leq M(x)+\alpha<\alpha+1$. Inoltre,

$$
\lim_{x\to+\infty}x^2=+\infty.
$$

Se $\alpha>0$, quanto ricordato nel punto precedente ci permette di concludere che

$$
\lim_{x\to+\infty}x^2(M(x)+\alpha)=+\infty.
$$

Quando $\alpha=0$ vediamo che il limite non esiste. Infatti, se consideriamo le due successioni $x_n=n$ e $z_n=n+\frac{1}{2}$, con $n\in\mathbb{N}$, si ha:

$$
M(x_n)=0\qquad\text{e}\qquad x_n^2M(x_n)=n^2M(n)=0
\quad\Longrightarrow\quad \lim_{n\to+\infty}x_n^2M(x_n)=0.
$$

$$
M(z_n)=\frac{1}{2}\qquad\text{e}\qquad z_n^2M(z_n)=\frac{1}{2}\left(n+\frac{1}{2}\right)^2
\quad\Longrightarrow\quad \lim_{n\to+\infty}z_n^2M(z_n)=+\infty.
$$

Riassumendo:

- Se $\alpha=0$, $\lim_{x\to+\infty}x^2(M(x)+\alpha)$ non esiste.
- Se $\alpha>0$, $\lim_{x\to+\infty}x^2(M(x)+\alpha)=+\infty$.
:::
:::

:::exercise{id="X2021-4" type="esame" chapter="2" difficulty="medio"}
## Domanda
**Esame del 15 giugno 2021**

**Esercizio 2.**

(a) Risolvere l’equazione di variabile complessa $z$

$$
(z^3-8i)(iz-2\overline{z}-2-3i)=0.
$$

(b) Dimostrare che non esiste nessun numero naturale $n$ per cui l’equazione $z^n=1-i\sqrt{3}$ abbia una soluzione immaginaria pura.

:::solution
**Esercizio 2.**

(a) Risolvere l’equazione di variabile complessa $z$:

$$
(z^3-8i)(iz-2\overline{z}-2-3i)=0.
$$

Possiamo usare la legge dell’annullamento del prodotto e determinare quando ciascun fattore si annulla. Abbiamo

$$
z^3-8i=0 \quad\Longleftrightarrow\quad z^3=8i
$$

e queste sono le radici terze del numero $w=8i=2^3e^{i\pi/2}$. Otteniamo le tre radici

$$
z_k=2e^{i\left(\frac{\pi}{6}+\frac{2k\pi}{3}\right)},\qquad k=0,1,2
$$

e dunque

$$
z_0=2e^{i\pi/6}=\sqrt{3}+i,\qquad
z_1=2e^{i5\pi/6}=-\sqrt{3}+i,\qquad
z_2=2e^{i3\pi/2}=-2i.
$$

Per risolvere $iz-2\overline{z}-2-3i=0$ conviene porre $z=x+iy$. Si ottiene

$$
iz-2\overline{z}-2-3i=i(x+iy)-2(x-iy)-2-3i=-(y+2x+2)+i(x+2y-3)=0
$$

e poi uguagliare a $0$ i coefficienti della parte reale e della parte immaginaria. Abbiamo

$$
\begin{cases}
2x+y=-2\\
x+2y=3
\end{cases}
\quad\Longleftrightarrow\quad
\begin{cases}
x=-\frac{7}{3}\\
y=\frac{8}{3}
\end{cases}
$$

e dunque il numero $z_3=-\frac{7}{3}+\frac{8}{3}i$ è la quarta soluzione dell’equazione assegnata.

(b) Dimostrare che non esiste nessun numero naturale $n$ per cui l’equazione $z^n=1-i\sqrt{3}$ abbia una soluzione immaginaria pura.

Supponiamo per assurdo che esistano un numero naturale $n$ e un numero immaginario puro $z$ tali che $z^n=1-i\sqrt{3}$. Per vedere che ciò conduce a una contraddizione, possiamo procedere in almeno due modi diversi.

**Metodo 1.**

Consideriamo un numero immaginario puro $z=ai$, con $a\in\mathbb{R}\setminus\{0\}$. Allora

$$
z^n=(ai)^n=
\begin{cases}
a^{2k}i^{2k}=a^{2k}(i^2)^k=a^{2k}(-1)^k & \text{se } n=2k,\\
a^{2k+1}i^{2k+1}=a^{2k+1}(i^2)^ki=a^{2k+1}(-1)^ki & \text{se } n=2k+1.
\end{cases}
$$

Perciò:

- se $n$ è pari, $\operatorname{Re}(z^n)\ne 0$ e $\operatorname{Im}(z^n)=0$;
- se $n$ è dispari, $\operatorname{Re}(z^n)=0$ e $\operatorname{Im}(z^n)\ne 0$.

In nessun caso la potenza $n$-esima di un numero immaginario puro ha parte reale e parte immaginaria entrambe non nulle; in particolare, $z^n$ non può essere uguale al numero $1-i\sqrt{3}$.

**Metodo 2.**

Per ottenere lo stesso risultato si può anche ricorrere alla rappresentazione esponenziale dei numeri complessi. Osserviamo che $w=2e^{5i\pi/3}$, mentre un numero immaginario puro può essere scritto come $z=\rho e^{\pm i\pi/2}$. Dunque $z^n=w$ se e solo se $\rho^ne^{\pm ni\pi/2}=2e^{5i\pi/3}$, e dunque se e solo se esiste $k\in\mathbb{Z}$ tale che

$$
\begin{cases}
\rho^n=2\\
\pm\frac{n}{2}\pi=\frac{5}{3}\pi+2k\pi
\end{cases}
\quad\Longleftrightarrow\quad
\begin{cases}
\rho^n=2\\
\pm n=\frac{10}{3}+4k
\end{cases}
\quad\Longleftrightarrow\quad
\begin{cases}
\rho^n=2\\
n=\pm\left(\frac{10}{3}+4k\right).
\end{cases}
$$

È evidente che non esistono numeri relativi $k$ tali che $n=\pm\left(\frac{10}{3}+4k\right)$ sia un numero naturale: abbiamo quindi trovato una contraddizione.
:::
:::

:::exercise{id="X2021-5" type="esame" chapter="6" difficulty="medio"}
## Domanda
**Esame del 9 settembre 2021**

**Esercizio 2**

Sono date le funzioni $f$ e $g$ definite su $\mathbb{R}$.

(a) Stabilire se è possibile calcolare i limiti seguenti con le informazioni disponibili:

1. $\displaystyle \lim_{x\to 0} \frac{2f(x)+g(x)}{x^3+2x^2}$, con $f(x)=o(x^2)$ e $g(x)=o(x^5)$ per $x\to 0$.
2. $\displaystyle \lim_{x\to +\infty} \frac{2f(x)+g(x)}{x^3+2x^2}$, con $f(x)=o(x^2)$ e $g(x)=o(x^5)$ per $x\to +\infty$.

(b) Dimostrare che, per ogni $k\in\mathbb{Z}$, se $f(x)=o(x^k)$ per $x\to +\infty$, allora $f(x)=o(x^{k+1})$ per $x\to +\infty$.

:::solution
**Esercizio 2**

(a)

(i) Per ipotesi, $f(x)$ è $o(x^2)$ e $g$ è $o(x^5)$ per $x\to 0$. In questo caso $g$ è anche $o(x^2)$; infatti, dal fatto che $\lim_{x\to 0}\frac{g(x)}{x^5}=0$, ricaviamo che

$$
\lim_{x\to 0}\frac{g(x)}{x^2}=\lim_{x\to 0}\frac{g(x)}{x^5}\cdot\frac{x^5}{x^2}=\lim_{x\to 0}\frac{g(x)}{x^5}\cdot x^3=0.
$$

Dunque

$$
\lim_{x\to 0}\frac{2f(x)+g(x)}{x^3+2x^2}=\lim_{x\to 0}\frac{2o(x^2)+o(x^2)}{2x^2+o(x^2)}=\lim_{x\to 0}\frac{o(x^2)}{2x^2}=0.
$$

(ii) Le ipotesi ci dicono che $f(x)$ è $o(x^2)$ e $g$ è $o(x^5)$ per $x\to +\infty$; ciò comporta che $f$ sia $o(x^5)$. Infatti, $\lim_{x\to +\infty}\frac{f(x)}{x^2}=0$ e dunque

$$
\lim_{x\to +\infty}\frac{f(x)}{x^5}=\lim_{x\to +\infty}\frac{f(x)}{x^2}\cdot\frac{x^2}{x^5}=\lim_{x\to +\infty}\frac{f(x)}{x^2}\cdot\frac{1}{x^3}=0.
$$

Dunque

$$
\lim_{x\to +\infty}\frac{2f(x)+g(x)}{x^3+2x^2}=\lim_{x\to +\infty}\frac{o(x^5)}{x^3+o(x^3)}.
$$

Le informazioni non sono sufficienti per poter calcolare questo limite. Possiamo infatti trovare funzioni che soddisfano le ipotesi ma che hanno come risultato limiti diversi; per esempio, ponendo $f(x)=0$:

$$
\text{se } g(x)=x^3 \quad\Longrightarrow\quad \lim_{x\to +\infty}\frac{2f(x)+g(x)}{x^3+2x^2}=\lim_{x\to +\infty}\frac{x^3}{x^3+2x^2}=1
$$

$$
\text{se } g(x)=x^4 \quad\Longrightarrow\quad \lim_{x\to +\infty}\frac{2f(x)+g(x)}{x^3+2x^2}=\lim_{x\to +\infty}\frac{x^4}{x^3+2x^2}=+\infty.
$$

(b) Dobbiamo dimostrare che, per ogni $k\in\mathbb{Z}$, se $f$ è $o(x^k)$, per $x\to +\infty$, allora $f$ è $o(x^{k+1})$, per $x\to +\infty$.

La dimostrazione è simile a quella fatta nel caso (ii). Per ipotesi sappiamo che $\lim_{x\to +\infty}\frac{f(x)}{x^k}=0$. Vogliamo dimostrare che $\lim_{x\to +\infty}\frac{f(x)}{x^{k+1}}=0$. Per ottenere questo risultato, procediamo così:

$$
\lim_{x\to +\infty}\frac{f(x)}{x^{k+1}}=\lim_{x\to +\infty}\frac{f(x)}{x^k}\cdot\frac{1}{x}=0\cdot 0=0.
$$
:::
:::

:::exercise{id="X2022-1" type="esame" chapter="5" difficulty="medio"}
## Domanda
**Esame del 25 gennaio 2022 - IIo turno**

**Esercizio 2, Versione A**

(a) Enunciare il Teorema dei valori intermedi.

(b) Omettere l’ipotesi di continuità dal Teorema dei valori intermedi ed esibire un controesempio alla validità del teorema.

(c) Sia $f:\lbrack a,b\rbrack \cup\lbrack c,d\rbrack \to\mathbb{R}$ una funzione definita su un’unione disgiunta di intervalli (ovvero $\lbrack a,b\rbrack \cap\lbrack c,d\rbrack =\varnothing$). Vale ancora il Teorema dei valori intermedi? Se sì, esibire una dimostrazione; se no, trovare un controesempio.

:::solution
**(a) Teorema dei valori intermedi**

Sia $f$ una funzione continua su un intervallo chiuso e limitato $\lbrack a,b\rbrack $. Allora l’immagine di $\lbrack a,b\rbrack $ mediante $f$, cioè l’insieme $f(\lbrack a,b\rbrack )$, contiene l’intervallo chiuso di estremi $f(a)$ e $f(b)$.

**Corollario.** Sia $f$ una funzione continua su un intervallo $I$. Allora l’immagine di $I$ mediante $f$, cioè l’insieme $f(I)$, è un intervallo di estremi $\alpha=\inf\{f(x):x\in I\}$ e $\beta=\sup\{f(x):x\in I\}$, intesi come elementi della retta reale estesa (quindi eventualmente $\alpha=-\infty$ o $\beta=+\infty$). Gli estremi $\alpha$ e $\beta$, quando finiti, non sono necessariamente assunti da $f$: l’intervallo $f(I)$ può essere aperto, semiaperto o chiuso in ciascuno dei due estremi.

**(b)**

Per esempio, la funzione

$$
f(x)=\begin{cases}
-1 & \text{se }x\le 2,\\
1 & \text{se }x>2
\end{cases}
$$

non è continua in $x=2$. L’immagine dell’intervallo $\lbrack 0,4\rbrack $ è l’insieme $\{-1,1\}$, che non contiene l’intervallo $\lbrack f(0),f(4)\rbrack =\lbrack -1,1\rbrack $; più in generale, $\{-1,1\}$ non contiene alcun intervallo non degenere.

**(c)**

Il teorema dei valori intermedi vale su ciascuno dei due intervalli $\lbrack a,b\rbrack $ e $\lbrack c,d\rbrack $, poiché $f$ è continua su ciascuno di essi. In generale, però, non si estende a due punti appartenenti a componenti diverse: l’immagine dell’unione di due intervalli disgiunti non è necessariamente un intervallo, anche quando la funzione è continua.

Come controesempio, consideriamo la funzione proposta al punto precedente, ristretta all’insieme $A=\lbrack 0,1\rbrack \cup\lbrack 3,4\rbrack $. La funzione è continua su ciascuna componente, e $f(A)=\{-1,1\}$. Prendendo un punto in $\lbrack 0,1\rbrack $ e uno in $\lbrack 3,4\rbrack $, i valori corrispondenti sono $-1$ e $1$, ma $f(A)$ non contiene l’intervallo $\lbrack -1,1\rbrack $.
:::
:::

:::exercise{id="X2022-2" type="esame" chapter="5" difficulty="medio"}
## Domanda
**Esame del 25 gennaio 2022 - IIo turno**

**Esercizio 2, Versione B.**

(a) Enunciare il Teorema degli zeri.

(b) Omettere l'ipotesi di continuità dal Teorema degli zeri ed esibire un controesempio alla validità del teorema.

(c) Sia ora $f:\lbrack a,b\rbrack \cup\lbrack c,d\rbrack \to\mathbb{R}$ una funzione definita su un'unione disgiunta di intervalli (ovvero $\lbrack a,b\rbrack \cap\lbrack c,d\rbrack =\emptyset$), con $a<b<c<d$, tale che $f(a)\cdot f(d)<0$ (ossia i segni di $f$ sono opposti agli estremi dell'intera unione $\lbrack a,b\rbrack \cup\lbrack c,d\rbrack $). Vale ancora il Teorema degli zeri? Se sì, esibire una dimostrazione; se no, trovare un controesempio.

:::solution
**Esercizio 2, Versione B.**

(a) Enunciare il Teorema degli zeri.

**Teorema degli zeri**

Sia $f$ una funzione continua su un intervallo chiuso e limitato $\lbrack a,b\rbrack $, tale che $f(a)\cdot f(b)<0$. Allora esiste $c\in\lbrack a,b\rbrack $ tale che $f(c)=0$.

(b) Omettere l'ipotesi di continuità dal Teorema degli zeri ed esibire un controesempio alla validità del teorema.

Per esempio, la funzione

$$f(x)=\begin{cases}-1 & x\le 2,\\ 1 & x>2\end{cases}$$

non è continua in $x=2$. Se consideriamo l'intervallo $\lbrack 0,4\rbrack $, vediamo che $f$ è continua fuori dal punto $2$, e che $f(0)\cdot f(4)=-1<0$. La funzione però non ha zeri.

(c) Sia ora $f:\lbrack a,b\rbrack \cup\lbrack c,d\rbrack \to\mathbb{R}$ una funzione definita su un'unione disgiunta di intervalli (ovvero $\lbrack a,b\rbrack \cap\lbrack c,d\rbrack =\emptyset$), con $a<b<c<d$, tale che $f(a)\cdot f(d)<0$ (ossia i segni di $f$ sono opposti agli estremi dell'intera unione $\lbrack a,b\rbrack \cup\lbrack c,d\rbrack $). Vale ancora il Teorema degli zeri? Se sì, esibire una dimostrazione; se no, trovare un controesempio.

Il Teorema non vale, anche quando $f$ è continua.

Come controesempio possiamo considerare la funzione proposta al punto precedente, ristretta all'insieme $A=\lbrack 0,1\rbrack \cup\lbrack 3,4\rbrack $, con $a=0$, $b=1$, $c=3$, $d=4$. Su $A$ la funzione $f$ è continua, poiché il punto di discontinuità $x=2$ non appartiene ad $A$. Inoltre $f(a)\cdot f(d)=f(0)\cdot f(4)=-1<0$, quindi l'ipotesi richiesta è soddisfatta. Tuttavia $f$ non si annulla in nessun punto di $A$, poiché $f$ vale costantemente $-1$ su $\lbrack 0,1\rbrack $ e costantemente $1$ su $\lbrack 3,4\rbrack $.
:::
:::

:::exercise{id="X2022-3" type="esame" chapter="10" difficulty="medio"}
## Domanda
**Esame del 25 gennaio 2022 - Io turno**

**Esercizio 2**

(a) Fornire la definizione di integrale improprio convergente sull’intervallo $\lbrack 2,+\infty)$.

(b) Studiare, al variare del parametro $k\in\mathbb{R}$, la convergenza dell’integrale improprio

$$
\int_2^{+\infty}\left(\frac{k}{x}-\frac{2}{x+1}\right)\,dx.
$$

(c) Dimostrare che se $g:\mathbb{R}\to\mathbb{R}$ è continua e positiva, allora la funzione $G(x)=\int_2^x g(t)\,dt$ ammette limite, eventualmente uguale a $+\infty$, per $x\to+\infty$.

:::solution
**Esercizio 2**

(a) Sia $f$ una funzione localmente integrabile su $(2,+\infty)$, vale a dire integrabile su tutti gli intervalli $\lbrack a,b\rbrack \subset(2,+\infty)$.

Se $f$ è illimitata in ogni intorno destro di $2$, l’integrale è improprio anche in $2$. In questo caso l’integrale improprio si dice convergente se, fissato $b\in(2,+\infty)$, si ha che

$$
\lim_{a\to 2^+}\int_a^b f(x)\,dx=m\in\mathbb{R}
$$

e

$$
\lim_{t\to+\infty}\int_2^t f(x)\,dx=\ell\in\mathbb{R}.
$$

Se $f$ è localmente integrabile in $\lbrack 2,+\infty)$, vale a dire integrabile su tutti gli intervalli $\lbrack a,b\rbrack \subset\lbrack 2,+\infty)$, l’integrale non è improprio in $2$. In tal caso si dice che l’integrale improprio converge se

$$
\lim_{t\to+\infty}\int_2^t f(x)\,dx=\ell\in\mathbb{R}.
$$

(b) Poiché la funzione integranda è continua su $\lbrack 2,+\infty)$, l’integrale non è improprio nell’estremo di integrazione $2$, ma solamente a $+\infty$. Eseguendo la somma nella funzione integranda, otteniamo

$$
\frac{k}{x}-\frac{2}{x+1}=\frac{(k-2)x+k}{x(x+1)},
$$

in cui il denominatore è equivalente a $x^2$ per $x\to+\infty$.

Se $k=2$, la funzione integranda è

$$
\frac{2}{x(x+1)}\sim\frac{2}{x^2}\quad\text{per }x\to+\infty,
$$

quindi l’integrale improprio converge per il criterio del confronto asintotico. Si può ottenere lo stesso risultato con il criterio del confronto, poiché per ogni $x\ge2$ si ha

$$
0\le\frac{2}{x(x+1)}\le\frac{2}{x^2},
$$

e l’integrale della funzione maggiorante converge.

Se $k\ne2$, la funzione integranda soddisfa

$$
\frac{(k-2)x+k}{x(x+1)}\sim\frac{k-2}{x}\quad\text{per }x\to+\infty.
$$

Per $k>2$ l’integranda è definitivamente positiva; applicando il criterio del confronto asintotico, l’integrale diverge a $+\infty$. Per $k<2$ l’integranda è definitivamente negativa. Si applica il criterio del confronto asintotico ai valori assoluti: il suo valore assoluto è asintotico a $\frac{2-k}{x}$, la cui integrale diverge. Pertanto l’integrale assegnato diverge a $-\infty$. In conclusione, l’integrale converge se e solo se $k=2$.

(c) Dal teorema fondamentale del calcolo integrale, $G$ è derivabile su $\mathbb{R}$ e $G'(x)=g(x)>0$ per ogni $x\in\mathbb{R}$. Dunque $G$ è crescente. Per il teorema sul limite delle funzioni monotone, esiste nei reali estesi il limite

$$
\lim_{x\to+\infty}G(x)=\sup\{G(x):x\in\mathbb{R}\}\in\mathbb{R}\cup\{+\infty\}.
$$

Il limite può essere infinito; per esempio, se $g(x)=1$, allora $G(x)=x-2$ e $G(x)\to+\infty$.
:::
:::

:::exercise{id="X2022-4" type="esame" chapter="11" difficulty="medio"}
## Domanda
**Esame del 17 giugno 2022**

**Esercizio 2**

(a) Dare la definizione di equazione differenziale a variabili separabili.

(b) Determinare tutte le soluzioni dell’equazione differenziale

$$
y'=(y^2-1)(x+1).
$$

:::solution
**Esercizio 2.**

(a) Un’equazione differenziale a variabili separabili è un’equazione differenziale del primo ordine che si presenta nella forma

$$
y'(t)=f(t)g(y(t))
$$

dove $y(t)$ è una funzione incognita della variabile $t$, $f(t)$ è una funzione definita su un intervallo aperto $I\subseteq\mathbb{R}$ a valori in $\mathbb{R}$ e $g(y)$ è una funzione definita su un intervallo aperto $J\subseteq\mathbb{R}$ a valori in $\mathbb{R}$.

(b) L’equazione assegnata è un’equazione a variabili separabili, con variabile indipendente $x$; in questo caso $f(x)=x+1$ e $g(y)=y^2-1$. Inoltre, $f$ è continua su $\mathbb{R}$ e $g$ è di classe $C^1$ su $\mathbb{R}$, per cui vale il teorema di esistenza e unicità locale delle soluzioni con condizione iniziale $y(x_0)=y_0$, per ogni $x_0\in\mathbb{R}$ e per ogni $y_0\in\mathbb{R}$.

Per prima cosa, cerchiamo le soluzioni costanti, che corrispondono alle soluzioni di $y^2-1=0$, cioè ai valori $y=\pm1$. Ne segue che l’equazione differenziale assegnata ha due soluzioni costanti, $y(x)=1$ e $y(x)=-1$, entrambe definite su $\mathbb{R}$.

Siccome tutte le altre soluzioni non assumono mai i valori $\pm1$, possiamo ricavare le altre soluzioni risolvendo

$$
\int\frac{1}{y^2-1}\,dy=\int(x+1)\,dx.
$$

Utilizzando la scomposizione in fratti semplici, da $y^2-1=(y-1)(y+1)$ otteniamo

$$
\frac{1}{y^2-1}=\frac{A}{y-1}+\frac{B}{y+1}=\frac{Ay+A+By-B}{y^2-1}=\frac{(A+B)y+(A-B)}{y^2-1}
$$

e dunque

$$
\begin{cases}
A+B=0\\
A-B=1
\end{cases}
\quad\Longrightarrow\quad
A=\frac12,\qquad B=-\frac12.
$$

Ne ricaviamo che

$$
\begin{aligned}
\int\frac{1}{y^2-1}\,dy
&=\int\left(\frac12\frac{1}{y-1}-\frac12\frac{1}{y+1}\right)dy\\
&=\frac12\log|y-1|-\frac12\log|y+1|+k\\
&=\frac12\log\left|\frac{y-1}{y+1}\right|+k
\end{aligned}
$$

e

$$
\int(x+1)\,dx=\frac12x^2+x+c,
$$

con $k,c\in\mathbb{R}$. Per quanto riguarda l’equazione differenziale, otteniamo

$$
\frac12\log\left|\frac{y-1}{y+1}\right|=\frac12x^2+x+c.
$$

Quindi

$$
\log\left|\frac{y-1}{y+1}\right|=x^2+2x+2c=x^2+2x+k,
$$

con $k\in\mathbb{R}$. Applicando la funzione esponenziale a entrambi i membri si ha

$$
\left|\frac{y-1}{y+1}\right|=e^{x^2+2x+k}=e^{x^2+2x}\cdot e^k=K e^{x^2+2x},
$$

con $K>0$. La funzione $\frac{y-1}{y+1}$ cambia segno per $y=1$ e $y=-1$; poiché le soluzioni che stiamo cercando non assumono quei due valori, possiamo togliere il valore assoluto, ottenendo $\frac{y-1}{y+1}=\pm K e^{x^2+2x}$, oppure $\frac{y-1}{y+1}=K e^{x^2+2x}$, con $K\ne0$. Osserviamo inoltre che per $K=0$ abbiamo $\frac{y-1}{y+1}=0$, e cioè $y=1$, che ci restituisce una delle due soluzioni costanti. Ne segue che possiamo considerare $K\in\mathbb{R}$. Per ricavare le soluzioni, dobbiamo esplicitare $y$ in funzione di $x$. Procediamo così:

$$
\begin{aligned}
\frac{y-1}{y+1}
&=\frac{y+1-2}{y+1}=1-2\cdot\frac{1}{y+1}=K e^{x^2+2x}\\
\frac{1}{y+1}&=\frac12\left(1-K e^{x^2+2x}\right)\\
y+1&=\frac{2}{1-K e^{x^2+2x}}\\
y&=\frac{2}{1-K e^{x^2+2x}}-1,
\end{aligned}
$$

con $K\in\mathbb{R}$. Per ogni $K$, questa soluzione è definita su ciascun intervallo aperto che non contiene zeri di $1-Ke^{x^2+2x}$. Se $K>0$ e $K\le e$, gli zeri sono $x=-1\pm\sqrt{1-\ln K}$; per $K>e$ non vi sono zeri. Per $K\le0$ non vi sono zeri.

Ne segue che tutte le soluzioni dell’equazione differenziale assegnata sono

$$
y(x)=1;\qquad y(x)=-1;\qquad y(x)=\frac{2}{1-K e^{x^2+2x}}-1,\quad K\in\mathbb{R},
$$

definite sui rispettivi intervalli aperti di definizione indicati sopra.
:::
:::

:::exercise{id="X2022-5" type="esame" chapter="6" difficulty="medio"}
## Domanda
**Esame del 9 settembre 2022**

**Esercizio 2**

(a) Dare la definizione di ordine di infinitesimo e di parte principale per una funzione $f(x)$ rispetto a un campione $\varphi(x)$, per $x\to x_0$.

(b) Calcolare la parte principale e l'ordine di infinitesimo della funzione

$$f(x)=(e^x+\cos x)^2-4-4x+x^3$$

per $x\to 0$, rispetto al campione $\varphi(x)=x$.

(c) Date $f$ e $g$ funzioni infinitesime dello stesso ordine rispetto a un campione $\varphi(x)$, per $x\to x_0$, è vero o falso che la loro somma $f+g$ è sempre un infinitesimo dello stesso ordine? Motivare la risposta.

:::solution
**Esercizio 2**

(a) Siano $f$ e $\varphi$ definite su uno stesso dominio $D$, e sia $x_0$ un punto di accumulazione di $D$. Supponiamo che $\varphi(x)\to 0$ per $x\to x_0$ e che $\varphi(x)\neq 0$ in un intorno di $x_0$ privato di $x_0$, in modo che $\lbrack \varphi(x)\rbrack ^\alpha$ sia definita e assuma valori reali per tali $x$ (in alternativa, si può convenire che $\lbrack \varphi(x)\rbrack ^\alpha=|\varphi(x)|^\alpha$ quando $\alpha$ non è un intero).

Si dice che $f$ è un infinitesimo di ordine $\alpha>0$ rispetto all'infinitesimo campione $\varphi(x)$, per $x\to x_0$, se

$$\lim_{x\to x_0}f(x)=0 \quad\text{e}\quad \lim_{x\to x_0}\frac{f(x)}{\lbrack \varphi(x)\rbrack ^\alpha}=\ell\in\mathbb{R}\setminus\{0\}.$$

Si dice parte principale di $f$ rispetto a $\varphi$, per $x\to x_0$, la funzione $\ell\lbrack \varphi(x)\rbrack ^\alpha$.

(b) Calcoliamo la parte principale e l'ordine di infinitesimo della funzione $f(x)=(e^x+\cos x)^2-4-4x+x^3$, per $x\to 0$, rispetto al campione $\varphi(x)=x$.

Usiamo gli sviluppi di Maclaurin per studiare $(e^x+\cos x)^2$. Abbiamo che, per $x\to 0$:

$$e^x=1+x+\frac{1}{2}x^2+\frac{1}{3!}x^3+o(x^3)$$

$$\cos x=1-\frac{1}{2}x^2+o(x^3)$$

$$e^x+\cos x=2+x+\frac{1}{6}x^3+o(x^3)$$

$$(e^x+\cos x)^2=\left(2+x+\frac{x^3}{6}+o(x^3)\right)^2=4+4x+x^2+\frac{2}{3}x^3+o(x^3)$$

$$f(x)=(e^x+\cos x)^2-4-4x+x^3=x^2+\frac{5}{3}x^3+o(x^3).$$

Ne segue che $f$ ha ordine di infinitesimo $2$ rispetto a $x$, per $x\to 0$; la sua parte principale è $x^2$.

(c) La proposizione è falsa. Consideriamo per esempio le funzioni $f(x)=x+x^2$ e $g(x)=-x+x^2$. Entrambe sono infinitesimi di ordine $1$ rispetto a $x$, per $x\to 0$, mentre

$$f(x)+g(x)=(x+x^2)+(-x+x^2)=2x^2$$

è un infinitesimo di ordine $2$ rispetto a $x$, per $x\to 0$.

In generale, se $f$ e $g$ hanno entrambe ordine $\alpha$ rispetto a $\varphi$ con parti principali $\ell_1\lbrack \varphi(x)\rbrack ^\alpha$ e $\ell_2\lbrack \varphi(x)\rbrack ^\alpha$, e $\ell_2=-\ell_1$, le parti principali si cancellano e si ottiene soltanto $f(x)+g(x)=o\big(\lbrack \varphi(x)\rbrack ^\alpha\big)$. Questo non garantisce che $f+g$ abbia un ordine superiore ben definito: l'eventuale nuovo ordine di infinitesimo della somma va determinato caso per caso, e in generale la somma potrebbe anche risultare identicamente nulla oppure non possedere alcun ordine finito rispetto a $\varphi$.
:::
:::

:::exercise{id="X2023-1" type="esame" chapter="1" difficulty="difficile"}
## Domanda
**Esame del 25 gennaio 2023 - turno 1**

**Esercizio 1.** Si consideri la funzione $f:\operatorname{dom} f\subseteq\mathbb{R}\to\mathbb{R}$ definita da

$$
f(x)=\sqrt{x^2+3x}-|x|.
$$

(a) Determinare il dominio di definizione $\operatorname{dom} f$, eventuali proprietà di simmetria, i limiti agli estremi di $\operatorname{dom} f$ e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità in $\operatorname{dom} f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Studiare il comportamento, per $n\longrightarrow+\infty$, della successione reale $(a_n)_{n\in\mathbb{N}}$ i cui termini sono

$$
a_n=\cos(2\pi\sqrt{n^2+3n}).
$$

:::solution
**(a)**

Le condizioni di esistenza richiedono che l’argomento della radice sia non negativo, quindi il dominio della funzione è

$$
\operatorname{dom} f=\{x\in\mathbb{R}\mid x^2+3x=x(x+3)\geq 0\}=(-\infty,-3]\cup[0,\infty).
$$

La funzione non può essere né pari né dispari perché il suo dominio non è un insieme simmetrico rispetto a $0$.

Per calcolare i limiti agli estremi del dominio, osserviamo che, per $x\to\pm\infty$,

$$
f(x)=\sqrt{x^2+3x}-|x|=|x|\left(\sqrt{1+\frac{3}{x}}-1\right)=|x|\left(1+\frac{1}{2}\cdot\frac{3}{x}+o\left(\frac{1}{x}\right)-1\right)=\frac{3}{2}\cdot\frac{|x|}{x}+o(1).
$$

Ne segue che

$$
\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}\frac{3}{2}\cdot\frac{|x|}{x}=\lim_{x\to+\infty}\frac{3}{2}=\frac{3}{2},
$$

$$
\lim_{x\to-\infty}f(x)=\lim_{x\to-\infty}\frac{3}{2}\cdot\frac{|x|}{x}=\lim_{x\to-\infty}\frac{3}{2}(-1)=-\frac{3}{2}.
$$

La funzione $h(x)=\sqrt{x^2+3x}$ è composizione del polinomio $P(x)=x^2+3x$ (continuo su $\mathbb{R}$) con la funzione $g(t)=\sqrt{t}$ (continua per $t\geq 0$), dunque è continua sul suo dominio; $f$ si ottiene sommando a $h$ la funzione $-|x|$, che è continua su $\mathbb{R}$: ne segue che $f$ è continua sul suo dominio, pertanto non ha asintoti verticali. In particolare, $f(-3)=-3$ e $f(0)=0$.

Dal calcolo dei limiti otteniamo che $y=3/2$ è un asintoto orizzontale destro, $y=-3/2$ è un asintoto orizzontale sinistro.

**(b)**

Abbiamo già osservato che $f$ è continua sul suo dominio.

Per quanto riguarda la derivabilità, la funzione $h(x)$ e la funzione $-|x|$ sono derivabili nei punti del dominio in cui non si annullano, cioè per $x\neq 0$ e per $x\neq -3$, che sono gli estremi rispettivamente della semiretta $(-\infty,-3\rbrack $ e della semiretta $\lbrack 0,+\infty)$ (pertanto non sono punti interni al dominio di $f$): in questi punti non si può calcolare la derivata di $f$. Dunque $f$ è certamente derivabile in $(-\infty,-3)\cup(0,+\infty)$, dove otteniamo

$$
f'(x)=\frac{2x+3}{2\sqrt{x^2+3x}}-\operatorname{sign}(x)=
\begin{cases}
\frac{2x+3}{2\sqrt{x^2+3x}}-1 & x>0,\\
\frac{2x+3}{2\sqrt{x^2+3x}}+1 & x<-3.
\end{cases}
$$

In $x=0$ e in $x=-3$ ci possiamo chiedere se esistono rispettivamente la derivata destra e la derivata sinistra.

$$
\lim_{x\to0^+}f'(x)=\lim_{x\to0^+}\left(\frac{2x+3}{2\sqrt{x^2+3x}}-1\right)=+\infty
$$

e

$$
\lim_{x\to(-3)^-}f'(x)=\lim_{x\to(-3)^-}\left(\frac{2x+3}{2\sqrt{x^2+3x}}+1\right)=-\infty.
$$

Poiché $f$ è continua in $x=0$ e in $x=-3$, dal teorema “tappabuchi” segue che non esistono la derivata destra in $x=0$ e la sinistra in $x=-3$: in entrambi i punti $f$ presenta una semitangente verticale, dal lato destro in $x=0$ e dal lato sinistro in $x=-3$.

**(c)**

Studiamo il segno della derivata. Osserviamo che $\sqrt{x^2+3x}>0$ per ogni $x\in(-\infty,-3)\cup(0,+\infty)$.

Per $x>0$:

$$
\frac{2x+3}{2\sqrt{x^2+3x}}-1=\frac{2x+3-2\sqrt{x^2+3x}}{2\sqrt{x^2+3x}}\geq0\quad\Longleftrightarrow\quad 2x+3\geq2\sqrt{x^2+3x}
$$

$$
\Longleftrightarrow\quad (2x+3)^2\geq4(x^2+3x)\quad\Longleftrightarrow\quad 4x^2+12x+9\geq4x^2+12x\quad\Longleftrightarrow\quad 9\geq0.
$$

Ne segue che $f'(x)>0$ per ogni $x>0$.

Analogamente, per $x<-3$ abbiamo che

$$
\frac{2x+3}{2\sqrt{x^2+3x}}+1=\frac{2x+3+2\sqrt{x^2+3x}}{2\sqrt{x^2+3x}}\geq0\quad\Longleftrightarrow\quad 2x+3+2\sqrt{x^2+3x}\geq0
$$

$$
4(x^2+3x)\geq(-2x-3)^2\quad\Longleftrightarrow\quad 4x^2+12x\geq4x^2+12x+9\quad\Longleftrightarrow\quad 0\geq9
$$

quindi $f'(x)<0$ per ogni $x<-3$.

Il teorema di Lagrange ci permette di affermare che in ogni intervallo in cui il segno della derivata è costante la funzione è monotona. Inoltre, $f$ è continua in $x=0$ e in $x=-3$. Pertanto $f$ è strettamente decrescente in $(-\infty,-3\rbrack $ e strettamente crescente in $\lbrack 0,+\infty)$.

Dalla monotonia segue che $x=-3$ e $x=0$ sono punti di minimo locale. Inoltre, siccome $f(-3)<f(x)\ \forall x<-3$ per la monotonia e vale anche $f(-3)=-3<0=f(0)\leq f(x)\ \forall x\geq 0$, si ha che $-3$ è un punto di minimo globale. Non vi sono punti di massimo locale né globale.

**(d)**

Il grafico qualitativo è costituito da due rami, entrambi con un minimo locale agli estremi: il ramo su $(-\infty,-3\rbrack $ è strettamente decrescente, parte da quota $y=-\frac{3}{2}$ per $x\to-\infty$ e arriva al minimo $(-3,-3)$ con semitangente verticale; il ramo su $\lbrack 0,+\infty)$ è strettamente crescente, parte dal minimo $(0,0)$ con semitangente verticale e tende a quota $y=\frac{3}{2}$ per $x\to+\infty$.

**(e)**

Per studiare il comportamento di questa successione, possiamo usare almeno due metodi diversi. Entrambi sfruttano la periodicità del coseno.

**Metodo 1.**

Usando il limite notevole $(1+t)^{1/2}=1+\frac{1}{2}t+o(t)$ per $t\to 0$, abbiamo che

$$
\sqrt{n^2+3n}=n\sqrt{1+3/n}=n\left(1+\frac{3}{2n}+o\left(\frac{1}{n}\right)\right)=n+\frac{3}{2}+o(1),
$$

e dunque per ogni $n\in\mathbb{N}$

$$
\cos\left(2\pi\sqrt{n^2+3n}\right)=\cos\left(2\pi\left(n+\frac{3}{2}+o(1)\right)\right)=\cos[2\pi n+(3\pi+o(1))]=\cos(3\pi+o(1)).
$$

Quindi

$$
\lim_{n\to+\infty}\cos\left(2\pi\sqrt{n^2+3n}\right)=\lim_{n\to+\infty}\cos(3\pi+o(1))=\cos3\pi=-1.
$$

**Metodo 2.**

Poiché il coseno ha periodo $2\pi$, possiamo aggiungere $-2\pi n$ all’argomento del coseno senza modificarne il valore; quindi:

$$
\begin{aligned}
\lim_{n\to+\infty}\cos\left(2\pi\sqrt{n^2+3n}\right)&=\lim_{n\to+\infty}\cos\left(2\pi\sqrt{n^2+3n}-2\pi n\right)\\
&=\lim_{n\to+\infty}\cos\left(2\pi\left(\sqrt{n^2+3n}-n\right)\right)\\
&=\lim_{n\to+\infty}\cos\left(2\pi\left(\frac{3}{2}+o(1)\right)\right)=\cos 3\pi=-1.
\end{aligned}
$$
:::
:::

:::exercise{id="X2023-2" type="esame" chapter="6" difficulty="difficile"}
## Domanda
**Esame del 25 gennaio 2023 - turno 2**

**Esercizio 1.** Si consideri la funzione $f:\operatorname{dom} f \subseteq \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x)=
\begin{cases}
\exp\left(\dfrac{1}{\sin x}\right) & x\in[-\pi,\pi]\setminus\{\pm\pi,0\}\\
0 & x\in\{\pm\pi,0\}.
\end{cases}
$$

(a) Determinare eventuali proprietà di simmetria, zeri e segno della funzione, i limiti agli estremi di $\operatorname{dom} f$ e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità in $\operatorname{dom} f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Studiare l'integrabilità di $f$ in $\lbrack -\pi,0\rbrack $ e in $\lbrack 0,\pi\rbrack $.

:::solution
**Esercizio 1.** Si consideri la funzione $f:\lbrack -\pi,\pi\rbrack \to\mathbb{R}$ definita da

$$
f(x)=
\begin{cases}
\exp\left(\dfrac{1}{\sin x}\right) & x\in[-\pi,\pi]\setminus\{-\pi,0,\pi\}\\
0 & x\in\{-\pi,0,\pi\}.
\end{cases}
$$

**(a) Dominio, limiti e asintoti**

Ricordiamo che $\exp t=e^t$. Poiché la funzione esponenziale non ha simmetrie, $f(-x)=\exp\left(\dfrac{1}{\sin(-x)}\right)=\exp\left(-\dfrac{1}{\sin x}\right)\ne\pm f(x)$; quindi la funzione $f$ non risulta né pari né dispari.

Inoltre, $\exp t>0$ per ogni $t\in\mathbb{R}$, quindi $f(x)=0$ solo nei punti $x=-\pi,0,\pi$, che risultano gli unici zeri di $f$; in tutti gli altri punti del dominio $f$ è positiva.

Per calcolare più facilmente i limiti, osserviamo che $g(x)=1/\sin x$ è dispari, $g(x)<0$ in $(-\pi,0)$ e $g(x)>0$ in $(0,\pi)$.

Poiché $\lim_{x\to-\pi^+}\dfrac{1}{\sin x}=\lim_{x\to0^-}\dfrac{1}{\sin x}=-\infty$, ponendo $t=\dfrac{1}{\sin x}$ abbiamo che

$$
\begin{aligned}
\lim_{x\to(-\pi)^+}\exp\left(\frac{1}{\sin x}\right)&=\lim_{t\to-\infty}e^t=0,\\
\lim_{x\to0^-}\exp\left(\frac{1}{\sin x}\right)&=\lim_{t\to-\infty}e^t=0.
\end{aligned}
$$

Poiché $\lim_{x\to\pi^-}\dfrac{1}{\sin x}=\lim_{x\to0^+}\dfrac{1}{\sin x}=+\infty$, ponendo $t=\dfrac{1}{\sin x}$ abbiamo che

$$
\begin{aligned}
\lim_{x\to\pi^-}\exp\left(\frac{1}{\sin x}\right)&=\lim_{t\to+\infty}e^t=+\infty,\\
\lim_{x\to0^+}\exp\left(\frac{1}{\sin x}\right)&=\lim_{t\to+\infty}e^t=+\infty.
\end{aligned}
$$

Ne segue che:

- $x=0$ è asintoto verticale destro di $f$;
- $x=\pi$ è asintoto verticale sinistro di $f$.

**(b) Continuità e derivabilità**

$f$ è continua in $\lbrack -\pi,\pi\rbrack \setminus\{-\pi,0,\pi\}$, perché è composizione della funzione esponenziale con il reciproco della funzione continua, derivabile e non nulla $\sin x$. Dai limiti calcolati al punto precedente, abbiamo che $f$ è continua in $x=-\pi$, perché $\lim_{x\to-\pi^+}f(x)=0=f(-\pi)$.

La funzione non è invece continua in $x=0$ né in $x=\pi$. In entrambi i punti uno dei limiti laterali è infinito, dato che $\lim_{x\to0^+}f(x)=+\infty$ e $\lim_{x\to\pi^-}f(x)=+\infty$; si tratta quindi in entrambi i casi di discontinuità di seconda specie (discontinuità infinite): in $x=0$ rispetto al limite destro nel dominio, in $x=\pi$ rispetto al limite sinistro nel dominio.

Per completezza, possiamo osservare che $f$ è continua da sinistra in $x=0$, dato che $\lim_{x\to0^-}f(x)=0=f(0)$.

La funzione risulta derivabile in $(-\pi,\pi)\setminus\{0\}$, perché le funzioni sopra indicate sono ivi derivabili, con derivata

$$f'(x)=-\frac{\cos x}{\sin^2 x}\exp\left(\frac{1}{\sin x}\right).$$

Dalla continuità in $x=-\pi$ e dalla continuità a sinistra in $x=0$ di $f$, possiamo calcolare i relativi limiti di $f'(x)$ e verificare in questo modo l'esistenza delle opportune derivate laterali nei due punti citati. Per facilitare i calcoli, osserviamo che, ponendo $t=\frac{1}{\sin x}$ e procedendo come nel punto (a), si ha che

$$
\lim_{x\to0^-}\frac{1}{\sin^2 x}\exp\left(\frac{1}{\sin x}\right)=\lim_{x\to(-\pi)^+}\frac{1}{\sin^2 x}\exp\left(\frac{1}{\sin x}\right)=\lim_{t\to-\infty}t^2e^t=0
$$

e quindi

$$
\lim_{x\to0^-}f'(x)=\lim_{x\to0^-}-\frac{\cos x}{\sin^2 x}\exp\left(\frac{1}{\sin x}\right)=\lim_{x\to(-\pi)^+}f'(x)=0.
$$

Dal teorema "tappabuchi" segue che esistono $f'_+(-\pi)=0$ e $f'_-(0)=0$.

Osserviamo tuttavia che la discontinuità di $f$ in $x=0$ esclude l'esistenza della derivata di $f$ in tale punto, poiché la continuità è condizione necessaria per la derivabilità: il valore $f'_-(0)=0$ ottenuto sopra è dunque solo il limite del rapporto incrementale sinistro, e non la derivata di $f$ in $0$.

In $x=\pi$, poiché $f(\pi)=0$ e $\lim_{x\to\pi^-}f(x)=+\infty$, il rapporto incrementale sinistro

$$
\frac{f(x)-f(\pi)}{x-\pi}=\frac{f(x)}{x-\pi}
$$

tende a $-\infty$ per $x\to\pi^-$, perché il numeratore tende a $+\infty$ e il denominatore tende a $0^-$; quindi non esiste una derivata sinistra finita in $x=\pi$.

**(c) Monotonia ed estremi**

Poiché $e^t>0$ per ogni $t\in\mathbb{R}$ e $\sin^2 x>0$ per ogni $x\in(-\pi,\pi)\setminus\{0\}$, per studiare zeri e segno di $f'$ basta studiare quelli di $-\cos x$. Ne segue che $f'(x)=0$ se e solo se $x=\pm\pi/2$ e che $f'(x)>0$ se $x\in(-\pi,-\pi/2)\cup(\pi/2,\pi)$ e $f'(x)<0$ se $x\in(-\pi/2,0)\cup(0,\pi/2)$. Poiché $f$ è continua in $x=-\pi$ e continua da sinistra in $x=0$, concludiamo che

- $f$ è strettamente crescente sugli intervalli $\lbrack -\pi,-\pi/2\rbrack $ e $\lbrack \pi/2,\pi)$;
- $f$ è strettamente decrescente sugli intervalli $\lbrack -\pi/2,0\rbrack $ e $(0,\pi/2\rbrack $;
- $x=-\pi/2$ è un punto di massimo locale di valore $f(-\pi/2)=e^{-1}$, non globale perché $f$ è illimitata superiormente;
- $x=\pi/2$ è un punto di minimo locale di valore $f(\pi/2)=e$, non globale perché $f(\pi/2)=e>f(0)=0$;
- $x=0$, $x=-\pi$ e $x=\pi$ sono punti di minimo globale, perché $f(0)=f(-\pi)=f(\pi)=0<f(x)$, per ogni $x\in\lbrack -\pi,\pi\rbrack \setminus\{\pm\pi,0\}$.

**(d) Grafico qualitativo**

Il grafico qualitativo di $f$ è composto da quattro rami, corrispondenti ai quattro intervalli di monotonia individuati al punto (c).

- Un primo ramo crescente, dal punto $(-\pi,0)$ al massimo locale $(-\pi/2,e^{-1})$.
- Un secondo ramo decrescente, dal massimo locale $(-\pi/2,e^{-1})$ al punto $(0,0)$, che viene raggiunto con continuità, poiché $\lim_{x\to0^-}f(x)=0=f(0)$.
- Un terzo ramo decrescente, che per $x\to0^+$ diverge a $+\infty$ e scende fino al minimo locale $(\pi/2,e)$.
- Un quarto ramo crescente, dal minimo locale $(\pi/2,e)$ che diverge a $+\infty$ per $x\to\pi^-$.

Il punto $(0,0)$ non è dunque isolato: esso è il punto finale del secondo ramo, al quale la funzione si raccorda con continuità da sinistra, mentre il terzo ramo, per $x\to0^+$, diverge a $+\infty$ senza mai toccare tale punto. Il grafico presenta invece un punto isolato in $(\pi,0)$, corrispondente al valore assegnato per definizione in $x=\pi$, separato dal quarto ramo che in prossimità di $x=\pi$ diverge a $+\infty$.

**(e) Integrabilità**

La funzione $f$ ristretta all'intervallo $\lbrack -\pi,0\rbrack $ è continua, quindi è Riemann-integrabile su tale intervallo.

Poiché è illimitata nell'intervallo $\lbrack 0,\pi\rbrack $, $f$ non è Riemann-integrabile sull'intervallo in questione. Poiché $f$ è continua (e quindi integrabile) sugli intervalli $\lbrack a,b\rbrack \subseteq(0,\pi)$, possiamo chiederci se l'integrale improprio di $f$ su $\lbrack 0,\pi\rbrack $ converga o meno.

Per far ciò sarebbe necessario studiare separatamente gli integrali impropri

$$
\int_0^{\pi/2} f(x)\,dx \quad\text{e}\quad \int_{\pi/2}^{\pi} f(x)\,dx.
$$

Poiché $\sin(\pi-x)=\sin x$ per ogni $x\in\lbrack 0,\pi\rbrack $, si ha $f(\pi-x)=f(x)$, per ogni $x\in\lbrack 0,\pi\rbrack $. Con la sostituzione $t=\pi-x$ si ottiene allora

$$
\int_{\pi/2}^{\pi} f(x)\,dx=\int_0^{\pi/2} f(\pi-t)\,dt=\int_0^{\pi/2} f(t)\,dt,
$$

quindi i due integrali impropri hanno lo stesso comportamento ed è sufficiente studiarne uno solo.

Studiamo quindi il primo dei due, usando due diversi metodi.

**Metodo 1**

Dato che $0<\sin x<x$, per ogni $x\in(0,\pi/2)$, $\frac{1}{\sin x}>\frac{1}{x}$ e $e^{\frac{1}{\sin x}}>e^{\frac{1}{x}}$. Studiamo ora il comportamento dell'integrale improprio

$$
\int_0^{\pi/2} e^{\frac{1}{x}}\,dx.
$$

Poiché $\lim_{x\to0^+}\frac{e^{\frac{1}{x}}}{\frac{1}{x}}=\lim_{t\to+\infty}\frac{e^t}{t}=+\infty$ (con $t=1/x$), $e^{\frac{1}{x}}$ ha ordine di infinito superiore a $1/x$ rispetto a $x\to0^+$. Per il criterio del confronto asintotico, $\int_0^{\pi/2}e^{\frac{1}{x}}\,dx$ diverge a $+\infty$. Per il criterio del confronto, anche $\int_0^{\pi/2}f(x)\,dx$ diverge a $+\infty$. Per la simmetria mostrata sopra, anche $\int_{\pi/2}^{\pi}f(x)\,dx$ diverge a $+\infty$. Otteniamo quindi che $f$ non è integrabile in senso improprio nell'intervallo $(0,\pi)$.

**Metodo 2**

Prima di tutto dimostriamo che $\exp\left(\frac{1}{\sin x}\right)\sim\exp\left(\frac{1}{x}\right)$. Siccome

$$
\frac{e^{\frac{1}{\sin x}}}{e^{\frac{1}{x}}}=e^{\frac{1}{\sin x}-\frac{1}{x}}
$$

e, per $x\to0$,

$$
\frac{1}{\sin x}-\frac{1}{x}=\frac{x-\sin x}{x\sin x}=\frac{x}{6}+O(x^3),
$$

che tende a $0$ per $x\to0$, otteniamo che

$$
\lim_{x\to0}\frac{e^{\frac{1}{\sin x}}}{e^{\frac{1}{x}}}=\lim_{x\to0}e^{\frac{1}{\sin x}-\frac{1}{x}}=e^0=1.
$$

Dato che le due funzioni sono equivalenti e nello svolgimento del primo metodo abbiamo mostrato che $\int_0^{\pi/2}e^{\frac{1}{x}}\,dx$ diverge, per il criterio del confronto asintotico otteniamo che anche l'integrale dato diverge a $+\infty$.
:::
:::

:::exercise{id="X2023-3" type="esame" chapter="10" difficulty="medio"}
## Domanda
**Esame del 10 febbraio 2023**

**Esercizio 2**

(a) Sia $g : \lbrack 2,+\infty\lbrack  \to \mathbb{R}$ una funzione continua. Scrivere la definizione di integrale improprio convergente, divergente, indeterminato nel caso dell’integrale

$$
\int_2^{+\infty} g(x)\,dx.
$$

(b) Studiare il comportamento dell’integrale improprio

$$
\int_2^{+\infty} e^{-4x^3}\,dx.
$$

(c) Trovare una funzione $f : \lbrack 1,+\infty\lbrack  \to \mathbb{R}$, continua, tale che $\lim_{x\to+\infty} f(x)=+\infty$ e per cui l’integrale

$$
\int_1^{+\infty} e^{-f(x)}\,dx
$$

sia divergente.

:::solution
Poiché è continua su $\lbrack 2,+\infty)$, $g$ è integrabile su ogni intervallo $\lbrack 2,t\rbrack $, con $t\ge 2$, ed è ben definita la funzione

$$
F(t)=\int_2^t g(x)\,dx.
$$

Si dice che

- l’integrale $\int_2^{+\infty} g(x)\,dx$ è convergente se esiste
  $\displaystyle \lim_{t\to+\infty}F(t)=\lim_{t\to+\infty}\int_2^t g(x)\,dx=\ell\in\mathbb{R};$
- l’integrale $\int_2^{+\infty} g(x)\,dx$ è divergente se
  $\displaystyle \lim_{t\to+\infty}F(t)=+\infty\quad\text{oppure}\quad\lim_{t\to+\infty}F(t)=-\infty;$
- l’integrale $\int_2^{+\infty} g(x)\,dx$ è indeterminato se non esiste $\lim_{t\to+\infty}F(t)$.

Per studiare il comportamento di questo integrale possiamo utilizzare almeno due metodi diversi.

**Metodo 1.**

Osserviamo che $4x^3>x^3$ e dunque $-4x^3<-x^3$ per ogni $x\ge 2$. Data la stretta crescenza della funzione esponenziale, anche $e^{-4x^3}<e^{-x^3}$ per ogni $x\ge 2$. Inoltre, poiché $x^3\ge x$ per $x\ge 2$, si ha $e^{-x^3}\le e^{-x}$. Dunque $0<e^{-4x^3}<e^{-x}$ per $x\ge 2$. Inoltre

$$
\lim_{t\to+\infty}\int_2^t e^{-x}\,dx=\lim_{t\to+\infty}\left(-e^{-t}+e^{-2}\right)=e^{-2}.
$$

Per il criterio del confronto, dato che $0<e^{-4x^3}<e^{-x}$, anche l’integrale improprio assegnato converge.

**Metodo 2.**

Dato che l’esponenziale è un infinito di ordine superiore a qualunque potenza di $x$,

$$
\lim_{x\to+\infty}\frac{e^{-4x^3}}{1/x^3}=\lim_{x\to+\infty}\frac{x^3}{e^{4x^3}}=0.
$$

Dunque $e^{-4x^3}=o\left(1/x^3\right)$ per $x\to+\infty$; per il criterio del confronto asintotico, l’integrale assegnato converge.

Per esempio, la funzione $f(x)=\ln x$ è continua su $\lbrack 1,+\infty)$ e tale che $\lim_{x\to+\infty}\ln x=+\infty$. Inoltre

$$
e^{-f(x)}=e^{-\ln x}=\frac{1}{x}.
$$

L’integrale

$$
\int_1^{+\infty}e^{-f(x)}\,dx=\int_1^{+\infty}\frac{1}{x}\,dx
$$

è divergente.
:::
:::

:::exercise{id="X2024-1" type="esame" chapter="1" difficulty="difficile"}
## Domanda
**Esame del 25 gennaio 2024 - turno 2**

**Esercizio 1**

Si consideri la funzione $f\colon\mathbb{R}\to\mathbb{R}$ definita da

$$
f(x)=
\begin{cases}
|x+2|^{|x+2|} & x\neq -2,\\
1 & x=-2.
\end{cases}
$$

(a) Determinare i limiti agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Studiare al variare del parametro $\alpha\in\mathbb{R}$ la convergenza dell’integrale

$$
\int_{-\infty}^{-2} f(x)|x+2|^\alpha\,dx.
$$

:::solution
**Esercizio 1**

Si consideri la funzione $f\colon\mathbb{R}\to\mathbb{R}$ definita da

$$
f(x)=
\begin{cases}
|x+2|^{|x+2|} & x\neq -2,\\
1 & x=-2.
\end{cases}
$$

Poniamo $u=x+2$ e osserviamo che $f(x)=g(u)$ con $g(u)=|u|^{|u|}$ per $u\neq0$ e $g(0)=1$. Poiché $g$ dipende solo da $|u|$, si ha $g(u)=g(-u)$: il grafico di $f$ è simmetrico rispetto alla retta $x=-2$.

**(a)**

Posto $t=|x+2|$, per $x\to\pm\infty$ si ha $t\to+\infty$ e

$$
f(x)=t^{t}=e^{t\log t}\to+\infty.
$$

Quindi

$$
\lim_{x\to-\infty}f(x)=\lim_{x\to+\infty}f(x)=+\infty,
$$

e $f$ non ha asintoti orizzontali. Inoltre $f$ ha ordine di infinito superiore a $1$ in entrambe le direzioni: ad esempio, per $x\to+\infty$,

$$
\frac{f(x)}{x}=\frac{(x+2)^{x+2}}{x}\to+\infty.
$$

Analogamente, per $x\to-\infty$ si ha $f(x)/x\to-\infty$, quindi non ci sono asintoti obliqui. Poiché $f$ è continua in $\mathbb{R}$ e assume ovunque valori finiti, non ci sono asintoti verticali.

**(b)**

Per $x\neq-2$, scrivendo $f(x)=e^{|x+2|\log|x+2|}$, $f$ è composizione e prodotto di funzioni derivabili, quindi continua e derivabile, con

$$
f'(x)=f(x)\bigl(1+\log|x+2|\bigr)\operatorname{sgn}(x+2).
$$

In $x=-2$, poiché $t\log t\to0$ per $t\to0^+$, si ha $\lim_{x\to-2}f(x)=e^0=1=f(-2)$, quindi $f$ è continua anche in $-2$.

Per la derivabilità in $-2$ calcoliamo separatamente i due rapporti incrementali. Con $t=x+2>0$ (limite da destra):

$$
\lim_{x\to-2^+}\frac{f(x)-1}{x+2}=\lim_{t\to0^+}\frac{t^{t}-1}{t}=\lim_{t\to0^+}\log t=-\infty,
$$

avendo usato $t^t-1=e^{t\log t}-1\sim t\log t$ per $t\to0^+$. Con $t=-(x+2)>0$ (limite da sinistra):

$$
\lim_{x\to-2^-}\frac{f(x)-1}{x+2}=\lim_{t\to0^+}\frac{t^{t}-1}{-t}=-\lim_{t\to0^+}\log t=+\infty.
$$

Dunque $f$ non è derivabile in $-2$: la derivata sinistra è $+\infty$ e quella destra è $-\infty$, per cui $x=-2$ è un punto di massimo locale con cuspide.

**(c)**

Per $x>-2$ si ha $f'(x)=f(x)(1+\log(x+2))$, che si annulla in $x=-2+\frac1e$, è negativa per $-2<x<-2+\frac1e$ e positiva per $x>-2+\frac1e$.

Per $x<-2$ si ha $f'(x)=-f(x)\bigl(1+\log(-(x+2))\bigr)$, che si annulla in $x=-2-\frac1e$, è positiva per $-2-\frac1e<x<-2$ e negativa per $x<-2-\frac1e$.

Quindi $f$ è:

- strettamente decrescente in $\left(-\infty,-2-\frac1e\right\rbrack $;
- strettamente crescente in $\left\lbrack -2-\frac1e,-2\right\rbrack $;
- strettamente decrescente in $\left\lbrack -2,-2+\frac1e\right\rbrack $;
- strettamente crescente in $\left\lbrack -2+\frac1e,+\infty\right)$.

Di conseguenza $x=-2$ è punto di massimo locale (con cuspide), con $f(-2)=1$, mentre $x=-2\pm\frac1e$ sono punti di minimo locale, con

$$
f\left(-2\pm\frac1e\right)=\left(\frac1e\right)^{1/e}=e^{-1/e}.
$$

Poiché $f(x)\to+\infty$ per $x\to\pm\infty$ e i due minimi locali hanno lo stesso valore $e^{-1/e}$, che è il più piccolo valore assunto da $f$ su tutto $\mathbb{R}$, i due punti $x=-2\pm\frac1e$ sono punti di minimo globale. Non esiste massimo globale, perché $f$ è illimitata superiormente; in particolare $x=-2$ è massimo solo locale.

**(d)**

Il grafico qualitativo di $f$ è simmetrico rispetto alla retta $x=-2$. Partendo da $x\to-\infty$, $f$ decresce da $+\infty$ fino al minimo globale $\left(-2-\frac1e,e^{-1/e}\right)$, poi cresce fino alla cuspide di massimo locale $(-2,1)$, poi decresce fino all’altro minimo globale $\left(-2+\frac1e,e^{-1/e}\right)$ e infine cresce verso $+\infty$ per $x\to+\infty$. Il grafico passa inoltre per $(0,4)$.

**(e)**

La funzione integranda è continua su $\lbrack a,b\rbrack $ per ogni $a<b<-2$, quindi è ivi integrabile secondo Riemann; l’integrale è improprio in $-\infty$ e, eventualmente, anche in $-2$.

Operiamo la sostituzione $t=-(x+2)$, cosicché $t>0$ per $x<-2$, $|x+2|=t$ e $f(x)=t^t$. Si ottiene

$$
\int_{-\infty}^{-2} f(x)|x+2|^\alpha\,dx=\int_0^{+\infty} t^{t+\alpha}\,dt.
$$

Per $t\to+\infty$, qualunque sia $\alpha\in\mathbb{R}$,

$$
t^{t+\alpha}=e^{(t+\alpha)\log t}\to+\infty.
$$

In particolare, per $t$ sufficientemente grande l’integranda è almeno $1$. Pertanto l’integrale diverge a $+\infty$, poiché la sua coda è maggiorata inferiormente da una funzione con integrale divergente:

$$
\int_T^{+\infty}t^{t+\alpha}\,dt\geq\int_T^{+\infty}1\,dt=+\infty
$$

per un opportuno $T>0$. Questa conclusione vale per ogni $\alpha\in\mathbb{R}$, indipendentemente dal comportamento in $t=0^+$, dove $t^{t+\alpha}\sim t^\alpha$ sarebbe integrabile se e solo se $\alpha>-1$.

In conclusione, l’integrale

$$
\int_{-\infty}^{-2} f(x)|x+2|^\alpha\,dx
$$

non converge per nessun valore di $\alpha\in\mathbb{R}$.
:::
:::

:::exercise{id="X2024-2" type="esame" chapter="11" difficulty="medio"}
## Domanda
**Esame del 25 gennaio 2024 - turno 2**

**Esercizio 2**

(a) Classificare l’equazione differenziale

$$
y'=y\cdot(2-y).
$$

(b) Dimostrare che se $y\colon\mathbb{R}\to\mathbb{R}$ è una soluzione dell’equazione differenziale assegnata e $k\in\mathbb{R}$ è una costante fissata, allora anche la funzione $y_k\colon\mathbb{R}\to\mathbb{R}$ data da $y_k(x)=y(x+k)$ è soluzione della stessa equazione differenziale.

(c) Determinare se esistono valori $y_0\in\lbrack 0,+\infty)$ tali che il seguente problema di Cauchy abbia una soluzione strettamente crescente nel suo dominio:

$$
\begin{cases}
y'=y\cdot(2-y),\\
y(0)=y_0.
\end{cases}
$$

:::solution
**Esercizio 2**

(a) È un’equazione differenziale ordinaria autonoma, non lineare, del primo ordine e a variabili separabili.

(b) Per ogni $x\in\mathbb{R}$, usando l’autonomia dell’equazione, si ha

$$
\begin{aligned}
y_k'(x)&=y'(x+k)=y(x+k)\bigl(2-y(x+k)\bigr)\\
&=y_k(x)\bigl(2-y_k(x)\bigr).
\end{aligned}
$$

Quindi $y_k$ è soluzione della stessa equazione differenziale.

(c) Le soluzioni costanti $y(x)=0$ e $y(x)=2$ non sono strettamente crescenti. Per ogni $y_0\in(0,2)$, la soluzione del problema di Cauchy è

$$
y(x)=\frac{2y_0}{y_0+(2-y_0)e^{-2x}}.
$$

Il denominatore è positivo per ogni $x\in\mathbb{R}$, e $y'(x)=y(x)(2-y(x))>0$; dunque la soluzione è definita e strettamente crescente su $\mathbb{R}$. Se $y_0>2$, la soluzione è strettamente decrescente; per $y_0=0$ o $y_0=2$ è costante. Pertanto i valori richiesti sono esattamente $y_0\in(0,2)$.
:::
:::

:::exercise{id="X2024-3" type="esame" chapter="8" difficulty="difficile"}
## Domanda
**Esame del 31 gennaio 2024 - turno 1**

**Esercizio 1.** Si consideri la funzione $f:\operatorname{dom} f\subseteq\mathbb{R}\to\mathbb{R}$ definita da

$$
f(x)=\frac{x^3}{\sqrt{|x^4-1|}}.
$$

(a) Determinare il dominio di definizione di $f$, eventuali proprietà di simmetria, i limiti agli estremi di $\operatorname{dom} f$ e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità in $\operatorname{dom}(f)$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Dire per quali valori di $\alpha\in\mathbb{R}$ l'integrale

$$
\int_{-1}^{1}f(x)(1-x^2)^\alpha\,dx
$$
converge, giustificando la risposta.

:::solution
**Esercizio 1.**

Si consideri la funzione $f:\operatorname{dom} f\subseteq\mathbb{R}\to\mathbb{R}$ definita da $f(x)=\dfrac{x^3}{\sqrt{|x^4-1|}}$.

**(a)**

La condizione di esistenza della frazione è che il denominatore $\sqrt{|x^4-1|}$ non si annulli, mentre quella della radice quadrata è che l'argomento sia non negativo. Qui l'argomento della radice quadrata è un valore assoluto, quindi è senz'altro non negativo, e l'unica condizione rimanente è $x^4-1\ne 0$, cioè $x\ne\pm1$. In definitiva $\operatorname{dom} f=\mathbb{R}\setminus\{-1,1\}=(-\infty,-1)\cup(-1,1)\cup(1,+\infty)$.

Si ha poi

$$
f(-x)=\frac{(-x)^3}{\sqrt{|(-x)^4-1|}}=\frac{-x^3}{\sqrt{|x^4-1|}}=-f(x)
$$

per ogni $x\in\operatorname{dom} f$, dunque $f$ è dispari.

Studiamo ora i limiti agli estremi del dominio. Si ha

$$
\lim_{x\to\pm\infty}f(x)=\lim_{x\to\pm\infty}\frac{x^3}{\sqrt{x^4}\sqrt{1-\frac{1}{x^4}}}=\lim_{x\to\pm\infty}\frac{x}{\sqrt{1-\frac{1}{x^4}}}=\pm\infty,
$$

$$
\lim_{x\to1}f(x)=\lim_{x\to1}\frac{1}{\sqrt{|x-1|}}\cdot\frac{x^3}{\sqrt{|(x+1)(x^2+1)|}}=+\infty,
$$

$$
\lim_{x\to-1}f(x)=\lim_{x\to-1}\frac{1}{\sqrt{|x+1|}}\cdot\frac{x^3}{\sqrt{|(x-1)(x^2+1)|}}=-\infty,
$$

per l'algebra dei limiti.

Dai limiti sopra calcolati deduciamo in particolare che $f$ ha due asintoti verticali, specificamente $x=1$ e $x=-1$, e che non ha asintoti orizzontali. Inoltre

$$
f(x)=x(1-1/x^4)^{-1/2}=x(1+1/2x^4+o(1/x^4))=x+o(1)
$$

per $x\to\pm\infty$, pertanto la retta $y=x$ è un asintoto obliquo sinistro e destro per $f$.

**(b)**

La funzione è il rapporto della funzione continua e derivabile $x^3$ con la funzione $\sqrt{|x^4-1|}$, che è composizione delle funzioni continue $g(t)=|t|$ e $h(s)=s^4-1$ con la funzione radice quadrata. Il denominatore è derivabile nei punti del dominio, poiché lì $x^4-1\ne0$. Pertanto $f$ è continua e derivabile in $\operatorname{dom} f=\mathbb{R}\setminus\{-1,1\}$.

**(c)**

Studiamo il segno della derivata prima $f'(x)$. Si ha, per ogni $x\in\operatorname{dom} f'=\mathbb{R}\setminus\{-1,1\}$,

$$
\begin{aligned}
f'(x)&=\frac{3x^2|x^4-1|^{1/2}-x^3\cdot\frac{1}{2}|x^4-1|^{-1/2}\operatorname{sgn}(x^4-1)(4x^3)}{|x^4-1|}\\
&=\frac{3x^2(x^4-1)-x^3(2x^3)}{(x^4-1)|x^4-1|^{1/2}}=\frac{x^2(x^4-3)}{(x^4-1)|x^4-1|^{1/2}}.
\end{aligned}
$$

da cui si deduce che

$$
\begin{aligned}
f'(x)>0&\iff x\in(-\infty,-\sqrt[4]{3})\cup(-1,0)\cup(0,1)\cup(\sqrt[4]{3},+\infty),\\
f'(x)=0&\iff x\in\{-\sqrt[4]{3},0,\sqrt[4]{3}\},\\
f'(x)<0&\iff x\in(-\sqrt[4]{3},-1)\cup(1,\sqrt[4]{3}).
\end{aligned}
$$

Pertanto $f$ è strettamente crescente sugli intervalli $(-\infty,-\sqrt[4]{3}\rbrack $, $(-1,1)$, $\lbrack \sqrt[4]{3},+\infty)$, e strettamente decrescente sugli intervalli $\lbrack -\sqrt[4]{3},-1)$, $(1,\sqrt[4]{3}\rbrack $. In $x=-\sqrt[4]{3}$ la derivata passa da positiva a negativa, dunque $x=-\sqrt[4]{3}$ è l'unico punto di massimo locale per $f$, con

$$
f(-\sqrt[4]{3})=\frac{-3^{3/4}}{\sqrt{|3-1|}}=-\frac{3^{3/4}}{\sqrt2}.
$$

In $x=\sqrt[4]{3}$ la derivata passa invece da negativa a positiva, dunque $x=\sqrt[4]{3}$ è l'unico punto di minimo locale per $f$, con

$$
f(\sqrt[4]{3})=\frac{3^{3/4}}{\sqrt2}.
$$

Siccome poi $\lim_{x\to\pm\infty}f(x)=\pm\infty$, sappiamo che $\inf f=-\infty$ e $\sup f=+\infty$, dunque $f$ non ha punti di massimo o minimo globale.

**(d)**

Il grafico qualitativo ha asintoti verticali $x=-1$ e $x=1$, un massimo locale in $x=-\sqrt[4]{3}$ di valore $-\frac{3^{3/4}}{\sqrt2}$, un minimo locale in $x=\sqrt[4]{3}$ di valore $\frac{3^{3/4}}{\sqrt2}$ e passa per l'origine. La funzione è dispari, ed è crescente su $(-\infty,-\sqrt[4]{3}\rbrack $, $(-1,1)$ e $\lbrack \sqrt[4]{3},+\infty)$, decrescente su $\lbrack -\sqrt[4]{3},-1)$ e $(1,\sqrt[4]{3}\rbrack $.

**(e)**

Osserviamo che $f$ è continua e dispari in $(-1,1)$, pertanto basta discutere il comportamento dell'integrale nell'intervallo $\lbrack 0,1\rbrack $. Per $x\to1^-$ abbiamo

$$
\begin{aligned}
g(x)&=f(x)(1-x^2)^\alpha=\frac{x^3(1-x^2)^\alpha}{\sqrt{1-x^4}}=\frac{x^3(1+x)^\alpha(1-x)^\alpha}{\sqrt{1-x}\cdot\sqrt{(x+1)(x^2+1)}}\\
&\sim\frac{2^\alpha(1-x)^\alpha}{2(1-x)^{\frac12}}=\frac{2^{\alpha-1}}{(1-x)^{\frac12-\alpha}}.
\end{aligned}
$$

Dobbiamo considerare vari casi:

- Se $\frac12-\alpha\leq0$, cioè se $\alpha\geq\frac12$, la funzione $g$ non è definita in $x=1$, poiché $f$ non lo è. Tuttavia $\lim_{x\to1^-}g(x)=\lim_{x\to1^-}\dfrac{2^{\alpha-1}}{(1-x)^{\frac12-\alpha}}$ esiste finito, dunque $x=1$ è una singolarità eliminabile per $g$: estendendo $g$ con continuità in $x=1$ si ottiene una funzione continua su $\lbrack 0,1\rbrack $, e l'integrale $\int_{-1}^{1}g(x)\,dx$ converge a un numero reale.
- Se $\frac12-\alpha>0$, $g$ è un infinito di ordine $\frac12-\alpha$ rispetto a $1-x$, per $x\to1^-$, perciò l'integrale è improprio. Applicando i criteri del confronto asintotico si ha che:
  - se $0<\frac12-\alpha<1$, cioè se $\alpha\in(-\frac12,\frac12)$, l'integrale converge;
  - se $\frac12-\alpha\geq1$, cioè se $\alpha\leq-\frac12$, l'integrale diverge.

In conclusione, l'integrale converge per $\alpha>-\frac12$.
:::
:::

:::exercise{id="X2024-4" type="esame" chapter="11" difficulty="medio"}
## Domanda
**Esame del 31 gennaio 2024 - turno 1 - versione 1**

**Esercizio 2**

(a) Dare la definizione di soluzione del problema di Cauchy per un’equazione differenziale lineare del secondo ordine a coefficienti costanti.

(b) Verificare che la funzione $\varphi(x)=\sin^2 x$ è soluzione su $\mathbb{R}$ dell’equazione differenziale

$$y''+2y=2-2\sin^2 x.$$

(c) Scrivere la soluzione generale dell’equazione su $\mathbb{R}$.

:::solution
**Soluzione**

(a) Una soluzione del problema di Cauchy associato all’equazione differenziale lineare del secondo ordine

$$y''+ay'+by=g(x)$$

è una funzione $\varphi\in C^2(I)$ che soddisfa, per ogni $x\in I$,

$$\varphi''(x)+a\varphi'(x)+b\varphi(x)=g(x),$$

e i dati iniziali $\varphi(x_0)=\alpha$ e $\varphi'(x_0)=\beta$, dove $x_0\in I$, $\alpha,\beta\in\mathbb{R}$, $a,b\in\mathbb{R}$ e $g\in C^0(I)$.

(b) Per $\varphi(x)=\sin^2 x$ si ha

$$\varphi''(x)=2-4\sin^2 x.$$

Quindi

$$\varphi''(x)+2\varphi(x)=2-4\sin^2 x+2\sin^2 x=2-2\sin^2 x,$$

e la funzione verifica l’equazione su $\mathbb{R}$.

(c) L’equazione omogenea associata è $y''+2y=0$, la cui soluzione generale è $C_1\cos(\sqrt{2}x)+C_2\sin(\sqrt{2}x)$. Poiché $\sin^2 x$ è una soluzione particolare dell’equazione completa, la soluzione generale è

$$y(x)=\sin^2 x+C_1\cos(\sqrt{2}x)+C_2\sin(\sqrt{2}x),\qquad C_1,C_2\in\mathbb{R}.$$
:::
:::

:::exercise{id="X2024-5" type="esame" chapter="11" difficulty="medio"}
## Domanda
**Esame del 31 gennaio 2024 - turno 1 - versione 3**

**Esercizio 2**

(a) Dare la definizione di soluzione del problema di Cauchy per un’equazione differenziale lineare del secondo ordine a coefficienti costanti.

(b) Verificare che la funzione $\varphi(x)=\sinh^2 x$ è soluzione su $\mathbb{R}$ dell’equazione differenziale

$$
y''-2y=2+2\sinh^2 x.
$$

(c) Scrivere la soluzione generale dell’equazione su $\mathbb{R}$.

:::solution
**Soluzione**

(a) Una soluzione del problema di Cauchy è una funzione di classe $C^2$ nell’intervallo considerato che soddisfa l’equazione differenziale e i valori iniziali assegnati per $y$ e $y'$.

(b) Per $\varphi(x)=\sinh^2 x$ si ha

$$
\varphi'(x)=2\sinh x\cosh x,
\qquad
\varphi''(x)=2+4\sinh^2 x.
$$

Quindi

$$
\varphi''(x)-2\varphi(x)=2+4\sinh^2 x-2\sinh^2 x=2+2\sinh^2 x,
$$

che coincide con il secondo membro dell’equazione.

(c) L’equazione omogenea associata è

$$
y''-2y=0.
$$

La sua equazione caratteristica è $\lambda^2-2=0$, con radici $\lambda=\pm\sqrt{2}$. La soluzione generale dell’equazione omogenea è $y_0(x)=C_1e^{\sqrt{2}x}+C_2e^{-\sqrt{2}x}$, con $C_1,C_2\in\mathbb{R}$. Poiché $\sinh^2 x$ è una soluzione particolare, la soluzione generale dell’equazione è

$$
y(x)=C_1e^{\sqrt{2}x}+C_2e^{-\sqrt{2}x}+\sinh^2 x.
$$
:::
:::

:::exercise{id="X2024-6" type="esame" chapter="11" difficulty="medio"}
## Domanda
**Esame del 31 gennaio 2024 - turno 1**

**Esercizio 2**

(a) Dare la definizione di soluzione del problema di Cauchy per un’equazione differenziale lineare del secondo ordine a coefficienti costanti.

(b) Verificare che la funzione $\varphi(x)=\sin^2 x$ è soluzione su $\mathbb{R}$ dell’equazione differenziale

$$
y''+2y=2-2\sin^2 x.
$$

(c) Scrivere la soluzione generale dell’equazione su $\mathbb{R}$.

:::solution
**(a)**

Il problema di Cauchy per un’equazione differenziale lineare del secondo ordine a coefficienti costanti si formula in questo modo:

$$
\begin{cases}
y''+ay'+by=f(x),\\
y(x_0)=y_0,\\
y'(x_0)=y_1,
\end{cases}
$$

con $a,b\in\mathbb{R}$, $f:I\subseteq\mathbb{R}\to\mathbb{R}$ definita su un intervallo aperto $I$ e $x_0\in I$.

Una funzione $\varphi(x)$ è soluzione su un intervallo aperto $J\subseteq I$, con $x_0\in J$, del problema di Cauchy se $\varphi$ è derivabile due volte su $J$ e verifica

$$
\begin{cases}
\varphi''(x)+a\varphi'(x)+b\varphi(x)=f(x) & \forall x\in J,\\
\varphi(x_0)=y_0,\\
\varphi'(x_0)=y_1.
\end{cases}
$$

**(b)**

Si ha

$$
\begin{aligned}
\varphi'(x)&=2\sin x\cos x,\\
\varphi''(x)&=2\cos^2 x-2\sin^2 x.
\end{aligned}
$$

Sostituendo nell’equazione differenziale assegnata si ha

$$
2\cos^2 x-2\sin^2 x+2\sin^2 x=2\cos^2 x=2(1-\sin^2 x),\qquad \forall x\in\mathbb{R},
$$

da cui si conclude che $\varphi(x)=\sin^2 x$ è soluzione su $\mathbb{R}$ dell’equazione differenziale.

**(c)**

La soluzione generale dell’equazione su $\mathbb{R}$ è somma della soluzione particolare individuata al punto precedente e della soluzione generale $y=\psi(x)$ dell’equazione omogenea associata

$$
y''+2y=0.
$$

Quest’ultima si risolve determinando le soluzioni del polinomio caratteristico

$$
\lambda^2+2=0,
$$

ovvero $\lambda_{1,2}=\pm\sqrt{2}i$ ed esprimendo le soluzioni nella forma

$$
c_1\cos(\sqrt{2}x)+c_2\sin(\sqrt{2}x),\qquad \forall c_1,c_2\in\mathbb{R}.
$$

Pertanto, le soluzioni dell’equazione completa assegnata sono

$$
\sin^2 x+c_1\cos(\sqrt{2}x)+c_2\sin(\sqrt{2}x),\qquad \forall c_1,c_2\in\mathbb{R}.
$$
:::
:::

:::exercise{id="X2024-7" type="esame" chapter="11" difficulty="medio"}
## Domanda
**Esame del 31 gennaio 2024 - turno 1 - versione 2**

**Esercizio 2**

**(a)** Dare la definizione di soluzione del problema di Cauchy per un’equazione differenziale lineare del secondo ordine a coefficienti costanti.

**(b)** Verificare che la funzione $\varphi(x)=\cos^2 x$ è soluzione su $\mathbb{R}$ dell’equazione differenziale

$$y''+2y=2-2\cos^2 x.$$

**(c)** Scrivere la soluzione generale dell’equazione su $\mathbb{R}$.

:::solution
**Soluzione**

**(a)** Una soluzione del problema di Cauchy per un’equazione differenziale lineare del secondo ordine a coefficienti costanti è una funzione $y$ due volte derivabile nell’intervallo considerato, che soddisfa l’equazione differenziale e le condizioni iniziali assegnate.

**(b)** Per $\varphi(x)=\cos^2 x$ si ha $\varphi''(x)=2-4\cos^2 x$. Pertanto

$$\varphi''(x)+2\varphi(x)=2-2\cos^2 x,$$

quindi $\varphi$ è soluzione su $\mathbb{R}$.

**(c)** La soluzione generale su $\mathbb{R}$ è

$$y(x)=c_1\cos(\sqrt{2}\,x)+c_2\sin(\sqrt{2}\,x)+\cos^2 x,$$

con $c_1,c_2\in\mathbb{R}$.
:::
:::

:::exercise{id="X2024-8" type="esame" chapter="11" difficulty="medio"}
## Domanda
**Esame del 31 gennaio 2024 - turno 1 - versione 4**

**Esercizio 2**

(a) Dare la definizione di soluzione del problema di Cauchy per un’equazione differenziale lineare del secondo ordine a coefficienti costanti.

(b) Verificare che la funzione $\varphi(x)=\cosh^2 x$ è soluzione su $\mathbb{R}$ dell’equazione differenziale

$$y''-2y=2\cosh^2 x-2.$$

(c) Scrivere la soluzione generale dell’equazione su $\mathbb{R}$.

:::solution
**Esercizio 2**

(a) Una soluzione del problema di Cauchy per un’equazione differenziale lineare del secondo ordine a coefficienti costanti è una funzione di classe $C^2$ che soddisfa l’equazione differenziale e le condizioni iniziali assegnate.

(b) Per $\varphi(x)=\cosh^2 x$ si ha

$$\varphi'(x)=2\cosh x\sinh x=\sinh(2x),$$

$$\varphi''(x)=2\cosh(2x)=4\cosh^2 x-2.$$

Quindi

$$\varphi''(x)-2\varphi(x)=2\cosh^2 x-2,$$

perciò $\varphi$ è soluzione su $\mathbb{R}$.

(c) L’equazione omogenea associata ha equazione caratteristica $r^2-2=0$, con radici $r=\pm\sqrt{2}$. La soluzione generale dell’equazione è

$$y(x)=C_1e^{\sqrt{2}x}+C_2e^{-\sqrt{2}x}+\cosh^2 x,$$

con $C_1,C_2\in\mathbb{R}$.
:::
:::

:::exercise{id="X2024-9" type="esame" chapter="7" difficulty="facile"}
## Domanda
**Esame del 16 febbraio 2024**

**Esercizio 2**

(a) Enunciare il Teorema di Rolle.

(b) Determinare se la funzione $g : \lbrack -2,2\rbrack  \to \mathbb{R}$ data da $g(x) = \sqrt{\cosh(x)-1}$ ha punti stazionari.

(c) Determinare se la funzione $g$ definita in (b) soddisfa le ipotesi del Teorema di Rolle.

:::solution
**Esercizio 2.**

(a) Sia $g : \lbrack a,b\rbrack  \to \mathbb{R}$, dove $a<b$ e $\lbrack a,b\rbrack  \subseteq \mathbb{R}$ è un intervallo chiuso e limitato. Supponiamo che $g$ sia continua su $\lbrack a,b\rbrack $ e derivabile su $(a,b)$. Se, inoltre, $g(a)=g(b)$, allora esiste $c \in (a,b)$ tale che $g'(c)=0$.

(b) La funzione $g$ è ben definita e continua su tutto il suo dominio, perché $\cosh(x) \ge 1$ per ogni $x \in \lbrack -2,2\rbrack $. È derivabile nei punti $x \in (-2,2) \setminus \{0\}$, dove

$$
g'(x)=\frac{\sinh(x)}{2\sqrt{\cosh(x)-1}}.
$$

Per $x \to 0$, gli sviluppi di $\sinh(x)$ e $\cosh(x)$ danno $\sinh(x)=x(1+o(1))$ e $\cosh(x)-1=\frac{x^2}{2}(1+o(1))$. Pertanto

$$
g'(x)=\frac{x(1+o(1))}{2\sqrt{\frac{x^2}{2}(1+o(1))}}=\frac{1}{\sqrt{2}}\operatorname{sgn}(x)(1+o(1)).
$$

Ne segue che

$$
\lim_{x\to 0^-}g'(x)=-\frac{1}{\sqrt{2}} \ne \lim_{x\to 0^+}g'(x)=\frac{1}{\sqrt{2}}.
$$

Poiché $g$ è continua in $0$ e derivabile altrove, dal teorema del tappabuchi segue che non è derivabile in $0$.

Per ogni $x \in (-2,2) \setminus \{0\}$, la formula della derivata mostra che $g'(x) \ne 0$. Inoltre, in $0$ la funzione non è derivabile. Dunque $g$ non ha punti stazionari nell’interno del dominio.

(c) La funzione $g$ non soddisfa le ipotesi del Teorema di Rolle, perché non è derivabile in $0 \in (-2,2)$. Inoltre, $g(-2)=g(2)$, poiché $g$ è pari.
:::
:::

:::exercise{id="X2024-10" type="esame" chapter="7" difficulty="facile"}
## Domanda
**Esame del 16 febbraio 2024 - turno 1 - versione 2**

**Esercizio 2**

(a) Enunciare il teorema di Rolle.

(b) Determinare se la funzione $g : \lbrack -1,1\rbrack  \to \mathbb{R}$ data da

$$
g(x) = \sqrt{\cosh(2x)-1}
$$

ha punti stazionari.

(c) Determinare se la funzione $g$ definita in (b) soddisfa le ipotesi del teorema di Rolle.

:::solution
**Teorema di Rolle**

Sia $f : \lbrack a,b\rbrack  \to \mathbb{R}$ continua in $\lbrack a,b\rbrack $, derivabile in $(a,b)$ e tale che $f(a)=f(b)$. Allora esiste almeno un punto $c \in (a,b)$ tale che $f'(c)=0$.

**Punti stazionari**

Per $x \in \lbrack -1,1\rbrack \setminus\{0\}$,

$$
g'(x)=\frac{\sinh(2x)}{\sqrt{\cosh(2x)-1}}\ne 0.
$$

La derivata destra in $0$ è

$$
\begin{aligned}
g'_+(0) &\overset{\mathrm{def}}{=} \lim_{x\to0^+}\frac{g(x)-g(0)}{x}
=\lim_{x\to0^+}\frac{\sqrt{\cosh(2x)-1}}{x} \\
&=\lim_{x\to0^+}\frac{\sqrt{2x^2+o(x^2)}}{x}
=\lim_{x\to0^+}\frac{\sqrt{2}\,|x|\sqrt{1+o(1)}}{x}
=\sqrt{2}.
\end{aligned}
$$

La derivata sinistra in $0$ è

$$
\begin{aligned}
g'_-(0) &\overset{\mathrm{def}}{=} \lim_{x\to0^-}\frac{g(x)-g(0)}{x}
=\lim_{x\to0^-}\frac{\sqrt{\cosh(2x)-1}}{x} \\
&=\lim_{x\to0^-}\frac{\sqrt{2x^2+o(x^2)}}{x}
=\lim_{x\to0^-}\frac{\sqrt{2}\,|x|\sqrt{1+o(1)}}{x}
=-\sqrt{2}.
\end{aligned}
$$

Poiché $g'_-(0)=-\sqrt{2}\ne\sqrt{2}=g'_+(0)$, la funzione $g$ non è derivabile in $x=0$ e quindi non ha punti stazionari.

**Ipotesi del teorema di Rolle**

No: $g$ non è derivabile in $x=0$, che appartiene all’intervallo aperto $(-1,1)$.
:::
:::

:::exercise{id="X2024-11" type="esame" chapter="7" difficulty="facile"}
## Domanda
**Esame del 16 febbraio 2024 - turno 1 - versione 1**

**Esercizio 2**

(a) Enunciare il teorema di Rolle.

(b) Determinare se la funzione $g:\lbrack -2,2\rbrack \to\mathbb{R}$ data da

$$g(x)=\sqrt{\cosh(x)-1}$$

ha punti stazionari.

(c) Determinare se la funzione $g$ definita in (b) soddisfa le ipotesi del teorema di Rolle.

:::solution
Le ipotesi del teorema di Rolle sono soddisfatte se una funzione è continua su un intervallo chiuso $\lbrack a,b\rbrack $, derivabile nell'intervallo aperto $(a,b)$ e assume valori uguali agli estremi, cioè $f(a)=f(b)$. In tal caso esiste almeno un punto $c\in(a,b)$ tale che $f'(c)=0$.

(b) Si ha $g(0)=0$ e, per $x\ne 0$,

$$g'(x)=\frac{\sinh x}{2\sqrt{\cosh x-1}}.$$

La derivata è negativa per $x<0$ e positiva per $x>0$. In $x=0$ la funzione non è derivabile: usando $\cosh x-1\sim \frac{x^2}{2}$ per $x\to 0$, si ottiene $\sqrt{\cosh x-1}\sim \frac{|x|}{\sqrt{2}}$, da cui

$$g'(x)\sim \frac{x}{2\cdot\frac{|x|}{\sqrt{2}}}=\frac{\operatorname{sign}(x)}{\sqrt{2}}.$$

I limiti del rapporto incrementale in $0$ valgono quindi $-\frac{1}{\sqrt{2}}$ da sinistra e $\frac{1}{\sqrt{2}}$ da destra. Quindi $g$ non ha punti stazionari.

(c) La funzione è continua su $\lbrack -2,2\rbrack $ e $g(-2)=g(2)$, ma non è derivabile in $0\in(-2,2)$. Non soddisfa quindi tutte le ipotesi del teorema di Rolle.
:::
:::

:::exercise{id="X2024-12" type="esame" chapter="7" difficulty="medio"}
## Domanda
**Esame del 16 febbraio 2024 - turno 1 - versione 3**

**Esercizio 2**

(a) Enunciare il teorema di Rolle.

(b) Determinare se la funzione $g : \lbrack -\pi/2,\pi/2\rbrack  \to \mathbb{R}$ data da

$$g(x)=\sqrt{1-\cos(x)}$$

ha punti stazionari.

(c) Determinare se la funzione $g$ definita in (b) soddisfa le ipotesi del teorema di Rolle.

:::solution
**Soluzione**

(a) Siano $a,b\in\mathbb{R}$ con $a<b$ e sia $f : \lbrack a,b\rbrack  \to \mathbb{R}$ continua in $\lbrack a,b\rbrack $, derivabile in $(a,b)$ e tale che $f(a)=f(b)$. Allora esiste $c\in(a,b)$ tale che $f'(c)=0$.

(b)

$$g'(x)=\frac{\sin x}{2\sqrt{1-\cos x}}\ne 0 \qquad \forall x\in\left(-\frac{\pi}{2},\frac{\pi}{2}\right)\setminus\{0\}$$

$$g'_+(0)\overset{\mathrm{def}}{=}\lim_{x\to0^+}\frac{g(x)-g(0)}{x}=\lim_{x\to0^+}\frac{\sqrt{1-\cos x}}{x}$$

$$=\lim_{x\to0^+}\frac{\sqrt{\frac12x^2+o(x^2)}}{x}=\lim_{x\to0^+}\frac{1}{\sqrt2}\frac{|x|}{x}\sqrt{1+o(1)}$$

$$=\lim_{x\to0^+}\frac{1}{\sqrt2}(\operatorname{sign}x)(1+o(1))=+\frac{1}{\sqrt2}$$

$$g'_-(0)\overset{\mathrm{def}}{=}\lim_{x\to0^-}\frac{g(x)-g(0)}{x}=\lim_{x\to0^-}\frac{\sqrt{1-\cos x}}{x}$$

$$=\lim_{x\to0^-}\frac{1}{\sqrt2}\frac{|x|}{x}\sqrt{1+o(1)}=\lim_{x\to0^-}\frac{1}{\sqrt2}(\operatorname{sign}x)(1+o(1))=-\frac{1}{\sqrt2}$$

Poiché $g'_+(0)=\frac{1}{\sqrt2}\ne -\frac{1}{\sqrt2}=g'_-(0)$, le derivate laterali in $0$ sono diverse, quindi

$$\Rightarrow g\ \text{non è derivabile in }x=0$$

$$\Rightarrow g\ \text{non ha p.t. stazionari}$$

(c) NO, $0\in\left(-\frac{\pi}{2},\frac{\pi}{2}\right)$ e in $x=0$ $g$ non è derivabile.
:::
:::

:::exercise{id="X2024-13" type="esame" chapter="11" difficulty="medio"}
## Domanda
**Esame del 11 aprile 2024**

**Esercizio 2**

Si consideri l’equazione differenziale

$$y''+5y=0.$$

(a) Dire cosa significa che una funzione $y=f(x)$ è soluzione dell’equazione data su un intervallo aperto $I\subseteq\mathbb{R}$.

(b) Dimostrare che se $f_1(x)$ e $f_2(x)$ sono due soluzioni dell’equazione su $\mathbb{R}$ allora la funzione $2f_1(x)-3f_2(x)$ è soluzione dell’equazione su $\mathbb{R}$.

(c) Determinare per quali valori di $\alpha\in\mathbb{R}$ le soluzioni dell’equazione

$$y''+5y=\frac{1}{3}e^{\alpha x}$$

sono limitate su $\mathbb{R}$.

:::solution
**Esercizio 2**

(a) Una funzione $f$ è soluzione dell’equazione su un intervallo aperto $I$ se è due volte derivabile su $I$ e soddisfa $f''(x)+5f(x)=0$ per ogni $x\in I$.

(b) Poiché $f_1$ e $f_2$ sono soluzioni, $f_1''+5f_1=0$ e $f_2''+5f_2=0$ su $\mathbb{R}$. Per linearità della derivata seconda,

$$
\begin{aligned}
(2f_1-3f_2)''+5(2f_1-3f_2)&=2f_1''-3f_2''+10f_1-15f_2\\
&=2(f_1''+5f_1)-3(f_2''+5f_2)=0.
\end{aligned}
$$

Quindi $2f_1-3f_2$ è soluzione su $\mathbb{R}$.

(c) L’equazione omogenea associata ha equazione caratteristica $\lambda^2+5=0$, quindi la sua soluzione generale è

$$y_h=c_1\cos(\sqrt{5}x)+c_2\sin(\sqrt{5}x).$$

Cerchiamo una soluzione particolare nella forma $y_p=Ae^{\alpha x}$. Sostituendo nell’equazione si ottiene

$$A(\alpha^2+5)e^{\alpha x}=\frac{1}{3}e^{\alpha x},$$

da cui $A=\frac{1}{3(\alpha^2+5)}$. Questo coefficiente è definito e non nullo per ogni $\alpha\in\mathbb{R}$. Pertanto la soluzione generale è

$$y=c_1\cos(\sqrt{5}x)+c_2\sin(\sqrt{5}x)+\frac{e^{\alpha x}}{3(\alpha^2+5)}.$$

Il termine esponenziale è limitato su $\mathbb{R}$ se e solo se $\alpha=0$. Poiché la parte omogenea è limitata, tutte le soluzioni sono limitate su $\mathbb{R}$ se e solo se $\alpha=0$.
:::
:::

:::exercise{id="X2024-14" type="esame" chapter="6" difficulty="medio"}
## Domanda
**Esame del 21 giugno 2024 - turno U - versione 4**

**Esercizio 2**

(a) Sia $\alpha\in\mathbb{N}$, $\alpha\neq 0$. Dare la definizione di funzione infinitesima di ordine $\alpha$ per $x\to-\infty$ rispetto al campione $1/x$.

(b) Si consideri la seguente affermazione: se $f$ e $g$ sono due infinitesimi di ordine $8$ per $x\to-\infty$ rispetto al campione $1/x$, allora la funzione $f-g$ è un infinitesimo di ordine $8$ per $x\to-\infty$ rispetto al campione $1/x$. Stabilire se l’affermazione è vera o falsa, motivando la risposta.

(c) Determinare l’ordine di infinitesimo per $x\to-\infty$ della funzione $h(x)=(\cos(1/x^2)-1)^3$ rispetto al campione $1/x$.

:::solution
**Esercizio 2**

(a) Una funzione $f$ si dice un infinitesimo di ordine $\alpha$ per $x\to-\infty$ rispetto al campione $1/x$ se il limite

$$
\lim_{x\to-\infty}\frac{f(x)}{(1/x)^\alpha}
$$

esiste finito e non nullo.

(b) L’affermazione è falsa. Un controesempio si ottiene prendendo $f(x)=1/x^8$ e $g(x)=1/x^8+1/x^9$. Allora $f$ e $g$ sono entrambi infinitesimi di ordine $8$ per $x\to-\infty$ rispetto al campione $1/x$, mentre $f(x)-g(x)=-1/x^9$ è un infinitesimo di ordine $9$.

(c) Dallo sviluppo di Taylor sappiamo che $\cos y-1=-y^2/2+o(y^2)$ per $y\to0$. Quindi, per composizione,

$$
\cos(1/x^2)-1=-\frac{1}{2x^4}+o(1/x^4),\qquad x\to-\infty.
$$

Elevando al cubo si ottiene

$$
h(x)=\left(\cos(1/x^2)-1\right)^3=-\frac{1}{8x^{12}}+o(1/x^{12}),\qquad x\to-\infty.
$$

Pertanto $h$ ha ordine di infinitesimo $12$ per $x\to-\infty$ rispetto al campione $1/x$.
:::
:::

:::exercise{id="X2024-15" type="esame" chapter="6" difficulty="medio"}
## Domanda
**Esame del 21 giugno 2024 - turno U - versione 3**

**Esercizio 2**

(a) Sia $\alpha\in\mathbb{N}$, $\alpha\neq 0$. Dare la definizione di funzione infinitesima di ordine $\alpha$ per $x\to+\infty$ rispetto al campione $1/x$.

(b) Si consideri la seguente affermazione: se $f$ e $g$ sono due infinitesimi di ordine $4$ per $x\to+\infty$ rispetto al campione $1/x$, allora la funzione $f+g$ è un infinitesimo di ordine $4$ per $x\to+\infty$ rispetto al campione $1/x$. Stabilire se l’affermazione è vera o falsa, motivando la risposta.

(c) Determinare l’ordine di infinitesimo per $x\to+\infty$ della funzione $h(x)=(\exp(1/x^3)-1)^2$ rispetto al campione $1/x$.

:::solution
(a) $f$ è un infinitesimo di ordine $\alpha$ rispetto al campione $1/x$ per $x\to+\infty$ se

$$\lim_{x\to+\infty}\frac{f(x)}{(1/x)^\alpha}=\ell,$$

con $\ell\in\mathbb{R}$ e $\ell\neq 0$.

(b) L’affermazione è falsa. Consideriamo $f(x)=1/x^4$ e $g(x)=-1/x^4$. Entrambe sono infinitesimi di ordine $4$ rispetto al campione $1/x$, ma $f(x)+g(x)=0$, che non è un infinitesimo di ordine $4$.

(c) Poiché $\exp(t)-1\sim t$ per $t\to 0$, si ha

$$h(x)=(\exp(1/x^3)-1)^2\sim (1/x^3)^2=1/x^6\qquad (x\to+\infty).$$

Dunque $h$ è un infinitesimo di ordine $6$ rispetto al campione $1/x$.
:::
:::

:::exercise{id="X2024-16" type="esame" chapter="6" difficulty="medio"}
## Domanda
**Esame del 21 giugno 2024 - turno U - versione 2**

**Esercizio 2**

(a) Siano $x_0\in\mathbb{R}$ e $\alpha\in\mathbb{N}$, $\alpha\neq 0$. Dare la definizione di funzione infinitesima di ordine $\alpha$ per $x\to x_0$ rispetto al campione $x-x_0$.

(b) Si consideri la seguente affermazione: se $f$ e $g$ sono due infinitesimi di ordine $5$ per $x\to x_0$ rispetto al campione $x-x_0$, allora la funzione $f-g$ è un infinitesimo di ordine $5$ per $x\to x_0$ rispetto al campione $x-x_0$. Stabilire se l’affermazione è vera o falsa, motivando la risposta.

(c) Determinare l’ordine di infinitesimo per $x\to 0$ della funzione $h(x)=\sin^3(x^2)-x^6$ rispetto al campione $x$.

:::solution
**Esercizio 2**

(a) Una funzione $f$ è un infinitesimo di ordine $\alpha$ per $x\to x_0$ rispetto al campione $x-x_0$ se

$$\lim_{x\to x_0}\frac{f(x)}{(x-x_0)^\alpha}=\ell$$

con $\ell\in\mathbb{R}\setminus\{0\}$.

(b) L’affermazione è falsa. Per esempio, ponendo $f(x)=(x-x_0)^5$ e $g(x)=(x-x_0)^5$, entrambe sono infinitesimi di ordine $5$, mentre $f-g=0$ non è un infinitesimo di ordine $5$.

(c) Si ha

$$\sin(x^2)=x^2-\frac{x^6}{6}+o(x^6),$$

quindi

$$\sin^3(x^2)=x^6-\frac{x^{10}}{2}+o(x^{10}).$$

Pertanto

$$h(x)=-\frac{x^{10}}{2}+o(x^{10}),$$

e l’ordine di infinitesimo è $10$.
:::
:::

:::exercise{id="X2025-1" type="esame" chapter="3" difficulty="difficile"}
## Domanda
**Esame del 22 gennaio 2025 - turno 1 - versione 4**

**Esercizio 1**

Si consideri la funzione $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x) = -e^{\frac{x}{10}} \sqrt[5]{x+2}
$$

**(a)** Determinare il dominio $\operatorname{dom}(f)$, i limiti di $f$ agli estremi del dominio e gli eventuali asintoti.

**(b)** Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

**(c)** Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

**(d)** Tracciare un grafico qualitativo di $f$.

**(e)** Scrivere se esistono e indicare i valori di estremo superiore, estremo inferiore, massimo e minimo dell’insieme

$$
A = \left\{ f\left(\frac{1}{n}-4\right) : n \in \mathbb{N} \setminus \{0\} \right\}.
$$

:::solution
**Svolgimento**

**Esercizio 1.** Si consideri la funzione $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ definita da $f(x) = -e^{\frac{x}{10}} \sqrt[5]{x+2}$.

**(a)** Determinare il dominio $\operatorname{dom}(f)$, i limiti di $f$ agli estremi del dominio e gli eventuali asintoti.

La funzione è definita su tutto $\mathbb{R}$. Si ha $f(x)>0$ per $x<-2$, $f(x)=0$ per $x=-2$, $f(x)<0$ per $x>-2$. Risulta $\lim_{x\to-\infty}f(x)=0$ e $\lim_{x\to+\infty}f(x)=-\infty$. $y=0$ è un asintoto orizzontale sinistro. Non esistono asintoti obliqui perché $\lim_{x\to+\infty}\frac{f(x)}{x}=-\infty$.

**(b)** Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

La funzione è continua. È derivabile per ogni $x\ne-2$ e si ha

$$
f'(x)=-\frac{e^{\frac{x}{10}}(x+4)}{10\sqrt[5]{(x+2)^4}}.
$$

Il punto di non derivabilità $x=-2$ è un punto a tangente verticale, essendo $\lim_{x\to-2}f'(x)=-\infty$ da entrambi i lati.

**(c)** Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

Si ha che $f'(x)=0$ per $x=-4$. Inoltre, $f'(x)>0$ per $x<-4$, mentre $f'(x)<0$ per $x>-4$, $x\ne-2$. La funzione è crescente su $(-\infty,-4\rbrack $ e decrescente su $\lbrack -4,+\infty)$. Il punto $x=-4$ è pertanto di massimo locale e globale. Non esistono minimi locali.

**(d)** Tracciare un grafico qualitativo di $f$.

Partendo da sinistra, il grafico si avvicina all’asintoto orizzontale $y=0$ dall’alto per $x\to-\infty$, cresce fino a raggiungere il massimo globale in $x=-4$, dove la funzione vale $f(-4)=2^{1/5}e^{-2/5}$. Da qui decresce, attraversa l’asse delle ascisse nel punto $(-2,0)$ con tangente verticale e prosegue decrescendo indefinitamente, tendendo a $-\infty$ per $x\to+\infty$.

**(e)** Scrivere se esistono e indicare i valori di estremo superiore, estremo inferiore, massimo e minimo dell’insieme

$$
A=\left\{f\left(\frac{1}{n}-4\right):n\in\mathbb{N}\setminus\{0\}\right\}.
$$

Essendo $f$ decrescente su $\lbrack -4,+\infty)$ e $x_n=\frac{1}{n}$ decrescente su $\mathbb{N}\setminus\{0\}$, la successione $a_n=f\left(\frac{1}{n}-4\right)$ è crescente. Pertanto $\min A=a_1=f(-3)=e^{-3/10}$, non esiste il massimo di $A$ e $\sup A=\lim_{n\to+\infty}a_n=f(-4)=2^{1/5}e^{-2/5}$.

Si ha quindi $\inf A=\min A=e^{-3/10}$.‬
:::
:::

:::exercise{id="X2025-2" type="esame" chapter="3" difficulty="difficile"}
## Domanda
**Esame del 22 gennaio 2025 - turno 1 - versione 1**

**Esercizio 1**

Si consideri la funzione $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x) = e^{-\frac{x}{6}} \sqrt[3]{x-3}
$$

(a) Determinare il dominio $\operatorname{dom}(f)$, i limiti di $f$ agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Scrivere se esistono e indicare i valori di estremo superiore, estremo inferiore, massimo e minimo dell’insieme

$$
A = \left\{ f\left(5+\frac{1}{n}\right) : n \in \mathbb{N}\setminus\{0\} \right\}.
$$

:::solution
**Esercizio 1**

Si consideri la funzione $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ definita da $f(x)=e^{-\frac{x}{6}}\sqrt[3]{x-3}$.

(a) Determinare il dominio $\operatorname{dom}(f)$, i limiti di $f$ agli estremi del dominio e gli eventuali asintoti.

La funzione è definita su tutto $\mathbb{R}$. Si ha $f(x)>0$ per $x>3$, $f(x)=0$ per $x=3$, $f(x)<0$ per $x<3$. Risulta $\lim_{x\to-\infty} f(x)=-\infty$ e $\lim_{x\to+\infty} f(x)=0$. $y=0$ è un asintoto orizzontale destro. Non esistono asintoti obliqui perché $\lim_{x\to-\infty}\frac{f(x)}{x}=+\infty$.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

La funzione è continua, derivabile per ogni $x\ne3$ e si ha

$$
f'(x)=\frac{e^{-\frac{x}{6}}(5-x)}{6\sqrt[3]{(x-3)^2}}.
$$

Il punto di non derivabilità $x=3$ è un punto a tangente verticale essendo $\lim_{x\to3}f'(x)=+\infty$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

Si ha che $f'(x)=0$ per $x=5$. Inoltre, $f'(x)>0$ per $x<5$, $x\ne3$, mentre $f'(x)<0$ per $x>5$. La funzione è crescente su $(-\infty,5\rbrack $ e decrescente su $\lbrack 5,+\infty)$. Il punto $x=5$ è pertanto di massimo assoluto. Non essendoci altri punti in cui la monotonia cambia da decrescente a crescente, $f$ non ha punti di minimo locale.

(d) Tracciare un grafico qualitativo di $f$.

[figure: Grafico cartesiano della funzione $f$, crescente con tangente verticale in $x=3$, massimo in $x=5$ e tendente a $y=0$ per $x\to+\infty$.]

Figura 1: Grafico di $f$.

(e) Scrivere se esistono e indicare i valori di estremo superiore, estremo inferiore, massimo e minimo dell’insieme

$$
A=\left\{f\left(5+\frac{1}{n}\right): n\in\mathbb{N}\setminus\{0\}\right\}.
$$

Essendo $f$ decrescente su $\lbrack 5,+\infty)$ e $x_n=\frac{1}{n}$ decrescente su $\mathbb{N}\setminus\{0\}$, la successione $a_n=f\left(5+\frac{1}{n}\right)$ è crescente: pertanto $\min A=a_1=f(6)$, non esiste il massimo di $A$ e $\sup A=\lim_{n\to+\infty}a_n=f(5)$.

Si ha quindi $\inf A=\min A=f(6)=e^{-1}\sqrt[3]{3}$.
:::
:::

:::exercise{id="X2025-3" type="esame" chapter="3" difficulty="difficile"}
## Domanda
**Esame del 22 gennaio 2025 - turno 2 - versione 2**

**Esercizio 1**

Si consideri la funzione $f:(-2,2)\to\mathbb{R}$ definita da

$$
f(x)=
\begin{cases}
-\sqrt[4]{x^2(2-|x|)} & \text{se } x\in(-2,0)\cup(0,2),\\
-2 & \text{se } x=0.
\end{cases}
$$

(a) Determinare eventuali proprietà di simmetria, i limiti agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità in $\operatorname{dom}(f)$, e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Studiare la convergenza dell’integrale $\displaystyle\int_0^2\frac{1}{f(x)}\,dx$.

:::solution
**(a)**

Siccome $(-x)^2=x^2$ e $|-x|=|x|$, dalla formula per $f$ si vede che $f(-x)=f(x)$ per ogni $x\in(-2,2)$, cioè $f$ è pari.

Osserviamo anche che la funzione $x\mapsto-\sqrt[4]{x^2(2-|x|)}$ è continua sul suo dominio, in quanto composizione di funzioni continue (polinomi, radici, valore assoluto). In particolare,

$$
\lim_{x\to(\pm2)^\mp}f(x)
=\lim_{x\to(\pm2)^\mp}\left(-\sqrt[4]{x^2(2-|x|)}\right)
=-\sqrt[4]{(\pm2)^2(2-|\pm2|)}=0,
$$

$$
\lim_{x\to0}f(x)
=\lim_{x\to0}\left(-\sqrt[4]{x^2(2-|x|)}\right)
=-\sqrt[4]{0^2(2-|0|)}=0,
$$

da cui si vede anche che $f$ non ha asintoti verticali. Siccome il dominio $(-2,2)$ è limitato, non ci sono nemmeno asintoti orizzontali o obliqui.

**(b)**

Dalla discussione in (a) vediamo che $\lim_{x\to0}f(x)=0\ne-2=f(0)$, pertanto $f$ non è continua in $0$. D’altra parte, su ciascuno degli intervalli aperti $(0,2)$ e $(-2,0)$, $f$ coincide con la funzione continua $x\mapsto-\sqrt[4]{x^2(2-|x|)}$, pertanto $f$ è continua su $(-2,0)\cup(0,2)$.

Per analoghe ragioni $f$ è derivabile su $(-2,0)\cup(0,2)$, e dalle regole di derivazione vediamo che, per ogni $x\in(-2,0)\cup(0,2)$,

$$
f'(x)
=-\frac{d}{dx}\sqrt[4]{x^2(2-|x|)}
=-\frac{2x(2-|x|)-x^2\operatorname{sign}(x)}{4\sqrt[4]{(x^2(2-|x|))^3}}
=\frac{x(3|x|-4)}{4\sqrt[4]{x^6(2-|x|)^3}}.
$$

Siccome $f$ non è continua in $0$, non è nemmeno derivabile in $0$ e quindi $\operatorname{dom}(f')=(-2,0)\cup(0,2)$.

**(c)**

Siccome $\sqrt[4]{x^6(2-|x|)^3}>0$ per ogni $x\in\operatorname{dom}(f')=(-2,0)\cup(0,2)$, dalla formula per $f'$ trovata in (b) si ha che, per ogni $x\in\operatorname{dom}(f')$,

$$
\operatorname{sign}(f'(x))=\operatorname{sign}(x(3|x|-4))=
\begin{cases}
\operatorname{sign}(3x-4) & \text{se } x>0,\\
\operatorname{sign}(3x+4) & \text{se } x<0,
\end{cases}
$$

da cui si deduce che

$$
\begin{aligned}
f'(x)>0 &\iff x\in(-4/3,0)\cup(4/3,2)\\
f'(x)=0 &\iff x\in\{-4/3,4/3\}\\
f'(x)<0 &\iff x\in(-2,-4/3)\cup(0,4/3).
\end{aligned}
$$

Pertanto

$$
\begin{aligned}
&f\text{ è strettamente decrescente sugli intervalli }(-2,-4/3],\ (0,4/3],\\
&f\text{ è strettamente crescente sugli intervalli }[-4/3,0),\ [4/3,2).
\end{aligned}
$$

Dallo studio della monotonia si vede anche che $-4/3$ e $4/3$ sono punti di minimo locale. Inoltre, siccome $f(0)=-2<0=\lim_{x\to0}f(x)$, esiste un intorno di $0$ in cui $f(x)\ge f(0)$ e dunque anche $0$ è un punto di minimo locale. Per il teorema di Fermat, siccome $\operatorname{dom}(f)=(-2,2)$ è aperto, i punti di estremo locale di $f$ sono necessariamente punti stazionari oppure punti di non derivabilità di $f$, pertanto non ci sono altri punti di estremo locale oltre a $-4/3,4/3,0$.

Infine, dalle proprietà di monotonia e parità di $f$, vediamo che per ogni $x\in(-2,0)\cup(0,2)$,

$$
f(x)\ge f(\pm4/3)=-\sqrt[4]{32/27}>-2=f(0);
$$

pertanto $0$ è anche punto di minimo globale, mentre $-4/3$ e $4/3$ non lo sono.

**(d)**

[figure: Grafico simmetrico rispetto all’asse verticale, con due minimi e cuspide in corrispondenza dell’asse; cerchi vuoti agli estremi e alla cuspide, e un punto pieno sotto la cuspide sull’asse.]

**(e)**

L’integrale da studiare si riduce a

$$
\int_0^2 \frac{-1}{\sqrt[4]{x^2(2-x)}}\,dx.
$$

L’integranda $\displaystyle\frac{-1}{\sqrt[4]{x^2(2-x)}}$ è negativa nel dominio di integrazione $(0,2)$, ma diverge a entrambi gli estremi. Pertanto studiamo separatamente gli integrali su $(0,1)$ e $(1,2)$. Siccome

$$
\frac{-1}{\sqrt[4]{x^2(2-x)}}\sim \frac{-2^{-1/2}}{|x-2|^{1/4}}\quad\text{per }x\to 2^-,
\qquad
\frac{-1}{\sqrt[4]{x^2(2-x)}}\sim \frac{-2^{-1/4}}{|x|^{1/2}}\quad\text{per }x\to 0^+,
$$

ed entrambi $1/2,1/4<1$, dal criterio del confronto asintotico deduciamo che entrambi gli integrali impropri

$$
\int_0^1 \frac{-1}{\sqrt[4]{x^2(2-x)}}\,dx,
\qquad
\int_1^2 \frac{-1}{\sqrt[4]{x^2(2-x)}}\,dx
$$

convergono; pertanto anche l’integrale $\displaystyle\int_0^2 \frac{-1}{\sqrt[4]{x^2(2-x)}}\,dx$ converge.
:::
:::

:::exercise{id="X2025-4" type="esame" chapter="3" difficulty="difficile"}
## Domanda
**Esame del 22 gennaio 2025 - turno 2 - versione 1**

**Esercizio 1**

Si consideri la funzione $f : (-2,2) \to \mathbb{R}$ definita da

$$
f(x)=
\begin{cases}
\sqrt[4]{x^2(2-|x|)} & \text{se } x\in(-2,0)\cup(0,2),\\
1 & \text{se } x=0.
\end{cases}
$$

(a) Determinare eventuali proprietà di simmetria, i limiti agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità in $\operatorname{dom}(f)$, e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Studiare la convergenza dell’integrale $\displaystyle\int_{-2}^{0}\frac{1}{f(x)}\,dx$.

:::solution
**Esercizio 1**

Si consideri la funzione $f : (-2,2) \to \mathbb{R}$ definita da

$$
f(x)=
\begin{cases}
\sqrt[4]{x^2(2-|x|)} & \text{se } x\in(-2,0)\cup(0,2),\\
1 & \text{se } x=0.
\end{cases}
$$

**(a)**

Siccome $(-x)^2=x^2$ e $|-x|=|x|$, dalla formula per $f$ si vede che $f(-x)=f(x)$ per ogni $x\in(-2,2)$, cioè $f$ è pari.

Osserviamo anche che la funzione $x\mapsto\sqrt[4]{x^2(2-|x|)}$ è continua sul suo dominio, in quanto composizione di funzioni continue (polinomi, radici, valore assoluto). In particolare,

$$
\lim_{x\to(-2)^+} f(x)
=\lim_{x\to(-2)^+}\sqrt[4]{x^2(2-|x|)}
=\sqrt[4]{(-2)^2(2-|-2|)}=0,\qquad
\lim_{x\to2^-} f(x)
=\lim_{x\to2^-}\sqrt[4]{x^2(2-|x|)}
=\sqrt[4]{2^2(2-|2|)}=0,
$$

$$
\lim_{x\to0} f(x)
=\lim_{x\to0}\sqrt[4]{x^2(2-|x|)}
=\sqrt[4]{0^2(2-|0|)}=0,
$$

da cui si vede anche che $f$ non ha asintoti verticali. Siccome il dominio $(-2,2)$ è limitato, non ci sono nemmeno asintoti orizzontali o obliqui.

**(b)**

Dalla discussione in (a) vediamo che $\lim_{x\to0}f(x)=0\ne1=f(0)$, pertanto $f$ non è continua in $0$. Poiché il limite in $0$ esiste finito e vale $0$, la discontinuità in $0$ è una discontinuità eliminabile. D’altra parte, su ciascuno degli intervalli aperti $(0,2)$ e $(-2,0)$, $f$ coincide con la funzione continua $x\mapsto\sqrt[4]{x^2(2-|x|)}$, pertanto $f$ è continua su $(-2,0)\cup(0,2)$.

Per analoghe ragioni $f$ è derivabile su $(-2,0)\cup(0,2)$, e dalle regole di derivazione vediamo che, per ogni $x\in(-2,0)\cup(0,2)$,

$$
f'(x)=\frac{d}{dx}\sqrt[4]{x^2(2-|x|)}
=\frac{2x(2-|x|)-x^2\operatorname{sign}(x)}{4\sqrt[4]{(x^2(2-|x|))^3}}
=\frac{x(4-3|x|)}{4\sqrt[4]{x^6(2-|x|)^3}}.
$$

Siccome $f$ non è continua in $0$, non è nemmeno derivabile in $0$ e quindi $\operatorname{dom}(f')=(-2,0)\cup(0,2)$.

**(c)**

Siccome $\sqrt[4]{x^6(2-|x|)^3}>0$ per ogni $x\in\operatorname{dom}(f')=(-2,0)\cup(0,2)$, dalla formula per $f'$ trovata in (b) si ha che, per ogni $x\in\operatorname{dom}(f')$,

$$
\operatorname{sign}(f'(x))=\operatorname{sign}(x(4-3|x|))=
\begin{cases}
\operatorname{sign}(4-3x) & \text{se }x>0,\\
-\operatorname{sign}(4+3x) & \text{se }x<0,
\end{cases}
$$

da cui si deduce che

$$
\begin{aligned}
f'(x)>0 &\iff x\in(-2,-4/3)\cup(0,4/3)\\
f'(x)=0 &\iff x\in\{-4/3,4/3\}\\
f'(x)<0 &\iff x\in(-4/3,0)\cup(4/3,2).
\end{aligned}
$$

Pertanto

$$
\begin{aligned}
f &\text{ è strettamente crescente sugli intervalli }(-2,-4/3],\ (0,4/3],\\
f &\text{ è strettamente decrescente sugli intervalli }[-4/3,0),\ [4/3,2).
\end{aligned}
$$

Dallo studio della monotonia si vede anche che $-4/3$ e $4/3$ sono punti di massimo locale. Inoltre, siccome $f(0)=1>0=\lim_{x\to0}f(x)$, esiste un intorno di $0$ in cui $f(x)\le f(0)$ e dunque anche $0$ è un punto di massimo locale. Per il teorema di Fermat, siccome $\operatorname{dom}(f)=(-2,2)$ è aperto, i punti di estremo locale di $f$ sono necessariamente punti stazionari oppure punti di non derivabilità di $f$, pertanto non ci sono altri punti di estremo locale oltre a $-4/3,4/3,0$.

Infine, dalle proprietà di monotonia e parità di $f$, vediamo che per ogni $x\in(-2,0)\cup(0,2)$,

$$
f(x)\le f(\pm 4/3)=\sqrt[4]{32/27}>1=f(0);
$$

pertanto $4/3$ e $-4/3$ sono anche punti di massimo globale, mentre $0$ non lo è.

Quanto al minimo, $f(x)>0$ per ogni $x$ nel dominio (si annulla solo nei limiti agli estremi $\pm2$ e nel limite in $0$, punti che non appartengono al dominio o in cui $f$ assume il valore $1$), mentre $\inf_{x\in(-2,2)}f(x)=0$ non è raggiunto da nessun punto del dominio. Inoltre, il segno della derivata mostra che $f$ è strettamente crescente su $(-2,-4/3)$ e su $(0,4/3)$, e strettamente decrescente su $(-4/3,0)$ e su $(4/3,2)$. Quindi ogni punto di ciascuno di questi intervalli appartiene a un intorno in cui la funzione assume anche valori minori; in $0$, invece, si ha un massimo locale. Pertanto $f$ non ha punti di minimo locale.

**(d)**

[figure: Grafico simmetrico rispetto all’asse $y$, con due archi sopra l’asse $x$, che terminano con cerchi aperti in $x=-2$, $x=0$ e $x=2$. In $x=0$ è indicato un punto pieno sopra l’origine.]

**(e)**

L’integrale da studiare si riduce a

$$
\int_{-2}^{0}\frac{1}{\sqrt[4]{x^2(2+x)}}\,dx.
$$

L’integranda $\displaystyle\frac{1}{\sqrt[4]{x^2(2+x)}}$ è positiva nel dominio di integrazione $(-2,0)$, ma diverge a entrambi gli estremi. Pertanto studiamo separatamente gli integrali su $(-2,-1\rbrack $ e $\lbrack -1,0)$. Siccome

$$
\frac{1}{\sqrt[4]{x^2(2+x)}}\sim\frac{2^{-1/2}}{|x+2|^{1/4}}\quad\text{per }x\to(-2)^+,\qquad
\frac{1}{\sqrt[4]{x^2(2+x)}}\sim\frac{2^{-1/4}}{|x|^{1/2}}\quad\text{per }x\to0^-.
$$

dal criterio del confronto asintotico, poiché entrambi gli esponenti $1/2$ e $1/4$ sono minori di $1$, deduciamo che entrambi gli integrali impropri

$$
\int_{-2}^{-1}\frac{1}{\sqrt[4]{x^2(2+x)}}\,dx,\qquad
\int_{-1}^{0}\frac{1}{\sqrt[4]{x^2(2+x)}}\,dx
$$

convergono; pertanto anche l’integrale $\displaystyle\int_{-2}^{0}\frac{1}{\sqrt[4]{x^2(2+x)}}\,dx$ converge.
:::
:::

:::exercise{id="X2025-5" type="esame" chapter="3" difficulty="difficile"}
## Domanda
**Esame del 22 gennaio 2025 - turno 1 - versione 2**

**Esercizio 1**

Si consideri la funzione $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x) = e^{-\frac{x}{10}}\sqrt[5]{2-x}
$$

(a) Determinare il dominio $\operatorname{dom}(f)$, i limiti di $f$ agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Scrivere se esistono e indicare i valori di estremo superiore, estremo inferiore, massimo e minimo dell’insieme

$$
A = \left\{ f\left(4+\frac{1}{n}\right) : n \in \mathbb{N}\setminus\{0\} \right\}.
$$

:::solution
**Esercizio 1**

**(a)** La funzione è definita su tutto $\mathbb{R}$. Si ha $f(x)>0$ per $x<2$, $f(x)=0$ per $x=2$, $f(x)<0$ per $x>2$. Risulta

$$
\lim_{x\to-\infty}f(x)=+\infty,\qquad \lim_{x\to+\infty}f(x)=0.
$$

$y=0$ è un asintoto orizzontale destro. Non esistono asintoti obliqui perché

$$
\lim_{x\to-\infty}\frac{f(x)}{x}=-\infty.
$$

**(b)** La funzione è continua. È derivabile per ogni $x\ne 2$ e si ha

$$
f'(x)=\frac{e^{-\frac{x}{10}}(x-4)}{10\sqrt[5]{(2-x)^4}}.
$$

Il punto di non derivabilità $x=2$ è un punto a tangente verticale essendo $\lim_{x\to2}f'(x)=-\infty$.

**(c)** Si ha che $f'(x)=0$ per $x=4$. Inoltre, $f'(x)>0$ per $x>4$, mentre $f'(x)<0$ per $x<4$, $x\ne2$. La funzione è decrescente su $(-\infty,4\rbrack $ e crescente su $\lbrack 4,+\infty)$. Il punto $x=4$ è pertanto di minimo assoluto.

**(d)** [figure: grafico cartesiano della funzione $f$, decrescente con tangente verticale in $x=2$, poi crescente dopo il minimo in $x=4$ e tendente a $y=0$ per $x\to+\infty$.]

Figura 2: Grafico di $f$

**(e)** Essendo $f$ crescente su $\lbrack 4,+\infty)$ e $x_n=\frac{1}{n}$ decrescente su $\mathbb{N}\setminus\{0\}$, la successione $a_n=f\left(4+\frac{1}{n}\right)$ è decrescente: pertanto

$$
\max A = a_1 = f(5) = e^{-\frac{1}{2}}\sqrt[5]{-3} = -e^{-\frac{1}{2}}\sqrt[5]{3},
$$

quindi $\sup A = \max A = -e^{-\frac{1}{2}}\sqrt[5]{3}$. Non esiste il minimo di $A$ e $\inf A=\lim_{n\to+\infty}a_n=f(4)$.
:::
:::

:::exercise{id="X2025-6" type="esame" chapter="3" difficulty="difficile"}
## Domanda
**Esame del 22 gennaio 2025 - turno 1 - versione 3**

**Esercizio 1**

Si consideri la funzione $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x) = e^{\frac{x}{6}}\sqrt[3]{x+3}
$$

(a) Determinare il dominio $\operatorname{dom}(f)$, i limiti di $f$ agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Scrivere se esistono e indicare i valori di estremo superiore, estremo inferiore, massimo e minimo dell’insieme

$$
A = \left\{ f\left(\frac{1}{n}-5\right) : n \in \mathbb{N}\setminus\{0\} \right\}.
$$

:::solution
**Esercizio 1**

Si consideri la funzione $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ definita da $f(x) = e^{\frac{x}{6}}\sqrt[3]{x+3}$.

**(a)**

La funzione è definita su tutto $\mathbb{R}$. Si ha $f(x)>0$ per $x>-3$, $f(x)=0$ per $x=-3$, $f(x)<0$ per $x<-3$. Risulta $\lim_{x\to-\infty} f(x)=0^-$ e $\lim_{x\to+\infty} f(x)=+\infty$. $y=0$ è un asintoto orizzontale sinistro. Non esistono asintoti obliqui perché $\lim_{x\to+\infty}\frac{f(x)}{x}=+\infty$.

**(b)**

La funzione è continua su $\mathbb{R}$. È derivabile per ogni $x\ne-3$ e si ha

$$
f'(x)=\frac{e^{\frac{x}{6}}(x+5)}{6\sqrt[3]{(x+3)^2}}.
$$

Il punto di non derivabilità $x=-3$ è un punto a tangente verticale, essendo $\lim_{x\to-3^-}f'(x)=\lim_{x\to-3^+}f'(x)=+\infty$.

**(c)**

Si ha che $f'(x)=0$ per $x=-5$. Inoltre, $f'(x)>0$ per $x>-5$, $x\ne-3$, mentre $f'(x)<0$ per $x<-5$. La funzione è decrescente su $(-\infty,-5\rbrack $ e crescente su $\lbrack -5,+\infty)$. Il punto $x=-5$ è pertanto di minimo assoluto e locale, con valore $f(-5)=-\sqrt[3]{2}\,e^{-5/6}$. Non vi sono massimi locali o globali.

**(d)**

Per $x\to-\infty$ il grafico si avvicina da sotto all’asintoto orizzontale $y=0$, rimanendo negativo e decrescendo fino al minimo assoluto in $x=-5$, dove la tangente è orizzontale. Da qui il grafico cresce, attraversa l’asse delle ascisse nel punto $(-3,0)$ con tangente verticale, e prosegue crescendo verso $+\infty$ per $x\to+\infty$, senza asintoti obliqui.

**(e)**

Poiché $f$ è crescente su $\lbrack -5,+\infty)$ e $x_n=\frac{1}{n}$ è decrescente per $n\in\mathbb{N}\setminus\{0\}$, la successione $a_n=f\left(\frac{1}{n}-5\right)$ è decrescente. Pertanto $\sup A=\max A=a_1=f(-4)=-e^{-2/3}$. Inoltre $\inf A=\lim_{n\to+\infty}a_n=f(-5)=-\sqrt[3]{2}\,e^{-5/6}$, ma il minimo di $A$ non esiste.
:::
:::

:::exercise{id="X2025-7" type="esame" chapter="3" difficulty="medio"}
## Domanda
**Esame del 22 gennaio 2025 - turno 2 - versione 1**

**Esercizio 2**

(a) Fornire la definizione di funzione periodica $g : \mathbb{R} \to \mathbb{R}$.

(b) Sia $M$ la funzione mantissa. Dimostrare che non esiste il limite

$$
\lim_{x\to +\infty} M(2x).
$$

(c) Calcolare, se esistono, i limiti seguenti:

$$
\lim_{x\to +\infty}\left[x^6 M(2x)+\sqrt[3]{x}\right],
$$

$$
\lim_{x\to -\infty}\frac{x(\sin(x)-2)}{x-2}.
$$

:::solution
**Esercizio 2**

(a) Una funzione $g : \mathbb{R} \to \mathbb{R}$ si dice periodica di periodo $T>0$ se $g(x+T)=g(x)$ per ogni $x\in\mathbb{R}$.

(b) Se per assurdo esistesse il limite $\lim_{x\to +\infty}M(2x)$, allora, per ogni successione $(a_n)_n$ di numeri reali tale che $\lim_{n\to +\infty}a_n=+\infty$, esisterebbe anche il limite $\lim_{n\to +\infty}M(2a_n)$, e tutti tali limiti sarebbero uguali. Per dimostrare che il limite $\lim_{x\to +\infty}M(2x)$ non esiste, basta dunque trovare due successioni $(a_n)_n$ e $(b_n)_n$ divergenti positivamente tali che $\lim_{n\to +\infty}M(2a_n)\ne\lim_{n\to +\infty}M(2b_n)$.

Se prendiamo $a_n=n$ per ogni $n\in\mathbb{N}$, si ha $\lim_{n\to +\infty}a_n=\lim_{n\to +\infty}n=+\infty$, e inoltre $M(2a_n)=M(2n)=0$ per ogni $n\in\mathbb{N}$, dato che $M$ si annulla sui numeri interi. Pertanto $\lim_{n\to +\infty}M(2a_n)=0$.

Se invece prendiamo $b_n=n+\frac14$ per ogni $n\in\mathbb{N}$, si ha ancora $\lim_{n\to +\infty}b_n=\lim_{n\to +\infty}(n+\frac14)=+\infty$, ma d'altra parte $M(2b_n)=M(2n+\frac12)=M(\frac12)=\frac12$ per ogni $n\in\mathbb{N}$, e quindi $\lim_{n\to +\infty}M(2b_n)=\frac12\ne 0=\lim_{n\to +\infty}M(2a_n)$.

(c) Per il primo limite, osserviamo che $x^6M(2x)+\sqrt[3]{x}\ge\sqrt[3]{x}$ per ogni $x\ge0$, dato che la mantissa è una funzione nonnegativa. Siccome $\lim_{x\to +\infty}\sqrt[3]{x}=+\infty$, per il teorema del confronto deduciamo che anche

$$
\lim_{x\to +\infty}\left[x^6M(2x)+\sqrt[3]{x}\right]=+\infty.
$$

Per il secondo limite, mostriamo come in (b) che il limite non esiste, trovando due successioni $(a_n)_n$ e $(b_n)_n$ divergenti negativamente tali che le sostituzioni $x=a_n$ e $x=b_n$ producano limiti diversi. Prendendo $a_n=-2\pi n$ e $b_n=-2\pi n+\frac{\pi}{2}$, si ha $\lim_{n\to +\infty}a_n=-\infty=\lim_{n\to +\infty}b_n$. Inoltre, $\sin(a_n)-2=-2$ e $\sin(b_n)-2=-1$ per ogni $n$. Pertanto

$$
\lim_{n\to +\infty}\frac{a_n(\sin(a_n)-2)}{a_n-2}
=\lim_{n\to +\infty}\left(-2\frac{2\pi n}{2\pi n+2}\right)=-2,
$$

$$
\lim_{n\to +\infty}\frac{b_n(\sin(b_n)-2)}{b_n-2}
=\lim_{n\to +\infty}\left(-\frac{2\pi n-\frac{\pi}{2}}{2\pi n-\frac{\pi}{2}+2}\right)=-1.
$$

I due limiti sono diversi, dunque il limite richiesto non esiste.
:::
:::

:::exercise{id="X2025-8" type="esame" chapter="4" difficulty="medio"}
## Domanda
**Esame del 22 gennaio 2025 - turno 1 - versione 2**

**Esercizio 2**

(a) Enunciare il teorema dei due carabinieri.

(b) Sia $g:\mathbb{R}\to\mathbb{R}$. Dimostrare che se $|g(x)|\leq|x-1|$ per ogni $x\in\mathbb{R}$ allora $g$ è continua in $x=1$.

(c) Sia $g:\mathbb{R}\to\mathbb{R}$. Dimostrare che se $|g(x)|\leq(x-1)^2$ per ogni $x\in\mathbb{R}$ allora $g$ è derivabile in $x=1$.

:::solution
**Esercizio 2**

(a) Se le funzioni $f$, $g$, $h$, definite in un intorno di $x_0$ (eventualmente privato del punto $x_0$), soddisfano le condizioni $f\leq g\leq h$ e

$$
\lim_{x\to x_0}f(x)=L=\lim_{x\to x_0}h(x),
$$

allora

$$
\lim_{x\to x_0}g(x)=L.
$$

(b) Dall’ipotesi risulta che $g(1)=0$. Inoltre, ponendo $f(x)=-|x-1|$ e $h(x)=|x-1|$, si ha $f\leq g\leq h$. Utilizzando il teorema dei due carabinieri, dato che $\lim_{x\to1}f(x)=0=\lim_{x\to1}h(x)$, segue che $\lim_{x\to1}g(x)=0$. Si conclude che $\lim_{x\to1}g(x)=0=g(1)$, ovvero che $g$ è continua in $x=1$.

(c) Dall’ipotesi risulta che $g(1)=0$. Ne segue che il rapporto incrementale di $g$ tra i punti $x$ e $1$ vale $\frac{g(x)-g(1)}{x-1}=\frac{g(x)}{x-1}$. Risulta quindi

$$
\left|\frac{g(x)}{x-1}\right|\leq\frac{(x-1)^2}{|x-1|}=|x-1|.
$$

Utilizzando il teorema dei due carabinieri, si conclude che $\lim_{x\to1}\frac{g(x)-g(1)}{x-1}=0$ e quindi che $g$ è derivabile in $x=1$.
:::
:::

:::exercise{id="X2025-9" type="esame" chapter="4" difficulty="medio"}
## Domanda
**Esame del 22 gennaio 2025 - turno 1 - versione 3**

**Esercizio 2**

(a) Enunciare il teorema dei due carabinieri.

(b) Sia $g : \mathbb{R} \to \mathbb{R}$. Dimostrare che se $|g(x)| \leq |x+2|$ per ogni $x \in \mathbb{R}$ allora $g$ è continua in $x=-2$.

(c) Sia $g : \mathbb{R} \to \mathbb{R}$. Dimostrare che se $|g(x)| \leq (x+2)^2$ per ogni $x \in \mathbb{R}$ allora $g$ è derivabile in $x=-2$.

:::solution
**Esercizio 2**

(a) Se le funzioni $f,g,h$, definite in un intorno di $x_0$ (eventualmente privato del punto $x_0$), soddisfano le condizioni $f \leq g \leq h$ e

$$
\exists\lim_{x\to x_0}f(x)=L=\lim_{x\to x_0}h(x),
$$

allora $\exists\lim_{x\to x_0}g(x)=L$.

(b) Dall’ipotesi, risulta che $g(-2)=0$. Inoltre, ponendo $f(x)=-|x+2|$ e $h(x)=|x+2|$, si ha $f\leq g\leq h$. Utilizzando il teorema dei due carabinieri, dato che

$$
\exists\lim_{x\to-2}f(x)=0=\lim_{x\to-2}h(x),
$$

segue che $\exists\lim_{x\to-2}g(x)=0$. Si conclude che $\lim_{x\to-2}g(x)=0=g(-2)$, ovvero, che $g$ è continua in $x=-2$.

(c) Dall’ipotesi, risulta che $g(-2)=0$. Ne segue che il rapporto incrementale di $g$ tra i punti $x$ e $-2$ vale

$$
\frac{g(x)-g(-2)}{x+2}=\frac{g(x)}{x+2}.
$$

Risulta quindi

$$
\left|\frac{g(x)}{x+2}\right|\leq \frac{(x+2)^2}{|x+2|}=|x+2|.
$$

Utilizzando il teorema dei due carabinieri, si conclude che

$$
\lim_{x\to-2}\frac{g(x)-g(-2)}{x+2}=0
$$

e quindi che $g$ è derivabile in $x=-2$.
:::
:::

:::exercise{id="X2025-10" type="esame" chapter="4" difficulty="medio"}
## Domanda
**Esame del 22 gennaio 2025 - turno 1 - versione 1**

**Esercizio 2**

(a) Enunciare il teorema dei due carabinieri.

(b) Sia $g : \mathbb{R} \to \mathbb{R}$. Dimostrare che se $|g(x)| \leq |x+1|$ per ogni $x \in \mathbb{R}$ allora $g$ è continua in $x=-1$.

(c) Sia $g : \mathbb{R} \to \mathbb{R}$. Dimostrare che se $|g(x)| \leq (x+1)^2$ per ogni $x \in \mathbb{R}$ allora $g$ è derivabile in $x=-1$.

:::solution
**Esercizio 2**

(a) Se le funzioni $f$, $g$, $h$, definite in un intorno di $x_0$ (eventualmente privato del punto $x_0$), soddisfano le condizioni $f \leq g \leq h$ e

$$
\exists \lim_{x\to x_0} f(x) = L = \lim_{x\to x_0} h(x),
$$

allora

$$
\exists \lim_{x\to x_0} g(x) = L.
$$

(b) Dall’ipotesi risulta che $g(-1)=0$. Inoltre, ponendo $f(x)=-|x+1|$ e $h(x)=|x+1|$, si ha $f \leq g \leq h$. Utilizzando il teorema dei due carabinieri, dato che

$$
\exists \lim_{x\to -1} f(x)=0=\lim_{x\to -1} h(x),
$$

segue che $\exists \lim_{x\to -1}g(x)=0$. Si conclude che $\lim_{x\to -1}g(x)=0=g(-1)$, ovvero che $g$ è continua in $x=-1$.

(c) Dall’ipotesi risulta che $g(-1)=0$. Ne segue che, per $x \neq -1$, il rapporto incrementale di $g$ tra i punti $x$ e $-1$ vale

$$
\frac{g(x)-g(-1)}{x+1}=\frac{g(x)}{x+1}.
$$

Risulta quindi, per $x \neq -1$,

$$
\left|\frac{g(x)}{x+1}\right|\leq\frac{(x+1)^2}{|x+1|}=|x+1|.
$$

Utilizzando il teorema dei due carabinieri, si conclude che

$$
\lim_{x\to -1}\frac{g(x)-g(-1)}{x+1}=0,
$$

e quindi che $g$ è derivabile in $x=-1$. Inoltre, $g'(-1)=0$.
:::
:::

:::exercise{id="X2025-11" type="esame" chapter="4" difficulty="medio"}
## Domanda
**Esame del 22 gennaio 2025 - turno 1 - versione 4**

**Esercizio 2**

(a) Enunciare il teorema dei due carabinieri.

(b) Sia $g : \mathbb{R} \to \mathbb{R}$. Dimostrare che se $|g(x)| \leq |x-2|$ per ogni $x \in \mathbb{R}$ allora $g$ è continua in $x=2$.

(c) Sia $g : \mathbb{R} \to \mathbb{R}$. Dimostrare che se $|g(x)| \leq (x-2)^2$ per ogni $x \in \mathbb{R}$ allora $g$ è derivabile in $x=2$.

:::solution
**Esercizio 2**

(a) Se le funzioni $f,g,h$, definite in un intorno di $x_0$ (eventualmente privato del punto $x_0$), soddisfano le condizioni $f \leq g \leq h$ e

$$
\exists\lim_{x\to x_0}f(x)=L=\lim_{x\to x_0}h(x),
$$

allora $\exists\lim_{x\to x_0}g(x)=L$.

(b) Dall’ipotesi, risulta che $g(2)=0$. Inoltre, ponendo $f(x)=-|x-2|$ e $h(x)=|x-2|$, si ha $f\leq g\leq h$. Utilizzando il teorema dei due carabinieri, dato che $\exists\lim_{x\to2}f(x)=0=\lim_{x\to2}h(x)$, segue che $\exists\lim_{x\to2}g(x)=0$. Si conclude che $\lim_{x\to2}g(x)=0=g(2)$, ovvero, che $g$ è continua in $x=2$.

(c) Dall’ipotesi, risulta che $g(2)=0$. Ne segue che il rapporto incrementale di $g$ tra i punti $x$ e $2$ vale $\frac{g(x)-g(2)}{x-2}=\frac{g(x)}{x-2}$. Risulta quindi

$$
\left|\frac{g(x)}{x-2}\right|\leq\frac{(x-2)^2}{|x-2|}=|x-2|.
$$

Utilizzando il teorema dei due carabinieri, si conclude che $\lim_{x\to2}\frac{g(x)-g(2)}{x-2}=0$ e quindi che $g$ è derivabile in $x=2$.
:::
:::

:::exercise{id="X2025-12" type="esame" chapter="3" difficulty="difficile"}
## Domanda
**Esame del 7 febbraio 2025 - turno 1 - versione 1**

**Esercizio 1**

Si consideri la funzione $f:\operatorname{dom}(f)\subseteq\mathbb{R}\to\mathbb{R}$ definita da

$$
f(x)=\frac{1}{4}\log(1+x^4)+\arctan\frac{1}{x|x|}
$$

(a) Determinare il dominio $\operatorname{dom}(f)$, i limiti agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Sia $g(x)=\exp(f(x))-x$. Determinare l’ordine di infinitesimo e la parte principale di $g(x)$ per $x\to+\infty$ rispetto al campione $1/x$.

:::solution
**Svolgimento**

**(a)** L’argomento $1+x^4$ del logaritmo è sempre maggiore o uguale a $1$, quindi il termine $\log(1+x^4)$ non pone restrizioni sul dominio. L’unica restrizione è posta dalla frazione $\frac{1}{x|x|}$, il cui denominatore si annulla solo in $x=0$. In conclusione,

$$
\operatorname{dom}(f)=\mathbb{R}\setminus\{0\}=(-\infty,0)\cup(0,+\infty).
$$

Si ha

$$
\lim_{x\to0^\pm}\frac{1}{x|x|}=\pm\lim_{x\to0^\pm}\frac{1}{x^2}=\pm\infty,\qquad
\lim_{x\to\pm\infty}\frac{1}{x|x|}=\pm\lim_{x\to\pm\infty}\frac{1}{x^2}=0.
$$

Pertanto, ponendo $y=\frac{1}{x|x|}$ e usando la continuità della funzione $\arctan$, si deduce che

$$
\lim_{x\to0^\pm}\arctan\frac{1}{x|x|}=\lim_{y\to\pm\infty}\arctan y=\pm\frac{\pi}{2},\qquad
\lim_{x\to\pm\infty}\arctan\frac{1}{x|x|}=\arctan 0=0.
$$

D’altra parte, $x\mapsto\log(1+x^4)$ è continua e

$$
\lim_{x\to0^\pm}\log(1+x^4)=\log 1=0,\qquad
\lim_{x\to\pm\infty}\log(1+x^4)=\lim_{y\to+\infty}\log y=+\infty,
$$

dove si è usato il cambio di variabile $y=1+x^4$. Per l’algebra dei limiti,

$$
\lim_{x\to0^\pm}f(x)=\frac{1}{4}\cdot0\pm\frac{\pi}{2}=\pm\frac{\pi}{2},\qquad
\lim_{x\to\pm\infty}f(x)=\frac{1}{4}\cdot(+\infty)+0=+\infty.
$$

Dal calcolo dei limiti deduciamo che $f$ non è né pari né dispari e che non ha né asintoti orizzontali né verticali. Inoltre, per $x\to\pm\infty$,

$$
\frac{1}{4}\log(1+x^4)=\frac{1}{4}\log\left(x^4\left(1+\frac{1}{x^4}\right)\right)=\log|x|+o(1),
$$

e quindi

$$
f(x)=\log|x|+o(1)\qquad\text{per }x\to\pm\infty,
$$

dove l’espressione $\log|x|$ è ben definita su entrambi i rami del dominio. Di conseguenza,

$$
\frac{f(x)}{x}=\frac{\log|x|+o(1)}{x}\to0\qquad\text{per }x\to\pm\infty,
$$

cioè $f(x)=o(x)$ sia per $x\to+\infty$ sia per $x\to-\infty$. Poiché $\lim_{x\to\pm\infty}f(x)=+\infty\neq\pm\infty\cdot m$ per nessun $m\in\mathbb{R}$ compatibile con un asintoto lineare, concludiamo che $f$ non ha asintoti obliqui su nessuno dei due rami.

**(b)** La funzione è composizione di funzioni continue, pertanto è continua in $\operatorname{dom}(f)=\mathbb{R}\setminus\{0\}$. Inoltre, dato che $\lim_{x\to0^\pm}f(x)=\pm\frac{\pi}{2}$, il punto $0$, che non appartiene al dominio, è una discontinuità di tipo salto per $f$.

Per analoghe ragioni $f$ è derivabile sul suo dominio, cioè $\operatorname{dom}(f')=\operatorname{dom}(f)$: infatti il punto in cui l’argomento del valore assoluto si annulla è escluso dal dominio.

Per ogni $x\in\operatorname{dom}(f')=\mathbb{R}\setminus\{0\}$,

$$
\begin{aligned}
f'(x)&=\frac{1}{4}\frac{4x^3}{1+x^4}+\frac{1}{1+\left(\frac{1}{x|x|}\right)^2}\cdot\left(-(x|x|)^{-2}\right)\cdot(2|x|)\\
&=\frac{x^3-2|x|}{1+x^4}=\frac{|x|}{1+x^4}(x|x|-2).
\end{aligned}
$$

**(c)** Dalla formula trovata in (b), per ogni $x\in\operatorname{dom}(f')=\mathbb{R}\setminus\{0\}$,

$$
\operatorname{sign}f'(x)=\operatorname{sign}(x|x|-2)=
\begin{cases}
\operatorname{sign}(x^2-2) & \text{se }x>0,\\
\operatorname{sign}(-x^2-2) & \text{se }x<0.
\end{cases}
$$

Da ciò si deduce che

$$
\begin{aligned}
f'(x)>0 &\iff x\in(\sqrt{2},+\infty),\\
f'(x)=0 &\iff x=\sqrt{2},\\
f'(x)<0 &\iff x\in(-\infty,0)\cup(0,\sqrt{2}).
\end{aligned}
$$

Pertanto $f$ è strettamente crescente sull’intervallo $\lbrack \sqrt{2},+\infty)$ ed è strettamente decrescente sugli intervalli $(-\infty,0)$ e $(0,\sqrt{2}\rbrack $. Deduciamo che $\sqrt{2}$ è l’unico punto di minimo locale per $f$ e che $f$ non ha punti di massimo locale. Siccome $\lim_{x\to0^-}f(x)=-\frac{\pi}{2}$, si ha $\inf f\leq-\frac{\pi}{2}<0$, mentre

$$
f(\sqrt{2})=\frac{1}{4}\log 5+\arctan\frac{1}{2}>0,
$$

da cui segue che $\sqrt{2}$ non è un punto di minimo globale per $f$.

**(d)** Il grafico di $f$ è composto da due rami, separati dalla retta verticale $x=0$, che non appartiene al dominio.

Sul ramo sinistro, $x\in(-\infty,0)$, la funzione è strettamente decrescente: proviene da $+\infty$ quando $x\to-\infty$ e scende fino al valore $-\frac{\pi}{2}$, che viene avvicinato ma non raggiunto quando $x\to0^-$. Il grafico si avvicina quindi asintoticamente alla retta orizzontale $y=-\frac{\pi}{2}$ in prossimità di $x=0$, pur non avendo asintoti orizzontali su tutto il ramo, poiché $f(x)\to+\infty$ per $x\to-\infty$.

Sul ramo destro, $x\in(0,+\infty)$, la funzione parte da $+\frac{\pi}{2}$ per $x\to0^+$ (valore avvicinato ma non raggiunto), decresce strettamente fino al punto di minimo locale $x=\sqrt{2}$, dove assume il valore positivo $f(\sqrt{2})=\frac{1}{4}\log 5+\arctan\frac{1}{2}$, per poi crescere strettamente e tendere a $+\infty$ quando $x\to+\infty$.

Il salto tra i due rami in corrispondenza di $x=0$ va da $-\frac{\pi}{2}$ (limite da sinistra) a $+\frac{\pi}{2}$ (limite da destra), e nessuno dei due rami presenta asintoti obliqui, coerentemente con quanto trovato nel punto (a).

**(e)** Per $x>0$ si ha

$$
\exp(f(x))=\exp\left(\arctan\frac{1}{x^2}\right)\sqrt[4]{1+x^4}
=x\sqrt[4]{1+\frac{1}{x^4}}\exp\left(\arctan\frac{1}{x^2}\right).
$$

Poiché $\lim_{x\to+\infty}\frac{1}{x^2}=\lim_{x\to+\infty}\frac{1}{x^4}=0$, usando gli sviluppi $e^y=1+y+o(y)$, $\arctan y=y+o(y)$ e $\sqrt[4]{1+y}=1+\frac{y}{4}+o(y)$ per $y\to0$, si ottiene

$$
\begin{aligned}
g(x)&=x\left(1+\frac{1}{4x^4}+o\left(\frac{1}{x^4}\right)\right)\exp\left(\frac{1}{x^2}+o\left(\frac{1}{x^2}\right)\right)-x\\
&=x\left(1+\frac{1}{4x^4}+o\left(\frac{1}{x^4}\right)\right)\left(1+\frac{1}{x^2}+o\left(\frac{1}{x^2}\right)\right)-x\\
&=\frac{1}{x}+o\left(\frac{1}{x}\right).
\end{aligned}
$$

Dunque $g(x)$ ha ordine di infinitesimo $1$ e parte principale $1/x$ rispetto al campione $1/x$ per $x\to+\infty$.
:::
:::

:::exercise{id="X2025-13" type="esame" chapter="7" difficulty="facile"}
## Domanda
**Esame del 7 febbraio 2025 - turno 1 - versione 3**

**Esercizio 2**

(a) Scrivere la definizione di funzione derivabile in un punto $x_0$ del suo dominio che sia di accumulazione per il dominio stesso.

(b) Data la funzione

$$
f(x) = (e^{-x}\cos x)\cdot |x-\pi/2|,
$$

dire se $f$ è derivabile in $x_0 = \pi/2$, motivando la risposta.

(c) Stabilire se $x_0 = \pi/2$ è un punto di estremo locale per la funzione $f$ del punto (b), specificando eventualmente se è di massimo o di minimo per $f$.

:::solution
Siano $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ e $x_0 \in \operatorname{dom}(f)$ un punto di accumulazione per $\operatorname{dom}(f)$. Si dice che $f$ è derivabile in $x_0$ se il limite

$$
\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}
$$

calcolato per $x \in \operatorname{dom}(f)$, $x \ne x_0$, esiste finito.

Osserviamo che $f(\pi/2)=0$. Pertanto, calcolando il limite del rapporto incrementale, si ha

$$
\lim_{x\to\pi/2}\frac{f(x)-f(\pi/2)}{x-\pi/2}
=\lim_{x\to\pi/2}(e^{-x}\cos x)\frac{|x-\pi/2|}{x-\pi/2}=0.
$$

Nell’ultimo passaggio si è usato che il prodotto di una funzione infinitesima e di una funzione limitata è una funzione infinitesima. Infatti,

$$
\lim_{x\to\pi/2}(e^{-x}\cos x)=e^{-\pi/2}\cos(\pi/2)=0,
$$

per continuità di $e^{-x}\cos x$, mentre

$$
\left|\frac{|x-\pi/2|}{x-\pi/2}\right|=1.
$$

Siccome il limite del rapporto incrementale esiste finito, per definizione $f$ è derivabile in $\pi/2$.

No, $\pi/2$ non è un punto di estremo locale per $f$. Se per assurdo lo fosse, siccome $f(\pi/2)=0$, dovrebbe esistere un intorno $I$ di $\pi/2$ tale che $f(x)\ge 0$ per ogni $x\in I$ (nel caso di punto di minimo locale), oppure $f(x)\le 0$ per ogni $x\in I$ (nel caso di punto di massimo locale).

Tuttavia, $e^{-x}|x-\pi/2|>0$ per ogni $x\ne\pi/2$, mentre $\cos x$ cambia segno quando $x$ passa per $\pi/2$. Pertanto anche il loro prodotto $f(x)=e^{-x}|x-\pi/2|\cos x$ cambia segno quando $x$ passa per $\pi/2$, e un intorno $I$ con la proprietà indicata non può esistere.
:::
:::

:::exercise{id="X2025-14" type="esame" chapter="7" difficulty="facile"}
## Domanda
**Esame del 7 febbraio 2025 - turno 1 - versione 2**

**Esercizio 2**

(a) Scrivere le definizioni di punto di massimo locale e di punto di minimo locale per una funzione reale di variabile reale.

(b) Data la funzione

$$
f(x)=(e^{-x}\sin x)\cdot|x-2\pi|,
$$

dire se $f$ è derivabile in $x_0=2\pi$, motivando la risposta.

(c) Stabilire se $x_0=2\pi$ è un punto di estremo locale per la funzione $f$ del punto (b), specificando eventualmente se è di massimo o di minimo per $f$.

:::solution
**Esercizio 2**

(a) Siano $f:\operatorname{dom}(f)\subseteq\mathbb{R}\to\mathbb{R}$ e $x_0\in\operatorname{dom}(f)$. Si dice che $x_0$ è un punto di massimo locale per $f$ se esiste un intorno $I$ di $x_0$ tale che

$$
f(x)\leq f(x_0)\quad\text{per ogni }x\in I\cap\operatorname{dom}(f).
$$

Si dice invece che $x_0$ è un punto di minimo locale per $f$ se esiste un intorno $I$ di $x_0$ tale che

$$
f(x)\geq f(x_0)\quad\text{per ogni }x\in I\cap\operatorname{dom}(f).
$$

(b) Osserviamo che $f(2\pi)=0$. Pertanto, calcolando il limite del rapporto incrementale, si ha

$$
\lim_{x\to 2\pi}\frac{f(x)-f(2\pi)}{x-2\pi}=\lim_{x\to 2\pi}\frac{(e^{-x}\sin x)|x-2\pi|}{x-2\pi}=0.
$$

Nell’ultimo passaggio si è usato che il prodotto di una funzione infinitesima e di una funzione limitata è una funzione infinitesima: infatti $\lim_{x\to 2\pi}(e^{-x}\sin x)=e^{-2\pi}\sin(2\pi)=0$ per continuità di $e^{-x}\sin x$, mentre $\left|\frac{|x-2\pi|}{x-2\pi}\right|=1$. Siccome il limite del rapporto incrementale esiste finito, per definizione $f$ è derivabile in $2\pi$.

(c) No, $2\pi$ non è un punto di estremo locale per $f$. Se per assurdo lo fosse, siccome $f(2\pi)=0$, dovrebbe esistere un intorno $I$ di $2\pi$ tale che $f(x)\geq 0$ per ogni $x\in I$ nel caso di punto di minimo locale, oppure $f(x)\leq 0$ per ogni $x\in I$ nel caso di punto di massimo locale.

Tuttavia, $e^{-x}|x-2\pi|>0$ per ogni $x\neq 2\pi$, mentre $\sin x$ cambia segno quando $x$ passa per $2\pi$. Pertanto anche il loro prodotto $f(x)=e^{-x}|x-2\pi|\sin x$ cambia segno quando $x$ passa per $2\pi$, e un intorno $I$ di $2\pi$ con la proprietà indicata non può esistere.
:::
:::

:::exercise{id="X2025-15" type="esame" chapter="7" difficulty="medio"}
## Domanda
**Esame del 7 febbraio 2025 - turno 1 - versione 1**

**Esercizio 2**

(a) Scrivere la definizione di funzione derivabile in un punto $x_0$ del suo dominio.

(b) Data la funzione

$$
f(x)=(e^x\tan x)\cdot|x-\pi|,
$$

dire se $f$ è derivabile in $x_0=\pi$, motivando la risposta.

(c) Stabilire se $x_0=\pi$ è un punto di estremo locale per la funzione $f$ del punto (b), specificando eventualmente se è di massimo o di minimo per $f$.

:::solution
**Esercizio 2**

(a) Siano $f:\operatorname{dom}(f)\subseteq\mathbb{R}\to\mathbb{R}$ e $x_0\in\operatorname{dom}(f)$ un punto di accumulazione di $\operatorname{dom}(f)$. Si dice che $f$ è derivabile in $x_0$ se il limite

$$
\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}
$$

esiste finito, dove il limite è preso per $x\to x_0$ con $x\in\operatorname{dom}(f)$. (Se con "derivabile" si intende la derivabilità bilatera, si richiede inoltre che $x_0$ sia interno a $\operatorname{dom}(f)$, cioè che $\operatorname{dom}(f)$ contenga un intorno di $x_0$.)

(b) Osserviamo che $f(\pi)=0$. Pertanto, calcolando il limite del rapporto incrementale, si ha

$$
\lim_{x\to\pi}\frac{f(x)-f(\pi)}{x-\pi}
=\lim_{x\to\pi}(e^x\tan x)\frac{|x-\pi|}{x-\pi}=0.
$$

Nell’ultimo passaggio si è usato che il prodotto di una funzione infinitesima e di una funzione limitata è una funzione infinitesima. Infatti, per continuità di $e^x\tan x$,

$$
\lim_{x\to\pi}e^x\tan x=0,
$$

mentre

$$
\left|\frac{|x-\pi|}{x-\pi}\right|=1.
$$

Siccome il limite del rapporto incrementale esiste finito, per definizione $f$ è derivabile in $\pi$.

(c) No, $\pi$ non è un punto di estremo locale per $f$. Se per assurdo lo fosse, siccome $f(\pi)=0$, dovrebbe esistere un intorno $I$ di $\pi$ tale che $f(x)\geq 0$ per ogni $x\in I$ (nel caso di punto di minimo locale), oppure $f(x)\leq 0$ per ogni $x\in I$ (nel caso di punto di massimo locale).

Tuttavia, $e^x|x-\pi|>0$ per ogni $x\neq\pi$, mentre $\tan x$ cambia segno quando $x$ passa per $\pi$. Pertanto anche il loro prodotto $f(x)=e^x|x-\pi|\tan x$ cambia segno quando $x$ passa per $\pi$, e un intorno $I$ di $\pi$ con la proprietà indicata non può esistere.
:::
:::

:::exercise{id="X2025-16" type="esame" chapter="7" difficulty="facile"}
## Domanda
**Esame del 7 febbraio 2025 - turno 1 - versione 4**

**Esercizio 2**

(a) Scrivere le definizioni di punto di massimo locale e di punto di minimo locale per una funzione reale di variabile reale.

(b) Data la funzione

$$
f(x)=(e^x\cot x)\cdot|x-\pi/2|,
$$

dire se $f$ è derivabile in $x_0=\pi/2$, motivando la risposta.

(c) Stabilire se $x_0=\pi/2$ è un punto di estremo locale per la funzione $f$ del punto (b), specificando eventualmente se è di massimo o di minimo per $f$.

:::solution
**Esercizio 2**

(a) Siano $f:\operatorname{dom}(f)\subseteq\mathbb{R}\to\mathbb{R}$ e $x_0\in\operatorname{dom}(f)$. Si dice che $x_0$ è un punto di massimo locale per $f$ se esiste un intorno $I$ di $x_0$ tale che

$$
f(x)\leq f(x_0)\quad\text{per ogni }x\in I\cap\operatorname{dom}(f).
$$

Si dice invece che $x_0$ è un punto di minimo locale per $f$ se esiste un intorno $I$ di $x_0$ tale che

$$
f(x)\geq f(x_0)\quad\text{per ogni }x\in I\cap\operatorname{dom}(f).
$$

(b) Osserviamo che $f(\pi/2)=0$. Pertanto, calcolando il limite del rapporto incrementale, si ha

$$
\lim_{x\to\pi/2}\frac{f(x)-f(\pi/2)}{x-\pi/2}
=\lim_{x\to\pi/2}(e^x\cot x)\frac{|x-\pi/2|}{x-\pi/2}=0.
$$

Nell’ultimo passaggio si è usato che il prodotto di una funzione infinitesima e di una funzione limitata è una funzione infinitesima. Infatti,

$$
\lim_{x\to\pi/2}(e^x\cot x)=e^{\pi/2}\cot(\pi/2)=0,
$$

per continuità di $e^x\cot x$, mentre

$$
\left|\frac{|x-\pi/2|}{x-\pi/2}\right|=1.
$$

Siccome il limite del rapporto incrementale esiste finito, per definizione $f$ è derivabile in $\pi/2$.

(c) No, $\pi/2$ non è un punto di estremo locale per $f$. Se per assurdo lo fosse, siccome $f(\pi/2)=0$, dovrebbe esistere un intorno $I$ di $\pi/2$ tale che $f(x)\geq 0$ per ogni $x\in I$ (nel caso di punto di minimo locale), oppure $f(x)\leq 0$ per ogni $x\in I$ (nel caso di punto di massimo locale).

Tuttavia, $e^x|x-\pi/2|>0$ per ogni $x\neq\pi/2$, mentre $\cot x$ cambia segno quando $x$ passa per $\pi/2$. Pertanto anche il loro prodotto $f(x)=e^x|x-\pi/2|\cot x$ cambia segno quando $x$ passa per $\pi/2$, e un intorno $I$ di $\pi/2$ con la proprietà indicata non può esistere.
:::
:::

:::exercise{id="X2025-17" type="esame" chapter="8" difficulty="difficile"}
## Domanda
**Esame del 7 febbraio 2025 - turno 1 - versione 3**

**Esercizio 1**

Si consideri la funzione $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x) = \arctan \frac{1}{x|x|} - \frac{1}{4}\log(1+x^4)
$$

(a) Determinare il dominio $\operatorname{dom}(f)$, i limiti agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Sia $g(x) = \exp(-f(x)) - x$. Determinare l’ordine di infinitesimo e la parte principale di $g(x)$ per $x \to +\infty$ rispetto al campione $1/x$.

:::solution
**Svolgimento**

Si consideri la funzione $f : \operatorname{dom} f \subseteq \mathbb{R} \to \mathbb{R}$ definita da $f(x) = \arctan \frac{1}{x|x|} - \frac{1}{4}\log(1 + x^4)$.

(a) Determinare il dominio di definizione $\operatorname{dom} f$, eventuali proprietà di simmetria, i limiti agli estremi di $\operatorname{dom} f$ e gli eventuali asintoti.

Osserviamo che l’argomento $1 + x^4$ del logaritmo è sempre maggiore o uguale a $1$, quindi il termine $\log(1 + x^4)$ non pone restrizioni sul dominio. L’unica restrizione è dunque posta dalla frazione $\frac{1}{x|x|}$, il cui denominatore si annulla solo in $x = 0$. In conclusione $\operatorname{dom}(f) = \mathbb{R} \setminus \{0\} = (-\infty, 0) \cup (0, +\infty)$.

Osserviamo ora che

$$
\lim_{x \to 0^\pm} \frac{1}{x|x|} = \pm \lim_{x \to 0^\pm} \frac{1}{x^2} = \pm\infty,
\qquad
\lim_{x \to \pm\infty} \frac{1}{x|x|} = \pm \lim_{x \to \pm\infty} \frac{1}{x^2} = 0,
$$

pertanto, dal cambio di variabile $y = \frac{1}{x|x|}$ e la continuità della funzione $\arctan$, si deduce che

$$
\lim_{x \to 0^\pm} \arctan \frac{1}{x|x|} = \lim_{y \to \pm\infty} \arctan y = \pm\frac{\pi}{2},
\qquad
\lim_{x \to \pm\infty} \arctan \frac{1}{x|x|} = \arctan 0 = 0.
$$

D’altra parte, siccome $x \mapsto \log(1 + x^4)$ è continua e $\lim_{x \to \pm\infty}(1 + x^4) = +\infty$,

$$
\lim_{x \to 0^\pm} \log(1 + x^4) = \log 1 = 0,
\qquad
\lim_{x \to \pm\infty} \log(1 + x^4) = \lim_{y \to +\infty} \log y = +\infty,
$$

dove si è usato il cambio di variabili $y = 1 + x^4$. Per l’Algebra dei Limiti concludiamo allora che

$$
\lim_{x \to 0^-} f(x) = -\frac{\pi}{2},
\qquad
\lim_{x \to 0^+} f(x) = \frac{\pi}{2},
\qquad
\lim_{x \to \pm\infty} f(x) = -\infty.
$$

Dal calcolo dei limiti deduciamo che $f$ non è né pari né dispari, e che inoltre non ha asintoti orizzontali né verticali. Infine,

$$
f(x) = -\frac{1}{4}\log(1 + x^4) + o(1) = -\log|x| + o(1)
\quad \text{per } x \to \pm\infty,
$$

e quindi $\frac{f(x)}{x} \to 0$ mentre $f(x) \to -\infty$ per $x \to \pm\infty$: ne segue che $f$ non ha asintoti obliqui su nessuno dei due rami.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità in $\operatorname{dom} f$, e calcolare la derivata $f'$.

La funzione è composizione di funzioni continue, pertanto è continua in $\operatorname{dom} f = \mathbb{R} \setminus \{0\}$. Inoltre, dato che $\lim_{x \to 0^-} f(x) = -\frac{\pi}{2}$ e $\lim_{x \to 0^+} f(x) = \frac{\pi}{2}$, il punto $0$ (che non appartiene a $\operatorname{dom} f$) è una discontinuità di tipo salto per $f$.

Per analoghe ragioni $f$ è derivabile sul suo dominio, cioè $\operatorname{dom}(f') = \operatorname{dom} f$: infatti il punto $x = 0$ dove l’argomento del valore assoluto si annulla è escluso dal dominio.

Infine, usando le regole di derivazione, per ogni $x \in \operatorname{dom}(f') = \mathbb{R} \setminus \{0\}$,

$$
f'(x) = \frac{1}{1 + \left(\frac{1}{x|x|}\right)^2} \cdot \left(- (x|x|)^{-2}\right) \cdot (2|x|) - \frac{1}{4} \frac{4x^3}{1 + x^4} = -\frac{x^3 + 2|x|}{1 + x^4} = -\frac{|x|}{1 + x^4}(x|x| + 2).
$$

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

Dalla formula trovata in (b), si ha che, per ogni $x \in \operatorname{dom}(f') = \mathbb{R} \setminus \{0\}$,

$$
\operatorname{sign} f'(x) = \operatorname{sign} (-(x|x| + 2)) =
\begin{cases}
\operatorname{sign} (-(x^2 + 2)) & \text{se } x > 0,\\
\operatorname{sign} (x^2 - 2) & \text{se } x < 0,
\end{cases}
$$

da cui si deduce che

$$
\begin{aligned}
f'(x) < 0 &\iff x \in (-\sqrt{2},0) \cup (0,+\infty)\\
f'(x) = 0 &\iff x = -\sqrt{2}\\
f'(x) > 0 &\iff x \in (-\infty,-\sqrt{2}).
\end{aligned}
$$

Pertanto $f$ è strettamente crescente sull’intervallo $(-\infty,-\sqrt{2}\rbrack $ e strettamente decrescente sugli intervalli $\lbrack -\sqrt{2},0)$ e $(0,+\infty)$. Ne deduciamo che $-\sqrt{2}$ è l’unico punto di massimo locale per $f$ e che $f$ non ha punti di minimo locale. Siccome poi $\lim_{x \to 0^+} f(x) = \pi/2$, sappiamo che $\sup f \ge \pi/2 > 0$, mentre $f(-\sqrt{2}) = -\arctan \frac{1}{2} - \frac{1}{4}\log 5 < 0$, da cui segue che $-\sqrt{2}$ non è un punto di massimo globale per $f$. Non essendoci punti di minimo locale, $f$ non possiede nemmeno estremi globali.

(d) Tracciare un grafico qualitativo di $f$.

Sul ramo negativo, $f$ cresce strettamente da $-\infty$ (per $x \to -\infty$) fino al valore massimo $f(-\sqrt{2}) = -\arctan\frac{1}{2} - \frac{1}{4}\log 5$, restando sempre negativa, e poi decresce avvicinandosi a $-\pi/2$ (senza raggiungerlo) mentre $x \to 0^-$: il grafico resta dunque sotto l’asse delle ascisse su tutto $(-\infty,0)$.

Nel punto $x = 0$, escluso dal dominio, si osserva il salto di discontinuità: $f(0^-) = -\pi/2$ e $f(0^+) = \pi/2$.

Sul ramo positivo, $f$ decresce strettamente partendo da $\pi/2$ (per $x \to 0^+$) fino a $-\infty$ (per $x \to +\infty$); essendo strettamente decrescente e continua, questo ramo interseca l’asse delle ascisse esattamente una volta, in un punto $x_0 > 0$ con $f(x_0) = 0$, risultando positivo su $(0, x_0)$ e negativo su $(x_0, +\infty)$.

(e) Sia $g(x)=\exp(-f(x))-x$. Determinare l’ordine di infinitesimo e la parte principale di $g(x)$ per $x \to +\infty$ rispetto al campione $1/x$.

Per $x > 0$, si ha

$$
\exp(-f(x))=\exp\left(-\arctan\frac{1}{x^2}\right)\sqrt[4]{1+x^4}
=x\sqrt[4]{1+\frac{1}{x^4}}\exp\left(-\arctan\frac{1}{x^2}\right).
$$

Siccome $\lim_{x \to +\infty}\frac{1}{x^2}=\lim_{x \to +\infty}\frac{1}{x^4}=0$, usando gli sviluppi $e^y=1+y+o(y)$, $\arctan y=y+o(y)$ e $\sqrt[4]{1+y}=1+y/4+o(y)$ per $y \to 0$ e opportuni cambi di variabili, si ottiene che, per $x \to +\infty$,

$$
\begin{aligned}
g(x)&=x\left(1+\frac{1}{4x^4}+o\left(\frac{1}{x^4}\right)\right)\exp\left(-\frac{1}{x^2}+o\left(\frac{1}{x^2}\right)\right)-x\\
&=x\left(1+\frac{1}{4x^4}+o\left(\frac{1}{x^4}\right)\right)\left(1-\frac{1}{x^2}+o\left(\frac{1}{x^2}\right)\right)-x\\
&=-\frac{1}{x}+o\left(\frac{1}{x}\right).
\end{aligned}
$$

Dunque $g(x)$ ha ordine di infinitesimo $1$ e parte principale $-1/x$ rispetto al campione $1/x$ per $x \to +\infty$.
:::
:::

:::exercise{id="X2025-18" type="esame" chapter="8" difficulty="difficile"}
## Domanda
**Esame del 7 febbraio 2025 - turno 1 - versione 2**

**Esercizio 1**

Si consideri la funzione $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x)=\frac{1}{4}\log(1+x^4)-\arctan\frac{1}{x|x|}
$$

(a) Determinare il dominio $\operatorname{dom}(f)$, i limiti agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Sia $g(x)=\exp(f(x))-x$. Determinare l’ordine di infinitesimo e la parte principale di $g(x)$ per $x\to+\infty$ rispetto al campione $1/x$.

:::solution
**Svolgimento**

Si consideri la funzione $f:\operatorname{dom} f\subseteq\mathbb{R}\to\mathbb{R}$ definita da $f(x)=\frac{1}{4}\log(1+x^4)-\arctan\frac{1}{x|x|}$.

**(a)**

Determiniamo il dominio di definizione $\operatorname{dom} f$, eventuali proprietà di simmetria, i limiti agli estremi di $\operatorname{dom} f$ e gli eventuali asintoti.

Osserviamo che l’argomento $1+x^4$ del logaritmo è sempre maggiore o uguale a $1$, quindi il termine $\log(1+x^4)$ non pone restrizioni sul dominio. L’unica restrizione è dunque posta dalla frazione $\frac{1}{x|x|}$, il cui denominatore si annulla solo in $x=0$. In conclusione

$$
\operatorname{dom}(f)=\mathbb{R}\setminus\{0\}=(-\infty,0)\cup(0,+\infty).
$$

Osserviamo ora che

$$
\lim_{x\to0^\pm}\frac{1}{x|x|}=\pm\lim_{x\to0^\pm}\frac{1}{x^2}=\pm\infty,\qquad
\lim_{x\to\pm\infty}\frac{1}{x|x|}=\pm\lim_{x\to\pm\infty}\frac{1}{x^2}=0,
$$

pertanto, dal cambio di variabile $y=\frac{1}{x|x|}$ e dalla continuità della funzione $\arctan$, si deduce che

$$
\lim_{x\to0^\pm}\arctan\frac{1}{x|x|}=\lim_{y\to\pm\infty}\arctan y=\pm\frac{\pi}{2},\qquad
\lim_{x\to\pm\infty}\arctan\frac{1}{x|x|}=\arctan 0=0.
$$

D’altra parte, siccome $x\mapsto\log(1+x^4)$ è continua e $\lim_{x\to\pm\infty}(1+x^4)=+\infty$,

$$
\lim_{x\to0^\pm}\log(1+x^4)=\log 1=0,\qquad
\lim_{x\to\pm\infty}\log(1+x^4)=\lim_{y\to+\infty}\log y=+\infty,
$$

dove si è usato il cambio di variabile $y=1+x^4$. Per l’algebra dei limiti concludiamo allora che

$$
\lim_{x\to0^\pm}f(x)=\frac{1}{4}\cdot 0\mp\frac{\pi}{2}=\mp\frac{\pi}{2},\qquad
\lim_{x\to\pm\infty}f(x)=\frac{1}{4}\cdot(+\infty)-0=+\infty.
$$

Dal calcolo dei limiti deduciamo che $f$ non è né pari né dispari, e che inoltre non ha né asintoti orizzontali né verticali. Infine,

$$
f(x)=\frac{1}{4}\log(1+x^4)+o(1)=\log|x|+o(1)\quad\text{per }x\to\pm\infty,
$$

da cui segue che $\frac{f(x)}{x}=\frac{\log|x|}{x}+o\left(\frac{1}{x}\right)\to 0$ per $x\to\pm\infty$. Poiché $f(x)\to+\infty$ per $x\to\pm\infty$, non esiste nemmeno un asintoto orizzontale con pendenza nulla, e dunque $f$ non ha alcun asintoto obliquo né orizzontale.

**(b)**

Studiamo la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità in $\operatorname{dom} f$, e calcoliamo la derivata $f'$.

La funzione è composizione di funzioni continue, pertanto è continua in $\operatorname{dom} f=\mathbb{R}\setminus\{0\}$. Inoltre, dato che $\lim_{x\to0^\pm} f(x)=\mp\frac{\pi}{2}$, il punto $0$ (che non appartiene a $\operatorname{dom} f$) è una discontinuità di tipo salto per $f$.

Per analoghe ragioni $f$ è derivabile sul suo dominio, cioè $\operatorname{dom}(f')=\operatorname{dom} f$: infatti il punto $x=0$ dove l’argomento del valore assoluto si annulla è escluso dal dominio.

Infine, usando le regole di derivazione, per ogni $x\in\operatorname{dom}(f')=\mathbb{R}\setminus\{0\}$,

$$
f'(x)=\frac{1}{4}\frac{4x^3}{1+x^4}-\frac{1}{1+\left(\frac{1}{x|x|}\right)^2}\cdot\left(-(x|x|)^{-2}\right)\cdot(2|x|)=\frac{x^3+2|x|}{1+x^4}=\frac{|x|}{1+x^4}(x|x|+2).
$$

**(c)**

Determiniamo gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

Dalla formula trovata in (b), si ha che, per ogni $x\in\operatorname{dom}(f')=\mathbb{R}\setminus\{0\}$,

$$
\operatorname{sign} f'(x)=\operatorname{sign}(x|x|+2)=
\begin{cases}
\operatorname{sign}(x^2+2) & \text{se } x>0,\\
\operatorname{sign}(2-x^2) & \text{se } x<0,
\end{cases}
$$

da cui si deduce che

$$
\begin{aligned}
f'(x)>0 &\iff x\in(-\sqrt{2},0)\cup(0,+\infty),\\
f'(x)=0 &\iff x=-\sqrt{2},\\
f'(x)<0 &\iff x\in(-\infty,-\sqrt{2}).
\end{aligned}
$$

Pertanto $f$ è strettamente decrescente sull’intervallo $(-\infty,-\sqrt{2}\rbrack $ e strettamente crescente sugli intervalli $\lbrack -\sqrt{2},0)$ e $(0,+\infty)$. Deduciamo che $-\sqrt{2}$ è l’unico punto di minimo locale per $f$ e che $f$ non ha punti di massimo locale. Siccome poi $\lim_{x\to0^+} f(x)=-\pi/2$, sappiamo che $\inf f\le-\pi/2<0$, mentre $f(-\sqrt{2})=\frac{1}{4}\log 5+\arctan\frac{1}{2}>0$, da cui segue che $-\sqrt{2}$ non è un punto di minimo globale per $f$.

**(d)**

Tracciamo un grafico qualitativo di $f$. A sinistra dell’asse verticale la curva scende fino a un minimo e poi risale; a destra dell’asse verticale parte sotto l’asse orizzontale, cresce e lo attraversa.

**(e)**

Sia $g(x)=\exp(f(x))-x$. Determiniamo l’ordine di infinitesimo e la parte principale di $g(x)$ per $x\to+\infty$ rispetto al campione $1/x$.

Per $x>0$, si ha

$$
\exp f(x)=\exp\left(-\arctan\frac{1}{x^2}\right)\sqrt[4]{1+x^4}=x\sqrt[4]{1+\frac{1}{x^4}}\exp\left(-\arctan\frac{1}{x^2}\right).
$$

Siccome $\lim_{x\to+\infty}\frac{1}{x^2}=\lim_{x\to+\infty}\frac{1}{x^4}=0$, usando gli sviluppi $e^y=1+y+o(y)$, $\arctan y=y+o(y)$ e $\sqrt[4]{1+y}=1+y/4+o(y)$ per $y\to0$ e opportuni cambi di variabili, si ottiene che, per $x\to+\infty$,

$$
\begin{aligned}
g(x)&=x\left(1+\frac{1}{4x^4}+o\left(\frac{1}{x^4}\right)\right)\exp\left(-\frac{1}{x^2}+o\left(\frac{1}{x^2}\right)\right)-x\\
&=x\left(1+\frac{1}{4x^4}+o\left(\frac{1}{x^4}\right)\right)\left(1-\frac{1}{x^2}+o\left(\frac{1}{x^2}\right)\right)-x\\
&=-\frac{1}{x}+o\left(\frac{1}{x}\right).
\end{aligned}
$$

Dunque $g(x)$ ha ordine di infinitesimo $1$ e parte principale $-1/x$ rispetto al campione $1/x$ per $x\to+\infty$.
:::
:::

:::exercise{id="X2025-19" type="esame" chapter="8" difficulty="difficile"}
## Domanda
**Esame del 7 febbraio 2025 - turno 1 - versione 4**

**Esercizio 1**

Si consideri la funzione $f:\operatorname{dom}(f)\subseteq\mathbb{R}\to\mathbb{R}$ definita da

$$
f(x)=\arctan\left(-\frac{1}{x|x|}\right)-\frac{1}{4}\log(1+x^4).
$$

(a) Determinare il dominio $\operatorname{dom}(f)$, i limiti agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Sia $g(x)=\exp(-f(x))-x$. Determinare l’ordine di infinitesimo e la parte principale di $g(x)$ per $x\to+\infty$ rispetto al campione $1/x$.

:::solution
**Esercizio 1**

Si consideri la funzione $f:\operatorname{dom} f\subseteq\mathbb{R}\to\mathbb{R}$ definita da $f(x)=\arctan\left(-\frac{1}{x|x|}\right)-\frac{1}{4}\log(1+x^4)$.

**(a)**

L’argomento $1+x^4$ del logaritmo è sempre maggiore o uguale a $1$, quindi il termine $\log(1+x^4)$ non pone restrizioni sul dominio. L’unica restrizione è posta dalla frazione $\frac{1}{x|x|}$, il cui denominatore si annulla solo in $x=0$. In conclusione,

$$
\operatorname{dom}(f)=\mathbb{R}\setminus\{0\}=(-\infty,0)\cup(0,+\infty).
$$

Si ha

$$
\lim_{x\to 0^\pm}\left(-\frac{1}{x|x|}\right)=\mp\lim_{x\to 0^\pm}\frac{1}{x^2}=\mp\infty,
\qquad
\lim_{x\to\pm\infty}\left(-\frac{1}{x|x|}\right)=\mp\lim_{x\to\pm\infty}\frac{1}{x^2}=0.
$$

Pertanto, dal cambio di variabile $y=-\frac{1}{x|x|}$ e dalla continuità della funzione $\arctan$, si deduce che

$$
\lim_{x\to 0^\pm}\arctan\left(-\frac{1}{x|x|}\right)=\lim_{y\to\mp\infty}\arctan y=\mp\frac{\pi}{2},
\qquad
\lim_{x\to\pm\infty}\arctan\left(-\frac{1}{x|x|}\right)=\arctan 0=0.
$$

D’altra parte, siccome $x\mapsto\log(1+x^4)$ è continua e $\lim_{x\to\pm\infty}(1+x^4)=+\infty$,

$$
\lim_{x\to 0^\pm}\log(1+x^4)=\log 1=0,
\qquad
\lim_{x\to\pm\infty}\log(1+x^4)=\lim_{y\to+\infty}\log y=+\infty,
$$

dove si è usato il cambio di variabili $y=1+x^4$. Per l’algebra dei limiti concludiamo allora che

$$
\lim_{x\to 0^\pm}f(x)=\mp\frac{\pi}{2}-\frac{1}{4}\cdot 0=\mp\frac{\pi}{2},
\qquad
\lim_{x\to\pm\infty}f(x)=0-\frac{1}{4}\cdot(+\infty)=-\infty.
$$

Dal calcolo dei limiti deduciamo che $f$ non è né pari né dispari, e che inoltre non ha né asintoti orizzontali né verticali. Infine,

$$
f(x)=-\frac{1}{4}\log(1+x^4)+o(1)=-\log|x|+o(1)=o(x)
\quad\text{per }x\to\pm\infty,
$$

da cui segue che $f$ non ha nemmeno asintoti obliqui.

**(b)**

La funzione è composizione di funzioni continue, pertanto è continua in $\operatorname{dom} f=\mathbb{R}\setminus\{0\}$. Inoltre, è derivabile in tutto il suo dominio, cioè $\operatorname{dom}(f')=\operatorname{dom} f$. Il punto $0$ è escluso dal dominio; in esso i limiti laterali sono finiti e diversi, poiché $\lim_{x\to 0^-}f(x)=\frac{\pi}{2}$ e $\lim_{x\to 0^+}f(x)=-\frac{\pi}{2}$. Dunque, ogni estensione di $f$ attraverso $0$ presenta in quel punto un salto.

Usando le regole di derivazione, per ogni $x\in\operatorname{dom}(f')=\mathbb{R}\setminus\{0\}$,

$$
\begin{aligned}
f'(x)&=\frac{1}{1+\left(-\frac{1}{x|x|}\right)^2}\cdot\left((x|x|)^{-2}\right)\cdot(2|x|)-\frac{1}{4}\frac{4x^3}{1+x^4}\\
&=\frac{2|x|-x^3}{1+x^4}\\
&=\frac{|x|}{1+x^4}(2-x|x|).
\end{aligned}
$$

**(c)**

Dalla formula trovata in (b), per ogni $x\in\operatorname{dom}(f')=\mathbb{R}\setminus\{0\}$,

$$
\operatorname{sign} f'(x)=\operatorname{sign}(2-x|x|)=
\begin{cases}
\operatorname{sign}(2-x^2) & \text{se }x>0,\\
\operatorname{sign}(2+x^2) & \text{se }x<0,
\end{cases}
$$

da cui si deduce che

$$
\begin{aligned}
f'(x)<0 &\iff x\in(\sqrt{2},+\infty),\\
f'(x)=0 &\iff x=\sqrt{2},\\
f'(x)>0 &\iff x\in(-\infty,0)\cup(0,\sqrt{2}).
\end{aligned}
$$

Pertanto $f$ è strettamente decrescente sull’intervallo $\lbrack \sqrt{2},+\infty)$ e strettamente crescente sugli intervalli $(-\infty,0)$ e $(0,\sqrt{2}\rbrack $. Ne deduciamo che $\sqrt{2}$ è l’unico punto di massimo locale per $f$ e che $f$ non ha punti di minimo locale. Siccome poi $\lim_{x\to 0^-}f(x)=\pi/2$, sappiamo che $\sup f\ge\pi/2>0$, mentre

$$
f(\sqrt{2})=-\frac{1}{4}\log 5-\arctan\frac{1}{2}<0,
$$

da cui segue che $\sqrt{2}$ non è un punto di massimo globale per $f$, e che $f$ non ha punti di estremo globale.

**(d)**

Grafico qualitativo: assi cartesiani senza tacche; curva rossa crescente a sinistra, che attraversa l’asse orizzontale e si avvicina al punto $(0,\pi/2)$ con un estremo aperto. A destra dell’asse verticale la curva riparte sotto l’asse orizzontale, cresce fino a un massimo locale e poi decresce.

**(e)**

Per $x>0$, si ha

$$
\exp(-f(x))=\exp\left(\arctan\frac{1}{x^2}\right)\sqrt[4]{1+x^4}
=x\sqrt[4]{1+\frac{1}{x^4}}\exp\left(\arctan\frac{1}{x^2}\right).
$$

Siccome $\lim_{x\to+\infty}\frac{1}{x^2}=\lim_{x\to+\infty}\frac{1}{x^4}=0$, usando gli sviluppi $e^y=1+y+o(y)$, $\arctan y=y+o(y)$ e $\sqrt[4]{1+y}=1+y/4+o(y)$ per $y\to0$ e opportuni cambi di variabili, si ottiene che, per $x\to+\infty$,

$$
\begin{aligned}
g(x)&=x\left(1+\frac{1}{4x^4}+o\left(\frac{1}{x^4}\right)\right)\exp\left(\frac{1}{x^2}+o\left(\frac{1}{x^2}\right)\right)-x\\
&=x\left(1+\frac{1}{4x^4}+o\left(\frac{1}{x^4}\right)\right)\left(1+\frac{1}{x^2}+o\left(\frac{1}{x^2}\right)\right)-x\\
&=\frac{1}{x}+o\left(\frac{1}{x}\right).
\end{aligned}
$$

Dunque $g(x)$ ha ordine di infinitesimo $1$ e parte principale $1/x$ rispetto al campione $1/x$ per $x\to+\infty$.
:::
:::

:::exercise{id="X2025-20" type="esame" chapter="2" difficulty="medio"}
## Domanda
**Esame del 13 giugno 2025 - turno U - versione 1**

**Esercizio 2**

(a) Dato $z \in \mathbb{C}$, dare la definizione di complesso coniugato $\bar z$ di $z$ e dimostrare che, dati $z,w \in \mathbb{C}$, allora $\overline{z\cdot w}=\bar z\cdot\bar w$.

(b) Rappresentare nel piano complesso l’insieme

$$
A=\{z\in\mathbb{C}: 1\leq |z|\leq 2,\ \bar z+z\geq 0\ \text{e}\ 0\leq\operatorname{Im}z\leq\operatorname{Re}z\}.
$$

(c) Rappresentare nel piano complesso l’insieme

$$
B=\{z^3:z\in A\}.
$$

:::solution
**Esercizio 2**

(a) Dato $z \in \mathbb{C}$, dare la definizione di complesso coniugato $\bar z$ di $z$ e dimostrare che, dati $z,w \in \mathbb{C}$, allora $\overline{z\cdot w}=\bar z\cdot\bar w$.

Se $z=x+iy$ con $x,y\in\mathbb{R}$, si definisce $\bar z=x-iy$.

Se $z=x+iy$ e $w=u+iv$ allora

$$
\overline{z\cdot w}
=\overline{(x+iy)(u+iv)}
=\overline{xu-yv+i(xv+yu)}
=xu-yv-i(xv+yu)
=(x-iy)(u-iv)
=\bar z\cdot\bar w.
$$

(b) Rappresentare nel piano complesso l’insieme

$$
A=\{z\in\mathbb{C}: 1\leq |z|\leq 2,\ \bar z+z\geq 0\ \text{e}\ 0\leq\operatorname{Im}z\leq\operatorname{Re}z\}.
$$

Per $z\in A$ vale $1\leq |z|\leq 2$, $\operatorname{Re}z\geq 0$ e $0\leq\operatorname{Im}z\leq\operatorname{Re}z$. Con rappresentazione polare $z=re^{i\theta}$ vale $1\leq r\leq 2$, $0\leq\theta\leq\pi/4$.

(c) Rappresentare nel piano complesso l’insieme

$$
B=\{z^3:z\in A\}.
$$

In forma polare $z=re^{i\theta}$ abbiamo $w=z^3=r^3e^{i3\theta}$. Quindi

$$
B=\{w=\rho e^{i\phi}:1\leq\rho\leq 8,\ 0\leq\phi\leq 3\pi/4\}.
$$
:::
:::

:::exercise{id="X2025-21" type="esame" chapter="2" difficulty="medio"}
## Domanda
**Esame del 13 giugno 2025 - turno U - versione 4**

**Esercizio 2**

**(a)** Dato $z \in \mathbb{C}$, dare la definizione di complesso coniugato $\overline{z}$ di $z$ e dimostrare che $\overline{z^2} = \overline{z}^{\,2}$.

**(b)** Rappresentare nel piano complesso l’insieme

$$
A = \{z \in \mathbb{C} : 1 \le |z| \le 2,\ i(z-\overline{z}) \ge 0 \text{ e } \operatorname{Im} z \le \operatorname{Re} z \le -\operatorname{Im} z\}.
$$

**(c)** Rappresentare nel piano complesso l’insieme

$$
B = \{z^2 : z \in A\}.

:::solution
**Esercizio 2**

**(a)** Dato $z \in \mathbb{C}$, dare la definizione di complesso coniugato $\overline{z}$ di $z$ e dimostrare che $\overline{z^2} = \overline{z}^{\,2}$.

Se $z = x + iy$ con $x,y \in \mathbb{R}$ si definisce $\overline{z} = x - iy$.

Inoltre

$$
\overline{z^2} = \overline{(x+iy)^2} = \overline{x^2-y^2+2ixy} = x^2-y^2-2ixy = (x-iy)^2 = \overline{z}^{\,2}.
$$

**(b)** Rappresentare nel piano complesso l’insieme

$$
A = \{z \in \mathbb{C} : 1 \le |z| \le 2,\ i(z-\overline{z}) \ge 0 \text{ e } \operatorname{Im} z \le \operatorname{Re} z \le -\operatorname{Im} z\}.
$$

Per $z \in A$ vale $1 \le |z| \le 2$, $\operatorname{Im} z \le 0$ e $\operatorname{Im} z \le \operatorname{Re} z \le -\operatorname{Im} z$. Con rappresentazione polare $z = re^{i\theta}$ vale $1 \le r \le 2$, $-\frac{3\pi}{4} \le \theta \le -\frac{\pi}{4}$.

**(c)** Rappresentare nel piano complesso l’insieme

$$
B = \{z^2 : z \in A\}.
$$

In forma polare $z = re^{i\theta}$ abbiamo $w = z^2 = r^2e^{i2\theta}$. Quindi

$$
\begin{aligned}
B &= \{w = \rho e^{i\phi} : 1 \le \rho \le 4,\ -\frac{3\pi}{2} \le \phi \le -\frac{\pi}{2}\}\\
&= \{w = \rho e^{i\phi} : 1 \le \rho \le 4,\ \frac{\pi}{2} \le \phi \le \frac{3\pi}{2}\}.
\end{aligned}
$$
:::
:::

:::exercise{id="X2025-22" type="esame" chapter="2" difficulty="medio"}
## Domanda
**Esame del 13 giugno 2025 - turno U - versione 3**

**Esercizio 2**

(a) Dato $z \in \mathbb{C}$, dare la definizione di complesso coniugato $\overline{z}$ di $z$ e dimostrare che, dati $z,w \in \mathbb{C}$, allora $\overline{z \cdot w} = \overline{z} \cdot \overline{w}$.

(b) Rappresentare nel piano complesso l’insieme

$$
A = \{z \in \mathbb{C} : 1 \leq |z| \leq 2,\ i(z - \overline{z}) \leq 0 \text{ e } -\operatorname{Im} z \leq \operatorname{Re} z \leq \operatorname{Im} z\}.
$$

(c) Rappresentare nel piano complesso l’insieme

$$
B = \{z^2 : z \in A\}.
$$

:::solution
**(a)**

Se $z=x+iy$ con $x,y\in\mathbb{R}$, si definisce $\overline{z}=x-iy$.

Se $z=x+iy$ e $w=u+iv$ allora

$$
\begin{aligned}
z\cdot w
&=(x+iy)(u+iv)\\
&=(xu-yv)+i(xv+yu),
\end{aligned}
$$

da cui

$$
\begin{aligned}
\overline{z\cdot w}
&=(xu-yv)-i(xv+yu)\\
&=(x-iy)(u-iv)\\
&=\overline{z}\cdot\overline{w}.
\end{aligned}
$$

**(b)**

Per $z\in A$ vale $1\leq |z|\leq 2$, $\operatorname{Im}z\geq 0$ e $-\operatorname{Im}z\leq\operatorname{Re}z\leq\operatorname{Im}z$. Con rappresentazione polare $z=re^{i\theta}$ vale $1\leq r\leq 2$, $\pi/4\leq\theta\leq 3\pi/4$.

**(c)**

In forma polare $z=re^{i\theta}$ abbiamo $w=z^2=r^2e^{i2\theta}$. Quindi

$$
B=\{w=\rho e^{i\phi}:1\leq\rho\leq 4,\ \pi/2\leq\phi\leq 3\pi/2\}
$$

e

$$
B=\{z\in\mathbb{C}:\operatorname{Re}z\leq 0\}\cap\{z\in\mathbb{C}:1\leq |z|\leq 4\}.
$$
:::
:::

:::exercise{id="X2025-23" type="esame" chapter="2" difficulty="medio"}
## Domanda
**Esame del 13 giugno 2025 - turno U - versione 2**

**Esercizio 2**

**(a)** Dato $z \in \mathbb{C}$, dare la definizione di complesso coniugato $\bar z$ di $z$ e dimostrare che $\overline{z^2} = \bar z^2$.

**(b)** Rappresentare nel piano complesso l’insieme

$$
A = \{z \in \mathbb{C} : 1 \le |z| \le 2,\ \bar z + z \ge 0 \text{ e } -\operatorname{Re} z \le \operatorname{Im} z \le 0\}.
$$

**(c)** Rappresentare nel piano complesso l’insieme

$$
B = \{z^3 : z \in A\}.

:::solution
**Esercizio 2**

**(a)** Dato $z \in \mathbb{C}$, dare la definizione di complesso coniugato $\overline{z}$ di $z$ e dimostrare che $\overline{z^2} = \overline{z}^{\,2}$.

Se $z = x + iy$ con $x,y \in \mathbb{R}$, si definisce $\overline{z} = x - iy$.

Inoltre

$$
\overline{z^2} = \overline{(x+iy)^2} = \overline{x^2-y^2+2ixy} = x^2-y^2-2ixy = (x-iy)^2 = \overline{z}^{\,2}.
$$

**(b)** Rappresentare nel piano complesso l’insieme

$$
A = \{z \in \mathbb{C} : 1 \le |z| \le 2,\ \overline{z}+z \ge 0\ \text{e}\ -\operatorname{Re} z \le \operatorname{Im} z \le 0\}.
$$

Per $z \in A$ vale $1 \le |z| \le 2$, $\operatorname{Re} z \ge 0$ e $-\operatorname{Re} z \le \operatorname{Im} z \le 0$. Con rappresentazione polare $z = re^{i\theta}$ vale $1 \le r \le 2$, $-\pi/4 \le \theta \le 0$.

**(c)** Rappresentare nel piano complesso l’insieme

$$
B = \{z^3 : z \in A\}.
$$

In forma polare $z = re^{i\theta}$ abbiamo $w = z^3 = r^3e^{i3\theta}$. Quindi

$$
B = \{w = \rho e^{i\phi} : 1 \le \rho \le 8,\ -3\pi/4 \le \phi \le 0\}.
:::
:::

:::exercise{id="X2025-24" type="esame" chapter="8" difficulty="difficile"}
## Domanda
**Esame del 13 giugno 2025 - turno U - versione 4**

**Esercizio 1**

Si consideri la funzione $f:\operatorname{dom}(f)\subseteq\mathbb{R}\to\mathbb{R}$ definita da

$$
f(x)=-x\sqrt[3]{(\log(|2x|))^2}
$$

**(a)**

Determinare il dominio $\operatorname{dom}(f)$, eventuali proprietà di simmetria, i limiti agli estremi del dominio e gli eventuali asintoti.

**(b)**

Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

**(c)**

Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

**(d)**

Tracciare un grafico qualitativo di $f$.

**(e)**

Detto $g$ il prolungamento per continuità di $f$ nell’origine, determinare i punti critici della funzione integrale

$$
G(x)=\int_0^x g(t)\,\mathrm{d}t,\qquad x\in\mathbb{R}
$$

e stabilire se si tratta di minimi o massimi locali o globali.

:::solution
**Esercizio 1.** Si consideri la funzione $f:\operatorname{dom}(f)\subseteq\mathbb{R}\to\mathbb{R}$ definita da $f(x)=-x\sqrt[3]{(\log(|2x|))^2}$.

**(a)**

La funzione ha dominio $\operatorname{dom}(f)=\mathbb{R}\setminus\{0\}$. La funzione è dispari: $f(-x)=-f(x)$, per $x\neq 0$. Si ha

$$
\lim_{x\to\pm\infty}f(x)=\mp\infty
$$

e

$$
\lim_{x\to\pm 0}f(x)=\lim_{x\to\pm 0}(-x)(\log|2x|)^{\frac{2}{3}}=0.
$$

Non esistono asintoti né verticali, né orizzontali, né obliqui, poiché

$$
\lim_{x\to\pm\infty}\frac{f(x)}{x}=-\lim_{x\to\pm\infty}(\log|2x|)^{\frac{2}{3}}=-\infty.
$$

**(b)**

La funzione è continua sul dominio $\mathbb{R}\setminus\{0\}$. È derivabile per $x\in\mathbb{R}\setminus\{0,\pm\frac{1}{2}\}$ e si ha

$$
f'(x)=-(\log|2x|)^{\frac{2}{3}}-x\frac{2}{3}(\log|2x|)^{-\frac{1}{3}}\frac{1}{2x}\cdot 2=-(\log|2x|)^{\frac{2}{3}}-\frac{2}{3}(\log|2x|)^{-\frac{1}{3}}.
$$

Abbiamo

$$
\lim_{x\to 0^\pm}f'(x)=-\infty.
$$

Inoltre, siccome $\lim_{x\to\frac{1}{2}^\pm}\log(2x)=0^\pm$, si ha

$$
\lim_{x\to\frac{1}{2}^\pm}f'(x)=\mp\infty,
$$

$$
\lim_{x\to-\frac{1}{2}^\pm}f'(x)=\pm\infty.
$$

Segue che $x=\pm\frac{1}{2}$ sono punti di cuspide.

**(c)**

Si ha che $f'(x)=0$ per $x=\pm\frac{1}{2}e^{-\frac{2}{3}}$. Inoltre, $f'(x)<0$ per $x< -\frac{1}{2}$, per $x\in\left(-\frac{1}{2}e^{-\frac{2}{3}},0\right)$, per $x\in\left(0,\frac{1}{2}e^{-\frac{2}{3}}\right)$ e per $x>\frac{1}{2}$, mentre $f'(x)>0$ per $x\in\left(-\frac{1}{2},-\frac{1}{2}e^{-\frac{2}{3}}\right)$ e per $x\in\left(\frac{1}{2}e^{-\frac{2}{3}},\frac{1}{2}\right)$. La funzione è strettamente decrescente su $(-\infty,-\frac{1}{2}\rbrack $, su $\lbrack -\frac{1}{2}e^{-\frac{2}{3}},0)$, su $(0,\frac{1}{2}e^{-\frac{2}{3}}\rbrack $ e su $\lbrack \frac{1}{2},+\infty)$, e strettamente crescente su $\lbrack -\frac{1}{2},-\frac{1}{2}e^{-\frac{2}{3}}\rbrack $ e su $\lbrack \frac{1}{2}e^{-\frac{2}{3}},\frac{1}{2}\rbrack $. Il punto $x=-\frac{1}{2}e^{-\frac{2}{3}}$ è pertanto di massimo locale e $x=\frac{1}{2}e^{-\frac{2}{3}}$ è un punto di minimo locale. Inoltre, $x=-\frac{1}{2}$ è un punto di minimo locale e $x=\frac{1}{2}$ è un punto di massimo locale. Nessuno di questi quattro estremi locali è globale, poiché $f(x)\to+\infty$ per $x\to-\infty$ e $f(x)\to-\infty$ per $x\to+\infty$, e dunque $f$ non ammette né massimo né minimo globale su $\operatorname{dom}(f)$.

**(d)**

[figure: Grafico qualitativo di $f$, con estremi locali in $x=-\frac{1}{2}$, $x=-\frac{1}{2}e^{-\frac{2}{3}}$, $x=\frac{1}{2}e^{-\frac{2}{3}}$ e $x=\frac{1}{2}$.]

**(e)**

La funzione $g$ è continua su $\mathbb{R}$, e quindi $G'(x)=g(x)$ per ogni $x\in\mathbb{R}$. I punti critici di $G(x)$ sono perciò $x=\pm\frac{1}{2}$ e $x=0$. Segue che $x=0$ è un punto di massimo globale e $x=\pm\frac{1}{2}$ non sono punti estremi per $G(x)$.
:::
:::

:::exercise{id="X2025-25" type="esame" chapter="8" difficulty="difficile"}
## Domanda
**Esame del 13 giugno 2025 - turno U - versione 2**

**Esercizio 1**

Si consideri la funzione $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x) = -x \sqrt[3]{(\log(|x|))^2}
$$

(a) Determinare il dominio $\operatorname{dom}(f)$, eventuali proprietà di simmetria, i limiti agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Detto $g$ il prolungamento per continuità di $f$ nell’origine, determinare i punti critici della funzione integrale

$$
G(x) = \int_0^x g(t)\,dt, \qquad x \in \mathbb{R}
$$

e stabilire se si tratta di minimi o massimi locali o globali.

:::solution
**Esercizio 1**

La funzione ha dominio $\operatorname{dom}(f) = \mathbb{R} \setminus \{0\}$. È dispari, perché $f(-x) = -f(x)$ per ogni $x \ne 0$. Inoltre,

$$
\lim_{x \to \pm\infty} f(x) = \mp\infty, \qquad \lim_{x \to 0^\pm} f(x) = 0.
$$

Non esistono asintoti verticali, orizzontali o obliqui, poiché $\lim_{x \to \pm\infty} \frac{f(x)}{x} = -\infty$.

La funzione è continua sul dominio $\mathbb{R} \setminus \{0\}$. È derivabile per $x \in \mathbb{R} \setminus \{0, \pm1\}$ e la derivata è

$$
f'(x) = -|\log |x||^{\frac{2}{3}} - \frac{2}{3}\operatorname{sgn}(\log |x|)|\log |x||^{-\frac{1}{3}}.
$$

Si ha $\lim_{x \to 0^\pm} f'(x) = -\infty$. Inoltre,

$$
\lim_{x \to 1^-} f'(x) = +\infty, \qquad \lim_{x \to 1^+} f'(x) = -\infty,
$$

$$
\lim_{x \to -1^-} f'(x) = -\infty, \qquad \lim_{x \to -1^+} f'(x) = +\infty.
$$

Quindi $x = \pm1$ sono punti di cuspide.

Ponendo $a = e^{-\frac{2}{3}}$, si ha $f'(x) = 0$ per $x = \pm a$. La funzione è strettamente decrescente su $(-\infty, -1\rbrack $, $\lbrack -a, 0)$, $(0, a\rbrack $ e $\lbrack 1, +\infty)$, e strettamente crescente su $\lbrack -1, -a\rbrack $ e $\lbrack a, 1\rbrack $. I punti di massimo e minimo locale sono

- massimi locali: $(-a, a(2/3)^{2/3})$ e $(1, 0)$;
- minimi locali: $(-1, 0)$ e $(a, -a(2/3)^{2/3})$.

Nessuno di questi quattro punti è un estremo globale, poiché $f(x) \to +\infty$ per $x \to -\infty$ e $f(x) \to -\infty$ per $x \to +\infty$.

Il grafico qualitativo è simmetrico rispetto all'origine. Nel semipiano sinistro scende da $+\infty$ fino alla cuspide $(-1,0)$, sale fino al massimo locale $(-a,a(2/3)^{2/3})$, poi scende verso l'origine. Nel semipiano destro scende dall'origine fino al minimo locale $(a,-a(2/3)^{2/3})$, sale fino alla cuspide $(1,0)$, poi scende verso $-\infty$. Il grafico passa per i punti $(-1,0)$ e $(1,0)$ e tende all'origine da entrambi i lati, senza che l'origine appartenga al dominio.

La funzione $g$ è continua su $\mathbb{R}$, quindi $G'(x) = g(x)$ per ogni $x \in \mathbb{R}$. I punti critici di $G$ sono $x = -1, 0, 1$. Si ha $g(x) > 0$ per $x < 0$ con $x \ne -1$ e $g(x) < 0$ per $x > 0$ con $x \ne 1$. Pertanto, $x = 0$ è un punto di massimo globale, mentre $x = \pm1$ non sono punti estremi di $G$.
:::
:::

:::exercise{id="X2025-26" type="esame" chapter="8" difficulty="difficile"}
## Domanda
**Esame del 13 giugno 2025 - turno U - versione 3**

**Esercizio 1**

Si consideri la funzione $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x) = x \sqrt[3]{(\log(|2x|))^2}
$$

(a) Determinare il dominio $\operatorname{dom}(f)$, eventuali proprietà di simmetria, i limiti agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Detto $g$ il prolungamento per continuità di $f$ nell’origine, determinare i punti critici della funzione integrale

$$
G(x) = \int_0^x g(t)\,\mathrm{d}t, \qquad x \in \mathbb{R}
$$

e stabilire se si tratta di minimi o massimi locali o globali.

:::solution
**Svolgimento**

La funzione ha dominio $\operatorname{dom}(f)=\mathbb{R}\setminus\{0\}$. È dispari, poiché $f(-x)=-f(x)$ per $x\neq 0$. Si ha

$$
\lim_{x\to 0^-}f(x)=\lim_{x\to 0^+}f(x)=0, \qquad \lim_{x\to-\infty}f(x)=-\infty, \qquad \lim_{x\to+\infty}f(x)=+\infty.
$$

Non esistono asintoti verticali, orizzontali o obliqui: infatti $f(x)/x=(\log|2x|)^{2/3}\to+\infty$ per $x\to\pm\infty$.

La funzione è continua sul dominio. È derivabile per $x\in\mathbb{R}\setminus\{0,\pm\frac{1}{2}\}$. Ponendo $L=\log|2x|$, la derivata si può scrivere come

$$
f'(x)=\frac{L+\frac{2}{3}}{\sqrt[3]{L}}.
$$

Per $x\to 0^-$ e $x\to 0^+$, $f'(x)\to+\infty$. Il prolungamento continuo nell’origine ha tangente verticale. In $x=\frac{1}{2}$ le derivate laterali soddisfano

$$
\lim_{x\to(\frac{1}{2})^-}f'(x)=-\infty, \qquad \lim_{x\to(\frac{1}{2})^+}f'(x)=+\infty.
$$

In $x=-\frac{1}{2}$ si ha invece

$$
\lim_{x\to(-\frac{1}{2})^-}f'(x)=+\infty, \qquad \lim_{x\to(-\frac{1}{2})^+}f'(x)=-\infty.
$$

Entrambi i punti sono cuspidi. Gli zeri di $f$ sono $x=\pm\frac{1}{2}$. La derivata si annulla per $x=\pm a$, dove $a=\frac{1}{2}e^{-\frac{2}{3}}$. È positiva per $x< -\frac{1}{2}$, per $x\in(-a,0)$, per $x\in(0,a)$ e per $x>\frac{1}{2}$; è negativa per $x\in(-\frac{1}{2},-a)$ e per $x\in(a,\frac{1}{2})$.

Dunque $f$ cresce su $(-\infty,-\frac{1}{2}\rbrack $, $\lbrack -a,0)$, $(0,a\rbrack $ e $\lbrack \frac{1}{2},+\infty)$; decresce su $\lbrack -\frac{1}{2},-a\rbrack $ e $\lbrack a,\frac{1}{2}\rbrack $. Ha massimi locali in $-\frac{1}{2}$ e $a$, e minimi locali in $-a$ e $\frac{1}{2}$. Nessuno di questi estremi è globale, perché la funzione non è limitata né superiormente né inferiormente. Il grafico è dispari, presenta un punto escluso nell’origine, cuspidi negli zeri $\pm\frac{1}{2}$ e rami illimitati.

La funzione $g$ è continua su $\mathbb{R}$, quindi $G'(x)=g(x)$ per ogni $x\in\mathbb{R}$. I punti critici di $G$ sono $x=-\frac{1}{2}$, $x=0$ e $x=\frac{1}{2}$. Poiché $g(x)<0$ per $x<0$ e $g(x)>0$ per $x>0$, $x=0$ è un minimo globale di $G$. Nei punti $x=\pm\frac{1}{2}$ la derivata di $G$ non cambia segno, quindi non sono estremi.
:::
:::

:::exercise{id="X2025-27" type="esame" chapter="8" difficulty="difficile"}
## Domanda
**Esame del 13 giugno 2025 - turno U - versione 1**

**Esercizio 1**

Si consideri la funzione $f : \operatorname{dom}(f) \subseteq \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x) = x\sqrt[3]{(\log(|x|))^2}
$$

(a) Determinare il dominio $\operatorname{dom}(f)$, eventuali proprietà di simmetria, i limiti agli estremi del dominio e gli eventuali asintoti.

(b) Studiare la continuità e la derivabilità della funzione, individuando e classificando eventuali punti di discontinuità e di non derivabilità nel dominio, e calcolare la derivata di $f$.

(c) Determinare gli intervalli di monotonia e gli eventuali punti di massimo e di minimo locale di $f$, precisando se questi ultimi sono anche globali o meno.

(d) Tracciare un grafico qualitativo di $f$.

(e) Detto $g$ il prolungamento per continuità di $f$ nell'origine, determinare i punti critici della funzione integrale

$$
G(x) = \int_0^x g(t)\,\mathrm{d}t,\qquad x \in \mathbb{R}
$$

e stabilire se si tratta di minimi o massimi locali o globali.

:::solution
**Svolgimento**

La funzione ha dominio $\operatorname{dom}(f) = \mathbb{R} \setminus \{0\}$. È dispari, poiché $f(-x) = -f(x)$ per ogni $x \ne 0$. Si ha

$$
\lim_{x \to +\infty} f(x) = +\infty, \qquad \lim_{x \to -\infty} f(x) = -\infty,
$$

mentre

$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^-} f(x) = 0.
$$

Non esistono asintoti verticali, orizzontali o obliqui. Infatti, per $x \to \pm\infty$,

$$
\frac{f(x)}{x} = |\log |x||^{\frac{2}{3}} \longrightarrow +\infty,
$$

quindi non esistono asintoti obliqui; inoltre, la funzione tende a $0$ per $x \to 0$, e dunque non ha asintoti verticali.

La funzione è continua nel suo dominio e si prolunga per continuità ponendo $g(0)=0$. Il prolungamento $g$ è derivabile in $\mathbb{R} \setminus \{0,\pm1\}$ e non è derivabile in $x=0$, dove ha tangente verticale. Per $x \ne 0,\pm1$ vale

$$
f'(x) = |\log |x||^{\frac{2}{3}} + \frac{2}{3}\,\operatorname{sgn}(\log |x|)\,|\log |x||^{-\frac{1}{3}}.
$$

Per $x \to 0^+$ e $x \to 0^-$, $f'(x) \to +\infty$. In $x=1$, la derivata tende a $-\infty$ da sinistra e a $+\infty$ da destra; in $x=-1$, tende a $+\infty$ da sinistra e a $-\infty$ da destra. Pertanto $x=\pm1$ sono punti di cuspide.

Ponendo $a=e^{-\frac{2}{3}}$, si ha $f'(x)=0$ per $x=\pm a$. La funzione è strettamente crescente su $(-\infty,-1\rbrack $, $\lbrack -a,0)$, $(0,a\rbrack $ e $\lbrack 1,+\infty)$, e strettamente decrescente su $\lbrack -1,-a\rbrack $ e $\lbrack a,1\rbrack $. Di conseguenza, $x=-1$ e $x=a$ sono punti di massimo locale, mentre $x=-a$ e $x=1$ sono punti di minimo locale. Nessuno di questi estremi è globale, perché $f$ non è né superiormente né inferiormente limitata.

Per tracciare il grafico qualitativo, si può descrivere l’andamento per $x>0$ e rifletterlo rispetto all’origine. Per $x \to 0^+$ la funzione tende a $0$ con tangente verticale; cresce fino al massimo locale in $x=a$, poi decresce fino alla cuspide in $x=1$, dove tocca l’asse $x$. Dopo $x=1$ torna a crescere, restando positiva, e tende a $+\infty$ senza asintoti. Per simmetria, in $x=-1$ il grafico tocca l’asse $x$ con una cuspide ed è un massimo locale; tra $-1$ e $0$ presenta il minimo locale in $x=-a$. Il grafico ha due rami simmetrici rispetto all’origine.

La funzione $g$ è continua su $\mathbb{R}$, quindi $G'(x)=g(x)$ per ogni $x \in \mathbb{R}$. I punti critici di $G$ sono $x=-1$, $x=0$ e $x=1$. Poiché $g(x)<0$ per $x<0$ e $g(x)>0$ per $x>0$, $G$ decresce su $(-\infty,0\rbrack $ e cresce su $\lbrack 0,+\infty)$. Pertanto $x=0$ è un minimo globale, mentre $x=\pm1$ non sono estremi locali né globali.
:::
:::
