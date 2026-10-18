---
chapter: 4
title: Stechiometria
---

## p1 | Introduzione

La stechiometria collega le formule delle sostanze alle quantità che partecipano a una reazione. Serve a interpretare i dati di un’analisi e a prevedere quanto reagente occorre o quanto prodotto si può ottenere, tenendo conto delle proporzioni imposte dall’equazione chimica. Per affrontare il capitolo è necessario conoscere le formule e la nomenclatura dei composti inorganici, oltre a saper usare moli e masse molari.

Al termine saprai ricavare formule empiriche e molecolari da percentuali in massa e da dati di analisi per combustione. Imparerai a tradurre una reazione in un’equazione e a bilanciarla rispettando la conservazione degli atomi e, nelle reazioni redox, della carica. Userai poi i coefficienti dell’equazione per passare dalle quantità di una sostanza a quelle di un’altra. Nei problemi con più reagenti individuerai quello limitante e calcolerai quanto reagente resta in eccesso. Infine, confronterai la quantità di prodotto ottenuta con quella teoricamente prevista per determinare la resa percentuale e risalire alla quantità di reagente necessaria per ottenere un prodotto desiderato.

## p2 | Composizione percentuale e formule empiriche

La formula di un composto non dice soltanto quali elementi lo costituiscono, ma fissa anche un rapporto in massa costante tra di essi: è la legge delle proporzioni definite di Proust, già introdotta in [Leggi fondamentali e teoria atomica di Dalton](ref:chapter/2#p2). Questa sezione mostra come usare quel rapporto in due direzioni opposte: dalla formula alla composizione percentuale, e dalla composizione percentuale (ottenuta sperimentalmente, anche per combustione) alla formula minima e alla formula molecolare.

### Composizione percentuale in massa

**Definizione 4.1** (percentuale in massa). Dato un composto di massa molare $MM_{\text{composto}}$, in cui l'elemento $E$ (massa atomica media $MA_E$) compare con pedice $a$ nella formula, la percentuale in massa di $E$ è

:::formula{id="4.1" label="Percentuale in massa di un elemento in un composto"}
$$\%E = \frac{a \cdot MA_E}{MM_{\text{composto}}} \cdot 100$$
:::

Questa grandezza si calcola dividendo la massa dell'elemento contenuta in una mole di composto per la massa molare dell'intero composto, e moltiplicando per 100. È utile perché, conoscendo la massa totale di un campione, permette di risalire alla massa effettiva di un singolo elemento al suo interno, senza bisogno di analizzarlo separatamente.

**Esempio svolto 4.1.** Calcolare la percentuale in massa di idrogeno nel glucosio, $C_6H_{12}O_6$.

1. Dati: $a_H = 12$, $MA_H = 1,01$ u, $MM_{C_6H_{12}O_6} = 180,18\ \text{g/mol}$.
2. Strategia: applicare {{formula:4.1}} con l'elemento idrogeno.
3. Calcolo:

$$\%H = \frac{12 \cdot 1,01}{180,18} \cdot 100 = 6,73\%$$

4. Verifica: la somma delle percentuali di C, H e O nel glucosio deve dare 100%; il valore trovato per H (6,73%) è coerente con l'ordine di grandezza atteso, essendo l'idrogeno l'elemento più leggero presente in grande quantità relativa.

Lo stesso procedimento, applicato al carbonato di ammonio, dà $\%H = 8,41\%$.

**Errore tipico 4.1.** Confondere il pedice $a$ con il numero di atomi di $E$ in una singola molecola presente in un campione qualsiasi, invece di riconoscere che esso rappresenta anche il numero di moli di atomi di $E$ per mole di composto: il calcolo della percentuale in massa funziona proprio perché i pedici della formula si leggono indifferentemente come rapporto di atomi o come rapporto di moli.

### Dalla composizione percentuale alla formula minima

**Definizione 4.2** (formula minima). La formula minima, o empirica, indica il rapporto di numeri interi più semplice tra le quantità (in moli) di ciascun elemento presente in un composto. Per le sostanze ioniche o polimeriche, in cui non esistono molecole discrete, la formula minima è l'unica formula possibile: ad esempio nel cloruro di sodio ogni ione Na+ è circondato da sei ioni Cl- e viceversa, con rapporto 1:1.

Per ricavare la formula minima a partire da dati analitici si procede così.

1. Si esprime la massa di ciascun elemento in 100 g di composto, cioè si usa direttamente la percentuale in massa come numero di grammi su 100 g di campione.
2. Si convertono le masse in moli dividendo per la massa molare $M_E$ di ciascun elemento, $n_E = m_E/M_E$, con $M_E$ espressa in g/mol; numericamente, $M_E$ coincide con la massa atomica media $MA_E$ espressa in u, perciò nei calcoli si può usare direttamente il valore di $MA_E$.
3. Si divide il numero di moli di ciascun elemento per il più piccolo tra essi, ottenendo i pedici candidati.
4. Se qualche pedice non è un numero intero (entro l'incertezza sperimentale), si moltiplicano tutti i pedici per il più piccolo intero che li rende tutti interi.
5. Si scrivono gli elementi con i rispettivi pedici interi.

**Esempio svolto 4.2.** Un composto ionico contiene 0,21 mol di zinco, 0,14 mol di fosforo e 0,56 mol di ossigeno. Determinare la formula minima.

1. Dati: $n_{Zn} = 0,21$ mol, $n_P = 0,14$ mol, $n_O = 0,56$ mol.
2. Strategia: dividere ogni valore per il più piccolo, poi eliminare eventuali frazioni.
3. Calcolo:

$$\text{Zn}: \frac{0,21}{0,14} = 1,5 \qquad \text{P}: \frac{0,14}{0,14} = 1 \qquad \text{O}: \frac{0,56}{0,14} = 4,0$$

Il pedice dello zinco (1,5) non è intero; moltiplicando tutti i pedici per 2 si ottengono numeri interi.

4. Verifica: $\text{Zn}_3\text{P}_2\text{O}_8$ è la formula minima, ed è elettricamente coerente con ioni Zn2+ e PO4^3- (fosfato di zinco).

### Dalla formula minima alla formula molecolare

**Definizione 4.3** (formula molecolare). La formula molecolare indica il numero reale di atomi di ciascun elemento presente in una molecola del composto; in alcuni casi coincide con la formula minima (come per H2O), in altri ne è un multiplo intero. Per determinarla serve conoscere, oltre alla composizione percentuale, anche la massa molare sperimentale del composto, perché la sola composizione percentuale non distingue, ad esempio, HO da H2O2.

Il multiplo si trova con il fattore

$$f = \frac{MM_{\text{sperimentale}}}{MM_{\text{formula minima}}}$$

già introdotto come [formula (3.1)](ref:formula/3.1) in [Simboli, formule e ioni](ref:chapter/3#p2); il valore di $f$, arrotondato all'intero più vicino, moltiplica tutti i pedici della formula minima.

**Esempio svolto 4.3.** Un composto contiene 5,9% di H e 94,0% di O; la massa molecolare sperimentale è 34,10 u. Determinare la formula molecolare.

1. Dati: in 100 g di composto, 5,9 g di H e 94,0 g di O; $MM_{\text{sper}} = 34,10$ g/mol.
2. Strategia: ricavare prima la formula minima, poi applicare il fattore $f$.
3. Calcolo: $n_H = 5,9/1,01 \approx 5,9$ mol, $n_O = 94,0/16,00 \approx 5,9$ mol; il rapporto è 1:1, quindi la formula minima è HO, con $MM_{\text{formula minima}} = 1,01 + 16,00 = 17,01$ g/mol. Il fattore è

$$f = \frac{34,10}{17,01} \approx 2$$

4. Verifica: moltiplicando i pedici di HO per 2 si ottiene la formula molecolare H2O2, perossido di idrogeno, coerente con la massa molecolare data.

Anche l'acido lattico ($MM = 90,08$ g/mol, composizione 40,0% C, 6,71% H, 53,3% O) segue lo stesso schema: la formula minima risulta CH2O ($MM = 30,03$ g/mol) e, poiché $f = 90,08/30,03 \approx 3$, la formula molecolare è C3H6O3.

:::image{src="assets/1910c3dc-acido-lattico-struttura.svg" alt="Struttura di Lewis dell'acido lattico C3H6O3" caption="Fig. 4.1 — Acido lattico (C3H6O3): la formula minima CH2O, moltiplicata per il fattore f=3, porta a questa formula molecolare con un gruppo ossidrile e un gruppo carbossilico."}
:::

### Determinazione della formula tramite analisi per combustione

Quando il composto incognito contiene carbonio e idrogeno, ed eventualmente un terzo elemento, un metodo sperimentale diffuso per ottenere le masse degli elementi costituenti è l'analisi per combustione: il campione viene bruciato in ossigeno puro in un apparecchio con una camera di combustione seguita da assorbitori che catturano in sequenza l'acqua prodotta, tutto l'idrogeno del campione, e il biossido di carbonio prodotto, tutto il carbonio del campione. Dalle masse di CO2 e H2O raccolte si calcolano le moli, e quindi le masse, di carbonio e idrogeno originari; la massa di un eventuale terzo elemento si ottiene per differenza rispetto alla massa totale del campione bruciato.

**Esempio svolto 4.4.** 1,000 g di vitamina C ($MM = 176,12$ g/mol) viene bruciato, producendo un aumento di massa di 1,50 g nell'assorbitore di CO2 e di 0,410 g in quello di H2O. Determinare la formula molecolare.

1. Dati: $m_{CO_2} = 1,50$ g, $m_{H_2O} = 0,410$ g, massa campione $= 1,000$ g, $MM = 176,12$ g/mol.
2. Strategia: ricavare le moli di C e H dalle moli di CO2 e H2O, ottenere la massa di O per differenza, calcolare i pedici e infine la formula molecolare con il fattore $f$.
3. Calcolo:

$$n_{CO_2} = \frac{1,50}{44,01} = 3,40 \times 10^{-2}\ \text{mol} = n_C$$

$$n_{H_2O} = \frac{0,410}{18,02} = 2,28 \times 10^{-2}\ \text{mol} \;\Rightarrow\; n_H = 4,55 \times 10^{-2}\ \text{mol}$$

Le masse corrispondenti sono $m_C = 0,408$ g e $m_H = 4,60 \times 10^{-2}$ g; per differenza $m_O = 1,000 - 0,408 - 0,0460 = 0,546$ g, da cui $n_O = 0,546/16,00 = 3,41 \times 10^{-2}$ mol.

Dividendo per il più piccolo valore ($3,40 \times 10^{-2}$ mol) si ottengono i pedici $C:1$, $H:1,34$, $O:1$; moltiplicando per 3 si eliminano le frazioni e si ottiene la formula minima C3H4O3, con $MM = 88,07$ g/mol.

4. Verifica: il fattore $f = 176,12/88,07 \approx 2$ dà la formula molecolare C6H8O6, che è effettivamente la formula della vitamina C, l'acido ascorbico.

:::image{src="assets/1910c3dc-acido-ascorbico-struttura.svg" alt="Struttura scheletrica dell'acido ascorbico C6H8O6" caption="Fig. 4.2 — Acido ascorbico, la vitamina C (C6H8O6): la formula molecolare ottenuta moltiplicando per 2 la formula minima C3H4O3 ricavata dall'analisi per combustione."}
:::

**Errore tipico 4.2.** Fermarsi alla formula minima quando la domanda chiede la formula molecolare, oppure dimenticare che la massa molare sperimentale del composto è un dato indispensabile, non deducibile dalla sola percentuale in massa, per calcolare il fattore $f$: senza di essa, infiniti multipli della formula minima restano compatibili con la composizione percentuale osservata.

## p3 | Equazioni chimiche e bilanciamento

Una **reazione chimica** è il processo in cui una o più sostanze (i reagenti) si trasformano in sostanze differenti (i prodotti), con riarrangiamento degli atomi che le compongono. Il processo si descrive in modo sintetico con una **equazione chimica**, un enunciato in formule che esprime le identità e le quantità delle sostanze coinvolte nella trasformazione: il primo membro riporta le sostanze presenti prima della trasformazione (i reagenti), il secondo membro quelle presenti dopo (i prodotti).

$$\text{reagenti} \rightarrow \text{prodotti}$$

Schematicamente, per una reazione generica tra due sostanze A e B che danno il composto AB si scrive $A + B \rightarrow AB$. Il simbolo $\rightarrow$ si usa per le reazioni che si considerano complete; per i processi di equilibrio, trattati nei capitoli successivi, si userà invece $\rightleftharpoons$.

L'equazione chimica, una volta bilanciata, non è una semplice annotazione qualitativa: contiene informazioni quantitative precise sul rapporto in cui le sostanze si combinano, espresse in numero di particelle, in numero di moli e, tramite le masse molari, in massa. È per questo motivo che la scrittura corretta e il bilanciamento di un'equazione sono il punto di partenza di ogni calcolo stechiometrico, oggetto delle sezioni successive di questo capitolo.

### Dalla descrizione verbale all'equazione chimica

Il primo passo nello studio di una reazione è tradurre in simboli la descrizione a parole del processo. Si procede così.

1. Si identificano i reagenti e i prodotti e si scrivono le loro formule chimiche corrette (molecolari, minime o ioniche, secondo le regole di nomenclatura già introdotte in [Classi di composti e regole di nomenclatura](ref:chapter/3#p4), [Ossidi, idrossidi, perossidi e idruri](ref:chapter/3#p5), [Idracidi, ossiacidi e composti anfoteri](ref:chapter/3#p6) e [Sali](ref:chapter/3#p7)).
2. Si pongono i reagenti al primo membro e i prodotti al secondo membro, separati dalla freccia di reazione, ciascuno separato dagli altri reagenti (o prodotti) con un segno $+$.
3. Se richiesto, si specifica lo stato di aggregazione di ciascuna sostanza con un pedice tra parentesi: solido $(s)$, liquido $(l)$, gassoso $(g)$, oppure, se la sostanza è disciolta in acqua, soluzione acquosa $(aq)$.

Ad esempio, la reazione tra magnesio metallico e ossigeno gassoso che produce ossido di magnesio solido si traduce prima come $Mg + O_2 \rightarrow MgO$, e, una volta bilanciata e completata con gli stati fisici, come $2\,Mg_{(s)} + O_{2(g)} \rightarrow 2\,MgO_{(s)}$.

**Errore tipico 4.3**

Uno sbaglio frequente nella fase di traduzione è modificare una formula chimica già corretta per anticipare il bilanciamento (per esempio scrivere $MgO_2$ pensando di dover "usare" tutto l'ossigeno). Le formule delle sostanze coinvolte sono fissate dalla loro composizione reale e non si possono alterare: il bilanciamento si ottiene esclusivamente agendo sui coefficienti stechiometrici, mai sugli indici delle formule.

### Bilanciamento per ispezione

**Definizione 4.4** (coefficiente stechiometrico). Un coefficiente stechiometrico è il numero intero che si antepone alla formula di un reagente o di un prodotto in un'equazione chimica; esso moltiplica tutti gli atomi presenti in quella formula e indica il rapporto in cui le entità (o le moli di entità) partecipano alla reazione. Per esempio, il coefficiente 2 davanti a $Ca(NO_3)_2$ significa 2 atomi di Ca, 4 di N e 12 di O, perché il coefficiente moltiplica tutti gli atomi della formula, inclusi quelli racchiusi tra parentesi.

**Teorema 4.1** (legge di Lavoisier, o di conservazione della massa). In un sistema chiuso la somma delle masse delle sostanze prima della reazione è uguale alla somma delle masse delle sostanze dopo la reazione; la massa non può essere creata né distrutta, perché il numero e la natura degli atomi restano inalterati nel corso della trasformazione. Questa legge, già incontrata in [Leggi fondamentali e teoria atomica di Dalton](ref:chapter/2#p2), è la ragione per cui un'equazione chimica deve essere **bilanciata**: nei due membri deve comparire lo stesso numero di atomi di ciascun elemento.

Il metodo più diretto per bilanciare un'equazione, adatto alla grande maggioranza delle reazioni non redox, è il **bilanciamento per ispezione**, che procede per tentativi secondo questi passi:

1. si traduce l'enunciato in simboli, come descritto sopra;
2. si bilanciano gli atomi aggiungendo coefficienti davanti alle formule, partendo dagli elementi diversi da H e O (che vengono bilanciati per ultimi, come verifica);
3. si aggiustano i coefficienti in modo che siano tutti numeri interi e nel minimo rapporto possibile tra loro (coefficienti stechiometrici minimi); il coefficiente 1 non si scrive mai esplicitamente nella forma finale;
4. si verifica che il numero di atomi di ciascun elemento sia effettivamente lo stesso nei due membri.

Un'equazione bilanciata resta bilanciata se si moltiplicano tutti i coefficienti per uno stesso numero; per convenzione, però, si adotta sempre la forma con i coefficienti stechiometrici interi più piccoli possibili, cioè non ulteriormente semplificabili fra loro. Durante il bilanciamento non si possono mai modificare le formule chimiche delle sostanze né aggiungere reagenti o prodotti non previsti dalla descrizione della reazione, perché in entrambi i casi si descriverebbe una reazione diversa da quella data.

**Esempio svolto 4.5**

Si bilanci la reazione di combustione completa dell'ottano, $C_8H_{18}$, che produce anidride carbonica e acqua.

:::image{src="assets/f0aef864-ottano-struttura.svg" alt="Struttura scheletrica dell'ottano (C8H18)" caption="Fig. 4.3 — Struttura scheletrica dell'ottano, C8H18, il reagente della combustione bilanciata nell'esempio svolto."}
:::

- *Dati*: reagenti $C_8H_{18}$ e $O_2$; prodotti $CO_2$ e $H_2O$.
- *Strategia*: si bilanciano prima il carbonio, poi l'idrogeno, e infine l'ossigeno per ultimo, come richiede la regola generale.
- *Calcolo*. Si parte dall'equazione non bilanciata:

$$C_8H_{18} + O_2 \rightarrow CO_2 + H_2O$$

Si bilancia il carbonio ponendo 8 davanti a $CO_2$ (gli 8 atomi di C dell'ottano devono comparire in 8 molecole di $CO_2$):

$$C_8H_{18} + O_2 \rightarrow 8\,CO_2 + H_2O$$

Si bilancia l'idrogeno: i 18 atomi di H dell'ottano richiedono 9 molecole di $H_2O$:

$$C_8H_{18} + O_2 \rightarrow 8\,CO_2 + 9\,H_2O$$

Si bilancia infine l'ossigeno, contando gli atomi di O al secondo membro: $8 \times 2 + 9 \times 1 = 25$, quindi occorrono $25/2$ molecole di $O_2$:

$$C_8H_{18} + \tfrac{25}{2}\,O_2 \rightarrow 8\,CO_2 + 9\,H_2O$$

Poiché i coefficienti devono essere interi, si moltiplica l'intera equazione per 2:

$$2\,C_8H_{18} + 25\,O_2 \rightarrow 16\,CO_2 + 18\,H_2O$$

- *Verifica*: al primo membro ci sono $2 \times 8 = 16$ atomi di C, $2 \times 18 = 36$ atomi di H e $25 \times 2 = 50$ atomi di O; al secondo membro, $16$ atomi di C (da $16\,CO_2$), $18 \times 2 = 36$ atomi di H (da $18\,H_2O$) e $16 \times 2 + 18 \times 1 = 50$ atomi di O. I coefficienti 2, 25, 16, 18 sono già nel minimo rapporto intero, quindi l'equazione bilanciata è quella scritta sopra.

### Verifica quantitativa della massa e della carica

Una volta bilanciata l'equazione, la legge di Lavoisier non è solo un vincolo formale sugli atomi, ma si può verificare numericamente passando dal numero di molecole al numero di moli (tramite la costante di Avogadro, vedi [Masse atomiche, mole e massa molare](ref:chapter/2#p5)) e quindi alla massa, tramite la massa molare. Per la sintesi dell'acqua,
$$2\,H_2 + O_2 \rightarrow 2\,H_2O,$$
considerando le quantità in moli corrispondenti ai coefficienti si trova che 4 g di idrogeno reagiscono con 32 g di ossigeno per dare 36 g di acqua: la massa totale del sistema, 36 g, è la stessa prima e dopo la reazione. Analogamente, nella formazione del cloruro di sodio da sodio e cloro, 23 g di Na più 35,4 g di Cl danno 58,4 g di NaCl, in accordo con la conservazione della massa.

**Errore tipico 4.4**

Un errore concettuale grave è pensare che i coefficienti stechiometrici indichino rapporti in grammi: l'affermazione "2 grammi di Mg più 1 grammo di $O_2$ danno 2 grammi di MgO" è falsa, perché i coefficienti si riferiscono a numero di entità o a moli di entità, non a masse dirette. La massa totale si conserva, ma il rapporto in massa tra le sostanze dipende anche dalle rispettive masse molari, e va sempre calcolato convertendo i coefficienti in moli e poi in grammi, come si vedrà nella sezione sui [Calcoli stechiometrici e reagente limitante](ref:chapter/4#p4).

Anche le reazioni di ossidoriduzione, trattate in dettaglio in [Reazioni di ossidoriduzione](ref:chapter/5#p5), possono essere bilanciate per ispezione nei casi semplici, verificando poi il numero di atomi di ciascun elemento e la carica totale nei due membri. Il metodo delle semireazioni offre una procedura sistematica, utile soprattutto nei casi complessi e nelle equazioni ioniche: occorre assegnare i coefficienti in modo che il numero di elettroni persi dall'elemento che si ossida sia uguale al numero di elettroni acquistati dall'elemento che si riduce.

### Informazioni contenute in un'equazione bilanciata

Una volta ottenuta la forma bilanciata, l'equazione chimica fornisce simultaneamente tre livelli di informazione quantitativa, tutti equivalenti tra loro:

- il rapporto in numero di atomi o molecole che reagiscono e si formano, dato direttamente dai coefficienti stechiometrici;
- il rapporto in numero di moli delle sostanze coinvolte, perché i coefficienti si interpretano indifferentemente come numero di entità o come numero di moli di entità;
- il rapporto in massa, ottenuto moltiplicando il numero di moli di ciascuna sostanza per la sua massa molare.

Questa equivalenza tra rapporto molare e rapporto di massa è la base di tutti i calcoli stechiometrici che verranno svolti nella sezione [Calcoli stechiometrici e reagente limitante](ref:chapter/4#p4), dove i coefficienti dell'equazione bilanciata saranno usati per convertire la quantità nota di una sostanza nella quantità corrispondente di un'altra sostanza coinvolta nella stessa reazione.

## p4 | Calcoli stechiometrici e reagente limitante

La stechiometria è lo studio degli aspetti quantitativi delle formule e delle reazioni chimiche. Una volta scritta e bilanciata un'equazione chimica secondo le regole viste in [Equazioni chimiche e bilanciamento](ref:chapter/4#p3), essa contiene tutte le informazioni necessarie per calcolare quante moli, e quindi quanti grammi, di ciascuna sostanza reagiscono o si formano. Il motivo per cui conviene sempre ragionare in moli, e non direttamente in grammi, è che i coefficienti stechiometrici esprimono rapporti tra numeri di particelle (e quindi tra moli), non tra masse: un confronto diretto tra le masse delle sostanze coinvolte non è possibile. I coefficienti stechiometrici, cioè i numeri interi che moltiplicano le formule in un'equazione bilanciata, indicano infatti il rapporto molare tra le sostanze che reagiscono o si formano; un coefficiente opera su tutti gli atomi della formula a cui è applicato, per esempio $2\,\mathrm{Ca(NO_3)_2}$ indica 2 atomi di Ca, 4 di N e 12 di O.

### Rapporti molari e catena di conversione

Un problema stechiometrico generico, in cui si conosce la quantità di una sostanza (reagente o prodotto) e si vuole calcolare la quantità di un'altra sostanza della stessa reazione, si risolve sempre con la stessa sequenza di passaggi.

1. Si scrive e si bilancia l'equazione chimica, se non è già data.
2. Si convertono i dati noti (massa, volume, numero di particelle) in moli, usando $n = m/M$ ([formula (2.4)](ref:formula/2.4)) oppure la relazione con il numero di Avogadro ([formula (2.5)](ref:formula/2.5)).
3. Si usano i coefficienti stechiometrici dell'equazione bilanciata per convertire le moli della sostanza nota nelle moli della sostanza incognita.
4. Si converte infine la quantità di moli trovata nell'unità richiesta dal problema (massa, volume, numero di particelle).

Questa catena si riassume spesso con lo schema massa $\to$ moli $\to$ moli $\to$ massa: le due conversioni agli estremi passano attraverso la massa molare della sostanza nota e di quella incognita, mentre il passaggio centrale, quello che usa davvero l'informazione contenuta nell'equazione bilanciata, mette in relazione le moli tramite il rapporto tra coefficienti stechiometrici.

:::formula{id="4.2" label="Rapporto molare da un'equazione bilanciata"}
$$n_B = \frac{\nu_B}{\nu_A}\, n_A$$
:::

dove $\nu_A$ e $\nu_B$ sono i coefficienti stechiometrici di $A$ e $B$ nell'equazione bilanciata e $n_A$, $n_B$ le rispettive moli. Questa relazione vale sia che $A$ e $B$ siano entrambi reagenti, entrambi prodotti, oppure un reagente e un prodotto.

**Esempio svolto 4.6** (massa di ossigeno necessaria a una combustione)

Il solfuro rameoso reagisce con l'ossigeno per produrre ossido rameoso e diossido di zolfo. Si vuole calcolare la massa di ossigeno necessaria per reagire con $1{,}59\ \mathrm{kg}$ di solfuro rameoso.

*Dati.* $m_{\mathrm{Cu_2S}} = 1{,}59 \times 10^3\ \mathrm{g}$; $M_{\mathrm{Cu_2S}} = 159{,}14\ \mathrm{g/mol}$; $M_{\mathrm{O_2}} = 32{,}00\ \mathrm{g/mol}$.

*Strategia.* Si scrive e si bilancia la reazione, si convertono i grammi di $\mathrm{Cu_2S}$ in moli, si usa il rapporto tra i coefficienti stechiometrici per ottenere le moli di $\mathrm{O_2}$, infine si riconvertono in grammi.

*Calcolo.*

$$2\,\mathrm{Cu_2S} + 3\,\mathrm{O_2} \to 2\,\mathrm{Cu_2O} + 2\,\mathrm{SO_2}$$

$$n_{\mathrm{Cu_2S}} = \frac{1{,}59 \times 10^3}{159{,}14} = 9{,}99\ \mathrm{mol}$$

$$n_{\mathrm{O_2}} = \frac{3}{2}\cdot 9{,}99 = 15{,}0\ \mathrm{mol}$$

$$m_{\mathrm{O_2}} = 15{,}0 \cdot 32{,}00 = 480\ \mathrm{g}$$

*Verifica.* Il rapporto tra i coefficienti $3/2$ corrisponde esattamente al rapporto tra le moli calcolate ($15{,}0/9{,}99 \approx 1{,}50$), e le cifre significative del risultato finale (tre) sono coerenti con quelle del dato di partenza.

Lo stesso schema si applica quando reagenti e prodotti sono più di due. Un esempio frequente alle prove d'esame è la riduzione di un minerale: l'ossido ferrico (ematite) reagisce con monossido di carbonio per dare ferro metallico e diossido di carbonio. Bilanciando si ottiene $\mathrm{Fe_2O_3(s)} + 3\,\mathrm{CO(g)} \to 2\,\mathrm{Fe(s)} + 3\,\mathrm{CO_2(g)}$; da $10{,}0\ \mathrm{kg}$ di ematite ($M = 159{,}70\ \mathrm{g/mol}$) si ricavano $n_{\mathrm{Fe_2O_3}} = 10\,000/159{,}70 = 62{,}6\ \mathrm{mol}$, e poiché una mole di ematite produce due moli di ferro, $n_{\mathrm{Fe}} = 2 \cdot 62{,}6 = 125\ \mathrm{mol}$, pari a $m_{\mathrm{Fe}} = 125 \cdot 55{,}85 \approx 6{,}99 \times 10^3\ \mathrm{g}$.

**Errore tipico 4.5**

Ragionare direttamente sui grammi, cercando una proporzione tra le masse dei reagenti e dei prodotti senza passare per le moli, porta a risultati sbagliati: per esempio $2\ \mathrm{g}$ di Mg non reagiscono con $1\ \mathrm{g}$ di $\mathrm{O_2}$ per dare $2\ \mathrm{g}$ di MgO, perché i coefficienti stechiometrici legano i numeri di moli, non le masse. Un altro errore comune è alterare le formule chimiche o aggiungere sostanze non previste pur di far tornare il bilanciamento: le formule non si possono modificare e non si possono introdurre reagenti o prodotti estranei, perché ciò corrisponderebbe a descrivere una reazione diversa.

### Reagente limitante ed eccesso

Nei calcoli appena svolti si è sempre supposto che la quantità di ogni reagente diverso da quello esaminato fosse sufficiente a farlo reagire completamente. Nella maggior parte dei problemi reali, invece, sono note le quantità iniziali di più reagenti contemporaneamente, ed è necessario stabilire quale di essi si esaurisce per primo: questo si chiama reagente limitante, perché la sua quantità determina la quantità massima di prodotto ottenibile e il suo esaurimento comporta l'arresto della reazione. Gli altri reagenti, presenti in quantità superiore a quella richiesta dai rapporti stechiometrici, rimangono parzialmente non reagiti e sono detti reagenti in eccesso.

**Definizione 4.5** (reagente limitante)

Dato un insieme di reagenti $A, B, \dots$ con coefficienti stechiometrici $\nu_A, \nu_B, \dots$ in un'equazione bilanciata e disponibili rispettivamente in quantità $n_A, n_B, \dots$ moli, il reagente limitante è quello per cui il rapporto $n/\nu$ è minimo.

:::formula{id="4.3" label="Criterio del reagente limitante"}
$$\text{limitante} = \arg\min_i \frac{n_i}{\nu_i}$$
:::

È essenziale sottolineare che il reagente limitante non è necessariamente quello presente in numero assoluto minore di moli: il confronto va condotto dividendo le moli di ciascun reagente per il proprio coefficiente stechiometrico, non confrontando semplicemente i valori di $n$. Questo è l'errore più frequente in questo tipo di esercizio.

**Errore tipico 4.6**

Scegliere come limitante il reagente che ha il minor numero di moli assolute, ignorando i coefficienti stechiometrici. Per esempio, se un reagente ha coefficiente $1$ e l'altro coefficiente $3$, può benissimo essere limitante quello presente in maggior numero di moli, se il suo rapporto $n/\nu$ risulta comunque più piccolo.

**Esempio svolto 4.7** (individuazione del reagente limitante e calcolo del prodotto)

$6{,}4\ \mathrm{mol}$ di idrazina ($\mathrm{N_2H_4}$) reagiscono con $5{,}2\ \mathrm{mol}$ di tetrossido di diazoto ($\mathrm{N_2O_4}$), producendo azoto e acqua secondo l'equazione bilanciata $2\,\mathrm{N_2H_4} + \mathrm{N_2O_4} \to 3\,\mathrm{N_2} + 4\,\mathrm{H_2O}$. Si vogliono calcolare le moli di azoto prodotte.

*Strategia.* Si dividono le moli disponibili di ciascun reagente per il proprio coefficiente stechiometrico e si confrontano i risultati; il più piccolo individua il reagente limitante, le cui moli (corrette per il coefficiente) determinano la quantità di prodotto.

*Calcolo.*

$$\frac{n_{\mathrm{N_2H_4}}}{\nu_{\mathrm{N_2H_4}}} = \frac{6{,}4}{2} = 3{,}2\ \mathrm{mol} \qquad \frac{n_{\mathrm{N_2O_4}}}{\nu_{\mathrm{N_2O_4}}} = \frac{5{,}2}{1} = 5{,}2\ \mathrm{mol}$$

Poiché $3{,}2 < 5{,}2$, l'idrazina $\mathrm{N_2H_4}$ è il reagente limitante, e sono le sue moli a determinare la quantità di prodotto:

$$n_{\mathrm{N_2}} = \frac{3}{2}\cdot 6{,}4 = 9{,}6\ \mathrm{mol}$$

*Verifica.* Confrontando con l'altro reagente, $5{,}2\ \mathrm{mol}$ di $\mathrm{N_2O_4}$ potrebbero produrre al più $3 \cdot 5{,}2 = 15{,}6\ \mathrm{mol}$ di $\mathrm{N_2}$, un valore maggiore di $9{,}6\ \mathrm{mol}$: questo conferma che è davvero l'idrazina a limitare la reazione, perché con le sue moli si ottiene meno prodotto.

Un metodo equivalente, spesso più intuitivo, consiste nel calcolare direttamente quante moli di uno stesso prodotto si otterrebbero da ciascun reagente, supponendo che l'altro sia in eccesso, e nel confrontare questi valori: il reagente che dà la quantità minore di prodotto è il limitante. Per esempio, nella reazione $3\,\mathrm{NO_2} + \mathrm{H_2O} \to 2\,\mathrm{HNO_3} + \mathrm{NO}$, disponendo di $5\ \mathrm{mol}$ di $\mathrm{NO_2}$ e $2\ \mathrm{mol}$ di $\mathrm{H_2O}$, da $3\ \mathrm{mol}$ di $\mathrm{NO_2}$ si ottengono $2\ \mathrm{mol}$ di $\mathrm{HNO_3}$ e da $1\ \mathrm{mol}$ di $\mathrm{H_2O}$ si ottengono altrettante $2\ \mathrm{mol}$ di $\mathrm{HNO_3}$; con $5\ \mathrm{mol}$ di $\mathrm{NO_2}$ si otterrebbero quindi $5 \cdot 2/3 \approx 3{,}3\ \mathrm{mol}$ di $\mathrm{HNO_3}$, mentre con $2\ \mathrm{mol}$ di $\mathrm{H_2O}$ se ne otterrebbero $4\ \mathrm{mol}$: il diossido di azoto, che fornisce la quantità minore di prodotto, è il reagente limitante.

Una volta individuato il reagente limitante e calcolate le moli di prodotto che esso permette di formare, l'eccesso residuo del reagente in eccesso si ottiene convertendo nuovamente queste moli (tramite il rapporto stechiometrico) nelle moli dell'altro reagente effettivamente consumate, e sottraendo questo valore dalla quantità iniziale disponibile. Nell'esempio dell'idrazina, le moli di $\mathrm{N_2O_4}$ consumate sono $n_{\mathrm{N_2O_4,\,consumato}} = \frac{1}{2}\cdot 6{,}4 = 3{,}2\ \mathrm{mol}$, per cui restano in eccesso $5{,}2 - 3{,}2 = 2{,}0\ \mathrm{mol}$ di $\mathrm{N_2O_4}$ non reagito.

In tutti questi calcoli resta valida, come criterio di verifica finale, la legge di Lavoisier: la somma delle masse dei reagenti effettivamente consumati deve uguagliare la somma delle masse dei prodotti formati, poiché in un sistema chiuso la massa non si crea né si distrugge. Quando reagenti o prodotti sono gassosi, il confronto tra le quantità in gioco deve inoltre tenere conto del principio di Avogadro, discusso in dettaglio nel capitolo sui gas; nella maggior parte dei problemi di questa sezione, tuttavia, il confronto avviene direttamente in moli o in massa.

Questi problemi a più passaggi, in cui occorre prima bilanciare l'equazione, poi individuare il reagente limitante e infine calcolare la quantità di prodotto o l'eccesso residuo, sono quelli più spesso proposti alle prove d'esame: conviene sempre, come primo passo, scrivere l'equazione bilanciata e convertire tutti i dati in moli prima di confrontare alcunché.

## p5 | Resa di reazione

### Resa teorica e resa reale

Nei calcoli stechiometrici svolti nella sezione precedente si è sempre assunto implicitamente che l'intera quantità di reagente limitante si trasformasse in prodotto, e che fosse possibile recuperare quel prodotto senza alcuna perdita. La quantità di prodotto calcolata in questo modo, a partire dai rapporti molari dell'equazione bilanciata, si chiama **resa teorica**: è la quantità massima di prodotto che si potrebbe ottenere se la reazione fosse completa e senza perdite.

Nella pratica di laboratorio la resa teorica non viene praticamente mai raggiunta, per almeno tre motivi distinti:

- anche quando la reazione principale è ampiamente predominante, spesso si svolgono in parallelo una o più reazioni collaterali, che consumano una parte dei reagenti per formare piccole quantità di prodotti diversi da quello desiderato;
- molte reazioni non arrivano a completezza ma raggiungono uno stato di equilibrio (argomento che verrà approfondito nel capitolo sull'equilibrio chimico), lasciando una parte del reagente limitante inutilizzata;
- anche se la reazione fosse completa e priva di reazioni collaterali, nel processo di separazione e purificazione del prodotto dal resto della miscela di reazione se ne perde sempre una piccola parte.

La quantità di prodotto che si ottiene realmente, misurata per esempio pesando il prodotto isolato e purificato, si chiama **resa reale** (o resa effettiva).

### Resa percentuale

Si definisce resa di reazione, o resa percentuale, $\eta$, il rapporto tra la resa reale e la resa teorica, moltiplicato per cento.

:::formula{id="4.4" label="Resa percentuale di una reazione"}
$$\eta = \frac{\text{resa reale}}{\text{resa teorica}} \times 100$$
:::

Resa reale e resa teorica devono essere espresse nella stessa grandezza (entrambe in moli, oppure entrambe in grammi dello stesso prodotto), altrimenti il rapporto non ha significato. La resa percentuale è sempre un numero compreso tra 0 e 100: un valore di $\eta$ pari a 100 corrisponde al caso ideale, mai verificato nella realtà, in cui tutto il reagente limitante si trasforma in prodotto isolabile senza perdite.

Per calcolare la resa teorica si procede esattamente come nei calcoli stechiometrici con reagente limitante trattati nella sezione su [calcoli stechiometrici e reagente limitante](ref:chapter/4#p4): si individua il reagente limitante, si calcolano le sue moli, si usa il rapporto stechiometrico per ottenere le moli teoriche di prodotto e infine, se richiesto, si convertono in massa tramite la massa molare ([formula (2.4)](ref:formula/2.4)).

**Esempio svolto 4.8** (resa di una reazione di sintesi)

100,0 kg di silice (diossido di silicio) reagiscono con carbonio in eccesso per produrre carburo di silicio e monossido di carbonio; si ottengono 51,4 kg di carburo di silicio. Calcolare la resa della reazione.

1. Dati: $m_{SiO_2} = 100{,}0 \text{ kg}$, $m_{SiC,\,reale} = 51{,}4 \text{ kg}$, carbonio in eccesso (quindi SiO$_2$ è il reagente limitante).

2. Strategia: si scrive e bilancia la reazione, si calcolano le moli teoriche di SiC a partire dalle moli di SiO$_2$, si calcolano le moli reali di SiC a partire dalla massa ottenuta, e si fa il rapporto.

3. Calcolo. L'equazione bilanciata è

$$SiO_2 + 3\,C \to SiC + 2\,CO$$

$$n_{SiO_2} = \frac{100{,}0 \times 10^3 \text{ g}}{60{,}09 \text{ g/mol}} = 1{,}664 \times 10^3 \text{ mol}$$

Poiché il rapporto molare SiO$_2$ : SiC è $1:1$,

$$n_{SiC,\,teoriche} = 1{,}664 \times 10^3 \text{ mol}$$

$$n_{SiC,\,reali} = \frac{51{,}4 \times 10^3 \text{ g}}{40{,}1 \text{ g/mol}} = 1{,}282 \times 10^3 \text{ mol}$$

$$\eta = \frac{1{,}282 \times 10^3 \text{ mol}}{1{,}664 \times 10^3 \text{ mol}} \times 100 = 77{,}0\%$$

4. Verifica: $\eta$ è compresa tra 0 e 100, come deve essere per una resa percentuale; il risultato è riportato con tre cifre significative, coerentemente con i dati di partenza.

Lo stesso schema si applica a qualunque altra coppia reagente/prodotto; per esempio, facendo reagire 10,0 g di carbonato di calcio con acido cloridrico in eccesso e ottenendo 3,65 g di diossido di carbonio, si trova $\eta = 83{,}0\%$.

### Problemi inversi

Molti problemi d'esame non chiedono di calcolare la resa, ma la usano come dato noto per trovare quanto reagente serve o quanto prodotto si otterrà realmente. Dalla relazione che definisce $\eta$ si ricavano le due relazioni inverse:

$$\text{resa reale} = \frac{\eta}{100} \times \text{resa teorica}$$

$$\text{resa teorica} = \frac{\text{resa reale}}{\eta} \times 100$$

La prima relazione si usa quando si conoscono la resa percentuale di un processo (nota per esempio da dati sperimentali precedenti) e la resa teorica calcolata stechiometricamente dalle quantità di reagenti disponibili, e si vuole prevedere quanto prodotto si otterrà realmente. La seconda si usa quando si vuole programmare una sintesi: nota la resa percentuale tipica del processo e la quantità di prodotto reale che si desidera ottenere, si calcola la resa teorica necessaria, da cui, tramite i rapporti stechiometrici, si ricava la quantità di reagente limitante da impiegare.

**Esempio svolto 4.9** (problema inverso)

Una reazione ha resa nota del 77,0%. Si vogliono produrre 2,00 kg di carburo di silicio reale a partire da silice e carbonio. Quanta silice occorre impiegare?

1. Dati: $\eta = 77{,}0\%$, resa reale desiderata $= 2{,}00 \times 10^3$ g di SiC.

2. Strategia: si calcola prima la resa teorica necessaria, poi si convertono le moli teoriche di SiC in moli di SiO$_2$ tramite il rapporto stechiometrico $1:1$, e infine in massa.

3. Calcolo:

$$\text{resa teorica} = \frac{2{,}00 \times 10^3 \text{ g}}{77{,}0} \times 100 = 2{,}597 \times 10^3 \text{ g di SiC}$$

$$n_{SiC,\,teoriche} = \frac{2{,}597 \times 10^3 \text{ g}}{40{,}1 \text{ g/mol}} = 64{,}76 \text{ mol}$$

$$n_{SiO_2} = n_{SiC,\,teoriche} = 64{,}76 \text{ mol} \qquad m_{SiO_2} = 64{,}76 \times 60{,}09 = 3{,}89 \times 10^3 \text{ g} = 3{,}89 \text{ kg}$$

4. Verifica: applicando all'indietro la resa del 77,0% alla resa teorica trovata si riottiene $2{,}00 \times 10^3$ g, coerentemente con il dato di partenza.

### Errori tipici

L'errore più frequente consiste nel confondere resa reale e resa teorica nel rapporto, oppure nell'esprimerle in unità diverse (per esempio moli al numeratore e grammi al denominatore): il rapporto va sempre calcolato tra due quantità omogenee della stessa specie chimica.

Un secondo errore tipico è calcolare la resa teorica dimenticando di identificare correttamente il reagente limitante quando nel problema sono fornite le quantità di più reagenti; la resa teorica deve sempre basarsi sulle moli del reagente limitante, non su un reagente qualsiasi presente in eccesso, come già osservato nella sezione sul reagente limitante.

Infine, nei calcoli a più passaggi tipici di questi problemi è opportuno conservare una o due cifre significative in più nei risultati intermedi (moli teoriche, moli reali) e arrotondare solo il risultato finale della resa percentuale, per evitare che gli arrotondamenti intermedi si accumulino e alterino il risultato finale.
