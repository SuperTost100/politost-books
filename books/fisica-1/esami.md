---
type: esami
printable: true
---

:::exercise{id="X2022-1" type="esame" chapter="7" difficulty="medio"}
## Domanda
**Prova scritta del 23 giugno 2022**

**Esercizio 1A**

Due punti materiali, inizialmente fermi e a distanza $d=1$ m l’uno dall’altro, vengono fatti scendere all’istante $t=0$ s lungo un piano inclinato di un angolo $\theta=30°$. I due punti hanno uguale massa $m_1=m_2=2$ Kg e diverso coefficiente di attrito col piano: $\mu_1=0.4$ per $m_1$ e $\mu_2=0.2$ per $m_2$. Essi urtano sul piano inclinato restando attaccati.

In corrispondenza del punto dell’urto, posto alla quota $h=0.6$ m il piano diventa liscio e si raccorda con un tratto lineare sempre liscio di lunghezza $l=0.8$ m. Il sistema percorre tali tratti e comprime una molla di costante elastica $k=50$ N/m, massa trascurabile e inizialmente a riposo. La molla, come illustrato in figura, è fissata alla parete con cui termina il tratto orizzontale.

Si calcoli

1. La velocità del sistema dopo l’urto
2. la variazione di energia cinetica del sistema durante l’urto
3. La forza elastica esercitata dalla molla nel punto di massima compressione

:::solution
**Esercizio 1A — soluzione**

1. Analizzando i due punti e le forze agenti su di essi si determinano le accelerazioni

$$a_1=g\sin\theta-\mu_1g\cos\theta=1.51\ \frac{\mathrm{m}}{\mathrm{s}^2}$$

$$a_2=g\sin\theta-\mu_2g\cos\theta=3.20\ \frac{\mathrm{m}}{\mathrm{s}^2}$$

I due punti materiali scendono lungo il piano con moto uniformemente accelerato e l’urto si svolgerà quando avranno percorso lo stesso spazio

$$\frac{1}{2}a_1t^2+d=\frac{1}{2}a_2t^2\;\rightarrow\;t=\sqrt{\frac{2d}{a_2-a_1}}=1.09\ \mathrm{s}$$

Urtano restando attaccati, quindi in modo completamente anelastico; possiamo pertanto scrivere

$$m_1a_1t+m_2a_2t=(m_1+m_2)v$$

da cui si ottiene $v=2.57\ \frac{\mathrm{m}}{\mathrm{s}}$.

2. La variazione di energia cinetica durante l’urto è data da

$$\Delta E_k=E_{k,\mathrm{fin}}-E_{k,\mathrm{in}}=\frac{1}{2}(m_1+m_2)v^2-\frac{1}{2}\left\lbrack m_1(a_1t)^2+m_2(a_2t)^2\right\rbrack $$

Calcolando i due termini con valori non arrotondati si ottiene

$$E_{k,\mathrm{fin}}\approx 13{,}1\,\mathrm{J},\qquad E_{k,\mathrm{in}}\approx 14{,}8\,\mathrm{J},\qquad \Delta E_k\approx -1{,}70\,\mathrm{J}$$

3. La forza elastica esercitata dalla molla sul sistema è pari a

$$ (m_1+m_2)gh+E_{k,\mathrm{fin}}=\frac{1}{2}k\Delta x^2\;\rightarrow\;\Delta x=\sqrt{\frac{2}{k}(2mgh+E_{k,\mathrm{fin}})}=1.21\ \mathrm{m}$$

$$\rightarrow F_{\mathrm{el}}=-k\Delta x=-60.5\ \mathrm{N}$$
:::
:::

:::exercise{id="X2022-2" type="esame" chapter="9" difficulty="difficile"}
## Domanda
**Prova scritta del 23 giugno 2022**

Un cubo di massa $m = 1\,\mathrm{kg}$ scivola lungo un piano inclinato con coefficiente di attrito dinamico pari a $\mu = 0.33$. È collegato tramite una barretta rigida di massa trascurabile, parallela al piano, all’asse di un cilindro pieno di massa $M = 2\,\mathrm{kg}$ che rotola senza strisciare, come rappresentato in figura. Supponendo che la velocità iniziale sia nulla e che $\theta = 30^\circ$:

a) Calcolare la forza esercitata dalla barretta e il modulo della forza di attrito che agisce sul cilindro.

b) Calcolare la velocità del sistema dopo aver percorso un metro.

c) Calcolare il valore di $\theta$ per cui la forza esercitata dalla barretta si annulla.

Si supponga che il piano inclinato sia sufficientemente esteso da contenere il moto descritto. Per la rotazione del cilindro rispetto al suo asse centrale, si ricorda che $I_z = \frac{1}{2}MR^2$.

:::solution
**Soluzione**

Si assume che il cilindro si trovi a monte del cubo e che la barretta sia parallela al piano. In questa configurazione, un valore negativo della forza di trazione calcolata indica che la barretta è compressa. Si indica con $f_s$ il modulo dell’attrito statico sul cilindro, diretto verso monte. Le equazioni lungo il piano sono

$$
\begin{cases}
mg\sin\theta-\mu mg\cos\theta-T=ma,\\
Mg\sin\theta+T-f_s=Ma.
\end{cases}
$$

La condizione di rotolamento senza strisciamento dà $I\alpha=f_sR$ e $\alpha=a/R$, quindi

$$
f_s=\frac{Ma}{2}.
$$

Dalla seconda equazione segue $T=\frac{3}{2}Ma-Mg\sin\theta$. Sostituendo nella prima si ricava

$$
a=g\frac{m\sin\theta-\mu m\cos\theta+M\sin\theta}{\frac{3}{2}M+m}=2.977\,\mathrm{m/s^2}.
$$

L’attrito sul cilindro vale

$$
f_s=\frac{Ma}{2}=2.977\,\mathrm{N}.
$$

La forza con segno calcolata dalla convenzione di trazione è

$$
T=M\left(\frac{3}{2}a-g\sin\theta\right)=-0.879\,\mathrm{N}.
$$

Il segno negativo indica che la barretta esercita una forza di $0.879\,\mathrm{N}$ in compressione, sotto l’ipotesi che il cilindro sia a monte del cubo.

**b)**

Per un moto con accelerazione costante e velocità iniziale nulla, dopo uno spostamento $x$ la velocità è $v=\sqrt{2ax}$. Per $x=1\,\mathrm{m}$ si ottiene

$$
v=\sqrt{2\cdot2.977\cdot1}=2.44\,\mathrm{m/s}.
$$

**c)**

Per la forza della barretta nulla, $T=0$. Le equazioni del sistema diventano

$$
\begin{cases}
Mg\sin\theta=\frac{3}{2}Ma,\\
mg\sin\theta-\mu mg\cos\theta=ma.
\end{cases}
$$

Uguagliando le espressioni di $a$ e usando $M=2m$ si ha

$$
\frac{2}{3}g\sin\theta=g\sin\theta-\mu g\cos\theta,
$$

quindi $\tan\theta=3\mu$. Pertanto,

$$
\theta=\arctan(3\cdot0.33)=44.7^\circ.
$$
:::
:::

:::exercise{id="X2022-3" type="esame" chapter="3" difficulty="difficile"}
## Domanda
**Prova scritta del 11 luglio 2022**

**Esercizio 2A1**

Un punto materiale di massa $m_1=0.1\,\text{kg}$ si muove lungo una guida scabra formata da un tratto di lunghezza $x_1=1.15\,\text{m}$, inclinato di un angolo $\theta=60^\circ$ rispetto all’orizzontale, e da un tratto orizzontale lungo $x_2=0.45\,\text{m}$. Il coefficiente di attrito dinamico fra il corpo e la guida è $\mu_d=0.6$. All’istante $t=0$ il punto si trova in $A$ e possiede una velocità $v_0=3\,\text{m/s}$ diretta lungo la guida. Al termine del tratto orizzontale della guida il punto materiale urta perpendicolarmente un estremo di un’asta omogenea di massa $m_{\text{asta}}=1.4\,\text{kg}$ e lunghezza $d=0.5\,\text{m}$. L’asta può ruotare senza attrito nel piano orizzontale intorno a un asse verticale passante per il suo centro. Il momento di inerzia dell’asta rispetto al suo centro di massa è $I_a=\frac{1}{12}m_{\text{asta}}d^2$. Al momento dell’urto, che è completamente anelastico, l’asta ruota in senso orario con velocità angolare $\omega=3\,\text{rad/s}$ ed è ortogonale alla traiettoria del punto. La particella si muove verso l’estremo dell’asta in direzione $+x$. Calcolare:

1. La velocità della massa $m_1$ al termine del tratto orizzontale della guida, un istante prima dell’urto con l’asta.
2. La velocità angolare del sistema formato dalla particella e dall’asta dopo l’urto.
3. Il modulo, la direzione e il verso dell’impulso ricevuto dall’asse di rotazione dell’asta durante l’urto.

:::solution
1. Il lavoro dell’attrito lungo i due tratti della guida vale $-\mu_d m_1 g(x_1\cos\theta+x_2)$. Il bilancio dell’energia meccanica dà

$$\frac{1}{2}m_1v_0^2+m_1gx_1\sin\theta-\mu_d m_1g(x_1\cos\theta+x_2)=\frac{1}{2}m_1v_1^2.$$

Quindi

$$v_1=\sqrt{v_0^2+2g\left\lbrack x_1\sin\theta-\mu_d(x_1\cos\theta+x_2)\right\rbrack }=4.06\,\text{m/s}.$$

2. Si sceglie positivo il verso antiorario, cioè il verso del momento angolare finale. Rispetto al centro dell’asta, il momento angolare iniziale dell’asta è $-I_a\omega$; quello della particella è $m_1v_1d/2$. Dopo l’urto, asta e particella ruotano insieme, con momento d’inerzia $I_a+m_1d^2/4$. La conservazione del momento angolare si scrive

$$I_a\omega-m_1v_1\frac{d}{2}=-\left(I_a+m_1\frac{d^2}{4}\right)\omega',$$

con $I_a=m_{\text{asta}}d^2/12$. Sostituendo i valori si ottiene

$$\omega'=0.394\,\text{rad/s},$$

in senso antiorario.

3. Subito prima dell’urto la quantità di moto della particella è $p_i=m_1v_1=0.406\,\text{kg\,m/s}$ lungo $+x$. Subito dopo, la particella ruota con l’asta e la sua velocità è diretta lungo $+x$, perciò $p_f=m_1\omega'd/2=0.00985\,\text{kg\,m/s}$ lungo $+x$. L’impulso ricevuto dall’asse è opposto alla variazione della quantità di moto della particella:

$$J_{\text{asse}}=-(p_f-p_i)=0.396\,\text{N\,s}.$$

È diretto lungo la guida, nel verso $+x$, cioè nel verso del moto iniziale della particella.
:::
:::

:::exercise{id="X2022-4" type="esame" chapter="7" difficulty="medio"}
## Domanda
**Prova scritta del 11 luglio 2022**

**Esercizio 1A**

Un proiettile di massa $m = 0.15\,\text{kg}$ si muove orizzontalmente con velocità $v_0$ e colpisce un corpo puntiforme di massa $M = 0.3\,\text{kg}$ inizialmente fermo, appeso a un perno orizzontale per mezzo di un filo ideale di lunghezza $l = 1\,\text{m}$. Dopo l’urto il proiettile fuoriesce con velocità $\vec{v}_2 = \vec{v}_0/2$ dal corpo puntiforme.

**a)** Ricavare, in funzione della velocità $v_0$, l’espressione della velocità $v_1$ che il corpo appeso assume subito dopo l’urto.

**b)** Calcolare il rapporto tra l’energia totale dei due corpi dopo l’urto e quella prima dell’urto in un sistema di riferimento solidale al palo.

**c)** Calcolare il minimo valore $v_{0,\min}$ della velocità del proiettile tale per cui il corpo riesca a fare un giro completo intorno al perno mantenendo il filo sempre in tensione.

**d)** Utilizzando la velocità iniziale determinata al punto precedente, calcolare il modulo della tensione $T$ del filo quando esso si trova inclinato di $45^\circ$ rispetto alla verticale.

:::solution
**Esercizio 1A — Soluzione**

a) Per la conservazione della quantità di moto durante l’urto:

$$mv_0 = Mv_1 + \frac{mv_0}{2}$$

$$v_1 = \frac{mv_0}{2M} = \frac{v_0}{4}$$

b) Il rapporto tra l’energia cinetica finale e quella iniziale è

$$\frac{E_{Kf}}{E_{Ki}} = \frac{\frac{1}{2}m(v_0/2)^2 + \frac{1}{2}Mv_1^2}{\frac{1}{2}mv_0^2} = \frac{m/4 + M/16}{m} = \frac{1}{4} + \frac{1}{8} = \frac{3}{8}$$

c) Sia $T$ la tensione del filo, $F_c$ la forza centripeta e $v_2$ la velocità alla sommità della traiettoria circolare. Per compiere un giro completo il filo deve restare in tensione, dunque $T \ge 0$. Al caso limite, alla sommità della traiettoria $T = 0$ e $v_2^2 = gl$. Dalla conservazione dell’energia meccanica tra il punto più basso e quello più alto:

