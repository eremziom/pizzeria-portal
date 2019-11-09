# Dashboard

- '/'
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- '/login'
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- '/tables'
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna będzie jednym stolikiem
    - każdy wiersz będzie blokiem 30 min
    - ma przypominać widok tygodnia w kalendarzu google, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji lub eventu, pzrechodzimy na stronę szczegółów

- '/tables/booking/:id'
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian

- '/tables/booking/new'
  - analogicznie do powyższej, bez początkowej informacji

- '/tables/events/:id'
  - analogicznie do powyższej, dla eventów

- '/tables/events/new'
  - analogicznie do powyższej, dla eventów, bez początkowych informacji

# Widok kelnera

- '/waiter'
  - tabela
    - w wierszach wyświetla stoliki
    - w kolumnach różne rodzaje informacjii
      - status
      - czas od ostatniej aktywności
    - w osttaniej kolumnie dostępne akcje dla danego stolika
- '/waiter/order/new'
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranengo produktu
  - zamówienie (zamówione produkty z opcjami i cenami)
  - kwota zamówienia
- '/waiter/order/:id'
  - jak powyższa

# Widok kuchni

- '/kitchen'
  - wyświetlać listę zamówień w kolejności ich złożenia
  - lista musi zawierać 
    - numer stolika lub zamówienia zdalnego
    - pełne informacje dotyczące zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowanego
