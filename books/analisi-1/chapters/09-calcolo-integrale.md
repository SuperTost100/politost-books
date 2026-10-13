---
chapter: 9
title: Calcolo integrale
---

## p1 | Introduzione

Il calcolo integrale completa il percorso iniziato con lo studio delle derivate, affrontando il problema inverso: data una funzione, ricostruirne una primitiva, e usare questo strumento per misurare aree, accumulare quantità e risolvere problemi in cui serve "sommare" infiniti contributi infinitesimi. Si tratta di uno dei pilastri dell'analisi matematica, con applicazioni dirette in fisica, geometria, probabilità e in tutte le discipline che modellano fenomeni continui.

Per affrontare questo capitolo è necessario avere già familiarità con lo studio di funzione, il calcolo differenziale e in particolare con gli sviluppi di Taylor, poiché molte tecniche di integrazione e dimostrazioni dei teoremi fondamentali si appoggiano su proprietà di continuità, derivabilità e limiti già incontrate in precedenza.

Al termine del capitolo lo studente saprà calcolare primitive di funzioni elementari e razionali, applicando sostituzione, integrazione per parti e decomposizione in fratti semplici. Saprà inoltre costruire rigorosamente l'integrale definito secondo Riemann, riconoscere le classi di funzioni integrabili e utilizzare le proprietà fondamentali dell'integrale, incluso il teorema della media integrale. Infine sarà in grado di collegare il calcolo delle primitive al calcolo di integrali definiti attraverso il teorema fondamentale del calcolo integrale e la formula di Torricelli-Barrow, distinguendo correttamente il calcolo di un'area dal calcolo di un integrale con segno, e derivando funzioni integrali anche con estremi di integrazione variabili e composti.

## p2 | Integrali indefiniti e tecniche di integrazione

### Primitive e integrale indefinito

Sia $I \subseteq \mathbb{R}$ un intervallo e sia $f : I \to \mathbb{R}$. Una **primitiva** di $f$ è una funzione derivabile $g : I \to \mathbb{R}$ tale che $g'(x) = f(x)$ per ogni $x \in I$.

Non tutte le funzioni ammettono primitiva, ma quando ne esiste una ne esistono infinite, tutte legate tra loro da una costante additiva.

:::formula{id="9.1" label="Insieme delle primitive"}
$$\text{Se } g_1, g_2 : I \to \mathbb{R} \text{ sono derivabili e } g_1' = g_2' \text{ su } I, \text{ allora } \exists c \in \mathbb{R} \text{ tale che } g_1(x) = g_2(x) + c \ \forall x \in I.$$
:::

Questo risultato segue dal teorema di Lagrange: se $h = g_1 - g_2$ ha derivata nulla su un intervallo, allora $h$ è costante su quell'intervallo (si veda il [test di monotonia](ref:chapter/7#p4)). È essenziale che $I$ sia un intervallo: su un insieme sconnesso la costante potrebbe essere diversa su ogni componente.

Di conseguenza, se $g$ è una primitiva di $f$ su $I$, ogni altra primitiva di $f$ si scrive come $g(x) + c$ con $c \in \mathbb{R}$. L'insieme di tutte le primitive di $f$ si chiama **integrale indefinito** di $f$ e si denota $\int f(x)\, dx$.

:::formula{id="9.2" label="Integrale indefinito"}
$$\int f(x)\, dx = F(x) + c, \qquad c \in \mathbb{R}, \quad F'(x) = f(x) \ \text{su } I.$$
:::

**Errore tipico 9.1**: dimenticare il "$+c$" al termine del calcolo. In un integrale indefinito la costante non è un dettaglio stilistico ma parte della risposta: senza di essa si scrive solo una primitiva, non l'intero integrale indefinito.

**Linearità.** Siano $f$ e $g$ dotate di primitiva su $I$, e siano $a,b\in\mathbb{R}$. Scelte primitive $F$ di $f$ e $G$ di $g$, la funzione $aF+bG$ è una primitiva di $af+bg$.

:::formula{id="9.3" label="Linearità dell'integrale indefinito"}
$$\int \bigl(a f(x)+b g(x)\bigr)\,dx=aF(x)+bG(x)+c,\qquad c\in\mathbb{R}.$$
:::

La linearità è lo strumento che permette di spezzare un integrale in pezzi più semplici prima di applicare le formule di base.

Le primitive immediate si ottengono leggendo "al contrario" la tabella delle derivate fondamentali. Le principali sono (su intervalli dove i membri sono definiti):

- $\int 1\, dx = x + c$
- $\int x^\alpha\, dx = \dfrac{x^{\alpha+1}}{\alpha+1} + c$, con $\alpha \ne -1$
- $\int \dfrac{1}{x}\, dx = \log|x| + c$
- $\int e^x\, dx = e^x + c$
- $\int a^x\, dx = \dfrac{a^x}{\log a} + c$, con $a > 0$, $a \ne 1$
- $\int \sin x\, dx = -\cos x + c$
- $\int \cos x\, dx = \sin x + c$
- $\int \dfrac{1}{\cos^2 x}\, dx = \tan x + c$
- $\int \dfrac{1}{\sin^2 x}\, dx = -\cot x + c$
- $\int \dfrac{1}{1+x^2}\, dx = \arctan x + c$
- $\int \dfrac{1}{\sqrt{1-x^2}}\, dx = \arcsin x + c$

:::image{src="assets/a2a8b5f6-famiglia-primitive.svg" alt="Tre curve y = x^3/3 + c parallele verticalmente per c = -1, 0, 1" caption="Fig. 9.1 — Alcune primitive di f(x) = x^2: le curve sono traslate verticalmente l'una dall'altra della costante c."}
:::

### Integrazione per sostituzione e per parti (scegliere la tecnica adatta)

