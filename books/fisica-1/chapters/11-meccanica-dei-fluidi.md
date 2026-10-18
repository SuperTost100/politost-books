---
chapter: 11
title: Meccanica dei fluidi
---

## p1 | Introduzione

Studiare i fluidi permette di comprendere come si sostengono le dighe, perché una nave galleggia e come l’acqua scorre in tubi e condotti. Questi fenomeni dipendono da poche idee che collegano pressione, equilibrio e movimento: saperle usare aiuta a interpretare situazioni quotidiane e a risolvere problemi pratici.

Per affrontare il capitolo è utile conoscere il lavoro e l’energia e saper applicare le leggi della meccanica a sistemi in equilibrio e in movimento. Servono anche familiarità con le grandezze fisiche, le unità di misura e le proporzioni; densità, pressione e portata verranno introdotte e messe in relazione durante lo studio.

Al termine saprai calcolare la pressione in un fluido in quiete, determinare le forze esercitate su una parete e prevedere se un corpo galleggia. Per i fluidi in moto, saprai usare la conservazione della portata e il teorema di Bernoulli per collegare velocità, pressione e quota, e applicare la legge di Torricelli all’efflusso. Imparerai inoltre a distinguere il modello ideale dal comportamento dei fluidi viscosi, a calcolare la portata in un condotto quando valgono le condizioni appropriate e a verificare con il numero di Reynolds se il moto può considerarsi laminare.

## p2 | Pressione e statica dei fluidi

### Fluidi, pressione e forze di superficie

Con il termine **fluido** si indicano liquidi e gas, sostanze che, a differenza dei solidi, non possiedono una forma propria ma assumono quella del recipiente che le contiene. I liquidi hanno un proprio volume e sono praticamente incompressibili, mentre i gas si comprimono con facilità; la differenza è dovuta all'intensità dei legami tra le molecole nelle due fasi.

Un fluido è trattato come un sistema continuo, composto da infiniti elementi di massa infinitesima

$$
dm = \rho\, dV,
$$

