---
chapter: 15
title: Cinetica chimica
---

## p1 | Introduzione

La cinetica chimica spiega quanto rapidamente avvengono le reazioni e quali fattori ne modificano la velocità. È utile per interpretare processi quotidiani e industriali, controllare la produzione di sostanze e comprendere fenomeni naturali come il decadimento radioattivo. Per affrontare il capitolo servono le basi della stechiometria, per collegare reagenti e prodotti, e dell’equilibrio chimico, per distinguere la velocità di una reazione dalla posizione dell’equilibrio.

Al termine saprai definire e calcolare velocità medie, istantanee e iniziali, ricavare una legge cinetica dai dati sperimentali e riconoscerne gli ordini. Saprai usare le leggi integrate per descrivere reazioni di ordine zero, primo e secondo, determinare tempi di dimezzamento e confrontare i metodi che identificano l’ordine di reazione. Imparerai a valutare come temperatura ed energia di attivazione influenzano la velocità e a spiegare il ruolo delle collisioni efficaci, dello stato di transizione e dei catalizzatori. Potrai inoltre interpretare i meccanismi a stadi e applicare la cinetica del primo ordine ai processi radioattivi, calcolando attività residua ed età di un reperto.

## p2 | Velocità di reazione e leggi cinetiche

### Dalla concentrazione alla velocità

La **cinetica chimica** studia come cambiano nel tempo le concentrazioni di reagenti e prodotti. Una reazione può essere favorita dal punto di vista termodinamico e procedere comunque lentamente: per descrivere quanto rapidamente avviene occorre misurarne la velocità. In questa sezione $\lbrack A\rbrack (t)$ indica la concentrazione molare della specie $A$ all’istante $t$.

**Definizione 15.1** (velocità media). Per $A\rightarrow B$, in un intervallo $\Delta t=t_2-t_1>0$, la velocità media è $v_{\mathrm{media}}=-\Delta\lbrack A\rbrack /\Delta t=\Delta\lbrack B\rbrack /\Delta t$, dove $\Delta\lbrack A\rbrack =\lbrack A\rbrack (t_2)-\lbrack A\rbrack (t_1)$ e analogamente per $B$. Il segno meno rende positiva la velocità quando $A$ si consuma. Se la concentrazione è espressa in $\mathrm{mol/L}$ e il tempo in $\mathrm{s}$, l’unità della velocità è $\mathrm{mol/(L\cdot s)}$. Sul grafico di $\lbrack A\rbrack $ rispetto al tempo, $\Delta\lbrack A\rbrack /\Delta t$ è la pendenza della secante; la velocità di consumo ne è l’opposto.

**Definizione 15.2** (velocità istantanea e iniziale). Riducendo l’intervallo di misura attorno a un istante si ottiene $v(t)=-\mathrm{d}\lbrack A\rbrack /\mathrm{d}t$: sul grafico è l’opposto della pendenza della tangente. La **velocità iniziale**, $v_0$, è quella all’istante $t=0$. Nelle prove condotte partendo dai reagenti, la concentrazione iniziale dei prodotti è trascurabile; ciò permette di studiare la reazione diretta limitando il contributo di quella inversa.

:::image{src="assets/4775da99-concentrazione-secante-tangente.svg" alt="Concentrazione decrescente nel tempo, con una secante tra due misure e una tangente all'istante iniziale" caption="Fig. 15.1 — La secante rappresenta una variazione media di concentrazione; la tangente all'origine permette di ricavare la velocità iniziale. Le velocità di consumo hanno segno opposto alle rispettive pendenze."}
:::

Per una reazione bilanciata $aA+bB\rightarrow cC+dD$, le specie non cambiano concentrazione alla stessa rapidità quando i coefficienti stechiometrici sono diversi. Si definisce quindi una sola **velocità di reazione**, dividendo ciascuna velocità di consumo o formazione per il coefficiente della specie considerata. Il confronto presuppone che le variazioni osservate siano dovute alla reazione scritta, nello stesso volume di riferimento.

:::formula{id="15.1" label="Velocità di reazione normalizzata"}
$$v=-\frac{1}{a}\frac{\Delta[A]}{\Delta t}=-\frac{1}{b}\frac{\Delta[B]}{\Delta t}=\frac{1}{c}\frac{\Delta[C]}{\Delta t}=\frac{1}{d}\frac{\Delta[D]}{\Delta t}$$
:::

Per esempio, in $\mathrm{H_2+I_2\rightarrow 2HI}$ la formazione di $\mathrm{HI}$ è due volte più rapida del consumo di $\mathrm{H_2}$, mentre le due espressioni normalizzate di $v$ coincidono. La forma con le derivate si ottiene dalla stessa relazione sostituendo $\Delta\lbrack X\rbrack /\Delta t$ con $\mathrm{d}\lbrack X\rbrack /\mathrm{d}t$.

### Legge cinetica e ordine di reazione

**Definizione 15.3** (legge cinetica). Nelle condizioni in cui si studia la reazione diretta e i prodotti non compaiono nella dipendenza osservata, per due reagenti si può trovare una legge della forma seguente. Le concentrazioni sono quelle all’istante a cui si riferisce la velocità; $k$ è la **costante di velocità**, caratteristica della reazione nelle condizioni fissate e, in particolare, della temperatura.

:::formula{id="15.2" label="Legge cinetica per due reagenti"}
$$v=k[A]^x[B]^y$$
:::

Gli esponenti $x$ e $y$ sono gli **ordini parziali** rispetto ad $A$ e $B$; $x+y$ è l’**ordine complessivo**. Si determinano sperimentalmente e non si ricavano, in generale, dai coefficienti dell’equazione bilanciata. Possono anche essere frazionari o negativi. Se l’ordine rispetto ad $A$ è zero, variarne la concentrazione non modifica la velocità nelle condizioni della legge; se è uno, raddoppiare $\lbrack A\rbrack $ raddoppia $v$ mantenendo invariati gli altri fattori; se è due, la quadruplica.