$$\frac{1}{2}Mv_1^2 = \frac{1}{2}Mv_2^2 + 2Mgl$$

quindi $v_1^2 = 5gl$ e $v_{1,\min} = \sqrt{5gl}$. Poiché $v_1 = v_0/4$,

$$v_{0,\min} = 4\sqrt{5gl} = 4\sqrt{49} = 28\,\text{m/s}$$

d) La tensione quando il filo forma un angolo $\theta$ rispetto alla verticale è

$$T = M\left(\frac{v(\theta)^2}{l} + g\cos\theta\right)$$

Dalla conservazione dell’energia meccanica tra la posizione iniziale, con il filo verticale, e la posizione inclinata di $\theta$:

$$\frac{1}{2}Mv_1^2 = \frac{1}{2}Mv(\theta)^2 + Mgl(1-\cos\theta)$$

$$v(\theta)^2 = v_1^2 - 2gl(1-\cos\theta)$$

Usando $v_1 = v_0/4$ e $\theta = 45^\circ$:

$$T(45^\circ)=M\left(\frac{v_0^2}{16l}-2g(1-\cos45^\circ)+g\cos45^\circ\right)=15\,\text{N}$$
:::
:::

:::exercise{id="X2022-5" type="esame" chapter="7" difficulty="difficile"}
## Domanda
**Prova scritta del 11 luglio 2022**

**Esercizio 2A**

Un disco omogeneo di massa $m = 10$ kg e raggio $R = 50$ cm, inizialmente fermo su un piano orizzontale liscio, ha momento d’inerzia rispetto a un asse perpendicolare al disco e passante per il suo centro di massa pari a $I_{CM} = \frac{1}{2}mR^2$. Due corpi puntiformi di masse $m_1 = 5$ kg e $m_2 = 1$ kg si muovono nel piano orizzontale con velocità di modulo rispettivamente $v_1 = 2$ m/s e $v_2 = 4$ m/s in direzioni parallele e versi opposti. Entrambi urtano contemporaneamente il disco, in modo totalmente anelastico, e vi rimangono attaccati. Le loro traiettorie sono tangenti al disco e le rette delle traiettorie passano a distanza $R$ dal centro, sui lati opposti, così che i punti d’urto sono diametralmente opposti.

1. Supponendo il disco libero di muoversi sul piano, calcolare la velocità del centro di massa e la velocità angolare del sistema dopo l’urto.
2. Nel caso in cui invece il disco sia vincolato a ruotare intorno a un asse passante per il suo centro e perpendicolare al piano, calcolare la velocità angolare del sistema dopo l’urto.
3. Nel caso in cui nell’asse di rotazione vincolato sia presente un momento frenante costante $M_f = 0.2$ N·m, calcolare il numero $n$ di giri percorsi dal disco con attaccati i due corpi puntiformi prima di fermarsi.

:::solution
**Esercizio 2A — Soluzione**

a) Per trovare la velocità del centro di massa applico la conservazione della quantità di moto, prima e dopo l’urto.

$$p_{in}=p_{fin}$$

$$m_1v_1-m_2v_2=(m_1+m_2+m)v_{CM}$$

$$v_{CM}=\frac{m_1v_1-m_2v_2}{m_1+m_2+m}=0.375\ \text{m/s}$$

Per trovare la velocità angolare rispetto al centro di massa calcolo prima la posizione del centro di massa rispetto al centro del disco, poi i bracci dei corpi puntiformi rispetto al centro di massa. Infine applico la conservazione del momento angolare rispetto al centro di massa.

$$x_{CM}=\frac{m_1R-m_2R}{m_1+m_2+m}=0.125\ \text{m}$$

$$R_1=R-x_{CM}=0.375\ \text{m}$$

$$R_2=R+x_{CM}=0.625\ \text{m}$$

$$L_{in}=L_{fin}$$

$$m_1v_1R_1+m_2v_2R_2=\left(m_1R_1^2+m_2R_2^2+\frac{1}{2}mR^2+mx_{CM}^2\right)\omega$$

$$\omega=2.5\ \text{rad/s}$$

b) Per trovare la velocità angolare attorno all’asse vincolato applico la conservazione del momento angolare rispetto al vincolo.

$$L_{in}=L_{fin}$$

$$m_1v_1R+m_2v_2R=\left(m_1R^2+m_2R^2+\frac{1}{2}mR^2\right)\omega$$

$$I_{tot}=m_1R^2+m_2R^2+\frac{1}{2}mR^2=2.75\ \text{kg·m}^2$$

$$\omega=\frac{m_1v_1R+m_2v_2R}{I_{tot}}=\frac{28}{11}\ \text{rad/s}$$

c) Il lavoro del momento frenante è uguale alla variazione dell’energia cinetica di rotazione.

$$\Delta E_m=W_{nc}$$

$$0-\frac{1}{2}I_{tot}\omega^2=-M_f\vartheta$$

$$\vartheta=\frac{I_{tot}\omega^2}{2M_f}=\frac{490}{11}\ \text{rad}$$

$$n=\frac{\vartheta}{2\pi}=\frac{245}{11\pi}\approx 7.09\ \text{giri}$$
:::
:::

:::exercise{id="X2022-6" type="esame" chapter="13" difficulty="difficile"}
## Domanda
**Prova scritta del 11 luglio 2022**

**Esercizio 3A1**

Una quantità pari a $n = 2$ moli di gas perfetto monoatomico ($c_V=3R/2$, $R = 8\ \text{J mol}^{-1}\text{K}^{-1}$), che si trova inizialmente nello stato di equilibrio termodinamico A in cui è alla pressione nota $p_A$ ed occupa un volume noto $V_A$, compie una trasformazione termodinamica reversibile durante la quale il prodotto $pV^2$ si mantiene costante. Sapendo che il rapporto tra le temperature finale e iniziale è $T_B/T_A = \alpha > 1$:

a) Disegnare uno schizzo qualitativo della trasformazione nel piano $(p,V)$ e determinare l'espressione delle variabili termodinamiche $p_B$, $V_B$, $T_B$ in funzione delle quantità note $V_A$, $p_A$, $n$, $\alpha$ e della costante dei gas perfetti $R$.

b) Dopo aver ricavato la pressione $p$ in funzione del volume, calcolare il lavoro e il calore scambiato (specificando se assorbito o ceduto) in funzione di $V_A$, $p_A$, $\alpha$ e della costante dei gas perfetti $R$.

c) Considerando $\alpha = 2$, calcolare il valore della variazione di entropia del gas durante la trasformazione.

:::solution
**Esercizio 3A1 — Soluzione**

**a)** Dalle relazioni date nel testo:

$$
p_B V_B^2 = p_A V_A^2, \qquad T_B = \alpha T_A \quad (\alpha > 1).
$$

Usando l'equazione di stato dei gas perfetti si ottiene

$$
p_B V_B = \alpha p_A V_A.
$$

Dividendo membro a membro la seconda equazione per la prima si ricava $V_B = \frac{V_A}{\alpha}$; sostituendo in una delle relazioni precedenti si ottiene $p_B = \alpha^2 p_A$. Inoltre, $T_A = \frac{p_A V_A}{nR}$ e $T_B = \frac{\alpha p_A V_A}{nR}$.

Nel piano $(p,V)$ la trasformazione segue la curva decrescente

$$
p(V) = \frac{p_A V_A^2}{V^2},
$$

con $p_B > p_A$ e $V_B < V_A$. Gli stati sono $A = \left(p_A, V_A, \frac{p_A V_A}{nR}\right)$ e $B = \left(\alpha^2 p_A, \frac{V_A}{\alpha}, \frac{\alpha p_A V_A}{nR}\right)$, dove le coordinate sono pressione, volume e temperatura.

**b)** Dal primo principio della termodinamica, $Q_{AB} = L_{AB} + \Delta U_{AB}$. La variazione di energia interna è

$$
\Delta U_{AB} = n c_V (T_B - T_A) = \frac{c_V}{R}(\alpha - 1)p_A V_A = \frac{3}{2}(\alpha - 1)p_A V_A.
$$

Il lavoro è

$$
L_{AB} = \int_{V_A}^{V_B} p(V)\,dV = \int_{V_A}^{V_B} \frac{p_A V_A^2}{V^2}\,dV = p_A V_A^2\left(\frac{1}{V_A} - \frac{1}{V_B}\right) = (1-\alpha)p_A V_A.
$$

Quindi

$$
Q_{AB} = L_{AB} + \Delta U_{AB} = \frac{\alpha - 1}{2}p_A V_A.
$$

Poiché $\alpha > 1$, il lavoro è negativo e viene compiuto sul gas; il calore è positivo, quindi è assorbito dal gas.

**c)** Per $\alpha = 2$, la variazione di entropia è

$$
\Delta S_{AB} = n c_V \log\left(\frac{T_B}{T_A}\right) + nR\log\left(\frac{V_B}{V_A}\right) = n(c_V-R)\log(\alpha) = \frac{nR}{2}\log 2 \approx 5{,}5\ \text{J K}^{-1}.
$$
:::
:::

:::exercise{id="X2022-7" type="esame" chapter="14" difficulty="difficile"}
## Domanda
**Prova scritta del 11 luglio 2022**

**Esercizio 3**

Una mole di gas perfetto biatomico descrive il seguente ciclo termico:

- un’espansione isoterma reversibile AB alla temperatura $T_1 = 500$ K;
- un’espansione irreversibile BC, durante la quale il gas cede la quantità di calore $Q_{BC} = -750$ J a una sorgente a temperatura $T_3 = 500$ K;
- una compressione isoterma reversibile CD alla temperatura $T_2 = 200$ K;
- una compressione adiabatica reversibile DA.

Sono noti i rapporti $V_B/V_A = 2$ e $V_C/V_D = 2.3$.

1. Rappresentare graficamente in modo qualitativo il ciclo termodinamico. Calcolare il rendimento del ciclo e confrontarlo con il massimo rendimento ottenibile lavorando tra le sorgenti a temperature $T_1$ e $T_2$.
2. Calcolare la variazione di entropia del gas in ciascuna delle quattro trasformazioni.
3. Calcolare le variazioni di entropia delle tre sorgenti alle temperature $T_1$, $T_2$ e $T_3$.

Per il gas perfetto biatomico valgono $c_V = \frac{5}{2}R$, $c_p = \frac{7}{2}R$, $\gamma = \frac{7}{5}$ e $R = 8.31$ J mol$^{-1}$ K$^{-1}$.

:::solution
**1.**

Nel piano $p$–$V$, il tratto AB è un’espansione lungo l’isoterma a $T_1 = 500$ K; il tratto CD è una compressione lungo l’isoterma a $T_2 = 200$ K; il tratto DA è una compressione adiabatica reversibile. Il tratto BC è un’espansione irreversibile, rappresentata qualitativamente come una curva di raccordo, il cui andamento non è determinato dai dati. Lo schema qualitativo colloca il volume crescente verso destra e la pressione crescente verso l’alto.

Il rendimento $\eta$ del ciclo è definito da

$$
\eta = \frac{W}{Q_{ass}}
$$

Il lavoro $W$ è dato dal contributo delle quattro trasformazioni del ciclo:

$$
W = W_{AB} + W_{BC} + W_{CD} + W_{DA}
$$

$$
W_{AB} = nRT_1 \ln\left(\frac{V_B}{V_A}\right) = 2880\ \text{J}
$$

$$
\Delta U_{BC} = nc_V(T_2 - T_1) = Q_{BC} - W_{BC}
$$

$$
W_{BC} = Q_{BC} - nc_V(T_2 - T_1) = 5482\ \text{J}
$$

$$
W_{CD} = nRT_2 \ln\left(\frac{V_D}{V_C}\right) = -1384\ \text{J}
$$

$$
W_{DA} = -\Delta U_{DA} = -nc_V(T_1 - T_2) = -6232\ \text{J}
$$

Il calore viene assorbito durante la trasformazione AB:

$$
Q_{ass} = Q_{AB} = W_{AB}
$$

Il rendimento è

$$
\eta = 0.26
$$

Il rendimento massimo $\eta_{\max}$ è quello del ciclo di Carnot che opera tra le temperature $T_1$ e $T_2$:

$$
\eta_{\max} = 1 - \frac{T_2}{T_1} = 0.6
$$

**2.**

La variazione di entropia del gas sull’intero ciclo è nulla:

$$
\Delta S_{ciclo} = \Delta S_{AB} + \Delta S_{BC} + \Delta S_{CD} + \Delta S_{DA} = 0
$$

Per le trasformazioni reversibili si calcola direttamente la variazione di entropia del gas:

$$
\Delta S_{AB} = nR \ln\left(\frac{V_B}{V_A}\right) = 5.76\ \text{J K}^{-1}
$$

$$
\Delta S_{CD} = nR \ln\left(\frac{V_D}{V_C}\right) = -6.92\ \text{J K}^{-1}
$$

