---
type: esercizi
printable: true
---

:::exercise{id="E1.1" chapter="1" difficulty="medio"}
## Domanda
Siano $\vec{a}=(1,2)$ e $\vec{b}=(3,4)$ due vettori nel piano cartesiano. Calcola $\vec{a}\cdot\vec{b}$, i moduli dei due vettori e il coseno dell’angolo compreso tra essi.

:::hint
Usa il prodotto scalare in componenti e la relazione tra prodotto scalare, moduli e coseno dell’angolo.
:::

:::solution
Il prodotto scalare è {{formula:1.8}}:
$\displaystyle \vec{a}\cdot\vec{b}=1\cdot3+2\cdot4=11.$
I moduli sono
$\displaystyle |\vec{a}|=\sqrt{1^2+2^2}=\sqrt{5},\qquad |\vec{b}|=\sqrt{3^2+4^2}=5.$
Per la definizione di prodotto scalare {{formula:1.7}}, si ha $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\theta$. Pertanto
$\displaystyle \cos\theta=\frac{11}{5\sqrt{5}}.$
:::
:::

:::exercise{id="E1.2" chapter="1" difficulty="facile"}
## Domanda
Nel piano cartesiano, un vettore ha componenti $\vec{v}=(-3,4)$. Calcola il suo modulo e scrivi il versore che ha la stessa direzione e lo stesso verso di $\vec{v}$.

:::hint
Calcola il modulo con le componenti cartesiane; dividi poi ciascuna componente per il modulo.
:::

:::solution
Il modulo è {{formula:1.5}}:
$\displaystyle |\vec{v}|=\sqrt{(-3)^2+4^2}=5.$
Il versore concorde con $\vec{v}$ si ottiene dividendo il vettore per il suo modulo:
$\displaystyle \hat{v}=\frac{\vec{v}}{|\vec{v}|}=\left(-\frac{3}{5},\frac{4}{5}\right).$
Il suo modulo è $\sqrt{(3/5)^2+(4/5)^2}=1$, come richiesto.
:::
:::

:::exercise{id="E1.3" chapter="1" difficulty="medio"}
## Domanda
Quattro misure ripetute del tempo di percorrenza sono $1{,}8\,\mathrm{s}$, $2{,}0\,\mathrm{s}$, $2{,}2\,\mathrm{s}$ e $2{,}0\,\mathrm{s}$. Usa la varianza empirica $s^2=\frac{1}{n}\sum_{i=1}^{n}(x_i-\bar{x})^2$ e l’errore standard empirico $s_{\bar{x}}=\sqrt{\frac{s^2}{n}}$. Determina la media, la varianza empirica e l’errore standard empirico.

:::hint
Trova prima la media, poi calcola gli scarti dalla media e i loro quadrati. Infine applica le due definizioni fornite nel testo.
:::

:::solution
La media è

$$
\bar{x}=\frac{1{,}8+2{,}0+2{,}2+2{,}0}{4}\,\mathrm{s}=2{,}0\,\mathrm{s}.
$$

Gli scarti dalla media sono $-0{,}2\,\mathrm{s}$, $0$, $0{,}2\,\mathrm{s}$ e $0$. La varianza empirica è {{formula:1.2}}:

$$
s^2=\frac{(-0{,}2)^2+0^2+(0{,}2)^2+0^2}{4}\,\mathrm{s}^2=0{,}02\,\mathrm{s}^2.
$$

L’errore standard empirico è {{formula:1.3}}:

$$
s_{\bar{x}}=\sqrt{\frac{0{,}02}{4}}\,\mathrm{s}=\sqrt{0{,}005}\,\mathrm{s}\approx0{,}071\,\mathrm{s}.
$$
:::
:::

:::exercise{id="E1.4" chapter="1" difficulty="facile"}
## Domanda
Cinque misure ripetute della lunghezza di un oggetto sono $10{,}2\,\mathrm{cm}$, $10{,}4\,\mathrm{cm}$, $10{,}3\,\mathrm{cm}$, $10{,}1\,\mathrm{cm}$ e $10{,}5\,\mathrm{cm}$. Calcola la media e la semidispersione massima e scrivi il risultato della misura nella forma $\bar{x}\pm\Delta x$.

:::hint
Calcola la media aritmetica; per la semidispersione massima usa metà della differenza tra il valore maggiore e quello minore.
:::

:::solution
La media è

$$
\bar{x}=\frac{10{,}2+10{,}4+10{,}3+10{,}1+10{,}5}{5}\,\mathrm{cm}=10{,}3\,\mathrm{cm}.
$$

La semidispersione massima è {{formula:1.1}}:

$$
\Delta x=\frac{10{,}5-10{,}1}{2}\,\mathrm{cm}=0{,}2\,\mathrm{cm}.
$$

Quindi la misura è $(10{,}3\pm0{,}2)\,\mathrm{cm}$.
:::
:::

:::exercise{id="E1.5" chapter="1" difficulty="difficile"}
## Domanda
Una lunghezza di riferimento è $L_0=10{,}00\,\mathrm{cm}$. Due strumenti producono le serie $A=(9{,}9;10{,}0;10{,}1;10{,}0)\,\mathrm{cm}$ e $B=(10{,}1;10{,}2;10{,}1;10{,}2)\,\mathrm{cm}$. Per ciascuna serie calcola la media e la varianza empirica definita da $s^2=\frac{1}{n}\sum_{i=1}^{n}(x_i-\bar{x})^2$. Confronta la precisione tramite le varianze e l’accuratezza tramite la distanza tra la media e $L_0$; stabilisci quale strumento è più preciso e quale fornisce una media più vicina al riferimento.

:::hint
Calcola separatamente media, varianza e distanza dal riferimento per ciascuna serie. Una varianza minore indica misure più raggruppate, mentre una distanza minore dalla lunghezza di riferimento indica una media più vicina al valore di riferimento.
:::

:::solution
Per la serie $A$, la media è $\bar{x}_A=10{,}00\,\mathrm{cm}$. Gli scarti sono $-0{,}1\,\mathrm{cm}$, $0$, $0{,}1\,\mathrm{cm}$ e $0$, quindi {{formula:1.2}} dà

$$
s_A^2=\frac{0{,}01+0+0{,}01+0}{4}\,\mathrm{cm}^2=0{,}005\,\mathrm{cm}^2.
$$

La distanza della media dal riferimento è $|\bar{x}_A-L_0|=0{,}00\,\mathrm{cm}$. Per la serie $B$, la media è $\bar{x}_B=10{,}15\,\mathrm{cm}$. Gli scarti sono $-0{,}05\,\mathrm{cm}$, $0{,}05\,\mathrm{cm}$, $-0{,}05\,\mathrm{cm}$ e $0{,}05\,\mathrm{cm}$, dunque

$$
s_B^2=\frac{4(0{,}05)^2}{4}\,\mathrm{cm}^2=0{,}0025\,\mathrm{cm}^2.
$$

La distanza dal riferimento è $|\bar{x}_B-L_0|=0{,}15\,\mathrm{cm}$. Poiché $s_B^2<s_A^2$, lo strumento $B$ è più preciso secondo il criterio della varianza. Poiché $|\bar{x}_A-L_0|<|\bar{x}_B-L_0|$, la media della serie $A$ è più vicina al riferimento.
:::
:::

:::exercise{id="E1.6" chapter="1" difficulty="difficile"}
## Domanda
In $\mathbb{R}^3$ siano $\vec{a}=(1,2,0)$ e $\vec{b}=(2,-1,2)$. Calcola $\vec{a}\times\vec{b}$, l’area del parallelogramma avente questi vettori come lati e un versore normale al piano che li contiene.

:::hint
Calcola il prodotto vettoriale componente per componente. Il suo modulo è l’area del parallelogramma; dividere il prodotto vettoriale per il suo modulo dà un versore normale.
:::

:::solution
Il prodotto vettoriale, calcolato con il determinante {{formula:1.10}}, è
$$
\vec{a}\times\vec{b}=
\begin{vmatrix}
\hat{\imath}&\hat{\jmath}&\hat{k}\\
1&2&0\\
2&-1&2
\end{vmatrix}
=(4,-2,-5).
$$
Il modulo è
$$
|\vec{a}\times\vec{b}|=\sqrt{4^2+(-2)^2+(-5)^2}=\sqrt{45}=3\sqrt{5}.
$$
Per la formula del modulo del prodotto vettoriale {{formula:1.9}}, questo modulo è l’area del parallelogramma. Un versore normale è il prodotto vettoriale diviso per il suo modulo:
$$
\hat{n}=\frac{\vec{a}\times\vec{b}}{|\vec{a}\times\vec{b}|}=\left(\frac{4}{3\sqrt{5}},-\frac{2}{3\sqrt{5}},-\frac{5}{3\sqrt{5}}\right).
$$
:::
:::

:::exercise{id="E2.1" chapter="2" difficulty="medio"}
## Domanda
Un oscillatore armonico ha ampiezza $A=0.12\,\mathrm{m}$ e periodo $T=0.8\,\mathrm{s}$. Quando si trova nella posizione $x=0.072\,\mathrm{m}$ si muove nel verso positivo. Determina la velocità in quell’istante e l’accelerazione.

:::hint
Calcola prima la pulsazione da periodo e frequenza. Per la velocità usa la relazione tra velocità e posizione {{formula:2.19}}; l’accelerazione è proporzionale alla posizione e diretta verso l’equilibrio.
:::

:::solution
La pulsazione vale $\omega=2\pi/T=5\pi/2\,\mathrm{s^{-1}}$. Dalla relazione tra velocità e posizione, $v^2=\omega^2(A^2-x^2)$, si ha $A^2-x^2=0.12^2-0.072^2=0.009216\,\mathrm{m^2}$ e quindi $\sqrt{A^2-x^2}=0.096\,\mathrm{m}$. Poiché il punto si muove nel verso positivo, $v=\omega\sqrt{A^2-x^2}=0.24\pi\,\mathrm{m/s}$. L’accelerazione è $a=-\omega^2x=-(5\pi/2)^2\cdot0.072=-0.45\pi^2\,\mathrm{m/s^2}$.
:::
:::

:::exercise{id="E2.2" chapter="2" difficulty="difficile"}
## Domanda
In un certo istante un punto ha vettore posizione rispetto al centro della circonferenza $\vec r=(3,4,0)\,\mathrm{m}$ e si muove su una circonferenza centrata nell’origine. La velocità angolare è $\vec\omega=(0,0,2)\,\mathrm{rad/s}$ e l’accelerazione angolare è $\vec\alpha=(0,0,-1)\,\mathrm{rad/s^2}$. Determina i vettori velocità e accelerazione in quell’istante.

:::hint
Usa $\vec v=\vec\omega\times\vec r$ e $\vec a=\vec\alpha\times\vec r+\vec\omega\times(\vec\omega\times\vec r)$. Valuta separatamente i prodotti vettoriali.
:::

:::solution
Il vettore velocità è $\vec v=\vec\omega\times\vec r=(0,0,2)\times(3,4,0)=(-8,6,0)\,\mathrm{m/s}$. Per l’accelerazione angolare, $\vec\alpha\times\vec r=(0,0,-1)\times(3,4,0)=(4,-3,0)\,\mathrm{m/s^2}$. Il termine centripeto è $\vec\omega\times(\vec\omega\times\vec r)=(-12,-16,0)\,\mathrm{m/s^2}$. Sommando i due contributi si ottiene $\vec a=(-8,-19,0)\,\mathrm{m/s^2}$.
:::
:::

:::exercise{id="E2.3" chapter="2" difficulty="facile"}
## Domanda
Un punto percorre una circonferenza di raggio $0.5\,\mathrm{m}$ compiendo $120$ giri al minuto con moto circolare uniforme. Determina la velocità angolare, il modulo della velocità lineare e il modulo dell’accelerazione centripeta.

:::hint
Converti i giri al minuto in giri al secondo. Poi usa le relazioni tra velocità angolare, velocità lineare e accelerazione centripeta.
:::

:::solution
La frequenza è $f=120/60=2\,\mathrm{Hz}$, quindi la velocità angolare è $\omega=2\pi f=4\pi\,\mathrm{rad/s}$. La velocità lineare vale $v=\omega r=4\pi\cdot0.5=2\pi\,\mathrm{m/s}$. L’accelerazione centripeta è $a_c=\omega^2r=(4\pi)^2\cdot0.5=8\pi^2\,\mathrm{m/s^2}$.
:::
:::

:::exercise{id="E2.4" chapter="2" difficulty="facile"}
## Domanda
La posizione di un punto nel piano è descritta da $x(t)=t^2$ e $y(t)=2t$, con coordinate in metri e tempo in secondi. Determina i vettori velocità e accelerazione all’istante $t=1\,\mathrm{s}$ e il modulo della velocità.

:::hint
Deriva separatamente le due coordinate una volta per ottenere la velocità e due volte per ottenere l’accelerazione.
:::

:::solution
Le componenti della velocità sono $v_x=dx/dt=2t$ e $v_y=dy/dt=2$. A $t=1\,\mathrm{s}$, $\vec v=(2,2)\,\mathrm{m/s}$, il cui modulo è $|\vec v|=\sqrt{2^2+2^2}=2\sqrt2\,\mathrm{m/s}$. Le componenti dell’accelerazione sono $a_x=2$ e $a_y=0$, quindi $\vec a=(2,0)\,\mathrm{m/s^2}$.
:::
:::

:::exercise{id="E2.5" chapter="2" difficulty="medio"}
## Domanda
La traiettoria di un proiettile lanciato da terra è descritta da $y=x-x^2/20$, con $x$ e $y$ in metri. Assumendo $g=10\,\mathrm{m/s^2}$ e trascurando l’aria, determina le componenti della velocità iniziale, il modulo della velocità iniziale e l’angolo di lancio.

:::hint
Confronta i coefficienti con l’equazione della traiettoria parabolica. Il coefficiente di $x$ determina il rapporto tra le componenti iniziali; quello di $x^2$ permette di ricavare la componente orizzontale.
:::

:::solution
La traiettoria ha forma $y=x\tan\theta-\frac{g}{2v_{0x}^2}x^2$. Dal coefficiente di $x$ ricaviamo $\tan\theta=1$, quindi $v_{0y}/v_{0x}=1$. Dal coefficiente quadratico, $g/(2v_{0x}^2)=1/20$, perciò $v_{0x}^2=100$ e $v_{0x}=10\,\mathrm{m/s}$. Ne segue $v_{0y}=10\,\mathrm{m/s}$, il modulo è $v_0=\sqrt{10^2+10^2}=10\sqrt2\,\mathrm{m/s}$ e l’angolo è $\theta=45^\circ$.
:::
:::

:::exercise{id="E2.6" chapter="2" difficulty="facile"}
## Domanda
Due punti si muovono sulla stessa retta secondo le leggi orarie $x_A(t)=10+2t$ e $x_B(t)=-2+5t$, con le posizioni in metri e il tempo in secondi. Determina quando si incontrano e la posizione dell’incontro.

:::hint
All’incontro le due posizioni coincidono. Uguaglia le leggi orarie e sostituisci il tempo trovato in una di esse.
:::

:::solution
Imponiamo $x_A(t)=x_B(t)$: $10+2t=-2+5t$, quindi $12=3t$ e $t=4\,\mathrm{s}$. La posizione è $x_A(4)=10+2\cdot4=18\,\mathrm{m}$. I due punti si incontrano dopo $4\,\mathrm{s}$ nella posizione $18\,\mathrm{m}$.
:::
:::

:::exercise{id="E2.7" chapter="2" difficulty="medio"}
## Domanda
Un punto si muove su una circonferenza di raggio $0.2\,\mathrm{m}$ con accelerazione angolare costante $3\,\mathrm{rad/s^2}$. All’istante iniziale la velocità angolare è $2\,\mathrm{rad/s}$ e la posizione angolare è zero. Determina dopo $4\,\mathrm{s}$ la velocità angolare, lo spostamento angolare, la velocità lineare, l’accelerazione tangenziale e l’accelerazione centripeta.

:::hint
Applica le leggi del moto circolare uniformemente accelerato per trovare velocità e spostamento angolari. Ricava poi le grandezze lineari dal raggio.
:::

:::solution
La velocità angolare dopo $4\,\mathrm{s}$ è $\omega=\omega_0+\alpha t=2+3\cdot4=14\,\mathrm{rad/s}$. Lo spostamento angolare è $\Delta\theta=\omega_0t+\frac12\alpha t^2=2\cdot4+\frac12\cdot3\cdot16=32\,\mathrm{rad}$. La velocità lineare vale $v=r\omega=0.2\cdot14=2.8\,\mathrm{m/s}$. L’accelerazione tangenziale è $a_t=r\alpha=0.2\cdot3=0.6\,\mathrm{m/s^2}$ e quella centripeta è $a_c=r\omega^2=0.2\cdot14^2=39.2\,\mathrm{m/s^2}$.
:::
:::

:::exercise{id="E2.8" chapter="2" difficulty="difficile"}
## Domanda
Un proiettile è lanciato da una piattaforma alta $15\,\mathrm{m}$ con componenti iniziali della velocità $v_{0x}=12\,\mathrm{m/s}$ e $v_{0y}=16\,\mathrm{m/s}$. Con $g=10\,\mathrm{m/s^2}$ e trascurando la resistenza dell’aria, determina il tempo per raggiungere il suolo, la distanza orizzontale percorsa e il modulo della velocità d’impatto.

:::hint
Trova il tempo positivo imponendo quota nulla nella legge verticale. Usa poi il moto orizzontale uniforme e calcola il modulo della velocità dalle sue componenti all’impatto.
:::

:::solution
La quota è $y(t)=15+16t-5t^2$. Ponendo $y(t)=0$ si ottiene $t^2-3.2t-3=0$, dunque $t=(16+\sqrt{556})/10=(8+\sqrt{139})/5\,\mathrm{s}$ per la radice positiva. La distanza orizzontale è $x=v_{0x}t=12(8+\sqrt{139})/5\,\mathrm{m}$. All’impatto la componente verticale della velocità è $v_y=16-10t=-2\sqrt{139}\,\mathrm{m/s}$, mentre quella orizzontale resta $12\,\mathrm{m/s}$. Il modulo della velocità è $\sqrt{12^2+(-2\sqrt{139})^2}=\sqrt{700}=10\sqrt7\,\mathrm{m/s}$.
:::
:::

:::exercise{id="E2.9" chapter="2" difficulty="medio"}
## Domanda
Un punto si muove lungo una retta con legge oraria $x(t)=4+3t+2t^2$, dove $x$ è in metri e $t$ in secondi. Determina l’istante in cui la velocità vale $15\,\mathrm{m/s}$ e la posizione del punto in quell’istante.

:::hint
Deriva la legge oraria per ottenere la velocità. Risolvi poi l’equazione per il tempo e calcola la posizione.
:::

:::solution
La velocità è $v(t)=\frac{dx}{dt}=3+4t$. Ponendo $v(t)=15\,\mathrm{m/s}$ si ottiene $3+4t=15$, dunque $t=3\,\mathrm{s}$. Sostituendo nella legge oraria, $x(3)=4+3\cdot3+2\cdot3^2=31\,\mathrm{m}$. L’istante richiesto è $3\,\mathrm{s}$ e la posizione è $31\,\mathrm{m}$.
:::
:::

:::exercise{id="E2.10" chapter="2" difficulty="medio"}
## Domanda
Un corpo viene lanciato verticalmente verso l’alto da una rupe alta $45\,\mathrm{m}$ con velocità iniziale $5\,\mathrm{m/s}$. Con $g=10\,\mathrm{m/s^2}$ e trascurando l’aria, determina il tempo in cui raggiunge il suolo e la sua velocità d’impatto.

:::hint
Scrivi la quota rispetto al suolo e imponila uguale a zero. Sostituisci il tempo positivo nella legge della velocità.
:::

:::solution
Con il suolo come quota nulla, la posizione è $y(t)=45+5t-5t^2$. Ponendo $y(t)=0$ si ottiene $t^2-t-9=0$, le cui soluzioni sono $t=(1\pm\sqrt{37})/2$. Il tempo fisicamente accettabile è $t=(1+\sqrt{37})/2\,\mathrm{s}$. La velocità è $v(t)=5-10t$; sostituendo il tempo trovato, $v=5-5(1+\sqrt{37})=-5\sqrt{37}\,\mathrm{m/s}$. Il segno negativo indica che il moto è diretto verso il basso.
:::
:::

:::exercise{id="E2.11" chapter="2" difficulty="difficile"}
## Domanda
Un sasso viene lasciato cadere da fermo da una torre alta $80\,\mathrm{m}$. Nello stesso istante un secondo sasso viene lanciato verticalmente verso l’alto dal suolo con velocità iniziale $30\,\mathrm{m/s}$. Assumendo $g=10\,\mathrm{m/s^2}$ e trascurando la resistenza dell’aria, determina quando e a quale quota si incrociano.

:::hint
Scrivi le due quote con la stessa origine e lo stesso asse verticale. Poiché i sassi hanno la stessa accelerazione, i termini quadratici si semplificano nel confronto.
:::

:::solution
Misurando la quota dal suolo, il sasso lasciato cadere ha $y_1(t)=80-5t^2$, mentre quello lanciato dal suolo ha $y_2(t)=30t-5t^2$. All’incrocio $y_1=y_2$, quindi $80=30t$ e $t=8/3\,\mathrm{s}$. La quota d’incrocio è $y=30\cdot(8/3)-5\cdot(8/3)^2=80-320/9=400/9\,\mathrm{m}$.
:::
:::

:::exercise{id="E2.12" chapter="2" difficulty="difficile"}
## Domanda
In coordinate polari, un punto ha $r(t)=2+t\,\mathrm{m}$ e $\theta(t)=t^2\,\mathrm{rad}$, con $t$ espresso in secondi. Determina all’istante $t=1\,\mathrm{s}$ le componenti radiale e trasversa della velocità e dell’accelerazione, e il modulo dell’accelerazione.

:::hint
Usa le espressioni polari della velocità e dell’accelerazione. Valuta prima $r$, $\dot r$, $\ddot r$, $\dot\theta$ e $\ddot\theta$ all’istante richiesto.
:::

:::solution
All’istante $t=1\,\mathrm{s}$ si ha $r=3\,\mathrm{m}$, $\dot r=1\,\mathrm{m/s}$, $\ddot r=0$, $\dot\theta=2\,\mathrm{s^{-1}}$ e $\ddot\theta=2\,\mathrm{s^{-2}}$. Le componenti della velocità sono $v_r=\dot r=1\,\mathrm{m/s}$ e $v_\theta=r\dot\theta=6\,\mathrm{m/s}$. Quelle dell’accelerazione sono $a_r=\ddot r-r\dot\theta^2=-12\,\mathrm{m/s^2}$ e $a_\theta=r\ddot\theta+2\dot r\dot\theta=10\,\mathrm{m/s^2}$. Il modulo vale $|\vec a|=\sqrt{(-12)^2+10^2}=2\sqrt{61}\,\mathrm{m/s^2}$.
:::
:::

:::exercise{id="E2.13" chapter="2" difficulty="difficile"}
## Domanda
Un oscillatore armonico ha pulsazione $\omega=2\,\mathrm{s^{-1}}$. In un certo istante si trova in $x=5\,\mathrm{cm}$ e ha velocità $v=12\,\mathrm{cm/s}$. Determina l’ampiezza e il tempo minimo, a partire da quell’istante, in cui raggiunge un punto di inversione.

:::hint
Ricava l’ampiezza dalla relazione tra velocità e posizione. Poiché posizione e velocità sono positive, il punto si sta dirigendo verso l’estremo positivo; determina quanto manca alla fase corrispondente.
:::

:::solution
Dalla relazione $v^2=\omega^2(A^2-x^2)$ ricaviamo $A^2=x^2+(v/\omega)^2=5^2+(12/2)^2=61\,\mathrm{cm^2}$, quindi $A=\sqrt{61}\,\mathrm{cm}$. Nella forma $x=A\cos\theta$, la fase corrente soddisfa $\cos\theta=5/\sqrt{61}$ e, poiché $v=-A\omega\sin\theta$ è positiva, $\sin\theta=-6/\sqrt{61}$. La fase è dunque $\theta=-\arctan(6/5)$. Il punto raggiunge l’estremo positivo quando la fase arriva a zero; l’incremento di fase richiesto è $\arctan(6/5)$. Dividendo per $\omega=2\,\mathrm{s^{-1}}$, il tempo minimo è $t=\frac12\arctan(6/5)\,\mathrm{s}$.
:::
:::

:::exercise{id="E2.14" chapter="2" difficulty="facile"}
## Domanda
Un corpo è lanciato verticalmente verso l’alto dal suolo con velocità iniziale $20\,\mathrm{m/s}$. Trascurando la resistenza dell’aria e ponendo $g=10\,\mathrm{m/s^2}$, determina il tempo necessario per raggiungere la quota massima e tale quota.

:::hint
Alla quota massima la velocità verticale è nulla. Usa le leggi del moto verticale {{formula:2.9}} e {{formula:2.10}}.
:::

:::solution
Prendiamo verso l’alto come verso positivo. La velocità è $v(t)=20-10t$. Alla quota massima $v=0$, quindi $20-10t=0$ e $t=2\,\mathrm{s}$. La quota è $y(t)=20t-\frac12gt^2$; pertanto $y(2)=20\cdot2-5\cdot2^2=20\,\mathrm{m}$. Il corpo raggiunge la quota massima dopo $2\,\mathrm{s}$ e sale fino a $20\,\mathrm{m}$.
:::
:::

:::exercise{id="E2.15" chapter="2" difficulty="facile"}
## Domanda
Un proiettile viene lanciato dal suolo con velocità iniziale $20\,\mathrm{m/s}$ formando un angolo di $30^\circ$ con l’orizzontale. Trascurando l’aria e ponendo $g=10\,\mathrm{m/s^2}$, determina il tempo di volo e la gittata.

:::hint
Scomponi la velocità iniziale nelle componenti orizzontale e verticale. Il tempo di volo si trova imponendo quota finale nulla.
:::

:::solution
Le componenti iniziali sono $v_{0x}=20\cos30^\circ=10\sqrt3\,\mathrm{m/s}$ e $v_{0y}=20\sin30^\circ=10\,\mathrm{m/s}$. La quota è $y(t)=10t-5t^2$; oltre all’istante iniziale, si annulla a $t=2\,\mathrm{s}$. La gittata è $R=v_{0x}t=10\sqrt3\cdot2=20\sqrt3\,\mathrm{m}$.
:::
:::

:::exercise{id="E2.16" chapter="2" difficulty="medio"}
## Domanda
Un punto si muove lungo l’ellisse parametrizzata da $x(t)=3\cos(2t)$ e $y(t)=4\sin(2t)$, con coordinate in metri e tempo in secondi. Determina il modulo della velocità, le componenti tangenziale e normale dell’accelerazione e il modulo dell’accelerazione all’istante $t=0$.

:::hint
Calcola velocità e accelerazione derivando le coordinate. Proietta l’accelerazione sulla direzione della velocità per trovare la componente tangenziale; la componente normale è quella perpendicolare.
:::

:::solution
Derivando, $\vec v(t)=(-6\sin(2t),8\cos(2t))$ e $\vec a(t)=(-12\cos(2t),-16\sin(2t))$. A $t=0$ si ottengono $\vec v=(0,8)\,\mathrm{m/s}$ e $\vec a=(-12,0)\,\mathrm{m/s^2}$. Il modulo della velocità è $8\,\mathrm{m/s}$. Poiché $\vec a\cdot\vec v=0$, la componente tangenziale è nulla e l’accelerazione è interamente normale; il suo modulo è $\sqrt{(-12)^2}=12\,\mathrm{m/s^2}$.
:::
:::

:::exercise{id="E2.17" chapter="2" difficulty="difficile"}
## Domanda
Un punto parte da fermo dalla posizione $x=0$ e accelera con accelerazione costante $2\,\mathrm{m/s^2}$ per $5\,\mathrm{s}$. Subito dopo prosegue per altri $5\,\mathrm{s}$ con accelerazione costante $-4\,\mathrm{m/s^2}$. Determina la massima posizione raggiunta, lo spazio percorso nei $10\,\mathrm{s}$ e la velocità media sull’intero intervallo.

:::hint
Calcola velocità e posizione alla fine di ciascuna fase. Nella seconda fase individua quando la velocità si annulla per trovare il punto di inversione.
:::

:::solution
Nella prima fase, partendo da fermo, la velocità finale è $v_1=2\cdot5=10\,\mathrm{m/s}$ e lo spostamento è $s_1=\frac12\cdot2\cdot5^2=25\,\mathrm{m}$. La seconda fase inizia da $x=25\,\mathrm{m}$ con velocità $10\,\mathrm{m/s}$. La velocità si annulla dopo $\Delta t=10/4=2.5\,\mathrm{s}$, quindi il punto raggiunge la posizione massima $x_{\max}=25+10\cdot2.5-\frac12\cdot4\cdot2.5^2=37.5\,\mathrm{m}$. Nei restanti $2.5\,\mathrm{s}$ percorre a ritroso $\frac12\cdot4\cdot2.5^2=12.5\,\mathrm{m}$, perciò nella seconda fase percorre complessivamente $25\,\mathrm{m}$. Lo spazio totale è $25+25=50\,\mathrm{m}$; lo spostamento totale è $25+10\cdot5-\frac12\cdot4\cdot5^2=25\,\mathrm{m}$. La velocità media è spostamento diviso tempo, cioè $25/10=2.5\,\mathrm{m/s}$.
:::
:::

:::exercise{id="E2.18" chapter="2" difficulty="facile"}
## Domanda
Un oscillatore armonico ha pulsazione $\omega=2\,\mathrm{s^{-1}}$ e condizioni iniziali $x(0)=3\,\mathrm{cm}$ e $v(0)=4\,\mathrm{cm/s}$. Determina l’ampiezza, la fase iniziale $\varphi$ nella convenzione $x(t)=A\cos(\omega t+\varphi)$ e la legge oraria.

:::hint
Usa le condizioni iniziali nella legge oraria e nella sua derivata. L’ampiezza si ricava da $A^2=x(0)^2+\lbrack v(0)/\omega\rbrack ^2$.
:::

:::solution
Dalla forma $x(t)=A\cos(2t+\varphi)$ segue $x(0)=A\cos\varphi=3$ e $v(0)=-2A\sin\varphi=4$, con le lunghezze espresse in centimetri. Quindi $A=\sqrt{3^2+(4/2)^2}=\sqrt{13}\,\mathrm{cm}$. Inoltre $\cos\varphi=3/\sqrt{13}$ e $\sin\varphi=-2/\sqrt{13}$, dunque $\varphi=-\arctan(2/3)$, scegliendo la fase nell’intervallo $(-\pi/2,\pi/2)$. La legge oraria è $x(t)=\sqrt{13}\cos(2t-\arctan(2/3))\,\mathrm{cm}$.
:::
:::

:::exercise{id="E3.1" chapter="3" difficulty="facile"}
## Domanda
Su un punto materiale di massa $3{,}0\,\mathrm{kg}$ agisce una forza risultante costante di modulo $12\,\mathrm{N}$. Calcola il modulo dell’accelerazione.

:::hint
Applica la seconda legge della dinamica alla forza risultante.
:::

:::solution
Dalla seconda legge, $F_{\mathrm{ris}}=ma$. Quindi $a=F_{\mathrm{ris}}/m=(12\,\mathrm{N})/(3{,}0\,\mathrm{kg})=4{,}0\,\mathrm{m/s^2}$.
:::
:::

:::exercise{id="E3.2" chapter="3" difficulty="facile"}
## Domanda
Un blocco di massa $4{,}0\,\mathrm{kg}$ è fermo su un piano orizzontale. Il coefficiente di attrito statico è $\mu_s=0{,}40$. Si applica una forza orizzontale di $10\,\mathrm{N}$ e il blocco resta fermo. Calcola il modulo della forza di attrito e il massimo attrito statico possibile. Assumi $g=9{,}8\,\mathrm{m/s^2}$.

:::hint
Finché il blocco resta fermo, l’attrito statico equilibra la forza applicata. Il suo valore massimo è proporzionale alla normale.
:::

