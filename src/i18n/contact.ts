import type { Locale } from "./config";
export const contactText: Record<
	Locale,
	Record<
		| "description"
		| "heading"
		| "intro"
		| "welcome"
		| "sendHeading"
		| "name"
		| "namePlaceholder"
		| "message"
		| "messagePlaceholder"
		| "success"
		| "error"
		| "send"
		| "sending"
		| "other"
		| "responseLabel"
		| "response",
		string
	>
> = {
	en: {
		description:
			"Get in touch with me for collaborations, projects, or just to say hello.",
		heading: "Get in Touch",
		intro:
			"Have a project in mind? Want to collaborate? Or just want to say hello?",
		welcome: "I'd love to hear from you.",
		sendHeading: "Send a Message",
		name: "Name",
		namePlaceholder: "Your name",
		message: "Message",
		messagePlaceholder: "Tell me about your project or idea...",
		success: "Message sent successfully! I'll get back to you soon.",
		error: "Something went wrong. Please try again or email me directly.",
		send: "Send Message",
		sending: "Sending...",
		other: "Other Ways to Connect",
		responseLabel: "Response Time:",
		response:
			"I typically respond within 24-48 hours. For urgent matters, email is the fastest way to reach me.",
	},
	ja: {
		description:
			"共同開発やプロジェクトのご相談、ご挨拶など、お気軽にご連絡ください。",
		heading: "お問い合わせ",
		intro: "プロジェクトのご相談、共同開発のお誘い、ご挨拶など。",
		welcome: "ご連絡をお待ちしています。",
		sendHeading: "メッセージを送る",
		name: "お名前",
		namePlaceholder: "お名前",
		message: "メッセージ",
		messagePlaceholder: "プロジェクトやアイデアをお聞かせください…",
		success: "送信しました。折り返しご連絡します。",
		error:
			"送信できませんでした。再度お試しいただくか、メールでご連絡ください。",
		send: "送信",
		sending: "送信中…",
		other: "その他の連絡方法",
		responseLabel: "返信について：",
		response:
			"通常24〜48時間以内に返信します。お急ぎの場合はメールでご連絡ください。",
	},
	"zh-cn": {
		description: "欢迎联系我，聊聊合作、项目，或者打个招呼。",
		heading: "联系我",
		intro: "有项目想法？想一起合作？或者只是打个招呼？",
		welcome: "期待收到你的消息。",
		sendHeading: "发送消息",
		name: "姓名",
		namePlaceholder: "你的姓名",
		message: "消息",
		messagePlaceholder: "说说你的项目或想法…",
		success: "消息已发送！我会尽快回复。",
		error: "发送失败，请重试或直接给我发邮件。",
		send: "发送消息",
		sending: "正在发送…",
		other: "其他联系方式",
		responseLabel: "回复时间：",
		response: "通常会在 24–48 小时内回复。如有急事，请直接发邮件。",
	},
};
