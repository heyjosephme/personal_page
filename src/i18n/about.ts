import type { Locale } from "./config";
export const aboutSections: Record<
	Locale,
	{ title: string; badge: string; text: string }[]
> = {
	en: [
		{
			title: "Background",
			badge: "Journey",
			text: "Originally from China, now based in Tokyo, Japan. While studying Computer Science in college, I spent most of my time self-learning programming rather than following traditional coursework.",
		},
		{
			title: "Technical Focus",
			badge: "Skills",
			text: "Freelance forward deployed engineer and full-stack developer specializing in Ruby and TypeScript. Experienced in Ruby on Rails with Hotwire, React, and React Native.",
		},
		{
			title: "Current Chapter",
			badge: "Now",
			text: "Currently working on indie projects. Building in public and sharing the journey with fellow creators.",
		},
		{
			title: "Beyond Code",
			badge: "Life",
			text: "When I'm not coding, you'll find me enjoying manga, anime, and novels, or exploring historical narratives. I value meaningful conversations with others, whether about technology, history, or life in general.",
		},
	],
	ja: [
		{
			title: "これまで",
			badge: "歩み",
			text: "中国出身で、現在は東京を拠点にしています。大学ではコンピューターサイエンスを学びながら、授業の枠にとらわれず、プログラミングの独学に多くの時間を費やしていました。",
		},
		{
			title: "技術分野",
			badge: "スキル",
			text: "RubyとTypeScriptを中心に活動するフリーランスのフォワードデプロイドエンジニア・フルスタック開発者です。Ruby on RailsとHotwire、React、React Nativeを使った開発に取り組んでいます。",
		},
		{
			title: "いま取り組んでいること",
			badge: "近況",
			text: "個人プロジェクトを開発しています。開発の過程を公開し、同じようにものづくりをする仲間と学びを共有しています。",
		},
		{
			title: "コードの外で",
			badge: "日常",
			text: "開発以外では、漫画、アニメ、小説を楽しんだり、歴史について読んだりしています。技術や歴史、日々の暮らしについて、じっくり話す時間を大切にしています。",
		},
	],
	"zh-cn": [
		{
			title: "我的经历",
			badge: "旅程",
			text: "来自中国，现居日本东京。大学期间学习计算机科学，相比按部就班地完成课程，我把更多时间花在了自学编程上。",
		},
		{
			title: "技术方向",
			badge: "技能",
			text: "我是一名自由职业前沿部署工程师与全栈开发者，专注于 Ruby 和 TypeScript 生态，使用 Ruby on Rails、Hotwire、React 和 React Native 构建应用。",
		},
		{
			title: "当前阶段",
			badge: "近况",
			text: "目前在做独立开发项目，公开分享开发过程，与其他创作者交流经验和心得。",
		},
		{
			title: "代码之外",
			badge: "生活",
			text: "不写代码的时候，我喜欢看漫画、动画、小说，也喜欢了解历史。无论是技术、历史还是日常生活，我都珍惜与他人深入交流的机会。",
		},
	],
};
