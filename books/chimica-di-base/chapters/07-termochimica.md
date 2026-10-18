---
chapter: 7
title: Termochimica
---

## p1 | Introduzione

La termochimica permette di seguire l’energia che entra o esce durante una reazione e di collegare le trasformazioni chimiche al calore misurato in laboratorio. Per affrontare il capitolo servono le basi della stechiometria, utili per interpretare i rapporti tra reagenti e prodotti, e la conoscenza dello stato gassoso, necessaria quando il numero di moli di gas influisce sulla variazione di energia.

Partendo dagli scambi tra sistema e ambiente e dal primo principio della termodinamica, imparerai a distinguere energia interna ed entalpia e a interpretare il calore di reazione secondo le condizioni in cui avviene la trasformazione. La calorimetria mostrerà come ricavare il calore da misure di temperatura e massa, distinguendo le misure a pressione costante da quelle a volume costante. Imparerai poi a calcolare le variazioni di entalpia combinando reazioni con la legge di Hess, usando le entalpie standard di formazione o stimando il contributo dei legami chimici. Al termine saprai applicare queste strategie ai dati sperimentali e alle equazioni termochimiche, controllando segni, fasi e coefficienti stechiometrici.

## p2 | Sistemi, energia interna e primo principio

La termochimica studia il flusso di energia che accompagna le trasformazioni fisiche e chimiche, applicando alle reazioni il primo principio della termodinamica. Prima di poter misurare una variazione di energia occorre però stabilire con precisione di che cosa si sta parlando, cioè definire un sistema e distinguerlo dall'ambiente che lo circonda.

### Sistemi, ambiente e loro classificazione

**Definizione 7.1** (sistema e ambiente). Si definisce **sistema** una porzione di spazio separata dal resto dell'universo mediante un confine reale o immaginario, rigido o deformabile; tale confine può coincidere con pareti materiali oppure con un cambiamento di fase. Si definisce **ambiente** tutto ciò che è esterno al sistema e può interagire con esso; sistema più ambiente costituiscono l'universo (termodinamico).

In base agli scambi di materia e di energia che un sistema può avere con l'ambiente, si distinguono tre casi.

- **Sistema isolato**: non scambia né energia né materia con l'ambiente. È un'idealizzazione, non realizzabile sperimentalmente in modo perfetto, ma utile come modello limite (l'universo nel suo complesso è spesso trattato come il più grande sistema isolato).
- **Sistema chiuso**: scambia energia (sotto forma di calore e/o lavoro) ma non materia con l'ambiente. È il sistema di interesse tipico nello studio della chimica in laboratorio o in un impianto industriale, ed è quello a cui si applicano quasi tutte le relazioni di questo capitolo.
- **Sistema aperto**: scambia sia energia che materia con l'ambiente. Gli organismi viventi sono un esempio tipico di sistema aperto; a differenza dei primi due, un sistema aperto in generale non raggiunge un vero equilibrio termodinamico, ma può mantenersi in uno stato stazionario.

**Errore tipico 7.1.** Confondere "sistema isolato" con "sistema chiuso": il sistema isolato non scambia energia con l'esterno (quindi, come si vedrà, $\Delta U = 0$), mentre il sistema chiuso può scambiare calore e lavoro, pur non scambiando materia.

### Energia interna e primo principio della termodinamica

Ogni particella di un sistema possiede un'energia cinetica e un'energia potenziale; la somma di queste contributi, estesa a tutte le particelle del sistema, costituisce l'**energia interna**, indicata con $U$. Quando il sistema passa da uno stato iniziale a uno stato finale, per esempio a seguito di una reazione chimica, l'energia interna varia di

$$\Delta U = U_{\text{finale}} - U_{\text{iniziale}} = U_{\text{prodotti}} - U_{\text{reagenti}}.$$

Il segno di $\Delta U$ indica il verso del trasferimento netto di energia tra sistema e ambiente: se il sistema cede energia all'ambiente si ha $\Delta U < 0$, se il sistema acquista energia dall'ambiente si ha $\Delta U > 0$.

**Primo principio della termodinamica.** L'energia non può essere creata né distrutta, ma solo convertita da una forma a un'altra: l'energia totale dell'universo (sistema più ambiente) è costante. Di conseguenza, qualunque variazione dell'energia interna di un sistema è accompagnata da una variazione di uguale valore assoluto e segno opposto dell'energia dell'ambiente.

Il trasferimento di energia tra sistema e ambiente avviene attraverso due sole modalità, calore e lavoro.

- **Calore** ($q$): energia che si trasferisce tra sistema e ambiente a causa di una differenza di temperatura tra i due. Il calore non è una sostanza immagazzinata nei corpi: quando entra in un corpo, in assenza di transizioni di fase, si ridistribuisce su tutti i gradi di libertà delle particelle (traslazionali, rotazionali, vibrazionali) e se ne percepisce l'effetto come un aumento di temperatura.
- **Lavoro** ($w$): energia trasferita quando un oggetto viene spostato dall'azione di una forza.

Il **primo principio applicato a un sistema chiuso** collega energia interna, calore e lavoro mediante la relazione

:::formula{id="7.1" label="Primo principio della termodinamica"}
$$\Delta U = q + w$$
:::

valida per un sistema chiuso, cioè che non scambia materia con l'ambiente.

### Convenzione dei segni

I segni di $q$ e $w$ nella formula {{formula:7.1}} sono definiti dal punto di vista del sistema, con la convenzione comune a tutto il libro: è positivo tutto ciò che entra nel sistema, negativo tutto ciò che ne esce.

- $q > 0$: il sistema assorbe calore dall'ambiente; $q < 0$: il sistema cede calore all'ambiente.
- $w > 0$: l'ambiente compie lavoro sul sistema (per esempio comprimendolo); $w < 0$: il sistema compie lavoro sull'ambiente (per esempio espandendosi).

Il lavoro più frequente nelle trasformazioni chimiche è il **lavoro di espansione o compressione di un gas** a pressione esterna costante, dato da

:::formula{id="7.2" label="Lavoro di espansione a pressione costante"}
$$w = -P\,\Delta V$$
:::

dove $P$ è la pressione esterna costante e $\Delta V = V_{\text{finale}} - V_{\text{iniziale}}$. Il segno meno riflette proprio la convenzione appena introdotta: se il sistema si espande ($\Delta V > 0$) esso spinge l'ambiente circostante, cioè compie lavoro verso l'esterno, e quindi $w < 0$; se il sistema viene compresso ($\Delta V < 0$) l'ambiente compie lavoro su di esso e $w > 0$.

**Esempio svolto 7.1.** Lo zinco reagisce con acido cloridrico in un recipiente chiuso da un pistone mobile, a pressione atmosferica costante $P = 1{,}00\ \text{atm}$:

$$
\text{Zn(s)} + 2\,\text{HCl(aq)} \;\to\; \text{ZnCl}_2\text{(aq)} + \text{H}_2\text{(g)}.
$$

La produzione di idrogeno gassoso fa aumentare il volume del sistema, spingendo verso l'alto il pistone.

1. *Dati.* Reazione a pressione costante $P = 1{,}00\ \text{atm}$; si forma un gas che provoca un aumento di volume $\Delta V > 0$; il calore ceduto dal sistema all'ambiente durante la reazione (esotermica) è $q = -150\ \text{J}$ (valore assegnato per l'esercizio) e il lavoro di espansione calcolato è $w = -50\ \text{J}$.
2. *Strategia.* Poiché il sistema (i reagenti e i prodotti nel recipiente) non scambia materia con l'ambiente ma solo energia, è un sistema chiuso, e si applica {{formula:7.1}}.
3. *Calcolo.*
$\displaystyle \Delta U = q + w = (-150\ \text{J}) + (-50\ \text{J}) = -200\ \text{J}.$
4. *Verifica.* Il segno negativo di $\Delta U$ è coerente con una reazione esotermica che compie anche lavoro di espansione sull'ambiente: il sistema perde energia su entrambi i canali, quindi l'energia interna complessiva diminuisce, in accordo con il primo principio.

