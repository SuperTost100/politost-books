---
type: esercizi
printable: true
---

:::exercise{id="E1.1" chapter="1" difficulty="difficile"}
## Domanda
Sia $G:\mathbb{R}^2\to\mathbb{R}^2$ la funzione $G(x,y)=(x^2-y^2,\ 2xy)$.

1. Usando le coordinate polari $(x,y)=(r\cos\theta,r\sin\theta)$, esprimere $G$ in forma semplice.
2. Determinare l'immagine $G(\mathbb{R}^2)$ e, per ogni $(a,b)\neq(0,0)$, il numero di punti della controimmagine.
3. Determinare la controimmagine di $(3,4)$.
4. Determinare l'immagine della circonferenza $x^2+y^2=4$.

:::hint
Ricorda le formule di duplicazione $\cos2\theta=\cos^2\theta-\sin^2\theta$ e $\sin2\theta=2\sin\theta\cos\theta$.
:::

:::solution
1. Si ha

$$G(r\cos\theta,r\sin\theta)=\left(r^2(\cos^2\theta-\sin^2\theta),\ 2r^2\sin\theta\cos\theta\right)=r^2(\cos2\theta,\ \sin2\theta).$$

In forma polare, $G$ eleva al quadrato il modulo e raddoppia l'angolo.

2. Dato $(a,b)\neq(0,0)$, si scrive $(a,b)=\rho(\cos\varphi,\sin\varphi)$ con $\rho=\sqrt{a^2+b^2}>0$. L'equazione $G(x,y)=(a,b)$ equivale a $r^2=\rho$ e $2\theta=\varphi+2k\pi$, cioè $r=\sqrt\rho$ e $\theta=\varphi/2+k\pi$. Per $k$ pari e $k$ dispari si ottengono due soli punti distinti, opposti tra loro. Dunque ogni $(a,b)\neq(0,0)$ ha esattamente $2$ controimmagini, della forma $\pm(x_0,y_0)$. L'origine ha come unica controimmagine l'origine (infatti $r^2=0$). Quindi $G(\mathbb{R}^2)=\mathbb{R}^2$: la funzione è surgettiva ma non iniettiva.

3. Qui $\rho=5$, $\sqrt\rho=\sqrt5$. Si risolve il sistema $x^2-y^2=3$, $2xy=4$. Posto $xy=2$, si prova $(2,1)$: $4-1=3$ e $2\cdot2\cdot1=4$. Per il punto 2 le controimmagini sono esattamente due, quindi $G^{-1}(3,4)=\{(2,1),(-2,-1)\}$.

4. Sulla circonferenza $r=2$, quindi $G=4(\cos2\theta,\sin2\theta)$. Quando $\theta$ percorre $\lbrack 0,2\pi)$, l'angolo $2\theta$ percorre due volte il giro completo. L'immagine è la circonferenza $u^2+v^2=16$, percorsa due volte. Verifica: $(x^2-y^2)^2+(2xy)^2=(x^2+y^2)^2=16$.
:::
:::

:::exercise{id="E1.2" chapter="1" difficulty="facile"}
## Domanda
Sia $A=\begin{pmatrix}4&2\\2&1\end{pmatrix}$. Determinare gli autovalori di $A$ e un autovettore associato a ciascuno.

:::hint
Risolvi l'equazione caratteristica $\det(A-\lambda I)=0$; per $2\times2$ ricorda che $\det(A-\lambda I)=\lambda^2-(\operatorname{tr}A)\lambda+\det A$.
:::

:::solution
Si ha $\operatorname{tr}A=5$ e $\det A=4\cdot1-2\cdot2=0$. L'equazione caratteristica è

$$\lambda^2-5\lambda=0,$$

con soluzioni $\lambda_1=0$ e $\lambda_2=5$.

Per $\lambda_1=0$ si risolve $Av=0$: $4x+2y=0$, cioè $y=-2x$. Un autovettore è $v_1=(1,-2)$. Verifica: $A v_1=(4-4,\,2-2)=(0,0)$.

Per $\lambda_2=5$ si risolve $(A-5I)v=0$: $-x+2y=0$, cioè $x=2y$. Un autovettore è $v_2=(2,1)$. Verifica: $Av_2=(8+2,\,4+1)=(10,5)=5v_2$.

Come atteso per una matrice simmetrica, $v_1\cdot v_2=2-2=0$.
:::
:::

:::exercise{id="E1.3" chapter="1" difficulty="facile"}
## Domanda
Si consideri l'insieme $A=\{(x,y)\in\mathbb{R}^2 : 1<x^2+y^2\le 4\}$. Determinare l'interno, la chiusura e la frontiera di $A$, e stabilire se $A$ è aperto, chiuso, limitato.

:::hint
$A$ è una corona circolare: confronta i due bordi, uno incluso e uno escluso. Per la chiusura, verifica quali punti possono essere approssimati da punti di $A$; per la frontiera, considera quelli in ogni intorno dei quali cadono punti di $A$ e del complementare.
:::

:::solution
L'insieme $A$ è la corona circolare di centro l'origine, con raggio interno $1$ escluso e raggio esterno $2$ incluso.

Interno: ogni punto con $1<x^2+y^2<4$ ha un intorno contenuto in $A$, per continuità della funzione $(x,y)\mapsto x^2+y^2$. Inoltre, $\operatorname{int}A\subseteq A$, mentre i punti con $x^2+y^2=1$ non appartengono ad $A$. I punti con $x^2+y^2=4$ appartengono ad $A$, ma ogni loro intorno contiene punti con $x^2+y^2>4$, che non sono in $A$. Quindi

$$
\operatorname{int}A=\{(x,y)\in\mathbb{R}^2:1<x^2+y^2<4\}.
$$

Chiusura: i punti di $A$ appartengono alla sua chiusura. Anche ogni punto della circonferenza $x^2+y^2=1$ è limite di punti di $A$: se $(x_0,y_0)$ soddisfa $x_0^2+y_0^2=1$, la successione $\left(1+\frac{1}{n}\right)(x_0,y_0)$ tende a $(x_0,y_0)$ e, per $n$ sufficientemente grande, i suoi termini appartengono ad $A$. I punti con $x^2+y^2<1$ o $x^2+y^2>4$ hanno invece un intorno disgiunto da $A$. Pertanto

$$
\overline{A}=\{(x,y)\in\mathbb{R}^2:1\le x^2+y^2\le 4\}.
$$

Frontiera: $\partial A=\overline{A}\setminus\operatorname{int}A$, cioè l'unione delle due circonferenze

$$
\partial A=\{(x,y)\in\mathbb{R}^2:x^2+y^2=1\}\cup\{(x,y)\in\mathbb{R}^2:x^2+y^2=4\}.
$$

Poiché $A\neq\operatorname{int}A$ (contiene la circonferenza di raggio $2$), $A$ non è aperto. Poiché $A\neq\overline{A}$ (non contiene la circonferenza di raggio $1$), $A$ non è chiuso. Infine, $A$ è limitato perché è contenuto nel disco di raggio $2$.
:::
:::

:::exercise{id="E1.4" chapter="1" difficulty="medio"}
## Domanda
Sia

$$A=\begin{pmatrix}2&0&0\\0&3&1\\0&1&3\end{pmatrix}.$$

1. Determinare autovalori (con molteplicità) e una base ortonormale di autovettori.
2. Stabilire se la forma quadratica $q(\mathbf{x})=\mathbf{x}^TA\mathbf{x}$ è definita positiva.
3. Determinare minimo e massimo di $q$ sulla sfera $\|\mathbf{x}\|=1$.

:::hint
La matrice è diagonale a blocchi: studia separatamente il blocco $1\times1$ e il blocco $2\times2$. Per i punti 2 e 3 usa la formula {{formula:1.3}}.
:::

:::solution
1. Il polinomio caratteristico è il prodotto dei polinomi dei blocchi:

$$\det(A-\lambda I)=(2-\lambda)\big[(3-\lambda)^2-1\big]=(2-\lambda)(2-\lambda)(4-\lambda).$$

Gli autovalori sono $\lambda=2$ con molteplicità $2$ e $\lambda=4$ con molteplicità $1$.

Per $\lambda=4$: $(A-4I)\mathbf{v}=0$ dà $-2x=0$ e $-y+z=0$, quindi $\mathbf{v}=(0,1,1)$, normalizzato $\frac1{\sqrt2}(0,1,1)$.

Per $\lambda=2$: $(A-2I)\mathbf{v}=0$ dà la sola equazione indipendente $y+z=0$, con $x$ libera. L'autospazio ha dimensione $2$ ed è generato da $(1,0,0)$ e $(0,1,-1)$, che sono già ortogonali. Normalizzando: $(1,0,0)$ e $\frac1{\sqrt2}(0,1,-1)$.

La base ortonormale è $\{(1,0,0),\ \frac1{\sqrt2}(0,1,-1),\ \frac1{\sqrt2}(0,1,1)\}$, e tutti e tre i vettori sono ortogonali tra loro (anche con $(0,1,1)$).

2. Gli autovalori $2,2,4$ sono tutti positivi, quindi $q$ è definita positiva. In coordinate $\mathbf{y}$ rispetto alla base ortonormale si ha $q=2y_1^2+2y_2^2+4y_3^2$.

3. Con $\|\mathbf{x}\|=1$ si ha $y_1^2+y_2^2+y_3^2=1$, quindi

$$q=2+2y_3^2\in[2,4].$$

Il minimo è $2$, raggiunto per $y_3=0$ (autovettori relativi a $\lambda=2$), il massimo è $4$, raggiunto per $y_3=\pm1$, cioè in $\pm\frac1{\sqrt2}(0,1,1)$.
:::
:::

:::exercise{id="E1.5" chapter="1" difficulty="facile"}
## Domanda
Determinare e rappresentare il dominio naturale della funzione

$$f(x,y)=\sqrt{y-x^2}+\ln(2-y).$$

Stabilire poi se il dominio è chiuso, aperto, limitato.

:::hint
Scrivi le condizioni per la radice e per il logaritmo, e metti il sistema in forma di disuguaglianze su $y$ rispetto a $x$.
:::

:::solution
Condizioni di esistenza: la radice richiede $y-x^2\ge0$, cioè $y\ge x^2$; il logaritmo richiede $2-y>0$, cioè $y<2$. Dunque

$$\operatorname{dom}f=\{(x,y)\in\mathbb{R}^2 : x^2\le y<2\}.$$

Questo è il segmento di piano compreso tra la parabola $y=x^2$ (inclusa) e la retta $y=2$ (esclusa). Affinché esista $y$ con $x^2\le y<2$ occorre $x^2<2$, cioè $|x|<\sqrt2$, quindi $D$ è contenuto nel rettangolo $\lbrack -\sqrt2,\sqrt2\rbrack \times\lbrack 0,2)$ e il dominio è limitato.

Non è chiuso, perché i punti $(x,2)$ con $|x|\le\sqrt2$ sono di frontiera ma non appartengono a $D$. Non è aperto, perché i punti della parabola vi appartengono ma sono di frontiera.
:::
:::

:::exercise{id="E1.6" chapter="1" difficulty="medio"}
## Domanda
Sia $F:\mathbb{R}^2\to\mathbb{R}^2$ la funzione $F(x,y)=(x+y,\ xy)$.

1. Determinare la controimmagine del punto $(3,2)$.
2. Determinare l'immagine $F(\mathbb{R}^2)$.

:::hint
Per l'immagine, osserva che $(x+y)^2-4xy=(x-y)^2$ e interpreta $x,y$ come radici di un polinomio di secondo grado.
:::

:::solution
1. Si cerca $(x,y)$ con $x+y=3$ e $xy=2$. Sostituendo $y=3-x$ si ha $x(3-x)=2$, cioè $x^2-3x+2=0$, con soluzioni $x=1$ e $x=2$. La controimmagine è $\{(1,2),(2,1)\}$. Verifica: $F(1,2)=(3,2)=F(2,1)$.

2. Posto $(u,v)=F(x,y)$, vale $u^2-4v=(x+y)^2-4xy=(x-y)^2\ge0$. Quindi l'immagine è contenuta in $\{(u,v): v\le u^2/4\}$.

Viceversa, sia $(u,v)$ con $u^2-4v\ge0$. Il polinomio $t^2-ut+v$ ha discriminante $u^2-4v\ge0$ e dunque radici reali $x,y$, con $x+y=u$ e $xy=v$. Allora $F(x,y)=(u,v)$.

Pertanto

$$F(\mathbb{R}^2)=\{(u,v)\in\mathbb{R}^2 : v\le u^2/4\},$$

cioè la regione al di sotto della parabola $v=u^2/4$, parabola inclusa.
:::
:::

:::exercise{id="E1.7" chapter="1" difficulty="facile"}
## Domanda
Calcolare, se esiste,

$$\lim_{(x,y)\to(0,0)}\frac{x^2y}{x^2+y^2}.$$

:::hint
Maggiora il valore assoluto usando $x^2\le x^2+y^2$ e applica il teorema del confronto.
:::

:::solution
Per $(x,y)\neq(0,0)$ vale $x^2\le x^2+y^2$, quindi

$$0\le\left|\frac{x^2y}{x^2+y^2}\right|=\frac{x^2}{x^2+y^2}\,|y|\le|y|.$$

Poiché $|y|\to0$ per $(x,y)\to(0,0)$, per il teorema del confronto il limite vale $0$.
:::
:::

:::exercise{id="E1.8" chapter="1" difficulty="difficile"}
## Domanda
Sia $A=\begin{pmatrix}3&1\\-1&1\end{pmatrix}$.

1. Determinare gli autovalori di $A$ e le relative molteplicità algebrica e geometrica. Stabilire se $A$ è diagonalizzabile.
2. Posto $N=A-2I$, verificare che $N^2=0$ e dedurre una formula per $A^n$, con $n\ge1$ intero.
3. Calcolare $A^{10}$.

:::hint
Scrivi $A=2I+N$: poiché $2I$ commuta con $N$, puoi usare la formula del binomio di Newton, sfruttando $N^2=0$.
:::

:::solution
1. Si ha $\operatorname{tr}A=4$ e $\det A=3+1=4$, quindi $\det(A-\lambda I)=\lambda^2-4\lambda+4=(\lambda-2)^2$. L'unico autovalore è $\lambda=2$, con molteplicità algebrica $2$.

L'autospazio è il nucleo di

$$A-2I=\begin{pmatrix}1&1\\-1&-1\end{pmatrix},$$

che ha rango $1$ (le due righe sono proporzionali). Il nucleo è dato da $x+y=0$, quindi ha dimensione $1$, generato da $(1,-1)$. La molteplicità geometrica è $1<2$: $A$ non è diagonalizzabile.

2. Con $N=A-2I$:

$$N^2=\begin{pmatrix}1&1\\-1&-1\end{pmatrix}\begin{pmatrix}1&1\\-1&-1\end{pmatrix}=\begin{pmatrix}1-1&1-1\\-1+1&-1+1\end{pmatrix}=\begin{pmatrix}0&0\\0&0\end{pmatrix}.$$

Poiché $A=2I+N$ e $2I$ commuta con $N$, per il binomio di Newton

$$A^n=\sum_{k=0}^n\binom nk(2I)^{n-k}N^k=2^nI+n\,2^{n-1}N,$$

dato che $N^k=0$ per $k\ge2$. Verifica con $n=2$: $4I+4N=\begin{pmatrix}8&4\\-4&0\end{pmatrix}$, che coincide con il prodotto diretto $A\cdot A=\begin{pmatrix}9-1&3+1\\-3-1&-1+1\end{pmatrix}$.

3. Per $n=10$: $2^{10}=1024$ e $10\cdot2^9=5120$. Quindi

$$A^{10}=1024\begin{pmatrix}1&0\\0&1\end{pmatrix}+5120\begin{pmatrix}1&1\\-1&-1\end{pmatrix}=\begin{pmatrix}6144&5120\\-5120&-4096\end{pmatrix}.$$
:::
:::

:::exercise{id="E1.9" chapter="1" difficulty="medio"}
## Domanda
Sia $A=\left\{\left(\frac1n,0\right)\in\mathbb{R}^2 : n\in\mathbb{N},\ n\ge1\right\}$. Determinare interno, chiusura, frontiera, l'insieme dei punti di accumulazione e dei punti isolati di $A$. Stabilire se $A$ è aperto, chiuso, compatto.

:::hint
Ogni punto $\left(\frac1n,0\right)$ ha un intorno che non contiene altri punti di $A$; cosa succede invece intorno all'origine?
:::

:::solution
**Punti isolati.** Per $n\ge2$, i punti di $A$ vicini a $\left(\frac1n,0\right)$ sono $\left(\frac1{n-1},0\right)$ e $\left(\frac1{n+1},0\right)$. Il più vicino è $\left(\frac1{n+1},0\right)$, a distanza $\frac1n-\frac1{n+1}=\frac{1}{n(n+1)}>0$. Per $n=1$, l'unico punto di $A$ più vicino a $(1,0)$ è $\left(\frac12,0\right)$, a distanza $\frac12>0$. In ogni caso, un disco centrato in $\left(\frac1n,0\right)$ con raggio minore di tale distanza non contiene altri punti di $A$. Dunque ogni punto di $A$ è isolato.

**Punti di accumulazione.** L'origine è un punto di accumulazione, perché $\left(\frac1n,0\right)\to(0,0)$ con punti distinti da $(0,0)$. Nessun altro punto di $\mathbb{R}^2$ lo è: se $x<0$ oppure $x>1$, esiste un intorno senza punti di $A$; lo stesso vale se $y\ne0$. Se $y=0$ e $0<x<1$, con $x\ne\frac1n$ per ogni $n\ge1$, allora $\frac1{n+1}<x<\frac1n$ per qualche $n$, e un intorno sufficientemente piccolo di $(x,0)$ non contiene punti di $A$. L'insieme dei punti di accumulazione è $\{(0,0)\}$.

**Interno.** Ogni disco centrato in un punto di $A$ contiene punti con $y\ne0$, che non appartengono ad $A$. Quindi $\operatorname{int}A=\emptyset$.

**Chiusura.** $\overline A=A\cup\{(0,0)\}$.

**Frontiera.** $\partial A=\overline A\setminus\operatorname{int}A=A\cup\{(0,0)\}$.

$A$ non è aperto, perché l'interno è vuoto e $A\ne\emptyset$. Non è chiuso, perché non contiene l'origine, che è un punto di accumulazione. È limitato ma non chiuso, quindi non è compatto.
:::
:::

:::exercise{id="E1.10" chapter="1" difficulty="medio"}
## Domanda
Mostrare che non esiste il limite

$$\lim_{(x,y)\to(0,0)}\frac{xy^2}{x^2+y^4},$$

anche se lungo ogni retta passante per l'origine la funzione tende allo stesso valore.

:::hint
Calcola il limite lungo $y=mx$, poi prova una curva del tipo $x=y^2$.
:::

:::solution
Sia $f(x,y)=\dfrac{xy^2}{x^2+y^4}$.

Lungo l'asse $x=0$ vale $f(0,y)=0$ per $y\neq0$. Lungo la retta $y=mx$ con $x\neq0$:

$$f(x,mx)=\frac{m^2x^3}{x^2+m^4x^4}=\frac{m^2x}{1+m^4x^2}\xrightarrow[x\to0]{}0.$$

Tutte le rette danno quindi limite $0$.

Lungo la parabola $x=y^2$, con $y\neq0$:

$$f(y^2,y)=\frac{y^4}{y^4+y^4}=\frac12.$$

Questo valore è costante, quindi il limite lungo la parabola è $\frac12\neq0$. Esistono due curve passanti per l'origine lungo le quali la funzione ha limiti diversi, quindi il limite non esiste.
:::
:::

:::exercise{id="E1.11" chapter="1" difficulty="difficile"}
## Domanda
Sia $A=\{(x,y)\in\mathbb{Q}^2 : 0\le x\le1,\ 0\le y\le1\}$, cioè i punti del quadrato $\lbrack 0,1\rbrack ^2$ con entrambe le coordinate razionali. Determinare interno, chiusura, frontiera e insieme dei punti di accumulazione di $A$. Stabilire se $A$ è aperto, chiuso, limitato, compatto.

:::hint
Usa la densità di $\mathbb{Q}$ in $\mathbb{R}$: in ogni disco ci sono sia punti a coordinate razionali sia punti con una coordinata irrazionale.
:::

:::solution
Interno: ogni disco di $\mathbb{R}^2$ contiene un punto con la prima coordinata irrazionale (i razionali non riempiono nessun intervallo), e tale punto non è in $A$. Nessun disco è quindi contenuto in $A$, e $\operatorname{int}A=\emptyset$.

Chiusura: sia $(x,y)\in[0,1]^2$ e sia $\varepsilon>0$. Per la densità di $\mathbb{Q}$ esistono razionali $p,q$ con $|p-x|<\varepsilon/2$ e $|q-y|<\varepsilon/2$; si possono scegliere $p,q\in[0,1]$ (se $x=0$ si prende $p$ razionale in $\lbrack 0,\varepsilon/2)$, e analogamente negli altri casi limite). Il punto $(p,q)\in A$ dista da $(x,y)$ meno di $\varepsilon$. Dunque $\lbrack 0,1\rbrack ^2\subseteq\overline A$. Viceversa $A\subseteq[0,1]^2$, che è chiuso, quindi $\overline A\subseteq[0,1]^2$. Pertanto

$$\overline A=\lbrack 0,1\rbrack ^2.$$

Frontiera: $\partial A=\overline A\setminus\operatorname{int}A=\lbrack 0,1\rbrack ^2$.

Punti di accumulazione: ogni punto di $\lbrack 0,1\rbrack ^2$ lo è, perché ogni disco centrato in esso contiene infiniti punti di $A$ (lo stesso argomento di densità fornisce punti distinti dal centro). Nessun punto fuori da $\lbrack 0,1\rbrack ^2$ lo è, essendo $\lbrack 0,1\rbrack ^2$ chiuso e contenente $A$. I punti di accumulazione formano quindi $\lbrack 0,1\rbrack ^2$.

$A$ non è aperto (interno vuoto), non è chiuso (ad esempio $(1/\sqrt2,0)\in\overline A\setminus A$), è limitato, ma non è compatto perché non chiuso.
:::
:::

:::exercise{id="E1.12" chapter="1" difficulty="difficile"}
## Domanda
Sia $\alpha>0$ e sia $f:\mathbb{R}^2\to\mathbb{R}$ la funzione definita da

$$f(x,y)=\begin{cases}\dfrac{|x|^\alpha\, y}{x^2+y^2} & (x,y)\neq(0,0),\\[2mm] 0 & (x,y)=(0,0).\end{cases}$$

Determinare per quali valori di $\alpha$ la funzione $f$ è continua in $\mathbb{R}^2$.

:::hint
Fuori dall'origine $f$ è continua. Nell'origine passa alle coordinate polari e studia $\alpha>1$, $\alpha=1$, $\alpha<1$ separatamente, usando per i casi negativi la retta $y=x$.
:::

:::solution
Fuori dall'origine $f$ è rapporto di funzioni continue con denominatore non nullo, quindi è continua. Resta da studiare la continuità in $(0,0)$, dove $f(0,0)=0$.

In coordinate polari, per $r>0$:

$$f(r\cos\theta,r\sin\theta)=\frac{r^\alpha|\cos\theta|^\alpha\, r\sin\theta}{r^2}=r^{\alpha-1}|\cos\theta|^\alpha\sin\theta.$$

Caso $\alpha>1$. Si ha $|f|\le r^{\alpha-1}$ e $r^{\alpha-1}\to0$ per $r\to0$, indipendentemente da $\theta$. Quindi $f(x,y)\to0=f(0,0)$ e $f$ è continua.

Caso $\alpha=1$. Lungo l'asse $x$ ($y=0$) $f=0$. Lungo $y=x$ con $x>0$:

$$f(x,x)=\frac{x\cdot x}{2x^2}=\frac12.$$

I due limiti sono diversi, quindi il limite non esiste e $f$ non è continua nell'origine.

Caso $0<\alpha<1$. Lungo $y=x$ con $x>0$:

$$f(x,x)=\frac{x^{\alpha+1}}{2x^2}=\frac12x^{\alpha-1}\to+\infty,$$

perché $\alpha-1<0$. Il limite non è $0$, quindi $f$ non è continua.

Conclusione: $f$ è continua in $\mathbb{R}^2$ se e solo se $\alpha>1$.
:::
:::

:::exercise{id="E2.1" chapter="2" difficulty="medio"}
## Domanda
Sia $f(x,y,z)=x^2y+z\,e^{y}$. Nel punto $P=(1,1,0)$ determinare la direzione (versore) di massima crescita di $f$ e il valore della massima velocità di crescita.

:::hint
Il versore di massima crescita è $\nabla f(P)/\|\nabla f(P)\|$ e la velocità massima è $\|\nabla f(P)\|$ (vedi {{formula:2.5}}).
:::

:::solution
Calcoliamo il gradiente:

$$\nabla f(x,y,z)=\left(2xy,\;x^2+z\,e^{y},\;e^{y}\right),\qquad \nabla f(1,1,0)=(2,1,e).$$

La norma è $\|\nabla f(P)\|=\sqrt{4+1+e^2}=\sqrt{5+e^2}$. Per la {{formula:2.5}} la direzione di massima crescita è

$$\mathbf v=\frac{1}{\sqrt{5+e^2}}\,(2,1,e)$$

e la massima velocità di crescita vale $\sqrt{5+e^2}$.
:::
:::

:::exercise{id="E2.2" chapter="2" difficulty="medio"}
## Domanda
Sia $f(x,y)=\sqrt{|xy|}$. Dopo aver verificato che $f_x(0,0)=f_y(0,0)=0$, determinare per quali versori $\mathbf v=(a,b)$ esiste la derivata direzionale $D_{\mathbf v}f(0,0)$, intesa come limite bilatero per $t\to0$ del rapporto incrementale $\frac{f(ta,tb)-f(0,0)}{t}$.

:::hint
Calcolare $f(ta,tb)$ e osservare il segno di $t$ nel rapporto incrementale.
:::

:::solution
Poiché $f(x,0)=0$ e $f(0,y)=0$, risulta $f_x(0,0)=f_y(0,0)=0$.

Per un versore $\mathbf v=(a,b)$ si ha $f(ta,tb)=\sqrt{t^2|ab|}=|t|\sqrt{|ab|}$, quindi

$$\frac{f(ta,tb)-f(0,0)}{t}=\frac{|t|}{t}\sqrt{|ab|}.$$

Il limite per $t\to0^+$ è $\sqrt{|ab|}$ e quello per $t\to0^-$ è $-\sqrt{|ab|}$. I due limiti coincidono se e solo se $ab=0$, cioè $\mathbf v=(\pm1,0)$ oppure $\mathbf v=(0,\pm1)$; in tal caso la derivata direzionale vale $0$. Per ogni altra direzione la derivata direzionale non esiste.
:::
:::

:::exercise{id="E2.3" chapter="2" difficulty="medio"}
## Domanda
Sia $f(x,y)=x^y$ definita per $x>0$. Calcolare la matrice hessiana di $f$ nel punto $(1,2)$.

:::hint
Scrivere $x^y=e^{y\log x}$ oppure derivare tenendo presente che rispetto a $x$ è una potenza e rispetto a $y$ è un esponenziale.
:::

:::solution
Derivate prime: $f_x=y\,x^{y-1}$ e $f_y=x^y\log x$. Derivate seconde:

$$f_{xx}=y(y-1)x^{y-2},\qquad f_{xy}=x^{y-1}+y\,x^{y-1}\log x,\qquad f_{yy}=x^y(\log x)^2.$$

In $(1,2)$, essendo $\log1=0$: $f_{xx}=2\cdot1\cdot1=2$, $f_{xy}=1+0=1$, $f_{yy}=0$. Controllo: derivando $f_y$ rispetto a $x$ si ottiene $y\,x^{y-1}\log x+x^{y-1}$, che in $(1,2)$ vale $1$. Quindi

$$H_f(1,2)=\begin{pmatrix}2&1\\1&0\end{pmatrix}.$$
:::
:::

:::exercise{id="E2.4" chapter="2" difficulty="difficile"}
## Domanda
Sia

$$f(x,y)=\begin{cases}\dfrac{xy(x^2-y^2)}{x^2+y^2}&\text{se }(x,y)\neq(0,0)\\[2mm]0&\text{se }(x,y)=(0,0).\end{cases}$$

Calcolare $\dfrac{\partial}{\partial y}\left(\dfrac{\partial f}{\partial x}\right)(0,0)$ e $\dfrac{\partial}{\partial x}\left(\dfrac{\partial f}{\partial y}\right)(0,0)$ e commentare il risultato alla luce del teorema di Schwarz.

:::hint
Calcolare $f_x(0,y)$ con la definizione, come limite per $h\to0$ di $\frac{f(h,y)-f(0,y)}{h}$, e analogamente $f_y(x,0)$.
:::

:::solution
Per $y\neq0$,

$$f_x(0,y)=\lim_{h\to0}\frac{f(h,y)}{h}=\lim_{h\to0}\frac{y(h^2-y^2)}{h^2+y^2}=-y.$$

Per $y=0$ si ha $f_x(0,0)=0$, in accordo con la formula. Dunque $f_x(0,y)=-y$ per ogni $y$ e

$$\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)(0,0)=-1.$$

Analogamente, per $x\neq0$,

$$f_y(x,0)=\lim_{k\to0}\frac{f(x,k)}{k}=\lim_{k\to0}\frac{x(x^2-k^2)}{x^2+k^2}=x,$$

quindi $f_y(x,0)=x$ per ogni $x$ e

$$\frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right)(0,0)=1.$$

Le due derivate miste in $(0,0)$ sono diverse. Il teorema di Schwarz afferma che, se $f_{xy}$ e $f_{yx}$ esistono e sono continue in un intorno del punto, allora coincidono. Per $(x,y)\neq(0,0)$ si ha

$$f_{xy}(x,y)=f_{yx}(x,y)=\frac{(x^2-y^2)(x^4+10x^2y^2+y^4)}{(x^2+y^2)^3}.$$

Lungo $y=0$ questa espressione vale $1$, mentre lungo $x=0$ vale $-1$; quindi non ha limite in $(0,0)$. Le derivate miste non sono dunque continue nell'origine, e le ipotesi del teorema di Schwarz non sono soddisfatte.
:::
:::

:::exercise{id="E2.5" chapter="2" difficulty="medio"}
## Domanda
Sia $f(x,y,z)=x^2+xyz+z^3$. Calcolare la matrice hessiana di $f$ nel punto $(1,2,3)$ e il laplaciano $\Delta f(1,2,3)$.

:::hint
La matrice hessiana è $3\times3$ e simmetrica; il laplaciano è la sua traccia (vedi {{formula:3.9}}).
:::

:::solution
Derivate prime: $f_x=2x+yz$, $f_y=xz$, $f_z=xy+3z^2$. Derivate seconde:

$$f_{xx}=2,\quad f_{xy}=z,\quad f_{xz}=y,\quad f_{yy}=0,\quad f_{yz}=x,\quad f_{zz}=6z.$$

In $(1,2,3)$:

$$H_f(1,2,3)=\begin{pmatrix}2&3&2\\3&0&1\\2&1&18\end{pmatrix}.$$

Il laplaciano è la traccia: $\Delta f(1,2,3)=2+0+18=20$.
:::
:::

:::exercise{id="E2.6" chapter="2" difficulty="difficile"}
## Domanda
Sia $h:\mathbb{R}\to\mathbb{R}$ una funzione di classe $C^2$ e sia $f(x,y)=h(xy)$. Calcolare $f_{xx}+f_{yy}$ in funzione di $h$ e determinare tutte le funzioni $h$ per cui $f$ è armonica in $\mathbb{R}^2$, cioè $\Delta f=0$.

:::hint
Usare la regola della catena: $f_x=y\,h'(xy)$. Poi osservare che $xy$ assume ogni valore reale al variare di $(x,y)\neq(0,0)$.
:::

:::solution
Per la regola della catena $f_x=y\,h'(xy)$ e $f_y=x\,h'(xy)$. Derivando ancora

$$f_{xx}=y^2h''(xy),\qquad f_{yy}=x^2h''(xy),$$

quindi

$$\Delta f=(x^2+y^2)\,h''(xy).$$

Se $\Delta f=0$ in $\mathbb{R}^2$, per $(x,y)\neq(0,0)$ si ha $x^2+y^2>0$ e dunque $h''(xy)=0$. Poiché il prodotto $xy$ assume ogni valore $s\in\mathbb{R}$ (ad esempio $x=s$, $y=1$), si ha $h''(s)=0$ per ogni $s$, cioè $h(s)=as+b$ con $a,b\in\mathbb{R}$. Viceversa, se $h''\equiv0$ allora $\Delta f\equiv0$.
:::
:::

:::exercise{id="E2.7" chapter="2" difficulty="facile"}
## Domanda
Sia $f(x,y)=x^3y^2-2xy+y^4$. Calcolare la matrice hessiana di $f$ nel punto $(1,1)$.

:::hint
Calcolare prima le derivate prime, poi le quattro derivate seconde (le miste coincidono).
:::

:::solution
Le derivate prime sono $f_x=3x^2y^2-2y$ e $f_y=2x^3y-2x+4y^3$. Le derivate seconde sono

$$f_{xx}=6xy^2,\qquad f_{xy}=6x^2y-2,\qquad f_{yy}=2x^3+12y^2.$$

In $(1,1)$: $f_{xx}=6$, $f_{xy}=4$, $f_{yy}=14$. Quindi

$$H_f(1,1)=\begin{pmatrix}6&4\\4&14\end{pmatrix}.$$
:::
:::

:::exercise{id="E2.8" chapter="2" difficulty="medio"}
## Domanda
Determinare e classificare i punti stazionari di $f(x,y)=x^3+y^3-3xy$.

:::hint
Dal sistema $x^2=y$, $y^2=x$ ricavare $x^4=x$.
:::

:::solution
Il gradiente è $\nabla f=(3x^2-3y,\;3y^2-3x)$. Si annulla se $y=x^2$ e $x=y^2$, da cui $x=x^4$, cioè $x=0$ oppure $x=1$. I punti stazionari sono $(0,0)$ e $(1,1)$.

L'hessiana è

$$H=\begin{pmatrix}6x&-3\\-3&6y\end{pmatrix}.$$

- In $(0,0)$: $\det H=-9<0$, quindi punto di sella.
- In $(1,1)$: $H=\begin{pmatrix}6&-3\\-3&6\end{pmatrix}$, $f_{xx}=6>0$, $\det H=27>0$: minimo relativo, con $f(1,1)=1+1-3=-1$.
:::
:::

:::exercise{id="E2.9" chapter="2" difficulty="facile"}
## Domanda
Sia $f(x,y)=e^{x}\cos y$. Calcolare la matrice hessiana di $f$ in $\left(0,\frac{\pi}{2}\right)$ e verificare che $f_{xx}+f_{yy}=0$ su tutto $\mathbb{R}^2$.

:::hint
Derivare due volte: $e^x$ resta invariato, $\cos y$ diventa $-\sin y$ e poi $-\cos y$.
:::

:::solution
Si ha $f_x=e^x\cos y$ e $f_y=-e^x\sin y$. Derivando ancora,

$$f_{xx}=e^x\cos y,\qquad f_{xy}=-e^x\sin y,\qquad f_{yx}=-e^x\sin y=f_{xy},\qquad f_{yy}=-e^x\cos y.$$

L'uguaglianza $f_{yx}=f_{xy}$ segue dal calcolo diretto (e anche dal teorema di Schwarz, poiché $f$ è di classe $C^2$). Pertanto $f_{xx}+f_{yy}=0$ in ogni punto di $\mathbb{R}^2$. In $\left(0,\frac{\pi}{2}\right)$ si ha $\cos\frac{\pi}{2}=0$ e $\sin\frac{\pi}{2}=1$, dunque

$$H_f\left(0,\frac{\pi}{2}\right)=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}.$$
:::
:::

:::exercise{id="E2.10" chapter="2" difficulty="facile"}
## Domanda
Determinare il polinomio di Taylor di ordine $2$ di $f(x,y)=e^{x}\sin y$ nel punto $(0,0)$.

:::hint
Calcolare $f$, il gradiente e le derivate seconde in $(0,0)$ e usare la {{formula:2.13}}.
:::

:::solution
In $(0,0)$: $f=0$. Derivate prime: $f_x=e^x\sin y=0$, $f_y=e^x\cos y=1$. Derivate seconde: $f_{xx}=e^x\sin y=0$, $f_{xy}=e^x\cos y=1$, $f_{yy}=-e^x\sin y=0$. Quindi

$$T_2(x,y)=0+0\cdot x+1\cdot y+\frac12\left(0\cdot x^2+2\cdot1\cdot xy+0\cdot y^2\right)=y+xy.$$

Controllo con gli sviluppi di una variabile: $(1+x+\dots)(y-\dots)=y+xy+o(x^2+y^2)$.
:::
:::

:::exercise{id="E2.11" chapter="2" difficulty="difficile"}
## Domanda
Sia $k\in\mathbb{R}$ e $f(x,y)=x^4+y^4+k\,x^2y^2$. Determinare per quali valori di $k$ la matrice hessiana di $f$ nel punto $(1,1)$ è definita positiva.

:::hint
Calcolare $H_f(1,1)$ in funzione di $k$ e applicare il criterio di Sylvester: $f_{xx}>0$ e $\det H>0$.
:::

:::solution
Le derivate seconde sono

$$f_{xx}=12x^2+2ky^2,\qquad f_{xy}=4kxy,\qquad f_{yy}=12y^2+2kx^2.$$

In $(1,1)$:

$$H_f(1,1)=\begin{pmatrix}12+2k&4k\\4k&12+2k\end{pmatrix}.$$

Per il criterio di Sylvester occorre $12+2k>0$, cioè $k>-6$, e

$$\det H_f(1,1)=(12+2k)^2-16k^2=(12-2k)(12+6k)=12(6-k)(2+k)>0,$$

cioè $-2<k<6$. Intersecando con $k>-6$ si ottiene $-2<k<6$. (Equivalente: gli autovalori sono $12+2k\pm4k$, cioè $12-2k$ e $12+6k$.)
:::
:::

