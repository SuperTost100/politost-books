---
chapter: 11
title: Le soluzioni
---

## p1 | Introduzione

Le soluzioni sono presenti nei processi biologici, nei prodotti di uso quotidiano e nelle procedure di laboratorio. Capire come si forma una soluzione e da quali fattori dipende la quantità di soluto che può sciogliersi permette di interpretare fenomeni come la dissoluzione di un gas in una bevanda o la preparazione accurata di un reagente. La concentrazione, inoltre, collega la composizione di una soluzione ai calcoli stechiometrici; le proprietà colligative mostrano infine come il numero di particelle disciolte influenzi ebollizione, congelamento e pressione osmotica.

Per affrontare il capitolo servono le idee sulle forze intermolecolari nei liquidi e nei solidi, utili per spiegare le interazioni tra soluto e solvente, e le basi della stechiometria, necessarie per passare da masse e volumi a quantità di sostanza. Al termine saprai descrivere il processo di dissoluzione e distinguere soluzioni insature, sature e sovrassature; esprimere e convertire le concentrazioni, preparare una diluizione e usare i dati di una soluzione nei calcoli chimici. Saprai anche calcolare le variazioni di tensione di vapore, temperatura di ebollizione e congelamento e pressione osmotica, tenendo conto della dissociazione degli elettroliti.

## p2 | Dissoluzione e solubilità

### Soluzioni, soluto e solvente

Una **soluzione** è una miscela omogenea di due o più componenti distribuiti in un'unica fase (solida, liquida o gassosa), con composizione e proprietà chimico-fisiche uniformi in ogni punto. Il **solvente** è in genere il componente presente in maggiore quantità, mentre il **soluto** è il componente (o i componenti) disciolto; entrambi possono essere solidi, liquidi o gas. A differenza di un composto puro, la composizione di una soluzione è variabile e va sempre specificata tramite la concentrazione, cioè la quantità di soluto disciolta in un certo volume o massa di soluzione o di solvente.

Il processo con cui si forma una soluzione è detto **dissoluzione**. Quando il soluto è un composto ionico, il meccanismo con cui le singole particelle si separano e si circondano di molecole di solvente è detto **solvatazione**; se il solvente è l'acqua, si parla specificamente di **idratazione**. Il capitolo successivo riprende queste grandezze per definire in modo quantitativo molarità, molalità e frazione molare (vedi [Espressioni della concentrazione](ref:chapter/11#p3)).

### Solubilità e stato di saturazione

La **solubilità** $S$ di una sostanza è la massima quantità (concentrazione) di soluto che si può sciogliere in una quantità fissata di un dato solvente, a una temperatura specificata. In base alla quantità di soluto effettivamente disciolta rispetto a questo massimo, una soluzione si classifica in uno dei tre modi seguenti.

- **Soluzione insatura**: contiene meno soluto disciolto del massimo consentito a quella temperatura; se si aggiunge altro soluto, questo continua a sciogliersi.
- **Soluzione satura**: contiene la quantità massima di soluto disciolto a una data temperatura, in presenza di soluto indisciolto in equilibrio dinamico con quello disciolto; se si aggiunge altro soluto questo non si scioglie più e forma un precipitato (corpo di fondo).
- **Soluzione sovrassatura**: contiene più soluto di quanto previsto dall'equilibrio di saturazione; è termodinamicamente instabile, e un piccolo disturbo (un cristallo-germe o un urto) fa cristallizzare immediatamente l'eccesso, riportando il sistema a una soluzione satura.

La condizione di saturazione è quindi un vero e proprio equilibrio dinamico: gli ioni (o le molecole) che si distaccano dal solido passano in soluzione con la stessa velocità con cui gli ioni in soluzione, collidendo con il solido indisciolto, ricristallizzano; per questo motivo la concentrazione della soluzione satura resta costante nel tempo.

### Le forze intermolecolari e la regola "il simile scioglie il simile"

La capacità di una sostanza di sciogliersi in un'altra dipende dal confronto tra le [forze intermolecolari](ref:chapter/10#p2) che si instaurano tra soluto e solvente e quelle che devono essere vinte all'interno del soluto puro e del solvente puro. Vale la regola empirica: sostanze con forze intermolecolari simili tendono a sciogliersi tra loro ("il simile scioglie il simile"). In particolare, le molecole polari si sciolgono più facilmente in solventi polari e le molecole apolari in solventi apolari.

Questo principio si traduce in interazioni specifiche a seconda della natura di soluto e solvente.

- **Forze ione-dipolo**: quando un sale ionico si scioglie in acqua, ogni ione sulla superficie del cristallo attrae l'estremità di carica opposta del dipolo dell'acqua; queste forze vincono le forze interioniche del reticolo e lo demoliscono, mentre attorno a ogni ione si forma un guscio (sfera) di idratazione.
- **Forze dipolo-dipolo e legami a idrogeno**: sono il fattore dominante nella capacità dell'acqua di sciogliere composti organici polari come alcoli, zuccheri, ammine e amminoacidi.
- **Forze ione-dipolo indotto e dipolo-dipolo indotto**: una carica ionica, oppure un dipolo permanente, può distorcere la nube elettronica di una particella vicina e generare un'interazione, anche quando quest'ultima è apolare.

Per prevedere se una dissoluzione avverrà occorre confrontare l'intensità delle forze che si formano tra soluto e solvente con quella delle forze che vengono distrutte sia nel soluto puro sia nel solvente puro. Un esempio tipico è il confronto tra un alcol disciolto in acqua e lo stesso alcol disciolto in esano: con l'acqua si formano legami a idrogeno (tramite il gruppo $-\text{OH}$) e forze dipolo-dipolo indotto verso la catena carboniosa, ma i legami a idrogeno acqua-acqua che occorre rompere sono più forti delle forze di dispersione esano-esano, il che rende meno favorevole la dissoluzione in acqua rispetto a quella in esano per catene carboniose lunghe.