:::image{src="assets/b80c15b8-esempio-zn-hcl-livelli.svg" alt="Diagramma a due livelli con reagenti più in alto e prodotti più in basso, collegati da una freccia che indica la diminuzione di energia interna di 200 joule" caption="Fig. 7.1 — Variazione di energia interna nella reazione tra zinco e acido cloridrico: il sistema cede calore (q = -150 J) e compie lavoro di espansione sull'ambiente (w = -50 J), per cui l'energia interna diminuisce di 200 J."}
:::

**Errore tipico 7.2.** Molti studenti attribuiscono il segno di $w = -P\Delta V$ al segno di $P$, che è sempre positiva: il segno dipende invece dal segno di $\Delta V$ (espansione o compressione), non dal valore della pressione. Un altro errore frequente è dimenticare che la convenzione dei segni è sempre dal punto di vista del sistema, scambiando per errore "calore ceduto dall'ambiente" con "calore ceduto dal sistema".

### Funzioni di stato

**Definizione 7.2** (funzione di stato). Una **funzione di stato** è una grandezza che dipende unicamente dallo stato attuale del sistema (per esempio composizione, volume, pressione e temperatura) e non dal cammino, cioè dalla particolare sequenza di trasformazioni, seguito per raggiungere quello stato.

L'energia interna $U$ è una funzione di stato: la sua variazione $\Delta U$ tra uno stato iniziale e uno stato finale ha sempre lo stesso valore, indipendentemente da come il sistema è passato dall'uno all'altro, cioè indipendentemente da quanto calore e quanto lavoro sono stati scambiati separatamente lungo il percorso. Calore $q$ e lavoro $w$, al contrario, non sono funzioni di stato: i loro valori individuali dipendono dal particolare processo seguito, pur dando sempre la stessa somma $\Delta U$.

