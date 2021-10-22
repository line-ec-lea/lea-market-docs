---
title: 商品設定
description: '商品設定'
position: 3
category: 設定
features:
---

## カテゴリー追加

1. 「商品」→「カテゴリー一覧」に移動する。
2. 右上の「カテゴリー追加」ボタンを押す。
3. 情報を入力し、保存する。

### 概要

#### 名前
- 必須
- 2~20文字の間で入力してください。

#### 親カテゴリー
- 任意

#### 並び順
- 任意
- 半角数字で1~100の間で入力してください。


## 商品追加

1. 「商品」→「商品一覧」に移動する。
2. 右上の「商品追加」ボタンを押す。
3. 情報を入力し、保存する。

### 概要

#### 画像
- 必須
- 最低でも1枚は設定してください。
- 最大10枚まで設定できます。
- 推奨サイズは600px × 600pxです。
- 画像は正方形にトリミングされます。

#### 公開状況
- 必須


#### カテゴリー
- 必須
- <alert type="danger">
    カテゴリーがない場合は作成できないため、最低でも1つカテゴリーを選択してください。
    <br />
    <a href="http://localhost:3000/setup-product#%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA%E3%83%BC%E8%BF%BD%E5%8A%A0">カテゴリー追加</a>
  </alert>

#### 名前
- 必須
- 2~30文字の間で入力してください。

#### 短い説明
- 任意
- 商品の簡単な説明を記載することができます。
- 2~50文字の間で入力してください。

#### 長い説明
- 任意
- 商品の詳細な説明を記載することができます。
- 10~1000文字の間で入力してください。

#### オプション
- 任意
- 最大5個まで追加できます。
- 項目
  - 必須選択
  - オプションの複数選択
  - オプションタイトル
    - 必須
    - 2~20文字の間で入力してください。
  - オプション内容
    - 名前
      - 必須
      - 2~20文字の間で入力してください。
    - 追加料金
      - 必須
      - 0~10万円の間で入力してください。

#### 並び順
- 任意
- 半角数字で1~100の間で入力してください。

#### 在庫
- 必須
- 半角数字で0~10000個の間で入力してください。

#### 料金
- 必須
- 税込価格でお願いします。
- すべて税込表示になります。
- 50~100万円の間で入力してください。

#### 送料の単位
- 任意
- 送料の単位は好きに設定が可能です。
  - 「設定」→「配送設定」→「単位」で変更が可能です。
- 0~1000000の間で入力してください。