:::exercise{id="E2.12" chapter="2" difficulty="medio"}
## Domanda
Determinare il polinomio di Taylor di ordine $2$ di $f(x,y)=\log(x^2+y)$ nel punto $(1,0)$.

:::hint
Calcolare $f$, $\nabla f$ e $H_f$ in $(1,0)$ e scrivere il polinomio in potenze di $(x-1)$ e $y$.
:::

:::solution
In $(1,0)$: $f=\log1=0$. Derivate prime: $f_x=\frac{2x}{x^2+y}=2$, $f_y=\frac{1}{x^2+y}=1$. Derivate seconde:

$$f_{xx}=\frac{2(x^2+y)-4x^2}{(x^2+y)^2}=-2,\qquad f_{xy}=-\frac{2x}{(x^2+y)^2}=-2,\qquad f_{yy}=-\frac{1}{(x^2+y)^2}=-1.$$

Quindi

$$T_2=2(x-1)+y+\frac12\left[-2(x-1)^2-4(x-1)y-y^2\right]=2(x-1)+y-(x-1)^2-2(x-1)y-\frac{y^2}{2}.$$

Controllo: posto $u=x-1$ e $w=2u+u^2+y$, $\log(1+w)=w-\frac{w^2}{2}+\dots=2u-u^2+y-2uy-\frac{y^2}{2}+\dots$, in accordo.
:::
:::

:::exercise{id="E2.13" chapter="2" difficulty="difficile"}
## Domanda
Sia

$$
f(x,y)=\begin{cases}\dfrac{x^2y}{x^2+y^2}&\text{se }(x,y)\neq(0,0)\\[2mm] 0&\text{se }(x,y)=(0,0).\end{cases}
$$

Calcolare $\nabla f(0,0)$ e la derivata direzionale $D_{\mathbf v}f(0,0)$ con $\mathbf v=\left(\frac{\sqrt2}{2},\frac{\sqrt2}{2}\right)$. Verificare se vale l'uguaglianza $D_{\mathbf v}f(0,0)=\nabla f(0,0)\cdot\mathbf v$ e trarne una conclusione sulla differenziabilità di $f$ in $(0,0)$.

:::hint
Nell'origine si deve usare la definizione come limite del rapporto incrementale; per le direzioni generiche si calcola $f(ta,tb)$.
:::

:::solution
Poiché $f(x,0)=0$ e $f(0,y)=0$, si ha $f_x(0,0)=f_y(0,0)=0$, quindi $\nabla f(0,0)=(0,0)$.

Per $\mathbf v=(a,b)$ versore, $f(ta,tb)=\dfrac{t^3a^2b}{t^2}=t\,a^2b$, quindi

$$
D_{\mathbf v}f(0,0)=\lim_{t\to0}\frac{t\,a^2b}{t}=a^2b.
$$

Con $a=b=\frac{\sqrt2}{2}$ si ottiene $D_{\mathbf v}f(0,0)=\frac12\cdot\frac{\sqrt2}{2}=\frac{\sqrt2}{4}$.

D'altra parte $\nabla f(0,0)\cdot\mathbf v=0\neq\frac{\sqrt2}{4}$. La formula $D_{\mathbf v}f(0,0)=\nabla f(0,0)\cdot\mathbf v$ vale per le funzioni differenziabili in $(0,0)$; poiché qui non vale, $f$ non è differenziabile in $(0,0)$.
:::
:::

:::exercise{id="E2.14" chapter="2" difficulty="facile"}
## Domanda
Sia $f(x,y)=x^2+3xy$ e sia $\mathbf v=\left(\frac35,\frac45\right)$. Calcolare la derivata direzionale $D_{\mathbf v}f(1,2)$.

:::hint
Poiché $f$ è un polinomio, è di classe $C^1$ e differenziabile. Usare la formula del gradiente: $D_{\mathbf v}f=\nabla f\cdot\mathbf v$, e controllare che $\mathbf v$ sia un versore.
:::

:::solution
Il vettore $\mathbf v$ è un versore, perché $\frac{9}{25}+\frac{16}{25}=1$. Il gradiente è

$$\nabla f(x,y)=(2x+3y,\;3x),\qquad \nabla f(1,2)=(8,3).$$

Poiché $f$ è un polinomio, è di classe $C^1$ e differenziabile. Per la formula del gradiente, $D_{\mathbf v}f=\nabla f\cdot\mathbf v$,

$$D_{\mathbf v}f(1,2)=\nabla f(1,2)\cdot\mathbf v=8\cdot\frac35+3\cdot\frac45=\frac{24+12}{5}=\frac{36}{5}.$$
:::
:::

:::exercise{id="E2.15" chapter="2" difficulty="facile"}
## Domanda
Sia $f(x,y)=x\,e^{y}$. Scrivere la linearizzazione (il differenziale con il termine costante) di $f$ nel punto $(2,0)$ e usarla per stimare $f(2.1,-0.05)$.

:::hint
La linearizzazione è $L(x,y)=f(x_0,y_0)+\nabla f(x_0,y_0)\cdot(x-x_0,y-y_0)$.
:::

:::solution
Si ha $f(2,0)=2$ e

$$\nabla f(x,y)=(e^{y},\,x\,e^{y}),\qquad \nabla f(2,0)=(1,2).$$

La linearizzazione è

$$L(x,y)=2+(x-2)+2y=x+2y.$$

Per la stima: $f(2.1,-0.05)\approx L(2.1,-0.05)=2.1-0.1=2$. (Il valore esatto è circa $1.9976$.)
:::
:::

:::exercise{id="E2.16" chapter="2" difficulty="facile"}
## Domanda
Sia $f(x,y)=x^2y+e^{xy}$. Calcolare il gradiente di $f$ nel punto $(1,0)$.

:::hint
Derivare rispetto a una variabile alla volta, trattando l'altra come costante, e poi valutare nel punto.
:::

:::solution
Le derivate parziali sono

$$f_x(x,y)=2xy+y\,e^{xy},\qquad f_y(x,y)=x^2+x\,e^{xy}.$$

Nel punto $(1,0)$ si ha $f_x(1,0)=0+0=0$ e $f_y(1,0)=1+1\cdot e^{0}=2$. Quindi

$$\nabla f(1,0)=(0,2).$$
:::
:::

:::exercise{id="E2.17" chapter="2" difficulty="medio"}
## Domanda
Sia $\alpha>0$ e sia $f(x,y)=|xy|^{\alpha}$. Determinare per quali valori di $\alpha$ la funzione $f$ è differenziabile in $(0,0)$.

:::hint
Calcolare le derivate parziali nell'origine e studiare il limite di $\frac{f(h,k)}{\sqrt{h^2+k^2}}$, ad esempio lungo la diagonale e usando $|hk|\le\frac{h^2+k^2}{2}$.
:::

:::solution
Poiché $f(x,0)=f(0,y)=0$, si ha $\nabla f(0,0)=(0,0)$ e $f(0,0)=0$. Per la {{formula:2.6}}, $f$ è differenziabile in $(0,0)$ se e solo se

$$\lim_{(h,k)\to(0,0)}\frac{|hk|^{\alpha}}{\sqrt{h^2+k^2}}=0.$$

Lungo la diagonale $k=h$ il rapporto vale $\dfrac{|h|^{2\alpha}}{\sqrt2\,|h|}=\dfrac{1}{\sqrt2}|h|^{2\alpha-1}$, che non tende a $0$ se $2\alpha\le1$ (tende a $\frac{1}{\sqrt 2}$ se $\alpha=\frac12$, a $+\infty$ se $\alpha<\frac12$). Quindi per $\alpha\le\frac12$ non c'è differenziabilità.

Se $\alpha>\frac12$, posto $r=\sqrt{h^2+k^2}$, si ha $|hk|\le r^2/2$ e quindi

$$0\le\frac{|hk|^{\alpha}}{r}\le\frac{r^{2\alpha-1}}{2^{\alpha}}\to0.$$

Quindi $f$ è differenziabile in $(0,0)$ se e solo se $\alpha>\frac12$.
:::
:::

:::exercise{id="E2.18" chapter="2" difficulty="medio"}
## Domanda
Determinare l'equazione del piano tangente al grafico di $f(x,y)=\sqrt{x^2+y^2}$ nel punto di coordinate $(3,4,f(3,4))$.

:::hint
Usare la {{formula:2.7}}: servono $f(3,4)$ e le due derivate parziali nel punto.
:::

:::solution
Si ha $f(3,4)=\sqrt{9+16}=5$. Le derivate parziali, nell'aperto $\mathbb{R}^2\setminus\{(0,0)\}$, sono

$$f_x=\frac{x}{\sqrt{x^2+y^2}},\qquad f_y=\frac{y}{\sqrt{x^2+y^2}},$$

cioè $f_x(3,4)=\frac35$ e $f_y(3,4)=\frac45$. Il piano tangente è

$$z=5+\frac35(x-3)+\frac45(y-4)=5+\frac{3x+4y}{5}-\frac{9+16}{5}=\frac{3x+4y}{5}.$$
:::
:::

:::exercise{id="E2.19" chapter="2" difficulty="difficile"}
## Domanda
Sia

$$f(x,y)=\begin{cases}(x^2+y^2)\sin\dfrac{1}{x^2+y^2}&\text{se }(x,y)\neq(0,0)\\[2mm]0&\text{se }(x,y)=(0,0).\end{cases}$$

Dimostrare che $f$ è differenziabile in $(0,0)$ con $\nabla f(0,0)=(0,0)$, ma che $f_x$ non è continua in $(0,0)$.

:::hint
Per la differenziabilità maggiorare $|f|/\sqrt{x^2+y^2}$. Per la discontinuità di $f_x$ calcolarla fuori dall'origine e valutarla lungo punti $(x,0)$ in cui $\cos(1/x^2)=1$.
:::

:::solution
Posto $r=\sqrt{x^2+y^2}$ si ha $|f(x,y)|\le r^2$. Quindi $f(h,0)/h\to0$ e $f(0,k)/k\to0$, cioè $\nabla f(0,0)=(0,0)$. Inoltre

$$\frac{|f(h,k)-f(0,0)-0|}{\sqrt{h^2+k^2}}\le r\to0,$$

quindi $f$ è differenziabile in $(0,0)$ con differenziale nullo.

Per $(x,y)\neq(0,0)$,

$$f_x(x,y)=2x\sin\frac{1}{r^2}-\frac{2x}{r^2}\cos\frac{1}{r^2}.$$

Consideriamo i punti $x_n=\frac{1}{\sqrt{2\pi n}}\to0$, $y=0$. Lì $\sin\frac1{x_n^2}=\sin(2\pi n)=0$ e $\cos\frac1{x_n^2}=1$, quindi

$$f_x(x_n,0)=-\frac{2}{x_n}=-2\sqrt{2\pi n}\to-\infty.$$

Quindi $f_x(x,y)$ non tende a $f_x(0,0)=0$: $f_x$ non è continua in $(0,0)$. Dunque $f$ è differenziabile ma non di classe $C^1$ in un intorno dell'origine.
:::
:::

:::exercise{id="E2.20" chapter="2" difficulty="difficile"}
## Domanda
Determinare il valore del parametro $a\in\mathbb{R}$ per cui esiste finito il limite

$$\lim_{(x,y)\to(0,0)}\frac{e^{x}\cos y-1-x-a\,x^2}{x^2+y^2}$$

e calcolare tale limite.

:::hint
Sviluppare $e^x\cos y$ fino al secondo ordine con il resto di Peano e confrontare i limiti lungo gli assi.
:::

:::solution
Si ha $e^x=1+x+\frac{x^2}{2}+o(x^2)$ e $\cos y=1-\frac{y^2}{2}+o(y^2)$. Quindi, con il resto di Peano in due variabili,

$$e^x\cos y=1+x+\frac{x^2}{2}-\frac{y^2}{2}+o(x^2+y^2).$$

Il numeratore è allora

$$\left(\frac12-a\right)x^2-\frac12y^2+o(x^2+y^2).$$

Lungo $y=0$ il limite è $\frac12-a$, lungo $x=0$ è $-\frac12$. Se il limite esiste, questi due valori coincidono: $\frac12-a=-\frac12$, cioè $a=1$.

Con $a=1$ il numeratore è $-\frac12(x^2+y^2)+o(x^2+y^2)$, quindi il limite vale $-\frac12$.
:::
:::

:::exercise{id="E2.21" chapter="2" difficulty="facile"}
## Domanda
Sia $f(x,y)=x^4y+e^{xy}$. Calcolare $\dfrac{\partial^3 f}{\partial y\,\partial x^2}(1,1)$.

:::hint
Derivare due volte rispetto a $x$ e poi una volta rispetto a $y$.
:::

:::solution
Si ha $f_x=4x^3y+y\,e^{xy}$ e

$$f_{xx}=12x^2y+y^2e^{xy}.$$

Derivando rispetto a $y$:

$$f_{xxy}=12x^2+2y\,e^{xy}+x\,y^2e^{xy}.$$

In $(1,1)$: $12+2e+e=12+3e$.
:::
:::

:::exercise{id="E2.22" chapter="2" difficulty="medio"}
## Domanda
Determinare i punti stazionari di $f(x,y)=(x^2+y^2-1)^2$ e stabilire se sono punti di massimo o minimo relativo o assoluto.

:::hint
Il gradiente ha il fattore comune $x^2+y^2-1$. Studiare l'origine con la matrice hessiana, oppure scrivendo $f$ in funzione di $r^2=x^2+y^2$.
:::

:::solution
Il gradiente è

$$\nabla f=\left(4x(x^2+y^2-1),\;4y(x^2+y^2-1)\right).$$

Si annulla se $x^2+y^2=1$ (tutti i punti della circonferenza unitaria) oppure se $x=y=0$. I punti stazionari sono quindi l'origine e la circonferenza $x^2+y^2=1$.

Sulla circonferenza $f=0$ e, essendo $f\ge0$ ovunque, ogni suo punto è di minimo assoluto (non stretto, perché infiniti punti hanno lo stesso valore).

Nell'origine $f(0,0)=1$. Posto $r^2=x^2+y^2$, $f=(r^2-1)^2=1-2r^2+r^4<1$ per $0<r<\sqrt2$, quindi l'origine è di massimo relativo (stretto). Equivalentemente $H_f(0,0)=-4I$ è definita negativa. Non è massimo assoluto, perché $f(x,y)\to+\infty$ per $r\to\infty$; $f$ non ha massimo assoluto.
:::
:::

:::exercise{id="E2.23" chapter="2" difficulty="facile"}
## Domanda
Determinare i punti stazionari di $f(x,y)=x^2+xy+y^2-3x$ e classificarli.

:::hint
Risolvere $\nabla f=0$ (sistema lineare) e studiare la matrice hessiana, che è costante.
:::

:::solution
Il gradiente è $\nabla f=(2x+y-3,\;x+2y)$. Dalla seconda equazione $x=-2y$; sostituendo, $-4y+y-3=0$, cioè $y=-1$ e $x=2$. L'unico punto stazionario è $(2,-1)$.

L'hessiana è

$$H=\begin{pmatrix}2&1\\1&2\end{pmatrix},$$

con $f_{xx}=2>0$ e $\det H=3>0$: definita positiva. Quindi $(2,-1)$ è un punto di minimo relativo (in realtà globale, essendo $f$ una forma quadratica convessa), con $f(2,-1)=4-2+1-6=-3$.
:::
:::

:::exercise{id="E2.24" chapter="2" difficulty="difficile"}
## Domanda
Determinare e classificare i punti stazionari di $f(x,y)=x^4+y^4-2(x-y)^2$.

:::hint
Sommando le due equazioni $f_x=0$ e $f_y=0$ si ottiene $y=-x$. Nell'origine l'hessiana è degenere: studiare il segno di $f$ lungo due rette.
:::

:::solution
Le derivate prime sono

$$f_x=4x^3-4(x-y),\qquad f_y=4y^3+4(x-y).$$

Sommando: $4(x^3+y^3)=0$, cioè $y=-x$. Sostituendo in $f_x=0$: $4x^3-8x=0$, cioè $x=0$ oppure $x=\pm\sqrt2$. I punti stazionari sono

$$(0,0),\qquad(\sqrt2,-\sqrt2),\qquad(-\sqrt2,\sqrt2).$$

Le derivate seconde sono $f_{xx}=12x^2-4$, $f_{xy}=4$, $f_{yy}=12y^2-4$.

- In $(\pm\sqrt2,\mp\sqrt2)$: $H=\begin{pmatrix}20&4\\4&20\end{pmatrix}$, con $f_{xx}>0$ e $\det H=384>0$: minimi relativi, con valore $f=4+4-2\cdot8=-8$.
- In $(0,0)$: $H=\begin{pmatrix}-4&4\\4&-4\end{pmatrix}$ ha $\det H=0$, il criterio non decide. Si ha $f(0,0)=0$; lungo $y=x$: $f(x,x)=2x^4>0$ per $x\neq0$; lungo $y=-x$: $f(x,-x)=2x^4-8x^2=2x^2(x^2-4)<0$ per $0<|x|<2$. In ogni intorno $f$ assume valori di segno opposto, quindi $(0,0)$ è un punto di sella.
:::
:::

:::exercise{id="E2.25" chapter="2" difficulty="medio"}
## Domanda
Determinare e classificare i punti stazionari di $f(x,y)=(x^2+y^2)\,e^{-x}$.

:::hint
Dall'annullarsi di $f_y$ ricavare $y=0$, poi risolvere $f_x=0$. Per l'hessiana usare la regola del prodotto.
:::

:::solution
Le derivate prime sono

$$f_x=e^{-x}(2x-x^2-y^2),\qquad f_y=2y\,e^{-x}.$$

Da $f_y=0$ si ha $y=0$; allora $f_x=0$ diventa $2x-x^2=0$, cioè $x=0$ oppure $x=2$. I punti stazionari sono $(0,0)$ e $(2,0)$.

Le derivate seconde sono

$$f_{xx}=e^{-x}(2-4x+x^2+y^2),\qquad f_{xy}=-2y\,e^{-x},\qquad f_{yy}=2e^{-x}.$$

- In $(0,0)$: $H=\operatorname{diag}(2,2)$ è definita positiva: minimo relativo, con $f(0,0)=0$.
- In $(2,0)$: $H=\operatorname{diag}(-2e^{-2},\,2e^{-2})$ è indefinita: punto di sella.
:::
:::

:::exercise{id="E2.26" chapter="2" difficulty="medio"}
## Domanda
Sia $f(x,y)=e^{2x}\sin(3y)$. Calcolare $\dfrac{\partial^4 f}{\partial x^2\,\partial y^2}\left(0,\dfrac{\pi}{6}\right)$.

:::hint
La funzione è $C^\infty$, quindi l'ordine di derivazione è indifferente; le variabili si separano.
:::

:::solution
Essendo $f$ di classe $C^\infty$, l'ordine non conta. Derivando due volte in $x$: $\partial_x^2 f=4e^{2x}\sin(3y)$. Derivando poi due volte in $y$, $\partial_y^2\sin(3y)=-9\sin(3y)$, quindi

$$\frac{\partial^4 f}{\partial x^2\,\partial y^2}=-36\,e^{2x}\sin(3y).$$

In $\left(0,\frac\pi6\right)$: $e^0=1$ e $\sin\frac\pi2=1$, quindi il valore è $-36$.
:::
:::

:::exercise{id="E2.27" chapter="2" difficulty="facile"}
## Domanda
Determinare e classificare i punti stazionari di $f(x,y)=x^3-3x+y^2$.

:::hint
Il gradiente si annulla quando $x^2=1$ e $y=0$.
:::

:::solution
Si ha $\nabla f=(3x^2-3,\;2y)$, che si annulla per $x=\pm1$ e $y=0$. I punti stazionari sono $(1,0)$ e $(-1,0)$.

L'hessiana è

$$H(x,y)=\begin{pmatrix}6x&0\\0&2\end{pmatrix}.$$

- In $(1,0)$: $H=\operatorname{diag}(6,2)$ è definita positiva, quindi minimo relativo, con $f(1,0)=-2$.
- In $(-1,0)$: $H=\operatorname{diag}(-6,2)$ è indefinita, quindi punto di sella.
:::
:::

:::exercise{id="E3.1" chapter="3" difficulty="difficile"}
## Domanda
Sia $f:\mathbb{R}^2\setminus\{\mathbf{0}\}\to\mathbb{R}$ di classe $C^1$ e omogenea di grado $k$, cioè $f(tx,ty)=t^kf(x,y)$ per ogni $t>0$.

1. Dimostrare la relazione di Eulero $xf_x+yf_y=kf$.
2. Sapendo che $f(1,2)=5$, $f_x(1,2)=4$ e $k=3$, calcolare $f_y(1,2)$.

:::hint
Fissate $(x,y)$ e derivate rispetto a $t$ in $t=1$ la funzione $g(t)=f(tx,ty)$, calcolandola in due modi.
:::

:::solution
**1.** Fissato $(x,y)\neq(0,0)$, sia $g(t)=f(tx,ty)$ per $t>0$. Per ipotesi $g(t)=t^kf(x,y)$, quindi $g'(1)=kf(x,y)$. Per la regola della catena,

$$g'(t)=f_x(tx,ty)\,x+f_y(tx,ty)\,y,\qquad g'(1)=xf_x(x,y)+yf_y(x,y).$$

Uguagliando i due valori si ottiene $xf_x+yf_y=kf$.

**2.** In $(1,2)$ con $k=3$: $1\cdot4+2f_y(1,2)=3\cdot5=15$, quindi $2f_y(1,2)=11$ e dunque $f_y(1,2)=\frac{11}{2}$.
:::
:::

:::exercise{id="E3.2" chapter="3" difficulty="medio"}
## Domanda
Sia $u(x,y)=g(r)$, con $r=\sqrt{x^2+y^2}$ e $g\in C^2(0,+\infty)$. Mostrare che $\Delta u=g''(r)+\tfrac1r\,g'(r)$ e determinare tutte le funzioni radiali armoniche in $\mathbb{R}^2\setminus\{\mathbf{0}\}$.

:::hint
Usate $r_x=x/r$, $r_y=y/r$ e derivate due volte; poi risolvete $g''+g'/r=0$ moltiplicando per $r>0$ e osservando che $(rg')'=0$.
:::

:::solution
La funzione $r=\sqrt{x^2+y^2}$ è di classe $C^\infty$ in $\mathbb{R}^2\setminus\{\mathbf{0}\}$ e soddisfa $r_x=x/r$, $r_y=y/r$. Poiché $g\in C^2(0,+\infty)$, si ha $u\in C^2(\mathbb{R}^2\setminus\{\mathbf{0}\})$.

Per la regola della catena, $u_x=g'(r)\,x/r$. Derivando ancora rispetto a $x$,

$$u_{xx}=g''(r)\frac{x^2}{r^2}+g'(r)\left(\frac1r-\frac{x^2}{r^3}\right).$$

Analogamente,

$$u_{yy}=g''(r)\frac{y^2}{r^2}+g'(r)\left(\frac1r-\frac{y^2}{r^3}\right).$$

Sommando e usando $x^2+y^2=r^2$, si ottiene

$$\Delta u=g''(r)+g'(r)\left(\frac2r-\frac1r\right)=g''(r)+\frac1r\,g'(r).$$

