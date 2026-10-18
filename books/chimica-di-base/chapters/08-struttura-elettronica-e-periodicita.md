---
chapter: 8
title: Struttura elettronica e periodicità
---

## p1 | Introduzione

Per capire perché gli elementi assorbono o emettono luce a frequenze caratteristiche e perché reagiscono in modo diverso, occorre collegare la struttura dell’atomo alle sue proprietà osservabili. In questo capitolo la descrizione passa dai quanti di luce e dagli spettri atomici agli orbitali e alla disposizione degli elettroni; da qui si comprende come la configurazione elettronica influenzi dimensioni atomiche, tendenza a perdere o acquistare elettroni e reattività. Queste idee forniscono anche le basi per affrontare il legame ionico.

Per iniziare, è utile conoscere la struttura dell'atomo e distinguere elementi e isotopi, come discusso in [Struttura dell'atomo e isotopi](ref:chapter/2#p3), e avere familiarità con la tavola periodica, come discusso in [La tavola periodica](ref:chapter/2#p4). Servono inoltre le operazioni algebriche di base e la capacità di leggere simboli e unità di misura.

Al termine saprai descrivere la natura quantistica della luce e della materia, interpretare gli spettri e riconoscere che cosa spiega il modello di Bohr e dove non basta. Saprai individuare i numeri quantici e gli orbitali, scrivere configurazioni elettroniche per atomi e ioni applicando le regole di riempimento, e prevedere se una specie è paramagnetica o diamagnetica. Infine, userai la carica nucleare efficace per spiegare e confrontare i raggi atomici e ionici, le energie di ionizzazione e le affinità elettroniche, collegando queste tendenze alla reattività degli elementi.

## p2 | Radiazione elettromagnetica e quanti

Fin dalle sezioni precedenti si è costruito il modello dell'atomo come nucleo carico positivamente circondato da elettroni, ma nulla è stato ancora detto su come questi elettroni siano distribuiti attorno al nucleo né su come si possa indagare, senza poterli osservare direttamente, la loro struttura interna. Lo strumento sperimentale decisivo è la luce: quando gli atomi di un elemento vengono scaldati o sottoposti a una scarica elettrica, emettono (o assorbono) radiazione con caratteristiche ben precise, e l'analisi di questa radiazione costituisce la spettroscopia, la branca della chimica che si occupa dell'analisi della luce emessa o assorbita dalle sostanze. Per interpretare questi esperimenti occorre prima fissare con precisione le grandezze che descrivono la radiazione elettromagnetica e il modo, sorprendente per la fisica dell'Ottocento, in cui essa scambia energia con la materia.

### La natura ondulatoria della luce

La luce è una forma di radiazione elettromagnetica, cioè una perturbazione ondulatoria dei valori di campo elettrico e di campo magnetico, oscillanti e perpendicolari tra loro, che si propaga nel vuoto a velocità costante $c$. Il valore della velocità della luce nel vuoto è

$$c = 2,998 \times 10^{8}\ \text{m/s} ,$$

in accordo con la costante fissata per tutto il testo. Un'onda elettromagnetica, come ogni onda, è descritta da alcune grandezze fondamentali:

- la **lunghezza d'onda** $\lambda$, la distanza tra due picchi (o due valli) successivi dell'onda, misurata in metri o suoi sottomultipli (nm, pm);

- la **frequenza** $\nu$, il numero di oscillazioni complete che si ripetono nell'unità di tempo, misurata in hertz ($1\ \text{Hz} = 1\ \text{s}^{-1}$);

- l'**ampiezza**, l'altezza dell'onda rispetto all'asse di propagazione;

- l'**intensità**, proporzionale al quadrato dell'ampiezza, che indica quanta energia per unità di tempo e di area trasporta l'onda.

Tutte le onde elettromagnetiche viaggiano nel vuoto alla stessa velocità $c$, ma differiscono per frequenza e lunghezza d'onda, legate dalla relazione

:::formula{id="8.1" label="Relazione tra lunghezza d'onda, frequenza e velocità della luce"}
$$c = \lambda \nu$$
:::

Questa relazione mostra che $\lambda$ e $\nu$ variano in modo inversamente proporzionale: a frequenza maggiore corrisponde lunghezza d'onda minore, e viceversa. L'insieme delle radiazioni elettromagnetiche a tutte le lunghezze d'onda possibili, da circa $10^{-12}\ \text{m}$ (raggi gamma) a $10^{-4}\ \text{m}$ e oltre (onde radio), costituisce lo spettro elettromagnetico; la porzione percepita dall'occhio umano, detta luce visibile, corrisponde a lunghezze d'onda comprese tra $400\ \text{nm}$ e $750\ \text{nm}$. Una radiazione formata da una sola lunghezza d'onda si dice monocromatica, mentre una radiazione che contiene molte lunghezze d'onda, come la luce bianca, si dice policromatica.

Questa descrizione ondulatoria, elaborata da Maxwell e confermata da fenomeni come l'interferenza e la diffrazione, spiega perfettamente la propagazione della luce, ma non è sufficiente a rendere conto di come la luce scambi energia con la materia, come si vedrà nei due fenomeni seguenti.

### Il corpo nero e la quantizzazione dell'energia

Un primo indizio che la descrizione puramente ondulatoria della luce fosse incompleta venne dallo studio della radiazione emessa da un corpo riscaldato a temperature elevate (dell'ordine di $1000\ \text{K}$). Un oggetto di questo tipo è modellizzato come **corpo nero**: un oggetto ideale che assorbe tutta la radiazione elettromagnetica incidente, senza rifletterne alcuna, e che, in equilibrio termico, riemette energia sotto forma di radiazione (fenomeno dell'incandescenza). Un corpo nero assorbe ed emette radiazione in un'ampia gamma di lunghezze d'onda, poiché gli atomi e gli elettroni che lo compongono hanno un comportamento collettivo. Sperimentalmente si osserva che, aumentando la temperatura, il massimo di intensità della radiazione emessa si sposta verso lunghezze d'onda via via minori, e che a lunghezze d'onda molto piccole l'energia irradiata non cresce indefinitamente, ma torna a zero.

:::image{src="assets/307a8edc-spettro-corpo-nero-temperature.svg" alt="Spettri di corpo nero a due temperature, con il massimo spostato verso lunghezze d'onda minori alla temperatura più alta" caption="Fig. 8.1 — Intensità spettrale in funzione della lunghezza d'onda a due temperature: il massimo si sposta verso lunghezze d'onda minori all'aumentare della temperatura"}
:::

La teoria elettromagnetica classica non è in grado di spiegare questo andamento: i modelli classici, infatti, prevedevano una radiazione di intensità infinita alle alte frequenze, in netto contrasto con l'esperienza. Nel 1900 Max Planck risolse il problema con un'ipotesi radicale: lo scambio di energia tra materia e radiazione non avviene in modo continuo, ma per mezzo di **quanti**, pacchetti discreti di energia. In particolare, una particella carica che oscilla con frequenza $\nu$ può scambiare energia con l'ambiente soltanto in pacchetti di grandezza

:::formula{id="8.2" label="Energia di un quanto di radiazione"}
$$E = h\nu$$
:::

dove $h$ è la costante di Planck, $h = 6,626 \times 10^{-34}\ \text{J·s}$. In modo equivalente, l'energia totale scambiata da un oscillatore è un multiplo intero del quanto, $E = nh\nu$ con $n$ intero. La conseguenza concettuale è che l'energia di un atomo (o di un oscillatore atomico) non varia con continuità, ma è **quantizzata**: sono permessi solo certi valori discreti di energia, non un continuo di valori come prevedeva la fisica classica. Questa idea, apparentemente un semplice artificio matematico per Planck, si rivelerà il fondamento di tutta la descrizione quantomeccanica dell'atomo discussa nelle sezioni successive.

**Errore tipico 8.1.** Scrivere la relazione di Planck come $E = h/\nu$ invece di $E = h\nu$: poiché l'energia del quanto cresce con la frequenza (non diminuisce), la radiazione ultravioletta, più frequente, è più energetica della radiazione infrarossa, meno frequente, non il contrario.

### L'effetto fotoelettrico

Ulteriore e decisiva conferma della natura quantizzata della radiazione venne dallo studio dell'**effetto fotoelettrico**: l'emissione di elettroni da parte della superficie di un metallo esposta a radiazione, tipicamente ultravioletta. L'apparato sperimentale consiste in un'ampolla sotto vuoto con due elettrodi: un emettitore, che libera elettroni se colpito dalla luce, e un collettore, che li raccoglie, inseriti in un circuito che misura la corrente generata.

L'osservazione sperimentale mostrava due fatti incompatibili con la teoria ondulatoria classica della luce:

- non si osserva alcuna emissione di elettroni se la frequenza della radiazione incidente è inferiore a un certo valore soglia, caratteristico del metallo, indipendentemente da quanto intensa sia la radiazione; la teoria ondulatoria classica, al contrario, associa l'energia della luce alla sua intensità, e prevederebbe emissione di elettroni con luce di qualunque colore, purché sufficientemente intensa;

- se la frequenza supera il valore di soglia, gli elettroni vengono emessi immediatamente, senza alcun ritardo misurabile, anche con radiazione di intensità molto bassa; la teoria ondulatoria, invece, richiederebbe un certo intervallo di tempo prima dell'emissione quando l'intensità della luce incidente è bassa.

Einstein spiegò queste osservazioni estendendo l'ipotesi di Planck: propose che la radiazione elettromagnetica fosse costituita da particelle, i **fotoni**, prive di massa, ciascuna delle quali trasporta un pacchetto di energia $E = h\nu$, correlato alla frequenza (non all'intensità) della radiazione. L'**intensità** della radiazione indica quindi il numero di fotoni che colpiscono il metallo nell'unità di tempo, mentre l'**energia** di ciascun fotone, che dipende solo dalla frequenza, determina se l'effetto fotoelettrico possa avvenire.

