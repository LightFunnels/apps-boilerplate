// this file will contains links to helpcenter/youtube etc ...

export const Links = {
	learn: {
	  products: 'https://docs.lightfunnels.com/tag/products/',
	  funnels: 'https://docs.lightfunnels.com/tag/funnels/',
	  paymentGateways: 'https://docs.lightfunnels.com/payment-gateways/',

	  importProducts: 'https://docs.lightfunnels.com/importing-a-product/',

	  syncOrders: 'https://docs.lightfunnels.com/order-fulfillment/',
	  exportOrders: 'https://docs.lightfunnels.com/order-fulfillment/',

	  googleAnalytics: 'https://docs.lightfunnels.com/tracking/#google-analytics',
	  fbPixels: 'https://docs.lightfunnels.com/tracking/#facebook-pixel',

	  paypalExpress: 'https://www.paypal.com/mu/webapps/mpp/express-checkout',
	  stripe: 'https://stripe.com/',

	  billingAndPlans: 'https://docs.lightfunnels.com/billing/',
	  proPlan: 'https://lightfunnels.com/pricing',

	  domains: 'https://docs.lightfunnels.com/domains/',
	  stepByStepVerification: 'https://docs.lightfunnels.com/domains/#setting-up-your-root-domain-eg-yourwebsitecom',

	  cancellingOrder: 'https://docs.lightfunnels.com/canceling-an-order/',
	},
	seeFeatures: 'https://lightfunnels.com/pricing',
	videos: {
		getStarted: 'https://www.youtube.com/embed/hzv5EcOvZrU',
		addProduct: 'https://www.youtube.com/embed/ypQZV03l80g',
		addFunnel: 'https://www.youtube.com/embed/ypQZV03l80g',
		addPaymentGateway: 'https://www.youtube.com/embed/ypQZV03l80g',
	},
	integrations: [
		{
			link: 'https://zapier.com/developer/public-invite/138053/2ae7080130f99d6aa7e8e8a01aa44cd1/',
			openLink: 'https://zapier.com',
		},
		{
			openLink: 'https://shopify.com',
		},
	],
	fbGroup: 'https://group.lightfunnels.com/',
	helpCenter: 'https://www.notion.so/lfunnels/Help-Center-8946c1c9b9574d25b7ec430fcf1134a9',
	youtube: '',
}

export type LinksType = typeof Links;