Affinché $u$ sia armonica, deve valere $g''(r)+g'(r)/r=0$. Moltiplicando per $r>0$, l'equazione diventa $(rg')'=0$. Quindi $rg'=c$, $g'=c/r$ e

$$g(r)=c\ln r+d,\qquad c,d\in\mathbb{R}.$$

Viceversa, ogni funzione $g(r)=c\ln r+d$, con $c,d\in\mathbb{R}$, è di classe $C^2$ su $(0,+\infty)$ e soddisfa $g''(r)+g'(r)/r=0$. Pertanto tutte e sole queste funzioni generano funzioni armoniche $u$ in $\mathbb{R}^2\setminus\{\mathbf{0}\}$.
:::
:::

:::exercise{id="E3.3" chapter="3" difficulty="medio"}
## Domanda
Determinare i punti del grafico di $z=xy$ in cui il piano tangente è parallelo al piano $x+2y-z=0$, e scrivere il piano tangente in tali punti.

:::hint
Il vettore normale $(-f_x,-f_y,1)$ deve essere multiplo di $(1,2,-1)$.
:::

:::solution
Per $f=xy$ si ha $f_x=y$, $f_y=x$ e una normale è $(-y,-x,1)$. Deve valere $(-y,-x,1)=\lambda(1,2,-1)$. Dalla terza componente $\lambda=-1$, quindi $-y=-1$ e $-x=-2$, cioè $y=1$, $x=2$ e $z=xy=2$.

Il punto è $(2,1,2)$. Il piano tangente è

$$z=2+1\cdot(x-2)+2\cdot(y-1)\ \Longleftrightarrow\ x+2y-z=2,$$

parallelo (e distinto) al piano dato.
:::
:::

:::exercise{id="E3.4" chapter="3" difficulty="facile"}
## Domanda
Sia $f(x,y,z)=e^x$ e $\mathbf{F}(x,y,z)=(x,y,z)$. Calcolare $\operatorname{div}(f\mathbf{F})$ usando l'identità $\operatorname{div}(f\mathbf{F})=\nabla f\cdot\mathbf{F}+f\operatorname{div}\mathbf{F}$ e verificare con il calcolo diretto.

:::hint
Calcolate separatamente $\nabla f\cdot\mathbf{F}$ e $\operatorname{div}\mathbf{F}$.
:::

:::solution
Si ha $\nabla f=(e^x,0,0)$, quindi $\nabla f\cdot\mathbf{F}=xe^x$, e $\operatorname{div}\mathbf{F}=3$. Dunque

$$\operatorname{div}(f\mathbf{F})=xe^x+3e^x=e^x(x+3).$$

Diretto: $f\mathbf{F}=(xe^x,ye^x,ze^x)$, la cui divergenza è $(e^x+xe^x)+e^x+e^x=e^x(x+3)$.
:::
:::

:::exercise{id="E3.5" chapter="3" difficulty="facile"}
## Domanda
Sia $u:\mathbb{R}^2\to\mathbb{R}$ di classe $C^1$ tale che $u_x+u_y=0$. Con il cambio di variabili $s=x+y$, $t=x-y$ e $u(x,y)=v(s,t)$, trasformare l'equazione e determinare tutte le soluzioni $u$.

:::hint
Esprimete $u_x$ e $u_y$ tramite $v_s$ e $v_t$ con la regola della catena.
:::

:::solution
Poiché $s_x=1$, $s_y=1$, $t_x=1$, $t_y=-1$:

$$u_x=v_s+v_t,\qquad u_y=v_s-v_t.$$

Quindi $u_x+u_y=2v_s=0$, cioè $v_s=0$. La trasformazione $(x,y)\mapsto(s,t)$ è un isomorfismo lineare di $\mathbb{R}^2$, perciò $v$ è definita su tutto $\mathbb{R}^2$. Per ogni $t$, la funzione $s\mapsto v(s,t)$ ha derivata nulla, quindi è costante e $v(s,t)=g(t)$, dove $g(t)=v(0,t)$ è di classe $C^1$. Ne segue che $u(x,y)=g(x-y)$.

Viceversa, per ogni $g\in C^1(\mathbb{R})$, la funzione $u(x,y)=g(x-y)$ è di classe $C^1$ e soddisfa $u_x+u_y=g'(x-y)-g'(x-y)=0$. Pertanto tutte e sole le soluzioni sono $u(x,y)=g(x-y)$, con $g\in C^1(\mathbb{R})$.
:::
:::

:::exercise{id="E3.6" chapter="3" difficulty="facile"}
## Domanda
Sia $S$ la sfera $x^2+y^2+z^2=4$. Scrivere il piano tangente a $S$ nel punto $P=(1,1,\sqrt2)$.

:::hint
Il vettore normale a una sfera in un punto è parallelo al vettore che unisce il centro al punto.
:::

:::solution
Il punto appartiene a $S$ perché $1+1+2=4$. La sfera è l'insieme di livello di $g=x^2+y^2+z^2$ e $\nabla g(P)=(2,2,2\sqrt2)$, parallelo a $(1,1,\sqrt2)$. Il piano tangente è

$$1\cdot(x-1)+1\cdot(y-1)+\sqrt2\,(z-\sqrt2)=0,$$

cioè $x+y+\sqrt2\,z=4$.
:::
:::

:::exercise{id="E3.7" chapter="3" difficulty="medio"}
## Domanda
Sia $r=\sqrt{x^2+y^2+z^2}$ e $\alpha\in\mathbb{R}$. Calcolare $\Delta\left(r^\alpha\right)$ in $\mathbb{R}^3\setminus\{\mathbf{0}\}$ e determinare per quali $\alpha$ la funzione $r^\alpha$ è armonica.

:::hint
Scrivete $\Delta u=\operatorname{div}(\nabla u)$ e osservate che $\nabla r=\mathbf{x}/r$ con $\mathbf{x}=(x,y,z)$.
:::

:::solution
Poiché $\partial_x r=x/r$, si ha $\nabla r=\mathbf{x}/r$ e

$$\nabla\left(r^\alpha\right)=\alpha r^{\alpha-1}\frac{\mathbf{x}}{r}=\alpha r^{\alpha-2}\mathbf{x}.$$

Per la divergenza di un prodotto $\operatorname{div}(\varphi\mathbf{x})=\nabla\varphi\cdot\mathbf{x}+\varphi\operatorname{div}\mathbf{x}$ con $\varphi=\alpha r^{\alpha-2}$, $\operatorname{div}\mathbf{x}=3$ e $\nabla\varphi\cdot\mathbf{x}=\alpha(\alpha-2)r^{\alpha-4}\,\mathbf{x}\cdot\mathbf{x}=\alpha(\alpha-2)r^{\alpha-2}$:

$$\Delta\left(r^\alpha\right)=\alpha(\alpha-2)r^{\alpha-2}+3\alpha r^{\alpha-2}=\alpha(\alpha+1)\,r^{\alpha-2}.$$

Questo si annulla (con $r>0$) se e solo se $\alpha=0$ oppure $\alpha=-1$. Quindi sono armoniche le costanti e $1/r$.
:::
:::

:::exercise{id="E3.8" chapter="3" difficulty="medio"}
## Domanda
Sia $f:\mathbb{R}^2\to\mathbb{R}$ di classe $C^1$ con $\nabla f(3,4)=(1,2)$ e sia $h(u,v)=f\left(u^2-v^2,\ 2uv\right)$. Calcolare $\nabla h(2,1)$.

:::hint
Scrivete la jacobiana della trasformazione $(u,v)\mapsto(x,y)$ e usate la {{formula:3.11}}.
:::

:::solution
Posto $x=u^2-v^2$, $y=2uv$, in $(u,v)=(2,1)$ si ha $(x,y)=(3,4)$, dove il gradiente di $f$ è noto. La jacobiana della trasformazione è

$$\begin{pmatrix}x_u&x_v\\y_u&y_v\end{pmatrix}=\begin{pmatrix}2u&-2v\\2v&2u\end{pmatrix}=\begin{pmatrix}4&-2\\2&4\end{pmatrix}\ \text{in }(2,1).$$

Per la regola della catena,

$$h_u=f_xx_u+f_yy_u=1\cdot4+2\cdot2=8,\qquad h_v=f_xx_v+f_yy_v=1\cdot(-2)+2\cdot4=6.$$
:::
:::

:::exercise{id="E3.9" chapter="3" difficulty="difficile"}
## Domanda
Sia $\varphi:(0,+\infty)\to\mathbb{R}$ di classe $C^1$ e sia $\mathbf{F}(\mathbf{x})=\varphi(r)\,\mathbf{x}$ su $\mathbb{R}^3\setminus\{\mathbf{0}\}$, dove $\mathbf{x}=(x,y,z)$ e $r=\|\mathbf{x}\|$.

1. Mostrare che $\operatorname{rot}\mathbf{F}=\mathbf{0}$ per ogni $\varphi$.
2. Determinare tutte le $\varphi$ per cui $\operatorname{div}\mathbf{F}=0$.
3. Verificare che, per $\varphi(r)=r^{-3}$, anche il Laplaciano di ciascuna componente di $\mathbf{F}$ ... non serve: calcolare invece $\operatorname{div}\mathbf{F}$ per $\varphi(r)=r^{-2}$.

:::hint
Usate $\nabla\varphi(r)=\varphi'(r)\,\mathbf{x}/r$ e le regole $\operatorname{rot}(\varphi\mathbf{G})=\nabla\varphi\times\mathbf{G}+\varphi\operatorname{rot}\mathbf{G}$, $\operatorname{div}(\varphi\mathbf{G})=\nabla\varphi\cdot\mathbf{G}+\varphi\operatorname{div}\mathbf{G}$.
:::

:::solution
Si ha $\nabla\varphi(r)=\varphi'(r)\,\mathbf{x}/r$, $\operatorname{rot}\mathbf{x}=\mathbf{0}$, $\operatorname{div}\mathbf{x}=3$.

**1.** $\operatorname{rot}\mathbf{F}=\nabla\varphi\times\mathbf{x}+\varphi\operatorname{rot}\mathbf{x}=\dfrac{\varphi'}{r}\,\mathbf{x}\times\mathbf{x}+\mathbf{0}=\mathbf{0}$, perché il prodotto vettoriale di vettori paralleli è nullo.

**2.** 

$$\operatorname{div}\mathbf{F}=\nabla\varphi\cdot\mathbf{x}+3\varphi=\frac{\varphi'}{r}\,r^2+3\varphi=r\varphi'(r)+3\varphi(r).$$

L'equazione $r\varphi'+3\varphi=0$ equivale a $(r^3\varphi)'=r^2(r\varphi'+3\varphi)=0$, cioè $r^3\varphi=C$. Quindi $\varphi(r)=C/r^3$ con $C\in\mathbb{R}$.

**3.** Per $\varphi=r^{-2}$: $r\varphi'+3\varphi=-2r^{-2}+3r^{-2}=r^{-2}$. Dunque $\operatorname{div}\mathbf{F}=1/r^2$, non nulla, coerentemente con il punto 2.
:::
:::

:::exercise{id="E3.10" chapter="3" difficulty="facile"}
## Domanda
Sia $\mathbf{F}(x,y,z)=(xy,\ yz,\ zx)$. Calcolare $\operatorname{div}\mathbf{F}$ e $\operatorname{rot}\mathbf{F}$, e valutarli in $(1,2,3)$.

:::hint
Usate le definizioni {{formula:3.6}} e {{formula:3.7}}.
:::

:::solution
Con $F_1=xy$, $F_2=yz$, $F_3=zx$:

$$\operatorname{div}\mathbf{F}=\partial_xF_1+\partial_yF_2+\partial_zF_3=y+z+x.$$

Per il rotore:

$$\operatorname{rot}\mathbf{F}=\left(\partial_yF_3-\partial_zF_2,\ \partial_zF_1-\partial_xF_3,\ \partial_xF_2-\partial_yF_1\right)=(0-y,\ 0-z,\ 0-x)=(-y,-z,-x).$$

In $(1,2,3)$: $\operatorname{div}\mathbf{F}=6$ e $\operatorname{rot}\mathbf{F}=(-2,-3,-1)$.
:::
:::

:::exercise{id="E3.11" chapter="3" difficulty="difficile"}
## Domanda
Sia $f:\mathbb{R}^2\to\mathbb{R}^3$, $f(x,y)=\left(x^2-y^2,\ 2xy,\ x^2+y^2\right)$.

1. Calcolare $J_f(x,y)$ e mostrare che ha rango $2$ in ogni punto $(x,y)\neq(0,0)$.
2. Scrivere la linearizzazione di $f$ in $(1,1)$ e usarla per approssimare $f(1{,}1;\,0{,}9)$.
3. Confrontare l'approssimazione con il valore esatto.

:::hint
Il rango è $2$ se le due colonne sono linearmente indipendenti: studiate il loro prodotto vettoriale o un minore. Per la linearizzazione usate {{formula:3.3}}.
:::

:::solution
**1.** Si ha

$$J_f(x,y)=\begin{pmatrix}2x & -2y\\ 2y & 2x\\ 2x & 2y\end{pmatrix}.$$

Il minore formato dalle prime due righe vale $4x^2+4y^2$, che è diverso da zero se $(x,y)\neq(0,0)$. Dunque il rango è $2$.

**2.** In $(1,1)$: $f(1,1)=(0,2,2)$ e

$$J_f(1,1)=\begin{pmatrix}2&-2\\2&2\\2&2\end{pmatrix}.$$

La linearizzazione è, con $h=x-1$, $k=y-1$,

$$L(x,y)=(0,2,2)+\left(2h-2k,\ 2h+2k,\ 2h+2k\right).$$

**3.** Per $(x,y)=(1{,}1;\,0{,}9)$ si ha $h=0{,}1$, $k=-0{,}1$, quindi $L=(0{,}4;\,2;\,2)$. Il valore esatto è

$$f(1{,}1;\,0{,}9)=(1{,}21-0{,}81,\ 2\cdot 0{,}99,\ 1{,}21+0{,}81)=(0{,}4;\,1{,}98;\,2{,}02).$$

L'errore, definito come $L-f$, è $(0;\,0{,}02;\,-0{,}02)$, di ordine $|h|^2+|k|^2$, come previsto.
:::
:::

:::exercise{id="E3.12" chapter="3" difficulty="difficile"}
## Domanda
Sia $\Omega=\mathbb{R}^2\setminus\{(x,0):x\le0\}$ e sia $u\in C^1(\Omega)$ con $x\,u_y-y\,u_x=0$ in $\Omega$.

1. Passando a coordinate polari, mostrare che $u(x,y)=g\left(\sqrt{x^2+y^2}\right)$ per una opportuna $g$.
2. Se inoltre $u(x,0)=x^2$ per $x>0$, determinare $u$.

:::hint
Posto $v(r,\theta)=u(r\cos\theta,r\sin\theta)$ calcolate $v_\theta$ con la regola della catena e riconoscete il primo membro dell'equazione. In $\Omega$ si può prendere $\theta\in(-\pi,\pi)$.
:::

:::solution
**1.** Le coordinate polari con $r>0$, $\theta\in(-\pi,\pi)$ mappano in modo biunivoco $(0,\infty)\times(-\pi,\pi)$ su $\Omega$. Posto $v(r,\theta)=u(r\cos\theta,r\sin\theta)$,

$$v_\theta=u_x\cdot(-r\sin\theta)+u_y\cdot r\cos\theta=-y\,u_x+x\,u_y=0.$$

Per ogni $r$ fissato, $\theta\mapsto v(r,\theta)$ è definita sull'intervallo $(-\pi,\pi)$ con derivata nulla, quindi è costante: $v(r,\theta)=g(r)$, dove $g(r)=v(r,0)=u(r,0)$. Dunque $u(x,y)=g\left(\sqrt{x^2+y^2}\right)$.

**2.** Per $x>0$, $g(x)=u(x,0)=x^2$, quindi $g(r)=r^2$ per ogni $r>0$ e

$$u(x,y)=x^2+y^2\quad\text{in }\Omega.$$
:::
:::

:::exercise{id="E3.13" chapter="3" difficulty="medio"}
## Domanda
Sia $f:\mathbb{R}^3\to\mathbb{R}^3$ definita da $f(x,y,z)=\left(xyz,\ x^2+z^2,\ y\,e^{x}\right)$. Calcolare la matrice jacobiana di $f$ e il suo determinante nel punto $(0,1,1)$.

:::hint
La matrice $3\times 3$ ha come $i$-esima riga il gradiente della $i$-esima componente; valutate poi in $(0,1,1)$ prima di calcolare il determinante.
:::

:::solution
Con $f_1=xyz$, $f_2=x^2+z^2$, $f_3=y e^x$:

$$J_f(x,y,z)=\begin{pmatrix}yz & xz & xy\\ 2x & 0 & 2z\\ y e^x & e^x & 0\end{pmatrix}.$$

In $(0,1,1)$ si ha $yz=1$, $xz=0$, $xy=0$, $2x=0$, $2z=2$, $ye^x=1$, $e^x=1$, quindi

$$J_f(0,1,1)=\begin{pmatrix}1&0&0\\0&0&2\\1&1&0\end{pmatrix}.$$

Sviluppando lungo la prima riga:

$$\det J_f(0,1,1)=1\cdot(0\cdot 0-2\cdot 1)=-2.$$
:::
:::

:::exercise{id="E3.14" chapter="3" difficulty="medio"}
## Domanda
Sia $f:\mathbb{R}^2\to\mathbb{R}^2$, $f(x,y)=\left(\tfrac12\sin y,\ \tfrac12\sin x\right)$.

1. Mostrare che $f$ è lipschitziana su $\mathbb{R}^2$ con costante $\tfrac12$.
2. Mostrare che $\tfrac12$ è la migliore costante possibile.

:::hint
Calcolate la jacobiana e stimatene la norma; poi usate il fatto che $\mathbb{R}^2$ è convesso, quindi vale la stima sul segmento tra due punti. Per la ottimalità confrontate due punti vicini sull'asse $x$.
:::

:::solution
**1.** La jacobiana è

$$J_f(x,y)=\begin{pmatrix}0&\tfrac12\cos y\\ \tfrac12\cos x&0\end{pmatrix}.$$

Per ogni vettore $\mathbf{v}=(v_1,v_2)$,

$$\|J_f\mathbf{v}\|^2=\tfrac14\cos^2y\, v_2^2+\tfrac14\cos^2x\, v_1^2\le\tfrac14\|\mathbf{v}\|^2,$$

cioè $\|J_f(x,y)\|\le\tfrac12$ ovunque. Se $\mathbf{a},\mathbf{b}\in\mathbb{R}^2$, la funzione $g(t)=f(\mathbf{a}+t(\mathbf{b}-\mathbf{a}))$ ha $g'(t)=J_f(\cdot)(\mathbf{b}-\mathbf{a})$, con norma al più $\tfrac12\|\mathbf{b}-\mathbf{a}\|$. Integrando su $\lbrack 0,1\rbrack $,

$$\|f(\mathbf{b})-f(\mathbf{a})\|\le\int_0^1\|g'(t)\|\,dt\le\tfrac12\|\mathbf{b}-\mathbf{a}\|.$$

**2.** Prendiamo $\mathbf{a}=(0,0)$, $\mathbf{b}=(t,0)$ con $t\neq0$. Allora $f(\mathbf{b})-f(\mathbf{a})=(0,\tfrac12\sin t)$ e

$$\frac{\|f(\mathbf{b})-f(\mathbf{a})\|}{\|\mathbf{b}-\mathbf{a}\|}=\frac{|\sin t|}{2|t|}\to\frac12\quad(t\to0).$$

Una costante $L<\tfrac12$ sarebbe contraddetta per $t$ piccolo.
:::
:::

:::exercise{id="E3.15" chapter="3" difficulty="difficile"}
## Domanda
Sia $\gamma$ la curva intersezione del cilindro $x^2+y^2=2$ con la superficie $z=xy$. Determinare la retta tangente a $\gamma$ nel punto $P=(1,1,1)$ in due modi: parametrizzando la curva e usando i gradienti delle due superfici.

:::hint
Parametrizzate con $x=\sqrt2\cos t$, $y=\sqrt2\sin t$. Per il secondo metodo la direzione tangente è ortogonale ai due gradienti, quindi parallela al loro prodotto vettoriale.
:::

:::solution
**Parametrizzazione.** $\mathbf{r}(t)=\left(\sqrt2\cos t,\ \sqrt2\sin t,\ 2\sin t\cos t\right)$. Il punto $P$ corrisponde a $t=\pi/4$. Si ha

$$\mathbf{r}'(t)=\left(-\sqrt2\sin t,\ \sqrt2\cos t,\ 2\cos2t\right),\qquad \mathbf{r}'(\pi/4)=(-1,\ 1,\ 0).$$

**Gradienti.** La curva è contenuta negli insiemi di livello di $g_1=x^2+y^2$ e $g_2=z-xy$. In $P$: $\nabla g_1=(2,2,0)$, $\nabla g_2=(-y,-x,1)=(-1,-1,1)$. Il prodotto vettoriale è

$$(2,2,0)\times(-1,-1,1)=(2\cdot1-0\cdot(-1),\ 0\cdot(-1)-2\cdot1,\ 2\cdot(-1)-2\cdot(-1))=(2,-2,0),$$

parallelo a $(1,-1,0)$, ossia a $(-1,1,0)$.

Entrambi i metodi danno la direzione $(1,-1,0)$. La retta tangente è

$$(x,y,z)=(1+s,\ 1-s,\ 1),\quad s\in\mathbb{R}.$$
:::
:::

:::exercise{id="E3.16" chapter="3" difficulty="facile"}
## Domanda
Sia $f(x,y)=x^2+xy$ e sia $g(t)=f\left(t^2,\,e^t\right)$. Calcolare $g'(1)$ con la regola della catena.

:::hint
Usate la {{formula:3.13}}: $g'(t)=f_x\,x'(t)+f_y\,y'(t)$.
:::

:::solution
Con $x(t)=t^2$, $y(t)=e^t$: $f_x=2x+y$, $f_y=x$, $x'=2t$, $y'=e^t$. Quindi

$$g'(t)=(2x+y)\,2t+x\,e^t.$$

Per $t=1$: $x=1$, $y=e$, per cui

$$g'(1)=(2+e)\cdot2+1\cdot e=4+3e.$$
:::
:::

:::exercise{id="E3.17" chapter="3" difficulty="medio"}
## Domanda
Sia $S$ il cilindro $\mathbf{r}(u,v)=(2\cos u,\ 2\sin u,\ v)$. Determinare un vettore normale e il piano tangente a $S$ nel punto $P=(\sqrt2,\sqrt2,1)$.

:::hint
Individuate i parametri $(u,v)$ di $P$ e calcolate $\mathbf{r}_u\times\mathbf{r}_v$.
:::

:::solution
Da $2\cos u=2\sin u=\sqrt2$ si ha $u=\pi/4$, e $v=1$. Le derivate sono

$$\mathbf{r}_u=(-2\sin u,\ 2\cos u,\ 0)=(-\sqrt2,\ \sqrt2,\ 0),\qquad \mathbf{r}_v=(0,0,1).$$

Perciò

$$\mathbf{r}_u\times\mathbf{r}_v=(\sqrt2\cdot1-0,\ 0-(-\sqrt2)\cdot1,\ 0)=(\sqrt2,\ \sqrt2,\ 0).$$

Il piano tangente è $\sqrt2(x-\sqrt2)+\sqrt2(y-\sqrt2)=0$, cioè $x+y=2\sqrt2$.
:::
:::

:::exercise{id="E3.18" chapter="3" difficulty="medio"}
## Domanda
Sia $S$ la superficie di rotazione intorno all'asse $z$ di parametrizzazione $\mathbf{r}(u,v)=\left((1+u^2)\cos v,\ (1+u^2)\sin v,\ u\right)$. Scrivere un'equazione cartesiana di $S$ e determinare il piano tangente nel punto corrispondente a $(u,v)=(1,0)$.

:::hint
Calcolate $\mathbf{r}_u\times\mathbf{r}_v$ nel punto, come in {{formula:3.26}}, e confrontate con il gradiente dell'equazione cartesiana.
:::

:::solution
Poiché $x^2+y^2=(1+u^2)^2$ e $z=u$, un'equazione cartesiana è $\sqrt{x^2+y^2}=1+z^2$.

Il punto è $\mathbf{r}(1,0)=(2,0,1)$. Le derivate sono

$$\mathbf{r}_u=(2u\cos v,\ 2u\sin v,\ 1)=(2,0,1),\qquad \mathbf{r}_v=(-(1+u^2)\sin v,\ (1+u^2)\cos v,\ 0)=(0,2,0).$$

Il prodotto vettoriale è

$$\mathbf{r}_u\times\mathbf{r}_v=(0\cdot0-1\cdot2,\ 1\cdot0-2\cdot0,\ 2\cdot2-0\cdot0)=(-2,0,4).$$

Il piano tangente è $-2(x-2)+4(z-1)=0$, cioè $x-2z=0$.

Controllo: per $G=\sqrt{x^2+y^2}-1-z^2$, $\nabla G(2,0,1)=(1,0,-2)$, parallelo a $(-2,0,4)$.
:::
:::

:::exercise{id="E3.19" chapter="3" difficulty="difficile"}
## Domanda
Sia $f(x,y,z)=\dfrac{(x^2+y^2)\,z}{\left(x^2+y^2+z^2\right)^{3/2}}$ su $\mathbb{R}^3\setminus\{\mathbf{0}\}$. Passando a coordinate sferiche ($z=\rho\cos\varphi$, $\varphi\in[0,\pi]$), mostrare che $f$ dipende solo da $\varphi$ e determinare il massimo di $f$ e i punti in cui è assunto.

:::hint
Sostituite $x^2+y^2=\rho^2\sin^2\varphi$ e studiate $h(\varphi)=\sin^2\varphi\cos\varphi$ derivando.
:::

:::solution
In coordinate sferiche $x^2+y^2=\rho^2\sin^2\varphi$, $z=\rho\cos\varphi$, $x^2+y^2+z^2=\rho^2$, quindi

$$f=\frac{\rho^2\sin^2\varphi\cdot\rho\cos\varphi}{\rho^3}=\sin^2\varphi\cos\varphi=:h(\varphi).$$

Per $\varphi\in(\pi/2,\pi\rbrack $, $h\le0$; $h(0)=h(\pi/2)=0$ e $h>0$ in $(0,\pi/2)$. Il massimo si trova in $(0,\pi/2)$:

$$h'(\varphi)=2\sin\varphi\cos^2\varphi-\sin^3\varphi=\sin\varphi\left(2\cos^2\varphi-\sin^2\varphi\right).$$

Si annulla per $\tan^2\varphi=2$, cioè $\cos\varphi=1/\sqrt3$, $\sin^2\varphi=2/3$. Allora

$$\max f=\frac23\cdot\frac1{\sqrt3}=\frac{2}{3\sqrt3}=\frac{2\sqrt3}{9}.$$

Il massimo è assunto in tutti i punti con $\cos\varphi=1/\sqrt3$, cioè sul cono $x^2+y^2=2z^2$ con $z>0$. Ad esempio $f(1,1,1)=\frac{2}{3\sqrt3}$.
:::
:::

:::exercise{id="E3.20" chapter="3" difficulty="difficile"}
## Domanda
Sia $K$ il cono $z=\sqrt{x^2+y^2}$ e $\Sigma_R$ la sfera $x^2+y^2+z^2=R^2$ con $R>0$.

1. Parametrizzare $K$ con $\mathbf{r}(\rho,\theta)=(\rho\cos\theta,\rho\sin\theta,\rho)$ con $\rho>0$ e calcolare un vettore normale.
2. Mostrare che $K$ e $\Sigma_R$ sono ortogonali in ogni punto della loro intersezione, cioè hanno normali ortogonali.

:::hint
Il prodotto vettoriale $\mathbf{r}_\rho\times\mathbf{r}_\theta$ dà la normale al cono. La normale alla sfera nel punto $(x,y,z)$ è parallela a $(x,y,z)$.
:::

:::solution
**1.** Si ha $\mathbf{r}_\rho=(\cos\theta,\sin\theta,1)$ e $\mathbf{r}_\theta=(-\rho\sin\theta,\rho\cos\theta,0)$. Allora

$$\mathbf{r}_\rho\times\mathbf{r}_\theta=\left(\sin\theta\cdot0-1\cdot\rho\cos\theta,\ 1\cdot(-\rho\sin\theta)-\cos\theta\cdot0,\ \rho\cos^2\theta+\rho\sin^2\theta\right)=(-\rho\cos\theta,-\rho\sin\theta,\rho)=(-x,-y,z).$$

Nel punto $(x,y,z)=(\rho\cos\theta,\rho\sin\theta,\rho)$ una normale è quindi $\mathbf{n}_K=(-x,-y,z)$, che non è nulla perché $z=\rho>0$.

**2.** La normale alla sfera nel punto $(x,y,z)$ è $\mathbf{n}_\Sigma=(x,y,z)$. Il prodotto scalare è

$$\mathbf{n}_K\cdot\mathbf{n}_\Sigma=-x^2-y^2+z^2=0$$

perché i punti di $K$ soddisfano $z^2=x^2+y^2$. La parametrizzazione esclude l'origine, che non appartiene alla sfera poiché $R>0$. Sostituendo $z^2=x^2+y^2$ nell'equazione della sfera si ottiene $z=R/\sqrt{2}$ e $x^2+y^2=R^2/2$. L'intersezione è dunque la circonferenza data da $z=R/\sqrt{2}$ e $x^2+y^2=R^2/2$. Quindi le due superfici sono ortogonali in ogni punto della loro intersezione, qualunque sia $R$. Ad esempio, in $(3,4,5)$, con $R^2=50$, $\mathbf{n}_K=(-3,-4,5)$ e $\mathbf{n}_\Sigma=(3,4,5)$, e il prodotto scalare è $-9-16+25=0$.
:::
:::

:::exercise{id="E3.21" chapter="3" difficulty="facile"}
## Domanda
Usando la convenzione $x=\rho\sin\varphi\cos\theta$, $y=\rho\sin\varphi\sin\theta$, $z=\rho\cos\varphi$ con $\rho\ge0$, $\varphi\in[0,\pi]$, $\theta\in\lbrack 0,2\pi)$, determinare le coordinate sferiche del punto $(1,1,\sqrt2)$ e verificare il risultato.

:::hint
Calcolate $\rho=\|(x,y,z)\|$, poi $\cos\varphi=z/\rho$ e $\tan\theta=y/x$ tenendo conto del quadrante.
:::

:::solution
$\rho=\sqrt{1+1+2}=2$. Da $\cos\varphi=\sqrt2/2$ con $\varphi\in[0,\pi]$ si ha $\varphi=\pi/4$. Il punto $(x,y)=(1,1)$ è nel primo quadrante con $\tan\theta=1$, quindi $\theta=\pi/4$.

Verifica: $x=2\cdot\frac{\sqrt2}2\cdot\frac{\sqrt2}2=1$, $y=1$, $z=2\cdot\frac{\sqrt2}2=\sqrt2$.
:::
:::

:::exercise{id="E3.22" chapter="3" difficulty="medio"}
## Domanda
Sia $u\in C^2(\mathbb{R}^2)$ soluzione di $u_{xx}=u_{yy}$. Con $s=x+y$, $t=x-y$ e $u(x,y)=v(s,t)$:

1. trasformare l'equazione e ricavare la forma generale di $u$;
2. trovare la soluzione con $u(x,0)=x^2$ e $u_y(x,0)=0$.

:::hint
Derivate due volte con la regola della catena: $u_{xx}-u_{yy}$ si semplifica a un solo termine misto.
:::

:::solution
**1.** Come sopra, $u_x=v_s+v_t$ e $u_y=v_s-v_t$. Derivando ancora,

$$u_{xx}=v_{ss}+2v_{st}+v_{tt},\qquad u_{yy}=v_{ss}-2v_{st}+v_{tt}.$$

L'equazione diventa $4v_{st}=0$, cioè $v_{st}=0$. La trasformazione $(x,y)\mapsto(s,t)$ è un isomorfismo lineare di $\mathbb{R}^2$ su sé stesso, quindi $v$ è definita su tutto $\mathbb{R}^2$. Per ogni $s,t\in\mathbb{R}$, da $v_{st}=0$ segue che $v_s(s,t)=v_s(s,0)$. Ponendo $f(s)=v(s,0)-v(0,0)$ e $g(t)=v(0,t)$, si ottiene $v(s,t)=f(s)+g(t)$. Poiché $v\in C^2(\mathbb{R}^2)$, anche $f,g\in C^2(\mathbb{R})$. Quindi

$$u(x,y)=f(x+y)+g(x-y).$$

**2.** Dalle condizioni si ricavano $f(x)+g(x)=x^2$ e, derivando rispetto a $y$ e ponendo $y=0$, $f'(x)-g'(x)=0$. Pertanto $f-g=c$ per una costante $c$. Ne segue che $f(x)=\frac{x^2+c}{2}$ e $g(x)=\frac{x^2-c}{2}$, dunque

$$u(x,y)=\frac12\left[(x+y)^2+(x-y)^2\right]=x^2+y^2.$$

Verifica: $u_{xx}=2=u_{yy}$, $u(x,0)=x^2$ e $u_y(x,0)=0$.
:::
:::

:::exercise{id="E3.23" chapter="3" difficulty="medio"}
## Domanda
Sia $\mathbf{F}(x,y,z)=\left(y^2+az,\ 2xy,\ bx+3z^2\right)$ con $a,b\in\mathbb{R}$.

1. Determinare per quali $a,b$ si ha $\operatorname{rot}\mathbf{F}=\mathbf{0}$.
2. Per tali valori, con $a=b=1$, trovare una funzione $f$ con $\nabla f=\mathbf{F}$.

:::hint
Calcolate il rotore con {{formula:3.7}}. Per il potenziale integrate la prima componente in $x$ e determinate le funzioni incognite confrontando con le altre.
:::

:::solution
**1.** Con $F_1=y^2+az$, $F_2=2xy$, $F_3=bx+3z^2$:

$$\operatorname{rot}\mathbf{F}=(\partial_yF_3-\partial_zF_2,\ \partial_zF_1-\partial_xF_3,\ \partial_xF_2-\partial_yF_1)=(0-0,\ a-b,\ 2y-2y)=(0,\,a-b,\,0).$$

Il rotore è nullo se e solo se $a=b$.

**2.** Con $a=b=1$ cerchiamo $f$ con $f_x=y^2+z$. Integrando in $x$: $f=xy^2+xz+g(y,z)$. Da $f_y=2xy$ si ha $2xy+g_y=2xy$, quindi $g_y=0$ e $g=g(z)$. Da $f_z=x+3z^2$ si ha $x+g'(z)=x+3z^2$, quindi $g=z^3+c$. Perciò

$$f(x,y,z)=xy^2+xz+z^3+c.$$

Verifica: $f_x=y^2+z$, $f_y=2xy$, $f_z=x+3z^2$.
:::
:::

:::exercise{id="E3.24" chapter="3" difficulty="difficile"}
## Domanda
Sia $f\in C^2$ una funzione scalare.

1. Dimostrare che $\Delta\left(f^2\right)=2f\,\Delta f+2\|\nabla f\|^2$.
2. Calcolare $\Delta\left(u^2\right)$ per $u(x,y)=x^2-y^2$ usando il punto 1 e verificare con il calcolo diretto.

:::hint
Scrivete $\Delta(f^2)=\operatorname{div}\left(\nabla(f^2)\right)$ e usate $\nabla(f^2)=2f\nabla f$ e la regola per la divergenza di un prodotto.
:::

:::solution
**1.** Si ha $\nabla(f^2)=2f\nabla f$. Per la regola $\operatorname{div}(\varphi\mathbf{G})=\nabla\varphi\cdot\mathbf{G}+\varphi\operatorname{div}\mathbf{G}$ con $\varphi=2f$ e $\mathbf{G}=\nabla f$:

$$\Delta(f^2)=2\nabla f\cdot\nabla f+2f\operatorname{div}(\nabla f)=2\|\nabla f\|^2+2f\,\Delta f.$$

**2.** Per $u=x^2-y^2$: $\Delta u=2-2=0$ e $\nabla u=(2x,-2y)$, $\|\nabla u\|^2=4x^2+4y^2$. Quindi

$$\Delta(u^2)=0+2\left(4x^2+4y^2\right)=8\left(x^2+y^2\right).$$

Diretto: $u^2=x^4-2x^2y^2+y^4$, quindi $\partial_{xx}=12x^2-4y^2$, $\partial_{yy}=-4x^2+12y^2$, e la somma è $8x^2+8y^2$.
:::
:::

:::exercise{id="E3.25" chapter="3" difficulty="difficile"}
## Domanda
Sia $f:\mathbb{R}^2\to\mathbb{R}^2$, $f(x,y)=(x^2,y^2)$ e sia $B_R=\{(x,y):x^2+y^2\le R^2\}$ con $R>0$.

1. Mostrare che $f$ è lipschitziana su $B_R$ con costante $2R$.
2. Mostrare che $2R$ è la migliore costante su $B_R$.
3. Mostrare che $f$ non è lipschitziana su $\mathbb{R}^2$.

:::hint
La jacobiana è diagonale: la sua norma è il massimo dei moduli degli elementi diagonali. Il disco è convesso. Per i punti 2 e 3 scegliete punti sull'asse $x$.
:::

:::solution
**1.** $J_f(x,y)=\begin{pmatrix}2x&0\\0&2y\end{pmatrix}$, quindi per $\mathbf{v}=(v_1,v_2)$

$$\|J_f\mathbf{v}\|^2=4x^2v_1^2+4y^2v_2^2\le 4\max(x^2,y^2)\|\mathbf{v}\|^2\le4R^2\|\mathbf{v}\|^2\quad\text{su }B_R.$$

Poiché $B_R$ è convesso, il segmento tra due punti di $B_R$ sta in $B_R$ e, come per la stima del valor medio, $\|f(\mathbf{b})-f(\mathbf{a})\|\le 2R\|\mathbf{b}-\mathbf{a}\|$.

**2.** Siano $\mathbf{a}=(R,0)$, $\mathbf{b}=(R-t,0)$ con $0<t<R$. Allora

$$\frac{\|f(\mathbf{a})-f(\mathbf{b})\|}{\|\mathbf{a}-\mathbf{b}\|}=\frac{R^2-(R-t)^2}{t}=2R-t\to2R\quad(t\to0^+).$$

**3.** Siano $\mathbf{a}=(n+1,0)$, $\mathbf{b}=(n,0)$: il rapporto vale $\frac{(n+1)^2-n^2}{1}=2n+1\to+\infty$, quindi nessuna costante $L$ vale su tutto $\mathbb{R}^2$.
:::
:::

:::exercise{id="E3.26" chapter="3" difficulty="medio"}
## Domanda
Sia $\mathbf{r}(t)=(t^2,\ t^3)$, $t\in\mathbb{R}$.

1. Stabilire in quali punti la curva è regolare.
2. Calcolare la lunghezza dell'arco con $t\in[0,1]$.

:::hint
Una curva è regolare dove $\mathbf{r}'\neq\mathbf{0}$. Per l'integrale, osservate che $t\sqrt{4+9t^2}$ ha una primitiva immediata.
:::

:::solution
**1.** $\mathbf{r}'(t)=(2t,\ 3t^2)$, che si annulla solo per $t=0$. La curva è regolare per $t\neq0$ (nell'origine ha una cuspide).

**2.** Per $t\in[0,1]$, $\|\mathbf{r}'(t)\|=\sqrt{4t^2+9t^4}=t\sqrt{4+9t^2}$. Poiché

$$\frac{d}{dt}\left(4+9t^2\right)^{3/2}=\tfrac32\cdot18t\left(4+9t^2\right)^{1/2}=27\,t\sqrt{4+9t^2},$$

la lunghezza è

$$\int_0^1t\sqrt{4+9t^2}\,dt=\frac1{27}\left[\left(4+9t^2\right)^{3/2}\right]_0^1=\frac{13\sqrt{13}-8}{27}.$$
:::
:::

:::exercise{id="E3.27" chapter="3" difficulty="facile"}
## Domanda
Sia $f(x,y,z)=x^2yz$. Calcolare $\nabla f$ nel punto $P=(1,2,3)$ e la derivata direzionale di $f$ in $P$ lungo il versore $\mathbf{v}=\tfrac13(1,2,2)$.

:::hint
Usate la {{formula:2.4}}: $\partial_{\mathbf{v}}f=\nabla f\cdot\mathbf{v}$.
:::

:::solution
Il gradiente è

$$\nabla f=(2xyz,\ x^2z,\ x^2y),\qquad \nabla f(1,2,3)=(12,\ 3,\ 2).$$

Il vettore $\mathbf{v}$ è un versore perché $\tfrac19(1+4+4)=1$. Dunque

$$\partial_{\mathbf{v}}f(P)=(12,3,2)\cdot\tfrac13(1,2,2)=\tfrac13(12+6+4)=\tfrac{22}{3}.$$
:::
:::

:::exercise{id="E3.28" chapter="3" difficulty="medio"}
## Domanda
Sia $f(x,y,z)=z$ e $\mathbf{F}(x,y,z)=(y,-x,0)$. Calcolare $\operatorname{rot}(f\mathbf{F})$ con l'identità $\operatorname{rot}(f\mathbf{F})=\nabla f\times\mathbf{F}+f\operatorname{rot}\mathbf{F}$ e verificare con il calcolo diretto.

:::hint
Calcolate $\nabla f\times\mathbf{F}$ e $\operatorname{rot}\mathbf{F}$ separatamente; per il controllo, il campo è $(yz,-xz,0)$.
:::

:::solution
Si ha $\nabla f=(0,0,1)$ e

$$\nabla f\times\mathbf{F}=(0\cdot0-1\cdot(-x),\ 1\cdot y-0\cdot0,\ 0\cdot(-x)-0\cdot y)=(x,\,y,\,0).$$

Inoltre $\operatorname{rot}\mathbf{F}=(0,0,\partial_xF_2-\partial_yF_1)=(0,0,-1-1)=(0,0,-2)$, quindi $f\operatorname{rot}\mathbf{F}=(0,0,-2z)$. Perciò

$$\operatorname{rot}(f\mathbf{F})=(x,\,y,\,-2z).$$

Diretto: per $f\mathbf{F}=(yz,-xz,0)$,

$$\operatorname{rot}=\left(0-(-x),\ y-0,\ -z-z\right)=(x,y,-2z).$$
:::
:::

:::exercise{id="E3.29" chapter="3" difficulty="facile"}
## Domanda
Sia $\mathbf{r}(t)=(\cos t,\ \sin t,\ t)$, $t\in[0,2\pi]$ (elica). Calcolare la lunghezza della curva e scrivere l'equazione parametrica della retta tangente nel punto corrispondente a $t=\pi/2$.

:::hint
Usate {{formula:3.15}} e {{formula:3.14}}, partendo da $\mathbf{r}'(t)$.
:::

:::solution
Si ha $\mathbf{r}'(t)=(-\sin t,\ \cos t,\ 1)$ e $\|\mathbf{r}'(t)\|=\sqrt{\sin^2t+\cos^2t+1}=\sqrt2$, costante. La lunghezza è

$$\int_0^{2\pi}\sqrt2\,dt=2\pi\sqrt2.$$

Per $t=\pi/2$: $\mathbf{r}=(0,1,\pi/2)$ e $\mathbf{r}'=(-1,0,1)$. La retta tangente è

$$(x,y,z)=\left(0,1,\tfrac\pi2\right)+s(-1,0,1),\quad s\in\mathbb{R},$$

cioè $x=-s$, $y=1$, $z=\tfrac\pi2+s$.
:::
:::

:::exercise{id="E3.30" chapter="3" difficulty="facile"}
## Domanda
Sia $f:\mathbb{R}^2\to\mathbb{R}^2$, $f(\mathbf{x})=A\mathbf{x}$ con $A=\begin{pmatrix}3&0\\0&-4\end{pmatrix}$. Determinare la più piccola costante $L$ tale che $\|f(\mathbf{x})-f(\mathbf{y})\|\le L\|\mathbf{x}-\mathbf{y}\|$ per ogni $\mathbf{x},\mathbf{y}\in\mathbb{R}^2$.

:::hint
Per linearità $f(\mathbf{x})-f(\mathbf{y})=A(\mathbf{x}-\mathbf{y})$: cercate il massimo di $\|A\mathbf{v}\|/\|\mathbf{v}\|$.
:::

:::solution
Posto $\mathbf{v}=\mathbf{x}-\mathbf{y}=(v_1,v_2)$, si ha $f(\mathbf{x})-f(\mathbf{y})=A\mathbf{v}=(3v_1,-4v_2)$, quindi

$$\|A\mathbf{v}\|^2=9v_1^2+16v_2^2\le 16\left(v_1^2+v_2^2\right)=16\|\mathbf{v}\|^2.$$

La condizione di Lipschitz vale dunque con $L=4$. L'uguaglianza si ha per $\mathbf{v}=(0,1)$, dove $\|A\mathbf{v}\|=4=4\|\mathbf{v}\|$: nessuna costante minore di $4$ funziona. Quindi $L=4$.
:::
:::

:::exercise{id="E3.31" chapter="3" difficulty="facile"}
## Domanda
Sia $f:\mathbb{R}^2\to\mathbb{R}^2$ definita da $f(x,y)=\left(x^2y,\ x+\sin y\right)$. Calcolare la matrice jacobiana $J_f(x,y)$ e il suo determinante nel punto $(1,0)$.

:::hint
Derivate ciascuna componente rispetto a $x$ e $y$ e disponete i gradienti delle componenti sulle righe, come in {{formula:3.1}}.
:::

:::solution
Le componenti sono $f_1=x^2y$ e $f_2=x+\sin y$. Le derivate parziali sono

$$\frac{\partial f_1}{\partial x}=2xy,\quad \frac{\partial f_1}{\partial y}=x^2,\quad \frac{\partial f_2}{\partial x}=1,\quad \frac{\partial f_2}{\partial y}=\cos y.$$

Quindi

$$J_f(x,y)=\begin{pmatrix}2xy & x^2\\ 1 & \cos y\end{pmatrix}.$$

In $(1,0)$ si ottiene

$$J_f(1,0)=\begin{pmatrix}0 & 1\\ 1 & 1\end{pmatrix},\qquad \det J_f(1,0)=0\cdot 1-1\cdot 1=-1.$$
:::
:::

:::exercise{id="E3.32" chapter="3" difficulty="medio"}
## Domanda
Sia $r=\sqrt{x^2+y^2+z^2}$. Calcolare $\operatorname{div}\left(r^2\,\nabla\!\left(\tfrac1r\right)\right)$ in $\mathbb{R}^3\setminus\{\mathbf{0}\}$ in due modi: direttamente e usando l'identità $\operatorname{div}(f\nabla g)=\nabla f\cdot\nabla g+f\,\Delta g$.

:::hint
Ricordate che $\nabla(1/r)=-\mathbf{x}/r^3$. Per giustificare che $1/r$ è armonica in $\mathbb{R}^3\setminus\{\mathbf{0}\}$, calcolate $\Delta(1/r)=\operatorname{div}(-\mathbf{x}/r^3)$.
:::

:::solution
**Direttamente.** Poiché $\nabla(1/r)=-\mathbf{x}/r^3$,

$$r^2\nabla\!\left(\tfrac1r\right)=-\frac{\mathbf{x}}{r}.$$

Allora

$$\operatorname{div}\left(-\frac{\mathbf{x}}{r}\right)=-\left(\frac{3}{r}+\mathbf{x}\cdot\nabla\frac1r\right)=-\left(\frac3r-\frac{r^2}{r^3}\right)=-\frac2r.$$

**Con l'identità.** Con $f=r^2$ e $g=1/r$, si ha $\nabla f=2\mathbf{x}$ e $\nabla g=-\mathbf{x}/r^3$. Inoltre,

$$\Delta\left(\frac1r\right)=\operatorname{div}\left(-\frac{\mathbf{x}}{r^3}\right)=-\frac3{r^3}-\mathbf{x}\cdot\nabla\left(\frac1{r^3}\right)=-\frac3{r^3}+\frac{3r^2}{r^5}=0,$$

poiché $\nabla(1/r^3)=-3\mathbf{x}/r^5$. Pertanto,

$$\operatorname{div}(f\nabla g)=2\mathbf{x}\cdot\left(-\frac{\mathbf{x}}{r^3}\right)+r^2\cdot 0=-\frac{2r^2}{r^3}=-\frac2r.$$

I due risultati coincidono.
:::
:::

:::exercise{id="E3.33" chapter="3" difficulty="facile"}
## Domanda
Determinare l'equazione del piano tangente al paraboloide $z=x^2+y^2$ nel punto $(1,2,5)$.

:::hint
Per una superficie cartesiana $z=f(x,y)$ usate il {{formula:2.7}}.
:::

:::solution
Con $f(x,y)=x^2+y^2$: $f_x=2x=2$, $f_y=2y=4$ in $(1,2)$, e $f(1,2)=5$. Il piano tangente è

$$z=5+2(x-1)+4(y-2),$$

cioè $2x+4y-z=5$. (Verifica nel punto: $2+8-5=5$.)
:::
:::

:::exercise{id="E4.1" chapter="4" difficulty="facile"}
## Domanda
Sia $D=\{(x,y): 0\le x\le 1,\ x^2\le y\le x\}$. Calcolare $\displaystyle\int_D (x+y)\,dx\,dy$.

:::hint
Il dominio è normale rispetto all'asse $x$: integra prima in $y$ tra $x^2$ e $x$.
:::

:::solution
Integrando per verticali:

$$\int_{x^2}^{x}(x+y)\,dy=\left[xy+\frac{y^2}{2}\right]_{x^2}^{x}=x^2+\frac{x^2}{2}-x^3-\frac{x^4}{2}=\frac{3x^2}{2}-x^3-\frac{x^4}{2}.$$

Quindi

$$\int_0^1\left(\frac{3x^2}{2}-x^3-\frac{x^4}{2}\right)dx=\frac12-\frac14-\frac1{10}=\frac{3}{20}.$$
:::
:::

:::exercise{id="E4.2" chapter="4" difficulty="difficile"}
## Domanda
Calcolare il volume della regione limitata compresa tra il paraboloide $z=x^2+y^2$ e il piano $z=2y$.

:::hint
Proietta sul piano $xy$: la proiezione è un disco, ottenuto da $x^2+y^2\le2y$. Il volume è l'integrale della differenza tra le quote.
:::

:::solution
I due grafici si incontrano per $x^2+y^2=2y$, cioè $x^2+(y-1)^2=1$: disco $D$ di centro $(0,1)$ e raggio $1$. Su $D$ si ha $2y\ge x^2+y^2$, quindi

$$V=\int_D\left(2y-x^2-y^2\right)dx\,dy=\int_D\left(1-x^2-(y-1)^2\right)dx\,dy.$$

Con la traslazione $u=x$, $v=y-1$ (jacobiano $1$) e coordinate polari:

$$V=\int_0^{2\pi}\int_0^1(1-r^2)\,r\,dr\,d\theta=2\pi\left(\frac12-\frac14\right)=\frac\pi2.$$
:::
:::

:::exercise{id="E4.3" chapter="4" difficulty="medio"}
## Domanda
Una lamina omogenea a forma di disco di raggio $R$ ha massa $M$. Calcolare il suo momento d'inerzia rispetto a una retta del piano passante per un diametro.

:::hint
La densità è $\delta=\frac{M}{\pi R^2}$; il momento rispetto all'asse $x$ è $\delta\int_D y^2\,dx\,dy$.
:::

:::solution
Posto il centro nell'origine e la retta coincidente con l'asse $x$, la distanza di $(x,y)$ dalla retta è $|y|$ {{formula:4.15}}. La densità è $\delta=\frac{M}{\pi R^2}$. In polari:

$$I=\delta\int_0^{2\pi}\sin^2\theta\,d\theta\int_0^Rr^3\,dr=\frac{M}{\pi R^2}\cdot\pi\cdot\frac{R^4}{4}=\frac{MR^2}{4}.$$
:::
:::

:::exercise{id="E4.4" chapter="4" difficulty="facile"}
## Domanda
Calcolare il volume dell'ellissoide

$$\frac{x^2}{4}+\frac{y^2}{9}+z^2\le1.$$

:::hint
Con il cambio lineare $x=2u$, $y=3v$, $z=w$ l'ellissoide diventa la palla unitaria, di volume $\frac{4\pi}{3}$.
:::

:::solution
Posto $x=2u$, $y=3v$, $z=w$, l'ellissoide diventa la palla $u^2+v^2+w^2\le1$ e il determinante jacobiano vale $2\cdot3\cdot1=6$. Quindi

$$V=6\cdot\frac{4\pi}{3}=8\pi.$$
:::
:::

:::exercise{id="E4.5" chapter="4" difficulty="difficile"}
## Domanda
Sia $E=\{(x,y,z):x^2+y^2+z^2\le4,\ z\ge1\}$ (calotta sferica). Calcolare $\displaystyle\int_E z\,dx\,dy\,dz$.

:::hint
Integra per strati orizzontali: a quota $z\in[1,2]$ la sezione è un disco di raggio $\sqrt{4-z^2}$.
:::

:::solution
Per $z\in[1,2]$ la sezione è il disco $x^2+y^2\le4-z^2$, di area $\pi(4-z^2)$. Per la formula {{formula:4.11}}:

$$\int_E z\,dV=\pi\int_1^2z(4-z^2)\,dz=\pi\left[2z^2-\frac{z^4}{4}\right]_1^2=\pi\left[(8-4)-\left(2-\frac14\right)\right]=\frac{9\pi}{4}.$$
:::
:::

:::exercise{id="E4.6" chapter="4" difficulty="facile"}
## Domanda
Sia $T$ il triangolo di vertici $(0,0)$, $(1,0)$, $(0,1)$. Calcolare $\displaystyle\int_T xy\,dx\,dy$.

:::hint
Descrivi $T$ come $\{0\le x\le 1,\ 0\le y\le 1-x\}$ e integra per verticali.
:::

:::solution
Il triangolo è $T=\{0\le x\le1,\ 0\le y\le 1-x\}$. Per la formula {{formula:4.5}}:

$$\int_0^1 x\left(\int_0^{1-x}y\,dy\right)dx=\int_0^1\frac{x(1-x)^2}{2}\,dx=\frac12\int_0^1\left(x-2x^2+x^3\right)dx=\frac12\left(\frac12-\frac23+\frac14\right)=\frac1{24}.$$
:::
:::

:::exercise{id="E4.7" chapter="4" difficulty="facile"}
## Domanda
Sia $T=\{(x,y,z):x,y,z\ge0,\ x+y+z\le1\}$. Calcolare $\displaystyle\int_T(x+y+z)\,dx\,dy\,dz$.

:::hint
Per simmetria i tre integrali di $x$, $y$, $z$ coincidono; calcola uno solo con l'integrazione per strati.
:::

:::solution
Per simmetria $\int_Tx=\int_Ty=\int_Tz$. Per strati {{formula:4.11}}, la sezione a quota $x$ è un triangolo di area $\frac{(1-x)^2}{2}$:

$$\int_Tx\,dV=\int_0^1x\frac{(1-x)^2}{2}\,dx=\frac12\left(\frac12-\frac23+\frac14\right)=\frac1{24}.$$

L'integrale richiesto vale quindi $3\cdot\frac1{24}=\frac18$.
:::
:::

:::exercise{id="E4.8" chapter="4" difficulty="facile"}
## Domanda
Sia $D=\{(x,y):1\le x^2+y^2\le4,\ y\ge0\}$. Calcolare

$$\int_D\frac{y}{\sqrt{x^2+y^2}}\,dx\,dy.$$

:::hint
Usa coordinate polari: $D$ diventa un rettangolo nel piano $(r,\theta)$.
:::

:::solution
In polari $D$ diventa $1\le r\le2$, $0\le\theta\le\pi$, e l'integrando è $\frac{r\sin\theta}{r}=\sin\theta$. Con il fattore $r$:

$$\int_0^\pi\sin\theta\,d\theta\int_1^2 r\,dr=2\cdot\frac{4-1}{2}=3.$$
:::
:::

:::exercise{id="E4.9" chapter="4" difficulty="medio"}
## Domanda
Sia $E=\{(x,y,z):x^2+y^2\le z\le4\}$. Calcolare $\displaystyle\int_E z\,dx\,dy\,dz$.

:::hint
Usa le coordinate cilindriche: per $(r,\theta)$ fissati, $z$ varia tra $r^2$ e $4$.
:::

:::solution
Il dominio si proietta sul disco $x^2+y^2\le4$, cioè $0\le r\le2$. In coordinate cilindriche {{formula:4.12}}:

$$\int_0^{2\pi}\int_0^2\left(\int_{r^2}^4z\,dz\right)r\,dr\,d\theta=2\pi\int_0^2\frac{16-r^4}{2}\,r\,dr=\pi\left[8r^2-\frac{r^6}{6}\right]_0^2=\pi\left(32-\frac{32}{3}\right)=\frac{64\pi}{3}.$$
:::
:::

:::exercise{id="E4.10" chapter="4" difficulty="facile"}
## Domanda
Calcolare $\displaystyle\int_D\left(x^2+y^2\right)dx\,dy$, dove $D=\{x^2+y^2\le4\}$.

:::hint
Passa a coordinate polari: ricorda il fattore $r$ dello jacobiano.
:::

:::solution
In coordinate polari {{formula:4.9}}, $D$ corrisponde a $0\le r\le2$, $0\le\theta\le2\pi$ e $x^2+y^2=r^2$:

$$\int_0^{2\pi}\int_0^2 r^2\cdot r\,dr\,d\theta=2\pi\cdot\frac{2^4}{4}=8\pi.$$
:::
:::

:::exercise{id="E4.11" chapter="4" difficulty="facile"}
## Domanda
Determinare il baricentro della lamina piana omogenea $D=\{x^2+y^2\le1,\ y\ge0\}$ (semidisco).

:::hint
Per simmetria l'ascissa del baricentro è nulla; per l'ordinata calcola $\int_D y$ in coordinate polari e dividi per l'area.
:::

:::solution
Il semidisco è simmetrico rispetto all'asse $y$, quindi $x_G=0$. L'area è $\frac\pi2$. In polari:

$$\int_Dy\,dx\,dy=\int_0^\pi\sin\theta\,d\theta\int_0^1r^2\,dr=2\cdot\frac13=\frac23.$$

Quindi $y_G=\frac{2/3}{\pi/2}=\frac{4}{3\pi}$ {{formula:4.14}}.
:::
:::

:::exercise{id="E4.12" chapter="4" difficulty="medio"}
## Domanda
Riconoscere la quadrica di equazione $x^2+y^2-z^2=1$ e calcolare il volume della regione racchiusa da essa e dai piani $z=-1$ e $z=1$, cioè $\{x^2+y^2\le1+z^2,\ |z|\le1\}$.

:::hint
È una superficie di rotazione attorno all'asse $z$; integra per strati orizzontali, dove le sezioni sono dischi.
:::

:::solution
L'equazione $x^2+y^2=1+z^2$ rappresenta un iperboloide a una falda, superficie di rotazione attorno all'asse $z$ {{formula:3.23}}. A quota $z$ la sezione è un disco di raggio $\sqrt{1+z^2}$, di area $\pi(1+z^2)$. Per la formula {{formula:4.11}}:

$$V=\int_{-1}^1\pi(1+z^2)\,dz=\pi\left(2+\frac23\right)=\frac{8\pi}{3}.$$
:::
:::

:::exercise{id="E4.13" chapter="4" difficulty="difficile"}
## Domanda
Calcolare

$$\int_{\lbrack 0,1\rbrack ^2}\left|y-x^2\right|dx\,dy.$$

:::hint
Spezza il quadrato nella parte $y\le x^2$ e nella parte $y\ge x^2$, in modo da eliminare il valore assoluto, e integra per verticali.
:::

:::solution
Per $x$ fissato in $\lbrack 0,1\rbrack $ si ha $0\le x^2\le1$, quindi

$$\int_0^1|y-x^2|\,dy=\int_0^{x^2}(x^2-y)\,dy+\int_{x^2}^1(y-x^2)\,dy=\frac{x^4}{2}+\frac{(1-x^2)^2}{2}.$$

Sviluppando: $\frac{x^4}{2}+\frac{1-2x^2+x^4}{2}=x^4-x^2+\frac12$. Allora

$$\int_0^1\left(x^4-x^2+\frac12\right)dx=\frac15-\frac13+\frac12=\frac{6-10+15}{30}=\frac{11}{30}.$$
:::
:::

:::exercise{id="E4.14" chapter="4" difficulty="medio"}
## Domanda
Sia $D=\{(x,y):0\le x+y\le1,\ 0\le x-y\le2\}$. Calcolare $\displaystyle\int_D\left(x^2-y^2\right)dx\,dy$ usando il cambio di variabili $u=x+y$, $v=x-y$.

:::hint
Esprimi $x,y$ in funzione di $u,v$ e calcola il determinante jacobiano della trasformazione inversa; ricorda che $x^2-y^2=(x+y)(x-y)$.
:::

:::solution
Da $u=x+y$, $v=x-y$ si ha $x=\frac{u+v}{2}$, $y=\frac{u-v}{2}$, con

$$\det\begin{pmatrix}1/2&1/2\\1/2&-1/2\end{pmatrix}=-\frac12,\qquad |J|=\frac12.$$

Il dominio diventa il rettangolo $\lbrack 0,1\rbrack \times[0,2]$ in $(u,v)$ e $x^2-y^2=uv$. Per la formula {{formula:4.8}}:

$$\int_0^1\int_0^2 uv\cdot\frac12\,dv\,du=\frac12\cdot\frac12\cdot2=\frac12.$$
:::
:::

:::exercise{id="E4.15" chapter="4" difficulty="medio"}
## Domanda
Sia $D$ la regione limitata compresa tra le parabole $y=x^2$ e $y=2-x^2$. Calcolare $\displaystyle\int_D y\,dx\,dy$.

:::hint
Trova le intersezioni delle due parabole: determinano l'intervallo di $x$; poi integra in $y$ tra le due curve.
:::

:::solution
Le parabole si incontrano per $x^2=2-x^2$, cioè $x=\pm1$. Quindi $D=\{-1\le x\le1,\ x^2\le y\le 2-x^2\}$.

$$\int_{x^2}^{2-x^2}y\,dy=\frac{(2-x^2)^2-x^4}{2}=\frac{4-4x^2}{2}=2-2x^2.$$

$$\int_{-1}^1(2-2x^2)\,dx=4-\frac43=\frac83.$$
:::
:::

:::exercise{id="E4.16" chapter="4" difficulty="medio"}
## Domanda
Sia $D=\{(x,y):1\le x^2+y^2\le4,\ x\ge0,\ y\ge0\}$. Calcolare

$$\int_D\frac{x^2}{x^2+y^2}\,dx\,dy.$$

:::hint
In coordinate polari l'integrando dipende solo da $\theta$; ricorda $\cos^2\theta=\frac{1+\cos2\theta}{2}$.
:::

:::solution
In polari $D$ è $1\le r\le2$, $0\le\theta\le\frac\pi2$, e l'integrando vale $\cos^2\theta$:

$$\int_0^{\pi/2}\cos^2\theta\,d\theta\cdot\int_1^2r\,dr=\frac\pi4\cdot\frac32=\frac{3\pi}{8}.$$
:::
:::

:::exercise{id="E4.17" chapter="4" difficulty="facile"}
## Domanda
Calcolare l'integrale doppio

$$\int_R (x+2y)\,dx\,dy,\qquad R=\lbrack 0,1\rbrack \times[0,2].$$

:::hint
Usa le formule di riduzione sul rettangolo e integra prima rispetto a una variabile, trattando l'altra come costante.
:::

:::solution
Per le formule di riduzione {{formula:4.3}}:

$$\int_0^2\left(\int_0^1 (x+2y)\,dx\right)dy=\int_0^2\left(\frac12+2y\right)dy=\left[\frac y2+y^2\right]_0^2=1+4=5.$$

Il valore dell'integrale è $5$.
:::
:::

:::exercise{id="E4.18" chapter="4" difficulty="medio"}
## Domanda
Sia $E=\left\{(x,y):\dfrac{x^2}{4}+\dfrac{y^2}{9}\le1\right\}$. Calcolare $\displaystyle\int_E y^2\,dx\,dy$.

:::hint
Usa le coordinate ellittiche $x=2\rho\cos\theta$, $y=3\rho\sin\theta$ e calcola lo jacobiano.
:::

:::solution
Con $x=2\rho\cos\theta$, $y=3\rho\sin\theta$ l'ellisse corrisponde a $0\le\rho\le1$, $0\le\theta\le2\pi$. Lo jacobiano è

$$\det\begin{pmatrix}2\cos\theta&-2\rho\sin\theta\\3\sin\theta&3\rho\cos\theta\end{pmatrix}=6\rho.$$

Quindi

$$\int_0^{2\pi}\int_0^1 9\rho^2\sin^2\theta\cdot6\rho\,d\rho\,d\theta=54\cdot\frac14\cdot\pi=\frac{27\pi}{2}.$$
:::
:::

:::exercise{id="E4.19" chapter="4" difficulty="difficile"}
## Domanda
Sia $D=\{(x,y): |x|+|y|\le1\}$. Calcolare $\displaystyle\int_D (x+y)^2\,dx\,dy$, sfruttando le simmetrie di $D$.

:::hint
Sviluppa il quadrato: il termine misto $2xy$ è dispari in $x$ su un dominio simmetrico. Per gli altri usa la simmetria tra $x$ e $y$.
:::

:::solution
Si ha $(x+y)^2=x^2+y^2+2xy$. Il dominio è simmetrico rispetto all'asse $y$ e $xy$ è dispari in $x$, quindi $\int_D xy=0$. Per la simmetria $x\leftrightarrow y$ del dominio, $\int_D x^2=\int_D y^2$.

Per $x$ fissato in $\lbrack -1,1\rbrack $, $y$ varia in $\lbrack -(1-|x|),\,1-|x|\rbrack $, intervallo di lunghezza $2(1-|x|)$. Quindi

$$\int_D x^2=\int_{-1}^1x^2\cdot2(1-|x|)\,dx=4\int_0^1\left(x^2-x^3\right)dx=4\left(\frac13-\frac14\right)=\frac13.$$

Perciò l'integrale vale $\frac13+\frac13+0=\frac23$.
:::
:::

:::exercise{id="E4.20" chapter="4" difficulty="medio"}
## Domanda
Calcolare

$$\int_0^1\int_{\sqrt y}^1\sin\left(x^3\right)dx\,dy.$$

:::hint
La funzione $\sin(x^3)$ non ha primitiva elementare: scambia l'ordine di integrazione descrivendo il dominio per verticali.
:::

:::solution
Il dominio è $\{0\le y\le1,\ \sqrt y\le x\le 1\}$, cioè $\{0\le x\le 1,\ 0\le y\le x^2\}$. Scambiando l'ordine:

$$\int_0^1\sin\left(x^3\right)\left(\int_0^{x^2}dy\right)dx=\int_0^1x^2\sin\left(x^3\right)dx=\left[-\frac{\cos(x^3)}{3}\right]_0^1=\frac{1-\cos 1}{3}.$$
:::
:::

:::exercise{id="E4.21" chapter="4" difficulty="medio"}
## Domanda
Calcolare

$$\int_R x\cos(xy)\,dx\,dy,\qquad R=\lbrack 0,1\rbrack \times\left[0,\frac{\pi}{2}\right].$$

:::hint
Conviene integrare prima in $y$: la primitiva di $x\cos(xy)$ rispetto a $y$ è immediata.
:::

:::solution
Integrando prima rispetto a $y$, con $x$ fissato:

$$\int_0^{\pi/2}x\cos(xy)\,dy=\left[\sin(xy)\right]_{y=0}^{y=\pi/2}=\sin\left(\frac{\pi x}{2}\right).$$

Poi

$$\int_0^1\sin\left(\frac{\pi x}{2}\right)dx=\left[-\frac{2}{\pi}\cos\left(\frac{\pi x}{2}\right)\right]_0^1=\frac{2}{\pi}.$$

L'integrale vale $\frac{2}{\pi}$.
:::
:::

:::exercise{id="E4.22" chapter="4" difficulty="difficile"}
## Domanda
Sia $D=\{(x,y):x^2+y^2\le2x\}$. Calcolare $\displaystyle\int_D\sqrt{x^2+y^2}\,dx\,dy$.

:::hint
$D$ è un disco non centrato nell'origine: in polari il bordo è $r=2\cos\theta$ con $\theta\in\left[-\frac\pi2,\frac\pi2\right]$.
:::

:::solution
Sostituendo $x=r\cos\theta$, $y=r\sin\theta$, la condizione $x^2+y^2\le 2x$ diventa $r^2\le2r\cos\theta$, cioè $0\le r\le2\cos\theta$ con $\cos\theta\ge0$, ossia $\theta\in\left[-\frac\pi2,\frac\pi2\right]$. Allora

$$\int_{-\pi/2}^{\pi/2}\int_0^{2\cos\theta}r\cdot r\,dr\,d\theta=\int_{-\pi/2}^{\pi/2}\frac{8\cos^3\theta}{3}\,d\theta.$$

Poiché $\int_{-\pi/2}^{\pi/2}\cos^3\theta\,d\theta=2\int_0^1(1-s^2)\,ds=\frac43$ (con $s=\sin\theta$), si ottiene $\frac83\cdot\frac43=\frac{32}{9}$.
:::
:::

:::exercise{id="E4.23" chapter="4" difficulty="difficile"}
## Domanda
Osservando che per $x\in(0,1)$ vale $\dfrac{x^3-1}{\ln x}=\displaystyle\int_0^3 x^y\,dy$, calcolare

$$
\int_0^1\frac{x^3-1}{\ln x}\,dx
$$

scambiando l'ordine di integrazione sul rettangolo $\lbrack 0,1\rbrack \times[0,3]$.

:::hint
Scrivi l'integrale come integrale doppio di $x^y$ su $\lbrack 0,1\rbrack \times[0,3]$ e integra prima rispetto a $x$.
:::

:::solution
Per l'identità data,

$$
I=\int_0^1\left(\int_0^3 x^y\,dy\right)dx=\int_{\lbrack 0,1\rbrack \times[0,3]}x^y\,dx\,dy.
$$

La funzione $(x,y)\mapsto x^y$ è misurabile e non negativa sul rettangolo, interpretando $0^0$ in modo arbitrario. Per il teorema di Tonelli si può scambiare l'ordine di integrazione. Per $y\ge 0$ fissato,

$$
\int_0^1 x^y\,dx=\frac{1}{y+1}.
$$

Quindi

$$
I=\int_0^3\frac{dy}{y+1}=\ln 4.
$$
:::
:::

:::exercise{id="E4.24" chapter="4" difficulty="difficile"}
## Domanda
Determinare il baricentro del solido omogeneo

$$E=\left\{(x,y,z):x^2+y^2+z^2\le4,\ z\ge\sqrt{x^2+y^2}\right\}.$$

:::hint
Per simmetria $x_G=y_G=0$. Usa le coordinate sferiche: $E$ corrisponde a $0\le\rho\le2$, $0\le\varphi\le\frac\pi4$.
:::

:::solution
Per simmetria di rotazione attorno all'asse $z$, $x_G=y_G=0$. In coordinate sferiche {{formula:4.13}}, con $z=\rho\cos\varphi$ e fattore di volume $\rho^2\sin\varphi$:

$$|E|=2\pi\int_0^2\rho^2\,d\rho\int_0^{\pi/4}\sin\varphi\,d\varphi=2\pi\cdot\frac83\left(1-\frac{\sqrt2}{2}\right)=\frac{16\pi}{3}\left(1-\frac{\sqrt2}{2}\right).$$

$$\int_Ez\,dV=2\pi\int_0^2\rho^3\,d\rho\int_0^{\pi/4}\cos\varphi\sin\varphi\,d\varphi=2\pi\cdot4\cdot\frac14=2\pi.$$

Quindi

$$z_G=\frac{2\pi}{\frac{16\pi}{3}\left(1-\frac{\sqrt2}{2}\right)}=\frac{3}{8-4\sqrt2}=\frac{3(2+\sqrt2)}{8}\approx1{,}2803300859.$$

Il valore numerico coincide con quello ottenuto ricalcolando l'espressione esatta.
:::
:::

:::exercise{id="E5.1" chapter="5" difficulty="difficile"}
## Domanda
Sia $\gamma$ la cardioide di equazione polare $r=1+\cos\theta$, $\theta\in[0,2\pi]$. Calcolare la lunghezza di $\gamma$ e l'ascissa $x_G$ del baricentro del filo omogeneo $\gamma$.

:::hint
In polari $ds=\sqrt{r^2+r'^2}\,d\theta=2|\cos(\theta/2)|\,d\theta$; poi sostituisci $\theta=2u$ e usa la simmetria.
:::

:::solution
La curva è $\gamma(\theta)=(r\cos\theta,r\sin\theta)$ con $r=1+\cos\theta$, e $|\gamma'|^2=r^2+r'^2=(1+\cos\theta)^2+\sin^2\theta=2+2\cos\theta=4\cos^2(\theta/2)$. Quindi $ds=2|\cos(\theta/2)|\,d\theta$.

Lunghezza: con $\theta=2u$,

$$L=\int_0^{2\pi}2\left|\cos\frac\theta2\right|d\theta=4\int_0^{\pi}|\cos u|\,du=8.$$

Per $x_G$ calcoliamo, con $x=(1+\cos\theta)\cos\theta=2\cos^2u\cos 2u$,

$$\int_\gamma x\,ds=\int_0^\pi 2\cos^2u\cos2u\cdot 2|\cos u|\cdot 2\,du=16\int_0^{\pi/2}\cos^3u\,(2\cos^2u-1)\,du.$$

Usando $\int_0^{\pi/2}\cos^5u\,du=\frac{8}{15}$ e $\int_0^{\pi/2}\cos^3u\,du=\frac23$ si ottiene $16\left(\frac{16}{15}-\frac{10}{15}\right)=\frac{32}{5}$. Dunque

$$x_G=\frac{32/5}{8}=\frac45.$$
:::
:::

:::exercise{id="E5.2" chapter="5" difficulty="medio"}
## Domanda
Sia $\Sigma=\{(x,y,z): z=\sqrt{x^2+y^2},\ 0\le z\le1\}$. Calcolare $\displaystyle\iint_\Sigma z\,d\sigma$.

:::hint
Per il cono $z_x^2+z_y^2=1$, quindi $d\sigma=\sqrt2\,dx\,dy$.
:::

:::solution
Con $z=\sqrt{x^2+y^2}$ si ha $z_x^2+z_y^2=1$ e $d\sigma=\sqrt2\,dx\,dy$ sul disco unitario. In polari ($z=r$):

$$\iint_\Sigma z\,d\sigma=\sqrt2\int_0^{2\pi}\int_0^1 r\cdot r\,dr\,d\theta=\sqrt2\cdot2\pi\cdot\frac13=\frac{2\sqrt2\,\pi}{3}.$$
:::
:::

:::exercise{id="E5.3" chapter="5" difficulty="medio"}
## Domanda
Calcolare l’area della calotta sferica $\{x^2+y^2+z^2=1,\ z\ge h\}$ con $0\le h<1$, e darne il valore per $h=\frac12$.

:::hint
Scrivi la calotta come grafico di $z=\sqrt{1-x^2-y^2}$ sul disco di raggio $\sqrt{1-h^2}$, con $d\sigma=\frac{dx\,dy}{z}$. Per $h=0$, considera l’integrale come improprio al bordo del disco.
:::

:::solution
Per il grafico $z=\sqrt{1-r^2}$ si ha $\sqrt{1+z_x^2+z_y^2}=\dfrac1{\sqrt{1-r^2}}$. Il dominio è il disco $r\le\sqrt{1-h^2}$. In coordinate polari,

$$A=2\pi\int_0^{\sqrt{1-h^2}}\frac{r}{\sqrt{1-r^2}}\,dr=2\pi\left[-\sqrt{1-r^2}\right]_0^{\sqrt{1-h^2}}=2\pi(1-h).$$

Per $h=0$, l’integrando è singolare in $r=1$, quindi l’integrale è improprio; converge perché $\int_0^1\frac{r}{\sqrt{1-r^2}}\,dr=1$. Per $h=\frac12$ si ottiene $A=\pi$.
:::
:::

:::exercise{id="E5.4" chapter="5" difficulty="medio"}
## Domanda
Sia $\Sigma=\{z=1-x^2-y^2,\ z\ge0\}$ orientata con normale verso l'alto e sia $F(x,y,z)=(-y,x,z^2)$. Calcolare, tramite il teorema di Stokes, la circuitazione di $F$ lungo il bordo di $\Sigma$ orientato positivamente.

:::hint
Calcola $\nabla\times F$ e il suo flusso attraverso $\Sigma$ con la formula del grafico.
:::

:::solution
Il rotore è

$$\nabla\times F=\left(0-0,\ 0-0,\ 1-(-1)\right)=(0,0,2).$$

Con $N=(2x,2y,1)$ si ha $(\nabla\times F)\cdot N=2$. Per il teorema di Stokes (del rotore) la circuitazione vale

$$\iint_{x^2+y^2\le1}2\,dx\,dy=2\pi.$$

Verifica diretta: sul bordo $z=0$, $\gamma=(\cos t,\sin t,0)$ e $F\cdot\gamma'=\sin^2t+\cos^2t=1$, integrale $2\pi$.
:::
:::

:::exercise{id="E5.5" chapter="5" difficulty="facile"}
## Domanda
Sia $\gamma$ la circonferenza di centro l'origine e raggio $2$. Calcolare $\displaystyle\int_\gamma x^2\,ds$.

:::hint
Parametrizza con $\gamma(t)=(2\cos t,2\sin t)$ e osserva che $|\gamma'(t)|=2$.
:::

:::solution
Con $\gamma(t)=(2\cos t,2\sin t)$, $t\in[0,2\pi]$, si ha $|\gamma'(t)|=2$. Quindi

$$\int_\gamma x^2\,ds=\int_0^{2\pi}4\cos^2 t\cdot 2\,dt=8\pi,$$

perché $\int_0^{2\pi}\cos^2t\,dt=\pi$.
:::
:::

:::exercise{id="E5.6" chapter="5" difficulty="medio"}
## Domanda
Determinare il baricentro di un filo omogeneo a forma di semicirconferenza $\{(x,y):x^2+y^2=R^2,\ y\ge0\}$.

:::hint
Per simmetria $x_G=0$. Per $y_G$ dividi $\int_\gamma y\,ds$ per la lunghezza.
:::

:::solution
Parametrizziamo $\gamma(t)=(R\cos t,R\sin t)$, $t\in[0,\pi]$, con $|\gamma'|=R$. La lunghezza è $\pi R$. Inoltre

$$\int_\gamma y\,ds=\int_0^\pi R\sin t\cdot R\,dt=2R^2.$$

Per {{formula:5.3}} $y_G=\dfrac{2R^2}{\pi R}=\dfrac{2R}{\pi}$, mentre $x_G=0$ per simmetria.
:::
:::

:::exercise{id="E5.7" chapter="5" difficulty="medio"}
## Domanda
Un filo ha la forma dell'elica $\gamma(t)=(\cos t,\sin t,t)$, $t\in[0,2\pi]$, e densità lineare $\rho(x,y,z)=z$. Calcolare la massa del filo.

:::hint
La massa è $\int_\gamma\rho\,ds$; calcola $|\gamma'(t)|$.
:::

:::solution
Si ha $\gamma'(t)=(-\sin t,\cos t,1)$, quindi $|\gamma'(t)|=\sqrt2$. Per {{formula:5.2}}

$$m=\int_0^{2\pi}t\sqrt2\,dt=\sqrt2\cdot\frac{(2\pi)^2}{2}=2\sqrt2\,\pi^2.$$
:::
:::

:::exercise{id="E5.8" chapter="5" difficulty="facile"}
## Domanda
Usando il teorema di Green, calcolare la circuitazione di $F(x,y)=(-y,x)$ lungo il bordo dell'ellisse $\dfrac{x^2}{4}+y^2\le1$, percorso in senso antiorario.

:::hint
Il rotore scalare $\partial_xF_2-\partial_yF_1$ è costante.
:::

:::solution
Per {{formula:5.17}}, $\oint F\cdot\tau=\iint_D(\partial_xF_2-\partial_yF_1)\,dx\,dy=\iint_D2\,dx\,dy=2\,\text{area}(D)$. L'ellisse di semiassi $2$ e $1$ ha area $2\pi$, quindi il valore è $4\pi$.
:::
:::

:::exercise{id="E5.9" chapter="5" difficulty="difficile"}
## Domanda
Sia $F(x,y,z)=(z,x,y)$ e sia $\gamma(t)=(\cos t,\sin t,t)$, $t\in[0,2\pi]$. Calcolare $\displaystyle\int_\gamma F\cdot\tau$.

:::hint
Scrivi l'integrando $t(-\sin t)+\cos^2t+\sin t$ e integra per parti il termine $t\sin t$.
:::

:::solution
Si ha $\gamma'=(-\sin t,\cos t,1)$ e $F(\gamma(t))=(t,\cos t,\sin t)$. Quindi

$$\int_\gamma F\cdot\tau=\int_0^{2\pi}\left(-t\sin t+\cos^2t+\sin t\right)dt.$$

Per parti, $\int_0^{2\pi}-t\sin t\,dt=\left[t\cos t-\sin t\right]_0^{2\pi}=2\pi$. Inoltre $\int_0^{2\pi}\cos^2t\,dt=\pi$ e $\int_0^{2\pi}\sin t\,dt=0$. In totale $3\pi$.
:::
:::

:::exercise{id="E5.10" chapter="5" difficulty="medio"}
## Domanda
Calcolare il flusso uscente di $F(x,y,z)=(x^3,y^3,z^3)$ attraverso la sfera unitaria $x^2+y^2+z^2=1$, bordo della palla unitaria $B$ orientato con la normale uscente. Il campo $F$ è di classe $C^1$ su $\mathbb{R}^3$.

:::hint
Usa il teorema della divergenza, applicabile perché $F$ è di classe $C^1$ su $\mathbb{R}^3$ e la sfera è il bordo di $B$ con normale uscente. In coordinate sferiche, $\operatorname{div}F=3\rho^2$.
:::

:::solution
Si ha $\operatorname{div}F=3(x^2+y^2+z^2)=3\rho^2$. Per il teorema della divergenza e l'integrazione in coordinate sferiche ($dV=\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$), dato che $F$ è di classe $C^1$ su $\mathbb{R}^3$ e la sfera unitaria è il bordo di $B$ orientato con la normale uscente, il flusso richiesto è

$$\iiint_{B}3\rho^2\,dV=3\int_0^{2\pi}\!\!\int_0^\pi\!\!\int_0^1\rho^4\sin\varphi\,d\rho\,d\varphi\,d\theta=3\cdot2\pi\cdot2\cdot\frac15=\frac{12\pi}{5}.$$
:::
:::

:::exercise{id="E5.11" chapter="5" difficulty="difficile"}
## Domanda
Sia $\Sigma$ la superficie parametrizzata da $\varphi(u,v)=(u+v,\ u-v,\ uv)$, $(u,v)\in[0,1]^2$, orientata dalla normale $\varphi_u\times\varphi_v$. Calcolare il flusso di $F(x,y,z)=(x,y,z)$ attraverso $\Sigma$.

:::hint
Calcola $\varphi_u\times\varphi_v$ e poi $F(\varphi)\cdot(\varphi_u\times\varphi_v)$ come funzione di $(u,v)$.
:::

:::solution
Si ha $\varphi_u=(1,1,v)$, $\varphi_v=(1,-1,u)$ e

$$\varphi_u\times\varphi_v=(1\cdot u-v\cdot(-1),\ v\cdot1-1\cdot u,\ -1-1)=(u+v,\ v-u,\ -2).$$

Inoltre $F(\varphi)=(u+v,u-v,uv)$, quindi

$$F(\varphi)\cdot(\varphi_u\times\varphi_v)=(u+v)^2-(u-v)^2-2uv=4uv-2uv=2uv.$$

La formula del flusso è

$$\text{flusso}=\iint_{\lbrack 0,1\rbrack ^2}F(\varphi(u,v))\cdot(\varphi_u\times\varphi_v)\,du\,dv.$$

Pertanto

$$\text{flusso}=\int_0^1\!\!\int_0^1 2uv\,du\,dv=\frac12.$$
:::
:::

:::exercise{id="E5.12" chapter="5" difficulty="medio"}
## Domanda
Calcolare il flusso di $F(x,y,z)=(x,y,z^2)$ attraverso la superficie laterale del cilindro $x^2+y^2=1$, $0\le z\le3$, orientata con normale uscente.

:::hint
Sulla superficie laterale $n=(x,y,0)$, quindi la componente $z$ di $F$ non contribuisce.
:::

:::solution
La normale uscente è $n=(x,y,0)$ e $F\cdot n=x^2+y^2=1$. L'area della superficie laterale è $2\pi\cdot3=6\pi$, quindi il flusso è $6\pi$.
:::
:::

:::exercise{id="E5.13" chapter="5" difficulty="medio"}
## Domanda
Sia $F(x,y,z)=(yz,\ xz+2y,\ xy+3z^2)$. Calcolare il rotore di $F$, trovare un potenziale e calcolare il lavoro lungo una curva da $(0,0,0)$ a $(1,2,1)$.

:::hint
Il rotore nullo in $\mathbb{R}^3$ garantisce l'esistenza del potenziale; integra le componenti una alla volta.
:::

:::solution
Il rotore è

$$\nabla\times F=\left(x-x,\ y-y,\ z-z\right)=(0,0,0).$$

Il dominio è $\mathbb{R}^3$, quindi $F$ è conservativo. Da $f_x=yz$: $f=xyz+c(y,z)$. Da $f_y=xz+c_y=xz+2y$: $c=y^2+d(z)$. Da $f_z=xy+d'(z)=xy+3z^2$: $d=z^3$. Dunque $f=xyz+y^2+z^3$ e il lavoro vale $f(1,2,1)-f(0,0,0)=2+4+1=7$.
:::
:::

:::exercise{id="E5.14" chapter="5" difficulty="facile"}
## Domanda
Calcolare l'area della porzione del piano $z=2x+y$ che si proietta sul quadrato $\lbrack 0,1\rbrack \times[0,1]$ del piano $xy$.

:::hint
Usa l'elemento d'area di un grafico: $d\sigma=\sqrt{1+z_x^2+z_y^2}\,dx\,dy$.
:::

:::solution
Con $z=2x+y$: $z_x=2$, $z_y=1$, quindi $\sqrt{1+4+1}=\sqrt6$, costante. Per {{formula:5.12}} l'area è $\sqrt6\cdot\text{area}(\lbrack 0,1\rbrack ^2)=\sqrt6$.
:::
:::

:::exercise{id="E5.15" chapter="5" difficulty="facile"}
## Domanda
Calcolare il flusso del campo $F(x,y,z)=(x,y,z)$ attraverso la superficie sferica $x^2+y^2+z^2=4$, orientata con la normale esterna.

:::hint
Sulla sfera $n=(x,y,z)/2$, quindi $F\cdot n$ è costante.
:::

:::solution
Con $n=\frac12(x,y,z)$ si ha $F\cdot n=\frac12(x^2+y^2+z^2)=2$, costante. Il flusso è $2\cdot\text{area}=2\cdot16\pi=32\pi$.
:::
:::

:::exercise{id="E5.16" chapter="5" difficulty="medio"}
## Domanda
Sia $F(x,y)=\left(e^x\sin y+2x,\ e^x\cos y+3\right)$. Trovare un potenziale di $F$ e calcolare il lavoro di $F$ lungo una curva qualsiasi da $(0,0)$ a $\left(1,\frac{\pi}{2}\right)$.

:::hint
Integra $F_1$ rispetto a $x$ e determina la funzione di $y$ residua con $F_2$.
:::

:::solution
Si ha $\partial_yF_1=e^x\cos y=\partial_xF_2$, quindi $F$ è conservativo in $\mathbb{R}^2$. Da $f_x=e^x\sin y+2x$ segue $f=e^x\sin y+x^2+c(y)$; da $f_y=e^x\cos y+c'(y)=e^x\cos y+3$ segue $c(y)=3y$. Dunque

$$
f(x,y)=e^x\sin y+x^2+3y.
$$

Il lavoro di un campo conservativo lungo una curva da $A$ a $B$ è $f(B)-f(A)$. Pertanto il lavoro è $f\left(1,\frac{\pi}{2}\right)-f(0,0)=e+1+\frac{3\pi}{2}$.
:::
:::

:::exercise{id="E5.17" chapter="5" difficulty="medio"}
## Domanda
Sia $\Sigma=\{z=x^2+y^2,\ z\le1\}$ orientata con normale che forma un angolo acuto con l'asse $z$. Calcolare il flusso di $F(x,y,z)=(x,y,z)$ attraverso $\Sigma$.

:::hint
Usa {{formula:5.16}}: $\iint F\cdot(-z_x,-z_y,1)\,dx\,dy$ sul disco unitario.
:::

:::solution
Con $z=x^2+y^2$ il vettore $N=(-2x,-2y,1)$ ha $N_z>0$. Allora

$$F\cdot N=-2x^2-2y^2+z=-(x^2+y^2)=-r^2.$$

Il flusso è

$$\int_0^{2\pi}\int_0^1(-r^2)\,r\,dr\,d\theta=-\frac{\pi}{2}.$$
:::
:::

:::exercise{id="E5.18" chapter="5" difficulty="facile"}
## Domanda
Determinare il valore del parametro $a\in\mathbb{R}$ per cui il campo $F(x,y)=(axy+y^2,\ x^2+2xy)$ è conservativo in $\mathbb{R}^2$ e, per tale $a$, trovarne un potenziale.

:::hint
Imponi l'uguaglianza delle derivate incrociate $\partial_yF_1=\partial_xF_2$. Il campo è di classe $C^1$ su $\mathbb{R}^2$, che è semplicemente connesso, quindi la condizione di chiusura è sufficiente per la conservatività.
:::

:::solution
Si calcola $\partial_yF_1=ax+2y$ e $\partial_xF_2=2x+2y$. Se $F$ è conservativo e di classe $C^1$, allora le derivate incrociate coincidono. L'uguaglianza per ogni $(x,y)$ implica $a=2$. Per $a=2$, il campo è chiuso e, poiché $\mathbb{R}^2$ è semplicemente connesso, è conservativo. Integrando $F_1=2xy+y^2$ rispetto a $x$ si ottiene $f(x,y)=x^2y+xy^2+c(y)$. Dalla condizione $\partial_y f=F_2$ segue $x^2+2xy+c'(y)=x^2+2xy$, dunque $c$ è costante. Un potenziale è $f(x,y)=x^2y+xy^2$.
:::
:::

:::exercise{id="E5.19" chapter="5" difficulty="facile"}
## Domanda
Sia $\Sigma$ la porzione del piano $x+y+z=1$ con $x,y,z\ge0$, orientata con normale verso l'alto. Calcolare il flusso di $F=(1,2,3)$ attraverso $\Sigma$.

:::hint
Scrivi $z=1-x-y$ e usa il flusso attraverso un grafico: $\iint F\cdot(-z_x,-z_y,1)\,dx\,dy$.
:::

:::solution
Con $z=1-x-y$ il vettore $(-z_x,-z_y,1)=(1,1,1)$ punta verso l'alto. Allora $F\cdot(1,1,1)=6$ e il dominio è il triangolo $\{x,y\ge0,\ x+y\le1\}$ di area $\frac12$. Per {{formula:5.16}} il flusso è $6\cdot\frac12=3$.
:::
:::

:::exercise{id="E5.20" chapter="5" difficulty="difficile"}
## Domanda
Determinare la quota $z_G$ del baricentro di un guscio emisferico omogeneo $\Sigma=\{x^2+y^2+z^2=R^2,\ z\ge0\}$.

:::hint
Scrivi $\Sigma$ come grafico di $z=\sqrt{R^2-x^2-y^2}$: allora $d\sigma=\frac Rz\,dx\,dy$ e $z\,d\sigma=R\,dx\,dy$. L’integrando dell’area è improprio sul bordo del disco, ma l’integrale converge; puoi calcolare l’area in coordinate polari.
:::

:::solution
La proiezione di $\Sigma$ sul piano $xy$ è il disco $D=\{(x,y):x^2+y^2\le R^2\}$. Sul grafico $z=\sqrt{R^2-x^2-y^2}$ si ha $z_x^2+z_y^2+1=\frac{R^2}{z^2}$, quindi $d\sigma=\frac Rz\,dx\,dy$. L’integrale dell’area è improprio sul bordo di $D$, dove $z=0$, ma converge: in coordinate polari

$$\operatorname{Area}(\Sigma)=\iint_D\frac R{\sqrt{R^2-x^2-y^2}}\,dx\,dy=2\pi R\int_0^R\frac r{\sqrt{R^2-r^2}}\,dr=2\pi R^2.$$

Poiché $z\,d\sigma=R\,dx\,dy$, si ottiene

$$\iint_\Sigma z\,d\sigma=R\iint_D dx\,dy=\pi R^3,\qquad z_G=\frac{\iint_\Sigma z\,d\sigma}{\operatorname{Area}(\Sigma)}=\frac{\pi R^3}{2\pi R^2}=\frac R2.$$
:::
:::

:::exercise{id="E5.21" chapter="5" difficulty="facile"}
## Domanda
Sia $\gamma(t)=(3t,4t)$, $t\in[0,1]$. Calcolare l'integrale curvilineo $\displaystyle\int_\gamma (x+y)\,ds$.

:::hint
Calcola $|\gamma'(t)|$, che è costante, e riduci tutto a un integrale in $t$.
:::

:::solution
Si ha $\gamma'(t)=(3,4)$, quindi $|\gamma'(t)|=5$. Allora, con {{formula:5.1}},

$$\int_\gamma (x+y)\,ds=\int_0^1 (3t+4t)\cdot 5\,dt=35\int_0^1 t\,dt=\frac{35}{2}.$$
:::
:::

:::exercise{id="E5.22" chapter="5" difficulty="difficile"}
## Domanda
Sia $\Sigma=\{z=1-x^2-y^2,\ z\ge0\}$ orientata con normale verso l'alto e sia $F(x,y,z)=(x,y,z+1)$. Calcolare il flusso di $F$ attraverso $\Sigma$ chiudendo la superficie con il disco $D=\{z=0,\ x^2+y^2\le1\}$ e usando il teorema della divergenza. Verificare poi il risultato con un calcolo diretto.

:::hint
Il flusso totale uscente dal solido è $\iiint 3\,dV$; sottrai il flusso attraverso il disco con normale $-k$.
:::

:::solution
Sia $E=\{0\le z\le1-x^2-y^2\}$. Si ha $\operatorname{div}F=3$ e, integrando per fili (o in coordinate cilindriche),

$$
\operatorname{vol}(E)=\int_0^{2\pi}\int_0^1(1-r^2)\,r\,dr\,d\theta=\frac\pi2,
$$

quindi il flusso totale uscente è $\frac{3\pi}{2}$.

Sul disco, con normale esterna $-k$: $F\cdot(-k)=-(z+1)=-1$, e il flusso è $-\pi$. Pertanto

$$
\Phi_\Sigma=\frac{3\pi}{2}-(-\pi)=\frac{5\pi}{2}.
$$

Verifica diretta: $N=(2x,2y,1)$, $F\cdot N=2x^2+2y^2+(1-r^2)+1=2+r^2$, e

$$
\int_0^{2\pi}\int_0^1(2+r^2)\,r\,dr\,d\theta=2\pi\left(1+\frac14\right)=\frac{5\pi}{2}.
$$
:::
:::

:::exercise{id="E5.23" chapter="5" difficulty="medio"}
## Domanda
Sia $\gamma(t)=\left(t,\dfrac{t^2}{2}\right)$, $t\in[0,1]$. Calcolare $\displaystyle\int_\gamma x\,ds$.

:::hint
Il modulo della velocità è $\sqrt{1+t^2}$; usa la sostituzione $u=1+t^2$.
:::

:::solution
Si ha $\gamma'(t)=(1,t)$, quindi $|\gamma'(t)|=\sqrt{1+t^2}$. Allora

$$\int_\gamma x\,ds=\int_0^1 t\sqrt{1+t^2}\,dt=\left[\frac13(1+t^2)^{3/2}\right]_0^1=\frac{2\sqrt2-1}{3}.$$
:::
:::

:::exercise{id="E5.24" chapter="5" difficulty="facile"}
## Domanda
Calcolare $\displaystyle\iint_\Sigma z^2\,d\sigma$, dove $\Sigma$ è la superficie sferica $x^2+y^2+z^2=4$.

:::hint
Per simmetria $\iint x^2=\iint y^2=\iint z^2$; somma e usa $x^2+y^2+z^2=4$.
:::

:::solution
Per simmetria i tre integrali di $x^2$, $y^2$, $z^2$ coincidono, quindi

$$\iint_\Sigma z^2\,d\sigma=\frac13\iint_\Sigma(x^2+y^2+z^2)\,d\sigma=\frac13\cdot4\cdot\text{area}(\Sigma)=\frac43\cdot16\pi=\frac{64\pi}{3}.$$
:::
:::

:::exercise{id="E5.25" chapter="5" difficulty="medio"}
## Domanda
Sia $F(x,y)=\left(-\dfrac{y}{x^2+y^2},\ \dfrac{x}{x^2+y^2}\right)$ in $\mathbb{R}^2\setminus\{(0,0)\}$. (a) Verificare che $\partial_yF_1=\partial_xF_2$. (b) Calcolare la circuitazione lungo la circonferenza unitaria percorsa in senso antiorario. (c) $F$ è conservativo in $\mathbb{R}^2\setminus\{(0,0)\}$?

:::hint
Il dominio non è semplicemente connesso: l'irrotazionalità non basta. Calcola direttamente la circuitazione.
:::

:::solution
(a) $\partial_yF_1=-\dfrac{(x^2+y^2)-2y^2}{(x^2+y^2)^2}=\dfrac{y^2-x^2}{(x^2+y^2)^2}$ e $\partial_xF_2=\dfrac{(x^2+y^2)-2x^2}{(x^2+y^2)^2}=\dfrac{y^2-x^2}{(x^2+y^2)^2}$: uguali.

(b) Con $\gamma(t)=(\cos t,\sin t)$ si ha $F(\gamma)=(-\sin t,\cos t)$ e $\gamma'=(-\sin t,\cos t)$, quindi

$$\oint_\gamma F\cdot\tau=\int_0^{2\pi}1\,dt=2\pi.$$

(c) La circuitazione su una curva chiusa è non nulla, quindi $F$ non è conservativo in $\mathbb{R}^2\setminus\{(0,0)\}$ (pur essendo irrotazionale). È invece conservativo nel semipiano $x>0$, dove un potenziale è $\arctan(y/x)$.
:::
:::

:::exercise{id="E5.26" chapter="5" difficulty="medio"}
## Domanda
Sia $\gamma(t)=(\cos^3t,\sin^3t)$, $t\in[0,2\pi]$, l'asteroide. Calcolare la lunghezza di $\gamma$ e l'area della regione che racchiude.

:::hint
Per la lunghezza $|\gamma'|=3|\sin t\cos t|$ (usa la simmetria). Per l'area usa $\frac12\oint(x\,dy-y\,dx)$ e $\int_0^{2\pi}\sin^2t\cos^2t\,dt=\frac\pi4$.
:::

:::solution
Si ha $\gamma'=(-3\cos^2t\sin t,\ 3\sin^2t\cos t)$, quindi $|\gamma'|=3|\sin t\cos t|$. Per simmetria

$$L=4\int_0^{\pi/2}3\sin t\cos t\,dt=4\cdot\frac32=6.$$

Per l'area: $x\,y'-y\,x'=3\cos^4t\sin^2t+3\sin^4t\cos^2t=3\sin^2t\cos^2t$. Allora

$$A=\frac12\int_0^{2\pi}3\sin^2t\cos^2t\,dt=\frac32\cdot\frac\pi4=\frac{3\pi}{8}.$$
:::
:::

:::exercise{id="E5.27" chapter="5" difficulty="medio"}
## Domanda
Calcolare l'area del paraboloide $\Sigma=\{(x,y,z): z=x^2+y^2,\ z\le1\}$.

:::hint
Usa l'area di un grafico sul disco unitario e passa in coordinate polari.
:::

:::solution
Con $z=x^2+y^2$ si ha $\sqrt{1+4x^2+4y^2}$ e il dominio è il disco $x^2+y^2\le1$. In polari:

$$A=\int_0^{2\pi}\int_0^1\sqrt{1+4r^2}\,r\,dr\,d\theta=2\pi\left[\frac1{12}(1+4r^2)^{3/2}\right]_0^1=\frac{\pi(5\sqrt5-1)}{6}.$$
:::
:::

:::exercise{id="E5.28" chapter="5" difficulty="medio"}
## Domanda
Sia $\Sigma$ la superficie laterale del cilindro $x^2+y^2=1$, $0\le z\le2$. Calcolare $\displaystyle\iint_\Sigma (x^2+z)\,d\sigma$.

:::hint
Parametrizza con $(\cos\theta,\sin\theta,z)$: l'elemento d'area è $d\theta\,dz$.
:::

:::solution
Con $\varphi(\theta,z)=(\cos\theta,\sin\theta,z)$, $\theta\in[0,2\pi]$, $z\in[0,2]$, si ha $|\varphi_\theta\times\varphi_z|=1$. Quindi

$$\iint_\Sigma(x^2+z)\,d\sigma=\int_0^2\!\!\int_0^{2\pi}(\cos^2\theta+z)\,d\theta\,dz=2\pi+4\pi=6\pi.$$
:::
:::

:::exercise{id="E5.29" chapter="5" difficulty="facile"}
## Domanda
Usando la formula dell'area tramite circuitazione, $A=\frac12\oint(x\,dy-y\,dx)$, calcolare l'area dell'ellisse di semiassi $3$ e $2$, parametrizzata da $\gamma(t)=(3\cos t,2\sin t)$, $t\in[0,2\pi]$.

:::hint
Calcola $x\,y'-y\,x'$ lungo la parametrizzazione.
:::

:::solution
Si ha $x\,y'-y\,x'=3\cos t\cdot2\cos t-2\sin t\cdot(-3\sin t)=6$. Per {{formula:5.18}}

$$A=\frac12\int_0^{2\pi}6\,dt=6\pi.$$
:::
:::

:::exercise{id="E5.30" chapter="5" difficulty="facile"}
## Domanda
Calcolare il flusso uscente di $F(x,y,z)=(x^2,y^2,z^2)$ dal cubo $\lbrack 0,1\rbrack ^3$.

:::hint
Applica il teorema della divergenza e integra $\operatorname{div}F$ sul cubo.
:::

:::solution
Si ha $\operatorname{div}F=2(x+y+z)$.Per il teorema della divergenza

$$\iiint_\Omega\operatorname{div}\mathbf{F}\,dx\,dy\,dz=\iint_{\partial\Omega}\mathbf{F}\cdot\mathbf{n}\,d\sigma$$ il flusso è

$$\iiint_{\lbrack 0,1\rbrack ^3}2(x+y+z)\,dx\,dy\,dz=2\cdot3\cdot\frac12=3.$$
:::
:::

:::exercise{id="E5.31" chapter="5" difficulty="medio"}
## Domanda
Sia $\Sigma=\{z=\sqrt{x^2+y^2},\ 0\le z\le1\}$ orientata con normale avente componente $z$ negativa. Calcolare il flusso di $F(x,y,z)=(x,y,0)$ attraverso $\Sigma$.

:::hint
Calcola prima il flusso con normale verso l'alto e poi cambia segno {{formula:5.15}}.
:::

:::solution
Con la normale verso l'alto, per $r=\sqrt{x^2+y^2}>0$ si ha $N=(-z_x,-z_y,1)=\left(-\frac{x}{r},-\frac{y}{r},1\right)$. Il vertice $r=0$ è un singolo punto, quindi ha misura nulla e non influisce sul flusso. Allora $F\cdot N=-\frac{x^2+y^2}{r}=-r$ e

$$\iint F\cdot N\,dx\,dy=\int_0^{2\pi}\int_0^1(-r)\,r\,dr\,d\theta=-\frac{2\pi}{3}.$$

Invertendo l'orientazione, il flusso cambia segno. Pertanto, con la normale avente componente $z$ negativa, il flusso è $\frac{2\pi}{3}$. $\square$
:::
:::

:::exercise{id="E5.32" chapter="5" difficulty="difficile"}
## Domanda
Sia $F(x,y)=\left(\dfrac{x}{x^2+y^2}+y,\ \dfrac{y}{x^2+y^2}+x\right)$ in $\mathbb{R}^2\setminus\{(0,0)\}$. Mostrare che $F$ è conservativo in tale dominio, trovarne un potenziale e calcolare il lavoro lungo una curva da $(1,0)$ a $(0,2)$ contenuta nel dominio, e la circuitazione lungo la circonferenza di raggio $3$ centrata nell'origine.

:::hint
Cerca un potenziale della forma $\frac12\ln(x^2+y^2)+g$; poiché esiste un potenziale globale, la non semplice connessione non è un ostacolo.
:::

:::solution
Posto $f(x,y)=\frac12\ln(x^2+y^2)+xy$, definita e $C^1$ in $\mathbb{R}^2\setminus\{(0,0)\}$, si ha

$$f_x=\frac{x}{x^2+y^2}+y,\qquad f_y=\frac{y}{x^2+y^2}+x,$$

quindi $\nabla f=F$ e $F$ è conservativo nel dominio (esiste un potenziale globale).

Il lavoro da $(1,0)$ a $(0,2)$ è

$$f(0,2)-f(1,0)=\tfrac12\ln4+0-\left(\tfrac12\ln1+0\right)=\ln2.$$

La circuitazione lungo ogni curva chiusa contenuta nel dominio, in particolare sulla circonferenza di raggio $3$, è $0$.
:::
:::

:::exercise{id="E5.33" chapter="5" difficulty="facile"}
## Domanda
Calcolare il lavoro del campo $F(x,y)=(y,2x)$ lungo la circonferenza unitaria $\gamma(t)=(\cos t,\sin t)$, $t\in[0,2\pi]$, percorsa in senso antiorario.

:::hint
Calcola $F(\gamma(t))\cdot\gamma'(t)$ e integra su $\lbrack 0,2\pi\rbrack $.
:::

:::solution
Si ha $\gamma'(t)=(-\sin t,\cos t)$ e $F(\gamma(t))=(\sin t,2\cos t)$. Quindi

$$\int_\gamma F\cdot\tau=\int_0^{2\pi}\left(-\sin^2t+2\cos^2t\right)dt=-\pi+2\pi=\pi.$$
:::
:::

:::exercise{id="E5.34" chapter="5" difficulty="medio"}
## Domanda
Sia $F(x,y)=(x^2,xy)$. Calcolare il lavoro di $F$ da $(0,0)$ a $(1,1)$ lungo (a) l'arco di parabola $\gamma_1(t)=(t,t^2)$, $t\in[0,1]$; (b) il segmento $\gamma_2(t)=(t,t)$, $t\in[0,1]$. Cosa se ne deduce sul campo?

:::hint
Applica {{formula:5.4}} a entrambe le curve e confronta i risultati.
:::

:::solution
(a) $\gamma_1'=(1,2t)$, $F(\gamma_1)=(t^2,t^3)$, quindi

$$\int_{\gamma_1}F\cdot\tau=\int_0^1(t^2+2t^4)\,dt=\frac13+\frac25=\frac{11}{15}.$$

(b) $\gamma_2'=(1,1)$, $F(\gamma_2)=(t^2,t^2)$, quindi

$$\int_{\gamma_2}F\cdot\tau=\int_0^1 2t^2\,dt=\frac23=\frac{10}{15}.$$

I due valori sono diversi (differenza $\frac1{15}$): il lavoro dipende dal cammino, perciò $F$ non è conservativo. Infatti $\partial_xF_2-\partial_yF_1=y\ne0$.
:::
:::

:::exercise{id="E5.35" chapter="5" difficulty="facile"}
## Domanda
Sia $F(x,y)=(2xy+1,\ x^2+3)$. Verificare che $F$ è conservativo, trovarne un potenziale e calcolare il lavoro lungo una qualsiasi curva da $(0,0)$ a $(1,2)$.

:::hint
Controlla $\partial_yF_1=\partial_xF_2$; integra $F_1$ rispetto a $x$ e correggi con una funzione di $y$.
:::

:::solution
Si ha $\partial_yF_1=2x=\partial_xF_2$ e il dominio è $\mathbb{R}^2$, quindi $F$ è conservativo {{formula:5.8}}. Integrando $F_1$ in $x$: $f=x^2y+x+c(y)$. Derivando in $y$: $x^2+c'(y)=x^2+3$, da cui $c(y)=3y$. Un potenziale è

$$f(x,y)=x^2y+x+3y.$$

Il lavoro è $f(1,2)-f(0,0)=2+1+6=9$.
:::
:::

:::exercise{id="E5.36" chapter="5" difficulty="medio"}
## Domanda
Calcolare la circuitazione di $F(x,y)=(x^2y,\,-xy^2)$ lungo la circonferenza unitaria percorsa in senso antiorario.

:::hint
Applica il teorema di Green sul disco unitario e passa in polari.
:::

:::solution
Si ha $\partial_xF_2-\partial_yF_1=-y^2-x^2$. Per {{formula:5.17}}

$$\oint F\cdot\tau=-\iint_{x^2+y^2\le1}(x^2+y^2)\,dx\,dy=-\int_0^{2\pi}\int_0^1r^3\,dr\,d\theta=-\frac{\pi}{2}.$$
:::
:::

:::exercise{id="E6.1" chapter="6" difficulty="facile"}
## Domanda
Calcolare la somma della serie $$\sum_{n=0}^{\infty}3\left(\frac25\right)^n.$$

:::hint
È una serie geometrica di ragione $\frac25$: usa {{formula:6.4}}.
:::

:::solution
La ragione è $q=\frac25$, con $|q|<1$, quindi la serie converge e

$$\sum_{n=0}^{\infty}3q^n=\frac{3}{1-q}=\frac{3}{3/5}=5.$$
:::
:::

:::exercise{id="E6.2" chapter="6" difficulty="facile"}
## Domanda
Calcolare la somma della serie $$\sum_{n=1}^{\infty}\frac{1}{n(n+1)}.$$

:::hint
Scomponi $\frac{1}{n(n+1)}$ in fratti semplici e scrivi la somma parziale {{formula:6.5}}.
:::

:::solution
Vale $\frac{1}{n(n+1)}=\frac1n-\frac1{n+1}$. La somma parziale è telescopica:

$$S_N=\sum_{n=1}^N\left(\frac1n-\frac1{n+1}\right)=1-\frac1{N+1}.$$

Per $N\to\infty$, $S_N\to1$.
:::
:::

:::exercise{id="E6.3" chapter="6" difficulty="medio"}
## Domanda
Al variare di $\alpha>0$, stabilire per quali valori la serie

$$
\sum_{n=1}^{\infty}\frac{\sqrt{n+1}-\sqrt n}{n^{\alpha}}
$$

converge.

:::hint
Razionalizza $\sqrt{n+1}-\sqrt n$ e confronta asintoticamente con una serie armonica generalizzata.
:::

:::solution
Si ha

$$\sqrt{n+1}-\sqrt n=\frac{1}{\sqrt{n+1}+\sqrt n}\sim\frac{1}{2\sqrt n},$$

quindi il termine generale, positivo, è asintotico a $\frac12\cdot\frac{1}{n^{\alpha+1/2}}$. Per il confronto asintotico e per {{formula:6.7}}, la serie converge se e solo se $\alpha+\frac12>1$, cioè $\alpha>\frac12$.
:::
:::

:::exercise{id="E6.4" chapter="6" difficulty="facile"}
## Domanda
Stabilire se la serie $$\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}$$ converge assolutamente.

:::hint
Studia la serie dei valori assoluti.
:::

:::solution
La serie dei valori assoluti è $\sum\frac1{n^2}$, convergente ($p=2>1$). Dunque la serie converge assolutamente e quindi, per {{formula:6.11}}, anche semplicemente.
:::
:::

:::exercise{id="E6.5" chapter="6" difficulty="facile"}
## Domanda
Calcolare $$\sum_{n=3}^{\infty}\left(\frac12\right)^n.$$

:::hint
Applica {{formula:6.4}} con primo termine $\left(\frac12\right)^3$.
:::

:::solution
È una serie geometrica di ragione $q=\frac12$ e primo termine $q^3=\frac18$. La somma è

$$\frac{q^3}{1-q}=\frac{1/8}{1/2}=\frac14.$$
:::
:::

:::exercise{id="E6.6" chapter="6" difficulty="difficile"}
## Domanda
Calcolare la somma della serie $$\sum_{n=1}^{\infty}\log\left(1-\frac{1}{(n+1)^2}\right).$$

:::hint
Scrivi $1-\frac1{(n+1)^2}=\frac{n(n+2)}{(n+1)^2}$ e usa le proprietà del logaritmo per ottenere una somma parziale che si calcola in forma chiusa.
:::

:::solution
Poiché $1-\frac1{(n+1)^2}=\frac{(n+1)^2-1}{(n+1)^2}=\frac{n(n+2)}{(n+1)^2}$, la somma parziale è il logaritmo di un prodotto:

$$S_N=\log\prod_{n=1}^N\frac{n}{n+1}\cdot\frac{n+2}{n+1}.$$

I due prodotti sono telescopici:

$$\prod_{n=1}^N\frac{n}{n+1}=\frac1{N+1},\qquad \prod_{n=1}^N\frac{n+2}{n+1}=\frac{N+2}{2}.$$

Quindi $S_N=\log\frac{N+2}{2(N+1)}\to\log\frac12=-\log2$.
:::
:::

:::exercise{id="E6.7" chapter="6" difficulty="difficile"}
## Domanda
Stabilire il carattere della serie $$\sum_{n=1}^{\infty}\frac{2^n+n!}{n^n+1}.$$

:::hint
Metti in evidenza $n!$ al numeratore e $n^n$ al denominatore e usa la gerarchia degli infiniti {{formula:6.2}} per ricondurti a $\frac{n!}{n^n}$.
:::

:::solution
Posto $b_n=\frac{n!}{n^n}$, si ha

$$\frac{2^n+n!}{n^n+1}=b_n\cdot\frac{1+\frac{2^n}{n!}}{1+\frac1{n^n}}.$$

Poiché $n!$ domina $2^n$, $\frac{2^n}{n!}\to0$, e $\frac1{n^n}\to0$: il fattore finale tende a $1$. Per il confronto asintotico la serie ha lo stesso carattere di $\sum b_n$. Per questa, con il criterio del rapporto,

$$\frac{b_{n+1}}{b_n}=\frac{(n+1)\,n^n}{(n+1)^{n+1}}=\left(\frac n{n+1}\right)^n\to\frac1e<1,$$

quindi $\sum b_n$ converge {{formula:6.8}}. Ne segue che la serie data converge.
:::
:::

:::exercise{id="E6.8" chapter="6" difficulty="facile"}
## Domanda
Stabilire il carattere della serie $$\sum_{n=1}^{\infty}\frac{n+1}{n^3+2}.$$

:::hint
Confronta asintoticamente con una serie armonica generalizzata {{formula:6.7}}.
:::

:::solution
I termini sono positivi. Si ha

$$\frac{n+1}{n^3+2}\Big/\frac1{n^2}=\frac{n^3+n^2}{n^3+2}\to1.$$

Per il criterio del confronto asintotico la serie ha lo stesso carattere di $\sum\frac1{n^2}$, che converge ($p=2>1$). La serie converge.
:::
:::

:::exercise{id="E6.9" chapter="6" difficulty="facile"}
## Domanda
Calcolare il limite $$\lim_{n\to\infty}\frac{3n^2+n}{5n^2-2}.$$

:::hint
Raccogli $n^2$ al numeratore e al denominatore.
:::

:::solution
Dividendo numeratore e denominatore per $n^2$ si ottiene

$$\frac{3n^2+n}{5n^2-2}=\frac{3+\frac{1}{n}}{5-\frac{2}{n^2}}.$$

Poiché $\frac1n\to 0$ e $\frac{2}{n^2}\to 0$, il limite vale $\frac{3}{5}$.
:::
:::

:::exercise{id="E6.10" chapter="6" difficulty="difficile"}
## Domanda
Sia $a_1=\sqrt2$ e $a_{n+1}=\sqrt{2+a_n}$ per $n\ge1$. Dimostrare che la successione ammette limite e calcolarlo.

:::hint
Mostra per induzione che $a_n<2$ e che $a_n$ è crescente; poi passa al limite nella relazione di ricorrenza.
:::

:::solution
**Limitatezza.** Si ha $a_1=\sqrt2<2$. Se $a_n<2$, allora $a_{n+1}=\sqrt{2+a_n}<\sqrt4=2$. Dunque $0<a_n<2$ per ogni $n$.

**Monotonia.** Poiché $a_n>0$, $a_{n+1}>a_n$ equivale a $a_{n+1}^2>a_n^2$, cioè

$$a_{n+1}^2-a_n^2=2+a_n-a_n^2=(2-a_n)(1+a_n)>0,$$

vero perché $a_n<2$. La successione è quindi crescente e limitata, perciò converge a un limite $L$ con $0<L\le 2$.

**Valore del limite.** Passando al limite in $a_{n+1}=\sqrt{2+a_n}$ si ottiene $L=\sqrt{2+L}$, cioè $L^2-L-2=0$, con soluzioni $L=2$ e $L=-1$. Essendo $L>0$, si ha $L=2$.
:::
:::

:::exercise{id="E6.11" chapter="6" difficulty="difficile"}
## Domanda
Usando il prodotto di Cauchy {{formula:6.13}} della serie geometrica $\sum_{n=0}^\infty\left(\frac12\right)^n$ per se stessa, calcolare

$$
\sum_{n=0}^{\infty}\frac{n+1}{2^n}.
$$

Giustificare l'uso del prodotto.

:::hint
Calcola il termine $c_n=\sum_{k=0}^n a_kb_{n-k}$ con $a_k=b_k=2^{-k}$.
:::

:::solution
Siano $a_k=b_k=\left(\frac12\right)^k$. La serie $\sum a_k$ converge assolutamente (è geometrica con ragione $\frac12$ a termini positivi) e ha somma $2$. Il prodotto di Cauchy ha termine generale

$$c_n=\sum_{k=0}^n\frac1{2^k}\cdot\frac1{2^{n-k}}=\sum_{k=0}^n\frac1{2^n}=\frac{n+1}{2^n}.$$

Poiché almeno una delle due serie converge assolutamente e l'altra converge, il prodotto converge e la sua somma è il prodotto delle somme:

$$\sum_{n=0}^\infty\frac{n+1}{2^n}=2\cdot2=4.$$
:::
:::

:::exercise{id="E6.12" chapter="6" difficulty="facile"}
## Domanda
Calcolare $$\sum_{n=1}^{\infty}\left(\frac1{2^n}+\frac1{3^n}\right).$$

:::hint
Somma le due serie geometriche separatamente {{formula:6.12}}.
:::

:::solution
Entrambe convergono e

$$\sum_{n=1}^\infty\frac1{2^n}=\frac{1/2}{1-1/2}=1,\qquad\sum_{n=1}^\infty\frac1{3^n}=\frac{1/3}{1-1/3}=\frac12.$$

La somma è $1+\frac12=\frac32$.
:::
:::

:::exercise{id="E6.13" chapter="6" difficulty="medio"}
## Domanda
Stabilire il carattere della serie $$\sum_{n=1}^{\infty}\frac{n^n}{3^n\,n!}.$$

:::hint
Usa il criterio del rapporto e ricorda $\left(1+\frac1n\right)^n\to e$.
:::

:::solution
Sia $a_n=\frac{n^n}{3^nn!}>0$. Allora

$$\frac{a_{n+1}}{a_n}=\frac{(n+1)^{n+1}}{3^{n+1}(n+1)!}\cdot\frac{3^nn!}{n^n}=\frac{(n+1)^{n}}{3\,n^n}=\frac13\left(1+\frac1n\right)^n\to\frac e3.$$

Poiché $\frac e3\approx0{,}906<1$, per {{formula:6.8}} la serie converge.
:::
:::

:::exercise{id="E6.14" chapter="6" difficulty="medio"}
## Domanda
Stabilire il carattere della serie $$\sum_{k=1}^{\infty}\frac{\sin k}{k^{3/2}+3}.$$

:::hint
Il segno non è alterno regolare, ma $|\sin k|\le1$: studia la convergenza assoluta.
:::

:::solution
Si ha

$$\left|\frac{\sin k}{k^{3/2}+3}\right|\le\frac1{k^{3/2}+3}<\frac1{k^{3/2}}.$$

La serie $\sum\frac1{k^{3/2}}$ converge ($p=\frac32>1$), quindi per confronto converge la serie dei valori assoluti. La serie data converge assolutamente.
:::
:::

:::exercise{id="E6.15" chapter="6" difficulty="medio"}
## Domanda
La serie $\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^2}$ converge. Determinare il più piccolo $N$ per cui la stima di Leibniz {{formula:6.10}} garantisce $|S-S_N|<\frac1{50}$, dove $S$ è la somma e $S_N$ la ridotta $N$-esima.

