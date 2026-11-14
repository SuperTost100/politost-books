---
chapter: 8
title: Serie di Fourier
---

## p1 | Introduzione

Le serie di Fourier permettono di descrivere funzioni periodiche come sovrapposizioni di oscillazioni elementari. Sono uno strumento centrale per riconoscere la struttura di un segnale, approssimare funzioni e capire in quale senso una successione di approssimazioni ne recupera i valori. La distinzione tra convergenza quadratica, puntuale e uniforme chiarisce perché la serie possa comportarsi diversamente nei punti di continuità e di discontinuità, e il fenomeno di Gibbs mostra i limiti delle approssimazioni vicino ai salti.

Per affrontare il capitolo serve familiarità con le serie di funzioni e di potenze, in particolare con le somme parziali e con le nozioni di convergenza. È utile saper integrare funzioni trigonometriche e riconoscere la parità: queste idee semplificano il calcolo dei coefficienti e rendono più leggibili gli esempi. Il capitolo introduce anche la forma esponenziale complessa, mantenendo il collegamento con i coefficienti reali.

Al termine saprai calcolare i coefficienti e le somme parziali di una serie di Fourier, anche per funzioni definite su un intervallo e poi prolungate periodicamente. Saprai stabilire la somma della serie nei punti rilevanti, applicare l’identità di Parseval per ricavare somme numeriche e valutare quando si può derivare termine a termine. Potrai inoltre collegare la regolarità della funzione al decadimento dei coefficienti e alla rapidità dell’approssimazione.

## p2 | Polinomi trigonometrici e coefficienti di Fourier

Una funzione periodica che compare nelle applicazioni (un segnale, un'onda) si vuole spesso scrivere come sovrapposizione di oscillazioni sinusoidali semplici. Questa sezione fissa i mattoni di tale scrittura, cioè i polinomi trigonometrici, e spiega come si calcolano i coefficienti con cui compaiono: le relazioni di ortogonalità sono lo strumento che lo permette, e parità e disparità ne dimezzano il lavoro. La serie vera e propria, con il problema della convergenza, è trattata in [Serie di Fourier: definizione ed esempi](ref:chapter/8#p3) e in [Convergenza delle serie di Fourier](ref:chapter/8#p5).

### Funzioni periodiche e polinomi trigonometrici

**Definizione 8.1** (funzione periodica). Una funzione $f : \mathbb{R} \to \mathbb{R}$ si dice periodica di periodo $T>0$ se $f(x+T)=f(x)$ per ogni $x\in\mathbb{R}$. Il più piccolo $T$ con questa proprietà, se esiste, è il periodo minimo.

Se $f$ ha periodo $T$ ha anche periodo $kT$, con $k\in\mathbb{N}\setminus\{0\}$. Una funzione periodica è nota quando la si conosce su un qualunque intervallo di ampiezza $T$, di solito $\lbrack 0,T)$ oppure $\lbrack -T/2,T/2)$.

L'oscillazione più semplice è l'**armonica elementare** $f(x)=a\sin(\omega x+\phi)$: $a$ è l'ampiezza, $\phi$ la fase, $\omega$ la pulsazione e il periodo minimo è $2\pi/\omega$. Nel seguito si lavora con periodo $2\pi$; il caso di periodo qualunque si riconduce a questo con un cambio di variabile (si veda la sezione [Serie di Fourier: definizione ed esempi](ref:chapter/8#p3)). Sovrapponendo armoniche di pulsazione intera si ottengono i polinomi trigonometrici.

**Definizione 8.2** (polinomio trigonometrico). Un polinomio trigonometrico di grado $n$ è una combinazione lineare finita

$$
P(x)=a_0+\sum_{k=1}^{n}\left(a_k\cos kx+b_k\sin kx\right),
$$

con $a_k,b_k\in\mathbb{R}$ e almeno uno tra $a_n$ e $b_n$ non nullo. Equivalentemente $P(x)=a_0+\sum_{k=1}^n\alpha_k\sin(kx+\phi_k)$.

Il nome deriva dal fatto che un polinomio algebrico $p(X,Y)$ di grado $n$, con la sostituzione $X=\cos x$, $Y=\sin x$ e le formule di duplicazione e prostaferesi, diventa un polinomio trigonometrico di grado al più $n$. Per $p(X,Y)=X^3+2Y^2$:

$$
\begin{aligned}
p(\cos x,\sin x)&=\cos x\,\frac{1+\cos 2x}{2}+2\,\frac{1-\cos 2x}{2}\\
&=1+\frac12\cos x-\cos 2x+\frac14(\cos x+\cos 3x)\\
&=1+\frac34\cos x-\cos 2x+\frac14\cos 3x .
\end{aligned}
$$

Non ogni funzione periodica è un polinomio trigonometrico (lo mostra $e^{\sin x}$). Le funzioni delle applicazioni si possono però approssimare con polinomi di grado crescente: è l'idea delle serie di Fourier.

### Prodotto scalare e relazioni di ortogonalità

Sia $\widetilde{C}_{2\pi}$ lo spazio delle funzioni $f:\mathbb{R}\to\mathbb{R}$ continue a tratti, periodiche di periodo $2\pi$ e **regolarizzate**, cioè tali che nei punti di discontinuità $f(x_0)=\frac12\left(f(x_0^+)+f(x_0^-)\right)$. È uno spazio vettoriale, e

$$
(f,g)=\int_0^{2\pi}f(x)g(x)\,dx
$$

è un prodotto scalare. La norma associata è $\|f\|_2=(f,f)^{1/2}=\left(\int_0^{2\pi}|f|^2dx\right)^{1/2}$ e vale la disuguaglianza di Cauchy–Schwarz $|(f,g)|\le\|f\|_2\|g\|_2$.

Una famiglia $\{f_k\}$ di funzioni non nulle è un **sistema ortogonale** se $(f_k,f_\ell)=0$ per $k\ne\ell$. Il sistema trigonometrico

$$
\{1,\cos x,\sin x,\dots,\cos kx,\sin kx,\dots\}
$$

è ortogonale in $\widetilde{C}_{2\pi}$. Il sistema ortonormale associato si ottiene dividendo ogni funzione per la sua norma e vale $\left\{\frac1{\sqrt{2\pi}},\frac1{\sqrt\pi}\cos kx,\frac1{\sqrt\pi}\sin kx\right\}$. Questo sistema ha in $\widetilde{C}_{2\pi}$ lo stesso ruolo della base canonica $\{\mathbf{e}_k\}$ in $\mathbb{R}^n$.

:::formula{id="8.1" label="Relazioni di ortogonalità del sistema trigonometrico"}
$$\begin{aligned}
\int_0^{2\pi}\cos^2 kx\,dx&=\int_0^{2\pi}\sin^2 kx\,dx=\pi, &&k\ge 1,\\
\int_0^{2\pi}\cos kx\cos \ell x\,dx&=\int_0^{2\pi}\sin kx\sin \ell x\,dx=0, &&k,\ell\ge 0,\ k\ne \ell,\\
\int_0^{2\pi}\cos kx\sin \ell x\,dx&=0, &&k,\ell\ge 0.
\end{aligned}$$
:::

