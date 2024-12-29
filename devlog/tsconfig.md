## tsconfig.json の作成

### Project のルートディレクトリに tsconfig.json を作成する

```
tsc --init
```

typescript によって管理されるべきものを指定するためのファイルです。
TypeScript がどのように JavaScript ファイルにコンパイルされるかを指定します。

### exclude

指定したファイルを除外したいときに使用します。
ワイルドカードを使用することができます。

### include

指定したファイルのみをコンパイルしたいときに使用します。

### target

指定したバージョンの ECMAScript にコンパイルします。

-   es5: 例えば var や function などの古い構文を使用します。
-   es6: 例えば let や const などの新しい構文を使用します。
