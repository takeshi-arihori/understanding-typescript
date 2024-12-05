# TypeScript の sourceMap を有効にして、デバッグを効率化する

## sourceMap とは

SourceMap は、トランスパイルされた JavaScript コードと、元の TypeScript ソースコードとの対応関係を保持するマッピングファイルです。`"sourceMap": true`を設定することで、開発者は圧縮や変換後のコードではなく、元の TypeScript コードを直接デバッグできるようになります。

## メリット

### 1. 元のコードでのデバッグ

SourceMap を有効にすると、ブラウザの開発者ツールや IDE で、トランスパイル後の JavaScript ではなく、元の TypeScript コードの正確な行と位置情報を参照できます。これにより、エラーの特定と修正が格段に容易になります。

### 2. エラートレースの精度向上

コンパイル後のコードは、元のコードから大きく変換されることがあります。SourceMap を使用することで、正確なエラー行とスタックトレースを元の TypeScript ファイルに対して取得できます。

### 3. ソースコードの可読性維持

本番環境用にコードを圧縮・最小化しても、SourceMap のおかげで開発時と同等の可読性を保つことができます。

## 設定方法

`tsconfig.json`で以下のように設定します：

```json
{
    "compilerOptions": {
        "sourceMap": true
        // 他のオプション...
    }
}
```

## 利用例

TypeScript をコンパイルすると、`example.ts`に加えて`example.js.map`が生成されます。

```typescript
// example.ts
function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

greet("TypeScript");
```

## 注意点

-   SourceMap はデバッグ時のみ推奨され、本番環境では性能とファイルサイズの観点から無効にすることが多いです。
-   SourceMap ファイルにはソースコード情報が含まれるため、公開を避けたい場合は適切な設定が必要です。

## まとめ

`sourceMap: true`は、TypeScript でのデバッグ作業を劇的に効率化するオプションです。開発効率と追跡可能性を大幅に向上させるため、開発中は積極的に活用しましょう。
