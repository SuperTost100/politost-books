---
type: esami
printable: true
---

:::exercise{id="X1" type="esame" chapter="1" difficulty="medio"}
## Domanda
**Esercizio in stile d'esame (generato)**

a) Calcolare, se esiste,

$$\lim_{(x,y)\to(0,0)}\frac{x^3-y^3}{x^2+y^2}.$$

b) Dimostrare che non esiste

$$\lim_{(x,y)\to(0,0)}\frac{xy^2}{x^2+y^4}.$$

c) Al variare di $a\in\mathbb{R}$ si consideri la funzione $g(x,y)=\dfrac{x^2y}{(x^2+y^2)^a}$ per $(x,y)\neq(0,0)$ e $g(0,0)=0$. Determinare per quali $a$ la funzione $g$ è continua in $(0,0)$.

:::solution
**a)** In coordinate polari $x=r\cos\theta$, $y=r\sin\theta$:

$$\left|\frac{x^3-y^3}{x^2+y^2}\right|=\frac{r^3|\cos^3\theta-\sin^3\theta|}{r^2}\le 2r\to 0,$$

uniformemente in $\theta$. Il limite esiste ed è $0$.

**b)** Lungo la retta $x=my$ (e lungo gli assi) con $m$ fissato: $\frac{m y^3}{m^2y^2+y^4}=\frac{m y}{m^2+y^2}\to 0$ (per $m\neq0$; lungo $x=0$ la funzione è $0$). Lungo la parabola $x=y^2$ invece:

$$\frac{y^2\cdot y^2}{y^4+y^4}=\frac12\quad\text{per ogni }y\neq0.$$

Due restrizioni danno limiti diversi ($0$ e $\frac12$), quindi il limite non esiste.

**c)** In polari, per $r>0$:

$$g=\frac{r^3\cos^2\theta\sin\theta}{r^{2a}}=r^{3-2a}\cos^2\theta\sin\theta.$$

- Se $3-2a>0$, cioè $a<\frac32$: $|g|\le r^{3-2a}\to0=g(0,0)$, quindi $g$ è continua.
- Se $a=\frac32$: $g=\cos^2\theta\sin\theta$ non dipende da $r$; lungo $\theta=\frac\pi4$ vale $\frac{\sqrt2}{4}\neq0$, quindi il limite non è $0$ e $g$ non è continua.
- Se $a>\frac32$: lungo $\theta=\frac\pi4$, $g=\frac{\sqrt2}{4}r^{3-2a}\to+\infty$, quindi $g$ non è continua.

Conclusione: $g$ è continua in $(0,0)$ se e solo se $a<\frac32$.
:::
:::

:::exercise{id="X2" type="esame" chapter="1" difficulty="medio"}
## Domanda
**Esercizio in stile d'esame (generato)**

Si consideri la funzione

$$f(x,y)=\sqrt{y-x^2}\,\ln\left(4-x^2-y^2\right).$$

a) Determinare il dominio $D$ di $f$ e rappresentarlo nel piano, calcolando le coordinate dei punti in cui la parabola $y=x^2$ interseca la circonferenza $x^2+y^2=4$.

b) Stabilire se $D$ è limitato, aperto, chiuso.

c) Determinare l'insieme di livello $\{(x,y)\in D : f(x,y)=0\}$.

:::solution
**a)** Occorrono contemporaneamente $y-x^2\ge 0$ e $4-x^2-y^2>0$. Quindi

$$D=\{(x,y)\in\mathbb{R}^2 : y\ge x^2,\ x^2+y^2<4\},$$

cioè la regione sopra la parabola (parabola inclusa) e all'interno del cerchio di raggio $2$ centrato nell'origine (circonferenza esclusa).

Intersezione: sostituendo $x^2=y$ in $x^2+y^2=4$ si ottiene $y^2+y-4=0$, da cui $y=\frac{-1\pm\sqrt{17}}{2}$. Poiché $y=x^2\ge 0$ si accetta solo $y=\frac{-1+\sqrt{17}}{2}\approx 1{,}56$, e quindi

$$x=\pm\sqrt{\frac{\sqrt{17}-1}{2}}\approx \pm 1{,}25.$$

I punti sono $\left(\pm\sqrt{\frac{\sqrt{17}-1}{2}},\ \frac{\sqrt{17}-1}{2}\right)$.

**b)** $D$ è limitato, perché contenuto nel cerchio di raggio $2$. Non è aperto: i punti della parabola interni al cerchio appartengono a $D$ ma ogni loro intorno contiene punti con $y<x^2$. Non è chiuso: i punti della circonferenza $x^2+y^2=4$ con $y\ge x^2$ sono di frontiera ma non appartengono a $D$.

**c)** Il prodotto è nullo se e solo se un fattore è nullo (entrambi sono definiti in $D$).

- $\sqrt{y-x^2}=0$ equivale a $y=x^2$; con la condizione $x^2+y^2<4$, cioè $x^4+x^2<4$, ossia $x^2<\frac{\sqrt{17}-1}{2}$. Si ottiene l'arco di parabola $y=x^2$ con $|x|<\sqrt{\frac{\sqrt{17}-1}{2}}$.
- $\ln(4-x^2-y^2)=0$ equivale a $x^2+y^2=3$. Insieme alla condizione $y\ge x^2$, l'equazione della circonferenza implica $y^2+y-3\ge 0$, cioè $y\ge y_0=\frac{\sqrt{13}-1}{2}$. Si ottiene l'arco della circonferenza di raggio $\sqrt3$ con $y\ge y_0$. Gli estremi dell'arco sono inclusi nell'insieme e sono i punti di intersezione con la parabola:

$$\left(\pm\sqrt{3-y_0^2},\ y_0\right).$$

L'insieme di livello è l'unione dei due archi.
:::
:::

:::exercise{id="X3" type="esame" chapter="2" difficulty="medio"}
## Domanda
**APPELLO 2**

La funzione $f(x,y)=x^2y^2-4y^2$

[A] ha infiniti punti di sella
[B] ha infiniti punti di minimo relativo
[C] ha tre punti di sella e due punti di massimo relativo
[D] ha esattamente sei punti stazionari

:::solution
**Punti stazionari**

Si può scrivere $f(x,y)=y^2\left(x^2-4\right)$. Le derivate parziali sono

$$f_x=2xy^2,\qquad f_y=2y\left(x^2-4\right).$$

Si impone $\nabla f=(0,0)$.

Dalla prima equazione si ha $x=0$ oppure $y=0$.

- Se $x=0$, la seconda equazione diventa $-8y=0$, quindi $y=0$. Si ottiene il punto $(0,0)$.
- Se $y=0$, la seconda equazione è soddisfatta per ogni $x$.

I punti stazionari sono quindi tutti i punti dell'asse $x$, cioè $(x_0,0)$ con $x_0\in\mathbb{R}$. Sono infiniti, quindi **[D]** è falsa.

**Classificazione**

Nei punti $(x_0,0)$ l'Hessiana è

$$H=\begin{pmatrix}2y^2 & 4xy\\ 4xy & 2(x^2-4)\end{pmatrix}\Big|_{(x_0,0)}=\begin{pmatrix}0&0\\0&2(x_0^2-4)\end{pmatrix},$$

che ha determinante nullo. Il test dell'Hessiana non è quindi conclusivo e si studia direttamente il segno di $f$. Si ha $f(x_0,0)=0$ e $f(x,y)=y^2(x^2-4)$ con $y^2\ge 0$.

- Se $|x_0|>2$, allora $x^2-4>0$ in un intorno di $x_0$, quindi $f\ge 0=f(x_0,0)$. Ogni punto $(x_0,0)$ con $|x_0|>2$ è un **minimo relativo** (non stretto). Sono infiniti.
- Se $|x_0|<2$, allora $x^2-4<0$ in un intorno di $x_0$, quindi $f\le 0$. Questi punti, compreso l'origine, sono **massimi relativi** (non stretti).
- Se $x_0=\pm2$, il fattore $x^2-4$ cambia segno attorno a $x_0$, e $y^2>0$ fuori dall'asse. Quindi $f$ assume valori sia positivi sia negativi in ogni intorno di $(\pm2,0)$. Questi due punti sono **di sella**.

**Conclusione**

- [A] è falsa: i punti di sella sono solo due, $(\pm2,0)$.
- [B] è vera: i punti $(x_0,0)$ con $|x_0|>2$ sono infiniti punti di minimo relativo.
- [C] è falsa: i punti di sella sono due e i massimi relativi sono infiniti.
- [D] è falsa: i punti stazionari sono infiniti.

**Risposta corretta: [B].**
:::
:::

:::exercise{id="X4" type="esame" chapter="2" difficulty="facile"}
## Domanda
**Appello 4**

La funzione

$$f(x,y)=x^3-3x+y^3-3y$$

A possiede due punti stazionari  
B possiede quattro punti stazionari, tutti di sella  
C possiede quattro punti stazionari  
D non possiede punti stazionari

:::solution
**Punti stazionari**

Cerco i punti in cui si annulla il gradiente di $f(x,y)=x^3-3x+y^3-3y$:

$$\nabla f(x,y)=\left(3x^2-3,\; 3y^2-3\right)=(0,0)$$

Le due equazioni sono indipendenti:

$$3x^2-3=0 \;\Rightarrow\; x=\pm 1,\qquad 3y^2-3=0 \;\Rightarrow\; y=\pm 1$$

I punti stazionari sono quindi quattro:

$$(1,1),\quad (1,-1),\quad (-1,1),\quad (-1,-1)$$

**Classificazione**

La matrice hessiana è

$$H_f(x,y)=\begin{pmatrix} 6x & 0\\ 0 & 6y\end{pmatrix}$$

- In $(1,1)$ l'hessiana è $\operatorname{diag}(6,6)$, definita positiva, quindi il punto è un minimo locale.
- In $(-1,-1)$ l'hessiana è $\operatorname{diag}(-6,-6)$, definita negativa, quindi il punto è un massimo locale.
- In $(1,-1)$ e in $(-1,1)$ l'hessiana è $\operatorname{diag}(6,-6)$ o $\operatorname{diag}(-6,6)$, indefinita, quindi i punti sono di sella.

I quattro punti stazionari non sono tutti di sella: due sono estremi locali e due sono selle. Questo esclude l'opzione B.

**Risposta**

La funzione possiede quattro punti stazionari. La risposta corretta è la **C**.
:::
:::

:::exercise{id="X5" type="esame" chapter="2" difficulty="facile"}
## Domanda
**APPELLO 1**

Sia

$$
f(x,y)=
\begin{cases}
y\sin(x/y) & \text{se } y\ne 0\\
0 & \text{se } y=0.
\end{cases}
$$

Sia $\mathbf{v}=\left(\frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2}\right)$. Allora la derivata direzionale $D_{\mathbf{v}}f(0,0)$

- ☐ A non esiste
- ☐ B vale $0$
- ☐ C vale $\frac{\sqrt{2}}{2}\sin 1$
- ☐ D vale $\frac{1}{2}\sin 1$

:::solution
**Impostazione**

La derivata direzionale in $(0,0)$ lungo il versore $\mathbf{v}=(v_1,v_2)$ si calcola con la definizione:

$$D_{\mathbf{v}}f(0,0)=\lim_{t\to 0}\frac{f(tv_1,tv_2)-f(0,0)}{t}.$$

Qui $f(0,0)=0$ e $v_1=v_2=\frac{\sqrt{2}}{2}$.

**Calcolo**

Per $t\neq 0$ si ha $y=t\frac{\sqrt2}{2}\neq 0$, quindi si usa il primo ramo della definizione di $f$:

$$f\left(t\tfrac{\sqrt2}{2},t\tfrac{\sqrt2}{2}\right)=t\tfrac{\sqrt2}{2}\,\sin\!\left(\frac{t\frac{\sqrt2}{2}}{t\frac{\sqrt2}{2}}\right)=t\tfrac{\sqrt2}{2}\sin 1.$$

Il rapporto incrementale vale allora

$$\frac{f(tv_1,tv_2)-0}{t}=\frac{\sqrt2}{2}\sin 1,$$

ed è costante per ogni $t\neq0$. Il limite per $t\to0$ (da destra e da sinistra) esiste ed è uguale a questo valore:

$$D_{\mathbf{v}}f(0,0)=\frac{\sqrt2}{2}\sin 1.$$

**Risposta**

Risposta corretta: **C**, la derivata direzionale vale $\frac{\sqrt{2}}{2}\sin 1$.

Le altre risposte sono sbagliate:

- **A** è falsa perché il limite esiste.
- **B** è falsa perché $\sin 1\neq 0$.
- **D** è falsa perché $\frac12\sin 1\neq\frac{\sqrt2}{2}\sin 1$. Il valore $\frac12$ si otterrebbe dimenticando di dividere per $t$ e tenendo il fattore $\frac{\sqrt2}{2}$ al quadrato.
:::
:::

:::exercise{id="X6" type="esame" chapter="2" difficulty="facile"}
## Domanda
**APPELLO 2**

Il piano tangente al grafico della funzione definita da $f(x,y)=x\log(x^2+y^2)$ nel punto $(1,1,f(1,1))$ ha equazione

- A $z=-1+y+(\log 2+1)x$
- B $z=-2+y+(\log 2+1)x$
- C $z=\log 2+y+(\log 2+1)x$
- D $z=\log 2+(y-1)+(\log 2+1)x$

:::solution
**Impostazione**

Il piano tangente al grafico di $f$ nel punto $(x_0,y_0,f(x_0,y_0))$ ha equazione

$$z=f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)$$

Qui $(x_0,y_0)=(1,1)$.

**Calcolo del valore e delle derivate**

Il valore della funzione nel punto è

$$f(1,1)=1\cdot\log 2=\log 2$$

Le derivate parziali, calcolate con la regola del prodotto e la derivata del logaritmo, sono

$$f_x(x,y)=\log(x^2+y^2)+x\cdot\frac{2x}{x^2+y^2},\qquad f_y(x,y)=x\cdot\frac{2y}{x^2+y^2}$$

Valutandole in $(1,1)$ si ottiene

$$f_x(1,1)=\log 2+\frac{2}{2}=\log 2+1,\qquad f_y(1,1)=\frac{2}{2}=1$$

**Equazione del piano**

Sostituendo nella formula del piano tangente:

$$z=\log 2+(\log 2+1)(x-1)+(y-1)$$

Sviluppando i prodotti:

$$z=\log 2+(\log 2+1)x-\log 2-1+y-1$$

Il termine $\log 2$ si elimina e restano $-1-1=-2$:

$$z=-2+y+(\log 2+1)x$$

**Risposta**

L'equazione trovata coincide con l'opzione **B**.
:::
:::

:::exercise{id="X7" type="esame" chapter="3" difficulty="difficile"}
## Domanda
**Esercizio in stile d'esame (generato)**

Sia $F:\mathbb{R}^2\to\mathbb{R}^2$ definita da

$$F(x,y)=\left(x+\sin y,\; y+\sin x\right).$$

a) Calcolare la matrice jacobiana di $F$ e stabilire se $F$ è differenziabile in ogni punto di $\mathbb{R}^2$.

b) Dimostrare che $F$ è lipschitziana su $\mathbb{R}^2$ con costante $L=2$, cioè $\|F(p)-F(q)\|\le 2\|p-q\|$ per ogni $p,q\in\mathbb{R}^2$.

c) Dimostrare che $2$ è la più piccola costante di Lipschitz possibile per $F$ su $\mathbb{R}^2$.

:::solution
**a)** Le componenti sono $F_1=x+\sin y$ e $F_2=y+\sin x$, e

$$J_F(x,y)=\begin{pmatrix}1 & \cos y\\ \cos x & 1\end{pmatrix}.$$

Le derivate parziali esistono e sono continue su tutto $\mathbb{R}^2$, quindi $F$ è di classe $C^1$ e dunque differenziabile in ogni punto.

**b)** Siano $p=(x_1,y_1)$, $q=(x_2,y_2)$, con $\Delta x=x_1-x_2$, $\Delta y=y_1-y_2$. Poiché $|\sin a-\sin b|\le|a-b|$ (teorema di Lagrange, $|\cos|\le1$), si ha

$$|F_1(p)-F_1(q)|=|\Delta x+\sin y_1-\sin y_2|\le|\Delta x|+|\Delta y|,$$

$$|F_2(p)-F_2(q)|=|\Delta y+\sin x_1-\sin x_2|\le|\Delta y|+|\Delta x|.$$

Quindi

$$\|F(p)-F(q)\|^2\le 2\left(|\Delta x|+|\Delta y|\right)^2\le 2\cdot 2\left(\Delta x^2+\Delta y^2\right)=4\|p-q\|^2,$$

usando $(|a|+|b|)^2\le 2(a^2+b^2)$. Dunque $\|F(p)-F(q)\|\le 2\|p-q\|$.

