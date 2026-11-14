---
chapter: 5
title: Integrali su curve e superfici
---

## p1 | Introduzione

Gli integrali su curve e superfici permettono di misurare grandezze distribuite lungo un filo o su una superficie e di descrivere il lavoro, la circuitazione e il flusso di un campo. Sono strumenti utili per collegare il calcolo locale, basato su derivate, a quantità complessive come la massa di un filo o il flusso attraverso una superficie chiusa.

Per affrontare il capitolo occorre saper calcolare integrali multipli e avere familiarità con parametrizzazioni di curve e superfici, derivate e prodotti scalari e vettoriali. Da queste basi si costruiscono gli integrali curvilinei e superficiali, prestando attenzione alla regolarità delle parametrizzazioni e all’orientazione: invertire il verso di una curva o la normale di una superficie può cambiare il segno del risultato.

Al termine saprai calcolare lunghezze, masse e baricentri di fili, lavori e circuitazioni lungo curve, aree e integrali su superfici, e flussi di campi vettoriali. Imparerai inoltre a riconoscere quando un campo ammette un potenziale e a scegliere tra il calcolo diretto e i teoremi di Green, Gauss e Stokes. Questi teoremi trasformano integrali su curve in integrali su regioni, o integrali su superfici in flussi e circuitazioni sui loro bordi, rendendo più semplice il calcolo e chiarendo il legame tra campo, bordo e orientazione.

## p2 | Integrali curvilinei e lunghezza

Nel [calcolo integrale](ref:chapter/4#p2) in più variabili si integrano funzioni su regioni del piano o dello spazio. Qui l'insieme di integrazione è una curva. L'integrale curvilineo di una funzione scalare estende l'integrale definito di una variabile, e permette di calcolare la massa di un filo, il suo baricentro e il suo momento d'inerzia, oltre alla lunghezza. Le curve e la loro regolarità sono trattate in [Curve in $\mathbb{R}^m$](ref:chapter/3#p5).

### Definizione di integrale curvilineo

Sia $\boldsymbol{\gamma} : \lbrack a,b\rbrack  \to \mathbb{R}^m$, con $m \ge 2$, un arco di curva regolare e sia $\Gamma = \boldsymbol{\gamma}(\lbrack a,b\rbrack )$ il suo sostegno. Sia $f : \operatorname{dom} f \subseteq \mathbb{R}^m \to \mathbb{R}$ definita almeno su $\Gamma$, cioè con $\Gamma \subseteq \operatorname{dom} f$. Si suppone che la funzione composta $f \circ \boldsymbol{\gamma}$, con $(f\circ\boldsymbol{\gamma})(t) = f(\boldsymbol{\gamma}(t))$, sia continua (a tratti) su $\lbrack a,b\rbrack $.

**Definizione 5.1** (integrale curvilineo, o di prima specie). Nelle ipotesi precedenti, l'integrale curvilineo di $f$ su $\boldsymbol{\gamma}$ è il numero

:::formula{id="5.1" label="Integrale curvilineo di prima specie"}
$$\int_{\boldsymbol{\gamma}} f \, ds = \int_a^b f(\boldsymbol{\gamma}(t))\,\|\boldsymbol{\gamma}'(t)\|\,dt$$
:::

L'integrale a destra è ben definito. Infatti $\boldsymbol{\gamma}$ è regolare, quindi $\|\boldsymbol{\gamma}'\|$ è continua, e $f\circ\boldsymbol{\gamma}$ è continua (a tratti) per ipotesi.

Il simbolo $ds$ ricorda che l'ascissa curvilinea $s=s(t)$ soddisfa $ds/dt = \|\boldsymbol{\gamma}'(t)\|$. Quindi $ds = \|\boldsymbol{\gamma}'(t)\|\,dt$ è l'elemento «infinitesimo» di lunghezza lungo la curva. Si usa anche la scrittura $\int_{\boldsymbol{\gamma}} f$ senza $ds$, equivalente a quella adottata qui.

Se la curva è solo regolare a tratti, cioè esiste una suddivisione $a=t_0<t_1<\dots<t_N=b$ tale che $\boldsymbol{\gamma}$ è regolare su ciascun $\lbrack t_{k-1},t_k\rbrack $, l'integrale è la somma degli integrali sui tratti:

$$
\int_{\boldsymbol{\gamma}} f\,ds = \sum_{k=1}^{N}\int_{t_{k-1}}^{t_k} f(\boldsymbol{\gamma}(t))\,\|\boldsymbol{\gamma}'(t)\|\,dt .
$$

**Significato geometrico.** Se $\boldsymbol{\gamma}$ è un arco semplice piano e $f\ge 0$ su $\Gamma$, l'integrale è l'area della «staccionata» verticale che sta sopra $\Gamma$ ed è limitata superiormente dal grafico di $f$.

### Lunghezza e indipendenza dalla parametrizzazione

Per $f\equiv 1$ la formula {{formula:5.1}} restituisce la lunghezza dell'arco, già definita in [Curve in $\mathbb{R}^m$](ref:chapter/3#p5) (formula [(3.15)](ref:formula/3.15)):

$$
\ell(\boldsymbol{\gamma}) = \int_a^b\|\boldsymbol{\gamma}'(t)\|\,dt = \int_{\boldsymbol{\gamma}} 1\,ds .
$$

**Proposizione 5.1.** Sia $\boldsymbol{\gamma}$ un arco regolare e sia $f\circ\boldsymbol{\gamma}$ continua (a tratti). Se $\boldsymbol{\delta}=\boldsymbol{\gamma}\circ\varphi$ è congruente a $\boldsymbol{\gamma}$, allora $\int_{\boldsymbol{\delta}} f\,ds = \int_{\boldsymbol{\gamma}} f\,ds$.

Idea della dimostrazione: nella sostituzione $t=\varphi(\tau)$ compare $|\varphi'(\tau)|$, quindi il segno di $\varphi'$ non conta. Sia che $\boldsymbol{\delta}$ percorra la curva nello stesso verso (equivalente), sia che la percorra nel verso opposto (anti-equivalente), si ottiene lo stesso integrale.

Conseguenze:

- l'integrale curvilineo di una funzione scalare **non dipende dal verso di percorrenza**. Questo lo distingue dall'[integrale di linea di un campo vettoriale](ref:chapter/5#p3), che cambia segno;
- per un arco semplice l'integrale dipende solo dal sostegno $\Gamma$ e si scrive anche $\int_\Gamma f\,ds$, purché la parametrizzazione sia regolare e semplice;
- la **lunghezza** dipende invece dalla parametrizzazione se la curva viene percorsa più volte. Con $\boldsymbol{\gamma}_1(t)=(r\cos t, r\sin t)$, $t\in[0,2\pi]$, si ha $\ell=2\pi r$. Con $\boldsymbol{\gamma}_2(t)=(r\cos 2t, r\sin 2t)$, $t\in[0,2\pi]$, si ha $\ell=4\pi r$, perché la circonferenza è percorsa due volte.

### Metodo di calcolo

Per calcolare $\int_{\boldsymbol{\gamma}} f\,ds$:

1. si sceglie (o si legge) una parametrizzazione regolare $\boldsymbol{\gamma}(t)$, $t\in[a,b]$, e si spezza la curva se è solo regolare a tratti;
2. si calcola $\boldsymbol{\gamma}'(t)$ e $\|\boldsymbol{\gamma}'(t)\|$;
3. si sostituisce $\boldsymbol{\gamma}(t)$ in $f$, ottenendo $f(\boldsymbol{\gamma}(t))$, funzione della sola $t$;
4. si integra $f(\boldsymbol{\gamma}(t))\,\|\boldsymbol{\gamma}'(t)\|$ tra $a$ e $b$.

**Esempio 5.1** (arco di parabola). Sia $\boldsymbol{\gamma}(t)=(t,t^2)$, $t\in[0,1]$, l'arco della parabola $y=x^2$ tra $O=(0,0)$ e $A=(1,1)$, e sia $f(x,y)=3x+\sqrt{y}$. Allora $\boldsymbol{\gamma}'(t)=(1,2t)$ e $\|\boldsymbol{\gamma}'(t)\|=\sqrt{1+4t^2}$. Inoltre

$$
f(\boldsymbol{\gamma}(t)) = 3t+\sqrt{t^2} = 4t,
$$

perché $t\ge 0$. Quindi

$$
\int_{\boldsymbol{\gamma}} f\,ds = \int_0^1 4t\sqrt{1+4t^2}\,dt .
$$

Con $r=1+4t^2$ si ha $dr=8t\,dt$, cioè $4t\,dt = \tfrac12\,dr$, e gli estremi diventano $r=1$ e $r=5$:

$$
\int_{\boldsymbol{\gamma}} f\,ds=\frac12\int_1^5\sqrt r\,dr=\frac12\left[\frac23 r^{3/2}\right]_1^5=\frac{5\sqrt5-1}{3}.
$$

**Esempio 5.2** (curva nello spazio). Sia $\boldsymbol{\gamma}(t)=\left(\tfrac13 t^3,\ \tfrac{\sqrt2}{2}t^2,\ t\right)$, $t\in[0,1]$, e $f(x,y,z)=3\sqrt2\,xyz^2$. Si ha $\boldsymbol{\gamma}'(t)=(t^2,\sqrt2\,t,1)$, dunque

$$
\|\boldsymbol{\gamma}'(t)\|=\sqrt{t^4+2t^2+1}=1+t^2 .
$$

Inoltre $f(\boldsymbol{\gamma}(t)) = 3\sqrt2\cdot\tfrac{t^3}{3}\cdot\tfrac{\sqrt2}{2}t^2\cdot t^2 = t^7$, e quindi

$$
\int_{\boldsymbol{\gamma}} f\,ds=\int_0^1 t^7(1+t^2)\,dt=\left[\frac{t^8}{8}+\frac{t^{10}}{10}\right]_0^1=\frac{9}{40}.
$$

**Esempio 5.3** (lunghezza). La lunghezza dell'arco di parabola $y=x^2$ tra $O$ e $A$ è $\int_0^1\sqrt{1+4t^2}\,dt$. Con $u=2t$ l'integrale diventa $\tfrac12\int_0^2\sqrt{1+u^2}\,du$, e una primitiva di $\sqrt{1+u^2}$ è $\tfrac12\left(u\sqrt{1+u^2}+\operatorname{settsinh}u\right)$. Si ottiene

$$
\ell=\frac14\left[2\sqrt5+\log\left(2+\sqrt5\right)\right]=\frac{\sqrt5}{2}+\frac{\log(2+\sqrt5)}{4}.
$$

**Errore tipico 5.1.** Gli errori più frequenti nel calcolo di un integrale curvilineo sono questi.

- **Dimenticare il fattore $\|\boldsymbol{\gamma}'(t)\|$**: si calcola $\int_a^b f(\boldsymbol{\gamma}(t))\,dt$, che dipende dalla parametrizzazione e non è l'integrale curvilineo.
- **Scambiare $\boldsymbol{\gamma}'$ con $\|\boldsymbol{\gamma}'\|$**: l'integrando è uno scalare, non un vettore. Va usata la norma $\sqrt{x'^2+y'^2(+z'^2)}$.
- **Non sostituire $\boldsymbol{\gamma}(t)$ in $f$**: lasciare $x$ e $y$ nell'integrale in $dt$.
- **Percorrere la curva più volte** scegliendo un intervallo del parametro troppo ampio, o una velocità angolare doppia: la lunghezza e l'integrale vengono moltiplicati per il numero di giri. Con $(r\cos 2t, r\sin 2t)$ su $\lbrack 0,2\pi\rbrack $ si ottiene $4\pi r$ invece di $2\pi r$.
- **Su una curva regolare a tratti**, usare un'unica espressione di $\boldsymbol{\gamma}'$ su tutto l'intervallo: serve spezzare l'integrale nei punti angolosi.
- **Invertire gli estremi per «orientare» la curva**: per l'integrale di prima specie il verso è irrilevante.

