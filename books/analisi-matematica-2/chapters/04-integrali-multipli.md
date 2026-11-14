---
chapter: 4
title: Integrali multipli
---

## p1 | Introduzione

Gli integrali multipli estendono l’integrazione a regioni piane e solide: permettono di descrivere quantità distribuite nello spazio e di calcolarne accumuli, come aree, volumi e masse. Imparare a scegliere il dominio, l’ordine di integrazione e le coordinate più adatte trasforma molti calcoli complessi in procedure sistematiche e rende più chiaro il legame tra geometria e analisi.

Per affrontare il capitolo servono le basi del calcolo differenziale per funzioni vettoriali: in particolare, la capacità di lavorare con derivate parziali e trasformazioni di coordinate. Sarà utile anche saper leggere curve e superfici e riconoscere simmetrie, perché questi elementi guidano la descrizione dei domini e semplificano i calcoli.

Al termine saprai calcolare integrali doppi e tripli su rettangoli, domini normali e regioni solide, riducendoli a integrali iterati. Potrai invertire l’ordine di integrazione quando conviene e applicare cambi di variabile cartesiani, polari, cilindrici e sferici. Userai gli integrali per trovare aree e volumi, determinare masse, baricentri e momenti d’inerzia, e sfrutterai le simmetrie e il teorema di Pappo–Guldino nei problemi di geometria.

## p2 | Integrale doppio su rettangoli

Nel calcolo di un volume, di una massa o di un'area di una regione piana serve un integrale che lavori con due variabili. Lo costruiamo prima sul caso più semplice, il rettangolo con i lati paralleli agli assi, e lo calcoliamo poi con due integrali in una variabile.

### Il cilindroide e la definizione di integrale doppio

Sia $f : B \to \mathbb{R}$ una funzione limitata sul rettangolo chiuso $B = \lbrack a,b\rbrack \times[c,d]\subset\mathbb{R}^2$. Il **cilindroide** di $f$ su $B$ è la regione di spazio compresa tra $B$ e il grafico di $f$:

$$C(f;B)=\{(x,y,z)\in\mathbb{R}^3 : (x,y)\in B,\ 0\le z\le f(x,y)\ \text{oppure}\ f(x,y)\le z\le 0\}$$

dove il vincolo su $z$ dipende dal segno di $f(x,y)$. L'integrale doppio associa a questa regione un numero, che per $f\ge 0$ è il suo volume.

La costruzione è quella di Riemann. Si fissano partizioni $a=x_0<x_1<\dots<x_p=b$ e $c=y_0<y_1<\dots<y_q=d$ e si pone $I_h=\lbrack x_{h-1},x_h\rbrack $, $J_k=\lbrack y_{k-1},y_k\rbrack $. I $p\cdot q$ rettangoli $B_{hk}=I_h\times J_k$ formano una suddivisione $\mathcal{D}$ di $B$.

Su ciascun $B_{hk}$ si considerano $m_{hk}=\inf_{B_{hk}} f$ e $M_{hk}=\sup_{B_{hk}} f$, e si definiscono le somme inferiore e superiore.

:::formula{id="4.1" label="Somme inferiore e superiore su un rettangolo"}
$$s(\mathcal{D},f)=\sum_{k=1}^{q}\sum_{h=1}^{p} m_{hk}\,(x_h-x_{h-1})(y_k-y_{k-1}),\qquad S(\mathcal{D},f)=\sum_{k=1}^{q}\sum_{h=1}^{p} M_{hk}\,(x_h-x_{h-1})(y_k-y_{k-1})$$
:::

Essendo $f$ limitata, esistono $m$ e $M$ tali che $m(b-a)(d-c)\le s(\mathcal{D},f)\le S(\mathcal{D},f)\le M(b-a)(d-c)$ per ogni $\mathcal{D}$. Sono quindi ben definiti l'integrale superiore $\overline{\int_B} f=\inf_{\mathcal{D}} S(\mathcal{D},f)$ e l'integrale inferiore $\underline{\int_B} f=\sup_{\mathcal{D}} s(\mathcal{D},f)$, e vale $\underline{\int_B} f\le\overline{\int_B} f$.

**Definizione 4.1** (integrale doppio). Una funzione $f$ limitata su $B=\lbrack a,b\rbrack \times[c,d]$ si dice **integrabile secondo Riemann** su $B$ se $\underline{\int_B} f=\overline{\int_B} f$. Il valore comune si chiama integrale doppio di $f$ su $B$ e si scrive

:::formula{id="4.2" label="Integrale doppio su un rettangolo"}
$$\iint_B f(x,y)\,dx\,dy=\underline{\int_B} f=\overline{\int_B} f$$
:::

Le somme inferiori e superiori sono i volumi di plurirettangoli, cioè unioni di parallelepipedi di base $B_{hk}$ e altezza $m_{hk}$ o $M_{hk}$. Il primo è contenuto nel cilindroide e il secondo lo contiene. Per $f\ge0$ l'integrale superiore è una misura per eccesso e quello inferiore una misura per difetto, e $f$ è integrabile quando le due misure coincidono.

Due esempi mostrano i due comportamenti possibili.

- Se $f\equiv K$, allora $m_{hk}=M_{hk}=K$ per ogni suddivisione, quindi $s=S=K(b-a)(d-c)$ e $\iint_B f=K\cdot\operatorname{area}(B)$.
- La funzione di Dirichlet su $\lbrack 0,1\rbrack ^2$, uguale a $1$ nei punti con entrambe le coordinate razionali e a $0$ altrove, ha $s(\mathcal{D},f)=0$ e $S(\mathcal{D},f)=1$ per ogni $\mathcal{D}$. Non è quindi integrabile.

Ogni funzione continua su $B$ è integrabile, e lo sono anche quelle continue tranne che su un insieme trascurabile (generalmente continue).

### Proprietà

Siano $f,g$ continue su $B$ e $\lambda\in\mathbb{R}$. Valgono le proprietà seguenti.

1. Linearità: $\iint_B (f+g)=\iint_B f+\iint_B g$ e $\iint_B \lambda f=\lambda\iint_B f$.
2. Monotonia: se $f\le g$ su $B$, allora $\iint_B f\le\iint_B g$.
3. Valore assoluto: $\left|\iint_B f\right|\le\iint_B |f|$.
4. Additività sul dominio: se $B=B_1\cup B_2$ con $B_1,B_2$ rettangoli che hanno in comune al più un lato, allora $\iint_B f=\iint_{B_1} f+\iint_{B_2} f$. Un insieme di misura nulla, come un segmento, non contribuisce all'integrale.
5. Misura: $\iint_B 1\,dx\,dy=\operatorname{area}(B)$.

Dalla monotonia e dalla proprietà 5 segue la stima della media: se $m\le f\le M$ su $B$, allora $m\operatorname{area}(B)\le\iint_B f\le M\operatorname{area}(B)$.

### Teorema di riduzione sui rettangoli

Il calcolo diretto con le somme di Riemann è impraticabile. Lo si sostituisce con due integrali in una variabile calcolati uno dopo l'altro.

**Teorema 4.1** (di riduzione sui rettangoli). Sia $f$ continua su $B=\lbrack a,b\rbrack \times[c,d]$. Allora

:::formula{id="4.3" label="Formule di riduzione sul rettangolo"}
$$\iint_B f(x,y)\,dx\,dy=\int_a^b\left(\int_c^d f(x,y)\,dy\right)dx=\int_c^d\left(\int_a^b f(x,y)\,dx\right)dy$$
:::

Si calcola prima l'integrale interno, tenendo fissa l'altra variabile come se fosse una costante, e poi si integra il risultato rispetto alla variabile esterna. Per le funzioni continue i due ordini di integrazione danno lo stesso valore, quindi si può scambiare l'ordine.

Il significato geometrico è il principio di Cavalieri. Per $f\ge0$ e $x_0\in[a,b]$ fissato, $h(x_0)=\int_c^d f(x_0,y)\,dy$ è l'area della sezione del cilindroide con il piano $x=x_0$. Il volume si ottiene integrando queste aree tra $a$ e $b$.

