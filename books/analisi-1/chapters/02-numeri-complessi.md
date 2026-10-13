---
chapter: 2
title: Numeri complessi
---

## p1 | Introduzione

I numeri complessi nascono per rispondere a un'esigenza molto concreta: dare senso a equazioni che, nell'ambito dei numeri reali, non hanno soluzione, come $x^2+1=0$. Estendendo $\mathbb{R}$ con l'unità immaginaria $i$, si costruisce un nuovo insieme numerico in cui ogni equazione polinomiale possiede soluzione, un fatto che culmina nel teorema fondamentale dell'algebra. Questo ampliamento non è solo un esercizio formale: i numeri complessi sono uno strumento essenziale in elettrotecnica, nello studio delle oscillazioni, nei segnali e in moltissimi modelli matematici applicati, proprio perché permettono di trattare in modo unificato rotazioni, fasi e crescite esponenziali.

Per affrontare questo capitolo è necessario avere piena familiarità con i numeri reali, con le funzioni trigonometriche seno e coseno e con le loro proprietà, e con le tecniche elementari di risoluzione di equazioni e sistemi.

Al termine del percorso lo studente saprà rappresentare un numero complesso nelle sue diverse forme algebrica, trigonometrica ed esponenziale, passando agevolmente dall'una all'altra; saprà eseguire tutte le operazioni fondamentali, incluso il calcolo di modulo e coniugato; sarà in grado di calcolare potenze e radici n-esime utilizzando la formula di De Moivre, interpretandone geometricamente il risultato nel piano di Gauss; e infine saprà risolvere equazioni polinomiali in campo complesso, fattorizzando anche polinomi a coefficienti reali grazie alla proprietà delle radici coniugate.

## p2 | Forma algebrica e operazioni

### Perché servono i numeri complessi

L'operazione di radice quadrata, nell'insieme dei numeri reali, è definita solo per argomenti non negativi: $\sqrt{b}$ è l'unico numero $a \ge 0$ tale che $a^2 = b$, e tale numero non esiste in $\mathbb{R}$ se $b < 0$.

Per superare questo ostacolo si introduce un nuovo simbolo.

**Definizione 2.1 (unità immaginaria).** Si chiama **unità immaginaria** il simbolo $i$ che soddisfa

:::formula{id="2.1" label="Unità immaginaria"}
$$i^2 = -1$$
:::

Si indica con $\mathbb{C}$ l'insieme di tutte le espressioni $a + ib$ con $a, b \in \mathbb{R}$.

**Definizione 2.2 (numero complesso, forma algebrica).** Un **numero complesso** è un'espressione della forma

$$z = a + ib, \qquad a, b \in \mathbb{R},$$

detta **forma algebrica** (o cartesiana) di $z$. Il numero $a$ si chiama **parte reale** di $z$ e si scrive $a = \operatorname{Re}(z)$; il numero $b$ si chiama **parte immaginaria** di $z$ e si scrive $b = \operatorname{Im}(z)$.

Se $b = 0$ si ha $z = a + i0 = a \in \mathbb{R}$: i numeri reali sono dunque un caso particolare di numeri complessi, e si ha la gerarchia di inclusione $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$. Se invece $a = 0$ si ha $z = ib$: tali numeri si dicono **immaginari puri**.

Si può pensare equivalentemente a $z$ come alla coppia ordinata $(a, b) \in \mathbb{R}^2$, ciò che permette di rappresentare $\mathbb{C}$ come un piano, detto **piano di Gauss**: sull'asse delle ascisse si legge $\operatorname{Re}(z)$, su quello delle ordinate $\operatorname{Im}(z)$.

**Osservazione 2.1 (uguaglianza in $\mathbb{C}$).** Due numeri complessi $z_1 = a_1 + ib_1$ e $z_2 = a_2 + ib_2$ sono uguali se e solo se hanno uguale parte reale e uguale parte immaginaria, cioè se e solo se $a_1 = a_2$ e $b_1 = b_2$. Questo principio è lo strumento fondamentale per risolvere le equazioni in $z$, come si vedrà più avanti.

:::image{src="assets/9a86eeb5-piano-di-gauss-coniugato.svg" alt="Punto z=a+ib e il suo coniugato nel piano di Gauss" caption="Fig. 2.1 — Rappresentazione di z e del suo coniugato nel piano di Gauss"}
:::

### Modulo e coniugato

**Definizione 2.3 (modulo).** Dato $z = a + ib \in \mathbb{C}$, si definisce **modulo** di $z$ il numero reale non negativo

:::formula{id="2.2" label="Modulo di un numero complesso"}
$$|z| = \sqrt{a^2 + b^2},$$
:::

cioè la distanza del punto $z$ dall'origine del piano di Gauss. Essendo una distanza, $|z| \ge 0$, e $|z| = 0$ se e solo se $z = 0$.

**Definizione 2.4 (coniugato).** Dato $z = a + ib \in \mathbb{C}$, si definisce **complesso coniugato** di $z$ il numero

:::formula{id="2.3" label="Complesso coniugato"}
$$\bar z = a - ib.$$
:::

