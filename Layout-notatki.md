# Layout - notatki

Różne (być może oczywiste) notatki na temat layoutu dla aplikacji *novum*.   
Novum jest oparte o koncepcję layoutu [flex](#flex). 
Kaskadowo przekazujemy flex od samej góry do dołu drzewa html - wszystko układa się automatycznie.  
Postaramy się zasterować wyglądem/widokiem aplikacji przy pomocy atrubutu `class`, gdzie część z `class` bądzie dostępna globalnie, a szczególne przypadki będą opisane w lokalnych - componentowych scss-ach.  

> **Warning**  
> Co do zasady postaramy sie unikać atrybutu `style` w elementach HTML!

To da nam swobodę w manipulacji całą zabawką!!!

## Identyfikacja elementów html

Typy "dojścia" do elementów html, np. dla potrzeb stylowania oraz czytelności struktury
> Elementy składające sie z więcej niż jednego słowa łączymy klawiaturowym minusem `-`, np: `mat-tab-body`, `super-class`  
> dla `class` i `id` dopuszczalne jest stosowanie camelCase - proponuję (MOCNO) jednak zasadę opisaną wyżej


<details><summary> tagi HTML (click me!)</summary>

### tagi: 
(np. `div`, `span`, `mat-tab-body`, `sit-dict-container`)

> standardowy tag html jako element layoutu jest: blokowy(np: `<div>`, `<p>`) lub liniowy(np: `<span>`, `<strong>`)  
> niestandardowy tag jest "przezroczysty"(np: `<router>`, `<mat-tab-body>`) 

</details>

<details><summary> atrybut id (click me!)</summary>

### id: 
(np: `<div id="jakis-identykikator">`)

> jednoznaczny identyfikator elementu, w kodzie HTML może wystąpić tylko 1 raz!  
> Uwaga: nie może zawierać białych znaków!

</details>

<details><summary> atrybut class (click me!)</summary>

### class: 
(np: `<div class="router-flex column cos-innego">`) 
> atrybut uniwersalny: może zawirać dowolną ilość nazw 

Proponuję stosowanie `class` jako podstawowego, głównego i wielowymiarowego atrybutu. 

#### Przykłady:

`<przykladowy-tag class="ogolny-styl identyfikator-elementu inny-dowolny" >`

Przykład w aplikacji novum:

typowy component zwraca siebie w "swoim" tagu
```
@Component({
  selector: 'sit-sys-dictionaries',
  templateUrl: './sit-sys-dictionaries.component.html',
  styleUrls: ['./sit-sys-dictionaries.component.scss']
})

Wynik w html: `<sit-sys-dictionaries>`
```

component zwraca siebie jak wyżej z ogólną class
```
@Component({
  selector: 'sit-sys-dictionaries',
  templateUrl: './sit-sys-dictionaries.component.html',
  styleUrls: ['./sit-sys-dictionaries.component.scss'],
  host: {class: 'router-flex'}
})

Wynik w html: `<sit-sys-dictionaries class="router-flex">`
```

component zwraca siebie jak wyżej z ogólną class + nazwą samego siebie
```
@Component({
  selector: 'sit-sys-dictionaries',
  templateUrl: './sit-sys-dictionaries.component.html',
  styleUrls: ['./sit-sys-dictionaries.component.scss'],
  host: {class: 'router-flex sit-sys-dictionaries'}
})

Wynik w html: `<sit-sys-dictionaries class="router-flex sit-sys-dictionaries">`
```

component zwraca siebie w tagu `div` z ogólną class + nazwą samego siebie
```
@Component({
  selector: '[sit-sys-dictionaries]',
  templateUrl: './sit-sys-dictionaries.component.html',
  styleUrls: ['./sit-sys-dictionaries.component.scss'],
  host: {class: 'router-flex sit-sys-dictionaries'}
})

Wynik w html: `<div class="router-flex sit-sys-dictionaries">`
```
> Dzięki temu w `html` łatwiej się zorientować czym jest dany element. Pozostaje kwestia konwencji nazw: czy na tym "poziomie" użyć: `sit-sys-dictionaries` czy `sit-sys-dictionaries-component` ponieważ będziemy chcieli użyć `sit-sys-dictionaries` gdzieś wewnątrz komponentu.

</details>





## Flex

Flex, a własciwie `flex box model` to technika polegająca na zachowaniu się `childrens` wewnątrz `parent` ze ścisłym związkiem miedzy nimi.  
Parent z właściwością css `display:flex;` tworzy "przestrzeń" dla swoich pierwszopoziomowych `childrens`. 

> Przykład:
```
<div style="display:flex;">
  <div children=tak>
    <div children=nie>
    </div>
  </div>
  <div children=tak></div>
</div>
```
Chcemy aby `children` kolejnego poziomu również zachowało się automatycznie `flex` wobec swojego rodzica:

```
<div style="display:flex;">
  <div children=tak style="display:flex;" class="children-1">
    <div children=tak> 
      ale rodzic to children-1 
    </div>
  </div>
  <div children=tak></div>
</div>
```

> Podsumowując: element może być jednocześnie `parent` + `children`

tu zaczyna sie magia...:)