**c)** Scegliamo $q=(0,0)$ e $p_t=(t,t)$ con $t>0$. Allora $F(q)=(0,0)$, $F(p_t)=(t+\sin t,\,t+\sin t)$, e

$$\frac{\|F(p_t)-F(q)\|}{\|p_t-q\|}=\frac{\sqrt2\,(t+\sin t)}{\sqrt2\,t}=1+\frac{\sin t}{t}\xrightarrow[t\to0^+]{}2.$$

Se $F$ fosse lipschitziana con costante $L'<2$, il rapporto sarebbe $\le L'$ per ogni $t$, in contraddizione con il limite. Quindi la costante minima è $2$.
:::
:::

:::exercise{id="X8" type="esame" chapter="3" difficulty="medio"}
## Domanda
**Esercizio in stile d'esame (generato)**

Sia $F:\mathbb{R}^3\to\mathbb{R}^2$ la funzione definita da

$$F(x,y,z)=\left(x\,e^{yz},\; x^2+yz\right).$$

a) Calcolare la matrice jacobiana $J_F(x,y,z)$.

b) Calcolare $F(P)$ e $J_F(P)$ nel punto $P=(1,0,2)$ e scrivere la linearizzazione $L(x,y,z)$ di $F$ in $P$.

c) Calcolare la derivata di $F$ in $P$ lungo il vettore $v=(1,-1,1)$, cioè $J_F(P)\,v$, e usare $L$ per approssimare $F(1.1,\,-0.05,\,2.1)$.

:::solution
**a)** Indicate con $F_1=x\,e^{yz}$ e $F_2=x^2+yz$ le componenti, si ha

$$\frac{\partial F_1}{\partial x}=e^{yz},\quad \frac{\partial F_1}{\partial y}=xz\,e^{yz},\quad \frac{\partial F_1}{\partial z}=xy\,e^{yz},$$

$$\frac{\partial F_2}{\partial x}=2x,\quad \frac{\partial F_2}{\partial y}=z,\quad \frac{\partial F_2}{\partial z}=y.$$

Quindi

$$J_F(x,y,z)=\begin{pmatrix} e^{yz} & xz\,e^{yz} & xy\,e^{yz}\\ 2x & z & y\end{pmatrix}.$$

**b)** In $P=(1,0,2)$ si ha $yz=0$, quindi $e^{yz}=1$ e

$$F(P)=(1\cdot 1,\;1+0)=(1,1),\qquad J_F(P)=\begin{pmatrix}1 & 2 & 0\\ 2 & 2 & 0\end{pmatrix}.$$

La linearizzazione è $L(x,y,z)=F(P)+J_F(P)\,(x-1,\,y,\,z-2)^T$, cioè

$$L(x,y,z)=\left(1+(x-1)+2y,\;1+2(x-1)+2y\right)=\left(x+2y,\;2x+2y-1\right).$$

**c)** Con $v=(1,-1,1)$:

$$J_F(P)\,v=\begin{pmatrix}1\cdot1+2\cdot(-1)+0\\ 2\cdot1+2\cdot(-1)+0\end{pmatrix}=\begin{pmatrix}-1\\0\end{pmatrix}.$$

Per il punto $(1.1,-0.05,2.1)$ si ha $x=1.1$, $y=-0.05$:

$$L=(1.1-0.1,\;2.2-0.1-1)=(1.0,\;1.1).$$

Il valore esatto è circa $(0.990,\,1.105)$, coerente con l'approssimazione.
:::
:::

:::exercise{id="X9" type="esame" chapter="4" difficulty="medio"}
## Domanda
**APPELLO 1**

Sia $A$ il solido omogeneo che occupa la regione

$$
\{(x,y,z)\in\mathbb{R}^3: 2+\sqrt{x^2+z^2}\le y\le 4\}.
$$

Il suo baricentro è il punto

- ☐ A $\frac{1}{|A|}\left(0,\frac{32\pi}{3},0\right)$
- ☐ B $\frac{1}{|A|}\left(0,\frac{28\pi}{3},0\right)$
- ☐ C $\left(0,\frac{28\pi}{3},0\right)$
- ☐ D $\frac{1}{|A|}\left(0,\frac{16\pi}{3},0\right)$

:::solution
**Descrizione del solido**

La condizione $2+\sqrt{x^2+z^2}\le y\le 4$ equivale a $\sqrt{x^2+z^2}\le y-2$ con $2\le y\le 4$. Il solido è quindi un cono con asse $y$ e vertice in $(0,2,0)$. La sezione a quota $y$ è un cerchio di raggio $y-2$, e la base è il cerchio di raggio $2$ a quota $y=4$.

**Simmetria**

Il solido è omogeneo e invariante per rotazioni attorno all'asse $y$. Quindi $x_G=z_G=0$, e resta da calcolare $y_G$.

**Volume**

Le sezioni hanno area $\pi (y-2)^2$, quindi

$$|A|=\int_2^4 \pi (y-2)^2\,dy=\pi\left[\frac{(y-2)^3}{3}\right]_2^4=\frac{8\pi}{3}.$$

**Integrale di $y$**

Con la sostituzione $t=y-2$ si ha

$$\int_A y\,dx\,dy\,dz=\int_2^4 y\,\pi (y-2)^2\,dy=\pi\int_0^2 (t+2)t^2\,dt=\pi\left(\frac{t^4}{4}+\frac{2t^3}{3}\right)_0^2=\pi\left(4+\frac{16}{3}\right)=\frac{28\pi}{3}.$$

**Baricentro**

$$G=\frac{1}{|A|}\left(0,\frac{28\pi}{3},0\right)=\left(0,\frac{7}{2},0\right).$$

La risposta corretta è la **B**.

La C è sbagliata perché manca la divisione per $|A|$. Le opzioni A e D non coincidono con il valore calcolato dell'integrale.
:::
:::

:::exercise{id="X10" type="esame" chapter="4" difficulty="facile"}
## Domanda
**Appello 4**

Il valore dell’integrale

$$I=\int_0^1\int_y^1 e^{x^2}\,dx\,dy$$

A $1$  
B $e-2$  
C $e-1$  
D $\dfrac{e-1}{2}$

:::solution
**Impostazione**

L'integrale in $dx$ di $e^{x^2}$ non ha primitiva elementare, quindi conviene invertire l'ordine di integrazione.

Il dominio è

$$
D=\{(x,y)\in\mathbb{R}^2 : 0\le y\le 1,\ y\le x\le 1\}.
$$

Si tratta del triangolo di vertici $(0,0)$, $(1,1)$ e $(0,1)$ nel piano $(x,y)$ con $y\le x$, cioè il triangolo di vertici $(0,0)$, $(1,0)$, $(1,1)$. Lo si descrive anche come

$$
D=\{(x,y) : 0\le x\le 1,\ 0\le y\le x\}.
$$

**Inversione dell'ordine**

$$I=\int_0^1\int_0^x e^{x^2}\,dy\,dx=\int_0^1 x\,e^{x^2}\,dx.$$

**Calcolo**

Poiché $\dfrac{d}{dx}e^{x^2}=2x\,e^{x^2}$, si ha

$$
I=\left[\frac{e^{x^2}}{2}\right]_0^1=\frac{e-1}{2}.
$$

**Risultato**

$$I=\frac{e-1}{2}$$

La risposta corretta è la **D**.
:::
:::

:::exercise{id="X11" type="esame" chapter="4" difficulty="medio"}
## Domanda
**APPELLO 1**

Sia $D=\{(x,y):1\le x^2+y^2\le 9,\ y\ge 0\}$. Allora

$$
\int_D\frac{2y+x^2}{x^2+y^2}\,dx\,dy
$$

vale

- ☐ A $\frac{5+\pi}{3}$
- ☐ B $\frac{3-\pi\sqrt{2}}{2}$
- ☐ C $\frac{8}{9}\pi$
- ☐ D $8+2\pi$

:::solution
**Passaggio a coordinate polari**

Il dominio $D$ è la metà superiore ($y\ge 0$) della corona circolare compresa tra le circonferenze di raggio $1$ e $3$. Con $x=r\cos\theta$, $y=r\sin\theta$ e $dx\,dy=r\,dr\,d\theta$, il dominio diventa:

$$1\le r\le 3,\qquad 0\le\theta\le\pi$$

Poiché $x^2+y^2=r^2$, l'integrando per lo jacobiano vale:

$$\frac{2r\sin\theta+r^2\cos^2\theta}{r^2}\cdot r = 2\sin\theta + r\cos^2\theta$$

**Calcolo**

