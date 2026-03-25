---
Gioco: FabulaUltima
Tipo:
  - materiali
  - Utilità
Campagna: Another time
tags:
  - "#FU"
  - Boss
  - SnD
  - ttrpg/materiale
Data:
excalidraw-plugin: parsed
excalidraw-open-md: true
---

> [!Example]- Campagna AnotherTime
> ```dataview
List WHERE Gioco = "FabulaUltima" and Campagna = "Another time"

## QUANTI SCONTRI?
Gli scontri di Fabula Ultima consumano spesso molte delle risorse degli eroi. Normalmente, un gruppo di Personaggi Giocanti può affrontare una delle seguenti opzioni prima di dover riposare o ricaricare i Punti Inventario:
- Tre scontri facili
- Due scontri medi, oppure uno medio e uno facile
- Uno scontro difficile.
## LIVELLO DEL GRUPPO E LIVELLO DEL NEMICO
Quando progetti uno scontro, comincia prendendo in considerazione quali Personaggi Giocanti sono presenti in scena e calcolando il Livello del Gruppo che è pari al livello più alto tra quelli dei Personaggi Giocanti coinvolti nello scontro. Per esempio, un gruppo con due Personaggi Giocanti di livello 10 e uno di livello 12 ha un Livello del Gruppo pari a 12. Dal momento che la capacità dei personaggi di infliggere danni o sopportarli aumenta con il livello, questo valore ti permette di calcolare l’entità della minaccia rappresentata dai nemici, che si tratti di creature completamente nuove o tratte dal Bestiario.

|    **Se il livello del nemico è…**    |       **Allora quel nemico…**       |
| :-----------------------------------: | :---------------------------------: |
|   Più basso del Livello del Gruppo    |   È probabilmente troppo debole.    |
| Entro 5 punti dal Livello del Gruppo  | Probabilmente è uno scontro facile. |
| Entro 10 punti dal Livello del Gruppo |  Probabilmente è una sfida ardua.   |
| 11+ punti sopra il Livello del Gruppo |   È probabilmente troppo forte.I    |
I PNG del Bestiario (vedi pag. 319) sono presentati per incrementi di cinque livelli, cosa che dovrebbe fornirti una buona varietà di possibili nemici adatti ai tuoi scontri.
## RANGHI DEGLI AVVERSARI 
I PNG avversari di Fabula Ultima possono essere di rango soldato, élite o campione.
### SOLDATI
Un PNG di rango soldato ha capacità più o meno pari a quelle di un PG di pari livello. I PNG presentati nel Bestiario sono tutti di rango soldato. Per esempio, un Cactroll (vedi pag. 348) di livello 15 è all’incirca alla pari con un PG di livello 15. Anche i PNG progettati con le regole di pag. 302 sono di rango soldato. L’idea di fondo è che quando assembli uno scontro dovresti includere un numero di nemici di rango soldato pari a quello fornito da queste linee guida: 

| **Sfida** | **Numero di PNG avversari di Rango Soldato** |
| --- | --- | 
| Scontro Facile | Pari al numero dei Personaggi Giocanti meno 1 |
| Scontro Medio | Pari al numero dei Personaggi Giocanti |
| Scontro Difficile | Pari al numero dei Personaggi Giocanti più 1 |
Se il gruppo di PG è accompagnato da PNG alleati che svolgono un proprio turno nel conflitto, ciascuno di essi conta come un Personaggio Giocante in più. Per movimentare le cose, i PNG soldato possono essere potenziati in élite o campione
# Nemici della campagna
N. PG=5 lvl med 5
costruzione png pg 303
## Pattuglie di Teburg

Facile: 4 soldati lvl 10
Media: 3 soldati ed una elite 10
Difficile 4 soldati ed un Champion 2 lvl 10

#### Soldato base
Tratti: Fedele, Teburghiano, addestrato, grezzo
Lvl 10
Specie: Umanoide
Caratteristiche: tuttofare d8
attacchi: 
- nome: [caratt + caratt] - [tm+5] danni (tipo)
- Fucile a proiezione di forza [des+vig]+1 [TM+5] Fisico
- Granate a schiuma intrappolante [Des+Int]+1 [TM+5] Fisico
Abilità (3+1xVul):
+ Equipaggiabile
+ Attacco speciale intrappolante (4 sezioni)
+ PV extra +10 pv


Iniziativa:  8
PV max:    70/35
PM max:   45
Dif         :  8
Dif Mag:   8
bonus precisione: +1

# Nuovo metodo per PnG e Boss
## Rango
- **Bruto**: molti PV, basse difese, tende a picchiare duro
- **Cacciatore**: molto preciso e alti danni, non troppo resistenti
- **Mago**: basati sul lancio di incantesimi, spesso contro bersagli multipli, ma anche fragile
- **Sabotatore**: indebolisce il nemico, nega azioni, dovrebbe essere tolto di mezzo velocemente
- **Sentinella**: protegge gli alleati e li vendica, ha buone difese
- **Supporto**: cura o potenzia i suoi alleati, abbastanza fragile

## Creazione rapida
1. Scegli un ruolo: un buono scontro di solito ha diversi ruoli coperti, o da nemici diversi o da parti di un unico nemico
2. Assegna un livello e un grado: fai i cambiamenti opportuni dovuti al livello come spiegato nei vari *ruoli*, usa sempre multipli di 10 oltre il lvl 5
3. Scegli eventuali altre *Role Skill* guadagnate tramite livellamento o grado dalla lista specifica del ruolo
4. Se è un **Campione** scegli una  *[[Nemici e BossList#Boss Skill||Boss Skill]]* dalla lista opportuna
8. Se vuoi Scegli una Abilità Penalizzante dalla lista: questo ti permetterà di assegnare un altra *Role Skill* o una *[[Nemici e BossList#Boss Skill||Boss Skill]]*
9. Scegli una specie e fai le modifiche necessarie: fai attenzione che la scelta non cambi troppo il modo in cui interagirà con i PG per non uscire fuori dal ruolo scelto
10. Assegna nomi fighi e tratti per esplicitare debolezze e punti di forza.
### Bruto
![[Nemici e BossList#^area=K8k-UO2JkpSgslPZP2THj]]
##### Affinità
Assegna due vulnerabilità adatte all'aspetto o al ruolo narrativo, ad es. ghiaccio e veleno per un gladiatore in armatura leggera
##### Attacchi base
1. **Attacco normale:**
	- Mischia o distanza
	- Des+vig
	- Danno: Tm+5 Scegli uno: aria, fulmine, oscurità, terra. fuoco. ghiaccio, luce, fisico, veleno
	- **Multi 2** 
3. **Attacco potente:** 
	- Vig+Vig
	- Danno: Tm+10 Scegli uno: aria, fulmine, oscurità, terra. fuoco. ghiaccio, luce, fisico, veleno
##### Personalizzazione
Se *soldato* o *elite* aumenta di 10 i PV o scegli uno dalla lista seguente:
- **Danno collaterale** (regola speciale): Quando questo png esegue una azione di **ostacolo** con successo può anche infliggere 10 danni (Scegli uno: aria, fulmine, oscurità, terra. fuoco. ghiaccio, luce, fisico, veleno) aggiuntivi. 10 in più al LVL 30.
- **Duro a morire** (regola speciale): quando raggiunge 0 PV la prima volta durante una scena viene invece ridotto esattamente a 1 PV.
- **Armatura speciale** (regola speciale): finchè questo png non è in ***crisi*** riduce tutti i danni subiti da (scegli due: attacchi in mischia, a distanza, incantesimi) di 5 prima di applicare le *affinità*
- **Attacco vendicativo** (regola speciale): quando è ridotto a 0 PV questo png esegue l'**Attacco potente** come azione gratuita contro chi lo ha sconfitto
Se *Elite*: 
- Raddoppia i PV
- +2 iniziativa
- +1 ***Role skill*** da **Bruto**
Se *Campione (n)*:
- Moltiplica i PV per n
- Raddoppia i PM
- +n iniziativa
- +n ***Role skill*** da **Bruto** e una  *[[Nemici e BossList#Boss Skill||Boss Skill]]*

#### Cambiamenti in base al livello
| **Livello** | **Cambiamenti agli attributi** | **PV** | **MP** | **Precisione attacchi e magia** | **Bonus danni a attacchi e magia** | Nuove abilità                                        |
| :---------: | :----------------------------: | :----: | :----: | :-----------------------------: | :--------------------------------: | ---------------------------------------------------- |
|     10      |               -                |   80   |   50   |               +1                |                 -                  | +2 Resistenze a due tipi di danno eccetto che fisico |
|     20      |             INT d8             |  100   |   60   |               +2                |                 +5                 | +1 ***Role skill*** da **Bruto**                     |
|     30      |             INT d8             |  120   |   70   |               +3                |                 +5                 | +1 Immunità                                          |
|     40      |        INT d8, VIG d12         |  150   |   80   |               +4                |                +10                 | +1 ***Role skill*** da **Bruto**                     |
|     50      |        INT d8, VIG d12         |  180   |   90   |               +5                |                +10                 | +10 max PV                                           |
|     60      |    INT d8, VIG d12, VOL d10    |  200   |  110   |               +6                |                +15                 | +1 ***Role skill*** da **Bruto**                     |
#### Role Skill da Bruto
- Immunità a *Scosso* o *Lento*
- Gli *attacchi normali* bersagliano la Difesa Magica invece che la Difesa
- Quando gli ***attacchi normali*** colpiscono uno o più bersagli questo PNG si cura da **uno** status a sua scelta (normalmente prioritizza quelli che danno penalità a VIG)
- L'**Attacco potente** diventa a *distanza* e usa **DES+VIG** per colpire, il bersaglio colpito subisce uno status tra *Scosso, Confuso, Lento, Debole*  
- **Frantumare** (azione unica): Questo PNG può usare una azione per infliggere ai nemici che sta ***avvolgendo*** 20 Danni ai PV (30 oltre il LvL 30). Inoltre l'**Attacco potente** guadagna "Le creature colpite da questo attacco sono ***avvolte*** finchè il PNG non usa di nuovo l'**Attacco potente** o finchè non subisce danni a cui è vulnerabile".
- **Guardia speciale** (regola speciale): dopo che questo PNG esegue un azione di ***Guardia*** userà la sua prima azione disponibile per eseguire l'**Attacco normale**, ma infliggerà 5 danni aggiuntivi e ignorerà le resistenze.
- **Perdente irritato** (regola speciale): dopo che questo PNG perde una *Prova contrapposta* durante un turno nemico se quel nemico ha riempito o svuotato due sezioni di un orologio in questo modo quel nemico subisce uno tra: *Scosso, Confuso, Lento, Debole*
- Quando l'**Attacco potente** manca tutti i bersagli riempi una sezione di un orologio a 6 sezioni chiamato Collasso. Quando questo è pieno il PNG perde questa abilità e ogni creatura presente nella scena subisce un dano ***minore*** da (Scegli uno: aria, fulmine, oscurità, terra. fuoco. ghiaccio, luce, fisico, veleno). Questa opzione è solo per *Campioni ed elite*
- Questo PNG impara due incantesimi a tua scelta tra: Status ad area, Respiro maledetto, Furto vitale, veleno, rabbia (pg 310 man base). Questa opzione è solo per *Campioni ed elite*

### Cacciatore
![[Nemici e BossList#^area=RgtmBN7b9KWacbRU1uwkV|Cacciatore]]
##### Affinità
Assegna una vulnerabilità adatte all'aspetto o al ruolo narrativo, ad es. terra per uno spirito di lupotempesta
##### Attacchi base
1. **Attacco normale:**
	- Mischia o distanza
	- DES+INT +3
	- Danno: Tm+10 Scegli uno: aria, fulmine, oscurità, terra. fuoco. ghiaccio, luce, fisico, veleno
##### Personalizzazione
Se *soldato* o *elite* scegli uno dalla lista seguente:
- Se l'**Attacco normale** causa danni a uno o più bersagli questo PNG recupera PV pari alla metà dei danni inflitti
- L'**Attacco normale** causa 5 danni aggiuntivi contro i bersagli che hanno il seguente status (scegli uno tra: *Scosso, Confuso, Lento, Debole*)
- **Travestimento di emergenza** (regola speciale): la prima volta che questo PNG entra in crisi in questa scena diventa invisibile fino all'inizio del suo prossimo turno
- **Falso senso di sicurezza** (regola speciale): quando il turno di un alleato finisce se questo alleato ha fallito una *Prova contrapposta* o ha mancato tutti i bersagli con un attacco o incantesimo e ha ancora uno o più turni da eseguire in questo round allora quel PNG può eseguire uno dei turni rimanenti immediatamente e durante questo turno bonus infligge 5 dani extra
- **Opportunista** (regola speciale): quando questo PNG esegue una *Prova contrapposta* contro una creatura afflitta da *confuso* e/o *lento* la prova si considera successo critico se i dadi mostrano la stesa faccia e non è un fumble
Se *Elite*: 
- Raddoppia i PV
- +2 iniziativa
- +1 ***Role skill*** da **Cacciatore**
Se *Campione (n)*:
- Moltiplica i PV per n
- Raddoppia i PM
- +n iniziativa
- +n ***Role skill*** da **Cacciatore** e una *[[Nemici e BossList#Boss Skill||Boss Skill]]*


#### Cambiamenti in base al livello
| **Livello** | **Cambiamenti agli attributi** | **PV** | **MP** | **Precisione attacchi e magia** | **Bonus danni a attacchi e magia** | Nuove abilità                                                    |
| :---------: | :----------------------------: | :----: | :----: | :-----------------------------: | :--------------------------------: | ---------------------------------------------------------------- |
|     10      |               -                |   60   |   40   |               +1                |                 -                  | i danni inflitti dall'**Attacco normale** ignorano le resistenze |
|     20      |             VOL d8             |   80   |   60   |               +2                |                 +5                 | +1 ***Role skill*** da **Cacciatore**                            |
|     30      |             VOL d8             |  100   |   70   |               +3                |                 +5                 | +2 resistenze                                                    |
|     40      |        VOL d8, DES d12         |  120   |   80   |               +4                |                +10                 | +1 ***Role skill*** da **Cacciatore**                            |
|     50      |        VOL d8, DES d12         |  140   |   90   |               +5                |                +10                 | +2 Difesa e +1 Dif. Magica                                       |
|     60      |    VOL d8, INT d10, DES d12    |  160   |  110   |               +6                |                +15                 | +1 ***Role skill*** da **Cacciatore**                            |
#### Role Skill da Cacciatore
- Aggiungi immunità ad un tipo di danno
- L'*Attacco normale* bersagliano la Difesa Magica invece che la Difesa
- L'*Attacco normale* causa 5 danni aggiuntivi alle creature che (scegli uno: sono in crisi, sono afflitte da uno o più status, hanno giù eseguito un turno in questo round, sono i bersagli di uno o più incantesimo con durata una scena).
- L'*Attacco normale* guadagna **Multi (2)**. Dopo questo attacco il PNG è sovraccarico fino alla fine del suo prossimo turno. Mentre è Sovraccarico non può eseguire azioni o attacchi gratuiti, perde tutte le resistenze e non ne può guadagnare
- **Bersaglio acquisito** (azione unica): questo PNG può usare una azione e spendere 10 PM per **Acquisire un bersaglio** su un nemico che può vedere. Nel suo turno se ha un **bersaglio acquisito** questo PNG deve usare la sua prima azione per eseguire un **Attacco normale** contro quel nemico ( l'attacco non può bersagliare nessun altra creatura). Se l'attacco ha successo causa 10 danni in più e l'abilità termina.
- **Imboscata** (regola speciale): durante il primo turno di ogni scena di conflitto questo PNG tratta (scegli uno: DES, INT, VIG, VOL) come se fosse di una taglia superiore.
- **Esca del cacciatore** (regola speciale): dopo che un avversario colpisce o manca questo PNG con un (Scegli uno: Attacco in mischia, a distanza, incantesimo) se il risultato è un numero dispari questo PNG esegue un **Attacco normale** come azione gratuita bersagliando solo quell'avversario (dopo che l'attacco o l'incantesimo è risolto). Considera il TM di questo attacco come 0 quando calcoli i dani da infliggere.
- **Contrattacco mortale** (regola speciale): se l'attacco gratuito di **Esca del cacciatore** colpisce un bersaglio afflitto da entrambi i seguenti status (scegli due tra: *Scosso, Confuso, Lento, Debole*) mentre questo PNG è in crisi l'attacco non infligge danni, ma riduce la vittima ad esattamente 1 PV. Questa opzione è disponibile solo per *Elite e Campioni*.
### Mago
![[Nemici e BossList#^area=cSA8oJI1F0YiRmm2xFWyc|Mago]]
##### Affinità
Assegna una vulnerabilità adatte all'aspetto o al ruolo narrativo, ad es. luce per un occultista che lancia incantesimi oscuri
##### Attacchi base
1. **Attacco normale:**
	- Mischia o distanza
	- DES+INT o INT+VOL
	- Danno: Tm+5 Scegli uno: aria, fulmine, oscurità, terra. fuoco. ghiaccio, luce, fisico, veleno
##### Incantesimi
Scegli un opzione tra:
- impara **due** incantesimi tra **Soffio, soffio maledetto, flare, fulgur, glacies, iceberg, ignis, lux, Terra, Thunderbotl, Umbra Ventus** (pg 188, 192, 208, 310 man base)
- Impara **un** incantesimo dalla lista precedente e aumenta di 10 i suoi PM massimi
Le prove di Magia sono su INT+VOL. **FLare, Iceberg e Thunderbolt** sono disponibili dal LvL 30 o maggiori
##### Personalizzazione
Se *soldato* o *elite* scegli uno dalla lista seguente:
- aggiungi una immunità a **un** tipo di danno
- **Danno collaterale** (regola speciale): Quando questo png esegue una azione di **ostacolo** con successo può anche infliggere 10 danni (Scegli uno: aria, fulmine, oscurità, terra. fuoco. ghiaccio, luce, fisico, veleno) aggiuntivi. 10 in più al LVL 30.
- **Soverchiare** (regola speciale): quando questo PNG esegue una *prova contrapposta* contro una creatura afflitta da *Scosso* e/o *Debole* questa prova è considerata un critico se i dadi sono uguali e non è un Fumble
- **Esplosione dell'anima** (regola speciale): quando questo PNG arriva a 0 PV ogni creatura presente in scena guadagna un quantitativo ***Pesante*** di PM 
Se *Elite*: 
- Raddoppia i PV
- +2 iniziativa
- +1 ***Role skill*** da **Mago**
Se *Campione (n)*:
- Moltiplica i PV per n
- Raddoppia i PM
- +n iniziativa
- +n ***Role skill*** da **Mago** e una *[[Nemici e BossList#Boss Skill||Boss Skill]]*

#### Cambiamenti in base al livello
| **Livello** | **Cambiamenti agli attributi** | **PV** | **MP** | **Precisione attacchi e magia** | **Bonus danni a attacchi e magia** | Nuove abilità                                                       |
| :---------: | :----------------------------: | :----: | :----: | :-----------------------------: | :--------------------------------: | ------------------------------------------------------------------- |
|     10      |               -                |   50   |   60   |               +1                |                 -                  | i danni inflitti dall'**Attacco normale** bersagliano da Dif MAgica |
|     20      |            INT d10             |   70   |   70   |               +2                |                 +5                 | +1 ***Role skill*** da **Mago**                                     |
|     30      |             NT d10             |   90   |   80   |               +3                |                 +5                 | +2 resistenze non fisico                                            |
|     40      |        INT d10, VIG d8         |  120   |   90   |               +4                |                +10                 | +1 ***Role skill*** da **Mago**                                     |
|     50      |        INT d10, VIG d8         |  140   |  100   |               +5                |                +10                 | +1 Immunità                                                         |
|     60      |    INT d10, VIG d8, VOL d12    |  160   |  120   |               +6                |                +15                 | +1 ***Role skill*** da **Mago**                                     |
#### Role Skill da Mago
- Aggiungi immunità a (Scegli due: *Confuso, Furioso, Avvelenato, Scosso)
- Aggiungi Due resistenze ai danni tranne che al Fisico
- L'*Attacco normale* causa 5 danni aggiuntivi alle creature che (scegli uno: sono in crisi, sono afflitte da uno o più status, hanno giù eseguito un turno in questo round, sono i bersagli di uno o più incantesimo con durata una scena).
- Quando l'**Attacco Normale** colpisce uno o più bersagli diventa *Volatile*. I danni inflitti a creature *Volatili* ignorano le resistenze. Volatile termina se recuperano dei PV o al termine della scena.
- Scegli: 
	- impara **due** incantesimi tra ***soffio maledetto, Devastation, flare, iceberg, Furto vitale, Furto Mentale,  Thunderbotl** (pg 188, 310 man base)
	- Impara **un** incantesimo dalla lista precedente e aumenta di 10 i suoi PM massimi
	Le prove di Magia sono su INT+VOL. **Devastazione, FLare, Iceberg e Thunderbolt** sono disponibili dal LvL 30 o maggiori
- **Recupero elementale** (regola speciale): Quando questo PNG subisce danni da un tipo che non sia fisico o veleno recupera PM pari a metà il danno subito
- **Cambiamento Elementale** (regola speciale): quando questo png lancia un incantesimo che fa danno elementale acquisisce **Assorbimento** a quel tipo e **Vulnerabilità** ad un tipo opposto che abbia senso. Questo rimpiazza le affinità che aveva precedentemente a questi tipi e dura finchè l'abilità non viene attivata di nuovo
- **Maestria magica** (regola speciale): Quando ha successo su una *Prova contrapposta* relativa a magie, rituali o forze sovrannaturali può aggiungere o togliere un successo all'orologio relativo alla prova

### Sabotatore
![[Nemici e BossList#^area=TFdlAwNtKH1fS0Na60HID|Sabotatore]]
##### Affinità
Assegna una vulnerabilità adatte all'aspetto o al ruolo narrativo, ad es. fuoco per una creatura con il soffio gelido
##### Attacchi base
1. **Attacco normale:**
	- Mischia o distanza
	- DES+INT o DES+VOL
	- Danno: Tm+5 Scegli uno: aria, fulmine, oscurità, terra. fuoco. ghiaccio, luce, fisico, veleno
	- Scegli una opzione per questo attacco:
		- ogni bersaglio colpito perde anche 10 PM
		- ogni bersaglio subisce (scegli uno: *Lento, Confuso, Debole, Scosso, Furioso, Avvelenato*). Se scegli Furioso o Avvelenato dai una vulnerabilità aggiuntiva a questo PNG
##### Personalizzazione
Se *soldato* o *elite* scegli uno dalla lista seguente:
- aggiungi 10 PV
- **Intralciare** (regola speciale): finchè questo PNG è presente in scena i nemici afflitti da (scegli uno: *Lento, Confuso, Debole, Scosso, Furioso, Avvelenato*) non possono eseguire attacchi gratuiti
- **Compromesso soddisfacente** (regola speciale): dopo che questo PNG **fallisce** una *Prova contrapposta* nel turno nemico se quel nemico è afflitto da due o più status questo PNG può spendere 20 PM per riempire o svuotare una sezione di un orologio a sua scelta
- **Specialista dell'impedimento** (regola speciale): Una volta per turno quando questo PNG esegue con successo una azione di *Ostacolare* può può eseguirne immediatamente una seconda gratis, ma deve bersagliare una creatura diversa dalla prima
- **Vuotare la mente** (regola speciale): finchè questo PNG è in scena tutte le spese di MP dei nemici sono aumentate di 10 PM
Se *Elite*: 
- Raddoppia i PV
- +2 iniziativa
- +1 ***Role skill*** da **Sabotatore**
Se *Campione (n)*:
- Moltiplica i PV per n
- Raddoppia i PM
- +n iniziativa
- +n ***Role skill*** da **Sabotatore** e una *[[Nemici e BossList#Boss Skill||Boss Skill]]*
]]
#### Cambiamenti in base al livello
| **Livello** | **Cambiamenti agli attributi** | **PV** | **MP** | **Precisione attacchi e magia** | **Bonus danni a attacchi e magia** | Nuove abilità                                                    |
| :---------: | :----------------------------: | :----: | :----: | :-----------------------------: | :--------------------------------: | ---------------------------------------------------------------- |
|     10      |               -                |   50   |   50   |               +1                |                 -                  | +3 a precisione o +3 a prove di magia                            |
|     20      |             VIG d8             |   70   |   60   |               +2                |                 +5                 | +1 ***Role skill*** da **Sabotatore**                            |
|     30      |             VIG d8             |   90   |   70   |               +3                |                 +5                 | i danni inflitti dall'**attacco normale** ignorano le resistenze |
|     40      |        INT d10, VIG d8         |  120   |   80   |               +4                |                +10                 | +1 ***Role skill*** da **Sabotatore**                            |
|     50      |        INT d10, VIG d8         |  140   |   90   |               +5                |                +10                 | +1 Immunità                                                      |
|     60      |   INT d10, VIG d10, VOL d10    |  160   |  120   |               +6                |                +15                 | +1 ***Role skill*** da **Sabotatore**                            |
#### Role Skill da Sabotatore
- L'**attacco normale** guadagna **multi (2)**
-  L'**attacco normale** bersaglia la dif magica non la difesa
- Quando l'**attacco normale** colpisce uno o più bersagli afflitti dallo status scelto questi diventano *Svaniti*. Una creatura *Svanita* non recupera PV, lo status termina appena impedisce il recupero dei PV
- Aggiungi un **Attacco pesante** in mischia o a distanza DES+INT TM+5 Scegli uno: aria, fulmine, oscurità, terra. fuoco. ghiaccio, luce, fisico, veleno e il bersaglio non può eseguire questa azione (scegli una: *Attacco, Guardia, Inventario, Obiettivo, Incantesimo, Abilità*) nel suo prossimo turno
- Impara un incantesimo tra **Maledizione XL, Dispel, Risucchio spirituale, enrage, Allucinazione, Torpore e Indebolire** (pg 192, 208, 310) e aumenta i suoi PM di 10. Le prove di Magia sono su INT+VOL
- **Tecnica segreta** (regola speciale): scegli un attacco normale o un incantesimo di questo PNG, può essere eseguito senza che nessuno a parte la vittima sia consapevole dell'accaduto
- **Ombra del dubbio** (regola speciale): finchè il PNG è in scena ogni giocatore afflitto da due o più status non può invocare ***tratti o legami***
- **Regalo d'addio** (regola speciale): quando questo PNG arriva a 0 PV o esce di scena ogni nemico afflitto dall'incantesimo **Indebolire** di questo PNG perde immediatamente un quantitativo minore di PV.  Solo per ***Soldati o Elite***
- **Ipnosi Crudele** (azione unica): questo PNG può usare una azione e spendere 20 PM per scegliere un nemico afflitto da (scegli uno: *Scosso, Furioso, Confuso*) questo nemico deve eseguire immediatamente un attacco gratuito contro un bersaglio scelto da questo PNG. Solo per ***Elite o Campioni***
### Sentinella
![[Ludicità/GDR/GIocate/Nemici e BossList.md#^area=0hsns3lh8Su9jd9MVzqiY|Sentinella]]
##### Affinità
Assegna due vulnerabilità adatte all'aspetto o al ruolo narrativo, ad es. oscurità e fulmine  per un cavaliere santo in una armatura d'acciaio
##### Attacchi base
1. **Attacco normale:**
	- Mischia o distanza
	- DES+VIG
	- Danno: Tm+5 
	- Scegli uno: aria, fulmine, oscurità, terra. fuoco. ghiaccio, luce, fisico, veleno
	- ogni bersaglio subisce (scegli uno: *Lento, Confuso, Debole, Scosso*)
1. **Attacco pesante**:
	- DES+VIG
	- TM+10
	- Scegli uno: aria, fulmine, oscurità, terra. fuoco. ghiaccio, luce, fisico, veleno
##### Personalizzazione
Se *soldato* o *elite* scegli uno dalla lista seguente:
- due resistenze a scelta
- **Guardia giurata** regola speciale: Identica alla abilità *Protezione*, ma ha usi illimitati e può proteggere solo un alleato specifico di questo PNG
- **Intercettare** (regola speciale): i nemici devono includere questo PNG nei loro attacchi o incantesimi se possibile. Quando questo PNG subisce danni da un tipo a cui è vulnerabile perde questa regola fino all'inizio del suo prossimo turno
- **Blocco della vulnerabilità** (regola speciale): Scegli una vulnerabilità di un elite o campione, finchè questo PNG è in scena considera quell'affinità del suo alleato come senza affinità
- **Supporto incrollabile** (regola speciale): i ***Cattivi*** alleati a questo PNG possono spendere PU ed invocare i suoi tratti per le proprie prove. Se lo fanno la prova è un successo critico se i dadi mostrano due facce uguali e non sono fumble
Se *Elite*: 
- Raddoppia i PV
- +2 iniziativa
- +1 ***Role skill*** da **Sentinella**
Se *Campione (n)*:
- Moltiplica i PV per n
- Raddoppia i PM
- +n iniziativa
- +n ***Role skill*** da **Sentinella** e una *[[Nemici e BossList#Boss Skill||Boss Skill]]*


#### Cambiamenti in base al livello
| **Livello** | **Cambiamenti agli attributi** | **PV** | **MP** | **Precisione attacchi e magia** | **Bonus danni a attacchi e magia** | Nuove abilità                                                    |
| :---------: | :----------------------------: | :----: | :----: | :-----------------------------: | :--------------------------------: | ---------------------------------------------------------------- |
|     10      |               -                |   60   |   50   |               +1                |                 -                  | +1 a Dif e +2 a Dif. Magica                                      |
|     20      |            VIG d10             |   90   |   60   |               +2                |                 +5                 | +1 ***Role skill*** da **Sentinella**                            |
|     30      |            VIG d10             |  110   |   70   |               +3                |                 +5                 | i danni inflitti dall'**attacco potente** ignorano le resistenze |
|     40      |        VIG d10, VOL d10        |  130   |   90   |               +4                |                +10                 | +1 ***Role skill*** da **Sentinella**                            |
|     50      |        VIG d10, VOL d10        |  150   |  100   |               +5                |                +10                 | +1 Immunità no fisico                                            |
|     60      |   DES d10, VIG d10, VOL d10    |  170   |  110   |               +6                |                +15                 | +1 ***Role skill*** da **Sentinella**                            |
#### Role Skill da Sentinella
- Se non ci sono alleati in scena l'**attacco normale** guadagna **multi (2)**
-  L'**attacco normale** bersaglia la dif magica non la difesa
- quando una creatura è colpita dall'**attacco potente** se è afflitta da (scegli uno: *Confuso, Scosso, Lento, Debole*) ed è sotto l'effetto di uno o più incantesimi con durata Scena l'effetto di quegli incantesimi termina
- Questo PNG impara uno dei seguenti incantesimi: **Soffio Leccarsi le ferite, Guscio, Urlo di guerra** (pg 310) ed aumenta i suoi PM di 10. Le prove di *Incantesimo* sono su VIG+VOL
- **Barricata** (regola speciale): questo PNG può usare una azione e spendere 20 PM per dare a se stesso e i suoi alleati resistenza al danno ***fisico*** l'effetto dura fino alla fine della scena o finchè il PNG non subisce danni a cui è vulnerabile
- **Aura rassicurante** (regola speciale): finchè questo PNG non è afflitto da (scegli uno: *Confuso, Scosso, Debole, Lento*) ogni alleato e immune a (scegli uno: *Confuso, Scosso, Debole, Lento*)
- **Ridurre Progresso** (regola speciale): quando un nemico di questo PNG riempie o svuota due o più sezioni di un orologio e questo NPC non è afflitto da nessuno status tra (scegli due: *Confuso, Scosso, Debole, Lento, furioso, Avvelenato*) quel nemico riempie o svuota una sezione in meno (minimo 1)
- **Vendicare** (regola speciale): dopo che un nemico colpisce uno o più alleati con (scegli uno: attacco in mischia, a distanza, incantesimo) questo PNG esegue il suo **attacco pesante** come attacco gratuito. Considera il TM come 0 per i danni di questo attacco. Solo per ***Campioni***
- **Vendicare migliorato** (regola speciale): scegli una seconda regola per **Vendicare**

### Supporto
![[Ludicità/GDR/GIocate/Nemici e BossList.md#^area=3WTiMGf2oij_6Gb7Sf4Ju|Supporto]]
##### Affinità
Assegna una vulnerabilità adatte all'aspetto o al ruolo narrativo, ad es.  fulmine  per un drone volante di sorveglianza
##### Attacchi base
1. **Attacco normale:**
	- Mischia o distanza
	- DES+INT o INT+VOL
	- Danno: Tm+5 
	- Scegli uno: aria, fulmine, oscurità, terra. fuoco. ghiaccio, luce, fisico, veleno
##### Incantesimi
Scegli uno:
- due incantesimo tra **Aura, Risveglio, Barriera, Purificare, Velo elementale, Curare, Specchio, Accelerare, Urlo di guerra** (pg. 188, 192, 208, 310)
- un incantesimo dalla lista precedente e guadagna 10 PM massimi
##### Personalizzazione
Se *soldato* o *elite* scegli uno dalla lista seguente:
- 10 PV
- **Consiglio** (azione unica): questo PNG può usare una azione e 20 PM per scegliere un alleato che può sentirti e ha ancora un turno da eseguire in questo round, quell'alleato può eseguire il turno subito dopo questo PNG e la sua prima prova in quel turno ha +3 di bonus
- **Ispirare** (azione unica): Questo PNG può usare una azione e 20 PM per scegliere una alleato che può sentirti, quell'alleato recupera un quantitativo minore di (scegli: PV o PM) e considera la sua (scegli una: *DES, INT, VIG, VOL*) come di una taglia superiore fino all'inizio del prossimo turno di questo PNG
Se *Elite*: 
- Raddoppia i PV
- +2 iniziativa
- +1 ***Role skill*** da **Supporto**
Se *Campione (n)*:
- Moltiplica i PV per n
- Raddoppia i PM
- +n iniziativa
- +n ***Role skill*** da **Supporto** e una *[[Nemici e BossList#Boss Skill||Boss Skill]]*

- 

#### Cambiamenti in base al livello
| **Livello** | **Cambiamenti agli attributi** | **PV** | **MP** | **Precisione attacchi e magia** | **Bonus danni a attacchi e magia** | Nuove abilità                       |
| :---------: | :----------------------------: | :----: | :----: | :-----------------------------: | :--------------------------------: | ----------------------------------- |
|     10      |               -                |   50   |   70   |               +1                |                 -                  | +2 resistenze                       |
|     20      |            VOL d10             |   70   |   90   |               +2                |                 +5                 | +1 ***Role skill*** da **Supporto** |
|     30      |            VOL d10             |   90   |  100   |               +3                |                 +5                 | +1 a Dif. e +2 a Dif. Magica        |
|     40      |        VIG d8, VOL d10         |  120   |  110   |               +4                |                +10                 | +1 ***Role skill*** da **Supporto** |
|     50      |        VIG d8, VOL d10         |  140   |  120   |               +5                |                +10                 | +2 resistenze                       |
|     60      |    INT d12, IG d8, VOL d10     |  170   |  110   |               +6                |                +15                 | +1 ***Role skill*** da **Supporto** |
#### Role Skill da Sentinella
- L'**attacco normale** guadagna **multi (2)**
- Le creature colpite dall'**attacco normale** subisce (scegli uno: Confuso, Scosso, Lento, Debole)
- **Attacco in sequenza** (regola speciale): dopo che un alleato colpisce uno o più nemici con un attacco se l'alleato è sotto gli effetti di un incantesimo con durata Scena lanciato da questo PNG questo PNG può eseguire un **attacco normale** come azione gratuita contro uno di quei nemici scelto a caso. considera il TM come 0
- **Aura di guarigione** (regola speciale): alla fine del turno di questo PNG ogni alleato presente guadagna una minore quantità di PV
- **Batteria di MP** (regola speciale): quando un alleato spende PM questo PNG può spendere i PM al suo posto
- **L'ultimo comando** (regola speciale): dopo che questo PNG arriva a 0 PV o lascia la scena se ha l'abilità **Consiglio** o **Comando strategico** ne esegue immediatamente una senza costo in PM
- **Guida rassicurante** (regola speciale): quando un alleato è bersaglio dell'abilità **Consiglio** o **Comando strategico** quell'alleato guarisce da uno status
- **Comando strategico** (azione unica): questo PNG può usare una azione e 10 PM per scegliere un alleato che può sentirti e ha ancora un turno da eseguire in questo round, quell'alleato può eseguire il turno subito dopo questo PNG, la prima volta che l'alleato causa danni sono aumentati di 10 PV. Questa opzione è solo per ***Elite e Campioni***

## Boss Skill



%%
# Excalidraw Data
## Text Elements
## Embedded Files
3228beaa73d90368c737db21109421b1c0abc447: [[Pasted Image 20240824222851_840.png]]
8358ba6d2a74abf151c25ad0aff679c22675b814: [[Pasted Image 20240824233628_635.png]]
6079649078adf647852f43d440387f5517ca1d74: [[Pasted Image 20240825001653_821.png]]
b117ea95b74aadfdbbd2f4def15f04f22b3d5ffb: [[Pasted Image 20240825005403_939.png]]
5462238814a4ff9396e7d3a268d610968bda7297: [[Pasted Image 20240825113440_398.png]]
818a6230a2a9a594d96c8850f2d02b0badef3bf9: [[Pasted Image 20240825122842_316.png]]

## Drawing
```compressed-json
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=
```
%%