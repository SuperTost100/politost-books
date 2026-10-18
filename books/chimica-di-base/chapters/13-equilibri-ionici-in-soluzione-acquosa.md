---
chapter: 13
title: Equilibri ionici in soluzione acquosa
---

## p1 | Introduzione

Gli equilibri acido-base e di solubilità determinano la composizione di molte soluzioni acquose: spiegano perché una soluzione è acida o basica, come resiste alle variazioni di pH e quando si forma un precipitato. Saperli interpretare aiuta a comprendere fenomeni e procedure di laboratorio, dalle titolazioni alla separazione selettiva degli ioni.

Per affrontare il capitolo occorre conoscere l’equilibrio chimico e il legame chimico. Servono inoltre familiarità con formule e cariche degli ioni, concentrazioni molari e calcoli con potenze e logaritmi. Queste basi permettono di seguire il trasferimento di protoni, riconoscere le specie coinvolte e usare le costanti di equilibrio.

Al termine saprai applicare le teorie di Arrhenius, Brønsted-Lowry e Lewis, individuare coppie coniugate e confrontare la forza di acidi e basi. Potrai calcolare il pH di soluzioni di acidi, basi e sali, valutare le soluzioni tampone e interpretare le diverse fasi di una titolazione, scegliendo un indicatore adatto. Saprai anche mettere in relazione solubilità e prodotto di solubilità, prevedere se una precipitazione avviene e spiegare come ione comune e pH influenzano la dissoluzione o la precipitazione.

## p2 | Teorie acido-base e forza degli acidi