$$
\Delta S_{DA} = 0
$$

La variazione di entropia del gas lungo BC si ricava per differenza:

$$
\Delta S_{BC} = -(\Delta S_{AB} + \Delta S_{CD}) = 1.16\ \text{J K}^{-1}
$$

**3.**

Le variazioni di entropia delle sorgenti si calcolano tenendo conto del segno degli scambi di calore:

$$
\Delta S_1 = -\frac{Q_{AB}}{T_1} = -5.76\ \text{J K}^{-1}
$$

$$
\Delta S_2 = -\frac{Q_{CD}}{T_2} = 6.92\ \text{J K}^{-1}
$$

$$
\Delta S_3 = -\frac{Q_{BC}}{T_3} = 1.5\ \text{J K}^{-1}
$$
:::
:::

:::exercise{id="X2026-1" type="esame" chapter="4" difficulty="medio"}
## Domanda
**Prova scritta del 25 giugno 2026**

**Esercizio 1A**

Un corpo di massa $m = 3.0\ \text{kg}$ è mantenuto fermo su una pista circolare liscia ad una quota $h$ pari a $0.8\ \text{m}$ rispetto ad un piano orizzontale (posizione $O$ della figura). Il piano orizzontale è liscio tranne nel tratto scabro tra $A$ e $B$ che ha lunghezza $0.6\ \text{m}$. Al termine del piano orizzontale è posta una molla con rigidezza $k = 2000\ \text{N/m}$. Ad un certo istante il corpo viene lasciato libero di muoversi e giungerà al termine del piano orizzontale comprimendo la molla di $0.1\ \text{m}$.

Determinare:

- La velocità del corpo quando questo si trova in $B$.
- Il coefficiente di attrito tra il corpo e la superficie scabra del piano nel tratto $AB$.
- Dopo essere stato spinto dalla molla, a quale distanza da $B$ si fermerà il corpo sul piano orizzontale.

:::solution
**Velocità in $B$**

Dal teorema della conservazione dell’energia meccanica si ha:

$$E_{kA} = mgh = 3 \cdot 9.81 \cdot 0.8 = 23.54\ \text{J}$$

Dal teorema energia-lavoro:

$$E_{kB} = E_{kA} + W_{AB} = mgh + W_{AB} = E_{p,el} = \frac{1}{2}kx^2 = 10\ \text{J}$$

$$E_{kB} = \frac{1}{2}mV_B^2$$

Da cui:

$$V_B = \sqrt{\frac{2E_{p,el}}{m}} = 2.58\ \text{m/s}$$

**Calcolo del coefficiente d’attrito**

Sempre dal teorema energia-lavoro si ha:

$$W_{nc} = W_{AB} = -(E_{p,o} - E_{p,el})$$

Dunque il lavoro dell’attrito è $W_{AB} = 10 - 23.54 = -13.54\ \text{J}$.

Poiché il lavoro della forza di attrito radente può essere scritto come:

$$W_{AB} = -\mu mgL_{AB} = -13.54\ \text{J}$$

quindi:

$$\mu = \frac{-W_{AB}}{mgL_{AB}} = 0.77$$

**Distanza di arresto**

Al ritorno, sul tratto scabro il lavoro dell’attrito riduce l’energia cinetica fino all’arresto:

$$\Delta K = W_{\text{attrito}} = -\mu mgx$$

ossia:

$$0 - 10 = -\mu mgx$$

Da cui:

$$x = \frac{10}{\mu mg} = 0.44\ \text{m}$$
:::
:::

:::exercise{id="X2026-2" type="esame" chapter="9" difficulty="difficile"}
## Domanda
**Prova scritta del 25 giugno 2026**

Su due piani inclinati simmetrici di angolo $\theta = 25^\circ$ si trovano due corpi rigidi collegati da un filo ideale inestensibile fissato al loro centro di massa e che passa su una carrucola non ideale fissata al vertice e composta da un disco omogeneo di massa $M_p = 2.2\ \text{kg}$ e raggio $r = 0.08\ \text{m}$. Sul piano di sinistra si trova un cilindro pieno omogeneo di massa $m_1 = 5.0\ \text{kg}$ e raggio $R_1 = 0.18\ \text{m}$. Sul piano di destra si trova una sfera piena omogenea di massa $m_2 = 2.5\ \text{kg}$ e raggio $R_2 = 0.12\ \text{m}$. Il cilindro è inoltre collegato a una molla ideale con asse parallelo al piano inclinato. L’altro estremo della molla è fissato a un punto immobile. I due corpi rotolano senza strisciare sui rispettivi piani.

All’istante iniziale il sistema è fermo e la molla si trova nella sua posizione di riposo. Viene poi lasciato libero di muoversi.

1. Determinare il modulo dell’accelerazione iniziale del sistema e il verso in cui si muove il sistema.
2. Determinare il valore minimo del coefficiente di attrito statico $\mu_{s,\min}$ affinché entrambi i corpi rotolino senza strisciare all’istante iniziale.
3. Determinare la costante elastica della molla, se la massima deformazione che raggiunge durante il moto è pari a $x_{\max} = 0.26\ \text{m}$.

Momenti di inerzia: $I_1 = \frac{1}{2}m_1R_1^2$, $I_2 = \frac{2}{5}m_2R_2^2$, $I_p = \frac{1}{2}M_pr^2$.

:::solution
**a)**

All’istante iniziale la molla è a riposo, quindi la sua forza è nulla:

$$F_{\mathrm{el}} = 0$$

Indichiamo con $a$ l’accelerazione iniziale e la consideriamo verso destra, assumendo che il cilindro salga lungo il piano sinistro e la sfera scenda lungo il piano destro. Chiamiamo $T_1$ la tensione lato cilindro e $T_2$ la tensione lato sfera.

Per muoversi di puro rotolamento, la sfera e il cilindro subiranno una forza d’attrito statico $f_s$ con il piano inclinato diretta in direzione opposta allo spostamento traslazionale.

Scriviamo ora le equazioni delle forze e dei momenti per la sfera, il cilindro e la carrucola:

$$\begin{aligned}
T_1 - m_1 g \sin\theta - f_{s1} &= m_1 a \\
f_{s1} R_1 &= I_1 \alpha_1 = I_1 \frac{a}{R_1} \\
m_2 g \sin\theta - T_2 - f_{s2} &= m_2 a \\
f_{s2} R_2 &= I_2 \alpha_2 = I_2 \frac{a}{R_2} \\
(T_2 - T_1)r &= I_c \alpha_p = I_c \frac{a}{r}
\end{aligned}$$

$$\begin{aligned}
f_{s1} &= \frac{1}{2}m_1 a \\
f_{s2} &= \frac{2}{5}m_2 a \\
T_1 &= m_1 g \sin\theta + \frac{3}{2}m_1 a \\
T_2 &= m_2 g \sin\theta - \frac{7}{5}m_2 a \\
m_2 g \sin\theta - \frac{7}{5}m_2 a - m_1 g \sin\theta - \frac{3}{2}m_1 a &= \frac{1}{2}M_p a
\end{aligned}$$

$$a = \frac{m_2-m_1}{\frac{7}{5}m_2 + \frac{3}{2}m_1 + \frac{1}{2}M_p}g\sin\theta = -0.86\ \text{m/s}^2$$

Essendo l’accelerazione negativa, il verso che abbiamo scelto inizialmente era sbagliato e quindi il cilindro scende e la sfera sale. Il modulo dell’accelerazione iniziale è $0.86\ \text{m/s}^2$.

**b)**

Per avere puro rotolamento, il modulo dell’attrito statico richiesto su ciascun corpo deve essere non superiore all’attrito statico massimo disponibile:

$$|f_i| \leq \mu_s N_i$$

Quindi, per ciascun corpo:

$$\mu_s \geq \frac{|f_i|}{N_i}$$

Il valore minimo richiesto per tutto il sistema sarà dunque il maggiore tra i due:

$$\mu_{s,\min} = \max\left(\frac{|f_1|}{N_1}, \frac{|f_2|}{N_2}\right)$$

Riprendendo i calcoli fatti precedentemente, con $a = -0.86\ \text{m/s}^2$:

$$\mu_{s,1} = \frac{|f_{s1}|}{m_1g\cos\theta} = \frac{\frac{1}{2}m_1|a|}{m_1g\cos\theta} = \frac{|a|}{2g\cos\theta} = 0.048$$

$$\mu_{s,2} = \frac{|f_{s2}|}{m_2g\cos\theta} = \frac{\frac{2}{5}m_2|a|}{m_2g\cos\theta} = \frac{2|a|}{5g\cos\theta} = 0.039$$

Per avere puro rotolamento per entrambi i corpi devo considerare il valore massimo e quindi:

$$\mu_{s,\min} = \max(\mu_{s,1}, \mu_{s,2}) = 0.048$$

**c)**

Il sistema parte da fermo e arriva di nuovo a velocità nulla nell’istante di massima deformazione della molla. Essendo il sistema conservativo (le forze di attrito statico non compiono lavoro), l’energia meccanica si conserva.

Quindi tra stato iniziale e stato finale vale:

$$\Delta E_m = \Delta E_{p,g} + \Delta E_{p,e} = 0$$

L’energia cinetica è nulla sia nello stato iniziale sia in quello finale; variano invece l’energia potenziale gravitazionale e quella elastica. Considerando che il movimento è verso sinistra, la molla si deformerà di $x_{\max}$. Il cilindro scenderà di $x_{\max}$ lungo il piano, quindi scenderà in quota di $x_{\max}\sin\theta$, e la sfera salirà di $x_{\max}$ lungo il piano, quindi salirà in quota di $x_{\max}\sin\theta$.

La variazione di energia potenziale gravitazionale totale è:

$$\Delta E_{p,g} = -m_1 g x_{\max}\sin\theta + m_2 g x_{\max}\sin\theta = (m_2-m_1)g x_{\max}\sin\theta$$

L’energia elastica finale è:

$$\Delta E_{p,e} = \frac{1}{2}k x_{\max}^2$$

Perciò:

$$(m_1-m_2)g x_{\max}\sin\theta = \frac{1}{2}k x_{\max}^2$$

$$k = \frac{2(m_1-m_2)g\sin\theta}{x_{\max}} = 79.73\ \text{N/m}$$
:::
:::

:::exercise{id="X2026-3" type="esame" chapter="9" difficulty="difficile"}
## Domanda
**Prova scritta del 25 giugno 2026**

Su due piani inclinati simmetrici di angolo $\theta = 30^\circ$ si trovano due corpi rigidi collegati da un filo ideale inestensibile fissato al loro centro di massa e che passa su una carrucola non ideale fissata al vertice e composta da un disco omogeneo di massa $M_p = 1.5\,\text{kg}$ e raggio $r = 0.10\,\text{m}$. Sul piano di sinistra si trova un cilindro pieno omogeneo di massa $m_1 = 2.0\,\text{kg}$ e raggio $R_1 = 0.2\,\text{m}$. Sul piano di destra si trova una sfera piena omogenea di massa $m_2 = 4\,\text{kg}$ e raggio $R_2 = 0.1\,\text{m}$. Il cilindro è inoltre collegato a una molla ideale di costante elastica $k = 50\,\text{N/m}$ disposta lungo il piano di sinistra. I due corpi rotolano senza strisciare sui rispettivi piani. Si consideri il filo sempre parallelo al piano inclinato. All’istante iniziale il sistema è fermo e la molla si trova nella sua posizione di riposo. Viene poi lasciato libero di muoversi.

a) Determinare il modulo dell’accelerazione iniziale del sistema e il verso in cui si muove il sistema.

b) Determinare il valore minimo del coefficiente di attrito statico $\mu_s$ affinché entrambi i corpi rotolino senza strisciare all’istante iniziale, supponendo che i due piani inclinati abbiano lo stesso coefficiente d’attrito.

c) Determinare la massima deformazione della molla.

Momenti di inerzia: $I_1 = \frac{1}{2}m_1R_1^2$, $I_2 = \frac{2}{5}m_2R_2^2$, $I_p = \frac{1}{2}M_pr^2$.

[figure: Due piani inclinati simmetrici con un cilindro collegato a una molla sul piano sinistro e una sfera sul piano destro; i corpi sono collegati da un filo che passa su una carrucola al vertice.]

:::solution
**a)**

All’istante iniziale la molla è a riposo, quindi la sua forza è nulla:

$$F_{\mathrm{el}} = 0$$

Indichiamo con $a$ l’accelerazione iniziale e la consideriamo verso destra, assumendo che il cilindro salga lungo il piano sinistro e la sfera scenda lungo il piano destro. Chiamiamo $T_1$ la tensione lato cilindro e $T_2$ la tensione lato sfera.

Per muoversi di puro rotolamento, la sfera e il cilindro subiranno una forza d’attrito statico $f_s$ con il piano inclinato, diretta in direzione opposta allo spostamento traslazionale. Scriviamo le equazioni delle forze e dei momenti per la sfera, il cilindro e la carrucola:

$$\left\{
\begin{aligned}
T_1 - m_1 g \sin\theta - f_{s1} &= m_1 a \\
f_{s1}R_1 &= I_1\alpha_1 = I_1\frac{a}{R_1} \\
m_2 g\sin\theta - T_2 - f_{s2} &= m_2 a \\
f_{s2}R_2 &= I_2\alpha_2 = I_2\frac{a}{R_2} \\
(T_2-T_1)r &= I_p\alpha_p = I_p\frac{a}{r}
\end{aligned}
\right.$$ 

Da cui si ricava:

$$\left\{
\begin{aligned}
f_{s1} &= \frac{1}{2}m_1a \\
f_{s2} &= \frac{2}{5}m_2a \\
T_1 &= m_1g\sin\theta + \frac{3}{2}m_1a \\
T_2 &= m_2g\sin\theta - \frac{7}{5}m_2a \\
m_2g\sin\theta - \frac{7}{5}m_2a - m_1g\sin\theta - \frac{3}{2}m_1a &= \frac{1}{2}M_pa
\end{aligned}
\right.$$ 

$$a = \frac{(m_2-m_1)}{\left(\frac{7}{5}m_2+\frac{3}{2}m_1+\frac{1}{2}M_p\right)}\,g\sin\theta = 1.05\,\text{m/s}^2$$

Essendo l’accelerazione positiva, il verso scelto inizialmente era corretto.

**b)**

Per avere puro rotolamento, l’attrito statico richiesto su ciascun corpo deve essere non superiore all’attrito statico massimo disponibile:

$$f_i \leq \mu_s N_i$$

Quindi, per ciascun corpo:

$$\mu_s \geq \frac{f_i}{N_i}$$

Il valore minimo richiesto per tutto il sistema sarà il maggiore tra i due:

$$\mu_{s,\min} = \max\left(\frac{f_1}{N_1}, \frac{f_2}{N_2}\right)$$

Riprendendo i calcoli fatti precedentemente:

$$\frac{1}{2}m_1a \leq \mu_s m_1g\cos\theta$$

$$\frac{2}{5}m_2a \leq \mu_s m_2g\cos\theta$$

Quindi i minimi coefficienti richiesti per il cilindro e la sfera sono:

$$\mu_{s,1} = \frac{a}{2g\cos\theta} = 0.062$$

$$\mu_{s,2} = \frac{2a}{5g\cos\theta} = 0.049$$

Per avere puro rotolamento per entrambi i corpi, si considera il valore massimo:

$$\mu_{s,\min} = \max(\mu_{s,1}, \mu_{s,2}) = 0.062$$

**c)**

Il sistema parte da fermo e arriva di nuovo a velocità nulla all’istante di massima estensione della molla. Essendo il sistema conservativo, poiché le forze di attrito statico non compiono lavoro, l’energia meccanica si conserva. Quindi, tra stato iniziale e stato finale, vale:

$$\Delta E_m = \Delta E_{p,g} + \Delta E_{p,e} = 0$$

L’energia cinetica è nulla sia nello stato iniziale sia in quello finale; variano invece l’energia potenziale gravitazionale e quella elastica. Considerando che il movimento è verso destra, la molla si allungherà di una quantità $x_{\max}$. Il cilindro salirà di $x_{\max}$ lungo il piano, quindi salirà in quota di $x_{\max}\sin\theta$, mentre la sfera scenderà di $x_{\max}$ lungo il piano, quindi scenderà in quota della stessa quantità. La variazione di energia potenziale gravitazionale totale è:

$$\Delta E_{p,g} = m_1g x_{\max}\sin\theta - m_2g x_{\max}\sin\theta = (m_1-m_2)g x_{\max}\sin\theta$$

L’energia elastica finale è:

$$\Delta E_{p,e} = \frac{1}{2}k x_{\max}^2$$

Perciò:

$$(m_1-m_2)g x_{\max}\sin\theta + \frac{1}{2}k x_{\max}^2 = 0$$

$$x_{\max} = \frac{2(m_2-m_1)g\sin\theta}{k} = 0.39\,\text{m}$$
:::
:::

:::exercise{id="X2026-4" type="esame" chapter="14" difficulty="difficile"}
## Domanda
**Prova scritta del 25 giugno 2026**

**Esercizio 3A**

Due moli di gas ideale monoatomico si trovano nello stato A $(V_A,\ T_A = 300\ \text{K})$. Con una compressione reversibile a contatto termico con una sorgente a temperatura $T_A$ il gas viene portato nello stato B $(V_B = 0.75 V_A)$. Mantenendo il volume costante il gas viene poi messo a contatto termico con una sorgente alla temperatura $T_C = 400\ \text{K}$ e si porta nello stato C. Di qui con una espansione adiabatica irreversibile raggiunge lo stato D $(T_D > T_A,\ V_D = V_A)$ e, messo a contatto termico con la sorgente $T_A$, ritorna a volume costante nello stato A. Il rendimento del ciclo è $\eta=0.04$.

a) Disegnare il ciclo sul piano di Clapeyron.

b) Calcolare la temperatura del gas nel punto D.

c) Calcolare la variazione di entropia del gas nella trasformazione CD.

d) Calcolare l’energia che diventa inutilizzabile in un ciclo.

:::solution
**a) Rappresentazione del ciclo sul piano $P$-$V$**

Gli stati hanno le seguenti coordinate:

- $A=(V_A,P_A)$.
- $B=(0.75V_A,4P_A/3)$.
- $C=(0.75V_A,16P_A/9)$.
- $D\approx(V_A,1.128P_A)$.

AB è una compressione isoterma reversibile, BC e DA sono trasformazioni isocore irreversibili. CD è un’espansione adiabatica irreversibile; poiché i dati non determinano una curva $P$-$V$ univoca, nel disegno si rappresenta solo come collegamento schematico tra C e D.

**b) Temperatura $T_D$**

Il calore assorbito nella trasformazione BC è

$$Q_{BC}=n c_V(T_C-T_B)=2\cdot\frac{3}{2}R\cdot(400-300)=3R\cdot100\approx2494\ \text{J}$$

Il lavoro del ciclo è

$$W=\eta Q_{BC}=0.04\cdot2494\approx100\ \text{J}$$

Il lavoro nella trasformazione AB è

$$W_{AB}=nRT\ln\left(\frac{V_B}{V_A}\right)=2\cdot8.314\cdot300\cdot\ln(0.75)\approx-1436\ \text{J}$$

Poiché $W=W_{AB}+W_{CD}$,

$$W_{CD}=W-W_{AB}=100-(-1436)=1536\ \text{J}$$

Per il primo principio applicato alla trasformazione adiabatica CD,

$$Q=0\quad\Longrightarrow\quad W_{CD}=n c_V(T_C-T_D)$$

$$1536=2\cdot\frac{3}{2}R(400-T_D)$$

$$T_D\approx338\ \text{K}$$

**c) Variazione di entropia nella trasformazione CD**

La variazione di entropia del sistema, che coincide con quella dell’universo in questa trasformazione, è

$$\Delta S_{\mathrm{sist},CD}=n c_V\ln\left(\frac{T_D}{T_C}\right)+nR\ln\left(\frac{V_D}{V_C}\right)$$

$$\Delta S=2\cdot\frac{3}{2}R\ln\left(\frac{338}{400}\right)+2R\ln\left(\frac{1}{0.75}\right)\approx0.60\ \text{J/K}$$

**d) Energia inutilizzabile**

$$Q_{BC}\approx2494\ \text{J},\qquad W\approx100\ \text{J},\qquad Q_{DA}=n c_V(T_A-T_D)\approx-959\ \text{J}$$

La variazione di entropia dell’ambiente per la sorgente calda nella trasformazione BC è

$$\Delta S_{\mathrm{amb},BC}=-\frac{Q_{BC}}{T_C}\approx-6.24\ \text{J/K}$$

La variazione di entropia del sistema nella trasformazione isocora BC è

$$\Delta S_{\mathrm{sist},BC}=n c_V\ln\left(\frac{T_C}{T_B}\right)\approx7.18\ \text{J/K}$$

La trasformazione AB è reversibile, quindi il contributo complessivo del gas e della sorgente alla variazione di entropia dell’universo in quel tratto è nullo.

La variazione di entropia dell’ambiente per la sorgente fredda nella trasformazione DA è

$$\Delta S_{\mathrm{amb},DA}=-\frac{Q_{DA}}{T_A}$$

La variazione di entropia del sistema nella trasformazione isocora DA è

$$\Delta S_{\mathrm{sist},DA}=n c_V\ln\left(\frac{T_A}{T_D}\right)\approx-3.01\ \text{J/K}$$

L’entropia dell’universo sul ciclo è

$$\Delta S_{\mathrm{tot}}=\Delta S_{\mathrm{univ,ciclo}}=\Delta S_{\mathrm{sist},BC}+\Delta S_{\mathrm{amb},BC}+\Delta S_{\mathrm{sist},CD}+\Delta S_{\mathrm{sist},DA}+\Delta S_{\mathrm{amb},DA}$$

$$\Delta S_{\mathrm{tot}}\approx1.746\ \text{J/K}$$

L’energia inutilizzabile è

$$E_{\mathrm{irr}}=T_A\Delta S_{\mathrm{tot}}=300\cdot1.746\approx524\ \text{J}$$
:::
:::

:::exercise{id="X2026-5" type="esame" chapter="14" difficulty="difficile"}
## Domanda
**Prova scritta del 25 giugno 2026**

**Esercizio 3**

Sei moli di gas ideale biatomico si trovano nello stato $A$ ($V_A$, $T_A = 300\,\mathrm{K}$). Con un’espansione reversibile a contatto termico con una sorgente a temperatura $T_A$, il gas viene portato nello stato $B$ ($V_B = 1.5 V_A$). Mantenendo il volume costante, il gas viene poi messo a contatto termico con una sorgente alla temperatura $T_C = 400\,\mathrm{K}$ e si porta nello stato $C$. Di qui, con una compressione adiabatica irreversibile, il gas raggiunge lo stato $D$ ($T_D > T_A$, $V_D = V_A$) e, messo a contatto termico con la sorgente $T_A$, ritorna a volume costante nello stato $A$. Il lavoro assorbito dalla macchina frigorifera a ogni ciclo è $W = -2800\,\mathrm{J}$.

a) Rappresentare il ciclo nel piano di Clapeyron, indicando le coordinate $P$ e $V$ dei punti $A$, $B$, $C$ e $D$. Per la trasformazione irreversibile $CD$, che non definisce un percorso di stati di equilibrio, indicare soltanto il collegamento da $C$ a $D$ con una freccia tratteggiata.

b) Calcolare la temperatura del gas nel punto $D$.

c) Calcolare la variazione di entropia dell’universo nella trasformazione $CD$.

d) Calcolare l’energia che diventa inutilizzabile in un ciclo, assumendo come temperatura di riferimento $T_0 = T_A = 300\,\mathrm{K}$.

:::solution
**a) Rappresentazione del ciclo**

Le coordinate dei punti nel piano $P$–$V$ sono

- $A = (V_A, nRT_A/V_A)$;
- $B = (1.5V_A, nRT_A/(1.5V_A))$;
- $C = (1.5V_A, nRT_C/(1.5V_A))$;
- $D = (V_A, nRT_D/V_A)$.

Tracciare $AB$ come isoterma reversibile, $BC$ e $DA$ come segmenti a volume costante, e collegare $C$ a $D$ con una freccia tratteggiata, senza attribuire al tratto una curva termodinamica definita.

**b) Temperatura $T_D$**

Il calore assorbito dalla sorgente fredda durante la trasformazione $AB$ è

$$Q_{AB} = nRT_A \ln\left(\frac{V_B}{V_A}\right) = 6R \cdot 300 \cdot \ln(1.5) = 6068\,\mathrm{J}.$$

Per il ciclo, $\Delta U_{\mathrm{ciclo}} = 0$ e $Q_{\mathrm{tot}} = W_{\mathrm{tot}}$. Inoltre,

$$Q_{BC} = n c_V (T_C - T_B) = 12471\,\mathrm{J},$$

$$Q_{DA} = n c_V (T_A - T_D) = 15R(300 - T_D).$$

Quindi

$$Q_{AB} + Q_{BC} + Q_{DA} = W_{\mathrm{tot}},$$

$$6068 + 12471 + 15R(300 - T_D) = -2800,$$

da cui

$$T_D = 471.1\,\mathrm{K}.$$

**c) Variazione di entropia dell’universo durante $CD$**

Poiché la trasformazione $CD$ è adiabatica, l’entropia dell’ambiente non varia. La variazione di entropia dell’universo coincide quindi con quella del sistema:

$$\Delta S_{\mathrm{universo},CD} = \Delta S_{\mathrm{sistema},CD} = n c_V \ln\left(\frac{T_D}{T_C}\right) + nR \ln\left(\frac{V_D}{V_C}\right).$$

$$\Delta S_{\mathrm{universo},CD} = 6\left(\frac{5}{2}R\right)\ln\left(\frac{471.1}{400}\right) + 6R\ln\left(\frac{1}{1.5}\right) = 0.18\,\mathrm{J/K}.$$