$$\int_D\frac{2y+x^2}{x^2+y^2}\,dx\,dy=\int_0^\pi\int_1^3\left(2\sin\theta+r\cos^2\theta\right)dr\,d\theta$$

L'integrale in $r$ è:

$$\int_1^3\left(2\sin\theta+r\cos^2\theta\right)dr = 4\sin\theta+\frac{9-1}{2}\cos^2\theta = 4\sin\theta+4\cos^2\theta$$

Integrando in $\theta$:

$$\int_0^\pi 4\sin\theta\,d\theta = 8,\qquad \int_0^\pi 4\cos^2\theta\,d\theta = 4\cdot\frac{\pi}{2}=2\pi$$

Il secondo risultato segue da $\int_0^\pi\cos^2\theta\,d\theta=\frac{\pi}{2}$.

**Risultato**

$$\int_D\frac{2y+x^2}{x^2+y^2}\,dx\,dy = 8+2\pi$$

La risposta corretta è la **D**.
:::
:::

:::exercise{id="X12" type="esame" chapter="5" difficulty="medio"}
## Domanda
**Appello 4**

Il lavoro compiuto dal campo vettoriale

$$F(x,y)=(x^2y+y,\,-x^2)$$

lungo il bordo del rettangolo $R=\lbrack 0,2\rbrack \times[0,1]$ percorso in senso antiorario vale

- A $\displaystyle -\frac{22}{3}$
- B $\displaystyle \frac{22}{3}$
- C $\displaystyle -\frac{26}{3}$
- D $\displaystyle \frac{26}{3}$

:::solution
**Impostazione**

Il campo $F=(P,Q)$ è di classe $C^1$ su tutto $\mathbb{R}^2$ e il bordo di $R$ è percorso in senso antiorario. Si può quindi usare il teorema di Green:

$$\oint_{\partial R^+} F\cdot d\mathbf{r}=\iint_R\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dx\,dy$$

**Calcolo delle derivate**

Con $P=x^2y+y$ e $Q=-x^2$ si ha:

$$\frac{\partial Q}{\partial x}=-2x,\qquad \frac{\partial P}{\partial y}=x^2+1$$

L'integranda vale quindi

$$\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=-2x-x^2-1$$

**Integrale doppio**

L'integranda non dipende da $y$, quindi l'integrazione in $y$ su $\lbrack 0,1\rbrack $ dà un fattore $1$:

$$\iint_R(-2x-x^2-1)\,dx\,dy=\int_0^2(-2x-x^2-1)\,dx=\left[-x^2-\frac{x^3}{3}-x\right]_0^2$$

$$=-4-\frac{8}{3}-2=-\frac{26}{3}$$

**Risultato**

Il lavoro compiuto da $F$ lungo il bordo di $R$ è

$$L=-\frac{26}{3}$$

La risposta corretta è la **C**.
:::
:::

:::exercise{id="X13" type="esame" chapter="5" difficulty="medio"}
## Domanda
**APPELLO 2**

Se $\gamma$ è il bordo orientato positivamente dell’insieme

$$
D=\{(x,y): 3x^2+y^2\le 7,\ y\ge x+1,\ x\ge 0\},
$$

allora $\displaystyle\int_\gamma (xy^2+x^4,\ 2x^2y+e^{y^2+1})\cdot\tau$ vale

- A $\dfrac{7}{4}$
- B $\dfrac{6}{7}$
- C $\dfrac{2}{5}$
- D $\dfrac{4}{3}$

:::solution
**Impostazione**

Il campo è $F=(P,Q)$ con $P=xy^2+x^4$ e $Q=2x^2y+e^{y^2+1}$. Il bordo $\gamma$ è orientato positivamente, quindi si applica il teorema di Green:

$$\int_\gamma F\cdot\tau=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dx\,dy .$$

Le derivate sono $\dfrac{\partial Q}{\partial x}=4xy$ e $\dfrac{\partial P}{\partial y}=2xy$. Quindi

$$\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=2xy .$$

**Descrizione del dominio**

Si intersecano la retta $y=x+1$ e l'ellisse $3x^2+y^2=7$:

$$3x^2+(x+1)^2=7\ \Longrightarrow\ 2x^2+x-3=0\ \Longrightarrow\ x=1\ \text{ oppure }\ x=-\tfrac32 .$$

Con la condizione $x\ge 0$ resta $x=1$, a cui corrisponde $y=2$.

Per $x\in[0,1]$ si ha $x+1\le y\le\sqrt{7-3x^2}$. A $x=0$ l'estremo inferiore è $1$ e quello superiore è $\sqrt7>1$, quindi l'ellisse sta sopra la retta in tutto l'intervallo.

**Calcolo**

$$\iint_D 2xy\,dx\,dy=\int_0^1 x\Big[y^2\Big]_{x+1}^{\sqrt{7-3x^2}}dx=\int_0^1 x\big[(7-3x^2)-(x+1)^2\big]dx .$$

Svolgendo il termine tra parentesi:

$$\int_0^1 x\,(6-2x-4x^2)\,dx=\int_0^1\left(6x-2x^2-4x^3\right)dx=3-\frac23-1=\frac43 .$$

**Risultato**

$$\int_\gamma F\cdot\tau=\frac43 .$$

La risposta corretta è **D**.
:::
:::

:::exercise{id="X14" type="esame" chapter="5" difficulty="medio"}
## Domanda
**APPELLO 2**

Sia $\Sigma$ la superficie di equazione cartesiana $z=x^2-y^2$, che si proietta sul piano $xy$ sull’insieme $D=\{(x,y)\in\mathbb{R}^2:1\le x^2+y^2\le 4\}$. Allora

$$
\int_\Sigma \frac{z+y^2}{\sqrt{1+4x^2+4y^2}}\,d\sigma
$$

vale

- A $\dfrac{15\pi}{4}$
- B $\dfrac{3\pi}{4}$
- C $\dfrac{3\pi}{2}$
- D $\dfrac{15}{4}$

:::solution
**Impostazione**

La superficie è il grafico di $z=f(x,y)=x^2-y^2$ sul dominio $D$. Le derivate parziali sono $f_x=2x$ e $f_y=-2y$, quindi l'elemento d'area è

$$
d\sigma=\sqrt{1+f_x^2+f_y^2}\,dx\,dy=\sqrt{1+4x^2+4y^2}\,dx\,dy .
$$

**Semplificazione dell'integrando**

Su $\Sigma$ vale $z+y^2=x^2-y^2+y^2=x^2$. Il fattore $\sqrt{1+4x^2+4y^2}$ al denominatore si semplifica con quello di $d\sigma$:

$$
\int_\Sigma \frac{z+y^2}{\sqrt{1+4x^2+4y^2}}\,d\sigma=\iint_D x^2\,dx\,dy .
$$

**Calcolo in coordinate polari**

Poniamo $x=r\cos\theta$, $y=r\sin\theta$, con $1\le r\le 2$ e $0\le\theta\le 2\pi$. Lo jacobiano è $r$, quindi

$$
\iint_D x^2\,dx\,dy=\int_0^{2\pi}\cos^2\theta\,d\theta\int_1^2 r^3\,dr=\pi\cdot\left[\frac{r^4}{4}\right]_1^2=\pi\cdot\frac{16-1}{4}=\frac{15\pi}{4}.
$$

**Risultato**

L'integrale vale $\dfrac{15\pi}{4}$, cioè la risposta **A**.
:::
:::

:::exercise{id="X15" type="esame" chapter="5" difficulty="medio"}
## Domanda
**Appello 4**

Sia

$$F(x,y,z)=(x+yz,\ y+xz,\ z+xy).$$

Il flusso uscente di $F$ attraverso la superficie del cubo $\lbrack -1,1\rbrack \times[-1,1]\times[-1,1]$

A $0$  
B $8$  
C $24$  
D $48$

:::solution
**Impostazione**

Il cubo $C=\lbrack -1,1\rbrack ^3$ è un dominio regolare e $F$ è di classe $C^1$ su tutto $\mathbb{R}^3$, quindi si può applicare il teorema della divergenza (di Gauss):

$$\iint_{\partial C} F\cdot n\,d\sigma=\iiint_C \operatorname{div}F\,dx\,dy\,dz.$$

**Calcolo della divergenza**

$$\operatorname{div}F=\frac{\partial}{\partial x}(x+yz)+\frac{\partial}{\partial y}(y+xz)+\frac{\partial}{\partial z}(z+xy)=1+1+1=3.$$

**Calcolo del flusso**

Il volume del cubo è $2^3=8$, quindi

