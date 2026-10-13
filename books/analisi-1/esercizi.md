---
type: esercizi
printable: true
---

:::exercise{id="E1.1" chapter="1" difficulty="medio"}
## Domanda
Determinare il dominio naturale della funzione $f(x)=\dfrac{\sqrt{\ln(x+2)}}{x-1}$.

:::hint
Impone contemporaneamente che l'argomento del logaritmo sia positivo, che il logaritmo sia non negativo (per la radice) e che il denominatore sia non nullo.
:::

:::solution
Occorre che: $x+2>0$, cioè $x>-2$; $\ln(x+2)\ge0$, cioè $x+2\ge1$, cioè $x\ge-1$; $x-1\ne0$, cioè $x\ne1$.

La condizione $x\ge-1$ implica già $x>-2$, quindi le condizioni effettive sono $x\ge-1$ e $x\ne1$.

Il dominio è quindi $\operatorname{dom} f = \lbrack -1,1)\cup(1,+\infty)$.
:::
:::

:::exercise{id="E1.2" chapter="1" difficulty="facile"}
## Domanda
Dimostrare per induzione che per ogni $n\ge1$ vale

$$
\sum_{k=1}^n (2k-1) = n^2.
$$

:::hint
Verifica il passo base $n=1$, poi nel passo induttivo somma il termine $2(n+1)-1$ a entrambi i membri dell'ipotesi induttiva.
:::

:::solution
**Passo base** ($n=1$): $\sum_{k=1}^1(2k-1)=2\cdot1-1=1=1^2$. L'uguaglianza è verificata.

**Passo induttivo**: supponiamo vera l'ipotesi $\sum_{k=1}^n(2k-1)=n^2$ per un certo $n\ge1$ e dimostriamo che vale anche per $n+1$. Si ha

$$
\sum_{k=1}^{n+1}(2k-1)=\sum_{k=1}^{n}(2k-1)+\big(2(n+1)-1\big)=n^2+(2n+1)=(n+1)^2,
$$

dove nell'ultimo passaggio si è usata l'ipotesi induttiva e il fatto che $n^2+2n+1=(n+1)^2$.

Per il principio di induzione, l'uguaglianza vale per ogni $n\ge1$.
:::
:::

:::exercise{id="E1.3" chapter="1" difficulty="medio"}
## Domanda
Dimostrare per induzione che $2^n > n^2$ per ogni intero $n\ge5$.

:::hint
Nel passo induttivo mostra prima che, per $n\ge5$, vale $2n^2\ge(n+1)^2$, e usa questo fatto insieme all'ipotesi induttiva.
:::

:::solution
**Passo base** ($n=5$): $2^5=32$ e $5^2=25$, e $32>25$, quindi l'affermazione è vera per $n=5$.

**Passo induttivo**: supponiamo $2^n>n^2$ per un certo $n\ge5$. Osserviamo che

$$
2n^2-(n+1)^2=2n^2-n^2-2n-1=n^2-2n-1=n(n-2)-1.
$$

Per $n\ge5$ si ha $n(n-2)\ge5\cdot3=15$, quindi $n(n-2)-1\ge14>0$, cioè $2n^2>(n+1)^2$.

Allora, usando l'ipotesi induttiva,

$$
2^{n+1}=2\cdot2^n>2n^2>(n+1)^2.
$$

Quindi l'affermazione vale anche per $n+1$.

Per il principio di induzione, $2^n>n^2$ per ogni $n\ge5$.
:::
:::

:::exercise{id="E1.4" chapter="1" difficulty="medio"}
## Domanda
Risolvere la disequazione $|x-1|+|x+3|\le6$.

:::hint
Suddividi $\mathbb{R}$ nei tre intervalli determinati dai punti $x=-3$ e $x=1$, dove le espressioni dentro i valori assoluti cambiano segno.
:::

:::solution
**Caso $x<-3$**: $x-1<0$ e $x+3<0$, quindi $|x-1|+|x+3|=(1-x)+(-x-3)=-2x-2$. La disequazione diventa $-2x-2\le6$, cioè $x\ge-4$. Intersecando con $x<-3$: $-4\le x<-3$.

**Caso $-3\le x<1$**: $x-1<0$ e $x+3\ge0$, quindi $|x-1|+|x+3|=(1-x)+(x+3)=4$. Poiché $4\le6$ è sempre vera, tutto l'intervallo $\lbrack -3,1)$ è soluzione.

**Caso $x\ge1$**: $x-1\ge0$ e $x+3>0$, quindi $|x-1|+|x+3|=(x-1)+(x+3)=2x+2$. La disequazione diventa $2x+2\le6$, cioè $x\le2$. Intersecando con $x\ge1$: $1\le x\le2$.

Unendo i tre casi: $\lbrack -4,-3)\cup\lbrack -3,1)\cup\lbrack 1,2\rbrack =\lbrack -4,2\rbrack $.
:::
:::

:::exercise{id="E1.5" chapter="1" difficulty="difficile"}
## Domanda
Utilizzando il principio dell'estremo superiore, dimostrare l'esistenza di un numero reale $L>0$ tale che $L^2=2$. Si consideri l'insieme $A=\{x\in\mathbb{R} : x\ge0,\ x^2\le2\}$.

:::hint
Mostra che $A$ è non vuoto e limitato superiormente, poni $L=\sup A$ (che esiste per {{formula:1.7}}), ed escludi per assurdo sia $L^2<2$ sia $L^2>2$.
:::

:::solution
L'insieme $A$ è non vuoto, poiché $0,1\in A$ (infatti $0^2=0\le2$ e $1^2=1\le2$). È anche limitato superiormente: se $x>2$ allora $x^2>4>2$, quindi $x\notin A$, e $2$ è un maggiorante. Per il principio dell'estremo superiore esiste $L=\sup A\in\mathbb{R}$, con $1\le L\le2$, in particolare $L>0$.

Supponiamo $L^2<2$. Poniamo $\varepsilon=\dfrac{2-L^2}{2L+1}>0$ e scegliamo $h$ con $0<h<\min(1,\varepsilon)$. Allora

$$
(L+h)^2=L^2+2Lh+h^2\le L^2+h(2L+1)<L^2+\varepsilon(2L+1)=L^2+(2-L^2)=2.
$$

Quindi $L+h\in A$ e $L+h>L$, contraddicendo che $L$ sia un maggiorante di $A$. Dunque non può essere $L^2<2$.

Supponiamo $L^2>2$. Poniamo $\varepsilon=\dfrac{L^2-2}{2L}>0$. Osserviamo che $\varepsilon<L$: infatti $\varepsilon<L$ equivale a $L^2-2<2L^2$, cioè a $-2<L^2$, che è sempre vero. Quindi $0<\varepsilon<L$ e

$$
(L-\varepsilon)^2=L^2-2L\varepsilon+\varepsilon^2>L^2-2L\varepsilon=L^2-(L^2-2)=2.
$$

Ogni $x\in A$ soddisfa $x^2\le2<(L-\varepsilon)^2$, e con $x,L-\varepsilon\ge0$ questo implica $x<L-\varepsilon$: dunque $L-\varepsilon$ è un maggiorante di $A$ più piccolo di $L$, contraddicendo la minimalità di $L$ come maggiorante. Dunque non può essere $L^2>2$.

Quindi $L^2=2$, cioè $L=\sqrt2$.
:::
:::

