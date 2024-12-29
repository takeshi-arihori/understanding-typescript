# let と var の違いについて

## 概要

JavaScript では、変数を宣言する際に`var`、`let`、`const`を使用できますが、`let`と`var`にはスコープの扱いに大きな違いがあります。本記事では、これらの違いを具体例を交えながら説明します。

## let と var の違い

### 1. スコープの違い

-   `var`: **関数スコープ**を持つ。
    -   関数内で宣言された場合、その関数全体で有効。
    -   ブロック（`if`や`for`など）内で宣言しても、そのブロック外でもアクセス可能。
-   `let`: **ブロックスコープ**を持つ。
    -   ブロック内で宣言された場合、そのブロック外ではアクセス不可。

### 2. 再宣言の違い

-   `var`: 同じスコープ内で再宣言が可能。
-   `let`: 同じスコープ内で再宣言するとエラーが発生。

### 3. 変数の巻き上げ（Hoisting）の違い

-   `var`: 宣言がスコープの先頭に巻き上げられるため、宣言前に使用可能（ただし値は`undefined`）。
-   `let`: 宣言が巻き上げられるが、初期化されるまでアクセスできない（`Temporal Dead Zone`）。

## 具体例

以下の例を見て、`let`と`var`のスコープの違いを確認しましょう。

### TypeScript コード

```typescript
const userName = "Max";
let age = 30;
if (age >= 20) {
    let isAdult = true;
}

console.log(isAdult); // ReferenceError: isAdult is not defined
```

### ES5 にトランスパイル後のコード

`let`は`var`に変換されます。

```javascript
var userName = "Max";
var age = 30;
if (age >= 20) {
    var isAdult = true;
}

console.log(isAdult); // ここでエラーは発生しない
```

### ES6 にトランスパイル後のコード

`let`はそのまま保持されます。

```javascript
const userName = "Max";
let age = 30;
if (age >= 20) {
    let isAdult = true;
}

console.log(isAdult); // ReferenceError: isAdult is not defined
```

### 結果の違い

-   **ES5 をターゲットにした場合:**
    -   `let`は`var`に変換されるため、`isAdult`は関数スコープを持ち、ブロック外でもアクセス可能。
    -   結果として`true`が表示される。
-   **ES6 をターゲットにした場合:**
    -   `let`はそのまま保持され、ブロックスコープが適用される。
    -   ブロック外で`isAdult`を参照すると`ReferenceError`が発生。

## tsconfig の設定

TypeScript のトランスパイル先を変更するには、`tsconfig.json`で`target`を設定します。

### ES5 をターゲットにする場合

```json
{
    "compilerOptions": {
        "target": "ES5"
    }
}
```

この設定では、`let`や`const`が`var`に変換されます。

### ES6 をターゲットにする場合

```json
{
    "compilerOptions": {
        "target": "ES6"
    }
}
```

この設定では、`let`や`const`がそのまま保持されます。

## 注意点

-   `target`が`ES5`の場合、`let`や`const`が`var`に変換されるため、意図しないスコープの問題が発生する可能性があります。
-   `target`を`ES6`以上に設定することで、`let`や`const`のスコープが正しく適用されます。

## 結論

-   `let`はブロックスコープを持ち、意図しない変数の参照を防ぐことができます。
-   `target`の設定により、トランスパイル後の挙動が異なるため、プロジェクトに適した設定を選択することが重要です。
-   新しいコードを書く際は、基本的に`let`や`const`を使用し、`var`の使用は避けるべきです。

安全で予測可能なコードを書くために、`let`や`const`を積極的に活用しましょう。
