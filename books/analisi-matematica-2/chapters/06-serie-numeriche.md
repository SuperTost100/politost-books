---
chapter: 6
title: Serie numeriche
---

## p1 | Introduzione

Le serie numeriche permettono di capire quando una somma con infiniti addendi assume un valore finito e quando, invece, cresce senza limite o non si stabilizza. Sono uno strumento essenziale per studiare approssimazioni, sviluppi e processi descritti come accumuli successivi. Per affrontare il capitolo servono le nozioni di Analisi Matematica 1 sulle successioni: limiti, infinitesimi, successioni monotone e confronto tra grandezze. È utile saper riconoscere successioni asintoticamente equivalenti e ricordare che il termine generale di una serie convergente deve tendere a zero, pur sapendo che questa condizione da sola non basta.

Al termine del capitolo saprai definire le somme parziali e determinare il carattere di diverse serie scegliendo il criterio adatto. Riconoscerai serie geometriche e telescopiche, confronterai serie a termini positivi con modelli noti e applicherai i criteri del rapporto e della radice, interpretando correttamente i casi inconcludenti. Per le serie a segni alterni saprai verificare le ipotesi del criterio di Leibniz e stimare l’errore di una somma parziale. Saprai inoltre distinguere convergenza assoluta e semplice e usare le regole per sommare serie, moltiplicarle per uno scalare e calcolarne il prodotto di Cauchy quando valgono le condizioni necessarie.

## p2 | Richiami sulle successioni

Le serie numeriche si studiano attraverso la successione delle somme parziali, quindi servono gli strumenti per calcolare limiti di successioni. Qui si richiamano le definizioni e i risultati che useremo nelle sezioni successive, in particolare confronti asintotici e gerarchia degli infiniti.

### Definizioni

Una **successione** reale è una funzione definita su un sottoinsieme di $\mathbb{N}$ del tipo $\{n\in\mathbb{N} : n\ge n_0\}$, a valori in $\mathbb{R}$. L'immagine di $n$ si indica con $a_n$ e la successione con $\{a_n\}_{n\ge n_0}$, o più semplicemente $\{a_n\}$.

La successione $\{a_n\}$ è **convergente** a $\ell$ se esiste finito $\lim_{n\to\infty}a_n=\ell$. Se il limite esiste ed è $+\infty$ o $-\infty$, la successione è **divergente** (positivamente o negativamente). Se il limite non esiste, la successione è **indeterminata**.

Il comportamento dei primi termini è ininfluente. Si dice che $\{a_n\}$ verifica **definitivamente** una proprietà se esiste $N\ge n_0$ tale che $\{a_n\}_{n\ge N}$ la verifica.

### Risultati principali

**Teorema 6.1** (unicità, limitatezza, monotonia). Il limite di una successione, se esiste, è unico. Una successione convergente è limitata. Se $\{a_n\}$ è definitivamente monotona e limitata, allora converge. Se è definitivamente monotona e non limitata, diverge a $+\infty$ (crescente) o a $-\infty$ (decrescente).

**Teorema 6.2** (confronto). Se $s_n\le t_n$ definitivamente, allora $\lim s_n\le\lim t_n$, purché i limiti esistano. Se $a_n\ge b_n$ definitivamente e $b_n\to+\infty$, allora $a_n\to+\infty$. Analogamente, se $a_n\le b_n$ definitivamente e $b_n\to-\infty$, allora $a_n\to-\infty$.

**Teorema 6.3** (successioni infinitesime). Se $\{a_n\}$ è infinitesima e $\{b_n\}$ è limitata, allora $\{a_nb_n\}$ è infinitesima.

**Teorema 6.4** (algebra dei limiti). Se $a_n\to\ell$ e $b_n\to m$, con $\ell,m$ finiti o infiniti, allora $a_n\pm b_n\to\ell\pm m$, $a_nb_n\to\ell m$ e, se definitivamente $b_n\ne0$, $a_n/b_n\to\ell/m$. Le formule valgono ogniqualvolta il secondo membro è definito. Nelle forme indeterminate $\lbrack +\infty-\infty\rbrack $, $\lbrack 0\cdot\infty\rbrack $, $\left[\tfrac00\right]$, $\left[\tfrac\infty\infty\right]$ occorre un'altra tecnica.

### Limiti notevoli e gerarchia degli infiniti

:::formula{id="6.1" label="Successione geometrica"}
$$\lim_{n\to\infty}q^n=\begin{cases}0 & \text{se } |q|<1,\\ 1 & \text{se } q=1,\\ +\infty & \text{se } q>1,\\ \text{non esiste} & \text{se } q\le -1.\end{cases}$$
:::

Valgono inoltre $\lim_{n\to\infty}\sqrt[n]{p}=1$ per ogni $p>0$ e $\lim_{n\to\infty}\sqrt[n]{n}=\lim_{n\to\infty}\exp\frac{\log n}{n}=e^0=1$. Il numero di Nepero $e$ è il limite della successione strettamente crescente e superiormente limitata $\left(1+\frac1n\right)^n$.

Per $\alpha>0$ e $q>1$, ciascuna delle successioni $\log n,\ n^\alpha,\ q^n,\ n!,\ n^n$ è un infinito di ordine superiore rispetto alla precedente.

:::formula{id="6.2" label="Gerarchia degli infiniti"}
$$\log n=o(n^\alpha),\qquad n^\alpha=o(q^n),\qquad q^n=o(n!),\qquad n!=o(n^n)\qquad (n\to\infty)$$
:::

In pratica, nei rapporti tra queste successioni il limite è determinato dall'infinito di ordine più alto, quello che compare per ultimo nella catena.

### Confronti asintotici

