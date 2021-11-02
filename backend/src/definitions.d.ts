interface ApiContext{
	account:{
		id: number
		lightfunnelsToken: string
	}
	loaders: import('./api/loaders').Loaders
}



declare namespace NodeJS {
  export type ProcessEnv = {
  	NodeEnv: "production"|"development"
  	AppSecret: string
		LightfunnelsAppKey: string
		LightfunnelsAppSecret: string
		AppURL: string
		LightfunnelsUrl: string
		LightfunnelsFrontUrl: string
		DbHost: string
		DbUser: string
		DbName: string
		DbPass: string
		ShopifyClientID: string
		ShopifyClientSecret: string
  }
}