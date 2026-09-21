---
title: "使っているもの"
lang: ja
translationKey: uses
lastUpdated: 2026-07-01T00:00:00Z
description: "開発に使っているツール、ソフトウェア、ハードウェア。"
---
# 使っているもの
日々の仕事を支えるツール、ソフトウェア、ハードウェアの記録です。

## 💻 エディターとターミナル
**Claude Code（メイン）**
- コード生成とリファクタリングに使うAI搭載CLI
- 生成コードの確認と調整にはLazyVimを併用

**Neovim + LazyVim（レビューと編集）**
- LazyVimで標準設定とプラグインを管理
- AI生成コードのレビュー、ちょっとした編集、リモート作業に使用

**ターミナル**
- Ghostty（GPUアクセラレーション対応）
- Zsh + Oh My Zsh
- セッション管理にtmux

## 🛠️ 開発ツール
**バージョン管理**
- Git + GitHub（Web画面より`gh` CLIを使用）
- コマンドライン中心の作業

**API開発**
- 複雑なAPIテストにはPostman
- 手軽なCLIリクエストにはHTTPie

**コンテナーとデプロイ**
- Docker + Colima（軽量なDockerランタイム）
- RailsのデプロイにはKamal
- このサイトにはCloudflare Workers

**データベース**
- 多くのプロジェクトでSQLite3
- 基本的にCLIで操作（GUIツールは使いません）

## 🖥️ ハードウェア
**メインマシン**
- MacBook Air/Pro（個人用・仕事用）
- ノートPCだけのミニマルな構成

特別な周辺機器や大がかりなデスク環境は使わず、シンプルで持ち運びやすくしています。

## 📝 生産性
**メモ（よく使う順）**
- Obsidian → Markdownファイル → Notion → Apple Notes
- プレーンテキストと持ち運びやすさを重視

**タスク管理**
- 個人のタスクには`todo.md`
- コードに関する作業にはGitHub Issues
- 共同作業にはGitHub ProjectsとNotion

**コミュニケーション**
- 仕事にはSlack
- 開発者コミュニティにはDiscord

**ブラウザー**
- プライバシー重視でBraveをメインに使用
- 予備にFirefox

## 🌐 このサイト
**技術構成**
- フレームワーク：Astro 7（Cloudflare WorkersでSSR）
- UI：React 19 + TailwindCSS 4
- コンポーネント：shadcn/ui
- スタイル：Tailwindと独自のデザインシステム
- アイコン：Lucide React + Remix Icons
- アニメーション：Framer Motion
- リント：Biome
- デプロイ：Cloudflare Workersと静的アセット

**コンテンツ**
- フロントマター付きMarkdown
- 型安全なコンテンツコレクション
- 読了時間の計算

---
世界中の開発者の`/uses`ページを集めた[uses.tech](https://uses.tech/)に着想を得ています。