:::image{src="assets/4c9ccba5-cavalieri-sezione-cilindroide.svg" alt="Cilindroide su un rettangolo con la sezione a x costante" caption="Fig. 4.1 — Cilindroide di f sul rettangolo B: la sezione con il piano x = x0 ha area h(x0), e il volume è l'integrale di h tra a e b."}
:::

Un caso importante è quello delle **variabili separabili**. Se $f(x,y)=f_1(x)f_2(y)$ con $f_1,f_2$ continue, il fattore $f_1(x)$ esce dall'integrale interno e si ottiene

:::formula{id="4.4" label="Integrando a variabili separabili"}
$$\iint_B f_1(x)f_2(y)\,dx\,dy=\left(\int_a^b f_1(x)\,dx\right)\left(\int_c^d f_2(y)\,dy\right)$$
:::

Vale sullo stesso rettangolo $B=\lbrack a,b\rbrack \times[c,d]$; il fattore $f_1$ dipende solo da $x$ e $f_2$ solo da $y$.

### Esempi svolti

**Esempio 4.1.** Calcoliamo $\iint_B x\cos(xy)\,dx\,dy$ con $B=\lbrack 1,2\rbrack \times[0,\pi]$. La funzione è continua, quindi sono lecite entrambe le riduzioni. Scegliamo quella con $y$ all'interno.

1. Scriviamo l'integrale iterato:
$\displaystyle \iint_B x\cos(xy)\,dx\,dy=\int_1^2\left(\int_0^\pi x\cos(xy)\,dy\right)dx.$
2. Nell'integrale interno $x$ è costante e $\frac{d}{dy}\sin(xy)=x\cos(xy)$, quindi
$\displaystyle \int_0^\pi x\cos(xy)\,dy=\Big[\sin(xy)\Big]_{y=0}^{y=\pi}=\sin(\pi x).$
3. Resta
$\displaystyle \int_1^2\sin(\pi x)\,dx=\left[-\frac{\cos(\pi x)}{\pi}\right]_1^2=-\frac{1}{\pi}-\frac{1}{\pi}=-\frac{2}{\pi}.$

Il segno negativo è coerente: su $(1,2)$ si ha $\sin\pi x<0$. Con l'ordine opposto, integrando prima in $x$, servirebbe l'integrazione per parti, con calcoli molto più lunghi.

**Esempio 4.2** (variabili separabili). Calcoliamo $\iint_B x\,e^{y}\,dx\,dy$ con $B=\lbrack 0,2\rbrack \times[0,1]$. Poiché $f(x,y)=x\cdot e^y$ è separabile,

$$
\iint_B x\,e^y\,dx\,dy=\left(\int_0^2 x\,dx\right)\left(\int_0^1 e^y\,dy\right)=2\,(e-1).
$$

**Errore tipico 4.1.** Scegliere l'ordine di integrazione a caso. Entrambi gli ordini danno lo stesso risultato, ma uno può richiedere calcoli molto più pesanti: conviene prima integrare nella variabile per cui la primitiva è immediata, come $y$ nell'esempio sopra. Si sbaglia anche applicando la formula del prodotto a una funzione non separabile, per esempio a $f(x,y)=x\cos(xy)$ o a $e^{x+y^2}\cos(xy)$: $f(x,y)$ deve essere davvero un prodotto di una funzione di $x$ per una funzione di $y$. Infine, bisogna associare ogni estremo alla sua variabile: nell'integrale iterato $\int_1^2\left(\int_0^\pi\cdots dy\right)dx$ gli estremi $0,\pi$ vanno con $dy$ e $1,2$ con $dx$.

## p3 | Integrale doppio su domini normali

Sui rettangoli il teorema di riduzione si applica direttamente. Le regioni che compaiono negli esercizi, però, sono quasi sempre delimitate da curve: un triangolo, la regione tra due parabole, un settore. Serve allora una classe di domini su cui l'integrale doppio si riconduce ancora a due integrali in una variabile, con estremi che possono dipendere dall'altra variabile. Questi sono i domini normali. Per i rettangoli si veda [Integrale doppio su rettangoli](ref:chapter/4#p2).

### Domini normali rispetto agli assi

**Definizione 4.2** (dominio normale). Un insieme $\Omega\subseteq\mathbb{R}^2$ si dice **normale rispetto all'asse $x$** (o *verticalmente convesso*, o *semplice rispetto all'asse $y$*) se

$$
\Omega=\{(x,y):\ a\le x\le b,\ g_1(x)\le y\le g_2(x)\},
$$

con $g_1,g_2:\lbrack a,b\rbrack \to\mathbb{R}$ continue e $g_1\le g_2$ su $\lbrack a,b\rbrack $. Si dice **normale rispetto all'asse $y$** (o *orizzontalmente convesso*, o *semplice rispetto all'asse $x$*) se

$$
\Omega=\{(x,y):\ c\le y\le d,\ h_1(y)\le x\le h_2(y)\},
$$

con $h_1,h_2:\lbrack c,d\rbrack \to\mathbb{R}$ continue e $h_1\le h_2$ su $\lbrack c,d\rbrack $.

Geometricamente, $\Omega$ è normale rispetto all'asse $x$ se ogni retta verticale $x=x_0$ lo interseca in un insieme vuoto oppure in un segmento (al limite un punto) di estremi $(x_0,g_1(x_0))$ e $(x_0,g_2(x_0))$. Analogamente per le rette orizzontali nel secondo caso.

Un dominio normale ha frontiera di misura nulla: è formata da grafici di funzioni continue e da al più due segmenti. Quindi è misurabile. Una funzione limitata con punti di discontinuità di misura nulla (*generalmente continua*) è integrabile su un insieme misurabile.

Un insieme può essere normale rispetto a entrambi gli assi (un disco, un triangolo), a uno solo, o a nessuno. In quest'ultimo caso si spezza $\Omega$ in un numero finito di pezzi normali, che si sovrappongono al più lungo curve di area nulla, e si usa l'additività dell'integrale rispetto al dominio.

### Formule di riduzione

**Teorema 4.2** (riduzione su domini normali). Sia $f$ continua su $\Omega$. Se $\Omega=\{a\le x\le b,\ g_1(x)\le y\le g_2(x)\}$ è normale rispetto all'asse $x$, allora

:::formula{id="4.5" label="Integrazione per verticali"}
$$\iint_\Omega f(x,y)\,dx\,dy=\int_a^b\left(\int_{g_1(x)}^{g_2(x)}f(x,y)\,dy\right)dx.$$
:::

Se $\Omega=\{c\le y\le d,\ h_1(y)\le x\le h_2(y)\}$ è normale rispetto all'asse $y$, allora

:::formula{id="4.6" label="Integrazione per orizzontali"}
$$\iint_\Omega f(x,y)\,dx\,dy=\int_c^d\left(\int_{h_1(y)}^{h_2(y)}f(x,y)\,dx\right)dy.$$
:::

Si parla di integrazione *per verticali* e *per orizzontali*. Nel primo caso si integra prima in $y$ trattando $x$ come parametro: l'integrale interno è una funzione di $x$ sola, che si integra poi su $\lbrack a,b\rbrack $.

Il significato è lo stesso del principio di Cavalieri visto sui rettangoli: l'integrale interno è l'area della sezione del solido sotto il grafico di $f$, tagliato con il piano $x=x_0$ (o $y=y_0$).

### Metodo operativo

1. Disegnare $\Omega$ trovando le intersezioni tra le curve di bordo.
2. Scegliere il verso di integrazione. Conviene quello per cui gli estremi sono dati da **una sola espressione** per ciascun estremo, e per cui le primitive sono calcolabili.
3. Scrivere $\Omega$ nella forma $\{a\le x\le b,\ g_1\le y\le g_2\}$ (o con i ruoli scambiati), con estremi esterni **costanti**.
4. Calcolare l'integrale interno, poi quello esterno.

**Esempio 4.3.** Calcoliamo $\displaystyle\iint_\Omega (x+2y)\,dx\,dy$, dove $\Omega$ è la regione del primo quadrante limitata da $y=2x$, $y=3-x^2$ e $x=0$.

La retta e la parabola si incontrano per $2x=3-x^2$, cioè $x^2+2x-3=0$, quindi $x=-3$ oppure $x=1$. Il secondo valore chiude la regione a destra, nel punto $(1,2)$. La regione è sia verticalmente sia orizzontalmente convessa. Integrando per verticali la descrizione è semplice:

