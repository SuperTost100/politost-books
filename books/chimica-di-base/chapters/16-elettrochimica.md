---
chapter: 16
title: Elettrochimica
---

## p1 | Introduzione

L’elettrochimica mostra come una reazione chimica possa produrre corrente elettrica e come la corrente possa, a sua volta, guidare una trasformazione chimica. Questi processi sono alla base di pile, accumulatori, celle a combustibile e tecniche industriali come la raffinazione del rame. Capirli aiuta a interpretare il funzionamento dei dispositivi che usiamo e a prevedere se una reazione può avvenire spontaneamente o richiede energia dall’esterno.

Per affrontare il capitolo, è utile saper riconoscere le principali classi di reazioni chimiche, soprattutto ossidazioni e riduzioni, e avere familiarità con entropia ed energia libera. Queste idee permettono di seguire il trasferimento di elettroni e di collegare le trasformazioni chimiche all’energia disponibile. Si partirà dalle celle voltaiche, distinguendo il percorso degli elettroni da quello degli ioni, per poi passare ai potenziali standard e alle condizioni reali descritte dall’equazione di Nernst.

Al termine saprai analizzare celle voltaiche ed elettrolitiche, individuare anodo e catodo e calcolare il potenziale di cella in condizioni standard e non standard. Saprai inoltre usare le leggi di Faraday per ricavare la quantità di prodotto ottenuta da una corrente e confrontare batterie primarie, accumulatori e celle a combustibile in base al modo in cui operano.

## p2 | Celle voltaiche

### Dalla reazione redox alla pila