Per $k=0$ si ha invece $\int_0^{2\pi}1\,dx=2\pi$. Per la periodicità degli integrandi, gli integrali su $\lbrack 0,2\pi\rbrack $ si possono calcolare su qualunque intervallo di ampiezza $2\pi$, per esempio $\lbrack -\pi,\pi\rbrack $.

**Esempio 8.1** (uso dell'ortogonalità). Sia $P(x)=1+3\cos x-2\sin 2x$. Si vuole ricavare il coefficiente di $\cos x$ senza «guardare» $P$. Si moltiplica per $\cos x$ e si integra su $\lbrack 0,2\pi\rbrack $:

$$
\int_0^{2\pi}P(x)\cos x\,dx=\int_0^{2\pi}\cos x\,dx+3\int_0^{2\pi}\cos^2x\,dx-2\int_0^{2\pi}\sin 2x\cos x\,dx=0+3\pi-0 .
$$

Dunque $a_1=\frac1\pi\cdot 3\pi=3$. Tutti i termini tranne quello con $\cos x$ si annullano per le relazioni {{formula:8.1}}, e proprio da qui nascono le formule dei coefficienti.

### Coefficienti di Fourier

Il ragionamento dell'esempio vale per una $f\in\widetilde{C}_{2\pi}$ qualunque. Si cerca il polinomio $S_{n,f}=a_0+\sum_{k=1}^n(a_k\cos kx+b_k\sin kx)$ tale che $f-S_{n,f}$ sia ortogonale a tutti i polinomi di grado $\le n$. Questa condizione, e l'ortogonalità, forzano i coefficienti seguenti.

:::formula{id="8.2" label="Coefficienti di Fourier (periodo 2π)"}
$$a_0=\frac1{2\pi}\int_0^{2\pi}f(x)\,dx,\qquad a_k=\frac1\pi\int_0^{2\pi}f(x)\cos kx\,dx,\qquad b_k=\frac1\pi\int_0^{2\pi}f(x)\sin kx\,dx\quad(k\ge1)$$
:::

In forma compatta $a_k=\dfrac{(f,\varphi_k)}{(\varphi_k,\varphi_k)}$ per $k\ge0$ e $b_k=\dfrac{(f,\psi_k)}{(\psi_k,\psi_k)}$ per $k\ge1$, con $\varphi_k=\cos kx$ e $\psi_k=\sin kx$: sono le componenti di $f$ lungo i versori del sistema, come in $\mathbb{R}^n$. Il fattore $\frac{1}{2\pi}$ in $a_0$ (contro $\frac1\pi$ degli altri) è dovuto a $(\varphi_0,\varphi_0)=2\pi$, mentre $(\varphi_k,\varphi_k)=(\psi_k,\psi_k)=\pi$ per $k\ge 1$. Il termine $a_0$ è il valor medio di $f$ su un periodo. Alcuni testi scrivono il termine costante come $a_0/2$ e definiscono allora $a_0=\frac1\pi\int f$: i coefficienti $a_k$ e $b_k$ con $k\ge 1$ non cambiano.

Il polinomio $S_{n,f}$ è la proiezione ortogonale di $f$ sui polinomi trigonometrici di grado $\le n$, ed è quello che approssima meglio $f$ nella norma quadratica: $\|f-S_{n,f}\|_2=\min_{P}\|f-P\|_2$. Lo scarto quadratico vale

$$
\|f-S_{n,f}\|_2^2=\int_0^{2\pi}|f|^2dx-2\pi a_0^2-\pi\sum_{k=1}^n(a_k^2+b_k^2).
$$

### Parità e disparità

I coefficienti richiedono $2n+1$ integrali; se $f$ ha una simmetria, metà di essi è nulla. Qui $f$ è pari se $f(-x)=f(x)$ e dispari se $f(-x)=-f(x)$.

**Teorema 8.1** (coefficienti di funzioni pari e dispari). Sia $f\in\widetilde{C}_{2\pi}$.

1. Se $f$ è dispari, allora $a_k=0$ per ogni $k\ge0$ e $b_k=\dfrac2\pi\displaystyle\int_0^\pi f(x)\sin kx\,dx$ per $k\ge1$.
2. Se $f$ è pari, allora $b_k=0$ per ogni $k\ge1$, $a_0=\dfrac1\pi\displaystyle\int_0^\pi f(x)\,dx$ e $a_k=\dfrac2\pi\displaystyle\int_0^\pi f(x)\cos kx\,dx$ per $k\ge1$.

L'idea della dimostrazione è la seguente. Per periodicità si integra su $\lbrack -\pi,\pi\rbrack $. Se $f$ è pari, $f(x)\sin kx$ è dispari e il suo integrale su $\lbrack -\pi,\pi\rbrack $ è nullo, mentre $f(x)\cos kx$ è pari e il suo integrale è $2\int_0^\pi$. Il caso dispari è analogo, scambiando i ruoli.

Il metodo operativo è dunque questo:

1. si verifica la simmetria di $f$ su $(-\pi,\pi)$;
2. si scrivono i soli coefficienti che sopravvivono, con l'integrale su $\lbrack 0,\pi\rbrack $ e il fattore $2$ incluso;
3. si calcolano gli integrali, di solito per parti o con le formule di prostaferesi.

**Esempio 8.2** (onda quadra). Sia $f$ la funzione $2\pi$-periodica con $f(x)=1$ per $0<x<\pi$ e $f(x)=-1$ per $-\pi<x<0$ (regolarizzata, quindi $f=0$ nei punti di salto). È dispari, perciò $a_k=0$ per ogni $k\ge0$ e

$$
b_k=\frac2\pi\int_0^\pi\sin kx\,dx=\frac2\pi\left[-\frac{\cos kx}{k}\right]_0^\pi=\frac{2\,(1-(-1)^k)}{\pi k}.
$$

Se $k$ è pari, $b_k=0$; se $k$ è dispari, $b_k=\dfrac4{\pi k}$. Scrivendo $k=2m+1$ la serie di Fourier è

$$
\frac4\pi\sum_{m=0}^\infty\frac1{2m+1}\sin(2m+1)x .
$$

:::image{src="assets/63d4ad6f-onda-quadra-somma-parziale.svg" alt="Onda quadra e somma parziale S5 del suo sviluppo di Fourier" caption="Fig. 8.1 — Onda quadra di periodo 2π (valori ±1) e polinomio trigonometrico S5 = (4/π)(sin x + sin 3x/3 + sin 5x/5): oscilla attorno ai tratti piatti e passa per 0 nei salti."}
:::

**Esempio 8.3** (onda raddrizzata). Sia $f(x)=|\sin x|$, di periodo $\pi$ e quindi anche di periodo $2\pi$. È pari, quindi $b_k=0$ e

$$
a_0=\frac1\pi\int_0^\pi\sin x\,dx=\frac2\pi,\qquad a_k=\frac2\pi\int_0^\pi\sin x\cos kx\,dx .
$$

Per la prostaferesi $\sin x\cos kx=\frac12\left[\sin(k+1)x-\sin(k-1)x\right]$. Per $k=1$ l'integrando è $\frac12\sin 2x$ e l'integrale è $0$. Per $k\ge2$ si ha

$$
\int_0^\pi\sin x\cos kx\,dx=\frac12\left[\frac{1-\cos(k+1)\pi}{k+1}-\frac{1-\cos(k-1)\pi}{k-1}\right].
$$

Se $k$ è dispari, $k\pm1$ sono pari, i coseni valgono $1$ e l'integrale è nullo. Se $k=2m$, i coseni valgono $-1$ e l'integrale diventa $\frac1{2m+1}-\frac1{2m-1}=-\frac{2}{4m^2-1}$, da cui $a_{2m}=-\dfrac{4}{\pi(4m^2-1)}$. Quindi

$$
f\sim\frac2\pi-\frac4\pi\sum_{m=1}^\infty\frac1{4m^2-1}\cos 2mx .
$$

Per il dente di sega $f(x)=x$ su $(-\pi,\pi)$, che è dispari, un'integrazione per parti dà $b_k=\frac2\pi\int_0^\pi x\sin kx\,dx=\frac{2(-1)^{k+1}}{k}$.

Se $f$ non è né pari né dispari, si può scrivere $f=f_p+f_d$ con $f_p(x)=\frac{f(x)+f(-x)}2$ pari e $f_d(x)=\frac{f(x)-f(-x)}2$ dispari: i coefficienti $a_k$ vengono da $f_p$ e i $b_k$ da $f_d$. Questa scomposizione non è nel testo di riferimento: segue direttamente dal teorema e dalla linearità dei coefficienti.

**Errore tipico 8.1.** Dimenticare che il termine costante ha un fattore diverso dagli altri: $a_0=\frac1{2\pi}\int_0^{2\pi}f$, mentre $a_k=\frac1\pi\int_0^{2\pi}f\cos kx$. Nel caso pari lo stesso errore si presenta come $a_0=\frac1\pi\int_0^\pi f$ (e non $\frac2\pi$), mentre per $k\ge1$ il fattore è $\frac2\pi$. Un controllo rapido: $a_0$ deve essere il valore medio di $f$ (per $|\sin x|$ vale $\frac2\pi\approx0{,}64$, tra $0$ e $1$).

**Errore tipico 8.2.** Scrivere $f=a_0+\sum(a_k\cos kx+b_k\sin kx)$ con il segno di uguaglianza subito dopo aver calcolato i coefficienti. Finora i coefficienti sono solo definiti dalle formule {{formula:8.2}} e si scrive $f\sim a_0+\sum(\dots)$: la serie potrebbe non convergere, o convergere a una funzione diversa da $f$. L'uguaglianza si usa solo quando la serie converge puntualmente a $f$.

**Errore tipico 8.3.** Applicare le formule su $\lbrack 0,\pi\rbrack $ senza controllare davvero la parità, oppure usarle con $f$ nota solo su $(0,\pi)$ senza averla prolungata. Il teorema vale per funzioni pari o dispari su tutto $\mathbb{R}$; il prolungamento pari o dispari di una funzione definita su $(0,\pi)$ è trattato nella sezione [Serie di Fourier: definizione ed esempi](ref:chapter/8#p3).

## p3 | Serie di Fourier: definizione ed esempi

Una funzione periodica che non è un polinomio trigonometrico può comunque essere approssimata da polinomi trigonometrici di grado crescente. La serie di Fourier è lo strumento che organizza questa approssimazione. In questa sezione scriviamo la serie di Fourier di una funzione assegnata, prima con periodo $2\pi$, poi con periodo $T$ qualsiasi, infine partendo da una funzione definita solo su metà periodo e prolungata in modo pari o dispari.

### Serie di Fourier per funzioni $2\pi$-periodiche

Sia $f\in\tilde{C}_{2\pi}$, cioè $f$ è definita su $\mathbb{R}$, continua a tratti, $2\pi$-periodica e regolarizzata: in ogni punto di discontinuità $x_0$ vale $f(x_0)=\frac12\bigl(f(x_0^+)+f(x_0^-)\bigr)$. I coefficienti $a_0$, $a_k$, $b_k$ sono quelli già calcolati con le relazioni di ortogonalità, come in {{formula:8.2}}.

**Definizione 8.3** (serie di Fourier). Si chiama serie di Fourier di $f\in\tilde{C}_{2\pi}$ la serie di funzioni

:::formula{id="8.3" label="Serie di Fourier (periodo 2π)"}
$$f\sim a_0+\sum_{k=1}^{\infty}\bigl(a_k\cos kx+b_k\sin kx\bigr)$$
:::

dove $a_0,a_k,b_k$ sono i coefficienti di Fourier di $f$.

Il simbolo $\sim$ dice solo che i coefficienti sono legati a $f$ dalle formule integrali. La serie potrebbe non convergere, oppure convergere a una funzione diversa da $f$. Il segno $=$ si scrive solo quando la serie converge puntualmente a $f$. Le condizioni di convergenza sono nella sezione [Convergenza delle serie di Fourier](ref:chapter/8#p5).

**Errore tipico 8.4.** Scrivere $f(x)=a_0+\sum\dots$ subito dopo aver calcolato i coefficienti. Il calcolo dei coefficienti non dimostra nulla sulla convergenza, quindi finché non si invoca un teorema si scrive $\sim$.

### Funzioni di periodo $T$

Se $f\in\tilde{C}_T$ (definita su $\mathbb{R}$, continua a tratti, regolarizzata, di periodo $T>0$), si sostituisce $x$ con $\frac{2\pi}{T}x$, in modo che le armoniche abbiano periodo $T/k$:

:::formula{id="8.4" label="Serie di Fourier (periodo T)"}
$$f\sim a_0+\sum_{k=1}^{\infty}\left(a_k\cos\left(k\frac{2\pi}{T}x\right)+b_k\sin\left(k\frac{2\pi}{T}x\right)\right)$$
:::

con coefficienti

:::formula{id="8.5" label="Coefficienti di Fourier (periodo T)"}
$$a_0=\frac1T\int_0^T f(x)\,dx,\quad a_k=\frac2T\int_0^T f(x)\cos\left(k\frac{2\pi}{T}x\right)dx,\quad b_k=\frac2T\int_0^T f(x)\sin\left(k\frac{2\pi}{T}x\right)dx$$
:::

per $k\ge1$. Per $T=2\pi$ si ritrovano le formule precedenti. Poiché $f$ è periodica, gli integrali si possono calcolare su un qualunque intervallo di ampiezza $T$, tipicamente $\left[-\frac T2,\frac T2\right]$.

**Esempio 8.4** (periodo $T=2$). Sia $f$ la funzione $2$-periodica con $f(x)=1-x^2$ su $\lbrack -1,1\rbrack $. È continua e pari, quindi $b_k=0$. Integrando su $\lbrack -1,1\rbrack $, con $\frac{2\pi}{T}=\pi$:

$$a_0=\frac12\int_{-1}^{1}(1-x^2)\,dx=\int_0^1(1-x^2)\,dx=\frac23,\qquad a_k=\frac22\int_{-1}^1(1-x^2)\cos k\pi x\,dx=2\int_0^1(1-x^2)\cos k\pi x\,dx.$$

Per $k\ge1$ si ha $\int_0^1\cos k\pi x\,dx=0$. Per parti, $\int_0^1 x^2\cos k\pi x\,dx=-\frac{2}{k\pi}\int_0^1 x\sin k\pi x\,dx$, perché il termine di bordo $\bigl[\frac{x^2\sin k\pi x}{k\pi}\bigr]_0^1$ è nullo. Ancora per parti, $\int_0^1x\sin k\pi x\,dx=-\frac{(-1)^k}{k\pi}$. Dunque $\int_0^1x^2\cos k\pi x\,dx=\frac{2(-1)^k}{k^2\pi^2}$ e

$$a_k=-2\cdot\frac{2(-1)^k}{k^2\pi^2}=\frac{4(-1)^{k+1}}{k^2\pi^2},\qquad f\sim\frac23+\frac4{\pi^2}\sum_{k=1}^\infty\frac{(-1)^{k+1}}{k^2}\cos k\pi x.$$

**Errore tipico 8.5.** Con $T\ne2\pi$ si dimentica il fattore $\frac{2\pi}{T}$ dentro seni e coseni, oppure si usano i prefattori $\frac1\pi$ al posto di $\frac2T$. Nell'esempio sopra scrivere $\cos kx$ invece di $\cos k\pi x$ produce una serie di periodo sbagliato. Un controllo rapido: la $k$-esima armonica deve avere periodo $T/k$.

### Funzioni pari e dispari

Se $f$ è dispari, $f(x)\cos kx$ è dispari e $f(x)\sin kx$ è pari. Se $f$ è pari, vale il contrario. Su un intervallo simmetrico gli integrali delle funzioni dispari si annullano e quelli delle pari raddoppiano, da cui:

:::formula{id="8.6" label="Serie di Fourier di una funzione dispari"}
$$a_k=0\ (k\ge0),\qquad b_k=\frac2\pi\int_0^\pi f(x)\sin kx\,dx\ (k\ge1)$$
:::

:::formula{id="8.7" label="Serie di Fourier di una funzione pari"}
$$b_k=0\ (k\ge1),\qquad a_0=\frac1\pi\int_0^\pi f(x)\,dx,\qquad a_k=\frac2\pi\int_0^\pi f(x)\cos kx\,dx\ (k\ge1)$$
:::

Per periodo $T$ le stesse formule valgono con $\left[0,\frac T2\right]$ al posto di $\lbrack 0,\pi\rbrack $, $\frac2T$ al posto di $\frac1\pi$ e $\frac4T$ al posto di $\frac2\pi$.

### Prolungamenti pari e dispari

Spesso $f$ è data solo su $\lbrack 0,\pi\rbrack $. Per scriverne una serie di Fourier la si prolunga su $\lbrack -\pi,\pi\rbrack $ e poi per periodicità. Si può scegliere:

- il **prolungamento pari**, $f(-x)=f(x)$, che dà una serie di soli coseni, con le formule {{formula:8.7}};
- il **prolungamento dispari**, $f(-x)=-f(x)$, che dà una serie di soli seni, con le formule {{formula:8.6}}.

Le due serie sono diverse, perché diverse sono le funzioni periodiche che si sviluppano. Coincidono con $f$ (dove c'è convergenza) solo su $(0,\pi)$.

**Esempio 8.5.** Sia $f(x)=x$ su $\lbrack 0,\pi\rbrack $.

*Prolungamento pari.* Si ottiene $|x|$ su $\lbrack -\pi,\pi\rbrack $, quindi $b_k=0$ e

$$a_0=\frac1\pi\int_0^\pi x\,dx=\frac\pi2,\qquad a_k=\frac2\pi\int_0^\pi x\cos kx\,dx=\frac2\pi\left[\frac{x\sin kx}{k}+\frac{\cos kx}{k^2}\right]_0^\pi=\frac{2}{\pi k^2}\bigl((-1)^k-1\bigr).$$

Quindi $a_k=0$ per $k$ pari e $a_k=-\frac{4}{\pi k^2}$ per $k$ dispari:

$$|x|\sim\frac\pi2-\frac4\pi\sum_{k=0}^\infty\frac{1}{(2k+1)^2}\cos(2k+1)x.$$

*Prolungamento dispari.* Si ottiene $x$ su $(-\pi,\pi)$, quindi $a_k=0$ e

$$b_k=\frac2\pi\int_0^\pi x\sin kx\,dx=\frac2\pi\left[-\frac{x\cos kx}{k}+\frac{\sin kx}{k^2}\right]_0^\pi=\frac2\pi\cdot\left(-\frac{\pi(-1)^k}{k}\right)=\frac{2(-1)^{k+1}}{k}.$$

Dunque $x\sim\sum_{k=1}^\infty\frac{2(-1)^{k+1}}{k}\sin kx$ (dente di sega).

Il prolungamento pari è continuo e i suoi coefficienti decadono come $1/k^2$. Quello dispari ha salti nei punti $\pm\pi$ (in $x=\pi$ il prolungamento regolarizzato vale $0$, media di $\pi$ e $-\pi$) e i coefficienti decadono solo come $1/k$.

:::image{src="assets/f1321b29-fourier-modulo-x-ridotta.svg" alt="Prolungamento periodico pari di |x| e somma parziale di Fourier" caption="Fig. 8.2 — Il prolungamento pari e 2π-periodico di |x| (linea continua) e la somma parziale S3 = π/2 − (4/π)cos x − (4/(9π))cos 3x (tratteggio): già con due armoniche la curva segue da vicino i vertici e i tratti obliqui."}
:::

**Errore tipico 8.6.** Applicare le formule con $\int_0^\pi$ e il fattore $\frac2\pi$ senza aver prima deciso come prolungare $f$. Altri errori frequenti sono tenere $a_0=\frac2\pi\int_0^\pi f$ invece di $\frac1\pi\int_0^\pi f$ (il termine costante non raddoppia) e dimenticare che nella serie di una funzione pari non compaiono i seni, e viceversa.

**Esempio 8.6** (onda raddrizzata, risultato notevole). Per $f(x)=|\sin x|$, che è pari e di periodo $\pi$, vale

$$|\sin x|\sim\frac2\pi-\frac4\pi\sum_{m=1}^\infty\frac{1}{4m^2-1}\cos2mx,$$

dove compaiono solo le armoniche pari, coerentemente con il periodo $\pi$.

## p4 | Forma esponenziale

La forma esponenziale è una rappresentazione equivalente della serie di Fourier, più compatta e talvolta più maneggevole. Il prezzo da pagare è l'uso dell'aritmetica complessa al posto di quella reale.

### Dalla forma reale alla forma complessa

Si parte dall'identità di Eulero $e^{i\theta}=\cos\theta+i\sin\theta$ (si veda [Serie di potenze in $\mathbb{C}$](ref:chapter/7#p6)). Con $\theta=kx$ e $k\ge 1$ intero, $\cos kx$ e $\sin kx$ sono combinazioni lineari di $e^{ikx}$ e $e^{-ikx}$.

:::formula{id="8.8" label="Coseno e seno tramite esponenziali"}
$$\cos kx=\frac{e^{ikx}+e^{-ikx}}{2},\qquad \sin kx=\frac{e^{ikx}-e^{-ikx}}{2i}$$
:::

Si sostituisce nel termine $k$-esimo della serie reale $a_0+\sum_{k=1}^{\infty}(a_k\cos kx+b_k\sin kx)$ e si usa $1/i=-i$:

$$a_k\cos kx+b_k\sin kx=\frac{a_k-ib_k}{2}\,e^{ikx}+\frac{a_k+ib_k}{2}\,e^{-ikx}.$$

Compare così la serie di Fourier in forma esponenziale, con indice $k\in\mathbb{Z}$.

:::formula{id="8.9" label="Serie di Fourier in forma esponenziale"}
$$f\sim\sum_{k=-\infty}^{+\infty}c_k\,e^{ikx}$$
:::

I coefficienti complessi si definiscono tramite il prodotto scalare complesso $(f,g)=\int_0^{2\pi}f(x)\,\overline{g(x)}\,dx$: $c_k=(f,e^{ikx})/(e^{ikx},e^{ikx})$. Poiché $(e^{ikx},e^{ikx})=2\pi$, si ottiene la formula operativa seguente, che ha senso anche per $f$ a valori complessi.

:::formula{id="8.10" label="Coefficienti di Fourier complessi"}
$$c_k=\frac{1}{2\pi}\int_0^{2\pi}f(x)\,e^{-ikx}\,dx,\qquad k\in\mathbb{Z}$$
:::

Si può integrare su un qualunque intervallo di lunghezza $2\pi$, per esempio $\lbrack -\pi,\pi\rbrack $, perché l'integrando è $2\pi$-periodico.

### Passaggio tra coefficienti reali e complessi

Confrontando i coefficienti di $e^{ikx}$ e $e^{-ikx}$ nella sostituzione precedente si ricavano le relazioni di passaggio.

:::formula{id="8.11" label="Coefficienti complessi da quelli reali"}
$$c_0=a_0,\qquad c_k=\frac{a_k-ib_k}{2},\qquad c_{-k}=\frac{a_k+ib_k}{2}\qquad(k\ge 1)$$
:::

Se $f$ è a valori reali, valgono $a_k,b_k\in\mathbb{R}$, quindi $c_{-k}=\overline{c_k}$ per ogni $k$. Anche il viceversa è vero: $f$ è reale se e solo se $c_{-k}=\overline{c_k}$ per ogni $k\in\mathbb{Z}$. In tal caso si torna ai coefficienti reali con le formule seguenti.

:::formula{id="8.12" label="Coefficienti reali da quelli complessi"}
$$a_0=c_0,\qquad a_k=c_k+c_{-k},\qquad b_k=i\,(c_k-c_{-k})\qquad(k\ge 1)$$
:::

In particolare $a_k=2\operatorname{Re}c_k$ e $b_k=-2\operatorname{Im}c_k$. Le somme parziali reali $S_{n}$ coincidono con quelle simmetriche $\sum_{k=-n}^{n}c_ke^{ikx}$. Le questioni di convergenza sono trattate in [Convergenza delle serie di Fourier](ref:chapter/8#p5).

### Esempio svolto

Sia $f(x)=x$ su $(-\pi,\pi)$, prolungata per periodicità (dente di sega). È dispari, quindi $a_k=0$ per ogni $k\ge 0$, e $b_k=\dfrac{2}{k}(-1)^{k+1}$.

**Passo 1: coefficienti complessi dai reali.** Si ha $c_0=a_0=0$. Per $k\ge 1$:

$$c_k=\frac{0-ib_k}{2}=-\frac{i}{k}(-1)^{k+1}=\frac{i(-1)^k}{k},\qquad c_{-k}=\frac{ib_k}{2}=-\frac{i(-1)^k}{k}=\overline{c_k}.$$

La serie è quindi $f\sim\sum_{k\ne 0}\dfrac{i(-1)^k}{k}\,e^{ikx}$.

**Passo 2: verifica con la definizione.** Integrando per parti su $\lbrack -\pi,\pi\rbrack $, per $k\ne 0$:

$$\int_{-\pi}^{\pi}x\,e^{-ikx}dx=\left[\frac{x\,e^{-ikx}}{-ik}\right]_{-\pi}^{\pi}+\frac{1}{ik}\int_{-\pi}^{\pi}e^{-ikx}dx=\frac{\pi e^{-ik\pi}+\pi e^{ik\pi}}{-ik}+0=\frac{2\pi(-1)^k}{-ik}=\frac{2\pi i(-1)^k}{k}.$$

Dividendo per $2\pi$ si ritrova $c_k=\dfrac{i(-1)^k}{k}$. Inoltre $c_0=\frac{1}{2\pi}\int_{-\pi}^{\pi}x\,dx=0$.

**Passo 3: ritorno ai coefficienti reali.** Dalla formula {{formula:8.12}}, $a_k=c_k+c_{-k}=0$ e

$$b_k=i\,(c_k-c_{-k})=i\cdot\frac{2i(-1)^k}{k}=\frac{2(-1)^{k+1}}{k},$$

come all'inizio.

**Errore tipico 8.7.** Si scambiano i segni nella formula {{formula:8.11}}, scrivendo $c_k=(a_k+ib_k)/2$. Così si ottiene il coniugato del coefficiente corretto. Un controllo rapido: per $k\ge 1$ il coefficiente con indice **positivo** è quello con $-ib_k$, perché $\sin kx=(e^{ikx}-e^{-ikx})/(2i)$ moltiplica $e^{ikx}$ per $1/(2i)=-i/2$. Un secondo errore è dimenticare il segno meno nell'esponente di $e^{-ikx}$ nella definizione di $c_k$. Un terzo è usare $a_k=c_k+c_{-k}$ senza il fattore 2 quando si parte da $c_k$ reale: se $f$ è pari, $c_k=c_{-k}$ e dunque $a_k=2c_k$.

## p5 | Convergenza delle serie di Fourier

### Perché serve uno studio della convergenza

La serie di Fourier di $f$ è definita dai soli coefficienti, e il simbolo $\sim$ dice solo che $a_k$, $b_k$ derivano da $f$. Non si può escludere che la serie non converga affatto, oppure che converga a una funzione diversa da $f$. Anche la continuità di $f$ non basta a garantire la convergenza puntuale. Lo studio distingue tre tipi di convergenza, dal più debole al più forte: quadratica, puntuale, totale (e uniforme). Per $f$ continua a tratti e $2\pi$-periodica, i teoremi che seguono vengono usati senza dimostrazione.

### Convergenza in media quadratica e identità di Parseval

**Definizione 8.4** (convergenza in norma quadratica). Siano $f$ e $f_k$, $k\ge k_0$, funzioni di quadrato integrabile su $\lbrack a,b\rbrack $. La serie $\sum_{k\ge k_0} f_k$ converge a $f$ in norma quadratica se

$$
\lim_{n\to\infty}\int_a^b\left|f(x)-\sum_{k=k_0}^{n}f_k(x)\right|^2dx=\lim_{n\to\infty}\left\|f-\sum_{k=k_0}^{n}f_k\right\|_2^2=0.
$$

La convergenza totale implica quella quadratica. Per la serie di Fourier la convergenza quadratica vale sempre.

**Teorema 8.2** (convergenza quadratica). Se $f\in\tilde C_{2\pi}$, allora

:::formula{id="8.13" label="Convergenza quadratica della serie di Fourier"}
$$\lim_{n\to\infty}\|f-S_{n,f}\|_2=0$$
:::

dove $S_{n,f}$ è la ridotta di ordine $n$ della serie di Fourier.

Questo è un risultato in senso integrale: non dice nulla sul valore di $S_{n,f}(x)$ in un punto fissato.

**Teorema 8.3** (identità di Parseval). Se $f\in\tilde C_{2\pi}$ vale

:::formula{id="8.14" label="Identità di Parseval (periodo 2π)"}
$$\int_0^{2\pi}|f(x)|^2\,dx=2\pi a_0^2+\pi\sum_{k=1}^{\infty}\left(a_k^2+b_k^2\right)$$
:::

Si ottiene passando al limite nell'uguaglianza che esprime $\|f-S_{n,f}\|_2^2$ tramite i coefficienti, usando {{formula:8.13}}. Poiché la funzione è periodica, l'integrale si può calcolare su qualunque intervallo di lunghezza $2\pi$, per esempio $\lbrack -\pi,\pi\rbrack $. Il primo membro è finito, dunque la serie $\sum (a_k^2+b_k^2)$ converge.

In forma esponenziale (si veda [Forma esponenziale](ref:chapter/8#p4)) l'identità diventa

:::formula{id="8.15" label="Identità di Parseval (forma esponenziale)"}
$$\int_0^{2\pi}|f(x)|^2\,dx=2\pi\sum_{k=-\infty}^{+\infty}|c_k|^2$$
:::

e vale inoltre $\lim_{|k|\to\infty}c_k=0$ (lemma di Riemann–Lebesgue). Per funzioni di periodo $T$ i teoremi si traducono in modo analogo.

### Convergenza puntuale

Servono ipotesi di regolarità su $f$.

**Definizione 8.5.** $f$ è **regolare a tratti** in $\lbrack a,b\rbrack $ se è derivabile in tutti i punti tranne al più un numero finito e se $f$ e $f'$ sono continue a tratti. È **monotona a tratti** se $\lbrack a,b\rbrack $ si può suddividere in un numero finito di sottointervalli su ciascuno dei quali $f$ è monotona.

**Teorema 8.4** (criterio globale). Sia $f\in\tilde C_{2\pi}$. Se $f$ è regolare a tratti oppure monotona a tratti in $\lbrack 0,2\pi\rbrack $, la serie di Fourier di $f$ converge puntualmente a $f$ in $\lbrack 0,2\pi\rbrack $.

**Definizione 8.6.** Una funzione continua a tratti ha **pseudo-derivata destra** in $x_0$ se esiste finito

$$
f'(x_0^+)=\lim_{x\to x_0^+}\frac{f(x)-f(x_0^+)}{x-x_0},
$$

e analogamente la pseudo-derivata sinistra $f'(x_0^-)$.

**Teorema 8.5** (criterio locale). Sia $f\in\tilde C_{2\pi}$. Se in $x_0$ esistono le pseudo-derivate sinistra e destra, la serie di Fourier converge in $x_0$ a $f(x_0)$.

Qui $f\in\tilde C_{2\pi}$ è regolarizzata, cioè vale $f(x_0)=\frac{f(x_0^-)+f(x_0^+)}{2}$ nei punti di salto. Se $f$ non è regolarizzata, con ipotesi analoghe la serie converge in ogni punto al valore regolarizzato

:::formula{id="8.16" label="Somma della serie di Fourier in un punto di salto"}
$$s(x_0)=\frac{f(x_0^-)+f(x_0^+)}{2}$$
:::

e non a $f(x_0)$.

:::image{src="assets/eeedeaa5-dente-sega-regolarizzato.svg" alt="Dente di sega e somma parziale S7 con valore regolarizzato nel salto" caption="Fig. 8.3 — Dente di sega f(x) = x su (-π, π), prolungato con periodo 2π, e la ridotta S7: nel punto di salto x = π la serie converge a 0, media dei limiti laterali π e -π, e non al valore della funzione."}
:::

### Convergenza uniforme, totale e fenomeno di Gibbs

La convergenza totale è la più forte: implica quella assoluta, dunque puntuale e uniforme, e quella quadratica. Se $\sum_k(|a_k|+|b_k|)<\infty$, la serie di Fourier converge totalmente su $\mathbb R$. Lo si verifica con il criterio di Weierstrass (si veda [Serie di funzioni](ref:chapter/7#p3)), poiché $|a_k\cos kx+b_k\sin kx|\le|a_k|+|b_k|$.

Se $f$ è continua su $\mathbb R$, $2\pi$-periodica e regolare a tratti, la serie converge totalmente a $f$ su $\mathbb R$, quindi puntualmente in ogni $x$. Questo è il caso dell'Esempio sotto con $f(x)=x^2$.

Se $f$ è regolare a tratti e ha un salto, la convergenza non può essere uniforme su un intervallo che lo contiene. Vicino al salto le ridotte oscillano con ampiezza che non tende a zero: è il **fenomeno di Gibbs**. Per l'onda quadra di valori $\pm1$ i massimi e minimi vicini a $x_0=0$ tendono a $\ell_\pm\approx\pm1{,}18$, mentre $f(0^\pm)=\pm1$. Se $f$ è regolare a tratti, in ogni intervallo chiuso che non contiene salti la convergenza è uniforme.

Il legame tra regolarità di $f$ e decadimento dei coefficienti è trattato in [Serie di Fourier e derivazione](ref:chapter/8#p6). Se $f\in C^r(\mathbb R)$, $a_k$ e $b_k$ sono infinitesimi di ordine almeno $r$ rispetto a $1/|k|$.

### Somme di serie numeriche

Il metodo ha due strumenti, ciascuno con un'ipotesi da controllare.

1. **Parseval.** Si calcolano i coefficienti di $f$ e si scrive {{formula:8.14}}, con $\int f^2$ calcolato esplicitamente. Dà somme di serie di quadrati dei coefficienti.
2. **Convergenza puntuale.** Si verifica uno dei teoremi sopra, si valuta la serie in un punto $x_0$ scelto in modo che $\cos kx_0$ o $\sin kx_0$ diventino semplici, e si usa $s(x_0)$.

**Esempio 8.7.** Sia $f(x)=x^2$ per $x\in[-\pi,\pi]$, prolungata con periodo $2\pi$. È pari, quindi $b_k=0$.

*Coefficienti.*

$$
a_0=\frac1{2\pi}\int_{-\pi}^{\pi}x^2dx=\frac{\pi^2}{3},\qquad a_k=\frac{2}{\pi}\int_0^{\pi}x^2\cos kx\,dx=\frac{4(-1)^k}{k^2}\quad(k\ge1).
$$

Dunque $f\sim\dfrac{\pi^2}{3}+4\sum_{k=1}^\infty\dfrac{(-1)^k}{k^2}\cos kx$.

*Parseval.* Il primo membro è $\int_{-\pi}^{\pi}x^4dx=\dfrac{2\pi^5}{5}$. Il secondo è

$$
2\pi\left(\frac{\pi^2}{3}\right)^2+\pi\sum_{k=1}^\infty\frac{16}{k^4}=\frac{2\pi^5}{9}+16\pi\sum_{k=1}^\infty\frac1{k^4}.
$$

Allora

$$
16\pi\sum_{k=1}^\infty\frac1{k^4}=\frac{2\pi^5}{5}-\frac{2\pi^5}{9}=\frac{8\pi^5}{45},\qquad\text{cioè}\qquad \sum_{k=1}^\infty\frac1{k^4}=\frac{\pi^4}{90}.
$$

Questo concorda con.

*Convergenza puntuale.* $f$ è continua su $\mathbb R$ (i valori $f(\pm\pi)=\pi^2$ coincidono) e regolare a tratti. Per il criterio globale la serie converge a $f(x)$ per ogni $x$.

- Per $x=\pi$, $\cos k\pi=(-1)^k$ e
  $\displaystyle \pi^2=\frac{\pi^2}{3}+4\sum_{k=1}^\infty\frac{(-1)^k(-1)^k}{k^2}\ \Longrightarrow\ \sum_{k=1}^\infty\frac1{k^2}=\frac{\pi^2}{6}.$
- Per $x=0$, $0=\dfrac{\pi^2}{3}+4\sum\dfrac{(-1)^k}{k^2}$, da cui $\sum_{k=1}^\infty\dfrac{(-1)^{k+1}}{k^2}=\dfrac{\pi^2}{12}$.

*Verifica con la forma esponenziale.* Per il dente di sega $f(x)=x$ si ha $|c_k|=\frac1{|k|}$ (si veda [Forma esponenziale](ref:chapter/8#p4)). Da {{formula:8.15}} segue $\frac{2\pi^3}{3}=2\pi\cdot2\sum_{k\ge1}\frac1{k^2}$, di nuovo $\frac{\pi^2}{6}$. Con la forma reale: $b_k=\frac{2(-1)^{k+1}}{k}$ e $\int_{-\pi}^{\pi}x^2dx=\frac{2\pi^3}{3}=4\pi\sum\frac1{k^2}$.

**Errore tipico 8.8.** Nella formula reale di Parseval si scrive $\pi a_0^2$ al posto di $2\pi a_0^2$ (o si mette il fattore $\pi$ anche sul termine $k=0$). Il termine costante ha peso $2\pi$ perché $\int_0^{2\pi}a_0^2dx=2\pi a_0^2$, mentre il peso $\pi$ viene da $\int_0^{2\pi}\cos^2kx\,dx=\pi$. La formula {{formula:8.14}} vale con la convenzione $a_0=\frac1{2\pi}\int f$; se si usasse la convenzione con $a_0/2$ nella serie, il termine costante diventerebbe $\pi a_0^2/2$. Conviene controllare il risultato con un caso noto, per esempio $f\equiv1$.

**Errore tipico 8.9.** Valutare la serie in un punto di salto e uguagliarla a $f(x_0)$. Nel dente di sega la serie in $x=\pi$ vale $0$ per la {{formula:8.16}}, mentre il valore assegnato dalla formula $f(x)=x$ sarebbe $\pi$. Prima di sostituire $x_0$ bisogna controllare che sia un punto di continuità, altrimenti si usa il valore regolarizzato. Allo stesso modo non si può scrivere $=$ al posto di $\sim$ prima di aver verificato le ipotesi di un teorema di convergenza puntuale.

**Errore tipico 8.10.** Dedurre convergenza uniforme dalla sola convergenza quadratica o puntuale, o su un intervallo che contiene un salto. Per una funzione regolare a tratti con un salto vale il fenomeno di Gibbs. La convergenza uniforme richiede, per esempio, $f$ continua e regolare a tratti, oppure che $f$ sia regolare a tratti e l'intervallo considerato non contenga salti.

## p6 | Serie di Fourier e derivazione

Dalla serie di Fourier di una funzione $f$ si vorrebbe ricavare quella di $f'$ derivando ogni termine, come per le [serie di potenze](ref:chapter/7#p4). Per le serie di funzioni la derivazione termine a termine richiede ipotesi precise (si veda [Serie di funzioni](ref:chapter/7#p3)), e qui le ipotesi si leggono sui coefficienti. In questa sezione si vede quando l'operazione è lecita e come la regolarità di $f$ si riflette sulla rapidità con cui $a_k$, $b_k$ tendono a zero.

### La serie derivata

Sia $f\in\widetilde{C}_{2\pi}$ con serie di Fourier $a_0+\sum_{k=1}^{\infty}(a_k\cos kx+b_k\sin kx)$. Derivando formalmente ogni termine, $\frac{d}{dx}\cos kx=-k\sin kx$ e $\frac{d}{dx}\sin kx=k\cos kx$, e il termine costante scompare. Si ottiene la serie con coefficienti $\alpha_0=0$, $\alpha_k=kb_k$, $\beta_k=-ka_k$.

:::formula{id="8.17" label="Serie formalmente derivata (periodo 2π)"}
$$f'\sim\sum_{k=1}^{\infty}\left(kb_k\cos kx-ka_k\sin kx\right)$$
:::

Questa è la serie di Fourier di $f'$ se $f$ è periodica e di classe $C^1$ su $\mathbb{R}$, perché allora $f'$ appartiene ancora a $\widetilde{C}_{2\pi}$. La verifica usa la periodicità e l'integrazione per parti. Il termine costante è $\frac{1}{2\pi}\int_0^{2\pi}f'=\frac{f(2\pi)-f(0)}{2\pi}=0$. Per $k\ge1$ si ha

$$
\frac1\pi\int_0^{2\pi}f'(x)\cos kx\,dx=\frac1\pi\big[f(x)\cos kx\big]_0^{2\pi}+\frac k\pi\int_0^{2\pi}f(x)\sin kx\,dx=kb_k,
$$

dove il termine di bordo si annulla proprio per la periodicità.

Nella forma esponenziale (si veda [Forma esponenziale](ref:chapter/8#p4)) il risultato è più immediato, perché $\frac{d}{dx}e^{ikx}=ik\,e^{ikx}$. Per $f$ di classe $C^r$ su $\mathbb{R}$, con $r\ge1$, il coefficiente complesso $\gamma_k$ della derivata $r$-esima è:

:::formula{id="8.18" label="Coefficienti della derivata r-esima"}
$$\gamma_k=(ik)^r\,c_k,\qquad f^{(r)}\sim\sum_{k=-\infty}^{+\infty}(ik)^r c_k\,e^{ikx}$$
:::

Derivare equivale dunque a moltiplicare i coefficienti per $ik$: la derivata "peggiora" i coefficienti di un fattore $k$.

### Quando la derivazione termine a termine è lecita

Il simbolo $\sim$ dice solo che la serie derivata è associata a $f'$. Per concludere che la sua somma sia $f'$ serve una condizione di convergenza.

**Teorema 8.6** (derivazione della serie di Fourier). Sia $f\in\widetilde{C}_{2\pi}$. Se la serie formalmente derivata {{formula:8.17}} converge totalmente, allora $f\in C^1(\mathbb{R})$, la serie di Fourier di $f$ converge totalmente e

$$
f'(x)=\sum_{k=1}^{\infty}\left(kb_k\cos kx-ka_k\sin kx\right),\qquad x\in\mathbb{R}.
$$

L'idea della dimostrazione è breve. La convergenza totale della serie derivata equivale a $\sum k|a_k|<\infty$ e $\sum k|b_k|<\infty$. A maggior ragione convergono $\sum|a_k|$ e $\sum|b_k|$, quindi la serie di $f$ converge totalmente, e il teorema di derivazione per serie di funzioni dà la tesi.

In pratica la condizione si verifica con il criterio di Weierstrass: si maggiora $|kb_k\cos kx-ka_k\sin kx|\le k(|a_k|+|b_k|)$ e si controlla che la serie numerica ottenuta converga.

**Esempio 8.8.** Sia $f(x)=\sum_{k=1}^{\infty}\dfrac{\sin kx}{k^4}$, funzione $2\pi$-periodica con $a_k=0$, $b_k=1/k^4$. La serie derivata ha termini $\dfrac{\cos kx}{k^3}$, con

$$
\left|\frac{\cos kx}{k^3}\right|\le\frac1{k^3},\qquad \sum_{k=1}^\infty\frac1{k^3}<\infty
$$

per la serie armonica generalizzata con $\alpha=3>1$. La serie derivata converge dunque totalmente. Per il teorema $f\in C^1(\mathbb{R})$ e $f'(x)=\sum_{k=1}^{\infty}\frac{\cos kx}{k^3}$. Questa è ancora una serie di Fourier, con $b_k=0$, e la sua derivata formale $-\sum\frac{\sin kx}{k^2}$ ha ancora maggiorante $1/k^2$ convergente. Applicando di nuovo il teorema a $f'$ si trova $f\in C^2(\mathbb{R})$. Alla terza derivata la serie $-\sum\frac{\cos kx}{k}$ non è totalmente convergente: il teorema non dà più informazioni. Qui il criterio si ferma dopo due derivazioni, in accordo con il decadimento $1/k^4$ dei coefficienti.

**Errore tipico 8.11.** Derivare termine a termine la serie di una funzione che non è continua come funzione periodica. Si prenda il dente di sega $f(x)=x$ su $(-\pi,\pi)$, prolungata con periodo $2\pi$: ha $a_k=0$ e $b_k=\dfrac{2(-1)^{k+1}}{k}$. La serie derivata ha termini $kb_k\cos kx=2(-1)^{k+1}\cos kx$, che non sono infinitesimi: la serie non converge. Eppure $f'=1$ sui tratti di regolarità. La derivazione è illecita perché $f$ ha un salto in $\pm\pi$, quindi non è di classe $C^1$ su $\mathbb{R}$ e l'integrazione per parti produce termini di bordo non nulli. Prima di derivare si controllano la continuità all'interno del periodo e che i limiti $f(-\pi^+)$ e $f(\pi^-)$ coincidano con il valore assegnato agli estremi, oltre alla convergenza della serie derivata.

### Regolarità e decadimento dei coefficienti

La relazione $\gamma_k=(ik)^rc_k$ permette di collegare regolarità e decadimento. Sia $f\in\widetilde{C}_{2\pi}$ di classe $C^r$ con $r\ge1$. Per $k\ne0$ vale $|c_k|=|\gamma_k|/|k|^r$. La successione $|\gamma_k|$ è limitata, perché $\gamma_k$ è il coefficiente di Fourier della funzione $f^{(r)}\in\widetilde{C}_{2\pi}$ e la disuguaglianza di Schwarz dà $|\gamma_k|\le\frac1{\sqrt2}\|f^{(r)}\|_2$. Ne segue la stima:

:::formula{id="8.19" label="Decadimento dei coefficienti di una funzione C^r"}
$$|c_k|=O\!\left(\frac1{|k|^r}\right),\qquad |a_k|,\,|b_k|=O\!\left(\frac1{k^r}\right)\qquad\text{per }|k|\to\infty$$
:::

I coefficienti $a_k$ e $b_k$ sono dunque infinitesimi di ordine almeno $r$ rispetto all'infinitesimo campione $1/|k|$.

Una conseguenza è la velocità di approssimazione in norma quadratica: $\|f-S_{n,f}\|_2\le\frac1{n^r}\|f^{(r)}\|_2$, cioè l'errore decade almeno come $1/n^r$.

Il collegamento si legge in due versi.

- Più $f$ è regolare, più rapidamente tendono a zero i coefficienti. Una funzione $C^1$ ha $a_k,b_k=O(1/k)$ e una $C^2$ ha $O(1/k^2)$. Per $r\ge2$ la serie di Fourier converge totalmente, perché $\sum 1/k^r<\infty$.
- Viceversa, se i coefficienti decadono abbastanza in fretta, la funzione è regolare. Se $|a_k|,|b_k|\le C/k^{r+2}$, allora le serie $\sum k^j(|a_k|+|b_k|)$ convergono per $j=0,\dots,r$. Applicando il teorema di derivazione $r$ volte si ottiene $f\in C^r(\mathbb{R})$. L'esempio precedente ($b_k=1/k^4$, funzione $C^2$) è il caso $r=2$.

**Errore tipico 8.12.** Concludere che $f$ è $C^r$ perché $a_k,b_k=O(1/k^r)$. Il decadimento è condizione necessaria per $f\in C^r$, non sufficiente. Si prenda $f(x)=\sum_{k=1}^\infty\frac{\sin kx}{k^2}$: i coefficienti sono $O(1/k^2)$, ma la serie derivata $\sum\frac{\cos kx}{k}$ diverge in $x=0$ e $f$ non è nemmeno di classe $C^1$. Per dedurre regolarità dai coefficienti serve un margine (ad esempio l'esponente $r+2$ visto sopra), o la convergenza totale della serie derivata.

Il decadimento dà anche un criterio rapido di confronto. Il dente di sega, con salti, ha coefficienti $b_k\sim1/k$. L'onda $|x|$, continua ma non $C^1$ come funzione periodica, ha $a_k\sim1/k^2$. Una funzione $C^2$ periodica ha coefficienti almeno $O(1/k^2)$, con convergenza totale della serie. Più la funzione è liscia, più la serie converge in fretta.