$$
\Omega=\{0\le x\le 1,\ 2x\le y\le 3-x^2\}.
$$

Controllo: per $x\in[0,1]$ si ha $2x\le 3-x^2$.

Integrale interno, con $x$ costante:

$$
\int_{2x}^{3-x^2}(x+2y)\,dy=\Big[xy+y^2\Big]_{y=2x}^{y=3-x^2}=x(3-x^2)+(3-x^2)^2-(2x^2+4x^2).
$$

Sviluppando si ottiene $x^4-x^3-12x^2+3x+9$. Quindi

$$
\iint_\Omega (x+2y)\,dx\,dy=\int_0^1(x^4-x^3-12x^2+3x+9)\,dx=\frac15-\frac14-4+\frac32+9=\frac{129}{20}.
$$

:::image{src="assets/be3365e1-dominio-verticali-orizzontali.svg" alt="Regione compresa tra la retta y = 2x e la parabola y = 3 - x² per x tra 0 e 1" caption="Fig. 4.2 — Regione dell'esempio: tra y = 2x (sotto) e y = 3 − x² (sopra), con 0 ≤ x ≤ 1. Il vertice destro (1, 2) è il punto in cui le due curve si incontrano."}
:::

Per orizzontali bisognerebbe scrivere $\Omega=\{0\le y\le 3,\ 0\le x\le h_2(y)\}$ con

$$
h_2(y)=\begin{cases}\dfrac y2 & 0\le y\le 2,\\[2mm] \sqrt{3-y} & 2<y\le 3.\end{cases}
$$

L'estremo destro cambia espressione in $y=2$. La forma di $h_2$ rende preferibile l'integrazione per verticali.

Come verifica, si può eseguire il calcolo anche per orizzontali, spezzando $\Omega$ in $y=2$:

$$
\int_0^2\!\!\int_0^{y/2}(x+2y)\,dx\,dy=\int_0^2\frac{9}{8}y^2\,dy=3,\qquad
\int_2^3\!\!\int_0^{\sqrt{3-y}}(x+2y)\,dx\,dy=\frac14+\frac{16}{5}.
$$

La somma è $3+\frac14+\frac{16}{5}=\frac{129}{20}$, come prima. Il risultato non dipende dall'ordine, ma il lavoro sì.

**Errore tipico 4.2.** Dimenticare di verificare che $g_1(x)\le g_2(x)$ su tutto l'intervallo $\lbrack a,b\rbrack $ scelto. Se $g_1\le g_2$ vale solo su un sottointervallo $\lbrack h,k\rbrack \subseteq[a,b]$, il dominio è definito solo lì, e gli estremi esterni di integrazione vanno cambiati in $h$ e $k$. In generale, se il dominio è dato da $\text{SIN}(t)\le s\le\text{DES}(t)$, bisogna imporre $\text{SIN}(t)\le\text{DES}(t)$ per trovare l'intervallo di variabilità di $t$.

**Errore tipico 4.3.** Scrivere estremi esterni che dipendono dalla variabile interna, ad esempio $\int_{0}^{y}\!\left(\int_{0}^{1}f\,dy\right)dx$. Gli estremi dell'integrale **esterno** sono sempre numeri. Il risultato finale di un integrale doppio è un numero.

### Scambiare l'ordine di integrazione

Se $\Omega$ è normale rispetto a entrambi gli assi, le due formule di riduzione danno lo stesso valore. Scambiare l'ordine si riduce quindi a riscrivere $\Omega$ nell'altra forma. Lo scambio serve in due casi: quando una delle due descrizioni obbliga a spezzare il dominio, oppure quando la primitiva dell'integrale interno non è elementare.

**Esempio 4.4.** Calcoliamo

$$
I=\int_0^1\left(\int_x^1 e^{y^2}\,dy\right)dx.
$$

La funzione $e^{y^2}$ non ha primitiva elementare, quindi l'ordine dato è inutilizzabile. L'integrale è esteso a

$$
\Omega=\{0\le x\le 1,\ x\le y\le 1\},
$$

