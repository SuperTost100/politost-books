---
chapter: 7
title: Calcolo differenziale
---

## p1 | Introduzione

Il calcolo differenziale fornisce gli strumenti con cui lo studio delle funzioni smette di basarsi solo su limiti isolati e diventa un'analisi sistematica del comportamento locale e globale: crescita, decrescita, massimi, minimi, velocità di variazione. La nozione di derivata, nata dal rapporto incrementale, permette di approssimare una funzione con la sua retta tangente e di distinguere, tra i punti di continuità, quelli in cui il grafico ammette una direzione ben definita da quelli angolosi, cuspidali o a tangente verticale. Da qui si passa ai grandi teoremi dell'analisi, Fermat, Rolle e Lagrange, che collegano il segno della derivata al comportamento globale della funzione e giustificano le procedure standard per trovare massimi e minimi su un intervallo. Il capitolo si chiude con il teorema di de l'Hôpital, una tecnica potente ma delicata per risolvere forme indeterminate che altrimenti richiederebbero confronti asintotici complessi.

Per affrontare questi contenuti è indispensabile avere già familiarità con i limiti notevoli e il confronto asintotico, poiché molte dimostrazioni e molti esempi si appoggiano direttamente su questi strumenti.

Al termine del capitolo lo studente saprà calcolare derivate anche in presenza di composizioni e funzioni inverse, riconoscere e classificare i punti di non derivabilità, applicare correttamente i teoremi fondamentali per determinare monotonia, massimi e minimi assoluti, e utilizzare con consapevolezza il teorema di de l'Hôpital, evitandone gli errori tipici di applicazione.

## p2 | Derivata e retta tangente

La derivata è lo strumento che permette di misurare la rapidità di variazione di una funzione in un punto e, geometricamente, di costruire la retta tangente al suo grafico. Questa nozione è il punto di partenza di tutto il calcolo differenziale e verrà usata in modo continuo nei capitoli successivi (studio di monotonia, estremi, Taylor).

### Rapporto incrementale e retta secante

Sia $f: I \to \mathbb{R}$ una funzione e sia $x_0 \in I$ un punto interno a $I$, cioè tale che esista un intorno $I(x_0) \subseteq I$. Dato $\overline{x} \in I$, $\overline{x} \neq x_0$, la retta passante per i punti $P_0 = (x_0, f(x_0))$ e $\overline{P} = (\overline{x}, f(\overline{x}))$ del grafico di $f$ (retta secante) ha equazione

$$y = f(x_0) + \frac{f(\overline{x}) - f(x_0)}{\overline{x} - x_0}(x - x_0),$$

dove il coefficiente angolare della secante è

$$\frac{f(\overline{x}) - f(x_0)}{\overline{x} - x_0} = \tan\alpha,$$

con $\alpha$ angolo che la secante forma con l'asse delle $x$.

L'espressione

$$\frac{f(\overline{x}) - f(x_0)}{\overline{x} - x_0}$$

si chiama **rapporto incrementale** di $f$ in $x_0$ ed è ben definita per $\overline{x} \in I(x_0) \setminus \{x_0\}$.

Per ottenere la retta tangente al grafico in $x_0$ si fa tendere $\overline{x}$ a $x_0$: la retta tangente è, se esiste, la retta per $P_0$ con coefficiente angolare

$$\lim_{\overline{x}\to x_0} \frac{f(\overline{x}) - f(x_0)}{\overline{x} - x_0}.$$

:::image{src="assets/4b1d9574-secante-a-tangente.svg" alt="Retta secante che tende alla retta tangente per la parabola y=x^2 nel punto x0=1" caption="Fig. 7.1 — Al tendere di x_bar a x0, la secante per i punti (x0,f(x0)) e (x_bar,f(x_bar)) ruota fino a diventare la tangente"}
:::

### Derivata di una funzione

:::formula{id="7.1" label="Derivata di una funzione in un punto"}
$$f'(x_0) = \lim_{\overline{x}\to x_0} \frac{f(\overline{x}) - f(x_0)}{\overline{x} - x_0}$$
:::

$f$ è derivabile in $x_0$ se tale limite esiste ed è finito.

Una formulazione equivalente, spesso più comoda nei calcoli, si ottiene posto $h = \overline{x} - x_0$: $f$ è derivabile in $x_0$ se e solo se esiste finito

$$\lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h},$$

e in tal caso tale limite coincide con $f'(x_0)$.

Poiché il limite che definisce $f'(x_0)$ deve esistere e coincidere da destra e da sinistra, se $f$ è derivabile in $x_0$ devono necessariamente esistere e coincidere le **derivate laterali** $f'_+(x_0)$ e $f'_-(x_0)$, cioè i limiti unilateri del rapporto incrementale; una funzione definita in un intorno di $x_0$ è derivabile in $x_0$ se e solo se è derivabile sia da destra sia da sinistra in $x_0$ e le due derivate laterali coincidono. Questo criterio sarà essenziale nello studio dei punti di non derivabilità.

Una volta nota la derivata, l'equazione della retta tangente al grafico di $f$ nel punto $(x_0, f(x_0))$ è

:::formula{id="7.2" label="Retta tangente al grafico di una funzione"}
$$y = f(x_0) + f'(x_0)(x - x_0)$$
:::

**Esempio 7.1.** Calcoliamo con la definizione la derivata di $f(x) = x^2$ in un punto generico $x_0 \in \mathbb{R}$. Si ha

$$\frac{f(\overline{x}) - f(x_0)}{\overline{x} - x_0} = \frac{\overline{x}^2 - x_0^2}{\overline{x} - x_0} = \frac{(\overline{x}-x_0)(\overline{x}+x_0)}{\overline{x}-x_0} = \overline{x} + x_0,$$

da cui, passando al limite per $\overline{x} \to x_0$,

$$f'(x_0) = \lim_{\overline{x}\to x_0} (\overline{x} + x_0) = 2x_0.$$

Per esempio, nel punto $x_0 = 1$ si ha $f(1) = 1$ e $f'(1) = 2$, quindi la retta tangente al grafico di $f(x) = x^2$ nel punto $(1,1)$ è

$$y = 1 + 2(x-1) = 2x - 1.$$

### Prima formula dell'incremento finito

Dalla definizione di derivata segue, usando il linguaggio degli o-piccoli,

$$\lim_{x\to x_0}\left\lbrack \frac{f(x)-f(x_0)}{x-x_0} - f'(x_0)\right\rbrack  = 0 \implies \lim_{x\to x_0}\frac{f(x)-f(x_0)-f'(x_0)(x-x_0)}{x-x_0} = 0,$$

da cui $f(x) - f(x_0) - f'(x_0)(x-x_0) = o(x-x_0)$. Mettendo in evidenza $f(x)$ si ottiene la **prima formula dell'incremento finito**:

:::formula{id="7.3" label="Prima formula dell'incremento finito"}
$$f(x) = f(x_0) + f'(x_0)(x-x_0) + o(x-x_0)$$
:::

La derivata $f'(x_0)$, che è una costante rispetto a $x$, è dunque il numero che rende vera questa approssimazione lineare: la retta tangente è, in questo senso, la migliore approssimazione lineare del grafico di $f$ vicino a $x_0$.

**Esempio 7.2.** Sia $f(x) = \sin x$ e $x_0 = 0$. Anticipando la derivata del seno (che enunceremo tra poco), si ha $f(0) = \sin 0 = 0$ e $f'(0) = \cos 0 = 1$. La prima formula dell'incremento finito diventa

$$f(x) = f(0) + f'(0)(x-0) + o(x-0) = 0 + 1 \cdot x + o(x) \implies f(x) = x + o(x),$$

che ritroveremo come limite notevole del seno quando $x \to 0$.

### Derivabilità e continuità

Il legame tra derivabilità e continuità è il risultato più importante di questa sezione.

**Teorema 7.1 (derivabilità implica continuità).** Sia $f: I \to \mathbb{R}$ e $x_0 \in I$. Se $f$ è derivabile in $x_0$, allora $f$ è continua in $x_0$.

*Dimostrazione.* Dalla prima formula dell'incremento finito {{formula:7.3}} si ha, per $x$ vicino a $x_0$,

$$f(x) = f(x_0) + f'(x_0)(x-x_0) + o(x-x_0).$$

Poiché $f'(x_0)(x-x_0) \to 0$ e $o(x-x_0) \to 0$ quando $x \to x_0$, si ottiene $\lim_{x\to x_0} f(x) = f(x_0)$, che è esattamente la definizione di continuità di $f$ in $x_0$ data in [continuità tramite il limite](ref:chapter/5#p2). $\square$

**Errore tipico 7.1.** Il teorema precedente non si inverte: continuità **non** implica derivabilità. Non è lecito dedurre che una funzione continua in $x_0$ sia anche derivabile in $x_0$; l'implicazione vale in un solo senso. L'esempio canonico è $f(x) = |x|$, già introdotto in [Valore assoluto](ref:chapter/1#p4): la funzione è continua su tutto $\mathbb{R}$, ma in $x_0 = 0$ il rapporto incrementale vale $+1$ da destra e $-1$ da sinistra, quindi $f$ presenta un punto angoloso e non è derivabile in $0$. Lo studio sistematico di questi casi (punti angolosi, cuspidi, flessi a tangente verticale) è l'oggetto della sezione successiva, [Punti di non derivabilità](ref:chapter/7#p3).

:::image{src="assets/4b1d9574-valore-assoluto-angoloso.svg" alt="Grafico di f(x)=|x| con punto angoloso nell'origine" caption="Fig. 7.2 — La funzione |x| è continua in 0 ma non derivabile: le derivate laterali valgono +1 e -1"}
:::

### Regole di derivazione

Il calcolo diretto della derivata tramite la definizione è utile per capire il concetto, ma nella pratica si usano le regole di derivazione, applicate alle derivate delle funzioni elementari. Per ciascuna formula indichiamo il dominio in cui vale, poiché non sempre coincide con il dominio della funzione di partenza.

**Derivate fondamentali.**

- $f(x) = c$ (costante), $x \in \mathbb{R}$ $\implies f'(x) = 0$ per ogni $x \in \mathbb{R}$;
- $f(x) = x^\alpha$, con $\alpha \in \mathbb{R}$, definita per $x > 0$ (ed eventualmente anche per $x \leq 0$ secondo il valore di $\alpha$) $\implies f'(x) = \alpha x^{\alpha-1}$ per ogni $x > 0$; si osservi che, anche quando $f$ risulta definita anche in $x = 0$ (per esempio con $\alpha = 1/2$), la formula può non valere in tale punto, perché la derivata può non esistere o non essere finita;
- $f(x) = a^x$, con $a > 0$, $x \in \mathbb{R}$ $\implies f'(x) = a^x \log a$ per ogni $x \in \mathbb{R}$;
- $f(x) = e^x$, $x \in \mathbb{R}$ $\implies f'(x) = e^x$ per ogni $x \in \mathbb{R}$;
- $f(x) = \log_a x$, con $a > 0$, $a \neq 1$, $x > 0$ $\implies f'(x) = \dfrac{1}{x \log a}$ per ogni $x > 0$;
- $f(x) = \log x$, $x > 0$ $\implies f'(x) = \dfrac{1}{x}$ per ogni $x > 0$;
- $f(x) = \sin x$, $x \in \mathbb{R}$ $\implies f'(x) = \cos x$ per ogni $x \in \mathbb{R}$;
- $f(x) = \cos x$, $x \in \mathbb{R}$ $\implies f'(x) = -\sin x$ per ogni $x \in \mathbb{R}$;
- $f(x) = \tan x$, definita per $x \neq \frac{\pi}{2} + k\pi$, $k \in \mathbb{Z}$ $\implies f'(x) = 1 + \tan^2 x = \dfrac{1}{\cos^2 x}$, per ogni $x$ nel dominio.

A queste derivate fondamentali si combinano le regole algebriche di derivazione, valide ovunque entrambe le funzioni coinvolte siano derivabili.

:::formula{id="7.4" label="Regole di derivazione per somma, prodotto e quoziente"}
$$\begin{aligned}
(f+g)'(x) &= f'(x) + g'(x), \\\\
(f \cdot g)'(x) &= f'(x)g(x) + f(x)g'(x), \\\\
\left(\frac{f}{g}\right)'(x) &= \frac{f'(x)g(x) - f(x)g'(x)}{g(x)^2} \quad \text{(dove } g(x) \neq 0\text{).}
\end{aligned}$$
:::

A queste si aggiungono i due teoremi seguenti, relativi alla composizione e all'inversione di funzioni.

**Teorema 7.2 (derivata della funzione composta).** Siano $f: A \to \mathbb{R}$ e $g: B \to \mathbb{R}$, con $A, B \subseteq \mathbb{R}$, $x_0 \in B$ interno a $B$ e tale che esista un intorno $I(x_0) \subseteq B$ con $g(I(x_0)) \subseteq A$. Se $g$ è derivabile in $x_0$ e $f$ è derivabile in $g(x_0)$, allora $h = f \circ g$ è derivabile in $x_0$ e

$$h'(x_0) = f'(g(x_0)) \cdot g'(x_0).$$

**Teorema 7.3 (derivata della funzione inversa).** Sia $f$ continua e invertibile in un intorno $I$ di $x_0$, con $I \subseteq \operatorname{dom} f$, sia $f$ derivabile in $x_0$ con $f'(x_0) \neq 0$ e sia $y_0 = f(x_0)$. Allora $f^{-1}$ è derivabile in $y_0$ e

$$(f^{-1})'(y_0) = \frac{1}{f'(x_0)}.$$

