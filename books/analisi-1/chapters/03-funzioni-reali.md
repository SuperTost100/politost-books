---
chapter: 3
title: Funzioni reali
---

## p1 | Introduzione

Il linguaggio delle funzioni reali è lo strumento con cui tutta l'analisi matematica descrive il legame tra grandezze variabili, e padroneggiarlo con precisione è indispensabile prima di affrontare limiti, continuità e derivate. In questo capitolo si costruisce un vocabolario rigoroso: dominio e immagine, iniettività e suriettività, grafico e trasformazioni elementari, composizione e funzione inversa, simmetrie e periodicità, limitatezza e monotonia. Ogni nozione viene accompagnata da esempi completi e dagli errori tipici in cui si incorre più spesso, in modo da trasformare definizioni astratte in abitudini operative solide.

Per affrontare il capitolo è necessario avere familiarità con i numeri reali, le proprietà delle disuguaglianze e le operazioni insiemistiche di base, oltre a una conoscenza intuitiva delle funzioni elementari (potenze, valore assoluto, funzioni definite a tratti) già incontrate nella scuola secondaria.

Al termine del percorso lo studente saprà determinare dominio naturale e immagine di una funzione assegnata, stabilire se essa è iniettiva, suriettiva o biettiva e, in quest'ultimo caso, costruirne esplicitamente l'inversa. Saprà inoltre riconoscere parità, disparità e periodicità, tracciare il grafico di funzioni trasformate a partire da quello di una funzione nota, studiare monotonia e limitatezza e distinguere con precisione punti di estremo assoluti e relativi, ponendo le basi concettuali per il teorema di Weierstrass e per lo studio del calcolo differenziale nei capitoli successivi.

## p2 | Funzioni: dominio, immagine, iniettività

Le funzioni sono l'oggetto centrale di tutta l'Analisi Matematica: limiti, derivate e integrali si studiano sempre a partire da una funzione. In questa sezione fissiamo il linguaggio di base — dominio, immagine, iniettività, suriettività, biettività — che useremo per tutto il resto del libro.

### Definizione di funzione e dominio naturale

Siano $A$ e $B$ due insiemi. Una **funzione** da $A$ a $B$, indicata con $f: A \to B$, è una corrispondenza che associa ad ogni elemento di $A$ uno e un solo elemento di $B$.

Questa definizione racchiude due condizioni distinte, che è utile tenere separate per capire bene i problemi di dominio.

- **Ovunque definita**: ad ogni elemento di $A$ corrisponde almeno un elemento di $B$ (non ci sono elementi di $A$ "scoperti").
- **Funzionale**: ad ogni elemento di $A$ corrisponde al più un elemento di $B$, cioè l'immagine è unica quando esiste.

Una funzione è precisamente una corrispondenza che è contemporaneamente ovunque definita e funzionale su $A$.

Nella pratica dell'Analisi 1, $B$ è quasi sempre $\mathbb{R}$ (o un suo sottoinsieme) e $f$ è data da un'espressione analitica, come $f(x) = \sqrt{x+1}$ o $f(x) = \log(x^2-1)$. In questi casi l'insieme $A$ non viene quasi mai specificato esplicitamente: si intende allora che $A$ sia il **dominio naturale** di $f$, cioè l'insieme di tutti gli $x \in \mathbb{R}$ per cui l'espressione che definisce $f(x)$ ha senso (radici di indice pari con argomento non negativo, logaritmi con argomento positivo, denominatori non nulli, argomenti di arcoseno e arcocoseno in $\lbrack -1,1\rbrack $, e così via). Il dominio naturale si indica con $\operatorname{dom} f$ o $D_f$.

**Esempio 3.1.** Determiniamo il dominio naturale di

$$
f(x) = \sqrt{4 - x^2}.
$$

L'espressione sotto radice deve essere non negativa:

$$
4 - x^2 \ge 0 \iff x^2 \le 4 \iff -2 \le x \le 2,
$$

quindi $\operatorname{dom} f = \lbrack -2,2\rbrack $.

### Immagine di una funzione

Data $f: A \to B$, l'**immagine** di $f$ (detta anche codominio effettivo) è l'insieme dei valori effettivamente assunti da $f$ al variare di $x$ in $A$:

:::formula{id="3.1" label="Immagine di una funzione"}
$$
\operatorname{im} f = f(A) = \{f(a) : a \in A\} = \{b \in B : \exists a \in A \text{ tale che } f(a) = b\}.
$$
:::

È fondamentale non confondere **codominio** e **immagine**: il codominio $B$ è l'insieme di arrivo scelto a priori nella scrittura $f: A \to B$, mentre l'immagine è ciò che la funzione effettivamente raggiunge; in generale si ha solo $\operatorname{im} f \subseteq B$, e l'uguaglianza non è garantita.

**Esempio 3.2.** Per $f(x) = \sqrt{4-x^2}$ con dominio $\lbrack -2,2\rbrack $ determinato sopra, la radice vale $0$ agli estremi e raggiunge il massimo $2$ in $x=0$; dato che $f$ è continua, assume con continuità tutti i valori intermedi, quindi $\operatorname{im} f = \lbrack 0,2\rbrack $.

Riprendendo l'esempio degli studenti del Politecnico associati al loro numero di matricola: la funzione è definita su tutto l'insieme degli studenti (ovunque definita) e ad ogni studente corrisponde un unico numero (funzionale); se scegliamo come codominio tutto $\mathbb{N}$, l'immagine sarà solo un sottoinsieme proprio di $\mathbb{N}$, poiché il numero di studenti è finito mentre $\mathbb{N}$ non lo è.

### Funzioni iniettive, suriettive, biettive

Una funzione $f: A \to B$ si dice **suriettiva** se e solo se $\operatorname{im} f = B$, cioè

:::formula{id="3.2" label="Condizione di suriettività"}
$$
\forall b \in B \ \exists a \in A \text{ tale che } f(a) = b.
$$
:::

In altre parole $f$ è suriettiva se ogni elemento del codominio viene raggiunto almeno una volta.

Una funzione $f: A \to B$ si dice **iniettiva** se e solo se

:::formula{id="3.3" label="Condizione di iniettività"}
$$
\forall a_1, a_2 \in A, \quad a_1 \neq a_2 \implies f(a_1) \neq f(a_2),
$$
:::

 equivalentemente, se e solo se $f(a_1) = f(a_2) \implies a_1 = a_2$.