L’unità di $k$ si ricava imponendo che la legge restituisca una velocità in $\mathrm{mol/(L\cdot s)}$: per ordine complessivo zero è $\mathrm{mol/(L\cdot s)}$, per il primo è $\mathrm{s^{-1}}$, per il secondo è $\mathrm{L/(mol\cdot s)}$. Specificare l’unità è parte del risultato sperimentale. Le leggi che esprimono direttamente $v$ in funzione delle concentrazioni sono dette **differenziali**; quelle che descrivono la concentrazione in funzione del tempo saranno trattate nelle [leggi cinetiche integrate](ref:chapter/15#p3).

### Determinare gli ordini con le velocità iniziali

Il **metodo delle velocità iniziali** confronta esperimenti alla stessa temperatura e nelle stesse condizioni, variando la concentrazione iniziale di un solo reagente per volta. Per ogni prova si misura la pendenza iniziale della curva concentrazione-tempo. Nel rapporto tra due velocità iniziali, $k$ e le concentrazioni mantenute uguali si semplificano: resta l’effetto del reagente variato. Ottenuti gli ordini, si sostituiscono i dati di una prova nella legge per ricavare $k$.

**Esempio svolto 15.1** (dati ipotetici). Per $\mathrm{2NO+2H_2\rightarrow N_2+2H_2O}$ si supponga di misurare, alla stessa temperatura, le seguenti velocità iniziali. La legge $v=k\lbrack \mathrm{NO}\rbrack ^2\lbrack \mathrm{H_2}\rbrack $ è anche un risultato sperimentale riportato nelle note del corso; qui i numeri sono scelti per mostrare come ricavarla.

1. **Dati.** Nella prova $1$, $\lbrack \mathrm{NO}\rbrack _0=0{,}100\ \mathrm{mol/L}$, $\lbrack \mathrm{H_2}\rbrack _0=0{,}100\ \mathrm{mol/L}$ e $v_{0,1}=2{,}00\times10^{-4}\ \mathrm{mol/(L\cdot s)}$. Nella prova $2$, solo $\lbrack \mathrm{NO}\rbrack _0$ raddoppia a $0{,}200\ \mathrm{mol/L}$ e $v_{0,2}=8{,}00\times10^{-4}\ \mathrm{mol/(L\cdot s)}$. Nella prova $3$, rispetto alla prova $1$ raddoppia solo $\lbrack \mathrm{H_2}\rbrack _0$ a $0{,}200\ \mathrm{mol/L}$ e $v_{0,3}=4{,}00\times10^{-4}\ \mathrm{mol/(L\cdot s)}$.
2. **Strategia.** Si confrontano prima le prove $1$ e $2$ per isolare l’ordine in $\mathrm{NO}$, poi le prove $1$ e $3$ per isolare quello in $\mathrm{H_2}$.
3. **Calcolo.** Dalle prime due prove, $v_{0,2}/v_{0,1}=4{,}00=(0{,}200/0{,}100)^x=2^x$, dunque $x=2$. Dalle prove $1$ e $3$, $v_{0,3}/v_{0,1}=2{,}00=(0{,}200/0{,}100)^y=2^y$, dunque $y=1$. L’ordine complessivo è $2+1=3$. Usando la prova $1$, $k=v_{0,1}/(\lbrack \mathrm{NO}\rbrack _0^2\lbrack \mathrm{H_2}\rbrack _0)=2{,}00\times10^{-4}/(0{,}100^2\cdot0{,}100)=0{,}200\ \mathrm{L^2/(mol^2\cdot s)}$.
4. **Verifica.** Con i dati della prova $2$, $v_0=0{,}200\cdot0{,}200^2\cdot0{,}100=8{,}00\times10^{-4}\ \mathrm{mol/(L\cdot s)}$. Il valore coincide con la misura e l’unità di $k$, moltiplicata per tre fattori di concentrazione, restituisce quella di una velocità.

**Errore tipico 15.1.** Nella reazione dell’esempio, l’esponente di $\mathrm{H_2}$ è $1$, benché il suo coefficiente stechiometrico sia $2$: copiare i coefficienti nella legge cinetica avrebbe dato una dipendenza sbagliata. I coefficienti servono invece a normalizzare le variazioni di concentrazione nella definizione della velocità.

**Errore tipico 15.2.** La velocità di consumo di un reagente richiede il segno meno; inoltre, per determinare un ordine mediante un rapporto tra prove, gli altri reagenti devono avere la stessa concentrazione iniziale. La velocità della reazione diretta si prende positiva quando essa procede; per una reazione reversibile, la **velocità netta** può invece essere nulla all’equilibrio, perché le velocità diretta e inversa si compensano.

## p3 | Leggi cinetiche integrate

### Dalla velocità alla concentrazione nel tempo

La [legge cinetica](ref:chapter/15#p2) esprime come la velocità dipende dalle concentrazioni. La **legge cinetica integrata** risponde a una domanda diversa: quale sarà la concentrazione di un reagente dopo un tempo assegnato, oppure quanto tempo occorrerà per raggiungere una concentrazione fissata? Per ricavarla si collega la velocità istantanea alla variazione della concentrazione e si integra rispetto al tempo.

Consideriamo un reagente $A$ il cui consumo sia descritto da $v=-\frac{\mathrm{d}\lbrack A\rbrack }{\mathrm{d}t}=k\lbrack A\rbrack ^m$. Le formule che seguono richiedono che $k$ resti costante durante l'intervallo considerato, che il volume sia costante e che il consumo di $A$ sia rappresentato da questa sola legge. Per una reazione con più reagenti, l'ordine complessivo da solo non basta a scegliere la formula integrata in $\lbrack A\rbrack $: occorre conoscere anche come variano le altre concentrazioni. Gli ordini cinetici si determinano sperimentalmente, non dai coefficienti dell'equazione chimica.

Indichiamo con $\lbrack A\rbrack _0$ la concentrazione a $t=0$ e con $\lbrack A\rbrack _t$ quella all'istante $t$. Le tre leggi seguenti corrispondono, rispettivamente, a $m=0$, $m=1$ e $m=2$.

### Le tre leggi integrate

**Ordine zero.** Se $v=k\lbrack A\rbrack ^0=k$, la concentrazione diminuisce della stessa quantità in intervalli di tempo uguali. Integrando $-\mathrm{d}\lbrack A\rbrack /\mathrm{d}t=k$ si ottiene la legge seguente.

:::formula{id="15.3" label="Legge cinetica integrata di ordine zero"}
$$[A]_t=[A]_0-kt$$
:::

La legge {{formula:15.3}} vale finché $\lbrack A\rbrack _t\geq 0$ e permane il regime cinetico ipotizzato. Il grafico di $\lbrack A\rbrack _t$ in funzione di $t$ è una retta con pendenza $-k$ e intercetta $\lbrack A\rbrack _0$. Se la concentrazione è in $\mathrm{mol/L}$ e il tempo in $\mathrm{s}$, $k$ si esprime in $\mathrm{mol/(L\cdot s)}$. Per esempio, con $\lbrack A\rbrack _0=0,100\ \mathrm{mol/L}$ e $k=0,0100\ \mathrm{mol/(L\cdot s)}$, dopo $4,00\ \mathrm{s}$ si ha $\lbrack A\rbrack _t=0,100-0,0100\cdot4,00=0,0600\ \mathrm{mol/L}$.

**Primo ordine.** Se $v=k\lbrack A\rbrack $, separando le variabili e integrando fra $0$ e $t$ si trova $\int_{\lbrack A\rbrack _0}^{\lbrack A\rbrack _t}\frac{\mathrm{d}\lbrack A\rbrack }{\lbrack A\rbrack }=-k\int_0^t\mathrm{d}t$. Il risultato può essere scritto in forma logaritmica o esponenziale. Il rapporto dentro il logaritmo è adimensionale.

:::formula{id="15.4" label="Legge cinetica integrata del primo ordine"}
$$\ln\left(\frac{[A]_0}{[A]_t}\right)=kt\qquad\Longleftrightarrow\qquad[A]_t=[A]_0e^{-kt}$$
:::

La legge {{formula:15.4}} descrive una diminuzione esponenziale: in intervalli di tempo uguali reagisce la stessa **frazione** della quantità presente all'inizio di ciascun intervallo. Il grafico di $\ln\left(\lbrack A\rbrack _t/\lbrack A\rbrack _0\right)$ contro $t$ è una retta di pendenza $-k$. L'unità di $k$ è l'inverso dell'unità di tempo, per esempio $\mathrm{s^{-1}}$.

**Secondo ordine rispetto ad $A$.** Se $v=k\lbrack A\rbrack ^2$, l'integrazione di $-\mathrm{d}\lbrack A\rbrack /\mathrm{d}t=k\lbrack A\rbrack ^2$ porta alla legge seguente. Non va applicata automaticamente a ogni reazione di secondo ordine complessivo: una legge $v=k\lbrack A\rbrack \lbrack B\rbrack $ coinvolge anche l'andamento di $\lbrack B\rbrack $.

:::formula{id="15.5" label="Legge cinetica integrata del secondo ordine in un reagente"}
$$\frac{1}{[A]_t}-\frac{1}{[A]_0}=kt$$
:::

Riordinando {{formula:15.5}} si ottiene $1/\lbrack A\rbrack _t=kt+1/\lbrack A\rbrack _0$. È quindi $1/\lbrack A\rbrack _t$, e non $\lbrack A\rbrack _t$, a essere lineare rispetto al tempo; la pendenza è $k$. Con concentrazioni in $\mathrm{mol/L}$ e tempi in $\mathrm{s}$, l'unità di $k$ è $\mathrm{L/(mol\cdot s)}$. Misurando $\lbrack A\rbrack $ a più istanti, si può confrontare la linearità di $\lbrack A\rbrack _t$, $\ln\left(\lbrack A\rbrack _t/\lbrack A\rbrack _0\right)$ e $1/\lbrack A\rbrack _t$ per riconoscere, rispettivamente, ordine zero, primo o secondo ordine nel modello considerato.

:::image{src="assets/217675ba-concentrazione-tre-ordini.svg" alt="Tre curve partono dalla stessa concentrazione: una scende in linea retta fino a zero, una decresce esponenzialmente e una si appiattisce più lentamente." caption="Fig. 15.2 — Concentrazione nel tempo per i tre ordini, con concentrazione iniziale di 1 mol/L e costanti numericamente pari a 1 nelle rispettive unità."}
:::

### Tempo di dimezzamento

**Definizione 15.4.** Il **tempo di dimezzamento** $t_{1/2}$ è il tempo necessario affinché la concentrazione di $A$ passi dal valore iniziale $\lbrack A\rbrack _0$ a $\lbrack A\rbrack _0/2$. Per ricavarlo si pone $\lbrack A\rbrack _t=\lbrack A\rbrack _0/2$ nella legge integrata pertinente.

- **Ordine zero:** da $\lbrack A\rbrack _0/2=\lbrack A\rbrack _0-kt_{1/2}$ segue $t_{1/2}=\lbrack A\rbrack _0/(2k)$. Il tempo di dimezzamento è proporzionale alla concentrazione da cui parte l'intervallo.
- **Primo ordine:** da $\ln\left(\lbrack A\rbrack _0/(\lbrack A\rbrack _0/2)\right)=kt_{1/2}$ segue $t_{1/2}=\ln 2/k$. La concentrazione iniziale si semplifica: ogni dimezzamento richiede lo stesso tempo, purché $k$ rimanga costante.
- **Secondo ordine in $A$:** da $2/\lbrack A\rbrack _0-1/\lbrack A\rbrack _0=kt_{1/2}$ segue $t_{1/2}=1/(k\lbrack A\rbrack _0)$. Quando la concentrazione di partenza si dimezza, il successivo tempo di dimezzamento raddoppia.

### Esempio svolto ed errori frequenti

**Esempio svolto 15.2.** A $25\ ^\circ\mathrm{C}$, lo ioduro di idrogeno si decompone con legge sperimentale $v=k\lbrack \mathrm{HI}\rbrack ^2$ e $k=2,4\times10^{-21}\ \mathrm{L/(mol\cdot s)}$. Si introducono $0,0100\ \mathrm{mol}$ di $\mathrm{HI}$ in un recipiente di volume costante pari a $1,0\ \mathrm{L}$. Quanto tempo occorre perché reagisca il $10\%$ dello ioduro di idrogeno?

1. **Dati.** La concentrazione iniziale è $\lbrack \mathrm{HI}\rbrack _0=n/V=0,0100/1,0=0,010\ \mathrm{mol/L}$. Se reagisce il $10\%$, resta il $90\%$: $\lbrack \mathrm{HI}\rbrack _t=0,90\lbrack \mathrm{HI}\rbrack _0=0,0090\ \mathrm{mol/L}$.
2. **Strategia.** La legge data è di secondo ordine rispetto a $\mathrm{HI}$; si isola $t$ in {{formula:15.5}}.
3. **Calcolo.** Si sostituiscono i valori mantenendo le cifre intermedie:

$$t=\frac{1}{k}\left(\frac{1}{\lbrack \mathrm{HI}\rbrack _t}-\frac{1}{\lbrack \mathrm{HI}\rbrack _0}\right)=\frac{1}{2,4\times10^{-21}}\left(\frac{1}{0,0090}-\frac{1}{0,010}\right)\ \mathrm{s}=4,6\times10^{21}\ \mathrm{s}.$$

4. **Verifica.** $kt$ ha unità $\mathrm{L/mol}$, come la differenza fra i reciproci delle concentrazioni; inoltre $\lbrack \mathrm{HI}\rbrack _t<\lbrack \mathrm{HI}\rbrack _0$ rende il tempo positivo.

**Errore tipico 15.3.** Usare $t_{1/2}=\ln 2/k$ per qualsiasi reazione produce risultati errati: la formula vale soltanto per il primo ordine. Anche scegliere l'ordine dal coefficiente stechiometrico, oppure cercare una retta di $\lbrack A\rbrack $ contro $t$ per una cinetica del primo o del secondo ordine, porta a una diagnosi sbagliata. Prima del calcolo, controllare la legge sperimentale e le unità di $k$.

## p4 | Temperatura ed energia di attivazione

### Effetto della temperatura sulla costante di velocità

La [velocità di reazione](ref:chapter/15#p2) dipende dalla concentrazione dei reagenti attraverso la legge cinetica $v=k\lbrack A\rbrack ^x\lbrack B\rbrack ^y$, ma la costante $k$ non è affatto una vera costante: essa cambia con la temperatura. Raccogliendo dati di concentrazione e tempo per una stessa reazione condotta a diverse temperature, e ricavando $k$ da ciascun esperimento, si osserva che $k$ aumenta sempre al crescere della temperatura. La temperatura, quindi, non compare esplicitamente nella legge cinetica differenziale, ma ne modifica la velocità agendo sulla costante $k$.

Sperimentalmente il grafico di $k$ in funzione di $T$ è una curva esponenziale crescente, descritta dall'**equazione di Arrhenius**.

:::formula{id="15.6" label="Equazione di Arrhenius"}
$$k = A \cdot e^{-E_a/(R\,T)}$$
:::

In questa equazione compaiono due grandezze caratteristiche della reazione:

- il **fattore di frequenza pre-esponenziale** $A$, legato alla frequenza degli urti tra le molecole e alla loro orientazione reciproca;
- l'**energia di attivazione** $E_a$.

**Definizione 15.5** (energia di attivazione). $E_a$ è la barriera energetica minima che un urto tra molecole reagenti deve superare per poter dare luogo alla trasformazione chimica: tanto più alto è il suo valore, tanto minore è la velocità di reazione, a parità di temperatura.

Dall'equazione di Arrhenius segue che, poiché $T$ compare al denominatore dell'esponente negativo, un aumento di temperatura aumenta sempre $k$, qualunque sia la reazione.

### Linearizzazione e determinazione sperimentale di $E_a$

Per ricavare $E_a$ e $A$ da dati sperimentali conviene linearizzare l'equazione di Arrhenius applicando il logaritmo naturale a entrambi i membri.

:::formula{id="15.7" label="Equazione di Arrhenius linearizzata"}
$$\ln k = \ln A - \frac{E_a}{R}\cdot\frac{1}{T}$$
:::

Questa è l'equazione di una retta se si pone $\ln k$ in ordinata e $1/T$ in ascissa: l'intercetta vale $\ln A$ e la pendenza vale $-E_a/R$. Misurando sperimentalmente $k$ a diverse temperature e riportando i punti $(1/T,\ \ln k)$ si ottiene quindi $E_a$ dalla pendenza della retta di regressione (alcuni testi usano $\log_{10}k$ al posto di $\ln k$, ottenendo una pendenza $-E_a/(2{,}303\,R)$; qui si segue la convenzione con il logaritmo naturale).

Quando invece si dispone soltanto di due coppie di valori $(k_1,T_1)$ e $(k_2,T_2)$, è più comodo sottrarre membro a membro le due equazioni linearizzate, ottenendo una relazione che non richiede di conoscere $A$.

:::formula{id="15.8" label="Equazione di Arrhenius a due punti"}
$$\ln\frac{k_2}{k_1} = -\frac{E_a}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)$$
:::

Questa formula, risolta per $E_a$, permette di calcolare l'energia di attivazione da due sole misure della costante di velocità.

:::image{src="assets/bc0be663-grafico-arrhenius.svg" alt="Grafico del logaritmo naturale della costante di velocità in funzione dell'inverso della temperatura assoluta, con retta decrescente" caption="Fig. 15.3 — Diagramma di Arrhenius: ln k in funzione di 1/T. La pendenza della retta è -E_a/R."}
:::

**Esempio svolto 15.3.** Per una reazione si misura $k_1 = 3{,}0 \times 10^{-4}\ \text{s}^{-1}$ a $T_1 = 300\ \text{K}$ e $k_2 = 2{,}4 \times 10^{-3}\ \text{s}^{-1}$ a $T_2 = 320\ \text{K}$. Si vuole calcolare l'energia di attivazione.

1. Dati: $k_1$, $T_1$, $k_2$, $T_2$ come sopra; $R = 8{,}314\ \text{J/(mol·K)}$.
2. Strategia: si usa la forma a due punti dell'equazione di Arrhenius, risolta per $E_a$ {{formula:15.8}}.
3. Calcolo:

$$\begin{aligned}
\ln\frac{k_2}{k_1} &= \ln\frac{2{,}4\times10^{-3}}{3{,}0\times10^{-4}} = \ln(8{,}0) = 2{,}08 \\
\frac{1}{T_2}-\frac{1}{T_1} &= \frac{1}{320}-\frac{1}{300} = -2{,}08\times10^{-4}\ \text{K}^{-1} \\
E_a &= -R\cdot\frac{\ln(k_2/k_1)}{\frac{1}{T_2}-\frac{1}{T_1}} = -8{,}314\cdot\frac{2{,}08}{-2{,}08\times10^{-4}} \approx 8{,}3\times10^{4}\ \text{J/mol} = 83\ \text{kJ/mol}
\end{aligned}$$

4. Verifica: il risultato ha segno positivo, come deve essere per $E_a$; l'ordine di grandezza (decine-centinaia di kJ/mol) è tipico delle reazioni in fase gassosa o in soluzione.

**Errore tipico 15.4.** Uno sbaglio frequente è invertire l'ordine delle temperature o delle costanti nei due membri dell'equazione, cambiando il segno di $E_a$; un secondo errore è dimenticare di convertire la temperatura in kelvin, come già segnalato per le leggi dei gas nella sezione su [pressione e leggi dei gas ideali](ref:chapter/6#p2).

### Teoria delle collisioni

L'equazione di Arrhenius fu proposta in origine su base empirica; in seguito sono stati formulati due modelli microscopici che ne spiegano l'origine fisica: la teoria delle collisioni e la teoria dello stato di transizione.

**Teoria** (delle collisioni). La velocità di reazione è il risultato delle collisioni tra le particelle reagenti, che avvengono con una certa frequenza e con una certa energia minima. Poiché le particelle devono urtarsi per reagire, il numero di collisioni nell'unità di tempo pone un limite superiore alla velocità della reazione. Perché una collisione sia efficace, devono essere soddisfatte tre condizioni:

1. le molecole reagenti devono collidere tra loro;
2. l'urto deve avvenire con energia cinetica totale almeno pari a $E_a$, cioè sufficiente a rompere i legami coinvolti nella reazione;
3. le molecole devono urtarsi con un'orientazione reciproca che consenta il riarrangiamento degli atomi.

La teoria delle collisioni spiega in particolare due fatti sperimentali. Primo, per uno stadio elementare bimolecolare in cui due particelle A e B collidono direttamente, la presenza del prodotto delle concentrazioni (e non della loro somma) nella legge cinetica di quello stadio: se le particelle devono urtarsi per reagire, le leggi della probabilità impongono che il numero di urti tra A e B, e quindi la velocità di quello stadio, dipenda dal prodotto $\lbrack A\rbrack \lbrack B\rbrack $, come si verifica contando quanti urti A–B sono possibili al crescere del numero di molecole di A e di B. Quando la legge cinetica sperimentale si riferisce invece alla reazione complessiva di un meccanismo a più stadi, la sua forma a prodotto di concentrazioni non discende direttamente da questo semplice argomento sugli urti, ma resta un dato empirico da determinare caso per caso. Secondo, l'effetto della temperatura: all'aumentare di $T$ cresce la velocità media delle particelle e quindi la frequenza delle collisioni; tuttavia la sola frequenza non basta a spiegare quantitativamente l'aumento di $k$ con $T$.

La spiegazione quantitativa viene dalla distribuzione di Maxwell-Boltzmann delle energie cinetiche molecolari: a una data temperatura solo una frazione delle molecole possiede energia sufficiente a superare $E_a$, e tale frazione è proporzionale al fattore esponenziale $e^{-E_a/(RT)}$ dell'equazione di Arrhenius. Aumentando la temperatura la distribuzione si allarga verso le energie più alte, cresce la frazione di urti con energia superiore a $E_a$ e quindi cresce la velocità di reazione, pur restando costante l'area totale sotto la curva (cioè il numero totale di molecole).

Resta da spiegare un'eventuale discrepanza tra la frequenza totale degli urti e la velocità osservata: non tutti gli urti con energia sufficiente danno effettivamente luogo alla reazione, perché gli atomi reagenti devono anche trovarsi nell'orientazione geometrica corretta nel momento dell'urto. Questo effetto sterico è incluso nel fattore pre-esponenziale, che si può scrivere come prodotto della frequenza degli urti $\nu_{\text{urti}}$ per un fattore di probabilità di orientazione $p$, con $0<p\le 1$.

:::formula{id="15.9" label="Fattore pre-esponenziale di Arrhenius"}
$$A = \nu_{\text{urti}} \cdot p$$
:::

### Teoria dello stato di transizione

La teoria dello stato di transizione descrive in modo più dettagliato cosa accade durante un urto efficace, mostrando come l'energia dell'urto converta gradualmente i reagenti in prodotti.

Quando due molecole con orientazione efficace si urtano alla velocità necessaria, la loro energia cinetica le spinge l'una verso l'altra con forza sufficiente a vincere la repulsione delle nuvole elettroniche. In questo processo i nuclei di un atomo iniziano ad attrarre gli elettroni dell'altro, gli orbitali atomici si sovrappongono e la densità elettronica si ridistribuisce: alcuni legami dei reagenti si allungano e si indeboliscono, mentre altri cominciano a formarsi. In un istante intermedio della trasformazione il sistema non è più descrivibile né come reagente né come prodotto, ma come una specie con legami parziali, detta **stato di transizione** o **complesso attivato**.

**Definizione 15.6** (complesso attivato). Il complesso attivato è una specie ad altissima energia potenziale, instabile, che esiste solo nell'istante in cui il sistema in reazione possiede energia massima; si forma soltanto quando, oltre all'orientazione efficace, l'energia dell'urto è almeno pari a $E_a$.

Un esempio chiarisce la natura del complesso attivato: nella reazione

$$\mathrm{CH_3Br_{(l)} + OH^-_{(aq)} \to CH_3OH_{(aq)} + Br^-_{(aq)}}$$

l'avvicinamento dell'ione $\mathrm{OH^-}$ induce la formazione parziale del nuovo legame C–O mentre il legame C–Br preesistente si indebolisce. Nello stato di transizione l'atomo di carbonio risulta circondato da cinque atomi, una configurazione che il carbonio non assume mai in una specie stabile: il complesso attivato contiene tre legami normali C–H e due legami parziali, C$\cdots$Br e C$\cdots$O, ma non cinque legami normali.

L'intera trasformazione si rappresenta con il diagramma dell'energia di reazione, in cui l'asse orizzontale (coordinata di reazione) indica l'avanzamento da reagenti a prodotti e l'asse verticale riporta l'energia potenziale del sistema. Il complesso attivato corrisponde al massimo della curva. Se la reazione è esotermica l'energia dei prodotti è inferiore a quella dei reagenti, e viceversa se è endotermica; questa differenza, dovuta alle diverse energie di legame tra reagenti e prodotti, corrisponde a $\Delta H_r$ già introdotto nella sezione su [entalpia ed equazioni termochimiche](ref:chapter/7#p3). Il diagramma riporta inoltre due valori di energia di attivazione, uno per la reazione diretta e uno, generalmente diverso, per la reazione inversa: la teoria dello stato di transizione afferma infatti che ogni reazione passa per il proprio complesso attivato e che tutte le reazioni sono in linea di principio reversibili.

È importante distinguere il complesso attivato da un **intermedio di reazione**: quest'ultimo, che compare quando la reazione procede attraverso più stadi elementari (meccanismo di reazione, trattato nella sezione successiva), è una specie reale, sufficientemente stabile da poter essere isolata in laboratorio, mentre il complesso attivato non lo è mai, poiché corrisponde al punto di energia massima tra due minimi.

## p5 | Meccanismi di reazione e catalisi

### Dagli stadi elementari alla legge cinetica

Un’equazione chimica bilanciata descrive il bilancio complessivo, ma non necessariamente il percorso seguito dalle particelle. Un **meccanismo di reazione** è una sequenza di **stadi elementari**, ciascuno corrispondente a un evento molecolare, la cui somma restituisce la reazione complessiva. Una specie prodotta in uno stadio e consumata in un altro è un **intermedio**: compare nel meccanismo, ma si cancella quando si sommano gli stadi.

La **molecolarità** di uno stadio elementare è il numero di particelle reagenti coinvolte in quell’evento: uno stadio può essere unimolecolare o bimolecolare; eventi che richiedono l’urto simultaneo di tre particelle sono rari. Solo per uno stadio effettivamente elementare gli esponenti della sua legge cinetica si leggono dai coefficienti dei reagenti. Per la reazione complessiva, invece, gli ordini si determinano sperimentalmente, come nella sezione [Velocità di reazione e leggi cinetiche](ref:chapter/15#p2).

Se uno stadio è molto più lento degli altri, è detto **stadio determinante la velocità**: limita il flusso attraverso il meccanismo. Quando i suoi reagenti sono specie presenti nella miscela iniziale e gli stadi successivi sono rapidi, la legge cinetica globale segue, in prima approssimazione, quella dello stadio lento. Se nello stadio lento compare un intermedio formato prima, occorre esprimerne la concentrazione mediante le specie misurabili. Per esempio, nel meccanismo $\mathrm{A} + \mathrm{B} \rightleftharpoons \mathrm{I}$ (equilibrio rapido), seguito da $\mathrm{I} + \mathrm{C} \to \mathrm{P}$ (stadio lento), la velocità è $v \simeq k_2\lbrack \mathrm{I}\rbrack \lbrack \mathrm{C}\rbrack $. Se il primo stadio è all’equilibrio, la sua costante è $K_1 = \lbrack \mathrm{I}\rbrack /(\lbrack \mathrm{A}\rbrack \lbrack \mathrm{B}\rbrack )$, quindi $\lbrack \mathrm{I}\rbrack  = K_1\lbrack \mathrm{A}\rbrack \lbrack \mathrm{B}\rbrack $ e $v \simeq k_2K_1\lbrack \mathrm{A}\rbrack \lbrack \mathrm{B}\rbrack \lbrack \mathrm{C}\rbrack $. La legge così ottenuta va confrontata con quella misurata sperimentalmente. Un meccanismo proposto deve inoltre sommare alla reazione globale, contenere stadi molecolarmente plausibili ed essere compatibile con la legge cinetica misurata.

**Esempio svolto 15.4** (legge cinetica da uno stadio lento). Si consideri il meccanismo proposto per l’ossidazione del monossido di azoto, con il primo stadio molto più lento del secondo. Per un esercizio numerico si assumano $\lbrack \mathrm{NO}\rbrack =0{,}0200\ \mathrm{mol/L}$, $\lbrack \mathrm{O_2}\rbrack =0{,}0300\ \mathrm{mol/L}$ e $k_1=0{,}500\ \mathrm{L/(mol\cdot s)}$.

1. **Dati.** Gli stadi sono $\mathrm{NO}_{(g)}+\mathrm{O_2}_{(g)}\to\mathrm{NO_3}_{(g)}$ (lento) e $\mathrm{NO_3}_{(g)}+\mathrm{NO}_{(g)}\to 2\mathrm{NO_2}_{(g)}$ (rapido). $\mathrm{NO_3}$ è l’intermedio, perché nasce nel primo stadio e scompare nel secondo.
2. **Strategia.** Si sommano gli stadi e si elimina $\mathrm{NO_3}$ dai due membri: $2\mathrm{NO}_{(g)}+\mathrm{O_2}_{(g)}\to 2\mathrm{NO_2}_{(g)}$. Poiché il primo stadio è elementare e lento, la legge prevista è $v\simeq k_1\lbrack \mathrm{NO}\rbrack \lbrack \mathrm{O_2}\rbrack $.
3. **Calcolo.** $v\simeq(0{,}500\ \mathrm{L/(mol\cdot s)})(0{,}0200\ \mathrm{mol/L})(0{,}0300\ \mathrm{mol/L})=3{,}00\times10^{-4}\ \mathrm{mol/(L\cdot s)}$.
4. **Verifica.** Le unità danno una concentrazione divisa per un tempo. La legge è del primo ordine rispetto a $\mathrm{NO}$ e a $\mathrm{O_2}$, quindi del secondo ordine complessivo. Il coefficiente $2$ davanti a $\mathrm{NO}$ nella reazione globale non impone un esponente $2$: la previsione deve essere confrontata con velocità misurate sperimentalmente.

**Errore tipico 15.5.** Scrivere $v=k\lbrack \mathrm{NO}\rbrack ^2\lbrack \mathrm{O_2}\rbrack $ leggendo gli esponenti dalla reazione globale, oppure inserire $\lbrack \mathrm{NO_3}\rbrack $ nella legge ottenuta dal primo stadio. Il primo procedimento confonde stechiometria e ordine cinetico; il secondo attribuisce allo stadio lento un reagente che vi compare soltanto come prodotto.

### Come agisce un catalizzatore

Un **catalizzatore** aumenta la velocità di reazione attraverso un percorso alternativo e viene rigenerato entro la fine del processo: può partecipare agli stadi, pur non comparendo nel bilancio complessivo. Il percorso catalizzato presenta una barriera di attivazione più bassa rispetto a quello non catalizzato. La quantità necessaria è generalmente inferiore a quella stechiometrica dei reagenti. Il legame fra barriera e velocità è discusso in [Temperatura ed energia di attivazione](ref:chapter/15#p4).

:::image{src="assets/72cab61d-profili-energetici-catalisi.svg" alt="Energia lungo la coordinata di reazione: due percorsi con gli stessi estremi, quello catalizzato con una barriera più bassa" caption="Fig. 15.4 — Profili energetici schematici: il catalizzatore cambia il percorso e abbassa la barriera, lasciando invariati gli stati iniziale e finale."}
:::

Il catalizzatore accelera sia la reazione diretta sia quella inversa. A temperatura fissata non cambia quindi la costante né la composizione di equilibrio: consente di raggiungerla più rapidamente. La parola **resa** richiede attenzione: a parità di condizioni e una volta raggiunto l’equilibrio, il catalizzatore non aumenta la quantità di prodotto prevista dall’equilibrio. Può invece aumentare la quantità ottenuta entro un tempo di esercizio limitato. Si confronti questa distinzione con [Equilibrio dinamico e costante di equilibrio](ref:chapter/12#p2).

**Errore tipico 15.6.** Dire che il catalizzatore «non prende parte alla reazione» può far pensare che non interagisca con i reagenti. La formulazione precisa è che partecipa al meccanismo ed è **rigenerato**, perciò non è consumato nella reazione complessiva.

### Catalisi omogenea, eterogenea ed enzimatica

Nella **catalisi omogenea** il catalizzatore e i reagenti si trovano nella stessa fase, per esempio nella stessa soluzione. Nella **catalisi eterogenea** si trovano in fasi diverse: un caso comune è un solido a contatto con reagenti gassosi o liquidi. La distinzione riguarda le fasi presenti, non la formula chimica del catalizzatore.

Su un catalizzatore solido i reagenti raggiungono la superficie, si **adsorbono**, reagiscono nei siti attivi e i prodotti si **desorbono**. Una grande area superficiale offre più punti di contatto. L’adsorbimento è l’accumulo sulla superficie: non va confuso con l’assorbimento nel volume del materiale. Specie che occupano i siti e ne impediscono l’uso possono avvelenare il catalizzatore.

Gli **enzimi** sono catalizzatori biologici, nella maggior parte dei casi proteine. Una regione detta **sito attivo** lega il substrato e favorisce una trasformazione specifica; dopo il rilascio del prodotto, l’enzima può agire su un’altra molecola. Questa specificità permette reazioni rapide in condizioni moderate. Come per gli altri catalizzatori, l’enzima si rigenera, mentre un inibitore può ridurne l’attività.

### Il processo Haber-Bosch

La sintesi industriale dell’ammoniaca combina azoto e idrogeno su un catalizzatore eterogeneo a base di ferro. La reazione globale è $\mathrm{N_2}_{(g)}+3\mathrm{H_2}_{(g)}\rightleftharpoons 2\mathrm{NH_3}_{(g)}$; la rottura del forte legame tra gli atomi di azoto contribuisce alla lentezza della trasformazione senza catalisi.

La reazione è esotermica, con $\Delta H_r^\circ\simeq-91{,}8\ \mathrm{kJ/mol}$ per l’equazione scritta. Una temperatura più bassa favorisce l’ammoniaca all’equilibrio, ma rallenta la cinetica; una pressione più alta favorisce il lato con meno moli gassose, cioè i prodotti. Sono effetti di equilibrio e di velocità distinti, descritti anche nel [Principio di Le Châtelier](ref:chapter/12#p4).

Un assetto riportato nel materiale del corso usa circa $450\ ^\circ\mathrm{C}$ e $230\ \mathrm{atm}$, con un letto catalitico fisso a base di ferro. All’uscita si raffredda la miscela per condensare l’ammoniaca e si ricircolano i gas rimasti: la separazione del prodotto e il riciclo contribuiscono alla produzione complessiva. Il catalizzatore rende praticabile una velocità adeguata alla temperatura scelta, ma non sposta da sé l’equilibrio.

## p6 | Radioattività e processi nucleari

### Nuclidi ed equazioni nucleari

**Definizione 15.7**. Un nuclide è una specie nucleare identificata dal numero atomico $Z$, dal numero di massa $A$ e dallo stato energetico. Un radionuclide è un nuclide instabile che decade spontaneamente emettendo radiazioni. La notazione ${}^{A}_{Z}X$ e le relazioni tra protoni e neutroni sono introdotte in [Struttura dell’atomo e isotopi](ref:chapter/2#p3).

Per **bilanciare un’equazione nucleare** si uguagliano separatamente, nei due membri, le somme dei numeri di massa $A$ e dei numeri atomici $Z$. Questi ultimi includono il valore $-1$ dell’elettrone e il valore $+1$ del positrone. Le trasformazioni più comuni si riconoscono dalle particelle emesse.

- Nel decadimento $\alpha$ si emette un nucleo ${}^{4}_{2}\mathrm{He}$: $A$ diminuisce di $4$ e $Z$ di $2$. Per esempio, ${}^{238}_{92}\mathrm{U}\to{}^{234}_{90}\mathrm{Th}+{}^{4}_{2}\mathrm{He}$.
- Nel decadimento $\beta^-$ un neutrone si trasforma in un protone: $A$ resta costante e $Z$ aumenta di $1$. Per esempio, ${}^{14}_{6}\mathrm{C}\to{}^{14}_{7}\mathrm{N}+{}^{0}_{-1}\beta^-+\bar{\nu}$, dove $\bar{\nu}$ è un antineutrino.
- Nel decadimento $\beta^+$ un protone si trasforma in un neutrone: $A$ resta costante e $Z$ diminuisce di $1$. In generale, ${}^{A}_{Z}X\to{}^{A}_{Z-1}Y+{}^{0}_{+1}\beta^++\nu$.
- Nell’emissione $\gamma$ un nucleo eccitato perde energia senza cambiare $A$ o $Z$: ${}^{A}_{Z}X^{*}\to{}^{A}_{Z}X+\gamma$.

**Esempio svolto 15.5**. Completare ${}^{57}_{27}\mathrm{Co}+{}^{0}_{-1}e^-\to{}^{A}_{Z}Y$, una cattura elettronica. **Dati:** a sinistra le somme sono $57+0=57$ per il numero di massa e $27-1=26$ per il numero atomico. **Strategia:** imporre le stesse somme a destra. **Calcolo:** $A=57$ e $Z=26$ identificano il ferro; quindi ${}^{57}_{27}\mathrm{Co}+{}^{0}_{-1}e^-\to{}^{57}_{26}\mathrm{Fe}$. **Verifica:** entrambi i membri hanno numero di massa $57$ e numero atomico totale $26$.

Nella **fissione** un nucleo pesante si scinde in nuclei più leggeri, spesso liberando neutroni; nella **fusione** nuclei leggeri si uniscono. Anche queste equazioni si bilanciano con le somme di $A$ e $Z$.

### Decadimento, attività e datazione

Il decadimento di un singolo nucleo è imprevedibile; per molti nuclei identici si può descrivere la diminuzione del loro numero $N$. Se ogni nucleo ha la stessa probabilità di decadere per unità di tempo e la costante di decadimento $\varepsilon$ resta costante, vale $-\mathrm{d}N/\mathrm{d}t=\varepsilon N$. Qui $N$ indica i nuclei radioattivi ancora presenti.

:::formula{id="15.10" label="Nuclei radioattivi residui"}
$$N(t)=N_0e^{-\varepsilon t},\qquad t_{1/2}=\frac{\ln 2}{\varepsilon}$$
:::

L’**attività** $\mathcal{A}=-\mathrm{d}N/\mathrm{d}t=\varepsilon N$ è il numero di decadimenti per unità di tempo; la sua unità è il becquerel, $1\ \mathrm{Bq}=1\ \mathrm{s}^{-1}$. Per lo stesso campione, con $\varepsilon$ costante, attività e nuclei residui hanno quindi la medesima frazione rispetto al valore iniziale. Nelle note del corso la costante è $\varepsilon$; è comune anche il simbolo $\lambda$.

:::formula{id="15.11" label="Attività radioattiva residua"}
$$\frac{\mathcal{A}(t)}{\mathcal{A}_0}=e^{-\varepsilon t}=2^{-t/t_{1/2}},\qquad t=\frac{t_{1/2}}{\ln 2}\ln\left(\frac{\mathcal{A}_0}{\mathcal{A}(t)}\right)$$
:::

:::image{src="assets/9967d3f5-attivita-emivite.svg" alt="L'attività relativa scende da 1 a 0,5, 0,25 e 0,125 dopo una, due e tre emivite" caption="Fig. 15.5 — Attività residua in funzione del numero di emivite trascorse."}
:::

**Esempio svolto 15.6**. Un reperto organico presenta un’attività del ${}^{14}_{6}\mathrm{C}$ pari al $25\%$ di quella iniziale. Assumendo $t_{1/2}\approx 5\ 700\ \mathrm{anni}$, stimarne l’età. **Dati:** $\mathcal{A}(t)/\mathcal{A}_0=0{,}25$. **Strategia:** ricavare il tempo dalla formula dell’attività. **Calcolo:** $t=(5\ 700\ \mathrm{anni}/\ln 2)\ln(1/0{,}25)=2(5\ 700\ \mathrm{anni})\approx 11\ 400\ \mathrm{anni}$. **Verifica:** dopo due emivite resta $(1/2)^2=1/4$ dell’attività iniziale. La stima presuppone che il reperto abbia smesso di scambiare carbonio con l’ambiente e che l’attività iniziale sia nota dal rapporto isotopico di riferimento.

**Errore tipico 15.7**. Dimezzare l’attività sottraendo ogni volta una quantità fissa: dopo due emivite resta un quarto, non zero. Nel bilanciamento nucleare, inoltre, la particella $\beta^-$ ha numero di massa $0$ e numero atomico $-1$: trascurare quest’ultimo porta a identificare l’elemento prodotto in modo errato.