:::hint
L'errore è maggiorato dal primo termine trascurato, $\frac{1}{(N+1)^2}$.
:::

:::solution
I termini $\frac1{n^2}$ sono decrescenti e infinitesimi, quindi vale la stima

$$|S-S_N|\le\frac1{(N+1)^2}.$$

Imponiamo $\frac1{(N+1)^2}<\frac1{50}$, cioè $(N+1)^2>50$, cioè $N+1\ge8$ e $N\ge7$. Verifica: per $N=7$ si ha $\frac1{64}<\frac1{50}$; per $N=6$ la maggiorazione vale $\frac1{49}>\frac1{50}$ e non basta.
:::
:::

:::exercise{id="E6.16" chapter="6" difficulty="medio"}
## Domanda
Calcolare la somma della serie $$\sum_{n=2}^{\infty}\frac{1}{n^2-1}.$$

:::hint
Usa $n^2-1=(n-1)(n+1)$ e scomponi in fratti semplici: la somma parziale è telescopica, ma i termini che si elidono distano due indici.
:::

:::solution
Si ha $\frac{1}{n^2-1}=\frac12\left(\frac1{n-1}-\frac1{n+1}\right)$. Quindi

$$S_N=\frac12\left[\sum_{n=2}^{N}\frac1{n-1}-\sum_{n=2}^{N}\frac1{n+1}\right]=\frac12\left[1+\frac12-\frac1N-\frac1{N+1}\right],$$

