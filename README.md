# AppTodoList

Angular version 10.2.3.

## Jak uruchomić
1. Sklonuj repo
2. Użyj komendy `npm install`
3. Użyj komendy `ng serve`, aplikacja domyślnie skonfigurowana jest na otwarcie na porcie 4200

## Spędzony czas na tworzeniu aplikacji
- Po 1:30h setup projektu, obmyślenie koncepcji i architektury aplikacji, implementacja stora, podstawowe szablony modułów 
- Po 3h dodatnie effects, api-service, komponent z listą
- Po 6h cała reszta komponentów i dialog
- Po 8h stylizacja z angular material

Całość około 9h

## Sprawy do dokończenia
Z powodu braku czasu nie udało się, a było w planie:
- podstawowe unit testy //gotowe
- UI ze screena
- deserializacja danych przychodzących z serwera -> np. została flaga `is_completed`, lepiej zamienić to na camelCase i sprowadzić do typu `boolean` //gotowe
- użycie entityAdaptera w storze //gotowe
- uporządkowanie niektórych plików, czasami da się coś wyseparować do oddzielnej metody itp. - sprawy kosmetyczne

//powinno też zastosować się lazy loading dla modułów
```
{
    path: '',
    loadChildren: () => import('./feature-todo-list/feature-todo-list.module').then(m => m.FeatureTodoListModule)
}
```