### Bilancio energetico della dissoluzione

Per quantificare l'effetto delle forze intermolecolari sulla dissoluzione si scompone il processo in tre tappe ideali, ciascuna con il proprio contributo entalpico.

1. Separazione delle particelle di soluto: si vincono le attrazioni interne al soluto, quindi la tappa è endotermica ($\Delta H_{\text{soluto}} > 0$).
2. Separazione delle particelle di solvente: analogamente si vincono le attrazioni interne al solvente, tappa endotermica ($\Delta H_{\text{solvente}} > 0$).
3. Mescolamento di soluto e solvente: le particelle di segno opposto (o di polarità opposta) si attraggono, quindi la tappa è esotermica ($\Delta H_{\text{mesc}} < 0$).

La somma di queste tre tappe, per la legge di Hess, definisce l'**entalpia di soluzione**.

:::formula{id="11.1" label="Entalpia di soluzione"}
$$\Delta H_{\text{soluz}} = \Delta H_{\text{soluto}} + \Delta H_{\text{solvente}} + \Delta H_{\text{mesc}}$$
:::

Per l'idratazione degli ioni di un solido ionico in acqua è utile raggruppare le ultime due tappe nell'**entalpia di idratazione** $\Delta H_{\text{idr}} = \Delta H_{\text{solvente}} + \Delta H_{\text{mesc}}$, sempre esotermica ($\Delta H_{\text{idr}} < 0$), e riconoscere che $\Delta H_{\text{soluto}}$ coincide, con il segno cambiato, con l'energia reticolare del solido ionico ($\Delta H_{\text{soluto}} = -\Delta H_{\text{reticolare}}$), ed è quindi sempre endotermico. In generale, per altri tipi di soluto e solvente, il segno della somma $\Delta H_{\text{solvente}} + \Delta H_{\text{mesc}}$ non è stabilito a priori e va determinato caso per caso. Per il solido ionico si ottiene così la forma operativa

$$\Delta H_{\text{soluz}} = -\Delta H_{\text{reticolare}} + \Delta H_{\text{idr}},$$

dove sono i valori assoluti relativi dei due termini a determinare il segno finale: per NaCl i due contributi si bilanciano quasi esattamente e non si osserva variazione apprezzabile di temperatura, per NaOH prevale $\Delta H_{\text{idr}}$ (negativo) e il sistema libera calore, mentre per NH4NO3 prevale $\Delta H_{\text{reticolare}}$ e il sistema si raffredda.

Un $\Delta H_{\text{soluz}}$ favorevole, cioè negativo o modesto, non basta da solo a garantire che una sostanza si sciolga: bisogna considerare anche l'**entropia**, la grandezza termodinamica legata al numero di modi in cui un sistema può distribuire la propria energia e alla libertà di movimento delle sue particelle. Nella dissoluzione di un solido o di un liquido sono spesso possibili più interazioni e configurazioni che nel soluto e nel solvente separati, per cui l'entropia tende ad aumentare ($\Delta S_{\text{soluz}} > 0$); tuttavia il segno di $\Delta S_{\text{soluz}}$ dipende dal sistema, perché conta anche il grado di organizzazione del solvente attorno al soluto, e può risultare negativo, come accade per molte dissoluzioni di gas. I sistemi tendono spontaneamente a minimizzare l'entalpia e massimizzare l'entropia, e la spontaneità della dissoluzione è decisa dal bilancio $\Delta G_{\text{soluz}} = \Delta H_{\text{soluz}} - T \Delta S_{\text{soluz}}$. Nel caso di NH4NO3 in acqua, ad esempio, la dissoluzione avviene nonostante $\Delta H_{\text{soluz}} > 0$ perché l'aumento di entropia è così grande da prevalere comunque.