perché tutti i termini da $\frac13$ a $\frac1{N-1}$ si elidono. Per $N\to\infty$:

$$S_N\to\frac12\cdot\frac32=\frac34.$$
:::
:::

:::exercise{id="E6.17" chapter="6" difficulty="facile"}
## Domanda
Stabilire se la serie $$\sum_{n=1}^{\infty}\frac{(-1)^n}{n}$$ converge semplicemente, assolutamente o non converge.

:::hint
Applica il criterio di Leibniz e studia la serie dei valori assoluti.
:::

:::solution
I valori $\frac1n$ sono positivi, decrescenti e infinitesimi: per il criterio di Leibniz la serie converge. La serie dei valori assoluti è $\sum\frac1n$, armonica, divergente ({{formula:6.7}} con $p=1$). Dunque la serie converge semplicemente ma non assolutamente.
:::
:::

:::exercise{id="E6.18" chapter="6" difficulty="medio"}
## Domanda
Calcolare il limite $$\lim_{n\to\infty}\left(1+\frac{2}{n}\right)^{3n}.$$

:::hint
Riscrivi la successione come esponenziale di un logaritmo e usa lo sviluppo $\log(1+t)=t+o(t)$ per $t\to0$.
:::

:::solution
Scriviamo

$$\left(1+\frac{2}{n}\right)^{3n}=\exp\!\left(3n\log\left(1+\frac{2}{n}\right)\right).$$

Poiché $\log\left(1+\frac2n\right)=\frac2n+o\left(\frac1n\right)$, si ha $3n\log\left(1+\frac2n\right)=6+o(1)\to 6$. Per continuità dell'esponenziale il limite è $e^6$.
:::
:::

:::exercise{id="E6.19" chapter="6" difficulty="difficile"}
## Domanda
Al variare di $a>0$, stabilire il carattere della serie

$$
\sum_{n=1}^{\infty}\frac{a^n\,n!}{n^n}.
$$

Discutere anche il caso in cui il criterio del rapporto non è conclusivo.

:::hint
Il rapporto tende ad $a/e$. Per $a=e$ osserva che $\left(1+\frac1n\right)^n<e$ per ogni $n$ e studia la monotonia dei termini.
:::

:::solution
Sia $a_n=\frac{a^nn!}{n^n}>0$. Allora

$$\frac{a_{n+1}}{a_n}=a\,\frac{(n+1)\,n^n}{(n+1)^{n+1}}=a\left(\frac{n}{n+1}\right)^n=\frac{a}{(1+1/n)^n}\to\frac ae.$$

Per {{formula:6.8}}: se $a<e$ la serie converge; se $a>e$ diverge.

Se $a=e$ il rapporto è $\frac{e}{(1+1/n)^n}$. Poiché $\left(1+\frac1n\right)^n$ è crescente con limite $e$, si ha $\left(1+\frac1n\right)^n<e$, quindi $\frac{a_{n+1}}{a_n}>1$ per ogni $n$. I termini sono strettamente crescenti, perciò $a_n\ge a_1=e>0$ e non tendono a zero: la serie diverge {{formula:6.6}}.
:::
:::

:::exercise{id="E6.20" chapter="6" difficulty="medio"}
## Domanda
Calcolare $$\sum_{n=1}^{\infty}\left(\frac{3}{n(n+1)}-2\left(\frac14\right)^n\right).$$

:::hint
Le due serie convergono: usa la linearità e calcola ciascuna separatamente.
:::

:::solution
Per linearità {{formula:6.12}}, poiché entrambe convergono,

$$3\sum_{n=1}^\infty\frac1{n(n+1)}-2\sum_{n=1}^\infty\left(\frac14\right)^n.$$

La prima serie è telescopica e vale $1$. La seconda è geometrica: $\frac{1/4}{1-1/4}=\frac13$. Il risultato è $3\cdot1-2\cdot\frac13=\frac73$.
:::
:::

:::exercise{id="E6.21" chapter="6" difficulty="medio"}
## Domanda
Stabilire il carattere della serie $$\sum_{n=1}^{\infty}(-1)^n\frac{n}{n+1}.$$

:::hint
Il termine generale non è infinitesimo. Studia separatamente le somme parziali di indice pari e dispari.
:::

:::solution
Sia $a_n=(-1)^n\frac n{n+1}$. Poiché $|a_n|\to1$, la serie non converge. Per distinguere tra divergenza e indeterminazione calcoliamo