:::exercise{id="E1.6" chapter="1" difficulty="difficile"}
## Domanda
Sia $f(x)=\dfrac1x-x$ per $x\in(0,1\rbrack $ e sia $A=f\big((0,1\rbrack \big)$ l'insieme dei valori assunti da $f$. Determinare $\inf A$, $\sup A$, $\min A$, $\max A$.

:::hint
Mostra algebricamente che $f$ è strettamente decrescente su $(0,1\rbrack $ confrontando $f(x_1)-f(x_2)$ per $0<x_1<x_2\le1$, poi valuta $f$ al bordo $x=1$ e il comportamento per $x\to0^+$. Osserva infine che $f$ è continua su $(0,1\rbrack $, così da poter applicare il teorema dei valori intermedi per descrivere completamente l'insieme $A$.
:::

:::solution
Siano $0<x_1<x_2\le1$. Allora

$$
f(x_1)-f(x_2)=\left(\frac{1}{x_1}-\frac{1}{x_2}\right)-(x_1-x_2)=\frac{x_2-x_1}{x_1x_2}+(x_2-x_1)=(x_2-x_1)\left(\frac{1}{x_1x_2}+1\right).
$$

Poiché $x_2-x_1>0$ e $\frac{1}{x_1x_2}+1>0$, si ha $f(x_1)-f(x_2)>0$, cioè $f(x_1)>f(x_2)$: $f$ è strettamente decrescente su $(0,1\rbrack $.

Quindi il valore più piccolo di $f$ su $(0,1\rbrack $ si ottiene nel punto più a destra, $x=1$: $f(1)=1-1=0$. Poiché $x=1$ appartiene al dominio, questo valore è raggiunto: $\min A=\inf A=0$.

Per $x\to0^+$, $\dfrac1x\to+\infty$ mentre $-x\to0$, quindi $f(x)\to+\infty$: essendo $f$ decrescente, i valori di $f(x)$ per $x$ vicino a $0$ sono arbitrariamente grandi, quindi $A$ non è limitato superiormente. Non esistono $\sup A$ (finito) né $\max A$.

Resta da stabilire quali valori intermedi vengano effettivamente assunti. La funzione $f$ è continua su $(0,1\rbrack $, in quanto somma e rapporto di funzioni continue con denominatore non nullo. Fissato un qualunque $y\ge0$, si ha $f(1)=0\le y$ e, per la divergenza vista sopra, esiste $x_0\in(0,1\rbrack $ tale che $f(x_0)\ge y$. Essendo $f$ continua sull'intervallo chiuso $\lbrack x_0,1\rbrack $ (se $x_0<1$; se $x_0=1$ il valore $y=0$ è già raggiunto), per il teorema dei valori intermedi $f$ assume su $\lbrack x_0,1\rbrack $ tutti i valori compresi tra $f(1)=0$ e $f(x_0)\ge y$, in particolare il valore $y$. Dunque ogni $y\ge0$ appartiene ad $A$.

In conclusione $A=\lbrack 0,+\infty)$.
:::
:::

:::exercise{id="E1.7" chapter="1" difficulty="facile"}
## Domanda
Determinare l'insieme $A = \left\{x \in \mathbb{R} : \dfrac{2x-1}{x+3} \ge 0\right\}$, esprimendolo come unione di intervalli.

:::hint
Studia separatamente il segno del numeratore e del denominatore, distinguendo i casi $x>-3$ e $x<-3$.
:::

:::solution
Il numeratore $2x-1$ si annulla in $x=\frac12$ ed è positivo per $x>\frac12$. Il denominatore $x+3$ si annulla in $x=-3$ (valore da escludere) ed è positivo per $x>-3$.

Per $x>-3$ il denominatore è positivo, quindi la frazione ha il segno del numeratore: $\dfrac{2x-1}{x+3}\ge0$ se e solo se $2x-1\ge0$, cioè $x\ge\frac12$. Si ottengono così le soluzioni $x\ge\frac12$.

Per $x<-3$ il denominatore è negativo, quindi la frazione è $\ge0$ se e solo se il numeratore è $\le0$, cioè $2x-1\le0$, cioè $x\le\frac12$: condizione sempre vera quando $x<-3$. Si ottengono quindi tutte le soluzioni $x<-3$.

Unendo i due casi, $A=(-\infty,-3)\cup\left\lbrack \frac12,+\infty\right)$.
:::
:::

:::exercise{id="E1.8" chapter="1" difficulty="facile"}
## Domanda
Sia $A$ un sottoinsieme non vuoto di $\mathbb{R}$, limitato superiormente, e sia $L\in\mathbb{R}$. Enunciare la caratterizzazione dell'estremo superiore {{formula:1.5}} e usarla per verificare che $\sup A=2$ per $A=\lbrack 0,2)$.

:::hint
Devi verificare due condizioni: che $2$ sia un maggiorante di $A$ e che per ogni $\varepsilon>0$ esista un elemento di $A$ maggiore di $2-\varepsilon$.
:::

:::solution
Per $A\subseteq\mathbb{R}$ non vuoto e limitato superiormente, e per $L\in\mathbb{R}$, vale la caratterizzazione: $L=\sup A$ se e solo se (i) $L$ è un maggiorante di $A$, cioè $a\le L$ per ogni $a\in A$, e (ii) per ogni $\varepsilon>0$ esiste $a\in A$ tale che $a>L-\varepsilon$.

Verifichiamo le due condizioni per $L=2$ e $A=\lbrack 0,2)$.

(i) Per definizione di $A$, ogni $a\in A$ soddisfa $a<2$, quindi in particolare $a\le2$: $2$ è un maggiorante.

(ii) Sia $\varepsilon>0$. Se $\varepsilon>2$, scegliamo $a=0\in A$; allora $a>2-\varepsilon$. Se $\varepsilon=2$, scegliamo $a=1\in A$; allora $a>0=2-\varepsilon$. Se $0<\varepsilon<2$, scegliamo $a=2-\frac{\varepsilon}{2}$. Si ha $0<a<2$, quindi $a\in A$, e $a=2-\frac{\varepsilon}{2}>2-\varepsilon$.

Entrambe le condizioni sono verificate, dunque $\sup A=2$.
:::
:::

:::exercise{id="E1.9" chapter="1" difficulty="facile"}
## Domanda
Sia $A=\left\{\dfrac{n-1}{n+1} : n\in\mathbb{N}\right\}$, con $\mathbb{N}=\{0,1,2,\dots\}$. Determinare, motivando la risposta, $\inf A$, $\sup A$, $\min A$, $\max A$.

:::hint
Scrivi il termine generale come $a_n=1-\dfrac{2}{n+1}$ e osserva come varia al crescere di $n$.
:::

:::solution
Scriviamo $a_n=\dfrac{n-1}{n+1}=\dfrac{(n+1)-2}{n+1}=1-\dfrac{2}{n+1}$. Poiché $\dfrac{2}{n+1}$ è strettamente decrescente al crescere di $n$ (il denominatore cresce), $a_n$ è strettamente crescente.

Il valore più piccolo si ha per $n=0$: $a_0=1-2=-1$, che appartiene ad $A$, quindi $\min A=\inf A=-1$.

Al crescere di $n$, $\dfrac{2}{n+1}\to0^+$ ma non si annulla mai, quindi $a_n<1$ per ogni $n$ ma $a_n\to1$. Dunque $1$ è il più piccolo maggiorante, cioè $\sup A=1$, mentre nessun $a_n$ è uguale a $1$: non esiste $\max A$.
:::
:::

:::exercise{id="E1.10" chapter="1" difficulty="facile"}
## Domanda
Risolvere l'equazione $|3x+2|=7$.

:::hint
Distingui i due casi $3x+2=7$ e $3x+2=-7$.
:::

:::solution
L'equazione $|3x+2|=7$ equivale a $3x+2=7$ oppure $3x+2=-7$.

Dal primo caso: $3x=5$, quindi $x=\dfrac53$.

Dal secondo caso: $3x=-9$, quindi $x=-3$.

Le soluzioni sono $x=\dfrac53$ e $x=-3$.
:::
:::

:::exercise{id="E1.11" chapter="1" difficulty="difficile"}
## Domanda
Dimostrare che per ogni $x,y\in\mathbb{R}$ vale

$$
\big||x|-|y|\big|\le|x-y|,
$$

e utilizzare questo risultato per stabilire che, se $|x-3|<0.1$, allora $\big||x|-3\big|<0.1$.

:::hint
Applica due volte {{formula:1.3}}, scrivendo $x=(x-y)+y$ e $y=(y-x)+x$, per ottenere le due disuguaglianze $|x|-|y|\le|x-y|$ e $|y|-|x|\le|x-y|$.
:::

:::solution
Scriviamo $x=(x-y)+y$. Per {{formula:1.3}},

$$
|x|=|(x-y)+y|\le|x-y|+|y|,
$$

da cui $|x|-|y|\le|x-y|$.

Simmetricamente, scrivendo $y=(y-x)+x$, si ottiene

$$
|y|=|(y-x)+x|\le|y-x|+|x|=|x-y|+|x|,
$$

da cui $|y|-|x|\le|x-y|$.

Combinando le due disuguaglianze, $-|x-y|\le|x|-|y|\le|x-y|$, cioè

$$
\big||x|-|y|\big|\le|x-y|,
$$

che è esattamente {{formula:1.4}}.

Applichiamo ora questo risultato con $y=3$: poiché $|3|=3$, otteniamo

$$
\big||x|-3\big|=\big||x|-|3|\big|\le|x-3|<0.1.
$$

Quindi $\big||x|-3\big|<0.1$.
:::
:::

:::exercise{id="E1.12" chapter="1" difficulty="difficile"}
## Domanda
Determinare l'insieme delle soluzioni reali del sistema $$\begin{cases} \dfrac{x-2}{x+1}\le 1 \\ |x|<4\end{cases}$$ esprimendolo come intervallo.

:::hint
Porta la prima disequazione a un'unica frazione e studiane il segno, poi intersecala con la condizione sul valore assoluto.
:::

:::solution
Studiamo $\dfrac{x-2}{x+1}\le1$. Portando tutto a sinistra con un denominatore comune (per $x\ne-1$):

$$
\frac{x-2}{x+1}-1=\frac{x-2-(x+1)}{x+1}=\frac{-3}{x+1}\le0.
$$

Poiché $-3<0$, la frazione $\dfrac{-3}{x+1}$ è $\le0$ se e solo se $x+1>0$, cioè $x>-1$ (se $x+1<0$ la frazione sarebbe positiva, non accettabile; $x=-1$ è escluso dal dominio). Quindi la prima disequazione equivale a $x>-1$.

La seconda condizione $|x|<4$ equivale a $-4<x<4$.

L'intersezione delle due condizioni $x>-1$ e $-4<x<4$ è $-1<x<4$.
:::
:::

:::exercise{id="E1.13" chapter="1" difficulty="difficile"}
## Domanda
Dimostrare per induzione su $n$ che per ogni $n\in\mathbb{N}$ vale

$$
\sum_{k=0}^n \binom{n}{k} = 2^n,
$$

utilizzando l'identità di Pascal $\binom{n}{k-1}+\binom{n}{k}=\binom{n+1}{k}$.

:::hint
Nel passo induttivo scrivi la somma per $n+1$ isolando i termini estremi e raggruppa i rimanenti tramite l'identità di Pascal, oppure applica {{formula:1.2}} con $x=y=1$.
:::

:::solution
**Passo base** ($n=0$): $\sum_{k=0}^0\binom{0}{k}=\binom{0}{0}=1=2^0$.

**Passo induttivo**: supponiamo $\sum_{k=0}^n\binom{n}{k}=2^n$. Allora

$$
\sum_{k=0}^{n+1}\binom{n+1}{k}=\binom{n+1}{0}+\sum_{k=1}^{n}\binom{n+1}{k}+\binom{n+1}{n+1}.
$$

Usando l'identità di Pascal $\binom{n+1}{k}=\binom{n}{k-1}+\binom{n}{k}$ per $1\le k\le n$, si ha

$$
\sum_{k=1}^{n}\binom{n+1}{k}=\sum_{k=1}^{n}\binom{n}{k-1}+\sum_{k=1}^{n}\binom{n}{k}=\sum_{j=0}^{n-1}\binom{n}{j}+\sum_{k=1}^{n}\binom{n}{k}.
$$

Ora $\sum_{j=0}^{n-1}\binom{n}{j}=2^n-\binom{n}{n}=2^n-1$ e $\sum_{k=1}^{n}\binom{n}{k}=2^n-\binom{n}{0}=2^n-1$, quindi quella somma vale $(2^n-1)+(2^n-1)=2^{n+1}-2$.

Aggiungendo i termini estremi $\binom{n+1}{0}=\binom{n+1}{n+1}=1$:

$$
\sum_{k=0}^{n+1}\binom{n+1}{k}=1+(2^{n+1}-2)+1=2^{n+1}.
$$

Per il principio di induzione la formula vale per ogni $n\in\mathbb{N}$. In alternativa, basta applicare {{formula:1.2}} con $x=y=1$: $(1+1)^n=\sum_{k=0}^n\binom{n}{k}1^{n-k}1^k=\sum_{k=0}^n\binom{n}{k}=2^n$.
:::
:::

:::exercise{id="E1.14" chapter="1" difficulty="medio"}
## Domanda
Sia $A=\left\{(-1)^n+\dfrac1n : n\in\mathbb{N},\ n\ge1\right\}$. Determinare, motivando la risposta, $\inf A$, $\sup A$, $\min A$, $\max A$.

:::hint
Distingui il caso $n$ pari dal caso $n$ dispari e studia separatamente le due sottosuccessioni che si ottengono.
:::

:::solution
Se $n=2m$ è pari, $a_n=1+\dfrac{1}{2m}$: questa sottosuccessione è decrescente al crescere di $m$, con massimo in $m=1$ (cioè $n=2$): $a_2=1+\frac12=\frac32$, e tende a $1$ per $m\to\infty$ senza mai raggiungerlo.

Se $n=2m-1$ è dispari, $a_n=-1+\dfrac{1}{2m-1}$: questa sottosuccessione è decrescente e tende a $-1$ per $m\to\infty$ senza mai raggiungerlo (resta sempre $>-1$).

Confrontando le due famiglie: il valore massimo assoluto di $A$ è $a_2=\frac32$, raggiunto, quindi $\max A=\sup A=\frac32$. Il valore $-1$ è il limite della sottosuccessione dispari, non raggiunto da nessun termine (tutti i termini dispari sono $>-1$, i termini pari sono $\ge1$), quindi $-1$ è il più grande minorante: $\inf A=-1$, ma non esiste $\min A$.
:::
:::

:::exercise{id="E1.15" chapter="1" difficulty="medio"}
## Domanda
Sia $A=\{x\in\mathbb{Q} : x^2<3\}$. Dimostrare, usando il principio dell'estremo superiore {{formula:1.7}}, che $\sup A=\sqrt3$, e spiegare perché $A$ non ha massimo.

:::hint
Mostra che $A$ è non vuoto e limitato superiormente in $\mathbb{R}$, così il principio garantisce l'esistenza di $L=\sup A\in\mathbb{R}$; poi escludi per assurdo sia $L<\sqrt3$ sia $L>\sqrt3$. Per concludere che $A$ non ha massimo, ricorda che $\sqrt3$ è irrazionale: dimostralo per assurdo supponendo $\sqrt3=p/q$ con $p,q$ interi coprimi e deducendo che $3$ divide sia $p$ sia $q$.
:::

:::solution
L'insieme $A$ è non vuoto (per esempio $0\in A$) ed è limitato superiormente in $\mathbb{R}$: se $x>2$ allora $x^2>4>3$, quindi $x\notin A$; dunque $2$ è un maggiorante. Per il principio dell'estremo superiore, esiste $L=\sup A\in\mathbb{R}$, con $L\le2$.

Supponiamo per assurdo $L<\sqrt3$. Per la densità di $\mathbb{Q}$ in $\mathbb{R}$ esiste un razionale $q$ con $L<q<\sqrt3$; allora $q^2<3$, quindi $q\in A$ e $q>L$, contraddicendo che $L$ sia un maggiorante di $A$.

Supponiamo invece $L>\sqrt3$. Esiste un razionale $q$ con $\sqrt3<q<L$. Ogni $x\in A$ soddisfa $|x|<\sqrt3<q$, quindi $x<q$: $q$ è un maggiorante di $A$ più piccolo di $L$, contraddicendo che $L$ sia il minimo dei maggioranti.

Entrambi i casi sono assurdi, quindi $L=\sqrt3$.

Resta da mostrare che $\sqrt3\notin\mathbb{Q}$. Supponiamo per assurdo $\sqrt3=p/q$ con $p,q\in\mathbb{Z}$, $q\neq0$, e $\gcd(p,q)=1$. Allora $p^2=3q^2$, quindi $3$ divide $p^2$ e, essendo $3$ primo, $3$ divide $p$; scriviamo $p=3k$. Sostituendo si ottiene $9k^2=3q^2$, cioè $q^2=3k^2$, dunque $3$ divide anche $q^2$ e quindi $q$. Ma allora $3$ divide sia $p$ sia $q$, contraddicendo $\gcd(p,q)=1$. Questo assurdo mostra che $\sqrt3$ è irrazionale.

Poiché $\sqrt3$ è irrazionale e $A\subseteq\mathbb{Q}$, si ha $\sqrt3\notin A$: l'estremo superiore non appartiene all'insieme, quindi $A$ non ha massimo.
:::
:::

:::exercise{id="E2.1" chapter="2" difficulty="difficile"}
## Domanda
Determinare e rappresentare graficamente l'insieme $A = \{z \in \mathbb{C}\setminus\{0\} : \operatorname{Re}(z^2) = \operatorname{Im}(z^2)\}$. Trovare poi i punti di $A$ che hanno modulo $2$, esprimendoli in forma esponenziale.

:::hint
Scrivi $z = r e^{i\theta}$ e usa {{formula:2.14}} per esprimere $z^2$; la condizione diventa un'equazione trigonometrica in $2\theta$.
:::

:::solution
Scrivendo $z = r e^{i\theta}$ con $r>0$, si ha $z^2 = r^2(\cos 2\theta + i \sin 2\theta)$, quindi $\operatorname{Re}(z^2) = r^2\cos 2\theta$ e $\operatorname{Im}(z^2) = r^2 \sin 2\theta$.

La condizione $\operatorname{Re}(z^2) = \operatorname{Im}(z^2)$, essendo $r \ne 0$, equivale a

$$\cos 2\theta = \sin 2\theta \iff \tan 2\theta = 1 \iff 2\theta = \frac{\pi}{4} + k\pi, \quad k \in \mathbb{Z},$$

cioè

$$\theta = \frac{\pi}{8} + k\frac{\pi}{2}, \quad k \in \mathbb{Z}.$$

Modulo $2\pi$ gli angoli distinti sono $\theta = \tfrac{\pi}{8}, \tfrac{5\pi}{8}, \tfrac{9\pi}{8}, \tfrac{13\pi}{8}$. Poiché $\tfrac{9\pi}{8} = \tfrac{\pi}{8} + \pi$ e $\tfrac{13\pi}{8} = \tfrac{5\pi}{8} + \pi$, questi quattro raggi formano due rette passanti per l'origine, con inclinazione $\tfrac{\pi}{8}$ e $\tfrac{5\pi}{8}$ (tra loro perpendicolari, poiché la differenza è $\tfrac{\pi}{2}$).

Quindi $A$ è l'unione di queste due rette private dell'origine.

I punti di $A$ con $|z| = 2$ sono quelli con $r=2$ e $\theta$ uno dei quattro angoli trovati, cioè

$$z = 2e^{i\pi/8}, \quad z = 2e^{i5\pi/8}, \quad z = 2e^{i9\pi/8}, \quad z = 2e^{i13\pi/8}.$$
:::
:::

:::exercise{id="E2.2" chapter="2" difficulty="facile"}
## Domanda
Determinare e rappresentare graficamente nel piano complesso tutte le radici quarte complesse del numero $w = -16$.

:::hint
Scrivi $w$ in forma esponenziale e applica {{formula:2.15}} con $n=4$.
:::

:::solution
Il numero $w=-16$ ha modulo $16$ e argomento $\pi$, quindi $w = 16\,e^{i\pi}$.

Per {{formula:2.15}}, le radici quarte sono

$$z_k = 16^{1/4}\, e^{i\frac{\pi + 2k\pi}{4}}, \qquad k=0,1,2,3,$$

cioè $z_k = 2\, e^{i\theta_k}$ con $\theta_0 = \tfrac{\pi}{4}$, $\theta_1 = \tfrac{3\pi}{4}$, $\theta_2 = \tfrac{5\pi}{4}$, $\theta_3 = \tfrac{7\pi}{4}$.

In forma algebrica:

$$z_0 = 2\left(\cos\frac{\pi}{4}+i\sin\frac{\pi}{4}\right) = \sqrt{2}+\sqrt{2}\,i,$$
$$z_1 = \sqrt{2}\cdot(-1)+\sqrt{2}\,i = -\sqrt{2}+\sqrt{2}\,i,$$
$$z_2 = -\sqrt{2}-\sqrt{2}\,i, \qquad z_3 = \sqrt{2}-\sqrt{2}\,i.$$

I quattro punti si dispongono sui vertici di un quadrato inscritto nella circonferenza di raggio $2$ centrata nell'origine, ciascuno ruotato di $\tfrac{\pi}{2}$ rispetto al precedente.
:::
:::

:::exercise{id="E2.3" chapter="2" difficulty="medio"}
## Domanda
Risolvere in $\mathbb{C}$ l'equazione $(z+2)^3 = 8i$ e rappresentare graficamente le soluzioni nel piano complesso.

:::hint
Poni $w = z+2$, scrivi $8i$ in forma esponenziale e applica {{formula:2.15}} per trovare le tre radici cubiche $w_k$; infine ricava $z_k = w_k - 2$.
:::

:::solution
Posto $w = z+2$, l'equazione diventa $w^3 = 8i$.

Il numero $8i$ ha modulo $8$ e argomento $\tfrac{\pi}{2}$, quindi $8i = 8\,e^{i\pi/2}$.

Le radici cubiche sono

$$w_k = 8^{1/3}\, e^{i\frac{\pi/2 + 2k\pi}{3}} = 2\,e^{i\theta_k}, \qquad k=0,1,2,$$

con $\theta_0 = \tfrac{\pi}{6}$, $\theta_1 = \tfrac{5\pi}{6}$, $\theta_2 = \tfrac{3\pi}{2}$.

In forma algebrica:

$$w_0 = 2\left(\cos\frac{\pi}{6}+i\sin\frac{\pi}{6}\right) = \sqrt{3}+i,$$
$$w_1 = 2\left(\cos\frac{5\pi}{6}+i\sin\frac{5\pi}{6}\right) = -\sqrt{3}+i,$$
$$w_2 = 2\left(\cos\frac{3\pi}{2}+i\sin\frac{3\pi}{2}\right) = -2i.$$

Tornando a $z = w-2$:

$$z_0 = \sqrt{3}-2+i, \qquad z_1 = -\sqrt{3}-2+i, \qquad z_2 = -2-2i.$$

I punti $w_k$ si dispongono sui vertici di un triangolo equilatero inscritto nella circonferenza di raggio $2$ centrata nell'origine; i punti $z_k$ sono gli stessi vertici traslati di $-2$ lungo l'asse reale.
:::
:::

:::exercise{id="E2.4" chapter="2" difficulty="difficile"}
## Domanda
Sapendo che il polinomio a coefficienti reali $p(z) = z^3 - 5z^2 + 11z - 15$ ammette la radice complessa $z = 1+2i$, determinare tutte le radici di $p$ e scrivere la sua fattorizzazione completa in $\mathbb{C}$.

:::hint
Un polinomio a coefficienti reali ha le radici complesse a coppie coniugate; usa questo fatto insieme a {{formula:2.16}} per isolare il fattore di secondo grado e trovare la radice reale rimanente tramite divisione polinomiale.
:::

:::solution
Poiché $p$ ha coefficienti reali, se $1+2i$ è radice allora anche il suo coniugato $1-2i$ è radice.

Il fattore di secondo grado associato a queste due radici coniugate è

$$(z-(1+2i))(z-(1-2i)) = (z-1)^2 - (2i)^2 = z^2-2z+1+4 = z^2-2z+5.$$

Per {{formula:2.16}}, $p(z)$ si fattorizza come $(z^2-2z+5)(z-r)$ per qualche radice reale $r$. Eseguendo la divisione polinomiale di $p(z)$ per $z^2-2z+5$:

$$z^3-5z^2+11z-15 = (z^2-2z+5)(z-3) + 0,$$

come si verifica svolgendo il prodotto:

$$(z^2-2z+5)(z-3) = z^3-3z^2-2z^2+6z+5z-15 = z^3-5z^2+11z-15.$$

Il resto è nullo, quindi la terza radice è $r=3$.

Le radici di $p$ sono dunque $z=3$, $z=1+2i$, $z=1-2i$, e la fattorizzazione completa in $\mathbb{C}$ è

$$p(z) = (z-3)(z-1-2i)(z-1+2i).$$
:::
:::

:::exercise{id="E2.5" chapter="2" difficulty="medio"}
## Domanda
Scrivere il numero complesso $z = 1 + i\sqrt{3}$ in forma trigonometrica e in forma esponenziale. Calcolare poi $z^5$ utilizzando la formula di De Moivre, esprimendo il risultato finale in forma algebrica.

:::hint
Determina modulo e argomento di $z$ usando {{formula:2.8}}, poi applica {{formula:2.14}} per elevare alla quinta potenza.
:::

:::solution
Il modulo di $z$ è

$$|z| = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{1+3} = 2.$$

L'argomento $\theta$ soddisfa $\cos\theta = \tfrac{1}{2}$ e $\sin\theta = \tfrac{\sqrt{3}}{2}$, dunque $\theta = \tfrac{\pi}{3}$.

Forma trigonometrica:

$$z = 2\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right).$$

Forma esponenziale (usando {{formula:2.9}}):

$$z = 2e^{i\pi/3}.$$

Applicando {{formula:2.14}},

$$z^5 = 2^5\left(\cos\frac{5\pi}{3} + i\sin\frac{5\pi}{3}\right) = 32\left(\frac{1}{2} - i\frac{\sqrt{3}}{2}\right) = 16 - 16\sqrt{3}\,i.$$
:::
:::

:::exercise{id="E2.6" chapter="2" difficulty="facile"}
## Domanda
Dati i numeri complessi $z_1 = 3-2i$ e $z_2 = 1+4i$, calcolare $z_1 z_2$, $\dfrac{z_1}{z_2}$ e $|z_1|$, esprimendo i risultati in forma algebrica.

:::hint
Per il prodotto usa {{formula:2.6}}; per il quoziente moltiplica numeratore e denominatore per il coniugato di $z_2$, sfruttando {{formula:2.7}}.
:::

:::solution
Calcolo del prodotto.

$$z_1 z_2 = (3-2i)(1+4i) = 3 + 12i - 2i - 8i^2 = 3 + 10i + 8 = 11 + 10i.$$

Calcolo del quoziente, moltiplicando numeratore e denominatore per il coniugato $\overline{z_2} = 1-4i$.

$$\frac{z_1}{z_2} = \frac{(3-2i)(1-4i)}{(1+4i)(1-4i)} = \frac{3 - 12i - 2i + 8i^2}{1+16} = \frac{3 - 14i - 8}{17} = \frac{-5-14i}{17}.$$

Quindi $\dfrac{z_1}{z_2} = -\dfrac{5}{17} - \dfrac{14}{17}i$.

Calcolo del modulo usando {{formula:2.2}}.

$$|z_1| = \sqrt{3^2 + (-2)^2} = \sqrt{9+4} = \sqrt{13}.$$
:::
:::

:::exercise{id="E3.1" chapter="3" difficulty="difficile"}
## Domanda
Si consideri la funzione $f(x) = \dfrac{x+1}{x-1}$, definita per $x\neq 1$.

(a) Verificare che $f(f(x))=x$ per ogni $x$ del dominio.

(b) Dedurne che $f$ è invertibile e determinare la sua funzione inversa.

:::hint
Una funzione che soddisfa $f\circ f = \operatorname{id}$ si dice involutiva; se è anche iniettiva, coincide con la propria inversa, si veda {{formula:3.6}}.
:::

:::solution
Il dominio di $f$ è $\mathbb{R}\setminus\{1\}$. Osserviamo innanzitutto che $f(x)=1$ non ha soluzioni (dovrebbe essere $x+1=x-1$, impossibile), quindi $f(x)\neq 1$ per ogni $x$ nel dominio, e la composizione $f(f(x))$ è sempre ben definita.

Poniamo $y = f(x) = \dfrac{x+1}{x-1}$ e calcoliamo:

$$
f(y) = \frac{y+1}{y-1} = \frac{\dfrac{x+1}{x-1}+1}{\dfrac{x+1}{x-1}-1} = \frac{\dfrac{(x+1)+(x-1)}{x-1}}{\dfrac{(x+1)-(x-1)}{x-1}} = \frac{2x}{2} = x.
$$

Dunque $f(f(x))=x$ per ogni $x\neq 1$: $f$ è un'involuzione.

Per mostrare che $f$ è invertibile, basta notare che è iniettiva: se $f(x_1)=f(x_2)$, applicando $f$ a entrambi i membri e usando $f\circ f=\operatorname{id}$ si ottiene $x_1=x_2$. Essendo $f\circ f = \operatorname{id}$, per definizione di funzione inversa si conclude $f^{-1}=f$, cioè

$$
f^{-1}(x) = \frac{x+1}{x-1}.
$$
:::
:::

:::exercise{id="E3.2" chapter="3" difficulty="facile"}
## Domanda
Si consideri la funzione $f(x) = -x^2+2x+3$ sull'intervallo $\lbrack 0,4\rbrack $. Determinare gli intervalli di monotonia e i punti di massimo e di minimo assoluto di $f$ su $\lbrack 0,4\rbrack $, indicandone i valori.

:::hint
Riconduciti al vertice della parabola e confronta il valore nel vertice con i valori agli estremi dell'intervallo, usando {{formula:7.13}} e {{formula:3.15}}.
:::

:::solution
Scriviamo $f(x) = -(x-1)^2+4$: la parabola ha vertice in $(1,4)$ e concavità rivolta verso il basso.

Si ha $f'(x) = -2x+2 = -2(x-1)$, quindi $f'(x)>0$ per $x<1$ e $f'(x)<0$ per $x>1$: per {{formula:7.13}}, $f$ è strettamente crescente su $\lbrack 0,1\rbrack $ e strettamente decrescente su $\lbrack 1,4\rbrack $.

I candidati a punti di massimo o minimo assoluto su $\lbrack 0,4\rbrack $ sono il punto stazionario interno $x=1$ e gli estremi $x=0$, $x=4$:
- $f(0) = 3$,
- $f(1) = 4$,
- $f(4) = -16+8+3 = -5$.

Il valore massimo tra questi è $4$, assunto in $x=1$; il valore minimo è $-5$, assunto in $x=4$.
:::
:::

:::exercise{id="E3.3" chapter="3" difficulty="difficile"}
## Domanda
Si consideri la funzione $f(x) = x\,e^{-x^2}$, definita su $\mathbb{R}$. Determinare gli intervalli di monotonia, i punti di massimo e minimo locale, stabilire se sono anche assoluti, e dire se $f$ è limitata su $\mathbb{R}$.

:::hint
Calcola $f'(x)$ con la regola del prodotto, studia il segno di $1-2x^2$ e confronta i valori nei punti critici con i limiti di $f$ per $x\to\pm\infty$.
:::

:::solution
Calcoliamo la derivata con la regola del prodotto:
$$f'(x) = e^{-x^2} + x\cdot(-2x)e^{-x^2} = e^{-x^2}(1-2x^2).$$

Poiché $e^{-x^2}>0$ sempre, il segno di $f'$ coincide con quello di $1-2x^2$, positivo per $x\in\left(-\frac{1}{\sqrt2},\frac{1}{\sqrt2}\right)$ e negativo altrove. Dunque:
- $f$ è strettamente decrescente su $\left(-\infty,-\frac{1}{\sqrt2}\right\rbrack $;
- $f$ è strettamente crescente su $\left\lbrack -\frac{1}{\sqrt2},\frac{1}{\sqrt2}\right\rbrack $;
- $f$ è strettamente decrescente su $\left\lbrack \frac{1}{\sqrt2},+\infty\right)$.

Per {{formula:8.4}}, $x=-\frac{1}{\sqrt2}$ è punto di minimo locale e $x=\frac{1}{\sqrt2}$ è punto di massimo locale, con

$$
f\left(\frac{1}{\sqrt2}\right) = \frac{1}{\sqrt2}\,e^{-1/2}, \qquad f\left(-\frac{1}{\sqrt2}\right) = -\frac{1}{\sqrt2}\,e^{-1/2}.
$$

Studiamo i limiti agli estremi del dominio: usando la gerarchia degli infiniti, $\lim_{x\to+\infty} f(x) = 0$ e $\lim_{x\to-\infty} f(x) = 0$ (l'esponenziale $e^{-x^2}$ domina il termine lineare $x$). Poiché $f$ decresce verso $0$ per $x\to+\infty$ partendo dal valore positivo $f(1/\sqrt2)$, e non vi sono altri punti critici in $(0,+\infty)$ oltre a $1/\sqrt2$, tale valore è anche il massimo assoluto; analogamente, per simmetria del ragionamento su $(-\infty,0)$, $f(-1/\sqrt2)$ è il minimo assoluto.

Poiché $f$ ammette massimo e minimo assoluti finiti, $f$ è limitata su $\mathbb{R}$, con

$$
\sup_{\mathbb{R}} f = \max_{\mathbb{R}} f = \frac{1}{\sqrt2}e^{-1/2}, \qquad \inf_{\mathbb{R}} f = \min_{\mathbb{R}} f = -\frac{1}{\sqrt2}e^{-1/2}.
$$
:::
:::

:::exercise{id="E3.4" chapter="3" difficulty="medio"}
## Domanda
Si consideri la funzione

$$f(x) = \frac{2x-1}{x+3}.$$

(a) Determinare il dominio $\operatorname{dom}(f)$.

(b) Determinare l'immagine $\operatorname{Im}(f)$, pensando $f$ come funzione da $\operatorname{dom}(f)$ a $\mathbb{R}$.

(c) Stabilire se $f$ è iniettiva e se è suriettiva come funzione $f:\operatorname{dom}(f)\to\mathbb{R}$.

:::hint
Per l'immagine, risolvi l'equazione $y=f(x)$ rispetto a $x$ e determina per quali $y$ la soluzione esiste; usa {{formula:3.1}}.
:::

:::solution
Il denominatore si annulla per $x=-3$, quindi

$$
\operatorname{dom}(f) = \mathbb{R}\setminus\{-3\}.
$$

Per determinare l'immagine risolviamo $y=\dfrac{2x-1}{x+3}$ rispetto a $x$, con $x\neq -3$:

$$
y(x+3) = 2x-1 \;\Longrightarrow\; x(y-2) = -1-3y \;\Longrightarrow\; x = \frac{-1-3y}{y-2}.
$$

Questa espressione fornisce un'unica soluzione $x$ per ogni $y\neq 2$, mentre per $y=2$ non esiste alcuna $x$ (l'equazione diventa $0=-7$, impossibile). Dunque

$$
\operatorname{Im}(f) = \mathbb{R}\setminus\{2\}.
$$

Poiché per ogni valore $y$ dell'immagine la soluzione $x$ è unica, $f$ è iniettiva (è una trasformazione di Möbius, biettiva dal proprio dominio alla propria immagine). Come funzione $f:\operatorname{dom}(f)\to\mathbb{R}$, $f$ non è suriettiva poiché il valore $2$ non viene mai assunto; coerentemente, $\lim_{x\to\pm\infty} f(x) = 2$ è un asintoto orizzontale mai raggiunto.
:::
:::

:::exercise{id="E3.5" chapter="3" difficulty="facile"}
## Domanda
Stabilire se la funzione $f(x) = x^4 - 3x^2 + 1$, definita su $\mathbb{R}$, è pari, dispari o nessuna delle due.

:::hint
Calcola $f(-x)$ e confrontalo con $f(x)$ e con $-f(x)$, usando {{formula:3.7}} e {{formula:3.8}}.
:::

:::solution
Calcoliamo $f(-x)$:

$$
f(-x) = (-x)^4 - 3(-x)^2+1 = x^4 - 3x^2+1 = f(x).
$$

Poiché $f(-x)=f(x)$ per ogni $x\in\mathbb{R}$, per definizione $f$ è una funzione pari.
:::
:::

:::exercise{id="E3.6" chapter="3" difficulty="difficile"}
## Domanda
Si definisca $g(x) = 2x - \lfloor 2x \rfloor$, cioè la mantissa di $2x$. Dimostrare che $g$ è periodica di periodo $T=\dfrac{1}{2}$ e che $\dfrac{1}{2}$ è il suo periodo minimo. Descrivere l'andamento qualitativo di $g$ su $\lbrack 0,1)$.

:::hint
Usa la definizione di mantissa {{formula:3.11}} e ricorda che la mantissa ordinaria ha periodo minimo $1$.
:::

:::solution
Per definizione $g(x) = \{2x\}$, dove $\{t\} = t - \lfloor t \rfloor$ è la mantissa di $t$, funzione periodica di periodo $1$: $\{t+1\} = \{t\}$ per ogni $t\in\mathbb{R}$.

Verifichiamo che $T=\frac12$ è un periodo di $g$:

$$
g\left(x+\frac12\right) = \{2x+1\} = \{2x\} = g(x),
$$

usando $\{t+1\}=\{t\}$ con $t=2x$. Dunque $g$ è periodica di periodo $\frac12$.

Mostriamo che $\frac12$ è il periodo minimo. Se per assurdo esistesse $0<T_0<\frac12$ periodo di $g$, allora per ogni $x$ varrebbe $\{2x+2T_0\} = \{2x\}$, cioè $2T_0$ sarebbe un periodo della mantissa ordinaria $\{\cdot\}$. Ma la mantissa ordinaria ha periodo minimo $1$ (ha un salto di discontinuità in ogni intero e si annulla solo sugli interi), quindi dovrebbe essere $2T_0 \ge 1$, cioè $T_0\ge \frac12$, in contraddizione con $T_0<\frac12$. Dunque $\frac12$ è il periodo minimo di $g$.

Sull'intervallo $\lbrack 0,1)$: per $x\in\lbrack 0,\frac12)$ si ha $2x\in\lbrack 0,1)$, quindi $\lfloor 2x\rfloor = 0$ e $g(x)=2x$, un segmento crescente da $0$ (incluso) a $1$ (escluso). Per $x\in\lbrack \frac12,1)$ si ha $2x\in\lbrack 1,2)$, quindi $\lfloor 2x\rfloor=1$ e $g(x)=2x-1$, un nuovo segmento crescente da $0$ (incluso) a $1$ (escluso). Il grafico su $\lbrack 0,1)$ è dunque un dente di sega con due denti, ciascuno di base $\frac12$ e altezza $1$.
:::
:::

:::exercise{id="E3.7" chapter="3" difficulty="medio"}
## Domanda
Siano $f(x)=\sqrt{x-1}$ e $g(x) = x^2+2x$.

(a) Determinare dominio ed espressione esplicita di $g\circ f$.

(b) Determinare dominio ed espressione esplicita di $f\circ g$.

:::hint
Ricorda che il dominio della composta richiede che i valori della funzione interna cadano nel dominio della funzione esterna; usa {{formula:3.4}}.
:::

:::solution
Si ha $\operatorname{dom}(f) = \lbrack 1,+\infty)$ e $\operatorname{dom}(g)=\mathbb{R}$.

(a) $(g\circ f)(x) = g(f(x)) = \left(\sqrt{x-1}\right)^2 + 2\sqrt{x-1} = (x-1)+2\sqrt{x-1}$. Poiché $g$ è definita su tutto $\mathbb{R}$, il dominio della composta coincide con il dominio di $f$:

$$
(g\circ f)(x) = x-1+2\sqrt{x-1}, \qquad x\ge 1.
$$

(b) $(f\circ g)(x) = f(g(x)) = \sqrt{g(x)-1} = \sqrt{x^2+2x-1}$, definita quando $g(x)\ge 1$, cioè $x^2+2x-1\ge 0$. Le radici sono $x = -1\pm\sqrt{2}$, quindi la disequazione è soddisfatta per $x\le -1-\sqrt2$ oppure $x\ge -1+\sqrt2$. Dunque

$$
(f\circ g)(x) = \sqrt{x^2+2x-1}, \qquad x\in\left(-\infty,-1-\sqrt2\,\right]\cup\left[-1+\sqrt2,+\infty\right).
$$
:::
:::

:::exercise{id="E3.8" chapter="3" difficulty="facile"}
## Domanda
Si consideri la funzione $f:\mathbb{R}\to\mathbb{R}$ definita da

$$f(x) = x^2 - 4x + 3.$$

Determinare l'immagine $\operatorname{Im}(f)$, stabilire se $f$ è iniettiva e se è suriettiva, e trovare il più grande intervallo della forma $\lbrack a,+\infty)$ su cui la restrizione di $f$ risulta iniettiva.

:::hint
Completa il quadrato per individuare il vertice della parabola e usa {{formula:3.3}} per il controllo dell'iniettività.
:::

:::solution
Completiamo il quadrato:
$$f(x) = x^2-4x+3 = (x-2)^2 - 1.$$

Il vertice della parabola è in $x=2$, dove $f$ assume il valore minimo $-1$. Essendo la concavità rivolta verso l'alto, l'immagine è

$$
\operatorname{Im}(f) = [-1,+\infty).
$$

Il grafico è simmetrico rispetto alla retta $x=2$: ad esempio $f(0)=3=f(4)$, quindi $f$ non è iniettiva su $\mathbb{R}$. Inoltre $f$ non è suriettiva su $\mathbb{R}$ perché non assume valori minori di $-1$, cioè l'immagine è un sottoinsieme proprio del codominio.

Sull'intervallo $\lbrack 2,+\infty)$ la funzione coincide con il ramo destro della parabola, strettamente crescente, quindi iniettiva. È il più grande intervallo del tipo richiesto: per ogni $a<2$ esistono due punti simmetrici rispetto a $2$, entrambi in $\lbrack a,+\infty)$, con la stessa immagine, quindi la restrizione non sarebbe iniettiva.
:::
:::

:::exercise{id="E3.9" chapter="3" difficulty="medio"}
## Domanda
Determinare il periodo minimo positivo della funzione

$$f(x) = \cos(2x) + \sin(3x).$$

:::hint
Dall’identità $f(x+T)=f(x)$ per ogni $x$, usa l’indipendenza delle armoniche di frequenza $2$ e $3$ per ricavare le condizioni su $T$.
:::

:::solution
Il numero $2\pi$ è un periodo di entrambi gli addendi, quindi è un periodo di $f$. Per dimostrare che è il minimo periodo positivo, supponiamo che $T$ sia un periodo di $f$. Allora, per ogni $x$,

$$\cos(2x+2T)-\cos(2x) + \sin(3x+3T)-\sin(3x)=0.$$

Le funzioni seno e coseno di frequenze diverse sono linearmente indipendenti. Pertanto, i termini di frequenza $2$ e quelli di frequenza $3$ devono annullarsi separatamente. Ne segue che $2T$ e $3T$ sono multipli interi di $2\pi$:

$$2T\in 2\pi\mathbb{Z}, \qquad 3T\in 2\pi\mathbb{Z}.$$

Scrivendo $2T=2\pi m$ e $3T=2\pi n$, con $m,n\in\mathbb{Z}$, si ottiene $T=\pi m=\frac{2\pi n}{3}$. Dall’uguaglianza $3m=2n$ segue che $m$ è pari, quindi $T$ è un multiplo intero di $2\pi$. Il minimo periodo positivo è dunque $2\pi$."}
:::
:::

:::exercise{id="E3.10" chapter="3" difficulty="facile"}
## Domanda
Siano $f(x) = 3x-2$ e $g(x) = x^2+1$, funzioni da $\mathbb{R}$ in $\mathbb{R}$.

(a) Calcolare $(f\circ g)(x)$ e $(g\circ f)(x)$, specificandone il dominio.

(b) Determinare l'espressione della funzione inversa $f^{-1}$.

:::hint
Usa {{formula:3.4}} per la composizione, e {{formula:3.6}} per ricavare l'inversa risolvendo $y=f(x)$ rispetto a $x$.
:::

:::solution
$(f\circ g)(x) = f(g(x)) = 3(x^2+1)-2 = 3x^2+1$. Poiché $g$ e $f$ sono entrambe definite su tutto $\mathbb{R}$, anche la composta ha dominio $\mathbb{R}$.

$(g\circ f)(x) = g(f(x)) = (3x-2)^2+1 = 9x^2-12x+4+1 = 9x^2-12x+5$, anch'essa definita su $\mathbb{R}$.

Per determinare $f^{-1}$, poniamo $y=3x-2$ e risolviamo rispetto a $x$:

$$
x = \frac{y+2}{3}.
$$

Quindi

$$
f^{-1}(x) = \frac{x+2}{3}.
$$
:::
:::

:::exercise{id="E3.11" chapter="3" difficulty="difficile"}
## Domanda
Si consideri la funzione $f:\mathbb{R}\to\mathbb{R}$ definita da

$$f(x) = \frac{x}{1+|x|}.$$

Determinare l'immagine di $f$ e stabilire se $f$ è iniettiva. La funzione $f:\mathbb{R}\to\mathbb{R}$ è suriettiva? È suriettiva se pensata come funzione a valori nell'intervallo $(-1,1)$?

:::hint
Distingui i casi $x\ge 0$ e $x<0$ e studia la monotonia di $f$ su ciascuno dei due rami, usando {{formula:7.13}}.
:::

:::solution
Per $x\ge 0$ si ha $f(x) = \dfrac{x}{1+x} = 1-\dfrac{1}{1+x}$. Poiché $\dfrac{1}{1+x}$ è strettamente decrescente su $\lbrack 0,+\infty)$, $f$ è strettamente crescente su questo intervallo, con $f(0)=0$ e $\lim_{x\to+\infty} f(x)=1$ (valore mai raggiunto). Dunque su $\lbrack 0,+\infty)$ l'immagine di $f$ è $\lbrack 0,1)$.

Per $x<0$ si ha $f(x) = \dfrac{x}{1-x} = -1+\dfrac{1}{1-x}$. Poiché per $x<0$ il denominatore $1-x$ è decrescente al crescere di $x$ (tende a $1$ per $x\to 0^-$), $\dfrac{1}{1-x}$ è strettamente crescente, quindi $f$ è strettamente crescente anche su $(-\infty,0)$, con $\lim_{x\to-\infty} f(x)=-1$ (mai raggiunto) e $\lim_{x\to 0^-} f(x) = 0$. Dunque su $(-\infty,0)$ l'immagine di $f$ è $(-1,0)$.

I due rami si raccordano con continuità in $x=0$ (entrambi danno $f(0)=0$), quindi $f$ è strettamente crescente su tutto $\mathbb{R}$, dunque iniettiva, e

$$
\operatorname{Im}(f) = (-1,1).
$$

Come funzione $f:\mathbb{R}\to\mathbb{R}$, $f$ non è suriettiva, perché l'immagine è un sottoinsieme proprio del codominio. Se invece consideriamo $f:\mathbb{R}\to(-1,1)$, allora $f$ è suriettiva (e, essendo anche iniettiva, è biettiva).
:::
:::

:::exercise{id="E3.12" chapter="3" difficulty="medio"}
## Domanda
Si consideri la funzione $f(x) = x + \dfrac{1}{x}$ per $x>0$. Determinare gli intervalli di monotonia, gli eventuali punti di massimo o minimo locale e assoluto, e stabilire se $f$ è limitata superiormente e/o inferiormente su $(0,+\infty)$.

:::hint
Studia il segno di $f'(x) = 1-\dfrac{1}{x^2}$ e il comportamento di $f$ per $x\to 0^+$ e $x\to+\infty$, usando {{formula:3.12}}.
:::

:::solution
Il dominio è $(0,+\infty)$. Calcoliamo

$$
f'(x) = 1-\frac{1}{x^2} = \frac{x^2-1}{x^2}.
$$

Per $x\in(0,1)$ si ha $x^2-1<0$, quindi $f'(x)<0$: $f$ è strettamente decrescente su $(0,1)$. Per $x\in(1,+\infty)$ si ha $f'(x)>0$: $f$ è strettamente crescente su $(1,+\infty)$. In $x=1$ si ha $f'(1)=0$ e il segno di $f'$ passa da negativo a positivo, quindi per {{formula:8.4}} $x=1$ è un punto di minimo locale, con $f(1)=2$.

Poiché $f$ decresce prima di $1$ e cresce dopo, questo minimo locale è anche il minimo assoluto su $(0,+\infty)$:

$$
\min_{x>0} f(x) = f(1) = 2.
$$

Studiamo il comportamento agli estremi del dominio: $\lim_{x\to 0^+} f(x) = +\infty$ e $\lim_{x\to+\infty} f(x) = +\infty$. Non essendovi altri punti critici né quindi massimi locali, e divergendo $f$ a $+\infty$ in entrambi gli estremi, $f$ non è limitata superiormente.
:::
:::

:::exercise{id="E4.1" chapter="4" difficulty="medio"}
## Domanda
Sia $A = \left\{ (-1)^n + \frac{1}{n} \;:\; n\in\mathbb{N},\, n\ge 1 \right\}$. Determinare $\sup A$, $\inf A$ e, se esistono, $\max A$ e $\min A$. Determinare inoltre i punti di accumulazione di $A$.

:::hint
Separare i termini con $n$ pari da quelli con $n$ dispari e studiarne il comportamento al crescere di $n$.
:::

:::solution
Per $n$ pari, $a_n = 1+\frac{1}{n}$: è una successione decrescente che tende a $1$, con massimo valore raggiunto per $n=2$: $a_2 = 3/2$.

Per $n$ dispari, $a_n = -1+\frac{1}{n}$: per $n\ge 3$ è decrescente verso $-1$, mentre per $n=1$ si ha $a_1=0$.

Confrontando tutti i valori, il massimo assoluto dell'insieme è $3/2$, raggiunto per $n=2$, quindi $\sup A = \max A = 3/2$.

I termini dispari si avvicinano sempre più a $-1$ senza mai raggiungerlo (poiché $1/n>0$ per ogni $n$), quindi $\inf A = -1$ ma $A$ non ha minimo.

I punti di accumulazione di $A$ sono i limiti delle sottosuccessioni: $1$ (limite dei termini pari) e $-1$ (limite dei termini dispari con $n\ge3$).
:::
:::

:::exercise{id="E4.2" chapter="4" difficulty="difficile"}
## Domanda
Studiare, mediante il criterio del rapporto, la convergenza della successione $a_n = \dfrac{2^n\, n!}{n^n}$ e calcolarne il limite.

:::hint
Nel calcolare $a_{n+1}/a_n$, far emergere un fattore del tipo $\left(\dfrac{n}{n+1}\right)^n$ e ricondursi al limite notevole esponenziale.
:::

:::solution
Calcoliamo il rapporto tra termini consecutivi:
$$\frac{a_{n+1}}{a_n} = \frac{2^{n+1}(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^n}{2^n n!} = \frac{2(n+1)\, n^n}{(n+1)^{n+1}} = 2\left(\frac{n}{n+1}\right)^n.$$

Scriviamo $\left(\dfrac{n}{n+1}\right)^n = \left(\dfrac{1}{1+1/n}\right)^n = \dfrac{1}{\left(1+\frac{1}{n}\right)^n}$. Per il {{formula:6.1}}, $\left(1+\dfrac{1}{n}\right)^n \to e$, quindi

$$
\frac{a_{n+1}}{a_n} \to \frac{2}{e} \approx 0{,}7358 < 1.
$$

Per il {{formula:4.14}}, poiché il limite del rapporto è strettamente minore di $1$, la successione $a_n$ tende a $0$.
:::
:::

:::exercise{id="E4.3" chapter="4" difficulty="medio"}
## Domanda
Usando il criterio della radice, studiare la convergenza della successione $a_n = \left(\dfrac{n+1}{2n+3}\right)^n$ e calcolarne il limite.

:::hint
Applicare il criterio della radice alla successione $a_n$, che è già scritta come potenza $n$-esima di una quantità.
:::

:::solution
Essendo $a_n \ge 0$ per ogni $n$, calcoliamo la radice $n$-esima:

$$
\sqrt[n]{a_n} = \frac{n+1}{2n+3}.
$$

Si ha $\displaystyle\lim_{n\to\infty}\frac{n+1}{2n+3} = \frac{1}{2} < 1$. Per il {{formula:4.15}}, poiché il limite della radice $n$-esima è strettamente minore di $1$, la successione $a_n$ tende a $0$.
:::
:::

:::exercise{id="E4.4" chapter="4" difficulty="difficile"}
## Domanda
Dimostrare rigorosamente, usando la definizione di limite, che $\lim_{x\to+\infty}\left(\sqrt{x+1}-\sqrt{x}\right)=0$, determinando esplicitamente, per ogni $\varepsilon>0$, un valore $M(\varepsilon)$ tale che $x>M(\varepsilon)$ implichi $\left|\sqrt{x+1}-\sqrt{x}\right|<\varepsilon$.

:::hint
Razionalizzare moltiplicando e dividendo per $\sqrt{x+1}+\sqrt{x}$, poi stimare il denominatore dal basso.
:::

:::solution
Per $x\ge 0$ si ha

$$
\sqrt{x+1}-\sqrt{x} = \frac{(\sqrt{x+1}-\sqrt{x})(\sqrt{x+1}+\sqrt{x})}{\sqrt{x+1}+\sqrt{x}} = \frac{1}{\sqrt{x+1}+\sqrt{x}}.
$$

Poiché $\sqrt{x+1}+\sqrt{x} > 2\sqrt{x}$ per $x>0$, si ottiene

$$
0<\sqrt{x+1}-\sqrt{x} < \frac{1}{2\sqrt{x}}.
$$

La condizione $\dfrac{1}{2\sqrt{x}}<\varepsilon$ equivale a $\sqrt{x}>\dfrac{1}{2\varepsilon}$, cioè $x > \dfrac{1}{4\varepsilon^2}$. Scegliendo $M(\varepsilon) = \dfrac{1}{4\varepsilon^2}$, per ogni $x>M(\varepsilon)$ si ha $0<\sqrt{x+1}-\sqrt{x}<\varepsilon$, dunque $\left|\sqrt{x+1}-\sqrt{x}\right|<\varepsilon$, come richiesto dalla {{formula:4.4}}.
:::
:::

:::exercise{id="E4.5" chapter="4" difficulty="facile"}
## Domanda
Verificare, usando la definizione $\varepsilon$-$\delta$, che $\lim_{x\to 2}(3x-1)=5$. Determinare un valore di $\delta>0$ in funzione di $\varepsilon$ e calcolarlo esplicitamente per $\varepsilon = 0{,}03$.

:::hint
Stimare $|(3x-1)-5|$ in funzione di $|x-2|$ e risolvere la disuguaglianza $|(3x-1)-5|<\varepsilon$.
:::

:::solution
Si calcola $|(3x-1)-5| = |3x-6| = 3|x-2|$. La condizione $3|x-2|<\varepsilon$ equivale a $|x-2|<\varepsilon/3$. Basta dunque scegliere $\delta = \varepsilon/3$: per ogni $x$ con $0<|x-2|<\delta$ si ha $|(3x-1)-5|<\varepsilon$, come richiesto dalla {{formula:4.2}}.

Per $\varepsilon = 0{,}03$ si ottiene $\delta = 0{,}01$.
:::
:::

:::exercise{id="E4.6" chapter="4" difficulty="difficile"}
## Domanda
Sia $a_n = \sin\!\left(\dfrac{n\pi}{2}\right)$. Mostrare che $(a_n)$ è limitata ma non converge, determinando tutti i possibili limiti delle sue sottosuccessioni.

:::hint
Studiare i valori di $a_n$ al variare del resto di $n$ modulo $4$.
:::

:::solution
Si calcolano i valori di $a_n$ a seconda del resto di $n$ modulo $4$:
- se $n = 4k$, allora $a_n = \sin(2k\pi) = 0$;
- se $n = 4k+1$, allora $a_n = \sin\!\left(\frac{\pi}{2}+2k\pi\right) = 1$;
- se $n = 4k+2$, allora $a_n = \sin(\pi + 2k\pi) = 0$;
- se $n = 4k+3$, allora $a_n = \sin\!\left(\frac{3\pi}{2}+2k\pi\right) = -1$.

Quindi $a_n \in \{-1,0,1\}$ per ogni $n$, e in particolare $|a_n|\le 1$: la successione è limitata.

Le sottosuccessioni (secondo la {{formula:4.12}}) con $n = 4k+1$ sono costanti uguali a $1$, con $n=4k+3$ costanti uguali a $-1$, e con $n=4k$ o $n=4k+2$ costanti uguali a $0$: esse convergono quindi rispettivamente a $1$, $-1$ e $0$.

Poiché esistono sottosuccessioni con limiti diversi, per il teorema di unicità del limite la successione $(a_n)$ non converge. Inoltre, poiché $a_n$ assume solo i valori $-1,0,1$ per ogni $n$, non esistono altri possibili limiti sottosequenziali.
:::
:::

:::exercise{id="E4.7" chapter="4" difficulty="facile"}
## Domanda
Si consideri l'insieme $A = (0,1\rbrack  \cup \{2\}$. Classificare i punti $x=0$, $x=1$ e $x=2$ come punti interni, di frontiera, isolati o di accumulazione per $A$, e determinare $\sup A$, $\inf A$ e, se esistono, $\max A$ e $\min A$.

:::hint
Per ogni punto, verificare se esiste un intorno completamente contenuto in $A$ oppure se ogni intorno contiene sia punti di $A$ sia punti del complementare.
:::

:::solution
Ogni punto di $(0,1)$ è interno ad $A$, perché ammette un intorno tutto contenuto in $(0,1)\subset A$.

Il punto $x=1$ appartiene ad $A$: ogni intorno di $1$ contiene punti di $(1,1+\varepsilon)$ che non sono in $A$, quindi $1$ non è interno ma è un punto di frontiera; inoltre è di accumulazione, poiché la successione $1-1/n \in A$, per $n\ge 2$, tende a $1$.

Il punto $x=0$ non appartiene ad $A$: ogni intorno $(-\varepsilon,\varepsilon)$ contiene sia punti di $(0,\min\{\varepsilon,1\})\subset A$ sia punti negativi non in $A$, quindi $0$ è di frontiera; è anche di accumulazione, poiché $1/n \in A$ tende a $0$.

Il punto $x=2$ appartiene ad $A$: scegliendo $\varepsilon=1/2$, l'intorno $(2-\varepsilon,2+\varepsilon)$ contiene solo il punto $2$ di $A$, quindi $2$ è isolato (e di conseguenza di frontiera).

Infine $\sup A = \max A = 2$, mentre $\inf A = 0$ non è raggiunto, quindi $A$ non ha minimo.
:::
:::

:::exercise{id="E4.8" chapter="4" difficulty="difficile"}
## Domanda
Sia $a_n = \sqrt{n}$. Calcolare, se esistono, i seguenti limiti, motivando la risposta con i teoremi opportuni:

$$
(1)\quad \lim_{n\to\infty}\frac{1}{a_n}\left(3+\cos(n\pi)\right), \qquad (2)\quad \lim_{n\to\infty} a_n\left(\cos(n\pi)-1\right).
$$

:::hint
Ricordare che $\cos(n\pi) = (-1)^n$; nel primo caso usare il confronto, nel secondo distinguere $n$ pari da $n$ dispari e applicare il teorema di unicità del limite.
:::

:::solution
Si ha $\cos(n\pi) = (-1)^n$, quindi $(-1)^n \in \lbrack -1,1\rbrack $ per ogni $n$.

(1) Il numeratore $3+(-1)^n \in \lbrack 2,4\rbrack $, quindi

$$
\frac{2}{\sqrt{n}} \le \frac{3+(-1)^n}{\sqrt{n}} \le \frac{4}{\sqrt{n}}.
$$

Poiché $\sqrt{n}\to+\infty$, entrambi gli estremi tendono a $0$; per il teorema del confronto il limite vale $0$.

(2) Scriviamo $a_n(\cos(n\pi)-1) = \sqrt{n}\left((-1)^n - 1\right)$. Se $n$ è pari, $(-1)^n-1 = 0$, quindi il termine vale $0$. Se $n$ è dispari, $(-1)^n-1=-2$, quindi il termine vale $-2\sqrt{n} \to -\infty$.

La sottosuccessione con $n$ pari tende a $0$, mentre quella con $n$ dispari tende a $-\infty$: per il teorema di unicità del limite (applicato alle sottosuccessioni), non essendo questi due valori uguali, il limite della successione originale non esiste.
:::
:::

:::exercise{id="E4.9" chapter="4" difficulty="facile"}
## Domanda
Sia $a_n = (-1)^n \dfrac{n}{n+1}$. Determinare i limiti delle sottosuccessioni $a_{2n}$ e $a_{2n+1}$, e stabilire se $(a_n)$ converge.

:::hint
Separare i termini con indice pari da quelli con indice dispari e calcolarne separatamente il limite.
:::

:::solution
Per gli indici pari: $a_{2n} = \dfrac{2n}{2n+1} \to 1$ per $n\to\infty$.

Per gli indici dispari: $a_{2n+1} = -\dfrac{2n+1}{2n+2} \to -1$ per $n\to\infty$.

Le due sottosuccessioni, definite tramite la {{formula:4.12}}, convergono a limiti diversi ($1$ e $-1$). Se $(a_n)$ convergesse a un limite $L$, ogni sua sottosuccessione dovrebbe convergere a $L$; ciò contraddice il fatto che le due sottosuccessioni hanno limiti diversi. Quindi $(a_n)$ non converge.
:::
:::

:::exercise{id="E4.10" chapter="4" difficulty="facile"}
## Domanda
Usando il criterio del rapporto, studiare la convergenza della successione $a_n = \dfrac{3^n}{n!}$ e calcolarne il limite.

:::hint
Calcolare il rapporto $a_{n+1}/a_n$ e studiarne il limite per $n\to\infty$.
:::

:::solution
Calcoliamo il rapporto tra termini consecutivi:
$$\frac{a_{n+1}}{a_n} = \frac{3^{n+1}}{(n+1)!}\cdot\frac{n!}{3^n} = \frac{3}{n+1}.$$

Si ha $\displaystyle\lim_{n\to\infty}\frac{3}{n+1} = 0 < 1$. Per il {{formula:4.14}}, poiché il limite del rapporto è strettamente minore di $1$, la successione $a_n$ tende a $0$.
:::
:::

:::exercise{id="E4.11" chapter="4" difficulty="medio"}
## Domanda
Calcolare, usando il teorema del confronto, i limiti $\displaystyle\lim_{n\to\infty}\frac{2+\sin n}{n}$ e $\displaystyle\lim_{n\to\infty}\frac{n+(-1)^n\sqrt{n}}{n}$, motivando ogni passaggio.

:::hint
Nel primo caso limitare il numeratore tra due costanti; nel secondo isolare il termine oscillante e limitarlo tramite $1/\sqrt{n}$.
:::

:::solution
Per il primo limite: poiché $-1\le \sin n \le 1$, si ha $1 \le 2+\sin n \le 3$. Dividendo per $n>0$:

$$
\frac{1}{n} \le \frac{2+\sin n}{n} \le \frac{3}{n}.
$$

Entrambi gli estremi tendono a $0$ per $n\to\infty$, quindi per il teorema del confronto anche il limite centrale esiste e vale $0$.

Per il secondo limite, riscriviamo
$$\frac{n+(-1)^n\sqrt{n}}{n} = 1 + \frac{(-1)^n}{\sqrt{n}}.$$

Poiché $-\dfrac{1}{\sqrt{n}} \le \dfrac{(-1)^n}{\sqrt{n}} \le \dfrac{1}{\sqrt{n}}$ e entrambi gli estremi tendono a $0$, per il teorema del confronto si ha $\dfrac{(-1)^n}{\sqrt{n}}\to 0$, quindi il limite cercato vale $1+0=1$.
:::
:::

:::exercise{id="E4.12" chapter="4" difficulty="facile"}
## Domanda
Sia $(a_n)$ tale che $\lim_{n\to\infty} a_n = 5$. Usando il teorema della permanenza del segno, dimostrare che esiste $N_0$ tale che $a_n>4$ per ogni $n>N_0$. Verificarlo esplicitamente nel caso $a_n = 5+\dfrac{1}{n}$.

:::hint
Applicare il teorema della permanenza del segno alla successione $b_n = a_n - 4$, che tende a $1>0$.
:::

:::solution
Poniamo $b_n = a_n - 4$. Poiché $a_n \to 5$, si ha $b_n \to 1 > 0$. Per il teorema della permanenza del segno, esiste $N_0$ tale che $b_n>0$ per ogni $n>N_0$, cioè $a_n>4$ per ogni $n>N_0$.

In modo equivalente, applicando la definizione di limite con $\varepsilon = 1$: esiste $N_0$ tale che per $n>N_0$ si ha $|a_n-5|<1$, da cui $a_n>4$.

Nel caso $a_n = 5+\dfrac{1}{n}$, si ha $a_n > 5 > 4$ per ogni $n\ge 1$, quindi la condizione è verificata già con $N_0 = 0$.
:::
:::

:::exercise{id="E4.13" chapter="4" difficulty="medio"}
## Domanda
Dimostrare che la successione $a_n = n\sin\!\left(\frac{1}{n}\right)$ converge e calcolarne il limite, usando un cambio di variabile e la caratterizzazione sequenziale del limite.

:::hint
Porre $t_n = 1/n$ e riconoscere nel rapporto $a_n$ il limite notevole del seno per $t\to 0$.
:::

:::solution
Si osserva che $a_n = n\sin\!\left(\frac{1}{n}\right) = \dfrac{\sin(1/n)}{1/n}$. Poniamo $t_n = 1/n$; chiaramente $t_n \to 0^+$ per $n\to\infty$.

Per il {{formula:6.6}} si ha $\lim_{t\to 0}\dfrac{\sin t}{t} = 1$. Per la {{formula:4.13}}, poiché $t_n \to 0$, si ha anche

$$
\lim_{n\to\infty} \frac{\sin(t_n)}{t_n} = 1.
$$

Quindi $\lim_{n\to\infty} a_n = 1$.
:::
:::

:::exercise{id="E4.14" chapter="4" difficulty="medio"}
## Domanda
Verificare, usando la definizione di limite di successione, che $\lim_{n\to\infty}\frac{2n+1}{n+3}=2$. Determinare $N(\varepsilon)$ tale che $|a_n-2|<\varepsilon$ per ogni $n>N(\varepsilon)$, e calcolarlo per $\varepsilon=0{,}01$.

:::hint
Scrivere $a_n-2$ come un'unica frazione e stimare il suo valore assoluto in funzione di $n$.
:::

:::solution
Si ha $a_n - 2 = \dfrac{2n+1}{n+3}-2 = \dfrac{2n+1-2n-6}{n+3} = \dfrac{-5}{n+3}$, quindi $|a_n-2| = \dfrac{5}{n+3}$.

La condizione $\dfrac{5}{n+3}<\varepsilon$ equivale a $n+3 > \dfrac{5}{\varepsilon}$, cioè $n > \dfrac{5}{\varepsilon}-3$. Si può quindi prendere $N(\varepsilon) = \dfrac{5}{\varepsilon}-3$, coerentemente con la {{formula:4.4}}.

Per $\varepsilon = 0{,}01$: $N = 500-3 = 497$, quindi basta prendere $n\ge 498$.
:::
:::

:::exercise{id="E4.15" chapter="4" difficulty="difficile"}
## Domanda
Sia $A = \left\{ \frac{1}{n} \;:\; n\in\mathbb{N},\, n\ge 1 \right\} \cup \{0\}$. Dimostrare che $A$ è chiuso ma non aperto, determinare l'interno di $A$, e verificare che $0$ è un punto di accumulazione di $A$ mentre ogni punto $1/n$ è isolato.

:::hint
Per mostrare che $A$ è chiuso, verificare che il complementare $\mathbb{R}\setminus A$ è aperto, distinguendo i casi $y<0$, $y>1$, $0<y<1$ con $y\ne 1/n$.
:::

:::solution
Ogni punto $1/n$ è isolato. Per $n=1$, scegliamo $\varepsilon=1/4$: l'intervallo $\left(1-\varepsilon,1+\varepsilon\right)$ non contiene altri punti di $A$. Per $n\ge 2$, scegliamo

$$
\varepsilon = \frac{1}{2}\min\left(\frac{1}{n}-\frac{1}{n+1}, \frac{1}{n-1}-\frac{1}{n}\right)>0.
$$

L'intervallo $\left(\frac{1}{n}-\varepsilon, \frac{1}{n}+\varepsilon\right)$ non contiene altri punti di $A$. Questi punti non sono interni, perché ogni loro intorno contiene anche punti non appartenenti ad $A$, ad esempio numeri irrazionali vicini.

Per il punto $0$, per ogni $\varepsilon>0$, per la proprietà di Archimede esiste $n$ tale che $1/n<\varepsilon$; quindi l'intorno $(-\varepsilon,\varepsilon)$ contiene punti di $A$ diversi da $0$. Dunque $0$ è un punto di accumulazione per $A$, non isolato.

$A$ non è aperto, perché $0\in A$ non ha nessun intorno contenuto in $A$: ogni intorno di $0$ contiene punti reali non appartenenti ad $A$.

$A$ è chiuso: sia $y \notin A$. Se $y<0$ oppure $y>1$, basta un intorno sufficientemente piccolo per restare lontani da $A$. Se $0<y<1$ e $y\ne 1/n$ per ogni $n$, poiché la successione $1/n$ è strettamente decrescente verso $0$, esiste $n$ tale che $\frac{1}{n+1}<y<\frac{1}{n}$. Scegliendo $\varepsilon = \min\left(y-\frac{1}{n+1}, \frac{1}{n}-y\right)>0$, l'intorno $(y-\varepsilon,y+\varepsilon)$ non contiene punti di $A$. Dunque $\mathbb{R}\setminus A$ è aperto, cioè $A$ è chiuso.

L'interno di $A$ è vuoto, poiché nessun punto di $A$ ammette un intorno interamente contenuto in $A$.
:::
:::

:::exercise{id="E5.1" chapter="5" difficulty="facile"}
## Domanda
Si consideri la funzione

$$
f(x)=\begin{cases} \dfrac{x^2-9}{x-3} & x\neq 3\\ 5 & x=3.\end{cases}
$$

Studiare la continuità di $f$ nel punto $x=3$ e classificare l'eventuale discontinuità.

:::hint
Per $x\neq 3$ semplificare la frazione razionale scomponendo il numeratore, poi calcolare $\lim_{x\to 3} f(x)$ e confrontarlo con $f(3)$, usando la {{formula:5.1}}.
:::

:::solution
Per $x\neq 3$ si ha $x^2-9=(x-3)(x+3)$, quindi

$$
f(x)=\frac{(x-3)(x+3)}{x-3}=x+3,\qquad x\neq 3.
$$

Dunque

$$
\lim_{x\to 3} f(x)=\lim_{x\to 3}(x+3)=6.
$$

Il limite esiste finito, ma $f(3)=5\neq 6$. Per la {{formula:5.1}}, $f$ non è continua in $x=3$: si tratta di una discontinuità eliminabile, poiché basterebbe ridefinire $f(3)=6$ per ottenere una funzione continua.
:::
:::

:::exercise{id="E5.2" chapter="5" difficulty="medio"}
## Domanda
Determinare il valore del parametro $a\in\mathbb{R}$ affinché la funzione

$$
f(x)=\begin{cases} \dfrac{e^x-1}{x} & x<0\\ a & x=0\\ \dfrac{\log(1+x)}{x} & x>0\end{cases}
$$

sia continua in $x=0$.

:::hint
Calcolare separatamente il limite da sinistra con il {{formula:6.2}} e il limite da destra con il {{formula:6.3}}.
:::

:::solution
Per il {{formula:6.2}} si ha

$$
\lim_{x\to 0^-}\frac{e^x-1}{x}=1.
$$

Per il {{formula:6.3}} si ha

$$
\lim_{x\to 0^+}\frac{\log(1+x)}{x}=1.
$$

I due limiti unilateri (si veda {{formula:4.6}}) coincidono e valgono $1$, quindi $\lim_{x\to 0} f(x)=1$. Per la {{formula:5.1}} la funzione è continua in $0$ se e solo se $a=1$.
:::
:::

:::exercise{id="E5.3" chapter="5" difficulty="facile"}
## Domanda
Dimostrare che l'equazione $x^3-x-1=0$ ha almeno una soluzione nell'intervallo $(1,2)$.

:::hint
Applicare il {{formula:5.3}} alla funzione $f(x)=x^3-x-1$ sull'intervallo $\lbrack 1,2\rbrack $, verificando il segno di $f$ agli estremi.
:::

:::solution
La funzione $f(x)=x^3-x-1$ è un polinomio, quindi continua su tutto $\mathbb{R}$ e in particolare su $\lbrack 1,2\rbrack $. Si calcola

$$
f(1)=1-1-1=-1<0,\qquad f(2)=8-2-1=5>0.
$$

Poiché $f$ è continua su $\lbrack 1,2\rbrack $ e assume valori di segno opposto agli estremi, per il {{formula:5.3}} esiste almeno un punto $c\in(1,2)$ tale che $f(c)=0$.
:::
:::

:::exercise{id="E5.4" chapter="5" difficulty="medio"}
## Domanda
Dimostrare che la funzione $f(x)=x^3+x-1$ si annulla in uno ed un solo punto $x_0\in(0,1)$.

:::hint
Per l'esistenza usare il {{formula:5.3}} sugli estremi dell'intervallo; per l'unicità studiare il segno di $f'$ con il {{formula:7.13}}.
:::

:::solution
La funzione $f(x)=x^3+x-1$ è continua su $\mathbb{R}$ (è un polinomio). Si ha

$$
f(0)=-1<0,\qquad f(1)=1+1-1=1>0.
$$

Per il {{formula:5.3}} applicato su $\lbrack 0,1\rbrack $, esiste almeno un punto $x_0\in(0,1)$ con $f(x_0)=0$. Per l'unicità, si osserva che

$$
f'(x)=3x^2+1\geq 1>0 \quad \text{per ogni } x\in\mathbb{R}.
$$

Per il {{formula:7.13}}, $f$ è strettamente crescente su tutto $\mathbb{R}$, quindi è iniettiva: non può assumere il valore $0$ in più di un punto. Lo zero $x_0\in(0,1)$ trovato è pertanto l'unico zero di $f$ su tutto $\mathbb{R}$.
:::
:::

:::exercise{id="E5.5" chapter="5" difficulty="difficile"}
## Domanda
Sia $f:\lbrack 0,2\rbrack \to\mathbb{R}$ una funzione continua tale che $f(0)=f(2)$. Dimostrare che esiste $c\in\lbrack 0,1\rbrack $ tale che $f(c)=f(c+1)$.

:::hint
Introdurre la funzione ausiliaria $g(x)=f(x+1)-f(x)$ su $\lbrack 0,1\rbrack $, osservare che $g(1)=-g(0)$, e applicare il {{formula:5.3}}.
:::

:::solution
Si definisca $g(x)=f(x+1)-f(x)$ per $x\in\lbrack 0,1\rbrack $. La funzione $g$ è continua su $\lbrack 0,1\rbrack $, perché somma e composizione di funzioni continue (traslazione di $f$). Si ha

$$
g(0)=f(1)-f(0),\qquad g(1)=f(2)-f(1).
$$

Usando l'ipotesi $f(2)=f(0)$, si ottiene

$$
g(1)=f(0)-f(1)=-\big(f(1)-f(0)\big)=-g(0).
$$

Se $g(0)=0$, basta scegliere $c=0$: infatti $f(1)=f(0)$, cioè $f(c+1)=f(c)$. Se invece $g(0)\neq 0$, allora $g(0)$ e $g(1)=-g(0)$ hanno segno opposto, quindi per il {{formula:5.3}} (si veda anche il {{formula:5.4}}) esiste $c\in(0,1)$ tale che $g(c)=0$, ossia $f(c+1)=f(c)$. In entrambi i casi esiste $c\in\lbrack 0,1\rbrack $ con $f(c)=f(c+1)$.
:::
:::

:::exercise{id="E5.6" chapter="5" difficulty="medio"}
## Domanda
Determinare il valore del parametro $a\in\mathbb{R}$ affinché la funzione

$$
f(x)=\begin{cases} \dfrac{\sin(3x)}{x} & x\neq 0\\ a & x=0\end{cases}
$$

risulti continua in $x=0$.

:::hint
Riscrivere $\dfrac{\sin(3x)}{x}=3\cdot\dfrac{\sin(3x)}{3x}$ e applicare il {{formula:6.6}}.
:::

:::solution
Si scrive

$$
\frac{\sin(3x)}{x}=3\cdot\frac{\sin(3x)}{3x}.
$$

Posto $t=3x\to 0$ quando $x\to 0$, per il {{formula:6.6}} si ha $\lim_{t\to 0}\frac{\sin t}{t}=1$, dunque

$$
\lim_{x\to 0} f(x)=3\cdot 1=3.
$$

Per la {{formula:5.1}} la funzione è continua in $0$ se e solo se $a=\lim_{x\to 0} f(x)=3$.
:::
:::

:::exercise{id="E5.7" chapter="5" difficulty="facile"}
## Domanda
Determinare il valore del parametro $a\in\mathbb{R}$ affinché la funzione

$$
f(x)=\begin{cases} x+a & x\leq 1\\ 3x-1 & x>1\end{cases}
$$

sia continua su tutto $\mathbb{R}$.

:::hint
La funzione è continua ovunque tranne eventualmente in $x=1$: imporre l'uguaglianza tra $f(1)$ e il limite da destra in $1$.
:::

:::solution
Per $x<1$ e per $x>1$ la funzione è un polinomio, quindi continua. Resta da studiare il punto di raccordo $x=1$. Si ha

$$
f(1)=1+a,\qquad \lim_{x\to 1^+} f(x)=\lim_{x\to 1^+}(3x-1)=2.
$$

Per la {{formula:4.6}} e la {{formula:5.1}}, $f$ è continua in $x=1$ se e solo se

$$
1+a=2\ \Longrightarrow\ a=1.
$$
:::
:::

:::exercise{id="E5.8" chapter="5" difficulty="medio"}
## Domanda
Si consideri la funzione

$$
f(x)=\begin{cases} \arctan\left(\dfrac{1}{x}\right) & x\neq 0\\ 0 & x=0.\end{cases}
$$

Studiare la continuità di $f$ in $x=0$ e, nel caso di discontinuità, specificarne il tipo, indicando se esiste un valore di $f(0)$ che la renda continua.

:::hint
Calcolare separatamente $\lim_{x\to 0^+} \arctan(1/x)$ e $\lim_{x\to 0^-} \arctan(1/x)$, ricordando il comportamento di $1/x$ agli estremi.
:::

:::solution
Quando $x\to 0^+$, $1/x\to +\infty$, quindi

$$
\lim_{x\to 0^+} \arctan\left(\frac{1}{x}\right)=\frac{\pi}{2}.
$$

Quando $x\to 0^-$, $1/x\to -\infty$, quindi

$$
\lim_{x\to 0^-} \arctan\left(\frac{1}{x}\right)=-\frac{\pi}{2}.
$$

I due limiti unilateri (cfr. {{formula:4.6}}) esistono finiti ma sono diversi tra loro, quindi il limite $\lim_{x\to 0} f(x)$ non esiste. Si tratta di una discontinuità di prima specie (di salto), con salto di ampiezza $\pi$: nessuna scelta del valore $f(0)$ può rendere la funzione continua in $0$.
:::
:::

:::exercise{id="E5.9" chapter="5" difficulty="difficile"}
## Domanda
Studiare la continuità in $x=0$ della funzione

$$
f(x)=\begin{cases} x^2\sin\left(\dfrac{1}{x}\right) & x<0\\ 0 & x=0\\ \dfrac{e^x-1-x}{x^2} & x>0,\end{cases}
$$

classificando il tipo di eventuale discontinuità.

:::hint
Per il limite da sinistra usare il teorema del confronto osservando che $\left|x^2\sin(1/x)\right|\le x^2$; per il limite da destra usare lo sviluppo di Taylor di $e^x$ con il {{formula:8.2}}.
:::

:::solution
Per $x<0$ vale $-x^2\le x^2\sin(1/x)\le x^2$, e poiché $\lim_{x\to 0} x^2=0$, per il teorema del confronto si ha

$$
\lim_{x\to 0^-} f(x)=0.
$$

Per $x>0$, usando la {{formula:8.2}} si ha $e^x=1+x+\dfrac{x^2}{2}+o(x^2)$ per $x\to 0$, dunque

$$
e^x-1-x=\frac{x^2}{2}+o(x^2),
$$

e quindi

$$
\lim_{x\to 0^+} f(x)=\lim_{x\to 0^+}\frac{\frac{x^2}{2}+o(x^2)}{x^2}=\frac{1}{2}.
$$

I due limiti unilateri (si veda {{formula:4.6}}) sono entrambi finiti ma diversi ($0$ e $1/2$), quindi $\lim_{x\to 0} f(x)$ non esiste. Anche se $f(0)=0$ coincide con il limite sinistro, non può coincidere anche con quello destro: si tratta di una discontinuità di prima specie (di salto) in $x=0$, e nessun valore di $f(0)$ può eliminarla.
:::
:::

:::exercise{id="E6.1" chapter="6" difficulty="facile"}
## Domanda
Calcolare il limite

$$\lim_{x\to 0}\frac{\sin(5x)}{\tan(3x)}.$$

:::hint
Scrivi $\sin(5x)$ e $\tan(3x)$ come prodotto dell'argomento per il corrispondente limite notevole, usando {{formula:6.6}} e {{formula:6.7}}.
:::

:::solution
Riscriviamo il rapporto moltiplicando e dividendo per gli argomenti $5x$ e $3x$:

$$\frac{\sin(5x)}{\tan(3x)}=\frac{\sin(5x)}{5x}\cdot\frac{3x}{\tan(3x)}\cdot\frac{5x}{3x}.$$

Per $x\to 0$ si ha $5x\to 0$ e $3x\to 0$, quindi per {{formula:6.6}}

$$\frac{\sin(5x)}{5x}\to 1,$$

e per {{formula:6.7}}

$$\frac{\tan(3x)}{3x}\to 1 \quad\Longrightarrow\quad \frac{3x}{\tan(3x)}\to 1.$$

Il terzo fattore è costante: $\dfrac{5x}{3x}=\dfrac{5}{3}$. Quindi

$$\lim_{x\to 0}\frac{\sin(5x)}{\tan(3x)}=1\cdot 1\cdot \frac{5}{3}=\frac{5}{3}.$$
:::
:::

:::exercise{id="E6.2" chapter="6" difficulty="difficile"}
## Domanda
Sia $f(x)=1-\cos(x^2)$.

(a) Determinare la parte principale di $f$ per $x\to 0$ rispetto al campione $\varphi(x)=x$.

(b) Discutere, al variare del parametro $\alpha\in\mathbb{R}$, la convergenza dell'integrale improprio

$$\int_0^1 \frac{f(x)}{x^\alpha}\,dx.$$

:::hint
Usa {{formula:6.8}} applicato a $x^2$ per trovare la parte principale, poi confronta l'integrando vicino a $0$ con una potenza $x^p$ usando il criterio dell'integrale improprio ($p>-1$ converge).
:::

:::solution
(a) Per $x\to 0$, da {{formula:6.8}} applicato a $u=x^2\to 0$:

$$\cos(x^2)=1-\frac{x^4}{2}+o(x^4) \quad\Longrightarrow\quad f(x)=1-\cos(x^2)=\frac{x^4}{2}+o(x^4).$$

Quindi $f$ è infinitesima di ordine $4$ rispetto a $\varphi(x)=x$, con parte principale

$$f(x)\sim \frac{x^4}{2} \quad (x\to 0).$$

(b) L'unico punto critico per l'integrale è $x=0$, poiché $f$ è continua e limitata su $(0,1\rbrack $ e $x^\alpha$ è continua e non nulla su $(0,1\rbrack $; in $x=1$ non c'è alcuna singolarità per nessun $\alpha$. Vicino a $0$, per il principio di eliminazione dei termini trascurabili ({{formula:6.12}}),

$$\frac{f(x)}{x^\alpha}\sim \frac{1}{2}\,x^{4-\alpha} \quad (x\to 0^+).$$

L'integrale improprio $\displaystyle\int_0^1 x^{p}\,dx$ converge se e solo se $p>-1$. Qui $p=4-\alpha$, dunque la condizione di convergenza è

$$4-\alpha>-1 \quad\Longleftrightarrow\quad \alpha<5.$$

Per $\alpha\geq 5$ l'integrale diverge (per $\alpha=5$ si ha una divergenza logaritmica, per $\alpha>5$ una divergenza polinomiale). In conclusione l'integrale converge se e solo se $\alpha<5$.
:::
:::

:::exercise{id="E6.3" chapter="6" difficulty="medio"}
## Domanda
Calcolare il limite

$$\lim_{x\to +\infty}\frac{x^2+3x\ln x}{e^{\sqrt{x}}}.$$

:::hint
Confronta gli ordini di infinito di potenze, logaritmi ed esponenziali con base crescente usando {{formula:6.11}}; ricorda che $e^{\sqrt{x}}$ cresce più rapidamente di qualunque potenza di $x$.
:::

:::solution
Al numeratore, per {{formula:6.11}} il termine dominante è $x^2$, poiché $3x\ln x = o(x^2)$ per $x\to+\infty$ (un logaritmo è trascurabile rispetto a una potenza positiva aggiuntiva di $x$). Quindi

$$x^2+3x\ln x \sim x^2 \quad (x\to+\infty).$$

Per il denominatore, posto $t=\sqrt{x}\to+\infty$, si ha $e^{\sqrt{x}}=e^{t}$, e per {{formula:6.11}} l'esponenziale $e^t$ cresce più velocemente di qualunque potenza di $t$, in particolare più velocemente di $t^4=x^2$. Dunque per ogni $k$ fissato

$$\lim_{x\to+\infty}\frac{x^k}{e^{\sqrt{x}}}=\lim_{t\to+\infty}\frac{t^{2k}}{e^{t}}=0.$$

Applicando questo con $k=2$ e usando il principio di eliminazione dei termini trascurabili ({{formula:6.12}}) sul numeratore,

$$\lim_{x\to +\infty}\frac{x^2+3x\ln x}{e^{\sqrt{x}}}=\lim_{x\to+\infty}\frac{x^2}{e^{\sqrt{x}}}=0.$$
:::
:::

:::exercise{id="E6.4" chapter="6" difficulty="facile"}
## Domanda
Calcolare il limite

$$\lim_{x\to 0}\frac{\ln(1+4x)}{e^{2x}-1}.$$

:::hint
Dividi numeratore e denominatore per gli argomenti $4x$ e $2x$ e applica {{formula:6.3}} e {{formula:6.2}}.
:::

:::solution
Scriviamo

$$\frac{\ln(1+4x)}{e^{2x}-1}=\frac{\ln(1+4x)}{4x}\cdot\frac{2x}{e^{2x}-1}\cdot\frac{4x}{2x}.$$

Per $x\to 0$, usando {{formula:6.3}} si ha

$$\frac{\ln(1+4x)}{4x}\to 1,$$

e usando {{formula:6.2}}

$$\frac{e^{2x}-1}{2x}\to 1 \quad\Longrightarrow\quad \frac{2x}{e^{2x}-1}\to 1.$$

Inoltre $\dfrac{4x}{2x}=2$ per ogni $x\neq 0$. Quindi

$$\lim_{x\to 0}\frac{\ln(1+4x)}{e^{2x}-1}=1\cdot 1\cdot 2=2.$$
:::
:::

:::exercise{id="E6.5" chapter="6" difficulty="difficile"}
## Domanda
Siano $f$ e $g$ funzioni infinitesime per $x\to x_0$, entrambe di ordine $n$ rispetto a un campione $\varphi(x)$, con parti principali $a\,\varphi(x)^n$ e $b\,\varphi(x)^n$ ($a,b\in\mathbb{R}\setminus\{0\}$).

(a) Dimostrare che se $a+b\neq 0$, allora $f+g$ è infinitesima di ordine $n$ rispetto a $\varphi$, con parte principale $(a+b)\varphi(x)^n$; se invece $a+b=0$, allora $f+g=o(\varphi(x)^n)$, e dunque, qualora $f+g$ ammetta un ordine di infinitesimo rispetto a $\varphi$ e non sia identicamente nulla in un intorno di $x_0$, tale ordine è necessariamente maggiore di $n$ (in generale, però, un simile ordine potrebbe non esistere).

(b) Verificare il caso $a+b=0$ con l'esempio $\varphi(x)=x$, $n=2$, $f(x)=x^2+x^3$, $g(x)=-x^2+2x^3$, per $x\to 0$.

:::hint
Scrivi $f$ e $g$ usando la definizione di parte principale, {{formula:6.10}} e {{formula:6.9}}, poi somma gli sviluppi e distingui i due casi in base al segno di $a+b$. Nel caso $a+b=0$, per stabilire che un eventuale ordine $m$ di $f+g$ debba essere maggiore di $n$, considera il rapporto $(f+g)/\varphi^n$ e usa il fatto che $\varphi(x)\to 0$: questo esclude sia $m=n$ sia $m<n$ in un unico argomento.
:::

:::solution
(a) Per definizione di parte principale ({{formula:6.10}}), per $x\to x_0$ si ha

$$f(x)=a\,\varphi(x)^n+o(\varphi(x)^n), \qquad g(x)=b\,\varphi(x)^n+o(\varphi(x)^n),$$

dove gli $o(\varphi(x)^n)$ seguono la definizione {{formula:6.9}}. Sommando,

$$f(x)+g(x)=(a+b)\,\varphi(x)^n+o(\varphi(x)^n),$$

poiché la somma di due funzioni $o(\varphi(x)^n)$ è ancora $o(\varphi(x)^n)$.

Se $a+b\neq 0$, questa espressione è esattamente la definizione di infinitesimo di ordine $n$ con parte principale $(a+b)\varphi(x)^n$, per {{formula:6.10}}.

Se invece $a+b=0$, l'espressione si riduce a $f(x)+g(x)=o(\varphi(x)^n)$: ciò significa che $f+g$ tende a zero più velocemente di $\varphi(x)^n$. Questo non garantisce di per sé l'esistenza di un ordine di infinitesimo per $f+g$ rispetto a $\varphi$, ma se tale ordine $m$ esiste, con parte principale $c\,\varphi(x)^m$ e $c\neq 0$, allora necessariamente $m>n$. Infatti, dividendo per $\varphi(x)^n$,

$$\frac{f(x)+g(x)}{\varphi(x)^n}\sim c\,\varphi(x)^{m-n},$$

e, poiché $f+g=o(\varphi(x)^n)$, il primo membro tende a $0$ per $x\to x_0$. Siccome $\varphi(x)\to 0$, l'unico modo perché $c\,\varphi(x)^{m-n}\to 0$ (con $c\neq 0$) è che l'esponente $m-n$ sia positivo: se infatti $m=n$ il rapporto tenderebbe a $c\neq 0$, e se $m<n$ il rapporto $\varphi(x)^{m-n}$ divergerebbe in valore assoluto, in entrambi i casi in contraddizione con il limite nullo. Si conclude quindi $m>n$. In generale, tuttavia, può accadere che $f+g$ non sia asintotica a nessuna funzione della forma $c\,\varphi(x)^m$ con $c\neq 0$: in tal caso l'unica conclusione corretta resta $f+g=o(\varphi(x)^n)$, senza poter attribuire a $f+g$ un ordine ben definito.

(b) Con $\varphi(x)=x$, $n=2$: $f(x)=x^2+x^3$ ha parte principale $x^2$ (quindi $a=1$), e $g(x)=-x^2+2x^3$ ha parte principale $-x^2$ (quindi $b=-1$). Si ha $a+b=0$. Infatti

$$f(x)+g(x)=(x^2+x^3)+(-x^2+2x^3)=3x^3,$$

che è infinitesima di ordine $3>2=n$ rispetto a $\varphi(x)=x$, con parte principale $3x^3$: in questo caso particolare l'ordine maggiore esiste davvero, confermando quanto previsto al punto (a) nel caso in cui tale ordine sia definito.
:::
:::

:::exercise{id="E6.6" chapter="6" difficulty="medio"}
## Domanda
Determinare l'ordine di infinitesimo e la parte principale, rispetto al campione $\varphi(x)=x$, della funzione

$$f(x)=\sqrt{1+x^2}-\cos x$$

per $x\to 0$.

:::hint
Sviluppa $\sqrt{1+x^2}$ con {{formula:6.5}} e $\cos x$ con {{formula:6.8}} fino all'ordine $x^4$, poi applica {{formula:6.10}}.
:::

:::solution
Usiamo gli sviluppi asintotici per $x\to 0$:

$$\sqrt{1+x^2}=1+\frac{x^2}{2}-\frac{x^4}{8}+o(x^4),$$

ottenuto da {{formula:6.5}} con esponente $1/2$ applicato a $x^2$, e

$$\cos x = 1-\frac{x^2}{2}+\frac{x^4}{24}+o(x^4)$$

da {{formula:6.8}}. Sottraendo:

$$f(x)=\left(1+\frac{x^2}{2}-\frac{x^4}{8}\right)-\left(1-\frac{x^2}{2}+\frac{x^4}{24}\right)+o(x^4)$$
$$=x^2-\frac{x^4}{8}-\frac{x^4}{24}+o(x^4)=x^2-\frac{x^4}{6}+o(x^4).$$

Il termine di grado più basso non nullo è $x^2$, quindi per {{formula:6.10}} $f(x)$ è infinitesima di ordine $2$ rispetto a $\varphi(x)=x$, con parte principale $x^2$. In formule,

$$f(x)\sim x^2 \quad (x\to 0).$$
:::
:::

:::exercise{id="E7.1" chapter="7" difficulty="facile"}
## Domanda
Calcolare $$\lim_{x \to 0} \frac{1 - \cos x}{x^2}$$ utilizzando il teorema di de l'Hôpital.

:::hint
La forma è $0/0$: si veda {{formula:7.14}}; potrebbe essere necessario applicare il teorema più di una volta.
:::

:::solution
Per $x \to 0$ sia numeratore che denominatore tendono a $0$, forma indeterminata $0/0$. Applicando {{formula:7.14}}, deriviamo numeratore e denominatore: $\lim_{x\to 0} \dfrac{\sin x}{2x}$, ancora forma $0/0$. Applicando nuovamente de l'Hôpital: $\lim_{x\to 0} \dfrac{\cos x}{2} = \dfrac{1}{2}$. Quindi il limite cercato vale $1/2$.
:::
:::

:::exercise{id="E7.2" chapter="7" difficulty="medio"}
## Domanda
Sia $f(x) = \sqrt{x}$ definita su $\lbrack 0,+\infty)$. Determinare la retta tangente al grafico di $f$ nel punto di ascissa $x=4$. Successivamente, trovare il punto di ascissa $a>0$ in cui la retta tangente a $f$ è parallela alla retta di equazione $y = \frac{x}{2}$, e scrivere anche l'equazione di tale tangente.

:::hint
Per $x>0$ si ha $f'(x) = \dfrac{1}{2\sqrt{x}}$; due rette sono parallele se hanno lo stesso coefficiente angolare.
:::

:::solution
Si ha $f(4) = 2$. Per $x>0$, $f'(x) = \dfrac{1}{2\sqrt{x}}$, quindi $f'(4) = \dfrac{1}{4}$. La retta tangente in $x=4$ è $y = 2 + \dfrac{1}{4}(x-4) = \dfrac{x}{4} + 1$. Per trovare il punto in cui la tangente è parallela a $y = \frac{x}{2}$, imponiamo $f'(a) = \dfrac{1}{2}$, cioè $\dfrac{1}{2\sqrt{a}} = \dfrac{1}{2}$, da cui $\sqrt{a} = 1$ e $a = 1$. In $a=1$ si ha $f(1) = 1$, quindi la retta tangente richiesta è $y = 1 + \dfrac{1}{2}(x-1) = \dfrac{x}{2} + \dfrac{1}{2}$.
:::
:::

:::exercise{id="E7.3" chapter="7" difficulty="medio"}
## Domanda
Studiare la derivabilità della funzione $f(x) = \sqrt[3]{x}$ nel punto $x=0$ e classificare il punto.

:::hint
Calcolare il rapporto incrementale in $0$ per determinare la derivabilità e le derivate laterali. Per classificare l'origine, studiare il segno di $f''(x)$ per $x\neq 0$.
:::

:::solution
Per $h\neq 0$, il rapporto incrementale in $0$ è

$$
\frac{f(h)-f(0)}{h} = \frac{\sqrt[3]{h}}{h} = \frac{1}{|h|^{2/3}}.
$$

Per $h\to 0^+$ e per $h\to 0^-$, il rapporto incrementale tende a $+\infty$. La derivata finita in $0$ non esiste; entrambe le derivate laterali sono infinite e hanno lo stesso segno, quindi il grafico ha tangente verticale nell'origine.

Per $x\neq 0$ si ha

$$
f'(x) = \frac{1}{3x^{2/3}}, \qquad f''(x) = -\frac{2}{9x^{5/3}}.
$$

Poiché $x^{5/3}<0$ per $x<0$ e $x^{5/3}>0$ per $x>0$, $f''(x)>0$ a sinistra di $0$ e $f''(x)<0$ a destra. La concavità cambia nell'origine, che è quindi un flesso a tangente verticale.
:::
:::

:::exercise{id="E7.4" chapter="7" difficulty="difficile"}
## Domanda
Sia $f(x) = \begin{cases} x \sin\left(\frac{1}{x}\right) & x \neq 0 \\ 0 & x = 0 \end{cases}$. Verificare che $f$ è continua in $x=0$ ma non è derivabile in tale punto, giustificando perché non si tratta né di un punto angoloso né di una cuspide.

:::hint
Per la continuità usare il teorema del confronto; per la derivabilità studiare il rapporto incrementale $\sin(1/h)$ e osservare che oscilla senza limite.
:::

:::solution
Continuità in $0$: poiché $|x\sin(1/x)| \leq |x|$ per $x \neq 0$, e $|x| \to 0$ per $x \to 0$, per il teorema del confronto $\lim_{x\to 0} f(x) = 0 = f(0)$, quindi $f$ è continua in $0$, in accordo con {{formula:5.1}}. Derivabilità in $0$: il rapporto incrementale è $\dfrac{f(h)-f(0)}{h} = \dfrac{h\sin(1/h)}{h} = \sin\left(\frac{1}{h}\right)$. Al tendere di $h \to 0$, $1/h \to \pm\infty$ e $\sin(1/h)$ oscilla indefinitamente tra $-1$ e $1$ senza avvicinarsi a nessun valore, quindi il limite non esiste (né finito né infinito). Di conseguenza $f$ non è derivabile in $0$. Non si tratta di un punto angoloso né di una cuspide, poiché queste classificazioni richiedono che le derivate laterali esistano (eventualmente infinite); qui il rapporto incrementale non ammette alcun limite, nemmeno unilaterale.
:::
:::

:::exercise{id="E7.5" chapter="7" difficulty="medio"}
## Domanda
Sia $f(x) = |x^2 - 1|$. Determinare se $f$ è derivabile nei punti $x=1$ e $x=-1$, calcolando le derivate laterali e classificando entrambi i punti.

:::hint
Si scriva $f$ esplicitamente distinguendo i casi $-1<x<1$ e $|x|>1$, tenendo conto che $x^2-1$ cambia segno in $x=\pm 1$. Poi si calcolino separatamente le derivate laterali nei due estremi.
:::

:::solution
Per $-1 < x < 1$ si ha $x^2 - 1 < 0$, quindi $f(x) = 1 - x^2$ e $f'(x) = -2x$. Per $x>1$ o $x<-1$ si ha $x^2 - 1 > 0$, quindi $f(x) = x^2 - 1$ e $f'(x) = 2x$.

Nel punto $x=1$, la derivata destra è $f'_+(1)=2(1)=2$, mentre la derivata sinistra è $f'_-(1)=-2(1)=-2$. Le derivate laterali sono finite e distinte, quindi, per {{formula:7.5}}, $x=1$ è un punto angoloso.

Nel punto $x=-1$, la derivata destra è $f'_+(-1)=-2(-1)=2$, mentre la derivata sinistra è $f'_-(-1)=2(-1)=-2$. Anche queste derivate laterali sono finite e distinte, quindi $x=-1$ è un punto angoloso.
:::
:::

:::exercise{id="E7.6" chapter="7" difficulty="difficile"}
## Domanda
(a) Applicare il teorema di Lagrange alla funzione $f(x) = \ln x$ sull'intervallo $\lbrack 1,e\rbrack $ e determinare esplicitamente il punto $c$ previsto dal teorema. (b) Usando il teorema di Lagrange applicato a $f(x) = \ln x$ su un generico intervallo $\lbrack a,b\rbrack $ con $0 < a < b$, dimostrare la disuguaglianza

$$
\frac{b-a}{b} < \ln\frac{b}{a} < \frac{b-a}{a}.
$$

:::hint
In (b), dal punto $c \in (a,b)$ fornito da {{formula:7.12}} si ricava $\frac{1}{c} = \frac{\ln b - \ln a}{b-a}$; sfruttare poi $a < c < b$ per stimare $\frac{1}{c}$.
:::

:::solution
(a) La funzione $f(x) = \ln x$ è continua su $\lbrack 1,e\rbrack $ e derivabile su $(1,e)$, con $f'(x) = 1/x$. Per il {{formula:7.12}} esiste $c \in (1,e)$ tale che $f'(c) = \dfrac{f(e)-f(1)}{e-1} = \dfrac{1-0}{e-1} = \dfrac{1}{e-1}$. Poiché $f'(c) = 1/c$, si ottiene $c = e-1$, che è effettivamente in $(1,e)$ dato che $e \approx 2{,}718$. 

(b) Per $0<a<b$, $f(x)=\ln x$ è continua su $\lbrack a,b\rbrack $ e derivabile su $(a,b)$. Per {{formula:7.12}} esiste $c \in (a,b)$ con $\dfrac{1}{c} = \dfrac{\ln b - \ln a}{b-a} = \dfrac{\ln(b/a)}{b-a}$. Poiché $a < c < b$ e la funzione $t \mapsto 1/t$ è decrescente per $t>0$, si ha $\dfrac{1}{b} < \dfrac{1}{c} < \dfrac{1}{a}$, cioè $\dfrac{1}{b} < \dfrac{\ln(b/a)}{b-a} < \dfrac{1}{a}$. Moltiplicando per $b-a > 0$ si ottiene $\dfrac{b-a}{b} < \ln\dfrac{b}{a} < \dfrac{b-a}{a}$, come richiesto.
:::
:::

:::exercise{id="E7.7" chapter="7" difficulty="medio"}
## Domanda
Calcolare $$\lim_{x \to 0^+} x \ln x$$ utilizzando il teorema di de l'Hôpital.

:::hint
Riscrivere il prodotto come quoziente $\frac{\ln x}{1/x}$ per ottenere una forma $-\infty/\infty$ a cui applicare {{formula:7.14}}.
:::

:::solution
Il limite si presenta nella forma indeterminata $0 \cdot (-\infty)$. Riscriviamo $x\ln x = \dfrac{\ln x}{1/x}$, che per $x \to 0^+$ ha forma $-\infty/\infty$. Applicando {{formula:7.14}}, deriviamo numeratore e denominatore: $\dfrac{d}{dx}\ln x = \dfrac{1}{x}$, $\dfrac{d}{dx}\dfrac{1}{x} = -\dfrac{1}{x^2}$. Il limite diventa $\lim_{x\to 0^+} \dfrac{1/x}{-1/x^2} = \lim_{x\to 0^+} (-x) = 0$.
:::
:::

:::exercise{id="E7.8" chapter="7" difficulty="difficile"}
## Domanda
Calcolare $$\lim_{x \to 0} \left( \frac{1}{x} - \frac{1}{\tan x} \right)$$ utilizzando il teorema di de l'Hôpital.

:::hint
Ridurre allo stesso denominatore ottenendo una forma $0/0$, poi applicare {{formula:7.14}} eventualmente più di una volta.
:::

:::solution
Scriviamo $\dfrac{1}{\tan x} = \dfrac{\cos x}{\sin x}$, quindi $\dfrac{1}{x} - \dfrac{1}{\tan x} = \dfrac{1}{x} - \dfrac{\cos x}{\sin x} = \dfrac{\sin x - x\cos x}{x \sin x}$. Per $x \to 0$ sia numeratore sia denominatore tendono a $0$ (forma $0/0$). Applicando {{formula:7.14}}: la derivata del numeratore è $\cos x - (\cos x - x\sin x) = x\sin x$; la derivata del denominatore è $\sin x + x\cos x$. Il limite diventa $\lim_{x\to 0} \dfrac{x\sin x}{\sin x + x\cos x}$, ancora forma $0/0$. Applicando nuovamente de l'Hôpital: la derivata del numeratore è $\sin x + x\cos x$; la derivata del denominatore è $\cos x + \cos x - x\sin x = 2\cos x - x\sin x$. Il limite diventa $\lim_{x\to 0} \dfrac{\sin x + x\cos x}{2\cos x - x\sin x} = \dfrac{0+0}{2-0} = 0$.
:::
:::

:::exercise{id="E7.9" chapter="7" difficulty="difficile"}
## Domanda
Sia $f(x) = e^x$. Determinare per quale valore di $a \in \mathbb{R}$ la retta tangente al grafico di $f$ nel punto di ascissa $x=a$ passa per l'origine degli assi. Scrivere l'equazione di tale retta tangente e il punto di tangenza.

:::hint
Scrivere la retta tangente generica in $x=a$ tramite {{formula:7.2}} e imporre il passaggio per $(0,0)$.
:::

:::solution
La retta tangente al grafico di $f(x)=e^x$ nel punto di ascissa $a$ è, per {{formula:7.2}}, $y = f(a) + f'(a)(x-a) = e^a + e^a(x-a) = e^a(x - a + 1)$, poiché $f'(x) = e^x$. Imponendo il passaggio per l'origine, cioè $y=0$ quando $x=0$, si ottiene $0 = e^a(1-a)$. Poiché $e^a \neq 0$ per ogni $a$, deve essere $1 - a = 0$, cioè $a = 1$. Il punto di tangenza è $(1, e)$ e la retta tangente diventa $y = e(x - 1 + 1) = ex$, che effettivamente passa per l'origine.
:::
:::

:::exercise{id="E7.10" chapter="7" difficulty="medio"}
## Domanda
Sia $f(x) = \begin{cases} x^2 \sin\left(\frac{1}{x}\right) & x \neq 0 \\ 0 & x = 0 \end{cases}$. Dimostrare, usando la definizione di derivata, che $f$ è derivabile in $x=0$ e calcolare $f'(0)$.

:::hint
Si maggiori il rapporto incrementale usando $|\sin(1/h)| \leq 1$ e si applichi il teorema del confronto.
:::

:::solution
Per definizione, $f'(0) = \lim_{h \to 0} \dfrac{f(h) - f(0)}{h} = \lim_{h \to 0} \dfrac{h^2 \sin(1/h)}{h} = \lim_{h \to 0} h \sin\left(\frac{1}{h}\right)$. Poiché $\left|h \sin\left(\frac{1}{h}\right)\right| \leq |h|$ per ogni $h \neq 0$, e $|h| \to 0$ per $h \to 0$, per il teorema del confronto si ha $\lim_{h \to 0} h \sin(1/h) = 0$. Dunque $f$ è derivabile in $x=0$ con $f'(0) = 0$. Si osservi che per $x \neq 0$, $f'(x) = 2x\sin(1/x) - \cos(1/x)$, che non ammette limite per $x \to 0$: la derivata esiste in $0$ ma non è continua in quel punto.
:::
:::

:::exercise{id="E7.11" chapter="7" difficulty="medio"}
## Domanda
Sia $f(x) = x^2 - 4x + 3$ sull'intervallo $\lbrack 1,3\rbrack $. Verificare che $f$ soddisfa le ipotesi del teorema di Rolle e determinare esplicitamente il punto $c \in (1,3)$ previsto dal teorema.

:::hint
Verificare continuità, derivabilità e che $f(1)=f(3)$, poi risolvere $f'(c)=0$ come in {{formula:7.11}}.
:::

:::solution
La funzione $f$ è un polinomio, dunque continua su $\lbrack 1,3\rbrack $ e derivabile su $(1,3)$. Si ha $f(1) = 1 - 4 + 3 = 0$ e $f(3) = 9 - 12 + 3 = 0$, quindi $f(1) = f(3)$. Sono soddisfatte tutte le ipotesi del {{formula:7.11}}, che garantisce l'esistenza di almeno un punto $c \in (1,3)$ con $f'(c) = 0$. Calcolando $f'(x) = 2x - 4$ e risolvendo $2c - 4 = 0$ si ottiene $c = 2$, che effettivamente appartiene a $(1,3)$.
:::
:::

:::exercise{id="E7.12" chapter="7" difficulty="facile"}
## Domanda
Studiare la derivabilità della funzione $f(x) = |x-2|$ nel punto $x=2$, calcolando le derivate destra e sinistra e classificando il punto.

:::hint
Si scriva $f$ come funzione definita a tratti vicino a $x=2$ e si calcolino separatamente il limite destro e sinistro del rapporto incrementale.
:::

:::solution
Per $h$ vicino a $0$ si ha $f(2+h) - f(2) = |h| - 0 = |h|$. Il rapporto incrementale è $\dfrac{|h|}{h}$. Per $h \to 0^+$, $\dfrac{|h|}{h} = \dfrac{h}{h} = 1$, quindi $f'_+(2) = 1$. Per $h \to 0^-$, $\dfrac{|h|}{h} = \dfrac{-h}{h} = -1$, quindi $f'_-(2) = -1$. Le due derivate laterali esistono, sono finite ma distinte: per {{formula:7.5}}, $x=2$ è un punto angoloso per $f$.
:::
:::

:::exercise{id="E7.13" chapter="7" difficulty="facile"}
## Domanda
Enunciare il teorema di Fermat. Successivamente, utilizzarlo per determinare tutti i punti stazionari della funzione $f(x) = x^4 - 4x^2 + 3$ su $\mathbb{R}$.

:::hint
Un punto stazionario è un punto in cui $f'(x)=0$, si veda {{formula:7.9}}; calcolare $f'$ e fattorizzare.
:::

:::solution
Il {{formula:7.10}} afferma che se $f$ è derivabile in un punto di massimo o minimo relativo interno al dominio, allora la derivata in quel punto è nulla. Calcoliamo $f'(x) = 4x^3 - 8x = 4x(x^2 - 2)$. Risolvendo $f'(x) = 0$ si ottiene $x = 0$ oppure $x^2 = 2$, cioè $x = \pm\sqrt{2}$. I punti stazionari sono quindi $x=0$, $x=\sqrt{2}$, $x=-\sqrt{2}$, con $f(0) = 3$ e $f(\pm\sqrt{2}) = 4 - 8 + 3 = -1$.
:::
:::

:::exercise{id="E7.14" chapter="7" difficulty="facile"}
## Domanda
Studiare la derivabilità della funzione $f(x) = x^{2/3}$ nel punto $x=0$ e classificare il punto, utilizzando il comportamento della derivata nell'intorno di $0$.

:::hint
Per $x\neq 0$ si ha $f'(x) = \frac{2}{3}x^{-1/3}$; si studi il segno e il limite di questa espressione per $x \to 0^+$ e $x \to 0^-$, quindi si calcolino direttamente i rapporti incrementali laterali in $0$.
:::

:::solution
Per $x \neq 0$, $f'(x) = \dfrac{2}{3} x^{-1/3} = \dfrac{2}{3\sqrt[3]{x}}$. Per $x \to 0^+$, $\sqrt[3]{x} \to 0^+$, quindi $f'(x) \to +\infty$. Per $x \to 0^-$, $\sqrt[3]{x} \to 0^-$, quindi $f'(x) \to -\infty$. Per classificare il punto, calcoliamo i rapporti incrementali laterali: poiché $f(0)=0$, per $x\neq 0$ si ha $\frac{f(x)-f(0)}{x}=x^{-1/3}$. Pertanto, per $x\to 0^+$ il rapporto tende a $+\infty$, mentre per $x\to 0^-$ tende a $-\infty$. Poiché i rapporti incrementali laterali divergono a infinito con segni opposti, $x=0$ è un punto di cuspide.
:::
:::

:::exercise{id="E7.15" chapter="7" difficulty="facile"}
## Domanda
Sia $f(x) = x^2 - 3x + 1$. Calcolare $f'(2)$ utilizzando la definizione di derivata come limite del rapporto incrementale, e scrivere l'equazione della retta tangente al grafico di $f$ nel punto di ascissa $x=2$.

:::hint
Applicare {{formula:7.1}} calcolando $f(2+h)$ e semplificando il rapporto incrementale prima di passare al limite.
:::

:::solution
Per definizione, $f'(2) = \lim_{h\to 0} \dfrac{f(2+h)-f(2)}{h}$. Si ha $f(2) = 4 - 6 + 1 = -1$ e $f(2+h) = (2+h)^2 - 3(2+h) + 1 = 4 + 4h + h^2 - 6 - 3h + 1 = h^2 + h - 1$. Quindi $f(2+h) - f(2) = h^2 + h$, da cui $\dfrac{f(2+h)-f(2)}{h} = h + 1$. Passando al limite per $h \to 0$ si ottiene $f'(2) = 1$. La retta tangente in $x=2$ ha equazione, per {{formula:7.2}}, $y = f(2) + f'(2)(x-2) = -1 + (x-2) = x - 3$.
:::
:::

:::exercise{id="E8.1" chapter="8" difficulty="medio"}
## Domanda
Determina il polinomio di Maclaurin di ordine $4$ di $h(x)=\log(1+x)-\sin x$ e calcola $\displaystyle\lim_{x\to 0}\frac{h(x)+\frac{x^2}{2}-\frac{x^3}{2}}{x^4}$.

:::hint
Sviluppa separatamente $\log(1+x)$ e $\sin x$ fino all'ordine necessario, poi raccogli i termini dello stesso grado.
:::

:::solution
Per $x\to 0$ si ha $\log(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+o(x^4)$ e $\sin x=x-\frac{x^3}{6}+o(x^4)$. Sottraendo, $h(x)=-\frac{x^2}{2}+\frac{x^3}{2}-\frac{x^4}{4}+o(x^4)$. Questo è il polinomio di Maclaurin richiesto, accompagnato dal resto. Nel numeratore del limite i termini di secondo e terzo grado si cancellano; rimane $-\frac{x^4}{4}+o(x^4)$. Dividendo per $x^4$, il limite vale $-\frac14$.
:::
:::

:::exercise{id="E8.2" chapter="8" difficulty="difficile"}
## Domanda
Studia i punti stazionari di $f(x)=x^5-5x^3$. Classifica ciascuno di essi, compresi quelli che non sono estremi, e determina gli intervalli di monotonia e gli eventuali estremi assoluti.

:::hint
Nello studio del segno di $f'(x)$, lo zero in $x=0$ ha molteplicità pari: verifica se il segno cambia. Per classificare ulteriormente quel punto, esamina la concavità nei suoi dintorni.
:::

:::solution
Si ha $f'(x)=5x^4-15x^2=5x^2(x^2-3)$, quindi i punti stazionari sono $-\sqrt3$, $0$ e $\sqrt3$. La derivata è positiva per $x<-\sqrt3$ e per $x>\sqrt3$, negativa per $-\sqrt3<x<0$ e per $0<x<\sqrt3$. Ne segue che $f$ cresce in $(-\infty,-\sqrt3)$ e $(\sqrt3,+\infty)$, mentre decresce in $(-\sqrt3,\sqrt3)$. In $x=-\sqrt3$ si ha un massimo locale, con valore $f(-\sqrt3)=6\sqrt3$; in $x=\sqrt3$ si ha un minimo locale, con valore $f(\sqrt3)=-6\sqrt3$. In $x=0$ il segno di $f'$ non cambia, quindi non c'è un estremo. Inoltre $f''(x)=20x^3-30x=10x(2x^2-3)$: vicino a $0$ è positiva a sinistra e negativa a destra. Pertanto $(0,0)$ è un flesso a tangente orizzontale. Infine $f(x)\to-\infty$ per $x\to-\infty$ e $f(x)\to+\infty$ per $x\to+\infty$, perciò non esistono estremi assoluti.
:::
:::

:::exercise{id="E8.3" chapter="8" difficulty="difficile"}
## Domanda
Per $f(x)=x^2e^{-x}$, determina gli intervalli di monotonia, classifica i punti stazionari e stabilisci quali estremi sono assoluti su $\mathbb{R}$.

:::hint
Nella derivata il fattore esponenziale è sempre positivo. Confronta i valori nei punti critici con i limiti ai due estremi della retta.
:::

:::solution
La derivata è $f'(x)=2xe^{-x}-x^2e^{-x}=e^{-x}x(2-x)$. Poiché $e^{-x}>0$, il segno dipende da $x(2-x)$: è negativo per $x<0$, positivo per $0<x<2$ e negativo per $x>2$. Dunque $f$ decresce in $(-\infty,0)$, cresce in $(0,2)$ e decresce in $(2,+\infty)$. In $x=0$ ha un minimo locale di valore $0$; essendo $x^2e^{-x}\geq0$, è anche un minimo assoluto. In $x=2$ ha un massimo locale di valore $4e^{-2}$. Per $x\to-\infty$, ponendo $t=-x$, si ha $f(x)=t^2e^t\to+\infty$; quindi non esiste un massimo assoluto. Per $x\to+\infty$, invece, $f(x)\to0$.
:::
:::

:::exercise{id="E8.4" chapter="8" difficulty="medio"}
## Domanda
Studia i punti stazionari e gli intervalli di monotonia di $f(x)=x^4-4x^2$. Distingui gli estremi locali da quelli assoluti.

:::hint
Fattorizza $f'(x)$; per gli estremi assoluti considera anche il comportamento per $|x|\to+\infty$.
:::

:::solution
Si ha $f'(x)=4x^3-8x=4x(x^2-2)$, che si annulla in $-\sqrt2$, $0$ e $\sqrt2$. Il segno di $f'$ è negativo in $(-\infty,-\sqrt2)$, positivo in $(-\sqrt2,0)$, negativo in $(0,\sqrt2)$ e positivo in $(\sqrt2,+\infty)$. Pertanto $f$ decresce, cresce, decresce e cresce nei rispettivi intervalli. In $x=\pm\sqrt2$ si trovano due minimi locali, entrambi di valore $f(\pm\sqrt2)=4-8=-4$; in $x=0$ si trova un massimo locale di valore $0$. Inoltre $f(x)=(x^2-2)^2-4\geq-4$, dunque i due minimi sono assoluti. Poiché $f(x)\to+\infty$ per $|x|\to+\infty$, non esiste un massimo assoluto.
:::
:::

:::exercise{id="E8.5" chapter="8" difficulty="difficile"}
## Domanda
Calcola $\displaystyle\lim_{x\to 0}\frac{e^{\sin x}-1-x-\frac{x^2}{2}}{x^4}$. Giustifica perché nel numeratore non compare un termine di terzo grado.

:::hint
Poni $u=\sin x$ nello sviluppo di $e^u$ e conserva tutti i contributi fino al quarto grado in $x$.
:::

:::solution
Gli sviluppi necessari sono $\sin x=x-\frac{x^3}{6}+o(x^4)$ ed $e^u=1+u+\frac{u^2}{2}+\frac{u^3}{6}+\frac{u^4}{24}+o(u^4)$. Poiché $u=\sin x$ è equivalente a $x$, il resto $o(u^4)$ è anche $o(x^4)$. Inoltre $u^2=x^2-\frac{x^4}{3}+o(x^4)$, $u^3=x^3+o(x^4)$ e $u^4=x^4+o(x^4)$. Sostituendo, $e^{\sin x}=1+x+\frac{x^2}{2}+\left(-\frac16+\frac16\right)x^3+\left(-\frac16+\frac1{24}\right)x^4+o(x^4)=1+x+\frac{x^2}{2}-\frac{x^4}{8}+o(x^4)$. I due contributi di terzo grado si annullano. Dopo la sottrazione e la divisione per $x^4$, il limite è $-\frac18$.
:::
:::

:::exercise{id="E8.6" chapter="8" difficulty="facile"}
## Domanda
Per $f(x)=x^3-3x$, determina tutti i punti stazionari, classificali e stabilisci se sono estremi assoluti su $\mathbb{R}$.

:::hint
Trova gli zeri di $f'(x)$ e studia il segno della derivata nei tre intervalli che essi individuano.
:::

:::solution
La derivata è $f'(x)=3x^2-3=3(x-1)(x+1)$, quindi i punti stazionari hanno ascissa $-1$ e $1$. La derivata è positiva per $x<-1$ e per $x>1$, negativa per $-1<x<1$. La funzione cresce, poi decresce, poi cresce: $x=-1$ è un punto di massimo locale e $f(-1)=2$; $x=1$ è un punto di minimo locale e $f(1)=-2$. Poiché $f(x)\to-\infty$ per $x\to-\infty$ e $f(x)\to+\infty$ per $x\to+\infty$, nessuno dei due è un estremo assoluto.
:::
:::

:::exercise{id="E8.7" chapter="8" difficulty="medio"}
## Domanda
Studia la monotonia di $f(x)=|x^2-1|$ su $\mathbb{R}$. Individua i punti stazionari e quelli di non derivabilità, poi classifica tutti gli estremi locali e assoluti.

:::hint
Scrivi $f$ senza valore assoluto nei tratti individuati da $-1$ e $1$. Controlla anche le derivate laterali in tali punti.
:::

:::solution
Per $|x|<1$ si ha $f(x)=1-x^2$ e $f'(x)=-2x$; per $|x|>1$ si ha $f(x)=x^2-1$ e $f'(x)=2x$. La funzione decresce in $(-\infty,-1)$, cresce in $(-1,0)$, decresce in $(0,1)$ e cresce in $(1,+\infty)$. L'unico punto stazionario è $x=0$, dove $f(0)=1$ e si ha un massimo locale. In $x=-1$ la derivata sinistra vale $-2$ e quella destra vale $2$; in $x=1$ la derivata sinistra vale $-2$ e quella destra vale $2$. Entrambi sono quindi punti angolosi di minimo locale. Poiché $f(x)\geq0$ e $f(-1)=f(1)=0$, i due minimi sono assoluti. Infine $f(x)\to+\infty$ per $|x|\to+\infty$, quindi non esiste un massimo assoluto.
:::
:::

:::exercise{id="E8.8" chapter="8" difficulty="facile"}
## Domanda
Determina il polinomio di Maclaurin di ordine $3$ di $e^x$ e calcola $\displaystyle\lim_{x\to 0}\frac{e^x-1-x-\frac{x^2}{2}}{x^3}$.

:::hint
Calcola le derivate di $e^x$ in $0$ e usa la formula di Taylor con resto di Peano.
:::

:::solution
Tutte le derivate di $e^x$ valgono $e^x$ e quindi, in $0$, valgono $1$. Il polinomio richiesto è $P_3(x)=1+x+\frac{x^2}{2}+\frac{x^3}{6}$. Per la formula di Taylor, $e^x=P_3(x)+o(x^3)$ per $x\to 0$. Sottraendo i termini fino al secondo grado e dividendo per $x^3$ si ottiene $\frac{e^x-1-x-\frac{x^2}{2}}{x^3}=\frac16+o(1)$. Il limite vale dunque $\frac16$.
:::
:::

:::exercise{id="E8.9" chapter="8" difficulty="medio"}
## Domanda
Per $f(x)=x+\frac1x$, determina dominio, intervalli di monotonia ed estremi locali. Stabilisci se esistono estremi assoluti sull'intero dominio.

:::hint
Studia il segno di $f'(x)$ separatamente sui due intervalli del dominio.
:::

:::solution
Il dominio è $\mathbb{R}\setminus\{0\}$. La derivata è $f'(x)=1-\frac1{x^2}=\frac{(x-1)(x+1)}{x^2}$: è positiva se $x<-1$ o $x>1$ e negativa se $-1<x<0$ o $0<x<1$. La funzione cresce in $(-\infty,-1)$ e $(1,+\infty)$, e decresce in $(-1,0)$ e $(0,1)$. In $x=-1$ passa da crescente a decrescente e ha un massimo locale di valore $f(-1)=-2$; in $x=1$ passa da decrescente a crescente e ha un minimo locale di valore $f(1)=2$. Sull'intero dominio non ci sono estremi assoluti: $f(x)\to-\infty$ per $x\to0^-$ e $f(x)\to+\infty$ per $x\to0^+$.
:::
:::

:::exercise{id="E9.1" chapter="9" difficulty="facile"}
## Domanda
Sia $G(x) = \displaystyle\int_0^{x^2} e^{-t^2}\,dt$. Calcolare $G'(x)$ per ogni $x\in\mathbb{R}$.

:::hint
Applica il {{formula:9.14}} alla funzione integrale con estremo superiore $x^2$, usando la regola della derivata di una funzione composta.
:::

:::solution
La funzione $h(x) = x^2$ è derivabile su $\mathbb{R}$ con $h'(x)=2x$, e la funzione integrale $H(u) = \int_0^u e^{-t^2}\,dt$ è derivabile per il teorema fondamentale del calcolo integrale, con $H'(u) = e^{-u^2}$ (l'integranda $e^{-t^2}$ è continua su $\mathbb{R}$).

Siccome $G(x) = H(h(x))$, per la regola di derivazione delle funzioni composte,

$$G'(x) = H'(h(x))\cdot h'(x) = e^{-(x^2)^2}\cdot 2x = 2x\,e^{-x^4}.$$
:::
:::

:::exercise{id="E9.2" chapter="9" difficulty="facile"}
## Domanda
Calcolare l'integrale indefinito

$$\int \left(2x^3 - \frac{1}{\sqrt{x}} + e^{2x}\right) dx,$$

specificando l'intervallo in cui il risultato è valido.

:::hint
Applica la {{formula:9.3}} e usa le primitive elementari di $x^n$, $x^{-1/2}$ e $e^{kx}$.
:::

:::solution
Per la linearità dell'integrale indefinito possiamo integrare separatamente i tre termini.

Per il primo termine, $\int 2x^3\,dx = 2\cdot\frac{x^4}{4} = \frac{x^4}{2}$.

Per il secondo termine, scriviamo $\frac{1}{\sqrt{x}} = x^{-1/2}$, quindi $\int x^{-1/2}\,dx = \frac{x^{1/2}}{1/2} = 2\sqrt{x}$, da cui $\int -\frac{1}{\sqrt{x}}\,dx = -2\sqrt{x}$.

Per il terzo termine, $\int e^{2x}\,dx = \frac{e^{2x}}{2}$.

Il termine $x^{-1/2}$ richiede $x>0$, quindi il risultato è valido per $x\in(0,+\infty)$.

Sommando i tre contributi e aggiungendo la costante arbitraria di integrazione, si ottiene

$$\int \left(2x^3 - \frac{1}{\sqrt{x}} + e^{2x}\right) dx = \frac{x^4}{2} - 2\sqrt{x} + \frac{e^{2x}}{2} + C, \qquad x\in(0,+\infty),\ C\in\mathbb{R}.$$
:::
:::

:::exercise{id="E9.3" chapter="9" difficulty="medio"}
## Domanda
Calcolare, per $x>0$, l'integrale indefinito

$$\int x\ln x\,dx.$$

:::hint
Applica la {{formula:9.5}} scegliendo $u=\ln x$ e $dv = x\,dx$.
:::

:::solution
Poniamo $u=\ln x$ e $dv=x\,dx$. Allora $du=\frac{1}{x}\,dx$ e $v=\frac{x^2}{2}$.

Per la formula di integrazione per parti,

$$\int x\ln x\,dx = \frac{x^2}{2}\ln x - \int \frac{x^2}{2}\cdot\frac{1}{x}\,dx = \frac{x^2}{2}\ln x - \int \frac{x}{2}\,dx.$$

L'ultimo integrale vale $\frac{x^2}{4}$, quindi

$$\int x\ln x\,dx = \frac{x^2}{2}\ln x - \frac{x^2}{4} + c.$$

Il risultato è valido per $x>0$, dominio in cui $\ln x$ è definito.
:::
:::

:::exercise{id="E9.4" chapter="9" difficulty="difficile"}
## Domanda
Calcolare l'integrale indefinito

$$\int \frac{x^3+1}{x^2-1}\,dx,$$

indicando il dominio in cui la primitiva trovata è valida.

:::hint
La frazione è impropria: fattorizza numeratore e denominatore e semplifica prima di integrare, usando la {{formula:9.6}}.
:::

:::solution
Fattorizziamo numeratore e denominatore: $x^3+1=(x+1)(x^2-x+1)$ e $x^2-1=(x-1)(x+1)$.

Per $x\ne -1$ possiamo semplificare il fattore comune $(x+1)$, ottenendo

$$\frac{x^3+1}{x^2-1} = \frac{x^2-x+1}{x-1}.$$

Questa frazione è ancora impropria (grado numeratore $=$ grado denominatore $+1$); eseguendo la divisione polinomiale, $x^2-x+1 = (x-1)\cdot x + 1$, quindi

$$\frac{x^2-x+1}{x-1} = x + \frac{1}{x-1}.$$

In definitiva, per $x\ne \pm 1$,

$$\frac{x^3+1}{x^2-1} = x + \frac{1}{x-1}.$$

Integrando termine a termine,

$$\int\left(x+\frac{1}{x-1}\right)dx = \frac{x^2}{2} + \ln|x-1| + c.$$

La primitiva è valida separatamente su ciascuno degli intervalli $(-\infty,-1)$, $(-1,1)$, $(1,+\infty)$, dove la funzione originale è definita e continua.
:::
:::

:::exercise{id="E9.5" chapter="9" difficulty="difficile"}
## Domanda
Determinare tutte le funzioni $f:\mathbb{R}\to\mathbb{R}$ continue tali che

$$f(x) = 2 + \int_0^x f(t)\,dt \qquad \text{per ogni } x\in\mathbb{R}.$$

:::hint
Deriva entrambi i membri usando il {{formula:9.14}} per trasformare l'equazione integrale in un {{formula:11.2}}, poi risolvi l'equazione lineare del primo ordine ottenuta.
:::

:::solution
Il membro di destra è derivabile perché $f$ è continua: per il teorema fondamentale del calcolo integrale, $\frac{d}{dx}\int_0^x f(t)\,dt = f(x)$. Derivando entrambi i membri dell'equazione data si ottiene

$$f'(x) = f(x),$$

valida per ogni $x\in\mathbb{R}$. Valutando l'equazione originale in $x=0$ si ottiene la condizione iniziale

$$f(0) = 2 + \int_0^0 f(t)\,dt = 2.$$

Siamo quindi di fronte al problema di Cauchy $f'=f$, $f(0)=2$, equazione lineare omogenea del primo ordine la cui soluzione generale è $f(x)=k e^x$; imponendo $f(0)=2$ si trova $k=2$, dunque

$$f(x) = 2e^x.$$

Verifichiamo la soluzione: $\int_0^x 2e^t\,dt = 2e^x-2$, quindi $2+\int_0^x f(t)\,dt = 2+2e^x-2 = 2e^x = f(x)$, come richiesto.
:::
:::

:::exercise{id="E9.6" chapter="9" difficulty="medio"}
## Domanda
Sia

$$f(x) = \begin{cases} x^2 & \text{se } 0\le x\le 1,\\ 2-x & \text{se } 1< x\le 2. \end{cases}$$

a) Verificare che $f$ è continua su $\lbrack 0,2\rbrack $.

b) Calcolare $\displaystyle\int_0^2 f(x)\,dx$.

c) Stabilire se esiste $c\in\lbrack 0,2\rbrack $ tale che $f(c)$ coincide con la media integrale di $f$ su $\lbrack 0,2\rbrack $, e in caso affermativo determinarne tutti i valori.

:::hint
Per la continuità in $x=1$ confronta i due limiti laterali con il valore della funzione; per il punto c) usa il {{formula:9.12}}. Risolvi l’equazione $f(c)=\frac{5}{12}$ in entrambi i rami e verifica che le soluzioni appartengano ai rispettivi intervalli.
:::

:::solution
a) Per $x\in\lbrack 0,1\rbrack $, $\lim_{x\to 1^-} f(x) = 1^2 = 1$ e $f(1)=1$. Per $x\in(1,2\rbrack $, $\lim_{x\to 1^+} f(x) = 2-1 = 1$. I due limiti laterali coincidono con $f(1)=1$, quindi $f$ è continua in $x=1$; sui due rami è un polinomio, quindi continua. Dunque $f$ è continua su tutto $\lbrack 0,2\rbrack $.

b) Calcoliamo separatamente i due pezzi:

