---
chapter: 3
title: Calcolo differenziale per funzioni vettoriali
---

## p1 | Introduzione

Per studiare campi che variano nello spazio non basta più osservare una sola funzione alla volta: servono strumenti che descrivano come cambiano tutte le componenti e come si organizzano curve e superfici. Questo capitolo costruisce il passaggio dal calcolo differenziale scalare a quello vettoriale, utile per interpretare variazioni locali, flussi e geometria dello spazio.

È necessario conoscere il calcolo differenziale per funzioni scalari, in particolare derivate parziali, gradiente, differenziabilità e regola della catena. Queste idee permettono di comprendere la matrice jacobiana come descrizione lineare della variazione di un campo e di applicarla alla derivazione di funzioni composte. Su questa base si introducono divergenza e rotore, insieme alle relazioni che collegano questi operatori al gradiente e al laplaciano.

Al termine del capitolo saprai calcolare jacobiane, divergenza e rotore, distinguere campi conservativi, irrotazionali e solenoidali e descrivere il comportamento di funzioni lungo una curva. Saprai inoltre parametrizzare curve e superfici, determinarne tangenti, normali e lunghezze, e usare coordinate polari, cilindriche e sferiche per rappresentare oggetti e cambiamenti di variabile. Questi strumenti preparano allo studio degli integrali curvilinei e di superficie e delle leggi che li mettono in relazione.

## p2 | Matrice jacobiana e differenziabilità