**d) Energia inutilizzabile**

Il calore scambiato durante $DA$ è

$$Q_{DA} = n c_V(T_A - T_D) = -21339\,\mathrm{J}.$$

La variazione di entropia dell’ambiente durante $BC$ è

$$\Delta S_{\mathrm{amb},BC} = -\frac{Q_{BC}}{T_C} = -\frac{12471}{400} \approx -31.18\,\mathrm{J/K}.$$

La variazione complessiva di entropia della sorgente a $300\,\mathrm{K}$ sull’intero ciclo, dovuta agli scambi di calore in $AB$ e $DA$, è

$$\Delta S_{\mathrm{amb},AB+DA} = -\frac{Q_{AB} + Q_{DA}}{T_A} = -\frac{6068 - 21339}{300} = 50.90\,\mathrm{J/K}.$$

Per la sola trasformazione $DA$, la variazione di entropia della sorgente a $300\,\mathrm{K}$ è

$$\Delta S_{\mathrm{amb},DA} = -\frac{Q_{DA}}{T_A} = -\frac{-21339}{300} = 71.13\,\mathrm{J/K}.$$

Sommando i contributi sull’intero ciclo, inclusa la variazione di entropia del gas che compie un ciclo completo e torna allo stato iniziale, si ottiene

$$\Delta S_{\mathrm{universo}} = 19.73\,\mathrm{J/K}.$$

L’energia inutilizzabile, definita rispetto alla temperatura di riferimento $T_0 = T_A = 300\,\mathrm{K}$, è

$$E_{\mathrm{in}} = T_0 \Delta S_{\mathrm{universo}} = 300 \cdot 19.73 \approx 5920\,\mathrm{J}.$$
:::
:::

:::exercise{id="X1" type="esame" chapter="1" difficulty="medio"}
## Domanda
**Esercizio in stile d'esame (generato)**

Siano assegnati i vettori $\mathbf{u}=(2,-1,2)$ e $\mathbf{v}=(1,2,-2)$.\na) Calcolare il vettore $\mathbf{r}=2\mathbf{u}-\mathbf{v}$ e il suo modulo.\nb) Determinare il versore parallelo e concorde con $\mathbf{r}$.\nc) Calcolare l’angolo compreso tra $\mathbf{u}$ e $\mathbf{v}$, esprimendolo in forma esatta e in radianti con tre cifre decimali.

:::solution
a) Si calcolano separatamente il doppio di $\mathbf{u}$ e la differenza componente per componente:
$\displaystyle \mathbf{r}=2(2,-1,2)-(1,2,-2)=(4,-2,4)-(1,2,-2)=(3,-4,6).$
Il modulo è
$\displaystyle |\mathbf{r}|=\sqrt{3^2+(-4)^2+6^2}=\sqrt{61}.$
b) Il versore parallelo e concorde con $\mathbf{r}$ si ottiene dividendo il vettore per il suo modulo:
$\displaystyle \widehat{\mathbf{r}}=\frac{\mathbf{r}}{|\mathbf{r}|}=\left(\frac{3}{\sqrt{61}},-\frac{4}{\sqrt{61}},\frac{6}{\sqrt{61}}\right).$
c) I moduli dei vettori assegnati sono
$\displaystyle |\mathbf{u}|=\sqrt{2^2+(-1)^2+2^2}=3,\qquad |\mathbf{v}|=\sqrt{1^2+2^2+(-2)^2}=3.$
Il prodotto scalare vale
$\displaystyle \mathbf{u}\cdot\mathbf{v}=2\cdot1+(-1)\cdot2+2\cdot(-2)=-4.$
Dalla relazione $\mathbf{u}\cdot\mathbf{v}=|\mathbf{u}||\mathbf{v}|\cos\theta$ segue
$\displaystyle \cos\theta=\frac{-4}{3\cdot3}=-\frac{4}{9},\qquad \theta=\arccos\left(-\frac{4}{9}\right)\approx 2.031\text{ rad}.$
Quindi $\mathbf{r}=(3,-4,6)$, $|\mathbf{r}|=\sqrt{61}$, $\widehat{\mathbf{r}}=\left(\frac{3}{\sqrt{61}},-\frac{4}{\sqrt{61}},\frac{6}{\sqrt{61}}\right)$ e l’angolo richiesto è $\arccos\left(-\frac{4}{9}\right)\approx2.031\text{ rad}$.
:::
:::

:::exercise{id="X2" type="esame" chapter="2" difficulty="medio"}
## Domanda
**Esercizio in stile d'esame (generato)**

La posizione di un punto che si muove lungo una retta è descritta, per $0\le t\le 4\,\mathrm{s}$, dalla legge oraria $x(t)=t^3-6t^2+9t$, con $x$ espresso in metri e $t$ in secondi.

- a) Determinare la velocità e l’accelerazione in funzione del tempo.
- b) Trovare gli istanti in cui il punto è istantaneamente fermo e indicare gli intervalli in cui si muove nei due versi della retta.
- c) Calcolare lo spostamento e la distanza percorsa nell’intervallo considerato.

:::solution
Dalla legge oraria, la velocità è la derivata della posizione rispetto al tempo {{formula:2.1}}. Quindi

$$v(t)=\frac{dx}{dt}=3t^2-12t+9=3(t-1)(t-3)\,\mathrm{m/s}.$$

L’accelerazione è la derivata della velocità {{formula:2.2}}:

$$a(t)=\frac{dv}{dt}=6t-12\,\mathrm{m/s^2}.$$

Il punto è fermo quando $v(t)=0$, cioè per $t=1\,\mathrm{s}$ e $t=3\,\mathrm{s}$. Il segno di $v(t)=3(t-1)(t-3)$ è positivo per $0\le t<1\,\mathrm{s}$ e per $3\,\mathrm{s}<t\le4\,\mathrm{s}$, mentre è negativo per $1\,\mathrm{s}<t<3\,\mathrm{s}$. Dunque il punto si muove nel verso positivo, poi in quello negativo, quindi torna a muoversi nel verso positivo.

Per calcolare lo spostamento, valutiamo la posizione agli estremi:

$$x(0)=0\,\mathrm{m},\qquad x(4)=4\,\mathrm{m}.$$

Lo spostamento è $\Delta x=x(4)-x(0)=4\,\mathrm{m}$. Inoltre, $x(1)=4\,\mathrm{m}$ e $x(3)=0\,\mathrm{m}$: la distanza percorsa è quindi $|x(1)-x(0)|+|x(3)-x(1)|+|x(4)-x(3)|=4+4+4=12\,\mathrm{m}$.

**Risultati:** $v(t)=3t^2-12t+9\,\mathrm{m/s}$, $a(t)=6t-12\,\mathrm{m/s^2}$; il punto è fermo a $1\,\mathrm{s}$ e $3\,\mathrm{s}$; lo spostamento è $4\,\mathrm{m}$ e la distanza percorsa è $12\,\mathrm{m}$.
:::
:::

:::exercise{id="X3" type="esame" chapter="2" difficulty="difficile"}
## Domanda
**Esercizio in stile d'esame (generato)**

Un punto si muove di moto armonico semplice con pulsazione $\omega=2\pi\,\mathrm{rad/s}$. All’istante iniziale si trova in $x(0)=0{,}06\,\mathrm{m}$ e ha velocità $v(0)=-0{,}08\pi\,\mathrm{m/s}$.

- a) Determinare l’ampiezza e la fase iniziale $\varphi$ nella legge $x(t)=A\cos(\omega t+\varphi)$, con $A>0$ e $0\le\varphi<2\pi$.
- b) Scrivere la legge oraria e calcolare il periodo e il modulo della velocità massima.
- c) Determinare il primo istante positivo in cui il punto passa per l’origine.

:::solution
Per la legge oraria del moto armonico semplice {{formula:2.14}}, la posizione iniziale soddisfa $x(0)=A\cos\varphi$. La velocità è $v(t)=-A\omega\sin(\omega t+\varphi)$ {{formula:2.17}}, perciò $v(0)=-A\omega\sin\varphi$. Ne segue

$$A\cos\varphi=0{,}06\,\mathrm{m},\qquad A\sin\varphi=\frac{0{,}08\pi\,\mathrm{m/s}}{2\pi\,\mathrm{rad/s}}=0{,}04\,\mathrm{m}.$$

Sommando i quadrati delle due relazioni si ottiene

$$A=\sqrt{(0{,}06\,\mathrm{m})^2+(0{,}04\,\mathrm{m})^2}=0{,}10\,\mathrm{m}.$$

Entrambe le componenti $A\cos\varphi$ e $A\sin\varphi$ sono positive, quindi $\varphi$ è nel primo quadrante. In particolare, $\cos\varphi=3/5$ e $\sin\varphi=2/5$, da cui $\varphi=\arctan(2/3)$.

La legge oraria è dunque

$$x(t)=0{,}10\cos\left(2\pi t+\arctan\frac{2}{3}\right)\,\mathrm{m}.$$

Il periodo vale $T=2\pi/\omega$ {{formula:2.15}}, quindi $T=1\,\mathrm{s}$. Dalla formula della velocità, il modulo massimo si ha quando il seno vale $1$ in valore assoluto: $v_{\max}=A\omega=0{,}20\pi\,\mathrm{m/s}$.

Per trovare il primo passaggio per l’origine imponiamo $x(t)=0$. Poiché la fase iniziale è nel primo quadrante, la prima fase successiva per cui il coseno si annulla è $\pi/2$. Pertanto $2\pi t+\varphi=\pi/2$ e

$$t=\frac{\pi/2-\arctan(2/3)}{2\pi}\,\mathrm{s}\approx0{,}156\,\mathrm{s}.$$

**Risultati:** $A=0{,}10\,\mathrm{m}$, $\varphi=\arctan(2/3)$, $T=1\,\mathrm{s}$, $v_{\max}=0{,}20\pi\,\mathrm{m/s}$; il primo passaggio per l’origine avviene a $t\approx0{,}156\,\mathrm{s}$.
:::
:::

:::exercise{id="X4" type="esame" chapter="3" difficulty="medio"}
## Domanda
**Prova scritta - TEMA ESAME 1 - 2024**

Una slitta di massa $M = 1$ kg e lunghezza $L = 1$ m è inizialmente ferma su una superficie scabra caratterizzata da un coefficiente di attrito dinamico $\mu_d = 0,5$. In una delle sue pareti laterali, di spessore $dx$ trascurabile, è inserito un cannoncino che permette di sparare un proiettile di massa $m = 50$ g in direzione orizzontale con velocità $v_m = 10$ m/s rispetto al sistema di riferimento del laboratorio. Sapendo che la slitta inizia a muoversi al momento dello sparo (da considerare come un evento istantaneo al tempo $t = 0$), determinare i seguenti valori.

a) La velocità $v_M$ della slitta dopo lo sparo.

b) Il tempo di volo del proiettile prima di conficcarsi nella seconda parete verticale della slitta, sapendo che l’urto avviene prima che la slitta si fermi (si trascuri l’attrito viscoso dell’aria e l’effetto della forza peso durante il volo).

c) La velocità finale del sistema slitta-proiettile.

:::solution
**a)**

Durante lo sparo agiscono solo delle forze impulsive tra slitta e proiettile, rispetto alle quali la forza di attrito è trascurabile. Si può considerare dunque che si conservi la quantità di moto totale del sistema:

$$mv_m + Mv_M = 0$$

e quindi

$$v_M = -\frac{m}{M}v_m = -0,5\ \text{m/s}$$

**b)**

Dopo lo sparo il proiettile si muove a velocità costante lungo $x$, con legge oraria:

$$x_m(t) = -\frac{L}{2} + v_m t$$

La slitta si muove di moto uniformemente decelerato, con legge oraria per il centro di massa:

$$x_M(t) = -\frac{m}{M}v_m t + \frac{1}{2}\mu_d g t^2$$

e

$$v_M(t) = -\frac{m}{M}v_m + \mu_d g t$$

La slitta si ferma dopo un tempo

$$t_s = \frac{mv_m}{\mu_d g M} = 0,102\ \text{s}$$

nella posizione

$$x_M(t_s) = -\frac{m^2v_m^2}{2M^2\mu_d g} = -0,026\ \text{m}$$

Il tempo di volo $t^*$ si ricava imponendo

$$x_m(t^*) = x_M(t^*) + \frac{L}{2}$$

che equivale alla condizione

$$\frac{1}{2}\mu_d g t^{*2} - v_m t^*\left(1 + \frac{m}{M}\right) + L = 0$$

Prendendo la soluzione corrispondente al tempo minore, si ottiene

$$t^* = \frac{v_m\left(1+\frac{m}{M}\right)-\sqrt{v_m^2\left(1+\frac{m}{M}\right)^2-2L\mu_d g}}{\mu_d g} = 0,097\ \text{s}$$

**c)**

L’urto finale tra slitta e proiettile avviene quando la slitta è ancora in moto. Si tratta di un urto anelastico tra un proiettile che si muove a velocità $v_m$ e una slitta che si muove con velocità

