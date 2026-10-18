---
chapter: 14
title: Entropia ed energia libera
---

## p1 | Introduzione

Capire se una trasformazione può avvenire spontaneamente aiuta a interpretare fenomeni chimici che la sola termochimica non basta a descrivere. L’entropia considera il numero di microstati accessibili e permette di distinguere ciò che accade nel sistema da ciò che accade nell’ambiente. Insieme all’energia libera di Gibbs, offre un criterio per valutare la spontaneità a temperatura e pressione costanti e per collegare le proprietà termodinamiche alla composizione di equilibrio.

Per affrontare il capitolo servono le basi della termochimica e la conoscenza dell’equilibrio chimico, compreso il significato di costante di equilibrio. Occorre saper leggere un’equazione bilanciata e usare le grandezze molari standard. Queste conoscenze permettono di seguire i calcoli senza confondere le condizioni standard con quelle della miscela reale.

Al termine saprai calcolare la variazione standard di entropia di reazione a partire dai dati delle sostanze, determinare la variazione standard di energia libera da entalpia ed entropia o dalle energie libere di formazione e stimare la temperatura alla quale cambia il criterio di spontaneità. Saprai inoltre ricavare la costante di equilibrio dai dati termodinamici e stabilire il verso favorito della reazione confrontando il quoziente di reazione con la costante di equilibrio.

## p2 | Spontaneità ed entropia

### Spontaneità e direzione delle trasformazioni

Una trasformazione è **spontanea** se, nelle condizioni specificate, procede nella direzione termodinamicamente favorita. Spontanea non significa rapida: il criterio termodinamico indica una direzione possibile, non il tempo necessario per osservarla. Inoltre, il segno della sola variazione di entalpia non basta a stabilire la spontaneità. L’acqua può solidificare spontaneamente sotto $0\ ^\circ\mathrm{C}$ e fondere spontaneamente sopra $0\ ^\circ\mathrm{C}$, benché i due processi abbiano segni opposti di $\Delta H$.