dove $\rho$ è la densità locale. La caratteristica che distingue un fluido da un solido è la possibilità di scorrimento relativo tra parti adiacenti: non esiste un attrito statico capace di bloccare questo scorrimento, e l'unica resistenza è l'attrito interno (la viscosità), di cui ci occuperemo nella sezione su [viscosità e regimi di flusso](ref:chapter/11#p4).

Sulla superficie di un elemento di fluido agiscono forze di volume (proporzionali a $dV$, come il peso $dF^{(V)} = g\,dm$) e forze di superficie (proporzionali a $dS$), che si scompongono in uno sforzo normale e in uno sforzo di taglio:

$$

p = \frac{dF_n(S)}{dS}, \qquad \tau = \frac{dF_t(S)}{dS}.
$$

In un fluido in equilibrio gli sforzi di taglio sono assenti e restano solo le forze normali; negli stati di moto compaiono anche sforzi di taglio, legati alla viscosità.

**Definizione 11.1** (pressione in un fluido in quiete). In un fluido in quiete, la pressione in un punto è il rapporto tra la componente normale della forza agente su una superficie infinitesima che circonda il punto e l'area della superficie stessa, $p = dF_n/dS$. In questa condizione gli sforzi di taglio sono assenti, per cui la componente normale della forza non dipende dall'orientazione della superficie e la pressione è una grandezza scalare univocamente definita. Nei fluidi in moto la componente normale dello sforzo su una superficie può invece includere anche un contributo viscoso che dipende dall'orientazione della superficie stessa, e in generale non coincide più con la pressione; questo aspetto viene ripreso nella sezione su [viscosità e regimi di flusso](ref:chapter/11#p4).

:::formula{id="11.1" label="Pressione in un fluido"}
$$p = \lim_{\Delta S \to 0} \frac{\Delta F_n}{\Delta S} = \frac{dF_n}{dS}.$$
:::

Se la pressione è costante su una superficie finita $S$ si ha semplicemente $p = F/S$. La pressione è una grandezza scalare: non dipende dall'orientazione della superficie su cui viene misurata, una proprietà che discende dall'assenza di sforzi di taglio in condizioni statiche. Dimensionalmente $\lbrack p\rbrack  = \lbrack ML^{-1}T^{-2}\rbrack $ e l'unità SI è il pascal, $1\ \text{Pa} = 1\ \text{N}\cdot\text{m}^{-2}$; si usano anche $1\ \text{bar} = 10^5\ \text{Pa}$ e $1\ \text{atm} = 1{,}013\cdot 10^5\ \text{Pa} = 760\ \text{Torr}$.

**Errore tipico 11.1.** Confondere la pressione con una forza, o scriverla come vettore: $p$ è uno scalare, mentre $dF_n = p\,dS\,\hat{u}_n$ è la forza corrispondente, diretta come la normale alla superficie.

### Equilibrio idrostatico e legge di Stevino

**Definizione 11.2** (fluido in quiete). Un fluido si dice in quiete, o in equilibrio idrostatico, se tutti i suoi elementi hanno velocità e accelerazione nulle in un riferimento inerziale.

Consideriamo un elemento di fluido a forma di cilindretto di sezione $A$ e altezza $dy$, con asse $y$ orientato verso l'alto. Su di esso agiscono la forza peso $dF_V = -g\,dm = -g\rho A\,dy$ e le forze di pressione dovute al fluido circostante, $dF_p = pA - (p+dp)A$. La condizione di equilibrio $dF_p + dF_V = 0$ dà

$$
pA - (p+dp)A - g\rho A\, dy = 0 \;\Longrightarrow\; \frac{dp}{dy} = -\rho g.
$$

In forma vettoriale, per una generica forza di volume per unità di massa $\vec{f}$, la condizione di equilibrio statico si scrive $\vec{\nabla}p = \rho \vec{f}$.

:::formula{id="11.2" label="Equazione dell'equilibrio idrostatico"}
$$\frac{dp}{dy} = -\rho g$$
:::

**Teorema 11.1** (legge di Stevino). In un fluido di densità $\rho$ costante, soggetto alla sola forza peso, la pressione cresce linearmente con la profondità. Integrando l'equazione dell'equilibrio idrostatico tra due quote $y_1$ e $y_2$,

$$
\int_{p_1}^{p_2} dp = -\rho g \int_{y_1}^{y_2} dy \;\Longrightarrow\; p_2 - p_1 = -\rho g (y_2 - y_1).
$$

Se $y_2$ è sulla superficie libera del fluido, dove la pressione vale $p_0$ (tipicamente la pressione atmosferica), e $h$ è la profondità del punto 1 rispetto alla superficie, si ottiene

:::formula{id="11.3" label="Legge di Stevino"}
$$p(h) = p_0 + \rho g h.$$
:::

:::image{src="assets/c1377d84-legge-stevino-ph.svg" alt="Retta crescente della pressione in funzione della profondità, con intercetta p0 e pendenza rho g." caption="Fig. 11.1 — Andamento della pressione p(h) con la profondità h secondo la legge di Stevino: la crescita è lineare, con pendenza ρg, a partire dal valore p0 sulla superficie libera."}
:::

Le ipotesi essenziali sono: fluido in quiete, densità $\rho$ costante (fluido incomprimibile od omogeneo), e unica forza di volume la gravità. Le superfici a pressione costante (isobariche) sono dunque superfici orizzontali.

### Conseguenze della legge di Stevino

**Principio di Pascal.** Dalla relazione $p_1 = p_0 + \rho g h$, se la pressione esterna subisce una variazione $p_0 \to p_0 + \Delta p_0$, ogni punto del fluido alla stessa profondità subisce la medesima variazione di pressione, poiché il termine $\rho g h$ non cambia:

$$
p_1' = p_1 + \Delta p_0, \qquad p_i' = p_i + \Delta p_0 \quad \text{per ogni } i.
$$

In altre parole, ogni cambiamento della pressione esterna si trasmette inalterato a tutti i punti del fluido: è il principio su cui si basano i sistemi idraulici di sollevamento.

Si consideri, per esempio, un sistema idraulico con due pistoni di aree $A_1$ e $A_2$, collegati da un fluido incomprimibile in equilibrio, in cui gli effetti della gravità sul fluido siano trascurabili rispetto alle forze applicate. Una forza $F_1$ applicata al primo pistone produce una variazione di pressione $\Delta p = F_1/A_1$, che per il principio di Pascal si trasmette inalterata al secondo pistone; la forza che il fluido esercita su di esso vale allora $F_2 = \Delta p\, A_2 = F_1\, \frac{A_2}{A_1}$. Con $A_2 > A_1$ si ottiene un'amplificazione della forza, a spese di uno spostamento proporzionalmente minore del secondo pistone, in accordo con la conservazione dell'energia.

**Superfici isobariche fra fluidi diversi.** La superficie di separazione tra due liquidi di densità diverse è sempre orizzontale. Si considerino due punti $A$ e $B$ dell'interfaccia, posti alle quote $y_A$ e $y_B$ in corrispondenza di due ascisse diverse $x_1$ e $x_2$. Poiché entrambi i punti appartengono alla regione connessa occupata dal liquido superiore, di densità $\rho_1$, la legge di Stevino applicata entro tale liquido fornisce $p_A - p_B = \rho_1 g (y_B - y_A)$. Allo stesso tempo, poiché $A$ e $B$ appartengono anche alla regione connessa occupata dal liquido inferiore, di densità $\rho_2$, la stessa legge applicata entro quest'ultimo fornisce $p_A - p_B = \rho_2 g (y_B - y_A)$. Ma la pressione in un punto è un valore univoco, indipendente dal percorso lungo cui viene calcolata la sua differenza rispetto a un altro punto; deve quindi essere $\rho_1 g(y_B - y_A) = \rho_2 g(y_B - y_A)$. Essendo $\rho_1 \neq \rho_2$ e $g \neq 0$, l'unica possibilità è $y_B = y_A$: l'interfaccia è dunque a quota costante, cioè orizzontale.

**Paradosso idrostatico.** La pressione sul fondo di un recipiente dipende solo dalla profondità $h$ del liquido e non dalla forma del recipiente: recipienti di uguale base $A$, riempiti fino alla stessa altezza $h$ con lo stesso liquido, hanno sul fondo la stessa pressione $p = p_0 + \rho g h$, dove $p_0$ è la pressione esterna (per esempio quella atmosferica) che agisce anche sulla superficie libera del liquido. La forza totale esercitata dal liquido sul fondo è quindi $F = pA = (p_0 + \rho g h) A$. Se però si considera la forza netta, cioè la differenza fra la forza dovuta al liquido e quella che la pressione esterna $p_0$ eserciterebbe da sola sulla stessa area, si ottiene $F_{\text{netta}} = \rho g h A$, pari al peso di una colonna di liquido di base $A$ e altezza $h$. Questo valore è lo stesso nei tre recipienti, anche se il peso totale del liquido effettivamente contenuto differisce da un recipiente all'altro (la differenza è compensata dalla reazione normale delle pareti oblique).

**Vasi comunicanti.** In un sistema di vasi comunicanti riempiti con lo stesso liquido, la superficie libera raggiunge la medesima quota indipendentemente dalla forma dei recipienti, perché per la legge di Stevino la pressione dipende solo dalla quota. Se due liquidi non miscibili di densità $\rho_1$ e $\rho_2$ sono in equilibrio in due rami comunicanti con altezze $h_1$ e $h_2$ rispetto alla superficie di separazione, l'uguaglianza delle pressioni dà

$$
\rho_1 g h_1 = \rho_2 g h_2 \;\Longrightarrow\; \frac{\rho_1}{\rho_2} = \frac{h_2}{h_1}.
$$

il liquido più denso raggiunge l'altezza minore. Questo è anche il principio di funzionamento del manometro a tubo aperto, dove la differenza di quota $h$ fornisce la pressione differenziale $p_1 - p_0 = \rho g h$.

**Esempio svolto 11.1** (forza e momento su una parete verticale). Una parete verticale, larga $l = 5{,}0\ \text{m}$ e alta $h = 3{,}0\ \text{m}$, separa l'acqua ($\rho = 1{,}0\cdot 10^3\ \text{kg/m}^3$) dall'aria a pressione $p_0$. Si vuole calcolare la forza totale esercitata sulla parete e a quale altezza dal fondo bisogna applicare una forza esterna uguale e contraria perché la parete resti in equilibrio.

Schema: asse $z$ verticale, diretto verso il basso, con $z=0$ sulla superficie libera. Per la legge di Stevino, $p(z) = p_0 + \rho g z$.

Il contributo dell'acqua su una striscia orizzontale di spessore $dz$ e lunghezza $l$ è $dF = p(z)\,l\,dz$; integrando su tutta l'altezza:

$$
F_{\text{acqua}} = \int_0^h l\,(p_0 + \rho g z)\,dz = p_0 l h + \rho g l \frac{h^2}{2}.
$$

L'aria, dall'altro lato, esercita $F_{\text{aria}} = p_0 l h$. La forza netta sulla parete, somma algebrica delle due componenti, è dunque

$$

F_{\text{tot}} = F_{\text{acqua}} - F_{\text{aria}} = \rho g l \frac{h^2}{2}.
$$

Numericamente,

$$
F_{\text{tot}} = 1{,}0\cdot 10^3\ \text{kg/m}^3 \cdot 9{,}81\ \text{m/s}^2 \cdot 5{,}0\ \text{m}\cdot \frac{(3{,}0\ \text{m})^2}{2} \approx 2{,}2\cdot 10^5\ \text{N} = 221\ \text{kN}.
$$

Si noti che la forza cresce con il quadrato dell'altezza del liquido, non linearmente.

Per l'equilibrio statico della parete, oltre alla risultante serve il momento: scegliendo come polo il fondo della parete, il contributo netto di pressione su ciascuna striscia è $dF(z) = \rho g z\, l\, dz$ (la parte $p_0$ si elide tra acqua e aria), con braccio $(h-z)$:

$$
M_x^{\text{tot}} = \int_0^h (h-z)\,\rho g z\, l\, dz = l\rho g \frac{h^3}{6}.
$$

Per l'equilibrio secondo le [equazioni cardinali della statica del corpo rigido](ref:chapter/8#p6), occorre applicare una forza esterna $\vec{F}_{\text{ext}} = -\vec{F}_{\text{tot}}$ e un momento $M_x^{\text{ext}} = -M_x^{\text{tot}}$; equivalentemente, basta applicare $-F_{\text{tot}}$ a una distanza $d$ dal fondo tale che $M_x^{\text{tot}} = F_{\text{tot}}\,d$, da cui

$$
d = \frac{l\rho g h^3/6}{\rho g l h^2/2} = \frac{h}{3}.
$$

Il punto di applicazione effettivo della spinta idrostatica (centro di spinta) si trova quindi a un terzo dell'altezza dal fondo, non a metà altezza come si potrebbe erroneamente credere ragionando solo sulla pressione media.

:::image{src="assets/c1377d84-pressione-netta-parete-centro-spinta.svg" alt="Distribuzione triangolare della pressione netta con la profondità sulla parete, con il centro di spinta segnato a due terzi dell'altezza dalla superficie." caption="Fig. 11.2 — Pressione netta (acqua meno aria) sulla parete verticale dell'esempio, in funzione della profondità z dalla superficie libera: cresce linearmente da zero, e il centro di spinta, dove si può pensare applicata la forza risultante, si trova a z = 2h/3, cioè a h/3 dal fondo."}
:::

**Errore tipico 11.2.** Calcolare la forza su una superficie verticale come $p_{\text{media}}\cdot S$ senza poi verificare dove tale forza va effettivamente applicata: il punto di applicazione (centro di spinta) non coincide in generale con il centro geometrico della superficie, proprio perché la pressione non è uniforme.

### Principio di Archimede e galleggiamento

**Teorema 11.2** (principio di Archimede). Un corpo immerso in un fluido riceve una spinta verso l'alto pari al peso del fluido spostato.

**Dimostrazione.** Isoliamo idealmente, in un fluido in equilibrio sotto l'azione della gravità, un volume finito $V$ di forma qualsiasi, di massa $m = \rho V$ (con $\rho$ densità del fluido). Poiché quel volume di fluido è in equilibrio, la risultante delle forze di pressione esercitate su di esso dal fluido circostante, $\vec{F}_p$, deve bilanciare esattamente il suo peso:

$$
\vec{F}_p + m\vec{g} = 0 \;\Longrightarrow\; \vec{F}_p = -m\vec{g} = -\rho V \vec{g}.
$$

Sostituiamo ora, allo stesso volume $V$, un corpo di densità diversa $\rho'$ e massa $m' = \rho' V$: la risultante delle forze di pressione esercitate dal fluido circostante non cambia (dipende solo dalla configurazione del fluido esterno), mentre cambia il peso del corpo. La forza risultante sul corpo diventa quindi

$$
\vec{F}_r = \vec{F}_p + m'\vec{g} = (\rho' - \rho)\,V\,\vec{g}.
$$