$$v_M(t^*) = -\frac{m}{M}v_m + \mu_d g t^*$$

Nell’urto si conserva la quantità di moto:

$$mv_m - M\frac{m}{M}v_m + M\mu_d g t^* = M\mu_d g t^* = (m+M)v_f$$

da cui

$$v_f = \frac{M\mu_d g t^*}{m+M} = 0,45\ \text{m/s}$$
:::
:::

:::exercise{id="X5" type="esame" chapter="5" difficulty="medio"}
## Domanda
**Prova scritta - TEMA ESAME 2 - 2024**

Un pendolo semplice di massa $m_1 = 0.2\ \text{kg}$ e lunghezza $L = 0.5\ \text{m}$ è tenuto in equilibrio statico, a un angolo $\theta = 60^\circ$ rispetto alla verticale, da una forza orizzontale $\mathbf{F}$. Calcolare il modulo di $\mathbf{F}$.

Si rimuove $\mathbf{F}$ e il pendolo è lasciato libero di oscillare. Quando raggiunge la verticale, urta centralmente un punto materiale di massa $m_2 = 0.1\ \text{kg}$, fermo sul bordo di un gradino alto $h = 0.6\ \text{m}$. L’urto avviene in direzione orizzontale; il bordo non esercita impulso orizzontale e, subito dopo l’urto, $m_2$ lascia il gradino con velocità verticale nulla. Dopo l’urto l’ampiezza di oscillazione del pendolo è $\theta^* = 30^\circ$, mentre $m_2$ cade sotto l’azione della forza peso. Calcolare:

1. il modulo della velocità di $m_2$ subito dopo l’urto;
2. la distanza $d$ dal gradino a cui $m_2$ arriva al suolo.

:::solution
**Esercizio 1**

In equilibrio, le componenti della tensione $T$ bilanciano il peso e la forza orizzontale:

$$F = T\sin\theta, \qquad m_1g = T\cos\theta.$$

Quindi:

$$F = m_1g\tan\theta = 3.4\ \text{N}.$$

Per conservazione dell’energia meccanica, la velocità del pendolo alla verticale, prima dell’urto, è determinata dalla discesa dalla posizione iniziale:

$$m_1gL(1-\cos\theta) = \frac{1}{2}m_1v_{1i}^2,$$

$$v_{1i} = \sqrt{2gL(1-\cos\theta)} = 2.21\ \text{m/s}.$$

Dopo l’urto il pendolo raggiunge l’ampiezza $\theta^*$; applicando nuovamente la conservazione dell’energia:

$$m_1gL(1-\cos\theta^*) = \frac{1}{2}m_1v_{1f}^2,$$

$$v_{1f} = \sqrt{2gL(1-\cos\theta^*)} = 1.15\ \text{m/s}.$$

Durante l’urto si conserva la quantità di moto orizzontale: la tensione del filo può esercitare un impulso verticale, mentre il bordo non esercita impulso orizzontale. Poiché l’urto è centrale e $m_2$ parte da fermo, si ha:

$$m_1v_{1i} = m_1v_{1f} + m_2v_2,$$

$$v_2 = \frac{m_1v_{1i}-m_1v_{1f}}{m_2} = 2.14\ \text{m/s}.$$

Subito dopo l’urto $m_2$ ha velocità orizzontale e componente verticale nulla. Durante la caduta:

$$x = v_2t, \qquad y = h - \frac{1}{2}gt^2.$$

Ponendo $y=0$ e sostituendo $t=x/v_2$, si ottiene:

$$d = v_2\sqrt{\frac{2h}{g}} = 0.75\ \text{m}.$$
:::
:::

:::exercise{id="X6" type="esame" chapter="7" difficulty="difficile"}
## Domanda
**Prova scritta - TEMA ESAME 2025 - 1**

**Esercizio 1**

Un punto materiale di massa $m = 0.5\ \text{kg}$, inizialmente fermo, si muove su un piano inclinato ($\theta = 30^\circ$) scabro (coefficiente di attrito dinamico $\mu = 0.3$) a partire da una quota $h = 50\ \text{cm}$. Subito dopo il piano inclinato il punto si muove su un tratto di piano orizzontale liscio e si conficca nell’estremo inferiore di un’asta di lunghezza $l = 30\ \text{cm}$ e massa $M = 1\ \text{kg}$, vincolata a ruotare intorno a un asse orizzontale posto a una distanza $d = 5\ \text{cm}$ dall’altro estremo, quello superiore. Al momento dell’urto l’asta è verticale, con l’estremo urtato sotto il perno, e la velocità del punto è perpendicolare all’asta. Determinare:

1. il tempo $t$ impiegato dal punto per percorrere il piano inclinato e la velocità $v_0$ del punto subito prima dell’urto con l’asta;
2. la velocità angolare $\omega$ dell’asta e la velocità $v_1$ del punto materiale subito dopo l’urto;
3. la massima quota $h'$ raggiunta dal punto materiale dopo l’urto con l’asta.

Momento d’inerzia di un’asta (lunghezza $l$, massa $M$) rispetto a un asse perpendicolare all’asta e passante per il suo centro di massa: $I_{\mathrm{CM}} = \frac{1}{12}Ml^2$.

:::solution
**Esercizio 1**

**1.**

La legge di Newton lungo il piano inclinato fornisce:

$$
-F_a + mg\sin\theta = ma
$$

$$
N = mg\cos\theta
$$

Essendo $F_a = \mu N$ si ha:

$$
F_a = \mu mg\cos\theta
$$

Da cui si ottiene:

$$
a = g(\sin\theta - \mu\cos\theta)
$$

Il moto è uniformemente accelerato e quindi:

$$
s = \frac{1}{2}at^2
$$

$$
t = \sqrt{\frac{2s}{a}} = \sqrt{\frac{2h}{g\sin\theta(\sin\theta-\mu\cos\theta)}} = 0.92\ \text{s}
$$

$$
v_0 = at = \sqrt{2gh\frac{\sin\theta-\mu\cos\theta}{\sin\theta}} = 2.17\ \text{m/s}
$$

Allo stesso risultato si poteva anche pervenire calcolando l’energia dissipata:

$$
W_{\mathrm{diss}} = \Delta E_m = \frac{1}{2}mv_0^2 - mgh = -F_a s = -\mu mg\cos\theta\frac{h}{\sin\theta}
$$

Da cui si ottiene la velocità del corpo prima dell’urto con la sbarretta.

**2.**

Dalla conservazione del momento angolare si ha:

$$
 mv_0(l-d) = I\omega, \qquad I = \frac{Ml^2}{12} + M\left(\frac{l}{2}-d\right)^2 + m(l-d)^2
$$

$$
I = 4.875\cdot 10^{-2}\ \text{kg}\cdot\text{m}^2
$$

$$
\omega = \frac{mv_0(l-d)}{Ml^2/12+M(l/2-d)^2+m(l-d)^2} = 5.56\ \text{rad/s}
$$

Poiché il punto rimane conficcato nell’asta si ha:

$$
v_1 = \omega(l-d) = 1.39\ \text{m/s}
$$

**3.**

Dopo l’urto sul sistema agiscono solo forze conservative. È quindi possibile applicare il teorema di conservazione dell’energia meccanica.

**Metodo 1**

$E_{m,A} = E_{m,B}$, essendo $B$ la posizione corrispondente alla massima quota.

$$
E_{m,A} = \frac{1}{2}I_d\omega^2 + \frac{1}{2}mv_1^2 + Mg\frac{l}{2} = \frac{1}{2}[I_d + m(l-d)^2]\omega^2 + Mg\frac{l}{2}
$$

con

$$
I_d = \frac{Ml^2}{12} + M\left(\frac{l}{2}-d\right)^2
$$

$$
E_{m,B} = E_{p,M} + E_{p,m} = mg(l-d)(1-\cos\phi) + Mg\left[\frac{l}{2} + \left(\frac{l}{2}-d\right)(1-\cos\phi)\right]
$$

Quindi:

$$
1-\cos\phi = \frac{\frac{1}{2}[I_d+m(l-d)^2]\omega^2}{mg(l-d)+Mg(l/2-d)}
$$

da cui

$$
h' = (l-d)(1-\cos\phi) = (l-d)\frac{\frac{1}{2}[I_d+m(l-d)^2]\omega^2}{mg(l-d)+Mg(l/2-d)}
$$

$$
h' = 8.53\ \text{cm}
$$

**Metodo 2**

Si considerano i due corpi come un unico corpo rigido e si calcola la posizione del centro di massa rispetto all’origine, scelta nel polo di rotazione.

$$
y_{CM} = \frac{M(l/2-d)+m(l-d)}{m+M} = 0.15\ \text{m}
$$

La variazione di quota è:

$$
\Delta h_{CM} = \frac{M(l/2-d)+m(l-d)}{m+M}(1-\cos\phi)
$$

Quindi la conservazione di energia si scrive:

$$
\frac{1}{2}[I_d + m(l-d)^2]\omega^2 = (m+M)g\Delta h_{CM} = [M(l/2-d)+m(l-d)]g(1-\cos\phi)
$$

da cui si ricava lo stesso risultato riportato in precedenza.
:::
:::

:::exercise{id="X7" type="esame" chapter="7" difficulty="difficile"}
## Domanda
**Prova scritta - TEMA ESAME 2 - 2024**

**Esercizio 2A**

Un’asta rigida di lunghezza $L = 1\ \text{m}$ e massa $M = 12\ \text{kg}$ è vincolata nel centro e può ruotare in un piano orizzontale $(xy)$. L’asta è inizialmente ferma e orientata lungo l’asse $y$. Un punto materiale di massa $m = 1\ \text{kg}$ e velocità $\mathbf{v} = 2\,\mathbf{u}_x\ \text{m/s}$ urta l’asta in un suo estremo, e dopo l’urto rimbalza con velocità $\mathbf{v}' = -0{,}5\,\mathbf{u}_x\ \text{m/s}$.

Calcolare:

1. la velocità angolare dell’asta dopo l’urto;
2. le componenti dell’impulso trasmesso al vincolo;
3. le stesse grandezze dei punti precedenti in caso di urto elastico, partendo dalle stesse condizioni iniziali.

Momento d’inerzia dell’asta rispetto all’asse passante per il centro: $I = \frac{1}{12}ML^2$.

:::solution
1. Consideriamo l’estremo colpito sul semiasse $+y$ e usiamo componenti con segno. La conservazione del momento angolare rispetto al centro dell’asta dà

$$-mv\frac{L}{2}=I\omega-mv'_x\frac{L}{2}$$

Da cui

$$\omega=-\frac{6m(v-v'_x)}{ML}=-1{,}25\ \text{rad/s}$$

Se viene colpito l’estremo sul semiasse $-y$, il verso della rotazione è opposto.

2. L’impulso trasmesso dall’asta al vincolo è opposto alla variazione della quantità di moto della particella:

$$\mathbf{J}=-\Delta\mathbf{p}=m(\mathbf{v}-\mathbf{v}')=+2{,}5\,\mathbf{u}_x\ \text{N·s}$$

Quindi $J_x=+2{,}5\ \text{N·s}$ e $J_y=0$. La reazione impulsiva del vincolo sull’asta ha verso opposto, con componente $x$ pari a $-2{,}5\ \text{N·s}$.

3. Per l’urto elastico, le equazioni di conservazione del momento angolare e dell’energia cinetica sono

$$-mv\frac{L}{2}=I\omega''-mv''_x\frac{L}{2}$$

$$\frac{1}{2}mv^2=\frac{1}{2}m(v''_x)^2+\frac{1}{2}I(\omega'')^2$$

La soluzione dà

$$v''_x=\frac{3m-M}{M+3m}v=-1{,}20\ \text{m/s}$$

$$\omega''=-\frac{v}{L}\frac{12m}{M+3m}=-1{,}60\ \text{rad/s}$$

La particella rimbalza quindi con velocità $\mathbf{v}''=-1{,}20\,\mathbf{u}_x\ \text{m/s}$. L’impulso trasmesso dall’asta al vincolo è

$$\mathbf{J}'=m(\mathbf{v}-\mathbf{v}'')=+3{,}2\,\mathbf{u}_x\ \text{N·s}$$

Quindi $J'_x=+3{,}2\ \text{N·s}$ e $J'_y=0$. La reazione impulsiva del vincolo sull’asta ha componente $x$ pari a $-3{,}2\ \text{N·s}$. Se viene colpito l’estremo opposto, cambiano solo i segni delle velocità angolari.
:::
:::

:::exercise{id="X8" type="esame" chapter="8" difficulty="medio"}
## Domanda
**Esercizio in stile d'esame (generato)**

Una lamina rigida si muove nel piano. In un dato istante, i punti $A$ e $B$ hanno posizioni $\mathbf{r}_A=(0,0)\,\mathrm{m}$ e $\mathbf{r}_B=(0{,}40,0)\,\mathrm{m}$ e velocità $\mathbf{v}_A=(1,0)\,\mathrm{m/s}$ e $\mathbf{v}_B=(1,1{,}20)\,\mathrm{m/s}$. Si assuma che l’asse istantaneo di rotazione sia perpendicolare al piano.

a) Determinare la velocità angolare della lamina.

b) Calcolare la velocità di un punto $C$ tale che $\mathbf{r}_C-\mathbf{r}_A=(0{,}20,0{,}30)\,\mathrm{m}$.

c) Determinare la posizione del centro istantaneo di rotazione rispetto ad $A$.