Quando l'integrando non compare direttamente nella tabella delle primitive immediate, occorre ricondurlo a essa tramite una tecnica. Le due tecniche fondamentali sono la sostituzione e l'integrazione per parti; la scelta dipende dalla struttura dell'integrando.

**Teorema 9.1 (integrazione per sostituzione).** Siano $I,J\subseteq\mathbb{R}$ intervalli, $\varphi:I\to\mathbb{R}$ derivabile con $\varphi(I)\subseteq J$, e sia $f:J\to\mathbb{R}$ dotata di primitiva $F$ su $J$. Allora $F\circ\varphi$ è una primitiva di $f(\varphi(x))\varphi'(x)$ su $I$ e

:::formula{id="9.4" label="Integrazione per sostituzione"}
$$\int f(\varphi(x))\, \varphi'(x)\, dx = F(\varphi(x)) + c = \left.\int f(y)\, dy\right|_{y = \varphi(x)}.$$
:::

Si applica quando si riconosce nell'integrando un "blocco" $\varphi(x)$ e, a fattore, (a meno di costanti) la sua derivata $\varphi'(x)$.

**Esempio 9.1.** Calcoliamo $\displaystyle \int \frac{2x}{1+x^2}\,dx$. Poniamo $\varphi(x)=1+x^2$, da cui $\varphi'(x)=2x$: l'integrando è $\dfrac{\varphi'(x)}{\varphi(x)}$, cioè $f(y)=\dfrac{1}{y}$ composta con $y=\varphi(x)$. Poiché $\int \frac{1}{y}\,dy=\log|y|+c$, otteniamo

$$\int \frac{2x}{1+x^2}\,dx=\log(1+x^2)+c.$$

Il valore assoluto si può togliere perché $1+x^2>0$.

**Teorema 9.2 (integrazione per parti).** Siano $f,g:I\to\mathbb{R}$ derivabili su un intervallo $I$. Se $f'g$ è dotata di primitiva su $I$, lo è anche $fg'$ e vale

:::formula{id="9.5" label="Integrazione per parti"}
$$\int f(x)\, g'(x)\, dx = f(x)\, g(x) - \int f'(x)\, g(x)\, dx.$$
:::

Conviene scegliere come $g'$ (il fattore da integrare) la parte più semplice da integrare, e come $f$ (il fattore da derivare) la parte che si semplifica derivando — tipicamente un polinomio.

**Esempio 9.2.** Calcoliamo $\displaystyle \int x e^x\,dx$. Poniamo $f(x)=x$ (si deriva, dando $f'(x)=1$) e $g'(x)=e^x$ (si integra, dando $g(x)=e^x$). Allora

$$\int x e^x\,dx=x e^x-\int e^x\,dx=x e^x-e^x+c=(x-1)e^x+c.$$

Se invece si scegliesse $f(x)=e^x$ e $g'(x)=x$, il nuovo integrale $\int \frac{x^2}{2}e^x\,dx$ sarebbe più complicato di quello iniziale. Conviene scegliere il fattore da derivare in modo che il nuovo integrale sia più semplice.

Un secondo errore frequente è dimenticare il segno meno davanti al nuovo integrale nella formula, oppure applicare per parti a un prodotto in cui nessuno dei due fattori diventa più semplice derivando (segno che probabilmente serve una sostituzione, non l'integrazione per parti). Infine, nel calcolo di $\int e^{ax}\sin(bx)\, dx$ o $\int e^{ax}\cos(bx)\, dx$ occorre applicare per parti due volte e poi risolvere un'equazione nell'integrale incognito, perché il procedimento non termina da solo.

### Funzioni razionali (decomporre in fratti semplici)

Sia $f(x) = \dfrac{N(x)}{D(x)}$ con $N$ e $D$ polinomi, $N$ di grado $n$ e $D$ di grado $m$. Se $n \ge m$ si esegue prima la divisione polinomiale:

:::formula{id="9.6" label="Divisione per funzioni razionali improprie"}
$$\int \frac{N(x)}{D(x)}\, dx = \int Q(x)\, dx + \int \frac{R(x)}{D(x)}\, dx,$$
:::

dove $N(x) = Q(x) D(x) + R(x)$ con $\deg R < \deg D$: $Q$ è il quoziente (un polinomio, integrabile con le formule immediate) e $R$ il resto.

Ci si riduce così sempre al caso $\deg N < \deg D$. A questo punto si fattorizza $D(x)$ in $\mathbb{R}$ come prodotto di fattori lineari $(x-\alpha)$ (eventualmente ripetuti) e fattori quadratici irriducibili $(x^2+px+q)$ con discriminante negativo, e si scompone $\dfrac{R(x)}{D(x)}$ in una somma di **fratti semplici**:

- A ogni fattore lineare semplice $(x-\alpha)$ corrisponde un termine $\dfrac{A}{x-\alpha}$.
- A ogni fattore lineare con molteplicità $k$, cioè $(x-\alpha)^k$, corrisponde la somma $\displaystyle\sum_{j=1}^{k}\frac{A_j}{(x-\alpha)^j}$.
- A ogni fattore quadratico irriducibile $Q(x)=x^2+px+q$ con molteplicità $k$ corrisponde la somma $\displaystyle\sum_{j=1}^{k}\frac{B_jx+C_j}{Q(x)^j}$.

I coefficienti $A, B, C, \dots$ si determinano imponendo che la somma dei fratti semplici, riportata a denominatore comune, coincida con $R(x)$: si uguagliano i coefficienti dei monomi di pari grado (o si sostituiscono valori numerici opportuni di $x$).

Ogni termine con denominatore lineare si integra con le formule

$$\int \frac{A}{x-\alpha}\,dx=A\log|x-\alpha|+c,$$

$$\int \frac{A_j}{(x-\alpha)^j}\,dx=\frac{A_j}{(1-j)(x-\alpha)^{j-1}}+c\qquad(j\geq2).$$

Per i termini quadratici, si pone $Q(x)=x^2+px+q$ e si scrive $B_jx+C_j=\frac{B_j}{2}Q'(x)+C_j-\frac{pB_j}{2}$. La parte con $Q'(x)/Q(x)^j$ dà un logaritmo per $j=1$ e una potenza di $Q(x)$ per $j\geq2$. Per la parte restante, si completa il quadrato ponendo $t=x+\frac p2$ e $d=q-\frac{p^2}{4}>0$. L'integrale di $1/(t^2+d)$ dà un'arcotangente; per le potenze superiori si applica la ricorrenza, valida per $j\geq2$,

$$\int\frac{dt}{(t^2+d)^j}=\frac{t}{2d(j-1)(t^2+d)^{j-1}}+\frac{2j-3}{2d(j-1)}\int\frac{dt}{(t^2+d)^{j-1}}.$$

**Esempio 9.3.** Calcoliamo $\displaystyle\int\frac{3x+5}{x^2-1}\,dx$. Il denominatore si fattorizza come $(x-1)(x+1)$, con due fattori lineari semplici. Cerchiamo quindi $A,B$ tali che

$$\frac{3x+5}{(x-1)(x+1)}=\frac{A}{x-1}+\frac{B}{x+1}.$$

Moltiplicando per $(x-1)(x+1)$ si ottiene $3x+5=A(x+1)+B(x-1)$. Sostituendo $x=1$ si ha $8=2A$, quindi $A=4$. Sostituendo $x=-1$ si ha $2=-2B$, quindi $B=-1$. Su ciascun intervallo che non contiene $-1$ o $1$ risulta

$$\int\frac{3x+5}{x^2-1}\,dx=\int\frac{4}{x-1}\,dx-\int\frac{1}{x+1}\,dx=4\log|x-1|-\log|x+1|+c.$$

L'errore più comune in questa tecnica è dimenticare di controllare che $\deg N < \deg D$ prima di decomporre (altrimenti la decomposizione non è valida), oppure sbagliare la fattorizzazione del denominatore confondendo radici reali distinte con radici multiple o con fattori irriducibili.

Queste tecniche — sostituzione, parti e fratti semplici — sono gli strumenti algebrici su cui si basa il calcolo degli integrali definiti, trattato nella sezione sull'[integrale definito](ref:chapter/9#p3) e nel [teorema fondamentale del calcolo integrale](ref:chapter/9#p4).

## p3 | Integrale definito

L'integrale definito nasce dal problema di misurare l'area della regione di piano compresa tra il grafico di una funzione e l'asse delle ascisse. L'idea costruttiva, dovuta a Riemann, consiste nell'approssimare tale area con somme di aree di rettangoli, cioè con integrali di funzioni elementari che assumono un numero finito di valori: le funzioni a scala.

### Funzioni a scala e loro integrale

**Definizione 9.1 (funzione a scala).** Sia $f: \lbrack a,b\rbrack  \to \mathbb{R}$. Diciamo che $f$ è una **funzione a scala** se esiste una suddivisione $a = a_0 < a_1 < a_2 < \cdots < a_n = b$ e costanti $c_1, \dots, c_n \in \mathbb{R}$ tali che

$$f|_{\rbrack a_{k-1},a_k\lbrack } = c_k, \qquad k = 1, \dots, n.$$

In altre parole, $f$ è costante a tratti su ciascuno degli intervalli della suddivisione (i valori nei punti $a_0, \dots, a_n$ sono irrilevanti per quanto segue).

:::formula{id="9.7" label="Funzione a scala"}
$$f|_{]a_{k-1},a_k[} = c_k, \qquad k = 1,\dots,n, \qquad c_k \in \mathbb{R}$$
:::

Per una funzione a scala l'area con segno sotto il grafico si calcola in modo immediato, come somma delle aree (con segno) dei singoli rettangoli.

**Definizione 9.2 (integrale di una funzione a scala).** Sia $f$ una funzione a scala come sopra. Il suo **integrale definito** è

$$I = c_1(a_1 - a_0) + c_2(a_2-a_1) + \cdots + c_n(a_n - a_{n-1}).$$

Si può dimostrare che, sebbene la suddivisione di $\lbrack a,b\rbrack $ che rende $f$ a scala non sia unica, il valore di $I$ non dipende dalla suddivisione scelta.

:::formula{id="9.8" label="Integrale di una funzione a scala"}
$$I = c_1(a_1-a_0) + c_2(a_2-a_1) + \cdots + c_n(a_n - a_{n-1})$$
:::

Una condizione necessaria perché una funzione (non solo a scala) possa ammettere un integrale definito è che essa sia limitata su $\lbrack a,b\rbrack $; le funzioni a scala sono sempre integrabili secondo Riemann e il loro integrale coincide con quello appena definito.

### La definizione di integrale di Riemann

Per una funzione $f: \lbrack a,b\rbrack  \to \mathbb{R}$ limitata ma non necessariamente a scala, l'idea è di approssimarla dall'esterno e dall'interno con funzioni a scala e di far coincidere le due stime. Si introducono le due classi

$$\varphi_f^+ = \{ f_s^+ : \lbrack a,b\rbrack  \to \mathbb{R} \text{ funzione a scala tale che } f_s^+(x) \geq f(x) \ \ \forall x \in \lbrack a,b\rbrack  \},$$

$$\varphi_f^- = \{ f_s^- : \lbrack a,b\rbrack  \to \mathbb{R} \text{ funzione a scala tale che } f_s^-(x) \leq f(x) \ \ \forall x \in \lbrack a,b\rbrack  \},$$

cioè l'insieme delle funzioni a scala che stanno sopra $f$ e quello delle funzioni a scala che stanno sotto $f$.

Poiché $f$ è limitata, l'insieme $A$ degli integrali $\int_a^b f_s^-$ al variare di $f_s^- \in \varphi_f^-$ è superiormente limitato (da un qualunque integrale di una funzione a scala superiore), quindi ammette estremo superiore; analogamente l'insieme $B$ degli integrali $\int_a^b f_s^+$ al variare di $f_s^+ \in \varphi_f^+$ è inferiormente limitato e ammette estremo inferiore. Vale sempre $\sup A \leq \inf B$.

**Definizione 9.3 (funzione integrabile secondo Riemann).** Una funzione $f : \lbrack a,b\rbrack  \to \mathbb{R}$ limitata si dice **integrabile secondo Riemann** su $\lbrack a,b\rbrack $ se e solo se

$$\sup A = \inf B,$$

dove $A$ e $B$ sono gli insiemi sopra definiti. In tal caso il valore comune si chiama **integrale definito** di $f$ su $\lbrack a,b\rbrack $ e si indica con $\int_a^b f(x)\, dx$. L'insieme delle funzioni integrabili su $\lbrack a,b\rbrack $ si denota $\mathcal{R}(\lbrack a,b\rbrack )$.

:::formula{id="9.9" label="Integrale di Riemann"}
$$f \in \mathcal{R}([a,b]) \iff \sup_{f_s^- \in \varphi_f^-} \int_a^b f_s^- = \inf_{f_s^+ \in \varphi_f^+} \int_a^b f_s^+ =: \int_a^b f(x)\,dx$$
:::

Una formulazione equivalente, spesso più maneggevole nelle dimostrazioni, è la seguente.

**Proposizione 9.1 (criterio di integrabilità).** Sia $f: \lbrack a,b\rbrack  \to \mathbb{R}$ limitata. Allora $f$ è integrabile su $\lbrack a,b\rbrack $ se e solo se

$$\forall \varepsilon > 0 \ \ \exists f_s^+ \in \varphi_f^+, \ f_s^- \in \varphi_f^- \ \text{tali che} \ \int_a^b f_s^+(x)\,dx - \int_a^b f_s^-(x)\,dx < \varepsilon.$$

Intuitivamente, $f$ è integrabile quando è possibile stringere arbitrariamente la "morsa" tra una funzione a scala che la approssima dall'alto e una che la approssima dal basso.

:::formula{id="9.10" label="Criterio di integrabilità"}
$$\forall \varepsilon > 0 \ \exists f_s^+ \in \varphi_f^+, f_s^- \in \varphi_f^- : \int_a^b f_s^+(x)\,dx - \int_a^b f_s^-(x)\,dx < \varepsilon$$
:::

Quando $f(x) \geq 0$ su $\lbrack a,b\rbrack $ ed è integrabile, il numero $\int_a^b f(x)\,dx$ rappresenta esattamente l'area della regione di piano compresa tra il grafico di $f$, l'asse $x$ e le rette $x=a$, $x=b$. Se $f$ non ha segno costante, l'area della regione compresa tra grafico e asse $x$ è invece $\int_a^b |f(x)|\,dx$, mentre l'integrale $\int_a^b f(x)\,dx$ computa le aree con segno, sottraendo le parti in cui $f$ è negativa.

:::image{src="assets/21b3cae7-integrale-funzioni-a-scala.svg" alt="Funzione compresa tra una funzione a scala inferiore e una superiore" caption="Fig. 9.2 — Il grafico di f è compreso tra una funzione a scala inferiore (stima per difetto) e una superiore (stima per eccesso); l'integrale di Riemann è il valore comune a cui convergono entrambe le stime"}
:::

### Classi di funzioni integrabili

Verificare direttamente la definizione per ogni funzione sarebbe impraticabile; fortunatamente la maggior parte delle funzioni che si incontrano nel calcolo sono integrabili.

**Teorema 9.3.** Sono integrabili secondo Riemann su $\lbrack a,b\rbrack $:

- le funzioni continue su $\lbrack a,b\rbrack $;
- le funzioni continue a tratti su $\lbrack a,b\rbrack $, cioè le funzioni con un numero finito di punti di discontinuità di prima specie;
- le funzioni monotone su $\lbrack a,b\rbrack $ (anche se non continue: si pensi alla funzione [parte intera](ref:chapter/3#p4));
- le funzioni monotone a tratti su $\lbrack a,b\rbrack $.

In particolare le funzioni che compaiono nello [studio di funzione](ref:chapter/8#p4), essendo tipicamente continue a tratti su intervalli chiusi e limitati, sono sempre integrabili.

**Errore tipico 9.2.** Non ogni funzione limitata è integrabile: esistono funzioni (patologiche, non trattate in questo corso) per cui $\sup A < \inf B$. L'ipotesi di limitatezza è necessaria ma non sufficiente; ciò che garantisce l'integrabilità nella pratica è la continuità (a tratti) o la monotonia.

### Proprietà dell'integrale definito

Supponiamo ora $f, g: \lbrack a,b\rbrack  \to \mathbb{R}$ integrabili e $\alpha, \beta \in \mathbb{R}$. Valgono le seguenti proprietà, che permettono di calcolare integrali di combinazioni di funzioni senza tornare alla definizione.

1. **Linearità:**

$$\int_a^b \big(\alpha f(x) + \beta g(x)\big)\,dx = \alpha \int_a^b f(x)\,dx + \beta \int_a^b g(x)\,dx.$$

2. **Positività:** se $f(x) \geq 0$ per ogni $x \in \lbrack a,b\rbrack $, allora $\int_a^b f(x)\,dx \geq 0$.
3. **Monotonia:** se $f(x) \leq g(x)$ per ogni $x \in \lbrack a,b\rbrack $, allora $\int_a^b f(x)\,dx \leq \int_a^b g(x)\,dx$.
4. **Modulo:** se $|f|$ è integrabile (cosa che segue automaticamente dall'integrabilità di $f$), allora

$$\left| \int_a^b f(x)\,dx \right| \leq \int_a^b |f(x)|\,dx.$$

5. **Additività rispetto al punto medio:** per ogni $c \in \lbrack a,b\rbrack $,

$$\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx,$$

e, viceversa, se $f$ è integrabile su $\lbrack a,c\rbrack $ e su $\lbrack c,b\rbrack $ separatamente allora è integrabile su $\lbrack a,b\rbrack $. Inoltre se $f$ è integrabile su $\lbrack a,b\rbrack $, la sua restrizione a ogni sottointervallo $\lbrack c,d\rbrack  \subseteq \lbrack a,b\rbrack $ è integrabile.

:::formula{id="9.11" label="Proprietà dell'integrale definito"}
$$\begin{aligned} &\int_a^b (\alpha f + \beta g)\,dx = \alpha \int_a^b f\,dx + \beta \int_a^b g\,dx \\ &\left|\int_a^b f\,dx\right| \leq \int_a^b |f|\,dx \\ &\int_a^b f\,dx = \int_a^c f\,dx + \int_c^b f\,dx \quad \forall c \in [a,b] \end{aligned}$$
:::

Queste proprietà verranno usate sistematicamente nella sezione sul [teorema fondamentale del calcolo integrale](ref:chapter/9#p4) per spezzare il calcolo di integrali su funzioni definite a tratti, ad esempio

$$\int_0^3 f(t)\,dt = \int_0^1 f(t)\,dt + \int_1^3 f(t)\,dt$$

quando $f$ presenta un salto in $t=1$.

### Il teorema della media integrale

Se $f$ è integrabile su $\lbrack a,b\rbrack $, ha senso definire il valore medio che $f$ assume su tale intervallo.

**Definizione 9.4 (media integrale).** Siano $a,b \in \mathbb{R}$ con $a<b$ e sia $f: \lbrack a,b\rbrack  \to \mathbb{R}$ integrabile. Si chiama **media integrale** di $f$ su $\lbrack a,b\rbrack $ il numero

$$m_f(a,b) = \frac{1}{b-a} \int_a^b f(x)\,dx.$$

**Teorema 9.4 (della media integrale).** Siano $a,b \in \mathbb{R}$ con $a<b$ e sia $f: \lbrack a,b\rbrack  \to \mathbb{R}$ limitata e integrabile. Posti $m = \inf_{\lbrack a,b\rbrack } f(x)$ e $M = \sup_{\lbrack a,b\rbrack } f(x)$, vale

$$m \leq \frac{1}{b-a}\int_a^b f(x)\,dx \leq M.$$

Se inoltre $f$ è continua su $\lbrack a,b\rbrack $, allora esiste $c \in \lbrack a,b\rbrack $ tale che

$$f(c) = \frac{1}{b-a} \int_a^b f(x)\,dx,$$

cioè la funzione assume, in qualche punto dell'intervallo, esattamente il proprio valore medio.

:::formula{id="9.12" label="Teorema della media integrale"}
$$m \leq \frac{1}{b-a}\int_a^b f(x)\,dx \leq M, \qquad \exists c \in [a,b] : f(c) = \frac{1}{b-a} \int_a^b f(x)\,dx \ \text{(se $f$ continua)}$$
:::

**Dimostrazione.** Per ogni $x \in \lbrack a,b\rbrack $ vale $m \leq f(x) \leq M$ per definizione di estremo inferiore e superiore. Applicando la proprietà di monotonia dell'integrale (punto 3 sopra) alle funzioni costanti $m$ e $M$ e a $f$ si ottiene

$$\int_a^b m\,dx \leq \int_a^b f(x)\,dx \leq \int_a^b M\,dx,$$

cioè, essendo $m$ e $M$ costanti,

$$m(b-a) \leq \int_a^b f(x)\,dx \leq M(b-a).$$

Dividendo per $b-a > 0$ si ottiene la prima parte della tesi.

Supponiamo ora $f$ continua su $\lbrack a,b\rbrack $. Per il [teorema di Weierstrass](ref:chapter/5#p5), $f$ ammette minimo assoluto $m = f(x_m)$ e massimo assoluto $M = f(x_M)$ in due punti $x_m, x_M \in \lbrack a,b\rbrack $. Il numero

$$\mu := \frac{1}{b-a}\int_a^b f(x)\,dx$$

soddisfa $m \leq \mu \leq M$ per quanto appena dimostrato, cioè $\mu$ è compreso tra i due valori $f(x_m)$ e $f(x_M)$ assunti da $f$. Per il [teorema dei valori intermedi](ref:chapter/5#p5), conseguenza del teorema di esistenza degli zeri applicato alla funzione continua $f(x) - \mu$, $f$ assume ogni valore compreso tra $f(x_m)$ e $f(x_M)$; esiste quindi $c \in \lbrack a,b\rbrack $ tale che $f(c) = \mu$. $\square$

**Esempio 9.4.** Calcoliamo l'integrale $\int_0^2 t^2\,dt$ usando le tecniche di primitive già note (anticipando il risultato del teorema fondamentale del calcolo integrale, dimostrato nella sezione successiva):

$$\int_0^2 t^2\,dt = \left\lbrack  \frac{t^3}{3} \right\rbrack _0^2 = \frac{2^3}{3} - \frac{0^3}{3} = \frac{8}{3}.$$

La media integrale di $f(t) = t^2$ su $\lbrack 0,2\rbrack $ è dunque

$$m_f(0,2) = \frac{1}{2-0}\cdot \frac{8}{3} = \frac{4}{3}.$$

Poiché $f$ è continua, deve esistere $c \in \lbrack 0,2\rbrack $ con $f(c) = 4/3$, cioè $c^2 = 4/3$, da cui $c = 2/\sqrt{3} \approx 1{,}15 \in \lbrack 0,2\rbrack $: il teorema della media integrale è verificato esplicitamente.

**Errore tipico 9.3.** Molti studenti applicano il teorema della media integrale pensando che $c$ sia necessariamente il punto medio $\frac{a+b}{2}$ dell'intervallo: il teorema garantisce solo l'**esistenza** di un punto $c$, senza fornirne in generale il valore esatto né l'unicità. Un altro errore frequente è dimenticare l'ipotesi di continuità nel punto 3 del Teorema 9.4: per una funzione integrabile ma discontinua (ad esempio con un salto), la media integrale può non essere mai effettivamente raggiunta da $f$, pur restando compresa tra $m$ e $M$.

La costruzione tramite funzioni a scala presentata in questa sezione, per quanto rigorosa, non è lo strumento con cui si calcolano in pratica gli integrali definiti: il collegamento tra integrale definito e primitive, che rende il calcolo effettivo, è l'oggetto della prossima sezione sul [teorema fondamentale del calcolo integrale](ref:chapter/9#p4).

## p4 | Teorema fondamentale del calcolo integrale

Nelle sezioni precedenti abbiamo imparato due cose apparentemente distinte: da un lato, nella sezione su [Integrali indefiniti e tecniche di integrazione](ref:chapter/9#p2), a calcolare primitive con metodi algebrici; dall'altro, nella sezione su [Integrale definito](ref:chapter/9#p3), a definire $\int_a^b f(x)\,dx$ come un numero legato all'area sottesa al grafico, tramite le somme a scala. Il teorema fondamentale del calcolo integrale è il risultato che salda queste due costruzioni, mostrando che il calcolo di un integrale definito si riduce, per le funzioni continue, alla semplice ricerca di una primitiva.

### La funzione integrale

Sia $I \subseteq \mathbb{R}$ un intervallo. Diciamo che $f : I \to \mathbb{R}$ è **localmente integrabile** su $I$ se e solo se per ogni $\lbrack a,b\rbrack  \subseteq I$ la restrizione di $f$ a $\lbrack a,b\rbrack $ è integrabile secondo Riemann, cioè appartiene a $\mathcal{R}(\lbrack a,b\rbrack )$. Se $f$ è localmente integrabile su $I$ e $x_0 \in I$ è fissato, si definisce la **funzione integrale** di $f$ (con punto base $x_0$) come

:::formula{id="9.13" label="Funzione integrale"}
$$F(x) = \int_{x_0}^{x} f(t)\,dt, \qquad x \in I$$
:::

dove la variabile $t$ è muta e non va confusa con l'estremo di integrazione $x$, che è la variabile da cui dipende $F$. Se $x < x_0$ l'integrale va inteso in senso orientato, cioè $\int_{x_0}^{x} f(t)\,dt = -\int_x^{x_0} f(t)\,dt$.

**Proposizione 9.2.** Se $f : I \to \mathbb{R}$ è localmente integrabile su $I$, allora la funzione integrale $F(x) = \int_{x_0}^{x} f(t)\,dt$ è continua su $I$.

Questo primo risultato è già significativo: la funzione integrale è sempre almeno continua, anche quando $f$ non lo è (ad esempio se $f$ ha un salto). L'ipotesi di continuità di $f$ entrerà invece in modo essenziale nel teorema seguente, per ottenere la derivabilità di $F$.

### Enunciato e dimostrazione del teorema fondamentale

**Teorema 9.5 (Teorema fondamentale del calcolo integrale).** Sia $f$ una funzione continua su un intervallo $I$, sia $x_0 \in I$ fissato e sia $F$ la funzione integrale

$$F(x) = \int_{x_0}^{x} f(t)\,dt, \qquad x \in I.$$

Allora $F$ è derivabile in ogni punto interno $\bar{x}$ di $I$ e vale

:::formula{id="9.14" label="Teorema fondamentale del calcolo integrale"}
$$F'(\bar{x}) = f(\bar{x}) \qquad \text{per ogni punto interno } \bar{x} \text{ di } I$$
:::

Se $I$ contiene uno dei suoi estremi, in quell'estremo vale la corrispondente derivata unilaterale.

In altre parole, $F$ è una primitiva di $f$ su $I$.

**Dimostrazione.** Fissiamo un punto interno $\bar{x} \in I$ e consideriamo, per $x \ne \bar{x}$, il rapporto incrementale di $F$ in $\bar{x}$:

$$\frac{F(x) - F(\bar{x})}{x - \bar{x}} = \frac{\displaystyle\int_{x_0}^{x} f(t)\,dt - \int_{x_0}^{\bar{x}} f(t)\,dt}{x - \bar{x}} = \frac{1}{x - \bar{x}} \int_{\bar{x}}^{x} f(t)\,dt,$$

Utilizzando l'additività dell'integrale rispetto al punto intermedio $\bar{x}$, il rapporto a destra si tratta distinguendo i due casi. Se $x > \bar{x}$, è la media integrale $m_f(\bar{x},x)$ di $f$ su $\lbrack \bar{x},x\rbrack $. Se $x < \bar{x}$, per l'orientamento dell'integrale si ha

$$\frac{1}{x-\bar{x}}\int_{\bar{x}}^{x} f(t)\,dt = \frac{1}{\bar{x}-x}\int_x^{\bar{x}} f(t)\,dt = m_f(x,\bar{x}),$$

dove $m_f(x,\bar{x})$ è la media integrale di $f$ su $\lbrack x,\bar{x}\rbrack $. In entrambi i casi, per il teorema della media integrale esiste un punto $c$ strettamente compreso tra $x$ e $\bar{x}$ tale che

$$\frac{F(x) - F(\bar{x})}{x - \bar{x}} = f(c), \qquad c \text{ compreso tra } \bar{x} \text{ e } x.$$

Quando $x \to \bar{x}$, il punto $c$ è schiacciato tra $\bar{x}$ e $x$ e quindi $c \to \bar{x}$ per il teorema dei carabinieri. Essendo $f$ continua in $\bar{x}$, si ha allora $f(c) \to f(\bar{x})$. Passando al limite per $x \to \bar{x}$ nell'uguaglianza precedente si ottiene

$$\lim_{x \to \bar{x}} \frac{F(x) - F(\bar{x})}{x - \bar{x}} = f(\bar{x}),$$

che è esattamente la definizione di derivata di $F$ in $\bar{x}$. Dunque $F$ è derivabile in $\bar{x}$ e $F'(\bar{x}) = f(\bar{x})$. Agli eventuali estremi inclusi di $I$, lo stesso argomento con $x$ che tende all'estremo dall'interno fornisce la corrispondente derivata unilaterale. $\square$

**Corollario 9.1.** Ogni funzione continua su un intervallo $I$ ammette una primitiva su $I$: la sua funzione integrale è derivabile nei punti interni di $I$ e ha derivata $f$; agli eventuali estremi inclusi valgono le corrispondenti derivate unilaterali.

Questo corollario risponde a una domanda lasciata aperta nella sezione sugli integrali indefiniti: non tutte le funzioni elementari hanno una primitiva esprimibile tramite funzioni elementari (si pensi a $e^{-x^2}$), ma il teorema fondamentale garantisce che la primitiva esiste comunque, sotto la sola ipotesi di continuità, pur non fornendone sempre un'espressione chiusa.

**Osservazione 9.1.** Se $f$ è soltanto localmente integrabile ma non continua in un punto $\bar{x}$, la dimostrazione precedente non si applica in $\bar{x}$: in generale $F$ resta continua (per la Proposizione 9.2) ma può non essere derivabile proprio nei punti di discontinuità di $f$, tipicamente con un punto angoloso in corrispondenza di un salto.

### Calcolo di integrali definiti: la formula di Torricelli-Barrow

Il teorema fondamentale, unito al fatto che due primitive della stessa funzione su un intervallo differiscono per una costante (risultato già visto nella sezione sugli integrali indefiniti), permette di calcolare un integrale definito senza passare dalla definizione con le somme a scala, non appena si conosca una primitiva qualunque.

**Teorema 9.6 (Torricelli-Barrow).** Sia $f : \lbrack a,b\rbrack  \to \mathbb{R}$ continua e sia $G$ una primitiva di $f$ su $\lbrack a,b\rbrack $, cioè continua su $\lbrack a,b\rbrack $, derivabile nell'intervallo aperto $\rbrack a,b\lbrack $ con $G' = f$ e dotata delle corrispondenti derivate unilaterali agli estremi. Allora

:::formula{id="9.15" label="Formula di Torricelli-Barrow"}
$$\int_{a}^{b} f(t)\,dt = G(b) - G(a) =: \big[G(t)\big]_a^b$$
:::

**Dimostrazione (traccia).** Sia $F(x) = \int_a^x f(t)\,dt$ la funzione integrale con punto base $a$. Per il Teorema 9.5, $F$ è una primitiva di $f$ su $\lbrack a,b\rbrack $, con le derivate unilaterali agli estremi. Essendo $G$ anch'essa una primitiva di $f$, esiste una costante $c \in \mathbb{R}$ tale che $G(x) = F(x) + c$ per ogni $x \in \lbrack a,b\rbrack $. Valutando in $x = a$ si ha $G(a) = F(a) + c = 0 + c$, dunque $c = G(a)$. Valutando in $x = b$ si ottiene $G(b) = F(b) + G(a)$, cioè $F(b) = G(b) - G(a)$, che è la tesi perché $F(b) = \int_a^b f(t)\,dt$. $\square$

Questa formula è lo strumento di calcolo effettivo: tutte le tecniche della sezione sugli integrali indefiniti (sostituzione, parti, fratti semplici) servono proprio a trovare la primitiva $G$ da valutare agli estremi.

**Esempio 9.5.** Calcoliamo $\displaystyle \int_0^2 t^2\,dt$. Una primitiva di $t^2$ è $G(t) = \dfrac{t^3}{3}$. Per la formula di Torricelli-Barrow:

$$\int_0^2 t^2\,dt = \left\lbrack \frac{t^3}{3}\right\rbrack _0^2 = \frac{2^3}{3} - \frac{0^3}{3} = \frac{8}{3}.$$

Se l'estremo di integrazione contiene una funzione composta, conviene applicare prima la sostituzione già studiata per gli integrali indefiniti e ricordarsi di cambiare anche gli estremi, oppure tornare alla variabile originale prima di valutare.

Se $f$ è continua a tratti su $\lbrack a,b\rbrack $ e ha un numero finito di discontinuità, l'integrale si calcola spezzando l'intervallo nei sottointervalli di continuità e sommando i contributi, grazie all'additività dell'integrale rispetto al dominio. Questo metodo di calcolo si applica anche quando $f$ è monotona su ciascuno di un numero finito di sottointervalli e ha un numero finito di discontinuità:

$$\int_0^3 f(t)\,dt = \int_0^1 f(t)\,dt + \int_1^3 f(t)\,dt$$

per esempio se $f$ presenta un salto in $x = 1$. Una funzione monotona è comunque integrabile su ogni intervallo chiuso e limitato contenuto nel suo dominio, anche se può avere infiniti punti di discontinuità.

### Studiare e derivare funzioni integrali

Il teorema fondamentale non serve soltanto a calcolare integrali: permette anche di studiare funzioni definite come $F(x) = \int_{x_0}^{x} f(t)\,dt$ senza bisogno di trovarne un'espressione esplicita, lavorando direttamente con $F' = f$.

**Esempio 9.6.** Studiamo monotonia e punti critici di $F(x) = \int_0^x e^{-t^2}\,dt$, con $x \in \mathbb{R}$. La funzione integranda $f(t) = e^{-t^2}$ è continua su tutto $\mathbb{R}$, quindi $F$ è ben definita, derivabile ovunque e per il teorema fondamentale $F'(x) = e^{-x^2} > 0$ per ogni $x$. Dunque $F$ è strettamente crescente su tutto $\mathbb{R}$, senza punti stazionari; non è necessario conoscere una formula chiusa per $F$ (che infatti non esiste in termini di funzioni elementari) per dedurne il comportamento qualitativo. Si noti inoltre che $F(0) = 0$ e, per simmetria di $f$ pari, $F(-x) = -F(x)$: $F$ è dispari.

Più in generale, sia $J$ un intervallo, sia $f$ continua su $J$, sia $x_0 \in J$ e sia $g$ derivabile sul proprio dominio $D_g$ con $g(D_g) \subseteq J$. Per la funzione

$$H(x) = \int_{x_0}^{g(x)} f(t)\,dt,$$

si applica il teorema fondamentale insieme alla regola di derivazione della funzione composta. Posto $F(y) = \int_{x_0}^y f(t)\,dt$, si ha $H = F \circ g$ e quindi

Nei punti $x$ tali che $g(x)$ è interno a $J$, la regola della catena e il teorema fondamentale danno

$$H'(x) = F'(g(x)) \cdot g'(x) = f(g(x)) \cdot g'(x).$$

Se $g(x)$ è un estremo incluso di $J$, si usa invece la derivata unilaterale di $F$ da quel lato. Quando $g$ è derivabile in $x$, il quoziente incrementale di $F(g(x))$ ha lo stesso limite e la formula finale resta valida.

**Errore tipico 9.4.** Uno sbaglio frequente è dimenticare il fattore $g'(x)$ quando l'estremo di integrazione non è semplicemente $x$ ma una funzione di $x$ (ad esempio $x^2$, $\sin x$, o $1/x$): la derivata della funzione integrale non è $f(g(x))$ ma $f(g(x)) \cdot g'(x)$, esattamente come nella derivata di una funzione composta.

### Integrali definiti come aree

L'interpretazione geometrica dell'integrale definito, già introdotta nella sezione sull'integrale definito, si precisa ora così: se $f \geq 0$ su $\lbrack a,b\rbrack $, l'integrale $\int_a^b f(x)\,dx$ è esattamente l'area della regione di piano compresa tra il grafico di $f$, l'asse delle ascisse e le rette $x = a$, $x = b$.

Se invece $f$ cambia segno su $\lbrack a,b\rbrack $, l'integrale $\int_a^b f(x)\,dx$ rappresenta la somma algebrica delle aree con segno (positive dove $f \geq 0$, negative dove $f \leq 0$), e non coincide in generale con l'area geometrica della regione compresa tra grafico e asse $x$. Quest'ultima si ottiene invece integrando il valore assoluto:

$$\text{Area} = \int_a^b |f(x)|\,dx.$$

:::image{src="assets/ed02552b-area-con-segno-vs-modulo.svg" alt="Grafico di x^3 - x su [-1,1] con le regioni sopra e sotto l'asse evidenziate" caption="Fig. 9.3 — Quando f cambia segno, l'integrale di f e l'integrale di |f| danno risultati diversi: il primo è la somma algebrica delle aree, il secondo è l'area geometrica totale"}
:::

**Errore tipico 9.5.** Calcolare l'area compresa tra il grafico di una funzione che cambia segno e l'asse $x$ integrando direttamente $f$ invece di $|f|$: il risultato è la somma algebrica (positiva meno negativa) e non l'area richiesta. La formula generale è

$$\text{Area} = \int_a^b |f(x)|\,dx.$$

Se $f$ ha un numero finito di cambi di segno, si possono determinare gli zeri che li separano, suddividere l'intervallo in tratti di segno costante e sommare i valori assoluti degli integrali su ciascun tratto:

$$\text{Area} = \left|\int_a^{c_1} f(x)\,dx\right| + \left|\int_{c_1}^{c_2} f(x)\,dx\right| + \cdots,$$

dove $c_1, c_2, \dots$ sono gli zeri di $f$ in $\lbrack a,b\rbrack $ che separano i cambi di segno.

**Esempio 9.7.** Calcoliamo l'area compresa tra il grafico di $f(x) = x^3 - x$, l'asse $x$ e le rette $x = -1$, $x = 1$. Gli zeri di $f$ in $\lbrack -1,1\rbrack $ sono $x = -1, 0, 1$; su $\lbrack -1,0\rbrack $ si ha $f \geq 0$, su $\lbrack 0,1\rbrack $ si ha $f \leq 0$. Una primitiva di $f$ è $G(x) = \dfrac{x^4}{4} - \dfrac{x^2}{2}$. Allora

$$\int_{-1}^{0} f(x)\,dx = G(0) - G(-1) = 0 - \left(\frac{1}{4} - \frac{1}{2}\right) = \frac{1}{4},$$

$$\int_{0}^{1} f(x)\,dx = G(1) - G(0) = \left(\frac{1}{4} - \frac{1}{2}\right) - 0 = -\frac{1}{4}.$$

L'area totale è dunque $\left|\frac{1}{4}\right| + \left|-\frac{1}{4}\right| = \frac{1}{2}$, mentre l'integrale definito (senza modulo) su $\lbrack -1,1\rbrack $ vale $\frac{1}{4} - \frac{1}{4} = 0$, coerentemente con la disparità di $f$.

Questo esempio chiarisce bene la differenza tra integrale definito (valore algebrico, qui nullo per simmetria) e area geometrica (sempre non negativa, qui pari a $\frac{1}{2}$), distinzione fondamentale negli esercizi d'esame sul calcolo di aree.
