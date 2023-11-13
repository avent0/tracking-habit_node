# tracking-habits

This template should help get you started developing with Vue 3 in Vite.

## Démarrage du projet Tracking-habits
Pour démarrer le projet Tracking-habits, vous devez lancer le front-end séparément et ensuite le backend. Le dossier backend est situé à la racine du projet front-end, et il s'appelle "tracking_habit_backend". Une fois le projet démarré, vous pouvez vous inscrire. Après l'inscription, vous recevrez un message dans votre boîte mail contenant le code PIN. À l'aide de ce code PIN, vous pouvez vous connecter en renseignant, en plus de ce code PIN, votre adresse e-mail et votre mot de passe de connexion. Les trois sont obligatoires ! C'est après cela que vous pouvez créer une habitude.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