:::solution
Poiché il blocco è fermo, la risultante orizzontale è nulla e la forza di attrito ha modulo $10\,\mathrm{N}$. La normale vale $N=mg=(4{,}0)(9{,}8)=39{,}2\,\mathrm{N}$. L’attrito statico massimo è $f_{s,\max}=\mu_sN=(0{,}40)(39{,}2)=15{,}68\,\mathrm{N}$. Il valore richiesto è minore del massimo, coerentemente con l’assenza di moto.
:::
:::

:::exercise{id="E3.3" chapter="3" difficulty="difficile"}
## Domanda
Un blocco di massa $2{,}0\,\mathrm{kg}$ parte da fermo da $x=0$ su una guida orizzontale liscia. Lungo la guida agisce una forza $F_x(x)=(10-2x)\,\mathrm{N}$, con $x$ espresso in metri. Determina la velocità quando il blocco raggiunge $x=3{,}0\,\mathrm{m}$ e la massima ascissa raggiunta prima di fermarsi.

:::hint
Combina $m a=F(x)$ con $a=v\,dv/dx$. Integra tra la posizione iniziale e quella generica e imponi le condizioni di partenza e di arresto.
:::

:::solution
Dalla relazione cinematica $a=v\,dv/dx$, la dinamica diventa $m v\,dv=(10-2x)\,dx$. Integrando da $x=0$, $v=0$ alla posizione $x$, si trova $\frac12 m v^2=10x-x^2$. Con $m=2{,}0\,\mathrm{kg}$, $v^2=10x-x^2$. A $x=3{,}0\,\mathrm{m}$, $v=\sqrt{30-9}=\sqrt{21}\,\mathrm{m/s}\simeq4{,}58\,\mathrm{m/s}$. Il punto di arresto successivo soddisfa $10x-x^2=0$, cioè $x=0$ oppure $x=10\,\mathrm{m}$. La massima ascissa raggiunta è quindi $10\,\mathrm{m}$.
:::
:::

:::exercise{id="E3.4" chapter="3" difficulty="medio"}
## Domanda
Una molla verticale ideale di costante elastica $100\,\mathrm{N/m}$ sostiene una massa di $2{,}0\,\mathrm{kg}$ in equilibrio. Assumendo $g=9{,}8\,\mathrm{m/s^2}$, determina l’allungamento della molla rispetto alla sua lunghezza naturale.

:::hint
In equilibrio la forza elastica bilancia il peso.
:::

:::solution
All’equilibrio, $kx=mg$. Pertanto $x=mg/k=(2{,}0\cdot9{,}8)/100\,\mathrm{m}=0{,}196\,\mathrm{m}$.
:::
:::

:::exercise{id="E3.5" chapter="3" difficulty="medio"}
## Domanda
Un cartello di peso $120\,\mathrm{N}$ è appeso a due cavi identici che formano ciascuno un angolo di $30^\circ$ con la verticale. Il cartello è in equilibrio e i cavi sono simmetrici. Calcola la tensione in ciascun cavo.

:::hint
Per simmetria le componenti orizzontali delle tensioni si annullano. Imposta l’equilibrio delle componenti verticali.
:::

:::solution
Sia $T$ la tensione in ciascun cavo. La componente verticale di ogni tensione è $T\cos30^\circ$. L’equilibrio verticale dà $2T\cos30^\circ=120\,\mathrm{N}$, quindi $T=120/(2\cos30^\circ)\,\mathrm{N}\simeq69{,}3\,\mathrm{N}$.
:::
:::

:::exercise{id="E3.6" chapter="3" difficulty="difficile"}
## Domanda
Un blocco viene lanciato verso l’alto lungo un piano inclinato di $30^\circ$ con velocità iniziale $8{,}0\,\mathrm{m/s}$. Il coefficiente di attrito dinamico è $0{,}25$. Assumendo $g=9{,}8\,\mathrm{m/s^2}$, determina quanto spazio percorre lungo il piano prima di fermarsi.

:::hint
Durante la salita, sia la componente del peso sia l’attrito sono diretti verso il basso lungo il piano. Ricava la decelerazione e usa la relazione tra velocità e spazio.
:::

:::solution
Prendendo positivo il verso di salita, l’accelerazione è $a=-g(\sin30^\circ+\mu_d\cos30^\circ)$. Il suo modulo è $9{,}8(0{,}5+0{,}25\cdot0{,}8660)\simeq7{,}02\,\mathrm{m/s^2}$. Dalla relazione $v_f^2=v_0^2+2a\Delta s$, con $v_f=0$, si ha $\Delta s=v_0^2/(2|a|)=64/(2\cdot7{,}02)\,\mathrm{m}\simeq4{,}56\,\mathrm{m}$.
:::
:::

:::exercise{id="E3.7" chapter="3" difficulty="difficile"}
## Domanda
Un punto di massa $0{,}50\,\mathrm{kg}$ è collegato tra due molle orizzontali ideali fissate a pareti opposte. Le costanti elastiche sono $40\,\mathrm{N/m}$ e $60\,\mathrm{N/m}$. Nella posizione di equilibrio entrambe le molle sono alla lunghezza naturale. Il punto viene spostato di $0{,}10\,\mathrm{m}$ verso destra e lasciato libero. Determina la forza risultante iniziale e l’accelerazione iniziale.

:::hint
Lo spostamento allunga una molla e comprime l’altra; entrambe esercitano una forza di richiamo verso la posizione di equilibrio.
:::

:::solution
Per uno spostamento $x$ dalla posizione di equilibrio, entrambe le molle contribuiscono con una forza di richiamo, quindi $F=-(k_1+k_2)x$. Con $x=0{,}10\,\mathrm{m}$ si ottiene $F=-(40+60)(0{,}10)=-10\,\mathrm{N}$, cioè $10\,\mathrm{N}$ verso sinistra. Dalla seconda legge, $a=F/m=-10/0{,}50=-20\,\mathrm{m/s^2}$.
:::
:::

:::exercise{id="E3.8" chapter="3" difficulty="difficile"}
## Domanda
Un blocco di massa $4{,}0\,\mathrm{kg}$ è appoggiato sopra un secondo blocco di massa $6{,}0\,\mathrm{kg}$. Il pavimento sotto il blocco inferiore è liscio. Il coefficiente di attrito statico tra i blocchi è $0{,}30$. Una forza orizzontale di $20\,\mathrm{N}$ agisce sul blocco inferiore. Assumendo $g=9{,}8\,\mathrm{m/s^2}$, determina l’accelerazione del sistema e la forza di attrito sul blocco superiore, verificando se i blocchi slittano l’uno rispetto all’altro.

:::hint
Assumi inizialmente che i blocchi si muovano insieme e calcola l’attrito necessario ad accelerare quello superiore. Confrontalo con il massimo attrito statico.
:::

:::solution
Se i blocchi si muovono insieme, la massa totale è $10{,}0\,\mathrm{kg}$ e l’accelerazione è $a=20/10=2{,}0\,\mathrm{m/s^2}$. L’unica forza orizzontale sul blocco superiore è l’attrito, che deve valere $f_s=m_{\mathrm{sup}}a=(4{,}0)(2{,}0)=8{,}0\,\mathrm{N}$. La normale tra i blocchi è $N=(4{,}0)(9{,}8)=39{,}2\,\mathrm{N}$ e l’attrito statico massimo è $0{,}30(39{,}2)=11{,}76\,\mathrm{N}$. Poiché $8{,}0<11{,}76$, l’ipotesi è valida e non c’è slittamento relativo.
:::
:::

:::exercise{id="E3.9" chapter="3" difficulty="difficile"}
## Domanda
Un punto di massa $0{,}20\,\mathrm{kg}$ è legato a un filo e si muove su una circonferenza orizzontale di raggio $0{,}50\,\mathrm{m}$. Il filo si spezza quando la tensione raggiunge $8{,}0\,\mathrm{N}$. Trascurando ogni altra forza orizzontale, determina la massima velocità tangenziale prima della rottura e il corrispondente periodo.

:::hint
La tensione fornisce la forza centripeta. Ricava prima la velocità e poi il periodo dalla circonferenza percorsa.
:::

:::solution
La forza centripeta vale $T=mv^2/r$. Alla rottura, $v=\sqrt{Tr/m}=\sqrt{(8{,}0)(0{,}50)/(0{,}20)}=\sqrt{20}\,\mathrm{m/s}\simeq4{,}47\,\mathrm{m/s}$. Il periodo è $P=2\pi r/v$, dunque $P=2\pi(0{,}50)/\sqrt{20}\,\mathrm{s}\simeq0{,}702\,\mathrm{s}$.
:::
:::

:::exercise{id="E3.10" chapter="3" difficulty="difficile"}
## Domanda
Una massa di $0{,}50\,\mathrm{kg}$ è appesa a una molla verticale ideale di costante elastica $100\,\mathrm{N/m}$. La molla è inizialmente alla lunghezza naturale; la massa viene lasciata da ferma in questa posizione. Assumendo $g=9{,}8\,\mathrm{m/s^2}$, determina il primo istante in cui la massa raggiunge l’allungamento massimo e il valore di tale allungamento.

:::hint
Trova prima la posizione di equilibrio. Il moto attorno a essa è armonico semplice; la posizione iniziale è un estremo dell’oscillazione.
:::

:::solution
L’allungamento di equilibrio è $x_{\mathrm{eq}}=mg/k=(0{,}50\cdot9{,}8)/100=0{,}049\,\mathrm{m}$. Misurando l’allungamento $x$ verso il basso, l’equazione del moto è $m\ddot x=mg-kx$, cioè un moto armonico attorno a $x_{\mathrm{eq}}$ con pulsazione $\omega=\sqrt{k/m}=\sqrt{200}\,\mathrm{rad/s}$. La massa parte da $x=0$ da ferma, quindi la distanza iniziale dall’equilibrio è $0{,}049\,\mathrm{m}$ e l’altro estremo è $x=2x_{\mathrm{eq}}=0{,}098\,\mathrm{m}$. Il primo raggiungimento di tale estremo avviene dopo metà periodo: $t=\pi/\omega=\pi\sqrt{m/k}\simeq0{,}222\,\mathrm{s}$.
:::
:::

:::exercise{id="E3.11" chapter="3" difficulty="medio"}
## Domanda
Un blocco di massa $10\,\mathrm{kg}$ viene trascinato su un piano orizzontale da una forza orizzontale di $30\,\mathrm{N}$. Il coefficiente di attrito dinamico è $0{,}20$. Assumendo $g=9{,}8\,\mathrm{m/s^2}$, determina l’accelerazione del blocco.

:::hint
La forza applicata e l’attrito hanno versi opposti. Calcola la loro risultante prima di dividere per la massa.
:::

:::solution
La normale è $N=mg=(10)(9{,}8)=98\,\mathrm{N}$. L’attrito dinamico vale $f_d=\mu_dN=(0{,}20)(98)=19{,}6\,\mathrm{N}$. La risultante orizzontale è $30-19{,}6=10{,}4\,\mathrm{N}$, quindi $a=10{,}4/10=1{,}04\,\mathrm{m/s^2}$.
:::
:::

:::exercise{id="E3.12" chapter="3" difficulty="facile"}
## Domanda
Un blocco di massa $4{,}0\,\mathrm{kg}$ è fermo su un piano orizzontale. Assumendo $g=9{,}8\,\mathrm{m/s^2}$, determina il modulo della reazione normale del piano.

:::hint
Il blocco è in equilibrio verticale: confronta la normale con il peso.
:::

:::solution
L’equilibrio verticale richiede $N-mg=0$. Dunque $N=mg=(4{,}0\,\mathrm{kg})(9{,}8\,\mathrm{m/s^2})=39{,}2\,\mathrm{N}$.
:::
:::

:::exercise{id="E3.13" chapter="3" difficulty="medio"}
## Domanda
Un blocco è appoggiato su un piano inclinato fermo, senza altre forze oltre al peso e alle forze di contatto. L’inclinazione del piano è $30^\circ$. Qual è il minimo coefficiente di attrito statico che consente al blocco di rimanere in equilibrio?

:::hint
Confronta la componente del peso lungo il piano con il massimo attrito statico disponibile.
:::

:::solution
La componente del peso parallela al piano è $mg\sin30^\circ$ e la normale è $mg\cos30^\circ$. Per l’equilibrio serve $mg\sin30^\circ\leq\mu_smg\cos30^\circ$. Semplificando, $\mu_s\geq\tan30^\circ=1/\sqrt{3}\simeq0{,}577$.
:::
:::

:::exercise{id="E3.14" chapter="3" difficulty="medio"}
## Domanda
Una persona di massa $60\,\mathrm{kg}$ si trova su una bilancia in un ascensore che accelera verticalmente verso l’alto con accelerazione $1{,}5\,\mathrm{m/s^2}$. Assumendo $g=9{,}8\,\mathrm{m/s^2}$, determina la forza normale esercitata dalla bilancia sulla persona.

:::hint
Scrivi la seconda legge lungo la verticale, scegliendo verso l’alto come positivo.
:::

:::solution
Le forze verticali sulla persona sono la normale $N$ verso l’alto e il peso $mg$ verso il basso. La seconda legge è $N-mg=ma$, quindi $N=m(g+a)$. Sostituendo, $N=(60\,\mathrm{kg})(9{,}8+1{,}5)\,\mathrm{m/s^2}=678\,\mathrm{N}$.
:::
:::

:::exercise{id="E3.15" chapter="3" difficulty="difficile"}
## Domanda
Un punto materiale è in equilibrio sotto l’azione di tre forze. Le prime due sono $\vec F_1=(3,4)\,\mathrm{N}$ e $\vec F_2=(-5,0)\,\mathrm{N}$ in coordinate cartesiane. Determina la terza forza in componenti, il suo modulo e l’angolo che forma con l’asse $x$ positivo, misurato in senso antiorario.

:::hint
Imponi che la somma vettoriale delle tre forze sia nulla. Per l’angolo, considera il quadrante determinato dalle componenti della terza forza.
:::

:::solution
La risultante delle prime due forze è $\vec F_1+\vec F_2=(-2,4)\,\mathrm{N}$. Per l’equilibrio, la terza forza deve essere l’opposto: $\vec F_3=(2,-4)\,\mathrm{N}$. Il suo modulo è $|\vec F_3|=\sqrt{2^2+(-4)^2}=\sqrt{20}\,\mathrm{N}\simeq4{,}47\,\mathrm{N}$. Il vettore si trova nel quarto quadrante; l’angolo richiesto è $360^\circ-\arctan(2)\simeq296{,}6^\circ$.
:::
:::

:::exercise{id="E3.16" chapter="3" difficulty="facile"}
## Domanda
Un carrello di massa $2{,}0\,\mathrm{kg}$ viaggia a $3{,}0\,\mathrm{m/s}$ verso destra e urta un carrello di massa $1{,}0\,\mathrm{kg}$ che viaggia a $2{,}0\,\mathrm{m/s}$ verso sinistra. Dopo l’urto i carrelli restano uniti. Determina la loro velocità comune, indicando il verso.

:::hint
Scegli un verso positivo e conserva la quantità di moto totale durante l’urto.
:::

:::solution
Prendendo verso destra come positivo, la quantità di moto iniziale è $p_i=(2{,}0)(3{,}0)+(1{,}0)(-2{,}0)=4{,}0\,\mathrm{kg\,m/s}$. Dopo l’urto la massa complessiva è $3{,}0\,\mathrm{kg}$, quindi $v_f=p_i/(m_1+m_2)=4/3\,\mathrm{m/s}$. Il segno positivo indica il verso destra.
:::
:::

:::exercise{id="E3.17" chapter="3" difficulty="facile"}
## Domanda
Un blocco di massa $5{,}0\,\mathrm{kg}$ scivola su un piano orizzontale senza che agiscano altre forze orizzontali. Il coefficiente di attrito dinamico è $\mu_d=0{,}20$. Assumendo $g=9{,}8\,\mathrm{m/s^2}$, determina l’accelerazione del blocco rispetto alla direzione del moto.

:::hint
Calcola la forza di attrito dinamico usando la normale, poi applica la seconda legge con il verso del moto positivo.
:::

:::solution
La normale è $N=mg$. L’attrito dinamico ha modulo $f_d=\mu_dN=\mu_dmg$. Se il verso del moto è positivo, l’attrito è opposto e quindi $a=-f_d/m=-\mu_dg$. Si ottiene $a=-(0{,}20)(9{,}8)=-1{,}96\,\mathrm{m/s^2}$.
:::
:::

:::exercise{id="E3.18" chapter="3" difficulty="facile"}
## Domanda
Un punto materiale di massa $2{,}0\,\mathrm{kg}$ è soggetto alle forze $\vec F_1=(6\,\mathrm{N},8\,\mathrm{N})$ e $\vec F_2=(-2\,\mathrm{N},0)$. Determina il vettore accelerazione e il suo modulo.

:::hint
Somma le forze componente per componente, quindi dividi la risultante per la massa.
:::

:::solution
La risultante è $\vec F_{\mathrm{ris}}=(6-2,8)\,\mathrm{N}=(4,8)\,\mathrm{N}$. Per la seconda legge, $\vec a=\vec F_{\mathrm{ris}}/m=(2,4)\,\mathrm{m/s^2}$. Il modulo è $|\vec a|=\sqrt{2^2+4^2}=\sqrt{20}\,\mathrm{m/s^2}\simeq4{,}47\,\mathrm{m/s^2}$.
:::
:::

:::exercise{id="E3.19" chapter="3" difficulty="medio"}
## Domanda
Un punto si muove su una circonferenza di raggio $1{,}5\,\mathrm{m}$ con velocità angolare costante $2{,}0\,\mathrm{rad/s}$. All’istante iniziale la sua posizione angolare è $\theta_0=\pi/6$, misurata dall’asse $x$ positivo. Determina le coordinate cartesiane del punto all’istante $t=\pi/4\,\mathrm{s}$.

:::hint
Calcola l’angolo all’istante richiesto e usa le coordinate cartesiane in funzione dell’angolo.
:::

:::solution
L’angolo è $\theta(t)=\theta_0+\omega t$. Quindi $\theta=\pi/6+(2{,}0\,\mathrm{rad/s})(\pi/4\,\mathrm{s})=2\pi/3$. Le coordinate sono $x=r\cos\theta$ e $y=r\sin\theta$. Pertanto $x=(1{,}5)(-1/2)=-0{,}75\,\mathrm{m}$ e $y=(1{,}5)(\sqrt{3}/2)=0{,}75\sqrt{3}\,\mathrm{m}\simeq1{,}30\,\mathrm{m}$.
:::
:::

:::exercise{id="E3.20" chapter="3" difficulty="facile"}
## Domanda
Un punto materiale percorre una circonferenza di raggio $0{,}80\,\mathrm{m}$ con velocità di modulo costante $4{,}0\,\mathrm{m/s}$. Calcola il modulo dell’accelerazione centripeta e la velocità angolare.

:::hint
Usa le relazioni tra velocità tangenziale, raggio e velocità angolare, poi calcola l’accelerazione centripeta.
:::

:::solution
Per il moto circolare uniforme, $a_c=v^2/r$ e $\omega=v/r$. Sostituendo i dati si ottiene $a_c=(4{,}0\,\mathrm{m/s})^2/(0{,}80\,\mathrm{m})=20\,\mathrm{m/s^2}$ e $\omega=(4{,}0\,\mathrm{m/s})/(0{,}80\,\mathrm{m})=5{,}0\,\mathrm{rad/s}$.
:::
:::

:::exercise{id="E3.21" chapter="3" difficulty="medio"}
## Domanda
Due molle ideali con costanti elastiche $120\,\mathrm{N/m}$ e $80\,\mathrm{N/m}$ sono collegate in serie e sottoposte a una forza di trazione di $12\,\mathrm{N}$. Determina la costante elastica equivalente e l’allungamento complessivo.

:::hint
In serie la forza è la stessa in entrambe le molle. Somma gli allungamenti calcolati separatamente.
:::

:::solution
Per molle in serie, $1/k_{\mathrm{eq}}=1/k_1+1/k_2$, dunque $k_{\mathrm{eq}}=(120\cdot80)/(120+80)=48\,\mathrm{N/m}$. L’allungamento complessivo è $x=F/k_{\mathrm{eq}}=12/48=0{,}25\,\mathrm{m}$. Equivalentemente, i singoli allungamenti sono $12/120=0{,}10\,\mathrm{m}$ e $12/80=0{,}15\,\mathrm{m}$, la cui somma è $0{,}25\,\mathrm{m}$.
:::
:::

:::exercise{id="E3.22" chapter="3" difficulty="facile"}
## Domanda
Una molla ideale ha costante elastica $k=200\,\mathrm{N/m}$ e viene allungata di $3{,}0\,\mathrm{cm}$. Calcola il modulo della forza elastica.

:::hint
Converti l’allungamento in metri e applica la legge di Hooke.
:::

:::solution
La legge di Hooke dà $F=kx$. L’allungamento è $x=0{,}030\,\mathrm{m}$, quindi $F=(200\,\mathrm{N/m})(0{,}030\,\mathrm{m})=6{,}0\,\mathrm{N}$. La forza è diretta verso la posizione di equilibrio.
:::
:::

:::exercise{id="E3.23" chapter="3" difficulty="facile"}
## Domanda
Una forza costante di $5{,}0\,\mathrm{N}$ agisce nella direzione del moto su un corpo per $0{,}40\,\mathrm{s}$. Calcola l’impulso della forza e la variazione della quantità di moto del corpo.

:::hint
Per una forza costante, l’impulso è il prodotto della forza per l’intervallo di tempo.
:::

:::solution
L’impulso è $J=F\Delta t=(5{,}0\,\mathrm{N})(0{,}40\,\mathrm{s})=2{,}0\,\mathrm{N\,s}$. Per il teorema dell’impulso, la variazione della quantità di moto è uguale all’impulso.
:::
:::

:::exercise{id="E3.24" chapter="3" difficulty="facile"}
## Domanda
Due molle ideali di costanti elastiche $100\,\mathrm{N/m}$ e $300\,\mathrm{N/m}$ sono disposte in parallelo e vengono allungate entrambe di $2{,}0\,\mathrm{cm}$. Determina la forza elastica totale esercitata dalle molle.

:::hint
In parallelo entrambe le molle hanno lo stesso allungamento; somma le loro forze.
:::

:::solution
L’allungamento comune è $x=0{,}020\,\mathrm{m}$. La forza totale ha modulo $F=(k_1+k_2)x=(100+300)(0{,}020)=8{,}0\,\mathrm{N}$.
:::
:::

:::exercise{id="E3.25" chapter="3" difficulty="medio"}
## Domanda
Un punto di massa $2{,}0\,\mathrm{kg}$ si muove lungo l’asse $x$ sotto l’azione della forza $F_x(t)=4t\,\mathrm{N}$, con $t$ espresso in secondi. All’istante $t=0$ si trova in $x=0$ e ha velocità $v_x=1{,}0\,\mathrm{m/s}$. Determina la velocità e la posizione a $t=2{,}0\,\mathrm{s}$.

:::hint
Ricava l’accelerazione dalla forza e integra nel tempo, imponendo i dati iniziali per entrambe le grandezze.
:::

:::solution
La seconda legge dà $a_x(t)=F_x/m=2t\,\mathrm{m/s^2}$. Integrando e imponendo $v_x(0)=1{,}0\,\mathrm{m/s}$ si ottiene $v_x(t)=1+t^2\,\mathrm{m/s}$. Integrando ancora con $x(0)=0$, si ha $x(t)=t+t^3/3\,\mathrm{m}$. A $t=2{,}0\,\mathrm{s}$ risultano $v_x=5{,}0\,\mathrm{m/s}$ e $x=14/3\,\mathrm{m}\simeq4{,}67\,\mathrm{m}$.
:::
:::

:::exercise{id="E3.26" chapter="3" difficulty="difficile"}
## Domanda
Un punto di massa $0{,}50\,\mathrm{kg}$ si muove lungo una retta con velocità iniziale $-1{,}0\,\mathrm{m/s}$. Agisce su di esso una forza diretta nel verso positivo, che cresce linearmente da $0$ a $6{,}0\,\mathrm{N}$ nei primi $0{,}25\,\mathrm{s}$ e poi decresce linearmente a zero nei successivi $0{,}25\,\mathrm{s}$. Determina l’impulso totale e la velocità finale.

:::hint
L’impulso è l’area sotto il grafico forza-tempo. Poi applica il teorema dell’impulso tenendo conto del segno della velocità iniziale.
:::

:::solution
Il grafico forza-tempo è un triangolo di base $0{,}50\,\mathrm{s}$ e altezza $6{,}0\,\mathrm{N}$, perciò $J=\frac12(0{,}50)(6{,}0)=1{,}5\,\mathrm{N\,s}$. La quantità di moto iniziale è $p_i=mv_i=(0{,}50)(-1{,}0)=-0{,}50\,\mathrm{kg\,m/s}$. Quindi $p_f=p_i+J=1{,}0\,\mathrm{kg\,m/s}$ e $v_f=p_f/m=2{,}0\,\mathrm{m/s}$.
:::
:::

:::exercise{id="E4.1" chapter="4" difficulty="facile"}
## Domanda
Un corpo di massa $4\,\text{kg}$ ha velocità iniziale di modulo $2\,\text{m/s}$. Durante il moto, la risultante delle forze compie un lavoro di $30\,\text{J}$. Determinare il modulo della velocità finale.

:::hint
Calcola l’energia cinetica iniziale e applica il teorema dell’energia cinetica. {{formula:4.10}}
:::

:::solution
L’energia cinetica iniziale è $K_i=\frac12(4)(2)^2=8\,\text{J}$. Per il teorema dell’energia cinetica, $K_f-K_i=W$, dunque $K_f=8+30=38\,\text{J}$.

Dalla relazione $K_f=\frac12mv_f^2$ segue:

$$v_f=\sqrt{\frac{2K_f}{m}}=\sqrt{\frac{2(38)}{4}}=\sqrt{19}\,\text{m/s}.$$

Il modulo della velocità finale è $\sqrt{19}\,\text{m/s}\approx4.36\,\text{m/s}$.
:::
:::

:::exercise{id="E4.2" chapter="4" difficulty="medio"}
## Domanda
Un corpo parte da fermo e scende senza attrito lungo una pista, perdendo $5.0\,\text{m}$ di quota. Calcolare la velocità al termine della discesa. Si assuma $g=9.8\,\text{m/s}^2$.

:::hint
Il lavoro della forza peso è uguale alla variazione dell’energia cinetica; la reazione normale non compie lavoro.
:::

:::solution
La forza peso compie il lavoro $W=mg(5.0\,\text{m})$. Il corpo parte da fermo, perciò $K_i=0$. Dal teorema dell’energia cinetica, $\frac12mv^2=mg(5.0\,\text{m})$.

La massa si semplifica e si ottiene:

$$v=\sqrt{2g(5.0\,\text{m})}=\sqrt{98}\,\text{m/s}=7\sqrt2\,\text{m/s}\approx9.90\,\text{m/s}.$$

La velocità finale ha modulo $7\sqrt2\,\text{m/s}$.
:::
:::

:::exercise{id="E4.3" chapter="4" difficulty="difficile"}
## Domanda
Nel piano, una forza è descritta da $\vec F(x,y)=(-2xy,-x^2-2y)\,\text{N}$, con $x$ e $y$ espressi in metri. Determinare se la forza è conservativa nel piano e, in caso affermativo, trovare il potenziale normalizzato da $U(0,0)=0$ e il lavoro lungo un qualunque percorso da $(0,0)$ a $(1,2)$.

:::hint
Confronta le derivate incrociate delle componenti della forza. Se esiste un potenziale, usa $\vec F=-\nabla U$ e valuta la differenza di potenziale agli estremi.
:::

:::solution
Scriviamo le componenti come $F_x=-2xy$ e $F_y=-x^2-2y$. Le derivate incrociate sono $\partial F_x/\partial y=-2x$ e $\partial F_y/\partial x=-2x$, quindi coincidono in tutto il piano e la forza è conservativa.

Dalla relazione $\partial U/\partial x=-F_x=2xy$, integrando rispetto a $x$ si ottiene $U=x^2y+g(y)$. Imponendo $\partial U/\partial y=x^2+g'(y)=-F_y=x^2+2y$, segue $g'(y)=2y$, dunque $g(y)=y^2+C$. La normalizzazione $U(0,0)=0$ dà $C=0$.

Il potenziale è $U(x,y)=x^2y+y^2$. All’estremo $(1,2)$ vale $U(1,2)=2+4=6\,\text{J}$, mentre all’origine vale zero. Il lavoro è $W=-\Delta U=-6\,\text{J}$, indipendentemente dal percorso.
:::
:::

:::exercise{id="E4.4" chapter="4" difficulty="facile"}
## Domanda
Un corpo di massa $2\,\text{kg}$ si muove con velocità di modulo $3\,\text{m/s}$. Calcolare la sua energia cinetica.

:::hint
Usa la definizione di energia cinetica del punto materiale. {{formula:4.9}}
:::

:::solution
L’energia cinetica vale $K=\frac12mv^2$. Sostituendo i dati:

$$K=\frac12(2\,\text{kg})(3\,\text{m/s})^2=9\,\text{J}.$$

L’energia cinetica del corpo è $9\,\text{J}$.
:::
:::

:::exercise{id="E4.5" chapter="4" difficulty="difficile"}
## Domanda
Un blocco di massa $2.0\,\text{kg}$ parte con velocità di $1.0\,\text{m/s}$ e scende lungo un piano inclinato di lunghezza $5.0\,\text{m}$ e angolo $30^\circ$ rispetto all’orizzontale. Il coefficiente di attrito dinamico è $0.10$. Determinare la velocità al fondo del piano. Si assuma $g=9.8\,\text{m/s}^2$.

:::hint
Somma il lavoro della componente del peso parallela al piano e quello negativo dell’attrito, poi usa la variazione dell’energia cinetica.
:::

:::solution
Lungo il piano la componente del peso compie il lavoro $W_g=mgL\sin30^\circ$. L’attrito ha modulo $\mu_dmg\cos30^\circ$ e compie il lavoro $W_a=-\mu_dmgL\cos30^\circ$. Dunque il lavoro risultante è $W=mgL(\sin30^\circ-\mu_d\cos30^\circ)$.

Per il teorema dell’energia cinetica, $\frac12mv_f^2-\frac12mv_i^2=W$. Risolvendo per la velocità finale:

$$v_f=\sqrt{v_i^2+2gL(\sin30^\circ-\mu_d\cos30^\circ)}=\sqrt{1+98\left(\frac12-0.10\frac{\sqrt3}{2}\right)}\,\text{m/s}.$$

Il radicando vale circa $41.51$, perciò $v_f\approx6.44\,\text{m/s}$.
:::
:::

:::exercise{id="E4.6" chapter="4" difficulty="medio"}
## Domanda
Una forza conservativa unidimensionale è $F(x)=(3x^2-2)\,\text{N}$, con $x$ espresso in metri. Trovare l’energia potenziale $U(x)$ sapendo che $U(0)=5\,\text{J}$, e calcolare il lavoro della forza nello spostamento da $x=0$ a $x=2\,\text{m}$.

:::hint
Integra $dU/dx=-F(x)$ per trovare il potenziale. Il lavoro della forza conservativa è l’opposto della variazione di energia potenziale.
:::

:::solution
Poiché $dU/dx=-F(x)=-3x^2+2$, l’integrazione dà $U(x)=-x^3+2x+C$. La condizione $U(0)=5\,\text{J}$ determina $C=5\,\text{J}$.

Si ha $U(2\,\text{m})=-8+4+5=1\,\text{J}$, dunque $\Delta U=1-5=-4\,\text{J}$. Il lavoro della forza è $W=-\Delta U=4\,\text{J}$.

La funzione cercata è $U(x)=-x^3+2x+5$ nelle unità del problema e il lavoro richiesto è $4\,\text{J}$.
:::
:::