$$\Phi=\iiint_C 3\,dx\,dy\,dz=3\cdot 8=24.$$

**Verifica diretta**

Sulla faccia $x=1$ la normale uscente è $(1,0,0)$ e $F\cdot n=1+yz$. Si ha

$$
\iint_{\lbrack -1,1\rbrack ^2}(1+yz)\,dy\,dz=4+0=4,
$$

perché $\iint yz=0$ per simmetria. Sulla faccia $x=-1$ la normale è $(-1,0,0)$ e $F\cdot n=-(-1+yz)=1-yz$, con integrale $4$. Ogni coppia di facce contribuisce $8$, e le tre coppie danno $3\cdot 8=24$.

**Risposta**

Il flusso uscente vale $24$: risposta **C**.
:::
:::

:::exercise{id="X16" type="esame" chapter="5" difficulty="medio"}
## Domanda
**APPELLO 1**

Sia $F(x,y)=(3x^2\sin(y)+y^2,x^3\cos(y)+2xy+1)$ e sia $G(x,y)=F(x,y)+(2x,y)$, $(x,y)\in\mathbb{R}^2$. Se $\gamma_1$ e $\gamma_2$ sono due curve da $P=(0,0)$ a $Q=(2,1)$ e $\gamma=\gamma_1\cup(-\gamma_2)$ allora

- ☐ A $\displaystyle\int_\gamma F\cdot\tau\ne\int_\gamma(F+G)\cdot\tau$
- ☐ B $\displaystyle\int_{\gamma_1}(F+G)\cdot\tau=-\int_{\gamma_2}(F+G)\cdot\tau$
- ☐ C $\displaystyle\int_{\gamma_1}F\cdot\tau=\int_{\gamma_2}F\cdot\tau$
- ☐ D $\displaystyle\int_{\gamma_1}F\cdot\tau+\int_{\gamma_2}F\cdot\tau=\int_\gamma F\cdot\tau$

:::solution
**Il campo $F$ è conservativo**

Il dominio è $\mathbb{R}^2$, che è semplicemente connesso. Si verifica che le derivate miste coincidono:

$$\frac{\partial F_1}{\partial y}=3x^2\cos y+2y,\qquad \frac{\partial F_2}{\partial x}=3x^2\cos y+2y.$$

Quindi $F$ è chiuso e, essendo definito su $\mathbb{R}^2$, è conservativo. Un potenziale è

$$U(x,y)=x^3\sin y+xy^2+y.$$

Infatti $U_x=3x^2\sin y+y^2$ e $U_y=x^3\cos y+2xy+1$.

**Il campo $G$ è conservativo**

Il campo aggiunto $(2x,y)$ ha potenziale $x^2+\dfrac{y^2}{2}$, quindi è conservativo. Allora anche $G=F+(2x,y)$ è conservativo, e lo è anche $F+G$.

**Valori degli integrali**

Per un campo conservativo l'integrale dipende solo dagli estremi della curva. Per $F$ si ha

$$\int_{\gamma_1}F\cdot\tau=\int_{\gamma_2}F\cdot\tau=U(2,1)-U(0,0)=8\sin 1+2+1=8\sin 1+3\neq 0.$$

Poiché $\gamma=\gamma_1\cup(-\gamma_2)$ è una curva chiusa, vale $\displaystyle\int_\gamma F\cdot\tau=0$. Lo stesso vale per $F+G$.

**Analisi delle opzioni**

- **A** è falsa: entrambi gli integrali su $\gamma$ sono nulli, quindi sono uguali.
- **B** è falsa: per $F+G$ vale $\displaystyle\int_{\gamma_1}(F+G)\cdot\tau=\int_{\gamma_2}(F+G)\cdot\tau$. Questo valore è $2(8\sin 1+3)+4+\tfrac12\neq 0$, quindi i due integrali non sono opposti.
- **C** è vera: $\displaystyle\int_{\gamma_1}F\cdot\tau=\int_{\gamma_2}F\cdot\tau$, perché $F$ è conservativo e le due curve hanno gli stessi estremi.
- **D** è falsa: $\displaystyle\int_\gamma F\cdot\tau=\int_{\gamma_1}F\cdot\tau-\int_{\gamma_2}F\cdot\tau=0$, mentre la somma $\displaystyle\int_{\gamma_1}F\cdot\tau+\int_{\gamma_2}F\cdot\tau=2(8\sin 1+3)\neq 0$.

**Risposta**

**C**
:::
:::

:::exercise{id="X17" type="esame" chapter="5" difficulty="medio"}
## Domanda
**APPELLO 2**

Si considerino il campo vettoriale definito da

$$
F(x,y,z)=(2xz,4y^3+e^z,z-2)
$$

e la regione

$$
A=\{(x,y,z)\in\mathbb{R}^3:x^2+y^2\leq 1,-2\leq z\leq 2\}.
$$

(a) Rappresentare il cilindro $A$.

(b) Calcolare la divergenza di $F$.

(c) Calcolare il flusso di $F$ uscente dal bordo di $A$.

(d) Parametrizzare le due basi di $A$ e calcolare il flusso di $F$ uscente dalle due basi.

(e) Calcolare il flusso di $F$ uscente dalla superficie laterale di $A$.

:::solution
**(a) Rappresentazione del cilindro**

$A$ è il cilindro pieno con asse coincidente con l'asse $z$, raggio $1$ e altezza $4$. Ha per basi i due dischi $x^2+y^2\le 1$ nei piani $z=-2$ e $z=2$. La superficie laterale è $x^2+y^2=1$, con $-2\le z\le 2$.

**(b) Divergenza**

$$\operatorname{div}F=\frac{\partial (2xz)}{\partial x}+\frac{\partial (4y^3+e^z)}{\partial y}+\frac{\partial (z-2)}{\partial z}=2z+12y^2+1.$$

**(c) Flusso uscente dal bordo**

Il campo $F$ è di classe $C^1$ e $A$ è un dominio regolare. Si può quindi applicare il teorema della divergenza:

$$\Phi=\iiint_A (2z+12y^2+1)\,dx\,dy\,dz.$$

Si calcolano i tre addendi separatamente, usando le coordinate cilindriche $x=r\cos\theta,\ y=r\sin\theta,\ z=z$.

- $\iiint_A 2z\,dV=0$, perché $A$ è simmetrico rispetto al piano $z=0$ e la funzione è dispari in $z$.
- $\iiint_A 12y^2\,dV=12\cdot 4\int_0^{2\pi}\!\!\int_0^1 r^2\sin^2\theta\; r\,dr\,d\theta=48\cdot\frac14\cdot\pi=12\pi$.
- $\iiint_A 1\,dV=\pi\cdot 1^2\cdot 4=4\pi$.

Quindi

$$\Phi=0+12\pi+4\pi=16\pi.$$

**(d) Flusso uscente dalle basi**

**Base superiore** ($z=2$). Una parametrizzazione è

$$\sigma_s(u,v)=(u\cos v,\ u\sin v,\ 2),\qquad u\in[0,1],\ v\in[0,2\pi].$$

Si ha $\sigma_{s,u}\times\sigma_{s,v}=(0,0,u)$, che è diretto verso l'esterno. Su questa base $F\cdot n=z-2=0$, quindi

$$\Phi_{\text{sup}}=\int_0^{2\pi}\!\!\int_0^1 0\,du\,dv=0.$$

**Base inferiore** ($z=-2$). Una parametrizzazione è

$$\sigma_i(u,v)=(u\cos v,\ u\sin v,\ -2),\qquad u\in[0,1],\ v\in[0,2\pi].$$

Qui $\sigma_{i,u}\times\sigma_{i,v}=(0,0,u)$ è diretto verso l'interno. La normale uscente è quindi $n=(0,0,-u)$ (in forma non normalizzata). Si ottiene

$$F\cdot n=-(z-2)\,u=4u,$$

$$\Phi_{\text{inf}}=\int_0^{2\pi}\!\!\int_0^1 4u\,du\,dv=4\pi.$$

Il flusso totale uscente dalle due basi è $0+4\pi=4\pi$.

**(e) Flusso uscente dalla superficie laterale**

Per differenza rispetto al flusso totale:

$$\Phi_{\text{lat}}=16\pi-4\pi=12\pi.$$

**Verifica diretta.** Si parametrizza con $\sigma(\theta,z)=(\cos\theta,\sin\theta,z)$. La normale uscente è $n=(\cos\theta,\sin\theta,0)$ e l'elemento d'area è $d\theta\,dz$. Allora