$$\int_0^1 x^2\,dx = \left\lbrack \frac{x^3}{3}\right\rbrack _0^1 = \frac{1}{3},$$

$$\int_1^2 (2-x)\,dx = \left\lbrack 2x-\frac{x^2}{2}\right\rbrack _1^2 = (4-2)-\left(2-\frac12\right) = 2 - \frac32 = \frac12.$$

Quindi $\displaystyle\int_0^2 f(x)\,dx = \frac13+\frac12 = \frac56$.

c) La media integrale è $\frac{1}{2-0}\int_0^2 f(x)\,dx = \frac{1}{2}\cdot\frac56 = \frac{5}{12}$. Poiché $f$ è continua su $\lbrack 0,2\rbrack $, per il teorema della media integrale esiste $c\in\lbrack 0,2\rbrack $ con $f(c)=\frac{5}{12}$. Nel primo ramo, $c^2=\frac{5}{12}$ con $c\in\lbrack 0,1\rbrack $ dà $c=\sqrt{\frac{5}{12}}$, che appartiene a $\lbrack 0,1\rbrack $. Nel secondo ramo, $2-c=\frac{5}{12}$ con $c\in(1,2\rbrack $ dà $c=\frac{19}{12}$, che appartiene a $(1,2\rbrack $. I valori cercati sono quindi $c=\sqrt{\frac{5}{12}}$ e $c=\frac{19}{12}$. La soluzione è coerente con la continuità, l’integrale e la media integrale calcolati sopra.
:::
:::

:::exercise{id="E9.7" chapter="9" difficulty="medio"}
## Domanda
Sia $F(x) = \displaystyle\int_0^x \frac{t}{1+t^2}\,dt$, definita per $x\in\mathbb{R}$. Determinare gli intervalli di monotonia di $F$, il suo punto di minimo assoluto, e scrivere l'espressione esplicita di $F(x)$.

:::hint
Usa il {{formula:9.14}} per calcolare $F'(x)$ e applica il {{formula:7.13}}; per l'espressione esplicita integra per sostituzione.
:::

:::solution
L'integranda $\frac{t}{1+t^2}$ è continua su $\mathbb{R}$, quindi per il teorema fondamentale del calcolo integrale $F$ è derivabile con

$$F'(x) = \frac{x}{1+x^2}.$$

Poiché $1+x^2>0$ per ogni $x$, il segno di $F'(x)$ coincide con il segno di $x$: $F'(x)<0$ per $x<0$, $F'(x)=0$ in $x=0$, $F'(x)>0$ per $x>0$. Per il test di monotonia, $F$ è strettamente decrescente su $(-\infty,0)$ e strettamente crescente su $(0,+\infty)$, dunque $x=0$ è un punto di minimo assoluto, con $F(0)=0$.

Per l'espressione esplicita, con la sostituzione $u=1+t^2$, $du=2t\,dt$,

$$F(x) = \int_0^x \frac{t}{1+t^2}\,dt = \left\lbrack \frac12\ln(1+t^2)\right\rbrack _0^x = \frac12\ln(1+x^2).$$

Questa formula confirma il comportamento trovato: $\frac12\ln(1+x^2)\ge 0$ con uguaglianza solo in $x=0$.
:::
:::

:::exercise{id="E9.8" chapter="9" difficulty="facile"}
## Domanda
Sia $f(x)=x^2+1$. Verificare che $f$ è integrabile su $\lbrack 0,2\rbrack $ e calcolare $\displaystyle\int_0^2 f(x)\,dx$.

:::hint
Una funzione continua su un intervallo chiuso e limitato è integrabile per il {{formula:9.10}}; per il calcolo usa una primitiva di $f$.
:::

:::solution
La funzione $f(x)=x^2+1$ è un polinomio, quindi continua su $\mathbb{R}$ e in particolare su $\lbrack 0,2\rbrack $. Per il criterio di integrabilità, ogni funzione continua su un intervallo chiuso e limitato è integrabile secondo Riemann, dunque $f$ è integrabile su $\lbrack 0,2\rbrack $.

Una primitiva di $f$ è $F(x)=\frac{x^3}{3}+x$. Per la formula di Torricelli-Barrow,

$$\int_0^2 f(x)\,dx = F(2)-F(0) = \left(\frac{8}{3}+2\right) - 0 = \frac{8}{3}+\frac{6}{3} = \frac{14}{3}.$$
:::
:::

:::exercise{id="E9.9" chapter="9" difficulty="difficile"}
## Domanda
Calcolare $\displaystyle\int_{-2}^{2} |x^3-x|\,dx$.

:::hint
Studia il segno di $x^3-x=x(x-1)(x+1)$ sui sottointervalli determinati dagli zeri, poi usa l'additività dell'integrale sugli intervalli e la {{formula:9.11}}.
:::

:::solution
La funzione $g(x)=x^3-x=x(x-1)(x+1)$ si annulla in $x=-1,0,1$. Studiando il segno: $g(x)<0$ su $(-2,-1)$, $g(x)>0$ su $(-1,0)$, $g(x)<0$ su $(0,1)$, $g(x)>0$ su $(1,2)$.

Quindi

$$|x^3-x| = \begin{cases} x-x^3 & x\in\lbrack -2,-1\rbrack \cup\lbrack 0,1\rbrack ,\\ x^3-x & x\in\lbrack -1,0\rbrack \cup\lbrack 1,2\rbrack . \end{cases}$$

Notiamo inoltre che $g$ è dispari, dunque $|g|$ è pari, e quindi $\int_{-2}^2 |g(x)|\,dx = 2\int_0^2 |g(x)|\,dx$.

Calcoliamo su $\lbrack 0,2\rbrack $:

$$\int_0^1 (x-x^3)\,dx = \left\lbrack \frac{x^2}{2}-\frac{x^4}{4}\right\rbrack _0^1 = \frac12-\frac14 = \frac14,$$

$$\int_1^2 (x^3-x)\,dx = \left\lbrack \frac{x^4}{4}-\frac{x^2}{2}\right\rbrack _1^2 = \left(4-2\right)-\left(\frac14-\frac12\right) = 2-\left(-\frac14\right) = \frac94.$$

Quindi $\int_0^2 |g(x)|\,dx = \frac14+\frac94 = \frac{10}{4} = \frac52$.

Per la simmetria pari,

$$\int_{-2}^2 |x^3-x|\,dx = 2\cdot\frac52 = 5.$$
:::
:::

:::exercise{id="E10.1" chapter="10" difficulty="facile"}
## Domanda
Calcolare l’integrale improprio di prima specie $\int_1^{+\infty}\frac{2x+1}{(x^2+x)^2}\,dx$.

:::hint
Riconoscere la derivata del denominatore interno e calcolare prima l’integrale con estremo superiore finito.
:::

:::solution
Per $R>1$, la funzione $x^2+x$ ha derivata $2x+1$. Quindi

$$
\int_1^R\frac{2x+1}{(x^2+x)^2}\,dx=\left[-\frac{1}{x^2+x}\right]_1^R=\frac12-\frac{1}{R^2+R}.
$$

Passando al limite per $R\to+\infty$, il secondo termine tende a zero. L’integrale converge e vale $\frac12$.
:::
:::

:::exercise{id="E10.2" chapter="10" difficulty="difficile"}
## Domanda
Per $p\in\mathbb{R}$, studiare la convergenza e la convergenza assoluta dell’integrale $\int_0^{+\infty}\frac{\sin x}{x^p(1+x)}\,dx$. Esaminare separatamente i due estremi impropri.

:::hint
Vicino a zero usare $\sin x\sim x$. All’infinito considerare l’ampiezza $g(x)=1/(x^p(1+x))$ dell’oscillazione; per la convergenza assoluta osservare gli intervalli in cui $\sin x$ è positiva.
:::

:::solution
Si spezza l’integrale in $\int_0^1$ e $\int_1^{+\infty}$: entrambi devono convergere. Poiché $\sin x/x\to1$ per $x\to0^+$ e $1/(1+x)\to1$, l’integranda è asintotica a $x^{1-p}$ vicino a zero. È positiva in un intorno di zero, quindi l’integrale in questo estremo converge, anche assolutamente, esattamente quando $1-p>-1$, ossia $p<2$.

All’infinito si ponga $g(x)=1/(x^p(1+x))$. Se $p>-1$, allora $g(x)\to0$ e

$$
g'(x)=-\frac{p+(p+1)x}{x^{p+1}(1+x)^2}<0
$$

per $x$ sufficientemente grande. Integrando per parti, per $B>A$ abbastanza grandi si ottiene

$$
\int_A^B g(x)\sin x\,dx=\left[-g(x)\cos x\right]_A^B+\int_A^B g'(x)\cos x\,dx.
$$

Quando $B\to+\infty$, il termine $g(B)\cos B$ tende a zero e l’ultimo integrale converge assolutamente, perché $\int_A^{+\infty}|g'(x)|\,dx=g(A)$. Dunque l’integrale all’infinito converge per $p>-1$.

Se $p\leq-1$, invece, $g(x)$ tende a un limite positivo oppure cresce senza limite. Sugli intervalli $\lbrack 2\pi n,2\pi n+\pi\rbrack $ la funzione $\sin x$ è non negativa e $\int_{2\pi n}^{2\pi n+\pi}\sin x\,dx=2$. Poiché il minimo di $g$ su tali intervalli non tende a zero, i corrispondenti integrali non tendono a zero. L’integrale all’infinito quindi non converge.

Per la convergenza assoluta resta da considerare $-1<p<2$. All’infinito $g(x)$ è asintotica a $x^{-(p+1)}$. Se $p>0$, si ha $|\sin x|g(x)\leq g(x)$ e l’integrale converge per confronto con $\int_1^{+\infty}x^{-(p+1)}\,dx$. Se $-1<p\leq0$, posto $q=p+1\in(0,1\rbrack $, esiste una costante $c>0$ tale che, per $n$ sufficientemente grande,

$$
\int_{2\pi n}^{2\pi n+\pi}|\sin x|g(x)\,dx\geq\frac{c}{(n+1)^q}.
$$

Infatti $g(x)$ è confrontabile con $x^{-q}$ e l’integrale di $\sin x$ su ciascuno di questi intervalli vale $2$. La somma dei termini a destra diverge: essendo $q\leq1$, è almeno un multiplo della somma di $1/(n+1)$, che domina l’integrale divergente $\int_1^{+\infty}dt/t$. L’integrale non converge quindi assolutamente per $-1<p\leq0$.

In conclusione, l’integrale converge per $-1<p<2$ e converge assolutamente per $0<p<2$.
:::
:::

:::exercise{id="E10.3" chapter="10" difficulty="medio"}
## Domanda
Determinare per quali valori di $p\in\mathbb{R}$ converge l’integrale improprio di seconda specie $\int_0^1\frac{1-\cos x}{x^p}\,dx$.

:::hint
Studiare il comportamento di $1-\cos x$ vicino a $x=0$ e confrontare l’integranda con una potenza di $x$.
:::

:::solution
L’integranda è continua su ogni intervallo $\lbrack \varepsilon,1\rbrack $ con $\varepsilon>0$, quindi occorre esaminare soltanto l’estremo $x=0$. Dal limite $\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12$ segue che

$$
\lim_{x\to0^+}\frac{(1-\cos x)/x^p}{x^{2-p}}=\frac12.
$$

Le due funzioni sono positive vicino a zero. Per confronto asintotico, l’integrale dato ha lo stesso comportamento di $\int_0^1x^{2-p}\,dx$. Quest’ultimo converge se $2-p>-1$, cioè se $p<3$; per $p=3$ diverge come $\int_0^1\frac{1}{x}\,dx$, e per $p>3$ diverge ancora. Pertanto l’insieme dei valori richiesti è $(-\infty,3)$.
:::
:::

:::exercise{id="E11.1" chapter="11" difficulty="difficile"}
## Domanda
Risolvere il problema di Cauchy $y''+y=\sin x+2x$, $y(0)=0$, $y'(0)=1$.

:::hint
Tratta separatamente i due termini forzanti. Poiché $\sin x$ risolve l'equazione omogenea, cerca per esso una soluzione particolare che contenga un fattore $x$.
:::

:::solution
L'equazione omogenea $y''+y=0$ ha soluzione generale $A\cos x+B\sin x$. Per il termine $2x$ una soluzione particolare è $2x$, poiché $(2x)''+2x=2x$. Per il termine $\sin x$ si prova $-\frac{x\cos x}{2}$: derivando due volte si ottiene $\left(-\frac{x\cos x}{2}\right)''=\sin x+\frac{x\cos x}{2}$, quindi la somma con $-\frac{x\cos x}{2}$ è $\sin x$.

Per sovrapposizione, $y(x)=A\cos x+B\sin x+2x-\frac{x\cos x}{2}$. Dal dato $y(0)=0$ segue $A=0$. La derivata in $0$ vale $B+2-\frac{1}{2}=B+\frac{3}{2}$; imponendo $y'(0)=1$ si ottiene $B=-\frac{1}{2}$. Pertanto $y(x)=2x-\frac{x\cos x+\sin x}{2}$ su $\mathbb{R}$.
:::
:::

:::exercise{id="E11.2" chapter="11" difficulty="facile"}
## Domanda
Risolvere su $\mathbb{R}$ il problema di Cauchy $y'=2xy$, $y(0)=3$.

:::hint
L'equazione è a variabili separabili. Puoi anche cercare una soluzione nella forma $Ce^{x^2}$.
:::

:::solution
Moltiplicando l'equazione per $e^{-x^2}$ si ottiene

$$
\left(ye^{-x^2}\right)'=y'e^{-x^2}-2xye^{-x^2}=0.
$$

Quindi $ye^{-x^2}$ è costante su tutto $\mathbb{R}$ e ogni soluzione ha la forma $y(x)=Ce^{x^2}$. Dalla condizione iniziale $y(0)=3$ segue $C=3$. Pertanto l'unica soluzione è $y(x)=3e^{x^2}$, definita su tutto $\mathbb{R}$; infatti $y'(x)=6xe^{x^2}=2xy(x)$.
:::
:::

:::exercise{id="E11.3" chapter="11" difficulty="facile"}
## Domanda
Classificare per ordine l'equazione $y'=2x$ e verificare se la funzione $\varphi(x)=x^2+2$ risolve su $\mathbb{R}$ il problema di Cauchy $y'=2x$, $y(1)=3$. Determinare inoltre l'unica soluzione del problema.

:::hint
Calcola la derivata di $\varphi$ e il suo valore nel punto iniziale. Per trovare tutte le soluzioni, integra il membro destro.
:::

:::solution
L'equazione è del primo ordine. Poiché $\varphi'(x)=2x$ per ogni $x\in\mathbb{R}$ e $\varphi(1)=1+2=3$, la funzione proposta soddisfa sia l'equazione sia il dato iniziale.

Integrando $y'=2x$ si ottiene $y(x)=x^2+C$. La condizione $y(1)=3$ dà $1+C=3$, quindi $C=2$. La soluzione del problema è $y(x)=x^2+2$ su $\mathbb{R}$.
:::
:::

:::exercise{id="E11.4" chapter="11" difficulty="facile"}
## Domanda
Risolvere il problema di Cauchy $y''-3y'+2y=0$, $y(0)=1$, $y'(0)=0$.

:::hint
Trova le radici del polinomio caratteristico e determina le due costanti con i dati iniziali.
:::

:::solution
Il polinomio caratteristico è $r^2-3r+2=(r-1)(r-2)$, con radici distinte $1$ e $2$. La soluzione generale è $y(x)=Ae^x+Be^{2x}$.

I dati iniziali danno $A+B=1$ e, poiché $y'(x)=Ae^x+2Be^{2x}$, anche $A+2B=0$. Sottraendo la prima equazione dalla seconda si trova $B=-1$, quindi $A=2$. La soluzione cercata è $y(x)=2e^x-e^{2x}$, definita su $\mathbb{R}$.
:::
:::

:::exercise{id="E11.5" chapter="11" difficulty="medio"}
## Domanda
Risolvere su $\mathbb{R}$ il problema di Cauchy $y''+4y=8$, $y(0)=0$, $y'(0)=0$.

:::hint
Cerca una soluzione particolare costante, poi aggiungi la soluzione generale dell'equazione omogenea.
:::

:::solution
La funzione costante $y_p=2$ è una soluzione particolare, perché $y_p''+4y_p=0+8=8$. L'equazione omogenea associata ha radici caratteristiche $2i$ e $-2i$; dunque $y(x)=2+A\cos(2x)+B\sin(2x)$.

Il primo dato iniziale dà $0=2+A$, quindi $A=-2$. Derivando si ha $y'(x)=-2A\sin(2x)+2B\cos(2x)$; il secondo dato iniziale dà $0=2B$, quindi $B=0$. La soluzione è $y(x)=2-2\cos(2x)$ su $\mathbb{R}$.
:::
:::

:::exercise{id="E11.6" chapter="11" difficulty="difficile"}
## Domanda
Per ogni $a\in\mathbb{R}$ si consideri la funzione $y_a\colon\mathbb{R}\to\mathbb{R}$ definita da $y_a(x)=0$ se $x\leq a$ e $y_a(x)=(x-a)^2$ se $x>a$. Stabilire per quali valori di $a$ essa risolve il problema di Cauchy $y'=2\sqrt{y}$, $y(0)=0$. Dire se il problema ammette una sola soluzione su $\mathbb{R}$.

:::hint
Controlla separatamente i due intervalli e la derivabilità nel punto $a$. La condizione iniziale dipende dalla posizione di $a$ rispetto a $0$.
:::

:::solution
Per $x<a$ si ha $y_a(x)=0$ e $y_a'(x)=0=2\sqrt{y_a(x)}$. Per $x>a$ si ha $y_a'(x)=2(x-a)$ e, poiché $x-a>0$, anche $2\sqrt{y_a(x)}=2\sqrt{(x-a)^2}=2(x-a)$.

Nel punto $a$, il rapporto incrementale vale $0$ da sinistra e vale $h$ da destra, perché $y_a(a+h)=h^2$ per $h>0$. Entrambi i limiti sono $0$: quindi $y_a'(a)=0=2\sqrt{y_a(a)}$. Ogni $y_a$ risolve l'equazione su $\mathbb{R}$.

Se $a\geq 0$, allora $y_a(0)=0$. Se $a<0$, invece, $y_a(0)=a^2>0$. Pertanto il problema di Cauchy è soddisfatto esattamente per $a\geq 0$. Queste funzioni sono distinte tra loro; inoltre anche la funzione costantemente nulla è una soluzione. Il problema non ha soluzione unica.
:::
:::

:::exercise{id="E11.7" chapter="11" difficulty="difficile"}
## Domanda
Risolvere il problema di Cauchy $y'=y(y-1)$, $y(0)=2$. Determinare il massimo intervallo contenente $0$ su cui è definita la soluzione e stabilire se essa è crescente.

:::hint
Separa le variabili usando le frazioni parziali. Il denominatore della soluzione esplicita individua gli estremi del suo intervallo di definizione.
:::

:::solution
Poiché il dato iniziale è diverso da $0$ e da $1$, separando le variabili si ottiene $\frac{y'}{y(y-1)}=1$. La decomposizione $\frac{1}{y(y-1)}=-\frac{1}{y}+\frac{1}{y-1}$ dà $\log\left|\frac{y-1}{y}\right|=x+C$. In $x=0$ il rapporto vale $\frac{1}{2}>0$, perciò $\frac{y-1}{y}=\frac{1}{2}e^x$. Risolvendo rispetto a $y$ si trova $y(x)=\frac{2}{2-e^x}$.

Il denominatore è positivo nell'intervallo contenente $0$ dato da $x<\log 2$. Quando $x\to(\log 2)^-$, la soluzione tende a $+\infty$, quindi non può essere prolungata come soluzione reale oltre quell'estremo. Il massimo intervallo è $(-\infty,\log 2)$.

In tale intervallo $0<e^x<2$, perciò $y(x)>1$. Dall'equazione segue allora $y'(x)=y(x)(y(x)-1)>0$: la soluzione è strettamente crescente.
:::
:::

:::exercise{id="E11.8" chapter="11" difficulty="medio"}
## Domanda
Sia $y$ una soluzione, definita in un intorno di $0$, del problema di Cauchy $y'=x+y^2$, $y(0)=1$. Calcolare $\lim_{x\to 0}\frac{y(x)-1-x}{x^2}$.

:::hint
Ricava $y'(0)$ dall'equazione, poi deriva l'equazione una seconda volta. Usa lo sviluppo di Taylor nel punto iniziale.
:::

:::solution
Dall'equazione e dal dato iniziale segue $y'(0)=0+1^2=1$. Derivando $y'=x+y^2$ si ottiene $y''=1+2yy'$, dunque $y''(0)=1+2\cdot 1\cdot 1=3$.

Lo sviluppo di Taylor in $0$ dà $y(x)=y(0)+y'(0)x+\frac{y''(0)}{2}x^2+o(x^2)=1+x+\frac{3}{2}x^2+o(x^2)$. Dividendo per $x^2$ e passando al limite si trova $\frac{3}{2}$.
:::
:::

:::exercise{id="E11.9" chapter="11" difficulty="medio"}
## Domanda
Risolvere il problema di Cauchy $y'+2y=e^{-x}$, $y(0)=2$, specificando il dominio della soluzione.

:::hint
Moltiplica l'equazione per il fattore integrante $e^{2x}$.
:::

:::solution
Moltiplicando per $e^{2x}$, il membro sinistro diventa una derivata: $(e^{2x}y)'=e^x$. Integrando segue $e^{2x}y=e^x+C$, dunque $y(x)=e^{-x}+Ce^{-2x}$.

Dal dato iniziale $2=1+C$ si ricava $C=1$. La funzione $y(x)=e^{-x}+e^{-2x}$ è definita su tutto $\mathbb{R}$. Inoltre $y'+2y=(-e^{-x}-2e^{-2x})+2(e^{-x}+e^{-2x})=e^{-x}$, come richiesto.
:::
:::