:::exercise{id="E4.7" chapter="4" difficulty="medio"}
## Domanda
Una forza conservativa unidimensionale è $F(x)=-6x\,\text{N}$, con $x$ espresso in metri. Sapendo che l’energia potenziale vale $4\,\text{J}$ in $x=0$, determinare la funzione $U(x)$ e il suo valore in $x=2\,\text{m}$.

:::hint
In una dimensione vale $F(x)=-dU/dx$. Integra la relazione e usa il valore assegnato per determinare la costante.
:::

:::solution
Dalla relazione tra forza ed energia potenziale, $dU/dx=-F(x)=6x$. Integrando si ottiene $U(x)=3x^2+C$.

La condizione $U(0)=4\,\text{J}$ implica $C=4\,\text{J}$. Quindi $U(x)=3x^2+4$ nelle unità del problema, e

$$U(2\,\text{m})=3(2)^2+4=16\,\text{J}.$$

La funzione è $U(x)=3x^2+4$ e il valore richiesto è $16\,\text{J}$.
:::
:::

:::exercise{id="E4.8" chapter="4" difficulty="facile"}
## Domanda
Un corpo di massa $3.0\,\text{kg}$ viene sollevato verticalmente di $2.0\,\text{m}$. Calcolare la variazione dell’energia potenziale gravitazionale, ponendo $g=9.8\,\text{m/s}^2$.

:::hint
La variazione dell’energia potenziale gravitazionale dipende dall’aumento di quota: $\Delta U_g=mg\Delta h$.
:::

:::solution
La quota aumenta di $\Delta h=2.0\,\text{m}$. Pertanto:

$$\Delta U_g=mg\Delta h=(3.0)(9.8)(2.0)\,\text{J}=58.8\,\text{J}.$$

L’energia potenziale gravitazionale aumenta di $58.8\,\text{J}$.
:::
:::

:::exercise{id="E4.9" chapter="4" difficulty="difficile"}
## Domanda
Un corpo di massa $3.0\,\text{kg}$ parte da fermo dalla posizione $x_0$, con $0<x_0<2.0\,\text{m}$, e si muove lungo l’asse $x$ sotto l’azione della forza $\vec F(x)=6x\,\text{N}\,\hat\imath$, con $x$ espresso in metri. Calcolare la velocità quando raggiunge $x=2.0\,\text{m}$.

:::hint
Calcola il lavoro della forza integrando da $x_0$ a $2.0\,\text{m}$, poi applica il teorema dell’energia cinetica.
:::

:::solution
Il lavoro compiuto tra la posizione iniziale $x_0$ e $x=2.0\,\text{m}$ è

$$W=\int_{x_0}^{2.0}6x\,dx=\left\lbrack 3x^2\right\rbrack _{x_0}^{2.0}=12-3x_0^2\,\text{J}.$$

Poiché il corpo parte da fermo, il teorema dell’energia cinetica dà $\frac12mv^2=W$. Con $m=3.0\,\text{kg}$ si ottiene

$$v=\sqrt{\frac{2W}{m}}=\sqrt{8-2x_0^2}\,\text{m/s}.$$

La velocità dipende dalla posizione iniziale e non ha un valore numerico univoco senza specificare $x_0$. Se invece $x_0=0$, la forza iniziale è nulla e, partendo da fermo sotto la sola azione di questa forza, il corpo resta in $x=0$ e non raggiunge $x=2.0\,\text{m}$.
:::
:::

:::exercise{id="E4.10" chapter="4" difficulty="difficile"}
## Domanda
Una forza nel piano è descritta da $\vec F(x,y)=(-y,x)\,\text{N}$, con $x$ e $y$ espressi in metri. Un punto materiale percorre in senso antiorario l’arco di circonferenza di raggio $2\,\text{m}$ dal punto $(2,0)$ al punto $(0,2)$. Calcolare il lavoro della forza lungo l’arco.

:::hint
Parametrizza l’arco con $x=2\cos t$ e $y=2\sin t$, facendo variare $t$ tra gli angoli corrispondenti agli estremi.
:::

:::solution
Una parametrizzazione dell’arco è $\vec r(t)=(2\cos t,2\sin t)$ per $0\le t\le\frac{\pi}{2}$. La derivata è $d\vec r/dt=(-2\sin t,2\cos t)$, mentre la forza lungo il percorso è $\vec F(\vec r(t))=(-2\sin t,2\cos t)\,\text{N}$.

Per l’integrale di linea, $W=\int_0^{\pi/2}\vec F(\vec r(t))\cdot\frac{d\vec r}{dt}\,dt$:

$$W=\int_0^{\pi/2}(4\sin^2t+4\cos^2t)\,dt=\int_0^{\pi/2}4\,dt=2\pi\,\text{J}.$$

Il lavoro lungo l’arco è $2\pi\,\text{J}$.
:::
:::

:::exercise{id="E4.11" chapter="4" difficulty="medio"}
## Domanda
Un blocco di massa $5.0\,\text{kg}$ scivola su un piano orizzontale scabro con velocità iniziale di $8.0\,\text{m/s}$. Il coefficiente di attrito dinamico è $0.20$. Determinare la velocità dopo aver percorso $10\,\text{m}$. Si assuma $g=9.8\,\text{m/s}^2$.

:::hint
Sul piano orizzontale il lavoro della forza di attrito è negativo e vale $-\mu_dmgd$. {{formula:4.11}}
:::

:::solution
L’energia cinetica iniziale è $K_i=\frac12(5.0)(8.0)^2=160\,\text{J}$. La forza di attrito ha modulo $F_a=\mu_dmg=(0.20)(5.0)(9.8)=9.8\,\text{N}$ e compie il lavoro $W=-F_ad=-(9.8)(10)=-98\,\text{J}$.

Applicando il teorema dell’energia cinetica si trova $K_f=160-98=62\,\text{J}$. Pertanto:

$$v_f=\sqrt{\frac{2K_f}{m}}=\sqrt{\frac{124}{5.0}}\,\text{m/s}\approx4.98\,\text{m/s}.$$

Dopo $10\,\text{m}$ il blocco ha velocità di modulo circa $4.98\,\text{m/s}$.
:::
:::

:::exercise{id="E4.12" chapter="4" difficulty="difficile"}
## Domanda
Una particella si muove lungo l’asse $x$ in un potenziale $U(x)=x^4-4x^2$, con $U$ espresso in joule e $x$ in metri. Trovare tutte le posizioni di equilibrio, classificare ciascuna come stabile o instabile e calcolare i valori del potenziale in tali posizioni.

:::hint
Le posizioni di equilibrio soddisfano $F(x)=-dU/dx=0$. Classificale esaminando il segno della derivata seconda del potenziale.
:::

:::solution
La forza è $F(x)=-dU/dx=-(4x^3-8x)=-4x(x^2-2)$. Le posizioni di equilibrio sono quindi $x=0$ e $x=\pm\sqrt2\,\text{m}$.

La derivata seconda del potenziale è $U''(x)=12x^2-8$. In $x=0$ si ha $U''(0)=-8<0$, perciò il potenziale ha un massimo locale e l’equilibrio è instabile. In $x=\pm\sqrt2\,\text{m}$ si ha $U''=16>0$, quindi il potenziale ha minimi locali e gli equilibri sono stabili.

I valori del potenziale sono $U(0)=0\,\text{J}$ e $U(\pm\sqrt2\,\text{m})=4-8=-4\,\text{J}$.
:::
:::

:::exercise{id="E4.13" chapter="4" difficulty="facile"}
## Domanda
Una forza costante $\vec F=(3\,\text{N})\hat\imath+(4\,\text{N})\hat\jmath$ agisce su un punto materiale che si sposta da $A=(0,0)\,\text{m}$ a $B=(2,-1)\,\text{m}$ lungo un segmento rettilineo. Calcolare il lavoro compiuto dalla forza.

:::hint
Per una forza costante, il lavoro dipende dal prodotto scalare tra la forza e lo spostamento. {{formula:4.1}}
:::

:::solution
Lo spostamento è $\Delta\vec r=(2\,\text{m})\hat\imath-(1\,\text{m})\hat\jmath$. Il lavoro è il prodotto scalare tra forza e spostamento:

$$W=\vec F\cdot\Delta\vec r=(3\,\text{N})(2\,\text{m})+(4\,\text{N})(-1\,\text{m})=2\,\text{J}.$$

Il lavoro compiuto dalla forza è $2\,\text{J}$.
:::
:::

:::exercise{id="E4.14" chapter="4" difficulty="medio"}
## Domanda
Una forza dipendente dalla posizione agisce lungo l’asse $x$ secondo $\vec F(x)=(4x+1)\,\text{N}\,\hat\imath$, con $x$ espresso in metri. Un punto materiale si sposta da $x=0$ a $x=3\,\text{m}$. Calcolare il lavoro della forza.

:::hint
Integra la componente della forza lungo lo spostamento tra gli estremi indicati.
:::

:::solution
Poiché il moto avviene lungo l’asse $x$, il lavoro è $W=\int_0^3(4x+1)\,dx$.

$$W=\left\lbrack 2x^2+x\right\rbrack _0^3=2(3)^2+3=21\,\text{J}.$$

Il lavoro compiuto è $21\,\text{J}$.
:::
:::

:::exercise{id="E4.15" chapter="4" difficulty="facile"}
## Domanda
Una molla ideale ha costante elastica $k=200\,\text{N/m}$. Calcolare l’energia potenziale elastica quando la molla è allungata di $0.10\,\text{m}$ rispetto alla lunghezza naturale.

:::hint
Usa $U_e=\frac12kx^2$ con l’allungamento espresso in metri. {{formula:3.22}}
:::

:::solution
L’energia potenziale elastica è $U_e=\frac12kx^2$. Inserendo $k=200\,\text{N/m}$ e $x=0.10\,\text{m}$:

$$U_e=\frac12(200)(0.10)^2=1.0\,\text{J}.$$

L’energia potenziale elastica è $1.0\,\text{J}$.
:::
:::

:::exercise{id="E5.1" chapter="5" difficulty="difficile"}
## Domanda
Un punto materiale di massa $m=2{,}0\ \text{kg}$ si muove in un campo centrale con forza $\mathbf F(r)=-\dfrac{k}{r^2}\mathbf e_r$, dove $k=18\ \text{N}\,\text{m}^2$. La sua orbita è descritta, in coordinate polari centrate sulla forza, da $r(\theta)=\dfrac{p}{1+e\cos\theta}$, con $p=0{,}50\ \text{m}$ ed eccentricità $e=0{,}60$. Usando la formula di Binet, determinare il modulo del momento angolare, la velocità al perielio e la velocità areolare.

:::hint
Poni $u=1/r$ nella formula di Binet e sostituisci la forma assegnata dell’orbita per ricavare la relazione tra $k$, $p$ e il momento angolare specifico. Al perielio la velocità è perpendicolare al raggio e $r$ è minimo.
:::

:::solution
Ponendo $u=1/r$, l’orbita diventa $u=(1+e\cos\theta)/p$. Si ottiene $u''+u=1/p$, dove gli apici indicano derivate rispetto a $\theta$. La formula di Binet, {{formula:5.11}}, per una forza radiale dà $F_r=-mh^2u^2(u''+u)$, con $h=L/m$ momento angolare specifico. Confrontando con $F_r=-ku^2$ segue

$$k=\frac{mh^2}{p},\qquad h=\sqrt{\frac{kp}{m}}=\sqrt{\frac{(18\ \text{N}\,\text{m}^2)(0{,}50\ \text{m})}{2{,}0\ \text{kg}}}=2{,}12\ \text{m}^2\,\text{s}^{-1}.$$

Il momento angolare è $L=mh$, quindi $L=(2{,}0\ \text{kg})(2{,}12\ \text{m}^2\,\text{s}^{-1})=4{,}24\ \text{kg}\,\text{m}^2\,\text{s}^{-1}$. Al perielio, $\cos\theta=1$ e $r_p=p/(1+e)=0{,}50\ \text{m}/1{,}60=0{,}3125\ \text{m}$. La velocità è perpendicolare al raggio, perciò $h=r_pv_p$ e

$$v_p=\frac{h}{r_p}=\frac{2{,}12\ \text{m}^2\,\text{s}^{-1}}{0{,}3125\ \text{m}}=6{,}79\ \text{m}\,\text{s}^{-1}.$$

Infine, la velocità areolare è $\dot A=h/2$, dunque $\dot A=1{,}06\ \text{m}^2\,\text{s}^{-1}$.
:::
:::

:::exercise{id="E5.2" chapter="5" difficulty="medio"}
## Domanda
Un punto materiale di massa $m=2{,}0\ \text{kg}$ si muove sotto l’azione di una forza centrale. In un certo istante si trova a distanza $r_1=3{,}0\ \text{m}$ dal centro e la sua velocità è perpendicolare al raggio, con modulo $v_1=4{,}0\ \text{m}\,\text{s}^{-1}$. In un secondo istante si trova a distanza $r_2=1{,}5\ \text{m}$ dal centro e la velocità è ancora perpendicolare al raggio. Determinare il modulo della velocità nel secondo istante e la velocità areolare.

:::hint
La forza centrale ha momento nullo rispetto al centro, quindi il momento angolare si conserva. Usa questa conservazione nei due istanti e poi ricava la velocità areolare.
:::

:::solution
In entrambi gli istanti la velocità è perpendicolare al raggio, quindi il momento angolare ha modulo $L=mrv$. Per la conservazione del momento angolare in un campo centrale, {{formula:5.8}}, si ha

$$mr_1v_1=mr_2v_2.$$

La massa si semplifica e quindi

$$v_2=\frac{r_1v_1}{r_2}=\frac{(3{,}0\ \text{m})(4{,}0\ \text{m}\,\text{s}^{-1})}{1{,}5\ \text{m}}=8{,}0\ \text{m}\,\text{s}^{-1}.$$

Il momento angolare vale $L=mr_1v_1=(2{,}0)(3{,}0)(4{,}0)=24\ \text{kg}\,\text{m}^2\,\text{s}^{-1}$. La velocità areolare costante è dunque

$$\dot A=\frac{L}{2m}=\frac{24\ \text{kg}\,\text{m}^2\,\text{s}^{-1}}{4{,}0\ \text{kg}}=6{,}0\ \text{m}^2\,\text{s}^{-1}.$$
:::
:::

:::exercise{id="E5.3" chapter="5" difficulty="difficile"}
## Domanda
Una scala uniforme di lunghezza $5{,}0\ \text{m}$ e massa $20\ \text{kg}$ è appoggiata a un pavimento orizzontale scabro e a una parete verticale liscia. La scala forma un angolo di $53^\circ$ con il pavimento. Una persona di massa $60\ \text{kg}$ si trova sulla scala a $3{,}0\ \text{m}$ dal piede, misurati lungo la scala. Assumendo $g=9{,}8\ \text{m}\,\text{s}^{-2}$, determinare la reazione della parete, la reazione normale del pavimento e la forza di attrito al piede. Verificare se l’equilibrio è possibile quando il coefficiente di attrito statico è $\mu_s=0{,}50$.

:::hint
Calcolare i momenti rispetto al piede della scala: così la normale e l’attrito del pavimento non compaiono nell’equazione dei momenti. Poi usare l’equilibrio delle forze e confrontare l’attrito richiesto con il suo valore massimo.
:::

:::solution
La parete è liscia, quindi esercita sulla scala una forza orizzontale $N_w$ al suo estremo superiore. Facendo i momenti rispetto al piede, i bracci dei pesi sono le distanze orizzontali dal piede. L’equilibrio dei momenti dà

$$N_w(5{,}0\ \text{m})\sin 53^\circ=(20g)(2{,}5\ \text{m})\cos 53^\circ+(60g)(3{,}0\ \text{m})\cos 53^\circ.$$

Pertanto

$$N_w=\frac{g\cos 53^\circ}{5{,}0\ \text{m}\sin 53^\circ}\bigl\lbrack (20\ \text{kg})(2{,}5\ \text{m})+(60\ \text{kg})(3{,}0\ \text{m})\bigr\rbrack \simeq339\ \text{N}.$$

L’equilibrio orizzontale richiede che l’attrito al piede abbia modulo uguale a $N_w$ e sia diretto verso la parete: $f_s\simeq339\ \text{N}$. Dall’equilibrio verticale, la reazione normale del pavimento bilancia il peso totale:

$$N_p=(20\ \text{kg}+60\ \text{kg})g=784\ \text{N}.$$

L’attrito statico massimo vale $f_{s,\max}=\mu_sN_p=(0{,}50)(784\ \text{N})=392\ \text{N}$. Poiché $339\ \text{N}<392\ \text{N}$, l’attrito disponibile è sufficiente e l’equilibrio è possibile.
:::
:::

:::exercise{id="E5.4" chapter="5" difficulty="facile"}
## Domanda
Una chiave inglese è applicata a un bullone nel punto a distanza $r=0{,}25\ \text{m}$ dal suo asse. Si esercita una forza di modulo $F=40\ \text{N}$ che forma un angolo di $30^\circ$ con la chiave. Calcolare il modulo del momento della forza rispetto all’asse del bullone.

:::hint
Usare il modulo del prodotto vettoriale tra il vettore posizione e la forza. Solo la componente della forza perpendicolare alla chiave contribuisce al momento.
:::

:::solution
Il modulo del momento della forza è $M=rF\sin\alpha$, dove $\alpha$ è l’angolo tra la chiave e la forza. Sostituendo i dati si ottiene

$$M=(0{,}25\ \text{m})(40\ \text{N})\sin 30^\circ=5{,}0\ \text{N}\,\text{m}.$$

Il modulo del momento rispetto all’asse del bullone è quindi $5{,}0\ \text{N}\,\text{m}$.
:::
:::

:::exercise{id="E5.5" chapter="5" difficulty="facile"}
## Domanda
Un punto materiale di massa $m=0{,}50\ \text{kg}$ percorre una circonferenza di raggio $r=0{,}80\ \text{m}$ con velocità di modulo $v=3{,}0\ \text{m}\,\text{s}^{-1}$. Calcolare il modulo del momento angolare rispetto al centro della circonferenza e la velocità areolare.

:::hint
Nel moto circolare la posizione è perpendicolare alla velocità. La velocità areolare è il momento angolare diviso per due volte la massa.
:::

:::solution
Poiché il raggio è perpendicolare alla velocità, il modulo del momento angolare è $L=mrv$. Quindi

$$L=(0{,}50\ \text{kg})(0{,}80\ \text{m})(3{,}0\ \text{m}\,\text{s}^{-1})=1{,}2\ \text{kg}\,\text{m}^2\,\text{s}^{-1}.$$

La velocità areolare vale $\dot A=L/(2m)$, dunque

$$\dot A=\frac{1{,}2\ \text{kg}\,\text{m}^2\,\text{s}^{-1}}{2(0{,}50\ \text{kg})}=1{,}2\ \text{m}^2\,\text{s}^{-1}.$$

Queste relazioni corrispondono a {{formula:5.4}} e {{formula:5.9}}.
:::
:::

:::exercise{id="E5.6" chapter="5" difficulty="medio"}
## Domanda
Una trave orizzontale uniforme, lunga $2{,}4\ \text{m}$ e di peso $120\ \text{N}$, è incernierata a un muro a un’estremità. All’altra estremità è appeso un carico di peso $200\ \text{N}$. La trave è mantenuta orizzontale da un cavo collegato alla sua estremità libera, che forma un angolo di $40^\circ$ con la trave e tira verso l’alto e verso il muro. Determinare il modulo della tensione del cavo e le componenti orizzontale e verticale della reazione della cerniera.

:::hint
Imporre l’equilibrio dei momenti rispetto alla cerniera per trovare la tensione. Poi imporre l’equilibrio delle forze lungo i due assi.
:::

:::solution
Prendiamo i momenti rispetto alla cerniera, così la reazione della cerniera non contribuisce. Il peso della trave agisce a metà della sua lunghezza, mentre il carico è applicato all’estremità. Se $T$ è la tensione, l’equilibrio dei momenti dà

$$T(2{,}4\ \text{m})\sin 40^\circ=(120\ \text{N})(1{,}2\ \text{m})+(200\ \text{N})(2{,}4\ \text{m}).$$

Quindi $T\sin 40^\circ=260\ \text{N}$ e

$$T=\frac{260\ \text{N}}{\sin 40^\circ}\simeq 404\ \text{N}.$$

La tensione ha componente orizzontale diretta verso il muro, di modulo $T\cos 40^\circ$. L’equilibrio orizzontale richiede dunque una reazione della cerniera diretta lontano dal muro:

$$R_x=T\cos 40^\circ\simeq 310\ \text{N}.$$

L’equilibrio verticale richiede che la componente verticale della reazione bilanci i pesi meno la componente verticale della tensione:

$$R_y+T\sin 40^\circ-120\ \text{N}-200\ \text{N}=0,$$

perciò $R_y=60\ \text{N}$, diretta verso l’alto.
:::
:::

:::exercise{id="E6.1" chapter="6" difficulty="facile"}
## Domanda
Una persona di massa $60\,\mathrm{kg}$ si trova su una bilancia in un ascensore che accelera verso l'alto con accelerazione $1{,}5\,\mathrm{m/s^2}$. Calcola la lettura della bilancia, cioè la forza normale esercitata sulla persona. Usa $g=9{,}8\,\mathrm{m/s^2}$.

:::hint
Scrivi la seconda legge di Newton per la persona nel riferimento inerziale, prendendo verso l'alto come positivo. La bilancia misura la forza normale, non il peso gravitazionale.
:::

:::solution
Le forze sulla persona sono la forza normale $N$ diretta verso l'alto e il peso $mg$ diretto verso il basso. Applicando la seconda legge di Newton lungo la verticale:

$$
N-mg=ma.
$$

Isoliamo la lettura della bilancia e sostituiamo i dati:

$$
N=m(g+a)=(60\,\mathrm{kg})(9{,}8\,\mathrm{m/s^2}+1{,}5\,\mathrm{m/s^2})=678\,\mathrm{N}.
$$
:::
:::

:::exercise{id="E6.2" chapter="6" difficulty="difficile"}
## Domanda
Una piattaforma ruota in senso antiorario attorno a un asse verticale fisso con velocità angolare costante $\omega=2\,\mathrm{rad/s}$. Un punto si trova a distanza $r=1{,}5\,\mathrm{m}$ dall'asse e in quell'istante si muove radialmente verso l'esterno rispetto alla piattaforma con velocità $0{,}4\,\mathrm{m/s}$ e accelerazione relativa nulla. Determina la velocità e l'accelerazione assolute del punto, espresse nelle direzioni radiale $\hat{\mathbf e}_r$ e tangenziale $\hat{\mathbf e}_\theta$, dove $\hat{\mathbf e}_\theta$ indica il verso antiorario.

:::hint
Applica i teoremi delle velocità e delle accelerazioni relative. In questo caso l'accelerazione angolare è nulla, ma occorre includere sia il termine centripeto di trascinamento sia il termine di Coriolis.
:::

:::solution
Per la velocità assoluta sommiamo la velocità relativa radiale e la velocità di trascinamento tangenziale:

$$
\vec v=\vec v_{\mathrm{rel}}+\vec v_{\mathrm{trasc}}=(0{,}4\,\mathrm{m/s})\,\hat{\mathbf e}_r+(\omega r)\,\hat{\mathbf e}_\theta.
$$

Poiché $\omega r=(2\,\mathrm{rad/s})(1{,}5\,\mathrm{m})=3\,\mathrm{m/s}$, si ha

$$
\vec v=(0{,}4\,\mathrm{m/s})\,\hat{\mathbf e}_r+(3\,\mathrm{m/s})\,\hat{\mathbf e}_\theta.
$$

L'accelerazione assoluta è la somma dell'accelerazione relativa, dell'accelerazione di trascinamento e dell'accelerazione di Coriolis. L'accelerazione relativa è nulla. Poiché l'asse è fisso e $\omega$ è costante, l'accelerazione di trascinamento è centripeta:

$$
\vec a_{\mathrm{trasc}}=-\omega^2r\,\hat{\mathbf e}_r=-(2\,\mathrm{rad/s})^2(1{,}5\,\mathrm{m})\,\hat{\mathbf e}_r=-(6\,\mathrm{m/s^2})\,\hat{\mathbf e}_r.
$$

L'accelerazione di Coriolis è diretta nel verso tangenziale positivo, perché il moto relativo è verso l'esterno:

$$
\vec a_{\mathrm{Cor}}=2\omega(0{,}4\,\mathrm{m/s})\,\hat{\mathbf e}_\theta=(1{,}6\,\mathrm{m/s^2})\,\hat{\mathbf e}_\theta.
$$

Pertanto

$$
\vec a=-(6\,\mathrm{m/s^2})\,\hat{\mathbf e}_r+(1{,}6\,\mathrm{m/s^2})\,\hat{\mathbf e}_\theta.
$$
:::
:::

:::exercise{id="E6.3" chapter="6" difficulty="facile"}
## Domanda
Due automobili si muovono lungo una strada rettilinea nello stesso verso. Rispetto al suolo, la prima viaggia a $18\,\mathrm{m/s}$ e la seconda a $6\,\mathrm{m/s}$. Determina la velocità della seconda automobile rispetto alla prima e indica il verso del moto relativo.

:::hint
Esprimi le due velocità con lo stesso asse e lo stesso verso positivo. La velocità relativa si ottiene sottraendo la velocità del sistema di riferimento da quella del punto osservato.
:::

:::solution
Scegliamo come verso positivo quello di marcia. La velocità della seconda automobile rispetto alla prima è

$$
v_{2/1}=v_2-v_1=6\,\mathrm{m/s}-18\,\mathrm{m/s}=-12\,\mathrm{m/s}.
$$

Il segno negativo indica che, rispetto alla prima automobile, la seconda si muove all'indietro. Il modulo della velocità relativa è $12\,\mathrm{m/s}$.
:::
:::

:::exercise{id="E6.4" chapter="6" difficulty="difficile"}
## Domanda
Una piattaforma ruota in senso antiorario con velocità angolare costante $\omega=3\,\mathrm{rad/s}$. Un punto materiale di massa $2\,\mathrm{kg}$ si trova a distanza $r=2\,\mathrm{m}$ dall'asse e si muove radialmente verso l'esterno rispetto alla piattaforma a $4\,\mathrm{m/s}$. Calcola nel riferimento rotante la forza centrifuga apparente e la forza di Coriolis, specificando componenti e versi nelle direzioni $\hat{\mathbf e}_r$ e $\hat{\mathbf e}_\theta$, con $\hat{\mathbf e}_\theta$ nel verso antiorario. Determina anche il modulo della loro risultante apparente.

:::hint
Calcola separatamente le due forze apparenti: la centrifuga è opposta all'accelerazione centripeta di trascinamento, mentre la forza di Coriolis è opposta al termine $2\boldsymbol\omega\times\mathbf v_{\mathrm{rel}}$ nella scomposizione dell'accelerazione inerziale. Somma poi le componenti ortogonali.
:::

:::solution
La forza centrifuga apparente è diretta radialmente verso l'esterno e vale

$$
\vec F_{\mathrm{cf}}=m\omega^2r\,\hat{\mathbf e}_r=(2\,\mathrm{kg})(3\,\mathrm{rad/s})^2(2\,\mathrm{m})\,\hat{\mathbf e}_r=(36\,\mathrm{N})\,\hat{\mathbf e}_r.
$$

Il termine $2\boldsymbol\omega\times\mathbf v_{\mathrm{rel}}$ nella scomposizione dell'accelerazione inerziale punta in senso antiorario, lungo $\hat{\mathbf e}_\theta$, e ha modulo $2\omega v_{\mathrm{rel}}$. La forza apparente di Coriolis è opposta a tale termine e punta in senso orario:

$$
\vec F_{\mathrm{Cor}}=-2m\omega v_{\mathrm{rel}}\,\hat{\mathbf e}_\theta=-(2)(2\,\mathrm{kg})(3\,\mathrm{rad/s})(4\,\mathrm{m/s})\,\hat{\mathbf e}_\theta=-(48\,\mathrm{N})\,\hat{\mathbf e}_\theta.
$$

Le due forze sono ortogonali, perciò il modulo della loro risultante è

$$
|\vec F_{\mathrm{cf}}+\vec F_{\mathrm{Cor}}|=\sqrt{(36\,\mathrm{N})^2+(48\,\mathrm{N})^2}=60\,\mathrm{N}.
$$
:::
:::

:::exercise{id="E6.5" chapter="6" difficulty="medio"}
## Domanda
Una barca attraversa un fiume largo $120\,\mathrm{m}$. Rispetto all'acqua, la sua velocità è perpendicolare alle rive e ha modulo $5\,\mathrm{m/s}$. L'acqua scorre parallelamente alle rive a $3\,\mathrm{m/s}$. Assumendo costanti entrambe le velocità, determina il tempo di attraversamento, lo spostamento lungo la corrente e il modulo della velocità della barca rispetto alla riva.

:::hint
Scomponi la velocità rispetto alla riva nelle componenti perpendicolare e parallela alle rive. Solo la componente perpendicolare determina il tempo necessario per attraversare il fiume.
:::

:::solution
Indichiamo con $x$ la direzione perpendicolare alle rive e con $y$ quella della corrente. La velocità della barca rispetto alla riva è la somma vettoriale della velocità rispetto all'acqua e di quella dell'acqua rispetto alla riva:

$$
\vec v_{b/r}=(5\,\mathrm{m/s})\,\hat{\mathbf x}+(3\,\mathrm{m/s})\,\hat{\mathbf y}.
$$

La componente perpendicolare alle rive è $5\,\mathrm{m/s}$, quindi il tempo di attraversamento è

$$
t=\frac{120\,\mathrm{m}}{5\,\mathrm{m/s}}=24\,\mathrm{s}.
$$

Durante questo intervallo la corrente trascina la barca per una distanza

$$
\Delta y=(3\,\mathrm{m/s})(24\,\mathrm{s})=72\,\mathrm{m}.
$$

Il modulo della velocità rispetto alla riva si ricava dalle due componenti perpendicolari:

$$
|\vec v_{b/r}|=\sqrt{(5\,\mathrm{m/s})^2+(3\,\mathrm{m/s})^2}=\sqrt{34}\,\mathrm{m/s}\approx 5{,}83\,\mathrm{m/s}.
$$
:::
:::

:::exercise{id="E6.6" chapter="6" difficulty="medio"}
## Domanda
Una giostra ruota uniformemente attorno a un asse verticale. Un passeggero di massa $50\,\mathrm{kg}$ si trova a $4\,\mathrm{m}$ dall'asse e la velocità angolare della giostra è $0{,}5\,\mathrm{rad/s}$. Determina il modulo e il verso della forza centrifuga apparente nel riferimento della giostra. Determina anche la forza orizzontale reale risultante sul passeggero nel riferimento inerziale.

:::hint
Nel riferimento rotante la forza centrifuga è diretta radialmente verso l'esterno e ha modulo $m\omega^2r$. Nel riferimento inerziale la risultante orizzontale deve invece fornire l'accelerazione centripeta.
:::

:::solution
Nel riferimento della giostra, la forza centrifuga apparente ha modulo

$$
F_{\mathrm{cf}}=m\omega^2r=(50\,\mathrm{kg})(0{,}5\,\mathrm{rad/s})^2(4\,\mathrm{m})=50\,\mathrm{N}.
$$

Il suo verso è radialmente verso l'esterno. Nel riferimento inerziale, il passeggero percorre una circonferenza con accelerazione centripeta di modulo $\omega^2r$. La risultante reale orizzontale è quindi

$$
F_{\mathrm{reale}}=m\omega^2r=50\,\mathrm{N},
$$

ma è diretta radialmente verso l'asse, cioè verso l'interno.
:::
:::

:::exercise{id="E7.1" chapter="7" difficulty="difficile"}
## Domanda
Un sistema è composto da due punti di masse $1\,\text{kg}$ e $2\,\text{kg}$, con velocità iniziali rispettivamente $(3,0)\,\text{m}/\text{s}$ e $(0,2)\,\text{m}/\text{s}$. Per $2\,\text{s}$ agisce sul sistema una forza esterna costante $(0,-6)\,\text{N}$. Determinare la velocità del centro di massa alla fine dell’intervallo.