Due successioni $a_n$, $b_n$ con $b_n\ne0$ definitivamente sono **asintotiche**, e si scrive $a_n\sim b_n$ per $n\to\infty$, se $a_n/b_n\to1$. In tal caso $a_n$ e $b_n$ hanno lo stesso comportamento limite, e il limite di un prodotto o di un quoziente non cambia sostituendo un fattore con uno asintotico. Un caso utile: se $x_n\to0$, allora $\log(1+x_n)\sim x_n$.

**Esempio 6.1.** Si studia $a_n=\exp\left(\sqrt{n^2+2}\,\log\dfrac{n^2-n+1}{n^2+n+2}\right)$. Poiché l'esponenziale è continuo, basta calcolare il limite dell'esponente $b_n$. Si riscrive

$$b_n=\sqrt{n^2+2}\,\log\left(1-\frac{2n+1}{n^2+n+2}\right).$$

1. L'argomento $x_n=-\frac{2n+1}{n^2+n+2}$ tende a $0$, quindi $\log(1+x_n)\sim x_n$.
2. Si sostituisce nel prodotto: $b_n\sim-\dfrac{\sqrt{n^2+2}\,(2n+1)}{n^2+n+2}$.
3. Si confrontano i termini dominanti: $\sqrt{n^2+2}\sim n$, $2n+1\sim 2n$, $n^2+n+2\sim n^2$. Dunque $b_n\sim-\dfrac{2n^2}{n^2}=-2$, cioè $b_n\to-2$.
4. Per continuità dell'esponenziale, $a_n\to e^{-2}$.

**Errore tipico 6.1.** Sostituire con equivalenti asintotici dentro una somma, una differenza o una base con esponente che diverge. Per esempio, da $1+\frac1n\sim1$ si concluderebbe $\left(1+\frac1n\right)^n\to1^n=1$, mentre il limite vale $e$. La sostituzione è lecita solo per fattori di un prodotto o di un quoziente. Un errore analogo è usare l'algebra dei limiti in una forma indeterminata come se fosse un'espressione definita.

### Altre tecniche

- **Successione geometrica.** Si raccoglie il termine dominante: da $\dfrac{4^n-(-3)^n}{4^n(4^{-n}+1)}$ si ottiene $\dfrac{1-\left(-\frac34\right)^n}{4^{-n}+1}\to1$.
- **Infinitesima per limitata.** Poiché $\sin\frac1n\to0$ e $(-1)^n$ è limitata, $(-1)^n\sin\frac1n\to0$, e quindi $1+(-1)^n\sin\frac1n\to1$.
- **Maggiorazione.** Da $\left|\dfrac{n\cos n}{n^3+1}\right|\le\dfrac{n}{n^3}=\dfrac1{n^2}$ per $n\ge1$ segue, per il teorema del confronto, che il limite è $0$.
- **Divergenza per minorazione.** Se $a_n>n+1$ e $n+1\to+\infty$, allora $a_n\to+\infty$.

