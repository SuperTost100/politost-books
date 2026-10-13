---
chapter: 10
title: Integrali impropri
---

## p1 | Introduzione

Molte funzioni che compaiono naturalmente in matematica, fisica ed economia non sono integrabili in senso ordinario: il loro dominio è illimitato, oppure presentano una singolarità in cui la funzione diverge. Pensare all'area sotto una curva che si estende all'infinito, o che ha un "picco" verticale in un punto, costringe a estendere il concetto di integrale tramite un passaggio al limite. Questo è l'oggetto degli integrali impropri, strumento indispensabile per studiare la convergenza di quantità come probabilità continue, energie, o somme infinite di contributi infinitesimi.

Per affrontare questo capitolo occorre avere già familiarità con il calcolo integrale: definizione di integrale definito, primitive, regole di integrazione e proprietà di additività rispetto al dominio, oltre a una buona padronanza dei limiti e degli ordini di infinito e infinitesimo.

Al termine del capitolo lo studente saprà distinguere tra integrali impropri di prima e di seconda specie, calcolarne il valore quando convergono e stabilirne il carattere (convergente, divergente o indeterminato) anche senza calcolare esplicitamente l'integrale, grazie ai criteri del confronto e del confronto asintotico. Saprà inoltre gestire situazioni con più cause di impropria integrabilità, spezzando opportunamente il dominio, e determinare per quali valori di un parametro un integrale converge, un'abilità centrale in molte applicazioni successive, dalle serie agli integrali multipli.

## p2 | Integrali impropri di prima specie

### Motivazione e definizione

Finora l'integrale definito $\int_a^b f(x)\,dx$ è stato definito per funzioni limitate su intervalli chiusi e limitati $\lbrack a,b\rbrack $, rientranti nella classe $\mathcal{R}(\lbrack a,b\rbrack )$ studiata nella sezione su [Integrale definito](ref:chapter/9#p3). In molte applicazioni (calcolo di aree illimitate, serie, probabilità) occorre però integrare su un intervallo illimitato, ad esempio $\lbrack a,+\infty\lbrack $. L'idea è di integrare su un tratto finito $\lbrack a,M\rbrack $ e poi far tendere $M$ a $+\infty$.

Si dice che $f$ è **localmente integrabile** su $\lbrack a,+\infty\lbrack $ se per ogni intervallo $\lbrack c,d\rbrack \subseteq \lbrack a,+\infty\lbrack $ la funzione $f$ è integrabile su $\lbrack c,d\rbrack $ nel senso di Riemann, cioè $f \in \mathcal{R}(\lbrack c,d\rbrack )$ per ogni tale intervallo.

:::formula{id="10.1" label="Integrale improprio di prima specie"}
$$\int_a^{+\infty} f(x)\,dx = \lim_{M\to+\infty} \int_a^M f(x)\,dx$$
:::

L'integrale a secondo membro $\int_a^M f(x)\,dx$ è ben definito per ogni $M>a$, poiché $f$ è integrabile su ogni $\lbrack a,M\rbrack $ per locale integrabilità; il problema è esclusivamente il comportamento del limite per $M\to +\infty$.

Analogamente si definisce l'integrale improprio su $\rbrack -\infty,b\rbrack $:

$$\int_{-\infty}^{b} f(x)\,dx = \lim_{M\to -\infty} \int_M^b f(x)\,dx,$$

e, se $f$ è localmente integrabile su tutto $\mathbb{R}$, l'integrale su $\mathbb{R}$ si definisce spezzando in un punto qualunque $c$:

$$\int_{-\infty}^{+\infty} f(x)\,dx = \int_{-\infty}^{c} f(x)\,dx + \int_{c}^{+\infty} f(x)\,dx,$$