$$F\cdot n=2z\cos^2\theta+4\sin^4\theta+e^z\sin\theta.$$

I termini $2z\cos^2\theta$ ed $e^z\sin\theta$ hanno integrale nullo: il primo perché dispari in $z$, il secondo perché $\int_0^{2\pi}\sin\theta\,d\theta=0$. Resta

$$\Phi_{\text{lat}}=\int_{-2}^{2}\!\!\int_0^{2\pi}4\sin^4\theta\,d\theta\,dz=4\cdot\frac{3\pi}{4}\cdot 4=12\pi,$$

in accordo con il risultato precedente.

**Risultati**

- $\operatorname{div}F=2z+12y^2+1$
- flusso totale uscente: $16\pi$
- flusso uscente dalle basi: $0$ (superiore) e $4\pi$ (inferiore)
- flusso uscente dalla superficie laterale: $12\pi$
:::
:::

:::exercise{id="X18" type="esame" chapter="5" difficulty="medio"}
## Domanda
**Appello 4**

Sia $k \in \mathbb{R}$ e sia

$$
F(x,y,z)=\left(3xy,\frac{3}{2}x^2+2y,(k-1)x+z^2\right) \qquad (x,y,z)\in\mathbb{R}^3.
$$

(a) Calcolare il rotore di $F$.

(b) Determinare i valori di $k$ per cui il campo è conservativo.

(c) Per tali valori di $k$ determinare tutti i potenziali del campo.

(d) Per tali valori di $k$ calcolare il lavoro di $F$ lungo il segmento che congiunge $A=(0,1,1)$ a $B=(2,0,1)$.

(e) Per tali valori di $k$ calcolare il lavoro di $F$ lungo la curva

$$
\gamma(t)=(1+\cos t,\ 2\sin t,\ 3), \qquad t\in[0,2\pi].
$$

Disegnare il sostegno della curva $\gamma$ in $\mathbb{R}^3$.

:::solution
**(a) Rotore**

Poniamo $F_1=3xy$, $F_2=\frac32x^2+2y$, $F_3=(k-1)x+z^2$. Il rotore è

$$\operatorname{rot}F=\left(\frac{\partial F_3}{\partial y}-\frac{\partial F_2}{\partial z},\ \frac{\partial F_1}{\partial z}-\frac{\partial F_3}{\partial x},\ \frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}\right).$$

Calcolando le derivate:

- $\dfrac{\partial F_3}{\partial y}-\dfrac{\partial F_2}{\partial z}=0-0=0$;
- $\dfrac{\partial F_1}{\partial z}-\dfrac{\partial F_3}{\partial x}=0-(k-1)=1-k$;
- $\dfrac{\partial F_2}{\partial x}-\dfrac{\partial F_1}{\partial y}=3x-3x=0$.

Quindi

$$\operatorname{rot}F=(0,\ 1-k,\ 0).$$

**(b) Valori di $k$ per cui $F$ è conservativo**

Il campo $F$ è di classe $C^1$ su $\mathbb{R}^3$, che è semplicemente connesso. Perciò $F$ è conservativo se e solo se $\operatorname{rot}F=0$, cioè se e solo se $1-k=0$.

$$k=1.$$

**(c) Potenziali**

Con $k=1$ si ha $F=(3xy,\ \frac32x^2+2y,\ z^2)$. Integrando la prima componente rispetto a $x$:

$$U=\frac32x^2y+g(y,z).$$

Derivando rispetto a $y$ e imponendo $U_y=\frac32x^2+2y$ si ottiene $g_y=2y$. Quindi $g=y^2+h(z)$.

Derivando rispetto a $z$ e imponendo $U_z=z^2$ si ottiene $h'(z)=z^2$. Quindi $h=\frac{z^3}{3}+c$.

Tutti i potenziali sono

$$U(x,y,z)=\frac32x^2y+y^2+\frac{z^3}{3}+c,\qquad c\in\mathbb{R}.$$

**(d) Lavoro lungo il segmento da $A$ a $B$**

Per un campo conservativo il lavoro dipende solo dagli estremi:

$$L=U(B)-U(A).$$

Si ha $U(2,0,1)=0+0+\frac13=\frac13$ e $U(0,1,1)=0+1+\frac13=\frac43$. Quindi

$$L=\frac13-\frac43=-1.$$

**(e) Lavoro lungo $\gamma$**

La curva $\gamma$ è chiusa, perché $\gamma(0)=\gamma(2\pi)=(2,0,3)$. Poiché $F$ è conservativo,

$$L=0.$$

**Sostegno di $\gamma$**

Il sostegno è contenuto nel piano $z=3$. Le coordinate $x=1+\cos t$, $y=2\sin t$ soddisfano

$$(x-1)^2+\frac{y^2}{4}=1.$$

Il sostegno è quindi l'ellisse, nel piano orizzontale $z=3$, con centro $(1,0,3)$ e semiassi $1$ lungo $x$ e $2$ lungo $y$.

I suoi punti notevoli sono:

- $(2,0,3)$, punto di partenza e di arrivo;
- $(1,2,3)$, raggiunto per $t=\frac{\pi}{2}$;
- $(0,0,3)$, raggiunto per $t=\pi$;
- $(1,-2,3)$, raggiunto per $t=\frac{3\pi}{2}$.

L'ellisse è percorsa una sola volta in senso antiorario, visto dall'alto (da $z>3$).
:::
:::

:::exercise{id="X19" type="esame" chapter="5" difficulty="medio"}
## Domanda
**APPELLO 1**

Sia $F(x,y,z)=(3z-1, 2x+3y, 4yz+2e^z)$ e sia $\Sigma=\{(x,y,z)\in\mathbb{R}^3 : z=x^2+y^2-1,\ 0\le z\le 3\}$ orientata con normale che forma un angolo acuto con il versore dell’asse $z$.

(a) Rappresentare $\Sigma$.

(b) Calcolare il rotore di $F$.

(c) Calcolare il flusso del rotore di $F$ attraverso $\Sigma$.

(d) Parametrizzare il bordo di $\Sigma$ e indicare quanto vale il lavoro compiuto da $F$ lungo il bordo della superficie $\Sigma$ orientato positivamente.

:::solution
**Punto (a): rappresentazione di $\Sigma$**

$\Sigma$ è la porzione del paraboloide $z=x^2+y^2-1$, con vertice in $(0,0,-1)$, compresa tra i piani $z=0$ e $z=3$. La condizione $0\le z\le 3$ equivale a $1\le x^2+y^2\le 4$. La proiezione di $\Sigma$ sul piano $xy$ è quindi la corona circolare

$$D=\{(x,y)\in\mathbb{R}^2 : 1\le x^2+y^2\le 4\}.$$

Una parametrizzazione di $\Sigma$ è

$$\varphi(x,y)=(x,\,y,\,x^2+y^2-1),\qquad (x,y)\in D.$$

In coordinate polari si può scrivere

$$\varphi(r,\theta)=(r\cos\theta,\ r\sin\theta,\ r^2-1),\qquad 1\le r\le 2,\ 0\le\theta\le 2\pi.$$

Il vettore normale

$$\varphi_x\times\varphi_y=(-2x,\,-2y,\,1)$$

ha terza componente positiva, quindi forma un angolo acuto con l'asse $z$. Questa parametrizzazione è coerente con l'orientazione richiesta.

**Punto (b): rotore di $F$**

Con $P=3z-1$, $Q=2x+3y$, $R=4yz+2e^z$:

$$\operatorname{rot}F=\left(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y\right)=(4z-0,\ 3-0,\ 2-0).$$

$$\operatorname{rot}F=(4z,\ 3,\ 2).$$

**Punto (c): flusso del rotore attraverso $\Sigma$**

Il flusso è

$$\iint_\Sigma \operatorname{rot}F\cdot \mathbf{n}\,d\sigma=\iint_D (4z,3,2)\cdot(-2x,-2y,1)\,dx\,dy,$$

con $z=x^2+y^2-1$. Quindi

$$\iint_D\left(-8xz-6y+2\right)dx\,dy.$$

Il dominio $D$ è simmetrico rispetto agli assi. Il termine $-8xz=-8x(x^2+y^2-1)$ è dispari in $x$ e il termine $-6y$ è dispari in $y$, quindi i loro integrali sono nulli. Resta

$$2\,\mathrm{Area}(D)=2\left(\pi\cdot 4-\pi\cdot 1\right)=6\pi.$$

Il flusso vale

$$\iint_\Sigma \operatorname{rot}F\cdot\mathbf{n}\,d\sigma=6\pi.$$