:::solution
La relazione tra le velocità di due punti di un corpo rigido è {{formula:8.1}}.

Indicando con $\boldsymbol{\omega}=\omega\,\mathbf{e}_z$ la velocità angolare, si ha

$$\mathbf{v}_B-\mathbf{v}_A=\boldsymbol{\omega}\times(\mathbf{r}_B-\mathbf{r}_A).$$

Poiché $\mathbf{r}_B-\mathbf{r}_A=(0{,}40,0)\,\mathrm{m}$ e $\mathbf{v}_B-\mathbf{v}_A=(0,1{,}20)\,\mathrm{m/s}$, segue

$$\omega\,\mathbf{e}_z\times(0{,}40,0)=(0,0{,}40\omega)=(0,1{,}20).$$

Quindi $\omega=3{,}0\,\mathrm{rad/s}$, nel verso positivo dell’asse $z$.

Per il punto $C$ si applica la stessa relazione tra le velocità:

$$\mathbf{v}_C=\mathbf{v}_A+\boldsymbol{\omega}\times(\mathbf{r}_C-\mathbf{r}_A).$$

Pertanto

$$\mathbf{v}_C=(1,0)+(0,0,3)\times(0{,}20,0{,}30,0)=(0{,}10,0{,}60)\,\mathrm{m/s}.$$

Il centro istantaneo $I$ ha velocità nulla. Scrivendo $\mathbf{r}_I-\mathbf{r}_A=(x,y,0)$, si ottiene

$$\mathbf{0}=\mathbf{v}_A+\boldsymbol{\omega}\times(\mathbf{r}_I-\mathbf{r}_A)=(1-3y,3x,0).$$

Dalle componenti segue $x=0$ e $y=1/3\,\mathrm{m}$. La posizione del centro istantaneo rispetto ad $A$ è dunque $(0,1/3)\,\mathrm{m}$.
:::
:::

:::exercise{id="X9" type="esame" chapter="8" difficulty="facile"}
## Domanda
**Esercizio in stile d'esame (generato)**

Due aste sottili e uniformi, di densità lineare di massa $\lambda=2{,}0\,\mathrm{kg/m}$, sono saldate perpendicolarmente a un’estremità comune $O$. Le loro lunghezze sono $a=0{,}60\,\mathrm{m}$ e $b=0{,}80\,\mathrm{m}$. Calcolare il momento d’inerzia del sistema rispetto all’asse passante per $O$ e perpendicolare al piano delle aste.

:::solution
Il momento d’inerzia del sistema è la somma dei momenti d’inerzia delle due aste rispetto allo stesso asse, per il principio di additività {{formula:8.4}}.

Per un’asta uniforme di massa $m$ e lunghezza $L$, il momento d’inerzia rispetto a un asse perpendicolare all’asta e passante per un’estremità è $I=mL^2/3$. Poiché la massa di ciascuna asta è $m=\lambda L$, si può scrivere $I=\lambda L^3/3$.

Per l’asta di lunghezza $a$:

$$I_a=\frac{\lambda a^3}{3}=\frac{2{,}0(0{,}60)^3}{3}=0{,}144\,\mathrm{kg\,m^2}.$$

Per l’asta di lunghezza $b$:

$$I_b=\frac{\lambda b^3}{3}=\frac{2{,}0(0{,}80)^3}{3}\approx0{,}341\,\mathrm{kg\,m^2}.$$

Sommando i contributi si ottiene

$$I_O=I_a+I_b=0{,}144+0{,}341\approx0{,}485\,\mathrm{kg\,m^2}.$$

Il momento d’inerzia del sistema rispetto all’asse specificato è $0{,}485\,\mathrm{kg\,m^2}$.
:::
:::

:::exercise{id="X10" type="esame" chapter="9" difficulty="difficile"}
## Domanda
**Prova scritta - TEMA ESAME 2025 - 1**

Un cilindro di raggio $r = 10\ \text{cm}$ e massa $m = 500\ \text{g}$ è inizialmente fermo sulla sommità di una superficie cilindrica fissa, di raggio $R = 9r$ (posizione A in figura). Le superfici sono scabre e il coefficiente di attrito statico tra esse vale $\mu_s = 0.6$. Ad un certo istante il cilindro viene spostato leggermente verso destra e inizia a rotolare senza strisciare sulla superficie cilindrica. Giunto alla posizione B, il cilindro ha percorso una distanza angolare $\theta = 35^\circ$ (vedi figura). Il momento di inerzia di un cilindro rispetto al proprio asse è $I = \frac{1}{2}mr^2$.

1. Calcolare l’energia cinetica complessiva $E_k$ del cilindro nella posizione B.

2. Calcolare il modulo $N$ della reazione vincolare nella posizione B.

3. Calcolare la forza di attrito statico $F_a$ nella posizione B e verificare la validità della condizione di puro rotolamento.

(Suggerimento: considerare che il centro di massa del cilindro percorre una traiettoria circolare.)

:::solution
**Energia cinetica**

La conservazione dell’energia meccanica, considerando che il lavoro della reazione vincolare e della forza di attrito statico $F_a$ è nullo e che la forza peso $P$ è conservativa, fornisce

$$E_{k_A}=0,\qquad E_{p_A}=mg(R+r)(1-\cos\theta),\qquad E_{p_B}=0.$$

Si è scelto come zero dell’energia potenziale la posizione B. Dalla conservazione dell’energia meccanica si ottiene

$$E_{k_B}=mg(R+r)(1-\cos\theta)=0.89\ \text{J}.$$

**Reazione vincolare**

In direzione normale $\hat{u}_n$ vale

$$-N+mg\cos\theta=ma_{CM,n}=m\frac{v_{CM}^2}{R+r}.$$

Per il teorema di König e per il rotolamento senza strisciamento, $v_{CM}=\omega r$, quindi

$$E_{k_B}=\frac{1}{2}mv_{CM}^2+\frac{1}{2}I\omega^2=\frac{3}{4}mv_{CM}^2.$$

Ne segue

$$v_{CM}^2=\frac{4}{3}g(R+r)(1-\cos\theta).$$

Sostituendo nella relazione delle forze si ottiene

$$N=\frac{1}{3}mg(-4+7\cos\theta)=2.83\ \text{N}.$$

**Forza di attrito statico**

Dalla seconda legge della dinamica e dal teorema del momento angolare, scegliendo come polo il centro di massa, si ha

$$-F_a+mg\sin\theta=ma_{CM},\qquad rF_a=I_{CM}\alpha.$$

La condizione di puro rotolamento lega l’accelerazione tangenziale del centro di massa all’accelerazione angolare: $a_{CM}=\alpha r$. Usando $I_{CM}=\frac{1}{2}mr^2$ e risolvendo le equazioni si ottiene

$$F_a=\frac{1}{3}mg\sin\theta=0.94\ \text{N}.$$

Il valore massimo dell’attrito statico è

$$F_{a\max}=\mu_sN=\mu_s\frac{1}{3}mg(-4+7\cos\theta)=1.70\ \text{N}.$$

Poiché $F_a<F_{a\max}$, la condizione di puro rotolamento è verificata.
:::
:::

:::exercise{id="X11" type="esame" chapter="9" difficulty="difficile"}
## Domanda
**Prova scritta - TEMA ESAME 1 - 2024**

**Esercizio 2**

Una molla di costante elastica $k = 30$ N/m è disposta orizzontalmente ed ha un estremo fissato ad una parete verticale. L’altro estremo è attaccato all’asse di un disco di raggio $R=0.1$ m e massa $M=15$ kg. Il disco poggia su una superficie orizzontale scabra con coefficiente d’attrito statico $\mu_s=0,27$ ed è inizialmente fermo mentre la molla è inizialmente compressa rispetto alla sua lunghezza a riposo. Il momento di inerzia del disco è $I = \frac{1}{2}MR^2$. Determinare:

- a) Il periodo delle oscillazioni del disco nel caso in cui il suo moto sia di puro rotolamento
- b) L’espressione della forza di attrito in funzione della coordinata del centro di massa del disco, sempre nel caso di puro rotolamento
- c) La massima compressione iniziale della molla per cui il disco, lasciato libero di muoversi, compia un moto di puro rotolamento

:::solution
**Esercizio 2**

a) Scegliamo l’asse $x$ positivo diretto verso la parete e indichiamo con $y=\Delta l$ la compressione della molla. Per il moto di puro rotolamento valgono le equazioni:

$$
Ma=-ky+f_a
$$

$$
-f_aR=I\frac{a}{R}
$$

dove $f_a$ è la componente con segno della forza di attrito statico lungo l’asse $x$. Il suo verso è determinato dalla tendenza allo slittamento del punto di contatto.

Sostituendo $I=\frac{1}{2}MR^2$ e combinando le equazioni si ottiene:

$$
\ddot{y}+\frac{2k}{3M}y=0
$$

Il moto è armonico e il periodo è:

$$
T=2\pi\sqrt{\frac{3M}{2k}}=5.4\ \text{s}
$$

b) Dalle equazioni del moto si ricava la componente con segno della forza di attrito:

$$
f_a=\frac{k}{3}y=\frac{k}{3}\Delta l
$$

c) Per mantenere il puro rotolamento, il modulo della forza di attrito statico non deve superare il suo valore massimo. Poiché la massima compressione iniziale è il massimo valore di $\Delta l$, la condizione è:

$$
\frac{k}{3}\Delta l\leq \mu_sMg
$$

quindi:

$$
\Delta l\leq\frac{3\mu_sMg}{k}
$$

La massima compressione iniziale è pertanto:

$$
\Delta l_{\max}=\frac{3\mu_sMg}{k}\simeq 4\ \text{m}
$$
:::
:::

:::exercise{id="X12" type="esame" chapter="12" difficulty="facile"}
## Domanda
**Esercizio in stile d'esame (generato)**

Un recipiente rigido e isolato termicamente dall’ambiente contiene due corpi, $A$ e $B$, separati da una parete che permette lo scambio di calore. Le capacità termiche dei corpi sono costanti e valgono rispettivamente $200\,\mathrm{J/K}$ e $300\,\mathrm{J/K}$. Inizialmente le temperature sono $80\,^{\circ}\mathrm{C}$ per $A$ e $20\,^{\circ}\mathrm{C}$ per $B$. Non avvengono cambiamenti di fase.

a) Considerando i due corpi insieme come un unico sistema, specificare se il sistema è aperto, chiuso o isolato e descriverne il confine.

b) Determinare la temperatura finale di equilibrio dei corpi. Specificare quale condizione caratterizza l’equilibrio termico raggiunto.

:::solution
a) Il sistema è costituito dai due corpi considerati insieme. Non scambia materia né energia con l’ambiente, quindi è isolato. Il suo confine esterno è la parete del recipiente, che è rigida e termicamente isolante. La parete interna permette invece il trasferimento di calore fra i due corpi.

b) All’equilibrio termico i due corpi hanno la stessa temperatura finale $T_f$. Per la conservazione dell’energia nel sistema isolato, il calore ceduto da $A$ è uguale in modulo a quello assorbito da $B$. Equivalentemente, si può usare la relazione {{formula:12.15}}:

$$T_f=\frac{C_A T_A+C_B T_B}{C_A+C_B}=\frac{(200)(80)+(300)(20)}{200+300}\,^{\circ}\mathrm{C}=44\,^{\circ}\mathrm{C}.$$

La condizione di equilibrio termico è dunque l’uguaglianza delle temperature dei due corpi, pari a $44\,^{\circ}\mathrm{C}$.
:::
:::

:::exercise{id="X13" type="esame" chapter="12" difficulty="medio"}
## Domanda
**Esercizio in stile d'esame (generato)**

Un termometro empirico usa una proprietà termometrica $x$ che varia linearmente con la temperatura Celsius. Quando è posto in equilibrio con ghiaccio fondente, indica $x=12$; quando è posto in equilibrio con acqua bollente alla pressione atmosferica, indica $x=92$. Si assuma che i due punti di calibrazione corrispondano rispettivamente a $0\,^{\circ}\mathrm{C}$ e $100\,^{\circ}\mathrm{C}$.

a) Ricavare la relazione fra l’indicazione $x$ e la temperatura Celsius $T_C$.

b) Determinare la temperatura Celsius e la temperatura kelvin corrispondenti a $x=52$.

c) Determinare l’indicazione del termometro quando la temperatura è $37\,^{\circ}\mathrm{C}$.

:::solution
a) Poiché la proprietà $x$ dipende linearmente dalla temperatura, la temperatura empirica Celsius associata all’indicazione $x$ è {{formula:12.1}}:

$$T_C=100\,\frac{x-x_0}{x_{100}-x_0}\,^{\circ}\mathrm{C},$$