:::hint
Trova prima la quantità di moto totale iniziale e poi aggiungi l’impulso esterno vettoriale.
:::

:::solution
La quantità di moto iniziale è $\vec p_i=1(3,0)+2(0,2)=(3,4)\,\text{kg}\,\text{m}/\text{s}$. L’impulso esterno è $\vec J=2(0,-6)=(0,-12)\,\text{kg}\,\text{m}/\text{s}$. Quindi $\vec p_f=(3,-8)\,\text{kg}\,\text{m}/\text{s}$. La massa totale è $3\,\text{kg}$, perciò $\vec v_{\mathrm{CM},f}=(1,-8/3)\,\text{m}/\text{s}$.
:::
:::

:::exercise{id="E7.2" chapter="7" difficulty="medio"}
## Domanda
Tre punti materiali hanno masse e coordinate $(m_1,x_1,y_1)=(1\,\text{kg},0\,\text{m},0\,\text{m})$, $(m_2,x_2,y_2)=(2\,\text{kg},3\,\text{m},0\,\text{m})$ e $(m_3,x_3,y_3)=(3\,\text{kg},0\,\text{m},2\,\text{m})$. Calcolare le coordinate del centro di massa.

:::hint
Calcola separatamente la media pesata delle coordinate $x$ e delle coordinate $y$.
:::

:::solution
La massa totale vale $M=1+2+3=6\,\text{kg}$. Si ha $x_{\mathrm{CM}}=(1\cdot0+2\cdot3+3\cdot0)/6=1\,\text{m}$ e $y_{\mathrm{CM}}=(1\cdot0+2\cdot0+3\cdot2)/6=1\,\text{m}$.
:::
:::

:::exercise{id="E7.3" chapter="7" difficulty="difficile"}
## Domanda
Un sistema di due punti, ciascuno di massa $1\,\text{kg}$, ha velocità iniziali $(4,0)\,\text{m}/\text{s}$ e $(0,0)\,\text{m}/\text{s}$. In un intervallo, il lavoro totale delle forze esterne è $6\,\text{J}$ e quello delle forze interne è $-2\,\text{J}$. Se la velocità finale del centro di massa è $(3,0)\,\text{m}/\text{s}$, determinare l’energia cinetica interna finale.

:::hint
Trova l’energia cinetica totale finale dal lavoro complessivo, poi sottrai la parte dovuta al moto del centro di massa.
:::

:::solution
L’energia iniziale è $K_i=\frac12\cdot1\cdot4^2=8\,\text{J}$. Il lavoro totale è $W=6-2=4\,\text{J}$, quindi $K_f=8+4=12\,\text{J}$. La massa totale è $2\,\text{kg}$ e la parte traslazionale finale vale $K_{\mathrm{CM},f}=\frac12\cdot2\cdot3^2=9\,\text{J}$. L’energia cinetica interna finale è $K_{\mathrm{rel},f}=12-9=3\,\text{J}$.
:::
:::

:::exercise{id="E7.4" chapter="7" difficulty="facile"}
## Domanda
Due masse puntiformi, $m_1=2\,\text{kg}$ e $m_2=3\,\text{kg}$, si trovano rispettivamente in $x_1=0\,\text{m}$ e $x_2=4\,\text{m}$. Determinare la coordinata del centro di massa.

:::hint
Pesa ciascuna coordinata con la massa corrispondente e dividi per la massa totale.
:::

:::solution
La massa totale è $M=2+3=5\,\text{kg}$. La coordinata del centro di massa è $x_{\mathrm{CM}}=(m_1x_1+m_2x_2)/M=(2\cdot0+3\cdot4)/5=12/5=2.4\,\text{m}$.
:::
:::

:::exercise{id="E7.5" chapter="7" difficulty="facile"}
## Domanda
Un sistema di massa totale $4\,\text{kg}$ ha quantità di moto iniziale $\vec p_i=(2,0)\,\text{kg}\,\text{m}/\text{s}$. Su di esso agisce una forza esterna costante $\vec F=(6,0)\,\text{N}$ per $3\,\text{s}$. Determinare la quantità di moto finale e la velocità finale del centro di massa.

:::hint
Calcola l’impulso della forza e sommalo alla quantità di moto iniziale.
:::

:::solution
L’impulso è $\vec J=\vec F\Delta t=(18,0)\,\text{kg}\,\text{m}/\text{s}$. Dunque $\vec p_f=\vec p_i+\vec J=(20,0)\,\text{kg}\,\text{m}/\text{s}$. Poiché $\vec p_f=M\vec v_{\mathrm{CM},f}$, si ottiene $\vec v_{\mathrm{CM},f}=(5,0)\,\text{m}/\text{s}$.
:::
:::

:::exercise{id="E7.6" chapter="7" difficulty="facile"}
## Domanda
Due punti di massa $2\,\text{kg}$ ciascuno hanno velocità rispettivamente $3\,\text{m}/\text{s}$ e $1\,\text{m}/\text{s}$ lungo la stessa direzione e nello stesso verso. Calcolare l’energia cinetica totale, l’energia cinetica associata al moto del centro di massa e quella del moto relativo al centro di massa.

:::hint
Calcola l’energia totale dalle velocità dei punti; poi separa il moto del centro di massa dal moto relativo.
:::

:::solution
L’energia totale è $K=\frac12(2)3^2+\frac12(2)1^2=10\,\text{J}$. La velocità del centro di massa è $V_{\mathrm{CM}}=(3+1)/2=2\,\text{m}/\text{s}$, quindi la parte traslazionale è $K_{\mathrm{CM}}=\frac12(4)2^2=8\,\text{J}$. La parte relativa è $K_{\mathrm{rel}}=K-K_{\mathrm{CM}}=2\,\text{J}$.
:::
:::

:::exercise{id="E7.7" chapter="7" difficulty="facile"}
## Domanda
Un corpo di massa $2\,\text{kg}$ con velocità $4\,\text{m}/\text{s}$ urta un corpo di massa $3\,\text{kg}$ inizialmente fermo. Dopo l’urto i due corpi restano attaccati. Determinare la velocità comune e la variazione di energia cinetica.

:::hint
Durante l’urto conserva la quantità di moto. Calcola l’energia cinetica subito prima e subito dopo.
:::

:::solution
La quantità di moto iniziale è $p_i=2\cdot4=8\,\text{kg}\,\text{m}/\text{s}$. Dopo l’urto la massa totale è $5\,\text{kg}$, quindi $v_f=8/5=1.6\,\text{m}/\text{s}$. L’energia iniziale è $K_i=\frac12\cdot2\cdot4^2=16\,\text{J}$; quella finale è $K_f=\frac12\cdot5\cdot1.6^2=6.4\,\text{J}$. Pertanto $\Delta K=K_f-K_i=-9.6\,\text{J}$.
:::
:::

:::exercise{id="E7.8" chapter="7" difficulty="difficile"}
## Domanda
Un punto di massa $1\,\text{kg}$ ruota attorno a un perno fisso a distanza $2\,\text{m}$ con velocità tangenziale $3\,\text{m}/\text{s}$. Urta e resta attaccato a una massa di $2\,\text{kg}$ inizialmente ferma, posta alla stessa distanza dal perno. Il perno non esercita momento rispetto a sé durante l’urto. Determinare la velocità angolare finale e la variazione di energia cinetica.

:::hint
Conserva il momento angolare rispetto al perno durante l’urto; poi confronta l’energia cinetica iniziale con quella rotazionale finale.
:::

:::solution
Il momento angolare iniziale è $L_i=mrv=1\cdot2\cdot3=6\,\text{kg}\,\text{m}^2/\text{s}$. Dopo l’urto il momento d’inerzia è $I_f=(1+2)2^2=12\,\text{kg}\,\text{m}^2$. Dalla conservazione $I_f\omega_f=L_i$, quindi $\omega_f=0.5\,\text{rad}/\text{s}$. L’energia iniziale è $K_i=\frac12\cdot1\cdot3^2=4.5\,\text{J}$; quella finale è $K_f=\frac12I_f\omega_f^2=1.5\,\text{J}$. Pertanto $\Delta K=-3\,\text{J}$.
:::
:::

:::exercise{id="E7.9" chapter="7" difficulty="facile"}
## Domanda
Rispetto all’origine, due punti si muovono nel piano. Il primo ha massa $2\,\text{kg}$, posizione $(1,0)\,\text{m}$ e velocità $(0,3)\,\text{m}/\text{s}$. Il secondo ha massa $1\,\text{kg}$, posizione $(0,2)\,\text{m}$ e velocità $(4,0)\,\text{m}/\text{s}$. Calcolare la componente $z$ del momento angolare totale.

:::hint
Per ciascun punto calcola $L_z=xp_y-yp_x$ e somma i contributi.
:::

:::solution
Per il primo punto, $L_{1z}=1(2\cdot3)-0=6\,\text{kg}\,\text{m}^2/\text{s}$. Per il secondo, $L_{2z}=0-2(1\cdot4)=-8\,\text{kg}\,\text{m}^2/\text{s}$. La somma è $L_z=6-8=-2\,\text{kg}\,\text{m}^2/\text{s}$.
:::
:::

:::exercise{id="E7.10" chapter="7" difficulty="difficile"}
## Domanda
Due punti di massa $1\,\text{kg}$ si trovano rispetto al centro di massa nelle posizioni $(-1,0)\,\text{m}$ e $(1,0)\,\text{m}$; le loro velocità sono rispettivamente $(0,2)\,\text{m}/\text{s}$ e $(0,-2)\,\text{m}/\text{s}$. Calcolare il momento angolare totale rispetto al centro di massa e verificare che il momento angolare del centro di massa è nullo.

:::hint
Somma i momenti angolari calcolati con le posizioni e le velocità relative al centro di massa; calcola poi la quantità di moto totale.
:::

:::solution
I contributi relativi sono $L_{1z}=(-1)(2)-0=-2$ e $L_{2z}=(1)(-2)-0=-2$, in unità di $\text{kg}\,\text{m}^2/\text{s}$. Quindi $L_{\mathrm{rel},z}=-4\,\text{kg}\,\text{m}^2/\text{s}$. La quantità di moto totale è $(0,2)+(0,-2)=(0,0)$, perciò il contributo orbitale del centro di massa rispetto a qualunque polo è nullo.
:::
:::

:::exercise{id="E7.11" chapter="7" difficulty="medio"}
## Domanda
Un corpo di massa $1\,\text{kg}$ e velocità $4\,\text{m}/\text{s}$ urta elasticamente, lungo una retta, un corpo di massa $3\,\text{kg}$ inizialmente fermo. Determinare le velocità finali dei due corpi.

:::hint
Imponi la conservazione della quantità di moto e dell’energia cinetica, oppure usa la relazione tra velocità relativa di avvicinamento e di separazione.
:::

:::solution
Le equazioni di conservazione sono $v_1+3v_2=4$ e $v_1^2+3v_2^2=16$. Dalla prima, $v_1=4-3v_2$. Sostituendo nella seconda si ottiene $(4-3v_2)^2+3v_2^2=16$, da cui $12v_2( v_2-2)=0$. La soluzione non corrispondente a velocità invariate è $v_2=2\,\text{m}/\text{s}$ e quindi $v_1=-2\,\text{m}/\text{s}$.
:::
:::

:::exercise{id="E7.12" chapter="7" difficulty="facile"}
## Domanda
Un disco di massa $0.5\,\text{kg}$ viaggia a $4\,\text{m}/\text{s}$ verso una parete e rimbalza in verso opposto a $3\,\text{m}/\text{s}$. Il contatto dura $0.02\,\text{s}$. Calcolare l’impulso della parete sul disco e la forza media, assumendo positivo il verso iniziale.

:::hint
La variazione di quantità di moto include il segno della velocità dopo il rimbalzo.
:::

:::solution
La quantità di moto iniziale è $p_i=0.5\cdot4=2\,\text{kg}\,\text{m}/\text{s}$; quella finale è $p_f=0.5\cdot(-3)=-1.5\,\text{kg}\,\text{m}/\text{s}$. L’impulso è $J=p_f-p_i=-3.5\,\text{N}\,\text{s}$. La forza media è $F_{\mathrm{media}}=J/\Delta t=-3.5/0.02=-175\,\text{N}$.
:::
:::

:::exercise{id="E7.13" chapter="7" difficulty="difficile"}
## Domanda
Due carrelli di masse $m_1=4\,\text{kg}$ e $m_2=6\,\text{kg}$ sono collegati da un filo ideale su una rotaia orizzontale. Sul primo carrello agisce una forza di $30\,\text{N}$ verso destra; ciascun carrello subisce una forza di attrito di $5\,\text{N}$ verso sinistra. Il sistema parte da fermo. Calcolare l’accelerazione comune e la tensione del filo.

:::hint
Calcola prima il moto del sistema complessivo con la risultante esterna. Poi applica la seconda legge a uno dei due carrelli.
:::

:::solution
La risultante esterna è $30-5-5=20\,\text{N}$ verso destra e la massa totale è $10\,\text{kg}$. Pertanto $a=20/10=2\,\text{m}/\text{s}^2$. Sul secondo carrello agiscono la tensione verso destra e l’attrito verso sinistra: $T-5=m_2a=12$. Ne segue $T=17\,\text{N}$.
:::
:::

:::exercise{id="E7.14" chapter="7" difficulty="difficile"}
## Domanda
Un proiettile di massa $0.1\,\text{kg}$ e velocità $60\,\text{m}/\text{s}$ colpisce un blocco di massa $1.9\,\text{kg}$ inizialmente fermo e vi rimane conficcato. Il blocco può salire senza attrito dopo l’urto. Assumendo $g=10\,\text{m}/\text{s}^2$, determinare l’altezza massima raggiunta e l’energia dissipata nell’urto.

:::hint
Usa la quantità di moto nell’urto e la conservazione dell’energia meccanica durante la successiva salita.
:::

:::solution
La quantità di moto iniziale è $0.1\cdot60=6\,\text{kg}\,\text{m}/\text{s}$. La massa unita è $2\,\text{kg}$, quindi la velocità subito dopo l’urto è $v=3\,\text{m}/\text{s}$. In salita, $\frac12(2)v^2=(2)gh$, da cui $h=v^2/(2g)=9/20=0.45\,\text{m}$. Prima dell’urto l’energia cinetica è $180\,\text{J}$; subito dopo è $9\,\text{J}$. L’energia dissipata è quindi $171\,\text{J}$.
:::
:::

:::exercise{id="E7.15" chapter="7" difficulty="medio"}
## Domanda
Due corpi di masse $2\,\text{kg}$ e $1\,\text{kg}$ si muovono sulla stessa retta. Prima dell’urto hanno velocità $3\,\text{m}/\text{s}$ e $0$; dopo l’urto il coefficiente di restituzione è $e=0.5$. Determinare le velocità finali e la variazione di energia cinetica.

:::hint
Combina la conservazione della quantità di moto con la definizione di coefficiente di restituzione, facendo attenzione ai versi.
:::

:::solution
La quantità di moto impone $2v_{1f}+v_{2f}=6$. La relazione di restituzione è $v_{2f}-v_{1f}=e(3-0)=1.5$. Risolvendo il sistema si ricava $v_{1f}=1.5\,\text{m}/\text{s}$ e $v_{2f}=3\,\text{m}/\text{s}$. L’energia iniziale è $K_i=\frac12\cdot2\cdot3^2=9\,\text{J}$; quella finale è $K_f=\frac12\cdot2\cdot1.5^2+\frac12\cdot1\cdot3^2=6.75\,\text{J}$. Dunque $\Delta K=-2.25\,\text{J}$.
:::
:::

:::exercise{id="E7.16" chapter="7" difficulty="facile"}
## Domanda
Due punti materiali di masse $m_1=2\,\text{kg}$ e $m_2=3\,\text{kg}$ sono su un piano orizzontale liscio. Una forza esterna orizzontale di modulo $10\,\text{N}$ agisce sul sistema. Calcolare la risultante delle forze esterne e l’accelerazione del centro di massa.

:::hint
Applica la seconda legge al sistema nel suo insieme: le forze interne non contribuiscono alla risultante totale.
:::

:::solution
La risultante esterna è $F_{\mathrm{ext}}=10\,\text{N}$. La massa totale vale $M=2+3=5\,\text{kg}$. Per il centro di massa, $F_{\mathrm{ext}}=Ma_{\mathrm{CM}}$, quindi $a_{\mathrm{CM}}=10/5=2\,\text{m}/\text{s}^2$.
:::
:::

:::exercise{id="E7.17" chapter="7" difficulty="medio"}
## Domanda
Un sistema ha momento angolare iniziale $L_z=4\,\text{kg}\,\text{m}^2/\text{s}$. Su di esso agisce, rispetto a un polo fisso, un momento esterno costante $M_z=3\,\text{N}\,\text{m}$ per $2\,\text{s}$. Determinare il momento angolare finale.

:::hint
Integra il momento esterno nel tempo per trovare la variazione del momento angolare.
:::

:::solution
La variazione è $\Delta L_z=M_z\Delta t=3\cdot2=6\,\text{kg}\,\text{m}^2/\text{s}$. Pertanto $L_{zf}=L_{zi}+\Delta L_z=4+6=10\,\text{kg}\,\text{m}^2/\text{s}$.
:::
:::

:::exercise{id="E7.18" chapter="7" difficulty="difficile"}
## Domanda
Un corpo di massa $2\,\text{kg}$ con velocità $(3,0)\,\text{m}/\text{s}$ urta un corpo di massa $1\,\text{kg}$ con velocità $(0,6)\,\text{m}/\text{s}$. I corpi restano attaccati. Determinare la velocità finale e l’energia cinetica dissipata nell’urto.

:::hint
Tratta la quantità di moto come vettore e confronta le energie cinetiche prima e dopo l’urto.
:::

:::solution
La quantità di moto iniziale è $(2\cdot3,1\cdot6)=(6,6)\,\text{kg}\,\text{m}/\text{s}$. La massa complessiva è $3\,\text{kg}$, dunque la velocità finale è $(2,2)\,\text{m}/\text{s}$. L’energia iniziale è $K_i=\frac12\cdot2\cdot3^2+\frac12\cdot1\cdot6^2=27\,\text{J}$. L’energia finale è $K_f=\frac12\cdot3(2^2+2^2)=12\,\text{J}$. L’energia dissipata vale $K_i-K_f=15\,\text{J}$.
:::
:::

:::exercise{id="E7.19" chapter="7" difficulty="difficile"}
## Domanda
Due masse puntiformi, $m_1=2\,\text{kg}$ a distanza $r_1=1\,\text{m}$ dall’asse e $m_2=1\,\text{kg}$ a distanza $r_2=2\,\text{m}$, sono fissate a un’asta che ruota nel piano con velocità angolare $\omega=3\,\text{rad}/\text{s}$. Calcolare il momento angolare rispetto all’asse.

:::hint
Per una rotazione attorno all’asse, somma i contributi $m_ir_i^2\omega$.
:::

:::solution
Il momento d’inerzia rispetto all’asse è $I=m_1r_1^2+m_2r_2^2=2\cdot1^2+1\cdot2^2=6\,\text{kg}\,\text{m}^2$. Il momento angolare è $L=I\omega=6\cdot3=18\,\text{kg}\,\text{m}^2/\text{s}$.
:::
:::

:::exercise{id="E7.20" chapter="7" difficulty="facile"}
## Domanda
Due punti di massa $1\,\text{kg}$ si trovano rispettivamente in $(2,0)\,\text{m}$ e $(0,1)\,\text{m}$, con velocità $(0,3)\,\text{m}/\text{s}$ e $(-2,0)\,\text{m}/\text{s}$. Calcolare la componente $z$ del momento angolare del sistema rispetto all’origine.

:::hint
Usa per ciascun punto la componente $L_z=xmv_y-ymv_x$.
:::

:::solution
Per il primo punto, $L_{1z}=2\cdot1\cdot3=6\,\text{kg}\,\text{m}^2/\text{s}$. Per il secondo, $L_{2z}=0-1\cdot1\cdot(-2)=2\,\text{kg}\,\text{m}^2/\text{s}$. La componente totale vale $L_z=6+2=8\,\text{kg}\,\text{m}^2/\text{s}$.
:::
:::

:::exercise{id="E7.21" chapter="7" difficulty="medio"}
## Domanda
Due punti di masse $m_1=2\,\text{kg}$ e $m_2=3\,\text{kg}$ interagiscono su un piano liscio. Sul primo agisce una forza interna di $6\,\text{N}$ verso destra e sul secondo la forza di interazione opposta. Calcolare le accelerazioni dei due punti e quella del centro di massa.

:::hint
Usa le forze di interazione per calcolare separatamente le accelerazioni; poi considera la risultante sul sistema.
:::

:::solution
Sul primo punto la forza è $6\,\text{N}$ verso destra, dunque $a_1=6/2=3\,\text{m}/\text{s}^2$ verso destra. Sul secondo la forza è $6\,\text{N}$ verso sinistra, dunque $a_2=6/3=2\,\text{m}/\text{s}^2$ verso sinistra. Le forze interne si elidono nella somma sul sistema, che non ha forze esterne orizzontali. Quindi $a_{\mathrm{CM}}=0$.
:::
:::

:::exercise{id="E7.22" chapter="7" difficulty="medio"}
## Domanda
Un punto di massa $2\,\text{kg}$ si muove su una circonferenza centrata nell’origine. In un primo istante il raggio è $2\,\text{m}$ e la componente tangenziale della velocità è $6\,\text{m}/\text{s}$. In un secondo istante il raggio è $3\,\text{m}$. La forza è centrale. Determinare la componente tangenziale della velocità nel secondo istante.

:::hint
In assenza di momento della forza rispetto all’origine, conserva il momento angolare del punto.
:::

:::solution
Il momento angolare iniziale ha modulo $L=mrv_t=2\cdot2\cdot6=24\,\text{kg}\,\text{m}^2/\text{s}$. Poiché la forza è centrale, $L$ si conserva. Nel secondo istante $24=2\cdot3\cdot v_{t2}$, dunque $v_{t2}=4\,\text{m}/\text{s}$.
:::
:::

:::exercise{id="E7.23" chapter="7" difficulty="medio"}
## Domanda
Un sistema ha energia cinetica iniziale $10\,\text{J}$. Durante un intervallo, le forze esterne compiono lavoro totale $15\,\text{J}$ e le forze interne compiono lavoro totale $-5\,\text{J}$. Determinare l’energia cinetica finale.

:::hint
Per il sistema, la variazione di energia cinetica è uguale al lavoro totale, ottenuto sommando i contributi interni ed esterni.
:::

:::solution
Il lavoro totale sul sistema è $W=15+(-5)=10\,\text{J}$. Dal teorema dell’energia cinetica, $K_f-K_i=W$. Pertanto $K_f=10+10=20\,\text{J}$.
:::
:::

:::exercise{id="E7.24" chapter="7" difficulty="difficile"}
## Domanda
Un filo rettilineo occupa l’intervallo $0\le x\le L$ e ha densità lineare di massa $\lambda(x)=\lambda_0x/L$, con $\lambda_0>0$. Determinare la massa totale e la coordinata del centro di massa.

:::hint
Esprimi la massa e il momento del filo rispetto all’origine mediante integrali della densità lineare.
:::

:::solution
La massa è $M=\int_0^L\lambda(x)\,dx=(\lambda_0/L)\int_0^Lx\,dx=\lambda_0L/2$. Il momento rispetto all’origine è $\int_0^Lx\lambda(x)\,dx=(\lambda_0/L)\int_0^Lx^2\,dx=\lambda_0L^2/3$. Quindi $x_{\mathrm{CM}}=(\lambda_0L^2/3)/(\lambda_0L/2)=2L/3$.
:::
:::

:::exercise{id="E7.25" chapter="7" difficulty="medio"}
## Domanda
Un sistema di massa $4\,\text{kg}$ ha quantità di moto iniziale $\vec p_i=(2,0)\,\text{kg}\,\text{m}/\text{s}$. Da $t=0$ a $t=3\,\text{s}$ la forza esterna risultante è $\vec F(t)=(0,4t)\,\text{N}$. Determinare la quantità di moto e la velocità del centro di massa all’istante $t=3\,\text{s}$.

:::hint
Integra la forza nel tempo per ottenere l’impulso; la componente orizzontale della quantità di moto resta invariata.
:::

:::solution
L’impulso verticale è $J_y=\int_0^3 4t\,dt=2t^2\big|_0^3=18\,\text{kg}\,\text{m}/\text{s}$. Quindi $\vec p_f=(2,18)\,\text{kg}\,\text{m}/\text{s}$. Dividendo per la massa, $\vec v_{\mathrm{CM},f}=(0.5,4.5)\,\text{m}/\text{s}$.
:::
:::

:::exercise{id="E8.1" chapter="8" difficulty="facile"}
## Domanda
Rispetto ad assi principali passanti per un punto $O$, il tensore d'inerzia di un corpo ha momenti principali $I_1=2\,\mathrm{kg\,m^2}$, $I_2=8\,\mathrm{kg\,m^2}$ e $I_3=4\,\mathrm{kg\,m^2}$. Scrivi l'equazione dell'ellissoide d'inerzia nella convenzione $I_1x^2+I_2y^2+I_3z^2=1$ e calcola le lunghezze dei suoi semiassi.

:::hint
Negli assi principali l'equazione è diagonale; il semiasse associato a $I_i$ ha lunghezza $1/\sqrt{I_i}$.
:::

:::solution
Nella convenzione assegnata, sostituendo i momenti principali si ottiene

$$2x^2+8y^2+4z^2=1.$$

Portando l'equazione nella forma canonica dell'ellissoide,

$$\frac{x^2}{1/2}+\frac{y^2}{1/8}+\frac{z^2}{1/4}=1.$$

I semiassi sono quindi $1/\sqrt{2}$, $1/\sqrt{8}=1/(2\sqrt{2})$ e $1/2$, ciascuno con unità $(\mathrm{kg\,m^2})^{-1/2}$.
:::
:::

:::exercise{id="E8.2" chapter="8" difficulty="facile"}
## Domanda
Tre masse puntiformi, $m_1=1\,\mathrm{kg}$, $m_2=2\,\mathrm{kg}$ e $m_3=3\,\mathrm{kg}$, si trovano a distanze dall'asse $z$ rispettivamente pari a $0{,}2\,\mathrm{m}$, $0{,}3\,\mathrm{m}$ e $0{,}4\,\mathrm{m}$. Calcola il momento d'inerzia del sistema rispetto all'asse $z$.

:::hint
Per masse discrete, somma i prodotti tra ciascuna massa e il quadrato della sua distanza dall'asse.
:::

:::solution
Il momento d'inerzia discreto è $I_z=\sum_i m_i r_i^2$. Sostituendo i dati,

$$I_z=1(0{,}2)^2+2(0{,}3)^2+3(0{,}4)^2=0{,}04+0{,}18+0{,}48=0{,}70\,\mathrm{kg\,m^2}.$$
:::
:::

:::exercise{id="E8.3" chapter="8" difficulty="difficile"}
## Domanda
Un corpo rigido di massa $M=3\,\mathrm{kg}$ ha centro di massa in $C=(1,0,0)\,\mathrm{m}$ rispetto a un polo $O$. In un istante $\boldsymbol{v}_C=(2,1,0)\,\mathrm{m/s}$ e il momento angolare rispetto al centro di massa è $\boldsymbol{L}_C=(0,0,4)\,\mathrm{kg\,m^2/s}$. Calcola il momento angolare rispetto a $O$ secondo König.

:::hint
Il momento angolare rispetto a $O$ è la somma del momento rispetto al centro di massa e del momento orbitale del centro di massa.
:::

:::solution
Il teorema di König dà $\boldsymbol{L}_O=\boldsymbol{L}_C+\boldsymbol{r}_{C/O}\times M\boldsymbol{v}_C$. Qui $\boldsymbol{r}_{C/O}=(1,0,0)\,\mathrm{m}$ e $M\boldsymbol{v}_C=(6,3,0)\,\mathrm{kg\,m/s}$. Pertanto

$$\boldsymbol{r}_{C/O}\times M\boldsymbol{v}_C=(1,0,0)\times(6,3,0)=(0,0,3)\,\mathrm{kg\,m^2/s}.$$

Ne segue

$$\boldsymbol{L}_O=(0,0,4)+(0,0,3)=(0,0,7)\,\mathrm{kg\,m^2/s}.$$
:::
:::

:::exercise{id="E8.4" chapter="8" difficulty="medio"}
## Domanda
In una base cartesiana, il tensore d'inerzia è $\mathbf{I}=\operatorname{diag}(3,3,12)\,\mathrm{kg\,m^2}$. Determina l'equazione dell'ellissoide $\boldsymbol{x}^{\mathsf T}\mathbf{I}\boldsymbol{x}=1$ e i suoi semiassi. Quale asse è l'asse maggiore?

:::hint
Poiché la matrice è diagonale, i suoi elementi sono i momenti principali; confronta i reciproci delle loro radici quadrate.
:::

:::solution
L'equazione è $3x^2+3y^2+12z^2=1$, cioè

$$\frac{x^2}{1/3}+\frac{y^2}{1/3}+\frac{z^2}{1/12}=1.$$

I semiassi lungo $x$ e $y$ hanno lunghezza $1/\sqrt{3}$, mentre quello lungo $z$ ha lunghezza $1/\sqrt{12}=1/(2\sqrt{3})$. I primi due sono maggiori, quindi l'ellissoide ha un asse maggiore nel piano $xy$ e una simmetria di rivoluzione attorno a $z$.
:::
:::

:::exercise{id="E8.5" chapter="8" difficulty="facile"}
## Domanda
Un disco ruota nel piano $xy$ attorno al centro $O$ con velocità angolare costante $\boldsymbol{\omega}=4\boldsymbol{e}_z\,\mathrm{rad/s}$. Un punto $P$ del disco si trova in un istante in $(0{,}5\,\mathrm{m},0,0)$. Determina la velocità di $P$.

:::hint
Usa il prodotto vettoriale tra la velocità angolare e il vettore posizione di $P$ rispetto a $O$.
:::

:::solution
Per una rotazione attorno a un asse fisso, la velocità del punto è $\boldsymbol{v}_P=\boldsymbol{\omega}\times\boldsymbol{r}_{P/O}$. Quindi

$$\boldsymbol{v}_P=(4\boldsymbol{e}_z)\times(0{,}5\boldsymbol{e}_x)=2\boldsymbol{e}_y\,\mathrm{m/s}.$$

La velocità è diretta lungo $+y$ e ha modulo $2\,\mathrm{m/s}$.
:::
:::

:::exercise{id="E8.6" chapter="8" difficulty="medio"}
## Domanda
Un anello sottile uniforme ha massa $M=2\,\mathrm{kg}$ e raggio $R=0{,}5\,\mathrm{m}$. Determina il momento d'inerzia rispetto a un diametro nel piano dell'anello.

:::hint
Il momento rispetto all'asse perpendicolare al piano vale $MR^2$. Per simmetria, i due assi diametrali ortogonali contribuiscono in parti uguali alla somma dei momenti rispetto agli assi nel piano.
:::

:::solution
Per l'anello, ogni elemento di massa dista $R$ dall'asse centrale perpendicolare al piano, quindi $I_z=MR^2=2(0{,}5)^2=0{,}5\,\mathrm{kg\,m^2}$. Per il teorema degli assi perpendicolari, $I_z=I_x+I_y$. La simmetria circolare dà $I_x=I_y$, perciò ciascun momento diametrale vale $I_z/2$:

$$I_x=\frac{MR^2}{2}=0{,}25\,\mathrm{kg\,m^2}.$$
:::
:::

:::exercise{id="E8.7" chapter="8" difficulty="medio"}
## Domanda
Un'asta sottile omogenea di massa $M=3\,\mathrm{kg}$ e lunghezza $L=2\,\mathrm{m}$ è disposta lungo l'asse $x$, con centro nell'origine. Calcola il momento d'inerzia rispetto all'asse $z$ passante per il centro e perpendicolare all'asta.

:::hint
Rappresenta l'asta come una distribuzione lineare uniforme e integra $x^2$ lungo la sua lunghezza.
:::