**Punto (d): bordo e lavoro**

Il bordo $\partial\Sigma$ è formato da due circonferenze.

- Circonferenza esterna, a $z=3$ e $r=2$: $\gamma_1(t)=(2\cos t,\ 2\sin t,\ 3)$, $t\in[0,2\pi]$. L'orientazione positiva è antioraria vista dall'alto.
- Circonferenza interna, a $z=0$ e $r=1$: $\gamma_2(t)=(\cos t,\ -\sin t,\ 0)$, $t\in[0,2\pi]$. L'orientazione positiva è oraria vista dall'alto.

Per il **teorema di Stokes** il lavoro lungo il bordo orientato positivamente è uguale al flusso del rotore:

$$\oint_{\partial\Sigma^+}F\cdot d\mathbf{r}=\iint_\Sigma \operatorname{rot}F\cdot\mathbf{n}\,d\sigma=6\pi.$$

**Verifica diretta.**

Sulla circonferenza esterna, con $z=3$ e $dz=0$:

$$F\cdot\gamma_1'=8\cdot(-2\sin t)+(4\cos t+6\sin t)(2\cos t)=-16\sin t+8\cos^2t+12\sin t\cos t.$$

L'integrale su $\lbrack 0,2\pi\rbrack $ vale $8\pi$.

Sulla circonferenza interna percorsa in senso antiorario, con $z=0$:

$$F\cdot\gamma'=(-1)(-\sin t)+(2\cos t+3\sin t)\cos t=\sin t+2\cos^2t+3\sin t\cos t.$$

L'integrale su $\lbrack 0,2\pi\rbrack $ vale $2\pi$. Percorrendola in senso orario si ottiene $-2\pi$.

Il lavoro totale è

$$8\pi-2\pi=6\pi,$$

in accordo con il teorema di Stokes.
:::
:::

:::exercise{id="X20" type="esame" chapter="6" difficulty="facile"}
## Domanda
**Appello 4**

La serie numerica

$$\sum_{k=1}^{\infty}\frac{\sin k}{k^{3/2}+3}$$

- A non converge
- B converge assolutamente
- C converge ma non converge assolutamente
- D è indeterminata

:::solution
**Impostazione**

Per stabilire il carattere della serie studiamo la convergenza assoluta, cioè la serie dei moduli dei termini.

**Convergenza assoluta**

Poiché $|\sin k|\le 1$ e $k^{3/2}+3>0$, per ogni $k\ge 1$ vale

$$\left|\frac{\sin k}{k^{3/2}+3}\right|\le \frac{1}{k^{3/2}+3}<\frac{1}{k^{3/2}}.$$

La serie $\sum_{k=1}^{\infty}\frac{1}{k^{3/2}}$ è una serie armonica generalizzata con esponente $\alpha=\frac{3}{2}>1$, quindi converge.

Per il criterio del confronto per serie a termini non negativi, anche la serie

$$\sum_{k=1}^{\infty}\left|\frac{\sin k}{k^{3/2}+3}\right|$$

converge. Dunque la serie data converge assolutamente.

**Conclusione**

La convergenza assoluta implica la convergenza semplice, quindi la serie non è indeterminata e non diverge. Sono perciò escluse le risposte A, C e D.

**Risposta corretta: B** (la serie converge assolutamente).
:::
:::

:::exercise{id="X21" type="esame" chapter="6" difficulty="medio"}
## Domanda
**APPELLO 1**

La serie

$$
\sum_{n=1}^{\infty}(-1)^n\frac{4\log(n^3)}{n^3+\log^4(n)}
$$

è

- **A** indeterminata
- **B** convergente, ma non assolutamente convergente
- **C** divergente
- **D** assolutamente convergente

:::solution
**Impostazione**

Studiamo la convergenza assoluta della serie, cioè la serie dei valori assoluti

$$\sum_{n=1}^{\infty}\frac{4\log(n^3)}{n^3+\log^4(n)}=\sum_{n=1}^{\infty}\frac{12\log n}{n^3+\log^4 n}.$$

**Convergenza assoluta**

Per $n\to\infty$ si ha $\log^4 n = o(n^3)$, quindi $n^3+\log^4 n\sim n^3$. Il termine generale è dunque asintotico a

$$\frac{12\log n}{n^3}.$$

Per $n\ge 2$ si ha $\log n\le \sqrt{n}$ da un certo $n$ in poi, quindi

$$\frac{12\log n}{n^3}\le \frac{12}{n^{5/2}}.$$

La serie $\sum \frac{1}{n^{5/2}}$ converge perché $\frac52>1$. Per il criterio del confronto (e del confronto asintotico) la serie dei valori assoluti converge.

**Conclusione**

La serie converge assolutamente, e quindi converge anche semplicemente. La risposta corretta è la **D**: assolutamente convergente.
:::
:::

:::exercise{id="X22" type="esame" chapter="6" difficulty="medio"}
## Domanda
**APPELLO 2**

Sia $\{a_n\}_n$ una successione di numeri reali positivi tale che $\lim_{n\to\infty}a_n(n\log^{1/3}(n))=3$. Allora $\displaystyle\sum_{n=1}^{\infty}a_n$ è

- A convergente
- B divergente a $-\infty$
- C divergente a $+\infty$
- D indeterminata

:::solution
**Impostazione**

Per ipotesi $a_n>0$ e

$$
\lim_{n\to\infty} a_n\, n\log^{1/3}(n)=3,
$$

quindi

$$
a_n\sim\frac{3}{n\log^{1/3}(n)}\qquad (n\to\infty).
$$

**Confronto asintotico**

Poiché $a_n$ e $b_n=\dfrac{1}{n\log^{1/3}(n)}$ sono positive e $\dfrac{a_n}{b_n}\to 3\in(0,+\infty)$, per il criterio del confronto asintotico le serie $\sum a_n$ e $\sum b_n$ hanno lo stesso carattere.

**Carattere della serie di confronto**

La serie $\displaystyle\sum_{n\ge2}\frac{1}{n\log^{p}(n)}$ converge se e solo se $p>1$. Lo si verifica con il criterio dell'integrale. Per $p=\tfrac13$ la funzione $f(x)=\dfrac{1}{x\log^{1/3}x}$ è positiva e decrescente per $x\ge2$, e

$$
\int_2^{M}\frac{dx}{x\log^{1/3}x}=\left[\frac{3}{2}\log^{2/3}x\right]_2^{M}=\frac32\left(\log^{2/3}M-\log^{2/3}2\right)\xrightarrow[M\to\infty]{}+\infty.
$$

L'integrale diverge, quindi $\sum b_n$ diverge a $+\infty$.

**Conclusione**

Per il confronto asintotico anche $\sum a_n$ diverge. Avendo termini positivi, la sua somma è $+\infty$.

**Risposta: C** (divergente a $+\infty$).

Le risposte B e D sono escluse. Una serie a termini positivi non può divergere a $-\infty$ e non può essere indeterminata, perché la successione delle somme parziali è crescente e ha sempre limite.
:::
:::

:::exercise{id="X23" type="esame" chapter="7" difficulty="medio"}
## Domanda
**APPELLO 2**

Il raggio di convergenza della serie

$$\sum_{n=0}^{\infty}(-1)^n\frac{n^4}{2^n}(x-1)^{4n}$$

è

[A] $2^{1/4}$
[B] $2$
[C] $2^4$
[D] $\frac{1}{2}$

:::solution
**Impostazione**

La serie è una serie di potenze nella variabile $t=(x-1)^4$, centrata in $t=0$:

$$\sum_{n=0}^{\infty}(-1)^n\frac{n^4}{2^n}\,t^n, \qquad t=(x-1)^4.$$

**Raggio di convergenza in $t$**

I coefficienti sono $a_n=(-1)^n\dfrac{n^4}{2^n}$. Applichiamo il criterio del rapporto:

$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{(n+1)^4}{2^{n+1}}\cdot\frac{2^n}{n^4}=\frac{1}{2}\left(1+\frac{1}{n}\right)^4\;\longrightarrow\;\frac{1}{2}\quad (n\to\infty).$$

Quindi il raggio di convergenza in $t$ è $R_t=\dfrac{1}{1/2}=2$: la serie converge assolutamente per $|t|<2$ e non converge per $|t|>2$.

**Ritorno alla variabile $x$**

La condizione $|t|<2$ diventa $|x-1|^4<2$, cioè

$$|x-1|<2^{1/4}.$$