Nel piano di Gauss, $\bar z$ è il punto simmetrico di $z$ rispetto all'asse reale.

Dalle definizioni seguono subito due relazioni molto usate, che permettono di recuperare parte reale e parte immaginaria a partire da $z$ e $\bar z$:

:::formula{id="2.4" label="Parte reale e immaginaria tramite il coniugato"}
$$\operatorname{Re}(z) = \frac{z + \bar z}{2}, \qquad \operatorname{Im}(z) = \frac{z - \bar z}{2i}.$$
:::

Infatti $z + \bar z = (a+ib) + (a-ib) = 2a = 2\operatorname{Re}(z)$ e $z - \bar z = 2ib = 2i\operatorname{Im}(z)$.

Valgono inoltre, per ogni $z, z' \in \mathbb{C}$, le proprietà seguenti, che useremo spesso senza ulteriori commenti:

- $|z| \ge 0$ e $|z| = 0 \iff z = 0$;
- $|z \cdot z'| = |z| \cdot |z'|$;
- $|z + z'| \le |z| + |z'|$ (disuguaglianza triangolare, analoga a [formula (1.3)](ref:formula/1.3));
- $|z| = |\bar z|$;
- $|z| \ge |\operatorname{Re}(z)|$ e $|z| \ge |\operatorname{Im}(z)|$;
- $\overline{z + z'} = \bar z + \bar z'$ e $\overline{z \cdot z'} = \bar z \cdot \bar z'$;
- $\overline{\bar z} = z$;
- $z = \bar z \iff z \in \mathbb{R}$.

**Errore tipico 2.1.** Molti studenti scrivono $|z|^2 = a^2 - b^2$ confondendo il modulo con il quadrato della forma algebrica. Si ricordi invece che $|z|^2 = a^2 + b^2 = z \cdot \bar z$ (si verifica subito moltiplicando $(a+ib)(a-ib)$); questa identità è la chiave per calcolare il reciproco di un numero complesso, come vediamo subito.

### Operazioni in $\mathbb{C}$: somma, prodotto, quoziente

Siano $z_1 = a_1 + ib_1$ e $z_2 = a_2 + ib_2$ due numeri complessi.

**Somma.** Si definisce

:::formula{id="2.5" label="Somma di numeri complessi"}
$$z_1 + z_2 = (a_1 + a_2) + i(b_1 + b_2),$$
:::

ottenuta sommando separatamente le parti reali e le parti immaginarie.

**Prodotto.** Applicando la proprietà distributiva e la relazione $i^2 = -1$ si ottiene

$$z_1 \cdot z_2 = (a_1 + ib_1)(a_2 + ib_2) = a_1a_2 + ia_1b_2 + ib_1a_2 + i^2 b_1 b_2,$$

e quindi

:::formula{id="2.6" label="Prodotto di numeri complessi"}
$$z_1 \cdot z_2 = (a_1a_2 - b_1b_2) + i(a_1b_2 + a_2b_1).$$
:::

L'elemento neutro del prodotto è $z = 1 + i0 = 1$.

**Reciproco e quoziente.** Se $z = a + ib \neq 0$, moltiplicando e dividendo per $\bar z$ si ha

$$z \cdot \bar z = |z|^2 \quad \Longrightarrow \quad z \cdot \frac{\bar z}{|z|^2} = 1,$$

dunque

:::formula{id="2.7" label="Reciproco di un numero complesso"}
$$z^{-1} = \frac{1}{z} = \frac{\bar z}{|z|^2}, \qquad z \neq 0.$$
:::

 Il quoziente $z_1 / z_2$ (con $z_2 \neq 0$) si calcola moltiplicando numeratore e denominatore per il coniugato del denominatore:

$$\frac{z_1}{z_2} = \frac{z_1 \bar z_2}{z_2 \bar z_2} = \frac{z_1 \bar z_2}{|z_2|^2},$$

che riporta sempre a un denominatore reale.

**Esempio 2.1.** Siano $z_1 = 2 + 3i$ e $z_2 = 1 - i$. Calcoliamo somma, prodotto e quoziente.

Somma:

$$z_1 + z_2 = (2+1) + i(3-1) = 3 + 2i.$$

Prodotto:

$$z_1 \cdot z_2 = (2 \cdot 1 - 3 \cdot(-1)) + i(2\cdot(-1) + 3\cdot 1) = (2+3) + i(-2+3) = 5 + i.$$

Quoziente: poiché $\bar z_2 = 1 + i$ e $|z_2|^2 = 1^2 + (-1)^2 = 2$,

$$\frac{z_1}{z_2} = \frac{z_1 \bar z_2}{|z_2|^2} = \frac{(2+3i)(1+i)}{2} = \frac{2 + 2i + 3i + 3i^2}{2} = \frac{2 + 5i - 3}{2} = \frac{-1 + 5i}{2} = -\frac{1}{2} + \frac{5}{2}i.$$

Infine, modulo e coniugato di $z_1$: $|z_1| = \sqrt{2^2+3^2} = \sqrt{13}$ e $\bar z_1 = 2 - 3i$.

### Equazioni in $z$ e $\bar z$

Per risolvere un'equazione in cui compaiono sia $z$ che $\bar z$ si pone $z = x + iy$ con $x, y \in \mathbb{R}$ incognite reali, si sostituisce $\bar z = x - iy$, si svolgono tutti i calcoli algebrici e si riduce l'equazione alla forma

$$A(x,y) + i\, B(x,y) = C + iD,$$

con $A, B, C, D$ espressioni reali. Per il principio di uguaglianza fra numeri complessi, questo equivale al sistema reale

$$\begin{cases} A(x,y) = C \\ B(x,y) = D \end{cases}$$

che si risolve con i metodi dell'algebra reale, ottenendo i valori di $x$ e $y$ e dunque le soluzioni $z = x+iy$.

**Esempio 2.2.** Risolviamo l'equazione $z + 2\bar z = 3 + i$.

Poniamo $z = x+iy$, da cui $\bar z = x - iy$. Sostituendo:

$$x + iy + 2(x - iy) = 3 + i \quad \Longrightarrow \quad (x + 2x) + i(y - 2y) = 3 + i \quad \Longrightarrow \quad 3x - iy = 3 + i.$$

Uguagliando parte reale e parte immaginaria:

$$\begin{cases} 3x = 3 \\ -y = 1 \end{cases} \quad \Longrightarrow \quad \begin{cases} x = 1 \\ y = -1. \end{cases}$$

La soluzione è dunque $z = 1 - i$. Si verifica: $z + 2\bar z = (1-i) + 2(1+i) = 1 - i + 2 + 2i = 3 + i$. ✓

**Esempio 2.3.** Risolviamo $z \cdot \bar z + 2z = 8 + 4i$.

Con $z = x+iy$ si ha $z\bar z = x^2+y^2$ e $2z = 2x + 2iy$, quindi

$$(x^2+y^2+2x) + i(2y) = 8 + 4i.$$

Il sistema è

$$\begin{cases} x^2+y^2+2x = 8 \\ 2y = 4 \end{cases} \quad \Longrightarrow \quad \begin{cases} x^2+2x+4 = 8 \\ y = 2 \end{cases} \quad \Longrightarrow \quad \begin{cases} x^2+2x-4 = 0 \\ y = 2. \end{cases}$$

Da $x^2+2x-4=0$ si ottiene $x = -1 \pm \sqrt{5}$, entrambe soluzioni reali accettabili, quindi le soluzioni sono $z = -1+\sqrt{5}+2i$ e $z = -1-\sqrt{5}+2i$.

**Errore tipico 2.2.** Un errore molto comune è trattare $z^2$ e $z \cdot \bar z$ come la stessa quantità: $z^2 = (x+iy)^2 = x^2-y^2+2ixy$ è in generale un numero complesso, mentre $z \cdot \bar z = x^2+y^2 = |z|^2$ è sempre reale e non negativo. Prima di impostare il sistema conviene sempre controllare se nell'equazione compare $z^2$ oppure $|z|^2$, perché le due vie portano a sistemi completamente diversi. Un secondo errore frequente è dimenticare di sostituire correttamente $\bar z = x - iy$ (con il segno meno davanti a $iy$), ottenendo equazioni sbagliate fin dal primo passo.

## p3 | Forma trigonometrica ed esponenziale

Nella sezione precedente abbiamo introdotto i numeri complessi nella **forma algebrica** $z = a + ib$, con $a = \operatorname{Re} z$, $b = \operatorname{Im} z$, e abbiamo definito il coniugato $\bar z$ e il modulo $|z|$ (si veda [Forma algebrica e operazioni](ref:chapter/2#p2)). Questa forma è comoda per somme e differenze, ma diventa scomoda quando si devono calcolare potenze o prodotti con esponenti grandi. La **forma trigonometrica** e la **forma esponenziale** risolvono questo problema, perché trasformano il prodotto di numeri complessi nella somma dei relativi angoli.

### Rappresentazione geometrica: modulo e argomento

Ogni numero complesso $z = a+ib$ si può rappresentare come un punto del piano di Gauss, con $a$ in ascissa e $b$ in ordinata. Oltre alle coordinate cartesiane $(a,b)$, il punto $z$ può essere individuato tramite coordinate polari: la distanza dall'origine e l'angolo formato con il semiasse reale positivo.

**Definizione 2.5.** Si definisce **modulo** di $z = a+ib$ il numero reale

$$\rho = |z| = \sqrt{a^2+b^2},$$

che, essendo una distanza, è sempre $\geq 0$.

Si definisce **argomento** di $z \neq 0$ un qualunque angolo $\theta$ tale che il punto $z$ si trovi sulla semiretta uscente dall'origine che forma l'angolo $\theta$ con il semiasse reale positivo; equivalentemente, $\theta$ è l'angolo per cui valgono le relazioni che legano $a,b$ a $\rho,\theta$ viste più sotto.

Poiché $\theta$ è definito a meno di multipli di $2\pi$, si parla di **argomento principale** $\arg z$ quando si impone $\theta \in \,\rbrack -\pi,\pi\rbrack $, come fissato dalla convenzione di questo libro; altri testi scelgono l'intervallo $\lbrack 0,2\pi\lbrack $.

### Dalla forma algebrica alla forma trigonometrica ed esponenziale

Dato $z = a+ib \neq 0$ in forma algebrica, si ha $\rho>0$ e il passaggio alla forma trigonometrica si ottiene da

$$
\begin{cases}
\rho = |z| = \sqrt{a^2+b^2} \\
\cos\theta = \dfrac{a}{\rho} = \dfrac{a}{\sqrt{a^2+b^2}} \\
\sin\theta = \dfrac{b}{\rho} = \dfrac{b}{\sqrt{a^2+b^2}}
\end{cases}
$$

e quindi

:::formula{id="2.8" label="Forma trigonometrica"}
$$z = \rho(\cos\theta + i\sin\theta)$$
:::

Per determinare $\theta$ si può riconoscere l'angolo compatibile con i segni di $\cos\theta$ e $\sin\theta$. Se $a\neq0$, si può partire da $\arctan\!\left(\dfrac{b}{a}\right)$, che restituisce un angolo in $\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$. Per ottenere l'argomento principale, quando $a<0$ si aggiunge $\pi$ se $b\geq0$ e si sottrae $\pi$ se $b<0$. Se $a=0$, l'argomento principale è $\dfrac{\pi}{2}$ per $b>0$ e $-\dfrac{\pi}{2}$ per $b<0$.

**Errore tipico 2.3.** Usare $\arctan(b/a)$ senza controllare il quadrante: quando $a<0$, il valore restituito cade nel primo o nel quarto quadrante, mentre $z$ si trova nel secondo o nel terzo. Inoltre, il rapporto $b/a$ non è definito se $a=0$. Per $z=0$ si ha $\rho=0$ e si può scrivere $0=0(\cos\theta+i\sin\theta)$ per qualunque $\theta$, ma lo zero non ha argomento.

Per abbreviare la scrittura si introduce la notazione esponenziale, sostituendo

:::formula{id="2.9" label="Formula di Eulero"}
$$e^{i\theta} = \cos\theta + i\sin\theta$$
:::

da cui si ottiene la **forma esponenziale**

:::formula{id="2.10" label="Forma esponenziale"}
$$z = \rho e^{i\theta}$$
:::

Viceversa, per passare dalla forma trigonometrica (o esponenziale) a quella algebrica basta ricordare che

$$
\begin{cases}
\rho = |z| \\
a = \rho\cos\theta \\
b = \rho\sin\theta.
\end{cases}
$$

**Esempio 2.4.** Si vuole scrivere $z = 1+i$ in forma trigonometrica ed esponenziale. Si ha $a=1$, $b=1$, quindi

$$\rho = |z| = \sqrt{1^2+1^2} = \sqrt{2}, \qquad \cos\theta = \frac{1}{\sqrt{2}}, \quad \sin\theta = \frac{1}{\sqrt{2}} \implies \theta = \frac{\pi}{4}.$$

Pertanto

$$z = 1+i = \sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) = \sqrt{2}\,e^{i\frac{\pi}{4}}.$$

### Coniugato, reciproco ed esponenziale in forma esponenziale

La forma esponenziale rende particolarmente semplici alcune operazioni già note in forma algebrica.

Se $z = \rho e^{i\theta}$, il coniugato si scrive

:::formula{id="2.11" label="Coniugato in forma esponenziale"}
$$\bar z = \rho e^{-i\theta},$$
:::

cioè coniugare equivale a cambiare segno all'argomento lasciando invariato il modulo.

Se inoltre $z \neq 0$ (cioè $\rho \neq 0$), il reciproco è

:::formula{id="2.12" label="Reciproco in forma esponenziale"}
$$z^{-1} = \frac{1}{z} = \frac{\bar z}{|z|^2} = \rho^{-1} e^{-i\theta}.$$
:::

Si può inoltre estendere la funzione esponenziale a tutto $\mathbb{C}$ definendo, per $z = a+ib$,

:::formula{id="2.13" label="Esponenziale complesso"}
$$e^{z} = e^{a+ib} = e^a \cdot e^{ib} = e^a(\cos b + i \sin b).$$
:::

### Formula di De Moivre: potenze e prodotti

Il vantaggio principale della forma esponenziale (e trigonometrica) sta nel calcolo di prodotti e potenze: se $z_1 = \rho_1 e^{i\theta_1}$ e $z_2 = \rho_2 e^{i\theta_2}$, allora

$$z_1 z_2 = \rho_1 \rho_2\, e^{i(\theta_1+\theta_2)},$$

cioè si moltiplicano i moduli e si **sommano** gli argomenti. Iterando questo fatto si ottiene il seguente risultato.

**Teorema 2.1 (formula di De Moivre).** Sia $z = \rho(\cos\theta + i\sin\theta) = \rho e^{i\theta}$ un numero complesso non nullo, quindi $\rho>0$, e sia $n \in \mathbb{Z}$. Allora

:::formula{id="2.14" label="Formula di De Moivre"}
$$\big[\rho(\cos\theta + i\sin\theta)\big]^n = \rho^n\big(\cos(n\theta) + i\sin(n\theta)\big) = \rho^n e^{in\theta}.$$
:::

In altre parole, per elevare a potenza un numero complesso basta elevare a potenza il modulo e moltiplicare l'argomento per l'esponente: un'operazione molto più semplice rispetto allo sviluppo del binomio in forma algebrica.

**Esempio 2.5.** Si vuole calcolare $(1+i)^8$. Usando il risultato trovato sopra, $1+i = \sqrt{2}\,e^{i\pi/4}$, quindi per la formula di De Moivre

$$(1+i)^8 = \left(\sqrt{2}\right)^8 e^{i\cdot 8 \cdot \frac{\pi}{4}} = 2^4 e^{i2\pi} = 16 \cdot 1 = 16,$$

dove si è usato $e^{i2\pi} = \cos(2\pi) + i\sin(2\pi) = 1$. Il calcolo diretto tramite il binomio di Newton (si veda [Principio di induzione e coefficiente binomiale](ref:chapter/1#p3)) richiederebbe molti più passaggi.

**Errore tipico 2.4.** Un errore frequente è applicare De Moivre elevando il modulo ma **non** moltiplicando l'argomento per $n$ (o viceversa): entrambe le operazioni, sul modulo e sull'argomento, vanno eseguite insieme. Un secondo errore comune è dimenticare che l'angolo risultante $n\theta$ può uscire dall'intervallo $\rbrack -\pi,\pi\rbrack $: ciò non è un problema, perché coseno e seno sono periodici, ma se si vuole l'argomento principale occorre ridurre $n\theta$ modulo $2\pi$.

La formula di De Moivre sarà lo strumento fondamentale per risolvere le equazioni $X^n = z$, trattate nella prossima sezione dedicata alle [radici n-esime](ref:chapter/2#p4).

## p4 | Radici n-esime

### Definizione e teorema di esistenza

Fissato un numero complesso $z \in \mathbb{C}$ e un intero $n \in \mathbb{N}$, $n \geq 1$, si dice che $w \in \mathbb{C}$ è una **radice $n$-esima** di $z$ se e solo se $w^n = z$. A differenza del caso reale, in cui (ad esempio) un numero positivo ha un'unica radice quadrata positiva, nel campo complesso le radici $n$-esime di un numero non nullo sono sempre $n$ e sono tutte distinte. Questo è il contenuto del teorema seguente, che si dimostra applicando la formula di De Moivre vista nella sezione precedente ({{formula:2.14}}, cfr. [Forma trigonometrica ed esponenziale](ref:chapter/2#p3)).

**Teorema 2.2 (esistenza delle radici $n$-esime).** Siano $z = \rho e^{i\theta}$ un numero complesso non nullo (quindi $\rho > 0$) e $n \in \mathbb{N}$, $n \geq 1$. Allora l'equazione $X^n - z = 0$ ammette esattamente $n$ soluzioni distinte in $\mathbb{C}$, date da

$$
X_k = \sqrt[n]{\rho}\, e^{i\varphi_k}, \qquad \varphi_k = \frac{\theta + 2k\pi}{n}, \qquad k = 0, 1, \ldots, n-1.
$$

In forma trigonometrica, equivalentemente,

:::formula{id="2.15" label="Radici n-esime di un numero complesso"}
$$
X_k = \sqrt[n]{\rho}\left[\cos\left(\frac{\theta + 2k\pi}{n}\right) + i\sin\left(\frac{\theta + 2k\pi}{n}\right)\right], \qquad k = 0, 1, \ldots, n-1.
$$
:::

Qui $\sqrt[n]{\rho}$ indica l'unica radice $n$-esima **reale e positiva** del numero reale positivo $\rho = |z|$: non c'è alcuna ambiguità su questo simbolo, perché tutta la molteplicità delle radici complesse è racchiusa nella scelta dell'angolo $\varphi_k$. Al variare di $k$ tra $0$ e $n-1$ si ottengono $n$ argomenti distinti modulo $2\pi$, e dunque $n$ numeri complessi distinti; per $k = n$ si ritroverebbe lo stesso angolo di $k=0$ (a meno di multipli di $2\pi$), quindi non si trovano nuove soluzioni oltre le prime $n$.

**Osservazione 2.2.** Il numero $\theta$ che compare nella formula può essere l'argomento principale di $z$ (quello scelto nell'intervallo $\rbrack -\pi,\pi\rbrack $ secondo la convenzione di questo libro), oppure un qualunque altro argomento di $z$: cambiare $\theta$ di un multiplo di $2\pi$ non altera l'insieme delle $n$ radici, perché equivale a una diversa scelta dell'indice $k$ di partenza.

### Esempio svolto

Calcoliamo le radici cubiche di $z = -4 + 4i$, cioè le soluzioni di $X^3 = -4+4i$.

Prima si scrive $z$ in forma esponenziale. Il modulo è

$$
\rho = |-4+4i| = \sqrt{(-4)^2+4^2} = \sqrt{32} = 4\sqrt{2}.
$$

Per l'argomento si impone

$$
\cos\theta = \frac{-4}{4\sqrt{2}} = -\frac{\sqrt{2}}{2}, \qquad \sin\theta = \frac{4}{4\sqrt{2}} = \frac{\sqrt{2}}{2},
$$

condizioni soddisfatte (nel secondo quadrante) da $\theta = \frac{3}{4}\pi$. Dunque $z = 4\sqrt{2}\, e^{i\frac{3}{4}\pi}$.

Applicando il teorema con $n=3$ si ottiene $\sqrt[3]{\rho} = \sqrt[3]{4\sqrt{2}}$ e gli angoli

$$
\varphi_k = \frac{\frac{3}{4}\pi + 2k\pi}{3}, \qquad k = 0,1,2,
$$

cioè

$$
\varphi_0 = \frac{\pi}{4}, \qquad \varphi_1 = \frac{\pi}{4} + \frac{2}{3}\pi, \qquad \varphi_2 = \frac{\pi}{4} + \frac{4}{3}\pi.
$$

Le tre radici cubiche sono quindi

$$
X_0 = \sqrt[3]{4\sqrt{2}}\, e^{i\pi/4}, \qquad X_1 = \sqrt[3]{4\sqrt{2}}\, e^{i(\pi/4+2\pi/3)}, \qquad X_2 = \sqrt[3]{4\sqrt{2}}\, e^{i(\pi/4+4\pi/3)}.
$$

Per ottenere la forma algebrica di ciascuna radice si usano le sue parti reale e immaginaria: $\operatorname{Re}X_k=\sqrt[3]{\rho}\cos\varphi_k$ e $\operatorname{Im}X_k=\sqrt[3]{\rho}\sin\varphi_k$, dove qui $\rho=4\sqrt{2}$ e $\varphi_k$ è l'argomento della radice $X_k$.

### Rappresentazione nel piano di Gauss

I numeri complessi si rappresentano nel piano di Gauss ponendo la parte reale sull'asse delle ascisse e la parte immaginaria sull'asse delle ordinate. Questo permette di visualizzare in modo efficace la struttura delle $n$ radici $n$-esime: poiché tutte hanno lo stesso modulo $\sqrt[n]{\rho}$, esse giacciono sulla stessa circonferenza di centro l'origine e raggio $\sqrt[n]{\rho}$. Gli argomenti di radici consecutive nell'ordine circolare differiscono di $\frac{2\pi}{n}$, quindi le radici sono disposte uniformemente sulla circonferenza. Per $n=3$ formano un triangolo equilatero; per $n=4$ un quadrato; per $n=5$ un pentagono regolare, e così via per ogni $n \geq 3$.

:::image{src="assets/a9d64c62-radici-cubiche-gauss.svg" alt="Tre punti equidistanti su una circonferenza, vertici di un triangolo equilatero, che rappresentano le radici cubiche di -4+4i nel piano di Gauss" caption="Fig. 2.2 — Le tre radici cubiche di z = -4 + 4i, disposte ai vertici di un triangolo equilatero sulla circonferenza di raggio la radice cubica del modulo di z"}
:::

La figura mostra le tre radici cubiche calcolate nell'esempio precedente: si vede chiaramente come giacciano sulla circonferenza di raggio $\sqrt[3]{4\sqrt{2}}$ e come siano separate l'una dall'altra da un angolo di $\frac{2\pi}{3}$, formando i vertici di un triangolo equilatero.

### Errori tipici

- **Confondere $\sqrt[n]{\rho}$ con l'operazione di radice $n$-esima complessa.** Il simbolo $\sqrt[n]{\rho}$ nella formula indica sempre l'unica radice $n$-esima reale positiva del numero reale positivo $\rho$; tutta la molteplicità delle soluzioni complesse è contenuta negli angoli $\varphi_k$, non nel modulo.
- **Dimenticare di elencare tutte le $n$ radici.** Un errore frequente è calcolare solo la radice corrispondente a $k=0$ (quella con l'argomento principale diviso per $n$) e trascurare le restanti $n-1$ soluzioni, che pure risolvono l'equazione $X^n = z$.
- **Sbagliare il calcolo dell'argomento $\theta$ di partenza.** Poiché tutti gli angoli $\varphi_k$ derivano da $\theta$, un errore nella determinazione del quadrante (e quindi del segno di seno e coseno) si propaga a tutte le radici: conviene sempre verificare il quadrante di $z$ prima di applicare la formula, come richiamato nella sezione sulla forma trigonometrica.
- **Usare un valore di $k$ fuori dall'intervallo $0,1,\ldots,n-1$** credendo di ottenere nuove soluzioni: per periodicità delle funzioni trigonometriche (o dell'esponenziale complesso), $k=n$ restituisce esattamente la stessa radice di $k=0$, quindi non vanno considerati altri valori di $k$.

Le radici $n$-esime di $z$ sono le soluzioni dell'equazione polinomiale $X^n-z=0$, un caso particolare delle equazioni polinomiali nel campo complesso, che vengono inquadrate nel contesto più generale dei polinomi complessi nella prossima sezione [Polinomi ed equazioni in $\mathbb{C}$](ref:chapter/2#p5).

## p5 | Polinomi ed equazioni in ℂ

Le operazioni sui numeri complessi introdotte nelle sezioni precedenti permettono di affrontare un problema che in $\mathbb{R}$ non ha sempre soluzione: risolvere equazioni polinomiali. Già l'equazione $x^2+1=0$ non ha soluzioni reali, ma in $\mathbb{C}$ diventa risolubile grazie all'unità immaginaria $i$, con $i^2=-1$ {{formula:2.1}}. In questa sezione vediamo che ogni equazione polinomiale di grado almeno $1$ ha almeno una soluzione in $\mathbb{C}$.

Un **polinomio complesso** di grado $n$ è un'espressione della forma

$$
P_n(z) = a_n z^n + a_{n-1} z^{n-1} + \cdots + a_1 z + a_0,
$$

con $a_n \neq 0$ e coefficienti $a_0, \dots, a_n$ reali o complessi; l'equazione associata è $P_n(z)=0$. Per $n=1$ e $n=2$ si risolve con le formule elementari note (per $n=2$ la formula risolutiva $z = \dfrac{-a_1 \pm \sqrt{a_1^2-4a_2a_0}}{2a_2}$ resta valida anche quando il discriminante è negativo, interpretando la radice quadrata come radice complessa); esistono formule risolutive anche per $n=3$ e $n=4$, ma per $n \ge 5$ non esistono formule risolutive generali che esprimano le radici tramite radicali.

### Il teorema fondamentale dell'algebra

Il risultato centrale di questa sezione garantisce l'esistenza di soluzioni, indipendentemente dal grado del polinomio.

**Teorema 2.3 (fondamentale dell'algebra).** Ogni equazione polinomiale $P_n(z)=0$ con $n \ge 1$ a coefficienti reali o complessi ammette almeno una soluzione complessa.

Il teorema afferma pertanto che $\mathbb{C}$ è **algebricamente chiuso**: a differenza di $\mathbb{R}$, in cui esistono polinomi senza alcuna radice reale (come $x^2+1$), in $\mathbb{C}$ ogni polinomio non costante possiede almeno uno zero. La dimostrazione richiede strumenti di analisi complessa che escono dal programma del corso; qui ne usiamo solo l'enunciato.

Combinando il teorema fondamentale dell'algebra con il teorema di Ruffini si ottiene la fattorizzazione completa di un polinomio complesso.

**Teorema 2.4 (di Ruffini).** Se $z_0$ è una radice di $P_n(z)$, cioè $P_n(z_0)=0$, allora il binomio $(z-z_0)$ divide $P_n(z)$: esiste un polinomio $Q(z)$ di grado $n-1$ tale che

$$
P_n(z) = (z-z_0)\,Q(z).
$$

Applicando il teorema fondamentale dell'algebra a $Q(z)$ si trova una sua radice $z_1$ (eventualmente coincidente con $z_0$), si fattorizza di nuovo e si itera il procedimento. Dopo $n$ passi si ottiene:

:::formula{id="2.16" label="Fattorizzazione di un polinomio complesso"}
$$
P_n(z) = a_n (z-z_1)(z-z_2)\cdots(z-z_n),
$$
:::

dove $z_1, \dots, z_n \in \mathbb{C}$ sono le radici di $P_n$, non necessariamente distinte. In altre parole, **un polinomio di grado $n$ ha esattamente $n$ radici complesse, contate con la loro molteplicità**.

### Osservazione: molteplicità delle radici

Se nella fattorizzazione un fattore $(z-z_k)$ compare $m$ volte, si dice che $z_k$ è una radice di **molteplicità** $m$. La somma delle molteplicità di tutte le radici distinte è sempre uguale al grado $n$ del polinomio.

### Polinomi a coefficienti reali e radici coniugate

Quando il polinomio ha coefficienti reali, la struttura delle radici complesse non reali è particolarmente rigida.

**Proposizione 2.1.** Sia $P_n$ un polinomio a coefficienti reali e sia $z_0 \in \mathbb{C}\setminus\mathbb{R}$ una sua radice, cioè $P_n(z_0)=0$. Allora anche il coniugato $\overline{z_0}$ è una radice di $P_n$:

$$
P_n(z_0) = 0 \implies P_n(\overline{z_0}) = 0.
$$

La ragione è semplice: scrivendo $P_n(z) = \sum_{k=0}^n a_k z^k$ con $a_k \in \mathbb{R}$, e usando le proprietà del coniugato (in particolare $\overline{a_k z_0^k} = a_k \overline{z_0}^k$ poiché $a_k$ è reale e il coniugato è moltiplicativo), si ottiene $\overline{P_n(z_0)} = P_n(\overline{z_0})$; se $P_n(z_0)=0$ allora anche $\overline{P_n(z_0)}=\overline{0}=0$, da cui $P_n(\overline{z_0})=0$.

Se $z_0$ ha molteplicità $m$, allora $P_n(z)=(z-z_0)^mQ(z)$ con $Q(z_0)\neq 0$. Poiché $P_n$ ha coefficienti reali, coniugando i coefficienti della fattorizzazione si ottiene $P_n(z)=(z-\overline{z_0})^mQ^*(z)$, dove $Q^*(z)=\overline{Q(\overline z)}$. Inoltre $Q^*(\overline{z_0})=\overline{Q(z_0)}\neq 0$, quindi anche $\overline{z_0}$ ha molteplicità $m$.

Di conseguenza, le radici non reali di un polinomio reale si presentano sempre **a coppie coniugate** $z_0, \overline{z_0}$, con la stessa molteplicità. Raggruppando ciascuna coppia si ottiene un fattore reale di secondo grado:

$$
(z-z_0)(z-\overline{z_0}) = z^2 - 2\operatorname{Re}(z_0)\, z + |z_0|^2,
$$

che ha discriminante negativo e non è ulteriormente fattorizzabile in fattori reali di primo grado. Questo è il motivo per cui ogni polinomio a coefficienti reali si fattorizza, sui reali, in fattori di primo grado (corrispondenti alle radici reali) e fattori di secondo grado a discriminante negativo (corrispondenti alle coppie di radici complesse coniugate).

Un caso particolare, ma molto usato negli esercizi, riguarda il grado dispari.

**Corollario 2.1.** Sia $P_n$ un polinomio a coefficienti reali di grado dispari ($n$ dispari). Allora $P_n$ ha almeno una radice reale, cioè esiste $x_0 \in \mathbb{R}$ tale che $P_n(x_0)=0$.

Questo segue immediatamente dal fatto che le radici non reali si presentano a coppie: se $n$ è dispari, non tutte le $n$ radici possono essere ripartite in coppie coniugate, quindi almeno una radice deve essere reale.

### Esempio svolto: risolvere e fattorizzare

Consideriamo l'equazione $z^3 - 3z^2 + 4z - 2 = 0$ con $z \in \mathbb{C}$.

I coefficienti sono reali, quindi conviene cercare prima eventuali radici reali semplici, per esempio tra i divisori del termine noto. Si verifica che $z=1$ è radice:

$$
1 - 3 + 4 - 2 = 0.
$$

Per il teorema di Ruffini, $(z-1)$ divide il polinomio. Eseguendo la divisione si ottiene

$$
z^3 - 3z^2 + 4z - 2 = (z-1)(z^2 - 2z + 2).
$$

Risolviamo ora $z^2-2z+2=0$ con la formula risolutiva:

$$
z = \frac{2 \pm \sqrt{4-8}}{2} = \frac{2 \pm \sqrt{-4}}{2} = \frac{2 \pm 2i}{2} = 1 \pm i.
$$

Le tre radici complesse del polinomio sono quindi

$$
z_1 = 1, \qquad z_2 = 1+i, \qquad z_3 = 1-i,
$$

e, come previsto dalla proposizione precedente, $z_2$ e $z_3$ sono una coppia di radici coniugate, poiché il polinomio ha coefficienti reali. La fattorizzazione completa in $\mathbb{C}$ è

$$
z^3 - 3z^2 + 4z - 2 = (z-1)\bigl(z-(1+i)\bigr)\bigl(z-(1-i)\bigr),
$$

mentre la fattorizzazione in $\mathbb{R}$, ottenuta raggruppando la coppia coniugata, resta

$$
z^3 - 3z^2 + 4z - 2 = (z-1)(z^2-2z+2).
$$

### Esempio svolto: equazione con potenza $n$-esima

L'equazione $z^n - a = 0$, con $a \in \mathbb{C}$ non nullo, è un caso particolare di equazione polinomiale di grado $n$: le sue $n$ soluzioni sono esattamente le radici $n$-esime di $a$, calcolate con la formula vista nella sezione sulle [radici $n$-esime](ref:chapter/2#p4). Per esempio, per $z^4+16=0$ si scrive $z^4 = -16 = 16\, e^{i\pi}$, e le quattro soluzioni sono $z_k = 2\,e^{i(\pi+2k\pi)/4}$ per $k=0,1,2,3$; coerentemente con quanto appena dimostrato, essendo il polinomio $z^4+16$ a coefficienti reali, le quattro radici si dispongono in due coppie coniugate.

### Errori tipici

Uno sbaglio frequente consiste nel credere che un polinomio reale di grado pari debba sempre avere almeno una radice reale: non è vero, come mostra $z^2+1=0$, che ha solo le due radici coniugate $\pm i$. Il corollario sul grado dispari garantisce l'esistenza di una radice reale **solo** quando il grado è dispari.

Un secondo errore è dimenticare che il conteggio "un polinomio di grado $n$ ha $n$ radici" vale solo se le radici si contano **con la loro molteplicità**: un polinomio come $(z-1)^2(z+3)$ ha grado $3$ ma solo due radici distinte, $1$ (doppia) e $-3$ (semplice).

Infine, va ricordato che la proprietà delle radici coniugate vale **esclusivamente per i polinomi a coefficienti reali**: se il polinomio ha anche un solo coefficiente complesso non reale, le radici non reali non sono in generale accoppiate con il loro coniugato, e serve ricalcolare caso per caso con i metodi delle sezioni precedenti su [forma algebrica](ref:chapter/2#p2), [forma trigonometrica ed esponenziale](ref:chapter/2#p3) e [radici $n$-esime](ref:chapter/2#p4).