**Esempio 7.2.** La combustione dell'ottano con ossigeno, a produrre $\text{CO}_2$ e $\text{H}_2\text{O}$, dà la stessa variazione di energia interna sia che il combustibile venga bruciato all'aria aperta (cedendo quasi tutta l'energia come calore) sia che venga bruciato nel motore di un'automobile (cedendo buona parte dell'energia come lavoro meccanico e il resto come calore): $q$ e $w$ assumono valori diversi nei due casi, ma la loro somma $\Delta U$ è identica, perché dipende solo dallo stato iniziale (ottano e ossigeno) e dallo stato finale ($\text{CO}_2$ e $\text{H}_2\text{O}$).

Oltre a $U$, sono funzioni di stato anche l'entalpia $H$, l'entropia $S$ e l'energia libera $G$, che verranno definite nei capitoli successivi. Il primo principio, da solo, garantisce la conservazione dell'energia ma non indica in quale direzione una trasformazione avvenga spontaneamente; questo aspetto, legato all'entropia, sarà affrontato più avanti nel corso.

La prossima sezione mostrerà come, introducendo l'entalpia $H = U + PV$, sia possibile associare il calore scambiato a pressione costante a una funzione di stato più comoda di $q$ per i calcoli termochimici, aprendo la strada alle equazioni termochimiche e alla legge di Hess (si veda [Entalpia ed equazioni termochimiche](ref:chapter/7#p3)).

## p3 | Entalpia ed equazioni termochimiche

Nella sezione precedente si è definita l'energia interna $U$ e il primo principio della termodinamica $\Delta U = q + w$, con la convenzione per cui $w = -p\cdot \Delta V$ nel caso di un lavoro di espansione (si veda [Sistemi, energia interna e primo principio](ref:chapter/7#p2)). La maggior parte delle trasformazioni chimiche e fisiche di interesse avviene non a volume costante, ma a pressione costante (quella atmosferica, o quella imposta da un recipiente apribile): per queste trasformazioni è utile introdurre una nuova funzione di stato.

### Entalpia e variazione di entalpia a pressione costante

**Definizione 7.3** (entalpia). Per un sistema a pressione $p$ e volume $V$, con energia interna $U$, si definisce la funzione di stato entalpia come:

$$
H = U + p\cdot V .
$$

Di conseguenza, per una trasformazione a pressione costante, la variazione di entalpia è

$$
\Delta H = \Delta U + p \cdot \Delta V .
$$

Poiché $H$ è costruita a partire da funzioni di stato ($U$, $p$, $V$), anche $H$ è una funzione di stato: la sua variazione dipende soltanto dallo stato iniziale e da quello finale, non dal percorso seguito. Calore $q$ e lavoro $w$, invece, non sono funzioni di stato, perché i loro valori singoli dipendono dal percorso, anche se la loro somma $\Delta U$ non ne dipende.

Il motivo per cui si introduce $H$ è pratico: combinando la definizione di $\Delta H$ con il primo principio si ottiene una relazione diretta tra $\Delta H$ e il calore scambiato a pressione costante. Partendo da:

$$
\Delta U = q + w = q - p\cdot \Delta V,
$$

e denotando con $q_p$ il calore scambiato a pressione costante, si ha

$$
q_p = \Delta U + p\cdot \Delta V = \Delta H .
$$

:::formula{id="7.3" label="Variazione di entalpia e calore a pressione costante"}
$$\Delta H = q_p$$
:::

Questo risultato è centrale: in un sistema chiuso in cui l'unico lavoro scambiato è quello di espansione o compressione, la variazione di entalpia di una trasformazione coincide con il calore scambiato con l'ambiente, purché la trasformazione avvenga a pressione costante. È per questo motivo che $\Delta H$, a differenza di $\Delta U$, si può misurare direttamente, semplicemente misurando $q_p$ con un calorimetro a pressione costante (il procedimento sperimentale è trattato in [Calorimetria](ref:chapter/7#p4)). L'entalpia di un sistema in uno stato assoluto non è misurabile, perché mancherebbe un riferimento a entalpia zero; ciò che si misura è sempre una variazione $\Delta H$.

Essendo $H$ una funzione di stato:

$$
\Delta H = H_{\text{finale}} - H_{\text{iniziale}} = H_{\text{prodotti}} - H_{\text{reagenti}} ,
$$

esattamente come per l'energia interna, per la quale $\Delta U = U_{\text{prodotti}} - U_{\text{reagenti}}$.

Il segno di $\Delta H$ classifica la trasformazione: se il calore viene ceduto all'ambiente (come se fosse un prodotto della reazione), $\Delta H < 0$ e il processo è detto esotermico; se il calore viene assorbito dall'ambiente (come se fosse un reagente), $\Delta H > 0$ e il processo è detto endotermico.

:::image{src="assets/b686730a-diagramma-esotermico-endotermico.svg" alt="Due diagrammi a livelli di entalpia: a sinistra i reagenti sono più in alto dei prodotti con una freccia ΔH verso il basso (esotermico); a destra i reagenti sono più in basso dei prodotti con una freccia ΔH verso l'alto (endotermico)" caption="Fig. 7.2 — Diagramma entalpico di una trasformazione esotermica (ΔH negativo, calore ceduto) e di una endotermica (ΔH positivo, calore assorbito)"}
:::

Quanto si discosta $\Delta H$ da $\Delta U$ dipende dalla presenza e dalla variazione di moli gassose nella trasformazione. Si distinguono tre casi.

- Se non partecipano gas (reazioni tra soli solidi e/o liquidi), le variazioni di volume sono trascurabili, $\Delta V \approx 0$, e quindi $\Delta U \approx \Delta H$.
- Se partecipano gas ma le moli totali di gas non cambiano tra reagenti e prodotti (per esempio $N_{2(g)} + O_{2(g)} \to 2\,NO_{(g)}$), allora $\Delta V \approx 0$ e di nuovo $\Delta U \approx \Delta H$.
- Se le moli totali di gas variano, la semplificazione non è possibile; tuttavia nella maggior parte dei casi il termine $p\cdot \Delta V$ è molto più piccolo di $\Delta H$ in valore assoluto.

Per un sistema gassoso a temperatura $T$ e pressione $p$ costanti, il termine $p\cdot \Delta V$ si può riscrivere con l'equazione di stato dei gas ideali ([formula (6.5)](ref:formula/6.5)) in funzione della variazione del numero di moli gassose $\Delta n_{\text{gas}}$ (prodotti meno reagenti):

:::formula{id="7.4" label="Relazione tra ΔH e ΔU per un sistema gassoso"}
$$\Delta H = \Delta U + \Delta n_{\text{gas}} \cdot R \cdot T \qquad (T, p \text{ costanti})$$
:::

**Errore tipico 7.3.** Confondere $\Delta U$ e $\Delta H$ anche quando nella reazione le moli di gas variano in modo significativo: la stima $\Delta U \approx \Delta H$ vale solo se $\Delta n_{\text{gas}} = 0$ oppure se non sono coinvolte sostanze gassose; altrimenti va usata la relazione completa con $\Delta n_{\text{gas}} \cdot R \cdot T$.

### Equazioni termochimiche e calcoli stechiometrici

**Definizione 7.4** (equazione termochimica). Un'equazione termochimica è un'equazione chimica bilanciata (si veda [Equazioni chimiche e bilanciamento](ref:chapter/4#p3)) in cui sotto ogni specie si indica lo stato fisico, e a cui si affianca il calore di reazione $\Delta H_r$ per la trasformazione come scritta.

Il valore di $\Delta H_r$ riportato in un'equazione termochimica si riferisce sempre alle quantità in moli indicate dai coefficienti stechiometrici e agli stati di aggregazione specificati in quella particolare scrittura: cambiare lo stato di una specie (per esempio acqua liquida invece che gassosa) o i coefficienti cambia il valore numerico di $\Delta H_r$.

Vanno osservate due regole.

- Il segno di $\Delta H_r$ è negativo per una reazione esotermica e positivo per una endotermica; la reazione scritta nel senso inverso ha lo stesso valore assoluto e segno opposto rispetto alla reazione diretta.
- Il valore assoluto di $\Delta H_r$ è direttamente proporzionale alla quantità di sostanza che reagisce: raddoppiando tutti i coefficienti, $\Delta H_r$ raddoppia.

Per questo motivo, quando si vuole riferire $\Delta H_r$ a una particolare sostanza con coefficiente stechiometrico unitario, si ricorre spesso a coefficienti stechiometrici frazionari. Per esempio, il $\Delta H_r$ di formazione dell'acqua liquida a partire dagli elementi si riferisce alla reazione:

$$
H_{2(g)} + \tfrac{1}{2}\,O_{2(g)} \to H_2O_{(l)}
$$

e non a $2\,H_{2(g)} + O_{2(g)} \to 2\,H_2O_{(l)}$, perché la convenzione assegna coefficiente 1 alla sostanza di riferimento, in questo caso $H_2O$.

**Esempio svolto 7.3.** La decomposizione termica dell'ossido di alluminio produce alluminio e ossigeno, con entalpia di reazione pari a $1676\ \text{kJ/mol}$ (riferita a 1 mol di $Al_2O_3$). Calcolare la massa di alluminio che si forma quando vengono trasferiti $1,00 \times 10^3\ \text{kJ}$.

Dati: $\Delta H_r = 1676\ \text{kJ/mol}$ (per mole di $Al_2O_3$ decomposto); calore trasferito $q = 1,00 \times 10^3\ \text{kJ}$; $M(Al) = 26,98\ \text{g/mol}$.

Strategia: si scrive l'equazione termochimica con coefficiente 1 per la sostanza di riferimento ($Al_2O_3$), si ricavano le moli di $Al_2O_3$ decomposte dal calore fornito, poi le moli di $Al$ prodotte con il rapporto stechiometrico, infine la massa.

Calcolo. L'equazione bilanciata in forma usuale è:

$$
2\,Al_2O_{3(s)} \xrightarrow{\Delta} 4\,Al_{(s)} + 3\,O_{2(g)} ,
$$

ma per riferire $\Delta H_r$ a 1 mol di $Al_2O_3$ si scrive l'equazione termochimica:

$$
Al_2O_{3(s)} \xrightarrow{\Delta} 2\,Al_{(s)} + \tfrac{3}{2}\,O_{2(g)} , \qquad \Delta H_r = 1676\ \text{kJ/mol}.
$$

Le moli di $Al_2O_3$ decomposte sono:

$$
n_{Al_2O_3} = \frac{1,00\times 10^3\ \text{kJ}}{1676\ \text{kJ/mol}} = 0,597\ \text{mol}.
$$

Dal rapporto stechiometrico $2$ mol $Al$ per ogni mole di $Al_2O_3$:

$$
n_{Al} = 2 \cdot 0,597\ \text{mol} = 1,19\ \text{mol}.
$$

La massa di alluminio è quindi
$$m_{Al} = 1,19\ \text{mol} \cdot 26,98\ \text{g/mol} = 32,2\ \text{g}.$$

Verifica: l'ordine di grandezza è ragionevole (circa 0,6 mol di ossido, che contiene il doppio di moli di Al, con una massa molare moderata, dà qualche decina di grammi).

Il procedimento è lo stesso dei calcoli stechiometrici già visti in [Calcoli stechiometrici e reagente limitante](ref:chapter/4#p4), con la differenza che qui il dato di partenza è il calore scambiato, convertito in moli tramite $\Delta H_r$, invece della massa o del volume di un reagente.

**Errore tipico 7.4.** Usare direttamente i coefficienti dell'equazione bilanciata con i numeri interi minimi ($2\,Al_2O_3 \to 4\,Al + 3\,O_2$) insieme al valore di $\Delta H_r$ dato per mole di $Al_2O_3$: se $\Delta H_r$ è riferito a 1 mol della sostanza di riferimento, occorre prima riscalare l'intera equazione in modo che quella sostanza abbia coefficiente 1, altrimenti il calcolo delle moli a partire dal calore risulta sbagliato di un fattore 2.

### Stima di $\Delta H$ dalle energie di legame

**Definizione 7.5** (energia di legame). Per una molecola biatomica $AB$ gassosa, l'energia di legame (anche detta entalpia di legame o forza di legame) è la variazione standard di entalpia associata alla rottura del legame in 1 mol di molecole gassose:

$$
AB_{(g)} \to A_{(g)} + B_{(g)} .
$$

La rottura di un legame è sempre un processo endotermico, quindi l'energia di legame è per definizione una grandezza positiva; equivalentemente, è la differenza di energia tra gli atomi legati e gli atomi separati. Poiché la stessa quantità di energia assorbita per rompere il legame viene rilasciata quando il legame si forma, la formazione di un legame è un processo esotermico, con variazione di entalpia negativa.

Le energie di legame dipendono dagli atomi coinvolti (configurazione elettronica, carica nucleare, raggio atomico) e variano leggermente da molecola a molecola per uno stesso tipo di legame; i legami più deboli hanno un'energia di dissociazione più bassa, e quindi sono più facili da rompere.

Si può interpretare una reazione chimica come un bilancio tra l'energia assorbita per rompere i legami dei reagenti e l'energia rilasciata quando si formano i legami dei prodotti: l'entalpia di reazione risulta dalla differenza tra le forze dei legami rotti e quelle dei legami formati.

**Esempio svolto 7.4.** Per la reazione $H_{2(g)} + F_{2(g)} \to 2\,HF_{(g)}$ a $25\ \text{°C}$ si misura $\Delta H = -546\ \text{kJ/mol}$. Per spiegare l'origine di questo valore si scompongono i contributi all'energia interna delle molecole coinvolte.

La reazione può essere vista, in modo approssimato, come un bilancio tra le energie dei legami rotti nei reagenti e quelle dei legami formati nei prodotti, poiché è soprattutto la riorganizzazione dei legami covalenti a determinare la variazione di entalpia complessiva; altri contributi energetici (cinetici e potenziali diversi dall'interazione di legame) non vengono isolati in questa stima.

Poiché $\Delta H < 0$, l'energia rilasciata nella formazione dei legami $H$–$F$ nei prodotti supera l'energia assorbita per rompere i legami $H$–$H$ e $F$–$F$ nei reagenti: questo eccesso di energia rilasciata è l'origine del valore negativo di $\Delta H$.

In generale, lo stesso ragionamento permette una stima di $\Delta H$ a partire dalle energie di legame tabulate, sommando le energie necessarie per rompere tutti i legami dei reagenti e sottraendo le energie rilasciate nella formazione di tutti i legami dei prodotti:

$$
\Delta H \approx \sum D(\text{legami rotti}) - \sum D(\text{legami formati}) .
$$

Per la reazione $H_{2(g)} + F_{2(g)} \to 2\,HF_{(g)}$, con $D(H\text{-}H) = 436\ \text{kJ/mol}$, $D(F\text{-}F) = 159\ \text{kJ/mol}$ e $D(H\text{-}F) = 565\ \text{kJ/mol}$, si ottiene $\Delta H \approx (436 + 159) - 2 \cdot 565 = -535\ \text{kJ/mol}$, valore vicino a quello sperimentale di $-546\ \text{kJ/mol}$. Questa stima è utile quando non si dispone di dati calorimetrici diretti, ma resta un'approssimazione, perché le energie di legame tabulate sono valori medi su molte molecole e non tengono conto dell'esatto ambiente chimico circostante.

:::image{src="assets/b686730a-ciclo-energie-legame-h2-f2.svg" alt="Diagramma a livelli con i reagenti H2 più F2 come livello di partenza, gli atomi separati come livello intermedio più alto raggiunto rompendo i legami (436 più 159 kJ assorbiti), e i prodotti 2 HF come livello finale più basso raggiunto formando i legami (2 volte 565 kJ rilasciati), con ΔH netto di circa meno 535 kJ per mole" caption="Fig. 7.3 — Stima di ΔH dalle energie di legame per H2(g) + F2(g) → 2 HF(g): energia assorbita per rompere i legami H-H e F-F, energia rilasciata nella formazione dei legami H-F, e ΔH netto risultante"}
:::

**Errore tipico 7.5.** Trattare l'energia di legame come se fosse l'entalpia di formazione della molecola: l'energia di legame si riferisce alla rottura del legame in atomi gassosi isolati, non alla formazione del composto dagli elementi nei loro stati standard; i due calori sono legati, ma non sono la stessa grandezza, e andranno distinti chiaramente dalle entalpie standard di formazione trattate in [Legge di Hess ed entalpie standard di formazione](ref:chapter/7#p5).

## p4 | Calorimetria

La calorimetria è l'insieme delle tecniche sperimentali con cui si misura la quantità di calore scambiata in una trasformazione fisica o chimica. Il problema di partenza è che l'entalpia $H$ di un sistema non è misurabile in assoluto, perché non esiste uno stato di riferimento a cui assegnare $H=0$; è invece misurabile la sua variazione $\Delta H$. La strategia sperimentale consiste nel realizzare un ambiente che non scambi calore con l'esterno (il calorimetro), misurare con un termometro la variazione di temperatura che il processo provoca in questo ambiente, e risalire da essa alla quantità di calore scambiata: a parità di corpo, più calore viene assorbito o liberato, maggiore o minore è la temperatura raggiunta.

### Calore specifico e capacità termica

Ogni corpo possiede una propria capacità di assorbire calore, detta **capacità termica** $C$: è la quantità di calore necessaria per variare di 1 K la temperatura dell'intero corpo.

:::formula{id="7.5" label="Capacità termica"}
$$C = \frac{q}{\Delta T}$$
:::

La capacità termica è una grandezza estensiva, perché dipende dalla quantità di materia considerata. Riferendo la capacità termica all'unità di massa si ottiene il **calore specifico** $c$, cioè la quantità di calore necessaria per variare di 1 K la temperatura dell'unità di massa di una sostanza:

$$c = \frac{q}{\Delta T \cdot m}, \qquad \lbrack c\rbrack  = \frac{J}{g \cdot K}$$

Il calore specifico è una grandezza intensiva, caratteristica della sostanza: non dipende dalla quantità di campione, a differenza della capacità termica. Riarrangiando la definizione si ottiene la relazione usata nella pratica per calcolare il calore scambiato da una massa $m$ di sostanza quando la sua temperatura varia di $\Delta T$, già introdotta a proposito dell'energia, calore e lavoro: [formula (1.8)](ref:formula/1.8).

Riferendo invece la capacità termica all'unità di sostanza (1 mol) si ottiene il **calore specifico molare** $C_m$, cioè la quantità di calore necessaria per variare di 1 K la temperatura di 1 mol di sostanza:

:::formula{id="7.6" label="Calore specifico molare"}
$$C_m = \frac{q}{\Delta T \cdot n}$$
:::

I metalli hanno in genere un calore specifico basso; la conducibilità termica, che descrive la rapidità con cui il calore si propaga in una sostanza, è una proprietà distinta dal calore specifico e non ne determina il valore. Lo strumento che misura la quantità di calore scambiata in un processo è il **calorimetro**.

### Esempio svolto (calore specifico)

Si vuole calcolare il calore necessario per scaldare una lamina di rame di massa $m = 125$ g da $25,0$ °C a $300$ °C, sapendo che il calore specifico del rame è $c = 0,387$ J/(g·K).

1. Dati: $m = 125$ g, $T_1 = 25,0$ °C, $T_2 = 300$ °C, $c = 0,387$ J/(g·K).
2. Strategia: si usa [formula (1.8)](ref:formula/1.8) nella forma $q = \Delta T \cdot m \cdot c$. Poiché la formula coinvolge una differenza di temperatura e non una temperatura assoluta, non è necessario convertire i gradi Celsius in kelvin: la scala Celsius e quella Kelvin hanno la stessa ampiezza di grado, quindi $\Delta T$ ha lo stesso valore numerico in entrambe.
3. Calcolo:

$$q = (300 - 25,0) \cdot 125 \cdot 0,387 \ \text{J} = 1,33 \times 10^4 \ \text{J}$$

4. Verifica: il segno di $q$ è positivo, coerente con un riscaldamento (calore entrante nel sistema); l'ordine di grandezza (decine di kJ per decine di grammi riscaldati di oltre 200 K) è ragionevole.

### Il calorimetro a pressione costante e a volume costante

Esistono due schemi calorimetrici fondamentali, a seconda che il processo avvenga a pressione costante o a volume costante; la scelta determina quale funzione di stato si ricava direttamente dalla misura.

Nel **calorimetro a pressione costante** il campione (a temperatura nota) viene immerso in una massa nota di acqua, lasciata libera di comunicare con la pressione atmosferica del laboratorio; agitando l'acqua il calore rilasciato o assorbito dal campione si distribuisce uniformemente, e si misura la temperatura finale dell'acqua. Il bilancio energetico del sistema isolato campione+acqua impone che il calore ceduto dal campione sia pari (con segno opposto) a quello acquisito dall'acqua:

:::formula{id="7.7" label="Bilancio calorimetrico a pressione costante"}
$$-q_{\text{campione}} = q_{\text{H}_2\text{O}} \quad \Longrightarrow \quad c_{\text{campione}} = -\frac{c_{\text{H}_2\text{O}} \cdot m_{\text{H}_2\text{O}} \cdot \Delta T_{\text{H}_2\text{O}}}{m_{\text{campione}} \cdot \Delta T_{\text{campione}}}$$
:::

Poiché la trasformazione avviene a contatto con l'atmosfera, il calore scambiato è $q_p$, e per la relazione tra entalpia e calore a pressione costante già stabilita in [questa sezione](ref:chapter/7#p3) vale {{formula:7.3}}. Se si vuole riscaldare o raffreddare una quantità nota $n$ di una sostanza pura di calore specifico molare $C_m$, il calore necessario a pressione costante si esprime come

$$\Delta H = q_p = n \cdot C_m \cdot (T_2 - T_1)$$

:::image{src="assets/dc2a9500-diagramma-riscaldamento-pressione-costante.svg" alt="Diagramma a due livelli: stato a T1 e stato a T2, collegati da una freccia ΔH" caption="Fig. 7.4 — Variazione di entalpia nel riscaldamento di una sostanza pura a pressione costante: il calore scambiato coincide con ΔH del processo."}
:::

cioè, in questo caso, il calore necessario per variare la temperatura della sostanza coincide con la variazione di entalpia del processo di riscaldamento stesso. Quando invece il calorimetro a pressione costante serve a misurare il calore di una reazione o di una dissoluzione, la temperatura misurata è quella dell'ambiente calorimetrico (soluzione e contenitore), e il calore di reazione ha segno opposto a quello assorbito da questo ambiente: $q_{\text{reazione}} = -q_{\text{soluzione}} - q_{\text{calorimetro}}$, con $\Delta H_{\text{reazione}} = q_{\text{reazione}}$ a pressione costante.

Nel **calorimetro a volume costante**, detto **bomba calorimetrica**, il campione (tipicamente un combustibile) viene posto insieme a O2 in un recipiente metallico rigido e sigillato (la "bomba"), immerso in un bagno d'acqua termicamente isolato e agitato, dotato di termometro; una resistenza elettrica innesca la combustione, e il calore sviluppato innalza la temperatura della bomba, dell'acqua e delle altre parti del calorimetro. Poiché il volume del sistema è fissato dalle pareti rigide, non viene compiuto lavoro di espansione ($w = -p\Delta V = 0$), e il primo principio $\Delta U = q + w$ si riduce a

:::formula{id="7.8" label="Calore a volume costante ed energia interna"}
$$\Delta U_{\text{reazione}} = q_{v,\text{reazione}} = -C_{\text{calorimetro}} \cdot \Delta T$$
:::

Il calore di reazione a volume costante coincide quindi con la variazione di energia interna della reazione, e non con $\Delta H$; la temperatura che aumenta è quella della bomba e del bagno d'acqua, non quella della reazione, perciò il calore assorbito da queste parti ha segno opposto al calore liberato dalla combustione. Conoscendo la capacità termica complessiva del calorimetro $C_{\text{calorimetro}}$ (determinata una volta per tutte con una reazione di riferimento a calore noto), si usa il $\Delta T$ misurato per risalire al calore di reazione secondo la relazione precedente. Questa relazione non è valida se il sistema scambia anche lavoro meccanico con l'esterno, cioè nelle trasformazioni a pressione costante, per le quali occorre invece usare $q_p = \Delta H$.

Nella maggior parte delle reazioni che coinvolgono solo solidi e liquidi $\Delta V \approx 0$, per cui i due tipi di misura danno risultati quasi coincidenti ($\Delta U \approx \Delta H$); quando invece sono coinvolti gas, la differenza fra $q_p$ e $q_v$ va corretta con la relazione tra $\Delta H$ e $\Delta U$ {{formula:7.4}}, già discussa a proposito delle equazioni termochimiche.

**Errore tipico 7.6**: confondere il calore misurato in un calorimetro a volume costante (una bomba calorimetrica, che fornisce $\Delta U$) con il $\Delta H$ di reazione tabulato nei dati termochimici standard, che si riferisce invece a trasformazioni a pressione costante; i due valori coincidono solo in assenza di variazione del numero di moli gassose, e in generale differiscono di $\Delta n_{\text{gas}} RT$.

**Errore tipico 7.7**: dimenticare che, nella relazione $q = c \cdot m \cdot \Delta T$, la differenza di temperatura $\Delta T$ ha lo stesso valore numerico in kelvin e in gradi Celsius, per cui non è necessaria alcuna conversione quando si calcola una variazione; la conversione $T(\text{K}) = t(^\circ\text{C}) + 273{,}15$ resta invece obbligatoria ogni volta che una formula richiede una temperatura assoluta (per esempio in $pV = nRT$).

## p5 | Legge di Hess ed entalpie standard di formazione

La legge di Hess permette di calcolare la variazione di entalpia di una reazione senza doverla misurare in laboratorio, sfruttando il fatto che l'entalpia è una funzione di stato. È uno strumento essenziale ogni volta che la reazione di interesse è troppo lenta, troppo pericolosa, o semplicemente non avviene in modo completo e pulito, come nel caso della formazione diretta del metano dai suoi elementi.

### Enunciato e ipotesi della legge di Hess

**Teorema 7.1** (legge di Hess). *Ipotesi*: tutte le reazioni considerate avvengono a pressione costante, cosicché il calore scambiato coincide con la variazione di entalpia ($\Delta H = q_p$, già introdotta in [Entalpia ed equazioni termochimiche](ref:chapter/7#p3)). *Tesi*: se una reazione complessiva può essere scomposta in una successione di reazioni parziali, la variazione di entalpia della reazione complessiva è uguale alla somma delle variazioni di entalpia delle singole tappe.

La legge di Hess è un'applicazione diretta del primo principio della termodinamica ai processi isobari: poiché $H$ dipende solo dallo stato iniziale e finale del sistema e non dal percorso seguito, il valore totale di $\Delta H$ è lo stesso sia che la trasformazione avvenga in un unico passaggio sia che avvenga attraverso stadi intermedi.

:::formula{id="7.9" label="Legge di Hess"}
$$\Delta H_{\text{complessiva}} = \sum_i \Delta H_i$$
:::

dove la somma è estesa a tutte le equazioni termochimiche parziali, opportunamente manipolate, che si combinano per dare l'equazione obiettivo.

Per applicare la legge si segue una procedura in quattro passi.

1. Si scrive l'equazione chimica obiettivo, quella il cui $\Delta H$ è incognito.
2. Si scrivono le equazioni termochimiche note, con i rispettivi valori di $\Delta H$.
3. Si manipolano queste equazioni finché reagenti e prodotti non compaiono dalla parte corretta rispetto all'equazione obiettivo: se una reazione va invertita, il segno di $\Delta H$ cambia; se va moltiplicata per un fattore $n$, anche $\Delta H$ va moltiplicato per $n$.
4. Si somma membro a membro le equazioni modificate, verificando che la somma delle specie coincida esattamente con l'equazione obiettivo (le specie che compaiono in uguale quantità da entrambe le parti si cancellano); la somma algebrica dei $\Delta H$ modificati fornisce il $\Delta H$ della reazione obiettivo.

**Esempio svolto 7.5.** Date l'ossidazione del monossido di carbonio,

$$
\mathrm{CO_{(g)} + \tfrac{1}{2}O_{2(g)} \to CO_{2(g)}}, \qquad \Delta H_1 = -283{,}0 \ \text{kJ/mol}
$$

e la reazione di formazione del monossido d'azoto dai suoi elementi,

$$
\mathrm{\tfrac{1}{2}N_{2(g)} + \tfrac{1}{2}O_{2(g)} \to NO_{(g)}}, \qquad \Delta H_2 = +90{,}3 \ \text{kJ/mol}
$$

calcolare la variazione di entalpia della reazione

$$
\mathrm{CO_{(g)} + NO_{(g)} \to CO_{2(g)} + \tfrac{1}{2}N_{2(g)}}
$$

*Strategia.* Si confronta la posizione di ciascuna specie nell'equazione obiettivo con quella nelle equazioni note. La reazione 1 ha già CO tra i reagenti e $\mathrm{CO_2}$ tra i prodotti, quindi è conforme e va usata tale e quale. Nella reazione 2, invece, NO compare tra i prodotti mentre nell'obiettivo compare tra i reagenti: la reazione va perciò invertita, cambiando il segno di $\Delta H_2$.

*Calcolo.* Invertendo la reazione 2 si ottiene
$$\mathrm{NO_{(g)} \to \tfrac{1}{2}N_{2(g)} + \tfrac{1}{2}O_{2(g)}}, \qquad \Delta H_2' = -90{,}3 \ \text{kJ/mol}$$

Sommando questa equazione alla reazione 1,
$$\mathrm{CO_{(g)} + \tfrac{1}{2}O_{2(g)} + NO_{(g)} \to CO_{2(g)} + \tfrac{1}{2}N_{2(g)} + \tfrac{1}{2}O_{2(g)}}$$
l'ossigeno, presente con lo stesso coefficiente da entrambe le parti, si cancella, lasciando esattamente l'equazione obiettivo. Il calore di reazione cercato è quindi
$$\Delta H = \Delta H_1 + \Delta H_2' = -283{,}0 + (-90{,}3) = -373{,}3 \ \text{kJ/mol}$$

*Verifica.* L'equazione somma coincide atomo per atomo con quella obiettivo e nessuna specie oltre all'ossigeno è stata introdotta o persa: la combinazione è corretta.

### Entalpie standard di formazione e calcolo di $\Delta H^\circ_r$

Molti dati termodinamici sono tabulati riferendosi a uno stato standard: per un gas, 1 bar e comportamento ideale; per una specie in soluzione acquosa, concentrazione 1 mol/L; per una sostanza pura, la sua forma più stabile a 1 bar e 25 °C. Una grandezza misurata in queste condizioni porta un apice "°".

**Definizione 7.6** (entalpia standard di formazione). L'entalpia standard di formazione $\Delta H^\circ_f$ di una sostanza è la variazione di entalpia della reazione in cui si forma una mole del composto, nel suo stato standard, a partire dagli elementi costituenti nei rispettivi stati standard. Per esempio, per il metano:

$$
\mathrm{C_{(grafite)} + 2H_{2(g)} \to CH_{4(g)}}, \qquad \Delta H^\circ_f = -74{,}8 \ \text{kJ/mol a 25 °C}
$$

Due conseguenze della definizione vanno ricordate con cura.

- A un elemento nel suo stato standard è assegnata per convenzione $\Delta H^\circ_f = 0$. Attenzione: la condizione riguarda lo stato standard, non una qualunque forma dell'elemento; per esempio $\Delta H^\circ_f(\mathrm{Na_{(s)}}) = 0$, ma $\Delta H^\circ_f(\mathrm{Na_{(g)}}) \ne 0$, perché il sodio allo stato standard è solido e non gassoso.
- La maggior parte dei composti ha $\Delta H^\circ_f < 0$: la loro formazione dagli elementi nei rispettivi stati standard è entalpicamente favorita.

Poiché $H$ è una funzione di stato, la legge di Hess permette di scrivere qualunque reazione come differenza tra una formazione dei prodotti e una formazione dei reagenti (percorso virtuale passante per gli elementi), ottenendo una formula di calcolo molto più rapida della combinazione equazione per equazione.

:::formula{id="7.10" label="Entalpia standard di reazione dalle entalpie di formazione"}
$$\Delta H^\circ_r = \sum_{\text{prodotti}} m\, \Delta H^\circ_f - \sum_{\text{reagenti}} n\, \Delta H^\circ_f$$
:::

dove $m$ e $n$ sono i coefficienti stechiometrici delle specie nell'equazione bilanciata.

**Esempio svolto 7.6.** L'ammoniaca reagisce con l'ossigeno per produrre monossido di azoto e acqua gassosa, secondo:

$$
\mathrm{4NH_{3(g)} + 5O_{2(g)} \to 4NO_{(g)} + 6H_2O_{(g)}}
$$

Le entalpie standard di formazione, nell'ordine $\mathrm{NH_3}$, $\mathrm{O_2}$, $\mathrm{NO}$, $\mathrm{H_2O_{(g)}}$, sono $-45{,}9$; $0$; $+90{,}3$; $-241{,}8 \ \text{kJ/mol}$. Si vuole calcolare $\Delta H^\circ_r$.

*Strategia.* Si applica la formula {{formula:7.10}}, moltiplicando ogni $\Delta H^\circ_f$ per il proprio coefficiente stechiometrico e notando che $\Delta H^\circ_f(\mathrm{O_2}) = 0$ perché è un elemento nel suo stato standard.

*Calcolo.*
$$\begin{aligned}
\Delta H^\circ_r &= \left[4\Delta H^\circ_f(\mathrm{NO}) + 6\Delta H^\circ_f(\mathrm{H_2O})\right] - \left[4\Delta H^\circ_f(\mathrm{NH_3}) + 5\Delta H^\circ_f(\mathrm{O_2})\right] \\
&= \left[4(90{,}3) + 6(-241{,}8)\right] - \left[4(-45{,}9) + 5(0)\right] \\
&= \left[361{,}2 - 1450{,}8\right] - \left[-183{,}6\right] \\
&= -1089{,}6 + 183{,}6 = -906{,}0 \ \text{kJ}
\end{aligned}$$

*Verifica.* Il valore è negativo, coerente con una combustione (fortemente esotermica); il risultato è riferito ai coefficienti scritti nell'equazione bilanciata, quindi a 4 mol di $\mathrm{NH_3}$ consumate.

Lo stesso principio si applica a reazioni che non avvengono in modo pulito e diretto. La formazione del metano dalla grafite e dall'idrogeno non è misurabile sperimentalmente, ma si può ricostruire con la legge di Hess usando tre reazioni note. Si considerano la combustione del metano e le reazioni di formazione della $\mathrm{CO_2}$ e dell'acqua liquida:

$$\begin{aligned}
\mathrm{CH_{4(g)} + 2O_{2(g)} \to CO_{2(g)} + 2H_2O_{(l)}} &\qquad \Delta H_1^\circ = -890{,}3\ \text{kJ/mol} \\
\mathrm{C_{(grafite)} + O_{2(g)} \to CO_{2(g)}} &\qquad \Delta H_2^\circ = -393{,}5\ \text{kJ/mol} \\
\mathrm{2H_{2(g)} + O_{2(g)} \to 2H_2O_{(l)}} &\qquad \Delta H_3^\circ = -571{,}6\ \text{kJ/mol}
\end{aligned}$$

Invertendo la prima equazione, il suo $\Delta H^\circ$ cambia segno. Sommando le equazioni così modificate, si cancellano $\mathrm{CO_2}$, $\mathrm{H_2O}$ e $\mathrm{O_2}$ presenti da entrambi i membri e si ottiene la reazione obiettivo:

$$\begin{aligned}
\mathrm{CO_{2(g)} + 2H_2O_{(l)} + C_{(grafite)} + 2H_{2(g)}} &\to \mathrm{CH_{4(g)} + 2O_{2(g)} + CO_{2(g)} + 2H_2O_{(l)}} \\
\mathrm{C_{(grafite)} + 2H_{2(g)}} &\to \mathrm{CH_{4(g)}}
\end{aligned}$$

La variazione di entalpia standard è la somma dei valori modificati:

$$\Delta H_r^\circ = -\Delta H_1^\circ + \Delta H_2^\circ + \Delta H_3^\circ = 890{,}3 - 393{,}5 - 571{,}6 = -74{,}8\ \text{kJ/mol}$$

:::image{src="assets/f55cd940-ciclo-hess-metano.svg" alt="Diagramma a livelli che mostra il ciclo di Hess usato per calcolare l'entalpia di formazione del metano" caption="Fig. 7.5 — Ciclo di Hess per la formazione del metano dalla grafite e dall'idrogeno, passando per la combustione del metano e la formazione di CO2 e H2O(l)"}
:::

### Errori tipici

- **Dimenticare l'inversione di segno.** Se una reazione nota va scritta "al contrario" rispetto all'equazione obiettivo, il suo $\Delta H$ cambia segno; omettere questo passaggio è l'errore più comune nell'applicazione della legge di Hess.
- **Trascurare lo stato di aggregazione.** Il $\Delta H^\circ_f$ dell'acqua liquida e quello dell'acqua gassosa sono diversi: la differenza tra i due corrisponde esattamente al calore di vaporizzazione, $\Delta H_{\text{vap}} \approx 44 \ \text{kJ/mol}$. Usare per errore il valore riferito alla fase sbagliata falsa completamente il risultato.
- **Assegnare $\Delta H^\circ_f = 0$ a un elemento che non è nel suo stato standard.** La convenzione vale solo per la forma stabile a 25 °C e 1 bar (per esempio $\mathrm{Na_{(s)}}$, non $\mathrm{Na_{(g)}}$).
- **Confondere il coefficiente stechiometrico della sostanza di riferimento.** Quando ci si riferisce al $\Delta H^\circ_f$ di una mole di un certo composto, quel composto deve avere coefficiente 1 nell'equazione, anche se questo costringe a usare coefficienti frazionari per le altre specie, come in $\mathrm{H_{2(g)} + \tfrac{1}{2}O_{2(g)} \to H_2O_{(l)}}$ e non $\mathrm{2H_{2(g)} + O_{2(g)} \to 2H_2O_{(l)}}$.