**Esempio 7.3.** Calcoliamo la derivata di $h(x) = \log(1 + x^2)$ usando la regola della composta con $g(x) = 1 + x^2$ e $f(u) = \log u$. Si ha $g'(x) = 2x$ e $f'(u) = \dfrac{1}{u}$, quindi

$$h'(x) = f'(g(x)) \cdot g'(x) = \frac{1}{1+x^2} \cdot 2x = \frac{2x}{1+x^2}.$$

### Errori tipici

- Scrivere la retta tangente usando il valore della derivata calcolato in un punto diverso da $x_0$, o confondere il punto di tangenza $(x_0, f(x_0))$ con un altro punto del grafico. La formula {{formula:7.2}} richiede sempre $f(x_0)$ e $f'(x_0)$ calcolati nello **stesso** $x_0$.
- Dedurre la derivabilità da sola continuità: come visto, l'implicazione vale solo in un senso.
- Applicare la formula $f(x)=x^\alpha \implies f'(x)=\alpha x^{\alpha-1}$ anche nei punti in cui essa non vale, in particolare in $x=0$ quando $0<\alpha<1$ (per esempio $\sqrt{x}$ non è derivabile in $0$) o quando $\alpha<0$ (allora $x^\alpha$ non è nemmeno definita in $0$), oppure usare $\log_a x$ senza richiedere $a>0$ e $a \neq 1$.
- Applicare la regola della derivata della funzione inversa senza verificare $f'(x_0) \neq 0$, oppure la regola della catena dimenticando di moltiplicare per la derivata della funzione interna.
- Errori di calcolo nella derivazione: sbagliare una derivata è uno degli errori più comuni tra gli studenti, perché porta a conclusioni scorrette su massimi, minimi, monotonia e convessità nei capitoli successivi; conviene sempre ricontrollare i calcoli più di una volta.

## p3 | Punti di non derivabilità

Nella sezione precedente abbiamo dimostrato che la derivabilità in un punto implica la continuità in quel punto, ma non il viceversa: $f(x) = |x|$ è continua in $x_0 = 0$ eppure non è derivabile in quel punto, perché il suo grafico presenta un **punto angoloso**. In questa sezione sistematizziamo questa osservazione, classificando i tipi di punto in cui una funzione continua può non essere derivabile, e mostriamo come riconoscerli nello studio di funzioni con valore assoluto, radici e parametri.

### Derivate laterali e condizione di derivabilità

Richiamiamo la nozione di derivata unilatera, già introdotta come limite laterale del rapporto incrementale. Data $f : I \to \mathbb{R}$ e $x_0$ interno a $I$, si definiscono

$$f'_+(x_0) = \lim_{x \to x_0^+} \frac{f(x)-f(x_0)}{x-x_0}, \qquad f'_-(x_0) = \lim_{x \to x_0^-} \frac{f(x)-f(x_0)}{x-x_0},$$

quando tali limiti esistono (finiti o infiniti).

Una funzione $f$ definita in un intorno di $x_0$ è derivabile in $x_0$ se e solo se è derivabile da destra e da sinistra in $x_0$ e le derivate destra e sinistra coincidono (ed entrambe sono finite). Se $f$ è derivabile da destra e da sinistra in $x_0$ ma le derivate laterali sono diverse, allora $f$ non è derivabile in $x_0$ e il punto va classificato tra i casi che vedremo di seguito.

L'ipotesi di continuità in $x_0$ è sempre sottintesa quando parliamo di punti di non derivabilità: se $f$ non fosse nemmeno continua in $x_0$, il punto sarebbe già classificato come punto di discontinuità (vedi [punti di discontinuità](ref:chapter/5#p3)), e la questione della derivabilità non si pone nello stesso modo. D'ora in avanti, quindi, consideriamo sempre $f : I \to \mathbb{R}$, con $x_0$ interno a $I$ ed $f$ continua in $x_0$.

### Classificazione dei punti di non derivabilità

Supponiamo $f$ continua in $x_0$ ma non derivabile in $x_0$. I tre casi principali che si presentano a questo livello del corso sono i seguenti.

**Punto angoloso.** Si ha un punto angoloso in $x_0$ se esistono finiti i due limiti laterali del rapporto incrementale, ma sono diversi tra loro:

:::formula{id="7.5" label="Punto angoloso"}
$$\lim_{x \to x_0^+} \frac{f(x)-f(x_0)}{x-x_0} \neq \lim_{x \to x_0^-} \frac{f(x)-f(x_0)}{x-x_0}$$
:::

Si classifica come punto angoloso anche la situazione in cui una delle due derivate laterali è finita mentre l'altra è infinita: in questo caso il grafico presenta un ramo "verticale" da un lato e uno "obliquo" dall'altro, formando comunque uno spigolo. L'esempio canonico è $f(x) = |x|$ in $x_0 = 0$, con $f'_+(0) = 1$ e $f'_-(0) = -1$.

**Punto di cuspide.** Si ha una cuspide in $x_0$ quando entrambi i limiti laterali del rapporto incrementale esistono e sono infiniti, ma di segno opposto:

:::formula{id="7.6" label="Punto di cuspide"}
$$\exists \lim_{x \to x_0^+} \frac{f(x)-f(x_0)}{x-x_0} = \pm\infty, \qquad \exists \lim_{x \to x_0^-} \frac{f(x)-f(x_0)}{x-x_0} = \mp\infty$$
:::

Graficamente, nella cuspide le due semitangenti sono verticali; per $f(x) = \sqrt{|x|}$ entrambe sono orientate verso l'alto. Sono invece i limiti laterali del rapporto incrementale ad avere segni opposti.

**Punto a tangente verticale.** Se il limite completo del rapporto incrementale è infinito, il grafico ha tangente verticale in $x_0$. Per chiamare il punto **flesso** occorre verificare anche che la concavità cambi attraversando $x_0$:

:::formula{id="7.7" label="Condizione per la tangente verticale"}
$$\lim_{x \to x_0} \frac{f(x)-f(x_0)}{x-x_0} = +\infty \quad \text{oppure} \quad \lim_{x \to x_0} \frac{f(x)-f(x_0)}{x-x_0} = -\infty$$
:::

I due limiti laterali del rapporto incrementale sono quindi infiniti e dello stesso segno. Questo garantisce la tangente verticale, ma non il cambiamento di concavità: la classificazione come flesso richiede una verifica distinta. Per $f(x)=\sqrt[3]{x}$ in $x_0=0$ si verificano entrambe le condizioni.

Va segnalato che esiste anche un quarto caso, non trattato sistematicamente in questo corso ma che può presentarsi negli esercizi: quello in cui almeno uno dei due limiti laterali del rapporto incrementale non esiste, ad esempio per oscillazione, come per $f(x) = x\sin(1/x)$ con $f(0)=0$, il cui rapporto incrementale in $0$ è $\sin(1/h)$. In tal caso il punto è semplicemente un punto di non derivabilità che non rientra in nessuna delle tre categorie precedenti.