il triangolo di vertici $(0,0)$, $(0,1)$, $(1,1)$. Lo si disegna e lo si legge per orizzontali: per $y\in[0,1]$ la variabile $x$ va da $0$ (l'asse $y$) a $y$ (la bisettrice). Dunque $\Omega=\{0\le y\le 1,\ 0\le x\le y\}$ e

$$
I=\int_0^1\left(\int_0^y e^{y^2}\,dx\right)dy=\int_0^1 y\,e^{y^2}\,dy=\left[\tfrac12e^{y^2}\right]_0^1=\frac{e-1}{2}.
$$

Nell'integrale interno $e^{y^2}$ è costante rispetto a $x$.

**Errore tipico 4.4.** Scambiare l'ordine scambiando soltanto i differenziali o i simboli degli estremi, senza ridisegnare il dominio. Se si scrive $\int_0^1\int_x^1\to\int_0^1\int_y^1$ si descrive un altro insieme. Gli estremi nuovi vanno ricavati dalla figura, leggendo le curve di bordo come funzioni dell'altra variabile.

### Simmetrie del dominio e della funzione

Le simmetrie permettono di eliminare interi pezzi di calcolo. Siano $\Omega$ simmetrico rispetto all'asse $y$, cioè $(x,y)\in\Omega\Rightarrow(-x,y)\in\Omega$, e $\Omega^+=\Omega\cap\{x\ge 0\}$. Allora:

- se $f$ è **dispari in $x$**, cioè $f(-x,y)=-f(x,y)$, si ha $\displaystyle\iint_\Omega f\,dx\,dy=0$;
- se $f$ è **pari in $x$**, cioè $f(-x,y)=f(x,y)$, si ha $\displaystyle\iint_\Omega f\,dx\,dy=2\iint_{\Omega^+}f\,dx\,dy$.

Il motivo è che il cambio $x\mapsto -x$ manda $\Omega^+$ nella sua immagine speculare e conserva l'area: i due pezzi danno contributi uguali (se $f$ è pari) o opposti (se $f$ è dispari). Lo stesso vale scambiando i ruoli di $x$ e $y$. Per un dominio simmetrico rispetto all'origine, cioè $(x,y)\in\Omega\Rightarrow(-x,-y)\in\Omega$, un integrando dispari, cioè $f(-x,-y)=-f(x,y)$, ha integrale nullo.

**Esempio 4.5.** Sia $\Omega=\{-1\le x\le 1,\ x^2\le y\le 1\}$, la regione sopra la parabola $y=x^2$ e sotto $y=1$. Calcoliamo

$$
\iint_\Omega (x y^2+y)\,dx\,dy.
$$

Il dominio è simmetrico rispetto all'asse $y$. Il termine $xy^2$ è dispari in $x$, quindi il suo integrale è nullo. Il termine $y$ non dipende da $x$, quindi è pari in $x$ e si può dimezzare il dominio:

$$
\iint_\Omega y\,dx\,dy=2\int_0^1\left(\int_{x^2}^1 y\,dy\right)dx=2\int_0^1\frac{1-x^4}{2}\,dx=1-\frac15=\frac45.
$$

Il valore dell'integrale è $\frac45$. Senza simmetrie si sarebbe dovuto integrare anche $xy^2$, con un calcolo in più.

**Errore tipico 4.5.** Usare la simmetria senza controllare **entrambe** le condizioni, cioè dominio e funzione. Se $f$ è dispari in $x$ ma $\Omega$ non è simmetrico rispetto all'asse $y$ (ad esempio $\Omega=\lbrack 0,1\rbrack \times[0,1]$ e $f=x$), l'integrale non è nullo: qui vale $\frac12$. Occorre inoltre controllare rispetto a quale variabile la funzione è dispari: $xy^2$ è dispari in $x$ ma pari in $y$, quindi si annulla solo sui domini simmetrici rispetto all'asse $y$.

Quando né l'ordine di integrazione né le simmetrie semplificano il calcolo, a volte conviene cambiare coordinate. Si veda [Cambiamento di variabile negli integrali doppi](ref:chapter/4#p4).

## p4 | Cambiamento di variabile negli integrali doppi

Negli integrali doppi il cambio di variabile serve soprattutto a **semplificare il dominio**: spesso, più che l'integranda, conviene trasformare la regione $\Omega$ in una regione $\Omega'$ più semplice, ad esempio un rettangolo con i lati paralleli agli assi, su cui si applica il teorema di riduzione. Per la teoria generale delle trasformazioni di coordinate si veda [Cambiamenti di variabile e coordinate curvilinee](ref:chapter/3#p6). Qui si usa il risultato per calcolare integrali.

### Il teorema del cambio di variabili

**Definizione 4.3** (cambiamento di variabile). Siano $\mathcal{R}'$ e $\mathcal{R}$ regioni di $\mathbb{R}^n$ e $A'$ l'interno di $\mathcal{R}'$. Un campo vettoriale $\boldsymbol{\Phi}:\mathcal{R}'\to\mathcal{R}$ è un cambiamento di variabile se $\boldsymbol{\Phi}$ è una biiezione tra $\mathcal{R}'$ e $\mathcal{R}$, se è di classe $C^1$ in $A'$ e se la sua jacobiana $J\boldsymbol{\Phi}$ è non singolare in ogni punto di $A'$.

**Teorema 4.3** (cambio di variabili negli integrali doppi). Siano $\Omega'$ e $\Omega$ regioni misurabili di $\mathbb{R}^2$ e $\boldsymbol{\Phi}:\Omega'\to\Omega$ un cambiamento di variabile, con componenti $x=\varphi(u,v)$, $y=\psi(u,v)$. Se $f$ è continua e limitata su $\Omega$, allora

:::formula{id="4.7" label="Cambio di variabili negli integrali doppi"}
$$\iint_{\Omega} f(x,y)\,dx\,dy=\iint_{\Omega'} f\big(\varphi(u,v),\psi(u,v)\big)\,\left|\det J\boldsymbol{\Phi}(u,v)\right|\,du\,dv$$
:::

Il fattore $|\det J\boldsymbol{\Phi}|$ misura di quanto $\boldsymbol{\Phi}$ dilata le aree: un piccolo rettangolo $du\,dv$ viene trasformato in un parallelogramma di area $|\det J\boldsymbol{\Phi}|\,du\,dv$. Per questo il fattore compare sempre in valore assoluto.

A volte è più comodo scrivere la trasformazione inversa $(u,v)=\boldsymbol{\Psi}(x,y)$. In tal caso $\Omega'=\boldsymbol{\Psi}(\Omega)$ e

$$
\det J\boldsymbol{\Phi}(u,v)=\frac{1}{\det J\boldsymbol{\Psi}(x,y)}.
$$

Le ipotesi di biiettività e di jacobiana non nulla possono cadere su un insieme di area nulla (un punto, un segmento, una curva) senza che la formula cambi, perché tale insieme non contribuisce all'integrale. È ciò che accade nelle coordinate polari per $r=0$ e per $\theta=0,2\pi$.

### Trasformazioni lineari e affini

Se $\boldsymbol{\Phi}(\mathbf{u})=A\mathbf{u}+\mathbf{b}$, con $A$ matrice $2\times 2$ invertibile, la jacobiana è costante e vale $A$. Con $\Omega'=\boldsymbol{\Phi}^{-1}(\Omega)$ si ha

:::formula{id="4.8" label="Cambio di variabili affine"}
$$\iint_{\Omega} f(x,y)\,dx\,dy=|\det A|\iint_{\Omega'} f(a_{11}u+a_{12}v+b_1,\;a_{21}u+a_{22}v+b_2)\,du\,dv$$
:::

Le trasformazioni affini sono utili quando il dominio è delimitato da rette, o più in generale da curve di livello di due funzioni $g(x,y)$ e $h(x,y)$ del tipo $u_1\le g\le u_2$, $v_1\le h\le v_2$. Ponendo $u=g(x,y)$ e $v=h(x,y)$ la regione diventa un rettangolo $\lbrack u_1,u_2\rbrack \times[v_1,v_2]$.

**Esempio 4.6** (trasformazione lineare). Si calcoli $\displaystyle\iint_\Omega (x^2-y^2)\log\big(1+(x+y)^4\big)\,dx\,dy$ con $\Omega=\{(x,y):x>0,\ 0<y<2-x\}$, il triangolo di vertici $(0,0)$, $(2,0)$, $(0,2)$ privato del bordo.

1. L'integranda è continua e limitata su $\Omega$, quindi l'integrale esiste. Poiché $x^2-y^2=(x-y)(x+y)$ e compare $x+y$, conviene porre $u=x+y$, $v=x-y$.
2. Si inverte: $x=\dfrac{u+v}{2}$, $y=\dfrac{u-v}{2}$, con matrice
$\displaystyle A=\begin{pmatrix}1/2&1/2\\1/2&-1/2\end{pmatrix},\qquad |\det A|=\frac12.$
3. Si trasformano le condizioni sul dominio. $x>0$ diventa $u+v>0$, cioè $v>-u$. $y>0$ diventa $v<u$. $y<2-x$ diventa $x+y<2$, cioè $u<2$. Dunque
$\displaystyle \Omega'=\{(u,v):0<u<2,\ -u<v<u\}.$
4. Si applica la formula {{formula:4.8}}, con $x^2-y^2=uv$:
$\displaystyle \iint_\Omega\ldots=\frac12\iint_{\Omega'}uv\log(1+u^4)\,du\,dv=\frac12\int_0^2\left(\int_{-u}^{u}v\,dv\right)u\log(1+u^4)\,du.$
5. L'integrale interno vale $\left[\dfrac{v^2}{2}\right]_{-u}^{u}=0$, quindi l'integrale richiesto è $0$.

Il risultato era prevedibile: nelle variabili $(u,v)$ il dominio è simmetrico rispetto a $v=0$ e l'integranda è dispari in $v$ (si veda [Integrale doppio su domini normali](ref:chapter/4#p3)).

### Coordinate polari

Le coordinate polari $x=r\cos\theta$, $y=r\sin\theta$ (formula [(3.16)](ref:formula/3.16)) hanno $\det J\boldsymbol{\Phi}(r,\theta)=r$ (formula [(3.17)](ref:formula/3.17)). Con $\Omega'=\boldsymbol{\Phi}^{-1}(\Omega)$ si ottiene

:::formula{id="4.9" label="Integrale doppio in coordinate polari"}
$$\iint_{\Omega} f(x,y)\,dx\,dy=\iint_{\Omega'} f(r\cos\theta,\,r\sin\theta)\;r\;dr\,d\theta$$
:::

Per $r=0$ la trasformazione non è iniettiva e il determinante si annulla, e inoltre $\boldsymbol{\Phi}(r,0)=\boldsymbol{\Phi}(r,2\pi)$. Si tratta di un punto e di segmenti, cioè di insiemi di area nulla, e la formula resta valida. Se il centro è in $(x_0,y_0)$ si pone $x=x_0+r\cos\theta$, $y=y_0+r\sin\theta$ e il fattore resta $r$.

Per ottenere $\Omega'$ si traducono in $(r,\theta)$ le disequazioni che descrivono $\Omega$. Se $\Omega'$ è un rettangolo $\lbrack r_1,r_2\rbrack \times[\theta_1,\theta_2]$ l'integrale si spezza in due integrali semplici, oppure si usa la riduzione su domini normali del piano $(r,\theta)$.

:::image{src="assets/ab9d0397-polari-semianello.svg" alt="Semianello nel piano xy e rettangolo nel piano r-theta" caption="Fig. 4.3 — Il semianello 1 ≤ x²+y² ≤ 4, y ≥ 0 diventa nel piano (r, θ) il rettangolo [1,2]×[0,π]: le circonferenze diventano segmenti verticali, le semirette uscenti dall'origine segmenti orizzontali."}
:::

**Esempio 4.7** (semianello). Si calcoli $\displaystyle\iint_\Omega\frac{y}{x^2+y^2}\,dx\,dy$ con $\Omega=\{1\le x^2+y^2\le 4,\ y\ge0\}$.

1. Il dominio è un settore di corona circolare centrato nell'origine: la scelta naturale è quella delle coordinate polari.
2. Si traducono le condizioni: $1\le x^2+y^2\le4$ diventa $1\le r\le2$ e $y\ge0$ diventa $\sin\theta\ge0$, cioè $0\le\theta\le\pi$. Quindi $\Omega'=\lbrack 1,2\rbrack \times[0,\pi]$.
3. Si sostituisce, ricordando il fattore $r$:
$\displaystyle \iint_\Omega\frac{y}{x^2+y^2}\,dx\,dy=\iint_{\Omega'}\frac{r\sin\theta}{r^2}\,r\,dr\,d\theta=\int_1^2 dr\int_0^\pi\sin\theta\,d\theta.$
4. Il fattore $r$ si semplifica con il denominatore: $\displaystyle\int_1^2dr=1$ e $\displaystyle\int_0^\pi\sin\theta\,d\theta=2$. Il valore dell'integrale è $2$.

**Esempio 4.8** (cerchio non centrato nell'origine). Si calcoli $\displaystyle\iint_\Omega x\,dx\,dy$ con $\Omega=\{x^2+y^2\le 2x\}$.

1. Completando il quadrato, $(x-1)^2+y^2\le1$ è il cerchio di centro $(1,0)$ e raggio $1$. Si può usare il centro $(1,0)$, ma il dominio passa per l'origine e conviene lasciare il centro in $(0,0)$.
2. Con $x=r\cos\theta$, $y=r\sin\theta$ la condizione diventa $r^2\le2r\cos\theta$, cioè $0\le r\le2\cos\theta$. Poiché serve $\cos\theta\ge0$, si ha $\theta\in[-\pi/2,\pi/2]$. Il dominio $\Omega'$ è normale rispetto all'asse $\theta$, ma non è un rettangolo.
3. Si integra:
$\displaystyle \iint_\Omega x\,dx\,dy=\int_{-\pi/2}^{\pi/2}\left(\int_0^{2\cos\theta}r\cos\theta\cdot r\,dr\right)d\theta=\int_{-\pi/2}^{\pi/2}\cos\theta\,\frac{8\cos^3\theta}{3}\,d\theta=\frac83\int_{-\pi/2}^{\pi/2}\cos^4\theta\,d\theta.$
4. Poiché $\displaystyle\int_{-\pi/2}^{\pi/2}\cos^4\theta\,d\theta=\frac{3\pi}{8}$, il risultato è $\pi$.

Controllo: il baricentro del cerchio ha ascissa $1$ e l'area è $\pi$, quindi $\iint_\Omega x=1\cdot\pi$.

**Coordinate ellittiche.** Se il dominio è un'ellisse $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}\le1$ conviene porre $x=ar\cos\theta$, $y=br\sin\theta$ con $a,b>0$. L'ellisse diventa il rettangolo $\lbrack 0,1\rbrack \times[0,2\pi]$. La jacobiana è

$$
J\boldsymbol{\Phi}=\begin{pmatrix}a\cos\theta&-ar\sin\theta\\ b\sin\theta&br\cos\theta\end{pmatrix},\qquad |\det J\boldsymbol{\Phi}|=abr,
$$

quindi nell'integrale compare il fattore $ab\,r$.

### Scegliere le coordinate adatte al dominio

La scelta dipende da come è descritto $\Omega$ e, in misura minore, dall'integranda.

- **Rettangolo, o dominio normale semplice**: nessun cambio, si riduce direttamente (si vedano [Integrale doppio su rettangoli](ref:chapter/4#p2) e [Integrale doppio su domini normali](ref:chapter/4#p3)).
- **Cerchi, settori, corone, presenza di $x^2+y^2$** (nell'integranda o nel dominio): coordinate polari, centrate nel centro del cerchio se questo semplifica $\Omega'$, nell'origine se il cerchio passa per l'origine.
- **Ellissi**: coordinate ellittiche, con fattore $abr$.
- **Domini delimitati da rette** (parallelogrammi, triangoli) oppure **integranda funzione di combinazioni lineari come $x+y$, $x-y$**: trasformazione lineare o affine.
- **Domini delimitati da curve di livello** $g(x,y)=u_1,u_2$ e $h(x,y)=v_1,v_2$: si pone $u=g$, $v=h$ e si calcola $\det J\boldsymbol{\Psi}$ della trasformazione inversa. Si applica allora $\Omega'=\boldsymbol{\Psi}(\Omega)$ e il fattore da usare è $|1/\det J\boldsymbol{\Psi}|$ calcolato nei punti corrispondenti, espresso in $(u,v)$.

Se il dominio è un rettangolo nelle nuove variabili, si calcolano due integrali semplici o si usa il teorema di riduzione.

**Errore tipico 4.6.** Dimenticare il fattore $r$ in coordinate polari (o il fattore $|\det A|$ in una trasformazione lineare). Scrivere $\iint f(r\cos\theta,r\sin\theta)\,dr\,d\theta$ è sbagliato: $dx\,dy$ non diventa $dr\,d\theta$, ma $r\,dr\,d\theta$. Il controllo più rapido è $f=1$: l'area di un cerchio di raggio $R$ deve risultare $\int_0^{2\pi}\!\!\int_0^R r\,dr\,d\theta=\pi R^2$.

**Errore tipico 4.7.** Confondere $\boldsymbol{\Phi}$ con la trasformazione inversa. Se si pone $(u,v)=\boldsymbol{\Psi}(x,y)$, il fattore da inserire nell'integrale in $du\,dv$ è $\left|\det J\boldsymbol{\Phi}\right|=1/|\det J\boldsymbol{\Psi}|$, non $|\det J\boldsymbol{\Psi}|$. Nell'esempio con $u=x+y$, $v=x-y$ si ha $\det J\boldsymbol{\Psi}=-2$ e il fattore corretto è $\tfrac12$.

**Errore tipico 4.8.** Descrivere male $\Omega'$ in polari: scrivere $\theta\in[0,\pi]$ per il cerchio $x^2+y^2\le2x$ (che richiede $\theta\in[-\pi/2,\pi/2]$), oppure imporre estremi costanti per $r$ quando il bordo è una curva (come $r\le2\cos\theta$). Conviene sempre tradurre il bordo in $(r,\theta)$ e controllare il segno di $\cos\theta$ e $\sin\theta$.

## p5 | Integrali tripli

Un integrale triplo si calcola quasi sempre riducendolo a un integrale semplice e a uno doppio, oppure passando a coordinate adatte. Dopo la definizione, la sezione mostra come ridurre il calcolo (per fili o per strati) e come cambiare variabili con le coordinate cilindriche e sferiche.

### Integrale triplo e proprietà

Il ruolo dei rettangoli del piano è svolto dai parallelepipedi $B=\lbrack a_1,b_1\rbrack \times[a_2,b_2]\times[a_3,b_3]$. Si suddividono i tre intervalli e si formano le somme inferiore $s(\mathcal D,f)$ e superiore $S(\mathcal D,f)$ di una $f$ limitata, in cui $m_{hk\ell}$ e $M_{hk\ell}$ sono inf e sup di $f$ sul parallelepipedino $B_{hk\ell}$ della suddivisione, moltiplicati per il suo volume.

**Definizione 4.4** (integrale triplo su un parallelepipedo). Una funzione limitata $f:B\to\mathbb{R}$ è *integrabile* su $B$ se $\inf_{\mathcal D}S(\mathcal D,f)=\sup_{\mathcal D}s(\mathcal D,f)$. Il valore comune è l'integrale triplo, indicato con $\iiint_B f$ oppure $\iiint_B f(x,y,z)\,dx\,dy\,dz$. Le funzioni continue su $B$ sono integrabili.

Per un insieme misurabile $\Omega\subset\mathbb{R}^3$ e $f$ limitata su $\Omega$ si sceglie un parallelepipedo $B\supseteq\Omega$ e si estende $f$ con $0$ su $B\setminus\Omega$, ottenendo $\tilde f$. Si dice che $f$ è integrabile su $\Omega$ se $\tilde f$ è integrabile su $B$; solo in tal caso si pone $\iiint_\Omega f=\iiint_B\tilde f$, valore indipendente da $B$. Con $f=1$ si ottiene il volume, $\operatorname{vol}(\Omega)=\iiint_\Omega 1\,dx\,dy\,dz$. Sfere, cilindri e poliedri sono misurabili, e linearità, monotonia e additività sul dominio valgono come per gli integrali doppi (si veda [Integrale doppio su rettangoli](ref:chapter/4#p2)).

Su un parallelepipedo l'integrale si calcola con tre integrali semplici iterati, in qualunque ordine, perché $f$ continua. Per $B=\lbrack 0,1\rbrack \times[-1,2]\times[0,2]$ si ha

$$
\iiint_B xyz\,dx\,dy\,dz=\int_0^2\!\left(\int_{-1}^2\!\left(\int_0^1 xyz\,dx\right)dy\right)dz=\frac12\int_0^2\!\left(\int_{-1}^2 yz\,dy\right)dz=\frac34\int_0^2 z\,dz=\frac32 .
$$

### Integrazione per fili e per strati

**Definizione 4.5** (insieme normale rispetto all'asse $z$). Un insieme $\Omega\subset\mathbb{R}^3$ è *semplice* (o *normale*) rispetto all'asse $z$ se

$$
\Omega=\{(x,y,z)\in\mathbb{R}^3:\ (x,y)\in D,\ g_1(x,y)\le z\le g_2(x,y)\},
$$

con $D$ regione misurabile chiusa di $\mathbb{R}^2$ e $g_1,g_2:D\to\mathbb{R}$ continue. La frontiera di tali insiemi ha misura nulla, quindi sono misurabili. Definizioni analoghe valgono rispetto agli assi $x$ e $y$.

**Teorema 4.4** (integrazione per fili). Sia $\Omega$ normale rispetto all'asse $z$ come sopra, con $g_1\le g_2$ su tutto $D$, e sia $f$ continua su $\Omega$. Allora

:::formula{id="4.10" label="Integrazione per fili paralleli all'asse z"}
$$\iiint_\Omega f\,dx\,dy\,dz=\iint_D\left(\int_{g_1(x,y)}^{g_2(x,y)} f(x,y,z)\,dz\right)dx\,dy$$
:::

Si integra prima in $z$, con $x,y$ trattati come parametri, ottenendo una funzione $F(x,y)$. Poi si integra $F$ su $D$ con le tecniche del piano, cioè per [domini normali](ref:chapter/4#p3) o con un cambio di variabili. Il nome deriva dal fatto che la retta parallela a $z$ per un punto di $D$ taglia $\Omega$ in un segmento, il «filo».

Per ogni $(x,y)\in D$ deve valere $g_1(x,y)\le g_2(x,y)$. Se la disuguaglianza vale solo su $C\subset D$, l'integrale si calcola su $C$ e non su $D$.

Sia ora $\Omega$ misurabile con $z\in[\alpha,\beta]$ per ogni suo punto. Per ogni $z$ in $\lbrack \alpha,\beta\rbrack $ si chiama $A_z=\{(x,y):(x,y,z)\in\Omega\}$ lo *strato* a quota $z$, cioè la proiezione sul piano $xy$ della sezione di $\Omega$ con il piano a quota $z$.

**Teorema 4.5** (integrazione per strati). Nelle ipotesi precedenti, con $f$ continua e ogni $A_z$ misurabile,

:::formula{id="4.11" label="Integrazione per strati paralleli al piano xy"}
$$\iiint_\Omega f\,dx\,dy\,dz=\int_\alpha^\beta\left(\iint_{A_z} f(x,y,z)\,dx\,dy\right)dz$$
:::

Scambiando i ruoli delle variabili si ottengono le formule per strati paralleli agli altri piani coordinati.

**Metodo.** Per scegliere tra fili e strati:

1. Si disegna $\Omega$ e si individuano le superfici che lo delimitano.
2. Se $\Omega$ è compreso fra due superfici grafico di funzioni di due variabili (per esempio $z=g_1(x,y)$ e $z=g_2(x,y)$), conviene integrare per fili.
3. Se le sezioni a quota fissata sono figure semplici (cerchi, triangoli) e $f$ dipende poco dalle altre variabili, conviene integrare per strati.
4. Si scrive il dominio con le disuguaglianze «sinistra $\le$ variabile $\le$ destra» e si verifica che l'estremo sinistro non superi mai quello destro.

**Esempio 4.9** (tetraedro, per fili e per strati). Calcoliamo $\iiint_\Omega x\,dx\,dy\,dz$, con $\Omega$ il tetraedro limitato dai piani coordinati e dal piano $x+y+z=1$. $\Omega$ è normale rispetto a $z$:

$$
\Omega=\{(x,y,z):(x,y)\in D,\ 0\le z\le 1-x-y\},\qquad D=\{0\le x\le 1,\ 0\le y\le 1-x\}.
$$

:::image{src="assets/222e51ab-tetraedro-fili.svg" alt="Tetraedro con un filo parallelo a z" caption="Fig. 4.4 — Il tetraedro x+y+z ≤ 1 nel primo ottante: il triangolo D nel piano xy e un filo verticale che va da z = 0 a z = 1 − x − y."}
:::

Per fili:

$$
\iiint_\Omega x\,dx\,dy\,dz=\iint_D x\left(\int_0^{1-x-y}dz\right)dx\,dy=\int_0^1 x\left(\int_0^{1-x}(1-x-y)\,dy\right)dx=\frac12\int_0^1 x(1-x)^2dx=\frac1{24}.
$$

L'ultimo passaggio usa $\int_0^1 x(1-2x+x^2)\,dx=\frac12-\frac23+\frac14=\frac1{12}$.

Per strati, lo strato a quota $z\in[0,1]$ è il triangolo $A_z=\{0\le x\le 1-z,\ 0\le y\le 1-z-x\}$ e

$$
\iiint_\Omega x\,dx\,dy\,dz=\int_0^1\!\left(\int_0^{1-z}\!x(1-z-x)\,dx\right)dz=\frac16\int_0^1(1-z)^3dz=\frac1{24}.
$$

I due metodi danno lo stesso risultato.

**Errore tipico 4.9.** Si scrivono estremi di integrazione interni che dipendono dalla variabile esterna sbagliata, oppure si scambiano le variabili dopo aver integrato, per esempio mettendo $z$ negli estremi dell'integrale in $z$. L'estremo di un integrale può dipendere solo dalle variabili ancora da integrare, cioè quelle *esterne* (nell'esempio $x,y$ per l'integrale in $z$). L'ultimo integrale, quello più esterno, ha estremi costanti. Un altro errore è non controllare che $g_1\le g_2$ su tutto $D$: se vale solo su una parte, il dominio di integrazione si restringe a quella parte.

### Coordinate cilindriche e sferiche

Il cambio di variabili triplo ha la stessa forma di quello doppio, descritto in [Cambiamento di variabile negli integrali doppi](ref:chapter/4#p4).

**Teorema 4.6** (cambio di variabili). Siano $\Omega',\Omega\subset\mathbb{R}^3$ misurabili e $\mathbf\Phi:\Omega'\to\Omega$ un cambiamento di variabile, con $\mathbf x=\mathbf\Phi(\mathbf u)$. Se $f$ è continua e limitata su $\Omega$,

$$
\iiint_\Omega f(\mathbf x)\,d\Omega=\iiint_{\Omega'}f(\mathbf\Phi(\mathbf u))\,|\det J\mathbf\Phi(\mathbf u)|\,d\Omega'.
$$

**Coordinate cilindriche.** Con $x=r\cos\theta$, $y=r\sin\theta$, $z=z$ si ha $\det J\mathbf\Phi=r>0$:

:::formula{id="4.12" label="Integrale triplo in coordinate cilindriche"}
$$\iiint_\Omega f(x,y,z)\,dx\,dy\,dz=\iiint_{\Omega'}f(r\cos\theta,r\sin\theta,z)\,r\,dr\,d\theta\,dz$$
:::

Conviene quando il dominio o la funzione hanno simmetria attorno a un asse (cilindri, paraboloidi, coni), perché $x^2+y^2=r^2$.

**Coordinate sferiche.** Con $x=r\sin\varphi\cos\theta$, $y=r\sin\varphi\sin\theta$, $z=r\cos\varphi$, dove $\varphi\in[0,\pi]$ è la colatitudine e $\theta\in\lbrack 0,2\pi)$ la longitudine, il determinante jacobiano è $r^2\sin\varphi$ (formula [(3.21)](ref:formula/3.21)):

:::formula{id="4.13" label="Integrale triplo in coordinate sferiche"}
$$\iiint_\Omega f\,dx\,dy\,dz=\iiint_{\Omega'}f(r\sin\varphi\cos\theta,\,r\sin\varphi\sin\theta,\,r\cos\varphi)\,r^2\sin\varphi\,dr\,d\varphi\,d\theta$$
:::

Conviene quando compare $x^2+y^2+z^2=r^2$, cioè per sfere, settori sferici e coni con vertice nell'origine.

**Esempio 4.10** (cilindriche). Calcoliamo $\iiint_\Omega(x^2+y^2)\,dx\,dy\,dz$, con $\Omega$ interno al cilindro $x^2+y^2=1$, sotto il piano $z=3$ e sopra il paraboloide $z=1-x^2-y^2$. In cilindriche il cilindro è $r=1$ e il paraboloide $z=1-r^2$. Quindi $\Omega'=\{0\le\theta\le2\pi,\ 0\le r\le1,\ 1-r^2\le z\le3\}$ e

$$
\iiint_\Omega(x^2+y^2)\,dx\,dy\,dz=\int_0^{2\pi}\!\!\int_0^1\!\!\int_{1-r^2}^{3}r^2\cdot r\,dz\,dr\,d\theta=2\pi\int_0^1r^3(2+r^2)\,dr=2\pi\left(\frac12+\frac16\right)=\frac{4\pi}3 .
$$

:::image{src="assets/222e51ab-sezione-cilindriche.svg" alt="Sezione nel piano (r, z) della regione" caption="Fig. 4.5 — Nel piano (r, z) la regione è compresa tra la parabola z = 1 − r² (sotto) e la retta z = 3 (sopra), per 0 ≤ r ≤ 1: gli estremi in z dipendono da r."}
:::

**Esempio 4.11** (strati e polari nel piano). Calcoliamo $\iiint_\Omega\sqrt{y^2+z^2}\,dx\,dy\,dz$, con $\Omega$ delimitato dal paraboloide $x=y^2+z^2$ e dal piano $x=2$. Per $x\in[0,2]$ lo strato è il cerchio $A_x=\{y^2+z^2\le x\}$ di raggio $\sqrt x$, e la funzione è $\rho=\sqrt{y^2+z^2}$. Conviene usare le polari $(\rho,\theta)$ nel piano $yz$:

$$
\iiint_\Omega\sqrt{y^2+z^2}\,dx\,dy\,dz=\int_0^2\left(\int_0^{2\pi}\!\!\int_0^{\sqrt x}\rho\cdot\rho\,d\rho\,d\theta\right)dx=2\pi\int_0^2\frac{x^{3/2}}{3}\,dx=\frac{2\pi}{3}\cdot\frac25\,2^{5/2}=\frac{16\sqrt2\,\pi}{15}.
$$

**Esempio 4.12** (sferiche). Calcoliamo il volume del solido $\Omega=\{x^2+y^2+z^2\le1,\ z\ge\sqrt{x^2+y^2}\}$, cioè la sfera unitaria sopra il cono. In sferiche $r\le1$; la condizione $r\cos\varphi\ge r\sin\varphi$ dà $\varphi\le\pi/4$. Dunque $\Omega'=\lbrack 0,1\rbrack \times[0,\pi/4]\times[0,2\pi]$ e

$$
\operatorname{vol}(\Omega)=\int_0^{2\pi}\!\!\int_0^{\pi/4}\!\!\int_0^1r^2\sin\varphi\,dr\,d\varphi\,d\theta=2\pi\cdot\frac13\left(1-\frac{\sqrt2}{2}\right)=\frac{\pi(2-\sqrt2)}{3}.
$$

**Errore tipico 4.10.** Si dimentica il fattore dell'elemento di volume: $r$ in cilindriche, $r^2\sin\varphi$ in sferiche. Nel secondo caso è frequente scrivere solo $r^2$ o solo $\sin\varphi$. Un secondo errore riguarda gli angoli: $\varphi$ è la colatitudine, parte dall'asse $z$ e varia in $\lbrack 0,\pi\rbrack $, quindi $z=r\cos\varphi$. Scambiarlo con la latitudine porta a scrivere $\sin\varphi$ al posto di $\cos\varphi$ nella formula di $z$ e a sbagliare gli estremi. Un terzo errore è usare le sferiche per un dominio con simmetria solo attorno a un asse, come un cilindro, dove gli estremi diventano complicati: in quel caso sono più adatte le cilindriche.

Le equazioni delle principali superfici nelle coordinate scelte, ovvero le quadriche, sono raccolte in [Applicazioni: volumi, masse e baricentri](ref:chapter/4#p6).

## p6 | Applicazioni: volumi, masse e baricentri

Gli integrali doppi e tripli permettono di calcolare grandezze fisiche e geometriche di lamine e solidi: massa, baricentro, momenti d'inerzia, volume dei solidi di rotazione. In fondo alla sezione si riconoscono le superfici quadriche, che compaiono spesso come bordo dei solidi studiati.

### Massa, baricentro e momenti d'inerzia

Sia $\Omega\subseteq\mathbb{R}^2$ una lamina piana, di spessore trascurabile, con densità superficiale di massa $\mu(x,y)$, cioè massa per unità di area. La massa e il baricentro $G=(x_G,y_G)$ sono

:::formula{id="4.14" label="Massa e baricentro di una lamina"}
$$m=\iint_\Omega \mu(x,y)\,dx\,dy,\qquad x_G=\frac{1}{m}\iint_\Omega x\,\mu(x,y)\,dx\,dy,\qquad y_G=\frac{1}{m}\iint_\Omega y\,\mu(x,y)\,dx\,dy$$
:::

Se il corpo è omogeneo ($\mu$ costante), $\mu$ si semplifica e si ottiene $x_G=\frac{1}{\operatorname{area}(\Omega)}\iint_\Omega x\,dx\,dy$, e analogamente per $y_G$: ogni coordinata del baricentro è il valor medio della corrispondente coordinata sui punti di $\Omega$.

Per un solido $\Omega\subseteq\mathbb{R}^3$ con densità volumica $\mu(x,y,z)$ si usano gli integrali tripli: $m=\iiint_\Omega\mu\,dx\,dy\,dz$ e $x_G=\frac1m\iiint_\Omega x\,\mu\,dx\,dy\,dz$, e analogamente per $y_G$ e $z_G$. Alcuni testi indicano la densità con $\rho$ e il baricentro con $B$; il significato è identico.

Se $r$ è una retta e $d_r(x,y)$ è la distanza del punto $(x,y)$ da $r$, il momento d'inerzia di $\Omega$ rispetto a $r$ è

:::formula{id="4.15" label="Momento d'inerzia rispetto a una retta"}
$$I_r=\iint_\Omega d_r^2(x,y)\,\mu(x,y)\,dx\,dy$$
:::

In particolare i momenti rispetto agli assi coordinati sono $I_x=\iint_\Omega y^2\mu\,dx\,dy$ e $I_y=\iint_\Omega x^2\mu\,dx\,dy$. La loro somma è il momento rispetto all'origine, $I_0=I_x+I_y=\iint_\Omega (x^2+y^2)\,\mu\,dx\,dy$. Nello spazio vale la stessa definizione con integrale triplo e $d_r$ distanza dalla retta nello spazio.

**Esempio 4.13.** Consideriamo la lamina $\Omega=\{(x,y):0\le x\le 1,\ 0\le y\le 2-2x\}$ con densità $\mu(x,y)=1+3x+y$. Calcoliamo massa e baricentro.

Integrando prima in $y$:

$$
\int_0^{2-2x}(1+3x+y)\,dy=(1+3x)(2-2x)+\frac{(2-2x)^2}{2}=(2+4x-6x^2)+(2-4x+2x^2)=4-4x^2.
$$

Quindi

$$
m=\int_0^1(4-4x^2)\,dx=4-\frac43=\frac83.
$$

Per $x_G$ serve $\iint_\Omega x\,\mu=\int_0^1 x(4-4x^2)\,dx=2-1=1$, da cui $x_G=1\big/\tfrac83=\tfrac38$.

Per $y_G$ calcoliamo l'integrale interno

$$
\int_0^{2-2x}y(1+3x+y)\,dy=(1+3x)\,2(1-x)^2+\frac{8(1-x)^3}{3}.
$$

Con $t=1-x$ si ha $1+3x=4-3t$, quindi

$$
\int_0^1(1+3x)\,2(1-x)^2dx=2\int_0^1(4-3t)t^2dt=2\left(\frac43-\frac34\right)=\frac76,
$$

mentre $\int_0^1\frac{8(1-x)^3}{3}dx=\frac23$. La somma è $\frac76+\frac46=\frac{11}{6}$ e

$$
y_G=\frac{11}{6}\cdot\frac38=\frac{11}{16}.
$$

Il baricentro è $G=\left(\frac38,\frac{11}{16}\right)$.

**Errore tipico 4.11.** Dimenticare di dividere per la massa $m$: gli integrali $\iint x\mu$ e $\iint y\mu$ sono i momenti statici, non le coordinate del baricentro. Un altro errore è usare $\operatorname{area}(\Omega)$ al posto di $m$ quando la densità non è costante: nell'esempio precedente l'area è $1$, ma la massa è $\frac83$.

**Simmetrie.** Se la regione e la densità sono simmetriche rispetto a un asse (o a un piano), il baricentro giace su quell'asse (o su quel piano), e la corrispondente coordinata si trova senza integrare. Ad esempio, per un semicerchio $x^2+y^2\le a^2$, $y\ge0$, con densità $\mu=K\sqrt{x^2+y^2}$ si ha $x_G=0$. Resta da calcolare solo

$$
y_G=\frac1m\int_0^\pi\int_0^a Kr^3\sin\theta\,dr\,d\theta,\qquad\text{con } m=\frac{K\pi a^3}{3},
$$

da cui $G=\left(0,\frac{3a}{2\pi}\right)$. Per un solido di rotazione attorno all'asse $z$ si ha analogamente $x_G=y_G=0$.

### Il teorema di Pappo–Guldino

Sia $T$ una regione del semipiano $yz$ con $y\ge 0$ e $\Omega$ il solido ottenuto facendo ruotare $T$ attorno all'asse $z$. La regione $T$ è detta **sezione meridiana** di $\Omega$.

Quando $T$ è il trapezoide di una funzione $y=f(z)$, $z\in[a,b]$, la sezione di $\Omega$ a quota $z$ è un cerchio di raggio $f(z)$. Integrando per strati (si veda [Integrali tripli](ref:chapter/4#p5)) si ottiene $\operatorname{vol}(\Omega)=\pi\int_a^b f^2(z)\,dz$. D'altra parte

$$
y_G=\frac{1}{\operatorname{area}(T)}\int_a^b\int_0^{f(z)}y\,dy\,dz=\frac{1}{2\operatorname{area}(T)}\int_a^b f^2(z)\,dz,
$$

e confrontando i due risultati si ricava la formula seguente.

**Teorema 4.7** (di Pappo, o primo teorema di Guldino). Sia $T$ un insieme misurabile del semipiano $\{y\ge0\}$ del piano $yz$ e sia $\Omega$ il solido ottenuto ruotando $T$ di un giro completo attorno all'asse $z$. Allora

:::formula{id="4.16" label="Teorema di Pappo–Guldino"}
$$\operatorname{vol}(\Omega)=2\pi\,y_G\,\operatorname{area}(T)$$
:::

dove $y_G$ è la coordinata del baricentro di $T$, cioè la sua distanza dall'asse di rotazione. In parole: il volume è l'area della sezione meridiana per la lunghezza della circonferenza descritta dal baricentro.

**Esempio 4.14.** Sia $T$ il triangolo del piano $yz$ di vertici $A=(1,1)$, $B=(2,1)$, $C=(1,3)$ (coordinate $(y,z)$), ruotato attorno all'asse $z$. La base $AB$ misura $1$ e l'altezza $2$, quindi $\operatorname{area}(T)=1$. Il baricentro di un triangolo omogeneo è la media dei vertici, dunque $y_G=\frac{1+2+1}{3}=\frac43$. Allora

$$
\operatorname{vol}(\Omega)=2\pi\cdot\frac43\cdot1=\frac{8\pi}{3}.
$$

Per verifica, integrando per strati: il lato $BC$ ha equazione $y=\frac{5-z}{2}$ e il lato $AC$ ha equazione $y=1$. Il cerchio a quota $z$ è quindi una corona con raggi $1$ e $\frac{5-z}2$, e

$$
\operatorname{vol}(\Omega)=\pi\int_1^3\left(\frac{(5-z)^2}{4}-1\right)dz=\pi\left(\frac{14}{3}-2\right)=\frac{8\pi}{3}.
$$

Il risultato coincide con quello ottenuto con il teorema, che richiede un solo calcolo elementare.

:::image{src="assets/b31d3416-pappo-triangolo-meridiano.svg" alt="Sezione meridiana triangolare nel piano yz con baricentro e asse z" caption="Fig. 4.6 — La sezione meridiana T (triangolo di vertici (1,1), (2,1), (1,3)) e il suo baricentro G: la distanza di G dall'asse z, y_G = 4/3, è il raggio della circonferenza che compare nel teorema di Pappo–Guldino."}
:::

Un altro esempio è il toro, ottenuto ruotando il cerchio di raggio $R$ e centro a distanza $y_0>R$ dall'asse. Il baricentro del cerchio è il centro, quindi $\operatorname{vol}=2\pi y_0\cdot\pi R^2=2\pi^2y_0R^2$.

**Errore tipico 4.12.** Nella formula $y_G$ è il baricentro della sezione piana $T$, non del solido $\Omega$ (che per simmetria sta sull'asse e darebbe $0$). Inoltre $y_G$ va misurato come distanza dall'asse di rotazione: se l'asse è $z$ e $T$ sta nel piano $yz$, è la coordinata $y$, che non cambia segno solo se $T$ non attraversa l'asse. Un altro errore è usare nella formula l'area del solido, o il baricentro di $T$ con una densità non uniforme: il teorema richiede $T$ omogenea.

### Quadriche notevoli

Le quadriche sono le superfici di equazione polinomiale di secondo grado in $x,y,z$. Le forme canoniche da riconoscere sono le seguenti, con $a,b,c>0$.

- **Ellissoide**: $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}+\dfrac{z^2}{c^2}=1$. Tutte le sezioni con piani coordinati sono ellissi.
- **Paraboloide ellittico**: $\dfrac zc=\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}$. Le sezioni con piani $z=\text{cost}$ sono ellissi per $z/c>0$, si riducono al vertice per $z=0$ e sono vuote per $z/c<0$; quelle verticali sono parabole.
- **Paraboloide iperbolico** ("a sella"): $\dfrac zc=-\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}$. Le sezioni con piani $z=\text{cost}\ne0$ sono iperboli; per $z=0$ si riducono a una coppia di rette. Le sezioni con piani verticali paralleli ai piani coordinati sono parabole.
- **Cono**: $\dfrac{z^2}{c^2}=\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}$. Le sezioni a $z=\text{cost}\ne0$ sono ellissi; per $z=0$ si ha il solo vertice.
- **Iperboloide a una falda**: $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}-\dfrac{z^2}{c^2}=1$. Le sezioni a $z=\text{cost}$ sono ellissi, per ogni $z$.
- **Iperboloide a due falde**: $\dfrac{z^2}{c^2}-\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$. Le sezioni a $z=\text{cost}$ sono ellissi per $|z|>c$ e vuote per $|z|<c$: la superficie ha due parti separate.

Per riconoscere una quadrica si guardano il numero di variabili al quadrato, i segni dei termini e il termine noto. Un'equazione con $z$ al primo grado e $x,y$ al quadrato è un paraboloide: segni concordi danno quello ellittico, segni discordi quello iperbolico. Con tutte e tre le variabili al quadrato e termine noto $1$ si ha un ellissoide (tre segni $+$), un iperboloide a una falda (due $+$ e un $-$) o a due falde (un $+$ e due $-$). Con termine noto $0$ si ha il cono. Se $a=b$, tutte le superfici tranne il paraboloide iperbolico sono di rotazione attorno all'asse $z$: i solidi da esse delimitati si trattano allora con coordinate cilindriche o con il teorema di Pappo–Guldino.
