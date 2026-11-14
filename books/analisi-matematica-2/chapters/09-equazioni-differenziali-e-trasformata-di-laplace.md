---
chapter: 9
title: Equazioni differenziali lineari e trasformata di Laplace
---

## p1 | Introduzione

Le equazioni differenziali descrivono fenomeni che cambiano nel tempo, dai sistemi fisici ai modelli biologici. In questo capitolo impari a riconoscere le loro soluzioni e a determinare quella che soddisfa dati iniziali assegnati. Per le equazioni lineari a coefficienti costanti, il polinomio caratteristico organizza la ricerca delle soluzioni; la trasformata di Laplace offre invece un metodo efficace per trattare problemi di Cauchy, anche quando il termine noto presenta discontinuità o ritardi.

Per affrontare gli argomenti servono le tecniche di integrazione, in particolare gli integrali impropri, e la familiarità con le equazioni differenziali elementari. È utile anche saper lavorare con serie di funzioni e serie di potenze. Queste conoscenze permettono di seguire le condizioni di esistenza delle soluzioni e i calcoli necessari per trasformare e invertire funzioni.

Al termine saprai risolvere equazioni lineari di ordine superiore, costruire la soluzione generale e imporre condizioni iniziali. Saprai calcolare trasformate e antitrasformate di Laplace, scomporre funzioni razionali in fratti semplici e usare la convoluzione. Potrai così risolvere problemi di Cauchy nel dominio trasformato e ricondurre la risposta al tempo, interpretando correttamente termini a gradino e intervalli di forzamento.

## p2 | Equazioni differenziali e problema di Cauchy

### Classificazione

Un'**equazione differenziale ordinaria** è una relazione tra una variabile reale $t$, una funzione incognita $y=y(t)$ e le sue derivate fino a un certo ordine $n$:

$$\mathcal{F}(t,y,y',\ldots,y^{(n)})=0$$

L'equazione è **di ordine $n$** se $n$ è l'ordine più alto delle derivate di $y$ che compaiono. Una **soluzione** in un intervallo $J$ è una funzione $y:J\to\mathbb{R}$ derivabile $n$ volte in $J$ che soddisfa la relazione per ogni $t\in J$.

Quando si può esplicitare la derivata di ordine massimo, l'equazione è **in forma normale**: $y^{(n)}=f(t,y,\ldots,y^{(n-1)})$. L'equazione $y'=ky$ descrive il decadimento radioattivo e la crescita di una popolazione. La legge della molla $m\,x''=-kx$ è invece del secondo ordine.

### Il problema di Cauchy

Il **problema di Cauchy** per un'equazione del primo ordine in forma normale assegna anche un dato iniziale:

$$\begin{cases} y'=f(t,y)\\ y(t_0)=y_0\end{cases}$$

Qui $f$ è definita in $\Omega=I\times D$, dove $I$ e $D$ sono intervalli aperti, e $(t_0,y_0)\in\Omega$. L'insieme delle soluzioni dell'equazione, parametrizzato da una costante arbitraria $c$ (con le eventuali soluzioni costanti non comprese nella famiglia), è l'**integrale generale**. Il dato iniziale seleziona la costante.

### Esistenza e unicità

**Teorema 9.1** (di Peano). Se $f$ è continua in $\Omega$ e $(t_0,y_0)$ è interno a $\Omega$, esiste un intervallo $\lbrack t_0-\alpha,t_0+\alpha\rbrack $, con $\alpha>0$, e una funzione $y$ derivabile con continuità, a valori in $D$, che risolve il problema di Cauchy. Il teorema non dice nulla sull'unicità: con la sola continuità possono esistere infinite soluzioni.

**Teorema 9.2** (di Cauchy–Lipschitz, versione locale). Se $f$ è continua in $\Omega$, il dato iniziale $(t_0,y_0)$ è interno a $\Omega$ ed $f$ è localmente lipschitziana rispetto a $y$ (ad esempio se $f_y$ esiste ed è continua), il problema di Cauchy ha una e una sola soluzione in un intorno di $t_0$.

Per le equazioni lineari vale un risultato globale. Se $A(t)$ e $b(t)$ sono continue su un intervallo aperto $I$, il problema $y'=A(t)y+b(t)$, $y(t_0)=y_0$ ha una e una sola soluzione definita su tutto $I$.

Come conseguenza dell'unicità, due curve integrali con un punto in comune coincidono.

### Equazioni lineari del primo ordine

Sia $y'=a(t)y+b(t)$ con $a,b$ continue su un intervallo $I$. Detta $A(t)$ una primitiva di $a$, l'integrale generale è

:::formula{id="9.1" label="Integrale generale dell'equazione lineare del primo ordine"}
$$y(t)=e^{A(t)}\left(c+\int e^{-A(t)}\,b(t)\,dt\right),\qquad c\in\mathbb{R}$$
:::

**Esempio 9.1.** Risolviamo $y'=2y+e^{t}$, $y(0)=1$.

1. Qui $a(t)=2$, quindi $A(t)=2t$, e $b(t)=e^t$.
2. Calcoliamo $\int e^{-2t}e^{t}\,dt=\int e^{-t}\,dt=-e^{-t}$.
3. L'integrale generale è $y=e^{2t}(c-e^{-t})=c\,e^{2t}-e^{t}$.
4. Dalla condizione $y(0)=c-1=1$ si ottiene $c=2$, quindi $y(t)=2e^{2t}-e^{t}$.
5. Verifica: $y'=4e^{2t}-e^t$ e $2y+e^t=4e^{2t}-e^t$, quindi l'equazione è soddisfatta.

La soluzione è definita su tutto $\mathbb{R}$, come prevede il risultato sui sistemi lineari.

### Equazioni a variabili separabili

Un'equazione del tipo $y'=g(t)\,h(y)$, con $g$ e $h$ continue, si risolve in due passi.

1. Ogni zero $y_*$ di $h$ dà la soluzione costante $y\equiv y_*$.
2. Dove $h(y)\neq 0$ si separano le variabili:
$\displaystyle \int\frac{dy}{h(y)}=\int g(t)\,dt$
Si ricava poi $y$ in funzione di $t$.

**Esempio 9.2.** Risolviamo $y'=t\,y^2$, $y(0)=1$.

1. La soluzione costante $y=0$ non è accettabile, perché non soddisfa $y(0)=1$.
2. Per $y\neq0$ si ha $\int y^{-2}\,dy=\int t\,dt$, cioè $-\dfrac1y=\dfrac{t^2}{2}+c$.
3. Da $y(0)=1$ segue $-1=c$, quindi
$\displaystyle y(t)=\frac{1}{1-\frac{t^2}{2}}=\frac{2}{2-t^2}$
4. Questa funzione è soluzione solo nell'intervallo $(-\sqrt2,\sqrt2)$, che contiene $t_0=0$. Agli estremi diverge.

Il secondo membro $t\,y^2$ è regolare su tutto il piano, eppure la soluzione non è globale. Questo non contraddice i teoremi: l'equazione non è lineare e il risultato globale non si applica.

**Errore tipico 9.1.** Dividere per $h(y)$ senza controllare i suoi zeri fa perdere le soluzioni costanti. Dopo l'integrazione bisogna poi stabilire l'intervallo massimale di definizione, quello che contiene $t_0$ e su cui la formula trovata ha senso. Spesso è più piccolo di quanto la formula lasci pensare.

## p3 | Equazioni lineari di ordine n

Un'equazione differenziale lineare di ordine $n$ è l'oggetto che torna più spesso negli scritti: serve saper descrivere l'insieme delle soluzioni, risolvere l'omogenea a coefficienti costanti e trovare una soluzione particolare. Le tecniche di questa sezione sono anche la base per risolvere gli stessi problemi con la trasformata di Laplace, trattata nelle sezioni seguenti. Per le equazioni del primo ordine si veda la sezione [Equazioni differenziali e problema di Cauchy](ref:chapter/9#p2).

### Struttura dell'insieme delle soluzioni

Siano $a_1,\dots,a_n$ e $b$ funzioni continue su un intervallo $I$. L'**equazione lineare di ordine $n$** è

:::formula{id="9.2" label="Equazione lineare di ordine n"}
$$y^{(n)}(t) + a_1(t)\,y^{(n-1)}(t) + \dots + a_{n-1}(t)\,y'(t) + a_n(t)\,y(t) = b(t), \qquad t\in I.$$
:::

Il primo membro si indica con $\mathcal{L}y$: l'operatore $y\mapsto\mathcal{L}y$ è lineare, perché la derivazione è lineare. L'equazione $\mathcal{L}y=0$ si dice **omogenea associata**.

Ponendo $y_i(t)=y^{(i-1)}(t)$ per $1\le i\le n$, l'equazione equivale al sistema del primo ordine

$$
\begin{cases}
y_1' = y_2\\
y_2' = y_3\\
\ \vdots\\
y_n' = -a_1 y_n - \dots - a_{n-1}y_2 - a_n y_1 + b(t),
\end{cases}
$$

cioè a $\mathbf{y}'=A\mathbf{y}+\mathbf{b}(t)$, e la prima componente di $\mathbf{y}$ è la soluzione dell'equazione di partenza. Da questa equivalenza discende il risultato fondamentale.

**Teorema 9.3** (struttura delle soluzioni). Siano $a_1,\dots,a_n,b$ continue sull'intervallo $I$.

1. L'insieme $S_0$ delle soluzioni dell'equazione omogenea è uno spazio vettoriale di dimensione $n$.
2. L'insieme $S_b$ delle soluzioni dell'equazione completa è lo spazio affine $S_b=y_p+S_0$, dove $y_p$ è una qualunque soluzione dell'equazione completa.

La prima parte si deve alla linearità: ogni combinazione lineare di soluzioni omogenee è ancora una soluzione omogenea. Concretamente, se $y_1,\dots,y_n$ è una base di $S_0$ (un **sistema fondamentale**), l'**integrale generale** è

$$y(t)=c_1y_1(t)+\dots+c_ny_n(t)+y_p(t),\qquad c_1,\dots,c_n\in\mathbb{R}.$$

Le $n$ costanti si fissano con il problema di Cauchy, cioè assegnando $y(t_0),y'(t_0),\dots,y^{(n-1)}(t_0)$ in un punto $t_0\in I$. Per quanto visto sui sistemi lineari con coefficienti continui, il problema di Cauchy ha una e una sola soluzione, definita su tutto $I$.

Il lavoro si riduce quindi a due passi: trovare una base di $S_0$ e trovare una sola soluzione particolare. Nel caso a coefficienti costanti entrambi i passi sono algoritmici.

### Equazione omogenea a coefficienti costanti

Supponiamo $a_1,\dots,a_n\in\mathbb{R}$ costanti. Cercando soluzioni del tipo $y=e^{\lambda t}$ si ha $\mathcal{L}e^{\lambda t}=\chi(\lambda)e^{\lambda t}$, dove

:::formula{id="9.3" label="Polinomio caratteristico"}
$$\chi(\lambda)=\lambda^n+a_1\lambda^{n-1}+\dots+a_{n-1}\lambda+a_n.$$
:::

Dunque $e^{\lambda t}$ risolve l'omogenea se e solo se $\chi(\lambda)=0$. Il polinomio $\chi$ è il polinomio caratteristico della matrice $A$ del sistema associato, $\det(A-\lambda I)$ a meno del segno. Una base di $S_0$ si costruisce dalle radici di $\chi$, tenendo conto delle molteplicità.

- Una radice reale $\lambda$ di molteplicità $m$ produce le $m$ funzioni $e^{\lambda t},\ te^{\lambda t},\dots,t^{m-1}e^{\lambda t}$.
- Una coppia di radici complesse coniugate $\alpha\pm i\beta$ ($\beta>0$), di molteplicità $m$, produce le $2m$ funzioni reali $t^je^{\alpha t}\cos\beta t$ e $t^je^{\alpha t}\sin\beta t$, per $j=0,\dots,m-1$.

Le funzioni reali nascono dalle parti reale e immaginaria di $e^{(\alpha+i\beta)t}=e^{\alpha t}(\cos\beta t+i\sin\beta t)$. Le molteplicità si sommano a $n$ (teorema fondamentale dell'algebra), quindi si ottengono esattamente $n$ funzioni, linearmente indipendenti.

**Esempio 9.3.** Per $y'''+y''-2y=0$ il polinomio caratteristico è $\chi(\lambda)=\lambda^3+\lambda^2-2$, con la radice reale $\lambda_1=1$. Dividendo si ottiene $\chi(\lambda)=(\lambda-1)(\lambda^2+2\lambda+2)$, da cui le radici complesse coniugate $\lambda_{2,3}=-1\pm i$. L'integrale generale reale è

$$y(t)=c_1e^{t}+c_2e^{-t}\cos t+c_3e^{-t}\sin t,\qquad c_1,c_2,c_3\in\mathbb{R}.$$

### Soluzione particolare: il metodo di somiglianza

Per coefficienti costanti e termine noto di forma speciale, $y_p$ si cerca "somigliante" a $b$. Sia

$$b(t)=e^{\mu t}\big[p(t)\cos\sigma t+q(t)\sin\sigma t\big],$$

con $p,q$ polinomi di grado al più $m$ ($\sigma=0$ dà $b=e^{\mu t}p(t)$, e $\mu=\sigma=0$ dà un polinomio). Si cerca

$$y_p(t)=t^{s}e^{\mu t}\big[P(t)\cos\sigma t+Q(t)\sin\sigma t\big],$$

con $P,Q$ polinomi **completi** di grado $m$ a coefficienti incogniti. L'esponente $s$ è la molteplicità di $\mu+i\sigma$ come radice di $\chi$, e vale $0$ se $\mu+i\sigma$ non è radice. Il caso $s\ge 1$ si chiama **risonanza**: la forzante ha la stessa forma di una soluzione omogenea, e senza il fattore $t^s$ l'ansatz non permette in generale di riprodurre tutti i coefficienti della forzante. Se l'ansatz senza tale fattore è interamente una soluzione omogenea, l'operatore applicato a esso dà zero e non può uguagliare una forzante non nulla. I coefficienti si trovano sostituendo $y_p$ nell'equazione e imponendo l'uguaglianza tra i due membri.

Se $b=b_1+b_2$, per linearità basta sommare $y_{p,1}+y_{p,2}$, con $y_{p,i}$ soluzione particolare relativa a $b_i$. Per termini noti di altra forma (per esempio $\tan t$) il metodo non si applica.

### Esempio svolto

Risolviamo il problema di Cauchy

$$y''-9y=e^{-3t},\qquad y(0)=0,\quad y'(0)=1.$$

*Passo 1: omogenea.* $\chi(\lambda)=\lambda^2-9$ ha le radici $\lambda=\pm3$, quindi $y_0(t)=c_1e^{-3t}+c_2e^{3t}$.

*Passo 2: scelta dell'ansatz.* Qui $\mu=-3$, $\sigma=0$, $p=1$. Poiché $-3$ è radice semplice di $\chi$, $s=1$ e si cerca $y_p=\alpha te^{-3t}$.

*Passo 3: sostituzione.* Si ha

$$
y_p'=\alpha e^{-3t}(1-3t),\qquad y_p''=\alpha e^{-3t}(-6+9t),
$$

quindi

$$
y_p''-9y_p=\alpha e^{-3t}(-6+9t-9t)=-6\alpha\, e^{-3t}.
$$

Imponendo $-6\alpha=1$ si ottiene $\alpha=-\tfrac16$. L'integrale generale è

$$
y(t)=c_1e^{-3t}+c_2e^{3t}-\tfrac16\,te^{-3t}.
$$

*Passo 4: condizioni iniziali, sull'integrale generale.* Derivando,

$$
y'(t)=-3c_1e^{-3t}+3c_2e^{3t}-\tfrac16e^{-3t}(1-3t).
$$

Le condizioni danno

$$
\begin{cases}
c_1+c_2=0\\[2pt]
-3c_1+3c_2-\tfrac16=1
\end{cases}
\ \Longrightarrow\
c_2-c_1=\tfrac7{18},\ c_2=-c_1
\ \Longrightarrow\
c_1=-\tfrac7{36},\ c_2=\tfrac7{36}.
$$

La soluzione è

$$
y(t)=\tfrac7{36}\big(e^{3t}-e^{-3t}\big)-\tfrac16\,te^{-3t}.
$$

**Errore tipico 9.2.** Si impongono le condizioni iniziali alla sola soluzione omogenea $c_1e^{-3t}+c_2e^{3t}$ e solo dopo si aggiunge $y_p$. Le costanti $c_1,c_2$ vanno determinate sull'integrale generale completo $y_0+y_p$, derivando anche $y_p$: qui $y_p'(0)=-\tfrac16\neq0$ cambia il risultato. Un altro errore frequente è dimenticare il fattore $t^s$ in caso di risonanza. Provare $y_p=\alpha e^{-3t}$ darebbe $\alpha(9-9)e^{-3t}=0\ne e^{-3t}$, e non si troverebbe nessun $\alpha$ accettabile.

### Risonanza con forzante trigonometrica

Per $y''+y=\cos t$ si ha $\chi(\lambda)=\lambda^2+1$, con radici $\pm i$, quindi $y_0=c_1\cos t+c_2\sin t$. La forzante ha $\mu=0$, $\sigma=1$ e $\mu+i\sigma=i$ è radice semplice, per cui $s=1$ e si cerca

$$
y_p=t(\alpha\cos t+\beta\sin t).
$$

Con la sostituzione si ottiene $y_p''+y_p=2\beta\cos t-2\alpha\sin t$. Dunque $\beta=\tfrac12$, $\alpha=0$ e $y_p=\tfrac12\,t\sin t$. L'integrale generale è $y=c_1\cos t+c_2\sin t+\tfrac12 t\sin t$. Il fattore $t$ fa sì che le oscillazioni crescano in ampiezza senza limite.

:::image{src="assets/2ae3ff66-risonanza-t-seno.svg" alt="Grafico di t sin(t)/2 con le rette tratteggiate t/2 e -t/2" caption="Fig. 9.1 — Risonanza: la soluzione particolare t sin(t)/2 oscilla con ampiezza che cresce linearmente, racchiusa tra le rette t/2 e -t/2."}
:::

**Errore tipico 9.3.** Si usa nell'ansatz soltanto la funzione che compare in $b$: per $b=\cos t$ si prova $\alpha\cos t$, ma l'ansatz deve contenere sempre **entrambi** $\cos$ e $\sin$ (con $P,Q$ completi), perché le derivate scambiano le due funzioni.

## p4 | Trasformata di Laplace: definizione e proprietà

### Motivazione e definizione

La trasformata di Laplace associa a una funzione $f(t)$ della variabile temporale $t\ge 0$ una nuova funzione $F(s)$. Derivare in $t$ diventa moltiplicare per $s$, e un'equazione differenziale lineare a coefficienti costanti diventa un'equazione algebrica. Questa sezione fissa la definizione e le regole di calcolo. L'antitrasformata e le equazioni differenziali sono trattate nelle sezioni [Antitrasformata e convoluzione](ref:chapter/9#p5) e [Problemi di Cauchy con la trasformata di Laplace](ref:chapter/9#p6).

**Definizione 9.1** (trasformata di Laplace). Sia $f:\lbrack 0,+\infty)\to\mathbb{R}$ integrabile su ogni intervallo $\lbrack 0,R\rbrack $. La sua trasformata di Laplace è la funzione

:::formula{id="9.4" label="Trasformata di Laplace"}
$$\mathcal{L}\lbrack f\rbrack (s)=F(s)=\int_0^{+\infty} e^{-st}f(t)\,dt$$
:::

definita per i valori di $s$ per cui l'integrale improprio converge. Nel corso si considera $s$ reale; la definizione ha senso anche per $s$ complesso, con $\operatorname{Re} s$ al posto di $s$.

Poiché l'integrale parte da $0$, i valori di $f$ per $t<0$ non contano. Per questo ogni funzione si intende nulla per $t<0$, cioè moltiplicata per il gradino di Heaviside $H(t)$.

### Ascissa di convergenza

Il fattore $e^{-st}$ decresce tanto più in fretta quanto più $s$ è grande. Se l'integrale converge assolutamente per un certo $s_1$, converge assolutamente anche per ogni $s>s_1$. Più in generale, se converge per $s_1$, converge per ogni $s>s_1$; l'insieme di convergenza è dunque una semiretta.

**Definizione 9.2** (ascissa di convergenza). Il numero $\sigma_0\in[-\infty,+\infty]$ tale che l'integrale converge per $s>\sigma_0$ e non converge per $s<\sigma_0$ si chiama ascissa di convergenza di $f$.

**Teorema 9.4** (ordine esponenziale). Se $f$ è continua a tratti su $\lbrack 0,+\infty)$ e esistono $M>0$, $a\in\mathbb{R}$ tali che $|f(t)|\le Me^{at}$ per ogni $t\ge 0$, allora $\mathcal{L}\lbrack f\rbrack (s)$ converge per ogni $s>a$, e $F(s)\to 0$ per $s\to+\infty$.

Ciò segue dal confronto: $|e^{-st}f(t)|\le Me^{-(s-a)t}$, che è integrabile su $\lbrack 0,+\infty)$ se $s>a$. Polinomi, esponenziali, seno e coseno sono tutti di ordine esponenziale. La funzione $e^{t^2}$ invece cresce più di ogni esponenziale e non ammette trasformata per alcun $s$.

### Trasformate elementari

Il calcolo di base è quello dell'esponenziale. Per $s>a$:

$$\int_0^{R}e^{-st}e^{at}\,dt=\frac{1-e^{-(s-a)R}}{s-a}\;\xrightarrow[R\to+\infty]{}\;\frac{1}{s-a}.$$

Per $s\le a$ l'integrale diverge. Si ottengono così le trasformate fondamentali, ciascuna con la propria ascissa di convergenza:

:::formula{id="9.5" label="Trasformate elementari"}
$$\mathcal{L}\lbrack e^{at}\rbrack =\frac{1}{s-a}\ (\sigma_0=a),\qquad \mathcal{L}\lbrack 1\rbrack =\mathcal{L}\lbrack H\rbrack =\frac1s\ (\sigma_0=0),\qquad \mathcal{L}\lbrack t^n\rbrack =\frac{n!}{s^{n+1}}\ (\sigma_0=0)$$
:::

Per $t^n$ si integra per parti $n$ volte; per $\sin\omega t$ e $\cos\omega t$ si usa la formula di Eulero con $a=\pm i\omega$, ottenendo, per $\omega\ne 0$:

:::formula{id="9.6" label="Trasformate di seno e coseno"}
$$\mathcal{L}\lbrack \sin\omega t\rbrack =\frac{\omega}{s^2+\omega^2},\qquad \mathcal{L}\lbrack \cos\omega t\rbrack =\frac{s}{s^2+\omega^2},\qquad \sigma_0=0$$
:::

### Proprietà

Siano $F=\mathcal{L}\lbrack f\rbrack $ e $G=\mathcal{L}\lbrack g\rbrack $, con $f,g$ di ordine esponenziale.

1. **Linearità**: $\mathcal{L}\lbrack \alpha f+\beta g\rbrack =\alpha F+\beta G$, per $s$ maggiore di entrambe le ascisse.
2. **Traslazione in $s$**: moltiplicare per un esponenziale sposta l'argomento.

:::formula{id="9.7" label="Traslazione in s"}
$$\mathcal{L}\lbrack e^{at}f(t)\rbrack (s)=F(s-a)$$
:::

L'ascissa di convergenza aumenta di $a$.

3. **Traslazione nel tempo**: per $t_0>0$,

:::formula{id="9.8" label="Traslazione nel tempo"}
$$\mathcal{L}\lbrack H(t-t_0)\,f(t-t_0)\rbrack (s)=e^{-st_0}F(s)$$
:::

4. **Cambio di scala**: per $c>0$,

:::formula{id="9.9" label="Cambio di scala"}
$$\mathcal{L}\lbrack f(ct)\rbrack (s)=\frac1c\,F\!\left(\frac sc\right)$$
:::

5. **Derivata**: se $f$ è continua e derivabile a tratti e $f$ è di ordine esponenziale, allora per $s$ abbastanza grande

:::formula{id="9.10" label="Trasformata della derivata"}
$$\mathcal{L}\lbrack f'\rbrack (s)=sF(s)-f(0^+),\qquad \mathcal{L}\lbrack f''\rbrack (s)=s^2F(s)-s f(0^+)-f'(0^+)$$
:::

La seconda formula richiede anche che $f'$ sia continua e di ordine esponenziale e che sia derivabile a tratti; in essa si usa $f'(0^+)$.

La prima si ottiene integrando per parti: $\int_0^{R}e^{-st}f'\,dt=\left[e^{-st}f\right]_0^R+s\int_0^Re^{-st}f\,dt$, e il termine di bordo in $R$ tende a $0$ per $s$ grande. La seconda si ottiene applicando la prima a $f'$.

### Esempi svolti

**Esempio 9.4.** Calcolare $\mathcal{L}\lbrack 3t^2-2e^{-t}+5\sin 2t\rbrack $ e l'ascissa di convergenza.

Per linearità, con le formule elementari ($a=-1$, $\omega=2$):

$$F(s)=3\cdot\frac{2}{s^3}-\frac{2}{s+1}+5\cdot\frac{2}{s^2+4}=\frac{6}{s^3}-\frac{2}{s+1}+\frac{10}{s^2+4}.$$

I tre addendi convergono per $s>0$, $s>-1$, $s>0$ rispettivamente: l'ascissa della somma è $\sigma_0=0$, la maggiore.

**Esempio 9.5.** Calcolare $\mathcal{L}\lbrack e^{2t}\cos 3t\rbrack $.

Si ha $\mathcal{L}\lbrack \cos 3t\rbrack =\dfrac{s}{s^2+9}$. Per la traslazione in $s$ con $a=2$ si sostituisce $s$ con $s-2$:

$$\mathcal{L}\lbrack e^{2t}\cos 3t\rbrack =\frac{s-2}{(s-2)^2+9},\qquad s>2.$$

**Esempio 9.6.** Calcolare $\mathcal{L}\lbrack \sin^2 t\rbrack $ usando la derivata.

Sia $f(t)=\sin^2t$, con $f(0)=0$ e $f'(t)=2\sin t\cos t=\sin 2t$. Allora $\mathcal{L}\lbrack f'\rbrack =\dfrac{2}{s^2+4}$, e per la regola della derivata $sF(s)-f(0)=sF(s)$. Perciò

$$F(s)=\frac{2}{s\,(s^2+4)}.$$

**Esempio 9.7.** Calcolare $\mathcal{L}\lbrack H(t-2)\,t^2\rbrack $.

La traslazione nel tempo richiede che la funzione sia scritta come funzione di $t-2$. Si sviluppa $t^2=\big((t-2)+2\big)^2=(t-2)^2+4(t-2)+4$, quindi

$$H(t-2)\,t^2=H(t-2)\big[(t-2)^2+4(t-2)+4\big].$$

Posto $f(\tau)=\tau^2+4\tau+4$, si ha $F(s)=\dfrac{2}{s^3}+\dfrac{4}{s^2}+\dfrac{4}{s}$, e infine

$$\mathcal{L}\lbrack H(t-2)\,t^2\rbrack =e^{-2s}\left(\frac{2}{s^3}+\frac{4}{s^2}+\frac4s\right).$$

In modo analogo, la finestra $H(t-1)-H(t-3)$, uguale a $1$ per $1\le t<3$ e a $0$ altrove, ha trasformata $\dfrac{e^{-s}-e^{-3s}}{s}$.

**Errore tipico 9.4.** Nella traslazione nel tempo si scrive $\mathcal{L}\lbrack H(t-t_0)f(t)\rbrack =e^{-st_0}F(s)$. La formula vale solo se la funzione traslata è $f(t-t_0)$. Nell'esempio sopra, $e^{-2s}\cdot 2/s^3$ non è la trasformata di $H(t-2)t^2$: bisogna prima riscrivere $t$ come $(t-2)+2$.

**Errore tipico 9.5.** Nella trasformata della derivata si dimentica il termine $-f(0)$, oppure, per la derivata seconda, il termine $-f'(0)$. Un altro scambio frequente è confondere $F(s-a)$ con $F(s)-a$: la traslazione in $s$ sostituisce l'argomento, non sottrae una costante al risultato.

**Errore tipico 9.6.** Si lascia $e^{-st_0}$ fuori dal conto delle ascisse: moltiplicare per $e^{-st_0}$ non cambia $\sigma_0$, mentre moltiplicare $f$ per $e^{at}$ lo sposta di $a$. Non vanno confusi i due effetti.

## p5 | Antitrasformata e convoluzione

Dopo aver calcolato trasformate, in questa sezione si percorre la strada opposta: data $F(s)$ si cerca la funzione $f(t)$ tale che $\mathcal{L}\lbrack f\rbrack =F$. Nei problemi di Cauchy è il passaggio che chiude la risoluzione, e si fa quasi sempre con la scomposizione in fratti semplici e con le regole di traslazione. Quando $F$ è un prodotto, la convoluzione permette di antitrasformare senza scomporre.

### L'antitrasformata

**Definizione 9.3** (antitrasformata). Data $F$, si dice antitrasformata di $F$ una funzione $f$ tale che $\mathcal{L}\lbrack f\rbrack (s)=F(s)$. Si scrive $f=\mathcal{L}^{-1}\lbrack F\rbrack $.

Due funzioni continue su $\lbrack 0,+\infty)$ con la stessa trasformata coincidono. L'antitrasformata di una funzione continua è dunque unica, e come in tutto il capitolo le funzioni si intendono nulle per $t<0$. L'operatore $\mathcal{L}^{-1}$ è lineare, perché lo è $\mathcal{L}$:

$$\mathcal{L}^{-1}\lbrack \alpha F+\beta G\rbrack =\alpha\,\mathcal{L}^{-1}\lbrack F\rbrack +\beta\,\mathcal{L}^{-1}\lbrack G\rbrack .$$

Le antitrasformate di base si leggono dalle trasformate elementari {{formula:9.5}} e da quelle di seno e coseno {{formula:9.6}}, con $a\in\mathbb{R}$ e $\omega>0$:

- $\mathcal{L}^{-1}\!\left[\dfrac{1}{s-a}\right]=e^{at}$
- $\mathcal{L}^{-1}\!\left[\dfrac{n!}{s^{n+1}}\right]=t^n$
- $\mathcal{L}^{-1}\!\left[\dfrac{\omega}{s^2+\omega^2}\right]=\sin\omega t$
- $\mathcal{L}^{-1}\!\left[\dfrac{s}{s^2+\omega^2}\right]=\cos\omega t$

La traslazione in $s$ {{formula:9.7}} dà inoltre $\mathcal{L}^{-1}\lbrack F(s-a)\rbrack =e^{at}f(t)$. Serve per i denominatori $(s-a)^2+\omega^2$.

### Funzioni razionali e fratti semplici

Sia $F(s)=P(s)/Q(s)$ con $P,Q$ polinomi. La trasformata di una funzione continua a tratti e di ordine esponenziale tende a $0$ per $s\to+\infty$, quindi le funzioni razionali che si antitrasformano come funzioni hanno $\deg P<\deg Q$. Se $\deg P\ge\deg Q$, $F$ non è la trasformata di una funzione di questo tipo.

Si fattorizza $Q$ in $\mathbb{R}$ e a ogni fattore si associano i fratti semplici:

1. un fattore $(s-a)$ semplice dà $\dfrac{A}{s-a}$;
2. un fattore $(s-a)^m$ dà $\dfrac{A_1}{s-a}+\dfrac{A_2}{(s-a)^2}+\dots+\dfrac{A_m}{(s-a)^m}$;
3. un fattore irriducibile $s^2+ps+q$ (con $p^2-4q<0$) di molteplicità $m$ dà $\displaystyle\sum_{j=1}^{m}\dfrac{B_j s+C_j}{(s^2+ps+q)^j}$.

I coefficienti si trovano per confronto dei polinomi o valutando in punti opportuni. Per un fattore quadratico si completa il quadrato, $s^2+ps+q=(s-a)^2+\omega^2$, e si scrive il numeratore come $B(s-a)+D$. Così i termini diventano $\dfrac{s-a}{(s-a)^2+\omega^2}$ e $\dfrac{\omega}{(s-a)^2+\omega^2}$, che si antitrasformano in $e^{at}\cos\omega t$ ed $e^{at}\sin\omega t$.

**Esempio 9.8.** Antitrasformare

$$
F(s)=\frac{1}{s\,(s^2+2s+2)}.
$$

Il fattore $s^2+2s+2$ ha discriminante $4-8<0$, quindi è irriducibile. Si pone

$$
\frac{1}{s(s^2+2s+2)}=\frac{A}{s}+\frac{Bs+C}{s^2+2s+2}.
$$

Riducendo allo stesso denominatore si ottiene $1=A(s^2+2s+2)+(Bs+C)s$. Confrontando i coefficienti:

- termine in $s^2$: $A+B=0$;
- termine in $s$: $2A+C=0$;
- termine costante: $2A=1$.

Quindi $A=\tfrac12$, $B=-\tfrac12$, $C=-1$. Si completa il quadrato, $s^2+2s+2=(s+1)^2+1$, e si riscrive il numeratore:

$$
F(s)=\frac{1}{2s}-\frac12\,\frac{s+2}{(s+1)^2+1}=\frac{1}{2s}-\frac12\left[\frac{s+1}{(s+1)^2+1}+\frac{1}{(s+1)^2+1}\right].
$$

Per la traslazione in $s$:

$$
f(t)=\frac12-\frac12\,e^{-t}\,(\cos t+\sin t),\qquad t\ge 0.
$$

Come controllo, $F(s)\sim 1/s^3$ per $s\to\infty$, quindi ci si aspetta $f(0)=f'(0)=0$. Infatti $f(0)=\tfrac12-\tfrac12=0$ e $f'(t)=e^{-t}\sin t$, che vale $0$ in $t=0$.

**Radice multipla.** Per $F(s)=\dfrac{1}{s^2(s+1)}$ si pone $\dfrac{A}{s}+\dfrac{B}{s^2}+\dfrac{C}{s+1}$. Si ottiene $B=1$, $C=1$, $A=-1$, e quindi $f(t)=t-1+e^{-t}$.

**Errore tipico 9.7.** Con una radice di molteplicità $m$ si scrive un solo fratto $\dfrac{A}{(s-a)^m}$, dimenticando i termini con le potenze più basse. Il sistema allora non ha soluzione. Un altro errore è lasciare al numeratore del fratto quadratico solo una costante, o non completare il quadrato, e poi non riconoscere seno e coseno traslati.

### Convoluzione

**Definizione 9.4** (convoluzione). Date $f,g$ continue a tratti su $\lbrack 0,+\infty)$, il loro prodotto di convoluzione è

$$
(f*g)(t)=\int_0^t f(u)\,g(t-u)\,du,\qquad t\ge0.
$$

La convoluzione è commutativa, associativa e distributiva rispetto alla somma. Si ha $f*g=g*f$, come si vede col cambio di variabile $u\mapsto t-u$.

:::formula{id="9.11" label="Trasformata della convoluzione"}
$$\mathcal{L}\lbrack f*g\rbrack (s)=F(s)\,G(s)$$
:::

Vale per $s$ maggiore delle ascisse di convergenza di $f$ e $g$. Il prodotto $F\,G$ si antitrasforma quindi nella convoluzione, non nel prodotto $f\,g$.

**Esempio 9.9.** Antitrasformare $\dfrac{1}{s(s^2+1)}$. Si riconosce $\dfrac1s=\mathcal{L}\lbrack 1\rbrack $ e $\dfrac{1}{s^2+1}=\mathcal{L}\lbrack \sin t\rbrack $, quindi

$$
f(t)=(1*\sin)(t)=\int_0^t \sin(t-u)\,du=\int_0^t\sin w\,dw=1-\cos t.
$$

Lo stesso risultato si ottiene con i fratti semplici: $\dfrac1{s(s^2+1)}=\dfrac1s-\dfrac{s}{s^2+1}$.

**Errore tipico 9.8.** Scrivere $\mathcal{L}^{-1}\lbrack FG\rbrack =fg$. Ad esempio $\mathcal{L}^{-1}\!\left[\frac{1}{s}\cdot\frac{1}{s^2+1}\right]$ non è $1\cdot\sin t$. Nell'integrale di convoluzione, poi, l'argomento di $g$ è $t-u$ e gli estremi sono $0$ e $t$, non $0$ e $+\infty$.

### Gradino di Heaviside e traslazioni nel tempo

Il gradino di Heaviside è $H(t)=0$ per $t<0$ e $H(t)=1$ per $t\ge0$. La funzione $H(t-t_0)$, con $t_0>0$, vale $0$ prima di $t_0$ e $1$ dopo. Moltiplicare per essa "accende" una funzione all'istante $t_0$. La traslazione nel tempo {{formula:9.8}} si legge, in senso inverso, così:

:::formula{id="9.12" label="Antitrasformata di un ritardo"}
$$\mathcal{L}^{-1}\!\left[e^{-st_0}F(s)\right]=H(t-t_0)\,f(t-t_0),\qquad t_0>0.$$
:::

Quando compare un fattore $e^{-st_0}$, si antitrasforma il resto, si sostituisce $t$ con $t-t_0$ ovunque nell'espressione e si moltiplica per $H(t-t_0)$.

**Esempio 9.10.** Antitrasformare $F(s)=\dfrac{e^{-2s}}{s(s+1)}$. Si scompone $\dfrac{1}{s(s+1)}=\dfrac1s-\dfrac1{s+1}$, che ha antitrasformata $g(t)=1-e^{-t}$. Con $t_0=2$:

$$
f(t)=H(t-2)\left(1-e^{-(t-2)}\right)=\begin{cases}0 & 0\le t<2,\\[2pt] 1-e^{-(t-2)} & t\ge2.\end{cases}
$$

:::image{src="assets/f09fb713-antitrasformata-ritardo-grafico.svg" alt="Grafico di f(t) = H(t-2)(1-e^{-(t-2)}) e della funzione non ritardata 1-e^{-t}" caption="Fig. 9.2 — La curva continua è la funzione ritardata: nulla fino a t = 2, poi uguale a 1 - e^{-(t-2)}. La curva tratteggiata è 1 - e^{-t}: la prima è la seconda traslata a destra di 2."}
:::

**Errore tipico 9.9.** Scrivere $f(t)=H(t-2)\left(1-e^{-t}\right)$, traslando il gradino ma non l'argomento della funzione. Si ottiene una funzione che salta da $0$ a $1-e^{-2}$ in $t=2$, mentre il risultato corretto è continuo e vale $0$ in $t=2$. Occorre sostituire $t-t_0$ in tutta $g$.

Con più esponenziali, ad esempio $\dfrac{1-e^{-s}}{s^2}$, si antitrasforma termine per termine, ciascuno con il proprio ritardo: $t-H(t-1)(t-1)$. Questo è il modo per trattare i termini noti discontinui nei problemi di Cauchy.

Il metodo si riassume così: si riduce $F$ a somma di termini noti (fratti semplici, traslazioni in $s$, ritardi $e^{-st_0}$), oppure si riconosce un prodotto e si usa la convoluzione, e si scrive il risultato per $t\ge0$ con i gradini dove servono.

## p6 | Problemi di Cauchy con la trasformata di Laplace

Nelle sezioni precedenti abbiamo risolto le equazioni lineari a coefficienti costanti in due passi: si cerca l'integrale generale dell'omogenea con il polinomio caratteristico, si aggiunge un integrale particolare con il metodo di somiglianza e solo alla fine si impongono le condizioni iniziali, risolvendo un sistema lineare per le costanti. La trasformata di Laplace segue un'altra strada. Il problema di Cauchy diventa un'equazione **algebrica** nell'incognita $Y(s)=\mathcal{L}\lbrack y\rbrack (s)$, nella quale le condizioni iniziali sono già incorporate, e la soluzione si ottiene antitrasformando. Il metodo è particolarmente comodo quando il termine noto è un'espressione a tratti, che con la somiglianza richiederebbe di risolvere più problemi e di raccordare le soluzioni.

### Il metodo

Consideriamo il problema di Cauchy per un'equazione lineare a coefficienti costanti, qui di ordine $2$ (l'ordine $n$ si tratta allo stesso modo):

$$
\begin{cases}
y''(t)+a_1 y'(t)+a_2 y(t)=f(t), & t\ge 0,\\
y(0)=y_0,\quad y'(0)=y_1,
\end{cases}
$$

con $a_1,a_2\in\mathbb{R}$ e $f$ continua a tratti e di ordine esponenziale, in modo che $F=\mathcal{L}\lbrack f\rbrack $ esista per $s$ abbastanza grande. Si suppone anche che la soluzione $y$ sia di ordine esponenziale: questo è sempre vero quando i coefficienti sono costanti e $f$ ha ordine esponenziale. Le funzioni sono intese nulle per $t<0$, quindi il metodo fornisce la soluzione per $t\ge 0$. Se la condizione iniziale è assegnata in $t_0\neq 0$, si pone $z(t)=y(t+t_0)$, che risolve la stessa equazione con termine noto $f(t+t_0)$ e dati iniziali in $0$, e ci si riconduce al caso $t_0=0$.

Si applica $\mathcal{L}$ a entrambi i membri. Per la linearità e per la regola di derivazione {{formula:9.10}} si ha

$$
\mathcal{L}\lbrack y'\rbrack =sY-y_0,\qquad \mathcal{L}\lbrack y''\rbrack =s^2Y-sy_0-y_1 ,
$$

e quindi

$$
(s^2Y-sy_0-y_1)+a_1(sY-y_0)+a_2Y=F(s).
$$

Raccogliendo $Y$ si ottiene la formula risolutiva nel dominio di Laplace.

:::formula{id="9.13" label="Soluzione del problema di Cauchy nel dominio di Laplace"}
$$Y(s)=\frac{F(s)+(s+a_1)\,y_0+y_1}{s^2+a_1 s+a_2}$$
:::

Il denominatore è il polinomio caratteristico dell'equazione calcolato in $s$ (; si veda [Equazioni lineari di ordine n](ref:chapter/9#p3)). Per un'equazione di ordine $n$ resta uguale: il denominatore è $\chi(s)$ e il numeratore è $F(s)$ più un polinomio di grado $n-1$ costruito con le $n$ condizioni iniziali. Il termine $\dfrac{(s+a_1)y_0+y_1}{\chi(s)}$ è la trasformata della soluzione dell'omogenea con quei dati iniziali, mentre $\dfrac{F(s)}{\chi(s)}$ è la risposta al termine noto con dati iniziali nulli. Questa decomposizione è il principio di sovrapposizione visto nel dominio di Laplace.

Il procedimento è il seguente.

1. Si trasforma l’equazione con le regole di derivazione, inserendo i dati $y(0),y'(0)$.
2. Si ricava $Y(s)$ dalla formula risolutiva.
3. Se $F(s)$ ha una forma adatta, si scompone $Y$ in fratti semplici e si antitrasforma con le tabelle ([Antitrasformata e convoluzione](ref:chapter/9#p5)); negli altri casi si usano la convoluzione o altre tecniche di inversione.
4. Si controllano le condizioni iniziali sulla $y(t)$ trovata.

### Esempio con termine noto esponenziale

**Esempio 9.11.** Risolviamo

$$
\begin{cases}
y''-3y'+2y=e^{-t},\\
y(0)=1,\quad y'(0)=0.
\end{cases}
$$

Trasformiamo: $\mathcal{L}\lbrack e^{-t}\rbrack =\dfrac{1}{s+1}$, quindi

$$
(s^2Y-s)-3(sY-1)+2Y=\frac{1}{s+1}.
$$

Raccogliendo, $(s^2-3s+2)Y=\dfrac{1}{s+1}+s-3$. Riducendo allo stesso denominatore, $\dfrac{1}{s+1}+s-3=\dfrac{1+(s-3)(s+1)}{s+1}=\dfrac{s^2-2s-2}{s+1}$. Poiché $s^2-3s+2=(s-1)(s-2)$,

$$
Y(s)=\frac{s^2-2s-2}{(s+1)(s-1)(s-2)}.
$$

Le radici del denominatore sono semplici e il grado del numeratore è minore di quello del denominatore: scomponiamo

$$
Y(s)=\frac{A}{s+1}+\frac{B}{s-1}+\frac{C}{s-2}.
$$

Con il metodo dei residui (si "copre" il fattore e si valuta nella radice):

$$
A=\frac{1+2-2}{(-2)(-3)}=\frac16,\qquad
B=\frac{1-2-2}{(2)(-1)}=\frac32,\qquad
C=\frac{4-4-2}{(3)(1)}=-\frac23 .
$$

Come controllo, $A+B+C=1$ è il coefficiente di $s^2$ del numeratore. Dalle trasformate elementari {{formula:9.5}},

$$
y(t)=\frac16 e^{-t}+\frac32 e^{t}-\frac23 e^{2t},\qquad t\ge 0 .
$$

Verifica: $y(0)=\frac16+\frac32-\frac23=1$ e $y'(0)=-\frac16+\frac32-\frac43=0$.

**Errore tipico 9.10.** Dimenticare i termini dovuti ai dati iniziali, oppure sbagliarne i segni, è l'errore più frequente. Nell'esempio, $\mathcal{L}\lbrack -3y'\rbrack =-3(sY-y_0)$ produce $+3y_0$ e quindi il termine $-3$ in $s-3$ (che compare perché $y_0=1$); chi scrive $-3sY$ senza il contributo di $y_0$ trova una soluzione che non soddisfa $y(0)=1$. Il controllo finale su $y(0)$ e $y'(0)$ richiede pochi secondi ed è la protezione migliore. Un altro errore è applicare la formula $s^2Y-sy_0-y_1$ con $y_0,y_1$ scambiati: $y_0$ moltiplica $s$, $y_1$ no.

### Termini noti discontinui

Un termine noto a tratti, per esempio un impulso rettangolare o un interruttore che si apre all'istante $t_0$, si scrive con il gradino di Heaviside $H(t)$. Se $f=f_1$ per $t<t_0$ e $f=f_2$ per $t\ge t_0$, allora

$$
f(t)=f_1(t)+\bigl(f_2(t)-f_1(t)\bigr)H(t-t_0).
$$

Per trasformare termini del tipo $H(t-t_0)\,g(t)$ occorre che $g$ compaia **traslata**: la regola del ritardo {{formula:9.8}} dice che

$$
\mathcal{L}\bigl[H(t-t_0)\,g(t-t_0)\bigr]=e^{-st_0}G(s),
$$

e analogamente, nell'antitrasformata {{formula:9.12}}, $\mathcal{L}^{-1}\lbrack e^{-st_0}G(s)\rbrack =H(t-t_0)\,g(t-t_0)$. Se nel termine noto compare $H(t-t_0)\,h(t)$ con $h$ non già ritardata, si riscrive $h(t)=g(t-t_0)$, cioè $g(u)=h(u+t_0)$. Per esempio

$$
tH(t-1)=\bigl((t-1)+1\bigr)H(t-1),\qquad
\mathcal{L}\bigl[tH(t-1)\bigr]=e^{-s}\left(\frac1{s^2}+\frac1s\right).
$$

**Esempio 9.12.** Un sistema smorzato è forzato da un impulso unitario di durata $1$:

$$
\begin{cases}
y''+3y'+2y=f(t),\\
y(0)=0,\quad y'(0)=0,
\end{cases}
\qquad
f(t)=\begin{cases}1 & 0\le t<1,\\ 0 & t\ge 1.\end{cases}
$$

Scriviamo $f(t)=1-H(t-1)$ per $t\ge 0$, da cui $F(s)=\dfrac{1-e^{-s}}{s}$. Con dati iniziali nulli, la formula {{formula:9.13}} dà

$$
Y(s)=\frac{1-e^{-s}}{s(s+1)(s+2)}=(1-e^{-s})\,G(s),\qquad G(s)=\frac{1}{s(s+1)(s+2)}.
$$

Scomponiamo $G$ in fratti semplici:

$$
G(s)=\frac{1/2}{s}-\frac{1}{s+1}+\frac{1/2}{s+2},
$$

dove i coefficienti sono $\frac{1}{1\cdot 2}$, $\frac{1}{(-1)(1)}$ e $\frac{1}{(-2)(-1)}$; la loro somma è $0$, come deve essere perché il numeratore ha grado $0$ mentre il denominatore ha grado $3$. Quindi

$$
g(t)=\mathcal{L}^{-1}\lbrack G\rbrack (t)=\frac12-e^{-t}+\frac12 e^{-2t}.
$$

Il fattore $e^{-s}$ ritarda di $1$:

$$
y(t)=g(t)-H(t-1)\,g(t-1).
$$

Esplicitiamo i due tratti.

- Per $0\le t<1$: $y(t)=\dfrac12-e^{-t}+\dfrac12 e^{-2t}$.
- Per $t\ge 1$: $y(t)=g(t)-g(t-1)=(e-1)e^{-t}+\dfrac{1-e^2}{2}\,e^{-2t}$.

Controlli. Nel primo tratto $y(0)=0$ e $y'(0)=e^{-0}-e^{0}=0$. Nel punto di raccordo il secondo tratto vale $1-e^{-1}+\frac{e^{-2}}{2}-\frac12=\frac12-e^{-1}+\frac12e^{-2}=g(1)$: la soluzione è continua in $t=1$, come deve essere. Anche $y'$ è continua in $t=1$ (infatti $g'(0)=0$, quindi $y'(1^+)=g'(1)$), mentre il salto di $f$ si riflette in un salto di $y''$.

:::image{src="assets/25a729d0-laplace-impulso-risposta.svg" alt="Grafico della risposta y(t) a un impulso rettangolare e del termine noto f(t)" caption="Fig. 9.3 — La risposta y(t) (continua) cresce durante l'impulso f(t) (tratteggiata, uguale a 1 per 0 ≤ t < 1), poi decade a zero per t ≥ 1: nel punto di raccordo t = 1 la curva non ha punti angolosi, perché y e y' sono continue; il salto di f compare solo in y''."}
:::

**Errore tipico 9.11.** Antitrasformare $e^{-s}G(s)$ scrivendo semplicemente $g(t)$, oppure $H(t-1)g(t)$, trascurando il ritardo nell'argomento. La risposta corretta è $H(t-1)\,g(t-1)$: la soluzione "parte" all'istante $1$ come se il tempo fosse ricominciato da $0$. Un indizio che qualcosa non va: se $y$ ottenuta non è continua nel punto di raccordo, mentre $y$ e $y'$ devono esserlo per un'equazione del secondo ordine con $f$ limitata, il ritardo è stato sbagliato. Un secondo errore è scrivere il termine noto a tratti senza gradino, per esempio $f(t)=1$ per $t<1$ e poi "dimenticarsi" di annullarlo: occorre sempre $1-H(t-1)$, non $1$.

### Quando conviene il metodo

La trasformata di Laplace è preferibile alla somiglianza in tre situazioni: i dati iniziali sono assegnati in $t_0=0$ e vanno inglobati subito; il termine noto è a tratti o è una somma di molte componenti; interessa la sola soluzione per $t\ge 0$. Per l'equazione omogenea o con termini noti semplici, la ricerca dell'integrale generale con il polinomio caratteristico è in genere altrettanto rapida e dà l'integrale generale, non solo la soluzione di un problema di Cauchy.