Le reazioni di neutralizzazione sono già state introdotte, dal punto di vista stechiometrico, nella sezione su [reazioni acido-base e neutralizzazione](ref:chapter/5#p4). Prima di affrontare il calcolo quantitativo del pH, occorre però fissare con precisione cosa si intenda per acido e per base: nella storia della chimica sono state proposte tre definizioni via via più generali, che qui vengono esaminate nell'ordine in cui sono comparse.

### La teoria di Arrhenius

**Definizione 13.1** (acido e base di Arrhenius). Un **acido** è una sostanza che contiene H nella sua formula e si dissocia in acqua producendo ioni $H_3O^+_{(aq)}$; una **base** è una sostanza che contiene OH nella sua formula e si dissocia in acqua producendo ioni $OH^-_{(aq)}$.

Si noti un'asimmetria importante: le basi di Arrhenius sono composti ionici che semplicemente si dissociano quando entrano in acqua, mentre gli acidi di Arrhenius sono composti covalenti che devono reagire con l'acqua per liberare il protone sotto forma di ione idronio; per questo, a rigore, si dovrebbe parlare di "dissociazione" per le basi e di "ionizzazione" per gli acidi, anche se nell'uso corrente il termine "dissociazione" viene impiegato per entrambi. Quando un acido e una base di Arrhenius reagiscono, lo ione $H_3O^+$ proveniente dall'acido e lo ione $OH^-$ proveniente dalla base si combinano per dare acqua: è questa la reazione di neutralizzazione.

La teoria di Arrhenius, storicamente la prima, ha però un limite evidente: non riesce a spiegare perché sostanze prive di OH nella formula, come l'ammoniaca NH$_3$, si comportino comunque da basi in acqua. Serve quindi una definizione più generale.

### La teoria di Brønsted-Lowry

**Definizione 13.2** (acido e base di Brønsted-Lowry). Un **acido** è qualsiasi specie in grado di donare un protone $H^+$; una **base** è qualsiasi specie in grado di accettare un protone $H^+$ ceduto da un acido. Spesso la base dispone di una coppia solitaria di elettroni con cui formare il nuovo legame con il protone, ma questo non è un requisito assoluto: alcune basi possono accettare il protone anche utilizzando gli elettroni di un legame $\pi$.

Questa definizione svincola il comportamento acido-base dalla presenza obbligatoria di H o di OH nella formula: ogni acido di Arrhenius è anche un acido di Brønsted-Lowry, ma esistono basi di Brønsted-Lowry (come NH$_3$, $CO_3^{2-}$, $F^-$) che non sono basi di Arrhenius, pur essendo OH$^-$ sempre una base di Brønsted-Lowry oltre che di Arrhenius. Una reazione acido-base, in questa teoria, richiede sempre la copresenza di una specie che doni il protone e di una che lo accetti, e questo può avvenire in fase gassosa, in soluzione acquosa, in solventi non acquosi o in miscele eterogenee, non solo in acqua.

Un punto concettuale da tenere a mente è che il protone $H^+$ non può esistere isolato in soluzione: è estremamente instabile e reattivo, e passa sempre direttamente da un acido a una base durante la reazione; per questo un acido può manifestarsi come tale solo in presenza di una base che accetti il protone, e viceversa.

Quando un acido si sciogliere in acqua, è l'acqua stessa a comportarsi da base accettando il protone:
$$HCl_{(aq)} + H_2O_{(l)} \to Cl^-{}_{(aq)} + H_3O^+{}_{(aq)}$$
quando invece è una base a sciogliersi in acqua, è l'acqua a comportarsi da acido donando il protone:
$$NH_{3(aq)} + H_2O_{(l)} \rightleftharpoons NH_4^+{}_{(aq)} + OH^-{}_{(aq)}$$
L'acqua è dunque una **specie anfotera**, perché può comportarsi sia da acido sia da base secondo la specie con cui reagisce.

**Coppie coniugate.** Una reazione acido-base di Brønsted-Lowry si scrive in generale nella forma

$$
\text{Acido}_1 + \text{Base}_2 \rightleftharpoons \text{Base}_1 + \text{Acido}_2
$$

dove Acido$_1$ e Base$_1$ costituiscono una **coppia coniugata**: ogni acido ha una base coniugata e ogni base ha un acido coniugato. Le regole di struttura sono fisse: la base coniugata di un acido ha un H in meno e una carica negativa in più rispetto all'acido (per esempio Cl$^-$ è la base coniugata di HCl), mentre l'acido coniugato di una base ha un H in più e una carica negativa in meno rispetto alla base (per esempio $NH_4^+$ è l'acido coniugato di $NH_3$). Acidi e basi, in questa visione, possono essere specie neutre, cationi o anioni, e la stessa specie può comportarsi da acido o da base secondo il partner di reazione.

**Errore tipico 13.1.** Confondere coppia coniugata con coppia di reagenti opposti: in Acido$_1$ + Base$_2 \rightleftharpoons$ Base$_1$ + Acido$_2$, Acido$_1$ e Base$_1$ sono coniugati tra loro (stessa "ossatura" molecolare, differiscono per un protone), non Acido$_1$ e Base$_2$ che sono invece le due specie di partenza.

**Direzione della reazione e forza relativa.** La direzione netta di una reazione acido-base dipende dalle forze relative degli acidi e delle basi coinvolti: la reazione procede prevalentemente nel verso in cui un acido più forte e una base più forte formano un acido più debole e una base più debole. Vale inoltre la regola generale che un acido più debole ha una base coniugata più forte, e viceversa. Per esempio, nella reazione

$$
HF_{(aq)} + H_2O_{(l)} \rightleftharpoons H_3O^+{}_{(aq)} + F^-{}_{(aq)}
$$

HF è un acido più debole di $H_3O^+$ e $H_2O$ è una base più debole di $F^-$: l'equilibrio è quindi spostato verso sinistra. Al contrario, in

$$
HNO_{3(aq)} + H_2O_{(l)} \rightleftharpoons H_3O^+{}_{(aq)} + NO_3^-{}_{(aq)}
$$

HNO$_3$ è un acido più forte di $H_3O^+$ e $H_2O$ una base più forte di $NO_3^-$: l'equilibrio è spostato praticamente del tutto verso destra, il che è coerente con il fatto che HNO$_3$ è un acido forte. In sostanza, la dissociazione di un acido HA in acqua si può vedere come una competizione tra le basi A$^-$ e $H_2O$ per il protone: se A$^-$ è una base molto più debole di $H_2O$, allora $H_2O$ "vince" e l'acido si dissocia quasi completamente (acido forte); se A$^-$ compete efficacemente con $H_2O$, la dissociazione resta parziale (acido debole).

### La teoria di Lewis

**Definizione 13.3** (acido e base di Lewis). Un **acido di Lewis** è una specie che accetta una coppia di elettroni; una **base di Lewis** è una specie che dona una coppia di elettroni.

Questa è la definizione più generale delle tre: non richiede né la presenza di H nella formula né il trasferimento di un protone, ma solo la formazione di un nuovo legame covalente dativo tra chi dona e chi accetta la coppia elettronica. Il prodotto di una reazione acido-base di Lewis si chiama **addotto**: una singola specie che contiene il nuovo legame,

$$
A + :B \rightleftharpoons A\!-\!B.
$$

$$
A + :B \rightleftharpoons A\!-\!B.
$$

Un esempio tipico è la reazione tra un protone e l'ammoniaca,

$$
NH_3 + H^+ \to NH_4^+
$$

in cui NH$_3$ dona la coppia di elettroni solitaria dell'azoto (base di Lewis) e H$^+$ la accetta (acido di Lewis); questa stessa reazione, letta come trasferimento di protone, è anche una reazione acido-base di Brønsted-Lowry, a conferma che la teoria di Lewis non contraddice le precedenti ma le inquadra in un contesto più ampio. La teoria di Lewis permette di classificare come acidi anche specie prive di H, come BF$_3$ o i cationi metallici, cosa impossibile con le due teorie precedenti; questo collegamento con il legame covalente dativo è già stato anticipato nella sezione su [legame covalente e strutture di Lewis](ref:chapter/9#p3).

:::image{src="assets/6bdeb43f-bf3-acido-lewis.svg" alt="Struttura di Lewis del trifluoruro di boro con il boro circondato da tre legami B-F e nessuna coppia solitaria sul boro (BF3)" caption="Fig. 13.1 — Trifluoruro di boro BF3: il boro ha solo sei elettroni di valenza e un orbitale vuoto, che lo rende un acido di Lewis capace di accettare una coppia elettronica pur non contenendo H nella formula"}
:::

### Forza degli acidi e struttura molecolare

La forza di un acido dipende dalla sua capacità di donare un protone, che a livello molecolare è determinata dalla forza del legame tra l'elemento e il protone acido: legame debole significa rilascio facile del protone, quindi acido forte. Questo principio generale si traduce in criteri strutturali diversi per idracidi e ossiacidi.

**Idracidi (H–E).** Per gli idracidi, la facilità di rilascio del protone dipende dall'elettronegatività di E e dalla forza del legame H–E, con due andamenti periodici distinti:

- lungo un periodo, la forza dell'idracido aumenta con l'elettronegatività di E, perché E più elettronegativo attrae la densità elettronica allontanandola da H, rendendo il legame H–E più polare e il protone più facilmente ceduto (HCl è più forte di H$_2$S);
- lungo un gruppo, la forza dell'idracido aumenta al crescere delle dimensioni di E, perché il legame H–E diventa più lungo e quindi più debole, favorendo il rilascio del protone; questo spiega la tendenza

$$
HF \ll HCl < HBr < HI
$$

:::image{src="assets/6bdeb43f-idracidi-forza-periodica.svg" alt="Tavola periodica con il gruppo degli alogeni evidenziato e due frecce di tendenza per la forza degli idracidi" caption="Fig. 13.2 — Andamento della forza degli idracidi H–E: lungo un periodo aumenta con l'elettronegatività di E, lungo il gruppo 17 aumenta con le dimensioni di E (HF << HCl < HBr < HI)"}
:::

**Ossiacidi (HEO).** Per un ossiacido generico HEO, la forza aumenta con l'elettronegatività dell'atomo centrale E a parità di numero di atomi di ossigeno: E più elettronegativo attrae densità elettronica allontanandola dal legame H–O, rendendolo più polare e favorendo il rilascio del protone (HClO è più forte di HBrO, perché Cl è più elettronegativo di Br). La forza aumenta anche al crescere del numero di atomi di O legati a E, perché gli atomi di ossigeno, molto elettronegativi, sottraggono densità elettronica a E rendendo più polare il legame H–O residuo; per gli ossiacidi del cloro vale la tendenza

$$
HClO < HClO_2 < HClO_3 \ll HClO_4.
$$

$$
HClO < HClO_2 < HClO_3 \ll HClO_4.
$$

Una regola pratica utile per riconoscere a vista un ossiacido forte è che il numero di atomi di O deve superare di due o più unità il numero di atomi di H nella formula; tra gli acidi forti più comuni compaiono così HNO$_3$, H$_2$SO$_4$, HClO$_4$, mentre restano deboli acidi come HF, HCN, H$_2$S, HNO$_2$, H$_2$SO$_3$, H$_3$PO$_4$.

**Stabilità della base coniugata.** Un criterio equivalente, applicabile a entrambe le famiglie, è valutare la stabilità della base coniugata che si forma: più la base coniugata è stabile, più l'acido di partenza è forte. Per esempio, HI è un acido forte perché I$^-$ è un anione molto stabile, in quanto delocalizza la carica negativa su un volume molto grande; al contrario HF è un acido debole perché F$^-$ è un anione piccolo e poco stabile, con forte repulsione tra le coppie di elettroni liberi concentrate in un volume ridotto, oltre all'effetto dei legami a idrogeno che trattengono il protone. Per gli ossiacidi, la stabilità della base coniugata è anche collegata alla risonanza: HClO$_4$ è più forte di HClO perché l'anione $ClO_4^-$, con la carica negativa delocalizzata su quattro atomi di ossigeno equivalenti per risonanza, è più stabile dell'anione $ClO^-$.

**Esempio svolto 13.1.** Si confronti la forza relativa di HBr e H$_2$Se.

1. *Dati*: entrambi sono idracidi; Br appartiene al gruppo 17, Se al gruppo 16, entrambi nel quarto periodo della tavola periodica.
2. *Strategia*: trattandosi di due idracidi di elementi diversi dello stesso periodo, si applica il criterio dell'elettronegatività lungo un periodo.
3. *Calcolo*: Br è più elettronegativo di Se (l'elettronegatività cresce lungo il periodo, come visto nella sezione su [elettronegatività e polarità dei legami](ref:chapter/9#p4)); quindi nel legame H–Br la densità elettronica è attratta più efficacemente verso Br che nel legame H–Se verso Se, il legame H–Br è più polare e il protone viene ceduto più facilmente.
4. *Verifica*: la conclusione HBr più forte di H$_2$Se è coerente con la tendenza periodica generale della forza degli idracidi lungo un periodo.

Gli studenti tendono a confondere i due criteri periodici: lungo un periodo conta l'elettronegatività (legame più polare), lungo un gruppo conta la lunghezza/debolezza del legame (dimensione dell'atomo). Applicare il criterio sbagliato porta a previsioni invertite, per esempio concludendo erroneamente che HF sia più forte di HI.

## p3 | Autoionizzazione dell'acqua e pH

L'acqua pura non è un semplice solvente inerte: essa stessa reagisce con sé stessa in una reazione di equilibrio che fissa i limiti entro cui possono variare le concentrazioni di ioni idronio e ossidrile in qualunque soluzione acquosa. Su questo equilibrio si costruisce la scala del pH, lo strumento quantitativo con cui si descrive l'acidità o la basicità di una soluzione, qualunque sia la sua origine: acido forte, acido debole, base forte, base debole o sale.

:::image{src="assets/5c26a08f-indicatore-ph-foto.jpg" alt="Strisce di cartina indicatrice universale con colori diversi a contatto con soluzioni a pH differente, accanto alla scala colorimetrica del pH" caption="Fig. 13.3 — Cartina indicatrice universale immersa in soluzioni diverse: il colore assunto corrisponde a un determinato valore di pH sulla scala colorata di riferimento. Foto: SAHAYA RAJAN S / Wikimedia Commons, CC0"}
:::

### Autoionizzazione dell'acqua, K_w e scala del pH

L'acqua, sebbene sia classificata come non elettrolita nelle reazioni di dissoluzione, è in realtà un elettrolita debole nei confronti di sé stessa: due molecole di acqua possono reagire tra loro scambiandosi un protone, in un processo detto autoionizzazione (o autoprotolisi),

$$H_2O(l) + H_2O(l) \rightleftharpoons H_3O^+(aq) + OH^-(aq).$$

Questa è una reazione di equilibrio come quelle già incontrate in [Equilibrio dinamico e costante di equilibrio](ref:chapter/12#p2): se ne può scrivere l'espressione della $K_c$, e poiché il solvente puro non compare nell'espressione di un equilibrio (la sua concentrazione resta praticamente costante e viene assorbita nella costante stessa), si ottiene una nuova costante, detta prodotto ionico dell'acqua.

:::formula{id="13.1" label="Prodotto ionico dell'acqua"}
$$K_w = [H_3O^+][OH^-] = 1,0 \times 10^{-14} \quad \text{(a 25 °C)}$$
:::

Dal valore numerico di $K_w$ si ricava che nell'acqua pura $\lbrack H_3O^+\rbrack  = \lbrack OH^-\rbrack  = 1,0 \times 10^{-7}\ \text{M}$: sapendo che la molarità dell'acqua pura è 55,5 M, solo una molecola su circa 555 milioni risulta dissociata in ioni.

Questo equilibrio comporta due conseguenze fondamentali, valide in qualunque soluzione acquosa, non solo nell'acqua pura.

- Una variazione di $\lbrack H_3O^+\rbrack $ produce sempre una variazione inversa di $\lbrack OH^-\rbrack $, e viceversa, perché il loro prodotto deve restare pari a $K_w$.
- In ogni sistema acquoso sono sempre presenti entrambi gli ioni, il che permette di classificare le soluzioni confrontando le due concentrazioni: soluzione acida se $\lbrack H_3O^+\rbrack  > \lbrack OH^-\rbrack $, soluzione basica se $\lbrack H_3O^+\rbrack  < \lbrack OH^-\rbrack $, soluzione neutra se $\lbrack H_3O^+\rbrack  = \lbrack OH^-\rbrack $.

Poiché nelle soluzioni acquose $\lbrack H_3O^+\rbrack $ può variare su un intervallo enorme, da circa $10^{-15}$ M a 10 M, risulta scomodo lavorare con potenze di dieci negative. Si introduce quindi la scala p, definita come il logaritmo decimale della grandezza, cambiato di segno.

:::formula{id="13.2" label="Definizioni di pH, pOH e pK"}
$$\mathrm{pH} = -\log[H_3O^+], \qquad \mathrm{pOH} = -\log[OH^-], \qquad \mathrm{pK} = -\log K$$
:::

In base al pH si classificano le soluzioni come acide se $\mathrm{pH} < 7$, basiche se $\mathrm{pH} > 7$ e neutre se $\mathrm{pH} = 7$, a 25 °C. Applicando il logaritmo alla relazione del prodotto ionico dell'acqua si ottiene una relazione molto utile tra pH e pOH.

:::formula{id="13.3" label="Relazione tra pK_w, pH e pOH"}
$$\mathrm{pK_w} = \mathrm{pH} + \mathrm{pOH} = 14,00 \quad \text{(a 25 °C)}$$
:::

**Esempio svolto 13.2** (dal pH al pOH e alla concentrazione di ioni idronio).

Una soluzione di idrossido di sodio ha pH = 9,52. Calcolare il pOH e la molarità degli ioni idronio.

Dati: $\mathrm{pH} = 9,52$.

Strategia: si usa la relazione tra pH e pOH per ricavare il pOH, poi si inverte la definizione di pH con un elevamento a potenza.

Calcolo:

$$\mathrm{pOH} = 14,00 - \mathrm{pH} = 14,00 - 9,52 = 4,48$$

$$\lbrack H_3O^+\rbrack  = 10^{-9,52} = 3,0 \times 10^{-10}\ \text{M}$$

Verifica: la soluzione è basica (pH > 7) e $\lbrack H_3O^+\rbrack  \cdot \lbrack OH^-\rbrack  \approx 1,0 \times 10^{-14}$, coerente con $K_w$.

**Errore tipico 13.2**. Scrivere $\mathrm{pH} = -\log\lbrack H_3O^+\rbrack $ usando direttamente la molarità anche in soluzioni molto concentrate o con forza ionica elevata porta a risultati errati, perché a rigore la definizione andrebbe scritta in termini di attività ioniche e non di concentrazioni: in soluzioni molto cariche di ioni, parte di essi resta schermata dal solvente e non partecipa pienamente all'equilibrio. Nel corso si continua comunque a usare le molarità, come approssimazione valida per soluzioni diluite. Un secondo errore riguarda le soluzioni estremamente diluite di acido o base forte, a concentrazione $\le 10^{-7}$ M: qui il contributo dell'autoionizzazione dell'acqua non è più trascurabile rispetto a quello dell'acido/base, e occorre impostare uno schema ICE per la reazione di autoprotolisi, usando come concentrazione iniziale di $H_3O^+$ (o $OH^-$) quella liberata dall'acido (o base) forte e risolvendo con $K_w$ come costante di equilibrio.

### Acidi e basi forti

Gli acidi forti e le basi forti sono elettroliti forti: in acqua si dissociano (o reagiscono con l'acqua) in modo completo, così che la concentrazione iniziale del soluto si trasforma integralmente in prodotti. Gli acidi forti più comuni sono HCl, HBr, HI, HNO3, H2SO4, H2SeO4, HClO3 e HClO4; tra gli ossiacidi, sono forti quelli in cui il numero di atomi di ossigeno supera di due o più unità il numero di atomi di idrogeno acido, criterio già incontrato in [Teorie acido-base e forza degli acidi](ref:chapter/13#p2). Le basi forti sono gli idrossidi dei metalli del gruppo 1 e gli idrossidi fortemente basici del gruppo 2, come Ca(OH)2, Sr(OH)2 e Ba(OH)2; Be(OH)2, invece, è anfotero e non si comporta da base forte.

Per un acido forte monoprotico $HA$, la reazione con l'acqua è praticamente totale,

$$HA(aq) + H_2O(l) \to H_3O^+(aq) + A^-(aq),$$

e quindi $\lbrack H_3O^+\rbrack $ coincide (a meno del contributo trascurabile dell'autoionizzazione dell'acqua) con la concentrazione iniziale dell'acido. Lo stesso vale per una base forte monoprotica, dove $\lbrack OH^-\rbrack $ coincide con la concentrazione iniziale della base.

**Esempio svolto 13.3** (pH di un acido forte da una massa nota).

Determinare il pH di 250 mL di una soluzione acquosa contenente 15 g di acido nitrico HNO3.

Dati: $m_{HNO_3} = 15\ \text{g}$, $M_{HNO_3} = 63,01\ \text{g/mol}$, $V = 250\ \text{mL} = 0,250\ \text{L}$.

Strategia: si converte la massa in moli, si calcola la molarità iniziale, poi si usa la dissociazione completa dell'acido forte per ottenere $\lbrack H_3O^+\rbrack $.

Calcolo:

$$n_{HNO_3} = \frac{15}{63,01} = 0,238\ \text{mol}$$

$$\lbrack HNO_3\rbrack _i = \frac{0,238}{0,250} = 0,952\ \text{M}$$

Poiché HNO3 è un acido forte, si consuma l'intera quantità iniziale e si forma la stessa quantità di $H_3O^+$ e $NO_3^-$:

$$\lbrack H_3O^+\rbrack  = 0,952\ \text{M} \qquad \mathrm{pH} = -\log(0,952) = 0,02$$

Verifica: il pH ottenuto è nettamente inferiore a 7, coerente con una soluzione concentrata di acido forte.

**Errore tipico 13.3**. Per acidi o basi poliprotici forti (praticamente solo per la prima dissociazione di H2SO4, che è un acido forte in prima dissociazione), occorre ricordare che ogni mole di soluto libera più moli di $H_3O^+$ o $OH^-$: trascurare il coefficiente stechiometrico porta a sottostimare la concentrazione degli ioni e quindi a un pH errato.

### Acidi e basi deboli, K_a e K_b

Gli acidi deboli (tra cui si contano ad esempio molti ossiacidi non elencati tra i forti, gli idracidi diversi da HCl/HBr/HI, e gli acidi organici RCOOH) e le basi deboli (l'ammoniaca e le ammine) si dissociano solo parzialmente: la maggior parte delle molecole di soluto resta indissociata all'equilibrio. La loro forza si quantifica con la costante di dissociazione acida $K_a$ o basica $K_b$, già introdotte qualitativamente in [Teorie acido-base e forza degli acidi](ref:chapter/13#p2) e definite ora in modo operativo.

Per un acido debole $HA$ in acqua, $HA(aq) + H_2O(l) \rightleftharpoons H_3O^+(aq) + A^-(aq)$, con tabella ICE iniziale/variazione/equilibrio a partire dalla concentrazione iniziale $C_0$:

:::formula{id="13.4" label="Costante di dissociazione acida"}
$$K_a = \frac{[H_3O^+][A^-]}{[HA]}$$
:::

Per una base debole $B$, analogamente, $B(aq) + H_2O(l) \rightleftharpoons BH^+(aq) + OH^-(aq)$.

:::formula{id="13.5" label="Costante di dissociazione basica"}
$$K_b = \frac{[BH^+][OH^-]}{[B]}$$
:::

La procedura di calcolo riprende lo schema ICE già visto in [Quoziente di reazione e calcoli di equilibrio](ref:chapter/12#p3): si parte dalla concentrazione iniziale del soluto debole e da zero per i prodotti, si introduce la variazione $x$ secondo i coefficienti stechiometrici (1:1:1 in questo caso) e si risolve l'equazione che ne risulta per $K_a$ o $K_b$, spesso con l'approssimazione $C_0 - x \approx C_0$ quando $K_a$ (o $K_b$) è molto più piccola di $C_0$.

**Esempio svolto 13.4** (pH di un acido debole da $K_a$ nota).

Un acido debole $HA$ viene introdotto in acqua in concentrazione pari a 0,10 M. Se la sua $K_a$ vale $1,3 \times 10^{-5}$, calcolare il pH della soluzione risultante.

Dati: $C_0 = 0,10\ \text{M}$, $K_a = 1,3 \times 10^{-5}$.

Strategia: schema ICE sulla reazione $HA + H_2O \rightleftharpoons H_3O^+ + A^-$, con variazione $x$ uguale per $H_3O^+$ e $A^-$ e $0,10 - x$ per $HA$ all'equilibrio.

Calcolo: l'equazione di equilibrio è

$$K_a = \frac{x^2}{0,10 - x} = 1,3 \times 10^{-5}.$$

Poiché $K_a \ll C_0$, si approssima $0,10 - x \approx 0,10$, da cui

$$x = \sqrt{1,3 \times 10^{-5} \cdot 0,10} = 1,14 \times 10^{-3}\ \text{M}.$$

Allora $\lbrack H_3O^+\rbrack  = 1,14 \times 10^{-3}\ \text{M}$ e

$$\mathrm{pH} = -\log(1,14 \times 10^{-3}) = 2,94.$$

Verifica: il grado di dissociazione $\alpha = x/C_0 \approx 1{,}1\%$, molto inferiore al 5% spesso usato come soglia di validità dell'approssimazione: il calcolo semplificato è dunque giustificato (si veda [formula (5.5)](ref:formula/5.5)).

**Errore tipico 13.4**. Un errore frequente è dimenticare di verificare l'approssimazione $C_0 - x \approx C_0$: se $K_a$ (o $K_b$) non è trascurabile rispetto a $C_0$, l'equazione quadratica va risolta per intero, scartando la radice priva di significato fisico (concentrazione negativa o maggiore della concentrazione iniziale), come già discusso in [Quoziente di reazione e calcoli di equilibrio](ref:chapter/12#p3).

### Sali e acidi poliprotici

**Idrolisi salina.** Sciogliere un sale in acqua non produce sempre una soluzione neutra: i sali sono elettroliti che, in quasi tutti i casi, dissociano completamente, e gli ioni liberati possono comportarsi da acidi o basi di Brønsted-Lowry nei confronti dell'acqua. Questa reazione tra gli ioni del sale e l'acqua si chiama idrolisi. Si distinguono quattro casi, a seconda che il sale derivi dalla neutralizzazione di un acido forte o debole con una base forte o debole.

- Sale da acido forte e base forte (per esempio NaCl, da HCl + NaOH): nessuno dei due ioni liberati reagisce con l'acqua, non c'è idrolisi e la soluzione resta neutra (pH = 7).
- Sale da acido debole e base forte: l'anione, base coniugata dell'acido debole, reagisce con l'acqua secondo idrolisi basica, e il pH risultante è sempre basico. La costante di idrolisi si scrive $K_i = K_w/K_a$.
- Sale da acido forte e base debole (per esempio NH4Cl, da HCl + NH3): il catione, acido coniugato della base debole, reagisce con l'acqua, $NH_4^+ + H_2O \rightleftharpoons NH_3 + H_3O^+$, secondo idrolisi acida, e il pH risultante è sempre acido. La costante di idrolisi si scrive $K_i = K_w/K_b$.
- Sale da acido debole e base debole (per esempio NH4NO2, da HNO2 + NH3): reagiscono entrambi gli ioni, il catione secondo idrolisi acida e l'anione secondo idrolisi basica; il pH risultante è acido se $K_a > K_b$, basico se $K_a < K_b$, neutro se $K_a = K_b$.

:::formula{id="13.6" label="Relazione tra K_a, K_b e K_w di una coppia coniugata"}
$$K_a \cdot K_b = K_w$$
:::

Questa relazione si ricava sommando la reazione di dissociazione di un acido debole $HA$ e la reazione di idrolisi della sua base coniugata $A^-$,

$$\begin{aligned} HA + H_2O &\rightleftharpoons H_3O^+ + A^- \\ A^- + H_2O &\rightleftharpoons HA + OH^- \end{aligned}$$

la cui somma restituisce la reazione di autoionizzazione dell'acqua, $2H_2O \rightleftharpoons H_3O^+ + OH^-$: poiché la costante di equilibrio di una reazione ottenuta per somma di stadi è il prodotto delle costanti dei singoli stadi, si ha $K_a \cdot K_i = K_w$, dove $K_i$ è la costante di idrolisi di $A^-$. Da qui le due forme della costante di idrolisi:

:::formula{id="13.7" label="Costante di idrolisi"}
$$K_i = \frac{K_w}{K_a} \ \text{(idrolisi basica)}, \qquad K_i = \frac{K_w}{K_b} \ \text{(idrolisi acida)}$$
:::

**Esempio svolto 13.5** (idrolisi basica di un sale).

L'ipoclorito di sodio NaClO viene introdotto in acqua in concentrazione pari a 0,20 M. Se $K_a$ dell'acido ipocloroso HClO è $2,9 \times 10^{-8}$, calcolare il pH della soluzione risultante.

Strategia: il sale si dissocia completamente, $NaClO \to Na^+ + ClO^-$. Lo ione $Na^+$ non reagisce (deriva da base forte); lo ione $ClO^-$, base coniugata di un acido debole, idrolizza secondo $ClO^- + H_2O \rightleftharpoons HClO + OH^-$.

Calcolo: la costante di idrolisi è

$$K_i = \frac{K_w}{K_a} = \frac{1,0 \times 10^{-14}}{2,9 \times 10^{-8}} = 3,4 \times 10^{-7}.$$

Con lo schema ICE, $K_i = x^2/(0,20-x) \approx x^2/0,20$, da cui

$$x = \lbrack OH^-\rbrack  = \sqrt{3,4 \times 10^{-7} \cdot 0,20} = 2,6 \times 10^{-4}\ \text{M},$$

$$\mathrm{pOH} = -\log(2,6 \times 10^{-4}) = 3,58, \qquad \mathrm{pH} = 14,00 - 3,58 = 10,42.$$

Verifica: il pH è basico, come previsto per un sale di acido debole e base forte.

**Acidi poliprotici.** Gli acidi con più di un protone ionizzabile sono detti poliprotici (diprotici se ne cedono due, triprotici se ne cedono tre); in soluzione dissociano un protone alla volta, e ciascuno stadio ha una propria costante di dissociazione. Per esempio l'acido fosforico H3PO4 presenta tre dissociazioni acide successive. Le costanti successive diminuiscono drasticamente,

:::image{src="assets/5c26a08f-struttura-acido-fosforico.svg" alt="Struttura di Lewis dell'acido fosforico H3PO4, con un atomo di fosforo centrale legato a un ossigeno doppio e a tre gruppi OH, con doppietti solitari sugli ossigeni" caption="Fig. 13.4 — Struttura dell'acido fosforico H3PO4: i tre gruppi OH legati al fosforo portano ciascuno un protone ionizzabile, rimosso in tre dissociazioni acide successive."}
:::

$$K_{a1} \gg K_{a2} \gg K_{a3},$$

perché è progressivamente più difficile rimuovere uno ione $H^+$ da una specie già carica negativamente. Quando due costanti successive differiscono di tre o quattro ordini di grandezza, il contributo delle dissociazioni successive alla prima può essere trascurato nel calcolo del pH: si usa quindi solo $K_{a1}$ e si tratta l'acido poliprotico come se fosse monoprotico per il calcolo di $\lbrack H_3O^+\rbrack $.

**Errore tipico 13.5**. Confondere l'acido debole diprotico H2SO3 (dove la seconda dissociazione è trascurabile) con l'acido forte H2SO4, che è forte solo nella prima dissociazione (completa) ed è debole nella seconda. Questa seconda dissociazione è debole in quanto proprietà intrinseca dello ione HSO4^- alla data temperatura; il suo avanzamento è inoltre ulteriormente ridotto dallo ione comune H3O+ generato dalla prima dissociazione, ma non è questo l'effetto a renderla debole. Il pH complessivo dipende comunque dal contributo di entrambi gli equilibri.

## p4 | Tamponi, indicatori e titolazioni

### Soluzioni tampone

**Definizione 13.4.** Una soluzione tampone limita la variazione di $pH$ quando si aggiungono piccole quantità di acido o base. Un esempio è la miscela di un acido debole $HA$ e della sua base coniugata $A^-$, entrambi presenti in quantità apprezzabili; si può preparare sciogliendo $HA$ e un suo sale solubile. Una miscela di base debole e acido coniugato funziona nello stesso modo.

L'equilibrio è $HA_{(aq)}+H_2O_{(l)}\rightleftharpoons A^-_{(aq)}+H_3O^+_{(aq)}$. Se si aggiunge acido forte, $A^-$ consuma parte di $H_3O^+$ e diventa $HA$; se si aggiunge base forte, $HA$ consuma $OH^-$ e diventa $A^-$. Il tampone può quindi assorbire solo aggiunte limitate: una volta consumata una delle due componenti, perde la sua efficacia.

Dalla definizione di $K_a$ si ottiene $\lbrack H_3O^+\rbrack =K_a\lbrack HA\rbrack /\lbrack A^-\rbrack $. Applicando il logaritmo decimale e ponendo $pK_a=-\log K_a$ si ricava l'equazione di Henderson–Hasselbalch.

:::formula{id="13.8" label="Equazione di Henderson–Hasselbalch"}
$$pH=pK_a+\log\left(\frac{[A^-]}{[HA]}\right)$$
:::

Le concentrazioni nella {{formula:13.8}} sono quelle all'equilibrio. Nei consueti calcoli di tampone si usano le concentrazioni ottenute dal bilancio stechiometrico quando la dissociazione ulteriore di $HA$ e l'autoionizzazione dell'acqua sono trascurabili. Poiché le due specie occupano lo stesso volume, il loro rapporto si può calcolare anche dalle moli. Se si aggiunge acido o base forte, occorre prima aggiornare le moli di entrambe le componenti con la reazione di neutralizzazione.

Il tamponamento è più efficace quando $\lbrack A^-\rbrack $ e $\lbrack HA\rbrack $ sono simili: se sono uguali, $pH=pK_a$. Come intervallo pratico si usa $pK_a\pm1$. A parità di rapporto, concentrazioni assolute maggiori permettono di assorbire una quantità maggiore di acido o base prima che il $pH$ cambi sensibilmente.

### Curve di titolazione

**Definizione 13.5.** In una titolazione si aggiunge una soluzione di concentrazione nota a una soluzione da analizzare. La curva di titolazione riporta il $pH$ in funzione del volume di titolante aggiunto. Al **punto di equivalenza** le quantità di acido e base hanno reagito secondo i coefficienti stechiometrici; il **punto finale** è il viraggio osservato dell'indicatore. I due punti devono essere vicini, ma non sono la stessa cosa. Per acido e base monoprotici vale la condizione [formula (5.6)](ref:formula/5.6).

Per costruire la curva, a ogni volume aggiunto si confrontano le moli iniziali di acido con quelle di base introdotte e si calcola il volume totale. Prima dell'equivalenza di un acido forte con una base forte, il $pH$ dipende dall'acido forte residuo; dopo, dalla base forte in eccesso. All'equivalenza resta una soluzione di sale senza idrolisi apprezzabile: a $25\, ^\circ\mathrm{C}$ il $pH$ è $7{,}00$. La variazione è molto rapida vicino a quel volume.

:::image{src="assets/a9ac848c-curva-titolazione-acido-forte.svg" alt="Curva del pH da 1 a circa 12,5: salto ripido presso 25 mL, con punto equivalente a pH 7" caption="Fig. 13.5 — Titolazione di 25 mL di HCl 0,100 mol/L con NaOH 0,100 mol/L a 25 °C; il punto equivalente è a 25 mL."}
:::

Con un acido debole e una base forte, prima dell'equivalenza si forma invece la coppia $HA/A^-$: compare una regione tampone e, a metà equivalenza, $pH=pK_a$. All'equivalenza la soluzione contiene soprattutto $A^-$, che reagisce con l'acqua producendo $OH^-$; a $25\, ^\circ\mathrm{C}$ si ha quindi $pH>7$. Dopo l'equivalenza domina la base forte in eccesso. Per una base debole titolata con acido forte, l'idrolisi dell'acido coniugato porta invece a $pH<7$ all'equivalenza.

### Esempio svolto: acido debole e base forte

Si titolano $25{,}0\,\mathrm{mL}$ di $CH_3COOH$ $0{,}100\,\mathrm{mol/L}$ con $NaOH$ $0{,}100\,\mathrm{mol/L}$ a $25\, ^\circ\mathrm{C}$. Si assuma $K_a=1{,}8\times10^{-5}$ e $K_w=1{,}0\times10^{-14}$. Calcolare il $pH$ dopo $10{,}0\,\mathrm{mL}$ di titolante, a metà equivalenza e all'equivalenza. Il valore di $K_a$ è un dato del problema.

1. **Dati.** Le moli iniziali di acido sono $n_{HA,0}=0{,}100\times0{,}0250=2{,}50\times10^{-3}\,\mathrm{mol}$. La reazione è $CH_3COOH_{(aq)}+OH^-_{(aq)}\rightarrow CH_3COO^-_{(aq)}+H_2O_{(l)}$; ogni mole di base consuma una mole di acido. Il volume equivalente è $V_{\mathrm{eq}}=(2{,}50\times10^{-3})/0{,}100=0{,}0250\,\mathrm{L}=25{,}0\,\mathrm{mL}$.

2. **Strategia.** Prima dell'equivalenza si calcolano le moli residue di acido e quelle di acetato formato, poi si usa {{formula:13.8}}. All'equivalenza si calcola invece il $pH$ dall'idrolisi dell'acetato: la formula del tampone non è applicabile perché l'acido è stato consumato.

3. **Calcolo.** Dopo $10{,}0\,\mathrm{mL}$, $n_{OH^-}=0{,}100\times0{,}0100=1{,}00\times10^{-3}\,\mathrm{mol}$. Restano $n_{HA}=1{,}50\times10^{-3}\,\mathrm{mol}$ e si formano $n_{A^-}=1{,}00\times10^{-3}\,\mathrm{mol}$. Pertanto $pK_a=4{,}745$ e $pH=4{,}745+\log(1{,}00/1{,}50)=4{,}57$. A metà equivalenza, dopo $12{,}5\,\mathrm{mL}$, le moli delle due specie sono uguali e $pH=pK_a=4{,}74$.

All'equivalenza il volume totale è $50{,}0\,\mathrm{mL}$ e $\lbrack A^-\rbrack \simeq(2{,}50\times10^{-3})/0{,}0500=0{,}0500\,\mathrm{mol/L}$. Per $A^-_{(aq)}+H_2O_{(l)}\rightleftharpoons HA_{(aq)}+OH^-_{(aq)}$, si ha $K_b=K_w/K_a=5{,}56\times10^{-10}$. Se $x=\lbrack OH^-\rbrack $, l'approssimazione $x\ll0{,}0500\,\mathrm{mol/L}$ dà $x\simeq\sqrt{K_b\,0{,}0500}=5{,}27\times10^{-6}\,\mathrm{mol/L}$. Quindi $pOH=5{,}28$ e $pH=14{,}00-5{,}28=8{,}72$.

4. **Verifica.** Il rapporto $x/0{,}0500=1{,}05\times10^{-4}$ conferma l'approssimazione usata per l'idrolisi. Il $pH$ equivalente è maggiore di $7$, coerentemente con la presenza della base coniugata dell'acido debole.

### Indicatori e scelta del viraggio

**Definizione 13.6.** Un indicatore acido–base è una sostanza presente in piccolissima quantità le cui forme protonata e deprotonata hanno colori diversi. Per un indicatore acido $HIn$, l'equilibrio $HIn_{(aq)}+H_2O_{(l)}\rightleftharpoons In^-_{(aq)}+H_3O^+_{(aq)}$ determina il colore osservato. Quando $\lbrack HIn\rbrack =\lbrack In^-\rbrack $, $pH=pK_{a,\mathrm{In}}$; il viraggio visibile si estende approssimativamente da $pK_{a,\mathrm{In}}-1$ a $pK_{a,\mathrm{In}}+1$.

**Criterio di scelta.** Si stima dapprima il $pH$ all'equivalenza e si sceglie un indicatore il cui intervallo di viraggio cada nel tratto ripido della curva, così che il punto finale sia vicino all'equivalenza. Per esempio, la fenolftaleina vira circa tra $pH=8{,}2$ e $pH=10{,}0$ ed è adatta alla titolazione dell'acido acetico: il suo intervallo comprende $pH=8{,}72$ e cade nel tratto ripido attorno all'equivalenza. Il blu di bromotimolo (circa $pH=6{,}0$–$7{,}6$) e il rosso metile (circa $pH=4{,}4$–$6{,}2$) virano fuori da questo tratto. Per acido forte e base forte il salto è più ampio e la scelta è meno vincolata.

**Errore tipico 13.6.** Imporre $pH=7$ a ogni punto equivalente confonde equivalenza stechiometrica e neutralità della soluzione. Un altro errore è usare Henderson–Hasselbalch dopo l'equivalenza, quando una componente del tampone è esaurita.

## p5 | Equilibri di solubilità

### Il prodotto di solubilità

Un sale poco solubile può lasciare un corpo di fondo anche dopo che la soluzione è diventata satura. A temperatura fissata, il solido continua a sciogliersi e gli ioni continuano a ricombinarsi: le due trasformazioni si compensano e le concentrazioni restano costanti. È un equilibrio eterogeneo, perché coinvolge un solido e una soluzione. Per la distinzione tra soluzione insatura, satura e sovrassatura, si veda [Dissoluzione e solubilità](ref:chapter/11#p2).

**Definizione 13.7** (prodotto di solubilità). Per un sale poco solubile $A_aB_b$ che, in acqua, dà $a$ ioni $A^{b+}$ e $b$ ioni $B^{a-}$, il prodotto di solubilità $K_{\mathrm{ps}}$ è il prodotto delle concentrazioni degli ioni *all’equilibrio*, ciascuna elevata al proprio coefficiente stechiometrico. Il solido puro non compare nell’espressione. Il valore di $K_{\mathrm{ps}}$ si riferisce a una temperatura specificata; nei calcoli con soluzioni diluite si usano le concentrazioni molari come approssimazione delle attività.

:::formula{id="13.9" label="Prodotto di solubilità di un sale ionico"}
$$A_aB_{b\,(s)} \rightleftharpoons aA^{b+}_{(aq)}+bB^{a-}_{(aq)},\qquad K_{\mathrm{ps}}=[A^{b+}]^a[B^{a-}]^b$$
:::

Per esempio, $\mathrm{Ag_2S}_{(s)}\rightleftharpoons 2\mathrm{Ag}^{+}_{(aq)}+\mathrm{S}^{2-}_{(aq)}$ dà $K_{\mathrm{ps}}=\lbrack \mathrm{Ag}^{+}\rbrack ^2\lbrack \mathrm{S}^{2-}\rbrack $. Il coefficiente $2$ diventa un esponente; non si inserisce $\lbrack \mathrm{Ag_2S}\rbrack $ al denominatore.

### Solubilità molare e stechiometria

**Definizione 13.8** (solubilità molare). La solubilità molare $S$ è la quantità di sale disciolta per litro di soluzione satura, espressa in mol/L. Se si parte da acqua priva degli ioni del sale e si trascurano reazioni secondarie, una quantità $S$ di $A_aB_b$ produce $aS$ di $A^{b+}$ e $bS$ di $B^{a-}$. Questa relazione non vale direttamente se uno ione è già presente o reagisce, per esempio, con l’acqua.

:::formula{id="13.10" label="Solubilità molare e prodotto di solubilità"}
$$K_{\mathrm{ps}}=(aS)^a(bS)^b=a^ab^bS^{a+b}$$
:::

Per un sale che libera uno ione di ciascun tipo, $K_{\mathrm{ps}}=S^2$ e $S=\sqrt{K_{\mathrm{ps}}}$. Per $\mathrm{PbF_2}$, invece, $\lbrack \mathrm{Pb}^{2+}\rbrack =S$ e $\lbrack \mathrm{F}^{-}\rbrack =2S$, quindi $K_{\mathrm{ps}}=4S^3$. La diversa dipendenza da $S$ spiega perché, per confrontare le solubilità di sali con stechiometrie diverse, occorre calcolare $S$ per ciascuno: il solo confronto dei valori di $K_{\mathrm{ps}}$ non basta.

**Esempio svolto 13.6** (da solubilità a $K_{\mathrm{ps}}$).

1. **Dati.** In acqua, la solubilità molare di $\mathrm{PbF_2}$ è $S=2,6\times10^{-3}$ mol/L. Si assumono trascurabili altre fonti di $\mathrm{Pb}^{2+}$ e $\mathrm{F}^{-}$.
2. **Strategia.** Si scrive $\mathrm{PbF_2}_{(s)}\rightleftharpoons\mathrm{Pb}^{2+}_{(aq)}+2\mathrm{F}^{-}_{(aq)}$ e si ricavano le concentrazioni degli ioni dalla stechiometria.
3. **Calcolo.** $\lbrack \mathrm{Pb}^{2+}\rbrack =S=2,6\times10^{-3}$ mol/L e $\lbrack \mathrm{F}^{-}\rbrack =2S=5,2\times10^{-3}$ mol/L. Dunque $K_{\mathrm{ps}}=S(2S)^2=4(2,6\times10^{-3})^3=7,0\times10^{-8}$.
4. **Verifica.** Il termine dello ione fluoruro è al quadrato perché nella dissociazione si formano due ioni fluoruro per unità formula. Il risultato è arrotondato a due cifre significative, come il dato iniziale.

### Prevedere la formazione di un precipitato

Prima che il sistema raggiunga l’equilibrio, il **prodotto ionico** $Q_{\mathrm{ps}}$ si calcola con la stessa espressione di $K_{\mathrm{ps}}$, usando però le concentrazioni *attuali* degli ioni. Quando si mescolano due soluzioni, bisogna prima calcolare le concentrazioni nel volume finale, poi formare $Q_{\mathrm{ps}}$.

- Se $Q_{\mathrm{ps}}<K_{\mathrm{ps}}$, la soluzione è insatura: non precipita sale. Se è presente un solido, può sciogliersene ancora.
- Se $Q_{\mathrm{ps}}=K_{\mathrm{ps}}$, la soluzione è satura e in equilibrio con il solido eventualmente presente.
- Se $Q_{\mathrm{ps}}>K_{\mathrm{ps}}$, la soluzione è sovrassatura rispetto al sale: si forma precipitato finché il prodotto ionico torna al valore di equilibrio, se gli ioni disponibili lo consentono.

**Esempio svolto 13.7** (previsione dopo il mescolamento).

1. **Dati.** Si mescolano $0,100$ L di soluzione con $\lbrack \mathrm{Ca}^{2+}\rbrack =0,300$ mol/L e $0,200$ L di soluzione con $\lbrack \mathrm{F}^{-}\rbrack =0,060$ mol/L. Per $\mathrm{CaF_2}$, $K_{\mathrm{ps}}=3,2\times10^{-11}$. Si assumono volumi additivi e assenza iniziale dell’altro ione in ciascuna soluzione.
2. **Strategia.** Si calcolano le moli dei due ioni, si dividono per il volume totale $V=0,300$ L e si confronta $Q_{\mathrm{ps}}=\lbrack \mathrm{Ca}^{2+}\rbrack \lbrack \mathrm{F}^{-}\rbrack ^2$ con $K_{\mathrm{ps}}$.
3. **Calcolo.** $\lbrack \mathrm{Ca}^{2+}\rbrack =(0,300\,\mathrm{mol/L})(0,100\,\mathrm{L})/(0,300\,\mathrm{L})=0,100$ mol/L; $\lbrack \mathrm{F}^{-}\rbrack =(0,060\,\mathrm{mol/L})(0,200\,\mathrm{L})/(0,300\,\mathrm{L})=0,040$ mol/L. Quindi $Q_{\mathrm{ps}}=(0,100)(0,040)^2=1,6\times10^{-4}$.
4. **Verifica.** Poiché $1,6\times10^{-4}>3,2\times10^{-11}$, $\mathrm{CaF_2}$ precipita. Le concentrazioni impiegate sono quelle *prima* della precipitazione: bastano a stabilire se essa inizia, non la quantità finale di solido.

### Ione comune, pH e precipitazione frazionata

**Effetto dello ione comune.** Se si aggiunge $\mathrm{Na_2CrO_4}$ a una soluzione satura a contatto con $\mathrm{PbCrO_4}_{(s)}$, aumenta $\lbrack \mathrm{CrO_4}^{2-}\rbrack $. Nell’immediato $Q_{\mathrm{ps}}$ supera $K_{\mathrm{ps}}$; parte del $\mathrm{PbCrO_4}$ precipita e la concentrazione di $\mathrm{Pb}^{2+}$ diminuisce. Alla stessa temperatura $K_{\mathrm{ps}}$ resta costante, mentre diminuisce la quantità di sale che può rimanere disciolta. È un’applicazione del [principio di Le Châtelier](ref:chapter/12#p4).

:::image{src="assets/a3d62df9-ione-cromato.svg" alt="Struttura di Lewis dello ione cromato CrO4^2-" caption="Fig. 13.6 — Struttura dello ione cromato CrO4^2-, l'anione aggiunto con Na2CrO4 che innalza [CrO4^2-] e fa precipitare PbCrO4 per effetto dello ione comune."}
:::

**Effetto del pH.** Se l’anione del sale può legare $\mathrm{H_3O}^{+}$, acidificare ne riduce la concentrazione libera e favorisce altra dissoluzione. È il caso di $\mathrm{CaCO_3}$: il carbonato viene protonato e la solubilità aumenta. Per un sale come $\mathrm{AgCl}$, il cui anione proviene da un acido forte, questa via di protonazione non produce un effetto apprezzabile nel modello considerato. Il comportamento acido-base degli anioni è trattato in [Autoionizzazione dell’acqua e pH](ref:chapter/13#p3).

:::image{src="assets/a3d62df9-ione-carbonato.svg" alt="Struttura di Lewis dello ione carbonato CO3^2-" caption="Fig. 13.7 — Struttura dello ione carbonato CO3^2-: la sua protonazione in ambiente acido riduce [CO3^2-] libero e aumenta la solubilità di CaCO3."}
:::

**Definizione 13.9** (precipitazione frazionata). Aggiungendo gradualmente uno stesso ione precipitante a una miscela, si può separare un primo sale prima che inizi a precipitare il secondo. Il primo a raggiungere la saturazione è quello che richiede la *minore concentrazione soglia* dello ione aggiunto. La soglia dipende da $K_{\mathrm{ps}}$, dalla stechiometria e dalle concentrazioni iniziali: il sale con $K_{\mathrm{ps}}$ minore non è necessariamente il primo in ogni miscela. Una separazione utile richiede che, alla soglia del secondo sale, del primo ne resti poco in soluzione. Per due sali $MX$ con uguale stechiometria, la soglia iniziale è $\lbrack X^-\rbrack =K_{\mathrm{ps}}/\lbrack M^+\rbrack _{\mathrm{iniziale}}$. Lo stesso criterio permette di separare cationi come idrossidi regolando il pH.

**Errore tipico 13.7.** Usare $S=\sqrt{K_{\mathrm{ps}}}$ per qualunque sale, dimenticare l’esponente degli ioni in $Q_{\mathrm{ps}}$ oppure confrontare $Q_{\mathrm{ps}}$ con $K_{\mathrm{ps}}$ usando le concentrazioni *prima* della diluizione dovuta al mescolamento. Si parte sempre dall’equazione di dissociazione bilanciata e dalle concentrazioni nel volume effettivo della miscela.