:::solution
La densità lineare è $\lambda=M/L=1{,}5\,\mathrm{kg/m}$. Un elemento di lunghezza $dx$ ha massa $dm=\lambda\,dx$ e distanza $|x|$ dall'asse. Quindi

$$I_z=\int_{-L/2}^{L/2}x^2\,dm=\lambda\int_{-1}^{1}x^2\,dx=1{,}5\left\lbrack \frac{x^3}{3}\right\rbrack _{-1}^{1}=1\,\mathrm{kg\,m^2}.$$
:::
:::

:::exercise{id="E8.8" chapter="8" difficulty="difficile"}
## Domanda
Una scala uniforme di lunghezza $L=5\,\mathrm{m}$ e peso $P=200\,\mathrm{N}$ è appoggiata a una parete verticale liscia e a un pavimento orizzontale scabro, formando un angolo $\theta$ con il pavimento. Una persona di peso $Q=600\,\mathrm{N}$ si trova a distanza $s=4\,\mathrm{m}$ dal piede della scala, misurata lungo la scala. Determina l'angolo minimo di equilibrio se il coefficiente di attrito statico al pavimento è $\mu_s=0{,}5$.

:::hint
La parete esercita solo una reazione orizzontale. Usa l'equilibrio dei momenti al piede della scala e poi imponi che l'attrito richiesto non superi $\mu_s$ volte la reazione normale.
:::

:::solution
Sia $N_w$ la reazione orizzontale della parete. I momenti rispetto al piede della scala danno

$$N_wL\sin\theta=P\frac{L}{2}\cos\theta+Qs\cos\theta.$$

Quindi $N_w=(P/2+Qs/L)\cot\theta=(100+480)\cot\theta=580\cot\theta\,\mathrm{N}$. L'equilibrio orizzontale richiede un attrito al pavimento di modulo $f=N_w$; quello verticale dà la normale $N=P+Q=800\,\mathrm{N}$. La condizione di aderenza è $f\leq\mu_sN=400\,\mathrm{N}$, quindi $580\cot\theta\leq400$, ossia $\tan\theta\geq1{,}45$. Pertanto l'angolo minimo è $\theta_{\min}=\arctan(1{,}45)\approx55{,}4^\circ$.
:::
:::

:::exercise{id="E8.9" chapter="8" difficulty="difficile"}
## Domanda
Una sfera piena omogenea di massa $M=6\,\mathrm{kg}$ e raggio $R=0{,}30\,\mathrm{m}$ ha una cavità sferica concentrica di raggio $R/2$. La densità del materiale rimasto è $\rho=\frac{M}{\frac{4}{3}\pi(R^3-(R/2)^3)}$. Calcola il momento d'inerzia del corpo rispetto a un asse passante per il centro.

:::hint
Sottrai il momento d'inerzia della sfera rimossa da quello della sfera piena di raggio $R$, mantenendo la stessa densità.
:::

:::solution
Per una sfera piena di raggio $a$ e densità $\rho$, la massa è $4\pi\rho a^3/3$ e il momento assiale è $2Ma^2/5$. Il corpo cavo si ottiene sottraendo la sfera interna. In termini di $M$ e $R$,

$$I=\frac{2}{5}\frac{4\pi\rho}{3}R^5-\frac{2}{5}\frac{4\pi\rho}{3}\left(\frac{R}{2}\right)^5.$$

La massa residua è $M=\frac{4\pi\rho}{3}(R^3-(R/2)^3)$, dunque

$$I=\frac{2}{5}MR^2\frac{1-(1/2)^5}{1-(1/2)^3}=\frac{2}{5}MR^2\frac{31}{28}=\frac{31}{70}MR^2.$$

Con i valori dati, $I=\frac{31}{70}\cdot6\cdot0{,}09\,\mathrm{kg\,m^2}\approx0{,}239\,\mathrm{kg\,m^2}$.
:::
:::

:::exercise{id="E8.10" chapter="8" difficulty="facile"}
## Domanda
Una trave orizzontale è incernierata in $O$. Una forza verticale verso il basso di modulo $20\,\mathrm{N}$ è applicata a distanza $0{,}5\,\mathrm{m}$ da $O$. Quale momento, in modulo e verso, deve esercitare una seconda forza perpendicolare alla trave applicata a distanza $0{,}8\,\mathrm{m}$ da $O$ per equilibrare la trave?

:::hint
In equilibrio la somma dei momenti rispetto alla cerniera deve essere nulla. Calcola prima il momento della forza nota.
:::

:::solution
La forza nota produce un momento di modulo $\tau_1=Fd=20\cdot0{,}5=10\,\mathrm{N\,m}$. La seconda forza deve produrre momento opposto, quindi il suo momento ha modulo $10\,\mathrm{N\,m}$. Essendo perpendicolare alla trave, il modulo è $\tau_2=F_2(0{,}8\,\mathrm{m})$. Pertanto $F_2=10/0{,}8=12{,}5\,\mathrm{N}$, con verso tale da opporsi al momento della prima forza.
:::
:::

:::exercise{id="E8.11" chapter="8" difficulty="difficile"}
## Domanda
Il tensore d'inerzia rispetto a un punto $O$ e a una base ortonormale è $\mathbf{I}=\begin{pmatrix}4&-1&0\\-1&4&0\\0&0&2\end{pmatrix}\,\mathrm{kg\,m^2}$. Trova gli assi principali, i momenti principali e l'equazione dell'ellissoide d'inerzia nella base principale.

:::hint
Diagonalizza il blocco $2\times2$ nel piano $xy$. I vettori $(1,1,0)$ e $(1,-1,0)$ sono candidati ad autovettori.
:::

:::solution
Applicando la matrice ai vettori $(1,1,0)$ e $(1,-1,0)$ si trovano rispettivamente gli autovalori $3$ e $5$. Il vettore $(0,0,1)$ ha autovalore $2$. Gli assi principali sono dunque le direzioni $\boldsymbol{e}_1=(1,1,0)/\sqrt{2}$, $\boldsymbol{e}_2=(1,-1,0)/\sqrt{2}$ e $\boldsymbol{e}_3=(0,0,1)$, con momenti principali $3$, $5$ e $2\,\mathrm{kg\,m^2}$. Nelle coordinate $(X,Y,Z)$ lungo tali assi,

$$3X^2+5Y^2+2Z^2=1.$$
:::
:::

:::exercise{id="E8.12" chapter="8" difficulty="medio"}
## Domanda
Una lamina rigida si muove nel piano. In un istante il punto $A$ ha velocità $\boldsymbol{v}_A=(1,2)\,\mathrm{m/s}$ e la velocità angolare è $\boldsymbol{\omega}=3\boldsymbol{e}_z\,\mathrm{rad/s}$. Il punto $B$ si trova rispetto ad $A$ nel vettore $\boldsymbol{r}_{B/A}=(0{,}4,-0{,}2)\,\mathrm{m}$. Calcola $\boldsymbol{v}_B$.

:::hint
Somma alla velocità di $A$ il contributo rotazionale $\boldsymbol{\omega}\times\boldsymbol{r}_{B/A}$.
:::

:::solution
La relazione cinematica tra due punti dello stesso corpo è $\boldsymbol{v}_B=\boldsymbol{v}_A+\boldsymbol{\omega}\times\boldsymbol{r}_{B/A}$. Nel piano, $\boldsymbol{e}_z\times(x\boldsymbol{e}_x+y\boldsymbol{e}_y)=-y\boldsymbol{e}_x+x\boldsymbol{e}_y$. Pertanto

$$\boldsymbol{\omega}\times\boldsymbol{r}_{B/A}=3\boldsymbol{e}_z\times(0{,}4\boldsymbol{e}_x-0{,}2\boldsymbol{e}_y)=(0{,}6,1{,}2)\,\mathrm{m/s}.$$

Segue

$$\boldsymbol{v}_B=(1,2)+(0{,}6,1{,}2)=(1{,}6,3{,}2)\,\mathrm{m/s}.$$

Il suo modulo è $\sqrt{1{,}6^2+3{,}2^2}=1{,}6\sqrt{5}\,\mathrm{m/s}$.
:::
:::

:::exercise{id="E8.13" chapter="8" difficulty="difficile"}
## Domanda
Una ruota di raggio $R=0{,}30\,\mathrm{m}$ rotola senza strisciare su una guida rettilinea. Il centro $C$ avanza verso destra a velocità $v_C=1{,}2\,\mathrm{m/s}$. Determina la velocità angolare della ruota e le velocità del punto di contatto istantaneo $P$ e del punto superiore $Q$, rispetto alla guida.

:::hint
La condizione di rotolamento impone velocità nulla al punto di contatto. Applica poi la relazione tra le velocità dei punti del corpo rigido.
:::

:::solution
Per rotolamento senza strisciamento, il punto di contatto è istantaneamente fermo rispetto alla guida: $\boldsymbol{v}_P=\boldsymbol{0}$. La velocità del centro è $\boldsymbol{v}_C=v_C\boldsymbol{e}_x$. Per annullare la velocità di $P$, la ruota deve ruotare in senso orario, con $\boldsymbol{\omega}=-(v_C/R)\boldsymbol{e}_z=-4\boldsymbol{e}_z\,\mathrm{rad/s}$. Per il punto superiore, $\boldsymbol{r}_{Q/C}=R\boldsymbol{e}_y$; dunque

$$\boldsymbol{v}_Q=\boldsymbol{v}_C+\boldsymbol{\omega}\times\boldsymbol{r}_{Q/C}=1{,}2\boldsymbol{e}_x+(-4\boldsymbol{e}_z)\times(0{,}30\boldsymbol{e}_y)=2{,}4\boldsymbol{e}_x\,\mathrm{m/s}.$$

Il punto superiore si muove nella stessa direzione del centro, a velocità doppia.
:::
:::

:::exercise{id="E8.14" chapter="8" difficulty="facile"}
## Domanda
Un'asta sottile di massa $M=2\,\mathrm{kg}$ e lunghezza $L=1{,}5\,\mathrm{m}$ ha momento d'inerzia rispetto all'asse perpendicolare all'asta e passante per il centro pari a $ML^2/12$. Calcola il momento rispetto all'asse parallelo passante per un estremo.

:::hint
Applica il teorema di Huygens-Steiner con distanza tra gli assi pari a $L/2$.
:::

:::solution
Il teorema di Huygens-Steiner dà $I_E=I_C+Md^2$, con $d=L/2$. Quindi

$$I_E=\frac{ML^2}{12}+M\left(\frac{L}{2}\right)^2=\frac{ML^2}{3}.$$

Sostituendo $M=2\,\mathrm{kg}$ e $L=1{,}5\,\mathrm{m}$ si ottiene $I_E=2(1{,}5)^2/3=1{,}5\,\mathrm{kg\,m^2}$.
:::
:::

:::exercise{id="E8.15" chapter="8" difficulty="medio"}
## Domanda
Un corpo di massa totale $M=4\,\mathrm{kg}$ è formato da due masse puntiformi: $m_1=1\,\mathrm{kg}$ in $x_1=0$ e $m_2=3\,\mathrm{kg}$ in $x_2=2\,\mathrm{m}$. Calcola il momento d'inerzia rispetto all'asse perpendicolare alla retta delle masse e passante per il centro di massa, poi rispetto all'asse parallelo passante per la massa $m_1$.

:::hint
Trova prima il centro di massa e il momento d'inerzia rispetto a esso; usa poi Huygens-Steiner per l'asse traslato.
:::

:::solution
La coordinata del centro di massa è $x_C=(m_1x_1+m_2x_2)/M=1{,}5\,\mathrm{m}$. Le distanze delle masse dal centro sono $1{,}5\,\mathrm{m}$ e $0{,}5\,\mathrm{m}$, quindi

$$I_C=1(1{,}5)^2+3(0{,}5)^2=3\,\mathrm{kg\,m^2}.$$

L'asse passante per $m_1$ dista $d=1{,}5\,\mathrm{m}$ dall'asse centrale. Per Huygens-Steiner,

$$I_{m_1}=I_C+Md^2=3+4(1{,}5)^2=12\,\mathrm{kg\,m^2}.$$
:::
:::

:::exercise{id="E8.16" chapter="8" difficulty="medio"}
## Domanda
Un disco pieno uniforme ha massa $M=4\,\mathrm{kg}$ e raggio $R=0{,}6\,\mathrm{m}$. Calcola il momento d'inerzia rispetto a un diametro del disco.

:::hint
Puoi ricavare il momento assiale integrando su anelli concentrici e poi usare il teorema degli assi perpendicolari e la simmetria.
:::

:::solution
La densità superficiale è $\sigma=M/(\pi R^2)$. Un anello di raggio $r$ e spessore $dr$ ha massa $dm=2\pi r\sigma\,dr$; il suo contributo al momento assiale è $r^2dm$. Quindi

$$I_z=\int_0^R r^2(2\pi r\sigma\,dr)=\frac{\pi\sigma R^4}{2}=\frac{MR^2}{2}.$$

Per simmetria $I_x=I_y$, e per gli assi perpendicolari $I_z=I_x+I_y$. Dunque $I_x=MR^2/4$. Numericamente,

$$I_x=\frac{4(0{,}6)^2}{4}=0{,}36\,\mathrm{kg\,m^2}.$$
:::
:::

:::exercise{id="E8.17" chapter="8" difficulty="medio"}
## Domanda
Una trave orizzontale omogenea di lunghezza $4\,\mathrm{m}$ e peso $200\,\mathrm{N}$ è incernierata a un'estremità. Un cavo verticale sostiene l'altra estremità. Calcola la tensione del cavo e le componenti della reazione della cerniera.

:::hint
Scrivi l'equilibrio dei momenti rispetto alla cerniera per eliminare la reazione incognita; poi imponi l'equilibrio delle forze.
:::

:::solution
Il peso agisce al centro della trave, a $2\,\mathrm{m}$ dalla cerniera. L'equilibrio dei momenti rispetto alla cerniera richiede $T(4)-200(2)=0$, dunque $T=100\,\mathrm{N}$. L'equilibrio verticale dà $R_y+T-200=0$, quindi $R_y=100\,\mathrm{N}$. Non vi sono forze orizzontali, perciò $R_x=0$.
:::
:::

:::exercise{id="E8.18" chapter="8" difficulty="difficile"}
## Domanda
Un cilindro cavo omogeneo ha massa $M=5\,\mathrm{kg}$, raggio interno $R_1=0{,}10\,\mathrm{m}$ e raggio esterno $R_2=0{,}20\,\mathrm{m}$. Calcola il momento d'inerzia rispetto all'asse di simmetria longitudinale.

:::hint
Considera il cilindro come la differenza tra due cilindri pieni con la stessa densità volumica, oppure integra su gusci cilindrici concentrici.
:::

:::solution
La densità volumica è uniforme. Integrando su gusci di raggio $r$ e spessore $dr$, massa $dm=2\pi r\ell\rho\,dr$, dove $\ell$ è la lunghezza del cilindro. Il momento è

$$I=\int_{R_1}^{R_2}r^2dm=2\pi\ell\rho\int_{R_1}^{R_2}r^3dr=\frac{\pi\ell\rho}{2}(R_2^4-R_1^4).$$

Poiché $M=\pi\ell\rho(R_2^2-R_1^2)$, segue $I=\frac{M}{2}(R_1^2+R_2^2)$. Pertanto

$$I=\frac{5}{2}(0{,}10^2+0{,}20^2)=0{,}125\,\mathrm{kg\,m^2}.$$
:::
:::

:::exercise{id="E9.1" chapter="9" difficulty="medio"}
## Domanda
Un’asta omogenea di massa $2\,\mathrm{kg}$ e lunghezza $1.2\,\mathrm{m}$ è incernierata a un’estremità e si trova inizialmente orizzontale. Viene lasciata cadere da ferma nel piano verticale. Determinare la sua accelerazione angolare iniziale e la velocità angolare quando passa per la posizione verticale verso il basso. Usare $g=9.8\,\mathrm{m/s^2}$.

:::hint
All’istante iniziale usare il momento della forza peso rispetto alla cerniera. Per la velocità finale, confrontare la perdita di energia potenziale con l’energia cinetica rotazionale.
:::

:::solution
Il peso agisce a distanza $L/2$ dalla cerniera, perciò il momento iniziale vale $\tau=MgL/2$. Il momento d’inerzia rispetto all’estremità è $I=ML^2/3$. Ne segue $\alpha=\tau/I=3g/(2L)=12.25\,\mathrm{rad/s^2}$. Nel passaggio dalla posizione orizzontale a quella verticale il centro di massa scende di $L/2$. Dalla conservazione dell’energia, $MgL/2=\frac12 I\omega^2$, dunque $\omega^2=3g/L$ e $\omega=\sqrt{3\cdot9.8/1.2}=4.95\,\mathrm{rad/s}$ circa.
:::
:::

:::exercise{id="E9.2" chapter="9" difficulty="difficile"}
## Domanda
Un cilindro pieno omogeneo di massa $3\,\mathrm{kg}$ e raggio $0.20\,\mathrm{m}$ è inizialmente fermo su un piano inclinato di $30^\circ$. Il coefficiente di attrito statico vale $0.20$. Determinare se il cilindro può iniziare a rotolare senza strisciare; in caso contrario, assumere che scivoli e calcolare l’accelerazione del centro se il coefficiente di attrito dinamico è $0.20$. Usare $g=9.8\,\mathrm{m/s^2}$.

:::hint
Calcolare l’attrito statico richiesto dalla condizione di puro rotolamento e confrontarlo con il massimo disponibile. Se c’è slittamento, l’attrito dinamico agisce verso monte e produce anche un momento sul cilindro.
:::

:::solution
Per il puro rotolamento di un cilindro pieno su un piano inclinato, dalle equazioni di traslazione e rotazione si ricava $a=(2/3)g\sin30^\circ=3.27\,\mathrm{m/s^2}$. L’attrito statico richiesto è $f=Ma/2=4.90\,\mathrm{N}$. Il massimo disponibile è $f_{s,max}=\mu_s Mg\cos30^\circ=0.20\cdot3\cdot9.8\cdot0.866=5.09\,\mathrm{N}$. Poiché $4.90<5.09$, il puro rotolamento è possibile. Di conseguenza non si verifica il caso di slittamento e non occorre usare il coefficiente dinamico.
:::
:::

:::exercise{id="E9.3" chapter="9" difficulty="difficile"}
## Domanda
Un sistema isolato inizialmente fermo esplode in tre frammenti. Due frammenti hanno massa $1\,\mathrm{kg}$ ciascuno e velocità $3\,\mathrm{m/s}$ verso est e $4\,\mathrm{m/s}$ verso nord. Il terzo frammento ha massa $2\,\mathrm{kg}$. Determinare la velocità vettoriale del terzo frammento e l’energia cinetica totale finale del sistema.

:::hint
Applicare la conservazione vettoriale della quantità di moto separatamente lungo le due direzioni perpendicolari; poi sommare le energie cinetiche.
:::

:::solution
La quantità di moto iniziale è nulla. Le prime due componenti danno quindi $2v_{3x}+3=0$ e $2v_{3y}+4=0$, da cui $v_{3x}=-1.5\,\mathrm{m/s}$ e $v_{3y}=-2\,\mathrm{m/s}$. Il modulo della velocità del terzo frammento è $v_3=\sqrt{1.5^2+2^2}=2.5\,\mathrm{m/s}$. Le energie dei primi due frammenti sono $\frac12\cdot1\cdot3^2=4.5\,\mathrm{J}$ e $\frac12\cdot1\cdot4^2=8\,\mathrm{J}$. Per il terzo frammento l’energia è $\frac12\cdot2\cdot2.5^2=6.25\,\mathrm{J}$. La somma vale $18.75\,\mathrm{J}$.
:::
:::

:::exercise{id="E9.4" chapter="9" difficulty="medio"}
## Domanda
Due masse, $2\,\mathrm{kg}$ e $3\,\mathrm{kg}$, si muovono lungo una retta con velocità rispettivamente $4\,\mathrm{m/s}$ e $-1\,\mathrm{m/s}$. Determinare la velocità del centro di massa, l’energia cinetica totale e la sua scomposizione in energia cinetica del centro di massa ed energia cinetica rispetto al centro di massa.

:::hint
Calcolare prima la velocità del centro di massa. Verificare poi la scomposizione di König $K=\frac12Mv_{CM}^2+K_{CM}$.
:::

:::solution
La massa totale è $M=5\,\mathrm{kg}$ e la quantità di moto totale è $p=2\cdot4+3\cdot(-1)=5\,\mathrm{kg\,m/s}$, quindi $v_{CM}=p/M=1\,\mathrm{m/s}$. L’energia totale nel riferimento dato è $K=\frac12\cdot2\cdot4^2+\frac12\cdot3\cdot(-1)^2=17.5\,\mathrm{J}$. Il contributo traslazionale del centro di massa è $K_{CM,trasl}=\frac12\cdot5\cdot1^2=2.5\,\mathrm{J}$. Nel riferimento del centro di massa, le velocità sono $3\,\mathrm{m/s}$ e $-2\,\mathrm{m/s}$; pertanto $K_{CM}=\frac12\cdot2\cdot3^2+\frac12\cdot3\cdot(-2)^2=15\,\mathrm{J}$. La somma $2.5+15=17.5\,\mathrm{J}$ conferma il risultato.
:::
:::

:::exercise{id="E9.5" chapter="9" difficulty="difficile"}
## Domanda
Due dischi coassiali possono ruotare attorno allo stesso asse. Il primo ha momento d’inerzia $0.40\,\mathrm{kg\,m^2}$ e velocità angolare $8\,\mathrm{rad/s}$; il secondo ha momento d’inerzia $0.60\,\mathrm{kg\,m^2}$ ed è inizialmente fermo. I dischi vengono accostati e, per attrito, raggiungono la stessa velocità angolare. Supponendo che durante l’interazione il momento torcente esterno risultante sull’asse sia nullo, determinare tale velocità e l’energia dissipata.

:::hint
Durante l’interazione non agisce un momento esterno risultante sull’asse. Confrontare poi l’energia cinetica rotazionale prima e dopo l’accoppiamento.
:::

:::solution
Poiché il momento torcente esterno risultante sull’asse è nullo, si conserva il momento angolare:

$$0.40\cdot 8=(0.40+0.60)\omega_f$$

Da cui $\omega_f=3.2\,\mathrm{rad/s}$. L’energia iniziale è $K_i=\frac12\cdot0.40\cdot8^2=12.8\,\mathrm{J}$. L’energia finale è $K_f=\frac12\cdot1.00\cdot3.2^2=5.12\,\mathrm{J}$. L’energia dissipata dall’attrito è $K_i-K_f=7.68\,\mathrm{J}$.
:::
:::

:::exercise{id="E9.6" chapter="9" difficulty="facile"}
## Domanda
Un carrello di massa $1.5\,\mathrm{kg}$ viaggia a $4\,\mathrm{m/s}$ e urta un carrello fermo di massa $2.5\,\mathrm{kg}$. I due carrelli restano agganciati. Determinare la loro velocità comune dopo l’urto e l’energia cinetica dissipata.

:::hint
Durante l’urto si conserva la quantità di moto del sistema. Confrontare l’energia cinetica totale prima e dopo l’urto.
:::

:::solution
La quantità di moto iniziale vale $p_i=1.5\cdot4=6\,\mathrm{kg\,m/s}$. Dopo l’urto la massa complessiva è $4\,\mathrm{kg}$, dunque la velocità comune è $v_f=6/4=1.5\,\mathrm{m/s}$. L’energia cinetica iniziale è $K_i=\frac12\cdot1.5\cdot4^2=12\,\mathrm{J}$; quella finale è $K_f=\frac12\cdot4\cdot1.5^2=4.5\,\mathrm{J}$. L’energia dissipata è $K_i-K_f=7.5\,\mathrm{J}$.
:::
:::

:::exercise{id="E9.7" chapter="9" difficulty="medio"}
## Domanda
Un corpo di massa $2\,\mathrm{kg}$ si muove a $5\,\mathrm{m/s}$ e urta frontalmente un corpo di massa $3\,\mathrm{kg}$ che si muove a $1\,\mathrm{m/s}$ nello stesso verso. Il coefficiente di restituzione è $e=0.6$. Calcolare le velocità finali e la variazione dell’energia cinetica totale.

:::hint
Scrivere la conservazione della quantità di moto e la relazione tra velocità relativa di allontanamento e di avvicinamento.
:::

:::solution
Siano $v_1$ e $v_2$ le velocità finali. La conservazione della quantità di moto dà $2v_1+3v_2=2\cdot5+3\cdot1=13$. La legge di restituzione dà $v_2-v_1=e(5-1)=2.4$. Dalla seconda equazione, $v_2=v_1+2.4$; sostituendo nella prima si ottiene $5v_1+7.2=13$, quindi $v_1=1.16\,\mathrm{m/s}$ e $v_2=3.56\,\mathrm{m/s}$. Prima dell’urto $K_i=\frac12\cdot2\cdot5^2+\frac12\cdot3\cdot1^2=26.5\,\mathrm{J}$. Dopo l’urto $K_f=\frac12\cdot2\cdot1.16^2+\frac12\cdot3\cdot3.56^2=20.356\,\mathrm{J}$, cioè circa $20.4\,\mathrm{J}$. Pertanto $\Delta K=K_f-K_i=20.356-26.5=-6.144\,\mathrm{J}$, cioè circa $-6.1\,\mathrm{J}$.‌
:::
:::

:::exercise{id="E9.8" chapter="9" difficulty="medio"}
## Domanda
Un corpo di massa $1\,\mathrm{kg}$, inizialmente fermo e isolato durante l’esplosione, esplode in due frammenti. Il primo frammento, di massa $0.4\,\mathrm{kg}$, si muove a $6\,\mathrm{m/s}$ verso est. Determinare la velocità del secondo frammento e l’energia cinetica totale prodotta dall’esplosione.

:::hint
La quantità di moto totale iniziale è nulla e, poiché il corpo è isolato durante l’esplosione, si conserva. La massa del secondo frammento è la differenza tra la massa iniziale e quella del primo.
:::

:::solution
La massa del secondo frammento è $m_2=1-0.4=0.6\,\mathrm{kg}$. Poiché la quantità di moto iniziale è nulla e si conserva durante l’esplosione, $0.4\cdot6+0.6v_2=0$, dove il verso est è positivo. Ne segue $v_2=-4\,\mathrm{m/s}$, cioè $4\,\mathrm{m/s}$ verso ovest. L’energia cinetica totale finale è $K=\frac12\cdot0.4\cdot6^2+\frac12\cdot0.6\cdot4^2=12\,\mathrm{J}$.
:::
:::

:::exercise{id="E9.9" chapter="9" difficulty="facile"}
## Domanda
Un disco omogeneo di massa $4\,\mathrm{kg}$ e raggio $0.50\,\mathrm{m}$ è inizialmente fermo. Una forza tangenziale costante di $6\,\mathrm{N}$ è applicata al bordo per $3\,\mathrm{s}$. Trascurando ogni attrito, determinare l’accelerazione angolare e la velocità angolare finale.

:::hint
Calcolare il momento della forza e usare $I=\frac12MR^2$ per il disco.
:::

:::solution
Il momento torcente ha modulo $\tau=FR=6\cdot0.50=3\,\mathrm{N\,m}$. Il momento d’inerzia è $I=\frac12\cdot4\cdot0.50^2=0.50\,\mathrm{kg\,m^2}$. Dall’equazione rotazionale, $\alpha=\tau/I=6\,\mathrm{rad/s^2}$. Partendo da fermo con accelerazione costante, dopo $3\,\mathrm{s}$ la velocità angolare è $\omega=\alpha t=18\,\mathrm{rad/s}$.
:::
:::

:::exercise{id="E9.10" chapter="9" difficulty="difficile"}
## Domanda
Un disco omogeneo di massa $2\,\mathrm{kg}$ e raggio $0.30\,\mathrm{m}$ è inizialmente fermo e può ruotare senza attrito attorno al proprio asse centrale fisso. Un proiettile di massa $0.10\,\mathrm{kg}$ arriva tangenzialmente al bordo con velocità $12\,\mathrm{m/s}$ e vi resta conficcato. Determinare la velocità angolare finale e l’energia cinetica dissipata nell’urto.

:::hint
Conservare il momento angolare rispetto all’asse del disco. Dopo l’urto il momento d’inerzia comprende sia il disco sia il proiettile conficcato.
:::

:::solution
Il momento angolare iniziale è $L_i=m v R=0.10\cdot12\cdot0.30=0.36\,\mathrm{kg\,m^2/s}$. Il momento d’inerzia del disco è $I_d=\frac12MR^2=0.09\,\mathrm{kg\,m^2}$; quello del proiettile è $I_p=mR^2=0.009\,\mathrm{kg\,m^2}$. Quindi $I_f=0.099\,\mathrm{kg\,m^2}$ e, da $L_i=I_f\omega$, si ha $\omega=0.36/0.099=3.64\,\mathrm{rad/s}$ circa. L’energia iniziale è $K_i=\frac12\cdot0.10\cdot12^2=7.2\,\mathrm{J}$. Quella finale è $K_f=\frac12 I_f\omega^2=0.655\,\mathrm{J}$ circa. L’energia dissipata è $K_i-K_f=6.55\,\mathrm{J}$ circa.
:::
:::

:::exercise{id="E9.11" chapter="9" difficulty="medio"}
## Domanda
Una massa di $3\,\mathrm{kg}$ e una massa di $1\,\mathrm{kg}$ sono collegate da un filo ideale che passa su una carrucola a disco omogeneo di massa $2\,\mathrm{kg}$ e raggio $0.20\,\mathrm{m}$. Il filo non slitta sulla carrucola e il sistema è lasciato libero da fermo. Determinare l’accelerazione delle masse e le tensioni nei due tratti del filo. Usare $g=9.8\,\mathrm{m/s^2}$.

:::hint
Scrivere la seconda legge per ciascuna massa e l’equazione dei momenti per la carrucola. La differenza delle tensioni produce l’accelerazione angolare.
:::

:::solution
Sia $m_1=3\,\mathrm{kg}$ la massa discendente e $m_2=1\,\mathrm{kg}$ quella ascendente. Le equazioni sono $m_1g-T_1=m_1a$, $T_2-m_2g=m_2a$ e $(T_1-T_2)R=I\alpha$. Per la carrucola $I=\frac12MR^2$ e $\alpha=a/R$, quindi $T_1-T_2=(M/2)a=a$. Sommando le equazioni delle masse e includendo la relazione della carrucola si ottiene $a=(m_1-m_2)g/(m_1+m_2+M/2)=19.6/5=3.92\,\mathrm{m/s^2}$. Allora $T_1=m_1(g-a)=17.64\,\mathrm{N}$ e $T_2=m_2(g+a)=13.72\,\mathrm{N}$.
:::
:::

:::exercise{id="E9.12" chapter="9" difficulty="difficile"}
## Domanda
Un disco omogeneo di massa $2\,\mathrm{kg}$ e raggio $0.40\,\mathrm{m}$ ruota inizialmente a $10\,\mathrm{rad/s}$. Su di esso agisce un momento frenante variabile con l’angolo secondo $\tau(\theta)=-(1+0.5\theta)\,\mathrm{N\,m}$, dove $\theta$ è misurato in radianti dall’istante iniziale. Determinare l’angolo percorso prima dell’arresto.

:::hint
Il lavoro del momento torcente è l’integrale di $\tau$ rispetto all’angolo. Uguagliarlo alla variazione dell’energia cinetica rotazionale.
:::

:::solution
Il momento d’inerzia del disco è $I=\frac12MR^2=0.16\,\mathrm{kg\,m^2}$. L’energia cinetica rotazionale iniziale è $K_i=\frac12I\omega_0^2=8\,\mathrm{J}$. All’arresto l’energia finale è nulla, quindi il lavoro del momento è $-8\,\mathrm{J}$. Per un angolo percorso $\Theta$, il lavoro è $W=\int_0^\Theta-(1+0.5\theta)\,d\theta=-\Theta-0.25\Theta^2$. Pertanto $\Theta+0.25\Theta^2=8$, ossia $\Theta^2+4\Theta-32=0$. La radice positiva è $\Theta=4\,\mathrm{rad}$.
:::
:::