Nell'urto, ogni fotone cede tutta la sua energia a un singolo elettrone del metallo. Una parte di questa energia, detta lavoro di estrazione $\Phi$, è necessaria per vincere l'attrazione che lega l'elettrone al metallo; l'energia restante si ritrova come energia cinetica dell'elettrone emesso:

:::formula{id="8.3" label="Energia cinetica massima nell'effetto fotoelettrico"}
$$K_{\max}=h\nu-\Phi$$
:::

Se $h\nu < \Phi$, nessun elettrone viene emesso, qualunque sia l'intensità della radiazione: questo spiega la frequenza di soglia osservata sperimentalmente. Se $h\nu \ge \Phi$, l'elettrone viene emesso istantaneamente; la sua energia cinetica può essere inferiore al valore massimo $K_{\max}=h\nu-\Phi$. Aumentando l'intensità aumenta solo il numero di elettroni emessi, non la loro energia cinetica massima. Il successo di questa interpretazione dimostrò che l'energia della radiazione ha, in questo contesto, natura particellare: la luce manifesta così una duplice natura, ondulatoria e corpuscolare, riassunta nelle due relazioni equivalenti

$$\nu = \frac{c}{\lambda} \qquad \Longrightarrow \qquad E = h\nu = h\,\frac{c}{\lambda} .$$

:::image{src="assets/307a8edc-effetto-fotoelettrico-energia-cinetica.svg" alt="Grafico dell'energia cinetica dell'elettrone fotoemesso in funzione della frequenza della radiazione incidente, con frequenza di soglia e crescita lineare" caption="Fig. 8.2 — Energia cinetica massima dell'elettrone emesso in funzione della frequenza della radiazione: nessuna emissione sotto la frequenza di soglia, poi crescita lineare con pendenza h"}
:::

**Esempio svolto 8.1.** Una superficie di sodio viene illuminata con luce di lunghezza d'onda $\lambda = 400\ \text{nm}$. Si vuole calcolare l'energia di un fotone di questa radiazione, in joule e in kJ/mol di fotoni.

1. *Dati.* $\lambda = 400\ \text{nm} = 4,00 \times 10^{-7}\ \text{m}$; $h = 6,626 \times 10^{-34}\ \text{J·s}$; $c = 2,998 \times 10^{8}\ \text{m/s}$; $N_A = 6,022 \times 10^{23}\ \text{mol}^{-1}$.

2. *Strategia.* Si calcola prima la frequenza con {{formula:8.1}}, poi l'energia del singolo fotone con {{formula:8.2}}, infine si moltiplica per $N_A$ per ottenere l'energia riferita a una mole di fotoni.

3. *Calcolo.*

$$\nu = \frac{c}{\lambda} = \frac{2,998 \times 10^{8}\ \text{m/s}}{4,00 \times 10^{-7}\ \text{m}} = 7,495 \times 10^{14}\ \text{Hz}$$

$$E_{\text{fotone}} = h\nu = (6,626 \times 10^{-34}\ \text{J·s})(7,495 \times 10^{14}\ \text{s}^{-1}) = 4,968 \times 10^{-19}\ \text{J}$$

$$E_{\text{mole}} = E_{\text{fotone}} \cdot N_A = (4,968 \times 10^{-19}\ \text{J})(6,022 \times 10^{23}\ \text{mol}^{-1}) = 2,992 \times 10^{5}\ \text{J/mol} = 299,2\ \text{kJ/mol}$$

4. *Verifica.* L'ordine di grandezza è quello tipico dei fotoni di luce visibile ($10^{-19}\ \text{J}$ per fotone, poche centinaia di kJ/mol su scala molare), confrontabile con le energie di legame chimico: non a caso la luce visibile e ultravioletta può indurre reazioni fotochimiche, mentre le onde radio, molto meno energetiche, non lo possono.

**Errore tipico 8.2.** Dimenticare di convertire $\lambda$ in metri prima di applicare $\nu = c/\lambda$ (un valore in nanometri lasciato tale nel calcolo produce un errore di nove ordini di grandezza), oppure confondere l'energia di un singolo fotone con l'energia riferita a una mole di fotoni, che va moltiplicata per $N_A$ secondo quanto fissato nella sezione su [massa, mole e massa molare](ref:chapter/2#p5).

La quantizzazione dell'energia, introdotta qui per la radiazione del corpo nero e per l'effetto fotoelettrico, sarà il filo conduttore della sezione successiva, dove si applicherà agli spettri a righe degli atomi e al modello di Bohr dell'atomo di idrogeno.

## p3 | Spettri atomici e modello di Bohr

### Dagli spettri a righe alla quantizzazione dell'energia

Lo studio della luce emessa o assorbita dalle sostanze costituisce una branca della chimica chiamata spettroscopia. Se si fa passare luce bianca attraverso un prisma si ottiene uno spettro continuo, perché la luce bianca contiene tutte le lunghezze d'onda della radiazione visibile; se invece attraverso il prisma passa la luce emessa da atomi di idrogeno eccitati (ad esempio in una scarica elettrica a bassa pressione), si osserva che la radiazione è composta da un numero limitato di righe spettrali, la più intensa delle quali è rossa a 656 nm.

:::image{src="assets/7951e11d-spettri-idrogeno.svg" alt="Tre spettri tra 380 e 700 nm: continuo uniforme, emissione con righe a 410, 434, 486 e 656 nm, assorbimento con righe scure alle stesse lunghezze d’onda." caption="Fig. 8.3 — Confronto schematico tra spettro continuo, emissione e assorbimento dell’idrogeno nel visibile. Le righe della serie di Balmer sono allineate."}
:::

Un atomo eccitato (cioè che ha ricevuto energia, per esempio dal calore di una fiamma o da una scarica elettrica) emette luce solo a lunghezze d'onda discrete, dando luogo a uno spettro a righe caratteristico dell'elemento, detto spettro di emissione; esso permette di riconoscere l'elemento stesso. Facendo invece attraversare un vapore atomico dalla luce bianca si osserva lo spettro di assorbimento, cioè una serie di righe scure su uno sfondo continuo, le cui lunghezze d'onda coincidono con quelle dello spettro di emissione.

La presenza di righe discrete, anziché di uno spettro continuo, suggerisce che l'energia dell'elettrone in un atomo sia limitata a una serie di valori discreti, detti livelli energetici, e che ogni riga spettrale corrisponda a una transizione, cioè a un passaggio dell'elettrone tra due livelli energetici consentiti; la differenza di energia tra i due livelli è pari all'energia (e quindi alla frequenza) della radiazione scambiata. Questa osservazione era in totale contrasto con la fisica classica, secondo la quale l'energia di un elettrone in moto accelerato dovrebbe variare in modo continuo.

### L'equazione di Rydberg e le serie spettrali dell'idrogeno

Nel 1885 Balmer riconobbe un andamento regolare nelle righe dello spettro visibile dell'idrogeno; pochi anni dopo Rydberg generalizzò l'osservazione in un'espressione empirica capace di riprodurre la frequenza di tutte le righe:

:::formula{id="8.4" label="Equazione di Rydberg"}
$$\nu = cR_{\mathrm H}\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right), \qquad \frac{1}{\lambda} = R_{\mathrm H}\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right)$$
:::

dove $n_1$ e $n_2$ sono numeri interi positivi con $n_2 > n_1$; $cR_{\mathrm H} \approx 3,29 \times 10^{15}\ \text{Hz}$ è la costante di Rydberg espressa come frequenza, mentre $R_{\mathrm H} \approx 1,097 \times 10^{7}\ \text{m}^{-1}$ è la stessa costante espressa come numero d'onda, l'inverso di una lunghezza. Al tempo della sua formulazione nessuno sapeva spiegare perché le righe seguissero esattamente questa legge, né perché ogni elemento diverso dall'idrogeno producesse righe a lunghezze d'onda diverse.

