# 【世界で 7 万人が受講】Understanding TypeScript 日本語版

## コアな型

-   `number`: float や double などはなく全て一貫して `number`
-   `string`: 全ての文字列
-   `boolean`: true または false

## 型推論

なぜ変数には型を指定しないのか?? => 型推論の機能があるから。  
Object も基本型推論に任せてあえて書かない。

### タプル型

push では型定義できない、値の直接代入には対応可能

### Enum 型

変数の集合に対して名前をつけることができる(列挙型)  
複数の定数が必要になった場合に使用すると便利

### Any 型

どんな値を入れてもエラーにならない

[TypeScript Deep Dive 日本語版](https://typescript-jp.gitbook.io/deep-dive/type-system)