:::exercise{id="E9.13" chapter="9" difficulty="medio"}
## Domanda
Un cilindro pieno omogeneo di massa $4\,\mathrm{kg}$ e raggio $0.25\,\mathrm{m}$ rotola senza strisciare su un piano orizzontale. Una forza orizzontale di $12\,\mathrm{N}$ è applicata al centro di massa. Determinare l’accelerazione del centro e l’attrito statico necessario, indicandone il verso. Usare $I=\frac12MR^2$.

:::hint
La forza applicata al centro non produce momento rispetto al centro. L’attrito fornisce il momento che avvia la rotazione; il suo verso è opposto a quello della forza applicata.
:::

:::solution
Sia positiva la direzione della forza e indichiamo con $f$ il modulo dell’attrito, che agisce in verso opposto alla forza. Per la traslazione, $F-f=Ma$. Per la rotazione, $fR=I\alpha$, mentre il vincolo di rotolamento dà $\alpha=a/R$. Quindi $f=Ia/R^2=Ma/2$. Sostituendo nella legge della traslazione, $F-Ma/2=Ma$, da cui $a=2F/(3M)=2\,\mathrm{m/s^2}$. Si ottiene $f=Ma/2=4\,\mathrm{N}$, opposto alla forza applicata.
:::
:::

:::exercise{id="E9.14" chapter="9" difficulty="facile"}
## Domanda
Un anello sottile di massa $1.5\,\mathrm{kg}$ rotola senza strisciare da fermo lungo una discesa che comporta un abbassamento verticale di $0.80\,\mathrm{m}$. Determinare la velocità del centro di massa alla fine della discesa. Usare $g=9.8\,\mathrm{m/s^2}$ e $I=MR^2$.

:::hint
La perdita di energia potenziale gravitazionale si trasforma in energia cinetica traslazionale e rotazionale; imporre $v=\omega R$.
:::

:::solution
La conservazione dell’energia dà $Mgh=\frac12Mv^2+\frac12I\omega^2$. Con $I=MR^2$ e $\omega=v/R$, il membro destro diventa $Mv^2$. Pertanto $v^2=gh$ e $v=\sqrt{9.8\cdot0.80}=2.80\,\mathrm{m/s}$.
:::
:::

:::exercise{id="E9.15" chapter="9" difficulty="difficile"}
## Domanda
Un cilindro pieno omogeneo di massa $5\,\mathrm{kg}$ e raggio $0.30\,\mathrm{m}$ rotola senza strisciare su un piano orizzontale. Una forza orizzontale di $10\,\mathrm{N}$ è applicata tangenzialmente al punto più alto del cilindro, nel verso in avanti. Determinare l’accelerazione del centro di massa e la forza di attrito statico, specificandone il verso. Usare $I=\frac12MR^2$.

:::hint
La forza applicata al punto superiore produce un momento rispetto al centro. Scrivere con segno coerente sia l’equazione traslazionale sia quella rotazionale e imporre il vincolo di rotolamento.
:::

:::solution
Prendiamo in avanti come direzione positiva. La forza applicata in alto produce momento orario; l’attrito $f$ è inizialmente assunto positivo in avanti. Le equazioni sono $F+f=Ma$ e $R(f-F)=I\alpha$. Per rotolamento in avanti, $\alpha=-a/R$. Usando $I=\frac12MR^2$, la seconda equazione diventa $f-F=-Ma/2$. Insieme a $f+F=Ma$ si ottiene $a=4F/(3M)=40/15=2.67\,\mathrm{m/s^2}$. Quindi $f=Ma-F=13.33-10=3.33\,\mathrm{N}$, positivo: l’attrito è diretto in avanti.
:::
:::

:::exercise{id="E9.16" chapter="9" difficulty="difficile"}
## Domanda
Una pallina di massa $0.20\,\mathrm{kg}$ e velocità $10\,\mathrm{m/s}$ colpisce perpendicolarmente l’estremità di un’asta omogenea di massa $1.2\,\mathrm{kg}$ e lunghezza $0.80\,\mathrm{m}$. L’asta è inizialmente ferma e può ruotare senza attrito attorno a un perno fisso posto all’altra estremità. Dopo l’urto, la pallina rimbalza lungo la direzione iniziale con velocità $2\,\mathrm{m/s}$ in verso opposto. Determinare la velocità angolare dell’asta subito dopo l’urto e la frazione dell’energia cinetica iniziale dissipata.

:::hint
Durante l’urto si conserva il momento angolare rispetto al perno, perché l’impulso del perno ha momento nullo rispetto a esso. Per l’asta, usare il momento d’inerzia rispetto a un’estremità.
:::

:::solution
Prendiamo positivo il verso del momento angolare iniziale della pallina. Poiché la pallina arriva perpendicolarmente all’asta, prima dell’urto il suo momento angolare rispetto al perno vale $L_i=mvL=0.20\cdot10\cdot0.80=1.6\,\mathrm{kg\,m^2/s}$. Dopo l’urto, il momento angolare della pallina vale $L_f=-0.20\cdot2\cdot0.80=-0.32\,\mathrm{kg\,m^2/s}$. Il momento d’inerzia dell’asta rispetto al perno è $I=ML^2/3=1.2\cdot0.80^2/3=0.256\,\mathrm{kg\,m^2}$. Dalla conservazione del momento angolare, $1.6=-0.32+I\omega$, quindi $\omega=1.92/0.256=7.5\,\mathrm{rad/s}$. L’energia cinetica iniziale è $K_i=\frac12\cdot0.20\cdot10^2=10\,\mathrm{J}$. Quella finale è $K_f=\frac12\cdot0.20\cdot2^2+\frac12\cdot0.256\cdot7.5^2=7.6\,\mathrm{J}$. Pertanto la frazione dissipata è $(K_i-K_f)/K_i=0.24$.
:::
:::

:::exercise{id="E9.17" chapter="9" difficulty="facile"}
## Domanda
Due carrelli si muovono sulla stessa retta senza attrito. Il primo ha massa $2\,\mathrm{kg}$ e velocità iniziale $3\,\mathrm{m/s}$; il secondo ha massa $1\,\mathrm{kg}$ ed è fermo. Dopo un urto elastico, determinare le velocità finali dei due carrelli, indicando il verso con segno positivo uguale a quello del moto iniziale del primo carrello.

:::hint
Usare la conservazione della quantità di moto e dell’energia cinetica, oppure le formule dell’urto elastico unidimensionale.
:::

:::solution
Indichiamo con $v_1$ e $v_2$ le velocità finali. Le due conservazioni forniscono $2\cdot 3=2v_1+v_2$ e $2\cdot 3^2=2v_1^2+v_2^2$. Dalla prima equazione, $v_2=6-2v_1$. Sostituendo nella seconda si ottiene $18=2v_1^2+(6-2v_1)^2$, cioè $v_1=1\,\mathrm{m/s}$ oppure $v_1=3\,\mathrm{m/s}$. La seconda soluzione corrisponde allo stato senza urto; per l’urto effettivo si prende $v_1=1\,\mathrm{m/s}$, da cui $v_2=4\,\mathrm{m/s}$.
:::
:::

:::exercise{id="E9.18" chapter="9" difficulty="facile"}
## Domanda
Un volano ha momento d’inerzia $0.80\,\mathrm{kg\,m^2}$ e ruota a $5\,\mathrm{rad/s}$. Un momento torcente frenante costante di modulo $2\,\mathrm{N\,m}$ viene applicato fino all’arresto. Determinare il tempo necessario e il numero di giri compiuti durante la frenata.

:::hint
La decelerazione angolare è costante. Calcolare prima il tempo di arresto e poi l’angolo percorso usando la velocità angolare media.
:::

:::solution
L’accelerazione angolare è $\alpha=-\tau/I=-2/0.80=-2.5\,\mathrm{rad/s^2}$. Da $0=5-2.5t$ segue $t=2\,\mathrm{s}$. La velocità angolare media durante la frenata è $(5+0)/2=2.5\,\mathrm{rad/s}$, quindi l’angolo percorso è $\Delta\theta=2.5\cdot2=5\,\mathrm{rad}$. Il numero di giri è $N=5/(2\pi)=0.796$ circa.
:::
:::

:::exercise{id="E9.19" chapter="9" difficulty="facile"}
## Domanda
Tre punti materiali hanno masse $1\,\mathrm{kg}$, $2\,\mathrm{kg}$ e $3\,\mathrm{kg}$ e velocità scalari rispettivamente $2\,\mathrm{m/s}$, $-1\,\mathrm{m/s}$ e $3\,\mathrm{m/s}$ lungo una retta. Calcolare l’energia cinetica totale del sistema.

:::hint
L’energia cinetica totale è la somma delle energie cinetiche dei singoli punti; il segno della velocità non cambia il quadrato.
:::

:::solution
Si sommano i contributi: $K=\frac12\cdot1\cdot2^2+\frac12\cdot2\cdot(-1)^2+\frac12\cdot3\cdot3^2=2+1+13.5=16.5\,\mathrm{J}$.
:::
:::

:::exercise{id="E9.20" chapter="9" difficulty="medio"}
## Domanda
Un cilindro pieno omogeneo di raggio $0.20\,\mathrm{m}$ rotola senza strisciare in salita su un piano inclinato di $20^\circ$ con velocità iniziale del centro di $4.0\,\mathrm{m/s}$. Calcolare la distanza percorsa lungo il piano prima di fermarsi e l’altezza verticale raggiunta. Usare $g=9.8\,\mathrm{m/s^2}$.

:::hint
In assenza di dissipazione, l’energia cinetica iniziale, traslazionale e rotazionale, diventa energia potenziale gravitazionale.
:::

:::solution
Per il cilindro pieno, l’energia cinetica iniziale totale è $K=(1/2+1/4)Mv_0^2=3Mv_0^2/4$. All’arresto $Mgh=K$, quindi $h=3v_0^2/(4g)=3\cdot16/(4\cdot9.8)=1.224\,\mathrm{m}$. La distanza lungo il piano è $s=h/\sin20^\circ=1.224/0.342=3.58\,\mathrm{m}$ circa.
:::
:::

:::exercise{id="E9.21" chapter="9" difficulty="medio"}
## Domanda
Una sfera piena omogenea rotola senza strisciare dalla sommità di una rampa, partendo da ferma. Il dislivello verticale è $1.4\,\mathrm{m}$. Determinare la velocità del centro di massa in fondo alla rampa. Usare $I=\frac25MR^2$ e $g=9.8\,\mathrm{m/s^2}$.

:::hint
Usare la conservazione dell’energia meccanica insieme alla relazione cinematica di puro rotolamento.
:::

:::solution
La conservazione dell’energia dà $Mgh=\frac12Mv^2+\frac12I\omega^2$. Sostituendo $I=\frac25MR^2$ e $\omega=v/R$, si ottiene $Mgh=(1/2+1/5)Mv^2=(7/10)Mv^2$. Quindi $v^2=(10/7)gh$ e $v=\sqrt{(10/7)\cdot9.8\cdot1.4}=4.43\,\mathrm{m/s}$ circa.
:::
:::

:::exercise{id="E9.22" chapter="9" difficulty="facile"}
## Domanda
Un cilindro pieno omogeneo rotola senza strisciare lungo un piano inclinato di $30^\circ$. Determinare l’accelerazione del centro di massa e il modulo della forza di attrito statico in funzione della massa $M$. Usare $g=9.8\,\mathrm{m/s^2}$.

:::hint
Combinare la traslazione lungo il piano, l’equazione dei momenti rispetto al centro e il vincolo $a=\alpha R$.
:::

:::solution
Scegliamo positivo il verso di discesa. Lungo il piano, $Mg\sin30^\circ-f=Ma$. Il momento dell’attrito rispetto al centro dà $fR=I\alpha$; per il cilindro pieno $I=\frac12MR^2$ e il vincolo dà $\alpha=a/R$. Quindi $f=Ma/2$. Sostituendo nell’equazione traslazionale, $Mg/2-Ma/2=Ma$, da cui $a=g/3=3.27\,\mathrm{m/s^2}$. L’attrito vale $f=Ma/2=Mg/6=1.63M\,\mathrm{N}$, con $M$ espresso in chilogrammi, ed è diretto verso monte.
:::
:::

:::exercise{id="E10.1" chapter="10" difficulty="facile"}
## Domanda
Una superficie sferica completa è osservata dal suo centro. Qual è l'angolo solido sotteso dall'intera superficie?

:::hint
L'angolo solido totale attorno a un punto corrisponde all'area dell'intera sfera unitaria.
:::

:::solution
Per definizione, l'angolo solido totale è l'area della sfera unitaria. Tale area vale $4\pi$.
:::
:::

:::exercise{id="E10.2" chapter="10" difficulty="medio"}
## Domanda
Due cariche positive uguali $q=4{,}0\,\mathrm{nC}$ si trovano nei punti $( -0{,}30\,\mathrm{m},0)$ e $(0{,}30\,\mathrm{m},0)$. Calcola il campo elettrostatico nel punto $(0,0{,}40\,\mathrm{m})$. Usa $k=8{,}99\times10^9\,\mathrm{N\,m^2/C^2}$.

:::hint
I due contributi hanno lo stesso modulo. Scomponili lungo gli assi: le componenti orizzontali si cancellano e quelle verticali si sommano.
:::

:::solution
La distanza di ciascuna carica dal punto è $r=\sqrt{(0{,}30)^2+(0{,}40)^2}=0{,}50\,\mathrm{m}$. Il modulo del campo di ciascuna è $E_0=kq/r^2=(8{,}99\times10^9)(4{,}0\times10^{-9})/(0{,}50)^2\,\mathrm{N/C}=143{,}84\,\mathrm{N/C}$. La componente verticale di ciascun contributo è $E_0(0{,}40/0{,}50)=115{,}07\,\mathrm{N/C}$. Le componenti orizzontali si annullano e quelle verticali si sommano: $\vec E=(0,230{,}14)\,\mathrm{N/C}$.
:::
:::

:::exercise{id="E10.3" chapter="10" difficulty="medio"}
## Domanda
Due satelliti orbitano circolarmente attorno allo stesso pianeta. Il raggio dell'orbita del secondo è quattro volte quello del primo. Se il primo ha periodo $T_1=3{,}0\,\mathrm{h}$, determina il periodo $T_2$ del secondo.

:::hint
Per orbite attorno allo stesso corpo, il quadrato del periodo è proporzionale al cubo del raggio orbitale. Applica {{formula:10.3}}.
:::

:::solution
Dalla terza legge di Keplero, $T_2^2/T_1^2=(r_2/r_1)^3$. Quindi $T_2=T_1(r_2/r_1)^{3/2}=3{,}0\cdot4^{3/2}\,\mathrm{h}=3{,}0\cdot8\,\mathrm{h}=24\,\mathrm{h}$.
:::
:::

:::exercise{id="E10.4" chapter="10" difficulty="facile"}
## Domanda
Calcola il modulo del campo gravitazionale prodotto da una massa puntiforme $M=5{,}0\times10^{12}\,\mathrm{kg}$ in un punto distante $r=2{,}0\times10^3\,\mathrm{m}$. Usa $G=6{,}67\times10^{-11}\,\mathrm{N\,m^2/kg^2}$.

:::hint
Il modulo del campo gravitazionale di una massa puntiforme dipende da $M$ e da $r^2$. Applica {{formula:10.5}}.
:::

:::solution
Il modulo è $g=GM/r^2$. Sostituendo, $g=(6{,}67\times10^{-11})(5{,}0\times10^{12})/(2{,}0\times10^3)^2\,\mathrm{N/kg}=8{,}34\times10^{-5}\,\mathrm{N/kg}$. Il verso è diretto verso la massa.
:::
:::

:::exercise{id="E10.5" chapter="10" difficulty="medio"}
## Domanda
Due masse puntiformi, $M_1=4{,}0\times10^{10}\,\mathrm{kg}$ e $M_2=1{,}0\times10^{10}\,\mathrm{kg}$, sono ferme a distanza $d=6{,}0\,\mathrm{m}$. Determina il punto compreso tra loro in cui il campo gravitazionale risultante è nullo.

:::hint
Tra le masse i due campi hanno verso opposto. Uguaglia i loro moduli e indica con $x$ la distanza del punto da $M_1$.
:::

:::solution
Sia $x$ la distanza da $M_1$, perciò la distanza da $M_2$ è $d-x$. La condizione di annullamento è $GM_1/x^2=GM_2/(d-x)^2$. Eliminando $G$ e prendendo le radici positive, $\sqrt{M_1}/x=\sqrt{M_2}/(d-x)$. Quindi $x=d\sqrt{M_1}/(\sqrt{M_1}+\sqrt{M_2})=6{,}0\cdot2/(2+1)\,\mathrm{m}=4{,}0\,\mathrm{m}$.
:::
:::

:::exercise{id="E10.6" chapter="10" difficulty="facile"}
## Domanda
Una massa puntiforme $M=5{,}0\times10^{12}\,\mathrm{kg}$ genera un potenziale gravitazionale, posto nullo all'infinito. Calcola la variazione di energia potenziale di una massa di prova $m=2{,}0\,\mathrm{kg}$ che si sposta da $r_i=4{,}0\times10^3\,\mathrm{m}$ a $r_f=2{,}0\times10^3\,\mathrm{m}$. Usa $G=6{,}67\times10^{-11}\,\mathrm{N\,m^2/kg^2}$.

:::hint
Trova il potenziale in ciascun punto usando {{formula:10.10}}, poi moltiplica la differenza per la massa di prova.
:::

:::solution
Il potenziale di una massa puntiforme è $\Phi(r)=-GM/r$. La variazione di energia potenziale è $\Delta U=m\lbrack \Phi(r_f)-\Phi(r_i)\rbrack =GMm(1/r_i-1/r_f)$. Sostituendo i dati, $\Delta U=(6{,}67\times10^{-11})(5{,}0\times10^{12})(2{,}0)(1/(4{,}0\times10^3)-1/(2{,}0\times10^3))\,\mathrm{J}=-0{,}167\,\mathrm{J}$. Le due masse sono corrette: il valore negativo indica che l'energia potenziale diminuisce avvicinandosi alla massa $M$.
:::
:::

:::exercise{id="E10.7" chapter="10" difficulty="medio"}
## Domanda
Un cono circolare ha vertice nel punto di osservazione e semiangolo al vertice $\alpha=60^\circ$. Determina l'angolo solido del cono.

:::hint
Interseca il cono con una sfera centrata nel vertice: la sezione è una calotta sferica. Dividi l'area della calotta per il quadrato del raggio della sfera.
:::

:::solution
Su una sfera di raggio $R$, la calotta ha altezza $h=R(1-\cos\alpha)$. La sua area è $2\pi Rh$, quindi l'angolo solido è $\Omega=2\pi Rh/R^2=2\pi(1-\cos\alpha)$. Per $\alpha=60^\circ$, $\cos\alpha=1/2$ e $\Omega=\pi\,\mathrm{sr}$.
:::
:::

:::exercise{id="E10.8" chapter="10" difficulty="difficile"}
## Domanda
Una sfera omogenea di massa $M$ e raggio $R$ ha potenziale gravitazionale nullo all'infinito. Determina il potenziale in funzione della distanza dal centro per $0\le r\le R$, assumendo noto che il campo interno ha modulo $g(r)=GMr/R^3$ ed è diretto verso il centro.

:::hint
Usa $d\Phi/dr=g(r)$ con il verso radiale positivo verso l'esterno. Per il teorema dei gusci sferici, il campo esterno ha modulo $GM/r^2$; integrandolo da infinito fino a $R$ si ricava la condizione al contorno $\Phi(R)=-GM/R$. Integra poi il campo dal bordo fino al punto interno.
:::

:::solution
Per il teorema dei gusci sferici, all'esterno della sfera il campo ha modulo $GM/r^2$ ed è diretto verso il centro. Pertanto $\Phi(R)=-\int_\infty^R GM/s^2\,ds=-GM/R$. All'interno, la componente radiale del campo è $g_r=-GMr/R^3$. Dalla relazione $g_r=-d\Phi/dr$ segue $d\Phi/dr=GMr/R^3$. Integrando da $R$ a $r$, si ottiene $\Phi(r)-\Phi(R)=\int_R^r GMs/R^3\,ds=GM(r^2-R^2)/(2R^3)$. Sostituendo $\Phi(R)=-GM/R$, risulta $\Phi(r)=-GM(3R^2-r^2)/(2R^3)$.
:::
:::

:::exercise{id="E10.9" chapter="10" difficulty="medio"}
## Domanda
Un guscio sferico sottile ha massa $M=8{,}0\times10^{12}\,\mathrm{kg}$ e raggio $R=2{,}0\times10^3\,\mathrm{m}$. Calcola il potenziale gravitazionale a $r=1{,}0\times10^3\,\mathrm{m}$ dal centro, assumendo nullo il potenziale all'infinito. Usa $G=6{,}67\times10^{-11}\,\mathrm{N\,m^2/kg^2}$.

:::hint
Il teorema di Gauss implica che il campo gravitazionale all'interno di un guscio sferico è nullo. Il potenziale è quindi costante al suo interno e coincide con quello sulla superficie.
:::

:::solution
Poiché il campo interno è nullo, il potenziale non varia all'interno del guscio. Sulla superficie vale $\Phi(R)=-GM/R$. Pertanto, anche a $r=1{,}0\times10^3\,\mathrm{m}$, $\Phi=- (6{,}67\times10^{-11})(8{,}0\times10^{12})/(2{,}0\times10^3)\,\mathrm{J/kg}=-0{,}267\,\mathrm{J/kg}$.
:::
:::

:::exercise{id="E10.10" chapter="10" difficulty="difficile"}
## Domanda
Un satellite percorre un'orbita circolare di raggio $r=8{,}0\times10^6\,\mathrm{m}$ attorno a un pianeta. La velocità di fuga alla distanza $r$ è $v_f=10{,}0\,\mathrm{km/s}$. Quanto deve aumentare istantaneamente la sua velocità, nella direzione del moto, per raggiungere la velocità di fuga?

:::hint
Confronta la velocità orbitale circolare con quella di fuga alla stessa distanza. Ricava la prima da {{formula:10.2}} e usa {{formula:10.4}}.
:::

:::solution
Alla stessa distanza, $v_f=\sqrt{2GM/r}$ e $v_c=\sqrt{GM/r}$, dunque $v_f=\sqrt{2}\,v_c$. Ne segue $v_c=v_f/\sqrt{2}=10{,}0/\sqrt{2}\,\mathrm{km/s}\approx7{,}07\,\mathrm{km/s}$. L'incremento richiesto è $\Delta v=v_f-v_c=(10{,}0-7{,}07)\,\mathrm{km/s}\approx2{,}93\,\mathrm{km/s}$.
:::
:::

:::exercise{id="E10.11" chapter="10" difficulty="difficile"}
## Domanda
Un rettangolo piano è centrato sull'asse perpendicolare al suo centro, a distanza $d=3{,}0\,\mathrm{m}$ dal punto di osservazione. I suoi lati misurano $2a=4{,}0\,\mathrm{m}$ e $2b=2{,}0\,\mathrm{m}$. Determina l'angolo solido sotteso dal rettangolo.

:::hint
Per un elemento di area del piano, $d\Omega=d\,dx\,dy/(d^2+x^2+y^2)^{3/2}$. Integra sui limiti $-a\le x\le a$ e $-b\le y\le b$.
:::

:::solution
Per simmetria, l'integrale sul rettangolo è quattro volte quello sul quadrante $0\le x\le a$, $0\le y\le b$. Si ottiene la formula $\Omega=4\arctan\!\left(\frac{ab}{d\sqrt{d^2+a^2+b^2}}\right)$. Con $a=2{,}0\,\mathrm{m}$, $b=1{,}0\,\mathrm{m}$ e $d=3{,}0\,\mathrm{m}$, l'argomento dell'arcotangente è $2/(3\sqrt{14})\approx0{,}1782$. Quindi $\Omega\approx4(0{,}1763)=0{,}705\,\mathrm{sr}$.
:::
:::

:::exercise{id="E10.12" chapter="10" difficulty="difficile"}
## Domanda
Una carica puntiforme $q=2{,}0\,\mu\mathrm{C}$ si sposta da $A$ a $B$ in un campo elettrostatico. Il potenziale passa da $V_A=120\,\mathrm{V}$ a $V_B=40\,\mathrm{V}$. Calcola la variazione della sua energia potenziale e il lavoro compiuto dal campo.

:::hint
L'energia potenziale varia di $q(V_B-V_A)$. Il lavoro del campo è l'opposto della variazione di energia potenziale.
:::

:::solution
La variazione di energia potenziale è $\Delta U=q(V_B-V_A)=(2{,}0\times10^{-6})(40-120)\,\mathrm{J}=-1{,}6\times10^{-4}\,\mathrm{J}$. Il lavoro del campo è $W=-\Delta U=1{,}6\times10^{-4}\,\mathrm{J}$. Il segno positivo indica che il campo compie lavoro durante lo spostamento.
:::
:::

:::exercise{id="E10.13" chapter="10" difficulty="difficile"}
## Domanda
Una sfera omogenea di massa $M=6{,}0\times10^{24}\,\mathrm{kg}$ e raggio $R=6{,}0\times10^6\,\mathrm{m}$ genera un campo gravitazionale. Calcola il modulo del campo a distanza dal centro $r=3{,}0\times10^6\,\mathrm{m}$, all'interno della sfera. Usa $G=6{,}67\times10^{-11}\,\mathrm{N\,m^2/kg^2}$.

:::hint
Per una sfera omogenea, solo la massa racchiusa entro il raggio considerato contribuisce al campo interno. Esprimi la massa racchiusa come frazione della massa totale.
:::

:::solution
La densità è uniforme, quindi la massa entro $r$ è $M_r=M(r/R)^3$. Il campo interno vale $g=GM_r/r^2=GMr/R^3$. Inserendo i dati, $g=(6{,}67\times10^{-11})(6{,}0\times10^{24})(3{,}0\times10^6)/(6{,}0\times10^6)^3\,\mathrm{N/kg}=5{,}56\,\mathrm{N/kg}$, cioè circa $5{,}6\,\mathrm{N/kg}$.
:::
:::

:::exercise{id="E10.14" chapter="10" difficulty="facile"}
## Domanda
Un satellite descrive un'orbita circolare di raggio $r=7{,}0\times10^6\,\mathrm{m}$ attorno a un pianeta di massa $M=5{,}97\times10^{24}\,\mathrm{kg}$. Calcola la velocità orbitale. Usa $G=6{,}67\times10^{-11}\,\mathrm{N\,m^2/kg^2}$.

:::hint
Imponi che la forza gravitazionale fornisca la forza centripeta, oppure applica {{formula:10.2}}.
:::

:::solution
Per un'orbita circolare, $v=\sqrt{GM/r}$. Sostituendo i dati, $v=\sqrt{(6{,}67\times10^{-11})(5{,}97\times10^{24})/(7{,}0\times10^6)}\,\mathrm{m/s}=7{,}54\times10^3\,\mathrm{m/s}$.
:::
:::

:::exercise{id="E10.15" chapter="10" difficulty="facile"}
## Domanda
Due cariche puntiformi $q_1=2{,}0\,\mu\mathrm{C}$ e $q_2=-3{,}0\,\mu\mathrm{C}$ distano $r=0{,}50\,\mathrm{m}$. Calcola il modulo della forza elettrostatica tra loro e indica se è attrattiva o repulsiva. Usa $k=8{,}99\times10^9\,\mathrm{N\,m^2/C^2}$.

:::hint
Usa la legge di Coulomb per il modulo della forza. Il segno del prodotto delle cariche determina se la forza è attrattiva o repulsiva.
:::

:::solution
Il modulo della forza è $F=k|q_1q_2|/r^2$. Sostituendo $q_1=2{,}0\times10^{-6}\,\mathrm{C}$ e $q_2=-3{,}0\times10^{-6}\,\mathrm{C}$, si trova $F=(8{,}99\times10^9)(6{,}0\times10^{-12})/(0{,}50)^2\,\mathrm{N}=0{,}216\,\mathrm{N}$. Le cariche hanno segno opposto, quindi la forza è attrattiva.
:::
:::

:::exercise{id="E11.1" chapter="11" difficulty="medio"}
## Domanda
Un fluido ideale di densità $1000\,\mathrm{kg/m^3}$ scorre in un tubo orizzontale. In una sezione la velocità è $2{,}0\,\mathrm{m/s}$ e la pressione è $200\,\mathrm{kPa}$. In una seconda sezione la velocità è $8{,}0\,\mathrm{m/s}$. Determina la pressione nella seconda sezione.

:::hint
Applica Bernoulli tra le due sezioni. Poiché il tubo è orizzontale, i termini gravitazionali si cancellano.
:::

:::solution
Per Bernoulli tra le due sezioni orizzontali, $p_1+\frac12\rho v_1^2=p_2+\frac12\rho v_2^2$. Dunque $p_2=p_1+\frac12\rho(v_1^2-v_2^2)$. Sostituendo i valori, $p_2=200000\,\mathrm{Pa}+\frac12(1000\,\mathrm{kg/m^3})\lbrack (2{,}0\,\mathrm{m/s})^2-(8{,}0\,\mathrm{m/s})^2\rbrack =200000\,\mathrm{Pa}-60000\,\mathrm{Pa}=140000\,\mathrm{Pa}$.
:::
:::

:::exercise{id="E11.2" chapter="11" difficulty="difficile"}
## Domanda
Un grande serbatoio aperto all’atmosfera contiene acqua. Un piccolo foro orizzontale si trova a $1{,}25\,\mathrm{m}$ sotto la superficie libera e a $1{,}8\,\mathrm{m}$ dal suolo. Assumi che il livello dell’acqua resti costante, che la velocità della superficie sia trascurabile e che gli effetti viscosi siano trascurabili. A quale distanza orizzontale dal serbatoio il getto raggiunge il suolo? Usa $g=9{,}81\,\mathrm{m/s^2}$.

:::hint
Usa Bernoulli tra la superficie libera e il foro per ricavare la velocità di uscita. Poi calcola il tempo di caduta del getto trattandolo come un moto orizzontale e verticale indipendente.
:::

:::solution
Alla superficie e al foro la pressione è atmosferica; Bernoulli dà $v=\sqrt{2gh}$, dove $h=1{,}25\,\mathrm{m}$ è la profondità del foro. Il tempo di caduta da $y=1{,}8\,\mathrm{m}$ è ricavato da $y=\frac12gt^2$, quindi $t=\sqrt{2y/g}$. La distanza orizzontale è $x=vt=\sqrt{2gh}\sqrt{2y/g}=2\sqrt{hy}$. Pertanto $x=2\sqrt{(1{,}25\,\mathrm{m})(1{,}8\,\mathrm{m})}=3{,}0\,\mathrm{m}$.
:::
:::

:::exercise{id="E11.3" chapter="11" difficulty="facile"}
## Domanda
Acqua scorre in un tubo orizzontale. In una sezione di diametro $4{,}0\,\mathrm{cm}$ la velocità è $1{,}5\,\mathrm{m/s}$. Il tubo si restringe a un diametro di $2{,}0\,\mathrm{cm}$. Calcola la velocità dell’acqua nella sezione più stretta, assumendo il fluido incomprimibile e il moto stazionario.

:::hint
Per un fluido incomprimibile, la portata è la stessa in ogni sezione. L’area di una sezione circolare è proporzionale al quadrato del diametro.
:::

:::solution
Dalla continuità, $A_1v_1=A_2v_2$, quindi $v_2=v_1(A_1/A_2)=v_1(d_1/d_2)^2$. Con i dati assegnati, $v_2=(1{,}5\,\mathrm{m/s})(4{,}0/2{,}0)^2=(1{,}5)(4)\,\mathrm{m/s}=6{,}0\,\mathrm{m/s}$.
:::
:::