Fissando il valore di $n_1$ si ottengono le diverse serie spettrali dell'idrogeno:

- serie di Lyman, nell'ultravioletto, con $n_1 = 1$;
- serie di Balmer, nel visibile, con $n_1 = 2$;
- serie di Paschen, nell'infrarosso, con $n_1 = 3$.

**Esempio svolto 8.2** (riga della serie di Balmer)

Si vuole calcolare la lunghezza d'onda della riga emessa dalla transizione $n_2 = 4 \to n_1 = 2$ nell'atomo di idrogeno.

1. Dati: $n_1 = 2$, $n_2 = 4$, $R_{\mathrm H} = 1,097 \times 10^{7}\ \text{m}^{-1}$ (costante di Rydberg espressa come numero d'onda).

2. Strategia: si applica la {{formula:8.4}} nella forma per $1/\lambda$.

3. Calcolo:

$\displaystyle \frac{1}{\lambda} = R_{\mathrm H}\left(\frac{1}{2^2}-\frac{1}{4^2}\right) = R_{\mathrm H}\left(0,2500 - 0,0625\right) = R_{\mathrm H} \cdot 0,1875$

$\displaystyle \frac{1}{\lambda} = 1,097 \times 10^{7}\ \text{m}^{-1} \times 0,1875 = 2,057 \times 10^{6}\ \text{m}^{-1}$

$\displaystyle \lambda = \frac{1}{2,057 \times 10^{6}\ \text{m}^{-1}} = 4,86 \times 10^{-7}\ \text{m} = 486\ \text{nm}$

4. Verifica: il valore ottenuto, 486 nm, cade nella regione del visibile (azzurro-verde) e appartiene alla serie di Balmer poiché $n_1 = 2$, coerentemente con la riga sperimentale della serie riportata nelle tabelle spettroscopiche.

### Il modello atomico di Bohr

L'equazione di Rydberg era puramente empirica: non spiegava perché l'idrogeno emettesse proprio quelle frequenze. Nel 1913 Niels Bohr propose un modello dell'atomo di idrogeno unendo il modello nucleare di Rutherford con l'idea della quantizzazione dell'energia introdotta da Planck, basato su tre postulati:

1. L'atomo di idrogeno possiede soltanto certi livelli energetici permessi, detti stati stazionari; a ciascuno di essi è associata un'orbita circolare fissa dell'elettrone attorno al nucleo.
2. L'atomo non irraggia energia mentre si trova in uno stato stazionario, anche se questo contraddice la fisica classica; l'elettrone non cade sul nucleo perché la forza centrifuga è esattamente bilanciata dall'attrazione coulombiana verso il nucleo carico positivamente. A questa ipotesi si affianca la condizione di quantizzazione: sono permessi solo gli stati di moto in cui il momento angolare dell'elettrone è un multiplo intero di $h/(2\pi)$.
3. L'atomo compie una transizione fra due stati stazionari solo assorbendo o emettendo un fotone la cui energia è pari esattamente alla differenza di energia fra i due stati: $E_{\text{fotone}} = E_{\text{stato}(1)} - E_{\text{stato}(2)} = h\nu$, con $E_{\text{stato}(1)} > E_{\text{stato}(2)}$ per l'emissione.

Ogni livello permesso è indicato dal numero quantico principale $n = 1, 2, 3, \dots$, legato al raggio dell'orbita: al crescere di $n$ cresce il raggio e cresce l'energia dell'elettrone. Lo stato con $n = 1$, detto stato fondamentale, ha nell'atomo di idrogeno raggio $a_0 = 53\ \text{pm}$ (raggio di Bohr); per $n > 1$ l'atomo si trova in uno stato eccitato, con raggio pari a $n^2 a_0$. L'energia di un elettrone in un'orbita permessa è data da

:::formula{id="8.5" label="Energia dei livelli dell'atomo di Bohr"}
$$E_n = -\frac{R_h}{n^2}$$
:::

dove $R_h = 2,18 \times 10^{-18}\ \text{J}$ è la costante di Rydberg espressa in unità di energia. La frequenza (e quindi l'energia) del fotone scambiato in una transizione fra due livelli $n_1$ e $n_2$ vale

:::formula{id="8.6" label="Energia del fotone in una transizione di Bohr"}
$$h\nu = E_2 - E_1 = R_h\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right)$$
:::

espressione che, per $E_1 < 0$ ed $E_2$ più vicino a zero (ossia $n_2 > n_1$), riproduce esattamente l'equazione empirica di Rydberg. Questo è il grande risultato del modello: calcolando le differenze di energia fra i livelli previsti da Bohr si ottengono proprio le frequenze osservate sperimentalmente nello spettro dell'idrogeno.

:::image{src="assets/7951e11d-livelli-energetici-bohr.svg" alt="Livelli energetici dell'atomo di idrogeno secondo il modello di Bohr" caption="Fig. 8.4 — Livelli energetici E_n = -R_h/n^2 per n = 1, 2, 3, 4, 5: l'energia è negativa, cresce (si avvicina a zero) con n e i livelli si addensano verso lo zero, limite per n che tende a infinito."}
:::

**Esempio svolto 8.3** (transizione $n = 3 \to n = 2$)

Si vuole trovare la lunghezza d'onda del fotone emesso quando l'elettrone dell'atomo di idrogeno passa dal livello $n = 3$ al livello $n = 2$.

1. Dati: $R_h = 2,18 \times 10^{-18}\ \text{J}$; $h = 6,626 \times 10^{-34}\ \text{J·s}$; $c = 2,998 \times 10^{8}\ \text{m/s}$.

2. Strategia: si calcola $\Delta E$ con la {{formula:8.6}}, poi si ricavano $\nu$ e $\lambda$ dalle relazioni fra energia, frequenza e lunghezza d'onda introdotte in [radiazione elettromagnetica e quanti](ref:chapter/8#p2).

3. Calcolo:

$\displaystyle \Delta E = R_h\left(\frac{1}{2^2}-\frac{1}{3^2}\right) = 2,18 \times 10^{-18}\ \text{J} \times 0,13889 = 3,028 \times 10^{-19}\ \text{J}$

$\displaystyle \nu = \frac{\Delta E}{h} = \frac{3,028 \times 10^{-19}}{6,626 \times 10^{-34}} = 4,569 \times 10^{14}\ \text{Hz}$

$\displaystyle \lambda = \frac{c}{\nu} = \frac{2,998 \times 10^{8}}{4,569 \times 10^{14}} = 6,561 \times 10^{-7}\ \text{m} = 656\ \text{nm}$

4. Verifica: 656 nm è nel rosso, in accordo con l'osservazione sperimentale che la transizione $n=3 \to n=2$ produce la riga rossa della serie di Balmer (656 nm), mentre un salto più ampio come $n=5 \to n=2$ produce un fotone di energia maggiore e lunghezza d'onda minore (luce blu-violetto, $\lambda = 434\ \text{nm}$).

**Errore tipico 8.3**

Uno sbaglio frequente è confondere il segno dell'energia: poiché $E_n$ è negativo, l'elettrone che passa da $n$ più alto a $n$ più basso perde energia (emissione, $\Delta E > 0$ come energia del fotone), mentre il passaggio verso $n$ più alto richiede l'assorbimento di un fotone, non la sua emissione. È bene sempre controllare il verso della transizione prima di interpretare il segno del risultato.

### Successi e limiti del modello di Bohr

Il modello di Bohr ebbe il merito storico di collegare per la prima volta la struttura discreta dei livelli energetici alla comparsa di righe spettrali, spiegando correttamente lo spettro dell'idrogeno e permettendo di ricavarne esattamente i dati, comprese le serie di Lyman, Balmer e Paschen.

Il modello presenta però limiti importanti, segnalati dagli stessi appunti del corso:

- è valido solo per l'idrogeno e per gli ioni idrogenoidi, cioè le specie con un solo elettrone (He$^+$, Li$^{2+}$, ...), perché non tiene conto delle repulsioni tra più elettroni né delle attrazioni aggiuntive nucleo-elettroni in atomi polielettronici; lo spettro dell'elio, ad esempio, presenta righe non previste dal modello;
- non spiega l'intensità delle righe spettrali né la loro suddivisione in presenza di campi magnetici (effetto Zeeman);
- non fornisce alcun criterio razionale per distribuire gli elettroni sulle diverse orbite in atomi con più elettroni;
- le orbite circolari fisse ipotizzate da Bohr non corrispondono alla realtà fisica dell'elettrone, la cui descrizione come particella che percorre una traiettoria definita è in contraddizione con il principio di indeterminazione di Heisenberg, che sarà introdotto nella sezione sul [modello quantomeccanico e gli orbitali](ref:chapter/8#p4);
- resta inoltre senza risposta la domanda di come e in quanto tempo l'elettrone compia il salto da un'orbita all'altra, segno di una debolezza strutturale dovuta al mescolamento fra concetti classici e concetti quantistici.

Nonostante questi limiti, due idee del modello di Bohr restano centrali nella chimica moderna: l'esistenza di uno stato fondamentale e di stati eccitati, e la quantizzazione dell'energia elettronica in livelli discreti; sono queste idee, e non le orbite circolari, che vengono riprese e rese rigorose dal modello quantomeccanico trattato nella sezione successiva.

## p4 | Modello quantomeccanico e orbitali

Il modello di Bohr, trattato nella sezione precedente su [spettri atomici e modello di Bohr](ref:chapter/8#p3), prevede correttamente le righe spettrali dell'idrogeno ma fallisce per qualsiasi atomo con più di un elettrone, perché resta ancorato all'idea classica di un elettrone che percorre un'orbita circolare a raggio fisso. Il passo successivo, compiuto tra il 1924 e il 1927, consiste nell'abbandonare il concetto di traiettoria e nel descrivere l'elettrone con gli strumenti della meccanica ondulatoria.

### Il dualismo onda-particella e la relazione di de Broglie

Nel 1924 Louis de Broglie propose di invertire la logica con cui Einstein aveva interpretato l'effetto fotoelettrico: se la radiazione, che si pensava puramente ondulatoria, mostra anche un comportamento corpuscolare (il fotone), allora anche la materia, che si pensa puramente corpuscolare, dovrebbe mostrare un comportamento ondulatorio. **L'ipotesi di de Broglie** afferma che se l'energia è di natura particellare, allora la materia è di natura ondulatoria. De Broglie estese alla materia la relazione $p = h/\lambda$ valida per i fotoni, proponendo che a ogni particella di massa $m$ in moto con velocità $v$ (quindi con quantità di moto $p = mv$) sia associata una lunghezza d'onda $\lambda$.

:::formula{id="8.7" label="Relazione di de Broglie"}
$$\lambda = \frac{h}{p} = \frac{h}{mv}$$
:::

dove $h$ è la costante di Planck. Questa relazione fu verificata sperimentalmente nel 1927 da Davisson e Germer, che osservarono la diffrazione di un fascio di elettroni da parte di un cristallo di nichel, un fenomeno tipicamente ondulatorio.

**Esempio svolto 8.4.** Calcolare la lunghezza d'onda di de Broglie di un elettrone ($m_e = 9,109 \times 10^{-31}$ kg) che si muove alla velocità $v = 2,2 \times 10^6$ m/s, tipica di un elettrone nell'atomo di idrogeno.

1. *Dati*: $m = 9,109 \times 10^{-31}$ kg, $v = 2,2 \times 10^6$ m/s, $h = 6,626 \times 10^{-34}$ J·s.
2. *Strategia*: si applica {{formula:8.7}} con $p = mv$.
3. *Calcolo*:

$$
\begin{aligned}
p &= (9,109 \times 10^{-31}\ \text{kg})(2,2 \times 10^6\ \text{m/s}) = 2,0 \times 10^{-24}\ \text{kg·m/s} \\
\lambda &= \frac{6,626 \times 10^{-34}\ \text{J·s}}{2,0 \times 10^{-24}\ \text{kg·m/s}} \approx 3,3 \times 10^{-10}\ \text{m}
\end{aligned}
$$

4. *Verifica*: questo valore, dell'ordine di $10^{-10}$ m, è confrontabile con le distanze interatomiche in un cristallo, motivo per cui un fascio di elettroni viene diffratto da un reticolo cristallino esattamente come i raggi X.

Per un oggetto macroscopico la stessa formula fornisce lunghezze d'onda infinitesime e non osservabili: è per questo che il comportamento ondulatorio della materia è rilevante solo su scala atomica.

### Il principio di indeterminazione di Heisenberg

In meccanica classica una particella segue una traiettoria definita, con posizione e quantità di moto note in ogni istante. Se però l'elettrone si comporta anche come un'onda, il concetto stesso di posizione perde significato, perché un'onda si distribuisce nello spazio senza occupare un punto preciso. Da questa osservazione, nel 1927 Werner Heisenberg dimostrò che è impossibile conoscere simultaneamente, con precisione arbitraria, la posizione e la quantità di moto di una particella subatomica.

**Teorema 8.1** (principio di indeterminazione di Heisenberg). Se la posizione di una particella lungo un asse è nota con incertezza $\Delta x$ e la componente della quantità di moto lungo lo stesso asse è nota con incertezza $\Delta p$, allora

:::formula{id="8.8" label="Principio di indeterminazione di Heisenberg"}
$$\Delta p \cdot \Delta x \geq \frac{1}{2}\hbar, \qquad \hbar = \frac{h}{2\pi}$$
:::

Se $\Delta x$ è molto piccolo, $\Delta p$ deve essere molto grande, e viceversa. Una formulazione equivalente, spesso usata nei testi introduttivi in termini di velocità, scrive l'incertezza come

$$\Delta x \cdot m \Delta u \geq \frac{h}{4\pi}$$

dove $\Delta u$ è l'incertezza sulla velocità. La seconda forma si ottiene dalla prima sostituendo $\Delta p = m\Delta u$ e $\hbar = h/(2\pi)$.

Il principio non è un limite degli strumenti di misura, ma una proprietà intrinseca dei sistemi quantistici: per un corpo macroscopico, data la sua massa enorme rispetto a quella di un elettrone, il prodotto $\Delta p \cdot \Delta x$ minimo è talmente piccolo da risultare del tutto trascurabile, e la fisica classica resta una descrizione eccellente. Per un elettrone, invece, l'indeterminazione è significativa e impedisce di parlare di orbite nel senso di Bohr: se non si può conoscere la quantità di moto con certezza, non si può definire una traiettoria.

**Errore tipico 8.4.** Molti studenti interpretano il principio di indeterminazione come un limite tecnologico, da superare con strumenti più precisi. In realtà è un limite concettuale: posizione e quantità di moto non possiedono simultaneamente valori definiti con precisione arbitraria, indipendentemente dallo strumento usato.

### L'equazione di Schrödinger e il concetto di orbitale

Abbandonata l'idea di traiettoria, nel 1927 Erwin Schrödinger sostituì a essa il concetto di **funzione d'onda** $\psi$, una funzione matematica del moto della materia-onda associata all'elettrone. Come esempio unidimensionale, per una particella di massa $m$ in una regione in cui l'energia potenziale è $V(x)$, la funzione d'onda stazionaria soddisfa l'equazione di Schrödinger

$$-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + V(x)\,\psi = E\,\psi$$

detta anche, in forma compatta, $\mathcal{H}\psi = E\psi$, dove $\mathcal{H}$ è l'operatore hamiltoniano del sistema (energia cinetica più energia potenziale). Gli orbitali atomici si ricavano invece risolvendo l'equazione di Schrödinger tridimensionale con il potenziale appropriato per l'atomo.

L'orbitale non va confuso con l'orbita del modello di Bohr: l'orbita era una traiettoria ipotetica seguita dall'elettrone, mentre l'orbitale è una funzione matematica priva di significato fisico diretto. Il significato fisico si ottiene dal modulo quadrato: $|\psi|^2$ è proporzionale alla densità di probabilità di trovare l'elettrone in una data regione dello spazio, cioè alla probabilità di trovarlo in un piccolo volume divisa per quel volume. Una posizione in cui $\psi$ si annulla è detta **nodo**; in un nodo anche $|\psi|^2 = 0$, cioè la probabilità di trovare l'elettrone è nulla. Le rappresentazioni grafiche di $|\psi|^2$ sono spesso chiamate nuvole elettroniche: non descrivono un elettrone realmente spalmato nello spazio, ma la probabilità, istante per istante, di trovarlo in ciascun punto.

### I quattro numeri quantici

Risolvendo l'equazione di Schrödinger per un atomo a tre dimensioni, si trova che ogni orbitale è individuato da una terna di numeri quantici $(n, l, m_l)$. A questi si aggiunge un quarto numero quantico, legato non all'orbitale ma all'elettrone che lo occupa.

- **Numero quantico principale $n$**: intero positivo ($n = 1, 2, 3, \dots$); indica la dimensione relativa dell'orbitale e il livello energetico dell'atomo. Maggiore è $n$, più alto è il livello energetico e più lontano, in media, si trova l'elettrone dal nucleo.
- **Numero quantico del momento angolare $l$** (detto anche azimutale o secondario): intero compreso tra $0$ e $n-1$; determina la forma dell'orbitale. Ai valori di $l$ corrispondono le lettere tradizionali $l=0 \to s$, $l=1 \to p$, $l=2 \to d$, $l=3 \to f$.
- **Numero quantico magnetico $m_l$**: intero compreso tra $-l$ e $+l$, passando per $0$ (quindi $2l+1$ valori possibili); stabilisce l'orientamento dell'orbitale nello spazio attorno al nucleo.
- **Numero quantico di spin $m_s$**: a differenza dei primi tre, non deriva dalla soluzione tridimensionale dell'equazione di Schrödinger ma descrive una proprietà intrinseca dell'elettrone stesso; vale $+\tfrac{1}{2}$ oppure $-\tfrac{1}{2}$. Il suo ruolo nel limitare a due il numero di elettroni per orbitale (principio di esclusione di Pauli) sarà ripreso nella sezione sulla configurazione elettronica.

Per un dato $n$, il numero totale di orbitali è $n^2$ e il numero massimo di elettroni che quel livello può contenere è $2n^2$.

:::formula{id="8.9" label="Orbitali ed elettroni massimi in un livello n"}
$$\text{numero di orbitali} = n^2, \qquad \text{numero massimo di elettroni} = 2n^2$$
:::

**Esempio svolto 8.5.** Specificare tutti i valori possibili di $l$ e $m_l$ per $n = 4$, e determinare quanti orbitali e quanti elettroni al massimo può contenere il livello.

1. *Dati*: $n = 4$.
2. *Strategia*: $l$ va da $0$ a $n-1$; per ciascun $l$, $m_l$ va da $-l$ a $+l$.
3. *Calcolo*: per $n=4$ si ha $l = 0, 1, 2, 3$, ossia i sottolivelli $4s, 4p, 4d, 4f$. I rispettivi valori di $m_l$ sono: per $l=0$, $m_l=0$ (1 orbitale); per $l=1$, $m_l=-1,0,+1$ (3 orbitali); per $l=2$, $m_l=-2,-1,0,+1,+2$ (5 orbitali); per $l=3$, $m_l=-3,-2,-1,0,+1,+2,+3$ (7 orbitali).
4. *Verifica*: il totale degli orbitali è $1+3+5+7=16=4^2=n^2$, e il numero massimo di elettroni è $2 \times 16 = 32 = 2n^2$, in accordo con {{formula:8.9}}.

**Errore tipico 8.5.** Uno sbaglio frequente è assegnare a $l$ un valore uguale o maggiore di $n$ (per esempio $l=2$ con $n=2$): per definizione $l$ può arrivare solo a $n-1$, quindi il sottolivello $2d$ non esiste. Un secondo errore comune è dimenticare che i valori di $m_l$ sono $2l+1$ e non $l+1$, perché si deve contare anche la metà negativa dell'intervallo.

### Forma e nodi degli orbitali s, p, d

La forma di un orbitale dipende solo dal numero quantico $l$, mentre $n$ ne determina l'estensione spaziale e il numero di nodi.

Gli **orbitali s** ($l=0$) hanno simmetria sferica, con il nucleo al centro: per l'atomo di idrogeno nello stato fondamentale l'elettrone occupa l'orbitale $1s$, la cui densità elettronica è massima in corrispondenza del nucleo. Al crescere di $n$ compaiono superfici sferiche in cui la probabilità si annulla, dette **superfici nodali**: l'orbitale $2s$ ha una superficie nodale sferica, l'orbitale $3s$ ne ha due, e in generale un orbitale $ns$ ha $n-1$ superfici nodali radiali.

:::image{src="assets/d17bc2bc-densita-radiale-1s-2s.svg" alt="Distribuzione di probabilità radiale per gli orbitali 1s e 2s dell'atomo di idrogeno, con il nodo del 2s indicato" caption="Fig. 8.5 — Probabilità radiale (in unità arbitrarie) per gli orbitali 1s e 2s: il 2s si annulla in corrispondenza del suo nodo sferico, mentre il 1s resta sempre positivo"}
:::

Gli **orbitali p** ($l=1$) hanno due lobi di alta probabilità su lati opposti rispetto al nucleo, separati da un piano nodale che passa per il nucleo stesso; il primo orbitale p esistente è il $2p$. Poiché $m_l$ assume tre valori ($-1,0,+1$), per ogni $n \geq 2$ esistono tre orbitali p degeneri (stessa energia, stessa forma e dimensione), orientati lungo i tre assi cartesiani e indicati come $p_x$, $p_y$, $p_z$.

Gli orbitali d ($l=2$) hanno cinque possibili orientamenti, corrispondenti ai cinque valori di $m_l$ ($-2,-1,0,+1,+2$). Quattro di essi ($d_{xy}, d_{xz}, d_{yz}, d_{x^2-y^2}$) presentano quattro lobi separati da due piani nodali reciprocamente ortogonali, con il nucleo nel punto di incontro dei lobi; i primi tre giacciono nei piani $xy$, $xz$, $yz$ con i lobi tra gli assi, mentre $d_{x^2-y^2}$ giace nel piano $xy$ con i lobi diretti lungo gli assi. Il quinto orbitale, $d_{z^2}$, ha una forma diversa: due lobi lungo l'asse $z$ circondati da una regione di densità elettronica a forma di ciambella (toroide) nel piano $xy$.

:::image{src="assets/Electron-Orbitals.png" alt="Forme degli orbitali atomici disegnate su assi x, y, z: (a) orbitale s sferico; (b) orbitali px, py e pz, ciascuno con due lobi lungo il proprio asse; (c) i cinque orbitali d, quattro a quattro lobi e dz2 con due lobi lungo z e un anello nel piano xy" caption="Fig. 8.6 — Forma e orientamento degli orbitali s (a), p (b) e d (c) rispetto agli assi cartesiani. Immagine: LibreTexts, Electron Arrangement: The Quantum Model, CC BY-NC-SA 4.0"}
:::

Gli orbitali f ($l=3$), con sette possibili orientamenti e forme multilobate più complesse, non vengono occupati fino al livello $n=4$ e saranno richiamati solo per la posizione degli elementi di transizione interna nella tavola periodica.

**Errore tipico 8.6.** È sbagliato pensare che una maggiore densità di probabilità vicino al nucleo significhi che l'elettrone "orbita" a distanza fissa: la distribuzione radiale descrive solo la probabilità media di trovare l'elettrone a una certa distanza, non una traiettoria; inoltre non bisogna confondere il numero di superfici nodali (legato a $n$ e $l$) con il numero di lobi dell'orbitale (legato alla forma imposta da $l$).

## p5 | Configurazione elettronica di atomi e ioni

La configurazione elettronica è la rappresentazione completa dei sottolivelli occupati da tutti gli elettroni di un atomo o di uno ione, e descrive come gli elettroni sono distribuiti tra i vari orbitali atomici. Conoscerla permette di prevedere il comportamento chimico di un elemento, il suo posto nella tavola periodica (già discussa in [La tavola periodica](ref:chapter/2#p4)) e, come si vedrà in chiusura di sezione, la sua risposta a un campo magnetico esterno.

### Le tre regole di costruzione: Aufbau, Pauli, Hund

La costruzione della configurazione elettronica fondamentale di un atomo segue tre regole.

**Principio di Aufbau.** La configurazione elettronica fondamentale di un elemento si ottiene partendo dall'atomo di idrogeno e inserendo via via gli elettroni negli orbitali disponibili a energia crescente, in modo da portare l'atomo allo stato di energia minima; equivalentemente, si costruisce la configurazione di ciascun elemento aggiungendo un elettrone a quella dell'elemento che lo precede nella tavola periodica.

Per gli atomi polielettronici l'ordine energetico degli orbitali non dipende dal solo numero quantico principale $n$ (come nell'atomo di idrogeno) perché la repulsione tra elettroni altera la sequenza dei livelli; l'ordine approssimato di riempimento, valido per la maggior parte degli elementi, è:

:::formula{id="8.10" label="Ordine di riempimento degli orbitali"}
$$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s < 5f < 6d < 7p$$
:::

In pratica questo ordine si legge direttamente percorrendo la tavola periodica per righe, blocco s, poi d (spostato di un periodo), poi p, con i blocchi f inseriti tra il gruppo 3 e il blocco d del periodo corrispondente; questa corrispondenza tra struttura della tavola e riempimento degli orbitali è uno dei motivi per cui elementi dello stesso gruppo hanno proprietà chimiche simili: condividono la configurazione del livello esterno.

**Principio di esclusione di Pauli.** In un atomo non possono esistere due elettroni con lo stesso insieme dei quattro numeri quantici $n, l, m_l, m_s$. Se due elettroni occupano lo stesso orbitale (stessi $n$, $l$, $m_l$), devono quindi avere spin diverso; ne segue che ogni orbitale può ospitare al massimo due elettroni, accoppiati con spin antiparallelo. Due elettroni con lo stesso numero quantico di spin si dicono a spin parallelo, con spin opposto a spin antiparallelo. Da questo principio discende la capacità massima di elettroni di ciascun tipo di sottolivello:

- sottolivello $s$ (1 orbitale): 2 elettroni;
- sottolivello $p$ (3 orbitali): 6 elettroni;
- sottolivello $d$ (5 orbitali): 10 elettroni;
- sottolivello $f$ (7 orbitali): 14 elettroni.

**Regola di Hund (massima molteplicità).** Quando sono disponibili più orbitali degeneri (stessa energia), la configurazione di energia minima è quella con il massimo numero di elettroni spaiati e a spin paralleli: gli elettroni occupano prima tutti gli orbitali vuoti del sottolivello, e solo in seguito iniziano ad accoppiarsi. La ragione fisica è che due elettroni nello stesso orbitale subiscono una repulsione elettrostatica maggiore rispetto a due elettroni in orbitali distinti del medesimo sottolivello; occupare per primi gli orbitali vuoti minimizza questa repulsione. Il carbonio, con configurazione esterna $2p^2$, esemplifica la regola: i due elettroni 2p occupano due orbitali p diversi, con spin paralleli, anziché accoppiarsi nello stesso orbitale.

### Scrittura delle configurazioni e configurazione condensata

La configurazione elettronica si scrive elencando, in ordine di riempimento, i sottolivelli occupati nella forma $n l^{\#}$, dove $n$ è il livello energetico principale, $l$ la lettera del sottolivello ($s, p, d, f$) e l'apice $\#$ il numero di elettroni che lo occupano. In alternativa, il diagramma degli orbitali rappresenta ogni orbitale con una casella e ogni elettrone con una freccia orientata secondo lo spin ($\uparrow$ per $m_s = +1/2$, $\downarrow$ per $m_s = -1/2$). Per gli elementi con molti elettroni si usa la configurazione condensata, in cui la configurazione del gas nobile che precede l'elemento è sostituita dal suo simbolo tra parentesi quadre, seguito solo dai sottolivelli riempiti successivamente.

**Esempio svolto 8.6.** Si scriva la configurazione elettronica completa e condensata del ferro ($Z = 26$).

1. *Dati.* $Z = 26$ elettroni da distribuire, ordine di riempimento {{formula:8.10}}.
2. *Strategia.* Si riempiono i sottolivelli in ordine di energia crescente rispettando le capacità massime, fino a esaurire i 26 elettroni.
3. *Calcolo.* $1s^2\,2s^2\,2p^6\,3s^2\,3p^6\,4s^2\,3d^6$. Verifica: $2+2+6+2+6+2+6 = 26$.
4. *Configurazione condensata.* Il gas nobile che precede il ferro è l'argon ($\lbrack Ar\rbrack  = 1s^2 2s^2 2p^6 3s^2 3p^6$), quindi $\mathrm{Fe}: \lbrack Ar\rbrack \,4s^2 3d^6$.

:::image{src="assets/2a2b5e1b-orbitali-ferro.svg" alt="Caselle orbitaliche del ferro con core [Ar], sottolivelli 4s2 e 3d6" caption="Fig. 8.7 — Diagramma degli orbitali del ferro (Z=26) in configurazione condensata: si notino i sei elettroni nel sottolivello 3d distribuiti secondo la regola di Hund."}
:::

Si noti che nella configurazione condensata il sottolivello $3d$ si scrive convenzionalmente dopo il $4s$, seguendo l'ordine di riempimento indicato in precedenza; non si tratta quindi di un ordine crescente di $n$. Nel ferro neutro il $4s$ è ancora più esterno e meno legato del $3d$.

### Eccezioni comuni e configurazioni degli ioni

**Eccezioni dell'Aufbau.** Nel quarto periodo il riempimento di cromo e rame non segue l'ordine previsto: i sottolivelli semipieni e completamente pieni risultano inaspettatamente più stabili di quanto suggerisca il semplice conteggio. Per effetto di questa stabilità aggiuntiva, un elettrone viene "promosso" dal $4s$ al $3d$:

- cromo: configurazione attesa $\lbrack Ar\rbrack \,4s^2 3d^4$, configurazione reale $\lbrack Ar\rbrack \,4s^1 3d^5$ (sottolivello $3d$ semipieno);
- rame: configurazione attesa $\lbrack Ar\rbrack \,4s^2 3d^9$, configurazione reale $\lbrack Ar\rbrack \,4s^1 3d^{10}$ (sottolivello $3d$ completo).

:::image{src="assets/2a2b5e1b-orbitali-cromo-eccezione.svg" alt="Caselle orbitaliche del cromo con core [Ar], sottolivelli 4s1 e 3d5 semipieno" caption="Fig. 8.8 — Configurazione reale del cromo: un elettrone è promosso dal 4s al 3d, che risulta così semipieno e particolarmente stabile."}
:::

Eccezioni analoghe, dovute allo stesso meccanismo o a differenze energetiche tra orbitali esterni che si riducono all'aumentare di $n$, si trovano in Ag, Au e Mo. Queste anomalie vanno imparate caso per caso: non esiste una regola che le preveda tutte a priori.

**Configurazione dei cationi.** Per i metalli di transizione, man mano che l'orbitale $3d$ si riempie lungo il periodo, la carica nucleare crescente attrae i suoi elettroni sempre più fortemente; poiché questi sono interni e poco schermati dagli elettroni $4s$, l'orbitale $3d$ diventa più stabile del $4s$ (fenomeno del crossover). Di conseguenza, quando un metallo di transizione forma un catione, gli elettroni $4s$ vengono rimossi per primi, nonostante siano stati aggiunti per primi durante il riempimento Aufbau. La regola generale è:

- metalli del blocco s: si rimuovono completamente gli elettroni con il valore più alto di $n$;
- metalli del blocco p: si rimuovono prima gli elettroni $np$, poi gli $ns$;
- metalli del blocco d: si rimuovono prima gli elettroni $ns$, poi gli $(n-1)d$;
- non metalli (anioni): si aggiungono elettroni agli orbitali $np$ con il valore più alto di $n$, secondo l'Aufbau.

**Errore tipico 8.7.** Molti studenti, per scrivere il catione di un metallo di transizione, tolgono elettroni dal sottolivello $3d$ perché è l'ultimo scritto nella notazione condensata; occorre invece ricordare che gli elettroni $4s$ (più esterni nell'atomo neutro) sono i primi a essere ceduti.

Alcuni ioni raggiungono così una configurazione particolarmente stabile. Gli ioni dei gruppi 1, 2, 16 e 17 tendono a cedere o acquistare elettroni fino a raggiungere la configurazione del gas nobile più vicino, e si dicono isoelettronici con esso: per esempio $\mathrm{Na}$ ($1s^2 2s^2 2p^6 3s^1$) cede l'elettrone di valenza formando $\mathrm{Na^+}$ ($1s^2 2s^2 2p^6$), isoelettronico con il neon. In alcuni elementi più pesanti dei gruppi 13, 14 e 15, la perdita di tutti gli elettroni esterni fino al gas nobile precedente è energeticamente troppo costosa; questi elementi possono raggiungere una configurazione pseudonobile $(n-1)d^{10}$ oppure, in alcuni casi, una configurazione altrettanto (o più) stabile $ns^2(n-1)d^{10}$. Per esempio, lo stagno dà sia $\mathrm{Sn^{4+}}$ ($\lbrack Kr\rbrack \,4d^{10}$, pseudonobile) sia $\mathrm{Sn^{2+}}$ ($\lbrack Kr\rbrack \,5s^2 4d^{10}$); invece, $\mathrm{Al^{3+}}$ raggiunge la configurazione del gas nobile precedente, $\lbrack Ne\rbrack $. Per gli anioni monoatomici, invece, si procede semplicemente aggiungendo elettroni secondo l'Aufbau, come per un atomo neutro.

### Previsione del paramagnetismo

Il moto di spin di un elettrone genera un piccolo campo magnetico; gli elettroni spaiati contribuiscono al paramagnetismo, mentre le specie prive di elettroni spaiati presentano diamagnetismo. Da questo segue la classificazione magnetica delle sostanze.

**Definizione 8.1.** Una specie con uno o più elettroni spaiati presenta **paramagnetismo**: è attratta da un campo magnetico esterno. Una specie con tutti gli elettroni appaiati presenta **diamagnetismo**: non è attratta (anzi, è debolmente respinta) da un campo magnetico esterno.

Per stabilire il comportamento magnetico di un atomo o di uno ione è quindi sufficiente scrivere la sua configurazione elettronica (condensata, se conviene) e contare gli elettroni spaiati negli ultimi sottolivelli parzialmente occupati, applicando la regola di Hund.

**Esempio svolto 8.7.** Si preveda il comportamento magnetico dello ione manganoso $\mathrm{Mn^{2+}}$ e dello ione $\mathrm{Hg^{2+}}$.

1. *Mn.* Configurazione del manganese neutro ($Z=25$): $\lbrack Ar\rbrack \,4s^2 3d^5$. Per formare $\mathrm{Mn^{2+}}$ si tolgono i due elettroni $4s$ (regola del blocco d): $\mathrm{Mn^{2+}}: \lbrack Ar\rbrack \,3d^5$. I cinque elettroni occupano i cinque orbitali $3d$ degeneri, uno per orbitale con spin parallelo (regola di Hund): tutti e cinque sono spaiati, quindi $\mathrm{Mn^{2+}}$ è paramagnetico.
2. *Hg.* Configurazione condensata di $\mathrm{Hg^{2+}}$: $\lbrack Xe\rbrack \,4f^{14} 5d^{10}$. I sottolivelli $4f$ e $5d$ sono entrambi completamente pieni, dunque tutti gli elettroni sono appaiati: $\mathrm{Hg^{2+}}$ è diamagnetico.

:::image{src="assets/2a2b5e1b-orbitali-mn2.svg" alt="Caselle orbitaliche di Mn2+ con core [Ar] e sottolivello 3d5 con cinque elettroni spaiati" caption="Fig. 8.9 — Configurazione dello ione Mn2+: i cinque elettroni 3d occupano ciascuno un orbitale diverso con spin parallelo, tutti spaiati, da cui il paramagnetismo dello ione."}
:::

Questo tipo di verifica sperimentale (misura dell'attrazione o repulsione di un campione in un campo magnetico) è anche uno strumento indipendente per controllare le configurazioni elettroniche dedotte dagli spettri atomici, trattati in [Spettri atomici e modello di Bohr](ref:chapter/8#p3). Le configurazioni elettroniche così stabilite, in particolare quelle del livello esterno, costituiscono la base per spiegare gli andamenti periodici di raggio atomico, energia di ionizzazione e affinità elettronica, oggetto della sezione seguente.

## p6 | Proprietà periodiche e reattività

Nella sezione su [Configurazione elettronica di atomi e ioni](ref:chapter/8#p5) si è visto come la configurazione elettronica di un atomo determini la sua posizione nella tavola periodica. Questa configurazione è anche responsabile dell'andamento regolare di tre grandezze atomiche fondamentali: il raggio atomico, l'energia di ionizzazione e l'affinità elettronica. Si tratta di proprietà atomiche periodiche, perché aumentano e diminuiscono in modo ricorrente procedendo lungo i periodi e lungo i gruppi della tavola periodica, e la loro regolarità è una delle conferme più dirette della struttura a livelli e sottolivelli degli orbitali.

### Carica nucleare effettiva e schermatura

In un atomo con più di un elettrone, un elettrone esterno non risente mai dell'intera carica del nucleo: gli elettroni più interni si collocano, in media, tra il nucleo e l'elettrone considerato e ne scherma parte dell'attrazione. Si definisce quindi la carica nucleare effettiva come la carica nucleare netta che un elettrone sperimenta effettivamente, tenendo conto dell'effetto di schermo prodotto dagli altri elettroni.

:::formula{id="8.11" label="Carica nucleare effettiva"}
$$Z_{eff} = Z - S$$
:::

dove $Z$ è il numero atomico (la carica reale del nucleo) e $S$ è la costante di schermo, cioè l'effetto complessivo degli elettroni interni.

La schermatura ha due origini distinte, che vale la pena distinguere bene. Un elettrone addizionale nello stesso orbitale (per esempio il secondo elettrone 1s dell'elio) innalza l'energia dell'orbitale per repulsione interelettronica, rendendo più facile rimuovere ciascuno dei due elettroni rispetto al caso di un solo elettrone con la stessa carica nucleare. Elettroni che occupano orbitali più interni (per esempio i due elettroni 1s del litio rispetto all'elettrone 2s esterno) schermano invece molto più efficacemente, perché trascorrono la maggior parte del tempo tra il nucleo e l'elettrone esterno.

Risulta utile distinguere tre categorie di elettroni: gli elettroni interni (quelli del gas nobile precedente e delle serie di transizione già completate), gli elettroni esterni (quelli del livello energetico più alto occupato, che trascorrono la maggior parte del tempo alla massima distanza dal nucleo) e gli elettroni di valenza (quelli che intervengono nella formazione dei legami: per i gruppi principali coincidono con gli elettroni esterni, mentre per gli elementi di transizione comprendono spesso anche alcuni elettroni $d$ interni).

### Raggio atomico

Il raggio atomico è definito come la metà della distanza tra i nuclei di due atomi identici adiacenti. Poiché la nube elettronica non ha un contorno netto, si distingue in pratica tra raggio metallico (metà della distanza tra nuclei adiacenti in un cristallo metallico dell'elemento) e raggio covalente (metà della distanza tra i nuclei di due atomi identici legati covalentemente); il raggio di uno stesso elemento può quindi variare leggermente a seconda del composto in cui si trova.

Lungo un gruppo (dall'alto verso il basso) il raggio atomico aumenta, perché ogni elemento ha un livello energetico addizionale di elettroni interni, che schermano efficacemente gli elettroni più esterni: questi trascorrono quindi più tempo lontano dal nucleo.

Lungo un periodo (da sinistra a destra) il raggio atomico diminuisce: gli elettroni aggiunti occupano lo stesso livello esterno e si schermano tra loro molto poco, mentre la carica nucleare $Z$ aumenta a ogni elemento. Il risultato netto è che $Z_{eff}$ aumenta sensibilmente lungo il periodo, e gli elettroni esterni sono attratti con forza crescente verso il nucleo, che si contrae.

Queste due regole valgono rigorosamente per gli elementi dei gruppi principali. Negli elementi di transizione il riempimento progressivo degli orbitali $d$ interni fa sì che l'aumento di carica nucleare e l'aumento di schermatura si bilancino parzialmente lungo un periodo, per cui la variazione del raggio è molto meno marcata.

**Errore tipico 8.8**
Molti studenti ricordano la regola "il raggio diminuisce verso destra, aumenta verso il basso" senza collegarla alla causa fisica, e di conseguenza la applicano senza eccezioni anche ai metalli di transizione, dove l'andamento è molto più appiattito a causa della schermatura da parte degli elettroni $d$ interni.

### Energia di ionizzazione

L'energia di (prima) ionizzazione è l'energia necessaria per rimuovere completamente 1 mol di elettroni (quelli più esterni) da 1 mol di atomi gassosi, secondo il processo

:::formula{id="8.12" label="Energia di prima ionizzazione"}
$$\text{Atomo}_{(g)} \to \text{Ione}^+_{(g)} + e^-$$
:::

Poiché si deve fornire energia al sistema per vincere l'attrazione tra nucleo ed elettrone, l'energia di ionizzazione è sempre una grandezza positiva.

Lungo un gruppo l'energia di ionizzazione diminuisce dall'alto verso il basso: il raggio atomico crescente allontana l'elettrone più esterno dal nucleo, l'interazione reciproca si attenua e diventa quindi più facile rimuovere l'elettrone.

Lungo un periodo l'energia di ionizzazione aumenta da sinistra a destra: $Z_{eff}$ crescente riduce il raggio atomico e rafforza l'interazione tra nucleo ed elettroni esterni, che diventano più difficili da rimuovere. Fa eccezione il gruppo 13, il cui andamento lungo il gruppo è irregolare: l'energia di ionizzazione diminuisce da B ad Al, aumenta leggermente da Al a Ga, diminuisce di nuovo da Ga a In e torna ad aumentare da In a Tl. Queste irregolarità sono dovute al fatto che, scendendo nel gruppo, si inseriscono via via elettroni $d$ (e, per Tl, anche $f$) interni, che schermano in modo meno efficace del previsto e producono un $Z_{eff}$ maggiore di quello atteso sugli elettroni esterni.

Per uno stesso elemento si possono definire energie di ionizzazione successive ($I_1$, $I_2$, $I_3$, ...), ciascuna sempre maggiore della precedente perché ogni elettrone viene rimosso da uno ione con carica positiva via via più elevata. L'aumento non è però regolare: si osserva un salto enorme non appena si inizia a rimuovere un elettrone interno, cioè un elettrone appartenente a un livello energetico pieno e più vicino al nucleo, molto più difficile da estrarre. Questo comportamento è una delle conferme sperimentali della struttura a livelli dell'atomo.

**Esempio svolto 8.8**
Si confrontino le prime due energie di ionizzazione del magnesio ($Z=12$), con configurazione $1s^2\,2s^2\,2p^6\,3s^2$.

1. Dati: $I_1$ rimuove un elettrone $3s$ dal livello esterno; $I_2$ rimuove il secondo elettrone $3s$, lasciando la configurazione di gas nobile $1s^2\,2s^2\,2p^6$ (isoelettronica del neon).
2. Strategia: confrontare la carica nucleare effettiva percepita dall'elettrone rimosso e il livello energetico di provenienza.
3. Analisi: $I_2 > I_1$ perché, dopo la prima ionizzazione, lo ione $\text{Mg}^+$ ha carica positiva netta maggiore e quindi $Z_{eff}$ più alto sul secondo elettrone $3s$; inoltre questo secondo elettrone è ancora un elettrone esterno, per cui l'aumento rispetto a $I_1$ è consistente ma non enorme.
4. Verifica: se si volesse calcolare $I_3$, si starebbe estraendo un elettrone $2p$ interno da uno strato completo: ci si aspetta un salto molto più grande rispetto a quello tra $I_1$ e $I_2$, coerentemente con la regola generale appena enunciata.

### Affinità elettronica

L'affinità elettronica è la variazione di energia che accompagna l'aggiunta di 1 mol di elettroni a 1 mol di atomi (o ioni) gassosi, secondo il processo

:::formula{id="8.13" label="Affinità elettronica"}
$$\text{Atomo}_{(g)} + e^- \to \text{Ione}^-_{(g)}$$
:::

Nella maggior parte dei casi l'elettrone aggiunto viene attratto dalla carica nucleare e il processo rilascia energia: l'affinità elettronica è quindi generalmente negativa. Come per l'energia di ionizzazione, si possono considerare aggiunte successive di elettroni, ma in questo caso il valore diventa positivo, perché occorre energia per vincere la repulsione elettrostatica nell'aggiungere un elettrone a uno ione già negativo.

L'affinità elettronica, definita come variazione di energia di un processo generalmente esotermico, segue una convenzione di segno opposta a quella dell'energia di ionizzazione: un valore più negativo indica una maggiore tendenza ad acquistare elettroni, mentre l'energia di ionizzazione aumenta quando aumenta la difficoltà a cederne uno. La tendenza ad acquistare elettroni segue, in generale, un andamento periodico analogo a quello dell'energia di ionizzazione, ma con numerose irregolarità: è quindi utile distinguere per categorie di elementi piuttosto che enunciare una regola unica.

- Non metalli reattivi (gruppi 16 e 17): affinità elettroniche fortemente negative (esotermiche), perché questi elementi attraggono fortemente gli elettroni e, nei composti ionici, formano anioni.
- Metalli reattivi (gruppo 1): affinità elettroniche lievemente negative; (gruppo 2): affinità elettroniche positive. Questi elementi cedono elettroni facilmente (basse energie di ionizzazione) ma li attraggono poco o nulla, e nei composti ionici formano cationi.
- Gas nobili: affinità elettroniche lievemente positive, coerentemente con il fatto che non tendono ad acquistare elettroni.

### Dimensioni degli ioni: raggio ionico e serie isoelettroniche

Il raggio ionico è una stima della dimensione di uno ione in un composto ionico cristallino: si può immaginare come la porzione, associata a quello ione, della distanza tra i nuclei di ioni adiacenti nel solido.

Quando un atomo neutro perde elettroni per formare un catione, il numero di elettroni diminuisce mentre la carica nucleare resta la stessa: le repulsioni interelettroniche si riducono e la carica nucleare attrae più efficacemente gli elettroni restanti, con una contrazione netta del volume. Un catione è quindi sempre più piccolo dell'atomo neutro da cui deriva.

Quando invece un atomo neutro acquista elettroni per formare un anione, l'aumento delle repulsioni interelettroniche fa occupare agli elettroni un volume maggiore: un anione è quindi sempre più grande dell'atomo neutro da cui deriva.

Lungo un gruppo il raggio ionico aumenta dall'alto verso il basso, per lo stesso motivo del raggio atomico (aggiunta di livelli energetici). Lungo un periodo l'andamento è più complesso: il raggio diminuisce attraverso la serie dei cationi, si impenna bruscamente al passaggio al primo anione, poi torna a diminuire lungo la serie degli anioni. Per esempio, nel periodo 3 il raggio ionico diminuisce da $\text{Na}^+$ a $\text{Mg}^{2+}$ a $\text{Al}^{3+}$, si impenna per $\text{P}^{3-}$ e torna a scendere per $\text{S}^{2-}$ e $\text{Cl}^-$.

Un confronto particolarmente istruttivo è quello tra ioni isoelettronici, cioè ioni con lo stesso numero di elettroni (e quindi, di norma, la stessa configurazione di un gas nobile). A parità di numero di elettroni, infatti, la carica nucleare $Z$ diventa l'unica variabile che determina l'attrazione sugli elettroni esterni: per i cationi isoelettronici, a carica positiva più alta corrisponde $Z_{eff}$ maggiore e quindi raggio ionico minore; per gli anioni isoelettronici, a carica negativa più alta (quindi minore $Z$ rispetto al numero di elettroni) corrisponde raggio ionico maggiore.

**Esempio svolto 8.9**
Si ordinino in ordine di raggio crescente gli ioni $\text{Ca}^{2+}$, $\text{Cl}^-$, $\text{K}^+$, $\text{S}^{2-}$, tutti isoelettronici con l'argon ($18$ elettroni, configurazione $1s^2\,2s^2\,2p^6\,3s^2\,3p^6$).

1. Dati: i numeri atomici sono $Z(\text{S}) = 16$, $Z(\text{Cl}) = 17$, $Z(\text{K}) = 19$, $Z(\text{Ca}) = 20$; tutti gli ioni hanno 18 elettroni.
2. Strategia: a parità di numero di elettroni, il raggio ionico diminuisce al crescere di $Z$, perché aumenta la carica nucleare che attrae gli stessi 18 elettroni.
3. Calcolo: si ordinano gli ioni per $Z$ crescente, cioè $\text{S}^{2-} < \text{Cl}^- < \text{K}^+ < \text{Ca}^{2+}$ in ordine di $Z$, e dunque in ordine di raggio decrescente.
4. Verifica: il risultato è coerente con la regola generale, perché $\text{S}^{2-}$ è un anione (atteso il raggio più grande della serie) e $\text{Ca}^{2+}$ è il catione con carica più alta (atteso il raggio più piccolo): l'ordine di raggio crescente è quindi $\text{Ca}^{2+} < \text{K}^+ < \text{Cl}^- < \text{S}^{2-}$.

:::image{src="assets/ac1e8204-raggio-ionico-serie-isoelettronica.svg" alt="Grafico a punti del raggio ionico in funzione del numero atomico per S2-, Cl-, K+, Ca2+" caption="Fig. 8.10 — Raggio ionico di una serie isoelettronica (18 elettroni, configurazione dell'argon): a parità di elettroni, il raggio diminuisce al crescere del numero atomico Z, cioè della carica nucleare."}
:::

**Errore tipico 8.9**
Un errore frequente è confrontare il raggio di uno ione direttamente con quello dell'atomo neutro di un elemento diverso, oppure dimenticare che il confronto per serie isoelettroniche vale solo a parità di numero di elettroni: se gli ioni non sono isoelettronici, bisogna prima applicare separatamente le regole di gruppo e periodo valide per gli atomi neutri e poi correggere per la carica.

### Connessione tra struttura atomica e reattività

Gli andamenti appena descritti spiegano il comportamento chimico degli elementi. I metalli, con energie di ionizzazione basse, cedono elettroni con facilità nelle reazioni e agiscono come agenti riducenti, in particolare quelli dei gruppi 1 e 2; i non metalli, con affinità elettroniche fortemente negative, acquistano elettroni con facilità e agiscono come forti agenti ossidanti, in particolare quelli dei gruppi 16 e 17.

Gli elementi dei gruppi 1, 2, 16 e 17 formano ioni cedendo o acquistando elettroni in modo da raggiungere la configurazione con livello esterno completo di un gas nobile: gli ioni così formati sono detti isoelettronici con il gas nobile più vicino. Per esempio il sodio ($1s^2\,2s^2\,2p^6\,3s^1$), cedendo il suo unico elettrone di valenza, forma $\text{Na}^+$ ($1s^2\,2s^2\,2p^6$), isoelettronico con il neon. I gas nobili stessi, tranne l'elio ($1s^2$), avendo già un livello esterno pieno ($ns^2\,np^6$) e sia energie di ionizzazione elevate sia affinità elettroniche positive, non formano ioni in condizioni ordinarie.

Questi stessi concetti di carica, raggio e tendenza a cedere o acquistare elettroni sono il punto di partenza per la formazione del legame ionico, trattata nella sezione su [Legame ionico ed energia reticolare](ref:chapter/9#p2).