**Errore tipico 11.1**: pensare che una dissoluzione endotermica ($\Delta H_{\text{soluz}} > 0$) sia impossibile. Il criterio corretto per la spontaneità coinvolge sempre entalpia ed entropia insieme (ripreso formalmente in [Energia libera di Gibbs](ref:chapter/14#p3)); un valore sfavorevole di $\Delta H$ può essere compensato da un forte aumento di $\Delta S$.

### Effetto della temperatura sulla solubilità

Per i soluti solidi la solubilità in acqua in genere aumenta con la temperatura, con alcune eccezioni; una parte rilevante dei processi di dissoluzione di elettroliti solidi è endotermica, per cui in questi casi un aumento di temperatura favorisce ulteriormente la dissoluzione per il principio dell'equilibrio spostato verso i prodotti.

Per i gas disciolti in acqua vale invece l'andamento opposto: la solubilità diminuisce all'aumentare della temperatura. La ragione sta nel bilancio energetico: poiché le particelle di un gas sono già separate tra loro, il termine $\Delta H_{\text{soluto}}$ è trascurabile ($\Delta H_{\text{soluto}} \approx 0$), e dato che l'idratazione è sempre esotermica ($\Delta H_{\text{idr}} < 0$), il contributo entalpico totale risulta negativo, $\Delta H_{\text{soluz}} < 0$: la dissoluzione di un gas libera calore. Un aumento di temperatura fornisce alle particelle gassose disciolte l'energia cinetica necessaria a superare le deboli forze intermolecolari gas-solvente e a tornare in fase gassosa, riducendo quindi la solubilità del gas.

### Effetto della pressione e legge di Henry

La pressione ha un effetto trascurabile sulla solubilità di solidi e liquidi in acqua, perché questi sono praticamente incomprimibili. Per i gas, invece, la pressione è una variabile determinante, ed è descritta dalla **legge di Henry**.

**Teorema 11.1** (legge di Henry). In una soluzione diluita, se il gas non reagisce in modo significativo con il solvente, a temperatura costante la concentrazione $c$ (o la solubilità $S$) del gas disciolto è direttamente proporzionale alla pressione parziale $p_i$ che il gas esercita sulla soluzione.

:::formula{id="11.2" label="Legge di Henry"}
$$c = k_H \, p_i \qquad (T \text{ costante})$$
:::

dove $c$ è la concentrazione del gas disciolto, $p_i$ la sua pressione parziale sopra la soluzione, e $k_H$ la **costante di Henry**, caratteristica di ciascuna coppia gas-solvente e dipendente dalla temperatura. Un aumento della pressione parziale del gas comprime il gas sovrastante e aumenta la frequenza con cui le sue molecole collidono con la superficie del liquido, aumentando così la quantità disciolta; viceversa un aumento di temperatura aumenta l'energia cinetica delle molecole di gas disciolte, che tendono a fuggire più facilmente dalla soluzione, diminuendo $k_H$.

:::image{src="assets/fc091c84-legge-di-henry-plot.svg" alt="Grafico della concentrazione del gas disciolto in funzione della pressione parziale, retta passante per l'origine" caption="Fig. 11.1 — Andamento lineare previsto dalla legge di Henry: c = k_H p_i, a temperatura costante"}
:::

**Esempio svolto 11.1**. Un gas ha costante di Henry $k_H = 1,3 \times 10^{-3} \ \text{mol}/(\text{L}\cdot\text{atm})$ in acqua a 25 °C. Calcolare la concentrazione del gas disciolto quando la sua pressione parziale sopra la soluzione è $p_i = 0,80$ atm.

- Dati: $k_H = 1,3 \times 10^{-3} \ \text{mol}/(\text{L}\cdot\text{atm})$; $p_i = 0,80$ atm.
- Strategia: si applica direttamente {{formula:11.2}}, valida a temperatura costante.
- Calcolo:

$$c = k_H \, p_i = (1,3 \times 10^{-3} \ \text{mol}/(\text{L}\cdot\text{atm})) \times (0,80 \ \text{atm}) = 1,0 \times 10^{-3} \ \text{mol/L}.$$

- Verifica: dimensionalmente $\lbrack \text{mol}/(\text{L}\cdot\text{atm})\rbrack  \times \lbrack \text{atm}\rbrack  = \lbrack \text{mol/L}\rbrack $, coerente con una concentrazione; il risultato ha due cifre significative, coerenti con i dati di partenza.

Una delle applicazioni più note di questo fenomeno è la variazione della solubilità dei gas respiratori con la profondità in immersione subacquea: aumentando la pressione aumenta la pressione parziale di ogni gas respirato e quindi la sua solubilità nel sangue, con effetti fisiologici che vanno dalla narcosi da azoto alla tossicità dell'ossigeno.

**Errore tipico 11.2**: applicare la legge di Henry anche a solidi o liquidi disciolti, oppure confondere la pressione parziale del gas sopra la soluzione con la pressione totale della miscela gassosa; la legge di Henry si applica a un singolo componente gassoso tramite la sua pressione parziale, concetto già definito in [Densità, massa molare e miscele gassose](ref:chapter/6#p3).

## p3 | Espressioni della concentrazione

La concentrazione di una soluzione esprime la quantità relativa di soluto presente in essa; è una proprietà intensiva, perché non dipende dalla quantità totale di miscela considerata. Il rapporto può essere costruito tra la quantità di soluto e la quantità di soluzione, oppure, in un solo caso importante, tra la quantità di soluto e la quantità di solvente. Poiché numeratore e denominatore possono essere espressi in massa, volume o moli, esistono diverse espressioni quantitative della concentrazione, ciascuna adatta a un tipo di calcolo.

### Unità di concentrazione e conversioni

**Definizione 11.1** (Molarità). La molarità $M_i$ (o $c_i$) del componente $i$ è il rapporto tra le moli di $i$ e il volume della soluzione, espresso in litri

:::formula{id="11.3" label="Molarità"}
$$M_i = \frac{n_i}{V_{\text{soluzione}}}, \qquad [M] = \operatorname{mol/L}$$
:::

Il denominatore è il volume di soluzione, non il volume di solvente aggiunto: il soluto occupa esso stesso un certo volume, quindi sciogliere 1 mol di soluto in 1 L di solvente non produce in generale una soluzione 1 M. Per preparare una soluzione a molarità nota si introduce in un matraccio volumetrico la massa di soluto calcolata, si aggiunge solvente fino a circa metà del volume finale, si agita per sciogliere completamente il soluto e solo infine si porta a volume aggiungendo altro solvente fino al repère del matraccio.

**Definizione 11.2** (Molalità). La molalità $m_i$ del componente $i$ è il rapporto tra le moli di $i$ e la massa del solvente, espressa in chilogrammi

:::formula{id="11.4" label="Molalità"}
$$m_i = \frac{n_i}{m_{\text{solvente}}}, \qquad [m] = \operatorname{mol/kg}$$
:::

La molalità è la sola, tra le grandezze qui definite, che ha al denominatore la massa del solvente puro e non quella (o il volume) della soluzione; questa differenza è la ragione per cui la molalità, a differenza della molarità, non dipende dalla temperatura (il volume di una soluzione varia con $T$, la sua massa no).

**Definizione 11.3** (Frazione molare). La frazione molare $x_i$ del componente $i$ è il rapporto tra le moli di $i$ e le moli totali di tutti i componenti della soluzione

:::formula{id="11.5" label="Frazione molare in soluzione"}
$$x_i = \frac{n_i}{n_{\text{tot}}}, \qquad n_{\text{tot}} = \sum_k n_k$$
:::

La frazione molare è una grandezza adimensionale e la somma delle frazioni molari di tutti i componenti è sempre uguale a 1; questa stessa definizione era già stata introdotta per le miscele gassose in [Densità, massa molare e miscele gassose](ref:chapter/6#p3).

Le percentuali sono tre, e differiscono per le unità usate a numeratore e denominatore:

- percentuale in massa (o in peso), $\%\,w/w$: grammi di soluto per 100 g di soluzione, $\displaystyle \%\frac{w}{w}_i = \frac{m_i}{m_{\text{soluzione}}}\cdot 100$
- percentuale in volume, $\%\,V/V$: volumi di soluto per 100 volumi di soluzione (usata per miscele di liquidi), $\displaystyle \%\frac{V}{V}_i = \frac{V_i}{V_{\text{soluzione}}}\cdot 100$
- percentuale massa su volume, $\%\,w/V$: grammi di soluto per 100 mL di soluzione, $\displaystyle \%\frac{w}{V}_i = \frac{m_i}{V_{\text{soluzione}}}\cdot 100$.

:::formula{id="11.6" label="Percentuali di concentrazione"}
$$\%\frac{w}{w}_i = \frac{m_i}{m_{\text{soluzione}}}\cdot 100, \quad \%\frac{V}{V}_i = \frac{V_i}{V_{\text{soluzione}}}\cdot 100, \quad \%\frac{w}{V}_i = \frac{m_i}{V_{\text{soluzione}}}\cdot 100$$
:::

Per le percentuali massa/massa e volume/volume, numeratore e denominatore vanno espressi nella stessa unità di misura e il rapporto è adimensionale. La percentuale massa/volume indica invece convenzionalmente grammi di soluto per 100 mL di soluzione: nella formula la massa va espressa in grammi e il volume in millilitri.

Le unità di concentrazione non sono isolate: sono tutte interconvertibili, a condizione di disporre delle informazioni giuste. Per passare da un'unità basata sulle moli (molarità, molalità, frazione molare) a una basata sulla massa (percentuale in massa) occorre la massa molare del soluto, che permette di tradurre moli in grammi e viceversa. Per passare da un'unità basata sulla massa a una basata sul volume (ad esempio dalla percentuale in massa alla molarità) occorre invece la densità della soluzione, che lega la massa totale al volume totale. Infine, ogni volta che una delle due grandezze coinvolte è la molalità bisogna ricordare che essa fa riferimento alla massa del solo solvente, mentre tutte le altre unità fanno riferimento alla soluzione intera.

Per soluzioni acquose molto diluite, molarità e molalità numeriche coincidono quasi esattamente, perché 1 L di soluzione ha una massa prossima a 1 kg (la densità dell'acqua è circa 1 g/mL e il soluto è poco concentrato): questa approssimazione è utile come controllo rapido, ma non vale per soluzioni concentrate o per solventi diversi dall'acqua.

**Esempio svolto 11.2.** Una soluzione acquosa di acqua ossigenata ($\mathrm{H_2O_2}$, $M = 34,02\ \mathrm{g/mol}$) ha concentrazione del 30,0 % in massa e densità $\rho = 1,11\ \mathrm{g/mL}$. Calcolare la molalità, la frazione molare del soluto e la molarità.

Dati: $\%\,w/w = 30,0\ \%$, $\rho = 1,11\ \mathrm{g/mL}$, $M_{\mathrm{H_2O_2}} = 34,02\ \mathrm{g/mol}$, $M_{\mathrm{H_2O}} = 18,02\ \mathrm{g/mol}$.

Strategia: poiché la percentuale in massa non dipende dalla quantità totale, si ipotizza un campione comodo di 100 g di soluzione, da cui si ricavano direttamente le masse di soluto e solvente.

Calcolo. Su 100 g di soluzione: 30,0 g sono $\mathrm{H_2O_2}$ e 70,0 g sono $\mathrm{H_2O}$.

$$n_{\mathrm{H_2O_2}} = \frac{30,0}{34,02} = 0,882\ \mathrm{mol}$$

Molalità:
$$m_{\mathrm{H_2O_2}} = \frac{0,882\ \mathrm{mol}}{70,0 \times 10^{-3}\ \mathrm{kg}} = 12,6\ \mathrm{mol/kg}$$

Frazione molare: con $n_{\mathrm{H_2O}} = 70,0/18,02 = 3,88\ \mathrm{mol}$ e $n_{\text{tot}} = 0,882 + 3,88 = 4,76\ \mathrm{mol}$,

$$
x_{\mathrm{H_2O_2}} = \frac{0,882}{4,76} = 0,185
$$

Molarità: occorre prima il volume della soluzione tramite la densità,
$$V_{\text{soluzione}} = \frac{m_{\text{soluzione}}}{\rho} = \frac{100\ \mathrm{g}}{1,11\ \mathrm{g/mL}} = 90,1\ \mathrm{mL}$$
$$M_{\mathrm{H_2O_2}} = \frac{0,882\ \mathrm{mol}}{90,1 \times 10^{-3}\ \mathrm{L}} = 9,79\ \mathrm{mol/L}$$

Verifica: usando unità coerenti, la molarità si calcola da $c = \rho\,w/M_{\mathrm{H_2O_2}}$, dove $w = 0,300$ è la frazione massica e si esprime la densità in $\mathrm{g/L}$: $c = (1110\ \mathrm{g/L})(0,300)/(34,02\ \mathrm{g/mol}) = 9,79\ \mathrm{mol/L}$.

**Errore tipico 11.3.** Confondere il denominatore della molalità (massa di solvente) con quello della molarità e della percentuale in massa (massa o volume di soluzione intera) porta a errori sistematici quando il soluto è presente in quantità non trascurabile; l'errore si amplifica proprio nei casi, come quello appena svolto, in cui le due quantità differiscono sensibilmente.

**Errore tipico 11.4.** Trattare i volumi di due liquidi miscelati come semplicemente additivi senza verificarlo: a causa delle interazioni soluto-solvente il volume della soluzione può non essere pari alla somma dei volumi dei componenti puri. Il caso più noto è la contrazione volumica di miscele acqua-alcol, dovuta alla differenza tra i volumi molecolari dei due liquidi. L'additività dei volumi si assume solo quando è dichiarata o giustificata dall'approssimazione richiesta; altrimenti si usa il volume finale misurato o la densità appropriata. Quando si aggiunge un soluto solido a un solvente liquido, è usuale approssimare che il volume della soluzione coincida con quello del solvente di partenza.

**Errore tipico 11.5.** Dimenticare che la concentrazione espressa in unità di volume (molarità, percentuale in volume, percentuale massa/volume) dipende dalla temperatura, perché il volume di una soluzione si dilata con il riscaldamento: la stessa soluzione, più calda, contiene un po' meno moli di soluto per unità di volume. La molalità e le percentuali in massa, basate solo su masse, non sono invece influenzate dalla temperatura.

### Diluizioni e stechiometria in soluzione

**Definizione 11.4** (Diluizione). Diluire una soluzione significa aggiungere solo solvente a una soluzione esistente, per ottenere una soluzione più diluita a partire da una più concentrata, nello stesso recipiente o in un altro.

Durante una diluizione le moli di soluto non cambiano, perché non viene aggiunto né rimosso soluto: cambia solo il volume totale in cui esso è disperso. Scrivendo le moli iniziali e finali tramite la definizione di molarità si ottiene l'equazione di diluizione

:::formula{id="11.7" label="Equazione di diluizione"}
$$M_i V_i = M_f V_f$$
:::

valida a condizione che i due volumi $V_i$ e $V_f$ siano espressi nella stessa unità di misura. L'equazione di diluizione non è altro che un caso particolare della conservazione delle moli di soluto, $n_i = n_f$, applicata quando l'unica concentrazione disponibile è la molarità.

**Esempio svolto 11.3.** Calcolare quanta acqua occorre aggiungere a 250 mL di una soluzione acquosa di acido cloridrico 2,00 M per abbassare la sua concentrazione a 0,100 M.

Dati: $M_i = 2,00\ \mathrm{mol/L}$, $V_i = 250\ \mathrm{mL}$, $M_f = 0,100\ \mathrm{mol/L}$.

Strategia: le moli di $\mathrm{HCl}$ restano costanti durante la diluizione, quindi si applica {{formula:11.7}} per trovare il volume finale, da cui si sottrae il volume iniziale per avere il volume di acqua da aggiungere.

Calcolo.
$$V_f = \frac{M_i V_i}{M_f} = \frac{2,00 \times 250\ \mathrm{mL}}{0,100} = 5,00 \times 10^3\ \mathrm{mL} = 5,00\ \mathrm{L}$$
$$M_f = \frac{M_i V_i}{V_f} = \frac{2,00\ \mathrm{mol/L}\times 0,250\ \mathrm{L}}{5,00\ \mathrm{L}} = 0,100\ \mathrm{mol/L}$$

Verifica: il volume finale è 20 volte quello iniziale, quindi la concentrazione finale è un ventesimo di quella iniziale: $2,00\ \mathrm{mol/L}/20 = 0,100\ \mathrm{mol/L}$, in accordo con il calcolo.

:::image{src="assets/c5a30c3b-diluizione-concentrazione-volume.svg" alt="Grafico della molarità in funzione del volume durante una diluizione, con due punti evidenziati: lo stato iniziale a 0,250 L e 2,00 mol/L, lo stato finale a 5,00 L e 0,100 mol/L" caption="Fig. 11.2 — Concentrazione finale in funzione del volume finale per la diluizione di 250 mL di HCl 2,00 M: la curva è un'iperbole, perché a parità di moli di soluto raddoppiare il volume dimezza la concentrazione; il punto a 5,00 L corrisponde alla diluizione a 0,100 M calcolata nell'esempio."}
:::

Le equazioni di diluizione si combinano direttamente con le tecniche di calcolo stechiometrico già introdotte per le reazioni in soluzione (si veda [Calcoli stechiometrici e reagente limitante](ref:chapter/4#p4)): la molarità permette di passare dal volume di una soluzione alle moli di reagente tramite $n = M V$, e da lì ai rapporti molari stechiometrici [formula (4.2)](ref:formula/4.2) già definiti per le reazioni in fase gassosa e solida. Lo stesso schema è già stato applicato alle titolazioni acido-base in [Reazioni acido-base e neutralizzazione](ref:chapter/5#p4), dove la condizione di equivalenza [formula (5.6)](ref:formula/5.6) è un caso particolare di questo procedimento generale: moli di reagente $A$ note dal volume e dalla molarità della sua soluzione, convertite tramite il rapporto stechiometrico in moli dell'altro reagente o prodotto.

Un procedimento tipico di stechiometria in soluzione segue quindi questi passi: si scrive e si bilancia l'equazione della reazione; si convertono i volumi e le molarità delle soluzioni note in moli, con $n = MV$; si usano i coefficienti stechiometrici bilanciati per passare dalle moli di una specie alle moli di un'altra, individuando se richiesto il reagente limitante con il criterio [formula (4.3)](ref:formula/4.3); infine si riconvertono le moli trovate in massa, volume di soluzione o concentrazione, secondo quanto richiesto dal problema.

**Errore tipico 11.6.** Applicare $M_i V_i = M_f V_f$ a una miscelazione tra due soluzioni diverse di soluti differenti, invece che a una vera diluizione con solvente puro: l'equazione vale solo quando le moli dello stesso soluto si conservano passando da uno stato iniziale a uno finale, non quando si mescolano quantità di sostanze chimicamente diverse, caso che va trattato invece come un problema di bilancio di moli separato per ciascuna specie.

**Errore tipico 11.7.** Confondere il rapporto di diluizione $V_f/V_i$ con il volume di solvente da aggiungere: quest'ultimo si ottiene solo come differenza $V_f - V_i$, mai omettendo la sottrazione del volume iniziale.

## p4 | Proprietà colligative

### Definizione e classificazione

La presenza di un soluto modifica alcune proprietà fisiche del solvente. Quattro di queste proprietà dipendono soltanto dal numero di particelle di soluto disciolte, e non dalla loro natura chimica: sono le **proprietà colligative**.

**Definizione 11.5** (proprietà colligativa). Una proprietà colligativa è una proprietà fisica di una soluzione che dipende solo dal numero di particelle distinte (atomi, molecole o ioni) presenti in soluzione, e non dalla loro identità chimica.

Per prevedere correttamente il numero di particelle occorre distinguere il comportamento del soluto in acqua, come già introdotto nella sezione su [l'acqua come solvente](ref:chapter/5#p3):

- elettroliti forti: dissociazione completa in cationi e anioni, elevata conducibilità (sali solubili, acidi forti, basi forti);
- elettroliti deboli: dissociazione parziale, conducibilità modesta (acidi e basi deboli);
- non elettroliti: nessuna dissociazione ionica, nessuna conducibilità (molti composti organici).

Le quattro proprietà colligative che tratteremo sono l'abbassamento della tensione di vapore, l'innalzamento ebullioscopico, l'abbassamento crioscopico e la pressione osmotica. Nei paragrafi che seguono le enunciamo prima per soluti non elettroliti e non volatili, poi generalizziamo al caso degli elettroliti con il coefficiente di van 't Hoff.

### Legge di Raoult e abbassamento della tensione di vapore

La tensione di vapore di una soluzione è sempre più bassa di quella del solvente puro. Questo fatto si può giustificare in due modi equivalenti: da un punto di vista entropico, i processi spontanei procedono verso un aumento del disordine, e il vapore puro sopra il solvente è "più disordinato" del vapore sopra una soluzione, oppure da un punto di vista delle interazioni intermolecolari, poiché le interazioni soluto-solvente che si formano rallentano l'evaporazione delle molecole di solvente.

**Teorema 11.2** (legge di Raoult). Per una soluzione ideale la tensione di vapore del solvente sopra la soluzione vale

$$
p_{\text{solvente}} = x_{\text{solvente}} \cdot p_{\text{solvente}}^{0},
$$

dove $p_{\text{solvente}}^{0}$ è la tensione di vapore del solvente puro e $x_{\text{solvente}}$ la sua frazione molare in soluzione. La legge vale sotto le ipotesi di soluzione ideale:

1. soluzione diluita;
2. tensione di vapore del soluto trascurabile rispetto a quella del solvente;
3. il soluto non presenta fenomeni associativi o dissociativi;
4. il soluto non reagisce con il solvente;
5. le interazioni intermolecolari soluto-soluto, soluto-solvente e solvente-solvente sono tutte paragonabili.

Poiché $x_{\text{solvente}} = 1 - x_{\text{soluto}}$, sostituendo si ottiene $p_{\text{solvente}} = p_{\text{solvente}}^{0} - x_{\text{soluto}}\cdot p_{\text{solvente}}^{0}$, cioè, definendo $\Delta p = p_{\text{solvente}}^{0} - p_{\text{solvente}} > 0$ come abbassamento della tensione di vapore:

:::formula{id="11.8" label="Abbassamento della tensione di vapore (legge di Raoult)"}
$$\Delta p = x_{\text{soluto}} \cdot p_{\text{solvente}}^{0}, \qquad \frac{p_{\text{solvente}}^{0}-p_{\text{solvente}}}{p_{\text{solvente}}^{0}} = \frac{n_{\text{soluto}}}{n_{\text{soluto}}+n_{\text{solvente}}}$$
:::

Alcuni testi definiscono invece $\Delta p = p_{\text{solvente}} - p_{\text{solvente}}^{0}$, ottenendo un valore negativo; il contenuto fisico è identico, cambia solo la convenzione di segno.

**Esempio svolto 11.4.** 10,0 mL di glicerolo $\text{C}_3\text{H}_8\text{O}_3$ (densità $1,26$ g/mL) vengono aggiunti a 500 mL di acqua a 50,0 °C. A questa temperatura l'acqua pura ha tensione di vapore $92,5$ mmHg e densità $0,988$ g/mL. Calcolare l'abbassamento della tensione di vapore.

- Dati: $V_{\text{glicerolo}} = 10,0$ mL, $\rho_{\text{glicerolo}} = 1,26$ g/mL, $M_{\text{glicerolo}} = 92,09$ g/mol; $V_{\text{H}_2\text{O}} = 500$ mL, $\rho_{\text{H}_2\text{O}} = 0,988$ g/mL, $M_{\text{H}_2\text{O}} = 18,02$ g/mol; $p^0_{\text{H}_2\text{O}} = 92,5$ mmHg.
- Strategia: ricavare le masse dalla densità, convertirle in moli, calcolare la frazione molare del soluto e applicare {{formula:11.8}}.
- Calcolo:
$\displaystyle \begin{aligned} m_{\text{C}_3\text{H}_8\text{O}_3} &= 10,0 \cdot 1,26 = 12,6\ \text{g}, \quad n_{\text{C}_3\text{H}_8\text{O}_3} = \frac{12,6}{92,09} = 0,137\ \text{mol} \\ m_{\text{H}_2\text{O}} &= 500 \cdot 0,988 = 494\ \text{g}, \quad n_{\text{H}_2\text{O}} = \frac{494}{18,02} = 27,4\ \text{mol} \\ x_{\text{C}_3\text{H}_8\text{O}_3} &= \frac{0,137}{0,137+27,4} = 4,97 \times 10^{-3} \\ \Delta p &= 4,97 \times 10^{-3} \cdot 92,5 = 0,460\ \text{mmHg} \end{aligned}$
- Verifica: $\Delta p$ è molto minore di $p^0$, come ci si aspetta per una soluzione diluita; le unità di $\Delta p$ coincidono con quelle di $p^0$.

### Innalzamento ebullioscopico e abbassamento crioscopico

La temperatura di ebollizione di un liquido è quella a cui la sua tensione di vapore eguaglia la pressione esterna. Poiché la tensione di vapore della soluzione è inferiore a quella del solvente puro a qualunque temperatura, alla temperatura di ebollizione normale del solvente puro la soluzione non bolle ancora: occorre scaldarla di più. Questo fenomeno è l'**innalzamento ebullioscopico**.

:::formula{id="11.9" label="Innalzamento ebullioscopico"}
$$\Delta T_{eb} = K_{eb} \cdot m', \qquad T_{eb,\text{soluzione}} = T_{eb,\text{solvente}} + \Delta T_{eb}$$
:::

dove $m'$ è la molalità del soluto (in mol/kg) e $K_{eb}$ è la costante ebullioscopica, caratteristica del solvente.

In modo analogo, le molecole di soluto interferiscono con le forze attrattive tra le molecole di solvente, ostacolandone la solidificazione: la temperatura di congelamento della soluzione è più bassa di quella del solvente puro, fenomeno detto **abbassamento crioscopico**. Si ricordi che soltanto il solvente solidifica.

:::formula{id="11.10" label="Abbassamento crioscopico"}
$$\Delta T_{cr} = K_{cr} \cdot m', \qquad T_{cong,\text{soluzione}} = T_{cong,\text{solvente}} - \Delta T_{cr}$$
:::

$K_{cr}$ (o $K_{eb}$) dipende dalla natura del solvente e si misura in °C/m, cioè °C·kg/mol. La molalità, e non la molarità, compare in queste due leggi perché $K_{eb}$ e $K_{cr}$ sono state definite rispetto alla massa di solvente, grandezza indipendente dalla temperatura (si veda la sezione sulle [espressioni della concentrazione](ref:chapter/11#p3)).

**Esempio svolto 11.5.** 1,00 kg di anticongelante $\text{C}_2\text{H}_6\text{O}_2$ (etilenglicole, $M = 62,1$ g/mol) viene aggiunto a 4450 g di acqua ($K_{eb} = 0,512$ °C·kg/mol, $K_{cr} = 1,86$ °C·kg/mol). Calcolare la temperatura di ebollizione e di congelamento della soluzione.

- Strategia: calcolare moli e molalità del soluto, poi applicare entrambe le leggi.
- Calcolo:
$$n = \frac{1,00\times 10^3}{62,1} = 16,1\ \text{mol}, \qquad m' = \frac{16,1}{4,450} = 3,62\ \text{mol/kg}$$
$$\Delta T_{eb} = 0,512 \cdot 3,62 = 1,85\ ^\circ\text{C} \ \Rightarrow \ T_{eb} = 100 + 1,85 = 101,85\ ^\circ\text{C}$$
$$\Delta T_{cr} = 1,86 \cdot 3,62 = 6,73\ ^\circ\text{C} \ \Rightarrow \ T_{cong} = 0 - 6,73 = -6,73\ ^\circ\text{C}$$
- Verifica: entrambi gli effetti vanno nella direzione prevista (ebollizione più alta, congelamento più basso).

### Pressione osmotica

La pressione osmotica si osserva quando due soluzioni a diversa concentrazione (o una soluzione e il solvente puro) sono separate da una membrana semipermeabile, che lascia passare il solvente ma non il soluto. Il solvente fluisce spontaneamente verso il lato più concentrato (processo di **osmosi**); se l'esperimento è condotto in un tubo a U, il livello del liquido dal lato della soluzione più concentrata sale finché la differenza di pressione idrostatica tra i due bracci non arresta il flusso netto di solvente, senza che le concentrazioni debbano eguagliarsi.

**Definizione 11.6** (pressione osmotica). La pressione osmotica $\pi$ è la pressione applicata necessaria per impedire il flusso netto di solvente tra le due soluzioni, ovvero tra una soluzione e il solvente puro.

:::formula{id="11.11" label="Pressione osmotica"}
$$\pi = \frac{n_{\text{soluto}}\cdot R \cdot T}{V_{\text{soluzione}}} = M \cdot R \cdot T$$
:::

dove $M$ è la molarità del soluto, $R$ è la costante universale dei gas ($0,08206$ L·atm/(mol·K) oppure $8,314$ J/(mol·K), a seconda delle unità di $\pi$) e $T$ è la temperatura assoluta. La forma dell'equazione è formalmente identica a quella dei gas ideali, [formula (6.5)](ref:formula/6.5), con $\pi$ al posto di $P$ e $M = n/V$ al posto di $n/V$.

Applicando una pressione esterna maggiore di $\pi$ sul lato più concentrato si inverte il flusso naturale dell'osmosi: il solvente passa dalla soluzione concentrata a quella diluita, processo detto **osmosi inversa**, usato per esempio nella dissalazione dell'acqua di mare.

:::image{src="assets/b0075d93-diagramma-osmosi-membrana.svg" alt="Schema qualitativo del dislivello di liquido tra due bracci di un tubo a U separati da una membrana semipermeabile, con il livello della soluzione più alto di quello del solvente puro" caption="Fig. 11.3 — Pressione osmotica tra soluzione e solvente puro separati da una membrana semipermeabile"}
:::

**Esempio svolto 11.6** (ricavare la massa molare di un soluto). 21,5 mg di una proteina sciolti in acqua danno una soluzione di volume 1,50 mL, con pressione osmotica $3,61$ mmHg a 5,00 °C. Calcolare la massa molare del soluto.

- Strategia: isolare $n_{\text{soluto}}$ da {{formula:11.11}}, poi dividere la massa nota per le moli trovate.
- Calcolo:
$\displaystyle n_{\text{soluto}} = \frac{\pi V}{RT} = \frac{(3,61/760)\cdot 1,50\times 10^{-3}}{0,08206 \cdot (5,00+273,15)} = 3,12\times 10^{-7}\ \text{mol}$
$\displaystyle M = \frac{m}{n} = \frac{21,5\times 10^{-3}}{3,12\times 10^{-7}} = 6,89\times 10^{4}\ \text{g/mol}$
- Verifica: il valore è plausibile per una macromolecola proteica. Questo esempio mostra che, tra le proprietà colligative, la pressione osmotica è la più sensibile per determinare masse molari elevate, perché a parità di massa di soluto genera un effetto misurabile anche con pochissime moli.

### Soluzioni di elettroliti e coefficiente di van 't Hoff

Le equazioni precedenti valgono per soluti non elettroliti, in cui ogni unità formula resta una singola particella. Per gli elettroliti il numero di particelle effettivamente presenti in soluzione dipende dal grado di dissociazione, già definito con [formula (5.5)](ref:formula/5.5) nella sezione su [l'acqua come solvente](ref:chapter/5#p3). A parità di concentrazione, una soluzione di NaCl produce un innalzamento ebullioscopico circa doppio rispetto a una soluzione di glucosio della stessa molalità, perché NaCl si dissocia in due particelle mentre il glucosio resta indissociato.

**Definizione 11.7** (coefficiente di van 't Hoff). Si definisce

$$
i = 1 + \alpha\,(\nu - 1)
$$

dove $i$ è il coefficiente di van 't Hoff (il numero effettivo di particelle liberate da un'unità di soluto), $\alpha$ è il grado di dissociazione (da 0 a 1) e $\nu$ è il numero massimo di particelle che l'unità di soluto può liberare per dissociazione completa.

Per un sale come $\text{CaCl}_2 \to \text{Ca}^{2+} + 2\text{Cl}^-$ si ha $\nu = 3$; per un elettrolita forte, con $\alpha = 1$, risulta semplicemente $i = \nu$. Salvo indicazione contraria, si assume dissociazione completa ($\alpha = 1$) per sali, acidi forti e basi forti.

Introducendo $i$, le quattro leggi colligative diventano:

:::formula{id="11.12" label="Proprietà colligative con il coefficiente di van 't Hoff"}
$$\Delta p = p_{\text{solvente}}^{0}\cdot\frac{i\,n_{\text{soluto}}}{n_{\text{solvente}}+i\,n_{\text{soluto}}} \approx i \cdot x_{\text{soluto}} \cdot p_{\text{solvente}}^{0}\ \left(\text{soluzioni molto diluite}\right), \qquad \Delta T_{eb} = i \cdot K_{eb}\cdot m', \qquad \Delta T_{cr} = i \cdot K_{cr} \cdot m', \qquad \pi = i \cdot M \cdot R \cdot T$$
:::

Per $i = 1$ (non elettrolita indissociato) queste espressioni si riducono a quelle già viste nei paragrafi precedenti.

**Esempio svolto 11.7.** Calcolare la massa di cloruro di calcio $\text{CaCl}_2$ ($M = 110,98$ g/mol) necessaria a far congelare a $-5,00$ °C una soluzione contenente 500 g di solvente, con $K_{cr} = 1,86$ °C·kg/mol.

- Strategia: $\text{CaCl}_2$ è un sale, quindi un elettrolita forte ($\alpha=1$); dalla dissociazione $\text{CaCl}_2 \to \text{Ca}^{2+} + 2\text{Cl}^-$ si ha $\nu = 3$, e dunque $i = \nu = 3$.
- Calcolo:
$\displaystyle \Delta T_{cr} = T_{cong,\text{solvente}} - T_{cong,\text{soluzione}} = 0 - (-5,00) = 5,00\ ^\circ\text{C}$
$\displaystyle m' = \frac{\Delta T_{cr}}{i \cdot K_{cr}} = \frac{5,00}{3 \cdot 1,86} = 0,896\ \text{mol/kg}$
$\displaystyle n_{\text{CaCl}_2} = 0,896 \cdot 0,500 = 0,448\ \text{mol}, \qquad m_{\text{CaCl}_2} = 0,448 \cdot 110,98 = 49,7\ \text{g}$
- Verifica: trascurare la dissociazione (usare $i=1$) avrebbe triplicato la massa calcolata rispetto a quella corretta, da cui l'importanza di identificare $\nu$ prima di procedere.

**Errore tipico 11.8.** Lo studente spesso dimentica il fattore $i$ per sali, acidi forti e basi forti, trattandoli come se fossero molecole indissociate, oppure calcola $\nu$ sbagliando il numero di ioni liberati dalla formula (per esempio $\nu=2$ per $\text{CaCl}_2$ invece di $\nu=3$). Un secondo errore frequente è usare la molarità al posto della molalità in $\Delta T_{eb}$ e $\Delta T_{cr}$: queste due leggi richiedono sempre $m'$, perché $K_{eb}$ e $K_{cr}$ sono definite rispetto alla massa di solvente, indipendente dalla temperatura, mentre la molarità varia con la dilatazione termica del volume di soluzione.