$$a_{2k-1}+a_{2k}=-\frac{2k-1}{2k}+\frac{2k}{2k+1}=\frac{1}{2k(2k+1)}\in\left(0,\frac1{4k^2}\right\rbrack .$$

Quindi $S_{2k}=\sum_{j=1}^k\frac1{2j(2j+1)}$ converge a un numero $S$ (serie a termini positivi maggiorata da $\sum\frac1{4j^2}$). Inoltre

$$S_{2k+1}=S_{2k}+a_{2k+1}=S_{2k}-\frac{2k+1}{2k+2}\to S-1.$$

Le ridotte pari e dispari hanno limiti diversi, quindi $S_N$ non ha limite: la serie è indeterminata.
:::
:::

:::exercise{id="E6.22" chapter="6" difficulty="medio"}
## Domanda
Determinare i valori di $p\in\mathbb{R}$ per i quali converge la serie

$$
\sum_{n=1}^{\infty}\frac{n^p}{n^3+1}.
$$

:::hint
Il termine è asintotico a $n^{p-3}$: applica {{formula:6.7}}.
:::

:::solution
Per ogni $p$ i termini sono positivi e

$$\frac{n^p}{n^3+1}\Big/\frac1{n^{3-p}}=\frac{n^3}{n^3+1}\to1.$$

Per il confronto asintotico la serie ha lo stesso carattere di $\sum\frac1{n^{3-p}}$, che converge se e solo se $3-p>1$, cioè $p<2$.
:::
:::

:::exercise{id="E6.23" chapter="6" difficulty="medio"}
## Domanda
Calcolare la somma della serie $$\sum_{n=0}^{\infty}\frac{2^n+3^n}{6^n}.$$

:::hint
Spezza il termine generale in due potenze di ragioni diverse.
:::

:::solution
Si ha $\frac{2^n+3^n}{6^n}=\left(\frac13\right)^n+\left(\frac12\right)^n$. Entrambe sono serie geometriche convergenti {{formula:6.4}}:

$$\sum_{n=0}^\infty\left(\frac13\right)^n=\frac{1}{1-\frac13}=\frac32,\qquad \sum_{n=0}^\infty\left(\frac12\right)^n=2.$$

La somma è $\frac32+2=\frac72$.
:::
:::

:::exercise{id="E6.24" chapter="6" difficulty="facile"}
## Domanda
Stabilire il carattere della serie $$\sum_{n=1}^{\infty}\frac{3^n}{n!}.$$

:::hint
Applica il criterio del rapporto {{formula:6.8}}.
:::

:::solution
Con $a_n=\frac{3^n}{n!}>0$:

$$\frac{a_{n+1}}{a_n}=\frac{3^{n+1}}{(n+1)!}\cdot\frac{n!}{3^n}=\frac{3}{n+1}\to0<1.$$

La serie converge.
:::
:::

:::exercise{id="E6.25" chapter="6" difficulty="medio"}
## Domanda
Stabilire il carattere della serie $$\sum_{n=1}^{\infty}\left(\frac{n}{n+1}\right)^n.$$

:::hint
Controlla se il termine generale tende a zero {{formula:6.6}}.
:::

:::solution
Si ha

$$\left(\frac{n}{n+1}\right)^n=\left(1+\frac1n\right)^{-n}\longrightarrow e^{-1}\neq0.$$

Il termine generale non è infinitesimo, quindi la condizione necessaria di convergenza non è soddisfatta. I termini sono positivi, perciò la serie diverge a $+\infty$.
:::
:::

:::exercise{id="E6.26" chapter="6" difficulty="difficile"}
## Domanda
Stabilire il carattere della serie $$\sum_{n=2}^{\infty}\frac{(-1)^n}{\sqrt n+(-1)^n}.$$

:::hint
Razionalizza il denominatore moltiplicando per $\sqrt n-(-1)^n$ e spezza il termine in due parti, una delle quali soddisfa Leibniz.
:::

:::solution
Poiché $\left(\sqrt n+(-1)^n\right)\left(\sqrt n-(-1)^n\right)=n-1$,

$$\frac{(-1)^n}{\sqrt n+(-1)^n}=\frac{(-1)^n\left(\sqrt n-(-1)^n\right)}{n-1}=(-1)^n\frac{\sqrt n}{n-1}-\frac1{n-1}.$$

La successione $b_n=\frac{\sqrt n}{n-1}$ è positiva, infinitesima e decrescente: la funzione $f(x)=\frac{\sqrt x}{x-1}$ ha $f'(x)=-\frac{x+1}{2\sqrt x\,(x-1)^2}<0$. Per Leibniz $\sum(-1)^nb_n$ converge. Invece $\sum_{n\ge2}\frac1{n-1}$ è la serie armonica, divergente a $+\infty$, quindi $-\sum\frac1{n-1}$ diverge a $-\infty$. Somma di una serie convergente e di una divergente a $-\infty$: la serie data diverge a $-\infty$.
:::
:::

:::exercise{id="E6.27" chapter="6" difficulty="medio"}
## Domanda
Stabilire il carattere della serie $$\sum_{n=2}^{\infty}\frac{\log n}{n^2}.$$

:::hint
Usa la gerarchia degli infiniti {{formula:6.2}} per maggiorare $\log n$ con una potenza di $n$ e poi il confronto.
:::

:::solution
Poiché $\frac{\log n}{\sqrt n}\to0$, esiste $n_0$ tale che $\log n\le\sqrt n$ per $n\ge n_0$. Allora, per $n\ge n_0$,

$$0<\frac{\log n}{n^2}\le\frac{\sqrt n}{n^2}=\frac1{n^{3/2}}.$$

La serie $\sum\frac1{n^{3/2}}$ converge ($p=\frac32>1$), dunque per il criterio del confronto converge anche la serie data.
:::
:::

:::exercise{id="E7.1" chapter="7" difficulty="difficile"}
## Domanda
Sia $f_n(x)=\left(1+\frac xn\right)^n$ per $x\ge 0$. Dimostrare che $f_n\to e^x$ uniformemente su ogni $\lbrack 0,R\rbrack $, ma non su $\lbrack 0,+\infty)$. Calcolare poi $\lim_{n\to\infty}\int_0^1 f_n(x)\,dx$.

:::hint
Usa $t-\frac{t^2}{2}\le\ln(1+t)\le t$ per $t\ge 0$ e $1-e^{-s}\le s$.
:::

:::solution
Sia $x\in[0,R]$ e $t=x/n$. Dalle disuguaglianze $t-\frac{t^2}2\le\ln(1+t)\le t$ si ottiene

$$e^{x-\frac{x^2}{2n}}\le f_n(x)\le e^x.$$

Quindi, usando $1-e^{-s}\le s$,

$$0\le e^x-f_n(x)\le e^x\left(1-e^{-\frac{x^2}{2n}}\right)\le e^x\frac{x^2}{2n}\le\frac{e^RR^2}{2n}.$$

Il membro destro non dipende da $x$ e tende a $0$: la convergenza è uniforme su $\lbrack 0,R\rbrack $.

Su $\lbrack 0,+\infty)$, in $x=n$ si ha $e^n-f_n(n)=e^n-2^n\to+\infty$, quindi $\sup_{x\ge0}|e^x-f_n(x)|=+\infty$ e la convergenza non è uniforme.

Poiché la convergenza è uniforme su $\lbrack 0,1\rbrack $,

$$\lim_{n\to\infty}\int_0^1 f_n=\int_0^1e^x\,dx=e-1.$$

Verifica diretta: $\int_0^1(1+x/n)^n dx=\frac{n}{n+1}\left[(1+\tfrac1n)^{n+1}-1\right]\to e-1$.
:::
:::

:::exercise{id="E7.2" chapter="7" difficulty="medio"}
## Domanda
Calcolare le somme $\sum_{n=0}^\infty 2^{-n/2}\cos\frac{n\pi}4$ e $\sum_{n=0}^\infty 2^{-n/2}\sin\frac{n\pi}4$.

:::hint
Sono parte reale e parte immaginaria di una serie geometrica complessa di ragione $w=\frac{1+i}2$.
:::

:::solution
Posto $w=\frac{1+i}2$, si ha

$$w=\frac{\sqrt2}2e^{i\pi/4}=2^{-1/2}e^{i\pi/4},$$

perciò

$$w^n=2^{-n/2}\left(\cos\frac{n\pi}4+i\sin\frac{n\pi}4\right).$$

Vale $|w|=\frac1{\sqrt2}<1$, quindi

$$\sum_{n=0}^\infty w^n=\frac1{1-w}=\frac1{\frac{1-i}2}=\frac2{1-i}=\frac{2(1+i)}2=1+i.$$

Uguagliando parte reale e parte immaginaria, entrambe le somme valgono $1$.
:::
:::

:::exercise{id="E7.3" chapter="7" difficulty="facile"}
## Domanda
Sia $f_n(x)=\dfrac{\sin(nx)}{n}$ per $x\in\mathbb{R}$. Mostrare che $f_n\to 0$ uniformemente su $\mathbb{R}$, ma che $f_n'(0)$ non converge a $f'(0)$, dove $f$ è il limite.

:::hint
Usa la {{formula:7.1}} per stimare $\|f_n\|_\infty$; poi calcola $f_n'$.
:::

:::solution
Poiché $|\sin(nx)|\le 1$, si ha $\|f_n\|_\infty=\sup_{\mathbb{R}}|f_n|=\frac1n$ (il valore $1/n$ è assunto per $nx=\pi/2$). Poiché $\frac1n\to 0$, la convergenza a $f\equiv 0$ è uniforme su $\mathbb{R}$.

La derivata è $f_n'(x)=\cos(nx)$, quindi $f_n'(0)=1$ per ogni $n$, mentre $f'(0)=0$. Dunque

$$
\lim_{n\to\infty}f_n'(0)=1\ne 0=f'(0).
$$

La convergenza uniforme delle $f_n$ non basta a derivare sotto il limite. Infatti, $f_n'$ non converge nemmeno puntualmente in $x=\pi/2$, poiché $f_n'(\pi/2)=\cos(n\pi/2)$ non ha limite; a maggior ragione, le derivate non convergono uniformemente.
:::
:::

:::exercise{id="E7.4" chapter="7" difficulty="facile"}
## Domanda
Calcolare la norma $\|f\|_\infty=\sup|f|$ della funzione $f(x)=x^2-2x$ sull'intervallo $\lbrack 0,3\rbrack $ e sull'intervallo $\lbrack 0,2\rbrack $.

:::hint
Cerca i punti critici e confronta $|f|$ con i valori agli estremi, come nella {{formula:7.1}}.
:::

:::solution
Si ha $f'(x)=2x-2$, quindi l'unico punto critico è $x=1$ con $f(1)=-1$.

Su $\lbrack 0,3\rbrack $: $f(0)=0$, $f(1)=-1$, $f(3)=3$. Il massimo di $|f|$ è $3$, quindi $\|f\|_\infty=3$.

Su $\lbrack 0,2\rbrack $: $f(0)=0$, $f(1)=-1$, $f(2)=0$. Il massimo di $|f|$ è $1$, quindi $\|f\|_\infty=1$.
:::
:::

:::exercise{id="E7.5" chapter="7" difficulty="difficile"}
## Domanda
Determinare il raggio e l'insieme di convergenza della serie $\sum_{n=0}^\infty\frac{(n!)^2}{(2n)!}x^n$.

:::hint
Il criterio del rapporto dà il raggio; agli estremi studia la monotonia di $b_n=\frac{(n!)^2}{(2n)!}4^n$.
:::

:::solution
Sia $a_n=\frac{(n!)^2}{(2n)!}$. Allora

$$\frac{a_{n+1}}{a_n}=\frac{(n+1)^2}{(2n+1)(2n+2)}=\frac{n+1}{2(2n+1)}\to\frac14,$$

quindi $R=4$.

Agli estremi il modulo del termine generale è $b_n=a_n4^n$. Si ha

$$\frac{b_{n+1}}{b_n}=4\cdot\frac{n+1}{2(2n+1)}=\frac{2(n+1)}{2n+1}>1,$$

quindi $(b_n)$ è crescente con $b_0=1$: $b_n\ge1$ e il termine generale non tende a $0$, sia per $x=4$ sia per $x=-4$. La serie non converge agli estremi.
:::
:::

:::exercise{id="E7.6" chapter="7" difficulty="medio"}
## Domanda
Determinare l'insieme di convergenza della serie $\sum_{n=1}^\infty\frac{(x+2)^{2n}}{n\,4^n}$.

:::hint
Poni $y=\frac{(x+2)^2}{4}$ e studia $\sum_{n=1}^\infty\frac{y^n}{n}$. Usa il criterio del rapporto per determinarne il raggio di convergenza e controlla i casi limite.
:::

:::solution
Ponendo $y=\frac{(x+2)^2}{4}\ge0$, la serie diventa $\sum_{n=1}^\infty\frac{y^n}{n}$. Il criterio del rapporto dà raggio di convergenza $1$: la serie converge per $0\le y<1$ e diverge per $y>1$. Per $y=1$ si ottiene la serie armonica, che diverge.

La condizione $y<1$ equivale a $(x+2)^2<4$, cioè $|x+2|<2$, quindi $-4<x<0$. Agli estremi $x=-4$ e $x=0$ si ha $y=1$ e la serie diverge. L'insieme di convergenza è dunque $(-4,0)$.
:::
:::

:::exercise{id="E7.7" chapter="7" difficulty="difficile"}
## Domanda
Sia $f(x)=x^2e^{-x}$ su $\lbrack 0,+\infty)$. Calcolare $\|f\|_\infty$ e $\min_{c\in\mathbb{R}}\|f-c\|_\infty$. Posto poi $f_n(x)=f(nx)$, stabilire se $f_n\to0$ puntualmente e se uniformemente su $\lbrack 0,+\infty)$.

:::hint
Determina il massimo di $f$ e il suo estremo inferiore; $\|f-c\|_\infty$ è minimo quando $c$ sta a metà dell'immagine di $f$.
:::

:::solution
Si ha $f\ge0$, $f(0)=0$ e $f(x)\to0$ per $x\to+\infty$. Inoltre $f'(x)=(2x-x^2)e^{-x}$, quindi il massimo è in $x=2$ e vale $4e^{-2}$. Dunque $\|f\|_\infty=4e^{-2}$.

L'immagine di $f$ è $\lbrack 0,M\rbrack $ con $M=4e^{-2}$ (continua, assume $0$ e $M$). Per ogni $c$,

$$\|f-c\|_\infty=\max(|0-c|,|M-c|)\ge\frac M2,$$

con uguaglianza per $c=\frac M2$. Quindi $\min_c\|f-c\|_\infty=2e^{-2}$.

Per $f_n(x)=f(nx)$: per $x=0$ si ha $f_n(0)=0$; per $x>0$, $nx\to+\infty$ e $f(nx)\to0$. Il limite puntuale è $0$. Ma $\sup_{x\ge0}f_n(x)=\sup_{t\ge0}f(t)=4e^{-2}$ per ogni $n$ (assunto in $x=2/n$), quindi $\|f_n\|_\infty\not\to0$ e la convergenza non è uniforme.
:::
:::

:::exercise{id="E7.8" chapter="7" difficulty="facile"}
## Domanda
Determinare il raggio di convergenza della serie $\sum_{n=0}^\infty\frac{(z-i)^n}{3^n}$ in $\mathbb{C}$, la sua somma e il valore in $z=1+i$.

:::hint
È una serie geometrica di ragione $\frac{z-i}{3}$.
:::

:::solution
La serie è geometrica di ragione $w=\frac{z-i}3$ e converge se e solo se $|w|<1$, cioè $|z-i|<3$: il raggio è $3$ e il centro è $i$. La somma vale per $|z-i|<3$ e si calcola come

$$
\frac1{1-\frac{z-i}3}=\frac3{3-z+i}.
$$

Per $z=1+i$ si ha $|1+i-i|=1<3$, quindi $z=1+i$ è interno al disco di convergenza. Inoltre, $z-i=1$, $w=\frac13$ e la somma vale $\frac1{1-1/3}=\frac32$.
:::
:::

:::exercise{id="E7.9" chapter="7" difficulty="medio"}
## Domanda
Sia $f_n(x)=n x e^{-n x}$ per $x\ge 0$. Determinare il limite puntuale e studiare la convergenza uniforme su $\lbrack 0,+\infty)$ e su $\lbrack a,+\infty)$, con $a>0$.

:::hint
Osserva che $f_n(x)=g(nx)$ con $g(t)=te^{-t}$ e studia il massimo di $g$.
:::

:::solution
Per $x=0$ si ha $f_n(0)=0$. Per $x>0$, $nxe^{-nx}\to 0$ perché l'esponenziale prevale sul polinomio. Il limite puntuale è $f\equiv 0$.

Sia $g(t)=te^{-t}$, con $g'(t)=e^{-t}(1-t)$: $g$ cresce su $\lbrack 0,1\rbrack $, decresce su $\lbrack 1,+\infty)$ e $\max g=g(1)=e^{-1}$. Poiché $f_n(x)=g(nx)$, si ha

$$\sup_{x\ge 0}|f_n(x)|=g(1)=\frac1e\not\to 0,$$

quindi la convergenza non è uniforme su $\lbrack 0,+\infty)$ (il massimo è assunto in $x=1/n$).

Su $\lbrack a,+\infty)$, per $n>1/a$ si ha $na>1$, dove $g$ è decrescente, quindi

$$\sup_{x\ge a}|f_n(x)|=g(na)=na\,e^{-na}\to 0.$$

La convergenza è dunque uniforme su $\lbrack a,+\infty)$ per ogni $a>0$.
:::
:::

:::exercise{id="E7.10" chapter="7" difficulty="facile"}
## Domanda
Sia $f(x)=x\,e^{x^2}$. Calcolare $f^{(6)}(0)$ e $f^{(7)}(0)$ usando lo sviluppo di Maclaurin.

:::hint
Sostituisci $x^2$ nella serie di $e^t$ {{formula:7.6}} e ricorda che $a_k=f^{(k)}(0)/k!$.
:::

:::solution
Dalla serie di $e^t$ con $t=x^2$:

$$f(x)=x\sum_{k=0}^\infty\frac{x^{2k}}{k!}=\sum_{k=0}^\infty\frac{x^{2k+1}}{k!}.$$

Compaiono solo potenze dispari, quindi il coefficiente di $x^6$ è nullo e $f^{(6)}(0)=0$. Il coefficiente di $x^7$ si ha per $k=3$: $a_7=\frac1{3!}=\frac16$, quindi

$$f^{(7)}(0)=7!\,a_7=\frac{5040}{6}=840.$$
:::
:::

:::exercise{id="E7.11" chapter="7" difficulty="facile"}
## Domanda
Sia $f_n(x)=x^n$ per $x\in[0,1]$. Determinare il limite puntuale $f$ di $(f_n)$ e stabilire se la convergenza è uniforme su $\lbrack 0,1\rbrack $. Dire poi se la convergenza è uniforme su $\lbrack 0,a\rbrack $ con $0<a<1$.

:::hint
Calcola $\sup|f_n-f|$ separatamente sui due intervalli; ricorda che il limite uniforme di funzioni continue è continuo.
:::

:::solution
Per $0\le x<1$ si ha $x^n\to 0$, mentre per $x=1$ si ha $f_n(1)=1$. Quindi $f(x)=0$ per $x<1$ e $f(1)=1$.

Il limite $f$ è discontinuo in $x=1$, mentre ogni $f_n$ è continua. Poiché il limite uniforme di funzioni continue è continuo, la convergenza su $\lbrack 0,1\rbrack $ non può essere uniforme. Lo si vede anche direttamente:

$$\sup_{x\in[0,1]}|f_n(x)-f(x)|=\sup_{x\in\lbrack 0,1)}x^n=1\not\to 0.$$

Su $\lbrack 0,a\rbrack $ con $a<1$ il limite è $f\equiv 0$ e, essendo $x^n$ crescente,

$$\sup_{x\in[0,a]}|f_n(x)|=a^n\to 0,$$

quindi la convergenza è uniforme.
:::
:::

:::exercise{id="E7.12" chapter="7" difficulty="difficile"}
## Domanda
Calcolare $\sum_{n=1}^\infty\frac{\cos(n\theta)}{n\,2^n}$ in funzione di $\theta$ e, in particolare, per $\theta=\frac\pi3$.

:::hint
Considera la serie $\sum w^n/n$ con $w=\frac{e^{i\theta}}2$, che vale $-\mathrm{Log}(1-w)$ per $|w|<1$, e prendi la parte reale.
:::

:::solution
Sia $w=\frac{e^{i\theta}}2$, con $|w|=\frac12<1$. Per $|w|<1$ vale $\sum_{n\ge1}\frac{w^n}n=-\mathrm{Log}(1-w)$ e $\mathrm{Re}\,\frac{w^n}{n}=\frac{\cos n\theta}{n2^n}$. Poiché $\mathrm{Re}\,\mathrm{Log}\,u=\ln|u|$,

$$\sum_{n=1}^\infty\frac{\cos n\theta}{n2^n}=-\ln|1-w|.$$

Ora $|1-w|^2=1-2\mathrm{Re}\,w+|w|^2=1-\cos\theta+\frac14=\frac54-\cos\theta$. Dunque

$$\sum_{n=1}^\infty\frac{\cos n\theta}{n2^n}=-\frac12\ln\left(\frac54-\cos\theta\right).$$

Per $\theta=\frac\pi3$: $\frac54-\frac12=\frac34$, quindi la somma vale $-\frac12\ln\frac34=\frac12\ln\frac43\approx0{,}1438$.
:::
:::

:::exercise{id="E7.13" chapter="7" difficulty="difficile"}
## Domanda
Sia $f_n(x)=n\,x\,(1-x^2)^n$ per $x\in[0,1]$. Calcolare il limite puntuale $f$, calcolare $\lim_{n\to\infty}\int_0^1 f_n(x)\,dx$ e dedurne che la convergenza non è uniforme su $\lbrack 0,1\rbrack $.

:::hint
L'integrale si calcola con la sostituzione $u=1-x^2$. Se la convergenza fosse uniforme, limite e integrale si scambierebbero.
:::

:::solution
Per $x=0$ e $x=1$ si ha $f_n(x)=0$. Per $0<x<1$ si ha $0<1-x^2<1$ e $n(1-x^2)^n\to 0$ (successione geometrica per un polinomio). Quindi $f\equiv 0$ su $\lbrack 0,1\rbrack $.

Con $u=1-x^2$, $du=-2x\,dx$:

$$\int_0^1 n x(1-x^2)^n\,dx=\frac n2\int_0^1 u^n\,du=\frac{n}{2(n+1)}\to\frac12.$$

Ma $\int_0^1 f=0\ne \frac12$. Se $f_n\to f$ uniformemente su $\lbrack 0,1\rbrack $, si avrebbe $\left|\int_0^1 f_n-\int_0^1 f\right|\le\|f_n-f\|_\infty\to 0$, contraddizione. Dunque la convergenza non è uniforme.
:::
:::

:::exercise{id="E7.14" chapter="7" difficulty="medio"}
## Domanda
Sia $f_n(x)=x^n(1-x)$ su $\lbrack 0,1\rbrack $. Calcolare $\|f_n\|_\infty$ e il limite $\lim_{n\to\infty}n\|f_n\|_\infty$. Dedurne che $f_n\to0$ uniformemente.

:::hint
Studia il segno di $f_n'$ per individuare il massimo in $x=\frac n{n+1}$; poi usa $(1+\frac1n)^{-n}\to e^{-1}$.
:::

:::solution
Si ha $f_n\ge0$ su $\lbrack 0,1\rbrack $ e $f_n(0)=f_n(1)=0$. Inoltre

$$f_n'(x)=x^{n-1}\bigl(n-(n+1)x\bigr).$$

Poiché $x^{n-1}\ge0$ su $\lbrack 0,1\rbrack $, la derivata è positiva per $x<\frac n{n+1}$ e negativa per $x>\frac n{n+1}$. Dunque $f_n$ raggiunge il massimo in $x=\frac n{n+1}$, e

$$\|f_n\|_\infty=f_n\left(\frac n{n+1}\right)=\left(\frac n{n+1}\right)^n\frac1{n+1}.$$

Poiché $\left(\frac n{n+1}\right)^n=\left(1+\frac1n\right)^{-n}\to e^{-1}$ e $\frac n{n+1}\to1$,

$$n\|f_n\|_\infty=\left(\frac n{n+1}\right)^n\frac n{n+1}\to\frac1e.$$

Per ogni $x\in[0,1]$, si ha $0\le f_n(x)\le\|f_n\|_\infty\to0$, quindi il limite puntuale è $0$. Inoltre

$$\|f_n-0\|_\infty=\|f_n\|_\infty\le\frac1{n+1}\to0.$$

Per definizione, questa convergenza in norma uniforme implica che $f_n\to0$ uniformemente su $\lbrack 0,1\rbrack $.
:::
:::

:::exercise{id="E7.15" chapter="7" difficulty="facile"}
## Domanda
Studiare la serie $\sum_{n=0}^\infty x^n$: determinare l'insieme di convergenza puntuale, la somma, e dire su quali insiemi del tipo $\lbrack -r,r\rbrack $ la convergenza è totale.

:::hint
È una serie geometrica; per la convergenza totale stima $\sup|x^n|$ su $\lbrack -r,r\rbrack $.
:::

:::solution
Per $|x|<1$ la serie geometrica converge e ha somma $\frac1{1-x}$; per $|x|\ge 1$ il termine generale non tende a $0$ e la serie non converge. L'insieme di convergenza puntuale è $(-1,1)$.

Su $\lbrack -r,r\rbrack $ con $0<r<1$ si ha $\sup|x^n|=r^n$ e $\sum r^n<\infty$: la convergenza è totale (quindi uniforme) per ogni $r<1$.

Su $(-1,1)$ la convergenza non è totale: $\sup_{(-1,1)}|x^n|=1$ e $\sum 1$ diverge. Neppure uniforme, perché la somma $\frac1{1-x}$ è illimitata.
:::
:::

:::exercise{id="E7.16" chapter="7" difficulty="difficile"}
## Domanda
Sia $f(x)=\ln(1+x+x^2)$. Determinare i coefficienti dello sviluppo di Maclaurin, il raggio di convergenza e calcolare $f^{(4)}(0)$ e $f^{(6)}(0)$.

:::hint
Osserva che $1+x+x^2=\frac{1-x^3}{1-x}$ e usa la serie di $\ln(1-t)$.
:::

:::solution
Per $x\neq1$ si ha $1+x+x^2=\frac{1-x^3}{1-x}$, quindi per $|x|<1$

$$f(x)=\ln(1-x^3)-\ln(1-x)=-\sum_{k\ge1}\frac{x^{3k}}{k}+\sum_{n\ge1}\frac{x^n}{n}.$$

Il coefficiente di $x^n$ è $a_n=\frac1n$ se $3\nmid n$, mentre per $n=3k$ è $a_n=\frac1{3k}-\frac1k=-\frac2{3k}=-\frac2n$.

Il raggio è $1$: $|a_n|\le\frac2n$ garantisce $R\ge1$, e $\limsup|a_n|^{1/n}=1$ dà $R=1$ (coerente con le singolarità $e^{\pm 2\pi i/3}$ di modulo $1$).

Quindi $f^{(4)}(0)=4!\cdot\frac14=6$ e $f^{(6)}(0)=6!\cdot\left(-\frac26\right)=720\cdot\left(-\frac13\right)=-240$.

Controllo di $a_4$ con $u=x+x^2$ in $\ln(1+u)=u-\frac{u^2}2+\frac{u^3}3-\frac{u^4}4$: il coefficiente di $x^4$ è $-\frac12+1-\frac14=\frac14$.
:::
:::

:::exercise{id="E7.17" chapter="7" difficulty="medio"}
## Domanda
Sia $S(x)=\sum_{n=1}^\infty x\,e^{-nx}$ per $x\ge0$. Calcolare $S(x)$, mostrare che $S$ è discontinua in $0$ e dedurne che la convergenza non è uniforme su $\lbrack 0,a\rbrack $. Mostrare che è totale su $\lbrack a,+\infty)$ per ogni $a>0$.

:::hint
Per $x>0$ è una serie geometrica di ragione $e^{-x}$. Per la convergenza totale studia il massimo di $xe^{-nx}$ su $\lbrack a,+\infty)$.
:::

:::solution
Per $x=0$ tutti i termini sono nulli, quindi $S(0)=0$. Per $x>0$ la serie è geometrica di ragione $e^{-x}\in(0,1)$:

$$S(x)=x\,\frac{e^{-x}}{1-e^{-x}}=\frac{x}{e^x-1}.$$

Allora $\lim_{x\to0^+}S(x)=1\neq 0=S(0)$: la somma è discontinua in $0$ pur essendo ogni termine continuo. Se la convergenza fosse uniforme su $\lbrack 0,a\rbrack $, la somma sarebbe continua; dunque non lo è (e a maggior ragione non è totale).

Su $\lbrack a,+\infty)$ sia $g_n(x)=xe^{-nx}$. Poiché $g_n'(x)=e^{-nx}(1-nx)<0$ per $x>1/n$, per $n>1/a$ si ha $\sup_{x\ge a}g_n=ae^{-na}$. La serie $\sum ae^{-na}$ converge (geometrica), quindi la convergenza è totale su $\lbrack a,+\infty)$.
:::
:::

:::exercise{id="E7.18" chapter="7" difficulty="medio"}
## Domanda
Sia $f_n(x)=\sqrt{x^2+\frac1{n^2}}$ per $x\in[-1,1]$. Mostrare che $f_n$ converge uniformemente a $f(x)=|x|$, calcolare $\lim_{n\to\infty}\int_{-1}^1 f_n(x)\,dx$ e commentare il comportamento delle derivate in $x=0$.

:::hint
Razionalizza $\sqrt{x^2+\varepsilon^2}-|x|$ per stimarne il massimo.
:::

:::solution
Posto $\varepsilon=1/n$,

$$f_n(x)-|x|=\frac{\varepsilon^2}{\sqrt{x^2+\varepsilon^2}+|x|}\le\frac{\varepsilon^2}{\varepsilon}=\varepsilon,$$

con uguaglianza in $x=0$. Quindi $\|f_n-f\|_\infty=\frac1n\to 0$ e la convergenza è uniforme.

Per l'uniformità si può passare al limite sotto l'integrale:

$$\lim_{n\to\infty}\int_{-1}^1 f_n(x)\,dx=\int_{-1}^1|x|\,dx=2\cdot\frac12=1.$$

Per ogni $n$, $f_n'(x)=\frac{x}{\sqrt{x^2+1/n^2}}$, dunque $f_n'(0)=0$. Per ogni $x\ne 0$, $f_n'(x)\to\operatorname{sign}(x)$, mentre in $x=0$ il limite vale $0$. La funzione limite delle derivate è discontinua in $0$, quindi la convergenza delle derivate non è uniforme. Il teorema di passaggio al limite per le derivate non si applica: infatti il limite uniforme $|x|$ non è derivabile in $0$.
:::
:::

:::exercise{id="E7.19" chapter="7" difficulty="medio"}
## Domanda
Sviluppare in serie di Maclaurin $f(x)=\dfrac1{x^2-5x+6}$, determinare i coefficienti, il raggio di convergenza e calcolare $f'''(0)$.

:::hint
Decomponi in fratti semplici e usa la serie geometrica per ciascun addendo.
:::

:::solution
Poiché $x^2-5x+6=(x-2)(x-3)$,

$$f(x)=\frac1{x-3}-\frac1{x-2}.$$

Per $|x|<3$: $\frac1{x-3}=-\frac13\sum\left(\frac x3\right)^n$. Per $|x|<2$: $-\frac1{x-2}=\frac12\sum\left(\frac x2\right)^n$. Quindi per $|x|<2$

$$f(x)=\sum_{n=0}^\infty\left(\frac1{2^{n+1}}-\frac1{3^{n+1}}\right)x^n.$$

Il raggio è $2$, la distanza dalla singolarità più vicina. Controllo: $a_0=\frac12-\frac13=\frac16=f(0)$.

Infine $f'''(0)=3!\,a_3=6\left(\frac1{16}-\frac1{81}\right)=6\cdot\frac{65}{1296}=\frac{65}{216}$.
:::
:::

:::exercise{id="E7.20" chapter="7" difficulty="facile"}
## Domanda
Determinare il raggio e l'intervallo di convergenza della serie di potenze $\sum_{n=0}^\infty\frac{n+1}{2^n}x^n$.

:::hint
Applica il criterio del rapporto ai coefficienti {{formula:7.3}} e controlla gli estremi.
:::

:::solution
I coefficienti sono $a_n=\frac{n+1}{2^n}$ e

$$\frac{a_{n+1}}{a_n}=\frac{n+2}{2(n+1)}\to\frac12,$$

quindi $R=2$. Per $x=\pm2$ il termine generale è $(n+1)(\pm1)^n$, che non tende a $0$: la serie non converge. L'intervallo di convergenza è $(-2,2)$.
:::
:::

:::exercise{id="E7.21" chapter="7" difficulty="difficile"}
## Domanda
Sia $g(x)=\sum_{n=1}^\infty\frac{x^n}{n(n+1)}$ per $x\in[-1,1]$. Mostrare che la serie converge totalmente su $\lbrack -1,1\rbrack $, determinare $g(x)$ in forma chiusa per $0<|x|<1$ e calcolare $\sum_{n=1}^\infty\frac1{n(n+1)2^n}$ e $\sum_{n=1}^\infty\frac1{n(n+1)}$.

:::hint
Scrivi $\frac1{n(n+1)}=\frac1n-\frac1{n+1}$ e usa la serie di $-\ln(1-x)$; per $x=1$ usa la continuità della somma di una serie totalmente convergente.
:::

:::solution
Su $\lbrack -1,1\rbrack $ si ha $\left|\frac{x^n}{n(n+1)}\right|\le\frac1{n(n+1)}$, termine di una serie convergente: la convergenza è totale, quindi $g$ è continua su $\lbrack -1,1\rbrack $.

Per $|x|<1$ è noto che $\sum_{n\ge1}\frac{x^n}n=-\ln(1-x)$. Inoltre, per $x\ne0$,

$$\sum_{n\ge1}\frac{x^n}{n+1}=\frac1x\sum_{n\ge1}\frac{x^{n+1}}{n+1}=\frac1x\left(-\ln(1-x)-x\right).$$

Dunque

$$g(x)=-\ln(1-x)+\frac{\ln(1-x)}x+1=1+\frac{1-x}{x}\ln(1-x).$$

Per $x=\frac12$: $g(\tfrac12)=1+1\cdot\ln\tfrac12=1-\ln2$, quindi $\sum\frac1{n(n+1)2^n}=1-\ln 2$.

Per la continuità di $g$ in $1$:

$$\sum_{n\ge1}\frac1{n(n+1)}=g(1)=\lim_{x\to1^-}\left(1+\frac{(1-x)\ln(1-x)}{x}\right)=1,$$

perché $(1-x)\ln(1-x)\to0$. Il risultato coincide con la somma telescopica.
:::
:::

:::exercise{id="E8.1" chapter="8" difficulty="medio"}
## Domanda
Calcolare, per $x\in\mathbb{R}$, in forma chiusa le somme

$$C(x)=\sum_{n=0}^\infty\frac{\cos nx}{2^n},\qquad D(x)=\sum_{n=1}^\infty\frac{\sin nx}{2^n}.$$

:::hint
Considera la serie geometrica complessa $\sum_{n\ge0}w^n$ con $w=\frac{e^{ix}}2$ e prendi parte reale e immaginaria di $\frac{1}{1-w}$.
:::

:::solution
Sia $w=\frac{e^{ix}}{2}$, con $|w|=\frac12<1$. Allora $\sum_{n\ge0}w^n=\frac1{1-w}$, la cui parte reale è $C(x)$ e la cui parte immaginaria è $D(x)$ (il termine $n=0$ non contribuisce alla parte immaginaria).

Si ha $\frac1{1-w}=\frac{1-\bar w}{|1-w|^2}$, con

$$|1-w|^2=1-\cos x+\frac14=\frac54-\cos x,\qquad 1-\bar w=1-\frac{\cos x}2+i\,\frac{\sin x}{2}.$$

Quindi

$$C(x)=\frac{1-\frac{\cos x}{2}}{\frac54-\cos x}=\frac{4-2\cos x}{5-4\cos x},\qquad D(x)=\frac{\frac{\sin x}2}{\frac54-\cos x}=\frac{2\sin x}{5-4\cos x}.$$

Controlli: $C(0)=2=\sum2^{-n}$; $C(\pi)=\frac{6}{9}=\frac23=\sum\left(-\frac12\right)^n$; $D\left(\frac\pi2\right)=\frac25=\frac12-\frac18+\frac1{32}-\dots$.
:::
:::

:::exercise{id="E8.2" chapter="8" difficulty="difficile"}
## Domanda
Sia $f(x)=(\pi^2-x^2)^2$ per $x\in[-\pi,\pi]$, prolungata con periodo $2\pi$.

1. Verificare che $f$ e $f'$ sono continue su $\mathbb{R}$, che anche $f''(x)=12x^2-4\pi^2$ si raccorda con continuità, e determinare i coefficienti di Fourier di $f$ a partire da quelli di $f''$.
2. Calcolare $\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n^4}$.

:::hint
Se $f$ e $f'$ sono continue e periodiche, due integrazioni per parti danno $a_n(f'')=-n^2a_n(f)$. Per il punto 2 valuta in $x=0$ e calcola direttamente $a_0$.
:::

:::solution
Si ha $f(\pm\pi)=0$, $f'(x)=-4x(\pi^2-x^2)$ con $f'(\pm\pi)=0$, e $f''(\pm\pi)=8\pi^2$: quindi $f$, $f'$ e anche $f''$ si raccordano con continuità, e $f'''(x)=24x$ è continua a tratti. Valgono le relazioni

$$a_n(f'')=-n^2a_n(f),\qquad b_n(f'')=-n^2b_n(f).$$

$f$ è pari, quindi $b_n=0$. Dai coefficienti di $x^2$ ($a_n=\frac{4(-1)^n}{n^2}$, $n\ge1$) si ha

$$a_n(f'')=12\cdot\frac{4(-1)^n}{n^2}=\frac{48(-1)^n}{n^2},\qquad\text{quindi}\qquad a_n(f)=-\frac{48(-1)^n}{n^4}=\frac{48(-1)^{n+1}}{n^4}.$$

Il termine $a_0$ non si ricava dalla relazione e va calcolato direttamente:

$$a_0=\frac2\pi\int_0^\pi\left(\pi^4-2\pi^2x^2+x^4\right)dx=\frac2\pi\left(\pi^5-\frac{2\pi^5}{3}+\frac{\pi^5}{5}\right)=\frac{16\pi^4}{15}.$$

La serie è $S(x)=\frac{8\pi^4}{15}+48\sum_{n\ge1}\frac{(-1)^{n+1}}{n^4}\cos nx$, con $S=f$ ovunque (convergenza totale).

In $x=0$: $f(0)=\pi^4=\frac{8\pi^4}{15}+48\sum\frac{(-1)^{n+1}}{n^4}$, da cui

$$\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n^4}=\frac{7\pi^4}{15\cdot48}=\frac{7\pi^4}{720}.$$
:::
:::

:::exercise{id="E8.3" chapter="8" difficulty="medio"}
## Domanda
Sia $f$ la funzione $2\pi$-periodica tale che $f(x)=e^x$ per $x\in\lbrack -\pi,\pi)$.

1. Calcolare $a_n$ e $b_n$ per $n\ge0$.
2. Sapendo che $f$ è continua in $0$, ricavare il valore di $\sum_{n=1}^{\infty}\frac{(-1)^n}{1+n^2}$.

:::hint
Calcola $\int_{-\pi}^{\pi}e^{(1+in)x}\,dx$ e prendi parte reale e immaginaria. Per il punto 2 valuta la serie in $x=0$.
:::

:::solution
Per $n\ge0$ si ha