Per una funzione scalare, la [differenziabilità](ref:chapter/2#p3) si esprime con il gradiente. Per una funzione a valori vettoriali le componenti sono più d'una, e le loro derivate parziali si raccolgono in una matrice, la jacobiana. Con questa si estendono al caso vettoriale differenziale, linearizzazione e lipschitzianità.

### La matrice jacobiana

Siano $n,m\ge 1$ e $\mathbf{f}:\operatorname{dom}\mathbf{f}\subseteq\mathbb{R}^n\to\mathbb{R}^m$, con componenti $\mathbf{f}=(f_1,\dots,f_m)$. Sia $\mathbf{x}_0\in\operatorname{dom}\mathbf{f}$ e supponiamo che ogni $f_i$ ammetta in $\mathbf{x}_0$ tutte le [derivate parziali](ref:chapter/2#p2) prime. In questo contesto il gradiente $\nabla f_i(\mathbf{x}_0)$ si scrive come vettore riga.

**Definizione 3.1** (matrice jacobiana). La matrice a $m$ righe e $n$ colonne

:::formula{id="3.1" label="Matrice jacobiana"}
$$J\mathbf{f}(\mathbf{x}_0)=\left(\frac{\partial f_i}{\partial x_j}(\mathbf{x}_0)\right)_{\substack{1\le i\le m\\ 1\le j\le n}}=\begin{pmatrix}\nabla f_1(\mathbf{x}_0)\\ \vdots\\ \nabla f_m(\mathbf{x}_0)\end{pmatrix}$$
:::

si dice matrice jacobiana di $\mathbf{f}$ in $\mathbf{x}_0$. Si trova anche la notazione $D\mathbf{f}(\mathbf{x}_0)$.

L'indice di riga $i$ numera le componenti di $\mathbf{f}$, quello di colonna $j$ le variabili. Se $m=1$ la jacobiana coincide con il gradiente, pensato come vettore riga.

**Esempio 3.1** (jacobiana di una funzione non lineare). Sia $\mathbf{f}:\mathbb{R}^3\to\mathbb{R}^2$, $\mathbf{f}(x,y,z)=(xyz,\;x^2+y^2+z^2)$. Derivando $f_1=xyz$ e $f_2=x^2+y^2+z^2$ rispetto a $x,y,z$ si ottiene

$$J\mathbf{f}(x,y,z)=\begin{pmatrix} yz & xz & xy\\ 2x & 2y & 2z\end{pmatrix}.$$

La matrice è $2\times 3$: due componenti, tre variabili.

**Esempio 3.2** (funzione affine). Sia $\mathbf{f}(\mathbf{x})=A\mathbf{x}+\mathbf{b}$ con $A\in\mathbb{R}^{m\times n}$ e $\mathbf{b}\in\mathbb{R}^m$. Poiché $f_i(\mathbf{x})=\sum_{j=1}^n a_{ij}x_j+b_i$, si ha $\partial f_i/\partial x_j=a_{ij}$, quindi $J\mathbf{f}(\mathbf{x})=A$ per ogni $\mathbf{x}$: la jacobiana di una funzione affine è costante.

### Differenziabilità e differenziale

**Definizione 3.2** (differenziabilità). La funzione $\mathbf{f}$ è differenziabile in $\mathbf{x}_0$ se, per $\mathbf{x}\to\mathbf{x}_0$,

:::formula{id="3.2" label="Differenziabilità di una funzione vettoriale"}
$$\mathbf{f}(\mathbf{x})=\mathbf{f}(\mathbf{x}_0)+J\mathbf{f}(\mathbf{x}_0)(\mathbf{x}-\mathbf{x}_0)+o(\|\mathbf{x}-\mathbf{x}_0\|)$$
:::

Con $\Delta\mathbf{x}=\mathbf{x}-\mathbf{x}_0$ la relazione diventa $\mathbf{f}(\mathbf{x}_0+\Delta\mathbf{x})=\mathbf{f}(\mathbf{x}_0)+J\mathbf{f}(\mathbf{x}_0)\Delta\mathbf{x}+o(\|\Delta\mathbf{x}\|)$ per $\Delta\mathbf{x}\to\mathbf{0}$. Il **differenziale** di $\mathbf{f}$ in $\mathbf{x}_0$ è l'applicazione lineare $d\mathbf{f}_{\mathbf{x}_0}:\mathbb{R}^n\to\mathbb{R}^m$, $\Delta\mathbf{x}\mapsto J\mathbf{f}(\mathbf{x}_0)\Delta\mathbf{x}$.

A meno di infinitesimi di ordine superiore al primo, l'incremento $\Delta\mathbf{f}=\mathbf{f}(\mathbf{x}_0+\Delta\mathbf{x})-\mathbf{f}(\mathbf{x}_0)$ è approssimato da $d\mathbf{f}_{\mathbf{x}_0}(\Delta\mathbf{x})$. Ne segue la **linearizzazione** in un intorno di $\mathbf{x}_0$, cioè il polinomio di Taylor di ordine 1:

:::formula{id="3.3" label="Linearizzazione di una funzione vettoriale"}
$$\mathbf{f}(\mathbf{x})\approx\mathbf{f}(\mathbf{x}_0)+J\mathbf{f}(\mathbf{x}_0)(\mathbf{x}-\mathbf{x}_0)$$
:::

I risultati del caso scalare si estendono componente per componente.

- Se $\mathbf{f}$ è differenziabile in $\mathbf{x}_0$, allora è continua in $\mathbf{x}_0$.
- (Differenziale totale) Se tutte le derivate parziali delle componenti esistono e sono continue in un intorno di $\mathbf{x}_0$, allora $\mathbf{f}$ è differenziabile in $\mathbf{x}_0$.

Diciamo che $\mathbf{f}$ è di classe $C^k$ in un aperto $\Omega\subseteq\operatorname{dom}\mathbf{f}$ ($0\le k\le\infty$) se tutte le sue componenti lo sono; si scrive $\mathbf{f}\in C^k(\Omega)$. Dunque $\mathbf{f}\in C^1(\Omega)$ implica che $\mathbf{f}$ è differenziabile in ogni punto di $\Omega$.

### Funzioni lipschitziane

Sia $R$ una regione contenuta in $\operatorname{dom}\mathbf{f}$.

**Definizione 3.3** (funzione lipschitziana). La funzione $\mathbf{f}$ è lipschitziana in $R$ se esiste $L\ge 0$ tale che

:::formula{id="3.4" label="Condizione di Lipschitz"}
$$\|\mathbf{f}(\mathbf{x}_1)-\mathbf{f}(\mathbf{x}_2)\|\le L\,\|\mathbf{x}_1-\mathbf{x}_2\|\qquad\forall\,\mathbf{x}_1,\mathbf{x}_2\in R$$
:::

La più piccola $L$ possibile è la costante di Lipschitz di $\mathbf{f}$ in $R$. Inoltre $\mathbf{f}$ è lipschitziana in $R$ se e solo se lo sono tutte le sue componenti.

**Teorema 3.1** (criterio di lipschitzianità). Sia $R\subseteq\operatorname{dom}\mathbf{f}$ una regione convessa. Se $\mathbf{f}$ è differenziabile in $R$ ed esiste $M\ge0$ tale che

$$\left|\frac{\partial f_i}{\partial x_j}(\mathbf{x})\right|\le M\qquad\forall\,\mathbf{x}\in R,\; i=1,\dots,m,\; j=1,\dots,n,$$

allora $\mathbf{f}$ è lipschitziana in $R$ con $L=\sqrt{nm}\,M$.

L'idea è applicare a ogni componente il teorema di Lagrange lungo il segmento di estremi $\mathbf{x}_1,\mathbf{x}_2$, che per questo deve restare in $R$: ciò è garantito dalla convessità. Alcuni testi enunciano il risultato per regioni soltanto connesse, ma la dimostrazione passa per i segmenti, perciò la convessità è l'ipotesi che rende l'argomento immediato.

### Esempio svolto

Sia $\mathbf{f}:\mathbb{R}^2\to\mathbb{R}^3$, $\mathbf{f}(x,y)=(x^2y,\; x+\sin y,\; e^{xy})$.

1. **Jacobiana.** Le componenti sono $f_1=x^2y$, $f_2=x+\sin y$, $f_3=e^{xy}$, quindi la matrice è $3\times2$:
$\displaystyle J\mathbf{f}(x,y)=\begin{pmatrix}2xy & x^2\\ 1 & \cos y\\ y\,e^{xy} & x\,e^{xy}\end{pmatrix}.$
2. **Differenziabilità.** Tutte le entrate sono continue su $\mathbb{R}^2$, quindi $\mathbf{f}\in C^1(\mathbb{R}^2)$ e, per il differenziale totale, $\mathbf{f}$ è differenziabile in ogni punto.
3. **Linearizzazione in $\mathbf{x}_0=(1,0)$.** Si ha $\mathbf{f}(1,0)=(0,1,1)$ e
$\displaystyle J\mathbf{f}(1,0)=\begin{pmatrix}0&1\\1&1\\0&1\end{pmatrix}.$
Con $\Delta\mathbf{x}=(x-1,\,y)$:
$\displaystyle \mathbf{f}(x,y)\approx\begin{pmatrix}0\\1\\1\end{pmatrix}+\begin{pmatrix}y\\ (x-1)+y\\ y\end{pmatrix}=\begin{pmatrix}y\\ x+y\\ 1+y\end{pmatrix}.$
4. **Lipschitzianità.** Sia ora $\mathbf{g}(x,y)=(\sin(x+y),\cos x)$. Le derivate parziali sono $\cos(x+y)$, $\cos(x+y)$, $-\sin x$, $0$, tutte di modulo al più $1$. Con $M=1$, $n=m=2$ e $R=\mathbb{R}^2$ (convesso), $\mathbf{g}$ è lipschitziana con $L=\sqrt{4}\cdot1=2$.

**Errore tipico 3.1.** Scrivere la jacobiana trasposta, con le variabili sulle righe e le componenti sulle colonne. La regola è: $m$ righe (una per componente $f_i$), $n$ colonne (una per variabile $x_j$). Un controllo rapido è che $J\mathbf{f}(\mathbf{x}_0)\Delta\mathbf{x}$, con $\Delta\mathbf{x}\in\mathbb{R}^n$, deve appartenere a $\mathbb{R}^m$. Per $m=1$ la jacobiana è il gradiente scritto come riga.

### Il teorema di Lagrange non vale per i campi vettoriali

Per $f$ scalare esiste $\mathbf{x}\in S\lbrack \mathbf{a},\mathbf{b}\rbrack $ con $f(\mathbf{b})-f(\mathbf{a})=\nabla f(\mathbf{x})\cdot(\mathbf{b}-\mathbf{a})$. Per $\mathbf{f}$ vettoriale non è detto che esista un punto con $\mathbf{f}(\mathbf{b})-\mathbf{f}(\mathbf{a})=J\mathbf{f}(\mathbf{x})(\mathbf{b}-\mathbf{a})$. Ciascuna componente ha il proprio punto $\mathbf{x}_i$, ma i punti in generale sono diversi.

**Esempio 3.3.** Sia $\mathbf{f}(t)=(t^2,t^3)$ con $a=0$, $b=1$. Si ha $\mathbf{f}(1)-\mathbf{f}(0)=(1,1)$, mentre $J\mathbf{f}(t)(b-a)=(2t,3t^2)$. L'uguaglianza $(2t,3t^2)=(1,1)$ richiede $t=1/2$ dalla prima componente e $t=1/\sqrt3$ dalla seconda: nessun $t$ la soddisfa.

**Errore tipico 3.2.** Applicare il teorema di Lagrange a un campo vettoriale scrivendo un'uguaglianza esatta con un solo punto intermedio. Sotto ipotesi analoghe a quelle del caso scalare vale solo la disuguaglianza

$$
\|\mathbf{f}(\mathbf{b})-\mathbf{f}(\mathbf{a})\|\le\sup_{\mathbf{x}\in S\lbrack \mathbf{a},\mathbf{b}\rbrack }\|J\mathbf{f}(\mathbf{x})\|\,\|\mathbf{b}-\mathbf{a}\|,
$$

dove $\|J\mathbf{f}\|$ è la norma della matrice jacobiana, e spesso basta per le applicazioni.

## p3 | Operatori differenziali notevoli

Il gradiente di una funzione scalare è già noto (si veda [Derivate parziali, direzionali e gradiente](ref:chapter/2#p2)). In questa sezione lo affianchiamo a due operatori che agiscono sui campi vettoriali, la divergenza e il rotore, e al laplaciano, che nasce dalla loro composizione. Sono operatori lineari che trasformano campi in campi: nello scritto compaiono quasi sempre sotto forma di calcolo di $\operatorname{div}\mathbf{F}$, $\operatorname{rot}\mathbf{F}$, $\Delta f$, o di verifica che un campo sia irrotazionale o solenoidale.

### Il gradiente e l'operatore nabla

Sia $\Omega\subseteq\mathbb{R}^n$ aperto e $\varphi$ un campo scalare differenziabile in $\Omega$. Il gradiente associa a $\varphi$ il campo vettoriale delle derivate parziali prime [(2.2)](ref:formula/2.2):

$$\nabla\varphi=\left(\frac{\partial \varphi}{\partial x_j}\right)_{1\le j\le n}=\frac{\partial \varphi}{\partial x_1}\mathbf{e}_1+\dots+\frac{\partial \varphi}{\partial x_n}\mathbf{e}_n .$$

Se $\varphi\in C^1(\Omega)$, allora $\nabla\varphi\in C^0(\Omega)^n$.

Per scrivere in modo uniforme i vari operatori si introduce il vettore simbolico $\nabla$, le cui componenti sono gli operatori di derivazione parziale:

:::formula{id="3.5" label="Vettore simbolico nabla"}
$$\nabla=\left(\frac{\partial}{\partial x_j}\right)_{1\le j\le n}=\frac{\partial}{\partial x_1}\mathbf{e}_1+\dots+\frac{\partial}{\partial x_n}\mathbf{e}_n$$
:::

Il gradiente è il "prodotto" di $\nabla$ per lo scalare $\varphi$; la divergenza e il rotore si ottengono con un prodotto scalare e uno vettoriale.

### Divergenza

**Definizione 3.4** (divergenza). Sia $\mathbf{F}=(F_1,\dots,F_n)$ un campo vettoriale definito e differenziabile in $\Omega\subseteq\mathbb{R}^n$. La divergenza di $\mathbf{F}$ è il campo scalare

:::formula{id="3.6" label="Divergenza"}
$$\operatorname{div}\mathbf{F}=\nabla\cdot\mathbf{F}=\frac{\partial F_1}{\partial x_1}+\dots+\frac{\partial F_n}{\partial x_n}=\sum_{j=1}^{n}\frac{\partial F_j}{\partial x_j}$$
:::

La divergenza manda $C^1(\Omega)^n$ in $C^0(\Omega)$. È la traccia della matrice jacobiana: $\operatorname{div}\mathbf{F}(\mathbf{x}_0)=\operatorname{tr}J\mathbf{F}(\mathbf{x}_0)$ (per la jacobiana si veda [Matrice jacobiana e differenziabilità](ref:chapter/3#p2)).

### Rotore

In $\mathbb{R}^3$ il rotore di $\mathbf{F}=(F_1,F_2,F_3)$ è il prodotto vettoriale $\nabla\wedge\mathbf{F}$, che si ricorda con il determinante simbolico:

:::formula{id="3.7" label="Rotore in R^3"}
$$\operatorname{rot}\mathbf{F}=\nabla\wedge\mathbf{F}=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\ \dfrac{\partial}{\partial x}&\dfrac{\partial}{\partial y}&\dfrac{\partial}{\partial z}\\ F_1&F_2&F_3\end{vmatrix}=\left(\frac{\partial F_3}{\partial y}-\frac{\partial F_2}{\partial z}\right)\mathbf{i}+\left(\frac{\partial F_1}{\partial z}-\frac{\partial F_3}{\partial x}\right)\mathbf{j}+\left(\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}\right)\mathbf{k}$$
:::

In $\mathbb{R}^2$ il rotore è un numero, cioè la sola componente lungo $\mathbf{k}$ del rotore del campo $(F_1,F_2,0)$:

:::formula{id="3.8" label="Rotore in R^2"}
$$\operatorname{rot}\mathbf{F}=\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}$$
:::

Per $n>3$ la definizione di rotore esula dagli scopi di questa trattazione. Anche div e rot sono lineari, cioè per campi $\mathbf{F},\mathbf{G}$ e scalari $\lambda,\mu$

$$\operatorname{div}(\lambda\mathbf{F}+\mu\mathbf{G})=\lambda\operatorname{div}\mathbf{F}+\mu\operatorname{div}\mathbf{G},\qquad \operatorname{rot}(\lambda\mathbf{F}+\mu\mathbf{G})=\lambda\operatorname{rot}\mathbf{F}+\mu\operatorname{rot}\mathbf{G}$$

. Valgono inoltre le regole di Leibniz per i prodotti fra campi di classe $C^1$:

$$\nabla(\varphi\psi)=\psi\nabla\varphi+\varphi\nabla\psi,\qquad \operatorname{div}(\varphi\mathbf{F})=\nabla\varphi\cdot\mathbf{F}+\varphi\operatorname{div}\mathbf{F},\qquad \operatorname{rot}(\varphi\mathbf{F})=\nabla\varphi\wedge\mathbf{F}+\varphi\operatorname{rot}\mathbf{F}.$$

Il rotore misura quanto la jacobiana sia lontana dall'essere simmetrica: $\operatorname{rot}\mathbf{F}(\mathbf{x}_0)=\mathbf{0}$ se e solo se $J\mathbf{F}(\mathbf{x}_0)$ è simmetrica. Infatti le componenti di $\operatorname{rot}\mathbf{F}$ sono le differenze degli elementi simmetrici rispetto alla diagonale, $\partial F_i/\partial x_j-\partial F_j/\partial x_i$.

### Laplaciano

Applicando la divergenza al gradiente di $\varphi\in C^2(\Omega)$ si ottiene la somma delle derivate seconde pure:

:::formula{id="3.9" label="Laplaciano"}
$$\Delta\varphi=\operatorname{div}\nabla\varphi=\nabla\cdot\nabla\varphi=\sum_{j=1}^{n}\frac{\partial^2\varphi}{\partial x_j^2}$$
:::

Una funzione con $\Delta\varphi=0$ in $\Omega$ si dice **armonica**. Talvolta si scrive $\nabla^2\varphi$, ma ciò non significa $\nabla(\nabla\varphi)$, che non ha senso, perché il gradiente agisce su scalari e non su vettori.

Sui campi vettoriali il laplaciano agisce componente per componente: $\Delta\mathbf{F}=(\Delta F_1,\dots,\Delta F_n)$. Per $\mathbf{F}$ di classe $C^2$ in $\mathbb{R}^3$ vale l'identità

$$\Delta\mathbf{F}-\nabla(\operatorname{div}\mathbf{F})+\operatorname{rot}\operatorname{rot}\mathbf{F}=\mathbf{0}.$$

### Identità fondamentali

**Teorema 3.2** (rot grad e div rot). Sia $\Omega$ aperto.

1. Se $\varphi\in C^2(\Omega)$, con $\Omega\subseteq\mathbb{R}^2$ o $\Omega\subseteq\mathbb{R}^3$, allora $\operatorname{rot}\nabla\varphi=0$ (nel piano) o $=\mathbf{0}$ (nello spazio) in $\Omega$.
2. Se $\mathbf{\Phi}$ è un campo vettoriale di classe $C^2$ in un aperto $\Omega\subseteq\mathbb{R}^3$, allora $\operatorname{div}\operatorname{rot}\mathbf{\Phi}=0$ in $\Omega$.

:::formula{id="3.10" label="Identità rot grad e div rot"}
$$\operatorname{rot}\nabla\varphi=\nabla\wedge(\nabla\varphi)=\mathbf{0},\qquad \operatorname{div}\operatorname{rot}\mathbf{\Phi}=\nabla\cdot(\nabla\wedge\mathbf{\Phi})=0$$
:::

L'idea della dimostrazione è breve. Ad esempio, la prima componente di $\operatorname{rot}\nabla\varphi$ è $\varphi_{zy}-\varphi_{yz}$, che si annulla per il teorema di Schwarz sulle derivate miste (si veda [Derivate seconde e matrice hessiana](ref:chapter/2#p4)). Per questo serve la classe $C^2$. Nella seconda identità le derivate miste di $\mathbf{\Phi}$ si cancellano a coppie.

### Campi irrotazionali e solenoidali

**Definizione 3.5.** Un campo $\mathbf{F}$ di classe $C^1$ in un aperto $\Omega$ è

- **irrotazionale** se $\operatorname{rot}\mathbf{F}=\mathbf{0}$ in $\Omega$ (in $\mathbb{R}^2$: $\operatorname{rot}\mathbf{F}=0$);
- **solenoidale** se $\operatorname{div}\mathbf{F}=0$ in $\Omega$.

Un campo di tipo rotore è un campo $\mathbf{F}=\operatorname{rot}\mathbf{\Phi}$, e $\mathbf{\Phi}$ si dice potenziale vettore di $\mathbf{F}$. Le identità precedenti si traducono in condizioni necessarie:

- se $\mathbf{F}$, di classe $C^1$ in $\Omega\subseteq\mathbb{R}^n$ con $n=2,3$, è conservativo (cioè $\mathbf{F}=\nabla\varphi$ con $\varphi\in C^2$), allora è irrotazionale;
- se $\mathbf{F}$, di classe $C^1$ in $\Omega\subseteq\mathbb{R}^3$, ha un potenziale vettore di classe $C^2$, allora è solenoidale.

In un aperto convesso di $\mathbb{R}^3$ un campo $C^1$ è irrotazionale se e solo se è conservativo. Il tema dei potenziali è ripreso in [Campi conservativi e potenziale](ref:chapter/5#p4).

Nel caso affine $\mathbf{F}(\mathbf{x})=A\mathbf{x}+\mathbf{b}$ in $\mathbb{R}^3$, $\mathbf{F}$ è solenoidale se e solo se $\operatorname{tr}A=0$, ed è irrotazionale se e solo se $A$ è simmetrica. Un campo simultaneamente irrotazionale e solenoidale è $\mathbf{F}=(y+z,\,x+z,\,x+y)$.

### Esempi svolti

**Esempio 3.4.** Calcoliamo divergenza e rotore di $\mathbf{F}(x,y,z)=(x^2y,\;yz,\;xz^2)$.

La divergenza è la somma delle derivate "diagonali":

$$\operatorname{div}\mathbf{F}=\frac{\partial (x^2y)}{\partial x}+\frac{\partial (yz)}{\partial y}+\frac{\partial (xz^2)}{\partial z}=2xy+z+2xz .$$

Per il rotore servono le sei derivate miste $\partial F_i/\partial x_j$ con $i\neq j$:

$$\frac{\partial F_3}{\partial y}=0,\quad \frac{\partial F_2}{\partial z}=y,\quad \frac{\partial F_1}{\partial z}=0,\quad \frac{\partial F_3}{\partial x}=z^2,\quad \frac{\partial F_2}{\partial x}=0,\quad \frac{\partial F_1}{\partial y}=x^2 .$$

Quindi

$$\operatorname{rot}\mathbf{F}=(0-y)\,\mathbf{i}+(0-z^2)\,\mathbf{j}+(0-x^2)\,\mathbf{k}=(-y,\,-z^2,\,-x^2).$$

Il campo non è né solenoidale né irrotazionale. Verifichiamo l'identità: $\operatorname{div}\operatorname{rot}\mathbf{F}=\partial_x(-y)+\partial_y(-z^2)+\partial_z(-x^2)=0$, come previsto.

**Esempio 3.5.** Laplaciano e verifica di $\operatorname{rot}\nabla\varphi=\mathbf{0}$ per $\varphi(x,y,z)=xyz$. Si ha $\nabla\varphi=(yz,\,xz,\,xy)$. Le componenti di $\operatorname{rot}\nabla\varphi$ sono $x-x$, $y-y$, $z-z$, tutte nulle. Inoltre $\Delta\varphi=0+0+0=0$, quindi $\varphi$ è anche armonica. Per $\varphi=e^x\sin y+z^2$ si ha invece $\Delta\varphi=e^x\sin y-e^x\sin y+2=2$.

**Esempio 3.6.** Determinare $a,b\in\mathbb{R}$ in modo che $\mathbf{F}(x,y,z)=(2xy+az,\;x^2+z,\;bx+y)$ sia irrotazionale in $\mathbb{R}^3$, e dire se è solenoidale.

Calcoliamo il rotore:

$$\operatorname{rot}\mathbf{F}=\left(1-1,\;a-b,\;2x-2x\right)=(0,\;a-b,\;0).$$

Dunque $\mathbf{F}$ è irrotazionale se e solo se $a=b$. Poiché $\operatorname{div}\mathbf{F}=2y+0+0=2y$ non è identicamente nulla, il campo non è mai solenoidale. Essendo $\mathbb{R}^3$ convesso, per $a=b$ il campo è anche conservativo.

**Errore tipico 3.3.**

- Nel rotore tridimensionale la componente lungo $\mathbf{j}$ è $\partial_zF_1-\partial_xF_3$, cioè con l'ordine dei termini invertito rispetto alle altre due componenti: conviene sempre sviluppare il determinante simbolico, senza procedere a memoria.
- Divergenza e rotore non vanno confusi: $\operatorname{div}\mathbf{F}$ è uno scalare (somma di derivate diagonali), $\operatorname{rot}\mathbf{F}$ è un vettore in $\mathbb{R}^3$. Espressioni come $\operatorname{div}\varphi$ o $\operatorname{rot}\operatorname{div}\mathbf{F}$ non hanno senso.
- Non si può concludere che un campo irrotazionale sia conservativo senza guardare il dominio: la condizione $\operatorname{rot}\mathbf{F}=\mathbf{0}$ è solo necessaria in generale, e diventa sufficiente, ad esempio, su un aperto convesso.
- Le identità $\operatorname{rot}\nabla\varphi=\mathbf{0}$ e $\operatorname{div}\operatorname{rot}\mathbf{\Phi}=0$ richiedono la classe $C^2$, perché usano il teorema di Schwarz.

## p4 | Derivazione di funzioni composte

Nelle applicazioni compaiono quasi sempre funzioni composte: una grandezza $f$ che dipende da $(x,y,z)$, a loro volta funzioni del tempo, oppure un cambio di variabili seguito da una funzione di più variabili. Serve quindi una regola che esprima la derivata della composta tramite le derivate dei fattori. La regola della catena è il prodotto delle matrici jacobiane, introdotte nella sezione [Matrice jacobiana e differenziabilità](ref:chapter/3#p2).

### Regola della catena in forma matriciale

Siano $\mathbf{f}:\operatorname{dom}\mathbf{f}\subseteq\mathbb{R}^n\to\mathbb{R}^m$ e $\mathbf{g}:\operatorname{dom}\mathbf{g}\subseteq\mathbb{R}^m\to\mathbb{R}^p$. Sia $\mathbf{x}_0\in\operatorname{dom}\mathbf{f}$ con $\mathbf{y}_0=\mathbf{f}(\mathbf{x}_0)\in\operatorname{dom}\mathbf{g}$, in modo che sia definita $\mathbf{h}=\mathbf{g}\circ\mathbf{f}:\operatorname{dom}\mathbf{h}\subseteq\mathbb{R}^n\to\mathbb{R}^p$ con $\mathbf{x}_0\in\operatorname{dom}\mathbf{h}$.

**Teorema 3.3** (derivata della funzione composta). Nelle ipotesi appena fissate, se $\mathbf{f}$ è differenziabile in $\mathbf{x}_0$ e $\mathbf{g}$ è differenziabile in $\mathbf{y}_0=\mathbf{f}(\mathbf{x}_0)$, allora $\mathbf{h}=\mathbf{g}\circ\mathbf{f}$ è differenziabile in $\mathbf{x}_0$ e

:::formula{id="3.11" label="Regola della catena (forma matriciale)"}
$$J(\mathbf{g}\circ\mathbf{f})(\mathbf{x}_0)=J\mathbf{g}(\mathbf{y}_0)\,J\mathbf{f}(\mathbf{x}_0)$$
:::

Le dimensioni sono compatibili: $J\mathbf{f}(\mathbf{x}_0)$ è $m\times n$, $J\mathbf{g}(\mathbf{y}_0)$ è $p\times m$, quindi il prodotto è $p\times n$, come deve essere per $J\mathbf{h}(\mathbf{x}_0)$.

:::image{src="assets/d60344da-catena-dimensioni-jacobiane.svg" alt="Schema a blocchi della composizione di f e g con le dimensioni delle matrici jacobiane" caption="Fig. 3.1 — Composizione Rⁿ → R^m → R^p: la jacobiana della composta è il prodotto delle jacobiane, con dimensioni (p×m)(m×n) = p×n."}
:::

Per componenti, ponendo $\mathbf{y}=\mathbf{f}(\mathbf{x})=(f_k(\mathbf{x}))_{1\le k\le m}$ e $\mathbf{z}=\mathbf{g}(\mathbf{y})=\mathbf{h}(\mathbf{x})$, l'elemento di riga $i$ e colonna $j$ di $J\mathbf{h}(\mathbf{x}_0)$ è

:::formula{id="3.12" label="Regola della catena per componenti"}
$$\frac{\partial h_i}{\partial x_j}(\mathbf{x}_0)=\sum_{k=1}^{m}\frac{\partial g_i}{\partial y_k}(\mathbf{y}_0)\,\frac{\partial f_k}{\partial x_j}(\mathbf{x}_0),\qquad 1\le i\le p,\ 1\le j\le n$$
:::

In forma mnemonica si scrive $\dfrac{\partial z_i}{\partial x_j}=\sum_k \dfrac{\partial z_i}{\partial y_k}\dfrac{\partial y_k}{\partial x_j}$: la variabile $x_j$ agisce su $z_i$ attraverso ciascuna variabile intermedia $y_k$, e i contributi si sommano.

Tre casi particolari ricorrono spesso.

- Se $\mathbf{f}=(f_1,f_2):\mathbb{R}^2\to\mathbb{R}^2$ e $g:\mathbb{R}^2\to\mathbb{R}$ sono differenziabili e $h=g\circ\mathbf{f}$, allora $\nabla h(\mathbf{x})=\nabla g(\mathbf{f}(\mathbf{x}))\,J\mathbf{f}(\mathbf{x})$, con il gradiente come vettore riga. Posto $u=f_1(x,y)$ e $v=f_2(x,y)$, le componenti sono
$\displaystyle \frac{\partial h}{\partial x}=\frac{\partial g}{\partial u}\frac{\partial f_1}{\partial x}+\frac{\partial g}{\partial v}\frac{\partial f_2}{\partial x},\qquad \frac{\partial h}{\partial y}=\frac{\partial g}{\partial u}\frac{\partial f_1}{\partial y}+\frac{\partial g}{\partial v}\frac{\partial f_2}{\partial y},$
con $g$ derivata in $(u,v)$ e $f_1,f_2$ in $(x,y)$.
- Se $\varphi$ è derivabile e $f:\mathbb{R}^2\to\mathbb{R}$ è differenziabile, la funzione $h(x)=f(x,\varphi(x))$ è derivabile e
$\displaystyle h'(x)=\frac{\partial f}{\partial x}(x,\varphi(x))+\frac{\partial f}{\partial y}(x,\varphi(x))\,\varphi'(x).$
Basta applicare il teorema con $\boldsymbol{\Phi}(x)=(x,\varphi(x))$. Quando la funzione dipende da una sola variabile, la derivata parziale si scrive come derivata ordinaria.
- Se $\mathbf{f}$ è invertibile in un intorno di $\mathbf{x}_0$, differenziabile in $\mathbf{x}_0$ con $J\mathbf{f}(\mathbf{x}_0)$ non singolare, e $\mathbf{f}^{-1}$ è differenziabile in $\mathbf{y}_0=\mathbf{f}(\mathbf{x}_0)$, applicando la regola a $\mathbf{f}^{-1}\circ\mathbf{f}=\mathrm{id}$ si ottiene
$\displaystyle J(\mathbf{f}^{-1})(\mathbf{y}_0)=\bigl(J\mathbf{f}(\mathbf{x}_0)\bigr)^{-1}.$

### Funzioni ristrette a una curva

Sia $\boldsymbol{\gamma}:I\subseteq\mathbb{R}\to\mathbb{R}^3$ una curva con componenti derivabili (le curve sono trattate in [Curve in $\mathbb{R}^m$](ref:chapter/3#p5)) e sia $f:\mathbb{R}^3\to\mathbb{R}$ differenziabile. La restrizione di $f$ alla curva è $h(t)=f(\boldsymbol{\gamma}(t))$, cioè $h=f\circ\boldsymbol{\gamma}$, dove $J\boldsymbol{\gamma}=\boldsymbol{\gamma}'$ è una colonna e $Jf=\nabla f^{\mathsf T}$ è una riga. Dalla regola della catena segue

:::formula{id="3.13" label="Derivata di una funzione ristretta a una curva"}
$$h'(t)=\nabla f(\boldsymbol{\gamma}(t))\cdot\boldsymbol{\gamma}'(t)$$
:::

cioè, posto $(x,y,z)=\boldsymbol{\gamma}(t)$,

$$
h'(t)=\frac{\partial f}{\partial x}(x,y,z)\,\gamma_1'(t)+\frac{\partial f}{\partial y}(x,y,z)\,\gamma_2'(t)+\frac{\partial f}{\partial z}(x,y,z)\,\gamma_3'(t).
$$

La formula vale uguale in $\mathbb{R}^2$ e in $\mathbb{R}^n$. Interpretazione: $h'(t)$ è la derivata di $f$ nella direzione $\boldsymbol{\gamma}'(t)$ con la formula del gradiente [(2.4)](ref:formula/2.4), ma con $\boldsymbol{\gamma}'(t)$ non necessariamente unitario. In particolare $h'(t)=0$ dove $\boldsymbol{\gamma}'(t)\perp\nabla f(\boldsymbol{\gamma}(t))$, per esempio lungo una curva che resta in un insieme di livello di $f$.

### Esempi svolti

**Esempio 3.7** (restrizione a una curva). Sia $f(x,y,z)=xyz$ e $\boldsymbol{\gamma}(t)=(t,\,t^2,\,e^t)$. Calcoliamo $h'(t)$ per $h=f\circ\boldsymbol{\gamma}$.

1. Il gradiente è $\nabla f(x,y,z)=(yz,\ xz,\ xy)$, quindi $\nabla f(\boldsymbol{\gamma}(t))=(t^2e^t,\ te^t,\ t^3)$.
2. La derivata della curva è $\boldsymbol{\gamma}'(t)=(1,\ 2t,\ e^t)$.
3. Il prodotto scalare dà
$\displaystyle h'(t)=t^2e^t\cdot 1+te^t\cdot 2t+t^3\cdot e^t=3t^2e^t+t^3e^t.$

Verifica diretta: $h(t)=t\cdot t^2\cdot e^t=t^3e^t$, da cui $h'(t)=3t^2e^t+t^3e^t$.

**Esempio 3.8** (prodotto di jacobiane). Siano $\mathbf{f}:\mathbb{R}^2\to\mathbb{R}^2$ e $\mathbf{g}:\mathbb{R}^3\to\mathbb{R}^2$ date da

$$
\mathbf{f}(x,y)=\bigl(\sin(2x+y),\ e^{x+2y}\bigr),\qquad \mathbf{g}(u,v,z)=\bigl(u+2v^2+3z^3,\ u^2-2v\bigr).
$$

Calcoliamo $J\mathbf{h}(1,1,0)$ per $\mathbf{h}=\mathbf{f}\circ\mathbf{g}:\mathbb{R}^3\to\mathbb{R}^2$.

1. Le jacobiane sono
$\displaystyle J\mathbf{f}(x,y)=\begin{pmatrix}2\cos(2x+y)&\cos(2x+y)\\ e^{x+2y}&2e^{x+2y}\end{pmatrix},\qquad J\mathbf{g}(u,v,z)=\begin{pmatrix}1&4v&9z^2\\ 2u&-2&0\end{pmatrix}.$
2. Il punto intermedio è $\mathbf{g}(1,1,0)=(1+2+0,\ 1-2)=(3,-1)$.
3. In $(3,-1)$ vale $2x+y=5$ e $x+2y=1$, quindi $J\mathbf{f}(3,-1)=\begin{pmatrix}2\cos5&\cos5\\ e&2e\end{pmatrix}$, mentre $J\mathbf{g}(1,1,0)=\begin{pmatrix}1&4&0\\2&-2&0\end{pmatrix}$.
4. Il prodotto è una matrice $2\times3$:
$\displaystyle J\mathbf{h}(1,1,0)=\begin{pmatrix}2\cos5&\cos5\\ e&2e\end{pmatrix}\begin{pmatrix}1&4&0\\2&-2&0\end{pmatrix}=\begin{pmatrix}4\cos5&6\cos5&0\\5e&0&0\end{pmatrix}.$

**Errore tipico 3.4.** Si sbaglia l'ordine dei fattori o il punto di valutazione.

- La regola è $J\mathbf{g}(\mathbf{y}_0)\,J\mathbf{f}(\mathbf{x}_0)$, con la jacobiana della funzione esterna a sinistra. Nell'esempio, il prodotto $J\mathbf{g}\,J\mathbf{f}$ non è nemmeno definito, perché $J\mathbf{g}$ è $2\times3$ e $J\mathbf{f}$ è $2\times2$: le $3$ colonne del primo fattore non coincidono con le $2$ righe del secondo. Il controllo delle dimensioni $(p\times m)(m\times n)$ segnala subito l'errore.
- La jacobiana esterna va valutata in $\mathbf{y}_0=\mathbf{f}(\mathbf{x}_0)$, non in $\mathbf{x}_0$. Calcolare $J\mathbf{f}(1,1)$ invece di $J\mathbf{f}(3,-1)$ dà un risultato sbagliato anche se le dimensioni tornano.

**Errore tipico 3.5.** Si applica la regola ipotizzando solo l'esistenza delle derivate parziali o direzionali. L'ipotesi richiesta è la differenziabilità della funzione esterna in $\mathbf{y}_0$. Per esempio, $f(x,y)=\dfrac{x^4y^2}{(x^4+y^2)^2}$, con $f(0,0)=0$, ha tutte le derivate direzionali in $(0,0)$ ma non è continua. Lungo la curva derivabile $\boldsymbol{\gamma}(s)=(s,s^2)$ vale $f(\boldsymbol{\gamma}(s))=\tfrac14$ per $s\neq0$ e $f(\boldsymbol{\gamma}(0))=0$, perciò $f\circ\boldsymbol{\gamma}$ non è nemmeno continua in $s=0$, e la formula {{formula:3.13}} non ha senso.

## p5 | Curve in ℝᵐ

Il versore tangente è $\boldsymbol{\tau}(t)=\boldsymbol{\gamma}'(t)/\|\boldsymbol{\gamma}'(t)\|$. Una curva è una funzione, il sostegno è un insieme: questa distinzione regge tutta la sezione, perché retta tangente e lunghezza si leggono dalla derivata della parametrizzazione scelta.

### Curve, sostegno, archi

**Definizione 3.6** (curva). Sia $I\subseteq\mathbb{R}$ un intervallo e $m\ge 2$. Una funzione continua $\boldsymbol{\gamma}:I\to\mathbb{R}^m$, $\boldsymbol{\gamma}(t)=(x_1(t),\dots,x_m(t))$, si dice **curva**. L'immagine $\Gamma=\boldsymbol{\gamma}(I)$ si dice **sostegno** della curva.

Per $m=2$ si scrive $\boldsymbol{\gamma}(t)=(x(t),y(t))$, per $m=3$ si scrive $\boldsymbol{\gamma}(t)=(x(t),y(t),z(t))$.

La curva è una funzione, il sostegno è un insieme. Lo stesso sostegno ha parametrizzazioni diverse: $\boldsymbol{\gamma}(t)=(t,t)$ e $\boldsymbol{\delta}(t)=(t^2,t^2)$, per $t\in[0,1]$, hanno come sostegno lo stesso segmento di estremi $(0,0)$ e $(1,1)$.

**Definizione 3.7** (curva semplice, arco, arco chiuso). Una curva è **semplice** se $\boldsymbol{\gamma}$ è iniettiva. Se $I=\lbrack a,b\rbrack $ la curva si chiama **arco**, con punto iniziale $\boldsymbol{\gamma}(a)$ e punto finale $\boldsymbol{\gamma}(b)$. Un arco è **chiuso** se $\boldsymbol{\gamma}(a)=\boldsymbol{\gamma}(b)$, e allora non è una curva semplice. Se $\boldsymbol{\gamma}(a)=\boldsymbol{\gamma}(b)$ è l'unico punto del sostegno immagine di due valori diversi del parametro, l'arco si dice chiuso e semplice (o arco di Jordan).

### Parametrizzazioni elementari

Le parametrizzazioni da conoscere a memoria sono le seguenti.

- **Segmento** da $P$ a $Q$: $\boldsymbol{\gamma}(t)=P+\dfrac{t-t_0}{t_1-t_0}(Q-P)$ con $t_0\neq t_1$, che soddisfa $\boldsymbol{\gamma}(t_0)=P$, $\boldsymbol{\gamma}(t_1)=Q$. Con $t_0=0$, $t_1=1$ diventa $\boldsymbol{\gamma}(t)=P+t(Q-P)$, $t\in[0,1]$.
- **Circonferenza** di centro $(x_0,y_0)$ e raggio $r$: $\boldsymbol{\gamma}(t)=(x_0+r\cos t,\;y_0+r\sin t)$, $t\in[0,2\pi]$ (arco chiuso e semplice, antiorario). Con $t\in[0,2k\pi]$, $k\ge2$, la circonferenza è percorsa $k$ volte e l'arco non è semplice. Con $t\in[0,\pi]$ si ha una semicirconferenza, arco semplice non chiuso.
- **Ellisse** $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$: $\boldsymbol{\gamma}(t)=(a\cos t,\,b\sin t)$, $t\in[0,2\pi]$.
- **Spirale**: $\boldsymbol{\gamma}(t)=(t\cos t,\,t\sin t)$, $t\ge0$, semplice, con distanza $t$ dall'origine.
- **Elica circolare**: $\boldsymbol{\gamma}(t)=(\cos t,\sin t,t)$, $t\in\mathbb{R}$, curva semplice.
- **Grafico** di $f:\lbrack a,b\rbrack \to\mathbb{R}$: $\boldsymbol{\gamma}(t)=(t,f(t))$, percorso da sinistra a destra. Il verso opposto si ottiene con $\boldsymbol{\eta}(t)=(a+b-t,\,f(a+b-t))$.

Una curva piana si può dare anche in coordinate polari, $\boldsymbol{\gamma}_p(t)=(r(t),\theta(t))$, che corrisponde a $\boldsymbol{\gamma}(t)=(r(t)\cos\theta(t),\,r(t)\sin\theta(t))$. In $\mathbb{R}^3$ si usano le coordinate cilindriche o sferiche. Ad esempio un meridiano della sfera unitaria è $\boldsymbol{\gamma}_s(t)=(1,t,\theta_0)$, $t\in[0,\pi]$. Per le coordinate si veda [Cambiamenti di variabile e coordinate curvilinee](ref:chapter/3#p6).

### Curve regolari e retta tangente

**Definizione 3.8** (curva regolare). Una curva $\boldsymbol{\gamma}:I\to\mathbb{R}^m$ è **regolare** se è derivabile con derivata continua (le componenti sono $C^1$) e $\boldsymbol{\gamma}'(t)\neq\mathbf{0}$ per ogni $t\in I$. È **regolare a tratti** se $I$ è unione di un numero finito di intervalli su cui $\boldsymbol{\gamma}$ è regolare.

Il vettore $\boldsymbol{\gamma}'(t_0)$ è il limite dei rapporti incrementali $\frac{\boldsymbol{\gamma}(t_0+\Delta t)-\boldsymbol{\gamma}(t_0)}{\Delta t}$ lungo le secanti. Si chiama **vettore tangente** al sostegno in $P_0=\boldsymbol{\gamma}(t_0)$, e la posizione limite delle secanti è la retta tangente.

:::formula{id="3.14" label="Retta tangente a una curva regolare"}
$$T(t)=\boldsymbol{\gamma}(t_0)+\boldsymbol{\gamma}'(t_0)\,(t-t_0),\qquad t\in\mathbb{R}$$
:::

Il vettore tangente dipende dalla parametrizzazione, la retta tangente no. Se $\boldsymbol{\delta}=\boldsymbol{\gamma}\circ\varphi$ con $\varphi$ di classe $C^1$ e $\varphi'\neq0$ (curve congruenti), vale $\boldsymbol{\delta}'(\tau_0)=\boldsymbol{\gamma}'(t_0)\varphi'(\tau_0)$: i vettori sono paralleli e la retta è la stessa. Se $\varphi'>0$ le curve si dicono equivalenti e hanno vettori tangenti con lo stesso verso. Se $\varphi'<0$ si dicono anti-equivalenti e i versi sono opposti. Per una curva regolare e semplice, ogni altra parametrizzazione regolare e semplice dello stesso sostegno è congruente alla prima, quindi ci sono solo due orientazioni possibili.

Il **versore tangente** è $\boldsymbol{\tau}(t)=\boldsymbol{\gamma}'(t)/\|\boldsymbol{\gamma}'(t)\|$.

**Esempio 3.9** (retta tangente a una circonferenza). Sia $C$ la circonferenza di centro $(1,0)$ e raggio $\sqrt2$, parametrizzata da

$$
\boldsymbol{\gamma}(t)=\left(1+\sqrt2\cos t,\;\sqrt2\sin t\right),\qquad t\in[0,2\pi].
$$

Si vuole la retta tangente in $P_0=(0,1)$.

1. Si cerca $t_0$ tale che $\boldsymbol{\gamma}(t_0)=(0,1)$. Dalla prima componente $\cos t_0=-\frac{1}{\sqrt2}$ e dalla seconda $\sin t_0=\frac{1}{\sqrt2}$, quindi $t_0=\frac{3\pi}{4}$.
2. Si calcola $\boldsymbol{\gamma}'(t)=\left(-\sqrt2\sin t,\;\sqrt2\cos t\right)$. Essendo $\|\boldsymbol{\gamma}'\|=\sqrt2\ne0$, la curva è regolare.
3. In $t_0$: $\boldsymbol{\gamma}'\!\left(\tfrac{3\pi}{4}\right)=(-1,-1)$.
4. La retta è $T(t)=(0,1)+(-1,-1)\left(t-\tfrac{3\pi}{4}\right)$, cioè la retta $y=1+x$.

La stessa circonferenza è percorsa in verso orario da $\widetilde{\boldsymbol{\gamma}}(t)=(1+\sqrt2\cos2t,\,-\sqrt2\sin2t)$, $t\in[0,\pi]$. Il punto $P_0$ corrisponde a $\widetilde t_0=\frac{5\pi}{8}$, dove il vettore tangente è $\widetilde{\boldsymbol{\gamma}}'(\widetilde t_0)=(2,2)$. Il vettore è diverso, ma la retta tangente è la stessa $y=1+x$.

:::image{src="assets/b04b505f-circonferenza-retta-tangente.svg" alt="Circonferenza di centro (1,0) e raggio radice di 2 con la retta tangente y = 1 + x nel punto (0,1)" caption="Fig. 3.2 — La circonferenza di centro (1,0) e raggio √2 e la sua tangente y = 1 + x nel punto P0 = (0,1): la retta tocca la curva in un solo punto, con direzione (1,1)."}
:::

**Errore tipico 3.6.** Omettere la traslazione $t-t_0$ quando si vuole che il parametro $t_0$ corrisponda al punto di tangenza: senza traslazione si descrive la stessa retta, ma il punto di tangenza corrisponde al parametro $0$. Oppure calcolare $\boldsymbol{\gamma}'$ nel punto $P_0$ invece che nel valore $t_0$ del parametro. Bisogna prima trovare $t_0$ risolvendo $\boldsymbol{\gamma}(t_0)=P_0$ e poi derivare in $t_0$.

### Regolarità: dove si rompe

La regolarità riguarda la parametrizzazione, non il sostegno. Le curve $\boldsymbol{\gamma}(t)=(t,t)$ e $\boldsymbol{\eta}(t)=(t^3,t^3)$ hanno lo stesso sostegno, la retta $y=x$. La prima è regolare, perché $\boldsymbol{\gamma}'=(1,1)$. La seconda no, perché $\boldsymbol{\eta}'(t)=(3t^2,3t^2)$ si annulla in $t=0$.

Per una curva definita a pezzi, come $\boldsymbol{\gamma}(t)=(\alpha t,t^3,0)$ per $t<0$ e $(\alpha^2 t,0,t^3)$ per $t\ge0$ (con $\alpha$ parametro), occorre che le derivate destra e sinistra in $t=0$ coincidano e siano non nulle: ciò avviene solo per $\alpha=1$. Un arco con un punto angoloso, come una poligonale, è invece regolare a tratti.

### Lunghezza di un arco

:::formula{id="3.15" label="Lunghezza di un arco regolare"}
$$\ell(\boldsymbol{\gamma})=\int_a^b\|\boldsymbol{\gamma}'(t)\|\,dt=\int_a^b\sqrt{\sum_{i=1}^m\bigl(x_i'(t)\bigr)^2}\,dt$$
:::

 La definizione è giustificata dall'approssimazione con poligonali inscritte: la lunghezza della poligonale con vertici $P_k=\boldsymbol{\gamma}(t_k)$ è $\sum_k\|P_k-P_{k-1}\|$, e $\|P_k-P_{k-1}\|\approx\|\boldsymbol{\gamma}'(t_k)\|\Delta t_k$. Per una curva regolare a tratti si somma la lunghezza dei tratti. Per il grafico di $f$, parametrizzato da $(t,f(t))$, la formula diventa $\int_a^b\sqrt{1+f'(t)^2}\,dt$.

**Esempio 3.10** (un giro di elica). Si calcola la lunghezza di $\boldsymbol{\gamma}(t)=(\cos t,\sin t,t)$, $t\in[0,2\pi]$.

1. Si deriva: $\boldsymbol{\gamma}'(t)=(-\sin t,\cos t,1)$.
2. Si calcola la norma: $\|\boldsymbol{\gamma}'(t)\|=\sqrt{\sin^2t+\cos^2t+1}=\sqrt2$, costante.
3. Si integra: $\ell(\boldsymbol{\gamma})=\int_0^{2\pi}\sqrt2\,dt=2\sqrt2\,\pi$.

**Errore tipico 3.7.** Integrare $\boldsymbol{\gamma}'(t)$ o le sue componenti anziché la norma $\|\boldsymbol{\gamma}'(t)\|$. Un'altra svista frequente è dimenticare che la lunghezza dipende dall'intervallo del parametro: se $\boldsymbol{\gamma}(t)=(\cos t,\sin t)$ è percorsa su $\lbrack 0,4\pi\rbrack $, la formula restituisce $4\pi$, cioè il doppio della circonferenza, perché il sostegno è percorso due volte.

La lunghezza non cambia per curve congruenti: se $\boldsymbol{\delta}(\tau)=\boldsymbol{\gamma}(\varphi(\tau))$, allora $\|\boldsymbol{\delta}'(\tau)\|=\|\boldsymbol{\gamma}'(\varphi(\tau))\|\,|\varphi'(\tau)|$. Applicando la sostituzione $t=\varphi(\tau)$ nell'integrale e riordinando gli estremi se $\varphi$ è decrescente, si ottiene la stessa lunghezza. L'integrale $\int_\gamma f\,ds$ di una funzione lungo la curva si studia in [Integrali curvilinei e lunghezza](ref:chapter/5#p2).

## p6 | Cambiamenti di variabile e coordinate curvilinee

### Cambiamenti di variabile

Passare da coordinate cartesiane a coordinate adatte alla simmetria del problema (un disco, un cilindro, una sfera) semplifica sia le funzioni sia i domini. Serve una trasformazione $\mathbf{\Phi}$ invertibile e derivabile, la cui matrice jacobiana (si veda [Matrice jacobiana e differenziabilità](ref:chapter/3#p2)) controlla come cambiano le derivate e, nelle sezioni sugli integrali multipli, le misure.

**Definizione 3.9** (cambiamento di variabile). Siano $R'$ e $R$ regioni di $\mathbb{R}^n$, con $A'$ l'interno di $R'$. Un campo vettoriale $\mathbf{\Phi}: R' \to R$ definisce un cambiamento di variabile, o di coordinate, in $R$ se:

1. $\mathbf{\Phi}$ è una biiezione tra $R'$ e $R$;
2. $\mathbf{\Phi}$ è di classe $C^1$ in $A'$;
3. $\mathbf{\Phi}$ è regolare in $A'$, cioè $J\mathbf{\Phi}(\mathbf{u})$ è non singolare, ossia $\det J\mathbf{\Phi}(\mathbf{u}) \neq 0$, in ogni punto $\mathbf{u}\in A'$.

L'immagine $A=\mathbf{\Phi}(A')$ è un aperto contenuto nell'interno di $R$.

Se $\mathbf{x}_0=\mathbf{\Phi}(\mathbf{u}_0)$, le componenti di $\mathbf{u}_0$ si dicono **coordinate curvilinee** di $\mathbf{x}_0$. Fissando tutte le coordinate tranne la $i$-esima si ottengono le **linee coordinate**, curve di sostegno $\{\mathbf{\Phi}(\mathbf{u}_0+t\mathbf{e}_i)\}$ passanti per $\mathbf{x}_0$.

I loro vettori tangenti sono le **colonne** della jacobiana,

$$
\boldsymbol{\tau}_i=\frac{\partial \mathbf{\Phi}}{\partial u_i}(\mathbf{u}_0),
$$

mentre le righe sono i gradienti delle componenti di $\mathbf{\Phi}$. Per la regolarità i $\boldsymbol{\tau}_i$ sono indipendenti e formano una base di $\mathbb{R}^n$. Il cambiamento si dice **ortogonale** se questi vettori sono a due a due ortogonali, cioè se $J\mathbf{\Phi}^{T}J\mathbf{\Phi}$ è diagonale.

Poiché $\det J\mathbf{\Phi}$ è continuo e non nullo su un aperto connesso, ha segno costante. Il cambiamento si dice **destrorso** se $\det J\mathbf{\Phi}>0$, **sinistrorso** se $\det J\mathbf{\Phi}<0$. Un esempio è il cambiamento affine $\mathbf{x}=A\mathbf{u}+\mathbf{b}$ con $A$ non singolare, in cui $J\mathbf{\Phi}=A$.

### Legame tra le derivate

Sia $f$ differenziabile e sia $\tilde f=f\circ\mathbf{\Phi}$. Per la regola della catena {{formula:3.11}} si ha, con $\mathbf{x}_0=\mathbf{\Phi}(\mathbf{u}_0)$,

$$
\nabla\tilde f(\mathbf{u}_0)=\nabla f(\mathbf{x}_0)\,J\mathbf{\Phi}(\mathbf{u}_0),
$$

e, con $\mathbf{\Psi}=\mathbf{\Phi}^{-1}$, la relazione inversa $\nabla f(\mathbf{x}_0)=\nabla\tilde f(\mathbf{u}_0)\,J\mathbf{\Psi}(\mathbf{x}_0)$.

### Coordinate polari

:::formula{id="3.16" label="Coordinate polari"}
$$\mathbf{\Phi}(r,\theta)=(x,y)=(r\cos\theta,\ r\sin\theta),\qquad r\ge 0$$
:::

 La jacobiana e il suo determinante sono

:::formula{id="3.17" label="Jacobiana delle coordinate polari"}
$$J\mathbf{\Phi}(r,\theta)=\begin{pmatrix}\cos\theta & -r\sin\theta\\ \sin\theta & r\cos\theta\end{pmatrix},\qquad \det J\mathbf{\Phi}(r,\theta)=r$$
:::

Il determinante $r$ è strettamente positivo per $r>0$, quindi per $r>0$ la trasformazione è regolare e destrorsa. La biiettività richiede però di restringere l'angolo, per esempio a $\theta\in(-\pi,\pi\rbrack $ o $\theta\in\lbrack 0,2\pi)$, e di escludere l'origine, dove $\det J\mathbf{\Phi}=0$ e $\theta$ non è definito. I versori tangenti alle linee coordinate sono

$$
\mathbf{t}_r=(\cos\theta,\sin\theta),\qquad \mathbf{t}_\theta=(-\sin\theta,\cos\theta),
$$

ortogonali tra loro, quindi il cambiamento è ortogonale.

Per $f$ differenziabile e $\tilde f(r,\theta)=f(r\cos\theta,r\sin\theta)$, la regola della catena dà

:::formula{id="3.18" label="Derivate in coordinate polari"}
$$\frac{\partial f}{\partial r}=\cos\theta\,\frac{\partial f}{\partial x}+\sin\theta\,\frac{\partial f}{\partial y},\qquad
\frac{\partial f}{\partial\theta}=-r\sin\theta\,\frac{\partial f}{\partial x}+r\cos\theta\,\frac{\partial f}{\partial y}$$
:::

e, invertendo,

$$
\frac{\partial f}{\partial x}=\cos\theta\,\frac{\partial f}{\partial r}-\frac{\sin\theta}{r}\frac{\partial f}{\partial \theta},\qquad
\frac{\partial f}{\partial y}=\sin\theta\,\frac{\partial f}{\partial r}+\frac{\cos\theta}{r}\frac{\partial f}{\partial \theta}.
$$

**Esempio 3.11.** Sia $f(x,y)=x^2+3y$. Con la {{formula:3.18}}:

$$
\frac{\partial f}{\partial r}=2x\cos\theta+3\sin\theta=2r\cos^2\theta+3\sin\theta.
$$

Verifica diretta: $\tilde f(r,\theta)=r^2\cos^2\theta+3r\sin\theta$, da cui $\tilde f_r=2r\cos^2\theta+3\sin\theta$, in accordo. Analogamente

$$
\tilde f_\theta=-r\sin\theta\cdot 2x+r\cos\theta\cdot 3=-2r^2\sin\theta\cos\theta+3r\cos\theta,
$$

che coincide con la derivata diretta di $\tilde f$ rispetto a $\theta$.

### Coordinate cilindriche

:::formula{id="3.19" label="Coordinate cilindriche"}
$$\mathbf{\Phi}(r,\theta,t)=(x,y,z)=(r\cos\theta,\ r\sin\theta,\ t)$$
:::

Si aggiunge semplicemente la quota $z=t$:

$$
J\mathbf{\Phi}(r,\theta,t)=\begin{pmatrix}\cos\theta & -r\sin\theta & 0\\ \sin\theta & r\cos\theta & 0\\ 0&0&1\end{pmatrix},\qquad \det J\mathbf{\Phi}=r.
$$

Si ha $J\mathbf{\Phi}^{T}J\mathbf{\Phi}=\operatorname{diag}(1,r^2,1)$, quindi il cambiamento è ortogonale e destrorso su $(0,+\infty)\times(-\pi,\pi)\times\mathbb{R}$. L'immagine di questo aperto è $\mathbb{R}^3$ privato del semipiano $\{y=0,\ x\le 0\}$.

### Coordinate sferiche

Qui $\varphi\in[0,\pi]$ è la colatitudine (angolo con l'asse $z$) e $\theta$ la longitudine. Alcuni testi scambiano i due simboli: occorre controllare sempre la convenzione.

:::formula{id="3.20" label="Coordinate sferiche"}
$$\mathbf{\Phi}(r,\varphi,\theta)=(x,y,z)=(r\sin\varphi\cos\theta,\ r\sin\varphi\sin\theta,\ r\cos\varphi)$$
:::

Le linee coordinate sono le semirette uscenti dall'origine ($r$ variabile), i meridiani ($\varphi$ variabile) e i paralleli ($\theta$ variabile). I versori tangenti sono

$$
\mathbf{t}_r=(\sin\varphi\cos\theta,\sin\varphi\sin\theta,\cos\varphi),\quad
\mathbf{t}_\varphi=(\cos\varphi\cos\theta,\cos\varphi\sin\theta,-\sin\varphi),\quad
\mathbf{t}_\theta=(-\sin\theta,\cos\theta,0).
$$

:::image{src="assets/95e50041-coordinate-sferiche-schema.svg" alt="Coordinate sferiche r, phi, theta di un punto P nello spazio" caption="Fig. 3.3 — Coordinate sferiche: r è la distanza dall'origine, phi l'angolo con l'asse z (colatitudine), theta l'angolo della proiezione di P sul piano xy con l'asse x (longitudine)."}
:::

**Esempio 3.12** (jacobiano sferico). Le colonne di $J\mathbf{\Phi}$ sono

$$
\frac{\partial\mathbf{\Phi}}{\partial r}=\begin{pmatrix}\sin\varphi\cos\theta\\ \sin\varphi\sin\theta\\ \cos\varphi\end{pmatrix},\
\frac{\partial\mathbf{\Phi}}{\partial \varphi}=\begin{pmatrix}r\cos\varphi\cos\theta\\ r\cos\varphi\sin\theta\\ -r\sin\varphi\end{pmatrix},\
\frac{\partial\mathbf{\Phi}}{\partial \theta}=\begin{pmatrix}-r\sin\varphi\sin\theta\\ r\sin\varphi\cos\theta\\ 0\end{pmatrix}.
$$

Sviluppando il determinante lungo la terza riga, che contiene $\cos\varphi$, $-r\sin\varphi$ e $0$:

$$
\det J\mathbf{\Phi}=\cos\varphi\cdot\bigl(r^2\sin\varphi\cos\varphi\bigr)-(-r\sin\varphi)\cdot\bigl(r\sin^2\varphi\bigr)=r^2\sin\varphi\,(\cos^2\varphi+\sin^2\varphi).
$$

Qui si sono usati $\cos^2\theta+\sin^2\theta=1$ nei due minori. Il risultato è

:::formula{id="3.21" label="Determinante jacobiano sferico"}
$$\det J\mathbf{\Phi}(r,\varphi,\theta)=r^2\sin\varphi$$
:::

 Poiché $\sin\varphi>0$ per $\varphi\in(0,\pi)$, il determinante è positivo per $r>0$ e $\varphi\in(0,\pi)$. Si annulla sull'asse $z$ ($\varphi=0,\pi$) e nell'origine, dove la trasformazione non è regolare.

**Errore tipico 3.8.** Dimenticare il fattore $r$ (polari e cilindriche) o $r^2\sin\varphi$ (sferiche) nel determinante, oppure scrivere $\sin\theta$ al posto di $\sin\varphi$ perché si è assunta la convenzione opposta per gli angoli. Un controllo rapido: il determinante deve annullarsi proprio dove la trasformazione degenera, cioè per $r=0$ e, in coordinate sferiche, sull'asse $z$, dove $\sin\varphi=0$.

**Errore tipico 3.9.** Nelle formule delle derivate, scambiare righe e colonne della jacobiana, oppure scrivere $\partial f/\partial x=\cos\theta\,\partial f/\partial r$ trascurando il termine $-\frac{\sin\theta}{r}\,\partial f/\partial\theta$. Anche il segno e il fattore $1/r$ nella {{formula:3.18}} invertita vengono spesso persi: va verificato che il prodotto $J\mathbf{\Phi}^{-1}J\mathbf{\Phi}$ dia l'identità.

L'uso del determinante jacobiano per trasformare gli integrali è trattato in [Cambiamento di variabile negli integrali doppi](ref:chapter/4#p4) e in [Integrali tripli](ref:chapter/4#p5).

## p7 | Superfici in ℝ³

Una superficie in $\mathbb{R}^3$ è l'analogo bidimensionale di una curva: si descrive con due parametri $(u,v)$ invece di uno. Come la retta tangente a una curva si ottiene dal vettore $\boldsymbol{\gamma}'$, il piano tangente a una superficie si ottiene dalle due derivate parziali di $\boldsymbol{\sigma}$. Il vettore normale, che serve a orientare la superficie e a calcolarne i flussi, nasce da queste stesse derivate. Per le curve si veda [Curve in $\mathbb{R}^m$](ref:chapter/3#p5).

### Superfici, sostegno e parametrizzazioni elementari

**Definizione 3.10** (superficie, sostegno, calotta). Sia $R\subseteq\mathbb{R}^2$ una regione. Una funzione continua $\boldsymbol{\sigma}:R\to\mathbb{R}^3$ si dice **superficie**. L'immagine $\Sigma=\boldsymbol{\sigma}(R)$ è il **sostegno**. Si scrive $\boldsymbol{\sigma}(u,v)=\bigl(x(u,v),y(u,v),z(u,v)\bigr)$. La superficie è **semplice** se $\boldsymbol{\sigma}$ è iniettiva nell'interno $\mathring{R}$. È una **calotta** se $R$ è compatta: la calotta è per le superfici ciò che l'arco è per le curve.

Come per le curve, si usa lo stesso nome $\Sigma$ per il sostegno, e $\boldsymbol{\sigma}$ ne è una *parametrizzazione*. Ecco le parametrizzazioni da sapere a memoria.

**Piano.** Se $\mathbf{a}\wedge\mathbf{b}\neq\mathbf{0}$, la funzione $\boldsymbol{\sigma}(u,v)=\mathbf{a}u+\mathbf{b}v+\mathbf{c}$ parametrizza il piano per $\mathbf{c}$ parallelo ad $\mathbf{a}$ e $\mathbf{b}$. La sua equazione cartesiana è $(\mathbf{a}\wedge\mathbf{b})\cdot\mathbf{x}=(\mathbf{a}\wedge\mathbf{b})\cdot\mathbf{c}$.

**Superficie cartesiana.** Il grafico di una funzione continua $\varphi:R\to\mathbb{R}$ è il sostegno di

:::formula{id="3.22" label="Superficie cartesiana (topografica)"}
$$\boldsymbol{\sigma}(u,v)=u\,\mathbf{i}+v\,\mathbf{j}+\varphi(u,v)\,\mathbf{k}$$
:::

Si parla di superficie cartesiana rispetto all'asse $z$. Per gli assi $x$ o $y$ si permutano le componenti $u$, $v$, $\varphi(u,v)$. Ad esempio, $\boldsymbol{\sigma}(u,v)=u\mathbf{i}+v\mathbf{j}+\sqrt{1-u^2-v^2}\,\mathbf{k}$ su $u^2+v^2\le 1$ ha come sostegno l'emisfero superiore della sfera unitaria.

**Superficie di rotazione.** Sia $\boldsymbol{\gamma}(t)=(\gamma_1(t),0,\gamma_3(t))$, con $\gamma_1\ge0$, una curva nel semipiano $xz$ con $x\ge 0$. Ruotandola attorno all'asse $z$ si ottiene

:::formula{id="3.23" label="Superficie di rotazione attorno all'asse z"}
$$\boldsymbol{\sigma}(u,v)=\gamma_1(u)\cos v\,\mathbf{i}+\gamma_1(u)\sin v\,\mathbf{j}+\gamma_3(u)\,\mathbf{k},\qquad (u,v)\in I\times[0,2\pi]$$
:::

L'arco generatore si chiama **arco meridiano**. In coordinate cilindriche ([Cambiamenti di variabile e coordinate curvilinee](ref:chapter/3#p6)) la stessa superficie è $\boldsymbol{\sigma}_c(u,v)=(\gamma_1(u),v,\gamma_3(u))$.

:::image{src="assets/5f1ffe06-superficie-rotazione-meridiano.svg" alt="Superficie di rotazione attorno all'asse z generata da un arco meridiano" caption="Fig. 3.4 — Un arco meridiano nel semipiano xz ruota attorno all'asse z: il punto γ1(u), 0, γ3(u) descrive una circonferenza di raggio γ1(u) a quota γ3(u)."}
:::

**Sfera.** La funzione

:::formula{id="3.24" label="Superficie sferica"}
$$\boldsymbol{\sigma}(u,v)=\bigl(x_0+r\sin u\cos v,\;y_0+r\sin u\sin v,\;z_0+r\cos u\bigr),\qquad (u,v)\in[0,\pi]\times[0,2\pi]$$
:::

è una calotta il cui sostegno è la sfera di centro $\mathbf{x}_0=(x_0,y_0,z_0)$ e raggio $r>0$. Sono le coordinate sferiche $(r,\varphi,\theta)$ con $r$ fisso, $u=\varphi$ colatitudine e $v=\theta$ longitudine. Per l'ellissoide di semiassi $a,b,c$ si sostituiscono $r\sin u\cos v$, $r\sin u\sin v$, $r\cos u$ con $a\sin u\cos v$, $b\sin u\sin v$, $c\cos u$.

**Cilindro.** La superficie laterale del cilindro $x^2+y^2=R^2$ ha parametrizzazione (in coordinate cartesiane)

:::formula{id="3.25" label="Superficie cilindrica"}
$$\boldsymbol{\sigma}(u,v)=(R\cos u,\;R\sin u,\;v),\qquad (u,v)\in[0,2\pi]\times\mathbb{R}$$
:::

In coordinate cilindriche essa si scrive $(r,\theta,z)=(R,u,v)$.

### Superfici regolari

**Definizione 3.11** (superficie regolare). Una superficie $\boldsymbol{\sigma}:R\to\mathbb{R}^3$ è **regolare** se è di classe $C^1$ su $A=\mathring{R}$ e la matrice jacobiana $J\boldsymbol{\sigma}$ ha rango massimo ($=2$) in ogni punto di $A$. Una calotta è regolare se è la restrizione a $R$ di una superficie regolare definita su un aperto contenente $R$.

Le colonne di $J\boldsymbol{\sigma}$ (si veda {{formula:3.1}}) sono $\boldsymbol{\sigma}_u$ e $\boldsymbol{\sigma}_v$. Il rango $2$ equivale quindi alla loro indipendenza lineare in ogni punto, cioè a $\boldsymbol{\sigma}_u\wedge\boldsymbol{\sigma}_v\neq\mathbf{0}$.

La superficie cartesiana {{formula:3.22}} è regolare se e solo se $\varphi\in C^1(A)$: infatti

$$
J\boldsymbol{\sigma}=\begin{pmatrix}1&0\\0&1\\ \varphi_u&\varphi_v\end{pmatrix}
$$

ha rango $2$ già per le prime due righe.

**Esempio 3.13** (superficie non regolare). La funzione $\boldsymbol{\sigma}(u,v)=(u\cos v,u\sin v,u)$ parametrizza il cono $x^2+y^2=z^2$. Si ha

$$
J\boldsymbol{\sigma}=\begin{pmatrix}\cos v&-u\sin v\\ \sin v&u\cos v\\ 1&0\end{pmatrix},
$$

i cui minori $2\times 2$ valgono $u$, $u\sin v$, $-u\cos v$. Per $u=0$ (il vertice) si annullano tutti: la parametrizzazione non è regolare in quel punto.

Una parametrizzazione regolare e semplice dà una superficie *regolare e semplice* $\Sigma$. Per i solidi con spigoli (cubo, cono troncato) serve di più: $\Sigma$ è **regolare a pezzi** se è unione finita di superfici regolari e semplici $\Sigma_1,\dots,\Sigma_K$ (le **facce**) che si incontrano solo lungo curve, gli **spigoli**.

### Vettore normale e piano tangente

**Definizione 3.12** (vettore normale). Per una superficie regolare, il **vettore normale** in $P_0=\boldsymbol{\sigma}(u_0,v_0)$ è

:::formula{id="3.26" label="Vettore normale a una superficie"}
$$\boldsymbol{\nu}(u_0,v_0)=\frac{\partial\boldsymbol{\sigma}}{\partial u}(u_0,v_0)\wedge\frac{\partial\boldsymbol{\sigma}}{\partial v}(u_0,v_0)$$
:::

Il **versore normale** è $\mathbf{n}=\boldsymbol{\nu}/\|\boldsymbol{\nu}\|$. Per la regolarità $\boldsymbol{\nu}\neq\mathbf{0}$. Il prodotto vettoriale [(1.2)](ref:formula/1.2) è ortogonale a $\boldsymbol{\sigma}_u$ e $\boldsymbol{\sigma}_v$, perciò $\boldsymbol{\nu}$ è ortogonale al piano tangente.

Le curve coordinate $u\mapsto\boldsymbol{\sigma}(u,v_0)$ e $v\mapsto\boldsymbol{\sigma}(u_0,v)$ giacciono su $\Sigma$ e hanno in $P_0$ tangenti $\boldsymbol{\sigma}_u$ e $\boldsymbol{\sigma}_v$. Il **piano tangente** in $P_0$ è il piano per $P_0$ generato da questi due vettori. Contiene la tangente a ogni curva regolare di $\Sigma$ passante per $P_0$. La sua equazione è

:::formula{id="3.27" label="Piano tangente a una superficie parametrica"}
$$\boldsymbol{\nu}(u_0,v_0)\cdot(\mathbf{x}-P_0)=0$$
:::

:::image{src="assets/5f1ffe06-superficie-piano-tangente.svg" alt="Piano tangente a una superficie in un punto con i vettori sigma_u, sigma_v e la normale" caption="Fig. 3.5 — In P0 i vettori σu e σv generano il piano tangente; la normale ν = σu ∧ σv è ortogonale al piano."}
:::

**Caso cartesiano.** Per $\boldsymbol{\sigma}=(u,v,\varphi(u,v))$ si ha $\boldsymbol{\sigma}_u=(1,0,\varphi_u)$, $\boldsymbol{\sigma}_v=(0,1,\varphi_v)$ e

:::formula{id="3.28" label="Normale a una superficie cartesiana"}
$$\boldsymbol{\nu}(u,v)=-\varphi_u(u,v)\,\mathbf{i}-\varphi_v(u,v)\,\mathbf{j}+\mathbf{k}$$
:::

Poiché $\boldsymbol{\nu}\cdot\mathbf{k}=1>0$, punta sempre verso l'alto. Sostituendo in {{formula:3.27}} si ritrova $z-z_0=\varphi_u(x-x_0)+\varphi_v(y-y_0)$, cioè il piano tangente al grafico [(2.7)](ref:formula/2.7) già visto per le funzioni scalari.

**Sfera.** Per la sfera di raggio $r$ centrata nell'origine, con {{formula:3.24}} si ottiene $\boldsymbol{\nu}(u,v)=r\sin u\,\mathbf{x}$ con $\mathbf{x}=\boldsymbol{\sigma}(u,v)$. Per $u\in(0,\pi)$ il coefficiente $r\sin u$ è positivo, quindi $\boldsymbol{\nu}$ è diretto lungo il raggio uscente.

**Cilindro.** Con {{formula:3.25}} si ha $\boldsymbol{\sigma}_u=(-R\sin u,R\cos u,0)$, $\boldsymbol{\sigma}_v=(0,0,1)$ e quindi $\boldsymbol{\nu}=R(\cos u,\sin u,0)$, uscente.

**Esempio svolto 3.14** (superficie di rotazione). Si ruoti attorno all'asse $z$ l'arco $\boldsymbol{\gamma}(t)=(4-t^2,0,t)$, $t\in[-1,1]$. Si vogliono la normale e il piano tangente nel punto $P_0=(0,4,0)$.

1. Parametrizzazione, da {{formula:3.23}} con $\gamma_1(u)=4-u^2$ e $\gamma_3(u)=u$:
$\displaystyle \boldsymbol{\sigma}(u,v)=\bigl((4-u^2)\cos v,\;(4-u^2)\sin v,\;u\bigr),\quad (u,v)\in[-1,1]\times[0,2\pi].$
2. Derivate parziali:
$\displaystyle \boldsymbol{\sigma}_u=(-2u\cos v,\,-2u\sin v,\,1),\qquad \boldsymbol{\sigma}_v=\bigl(-(4-u^2)\sin v,\,(4-u^2)\cos v,\,0\bigr).$
3. Prodotto vettoriale. La prima componente è $\sigma_{u,2}\sigma_{v,3}-\sigma_{u,3}\sigma_{v,2}=-(4-u^2)\cos v$, la seconda è $-(4-u^2)\sin v$, la terza è $-2u(4-u^2)(\cos^2 v+\sin^2 v)$. Dunque
$\displaystyle \boldsymbol{\nu}(u,v)=-(4-u^2)\,(\cos v,\;\sin v,\;2u).$
Poiché $4-u^2\ge3$, si ha $\boldsymbol{\nu}\neq\mathbf{0}$ e la parametrizzazione è regolare.
4. Il punto $P_0=(0,4,0)$ corrisponde a $4-u^2=4$, $u=0$, $v=\pi/2$. Quindi $\boldsymbol{\nu}(0,\pi/2)=-4(0,1,0)=(0,-4,0)$.
5. Piano tangente: $(0,-4,0)\cdot(x,\,y-4,\,z)=0$, cioè $y=4$. Il risultato è coerente: a quota $0$ la superficie è la circonferenza di raggio $4$, tangente in $(0,4,0)$ alla retta $y=4$, e il piano contiene anche la direzione $z$.

**Errore tipico 3.10.** Si scambia l'ordine dei fattori in $\boldsymbol{\sigma}_u\wedge\boldsymbol{\sigma}_v$ e si ottiene la normale opposta: $\boldsymbol{\sigma}_v\wedge\boldsymbol{\sigma}_u=-\boldsymbol{\nu}$. Nell'esempio, il verso dipende dall'ordine in cui si sono scelti i parametri. Un secondo errore è usare $\boldsymbol{\nu}$ come se fosse un versore: il suo modulo non vale $1$ (qui vale $(4-u^2)\sqrt{1+4u^2}$). Un terzo è dimenticare di valutare $\boldsymbol{\nu}$ in $(u_0,v_0)$ prima di scrivere il piano.

### Cambi di parametrizzazione

Se $\tilde{\boldsymbol{\sigma}}=\boldsymbol{\sigma}\circ\Phi$ con $\Phi$ cambiamento di variabile, $\tilde{\boldsymbol{\sigma}}$ è una parametrizzazione **congruente** a $\boldsymbol{\sigma}$. Se $\det J\Phi>0$ la parametrizzazione è **equivalente**, se $\det J\Phi<0$ è **anti-equivalente**. Il piano tangente non cambia ({{formula:3.27}} dà lo stesso piano), così come la direzione di $\boldsymbol{\nu}$. Modulo e verso dipendono invece dalla parametrizzazione. Il versore $\mathbf{n}$ resta lo stesso per parametrizzazioni equivalenti e cambia segno per quelle anti-equivalenti.

### Orientabilità

**Definizione 3.13** (superficie orientabile). Una superficie regolare e semplice $\Sigma\subseteq\mathbb{R}^3$ è **orientabile** se due qualunque sue parametrizzazioni regolari e semplici sono congruenti. In tal caso si possono scegliere due orientazioni, cioè due versi di attraversamento, corrispondenti ai due versi di $\mathbf{n}$: le parametrizzazioni equivalenti hanno la stessa orientazione, quelle anti-equivalenti l'opposta.

Una superficie regolare e semplice parametrizzabile su una regione aperta $R$ del piano è sempre orientabile. Su regioni non aperte la situazione è più delicata.

**Proposizione 3.1.** Se $\Omega\subseteq\mathbb{R}^3$ è un aperto connesso e limitato con frontiera regolare e localmente da un solo lato della frontiera, ogni superficie (o calotta) regolare e semplice contenuta in una porzione regolare di $\partial\Omega$ è orientabile. Su $\Sigma$ si può scegliere il versore normale **uscente** da $\Omega$ oppure **entrante** in $\Omega$. Così, sfere, ellissoidi, cilindri e coni sono orientabili.

Il nastro di Möbius è il tipico controesempio: percorrendo un giro lungo l'anello senza attraversare il bordo, il vettore normale ritorna nel punto di partenza con verso opposto. Ha una sola faccia e un solo bordo.

### Bordo e superfici chiuse

Sia $\Sigma$ regolare e semplice, con $\Sigma=\bar\Sigma$ (insieme chiuso di $\mathbb{R}^3$), e sia $\boldsymbol{\sigma}:R\to\Sigma$ una parametrizzazione. Si pone $\partial\Sigma_{\boldsymbol{\sigma}}=\Sigma\setminus\boldsymbol{\sigma}(\mathring{R})$. Questo insieme può contenere punti che dipendono solo dalla parametrizzazione scelta, per questo il **bordo** intrinseco si definisce come l'intersezione

$$\partial\Sigma=\bigcap_{\boldsymbol{\sigma}}\partial\Sigma_{\boldsymbol{\sigma}}$$

su tutte le parametrizzazioni $\boldsymbol{\sigma}$, anche non regolari. Per le superfici interviene il bordo, non la frontiera come sottoinsieme di $\mathbb{R}^3$.

**Esempio 3.15.** Con {{formula:3.24}} su $\lbrack 0,\pi\rbrack \times[0,2\pi]$, l'insieme $\Sigma\setminus\boldsymbol{\sigma}(\mathring{R})$ contiene il semicerchio meridiano $v=0$ e i poli, che sono punti "di bordo" solo per quella parametrizzazione. Ruotando il meridiano di partenza si ottiene un'altra parametrizzazione e l'intersezione è vuota: la sfera non ha bordo. L'emisfero $z=\sqrt{1-u^2-v^2}$ ha invece come bordo la circonferenza $x^2+y^2=1$, $z=0$. La superficie laterale del cilindro con $0\le z\le h$ ha per bordo le due circonferenze di base.

Una superficie regolare e semplice $\Sigma$ si dice **chiusa** se è limitata e senza bordo, come la sfera.

**Errore tipico 3.11.** Si dichiara che una superficie "ha bordo" perché la regione $R$ dei parametri è un rettangolo con lati. Il bordo è un oggetto geometrico di $\Sigma$: nella sfera i lati $v=0$ e $v=2\pi$ coincidono, e i lati $u=0$, $u=\pi$ si riducono ai poli, quindi non c'è nessun bordo.