:::image{src="assets/593627ec-punto-angoloso-valore-assoluto.svg" alt="Grafico di valore assoluto di x con punto angoloso nell'origine" caption="Fig. 7.3 — Punto angoloso di f(x) = |x| in x0 = 0: le due semirette hanno pendenze diverse (+1 e -1)"}
:::

:::image{src="assets/593627ec-cuspide-radice-valore-assoluto.svg" alt="Grafico di radice del valore assoluto di x con cuspide nell'origine" caption="Fig. 7.4 — Cuspide di f(x) = radice di |x| in x0 = 0: le due semitangenti sono verticali e di segno opposto"}
:::

### Il teorema «tappabuchi»

Nella pratica, calcolare direttamente il limite del rapporto incrementale può essere scomodo quando $f$ è definita da un'espressione complicata. Spesso è più comodo calcolare la derivata $f'(x)$ per $x \neq x_0$ con le regole di derivazione usuali, e poi studiarne il limite per $x \to x_0$.

:::formula{id="7.8" label="Teorema tappabuchi"}
$$\begin{aligned} &\text{Ipotesi: } f \text{ continua in } x_0, \ f \text{ derivabile in un intorno di } x_0 \text{ (escluso al più } x_0), \\ &\exists \lim_{x \to x_0} f'(x) = \ell \text{ finito} \\ &\text{Tesi: } f \text{ è derivabile in } x_0 \text{ e } f'(x_0) = \ell \end{aligned}$$
:::

Se valgono le stesse ipotesi solo da un lato, cioè $f$ è continua in $x_0$ e derivabile in un intorno unilatero di $x_0$, escluso al più $x_0$, e la derivata ha limite finito da quel lato, allora il rapporto incrementale unilatero ha lo stesso limite. Questo criterio unilatero permette di calcolare le derivate laterali e confrontarle.

Se $f$ è continua in $x_0$, derivabile in un intorno di $x_0$ escluso al più il punto stesso, e $\lim_{x\to x_0}f'(x)=+\infty$ oppure $-\infty$, allora il rapporto incrementale ha lo stesso limite infinito e il grafico ha tangente verticale in $x_0$. La stessa conclusione vale da un solo lato: se $\lim_{x\to x_0^+}f'(x)=+\infty$ oppure $-\infty$, il rapporto incrementale destro ha quel limite; analogamente da sinistra. Per stabilire se il punto sia anche un flesso bisogna verificare separatamente il cambiamento di concavità. Se $\lim_{x\to x_0^+}f'(x)=+\infty$ e $\lim_{x\to x_0^-}f'(x)=-\infty$, o viceversa, i limiti laterali del rapporto incrementale hanno segni opposti e $x_0$ è una cuspide.

Un **errore tipico** è applicare questo criterio dimenticando l'ipotesi di continuità in $x_0$: se $f$ non è continua in $x_0$, il limite della derivata non dice nulla sulla derivabilità, perché il punto è già classificato come discontinuità.

### Esempi svolti

**Esempio 7.4 (punto angoloso).** Studiamo la derivabilità di $f(x) = |x|$ in $x_0 = 0$. Per $x > 0$ si ha $f(x) = x$, quindi $f'(x) = 1$; per $x < 0$ si ha $f(x) = -x$, quindi $f'(x) = -1$. Applicando il criterio unilatero del teorema tappabuchi a destra e a sinistra, otteniamo

$$\lim_{x \to 0^+} f'(x) = 1, \qquad \lim_{x \to 0^-} f'(x) = -1.$$

I due limiti sono finiti ma diversi, quindi $x_0 = 0$ è un punto angoloso.

**Esempio 7.5 (cuspide).** Studiamo $f(x) = \sqrt{|x|}$ in $x_0 = 0$. Per $x > 0$, $f(x) = \sqrt{x}$ e $f'(x) = \dfrac{1}{2\sqrt{x}}$; per $x < 0$, $f(x) = \sqrt{-x}$ e $f'(x) = -\dfrac{1}{2\sqrt{-x}}$. Allora

$$\lim_{x \to 0^+} f'(x) = +\infty, \qquad \lim_{x \to 0^-} f'(x) = -\infty.$$

I due limiti sono infiniti e di segno opposto: $x_0 = 0$ è una cuspide.

**Esempio 7.6 (flesso a tangente verticale).** Studiamo $f(x) = \sqrt[3]{x}$ in $x_0 = 0$. Si ha $f'(x) = \dfrac{1}{3 x^{2/3}}$ per $x \neq 0$, e

$$\lim_{x \to 0^+} f'(x) = +\infty, \qquad \lim_{x \to 0^-} f'(x) = +\infty,$$

I due limiti mostrano che il grafico ha tangente verticale in $x_0=0$. Inoltre $f''(x)=-\dfrac{2}{9x^{5/3}}$ per $x\neq 0$: è positiva a sinistra di $0$ e negativa a destra. La concavità cambia, quindi $x_0=0$ è un flesso a tangente verticale.

**Esempio 7.7 (derivabilità con parametro).** Consideriamo

$$f(x) = \begin{cases} x^2 + a x & x \geq 0 \\ \sin(bx) & x < 0 \end{cases}$$

e determiniamo $a, b \in \mathbb{R}$ affinché $f$ sia derivabile su tutto $\mathbb{R}$. Innanzitutto $f$ deve essere continua in $x_0 = 0$: $f(0^+) = 0$ e $f(0^-) = \lim_{x \to 0^-} \sin(bx) = 0$ per ogni $b$, quindi la continuità è automatica. Calcoliamo ora le derivate laterali: per $x > 0$, $f'(x) = 2x + a$, quindi $f'_+(0) = a$; per $x < 0$, $f'(x) = b\cos(bx)$, quindi $f'_-(0) = b$. Il criterio unilatero del teorema tappabuchi mostra che questi sono i limiti dei rispettivi rapporti incrementali. Dunque $f$ è derivabile in $0$ se e solo se $f'_+(0) = f'_-(0)$, cioè $a = b$. La funzione risulta derivabile su tutto $\mathbb{R}$ per ogni scelta di $a = b \in \mathbb{R}$; per qualsiasi altra scelta di parametri, $x_0 = 0$ è un punto angoloso.

**Osservazione 7.1 (derivate successive).** La funzione $f(x) = x|x|$ è derivabile su tutto $\mathbb{R}$, con

$$f'(x) = \begin{cases} 2x & x \geq 0 \\ -2x & x < 0 \end{cases},$$

che è continua su $\mathbb{R}$ (dunque $f \in C^1(\mathbb{R})$); tuttavia $f'$ non è a sua volta derivabile in $x_0 = 0$, perché

$$f''(x) = \begin{cases} 2 & x > 0 \\ -2 & x < 0 \end{cases}$$