purché entrambi gli integrali a secondo membro convergano (il caso in cui l'intervallo è illimitato in entrambe le direzioni sarà ripreso nella sezione sugli [Integrali multi-impropri e con parametri](ref:chapter/10#p5)).

### Convergenza, divergenza, indeterminazione

Come per i limiti di successioni e funzioni, il valore del limite che definisce l'integrale improprio può comportarsi in tre modi distinti.

Si dice che l'integrale improprio $\int_a^{+\infty} f(x)\,dx$ è:

- **convergente** se il limite $\lim_{M\to+\infty}\int_a^M f(x)\,dx$ esiste finito;
- **divergente** (positivamente o negativamente) se il limite è $+\infty$ o $-\infty$;
- **indeterminato** se il limite non esiste.

Osserviamo subito un fatto che distingue gli integrali impropri dai limiti di successioni qualsiasi: se $f(x)\ge 0$ su $\lbrack a,+\infty\lbrack $ ed è localmente integrabile, l'integrale improprio non può essere indeterminato, ma solo convergente o divergente positivamente. Questo accade perché la funzione integrale $F(M) = \int_a^M f(x)\,dx$ è monotona crescente quando $f\ge 0$ (per l'additività e la positività dell'integrale definito), e una funzione monotona ha sempre limite, finito o infinito, per $M\to +\infty$ (risultato analogo al teorema sulle successioni monotone). Questo fatto sarà la base dei criteri del confronto, trattati nella sezione sui [Criteri di convergenza](ref:chapter/10#p4).

**Esempio 10.1.** Studiamo $\int_1^{+\infty} \frac{1}{x}\,dx$.

$$\int_1^{+\infty} \frac{1}{x}\,dx = \lim_{M\to+\infty} \int_1^M \frac{1}{x}\,dx = \lim_{M\to+\infty} \big(\log M - \log 1\big) = +\infty.$$

L'integrale **diverge**.

**Esempio 10.2.** Studiamo $\int_0^{+\infty} \frac{1}{1+x^2}\,dx$. Una primitiva di $\frac{1}{1+x^2}$ è $\arctan x$, quindi:

$$\int_0^{+\infty} \frac{1}{1+x^2}\,dx = \lim_{M\to+\infty} \big\lbrack \arctan x\big\rbrack _0^M = \lim_{M\to+\infty} \arctan M - \arctan 0 = \frac{\pi}{2} - 0 = \frac{\pi}{2}.$$

L'integrale **converge** al valore $\frac{\pi}{2}$.

**Errore tipico 10.1.** Uno degli errori più frequenti consiste nello scrivere direttamente $\left\lbrack \log x\right\rbrack _1^{+\infty}$ o $\left\lbrack \arctan x\right\rbrack _0^{+\infty}$ sostituendo $+\infty$ come se fosse un numero nella primitiva, senza passare esplicitamente per il limite. Questo procedimento funziona solo come scorciatoia di calcolo quando si è già certi che il limite esista (finito o infinito); in sede di verifica va sempre scritto il limite $\lim_{M\to+\infty}$, perché solo il limite stabilisce rigorosamente se l'integrale converge, diverge o non esiste.

### L'integrale campione $\int 1/x^\alpha$ all'infinito

Il comportamento dell'integrale improprio della potenza $x^{-\alpha}$ all'infinito è il risultato più usato come riferimento per i criteri del confronto, analogamente a quanto accade per le serie numeriche.

Calcoliamo $\int_1^{+\infty} \frac{1}{x^\alpha}\,dx$ al variare di $\alpha \in \mathbb{R}$. Per $\alpha \ne 1$:

$$\int_1^{+\infty} \frac{1}{x^\alpha}\,dx = \lim_{M\to+\infty} \int_1^M x^{-\alpha}\,dx = \lim_{M\to+\infty} \left\lbrack \frac{x^{1-\alpha}}{1-\alpha}\right\rbrack _1^M = \lim_{M\to+\infty} \left(\frac{M^{1-\alpha}}{1-\alpha} - \frac{1}{1-\alpha}\right).$$

Se $\alpha<1$, allora $1-\alpha>0$ e $M^{1-\alpha}\to+\infty$, quindi l'integrale diverge a $+\infty$. Se $\alpha>1$, allora $1-\alpha<0$ e $M^{1-\alpha}\to 0$, quindi il limite vale $-\dfrac{1}{1-\alpha} = \dfrac{1}{\alpha-1}$, un valore finito. Il caso $\alpha=1$ è già stato trattato nell'esempio precedente e diverge.

:::formula{id="10.2" label="Comportamento dell'integrale campione 1/x^alpha all'infinito"}
$$\int_1^{+\infty} \frac{1}{x^\alpha}\,dx = \begin{cases} \text{converge (e vale } \dfrac{1}{\alpha-1}\text{)} & \text{se } \alpha>1 \\[4pt] \text{diverge} & \text{se } \alpha \le 1 \end{cases}$$
:::

Questo risultato, cruciale quanto il comportamento della serie armonica generalizzata, va memorizzato: all'infinito l'integrale di $1/x^\alpha$ converge se e solo se l'esponente è **strettamente maggiore di 1**.

:::image{src="assets/f41d430c-confronto-1-x-1-x2-infinito.svg" alt="Grafici di 1/x e 1/x^2 per x che va da 1 a più infinito" caption="Fig. 10.1 — Confronto tra 1/x (area divergente) e 1/x^2 (area convergente) su [1, +infinito["}
:::

La stessa soglia vale per ogni $a>0$. Infatti, per $M>a$, la differenza tra gli integrali troncati con estremo inferiore $a$ e $1$ è l'integrale di $x^{-\alpha}$ sull'intervallo compreso tra $a$ e $1$, con il segno determinato dall'ordine degli estremi. Tale intervallo è compatto e contenuto in $\rbrack 0,+\infty\lbrack $, dove $x^{-\alpha}$ è continua; la differenza è dunque finita e non modifica la convergenza o la divergenza all'infinito. Pertanto, $\int_a^{+\infty} \frac{1}{x^\alpha}\,dx$ converge se $\alpha>1$ e diverge se $\alpha\le 1$.

**Osservazione 10.1.** È istruttivo confrontare questo comportamento con quello, opposto, della stessa potenza vicino a un punto finito, trattato nella sezione sugli [Integrali impropri di seconda specie](ref:chapter/10#p3): mentre all'infinito la convergenza richiede $\alpha$ grande (la funzione deve decrescere rapidamente), vicino a un punto finito la convergenza richiede $\alpha$ piccolo (la funzione non deve crescere troppo rapidamente verso l'infinito). Confondere le due soglie è uno degli errori più comuni in sede di esame.

### Esempio completo

Studiamo la convergenza di

$$\int_2^{+\infty} \frac{1}{x\,(\log x)^2}\,dx.$$

Usiamo la sostituzione $t=\log x$, $dt = \dfrac{1}{x}\,dx$; quando $x=2$, $t=\log 2$, e quando $x=M$, $t=\log M$. Allora:

$$\int_2^{M} \frac{1}{x(\log x)^2}\,dx = \int_{\log 2}^{\log M} \frac{1}{t^2}\,dt = \left\lbrack -\frac{1}{t}\right\rbrack _{\log 2}^{\log M} = -\frac{1}{\log M} + \frac{1}{\log 2}.$$

Passando al limite per $M\to+\infty$ si ha $\log M \to +\infty$, quindi $\dfrac{1}{\log M}\to 0$, e:

$$\int_2^{+\infty} \frac{1}{x(\log x)^2}\,dx = \frac{1}{\log 2}.$$

L'integrale **converge** al valore $\dfrac{1}{\log 2}$. Si noti come, in presenza di una sostituzione, il calcolo del limite diventi automatico: basta sostituire il nuovo estremo $\log M \to +\infty$ nella primitiva trasformata, senza dover ritornare alla variabile $x$.

### Errori tipici

- **Scambiare il limite con la sostituzione diretta di $+\infty$.** Scrivere $\int_1^{+\infty} \frac{1}{x}\,dx = \lbrack \log x\rbrack _1^{+\infty} = +\infty - 0$ senza passare dal limite nasconde il fatto che occorre verificare l'esistenza del limite prima di poterlo calcolare; nei casi in cui il limite non esiste (indeterminazione) questa scorciatoia porta a conclusioni errate.

- **Dimenticare la locale integrabilità.** La definizione di integrale improprio di prima specie presuppone che $f$ sia integrabile su ogni $\lbrack a,M\rbrack $: se $f$ presenta anche una singolarità in un punto finito dell'intervallo (ad esempio un asintoto verticale), l'integrale è anche di seconda specie e va trattato come **multi-improprio**, spezzando l'intervallo nel punto singolare, come si vedrà nella sezione sugli [Integrali multi-impropri e con parametri](ref:chapter/10#p5).

- **Confondere la soglia $\alpha>1$ (prima specie) con la soglia $\alpha<1$ (seconda specie).** Le due condizioni sono opposte e vanno applicate solo al tipo corretto di singolarità (all'infinito oppure in un punto finito).

- **Pensare che "integrale che converge" implichi "la funzione tende a 0".** Sebbene nella maggior parte degli esempi scolastici $f(x)\to 0$ quando $\int_a^{+\infty} f$ converge, questo non è un teorema generale: esistono funzioni positive, non infinitesime, il cui integrale su $\lbrack a,+\infty\lbrack $ converge (tipicamente funzioni che non sono continue ma presentano picchi sempre più stretti); il criterio corretto per la convergenza riguarda l'area sotto il grafico, non il comportamento puntuale di $f$ all'infinito.

## p3 | Integrali impropri di seconda specie

Negli [integrali impropri di prima specie](ref:chapter/10#p2) l'intervallo di integrazione era illimitato, ma la funzione restava integrabile su ogni sottointervallo chiuso e limitato. Esiste un secondo modo, altrettanto frequente agli esami, in cui l'integrale "scappa dal controllo": l'intervallo $\lbrack a,b\rbrack $ è limitato, ma la funzione non è limitata in un intorno di uno (o più) dei suoi estremi. Anche in questo caso il teorema fondamentale del calcolo integrale e la formula di Torricelli-Barrow, viste nella sezione sul [teorema fondamentale del calcolo integrale](ref:chapter/9#p4), non si applicano direttamente, perché $f$ non è nemmeno integrabile in senso di Riemann su $\lbrack a,b\rbrack $: bisogna di nuovo passare al limite.

### Definizione di integrale improprio di seconda specie

**Definizione 10.1.** Sia $f: \, \rbrack a,b\rbrack  \to \mathbb{R}$ una funzione illimitata in un intorno destro di $a$, localmente integrabile su $\rbrack a,b\rbrack $ (cioè integrabile su $\lbrack c,b\rbrack $ per ogni $c \in \, \rbrack a,b\lbrack $). Si definisce l'integrale improprio di $f$ su $\rbrack a,b\rbrack $ come

:::formula{id="10.3" label="Integrale improprio di seconda specie (singolarità in a)"}
$$\int_a^b f(x)\,dx = \lim_{c \to a^+} \int_c^b f(x)\,dx$$
:::

Si dice che l'integrale improprio è convergente se il limite a secondo membro esiste finito, divergente se il limite è $+\infty$ o $-\infty$, indeterminato se il limite non esiste.

In modo perfettamente analogo, se $f: \lbrack a,b\lbrack \, \to \mathbb{R}$ è illimitata in un intorno sinistro di $b$ e localmente integrabile su $\lbrack a,b\lbrack $, si pone

:::formula{id="10.4" label="Integrale improprio di seconda specie (singolarità in b)"}
$$\int_a^b f(x)\,dx = \lim_{c \to b^-} \int_a^c f(x)\,dx$$
:::

con la stessa classificazione convergente/divergente/indeterminato.

**Osservazione 10.2.** La costruzione è del tutto parallela a quella degli integrali di prima specie: in entrambi i casi si parte da un integrale definito "sicuro" su un sottointervallo e si fa tendere l'estremo variabile verso il punto problematico (un estremo infinito nella prima specie, il punto di non limitatezza nella seconda). È bene tenere a mente questa simmetria, perché i criteri di convergenza della sezione successiva si enunciano nello stesso modo per entrambe le specie, cambiando solo il punto limite.

**Errore tipico 10.2.** Molti studenti, davanti a $\displaystyle \int_0^1 \frac{1}{x}\,dx$, applicano direttamente Torricelli-Barrow scrivendo $\lbrack \log x\rbrack _0^1 = \log 1 - \log 0$, senza accorgersi che $\log 0$ non esiste e che l'integrale non è nemmeno definito come integrale di Riemann ordinario: il passaggio al limite in $c \to 0^+$ non è un dettaglio formale, è l'unico modo corretto di dare un significato all'espressione.

### Il campione $1/x^\alpha$ vicino a 0

Così come $1/x^\alpha$ all'infinito è la funzione campione per la prima specie, lo stesso ruolo lo gioca vicino a un punto singolare per la seconda specie. Calcoliamo direttamente $\displaystyle \int_0^1 \frac{1}{x^\alpha}\,dx$ al variare di $\alpha \in \mathbb{R}$.

Se $\alpha = 1$:

$$\int_0^1 \frac{1}{x}\,dx = \lim_{c\to 0^+}\int_c^1 \frac{1}{x}\,dx = \lim_{c\to 0^+}\big(\underbrace{\log 1}_{=0} - \log c\big) = +\infty \implies \text{DIVERGENTE}.$$

Se $\alpha \neq 1$:

$$\int_0^1 \frac{1}{x^\alpha}\,dx = \lim_{c\to 0^+}\left\lbrack \frac{x^{1-\alpha}}{1-\alpha}\right\rbrack _c^1 = \lim_{c\to 0^+}\left(\frac{1}{1-\alpha} - \frac{c^{1-\alpha}}{1-\alpha}\right).$$

Se $\alpha < 1$ l'esponente $1-\alpha$ è positivo, quindi $c^{1-\alpha} \to 0$ e il limite è finito; se $\alpha > 1$ l'esponente $1-\alpha$ è negativo, quindi $c^{1-\alpha} \to +\infty$ e l'integrale diverge.

Riassumendo:

:::formula{id="10.5" label="Comportamento di 1/x^alpha vicino a 0"}
$$\int_0^1 \frac{1}{x^\alpha}\,dx = \begin{cases} \text{converge} & \text{se } \alpha < 1 \\ \text{diverge} & \text{se } \alpha \ge 1 \end{cases}$$
:::

Lo stesso risultato vale, per traslazione, in un intorno di qualunque punto $a$. La funzione $f(x) = 1/(x-a)^\alpha$ è illimitata vicino ad $a$ se $\alpha > 0$; per $\alpha = 0$ è costante e per $\alpha < 0$ tende a zero. La formula di convergenza vale per ogni $\alpha \in \mathbb{R}$:

$$\int_a^{a+1} \frac{1}{(x-a)^\alpha}\,dx = \begin{cases} \text{converge} & \text{se } \alpha < 1 \\ \text{diverge} & \text{se } \alpha \ge 1 \end{cases},$$

e analogamente, se la singolarità è nell'estremo destro $b$,

:::formula{id="10.6" label="Comportamento di 1/(b-x)^alpha vicino a b"}
$$\int_a^b \frac{1}{(b-x)^\alpha}\,dx = \begin{cases} \text{converge} & \text{se } \alpha < 1 \\ \text{diverge} & \text{se } \alpha \ge 1 \end{cases}$$
:::

**Attenzione alla direzione della disuguaglianza su $\alpha$.** La condizione si inverte rispetto al caso della prima specie: all'infinito $1/x^\alpha$ converge per $\alpha > 1$ e diverge per $\alpha \le 1$, mentre vicino a un punto finito $1/x^\alpha$ converge per $\alpha < 1$ e diverge per $\alpha \ge 1$. Confondere le due regole è probabilmente l'errore più frequente in questo argomento: conviene fissare mentalmente l'immagine geometrica, cioè che vicino a 0 solo esponenti piccoli (anche negativi) lasciano un'area finita, mentre all'infinito servono esponenti grandi per far convergere la coda.

:::image{src="assets/1b1d3b1b-integrale-improprio-convergente-radice.svg" alt="Grafico di 1 su radice di x per x che tende a 0 da destra, con asintoto verticale in x=0" caption="Fig. 10.2 — L'area sotto il grafico di 1/√x su ]0,1] è finita nonostante la funzione sia illimitata vicino a 0."}
:::

:::image{src="assets/1b1d3b1b-integrale-improprio-divergente-reciproco.svg" alt="Grafico di 1 su x per x che tende a 0 da destra, con asintoto verticale in x=0" caption="Fig. 10.3 — L'area sotto il grafico di 1/x su ]0,1] è infinita: l'integrale improprio diverge."}
:::

### Esempio svolto

Studiamo la convergenza di

$$\int_0^1 \log x \, dx.$$

La funzione $f(x) = \log x$ è continua su $\rbrack 0,1\rbrack $, quindi localmente integrabile, ma $\lim_{x\to 0^+}\log x = -\infty$: è illimitata vicino a $0$, e l'integrale è improprio di seconda specie.

Per definizione,
$$\int_0^1 \log x\,dx = \lim_{c\to 0^+}\int_c^1 \log x \, dx.$$

Calcoliamo una primitiva per parti, integrando $1 \cdot \log x$:

$$\int \log x \, dx = x\log x - \int x \cdot \frac{1}{x}\,dx = x\log x - x + k.$$

Quindi
$$\int_c^1 \log x \, dx = \big\lbrack x\log x - x\big\rbrack _c^1 = (1\cdot \log 1 - 1) - (c\log c - c) = -1 - c\log c + c.$$

Per $c \to 0^+$ si ha $c \to 0$ e, per il limite notevole della parte principale di $x\log x$ in $0$, $c\log c \to 0$ (infinitesimo campione dominante sul logaritmo). Quindi

$$\lim_{c\to 0^+}\left(-1 - c\log c + c\right) = -1 - 0 + 0 = -1.$$

L'integrale converge e vale $-1$:

$$\int_0^1 \log x \, dx = -1.$$

Si noti che il valore è negativo, cosa coerente con il fatto che $\log x < 0$ su $\rbrack 0,1\lbrack $: l'integrale "con segno" è negativo, mentre se si volesse l'area geometrica sottesa al grafico bisognerebbe calcolare $\int_0^1 |\log x|\,dx = 1$, distinzione già incontrata nella sezione sul [teorema fondamentale del calcolo integrale](ref:chapter/9#p4).

### Errori tipici

Un primo errore, già segnalato, è applicare Torricelli-Barrow a occhio senza riconoscere che la funzione è illimitata in uno degli estremi: prima di calcolare qualunque integrale definito bisogna sempre controllare se il dominio dell'integranda copre davvero tutto l'intervallo chiuso $\lbrack a,b\rbrack $, oppure se esiste un punto in cui $f$ tende a $\pm\infty$.

Un secondo errore è scambiare le condizioni di convergenza di $1/x^\alpha$ fra le due specie: vicino a 0 (o a un punto finito) converge per $\alpha < 1$, all'infinito converge per $\alpha > 1$. Scrivere la regola sbagliata porta a concludere erroneamente che un integrale diverge quando converge, o viceversa.

Un terzo errore riguarda il punto singolare: se la funzione è illimitata in un punto interno $x_0 \in \, \rbrack a,b\lbrack $ (non in un estremo), non si può applicare direttamente la definizione data sopra; occorre prima spezzare l'integrale in $x_0$ come somma di due integrali impropri, ciascuno con la singolarità su un estremo, e verificare che convergano entrambi. Questa tecnica, insieme al trattamento degli integrali che sono contemporaneamente impropri di prima e di seconda specie, viene formalizzata nella sezione sugli [integrali multi-impropri e con parametri](ref:chapter/10#p5).

Infine, come già accennato per la prima specie, l'esistenza del limite che definisce l'integrale improprio non è garantita a priori: se $f$ non ha segno costante vicino al punto singolare, il limite può non esistere (caso indeterminato), e in tal caso l'integrale improprio semplicemente non è definito. I criteri che permettono di stabilire convergenza o divergenza senza calcolare esplicitamente il limite, sia per funzioni di segno costante sia tramite l'assoluta integrabilità, sono l'oggetto della prossima sezione sui [criteri di convergenza](ref:chapter/10#p4).

## p4 | Criteri di convergenza

Negli integrali impropri delle sezioni precedenti abbiamo sempre potuto calcolare esplicitamente il limite che definisce l'integrale, grazie a una primitiva elementare. Nella maggior parte degli esercizi d'esame questo non è possibile: la funzione integranda non ha una primitiva calcolabile, ma a noi interessa spesso solo stabilire **se** l'integrale converge, non quanto vale. I criteri di convergenza permettono di rispondere a questa domanda confrontando la funzione data con una funzione campione, senza calcolare alcuna primitiva.

### Funzioni positive: niente indeterminazione

Se la funzione integranda non cambia segno, l'integrale improprio non può avere comportamento oscillante.

:::formula{id="10.7" label="Impossibilità dell'indeterminazione per funzioni positive"}
$$f:[a,+\infty[\ \to [0,+\infty[\ \text{localmente integrabile} \implies \int_a^{+\infty} f(x)\,dx \text{ converge oppure diverge a } +\infty\ (\text{mai indeterminato}).$$
:::

La ragione intuitiva è che la funzione integrale $F(M) = \int_a^M f(x)\,dx$ è crescente (essendo $f \ge 0$), e per una funzione monotona il limite per $M \to +\infty$ esiste sempre in $\mathbb{R}^*$, finito se $F$ è limitata, $+\infty$ altrimenti. Lo stesso vale, con le modifiche ovvie, per gli integrali di seconda specie con $f \ge 0$ vicino al punto singolare.

Questo fatto è ciò che rende possibili i criteri seguenti, che si applicano **solo a funzioni di segno costante** (o di segno costante vicino al punto improprio).

### Criterio del confronto

:::formula{id="10.8" label="Criterio del confronto per integrali impropri"}
$$\begin{aligned}
&f,g:[a,+\infty[\ \to [0,+\infty[\ \text{localmente integrabili, con } 0 \le f(x) \le g(x)\ \ \forall x \ge a; \\
&\int_a^{+\infty} g(x)\,dx \text{ convergente} \implies \int_a^{+\infty} f(x)\,dx \text{ convergente}; \\
&\int_a^{+\infty} f(x)\,dx \text{ divergente} \implies \int_a^{+\infty} g(x)\,dx \text{ divergente}.
\end{aligned}$$
:::

L'idea geometrica è semplice: se $f$ sta sotto $g$ e l'area sotto $g$ è finita, anche quella sotto $f$, più piccola, è finita; se l'area sotto $f$ è infinita, quella sotto $g$, più grande, non può essere finita.

:::image{src="assets/ca1cbd09-confronto-funzioni-positive.svg" alt="Grafico di 1/x^2 e di 1/(x^2+1) per x da 1 a 8, con la seconda sempre sotto la prima" caption="Fig. 10.4 — Due funzioni positive confrontate su [1,+∞): se la funzione più grande ha integrale convergente, anche quella più piccola converge."}
:::

Un enunciato identico, con le disuguaglianze opportunamente adattate, vale per gli integrali di seconda specie confrontando il comportamento vicino al punto di singolarità, e per entrambe le specie vale la formulazione equivalente in termini di disuguaglianza tra integrali:
$$0 \le f(x) \le g(x)\ \ \forall x \ge a \ \Longrightarrow\ 0 \le \int_a^{+\infty} f(x)\,dx \le \int_a^{+\infty} g(x)\,dx.$$

Il criterio del confronto richiede di conoscere o costruire una maggiorante o una minorante esplicita, cosa che spesso è scomoda. Nella pratica si usa quasi sempre la sua versione asintotica, più semplice da applicare.

### Criterio del confronto asintotico

Se la funzione integranda è asintoticamente equivalente a una potenza campione $\frac{1}{x^\alpha}$ (vicino a $+\infty$) o a $\frac{1}{(b-x)^\alpha}$ (vicino a un punto finito $b$), la convergenza dell'integrale si decide direttamente dall'esponente $\alpha$, esattamente come per l'integrale campione.

:::formula{id="10.9" label="Criterio del confronto asintotico"}
$$\begin{aligned}
&f:[a,+\infty[\ \to \mathbb{R}\ \text{localmente integrabile, con } f(x) \sim \frac{c}{x^\alpha}\ (x \to +\infty),\ c \ne 0: \\
&\quad \int_a^{+\infty} f(x)\,dx \text{ converge se } \alpha > 1,\ \text{diverge se } \alpha \le 1; \\
&f:[a,b[\ \to \mathbb{R}\ \text{localmente integrabile, con } f(x) \sim \frac{c}{(b-x)^\alpha}\ (x \to b^-),\ c \ne 0: \\
&\quad \int_a^{b} f(x)\,dx \text{ converge se } \alpha < 1,\ \text{diverge se } \alpha \ge 1.
\end{aligned}$$
:::

Il criterio funziona perché, se $f(x) \sim \dfrac{c}{x^\alpha}$, il quoziente $f(x)\Big/\dfrac{c}{x^\alpha}$ tende a $1$, dunque $f$ e $\dfrac{c}{x^\alpha}$ hanno definitivamente lo stesso segno e sono confrontabili tramite il criterio del confronto applicato sia a $f$ sia a $-f$ (se $c<0$); la costante moltiplicativa $c$ non influisce sulla convergenza, solo sul valore dell'eventuale integrale.

Un errore tipico è dimenticare che la soglia su $\alpha$ si **inverte** passando dalla prima alla seconda specie: all'infinito si converge per $\alpha > 1$, al finito si converge per $\alpha < 1$. Applicare la regola sbagliata al tipo di singolarità sbagliato è l'errore più frequente in questo argomento.

In alternativa, quando $f$ ha ordine di infinitesimo $n$ rispetto al campione $\frac{1}{x}$ (per $x \to +\infty$), il criterio si riformula così: se $n > 1$ l'integrale converge, se $n \le 1$ diverge. Questa formulazione è comoda quando si è già calcolato l'ordine di infinitesimo con gli strumenti della sezione su [Infiniti e infinitesimi](ref:chapter/6#p3).

### Assoluta integrabilità per funzioni di segno variabile

I due criteri precedenti richiedono che la funzione non cambi segno. Quando $f$ assume sia valori positivi sia negativi, non si può applicare direttamente il confronto: bisogna passare al valore assoluto.

:::formula{id="10.10" label="Funzione assolutamente integrabile"}
$$f:[a,+\infty[\ \to \mathbb{R}\ \text{(localmente integrabile) si dice assolutamente integrabile se } \int_a^{+\infty} |f(x)|\,dx \text{ è convergente.}$$
:::

La stessa definizione si adatta in modo ovvio agli integrali di seconda specie, sostituendo l'estremo infinito con il punto di singolarità.

:::formula{id="10.11" label="Criterio di convergenza assoluta"}
$$f \text{ assolutamente integrabile su } [a,+\infty[\ \implies\ \int_a^{+\infty} f(x)\,dx \text{ converge, e } \left|\int_a^{+\infty} f(x)\,dx\right| \le \int_a^{+\infty} |f(x)|\,dx.$$
:::

Il punto cruciale è che l'implicazione va in un solo verso: **l'assoluta convergenza implica la convergenza, ma non vale il viceversa** (esiste un classico controesempio con $\sin x / x$ sull'intero asse, in cui l'integrale converge ma non assolutamente, analogo a quanto accade per le serie). Questo criterio è particolarmente utile perché $|f|$ è sempre $\ge 0$, e quindi su $|f|$ si possono applicare liberamente i criteri del confronto e del confronto asintotico visti sopra.

Occorre inoltre ricordare che se l'integrale del modulo **diverge**, non si può concludere nulla sull'integrale di partenza: la funzione potrebbe convergere per compensazione di segni, divergere, oppure non avere limite. In questo caso il criterio di assoluta integrabilità semplicemente non si applica e occorre un'analisi diretta (ad esempio tramite il teorema dei carabinieri o stime specifiche).

### Esempio svolto: uso combinato dei criteri

Studiamo la convergenza di
$$\int_0^{+\infty} \frac{1}{(1+x)\sqrt[3]{x-1}}\,dx.$$

Il dominio della funzione integranda richiede $x \ne 1$ (il denominatore si annulla), quindi l'integrale è multi-improprio: oltre all'estremo $+\infty$, c'è una singolarità interna in $x=1$. Spezziamo l'intervallo in tre parti: $\lbrack 0,1\lbrack $, $\rbrack 1,2\rbrack $, $\lbrack 2,+\infty\lbrack $.

**Primo intervallo**, $x \to 1^-$: scriviamo $x-1=-(1-x)$, quindi $\sqrt[3]{x-1}=-\sqrt[3]{1-x}$. Inoltre $\frac{1}{1+x}\to\frac{1}{2}$, perciò

$$\frac{1}{(1+x)\sqrt[3]{x-1}} \underset{x\to 1^-}{\sim} -\frac{1}{2(1-x)^{1/3}}$$

In modulo l'esponente è $\alpha=\frac{1}{3}<1$: per il criterio del confronto asintotico di seconda specie l'integrale su $\lbrack 0,1\lbrack $ **converge**.

**Secondo intervallo**, $x \to 1^+$: poiché $\frac{1}{1+x}\to\frac{1}{2}$, si ha

$$\frac{1}{(1+x)\sqrt[3]{x-1}} \underset{x\to 1^+}{\sim} \frac{1}{2(x-1)^{1/3}}$$

Anche qui $\alpha=\frac{1}{3}<1$, quindi l'integrale su $\rbrack 1,2\rbrack $ **converge**.

**Terzo intervallo**, $x \to +\infty$: per $x$ grande, $1+x\sim x$ e $\sqrt[3]{x-1}\sim\sqrt[3]{x}=x^{1/3}$, quindi

$$\frac{1}{(1+x)\sqrt[3]{x-1}} \underset{x\to+\infty}{\sim} \frac{1}{x^{1+1/3}}=\frac{1}{x^{4/3}}$$

Qui $\alpha=\frac{4}{3}>1$, quindi per il criterio del confronto asintotico di prima specie l'integrale su $\lbrack 2,+\infty\lbrack $ **converge**.

Poiché tutti e tre i sottointervalli danno integrali convergenti, anche l'integrale complessivo converge:

$$\int_0^{+\infty} \frac{1}{(1+x)\sqrt[3]{x-1}}\,dx$$

Nei primi due sottointervalli, di seconda specie, la convergenza richiede $\alpha<1$; nel terzo, di prima specie, richiede $\alpha>1$.

### Errore tipico

Un errore ricorrente è applicare il criterio del confronto o del confronto asintotico a una funzione che cambia segno, senza prima passare al valore assoluto: i due criteri per funzioni positive non garantiscono nulla se $f$ non ha segno costante (almeno vicino al punto improprio). In tal caso bisogna sempre controllare prima il segno di $f$ sull'intervallo di interesse, oppure studiare direttamente $|f|$ tramite il criterio di assoluta integrabilità.

Un secondo errore comune è concludere la divergenza di $\int |f(x)|\,dx$ per affermare la divergenza di $\int f(x)\,dx$: come osservato, questa implicazione non è valida, e la divergenza del modulo non dice nulla sul comportamento della funzione originaria con segno.

## p5 | Integrali multi-impropri e con parametri

Nelle due sezioni precedenti abbiamo sempre supposto che l'integrale improprio presentasse **un'unica** causa di impropria integrabilità: un solo estremo infinito, oppure un solo punto di non limitatezza, sempre collocato in uno degli estremi dell'intervallo. In molti esercizi, però, la funzione integranda presenta più punti critici contemporaneamente: può essere illimitata in un punto interno al dominio, avere l'estremo di integrazione a $+\infty$, oppure essere illimitata in **entrambi** gli estremi di un intervallo finito. Questa sezione mostra come trattare questi casi spezzando l'integrale in più pezzi, ciascuno con una sola singolarità posta a un estremo, e come usare la stessa idea per determinare per quali valori di un parametro un integrale converge.

### Integrale improprio con singolarità in entrambi gli estremi

Supponiamo che $f$ sia localmente integrabile su un intervallo $\rbrack a,b\lbrack $ (con $a,b \in \mathbb{R}^*$, $a<b$), senza essere integrabile vicino ad $a$ né vicino a $b$ (per esempio perché $f$ diverge in entrambi gli estremi, oppure perché $a=-\infty$ e $b=+\infty$). In questo caso non ha senso scrivere un unico limite: bisogna scegliere un punto intermedio $c \in \,\rbrack a,b\lbrack \,$ e definire

:::formula{id="10.12" label="Integrale improprio con singolarità in entrambi gli estremi"}
$$\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$$
:::

L'integrale improprio a primo membro si dice convergente se **entrambi** gli integrali a secondo membro convergono; diverge positivamente (risp. negativamente) se uno dei due diverge positivamente (risp. negativamente) e l'altro converge, oppure se **entrambi** divergono positivamente (risp. negativamente); è indeterminato in tutti gli altri casi, in particolare se uno dei due diverge a $+\infty$ e l'altro a $-\infty$, oppure se uno dei due non ha limite.

La scelta del punto $c$ è del tutto arbitraria e non influisce sulla natura del risultato: cambiando $c$ in $c'$, la differenza $\int_c^{c'} f(x)\,dx$ è un integrale ordinario (finito), quindi la convergenza o la divergenza dei due pezzi non cambia. Questa osservazione è coerente con la proprietà generale secondo cui le casistiche di convergenza non dipendono dal punto di suddivisione scelto.

### Integrali multi-impropri: il caso generale

Più in generale, un **integrale multi-improprio** è un integrale improprio che presenta più di un punto in cui la funzione risulta impropria: può trattarsi di più punti interni di non limitatezza, di un estremo infinito combinato con una singolarità interna, o di qualunque combinazione di questi casi.

Si individuano tutti i punti di singolarità interni $s_1<\dots<s_m$ e si pongono $s_0=a$ e $s_{m+1}=b$. In ogni intervallo $\rbrack s_j,s_{j+1}\lbrack $ si sceglie un punto regolare $c_j$. Lo spezzamento avviene **in corrispondenza di ogni singolarità interna**: i due pezzi adiacenti si studiano con limiti unilateri separati. I punti $c_j$ isolano le singolarità agli estremi dei pezzi, comprese le eventuali code infinite.

:::formula{id="10.13" label="Spezzamento di un integrale multi-improprio"}
$$\int_a^b f(x)\,dx=\sum_{j=0}^{m}\left(\int_{s_j}^{c_j}f(x)\,dx+\int_{c_j}^{s_{j+1}}f(x)\,dx\right)$$
:::

L'integrale di partenza converge se e solo se **tutti** i sottointegrali convergono; diverge se e solo se tutti convergono tranne uno o più che divergono con lo stesso segno (e in quel caso l'integrale complessivo diverge con quel segno); è indeterminato in tutti gli altri casi, in particolare se compaiono divergenze di segno opposto o se qualche sottointegrale è esso stesso indeterminato.

Questo fatto discende dalla proprietà generale di restrizione: se $f \in \mathcal{R}_{loc}(\rbrack a,b\lbrack )$ e $a < c < b$, allora le restrizioni $f|_{\,\rbrack a,c\rbrack }$ e $f|_{\,\lbrack c,b\lbrack }$ sono localmente integrabili e i loro integrali impropri convergono entrambi se e solo se converge $\int_a^b f(x)\,dx$.

Prima di spezzare un integrale è quindi indispensabile determinare correttamente il dominio naturale di $f$, individuando con precisione tutti i punti in cui la funzione non è definita o non è limitata: un errore tipico è dimenticare una singolarità interna all'intervallo (per esempio un punto dove si annulla un denominatore) e trattare l'integrale come se fosse improprio solo all'infinito.

### Esempio svolto

Studiamo un integrale con due singolarità interne distinte e un estremo infinito:

$$\int_0^{+\infty}\frac{1}{(1+x)^2\sqrt{|x-1|\,|x-2|}}\,dx.$$

L'integranda è positiva e ha singolarità in $x=1$ e $x=2$. Scegliamo i punti regolari $c_0=\frac{1}{2}$, $c_1=\frac{3}{2}$ e $c_2=3$. Otteniamo i pezzi $\lbrack 0,\frac{1}{2}\rbrack $, $\lbrack \frac{1}{2},1\lbrack $, $\rbrack 1,\frac{3}{2}\rbrack $, $\lbrack \frac{3}{2},2\lbrack $, $\rbrack 2,3\rbrack $ e $\lbrack 3,+\infty\lbrack $. In particolare, i limiti presso $x=1$ e $x=2$ si calcolano separatamente da sinistra e da destra.

Posto $f(x)=\frac{1}{(1+x)^2\sqrt{|x-1|\,|x-2|}}$, si ha

$$\begin{aligned}f(x)&\sim\frac{1}{4|x-1|^{1/2}}&& (x\to1^-,\ x\to1^+),\\f(x)&\sim\frac{1}{9|x-2|^{1/2}}&& (x\to2^-,\ x\to2^+),\\f(x)&\sim\frac{1}{x^3}&& (x\to+\infty).\end{aligned}$$

Presso entrambe le singolarità finite l'esponente è $\frac{1}{2}<1$; all'infinito è $3>1$. Tutti i pezzi convergono, quindi converge anche l'integrale di partenza.

È importante osservare che la regola sul valore soglia dell'esponente $\alpha$ **cambia direzione** secondo il tipo di singolarità: vicino a un punto finito converge se $\alpha<1$, mentre all'infinito converge se $\alpha>1$. Confondere le due soglie è uno degli errori più frequenti in questo tipo di esercizio: bisogna sempre chiedersi, prima di applicare il confronto asintotico, se il punto verso cui ci si avvicina è finito o infinito.

### Integrali con un parametro

Un'altra applicazione tipica dello spezzamento riguarda gli integrali impropri in cui compare un parametro reale (di solito indicato con $\alpha$ o $k$) e si chiede di determinare per quali valori del parametro l'integrale converge. La strategia è sempre la stessa: si spezza l'integrale nei punti critici, si studia la convergenza di ciascun pezzo in funzione del parametro usando i comportamenti campione $1/x^\alpha$ all'infinito e vicino a un punto finito, e infine si intersecano le condizioni trovate sui singoli pezzi, perché l'integrale complessivo converge se e solo se **tutti** i pezzi convergono.

**Esempio 10.3.** Determiniamo per quali $\alpha \in \mathbb{R}$ converge

$$\int_0^{+\infty} \frac{1}{x^\alpha (1+x)}\,dx.$$

La funzione è impropria sia in $x=0$ (se $\alpha>0$) sia all'infinito; spezziamo quindi in $\rbrack 0,1\rbrack $ e $\lbrack 1,+\infty\lbrack $.

Vicino a $x=0^+$ si ha $1+x \to 1$, quindi

$$\frac{1}{x^\alpha(1+x)} \sim \frac{1}{x^\alpha} \qquad (x \to 0^+),$$

e per il comportamento campione di $1/x^\alpha$ vicino a $0$, l'integrale $\int_0^1 \frac{1}{x^\alpha(1+x)}\,dx$ converge se e solo se $\alpha<1$.

Vicino a $+\infty$ si ha $1+x \sim x$, quindi

$$\frac{1}{x^\alpha(1+x)} \sim \frac{1}{x^{\alpha+1}} \qquad (x \to +\infty),$$

e per il comportamento campione di $1/x^\alpha$ all'infinito, l'integrale $\int_1^{+\infty} \frac{1}{x^\alpha(1+x)}\,dx$ converge se e solo se $\alpha+1>1$, cioè $\alpha>0$.

L'integrale completo converge se e solo se convergono entrambi i pezzi, cioè se e solo se

$$0 < \alpha < 1.$$

Fuori da questo intervallo almeno uno dei due pezzi diverge (la funzione è sempre positiva, quindi per il lemma sulla non indeterminatezza delle funzioni di segno costante ciascun pezzo converge o diverge, non può essere indeterminato), e dunque l'integrale completo diverge per ogni $\alpha \le 0$ oppure $\alpha \ge 1$.

### Errori tipici

Un errore molto comune è dimenticare di controllare che il parametro renda effettivamente la funzione illimitata o il dominio illimitato: se per un certo valore di $\alpha$ la singolarità in $0$ scompare (ad esempio perché l'esponente diventa negativo o nullo), l'integrale su quel pezzo è in realtà un integrale ordinario e va trattato come tale, senza passare al limite.

Un secondo errore tipico consiste nell'applicare la stessa soglia $\alpha>1$/$\alpha\le 1$ a entrambi gli estremi senza distinguere se la singolarità è in un punto finito o all'infinito: come visto nell'esempio precedente, le due soglie sono opposte, e vanno applicate separatamente a ciascun pezzo dello spezzamento.

Un terzo errore riguarda la conclusione finale quando uno dei pezzi diverge: non basta dire che "l'integrale diverge", bisogna controllare il segno della divergenza di ciascun pezzo, perché se un pezzo diverge a $+\infty$ e un altro a $-\infty$ (fatto possibile solo per funzioni di segno variabile, dato che per funzioni positive questo non può capitare) il risultato complessivo è indeterminato, non divergente.

Infine, quando l'integranda non ha segno costante, lo spezzamento nei punti critici va comunque eseguito, ma la conclusione su ciascun pezzo richiede i criteri visti nella sezione sui [criteri di convergenza](ref:chapter/10#p4), in particolare l'assoluta integrabilità: se $\int |f(x)|\,dx$ converge su un pezzo, allora anche $\int f(x)\,dx$ converge su quel pezzo, ma non vale il viceversa, e se il modulo diverge non si può concludere nulla sul segno dell'integrale originario.
