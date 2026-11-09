# Co.Em. VVF Caserta – progetto Android nativo

Progetto Android completo (Gradle + Java, Capacitor). Si apre così com'è e crea l'APK:
non servono altri download a parte Android Studio.

## Dati dell'app
- Nome: Co.Em. VVF Caserta
- Identificativo (applicationId): `it.coem.vvfcaserta` (cambiarlo prima della prima pubblicazione, se il Comando ne vuole uno suo)
- Versione: 1.0 · Android minimo: 7.0 (API 24) · target: API 36

## File principali
| File | A cosa serve |
|---|---|
| `android/app/src/main/java/it/coem/vvfcaserta/MainActivity.java` | Avvio dell'app (Activity nativa) |
| `android/app/src/main/AndroidManifest.xml` | Nome, icona, permessi |
| `android/app/build.gradle` | Identificativo, versione, firma |
| `android/app/src/main/res/` | Icone e schermata d'avvio in tutte le risoluzioni |
| `android/app/src/main/assets/public/` | L'app vera e propria (schermate e funzioni) |
| `node_modules/@capacitor/android/` | Libreria nativa Capacitor (già inclusa, non serve npm) |
| `www/` + `capacitor.config.json` | Sorgente dell'app, da usare con `npx cap sync android` dopo una modifica |

## Strada 1 – Android Studio (dal PC)
1. Installa Android Studio (developer.android.com/studio) e scompatta questo ZIP.
2. **File → Open** e scegli la cartella `android` (non quella principale).
3. Attendi la fine di "Gradle sync" (la prima volta scarica gli strumenti, qualche minuto).
4. APK di prova: **Build → Build App Bundle(s) / APK(s) → Build APK(s)**. Il file è in
   `android/app/build/outputs/apk/debug/app-debug.apk`.
5. Per il Play Store: **Build → Generate Signed App Bundle / APK → Android App Bundle**,
   crea una chiave (file .jks) e conservala con la password: senza, niente aggiornamenti.

## Strada 2 – GitHub, senza PC
1. Carica tutto il contenuto di questa cartella in un repository GitHub (la cartella `.github` compresa).
2. Ad ogni caricamento parte "Crea APK" (scheda **Actions**); dopo qualche minuto l'APK è in **Releases**,
   con un link scaricabile da mandare su WhatsApp.

## Installare l'APK sul telefono
Apri il file → consenti **Installa app sconosciute** per l'app da cui lo apri (WhatsApp, File) → **Installa**.

## Da sapere
- Questa versione salva i dati sul telefono (dimostrazione). Per i dati condivisi serve il server
  (Fasi 2 e 3 della guida): il codice nativo non cambia, cambia solo `assets/public/index.html`.
- Nell'app installata i pulsanti di download (PDF, CSV, ZIP) richiedono il plugin `@capacitor/filesystem`:
  da aggiungere nella Fase 3.