Il [primo principio](ref:chapter/7#p2) descrive la conservazione dell’energia, ma da solo non stabilisce in quale direzione avvenga una trasformazione. Per affrontare questa domanda occorre considerare come l’energia possa distribuirsi tra le particelle.

### Entropia e microstati

**Definizione 14.1** (microstato). Un microstato è una particolare configurazione microscopica del sistema, specificata dagli stati accessibili alle sue particelle. Per una molecola contribuiscono, fra gli altri, gli stati elettronici, traslazionali, rotazionali e vibrazionali. Il numero $W$ conta i microstati compatibili con le condizioni macroscopiche considerate.

**Definizione 14.2** (entropia). Quando i microstati considerati sono equiprobabili, la relazione di Boltzmann lega l’entropia $S$ al loro numero $W$; $k_{\mathrm B}$ è la costante di Boltzmann.

:::formula{id="14.1" label="Entropia e numero di microstati"}
$$S=k_{\mathrm B}\ln W$$
:::

Se una trasformazione rende accessibili più microstati, l’entropia aumenta: l’energia può essere distribuita in più modi. L’entropia è una **funzione di stato**, quindi la sua variazione dipende dagli stati iniziale e finale, non dal percorso seguito. Come l’energia interna e l’entalpia, è una proprietà estensiva: raddoppiando la quantità di una stessa sostanza nelle medesime condizioni, raddoppia anche la sua entropia.

Per una data sostanza, l’entropia generalmente aumenta al crescere della temperatura. Nelle transizioni di fase, l’accesso a nuovi modi di movimento porta di norma all’ordine $S_{(s)}<S_{(l)}<S_{(g)}$. Nel gas le particelle hanno molta più libertà di movimento che nelle fasi condensate. Anche un aumento del numero di particelle gassose in una reazione suggerisce spesso un aumento dell’entropia del sistema. Queste sono indicazioni qualitative: per conoscere il valore e il segno esatti di una variazione occorrono dati termodinamici.

:::image{src="assets/16c1ad2c-entropia-stati-fisici.svg" alt="Diagramma a livelli che mostra S(solido) minore di S(liquido) minore di S(gas)" caption="Fig. 14.1 — Ordine qualitativo dell'entropia molare per una stessa sostanza nei tre stati fisici"}
:::

La dissoluzione richiede più cautela. Quando un solido ionico si scioglie, gli ioni si disperdono, ma parte delle molecole di solvente si organizza attorno a essi. I due effetti contribuiscono in versi opposti alla variazione complessiva di entropia; il solo fatto che il soluto si disperda non ne determina il segno. Il mescolamento di gas diversi, invece, aumenta i modi in cui le loro molecole possono distribuirsi.

### Secondo e terzo principio

**Secondo principio della termodinamica.** Per un processo spontaneo, l’entropia complessiva del sistema e dell’ambiente aumenta. Se il loro insieme è isolato, all’equilibrio l’entropia non cambia per una variazione infinitesima ammissibile. Il criterio di spontaneità riguarda dunque **sistema e ambiente insieme**.

:::formula{id="14.2" label="Criterio entropico di spontaneità"}
$$\Delta S_{\mathrm{universo}}=\Delta S_{\mathrm{sistema}}+\Delta S_{\mathrm{ambiente}}>0\qquad\text{per un processo spontaneo}$$
:::

La diminuzione di $S_{\mathrm{sistema}}$ non viola il secondo principio se l’aumento di $S_{\mathrm{ambiente}}$ è maggiore. Per esempio, l’acqua che solidifica può cedere calore all’ambiente. Quando questo si comporta come un serbatoio a temperatura costante $T$ e lo scambio avviene a pressione costante, vale $\Delta S_{\mathrm{ambiente}}=-\Delta H_{\mathrm{sistema}}/T$, con $T$ espressa in kelvin. Per una trasformazione esotermica, $\Delta H_{\mathrm{sistema}}<0$ e il contributo entropico dell’ambiente è positivo.

**Terzo principio della termodinamica.** Un cristallo perfetto, con un unico assetto microscopico accessibile, ha entropia nulla allo zero assoluto. In tali ipotesi $W=1$ e {{formula:14.1}} dà $S=k_{\mathrm B}\ln 1=0$. Il principio fornisce il riferimento per determinare entropie assolute a temperature superiori. Un’altra formulazione riportata negli appunti del corso afferma che lo zero assoluto non può essere raggiunto mediante un numero finito di trasformazioni.

Le tabelle riportano di solito l’**entropia molare standard** $S^\circ$, in $\mathrm{J/(mol\cdot K)}$, per una sostanza in uno stato fisico specificato, alla temperatura indicata. In questa sezione lo stato standard si riferisce alla pressione di $1\ \mathrm{bar}$, a soluti con concentrazione standard di $1\ \mathrm{mol/L}$ e, salvo diversa indicazione, a $25\ ^\circ\mathrm{C}$. L’entropia molare standard di un elemento a questa temperatura non va posta uguale a zero: il valore nullo del terzo principio si riferisce al cristallo perfetto a $0\ \mathrm{K}$.

### Entropia standard di reazione

**Definizione 14.3** (entropia standard di reazione). Per un’equazione chimica bilanciata, con specie negli stati fisici indicati, $\Delta S_r^\circ$ è la somma delle entropie molari standard dei prodotti, ciascuna moltiplicata per il proprio coefficiente stechiometrico, meno la corrispondente somma per i reagenti. Il valore si riferisce alla reazione **come scritta**: invertendo l’equazione cambia segno; moltiplicando tutti i coefficienti per uno stesso fattore, si moltiplica $\Delta S_r^\circ$ per quel fattore.

:::formula{id="14.3" label="Entropia standard di reazione"}
$$\Delta S_r^\circ=\sum_{i\in\mathrm{prodotti}}\nu_iS_i^\circ-\sum_{j\in\mathrm{reagenti}}\nu_jS_j^\circ$$
:::

**Esempio svolto 14.1.** Si calcoli $\Delta S_r^\circ$ per $\mathrm{N_2O_4}_{(g)}\rightleftharpoons 2\mathrm{NO_2}_{(g)}$ usando i dati assegnati $S^\circ(\mathrm{N_2O_4}_{(g)})=304{,}3\ \mathrm{J/(mol\cdot K)}$ e $S^\circ(\mathrm{NO_2}_{(g)})=240{,}1\ \mathrm{J/(mol\cdot K)}$.

1. **Dati.** L’equazione è bilanciata; il coefficiente di $\mathrm{N_2O_4}_{(g)}$ è $1$, quello di $\mathrm{NO_2}_{(g)}$ è $2$. Entrambi i dati si riferiscono alla fase gassosa.
2. **Strategia.** Si applica {{formula:14.3}} nella direzione di dissociazione scritta, sommando i prodotti e sottraendo i reagenti.
3. **Calcolo.** $\Delta S_r^\circ=2(240{,}1)-1(304{,}3)=175{,}9\ \mathrm{J/(mol\cdot K)}$.
4. **Verifica.** Il risultato è positivo, coerentemente con il passaggio da $1$ a $2$ moli di gas per ogni avanzamento della reazione come scritta. È l’entropia del **sistema**: da sola non prova che la dissociazione sia spontanea nelle condizioni effettive.

:::image{src="assets/16c1ad2c-entropia-reazione-n2o4-no2.svg" alt="Diagramma a livelli con l'entropia di N2O4 gassoso, l'entropia di 2 NO2 gassoso e una freccia che indica la variazione di entropia standard di reazione pari a 175,9 J per mole kelvin" caption="Fig. 14.2 — Entropie molari standard di N2O4(g) e di 2 NO2(g) e variazione di entropia standard della reazione N2O4(g) -> 2 NO2(g)"}
:::

**Errore tipico 14.1.** Dimenticare il coefficiente $2$ davanti a $S^\circ(\mathrm{NO_2}_{(g)})$ altera il risultato. Un altro errore è attribuire spontaneità a una reazione soltanto perché $\Delta S_r^\circ>0$: il secondo principio richiede di considerare anche l’ambiente. Nella sezione sull’[energia libera di Gibbs](ref:chapter/14#p3) questo controllo verrà espresso tramite grandezze del sistema.

## p3 | Energia libera di Gibbs

### Il criterio di spontaneità

**Definizione 14.4** (energia libera di Gibbs). Per un sistema in uno stato di equilibrio termodinamico, l’energia libera di Gibbs è la funzione di stato $G=H-TS$, dove $H$ è l’entalpia, $S$ l’entropia e $T$ la temperatura assoluta. In una trasformazione a temperatura costante, la sua variazione è $\Delta G=\Delta H-T\Delta S$.

A temperatura e pressione costanti, se l’ambiente scambia calore con il sistema alla stessa temperatura, vale $\Delta S_{\mathrm{ambiente}}=-\Delta H_{\mathrm{sistema}}/T$. Il secondo principio dà allora $\Delta G_{\mathrm{sistema}}=-T\Delta S_{\mathrm{universo}}$. Poiché $T>0$, una variazione $\Delta G<0$ indica una trasformazione spontanea nel verso considerato; $\Delta G>0$ indica che quel verso non è spontaneo; $\Delta G=0$ corrisponde all’equilibrio. Il criterio riguarda la possibilità termodinamica della trasformazione, non la sua velocità.

Per una reazione, il simbolo $\Delta G_r^\circ$ indica la variazione di energia libera **standard**, riferita a reagenti e prodotti nei rispettivi stati standard alla temperatura indicata. In questo capitolo lo stato standard usa la pressione di $1\ \mathrm{bar}$ per i gas e la concentrazione di $1\ \mathrm{mol/L}$ per i soluti. Un valore negativo di $\Delta G_r^\circ$ descrive il verso favorito **in condizioni standard**; per una miscela con composizione diversa occorre valutare $\Delta G_r$, come si vedrà in [Energia libera ed equilibrio](ref:chapter/14#p4).

### Calcolare l’energia libera standard

Se sono note l’entalpia e l’entropia standard della stessa reazione bilanciata, entrambe alla temperatura $T$, si applica la relazione seguente. La temperatura deve essere espressa in kelvin e $T\Delta S_r^\circ$ deve avere la stessa unità di $\Delta H_r^\circ$.

:::formula{id="14.4" label="Energia libera standard da entalpia ed entropia"}
$$\Delta G_r^\circ=\Delta H_r^\circ-T\Delta S_r^\circ$$
:::

Per esempio, se $\Delta H_r^\circ$ è espresso in $\mathrm{kJ/mol}$ e $\Delta S_r^\circ$ in $\mathrm{J/(mol\cdot K)}$, si converte prima l’entropia in $\mathrm{kJ/(mol\cdot K)}$. Il risultato è riferito alla reazione **così come è scritta**: raddoppiando tutti i coefficienti stechiometrici, raddoppiano anche $\Delta H_r^\circ$, $\Delta S_r^\circ$ e $\Delta G_r^\circ$.

Un secondo metodo usa le energie libere standard di formazione, indicate con $\Delta G_f^\circ$. Per definizione, $\Delta G_f^\circ$ riguarda la formazione di una mole di composto nello stato standard a partire dagli elementi nei loro stati standard. Per un elemento nel proprio stato standard, $\Delta G_f^\circ=0$; questo non significa che la sua energia libera assoluta sia nulla. Come nel calcolo dell’entalpia di reazione, si sommano i valori dei prodotti e si sottraggono quelli dei reagenti, moltiplicando ciascuno per il suo coefficiente stechiometrico.

:::formula{id="14.5" label="Energia libera standard di reazione dalle energie di formazione"}
$$\Delta G_r^\circ=\sum_{i\,\mathrm{prodotti}}\nu_i\Delta G_{f,i}^\circ-\sum_{j\,\mathrm{reagenti}}\nu_j\Delta G_{f,j}^\circ$$
:::

Qui $\nu_i$ e $\nu_j$ sono i coefficienti **positivi** dell’equazione bilanciata. Occorre usare il valore di formazione della fase effettivamente scritta: una sostanza liquida e la stessa sostanza gassosa sono stati termodinamici diversi.

**Esempio svolto 14.2** (dati ipotetici). Si consideri la reazione modello $\mathrm{A}_{(g)}+2\mathrm{B}_{(g)}\to\mathrm{C}_{(g)}$, con $\Delta G_f^\circ(\mathrm{A})=-10,0\ \mathrm{kJ/mol}$, $\Delta G_f^\circ(\mathrm{B})=+5,0\ \mathrm{kJ/mol}$ e $\Delta G_f^\circ(\mathrm{C})=-40,0\ \mathrm{kJ/mol}$, tutti alla stessa temperatura. I valori sono assegnati per esercitare il metodo, non descrivono sostanze reali.

1. **Dati:** il coefficiente di $\mathrm{B}$ è $2$; quelli di $\mathrm{A}$ e $\mathrm{C}$ sono $1$.
2. **Strategia:** si usa {{formula:14.5}} , sommando i contributi dei prodotti e sottraendo quelli dei reagenti.
3. **Calcolo:** $\Delta G_r^\circ=\lbrack 1(-40,0)\rbrack -\lbrack 1(-10,0)+2(+5,0)\rbrack =-40,0\ \mathrm{kJ/mol}$. I due contributi dei reagenti si annullano.
4. **Verifica:** il risultato è riferito a una mole di reazione come scritta ed è negativo. La reazione modello è quindi favorita nel verso diretto in condizioni standard.

### Temperatura e segno dell’energia libera

Se $\Delta H_r^\circ$ e $\Delta S_r^\circ$ possono essere considerati circa costanti nell’intervallo di temperatura studiato, {{formula:14.4}} permette di prevedere come cambia il segno di $\Delta G_r^\circ$. Senza questa ipotesi, i valori misurati a una temperatura non vanno prolungati automaticamente a temperature lontane.

- Se $\Delta H_r^\circ<0$ e $\Delta S_r^\circ>0$, allora $\Delta G_r^\circ<0$ a ogni temperatura positiva dell’intervallo considerato.
- Se $\Delta H_r^\circ>0$ e $\Delta S_r^\circ<0$, allora $\Delta G_r^\circ>0$ a ogni temperatura positiva dell’intervallo considerato.
- Se entrambi sono positivi, $\Delta G_r^\circ<0$ alle temperature sufficientemente alte: il termine $T\Delta S_r^\circ$ supera $\Delta H_r^\circ$.
- Se entrambi sono negativi, $\Delta G_r^\circ<0$ alle temperature sufficientemente basse; aumentando $T$, il termine $-T\Delta S_r^\circ$ diventa positivo e cresce.

Quando $\Delta H_r^\circ$ e $\Delta S_r^\circ$ hanno lo stesso segno e $\Delta S_r^\circ\ne0$, la temperatura alla quale la **stima standard** cambia segno si trova imponendo $\Delta G_r^\circ=0$. Il rapporto deve dare una temperatura positiva e ha significato quantitativo solo nell’intervallo in cui l’ipotesi di valori circa costanti resta accettabile.

:::formula{id="14.6" label="Temperatura soglia della stima standard"}
$$T_{\mathrm{soglia}}=\frac{\Delta H_r^\circ}{\Delta S_r^\circ}$$
:::

**Esempio svolto 14.3** (ossidazione dell’anidride solforosa). Per $2\mathrm{SO_2}_{(g)}+\mathrm{O_2}_{(g)}\to2\mathrm{SO_3}_{(g)}$ sono dati $\Delta H_r^\circ=-198,4\ \mathrm{kJ/mol}$ e $\Delta S_r^\circ=-187,9\ \mathrm{J/(mol\cdot K)}$. Si stimi il segno di $\Delta G_r^\circ$ a $900\ ^\circ\mathrm{C}$, assumendo costanti i due dati termodinamici.

1. **Dati:** $T=900+273,15=1\,173,15\ \mathrm{K}$ e $\Delta S_r^\circ=-0,1879\ \mathrm{kJ/(mol\cdot K)}$.
2. **Strategia:** poiché entalpia ed entropia sono entrambe negative, l’aumento di temperatura rende $\Delta G_r^\circ$ meno negativo e può cambiarne il segno.
3. **Calcolo:** $\Delta G_r^\circ=-198,4-(1\,173,15)(-0,1879)=+22,0\ \mathrm{kJ/mol}$, arrotondato alla precisione dei dati. La soglia stimata è $T_{\mathrm{soglia}}=(-198,4)/(-0,1879)=1\,056\ \mathrm{K}$; $1\,173,15\ \mathrm{K}$ è sopra tale soglia.
4. **Verifica:** il segno positivo indica che il verso diretto non è favorito **nelle condizioni standard** a questa temperatura. Per stabilire il verso in una miscela concreta servono anche le sue pressioni parziali.

:::image{src="assets/5a685a00-gibbs-ossidazione-so2.svg" alt="Retta crescente della variazione di energia libera standard in funzione della temperatura, con attraversamento dello zero vicino a 1056 kelvin e valore positivo a 1173 kelvin" caption="Fig. 14.3 — Stima per l’ossidazione dell’anidride solforosa: con entalpia ed entropia considerate costanti, la variazione di energia libera standard cresce e cambia segno."}
:::

**Errore tipico 14.2.** Usare $900$ al posto di $1\,173,15\ \mathrm{K}$, oppure sottrarre direttamente un termine in joule a un’entalpia in kilojoule, altera il risultato. Anche con unità corrette, il segno di $\Delta G_r^\circ$ non basta a stabilire il verso di reazione per una composizione qualunque.

## p4 | Energia libera ed equilibrio

### Dalla composizione all'energia libera

La variazione di energia libera standard, $\Delta G_r^\circ$, descrive la reazione quando le specie si trovano nei rispettivi stati standard. Per stabilire in quale verso evolve una miscela **nelle condizioni effettive**, serve anche la sua composizione: una stessa reazione può procedere verso i prodotti in una miscela e verso i reagenti in un'altra, alla stessa temperatura. Il criterio del segno di $\Delta G_r$ vale a temperatura e pressione costanti.

**Definizione 14.5** (quoziente di reazione). Per la reazione $a\mathrm{A}+b\mathrm{B}\rightleftharpoons c\mathrm{C}+d\mathrm{D}$, $Q$ ha la forma del rapporto tra i contributi dei prodotti e quelli dei reagenti, ciascuno elevato al proprio coefficiente stechiometrico. Si calcola con la composizione **attuale**; quando si usano le concentrazioni si parla di $Q_c$, quando si usano le pressioni parziali di $Q_p$. All'equilibrio, $Q=K$. Le espressioni operative di $Q$ e $K$ sono introdotte in [Quoziente di reazione e calcoli di equilibrio](ref:chapter/12#p3).

Per usare il logaritmo, $Q$ deve essere adimensionale e positivo. In modo rigoroso si costruisce con le **attività**: per un gas ideale il contributo è $p_i/p^\circ$, con $p^\circ=1\ \mathrm{bar}$; per un soluto in soluzione diluita si usa l'approssimazione $c_i/c^\circ$, con $c^\circ=1\ \mathrm{mol/L}$. I solidi e i liquidi puri hanno attività unitaria. Se i dati di un esercizio adottano $1\ \mathrm{atm}$ come pressione standard, occorre dichiarare tale convenzione e mantenerla in tutti i rapporti.

**Relazione fondamentale.** Per una reazione alla temperatura $T$, in una miscela per cui $Q$ è definito, la variazione di energia libera nel verso in cui l'equazione è scritta è data da {{formula:14.7}}. $R$ e $\Delta G_r$ devono essere espressi in unità coerenti; se $R=8{,}314\ \mathrm{J/(mol\cdot K)}$, $T$ va espresso in kelvin e l'energia risulta in joule per mole di reazione.

:::formula{id="14.7" label="Energia libera e quoziente di reazione"}
$$\Delta G_r=\Delta G_r^\circ+RT\ln Q$$
:::

### Equilibrio e costante termodinamica

All'equilibrio non c'è un verso di avanzamento privilegiato: $Q=K$ e $\Delta G_r=0$. Sostituendo queste condizioni in {{formula:14.7}} si ottiene {{formula:14.8}}. La grandezza che si annulla è la **variazione** di energia libera associata a un piccolo avanzamento della reazione, non l'energia libera totale della miscela.

:::formula{id="14.8" label="Energia libera standard e costante di equilibrio"}
$$\Delta G_r^\circ=-RT\ln K\qquad\Longleftrightarrow\qquad K=\exp\!\left(-\frac{\Delta G_r^\circ}{RT}\right)$$
:::

Poiché $R$ e $T$ sono positivi, $\Delta G_r^\circ<0$ implica $K>1$, $\Delta G_r^\circ>0$ implica $K<1$ e $\Delta G_r^\circ=0$ implica $K=1$. Queste affermazioni riguardano la **posizione dell'equilibrio** alla temperatura considerata; da sole non stabiliscono il verso in cui evolve una miscela iniziale.

Combinando le due relazioni si ricava $\Delta G_r=RT\ln(Q/K)$. Se $Q<K$, il logaritmo è negativo e la reazione procede spontaneamente nel verso scritto; se $Q>K$, procede nel verso inverso; se $Q=K$, è all'equilibrio. È lo stesso criterio già usato in [Quoziente di reazione e calcoli di equilibrio](ref:chapter/12#p3), ora espresso come variazione di energia libera. Nel calcolo **fuori dall'equilibrio** il termine logaritmico di {{formula:14.7}} contiene $Q$, non $K$.

:::image{src="assets/d150ec17-energia-libera-contro-q.svg" alt="Curva crescente di energia libera in funzione di Q, con zero all'equilibrio" caption="Fig. 14.4 — A temperatura fissata, la variazione di energia libera cresce con Q e si annulla quando Q raggiunge K."}
:::

### Calcolare la costante dai dati termodinamici

Se si conoscono $\Delta H_r^\circ$ e $\Delta S_r^\circ$ alla temperatura d'interesse, si calcola prima $\Delta G_r^\circ=\Delta H_r^\circ-T\Delta S_r^\circ$, poi si applica {{formula:14.8}}. In alternativa, $\Delta G_r^\circ$ si può ottenere dalle energie libere standard di formazione, come visto in [Energia libera di Gibbs](ref:chapter/14#p3). Per temperature lontane da quella a cui sono tabulati i dati, mantenere costanti $\Delta H_r^\circ$ e $\Delta S_r^\circ$ è un'approssimazione da dichiarare.

**Esempio svolto 14.4.** Per una reazione ipotetica, a $25{,}00\ ^\circ\mathrm{C}$ sono assegnati $\Delta H_r^\circ=-40{,}0\ \mathrm{kJ/mol}$ e $\Delta S_r^\circ=-100{,}0\ \mathrm{J/(mol\cdot K)}$. Calcolare $K$ e stabilire il verso di evoluzione di una miscela con $Q=10{,}0$.

1. **Dati.** La temperatura assoluta è $T=25{,}00+273{,}15=298{,}15\ \mathrm{K}$. Si usa $R=8{,}314\ \mathrm{J/(mol\cdot K)}$ e si converte $\Delta H_r^\circ=-40\,000\ \mathrm{J/mol}$.
2. **Strategia.** Si ricavano nell'ordine $\Delta G_r^\circ$, $K$ e infine $\Delta G_r$ alla composizione assegnata.
3. **Calcolo.** $\Delta G_r^\circ=-40\,000-(298{,}15)(-100{,}0)=-10\,185\ \mathrm{J/mol}$. Quindi $\ln K=-\Delta G_r^\circ/(RT)=10\,185/(8{,}314\cdot298{,}15)=4{,}109$ e $K=\exp(4{,}109)=60{,}9$. Per $Q=10{,}0$, $\Delta G_r=-10\,185+(8{,}314)(298{,}15)\ln(10{,}0)=-4{,}48\ \mathrm{kJ/mol}$.
4. **Verifica.** Risulta $Q<K$ e $\Delta G_r<0$: entrambi i criteri indicano un avanzamento verso i prodotti. I risultati intermedi sono stati conservati con più cifre; quelli finali sono arrotondati alla precisione dei dati.

**Errore tipico 14.3.** Inserire $-40{,}0$ in kilojoule insieme a $R=8{,}314$ in joule, oppure usare $25{,}00$ al posto di $298{,}15$ nella formula esponenziale, altera drasticamente $K$. Un altro errore è dedurre il verso di evoluzione dal solo segno di $\Delta G_r^\circ$: per la miscela concreta si deve calcolare $Q$ e confrontarlo con $K$, oppure calcolare $\Delta G_r$.