Queste tecniche tornano nello studio delle [serie numeriche](ref:chapter/6#p3), dove il carattere della serie si deduce dal comportamento della successione delle somme parziali e del termine generale.

## p3 | Serie numeriche: definizioni ed esempi

Una serie dà senso rigoroso all'idea di sommare infiniti numeri. Un segmento di lunghezza $2$ si può dividere a metà, poi si divide a metà la metà di destra, e così via all'infinito. Si ottengono segmenti di lunghezza $1, \frac12, \frac14, \frac18, \dots$ e viene naturale scrivere

$$2 = 1 + \frac12 + \frac14 + \frac18 + \frac1{16} + \cdots$$

. Il membro destro è una somma di infiniti addendi, che va definita tramite il limite di somme finite.

### Definizioni

Data la successione $\{a_k\}_{k\ge 0}$, la **successione delle somme parziali** (o **ridotte**) $\{s_n\}_{n\ge0}$ è definita da

:::formula{id="6.3" label="Somma parziale (ridotta) di una serie"}
$$s_n = a_0 + a_1 + \cdots + a_n = \sum_{k=0}^{n} a_k, \qquad s_n = s_{n-1} + a_n$$
:::

. Il simbolo $\sum_{k=0}^{\infty} a_k$ si chiama **serie** (numerica) e $a_k$ è il **termine generale**.

**Definizione 6.1** (carattere e somma di una serie). Si consideri $\lim_{n\to\infty} s_n$.

1. Se il limite $s$ esiste (finito o infinito), $s$ è la **somma della serie** e si scrive $\sum_{k=0}^{\infty} a_k = s$. Se $s$ è finito, la serie **converge**. Se $s=+\infty$ o $s=-\infty$, la serie **diverge** (positivamente o negativamente).
2. Se il limite non esiste, la serie è **indeterminata**.

Studiare una serie significa quindi studiare il limite di una successione, quella delle ridotte. Se la successione $\{a_k\}$ è definita solo per $k\ge k_0$, la definizione si adatta in modo ovvio.

**Osservazione 6.1.** Il carattere di una serie non cambia se si aggiungono, modificano o eliminano un numero finito di termini. Se la serie converge, però, il valore della somma in generale cambia.

### Serie geometrica

La **serie geometrica** di ragione $q\in\mathbb{R}$ è $\sum_{k=0}^{\infty} q^k$. Per $q=1$ si ha $s_n = n+1\to+\infty$. Per $q\neq1$ l'identità $1+x+\dots+x^n = \frac{1-x^{n+1}}{1-x}$ dà $s_n=\frac{1-q^{n+1}}{1-q}$. Il limite di $q^{n+1}$ si legge nel comportamento della successione geometrica, e si ottiene:

:::formula{id="6.4" label="Serie geometrica"}
$$\sum_{k=0}^{\infty} q^k = \begin{cases} \dfrac{1}{1-q} & \text{se } |q|<1,\\[2mm] +\infty & \text{se } q\ge 1,\\[1mm] \text{indeterminata} & \text{se } q\le -1. \end{cases}$$
:::

Per $q=\frac12$ si ritrova $\sum_{k=0}^{\infty}\frac1{2^k} = \frac{1}{1-1/2}=2$, cioè la (7.2). Le ridotte $s_n = 2-\frac1{2^n}$ crescono verso $2$ senza mai raggiungerlo.

:::image{src="assets/9891b97a-ridotte-geometrica-meta.svg" alt="Punti s_n della serie geometrica di ragione 1/2 che si avvicinano alla retta orizzontale s = 2" caption="Fig. 6.1 — Ridotte sₙ = 2 − 1/2ⁿ per n = 0, …, 8: crescono e si avvicinano all'asintoto s = 2, che è la somma della serie."}
:::

Se la serie parte da un indice $m$, si raccoglie la potenza iniziale:

$$\sum_{k=m}^{\infty} q^k = q^m \sum_{j=0}^{\infty} q^j = \frac{q^m}{1-q}, \qquad |q|<1.$$

**Esempio 6.2** (combinazione di serie geometriche). Calcolare $\sum_{k=0}^{\infty}\frac{3^k+2^k}{6^k}$.

Il termine generale si spezza in $\left(\frac36\right)^k+\left(\frac26\right)^k = \left(\frac12\right)^k+\left(\frac13\right)^k$. Entrambe le ragioni hanno modulo minore di $1$, quindi le due serie convergono e si possono sommare:

$$\sum_{k=0}^{\infty}\left(\frac12\right)^k + \sum_{k=0}^{\infty}\left(\frac13\right)^k = \frac{1}{1-\frac12}+\frac{1}{1-\frac13} = 2+\frac32=\frac72.$$

La serie converge e la sua somma vale $\frac72$.

**Esempio 6.3** (indice iniziale diverso da zero). Calcolare $\sum_{k=2}^{\infty}\left(\frac13\right)^k$.

Si ha $\sum_{k=2}^{\infty}\left(\frac13\right)^k = \frac{(1/3)^2}{1-1/3} = \frac{1/9}{2/3}=\frac16$. Come verifica, la somma da $k=0$ è $\frac32$ e vanno tolti i primi due termini: $\frac32-1-\frac13=\frac16$.

**Errore tipico 6.2.** Scrivere $\frac{1}{1-q}$ senza guardare da dove parte la serie. La formula $\frac1{1-q}$ vale solo se il primo indice è $k=0$. Altrimenti il primo termine è $q^m$ e la somma è $\frac{q^m}{1-q}$. Un secondo errore è dimenticare di controllare $|q|<1$: per $q=-1$ la serie $1-1+1-1+\cdots$ ha ridotte $1,0,1,0,\dots$ ed è indeterminata, non "uguale a $\frac12$".

### Serie telescopiche

Una serie è **telescopica** se $a_k = b_{k+1}-b_k$ per una opportuna successione $\{b_k\}_{k\ge k_0}$. In tal caso quasi tutti i termini si elidono e

:::formula{id="6.5" label="Ridotta di una serie telescopica"}
$$s_n = \sum_{k=k_0}^{n}(b_{k+1}-b_k) = b_{n+1}-b_{k_0}$$
:::

Il comportamento della serie coincide quindi con quello della successione $\{b_k\}$. Se $b_k\to \beta$ finito, la somma è $\beta-b_{k_0}$.

**Esempio 6.4** (serie divergente). Per $\sum_{k=1}^{\infty}\log\left(1+\frac1k\right)$ si ha $\log\left(1+\frac1k\right)=\log(k+1)-\log k$, quindi $b_k=\log k$ e

$$s_n = \log 2+(\log3-\log2)+\dots+(\log(n+1)-\log n)=\log(n+1)\to+\infty.$$

La serie diverge positivamente.

**Esempio 6.5** (serie di Mengoli). Calcolare $\sum_{k=1}^{\infty}\frac{1}{k(k+1)}$.

1. Si scompone: $\frac{1}{k(k+1)}=\frac1k-\frac1{k+1}$. Verifica: $\frac{(k+1)-k}{k(k+1)}=\frac1{k(k+1)}$.
2. Si scrive la ridotta: $s_n=\left(1-\frac12\right)+\left(\frac12-\frac13\right)+\dots+\left(\frac1n-\frac1{n+1}\right)=1-\frac1{n+1}$.
3. Si passa al limite: $s_n\to1$.

La serie converge e la sua somma vale $1$. Con l'indice che parte da $k=2$ la stessa serie si scrive $\sum_{k=2}^{\infty}\frac1{(k-1)k}=1$.

**Esempio 6.6** (serie trigonometrica). Per $\sum_{k=1}^{\infty}\left(\sin\frac1k-\sin\frac1{k+1}\right)$ la ridotta è

$$s_n=\sin1-\sin\frac1{n+1}\to\sin1,$$

e la serie converge con somma $\sin 1$.

**Esempio 6.7** (scomposizione razionale). Poiché $\frac{2k+1}{k^2(k+1)^2}=\frac1{k^2}-\frac1{(k+1)^2}$, la serie $\sum_{k=1}^{\infty}\frac{2k+1}{k^2(k+1)^2}$ ha $s_n=1-\frac1{(n+1)^2}$, dunque somma $1$.

**Errore tipico 6.3.** Non scrivere esplicitamente $s_n$ e dichiarare la somma "guardando i primi termini". Bisogna individuare quali termini sopravvivono all'elisione: con $b_k=\frac1k$ resta il primo termine **più** l'ultimo, $1-\frac1{n+1}$, e non solo $1$. Il limite di $b_{n+1}$ può non esistere o essere infinito, come in $\log(n+1)$: allora la serie non converge. Se si usa $b_k=-\frac1k$ per rispettare la forma $b_{k+1}-b_k$, bisogna tenere conto del segno nel calcolo di $b_{n+1}-b_{k_0}$.

### Condizione necessaria di convergenza

**Teorema 6.5** (condizione necessaria). Se la serie $\sum_{k=0}^{\infty}a_k$ converge, allora

:::formula{id="6.6" label="Condizione necessaria di convergenza"}
$$\lim_{k\to\infty}a_k=0$$
:::

L'idea della dimostrazione è breve. Se $s_n\to s$, allora $a_k=s_k-s_{k-1}\to s-s=0$.

Il teorema si usa in forma contronominale: **se $a_k$ non tende a $0$ (il limite non esiste o è diverso da $0$), la serie non converge.** Può divergere oppure essere indeterminata.

**Esempio 6.8.** Studiare $\sum_{k=1}^{\infty}\frac{2k}{k+5}$.

Si calcola $\lim_{k\to\infty}\frac{2k}{k+5}=2\neq0$. La condizione necessaria non è soddisfatta, quindi la serie non converge. I termini sono positivi e tendono a $2$, quindi $s_n\to+\infty$ e la serie diverge a $+\infty$.

**Esempio 6.9.** In $\sum_{k=0}^{\infty}(-1)^k$ il termine generale $(-1)^k$ non ha limite, perciò la serie non converge. Qui è indeterminata, come già visto con la serie geometrica di ragione $-1$.

**Errore tipico 6.4.** Invertire il teorema. La condizione $a_k\to0$ è **necessaria ma non sufficiente**. La serie $\sum_{k=1}^{\infty}\log\left(1+\frac1k\right)$ ha termine generale infinitesimo per la continuità del logaritmo, eppure diverge, come mostra la ridotta telescopica $\log(n+1)$. Lo stesso accade con la serie armonica $\sum_{k=1}^{\infty}\frac1k$, che diverge benché $\frac1k\to0$. Se $a_k\to0$ il test non dà alcuna informazione, e occorre un altro strumento, come i criteri della sezione [Serie a termini positivi](ref:chapter/6#p4).

### Come procedere

1. Controllare per prima cosa se $a_k\to0$: se no, la serie non converge e il lavoro è finito.
2. Riconoscere la struttura. Se $a_k$ è una potenza $q^k$ (o combinazione di potenze), usare la formula della serie geometrica. Se $a_k$ è una differenza $b_{k+1}-b_k$ (anche dopo una scomposizione in fratti semplici o un'identità), usare la ridotta telescopica.
3. In tutti gli altri casi, scrivere $s_n$ quando è possibile oppure rimandare ai criteri di convergenza delle sezioni successive.

Per le serie di segno qualunque e per le operazioni algebriche sulle serie si veda [Serie di segno qualunque](ref:chapter/6#p5).

## p4 | Serie a termini positivi

### Motivazione

Per una serie $\sum_{k=0}^{\infty} a_k$ il calcolo diretto delle ridotte $s_n$ è spesso impossibile. Serve allora un modo per decidere se la serie converge senza conoscerne la somma. Per le serie a termini positivi esistono criteri semplici da applicare, ed è il caso più frequente negli esercizi d'esame.

### Serie a termini positivi

**Definizione 6.2** (serie a termini positivi). Una serie $\sum_{k=0}^{\infty} a_k$ si dice a termini positivi se $a_k \ge 0$ per ogni $k \in \mathbb{N}$.

Se la proprietà vale solo da un certo indice in poi, i criteri che seguono si applicano ugualmente: il carattere di una serie non cambia modificando un numero finito di termini (si veda [Serie numeriche: definizioni ed esempi](ref:chapter/6#p3)).

**Proposizione 6.1** (regolarità). Se $\sum_{k=0}^{\infty} a_k$ è a termini positivi, allora la serie o converge o diverge a $+\infty$. Non può essere indeterminata.

L'idea è che $s_{n+1}=s_n+a_{n+1}\ge s_n$, quindi $\{s_n\}$ è monotona crescente e ha limite, finito o $+\infty$.

Per le serie a termini positivi basta dunque decidere tra convergenza e divergenza, e i criteri seguenti servono a questo.

### Serie di riferimento

I criteri di confronto richiedono serie di cui si conosca già il carattere. Quelle da avere sempre a mente sono la serie geometrica e la serie armonica generalizzata.

La serie geometrica $\sum_{k=0}^{\infty} q^k$ con $q\ge 0$ converge se e solo se $q<1$, e in tal caso la somma è $\frac{1}{1-q}$.

La serie armonica generalizzata è quella con esponente $\alpha>0$:

:::formula{id="6.7" label="Serie armonica generalizzata"}
$$\sum_{k=1}^{\infty}\frac{1}{k^{\alpha}}\;\begin{cases}\text{converge} & \text{se } \alpha>1,\\ \text{diverge} & \text{se } 0<\alpha\le 1.\end{cases}$$
:::

Casi particolari: $\alpha=1$ è la serie armonica $\sum \frac1k$, che diverge. $\alpha=2$ dà $\sum \frac{1}{k^2}$, che converge (la somma è $\frac{\pi^2}{6}$, ma non serve saperlo).

### Criterio del confronto

**Teorema 6.6** (criterio del confronto). Siano $\sum a_k$ e $\sum b_k$ serie con $0\le a_k\le b_k$ per ogni $k$ (o per ogni $k$ da un certo indice in poi). Allora:

1. se $\sum b_k$ converge, anche $\sum a_k$ converge; se $0\le a_k\le b_k$ per ogni $k$, la somma di $\sum a_k$ non supera quella di $\sum b_k$. Se la disuguaglianza vale solo da un certo indice in poi, si possono confrontare soltanto le somme delle code corrispondenti;
2. se $\sum a_k$ diverge, anche $\sum b_k$ diverge.

Il punto 2 segue dal punto 1: se $\sum b_k$ convergesse, convergerebbe anche $\sum a_k$.

In parole: ciò che sta sotto una serie convergente converge, ciò che sta sopra una serie divergente diverge.

**Esempio 6.10.** La serie $\sum_{k=1}^{\infty}\frac{1}{k^2}$ converge. Per $k\ge 2$ vale

$$
\frac{1}{k^2}<\frac{1}{(k-1)k},
$$

e la serie di Mengoli $\sum_{k=2}^{\infty}\frac{1}{(k-1)k}$ converge a $1$. Dunque la serie data converge e la sua somma è al più $2$.

**Esempio 6.11.** La serie armonica diverge: da $\log(1+x)\le x$ per $x>-1$ segue $\log\left(1+\frac1k\right)\le\frac1k$. La serie $\sum\log\left(1+\frac1k\right)$ è telescopica e diverge, quindi diverge anche $\sum\frac1k$.

Con lo stesso criterio, confrontando con $\sum\frac1k$ e con $\sum\frac1{k^2}$, si ottiene il comportamento della serie armonica generalizzata per $0<\alpha<1$ e per $\alpha>2$: per $0<\alpha<1$ si ha $\frac1{k^\alpha}>\frac1k$ e la serie diverge, per $\alpha>2$ si ha $\frac1{k^\alpha}<\frac1{k^2}$ e la serie converge. Il caso $1<\alpha<2$ si ottiene con il criterio integrale, che porta a {{formula:6.7}}.

### Criterio del confronto asintotico

Il confronto richiede una disuguaglianza valida per ogni $k$, spesso scomoda da dimostrare. Il criterio seguente richiede solo il confronto del comportamento per $k\to\infty$.

**Teorema 6.7** (criterio del confronto asintotico). Siano $\sum a_k$ e $\sum b_k$ serie a termini positivi. Se $\{a_k\}$ e $\{b_k\}$ sono equigrandi per $k\to\infty$, cioè

$$
\lim_{k\to\infty}\frac{a_k}{b_k}=\ell\in\mathbb{R}\setminus\{0\},
$$

allora le due serie hanno lo stesso comportamento: o convergono entrambe o divergono entrambe.

L'idea è che il rapporto $a_k/b_k$ è limitato, così come $b_k/a_k$, quindi $a_k\le M_1 b_k$ e $b_k\le M_2 a_k$, e si applica il criterio del confronto nei due sensi.

Il caso tipico è $a_k\sim b_k$ (cioè $\ell=1$), con $b_k=\frac{1}{k^\alpha}$: la serie data ha lo stesso carattere di $\sum\frac1{k^\alpha}$.

**Esempio svolto 6.12.** Studiare $\sum_{k=0}^{\infty}\frac{k+3}{2k^2+5}$.

1. I termini sono positivi.
2. Per $k$ grande il numeratore si comporta come $k$ e il denominatore come $2k^2$, quindi $a_k\approx\frac{1}{2k}$. Scegliamo $b_k=\frac1k$.
3. Calcoliamo il rapporto:
$\displaystyle \frac{a_k}{b_k}=\frac{k(k+3)}{2k^2+5}\longrightarrow\frac12\in(0,+\infty).$
4. Per il confronto asintotico la serie ha il carattere di $\sum\frac1k$, cioè diverge.

**Esempio svolto 6.13.** Studiare $\sum_{k=1}^{\infty}\sin\frac{1}{k^2}$.

1. Per $k\ge1$ si ha $0<\frac1{k^2}\le1<\pi$, quindi $\sin\frac1{k^2}>0$.
2. Poiché $\frac1{k^2}\to0$, vale $\sin\frac{1}{k^2}\sim\frac1{k^2}$.
3. La serie $\sum\frac1{k^2}$ converge ($\alpha=2>1$), quindi la serie data converge.

**Esempio svolto 6.14.** Studiare $\sum_{k=1}^{\infty}\frac{\sqrt{k}+1}{k^2+k}$.

1. Per $k\to\infty$ il numeratore è $\sim\sqrt k=k^{1/2}$ e il denominatore è $\sim k^2$. Quindi $a_k\sim\frac{k^{1/2}}{k^2}=\frac1{k^{3/2}}$.
2. Poiché $\alpha=\frac32>1$, la serie converge.

**Errore tipico 6.5.** Il confronto asintotico vale per serie a termini positivi (o definitivamente tutti dello stesso segno). Applicarlo a serie con termini di segno alterno, sostituendo $a_k$ con un equivalente, può portare a conclusioni false. Un altro errore è confrontare con una serie di cui non si conosce il carattere. Prima di applicarlo, verificare sempre il segno dei termini.

### Criterio del rapporto

**Teorema 6.8** (criterio del rapporto). Sia $\sum_{k=0}^{\infty}a_k$ con $a_k>0$ per ogni $k$. Si supponga che esista, finito o infinito, il limite

$$
\lim_{k\to\infty}\frac{a_{k+1}}{a_k}=\ell.
$$

Se $\ell<1$ la serie converge; se $\ell>1$ (compreso $\ell=+\infty$) la serie diverge.

Se $\ell<1$, da un certo indice in poi i termini si maggiorano con quelli di una geometrica di ragione $q\in(\ell,1)$. Se $\ell>1$, i termini crescono e non tendono a zero, quindi non vale la condizione necessaria di convergenza.

**Esempio svolto 6.15.** Studiare $\sum_{k=0}^{\infty}\frac{k}{3^k}$.

1. Il termine generale è $a_k=\frac{k}{3^k}$, quindi $a_{k+1}=\frac{k+1}{3^{k+1}}$.
2. Calcoliamo il rapporto:
$\displaystyle \frac{a_{k+1}}{a_k}=\frac{1}{3}\cdot\frac{k+1}{k}\longrightarrow\frac13<1.$
3. Per il criterio del rapporto la serie converge.

**Esempio svolto 6.16.** Studiare $\sum_{k=0}^{\infty}\frac{2^k}{k!}$.

1. Con $a_k=\frac{2^k}{k!}$ si ha
$\displaystyle \frac{a_{k+1}}{a_k}=\frac{2^{k+1}}{(k+1)!}\cdot\frac{k!}{2^k}=\frac{2}{k+1}\to0<1.$
2. La serie converge.

Il criterio del rapporto è lo strumento naturale quando compaiono fattoriali ed esponenziali $q^k$, perché nel rapporto si semplificano. Ricordare la gerarchia $n^\alpha=o(q^n)$, $q^n=o(n!)$ aiuta a prevedere l'esito.

### Criterio della radice

**Teorema 6.9** (criterio della radice). Sia $\sum_{k=0}^{\infty}a_k$ con $a_k\ge0$ per ogni $k$. Si supponga che esista, finito o infinito, il limite

$$
\lim_{k\to\infty}\sqrt[k]{a_k}=\ell.
$$

Se $\ell<1$ la serie converge; se $\ell>1$ la serie diverge.

Si usa quando $a_k$ è una potenza $k$-esima, o contiene $(\dots)^k$ o $(\dots)^{k^2}$.

**Esempio svolto 6.17.** Studiare $\sum_{k=1}^{\infty}\frac{1}{k^k}$.

1. $\sqrt[k]{a_k}=\frac1k\to0<1$.
2. La serie converge.

**Esempio svolto 6.18.** Studiare $\sum_{k=1}^{\infty}\left(\frac{k}{k+1}\right)^{k^2}$.

1. Calcoliamo la radice $k$-esima:
$\displaystyle \sqrt[k]{a_k}=\left(\frac{k}{k+1}\right)^{k}=\frac{1}{\left(1+\frac1k\right)^k}.$
2. Per il limite notevole di $e$, il denominatore tende a $e$, quindi $\sqrt[k]{a_k}\to\frac1e<1$.
3. La serie converge.

I due criteri algebrici sono formulati nelle formule seguenti, per riferimento rapido.

:::formula{id="6.8" label="Criterio del rapporto"}
$$\lim_{k\to\infty}\frac{a_{k+1}}{a_k}=\ell\;\Longrightarrow\;\begin{cases}\ell<1: & \text{converge},\\ \ell>1: & \text{diverge}.\end{cases}$$
:::

:::formula{id="6.9" label="Criterio della radice"}
$$\lim_{k\to\infty}\sqrt[k]{a_k}=\ell\;\Longrightarrow\;\begin{cases}\ell<1: & \text{converge},\\ \ell>1: & \text{diverge}.\end{cases}$$
:::

### Quale criterio scegliere

1. Se $a_k$ è un quoziente di polinomi, radici, logaritmi o funzioni che si approssimano con equivalenti (come $\sin$, $\log(1+\cdot)$), usare il **confronto asintotico** con $\frac1{k^\alpha}$.
2. Se compaiono $q^k$ e fattoriali, usare il **rapporto**.
3. Se compaiono potenze $k$-esime, usare la **radice**.
4. Se $a_k\not\to0$, la serie non converge (condizione necessaria), e non serve altro.

**Errore tipico 6.6** (caso $\ell=1$). Per rapporto e radice, con $\ell=1$ non si può concludere nulla. Le serie $\sum\frac1k$ (divergente) e $\sum\frac1{k^2}$ (convergente) danno entrambe $\ell=1$ con ciascuno dei due criteri. Per $a_k=\frac1{k^\alpha}$ o per quozienti di polinomi il limite del rapporto vale sempre $1$: in quel caso serve il confronto asintotico.

**Errore tipico 6.7** (condizione necessaria). $a_k\to0$ è necessaria ma non sufficiente: $\log\left(1+\frac1k\right)\to0$ e $\frac1k\to0$, ma entrambe le serie divergono.

**Errore tipico 6.8** (confronto nel verso sbagliato). Da $a_k\le b_k$ con $\sum b_k$ **divergente** non si deduce nulla su $\sum a_k$; allo stesso modo, da $a_k\ge b_k$ con $\sum b_k$ convergente non si deduce nulla. Il confronto dà informazione solo nei due casi indicati dal teorema.

Per le serie con termini di segno qualunque si veda [Serie di segno qualunque](ref:chapter/6#p5).

## p5 | Serie di segno qualunque

Le serie studiate finora avevano termini positivi, oppure erano casi particolari come la geometrica. Qui si considerano serie $\sum_{k=0}^{\infty} a_k$ in cui $a_k$ cambia segno. I criteri del confronto e del rapporto non si applicano direttamente. Serve allora un criterio specifico per i segni alterni (Leibniz), oppure la riduzione al caso positivo tramite la convergenza assoluta. In chiusura si vede come si comportano le serie rispetto a somma, prodotto per uno scalare e prodotto tra serie.

### Serie a termini di segno alterno

**Definizione 6.3** (serie a segni alterni). Una serie a termini di segno alterno è una serie della forma

$$
\sum_{k=0}^{\infty} (-1)^k b_k \qquad \text{con } b_k>0 \text{ per ogni } k\ge 0.
$$

**Teorema 6.10** (criterio di Leibniz). Sia $\sum_{k=0}^{\infty}(-1)^k b_k$ una serie a termini di segno alterno, con $b_k>0$. Se valgono entrambe le condizioni

1. $\lim_{k\to\infty} b_k = 0$;
2. la successione $\{b_k\}_{k\ge 0}$ è monotona decrescente,

allora la serie converge. Detta $s$ la sua somma e $r_n = s - s_n$ il resto, per ogni $n\ge 0$ vale

:::formula{id="6.10" label="Stima dell'errore per serie di Leibniz"}
$$|r_n| = |s-s_n| \le b_{n+1} \qquad\text{e}\qquad s_{2n+1}\le s\le s_{2n}$$
:::

L'idea della dimostrazione è la seguente. Poiché $b_k$ decresce, le ridotte di indice pari diminuiscono, perché $s_{2n}=s_{2n-2}-(b_{2n-1}-b_{2n})\le s_{2n-2}$. Quelle di indice dispari aumentano. Inoltre $s_{2n+1}=s_{2n}-b_{2n+1}\le s_{2n}$, quindi le due sottosuccessioni sono monotone e limitate. La differenza $s_{2n}-s_{2n+1}=b_{2n+1}$ tende a $0$ per la condizione 1, perciò hanno lo stesso limite $s$, che sta sempre tra due ridotte consecutive.

La {{formula:6.10}} dice che l'errore commesso fermandosi a $s_n$ è al più il primo termine trascurato, in valore assoluto. Le ridotte oscillano attorno alla somma, come mostra la figura per la serie armonica a segni alterni.

:::image{src="assets/ff793e08-ridotte-armonica-alterna.svg" alt="Ridotte della serie armonica a segni alterni che oscillano attorno alla somma" caption="Fig. 6.2 — Ridotte sₙ della serie (-1)^k/(k+1): quelle di indice pari decrescono dall'alto, quelle di indice dispari crescono dal basso, e la somma s sta sempre fra due ridotte consecutive."}
:::

**Esempio 6.19** (serie convergente, ma non assolutamente). Studiare la serie $\sum_{k=2}^{\infty}(-1)^k \dfrac{k}{k^2+3}$.

Si ha $b_k=\dfrac{k}{k^2+3}>0$ e la serie è a segni alterni.

1. Condizione 1: $b_k\sim \dfrac1k\to 0$.
2. Condizione 2: il limite da solo non basta, bisogna provare la decrescita. Si pone $f(x)=\dfrac{x}{x^2+3}$ e si calcola
$\displaystyle f'(x)=\frac{(x^2+3)-2x^2}{(x^2+3)^2}=\frac{3-x^2}{(x^2+3)^2}<0 \quad\text{per } x>\sqrt3 .$
Quindi $f$ è decrescente su $(\sqrt3,+\infty)$ e $b_{k+1}<b_k$ per ogni $k\ge 2$.
3. Entrambe le ipotesi valgono (la decrescita vale da $k=2$ in poi, e il carattere non cambia modificando un numero finito di termini), perciò la serie converge per Leibniz.

**Esempio 6.20** (stima della somma con errore prefissato). Approssimare $s=\sum_{k=0}^{\infty}\dfrac{(-1)^k}{k!}$ con errore minore di $10^{-3}$.

La serie è a segni alterni con $b_k=1/k!$. Questa successione tende a $0$ ed è decrescente per $k\ge 1$ (e $b_0=b_1=1$), quindi vale Leibniz. Dalla {{formula:6.10}} con $n=6$:

$$
0<s_6-s\le b_7=\frac1{5040}<\frac1{5000}=0.0002<10^{-3}.
$$

Poiché $s_6=1-1+\frac12-\frac16+\frac1{24}-\frac1{120}+\frac1{720}=0.368056\ldots$, si ottiene $s\approx 0.368$, corretta fino alla terza cifra decimale.

**Errore tipico 6.9.** Applicare Leibniz verificando solo $b_k\to 0$. La decrescita è un'ipotesi indispensabile. Si consideri $b_k=1/k$ per $k$ pari e $b_k=1/k^2$ per $k$ dispari, con $k\ge 2$. Si ha $b_k>0$, $b_k\to 0$, ma $b_k>b_{k+1}$ se $k$ è pari e $b_k<b_{k+1}$ se $k$ è dispari. La serie $\sum(-1)^k b_k$ è uguale a $\sum_{k\ \mathrm{pari}}\frac1k-\sum_{k\ \mathrm{dispari}}\frac1{k^2}$, dove la prima serie diverge a $+\infty$ e la seconda converge, quindi la serie diverge. Se la decrescita manca, Leibniz non si può usare e il carattere va studiato per altre vie. Non è detto che la serie diverga, ma può farlo.

**Errore tipico 6.10.** Dedurre la convergenza dalla sola condizione $a_k\to 0$. Questa condizione è necessaria ma non sufficiente: ad esempio $\sum \log(1+1/k)$ diverge pur avendo termine generale infinitesimo (si veda [Serie numeriche: definizioni ed esempi](ref:chapter/6#p3)).

### Convergenza assoluta

**Definizione 6.4** (convergenza assoluta). La serie $\sum_{k=0}^{\infty}a_k$ converge assolutamente se converge la serie a termini positivi $\sum_{k=0}^{\infty}|a_k|$.

Per esempio, $\sum_{k=1}^{\infty}(-1)^k\frac1{k^2}$ converge assolutamente perché converge $\sum\frac1{k^2}$.

**Teorema 6.11** (criterio di convergenza assoluta). Se $\sum_{k=0}^{\infty}a_k$ converge assolutamente, allora converge e vale

:::formula{id="6.11" label="Disuguaglianza della convergenza assoluta"}
$$\left|\sum_{k=0}^{\infty}a_k\right|\le\sum_{k=0}^{\infty}|a_k|$$
:::

L'idea della dimostrazione è la seguente. Si scrive $a_k=a_k^+-a_k^-$ con $a_k^{+}=\max\{a_k,0\}$ e $a_k^{-}=\max\{-a_k,0\}$. Allora $0\le a_k^\pm\le|a_k|$, e per il confronto convergono sia $\sum a_k^+$ sia $\sum a_k^-$, dunque converge anche la loro differenza $\sum a_k$. La disuguaglianza si ottiene passando al limite in $\left|\sum_{k=0}^n a_k\right|\le\sum_{k=0}^n|a_k|$.

Il teorema non si inverte. La serie armonica a segni alterni $\sum_{k=1}^{\infty}(-1)^{k-1}\frac1k$ converge per Leibniz (alcuni testi la scrivono con $(-1)^k$, che cambia solo il segno della somma), ma la serie dei moduli, cioè la serie armonica, diverge. In tal caso si dice che la serie converge **semplicemente** o **condizionatamente**.

**Metodo.** Per una serie di segno qualunque si procede così.

1. Si studia $\sum|a_k|$ con i criteri delle serie a termini positivi (confronto, confronto asintotico, rapporto, radice, serie armoniche generalizzate; si veda [Serie a termini positivi](ref:chapter/6#p4)). Se converge, la serie converge assolutamente e quindi converge.
2. Se $\sum|a_k|$ diverge, la serie può ancora convergere. Se è a segni alterni si prova Leibniz.
3. Se $a_k\not\to 0$, la serie non converge, per la condizione necessaria.

**Esempio 6.21** (studio parametrico). Al variare di $\alpha\in\mathbb{R}$, studiare $\sum_{k=1}^{\infty}\dfrac{(-1)^k}{k^\alpha}$.

- Se $\alpha>1$, la serie dei moduli $\sum k^{-\alpha}$ è armonica generalizzata convergente: la serie converge assolutamente.
- Se $0<\alpha\le 1$, $\sum k^{-\alpha}$ diverge. Ma $b_k=k^{-\alpha}$ è positiva, decrescente e infinitesima, quindi per Leibniz la serie converge: converge semplicemente, non assolutamente.
- Se $\alpha\le 0$, $|a_k|=k^{-\alpha}\ge 1$, quindi $a_k\not\to 0$ e la serie non converge (non è convergente, e poiché i termini non tendono a $0$ non è nemmeno assolutamente convergente).

**Errore tipico 6.11.** Concludere che la serie diverge perché diverge $\sum|a_k|$. Il fatto che i valori assoluti divergano dice soltanto che la convergenza, se c'è, non è assoluta. L'esempio con $\alpha=1$ lo mostra.

**Errore tipico 6.12.** Usare il criterio del confronto o del rapporto direttamente su $a_k$ quando cambia segno. Questi criteri valgono per termini positivi, quindi si applicano a $|a_k|$. Se il rapporto applicato ai moduli dà un limite $\ell>1$, allora $|a_k|$ non tende a $0$ e la serie non converge: può divergere oppure essere indeterminata. Se dà $\ell<1$, c'è convergenza assoluta. Se $\ell=1$ il criterio non dice nulla.

### Operazioni algebriche sulle serie

**Somma.** La serie somma di $\sum a_k$ e $\sum b_k$ è la serie di termine generale $a_k+b_k$. Siano $s=\sum a_k$ e $t=\sum b_k$, ciascuna convergente o divergente ($s,t\in\mathbb{R}\cup\{\pm\infty\}$). La serie somma è determinata ogni volta che $s+t$ è definita e allora

:::formula{id="6.12" label="Somma di due serie"}
$$\sum_{k=0}^{\infty}(a_k+b_k)=s+t$$
:::

Converge se $s+t\in\mathbb{R}$ e diverge se $s+t=\pm\infty$. Se una delle due converge e l'altra è indeterminata, la somma è indeterminata. Nelle forme $+\infty-\infty$ non si può dedurre nulla dai carattere degli addendi. Ad esempio con $a_k=1$ e $b_k=-1$ la serie somma è nulla e converge, mentre con $a_k=b_k=1$ diverge.

**Prodotto per uno scalare.** Per $\lambda\in\mathbb{R}$, se $\sum a_k$ converge a $s$, allora $\sum\lambda a_k$ converge a $\lambda s$. Se $\sum a_k$ diverge e $\lambda\ne 0$, anche $\sum\lambda a_k$ diverge. Per $\lambda=0$, la serie risultante è nulla.

**Prodotto di due serie.** Si vuole che, se le due serie convergono a $s$ e $t$, la serie prodotto converga a $st$. Il prodotto dei termini omologhi non funziona. Si definisce invece il prodotto di Cauchy, con termine generale

:::formula{id="6.13" label="Prodotto di Cauchy"}
$$c_k=\sum_{j=0}^{k}a_j\,b_{k-j}$$
:::

cioè la somma degli elementi sulla $k$-esima antidiagonale della tabella dei prodotti $a_ib_j$. Se entrambe le serie convergono assolutamente, allora $\sum c_k$ converge e

$$
\sum_{k=0}^{\infty}c_k=\left(\sum_{k=0}^{\infty}a_k\right)\left(\sum_{k=0}^{\infty}b_k\right)=st.
$$

**Esempio 6.22.** Siano $a_k=b_k=2^{-k}$, con $s=t=2$ e quindi $st=4$. Il prodotto dei termini omologhi dà $\sum 4^{-k}=\frac43\ne 4$. Il prodotto di Cauchy ha invece

$$
c_k=\sum_{j=0}^{k}2^{-j}2^{-(k-j)}=(k+1)2^{-k},\qquad \sum_{k=0}^{\infty}(k+1)2^{-k}=4,
$$

dove l'ultima somma segue da $\sum(k+1)q^k=\frac{1}{(1-q)^2}$ per $|q|<1$, con $q=\frac12$ (formula che si ritroverà con le [serie di potenze](ref:chapter/7#p4)). Le due serie convergono assolutamente, quindi il risultato è coerente con il teorema.

**Errore tipico 6.13.** Porre $c_k=a_kb_k$ per il prodotto di due serie. Il termine corretto è $c_k=\sum_{j=0}^{k}a_jb_{k-j}$. La convergenza assoluta di entrambe le serie garantisce che $\sum c_k=st$.