presenta un salto in $0$: $f \in C^1(\mathbb{R})$ ma $f \notin C^2(\mathbb{R})$. Questo mostra che un punto di non derivabilità non riguarda solo $f$ stessa, ma può ripresentarsi, con la stessa classificazione fatta per $f$, a livello delle derivate successive.

### Perché questi punti contano negli altri teoremi

I punti di non derivabilità non sono solo una curiosità grafica: vanno tenuti presenti ogni volta che si applicano i grandi teoremi del calcolo differenziale.

Nella ricerca del massimo e del minimo assoluti di una funzione continua su $\lbrack a,b\rbrack $ (la cui esistenza è garantita dal [teorema di Weierstrass](ref:chapter/5#p5)), i punti candidati non sono solo quelli interni dove $f'(x) = 0$ e gli estremi $a, b$, ma anche i punti interni in cui $f$ **non è derivabile**: il teorema di Fermat, che impone $f'(x_0) = 0$ nei punti di massimo o minimo relativo, si applica infatti solo dove $f$ è derivabile, e un punto angoloso o una cuspide possono benissimo essere punti di estremo senza che la derivata vi si annulli.

Analoga attenzione va posta nell'applicazione del [teorema di Rolle](ref:chapter/7#p4): l'ipotesi di derivabilità su tutto l'intervallo aperto $\rbrack a,b\lbrack $ è essenziale, non solo tecnica. Se $f$ è continua su $\lbrack a,b\rbrack $ con $f(a) = f(b)$ ma presenta un punto angoloso in $\rbrack a,b\lbrack $, può accadere che la funzione "parta" e "torni" alla stessa ordinata senza mai avere tangente orizzontale, cioè senza che esista alcun $c \in \,\rbrack a,b\lbrack $ con $f'(c) = 0$.

### Errore tipico

Un errore molto comune è concludere che una funzione non è derivabile in $x_0$ solo perché contiene un valore assoluto o una radice in quel punto, senza verificare effettivamente i limiti delle derivate laterali: espressioni come $f(x) = x|x|$ o $f(x) = |x|^3$ sono in realtà derivabili (e anche più volte, in alcuni casi) proprio nel punto in cui compare il modulo, perché le derivate laterali finiscono per coincidere. Il controllo va sempre fatto con il calcolo esplicito dei limiti, mai per analogia superficiale con $|x|$.

Un secondo errore tipico, già segnalato, è dimenticare l'ipotesi di continuità quando si applica il teorema tappabuchi per classificare il punto a partire dal limite di $f'(x)$: senza continuità in $x_0$, il limite della derivata non permette alcuna conclusione sulla derivabilità in quel punto.

## p4 | Teoremi di Fermat, Rolle e Lagrange

I teoremi di Fermat, Rolle e Lagrange formano il nucleo del calcolo differenziale: collegano il segno e l'annullarsi della derivata al comportamento globale della funzione. Da essi discendono il metodo standard per determinare massimi e minimi assoluti su un intervallo chiuso e il test di monotonia, strumenti che verranno usati sistematicamente nello studio di funzione.

### Fermat e ricerca degli estremi

Cominciamo con una definizione che useremo spesso.

:::formula{id="7.9" label="Punto stazionario"}
$$x_0 \text{ è un punto stazionario (o critico) di } f \iff f \text{ è derivabile in } x_0 \text{ e } f'(x_0) = 0$$
:::

Questa nozione rende precisa l'idea intuitiva per cui, nei punti di massimo o minimo relativo, la retta tangente al grafico è orizzontale.

**Teorema 7.4 (di Fermat).** Sia $f: I \to \mathbb{R}$ con $I$ intervallo, $x_0$ interno a $I$ e $f$ derivabile in $x_0$. Se $x_0$ è un punto di massimo relativo oppure di minimo relativo per $f$, allora $f'(x_0) = 0$.

:::formula{id="7.10" label="Teorema di Fermat"}
$$x_0 \text{ punto di massimo/minimo relativo (interno, } f \text{ derivabile in } x_0) \implies f'(x_0) = 0$$
:::

**Dimostrazione.** Trattiamo il caso in cui $x_0$ è punto di massimo relativo (il caso di minimo è analogo). Per ipotesi $f$ è derivabile in $x_0$, quindi il limite seguente esiste ed è uguale ai due limiti unilateri.

$$f'(x_0) = \lim_{x\to x_0} \frac{f(x)-f(x_0)}{x-x_0}$$

Studiamo il segno del rapporto incrementale vicino a $x_0$, sapendo che per $x_0$ punto di massimo relativo si ha $f(x) - f(x_0) \le 0$ per ogni $x$ in un intorno di $x_0$ contenuto in $I$ (esiste $\delta>0$ tale per cui questo vale per $|x-x_0|<\delta$).

- Se $x > x_0$: allora $x - x_0 > 0$ e $f(x)-f(x_0) \le 0$, quindi

$$\frac{f(x)-f(x_0)}{x-x_0} \le 0 \implies \lim_{x\to x_0^+} \frac{f(x)-f(x_0)}{x-x_0} \le 0.$$

- Se $x < x_0$: allora $x - x_0 < 0$ e $f(x)-f(x_0) \le 0$, quindi

$$\frac{f(x)-f(x_0)}{x-x_0} \ge 0 \implies \lim_{x\to x_0^-} \frac{f(x)-f(x_0)}{x-x_0} \ge 0.$$

Poiché $f$ è derivabile in $x_0$, i due limiti unilateri coincidono entrambi con $f'(x_0)$; dalle due disuguaglianze segue $f'(x_0) \le 0$ e $f'(x_0) \ge 0$ simultaneamente, dunque $f'(x_0) = 0$. $\square$

È importante notare che il teorema di Fermat fornisce una condizione **necessaria** ma non sufficiente: un punto con $f'(x_0)=0$ non è automaticamente un massimo o un minimo (si pensi a $f(x)=x^3$ in $x_0=0$). Inoltre le ipotesi (punto interno e derivabilità in quel punto) sono essenziali: agli estremi di un intervallo chiuso, o nei punti di non derivabilità, la derivata può non annullarsi anche in presenza di un estremo relativo.

Questa osservazione risponde alla domanda centrale: dove cercare i punti di massimo e minimo assoluti di una funzione continua su $\lbrack a,b\rbrack $? Per il [teorema di Weierstrass](ref:chapter/5#p5) tali punti $x_m$ (minimo assoluto) e $x_M$ (massimo assoluto) esistono sempre; per il teorema di Fermat, se $x_m$ o $x_M$ è un punto interno in cui $f$ è derivabile, allora in quel punto la derivata si annulla. Occorre quindi considerare sempre tre categorie di candidati.

**Metodo per determinare massimo e minimo assoluti su $\lbrack a,b\rbrack $** ($f$ continua su $\lbrack a,b\rbrack $):

1. i punti interni $x \in \,\rbrack a,b\lbrack \,$ in cui $f'(x) = 0$ (punti stazionari);
2. i punti interni in cui $f$ non è derivabile (punti angolosi, cuspidi, flessi a tangente verticale, studiati nella sezione sui [punti di non derivabilità](ref:chapter/7#p3));
3. gli estremi $a$ e $b$ dell'intervallo.

Si calcola il valore di $f$ in tutti questi punti e si confrontano: il più grande è il massimo assoluto, il più piccolo è il minimo assoluto.

**Esempio 7.8.** Determiniamo massimo e minimo assoluti di $f(x) = x^3 - 3x$ su $\lbrack -2,3\rbrack $.

La funzione è un polinomio, quindi continua e derivabile su tutto $\mathbb{R}$; non ci sono punti di non derivabilità da esaminare. Calcoliamo la derivata:

$$
f'(x) = 3x^2 - 3 = 3(x-1)(x+1).
$$

I punti stazionari sono $x=1$ e $x=-1$, entrambi interni a $\rbrack -2,3\lbrack $. Valutiamo $f$ nei candidati:

$$
f(-2) = -8+6 = -2, \quad f(-1) = -1+3 = 2, \quad f(1) = 1-3 = -2, \quad f(3) = 27-9 = 18.
$$

Confrontando i quattro valori, il massimo assoluto vale $18$ in $x=3$, mentre il minimo assoluto vale $-2$ e viene raggiunto in due punti, $x=-2$ e $x=1$ (il minimo assoluto non deve essere unico).

**Errore tipico 7.2.** Molti studenti si limitano a cercare gli zeri della derivata e dimenticano di confrontare anche i valori agli estremi dell'intervallo: in questo esempio, scordando $f(3)=18$ si concluderebbe erroneamente che il massimo assoluto è $2$. Un secondo errore frequente è commettere sbagli nel calcolo della derivata stessa, che si propagano a tutta l'analisi di massimi, minimi e monotonia.

### Rolle, Lagrange e monotonia

Il teorema di Rolle è un caso particolare del teorema di Lagrange, in cui gli estremi dell'intervallo assumono lo stesso valore.

**Teorema 7.5 (di Rolle).** Siano $a,b \in \mathbb{R}$ con $a<b$ e sia $f: \lbrack a,b\rbrack  \to \mathbb{R}$ continua su $\lbrack a,b\rbrack $ e derivabile (almeno) sull'intervallo aperto $\rbrack a,b\lbrack $. Se $f(a) = f(b)$, allora esiste $c \in \,\rbrack a,b\lbrack \,$ tale che $f'(c) = 0$.

:::formula{id="7.11" label="Teorema di Rolle"}
$$a<b, \quad f \in C([a,b]), \ f \text{ derivabile in } ]a,b[, \ f(a)=f(b) \implies \exists c \in \,]a,b[\, : f'(c) = 0$$
:::

**Dimostrazione.** Per il teorema di Weierstrass, essendo $f$ continua su $\lbrack a,b\rbrack $ chiuso e limitato, esistono $x_m, x_M \in \lbrack a,b\rbrack $ punti di minimo e massimo assoluti.

Distinguiamo due casi.

- **Caso 1: almeno uno tra $x_m$ e $x_M$ è interno ad $\lbrack a,b\rbrack $.** Chiamiamo $c$ questo punto. Essendo $f$ derivabile in $c$ (perché $c \in \,\rbrack a,b\lbrack \,$) e $c$ punto di massimo o minimo assoluto (quindi anche relativo), il teorema di Fermat dà $f'(c) = 0$.

- **Caso 2: nessuno dei due è interno**, cioè entrambi coincidono con gli estremi: $x_m = a$, $x_M = b$ (o viceversa). Per ipotesi $f(a) = f(b)$, dunque $f(x_m) = f(x_M)$. Ma $x_m$ e $x_M$ sono rispettivamente il punto di minimo e di massimo assoluti, quindi per ogni $x \in \lbrack a,b\rbrack $ vale $f(x_m) \le f(x) \le f(x_M)$; essendo i due estremi uguali, $f(x)$ è compresa tra due valori uguali, cioè $f$ è costante su $\lbrack a,b\rbrack $: $f(x) = f(a) = f(b)$ per ogni $x$.
 La derivata di una funzione costante è nulla ovunque, quindi $f'(c) = 0$ per ogni $c \in \,\rbrack a,b\lbrack \,$. $\square$

Geometricamente, il teorema di Rolle afferma che se una funzione continua "parte" da una certa ordinata e deve tornarci, esiste necessariamente un punto con tangente orizzontale. Le tre ipotesi sono tutte indispensabili: se $f$ non fosse continua potrebbe presentare un salto che le permette di risalire da $f(a)$ a $f(b)=f(a)$ senza mai avere derivata nulla; se non fosse derivabile su tutto $\rbrack a,b\lbrack $, potrebbe avere un punto angoloso che consente lo stesso effetto.

:::image{src="assets/1636db53-teorema-di-rolle.svg" alt="Grafico di una funzione con f(a)=f(b) e tangente orizzontale in un punto interno c" caption="Fig. 7.5 — Teorema di Rolle: con f(a) = f(b), esiste un punto c dove la tangente è orizzontale."}
:::

Quando $f(a) \ne f(b)$, il teorema di Rolle non si applica direttamente, ma la sua generalizzazione è il teorema di Lagrange, detto anche **teorema del valor medio**.

**Teorema 7.6 (di Lagrange).** Siano $a,b \in \mathbb{R}$ con $a<b$ e sia $f: \lbrack a,b\rbrack  \to \mathbb{R}$ tale che $f$ sia continua in $\lbrack a,b\rbrack $ e derivabile in $\rbrack a,b\lbrack $. Allora esiste $x_0 \in \,\rbrack a,b\lbrack \,$ tale che

$$f'(x_0) = \frac{f(b)-f(a)}{b-a}.$$

:::formula{id="7.12" label="Teorema di Lagrange (del valor medio)"}
$$a<b, \quad f \in C([a,b]), \ f \text{ derivabile in } ]a,b[ \implies \exists x_0 \in \,]a,b[\, : f'(x_0) = \frac{f(b)-f(a)}{b-a}$$
:::

Il rapporto $\frac{f(b)-f(a)}{b-a}$ è la pendenza (il coefficiente angolare) della retta secante al grafico di $f$ passante per $(a,f(a))$ e $(b,f(b))$; il teorema afferma che esiste almeno un punto $x_0$, detto punto di Lagrange, in cui la retta tangente al grafico è parallela a tale secante.

:::image{src="assets/1636db53-teorema-di-lagrange.svg" alt="Grafico di una parabola con la secante tra gli estremi e la tangente parallela in un punto intermedio" caption="Fig. 7.6 — Teorema di Lagrange: la tangente in x0 è parallela alla secante che congiunge (a, f(a)) e (b, f(b))."}
:::

**Dimostrazione.** Si costruisce una funzione ausiliaria che soddisfa le ipotesi del teorema di Rolle. Poniamo

$$g(x) = f(x) - \frac{f(b)-f(a)}{b-a}(x-a).$$

La funzione $g$ è continua su $\lbrack a,b\rbrack $ perché somma di $f$ (continua per ipotesi) e di una funzione lineare; è derivabile su $\rbrack a,b\lbrack $ perché somma di $f$ (derivabile per ipotesi) e di una funzione lineare, con

$$g'(x) = f'(x) - \frac{f(b)-f(a)}{b-a}, \qquad \forall x \in \,\rbrack a,b\lbrack \,.$$

Verifichiamo che $g(a) = g(b)$.

$$g(a) = f(a), \qquad g(b) = f(b) - \frac{f(b)-f(a)}{b-a}(b-a) = f(b) - \big(f(b)-f(a)\big) = f(a).$$

Quindi $g$ soddisfa tutte le ipotesi del teorema di Rolle sull'intervallo $\lbrack a,b\rbrack $: esiste $x_0 \in \,\rbrack a,b\lbrack \,$ tale che $g'(x_0) = 0$, cioè

$$f'(x_0) - \frac{f(b)-f(a)}{b-a} = 0 \implies f'(x_0) = \frac{f(b)-f(a)}{b-a}. \qquad \square$$

**Dal teorema di Lagrange al test di monotonia.** Una delle applicazioni più importanti del teorema di Lagrange è la deduzione rigorosa del legame tra segno della derivata e monotonia della funzione, già anticipato nella sezione su [funzioni limitate e monotone](ref:chapter/3#p5).

:::formula{id="7.13" label="Test di monotonia tramite la derivata"}
$$\begin{aligned}
f'(x) \ge 0 \ \forall x \in I &\implies f \text{ crescente su } I \\
f'(x) > 0 \ \forall x \in I &\implies f \text{ strettamente crescente su } I \\
f'(x) \le 0 \ \forall x \in I &\implies f \text{ decrescente su } I \\
f'(x) < 0 \ \forall x \in I &\implies f \text{ strettamente decrescente su } I \\
f'(x) = 0 \ \forall x \in I &\implies f \text{ costante su } I
\end{aligned}$$
:::

**Dimostrazione (caso crescente).** Sia $I$ un intervallo, $f$ derivabile su $I$ con $f'(x) \ge 0$ per ogni $x \in I$. Siano $x_1, x_2 \in I$ con $x_1 < x_2$; poiché $\lbrack x_1,x_2\rbrack  \subseteq I$, $f$ è continua su $\lbrack x_1,x_2\rbrack $ e derivabile su $\rbrack x_1,x_2\lbrack \,$, quindi per il teorema di Lagrange esiste $c \in \,\rbrack x_1,x_2\lbrack \,$ tale che

$$f(x_2) - f(x_1) = f'(c)(x_2-x_1).$$

Poiché $x_2 - x_1 > 0$ e per ipotesi $f'(c) \ge 0$, segue $f(x_2) - f(x_1) \ge 0$, cioè $f(x_1) \le f(x_2)$: questa è esattamente la definizione di funzione crescente. $\square$

Gli altri quattro casi si dimostrano in modo identico, sostituendo $\ge 0$ con $>0$, $\le 0$, $<0$ oppure $=0$ e ottenendo rispettivamente $f(x_1) < f(x_2)$ (stretta crescenza), $f(x_1) \ge f(x_2)$ (decrescenza), $f(x_1) > f(x_2)$ (stretta decrescenza) e $f(x_1) = f(x_2)$ per ogni $x_1,x_2 \in I$ (funzione costante).

Questo risultato è lo strumento operativo che userete sistematicamente: per studiare la monotonia di $f$ basta calcolare $f'(x)$, studiarne il segno con le tecniche già note per le disequazioni, e tradurre il segno in intervalli di crescenza o decrescenza. È anche alla base del test sui punti stazionari (massimo relativo se $f'$ passa da positiva a negativa, minimo relativo nel caso opposto), che verrà formalizzato nella sezione sulla [caratterizzazione dei punti critici](ref:chapter/8#p3).

**Errore tipico 7.3.** Un errore frequente consiste nell'applicare il teorema di Lagrange (o Rolle) su un intervallo in cui $f$ non è continua, oppure non è derivabile in tutti i punti interni, senza verificarlo esplicitamente: le conclusioni dei teoremi diventano in generale false se una sola delle ipotesi viene a mancare, anche solo in un punto. Un secondo errore è confondere il punto $c$ (o $x_0$) fornito dal teorema, che esiste ma non è in generale calcolabile esplicitamente né unico, con un punto da determinare sempre con metodi algebrici espliciti: in molte applicazioni il teorema serve solo a garantirne l'esistenza, non a trovarlo.

## p5 | Teorema di de l'Hôpital

### Motivazione

Il calcolo dei limiti di forme indeterminate $\frac{0}{0}$ e $\frac{\infty}{\infty}$ ha finora richiesto artifici algebrici, limiti notevoli o il principio di sostituzione con gli infinitesimi/infiniti campione. Il teorema di de l'Hôpital fornisce uno strumento generale che riconduce il limite di un quoziente di funzioni al limite del quoziente delle loro derivate, spesso più semplice da calcolare.

### Enunciato e ipotesi

**Teorema 7.7 (di de l'Hôpital).** Siano $f, g: I \to \mathbb{R}$ due funzioni derivabili in un intervallo aperto $I$ contenente il punto $x_0$ (tranne eventualmente in $x_0$ stesso). Supponiamo che:

1. $\lim_{x\to x_0} f(x) = \lim_{x\to x_0} g(x) = 0$, oppure $\lim_{x\to x_0} f(x) = \lim_{x\to x_0} g(x) = \pm\infty$;
2. $g'(x) \neq 0$ per ogni $x \in I \setminus \{x_0\}$;
3. $\lim_{x\to x_0} \dfrac{f'(x)}{g'(x)}$ esiste, finito o infinito.

Allora

:::formula{id="7.14" label="Teorema di de l'Hôpital"}
$$\lim_{x\to x_0} \frac{f(x)}{g(x)} = \lim_{x\to x_0} \frac{f'(x)}{g'(x)}$$
:::

Il teorema vale anche sostituendo $x \to x_0$ con $x \to x_0^+$, $x \to x_0^-$, $x \to +\infty$ oppure $x \to -\infty$, con le opportune modifiche sull'intorno in cui valgono le ipotesi. Inoltre può essere applicato più volte in successione, a patto che a ogni passo le ipotesi del teorema continuino a essere verificate.

**Osservazione 7.2.** Le fonti presentano l'enunciato in forme leggermente diverse: alcune richiedono $g'(x) \neq 0$ solo in un intorno di $x_0$ privato del punto stesso, altre lo richiedono su tutto $I \setminus \{x_0\}$. In pratica, nella risoluzione degli esercizi è sufficiente verificare che $g'(x) \neq 0$ in un intorno sufficientemente piccolo di $x_0$, perché il limite è un fenomeno locale.

### Dimostrazione (caso $0/0$, con derivate continue in $x_0$)

Ci limitiamo al caso particolare in cui $f$ e $g$ sono derivabili anche in $x_0$, le loro derivate sono continue in $x_0$, $g'(x_0) \neq 0$ e $\lim_{x\to x_0} f(x) = \lim_{x\to x_0} g(x) = 0$. Poiché $f$ e $g$ sono derivabili in $x_0$, sono in particolare continue in $x_0$, quindi

$$f(x_0) = \lim_{x\to x_0} f(x) = 0, \qquad g(x_0) = \lim_{x\to x_0} g(x) = 0.$$

Allora, per $x \neq x_0$,

$$\frac{f(x)}{g(x)} = \frac{f(x) - 0}{g(x) - 0} = \frac{f(x) - f(x_0)}{g(x) - g(x_0)} = \frac{\dfrac{f(x)-f(x_0)}{x-x_0}}{\dfrac{g(x)-g(x_0)}{x-x_0}}.$$

Passando al limite per $x \to x_0$, il numeratore e il denominatore del rapporto incrementale tendono rispettivamente a $f'(x_0)$ e $g'(x_0)$, per definizione di derivata (si veda [definizione-derivata](ref:chapter/7#p2)). Si ottiene quindi

$$\lim_{x\to x_0} \frac{f(x)}{g(x)} = \frac{f'(x_0)}{g'(x_0)} = \lim_{x\to x_0} \frac{f'(x)}{g'(x)}. \qquad\square$$

La dimostrazione generale (senza supporre l'esistenza di $f'(x_0)$, $g'(x_0)$, ma solo la derivabilità su $I \setminus \{x_0\}$) si basa su una variante del teorema di Lagrange applicata contemporaneamente a $f$ e $g$; non la riportiamo qui, ma il risultato è lo stesso.

### Esempi svolti

**Esempio 7.9 (forma $0/0$, applicazione ripetuta).** Calcoliamo

$$\lim_{x\to 0} \frac{x - \sin x}{x^3}.$$

Numeratore e denominatore tendono entrambi a $0$. Poniamo $f(x) = x - \sin x$, $g(x) = x^3$; si ha $f'(x) = 1 - \cos x$, $g'(x) = 3x^2 \neq 0$ per $x \neq 0$. Il nuovo limite

$$\lim_{x\to 0} \frac{1 - \cos x}{3x^2}$$

è ancora $0/0$: applichiamo nuovamente il teorema con $f'(x) = 1-\cos x$, $g'(x)=3x^2$, le cui derivate sono $\sin x$ e $6x$:

$$\lim_{x\to 0} \frac{\sin x}{6x} = \frac{1}{6} \lim_{x\to 0} \frac{\sin x}{x} = \frac{1}{6},$$

usando [formula (6.6)](ref:formula/6.6). Poiché l'ultimo limite esiste (finito), per il teorema applicato a ritroso anche i due limiti precedenti valgono $\frac{1}{6}$, dunque

$$\lim_{x\to 0} \frac{x - \sin x}{x^3} = \frac{1}{6}.$$

**Esempio 7.10 (forma $\infty/\infty$).** Calcoliamo

$$\lim_{x\to +\infty} \frac{\log x}{x}.$$

Entrambi numeratore e denominatore divergono a $+\infty$; con $f(x) = \log x$, $g(x) = x$ si ha $f'(x) = \frac{1}{x}$, $g'(x) = 1 \neq 0$, e

$$\lim_{x\to +\infty} \frac{1/x}{1} = 0,$$

quindi $\lim_{x\to +\infty} \frac{\log x}{x} = 0$, in accordo con la gerarchia degli infiniti già nota (si veda [Infiniti e infinitesimi](ref:chapter/6#p3)).

:::image{src="assets/914c6d87-esempio-x-seno-x.svg" alt="Grafico di (x - sin x)/x^3 vicino a zero" caption="Fig. 7.7 — L'andamento di (x-sin x)/x^3 vicino a x=0: il limite vale 1/6, coerente con l'applicazione ripetuta di de l'Hôpital"}
:::

### Quando de l'Hôpital non si applica (o non conviene)

**Il limite non è una forma $0/0$ o $\infty/\infty$.** Se, ad esempio, $\lim_{x\to x_0} f(x) = 2$ e $\lim_{x\to x_0} g(x) = 5$, il limite del quoziente è semplicemente $\frac{2}{5}$: applicare de l'Hôpital qui sarebbe non solo inutile, ma scorretto, perché l'ipotesi (1) non è verificata.

**Il limite del rapporto delle derivate non esiste.** Il teorema afferma un'implicazione in un solo senso: se $\lim f'/g'$ esiste, allora anche $\lim f/g$ esiste e coincide con esso. Non vale il viceversa: se $\lim f'/g'$ non esiste, non si può concludere nulla sul limite originale, che potrebbe comunque esistere. L'esempio classico è

$$\lim_{x\to +\infty} \frac{x + \sin x}{x}.$$

Qui $f'(x) = 1 + \cos x$, $g'(x) = 1$, e $\lim_{x\to+\infty} (1+\cos x)$ non esiste (oscilla tra $0$ e $2$); de l'Hôpital non si applica. Tuttavia il limite originale esiste e vale $1$, perché

$$\frac{x+\sin x}{x} = 1 + \frac{\sin x}{x} \to 1 + 0 = 1,$$

usando il teorema dei carabinieri. Questo è l'errore tipico più insidioso: concludere che il limite non esiste solo perché $\lim f'/g'$ non esiste.

**La derivata del denominatore si annulla.** Se $g'(x) = 0$ in punti arbitrariamente vicini a $x_0$, l'ipotesi (2) fallisce e il rapporto $f'(x)/g'(x)$ potrebbe non essere nemmeno definito: il teorema non è applicabile in quella forma.

**Il teorema non conviene.** Anche quando le ipotesi sono verificate, derivare può complicare l'espressione (ad esempio in presenza di prodotti o radici che, derivati, generano espressioni più complesse del limite di partenza) invece di semplificarla; in questi casi è preferibile usare i limiti notevoli o il principio di sostituzione con gli infinitesimi/infiniti (si vedano le sezioni [Limiti notevoli](ref:chapter/6#p2) e [Principio di sostituzione e calcolo dei limiti](ref:chapter/6#p4)).

**Errore tipico 7.4.** Un errore molto diffuso e penalizzante negli scritti è sbagliare il calcolo di $f'$ o $g'$: un segno o un fattore errato porta a un risultato finale completamente scorretto, compromettendo anche l'eventuale studio di monotonia o di punti critici costruito sopra quel limite. Conviene sempre ricontrollare le derivate prima di concludere l'esercizio.