Questa seconda formulazione è quasi sempre la più comoda da usare negli esercizi: si parte dall'ipotesi $f(a_1) = f(a_2)$ e si deve dimostrare $a_1 = a_2$. Geometricamente, $f$ è iniettiva se e solo se ogni retta orizzontale $y = k$ interseca il grafico di $f$ in **al più** un punto.

Una funzione si dice **biettiva** (o biunivoca) se e solo se è contemporaneamente iniettiva e suriettiva.

:::image{src="assets/9715ac5f-x-quadro-non-iniettiva.svg" alt="Grafico di x al quadrato con una retta orizzontale che lo interseca in due punti" caption="Fig. 3.1 — La funzione x^2 su R non è iniettiva: la retta y = 4 interseca il grafico in due punti, x = -2 e x = 2"}
:::

**Esempio svolto completo.** Studiamo iniettività, suriettività e biettività di
$$
f: \mathbb{R} \to \mathbb{R}, \qquad f(x) = x^2.
$$

*Non è iniettiva*: basta trovare due punti distinti con la stessa immagine. Prendendo $x_1 = 2$ e $x_2 = -2$ si ha $x_1 \neq x_2$ ma

$$
f(2) = f(-2) = 4,
$$

quindi la condizione di iniettività è violata.

*Non è suriettiva*: il codominio dichiarato è $\mathbb{R}$, ma $\operatorname{im} f = \lbrack 0, +\infty\lbrack $, poiché $x^2 \ge 0$ per ogni $x$ reale. In particolare non esiste alcun $x \in \mathbb{R}$ tale che $f(x) = -1$, quindi $-1 \in \mathbb{R}$ non è raggiunto.

Di conseguenza $f$ non è nemmeno biettiva. Si osservi però che, cambiando dominio e codominio, la stessa legge $x \mapsto x^2$ cambia natura: ristretta a $f: \lbrack 0,+\infty\lbrack  \to \lbrack 0,+\infty\lbrack $ diventa sia iniettiva sia suriettiva, dunque biettiva. Questo mostra che iniettività e suriettività **non sono proprietà della sola formula**, ma dipendono dalla scelta di dominio e codominio.

Un secondo esempio utile riguarda $f(x) = 2 + \sin x$ con $A = \mathbb{R}$: scegliendo come codominio $B = \lbrack 1,3\rbrack $, la funzione è suriettiva perché ogni valore di $\lbrack 1,3\rbrack $ viene raggiunto (il seno oscilla fra $-1$ e $1$); se invece si scegliesse $B = \mathbb{R}$, la stessa funzione non sarebbe suriettiva, perché $\operatorname{im} f = \lbrack 1,3\rbrack  \subsetneq \mathbb{R}$.

Infine, $f(x) = e^x$ definita su $\mathbb{R}$ è iniettiva: se $e^{x_1} = e^{x_2}$ allora, applicando il logaritmo a entrambi i membri, $x_1 = x_2$.

### Errori tipici

Un errore molto frequente è confondere **codominio** e **immagine**, dando per scontato che coincidano senza verificarlo: la suriettività è precisamente l'affermazione che questa coincidenza vale, e va sempre dimostrata, non supposta.

Un secondo errore è dedurre la non suriettività osservando il comportamento della funzione solo su una parte del dominio: per dimostrare che un valore del codominio non viene raggiunto occorre escluderlo su tutto il dominio, non solo su un sottoinsieme. Per la non iniettività, invece, basta restringersi a una parte del dominio: se in quella parte si trovano due punti distinti con la stessa immagine, la funzione non è iniettiva su tutto il dominio, perché la condizione di iniettività deve valere per ogni coppia di punti distinti di $A$.

Un terzo errore riguarda il dominio naturale: quando l'espressione di $f$ contiene più vincoli (ad esempio una radice e un logaritmo insieme), il dominio naturale è l'**intersezione** di tutte le condizioni richieste, non l'unione; trascurare uno dei vincoli porta a un dominio più grande di quello corretto.

## p3 | Grafico, composizione e funzione inversa

