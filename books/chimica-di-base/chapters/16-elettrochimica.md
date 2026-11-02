---
chapter: 16
title: Elettrochimica
---

## p1 | Introduzione

L’elettrochimica mostra come una reazione chimica possa produrre corrente elettrica e come la corrente possa, a sua volta, guidare una trasformazione chimica. Questi processi sono alla base delle pile e di tecniche industriali come la raffinazione del rame. Capirli aiuta a interpretare il funzionamento dei dispositivi che usiamo e a prevedere se una reazione può avvenire spontaneamente o richiede energia dall’esterno.

Per affrontare il capitolo, è utile saper riconoscere le principali classi di reazioni chimiche, soprattutto ossidazioni e riduzioni, e avere familiarità con entropia ed energia libera. Queste idee permettono di seguire il trasferimento di elettroni e di collegare le trasformazioni chimiche all’energia disponibile. Si partirà dalle celle voltaiche, distinguendo il percorso degli elettroni da quello degli ioni, per poi passare ai potenziali standard e alle condizioni reali descritte dall’equazione di Nernst.

Al termine saprai analizzare celle voltaiche ed elettrolitiche, individuare anodo e catodo e calcolare il potenziale di cella in condizioni standard e non standard. Saprai inoltre usare le leggi di Faraday per ricavare la quantità di prodotto ottenuta da una corrente.

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

## p4 | Reattività dei metalli con acidi ossidanti e non ossidanti

### Il problema: quale acido attacca quale metallo

Un metallo immerso in una soluzione acida può essere "attaccato", cioè ossidato a catione, solo se esiste una riduzione che accompagna spontaneamente l'ossidazione. In condizioni standard, il criterio è $E^\circ_{\text{cella}}>0$. Fuori da queste condizioni il segno di $E^\circ_{\text{cella}}$ da solo non determina la spontaneità: occorre calcolare $E$ con l'equazione di Nernst. Qui applichiamo il criterio standard a due situazioni. Nella prima è lo ione $\mathrm{H^+}$ a ridursi, e l'acido è detto **non ossidante**. Nella seconda si riduce l'anione dell'acido (nitrato, solfato), e l'acido è detto **ossidante**. Bisogna sempre chiedersi quale specie si riduce.

### Acidi non ossidanti: sviluppo di idrogeno

Con un acido non ossidante, come $\mathrm{HCl}$ o $\mathrm{H_2SO_4}$ diluito, l'unica specie riducibile è lo ione idronio. La semireazione è $2\,\mathrm{H^+}+2e^-\to \mathrm{H_2}$, con $E^\circ=0{,}00$ V per definizione (elettrodo standard a idrogeno).

**Criterio.** Un metallo M, con semireazione di riduzione $\mathrm{M^{n+}}+ne^-\to \mathrm{M}$, sposta l'idrogeno da un acido non ossidante in condizioni standard se $E^\circ(\mathrm{M^{n+}/M})<0$. In questo caso l'idrogeno fa da catodo e il metallo da anodo, quindi

$$E^\circ_{\text{cella}}=E^\circ_{\text{catodo}}-E^\circ_{\text{anodo}}=0-E^\circ(\mathrm{M^{n+}/M})>0 .$$

Se invece $E^\circ(\mathrm{M^{n+}/M})>0$ il metallo non reagisce: per esempio una barretta di argento in una soluzione di ioni idronio non dà alcuna reazione spontanea.

La **serie di attività** dei metalli riassume questo ordinamento. I più reattivi sono i metalli dei gruppi 1 e 2, seguiti da Al e Zn. Metalli meno reattivi (Ni, Sn) non reagiscono con l'acqua ma reagiscono con gli acidi, per esempio $\mathrm{Ni_{(s)}+2\,H^+_{(aq)}\to Ni^{2+}_{(aq)}+H_{2(g)}}$. Ag e Au non spostano $\mathrm{H_2}$ da nessuna fonte.

**Esempio svolto 16.3** (ferro in acido cloridrico). Se si immergono chiodi di ferro in $\mathrm{HCl}$ si osserva effervescenza: il gas è $\mathrm{H_2}$ e, evaporando l'acqua, rimangono cristalli di $\mathrm{FeCl_2}$.