$$\int_{-\pi}^{\pi}e^{(1+in)x}dx=\frac{e^{(1+in)\pi}-e^{-(1+in)\pi}}{1+in}=\frac{(-1)^n(e^\pi-e^{-\pi})}{1+in}=\frac{2(-1)^n\sinh\pi\,(1-in)}{1+n^2}.$$

La parte reale di questo integrale è $\int_{-\pi}^{\pi}e^x\cos nx\,dx$ e la parte immaginaria è $\int_{-\pi}^{\pi}e^x\sin nx\,dx$. Dividendo per $\pi$ si ottiene

$$a_n=\frac{2(-1)^n\sinh\pi}{\pi(1+n^2)},\qquad b_n=-\frac{2n(-1)^n\sinh\pi}{\pi(1+n^2)}.$$

In particolare $a_0=\frac{2\sinh\pi}{\pi}$, coerente con il calcolo diretto $\frac1\pi(e^\pi-e^{-\pi})$.

Per il punto 2: $f$ è continua e regolare a tratti in $0$, dunque la serie converge a $f(0)=1$. Poiché $\sin 0=0$,

$$1=\frac{\sinh\pi}{\pi}+\frac{2\sinh\pi}{\pi}\sum_{n=1}^\infty\frac{(-1)^n}{1+n^2}.$$

Quindi

$$\sum_{n=1}^\infty\frac{(-1)^n}{1+n^2}=\frac12\left(\frac{\pi}{\sinh\pi}-1\right).$$
:::
:::

:::exercise{id="E8.4" chapter="8" difficulty="medio"}
## Domanda
Sia $f$ una funzione reale $2\pi$-periodica, regolare a tratti e continua, i cui coefficienti di Fourier complessi sono $c_n=2^{-|n|}$, $n\in\mathbb{Z}$.

1. Determinare $a_n$ e $b_n$.
2. Determinare $f(x)$ in forma chiusa.
3. Calcolare $\int_{-\pi}^{\pi}f(x)^2\,dx$.

:::hint
Usa $a_n=c_n+c_{-n}$, $b_n=i(c_n-c_{-n})$. Per la forma chiusa somma due serie geometriche in $e^{ix}/2$ e $e^{-ix}/2$. Per l'integrale usa l'identità di Parseval in forma esponenziale.
:::

:::solution
Poiché $c_{-n}=c_n$ sono reali, $a_n=c_n+c_{-n}=2^{1-n}$ per $n\ge1$, $a_0=2c_0=2$ e $b_n=i(c_n-c_{-n})=0$.

Per la forma chiusa, con $w=\frac{e^{ix}}2$ ($|w|=\frac12<1$):

$$f(x)=\sum_{n\ge0}w^n+\sum_{n\ge1}\bar w^n=\frac{1}{1-w}+\frac{\bar w}{1-\bar w}=2\operatorname{Re}\frac1{1-w}-1.$$

Ora $\frac1{1-w}=\frac{1-\bar w}{|1-w|^2}$ con $|1-w|^2=\frac54-\cos x$ e $\operatorname{Re}(1-\bar w)=1-\frac{\cos x}2$. Quindi

$$f(x)=\frac{2-\cos x}{\frac54-\cos x}-1=\frac{8-4\cos x}{5-4\cos x}-1=\frac{3}{5-4\cos x}.$$

Controllo: $f(0)=3=\sum_n 2^{-|n|}=1+2\cdot1$.

Per l'integrale, per l'identità di Parseval in forma esponenziale,

$$\int_{-\pi}^{\pi}f^2dx=2\pi\sum_{n\in\mathbb{Z}}|c_n|^2=2\pi\left(1+2\sum_{n\ge1}4^{-n}\right)=2\pi\left(1+\frac23\right)=\frac{10\pi}{3}.$$
:::
:::

:::exercise{id="E8.5" chapter="8" difficulty="difficile"}
## Domanda
Sia $f(x)=|\sin x|$, funzione $2\pi$-periodica.

1. Calcolare i coefficienti di Fourier di $f$.
2. Valutando la serie in $x=0$ e in $x=\frac\pi2$, calcolare $\sum_{k=1}^{\infty}\frac{1}{4k^2-1}$ e $\sum_{k=1}^{\infty}\frac{(-1)^{k+1}}{4k^2-1}$.

:::hint
$f$ è pari: $a_n=\frac2\pi\int_0^\pi\sin x\cos nx\,dx$ si calcola con la formula di prostaferesi $\sin x\cos nx=\frac12\lbrack \sin(n+1)x-\sin(n-1)x\rbrack $; tratta a parte $n=1$.
:::

:::solution
$f$ è pari, quindi $b_n=0$ e $a_n=\frac2\pi\int_0^\pi\sin x\cos nx\,dx$. Per $n=1$, $\int_0^\pi\sin x\cos x\,dx=0$, quindi $a_1=0$.

Per $n\ne1$, $\sin x\cos nx=\frac12\lbrack \sin(n+1)x+\sin(1-n)x\rbrack $ e

$$a_n=\frac1\pi\left[\frac{1-\cos(n+1)\pi}{n+1}+\frac{1-\cos(1-n)\pi}{1-n}\right].$$

Se $n$ è dispari ($n\ne1$), $\cos(n\pm1)\pi=1$ e $a_n=0$. Se $n$ è pari, $\cos(n\pm1)\pi=-1$ e

$$a_n=\frac2\pi\left[\frac1{n+1}+\frac1{1-n}\right]=\frac{4}{\pi(1-n^2)}.$$

Quindi $a_0=\frac4\pi$ e $a_{2k}=-\frac{4}{\pi(4k^2-1)}$, e

$$S(x)=\frac2\pi-\frac4\pi\sum_{k=1}^\infty\frac{\cos 2kx}{4k^2-1}.$$

$f$ è continua e regolare a tratti, quindi $S=f$ ovunque.

In $x=0$: $0=\frac2\pi-\frac4\pi\sum\frac1{4k^2-1}$, da cui $\sum_{k\ge1}\frac1{4k^2-1}=\frac12$.

In $x=\frac\pi2$: $\cos k\pi=(-1)^k$ e $1=\frac2\pi-\frac4\pi\sum\frac{(-1)^k}{4k^2-1}$, quindi

$$\sum_{k\ge1}\frac{(-1)^{k+1}}{4k^2-1}=\frac{\pi}{4}\left(1-\frac2\pi\right)=\frac{\pi-2}{4}.$$
:::
:::

:::exercise{id="E8.6" chapter="8" difficulty="facile"}
## Domanda
La funzione $f(x)=x^2$ su $\lbrack -\pi,\pi\rbrack $, prolungata con periodo $2\pi$, ha serie di Fourier

$$\frac{\pi^2}{3}+4\sum_{n=1}^\infty\frac{(-1)^n}{n^2}\cos nx.$$

Giustificare la derivazione termine a termine e dedurre lo sviluppo in serie di Fourier di $x$ su $(-\pi,\pi)$.

:::hint
La derivazione termine a termine è lecita se $f$ è continua, periodica e regolare a tratti: la serie formalmente derivata coincide con la serie di Fourier di $f'$. Per la convergenza puntuale si può applicare il teorema di Dirichlet per funzioni $C^1$ a tratti.
:::

:::solution
La funzione $f$ è continua e periodica, ed è di classe $C^1$ a tratti, con $f'(x)=2x$ per $x\in(-\pi,\pi)$. Verifichiamo che la serie formalmente derivata è la serie di Fourier di $f'$. Poiché $f(\pi)=f(-\pi)$, l’integrazione per parti dà

$$a_0(f')=0,\qquad a_n(f')=n b_n(f)=0,\qquad b_n(f')=-n a_n(f)=-\frac{4(-1)^n}{n}.$$

Quindi la serie di Fourier di $f'$ è

$$-4\sum_{n=1}^\infty\frac{(-1)^n}{n}\sin(nx).$$

Per il teorema di Dirichlet per funzioni $C^1$ a tratti, questa serie converge a $f'(x)$ nei punti di continuità di $f'$. Poiché $f'(x)=2x$ è continua in $(-\pi,\pi)$, si ha

$$-4\sum_{n=1}^\infty\frac{(-1)^n}{n}\sin(nx)=2x,\qquad x\in(-\pi,\pi).$$

Dividendo per $2$, si ottiene lo sviluppo di Fourier

$$x=2\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n}\sin(nx),\qquad x\in(-\pi,\pi).$$
:::
:::

:::exercise{id="E8.7" chapter="8" difficulty="medio"}
## Domanda
Sia $g(x)=x^3-\pi^2x$ per $x\in[-\pi,\pi]$, prolungata con periodo $2\pi$. Sapendo che $x^2$ ha serie di Fourier $\frac{\pi^2}{3}+4\sum_{n\ge1}\frac{(-1)^n}{n^2}\cos nx$ su $\lbrack -\pi,\pi\rbrack $, verificare che $g$ è continua con $g'$ continua, e determinare i coefficienti di Fourier di $g$ usando quelli di $g'$. Dedurne il valore di $\sum_{k=0}^\infty\frac{(-1)^k}{(2k+1)^3}$.

:::hint
Per $g$ continua, periodica e $C^1$ a tratti vale $b_n(g)=\frac{a_n(g')}{n}$. Poi valuta la serie in $x=\frac\pi2$.
:::

:::solution
Si ha $g(\pm\pi)=\pm\pi^3\mp\pi^3=0$, quindi $g$ è continua e periodica. Inoltre $g'(x)=3x^2-\pi^2$ e $g'(\pm\pi)=2\pi^2$, quindi anche $g'$ si raccorda con continuità.

$g$ è dispari: $a_n=0$ per ogni $n$. Integrando per parti, essendo nulli i termini di bordo,

$$b_n(g)=\frac1\pi\int_{-\pi}^{\pi}g\sin nx\,dx=\frac1{n\pi}\int_{-\pi}^{\pi}g'\cos nx\,dx=\frac{a_n(g')}{n}.$$

Per $n\ge1$, $a_n(g')=3a_n(x^2)=\frac{12(-1)^n}{n^2}$ (la costante $-\pi^2$ non contribuisce). Quindi

$$g(x)=12\sum_{n=1}^\infty\frac{(-1)^n}{n^3}\sin nx,\qquad x\in[-\pi,\pi],$$

con convergenza totale e $S=g$ ovunque.

In $x=\frac\pi2$: $g\left(\frac\pi2\right)=\frac{\pi^3}{8}-\frac{\pi^3}{2}=-\frac{3\pi^3}{8}$. Nella serie contribuiscono solo gli $n=2k+1$, per cui $(-1)^n=-1$ e $\sin\frac{n\pi}2=(-1)^k$:

$$-\frac{3\pi^3}{8}=-12\sum_{k\ge0}\frac{(-1)^k}{(2k+1)^3}\quad\Longrightarrow\quad\sum_{k=0}^\infty\frac{(-1)^k}{(2k+1)^3}=\frac{\pi^3}{32}.$$
:::
:::

:::exercise{id="E8.8" chapter="8" difficulty="facile"}
## Domanda
Sia $S(x)=1+3\cos x+4\sin x-2\sin 2x$ la serie di Fourier (in questo caso un polinomio trigonometrico) di una funzione $2\pi$-periodica. Determinare tutti i coefficienti complessi $c_n$, $n\in\mathbb{Z}$, della forma esponenziale $\sum_n c_ne^{inx}$.

:::hint
Usa $c_0=\frac{a_0}{2}$, $c_n=\frac{a_n-ib_n}{2}$ e $c_{-n}=\overline{c_n}$ per $n\ge1$.
:::

:::solution
I coefficienti reali sono $\frac{a_0}2=1$, $a_1=3$, $b_1=4$, $a_2=0$, $b_2=-2$, tutti gli altri nulli. Con la formula $c_n=\frac{a_n-ib_n}{2}$ ($n\ge1$):

$$c_0=1,\quad c_1=\frac{3-4i}{2},\quad c_2=\frac{0+2i}{2}=i,$$

e $c_{-n}=\overline{c_n}$, quindi

$$c_{-1}=\frac{3+4i}{2},\quad c_{-2}=-i.$$

Tutti gli altri $c_n$ sono nulli. Verifica: $c_1e^{ix}+c_{-1}e^{-ix}=3\cos x+4\sin x$ e $ie^{2ix}-ie^{-2ix}=i\cdot 2i\sin 2x=-2\sin 2x$.
:::
:::

:::exercise{id="E8.9" chapter="8" difficulty="facile"}
## Domanda
Si consideri la funzione $p(x)=\sin^2 x$. Scrivere $p$ come polinomio trigonometrico nella forma $\frac{a_0}{2}+\sum_{n=1}^{N}\left(a_n\cos nx+b_n\sin nx\right)$, indicarne il grado e calcolare $\int_{-\pi}^{\pi}p(x)\,dx$.

:::hint
Usa la formula di duplicazione $\cos 2x=1-2\sin^2x$ per esprimere $\sin^2x$ tramite $\cos 2x$.
:::

:::solution
Dalla formula di duplicazione $\cos 2x = 1-2\sin^2 x$ si ricava

$$\sin^2 x=\frac12-\frac12\cos 2x.$$

Questo è un polinomio trigonometrico con $\frac{a_0}{2}=\frac12$, cioè $a_0=1$, $a_2=-\frac12$ e tutti gli altri coefficienti nulli. Il grado è $2$.

Per l'integrale, il termine $\cos 2x$ ha integrale nullo su un periodo, quindi

$$\int_{-\pi}^{\pi}p(x)\,dx=\frac12\cdot 2\pi=\pi.$$
:::
:::

:::exercise{id="E8.10" chapter="8" difficulty="facile"}
## Domanda
Sia $f$ una funzione di periodo $T=4$ con serie di Fourier

$$S(x)=3+2\cos\frac{\pi x}{2}-\sin\frac{3\pi x}{2}.$$

Calcolare i coefficienti $a_0$, $a_n$, $b_n$ nella forma $\frac{a_0}2+\sum\left(a_n\cos\frac{2\pi nx}{T}+b_n\sin\frac{2\pi nx}{T}\right)$ e il valore di $\int_0^4S(x)^2\,dx$.

:::hint
Per $T=4$ si ha $\frac{2\pi n x}{T}=\frac{n\pi x}{2}$. Per l'integrale usa le relazioni di ortogonalità sull'intervallo di lunghezza $T$.
:::

:::solution
Con $T=4$ le frequenze sono $\frac{n\pi x}2$. Confrontando: $\frac{a_0}2=3$, quindi $a_0=6$; $a_1=2$; $b_3=-1$; tutti gli altri coefficienti sono nulli.

Per l'integrale, sull'intervallo di lunghezza $T=4$ si ha $\int_0^4 1\,dx=4$ e $\int_0^4\cos^2\frac{\pi x}{2}dx=\int_0^4\sin^2\frac{3\pi x}2dx=2$, mentre gli integrali dei prodotti misti sono nulli. Quindi

$$\int_0^4S^2dx=9\cdot4+4\cdot2+1\cdot2=46.$$

Equivalentemente $\frac T2\left(\frac{a_0^2}2+a_1^2+b_3^2\right)=2(18+4+1)=46$.
:::
:::

:::exercise{id="E8.11" chapter="8" difficulty="facile"}
## Domanda
Sia $f$ la funzione dispari e $2\pi$-periodica tale che $f(x)=1$ per $x\in(0,\pi)$. Scrivere la serie di Fourier di $f$ e, valutandola in $x=\frac\pi2$, ricavare la somma $\sum_{k=0}^\infty\frac{(-1)^k}{2k+1}$.

:::hint
Per una funzione dispari $a_n=0$ e $b_n=\frac2\pi\int_0^\pi f(x)\sin nx\,dx$. In $x=\frac\pi2$ la funzione è continua.
:::

:::solution
Si ha $a_n=0$ e

$$b_n=\frac2\pi\int_0^\pi\sin nx\,dx=\frac{2(1-(-1)^n)}{n\pi},$$

cioè $b_n=\frac4{n\pi}$ per $n$ dispari e $b_n=0$ per $n$ pari. Quindi

$$S(x)=\frac4\pi\sum_{k=0}^\infty\frac{\sin((2k+1)x)}{2k+1}.$$

In $x=\frac\pi2$ la funzione è continua e $f\left(\frac\pi2\right)=1$; inoltre $\sin\left((2k+1)\frac\pi2\right)=(-1)^k$. Dunque

$$1=\frac4\pi\sum_{k=0}^\infty\frac{(-1)^k}{2k+1}\quad\Longrightarrow\quad\sum_{k=0}^\infty\frac{(-1)^k}{2k+1}=\frac\pi4.$$
:::
:::

:::exercise{id="E8.12" chapter="8" difficulty="medio"}
## Domanda
Sia $p(x)=\cos^3 x$.

1. Scrivere $p$ come polinomio trigonometrico, usando le formule di Eulero.
2. Usando le relazioni di ortogonalità, calcolare $\int_{-\pi}^{\pi}\cos^6 x\,dx$.

:::hint
Sviluppa il cubo di $\frac{e^{ix}+e^{-ix}}{2}$ e raggruppa i termini coniugati; poi osserva che $\cos^6x=p(x)^2$.
:::

:::solution
Dalla formula di Eulero $\cos x=\frac{e^{ix}+e^{-ix}}{2}$ si ha

$$\cos^3x=\frac{e^{3ix}+3e^{ix}+3e^{-ix}+e^{-3ix}}{8}=\frac{2\cos 3x+6\cos x}{8}=\frac34\cos x+\frac14\cos 3x.$$

Quindi $a_1=\frac34$, $a_3=\frac14$, tutti gli altri coefficienti sono nulli.

Ora $\cos^6x=p(x)^2$. Per le relazioni di ortogonalità $\int_{-\pi}^{\pi}\cos^2(kx)\,dx=\pi$ e $\int_{-\pi}^{\pi}\cos x\cos 3x\,dx=0$, quindi

$$\int_{-\pi}^{\pi}\cos^6x\,dx=\pi\left(\frac{9}{16}+\frac{1}{16}\right)=\frac{5\pi}{8}.$$
:::
:::

:::exercise{id="E8.13" chapter="8" difficulty="facile"}
## Domanda
Sia $f$ la funzione $2\pi$-periodica tale che $f(x)=0$ per $x\in(-\pi,0)$ e $f(x)=1$ per $x\in(0,\pi)$. Calcolare $a_0$, $a_n$ e $b_n$ per $n\ge1$.

:::hint
Gli integrali si riducono all'intervallo $(0,\pi)$, dove $f=1$.
:::

:::solution
Usando la formula dei coefficienti di Fourier

$$a_0=\frac1{2\pi}\int_0^{2\pi}f(x)\,dx,\qquad a_k=\frac1\pi\int_0^{2\pi}f(x)\cos kx\,dx,\qquad b_k=\frac1\pi\int_0^{2\pi}f(x)\sin kx\,dx\quad(k\ge1)$$

e il fatto che $f$ è nulla su $(-\pi,0)$:

$$a_0=\frac1\pi\int_0^\pi 1\,dx=1,\qquad a_n=\frac1\pi\int_0^\pi\cos nx\,dx=\frac{\sin n\pi}{n\pi}=0,$$

$$b_n=\frac1\pi\int_0^\pi\sin nx\,dx=\frac{1-\cos n\pi}{n\pi}=\frac{1-(-1)^n}{n\pi}.$$

Quindi $b_n=\frac{2}{n\pi}$ per $n$ dispari e $b_n=0$ per $n$ pari.
:::
:::

:::exercise{id="E8.14" chapter="8" difficulty="medio"}
## Domanda
Sia $f$ la funzione $2\pi$-periodica tale che $f(x)=x^2$ per $x\in[-\pi,\pi]$.

1. Scrivere la serie di Fourier di $f$ e dire a quale funzione converge.
2. Calcolare $\sum_{n=1}^\infty\frac{1}{n^2}$ e $\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n^2}$.

:::hint
$f$ è pari; integra per parti due volte per $a_n$. La funzione è continua e regolare a tratti, quindi la serie converge a $f$ in ogni punto; valuta in $x=\pi$ e $x=0$.
:::

:::solution
$f$ è pari, quindi $b_n=0$. Si ha $a_0=\frac2\pi\int_0^\pi x^2dx=\frac{2\pi^2}{3}$ e, per $n\ge1$,

$$a_n=\frac2\pi\int_0^\pi x^2\cos nx\,dx=\frac2\pi\left[\frac{x^2\sin nx}{n}+\frac{2x\cos nx}{n^2}-\frac{2\sin nx}{n^3}\right]_0^\pi=\frac2\pi\cdot\frac{2\pi(-1)^n}{n^2}=\frac{4(-1)^n}{n^2}.$$

La serie è

$$S(x)=\frac{\pi^2}{3}+4\sum_{n=1}^\infty\frac{(-1)^n}{n^2}\cos nx.$$

$f$ è continua su $\mathbb{R}$ (perché $f(-\pi)=f(\pi)$) e regolare a tratti, dunque $S(x)=f(x)$ per ogni $x$ (la convergenza è anche totale, dato che $\sum 1/n^2<\infty$).

In $x=\pi$: $\pi^2=\frac{\pi^2}{3}+4\sum\frac1{n^2}$, quindi $\sum\frac1{n^2}=\frac{\pi^2}{6}$.

In $x=0$: $0=\frac{\pi^2}{3}+4\sum\frac{(-1)^n}{n^2}$, quindi $\sum\frac{(-1)^{n+1}}{n^2}=\frac{\pi^2}{12}$.
:::
:::

:::exercise{id="E8.15" chapter="8" difficulty="medio"}
## Domanda
Sia $f$ la funzione di periodo $T=4$ tale che, in $\lbrack -2,2)$, $f(x)=1$ se $|x|<1$ e $f(x)=0$ se $1\le|x|<2$. Determinare la serie di Fourier di $f$ e calcolare la somma $S$ della serie nei punti $x=0$, $x=1$, $x=2$.

:::hint
Usa le formule {{formula:8.5}} con $T=4$: $f$ è pari, quindi $b_n=0$ e $a_n=\int_0^1\cos\frac{n\pi x}{2}dx$.
:::

:::solution
$f$ è pari, quindi $b_n=0$. Con $T=4$ e frequenza $\frac{2\pi n}{T}=\frac{n\pi}{2}$,

$$a_0=\frac24\int_{-2}^{2}f\,dx=\frac12\cdot2=1,\qquad a_n=\frac24\cdot2\int_0^1\cos\frac{n\pi x}2dx=\frac{2}{n\pi}\sin\frac{n\pi}{2}.$$

Quindi $a_n=0$ per $n$ pari e $a_{2k+1}=\frac{2(-1)^k}{(2k+1)\pi}$:

$$S(x)=\frac12+\frac2\pi\sum_{k=0}^\infty\frac{(-1)^k}{2k+1}\cos\frac{(2k+1)\pi x}{2}.$$

Somme: in $x=0$, $f$ è continua e $S(0)=1$ (coerente con $\frac12+\frac2\pi\cdot\frac\pi4=1$). In $x=1$ c'è un salto da $1$ a $0$, quindi $S(1)=\frac12$ (ogni termine vale $0$, perché $\cos\frac{(2k+1)\pi}2=0$). In $x=2$, $f$ è nulla in un intorno (per periodicità), quindi $S(2)=0$; controllo: $\frac12-\frac2\pi\sum\frac{(-1)^k}{2k+1}=\frac12-\frac12=0$.
:::
:::

:::exercise{id="E8.16" chapter="8" difficulty="difficile"}
## Domanda
Sia $f$ la funzione $2\pi$-periodica tale che

$$f(x)=\begin{cases}x & |x|\le\frac\pi2\\ \pi-x & \frac\pi2\le x\le\frac{3\pi}{2}\end{cases}$$

(onda triangolare). Determinare la serie di Fourier di $f$, stabilire a quale funzione converge e calcolare $\sum_{k=0}^\infty\frac1{(2k+1)^2}$.

:::hint
$f$ è continua e dispari: serve solo $b_n=\frac2\pi\int_0^\pi f(x)\sin nx\,dx$, da spezzare in $\lbrack 0,\frac\pi2\rbrack $ e $\lbrack \frac\pi2,\pi\rbrack $.
:::

:::solution
La funzione è continua (in $x=\frac\pi2$ i due rami valgono $\frac\pi2$, in $x=\frac{3\pi}2$ si ha $\pi-\frac{3\pi}2=-\frac\pi2$ che coincide con $f\left(-\frac\pi2\right)$).

Essa è dispari: per $x\in[0,\frac\pi2]$, $f(-x)=-x=-f(x)$; per $x\in[\frac\pi2,\pi]$, per periodicità $f(-x)=f(2\pi-x)$ con $2\pi-x\in[\pi,\frac{3\pi}2]$, quindi $f(-x)=\pi-(2\pi-x)=-(\pi-x)=-f(x)$. Dunque $a_n=0$ e $b_n=\frac2\pi\int_0^\pi f\sin nx\,dx$.

Primo pezzo:

$$\int_0^{\pi/2}x\sin nx\,dx=\left[-\frac{x\cos nx}{n}+\frac{\sin nx}{n^2}\right]_0^{\pi/2}=-\frac{\pi\cos\frac{n\pi}2}{2n}+\frac{\sin\frac{n\pi}2}{n^2}.$$

Secondo pezzo:

$$\int_{\pi/2}^{\pi}(\pi-x)\sin nx\,dx=\left[-\frac{(\pi-x)\cos nx}{n}-\frac{\sin nx}{n^2}\right]_{\pi/2}^{\pi}=\frac{\pi\cos\frac{n\pi}2}{2n}+\frac{\sin\frac{n\pi}2}{n^2}.$$

Sommando, i termini con il coseno si cancellano e rimane $\frac{2\sin(n\pi/2)}{n^2}$. Dunque

$$b_n=\frac{4\sin\frac{n\pi}{2}}{\pi n^2},$$

cioè $b_{2k}=0$ e $b_{2k+1}=\frac{4(-1)^k}{\pi(2k+1)^2}$. La serie è

$$S(x)=\frac4\pi\sum_{k=0}^\infty\frac{(-1)^k\sin((2k+1)x)}{(2k+1)^2}.$$

Poiché $f$ è continua e regolare a tratti, $S(x)=f(x)$ per ogni $x$ (convergenza totale).

In $x=\frac\pi2$: $\sin\left((2k+1)\frac\pi2\right)=(-1)^k$, quindi $\frac\pi2=\frac4\pi\sum\frac1{(2k+1)^2}$ e

$$\sum_{k=0}^\infty\frac1{(2k+1)^2}=\frac{\pi^2}{8}.$$
:::
:::

:::exercise{id="E8.17" chapter="8" difficulty="difficile"}
## Domanda
Sia $p(x)=\left|1+e^{ix}+e^{2ix}\right|^2$.

1. Mostrare che $p(x)=3+4\cos x+2\cos 2x$.
2. Determinare il massimo di $p$ su $\mathbb{R}$ e i punti in cui $p$ si annulla.
3. Calcolare $\int_{-\pi}^{\pi}p(x)^2\,dx$.

:::hint
Poni $z=e^{ix}$ e usa $|w|^2=w\bar w$ con $\bar z=z^{-1}$; per il massimo e gli zeri usa la disuguaglianza triangolare e il fatto che $1+z+z^2=0$ ha soluzioni esplicite.
:::

:::solution
Sia $z=e^{ix}$, così $\bar z=z^{-1}$ e $|z|=1$. Allora

$$p=(1+z+z^2)(1+\bar z+\bar z^2).$$

I nove prodotti sono: tre termini uguali a $1$ ($1\cdot1$, $z\bar z$, $z^2\bar z^2$), due termini $z$ ($z\cdot 1$ e $z^2\bar z$), due termini $\bar z$ ($\bar z\cdot 1$ e $z\bar z^2$), un termine $z^2$ e un termine $\bar z^2$. Quindi

$$p=3+2(z+\bar z)+(z^2+\bar z^2)=3+4\cos x+2\cos 2x.$$

Per il massimo: $|1+z+z^2|\le 1+|z|+|z^2|=3$, quindi $p\le 9$, e $p(0)=3+4+2=9$. Il massimo è $9$.

Per gli zeri: $p(x)=0$ se e solo se $1+z+z^2=0$, cioè $z=e^{\pm 2\pi i/3}$, quindi $x=\pm\frac{2\pi}{3}+2k\pi$, $k\in\mathbb{Z}$. Verifica: $3+4\cos\frac{2\pi}{3}+2\cos\frac{4\pi}{3}=3-2-1=0$.

Per l'integrale, per le relazioni di ortogonalità $\int_{-\pi}^{\pi}p^2\,dx=2\pi\cdot 3^2+\pi(4^2+2^2)=18\pi+20\pi=38\pi$.
:::
:::

:::exercise{id="E8.18" chapter="8" difficulty="facile"}
## Domanda
Sia $f$ la funzione pari e $2\pi$-periodica tale che, per $x\in[0,\pi]$, $f(x)=1$ se $0\le x<\frac\pi2$ e $f(x)=0$ se $\frac\pi2\le x\le\pi$. Sia $S$ la somma della sua serie di Fourier. Determinare $S(0)$, $S\left(\frac\pi2\right)$, $S(\pi)$ e $S(3\pi)$.

:::hint
Applica il teorema di convergenza puntuale: nei punti di salto la somma è la media dei limiti destro e sinistro.
:::

:::solution
Poiché $f$ è pari, $f=1$ su $\left(-\frac\pi2,\frac\pi2\right)$ e $f=0$ su $\left(\frac\pi2,\frac{3\pi}2\right)$ (per periodicità), e $f$ è regolare a tratti.

- In $x=0$ la funzione è continua e vale $1$: $S(0)=1$.
- In $x=\frac\pi2$ c'è un salto: limite sinistro $1$, destro $0$, quindi $S\left(\frac\pi2\right)=\frac12$.
- In $x=\pi$ la funzione è identicamente $0$ in un intorno: $S(\pi)=0$.
- Per periodicità $S(3\pi)=S(\pi)=0$.
:::
:::

:::exercise{id="E8.19" chapter="8" difficulty="facile"}
## Domanda
Sia $f$ la funzione $2\pi$-periodica tale che $f(x)=x$ per $x\in(-\pi,\pi)$. Calcolare i coefficienti di Fourier $a_n$ e $b_n$ per $n\ge 0$.

:::hint
La funzione è dispari: i coefficienti $a_n$ sono nulli. Per $b_n$ integra per parti $\int_0^\pi x\sin(nx)\,dx$ per $n\ge 1$; tratta separatamente il caso $n=0$.
:::

:::solution
Poiché $f$ è dispari, $a_n=0$ per ogni $n\ge 0$. Inoltre $b_0=0$, perché $\sin(0x)=0$.

Per $n\ge 1$, usando la formula {{formula:8.2}} e la parità di $x\sin(nx)$,

$$b_n=\frac1\pi\int_{-\pi}^{\pi}x\sin(nx)\,dx=\frac2\pi\int_0^\pi x\sin(nx)\,dx.$$

Integrando per parti,

$$\int_0^\pi x\sin(nx)\,dx=\left[-\frac{x\cos(nx)}{n}+\frac{\sin(nx)}{n^2}\right]_0^\pi=-\frac{\pi(-1)^n}{n}.$$

Quindi, per $n\ge 1$,

$$b_n=\frac{2}{\pi}\left(-\frac{\pi(-1)^n}{n}\right)=\frac{2(-1)^{n+1}}{n}.$$
:::
:::

:::exercise{id="E8.20" chapter="8" difficulty="difficile"}
## Domanda
Sia $f$ la funzione $2\pi$-periodica tale che $f(x)=\cos\frac x2$ per $x\in[-\pi,\pi]$.

1. Verificare che $f$ è continua e calcolare i suoi coefficienti di Fourier.
2. Usando l'identità di Parseval, calcolare $\sum_{n=1}^{\infty}\frac{1}{(4n^2-1)^2}$.

:::hint
Usa $\cos\frac x2\cos nx=\frac12\left[\cos\left(n+\frac12\right)x+\cos\left(n-\frac12\right)x\right]$ e ricorda che $\sin\left(n\pi+\frac\pi2\right)=(-1)^n$ e $\sin\left(n\pi-\frac\pi2\right)=-(-1)^n$. Per Parseval calcola $\int_{-\pi}^{\pi}\cos^2\frac x2\,dx$.
:::

:::solution
Continuità: $f(\pi)=\cos\frac\pi2=0=\cos\left(-\frac\pi2\right)=f(-\pi)$, quindi il raccordo è continuo.

$f$ è pari, dunque $b_n=0$ e

$$a_n=\frac1\pi\int_{-\pi}^{\pi}\cos\frac x2\cos nx\,dx=\frac1{2\pi}\int_{-\pi}^{\pi}\left[\cos\left(n+\tfrac12\right)x+\cos\left(n-\tfrac12\right)x\right]dx.$$

Integrando,

$$a_n=\frac1\pi\left[\frac{\sin(n+\frac12)\pi}{n+\frac12}+\frac{\sin(n-\frac12)\pi}{n-\frac12}\right]=\frac{(-1)^n}{\pi}\left[\frac{1}{n+\frac12}-\frac1{n-\frac12}\right]=\frac{(-1)^n}{\pi}\cdot\frac{-1}{n^2-\frac14}.$$

Quindi

$$a_n=\frac{4(-1)^{n+1}}{\pi(4n^2-1)}.$$

La formula vale anche per $n=0$: $a_0=\frac4\pi$.

Parseval: $\int_{-\pi}^{\pi}f^2\,dx=\int_{-\pi}^{\pi}\frac{1+\cos x}{2}\,dx=\pi$. Per l'identità di Parseval {{formula:8.14}},

$$\pi=\pi\left(\frac{a_0^2}{2}+\sum_{n\ge1}a_n^2\right)=\pi\left(\frac{8}{\pi^2}+\frac{16}{\pi^2}\sum_{n\ge1}\frac{1}{(4n^2-1)^2}\right).$$

Quindi $\sum_{n\ge1}\frac1{(4n^2-1)^2}=\frac{\pi^2-8}{16}$.
:::
:::

:::exercise{id="E8.21" chapter="8" difficulty="difficile"}
## Domanda
Sia $f$ la funzione di periodo $T=3$ tale che $f(x)=x$ per $x\in\lbrack 0,3)$.

1. Calcolare la serie di Fourier di $f$ e la sua somma in $x=0$.
2. Valutando la serie in $x=\frac34$, ritrovare il valore di $\sum_{k\ge0}\frac{(-1)^k}{2k+1}$.
3. Usando l'identità di Parseval per il periodo $T$, ritrovare $\sum_{n\ge1}\frac1{n^2}$.

:::hint
Calcola $a_n=\frac2T\int_0^Tf(x)\cos\frac{2\pi nx}T\,dx$ e $b_n$ analogo sull'intervallo $\lbrack 0,3\rbrack $. Parseval per periodo $T$: $\frac2T\int_0^Tf^2dx=\frac{a_0^2}{2}+\sum(a_n^2+b_n^2)$.
:::

:::solution
1. Sia $\omega_n=\frac{2\pi n}{3}$. Si ha $a_0=\frac23\int_0^3x\,dx=3$ e, integrando per parti con $\sin(3\omega_n)=0$, $\cos(3\omega_n)=1$,

$$a_n=\frac23\left[\frac{x\sin\omega_nx}{\omega_n}+\frac{\cos\omega_nx}{\omega_n^2}\right]_0^3=0,\qquad b_n=\frac23\left[-\frac{x\cos\omega_nx}{\omega_n}+\frac{\sin\omega_nx}{\omega_n^2}\right]_0^3=\frac23\cdot\left(-\frac{3}{\omega_n}\right)=-\frac3{\pi n}.$$

La serie è

$$S(x)=\frac32-\frac3\pi\sum_{n=1}^\infty\frac{1}{n}\sin\frac{2\pi nx}{3}.$$

In $x=0$ (punto di salto: limite sinistro $3$, destro $0$) la somma è $S(0)=\frac32$, coerente con il fatto che ogni seno si annulla.

2. In $x=\frac34$, $f$ è continua e $f=\frac34$; inoltre $\frac{2\pi n}{3}\cdot\frac34=\frac{n\pi}2$. Dunque

$$\frac34=\frac32-\frac3\pi\sum\frac{\sin\frac{n\pi}{2}}{n}\quad\Longrightarrow\quad\sum_{n\ge1}\frac{\sin\frac{n\pi}2}{n}=\frac\pi4.$$

Con $n=2k+1$ e $\sin\frac{n\pi}{2}=(-1)^k$ si ottiene $\sum_{k\ge0}\frac{(-1)^k}{2k+1}=\frac\pi4$.

3. $\frac2T\int_0^Tf^2dx=\frac23\int_0^3x^2dx=6$. Parseval:

$$6=\frac{3^2}{2}+\sum_{n\ge1}\frac{9}{\pi^2n^2}\quad\Longrightarrow\quad\frac{9}{\pi^2}\sum\frac1{n^2}=\frac32\quad\Longrightarrow\quad\sum_{n\ge1}\frac1{n^2}=\frac{\pi^2}{6}.$$
:::
:::

:::exercise{id="E8.22" chapter="8" difficulty="medio"}
## Domanda
Sia $f(x)=x^2$ per $x\in[-\pi,\pi]$, prolungata con periodo $2\pi$. Sapendo che la sua serie di Fourier è

$$\frac{\pi^2}{3}+4\sum_{n=1}^\infty\frac{(-1)^n}{n^2}\cos nx,$$

calcolare, usando l'identità di Parseval, la somma $\sum_{n=1}^\infty\frac1{n^4}$.

:::hint
Calcola $\int_{-\pi}^{\pi}x^4\,dx$ e uguagliala a $\pi\left(\frac{a_0^2}{2}+\sum a_n^2\right)$ con $a_0=\frac{2\pi^2}{3}$, $a_n=\frac{4(-1)^n}{n^2}$.
:::

:::solution
Qui $\frac{a_0}{2}=\frac{\pi^2}{3}$, quindi $a_0=\frac{2\pi^2}3$, $a_n=\frac{4(-1)^n}{n^2}$, $b_n=0$. Il primo membro dell'identità di Parseval {{formula:8.14}} è