Se $\rho' > \rho$ la forza risultante ha lo stesso verso di $\vec{g}$ e il corpo affonda; se $\rho' < \rho$ il corpo sale verso la superficie. La forza $\vec{F}_p$, indipendente dalla sostanza immersa e diretta verso l'alto, è la spinta di Archimede

:::formula{id="11.4" label="Spinta di Archimede"}
$$F_A = \rho\, V_{\text{imm}}\, g,$$
:::

dove $\rho$ è la densità del fluido e $V_{\text{imm}}$ il volume di fluido spostato dal corpo (il volume della parte immersa). Per un corpo completamente immerso, $V_{\text{imm}}$ coincide con il volume totale del corpo; per un corpo che galleggia, solo la parte sotto la superficie libera contribuisce.

Per un corpo omogeneo di densità $\rho_c$ che galleggia in equilibrio in un fluido di densità $\rho$, la spinta deve bilanciare esattamente il peso, $\rho\, V_{\text{imm}}\, g = \rho_c\, V_{\text{tot}}\, g$, da cui la frazione di volume immerso

$$
\frac{V_{\text{imm}}}{V_{\text{tot}}} = \frac{\rho_c}{\rho}.
$$

Per esempio, un pezzo di ghiaccio ($\rho_c \approx 920\ \text{kg/m}^3$) che galleggia in acqua ($\rho \approx 1000\ \text{kg/m}^3$) ha circa il 92% del proprio volume immerso sotto la superficie libera.

:::image{src="assets/c1377d84-ghiaccio-galleggiante.jpg" alt="Blocco di ghiaccio che galleggia in acqua con la maggior parte del volume sommersa." caption="Fig. 11.3 — Un pezzo di ghiaccio che galleggia in acqua: come previsto dal principio di Archimede, solo una piccola frazione del volume emerge, mentre circa il 92% resta immerso sotto la superficie libera. Foto: AlKalenski / Pixabay"}
:::

**Esempio svolto 11.2** (densità di un liquido tramite una molla). Una sfera di massa $m = 0{,}80\ \text{kg}$ e raggio $R = 4{,}1\ \text{cm}$ è appesa a una molla di costante elastica $k = 125\ \text{N/m}$. In aria, all'equilibrio, la molla si allunga di $\Delta z_0$ tale che $mg = k\Delta z_0$ (asse verticale, verso il basso positivo). Immergendo la sfera in un liquido, la posizione di equilibrio cambia di $\Delta z = 2{,}0\ \text{cm}$ rispetto al caso in aria; si vuole ricavare la densità del liquido.

Schema delle forze sulla sfera immersa: peso $mg$ (verso il basso), forza elastica $k(\Delta z_0 - \Delta z)$ (verso l'alto, poiché la molla si allunga meno a causa della spinta), spinta di Archimede $F_A = \rho_{\text{liq}} V g$ (verso l'alto), con $V = \frac{4}{3}\pi R^3$ volume della sfera.

La condizione di equilibrio con il liquido è

$$

mg - k(\Delta z_0 - \Delta z) - F_A = 0.
$$

Usando $mg = k\Delta z_0$ dal caso in aria, si ottiene $k\Delta z = F_A = \rho_{\text{liq}} V g$, da cui

$$
\rho_{\text{liq}} = \frac{k\,\Delta z}{V g} = \frac{k\,\Delta z}{\frac{4}{3}\pi R^3 g}.
$$

Numericamente, $V = \frac{4}{3}\pi(4{,}1\cdot 10^{-2}\ \text{m})^3 \approx 2{,}89\cdot 10^{-4}\ \text{m}^3$, e

$$
\rho_{\text{liq}} = \frac{125\ \text{N/m}\cdot 2{,}0\cdot 10^{-2}\ \text{m}}{2{,}89\cdot 10^{-4}\ \text{m}^3 \cdot 9{,}81\ \text{m/s}^2} \approx 8{,}8\cdot 10^2\ \text{kg/m}^3,
$$

un valore plausibile per un liquido meno denso dell'acqua (per esempio un olio). Il controllo dimensionale è immediato: $\lbrack \text{N/m}\cdot\text{m}\rbrack /\lbrack \text{m}^3\cdot\text{m/s}^2\rbrack  = \lbrack \text{kg/m}^3\rbrack $.

**Errore tipico 11.3.** Dimenticare che, con il corpo immerso, il nuovo allungamento della molla non è più $mg/k$: occorre scrivere di nuovo l'equilibrio delle tre forze (peso, forza elastica, spinta di Archimede) e non limitarsi a sottrarre la spinta dal peso senza passare per l'equazione di equilibrio completa. Un secondo errore frequente è usare per $V$ il volume totale del corpo anche quando questo galleggia solo parzialmente, invece del volume della sola parte immersa, che è l'unico a determinare la spinta di Archimede.

## p3 | Fluidodinamica

La sezione precedente ha trattato i fluidi in quiete; qui ci occupiamo dei fluidi in movimento, che è il caso di maggior interesse applicativo (condotte, vasi sanguigni, ali di aeroplano). Per rendere trattabile il problema si introducono due ipotesi semplificative che definiscono il modello di **fluido ideale**.

### Fluido ideale e regime stazionario