:::exercise{id="E11.4" chapter="11" difficulty="medio"}
## Domanda
Una pressa idraulica ha un pistone piccolo di area $4{,}0\,\mathrm{cm^2}$ e un pistone grande di area $200\,\mathrm{cm^2}$. Sul pistone piccolo agisce una forza di $120\,\mathrm{N}$. Trascurando attriti e differenze di quota, determina la forza esercitata dal pistone grande.

:::hint
In equilibrio, la pressione trasmessa dal fluido è la stessa sui due pistoni. Esprimi la pressione come rapporto tra forza e area.
:::

:::solution
Per il principio di Pascal, le pressioni sui due pistoni sono uguali: $F_1/A_1=F_2/A_2$. Isolando la forza sul pistone grande si ottiene $F_2=F_1(A_2/A_1)$. Il rapporto tra le aree è $200/4{,}0=50$, perciò $F_2=(120\,\mathrm{N})(50)=6000\,\mathrm{N}$.
:::
:::

:::exercise{id="E11.5" chapter="11" difficulty="difficile"}
## Domanda
Un blocco omogeneo di altezza $H$ galleggia all’interfaccia tra uno strato di olio e l’acqua sottostante. La densità del blocco è $900\,\mathrm{kg/m^3}$, quella dell’olio è $800\,\mathrm{kg/m^3}$ e quella dell’acqua è $1000\,\mathrm{kg/m^3}$. Il blocco è completamente immerso nei due liquidi. Determina la frazione dell’altezza del blocco che si trova nell’olio.

:::hint
Considera un blocco di sezione trasversale $A$ e indica con $x$ la parte della sua altezza immersa nell’olio. In equilibrio, la spinta totale è uguale al peso del blocco.
:::

:::solution
Il volume immerso nell’olio è $Ax$ e quello immerso nell’acqua è $A(H-x)$. L’equilibrio tra spinta e peso richiede $\rho_{\mathrm{o}}gAx+\rho_{\mathrm{a}}gA(H-x)=\rho_{\mathrm{b}}gAH$. Si semplificano $g$ e $A$; raccogliendo i termini si trova $x/H=(\rho_{\mathrm{a}}-\rho_{\mathrm{b}})/(\rho_{\mathrm{a}}-\rho_{\mathrm{o}})$. Sostituendo i dati, $x/H=(1000-900)/(1000-800)=1/2$. La frazione è compresa tra $0$ e $1$, quindi il blocco straddà effettivamente l’interfaccia come ipotizzato.
:::
:::

:::exercise{id="E11.6" chapter="11" difficulty="facile"}
## Domanda
In una piscina, un punto si trova a $2{,}5\,\mathrm{m}$ sotto la superficie dell’acqua. Assumi che la densità dell’acqua sia $1000\,\mathrm{kg/m^3}$, che $g=9{,}81\,\mathrm{m/s^2}$ e che la pressione atmosferica sia $1{,}013\times10^5\,\mathrm{Pa}$. Calcola la pressione idrostatica relativa e la pressione assoluta nel punto.

:::hint
Applica la legge di Stevino per trovare l’aumento di pressione rispetto alla superficie. Per ottenere la pressione assoluta, aggiungi la pressione atmosferica.
:::

:::solution
La pressione idrostatica relativa alla superficie vale $\Delta p=\rho gh$. Quindi $\Delta p=(1000\,\mathrm{kg/m^3})(9{,}81\,\mathrm{m/s^2})(2{,}5\,\mathrm{m})=24525\,\mathrm{Pa}$. La pressione assoluta è la somma della pressione atmosferica e dell’aumento idrostatico: $p=p_{\mathrm{atm}}+\Delta p=101300\,\mathrm{Pa}+24525\,\mathrm{Pa}=125825\,\mathrm{Pa}$.
:::
:::

:::exercise{id="E11.7" chapter="11" difficulty="difficile"}
## Domanda
Una sfera di raggio $0{,}50\,\mathrm{mm}$ e densità $7800\,\mathrm{kg/m^3}$ cade in un fluido di densità $1000\,\mathrm{kg/m^3}$ e viscosità dinamica $1{,}0\,\mathrm{Pa\,s}$. Assumendo inizialmente valida la legge di Stokes, calcola la velocità limite della sfera e il numero di Reynolds corrispondente, usando $g=9{,}81\,\mathrm{m/s^2}$. Verifica se il risultato è compatibile con il regime viscoso laminare.

:::hint
Alla velocità limite, il peso apparente della sfera è bilanciato dalla forza viscosa. Calcolata la velocità, usa il diametro della sfera nel numero di Reynolds e controlla che questo sia molto minore di uno.
:::

:::solution
Alla velocità limite, il peso meno la spinta di Archimede uguaglia la forza di Stokes: $\frac43\pi r^3(\rho_{\mathrm{s}}-\rho_{\mathrm{f}})g=6\pi\eta rv$. Risolvendo per la velocità si ottiene $v=2r^2(\rho_{\mathrm{s}}-\rho_{\mathrm{f}})g/(9\eta)$. Con $r=5{,}0\times10^{-4}\,\mathrm{m}$, si trova $v=2(5{,}0\times10^{-4}\,\mathrm{m})^2(7800-1000)\,\mathrm{kg/m^3}(9{,}81\,\mathrm{m/s^2})/\lbrack 9(1{,}0\,\mathrm{Pa\,s})\rbrack =3{,}71\times10^{-3}\,\mathrm{m/s}$. Il numero di Reynolds, calcolato usando il diametro $2r$, è $\mathrm{Re}=\rho_{\mathrm{f}}v(2r)/\eta=(1000\,\mathrm{kg/m^3})(3{,}71\times10^{-3}\,\mathrm{m/s})(1{,}0\times10^{-3}\,\mathrm{m})/(1{,}0\,\mathrm{Pa\,s})=3{,}71\times10^{-3}$. Poiché è molto minore di $1$, il risultato è compatibile con l’ipotesi di regime viscoso laminare.
:::
:::

:::exercise{id="E11.8" chapter="11" difficulty="medio"}
## Domanda
Un fluido di viscosità dinamica $1{,}0\times10^{-3}\,\mathrm{Pa\,s}$ scorre in regime laminare in un tubo circolare di raggio $1{,}0\,\mathrm{mm}$ e lunghezza $0{,}50\,\mathrm{m}$. La differenza di pressione tra le estremità è $2{,}0\,\mathrm{kPa}$. Calcola la portata volumetrica, assumendo valida la legge di Hagen-Poiseuille.

:::hint
La portata è proporzionale alla differenza di pressione e alla quarta potenza del raggio, e inversamente proporzionale alla viscosità e alla lunghezza del tubo. Fai attenzione a convertire tutte le grandezze nel sistema internazionale.
:::

:::solution
Dalla legge di Hagen-Poiseuille, $Q=\pi r^4\Delta p/(8\eta L)$. In unità SI, $r=1{,}0\times10^{-3}\,\mathrm{m}$, $\Delta p=2{,}0\times10^3\,\mathrm{Pa}$, $\eta=1{,}0\times10^{-3}\,\mathrm{Pa\,s}$ e $L=0{,}50\,\mathrm{m}$. Quindi $Q=\pi(1{,}0\times10^{-3}\,\mathrm{m})^4(2{,}0\times10^3\,\mathrm{Pa})/\lbrack 8(1{,}0\times10^{-3}\,\mathrm{Pa\,s})(0{,}50\,\mathrm{m})\rbrack =1{,}57\times10^{-6}\,\mathrm{m^3/s}$.
:::
:::

:::exercise{id="E11.9" chapter="11" difficulty="facile"}
## Domanda
Due piastre piane parallele sono separate da uno strato di fluido spesso $2{,}0\,\mathrm{mm}$. La piastra superiore, di area $0{,}15\,\mathrm{m^2}$, si muove a $0{,}12\,\mathrm{m/s}$ rispetto alla piastra inferiore, ferma. La viscosità dinamica del fluido è $0{,}80\,\mathrm{Pa\,s}$. Assumendo un profilo lineare della velocità nello strato, calcola il modulo della forza viscosa sulla piastra superiore.

:::hint
Nel profilo lineare, il gradiente di velocità è la differenza tra le velocità delle piastre divisa per la distanza che le separa. Moltiplica lo sforzo viscoso per l’area della piastra.
:::

:::solution
Il gradiente di velocità vale $\Delta v/d=(0{,}12\,\mathrm{m/s})/(0{,}0020\,\mathrm{m})=60\,\mathrm{s^{-1}}$. Lo sforzo viscoso è $\tau=\eta\Delta v/d=(0{,}80\,\mathrm{Pa\,s})(60\,\mathrm{s^{-1}})=48\,\mathrm{Pa}$. La forza è $F=\tau A=(48\,\mathrm{Pa})(0{,}15\,\mathrm{m^2})=7{,}2\,\mathrm{N}$.
:::
:::

:::exercise{id="E12.1" chapter="12" difficulty="facile"}
## Domanda
Un termometro empirico ha una proprietà termometrica $X$ che vale $12{,}0$ al punto di fusione del ghiaccio e $32{,}0$ al punto di ebollizione dell’acqua, entrambi alla pressione di riferimento. Supponi una relazione lineare tra $X$ e la temperatura Celsius. Qual è la temperatura indicata quando $X=20{,}0$?

:::hint
Calibra una retta usando i due punti fissi e poi sostituisci il valore misurato di $X$.
:::

:::solution
La relazione lineare è $t=aX+b$. Dai punti $(X,t)=(12,0)$ e $(32,100)$ si ricava $a=(100-0)/(32-12)=5\,\mathrm{°C}$ per unità di $X$ e $b=-60\,\mathrm{°C}$. Per $X=20$ si ottiene $t=5\cdot20-60=40\,\mathrm{°C}$.
:::
:::

:::exercise{id="E12.2" chapter="12" difficulty="medio"}
## Domanda
Una superficie di area $0{,}50\,\mathrm{m^2}$ è a $80\,\mathrm{°C}$ e scambia calore per convezione con aria a $20\,\mathrm{°C}$. Il coefficiente convettivo è $h=12\,\mathrm{W\,m^{-2}\,K^{-1}}$. Calcola la potenza termica ceduta dalla superficie all’aria.

:::hint
Usa la legge di Newton per la convezione e mantieni il segno positivo per la potenza ceduta.
:::

:::solution
La differenza di temperatura tra superficie e aria è $\Delta T=80-20=60\,\mathrm{K}$. Dalla legge di Newton, {{formula:12.22}}, la potenza ceduta vale $P=hA\Delta T=(12)(0{,}50)(60)=360\,\mathrm{W}$.
:::
:::

:::exercise{id="E12.3" chapter="12" difficulty="facile"}
## Domanda
Un gas si espande a pressione costante $p=2{,}0\times10^5\,\mathrm{Pa}$ da $V_i=1{,}0\,\mathrm{L}$ a $V_f=3{,}5\,\mathrm{L}$. Calcola il lavoro compiuto dal gas. Usa la convenzione per cui il lavoro compiuto dal gas è positivo.

:::hint
A pressione costante, il lavoro è il prodotto della pressione per la variazione di volume; converti i litri in metri cubi.
:::

:::solution
La variazione di volume è $\Delta V=3{,}5-1{,}0=2{,}5\,\mathrm{L}=2{,}5\times10^{-3}\,\mathrm{m^3}$. Pertanto $W=p\Delta V=(2{,}0\times10^5)(2{,}5\times10^{-3})=5{,}0\times10^2\,\mathrm{J}$, secondo {{formula:12.9}}.
:::
:::

:::exercise{id="E12.4" chapter="12" difficulty="facile"}
## Domanda
Una parete piana di area $2{,}0\,\mathrm{m^2}$ e spessore $0{,}10\,\mathrm{m}$ ha conducibilità termica $0{,}80\,\mathrm{W\,m^{-1}\,K^{-1}}$. Le sue facce sono mantenute a $20\,\mathrm{°C}$ e $5\,\mathrm{°C}$. Calcola la potenza termica condotta attraverso la parete in regime stazionario.

:::hint
Applica la legge di Fourier in valore assoluto usando la differenza di temperatura tra le facce.
:::

:::solution
La differenza di temperatura è $\Delta T=20-5=15\,\mathrm{K}$. Dalla legge di Fourier, {{formula:12.20}}, la potenza termica in valore assoluto è $P=kA\Delta T/L$. Quindi $P=(0{,}80)(2{,}0)(15)/(0{,}10)=240\,\mathrm{W}$. Il calore fluisce dalla faccia più calda a quella più fredda.
:::
:::

:::exercise{id="E12.5" chapter="12" difficulty="difficile"}
## Domanda
Un’asta di acciaio lunga $1{,}000\,\mathrm{m}$ a $20\,\mathrm{°C}$ è fissata tra due supporti rigidi distanti esattamente $1{,}000\,\mathrm{m}$. Il coefficiente di dilatazione lineare dell’acciaio è $1{,}2\times10^{-5}\,\mathrm{K^{-1}}$ e il modulo di Young è $2{,}0\times10^{11}\,\mathrm{Pa}$. L’asta viene riscaldata a $120\,\mathrm{°C}$ e resta elastica. Determina la tensione compressiva che si sviluppa nell’asta.

:::hint
La dilatazione libera sarebbe impedita dai supporti. In regime elastico, la deformazione meccanica compensa esattamente la deformazione termica.
:::

:::solution
La variazione di temperatura è $\Delta T=100\,\mathrm{K}$. La deformazione termica libera sarebbe $\epsilon_{\mathrm{th}}=\alpha\Delta T=(1{,}2\times10^{-5})(100)=1{,}2\times10^{-3}$. Poiché la lunghezza è vincolata, la deformazione totale è nulla e la deformazione elastica è $\epsilon_{\mathrm{el}}=-\epsilon_{\mathrm{th}}$. Dalla legge di Hooke per la deformazione assiale, la tensione è $\sigma=E\epsilon_{\mathrm{el}}=-(2{,}0\times10^{11})(1{,}2\times10^{-3})=-2{,}4\times10^8\,\mathrm{Pa}$. Il segno negativo indica compressione.
:::
:::

:::exercise{id="E12.6" chapter="12" difficulty="medio"}
## Domanda
Durante una trasformazione, un gas riceve $800\,\mathrm{J}$ di calore e compie un lavoro di $250\,\mathrm{J}$. Calcola la variazione della sua energia interna. Usa la convenzione $\Delta U=Q-W$, con $Q>0$ per il calore ricevuto e $W>0$ per il lavoro compiuto dal gas.

:::hint
Inserisci i segni di calore e lavoro nella prima legge della termodinamica con la convenzione specificata.
:::

:::solution
Il gas riceve calore, quindi $Q=+800\,\mathrm{J}$. Il gas compie lavoro, quindi $W=+250\,\mathrm{J}$. Dalla relazione $\Delta U=Q-W$, citata in {{formula:12.5}}, segue $\Delta U=800-250=550\,\mathrm{J}$.
:::
:::

:::exercise{id="E12.7" chapter="12" difficulty="difficile"}
## Domanda
Una parete composta da due strati in serie ha area $A=1{,}5\,\mathrm{m^2}$. Il primo strato ha spessore $L_1=0{,}10\,\mathrm{m}$ e conducibilità $k_1=0{,}50\,\mathrm{W\,m^{-1}\,K^{-1}}$; il secondo ha $L_2=0{,}20\,\mathrm{m}$ e $k_2=1{,}0\,\mathrm{W\,m^{-1}\,K^{-1}}$. Le temperature delle facce esterne sono $100\,\mathrm{°C}$ e $20\,\mathrm{°C}$. In regime stazionario, determina la potenza termica e la temperatura all’interfaccia.

:::hint
In regime stazionario la stessa potenza attraversa entrambi gli strati. Calcola le resistenze termiche e ripartisci la caduta di temperatura in proporzione a esse.
:::

:::solution
Le resistenze termiche sono $R_1=L_1/(k_1A)=0{,}10/(0{,}50\cdot1{,}5)=0{,}133\,\mathrm{K\,W^{-1}}$ e $R_2=L_2/(k_2A)=0{,}20/(1{,}0\cdot1{,}5)=0{,}133\,\mathrm{K\,W^{-1}}$. La resistenza totale è $R=R_1+R_2=0{,}267\,\mathrm{K\,W^{-1}}$. Pertanto la potenza è $P=(100-20)/R\approx300\,\mathrm{W}$. Poiché le due resistenze sono uguali, ciascuno strato presenta una caduta di temperatura pari a $40\,\mathrm{K}$. L’interfaccia si trova quindi a $100-40=60\,\mathrm{°C}$.
:::
:::

:::exercise{id="E12.8" chapter="12" difficulty="facile"}
## Domanda
Un blocco di alluminio di massa $0{,}50\,\mathrm{kg}$ viene riscaldato da $20\,\mathrm{°C}$ a $70\,\mathrm{°C}$. Il suo calore specifico è $900\,\mathrm{J\,kg^{-1}\,K^{-1}}$. Quanto calore assorbe?

:::hint
Usa la relazione tra calore scambiato, massa, calore specifico e variazione di temperatura.
:::

:::solution
La variazione di temperatura è $\Delta T=70-20=50\,\mathrm{K}$. Applicando $Q=mc\Delta T$, secondo {{formula:12.10}}, si ottiene $Q=(0{,}50)(900)(50)=22500\,\mathrm{J}$. Il valore è positivo perché il blocco assorbe calore.
:::
:::

:::exercise{id="E12.9" chapter="12" difficulty="medio"}
## Domanda
In un calorimetro ideale si mescolano $0{,}20\,\mathrm{kg}$ di acqua a $80\,\mathrm{°C}$ con $0{,}30\,\mathrm{kg}$ di acqua a $20\,\mathrm{°C}$. Assumi che non avvengano cambiamenti di fase e usa $c_{\mathrm{acqua}}=4180\,\mathrm{J\,kg^{-1}\,K^{-1}}$. Determina la temperatura finale.

:::hint
In assenza di perdite, il calore ceduto dall’acqua calda è uguale in valore assoluto a quello assorbito dall’acqua fredda.
:::

:::solution
Il bilancio termico è $m_1c(T_f-T_1)+m_2c(T_f-T_2)=0$. Il calore specifico comune si semplifica, quindi $T_f=\frac{m_1T_1+m_2T_2}{m_1+m_2}$. Sostituendo i dati, $T_f=\frac{(0{,}20)(80)+(0{,}30)(20)}{0{,}50}=44\,\mathrm{°C}$. La temperatura finale è $44\,\mathrm{°C}$.
:::
:::

:::exercise{id="E12.10" chapter="12" difficulty="difficile"}
## Domanda
In un calorimetro ideale, $0{,}20\,\mathrm{kg}$ di ghiaccio a $0\,\mathrm{°C}$ vengono mescolati con $0{,}50\,\mathrm{kg}$ di acqua a $40\,\mathrm{°C}$. Usa $c_{\mathrm{acqua}}=4180\,\mathrm{J\,kg^{-1}\,K^{-1}}$ e il calore latente di fusione del ghiaccio $L_f=3{,}34\times10^5\,\mathrm{J\,kg^{-1}}$. Determina la temperatura finale e lo stato finale del ghiaccio.

:::hint
Prima calcola il calore necessario a fondere tutto il ghiaccio e confrontalo con quello cedibile dall’acqua fino a $0\,\mathrm{°C}$. Se resta energia, usala per riscaldare l’acqua risultante.
:::

:::solution
Il calore necessario per fondere il ghiaccio è $Q_f=m_iL_f=(0{,}20)(3{,}34\times10^5)=66800\,\mathrm{J}$. L’acqua calda può cedere fino a $0\,\mathrm{°C}$ il calore $Q_a=m_ac\Delta T=(0{,}50)(4180)(40)=83600\,\mathrm{J}$, quindi tutto il ghiaccio fonde. Restano $83600-66800=16800\,\mathrm{J}$ per riscaldare $0{,}70\,\mathrm{kg}$ d’acqua. La temperatura finale soddisfa $16800=(0{,}70)(4180)T_f$, da cui $T_f\approx5{,}74\,\mathrm{°C}$.
:::
:::

:::exercise{id="E12.11" chapter="12" difficulty="difficile"}
## Domanda
Un termometro non lineare ha proprietà termometrica $X$ legata alla temperatura Celsius $t$ dalla legge $X=t+0{,}0100t^2$, con $t$ espresso in gradi Celsius. Il termometro viene immerso in un bagno per cui $X=68{,}0$. Determina le temperature del bagno compatibili con il valore della proprietà misurata.

:::hint
Risolvi l’equazione quadratica e verifica entrambe le soluzioni sostituendole nella relazione tra $X$ e $t$.
:::

:::solution
Si risolve l’equazione $0{,}0100t^2+t-68{,}0=0$. La formula risolutiva dà

$$
t=\frac{-1\pm\sqrt{1+4(0{,}0100)(68{,}0)}}{0{,}0200}=\frac{-1\pm\sqrt{3{,}72}}{0{,}0200}.
$$

Le due soluzioni sono $t\approx 46{,}4\,\mathrm{°C}$ e $t\approx -146{,}4\,\mathrm{°C}$. Entrambe sono temperature Celsius possibili e, sostituite nella relazione, danno $X=68{,}0$. La proprietà è crescente per $t>-50\,\mathrm{°C}$, poiché $dX/dt=1+0{,}0200t$, ma il testo non specifica che il bagno si trovi in tale intervallo. Senza un intervallo di funzionamento del termometro non si può quindi scegliere una sola delle due soluzioni.
:::
:::

:::exercise{id="E12.12" chapter="12" difficulty="difficile"}
## Domanda
Un gas compie un ciclo costituito da due trasformazioni. Nella prima riceve $600\,\mathrm{J}$ di calore e compie $200\,\mathrm{J}$ di lavoro; nella seconda cede $150\,\mathrm{J}$ di calore. Determina il lavoro compiuto dal gas nella seconda trasformazione e il lavoro totale del ciclo. Usa $\Delta U=Q-W$; dopo un ciclo lo stato finale coincide con quello iniziale.

:::hint
La variazione totale di energia interna in un ciclo è nulla. Somma i calori scambiati e applica la prima legge all’intero ciclo.
:::

:::solution
Nella prima trasformazione $Q_1=600\,\mathrm{J}$ e $W_1=200\,\mathrm{J}$, perciò $\Delta U_1=Q_1-W_1=400\,\mathrm{J}$. Nel ciclo completo $\Delta U_{\mathrm{tot}}=0$, quindi nella seconda trasformazione deve essere $\Delta U_2=-400\,\mathrm{J}$. Poiché il gas cede calore, $Q_2=-150\,\mathrm{J}$. Dalla relazione $\Delta U_2=Q_2-W_2$ si ricava $W_2=Q_2-\Delta U_2=-150-(-400)=250\,\mathrm{J}$. Il lavoro totale è $W_{\mathrm{tot}}=W_1+W_2=200+250=450\,\mathrm{J}$.
:::
:::

:::exercise{id="E12.13" chapter="12" difficulty="medio"}
## Domanda
La temperatura di un campione è $-18{,}0\,\mathrm{°C}$. Converti il valore in kelvin e in gradi Fahrenheit.

:::hint
Per passare da Celsius a kelvin somma $273{,}15$; per Fahrenheit usa una scala con intervallo di $180$ gradi tra i punti di congelamento ed ebollizione dell’acqua.
:::

:::solution
La conversione in kelvin dà $T=t+273{,}15=-18{,}0+273{,}15=255{,}15\,\mathrm{K}$, secondo {{formula:12.2}}. Per la scala Fahrenheit, $F=(9/5)t+32=(9/5)(-18{,}0)+32=-0{,}4\,\mathrm{°F}$.
:::
:::

:::exercise{id="E12.14" chapter="12" difficulty="difficile"}
## Domanda
Due recipienti rigidi, A e B, contengono gas e sono separati da una parete mobile diatermana e senza attrito. L’insieme è chiuso e le pareti esterne sono adiabatiche. In un certo istante $T_A=300\,\mathrm{K}$, $T_B=340\,\mathrm{K}$, $p_A=1{,}5\times10^5\,\mathrm{Pa}$ e $p_B=1{,}0\times10^5\,\mathrm{Pa}$. Indica quali condizioni di equilibrio sono violate e descrivi qualitativamente l’evoluzione iniziale del sistema.

:::hint
Considera separatamente lo scambio di calore attraverso la parete diatermana e il moto della parete mobile dovuto alle pressioni.
:::

:::solution
La parete diatermana permette lo scambio di calore tra i gas. Poiché $T_B>T_A$, inizialmente il calore fluisce da B verso A, quindi non c’è equilibrio termico. La parete mobile senza attrito risente della differenza $p_A-p_B=5{,}0\times10^4\,\mathrm{Pa}$, quindi è sottoposta a una forza risultante verso B e non c’è equilibrio meccanico. Inizialmente il volume di A aumenta e quello di B diminuisce; contemporaneamente A riceve calore e B lo cede. L’equilibrio termodinamico richiederà l’uguaglianza delle temperature e delle pressioni ai due lati della parete.
:::
:::

:::exercise{id="E12.15" chapter="12" difficulty="medio"}
## Domanda
Un recipiente di vetro ha capacità $1{,}000\,\mathrm{L}$ a $20\,\mathrm{°C}$ e viene riempito completamente di mercurio alla stessa temperatura. Il sistema viene riscaldato fino a $50\,\mathrm{°C}$. I coefficienti di dilatazione volumica sono $\beta_{\mathrm{vetro}}=2{,}7\times10^{-5}\,\mathrm{K^{-1}}$ e $\beta_{\mathrm{Hg}}=1{,}8\times10^{-4}\,\mathrm{K^{-1}}$. Quanto mercurio trabocca?

:::hint
Calcola separatamente l’aumento di volume del mercurio e quello della capacità del recipiente; il trabocco è la differenza tra i due aumenti.
:::

:::solution
La variazione di temperatura è $\Delta T=30\,\mathrm{K}$. L’aumento del volume del mercurio è $\Delta V_{\mathrm{Hg}}=\beta_{\mathrm{Hg}}V_0\Delta T=(1{,}8\times10^{-4})(1{,}000)(30)=0{,}00540\,\mathrm{L}$. L’aumento della capacità del recipiente è $\Delta V_{\mathrm{vetro}}=\beta_{\mathrm{vetro}}V_0\Delta T=(2{,}7\times10^{-5})(1{,}000)(30)=0{,}000810\,\mathrm{L}$. Il volume traboccato è la differenza: $0{,}00540-0{,}000810=0{,}00459\,\mathrm{L}=4{,}59\,\mathrm{mL}$.
:::
:::

:::exercise{id="E12.16" chapter="12" difficulty="facile"}
## Domanda
Una barra di rame lunga $2{,}0\,\mathrm{m}$ a $20\,\mathrm{°C}$ viene riscaldata fino a $70\,\mathrm{°C}$. Il coefficiente di dilatazione lineare del rame è $1{,}7\times10^{-5}\,\mathrm{K^{-1}}$. Calcola l’allungamento e la lunghezza finale.

:::hint
Calcola la variazione di lunghezza con la legge della dilatazione lineare e sommala alla lunghezza iniziale.
:::

:::solution
La variazione di temperatura è $\Delta T=50\,\mathrm{K}$. Dalla legge della dilatazione lineare, {{formula:12.16}}, si ha $\Delta L=\alpha L_0\Delta T=(1{,}7\times10^{-5})(2{,}0)(50)=1{,}7\times10^{-3}\,\mathrm{m}$. La lunghezza finale è $L_f=L_0+\Delta L=2{,}0017\,\mathrm{m}$.
:::
:::

:::exercise{id="E12.17" chapter="12" difficulty="facile"}
## Domanda
Un recipiente rigido e chiuso contiene un gas. Le pareti sono diatermane e il recipiente viene immerso in un ambiente a temperatura costante. Dopo un tempo sufficiente il gas raggiunge la stessa temperatura dell’ambiente. Indica se il sistema è aperto o chiuso e se, rispetto allo scambio termico, è isolato o non isolato.

:::hint
Verifica se la materia può attraversare il confine del sistema e se può attraversarlo energia sotto forma di calore.
:::

:::solution
Il sistema è il gas contenuto nel recipiente. Il recipiente è chiuso, quindi la materia non attraversa il confine: il sistema è chiuso. Le pareti sono diatermane, perciò il calore può attraversarle: il sistema non è isolato termicamente.
:::
:::

:::exercise{id="E12.18" chapter="12" difficulty="medio"}
## Domanda
Un gas è chiuso in un cilindro con pistone mobile e senza attrito. Il pistone è fermo, la pressione del gas è $1{,}20\times10^5\,\mathrm{Pa}$ e quella esterna è $1{,}00\times10^5\,\mathrm{Pa}$. Il gas e l’ambiente sono alla stessa temperatura. Il sistema è in equilibrio termodinamico? Motiva la risposta e determina la differenza di pressione che impedisce l’equilibrio meccanico.

:::hint
L’equilibrio termico richiede temperature uguali; per un pistone mobile senza attrito, l’equilibrio meccanico richiede anche pressioni uguali.
:::

:::solution
Le temperature del gas e dell’ambiente sono uguali, quindi c’è equilibrio termico. La differenza di pressione è $\Delta p=p_{\mathrm{gas}}-p_{\mathrm{est}}=1{,}20\times10^5-1{,}00\times10^5=2{,}0\times10^4\,\mathrm{Pa}$. Poiché la differenza non è nulla, sul pistone agisce una forza risultante e l’equilibrio meccanico non sussiste. Di conseguenza il sistema non è in equilibrio termodinamico.
:::
:::

:::exercise{id="E13.1" chapter="13" difficulty="medio"}
## Domanda
Una mole di gas ideale monoatomico compie un’espansione adiabatica reversibile dallo stato $A$, con $T_A=300\,\text{K}$ e volume $V_A$, allo stato $B$ con $V_B=2V_A$. Calcolare il rapporto $T_B/T_A$, la temperatura finale e il rapporto $p_B/p_A$.

:::hint
Per un gas monoatomico il rapporto dei calori specifici è $\gamma=5/3$. Usa le relazioni adiabatiche reversibili tra $T$, $V$ e tra $p$, $V$.
:::

:::solution
Per un gas monoatomico $\gamma=c_P/c_V=5/3$. Lungo un’adiabatica reversibile, $TV^{\gamma-1}$ è costante. Dunque $T_B/T_A=(V_A/V_B)^{\gamma-1}=2^{-2/3}$ e $T_B=300\cdot2^{-2/3}=188{,}99\,\text{K}$. Dalla relazione $pV^\gamma=\text{costante}$ si ricava $p_B/p_A=(V_A/V_B)^\gamma=2^{-5/3}=0{,}3150$.
:::
:::

:::exercise{id="E13.2" chapter="13" difficulty="facile"}
## Domanda
Una mole di gas ideale si trova alla pressione di $1{,}00\times10^5\,\text{Pa}$ e alla temperatura di $300\,\text{K}$. Calcolare il volume occupato usando $R=8{,}314\,\text{J mol}^{-1}\text{K}^{-1}$.

:::hint
Applica l’equazione di stato e isola il volume.
:::

:::solution
Dall’equazione di stato $pV=nRT$ si ricava $V=nRT/p$. Sostituendo i dati, $V=(1)(8{,}314)(300)/(1{,}00\times10^5)=2{,}4942\times10^{-2}\,\text{m}^3$.
:::
:::

:::exercise{id="E13.3" chapter="13" difficulty="facile"}
## Domanda
Due moli di gas ideale subiscono un’espansione libera in un recipiente isolato. Il volume raddoppia e la temperatura iniziale è $400\,\text{K}$. Determinare il calore scambiato, il lavoro compiuto, la variazione di energia interna e la temperatura finale.

:::hint
Nell’espansione libera il gas si espande contro il vuoto. Per un gas ideale l’energia interna dipende solo dalla temperatura.
:::

:::solution
Il recipiente è isolato, dunque $Q=0$. Durante l’espansione libera la pressione esterna è nulla, quindi $W=0$. Dal primo principio, $\Delta U=Q-W=0$. Per un gas ideale, $\Delta U$ dipende solo dalla temperatura; di conseguenza $T_B=T_A=400\,\text{K}$.
:::
:::

