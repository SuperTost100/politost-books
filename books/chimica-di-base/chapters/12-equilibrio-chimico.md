---
chapter: 12
title: Equilibrio chimico
---

## p1 | Introduzione

Le reazioni chimiche non si fermano quando raggiungono l’equilibrio: continuano in entrambe le direzioni, ma la composizione complessiva resta costante. Capire questo equilibrio permette di prevedere quanto prodotto si forma e come una reazione risponde a cambiamenti nelle condizioni, competenze utili per interpretare processi chimici in laboratorio e nell’industria.

Per affrontare il capitolo servono le idee di concentrazione delle soluzioni e di pressione dei gas, insieme alla capacità di leggere un’equazione chimica bilanciata e i suoi coefficienti stechiometrici. Queste conoscenze aiutano a descrivere gli equilibri con le costanti e a collegare quantità misurabili alla composizione della miscela.

Al termine saprai scrivere e interpretare le costanti di equilibrio in termini di concentrazioni o pressioni parziali, confrontare il quoziente di reazione con la costante per prevedere in quale direzione procede una trasformazione e calcolare composizioni di equilibrio con lo schema iniziale-variazione-equilibrio. Saprai inoltre prevedere come concentrazione, volume, pressione, gas inerti e temperatura influenzano l’equilibrio, distinguendo quando cambia la composizione e quando cambia anche la costante.

## p2 | Equilibrio dinamico e costante di equilibrio

### Natura dinamica dell'equilibrio chimico

Quando si descrive l'andamento di una reazione chimica, è essenziale distinguere due aspetti concettualmente diversi. L'**equilibrio chimico** si riferisce all'entità di una reazione, cioè alla concentrazione di un reagente o di un prodotto dopo un tempo illimitato, o comunque quando non si osservano più variazioni quantitative; la **cinetica chimica**, trattata in dettaglio in [Velocità di reazione e leggi cinetiche](ref:chapter/15#p2), si applica invece alla velocità con cui tali variazioni avvengono.

La maggior parte delle reazioni non procede fino al consumo completo del reagente limitante, ma si arresta a una composizione intermedia: si tratta di **reazioni reversibili**, in cui sia la reazione diretta (dai reagenti ai prodotti) sia quella inversa (dai prodotti ai reagenti) sono possibili. La reversibilità si indica con il simbolo $\rightleftharpoons$ posto tra i due membri dell'equazione.

Si osservi la reazione $N_2O_4(g) \rightleftharpoons 2NO_2(g)$: a livello molecolare, le molecole di $N_2O_4$ si decompongono continuamente in $NO_2$, mentre le molecole di $NO_2$ si combinano per riformare $N_2O_4$. Con il passare del tempo si raggiunge una condizione in cui la decomposizione di $N_2O_4$ avviene esattamente alla stessa velocità con cui $NO_2$ si ricombina; a quel punto il sistema ha raggiunto l'equilibrio, e le concentrazioni di reagente e prodotto cessano di variare perché la velocità della reazione diretta e quella della reazione inversa sono diventate uguali.

**Definizione 12.1** (equilibrio dinamico). Un sistema reattivo è in equilibrio dinamico quando, a livello molecolare, le trasformazioni avvengono ancora in entrambe le direzioni, ma a livello macroscopico non si osserva più alcuna variazione netta, perché le trasformazioni in un verso sono esattamente bilanciate da quelle nel verso opposto.

Questo è il punto più frainteso dagli studenti: l'equilibrio chimico non è uno stato statico in cui la reazione si è fermata, ma uno stato stazionario in cui reagenti e prodotti continuano a trasformarsi l'uno nell'altro senza che la composizione macroscopica cambi.

:::image{src="assets/440f108b-equilibrio-dinamico-concentrazioni-tempo.svg" alt="Due curve che partono da valori diversi e si avvicinano asintoticamente a concentrazioni costanti nel tempo" caption="Fig. 12.1 — Avvicinamento all'equilibrio: le concentrazioni di reagente e prodotto variano fino a raggiungere un valore costante nel tempo, pur continuando le trasformazioni nei due sensi a livello molecolare"}
:::

### La costante di equilibrio $K_c$

A una data temperatura, il rapporto tra le concentrazioni di prodotti e reagenti all'equilibrio assume sempre lo stesso valore, qualunque siano le quantità iniziali di reagenti e prodotti da cui si è partiti: questo risultato sperimentale (giustificabile anche su base termodinamica) costituisce la **legge di azione di massa** (o legge dell'equilibrio chimico).

**Definizione 12.2** (costante di equilibrio in termini di concentrazione). Per una reazione generica bilanciata

$$aA + bB \rightleftharpoons cC + dD$$

si definisce la costante di equilibrio $K_c$ come

:::formula{id="12.1" label="Legge di azione di massa (costante di equilibrio K_c)"}
$$K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}$$
:::

dove ogni concentrazione è quella misurata all'equilibrio, i prodotti compaiono al numeratore e i reagenti al denominatore, e ciascuna concentrazione è elevata a una potenza pari al coefficiente stechiometrico della specie nell'equazione bilanciata. Nell'espressione compaiono le specie gassose e i soluti in soluzione pertinenti, anche se appartengono a fasi diverse tra loro; si omettono invece i solidi e i liquidi puri, come si vedrà a proposito degli equilibri eterogenei. La dimensione (unità) di $K_c$ dipende dalla reazione, in quanto dipende dal numero di termini a numeratore e a denominatore.

Ad esempio, per la sintesi dell'ammoniaca $N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)$ si ha

$$K_c = \frac{\lbrack NH_3\rbrack ^2}{\lbrack N_2\rbrack \lbrack H_2\rbrack ^3} \ .$$

Il valore di $K_c$ è definito a una precisa temperatura ed è un indice di quanto la reazione sia avanzata prima di raggiungere l'equilibrio:

- se $K_c \ll 1$, la reazione avanza poco verso i prodotti: si dice che è spostata verso i reagenti (o verso sinistra);
- se $K_c \gg 1$, i prodotti sono favoriti nell'espressione di equilibrio: si dice che la reazione è spostata verso i prodotti (o verso destra). Per dedurre quali quantità restino effettivamente di ciascun reagente occorre però conoscere anche le quantità iniziali, non solo il valore di $K_c$.

### Equilibri eterogenei

Gli equilibri considerati finora si dicono **omogenei**, perché tutti i componenti della reazione si trovano nella stessa fase. Quando reagenti e prodotti sono distribuiti su più fasi, il sistema raggiunge un **equilibrio eterogeneo**.

Un solido puro (o un liquido puro) ha, a una data temperatura, sempre la stessa densità e quindi la stessa concentrazione molare: il suo "numero di moli per litro di solido" resta costante e, poiché il volume del solido varia pochissimo con la temperatura, la sua molarità resta praticamente invariata. Per questo motivo le concentrazioni di solidi e liquidi puri non compaiono nell'espressione della costante di equilibrio: vengono incorporate nel valore stesso di $K_c$.

Si consideri come esempio $CaCO_{3(s)} \rightleftharpoons CaO_{(s)} + CO_{2(g)}$. Un'espressione preliminare sarebbe $Q_c' = \dfrac{\lbrack CaO\rbrack \lbrack CO_2\rbrack }{\lbrack CaCO_3\rbrack }$; portando a primo membro le molarità costanti dei due solidi, si ottiene un unico termine costante, che si indica direttamente con $Q_c$ (o, all'equilibrio, con $K_c$):

$$K_c = \lbrack CO_2\rbrack  \ .$$

cioè la costante di equilibrio eterogeneo coinvolge solo la specie gassosa, le cui concentrazioni variano effettivamente mentre il sistema si avvicina all'equilibrio.

Un secondo esempio, con più specie gassose e solide contemporaneamente, è la riduzione del vapore acqueo da parte del ferro metallico:

$$3Fe_{(s)} + 4H_2O_{(g)} \rightleftharpoons Fe_3O_{4(s)} + 4H_{2(g)} \qquad K_c = \frac{\lbrack H_2\rbrack ^4}{\lbrack H_2O\rbrack ^4}$$

in cui sia il ferro sia la magnetite, entrambi solidi, sono assenti dall'espressione della costante.

**Errore tipico 12.1.** Uno sbaglio frequente è inserire nell'espressione di $K_c$ la concentrazione (o la pressione parziale) di un solido o di un liquido puro presente nel sistema: queste specie non compaiono mai, perché la loro "concentrazione" è costante e già inclusa nel valore numerico della costante.

### Costante $K_p$ e conversione con $K_c$

Per equilibri che coinvolgono solo specie gassose, è spesso più comodo misurare le pressioni parziali che le concentrazioni; dall'equazione di stato dei gas ideali [formula (6.5)](ref:formula/6.5) si ricava $p = \dfrac{n}{V}RT = \lbrack gas\rbrack \,RT$, e quindi la pressione parziale di un gas è direttamente proporzionale alla sua molarità.

**Definizione 12.3** (costante di equilibrio in termini di pressione). Per la reazione generica $aA_{(g)} + bB_{(g)} \rightleftharpoons cC_{(g)} + dD_{(g)}$ si definisce

:::formula{id="12.2" label="Costante di equilibrio in termini di pressione K_p"}
$$K_p = \frac{(p_C)^c (p_D)^d}{(p_A)^a (p_B)^b}$$
:::

dove ogni $p_i$ è la pressione parziale della specie all'equilibrio e l'esponente è il relativo coefficiente stechiometrico; $K_p$ è definita, come $K_c$, a una specifica temperatura. Per un equilibrio eterogeneo che coinvolga anche specie gassose, in $K_p$ compaiono soltanto le pressioni parziali dei gas: ad esempio, per $CaCO_{3(s)} \rightleftharpoons CaO_{(s)} + CO_{2(g)}$ si ha $K_p = p_{CO_2}$, e nel calcolo di $\Delta n$ si contano soltanto i coefficienti stechiometrici delle specie gassose.

In generale $K_p$ e $K_c$ non sono numericamente uguali, ma si può ricavare una relazione tra le due sfruttando $p_i = \lbrack i\rbrack \,RT$:

:::formula{id="12.3" label="Relazione tra K_p e K_c"}
$$K_p = K_c\,(RT)^{\Delta n}, \qquad \Delta n = (c+d) - (a+b)$$
:::

dove $\Delta n$ è la somma dei coefficienti stechiometrici dei prodotti gassosi meno quella dei reagenti gassosi. Nella formula, $R$ e $T$ vanno espressi in unità coerenti con quelle scelte per le pressioni parziali (tipicamente $R = 0,08206 \ \mathrm{L\cdot atm/(mol\cdot K)}$ se le pressioni sono in atm).

Un caso particolare importante: se il numero di moli gassose non cambia durante la reazione, cioè $\Delta n = 0$, allora $(RT)^{\Delta n} = 1$ e $K_p = K_c$; più in generale $K_c = K_p$ se e solo se la costante di equilibrio risulta adimensionale.

Quando tutti i coefficienti stechiometrici di una reazione bilanciata vengono moltiplicati per uno stesso numero $n$ (ad esempio per dimezzare o raddoppiare l'equazione), la nuova costante di equilibrio diventa

:::formula{id="12.4" label="Costante di equilibrio di un multiplo della reazione"}
$$K_c^{(n)} = (K_c)^n$$
:::

dove $n$ è il fattore per cui sono stati moltiplicati i coefficienti; la stessa regola vale per $K_p$. Invertire il senso di una reazione corrisponde invece a $n = -1$, cioè la costante della reazione inversa è il reciproco di quella della reazione diretta.

**Esempio svolto 12.1.** La sintesi dell'ammoniaca, scritta con i coefficienti stechiometrici interi e non ulteriormente semplificabili

$$N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)$$

ha $K_c = 2,4 \times 10^{-2}$ a $1000$ K. Si vuole calcolare $K_c$ per la reazione scritta come

$$\tfrac{1}{3}N_2(g) + H_2(g) \rightleftharpoons \tfrac{2}{3}NH_3(g) \ .$$

*Dati.* $K_c = 2,4 \times 10^{-2}$ per l'equazione con coefficienti $1,3,2$; la nuova equazione ha tutti i coefficienti moltiplicati per $n = 1/3$. I coefficienti frazionari che ne risultano sono usati qui eccezionalmente, in deroga alla convenzione dei coefficienti interi minimi, proprio per mostrare la regola delle potenze anche in questo caso limite.

*Strategia.* Si applica $K_c^{(n)} = (K_c)^n$ con $n = 1/3$.

*Calcolo.*

$$K_c^{(1/3)} = (2,4 \times 10^{-2})^{1/3} \approx 0,29 \ .$$

*Verifica.* Il risultato è coerente con l'ordine di grandezza atteso: elevando $0,29$ al cubo si ritrova $2,4 \times 10^{-2}$, e il valore di $K_c$, essendo la reazione "ridotta" a coefficienti più piccoli, risulta più vicino a 1 rispetto al valore originale, come ci si aspetta quando si riduce l'entità numerica degli esponenti.

**Errore tipico 12.2.** Confondere la conversione $K_p = K_c(RT)^{\Delta n}$ (che collega due costanti diverse per la stessa reazione, a causa delle diverse unità usate per concentrazioni e pressioni) con la regola $K_c^{(n)} = (K_c)^n$ (che collega le costanti di due equazioni scritte con coefficienti diversi per la stessa reazione). La prima coinvolge $R$, $T$ e la variazione del numero di moli gassose tra prodotti e reagenti; la seconda è una semplice elevazione a potenza e non richiede $R$ né $T$.

Questa costante di equilibrio, definita qui in condizioni di equilibrio effettivo, sarà confrontata nella prossima sezione con il quoziente di reazione $Q$, calcolabile in qualunque istante, per prevedere in quale direzione una reazione sta procedendo e per calcolare le concentrazioni incognite all'equilibrio tramite le tabelle ICE (vedi [Quoziente di reazione e calcoli di equilibrio](ref:chapter/12#p3)).

## p3 | Quoziente di reazione e calcoli di equilibrio

Nella sezione precedente si è definita la costante di equilibrio $K_c$ (e la sua versione in pressioni parziali $K_p$) come il valore che il rapporto tra le concentrazioni (o pressioni parziali) di prodotti e reagenti assume quando il sistema ha raggiunto l'equilibrio, secondo la legge di azione di massa (vedi [Equilibrio dinamico e costante di equilibrio](ref:chapter/12#p2)). In questa sezione si affronta il problema pratico: come usare $K$ per prevedere l'evoluzione di un sistema che non è ancora all'equilibrio, e come ricavare concentrazioni di equilibrio o il valore stesso di $K$ a partire da dati sperimentali.

### Il quoziente di reazione $Q$

Per un sistema che si trova in un qualunque istante della reazione, all'equilibrio o no, si può scrivere un rapporto formalmente identico a quello di $K$, ma calcolato con le concentrazioni (o pressioni parziali) presenti in quel preciso istante, non necessariamente di equilibrio. Questo rapporto si chiama **quoziente di reazione** e si indica con $Q_c$ (o $Q_p$ in termini di pressioni parziali).

**Definizione 12.4** (quoziente di reazione). Per la reazione generica

$$aA + bB \rightleftharpoons cC + dD$$

il quoziente di reazione in termini di molarità è

:::formula{id="12.5" label="Quoziente di reazione"}
$$Q_c = \frac{c_C(t)^c \cdot c_D(t)^d}{c_A(t)^a \cdot c_B(t)^b}$$
:::

dove $c_X(t)$ indica la concentrazione di $X$ nell'istante considerato; all'equilibrio coincide con $\lbrack X\rbrack $. Valgono per $Q_c$ le stesse convenzioni fissate per $K_c$: le specie solide o liquide pure non compaiono nell'espressione (il loro contributo è costante e viene inglobato nella costante stessa), e solo le specie la cui concentrazione varia durante la reazione (gas e soluti) figurano nel rapporto.

A differenza di $K_c$, che ha un valore fisso a una data temperatura, $Q_c$ varia in continuazione finché il sistema non ha raggiunto l'equilibrio. Quando l'equilibrio viene raggiunto, per definizione $Q_c = K_c$.

**Esempio svolto 12.2.** Scrivere il quoziente di reazione per la decomposizione del pentossido di diazoto in diossido di azoto e ossigeno.

1. *Dati*: $2\,N_2O_5(g) \rightleftharpoons 4\,NO_2(g) + O_2(g)$.
2. *Strategia*: si applica la definizione, con i prodotti al numeratore e i reagenti al denominatore, ciascuno elevato al proprio coefficiente stechiometrico.
3. *Calcolo*:

$$Q_c = \frac{\lbrack NO_2\rbrack ^4 \cdot \lbrack O_2\rbrack }{\lbrack N_2O_5\rbrack ^2}$$

4. *Verifica*: gli esponenti (4, 1, 2) coincidono con i coefficienti stechiometrici bilanciati, e tutte le specie sono gassose, quindi compaiono tutte nell'espressione.

### Prevedere il verso della reazione confrontando $Q$ e $K$

Il confronto tra $Q$ e $K$, alla stessa temperatura, è lo strumento che permette di stabilire se un sistema ha raggiunto l'equilibrio e, se non l'ha raggiunto, in quale direzione procederà spontaneamente la reazione netta.

**Teorema 12.1** (criterio $Q$–$K$). Per una reazione a temperatura costante:

:::formula{id="12.6" label="Criterio di direzione dal confronto Q-K"}
$$\begin{aligned}
Q < K &\;\Rightarrow\; \text{la reazione procede verso i prodotti (verso destra)} \\
Q > K &\;\Rightarrow\; \text{la reazione procede verso i reagenti (verso sinistra)} \\
Q = K &\;\Rightarrow\; \text{il sistema è già all'equilibrio}
\end{aligned}$$
:::

Il ragionamento è il seguente: se $Q < K$, il denominatore di $Q$ (i reagenti) è relativamente grande rispetto al numeratore (i prodotti) in confronto alla situazione di equilibrio; la reazione deve quindi consumare reagenti e formare prodotti per aumentare $Q$ fino a farlo coincidere con $K$, cioè procede verso destra. Se invece $Q > K$, il numeratore è troppo grande rispetto al denominatore: la reazione consuma prodotti e forma reagenti, cioè procede verso sinistra, fino a che $Q$ non scende al valore di $K$. Quando $Q = K$ il sistema è all'equilibrio: la reazione diretta e quella inversa continuano ad avvenire, ma alla stessa velocità, per cui non si osserva alcuna variazione macroscopica netta.

**Errore tipico 12.3.** Non bisogna confondere "reazione verso destra" con "reazione completa": anche quando $Q \ne K$, il sistema si sposta solo fino a che $Q$ non torna a coincidere con $K$, non fino all'esaurimento totale di un reagente. Inoltre $Q$ e $K$ devono essere calcolati con le stesse unità e alla stessa temperatura: confrontare un $Q_c$ con un $K_p$ (o viceversa) senza prima convertire porta a conclusioni errate.

### Tabelle ICE e calcolo delle concentrazioni di equilibrio

La maggior parte dei problemi di equilibrio fornisce informazioni sullo stato iniziale del sistema (prima che la reazione proceda) e chiede le concentrazioni all'equilibrio, oppure il contrario. Per tenere ordinatamente traccia della relazione tra questi due stati si usa la **tabella di reazione**, nota anche come **schema ICE** (o IVE, dalle iniziali italiane Iniziale-Variazione-Equilibrio).

**Definizione 12.5** (schema ICE). Per la reazione generica $aA + bB \rightleftharpoons cC + dD$ si costruiscono tre righe:

- *Iniziale*: le concentrazioni (o pressioni parziali) presenti prima che la reazione proceda verso l'equilibrio, indicate con $c_X(0)$ (o con la pressione parziale iniziale);
- *Variazione*: la quantità, espressa in funzione di un'unica incognita $x$, che ciascuna specie guadagna o perde man mano che il sistema si avvicina all'equilibrio. La variazione è proporzionale al coefficiente stechiometrico della specie, con segno negativo per chi viene consumato (tipicamente i reagenti) e positivo per chi viene prodotto (tipicamente i prodotti);
- *Equilibrio*: la somma algebrica delle prime due righe, cioè la concentrazione $\lbrack X\rbrack $ (o la pressione parziale) all'equilibrio.

Il procedimento di risoluzione segue tre passi:

1. costruire la tabella ICE, individuando lo stato iniziale e scrivendo le variazioni in funzione di una sola $x$;
2. sostituire le concentrazioni di equilibrio (espresse tramite $x$) nell'espressione di $K_c$ (o $K_p$), ottenendo un'equazione algebrica, in genere di primo o secondo grado;
3. risolvere l'equazione per $x$ e sostituire il valore trovato nelle espressioni di equilibrio per ottenere le concentrazioni numeriche richieste.

I dati riportati nell'ultima riga dello schema sono gli unici da inserire nell'espressione di $K_c$ o $K_p$: i valori iniziali servono solo a costruire la tabella, non vanno mai sostituiti direttamente nella costante.

**Esempio svolto 12.3.** Un recipiente di $125 \times 10^{-3}\ \text{L}$ contiene $0{,}250\ \text{mol}$ di CO e $0{,}250\ \text{mol}$ di $H_2O$ a una temperatura alla quale $K_c = 1{,}56$ per la reazione

$$CO(g) + H_2O(g) \rightleftharpoons CO_2(g) + H_2(g)$$

Calcolare le concentrazioni di tutte le specie all'equilibrio.

1. *Dati*: $n_0(CO) = n_0(H_2O) = 0{,}250\ \text{mol}$, $V = 125 \times 10^{-3}\ \text{L}$, nessun prodotto inizialmente presente, $K_c = 1{,}56$.
2. *Strategia*: poiché si forniscono dati sullo stato iniziale e si chiede lo stato di equilibrio, si costruisce uno schema ICE in termini di molarità.
3. *Calcolo*. Le concentrazioni iniziali sono

$$c_{CO}(0) = c_{H_2O}(0) = \frac{0{,}250}{125 \times 10^{-3}} = 2{,}00\ \text{M}$$

Lo schema ICE, con tutti i coefficienti stechiometrici pari a 1, è:

- Iniziale: $c_{CO}(0) = 2{,}00$; $c_{H_2O}(0) = 2{,}00$; $c_{CO_2}(0) = 0$; $c_{H_2}(0) = 0$
- Variazione: $-x$; $-x$; $+x$; $+x$
- Equilibrio: $\lbrack CO\rbrack  = 2{,}00 - x$; $\lbrack H_2O\rbrack  = 2{,}00 - x$; $\lbrack CO_2\rbrack  = x$; $\lbrack H_2\rbrack  = x$

Sostituendo nell'espressione di $K_c$:

$$K_c = \frac{\lbrack CO_2\rbrack \cdot\lbrack H_2\rbrack }{\lbrack CO\rbrack \cdot\lbrack H_2O\rbrack } \;\Rightarrow\; 1{,}56 = \frac{x \cdot x}{(2{,}00-x)\cdot(2{,}00-x)}$$

che si riduce all'equazione di secondo grado

$$0{,}56\,x^2 - 6{,}24\,x + 6{,}24 = 0$$

le cui radici sono $x_1 = 10{,}0$ e $x_2 = 1{,}1107$.

4. *Verifica*. La radice $x_1 = 10{,}0$ va scartata perché priva di significato fisico: sottraendola dalla concentrazione iniziale di $2{,}00\ \text{M}$ si otterrebbe una concentrazione negativa di CO e $H_2O$, il che è impossibile. Si accetta quindi $x_2 = 1{,}1107$, da cui

$$\lbrack CO\rbrack  = \lbrack H_2O\rbrack  = 2{,}00 - 1{,}1107 = 0{,}889\ \text{M}, \qquad \lbrack CO_2\rbrack  = \lbrack H_2\rbrack  = 1{,}1107\ \text{M}$$

:::image{src="assets/346cdc25-ice-co-h2o-concentrazioni.svg" alt="Grafico a punti che confronta le concentrazioni iniziali e di equilibrio di CO, H2O, CO2 e H2 nell'esempio dello schema ICE" caption="Fig. 12.2 — Concentrazioni iniziali e di equilibrio per la reazione CO(g) + H2O(g) ⇌ CO2(g) + H2(g), ricavate dallo schema ICE: CO e H2O passano da 2,00 M a 0,889 M, mentre CO2 e H2 passano da 0 M a 1,1107 M."}
:::

**Errore tipico 12.4.** Nelle equazioni di secondo grado provenienti da uno schema ICE, occorre sempre controllare che la radice scelta non renda negativa nessuna concentrazione (o pressione) e, nei casi in cui si usano approssimazioni per evitare un'equazione di ordine superiore, verificare che l'approssimazione non introduca un errore relativo superiore al 5 % rispetto al valore esatto, soglia oltre la quale la semplificazione non è ritenuta corretta.

Alcune osservazioni pratiche aiutano a impostare correttamente lo schema ICE:

- bisogna decidere fin dall'inizio se lavorare in termini di molarità o di pressioni parziali, e restare coerenti per tutto il problema;
- se il testo non specifica lo stato di aggregazione delle sostanze, occorre dedurlo dalla temperatura di reazione e includere nello schema solo le specie gassose (o comunque quelle la cui concentrazione può variare);
- se il volume del sistema non è noto e non è calcolabile, è quasi sempre perché il numero totale di moli gassose di reagenti e prodotti è lo stesso, caso in cui il calcolo di $K_c$ in funzione delle moli e quello in funzione delle molarità coincidono, poiché $V$ compare con la stessa potenza a numeratore e a denominatore;
- se nel sistema sono presenti sia reagenti sia prodotti all'istante iniziale, la reazione potrebbe procedere in un verso o nell'altro: conviene calcolare prima $Q$ e confrontarlo con $K$ per stabilire se la variazione da inserire nello schema ICE deve essere $+x$ o $-x$ per ciascuna specie.

### Determinare $K$ da dati sperimentali

Quando l'obiettivo del problema è l'opposto, cioè ricavare il valore numerico di $K_c$ (o $K_p$) a partire da misure sperimentali, la procedura dipende dal tipo di dati fornito.

**Caso 1 — dati esclusivamente di equilibrio.** Se tutte le concentrazioni (o pressioni parziali) fornite sono già quelle di equilibrio, basta convertirle nell'unità richiesta e sostituirle direttamente nell'espressione di $K_c$ o $K_p$, senza bisogno di alcuno schema ICE.

**Caso 2 — dati iniziali più una quantità di equilibrio.** Se invece sono note le quantità (o concentrazioni) iniziali e una sola grandezza all'equilibrio, si costruisce comunque uno schema ICE, ma l'incognita $x$ non viene ricavata da $K$: viene invece determinata direttamente dal confronto tra il valore iniziale e il valore di equilibrio noto, perché $x$ è proprio la variazione tra i due. Una volta nota $x$, si calcolano tutte le altre concentrazioni di equilibrio e si sostituiscono nell'espressione di $K$. In questo procedimento, a differenza del caso in cui si cercano le concentrazioni di equilibrio partendo da $K$, non c'è alcuna incognita $x$ da determinare risolvendo l'equazione di $K$: $x$ è già fissata dai dati.

**Esempio svolto 12.4.** In un recipiente da $2{,}00\ \text{L}$ mantenuto a $453\ ^\circ\text{C}$ si introducono $0{,}200\ \text{mol}$ di ioduro di idrogeno, che si decompone parzialmente secondo

$$2\,HI(g) \rightleftharpoons H_2(g) + I_2(g)$$

Se all'equilibrio la molarità di HI è $0{,}078\ \text{M}$, calcolare $K_c$.

1. *Dati*: $n_0(HI) = 0{,}200\ \text{mol}$, $V = 2{,}00\ \text{L}$, $\lbrack HI\rbrack _{eq} = 0{,}078\ \text{M}$.
2. *Strategia*: si calcola la concentrazione iniziale di HI, si costruisce lo schema ICE con la variazione $-2x$ per HI (coefficiente 2) e $+x$ per $H_2$ e $I_2$, si determina $x$ dal confronto tra concentrazione iniziale e concentrazione di equilibrio nota, infine si sostituisce nell'espressione di $K_c$.
3. *Calcolo*:

$$\lbrack HI\rbrack _0 = \frac{0{,}200\ \text{mol}}{2{,}00\ \text{L}} = 0{,}100\ \text{M}$$

Dallo schema ICE, $\lbrack HI\rbrack _{eq} = \lbrack HI\rbrack _0 - 2x = 0{,}078\ \text{M}$, da cui $2x = 0{,}100 - 0{,}078 = 0{,}022\ \text{M}$ e quindi $x = 0{,}011\ \text{M}$. Allora $\lbrack H_2\rbrack _{eq} = \lbrack I_2\rbrack _{eq} = x = 0{,}011\ \text{M}$, e

$$K_c = \frac{\lbrack H_2\rbrack \cdot\lbrack I_2\rbrack }{\lbrack HI\rbrack ^2} = \frac{(0{,}011)(0{,}011)}{(0{,}078)^2} = 0{,}020$$

4. *Verifica*: il risultato coincide con il valore riportato come riferimento per questo tipo di esercizio, ed è adimensionale per coerenza con il fatto che il numero di moli gassose di prodotti e reagenti è lo stesso (2 su entrambi i lati).

In tutti i casi, qualunque sia la via seguita, il valore di $K_c$ ottenuto da dati sperimentali diversi (diverse concentrazioni iniziali, diversi istanti) deve risultare lo stesso alla medesima temperatura: è questa coerenza a confermare la validità della legge di azione di massa.

## p4 | Principio di Le Châtelier

Le costanti di equilibrio $K_c$ e $K_p$, introdotte nelle due sezioni precedenti ([Equilibrio dinamico e costante di equilibrio](ref:chapter/12#p2), [Quoziente di reazione e calcoli di equilibrio](ref:chapter/12#p3)), permettono di calcolare la composizione di un sistema già all'equilibrio o di prevederne l'evoluzione tramite il confronto $Q$ contro $K$. Resta però un problema pratico, di grande interesse anche industriale: data una reazione già all'equilibrio, come si può agire dall'esterno per spostarlo nella direzione desiderata, aumentando la resa di un prodotto? La risposta qualitativa è fornita dal principio di Le Châtelier, che in questa sezione viene enunciato, applicato alle quattro perturbazioni più comuni e infine verificato quantitativamente tramite il confronto tra $Q$ e $K$.

### Enunciato del principio

**Teorema 12.2** (principio di Le Châtelier). Quando un sistema chimico in equilibrio viene perturbato, esso ritorna all'equilibrio subendo una reazione netta che riduce l'effetto della perturbazione.

In una formulazione equivalente, più generale: un cambiamento di uno qualsiasi dei fattori che determinano la condizione di equilibrio in un sistema induce in questo una trasformazione tale da ridurre o contrastare l'effetto provocato dal cambiamento.

È necessario precisare il significato dei due termini chiave dell'enunciato.

- **Perturbare** un sistema significa condurre su di esso un'azione che ha come effetto il passaggio da $Q = K$ a $Q \neq K$. Le perturbazioni comuni che si considerano sono tre: la variazione della concentrazione di un reagente o di un prodotto, la variazione della pressione o del volume (per reazioni in cui compaiono specie gassose), la variazione della temperatura.
- **Reazione netta** indica la direzione, verso destra o verso sinistra, che il sistema assume per ristabilire una nuova condizione di equilibrio. Le concentrazioni (o le pressioni) variano in un verso che porta il sistema da $Q \neq K$ a $Q = K$.

Un punto che genera spesso confusione negli studenti riguarda cosa resti effettivamente costante durante questi spostamenti.

**Errore tipico 12.5**. Confondere lo spostamento dell'equilibrio con una variazione della costante $K_c$. A una data temperatura $K_c$ non varia mai: la perturbazione fa variare le concentrazioni (o le pressioni) delle specie fino a raggiungere un nuovo insieme di valori che soddisfa di nuovo l'equazione della costante di equilibrio, ma il valore numerico di $K_c$ resta lo stesso, salvo nel caso della variazione di temperatura, che è l'unica perturbazione in grado di modificare $K$.

Questa precisazione va inoltre collegata al fatto che il reagente o il prodotto perturbato deve comparire nell'espressione di $Q$; liquidi e solidi puri, le cui concentrazioni restano costanti, sono esclusi da tale espressione e dunque la loro aggiunta o sottrazione (purché ne resti una quantità finita) non perturba l'equilibrio.

### Effetto della variazione di concentrazione

Si consideri un equilibrio in soluzione o in fase gassosa omogenea, ad esempio $\mathrm{H_2(g) + I_2(g) \rightleftharpoons 2\,HI(g)}$. Se, a partire da una condizione di equilibrio, si aggiunge una certa quantità di $\mathrm{HI}$, la sua concentrazione aumenta istantaneamente rispetto al valore di equilibrio, e il quoziente di reazione $Q_c$ (che per questo sistema vale $\lbrack \mathrm{HI}\rbrack ^2/(\lbrack \mathrm{H_2}\rbrack \lbrack \mathrm{I_2}\rbrack )$) diventa maggiore di $K_c$. Poiché $Q_c > K_c$, il sistema non è più all'equilibrio e la reazione procede verso sinistra, consumando $\mathrm{HI}$ e riformando $\mathrm{H_2}$ e $\mathrm{I_2}$, fino a che $Q_c$ torna a essere uguale a $K_c$.

In generale il sistema perturbato reagisce in modo da consumare una parte della sostanza aggiunta o da produrre una parte della sostanza rimossa, pervenendo a un nuovo stato di equilibrio in cui $Q_c$ torna a coincidere con $K_c$. Le due regole operative, valide per qualsiasi reagente o prodotto, sono:

- aggiunta di un reagente o sottrazione di un prodotto $\rightarrow$ spostamento verso destra;
- sottrazione di un reagente o aggiunta di un prodotto $\rightarrow$ spostamento verso sinistra.

Queste regole descrivono il verso dello spostamento dopo una perturbazione; non garantiscono da sole una resa finale elevata. Una costante di equilibrio molto piccola indica che, nelle condizioni considerate, all'equilibrio prevalgono i reagenti. L'aggiunta di reagente può comunque causare uno spostamento verso i prodotti, anche se la quantità di prodotto all'equilibrio può restare modesta. Per esempio, per la reazione $\mathrm{CO_2(g) + 2\,H_2O(g) \rightleftharpoons CH_4(g) + 2\,O_2(g)}$, con $K_c \approx 10^{-140}$ a temperatura ambiente, l'aggiunta di $\mathrm{CO_2}$ in un recipiente chiuso può spostare l'equilibrio verso i prodotti senza comportare una resa elevata.

Un esempio eterogeneo chiarisce il ruolo delle fasi condensate: per la reazione $\mathrm{2H_2S(g) + O_2(g) \rightleftharpoons 2S(s) + 2H_2O(g)}$, se si aggiunge ossigeno l'equilibrio si sposta verso destra, se si rimuove solfuro di idrogeno si sposta verso sinistra, se si aggiunge vapore acqueo si sposta verso sinistra, mentre se si aggiunge zolfo solido l'equilibrio non viene perturbato, perché lo zolfo è un solido puro e non compare nell'espressione di $Q$.

### Effetto della variazione di volume, di pressione e dei gas inerti

Quando un equilibrio coinvolge specie gassose, una riduzione del volume del recipiente fa aumentare immediatamente la pressione (e le concentrazioni) di tutte le specie gassose presenti. Come risposta, il sistema reagisce riducendo il numero totale di molecole gassose, spostandosi verso il membro della reazione che possiede il minor numero di moli gassose; un aumento di volume (o una diminuzione di pressione) produce l'effetto opposto, spostando l'equilibrio verso il membro con il maggior numero di moli gassose.

Se reagenti e prodotti contengono lo stesso numero complessivo di molecole gassose (cioè $\Delta n = 0$ nella formula {{formula:12.3}}), una variazione di pressione o di volume non ha alcun effetto sulla posizione dell'equilibrio.

L'aggiunta di un gas inerte, che non partecipa alla reazione, va trattata con attenzione perché il suo effetto dipende dalla condizione sperimentale.

- Se il gas inerte viene aggiunto a volume costante, le pressioni parziali e le concentrazioni di reagenti e prodotti non cambiano, quindi l'equilibrio non si sposta, anche se la pressione totale del recipiente aumenta.
- Se il gas inerte viene aggiunto a pressione totale costante, il volume del recipiente deve necessariamente aumentare per compensare; l'equilibrio si sposta allora come se si fosse verificato un aumento di volume, cioè verso il lato con il maggior numero di moli gassose.

**Errore tipico 12.6**. Applicare meccanicamente la regola "l'aggiunta di gas inerte sposta l'equilibrio verso più moli di gas" senza verificare se il volume del recipiente è libero di variare. Senza questa precisazione la regola è falsa nella metà dei casi d'esame.

### Effetto della variazione di temperatura

La variazione di temperatura è l'unica fra le perturbazioni elencate capace di modificare il valore numerico della costante di equilibrio $K$. Per prevederne l'effetto occorre considerare il calore di reazione come se fosse esso stesso un reagente o un prodotto del sistema: in una reazione endotermica il calore va pensato tra i reagenti, in una reazione esotermica tra i prodotti.

Da questa interpretazione discendono le due regole operative:

- un aumento di temperatura sposta l'equilibrio nella direzione che assorbe calore, cioè nella direzione endotermica;
- una diminuzione di temperatura sposta l'equilibrio nella direzione che rilascia calore, cioè nella direzione esotermica.

A differenza delle perturbazioni di concentrazione, volume e pressione, cambiando la temperatura cambia la composizione di equilibrio e cambia anche il valore di $K$.

Per la decomposizione del carbonato di calcio, $\mathrm{CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g)}$, reazione endotermica, un aumento di temperatura favorisce quindi la formazione di $\mathrm{CaO}$ e $\mathrm{CO_2}$, mentre una diminuzione di pressione (lavorando sempre a temperatura fissata) favorisce lo stesso spostamento verso destra, poiché il prodotto gassoso occupa più moli di gas dei reagenti (nessuno, essendo entrambi solidi).

:::image{src="assets/f977c3df-diagramma-entalpia-caco3.svg" alt="Diagramma a due livelli con CaCO3 solido in basso e CaO più CO2 in alto, collegati da una freccia verso l'alto etichettata reazione endotermica" caption="Fig. 12.3 — Diagramma di reazione per la decomposizione endotermica di CaCO3(s) in CaO(s) e CO2(g): un aumento di temperatura sposta l'equilibrio verso i prodotti, che si trovano a energia maggiore."}
:::

### Verifica quantitativa dello spostamento

Le previsioni qualitative appena descritte si possono sempre controllare quantitativamente confrontando il quoziente di reazione $Q$, calcolato subito dopo la perturbazione con le concentrazioni (o pressioni) non più di equilibrio, con la costante $K$ alla temperatura considerata.

- Se $Q < K$, il denominatore (i reagenti) è grande rispetto al numeratore (i prodotti): la reazione procede verso destra, verso i prodotti.
- Se $Q > K$, il denominatore (i reagenti) è piccolo rispetto al numeratore (i prodotti): la reazione procede verso sinistra, verso i reagenti.
- Se $Q = K$, il sistema è già all'equilibrio: la reazione continua ad avvenire in entrambi i sensi, ma alla stessa velocità, e la composizione macroscopica non cambia più.

Per determinare in modo preciso la nuova composizione di equilibrio dopo la perturbazione si utilizza, come nella sezione precedente, lo schema IVE (inizio-variazione-equilibrio), impostando come riga «inizio» le concentrazioni immediatamente dopo la perturbazione (non quelle dell'equilibrio originario) e risolvendo per l'incognita di variazione $x$.

**Esempio svolto 12.5**. Si consideri l'equilibrio $\mathrm{2\,NO_2(g) \rightleftharpoons N_2O_4(g)}$ a $298\ \mathrm{K}$, con $K_c = 246{,}5\ \mathrm{M^{-1}}$. In un recipiente di $1{,}00\ \mathrm{L}$ sono presenti all'equilibrio $n(\mathrm{NO_2}) = 0{,}20\ \mathrm{mol}$ e $n(\mathrm{N_2O_4}) = 9{,}86\ \mathrm{mol}$. Il volume del recipiente viene dimezzato a temperatura costante; si chiede di verificare che il sistema non è più all'equilibrio, di prevedere il verso dello spostamento con Le Châtelier e di confermarlo con il calcolo di $Q_c$.

:::image{src="assets/f977c3df-struttura-n2o4.svg" alt="Struttura di Lewis di N2O4 con legame N-N centrale, due azoti ciascuno con una carica formale positiva e due ossigeni, uno con doppio legame e uno con carica formale negativa" caption="Fig. 12.4 — Struttura di N2O4, il dimero formato dall'equilibrio 2 NO2 ⇌ N2O4 discusso nell'esempio svolto."}
:::

1. *Dati.* $V_i = 1{,}00\ \mathrm{L}$, $V_f = 0{,}500\ \mathrm{L}$, $T = 298\ \mathrm{K}$ costante, $K_c = 246{,}5\ \mathrm{M^{-1}}$, $n(\mathrm{NO_2}) = 0{,}20\ \mathrm{mol}$, $n(\mathrm{N_2O_4}) = 9{,}86\ \mathrm{mol}$.
2. *Strategia.* Poiché il volume viene dimezzato a temperatura costante, per la legge di Boyle la pressione totale raddoppia e con essa, essendo $c = n/V$, raddoppiano anche tutte le concentrazioni. Si calcolano le nuove concentrazioni dopo la compressione e si confronta il quoziente $Q_c$ risultante con $K_c$ per prevedere il verso della reazione.
3. *Calcolo.* Dopo la compressione: $\lbrack \mathrm{NO_2}\rbrack  = 0{,}20\ \mathrm{mol}/0{,}500\ \mathrm{L} = 0{,}40\ \mathrm{M}$ e $\lbrack \mathrm{N_2O_4}\rbrack  = 9{,}86\ \mathrm{mol}/0{,}500\ \mathrm{L} = 19{,}72\ \mathrm{M}$. Il quoziente di reazione immediatamente dopo la compressione vale

$$Q_c = \frac{\lbrack \mathrm{N_2O_4}\rbrack }{\lbrack \mathrm{NO_2}\rbrack ^2} = \frac{19{,}72}{0{,}40^2} = 123{,}3\ \mathrm{M^{-1}}.$$

Poiché $Q_c = 123{,}3\ \mathrm{M^{-1}} < K_c = 246{,}5\ \mathrm{M^{-1}}$, il sistema non è più all'equilibrio e, per quanto visto nella verifica quantitativa dello spostamento, la reazione deve procedere verso destra, formando ulteriore $\mathrm{N_2O_4}$.
4. *Verifica qualitativa con Le Châtelier.* La reazione passa da due moli di gas (reagenti) a una mole di gas (prodotto), cioè $\Delta n = 1 - 2 = -1 < 0$. Una diminuzione di volume (aumento di pressione) deve spostare l'equilibrio verso il membro con il minor numero di moli gassose, cioè verso $\mathrm{N_2O_4}$: la previsione qualitativa di Le Châtelier è quindi coerente con il calcolo quantitativo di $Q_c$ rispetto a $K_c$.

Impostando lo schema IVE a partire da $\lbrack \mathrm{NO_2}\rbrack _0 = 0{,}40\ \mathrm{M}$ e $\lbrack \mathrm{N_2O_4}\rbrack _0 = 19{,}72\ \mathrm{M}$ con variazione $-2x$ e $+x$ rispettivamente, e risolvendo $K_c = (19{,}72+x)/(0{,}40-2x)^2 = 246{,}5$, si trova all'equilibrio $\lbrack \mathrm{NO_2}\rbrack  \approx 0{,}283\ \mathrm{M}$ e $\lbrack \mathrm{N_2O_4}\rbrack  \approx 19{,}78\ \mathrm{M}$: il numero totale di moli (cioè $10{,}03\ \mathrm{mol}$ dopo la compressione, in $0{,}500\ \mathrm{L}$) è effettivamente diminuito rispetto alle $10{,}06\ \mathrm{mol}$ di partenza, confermando lo spostamento verso i prodotti previsto da Le Châtelier.

Una applicazione industriale importante di questi principi è la sintesi dell'ammoniaca, $\mathrm{N_2(g) + 3\,H_2(g) \rightleftharpoons 2\,NH_3(g)}$, discussa nella sezione [Equilibrio dinamico e costante di equilibrio](ref:chapter/12#p2): poiché la reazione passa da quattro a due moli di gas, lavorare ad alte pressioni favorisce la formazione di $\mathrm{NH_3}$; la resa viene inoltre aumentata utilizzando un eccesso di reagenti economici (in particolare $\mathrm{N_2}$) e sottraendo continuamente il prodotto, liquefatto e allontanato dalla miscela di reazione, in modo da mantenere basso $Q_c$ rispetto a $K_c$ e favorire ulteriore produzione.