1. *Dati*: $\mathrm{Fe+HCl}$. I numeri di ossidazione cambiano per Fe (da 0 a $+2$) e per H (da $+1$ a 0), mentre Cl resta $-1$.
2. *Strategia*: scriviamo le semireazioni (vedi [Reazioni di ossidoriduzione](ref:chapter/5#p5)).
3. *Calcolo*:

$$\begin{aligned}\mathrm{Fe}&\to \mathrm{Fe^{2+}}+2e^- &&\text{(ossidazione, Fe è il riducente)}\\ 2\,\mathrm{H^+}+2e^-&\to \mathrm{H_2} &&\text{(riduzione, } \mathrm{H^+} \text{ è l'ossidante)}\end{aligned}$$

La somma dà $\mathrm{Fe+2\,H^+\to Fe^{2+}+H_2}$, cioè in forma molecolare $\mathrm{Fe+2\,HCl\to FeCl_2+H_2}$.

4. *Verifica*: $E^\circ(\mathrm{Fe^{2+}/Fe})$ è negativo, quindi $E^\circ_{\text{cella}}>0$ e la reazione è spontanea, coerente con l'osservazione.

**Esempio svolto 16.4** (barrette in $\mathrm{HCl}$). Una soluzione di acido cloridrico viene a contatto con tre barrette di Zn, Ag e Li. Zn e Li hanno $E^\circ<0$ e si sciolgono sviluppando $\mathrm{H_2}$. L'argento ha $E^\circ>0$ e resta intonso.

### Acidi ossidanti: metalli con $E^\circ>0$

Rame, argento e oro hanno $E^\circ>0$ e non spostano idrogeno, quindi non si sciolgono in $\mathrm{HCl}$. Possono però essere attaccati da acidi in cui è l'anione a ridursi. Il rame, per esempio, viene attaccato da $\mathrm{HNO_3}$ proprio perché in questo caso $\Delta E>0$ e la reazione è spontanea.

I prodotti di riduzione più comuni sono i seguenti. Questi dati sono standard e non vengono dalle note.

- Nell'acido nitrico diluito, $\mathrm{NO_3^-}+4\,\mathrm{H^+}+3e^-\to \mathrm{NO}+2\,\mathrm{H_2O}$.
- Nell'acido nitrico concentrato, $\mathrm{NO_3^-}+2\,\mathrm{H^+}+e^-\to \mathrm{NO_2}+\mathrm{H_2O}$.
- Nell'acido solforico concentrato e caldo, $\mathrm{SO_4^{2-}}+4\,\mathrm{H^+}+2e^-\to \mathrm{SO_2}+2\,\mathrm{H_2O}$.

In tutti questi casi non si sviluppa idrogeno: il gas che si forma contiene azoto o zolfo.

**Procedura per bilanciare** (metodo delle semireazioni in ambiente acido):

1. Scrivere la semireazione di ossidazione del metallo e quella di riduzione dell'anione.
2. Moltiplicare per i coefficienti che rendono uguale il numero di elettroni ceduti e acquistati.
3. Sommare e semplificare, ottenendo l'equazione ionica.
4. Aggiungere agli ioni $\mathrm{H^+}$ gli anioni necessari per passare alla forma molecolare, in modo che i sali risultino neutri.

**Esempio svolto 16.5** ($\mathrm{Cu}$ con $\mathrm{HNO_3}$ diluito).

1. *Semireazioni*: $\mathrm{Cu}\to \mathrm{Cu^{2+}}+2e^-$ e $\mathrm{NO_3^-}+4\,\mathrm{H^+}+3e^-\to \mathrm{NO}+2\,\mathrm{H_2O}$.
2. *Elettroni*: il minimo comune multiplo di 2 e 3 è 6, quindi si moltiplica la prima per 3 e la seconda per 2.
3. *Somma*:

$$3\,\mathrm{Cu}+2\,\mathrm{NO_3^-}+8\,\mathrm{H^+}\to 3\,\mathrm{Cu^{2+}}+2\,\mathrm{NO}+4\,\mathrm{H_2O}$$

4. *Forma molecolare*: servono $6$ ioni nitrato come controioni dei $3\,\mathrm{Cu^{2+}}$. Si aggiungono $6\,\mathrm{NO_3^-}$ a entrambi i membri, e gli $8\,\mathrm{H^+}$ con gli $8\,\mathrm{NO_3^-}$ danno $8\,\mathrm{HNO_3}$:

$$3\,\mathrm{Cu}+8\,\mathrm{HNO_3}\to 3\,\mathrm{Cu(NO_3)_2}+2\,\mathrm{NO}+4\,\mathrm{H_2O}$$

5. *Verifica*: a sinistra e a destra ci sono 3 Cu, 8 H, 8 N, 24 O, e la carica è nulla.

Con acido nitrico concentrato la riduzione porta a $\mathrm{NO_2}$. Poiché la semireazione di riduzione scambia un solo elettrone, si moltiplica per 2 e si ottiene $\mathrm{Cu+4\,HNO_3\to Cu(NO_3)_2+2\,NO_2+2\,H_2O}$. Analogamente, per l'argento: $\mathrm{Ag+2\,HNO_3\to AgNO_3+NO_2+H_2O}$.

Con acido solforico concentrato e caldo: $\mathrm{Cu}\to \mathrm{Cu^{2+}}+2e^-$ si somma a $\mathrm{SO_4^{2-}}+4\,\mathrm{H^+}+2e^-\to \mathrm{SO_2}+2\,\mathrm{H_2O}$, e dopo l'aggiunta di $\mathrm{SO_4^{2-}}$ come controione si ha

$$\mathrm{Cu}+2\,\mathrm{H_2SO_4}\to \mathrm{CuSO_4}+\mathrm{SO_2}+2\,\mathrm{H_2O}$$

Il passaggio dalla forma ionica a quella molecolare segue lo stesso metodo mostrato in [Reazioni di ossidoriduzione](ref:chapter/5#p5). Un esempio da esercitazione è il bilanciamento di ioduro ferroso più acido nitrico, che dà monossido di azoto, nitrato ferrico, acido iodico e acqua, con coefficienti $3/22/13/3/6/8$.

### Acqua regia

L'oro è un metallo nobile e non è attaccato dal solo $\mathrm{HNO_3}$. Si scioglie nell'**acqua regia**, una miscela di $\mathrm{HCl}$ e $\mathrm{HNO_3}$ in rapporto 3:1, così chiamata perché scioglie i metalli nobili. Il nitrato ossida il metallo, e gli ioni cloruro lo stabilizzano come complesso. Questo ruolo dei cloruri è nozione standard, non tratta dalle note. La reazione per l'oro è

$$\mathrm{Au}+\mathrm{HNO_3}+4\,\mathrm{HCl}\to \mathrm{HAuCl_4}+\mathrm{NO}+2\,\mathrm{H_2O}$$

Si verifica con le semireazioni $\mathrm{Au}+4\,\mathrm{Cl^-}\to \mathrm{AuCl_4^-}+3e^-$ e $\mathrm{NO_3^-}+4\,\mathrm{H^+}+3e^-\to \mathrm{NO}+2\,\mathrm{H_2O}$, che scambiano lo stesso numero di elettroni.

### Passivazione

Il segno di $E^\circ$ dice se una reazione è termodinamicamente possibile, ma non quanto velocemente avviene. L'alluminio si passiva all'aria formando un sottile strato aderente e protettivo di ossido. Sul rame e sullo zinco possono invece formarsi patine superficiali di composizione diversa, dovute alla reazione con i componenti dell'aria umida; non si tratta dello stesso rivestimento che protegge l'alluminio.

Si distingue dalla corrosione del ferro. Arrugginire significa ossidare il ferro con formazione di un ossido incoerente e non protettivo, la ruggine (miscela di ossidi idratati, $\mathrm{Fe_2O_3}\cdot x\,\mathrm{H_2O}$ con $0<x<3$). Il processo è elettrochimico, richiede umidità e avviene più rapidamente a pH basso. Nella corrosione l'ossidazione del metallo $\mathrm{Me\to Me^{n+}}+ne^-$ al sito anodico è accompagnata dalla riduzione $\mathrm{O_2}+2\,\mathrm{H_2O}+4e^-\to 4\,\mathrm{OH^-}$ al sito catodico.

Sul piano pratico, il fenomeno spiega perché un metallo con $E^\circ$ molto negativo come l'alluminio possa resistere bene all'aria e a certi acidi. In acido nitrico concentrato, ferro e alluminio si passivano: un sottile strato protettivo ne impedisce l'ulteriore attacco.

### Errori tipici

**Errore tipico 16.5.** Aspettarsi $\mathrm{H_2}$ da qualsiasi acido. Rame e argento con $\mathrm{HNO_3}$ non producono idrogeno, ma $\mathrm{NO}$ o $\mathrm{NO_2}$ (o $\mathrm{SO_2}$ con $\mathrm{H_2SO_4}$ concentrato).

**Errore tipico 16.6.** Concludere che il rame si scioglie in $\mathrm{HCl}$ perché "è un acido forte". La forza dell'acido non conta: $\mathrm{Cu}$ ha $E^\circ>0$ e non sposta $\mathrm{H^+}$.

**Errore tipico 16.7.** Dimenticare di aggiungere i nitrati (o i solfati) come controioni nel passaggio alla forma molecolare, ottenendo coefficienti sbagliati per $\mathrm{HNO_3}$ ($8$ e non $2$ nel caso del rame in acido diluito).

**Errore tipico 16.8.** Confondere passivazione e corrosione: lo strato passivante è sottile, compatto e protettivo, mentre la ruggine è incoerente e lascia procedere l'attacco.

**Errore tipico 16.9.** Prevedere un attacco solo dal valore di $E^\circ$ e ignorare la passivazione: un metallo con $E^\circ$ negativo può comunque resistere perché protetto da uno strato di ossido.

## p5 | Elettrolisi e leggi di Faraday

### Prodotti dell'elettrolisi

**Definizione 16.5** (elettrolisi). L'elettrolisi usa energia elettrica fornita da un generatore per far avvenire una reazione di ossidoriduzione non spontanea. In una cella elettrolitica l'**anodo** è collegato al polo positivo del generatore e vi avviene l'ossidazione; il **catodo** è collegato al polo negativo e vi avviene la riduzione. Nell'elettrolita migrano ioni, mentre nel circuito esterno si muovono elettroni. I nomi degli elettrodi dipendono dalla reazione che vi avviene, come nelle [celle voltaiche](ref:chapter/16#p2), ma le polarità sono invertite.

Per prevedere i prodotti occorre prima distinguere un **sale fuso** da una **soluzione acquosa**. Nel sale fuso puro sono presenti gli ioni del sale: il catione può ridursi al catodo e l'anione può ossidarsi all'anodo. Nell'acqua sono possibili anche semireazioni del solvente, che competono con quelle degli ioni disciolti.

**Esempio svolto 16.6** (cloruro di sodio fuso). Il sale fuso contiene $\mathrm{Na^+}$ e $\mathrm{Cl^-}$. Al catodo si ha $\mathrm{Na^+}+e^-\to\mathrm{Na}_{(l)}$; all'anodo $2\mathrm{Cl^-}\to\mathrm{Cl_2}_{(g)}+2e^-$. Moltiplicando la prima semireazione per $2$ e sommando, si ottiene $2\mathrm{NaCl}_{(l)}\to2\mathrm{Na}_{(l)}+\mathrm{Cl_2}_{(g)}$. Il sodio è liquido alla temperatura necessaria a mantenere fuso il cloruro di sodio. La verifica consiste nel contare due atomi di sodio e due di cloro su ciascun lato, con carica complessiva nulla.

:::image{src="assets/c726c717-cella-elettrolitica-nacl-fuso.svg" alt="Cella elettrolitica con NaCl fuso: al catodo si forma sodio liquido, all'anodo cloro gassoso" caption="Fig. 16.3 — Elettrolisi del cloruro di sodio fuso con elettrodi inerti"}
:::

In una **miscela di sali fusi**, più cationi competono per la riduzione e più anioni per l'ossidazione. Nel modello qualitativo usato dal corso, per una miscela di $\mathrm{NaBr}$ e $\mathrm{MgCl_2}$ si prevedono la riduzione di $\mathrm{Mg^{2+}}$ e l'ossidazione di $\mathrm{Br^-}$. Le semireazioni previste sono $\mathrm{Mg^{2+}}+2e^-\to\mathrm{Mg}$ e $2\mathrm{Br^-}\to\mathrm{Br_2}+2e^-$. I potenziali standard tabulati per soluzioni acquose non descrivono direttamente un sale fuso: la previsione qualitativa non sostituisce dati elettrochimici del sistema fuso.

**Definizione 16.6** (precedenza di scarica). In soluzione acquosa, la precedenza di scarica è la scelta della semireazione che avviene fra quelle possibili allo stesso elettrodo. Come primo criterio termodinamico, al catodo è favorita la riduzione con potenziale di riduzione più positivo; all'anodo è favorita l'ossidazione associata al potenziale di riduzione più negativo. Il confronto va fatto nelle condizioni effettive, poiché concentrazione e pressione influenzano i potenziali secondo l'[equazione di Nernst](ref:chapter/16#p3). Sovratensioni e natura degli elettrodi possono modificare i prodotti osservati: il solo confronto dei potenziali non garantisce quindi la selettività reale.

Per orientarsi nei problemi introduttivi, i cationi di metalli molto reattivi, come quelli dei gruppi $1$ e $2$, restano generalmente in soluzione mentre si riduce l'acqua a idrogeno. I cationi di metalli meno reattivi, come $\mathrm{Ag^+}$ e $\mathrm{Cu^{2+}}$, possono invece depositarsi. Fra gli anioni, gli alogenuri diversi da $\mathrm{F^-}$ possono ossidarsi; solfato e nitrato sono normalmente spettatori e lasciano ossidare l'acqua. Sono regole orientative, da verificare quando il problema fornisce condizioni o potenziali specifici.

**Esempio svolto 16.7** (ioduro di potassio in acqua, elettrodi inerti).

1. **Dati.** Nell'elettrolita sono presenti $\mathrm{K^+}$, $\mathrm{I^-}$ e acqua. I due candidati principali al catodo sono $\mathrm{K^+}$ e l'acqua; all'anodo sono $\mathrm{I^-}$ e l'acqua.
2. **Strategia.** Si confrontano separatamente le riduzioni al catodo e le ossidazioni all'anodo, tenendo conto che l'acqua può reagire a entrambi gli elettrodi.
3. **Calcolo delle semireazioni.** Al catodo prevale $2\mathrm{H_2O}_{(l)}+2e^-\to\mathrm{H_2}_{(g)}+2\mathrm{OH^-}_{(aq)}$; all'anodo $2\mathrm{I^-}_{(aq)}\to\mathrm{I_2}+2e^-$. Si ottengono dunque idrogeno e iodio, mentre $\mathrm{K^+}$ non si deposita.
4. **Verifica.** Le due semireazioni scambiano entrambe $2$ elettroni. In ciascuna sono conservati gli atomi e la carica. La formazione di $\mathrm{OH^-}$ rende basica la zona vicina al catodo.

:::image{src="assets/c726c717-cella-elettrolitica-ki-acquoso.svg" alt="Cella elettrolitica con KI in acqua: al catodo si riduce l'acqua a idrogeno e ioni OH-, all'anodo si ossida lo ioduro a iodio" caption="Fig. 16.4 — Elettrolisi di una soluzione acquosa di ioduro di potassio con elettrodi inerti"}
:::

Quando gli ioni disciolti servono soprattutto a condurre corrente, l'acqua può reagire a entrambi gli elettrodi. Con un elettrolita come $\mathrm{Na_2SO_4}$ e prodotti gassosi separati, al catodo si forma $\mathrm{H_2}$ e all'anodo $\mathrm{O_2}$. La reazione complessiva bilanciata è $2\mathrm{H_2O}_{(l)}\to2\mathrm{H_2}_{(g)}+\mathrm{O_2}_{(g)}$: a uguali temperatura e pressione, il volume di idrogeno raccolto è doppio di quello dell'ossigeno.

**Errore tipico 16.10.** Dalla formula $\mathrm{NaCl}$ non segue che una sua soluzione acquosa produca sodio metallico: quella conclusione vale per il sale fuso. In acqua bisogna confrontare la riduzione di $\mathrm{Na^+}$ con quella dell'acqua. Anche la formazione di cloro all'anodo di una soluzione di cloruro dipende dalle condizioni, in particolare concentrazione e sovratensione dell'ossigeno.

**Raffinazione elettrolitica.** Nel caso del rame, una lastra di rame impuro costituisce l'anodo, una superficie su cui raccogliere rame puro costituisce il catodo e la soluzione contiene $\mathrm{Cu^{2+}}$. All'anodo avviene $\mathrm{Cu}_{(s)}\to\mathrm{Cu^{2+}}_{(aq)}+2e^-$; al catodo $\mathrm{Cu^{2+}}_{(aq)}+2e^-\to\mathrm{Cu}_{(s)}$. Il rame passa così dall'anodo al catodo attraverso la soluzione. Le impurità vengono separate perché non seguono tutte questo trasferimento: secondo la loro natura possono restare come residuo anodico oppure passare in soluzione. La stessa riduzione catodica permette di rivestire di rame un oggetto posto al catodo, processo chiamato **elettroplaccatura**.

### Aspetti quantitativi

La carica che attraversa la cella è legata alla corrente che la percorre. Si indichi con $q$ la carica in coulomb, con $I$ la corrente in ampere e con $\Delta t$ il tempo in secondi: a corrente costante, $q$ è proporzionale a $\Delta t$. Poiché $1\ \mathrm{A}=1\ \mathrm{C/s}$, la relazione è dimensionalmente coerente.

:::formula{id="16.4" label="Carica trasferita durante l'elettrolisi"}
$$q=I\,\Delta t$$
:::

**Prima legge di Faraday.** La quantità di sostanza prodotta o consumata a un elettrodo è proporzionale alla carica $q$ che attraversa la cella. **Seconda legge di Faraday.** A parità di carica, la massa del prodotto è proporzionale al rapporto $M/z$, dove $M$ è la massa molare e $z$ il numero di moli di elettroni richieste per ottenere una mole di prodotto. Una mole di elettroni trasporta la carica $F=96\,485\ \mathrm{C/mol}$: pertanto le moli di elettroni trasferite sono $n_{e^-}=q/F$. Se per ottenere una mole di prodotto occorrono $z$ moli di elettroni e la corrente produce soltanto quel prodotto, le moli ottenute sono $n=q/(zF)$.

:::formula{id="16.5" label="Massa teorica depositata per elettrolisi"}
$$m=\frac{M I\,\Delta t}{zF}$$
:::

Nella formula, $M$ è la massa molare del prodotto in $\mathrm{g/mol}$ e $m$ risulta in grammi. Il valore $z$ si legge dalla semireazione **per mole di prodotto**: per $\mathrm{Cu^{2+}}+2e^-\to\mathrm{Cu}$ vale $z=2$, mentre per $\mathrm{Ag^+}+e^-\to\mathrm{Ag}$ vale $z=1$. Se si formano prodotti concorrenti, la formula dà la massa teorica del prodotto desiderato solo quando tutta la carica è destinata a quella semireazione.

Se è nota l'efficienza di corrente $\eta$, definita come frazione della carica che produce il deposito desiderato, la massa effettiva è $m_{\mathrm{eff}}=\eta M I\Delta t/(zF)$. Per risalire al tempo richiesto per una massa effettiva assegnata si usa $\Delta t=m_{\mathrm{eff}}zF/(\eta M I)$. Occorre conoscere $\eta$ oppure assumere esplicitamente $\eta=1$; una resa inferiore all'unità aumenta carica e tempo necessari.

**Esempio svolto 16.8** (tempo per ramare una scultura). Si vogliono depositare $1{,}50\ \mathrm{g}$ di rame da una soluzione contenente $\mathrm{Cu^{2+}}$, con corrente costante di $4{,}75\ \mathrm{A}$. Si assuma efficienza di corrente unitaria e $M_{\mathrm{Cu}}=63{,}55\ \mathrm{g/mol}$.

1. **Dati.** $m=1{,}50\ \mathrm{g}$, $I=4{,}75\ \mathrm{A}$, $F=96\,485\ \mathrm{C/mol}$. La semireazione $\mathrm{Cu^{2+}}+2e^-\to\mathrm{Cu}$ fissa $z=2$.
2. **Strategia.** Si converte la massa in moli di rame, poi in moli di elettroni e in carica; infine si divide per la corrente.
3. **Calcolo.** $n_{\mathrm{Cu}}=m/M_{\mathrm{Cu}}=1{,}50/63{,}55=0{,}02360\ \mathrm{mol}$. Servono $n_{e^-}=2n_{\mathrm{Cu}}=0{,}04721\ \mathrm{mol}$ e $q=n_{e^-}F=4{,}555\times10^3\ \mathrm{C}$. Da {{formula:16.4}} segue $\Delta t=q/I=959\ \mathrm{s}=16{,}0\ \mathrm{min}$.
4. **Verifica.** $4{,}75\ \mathrm{C/s}$ per $959\ \mathrm{s}$ forniscono circa $4{,}55\times10^3\ \mathrm{C}$; dividendoli per $F$ e poi per $2$ si ritrovano le moli di rame richieste. Il tempo è coerente con il risultato dell'esercizio del corso.

**Esempio svolto 16.9** (corrente richiesta). Per depositare $0{,}86\ \mathrm{g}$ di cromo in $12{,}5\ \mathrm{min}$ da una soluzione contenente $\mathrm{Cr^{3+}}$, si assuma che tutta la corrente alimenti $\mathrm{Cr^{3+}}+3e^-\to\mathrm{Cr}$ e si usi $M_{\mathrm{Cr}}=52{,}00\ \mathrm{g/mol}$. Le moli di cromo sono $0{,}86/52{,}00=0{,}0165\ \mathrm{mol}$; le moli di elettroni sono $3\times0{,}0165=0{,}0496\ \mathrm{mol}$. La carica richiesta è $q=0{,}0496\times96\,485=4{,}79\times10^3\ \mathrm{C}$. Poiché $12{,}5\ \mathrm{min}=750\ \mathrm{s}$, la corrente è $I=q/\Delta t=6{,}4\ \mathrm{A}$. La verifica consiste nel sostituire questa corrente in {{formula:16.5}} e ritrovare $0{,}86\ \mathrm{g}$, entro l'arrotondamento.

**Errore tipico 16.11.** Il coefficiente $z$ non è la carica totale della cella né il numero di ioni presenti nel sale: è il rapporto fra moli di elettroni e moli del prodotto considerato nella semireazione bilanciata. Inoltre la corrente è espressa in $\mathrm{C/s}$: inserire i minuti direttamente in {{formula:16.4}} produce un errore di un fattore $60$. Nei calcoli si mantengono cifre aggiuntive nei passaggi intermedi e si arrotonda soltanto il risultato finale.

**Esercizi.**

- ★ Da $\mathrm{Ag^+}+e^-\to\mathrm{Ag}$, calcolare le moli di argento depositate dal passaggio di $96\,485\ \mathrm{C}$, assumendo efficienza unitaria.
- ★★ Una corrente di $2{,}00\ \mathrm{A}$ attraversa per $30{,}0\ \mathrm{min}$ una cella in cui avviene soltanto $\mathrm{Cu^{2+}}+2e^-\to\mathrm{Cu}$. Calcolare la carica e la massa depositata usando $M_{\mathrm{Cu}}=63{,}55\ \mathrm{g/mol}$.
- ★★★ Per ottenere $1{,}50\ \mathrm{g}$ di rame con $I=4{,}75\ \mathrm{A}$ e $\eta=0{,}80$, calcolare la carica totale e il tempo richiesti. Confrontare il tempo con quello dell'esempio svolto.

## p6 | Come viene chiesto all'esame

Il capitolo di elettrochimica è comparso in 3 delle 4 sessioni d'esame esaminate. Gli esercizi che lo riguardano sono quasi sempre problemi misti, in cui l'elettrochimica si combina con il bilanciamento delle redox, con i gas o con le concentrazioni. Il tipo più frequente è il bilanciamento di una redox con un ossidante forte, presente in tutte e tre le sessioni. Segue l'elettrolisi con le leggi di Faraday, presente in due sessioni. Nella prova scritta (70 minuti, senza materiale didattico) conviene perciò avere pronti due metodi: le semireazioni e il conto della carica.

### Bilanciare una redox con un ossidante forte

**Cosa chiede l'esame.** Il testo descrive la reazione a parole, con i nomi dei reagenti e dei prodotti, e chiede di scriverla e bilanciarla. L'equazione va quindi ricostruita dai nomi prima di bilanciarla. Il bilanciamento è quasi sempre il primo punto di un esercizio più lungo, quindi un errore qui si propaga ai calcoli successivi.

**Metodo.**

1. Traduci i nomi in formule (vedi [Simboli, formule e ioni](ref:chapter/3#p2) e [Sali](ref:chapter/3#p7)) e scrivi lo schema con reagenti e prodotti.
2. Assegna i numeri di ossidazione ([Numero di ossidazione](ref:chapter/3#p3)) e individua tutte le specie che si ossidano e quelle che si riducono.
3. Scrivi una semireazione per ciascun processo di ossidazione e di riduzione in forma ionica. Bilancia prima gli atomi diversi da O e H, poi O con $\mathrm{H_2O}$ e H con $\mathrm{H^+}$, infine le cariche con gli elettroni.
4. Moltiplica le semireazioni perché la somma degli elettroni ceduti in tutti i processi di ossidazione sia uguale a quella degli elettroni acquistati nei processi di riduzione, mantenendo per ciascun processo i rapporti stechiometrici della reazione [(5.8)](ref:formula/5.8), quindi sommale.
5. Riporta i coefficienti nell'equazione molecolare. Aggiungi gli ioni spettatori (per esempio i solfati) e controlla atomi e cariche.

Per i dettagli sull'ambiente acido o basico e sulla disproporzione vedi [Reazioni di ossidoriduzione](ref:chapter/5#p5) e [Equazioni chimiche e bilanciamento](ref:chapter/4#p3). Il comportamento dei metalli con $\mathrm{HNO_3}$ e $\mathrm{H_2SO_4}$ è trattato in [Reattività dei metalli con acidi ossidanti e non ossidanti](ref:chapter/16#p4).

**Errori tipici.**

- Non tradurre correttamente i nomi. Per esempio, «solfato rameico» è il solfato di rame(II), $\mathrm{CuSO_4}$.
- Scegliere il prodotto di riduzione dell'ossidante a memoria. Il prodotto va letto dal testo: qui il nitrato si riduce a $\mathrm{NO}$, non a $\mathrm{NO_2}$.
- Bilanciare solo gli atomi e non gli elettroni.
- Riportare nell'equazione finale coefficienti non minimi.

**Esempi.**

- *Tema d_esame 15, n. 1.* Il nitrato di piombo(II) reagisce con rame e acido solforico e forma solfato di piombo(II), solfato di rame(II), $\mathrm{NO}$ e acqua. Si scrivono le semireazioni $\mathrm{Cu}\to\mathrm{Cu^{2+}}$ e $\mathrm{NO_3^-}\to\mathrm{NO}$, si eguagliano gli elettroni e si riportano i coefficienti. Il testo prosegue con una massa di $\mathrm{CuSO_4}$ sciolta in un volume noto di soluzione, e quindi con un calcolo di concentrazione ([Espressioni della concentrazione](ref:chapter/11#p3)). Il tema è classificato anche tra le celle voltaiche, e il punto di partenza è comunque l'equazione bilanciata.
- *Tema d_esame 14, n. 1, punto a.* Cloro e idrossido di sodio danno cloruro di sodio, clorato di sodio e acqua. Lo stesso elemento, il cloro, si riduce a $\mathrm{Cl^-}$ e si ossida a $\mathrm{ClO_3^-}$ (disproporzione). Si scrivono quindi le due semireazioni con lo stesso reagente e si sommano.

### Elettrolisi: dalla carica alla quantità di prodotto

**Cosa chiede l'esame.** Una soluzione acquosa viene elettrolizzata per un tempo dato. Il testo fornisce un volume di gas sviluppato, con temperatura e pressione, e chiede la corrente. In più si chiedono lo schema della cella e le reazioni agli elettrodi. In questo tipo di esercizio la stechiometria dei gas e quella di Faraday si combinano.

**Metodo.**

1. Disegna la cella elettrolitica e stabilisci le specie che si scaricano. Se la soluzione è acquosa, considera anche l'acqua nella competizione tra specie ([Elettrolisi e leggi di Faraday](ref:chapter/16#p5)). L'anodo è la sede dell'ossidazione e il catodo della riduzione.
2. Scrivi le semireazioni di scarica e individua le moli di elettroni $z$ per mole di prodotto di interesse.
3. Se il prodotto è un gas, ricava le moli con $n = PV/(RT)$ [(6.5)](ref:formula/6.5), con $T$ in kelvin e $P$ in atm. Se il gas è «secco», non devi sottrarre la tensione di vapore dell'acqua ([Pressione e leggi dei gas ideali](ref:chapter/6#p2)).
4. Calcola la carica $q = z\,n\,F$, con $F = 96\,485$ C/mol, e poi la corrente $I = q/\Delta t$ {{formula:16.4}} con $\Delta t$ in secondi. Se serve una massa, usa {{formula:16.5}}.
5. Verifica l'ordine di grandezza e le unità, indicando il valore di $R$ usato.

**Esempio svolto in breve (con rendimento unitario).** Per l'esercizio del tema 3, descritto sotto, si ha $n_{\mathrm{O_2}} = \dfrac{(745/760)\cdot 8{,}00}{0{,}08206\cdot 293{,}15} = 0{,}326$ mol, con $R = 0{,}08206$ L·atm/(mol·K). All'anodo $4\,\mathrm{OH^-}\to\mathrm{O_2}+2\,\mathrm{H_2O}+4\,e^-$, quindi $z = 4$ e $q = 4\cdot 0{,}326\cdot 96\,485 \approx 1{,}26\times10^5$ C. Con $\Delta t = 40\cdot 60 = 2\,400$ s si ottiene $I \approx 52$ A.

**Errori tipici.**

- Inserire $T$ in °C nell'equazione dei gas, o la pressione in mmHg con $R$ in L·atm/(mol·K).
- Usare il tempo in minuti invece che in secondi.
- Sbagliare $z$: per $\mathrm{O_2}$ sono 4 elettroni, per $\mathrm{H_2}$ sono 2.
- Scambiare anodo e catodo: l'ossidazione avviene sempre all'anodo, anche se nell'elettrolisi l'anodo è il polo positivo.

**Esempi.**

- *Tema d_esame 3, n. 4.* Una soluzione acquosa di KOH viene elettrolizzata per 40 minuti a 25 °C e si raccolgono 8,00 L di ossigeno secco a 20,0 °C e 745 mmHg. Si chiedono lo schema della cella, le reazioni agli elettrodi e l'intensità della corrente, che si ricava seguendo i cinque passi sopra.
- *Tema d_esame 14, n. 1, punto b.* Il cloruro di sodio viene elettrolizzato in soluzione acquosa con resa faradica unitaria e agli elettrodi si sviluppano gas. Il metodo è lo stesso: si scrivono le scariche, si passa dai volumi di gas alle moli e dalle moli alla carica.

### Due temi: celle voltaiche e potenziali

Le pile, la notazione di cella e i potenziali di cella compaiono come argomento esplicito nei temi 14 e 15: nel tema 15, dentro un esercizio che parte dalla redox di rame e piombo; nel tema 14, con una domanda sull’anodo, il catodo e il potenziale standard di cella. Per questo tipo di domande vale il metodo delle sezioni [Celle voltaiche](ref:chapter/16#p2) e [Potenziali standard ed equazione di Nernst](ref:chapter/16#p3): $E^\circ_{\mathrm{cella}} = E^\circ_{\mathrm{catodo}} - E^\circ_{\mathrm{anodo}}$, e Nernst quando le concentrazioni non sono 1 M.

### Prima di consegnare

- Controlla che i coefficienti siano interi e minimi e che gli elettroni scambiati si bilancino.
- Controlla che ogni calcolo con i gas usi $T$ in kelvin e che l'unità di $P$ sia coerente con il valore di $R$.
- Esprimi il risultato con le cifre significative dei dati ([Grandezze, unità e cifre significative](ref:chapter/1#p2)).