**Definizione 16.1** (cella voltaica). Una cella voltaica, detta anche pila o cella galvanica, sfrutta una reazione di ossidoriduzione spontanea per trasformare energia chimica in energia elettrica. Le due semireazioni avvengono in compartimenti distinti, chiamati **semicelle**. Se ossidante e riducente reagiscono per contatto diretto, gli elettroni passano tra le specie nello stesso recipiente; separando le semireazioni, si può invece farli transitare in un circuito esterno. Per il bilanciamento delle semireazioni si veda [Reazioni di ossidoriduzione](ref:chapter/5#p5).

**Definizione 16.2** (anodo e catodo). L’**anodo** è l’elettrodo dove avviene l’ossidazione; il **catodo** è quello dove avviene la riduzione. Nella cella voltaica l’anodo è il polo negativo e il catodo quello positivo. Gli elettroni prodotti all’anodo percorrono il conduttore esterno e raggiungono il catodo, dove sono consumati. I nomi degli elettrodi dipendono dalla semireazione, mentre i segni qui indicati valgono per una cella voltaica in funzione.

Le semicelle sono collegate anche da un **ponte salino**, oppure da un setto poroso: il collegamento lascia passare ioni senza mescolare liberamente le due soluzioni. Il filo conduce elettroni; nelle soluzioni e nel ponte la carica è trasportata dagli ioni. Senza questo percorso ionico, l’accumulo di carica nelle semicelle ostacolerebbe rapidamente il flusso degli elettroni.

### La pila Daniell: seguire elettroni e ioni

La pila Daniell comprende una lamina di zinco immersa in una soluzione contenente $\mathrm{Zn}^{2+}_{(aq)}$ e una lamina di rame immersa in una soluzione contenente $\mathrm{Cu}^{2+}_{(aq)}$. Un filo unisce le lamine; un ponte salino con ioni che non partecipano alle semireazioni unisce le soluzioni. Le lamine sono **elettrodi attivi**, perché i metalli che le costituiscono partecipano alla reazione.

All’anodo lo zinco si ossida: $\mathrm{Zn}_{(s)} \to \mathrm{Zn}^{2+}_{(aq)}+2e^-$. Al catodo gli ioni rame si riducono: $\mathrm{Cu}^{2+}_{(aq)}+2e^-\to\mathrm{Cu}_{(s)}$. Sommando le semireazioni ed eliminando i due elettroni presenti da entrambi i lati si ottiene $\mathrm{Zn}_{(s)}+\mathrm{Cu}^{2+}_{(aq)}\to\mathrm{Zn}^{2+}_{(aq)}+\mathrm{Cu}_{(s)}$. Durante il funzionamento la lamina di zinco perde massa, mentre il rame si deposita sul catodo.

Nella semicella anodica la formazione di $\mathrm{Zn}^{2+}$ tende ad aumentare la carica positiva della soluzione: gli anioni del ponte migrano verso l’anodo. Nella semicella catodica il consumo di $\mathrm{Cu}^{2+}$ tende a ridurla: i cationi del ponte migrano verso il catodo. Questo moto conserva approssimativamente l’elettroneutralità delle soluzioni e consente alla pila di continuare a funzionare.

:::image{src="assets/cfcf18df-pila-daniell.svg" alt="Schema della pila Daniell con elettrodo di zinco all'anodo e di rame al catodo, collegati da un filo esterno e da un ponte salino" caption="Fig. 16.1 — La pila Daniell: zinco e rame collegati da un filo e da un ponte salino, con le semireazioni di ossidazione e riduzione."}
:::

### Scrivere e leggere la notazione di cella

**Definizione 16.3** (notazione di cella). Nella rappresentazione abbreviata si scrive la semicella anodica a sinistra e quella catodica a destra. Una barra verticale $\mid$ separa fasi diverse, per esempio un metallo solido dalla soluzione dei suoi ioni; due barre $\parallel$ indicano il collegamento tra le semicelle tramite ponte salino o setto poroso. Specie presenti nella stessa fase si separano con una virgola. Quando serve, si riporta anche la concentrazione degli ioni. Gli elettrodi occupano le estremità dello schema.

Per la pila Daniell la notazione è $\mathrm{Zn}_{(s)}\mid\mathrm{Zn}^{2+}_{(aq)}\parallel\mathrm{Cu}^{2+}_{(aq)}\mid\mathrm{Cu}_{(s)}$. Leggendola da sinistra si riconoscono l’elettrodo che si ossida, la sua soluzione, il collegamento ionico, la soluzione in cui avviene la riduzione e infine l’elettrodo che riceve gli elettroni. Le barre descrivono separazioni fisiche: non sono frecce di reazione.

Se nessun reagente o prodotto solido può fungere da elettrodo, si impiega un **elettrodo inerte**, spesso platino o grafite: conduce gli elettroni senza comparire nella semireazione complessiva. In una semicella con due ioni disciolti, i due ioni si scrivono separati da una virgola; la barra separa la soluzione dall’elettrodo inerte.

**Esempio svolto 16.1.** Si considerino una lamina di zinco in una soluzione di $\mathrm{ZnSO_4}$ e una lamina di rame in una soluzione di $\mathrm{CuSO_4}$, collegate da un filo e da un ponte salino. Individuare i poli e scrivere la notazione di cella.

1. **Dati.** Le specie che cambiano stato di ossidazione sono $\mathrm{Zn}_{(s)}$, $\mathrm{Zn}^{2+}_{(aq)}$, $\mathrm{Cu}^{2+}_{(aq)}$ e $\mathrm{Cu}_{(s)}$. Gli ioni solfato delle soluzioni non compaiono nella reazione redox netta.
2. **Strategia.** Si scrivono le semireazioni per identificare dove si producono e dove si consumano elettroni. Il metallo che li produce sarà l’anodo, da collocare a sinistra.
3. **Calcolo.** $\mathrm{Zn}_{(s)}\to\mathrm{Zn}^{2+}_{(aq)}+2e^-$ identifica lo zinco come anodo negativo; $\mathrm{Cu}^{2+}_{(aq)}+2e^-\to\mathrm{Cu}_{(s)}$ identifica il rame come catodo positivo. Si scrive quindi $\mathrm{Zn}_{(s)}\mid\mathrm{Zn}^{2+}_{(aq)}\parallel\mathrm{Cu}^{2+}_{(aq)}\mid\mathrm{Cu}_{(s)}$.
4. **Verifica.** Gli elettroni ceduti e acquistati sono entrambi $2$; gli elettroni scorrono nel filo dallo zinco al rame. La doppia barra indica il collegamento ionico necessario a chiudere il circuito.

### Errori tipici e controllo dello schema

**Errore tipico 16.1.** Attribuire il segno positivo all’anodo perché vi si formano ioni positivi. Nella pila Daniell la formazione di $\mathrm{Zn}^{2+}$ avviene nella soluzione anodica, mentre gli elettroni lasciati dallo zinco escono attraverso l’elettrodo: l’anodo della cella voltaica è il polo negativo.

**Errore tipico 16.2.** Disegnare solo il filo oppure usare la stessa barra per ogni separazione. Il filo offre il percorso agli elettroni, ma il ponte salino offre quello agli ioni; nella notazione $\mid$ indica un confine di fase e $\parallel$ il collegamento tra le semicelle.

Un ultimo controllo è il verso della reazione: per una cella voltaica che funziona spontaneamente, il potenziale di cella nel verso scritto è positivo. Il calcolo dai potenziali di riduzione e la dipendenza dalle concentrazioni sono trattati in [Potenziali standard ed equazione di Nernst](ref:chapter/16#p3).

## p3 | Potenziali standard ed equazione di Nernst

### Potenziali standard di riduzione e potenziale di cella

Nella [cella voltaica](ref:chapter/16#p2) gli elettroni passano dall’anodo, dove avviene l’ossidazione, al catodo, dove avviene la riduzione. La differenza di potenziale $E_{\mathrm{cella}}$ è positiva quando la reazione scritta procede spontaneamente e si misura in volt: $1\ \mathrm{V}=1\ \mathrm{J/C}$. Il potenziale varia con la composizione della cella; per confrontare celle diverse si usa il potenziale standard $E_{\mathrm{cella}}^\circ$.

**Definizione 16.4** (potenziale standard di riduzione). Il valore $E^\circ$ di una semicella è riferito alla semireazione scritta come riduzione. È un valore relativo: per convenzione, l’elettrodo standard a idrogeno, $2\mathrm{H^+}_{(aq)}+2e^-\rightleftharpoons\mathrm{H_2}_{(g)}$, ha $E^\circ=0\ \mathrm{V}$. In questo capitolo le condizioni standard sono pressione di $1\ \mathrm{bar}$ e attività unitarie, approssimate per i soluti diluiti con concentrazioni di $1\ \mathrm{mol/L}$; i valori tabulati qui si riferiscono a $25\ ^\circ\mathrm{C}$. Negli appunti del corso l’elettrodo a idrogeno è descritto a $1\ \mathrm{atm}$: quando un esercizio adotta quella convenzione, la si mantiene nei dati.

Per individuare il verso spontaneo in condizioni standard, si confrontano i **potenziali di riduzione**: la semicella con $E^\circ$ maggiore funziona da catodo; l’altra da anodo. Entrambi i valori restano quelli tabulati come riduzioni, anche se all’anodo la semireazione viene invertita.

:::formula{id="16.1" label="Potenziale standard di cella"}
$$E_{\mathrm{cella}}^\circ=E_{\mathrm{catodo}}^\circ-E_{\mathrm{anodo}}^\circ$$
:::

Nella formula i due termini a destra sono potenziali standard **di riduzione**. Per una pila voltaica che opera spontaneamente nelle condizioni standard, $E_{\mathrm{cella}}^\circ>0$.

**Errore tipico 16.3.** Nel bilanciare gli elettroni si moltiplicano le semireazioni, ma **non** i rispettivi potenziali: $E^\circ$ è una grandezza intensiva. Per la pila Daniell, per esempio, i valori $E^\circ_{\mathrm{Cu^{2+}/Cu}}=+0,34\ \mathrm{V}$ ed $E^\circ_{\mathrm{Zn^{2+}/Zn}}=-0,76\ \mathrm{V}$ danno $E_{\mathrm{cella}}^\circ=0,34-(-0,76)=1,10\ \mathrm{V}$.

### Equazione di Nernst e calcolo della forza elettromotrice

Quando concentrazioni o pressioni cambiano, cambia anche $E_{\mathrm{cella}}$. Per una reazione di cella **bilanciata**, si costruisce il quoziente adimensionale $Q$ dalle attività di prodotti e reagenti, ciascuna elevata al proprio coefficiente stechiometrico. Solidi e liquidi puri hanno attività unitaria e non compaiono in $Q$; per soluzioni sufficientemente diluite si usa spesso il rapporto tra concentrazione e concentrazione standard. Il numero $n$ è il coefficiente degli elettroni scambiati nella reazione bilanciata.

:::formula{id="16.2" label="Equazione di Nernst per una cella"}
$$E_{\mathrm{cella}}=E_{\mathrm{cella}}^\circ-\frac{RT}{nF}\ln Q$$
:::

Qui $T$ è in kelvin, $R=8,314\ \mathrm{J/(mol\cdot K)}$ e $F=96\,485\ \mathrm{C/mol}$. A $25\ ^\circ\mathrm{C}$, cioè $T=298,15\ \mathrm{K}$, usando $\log$ decimale si ottiene $E_{\mathrm{cella}}=E_{\mathrm{cella}}^\circ-(0,0592\ \mathrm{V}/n)\log Q$. Il coefficiente $0,0592\ \mathrm{V}$ vale solo a questa temperatura. Se $Q=1$, il termine correttivo è nullo; se $Q$ aumenta, il potenziale della reazione scritta diminuisce.

**Esempio svolto 16.2.** Si consideri la cella $\mathrm{Zn}_{(s)}\mid\mathrm{Zn^{2+}}_{(aq)}\ (0,10\ \mathrm{mol/L})\parallel\mathrm{Ag^+}_{(aq)}\ (0,20\ \mathrm{mol/L})\mid\mathrm{Ag}_{(s)}$ a $25\ ^\circ\mathrm{C}$. Sono dati $E^\circ_{\mathrm{Zn^{2+}/Zn}}=-0,76\ \mathrm{V}$ ed $E^\circ_{\mathrm{Ag^+/Ag}}=+0,80\ \mathrm{V}$. Si calcoli la forza elettromotrice assumendo soluzioni ideali diluite.

1. **Dati.** L’argento ha il potenziale di riduzione maggiore: è il catodo. Lo zinco è l’anodo.

2. **Strategia.** Si bilanciano le semireazioni $\mathrm{Zn}_{(s)}\to\mathrm{Zn^{2+}}_{(aq)}+2e^-$ e $2\mathrm{Ag^+}_{(aq)}+2e^-\to2\mathrm{Ag}_{(s)}$. La somma è $\mathrm{Zn}_{(s)}+2\mathrm{Ag^+}_{(aq)}\to\mathrm{Zn^{2+}}_{(aq)}+2\mathrm{Ag}_{(s)}$; dunque $n=2$ e $Q=a_{\mathrm{Zn^{2+}}}/a_{\mathrm{Ag^+}}^2$.

3. **Calcolo.** $E_{\mathrm{cella}}^\circ=0,80-(-0,76)=1,56\ \mathrm{V}$. Approssimando le attività con le concentrazioni relative allo standard, $Q=0,10/(0,20)^2=2,5$; quindi $E_{\mathrm{cella}}=1,56-(0,0592/2)\log(2,5)=1,55\ \mathrm{V}$. I potenziali tabulati non sono stati moltiplicati per $2$.

4. **Verifica.** Poiché $Q>1$, Nernst richiede $E_{\mathrm{cella}}<E_{\mathrm{cella}}^\circ$: $1,55\ \mathrm{V}<1,56\ \mathrm{V}$. Il risultato è coerente.

### Pile a concentrazione e pHmetro

Una **pila a concentrazione** impiega la stessa coppia redox in entrambe le semicelle, ma con attività diverse. I due potenziali standard sono uguali, quindi $E_{\mathrm{cella}}^\circ=0$; la differenza di concentrazione può comunque produrre una forza elettromotrice. Per due elettrodi $\mathrm{Cu^{2+}/Cu}$, la semicella più concentrata è il catodo.

Se $c_{\mathrm{alta}}$ e $c_{\mathrm{bassa}}$ sono le concentrazioni degli ioni rame(II), nell’approssimazione ideale a $25\ ^\circ\mathrm{C}$ la reazione trasferisce $n=2$ elettroni e dà $E_{\mathrm{cella}}=(0,0592\ \mathrm{V}/2)\log(c_{\mathrm{alta}}/c_{\mathrm{bassa}})$. Per $c_{\mathrm{alta}}=0,10\ \mathrm{mol/L}$ e $c_{\mathrm{bassa}}=0,010\ \mathrm{mol/L}$, il rapporto è $10$ ed $E_{\mathrm{cella}}=0,0296\ \mathrm{V}$. A concentrazioni uguali, il rapporto diventa $1$ e la forza elettromotrice si annulla.

:::image{src="assets/f445523a-potenziale-pila-concentrazione.svg" alt="Potenziale di una pila a concentrazione di rame in funzione del rapporto tra concentrazione alta e bassa, da 1 a 100" caption="Fig. 16.2 — A 25 gradi Celsius, il potenziale cresce in modo logaritmico con il rapporto tra le concentrazioni degli ioni rame(II)."}
:::

Il **pHmetro** applica una misura di potenziale alla concentrazione idrogenionica. La membrana dell’elettrodo a vetro separa una soluzione interna a composizione nota dal campione; il suo potenziale dipende dalla differenza di attività degli ioni idronio sui due lati. Un elettrodo di riferimento, spesso $\mathrm{Ag/AgCl}$, fornisce un potenziale stabile. La sonda combinata contiene entrambi gli elettrodi.

A $25\ ^\circ\mathrm{C}$ la risposta ideale della membrana cambia di circa $0,0592\ \mathrm{V}$ per unità di $\mathrm{pH}$. Il segno dipende da come si definisce la differenza di potenziale; inoltre il valore misurato comprende una costante strumentale. Perciò lo strumento viene calibrato con tamponi di $\mathrm{pH}$ noto prima di convertire il potenziale in $\mathrm{pH}$. La relazione $\Delta E=0,0592\,\mathrm{pH}$ riportata negli appunti è una forma semplificata riferita a una particolare scelta di zero e verso della misura. La definizione di $\mathrm{pH}$ è trattata in [Autoionizzazione dell’acqua e pH](ref:chapter/13#p3).

### Potenziale, energia libera ed equilibrio

A temperatura e pressione costanti, per la reazione di cella scritta, il potenziale e la variazione di energia libera hanno segno opposto. Se la reazione trasferisce $n$ moli di elettroni per mole di reazione, la carica corrispondente è $nF$.

:::formula{id="16.3" label="Energia libera e potenziale di cella"}
$$\Delta G_r=-nFE_{\mathrm{cella}},\qquad \Delta G_r^\circ=-nFE_{\mathrm{cella}}^\circ$$
:::

In particolare, $E_{\mathrm{cella}}^\circ>0$ implica $\Delta G_r^\circ<0$. Usando $\Delta G_r^\circ=-RT\ln K$ della sezione [Energia libera ed equilibrio](ref:chapter/14#p4), si ricava $E_{\mathrm{cella}}^\circ=(RT/nF)\ln K$, con $K$ adimensionale e riferita alla **stessa equazione bilanciata**. A $25\ ^\circ\mathrm{C}$ vale anche $\log K=nE_{\mathrm{cella}}^\circ/(0,0592\ \mathrm{V})$: un potenziale standard positivo corrisponde a $K>1$. All’equilibrio $Q=K$, $\Delta G_r=0$ ed $E_{\mathrm{cella}}=0$.

**Errore tipico 16.4.** Il segno di $E_{\mathrm{cella}}^\circ$ descrive la reazione nelle condizioni standard; per stabilire il verso spontaneo alla composizione effettiva serve $E_{\mathrm{cella}}$ calcolato con Nernst. Occorre inoltre costruire $Q$ dalla reazione bilanciata: invertire la reazione inverte $Q$ e cambia il segno del potenziale.

## p4 | Elettrolisi e leggi di Faraday

### Prodotti dell'elettrolisi

**Definizione 16.5** (elettrolisi). L'elettrolisi usa energia elettrica fornita da un generatore per far avvenire una reazione di ossidoriduzione non spontanea. In una cella elettrolitica l'**anodo** è collegato al polo positivo del generatore e vi avviene l'ossidazione; il **catodo** è collegato al polo negativo e vi avviene la riduzione. Nell'elettrolita migrano ioni, mentre nel circuito esterno si muovono elettroni. I nomi degli elettrodi dipendono dalla reazione che vi avviene, come nelle [celle voltaiche](ref:chapter/16#p2), ma le polarità sono invertite.

Per prevedere i prodotti occorre prima distinguere un **sale fuso** da una **soluzione acquosa**. Nel sale fuso puro sono presenti gli ioni del sale: il catione può ridursi al catodo e l'anione può ossidarsi all'anodo. Nell'acqua sono possibili anche semireazioni del solvente, che competono con quelle degli ioni disciolti.

**Esempio svolto 16.3** (cloruro di sodio fuso). Il sale fuso contiene $\mathrm{Na^+}$ e $\mathrm{Cl^-}$. Al catodo si ha $\mathrm{Na^+}+e^-\to\mathrm{Na}_{(l)}$; all'anodo $2\mathrm{Cl^-}\to\mathrm{Cl_2}_{(g)}+2e^-$. Moltiplicando la prima semireazione per $2$ e sommando, si ottiene $2\mathrm{NaCl}_{(l)}\to2\mathrm{Na}_{(l)}+\mathrm{Cl_2}_{(g)}$. Il sodio è liquido alla temperatura necessaria a mantenere fuso il cloruro di sodio. La verifica consiste nel contare due atomi di sodio e due di cloro su ciascun lato, con carica complessiva nulla.

:::image{src="assets/c726c717-cella-elettrolitica-nacl-fuso.svg" alt="Cella elettrolitica con NaCl fuso: al catodo si forma sodio liquido, all'anodo cloro gassoso" caption="Fig. 16.3 — Elettrolisi del cloruro di sodio fuso con elettrodi inerti"}
:::

In una **miscela di sali fusi**, più cationi competono per la riduzione e più anioni per l'ossidazione. Nel modello qualitativo usato dal corso, per una miscela di $\mathrm{NaBr}$ e $\mathrm{MgCl_2}$ si prevedono la riduzione di $\mathrm{Mg^{2+}}$ e l'ossidazione di $\mathrm{Br^-}$. Le semireazioni previste sono $\mathrm{Mg^{2+}}+2e^-\to\mathrm{Mg}$ e $2\mathrm{Br^-}\to\mathrm{Br_2}+2e^-$. I potenziali standard tabulati per soluzioni acquose non descrivono direttamente un sale fuso: la previsione qualitativa non sostituisce dati elettrochimici del sistema fuso.

**Definizione 16.6** (precedenza di scarica). In soluzione acquosa, la precedenza di scarica è la scelta della semireazione che avviene fra quelle possibili allo stesso elettrodo. Come primo criterio termodinamico, al catodo è favorita la riduzione con potenziale di riduzione più positivo; all'anodo è favorita l'ossidazione associata al potenziale di riduzione più negativo. Il confronto va fatto nelle condizioni effettive, poiché concentrazione e pressione influenzano i potenziali secondo l'[equazione di Nernst](ref:chapter/16#p3). Sovratensioni e natura degli elettrodi possono modificare i prodotti osservati: il solo confronto dei potenziali non garantisce quindi la selettività reale.

Per orientarsi nei problemi introduttivi, i cationi di metalli molto reattivi, come quelli dei gruppi $1$ e $2$, restano generalmente in soluzione mentre si riduce l'acqua a idrogeno. I cationi di metalli meno reattivi, come $\mathrm{Ag^+}$ e $\mathrm{Cu^{2+}}$, possono invece depositarsi. Fra gli anioni, gli alogenuri diversi da $\mathrm{F^-}$ possono ossidarsi; solfato e nitrato sono normalmente spettatori e lasciano ossidare l'acqua. Sono regole orientative, da verificare quando il problema fornisce condizioni o potenziali specifici.

**Esempio svolto 16.4** (ioduro di potassio in acqua, elettrodi inerti).

1. **Dati.** Nell'elettrolita sono presenti $\mathrm{K^+}$, $\mathrm{I^-}$ e acqua. I due candidati principali al catodo sono $\mathrm{K^+}$ e l'acqua; all'anodo sono $\mathrm{I^-}$ e l'acqua.
2. **Strategia.** Si confrontano separatamente le riduzioni al catodo e le ossidazioni all'anodo, tenendo conto che l'acqua può reagire a entrambi gli elettrodi.
3. **Calcolo delle semireazioni.** Al catodo prevale $2\mathrm{H_2O}_{(l)}+2e^-\to\mathrm{H_2}_{(g)}+2\mathrm{OH^-}_{(aq)}$; all'anodo $2\mathrm{I^-}_{(aq)}\to\mathrm{I_2}+2e^-$. Si ottengono dunque idrogeno e iodio, mentre $\mathrm{K^+}$ non si deposita.
4. **Verifica.** Le due semireazioni scambiano entrambe $2$ elettroni. In ciascuna sono conservati gli atomi e la carica. La formazione di $\mathrm{OH^-}$ rende basica la zona vicina al catodo.

:::image{src="assets/c726c717-cella-elettrolitica-ki-acquoso.svg" alt="Cella elettrolitica con KI in acqua: al catodo si riduce l'acqua a idrogeno e ioni OH-, all'anodo si ossida lo ioduro a iodio" caption="Fig. 16.4 — Elettrolisi di una soluzione acquosa di ioduro di potassio con elettrodi inerti"}
:::

Quando gli ioni disciolti servono soprattutto a condurre corrente, l'acqua può reagire a entrambi gli elettrodi. Con un elettrolita come $\mathrm{Na_2SO_4}$ e prodotti gassosi separati, al catodo si forma $\mathrm{H_2}$ e all'anodo $\mathrm{O_2}$. La reazione complessiva bilanciata è $2\mathrm{H_2O}_{(l)}\to2\mathrm{H_2}_{(g)}+\mathrm{O_2}_{(g)}$: a uguali temperatura e pressione, il volume di idrogeno raccolto è doppio di quello dell'ossigeno.

**Errore tipico 16.5.** Dalla formula $\mathrm{NaCl}$ non segue che una sua soluzione acquosa produca sodio metallico: quella conclusione vale per il sale fuso. In acqua bisogna confrontare la riduzione di $\mathrm{Na^+}$ con quella dell'acqua. Anche la formazione di cloro all'anodo di una soluzione di cloruro dipende dalle condizioni, in particolare concentrazione e sovratensione dell'ossigeno.

**Raffinazione elettrolitica.** Nel caso del rame, una lastra di rame impuro costituisce l'anodo, una superficie su cui raccogliere rame puro costituisce il catodo e la soluzione contiene $\mathrm{Cu^{2+}}$. All'anodo avviene $\mathrm{Cu}_{(s)}\to\mathrm{Cu^{2+}}_{(aq)}+2e^-$; al catodo $\mathrm{Cu^{2+}}_{(aq)}+2e^-\to\mathrm{Cu}_{(s)}$. Il rame passa così dall'anodo al catodo attraverso la soluzione. Le impurità vengono separate perché non seguono tutte questo trasferimento: secondo la loro natura possono restare come residuo anodico oppure passare in soluzione. La stessa riduzione catodica permette di rivestire di rame un oggetto posto al catodo, processo chiamato **elettroplaccatura**.

### Aspetti quantitativi

La carica che attraversa la cella è legata alla corrente che la percorre. Si indichi con $q$ la carica in coulomb, con $I$ la corrente in ampere e con $\Delta t$ il tempo in secondi: a corrente costante, $q$ è proporzionale a $\Delta t$. Poiché $1\ \mathrm{A}=1\ \mathrm{C/s}$, la relazione è dimensionalmente coerente.

:::formula{id="16.4" label="Carica trasferita durante l'elettrolisi"}
$$q=I\,\Delta t$$
:::

**Prima legge di Faraday.** La quantità di sostanza prodotta o consumata a un elettrodo è proporzionale alla carica $q$ che attraversa la cella. **Seconda legge di Faraday.** A parità di carica, la quantità di prodotto è proporzionale al rapporto $M/z$, dove $M$ è la massa molare e $z$ il numero di moli di elettroni richieste per ottenere una mole di prodotto. Una mole di elettroni trasporta la carica $F=96\,485\ \mathrm{C/mol}$: pertanto le moli di elettroni trasferite sono $n_{e^-}=q/F$. Se per ottenere una mole di prodotto occorrono $z$ moli di elettroni e la corrente produce soltanto quel prodotto, le moli ottenute sono $n=q/(zF)$.

:::formula{id="16.5" label="Massa teorica depositata per elettrolisi"}
$$m=\frac{M I\,\Delta t}{zF}$$
:::

Nella formula, $M$ è la massa molare del prodotto in $\mathrm{g/mol}$ e $m$ risulta in grammi. Il valore $z$ si legge dalla semireazione **per mole di prodotto**: per $\mathrm{Cu^{2+}}+2e^-\to\mathrm{Cu}$ vale $z=2$, mentre per $\mathrm{Ag^+}+e^-\to\mathrm{Ag}$ vale $z=1$. Se si formano prodotti concorrenti, la formula dà la massa teorica del prodotto desiderato solo quando tutta la carica è destinata a quella semireazione.

Se è nota l'efficienza di corrente $\eta$, definita come frazione della carica che produce il deposito desiderato, la massa effettiva è $m_{\mathrm{eff}}=\eta M I\Delta t/(zF)$. Per risalire al tempo richiesto per una massa effettiva assegnata si usa $\Delta t=m_{\mathrm{eff}}zF/(\eta M I)$. Occorre conoscere $\eta$ oppure assumere esplicitamente $\eta=1$; una resa inferiore all'unità aumenta carica e tempo necessari.

**Esempio svolto 16.5** (tempo per ramare una scultura). Si vogliono depositare $1{,}50\ \mathrm{g}$ di rame da una soluzione contenente $\mathrm{Cu^{2+}}$, con corrente costante di $4{,}75\ \mathrm{A}$. Si assuma efficienza di corrente unitaria e $M_{\mathrm{Cu}}=63{,}55\ \mathrm{g/mol}$.

1. **Dati.** $m=1{,}50\ \mathrm{g}$, $I=4{,}75\ \mathrm{A}$, $F=96\,485\ \mathrm{C/mol}$. La semireazione $\mathrm{Cu^{2+}}+2e^-\to\mathrm{Cu}$ fissa $z=2$.
2. **Strategia.** Si converte la massa in moli di rame, poi in moli di elettroni e in carica; infine si divide per la corrente.
3. **Calcolo.** $n_{\mathrm{Cu}}=m/M_{\mathrm{Cu}}=1{,}50/63{,}55=0{,}02360\ \mathrm{mol}$. Servono $n_{e^-}=2n_{\mathrm{Cu}}=0{,}04721\ \mathrm{mol}$ e $q=n_{e^-}F=4{,}555\times10^3\ \mathrm{C}$. Da {{formula:16.4}} segue $\Delta t=q/I=959\ \mathrm{s}=16{,}0\ \mathrm{min}$.
4. **Verifica.** $4{,}75\ \mathrm{C/s}$ per $959\ \mathrm{s}$ forniscono circa $4{,}55\times10^3\ \mathrm{C}$; dividendoli per $F$ e poi per $2$ si ritrovano le moli di rame richieste. Il tempo è coerente con il risultato dell'esercizio del corso.

**Esempio svolto 16.6** (corrente richiesta). Per depositare $0{,}86\ \mathrm{g}$ di cromo in $12{,}5\ \mathrm{min}$ da una soluzione contenente $\mathrm{Cr^{3+}}$, si assuma che tutta la corrente alimenti $\mathrm{Cr^{3+}}+3e^-\to\mathrm{Cr}$ e si usi $M_{\mathrm{Cr}}=52{,}00\ \mathrm{g/mol}$. Le moli di cromo sono $0{,}86/52{,}00=0{,}0165\ \mathrm{mol}$; le moli di elettroni sono $3\times0{,}0165=0{,}0496\ \mathrm{mol}$. La carica richiesta è $q=0{,}0496\times96\,485=4{,}79\times10^3\ \mathrm{C}$. Poiché $12{,}5\ \mathrm{min}=750\ \mathrm{s}$, la corrente è $I=q/\Delta t=6{,}4\ \mathrm{A}$. La verifica consiste nel sostituire questa corrente in {{formula:16.5}} e ritrovare $0{,}86\ \mathrm{g}$, entro l'arrotondamento.

**Errore tipico 16.6.** Il coefficiente $z$ non è la carica totale della cella né il numero di ioni presenti nel sale: è il rapporto fra moli di elettroni e moli del prodotto considerato nella semireazione bilanciata. Inoltre la corrente è espressa in $\mathrm{C/s}$: inserire i minuti direttamente in {{formula:16.4}} produce un errore di un fattore $60$. Nei calcoli si mantengono cifre aggiuntive nei passaggi intermedi e si arrotonda soltanto il risultato finale.

**Esercizi.**

- ★ Da $\mathrm{Ag^+}+e^-\to\mathrm{Ag}$, calcolare le moli di argento depositate dal passaggio di $96\,485\ \mathrm{C}$, assumendo efficienza unitaria.
- ★★ Una corrente di $2{,}00\ \mathrm{A}$ attraversa per $30{,}0\ \mathrm{min}$ una cella in cui avviene soltanto $\mathrm{Cu^{2+}}+2e^-\to\mathrm{Cu}$. Calcolare la carica e la massa depositata usando $M_{\mathrm{Cu}}=63{,}55\ \mathrm{g/mol}$.
- ★★★ Per ottenere $1{,}50\ \mathrm{g}$ di rame con $I=4{,}75\ \mathrm{A}$ e $\eta=0{,}80$, calcolare la carica totale e il tempo richiesti. Confrontare il tempo con quello dell'esempio svolto.

## p5 | Batterie e celle a combustibile

### Batterie: principio di funzionamento

Le batterie forniscono energia elettrica mediante reazioni di ossidoriduzione spontanee. In ciascuna cella, l’ossidazione avviene all’anodo e la riduzione al catodo: gli elettroni percorrono il circuito esterno dall’anodo al catodo, mentre gli ioni si muovono nell’elettrolita per mantenere il bilancio delle cariche. Questi percorsi sono descritti nella sezione sulle [celle voltaiche](ref:chapter/16#p2).

**Definizione 16.7** (batteria). Nel linguaggio del corso, una batteria è un insieme di celle voltaiche collegate in serie: le loro differenze di potenziale si sommano. Nell’uso comune si chiama spesso «batteria» anche una singola cella confezionata per l’impiego. Il potenziale dipende dalle specie presenti e dalle condizioni di funzionamento; per il suo calcolo si rimanda ai [potenziali standard e all’equazione di Nernst](ref:chapter/16#p3).

### Batterie primarie

**Definizione 16.8** (batteria primaria). È una batteria destinata a un solo ciclo di scarica: una volta consumati i reagenti, non si ricarica per l’uso ordinario. La pila a secco di Leclanché e la pila alcalina sono due esempi.

Nella pila a secco di Leclanché lo zinco costituisce l’anodo; una barretta di grafite funge da conduttore al catodo. Fra i due si trova una pasta contenente $\mathrm{MnO_2}$, $\mathrm{NH_4Cl}$ e $\mathrm{ZnCl_2}$. Durante la scarica lo zinco si ossida secondo $\mathrm{Zn}_{(s)} \rightarrow \mathrm{Zn}^{2+}+2e^-$. La cella fornisce circa $1,5\ \mathrm{V}$, ma l’accumulo di ammoniaca vicino al catodo tende a diminuirne il potenziale.

:::image{src="assets/34b4b170-pila-leclanche.svg" alt="Schema della pila a secco di Leclanché con anodo di zinco e catodo di grafite in un unico contenitore" caption="Fig. 16.5 — Pila a secco di Leclanché: l'anodo di zinco si ossida, il catodo di grafite è a contatto con la pasta di MnO2, NH4Cl e ZnCl2"}
:::

La pila alcalina usa invece una pasta acquosa di $\mathrm{KOH}$ come elettrolita. Il mezzo basico evita l’accumulo di gas descritto per la pila a secco e rende più stabile la tensione durante l’impiego. Esistono anche pile primarie al litio: il loro anodo è litio metallico e al catodo gli ioni litio si inseriscono in un ossido. La presenza di litio metallico distingue questo esempio dalle batterie ricaricabili agli ioni litio.

### Batterie secondarie o accumulatori

**Definizione 16.9** (batteria secondaria). È ricaricabile: una sorgente elettrica esterna forza la reazione inversa a quella di scarica e rigenera i reagenti. In scarica funziona come cella voltaica; durante la ricarica il processo è elettrolitico. La definizione di anodo resta legata all’**ossidazione** e quella di catodo alla **riduzione**: quando si inverte la reazione, si inverte anche il ruolo dei due elettrodi. Il funzionamento delle celle elettrolitiche è trattato nella sezione su [elettrolisi e leggi di Faraday](ref:chapter/16#p4).

Nell’accumulatore al piombo, durante la scarica, l’anodo contiene piombo spugnoso e il catodo contiene $\mathrm{PbO_2}$; entrambi sono immersi in una soluzione di acido solforico. Il piombo che reagisce ai due elettrodi finisce in $\mathrm{PbSO_4}$. Una batteria automobilistica indicata come $12\ \mathrm{V}$ comprende sei celle in serie, ciascuna capace di fornire circa $2,1\ \mathrm{V}$ nelle condizioni riportate dal corso.

:::image{src="assets/34b4b170-accumulatore-piombo.svg" alt="Schema di una cella dell'accumulatore al piombo con elettrodi di Pb e PbO2 immersi in acido solforico" caption="Fig. 16.6 — Accumulatore al piombo in scarica: anodo di piombo spugnoso, catodo di PbO2, entrambi in acido solforico; in entrambi gli elettrodi si forma PbSO4"}
:::

**Esempio svolto 16.7** (scarica dell’accumulatore al piombo).

1. **Dati.** L’anodo contiene $\mathrm{Pb}$, il catodo $\mathrm{PbO_2}$ e l’elettrolita fornisce ioni idrogenosolfato. Entrambi gli elettrodi producono $\mathrm{PbSO_4}$ durante la scarica.
2. **Strategia.** Si scrivono le semireazioni in ambiente acido, si pareggiano gli elettroni e poi si sommano, verificando atomi e cariche.
3. **Calcolo.** All’anodo: $\mathrm{Pb}_{(s)}+\mathrm{HSO_4^-}_{(aq)} \rightarrow \mathrm{PbSO_{4(s)}}+\mathrm{H^+}_{(aq)}+2e^-$. Al catodo: $\mathrm{PbO_{2(s)}}+\mathrm{HSO_4^-}_{(aq)}+3\mathrm{H^+}_{(aq)}+2e^- \rightarrow \mathrm{PbSO_{4(s)}}+2\mathrm{H_2O}_{(l)}$. Sommando e cancellando i $2e^-$ si ottiene $\mathrm{Pb}_{(s)}+\mathrm{PbO_{2(s)}}+2\mathrm{HSO_4^-}_{(aq)}+2\mathrm{H^+}_{(aq)} \rightarrow 2\mathrm{PbSO_{4(s)}}+2\mathrm{H_2O}_{(l)}$.
4. **Verifica.** Gli elettroni ceduti e acquistati sono due; atomi e cariche coincidono ai due lati. Il prodotto $\mathrm{PbSO_4}$ compare a entrambi gli elettrodi, come previsto. Sei potenziali di circa $2,1\ \mathrm{V}$ danno circa $12,6\ \mathrm{V}$ nelle condizioni citate; «$12\ \mathrm{V}$» è la designazione nominale della batteria, non il risultato esatto della moltiplicazione.

Un altro accumulatore è quello agli ioni litio. Durante la scarica, gli atomi di litio inseriti nella grafite dell’anodo cedono elettroni al circuito esterno; gli ioni $\mathrm{Li^+}$ attraversano l’elettrolita verso il catodo, costituito da un ossido metallico capace di ospitarli. Durante la carica i flussi si invertono. L’elettrolita tipico contiene un sale di litio in un solvente organico; per limitare sovratensioni e surriscaldamento si impiegano circuiti di protezione.

**Errore tipico 16.7.** Identificare «litio» e «ioni litio» come la stessa batteria porta ad attribuire litio metallico all’anodo dell’accumulatore descritto qui. Nella pila primaria citata l’anodo è una lamina di litio; nell’accumulatore agli ioni litio il litio è inserito fra i piani della grafite.

### Celle a combustibile

**Definizione 16.10** (cella a combustibile). È una cella elettrochimica alimentata dall’esterno: il combustibile e l’ossidante entrano continuamente, mentre i prodotti escono. Può quindi continuare a erogare corrente finché riceve reagenti e i componenti funzionano. Una batteria ordinaria, invece, contiene al proprio interno una quantità limitata dei reagenti necessari alla scarica.

Nella cella a idrogeno con membrana a scambio protonico, un catalizzatore elettrodico, tipicamente platino su grafite, facilita le reazioni. All’anodo l’idrogeno si ossida: $2\mathrm{H_{2(g)}} \rightarrow 4\mathrm{H^+}_{(aq)}+4e^-$. Gli elettroni passano nel circuito esterno; i protoni, trasportati nella membrana in forma idratata, raggiungono il catodo. Qui l’ossigeno si riduce: $\mathrm{O_{2(g)}}+4\mathrm{H^+}_{(aq)}+4e^- \rightarrow 2\mathrm{H_2O}_{(l)}$. La reazione complessiva è $2\mathrm{H_{2(g)}}+\mathrm{O_{2(g)}} \rightarrow 2\mathrm{H_2O}_{(l)}$. Il coefficiente $4$ davanti ai protoni e agli elettroni è necessario per bilanciare due molecole di idrogeno.

La cella produce acqua nel punto d’uso. Per valutarne l’impatto ambientale occorre però considerare anche come è stato prodotto l’idrogeno: se proviene dall’elettrolisi dell’acqua, conta la fonte dell’elettricità impiegata.

**Errore tipico 16.8.** Una cella a combustibile non si «ricarica» invertendo la propria reazione come un accumulatore: per proseguire il funzionamento riceve nuovo combustibile e nuovo ossidante. In qualunque dei tre dispositivi, durante l’erogazione di corrente l’ossidazione resta all’anodo e la riduzione al catodo.
