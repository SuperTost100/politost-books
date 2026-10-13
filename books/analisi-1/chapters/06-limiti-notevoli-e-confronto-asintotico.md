---
chapter: 6
title: Limiti notevoli e confronto asintotico
---

## p1 | Introduzione

Quando il calcolo diretto di un limite produce una forma indeterminata, il confronto ingenuo tra i termini coinvolti può portare a conclusioni affrettate o errate. Questo capitolo fornisce gli strumenti teorici e pratici per affrontare queste situazioni con rigore: i limiti notevoli, che costituiscono i "mattoni" fondamentali su cui si basa gran parte del calcolo dei limiti, e il confronto asintotico, che permette di stabilire con precisione come infiniti e infinitesimi crescano o decrescano gli uni rispetto agli altri.

Per affrontare proficuamente gli argomenti trattati, lo studente deve possedere una solida padronanza del concetto di continuità e del teorema del limite di funzione composta, oltre a familiarità con le funzioni elementari (esponenziali, logaritmiche, trigonometriche) e le loro proprietà.

Al termine del capitolo lo studente saprà riconoscere e applicare i limiti notevoli fondamentali, anche dopo un opportuno cambio di variabile; saprà classificare infiniti e infinitesimi in base al loro ordine, utilizzando i simboli $o(\cdot)$ e $\sim$ e il concetto di parte principale rispetto a un campione; conoscerà la gerarchia asintotica tra logaritmi, potenze, esponenziali e fattoriali. Infine, sarà in grado di applicare correttamente il principio di eliminazione dei termini trascurabili nel calcolo dei limiti, evitando l'errore comune di sostituire asintotici all'interno di somme o differenze con cancellazione, dove tale sostituzione non è lecita.

## p2 | Limiti notevoli

### Perché servono i limiti notevoli