dove $x_0=12$ e $x_{100}=92$. Quindi

$$T_C=100\,\frac{x-12}{80}\,^{\circ}\mathrm{C}.$$

b) Per $x=52$ si ottiene

$$T_C=100\,\frac{52-12}{80}\,^{\circ}\mathrm{C}=50\,^{\circ}\mathrm{C}.$$

Applicando la conversione {{formula:12.2}}, la temperatura assoluta è

$$T_K=T_C+273{,}15=323{,}15\,\mathrm{K}.$$

c) Risolvendo la relazione di calibrazione rispetto a $x$ e sostituendo $T_C=37\,^{\circ}\mathrm{C}$,

$$x=12+80\,\frac{37}{100}=41{,}6.$$

L’indicazione corrispondente è $41{,}6$.
:::
:::

:::exercise{id="X14" type="esame" chapter="13" difficulty="difficile"}
## Domanda
**Prova scritta - TEMA ESAME 2025 - 1**

**Esercizio 3**

$n = 2$ moli di gas ideale monoatomico ($c_V = \frac{3}{2}R$, $R = 8.31\ \text{J}/(\text{mol}\cdot\text{K})$), inizialmente nello stato di volume $V_A = 5\cdot10^{-3}\ \text{m}^3$ e temperatura $T_A = 273.2\ \text{K}$, eseguono una trasformazione isoterma reversibile a contatto con una miscela d’acqua e ghiaccio, fino al volume $V_B = 2\cdot10^{-3}\ \text{m}^3$. Successivamente il gas viene posto a contatto con una sorgente a temperatura $T_C = 519\ \text{K}$ fino a raggiungere a pressione costante l’equilibrio termico. Quindi, per mezzo di una trasformazione adiabatica reversibile, il gas ritorna al volume iniziale. Infine, posto di nuovo a contatto con la miscela di acqua e ghiaccio, ritorna tramite una trasformazione isocora anche alla temperatura iniziale. Il calore latente di fusione del ghiaccio è $\lambda = 3.33\cdot10^5\ \text{J/kg}$. Disegnare il ciclo su un piano $p$-$V$ e calcolare per un ciclo:

1. la massa $m$ di ghiaccio che si scioglie;
2. il lavoro complessivo compiuto dal gas e il rendimento del ciclo;
3. la variazione di entropia dell’universo termodinamico in un ciclo.

:::solution
**Esercizio 3**

Nel piano $p$-$V$, il ciclo si percorre così: $A\to B$ è una compressione isoterma verso volumi minori; $B\to C$ è un’espansione isobara verso destra; $C\to D$ è un’espansione adiabatica reversibile fino a $V_D=V_A$; $D\to A$ è un raffreddamento isocoro. Il punto $C$ si trova a destra di $B$ e alla stessa pressione; il punto $D$ ha volume $V_A$ e pressione maggiore di quella in $A$. Infatti, a volume uguale, la pressione è proporzionale alla temperatura: $T_D=432.18\ \text{K}>T_A=273.2\ \text{K}$. Si ottiene $p_A\approx0.908\cdot10^6\ \text{Pa}$ e $p_D\approx1.44\cdot10^6\ \text{Pa}$.

La miscela acqua-ghiaccio scambia calore nella compressione isoterma $AB$ del gas e nell’isocora $DA$. Per il ciclo, indicando con $Q_{AB}$ e $Q_{DA}$ i calori scambiati dal gas, il calore ceduto alla miscela è $Q_{gh}=-(Q_{AB}+Q_{DA})$.

Nell’isocora il lavoro è nullo, quindi per il primo principio $Q_{DA}=\Delta U_{DA}=nc_V(T_A-T_D)$. Per determinare $T_D$ occorre prima calcolare $V_C$. Poiché $BC$ è isobara, $V_C=V_B\frac{T_C}{T_A}=3.799\cdot10^{-3}\ \text{m}^3$. Applicando la relazione dell’adiabatica reversibile $T V^{\gamma-1}=\text{costante}$, con $\gamma=\frac{5}{3}$, si ottiene $T_D=T_C\left(\frac{V_C}{V_A}\right)^{\gamma-1}=432.18\ \text{K}$.

I calori scambiati sono

$$Q_{AB}=nRT_A\ln\left(\frac{V_B}{V_A}\right)=-4160.50\ \text{J}$$

$$Q_{DA}=nc_V(T_A-T_D)=-3963.37\ \text{J}$$

Quindi $Q_{gh}=8123.87\ \text{J}$. La massa di ghiaccio che fonde per ciclo è

$$m=\frac{Q_{gh}}{\lambda}=24.40\ \text{g}$$

**Lavoro e rendimento**

Poiché il sistema torna allo stato iniziale, il lavoro totale compiuto dal gas è uguale al calore totale assorbito. Si ha $Q_{CD}=0$ e, per la trasformazione isobara $BC$, $Q_{BC}=nc_p(T_C-T_A)=10212.99\ \text{J}$, dove $c_p=c_V+R$. Pertanto

$$W=Q_{AB}+Q_{BC}+Q_{CD}+Q_{DA}=2089.11\ \text{J}$$

Il calore assorbito dal gas è $Q_{BC}$, dunque il rendimento è

$$\eta=\frac{W}{Q_{BC}}=0.2046\simeq20.46\%$$

**Variazione di entropia dell’universo**

La variazione di entropia del gas è nulla in un ciclo. La miscela acqua-ghiaccio riceve $Q_{gh}=8.12\ \text{kJ}$ alla temperatura $T_A$, mentre la sorgente a temperatura $T_C$ cede $Q_{BC}=10.21\ \text{kJ}$. Quindi

$$\Delta S_U=\frac{Q_{gh}}{T_A}-\frac{Q_{BC}}{T_C}=10.06\ \text{J/K}>0$$
:::
:::

:::exercise{id="X15" type="esame" chapter="13" difficulty="difficile"}
## Domanda
**Prova scritta - TEMA ESAME 2 - 2024**

**Esercizio 3A**

Un gas ideale monoatomico ($n = 2\ \text{mol}$, $c_V = \frac{3}{2}R$) si trova in uno stato di equilibrio con volume $V_A = 5 \times 10^{-3}\ \text{m}^3$ e temperatura $T_A = 273.2\ \text{K}$. Il gas viene compresso in modo reversibile mettendolo a contatto con una miscela di acqua e ghiaccio, fino al volume $V_B = 2 \times 10^{-3}\ \text{m}^3$. In seguito il gas viene posto in contatto con una sorgente a temperatura $T_C = 519\ \text{K}$ fino a raggiungere, a pressione costante, l’equilibrio termico. Poi il gas compie una trasformazione adiabatica reversibile e ritorna al volume iniziale. Infine, posto a contatto con la miscela di acqua e ghiaccio, ritorna anche alla temperatura iniziale $T_A$ mantenendo il volume costante.

Si calcoli in un ciclo:

1. Quanti grammi di ghiaccio si sciolgono.
2. Il lavoro complessivo scambiato.
3. La variazione di entropia dell’universo.

Si usino $R = 8.314\ \text{J}/(\text{mol}\,\text{K})$ e $\lambda_{\text{ghiaccio}} = 3.3 \times 10^5\ \text{J}/\text{kg}$.

:::solution
AB è una compressione isoterma reversibile; il gas cede calore al ghiaccio:

$$Q_{AB} = nRT_A\ln\left(\frac{V_B}{V_A}\right) = -4162.5\ \text{J}$$

Poiché BC è isobara, $p_C = p_B$ e quindi:

$$V_C = \frac{nRT_C}{p_C} = \frac{nRT_C}{p_B} = \frac{T_CV_B}{T_A}$$

CD è un’espansione adiabatica reversibile, dunque $Q_{CD} = 0$. Con $\gamma = c_P/c_V$:

$$T_CV_C^{\gamma-1} = T_DV_D^{\gamma-1}$$

Essendo $V_D = V_A$:

$$T_D = T_C\left(\frac{V_C}{V_A}\right)^{\gamma-1} = 432.2\ \text{K}$$

DA è un raffreddamento isocoro irreversibile:

$$Q_{DA} = \Delta U_{DA} = nc_V(T_A-T_D) = -3966\ \text{J}$$

Il calore assorbito dalla miscela di acqua e ghiaccio è

$$Q_{gh} = |Q_{AB}+Q_{DA}| = 8128.5\ \text{J}$$

Perciò la massa di ghiaccio sciolta è

$$m_{gh} = \frac{Q_{gh}}{\lambda_{\text{ghiaccio}}} = 0.0246\ \text{kg} = 24.6\ \text{g}$$

BC è un’espansione isobara irreversibile:

$$Q_{BC} = nc_P(T_C-T_B) = nc_P(T_C-T_A) = 10218\ \text{J}$$

Su un ciclo completo $\Delta U = 0$, quindi il lavoro netto compiuto dal gas è

$$W_{\text{tot}} = Q_{\text{tot}} = Q_{AB}+Q_{BC}+Q_{CD}+Q_{DA} = 2090\ \text{J}$$

La variazione di entropia del gas sul ciclo è nulla. La variazione di entropia dell’universo è

$$\Delta S_U = \Delta S_{\text{amb}} = \Delta S_{\text{ghiaccio}}+\Delta S_{BC}^{\text{amb}} = \frac{Q_{gh}}{T_A}-\frac{Q_{BC}}{T_C} = 10.1\ \text{J/K}$$
:::
:::

:::exercise{id="X16" type="esame" chapter="14" difficulty="medio"}
## Domanda
**Prova scritta - TEMA ESAME 1 - 2024**

Una macchina termica reversibile lavora con due serbatoi: assorbe calore da una massa d’acqua, inizialmente alla temperatura $T_a = 40\ ^\circ\mathrm{C}$, e cede calore a una massa di ghiaccio a $T_g = 0\ ^\circ\mathrm{C}$. Durante il funzionamento della macchina, l’acqua diminuisce progressivamente la sua temperatura, rimanendo a volume costante e senza ghiacciare, sino a quando la macchina non può più produrre lavoro. Sapendo che si sono sciolti $m_g = 2000\ \mathrm{kg}$ di ghiaccio, che il serbatoio freddo è rimasto a $T_g = 0\ ^\circ\mathrm{C}$, che il calore latente di fusione del ghiaccio è $\lambda_F = 3{,}3\times 10^5\ \mathrm{J/kg}$ e che il calore specifico dell’acqua è $c_a = 4186\ \mathrm{J/(kg\,K)}$, calcolare:

a) Il calore ceduto al ghiaccio.

b) Le variazioni di entropia dovute alle trasformazioni e la massa d’acqua presente nel serbatoio caldo.

c) Il rendimento della macchina.

:::solution
**a)**

Il calore assorbito dal ghiaccio durante la fusione, nella convenzione in cui è positivo il calore ricevuto dal ghiaccio, è $Q_g^{(\mathrm{ricevuto})} = m_g\lambda_F$. Con i dati assegnati, $Q_g^{(\mathrm{ricevuto})} = 2000\times 3{,}3\times 10^5 = 6{,}60\times 10^8\ \mathrm{J} = 660\ \mathrm{MJ}$. Nella convenzione dei segni adottata per il calore ceduto dalla macchina, $Q_g = -660\ \mathrm{MJ}$.

**b)**

La macchina è reversibile e ciclica, quindi la variazione di entropia dell’universo è nulla. La variazione di entropia della macchina è nulla e, di conseguenza, anche la somma delle variazioni di entropia dei due serbatoi è nulla.

L’acqua si raffredda a volume costante da $T_a = 313{,}15\ \mathrm{K}$ a $T_g = 273{,}15\ \mathrm{K}$. La sua variazione di entropia è

$$
\Delta S_a = m_a c_a\ln\left(\frac{T_g}{T_a}\right)
$$

Il ghiaccio fonde a temperatura costante, perciò la variazione di entropia del serbatoio freddo è

$$
\Delta S_g = \frac{m_g\lambda_F}{T_g}
$$

La condizione $\Delta S_a + \Delta S_g = 0$ dà

$$
m_a c_a\ln\left(\frac{T_g}{T_a}\right) + \frac{m_g\lambda_F}{T_g} = 0
$$

Pertanto

$$
m_a = -\frac{m_g\lambda_F}{c_a T_g\ln(T_g/T_a)} = 4223{,}8\ \mathrm{kg}
$$

Le variazioni di entropia dei serbatoi sono $\Delta S_g = +2{,}416\times 10^6\ \mathrm{J/K}$ e $\Delta S_a = -2{,}416\times 10^6\ \mathrm{J/K}$. La variazione complessiva di entropia è nulla.

**c)**

Il calore ceduto dall’acqua alla macchina è

$$
Q_1 = m_a c_a(T_a-T_g) = 707{,}2\ \mathrm{MJ}
$$

Il lavoro prodotto è $L = Q_1 + Q_g = 47{,}2\ \mathrm{MJ}$. Il rendimento complessivo vale

$$
\eta = \frac{L}{Q_1} = 6{,}68\% \approx 6{,}7\%
$$
:::
:::