Przykład css z oznaczeniem czego dotyczą parametry:
```
.jakis-element {
  display: flex; - dotyczy parent
  flex-direction: column; - dotyczy parent
  flex:1 1 auto; - dotyczy children
}

gdzie flex:1 1 auto; jest skrótem dla: 
{
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}
```
jeśli ten element jako `children` bedzie mial `parent` z display:flex to zajmie zajmie całą dostępną przestrzeń szerokości i wysokości jeśli bedzie sam,  jeśli będzie ich więcej - to sie podzielą przestrzenią: wysokością lub szerokością proporcjonalnie w zależności od `flex-direction` w `parent` 
(default dla `flex-direction` = `row`, czyli podział szerokości)  
natomiast jego `children` (`flex-direction:column`) podzielą się całą dostępną wysokością


### class globalne w novum

Utworzylem definicje dla 2 class ogólnych + globalnych: `flex-container-column` i `flex-container-row`.  
```
.flex-container-column,
.flex-container-row {
  display: flex;
  flex: 1 1 auto;
}

.flex-container-column {
  flex-direction: column;
}
.flex-container-row {
  flex-direction: row;
}
```
Mają służyć wyłącznie do tego do czego są. Proponuję nie dostylowywać tych `class` gdzieś głębiej w aplikacji!  
Mają służyć do nadawania elementom nowym bądź podmianie gdy zajdzie taka potrzeba,  
np.  
```
<ag-grid-angular
  ...
  class="ag-theme-balham flex-container-column"
  ...

zamiast:
<ag-grid-angular
  ...
  style="width: 100%; height: 100%;" -> niepotrzebne!!!!!
  class="ag-theme-balham"
```


W aplikacji jest jeszcze kilka `class` które to realizują, np:
```
.router-flex {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
}
realizuje co do niej należy!
```


### Angular + flex

> **Warning**  
> UWAGA! zauważyłem, że Angular potrafi kaskadowo przenosić właściwości flex  
> zwłaszcza w elementach materials  
> mam DUŻE wątpliwości do przewidywalności tego czegoś...

  
## Scss-y
> **Warning**  
> kolejność umieszczania i oraz importowania styli ma ZNACZENIE!
  
> Co do zasady proponuję w głównym globalnym `styles.scss` nie umieszczać definicji styli innych niż SUPER globalne!

"zwykłe" globalne można zaimportować z katalogu `/styles` np: `@import "./styles/tests/jcTests";`


## Fonty

Problem z `font-family` polega na tym, że nie działa kaskadowo, tzn. jeśli globalnie mamy ustawiony font `Arial`, a w gałęzi HTML zmienimy na font `Lolek`, to jeśli font `Lolek` nie bedzie dostępny np. na macu:) to nie zostanie wzięty font nadrzędny czyli `Arial` i cała gałąź wyświetli jakis "losowy" font systemowy, a dokładniej to defaultowy ustawiony w przeglądarce - ale kto tam zagląda? ;) 

> Warto mieć obsługę fontów w 1 miejscu - gdy się coś dzieje lub masz ochotę zmieniasz i działa.
  
W aplikacji zaaplikowałem zestaw `font-family` z bootstrapa - czyli zestaw testowany przez społeczność przez lata na wszystkim chyba - który nigdy mnie do tej pory nie zawiódł.
Ponieważ zauważyłem, że materials i ag-grid coś tam "kombinuje" z fontami, w globalnym styles.scss dodałem: 
```
.ag-theme-balham,
.mat-tab-group {
  font-family: inherit;
}
``` 
tzn kombinacje wyłączyłem. 
