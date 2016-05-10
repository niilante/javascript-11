#JavaScript? Babel.

JavaScript má oproti většině ostatních jazyků jedno specifikum. Je sám o sobě obtížně **použitelný**. Na vině je především způsob, jakým dochází k uvádění jeho nových verzí. Jak si s tím úspěšně a elegantně poradit?

##JavaScript vs ECMAScript

JavaScript je pouze jednou z implementací standardu jménem **ECMAScript**. Díky obrovské popularitě JavaScriptu se ovšem tyto dva termíny často libovolně zaměňují. Existují však ještě další implementace jako JScript či ActionScript.

Ecma International od roku 1997 postupně vydává jednotlivé specifikace. Poslední stabilní verze je **[6 z roku 2015](http://www.ecma-international.org/ecma-262/6.0/)** často označovaná také jako **ES6**, **ES2015** či **Harmony**. Vývoj však neustává a tak se už pracuje na další verzi s pořadovým číslem sedm (také se užívá označení next).

##Podpora prohlížečů

Implementace standardů je zdlouhavý proces, i přestože začíná ještě před finální verzí specifikací. ES6 se už těší velmi slušné podpoře. Detailní přehled naleznete [zde](http://kangax.github.io/compat-table/es6/). Potíž však je, že ne všichni uživatelé používají poslední verze prohlížečů. Největší problém je tradičně u Internet Exploreru, kde i ten nejnovější jedenáctý ES6 téměř vůbec nepodporuje. V praxi je tak potřeba se ES6 zatím úplně vyhnout. Lepší situace je u Node.js, kde poslední šestá verze má už 93% podporu ES6.

##Co s tím?
My, tvůrci webových aplikací, musíme zajistit, aby naše stránky správně fungovaly ve všech běžně používaných prohlížečích. Jak si ale poradit s tím, že každý prohlížeč podporuje jiný set standardu Harmony? Nejjednodušším řešením je se zatím 6. verzi zcela vyhnout a **používat pouze funkce z verze 5.1**, která je již plně etablovaná. Nicméně tím se ocitnete v pozici malého dítěte, které v hračkárně toužebně pokukuje po mluvících a chodících robůtcích, zatímco doma si ještě několik let bude muset hrát s klacky a kameny. Předchozí příklad je samozřejmě nadsázka. Tak propastný rozdíl mezi verzemi zase není. Nicméně nebojte, existují lepší řešení.

##Shimujeme
ES6 přináší dva typy novinek. Tou první jsou **nové objekty a funkce** na již existujících objektech. K těm si můžeme dopomoci jednoduše tím, že k projektu připojíme kusy kódu nazývané [shimy a polyfilly](https://github.com/es-shims). Ty pak detekují chybějící či odlišné API jednotlivých prohlížečů a následně je doplní a sjednotí. V budoucnu, až budou prohlížeče daný standard plně podporovat, můžeme tyto knihovny úplně odstranit.

##Kompilujeme
Druhou novinkou je nová syntax. V ES6 nám například přibyla nová klíčová slova jako `class`, `extends`, `let` či `import`. Tady si bohužel pouze s připojenou knihovnou už nevystačíme. Musíme použít **program - kompilátor**, který náš kód přeloží do starší plně podporované verze. V našem případě ES5. Navíc vyřeší i ony nové objekty a funkce z předchozí kapitoly (někdy ale bude i tak potřeba přidat polyfill). I zde platí, že v budoucnu budeme moct kompilátor z procesu úplně vynechat a náš kód bude v prohlížečích fungovat bez dodatečných úprav.

##V budoucnu?
Problém ovšem je, že jakmile budou všichni plně podporovat ES6, tak tu budeme mít finální specifikaci ES7 a mlsně pokukovat po ES8. Prakticky to znamená jediné. **Samotný JavaScript nikdy používat nemůžeme**, pokud nechceme být neustále 3 roky pozadu. Nejlepším řešením je tedy vždy používat jazyk kompilovaný do JavaScriptu.

##Kompilátory
Nových jazyků a kompilátorů existuje celá řada. Dají se rozdělit do 2 základních kategorií. Tou první jsou zcela nové jazyky, které mají úplně odlišnou syntax a nemůžeme je tedy použít na vylepšení již hotových projektů. Jde například o populární [CoffeeScript](http://coffeescript.org), [PureScript](http://www.purescript.org), [ClojureScript](https://github.com/clojure/clojurescript) či [Dart](https://www.dartlang.org) (ten se snažil dokonce úplně emancipovat od JS ale neúspěšně). Druhou kategorií jsou jazyky, které současný JavaScript pouze rozšiřují a snaží se více či méně zachovat dopřednou kompatibilitu. Jde třeba o [TypeScript](http://www.typescriptlang.org), [Traceur](https://github.com/google/traceur-compiler) či [Babel](https://babeljs.io). Vzájemným porovnáváním by se dalo popsat několik dalších stránek, proto ho nechávám na každém z vás. Dále se budu věnovat pouze poslednímu jmenovanému.

##Babel
Babel nedávno vznikl přejmenováním z **6to5**, rychle se dostal na špičku popularity a získává stále větší momentum. **Proč je úspěšný?** Hlavním důvodem je jednoduše [nejširší podpora ES6 i ES7 (ES Next)](https://kangax.github.io/compat-table/es6/). Plně integruje **JSX a React** (taková ta podivnost, kdy píšete HTML tagy přímo do těla JavaScriptových funkcí). Skvěle si rozumí s editory a různými nástroji.

<p class="pic-container" style="max-width:250px">
  <img src="pics/babel.jpg" class="pic" title="Babel - nová generace JavaScriptu" />
</p>

Používají ho už dnes firmy jako **Facebook, Yahoo, Netflix, Mozilla a Evernote**. Můžete ho nasadit na serverovém prostředí **node.js**. Je to ale stále onen čistý JavaScript, takže s ním můžete bez problémů zkompilovat i svoje stávající projekty a s ES6 začít postupně.

##Co tedy ES6 přináší?
Je toho spousta. Zmíním jenom pár těch nejzásadnějších věcí. Bylo by asi zbytečné kompletně překládat [tuto povedenou dokumentaci](https://babeljs.io/docs/learn-es2015/) (ukázky kódu jsou zkopírované z této dokumentace).

###Třídy
Rozlučte se s `prototype`. Máme tu novou hezčí syntax, která podporuje prototypovou **dědičnost**, volání rodičovské metody, statické metody či **konstruktory**. U zkušenějších JS vývojářů se však často setkáte s názorem, že tato nová syntax je velkou chybou, protože bude svádět nováčky ke klasickému OOP, což je v JS považováno z mnoha důvodů za špatné.

```js
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

###Let a const
Rozlučte se s `var`. Máme tu `let`. Oproti `var` omezuje působnost proměnné na nejbližší blok. Dále také přibylo klíčové slovo `const` pro konstanty.

```js
function f() {
  {
    let x;
    {
      // platnost pouze v tomto bloku
      const x = "sneaky";
      // chyba, nemůžeme měnit konstantu
      x = "foo";
    }
    // chyba, nemůžeme opět deklarovat x ve stejném bloku
    let x = "inner";
  }
}
```

###Moduly
Nová syntax sjednocující definici a nahrávání modulů. Nepostradatelná zbraň pro **rozdělení kódu do mnoha modulů a souborů**. Můžete si následně vybrat formát, do kterého má Babel ES6 moduly přeložit. V nabídce je **Common.js**, **AMD**, System a UMD. Dokonce si můžete vymyslet i formát vlastní. Nástroje jako **browserify** či **webpack** pak tyto závislosti za vás vyřeší a sestaví jeden výstupní soubor.

Ze souboru můžeme **exportovat funkce**, **objekty** i **proměnné** pomocí klíčového slova `export`.

```js
// lib/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;
```

V jiném souboru si je pak můžeme **importovat** pomocí klíčových slov `import` a `from`. `*` naimportuje vše.

```js
// app.js
import * as math from "lib/math";
alert("2π = " + math.sum(math.pi, math.pi));
```

Můžeme si ale i vybrat, **co přesně** chceme naimportovat pomocí `{}`.

```js
// otherApp.js
import {sum, pi} from "lib/math";
alert("2π = " + sum(pi, pi));
```

Specialitou je pak klíčové slovo `default`.

```js
// lib/mathplusplus.js
export * from "lib/math";
export var e = 2.71828182846;
export default function(x) {
    return Math.exp(x);
}
```

V cílovém souboru si pak můžeme **default import** pojmenovat zcela dle své vůle (zde `exp`). Současně můžeme i nadále importovat ostatní funkce, objekty a proměnné.

```js
// app.js
import exp, {pi, e} from "lib/mathplusplus";
alert("2π = " + exp(pi, e));
```
Pokud máte nějaké otázky ohledně ES6 modulů (a věřím, že jich určitě bude spousta), koukněte se na pěkný přehled [sem](http://www.2ality.com/2014/09/es6-modules-final.html).

### Ostatní
Velmi užitečné jsou také **defaultní hodnoty** pro argumenty funkcí, **šablony** pro řetězce (aneb už není potřeba zběsile používat `+` pro spojování řetězců a proměnných) či **destructuring**. Pro více detailů navštivte [dokumentaci](https://babeljs.io/docs/learn-es6).

##Závěrem
JavaScript už dávno není pouze doplňkovou hračkou v prohlížečích, ale začíná nám ovládat i ostatní platformy. Velké firmy do něj investují nemálo peněz a jeho vývoj tak probíhá překotným tempem. Díky tomu pak vznikají špičkové nástroje jako je Babel. To co na první pohled vypadá jako divoká džungle, tak nakonec příspívá k pružnějšímu vývoji, nutí výrobce prohlížečů rychleji implementovat nové funkce a programátor tím přesto nemusí trpět. Co si tedy z článku odnést? Jednoduché ponaučení! Vždy si přidejte Babel do svého vývojářského procesu a užívejte si budoucnost už dnes. **JavaScript je mrtev, ať žije Babel!**

*Poslední aktualizace: 9/5/16*

