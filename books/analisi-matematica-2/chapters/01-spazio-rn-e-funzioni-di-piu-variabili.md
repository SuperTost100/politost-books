---
chapter: 1
title: Lo spazio ℝⁿ e le funzioni di più variabili
---

## p1 | Introduzione

Lo spazio $\mathbb{R}^n$ offre il linguaggio comune per descrivere punti, direzioni e distanze quando una funzione dipende da più variabili. Capire la geometria degli insiemi in cui è definita una funzione aiuta a interpretarne il comportamento: i limiti e la continuità dipendono infatti da come ci si avvicina a un punto e dalle proprietà del dominio. Questi strumenti preparano allo studio delle derivate e dell’ottimizzazione in più variabili.

Per affrontare il capitolo servono le basi di Analisi Matematica 1 e di Geometria e algebra lineare: occorre saper lavorare con vettori e matrici, calcolare prodotti scalari e determinanti e riconoscere gli autovalori di una matrice simmetrica.

Al termine saprai usare prodotto scalare, norma e ortogonalità per descrivere distanze e direzioni; classificare insiemi di $\mathbb{R}^n$ in base alle loro proprietà topologiche; determinare il dominio, il grafico e gli insiemi di livello di una funzione scalare e rappresentare campi vettoriali. Saprai inoltre studiare limiti e continuità con maggiorazioni e restrizioni a cammini, riconoscendo quando prove lungo cammini non bastano a dimostrare l’esistenza di un limite. I risultati sui massimi e minimi e sugli zeri di funzioni continue chiariranno come le proprietà del dominio incidano sulle conclusioni. Infine, saprai calcolare una derivata direzionale all’origine a partire dalla definizione, come richiesto nell’esercizio d’esame presentato nel capitolo.

## p2 | Richiami su vettori e matrici

### Prodotto scalare e norma

Per $\boldsymbol{x}=(x_1,\dots,x_n)$ e $\boldsymbol{y}=(y_1,\dots,y_n)$ in $\mathbb{R}^n$ si definiscono il prodotto scalare e la norma euclidea.

:::formula{id="1.1" label="Prodotto scalare e norma euclidea"}
$$\boldsymbol{x}\cdot\boldsymbol{y}=\sum_{i=1}^n x_iy_i,\qquad \|\boldsymbol{x}\|=\sqrt{\boldsymbol{x}\cdot\boldsymbol{x}}=\sqrt{\sum_{i=1}^n x_i^2}$$
:::

Con i vettori colonna il prodotto scalare si scrive anche $\boldsymbol{x}\cdot\boldsymbol{y}=\boldsymbol{x}^T\boldsymbol{y}=\boldsymbol{y}^T\boldsymbol{x}$.

Valgono la disuguaglianza di Cauchy–Schwarz $|\boldsymbol{x}\cdot\boldsymbol{y}|\le\|\boldsymbol{x}\|\,\|\boldsymbol{y}\|$, la disuguaglianza triangolare $\|\boldsymbol{x}+\boldsymbol{y}\|\le\|\boldsymbol{x}\|+\|\boldsymbol{y}\|$ e l'identità $\|\lambda\boldsymbol{x}\|=|\lambda|\,\|\boldsymbol{x}\|$. Due vettori con $\boldsymbol{x}\cdot\boldsymbol{y}=0$ sono **ortogonali**; un vettore con $\|\boldsymbol{x}\|=1$ è un **versore**. La quantità $\|\boldsymbol{x}-\boldsymbol{y}\|$ è la distanza tra i punti di coordinate $\boldsymbol{x}$ e $\boldsymbol{y}$.

### Prodotto vettoriale

In $\mathbb{R}^3$ il prodotto vettoriale di $\boldsymbol{u}$ e $\boldsymbol{v}$ è il vettore dato dallo sviluppo formale del determinante lungo la prima riga.