### Fili materiali: massa, baricentro e momenti d'inerzia

Sia $\Gamma\subset\mathbb{R}^3$ un arco regolare (a tratti) e semplice che rappresenta un filo sottile. Sia $\mu=\mu(P)$ la **densità lineare di massa** (massa per unità di lunghezza) nel punto $P=(x,y,z)\in\Gamma$.

:::formula{id="5.2" label="Massa di un filo"}
$$m=\int_\Gamma \mu\,ds$$
:::

:::formula{id="5.3" label="Baricentro di un filo"}
$$x_G=\frac1m\int_\Gamma x\,\mu\,ds,\qquad y_G=\frac1m\int_\Gamma y\,\mu\,ds,\qquad z_G=\frac1m\int_\Gamma z\,\mu\,ds$$
:::

Il **momento d'inerzia** rispetto a una retta o a un punto è $I=\int_\Gamma d^2\mu\,ds$, dove $d=d(P)$ è la distanza di $P\in\Gamma$ dalla retta o dal punto. Rispetto agli assi coordinati si ha

$$
I_x=\int_\Gamma (y^2+z^2)\mu\,ds,\quad I_y=\int_\Gamma (x^2+z^2)\mu\,ds,\quad I_z=\int_\Gamma (x^2+y^2)\mu\,ds .
$$

Il momento rispetto all'origine è $I_0=\int_\Gamma(x^2+y^2+z^2)\mu\,ds=\tfrac12(I_x+I_y+I_z)$.

Con densità costante $\mu$ si ha $m=\mu\,\ell(\Gamma)$ e il baricentro non dipende da $\mu$, perché $\mu$ si semplifica. Se il filo ha un piano o un asse di simmetria e anche la densità è invariata rispetto a tale simmetria, in particolare se il filo è omogeneo, il baricentro appartiene a quel piano o a quell'asse; in generale però **non appartiene a $\Gamma$**.

**Esempio 5.4** (baricentro di una semicirconferenza). Sia $\Gamma$ la semicirconferenza di raggio $R$ nel semipiano $y\ge0$, con densità $\mu=1$. Una parametrizzazione è $\boldsymbol{\gamma}(t)=(R\cos t,R\sin t)$, $t\in[0,\pi]$, con $\|\boldsymbol{\gamma}'(t)\|=R$. Allora:

- massa: $m=\int_0^\pi R\,dt=\pi R$, cioè la lunghezza;
- ascissa: $x_G=0$ per simmetria rispetto all'asse $y$. Direttamente, $\int_0^\pi R\cos t\cdot R\,dt=R^2\lbrack \sin t\rbrack _0^\pi=0$;
- ordinata: $y_G=\dfrac{1}{\pi R}\displaystyle\int_0^\pi R\sin t\cdot R\,dt=\dfrac{R^2\lbrack -\cos t\rbrack _0^\pi}{\pi R}=\dfrac{2R}{\pi}$.

Dunque $G=\left(0,\tfrac{2R}{\pi}\right)$, un punto interno alla semicirconferenza e non appartenente al filo.

:::image{src="assets/f64fee13-baricentro-semicirconferenza.svg" alt="Semicirconferenza di raggio 1 con il baricentro sull'asse y" caption="Fig. 5.1 — Semicirconferenza di raggio R = 1: il baricentro G = (0, 2/π) sta sull'asse di simmetria, sotto il filo, e non appartiene alla curva."}
:::

**Esempio 5.5** (filo di cui si impone una condizione sul baricentro). Se il filo è unione di più tratti, per la formula additiva si calcolano $m$ e $\int y\,\mu\,ds$ come somme degli integrali sui singoli tratti, ciascuno con la propria parametrizzazione. La condizione richiesta, per esempio $y_G=0$, equivale a $\int_\Gamma y\,\mu\,ds=0$. Se i tratti sono un segmento e un arco di parabola $y^2=2x$ con estremo libero $(\tfrac12k^2,k)$, si usa $\boldsymbol{\gamma}_2(t)=(\tfrac12t^2,t)$, $t\in[0,k]$, con $\|\boldsymbol{\gamma}_2'\|=\sqrt{1+t^2}$. Il parametro $k$ si ricava imponendo l'annullamento della somma degli integrali.

**Errore tipico 5.2.** Nel calcolo del baricentro gli errori ricorrenti sono questi.

- **Dividere per la lunghezza invece che per la massa** quando $\mu$ non è costante: bisogna dividere per $m=\int_\Gamma\mu\,ds$.
- **Omettere $\mu$ o $ds$** nell'integrale del numeratore, oppure calcolare $\int x\,dt$ senza il fattore $\|\boldsymbol{\gamma}'\|$.
- **Dimenticare di spezzare** il filo nei punti in cui cambia la parametrizzazione (segmento più arco).
- **Usare $d$ al posto di $d^2$** nel momento d'inerzia: la distanza dall'asse $z$ è $\sqrt{x^2+y^2}$, e nell'integrale compare il suo quadrato $x^2+y^2$.