Una volta note le nozioni di dominio, immagine e iniettività (vedi [Funzioni: dominio, immagine, iniettività](ref:chapter/3#p2)), il passo successivo consiste nel saper leggere e costruire il grafico di una funzione, nel combinare più funzioni tra loro tramite la composizione e nel riconoscere quando una funzione può essere invertita. Questi tre strumenti compaiono continuamente negli esercizi, dal calcolo del dominio naturale di funzioni complicate allo studio di funzione completo.

### Grafici e trasformazioni

**Definizione 3.1 (Grafico di una funzione).** Il grafico di una funzione $f$ è l'insieme delle coppie ordinate $(a, f(a))$ al variare di $a$ nel dominio:

$$
G(f) = \{(a, f(a)) : a \in A = \operatorname{dom} f\} \subseteq \mathbb{R}^2
$$

dove $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$ è il piano cartesiano.

Per tracciare il grafico di una funzione non elementare conviene partire dal grafico di una funzione nota e applicare trasformazioni elementari. Se $G_f$ è il grafico di $f$ e $c > 0$ è una costante, si ha:

- $y = f(x) + c$: traslazione verticale verso l'alto di $c$;
- $y = f(x) - c$: traslazione verticale verso il basso di $c$;
- $y = f(x + c)$: traslazione orizzontale verso sinistra di $c$;
- $y = f(x - c)$: traslazione orizzontale verso destra di $c$;
- $y = -f(x)$: riflessione rispetto all'asse $x$;
- $y = f(-x)$: riflessione rispetto all'asse $y$;
- $y = c \, f(x)$: dilatazione (se $c>1$) o contrazione (se $0<c<1$) verticale;
- $y = f(cx)$: contrazione (se $c>1$) o dilatazione (se $0<c<1$) orizzontale.

Le trasformazioni con il valore assoluto richiedono maggiore attenzione, perché agiscono in modo diverso sulla variabile e sulla funzione:

- $y = |f(x)|$: si lascia il grafico di $f$ inalterato dove $f(x) \ge 0$, e si riflette rispetto all'asse $x$ la parte in cui $f(x) < 0$ (il grafico risultante sta sempre nel semipiano $y \ge 0$);
- $y = f(|x|)$: si cancella la parte del grafico con $x < 0$ e si sostituisce con la riflessione, rispetto all'asse $y$, della parte con $x \ge 0$ (il grafico risultante è sempre pari).

**Errore tipico 3.1.** Molti studenti applicano a $y=f(|x|)$ la stessa regola di $y=|f(x)|$, riflettendo i rami negativi del grafico invece di ricostruire l'intero grafico a partire dalla sola parte con $x\ge 0$. Conviene sempre chiedersi se la trasformazione agisce sulla $x$ (dentro $f$) o sulla $y=f(x)$ (fuori da $f$): nel primo caso si lavora sul dominio, nel secondo sul codominio.

Un esempio di funzione ottenuta dal valore assoluto è $f(x) = |x|$, che è continua su tutto $\mathbb{R}$ ma presenta un punto angoloso in $x=0$, dove il grafico cambia bruscamente pendenza; questo fatto sarà ripreso nello studio della derivabilità.

**Simmetrie del grafico.** Una funzione $f$ si dice **pari** se $\operatorname{dom} f$ è simmetrico rispetto all'origine (cioè $x \in \operatorname{dom} f \implies -x \in \operatorname{dom} f$) e

$$
f(x) = f(-x) \quad \forall x \in \operatorname{dom} f.
$$

Il grafico di una funzione pari è simmetrico rispetto all'asse $y$; l'esempio tipico è $f(x) = x^2$.

Una funzione $f$ si dice **dispari** se $\operatorname{dom} f$ è simmetrico rispetto all'origine e

$$
f(-x) = -f(x) \quad \forall x \in \operatorname{dom} f.
$$

Il grafico di una funzione dispari è simmetrico rispetto all'origine; l'esempio tipico è $f(x) = x^3$. Una trattazione più ampia di parità e periodicità, con esempi su funzioni definite a tratti, si trova nella sezione successiva ([Simmetrie, periodicità e funzioni particolari](ref:chapter/3#p4)).

**Esempio 3.3.** Si voglia disegnare $f(x) = |x - 1| + 2$. Si parte dal grafico elementare $y = |x|$ (una V con vertice nell'origine), si trasla di $1$ verso destra ottenendo $y = |x-1|$ (vertice in $(1,0)$), e infine si trasla di $2$ verso l'alto ottenendo $y = |x-1|+2$ (vertice in $(1,2)$). Il dominio è $\mathbb{R}$ e l'immagine è $\lbrack 2, +\infty\lbrack $, poiché il vertice è il punto di minimo.

:::image{src="assets/a638d69c-trasformazioni-valore-assoluto.svg" alt="Grafico di y = |x| e della sua traslata y = |x-1|+2" caption="Fig. 3.2 — Dalla V elementare y = |x| alla traslata y = |x-1| + 2: traslazione orizzontale di 1 e verticale di 2"}
:::

### Composizione e inversa

Supponiamo di voler ottenere, a partire da uno studente, la somma delle cifre della sua matricola. Si applicano in sequenza due funzioni: la prima associa allo studente il suo numero di matricola, la seconda somma le cifre di quel numero. Questa operazione è la composizione di funzioni.

**Definizione 3.2 (Funzione composta).** Siano $f: A \to B$ e $g: \operatorname{dom} g \to C$ con $\operatorname{dom} g \subseteq B$, tali che $\operatorname{im} f \cap \operatorname{dom} g \neq \emptyset$. Si definisce la funzione composta $g \circ f: D \to C$, dove $D=\operatorname{dom}(g \circ f)$. Si ha $D=A$ se e solo se $\operatorname{im} f \subseteq \operatorname{dom} g$. In generale, il dominio è

:::formula{id="3.4" label="Dominio della funzione composta"}
$$\operatorname{dom}(g \circ f) = \{x \in A : f(x) \in \operatorname{dom} g\}$$
:::

e legge

$$
(g \circ f)(x) = g(f(x)) \qquad \forall x \in \operatorname{dom}(g \circ f).
$$

**Errore tipico 3.2.** L'errore più frequente nel calcolo del dominio di una composta è limitarsi a intersecare $\operatorname{dom} f$ con $\operatorname{dom} g$, trascurando che occorre invece verificare per quali $x \in \operatorname{dom} f$ il valore $f(x)$ cade dentro $\operatorname{dom} g$: bisogna cioè confrontare l'immagine di $f$ con il dominio di $g$, non i due domini tra loro.

**Esempio 3.4.** Siano $f(x) = \log x$, con $\operatorname{dom} f = \,\rbrack 0,+\infty\lbrack $, e $g(x) = \sqrt{x-1}$, con $\operatorname{dom} g = \lbrack 1,+\infty\lbrack $. Calcoliamo $\operatorname{dom}(g \circ f)$:

$$
\operatorname{dom}(g \circ f) = \{x \in \,]0,+\infty[ \, : \log x \ge 1\} = \{x > 0 : x \ge e\} = [e, +\infty[.
$$

Sull'insieme trovato si ha $(g \circ f)(x) = \sqrt{\log x - 1}$.

Associata a una funzione $f: A \to B$ vi è, per ogni sottoinsieme $k \subseteq B$, la controimmagine di $k$:

:::formula{id="3.5" label="Controimmagine di un insieme"}
$$f^{-1}(k) = \{a \in A : f(a) \in k\}$$
:::

**Esempio 3.5.** Sia $f: \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$. Allora $f^{-1}(\{9\}) = \{+3,-3\}$, mentre $f^{-1}(\{4,9\}) = \{+2,-2,+3,-3\}$: la controimmagine di un singolo valore può contenere più di un punto, perché $f$ non è iniettiva.

**Errore tipico 3.3.** La notazione $f^{-1}$ indica sia la controimmagine di un insieme sia, se $f$ è biettiva, la funzione inversa: sono concetti diversi che vanno distinti dal contesto (la controimmagine è definita per qualunque funzione e agisce su un insieme, l'inversa è definita solo se $f$ è biettiva e agisce su un punto del codominio). Si ricorda inoltre che il codominio $B$ e l'immagine $\operatorname{im} f = f(A)$ non sono in generale lo stesso insieme: in genere $\operatorname{im} f \subseteq B$, e l'uguaglianza vale solo se $f$ è suriettiva.

**Definizione 3.3 (Funzione inversa).** Sia $f: A \to B$ una funzione biettiva. La funzione inversa $f^{-1}: B \to A$ è definita da

:::formula{id="3.6" label="Funzione inversa"}
$$f^{-1}(b) = a \iff f(a) = b, \qquad \forall b \in B.$$
:::

L'esistenza di $f^{-1}$ richiede dunque che $f$ sia sia iniettiva (altrimenti a uno stesso $b$ corrisponderebbero più $a$) sia suriettiva su $B$ (altrimenti qualche $b \in B$ resterebbe senza controimmagine).

Dalla definizione seguono le relazioni

$$
f \circ f^{-1} : B \to B, \qquad (f \circ f^{-1})(b) = b \quad \forall b \in B,
$$

$$
f^{-1} \circ f : A \to A, \qquad (f^{-1} \circ f)(a) = a \quad \forall a \in A.
$$

Graficamente, se $G(f) = \{(x, f(x)) : x \in \operatorname{dom} f\}$ allora $G(f^{-1}) = \{(f(x), x) : x \in \operatorname{dom} f\}$: il grafico dell'inversa si ottiene scambiando le coordinate di ogni punto, quindi riflettendo $G(f)$ rispetto alla retta $y = x$.

:::image{src="assets/a638d69c-funzione-inversa-simmetria.svg" alt="Grafici di f(x)=exp(x) e della sua inversa log(x), simmetrici rispetto alla retta y=x" caption="Fig. 3.3 — I grafici di y = e^x e y = log x sono simmetrici rispetto alla bisettrice y = x"}
:::

**Esempio 3.6 (calcolo dell'inversa).** Sia $f(x) = ax + b$ con $a \neq 0$, definita e biettiva su $\mathbb{R}$. Per trovare $f^{-1}$ si pone $y = ax+b$ e si risolve rispetto a $x$:

$$
y = ax + b \;\Longrightarrow\; x = \frac{y-b}{a} \;\Longrightarrow\; f^{-1}(y) = \frac{y-b}{a}.
$$

Verifichiamo la relazione $f^{-1} \circ f = \operatorname{id}$:

$$
(f^{-1} \circ f)(x) = f^{-1}(ax+b) = \frac{(ax+b) - b}{a} = \frac{ax}{a} = x.
$$

Quando una funzione $f$ non è iniettiva su tutto il suo dominio, come $f(x)=x^2$ su $\mathbb{R}$, si possono invertire le sue restrizioni a intervalli su cui è strettamente monotona. È così che si definiscono le funzioni $\arcsin$, $\arccos$ e $\arctan$, restringendo opportunamente il dominio di seno, coseno e tangente. La stretta monotonia garantisce l'iniettività e quindi l'invertibilità sulla propria immagine, senza richiedere la continuità. La monotonia è approfondita nella sezione sulle [funzioni limitate e monotone](ref:chapter/3#p5); il comportamento della composizione rispetto a limiti e continuità è trattato nelle sezioni sui [teoremi sui limiti](ref:chapter/4#p4) e sulle [funzioni continue](ref:chapter/5#p2).

## p4 | Simmetrie, periodicità e funzioni particolari

### Funzioni pari e dispari

Molte funzioni che si incontrano nel corso presentano una simmetria rispetto all'asse delle ordinate o rispetto all'origine del piano cartesiano. Riconoscere questa simmetria permette di dimezzare il lavoro nello studio di una funzione, perché basta analizzarne il comportamento per $x \ge 0$ per dedurne automaticamente il comportamento per $x < 0$.

**Definizione 3.4 (funzione pari).** Una funzione $f$ si dice **pari** se il suo dominio $\operatorname{dom} f$ è un insieme simmetrico rispetto all'origine, cioè

$$
x \in \operatorname{dom} f \implies -x \in \operatorname{dom} f,
$$

e se inoltre

$$
f(x) = f(-x) \qquad \text{per ogni } x \in \operatorname{dom} f.
$$

Graficamente, una funzione pari ha un grafico simmetrico rispetto all'asse $y$: il punto $(x, f(x))$ e il punto $(-x, f(-x)) = (-x, f(x))$ sono il riflesso l'uno dell'altro rispetto all'asse delle ordinate. L'esempio più semplice è $f(x) = x^2$, definita su tutto $\mathbb{R}$ (insieme simmetrico), per cui $f(-x) = (-x)^2 = x^2 = f(x)$.

**Definizione 3.5 (funzione dispari).** Una funzione $f$ si dice **dispari** se il suo dominio è simmetrico rispetto all'origine, cioè

$$
x \in \operatorname{dom} f \implies -x \in \operatorname{dom} f,
$$

e se inoltre

$$
f(-x) = -f(x) \qquad \text{per ogni } x \in \operatorname{dom} f.
$$

Il grafico di una funzione dispari è simmetrico rispetto all'origine: il punto $(-x, f(-x)) = (-x, -f(x))$ si ottiene ruotando di $180°$ il punto $(x, f(x))$. L'esempio tipico è $f(x) = x^3$, per cui $f(-x) = -x^3 = -f(x)$.

:::formula{id="3.7" label="Funzione pari"}
$$
f \text{ è pari} \iff \operatorname{dom} f \text{ è simmetrico e } f(x) = f(-x) \ \ \forall x \in \operatorname{dom} f
$$
:::

:::formula{id="3.8" label="Funzione dispari"}
$$
f \text{ è dispari} \iff \operatorname{dom} f \text{ è simmetrico e } f(-x) = -f(x) \ \ \forall x \in \operatorname{dom} f
$$
:::

**Osservazione 3.1.** Una funzione può non essere né pari né dispari: ad esempio $h(x) = x + x^2$ soddisfa $h(-x) = -x + x^2$, che non coincide né con $h(x)$ né con $-h(x)$. Esistono poi funzioni pari e dispari **contemporaneamente**: l'unica è la funzione nulla $f(x) = 0$ su un dominio simmetrico. Infine, la somma $\sin x + \cos x$ non è pari né dispari, pur essendo somma di una funzione dispari ($\sin$) e una pari ($\cos$) su $\mathbb{R}$: la somma di una funzione pari e di una dispari non ha, in generale, alcuna simmetria.

**Esempio 3.7.** Studiamo la parità di
$$
f(x) = \frac{x^2}{x^2 - 1}.
$$

Il dominio è $\operatorname{dom} f = \mathbb{R} \setminus \{-1, 1\}$, che è simmetrico rispetto all'origine (se $x \ne \pm 1$ allora anche $-x \ne \pm 1$). Calcoliamo

$$
f(-x) = \frac{(-x)^2}{(-x)^2 - 1} = \frac{x^2}{x^2 - 1} = f(x).
$$

Quindi $f$ è pari. Studiamo ora

$$
g(x) = x^3 - x.
$$

Il dominio è $\mathbb{R}$, simmetrico. Si ha $g(-x) = (-x)^3 - (-x) = -x^3 + x = -(x^3 - x) = -g(x)$, dunque $g$ è dispari.

**Errore tipico 3.4.** Lo studente spesso verifica solo la condizione algebrica $f(x) = f(-x)$ (o $f(-x) = -f(x)$) senza controllare prima che il dominio sia simmetrico rispetto all'origine. Se $\operatorname{dom} f = \lbrack 0, +\infty\lbrack $, ad esempio, la funzione non può essere pari né dispari in senso proprio, anche se la sua espressione analitica "sembra" pari: il punto $-x$ semplicemente non appartiene al dominio, e quindi la condizione di simmetria non è nemmeno formulabile per ogni $x$ del dominio.

### Funzioni periodiche

**Definizione 3.6 (funzione periodica).** Una funzione $f$ si dice **periodica** se esiste $T>0$ tale che, per ogni $x\in\mathbb{R}$, si ha $x\in\operatorname{dom} f$ se e solo se $x+T\in\operatorname{dom} f$, e inoltre, per ogni $x\in\operatorname{dom} f$,

$$
f(x+T) = f(x).
$$

Ogni numero $T$ con questa proprietà si dice un periodo di $f$; se esiste un periodo minimo positivo, esso è detto **periodo fondamentale**.

:::formula{id="3.9" label="Funzione periodica"}
$$
\exists\,T>0:\quad \operatorname{dom} f+T=\operatorname{dom} f \quad\text{e}\quad f(x+T)=f(x)\ \ \forall x\in\operatorname{dom} f
$$
:::

Le funzioni trigonometriche $\sin x$ e $\cos x$ sono periodiche di periodo fondamentale $2\pi$, mentre $\tan x$ ha periodo fondamentale $\pi$. La funzione mantissa, che introdurremo nella prossima sottosezione, è un altro esempio notevole di funzione periodica.

**Osservazione 3.2.** Se $T$ è un periodo di $f$, anche ogni multiplo intero positivo $kT$, con $k\in\mathbb{N}^{+}$, è un periodo. Se due funzioni hanno un periodo comune $T$, questo è un periodo anche della loro somma e del loro prodotto, definiti sull'intersezione dei domini. Il periodo fondamentale della combinazione va però determinato separatamente: $\sin x\cdot\sin x=\sin^2 x$ ha periodo fondamentale $\pi$, mentre ciascun fattore ha periodo fondamentale $2\pi$.

**Esempio 3.8.** Determiniamo il periodo di $f(x) = \sin x + \sin(2x)$. La funzione $\sin x$ ha periodo fondamentale $2\pi$, mentre $\sin(2x)$ ha periodo fondamentale $\pi$ (perché $\sin(2(x+\pi)) = \sin(2x + 2\pi) = \sin(2x)$). Il periodo $2\pi$ è un multiplo di $\pi$, quindi $2\pi$ è un periodo comune: verifichiamo che

$$
f(x + 2\pi) = \sin(x+2\pi) + \sin(2x+4\pi) = \sin x + \sin(2x) = f(x).
$$

Per verificare che $2\pi$ sia il periodo fondamentale, sia $T>0$ un periodo di $f$. Dalle uguaglianze $f(T)=f(0)=0$ e $f(\pi+T)=f(\pi)=0$ si ricava $\sin T=\sin(2T)=0$, quindi $T$ è un multiplo intero di $\pi$. Poiché $f(\pi/2)=1$ mentre $f(3\pi/2)=-1$, $\pi$ non è un periodo. Il più piccolo periodo positivo è dunque $2\pi$.

**Errore tipico 3.5.** Non ogni combinazione di funzioni periodiche è periodica: se i periodi non sono tra loro commensurabili (il loro rapporto non è razionale), come nel caso di $\sin x + \sin(\sqrt{2}\, x)$, la funzione risultante non è periodica, perché non esiste alcun $T$ comune a entrambe.

### Parte intera e mantissa

Due funzioni particolari, costruite a partire dalla struttura d'ordine di $\mathbb{R}$, ricorrono frequentemente negli esercizi su dominio, limiti e continuità: la parte intera e la mantissa.

**Definizione 3.7 (parte intera).** La **funzione parte intera** di $x \in \mathbb{R}$, indicata con $\lbrack x\rbrack $, è il più grande numero intero minore o uguale a $x$:

$$
[x] = \max\{n \in \mathbb{Z} : n \le x\}.
$$

:::formula{id="3.10" label="Funzione parte intera"}
$$
[x] = \max\{n \in \mathbb{Z} : n \le x\}
$$
:::

Ad esempio $\lbrack 3.7\rbrack  = 3$, $\lbrack 5\rbrack  = 5$ e, attenzione, $\lbrack -2.1\rbrack  = -3$ (non $-2$): il più grande intero minore o uguale a $-2.1$ è $-3$, perché $-2$ è maggiore di $-2.1$.

**Definizione 3.8 (mantissa).** La **funzione mantissa** (o parte frazionaria) di $x \in \mathbb{R}$, indicata con $M(x)$ oppure $\{x\}$, è definita come

$$
M(x) = x - [x].
$$

Il valore di $M(x)$ è sempre un numero reale non negativo minore di $1$, cioè $M(x) \in \lbrack 0, 1\lbrack $ per ogni $x \in \mathbb{R}$.

:::formula{id="3.11" label="Funzione mantissa"}
$$
M(x) = x - [x], \qquad M(x) \in [0,1[ \ \ \forall x \in \mathbb{R}
$$
:::

Ad esempio $M(3.7) = 3.7 - 3 = 0.7$, $M(5) = 5 - 5 = 0$ e $M(-2.1) = -2.1 - (-3) = 0.9$.

La funzione mantissa è periodica di periodo fondamentale $1$: infatti $M(x+1) = (x+1) - \lbrack x+1\rbrack  = (x+1) - (\lbrack x\rbrack +1) = x - \lbrack x\rbrack  = M(x)$, e il suo grafico è una successione di segmenti a "dente di sega" compresi tra $0$ (incluso) e $1$ (escluso).

:::image{src="assets/de27d07b-parte-intera-grafico.svg" alt="grafico a scalini della funzione parte intera" caption="Fig. 3.4 — Funzione parte intera [x]: grafico a gradini con salti nei punti interi"}
:::

:::image{src="assets/de27d07b-mantissa-grafico.svg" alt="grafico a dente di sega della funzione mantissa" caption="Fig. 3.5 — Funzione mantissa M(x) = x - [x]: andamento periodico di periodo 1"}
:::

**Errore tipico 3.6.** Per $x < 0$ non si deve "troncare" la parte decimale verso lo zero: $\lbrack -2.1\rbrack  \ne -2$. Chi commette questo errore pensa alla parte intera come al troncamento del valore assoluto, ma la definizione corretta richiede il massimo intero *minore o uguale* a $x$, e per i numeri negativi questo intero è "più negativo" del troncamento. Di conseguenza, anche la mantissa di un numero negativo non è negativa: $M(-2.1) = 0.9$ e non $-0.1$.

### Funzioni definite a tratti

Molte funzioni di interesse non sono descritte da un'unica espressione analitica su tutto il dominio, ma da espressioni diverse su sottointervalli diversi. Per studiarne dominio, continuità o derivabilità occorre analizzare separatamente ogni tratto e poi verificare la compatibilità nei punti di raccordo.

**Esempio 3.9 (prolungamento per continuità).** Consideriamo

$$
f(x) = \frac{x^2 - 1}{x - 1}, \qquad \operatorname{dom} f = \mathbb{R} \setminus \{1\}.
$$

Semplificando per $x \ne 1$ si ha $f(x) = x + 1$, da cui $\lim_{x \to 1} f(x) = 2$. Possiamo allora definire la funzione a tratti

$$
\tilde f(x) = \begin{cases} \dfrac{x^2-1}{x-1} & \text{se } x \ne 1, \\[4pt] 2 & \text{se } x = 1, \end{cases}
$$

che risulta continua su tutto $\mathbb{R}$. Si dice che $\tilde f$ è il **prolungamento per continuità** di $f$ nel punto $x=1$: la funzione originaria $f$ non era definita (e quindi non era continua) in $x=1$, ma il limite esisteva finito e ha permesso di "tappare il buco".

**Esempio 3.10.** Studiamo la funzione definita a tratti

$$
g(x) = \begin{cases} x^2 & \text{se } x \ge 0, \\ -x & \text{se } x < 0. \end{cases}
$$

Il dominio è $\mathbb{R}$. Nel punto di raccordo $x_0 = 0$ i due tratti danno $g(0^+) = 0$ e $g(0^-) = \lim_{x \to 0^-}(-x) = 0$, e inoltre $g(0) = 0$: la funzione è dunque continua in $0$. La verifica della derivabilità in un punto di raccordo richiede invece il confronto dei rapporti incrementali destro e sinistro, strumento che verrà introdotto sistematicamente nel capitolo sulla derivata; è bene ricordare già da ora che la continuità in un punto **non implica** la derivabilità in quel punto, come mostra la funzione $|x|$, continua ma con un punto angoloso nell'origine.

**Errore tipico 3.7.** Nelle funzioni definite a tratti non si deve dare per scontato che, essendo ciascun tratto "regolare" (continuo, derivabile) separatamente, la funzione complessiva lo sia anche nel punto di raccordo: occorre sempre verificare esplicitamente il comportamento nei punti in cui cambia la definizione, confrontando limiti destro e sinistro (per la continuità) o, più avanti nel corso, derivate destra e sinistra (per la derivabilità).

Le nozioni di parità, disparità e periodicità saranno riprese nello [studio delle funzioni limitate e monotone](ref:chapter/3#p5). La disparità non impedisce la monotonia: $f(x)=x$ è dispari e strettamente crescente su $\mathbb{R}$. Una funzione periodica non costante su $\mathbb{R}$, invece, non può essere monotona su tutto $\mathbb{R}$; una funzione costante è sia periodica sia monotona.

## p5 | Funzioni limitate e monotone, massimi e minimi

### Funzioni limitate

Una prima proprietà globale che si può chiedere a una funzione reale è la limitatezza della sua immagine, concetto già introdotto per i sottoinsiemi di $\mathbb{R}$ nella sezione su [maggioranti, minoranti ed estremi](ref:chapter/1#p5).

Sia $f : A \to \mathbb{R}$, con $A \subseteq \mathbb{R}$.

**Definizione 3.9.** Diciamo che $f$ è **limitata superiormente** se $\operatorname{im} f$ è un sottoinsieme di $\mathbb{R}$ limitato superiormente, cioè $\exists M \in \mathbb{R}$ tale che $f(x) \le M$ per ogni $x \in \operatorname{dom} f$. Analogamente $f$ è **limitata inferiormente** se $\operatorname{im} f$ è limitato inferiormente, ossia $\exists m \in \mathbb{R}$ tale che $f(x) \ge m$ per ogni $x \in \operatorname{dom} f$. Diciamo infine che $f$ è **limitata** se è limitata sia superiormente che inferiormente.

:::formula{id="3.12" label="Funzione limitata"}
$$f \text{ è limitata} \iff \exists m, M \in \mathbb{R} \text{ tali che } \forall x \in \operatorname{dom} f \quad m \le f(x) \le M$$
:::

Questa condizione equivale a richiedere che esista $N \in \mathbb{R}$ tale che $|f(x)| \le N$ per ogni $x \in \operatorname{dom} f$.

Per indicare che l’immagine di $f$ è limitata superiormente si scrive $\sup(\operatorname{im} f) \in \mathbb{R}$; se invece non è limitata superiormente si scrive $\sup(\operatorname{im} f) = +\infty$. In modo analogo si usano $\inf(\operatorname{im} f)$ per la parte inferiore.

**Esempio 3.11.** Le funzioni trigonometriche $\sin x$ e $\cos x$ sono limitate, poiché la loro immagine è $\lbrack -1,1\rbrack $: in questo caso $\sup(\operatorname{im} f) = 1$ e $\inf(\operatorname{im} f) = -1$. Lo stesso vale per la funzione mantissa $M(x) = x - \lbrack x\rbrack $, la cui immagine è $\lbrack 0,1\lbrack $, dunque limitata sia superiormente che inferiormente, anche se il massimo non è raggiunto ($\sup(\operatorname{im} f) = 1$ ma non esiste $x$ con $M(x) = 1$). Si tratta di funzioni periodiche: come osservato nella sezione precedente, il comportamento su un periodo determina già la limitatezza su tutto il dominio.

Al contrario, $f(x) = x^2$ su $\mathbb{R}$ è limitata inferiormente ($\inf(\operatorname{im} f) = 0$) ma non superiormente, mentre $f(x) = \tan x$ non è limitata né superiormente né inferiormente su nessun intervallo contenente un asintoto verticale.

:::image{src="assets/72d81f23-funzione-illimitata-tangente.svg" alt="Grafico della tangente con asintoti verticali in -pi/2 e pi/2" caption="Fig. 3.6 — La funzione tangente non è limitata: vicino agli asintoti verticali assume valori arbitrariamente grandi in modulo"}
:::

La limitatezza non è però solo una proprietà globale: se una funzione ammette limite finito in un punto, essa è automaticamente limitata in un intorno di quel punto.

**Teorema 3.1** (limitatezza locale). *Sia $f : \operatorname{dom} f \to \mathbb{R}$ e sia $x_0$ punto di accumulazione di $\operatorname{dom} f$. Se esiste $\displaystyle\lim_{x \to x_0} f(x) = \ell \in \mathbb{R}$, allora esiste un intorno $I(x_0)$ tale che $f|_{\operatorname{dom} f \cap I(x_0)}$ è limitata.*

In particolare, se $f$ è continua in $x_0$ la stessa conclusione vale senza richiedere che l'intervallo di partenza sia chiuso: basta la continuità puntuale per garantire la limitatezza locale. Questo risultato sarà ripreso e sfruttato nel capitolo sui [teoremi sui limiti](ref:chapter/4#p4) e nello studio delle [funzioni continue](ref:chapter/5#p2).

### Funzioni monotone

Sia $f : A \to \mathbb{R}$, con $A \subseteq \mathbb{R}$.

**Definizione 3.10.** Diciamo che $f$ è **crescente** se per ogni $x_1, x_2 \in \operatorname{dom} f$ con $x_1 < x_2$ si ha

$$
f(x_1) \le f(x_2),
$$

e che è **strettamente crescente** se, sotto la stessa ipotesi $x_1 < x_2$, vale $f(x_1) < f(x_2)$.

:::formula{id="3.13" label="Funzione (strettamente) crescente"}
$$\forall x_1, x_2 \in \operatorname{dom} f, \ x_1 < x_2 \implies f(x_1) \le f(x_2) \ (\text{crescente}), \qquad f(x_1) < f(x_2) \ (\text{strett. crescente})$$
:::

**Definizione 3.11.** Diciamo che $f$ è **decrescente** se per ogni $x_1, x_2 \in \operatorname{dom} f$ con $x_1 < x_2$ si ha $f(x_1) \ge f(x_2)$, ed è **strettamente decrescente** se vale $f(x_1) > f(x_2)$.

:::formula{id="3.14" label="Funzione (strettamente) decrescente"}
$$\forall x_1, x_2 \in \operatorname{dom} f, \ x_1 < x_2 \implies f(x_1) \ge f(x_2) \ (\text{decrescente}), \qquad f(x_1) > f(x_2) \ (\text{strett. decrescente})$$
:::

Una funzione si dice **monotona** se è crescente o decrescente (su tutto il dominio, oppure su un intervallo $I$ contenuto nel dominio, nel qual caso si parla di monotonia locale su $I$).

**Osservazione 3.3.** La stretta monotonia implica l'iniettività: se $f$ è strettamente crescente (o decrescente) su $I$, allora $x_1 \ne x_2$ in $I$ implica $f(x_1) \ne f(x_2)$. Questo fatto, già anticipato nella sezione su [dominio, immagine, iniettività](ref:chapter/3#p2), è il metodo più comune per dimostrare l'iniettività di una funzione e per costruirne l'inversa su un intervallo.

Quando la funzione è derivabile (nozione che sarà introdotta nel capitolo sul [calcolo differenziale](ref:chapter/7#p2)), la monotonia si caratterizza tramite il segno della derivata prima: su un intervallo $I$, $f$ è crescente se e solo se $f'(x) \ge 0$ per ogni $x \in I$, mentre $f'(x) > 0$ su $I$ è condizione sufficiente (ma non necessaria) per la stretta monotonia crescente; analogamente $f'(x) \le 0$ su $I$ caratterizza la decrescenza, $f'(x) < 0$ implica stretta decrescenza, e $f'(x) = 0$ su $I$ implica che $f$ è costante su $I$. Questo criterio, che richiede gli strumenti del calcolo differenziale, sarà dimostrato come conseguenza del [teorema di Lagrange](ref:chapter/7#p4) e sarà lo strumento principale per lo [studio di funzione completo](ref:chapter/8#p4); a questo stadio è comunque utile saperne l'enunciato, perché negli esercizi sulla monotonia pura (senza derivate) si procede invece per confronto diretto fra $f(x_1)$ e $f(x_2)$.

### Massimi, minimi e punti di massimo/minimo

È essenziale distinguere con precisione due nozioni che gli studenti tendono a confondere: il **punto** in cui una funzione assume il valore estremo (un elemento del dominio) e il **valore** massimo o minimo stesso (un elemento dell'immagine).

Sia $f : A \to \mathbb{R}$, con $A \subseteq \mathbb{R}$.

**Definizione 3.12** (massimo e minimo assoluto). Diciamo che $x_0 \in \operatorname{dom} f$ è un **punto di massimo assoluto** per $f$ se

$$
\forall x \in \operatorname{dom} f \qquad f(x_0) \ge f(x).
$$

Il numero $f(x_0)$ si dice allora **valore massimo assoluto** (o **massimo**) di $f$, e si scrive $f(x_0) = \max(\operatorname{im} f)$. Analogamente, $x_0 \in \operatorname{dom} f$ è un **punto di minimo assoluto** se $f(x_0) \le f(x)$ per ogni $x \in \operatorname{dom} f$, e in tal caso $f(x_0) = \min(\operatorname{im} f)$.

:::formula{id="3.15" label="Punto di massimo assoluto"}
$$x_0 \in \operatorname{dom} f \text{ è punto di massimo assoluto} \iff f(x_0) = \max(\operatorname{im} f) \iff \forall x \in \operatorname{dom} f, \ f(x_0) \ge f(x)$$
:::

:::formula{id="3.16" label="Punto di minimo assoluto"}
$$x_0 \in \operatorname{dom} f \text{ è punto di minimo assoluto} \iff f(x_0) = \min(\operatorname{im} f) \iff \forall x \in \operatorname{dom} f, \ f(x_0) \le f(x)$$
:::

Come per gli insiemi numerici, anche il massimo e il minimo assoluti di una funzione non sempre esistono: basta pensare a $f(x) = x$ su $\mathbb{R}$, che non è limitata né superiormente né inferiormente, oppure a $f(x) = x$ su $\rbrack 0,1\lbrack $, che è limitata ma non raggiunge né $\sup(\operatorname{im} f) = 1$ né $\inf(\operatorname{im} f) = 0$ perché l'intervallo è aperto.

Spesso, però, interessa un concetto più locale.

**Definizione 3.13** (massimo e minimo relativo). Diciamo che $x_0 \in \operatorname{dom} f$ è un **punto di massimo relativo** (o locale) per $f$ se

$$
\exists \delta > 0 \text{ tale che } \forall x \in I_\delta(x_0) \cap \operatorname{dom} f \qquad f(x_0) \ge f(x),
$$

cioè se $f(x_0)$ è il massimo di $f$ ristretta a un intorno di $x_0$. In modo analogo, $x_0$ è un **punto di minimo relativo** se esiste $\delta > 0$ tale che $f(x_0) \le f(x)$ per ogni $x$ in $I_\delta(x_0) \cap \operatorname{dom} f$.

:::formula{id="3.17" label="Punto di massimo relativo"}
$$x_0 \text{ è punto di massimo relativo} \iff \exists \delta>0: \forall x \in I_\delta(x_0)\cap \operatorname{dom} f, \ f(x_0) \ge f(x)$$
:::

Ogni punto di massimo (o minimo) assoluto è anche un punto di massimo (o minimo) relativo, ma non viceversa: una funzione può avere molti massimi e minimi relativi senza che alcuno di essi sia assoluto.

**Esempio 3.12.** Consideriamo $f(x) = x^3 - 3x + 2$ su $\lbrack -2, 2\rbrack $. Si verifica (con gli strumenti del calcolo differenziale) che $f$ ha un punto di massimo relativo in $x = -1$, con valore $f(-1) = 4$, e un punto di minimo relativo in $x = 1$, con valore $f(1) = 0$. Poiché agli estremi dell'intervallo si ha $f(-2) = 0$ e $f(2) = 4$, i valori $4$ e $0$ sono anche il massimo e il minimo assoluti di $f$ su $\lbrack -2,2\rbrack $; in questo caso essi sono raggiunti sia in punti interni che agli estremi, il che mostra che un punto di estremo relativo può coincidere con un punto di estremo assoluto ma non è garantito che accada.

:::image{src="assets/72d81f23-massimi-minimi-cubica.svg" alt="Grafico di x al cubo meno 3x più 2 con massimo relativo in -1 e minimo relativo in 1" caption="Fig. 3.7 — Punto di massimo relativo in x = -1 e punto di minimo relativo in x = 1 per f(x) = x^3 - 3x + 2"}
:::

Un risultato fondamentale garantisce l'esistenza di massimo e minimo assoluti sotto ipotesi molto generali.

**Teorema 3.2** (di Weierstrass). *Sia $f : \lbrack a,b\rbrack  \to \mathbb{R}$ una funzione continua, con $a, b \in \mathbb{R}$ e $a < b$. Allora esistono $x_m, x_M \in \lbrack a,b\rbrack $ tali che*

$$
\forall x \in [a,b] \qquad f(x_m) \le f(x) \le f(x_M),
$$

*cioè $f$ ammette almeno un punto di minimo assoluto $x_m$ e almeno un punto di massimo assoluto $x_M$ su $\lbrack a,b\rbrack $.*

:::formula{id="3.18" label="Teorema di Weierstrass"}
$$f \in C([a,b]) \implies \exists x_m, x_M \in [a,b]: \ \forall x \in [a,b], \ f(x_m) \le f(x) \le f(x_M)$$
:::

In particolare, poiché $m = f(x_m)$ e $M = f(x_M)$ sono entrambi valori reali, $f$ è limitata su $\lbrack a,b\rbrack $. Le ipotesi di chiusura e limitatezza dell'intervallo e di continuità della funzione garantiscono l'esistenza di massimo e minimo assoluti; togliendo una di queste ipotesi, la conclusione non è più garantita, anche se può ancora valere per una funzione specifica. Per esempio, la funzione costante su $\mathbb{R}$ possiede massimo e minimo assoluti. Invece, $f(x) = 1/x$ su $\rbrack 0,1\rbrack $ è illimitata superiormente e non ha massimo; una funzione discontinua su un intervallo chiuso e limitato può a sua volta non assumere un valore estremo.

Viceversa, per determinare i candidati punti di massimo o minimo assoluto di una funzione continua su $\lbrack a,b\rbrack $, una volta garantita l'esistenza dal teorema di Weierstrass, occorre confrontare i valori di $f$ in tre tipi di punti: i punti interni in cui $f$ è derivabile e $f'(x) = 0$, i punti interni in cui $f$ non è derivabile, e i punti agli estremi $a$ e $b$ dell'intervallo. Il motivo per cui i punti con $f'(x) = 0$ sono candidati naturali sarà chiarito dal teorema di Fermat, che verrà enunciato e dimostrato nel capitolo sul calcolo differenziale: se $x_0$ è interno al dominio, è un punto di massimo o di minimo relativo, ed $f$ è derivabile in $x_0$, allora necessariamente $f'(x_0) = 0$. Questo risultato sarà il punto di partenza per i [teoremi di Fermat, Rolle e Lagrange](ref:chapter/7#p4) e per la [caratterizzazione dei punti critici](ref:chapter/8#p3) tramite le derivate successive.

### Errori tipici

Un primo errore frequente è confondere il **punto di massimo** $x_0$ con il **valore massimo** $f(x_0)$: quando si risponde a una domanda d'esame del tipo "determinare massimi e minimi di $f$" occorre sempre specificare entrambi, scrivendo per esempio "$x_0 = 1$ è punto di massimo relativo, con valore massimo $f(1) = 3$", e non limitarsi a uno dei due dati.

Un secondo errore è applicare il teorema di Weierstrass senza controllare le ipotesi: il teorema richiede che il dominio sia un intervallo **chiuso e limitato** $\lbrack a,b\rbrack $ e che $f$ sia **continua su tutto l'intervallo**. Se il dominio è aperto, semiaperto o illimitato, oppure se $f$ presenta anche un solo punto di discontinuità, l'esistenza di massimo e minimo assoluti non è più garantita e deve essere verificata caso per caso.

Un terzo errore riguarda il teorema di Fermat: la condizione $f'(x_0) = 0$ è **necessaria ma non sufficiente** per avere un punto di estremo relativo, e vale solo per punti **interni** al dominio in cui $f$ è derivabile. Non bisogna quindi cercare i massimi e minimi assoluti di una funzione su $\lbrack a,b\rbrack $ soltanto risolvendo $f'(x) = 0$: occorre anche controllare gli estremi $a, b$ dell'intervallo e gli eventuali punti interni di non derivabilità, dove la derivata non si annulla (o non esiste) ma la funzione può comunque avere un estremo, come $f(x) = |x|$, che ha un minimo assoluto in $x = 0$ pur avendo in quel punto un punto angoloso e quindi non essendo derivabile. Simmetricamente, l'annullarsi della derivata non implica che il punto sia un estremo: $f(x) = x^3$ ha $f'(0) = 0$ ma $x = 0$ non è né punto di massimo né di minimo, essendo un punto di flesso a tangente orizzontale.
