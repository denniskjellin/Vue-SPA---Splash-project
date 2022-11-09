# Vue SPA Application - Splash

This template should help get you started developing with Vue 3 in Vite.
Detta projekt är byggt med Vue.js som en SPA(single-page-application) som använder Vue.js routing system.

## Rekomenderad IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (och disabla Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Ställ in configuration

Se [Vite Configuration Reference](https://vitejs.dev/config/).

## Projekt Installering

```sh
npm install
```

### Starta upp projektet med lokalserver

```sh
npm run dev
```

### Kompilera och minifiera för publicering

```sh
npm run build
```

### Paket som finns installerade i projektet:

* Vue
* Vue-router
* Tailwind
* Axios
* ESLint
* Vite

******
### HTTP Reuqests
Anrop mot webbtjänster sker med Axios HTTP requests, inlogg och registrering sker med Fetch.
Skyddade undersidor så skickas TOKEN med för autentisering.

Anrop som används är GET, PUT, DELETE och POST.

## Struktur
Listning av projketets routes, komponenter och views.

### Routes


| path                 | name         | component        | beskrivning                          | Krävs Bearer-token? |
| -------------------- | ------------ | ---------------- | ------------------------------------ | ------------------------ |
| "/"                  | dashboard        | DashboardView        | Kontrollpanel för användaren                          | Ja                        |
| "/login"             | login        | LoginView        | loginsida med formulär               |         Nej                |
| "/register"             | register        | RegisterView        | registrering med formulär               |          Nej                |
| "/suppliers"             | suppliers        | SupplierView        |  Vy med leverantörer               |          Ja                |
| "/supplier/:id"             | supplierdetails        | SupplierDetailsView        | Vy med leverantör hämtat med ID               |          Ja                |
| "/categories"             | categories        | CategoriesView        | Vy med kategorier               |          Ja                |
| "/categories/:id"             | categories        | CategoryDetailsViewView        | Vy med kategori hämtat med ID             |               Ja           |
| "/products"             | products        | ProductsView        | Vy med listade produkter             |            Ja              |
| "/products/:id"             | productsdetails        | ProductDetailsView        | Vy med produkt hämtat med ID               |          Ja                |
| "/sarch/:id"             | search        | SearchView        | Vy för presentering av sökresultat              |                Ja          |

******

### Components

| Komponent            | beskrivning                                                                      | View/component den finns i  
| -------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| ShowCategories        | Komponent för formatering av utskrift för kategories i form av cards                                                 |    CategoryDetailsView, CategoriesView                                                               |
| ShowProducts        | Komponent för formatering av utskrift för produkter i form av cards                                                    |    ProductDetailsView, ProductsView, SearchView                                                               |
| ShowSuppliers        | Komponent för formatering av utskrift för leverantörer i form av cards                                                    |    SupplierDetailsView, SuppliersView                                                               |
| Dashboard       | Komponent för formatering av dashboard                                                  |    DashboardView                                                             |
| Footer      | Komponent för formatering av footer med innehåll                                              |    App                                                             |
| Header       | Komponent för formatering av header  med sökfunktion                                              |    App                                                             |
| LoginForm       | Komponent för inloggning                                              |    LoginView                                                             |
| RegisterForm       | Komponent för registrering                                                 |    RegisterView                                                             |
| Sidebar       | Komponent för Siderbar med navigering                                             |    App                                                             |
| Dashboard       | Komponent för formatering av dashboard                                                  |    DashboardView                                                             |

******

### Views

| Views            | beskrivning                                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------------------------------- |
| CategoriesView       | Formulär för att lägga till kategori                                                       |
| CategoryDetailsView       | Vy för presentering av kategori via ID                                                   |
| ProductsView      | Formulär för att lägga till produkt                                                   |
| ProductDetailsView       | Vy för presentering av produkt via ID                                                   |
| SearchView       | Vy för presentering av sökresultat                                                 |
| SuppliersView      | Vy för presentering av leverantörer                                                 |
| SupplierDetailsView       | Vy för presentering av leverantör via ID                                                   |
| DashboardView       | Vy för Dashboard (Kontrollpanelen)                                                  |
| LoginView      | Vy för inloggning                                                 |
| RegisterView      | Vy för registrering                                               |
| App       | Main vy                                                  |


******

### Frågor eller funderingar?
Hör gärna av dig till mig!

### Kontaktuppgifter:
#### e-post: dekj2100@student.miun.se
#### e-post: denniskjellin@hotmail.com
