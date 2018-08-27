# Gotta catch'em all!

En introduksjon til React Native i workshop-form.

# Oppgaver

Vi skal lage Pokédex! Vet du ikke hva det er? Vi siterer [Wikipedia](https://no.wikipedia.org/wiki/Pokédex): 
> Pokédex er et hjelpemiddel i Pokémon-spillene som viser en liste over ulike Pokémoner, deres data, lokaliteter og annen informasjon om dem.

## 1 Komme i gang

Fra dette avsnittet av tar workshoppen utgangspunkt i at du bruker en ferdig oppsatt Mac. Bruker du din egen maskin, kan du følge instruksene under "Building Projects with Native Code" her: https://facebook.github.io/react-native/docs/getting-started

### 1.1 Kjøre opp appen

For å komme fort i gang med React Native-appen vår, skal vi bruke `react-native-cli`-verktøyet som allerede skal være installert. Dette verktøyet genererer en enkel app for oss, så vi har et godt utgangspunkt fra starten av.

:trophy: **Din oppgave:** Åpne terminalen og skriv inn følgende:

```
react-native init pokedex
cd pokedex/
react-native run-ios # eller 'react-native run-android' dersom du kjører Android
```

En utviklingsserver vil starte, en iPhone-simulator vil automatiske åpne seg, og appen din vil starte på den.

### 1.2 Utviklingsmiljø

Åpne utviklermenyen (Cmd+D på simulatoren). Du vil få opp en meny. Her vil du se at du kan slå på noe som heter Hot Reloading ("Enable Hot Reloading"). Gjør det. Bytt ut noe av teksten i `App.js` og lagre fila. Appen skal skifte ut teksten i appen automatisk, uten reload. Kult? Du kan også prøve ut _Live Reload_. Da vil appen lastes på nytt ved endringer.

I utviklermenyen finner du også noe som heter _Debug JS Remotely_. Trykk på denne. En nettside vil åpne seg. Du kan nå åpne utviklerkonsollen (Alt+Cmd+I) på denne sida for å se logger fra appen din.

:trophy: **Din oppgave:** Bruk [`console.log`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) til å skrive ut "Hello world!" (eller noe annet), og sjekk at det dukker opp i nettleseren din.

Da skal du være veldig klar til å starte på din egen PokéDex!

## 2 PokeList

Vi skal begynne med å lage en oversikt over alle pokémonene. Vi ønsker å vise et bilde av hver pokémon i et rutenett.

### 2.1 Styling

I React Native skriver vi stiler i JavaScript. Det ligner veldig på CSS, men er litt annerledes likevel. Du kan lese mer om stiler her: https://facebook.github.io/react-native/docs/style.html. Du kan selv velge hvor store firkanter du vil ha, og hvor mange du vil ha på hver rad. Du kan prøve deg fram med pixel-verdier, eller bruke [Dimensions](https://facebook.github.io/react-native/docs/dimensions.html) til å basere størrelsen til firkantene etter skjermstørrelsen. Om du vil ha tre stykk i bredden, kan det være fint om hver firkant er litt mindre enn en tredjedel av skjermens bredde. Da har vi også plass til litt luft rundt.

Vi begynner med én firkant, og du kan ta utgangspunkt i `App.js`.

:trophy: **Din oppgave:** Bruk et [`View`](https://facebook.github.io/react-native/docs/view.html) til å lage en grå, kvadratisk firkant midt på skjermen.

### 2.2 Layout

Nå har du sikkert en grå, passe stor firkant midt på skjermen. Neste oppgave blir å lage rutenettet med mange slike firkanter i. React Native sine stiler bruker Flexbox-systemet fra CSS aktivt. Vi kunne brukt det til å lage et rutenett, omtrent slik:

```
render() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  square: {
    // Dine stiler her
  }
});
```

:heavy_exclamation_mark: Men, React Native gir oss en svært praktisk komponent for dette formålet, nemlig [FlatList](https://facebook.github.io/react-native/docs/flatlist.html)!

:trophy: **Din oppgave:** Gjør deg kjent med FlatList-komponenten og prøv å bruke denne til å lage et fint rutenett med grå firkanter.

FlatList er en komponent som har to påkrevde props. `data` er en liste med ting, og `renderItem` er en funksjon som definerer hvordan hver av disse tingene skal rendres. I forrige oppgave lagde du en firkant. Den kan du kanskje returnere fra din `renderItem`-funksjon. FlatList har også andre nyttige props. Legg merke til blant annet `numColumns` og `onRefresh`.

Tips: For å ha et sett med data å jobbe med, kan du lage en konstruktør over render-metoden, med en state som inneholder en liste med pokémon-ID-er. Disse ID-ene er tall fra 1 og oppover.

```
state = {
  pokemonIds: Array(150).fill().map((e,i) => i + 1)
}

render() {
  ...
```

### 2.5. Bilde

:trophy: **Din oppgave:** Legg inn bilder av pokémon i firkantene

I hver av firkantene skal vi nå ha et bilde. Da kan du bruke [Image-komponenten](https://facebook.github.io/react-native/docs/image.html) til React Native. URL til bilder er på dette formatet: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{ID}.png`, der du bytter ut `{ID}` med pokémonens ID.

### 2.6 Håndtere trykk

Gratulerer med en fin oversikt over pokémoner! Men vi ønsker å få til litt mer når man trykker på en av dem. Da må vi gjøre firkantene våre trykkbare. I React Native bruker man Touchable-komponenter for å håndtere trykk. For å registrere trykk på en komponent, må den være barn av en slik Touchable-komponent. Ved trykk vil da `onPress`-funksjonen bli kalt.

:trophy: **Din oppgave:** Bruk [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html) til å skrive ut ID-en til pokémonen til konsollen ved trykk.

Du kan lese mer om håndtering av trykk her: https://facebook.github.io/react-native/docs/handling-touches.html.

## 3 PokeDetails

Vi har nå laget en applikasjon som lister ut alle pokemonene og ønsker nå å vise frem mer informasjon om hver pokemon.
Det finnes selvfølgelig et [pokeapi](https://pokeapi.co/) med denne informasjonen. Besøk siden og bli kjent med apiet.

Vi skal bruke `/pokemon/{id}` endepunktet som gir oss informasjon om en pokemon med en gitt `id`.

### 3.1 Hente data.

React Native bruker [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) til å gjøre nettverkskall.
For å gjøre et kall gir man rett og slett en `url` som argument til `fetch` som i eksempelet nedenfor hvor vi henter ut
informasjon om pokemonen med id 1 (Bulbasaur).

```javascript
fetch("http://pokeapi.co/api/v2/pokemon/1");
```

:trophy: **Din oppgave:** Du skal nå lage en komponent som viser frem informasjon om en pokemon basert på id. Feks. ved å gjøre et fetch-kall i `componentDidMount`. Forslag til ting du kan vise er navn, type, vekt, og et større bilde av pokémonen.

Du kan kopiere eksempelkoden under i en ny fil som heter `PokeDetails.js`, og importere denne i `App.js` ved å legge `import PokeDetails from './PokeDetails` på øverste linje i `App.js`.

```
import React from 'react'

class PokeDetails extends React.Component {
  this.state = {
    pokemon: null
  }

  componentDidMount() {
    const { pokeId } = this.props;
    if (pokeId) {
      fetch(`http://pokeapi.co/api/v2/pokemon/${pokeId}/`)
        .then(res => res.json())
        .then(data => {
          this.setState({ pokemon: data });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    // Returner ønskede detaljer.
  }
}
export default PokeDetails;
```

:heavy_exclamation_mark: Enn så lenge kan du kommentere ut innholdet av `render` i `Àpp.js` og erstatte det med `<PokeDetails pokeId={1} />`


Tips:
* Man kan bruke en [ActivityIndicator](https://facebook.github.io/react-native/docs/activityindicator.html) for å vise brukeren at man henter data.
* Komponenten må vite hvilken pokémon den representerer. Dette kan gjøres ved å sende pokémonens ID som [prop](https://facebook.github.io/react-native/docs/props.html) til komponenten.

### 3.2 Navigering

Applikasjonen vår kan både liste ut alle pokemonene og vise detaljer om en. Det ville derfor vært naturlig at man
kunne trykke på en pokemon i listen og få opp informasjon om denne. Vi skal gjøre dette ved å holde på informasjon om
hva som skal vises i [state](https://facebook.github.io/react-native/docs/state.html). På denne måten kan vi sjekke hva vi skal vise til brukeren slik som nedenfor.

```
// App.js
class App extends React.Component {
  state = {
    pokemonIds: Array(150).fill().map((e,i) => i + 1),
    route: "List",
    pokeId: null
  }
    
  render() {
    if (this.state.route === 'List') {
      // return list
    }
    else if (this.state.route === 'Details') {
      // return details
    }
  }
}
export default App;
```

:trophy: **Din oppgave:** Lag en enkel routing slik at man kan navigere mellom liste- og detalje-visning.

Tips:
* Man endrer på state ved å bruke funksjonen [setState](https://facebook.github.io/react-native/docs/state.html)
* Man kan sende med funksjoner som [props](https://facebook.github.io/react-native/docs/props.html) til komponenter. For eksempel kan det være lurt å bytte ut `onPress`-funksjonen du skrev i oppgave 2.6 med en som bruker `setState`. :wink:
* I en større og/eller mer seriøs app ville man nok brukt et bibliotek for håndtering av navigering. [React Navigation](https://reactnavigation.org/docs/getting-started.html) er det klart mest populære alternativet i dag.


### Ekstraoppgaver
Ferdig allerede? Her er noen forslag på ting du kan gjøre videre med pokedexen din.
* Bruk [ActivityIndicator](https://facebook.github.io/react-native/docs/activityindicator.html) i PokeDetails for å vise brukeren at man henter data.
* Legg til nummeret til hver pokémon på/ved bildet dens i lista.
* Legg til mulighet for å favorittmerke en pokémon. En favorittpokémon kan for eksempel vises øverst i lista, gjerne med litt spesiell styling eller i en egen seksjon.
* Sorter/filtrer lista basert på egenskaper ved pokémonene. For eksempel etter type (gress/ild), styrke eller kjønn. Her er du avhengig av å hente data om alle pokémon fra starten av, i stedet for å kun hente data om én pokémon ved åpning av detaljsiden.
