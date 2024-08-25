# Typescript

- [Typescript](#typescript)
  - [Page](#page)
  - [Setup](#setup)

## Page

https://www.typescriptlang.org/

## Setup

In terminal:

```
node -v
v18.20.3
```

```
npm -v
10.7.0
```

```
tsc -v
Command 'tsc' not found, but can be installed with:
sudo apt install node-typescript
```

```
npm install -g typescript
added 1 package in 1s
```

```
tsc -v
Version 5.5.4
```

To launch `.ts` files compile mode with watch on changes

```
tsc main.ts -w
```

With build directory: `tsc -init`

```
/frontend/01-typescript/01-build-dir$ tsc -init

Created a new tsconfig.json with:

  TS

  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```

In `tsconfig.json` change:

```
"rootDir": "./src",
"outDir": "./build/js",
"target": "ES5", -- for older browsers
"noEmitOnError": true,
```

At the end add:

```
,
  "include": [
    "src"
  ]
```

Then in directory with `tsconfig.json` run `tsc -w`:

```
frontend/01-typescript/01-build-dir$ ls -l
total 20
drwxrwxr-x 3 pawel pawel  4096 sie 25 09:41 build
drwxrwxr-x 2 pawel pawel  4096 sie 25 09:37 src
-rw-rw-r-- 1 pawel pawel 12165 sie 25 09:41 tsconfig.json

frontend/01-typescript/01-build-dir$ tsc -w
```