**Definizione 11.3** (fluido ideale). Un fluido si dice ideale se ha viscosità nulla ($\eta = 0$, cioè non c'è attrito interno fra gli strati di fluido) e densità costante $\rho = \text{costante}$ (cioè è incompressibile). Si tratta di un modello limite: in un fluido reale si ha sempre $\eta \neq 0$, e la viscosità viene trattata separatamente nella sezione su [viscosità e regimi di flusso](ref:chapter/11#p4).

Per descrivere il moto si usa la rappresentazione euleriana: si fissa l'attenzione su un punto $P$ dello spazio e si studia la velocità $\vec v$ delle particelle di fluido che transitano per $P$ in funzione del tempo. Si dice che il moto è in **regime stazionario** se la velocità, pur potendo variare da punto a punto, non dipende dal tempo in nessun punto fissato: tutti gli elementi di fluido che passano per $P$ in istanti diversi hanno lì sempre la stessa velocità, cioè $\vec v = \vec v(x,y,z)$.

In regime stazionario si possono tracciare le **linee di corrente**, linee tangenti in ogni punto alla velocità locale del fluido; esse coincidono con le traiettorie delle particelle e la loro configurazione resta fissa nel tempo (in regime variabile questo non è più vero). L'insieme delle linee di corrente che si appoggiano a una curva chiusa definisce un **tubo di flusso**: per costruzione la velocità sulla superficie laterale del tubo è tangente ad essa, quindi nessuna particella di fluido può attraversarla, né entrando né uscendo lateralmente.

### Portata e equazione di continuità

**Definizione 11.4** (portata). Si consideri una sezione infinitesima $dS$ di un tubo di flusso, ortogonale alle linee di corrente, dove il fluido ha velocità (in modulo) $v$. La portata del tubo attraverso $dS$ è

:::formula{id="11.5" label="Portata di un tubo di flusso"}
$$dQ_v = v\, dS$$
:::

e rappresenta il volume di fluido che attraversa $dS$ nell'unità di tempo; si misura quindi in $\mathrm{m^3/s}$. La portata totale $Q_v$ attraverso una sezione finita si ottiene sommando i contributi infinitesimi $dQ_v$.

**Teorema 11.3** (equazione di continuità, o di Leonardo). Si consideri un tubo di flusso di un fluido ideale (incompressibile, densità costante) in regime stazionario. Allora la portata è la stessa in ogni sezione del tubo:

:::formula{id="11.6" label="Equazione di continuità"}
$$Q_v = v_1 S_1 = v_2 S_2 = \text{costante}$$
:::

dove $v_1, v_2$ sono le velocità medie e $S_1, S_2$ le aree di due sezioni qualunque del tubo; $Q_v$ è la portata volumica totale.

La dimostrazione si basa su un bilancio di massa: tra due sezioni $S_1$ e $S_2$ fissate, per il regime stazionario il fluido può entrare e uscire solo attraverso le due sezioni (non attraverso la superficie laterale), e per l'incomprimibilità non può accumularsi né rarefarsi all'interno del tubo. In un intervallo $\Delta t$ il volume entrante da $S_1$ deve quindi uguagliare quello uscente da $S_2$:

$$S_1\,\Delta l_1 = S_2\,\Delta l_2 \quad\Longrightarrow\quad S_1 v_1 = S_2 v_2$$

avendo diviso per $\Delta t$ e usato $\Delta l_i = v_i \Delta t$.

Dall'equazione di continuità segue la conseguenza qualitativa più usata nelle applicazioni: dove la sezione del tubo diminuisce la velocità aumenta, e dove la sezione aumenta la velocità diminuisce.

:::image{src="assets/c9687187-continuita-velocita-sezione.svg" alt="Curva iperbolica v=Q/S che decresce al crescere di S" caption="Fig. 11.4 — Velocità v in funzione della sezione S a portata Q costante (equazione di continuità): dove la sezione diminuisce la velocità aumenta, e viceversa."}
:::

### Teorema di Bernoulli

Vogliamo ora legare la velocità del fluido alla pressione e alla quota. Consideriamo un fluido ideale che scorre in regime stazionario lungo un tubo di sezione variabile e non necessariamente orizzontale. Applichiamo il [teorema dell'energia cinetica](ref:chapter/4#p3) al volume di controllo compreso fra le sezioni $S_1$ (quota $y_1$, velocità $v_1$) e $S_2$ (quota $y_2$, velocità $v_2$). In un intervallo di tempo $\Delta t$, una massa $\Delta m$ entra attraverso $S_1$ e una massa uguale esce attraverso $S_2$; in regime stazionario il volume di controllo non accumula massa.

Per l'incomprimibilità, il volume entrante e quello uscente sono uguali: $\Delta V = S_1 \Delta l_1 = S_2 \Delta l_2$, dove $\Delta l_i = v_i \Delta t$. La massa che attraversa ciascuna sezione durante $\Delta t$ è quindi $\Delta m = \rho\,\Delta V$.

Le forze che compiono lavoro sul fluido mentre attraversa il volume di controllo sono il peso della massa entrante e uscente e le forze di pressione esercitate dal resto del fluido sulle due sezioni. Il lavoro netto della forza peso è

$$W_g = -\Delta m\, g\,(y_2 - y_1)$$

mentre il lavoro delle forze di pressione, agenti con verso opposto alle due estremità, vale

$$W_p = p_1 S_1 \Delta l_1 - p_2 S_2 \Delta l_2 = (p_1 - p_2)\,\Delta V$$

(la viscosità è nulla per ipotesi, quindi non ci sono altre forze dissipative). Il teorema dell'energia cinetica dà $\Delta E_k = W_p + W_g$, cioè

$$\frac12 \Delta m\, v_2^2 - \frac12 \Delta m\, v_1^2 = (p_1-p_2)\,\Delta V - \Delta m\, g\,(y_2-y_1)$$

Sostituendo $\Delta m = \rho\, \Delta V$ e dividendo per $\Delta V$ si ottiene $p_1 + \rho g y_1 + \tfrac12 \rho v_1^2 = p_2 + \rho g y_2 + \tfrac12 \rho v_2^2$, cioè l'enunciato seguente.

**Teorema 11.4** (di Bernoulli). Sia un fluido ideale (incompressibile, non viscoso, $\eta = 0$) in moto in regime stazionario lungo un tubo di flusso, sottoposto alla sola forza peso (assunta uniforme) e privo di pompe, turbine o altri dispositivi che aggiungano o sottraggano energia al flusso. Allora lungo ogni tubo di flusso vale

:::formula{id="11.7" label="Teorema di Bernoulli"}
$$p + \rho g y + \frac12 \rho v^2 = \text{costante}$$
:::

ossia la somma di pressione, densità di energia potenziale gravitazionale ($\rho g y$) e densità di energia cinetica ($\tfrac12 \rho v^2$) è costante lungo il condotto.

Se il condotto è orizzontale ($y = \text{costante}$) la relazione si riduce a $p + \tfrac12 \rho v^2 = \text{costante}$, cosicché, confrontando due sezioni, a un aumento di velocità corrisponde necessariamente una diminuzione di pressione. Se invece il fluido è fermo ($v=0$ ovunque) il teorema di Bernoulli si riduce alla legge di Stevino già vista nella sezione sulla [statica dei fluidi](ref:chapter/11#p2): $p + \rho g y = \text{costante}$.

:::image{src="assets/c9687187-bernoulli-pressione-velocita-orizzontale.svg" alt="Retta decrescente di p in funzione di v al quadrato" caption="Fig. 11.5 — Pressione p in funzione della velocità v in un condotto orizzontale secondo il teorema di Bernoulli: a velocità maggiore corrisponde pressione minore."}
:::

Questa versione orizzontale è alla base del **venturimetro**, uno strumento che misura la velocità di un fluido incomprimibile da un restringimento di sezione: applicando contemporaneamente l'equazione di continuità $A_1 v_1 = A_2 v_2$ e il teorema di Bernoulli $p_1 + \tfrac12\rho v_1^2 = p_2 + \tfrac12\rho v_2^2$ fra una sezione larga ($A_1$) e una stretta ($A_2 < A_1$), e misurando con un manometro il salto di pressione $\Delta p = p_1 - p_2$ (positivo, poiché nella sezione stretta la velocità è maggiore e la pressione minore), si ricava

$$v_1 = \frac{A_2}{\sqrt{A_1^2 - A_2^2}}\sqrt{\frac{2\,\Delta p}{\rho}}$$

. Un principio analogo, basato sul confronto fra un punto in cui il fluido scorre a velocità $v_a$ e un punto di ristagno in cui la velocità è nulla, è usato nel tubo di Pitot per misurare la velocità dei gas.

### Teorema di Torricelli

Una delle applicazioni più importanti del teorema di Bernoulli riguarda lo svuotamento di un serbatoio.

**Teorema 11.5** (di Torricelli). Si consideri un serbatoio aperto all'atmosfera, pieno di liquido ideale fino a una quota $y_a$, con un piccolo foro a quota $y_b$, con $h = y_a - y_b$ e sezione del foro trascurabile rispetto alla sezione del recipiente. Allora il liquido fuoriesce dal foro con velocità

:::formula{id="11.8" label="Teorema di Torricelli"}
$$v_b = \sqrt{2gh}$$
:::

cioè con la stessa velocità che avrebbe un corpo in caduta libera da un'altezza $h$.

Per la dimostrazione si applica il teorema di Bernoulli fra il punto $a$ sulla superficie libera e il punto $b$ al foro: $p_a + \rho g y_a + \tfrac12 \rho v_a^2 = p_b + \rho g y_b + \tfrac12 \rho v_b^2$. Poiché la sezione del recipiente è molto maggiore di quella del foro, per l'equazione di continuità $v_a \ll v_b$ e si pone $v_a \approx 0$; inoltre entrambi i punti $a$ e $b$ sono in comunicazione con l'atmosfera, quindi $p_a = p_b = p_{\text{atm}}$ e questi termini si elidono. Resta $g y_a = g y_b + \tfrac12 v_b^2$, da cui $v_b = \sqrt{2g(y_a-y_b)} = \sqrt{2gh}$. Si noti che la velocità di efflusso non dipende né dalla densità del liquido né dalla pressione iniziale, ma solo dalla profondità $h$ del foro rispetto al pelo libero.

**Esempio 11.3.** Un grande serbatoio cilindrico, aperto in alto, contiene acqua ($\rho = 1,0\cdot 10^3$ kg/m³) fino a un'altezza di $2,0$ m sopra un piccolo foro praticato sulla parete laterale. Calcolare la velocità di efflusso dell'acqua e la portata se il foro ha area $S_f = 1,0\,\mathrm{cm^2} = 1,0\cdot 10^{-4}\,\mathrm{m^2}$.

Dati: $h = 2,0$ m, $S_f = 1,0\cdot 10^{-4}\,\mathrm{m^2}$, $g = 9,81\,\mathrm{m/s^2}$.

Schema: serbatoio con superficie libera a quota $y_a$, foro a quota $y_b = y_a - h$; entrambi i punti a pressione atmosferica, sezione del serbatoio $\gg S_f$ così che $v_a \approx 0$.

Per {{formula:11.8}}:

$$v_b = \sqrt{2gh} = \sqrt{2 \cdot 9,81\,\mathrm{m/s^2}\cdot 2,0\,\mathrm{m}} = \sqrt{39,2\,\mathrm{m^2/s^2}} \approx 6,3\,\mathrm{m/s}$$

:::image{src="assets/c9687187-torricelli-velocita-altezza.svg" alt="Curva v_b = radice di 2gh crescente con h, con punto evidenziato a h=2m, v=6,3 m/s" caption="Fig. 11.6 — Velocità di efflusso v_b in funzione dell'altezza h del pelo libero sopra il foro, secondo il teorema di Torricelli; il punto segnato corrisponde all'esempio con h = 2,0 m."}
:::

La portata volumica attraverso il foro, per {{formula:11.5}}, vale

$$Q_v = v_b\, S_f = 6,3\,\mathrm{m/s} \cdot 1,0\cdot 10^{-4}\,\mathrm{m^2} \approx 6,3\cdot 10^{-4}\,\mathrm{m^3/s}$$

Controllo: le unità tornano ($\sqrt{(\mathrm{m/s^2})(\mathrm{m})} = \mathrm{m/s}$, e $\mathrm{m/s}\cdot\mathrm{m^2} = \mathrm{m^3/s}$); l'ordine di grandezza è ragionevole per un foro piccolo a due metri di profondità, e la velocità coincide con quella di un grave caduto da 2,0 m, come previsto dal teorema.

**Errore tipico 11.4**. Applicare il teorema di Bernoulli, e con esso il teorema di Torricelli, a fluidi reali con viscosità apprezzabile senza verificarne la validità: entrambi i risultati valgono solo per il modello di fluido ideale ($\eta = 0$); in presenza di attrito interno significativo compaiono perdite di carico che riducono la velocità di efflusso rispetto al valore $\sqrt{2gh}$, come si vedrà nella sezione su [viscosità e regimi di flusso](ref:chapter/11#p4). Un secondo errore frequente è confondere il ruolo di sezione e velocità nell'equazione di continuità, scrivendo $v_1 S_1 = v_2 S_2$ ma poi applicando il risultato con sezione e velocità proporzionali invece che inversamente proporzionali. Un terzo errore è dimenticare che, nell'applicazione del teorema di Torricelli, l'approssimazione $v_a \approx 0$ richiede esplicitamente che la sezione del serbatoio sia molto maggiore di quella del foro: se le due sezioni sono confrontabili occorre tenere entrambe le velocità nell'equazione di Bernoulli, accoppiandola con l'equazione di continuità.

## p4 | Viscosità e regimi di flusso

Finché un fluido viene trattato come ideale (densità costante, nessuna dissipazione), il teorema di Bernoulli descrive correttamente il moto, come visto per il [teorema di Torricelli](ref:chapter/11#p3). Un fluido reale, però, dissipa energia meccanica per attrito interno fra gli strati che scorrono a velocità diverse: questa sezione introduce la viscosità, la legge di Hagen-Poiseuille per il moto laminare in un condotto, e il numero di Reynolds come criterio per distinguere moto laminare e moto turbolento.

### Attrito interno e viscosità

Quando due elementi adiacenti di un fluido scorrono l'uno rispetto all'altro, lungo la superficie di contatto compare una forza tangenziale, detta forza di attrito interno, con verso sempre opposto a quello della velocità relativa; per il terzo principio della dinamica, l'elemento 1 esercita sull'elemento 2 una forza uguale e contraria a quella che l'elemento 2 esercita su 1.

Per i fluidi newtoniani, sperimentalmente si trova che il modulo di questa forza è proporzionale all'area di contatto $dS$ e al valore assoluto del gradiente della velocità in direzione ortogonale a tale area

:::formula{id="11.9" label="Forza di attrito interno"}
$$dF = \eta\, dS\, \left|\frac{dv}{dn}\right|$$
:::

dove il coefficiente $\eta$ è detto viscosità (o coefficiente di viscosità) del fluido, e dipende dal tipo di fluido e dalla sua temperatura: nei liquidi $\eta$ decresce all'aumentare della temperatura, nei gas invece cresce.

Si definisce fluido ideale un fluido con $\eta = 0$ e densità costante, cioè non viscoso e incompressibile; un fluido reale ha sempre $\eta \neq 0$, e il fluido ideale va inteso come caso limite utile per i modelli semplificati (Bernoulli, Torricelli) già discussi in [Fluidodinamica](ref:chapter/11#p3).

Quando un corpo si muove immerso in un fluido (non lungo un condotto) in regime di moto viscoso lento, cioè a numero di Reynolds basso, subisce una forza di attrito viscoso proporzionale alla velocità, [formula (3.17)](ref:formula/3.17), con il coefficiente geometrico $\gamma$ che dipende dalla forma del corpo e $\eta$ la viscosità del fluido. Questa legge lineare, già incontrata in [Forze di attrito](ref:chapter/3#p5), è all'origine dei moti smorzati esponenzialmente ([formula (3.18)](ref:formula/3.18), [formula (3.19)](ref:formula/3.19)) e del fatto che in presenza di sola forza viscosa non esiste equilibrio statico, poiché per $v=0$ la forza si annulla; a numero di Reynolds non basso, come si vedrà più avanti in questa sezione, la resistenza del mezzo non è più lineare nella velocità.

### Moto laminare e legge di Hagen-Poiseuille

Il moto di un fluido in un condotto si dice laminare quando gli strati di fluido scorrono in modo ordinato, l'uno dentro l'altro, senza mescolarsi né formare vortici; in generale tale regime può variare nel tempo. Il profilo di velocità e la legge di Hagen-Poiseuille che seguono si ricavano assumendo inoltre che il regime sia stazionario e completamente sviluppato in un condotto cilindrico rettilineo di raggio $R$ e lunghezza $l$, con fluido newtoniano che aderisce alle pareti, cioè a velocità nulla a contatto con esse. Sotto queste ipotesi, il fluido a contatto con le pareti è fermo, mentre la velocità cresce avvicinandosi all'asse, dando luogo a strati cilindrici concentrici che scorrono l'uno dentro l'altro.

:::formula{id="11.10" label="Profilo di velocità nel moto laminare"}
$$v(r) = \frac{p_1 - p_2}{4\eta l}\left(R^2 - r^2\right)$$
:::

da cui la velocità massima sull'asse, $v_{max} = \dfrac{p_1-p_2}{4\eta l}R^2$, e la velocità nulla alle pareti ($r=R$). Se il condotto non è orizzontale, al posto di $p_1-p_2$ va usata la differenza di pressione corretta per la quota, cioè $(p_1-p_2) - \rho g (z_2-z_1)$ con $z_1,z_2$ le quote delle due sezioni, in modo da tenere conto anche del contributo idrostatico del peso del fluido.

:::image{src="assets/0033b32f-profilo-velocita-laminare.svg" alt="Grafico a campana della velocità in funzione della distanza dall'asse del condotto, nulla ai bordi e massima al centro" caption="Fig. 11.7 — Profilo di velocità v(r) nel moto laminare in un condotto cilindrico: è massimo sull'asse (r=0) e si annulla alle pareti (r=R)."}
:::

Integrando il profilo su tutta la sezione si ottiene la portata, data dalla legge di Hagen-Poiseuille

:::formula{id="11.11" label="Legge di Hagen-Poiseuille"}
$$q = \frac{\pi R^4}{8\eta}\frac{p_1-p_2}{l}$$
:::

Ponendo $q = \pi R^2 v_m$, con $v_m$ velocità media sulla sezione, si ricava $\dfrac{p_1-p_2}{l} = \dfrac{8\eta}{R^2}v_m$: nel regime laminare portata, velocità media e velocità dei singoli strati sono quindi direttamente proporzionali al gradiente di pressione lungo il condotto. Per mantenere il flusso è sempre necessaria una differenza di pressione che vinca la resistenza dovuta all'attrito interno, anche in un condotto orizzontale a sezione costante, dove nel caso ideale non ne occorrerebbe alcuna.

### Numero di Reynolds e regimi di flusso

La legge di Hagen-Poiseuille vale finché il moto resta effettivamente laminare, condizione legata alle ipotesi sul moto nel condotto e non al solo valore del raggio: anche in un condotto molto stretto, una differenza di pressione sufficientemente grande può portare il numero di Reynolds oltre la soglia del regime laminare. Per raggi maggiori, in particolare, esiste una velocità critica oltre la quale compaiono vortici nel tubo e il moto non è più laminare. Reynolds ha mostrato che la transizione dal regime laminare a quello vorticoso (turbolento) è governata, in ogni caso, dal parametro adimensionale

:::formula{id="11.12" label="Numero di Reynolds"}
$$Re = \frac{\rho\,v\,R}{\eta}$$
:::

dove $\rho$ è la densità del fluido, $v$ la velocità media del fluido sulla sezione del condotto e $R$ il raggio del condotto; per un condotto cilindrico, con questa definizione di $Re$, sperimentalmente si osserva che il moto diventa turbolento quando $Re$ supera circa $1200$. Per questo motivo il numero di Reynolds va sempre verificato prima di applicare la legge di Hagen-Poiseuille, anche quando il raggio del condotto è piccolo. Nel caso di un corpo immerso in una corrente, $Re$ si definisce con la velocità caratteristica del moto relativo e una lunghezza caratteristica del corpo, ma non esiste una soglia universale analoga a quella del condotto cilindrico: il valore critico dipende dalla forma del corpo e dal tipo di flusso.

Per un corpo (ad esempio sferico) immerso in una corrente, se il fluido fosse ideale le linee di flusso sarebbero perfettamente simmetriche a monte e a valle e la risultante delle forze di pressione sarebbe nulla: è il cosiddetto paradosso di D'Alembert. Nei regimi a numero di Reynolds non basso, in cui il flusso si separa dal corpo, in un fluido reale si forma invece a valle una scia vorticosa, dove la pressione è minore che a monte, e questo squilibrio genera una forza che trascina il corpo. In questi regimi un modello efficace per la resistenza del mezzo è la legge quadratica

:::formula{id="11.13" label="Resistenza del mezzo"}
$$F_{res} = \frac{1}{2}c\,S\,\rho\,v^2$$
:::

con $c$ coefficiente adimensionale che dipende dalla forma del corpo (soprattutto dalla sua parte posteriore) e, in generale, anche dal regime di flusso, cioè dal numero di Reynolds del moto, e $\rho$ la densità del fluido. Per una sfera a bassa velocità, cioè nel regime di moto viscoso lento già descritto, vale invece la legge lineare di Stokes

:::formula{id="11.14" label="Legge di Stokes"}
$$F_{res} = 6\pi\eta R v$$
:::

che è, in quel regime, la forma esplicita della forza di attrito viscoso.

:::image{src="assets/0033b32f-resistenza-lineare-quadratica.svg" alt="Due curve della forza resistente in funzione della velocità, una retta e una parabola che cresce più rapidamente" caption="Fig. 11.8 — Confronto qualitativo tra la resistenza del mezzo lineare nella velocità, legge di Stokes nel regime di moto viscoso lento, e quella quadratica nella velocità, valida a numero di Reynolds non basso."}
:::

### Esempio: portata in un condotto e verifica del regime

Un condotto orizzontale a sezione circolare di raggio $R = 5,0\ \text{mm}$ e lunghezza $l = 2,0\ \text{m}$ è percorso da acqua ($\rho = 1,0\cdot10^3\ \text{kg/m}^3$, $\eta = 1,0\cdot10^{-3}\ \text{Pa}\cdot\text{s}$) sotto una differenza di pressione $p_1-p_2 = 500\ \text{Pa}$. Si chiede la portata $q$, la velocità media $v_m$ e se il moto è effettivamente laminare.

Applicando {{formula:11.11}}

$$q = \frac{\pi R^4}{8\eta}\frac{p_1-p_2}{l} = \frac{\pi (5,0\cdot10^{-3}\ \text{m})^4}{8\cdot 1,0\cdot10^{-3}\ \text{Pa}\cdot\text{s}}\cdot\frac{500\ \text{Pa}}{2,0\ \text{m}} \approx 6,1\cdot10^{-5}\ \text{m}^3/\text{s}$$

Dalla relazione $q = \pi R^2 v_m$ si ottiene

$$v_m = \frac{q}{\pi R^2} = \frac{6,1\cdot10^{-5}\ \text{m}^3/\text{s}}{\pi(5,0\cdot10^{-3}\ \text{m})^2} \approx 0,78\ \text{m/s}$$

Verifichiamo ora il regime con {{formula:11.12}}, usando $v_m$ come velocità caratteristica

$$Re = \frac{\rho\, v_m\, R}{\eta} = \frac{1,0\cdot10^3\ \text{kg/m}^3 \cdot 0,78\ \text{m/s}\cdot 5,0\cdot10^{-3}\ \text{m}}{1,0\cdot10^{-3}\ \text{Pa}\cdot\text{s}} \approx 3,9\cdot10^3$$

Poiché $Re \approx 3900 > 1200$, il moto non è laminare: l'ipotesi alla base della legge di Hagen-Poiseuille non è verificata, e il risultato per $q$ va considerato solo indicativo, perché in regime turbolento la portata non è più proporzionale al gradiente di pressione. Il controllo del numero di Reynolds a posteriori è quindi un passo obbligato ogni volta che si usa la legge di Hagen-Poiseuille.

**Errore tipico 11.5**

Uno sbaglio frequente è applicare la legge di Hagen-Poiseuille a un condotto senza verificare il numero di Reynolds: la formula per $q$ resta valida solo se il moto è effettivamente laminare, condizione che va sempre controllata tramite il numero di Reynolds, anche per raggi molto piccoli, poiché una differenza di pressione sufficientemente grande può portare il moto in regime turbolento pure in un condotto stretto. Un secondo errore è dimenticare che, in presenza di attrito viscoso, il lavoro delle forze dissipative va introdotto con il segno negativo nel teorema dell'energia meccanica (non nel principio di conservazione, che non si applica), come già segnalato in [Forza elastica](ref:chapter/3#p6) e in [Forze di attrito](ref:chapter/3#p5): trascurare questo segno porta a concludere erroneamente che l'energia meccanica si conservi.