Molte forme indeterminate che si incontrano nel calcolo dei limiti coinvolgono combinazioni di funzioni esponenziali, logaritmiche, potenze e funzioni trigonometriche. Calcolarle direttamente con la definizione di limite (si veda [Definizione di limite](ref:chapter/4#p3)) sarebbe estremamente laborioso. I **limiti notevoli** sono un piccolo catalogo di limiti fondamentali, dimostrati una volta per tutte, che permettono di risolvere rapidamente un'enorme quantità di forme indeterminate del tipo $\frac{0}{0}$, $1^{\infty}$, $\frac{\infty}{\infty}$, tramite opportuni **cambi di variabile**.

Lo strumento teorico che rende legittimi questi cambi di variabile è il teorema sul limite della funzione composta: se $f:\operatorname{dom} f \to \mathbb{R}$, $g:\operatorname{dom} g \to \mathbb{R}$, $x_0$ è punto di accumulazione di $\operatorname{dom} f$, e indichiamo con $\mathbb{R}^* = \mathbb{R} \cup \{-\infty, +\infty\}$ la retta reale estesa (così da poter trattare anche i limiti infiniti), valgono le ipotesi

1. $\exists\, \lim_{x\to x_0} f(x) = y_0 \in \mathbb{R}^*$, con $y_0$ punto di accumulazione di $\operatorname{dom} g$;
2. $\exists\, \lim_{y\to y_0} g(y) = l \in \mathbb{R}^*$;
3. esiste un intorno bucato $I(x_0)\setminus\{x_0\}$ tale che per ogni $x \in \left(I(x_0)\setminus\{x_0\}\right) \cap \operatorname{dom} f$ si ha $f(x) \in \operatorname{dom} g$ e $f(x) \neq y_0$ (oppure $g$ è continua in $y_0$, nel qual caso resta comunque necessario che $f(x) \in \operatorname{dom} g$ in tale intorno),

allora

$$\lim_{x\to x_0} g(f(x)) = \lim_{x\to x_0} (g\circ f)(x) = l.$$

Questo risultato è quanto serve per sostituire, all'interno di un limite, una variabile con un'altra ad essa legata da una funzione continua o invertibile, riconducendo un limite non familiare a uno dei limiti notevoli elencati di seguito.

Un secondo strumento utile è la caratterizzazione per successioni del limite di funzione: se $f:\operatorname{dom} f \to \mathbb{R}$ e $x_0$ è punto di accumulazione di $\operatorname{dom} f$, allora

$$\lim_{x\to x_0} f(x) = l \iff \text{per ogni successione } (x_n) \text{ con } x_n \in \operatorname{dom} f,\ x_n \neq x_0\ \text{per ogni } n,\ x_n \to x_0,\ \text{si ha } f(x_n) \to l.$$

Il limite notevole della successione $\left(1+\frac{1}{n}\right)^n$ costituisce invece il punto di partenza per ottenere il corrispondente limite di funzione: la sua estensione a ogni $x$ reale non segue direttamente dalla caratterizzazione per successioni, ma richiede la dimostrazione per confronto che presentiamo nel paragrafo successivo.

### Il numero $e$ e i limiti notevoli esponenziali e logaritmici

Il punto di partenza è il limite notevole di successioni

$$\lim_{n\to\infty} \left(1+\frac{1}{n}\right)^n = e,$$

che costituisce il punto di partenza per il limite di funzione corrispondente:

:::formula{id="6.1" label="Limite notevole esponenziale all'infinito"}
$$\lim_{x\to+\infty} \left(1+\frac{1}{x}\right)^x = e$$
:::

Conoscere il comportamento del limite lungo la sola successione degli interi non basta a dimostrare il limite per $x$ reale, perché la caratterizzazione per successioni richiede che la convergenza valga per *ogni* successione che tende a $+\infty$, non solo per quella dei naturali: occorre dunque una dimostrazione autonoma per $x$ reale. Per $x\ge 1$ poniamo $n = \lfloor x \rfloor$, cosicché $n \le x < n+1$ e, essendo la funzione $t\mapsto 1+\frac{1}{t}$ decrescente,

$$\left(1+\frac{1}{n+1}\right)^{n} < \left(1+\frac{1}{x}\right)^{x} < \left(1+\frac{1}{n}\right)^{n+1}.$$

Quando $x\to+\infty$ si ha anche $n\to+\infty$, e

$$\left(1+\frac{1}{n+1}\right)^{n} = \frac{\left(1+\frac{1}{n+1}\right)^{n+1}}{1+\frac{1}{n+1}} \to \frac{e}{1} = e, \qquad \left(1+\frac{1}{n}\right)^{n+1} = \left(1+\frac{1}{n}\right)^{n}\cdot\left(1+\frac{1}{n}\right) \to e\cdot 1 = e,$$

sfruttando proprio il limite notevole di successioni $\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n=e$. Per il teorema del confronto si conclude che $\lim_{x\to+\infty}\left(1+\frac{1}{x}\right)^x = e$, questa volta per la variabile reale $x$.

Anche per $x\to-\infty$ vale lo stesso limite. Per dimostrarlo si pone $t = -x$, cosicché $x\to-\infty \iff t\to+\infty$, e si calcola

$$\begin{aligned}
\lim_{t\to+\infty} \left(1-\frac{1}{t}\right)^{-t}
&= \lim_{t\to+\infty} \left(\frac{t-1}{t}\right)^{-t}
= \lim_{t\to+\infty} \left(\frac{t-1}{t-1}+\frac{1}{t-1}\right)^{t}\\
&= \lim_{t\to+\infty} \left(1+\frac{1}{t-1}\right)^{t-1} \cdot \left(1+\frac{1}{t-1}\right) = e \cdot 1 = e.
\end{aligned}$$

Il passaggio chiave è la scomposizione dell'esponente $t = (t-1) + 1$, che isola esattamente il limite notevole già noto.

Ponendo poi $x = \frac{1}{t}$ nel limite precedente (cambio di variabile con $t\to 0$ quando $x\to\pm\infty$), si ottiene la forma equivalente centrata nell'origine:

:::formula{id="6.2" label="Limite notevole esponenziale in zero"}
$$\lim_{x\to 0} (1+x)^{\frac{1}{x}} = e$$
:::

Da questo limite fondamentale discendono, tramite semplici manipolazioni algebriche e cambi di variabile, tutti gli altri limiti notevoli che coinvolgono esponenziali e logaritmi. Scrivendo $(1+x)^{1/x} = e^{\frac{1}{x}\log(1+x)}$ e usando la continuità del logaritmo (che permette di scambiare limite e logaritmo),

$$\lim_{x\to 0^+} \frac{1}{x}\log(1+x) = \lim_{x\to 0^+} \log\!\left((1+x)^{\frac{1}{x}}\right) = \log\!\left\lbrack \lim_{x\to 0^+} (1+x)^{\frac{1}{x}}\right\rbrack  = \log(e) = 1.$$

In modo identico, per $x\to 0^-$,

$$\lim_{x\to 0^-} \frac{1}{x}\log(1+x) = \lim_{x\to 0^-} \log\!\left((1+x)^{\frac{1}{x}}\right) = \log\!\left\lbrack \lim_{x\to 0^-} (1+x)^{\frac{1}{x}}\right\rbrack  = \log(e) = 1,$$

dove si è usato che il limite {{formula:6.2}} vale anche per $x\to 0^-$. Unendo i due risultati si ottiene il limite bilatero, dunque

:::formula{id="6.3" label="Limite notevole del logaritmo"}
$$\lim_{x\to 0} \frac{\log(1+x)}{x} = 1$$
:::

Ponendo $t = e^x - 1$ (cosicché $x = \log(1+t)$ e $t\to 0 \iff x\to 0$) nel limite precedente si ricava il limite notevole dell'esponenziale:

:::formula{id="6.4" label="Limite notevole dell'esponenziale"}
$$\lim_{x\to 0} \frac{e^x-1}{x} = 1$$
:::

Più in generale, per ogni $\alpha \in \mathbb{R}$ vale

:::formula{id="6.5" label="Limite notevole della potenza"}
$$\lim_{x\to 0} \frac{(1+x)^{\alpha}-1}{x} = \alpha$$
:::

Il caso $\alpha = 0$ è immediato, poiché il numeratore è identicamente nullo e il limite vale $0 = \alpha$. Per $\alpha \neq 0$ la formula si ottiene scrivendo $(1+x)^{\alpha} = e^{\alpha \log(1+x)}$ e applicando in successione {{formula:6.4}} e {{formula:6.3}} con il cambio di variabile $y = \alpha\log(1+x)$, lecito perché $y\to 0$ quando $x\to 0$ e $y\neq 0$ in un intorno di $0$ privato dell'origine.

### Limiti notevoli trigonometrici

Un limite fondamentale, di uso costantissimo, è

:::formula{id="6.6" label="Limite notevole del seno"}
$$\lim_{x\to 0} \frac{\sin x}{x} = 1$$
:::

La dimostrazione classica confronta le aree di due triangoli e di un settore circolare di raggio $1$ e ampiezza $x$, ottenendo per $x \in \left\rbrack 0,\frac{\pi}{2}\right\lbrack $ la catena di disuguaglianze $\sin x < x < \tan x$, da cui $\cos x < \frac{\sin x}{x} < 1$; passando al limite per $x\to 0^+$ e usando la continuità del coseno si conclude per il teorema del confronto, e per parità la stessa conclusione vale da sinistra.

Scrivendo $\frac{\tan x}{x} = \frac{\sin x}{x}\cdot\frac{1}{\cos x}$ e applicando {{formula:6.6}} e la continuità del coseno al secondo fattore, si ottiene immediatamente

:::formula{id="6.7" label="Limite notevole della tangente"}
$$\lim_{x\to 0} \frac{\tan x}{x} = 1.$$
:::

Il secondo limite notevole trigonometrico riguarda il coseno:

:::formula{id="6.8" label="Limite notevole del coseno"}
$$\lim_{x\to 0} \frac{1-\cos x}{x^2} = \frac{1}{2}$$
:::

Questo limite si ricava moltiplicando e dividendo per $1+\cos x$:

$$\frac{1-\cos x}{x^2} = \frac{(1-\cos x)(1+\cos x)}{x^2(1+\cos x)} = \frac{1-\cos^2 x}{x^2(1+\cos x)} = \frac{\sin^2 x}{x^2}\cdot \frac{1}{1+\cos x},$$

e passando al limite, usando {{formula:6.6}} e la continuità del coseno, si ottiene $1^2 \cdot \frac{1}{2} = \frac{1}{2}$.

:::image{src="assets/7e8ec8e4-limite-seno-su-x.svg" alt="Grafico di sin(x)/x vicino a zero con il buco in corrispondenza di x=0 e il limite che vale 1" caption="Fig. 6.1 — La funzione f(x) = (sin x)/x non è definita in x=0, ma il suo limite per x→0 vale 1: il grafico presenta un buco esattamente in corrispondenza del valore limite."}
:::

### Risolvere forme indeterminate con un cambio di variabile

I limiti notevoli sono quasi sempre scritti con una variabile che tende a $0$ (o, nel caso esponenziale, anche a $\pm\infty$). Quando l'argomento della funzione non è esattamente $x$ ma una funzione $\varphi(x)$ infinitesima nello stesso punto, si introduce la nuova variabile $t = \varphi(x)$ e si applica il teorema sul cambio di variabile enunciato in apertura, verificando che $\varphi(x) \to 0$ (o $\to \pm\infty$, secondo il caso) quando $x \to x_0$.

**Esempio 6.1.** Calcoliamo

$$\lim_{x\to 0} \frac{e^{2x}-1}{\sin(3x)}.$$

Si tratta di una forma indeterminata $\frac{0}{0}$. Moltiplichiamo e dividiamo per $2x$, l'esponente di $e^{2x}$, e per $3x$, l'argomento del seno:

$$\frac{e^{2x}-1}{\sin(3x)} = \frac{e^{2x}-1}{2x}\cdot \frac{3x}{\sin(3x)} \cdot \frac{2x}{3x} = \frac{e^{2x}-1}{2x}\cdot \frac{3x}{\sin(3x)} \cdot \frac{2}{3}.$$

Ponendo $t = 2x$ nel primo fattore e $s = 3x$ nel secondo (entrambe le sostituzioni sono legittime perché $t\to 0$ e $s\to 0$ quando $x\to 0$, e le funzioni coinvolte sono continue e non nulle in un intorno di $0$ privato dell'origine), si ottiene

$$\lim_{x\to 0} \frac{e^{2x}-1}{2x} = \lim_{t\to 0}\frac{e^t - 1}{t} = 1, \qquad \lim_{x\to 0} \frac{3x}{\sin(3x)} = \lim_{s\to 0}\frac{s}{\sin s} = 1,$$

per {{formula:6.4}} e per {{formula:6.6}} (nella forma reciproca). Quindi

$$\lim_{x\to 0} \frac{e^{2x}-1}{\sin(3x)} = 1 \cdot 1 \cdot \frac{2}{3} = \frac{2}{3}.$$

**Esempio 6.2.** Calcoliamo

$$\lim_{x\to+\infty} \left(\frac{x+2}{x}\right)^{3x} = \lim_{x\to+\infty} \left(1+\frac{2}{x}\right)^{3x}.$$

Poniamo $t = \frac{x}{2}$, cosicché $x = 2t$ e $t\to+\infty$ quando $x\to+\infty$:

$$\left(1+\frac{1}{t}\right)^{6t} = \left\lbrack \left(1+\frac{1}{t}\right)^{t}\right\rbrack ^{6} \longrightarrow e^{6}$$

per {{formula:6.1}} e la continuità della funzione potenza. Il limite richiesto vale dunque $e^6$.

### Errore tipico

L'errore più frequente nell'uso dei limiti notevoli è applicarli come se fossero identità algebriche valide per ogni $x$, cioè scrivere ad esempio $\sin x = x$ o $e^x - 1 = x$ senza controllare che la variabile tenda effettivamente a $0$ (o al valore richiesto dal limite notevole) e senza verificare che il coefficiente dell'argomento sia stato correttamente isolato con la moltiplicazione e divisione mostrata sopra. Un secondo errore comune è dimenticare di controllare le ipotesi del teorema sul cambio di variabile, in particolare le condizioni che $f(x)$ appartenga al dominio di $g$ e che $f(x) \neq y_0$ in un intorno di $x_0$: quando queste condizioni non sono verificate (o non si invoca la continuità di $g$ in $y_0$), la sostituzione può produrre risultati errati, specialmente in presenza di funzioni oscillanti o non monotone. È infine sbagliato applicare un limite notevole esponenziale del tipo $(1+x)^{1/x}\to e$ quando la base non tende a $1$ oppure l'esponente non è il reciproco (a meno di una costante) dell'incremento alla base: in tal caso la forma $1^{\infty}$ va trattata riscrivendo esplicitamente l'esponente, come negli esempi precedenti, e non applicando meccanicamente la formula.

## p3 | Infiniti e infinitesimi

### Perché confrontare infiniti e infinitesimi

Nella sezione precedente abbiamo visto come i [limiti notevoli](ref:chapter/6#p2) permettano di calcolare limiti di forme indeterminate del tipo $\frac{0}{0}$ o $1^{\infty}$. Spesso, però, ci troviamo a confrontare non due funzioni specifiche, ma intere famiglie di funzioni che tendono a $0$ o a $\pm\infty$, e vogliamo sapere "quanto velocemente" lo fanno. Questo confronto sistematico è il cuore del calcolo asintotico ed è lo strumento che useremo per semplificare drasticamente i limiti nella sezione successiva.

Date due funzioni $f, g : A \to \mathbb{R}$, con $A \subseteq \mathbb{R}$ e $x_0$ punto di accumulazione di $A$ (eventualmente $x_0 = \pm\infty$), diciamo che $f$ e $g$ sono **infinitesime** in $x_0$ se

$$
\lim_{x\to x_0} f(x) = 0 \qquad \text{e} \qquad \lim_{x\to x_0} g(x) = 0,
$$

mentre diciamo che sono **infinite** in $x_0$ se

$$
\lim_{x\to x_0} f(x) = \pm\infty \qquad \text{e} \qquad \lim_{x\to x_0} g(x) = \pm\infty.
$$

### Ordini e parte principale

**Definizione 6.1 (ordine relativo).** Siano $f, g$ entrambe infinitesime (oppure entrambe infinite) per $x \to x_0$. Diciamo che:

- $f$ è un infinitesimo di **ordine superiore** rispetto a $g$ se $f, g$ sono infinitesime per $x\to x_0$ e $\displaystyle \lim_{x\to x_0} \frac{f(x)}{g(x)} = 0$; equivalentemente, $g$ è di **ordine inferiore** rispetto a $f$;
- $f$ è un infinito di **ordine inferiore** rispetto a $g$ se $f, g$ sono infinite per $x\to x_0$ e $\displaystyle \lim_{x\to x_0} \frac{f(x)}{g(x)} = 0$; equivalentemente, $g$ è di **ordine superiore** rispetto a $f$;
- $f$ e $g$ hanno lo **stesso ordine** se $\displaystyle \lim_{x\to x_0} \frac{f(x)}{g(x)} = l \in \mathbb{R} \setminus \{0\}$;
- in particolare, se $l = 1$, diciamo che $f$ e $g$ sono **asintoticamente equivalenti** e scriviamo $f \sim g$ per $x \to x_0$;
- se il rapporto $f/g$ tende a $\pm\infty$, allora equivalentemente $g/f \to 0$ e le due funzioni restano confrontabili, con $g$ di ordine inferiore o superiore rispetto a $f$ secondo i casi appena descritti; soltanto se né $f/g$ né $g/f$ ammettono limite, $f$ e $g$ si dicono **non confrontabili**.

Il caso in cui il rapporto tende a $0$ si codifica con il **simbolo di Landau** "o piccolo": scriviamo

$$

f = o(g) \qquad x \to x_0
$$

e leggiamo "$f$ è o-piccolo di $g$ per $x$ che tende a $x_0$", per indicare che $f$ è trascurabile rispetto a $g$, cioè $\displaystyle \lim_{x\to x_0} \frac{f(x)}{g(x)} = 0$.

:::formula{id="6.9" label="Definizione di o-piccolo"}
$$
f = o(g), \ x\to x_0 \quad \Longleftrightarrow \quad \lim_{x\to x_0} \frac{f(x)}{g(x)} = 0
$$
:::

**Esempio 6.3.** Siano $p(x) = x^2$ e $q(x) = x^{10}$ per $x \to 0$. Entrambe tendono a $0$, dunque sono infinitesime. Calcoliamo

$$
\lim_{x\to 0} \frac{q(x)}{p(x)} = \lim_{x\to 0} \frac{x^{10}}{x^2} = \lim_{x\to 0} x^8 = 0.
$$

"Vince" il denominatore $p(x)$: la funzione $q(x) = x^{10}$ tende a $0$ più velocemente, quindi è un infinitesimo di ordine superiore rispetto a $p(x)$, e scriviamo $q(x) = o(p(x))$ per $x \to 0$. Per $x \to +\infty$, invece, le stesse due funzioni sono infinite e la gerarchia si inverte: $\displaystyle \lim_{x\to+\infty}\frac{p(x)}{q(x)} = \lim_{x\to+\infty}\frac{1}{x^8} = 0$, quindi $p(x) = o(q(x))$, cioè $x^2$ è un infinito di ordine inferiore rispetto a $x^{10}$.

:::image{src="assets/30e1b09e-confronto-infinitesimi.svg" alt="Grafici di x^2 e x^10 vicino a zero, con x^10 che si avvicina a zero più rapidamente" caption="Fig. 6.2 — Confronto tra gli infinitesimi x² e x¹⁰ per x→0: x¹⁰ si annulla più rapidamente, quindi x¹⁰ = o(x²)."}
:::

Per dare un significato *numerico* preciso all'ordine di infinitesimo o di infinito di una funzione, occorre fissare un riferimento comune: l'**infinito o infinitesimo campione**, indicato con $\varphi(x)$, che si scelgono così:

- se $x_0$ è un punto finito, il campione con segno $\varphi(x) = x - x_0$ (e, come infinito campione, $\varphi(x) = \dfrac{1}{x-x_0}$) è utilizzabile quando la potenza $\varphi(x)^\alpha$ resta definita per entrambi i segni che $x - x_0$ può assumere, cioè tipicamente quando $\alpha$ è un numero intero; se invece occorre poter scegliere un qualunque esponente reale $\alpha$, bisogna usare il campione positivo $\varphi(x) = |x-x_0|$ (risp. $\varphi(x) = \dfrac{1}{|x-x_0|}$), sempre definito qualunque sia $\alpha$;
- se $x_0 = +\infty$, $\varphi(x) = \dfrac{1}{x}$ come infinitesimo campione, $\varphi(x) = x$ come infinito campione: qui $x$ è positivo in un intorno di $+\infty$, dunque non c'è alcuna ambiguità di segno;
- se $x_0 = 0$, il campione con segno $\varphi(x) = x$ (e $\varphi(x) = \dfrac{1}{x}$ come infinito campione) è utilizzabile quando $\varphi(x)^\alpha$ è definita anche per valori negativi di $x$, cioè tipicamente quando $\alpha$ è intero; se invece $\alpha$ deve poter essere un qualunque esponente reale, si usa il campione positivo $\varphi(x) = |x|$ (risp. $\varphi(x) = \dfrac{1}{|x|}$).

In sintesi, il campione positivo $|x-x_0|$ (o $|x|$) è sempre utilizzabile, qualunque sia l'esponente reale $\alpha$ scelto, mentre il campione con segno $x-x_0$ (o $x$) si può usare soltanto quando la potenza $\varphi^\alpha$ resta ben definita su entrambi i lati di $x_0$. Non è invece richiesto che il campione abbia lo stesso segno di $f$: nella definizione di ordine e parte principale il coefficiente $l$ può essere negativo, l'unica condizione è che sia diverso da zero.

**Definizione 6.2 (ordine e parte principale).** Sia $f$ infinitesima (o infinita) per $x \to c$, e sia $\varphi$ l'infinitesimo (o infinito) campione in $c$. Se esiste $\alpha > 0$ tale che

$$
\lim_{x\to c} \frac{f(x)}{\varphi(x)^\alpha} = l \in \mathbb{R}\setminus\{0\},
$$

allora $\alpha$ si dice **ordine** di $f$ rispetto a $\varphi$ in $c$, e la funzione

$$
p(x) = l\,\varphi(x)^\alpha
$$

si dice **parte principale** di $f$ in $c$ rispetto a $\varphi$. Per costruzione $f \sim p$ per $x \to c$, cioè in un intorno sufficientemente piccolo di $c$ la parte principale descrive il comportamento di $f$ con la stessa precisione di $f$ stessa.

:::formula{id="6.10" label="Ordine e parte principale rispetto al campione"}
$$
\lim_{x\to c} \frac{f(x)}{\varphi(x)^\alpha} = l \in \mathbb{R}\setminus\{0\}
\quad \Longrightarrow \quad
f(x) \sim l\,\varphi(x)^\alpha, \ x \to c
$$
:::

In pratica, per determinare ordine e parte principale di $f$ si parte proprio da questo limite e si cerca il valore di $\alpha$ che lo rende finito e non nullo; una volta trovato $\alpha$, la parte principale si scrive esplicitamente sostituendo $l$ e $\varphi^\alpha$ nella definizione.

**Esempio 6.4.** Determiniamo ordine e parte principale di $f(x) = \sin x$ per $x \to 0$. L'infinitesimo campione per $x_0 = 0$ è $\varphi(x) = x$. Usando il limite notevole fondamentale $\lim_{x\to 0} \frac{\sin x}{x} = 1$, prendiamo $\alpha = 1$:

$$
\lim_{x\to 0} \frac{\sin x}{x} = 1 \neq 0,
$$

quindi $\sin x$ ha ordine $1$ rispetto a $x$, con parte principale $p(x) = x$, cioè $\sin x \sim x$ per $x \to 0$.

**Esempio 6.5.** Determiniamo ordine e parte principale di $f(x) = 1 - \cos x$ per $x \to 0$. Proviamo con $\alpha = 2$, usando il limite notevole

$$

\lim_{x\to 0} \frac{1-\cos x}{x^2} = \frac{1}{2} \neq 0,
$$

quindi $1-\cos x$ ha ordine $2$ rispetto a $x$, con parte principale $p(x) = \dfrac{1}{2}x^2$, cioè $1 - \cos x \sim \dfrac{1}{2}x^2$ per $x \to 0$.

**Errore tipico 6.1.** Molti studenti scrivono $f = o(g)$ e $g = o(f)$ indifferentemente, confondendo la direzione del simbolo. Ricorda che $f = o(g)$ significa che $f$ è *trascurabile* rispetto a $g$, cioè nel rapporto $\frac{f}{g}$ il numeratore sparisce: il termine "piccolo" si riferisce a $f$, che scompare rispetto a $g$. Un secondo errore frequente è usare il campione con segno $\varphi(x) = x - x_0$ (o $\varphi(x) = x$) anche quando l'esponente $\alpha$ scelto non è intero: in tal caso $\varphi(x)^\alpha$ può semplicemente non essere definita per i valori di $\varphi$ negativi, e il limite del rapporto perde significato a monte, indipendentemente dal segno di $f$. In questi casi occorre passare al campione positivo $|x-x_0|$ (o $|x|$), che resta definito per qualunque esponente reale.

### Gerarchie degli infiniti

Quando $x \to +\infty$ (o $n \to +\infty$ per le successioni), le funzioni elementari crescono a velocità molto diverse tra loro. Si tratta di infiniti non equivalenti, e un confronto diretto tramite gli esponenti rispetto all'infinito campione $\varphi(x) = x$ non è sempre immediato perché, ad esempio, $\log x$ non è una potenza di $x$. Vale però la seguente gerarchia, che va imparata a memoria perché è uno degli strumenti più usati nel calcolo dei limiti, enunciata per le successioni $n \to +\infty$, dove il fattoriale $n!$ è definito per $n$ intero:

$$
(\log_a n)^p \ll n^q \ll c^n \ll n! \ll n^n, \qquad a>1,\ p>0,\ q>0,\ c>1,
$$

dove il simbolo $\ll$ significa che il termine a sinistra è di ordine (strettamente) inferiore rispetto a quello a destra, cioè che il rapporto tra il termine più piccolo e quello più grande tende a $0$. La stessa gerarchia, con le stesse ipotesi su $a, p, q, c$, vale anche per $x \to +\infty$ con $x$ reale, purché si sostituisca il fattoriale con la sua estensione ai numeri reali tramite la funzione Gamma di Euler, $\Gamma(x+1)$, che coincide con $x!$ quando $x$ è un intero non negativo:

$$
(\log_a x)^p \ll x^q \ll c^x \ll \Gamma(x+1) \ll x^x.
$$

:::formula{id="6.11" label="Gerarchia degli infiniti"}
$$

(\log_a n)^p \ll n^q \ll c^n \ll n! \ll n^n, \qquad a>1,\ p>0,\ q>0,\ c>1
$$
:::

In termini di simboli di Landau, la gerarchia si legge, per esempio, come $(\log x)^{100} = o(x^{0{,}01})$ oppure $x^{1000} = o(2^x)$: una qualunque potenza del logaritmo è sempre trascurabile rispetto a una qualunque potenza positiva di $x$ (per quanto piccolo sia l'esponente), ogni potenza di $x$ è trascurabile rispetto a ogni esponenziale $c^x$ con base $c>1$ (per quanto grande sia l'esponente), e così via salendo nella catena fino al fattoriale e alla funzione $x^x$. Questa gerarchia resta valida anche sommando più termini dello stesso "livello", purché i termini dominanti non si cancellino a vicenda: ad esempio $x^3 + x^2$ ha ancora ordine inferiore rispetto a $2^x$. Per i prodotti, invece, l'affermazione non è in generale corretta, e la funzione ottenuta va confrontata di nuovo con gli altri livelli della gerarchia: ad esempio $(n!)^2$ cresce più rapidamente di $n^n$, pur essendo $n!$ di ordine inferiore a $n^n$, quindi moltiplicare due termini del livello fattoriale può far "salire" la funzione oltre il livello successivo della gerarchia.

**Esempio 6.6.** Studiamo $\displaystyle\lim_{x\to+\infty} \frac{e^x + x}{e^{2x} + \log x}$. Confrontando i singoli addendi con la gerarchia degli infiniti, osserviamo che

$$
\lim_{x\to+\infty} \frac{x}{e^x} = 0 \implies x = o(e^x), \qquad
\lim_{x\to+\infty} \frac{\log x}{e^{2x}} = 0 \implies \log x = o(e^{2x}),
$$

quindi al numeratore il termine dominante è $e^x$ e al denominatore è $e^{2x}$. Anticipando il principio di eliminazione dei termini trascurabili, che verrà formalizzato nella [prossima sezione](ref:chapter/6#p4), possiamo già intuire che

$$
\lim_{x\to+\infty} \frac{e^x + x}{e^{2x} + \log x} = \lim_{x\to+\infty} \frac{e^x}{e^{2x}} = \lim_{x\to+\infty} \frac{1}{e^x} = 0.
$$

Questo esempio mostra perché conoscere bene gli ordini di infinito (e la gerarchia che li confronta) è così importante negli esercizi d'esame: individuare rapidamente la parte principale di numeratore e denominatore permette di trasformare un limite apparentemente complicato in uno immediato.

**Errore tipico 6.2.** Un errore comune è applicare la gerarchia degli infiniti anche a fattori con segno variabile senza verificare le ipotesi, oppure confrontare direttamente $x^q$ con $c^x$ senza controllare che $c > 1$: se $0 < c < 1$, infatti, $c^x$ è infinitesimo (non infinito) per $x \to +\infty$, e il confronto non ha senso nei termini della gerarchia sopra scritta. È bene inoltre ricordare che la gerarchia riguarda il comportamento per $x \to +\infty$: per $x \to 0^+$ il logaritmo $\log x$ tende a $-\infty$ più lentamente di qualunque potenza negativa di $x$, e le relazioni di ordine vanno ridiscusse separatamente.

## p4 | Principio di sostituzione e calcolo dei limiti

Nella sezione precedente abbiamo imparato a confrontare infiniti e infinitesimi tramite gli ordini, la parte principale e i simboli di Landau $o(\cdot)$ e $\sim$ (si veda [Infiniti e infinitesimi](ref:chapter/6#p3)). Questi strumenti diventano davvero utili quando li trasformiamo in una tecnica di calcolo: il **principio di eliminazione dei termini trascurabili**, che permette di semplificare un limite scartando le parti che non influenzano il risultato finale. Si tratta però di uno strumento delicato: applicato senza attenzione, in particolare dentro una somma o una differenza, produce alcuni degli errori più frequenti nelle prove scritte.

### Il principio di eliminazione dei termini trascurabili

**Teorema 6.1 (Principio di eliminazione dei termini trascurabili, P.E.T.T.)**
Siano $f, g : A \to \mathbb{R}$ e $h_1, h_2 : A \to \mathbb{R}$, con $A \subseteq \mathbb{R}$, e sia $x_0$ un punto di accumulazione di $A$ (eventualmente $x_0 = \pm\infty$). Supponiamo che $f(x) \neq 0$ e $g(x) \neq 0$ per ogni $x \in A$ sufficientemente vicino a $x_0$, escluso $x_0$. Se $h_1(x) = o(f(x))$ e $h_2(x) = o(g(x))$ per $x \to x_0$, allora

:::formula{id="6.12" label="Principio di eliminazione dei termini trascurabili"}
$$\lim_{x\to x_0} \frac{f(x) + h_1(x)}{g(x) + h_2(x)} = \lim_{x\to x_0} \frac{f(x)}{g(x)}$$
:::

purché il secondo membro esista in $\mathbb{R}^*$.

L'idea geometrica è semplice: raccogliendo $f(x)$ al numeratore e $g(x)$ al denominatore si ottiene

$$\frac{f(x)\left(1 + \dfrac{h_1(x)}{f(x)}\right)}{g(x)\left(1 + \dfrac{h_2(x)}{g(x)}\right)},$$

e per definizione di $o$-piccolo (si veda {{formula:6.9}}) i due rapporti $\frac{h_1(x)}{f(x)}$ e $\frac{h_2(x)}{g(x)}$ tendono a $0$ per $x \to x_0$; i due fattori tra parentesi tendono quindi a $1$ e non alterano il limite del rapporto $\frac{f(x)}{g(x)}$.

In pratica il principio dice che, in un rapporto, **ogni termine trascurabile rispetto al termine dominante (al numeratore come al denominatore) può essere soppresso**, perché non influisce sul valore del limite. Quando numeratore o denominatore sono una somma di più addendi, il termine dominante va individuato confrontando direttamente gli addendi tra loro, per esempio tramite la gerarchia degli infiniti (si veda {{formula:6.11}}). Si tratta di una nozione distinta dalla parte principale $l\varphi^\alpha$ rispetto a un campione di potenza introdotta in {{formula:6.10}}: quest'ultima confronta un'unica funzione con l'infinito o infinitesimo campione $\varphi$, mentre il termine dominante di una somma può non avere affatto la forma $l\varphi^\alpha$ (per esempio $e^x$ non è della forma $l\varphi^\alpha$ rispetto al campione $\varphi(x) = x$).

### Un esempio completo

Calcoliamo

$$\lim_{x\to +\infty} \frac{3x^5 + \sin x}{2x^7 - \log x}.$$

Il primo passo è individuare, al numeratore e al denominatore, quale termine è trascurabile rispetto all'altro per $x \to +\infty$. Usando la gerarchia degli infiniti (si veda {{formula:6.11}}) sappiamo che ogni potenza domina il logaritmo e che il seno, essendo una funzione limitata, è trascurabile rispetto a qualunque potenza positiva di $x$; verifichiamolo esplicitamente con i limiti di confronto:

$$\lim_{x\to +\infty} \frac{\sin x}{x^5} = 0 \implies \sin x = o(x^5), \qquad \lim_{x\to +\infty} \frac{\log x}{x^7} = 0 \implies \log x = o(x^7).$$

Possiamo allora riscrivere il limite come

$$\lim_{x\to +\infty} \frac{3x^5 + o(x^5)}{2x^7 + o(x^7)} = \lim_{x\to +\infty} \frac{3x^5}{2x^7} = \lim_{x\to +\infty} \frac{3}{2x^2} = 0.$$

Il principio di eliminazione dei termini trascurabili ha permesso di passare da una forma indeterminata $\frac{\infty}{\infty}$ a un rapporto di potenze della stessa funzione campione, immediato da calcolare.

### Errore tipico: sostituire gli asintotici in una somma

Il principio appena visto vale per **rapporti** (e, come conseguenza, per prodotti e quozienti), ma **non si estende automaticamente a una somma o a una differenza che si trovi isolatamente** al numeratore o al denominatore, quando i termini che la compongono tendono a cancellarsi. Questo è l'errore più comune nell'uso degli asintotici.

**Errore tipico 6.3.** Si vuole calcolare

$$\lim_{x\to 0} \frac{\sin x - x}{x^3}.$$

Uno studente, ricordando che $\sin x \sim x$ per $x \to 0$ (si veda [Limiti notevoli](ref:chapter/6#p2)), è tentato di sostituire $\sin x$ con $x$ direttamente nella differenza:

$$\lim_{x\to 0} \frac{\sin x - x}{x^3} \;\overset{\text{sbagliato}}{=}\; \lim_{x\to 0} \frac{x - x}{x^3} = \lim_{x\to 0} \frac{0}{x^3} = 0.$$

Il risultato corretto, ottenuto con lo sviluppo di Taylor del seno (si veda [Polinomio e formula di Taylor](ref:chapter/8#p2)), è invece $-\frac{1}{6}$, non $0$. L'errore nasce dal fatto che la relazione $\sin x \sim x$ significa soltanto

$$\sin x = x + o(x),$$

e quando si sostituisce in una differenza come $\sin x - x$ il termine principale $x$ **si cancella con se stesso**, lasciando scoperto esattamente il resto $o(x)$ che avevamo trascurato:

$$\sin x - x = \big(x + o(x)\big) - x = o(x).$$

Il limite diventa quindi $\lim_{x\to 0} \frac{o(x)}{x^3}$, un'espressione che **non è determinata** finché non si conosce esattamente il resto: il simbolo $o(x)$ nasconde infiniti comportamenti diversi, e in questo caso specifico il resto vale $-\frac{x^3}{6} + o(x^3)$, da cui il vero limite $-\frac{1}{6}$.

**Regola pratica.** La condizione corretta che governa la sostituzione di un termine con il suo asintotico in una somma algebrica è quantitativa, non un semplice divieto legato all'apparenza della cancellazione. Se $f(x) \sim f_1(x)$ per $x \to x_0$, si ha

$$f(x) + g(x) \sim f_1(x) + g(x) \qquad (x \to x_0)$$

quando $f(x) - f_1(x) = o\big(f_1(x) + g(x)\big)$ per $x \to x_0$, con $f_1(x) + g(x)$ non identicamente nullo in un intorno bucato di $x_0$. In altre parole, la sostituzione è lecita se l'errore commesso rimpiazzando $f$ con la sua parte principale $f_1$ resta trascurabile rispetto a ciò che sopravvive nella somma, anche quando $f_1$ e $g$ sembrano a prima vista elidersi.

Per esempio, per $x \to 0^+$ poniamo $f(x) = x + x^2$, $f_1(x) = x$ (così che $f \sim f_1$, dato che $f(x) - f_1(x) = x^2 = o(x)$) e $g(x) = -x + x^{3/2}$. I termini $x$ di $f_1$ e $g$ si cancellano, eppure

$$f(x) + g(x) = x^2 + x^{3/2} \sim x^{3/2}, \qquad f_1(x) + g(x) = x^{3/2},$$

quindi $f + g \sim f_1 + g \sim x^{3/2}$: la sostituzione è lecita perché l'errore $x^2$ è trascurabile rispetto alla somma rimasta $x^{3/2}$, nonostante la cancellazione apparente del termine $x$.

La cancellazione tra il termine sostituito e un altro addendo della somma è dunque un **segnale** che impone di verificare esplicitamente la condizione $f - f_1 = o(f_1 + g)$, non un divieto assoluto di sostituzione. Nell'esempio di $\sin x - x$ visto sopra la verifica fallisce: qui $g(x) = -x$, da cui $f_1(x) + g(x) = x - x = 0$ identicamente, e la condizione richiede proprio quel confronto con un resto esatto che il solo simbolo $\sim$ non fornisce.

### Quando la sostituzione è lecita

Riassumiamo le situazioni in cui il principio di sostituzione degli asintotici funziona senza pericoli, e quelle in cui richiede cautela.

- **Prodotti e quozienti.** Se $f \sim f_1$ e $g \sim g_1$ per $x \to x_0$, allora $f \cdot g \sim f_1 \cdot g_1$ e, se $g, g_1 \neq 0$ in un intorno di $x_0$, $\dfrac{f}{g} \sim \dfrac{f_1}{g_1}$. In un prodotto o in un quoziente ogni fattore può quindi essere sostituito dalla propria parte principale senza rischi, perché non vi è alcuna cancellazione tra fattori distinti.
- **Somme in cui un termine domina.** Se $f(x) = f_1(x) + o(f_1(x))$ e $f_1$ non si cancella con nessun altro addendo del limite, la sostituzione $f \rightsquigarrow f_1$ è corretta: è esattamente il contenuto del {{formula:6.12}} applicato a numeratore e denominatore di un rapporto.
- **Somme o differenze di termini dello stesso ordine.** Quando due o più addendi hanno la stessa parte principale e vengono sommati con segno opposto (come $\sin x - x$, oppure $e^x - 1 - x$), la sostituzione con il solo termine principale produce una cancellazione fittizia e un risultato errato o un'indeterminazione mascherata da $0$, salvo verificare esplicitamente la condizione quantitativa $f - f_1 = o(f_1 + g)$ vista sopra. In questi casi occorre usare uno sviluppo più fine, tipicamente uno sviluppo di Taylor con resto di Peano, per conoscere il termine successivo che sopravvive alla cancellazione.
- **Funzioni composte.** La sostituzione di un asintotico dentro l'argomento di un'altra funzione non è garantita dal solo teorema sul limite di funzione composta, che assicura l'esistenza del limite della composta ma non l'equivalenza asintotica di due composte diverse; occorre invece verificarla esplicitamente tramite il rapporto delle composte, sfruttando le proprietà note della funzione esterna. Per esempio, per mostrare che $\log(1 + \sin x) \sim \log(1+x)$ per $x \to 0$ scriviamo

$$\frac{\log(1+\sin x)}{\log(1+x)} = \frac{\log(1+\sin x)}{\sin x}\cdot\frac{\sin x}{x}\cdot\frac{x}{\log(1+x)}.$$

Per $x \to 0$ il primo fattore tende a $1$ per il limite notevole del logaritmo ({{formula:6.3}}), poiché $\sin x \to 0$; il secondo fattore tende a $1$ per il limite notevole del seno ({{formula:6.6}}); il terzo fattore tende a $1$ perché è il reciproco dello stesso limite notevole del logaritmo. Il prodotto tende quindi a $1$, il che dimostra l'equivalenza asintotica cercata usando esplicitamente le proprietà della funzione esterna $\log(1+t)$ vicino a $t=0$, e non un generico argomento di composizione (si veda anche [Teoremi sui limiti](ref:chapter/4#p4)).

In sintesi, il principio di eliminazione dei termini trascurabili è uno strumento potente per semplificare rapporti di infiniti o infinitesimi, ma la sua applicazione meccanica a somme e differenze, senza verificare la condizione quantitativa $f - f_1 = o(f_1 + g)$, è la causa più frequente di errori nel calcolo dei limiti con gli asintotici. La strategia sicura, quando compaiono differenze di termini dello stesso ordine, è sempre quella di passare a uno sviluppo esplicito più dettagliato (Taylor) prima di sostituire.