Per le curve orientate e i campi vettoriali si veda la sezione successiva, [Integrali di linea di campi vettoriali](ref:chapter/5#p3); per l'analogo su superfici, [Integrali superficiali e area](ref:chapter/5#p5).

## p3 | Integrali di linea di campi vettoriali

Il lavoro di una forza lungo un percorso si calcola sommando, istante per istante, la componente della forza nella direzione dello spostamento. Questa idea porta all'integrale di linea di un campo vettoriale. Lo scopo della sezione è saperlo calcolare e capire come il suo segno dipende dal verso di percorrenza.

### Definizione e formula di calcolo

Sia $\boldsymbol{\gamma} : \lbrack a,b\rbrack  \to \mathbb{R}^m$ un arco regolare (anche a tratti) di sostegno $\Gamma$, e sia $\mathbf{F}$ un campo vettoriale definito almeno su $\Gamma$. Si suppone che la funzione composta $t \mapsto \mathbf{F}(\boldsymbol{\gamma}(t))$ sia continua (a tratti). Il versore tangente è $\boldsymbol{\tau}(t) = \boldsymbol{\gamma}'(t)/\|\boldsymbol{\gamma}'(t)\|$ (si veda [Curve in $\mathbb{R}^m$](ref:chapter/3#p5)). La funzione $\mathbf{F}(\boldsymbol{\gamma}(t))\cdot\boldsymbol{\tau}(t)$ è la componente scalare di $\mathbf{F}$ lungo la tangente alla curva.

**Definizione 5.2** (integrale di linea). L'integrale di linea di $\mathbf{F}$ su $\boldsymbol{\gamma}$ è l'integrale curvilineo di prima specie (si veda [Integrali curvilinei e lunghezza](ref:chapter/5#p2)) della componente tangenziale:

$$
\int_{\boldsymbol{\gamma}} \mathbf{F}\cdot\boldsymbol{\tau}\, ds = \int_{\boldsymbol{\gamma}} (\mathbf{F}\cdot\boldsymbol{\tau})\, ds .
$$

Si chiama anche integrale curvilineo di seconda specie.

Poiché $ds = \|\boldsymbol{\gamma}'(t)\|\,dt$, il fattore $\|\boldsymbol{\gamma}'\|$ si semplifica con quello al denominatore di $\boldsymbol{\tau}$ e si ottiene la formula operativa.

:::formula{id="5.4" label="Integrale di linea di un campo vettoriale"}
$$\int_{\boldsymbol{\gamma}} \mathbf{F}\cdot\boldsymbol{\tau}\, ds = \int_a^b \mathbf{F}(\boldsymbol{\gamma}(t))\cdot\boldsymbol{\gamma}'(t)\,dt$$
:::

Si incontra anche la notazione $\int_{\boldsymbol{\gamma}} \mathbf{F}\cdot d\boldsymbol{\gamma}$, che nasce dalla scrittura $d\boldsymbol{\gamma} = \boldsymbol{\gamma}'(t)\,dt$. Qui $d\boldsymbol{\gamma}$ è un vettore, mentre in $\int_{\boldsymbol{\gamma}} f\,ds$ è uno scalare.

Se $\mathbf{F}$ è un campo di forze, l'integrale di linea è il **lavoro** compiuto da $\mathbf{F}$ nello spostamento lungo il sostegno di $\boldsymbol{\gamma}$.

Se $\boldsymbol{\gamma}$ è un arco regolare a tratti, costituito dagli archi regolari $\boldsymbol{\gamma}_1,\dots,\boldsymbol{\gamma}_n$, l'integrale è la somma degli integrali sui singoli pezzi.

**Definizione 5.3** (circuitazione). Se $\boldsymbol{\gamma}$ è un arco regolare e chiuso, l'integrale di linea di $\mathbf{F}$ si chiama **circuitazione** di $\mathbf{F}$ su $\boldsymbol{\gamma}$ e si indica con

$$
\oint_{\boldsymbol{\gamma}} \mathbf{F}\cdot\boldsymbol{\tau}\, ds .
$$

:::image{src="assets/e9432dc9-componente-tangenziale-orientazione.svg" alt="Arco orientato con campo e versore tangente" caption="Fig. 5.2 — Su un arco orientato, in un punto P il campo F e il versore tangente tau: il lavoro elementare è la proiezione di F su tau. Invertendo il verso, tau cambia segno e con lui il contributo."}
:::

### Come si calcola: procedura

1. Parametrizzare la curva con $\boldsymbol{\gamma}(t)$, $t\in[a,b]$, nel verso richiesto dal problema.
2. Calcolare $\boldsymbol{\gamma}'(t)$.
3. Sostituire $x=x(t)$, $y=y(t)$, $z=z(t)$ nel campo, ottenendo $\mathbf{F}(\boldsymbol{\gamma}(t))$.
4. Fare il prodotto scalare $\mathbf{F}(\boldsymbol{\gamma}(t))\cdot\boldsymbol{\gamma}'(t)$ e integrare in $t$ da $a$ a $b$.

**Esempio 5.6.** Sia $\mathbf{F}(x,y,z) = (e^x,\, x+y,\, y+z)$ e sia $\boldsymbol{\gamma}(t) = (t, t^2, t^3)$, $t\in[0,1]$. Si ha

$$
\mathbf{F}(\boldsymbol{\gamma}(t)) = (e^t,\ t+t^2,\ t^2+t^3), \qquad \boldsymbol{\gamma}'(t) = (1,\ 2t,\ 3t^2).
$$

Il prodotto scalare è

$$
e^t + 2t(t+t^2) + 3t^2(t^2+t^3) = e^t + 2t^2 + 2t^3 + 3t^4 + 3t^5 .
$$

Quindi

$$
\int_{\boldsymbol{\gamma}} \mathbf{F}\cdot\boldsymbol{\tau}\, ds = (e-1) + 2\left(\frac13+\frac14\right) + 3\left(\frac15+\frac16\right) = e - 1 + \frac76 + \frac{11}{10} = e + \frac{19}{15}.
$$

**Esempio 5.7** (circuitazione). Sia $\mathbf{F}(x,y)=(y,x)$ e sia l'ellisse $\dfrac{x^2}{9}+\dfrac{y^2}{4}=1$ percorsa una volta in senso antiorario, con $\boldsymbol{\gamma}(t)=(3\cos t,\,2\sin t)$, $t\in[0,2\pi]$. Allora $\mathbf{F}(\boldsymbol{\gamma}(t)) = (2\sin t,\,3\cos t)$ e $\boldsymbol{\gamma}'(t) = (-3\sin t,\,2\cos t)$. Il prodotto scalare vale $-6\sin^2 t + 6\cos^2 t = 6\cos 2t$, dunque

$$
\oint_{\boldsymbol{\gamma}} \mathbf{F}\cdot\boldsymbol{\tau}\, ds = 6\int_0^{2\pi}\cos 2t\,dt = 6\left[\tfrac12\sin 2t\right]_0^{2\pi} = 0 .
$$

Una circuitazione nulla non è un caso: ne parleremo in [Campi conservativi e potenziale](ref:chapter/5#p4).

### Orientazione e segno

**Proposizione 5.2.** Sia $\boldsymbol{\gamma}:\lbrack a,b\rbrack \to\mathbb{R}^m$ un arco regolare di sostegno $\Gamma$ e sia $\mathbf{F}$ un campo definito su $\Gamma$ con $\mathbf{F}\circ\boldsymbol{\gamma}$ continua (a tratti). Se $\boldsymbol{\delta}$ è equivalente a $\boldsymbol{\gamma}$ (stesso verso di percorrenza), allora

$$
\int_{\boldsymbol{\delta}} \mathbf{F}\cdot\boldsymbol{\tau}_{\boldsymbol{\delta}}\, ds = \int_{\boldsymbol{\gamma}} \mathbf{F}\cdot\boldsymbol{\tau}_{\boldsymbol{\gamma}}\, ds .
$$

Se $\boldsymbol{\delta}$ è anti-equivalente a $\boldsymbol{\gamma}$ (verso opposto), allora i due integrali sono opposti.

In particolare, detto $-\boldsymbol{\gamma}$ l'arco opposto, vale la formula seguente.

:::formula{id="5.5" label="Cambio di segno con l'orientazione"}
$$\int_{-\boldsymbol{\gamma}} \mathbf{F}\cdot\boldsymbol{\tau}\, ds = -\int_{\boldsymbol{\gamma}} \mathbf{F}\cdot\boldsymbol{\tau}\, ds$$
:::

La ragione è che $\boldsymbol{\tau}$ cambia segno, mentre $ds$ resta positivo. Fisicamente, il lavoro cambia segno invertendo il verso di percorrenza; una volta fissato il verso, dipende solo dal sostegno e non dalla parametrizzazione scelta.

Di conseguenza, per un sostegno semplice $\Gamma$ l'integrale di linea ha senso solo dopo aver scelto una delle due orientazioni, e si calcola con una qualunque parametrizzazione regolare e semplice che la rispetti. Lo stesso vale per la circuitazione su un arco di Jordan.

**Esempio 5.8** (effetto del verso). Sia $\mathbf{F}(x,y) = (-y,x)$ e sia $C_R$ la circonferenza di raggio $R$ centrata nell'origine.

- Antioraria: $\boldsymbol{\gamma}(t) = (R\cos t, R\sin t)$, $t\in[0,2\pi]$. Allora $\mathbf{F}(\boldsymbol{\gamma}) = (-R\sin t, R\cos t)$ e $\boldsymbol{\gamma}' = (-R\sin t, R\cos t)$, quindi $\mathbf{F}\cdot\boldsymbol{\gamma}' = R^2$ e la circuitazione è $2\pi R^2$.
- Oraria: $\boldsymbol{\delta}(t) = (R\cos t, -R\sin t)$. Allora $\mathbf{F}(\boldsymbol{\delta}) = (R\sin t, R\cos t)$ e $\boldsymbol{\delta}' = (-R\sin t, -R\cos t)$, quindi $\mathbf{F}\cdot\boldsymbol{\delta}' = -R^2$ e la circuitazione è $-2\pi R^2$.

Il campo è tangente alla circonferenza ovunque e concorde con il verso antiorario. Per questo il lavoro è positivo in quel verso e negativo nell'altro.

**Errore tipico 5.3.** Scrivere $\|\boldsymbol{\gamma}'(t)\|$ nell'integrale di linea, come si fa per l'integrale curvilineo di prima specie. Per un campo vettoriale l'integrando è $\mathbf{F}(\boldsymbol{\gamma}(t))\cdot\boldsymbol{\gamma}'(t)$, un prodotto scalare e non un prodotto per la norma. Nell'esempio sulla circonferenza questo errore darebbe $\int_0^{2\pi}\|\mathbf{F}\|\,\|\boldsymbol{\gamma}'\|\,dt = 2\pi R^2$ in entrambi i versi: perderebbe proprio il segno.

**Errore tipico 5.4.** Ignorare il verso richiesto. Se il testo prescrive il verso orario, o il percorso da $B$ ad $A$, la parametrizzazione va scelta di conseguenza, altrimenti il risultato esce con il segno sbagliato. Se si è calcolato con il verso opposto, basta cambiare segno al risultato; non serve rifare i conti. Un'altra svista frequente è dimenticare di sostituire $x=x(t)$, $y=y(t)$ nel campo, lasciando $x,y$ dentro l'integrale in $t$.

## p4 | Campi conservativi e potenziale

Un campo di forze $\mathbf{F}$ compie in generale un lavoro che dipende dal cammino percorso, e calcolarlo richiede ogni volta un integrale di linea. Per una classe importante di campi, i campi conservativi, il lavoro dipende solo dagli estremi del cammino e si ottiene con una differenza di valori di una funzione scalare, il potenziale. In questa sezione si vede come riconoscere questi campi, come trovare il potenziale e come usarlo. Per gli integrali di linea si rimanda a [Integrali di linea di campi vettoriali](ref:chapter/5#p3), per gli operatori differenziali a [Operatori differenziali notevoli](ref:chapter/3#p3).

### Campi conservativi e potenziale

**Definizione 5.4** (campo conservativo). Sia $\Omega\subseteq\mathbb{R}^n$ un aperto e $\mathbf{F}:\Omega\to\mathbb{R}^n$ un campo vettoriale. $\mathbf{F}$ si dice **conservativo** in $\Omega$ se esiste una funzione scalare $\varphi:\Omega\to\mathbb{R}$ differenziabile, detta **potenziale** di $\mathbf{F}$, tale che

:::formula{id="5.6" label="Campo conservativo e potenziale"}
$$\mathbf{F}=\nabla\varphi\quad\text{in }\Omega,\qquad\text{cioè}\qquad \frac{\partial\varphi}{\partial x_i}=F_i,\quad i=1,\dots,n$$
:::

Se $\varphi$ è un potenziale, lo è anche $\varphi+c$ per ogni $c\in\mathbb{R}$, perché $\nabla c=\mathbf{0}$. Se $\Omega$ è connesso, due potenziali differiscono per una costante (la differenza ha gradiente nullo, quindi è costante). Il potenziale è dunque definito a meno di una costante additiva.

### Il potenziale e il lavoro

**Teorema 5.1** (lavoro di un campo conservativo). Sia $\mathbf{F}=\nabla\varphi$ un campo conservativo, definito e continuo in $\Omega\subseteq\mathbb{R}^n$ aperto. Per ogni arco $\boldsymbol{\gamma}:\lbrack a,b\rbrack \to\Omega$ regolare (a tratti) vale

:::formula{id="5.7" label="Lavoro di un campo conservativo"}
$$\int_{\boldsymbol{\gamma}}\mathbf{F}\cdot\boldsymbol{\tau}\,ds=\varphi(\boldsymbol{\gamma}(b))-\varphi(\boldsymbol{\gamma}(a))$$
:::

L'idea della dimostrazione è la regola della catena ([Derivazione di funzioni composte](ref:chapter/3#p4)). Si ha $\nabla\varphi(\boldsymbol{\gamma}(t))\cdot\boldsymbol{\gamma}'(t)=\frac{d}{dt}\,\varphi(\boldsymbol{\gamma}(t))$, e l'integrale di questa derivata è la differenza dei valori agli estremi, come nel teorema fondamentale del calcolo.

Ne seguono due fatti. Il lavoro dipende solo dal punto iniziale e da quello finale, non dal cammino. In particolare, su un arco chiuso la circuitazione è nulla, $\oint_{\boldsymbol{\gamma}}\mathbf{F}\cdot\boldsymbol{\tau}\,ds=0$.

Queste proprietà caratterizzano i campi conservativi.

**Teorema 5.2** (caratterizzazione). Sia $\mathbf{F}$ continuo in un aperto $\Omega\subseteq\mathbb{R}^n$. Sono equivalenti:

1. $\mathbf{F}$ è conservativo in $\Omega$;
2. due archi regolari (a tratti) in $\Omega$ con gli stessi estremi danno lo stesso integrale di linea di $\mathbf{F}$;
3. $\oint_{\boldsymbol{\gamma}}\mathbf{F}\cdot\boldsymbol{\tau}\,ds=0$ per ogni arco chiuso regolare (a tratti) $\boldsymbol{\gamma}$ in $\Omega$.

Il punto 3 è utile soprattutto per mostrare che un campo **non** è conservativo. Basta trovare una sola curva chiusa con circuitazione diversa da zero.

### Verificare se un campo è conservativo

**Condizione necessaria.** Se $\mathbf{F}$ è di classe $C^1$ in $\Omega\subseteq\mathbb{R}^n$ ($n=2$ o $n=3$) ed è conservativo, allora è **irrotazionale**, cioè $\operatorname{rot}\mathbf{F}=\mathbf{0}$. Infatti $\operatorname{rot}\nabla\varphi=\nabla\wedge(\nabla\varphi)=\mathbf{0}$ (identità [(3.10)](ref:formula/3.10)).

In pratica la condizione si controlla sulle derivate parziali. In $\mathbb{R}^2$, con $\mathbf{F}=(F_1,F_2)$, secondo [(3.8)](ref:formula/3.8) diventa

:::formula{id="5.8" label="Irrotazionalità in R^2"}
$$\frac{\partial F_2}{\partial x}=\frac{\partial F_1}{\partial y}$$
:::

In $\mathbb{R}^3$, secondo [(3.7)](ref:formula/3.7), le tre uguaglianze da verificare sono

$$\frac{\partial F_3}{\partial y}=\frac{\partial F_2}{\partial z},\qquad \frac{\partial F_1}{\partial z}=\frac{\partial F_3}{\partial x},\qquad \frac{\partial F_2}{\partial x}=\frac{\partial F_1}{\partial y}.$$

Se una di esse fallisce, il campo non è conservativo. Se valgono tutte, bisogna ancora guardare l'insieme $\Omega$.

**Esempio 5.9** (irrotazionale ma non conservativo). Il campo

$$\mathbf{F}(x,y)=\left(-\frac{y}{x^2+y^2},\ \frac{x}{x^2+y^2}\right)$$

è di classe $C^1$ in $\Omega=\mathbb{R}^2\setminus\{(0,0)\}$. Si ha

$$\frac{\partial F_2}{\partial x}=\frac{y^2-x^2}{(x^2+y^2)^2}=\frac{\partial F_1}{\partial y},$$

quindi $\operatorname{rot}\mathbf{F}=0$. Sulla circonferenza unitaria $\boldsymbol{\gamma}(t)=(\cos t,\sin t)$, $t\in[0,2\pi]$, si ha $\mathbf{F}(\boldsymbol{\gamma}(t))\cdot\boldsymbol{\gamma}'(t)=\sin^2t+\cos^2t=1$, e dunque

$$\oint_{\boldsymbol{\gamma}}\mathbf{F}\cdot\boldsymbol{\tau}\,ds=2\pi\neq0.$$

Per la caratterizzazione il campo non è conservativo in $\Omega$. Lo stesso accade in $\mathbb{R}^3$ per il campo $\left(-\frac{y}{x^2+y^2},\frac{x}{x^2+y^2},0\right)$ definito fuori dall'asse $z$.

:::image{src="assets/5fffa034-piano-forato-circuitazione.svg" alt="Piano privo dell'origine con la circonferenza unitaria e il campo tangente" caption="Fig. 5.3 — Nel piano privo dell'origine il campo (-y, x)/(x²+y²) è irrotazionale, ma la circonferenza unitaria percorsa in senso antiorario gira attorno al buco e la circuitazione vale 2π."}
:::

Il problema è il buco in $\Omega$. Serve una condizione geometrica sull'aperto.

**Definizione 5.5** (semplice connessione). Un aperto connesso $\Omega\subseteq\mathbb{R}^n$ si dice **semplicemente connesso** se il sostegno di ogni arco chiuso contenuto in $\Omega$ può essere deformato con continuità, restando dentro $\Omega$, fino a ridursi a un punto.

Nel piano, intuitivamente, un aperto connesso è semplicemente connesso se non ha «buchi». Sono semplicemente connessi:

- gli aperti **convessi**;
- gli aperti **stellati**, cioè per cui esiste $P_0\in\Omega$ tale che il segmento $P_0P$ è contenuto in $\Omega$ per ogni $P\in\Omega$ (un convesso è stellato rispetto a ogni suo punto);
- in $\mathbb{R}^3$, $\mathbb{R}^3$ privato di un punto e la regione tra due sfere concentriche.

Non sono semplicemente connessi una corona circolare aperta, $\mathbb{R}^2\setminus\{(0,0)\}$, $\mathbb{R}^3$ privato di una retta e il toro.

**Teorema 5.3** (irrotazionale $\Leftrightarrow$ conservativo). Sia $\Omega\subseteq\mathbb{R}^n$, con $n=2$ oppure $3$, un aperto semplicemente connesso. Un campo $\mathbf{F}$ di classe $C^1$ in $\Omega$ è conservativo se e solo se è irrotazionale.

La dimostrazione usa il teorema di Stokes ([Teoremi di Green, Gauss e Stokes](ref:chapter/5#p7)). Per lo scritto conta il metodo, che ha tre passi:

1. si verifica che $\mathbf{F}$ è $C^1$ e si calcola $\operatorname{rot}\mathbf{F}$;
2. se $\operatorname{rot}\mathbf{F}\neq\mathbf{0}$, il campo non è conservativo;
3. se $\operatorname{rot}\mathbf{F}=\mathbf{0}$, si controlla se il dominio è semplicemente connesso (per esempio convesso o stellato). Se lo è, il campo è conservativo. Altrimenti il criterio non decide e si cerca una circuitazione non nulla oppure direttamente un potenziale.

**Errore tipico 5.5.** Concludere che $\mathbf{F}$ è conservativo perché $\operatorname{rot}\mathbf{F}=\mathbf{0}$ senza guardare il dominio. L'esempio precedente mostra che l'implicazione può essere falsa. D'altra parte la semplice connessione è solo *sufficiente* per l'implicazione inversa. Il campo $\mathbf{F}(\mathbf{x})=\mathbf{x}/\|\mathbf{x}\|^2$ è conservativo in $\mathbb{R}^2\setminus\{(0,0)\}$, che non è semplicemente connesso, con potenziale $\ln\|\mathbf{x}\|$ (si veda sotto).

### Calcolo di un potenziale

Sia $\mathbf{F}$ conservativo in un aperto connesso $\Omega$. Esistono due metodi.

**Metodo 1: integrale lungo un cammino.** Si fissa un punto $P_0\in\Omega$ e si pone

:::formula{id="5.9" label="Potenziale come integrale di linea"}
$$\varphi(\mathbf{x})=\int_{\Gamma[P_0,P]}\mathbf{F}\cdot\boldsymbol{\tau}\,ds$$
:::

dove $\Gamma[P_0,P]\subset\Omega$ è un arco regolare a tratti da $P_0$ a $P=\mathbf{x}$, scelto in modo che il calcolo sia il più semplice possibile. Il risultato non dipende dal cammino. Spesso conviene una poligonale con lati paralleli agli assi, perché su ogni lato compare una sola componente di $\mathbf{F}$.

**Esempio 5.10.** Sia

$$\mathbf{F}(x,y)=\left(\frac{y}{\sqrt{1+2xy}},\ \frac{x}{\sqrt{1+2xy}}\right)$$

nella regione $\Omega$ compresa tra i due rami dell'iperbole $xy=-\tfrac12$. $\Omega$ è stellato rispetto all'origine e $\operatorname{rot}\mathbf{F}=0$, quindi $\mathbf{F}$ è conservativo. Si integra sul segmento $\boldsymbol{\gamma}(t)=(tx,ty)$, $t\in[0,1]$, da $P_0=(0,0)$ a $P=(x,y)$:

$$\varphi(x,y)=\int_0^1\mathbf{F}(\boldsymbol{\gamma}(t))\cdot\boldsymbol{\gamma}'(t)\,dt=\int_0^1\frac{2xyt}{\sqrt{1+2xyt^2}}\,dt.$$

Con $u=1+2xyt^2$, $du=4xyt\,dt$:

$$\varphi(x,y)=\int_1^{1+2xy}\frac{du}{2\sqrt u}=\Big[\sqrt u\Big]_1^{1+2xy}=\sqrt{1+2xy}-1.$$

Tutti i potenziali sono $\varphi(x,y)=\sqrt{1+2xy}+c$.

**Metodo 2: integrazioni successive.** Si usano in sequenza le relazioni $\partial\varphi/\partial x_i=F_i$. Si integra la prima rispetto a $x_1$, e la «costante» di integrazione è una funzione incognita delle altre variabili. Si deriva il risultato rispetto a $x_2$ e si confronta con $F_2$ per determinare quella funzione, e così via. Ogni funzione incognita dipende da meno variabili della precedente.

**Esempio svolto 5.11** (in $\mathbb{R}^2$). Sia $\mathbf{F}(x,y)=\big(y\cos(xy)+2x,\ x\cos(xy)+3y^2\big)$ in $\mathbb{R}^2$, che è semplicemente connesso.

*Passo 1: irrotazionalità.* $\dfrac{\partial F_2}{\partial x}=\cos(xy)-xy\sin(xy)=\dfrac{\partial F_1}{\partial y}$. Il campo è $C^1$ e irrotazionale su $\mathbb{R}^2$, quindi è conservativo.

*Passo 2: integrazione in $x$.*

$$\varphi(x,y)=\int\big(y\cos(xy)+2x\big)\,dx=\sin(xy)+x^2+\psi(y).$$

*Passo 3: derivata in $y$.* Da $\varphi_y=x\cos(xy)+\psi'(y)$ e $\varphi_y=F_2=x\cos(xy)+3y^2$ si ottiene $\psi'(y)=3y^2$. La $x$ si semplifica, come deve avvenire, e $\psi(y)=y^3+c$.

*Passo 4: risultato.* $\varphi(x,y)=\sin(xy)+x^2+y^3+c$.

*Passo 5: lavoro.* Il lavoro di $\mathbf{F}$ lungo un qualunque arco da $(0,0)$ a $(1,\pi)$ è

$$\varphi(1,\pi)-\varphi(0,0)=\big(\sin\pi+1+\pi^3\big)-0=1+\pi^3.$$

**Errore tipico 5.6.** Dopo il passo 2 aggiungere una semplice costante $c$ al posto di $\psi(y)$. Integrando rispetto a $x$ la «costante» può dipendere da $y$, e così si perde il termine $y^3$. Se nel passo 3 la $x$ non si semplifica, c'è un errore di calcolo oppure il campo non è conservativo.

**Esempio svolto 5.12** (in $\mathbb{R}^3$). Sia

$$\mathbf{F}(x,y,z)=\big(2yz,\ 2z(x+3y),\ y(2x+3y)+2z\big).$$

Si verifica $\operatorname{rot}\mathbf{F}=\mathbf{0}$ in $\mathbb{R}^3$: $\partial_yF_3=2x+6y=\partial_zF_2$, $\partial_zF_1=2y=\partial_xF_3$, $\partial_xF_2=2z=\partial_yF_1$. Il campo è quindi conservativo.

- Da $\varphi_x=2yz$ si ha $\varphi=2xyz+\psi_1(y,z)$.
- Da $\varphi_y=2xz+6yz$ si ha $\partial_y\psi_1=6yz$, quindi $\psi_1=3y^2z+\psi_2(z)$.
- Da $\varphi_z=2xy+3y^2+2z$ si ha $\psi_2'(z)=2z$, quindi $\psi_2=z^2+c$.

Dunque $\varphi(x,y,z)=2xyz+3y^2z+z^2+c$.

Il lavoro lungo un qualunque cammino da $(0,0,0)$ a $(1,1,1)$ vale $\varphi(1,1,1)-\varphi(0,0,0)=2+3+1=6$. Un cammino chiuso, invece, ha lavoro $0$.

**Campi radiali.** Un campo $\mathbf{F}(\mathbf{x})=g(\|\mathbf{x}\|)\,\mathbf{x}$, con $g$ continua su un intervallo $I\subseteq\lbrack 0,+\infty)$, è conservativo in $\{\mathbf{x}:\|\mathbf{x}\|\in I\}$. Un potenziale è $\varphi(\mathbf{x})=G(\|\mathbf{x}\|)$, dove $G$ è una primitiva di $r\,g(r)$ su $I$. Infatti $\nabla\varphi=G'(\|\mathbf{x}\|)\,\mathbf{x}/\|\mathbf{x}\|=g(\|\mathbf{x}\|)\,\mathbf{x}$.

Per esempio, $\mathbf{F}(\mathbf{x})=\mathbf{x}/(1+\|\mathbf{x}\|^2)^{1/2}$ ha potenziale $\sqrt{1+\|\mathbf{x}\|^2}$.

Con $g(r)=1/r^2$ si ha $r\,g(r)=1/r$ e $G(r)=\ln r$, per cui $\mathbf{x}/\|\mathbf{x}\|^2$ ha potenziale $\ln\|\mathbf{x}\|$ in $\mathbb{R}^n\setminus\{\mathbf{0}\}$.

**Errore tipico 5.7.** Calcolare il lavoro come $\varphi(\text{inizio})-\varphi(\text{fine})$, oppure usare il potenziale quando il campo non è conservativo (ad esempio $(-y,x)/(x^2+y^2)$ sulla circonferenza unitaria, dove la formula darebbe $0$ al posto di $2\pi$). Il segno corretto è $\varphi(\text{fine})-\varphi(\text{inizio})$, e il potenziale si può usare solo se il campo è conservativo su un aperto che contiene tutto il cammino.

## p5 | Integrali superficiali e area

### Il problema e l'elemento d'area

Per una curva l'integrale curvilineo pesa ogni tratto con $\|\boldsymbol{\gamma}'(t)\|\,dt$. Per una superficie serve l'analogo bidimensionale. Sia $\boldsymbol{\sigma}:R\to\mathbb{R}^3$ una calotta regolare e si suddivida $R$ in piccoli rettangoli $\lbrack u_h,u_h+\Delta u\rbrack \times[v_k,v_k+\Delta v]$. L'immagine di ciascuno è ben approssimata dal parallelogramma sul piano tangente generato da $\boldsymbol{\sigma}_u\,\Delta u$ e $\boldsymbol{\sigma}_v\,\Delta v$. La sua area è $\|\boldsymbol{\sigma}_u\wedge\boldsymbol{\sigma}_v\|\,\Delta u\,\Delta v=\|\boldsymbol{\nu}(u_h,v_k)\|\,\Delta u\,\Delta v$, dove $\boldsymbol{\nu}$ è il vettore normale (si veda [Superfici in $\mathbb{R}^3$](ref:chapter/3#p7)). Si interpreta quindi

$$d\sigma=\|\boldsymbol{\nu}(u,v)\|\,du\,dv$$

come elemento infinitesimo di area su $\Sigma$.

### Integrale superficiale e area

**Definizione 5.6** (integrale superficiale). Sia $\Sigma$ il sostegno di una calotta regolare e semplice $\boldsymbol{\sigma}:R\to\mathbb{R}^3$ e sia $f:\Sigma\to\mathbb{R}$ continua. L'integrale superficiale di $f$ su $\Sigma$ è

:::formula{id="5.10" label="Integrale superficiale di una funzione scalare"}
$$\iint_\Sigma f\,d\sigma=\iint_R f(\boldsymbol{\sigma}(u,v))\,\|\boldsymbol{\nu}(u,v)\|\,du\,dv$$
:::

dove $\boldsymbol{\nu}=\boldsymbol{\sigma}_u\wedge\boldsymbol{\sigma}_v$. Il valore non dipende dalla parametrizzazione regolare e semplice scelta, perché due tali parametrizzazioni sono congruenti. Si usano anche le notazioni $\int_\Sigma f$ e $\int_\Sigma f(\boldsymbol{\sigma})\,d\sigma$. Se $\Sigma$ è unione di calotte regolari e semplici $\Sigma_1,\dots,\Sigma_n$ con intersezioni a due a due vuote o contenute in un arco regolare a tratti, si pone $\iint_\Sigma f\,d\sigma=\sum_{i=1}^n\iint_{\Sigma_i}f\,d\sigma$.

**Definizione 5.7** (area). L'area di una calotta regolare (a pezzi) e semplice è

:::formula{id="5.11" label="Area di una superficie"}
$$\operatorname{area}(\Sigma)=\iint_\Sigma 1\,d\sigma=\iint_R\|\boldsymbol{\nu}(u,v)\|\,du\,dv$$
:::

L'integrale superficiale ha le stesse proprietà dell'integrale doppio: linearità, monotonia, additività. Se $f$ è una densità superficiale di massa, $\iint_\Sigma f\,d\sigma$ è la massa della lamina curva $\Sigma$.

Si può estendere la definizione a superfici che non sono calotte, purché $\|\boldsymbol{\nu}\|$ sia integrabile su $R$. Ad esempio la semisfera $x^2+y^2+z^2=1$, $z\ge 0$, con $\boldsymbol{\sigma}(u,v)=(u,v,\sqrt{1-u^2-v^2})$ non è differenziabile sul bordo del disco $D$. Tuttavia $\|\boldsymbol{\nu}\|=1/\sqrt{1-u^2-v^2}$ è integrabile su $D$ e in coordinate polari

$$\operatorname{area}=\int_0^{2\pi}\!\!\int_0^1\frac{r}{\sqrt{1-r^2}}\,dr\,d\theta=2\pi,$$

cioè $2\pi r^2$ per una semisfera di raggio $r$.

### Superfici cartesiane

Il programma richiede solo le superfici cartesiane, cioè i grafici $z=g(x,y)$ con $g\in C^1$ su un dominio $K$ del piano $xy$. La parametrizzazione è $\boldsymbol{\sigma}(x,y)=(x,y,g(x,y))$ e la normale si calcola subito:

$$\boldsymbol{\nu}(x,y)=\boldsymbol{\sigma}_x\wedge\boldsymbol{\sigma}_y=\left(-g_x,\,-g_y,\,1\right).$$

Poiché $\boldsymbol{\nu}\cdot\mathbf{k}=1>0$, la normale punta sempre verso l'alto (si veda anche [(3.28)](ref:formula/3.28)).

:::formula{id="5.12" label="Elemento d'area di una superficie cartesiana"}
$$d\sigma=\sqrt{1+g_x(x,y)^2+g_y(x,y)^2}\;dx\,dy$$
:::

Da qui seguono le due formule operative, nelle quali l'integrale è un ordinario integrale doppio sul dominio piano $K$.

:::formula{id="5.13" label="Integrale superficiale e area su un grafico"}
$$\iint_\Sigma f\,d\sigma=\iint_K f\bigl(x,y,g(x,y)\bigr)\sqrt{1+g_x^2+g_y^2}\,dx\,dy,\qquad \operatorname{area}(\Sigma)=\iint_K\sqrt{1+g_x^2+g_y^2}\,dx\,dy$$
:::

Se la superficie è un grafico rispetto a un altro piano coordinato, si proietta su quel piano. Per $y=g(x,z)$, con $(x,z)\in K$, si ha $\boldsymbol{\nu}=(g_x,-1,g_z)$ e $d\sigma=\sqrt{1+g_x^2+g_z^2}\,dx\,dz$. Per $x=g(y,z)$ si ha $d\sigma=\sqrt{1+g_y^2+g_z^2}\,dy\,dz$.

Il fattore $\sqrt{1+g_x^2+g_y^2}\ge 1$ misura quanto il grafico è inclinato rispetto al piano $xy$. Se $g$ è costante l'area coincide con quella di $K$.

:::image{src="assets/2e7e738a-elemento-area-cartesiano.svg" alt="Grafico z = g(x,y) sopra il dominio K con un elemento d'area" caption="Fig. 5.4 — Un rettangolino dx dy del dominio K si solleva sul grafico in un parallelogramma tangente di area maggiore, con fattore radice di 1 + gₓ² + g_y²; la normale (-gₓ, -g_y, 1) punta verso l'alto."}
:::

### Metodo di calcolo

1. Scrivere $\Sigma$ come grafico, individuando la variabile espressa dalle altre e il dominio piano $K$ di proiezione.
2. Calcolare le derivate parziali di $g$ e il fattore $\sqrt{1+g_x^2+g_y^2}$.
3. Sostituire in $f$ la coordinata dipendente con $g(x,y)$, così da ottenere una funzione di $(x,y)$.
4. Calcolare l'integrale doppio su $K$, scegliendo il sistema di coordinate adatto: spesso quelle polari (si veda [Cambiamento di variabile negli integrali doppi](ref:chapter/4#p4)).

**Esempio 5.13** (area). Calcolare l'area della parte di paraboloide $z=\tfrac12(x^2+y^2)$ compresa tra l'origine e il piano $z=4$.

Il piano $z=4$ taglia il paraboloide dove $x^2+y^2=8$, quindi $K=\{x^2+y^2\le 8\}$. Con $g=\tfrac12(x^2+y^2)$ si ha $g_x=x$, $g_y=y$, dunque $\boldsymbol{\nu}=(-x,-y,1)$ e $\|\boldsymbol{\nu}\|=\sqrt{1+x^2+y^2}$. In polari, $x^2+y^2=r^2$ e $dx\,dy=r\,dr\,d\theta$, con $0\le r\le 2\sqrt2$:

$$\operatorname{area}=\int_0^{2\pi}\!\!\int_0^{2\sqrt2}\sqrt{1+r^2}\;r\,dr\,d\theta=2\pi\left[\frac{(1+r^2)^{3/2}}{3}\right]_0^{2\sqrt2}=2\pi\cdot\frac{27-1}{3}=\frac{52\pi}{3}.$$

**Esempio 5.14** (integrale di una funzione). Sulla stessa superficie $\Sigma$ calcolare $\iint_\Sigma z\,d\sigma$.

Sulla superficie $z=\tfrac12 r^2$, quindi l'integrando diventa $\tfrac12 r^2\sqrt{1+r^2}$ e

$$\iint_\Sigma z\,d\sigma=\int_0^{2\pi}\!\!\int_0^{2\sqrt2}\tfrac12 r^2\sqrt{1+r^2}\;r\,dr\,d\theta=\pi\int_0^{2\sqrt2}r^3\sqrt{1+r^2}\,dr.$$

Con $t=1+r^2$ si ha $r^2=t-1$ e $r\,dr=dt/2$; gli estremi diventano $t=1$ e $t=9$. Quindi

$$\frac{\pi}{2}\int_1^9 (t-1)\sqrt t\,dt=\frac{\pi}{2}\left[\frac25 t^{5/2}-\frac23 t^{3/2}\right]_1^9=\frac{\pi}{2}\left[\left(\frac{486}{5}-18\right)+\frac{4}{15}\right]=\frac{\pi}{2}\cdot\frac{1192}{15}=\frac{596\pi}{15}.$$

**Errore tipico 5.8.** Dimenticare il fattore $\sqrt{1+g_x^2+g_y^2}$ e integrare $f$ rispetto a $dx\,dy$: si calcola così l'integrale sul dominio piano $K$, non su $\Sigma$. Nell'esempio precedente si otterrebbe $\pi\int_0^{2\sqrt2} r^3\,dr=16\pi$ invece di $596\pi/15$. Gli errori collegati sono tre.

- Lasciare nell'integrando $f(x,y,z)$ senza sostituire $z=g(x,y)$. L'integrale doppio deve contenere solo $x$ e $y$.
- Sbagliare il piano di proiezione. Per $y=g(x,z)$ il dominio $K$ sta nel piano $xz$ e il fattore è $\sqrt{1+g_x^2+g_z^2}$.
- Dimenticare il fattore $r$ dello jacobiano quando si passa in coordinate polari, oltre al fattore d'area: sono due fattori distinti.

**Errore tipico 5.9.** Applicare le formule a superfici non cartesiane rispetto al piano scelto. Una sfera completa non è un grafico, e la semisfera ha $g_x,g_y\to\infty$ sul bordo del disco. In questo caso l'integrale è improprio ma convergente, come mostrato sopra con la semisfera. Per sfere e cilindri conviene usare le parametrizzazioni angolari, che hanno $\|\boldsymbol{\nu}\|$ regolare, descritte in [Superfici in $\mathbb{R}^3$](ref:chapter/3#p7).

## p6 | Flusso di un campo vettoriale

Un campo vettoriale $\mathbf{F}$ può descrivere la velocità di un fluido o una densità di corrente. Il **flusso** misura quanta quantità attraversa una superficie nell'unità di tempo. Poiché si può attraversare in due versi opposti, il flusso ha un segno. Per questo, prima di calcolarlo, bisogna **orientare** la superficie, cioè scegliere uno dei due versori normali.

### Orientazione di una superficie

Sia $\boldsymbol{\sigma}:R\to\mathbb{R}^3$ una superficie regolare e semplice, di sostegno $\Sigma$. In ogni punto è definito il vettore normale, come richiamato nella sezione [Superfici in $\mathbb{R}^3$](ref:chapter/3#p7), e il versore ad esso associato:

$$\boldsymbol{\nu}(u,v)=\frac{\partial\boldsymbol{\sigma}}{\partial u}(u,v)\wedge\frac{\partial\boldsymbol{\sigma}}{\partial v}(u,v),\qquad \mathbf{n}(u,v)=\frac{\boldsymbol{\nu}(u,v)}{\|\boldsymbol{\nu}(u,v)\|}.$$

Per la regolarità $\boldsymbol{\nu}\neq\mathbf{0}$ ed è ortogonale a $\boldsymbol{\sigma}_u$ e $\boldsymbol{\sigma}_v$, quindi al piano tangente.

La parametrizzazione scelta **induce** su $\Sigma$ uno dei due versori normali, $\mathbf{n}$ oppure $-\mathbf{n}$: questo è il **verso di attraversamento**. Parametrizzazioni equivalenti inducono la stessa orientazione, parametrizzazioni anti-equivalenti quella opposta.

**Definizione 5.8** (superficie orientabile). Una superficie regolare e semplice $\Sigma\subset\mathbb{R}^3$ si dice orientabile se due qualunque sue parametrizzazioni regolari e semplici sono tra loro congruenti.

Una superficie regolare e semplice parametrizzata su una regione aperta $R$ del piano è sempre orientabile. Il nastro di Möbius è invece non orientabile: percorrendo un giro il vettore normale ritorna cambiato di segno ($\boldsymbol{\nu}=\tfrac12\mathbf{k}$ in $u=0$, $-\tfrac12\mathbf{k}$ in $u=2\pi$).

Due casi sono importanti per le applicazioni.

- **Superficie cartesiana** $\boldsymbol{\sigma}(u,v)=u\mathbf{i}+v\mathbf{j}+\varphi(u,v)\mathbf{k}$. Si ha $\boldsymbol{\nu}=-\varphi_u\,\mathbf{i}-\varphi_v\,\mathbf{j}+\mathbf{k}$, e poiché $\boldsymbol{\nu}\cdot\mathbf{k}=1>0$ la normale punta sempre verso l'alto.
- **Frontiera di un solido.** Ogni superficie regolare e semplice contenuta nella frontiera $\partial\Omega$ di un aperto connesso e limitato $\Omega\subset\mathbb{R}^3$ è orientabile. Si può scegliere la normale **uscente** da $\Omega$ (dall'interno verso l'esterno) oppure **entrante** in $\Omega$.

Una superficie regolare a pezzi è orientabile se lo è ogni pezzo e gli orientamenti si possono scegliere compatibili attraverso gli spigoli. Per una superficie chiusa, come il bordo di un solido, si sceglie la normale uscente su tutti i pezzi.

:::image{src="assets/58707e0d-flusso-orientazione-normale.svg" alt="Calotta orientata con due normali opposte e un campo vettoriale" caption="Fig. 5.5 — Una calotta Σ con i due versori normali n e −n: il segno di F·n decide se il campo attraversa la calotta nel verso scelto (flusso positivo) o in verso opposto (flusso negativo)."}
:::

### Definizione di flusso

**Definizione 5.9** (integrale di flusso). Sia $\Sigma\subset\mathbb{R}^3$ una calotta regolare (a pezzi), semplice e orientabile, con versore normale $\mathbf{n}$ fissato. Sia $\mathbf{F}$ un campo vettoriale definito su $\Sigma$, con $\mathbf{F}\circ\boldsymbol{\sigma}$ generalmente continua. Il **flusso** di $\mathbf{F}$ attraverso $\Sigma$ è

$$\iint_\Sigma \mathbf{F}\cdot\mathbf{n}\,d\sigma=\iint_{\boldsymbol{\sigma}}\mathbf{F}\cdot\mathbf{n}\,d\sigma,$$

dove $\boldsymbol{\sigma}$ è una qualunque parametrizzazione regolare e semplice di $\Sigma$ che induce l'orientazione scelta. La definizione non dipende dalla parametrizzazione, perché parametrizzazioni che inducono la stessa orientazione sono equivalenti.

Il calcolo avviene con la formula

:::formula{id="5.14" label="Flusso attraverso una calotta parametrica"}
$$\iint_\Sigma\mathbf{F}\cdot\mathbf{n}\,d\sigma=\iint_R \mathbf{F}\big(\boldsymbol{\sigma}(u,v)\big)\cdot\boldsymbol{\nu}(u,v)\,du\,dv$$
:::

Il fattore $\|\boldsymbol{\nu}\|$ dell'elemento d'area si semplifica con quello che normalizza $\mathbf{n}$: $\mathbf{F}\cdot\mathbf{n}\,\|\boldsymbol{\nu}\|=\mathbf{F}\cdot\boldsymbol{\nu}$. Per questo nel flusso compare $\boldsymbol{\nu}$ e non la sua norma, a differenza dell'[integrale superficiale](ref:chapter/5#p5) di una funzione scalare.

**Interpretazione fisica.** Se $\mathbf{F}=\mu\mathbf{v}$ è la densità di flusso di massa di un fluido (densità $\mu$, velocità $\mathbf{v}$), la quantità $(\mathbf{F}\cdot\mathbf{n})\,\Delta\sigma$ è la portata attraverso un elemento di area $\Delta\sigma$. Il flusso è la portata totale attraverso $\Sigma$. Se $\Sigma$ delimita un solido, si parla di flusso **uscente** o **entrante** a seconda della normale scelta.

### Dipendenza dall'orientazione

Sostituire $\boldsymbol{\sigma}$ con una parametrizzazione anti-equivalente scambia $\mathbf{n}$ con $-\mathbf{n}$, e il flusso cambia segno. Questo è l'analogo di quanto visto per gli [integrali di linea](ref:chapter/5#p3).

:::formula{id="5.15" label="Cambio di segno con l'orientazione della superficie"}
$$\iint_{\Sigma,-\mathbf{n}}\mathbf{F}\cdot\mathbf{n}\,d\sigma=-\iint_{\Sigma,\mathbf{n}}\mathbf{F}\cdot\mathbf{n}\,d\sigma$$
:::

In pratica: dopo aver calcolato $\boldsymbol{\nu}$, si confronta il suo verso con quello richiesto dal problema (uscente, verso l'alto, ...). Se è opposto, si cambia segno al risultato oppure si scambiano i parametri.

### Flusso attraverso una superficie cartesiana

Per $\Sigma$ grafico di $z=g(x,y)$ con $(x,y)\in K$, $g\in C^1$, la parametrizzazione $(x,y)\mapsto(x,y,g(x,y))$ ha $\boldsymbol{\nu}=(-g_x,-g_y,1)$. Se la superficie è orientata **verso l'alto**, scrivendo $\mathbf{F}=(F_1,F_2,F_3)$ si ottiene

:::formula{id="5.16" label="Flusso attraverso un grafico, normale verso l'alto"}
$$\iint_\Sigma\mathbf{F}\cdot\mathbf{n}\,d\sigma=\iint_K\Big(-F_1\,g_x-F_2\,g_y+F_3\Big)\Big|_{(x,y,g(x,y))}\,dx\,dy$$
:::

Con la normale verso il basso il risultato cambia segno. La formula segue da {{formula:5.14}} con la normale cartesiana già vista nella sezione sugli integrali superficiali.

### Metodo di calcolo

1. Si disegna $\Sigma$ e si legge dal testo l'orientazione richiesta (uscente, verso l'alto, ...).
2. Si sceglie la parametrizzazione: grafico, coordinate sferiche o cilindriche, a seconda della forma.
3. Si calcola $\boldsymbol{\nu}=\boldsymbol{\sigma}_u\wedge\boldsymbol{\sigma}_v$ e si controlla che il verso coincida con quello richiesto. Altrimenti si usa $-\boldsymbol{\nu}$.
4. Si calcola $\mathbf{F}(\boldsymbol{\sigma}(u,v))\cdot\boldsymbol{\nu}(u,v)$ **senza dividere per $\|\boldsymbol{\nu}\|$**, e si integra su $R$.

Se $\mathbf{F}\cdot\mathbf{n}$ è costante su una superficie di area nota (per esempio campo radiale su una sfera), il flusso è semplicemente $\mathbf{F}\cdot\mathbf{n}$ per l'area.

### Esempi svolti

**Esempio 5.15** (sfera). Calcoliamo il flusso uscente del campo $\mathbf{F}(x,y,z)=y\,\mathbf{i}-x\,\mathbf{j}+z\,\mathbf{k}$ dalla sfera di centro l'origine e raggio $r$.

Passo 1: si usano le coordinate sferiche, con $u$ colatitudine e $v$ longitudine,

$$\boldsymbol{\sigma}(u,v)=r\sin u\cos v\,\mathbf{i}+r\sin u\sin v\,\mathbf{j}+r\cos u\,\mathbf{k},\qquad (u,v)\in[0,\pi]\times[0,2\pi].$$

Passo 2: un calcolo diretto dà $\boldsymbol{\nu}=r\sin u\,(x\,\mathbf{i}+y\,\mathbf{j}+z\,\mathbf{k})$. Poiché $\sin u\ge0$, è un multiplo positivo del vettore posizione: punta verso l'esterno, come richiesto.

Passo 3: sulla superficie

$$\mathbf{F}\cdot\boldsymbol{\nu}=r\sin u\,(yx-xy+z^2)=r\sin u\cdot r^2\cos^2u=r^3\sin u\cos^2u.$$

Passo 4: si integra,

$$\iint_\Sigma\mathbf{F}\cdot\mathbf{n}\,d\sigma=\int_0^{2\pi}\!\!\int_0^{\pi}r^3\sin u\cos^2u\,du\,dv=2\pi r^3\left[-\frac{\cos^3u}{3}\right]_0^{\pi}=\frac{4}{3}\pi r^3.$$

La parte $y\,\mathbf{i}-x\,\mathbf{j}$ è tangente alla sfera e non contribuisce.

**Esempio 5.16** (calotta di paraboloide). Calcoliamo il flusso di $\mathbf{F}=(x,y,z)$ attraverso $\Sigma:\ z=4-x^2-y^2$, $z\ge0$, con normale verso l'alto.

Il dominio è il disco $K=\{x^2+y^2\le4\}$ e $g=4-x^2-y^2$, quindi $g_x=-2x$, $g_y=-2y$ e $\boldsymbol{\nu}=(2x,2y,1)$, rivolto verso l'alto. Sulla superficie $z=4-x^2-y^2$, perciò

$$\mathbf{F}\cdot\boldsymbol{\nu}=2x^2+2y^2+z=2(x^2+y^2)+4-(x^2+y^2)=x^2+y^2+4.$$

In coordinate polari, con $dx\,dy=r\,dr\,d\theta$,

$$\iint_K(x^2+y^2+4)\,dx\,dy=\int_0^{2\pi}\!\!\int_0^2(r^2+4)\,r\,dr\,d\theta=2\pi\left[\frac{r^4}{4}+2r^2\right]_0^2=2\pi(4+8)=24\pi.$$

Con la normale verso il basso il flusso sarebbe $-24\pi$, per {{formula:5.15}}.

**Errore tipico 5.10.** Usare il versore $\mathbf{n}$ al posto di $\boldsymbol{\nu}$ nella formula parametrica, cioè calcolare $\iint_R\mathbf{F}\cdot\mathbf{n}\,du\,dv$. In questo modo si perde il fattore $\|\boldsymbol{\nu}\|$ dell'elemento d'area. Nell'esempio della sfera si perderebbe il fattore $\|\boldsymbol{\nu}\|=r^2\sin u$.

**Errore tipico 5.11.** Non controllare il verso di $\boldsymbol{\nu}$. Scambiare i parametri $u$ e $v$, o usare una parametrizzazione con orientazione opposta, cambia segno al risultato. Se il testo chiede il flusso uscente, bisogna verificare che $\boldsymbol{\nu}$ punti verso l'esterno, per esempio in un punto semplice. Per una superficie cartesiana con $\boldsymbol{\nu}=(-g_x,-g_y,1)$ la normale è sempre verso l'alto, quindi per una faccia inferiore va cambiato il segno.

**Errore tipico 5.12.** Sommare i flussi dei pezzi di una superficie chiusa con orientazioni miste. Per un solido, ogni pezzo va orientato con la normale uscente. Per esempio, il fondo di un cilindro ha $\mathbf{n}=-\mathbf{k}$ e il coperchio $\mathbf{n}=+\mathbf{k}$. Il flusso totale è la somma dei flussi sui pezzi, ciascuno calcolato con la propria normale uscente. Per un campo di classe $C^1$ su un solido con bordo regolare a pezzi, il flusso uscente totale si può anche ottenere dal [teorema della divergenza](ref:chapter/5#p7), che evita il calcolo pezzo per pezzo.

## p7 | Teoremi di Green, Gauss e Stokes

Il teorema di Green, il teorema della divergenza e il teorema di Stokes sono l'analogo multidimensionale dell'integrazione per parti. Ciascuno trasforma un integrale su un dominio, o su una superficie, di un operatore differenziale del primo ordine in un integrale sul bordo, dove le derivate non compaiono più. Per lo studente significa poter calcolare uno dei due integrali sapendo calcolare l'altro.

Gli integrali di bordo sono integrali di campi vettoriali: dipendono quindi dal verso di percorrenza o dalla normale scelta. Per questo l'orientazione è parte dell'enunciato di ogni teorema. Richiami utili: [integrale di linea](ref:chapter/5#p3), [flusso](ref:chapter/5#p6), [divergenza e rotore](ref:chapter/3#p3).

### Teorema di Green

Un aperto $\Omega\subseteq\mathbb{R}^2$ si dice $G$-ammissibile se è limitato e la sua frontiera è formata da un numero finito di grafici di funzioni regolari, che si incontrano lungo archi regolari e lasciano l'aperto localmente da una stessa parte. Sono $G$-ammissibili i poligoni, i cerchi, le corone circolari e, in generale, le loro unioni e intersezioni finite.

Se $\mathbf{n}=(n_1,n_2)$ è la normale esterna a $\partial\Omega$, il versore $\boldsymbol\tau=(-n_2,n_1)$ è tangente al bordo. Esso fissa il **verso positivo** di percorrenza: camminando su $\partial\Omega$ si vede localmente $\Omega$ alla propria sinistra. Per una circonferenza è il verso antiorario. Se $\Omega$ ha dei buchi, il bordo esterno si percorre in senso antiorario e ogni bordo interno in senso orario.

:::image{src="assets/da43ca18-green-bordo-orientato.svg" alt="Dominio piano con un buco e bordo orientato positivamente" caption="Fig. 5.6 — Corona con un buco: bordo esterno percorso in senso antiorario, bordo del buco in senso orario; il dominio resta sempre a sinistra."}
:::

**Teorema 5.4** (di Green). Sia $\Omega\subseteq\mathbb{R}^2$ un aperto $G$-ammissibile, con $\partial^+\Omega$ orientato nel verso positivo. Sia $\mathbf{F}=(F_1,F_2)$ un campo di classe $C^1(\overline{\Omega})$. Allora

:::formula{id="5.17" label="Teorema di Green"}
$$\iint_{\Omega}\left(\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}\right)dx\,dy=\oint_{\partial^+\Omega}\mathbf{F}\cdot\boldsymbol\tau\,ds$$
:::

Il primo membro è l'integrale di $\operatorname{rot}\mathbf{F}$ (si veda [(3.8)](ref:formula/3.8)), il secondo è la circuitazione di $\mathbf{F}$ sul bordo. L'ipotesi $C^1$ vale su tutto $\overline\Omega$, quindi anche sul bordo: il campo deve essere regolare in ogni punto del dominio. Non serve invece nei buchi, che non fanno parte di $\overline\Omega$.

**Area con integrali di linea.** Il campo $\mathbf{F}=(-y,x)$ ha rotore costante uguale a $2$. Il teorema di Green dà $\oint_{\partial^+\Omega}\mathbf{F}\cdot\boldsymbol\tau\,ds=\iint_\Omega 2\,dx\,dy$, cioè

:::formula{id="5.18" label="Area tramite circuitazione"}
$$\operatorname{area}(\Omega)=\frac12\oint_{\partial^+\Omega}(-y\,dx+x\,dy)=\oint_{\partial^+\Omega}x\,\mathbf{j}\cdot\boldsymbol\tau\,ds=\oint_{\partial^+\Omega}(-y)\,\mathbf{i}\cdot\boldsymbol\tau\,ds$$
:::

Va bene qualunque campo con rotore costante uguale a $1$, per esempio $(0,x)$ o $(-y,0)$.

**Esempio 5.17** (area dell'ellisse). Sia $E=\{x^2/a^2+y^2/b^2\le 1\}$, con bordo $\boldsymbol\gamma(t)=(a\cos t,\,b\sin t)$, $t\in[0,2\pi]$, percorso in senso antiorario. Allora $\boldsymbol\gamma'(t)=(-a\sin t,\,b\cos t)$ e $-y\,x'+x\,y'=ab\sin^2t+ab\cos^2t=ab$. Dunque

$$
\operatorname{area}(E)=\frac12\int_0^{2\pi}ab\,dt=\pi ab.
$$

**Esempio 5.18** (circuitazione tramite Green). Calcoliamo $\oint\mathbf{F}\cdot\boldsymbol\tau\,ds$ per $\mathbf{F}=(-x^2y,\;xy^2)$ sulla circonferenza $x^2+y^2=4$, percorsa in senso antiorario.

1. Il campo è $C^1$ su $\mathbb{R}^2$ e la circonferenza è $\partial^+\Omega$ con $\Omega$ il disco $x^2+y^2<4$: le ipotesi sono verificate.
2. $\dfrac{\partial F_2}{\partial x}-\dfrac{\partial F_1}{\partial y}=y^2-(-x^2)=x^2+y^2$.
3. In coordinate polari:
$\displaystyle \iint_\Omega (x^2+y^2)\,dx\,dy=\int_0^{2\pi}\!\!\int_0^2 r^2\cdot r\,dr\,d\theta=2\pi\cdot\frac{2^4}{4}=8\pi.$

Il calcolo diretto con la parametrizzazione richiederebbe di integrare prodotti di seni e coseni di grado quattro: Green è molto più rapido.

**Errore tipico 5.13.** Usare Green con il verso sbagliato: se il bordo è percorso in senso orario, la circuitazione vale $-\iint_\Omega\operatorname{rot}\mathbf{F}$. Per domini con buchi, bisogna percorrere i bordi interni in senso orario, oppure sottrarre la circuitazione (antioraria) sul bordo del buco. Un secondo errore è applicare il teorema a un campo non $C^1$ in un punto del dominio, per esempio $(-y,x)/(x^2+y^2)$ sul disco che contiene l'origine.

### Teorema della divergenza

Il teorema della divergenza (o di Gauss) afferma che l'integrale della divergenza di un campo su un aperto limitato è uguale al flusso del campo uscente dalla frontiera. Si prende $\mathbf{n}$ normale esterna a $\partial\Omega$; per un aperto $G$-ammissibile in $\mathbb{R}^3$ essa è la normale a ciascun pezzo di grafico, orientata verso l'esterno.

**Teorema 5.5** (della divergenza). Sia $\Omega\subset\mathbb{R}^3$ un aperto $G$-ammissibile e $\mathbf{F}$ un campo di classe $C^1(\overline\Omega)$. Allora

:::formula{id="5.19" label="Teorema della divergenza"}
$$\iiint_\Omega\operatorname{div}\mathbf{F}\,dx\,dy\,dz=\iint_{\partial\Omega}\mathbf{F}\cdot\mathbf{n}\,d\sigma$$
:::

Vale anche in $\mathbb{R}^2$ con $\iint_\Omega\operatorname{div}\mathbf{F}\,dx\,dy=\oint_{\partial\Omega}\mathbf{F}\cdot\mathbf{n}\,ds$ e $\mathbf{n}$ normale esterna alla curva.

**Metodo per un flusso uscente.**

1. Se la superficie $\Sigma$ è già il bordo completo di un solido $\Omega$, si calcola $\iiint_\Omega\operatorname{div}\mathbf{F}$.
2. Se $\Sigma$ è solo una parte del bordo, si **chiude** con una o più superfici semplici (di solito dischi piani) $B_i$, tali che $\Sigma\cup\bigcup B_i=\partial\Omega$. Poi
$\displaystyle \iint_\Sigma\mathbf{F}\cdot\mathbf{n}\,d\sigma=\iiint_\Omega\operatorname{div}\mathbf{F}\,dx\,dy\,dz-\sum_i\iint_{B_i}\mathbf{F}\cdot\mathbf{n}\,d\sigma,$
dove su ogni $B_i$ la normale è quella **esterna a $\Omega$**.
3. Se $\operatorname{div}\mathbf{F}=0$, il flusso totale è nullo e il flusso su $\Sigma$ è l'opposto di quello sulle chiusure.

**Esempio 5.19.** Calcoliamo il flusso di $\mathbf{F}=(x,y,z)$ attraverso la calotta $\Sigma:\ z=x^2+y^2,\ 0\le z\le1$, con normale esterna (cioè rivolta verso il basso).

1. $\Sigma$ è il bordo laterale del solido $\Omega=\{x^2+y^2<z<1\}$. Lo chiudiamo con il disco $B:\ z=1,\ x^2+y^2\le1$, con normale $\mathbf{n}=\mathbf{k}$.
2. $\operatorname{div}\mathbf{F}=3$. Il volume di $\Omega$ è
$\displaystyle \iint_{x^2+y^2<1}(1-r^2)\,dx\,dy=2\pi\int_0^1(1-r^2)r\,dr=\frac{\pi}{2},$
quindi $\iiint_\Omega\operatorname{div}\mathbf{F}=\dfrac{3\pi}{2}$.
3. Su $B$: $\mathbf{F}\cdot\mathbf{n}=z=1$, quindi $\iint_B\mathbf{F}\cdot\mathbf{n}\,d\sigma=\pi$.
4. Perciò $\displaystyle\iint_\Sigma\mathbf{F}\cdot\mathbf{n}\,d\sigma=\frac{3\pi}{2}-\pi=\frac{\pi}{2}$.

Verifica diretta: con $\boldsymbol\nu=(2x,2y,-1)$, uscente perché ha la terza componente negativa, si ha $\mathbf{F}\cdot\boldsymbol\nu=2x^2+2y^2-z=r^2$ su $\Sigma$, e $\iint_{x^2+y^2\le1}r^2\,dx\,dy=2\pi/4=\pi/2$.

:::image{src="assets/da43ca18-gauss-chiusura-paraboloide.svg" alt="Calotta paraboloidale chiusa da un disco superiore, con normali esterne" caption="Fig. 5.7 — Il solido x²+y² < z < 1: sulla calotta laterale la normale esterna punta verso il basso, sul disco di chiusura z = 1 punta verso l'alto."}
:::

**Errore tipico 5.14.** Dimenticare la chiusura: se si applica il teorema a una superficie non chiusa, si ottiene il flusso totale e non quello cercato. Un altro errore frequente è usare su $B$ la normale «comoda» invece di quella esterna al solido: sul disco di base a $z=0$ la normale esterna è $-\mathbf{k}$, non $\mathbf{k}$. Infine, il teorema non si applica a superfici non orientabili come il nastro di Möbius.

### Teorema del rotore

Il teorema di Stokes lega la circuitazione sul bordo di una superficie al flusso del rotore attraverso di essa. Si lavora con **calotte $S$-ammissibili**: unioni finite di superfici cartesiane regolari che formano una calotta orientabile e semplice. Fissata la normale $\mathbf{n}$, il bordo è percorso **positivamente** se un osservatore che cammina su di esso, con i piedi sul bordo e la testa verso $\mathbf{n}$, vede la superficie alla propria sinistra (regola della mano destra).

:::image{src="assets/da43ca18-stokes-orientazione.svg" alt="Calotta con normale e bordo orientato secondo la regola della mano destra" caption="Fig. 5.8 — La normale n fissa il verso positivo del bordo: con la testa lungo n, la superficie resta a sinistra."}
:::

**Teorema 5.6** (di Stokes, o del rotore). Sia $\Sigma\subset\mathbb{R}^3$ una calotta $S$-ammissibile, con normale $\mathbf{n}$ fissata e bordo $\partial^+\Sigma$ percorso positivamente. Sia $\mathbf{F}$ un campo di classe $C^1$ in un aperto contenente $\Sigma$. Allora

:::formula{id="5.20" label="Teorema di Stokes"}
$$\iint_\Sigma(\operatorname{rot}\mathbf{F})\cdot\mathbf{n}\,d\sigma=\oint_{\partial^+\Sigma}\mathbf{F}\cdot\boldsymbol\tau\,ds$$
:::

In parole, il flusso del rotore attraverso la superficie uguaglia la circuitazione lungo il bordo. Se $\Sigma$ è contenuta nel piano $xy$ con $\mathbf{n}=\mathbf{k}$, si ritrova il teorema di Green. Il campo deve essere $C^1$ in tutta la superficie e nell'aperto che la contiene; la superficie deve essere orientabile.

**Metodo.**

1. Fissare la normale $\mathbf{n}$ (o dedurla dal verso del bordo, se assegnato) e verificare che il verso del bordo sia coerente con la regola della mano destra.
2. Calcolare $\operatorname{rot}\mathbf{F}$ (si veda [(3.7)](ref:formula/3.7)).
3. Scegliere la superficie più comoda tra quelle con lo stesso bordo orientato: un disco piano è quasi sempre più semplice della calotta curva.
4. Calcolare il flusso del rotore.

**Esempio 5.20.** Calcoliamo la circuitazione di $\mathbf{F}=(y,z,x)$ lungo la circonferenza $x^2+y^2=1$, $z=0$, percorsa in senso antiorario se vista dall'alto.

1. Il bordo è antiorario visto dall'alto, quindi la normale coerente è $\mathbf{n}=\mathbf{k}$ (regola della mano destra).
2. $\operatorname{rot}\mathbf{F}=(0-1,\;0-1,\;0-1)=(-1,-1,-1)$.
3. Scegliamo il disco piano $\Sigma:\ z=0,\ x^2+y^2\le1$, con $\mathbf{n}=\mathbf{k}$. Allora $\operatorname{rot}\mathbf{F}\cdot\mathbf{n}=-1$ e il flusso è $-\pi$.
4. La circuitazione vale $-\pi$.

Verifica diretta: $\boldsymbol\gamma(t)=(\cos t,\sin t,0)$, $\boldsymbol\gamma'(t)=(-\sin t,\cos t,0)$ e $\mathbf{F}(\boldsymbol\gamma(t))=(\sin t,0,\cos t)$, quindi $\mathbf{F}\cdot\boldsymbol\gamma'=-\sin^2t$ e $\int_0^{2\pi}(-\sin^2t)\,dt=-\pi$. Con la calotta $z=1-x^2-y^2$, $z\ge0$, e $\boldsymbol\nu=(2x,2y,1)$ si trova $\iint(-2x-2y-1)\,dx\,dy=-\pi$: stesso risultato, perché le due superfici hanno lo stesso bordo orientato.

**Errore tipico 5.15.** Scegliere la normale senza controllare il verso del bordo: con la normale opposta, il teorema vale solo se si inverte anche il verso di percorrenza. Si sbaglia così il segno del risultato. Si sbaglia anche usando superfici diverse con lo stesso bordo ma orientate in modo non coerente, oppure applicando il teorema a un campo non $C^1$ su una porzione della superficie.

**Riepilogo dei tre teoremi.** Green lega un integrale doppio e la circuitazione sul bordo (piano). Gauss lega un integrale triplo e il flusso uscente (spazio). Stokes lega il flusso del rotore e la circuitazione sul bordo (superficie). In tutti e tre il bordo deve essere orientato in modo coerente con il dominio.
