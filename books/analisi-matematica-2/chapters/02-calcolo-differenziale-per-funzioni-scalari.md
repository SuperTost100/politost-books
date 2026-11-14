---
chapter: 2
title: Calcolo differenziale per funzioni scalari
---

## p1 | Introduzione

Per descrivere una superficie non basta sapere come varia la funzione lungo una sola direzione: occorre capire come cambiano i suoi valori nello spazio e come riconoscere i punti in cui la crescita si arresta. Il calcolo differenziale in più variabili offre strumenti per rispondere a queste domande e per distinguere massimi, minimi e punti di sella. Sono idee centrali nello studio di fenomeni modellati da più grandezze, dall’energia alla geometria delle superfici.

Per affrontare il capitolo, lo studente deve saper lavorare con punti e vettori di $\mathbb{R}^n$ (si vedano i [richiami su vettori e matrici](ref:chapter/1#p2)), con funzioni di più variabili e con i concetti di limite e continuità. È utile anche saper calcolare derivate di funzioni elementari e manipolare forme quadratiche.

Al termine, saprà calcolare derivate parziali, direzionali e seconde, usare gradiente e matrice hessiana e verificare la differenziabilità. Potrà approssimare una funzione con il polinomio di Taylor, individuare i punti critici e classificarli quando il test dell’hessiana è decisivo. Nei casi degeneri, saprà studiare il segno della variazione della funzione; su un insieme compatto, saprà cercare gli estremi assoluti confrontando i punti interni e il bordo.

## p2 | Derivate parziali, direzionali e gradiente

Per una funzione di una variabile la derivata misura la rapidità con cui $f$ varia quando ci si sposta da $x_0$. In più variabili lo spostamento può avvenire in infinite direzioni, e servono strumenti per misurare la variazione lungo ciascuna. Qui si introducono le derivate parziali, che misurano la variazione lungo gli assi, le derivate direzionali, che la misurano lungo una direzione qualunque, e il gradiente, che le riassume tutte.

### Derivate parziali

Sia $f : \operatorname{dom} f \subseteq \mathbb{R}^n \to \mathbb{R}$ definita in un intorno di $\mathbf{x}_0 = (x_{01},\dots,x_{0n})$, e sia $\mathbf{e}_i$ l'$i$-esimo versore canonico.

**Definizione 2.1** (derivata parziale). La funzione $f$ ammette derivata parziale rispetto a $x_i$ in $\mathbf{x}_0$ se la funzione di una variabile reale

$$
x \mapsto f(x_{01},\dots,x_{0,i-1},x,x_{0,i+1},\dots,x_{0n}),
$$

ottenuta fissando tutte le variabili tranne la $i$-esima, è derivabile in $x = x_{0i}$. In tal caso si pone

:::formula{id="2.1" label="Derivata parziale"}
$$\frac{\partial f}{\partial x_i}(\mathbf{x}_0) = \lim_{\Delta x \to 0} \frac{f(\mathbf{x}_0 + \Delta x\, \mathbf{e}_i) - f(\mathbf{x}_0)}{\Delta x}$$
:::

Si usano anche i simboli $f_{x_i}(\mathbf{x}_0)$, $D_i f(\mathbf{x}_0)$, $\partial_i f(\mathbf{x}_0)$ e, se non c'è ambiguità, $f_i(\mathbf{x}_0)$. In due variabili si scrivono $f_x$ e $f_y$. Geometricamente, $f_x(x_0,y_0)$ e $f_y(x_0,y_0)$ sono i coefficienti angolari delle rette tangenti nel punto $(x_0,y_0,f(x_0,y_0))$ alle curve ottenute sezionando il grafico con i piani $y=y_0$ e $x=x_0$.

In pratica, per calcolare $\partial f/\partial x_i$ si trattano come costanti tutte le variabili diverse da $x_i$ e si derivano con le regole note di Analisi 1 rispetto alla sola $x_i$.

### Gradiente

**Definizione 2.2** (gradiente). Se $f$ ammette in $\mathbf{x}_0$ le derivate parziali rispetto a tutte le variabili, il gradiente di $f$ in $\mathbf{x}_0$ è il vettore

:::formula{id="2.2" label="Gradiente"}
$$\nabla f(\mathbf{x}_0) = \left(\frac{\partial f}{\partial x_1}(\mathbf{x}_0),\dots,\frac{\partial f}{\partial x_n}(\mathbf{x}_0)\right) = \frac{\partial f}{\partial x_1}(\mathbf{x}_0)\,\mathbf{e}_1 + \dots + \frac{\partial f}{\partial x_n}(\mathbf{x}_0)\,\mathbf{e}_n \in \mathbb{R}^n$$
:::

Si trova anche il simbolo $\operatorname{grad} f(\mathbf{x}_0)$. Il gradiente si può scrivere come vettore riga o colonna, secondo il contesto. Al variare di $\mathbf{x}$ si ottiene la funzione gradiente $\nabla f$, un campo vettoriale definito nell'intersezione dei domini delle derivate parziali prime. Il suo dominio può essere più piccolo di $\operatorname{dom} f$.

**Esempio 2.1** (calcolo del gradiente). Sia $f(x,y)=\sqrt{x^2+y^2}$ la distanza dall'origine, e sia $\mathbf{x}_0=(2,-1)$. Si deriva rispetto a $x$ tenendo $y$ costante, e viceversa:

$$
f_x(x,y)=\frac{x}{\sqrt{x^2+y^2}},\qquad f_y(x,y)=\frac{y}{\sqrt{x^2+y^2}}.
$$

Quindi $\nabla f(x,y) = \mathbf{x}/\|\mathbf{x}\|$, con $\operatorname{dom}\nabla f=\mathbb{R}^2\setminus\{\mathbf{0}\}$, e

$$
\nabla f(2,-1) = \left(\frac{2}{\sqrt5},-\frac{1}{\sqrt5}\right)=\frac{1}{\sqrt5}(2,-1). \quad
$$

**Esempio 2.2** (tre variabili). Sia $f(x,y,z)=y\log(2x-3z)$ e $\mathbf{x}_0=(2,3,1)$, dove $2x-3z=1>0$. Le derivate parziali sono

$$
f_x=\frac{2y}{2x-3z},\qquad f_y=\log(2x-3z),\qquad f_z=\frac{-3y}{2x-3z}.
$$

Valutandole in $\mathbf{x}_0$ si ottiene $\nabla f(2,3,1)=(6,0,-9)$. Il dominio del gradiente coincide con $\operatorname{dom} f=\{2x-3z>0\}$.

Se $f$ non dipende da $x_i$ in un intorno di $\mathbf{x}_0$, allora $\partial f/\partial x_i(\mathbf{x}_0)=0$. Per la funzione affine $f(\mathbf{x})=\mathbf{a}\cdot\mathbf{x}+b$ si ha $\nabla f(\mathbf{x})=\mathbf{a}$ in ogni punto.

### Derivate direzionali

Le derivate parziali misurano la variazione solo lungo gli assi. Per una direzione qualunque si procede così.

**Definizione 2.3** (derivata direzionale). Sia $f$ definita in un intorno di $\mathbf{x}_0$ e sia $\mathbf{v}\in\mathbb{R}^n$, $\mathbf{v}\neq\mathbf{0}$. La funzione $f$ ammette derivata direzionale lungo $\mathbf{v}$ in $\mathbf{x}_0$ se esiste finito

:::formula{id="2.3" label="Derivata direzionale"}
$$\frac{\partial f}{\partial \mathbf{v}}(\mathbf{x}_0) = \lim_{t\to 0}\frac{f(\mathbf{x}_0+t\mathbf{v})-f(\mathbf{x}_0)}{t}$$
:::

Il limite è la derivata in $t=0$ della funzione di una variabile $t\mapsto f(\mathbf{x}_0+t\mathbf{v})$, cioè di $f$ ristretta alla retta per $\mathbf{x}_0$ di direzione $\mathbf{v}$. Si usano anche i simboli $D_{\mathbf{v}}f(\mathbf{x}_0)$ e $\partial_{\mathbf{v}}f(\mathbf{x}_0)$. Per $\mathbf{v}=\mathbf{e}_i$ si ritrova la derivata parziale $\partial f/\partial x_i$.

La derivata dipende anche dalla lunghezza di $\mathbf{v}$: sostituendo $\mathbf{v}$ con $c\mathbf{v}$ ($c>0$) il risultato si moltiplica per $c$. Quando si vuole confrontare la crescita nelle varie direzioni si prende quindi $\|\mathbf{v}\|=1$.

**Esempio 2.3** (dalla definizione). Sia $f(x,y)=3x^2+5y$, $\mathbf{x}_0=(2,1)$ e $\mathbf{v}=(-1,3)$. Si calcola il punto $\mathbf{x}_0+t\mathbf{v}=(2-t,\,1+3t)$ e poi il rapporto incrementale:

$$
\begin{aligned}
f(2-t,1+3t) &= 3(2-t)^2+5(1+3t) = 12-12t+3t^2+5+15t = 17+3t+3t^2,\\
\frac{f(\mathbf{x}_0+t\mathbf{v})-f(\mathbf{x}_0)}{t} &= \frac{17+3t+3t^2-17}{t} = 3+3t \xrightarrow[t\to0]{} 3.
\end{aligned}
$$

Dunque $\dfrac{\partial f}{\partial \mathbf{v}}(2,1)=3$, dove si è usato $f(2,1)=12+5=17$.

### Formula del gradiente

Calcolare il limite a ogni direzione è laborioso. Il risultato seguente lo evita per le funzioni differenziabili, proprietà che si studia nella sezione [Differenziabilità e piano tangente](ref:chapter/2#p3). Per ora basta sapere che le funzioni con derivate parziali continue (ad esempio polinomi, esponenziali, logaritmi e le loro composizioni, dove definite) sono differenziabili.

**Teorema 2.1** (formula del gradiente). Se $f$ è differenziabile in $\mathbf{x}_0$ (punto interno al dominio), allora $f$ ammette in $\mathbf{x}_0$ derivata direzionale lungo ogni $\mathbf{v}\neq\mathbf{0}$ e

:::formula{id="2.4" label="Formula del gradiente"}
$$\frac{\partial f}{\partial \mathbf{v}}(\mathbf{x}_0)=\nabla f(\mathbf{x}_0)\cdot\mathbf{v}=\frac{\partial f}{\partial x_1}(\mathbf{x}_0)\,v_1+\dots+\frac{\partial f}{\partial x_n}(\mathbf{x}_0)\,v_n$$
:::

L'idea della dimostrazione è che la differenziabilità dà $f(\mathbf{x}_0+t\mathbf{v})=f(\mathbf{x}_0)+t\,\nabla f(\mathbf{x}_0)\cdot\mathbf{v}+o(t)$. Dividendo per $t$ e passando al limite si ottiene la tesi.

**Esempio 2.4** (verifica incrociata). Per $f(x,y)=3x^2+5y$ si ha $\nabla f=(6x,5)$, quindi $\nabla f(2,1)=(12,5)$. Allora

$$
\frac{\partial f}{\partial\mathbf{v}}(2,1)=(12,5)\cdot(-1,3)=-12+15=3,
$$

in accordo con il calcolo dalla definizione.

**Esempio 2.5** (direzione unitaria). Per $f=\sqrt{x^2+y^2}$ in $(2,-1)$ si prenda $\mathbf{v}=\frac{1}{\sqrt2}(1,1)$, che ha norma $1$. Dal gradiente già calcolato,

$$
\frac{\partial f}{\partial\mathbf{v}}(2,-1)=\frac{1}{\sqrt5}(2,-1)\cdot\frac{1}{\sqrt2}(1,1)=\frac{2-1}{\sqrt{10}}=\frac{1}{\sqrt{10}}.
$$

**Errore tipico 2.1.** Applicare $\nabla f\cdot\mathbf{v}$ senza controllare che $f$ sia differenziabile. L'esistenza delle derivate parziali non basta. Sia $f(x,y)=\dfrac{x^2y}{x^2+y^2}$ per $(x,y)\neq(0,0)$ e $f(0,0)=0$. Essa è nulla sugli assi, quindi $\nabla f(0,0)=(0,0)$ e la formula darebbe $\partial f/\partial\mathbf{v}(0,0)=0$ per ogni $\mathbf{v}$. Invece, per $\mathbf{v}=(v_1,v_2)$ con $\|\mathbf{v}\|=1$, si ha $f(t\mathbf{v})=t\,v_1^2v_2$, da cui $\partial f/\partial\mathbf{v}(0,0)=v_1^2v_2$. Per $\mathbf{v}=\frac{1}{\sqrt2}(1,1)$ vale $\frac{1}{2\sqrt2}\neq0$. In $(0,0)$ la funzione ha tutte le derivate direzionali, ma non è differenziabile e la formula del gradiente non vale.

In un punto dove la formula non è garantita, la derivata direzionale va calcolata dalla definizione, come nel primo esempio.

### Il gradiente come direzione di massima crescita

Si fissi $\mathbf{x}_0$ con $f$ differenziabile e si considerino i versori $\mathbf{v}$ ($\|\mathbf{v}\|=1$). Se $\theta$ è l'angolo tra $\nabla f(\mathbf{x}_0)$ e $\mathbf{v}$, la formula del gradiente dà

$$
\frac{\partial f}{\partial\mathbf{v}}(\mathbf{x}_0)=\nabla f(\mathbf{x}_0)\cdot\mathbf{v}=\|\nabla f(\mathbf{x}_0)\|\cos\theta .
$$

Per la disuguaglianza di Cauchy–Schwarz il valore sta in $\lbrack -\|\nabla f(\mathbf{x}_0)\|,\ \|\nabla f(\mathbf{x}_0)\|\rbrack $. Gli estremi si raggiungono per $\theta=0$ e $\theta=\pi$.

**Teorema 2.2** (direzione di massima crescita). Sia $f$ differenziabile in $\mathbf{x}_0$ con $\nabla f(\mathbf{x}_0)\neq\mathbf{0}$. Tra tutti i versori $\mathbf{v}$, la derivata direzionale è massima per $\mathbf{v}=\nabla f(\mathbf{x}_0)/\|\nabla f(\mathbf{x}_0)\|$ ed è minima per il versore opposto, e

:::formula{id="2.5" label="Massima e minima crescita"}
$$\max_{\|\mathbf{v}\|=1}\frac{\partial f}{\partial\mathbf{v}}(\mathbf{x}_0)=\|\nabla f(\mathbf{x}_0)\|,\qquad \min_{\|\mathbf{v}\|=1}\frac{\partial f}{\partial\mathbf{v}}(\mathbf{x}_0)=-\|\nabla f(\mathbf{x}_0)\|$$
:::

Dunque a partire da $\mathbf{x}_0$ la funzione cresce più rapidamente nella direzione del gradiente e decresce più rapidamente in quella opposta. Il modulo del gradiente è la rapidità massima di variazione. Se invece $\nabla f(\mathbf{x}_0)=\mathbf{0}$, tutte le derivate direzionali sono nulle e non c'è una direzione privilegiata.

**Esempio 2.6.** Sia $f(x,y)=x^2+y^2$ e $\mathbf{x}_0=(1,1)$. Si ha $\nabla f(x,y)=(2x,2y)$, quindi $\nabla f(1,1)=(2,2)$ e $\|\nabla f(1,1)\|=2\sqrt2$.

- La direzione di massima crescita è $\mathbf{v}=\frac{1}{\sqrt2}(1,1)$, con derivata $2\sqrt2$.
- La direzione di massima decrescita è $-\frac{1}{\sqrt2}(1,1)$, con derivata $-2\sqrt2$.
- Per $\mathbf{v}=\frac{1}{\sqrt2}(1,-1)$ la derivata è $\frac{1}{\sqrt2}(2-2)=0$: lungo questa direzione, perpendicolare al gradiente, $f$ non varia al primo ordine. Si noti che $(1,-1)$ è tangente alla circonferenza $x^2+y^2=2$ passante per $\mathbf{x}_0$.

:::image{src="assets/103f5607-gradiente-curve-di-livello.svg" alt="Curve di livello di x²+y² e gradiente nel punto (1,1)" caption="Fig. 2.1 — Curve di livello di f(x,y) = x² + y²: il gradiente in (1,1) punta verso l'esterno, nella direzione in cui i livelli crescono più in fretta."}
:::

**Errore tipico 2.2.** Calcolare la derivata direzionale con un vettore non unitario e interpretare il risultato come rapidità di crescita per unità di lunghezza. Con $\mathbf{v}=(1,1)$ nell'esempio precedente si ottiene $\nabla f\cdot\mathbf{v}=4$, ma questo valore è $\sqrt2$ volte quello relativo al versore $\frac{1}{\sqrt2}(1,1)$. Prima di confrontare le direzioni, o di usare il teorema sulla massima crescita, si divide $\mathbf{v}$ per $\|\mathbf{v}\|$.

## p3 | Differenziabilità e piano tangente

### Differenziabilità e differenziale

In una variabile, la derivabilità equivale all'approssimazione lineare locale. Per le funzioni di più variabili l'esistenza delle derivate parziali non basta a garantirla: occorre una condizione più forte, la differenziabilità.

**Definizione 2.4** (differenziabilità). Sia $f : \operatorname{dom} f \subseteq \mathbb{R}^n \to \mathbb{R}$ e sia $\mathbf{x}_0$ un punto interno al dominio in cui esiste $\nabla f(\mathbf{x}_0)$. Si dice che $f$ è **differenziabile** in $\mathbf{x}_0$ se

:::formula{id="2.6" label="Differenziabilità (resto di Peano)"}
$$f(\mathbf{x}) = f(\mathbf{x}_0) + \nabla f(\mathbf{x}_0)\cdot(\mathbf{x}-\mathbf{x}_0) + o(\|\mathbf{x}-\mathbf{x}_0\|), \qquad \mathbf{x}\to\mathbf{x}_0$$
:::

Ponendo $\Delta\mathbf{x} = \mathbf{x}-\mathbf{x}_0$ si ottiene la scrittura equivalente $\Delta f = \nabla f(\mathbf{x}_0)\cdot\Delta\mathbf{x} + o(\|\Delta\mathbf{x}\|)$ per $\Delta\mathbf{x}\to\mathbf{0}$. L'incremento di $f$ è dunque, a meno di un infinitesimo di ordine superiore al primo, una funzione lineare dell'incremento delle variabili.

**Definizione 2.5** (differenziale). L'applicazione lineare $df_{\mathbf{x}_0} : \mathbb{R}^n \to \mathbb{R}$, $df_{\mathbf{x}_0}(\Delta\mathbf{x}) = \nabla f(\mathbf{x}_0)\cdot\Delta\mathbf{x}$, si dice **differenziale** di $f$ in $\mathbf{x}_0$.

**Esempio 2.7.** Sia $f(x,y)=\sqrt{1+x+y}$ e $\mathbf{x}_0=(1,2)$. Allora $\nabla f(\mathbf{x}_0)=\left(\tfrac14,\tfrac14\right)$ e $df_{\mathbf{x}_0}(\Delta x,\Delta y)=\tfrac14\Delta x+\tfrac14\Delta y$. Per $(\Delta x,\Delta y)=\left(\tfrac1{100},\tfrac1{20}\right)$ si ha $\Delta f = 0{,}014944\ldots$ mentre $df_{\mathbf{x}_0}=0{,}015$.

**Proposizione 2.1.** Se $f$ è differenziabile in $\mathbf{x}_0$, allora è continua in $\mathbf{x}_0$. Infatti, dalla relazione di differenziabilità, il limite di $f(\mathbf{x})$ per $\mathbf{x}\to\mathbf{x}_0$ è $f(\mathbf{x}_0)$.

Questa proposizione fornisce un criterio negativo molto efficace: se $f$ non è continua in $\mathbf{x}_0$, non è differenziabile.

### Verifica con la definizione

Per controllare la differenziabilità in $\mathbf{x}_0$ con la definizione si procede in tre passi:

1. si calcolano le derivate parziali in $\mathbf{x}_0$ (spesso dalla definizione di limite del rapporto incrementale, se il punto è singolare) e si forma $\nabla f(\mathbf{x}_0)$;
2. si scrive il limite
$\displaystyle \lim_{\mathbf{x}\to\mathbf{x}_0}\frac{f(\mathbf{x})-f(\mathbf{x}_0)-\nabla f(\mathbf{x}_0)\cdot(\mathbf{x}-\mathbf{x}_0)}{\|\mathbf{x}-\mathbf{x}_0\|};$
3. si mostra che vale $0$ (differenziabile) oppure che è diverso da $0$ o non esiste (non differenziabile).

**Esempio svolto 2.8.** Studiare la differenziabilità in $(0,0)$ di $f(x,y)=|y|\log(1+x)$.

Si ha $f(0,0)=0$. Sugli assi la funzione è identicamente nulla: $f(x,0)=0$ e $f(0,y)=0$. Quindi $f_x(0,0)=f_y(0,0)=0$ e $\nabla f(0,0)=(0,0)$. Il limite da studiare è

$$L=\lim_{(x,y)\to(0,0)}\frac{|y|\log(1+x)}{\sqrt{x^2+y^2}}.$$

Poiché $|y|\le\sqrt{x^2+y^2}$, si ha

$$
0\le\frac{|y|\,|\log(1+x)|}{\sqrt{x^2+y^2}}\le|\log(1+x)|\to0.
$$

Per il teorema del confronto $L=0$, dunque $f$ è differenziabile in $(0,0)$ con $df_{(0,0)}=0$. Lo stesso risultato si ottiene in coordinate polari, maggiorando con una funzione di $r$ che tende a $0$.

**Errore tipico 2.3.** Dopo aver calcolato $f_x(0,0)$ e $f_y(0,0)$ ci si ferma, concludendo che «esistono le derivate parziali, quindi $f$ è differenziabile». Il calcolo delle derivate parziali è solo il passo 1: va sempre verificato il limite del passo 3.

### Teorema del differenziale totale

Il limite della definizione è spesso scomodo. Nei punti «regolari» si usa questo criterio sufficiente.

**Teorema 2.3** (del differenziale totale). Se $f$ ammette derivate parziali in un intorno di $\mathbf{x}_0$ e queste sono continue in $\mathbf{x}_0$, allora $f$ è differenziabile in $\mathbf{x}_0$.

In particolare, una funzione di classe $C^1(\Omega)$ è differenziabile in ogni punto di $\Omega$. Il teorema non si inverte: una funzione può essere differenziabile senza avere derivate parziali continue.

Il metodo pratico è il seguente. Si individuano i punti in cui le derivate parziali, calcolate con le regole di derivazione, sono continue, e lì si conclude per il teorema. Nei punti rimasti (per esempio dove compaiono moduli o radici, oppure dove la funzione è definita a tratti) si usa la definizione. Così, per $f(x,y)=|x|\sin(x^2+y^2)$ la differenziabilità nei punti con $x\neq0$ segue dal teorema, mentre i punti dell'asse $y$ vanno studiati a parte.

**Errore tipico 2.4.** Dire che $f$ non è differenziabile perché le derivate parziali «non sono continue». Il teorema fornisce solo una condizione sufficiente: se le derivate parziali sono discontinue il teorema non si applica, ma la funzione potrebbe comunque essere differenziabile e va usata la definizione.

### Piano tangente al grafico

Se $f(x,y)$ è differenziabile in $(x_0,y_0)$, la funzione affine $z = f(x_0,y_0)+df_{(x_0,y_0)}(x-x_0,y-y_0)$ approssima $f$ vicino a $(x_0,y_0)$. Il suo grafico è il **piano tangente** al grafico di $f$ nel punto $\left(x_0,y_0,f(x_0,y_0)\right)$:

:::formula{id="2.7" label="Piano tangente al grafico"}
$$z = f(x_0,y_0) + f_x(x_0,y_0)\,(x-x_0) + f_y(x_0,y_0)\,(y-y_0)$$
:::

Scritta come $f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)-(z-f(x_0,y_0))=0$, l'equazione mostra che il vettore $\left(f_x(x_0,y_0),\,f_y(x_0,y_0),\,-1\right)$ è normale al piano.

**Esempio svolto 2.9.** Piano tangente al grafico di $f(x,y)=\sqrt{1+x+y}$ nel punto sopra $(1,2)$.

- Si ha $f(1,2)=\sqrt4=2$.
- Le derivate parziali sono $f_x=f_y=\dfrac{1}{2\sqrt{1+x+y}}$, quindi $f_x(1,2)=f_y(1,2)=\dfrac14$.
- Le derivate parziali sono continue in un intorno di $(1,2)$, perciò $f$ è differenziabile e il piano tangente esiste.

Sostituendo nella formula si ottiene

$$
z = 2+\frac14(x-1)+\frac14(y-2)=\frac{x+y}{4}+\frac54.
$$

Il vettore normale è $\left(\tfrac14,\tfrac14,-1\right)$.

**Errore tipico 2.5.** Si scrive il piano omettendo il termine $f(x_0,y_0)$, o si dimentica di sottrarre $x_0,y_0$ (ottenendo $z=f_x x+f_y y$). Verifica sempre che il piano passi per il punto: sostituendo $(x_0,y_0)$ deve risultare $z=f(x_0,y_0)$.

### Formula del gradiente e controesempi

**Teorema 2.4.** Se $f$ è differenziabile in $\mathbf{x}_0$, esiste la derivata direzionale lungo ogni $\mathbf{v}\neq\mathbf{0}$ e vale la {{formula:2.4}}:

$$
\frac{\partial f}{\partial \mathbf{v}}(\mathbf{x}_0)=\nabla f(\mathbf{x}_0)\cdot\mathbf{v}=\frac{\partial f}{\partial x_1}(\mathbf{x}_0)v_1+\cdots+\frac{\partial f}{\partial x_n}(\mathbf{x}_0)v_n.
$$

L'idea della dimostrazione: si pone $\mathbf{x}=\mathbf{x}_0+t\mathbf{v}$ nella relazione di differenziabilità. Poiché $\|t\mathbf{v}\|=|t|\,\|\mathbf{v}\|$, il resto è $o(t)$, e dividendo per $t$ e passando al limite resta $\nabla f(\mathbf{x}_0)\cdot\mathbf{v}$.

Nell'esempio precedente, con $\mathbf{v}=(3,4)$ (non unitario, come consente la definizione di derivata direzionale), si ha $\dfrac{\partial f}{\partial \mathbf{v}}(1,2)=\dfrac14\cdot3+\dfrac14\cdot4=\dfrac74$.

La formula richiede la **differenziabilità**: l'ipotesi non può essere sostituita dalla sola esistenza delle derivate parziali. Il controesempio standard è

$$
f(x,y)=\frac{x^2y}{x^2+y^2},\quad f(0,0)=0.
$$

La funzione è nulla sugli assi, quindi $\nabla f(0,0)=(0,0)$ e la formula darebbe $\frac{\partial f}{\partial\mathbf{v}}(0,0)=0$ per ogni $\mathbf{v}$. Per $\mathbf{v}=(v_1,v_2)$ unitario si ha però $f(t\mathbf{v})=t\,v_1^2v_2$, da cui $\frac{\partial f}{\partial\mathbf{v}}(0,0)=v_1^2v_2$, che per $\mathbf{v}=\tfrac1{\sqrt2}(1,1)$ vale $\tfrac1{2\sqrt2}\ne0$. La formula del gradiente fallisce, quindi $f$ non è differenziabile in $(0,0)$.

Un altro caso è $f(x,y)=\dfrac{xy}{x^2+y^2}$, con $f(0,0)=0$. Le derivate parziali in $(0,0)$ esistono e sono nulle, ma $f(x,x)=\tfrac12$ per $x\neq0$ mentre $f(x,0)=0$: il limite in $(0,0)$ non esiste, $f$ non è continua e quindi non è differenziabile.

**Errore tipico 2.6.** Usare $\nabla f\cdot\mathbf{v}$ per calcolare una derivata direzionale in un punto in cui non si è verificata la differenziabilità. Nei punti sospetti la derivata direzionale va calcolata dalla definizione, come limite di $\frac{f(\mathbf{x}_0+t\mathbf{v})-f(\mathbf{x}_0)}{t}$. Si veda anche [Derivate parziali, direzionali e gradiente](ref:chapter/2#p2).

## p4 | Derivate seconde e matrice hessiana

Si ha $f_x=\frac{\partial f}{\partial x}$, $f_y=\frac{\partial f}{\partial y}$. Le derivate prime $f_{x_i}$ di una funzione scalare $f$ sono a loro volta funzioni, che si possono derivare ancora. Le derivate seconde descrivono la curvatura di $f$ e organizzano le informazioni di secondo ordine in una matrice, la hessiana. Questa interviene nella [formula di Taylor](ref:chapter/2#p5) e nella [classificazione dei punti critici](ref:chapter/2#p6).

### Derivate parziali seconde

Sia $f : \operatorname{dom} f \subseteq \mathbb{R}^n \to \mathbb{R}$ derivabile rispetto a $x_i$ in un intorno di $\mathbf{x}_0$. Se la funzione $\frac{\partial f}{\partial x_i}$ è derivabile in $\mathbf{x}_0$ rispetto a $x_j$, si dice che $f$ ammette in $\mathbf{x}_0$ **derivata parziale seconda** rispetto a $x_i$ e $x_j$, e si pone

:::formula{id="2.8" label="Derivata parziale seconda"}
$$\frac{\partial^2 f}{\partial x_j\,\partial x_i}(\mathbf{x}_0)=\frac{\partial}{\partial x_j}\left(\frac{\partial f}{\partial x_i}\right)(\mathbf{x}_0)$$
:::

Nella scrittura a denominatore si legge da destra a sinistra: si deriva prima rispetto a $x_i$ e poi rispetto a $x_j$. La derivata è detta **mista** se $j\neq i$ e **pura** se $j=i$. Nel caso puro si scrive $\frac{\partial^2 f}{\partial x_i^2}$.

Altre notazioni per la stessa derivata sono $\partial_{x_j}\partial_{x_i}f(\mathbf{x}_0)$, $\mathrm{D}^2_{ji}f(\mathbf{x}_0)$, $f_{x_ix_j}(\mathbf{x}_0)$ e $f_{ij}(\mathbf{x}_0)$.

Nella forma compatta usata in questo libro, $f_{xy}=\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)$: si deriva prima rispetto alla prima lettera. Alcuni testi usano la lettura opposta, ma quando le derivate miste sono continue la differenza è irrilevante, come mostra il teorema di Schwarz più avanti.

### Le derivate miste possono non coincidere

Se $f$ ammette in $\mathbf{x}_0$ entrambe le derivate miste $\frac{\partial^2 f}{\partial x_j\partial x_i}(\mathbf{x}_0)$ e $\frac{\partial^2 f}{\partial x_i\partial x_j}(\mathbf{x}_0)$, non è detto che siano uguali. Un esempio è

$$
f(x,y)=\begin{cases} xy\,\dfrac{x^2-y^2}{x^2+y^2} & (x,y)\neq(0,0),\\[2mm] 0 & (x,y)=(0,0),\end{cases}
$$

per cui $\frac{\partial^2 f}{\partial y\partial x}(0,0)=-1$ mentre $\frac{\partial^2 f}{\partial x\partial y}(0,0)=1$.

**Esempio 2.10** (verifica dalla definizione). Poiché $f$ è definita a tratti, le derivate nell'origine si calcolano con il limite del rapporto incrementale, senza derivare la formula valida fuori dall'origine.

1. Per $y\neq 0$ fissato, $f_x(0,y)=\lim_{h\to0}\frac{f(h,y)-f(0,y)}{h}=\lim_{h\to0}y\,\frac{h^2-y^2}{h^2+y^2}=-y$. Anche per $y=0$ si ha $f_x(0,0)=0=-0$. Dunque $f_x(0,y)=-y$ per ogni $y$.
2. Allora $\frac{\partial^2 f}{\partial y\,\partial x}(0,0)=\frac{\partial}{\partial y}f_x(0,0)=\lim_{t\to0}\frac{f_x(0,t)-f_x(0,0)}{t}=\lim_{t\to0}\frac{-t}{t}=-1$.
3. In modo analogo $f_y(x,0)=\lim_{k\to0}x\,\frac{x^2-k^2}{x^2+k^2}=x$, da cui $\frac{\partial^2 f}{\partial x\,\partial y}(0,0)=\lim_{t\to0}\frac{t}{t}=1$.

Le due derivate miste sono diverse. Questo non contraddice il teorema seguente: le derivate miste di questa $f$ non sono continue in $(0,0)$, perché i limiti di $f_{xy}$ e $f_{yx}$ per $(x,y)\to(0,0)$ non esistono (lo si vede con le coordinate polari).

### Il teorema di Schwarz

:::formula{id="2.9" label="Uguaglianza delle derivate miste (Schwarz)"}
$$\frac{\partial^2 f}{\partial x_j\,\partial x_i}(\mathbf{x}_0)=\frac{\partial^2 f}{\partial x_i\,\partial x_j}(\mathbf{x}_0)$$
:::

**Teorema 2.5** (di Schwarz). Se le due derivate miste $\frac{\partial^2 f}{\partial x_j\partial x_i}$ e $\frac{\partial^2 f}{\partial x_i\partial x_j}$, con $j\neq i$, esistono in un intorno di $\mathbf{x}_0$ e sono continue in $\mathbf{x}_0$, allora in $\mathbf{x}_0$ coincidono, cioè vale la {{formula:2.9}}.

Le ipotesi sono due: esistenza delle derivate miste in un intero intorno e continuità in $\mathbf{x}_0$. In pratica le funzioni elementari, ottenute con somme, prodotti, composizioni di polinomi, esponenziali, logaritmi e funzioni trigonometriche, hanno derivate seconde continue sul loro dominio aperto. Lì il teorema si applica senza altre verifiche. Va invece controllato con cura nei punti dove $f$ è definita a tratti, come nell'esempio precedente.

### Derivate di ordine superiore e classi $C^k$

Allo stesso modo si definiscono le derivate terze come derivate parziali prime delle derivate seconde, e in generale le derivate di ordine $k$. Con $f_{xxy}$ si indica la derivata terza di una $f(x,y)$ fatta due volte rispetto a $x$ e una volta rispetto a $y$.

Una funzione $f$ è di **classe $C^k$** ($k\ge1$) in un aperto $\Omega\subseteq\operatorname{dom} f$ se tutte le sue derivate parziali di ogni ordine $\le k$ esistono e sono continue in ogni punto di $\Omega$. Si scrive $f\in C^k(\Omega)$. Con $C^0(\Omega)$ si indicano le funzioni continue, con $C^\infty(\Omega)$ quelle che stanno in $C^k(\Omega)$ per ogni $k$. Valgono le inclusioni $C^\infty(\Omega)\subseteq\cdots\subseteq C^k(\Omega)\subseteq C^{k-1}(\Omega)\subseteq\cdots\subseteq C^0(\Omega)$.

Una funzione di classe $C^1(\Omega)$ è differenziabile in ogni punto di $\Omega$ (si veda [Differenziabilità e piano tangente](ref:chapter/2#p3)).

Se $f\in C^k$, a tutte le derivate miste fino all'ordine $k$ si applica il teorema di Schwarz. Si può allora scrivere $\frac{\partial^k f}{\partial x_1^{\alpha_1}\cdots\partial x_n^{\alpha_n}}$, con $\alpha_1+\cdots+\alpha_n=k$, senza specificare l'ordine in cui si deriva.

**Esempio 2.11.** Sia $f(x,y)=x^2y^3$, di classe $C^\infty$ su $\mathbb{R}^2$. Si ha $f_x=2xy^3$, $f_{xx}=2y^3$ e $f_{xxy}=6y^2$. Derivando nell'ordine $y,x,x$ si ottiene: $f_y=3x^2y^2$, $\partial_x f_y=6xy^2$, $\partial_x\partial_x f_y=6y^2$. Il risultato è lo stesso, come garantito da Schwarz.

### Matrice hessiana

**Definizione 2.6.** Se $f$ possiede in $\mathbf{x}_0$ tutte le derivate parziali seconde, la matrice

:::formula{id="2.10" label="Matrice hessiana"}
$$
Hf(\mathbf{x}_0)=\begin{pmatrix}
\dfrac{\partial^2 f}{\partial x_1^2}(\mathbf{x}_0) & \dfrac{\partial^2 f}{\partial x_2\partial x_1}(\mathbf{x}_0) & \cdots & \dfrac{\partial^2 f}{\partial x_n\partial x_1}(\mathbf{x}_0)\\[3mm]
\dfrac{\partial^2 f}{\partial x_1\partial x_2}(\mathbf{x}_0) & \dfrac{\partial^2 f}{\partial x_2^2}(\mathbf{x}_0) & \cdots & \dfrac{\partial^2 f}{\partial x_n\partial x_2}(\mathbf{x}_0)\\
\vdots & \vdots & \ddots & \vdots\\
\dfrac{\partial^2 f}{\partial x_1\partial x_n}(\mathbf{x}_0) & \dfrac{\partial^2 f}{\partial x_2\partial x_n}(\mathbf{x}_0) & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}(\mathbf{x}_0)
\end{pmatrix}
$$
:::

è detta **matrice hessiana** di $f$ in $\mathbf{x}_0$. Il suo elemento di posto $(i,j)$ è $h_{ij}=\frac{\partial^2 f}{\partial x_j\partial x_i}(\mathbf{x}_0)$. Si trova talvolta la notazione $H_f(\mathbf{x}_0)$.

Leggendo la matrice per righe, la riga $i$ contiene le derivate rispetto a $x_1,\dots,x_n$ della componente $f_{x_i}$ del gradiente. Se $f$ ha derivate seconde miste continue in $\mathbf{x}_0$, per Schwarz $Hf(\mathbf{x}_0)$ è **simmetrica**, e quindi l'ordine di derivazione nelle derivate miste è ininfluente.

Per $n=2$, con $f_{xy}=f_{yx}$, la matrice è

$$
Hf(x,y)=\begin{pmatrix} f_{xx} & f_{xy}\\ f_{xy} & f_{yy}\end{pmatrix}.
$$

### Esempi svolti

**Esempio 2.12** (hessiana di una funzione trigonometrica). Sia $f(x,y)=x\sin(x+2y)$.

1. Derivate prime, con la regola del prodotto: $f_x=\sin(x+2y)+x\cos(x+2y)$ e $f_y=2x\cos(x+2y)$.
2. Derivate pure: $f_{xx}=\cos(x+2y)+\cos(x+2y)-x\sin(x+2y)=2\cos(x+2y)-x\sin(x+2y)$ e $f_{yy}=-4x\sin(x+2y)$.
3. Derivata mista: derivando $f_x$ rispetto a $y$ si ha $2\cos(x+2y)-2x\sin(x+2y)$. Derivando $f_y$ rispetto a $x$ si ottiene $2\cos(x+2y)-2x\sin(x+2y)$. Le due espressioni coincidono, come atteso perché $f\in C^\infty(\mathbb{R}^2)$.
4. Nell'origine: $f_{xx}(0,0)=2$, $f_{xy}(0,0)=2$, $f_{yy}(0,0)=0$, quindi
$\displaystyle Hf(\mathbf{0})=\begin{pmatrix}2&2\\2&0\end{pmatrix}.$

**Esempio 2.13** (forma quadratica). Siano $\mathbf{A}\in\mathbb{R}^{n\times n}$ simmetrica, $\mathbf{b}\in\mathbb{R}^n$, $c\in\mathbb{R}$ e $f(\mathbf{x})=\mathbf{x}^T\mathbf{A}\mathbf{x}+\mathbf{b}^T\mathbf{x}+c$, con $\mathbf{x}$ vettore colonna. Derivando si trova $\nabla f(\mathbf{x})=2\mathbf{A}\mathbf{x}+\mathbf{b}$ e $Hf(\mathbf{x})=2\mathbf{A}$, indipendente da $\mathbf{x}$.

Per esempio $f(x,y)=x^2+3xy+2y^2$ si scrive con $\mathbf{A}=\begin{pmatrix}1&3/2\\3/2&2\end{pmatrix}$, $\mathbf{b}=\mathbf{0}$, $c=0$. Allora $Hf=\begin{pmatrix}2&3\\3&4\end{pmatrix}$, e infatti $f_{xx}=2$, $f_{xy}=3$, $f_{yy}=4$.

**Esempio 2.14** (energia cinetica). Per $K(m,v)=\frac12 mv^2$ si ha $\nabla K=\left(\frac{v^2}{2},\,mv\right)$ e

$$
HK(m,v)=\begin{pmatrix}0&v\\v&m\end{pmatrix}.
$$

Vale inoltre l'identità $\frac{\partial K}{\partial m}\,\frac{\partial^2 K}{\partial v^2}=K$.

### Errori tipici

**Errore tipico 2.7.** Scrivere $f_{xy}=f_{yx}$ senza controllare le ipotesi di Schwarz. Per funzioni date da un'unica espressione elementare l'uguaglianza è sicura. Per funzioni definite a tratti, come $xy\frac{x^2-y^2}{x^2+y^2}$ completata con $0$ nell'origine, le derivate miste nel punto di raccordo vanno calcolate dalla definizione e possono essere diverse (valgono $-1$ e $1$). In tal caso la hessiana in quel punto non è simmetrica.

**Errore tipico 2.8.** Calcolare le derivate seconde nel punto di raccordo derivando la formula valida fuori dal punto, e poi sostituendo $(0,0)$. Quella formula non è definita nell'origine. Nell'origine si usa il limite del rapporto incrementale, come nell'esempio di verifica sopra.

**Errore tipico 2.9.** Dimenticare di sostituire il punto: la hessiana in $\mathbf{x}_0$ è una matrice numerica. Se si lascia dipendente da $(x,y)$ è la funzione hessiana, e non risponde alla richiesta «scrivere $Hf(\mathbf{x}_0)$».

**Errore tipico 2.10.** Confondere le derivate pure con le miste, per esempio calcolando $f_{xx}$ di $x\sin(x+2y)$ senza il secondo contributo della regola del prodotto. Conviene derivare sempre in due passaggi, scrivendo la derivata prima per intero prima di derivarla ancora.

### Uso della hessiana

La hessiana raccoglie l'informazione di secondo ordine di $f$ in $\mathbf{x}_0$. La si ritrova nel polinomio di Taylor del secondo ordine ([Formula di Taylor](ref:chapter/2#p5)) e nello studio degli estremi liberi ([Estremi liberi e punti critici](ref:chapter/2#p6)), dove il suo carattere si legge dagli autovalori.

## p5 | Formula di Taylor

### Motivazione: dalla linearizzazione al secondo ordine

Se $f$ è differenziabile in $\mathbf{x}_0$, vicino a $\mathbf{x}_0$ la funzione si approssima con il suo piano tangente: $f(\mathbf{x})\approx f(\mathbf{x}_0)+\nabla f(\mathbf{x}_0)\cdot(\mathbf{x}-\mathbf{x}_0)$. Questo processo si chiama **linearizzazione** di $f$ in $\mathbf{x}_0$ (si veda [Differenziabilità e piano tangente](ref:chapter/2#p3)).

Quando il gradiente si annulla, o si vuole un'approssimazione più accurata, si aggiunge un termine quadratico. Esso usa le derivate seconde, cioè la matrice hessiana introdotta in [Derivate seconde e matrice hessiana](ref:chapter/2#p4).

### Sviluppo di Taylor del secondo ordine

**Teorema 2.6** (sviluppo di Taylor del secondo ordine con resto di Peano). Sia $f$ una funzione di classe $C^2$ in un intorno di $\mathbf{x}_0$. Allora per $\mathbf{x}\to\mathbf{x}_0$ vale

:::formula{id="2.11" label="Sviluppo di Taylor del secondo ordine con resto di Peano"}
$$f(\mathbf{x}) = f(\mathbf{x}_0) + \nabla f(\mathbf{x}_0)\cdot(\mathbf{x}-\mathbf{x}_0) + \frac{1}{2}(\mathbf{x}-\mathbf{x}_0)\cdot Hf(\mathbf{x}_0)(\mathbf{x}-\mathbf{x}_0) + o(\|\mathbf{x}-\mathbf{x}_0\|^2)$$
:::

L’ipotesi $C^2$ è sufficiente per garantire lo sviluppo e, per il teorema di Schwarz, la simmetria della matrice hessiana. Qui il prodotto scalare e la norma sono quelli euclidei [(1.1)](ref:formula/1.1).

**Definizione 2.7** (polinomio di Taylor di ordine 2). Il polinomio

:::formula{id="2.12" label="Polinomio di Taylor di ordine 2"}
$$Tf_{2,\mathbf{x}_0}(\mathbf{x}) = f(\mathbf{x}_0) + \nabla f(\mathbf{x}_0)\cdot(\mathbf{x}-\mathbf{x}_0) + \frac{1}{2}(\mathbf{x}-\mathbf{x}_0)\cdot Hf(\mathbf{x}_0)(\mathbf{x}-\mathbf{x}_0)$$
:::

è un polinomio di grado al più $2$ nelle variabili $x_i$ ed è la migliore approssimazione quadratica di $f$ vicino a $\mathbf{x}_0$. In dimensione $2$, il suo grafico è una superficie quadratica, eventualmente degenere; se la hessiana è non singolare, è un paraboloide, detto osculatore.

Lo sviluppo dice che l'errore $f(\mathbf{x})-Tf_{2,\mathbf{x}_0}(\mathbf{x})$ è infinitesimo di ordine superiore a $\|\mathbf{x}-\mathbf{x}_0\|^2$. Il resto di Peano è dunque un fatto locale: non fornisce una stima numerica dell'errore a distanza finita da $\mathbf{x}_0$.

### Forma esplicita in due variabili

Per $f(x,y)$ di classe $C^2$ vicino a $(x_0,y_0)$, con tutte le derivate calcolate in $(x_0,y_0)$, la formula {{formula:2.11}} diventa

:::formula{id="2.13" label="Sviluppo di Taylor del secondo ordine in due variabili"}
$$\begin{aligned}
f(x,y) ={}& f(x_0,y_0) + f_x\,(x-x_0) + f_y\,(y-y_0)\\
&+ \frac{1}{2}f_{xx}\,(x-x_0)^2 + f_{xy}\,(x-x_0)(y-y_0) + \frac{1}{2}f_{yy}\,(y-y_0)^2\\
&+ o\big((x-x_0)^2+(y-y_0)^2\big), \qquad (x,y)\to(x_0,y_0)
\end{aligned}$$
:::

Il termine misto compare con coefficiente $f_{xy}$, non $\tfrac12 f_{xy}$. Nel prodotto $\tfrac12(\mathbf{x}-\mathbf{x}_0)\cdot Hf\,(\mathbf{x}-\mathbf{x}_0)$ si hanno infatti i due addendi $\tfrac12 f_{xy}$ e $\tfrac12 f_{yx}$, uguali per Schwarz, che sommati danno $f_{xy}$.

### Metodo di calcolo

Per scrivere $Tf_{2,\mathbf{x}_0}$ si procede così.

1. Si calcolano $f(\mathbf{x}_0)$ e $\nabla f(\mathbf{x}_0)$.
2. Si calcolano tutte le derivate seconde e si valutano in $\mathbf{x}_0$, ottenendo $Hf(\mathbf{x}_0)$.
3. Si sostituisce nella formula {{formula:2.12}} e si sviluppa il prodotto quadratico.

**Esempio 2.15.** Si calcoli il polinomio di Taylor di ordine 2 di $f(x,y,z)=e^{x+2y-3z}$ nell'origine. Si ha $f(\mathbf{0})=1$ e $\nabla f(\mathbf{0})=(1,2,-3)$. Ogni derivata seconda $f_{x_ix_j}$ è il prodotto dei coefficienti dell'esponente per $e^{x+2y-3z}$, quindi

$$Hf(\mathbf{0})=\begin{pmatrix} 1 & 2 & -3\\ 2 & 4 & -6\\ -3 & -6 & 9\end{pmatrix}.$$

Il termine quadratico $\tfrac12(x,y,z)\cdot Hf(\mathbf{0})(x,y,z)$ vale $\tfrac12\,(x^2+4y^2+9z^2+4xy-6xz-12yz)$. Dunque

$$Tf_{2,\mathbf{0}}(x,y,z) = 1 + x + 2y - 3z + \frac{1}{2}\left(x^2 + 4y^2 + 9z^2 + 4xy - 6xz - 12yz\right).$$

### Uso per approssimare

**Esempio 2.16.** Si approssimi $e^{0.1}\cos 0.2$ usando $f(x,y)=e^{x}\cos y$ vicino a $(0,0)$.

Passo 1: $f(0,0)=1$.

Passo 2: $f_x=e^x\cos y$ e $f_y=-e^x\sin y$, quindi $f_x(0,0)=1$ e $f_y(0,0)=0$.

Passo 3: $f_{xx}=e^x\cos y$, $f_{yy}=-e^x\cos y$ e $f_{xy}=-e^x\sin y$. In $(0,0)$ valgono $f_{xx}=1$, $f_{yy}=-1$ e $f_{xy}=0$.

Passo 4: per la formula {{formula:2.13}}

$$Tf_{2,(0,0)}(x,y)=1+x+\frac{1}{2}x^2-\frac{1}{2}y^2.$$

Come verifica, si moltiplicano gli sviluppi $e^x=1+x+\tfrac12x^2+o(x^2)$ e $\cos y=1-\tfrac12y^2+o(y^2)$ e si trattengono i termini fino al grado $2$. Si ritrova lo stesso polinomio, grazie all'unicità del polinomio di Taylor.

Passo 5: in $(0.1,\,0.2)$ si ottiene $T=1+0.1+\tfrac12(0.01-0.04)=1.085$. Il valore esatto è circa $1.0831$, quindi l'errore è dell'ordine di $2\cdot10^{-3}$. La linearizzazione $1+x$ darebbe $1.1$, con errore circa nove volte maggiore.

Per un'altra funzione, $f(x,y)=\cos x\cos y$, il polinomio di ordine 2 nell'origine è $1-\tfrac12x^2-\tfrac12y^2$. La figura confronta, lungo $y=0$, la funzione $\cos x$ con la sua linearizzazione (costante, perché il gradiente è nullo) e con l'approssimazione quadratica.

:::image{src="assets/9228aec0-taylor-coseno-parabola.svg" alt="Grafico di cos(x), della parabola 1 - x²/2 e della retta y = 1" caption="Fig. 2.2 — Restrizione di cos x cos y all'asse y = 0: la parabola 1 - x²/2 aderisce a cos x vicino all'origine molto meglio della retta y = 1."}
:::

Quando $Hf(\mathbf{x}_0)$ è definita positiva in un punto di minimo, il grafico di $f$ è ben approssimato dal paraboloide ellittico $g(\mathbf{x})=f(\mathbf{x}_0)+Q(\mathbf{x}-\mathbf{x}_0)$, dove $Q$ è la forma quadratica associata. Questa osservazione è alla base della classificazione dei punti critici, che si studia in [Estremi liberi e punti critici](ref:chapter/2#p6).

**Errore tipico 2.11.** Gli errori più frequenti nel calcolo del polinomio sono tre.

- Si dimentica il fattore $\tfrac12$ davanti al termine quadratico, oppure lo si mette anche sul termine misto, scrivendo $\tfrac12 f_{xy}(x-x_0)(y-y_0)$ invece di $f_{xy}(x-x_0)(y-y_0)$.
- Si scrivono le potenze di $x$ e $y$ invece di quelle di $x-x_0$ e $y-y_0$ quando $\mathbf{x}_0\neq\mathbf{0}$. Per esempio, in $(1,1,1)$ compaiono $(x-1)$, $(y-1)$, $(z-1)$.
- Si pensa che bastino le derivate parziali prime. L'esistenza del gradiente in $\mathbf{x}_0$ non assicura né la formula $f(\mathbf{x})=f(\mathbf{x}_0)+\nabla f(\mathbf{x}_0)\cdot(\mathbf{x}-\mathbf{x}_0)+o(\|\mathbf{x}-\mathbf{x}_0\|)$ né l'esistenza del piano tangente: occorre la differenziabilità. La regolarità $C^2$ è un'ipotesi sufficiente per lo sviluppo di Taylor del secondo ordine con resto di Peano.

## p6 | Estremi liberi e punti critici

### Condizioni necessarie e punti critici

Cerchiamo i valori estremi di una funzione scalare $f : \operatorname{dom} f \subseteq \mathbb{R}^n \to \mathbb{R}$, cioè i punti in cui $f$ è più grande o più piccola che nei punti vicini, oppure in tutto il dominio.

**Definizione 2.8** (estremi relativi e assoluti). Sia $\boldsymbol{x}_0 \in \operatorname{dom} f$. Il punto $\boldsymbol{x}_0$ è di **massimo relativo** (o locale) per $f$ se esiste una palla $B_r(\boldsymbol{x}_0)$ tale che $f(\boldsymbol{x}) \le f(\boldsymbol{x}_0)$ per ogni $\boldsymbol{x} \in B_r(\boldsymbol{x}_0) \cap \operatorname{dom} f$. È di **massimo assoluto** (o globale) se $f(\boldsymbol{x}) \le f(\boldsymbol{x}_0)$ per ogni $\boldsymbol{x} \in \operatorname{dom} f$. Il massimo è **stretto** se $f(\boldsymbol{x}) < f(\boldsymbol{x}_0)$ per $\boldsymbol{x} \ne \boldsymbol{x}_0$. Minimo relativo e assoluto si ottengono invertendo le disuguaglianze. Un punto di massimo o di minimo si dice genericamente **punto di estremo**.

**Definizione 2.9** (punto critico). Un punto $\boldsymbol{x}_0$ in cui $f$ è differenziabile si dice **critico** o **stazionario** se $\nabla f(\boldsymbol{x}_0) = \boldsymbol{0}$; se $\nabla f(\boldsymbol{x}_0) \ne \boldsymbol{0}$ il punto si dice **regolare**. In un punto stazionario si annullano tutte le derivate direzionali. Per $n = 2$ il piano tangente al grafico è orizzontale (si veda [Differenziabilità e piano tangente](ref:chapter/2#p3)).

**Teorema 2.7** (di Fermat). Se $\boldsymbol{x}_0$ è un punto di estremo per $f$ e $f$ è differenziabile in $\boldsymbol{x}_0$, allora $\boldsymbol{x}_0$ è un punto stazionario per $f$.

L'idea è ridurre il problema a una variabile. Ogni funzione $x \mapsto f(x_{01},\dots,x,\dots,x_{0n})$, ottenuta variando una sola coordinata, ha un estremo in $x_{0i}$, quindi la sua derivata, cioè $\partial f/\partial x_i(\boldsymbol{x}_0)$, è nulla.

Il teorema dà una condizione solo necessaria, e ci sono tre cautele.

- Un punto di estremo può non essere di differenziabilità. La funzione $\|\boldsymbol{x}\|$ ha il minimo assoluto nell'origine, dove non ammette derivate parziali.
- Per funzioni differenziabili in tutto il loro dominio (aperto) gli estremi vanno cercati tra i punti stazionari.
- Non tutti i punti stazionari sono estremi. La funzione $f(x,y) = x^3y^3$ ha un punto stazionario nell'origine, ma si annulla sugli assi, è positiva nel primo e terzo quadrante e negativa nel secondo e quarto, quindi l'origine non è né massimo né minimo.

Il primo passo è dunque risolvere il sistema $\nabla f = \boldsymbol{0}$. Se $f$ non è differenziabile ovunque, bisogna aggiungere i punti di non differenziabilità e quelli di frontiera del dominio.

### Classificazione con l'hessiana

Sia $f$ di classe $C^2$ in un intorno di un punto stazionario $\boldsymbol{x}_0$. Lo sviluppo di Taylor del secondo ordine (si veda [Formula di Taylor](ref:chapter/2#p5)), dato che $\nabla f(\boldsymbol{x}_0) = \boldsymbol{0}$, diventa

:::formula{id="2.14" label="Sviluppo in un punto stazionario"}
$$f(\boldsymbol{x}) - f(\boldsymbol{x}_0) = Q(\boldsymbol{x} - \boldsymbol{x}_0) + o(\|\boldsymbol{x} - \boldsymbol{x}_0\|^2), \qquad \boldsymbol{x} \to \boldsymbol{x}_0,$$
:::

dove $Q(\boldsymbol{v}) = \tfrac12\, \boldsymbol{v}^T Hf(\boldsymbol{x}_0)\, \boldsymbol{v}$ è la forma quadratica associata alla matrice hessiana {{formula:2.10}}. Se $Q$ è definita positiva o negativa, il suo segno controlla uniformemente quello di $f(\boldsymbol{x}) - f(\boldsymbol{x}_0)$ vicino a $\boldsymbol{x}_0$. Lungo una direzione fissata $\boldsymbol{v}$ con $Q(\boldsymbol{v}) \ne 0$, i due segni coincidono per spostamenti sufficientemente piccoli lungo quella direzione.

**Teorema 2.8** (condizioni del secondo ordine). Sia $f$ di classe $C^2$ in un intorno di un punto $\boldsymbol{x}_0$ stazionario per $f$.

1. Se $\boldsymbol{x}_0$ è di minimo (risp. massimo), allora $Hf(\boldsymbol{x}_0)$ è semi-definita positiva (risp. negativa).
2. Se $Hf(\boldsymbol{x}_0)$ è definita positiva (risp. negativa), allora $\boldsymbol{x}_0$ è di minimo (risp. massimo) locale stretto.

Dalla parte 1 segue che, se $Hf(\boldsymbol{x}_0)$ è **indefinita** (autovalori di segno opposto), $\boldsymbol{x}_0$ non è di estremo: è un **punto di sella**.

In termini di autovalori di $Hf(\boldsymbol{x}_0)$, che è simmetrica e quindi ha autovalori reali [(1.3)](ref:formula/1.3), il criterio operativo è il seguente.

- Autovalori tutti positivi: minimo locale stretto.
- Autovalori tutti negativi: massimo locale stretto.
- Autovalori sia positivi sia negativi: sella.
- Qualche autovalore nullo e gli altri dello stesso segno: nessuna conclusione dalla sola hessiana.

**Caso $n = 2$.** Per una matrice simmetrica $2\times 2$ il determinante è il prodotto degli autovalori, quindi non occorre calcolarli.

- $\det Hf(\boldsymbol{x}_0) > 0$ e $f_{xx}(\boldsymbol{x}_0) > 0$: minimo locale stretto.
- $\det Hf(\boldsymbol{x}_0) > 0$ e $f_{xx}(\boldsymbol{x}_0) < 0$: massimo locale stretto.
- $\det Hf(\boldsymbol{x}_0) < 0$: sella.
- $\det Hf(\boldsymbol{x}_0) = 0$: la natura di $\boldsymbol{x}_0$ non si determina dalla sola hessiana.

Se $\det Hf > 0$, anche il segno di $f_{yy}$ decide tra minimo e massimo, ed è concorde con quello di $f_{xx}$.

**Esempio 2.17.** Studiamo $f(x,y) = x^3 + y^3 - 3xy$ su $\mathbb{R}^2$.

*Punti critici.* La funzione è $C^\infty$, quindi gli estremi sono tra le soluzioni di

$$
\begin{cases} f_x = 3x^2 - 3y = 0 \\ f_y = 3y^2 - 3x = 0. \end{cases}
$$

Dalla prima, $y = x^2$. Sostituendo nella seconda, $3x^4 - 3x = 3x(x^3 - 1) = 0$, da cui $x = 0$ oppure $x = 1$. I punti critici sono $(0,0)$ e $(1,1)$.

*Hessiana.* Si ha $f_{xx} = 6x$, $f_{yy} = 6y$, $f_{xy} = -3$.

- In $(0,0)$: $Hf = \begin{pmatrix} 0 & -3 \\ -3 & 0 \end{pmatrix}$, con $\det = -9 < 0$. Il punto è di sella.
- In $(1,1)$: $Hf = \begin{pmatrix} 6 & -3 \\ -3 & 6 \end{pmatrix}$, con $\det = 27 > 0$ e $f_{xx} = 6 > 0$. Il punto è di minimo locale stretto, con $f(1,1) = -1$.

Nessuno dei due è estremo assoluto: lungo l'asse $x$, $f(x,0) = x^3$ assume valori arbitrariamente grandi e arbitrariamente negativi.

**Errore tipico 2.12.** Nel sistema $3x^2 = 3y,\ 3y^2 = 3x$ si divide per $x$ (o per $y$) e si perde la soluzione $x = 0$. Il secondo errore è usare il criterio del determinante senza aver prima verificato che il punto sia stazionario, oppure calcolare $f_{xy}$ in un punto diverso da quello in esame. Il terzo è concludere "minimo assoluto" da "minimo locale": l'hessiana dà informazioni solo locali.

### Casi degeneri

Se $\det Hf(\boldsymbol{x}_0) = 0$ (in generale, se $Hf(\boldsymbol{x}_0)$ è semi-definita ma non definita), la parte quadratica di $f(\boldsymbol{x}) - f(\boldsymbol{x}_0)$ si annulla lungo qualche direzione e il resto $o(\|\boldsymbol{x}-\boldsymbol{x}_0\|^2)$ può decidere tutto. Hessiane semi-definite dello stesso tipo possono corrispondere a comportamenti opposti. Servono ragionamenti diretti: si studia il segno di $f(\boldsymbol{x}) - f(\boldsymbol{x}_0)$ vicino a $\boldsymbol{x}_0$, scrivendolo in forma fattorizzata o restringendo $f$ a curve passanti per $\boldsymbol{x}_0$.

- Per dimostrare che $\boldsymbol{x}_0$ **non è** di estremo, basta trovare due curve per $\boldsymbol{x}_0$ lungo le quali $f - f(\boldsymbol{x}_0)$ ha segni opposti. Per $f(x,y) = x^2 - y^4$ l'hessiana nell'origine è $\operatorname{diag}(2,0)$, ma $f(x,0) = x^2$ ha un minimo e $f(0,y) = -y^4$ un massimo, quindi l'origine è di sella.
- Per dimostrare che $\boldsymbol{x}_0$ **è** di estremo, si prova che $f - f(\boldsymbol{x}_0)$ ha segno costante in un intorno.

**Esempio 2.18.** Sia $f(x,y) = (x-y)^2 + y^4$.

*Punti critici.* $f_x = 2(x-y) = 0$ e $f_y = -2(x-y) + 4y^3 = 0$ danno $x = y$ e poi $4y^3 = 0$. L'unico punto critico è l'origine.

*Hessiana.* $f_{xx} = 2$, $f_{xy} = -2$, $f_{yy} = 2 + 12y^2$, quindi

$$
Hf(0,0) = \begin{pmatrix} 2 & -2 \\ -2 & 2 \end{pmatrix}, \qquad \det Hf(0,0) = 0.
$$

Gli autovalori sono $0$ e $4$: il test è inconcludente.

*Studio del segno.* Si ha $f(0,0) = 0$ e $f(x,y) \ge 0$ ovunque, perché somma di due termini non negativi. Inoltre $f(x,y) = 0$ richiede $x = y$ e $y = 0$, cioè $(x,y) = (0,0)$. Quindi $f(x,y) > f(0,0)$ per $(x,y) \ne (0,0)$, e l'origine è un minimo assoluto stretto.

**Errore tipico 2.13.** Da $\det Hf = 0$ si conclude "sella" (o "minimo", perché l'hessiana è semi-definita positiva). Il determinante nullo non decide niente: nell'esempio precedente $x^2 - y^4$ è una sella, qui si ha un minimo, con hessiane entrambe semi-definite positive. Un altro errore è giudicare l'origine di $x^3y^3$ a partire da una sola curva, per esempio l'asse $x$, dove $f \equiv 0$. Servono curve con segni opposti, come $y = x$ e $y = -x$.

Un secondo esempio con una famiglia di punti critici degeneri è $f(x,y) = x^2\left(\log(1+y) + y^2\right)$ su $y > -1$. Tutti i punti $(0,y)$ sono critici e l'hessiana, $\operatorname{diag}\left(2(\log(1+y)+y^2),\,0\right)$, non dà informazioni. Poiché $f(0,y) = 0$ e $\log(1+y) + y^2$ ha il segno di $y$, la funzione ha segno uguale a quello di $y$ vicino ai punti $(0,y)$. Quindi i punti $(0,y)$ con $y > 0$ sono di minimo relativo, quelli con $y < 0$ di massimo relativo, e l'origine non è né l'uno né l'altro.

### Massimi e minimi assoluti su compatti

Il teorema di Fermat e l'hessiana trattano gli estremi locali interni. Per quelli assoluti serve prima garantirne l'esistenza.

**Teorema 2.9** (di Weierstrass). Se $f$ è continua su un insieme compatto $K \subseteq \operatorname{dom} f$ (chiuso e limitato, si veda [Cenni di topologia di $\mathbb{R}^n$](ref:chapter/1#p3)), allora $f(K)$ è un sottoinsieme chiuso e limitato di $\mathbb{R}$. In particolare, $f$ assume su $K$ valore minimo e valore massimo.

Il teorema garantisce l'esistenza ma non indica dove si trovano. Gli estremi assoluti possono stare all'interno di $K$ o sulla frontiera $\partial K$, e il procedimento è questo.

1. **Punti interni.** Si cercano i punti di $\mathring{K}$ in cui $\nabla f = \boldsymbol{0}$ e quelli in cui $f$ non è differenziabile. Non occorre classificarli.
2. **Frontiera.** Si studia la restrizione di $f$ a $\partial K$ con una parametrizzazione, oppure sostituendo il vincolo se questo permette di eliminare una variabile.
3. **Confronto.** Si calcola $f$ in tutti i candidati e si confrontano i valori: il più piccolo è il minimo assoluto, il più grande il massimo.

**Esempio 2.19.** Determiniamo massimo e minimo assoluti di $f(x,y) = x^2 + 2y^2 - x$ sul disco $K = \{(x,y) : x^2 + y^2 \le 1\}$. La funzione è continua e $K$ è compatto, quindi gli estremi esistono.

*Interno.* $\nabla f = (2x - 1,\ 4y) = \boldsymbol{0}$ dà $(x,y) = (\tfrac12, 0)$, che sta nel disco. Si ha $f(\tfrac12, 0) = \tfrac14 - \tfrac12 = -\tfrac14$.

*Frontiera.* Su $x^2 + y^2 = 1$ si ha $y^2 = 1 - x^2$, quindi

$$
f = x^2 + 2(1 - x^2) - x = h(x) := 2 - x^2 - x, \qquad x \in \lbrack -1, 1\rbrack .
$$

La derivata $h'(x) = -2x - 1$ si annulla in $x = -\tfrac12$, con $h(-\tfrac12) = 2 - \tfrac14 + \tfrac12 = \tfrac94$. Agli estremi dell'intervallo, $h(1) = 0$ e $h(-1) = 2$. I punti del cerchio corrispondenti a $x = -\tfrac12$ sono $\left(-\tfrac12, \pm\tfrac{\sqrt3}{2}\right)$, quelli corrispondenti a $x = \pm 1$ sono $(\pm 1, 0)$.

*Confronto.* I valori candidati sono $-\tfrac14$, $\tfrac94$, $0$, $2$. Quindi:

- il **massimo assoluto** è $\tfrac94$, assunto in $\left(-\tfrac12, \pm\tfrac{\sqrt3}{2}\right)$;
- il **minimo assoluto** è $-\tfrac14$, assunto in $\left(\tfrac12, 0\right)$.

:::image{src="assets/b959fc40-restrizione-bordo-disco.svg" alt="Grafico di h(x) = 2 - x² - x su [-1,1] con massimo 9/4 in x = -1/2" caption="Fig. 2.3 — Restrizione di f al bordo del disco: h(x) = 2 - x² - x per x in [-1,1]. Il massimo 9/4 è in x = -1/2; agli estremi h vale 2 e 0, e il minimo sul bordo (0) resta sopra il valore -1/4 del punto interno."}
:::

**Errore tipico 2.14.** Si studia solo l'interno e si dimentica la frontiera, o viceversa. In questo esempio il punto interno dà il minimo e il bordo dà il massimo: ignorare uno dei due insiemi porta a un risultato sbagliato. Altri errori frequenti sono dimenticare gli estremi dell'intervallo di $x$ (o il punto in cui la parametrizzazione si chiude) e non confrontare i valori numerici di $f$, ma solo i punti.

Su un insieme compatto, se $f$ non è costante, il massimo e il minimo sono distinti. Se $f$ ha come unico punto critico interno il suo minimo assoluto, come $\|\boldsymbol{x}\|^2$ su un compatto che contiene l'origine nel suo interno, il massimo si trova necessariamente sulla frontiera.
