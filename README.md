# Esercizio: **Carosello Array di Oggetti**

nome repo: js-array-objects-carousel

**Consegna:**

Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando gli oggetti.

Alla slide aggiungere un titolo e un testo.

**Bonus 1:**

Sperimentiamo attraverso l’uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:al click di un bottone o già dall’inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

****

**Bonus 2:**

E se volessi un bottone per invertire la “direzione” del carosello?

****
**Bonus 3:**

Al click della thumb cambia l’immagine attiva
****

#### Procedimento logico:

- creo un div, che mi conterrà title e text dell'oggetto, in position absolute, rispetto all'immagine principale

- con un foreach scorro i vari oggetti e estrapolo il titolo e il testo

- inserisco un timeout di Nsec che di default richiama la funzione di avanzamento nel carousell, al cambio di un flag cambia il verso

- devo aggiungere un EventListener click ad ogni immagine nella thumb, che mostra l'immagine corrispondente
