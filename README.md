# react-native-ws
En workshop i react-native

# Oppsett.
Pass på at du har Node v6 eller nyere installert på datamaskinen din og [Expo](https://expo.io) på telefonen din.

Alternativt: Hvis du heller ønsker å kjøre applikasjonen i en simulator følg oppsettet under `Building Projects with Native Code` i [dokumentasjonen til Facebook](https://facebook.github.io/react-native/docs/getting-started.html)

# Oppgaver (Mats)

Vi skal lage PokeDex!

## Komme i gang

For å komme fort i gang med React-Native-appen vår, skal vi bruke et verktøy som heter `create-react-native-app`.
Dette verktøyet genererer en enkel app for oss, så vi har et godt utgangspunkt fra starten av. For å installere dette, kjør følgende:

```
npm install -g create-react-native-app
create-react-native-app pokedex
cd pokedex/
npm start
```

Du kan lese mer om `create-react-native-app` her: https://github.com/react-community/create-react-native-app

Når dette er gjort, skal du ha en QR-kode i terminalvinduet ditt. Dette kan du scanne med Expo-appen på telefonen din, for å snurre opp appen der.
Om du ønsker å kjøre i simulator, kan du kjøre `npm start ios` eller `npm run android`, i stedet for `npm start`.

Bytt ut noe av teksten i `App.js` og lagre fila. Appen skal restarte, og teksten endre seg automatisk. Kult? Dette kalles _Live Reload_.

Åpne utviklermenyen (rist på telefonen). Du vil få opp en meny. Her vil du se at du kan slå av Live Reload. Prøv det, og slå heller på _Hot Reloading_. Da skal tekst endre seg uten at hele appen lastes på nytt. Du kan nå åpne utviklerkonsollen på denne sida for å se logger fra appen din. I Chrome kan du trykke ALT+CMD+i for å få opp denne.

Da skal du være veldig klar til å starte på din egen PokéDex!

## PokeList

4. Mock opp firkanter som tar 1/3 av bredden. Fast bredde / Dimensions. (Styling / View)
5. Legg inn bilde i firkanter (<Image/>)
6. Lister ut alle pokemons (<FlatList/>)
7. Legg på TouchableOpacity på hvert bilde og console.log ut en string. (<TouchableOpacity />)

## PokeView
8. Lag et nytt komponent for å vise frem detaljer om en pokemon, kommenter ut FlatList enn så lenge. Vis frem ønsket data og kanskje et bilde. (Fetch data) eventuelt ActivityIndicator.
9. Lag en enkel routing, slik at man kan navigere frem og tilbake mellom listen og detaljer.

Ekstra: AR.

# Før vi starter. (Svein)