Per $|x-1|>2^{1/4}$ si ha $|t|>2$ e la serie non converge. Il raggio di convergenza in $x$ è dunque $R=2^{1/4}$.

**Risultato**

Il raggio di convergenza è $2^{1/4}$, cioè la risposta **[A]**.
:::
:::

:::exercise{id="X24" type="esame" chapter="8" difficulty="medio"}
## Domanda
**APPELLO 1**

Siano $a>0$ e $f:\mathbb{R}\to\mathbb{R}$ la funzione $2\pi$-periodica con $\|f\|_2<\infty$ avente serie di Fourier

$$
S(x)=\sum_{n=1}^{\infty}\frac{a(-1)^n}{\sqrt{n(n+1)}}\sin(nx).
$$

Allora

- **A** $\|f\|_2=a\sqrt{\pi}$
- **B** $\|f\|_2=2a\sqrt{\pi}$
- **C** $\|f\|_2=a\pi$
- **D** $\|f\|_2=2a\pi$

:::solution
**Impostazione**

Si assume la norma $L^2$ sul periodo, cioè $\|f\|_2^2=\int_{-\pi}^{\pi}|f(x)|^2\,dx$. La serie data contiene solo seni, quindi $a_n=0$ per ogni $n$ e

$$b_n=\frac{a(-1)^n}{\sqrt{n(n+1)}},\qquad n\ge 1.$$

**Identità di Parseval**

Per una funzione $2\pi$-periodica con $\|f\|_2<\infty$ vale

$$\|f\|_2^2=\pi\left(\frac{a_0^2}{2}+\sum_{n=1}^{\infty}\left(a_n^2+b_n^2\right)\right)$$

Qui $a_0=0$ e $a_n=0$, quindi resta

$$\|f\|_2^2=\pi\sum_{n=1}^{\infty}b_n^2=\pi a^2\sum_{n=1}^{\infty}\frac{1}{n(n+1)}.$$

**Somma della serie**

La serie è telescopica. Poiché $\dfrac{1}{n(n+1)}=\dfrac1n-\dfrac1{n+1}$, la somma parziale è

$$\sum_{n=1}^{N}\frac{1}{n(n+1)}=1-\frac{1}{N+1}\longrightarrow 1\quad\text{per } N\to\infty.$$

**Risultato**

$$\|f\|_2^2=\pi a^2\quad\Longrightarrow\quad \|f\|_2=a\sqrt{\pi}.$$

**Risposta corretta: A.**
:::
:::

:::exercise{id="X25" type="esame" chapter="8" difficulty="medio"}
## Domanda
**Appello 4**

Si consideri la funzione $f$, dispari e $2\pi$-periodica, tale che in $\lbrack 0,\pi)$

$$
f(x)=
\begin{cases}
0 & 0\le x<\pi/3\\
1 & \pi/3\le x<\pi.
\end{cases}
$$

Allora la sua serie di Fourier

- A non converge in 0
- B converge in $\pi/3$ a 0
- C converge in $\pi/3$ a 1
- D converge in 0

:::solution
**Impostazione**

La funzione $f$ è dispari e $2\pi$-periodica, ed è regolare a tratti: è costante a tratti, con un numero finito di salti in un periodo. Per il teorema di convergenza puntuale di Dirichlet, la serie di Fourier di $f$ converge in ogni punto $x_0$ alla media dei limiti laterali:

$$\frac{f(x_0^+)+f(x_0^-)}{2}$$

**Estensione dispari**

Per $x\in(-\pi,0)$ si ha $f(x)=-f(-x)$, quindi:

$$f(x)=\begin{cases}-1 & -\pi< x\le-\pi/3\\ 0 & -\pi/3< x<0\end{cases}$$

Inoltre $f(0)=0$ per la disparità.

**Punto $x=0$**

Per $x$ vicino a $0$, sia a destra sia a sinistra, $f(x)=0$. Quindi $f(0^+)=f(0^-)=0$ e $f$ è continua in $0$. La serie converge a $0$.

Questo è coerente con il fatto che la serie di una funzione dispari contiene solo seni, che si annullano in $0$.

**Punto $x=\pi/3$**

I limiti laterali sono $f(\pi/3^-)=0$ e $f(\pi/3^+)=1$. La serie converge quindi a:

$$\frac{0+1}{2}=\frac12$$

Questo valore è diverso sia da $0$ sia da $1$.

**Verifica delle risposte**

- A: falsa, perché la serie converge in $0$.
- B: falsa, perché in $\pi/3$ la serie converge a $1/2$, non a $0$.
- C: falsa, perché in $\pi/3$ la serie converge a $1/2$, non a $1$.
- D: vera, perché la serie converge in $0$ (al valore $0$).

**Risposta corretta: D.**
:::
:::

:::exercise{id="X26" type="esame" chapter="9" difficulty="facile"}
## Domanda
**APPELLO 2**

Sia $f(t)=\frac{1}{3}e^{2t}\sin(3t)$. La trasformata di Laplace di $f$ è

[A] $\frac{1}{(s-2)^2+9}$
[B] $\frac{3}{(s-2)^2+9}$
[C] $\frac{1}{(s+2)^2+9}$
[D] $\frac{1}{3}\frac{1}{(s+2)^2+9}$

:::solution
**Impostazione**

Si usano la trasformata del seno e la traslazione in frequenza. Per $\omega\in\mathbb{R}$ vale

$$\mathcal{L}\left[\sin(\omega t)\right](s)=\frac{\omega}{s^2+\omega^2}$$

e, se $F(s)=\mathcal{L}\lbrack g\rbrack (s)$, allora $\mathcal{L}\left[e^{at}g(t)\right](s)=F(s-a)$.

**Calcolo**

Con $\omega=3$ si ha, per la {{formula:9.6}},

$$\mathcal{L}\left[\sin(3t)\right](s)=\frac{3}{s^2+9}.$$

Moltiplicando per $e^{2t}$ (quindi $a=2$) si sostituisce $s$ con $s-2$:

$$\mathcal{L}\left[e^{2t}\sin(3t)\right](s)=\frac{3}{(s-2)^2+9}.$$

Per linearità, il fattore $\frac{1}{3}$ esce dalla trasformata:

$$\mathcal{L}\lbrack f\rbrack (s)=\frac{1}{3}\cdot\frac{3}{(s-2)^2+9}=\frac{1}{(s-2)^2+9}.$$

**Risultato**

La risposta corretta è **[A]** $\dfrac{1}{(s-2)^2+9}$.

Le altre opzioni sono da scartare:

- [B] dimentica il fattore $\frac{1}{3}$.
- [C] e [D] hanno $s+2$ al posto di $s-2$: l'esponenziale $e^{2t}$ sposta $s$ in $s-2$.
:::
:::

:::exercise{id="X27" type="esame" chapter="9" difficulty="medio"}
## Domanda
**APPELLO 1**

L’antitrasformata di Laplace della funzione

$$
F(s)=\frac{3s^3-s^2-4}{s^4+4s^2}
$$

è

- **A** $-t+3\cos(2t)$
- **B** $-t-3\cos(2t)$
- **C** $t+3\sin(2t)$
- **D** $-t+3\sin(2t)$

:::solution
**Impostazione**

Il denominatore si fattorizza come $s^4+4s^2=s^2(s^2+4)$. Il grado del numeratore è minore di quello del denominatore, quindi si può decomporre in fratti semplici:

$$\frac{3s^3-s^2-4}{s^2(s^2+4)}=\frac{A}{s}+\frac{B}{s^2}+\frac{Cs+D}{s^2+4}$$

**Calcolo dei coefficienti**

Si porta tutto a denominatore comune e si uguaglia il numeratore:

$$A s(s^2+4)+B(s^2+4)+(Cs+D)s^2=(A+C)s^3+(B+D)s^2+4A\,s+4B$$

Si confrontano i coefficienti con $3s^3-s^2+0\cdot s-4$:

- $4B=-4$, quindi $B=-1$.
- $4A=0$, quindi $A=0$.
- $A+C=3$, quindi $C=3$.
- $B+D=-1$, quindi $D=0$.

Perciò

$$F(s)=-\frac{1}{s^2}+\frac{3s}{s^2+4}$$

**Antitrasformata**

Si usano le trasformate note $\mathcal{L}^{-1}\!\left[\frac{1}{s^2}\right]=t$ e $\mathcal{L}^{-1}\!\left[\frac{s}{s^2+4}\right]=\cos(2t)$:

$$f(t)=-t+3\cos(2t)$$

**Risposta**

La risposta corretta è la **A**: $-t+3\cos(2t)$.
:::
:::