:::formula{id="1.2" label="Prodotto vettoriale in R³"}
$$\boldsymbol{u}\wedge\boldsymbol{v}=\det\begin{pmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\u_1&u_2&u_3\\v_1&v_2&v_3\end{pmatrix}=(u_2v_3-u_3v_2,\;u_3v_1-u_1v_3,\;u_1v_2-u_2v_1)$$
:::

Proprietà utili:

- $\boldsymbol{u}\wedge\boldsymbol{v}=-\boldsymbol{v}\wedge\boldsymbol{u}$, quindi $\boldsymbol{u}\wedge\boldsymbol{u}=\boldsymbol{0}$;
- $\boldsymbol{u}\wedge\boldsymbol{v}$ è ortogonale sia a $\boldsymbol{u}$ sia a $\boldsymbol{v}$;
- $\boldsymbol{u}\wedge\boldsymbol{v}=\boldsymbol{0}$ se e solo se uno dei due vettori è multiplo dell'altro (vettori paralleli);
- $\|\boldsymbol{u}\wedge\boldsymbol{v}\|$ è l'area del parallelogramma di lati $\boldsymbol{u}$ e $\boldsymbol{v}$;
- $\mathbf{i}\wedge\mathbf{j}=\mathbf{k}$, $\mathbf{j}\wedge\mathbf{k}=\mathbf{i}$, $\mathbf{k}\wedge\mathbf{i}=\mathbf{j}$.

**Esempio 1.1.** Siano $\boldsymbol{u}=(1,2,2)$ e $\boldsymbol{v}=(3,0,-1)$.

1. Prodotto scalare: $\boldsymbol{u}\cdot\boldsymbol{v}=1\cdot3+2\cdot0+2\cdot(-1)=1$.
2. Norme: $\|\boldsymbol{u}\|=\sqrt{1+4+4}=3$ e $\|\boldsymbol{v}\|=\sqrt{9+0+1}=\sqrt{10}$.
3. Prodotto vettoriale, componente per componente: $u_2v_3-u_3v_2=2\cdot(-1)-2\cdot0=-2$; $u_3v_1-u_1v_3=2\cdot3-1\cdot(-1)=7$; $u_1v_2-u_2v_1=1\cdot0-2\cdot3=-6$. Quindi $\boldsymbol{u}\wedge\boldsymbol{v}=(-2,7,-6)$.
4. Verifica: $(-2,7,-6)\cdot\boldsymbol{u}=-2+14-12=0$ e $(-2,7,-6)\cdot\boldsymbol{v}=-6+0+6=0$.
5. L'area del parallelogramma è $\sqrt{4+49+36}=\sqrt{89}$.

**Errore tipico 1.1.** Nel determinante la componente centrale va presa con il segno cambiato: è $u_3v_1-u_1v_3$, non $u_1v_3-u_3v_1$. Scambiare i due fattori inverte il segno del risultato. La verifica dell'ortogonalità, come nel passo 4, permette di accorgersene.

### Matrici simmetriche e forme quadratiche

Siano $A$ una matrice reale simmetrica e $\chi(\lambda)=\det(A-\lambda I)$ il suo polinomio caratteristico. Gli autovalori sono le radici di $\chi$, cioè i $\lambda$ per cui esiste $\boldsymbol{v}\neq\boldsymbol{0}$ con $A\boldsymbol{v}=\lambda\boldsymbol{v}$. Si ha $\det A=\lambda_1\cdots\lambda_n$.

Se $A$ è simmetrica, tutti gli autovalori sono reali e gli autovettori si possono scegliere in modo da formare una base ortonormale. Dunque $A=P\Lambda P^T$, con $P$ ortogonale e $\Lambda$ diagonale.

La forma quadratica associata è $Q(\boldsymbol{x})=\tfrac12\,\boldsymbol{x}^TA\boldsymbol{x}$. Posto $\boldsymbol{y}=P^T\boldsymbol{x}$, si ottiene

:::formula{id="1.3" label="Forma quadratica in termini degli autovalori"}
$$Q(\boldsymbol{x})=\frac12\sum_{k=1}^n\lambda_k y_k^2$$
:::

Il segno di $Q$ dipende quindi solo dal segno degli autovalori.

- $A$ è **definita positiva** se $Q(\boldsymbol{x})>0$ per ogni $\boldsymbol{x}\neq\boldsymbol{0}$, cioè se tutti gli autovalori sono $>0$.
- $A$ è **semi-definita positiva** se $Q\ge0$, cioè se gli autovalori sono $\ge0$.
- Definita e semi-definita negativa si definiscono in modo analogo.
- $A$ è **indefinita** se ha autovalori di segno opposto.

Per una matrice simmetrica $2\times2$ non servono gli autovalori. Poiché $\det A=\lambda_1\lambda_2$ si ha:

- se $\det A>0$, gli autovalori hanno lo stesso segno e $A$ è definita, positiva o negativa secondo il segno di $a_{11}$;
- se $\det A<0$, gli autovalori hanno segno opposto e $A$ è indefinita;
- se $\det A=0$, $A$ è semi-definita ma non definita.

**Esempio 1.2.** Sia $A=\begin{pmatrix}4&\alpha\\\alpha&2\end{pmatrix}$, con $\alpha\in\mathbb{R}$.

1. L'equazione caratteristica è $(4-\lambda)(2-\lambda)-\alpha^2=\lambda^2-6\lambda+8-\alpha^2=0$.
2. Le radici sono $\lambda_{1,2}=3\mp\sqrt{1+\alpha^2}$, con $\lambda_2>0$ sempre.
3. Il segno dipende da $\lambda_1$. Si ha $\lambda_1>0$ se e solo se $\sqrt{1+\alpha^2}<3$, cioè $|\alpha|<2\sqrt2$.
4. Conclusione: per $|\alpha|<2\sqrt2$ la matrice è definita positiva, per $|\alpha|=2\sqrt2$ è semi-definita positiva, per $|\alpha|>2\sqrt2$ è indefinita.

Lo stesso risultato segue dal criterio del determinante: $\det A=8-\alpha^2$.

**Errore tipico 1.2.** Concludere che $A$ è definita positiva perché gli elementi diagonali sono positivi. È una condizione necessaria, non sufficiente. Per $A=\begin{pmatrix}1&3\\3&1\end{pmatrix}$ si ha $\det A=-8<0$, e infatti gli autovalori sono $4$ e $-2$: la matrice è indefinita.

## p3 | Cenni di topologia di ℝⁿ

### Intorni e classificazione dei punti

Per descrivere dove una funzione di più variabili è definita, continua o derivabile serve un linguaggio che dica «vicino a un punto» e «ai bordi di un insieme». Lo fornisce l'intorno sferico.

**Definizione 1.1** (palla). Siano $\mathbf{x}_0\in\mathbb{R}^n$ e $r>0$. La **palla aperta** di centro $\mathbf{x}_0$ e raggio $r$ è

$$
B_r(\mathbf{x}_0)=\{\mathbf{x}\in\mathbb{R}^n:\ \|\mathbf{x}-\mathbf{x}_0\|<r\},
$$

mentre la **palla chiusa** è $\overline{B}_r(\mathbf{x}_0)=\{\mathbf{x}:\ \|\mathbf{x}-\mathbf{x}_0\|\le r\}$. Per $n=1$ è un intervallo, per $n=2$ un cerchio, per $n=3$ una sfera. La norma $\|\cdot\|$ è quella richiamata in {{formula:1.1}}.

Due palle con lo stesso centro sono una dentro l'altra al crescere del raggio. Due punti distinti si separano sempre con due palle disgiunte, di raggio abbastanza piccolo.

**Definizione 1.2** (punti interni, esterni, di frontiera). Sia $X\subseteq\mathbb{R}^n$ e sia $\mathbf{x}_0\in\mathbb{R}^n$.

- $\mathbf{x}_0$ è **interno** a $X$ se esiste $r>0$ con $B_r(\mathbf{x}_0)\subseteq X$.
- $\mathbf{x}_0$ è **esterno** a $X$ se esiste $r>0$ con $B_r(\mathbf{x}_0)\subseteq X^c$.
- $\mathbf{x}_0$ è **di frontiera** per $X$ se ogni palla $B_r(\mathbf{x}_0)$ contiene sia punti di $X$ sia punti di $X^c$.

Un punto di frontiera può appartenere a $X$ oppure no. I punti di frontiera di $X$ e di $X^c$ coincidono.

L'insieme dei punti interni è l'**interno** $\mathring{X}$, quello dei punti di frontiera è la **frontiera** $\partial X$, quello dei punti esterni è l'**esterno**. La **chiusura** è $\overline{X}=X\cup\partial X$. Altri testi scrivono $\operatorname{int}X$ per l'interno e $\operatorname{Fr}X$ o «bordo» per la frontiera.

Ogni punto di $\mathbb{R}^n$ è esattamente di uno dei tre tipi: interno, esterno o di frontiera. Si ha sempre $\mathring{X}\subseteq X\subseteq\overline{X}$.

:::image{src="assets/2b933f2b-punti-interni-esterni-frontiera.svg" alt="Insieme X nel piano con tre punti e le loro palle: interno, esterno, di frontiera" caption="Fig. 1.1 — Classificazione dei punti rispetto a un insieme X del piano: un punto interno, uno esterno e uno di frontiera, con le rispettive palle."}
:::

Un punto $\mathbf{x}_0\in X$ è **isolato** se esiste $r>0$ con $X\cap B_r(\mathbf{x}_0)=\{\mathbf{x}_0\}$. Un punto isolato è necessariamente di frontiera.

### Insiemi aperti, chiusi, limitati, compatti

**Definizione 1.3.** Un insieme $X\subseteq\mathbb{R}^n$ è **aperto** se ogni suo punto è interno, cioè $X=\mathring{X}$. È **chiuso** se $X^c$ è aperto.

Dalla definizione seguono due criteri pratici:

- $X$ è aperto se e solo se $X\cap\partial X=\emptyset$, cioè non contiene alcun punto della propria frontiera;
- $X$ è chiuso se e solo se $\partial X\subseteq X$, cioè contiene tutta la propria frontiera.

Quindi $X$ è chiuso se e solo se $X=\overline{X}$. Gli insiemi $\mathbb{R}^n$ e $\emptyset$ sono insieme aperti e chiusi, hanno frontiera vuota e sono gli unici con questa proprietà.

Un insieme può non essere né aperto né chiuso, e la maggior parte degli insiemi lo è. «Non aperto» non significa «chiuso».

**Definizione 1.4** (limitato, compatto). $X$ è **limitato** se esiste $R>0$ tale che $\|\mathbf{x}\|\le R$ per ogni $\mathbf{x}\in X$, cioè se $X\subseteq\overline{B}_R(\mathbf{0})$. È **compatto** se è chiuso e limitato.

Esempi: il quadrato $\lbrack 0,1\rbrack ^2$ è chiuso perché contiene la sua frontiera ed è limitato perché $\|\mathbf{x}\|\le\sqrt2$, quindi è compatto. Lo stesso vale per il cubo $\lbrack 0,1\rbrack ^n$. Poligoni, cerchi, ellissi, tetraedri, prismi, coni e sfere (pieni, con il bordo) sono compatti. La chiusura di ogni insieme limitato è compatta.

### Convessità e connessione

Dati $\mathbf{a}\neq\mathbf{b}$ in $\mathbb{R}^n$, il segmento che li congiunge è

:::formula{id="1.4" label="Segmento di estremi a e b"}
$$S\lbrack \mathbf{a},\mathbf{b}\rbrack =\{\mathbf{x}=\mathbf{a}+t(\mathbf{b}-\mathbf{a}):\ 0\le t\le 1\}=\{(1-t)\mathbf{a}+t\mathbf{b}:\ 0\le t\le 1\}$$
:::

**Definizione 1.5** (convesso). $X$ è **convesso** se, per ogni coppia di punti di $X$, il segmento che li unisce è contenuto in $X$.

Una **poligonale** di vertici $\mathbf{a}_0,\dots,\mathbf{a}_r$ è l'unione dei segmenti consecutivi $S\lbrack \mathbf{a}_{i-1},\mathbf{a}_i\rbrack $, $1\le i\le r$.

**Definizione 1.6** (connesso per archi). Un insieme **aperto** $A\subseteq\mathbb{R}^n$ è **connesso** se, presi comunque $\mathbf{x},\mathbf{y}\in A$, esiste una poligonale contenuta in $A$ che li congiunge.

Ogni aperto convesso è connesso, ma non viceversa. Una corona circolare $\{r_1<\|\mathbf{x}-\mathbf{x}_0\|<r_2\}$ è connessa e non convessa. L'insieme aperto $\{xy>1\}$ non è connesso: è formato da due pezzi, uno con $x>0$ e uno con $x<0$, detti **componenti connesse**.

:::image{src="assets/2b933f2b-insiemi-convesso-connesso.svg" alt="Corona circolare con segmento che esce dall'insieme e iperbole xy>1 con due rami" caption="Fig. 1.2 — Corona circolare: connessa ma non convessa, il segmento tra due punti esce dall'insieme. Insieme {xy>1}: due componenti connesse."}
:::

Una **regione** è l'unione di un aperto connesso non vuoto $A$ e di una parte della sua frontiera. La sua frontiera è contenuta in quella di $A$, cioè $\partial R\subseteq\partial A$.

Nel seguito useremo queste nozioni per gli insiemi di definizione delle funzioni (vedi [Funzioni scalari e campi vettoriali](ref:chapter/1#p4)) e per i teoremi di Weierstrass e degli zeri (vedi [Limiti e continuità](ref:chapter/1#p5)).

### Metodo per classificare un insieme del piano

Dato un insieme $X\subseteq\mathbb{R}^2$ descritto da disuguaglianze:

1. Disegnare $X$, distinguendo i bordi inclusi dai bordi esclusi.
2. Individuare i punti candidati alla frontiera, come quelli sulle curve in cui una disuguaglianza diventa uguaglianza, e verificarli con la definizione: ogni palla centrata in un punto di frontiera deve incontrare sia $X$ sia il suo complementare. Considerare anche gli eventuali punti isolati o esclusi.
3. L'interno è $X$ meno i punti di frontiera che gli appartengono. La chiusura è $X$ più i punti di frontiera che non gli appartengono.
4. Confrontare: $X$ è aperto se $X\cap\partial X=\emptyset$, chiuso se $\partial X\subseteq X$.
5. Limitato: stimare $\|\mathbf{x}\|$ su $X$. Compatto: chiuso e limitato.
6. Convesso: cercare due punti il cui segmento esce da $X$. Connesso: cercare una poligonale per ogni coppia di punti, o riconoscere i pezzi separati.

**Esempio 1.3.** Sia $A=\{(x,y)\in\mathbb{R}^2:\ 0\le x\le1,\ 0<y<1\}$.

- Il disegno è un quadrato con i lati verticali $x=0$ e $x=1$ inclusi e i lati orizzontali $y=0$ e $y=1$ esclusi.
- Frontiera: l'unione dei quattro lati del quadrato. Contiene punti di $A$ (i lati verticali, tranne gli estremi) e punti non di $A$ (i lati orizzontali).
- Interno: togliendo da $A$ i lati verticali resta il quadrato aperto $\mathring{A}=(0,1)^2$.
- Chiusura: aggiungendo i lati orizzontali si ha $\overline{A}=\lbrack 0,1\rbrack ^2$.
- $A$ non è aperto, perché contiene punti di frontiera. Non è chiuso, perché non contiene tutta la frontiera. È limitato, convesso e quindi connesso.

**Esempio 1.4.** Sia $C=\{(x,y)\in\mathbb{R}^2:\ |y|>2\}$, cioè l'unione dei semipiani $y>2$ e $y<-2$.

- Interno: $\mathring{C}=C$, perché intorno a ogni punto si può prendere una palla di raggio $|y|-2$ contenuta in $C$.
- Frontiera: le due rette $y=2$ e $y=-2$, nessuna delle quali appartiene a $C$. La chiusura è $\{|y|\ge2\}$.
- $C$ è aperto. Non è limitato. Non è convesso: il segmento da $(0,3)$ a $(0,-3)$ passa per l'origine, che non è in $C$. Non è connesso: ogni poligonale tra i due semipiani deve attraversare la striscia $|y|\le2$.

**Esempio 1.5** (un punto isolato). Sia $D=\{x^2+y^2<4\}\setminus(\lbrack -1,1\rbrack \times\{0\})$, un cerchio aperto privato di un segmento.

- $D$ è aperto, perché si toglie un insieme chiuso da un aperto.
- La frontiera è la circonferenza $x^2+y^2=4$ unita al segmento $\lbrack -1,1\rbrack \times\{0\}$. La chiusura è il cerchio chiuso $\{x^2+y^2\le4\}$.
- $D$ è limitato e connesso, perché si può aggirare il segmento con una poligonale. Non è convesso: il segmento da $(0,1)$ a $(0,-1)$ attraversa il taglio.

Se invece si aggiunge a un insieme un punto lontano dal resto, quel punto è isolato e quindi di frontiera. Ne è un esempio $(0,1)$ nell'insieme $\{y^2\le x^2,\ x\neq0\}\cup\{(0,1)\}$.

**Errore tipico 1.3.** Concludere che un insieme è chiuso perché «non è aperto». Un insieme come $A$ dell'esempio precedente non è né aperto né chiuso. Per decidere si controlla sempre se $X$ contiene tutta la frontiera (chiuso) o nessun punto di essa (aperto).

**Errore tipico 1.4.** Dimenticare i punti esclusi o isolati quando si cerca la frontiera. Un punto tolto al dominio, come l'origine nel quoziente $y^2/x^2$, o un punto aggiunto da una disuguaglianza degenere, come $x^2+(y-1)^2\le0$, è un punto di frontiera.

**Errore tipico 1.5.** Dedurre «connesso» da «limitato» o «convesso» da «connesso». La corona circolare è connessa ma non convessa. La connessione richiede una poligonale tra ogni coppia di punti, e il segmento che li unisce può uscire dall'insieme.

## p4 | Funzioni scalari e campi vettoriali

Le funzioni di più variabili descrivono grandezze che dipendono da più parametri, come la temperatura in un punto dello spazio o la velocità di un fluido. In questa sezione si fissano il linguaggio (insieme di definizione, grafico, insiemi di livello, componenti di un campo) e i metodi per trattarli. Per gli aspetti topologici degli insiemi che compaiono (aperti, chiusi, frontiera) si rimanda a [Cenni di topologia di $\mathbb{R}^n$](ref:chapter/1#p3).

### Funzioni scalari e insieme di definizione

**Definizione 1.7** (funzione reale di $n$ variabili). Sia $n\ge 1$ un intero. Una *funzione reale di $n$ variabili reali* è una funzione definita in $\mathbb{R}^n$ a valori in $\mathbb{R}$; indicando il suo insieme di definizione con $\operatorname{dom} f$ si scrive $f : \operatorname{dom} f \subseteq \mathbb{R}^n \to \mathbb{R}$. Per $n=2$ e $n=3$ il punto $\mathbf{x}$ si scrive $(x,y)$ e $(x,y,z)$.

Il **grafico** di $f$ è un sottoinsieme di $\mathbb{R}^{n+1}$:

:::formula{id="1.5" label="Grafico di una funzione scalare"}
$$\Gamma(f)=\{(\mathbf{x},f(\mathbf{x}))\in\mathbb{R}^{n+1} : \mathbf{x}\in\operatorname{dom} f\}$$
:::

Quando la funzione è data da una formula, $\operatorname{dom} f$ è l'insieme dei punti in cui la formula ha senso. Per determinarlo si procede così.

1. Si elencano le operazioni che pongono restrizioni: denominatori ($\ne 0$), radici di indice pari (argomento $\ge 0$), logaritmi (argomento $>0$), e così via.
2. Si scrive ogni restrizione come disequazione o equazione nelle variabili $x,y,(z)$.
3. Si mettono a sistema le condizioni (intersezione) e si disegna l'insieme nel piano o nello spazio, distinguendo i bordi inclusi da quelli esclusi.

Alcuni esempi tipici: $f(x,y)=\dfrac{y^2+x^2}{y^2-x^2}$ è definita su $\mathbb{R}^2$ privato delle rette $y=\pm x$; $f(x,y,z)=\sqrt{z-x^2-y^2}$ ha per dominio $\{z\ge x^2+y^2\}$, cioè il paraboloide $z=x^2+y^2$ con la regione interna; $f(\mathbf{x})=\log(1-x_1^2-\dots-x_n^2)$ ha per dominio la palla aperta $\{\sum_{i=1}^n x_i^2<1\}$.

**Esempio 1.6** (dominio con logaritmo). Determinare e disegnare il dominio di
$$f(x,y)=\log\!\big[(y-x^2)(2x^2-y)\big].$$

*Passo 1.* L'unica restrizione è quella del logaritmo: $(y-x^2)(2x^2-y)>0$.

*Passo 2.* Un prodotto è positivo se i due fattori hanno lo stesso segno. Si esaminano i due casi.
- Entrambi positivi: $y>x^2$ e $y<2x^2$, cioè $x^2<y<2x^2$.
- Entrambi negativi: $y<x^2$ e $y>2x^2$, cioè $2x^2<y<x^2$. Questo richiederebbe $2x^2<x^2$, ossia $x^2<0$, che è impossibile.

*Passo 3.* Quindi

$$
\operatorname{dom} f=\{(x,y)\in\mathbb{R}^2 : x^2<y<2x^2\}.
$$

Sono i punti compresi tra le due parabole, bordi esclusi. L'origine non appartiene al dominio, perché per $x=0$ la condizione $0<y<0$ è impossibile: le due parabole si toccano solo lì e il dominio è composto da due "spicchi" separati, uno per $x>0$ e uno per $x<0$.

:::image{src="assets/5f4a25a9-dominio-tra-parabole.svg" alt="Parabole y = x² e y = 2x² tratteggiate" caption="Fig. 1.3 — Le parabole y = x² e y = 2x² (tratteggiate, bordi esclusi): il dominio è la regione compresa fra le due, origine esclusa."}
:::

**Errore tipico 1.6.** Sostituire la condizione "prodotto $>0$" con "ogni fattore $>0$" senza controllare l'altro caso (entrambi negativi), oppure includere i bordi: con un logaritmo la disuguaglianza è sempre stretta, mentre con una radice è larga. Va sempre verificato anche che i casi scartati siano davvero impossibili, come sopra.

### Grafici e insiemi di livello

Il grafico può essere disegnato soltanto per $n\le 2$. Per $f(x,y)=\sqrt{9-x^2-y^2}$ il grafico ha equazione $z=\sqrt{9-x^2-y^2}$; elevando al quadrato si ottiene $x^2+y^2+z^2=9$, una sfera di centro l'origine e raggio $3$. Poiché $z\ge 0$, il grafico è la semisfera superiore.

Per visualizzare funzioni di due o tre variabili si usano gli insiemi di livello.

**Definizione 1.8** (insieme di livello). Dato $c\in\mathbb{R}$, l'insieme di livello di $f$ è

:::formula{id="1.6" label="Insieme di livello"}
$$L(f,c)=\{\mathbf{x}\in\operatorname{dom} f : f(\mathbf{x})=c\}$$
:::

cioè il sottoinsieme di $\mathbb{R}^n$ dove $f$ vale $c$.

Per $n=2$ è la proiezione sul piano $xy$ dell'intersezione fra il grafico di $f$ e il piano $z=c$. L'insieme $L(f,c)$ è non vuoto se e solo se $c\in\operatorname{im} f$. Sotto ipotesi ragionevoli su $f$ esso è formato da una o più *curve di livello* (per $n=2$) o *superfici di livello* (per $n=3$).

Se le curve di livello vengono tracciate per valori di $c$ equispaziati, si addensano dove il grafico è ripido e si diradano dove è piatto. Nelle mappe topografiche le curve di livello dell'altezza sono le *isoipse*; per la temperatura sono le *isoterme*, per la pressione le *isobare*.

**Esempio 1.7** (curve di livello). Per $f(x,y)=\sqrt{9-x^2-y^2}$, con $\operatorname{dom} f=\{x^2+y^2\le 9\}$ e $\operatorname{im} f=\lbrack 0,3\rbrack $, si ha

$$
f(x,y)=c \iff x^2+y^2=9-c^2 .
$$

Per $0\le c<3$ sono circonferenze di centro l'origine e raggio $\sqrt{9-c^2}$. Per $c=3$ si ottiene solo l'origine; per $c>3$ o $c<0$ l'insieme è vuoto, coerentemente con $\operatorname{im} f=\lbrack 0,3\rbrack $. I raggi diminuiscono sempre più rapidamente al crescere di $c$: i livelli si addensano vicino al bordo del dominio, dove la semisfera è più ripida.

**Esempio 1.8** (livelli ridotti a rette). Per $f(x,y)=\dfrac{y^2+x^2}{y^2-x^2}$ l'equazione $f=c$ equivale, con $y^2\ne x^2$, a $(1+c)x^2=(c-1)y^2$. Per $c=1$ diventa $x^2=0$, cioè l'asse $y$ privato dell'origine; per $c=-1$ diventa $y^2=0$, cioè l'asse $x$ privato dell'origine; negli altri casi sono due rette per l'origine, di equazione $y=\pm\sqrt{\tfrac{1+c}{c-1}}\,x$, quando il radicando è positivo. Gli insiemi di livello sono quindi rette per l'origine, come mostra il grafico dei livelli di questa funzione.

**Errore tipico 1.7.** Dimenticare di restringere $c$ a $\operatorname{im} f$, oppure dimenticare di escludere dall'insieme di livello i punti fuori dal dominio (qui l'origine e le rette $y=\pm x$). Una curva di livello è sempre contenuta in $\operatorname{dom} f$.

### Funzioni vettoriali e campi vettoriali

**Definizione 1.9** (funzione vettoriale, campo). Siano $n,m\ge1$. Una funzione $\mathbf{F}:\operatorname{dom}\mathbf{F}\subseteq\mathbb{R}^n\to\mathbb{R}^m$ si dice *funzione vettoriale* se $m\ge 2$ (per $m=1$ si ritrova il caso scalare). Se $n=m$ si dice *campo vettoriale*.

Le curve sono particolari funzioni vettoriali con $n=1$, le superfici nello spazio con $n=2$, $m=3$; sono trattate in [Curve in $\mathbb{R}^m$](ref:chapter/3#p5) e in [Superfici in $\mathbb{R}^3$](ref:chapter/3#p7).

Le componenti di $\mathbf{F}$ rispetto alla base canonica sono

$$
\mathbf{F}(\mathbf{x})=(F_1(\mathbf{x}),\dots,F_m(\mathbf{x}))=\sum_{i=1}^m F_i(\mathbf{x})\,\mathbf{e}_i ,
$$

e ciascuna $F_i$ è una funzione scalare di $n$ variabili. Il dominio di $\mathbf{F}$ è l'intersezione dei domini delle componenti: $\operatorname{dom}\mathbf{F}=\bigcap_{i=1}^m\operatorname{dom}F_i$.

Esempi classici: il campo di forze elettrostatiche generato da una carica nell'origine

$$
\mathbf{F}(\mathbf{x})=\frac{\mathbf{x}}{\|\mathbf{x}\|^3},
$$

definito su $\mathbb{R}^3\setminus\{\mathbf{0}\}$ a valori in $\mathbb{R}^3$; e la funzione lineare $\mathbf{F}(\mathbf{x})=A\mathbf{x}$, definita su $\mathbb{R}^n$ a valori in $\mathbb{R}^m$ per ogni matrice $A$ di tipo $m\times n$. Un fluido in un tubo definisce il campo delle velocità, che a ogni punto di una regione $\Omega$ associa il vettore velocità.

### Rappresentare un campo vettoriale

Per un campo piano il metodo è il seguente. Si sceglie un certo numero di punti $(x,y)$, si calcola $\mathbf{F}(x,y)$ e si disegna il vettore $\mathbf{F}(x,y)$ applicato nel punto $(x,y)$. Non si può farlo in ogni punto, ma pochi punti ben scelti danno un'impressione ragionevole del campo.

**Esempio 1.9.** Sia $\mathbf{F}(x,y)=(-y,x)$.

*Passo 1.* Valori in alcuni punti: $\mathbf{F}(1,0)=(0,1)$, $\mathbf{F}(0,1)=(-1,0)$, $\mathbf{F}(-1,0)=(0,-1)$, $\mathbf{F}(0,-1)=(1,0)$.

*Passo 2.* Si osserva che il vettore è tangente alla circonferenza con centro nell'origine passante per il punto. Infatti il prodotto scalare con il vettore posizione è nullo:

$$
\mathbf{x}\cdot\mathbf{F}(\mathbf{x})=(x,y)\cdot(-y,x)=-xy+xy=0,
$$

e inoltre $\|\mathbf{F}(\mathbf{x})\|=\|\mathbf{x}\|$, cioè la lunghezza del vettore coincide con il raggio. Il campo descrive le velocità di una rotazione antioraria, come quella di una ruota.

:::image{src="assets/5f4a25a9-campo-rotatorio.svg" alt="Campo vettoriale (-y, x) nel piano" caption="Fig. 1.4 — Il campo F(x,y) = (-y, x): in ogni punto il vettore è tangente alla circonferenza centrata nell'origine e la sua lunghezza cresce con la distanza dall'origine."}
:::

Un secondo esempio in $\mathbb{R}^3$ è $\mathbf{F}(x,y,z)=(0,0,z)$: tutti i vettori sono verticali, rivolti verso l'alto sopra il piano $xy$ e verso il basso sotto di esso, e la loro lunghezza cresce con la distanza dal piano $xy$.

**Errore tipico 1.8.** Disegnare il vettore $\mathbf{F}(x,y)$ con la coda nell'origine invece che nel punto $(x,y)$: il campo è un'assegnazione di un vettore a ogni punto, e solo l'applicazione nel punto fa emergere la struttura (tangenza ai cerchi, radialità, ecc.). Un altro errore è confondere il campo con il suo modulo: due campi diversi possono avere lo stesso $\|\mathbf{F}\|$ e direzioni del tutto diverse.

Nel seguito si studieranno [limiti e continuità](ref:chapter/1#p5).

## p5 | Limiti e continuità

### Definizioni e proprietà

Sia $\boldsymbol{f} : \operatorname{dom}\boldsymbol{f} \subseteq \mathbb{R}^n \to \mathbb{R}^m$ e sia $\boldsymbol{x}_0 \in \mathbb{R}^n$ un punto di accumulazione per $\operatorname{dom}\boldsymbol{f}$.

**Definizione 1.10** (limite). Si dice che $\boldsymbol{f}$ ha limite $\boldsymbol{\ell} \in \mathbb{R}^m$ per $\boldsymbol{x}$ tendente a $\boldsymbol{x}_0$, e si scrive $\lim_{\boldsymbol{x}\to\boldsymbol{x}_0}\boldsymbol{f}(\boldsymbol{x}) = \boldsymbol{\ell}$, se

$$
\forall \varepsilon>0\ \exists \delta>0 :\ \forall \boldsymbol{x}\in\operatorname{dom}\boldsymbol{f},\ 0<\|\boldsymbol{x}-\boldsymbol{x}_0\|<\delta \implies \|\boldsymbol{f}(\boldsymbol{x})-\boldsymbol{\ell}\|<\varepsilon,
$$

cioè $\boldsymbol{x}\in B_\delta(\boldsymbol{x}_0)\setminus\{\boldsymbol{x}_0\}$ implica $\boldsymbol{f}(\boldsymbol{x})\in B_\varepsilon(\boldsymbol{\ell})$.

**Definizione 1.11** (continuità). Sia $\boldsymbol{x}_0 \in \operatorname{dom}\boldsymbol{f}$. La funzione $\boldsymbol{f}$ è continua in $\boldsymbol{x}_0$ se

$$
\forall \varepsilon>0\ \exists \delta>0 :\ \forall \boldsymbol{x}\in\operatorname{dom}\boldsymbol{f},\ \|\boldsymbol{x}-\boldsymbol{x}_0\|<\delta \implies \|\boldsymbol{f}(\boldsymbol{x})-\boldsymbol{f}(\boldsymbol{x}_0)\|<\varepsilon.
$$

È continua su $\Omega\subseteq\operatorname{dom}\boldsymbol{f}$ se è continua in ogni punto di $\Omega$.

Se $\boldsymbol{x}_0\in\operatorname{dom}\boldsymbol{f}$ è di accumulazione, la continuità equivale a $\lim_{\boldsymbol{x}\to\boldsymbol{x}_0}\boldsymbol{f}(\boldsymbol{x})=\boldsymbol{f}(\boldsymbol{x}_0)$. Se $\boldsymbol{x}_0$ è un punto isolato del dominio, $\boldsymbol{f}$ è continua in $\boldsymbol{x}_0$ per definizione.

Una funzione $\boldsymbol{f}=(f_1,\dots,f_m)$ è continua in $\boldsymbol{x}_0$ se e solo se lo sono tutte le componenti $f_i$. Lo stesso vale per il limite, che si calcola componente per componente. Per le funzioni a valori vettoriali valgono unicità del limite, limite della somma e sostituzione nei limiti (da cui la continuità della funzione composta), ma non i teoremi del confronto.

Il criterio delle successioni caratterizza il limite anche per domini arbitrari: $\lim_{\boldsymbol{x}\to\boldsymbol{x}_0} f(\boldsymbol{x})=\ell$ se e solo se, per ogni successione $\boldsymbol{x}_k\in\operatorname{dom}f$ tale che $\boldsymbol{x}_k\to\boldsymbol{x}_0$ e $\boldsymbol{x}_k\neq\boldsymbol{x}_0$, si ha $f(\boldsymbol{x}_k)\to\ell$. Per ogni curva $\boldsymbol{\gamma}: I\to\mathbb{R}^n$ tale che $\boldsymbol{\gamma}(t)\to\boldsymbol{x}_0$ e $\boldsymbol{\gamma}(t)\neq\boldsymbol{x}_0$ per $t\neq t_0$, con $\boldsymbol{\gamma}(t)\in\operatorname{dom}f$ per $t\neq t_0$, l'esistenza del limite implica $\lim_{t\to t_0}f(\boldsymbol{\gamma}(t))=\ell$. Rette, parabole e altre curve che si avvicinano a $\boldsymbol{x}_0$ sono quindi utili per escludere l'esistenza del limite: due cammini con limiti diversi bastano a escluderla.

### Tecniche di calcolo

### Non esistenza: restrizioni a rette e curve

Se si trovano due restrizioni di $f$ con limiti distinti, il limite complessivo non esiste. Il metodo è questo:

1. si restringe $f$ agli assi coordinati e alle rette $y=kx$ (per il punto $(x_0,y_0)$: $y-y_0=k(x-x_0)$);
2. se i limiti dipendono da $k$ o dal cammino, si conclude che il limite non esiste;
3. se tutte le rette danno lo stesso valore, si provano curve più "tangenti" agli assi, come $y=x^2$ o $x=y^2$.

**Esempio 1.10.** Sia $f(x,y)=\dfrac{xy}{x^2+y^2}$ e si studi il limite in $(0,0)$. Sugli assi $f$ è identicamente nulla, quindi $\lim_{x\to0}f(x,0)=\lim_{y\to0}f(0,y)=0$. Lungo $y=x$, con $x\ne0$, si ha

$$
f(x,x)=\frac{x^2}{x^2+x^2}=\frac12 \ \Rightarrow\ \lim_{x\to0}f(x,x)=\frac12\neq 0.
$$

Il limite non esiste.

**Esempio 1.11.** Sia $f(x,y)=x\,e^{x/y}$ per $y\neq0$ e $f(x,0)=0$. Sugli assi $f$ vale $0$. Su $y=kx$, con $k\ne0$, si ha $f(x,kx)=x\,e^{1/k}\to0$. Dunque su ogni retta per l'origine il limite è $0$. Sull'arco di parabola $y=x^2$, $x>0$:

$$
f(x,x^2)=x\,e^{1/x}\to+\infty \quad (x\to0^+).
$$

Il limite non esiste.

**Errore tipico 1.9.** Concludere che il limite esiste e vale $0$ perché "lungo tutte le rette viene $0$". Le rette sono solo uno degli infiniti modi di avvicinarsi al punto: due legami diversi fra $x$ e $y$ possono dare comportamenti diversi, come mostra l'ultimo esempio. Le restrizioni provano la non esistenza, mai l'esistenza. Per provare l'esistenza servono una maggiorazione o le coordinate polari.

### Esistenza: maggiorazioni e confronto

Per dimostrare che il limite vale $\ell$ si maggiora $|f(x,y)-\ell|$ con una quantità che tende a $0$ e si usa il teorema del doppio confronto (per funzioni a valori scalari). Si usano disuguaglianze come $|x|\le\sqrt{x^2+y^2}$.

**Esempio 1.12.** Sia $f(x,y)=\dfrac{|x||y|}{\sqrt{x^2+y^2}}$. Poiché $\dfrac{|x|}{\sqrt{x^2+y^2}}\le1$, si ottiene $0\le|f(x,y)|\le|y|\to0$. Quindi $\lim_{(x,y)\to(0,0)}f(x,y)=0$.

### Coordinate polari

Nel piano si pone $x=x_0+r\cos\theta$, $y=y_0+r\sin\theta$.

**Teorema 1.1** (criterio delle coordinate polari). Sia $f$ definita in un intorno forato di $(x_0,y_0)$. Se esistono $\ell\in\mathbb{R}$ e una funzione $g$ della sola variabile $r$ tali che, in un intorno di $(x_0,y_0)$,

$$
|f(x_0+r\cos\theta,\,y_0+r\sin\theta)-\ell|\le g(r)\quad\text{con}\quad \lim_{r\to0^+}g(r)=0,
$$

allora $\lim_{(x,y)\to(x_0,y_0)}f(x,y)=\ell$.

L'ipotesi essenziale è che $g$ **non dipenda da $\theta$**: la stessa maggiorazione deve valere per ogni direzione di avvicinamento. In pratica si procede così.

1. Si traslano le variabili nel punto e si sostituisce.
2. Si semplifica e si maggiora usando $|\sin\theta|\le1$, $|\cos\theta|\le1$.
3. Si cerca $g(r)\to0$. Se invece il limite per $r\to0$ dipende da $\theta$, il limite in due variabili non esiste.

**Esempio 1.13.** Sia $f(x,y)=\dfrac{x^2}{\sqrt{x^2+y^2}}$ nell'origine. Si ha

$$
|f(r\cos\theta,r\sin\theta)|=\frac{r^2\cos^2\theta}{r}=r\cos^2\theta\le r,
$$

quindi il criterio si applica con $g(r)=r$ e il limite vale $0$.

**Esempio 1.14.** Si consideri $\displaystyle\lim_{(x,y)\to(0,1)}\frac{x\log y}{\sqrt{x^2+(y-1)^2}}$. Con $x=r\cos\theta$, $y=1+r\sin\theta$ si ha $f=\cos\theta\,\log(1+r\sin\theta)$. Dal limite notevole $\log(1+t)/t\to1$ segue $|\log(1+t)|\le2|t|$ per $|t|$ piccolo, dunque

$$
|f|\le 2r|\sin\theta\cos\theta|\le 2r=g(r)\to0.
$$

Il limite vale $0$.

**Esempio 1.15** (limite che dipende da $\theta$). Se $f(r\cos\theta,r\sin\theta)=\dfrac{\cos\theta-\sin\theta}{\cos\theta+\sin\theta}$, il valore non dipende da $r$ ma varia con $\theta$. Il limite per $r\to0$ cambia al variare della direzione e il limite in due variabili non esiste.

**Errore tipico 1.10.** Maggiorare lasciando $\theta$ nell'espressione di $g$, o fissare un $\theta$ e calcolare solo $\lim_{r\to0}$ lungo quella direzione. Un singolo $\theta$ è una retta e non basta, come sopra.

### Teoremi di Weierstrass e degli zeri

**Teorema 1.2** (di Weierstrass). Sia $f$ continua su un insieme compatto $K\subseteq\operatorname{dom}f$. Allora $f(K)$ è chiuso e limitato in $\mathbb{R}$ e, se $K$ è connesso, è un intervallo chiuso. In particolare $f$ assume su $K$ valore minimo e massimo.

Ricordiamo che compatto significa chiuso e limitato (si veda [Cenni di topologia di $\mathbb{R}^n$](ref:chapter/1#p3)). Il teorema garantisce l'esistenza degli estremi, ma non li calcola. Se $f$ è continua sul compatto e differenziabile in ogni suo punto interno, e non ha punti stazionari interni, gli estremi esistono e vanno cercati sulla frontiera.

**Esempio 1.16.** La funzione $f(x,y)=x^2-y$ è continua sul disco chiuso $K=\{(x,y):x^2+y^2\le1\}$, che è chiuso e limitato. Per Weierstrass ammette massimo e minimo su $K$. Gli estremi, per quanto detto, non possono essere interni perché $\nabla f=(2x,-1)\neq\boldsymbol{0}$, e vanno cercati su $\partial K$.

**Errore tipico 1.11.** Applicare Weierstrass su un insieme non compatto, per esempio il disco aperto $x^2+y^2<1$, oppure su un insieme limitato ma non chiuso. In tal caso gli estremi possono non esistere, ad esempio per $f(x,y)=x$ sul disco aperto.

**Teorema 1.3** (degli zeri). Sia $f$ continua su una regione $R\subseteq\mathbb{R}^n$ (un insieme connesso per poligonali). Se $f$ assume in $R$ sia valori strettamente positivi sia valori strettamente negativi, allora $f$ si annulla in almeno un punto di $R$.

L'idea: si congiungono i punti $\boldsymbol{a}$, $\boldsymbol{b}$ con $f(\boldsymbol{a})<0<f(\boldsymbol{b})$ con una poligonale in $R$. Su almeno un suo segmento $f$ cambia segno e vi si applica il teorema degli zeri in una variabile. Ne segue il teorema dei valori intermedi.

**Esempio 1.17.** Sia $f(x,y)=x^2+y^2-1$, continua su $\mathbb{R}^2$ (connesso). Poiché $f(0,0)=-1<0$ e $f(2,0)=3>0$, esiste almeno un punto dove $f=0$. L'insieme degli zeri è la circonferenza unitaria.

**Errore tipico 1.12.** Applicare il teorema degli zeri su un insieme non connesso. Se $R=\{x\ne0\}$ e $f(x,y)=x$, la funzione è continua e assume valori di entrambi i segni su $R$ ma non si annulla mai, perché $R$ è unione di due semipiani separati.