$$\int_{-\pi}^{\pi}x^4dx=\frac{2\pi^5}{5}.$$

Il secondo membro è

$$\pi\left(\frac{a_0^2}2+\sum a_n^2\right)=\pi\left(\frac{2\pi^4}{9}+16\sum\frac1{n^4}\right).$$

Uguagliando,

$$16\pi\sum\frac1{n^4}=\frac{2\pi^5}{5}-\frac{2\pi^5}{9}=\frac{8\pi^5}{45},$$

quindi $\sum_{n\ge1}\frac1{n^4}=\frac{\pi^4}{90}$.
:::
:::

:::exercise{id="E8.23" chapter="8" difficulty="difficile"}
## Domanda
Sia $f$ la funzione dispari e $2\pi$-periodica tale che in $\lbrack 0,\pi)$

$$f(x)=\begin{cases}0 & 0\le x<\frac\pi3\\ 1 & \frac\pi3\le x<\pi.\end{cases}$$

1. Detta $S$ la somma della serie di Fourier di $f$, calcolare $S(0)$, $S\left(\frac\pi3\right)$, $S\left(-\frac\pi3\right)$, $S(\pi)$, $S\left(\frac{2\pi}3\right)$.
2. Calcolare i coefficienti $b_n$ e usare l'identità di Parseval per ricavare $\sum_{3\nmid n}\frac1{n^2}$, dove la somma è estesa agli $n\ge1$ non multipli di $3$.

:::hint
Ricostruisci $f$ su $(-\pi,0)$ per disparità. Per Parseval osserva che $\left(\cos\frac{n\pi}3-(-1)^n\right)^2$ vale $\frac94$ se $3\nmid n$ e $0$ se $3\mid n$.
:::

:::solution
1. Per disparità $f=0$ su $\left(-\frac\pi3,\frac\pi3\right)$, $f=1$ su $\left(\frac\pi3,\pi\right)$ e $f=-1$ su $\left(-\pi,-\frac\pi3\right)$. Con il teorema di convergenza puntuale:

- $S(0)=0$;
- in $\frac\pi3$ i limiti sono $0$ (sinistro) e $1$ (destro): $S\left(\frac\pi3\right)=\frac12$;
- in $-\frac\pi3$ i limiti sono $-1$ e $0$: $S\left(-\frac\pi3\right)=-\frac12$;
- in $\pi$ i limiti sono $1$ (sinistro) e $-1$ (destro, per periodicità): $S(\pi)=0$;
- in $\frac{2\pi}3$ $f$ è continua: $S\left(\frac{2\pi}3\right)=1$.

2. $a_n=0$ e

$$b_n=\frac2\pi\int_{\pi/3}^{\pi}\sin nx\,dx=\frac{2}{n\pi}\left(\cos\frac{n\pi}3-(-1)^n\right).$$

Al variare di $n$ modulo $6$: per $n\equiv\pm1$ si ha $\cos\frac{n\pi}3=\frac12$ e $(-1)^n=-1$, differenza $\frac32$; per $n\equiv\pm2$ si ha $\cos\frac{n\pi}3=-\frac12$ e $(-1)^n=1$, differenza $-\frac32$; per $n\equiv3$ la differenza è $-1+1=0$; per $n\equiv0$ è $1-1=0$. Quindi $b_n^2=\frac{4}{n^2\pi^2}\cdot\frac94=\frac{9}{\pi^2n^2}$ se $3\nmid n$, altrimenti $b_n=0$.

Parseval: $\int_{-\pi}^{\pi}f^2dx=2\cdot\frac{2\pi}3=\frac{4\pi}3=\pi\sum b_n^2=\pi\cdot\frac9{\pi^2}\sum_{3\nmid n}\frac1{n^2}$. Perciò

$$\sum_{3\nmid n}\frac1{n^2}=\frac{4\pi}{3}\cdot\frac{\pi}{9}=\frac{4\pi^2}{27}.$$

Controllo: $\left(1-\frac19\right)\frac{\pi^2}6=\frac{4\pi^2}{27}$.
:::
:::

:::exercise{id="E8.24" chapter="8" difficulty="facile"}
## Domanda
Calcolare la somma della serie $\sum_{n=0}^\infty\frac{(-1)^n}{(2n+1)\,3^n}$.

:::hint
Riconosci la serie di Maclaurin di $\arctan x$ calcolata in $x=\frac1{\sqrt3}$.
:::

:::solution
Dalla serie {{formula:7.4}}, $\arctan x=\sum_{n\ge0}\frac{(-1)^nx^{2n+1}}{2n+1}$ per $|x|\le1$. Con $x=\frac1{\sqrt3}$ si ha $x^{2n+1}=\frac{1}{\sqrt3}\cdot3^{-n}$, quindi

$$\arctan\frac1{\sqrt3}=\frac1{\sqrt3}\sum_{n\ge0}\frac{(-1)^n}{(2n+1)3^n}.$$

Poiché $\arctan\frac1{\sqrt3}=\frac\pi6$, la somma vale $\sqrt3\cdot\frac\pi6=\frac{\pi\sqrt3}{6}$.
:::
:::

:::exercise{id="E8.25" chapter="8" difficulty="difficile"}
## Domanda
Sia $g(x)=e^{e^{ix}}$, $x\in\mathbb{R}$, funzione complessa $2\pi$-periodica.

1. Mostrare che i coefficienti di Fourier complessi di $g$ sono $c_n=\frac1{n!}$ per $n\ge0$ e $c_n=0$ per $n<0$.
2. Dedurne la serie di Fourier di $u(x)=e^{\cos x}\cos(\sin x)$ e il valore di $\int_{-\pi}^{\pi}u(x)\cos 3x\,dx$.
3. Calcolare $\int_{-\pi}^{\pi}e^{2\cos x}\,dx$ come somma di una serie numerica.

:::hint
Sostituisci $z=e^{ix}$ nella serie di Maclaurin dell'esponenziale e usa la convergenza totale per integrare termine a termine. Poi $u=\operatorname{Re}g$ e $|g|^2=e^{2\cos x}$.
:::

:::solution
1. Per la serie di Maclaurin dell'esponenziale, $e^{z}=\sum_{n\ge0}\frac{z^n}{n!}$, e per $z=e^{ix}$ si ha $g(x)=\sum_{n\ge0}\frac{e^{inx}}{n!}$. La serie converge totalmente in $\mathbb{R}$ (i termini hanno modulo $\frac1{n!}$), quindi si può integrare termine a termine:

$$c_m=\frac1{2\pi}\int_{-\pi}^{\pi}g(x)e^{-imx}dx=\sum_{n\ge0}\frac1{n!}\cdot\frac1{2\pi}\int_{-\pi}^{\pi}e^{i(n-m)x}dx=\begin{cases}\frac1{m!}& m\ge0\\0&m<0.\end{cases}$$

2. Poiché $e^{e^{ix}}=e^{\cos x}e^{i\sin x}$, si ha $u=\operatorname{Re}g$ e quindi, prendendo la parte reale della serie,

$$u(x)=\sum_{n=0}^\infty\frac{\cos nx}{n!}=1+\sum_{n\ge1}\frac{\cos nx}{n!},$$

cioè $a_0=2$, $a_n=\frac1{n!}$, $b_n=0$ (la serie converge totalmente, quindi è la serie di Fourier di $u$). Allora

$$\int_{-\pi}^{\pi}u(x)\cos 3x\,dx=\pi a_3=\frac{\pi}{6}.$$

3. Si ha $|g|^2=e^{2\operatorname{Re}e^{ix}}=e^{2\cos x}$. Per l'identità di Parseval in forma esponenziale

$$\int_{-\pi}^{\pi}e^{2\cos x}dx=2\pi\sum_{n\ge0}\frac1{(n!)^2}.$$

Controllo numerico: la serie vale circa $1+1+\frac14+\frac1{36}+\frac1{576}\approx2.2796$.
:::
:::

:::exercise{id="E8.26" chapter="8" difficulty="medio"}
## Domanda
Sia $f$ la funzione $2\pi$-periodica tale che $f(x)=|x|$ per $x\in[-\pi,\pi]$.

1. Calcolare i coefficienti di Fourier di $f$.
2. Valutando la serie in $x=0$, calcolare $\sum_{k=0}^{\infty}\frac{1}{(2k+1)^2}$.

:::hint
La funzione è pari, quindi $b_n=0$ e $a_n=\frac2\pi\int_0^\pi x\cos nx\,dx$; $f$ è continua, quindi la serie converge a $f(0)=0$.
:::

:::solution
Essendo $f$ pari, $b_n=0$. Inoltre $a_0=\frac2\pi\int_0^\pi x\,dx=\pi$ e, per $n\ge1$,

$$a_n=\frac2\pi\int_0^\pi x\cos nx\,dx=\frac2\pi\left[\frac{x\sin nx}{n}+\frac{\cos nx}{n^2}\right]_0^\pi=\frac{2\left((-1)^n-1\right)}{\pi n^2}.$$

Quindi $a_n=0$ per $n$ pari e $a_n=-\frac{4}{\pi n^2}$ per $n$ dispari, cioè

$$S(x)=\frac\pi2-\frac4\pi\sum_{k=0}^\infty\frac{\cos((2k+1)x)}{(2k+1)^2}.$$

La funzione $f$ è continua e regolare a tratti, quindi $S(0)=f(0)=0$:

$$0=\frac\pi2-\frac4\pi\sum_{k=0}^\infty\frac1{(2k+1)^2}\quad\Longrightarrow\quad\sum_{k=0}^\infty\frac1{(2k+1)^2}=\frac{\pi^2}{8}.$$
:::
:::

:::exercise{id="E8.27" chapter="8" difficulty="difficile"}
## Domanda
Sia $f(x)=\dfrac{4-2\cos x}{5-4\cos x}$. Sapendo che $f(x)=1+\sum_{n=1}^\infty\frac{\cos nx}{2^n}$ (serie totalmente convergente), calcolare

1. $\int_{-\pi}^{\pi}f(x)\,dx$;
2. $\int_{-\pi}^{\pi}f(x)^2\,dx$;
3. $\int_{-\pi}^{\pi}\dfrac{dx}{5-4\cos x}$.

:::hint
La serie data è la serie di Fourier di $f$: leggi $a_0$ e $a_n$ e applica Parseval. Per il punto 3 osserva che $f=\frac12\left(1+\frac{3}{5-4\cos x}\right)$.
:::

:::solution
La serie data è la serie di Fourier di $f$ (convergenza totale), con $\frac{a_0}2=1$, cioè $a_0=2$, $a_n=2^{-n}$, $b_n=0$.

1. L'integrale vale $\pi a_0=2\pi$, perché i termini con $\cos nx$ hanno integrale nullo.

2. Per l'identità di Parseval {{formula:8.14}}

$$\int_{-\pi}^{\pi}f^2dx=\pi\left(\frac{a_0^2}{2}+\sum_{n\ge1}a_n^2\right)=\pi\left(2+\sum_{n\ge1}4^{-n}\right)=\pi\left(2+\frac13\right)=\frac{7\pi}{3}.$$

3. Vale $\frac12\left(1+\frac{3}{5-4\cos x}\right)=\frac{5-4\cos x+3}{2(5-4\cos x)}=\frac{4-2\cos x}{5-4\cos x}=f(x)$. Integrando su $\lbrack -\pi,\pi\rbrack $:

$$2\pi=\frac12\left(2\pi+3I\right)\quad\Longrightarrow\quad I=\int_{-\pi}^{\pi}\frac{dx}{5-4\cos x}=\frac{2\pi}{3}.$$
:::
:::

:::exercise{id="E9.1" chapter="9" difficulty="facile"}
## Domanda
Si consideri il problema di Cauchy $y'=3y^{2/3}$, $y(0)=0$. Verificare che le funzioni $y_1(x)=0$ e $y_2(x)=x^3$ sono entrambe soluzioni su $\mathbb{R}$. Spiegare perché ciò non contraddice il teorema di esistenza e unicità.

:::hint
Sostituisci le due funzioni nell'equazione e studia la derivata di $f(y)=3y^{2/3}$ in $y=0$.
:::

:::solution
Per $y_1=0$: $y_1'=0=3\cdot 0^{2/3}$ e $y_1(0)=0$.

Per $y_2=x^3$: $y_2'=3x^2$ e $3y_2^{2/3}=3\left(x^3\right)^{2/3}=3x^2$; inoltre $y_2(0)=0$.

La funzione $f(y)=3y^{2/3}$ è continua, quindi il teorema di Peano assicura l'esistenza di una soluzione. Tuttavia, per $y\ne 0$,

$$
\frac{|f(y)-f(0)|}{|y|}=3|y|^{-1/3}\longrightarrow +\infty\quad\text{per }y\to 0.
$$

Dunque nessuna costante di Lipschitz può valere in un intorno di $y=0$. Le ipotesi del teorema di unicità non sono soddisfatte nel dato iniziale $(0,0)$: l'esistenza è garantita, ma l'unicità no, quindi la presenza di più soluzioni non è in contraddizione con il teorema.
:::
:::

:::exercise{id="E9.2" chapter="9" difficulty="medio"}
## Domanda
Risolvere il problema di Cauchy $y''-3y'+2y=e^{t}$, $y(0)=0$, $y'(0)=0$.

:::hint
Il termine noto $e^t$ è soluzione dell'omogenea: cerca una soluzione particolare del tipo $Ate^t$.
:::

:::solution
Il polinomio caratteristico $\lambda^2-3\lambda+2=(\lambda-1)(\lambda-2)$ dà l'omogenea $c_1e^t+c_2e^{2t}$.

Poiché $1$ è radice, cerchiamo $y_p=Ate^t$. Allora $y_p'=A(1+t)e^t$, $y_p''=A(2+t)e^t$ e

$$y_p''-3y_p'+2y_p=Ae^t\left[(2+t)-3(1+t)+2t\right]=-Ae^t.$$

Imponendo $-A=1$ si ha $A=-1$, cioè $y_p=-te^t$.

L'integrale generale è $y=c_1e^t+c_2e^{2t}-te^t$. Dalle condizioni: $y(0)=c_1+c_2=0$ e $y'(0)=c_1+2c_2-1=0$, da cui $c_2=1$, $c_1=-1$.

$$y(t)=-e^t+e^{2t}-te^t.$$
:::
:::

:::exercise{id="E9.3" chapter="9" difficulty="medio"}
## Domanda
Sia $f(x,y)=x\sqrt{|y|}$ e si consideri $y'=f(x,y)$, $y(x_0)=y_0$.

1. Per quali $(x_0,y_0)$ il teorema di esistenza e unicità locale, con $f$ di classe $C^1$ rispetto a $y$, garantisce un'unica soluzione locale?
2. Per $(x_0,y_0)=(0,0)$ mostrare che non c'è unicità, esibendo due soluzioni.

:::hint
Calcola $\frac{\partial f}{\partial y}$ e studiane la continuità. Per il punto 2 prova $y(x)=ax^4$ con $a$ opportuno.
:::

:::solution
La funzione $f$ è continua su $\mathbb{R}^2$. Per $y\neq0$ si ha

$$
\frac{\partial f}{\partial y}=\frac{x\,\operatorname{sgn}(y)}{2\sqrt{|y|}}.
$$

Questa derivata è continua nei punti con $y\neq0$. Dunque, per ogni $(x_0,y_0)$ con $y_0\neq0$, il teorema garantisce l'esistenza e l'unicità di una soluzione locale.

Per $y_0=0$, la derivata rispetto a $y$ non esiste in $y=0$ se $x\neq0$; infatti il rapporto incrementale rispetto a $y$ diverge quando $y\to0$. Quindi $f$ non è di classe $C^1$ rispetto a $y$ in alcun intorno di $(x_0,0)$, qualunque sia $x_0$. Il teorema non garantisce l'unicità in questi punti; questo non implica che la soluzione non sia unica.

Per $(x_0,y_0)=(0,0)$, la funzione $y_1(x)=0$ è una soluzione. Cerchiamo una seconda soluzione nella forma $y_2(x)=ax^4$, con $a>0$. Si ha

$$
y_2'=4ax^3,\qquad x\sqrt{|y_2|}=\sqrt{a}\,x^3.
$$

La condizione $4a=\sqrt{a}$ dà $a=\frac{1}{16}$. Pertanto $y_2(x)=\frac{x^4}{16}$ soddisfa l'equazione e la condizione iniziale, poiché $y_2'=\frac{x^3}{4}=x\sqrt{y_2}$ e $y_2(0)=0$. Le due soluzioni sono distinte.
:::
:::

:::exercise{id="E9.4" chapter="9" difficulty="difficile"}
## Domanda
Si consideri l'equazione $y'''-y''-y'+y=0$.

1. Determinarne l'integrale generale.
2. Determinare la soluzione con $y(0)=1$, $y'(0)=0$, $y''(0)=0$.
3. Stabilire per quali soluzioni $y$ si ha $y$ limitata su $\lbrack 0,+\infty)$.

:::hint
Il polinomio caratteristico si fattorizza per raccolta: $\lambda^3-\lambda^2-\lambda+1=\lambda^2(\lambda-1)-(\lambda-1)$. Ricorda che una radice doppia $\lambda$ produce $e^{\lambda t}$ e $te^{\lambda t}$.
:::

:::solution
1. Il polinomio caratteristico è $\lambda^3-\lambda^2-\lambda+1=(\lambda-1)(\lambda^2-1)=(\lambda-1)^2(\lambda+1)$. Radici: $1$ (doppia) e $-1$ (semplice). Quindi

$$y(t)=(c_1+c_2t)e^t+c_3e^{-t}.$$

2. Si ha $y'=(c_1+c_2+c_2t)e^t-c_3e^{-t}$ e $y''=(c_1+2c_2+c_2t)e^t+c_3e^{-t}$. Le condizioni iniziali danno

$$c_1+c_3=1,\qquad c_1+c_2-c_3=0,\qquad c_1+2c_2+c_3=0.$$

Sottraendo la prima dalla terza: $2c_2=-1$, $c_2=-\frac12$. Sommando la prima e la seconda: $2c_1+c_2=1$, quindi $c_1=\frac34$ e $c_3=\frac14$. Dunque

$$y(t)=\left(\frac34-\frac t2\right)e^t+\frac14e^{-t}.$$

Verifica della seconda condizione: $\frac34-\frac12-\frac14=0$.

3. Se $(c_1,c_2)\neq(0,0)$ il termine $(c_1+c_2t)e^t$ è illimitato per $t\to+\infty$, mentre $c_3e^{-t}$ è limitato. Perciò $y$ è limitata su $\lbrack 0,+\infty)$ se e solo se $c_1=c_2=0$, cioè $y=c_3e^{-t}$.
:::
:::

:::exercise{id="E9.5" chapter="9" difficulty="facile"}
## Domanda
Determinare l'integrale generale di $y''+4y'+13y=0$.

:::hint
Le radici del polinomio caratteristico sono complesse coniugate.
:::

:::solution
Il polinomio caratteristico è $\lambda^2+4\lambda+13$, con discriminante $16-52=-36$. Le radici sono

$$\lambda=\frac{-4\pm6i}{2}=-2\pm3i.$$

Quindi l'integrale generale è

$$y(t)=e^{-2t}\left(c_1\cos3t+c_2\sin3t\right),\qquad c_1,c_2\in\mathbb{R}.$$
:::
:::

:::exercise{id="E9.6" chapter="9" difficulty="facile"}
## Domanda
Risolvere il sistema

$$\begin{cases}x'=2x\\ y'=-y\end{cases}\qquad x(0)=1,\; y(0)=3.$$

:::hint
Il sistema è diagonale: le due equazioni sono indipendenti.
:::

:::solution
La prima equazione dà $x(t)=x(0)e^{2t}=e^{2t}$; la seconda $y(t)=y(0)e^{-t}=3e^{-t}$.

Quindi $\mathbf{X}(t)=\left(e^{2t},\,3e^{-t}\right)$.
:::
:::

:::exercise{id="E9.7" chapter="9" difficulty="medio"}
## Domanda
Risolvere il problema di Cauchy

$$\mathbf{X}'=\begin{pmatrix}1&2\\2&1\end{pmatrix}\mathbf{X},\qquad \mathbf{X}(0)=\begin{pmatrix}2\\0\end{pmatrix}.$$

:::hint
Calcola autovalori e autovettori della matrice e scrivi $\mathbf{X}$ come combinazione di $e^{\lambda t}\mathbf{v}$.
:::

:::solution
Il polinomio caratteristico è $(1-\lambda)^2-4=0$, quindi $\lambda=3$ oppure $\lambda=-1$. Autovettori: per $\lambda=3$, $\mathbf{v}_1=(1,1)$; per $\lambda=-1$, $\mathbf{v}_2=(1,-1)$.

L'integrale generale è

$$\mathbf{X}(t)=c_1e^{3t}\begin{pmatrix}1\\1\end{pmatrix}+c_2e^{-t}\begin{pmatrix}1\\-1\end{pmatrix}.$$

Da $\mathbf{X}(0)=(2,0)$: $c_1+c_2=2$ e $c_1-c_2=0$, dunque $c_1=c_2=1$. Pertanto

$$x(t)=e^{3t}+e^{-t},\qquad y(t)=e^{3t}-e^{-t}.$$

Verifica: $x'=3e^{3t}-e^{-t}=x+2y$.
:::
:::

:::exercise{id="E9.8" chapter="9" difficulty="difficile"}
## Domanda
Si consideri il sistema $x'=y$, $y'=-4x$ con $x(0)=1$, $y(0)=0$.

1. Determinare la soluzione.
2. Mostrare che la quantità $4x(t)^2+y(t)^2$ è costante e calcolarne il valore.

:::hint
Gli autovalori della matrice sono immaginari puri: usa la parte reale e immaginaria di $e^{2it}\mathbf{v}$. Per il punto 2 deriva la quantità.
:::

:::solution
1. La matrice è $A=\begin{pmatrix}0&1\\-4&0\end{pmatrix}$, con polinomio caratteristico $\lambda^2+4=0$, quindi $\lambda=\pm2i$. Equivalentemente, $x''=y'=-4x$, da cui $x=c_1\cos2t+c_2\sin2t$ e $y=x'=-2c_1\sin2t+2c_2\cos2t$.

Le condizioni iniziali $x(0)=c_1=1$ e $y(0)=2c_2=0$ danno

$$x(t)=\cos2t,\qquad y(t)=-2\sin2t.$$

Verifica: $y'=-4\cos2t=-4x$.

2. Derivando, $\frac{d}{dt}\left(4x^2+y^2\right)=8xx'+2yy'=8xy+2y(-4x)=0$. Dunque la quantità è costante, uguale al valore in $t=0$: $4\cdot1+0=4$. Direttamente: $4\cos^22t+4\sin^22t=4$.
:::
:::

:::exercise{id="E9.9" chapter="9" difficulty="facile"}
## Domanda
Risolvere il problema di Cauchy $y''-5y'+6y=0$, $y(0)=1$, $y'(0)=0$.

:::hint
Risolvi il polinomio caratteristico $\lambda^2-5\lambda+6=0$.
:::

:::solution
Il polinomio caratteristico $\lambda^2-5\lambda+6=(\lambda-2)(\lambda-3)$ ha radici $2$ e $3$. L'integrale generale è $y=c_1e^{2t}+c_2e^{3t}$.

Le condizioni danno $c_1+c_2=1$ e $2c_1+3c_2=0$, da cui $c_2=-2$, $c_1=3$.

Quindi $y(t)=3e^{2t}-2e^{3t}$. Verifica: $y'(0)=6-6=0$.
:::
:::

:::exercise{id="E9.10" chapter="9" difficulty="medio"}
## Domanda
Secondo la legge di raffreddamento di Newton, la temperatura $T(t)$ di un corpo in un ambiente a $20\,^\circ\mathrm{C}$ soddisfa $T'(t)=-k\left(T(t)-20\right)$ con $k>0$. Il corpo ha temperatura iniziale $T(0)=90\,^\circ\mathrm{C}$ e dopo $10$ minuti si trova a $50\,^\circ\mathrm{C}$. Calcolare la temperatura dopo $20$ minuti.

:::hint
Poni $u=T-20$: l'equazione diventa $u'=-ku$. Determina $e^{-10k}$ dalla seconda condizione.
:::

:::solution
Posto $u(t)=T(t)-20$ si ha $u'=-ku$, quindi $u(t)=u(0)e^{-kt}=70e^{-kt}$.

Da $T(10)=50$ segue $u(10)=30=70e^{-10k}$, cioè $e^{-10k}=\frac37$.

Allora $u(20)=70\left(e^{-10k}\right)^2=70\cdot\frac{9}{49}=\frac{90}{7}$ e

$$T(20)=20+\frac{90}{7}=\frac{230}{7}\approx 32{,}9\,^\circ\mathrm{C}.$$
:::
:::

:::exercise{id="E9.11" chapter="9" difficulty="medio"}
## Domanda
Utilizzando la trasformata di Laplace, risolvere $y''+y=t$ per $t\ge0$, con $y(0)=1$, $y'(0)=0$.

:::hint
Trasforma entrambi i membri con {{formula:9.10}}, ricavando $Y(s)$, e decomponi in fratti semplici.
:::

:::solution
Indichiamo $Y(s)=\mathcal{L}\lbrack y\rbrack (s)$. Poiché $\mathcal{L}\lbrack y''\rbrack =s^2Y-sy(0)-y'(0)=s^2Y-s$ e $\mathcal{L}\lbrack t\rbrack =\frac1{s^2}$, si ottiene

$$s^2Y-s+Y=\frac1{s^2}\ \Longrightarrow\ Y(s)=\frac{s}{s^2+1}+\frac{1}{s^2\left(s^2+1\right)}.$$

Vale $\frac1{s^2(s^2+1)}=\frac1{s^2}-\frac1{s^2+1}$. Quindi

$$Y(s)=\frac{s}{s^2+1}+\frac1{s^2}-\frac1{s^2+1}$$

e, antitrasformando,

$$y(t)=\cos t+t-\sin t.$$

Verifica: $y(0)=1$, $y'=-\sin t+1-\cos t$ vale $0$ in $t=0$, e $y''+y=(-\cos t+\sin t)+\cos t+t-\sin t=t$.
:::
:::

:::exercise{id="E9.12" chapter="9" difficulty="medio"}
## Domanda
Determinare tutti i valori $\alpha\in\mathbb{R}$ per i quali la funzione $y(x)=e^{\alpha x}$ è soluzione dell'equazione $y'''-3y''+4y=0$ su $\mathbb{R}$.

:::hint
Sostituisci $y=e^{\alpha x}$ ed ottieni un'equazione algebrica in $\alpha$; osserva che $\alpha=-1$ è una radice.
:::

:::solution
Se $y=e^{\alpha x}$ allora $y'=\alpha e^{\alpha x}$, $y''=\alpha^2e^{\alpha x}$, $y'''=\alpha^3e^{\alpha x}$. Sostituendo si ottiene

$$e^{\alpha x}\left(\alpha^3-3\alpha^2+4\right)=0.$$

Poiché $e^{\alpha x}\neq0$, deve essere $\alpha^3-3\alpha^2+4=0$. Si verifica che $\alpha=-1$ è radice ($-1-3+4=0$) e

$$\alpha^3-3\alpha^2+4=(\alpha+1)(\alpha^2-4\alpha+4)=(\alpha+1)(\alpha-2)^2.$$

Quindi $\alpha=-1$ oppure $\alpha=2$.
:::
:::

:::exercise{id="E9.13" chapter="9" difficulty="facile"}
## Domanda
Una sostanza radioattiva decade con una velocità proporzionale alla quantità presente, cioè $N'(t)=-kN(t)$ con $k>0$. Si sa che la quantità si dimezza in $10$ anni. Dopo quanto tempo la quantità si riduce a $\frac{1}{8}$ di quella iniziale?

:::hint
Scrivi $N(t)=N_0e^{-kt}$ e usa la condizione di dimezzamento per determinare $e^{-10k}$.
:::

:::solution
La soluzione dell'equazione è $N(t)=N_0e^{-kt}$. La condizione di dimezzamento dà $N(10)=\frac{1}{2}N_0$, cioè $e^{-10k}=\frac12$.

Cerchiamo $t$ tale che $N(t)=\frac18N_0$, cioè $e^{-kt}=\frac18=\left(\frac12\right)^3=\left(e^{-10k}\right)^3=e^{-30k}$. Per l'iniettività dell'esponenziale $t=30$.

La quantità si riduce a $\frac18$ dopo $30$ anni.
:::
:::

:::exercise{id="E9.14" chapter="9" difficulty="difficile"}
## Domanda
1. Risolvere $y'=y^2$, $y(0)=a$ con $a>0$ e determinare l'intervallo massimale di esistenza.
2. Si consideri $y'=x\sin y$, $y(0)=1$. Mostrare che la soluzione esiste su tutto $\mathbb{R}$ e che soddisfa $0<y(x)<\pi$ per ogni $x$.

:::hint
Nel punto 2 osserva che $\left|\frac{\partial f}{\partial y}\right|\le |x|$ è limitata su ogni striscia $\lbrack -M,M\rbrack \times\mathbb{R}$, e che $y\equiv0$, $y\equiv\pi$ sono soluzioni.
:::

:::solution
1. Separando le variabili, $\frac{y'}{y^2}=1$, da cui $-\frac1y=x+c$. Da $y(0)=a$ si ha $c=-\frac1a$, quindi

$$y(x)=\frac{a}{1-ax}.$$

L'intervallo massimale contenente $0$ è $\left(-\infty,\frac1a\right)$, e $y\to+\infty$ per $x\to\frac1a^-$: la soluzione esplode in tempo finito, benché $f(y)=y^2$ sia $C^1$ (solo localmente lipschitziana).

2. Qui $f(x,y)=x\sin y$ è $C^1$ e, per $|x|\le M$, $\left|\frac{\partial f}{\partial y}\right|=|x\cos y|\le M$: $f$ è globalmente lipschitziana in $y$ uniformemente su ogni striscia $\lbrack -M,M\rbrack \times\mathbb{R}$. Per il teorema di esistenza globale la soluzione è definita su $\lbrack -M,M\rbrack $ per ogni $M$, quindi su $\mathbb{R}$.

Le funzioni costanti $y\equiv0$ e $y\equiv\pi$ sono soluzioni ($\sin0=\sin\pi=0$). Per l'unicità, il grafico di $y$ non può intersecarle: poiché $y(0)=1\in(0,\pi)$, si ha $0<y(x)<\pi$ per ogni $x$.
:::
:::

:::exercise{id="E9.15" chapter="9" difficulty="difficile"}
## Domanda
Una popolazione $P(t)>0$ evolve secondo il modello logistico $P'=P\left(1-\frac{P}{10}\right)$ con $P(0)=1$. Determinare esplicitamente $P(t)$ e l'istante $t^*$ in cui $P(t^*)=5$. Calcolare inoltre $\lim_{t\to+\infty}P(t)$.

:::hint
Con la sostituzione $u=1/P$ l'equazione diventa lineare del primo ordine a coefficienti costanti.
:::

:::solution
Posto $u=1/P$ si ha $u'=-P'/P^2=-\frac{1}{P}\left(1-\frac{P}{10}\right)=-u+\frac1{10}$, con $u(0)=1$.

L'equazione $u'=-u+\frac1{10}$ ha integrale generale $u=\frac1{10}+Ce^{-t}$; da $u(0)=1$ si ottiene $C=\frac9{10}$. Dunque

$$P(t)=\frac{1}{u(t)}=\frac{10}{1+9e^{-t}}.$$

Imponendo $P(t^*)=5$: $1+9e^{-t^*}=2$, cioè $e^{-t^*}=\frac19$ e $t^*=\ln 9$.

Infine, poiché $e^{-t}\to0$, $P(t)\to10$.
:::
:::

:::exercise{id="E9.16" chapter="9" difficulty="facile"}
## Domanda
Per ciascuna delle seguenti equazioni nell'incognita $y(x)$ indicare l'ordine e stabilire se è lineare.

1. $y''+x\,y=\sin x$
2. $y'=y^2$
3. $y'''-e^{x}y'=0$
4. $(y')^2+y=x$

:::hint
L'ordine è la massima derivata che compare; l'equazione è lineare se $y$ e le sue derivate compaiono solo al primo grado, senza prodotti tra loro.
:::

:::solution
1. Ordine $2$; lineare (non omogenea), con coefficienti $1$, $0$, $x$ e termine noto $\sin x$.
2. Ordine $1$; non lineare, perché compare $y^2$.
3. Ordine $3$; lineare omogenea, con coefficienti $1$, $0$, $-e^x$, $0$.
4. Ordine $1$; non lineare, perché compare $(y')^2$.
:::
:::

:::exercise{id="E9.17" chapter="9" difficulty="difficile"}
## Domanda
Si consideri la famiglia di funzioni $y(x)=C_1x+C_2x^2$ con $C_1,C_2\in\mathbb{R}$. Determinare un'equazione differenziale del secondo ordine, a coefficienti non dipendenti da $C_1,C_2$, di cui tutte queste funzioni siano soluzioni, e verificare che $y=x$ e $y=x^2$ la soddisfano.

:::hint
Calcola $y'$ e $y''$ ed elimina le costanti $C_1$, $C_2$ dalle tre relazioni ottenute.
:::

:::solution
Si ha $y'=C_1+2C_2x$ e $y''=2C_2$. Quindi $C_2=\frac{y''}{2}$ e $C_1=y'-xy''$.

Sostituendo in $y=C_1x+C_2x^2$:

$$y=x\left(y'-xy''\right)+\frac{x^2}{2}y''=xy'-\frac{x^2}{2}y''.$$

Moltiplicando per $2$ e riordinando si ottiene l'equazione lineare omogenea del secondo ordine

$$x^2y''-2xy'+2y=0.$$

Verifica: per $y=x$ si ha $0-2x+2x=0$; per $y=x^2$ si ha $2x^2-4x^2+2x^2=0$.
:::
:::

:::exercise{id="E9.18" chapter="9" difficulty="difficile"}
## Domanda
Determinare l'integrale generale dell'equazione $y''+2y'+5y=e^{-t}\cos2t$.

:::hint
Poni $y=e^{-t}u$: l'equazione per $u$ ha coefficienti costanti e termine noto $\cos2t$, in risonanza con l'omogenea.
:::

:::solution
Se $y=e^{-t}u$, allora $y'=e^{-t}(u'-u)$ e $y''=e^{-t}(u''-2u'+u)$. Quindi

$$y''+2y'+5y=e^{-t}\left(u''-2u'+u+2u'-2u+5u\right)=e^{-t}\left(u''+4u\right).$$

L'equazione diventa $u''+4u=\cos2t$. L'omogenea ha integrale $c_1\cos2t+c_2\sin2t$. Il termine noto è in risonanza: cerchiamo $u_p=At\sin2t$ (la componente $t\cos2t$ non serve). Allora $u_p''=A\left(4\cos2t-4t\sin2t\right)$ e

$$u_p''+4u_p=4A\cos2t.$$

Imponendo $4A=1$ si ottiene $A=\frac14$. Perciò $u=c_1\cos2t+c_2\sin2t+\frac t4\sin2t$ e

$$y(t)=e^{-t}\left(c_1\cos2t+c_2\sin2t+\frac t4\sin2t\right).$$
:::
:::

:::exercise{id="E9.19" chapter="9" difficulty="difficile"}
## Domanda
Risolvere, per $x>0$, il problema di Cauchy

$$y'-\frac{y}{x}=x^2\cos x,\qquad y(\pi)=0.$$

:::hint
Usa il fattore integrante $\frac1x$: il primo membro diventa $\left(\frac{y}{x}\right)'$. Per l'integrale di $x\cos x$ integra per parti.
:::

:::solution
Moltiplicando per $\frac1x$ si ottiene $\left(\frac yx\right)'=x\cos x$.

Per parti, $\int x\cos x\,dx=x\sin x-\int\sin x\,dx=x\sin x+\cos x$. Dunque

$$\frac yx=x\sin x+\cos x+c.$$

La condizione $y(\pi)=0$ dà $0=\pi\cdot0+(-1)+c$, cioè $c=1$. Quindi

$$y(x)=x\left(x\sin x+\cos x+1\right).$$

Verifica: $y'=x\sin x+\cos x+1+x\left(x\cos x\right)$, perché $\left(x\sin x+\cos x\right)'=x\cos x$; quindi $y'-\frac yx=x^2\cos x$.
:::
:::

:::exercise{id="E9.20" chapter="9" difficulty="medio"}
## Domanda
Risolvere il problema di Cauchy $y'=xy^2$, $y(0)=1$ e determinare l'intervallo massimale di esistenza della soluzione.

:::hint
L'equazione è a variabili separabili: separa $y$ e $x$ e integra, poi cerca dove si annulla il denominatore.
:::

:::solution
Poiché $y(0)=1\neq0$, dividiamo per $y^2$: $\frac{y'}{y^2}=x$. Integrando,

$$-\frac1y=\frac{x^2}{2}+c.$$

Da $y(0)=1$ segue $-1=c$. Quindi $\frac1y=1-\frac{x^2}{2}$ e

$$y(x)=\frac{2}{2-x^2}.$$

La soluzione è definita finché $2-x^2\neq0$; l'intervallo contenente $x_0=0$ è $\left(-\sqrt2,\sqrt2\right)$. Agli estremi $y\to+\infty$, quindi non è prolungabile.
:::
:::

:::exercise{id="E9.21" chapter="9" difficulty="facile"}
## Domanda
Risolvere il problema di Cauchy $y'+2y=4$, $y(0)=0$.

:::hint
È un'equazione lineare a coefficienti costanti: moltiplica per $e^{2x}$ oppure cerca una soluzione costante più l'omogenea.
:::

:::solution
L'omogenea $y'+2y=0$ ha soluzioni $Ce^{-2x}$; una soluzione particolare costante $y=k$ soddisfa $2k=4$, cioè $k=2$. L'integrale generale è

$$y(x)=2+Ce^{-2x}.$$

Da $y(0)=0$ segue $C=-2$. Dunque $y(x)=2-2e^{-2x}$.

Verifica: $y'=4e^{-2x}$ e $y'+2y=4e^{-2x}+4-4e^{-2x}=4$.
:::
:::