:::exercise{id="E13.4" chapter="13" difficulty="facile"}
## Domanda
Un campione di elio di massa $8{,}00\,\text{g}$ è contenuto in un recipiente di volume $24{,}94\,\text{L}$ alla pressione di $2{,}00\times10^5\,\text{Pa}$. Sapendo che la massa molare dell’elio è $4{,}00\,\text{g mol}^{-1}$, determinare la quantità di sostanza e la temperatura. Usare $R=8{,}314\,\text{J mol}^{-1}\text{K}^{-1}$.

:::hint
Ricava prima il numero di moli dalla massa e dalla massa molare; poi usa l’equazione di stato.
:::

:::solution
La quantità di sostanza è $n=m/M=(8{,}00\,\text{g})/(4{,}00\,\text{g mol}^{-1})=2{,}00\,\text{mol}$. Convertendo il volume, $V=0{,}02494\,\text{m}^3$. Dall’equazione di stato, $T=pV/(nR)=(2{,}00\times10^5)(0{,}02494)/\lbrack (2{,}00)(8{,}314)\rbrack =300{,}0\,\text{K}$.
:::
:::

:::exercise{id="E13.5" chapter="13" difficulty="medio"}
## Domanda
Due moli di gas ideale biatomico si trovano a $300\,\text{K}$. Assumendo attivi i tre gradi di libertà traslazionali e i due gradi di libertà rotazionali, calcolare l’energia interna e il calore specifico molare a volume costante. Usare $R=8{,}314\,\text{J mol}^{-1}\text{K}^{-1}$.

:::hint
Per ciascun grado di libertà quadratico l’energia media è $kT/2$. Ricava quindi l’energia molare e il suo coefficiente rispetto alla temperatura.
:::

:::solution
Il numero di gradi di libertà attivi è $f=5$. Per equipartizione, l’energia interna del gas è $U=(f/2)nRT=(5/2)(2)(8{,}314)(300)=12471\,\text{J}$. A volume costante $C_V=(\partial U/\partial T)_V$, quindi il calore specifico molare è $c_V=C_V/n=(f/2)R=(5/2)R=20{,}785\,\text{J mol}^{-1}\text{K}^{-1}$.
:::
:::

:::exercise{id="E13.6" chapter="13" difficulty="facile"}
## Domanda
Una mole di gas ideale monoatomico viene riscaldata a volume costante. La pressione passa da $1{,}00\times10^5\,\text{Pa}$ a $3{,}00\times10^5\,\text{Pa}$ e la temperatura iniziale è $250\,\text{K}$. Determinare la temperatura finale e il calore assorbito. Usare $c_V=3R/2$ e $R=8{,}314\,\text{J mol}^{-1}\text{K}^{-1}$.

:::hint
A volume e quantità di gas costanti, pressione e temperatura assoluta sono proporzionali. In una trasformazione isocora il lavoro è nullo.
:::

:::solution
A volume costante, $p/T$ è costante, quindi $T_B=T_A(p_B/p_A)=(250)(3)=750\,\text{K}$. Il lavoro è nullo, perciò $Q=\Delta U=nc_V(T_B-T_A)=(1)(3R/2)(500)=6235{,}5\,\text{J}$.
:::
:::

:::exercise{id="E13.7" chapter="13" difficulty="medio"}
## Domanda
Due moli di gas ideale monoatomico passano da $300\,\text{K}$ a $400\,\text{K}$ a pressione costante. Calcolare $\Delta U$, il lavoro compiuto dal gas e il calore assorbito. Usare $c_V=3R/2$ e $R=8{,}314\,\text{J mol}^{-1}\text{K}^{-1}$.

:::hint
Calcola separatamente la variazione di energia interna e il lavoro isobaro; poi applica il primo principio.
:::

:::solution
La variazione di temperatura è $100\,\text{K}$. Si ha $\Delta U=nc_V\Delta T=(2)(3R/2)(100)=2494{,}2\,\text{J}$. Il lavoro isobaro è $W=nR\Delta T=(2)(8{,}314)(100)=1662{,}8\,\text{J}$. Perciò $Q=\Delta U+W=4157{,}0\,\text{J}$, assorbito dal gas.
:::
:::

:::exercise{id="E13.8" chapter="13" difficulty="facile"}
## Domanda
Una mole di gas ideale monoatomico viene riscaldata reversibilmente a pressione costante da $300\,\text{K}$ a $600\,\text{K}$. Calcolare il lavoro compiuto dal gas e il calore assorbito. Usare $c_V=3R/2$ e $R=8{,}314\,\text{J mol}^{-1}\text{K}^{-1}$.

:::hint
A pressione costante il lavoro è $nR\Delta T$; il calore si ricava dalla variazione di energia interna e dal primo principio.
:::

:::solution
La variazione di temperatura è $\Delta T=300\,\text{K}$. Il lavoro compiuto dal gas è $W=nR\Delta T=(1)(8{,}314)(300)=2494{,}2\,\text{J}$. La variazione di energia interna vale $\Delta U=nc_V\Delta T=(1)(3R/2)(300)=3741{,}3\,\text{J}$. Dal primo principio, con $\Delta U=Q-W$, segue $Q=\Delta U+W=6235{,}5\,\text{J}$, quindi il gas assorbe calore.
:::
:::

:::exercise{id="E13.9" chapter="13" difficulty="difficile"}
## Domanda
Una mole di gas ideale monoatomico passa dallo stato $A$, con $T_A=300\,\text{K}$ e volume $V_0$, allo stato $B$, con $T_B=600\,\text{K}$ e volume $2V_0$. Si confrontino due percorsi. Nel percorso $1$ il gas viene prima riscaldato a volume costante e poi espanso isotermicamente a $600\,\text{K}$. Nel percorso $2$ viene riscaldato a pressione costante. Calcolare per ciascun percorso $W$ e $Q$, usando $R=8{,}314\,\text{J mol}^{-1}\text{K}^{-1}$.

:::hint
La variazione di energia interna è uguale nei due percorsi. Calcola il lavoro delle singole tappe e ricava il calore dal primo principio, con $W$ positivo se compiuto dal gas.
:::

:::solution
In entrambi i percorsi, $\Delta U=nc_V(T_B-T_A)=(3R/2)(300)=3741{,}3\,\text{J}$. Nel percorso $1$, la prima tappa è isocora e non comporta lavoro; la seconda è isoterma, quindi $W_1=nRT_B\ln(2)=8{,}314(600)\ln2\approx3457{,}7\,\text{J}$. Ne segue $Q_1=\Delta U+W_1\approx7199{,}0\,\text{J}$. Nel percorso $2$, il lavoro isobaro è $W_2=nR(T_B-T_A)=2494{,}2\,\text{J}$ e $Q_2=\Delta U+W_2=6235{,}5\,\text{J}$. I due risultati sono coerenti con la convenzione di $W$ positivo per il lavoro compiuto dal gas; il lavoro e il calore dipendono dal percorso.
:::
:::

:::exercise{id="E13.10" chapter="13" difficulty="difficile"}
## Domanda
Un ciclo reversibile è composto da due isobare e due isocore, che nel piano $p$-$V$ formano un rettangolo percorso in senso orario. I volumi estremi sono $V_1=10{,}0\,\text{L}$ e $V_2=30{,}0\,\text{L}$; le pressioni estreme sono $p_1=1{,}00\times10^5\,\text{Pa}$ e $p_2=2{,}00\times10^5\,\text{Pa}$. Calcolare il lavoro netto compiuto dal gas in un ciclo.

:::hint
Il lavoro sulle isocore è nullo. Somma i lavori sulle due isobare, tenendo conto del verso di ciascuna trasformazione.
:::

:::solution
Sull’isobara ad alta pressione il gas si espande e compie il lavoro $p_2(V_2-V_1)$. Sull’isobara a bassa pressione viene compresso e il lavoro è $p_1(V_1-V_2)$. Il lavoro netto è quindi $W=(p_2-p_1)(V_2-V_1)$. Con $V_2-V_1=0{,}0200\,\text{m}^3$, si ottiene $W=(1{,}00\times10^5)(0{,}0200)=2000\,\text{J}$.
:::
:::

:::exercise{id="E13.11" chapter="13" difficulty="facile"}
## Domanda
Una mole di gas ideale monoatomico viene riscaldata in un recipiente rigido da $300\,\text{K}$ a $500\,\text{K}$. Calcolare il calore fornito e il lavoro compiuto dal gas. Usare $c_V=3R/2$ e $R=8{,}314\,\text{J mol}^{-1}\text{K}^{-1}$.

:::hint
Il volume costante implica lavoro nullo. La variazione di energia interna si calcola con il calore specifico molare a volume costante.
:::

:::solution
Poiché il volume non cambia, $W=0$. La variazione di energia interna vale $\Delta U=nc_V\Delta T=(1)(3R/2)(200)=2494{,}2\,\text{J}$. Dal primo principio $Q=\Delta U+W$, quindi il gas assorbe $2494{,}2\,\text{J}$.
:::
:::

:::exercise{id="E13.12" chapter="13" difficulty="facile"}
## Domanda
Un gas ha densità $1{,}20\,\text{kg m}^{-3}$ e velocità quadratica media delle molecole pari a $500\,\text{m s}^{-1}$. Usando la teoria cinetica, calcolare la pressione.

:::hint
Esprimi la pressione in funzione della densità e della velocità quadratica media.
:::

:::solution
La relazione della teoria cinetica è $p=\rho v_{\mathrm{rms}}^2/3$. Sostituendo i valori si ottiene $p=(1{,}20)(500)^2/3=100000\,\text{Pa}$.
:::
:::

:::exercise{id="E13.13" chapter="13" difficulty="medio"}
## Domanda
Una mole di gas ideale monoatomico è inizialmente a $T_A=300\,\text{K}$ e volume $V_A=10{,}0\,\text{L}$. Si espande reversibilmente fino a $V_B=2V_A$ lungo la trasformazione $pV^2=\text{costante}$. Calcolare la pressione iniziale, il lavoro compiuto dal gas, la variazione di energia interna e il calore scambiato. Usare $R=8{,}314\,\text{J mol}^{-1}\text{K}^{-1}$.

:::hint
La legge della trasformazione dà $p(V)=p_AV_A^2/V^2$. Trova prima lo stato finale con l’equazione di stato, quindi applica il primo principio.
:::

:::solution
La pressione iniziale è $p_A=nRT_A/V_A=(8{,}314)(300)/(0{,}0100)=249420\,\text{Pa}$. Poiché $pV^2$ resta costante, $p_B=p_A/4$. Dall’equazione di stato segue $T_B/T_A=p_BV_B/(p_AV_A)=1/2$, quindi $T_B=150\,\text{K}$. Il lavoro vale $W=\int_{V_A}^{2V_A}(p_AV_A^2/V^2)\,dV=p_AV_A/2=1247{,}1\,\text{J}$. La variazione di energia interna è $\Delta U=nc_V(T_B-T_A)=(3R/2)(-150)=-1870{,}65\,\text{J}$. Dal primo principio, $Q=\Delta U+W=-623{,}55\,\text{J}$, quindi il gas cede calore.
:::
:::

:::exercise{id="E13.14" chapter="13" difficulty="medio"}
## Domanda
Durante una trasformazione un gas riceve $Q=-200\,\text{J}$ di calore, mentre l’ambiente compie un lavoro di $300\,\text{J}$ sul gas. Calcolare la variazione di energia interna e specificare se essa aumenta o diminuisce.

:::hint
Con la convenzione del lavoro compiuto dal gas, il lavoro ricevuto dall’ambiente ha segno negativo. Usa $\Delta U=Q-W$.
:::

:::solution
Il calore ceduto dal gas è negativo, quindi $Q=-200\,\text{J}$. Poiché l’ambiente compie $300\,\text{J}$ sul gas, il lavoro compiuto dal gas è $W=-300\,\text{J}$. Pertanto $\Delta U=Q-W=-200-(-300)=100\,\text{J}$. L’energia interna aumenta.
:::
:::

:::exercise{id="E13.15" chapter="13" difficulty="medio"}
## Domanda
Un gas ideale compie un ciclo completo e riceve complessivamente $800\,\text{J}$ di calore. Determinare il lavoro netto compiuto dal gas e la variazione di energia interna nel ciclo.

:::hint
L’energia interna è una funzione di stato. Al termine di un ciclo il gas torna allo stato iniziale.
:::

:::solution
Poiché il sistema torna allo stato iniziale, la variazione di energia interna sul ciclo è $\Delta U=0$. Dal primo principio $\Delta U=Q-W$, dunque $W=Q$. Il calore netto ricevuto è positivo, quindi il lavoro netto compiuto dal gas è $800\,\text{J}$.
:::
:::

:::exercise{id="E13.16" chapter="13" difficulty="facile"}
## Domanda
Una mole di gas ideale a $300\,\text{K}$ viene compressa reversibilmente in modo isotermo da $V_A=10{,}0\,\text{L}$ a $V_B=5{,}00\,\text{L}$. Calcolare il lavoro compiuto dal gas e il calore scambiato. Usare $R=8{,}314\,\text{J mol}^{-1}\text{K}^{-1}$.

:::hint
Per una trasformazione isoterma di un gas ideale, $\Delta U=0$; integra $p=nRT/V$ per trovare il lavoro.
:::

:::solution
Il lavoro compiuto dal gas è $W=\int_{V_A}^{V_B}p\,dV=nRT\ln(V_B/V_A)$. Pertanto $W=(1)(8{,}314)(300)\ln(1/2)=-1728{,}9\,\text{J}$. Poiché la temperatura resta costante, l’energia interna non varia e il primo principio dà $Q=W=-1728{,}9\,\text{J}$. Il gas cede calore.
:::
:::

:::exercise{id="E13.17" chapter="13" difficulty="medio"}
## Domanda
Calcolare l’energia cinetica traslazionale media di una molecola a $300\,\text{K}$ e la velocità quadratica media delle molecole di azoto alla stessa temperatura. La massa molare dell’azoto è $M=0{,}0280\,\text{kg mol}^{-1}$. Usare $k=1{,}381\times10^{-23}\,\text{J K}^{-1}$ e $R=8{,}314\,\text{J mol}^{-1}\text{K}^{-1}$.

:::hint
L’energia cinetica media traslazionale dipende solo dalla temperatura. Per la velocità quadratica media usa la massa di una molecola oppure la massa molare.
:::

:::solution
L’energia cinetica traslazionale media è $\langle K\rangle=3kT/2=(3/2)(1{,}381\times10^{-23})(300)=6{,}215\times10^{-21}\,\text{J}$. La velocità quadratica media è $v_{\mathrm{rms}}=\sqrt{3RT/M}=\sqrt{3(8{,}314)(300)/0{,}0280}=517{,}0\,\text{m s}^{-1}$.
:::
:::

:::exercise{id="E13.18" chapter="13" difficulty="medio"}
## Domanda
Un gas ideale ha massa molare $M=28{,}0\,\text{g mol}^{-1}$ e si trova a $p=1{,}00\times10^5\,\text{Pa}$ e $T=300\,\text{K}$. Calcolare la sua densità. Usare $R=8{,}314\,\text{J mol}^{-1}\text{K}^{-1}$.

:::hint
Combina l’equazione di stato con $n=m/M$ e usa la definizione di densità.
:::

:::solution
Dall’equazione di stato, $pV=(m/M)RT$. Dividendo per $V$ si ottiene $\rho=m/V=pM/(RT)$. La massa molare in unità SI è $M=0{,}0280\,\text{kg mol}^{-1}$. Quindi $\rho=(1{,}00\times10^5)(0{,}0280)/\lbrack (8{,}314)(300)\rbrack =1{,}123\,\text{kg m}^{-3}$.
:::
:::

:::exercise{id="E14.1" chapter="14" difficulty="medio"}
## Domanda
Una macchina termica lavora tra sorgenti a $600\,\mathrm{K}$ e $300\,\mathrm{K}$. In un ciclo assorbe $900\,\mathrm{J}$ dalla sorgente calda e cede $500\,\mathrm{J}$ a quella fredda. Calcolare il rendimento, il rendimento massimo di Carnot e la variazione di entropia delle sorgenti per ciclo. Stabilire se il ciclo è compatibile con il secondo principio.

:::hint
Calcola il lavoro prodotto come differenza tra calore assorbito e ceduto. La variazione di entropia delle sorgenti deve essere non negativa.
:::

:::solution
Il lavoro prodotto è $W=900\,\mathrm{J}-500\,\mathrm{J}=400\,\mathrm{J}$, dunque il rendimento vale

$$
\eta=\frac{400}{900}=0.444\ldots.
$$

Il rendimento massimo è

$$
\eta_{\max}=1-\frac{300}{600}=0.50.
$$

La variazione di entropia delle sorgenti è

$$
\Delta S_{\mathrm{sorgenti}}=-\frac{900}{600}+\frac{500}{300}=-1.5+1.667=0.167\,\mathrm{J\,K^{-1}}.
$$

Poiché la variazione è positiva e il rendimento è minore di quello di Carnot, il ciclo è compatibile con il secondo principio.
:::
:::

:::exercise{id="E14.2" chapter="14" difficulty="medio"}
## Domanda
Una massa di $0.50\,\mathrm{kg}$ di ghiaccio fonde alla temperatura costante di $273.15\,\mathrm{K}$. Il calore latente di fusione è $334\,\mathrm{kJ\,kg^{-1}}$. Calcolare la variazione di entropia del ghiaccio. Se la fusione avviene a contatto con un serbatoio alla stessa temperatura, determinare la variazione di entropia dell’universo.

:::hint
Il calore assorbito durante la fusione si ricava dalla massa e dal calore latente. Per il serbatoio, usa il calore ceduto diviso per la sua temperatura, con segno negativo.
:::

:::solution
Il calore assorbito dal ghiaccio è $Q=mL_f=0.50\cdot334\,\mathrm{kJ}=167\,\mathrm{kJ}$. La sua variazione di entropia è

$$
\Delta S_{\mathrm{ghiaccio}}=\frac{Q}{T}=\frac{167000\,\mathrm{J}}{273.15\,\mathrm{K}}\approx611.4\,\mathrm{J\,K^{-1}}.
$$

Il serbatoio cede lo stesso calore, quindi $\Delta S_{\mathrm{serbatoio}}=-167000/273.15\,\mathrm{J\,K^{-1}}\approx-611.4\,\mathrm{J\,K^{-1}}$. La variazione di entropia dell’universo è la somma delle due variazioni, dunque è nulla.
:::
:::

:::exercise{id="E14.3" chapter="14" difficulty="facile"}
## Domanda
Una macchina termica reversibile di Carnot opera tra una sorgente calda a $600\,\mathrm{K}$ e una sorgente fredda a $300\,\mathrm{K}$. In un ciclo assorbe $1200\,\mathrm{J}$ dalla sorgente calda. Calcolare il rendimento, il lavoro prodotto e il calore ceduto alla sorgente fredda.

:::hint
Per una macchina di Carnot, il rendimento dipende soltanto dalle temperature delle sorgenti. Poi applica il bilancio energetico a un ciclo.
:::

:::solution
Il rendimento della macchina è

$$
\eta=1-\frac{T_f}{T_c}=1-\frac{300}{600}=0.50.
$$

Il lavoro prodotto è $W=\eta Q_c=0.50\cdot1200\,\mathrm{J}=600\,\mathrm{J}$. Poiché l’energia interna torna al valore iniziale a ogni ciclo, il calore ceduto vale $Q_f=Q_c-W=1200\,\mathrm{J}-600\,\mathrm{J}=600\,\mathrm{J}$.
:::
:::

:::exercise{id="E14.4" chapter="14" difficulty="difficile"}
## Domanda
Una macchina termica opera tra una sorgente calda a $500\,\mathrm{K}$ e una fredda a $300\,\mathrm{K}$. Assorbe $1000\,\mathrm{J}$ per ciclo e ha rendimento $0.30$. Calcolare il lavoro prodotto, il calore ceduto alla sorgente fredda e la variazione di entropia delle sorgenti. Calcolare inoltre il lavoro massimo ottenibile con lo stesso calore assorbito tra queste sorgenti e confrontarlo con il lavoro effettivo.

:::hint
Dalla definizione di rendimento ricava il lavoro effettivo, poi usa il bilancio energetico per il calore ceduto. Per il lavoro massimo, considera una macchina di Carnot con lo stesso calore assorbito.
:::

:::solution
Il lavoro effettivo è $W=\eta Q_c=0.30\cdot1000\,\mathrm{J}=300\,\mathrm{J}$. Il calore ceduto è quindi $Q_f=Q_c-W=700\,\mathrm{J}$. La variazione di entropia delle sorgenti per ciclo vale

$$
\Delta S_{\mathrm{sorgenti}}=-\frac{1000}{500}+\frac{700}{300}=\frac{1}{3}\,\mathrm{J\,K^{-1}}.
$$

Il rendimento massimo è $\eta_{\max}=1-300/500=0.40$, perciò il lavoro massimo è $W_{\max}=0.40\cdot1000\,\mathrm{J}=400\,\mathrm{J}$. Il lavoro effettivo è inferiore di $100\,\mathrm{J}$.
:::
:::

:::exercise{id="E14.5" chapter="14" difficulty="difficile"}
## Domanda
Una mole di gas ideale monoatomico passa dallo stato $A$ con temperatura $300\,\mathrm{K}$ e volume $V$ allo stato $C$ con temperatura $600\,\mathrm{K}$ e volume $2V$ attraverso due trasformazioni. Prima si espande isotermicamente in modo reversibile a contatto con una sorgente a $300\,\mathrm{K}$, passando da $V$ a $2V$. Poi viene riscaldata a volume costante fino a $600\,\mathrm{K}$ a contatto con una sorgente a $600\,\mathrm{K}$. Calcolare la variazione totale di entropia del gas e la variazione di entropia dell’universo lungo il percorso.

:::hint
Calcola separatamente le variazioni per l’espansione isoterma reversibile e per il riscaldamento isocoro. Per ciascuna fase, somma le variazioni del gas e della sorgente coinvolta.
:::

:::solution
Nell’espansione isoterma reversibile, la variazione di entropia del gas è $R\ln2$ e quella della sorgente a $300\,\mathrm{K}$ è $-R\ln2$, quindi la variazione dell’universo in questa fase è nulla. Per il successivo riscaldamento isocoro, $C_V=\frac{3}{2}R$ e

$$
\Delta S_{\mathrm{gas,2}}=C_V\ln\left(\frac{600}{300}\right)=\frac{3}{2}R\ln2.
$$

Il gas assorbe $Q=C_V(600-300)=450R\,\mathrm{J}$ dalla sorgente a $600\,\mathrm{K}$, perciò la variazione di entropia della sorgente è $\Delta S_{\mathrm{sorgente,2}}=-Q/600=-\frac{3}{4}R$. La variazione totale di entropia del gas è

$$
\Delta S_{\mathrm{gas}}=R\ln2+\frac{3}{2}R\ln2=\frac{5}{2}R\ln2\approx14.4\,\mathrm{J\,K^{-1}}.
$$

La variazione dell’universo è dovuta solo alla seconda fase:

$$
\Delta S_{\mathrm{universo}}=\frac{3}{2}R\ln2-\frac{3}{4}R=\frac{3}{2}R\left(\ln2-\frac{1}{2}\right)\approx2.41\,\mathrm{J\,K^{-1}}.
$$
:::
:::

:::exercise{id="E14.6" chapter="14" difficulty="facile"}
## Domanda
Un frigorifero reversibile di Carnot opera tra l’interno a $260\,\mathrm{K}$ e l’ambiente a $300\,\mathrm{K}$. In un ciclo sottrae $780\,\mathrm{J}$ all’interno. Calcolare il coefficiente di prestazione, il lavoro assorbito e il calore ceduto all’ambiente.

:::hint
Per il frigorifero di Carnot, il coefficiente di prestazione è il rapporto tra la temperatura fredda e la differenza tra le temperature. Usa poi il bilancio energetico del ciclo.
:::

:::solution
Il coefficiente di prestazione è

$$
\mathrm{COP}=\frac{T_f}{T_c-T_f}=\frac{260}{300-260}=6.5.
$$

Dato che $\mathrm{COP}=Q_f/W$, il lavoro assorbito è $W=780\,\mathrm{J}/6.5=120\,\mathrm{J}$. Il calore ceduto all’ambiente è $Q_c=Q_f+W=780\,\mathrm{J}+120\,\mathrm{J}=900\,\mathrm{J}$.
:::
:::

:::exercise{id="E14.7" chapter="14" difficulty="facile"}
## Domanda
Una mole di gas ideale compie un’espansione isoterma reversibile a $300\,\mathrm{K}$, passando dal volume $V_A$ al volume $2V_A$. Calcolare la variazione di entropia del gas.

:::hint
Per un gas ideale in un’isoterma, esprimi la variazione di entropia in funzione del rapporto tra volume finale e iniziale.
:::

:::solution
Per l’espansione isoterma reversibile di un gas ideale,

$$
\Delta S=nR\ln\left(\frac{V_B}{V_A}\right).
$$

Con $n=1\,\mathrm{mol}$ e $V_B/V_A=2$, si ottiene $\Delta S=R\ln2=8.31\ln2\,\mathrm{J\,K^{-1}}=5.76\,\mathrm{J\,K^{-1}}$.
:::
:::

:::exercise{id="E14.8" chapter="14" difficulty="difficile"}
## Domanda
Un frigorifero opera tra un interno a $270\,\mathrm{K}$ e un ambiente a $300\,\mathrm{K}$. Per ciclo assorbe $400\,\mathrm{J}$ di lavoro e sottrae $3000\,\mathrm{J}$ all’interno. Calcolare il suo coefficiente di prestazione, il coefficiente massimo di Carnot e la variazione di entropia delle due sorgenti per ciclo. Determinare anche il massimo calore che potrebbe sottrarre per ciclo con lo stesso lavoro assorbito.

:::hint
Il calore ceduto all’ambiente è la somma del calore sottratto all’interno e del lavoro fornito. Per il limite sul calore sottratto, imponi che la variazione totale di entropia delle sorgenti non sia negativa.
:::

:::solution
Il calore ceduto all’ambiente vale $Q_c=3000\,\mathrm{J}+400\,\mathrm{J}=3400\,\mathrm{J}$. Il coefficiente di prestazione effettivo è

$$
\mathrm{COP}=\frac{3000}{400}=7.5,
$$

mentre quello massimo è

$$
\mathrm{COP}_{\mathrm{Carnot}}=\frac{270}{300-270}=9.
$$

La variazione di entropia delle sorgenti per ciclo è

$$
\Delta S_{\mathrm{sorgenti}}=-\frac{3000}{270}+\frac{3400}{300}=0.222\,\mathrm{J\,K^{-1}}.
$$

Per trovare il massimo calore sottratto $Q_{f,\max}$ con lavoro fissato a $400\,\mathrm{J}$, si impone il limite reversibile:

$$
-\frac{Q_{f,\max}}{270}+\frac{Q_{f,\max}+400}{300}=0.
$$

Risolvendo, $Q_{f,\max}=400\cdot270/(300-270)=3600\,\mathrm{J}$.
:::
:::

:::exercise{id="E14.9" chapter="14" difficulty="medio"}
## Domanda
Una macchina termica assorbe $2400\,\mathrm{J}$ da una sorgente a $500\,\mathrm{K}$ e cede $1500\,\mathrm{J}$ a una sorgente a $300\,\mathrm{K}$ per ciclo. Calcolare il lavoro prodotto e il rendimento, confrontare quest’ultimo con il rendimento massimo possibile tra le stesse sorgenti e determinare la variazione di entropia complessiva delle sorgenti per ciclo.

:::hint
Ricava il lavoro dal bilancio energetico del ciclo. Per le sorgenti, considera che quella calda perde il calore assorbito dalla macchina e quella fredda riceve il calore ceduto.
:::

:::solution
Il lavoro prodotto è $W=Q_c-Q_f=2400\,\mathrm{J}-1500\,\mathrm{J}=900\,\mathrm{J}$. Il rendimento effettivo vale

$$
\eta=\frac{W}{Q_c}=\frac{900}{2400}=0.375.
$$

Il massimo rendimento tra le sorgenti è quello di Carnot:

$$
\eta_{\max}=1-\frac{300}{500}=0.40.
$$

Il rendimento effettivo è quindi inferiore al massimo. La variazione di entropia delle sorgenti è

$$
\Delta S_{\mathrm{sorgenti}}=-\frac{2400}{500}+\frac{1500}{300}=-4.8+5.0=0.20\,\mathrm{J\,K^{-1}}.
$$

Il valore positivo è compatibile con il secondo principio.
:::
:::

:::exercise{id="E14.10" chapter="14" difficulty="difficile"}
## Domanda
Due moli di gas ideale subiscono un’espansione libera adiabatica da un volume $V$ a un volume $3V$. Gli stati iniziale e finale sono in equilibrio e la temperatura è la stessa. Calcolare la variazione di entropia del gas, quella dell’ambiente e quella dell’universo.

:::hint
L’espansione libera è irreversibile, ma la variazione di entropia del gas dipende solo dagli stati iniziale e finale. Per calcolarla, confronta tali stati tramite un’isoterma reversibile.
:::

:::solution
La variazione di entropia del gas può essere calcolata lungo un’isoterma reversibile tra gli stessi stati, dato che la temperatura è la stessa:

$$
\Delta S_{\mathrm{gas}}=nR\ln\left(\frac{3V}{V}\right)=2R\ln3\approx18.3\,\mathrm{J\,K^{-1}}.
$$

Nell’espansione libera adiabatica non avviene scambio di calore con l’ambiente, che quindi mantiene invariata la propria entropia: $\Delta S_{\mathrm{ambiente}}=0$. Di conseguenza $\Delta S_{\mathrm{universo}}=\Delta S_{\mathrm{gas}}+\Delta S_{\mathrm{ambiente}}\approx18.3\,\mathrm{J\,K^{-1}}$, positivo come richiesto per un processo irreversibile.
:::
:::

:::exercise{id="E14.11" chapter="14" difficulty="medio"}
## Domanda
Un corpo con capacità termica costante $C=200\,\mathrm{J\,K^{-1}}$ viene riscaldato da $280\,\mathrm{K}$ a $320\,\mathrm{K}$. Calcolare la variazione di entropia del corpo.

:::hint
La temperatura del corpo varia, quindi non dividere il calore totale per una sola temperatura. Calcola la variazione di entropia integrando il calore reversibile infinitesimo lungo un percorso reversibile tra gli stati iniziale e finale.
:::

:::solution
Poiché l’entropia è una funzione di stato, possiamo calcolarne la variazione lungo un percorso reversibile tra gli stati iniziale e finale. Per capacità termica costante, lungo tale percorso il calore reversibile infinitesimo è $\delta Q_{\mathrm{rev}}=C\,dT$, quindi $dS=\delta Q_{\mathrm{rev}}/T=C\,dT/T$. Pertanto

$$
\Delta S=\int_{280}^{320}\frac{C\,dT}{T}=C\ln\left(\frac{320}{280}\right).
$$

Sostituendo $C=200\,\mathrm{J\,K^{-1}}$, si ottiene $\Delta S=200\ln(8/7)\,\mathrm{J\,K^{-1}}\approx26.7\,\mathrm{J\,K^{-1}}$.
:::
:::

:::exercise{id="E14.12" chapter="14" difficulty="facile"}
## Domanda
Due moli di gas ideale monoatomico vengono riscaldate a volume costante da $300\,\mathrm{K}$ a $450\,\mathrm{K}$. Calcolare la variazione di entropia del gas.

:::hint
Per una trasformazione isocora di un gas ideale, usa la capacità termica molare a volume costante e il rapporto tra le temperature iniziale e finale.
:::

:::solution
Per un gas ideale monoatomico, $C_V=\frac{3}{2}R$. In una trasformazione isocora,

$$
\Delta S=nC_V\ln\left(\frac{T_f}{T_i}\right).
$$

Quindi $\Delta S=2\cdot\frac{3}{2}R\ln(450/300)=3R\ln(1.5)$. Con $R=8.31\,\mathrm{J\,mol^{-1}\,K^{-1}}$, risulta $\Delta S\approx10.1\,\mathrm{J\,K^{-1}}$.
:::
:::
