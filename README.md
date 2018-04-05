# react-native-ws
En workshop i react-native

# Oppsett. 
Pass på at du har Node v6 eller nyere installert på datamaskinen din og [Expo](https://expo.io) på telefonen din. 

# Oppgaver (Mats)

## Oppgave 1: Komme i gang 

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

2. Bytt ut innholdet i App.js med <eksempel kode> "Hello world", og endre på teksten for å se hot reloading. (Hot reloading)
3. Sett opp remote debugging. (Debugging)
4. Mock opp firkanter som tar 1/3 av bredden. Fast bredde / Dimensions. (Styling / View)
5. Legg inn bilde i firkanter (<Image/>)
6. Lister ut alle pokemons (<FlatList/>)
7. Legg på TouchableOpacity på hvert bilde og console.log ut en string. (<TouchableOpacity />)
8. Lag et nytt komponent for å vise frem detaljer om en pokemon, kommenter ut FlatList enn så lenge. Vis frem ønsket data og kanskje et bilde. (Fetch data) eventuelt ActivityIndicator. 
9. Lag en enkel routing, slik at man kan navigere frem og tilbake mellom listen og detaljer. 

Ekstra: AR. 

# Før vi starter. (Svein)
