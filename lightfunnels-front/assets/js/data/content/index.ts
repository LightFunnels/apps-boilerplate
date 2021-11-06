
export const Content = {
	pages: {
		acceptInvite: {
			back: 'Back to dashboard',
			title: 'You are invited to',
			text1: 'has invited you to',
			text2: 'as a member. Accept the invitation to join to the account.',
			decline: "Decline invitation",
			accept: "Accept invitation",
		},
		noPermission: {
			title: 'You don’t have access to this page',
			text: 'You may not have access to this page. Contact the account admin to get access to this page.',
			back: 'Go back',
		},
		profile: {
			title: 'My Profile',
			back: 'Back to dashboard',
			save: 'Save',
			cancel: 'Cancel',
			personal: {
				title: 'Personal information',
				firstName: 'First Name',
				firstPlaceholder: 'Enter your first name',
				lastName: 'Last Name',
				lastPlaceholder: 'Enter your last name',
				phone: 'Phone',
				phonePlaceholder: 'Enter your phone',
				updateImg: 'Update Image',
				deleteImg: 'Delete Image',
				not: 'Notifications',
				notDesc: "We periodically send out important news and updates about Lightfunnels to our users via email. We promise we won't fill-up your inbox.",
				allow: "Allow notifications to be sent to your email",
				email: 'Enter email address',
				changeEmail: 'Change email address',
				pwd: 'Enter password',
				changePwd: 'Change the password you use to login to your account.',
				setPwd: "Set Password",
				reset: "Reset Password",
			},
			accounts: {
				title: 'Accounts',
				add: 'Add Account',
				description: 'These are the accounts that you manage.',
				leave: 'Leave Account',
				cant: "You can't leave this account,",
				cant2: 'The account has only one administrator.',
				cannot: 'You may not leave',
				leaveText1: 'Are you sure you want to leave',
				leaveText2: 'By leaving the account you will no longer have access to it.',
				cancel: 'Cancel',
			},
			resetPwd: {
				title: 'Set Password',
				titleReset: 'Reset Password',
				act: 'Actual Password',
				new: 'New Password',
				conf: 'Confirm New Password',
				cancel: 'Cancel',
				changed: 'Password was successfully changed.',
			},
			changeEmail: {
				title: 'Change Email',
				new: "New address",
				placeholder: "Enter your new email address",
				changed: "We have sent you an email to confirm your new address:",
				cancel: 'Cancel',
			}
		},
		create: {
			title: 'Create Account',
			text: 'You can create more than one account using the same email address.',
			created: 'Account created',
			cancel: 'Cancel',
			form: {
				name: 'Account Name',
				namePlaceholder: 'Enter account name',
				button: 'Create Account',
			}
		},
		home: {
			lastthrity: 'Last 30 days',
			dismiss: 'Dismiss',
			view: 'View Summary',
			getStarted: {
				title: 'Get started',
				text: 'Let’s get you set up. Follow these steps below to get started.',
				steps: [
					{
            name: 'Add product',
            displayName: 'Add your first product',
            description: 'To get started, create or import a product.',
            buttonText: 'Add product',
            helpText: 'Learn more about Products',
          },
          {
            name: 'Create funnel',
            displayName: 'Create your first funnel',
            description: 'Build a funnel to turn visitors into buyers and sell more products.',
            buttonText: 'Create funnel',
            helpText: 'Learn more about Funnels',
          },
          {
            name: 'Add custom domain',
            displayName: 'Add custom domain',
            description: 'Adding a custom domain will make your domain look professional and more trustworthy.',
            buttonText: 'Add domain',
            helpText: 'Learn more about Domains',
          },
          {
            name: 'Add payment gateway',
            displayName: 'Add payment gateway',
            description: "Accept your customers' chosen payment methods by integrating a payment gateway.",
            buttonText: 'Add payment',
            helpText: 'Learn more about Payment Gateways',
          },
				]
			},
			totalConversions: {
        titleUp: 'TODAY\'S SALES',
        title: 'TOTAL SALES',
        orders: 'Orders',
        leads: 'Leads',
        button: 'View Report'
      },
			totalVisitors: {
        titleUp: 'TODAY\'S VISITS',
        title: 'TOTAL VISITS',
        live: 'Live',
        visitors: 'Visitors',
        button: 'Live View'
      },
      totalLeads: {
        title: 'TOTAL LEADS',
      },
			tutorial: {
        title: 'Get Started With Lightfunnels',
        textTop: 'Welcome! 👏',
        textBottom: "To make sure you get the most out of your Lightfunnels experience, we created this helpful video.",
        coverImage: 'Btn-Play.svg',
        // video: 'https://www.youtube.com/embed/hzv5EcOvZrU',
      },
      leads: {
        title: 'Top Leads Steps',
        nameHeader: 'Name',
        countHeader: 'Number of leads',
        emptyText: "There are no leads this moment, Your top leads steps will appear here.",
      },
      funnels: {
        title: 'Top Selling Funnels',
        funnelsHeader: 'Funnels',
        revenueHeader: 'Revenue',
        emptyText: "There are no funnels ranked at this moment, Your top selling funnels will appear here.",
      },
			products: {
        title: 'Top Selling Products',
        productsHeader: 'Products',
        priceHeader: 'Price',
        revenueHeader: 'Revenue',
        emptyText: "There are no products ranked at this moment, Your top selling products will appear here.",
      },
			countries: {
        title: 'Top Buying Countries',
        emptyText: "There are no countries ranked at this moment, Your top buying countries will appear here.",
      },
      trafficSources: {
        title: 'Top Traffic Sources',
        emptyText: "There are no traffic sources ranked at this moment, Your top traffic sources will appear here.",
      },
			statsCard: {
        selectFunnel: 'Select funnel:',
        selectDate: 'Select date:',
        salesLabel: 'Sales',
        salesValue: 'sales',
        leadsLabel: 'Leads',
        leadsValue: 'leads',
        conversionRate: 'CONVERSION RATE',
        purchased: 'Purchased',
        reachCheckout: 'Reached Checkout',
        checkout: 'Checkout',
        // addCard: 'Add to cart',
        leads: 'Leads',
        emptySales: 'There are no sales for date range selected',
				emptyVisitors: 'There are no visits for date range selected',
      }
		},
		funnels: {
			title: 'Funnels',
			button: 'New funnel',
			prevNotice: 'In order to preview the funnel, you must first publish it.',
			delete: {
        title: 'Delete Funnels',
        text: 'Are you sure you want to delete this funnel? Deleted funnels cannot be recovered.',
      },
			upgradeFunnels: {
				firstHalf: 'Basic plan users can have up to',
				secondHalf: 'Funnels. Upgrade your plan to get more.',
			},
			builder: {
				missing: {
					title: 'Missing payment methods',
					text: 'Selected payment methods are not yet enabled. Please',
					button: 'Enable payment methods',
				},
				navbar: {
          preview: 'Preview',
          prevNotice1: 'In order to preview the funnel,',
          prevNotice2: 'you must first publish it.',
          save: 'Save',
          published: 'Published',
          unpublished: 'Unpublished',
        },
				// below is the onboarding content 👇🏻
				help: {
					dropdown: {
						reset: "Reset onboarding",
						hc: "Help Center",
						fb: "Join Facebook group",
						contact: "Contact support",
					},
					steps: [
						{
							title1: 'Welcome to our funnel builder',
							title2: `We’re glad you’re here.`,
							text: 'Take our guided tour to learn how it works.',
							skip: "Skip",
							takeTour: "Take Tour",
						},
						{
							title: "Well done 🎉",
							text: 'Congratulation! You just finished the guided tour.',
							restart: "Restart",
							finish: "Finish",
							helpfulLinks: 'Some helpful links:',
							visitHC: 'Visit our help center',
							youtube: 'Youtube tutorial videos',
							fb: 'Visit our Facebook group',
						},
					],
					tour: [
						// ------ Funnel builder
						{
							title:'Add step',
					    text: "A step can be a product page, checkout, thank you page, split test and more.",
						},
				    {
							title:'Product page step',
							text: "To sell a product you need a product step in your funnel, this is where you showcase its images, price, variants and anything else that's related to the product.",
				    },
						{
							title:'Select product',
							text: "Add your first product to the product step and you can link its data automatically.",
						},
						{
							title:'Step links',
							text: "Links inside steps can lead to other steps in the funnel. You can also see the Click Through Rate (CTR) of each link.",
						},
						{
							title:'Step actions',
							text: "View, duplicate, edit and manage the settings of the funnel step.",
						},
						{
							title:'Open page builder',
							text: "Editing a step will open the page builder, so you can add text, images, videos and many more elements.",
						},
						{
							title:'Publish your funnel',
							text: "Publishing your funnel will make it available to your customers and to the world.",
						},
						{
							title: 'Preview funnel',
							text: "You can always preview the changes you make in your funnel, keep in mind that you'll need to publish it first.",
						},
						// ------ Page builder
						{
							title:'Add elements',
							text: "It can be text, media, form, layout or checkout elements. Elements are what make up a funnel's step.",
						},
						{
							title:'Edit element',
							text: "Change element's options to make sure it fits your funnel style and brand guidelines.",
						},
						{
							title:'View layers',
							text: "Layers view keeps you organized and shows you a high level view of your page structure.",
						},
						{
							title:"Funnel styles",
							text: "Colors, fonts, text sizes are some of the styles you can set and save for quick use across the whole funnel.",
						},
						{
							title:"Devices preview",
							text: "You can preview your page in different devices and screen sizes to make sure everything looks good and responsive.",
						},
					],
					resetOnboarding: 'Reset onboarding',
					helpCenter: 'Help center',
					fbGroup: 'Join Facebook group',
					contact: 'Contact support',
				},
				error: 'Something went wrong!',
				settings: {
					title: 'Funnel Settings',
					general: {
            title: 'GENERAL',
            form: {
              name: 'Funnel name',
              namePlaceholder: 'Enter the funnel name',
              slug: 'Slug',
              slugPlaceholder: 'Enter the slug',
              favicon: 'Favicon',
              defLang: "Default language",
            },
          },
          record: {
            enable: "Enable page recording",
            notice: 'Understand how your visitors are interacting with your funnels by rewatching recordings of their jouney. Coming soon!',
          },
					tracking: {
            title: 'TRACKING',
            form: {
              ga: 'Google Analytics',
              enableGA: "Enable Google Analytics in this funnel",
              fb: "Facebook Pixels",
              fbSelect: "Select your pixel:",
              tiktok: "TikTok Pixels",
              snap: "Snapchat Pixels",
            }
          },
          pms: {
            title: 'PAYMENT METHODS',
            form: {
              pm: "Payment Methods",
              select: "Select payment methods:",
              alertPart1: 'The selected payment method is not enabled, Please manage your',
              alertPart1Many: 'The selected payment methods are not enabled, Please manage your',
              alertPart2: "payment methods",
              alert2Part1: 'Manage your',
            }
          },
					global: {
            title: 'GENERIC PAGES',
            empty: 'This funnel doesn\'t contain generic pages.',
            new: "New page",
            form: {
              title: 'Generic page',
              name: "Page name",
              slug: "Page slug",
              template: "Page template",
              cancel: "Cancel",
              save: "Save",
            },
            delete: {
              title: 'Delete page',
              text: 'Are you sure you want to delete this node? Deleted nodes cannot be recovered.',
              cancel: "Cancel",
              delete: "Delete",
            }
          }
				},
				styles: {
          title: 'Funnel Styles',
          styles: 'Styles',
          editStyle: 'Edit style',
          save: 'Save',
          cancel: 'Cancel',
          noTitle: '(No title)',
          addStyle: 'Add style',
          add: 'ADD STYLE',
          name: 'Style name',
          type: 'Style type',
          namePlaceholder: 'Enter style name',
          addBtn: 'Add',
          styleName: 'Style name',
          stylesArr: [
            'Color',
            'Font Family',
            'Font Size',
            'Font Weight',
            'Line Height',
            'Letter Spacing'
          ]
        },
				canvas: {
          unlink: 'Unlink Page',
          starting: 'Starting Page',
          dateStats: 'Date Stats',
          deleteStep: {
            title: 'Delete Page',
            text: 'Are you sure you want to delete this page? This action cannot be undone.',
            cancel: 'Cancel',
            delete: 'Delete',
          },
          deleteLink: {
            title: 'Delete Link',
            text: 'Are you sure you want to delete this link? This action cannot be undone.',
            cancel: 'Cancel',
            delete: 'Delete',
          },
          emptyState: {
            title: 'No Pages!',
            text: 'Use the button below to create the first page of the funnel.',
          },
          upgradeText: 'Basic plan users can have up to #max pages. Upgrade your plan to create more pages.'
        },
			},
			new: {
				cancelButton: 'Cancel',
				nextButton: 'Next',
				back: 'Back to Dashboard',
				backButton: 'Back',
				createButton: 'Create My Funnel',
				openButton: 'Open The Funnel',
				step: 'Page',
				stepsFlow: [
					'Product page',
					'Squeeze page',
					'Checkout',
					'Thank you',
					'Upsell',
					'Downsell'
				],
				oneStep: 'You should have at least one item selected.',
        step1Check: 'Obtain contact info of visitors who have shown interest in your product,',
        step2Check: 'Sell your products and turn visitors into customers.',
        step3Check: 'Offer customers an upgrade or enhancement to their purchase.',
        step4Check: 'Offer a less expensive product when customers are hesitant to make a purchase.',
				preview: 'Preview',
				loadingTemplates: 'Loading templates...',
				selectTheme: 'Select this theme',
				// step1: {
				// 	title: "What's your objective?",
				// 	text: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been',
				// },
				// step2: {
				// 	title: "What's your objective?",
				// 	text: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been',
				// },
				step3: {
          title: "Select funnel pages",
          text: 'Your funnel is the sales path your prospects will take. It will include pages to warm your visitors, collect leads, sell products or offer up sells or down sells.',
          inclusions: [
            'Collect Leads',
            'Sell Product',
            'Include Upsell',
            'Include Downsell',
          ],
          inclusionPopup: 'You need to have a checkout page to be able to sell a product.',
        },
				step4: {
          title: "Choose your template",
          text: 'This is the template for your funnel. Change the style to suit your product and include clear titles and descriptions to improve your conversion rate.',
        },
				step5: {
          title: "You're all set",
          text: 'Name to your funnel.',
          funnelNameLabel: 'Funnel name',
          funnelURLLabel: 'Funnel url',
        },
			},
			selectedLabel: 'Funnel',
			list: {
				edit: 'Edit',
        duplicate: 'Duplicate',
				delete: 'Delete',
				set: 'Set as default funnel',
				setNotice1: 'Customers will be redirected to this funnel',
				setNotice2: 'when they visit your primary domain.',
				cols: [
					{
						name: 'Name',
						sorts: ["Name (A-Z)", "Name (Z-A)"]
					},
					{
						name: 'Slug',
						sorts: ["Slug (A-Z)", "Slug (Z-A)"]
					},
					{
						name: 'Publish Status',
						sorts: ["Published", "Unpublished"]
					},
					{
						name: 'Creation Date',
						sorts: ["Oldest (A-Z)", "Newest (Z-A)"]
					},
					{
						name: 'Actions',
					}
				],
				filters: [
					{
						title: "Publish Status",
						items: ['Published', 'Unpublished'],
					},
				]
			},
			emptyState: {
        title: 'Build your first funnel',
        text: 'Create beautiful funnels and convert visitors into leads and customers.',
      }
		},
    pageBuilder: {
      settings: {
        title: 'Page Settings',
        details: 'Details',
        seo: 'SEO',
        html: 'Custom HTML',
        slug: 'Slug',
        titleForm: 'Title',
        type: 'Type',
        hint: 'Cannot change main step type in automated funnel',
        pagesProd: "Page's Product",
        titleForm2: "Title",
        desc: "Description",
        keys: "Keywords",
        headerScripts: "Header Scripts",
        footerScript: "Footer Scripts",
      },

    },
		products: {
			title: 'Products',
			exportButton: 'Export',
			importButton: 'Import',
			newButton: 'New Product',
			selectedLabel: 'Product',
			delete: {
        title: 'Delete Products',
        text: 'Are you sure you want to delete the product(s)? Deleted products cannot be restored.',
        deleted: "Product(s) deleted",
      },
			upgradeProducts: {
				firstHalf: 'Basic plan users can have up to',
				secondHalf: 'Products. Upgrade your plan to get more.',
			},
			new: {
				title: 'New Product',
				importURL: 'Import product from URL',
				cancelButton: 'Cancel',
				saveButton: 'Save',
				duplicate: 'Duplicate',
				delete: 'Delete Product',
				addRev: 'Add Review',
				importRev: 'Import Review',
				openBuilder: 'Edit in Builder',
				viewProd: 'View Product',
        editFun: 'Customize Theme',
				upsellAction: "Your #promoType product was #action, you'll be redirected back to the main product#todo.",
				leavePrompt: 'Are you sure you want to leave?',
				viewProdModal: {
					titlePreparing: 'Preparing your funnel',
					textPreparing: 'A funnel is being created for this product. This will take a few seconds…',
					titleReady: 'Your funnel is ready',
					btnReady: 'View your product',

					missingTitle: 'No Theme Selected',
					missingText: 'Please select a theme to be able to sell products directly from your product page',
					select: 'Select Theme',
					// selComp: "Select a global funnel",

					selectDefTitle: "Select default product funnel theme",
					selectDefText: "Here will be the description, Try to make it short and simple for the user.",
					cancel: 'Cancel',
					selectBtn: "Select Theme",
				},
				countdown: {
          title: "Countdown Timer",
          evergreen: "Evergreen timer",
          time: "Time (minutes)",
          due: "Due date",
          empty: "Enable a countdown timer if the product has a limited offer.",
        },
        sticky: {
          title: "Sticky Buy Button",
          empty: "Maintain visibility of your buy button  even if the customer scrolls to the bottom of your product page.",
          notEmpty: "Sticky buy button is enabled. Your customer now will see your sticky buy button when they scroll to the buttom.",
          btn: 'Edit in page builder',
        },
        prodfunnelSet: {
					title: 'Product Page',
      		create: 'Create a Custom Product Page',
					description: 'Currently using the product page from the default funnel.',
        },
        checkfunnelSet: {
      		create: 'Create a Custom Checkout Page',
        	title: 'Checkout Page',
					description: 'Currently using the checkout page from the default funnel.',
        },
        thanksSet: {
        	title: 'Thank You Page',
      		create: 'Create a Custom Thank You Page',
					description: 'A thank you page loads after customers buy your products.',
        },
        funnelSet: {
          title: 'Funnel Settings',
          upsell: 'Upsell',
          downsell: 'Downsell',
          add: 'Add product',
          addUpsell: 'Add An Upsell Product',
          addDownsell: 'Add A Downsell Product',
          addUpsellText: 'Select an existing product that you want to add as an upsell product or create a new product.',
          addDownsellText: 'Select an existing product that you want to add as an downsell product or create a new product.',
          selectProd: 'Select product',
          or: 'Or',
          create: 'Create New Product',
          cancel: 'Cancel',
          addBtn: 'Add Product',
          addFirst: 'Add an upsell product first',
          cannotAddSame: "You cannot add #type that's also the main product.",
        },
				info: {
          titleLabel: 'Title',
          titlePlaceholder: 'Enter product title.',
          descriptionLabel: 'Description',
          noticeLabel: 'Special offer',
          noticePlaceholder: 'Enter offer',
          noticeDesc: 'Tell your customers about an offer that you are currently running. The text will typically appear under the product title and above the variant selector.'
        },
				type: {
          title: 'Product Type',
          uploadLabel: 'Upload file',
          options: [
            'Physical product',
            'Digital product',
          ]
        },
				pricing: {
					title: 'Product Price',
					priceLabel: 'Price',
					compPriceLabel: 'Compare at price',
				},
				tags: {
					title: 'Tags',
					addTags: 'Add tags',
				},
				images: {
					title: 'Images',
					buttonText: 'Add image',
				},
				variants: {
          title: 'Variants',
          addButtonText: 'Add Option',
          addNewButtonText: 'Add New Option',
          emptyText: 'Add variants if this product comes in multiple versions, for example different sizes or colors.',
          optionNameLabel: 'Option name',
          optionValuesLabel: 'Option values',
          editPrice: 'Edit price',
          addImage: 'Add image',
          delete: 'Delete',
          changeVariantPrice: {
            title: 'Change Variant Price',
            price: 'Price',
            comparePrice: 'Compare at Price',
            cancel: 'Cancel',
            confirm: 'Confirm',
          }
        },
				orderBump: {
          title: 'Order Bump',
          titleLabel: 'Title',
          skuLabel: 'SKU',
          priceLabel: 'Price',
          comparePriceLabel: 'Compare at price',
          imageLabel: 'Image (optional)',
          fileLabel: 'File',
          descriptionLabel: 'Description',
          emptyText: 'Add an order bump to your product to boost sales.',
          popupTextEn: 'The Order Bump is now enabled and will appear on the checkout page.',
          popupTextDis: 'The Order Bump is now disabled and will not appear on the checkout page.',
        },
				features: {
          title: 'Features',
          cardTitle: 'Feature',
          titleLabel: 'Title',
          buttonText: 'Add Feature',
          imageLabel: 'Image (optional)',
          descriptionLabel: 'Description',
          emptyText: 'Create product features to showcase the product page on your funnels.',
        },
				testimonials: {
          title: 'Testimonials',
          cardTitle: 'Testimonial',
          buttonText: 'Add Testimonial',
          nameLabel: 'Name',
          positionLabel: 'Position',
          imageLabel: 'Image (optional)',
          descriptionLabel: 'Description',
          emptyText: 'Add testimonials to increase the customer\'s trust of your product.',
        },
				faq: {
          title: 'FAQ',
          buttonText: 'Add FAQ',
          questionLabel: 'Question',
          answerLabel: 'Answer',
          emptyText: 'Add FAQs to make sure your customers have answers to their frequently asked questions',
        },
				reviews: {
          title: 'Reviews',
          viewAll: 'View All'
        },
			},
			modals: {
        addVariant: {
          title: 'Add Variant Image',
          upload: 'Upload Image',
          // cancel: 'Cancel',
          close: 'Select',
          noImages: {
            title: 'No images yet.',
            text: 'You don’t have any variant images yet. Click the button below or drop in an image here to use it.',
            button: 'Upload Image'
          }
        },
      },
			list: {
        edit: 'Edit',
        delete: 'Delete',
        cols: [
          {
            name: 'Product',
            sorts: ["Product (A-Z)", "Product (Z-A)"]
          },
          {
            name: 'Created At',
            sorts: ["Oldest", "Newest"]
          },
          {
            name: 'Price',
            sorts: ["Cheapest", "Expensive"]
          },
          {
            name: 'Actions',
          }
        ],
        filters: [
          {
            title: "Creation Date",
            items: ['Last week', 'Last month', 'Last month', 'Last 3 months', 'Last Year'],
          },
        ]
      },
			import: {
        title: 'Import Product',
        description: 'To see an example of the required file format, download a ',
        sample: 'sample CSV template.',
        uploadFile: 'Upload file',
        or: 'Or',
        importDesc: 'Import products from AliExpress or Shopify stores to sell them using Lightfunnels.',
        fromURL: 'Product URL',
        fromURLPlaceholder: 'https://',
        helpText: 'You need any ',
        help: 'help?',
        cancel: 'Cancel',
        close: 'Close',
        import: 'Import',
        errorLabel: 'Fields Error',
        errorMessage: 'You have some errors in the fields, you can re-upload after fixing them.',
        errorContent: 'Please fix the following errors:',
        importDone: 'Import is Done',
        analyzing: 'Analyzing File',
        importing: 'Importing product...',
        imported: 'Product imported successfully',
      },
			importRevs: {
        title: 'Import reviews',
        description: 'The product you just imported has reviews attached to it, Do you want to import its reviews?',
        skip: 'No, skip',
        yes: 'Yes, import reviews',
      },
			export: {
        exportee: 'Products',
        description: 'Export your products information into a CSV file sent to your email.',
      },
      emptyState: {
        title: 'Add your first product',
        text: 'Create or import your product and manage it.',
      },
		},
		reviews: {
			title: 'Reviews',
      importButton: 'Import from AliExpress',
      newButton: 'New Review',
      selectedLabel: 'Review',
      readMore: 'Read More',
      delete: {
        title: 'Delete Reviews',
        text: 'Are you sure you want to delete these reviews? This action cannot be undone.',
      },
			new: {
				title: 'Review',
        name: 'Reviewer Name',
        namePlaceholder: 'Enter reviewer name',
        email: 'Reviewer Email',
        emailPlaceholder: 'Enter reviewer email',
        text: 'Review Text',
        textPlaceholder: 'Enter review text',
        images: 'Images',
        datePosted: 'Date Posted',
        rate: 'Rate',
        add: 'Add',
        update: 'Update',
        cancel: 'Cancel',
        delete: 'Delete Review',
			},
			list: {
				cols: [
          {
            name: 'Product',
          },
          {
            name: 'Reviewer',
          },
          {
            name: 'Content',
          },
          {
            name: 'Date',
            sorts: ["Oldest", "Newest"]
          },
          {
            name: 'Rate',
            sorts: ["Highest", "Lowest"]
          },
        ],
			},
			import: {
				title: 'Import AliExpress Reviews',
        description: 'Select the product for which you want to import the reviews.',
        fromURL: 'Import reviews from URL',
        select: 'Select Product',
        fromURLPlaceholder: 'https://',
        helpText: 'You need any ',
        help: 'help?',
        cancel: 'Cancel',
        import: 'Import',
        onlyImages: 'Only with images',
        onlyFive: 'Only with 5 stars',
        translate: 'Translate reviews to English',
        generate: 'Generate random names',
        reviews: 'Reviews',
        notFound: 'No Reviews Found!',
        notFoundDesc: "There are no reviews found on the page",
        loading: 'Loading...',
        reviewsImported: 'Reviews imported successfully',
        reviewsImporting: 'Importing reviews...',
        goBack: 'Go back',
			},
			emptyState: {
        title: 'Create your first review',
        text: 'Create reviews to show on your funnels and gain the trust of your customers.',
      }
		},
		discounts: {
			title: 'Discounts',
      newButton: 'New Discount',
      selectedLabel: 'Discount',
			delete: {
        title: 'Delete Discounts',
        text: 'Are you sure you want to delete these discounts? This action cannot be undone.',
        deleted: 'Discount(s) deleted'
      },
			new: {
				updated: 'Discount was updated',
        created: 'Discount was created',
        deleted: 'Discount was deleted',
        title: 'New Discount',
        code: 'Code',
        codePlaceholder: 'Enter code',
        status: 'Status',
        generate: 'Generate code',
        type: 'Type',
        percentage: 'Percentage',
        fixed: 'Fixed',
        value: 'Value',
        startDate: 'Start Date',
        expireDate: 'Expiration Date',
        limit: 'Limit discount',
        limitUsage: 'Limit Usage',
        oneTime: 'One time usage per user',
        summaryTitle: 'Summary',
        summaryEmpty: 'No information entered yet.',
        // notActiveYet: 'Not Active Yet', // not used anymore
        notUsedYet: 'Not Used Yet',
        left: 'Usage left',
        delete: 'Delete Discount',
			},
			list: {
				edit: 'Edit',
        delete: 'Delete',
        cols: [
          {
            name: 'Code',
            sorts: ["Discount code (A-Z)", "Discount code (Z-A)"]
          },
          {
            name: 'Value',
            sorts: ["Ascending", "Descending"]
          },
          {
            name: 'Time Created',
            sorts: ["Created date (Ascending)", "Created date (Descending)", "Expired date (Descending)", "Expired date (Ascending)"]
          },
          {
            name: 'Status',
            sorts: ["Active", "Stopped"]
          },
        ],
				filters: [
          {
            title: "Value Type",
            items: ['Percentage', 'Amount'],
          },
          {
            title: "Status",
            items: ['Active', 'Stopped'],
          },
          {
            title: "Creation Date",
            items: ['Last week', 'Last month', 'Last month', 'Last 3 months', 'Last Year'],
          },
        ]
			},
		 	emptyState: {
        title: 'Create your first discount',
        text: 'Offer fixed or percentage discounts to your customers at checkout.',
      }
		},
		oauth: {
			text1Step: 'Choose the account on which you want to install',
			text2Step: 'You are about to install the',
      text2Step2: 'app',
			reqPermissions: 'will be able to do:',
			deny: 'Cancel',
			confirm: 'Install',
		},
		segments: {
			title: 'Segments',
			selectedLabel: 'Segment',
			button: 'Create Segment',
			export: 'Export Segments',
			exportSelected: 'Export Selected Segment',
			exportData: {
				exportee: 'Segments',
				description: 'Export your segments information into a CSV file sent to your email.',
			},
			cols: [
				{
					name: 'Segment',
					sorts: ["Name (A-Z)", "Name (Z-A)"]
				},
				{
					name: 'Date Created',
					sorts: ["Created date (Ascending)", "Created date (Descending)"]
				},
				{
					name: 'Action',
				},
			],
			emptyState: {
				title: "You still don't have any segments",
				text: 'Segments are groups of contacts you collected or people who purchased your products.',
			},
			delete: {
				title: 'Delete Segment',
				text: 'Are you sure you want to delete This segment? This cannot be undone.',
			},
			new: {
				label: 'Segments',
				title: 'New Segment',
				updated: 'Segment was updated',
				created: 'Segment was created',
				deleted: 'Segment was deleted',
				exported: 'Segment was exported, please check your inbox to download it.',
				name: 'Name',
				description: 'Description',
				filter: 'Filter',
				include: 'Only Include contacts that match',
				exclude: 'Exclude contacts that match',
				summary: "Summary",
				viewContacts: "View contacts",
				total: 'Total contacts in this segment',
				empty: 'There are no contacts in this segment',
				save: 'Save',
				cancel: 'Cancel',
				delete: "Delete segment",
				export: "Export as CSV",
			}
		},
		records: {
			title: 'Recordings',
			selectedLabel: 'Record',
			button: 'Create Record',
			export: 'Export Recordings',
			exportSelected: 'Export Selected Record',
			emptyState: {
				title: "You still don't have any recordings",
				text: 'Recordings allow you to view your customers behavior on your funnels.',
			},
			delete: {
				title: 'Delete Record',
				text: 'Are you sure you want to delete This record? This cannot be undone.',
			},
			new: {
				label: 'Recordings',
				title: 'New Record',
				delete: 'Delete record',
				deleted: 'Record was deleted',
				info: 'Record info',
				time: 'Time spent:',
				landed: 'Landed:',
				exited: 'Exited:',
				location: 'Location:',
				user: 'User:',
				platform: 'Platform:',
				date: 'Date:',
			}
		},
		customers: {
			emptySeg: "There are no segments",
			exportSeg: "Export selected segment",
			noSeg: 'There are no segments',
			createSeg: "Create a segment",
			title: 'Contacts',
			export: 'Export Contacts',
			exportSelected: 'Export Selected Contacts',
			selectedLabel: 'Contact',
			changesSaved: 'Changes saved',
			exportData: {
				exportee: 'Contacts',
				description: 'Export your contacts information into a CSV file sent to your email.',
			},
			new: {
				addressChangesSaved: 'Changes saved',
				overview: {
					edit: 'Edit',
					noName: '(No name)',
					lastOrder: 'LAST ORDER',
					totalOrders: 'TOTAL ORDER',
					totalExpenses: 'TOTAL EXPENSES',
					changesSaved: 'Changes saved',
					form: {
						title: 'Edit Contacts',
						first: 'First Name',
						firstPlaceholder: 'Enter first name',
						last: 'Last Name',
						lastPlaceholder: 'Enter last name',
						email: 'Email',
						emailPlaceholder: 'Enter email',
						phone: 'Phone',
						phonePlaceholder: 'Enter phone',
						customer: 'Accepts marketing emails',
						cancel: 'Cancel',
						save: 'Save',
					}
				},
				lastOrders: {
					title: 'Last Orders',
					empty: 'This contact has no orders',
				},
				records: {
					title: "Signed up on",
					funnelTitle: 'Funnel',
					tagsTitle: 'Tags',
          dateTitle: 'Date',
					empty: 'Not signed up yet',
				},
				notes: {
					tempTitle: 'Notes',
					title: 'Contacts notes',
					empty: 'There are no notes',
					edit: 'Edit',
					done: 'Done',
					placeholder: 'Add a note',
				},
				shippingAddress: {
					title: 'Shipping address',
					editTitle: 'Edit Shipping address',
					edit: 'Edit',
					noContact: 'No contact info provided',
					empty: 'No Shipping Address',
				},
				billingAddress: {
					title: 'Billing address',
					editTitle: 'Edit Billing address',
					empty: 'No Billing Address',
				},
			},
			emptyState: {
				title: "You still don't have any contacts",
				text: 'Contacts are leads you collected or people who purchased your products.',
			},
			list: {
				cols: [
					{
						name: 'Contacts',
						sorts: ["Name (A-Z)", "Name (Z-A)"]
					},
					{
						name: 'Phone',
					},
					{
						name: 'Location',
						sorts: ["Location (A-Z)", "Location (Z-A)"]
					},
					{
						name: 'Orders',
						sorts: ["Orders (A-Z)", "Orders (Z-A)"]
					},
					{
						name: 'Total spend',
						sorts: ["Expense (A-Z)", "Expense (Z-A)"]
					}
				],
				filters: [
					{
						title: "Subscribed to maillist",
						items: ['Subscribed', 'Not Subscribed'],
					},
					{
						title: "Has Orders",
						items: ['Has Orders', 'Has no orders'],
					}
				]
			},
		},
		orders: {
			import: {
				title: 'Sync Orders',
				description: 'To see an example of the required file format, download a ',
				sample: 'sample CSV template.',
				uploadFile: 'Upload file',
				helpText: 'You need any ',
				help: 'help?',
				cancel: 'Cancel',
				close: 'Close',
				import: 'Sync',
				errorLabel: 'Fields Error',
				errorMessage: 'You have some errors in the fields, you can reupload after fixing them.',
				errorContent: 'Please fix the following errors:',
				importDone: 'Syncing is Done',
				analyzing: 'Analyzing File',
				importing: 'Importing order...',
				imported: 'Orders synced successfully',
			},
			title: 'Orders',
			exportLabel: 'Export Orders',
			syncLabel: 'Sync Orders',
			exportSelected: 'Export Selected Orders',
			selectedLabel: 'Order',
			canceled: 'Canceled',
			active: 'Active',
			new: {
				updatedOrder: 'Updated order',
				cancelUndone: 'Cancellation undone',
				orderArchived: 'Order archived',
				orderUnarchived: 'Order unarchived',
				paymentPending: 'Payment pending',
				paid: 'Paid',
        edit: 'Edit Order',
        refund: 'Refund',
        archive: 'Archive Order',
        unarchive: 'Unarchive Order',
        cancel: 'Cancel Order',
        canceled: 'Cancelled',
        uncancel: 'Undo Cancellation',
        fulfilled: 'Fulfilled',
        unfulfilled: 'Unfulfilled',
        unfulfillItems: 'Unfulfill items',
        fulfillItems: 'Fulfill items',
        refunded: 'Refunded',
        removed: 'Removed',
        trackingNumber: 'Tracking Number',
        change: 'Change',
        addTracking: 'Add Tracking Number',
        markFulfilled: 'Mark as Fulfilled',
        cancelFulfillment: 'Cancel Fulfillment',
        fulfillment: 'Fulfillment',
        orderBumpLabel: 'Order bump offer',
        qty: 'Quantity',
        changesSaved: 'Changes saved',
				contact: {
					title: 'Contact',
					contact: 'Contact info',
					edit: {
						title: 'Edit Contact Info',
						email: 'Email',
						emailPlaceholder: 'Enter email',
						phone: 'Phone',
						phonePlaceholder: 'Enter phone',
						check: 'Update contact profile',
						cancel: 'Cancel',
						save: 'Save',
					}
				},
				custom: {
          title: "Custom Info",
          edit: 'Edit',
          modal: {
            title: 'Edit Custom Info',
            save: 'Save',
            cancel: 'Cancel',
          }
        },
				summary: {
          original: 'Original Order',
          subtoal: 'Subtotal',
          items: 'items',
          discounts: 'Discounts',
          total: 'TOTAL',
          paid: 'Paid by the customer',
          refunded: 'Refunded',
          net: 'Net Payment',
          owesYou: "Customer owes you",
          youOwe: "You owe the customer",
          mark: 'Mark As Paid',
        },
			},
			edit: {
				title: "Edit order",
				cancel: 'Cancel',
				orderUpdated: 'Order updated',
				addMore: 'Click on "Add items" to add more products',
				orderItems: {
					title: 'Order Items',
					add: 'Add Items',
					empty: "There are no items in this order, Add items and they'll appear here.",
					searchPlaceholder: 'Search products...',
					modal: {
						title: 'Add Items',
						cancel: 'Cancel',
						add: 'Add',
						empty: {
              title: 'No results found!',
              text: 'Try a different keyword.',
              nothing: 'There is no item to add to the order. You do not have any products yet.',
              button: 'Add Product',
            }
					}
				},
				summary: {
          title: 'Summary',
          empty: 'The summary of the order will appear here when you make changes.',
          subtotal: 'Subtotal',
          paid: 'Paid by customer',
          collect: 'Amount to collect',
          refund: 'Amount to refund',
          button: 'Edit Order',
        }
			},
			refund: {
        title: 'Refund',
        cancel: 'Cancel',
        transaction: {
          title: 'Transaction ID:',
          refundAmount: 'Refund Amount',
          amount: 'Amount',
          available: 'available for refund',
        },
        reason: {
          title: 'Refund Reason',
          placeholder: 'Reason...',
          wont: 'Your customer will not see this',
        },
        summary: {
          title: 'Summary',
          subtotal: 'Subtotal',
          items: 'Items',
          discount: 'Discount',
          totalAv: 'Total available',
          sendNot: 'Send notification to the customer',
          refund: 'Refund',
        },
        payment: {
          lost_pg_warning: `We cannot process this refund because the payment gateway is not connected. Please process the refund manually from the payment gateway dashboard.`
        }
      },
			export: {
        exportee: 'Orders',
        description: 'Export your order information into a CSV file to be sent to your email.',
      },
			list: {
        cols: [
          {
            name: 'Order',
            sorts: ["Name (A-Z)", "Name (Z-A)"]
          },
          {
            name: 'Customer',
          },
          {
            name: 'Status',
          },
          {
            name: 'Payment',
          },
          {
            name: 'Fulfillment',
          },
          {
            name: "Date",
            sorts: ['Ascending', 'Descending'],
          },
          {
            name: "Total",
            sorts: ['Ascending', 'Descending'],
          },
        ],
        filters: [
          {
            title: "Status",
            items: ['Active', 'Canceled', 'Archived'],
          },
          {
            title: "Payment",
            items: ['Pending', 'Paid', 'Refunded', 'Partially Refunded'],
          },
          {
            title: "Fulfillment",
            items: ['Unfulfilled', 'Partially Fulfilled', 'Fulfilled'],
          },
        ]
      },
			cancel: {
        title: 'Cancel Order',
        text: 'The order will be cancelled. You will then be able to refund or change the order.',
        learnMore: 'Learn more about cancelling an order',
        form: {
          amount: "Refund Amount",
          reason: "Cancellation Reason",
          select: "Select a reason",
          send: "Send a notification to the customer",
          issue: "Issue refund",
          discard: 'Discard',
          cancel: 'Cancel Order',
          canceled: 'Order cancelled',
        },
        reasons: [
					'Product not available',
					'Delivery date missed',
					'Alternative found',
					'Payment declined',
					'Subscription cancelled',
					'Other',
				],
      },
			emptyState: {
        title: "You do not have any orders",
        text: "This is where you will manage order that your customers make.",
      }
		},
		abandonedCheckouts: {
			title: 'Abandoned Checkouts',
      recovered: 'Recovered',
      notRecovered: 'Not recovered',
      new: {
        cartLink: 'Card recovery link',
        cartText: 'Email this link to your customer to recover their cart',
        copy: 'Copy Link',
        linkCopied: "Cart recovery link was copied",
        checkoutDetails: {
          title: 'Checkout Details',
        },
        summary: {
          title: 'Summary',
          shipping: 'Shipping',
          subtotal: 'Subtotal',
          discount: 'Discount',
          total: 'TOTAL',
        },
      },
			list: {
        cols: [
          {
            name: "Placed By",
            sorts: ["Ascending", "Descending"]
          },
          {
            name: 'Recovery Status',
          },
          {
            name: 'Email Status',
          },
          {
            name: "Date",
            sorts: ['Ascending', 'Descending'],
          },
          {
            name: "Total",
            sorts: ['Ascending', 'Descending'],
          },
        ],
        filters: [
          {
            title: "Email sent",
            items: ['None', 'One Email', 'Two Emails', 'Three Emails'],
          },
          {
            title: "Recovered",
            items: ['Recovered', 'Lost'],
          },
        ]
      },
			emptyState: {
        title: "You do not have any abandoned checkouts",
        text: "This is where you will manage abandoned checkouts.",
      }
		},
		dashboard: {
      title: 'Dashboard',
      refresh: 'Refresh',
      compareToPrev: 'Compare to date',
      compareLabel: 'Compare To',
      previousPeriod: 'Previous period',
      today: 'Today',
      yesterday: 'Yesterday',
      lastSeven: 'Last 7 days',
      lastThiry: 'Last 30 days',
      lastNinety: 'Last 90 days',
      lastYear: 'Last year',
      totalSales: 'TOTAL SALES',
      totalOrders: 'TOTAL ORDERS',
      totalLeads: 'TOTAL LEADS',
      returningCustomerRate: 'RETURNING CUSTOMER RATE',
      returning: 'Returning',
      firstTime: 'First Time',
      totalVisitors: 'TOTAL VISITS',
      averageOrderValue: 'AVERAGE ORDER VALUE',
      totalConversionRate: 'CONVERSION RATES',
      // addedCart: 'Added To Cart',
      checkout: 'Checkout',
      leads: 'Leads',
      reachedCheckout: 'Reached Checkout',
      purchased: 'Purchased',
      salesTraffic: 'SALES BY TRAFFIC SOURCE',
      topDevices: 'TOP DEVICE TYPE',
      topBuying: 'TOP BUYING COUNTRIES',
      topProducts: 'TOP PRODUCTS BY UNITS SOLD',
      topFunnels: 'TOP SELLING FUNNELS',
      topLeadsStep: 'TOP LEADS STEPS',
      selectedDate: 'SELECTED DATE:',
      comparedDate: 'COMPARED DATE:',
      comparedTo: 'Compared to',
    },
		liveView: {
      title: 'Live View',
      visitors: 'Visitors',
      orders: 'Orders',
      fullScreen: 'Full Screen',
      exitFullScreen: 'Exit Full Screen',
      metrics: ["TODAY'S VISITORS", "TODAY'S ORDERS", "TODAY'S SALES"],
      pageViews: 'REAL-TIME PAGE VIEWS PER MINUTE',
      activity: 'ACTIVITY',
      visits: 'Visitors',
      checkout: 'Checking out',
      purchased: 'Purchased'
    },
		settings: {
			linksText: [
				{
					label:"General",
					text:"View and change your account details.",
				},
				{
					label:"Members",
					text:"Update and manage your account members and admins.",
				},
				{
					label:"Tracking",
					text:"Manage your account's tracking methods.",
				},
				{
					label:"Legal",
					text:"Update your account's legal pages.",
				},
				{
					label:"Payment gateways",
					text:"Add payment gateways to your account.",
				},
				{
					label:"Emails & SMS",
					text:"Manage emails and SMS notifications sent to your customers.",
				},
				{
					label:"Billing",
					text:"Update your billing information.",
				},
				{
					label:"Domains",
					text:"Add and change your custom domains.",
				},
				{
					label:"Digital Products Files",
					text:"Change and manage your products files.",
				},
				{
					label:"Default Theme",
					text:"Add and edit your default theme.",
				},
				{
					label:"Integrations",
					text:"Manage and add new integrations.",
				},
        {
          label:"Webhooks",
          text:"Manage and add webhooks.",
        },
			],
			integrations: {
				title: 'Integrations',
				addNew: 'Add new integrations',
				connect: "Connect",
				disconnect: "Disconnect",
        open: "Open",
				comingSoon: 'COMING SOON',
				modalTitle: 'Disconnect Integration',
				modalText: 'Are you sure you want to disconnect the integration?',
				cancel: 'Cancel',
				integrations: [
					{
						title: 'Zapier',
						text: 'Build custom automations and integrations with other apps.',
					},
					{
						title: 'Mailchimp',
						text: 'Mailchimp is the All-In-One integrated marketing platform...',
					},
					{
						title: 'WebinarJam',
						text: 'WebinarJam empowers you with flexible options: live chat...',
					},
					{
						title: 'Kajabi',
						text: 'Kajabi is an all-in-one business platform to create and...',
					},
					{
						title: 'Teachable',
						text: 'Create and sell online courses and coaching services with...',
					},
					{
						title: 'EverWebinar',
						text: 'EverWebinar allows you to easily split test your webinar...',
					},
          {
            title: 'Shopify',
            text: 'Connect your shopify e-commerce store with Lightfunnels and sync orders.',
          },
				]
			},
			general: {
				changesSaved: 'Changes saved',
				save: 'Save',
				cancel: 'Cancel',
				accountCard: {
					title: "Account",
					updateImg: "Update Image",
					deleteImg: "Delete Image",
					imgNotice: "Add your account image. Recemmended size is 256x256px",
					form: {
						accName: "Account name",
						accNamePlaceholder: "Enter your account name",
						accEmail: "Account owner's email",
						accEmailPlaceholder: "Enter email",
						cusEmail: "Customers from email",
						cusEmailPlaceholder: "Enter email",
					}
				},
				addressCard: {
					title: "Address",
          addressNotice: "This address will show on your invoices.",
          form: {
            legName: "Legal name",
            legNamePlaceholder: "Enter your legal name",
            company: "Company (optional)",
            companyPlaceholder: "Enter your company name",
            phone: "Phone number",
            phonePlaceholder: "Enter your phone number",
            addrLine1: "Address line 1",
            addrLine1Placeholder: "Enter your address line 1",
            addrLine2: "Address line 2",
            addrLine2Placeholder: "Enter your address line 2",
            city: "City",
            cityPlaceholder: "Enter your city",
            zip: "Zip",
            zipPlaceholder: "Enter your zip",
            country: "Country",
            countryPlaceholder: "Select your country",
          }
				},
				standardCard: {
					title: "Time Zone",
          standardNotice: "Time zone is used to determine the order time.",
          form: {
            timeZone: "Time zone",
            timeZonePlaceholder: "Select your time zone",
            //defaultWeight: "Weight unit",
          }
				},
			},
      webhooks: {
        title: 'Webhooks',
        notice: 'Your created webhooks.',
        sendTest: "Send test",
        event: 'Event:',
        url: 'URL:',
        modal: {
          text: 'Create a webhook to send event information to a third-party application.',
          name: 'Webhook name',
          event: 'Event',
          url: 'Webhook URL',
          urlPlaceholder: "URL where you would like to send event data",
          segment: 'Segment (Optional)',
          cancel: "Cancel",
          create: "Create webhook",
        }
      },
			members: {
        title: "Members and Admins",
        accountAdmins: "Account admins",
        accountMembers: "Account members",
        membersNotice: "Change what your members and admins can edit and view on this account. You can invite up to #staffNumber members or admins on this plan.",
        addMembers: "Add Member",
        invited: 'Staff invited',
        form: {
          title: 'Add Member',
          email: 'Email',
          emailPlaceholder: 'Enter email',
          partialPermissions: 'Partial permissions',
          permissions: 'Permissions',
          sendInvite: 'Send invite',
          deleteMemberTitle: 'Delete Member',
          deleteAdminTitle: 'Delete Admin',
          deleteInviteTitle: 'Delete Invite',
          deleteMember: 'Delete member',
          deleteAdmin: 'Delete admin',
          deleteInvite: 'Delete invite',
          deleteText: "This action cannot be undone.",
          done: 'Done',
          cancel: 'Cancel',
          edit: 'Edit',
          invitationSent: 'Invitation sent',
          deleted: 'Staff deleted',
          updated: 'Staff updated',
        }
      },
			tracking: {
				changesSaved: 'Changes saved',
        save: 'Save',
        cancel: 'Cancel',
        gaCard: {
          title: 'Google Analytics',
          notice: 'Google Analytics enables you to track visitors to your funnels and generates reports that will help you with marketing and advertising.',
          learnMore: 'Learn more about Google Analytics',
          form: {
            ga: 'Google Analytics Tracking ID',
            gaPlaceholder: 'UA-XXXXXXX',
          },
        },
        comingSoon: 'COMING SOON',
        tiktok: {
        	title: 'TikTok Pixels',
          notice: 'The pixel is a small piece of code that you place on your website to help you find new customers, optimize your campaigns and measure ad performance.',
        },
        snap: {
        	title: 'Snapchat Pixels',
          notice: 'The Snap Pixel is a piece of JavaScript code that helps Advertisers measure the cross-device impact of Campaigns.',
        },
				fbCard: {
					title: 'Facebook Pixels',
          notice: 'Facebook pixels allow you to measure the effectiveness of your advertising by understanding the actions your visitors take on your funnels.',
          learnMore: 'Learn more about Facebook Pixels',
          addPixel: 'Add New Pixels',
					fbPixels: 'Facebook pixel ID’s',
					form: {
            pixelName: 'Pixel Name',
            pixelNamePlaceholder: 'Enter Pixel name',
            pixelID: 'Pixel ID',
            pixelIDPlaceholder: 'Enter Pixel ID',
            add: 'Add',
            added: 'Pixel added',
            done: 'Done',
            cancel: 'Cancel',
            delete: 'Delete',
            deleted: 'Pixel deleted',
            edit: 'Edit',
          }
				}
			},
			legal: {
        create: 'Create From Template',
        save: 'Save',
        cancel: 'Cancel',
        changesSaved: 'Changes saved',
        refund: {
          title: 'Refund Policy',
          notice: 'When saved, customers will see a link to this in the footer of the checkout page, order review page, and menus (optional).',
          form: {
            refund: 'Refund Policy',
            refundPlaceholder: 'Enter your refund policy',
          }
        },
        privacy: {
          title: 'Privacy Policy',
          notice: 'When saved, customers will see a link to this in the footer of the checkout page and menus (optional).',
          form: {
            privacy: 'Privacy Policy',
            privacyPlaceholder: 'Enter your privacy policy',
          }
        },
        terms: {
          title: 'Terms of Service',
          notice: 'When saved, customers will see a link to this in the footer of the checkout page and menus (optional).',
          form: {
            terms: 'Terms of service',
            termsPlaceholder: 'Enter your terms of service',
          }
        }
      },
			payments: {
				connectedLabel: "Connected",
        creditCardRate: "Credit card rate",
        transactionFee: "Transaction fee",
        currencyCard: {
          title: "Account Currency",
          currencyNotice: "This is your account currency. It is the currency in which all price values will be displayed.",
          form: {
            currency: "Currency",
          }
        },
        currencySwitchCard: {
          title: "Currency Conversion",
          currencyNotice: "These are the currencies that will appear on your funnels' settings and will be visible to your visitors.",
          form: {
            switch_to_visitor: "Automatically switch to the visitor's local currency",
            useAll: "Use all currencies",
            autoAdd: "Automatically add missed currency of the visitor's country.",
            autoAddNotice: "When the currency of the visitor does not exist on the list, it will be added automatically to the list.",
            searchPlaceholder: "Search currencies",
            searchEmpty: "Cannot find any currency.",
            currenciesAdded: "Currencies added",
            currenciesEmpty: "You don’t have any currencies added yet. Try to search and add the currencies you want from the search results.",
          }
        },
        stripe: {
          title: "Stripe",
          notice: "Stripe is a payment provider which has a simple fee structure without the need for a separate merchant account or payment gateway.",
          connected: "You are connected with Stripe",
          connectedBtn: "Disconnect",
          notConnected: "Connect Stripe as a payment provider to accept payments on your funnels.",
          notConnectedBtn: "Connect Stripe Account",
          learnMore: "Learn More",
          setByStripe: "Set by Stripe",
          disconnectModal: {
            title: 'Disconnect Stripe',
            text: 'Are you sure you want to disconnect Stripe from your payment gateways?',
            btn: 'Disconnect',
            cancel: 'Cancel',
          }
        },
				paypal: {
					theirText: {
						title: 'An instant global business.',
						text: 'One integration for all your online payment needs.',
						benefitsTitle: 'Benefits:',
						benefits:[
							'Enable a seamless buying experience for your customers that drives conversion and loyalty.',
							'Accept PayPal payments with simplified onboarding, adaptable integration, and easy account setup.',
							'Access to 377M+ PayPal customers around the globe*, with local currency support for better money management',
							'Peace of mind for you and your customers with buyer and seller protection on eligible sales.',
						],
						results: '*PayPal Fourth Quarters 2020 Result',
					},
					title: "PayPal",
          notice: "Accept PayPal as a payment method using a “Checkout with PayPal” Button on your funnels.",
          learnMore: "Learn more about PayPal Express Checkout.",
          setByPaypal: "Set by PayPal",
          connected: "You are connected with PayPal",
          connectedBtn: "Disconnect",
          notConnected: "Connect PayPal as a payment provider to accept payments through your funnels.",
          notConnectedBtn: "Connect PayPal Account",
          alert: {
            title: 'PayPal account verification',
            text: 'Please verify and complete setup in PayPal website.',
            check: 'Check again',
          },
          disconnectModal: {
            title: 'Disconnect PayPal',
            text: 'Are you sure you want to disconnect PayPal from your payment gateways?',
            btn: 'Disconnect',
            cancel: 'Cancel',
          }
				},
				cod: {
          title: "Cash on Delivery",
          notice: "Customers make payment at the time of delivery of the product rather than in advance.",
          cod: "Cash on delivery",
          disable: "Disable",
          enable: "Enable",
          disabled: "Disabled",
          enabled: "Enabled",
        }
			},
			emails: {
				discard: 'Discard',
        save: 'Save',
        title: 'Emails',
        smsTitle: 'SMS',
        changesSaved: 'Changes saved',
        reset: "Reset template",
        form: {
          subject: 'Subject',
          body: 'Body Text',
        },
				orders: {
          title: 'Orders',
          notice: 'These emails are sent when an order action is performed.',
          orderConfirmation: {
            title: 'Order Confirmation',
            notice: 'Sent to the customer once they place their order.',
          },
          orderCancelled: {
            title: 'Order Cancelled',
            notice: 'Sent to the customer after their order is cancelled.',
          },
          orderRefund: {
            title: 'Order Refund',
            notice: 'Sent to the customer once their order is refunded.',
          },
          orderFulfillment: {
            title: 'Order Fulfillment',
            notice: 'Sent to the customer when you fulfill their order.',
          },
        },
				abandonedCheckouts: {
          title: 'Abandoned Checkouts Emails',
          notice: 'Automatically send checkout recovery emails to visitors who abandoned their checkout.',
          email1: {
            sent: 'Sent',
            recovered: 'Recovered',
            conversion: 'Conversion Rate',
            reset: 'Reset stats',
            settings: 'SETTINGS',
            enable: 'Enable',
            sendAfter: 'Send after',
            template: 'TEMPLATE',
          }
        },
        sms: {
          title: "Abandoned Checkouts SMS",
          notice: "Messages sent to customers in order to recover their abandoned checkouts.",
          usaSupport: '- USA 🇺🇸 support is coming soon!',
        }
			},
			billing: {
				overview: {
					alert1: 'Your',
          alert2: 'plan will still be active',
          alert3: 'then it will change to the',
          alert4: 'plan',

					title: 'Account overview',
					notice: 'An overview of the status and plan of your account.',
					memberSince: 'Member since',
					currentPlan: 'Current plan',
					resumed: 'Plan resumed',
					status: 'Status',
					active: 'Active',
					locked: 'Locked',
					accPlan: 'Account plan',
					learnMorePlan: 'Learn more about Billing and Plans.',
					proPlan: {
						title: 'Lightfunnels Professional',
						notice: 'Everything you and your team need for a growing business.',
						notice1: 'Everything you and your team need for just',
						notice2: 'and get more features that will help grow your business.',
						price: 0,
						learnMore: 'Learn more about our plans.',
						upgrade: 'Upgrade now',
						features: [
              {
                title: 'Unlimited Funnels',
                notice: 'Unlimited Funnels to showcase and sell your products.',
              },
              {
                title: 'Unlimited Products',
                notice: 'Add unlimited products to sell and manage.',
              },
              {
                title: 'Up to 8 Members',
                notice: 'Build and grow your business team with up to 8 members and admins.',
              },
              {
                title: '1GB File Upload',
                notice: "File uploads may be digital products or images.",
              },
              {
                title: '1.5% Transaction Fee',
                notice: 'Simple, transparent pay-as-you-go fee system.',
              },
              {
                title: 'And More',
                notice: 'Many more features to supercharge your e-commerce business.',
              },
            ]
					},
					businessPlan: {
            title: 'Lightfunnels Business',
            notice: 'For e-commerce businesses that want to scale.',
            price: 0,
          },
					downgrade: 'Downgrade',
          upgrade: 'Upgrade',
          current: 'Current plan',
          wantToScale: 'Want to scale your e-commerce business?',
          upgradeBus: 'Upgrade to the Business Plan.',
          resume: "Resume plan",
					alert: {
            title: "Payment method failed",
            titleErr: "Payment has failed",
            text: "We were unable to charge your payment method. Please change the payment method or contact your payment provider.",
            textErr: "We were unable to charge your payment method. Please change the payment method or contact your payment provider.",
            try: 'Try again',
            primary: 'Primary'
          },
					success: {
            title: "Payment was successful",
            text: "Your payment method was susccessfully charged.",
          },
          pmError: {
            title: "Error adding payment method",
          },
					plans: [
						{
							name: 'Basic',
							text: 'All the basics features for starting out a new e-commerce business.',
							features: [
								'Up to # Funnels',
								'Up to # Products',
								'Up to # Members',
								'# File Upload',
								'#% Transaction Fee',
							]
						},
						{
							name: 'Professional',
							text: 'Everything you and your team need for a growing business.',
							features: [
								'Unlimited Funnels',
								'Unlimited Products',
								'Up to # Members',
								'# File Upload',
								'#% Transaction Fee',
							]
						},
						{
							name: 'Business',
							text: 'For businesses who want to scale.',
							features: [
								'Unlimited Funnels',
								'Unlimited Products',
								'Up to # Members',
								'# File Upload',
								'#% Transaction Fee',
							]
						},
					],
				},
				methods: {
					title: 'Payment Methods',
					notice: 'Manage your payment methods information',
					addPayment: 'Add payment method',
          paymentTitle: 'Payment Method',
          addressTitle: 'Billing Address',
          endingWith: 'ending with',
          makePrimary: 'Make primary',
          editBilling: 'Edit billing address',
          deleteCard: 'Delete card',
          upgradeAccount: 'Upgrade your plan',
          addNew: 'Add New Payment',
          seeAll: 'See all features',
          ccInfo: 'Credit card information',
          billingAddr: 'Billing address',
          triedAgain: 'Charged successfully',
          pmAdded: 'Payment method added',
          errorMessage: 'We were not able to charge your credit card, please contact your card issuer or enter an alternative card.',
          paidSuccess: 'Paid successfully',
					form: {
						ccNumber: 'Card Number',
            dateExp: 'Date Expired',
            cvc: 'CVC',
            name: 'Name',
            namePlaceholder: 'Enter your name',
            line1: 'Address Line 1',
            line1Placeholder: 'Enter address line 1',
            line2: 'Address Line 2',
            line2Placeholder: 'Enter address line 2',
            city: 'City',
            cityPlaceholder: 'Enter your city',
            zip: 'Zip',
            zipPlaceholder: 'Enter your zip',
            country: 'Country',
					},
					delete: {
						title: 'Delete Payment',
            text: 'Are you sure you want to delete this Payment method? This action cannot be undone.',
            btn: 'Delete',
            cancel: 'Cancel',
            deleted: 'Payment method deleted',
					}
				},
				invoices: {
					unpaid: 'Unpaid invoices',
          title: 'Invoices',
          date: 'Date',
          amount: 'Amount',
          viewInvoice: 'View invoice',
          pay: 'Pay invoice',
				},
				invoice: {
					title: 'Invoice',
          id: 'Invoice ID',
          date: 'Invoice date',
          acc: 'Account',
          item: 'Item',
          price: 'Price',
          total: 'Total:',
					help: 'For billing issues, please contact'
				},
				edit: {
					title: 'Edit Billing Address',
          cancel: 'Cancel',
          save: 'Save',
          edited: 'Payment method edited',
				},
				upgradeSuccess: {
					title: 'Upgrade was successful!',
          text1: 'You have a successfully upgraded your account, You’re now on the',
          text2: 'monthly payment plan.',
          btn: 'Return to dashboard',
				},
				downgrade: {
					title: 'Downgrade Account',
					text: "You’re about to downgrade, You’ll still keep your current plan's features until",
					cancel: 'Cancel',
					downgrade: 'Downgrade',
				},
				downgradeSuccess: {
          title: 'Downgrade was successful',
          text: "You have successfully downgraded your account.",
          return: 'Return to dashboard',
        },
				cancel: {
					title: 'Downgrade to the Basic plan',
					text: 'Are you sure you want to downgrade your plan to the basic plan?',
					// means: 'You’re about to donwgrade your account to the Basic plan. this means:',
					// list: [
					// 	'Only 5 products',
					// 	'Only 2 funnels',
					// 	'5MB of file upload',
					// 	'2% transaction fees',
					// ],
					// current: "You’ll still keep your current plan features until your subscription expires.",
					cancel: 'Cancel',
					downgrade: 'Downgrade',
					// suggest: {
					// 	text: "Before you go, please tell us why you're leaving.",
					// 	list: [
					// 		'Just I wanted to test the platform',
					// 		'I didn’t understand how to use it',
					// 		'Costs too much',
					// 		'I have technical issues with Lightfunnels',
					// 		'Lightfunnels is missing important features',
					// 		'I’m switching my paid subscription to another account',
					// 		'I’m switching to another platform',
					// 		'Other'
					// 	],
					// 	otherPlaceholder: "Other reasons goes here",
					// },
					actSuggest: {
						cancel: 'Cancel',
					}
				},
			},
			funnels: {
				save: 'Save',
        cancel: 'Cancel',
				defaultFunnel: {
          title: 'Home funnel',
          text: 'Your customers will be redirected to this funnel when they visit your primary domain\'s home page',
          select: 'Select funnel',
        },
				globalFunnel: {
					title: 'Global funnel',
					text: 'This funnel will be used to automatically add products to it from the products page.',
				},
				defaultTheme: {
          loading: 'Loading...',
          title: "Default theme",
          text: "The default theme will be used when creating a funnel directly from the product page.",
          change: "Change theme",
          preview: "Preview theme",
          select: "Select funnel theme",
          templateTitle: "Select default theme",
          templateText: "Select the default theme to be used when creating funnels from the product page.",
          cancel: 'Cancel',
          selectTheme: "Select Theme",
          customize: "Customize Theme",
        }
			},
			domains: {
				delete: {
          title: 'Delete Domain',
          text: 'Are you sure you want to delete this domain?',
          deleted: 'Domain deleted',
        },
        funnelModal: {
          title: 'Select domain funnel',
          text: "Select funnel",
          cancel: 'Cancel',
          link: "Link Funnel",
        },
				list: {
					title: 'Domains',
					link: 'Add Custom Domain',
					notice: 'By default, your site is always accessible via a Lightfunnels subdomain. Custom domains allow you to access your site via one or more domain names.',
					domainName: 'Domain Name',
					status: 'Status',
					ssl_status: 'SSL Status',
					date: 'Date Added',
					primary: 'Primary domain',
					default: 'Default domain',
					redirects: 'Redirects automatically to primary domain',
					disconnected: 'Disconnected',
					connected: 'Connected',
				},
				new: {
					title: 'Link a custom domain to your site',
					notice: 'Connect your custom domain to Lightfunnels.',
					learn: 'Learn more about domains',
					enter: 'Enter a domain name',
					next: 'Next',
					cancel: 'Cancel',
          limitBasic: 'Custom domains are not available on the basic plan, you need to upgrade to get unlimited domains.',
          limit1: 'You have reached your limit of',
          limit2: 'custom domains, you need to upgrade to get more custom domains.',
				},
				overview: {
					title: 'Link a custom domain to your funnels',
					name: 'Domain name',
					provider: 'Provider',
					edit: 'Edit',
					verifying: 'Verifying Connection',
					notCorrectTitle: "Some values are not correct",
					notCorrectNotice: "To connect your domain, Log in to your provider account and change the values and verify your connection again.",
					cname: 'CNAME (www)',
					record: 'A RECORD (@)',
					currentValue: 'Current value:',
					requiredValue: 'Required value:',
					copy: 'Copy',
					follow1: 'Follow the',
					step: 'step-by-step instructions',
					follow2: 'and verify your connection again.',
					verifyAgain: 'Verify again',
					cancel: 'Cancel',
					done: 'Done',
					cnameCopied: 'CName value was copied',
					recordCopied: 'A Record value was copied',
					verified: 'Domain verified',
					continueWithoutRoot: 'Continue without root',
				},
				actions: {
          makePrimary: 'Make primary',
          deleteDomain: 'Delete domain',
          enableRed: 'Enable redirection',
          disableRed: 'Disabled redirection',
          madePrim: 'Domain set to primary',
          redirected: 'Domain redirect enabled',
          setFunnel: 'Set domain funnel',
        }
			},
			files: {
				title: 'Files',
        notice: 'You don’t have any files yet. Drag and drop or click below to upload.',
        addFile: 'Add File',
        attach: 'or drop here',
        filesUploaded: 'Files uploaded',
        maxSize: 'The maximum file size is',
        file: 'File',
        size: 'Size',
        date: 'Date',
        actions: 'Actions',
        rename: 'Rename',
        download: 'Download',
        delete: 'Delete',
        renameTitle: 'Rename File',
        renameNotice: 'Rename your file.',
        renameLabel: 'File name',
        cancel: 'Cancel',
        save: 'Save',
        uploaded: 'File(s) uploaded',
        updated: 'Changes saved',
				deleteModal: {
          title: 'Delete Files',
          text: "Are you sure you want to delete these files?",
          deleted: 'File(s) deleted',
        }
			}
		},
		auth: {
			title: 'Everything You need to grow your business',
      // description: 'Over 800,000 stores, in more than 175 countries, trust Lightfunnels to run their business.',
      openGmail: 'Open Gmail',
      openOutlook: 'Open Outlook',
      lfRights: '© LightFunnels,Inc. Alright reserved |',
      privacy: 'Privacy Policy',
			login: {
        title: 'Welcome to Lightfunnels',
        description: 'Explore all the tools and services that your business needs to start and grow.',
        or: 'Or',
        google: 'Log in with Google',
        dontYet: 'New to Lightfunnels?',
        signup: 'Create account.',
        form: {
          email: 'Email',
          emailPlaceholder: 'Enter email',
          password: 'Password',
          rememberMe: 'Remember me',
          forgotPwd: 'Forgot password?',
          button: 'Log In',
        }
      },
			signup: {
        title: 'Welcome to Lightfunnels',
        description: 'Try LightFunnels for free, and explore all the tools and services you need to start, run, and grow your business.',
        or: 'Or',
        google: 'Sign up with Google',
        already: 'Already have an account?',
        login: 'Log in.',
        signup: "Sign up",
        form: {
          email: 'Email',
          emailPlaceholder: 'Enter email',
          button: 'Create Account',
        }
      },
			forgot: {
        title: 'Forgot your password?',
        description: 'Enter your email address to recover your password.',
        email: 'Email',
        emailPlaceholder: 'Enter your email',
        button: 'Reset Password',
        back: 'Back to login',
      },
			forgotSuccess: {
				title: 'Password reset email was sent',
				description: "Success! You'll receive instructions on how to reset your password to",
			},
			forgotForm: {
        title: "Reset your password",
        description: 'Use the fields below to reset your password.',
        new: 'New Password',
        conf: 'Confirm Password',
        button: 'Reset',
      },
			forgotFormSuc: {
        title: "Successfully reset password!",
        description: 'Now, you can use your new password to login to your account! 🚀',
      },
			confirm: {
        title: 'Confirm your email',
        text1: 'We have sent an email to',
        text2: 'Click the link in the email to confirm your email address.',
        wrong: 'Did you enter the wrong email?',
        change: "Change email",
      }
		},
		switch: {
      title: 'Choose Account',
      description: 'Choose an account to log into.',
      create: 'Create New Account',
      back: 'Back to login',
    },
		onboarding: {
      title: 'Welcome to Lightfunnels',
      description: 'Tell us a bit about yourself',
      first: 'First Name',
      firstPlaceholder: 'Enter your first name',
      last: 'Last Name',
      lastPlaceholder: 'Enter your last name',
      password: 'Password',
      pwdStrength: 'at least 6 characters',
      continue: "Continue",
    }
	},
	sidebar: {
		home: 'Home',
		funnels: 'Funnels',
		orders: 'Orders',
		abCheckouts: 'Abandoned Checkouts',
		products: 'Products',
		allProducts: 'All Products',
		reviews: 'Reviews',
		analytics: 'Analytics',
		dashboard: 'Dashboard',
		liveView: 'Live View',
		contacts: 'Contacts',
    apps: 'Apps',
		allContacts: 'All Contacts',
		segments: 'Segments',
		records: 'Recordings',
		discounts: 'Discounts',
		settings: 'Settings',
		help: 'Help',
		unableToCharge: 'We were not able to charge your current payment method. Please update your billing information.',
    unablebtn: 'Update payment method',
	},
	navbar: {
    searchPlaceholder: 'Search...',
    accounts: {
      title: 'ACCOUNTS',
      button: 'Create new account',
      invited: 'Invited',
      locked: 'Locked',
    },
    profile: {
      myProfile: 'My profile',
      logout: 'Log out',
    }
  },
	generalModals: {
		export: {
			currentPage: 'Current Page',
			helpText: 'You need any ',
			help: 'help?',
			cancel: 'Cancel',
			export: 'Export',
			all: 'All',
			selected: 'Selected',
			filter: 'Filter/Search results',
			exportMsg: 'exported successfully, check your inbox.',
		},
		delete: {
			cancel: 'Cancel',
			delete: 'Delete',
		},
		address: {
			firstName: 'First Name',
			firstNamePlaceholder: 'Enter first name',
			lastName: 'Last Name',
			lastNamePlaceholder: 'Enter last name',
			email: 'Email',
			emailPlaceholder: 'Enter email',
			phone: 'Phone',
			phonePlaceholder: 'Enter phone',
			line1: 'Line1',
			line1Placeholder: 'Enter line1',
			line2: 'Line2',
			line2Placeholder: 'Enter line2',
			country: 'Country',
			city: 'City',
			cityPlaceholder: 'Enter city',
			zip: 'Zip',
			zipPlaceholder: 'Enter zip',
			state: 'State',
			statePlaceholder: 'Enter state',
			cancel: 'Cancel',
			save: 'Save',
			viewOnMap: 'View on map'
		}
	},
	pagination: {
    addFilters: 'Add Filters',
    filtersSelected: 'Selected filters:',
    applyFilters: "Apply Filter",
    searchPlaceholder: 'Search...',
    product: 'Product',
    delete: 'Delete',
    prev: 'Prev',
    next: 'Next',
  },
	lockedComponent: {
    title: 'Your account is locked',
    text: 'Please add a payment method to unlock your account',
    btn: 'Unlock my account',
    pmAdded: 'Payment method added successfully',
  },
	firstSaleModal: {
    title: 'Congrats on your first sale!',
    textSuccess: 'Congratulations on your first Lightfunnels order!',
    textUnsuccess: 'Congratulations on your first Lightfunnels order! Please add a payment method to your account to continue processing orders.',
    btnSuccess: "Close",
    btnUnsuccess: 'Add a payment method',
  },
	congrats: {
		title: 'Your account was created successfully',
    text: 'Your account has been created, congratulations! Now, it\'s time to get you started selling your products!',
    enter: 'Enter my account',

		address: {
			title: 'Add an address',
			text: 'This will be used as a default business address',
			next: 'Next',
			legal: "Legal Name",
			legalPl: "Enter your legal name",
			company: "Company (optional)",
			companyPl: "Enter your company",
			phone: "Phone",
			phonePl: "Enter your phone",
			line1: "Address line1",
			line1Pl: "Enter your line1",
			line2: "Address line2",
			line2Pl: "Enter your line2",
			city: "City",
			cityPl: "Enter your city",
			zip: "Zip",
			zipPl: "Enter your zip",
			country: "Country",
			countryPl: "Select country",
		},

		theme: {
      title: 'Select a default theme',
      text: 'This theme will be used to create default product funnels',
      select: "Select",
    },

    preparing: {
      title: 'Preparing your account',
      text: 'Your account is being prepared, this will take a few seconds...',
    },
	},
	errors:{
		exceed_max_size: "File size exceeded the allowed size: #maxSize",
		fails_to_fetch_product: "Couldn't fetch the product, the binding won't work properly, Please try again later.",
		expired: {
      message: 'Please login below',
      label: 'Your session has expired',
    },
		somewrong: {
      title: 'Oops! Something went wrong',
      text: 'It’s not you, it’s us. Please try again, If this problem persists, contact us at',
      button: 'Refresh',
    }
	},
	noAccess: {
    title: "You do not have access to this account",
    text1: 'You do not have access to account this account',
    text2: '. Please contact the admin to add you as a member.',
    choose: "Choose another account",
    create: "Create an account",
    logout: 'Logout',
  },
  lockedModal: {
    title: "Your account is locked",
    text: "Please visit the billing page and update your payment information to unlock your account.",
    unlock: "Unlock your account",
  },
	checklist: {
    title: 'Help and links',
    text: 'You are off to a great start, let\'s get you set up. Follow these steps below to get started.',
    helpfulTitle: 'Helpful links',
    contact: 'Contact support',
    helpCenterTitle: 'Visit our help center',
    helpCenterText: 'Our guide on using Lightfunnels.',
    fbTitle: 'Visit our Facebook group',
    fbText: 'Join our community of Lightfunnelers.',
  },
  emptySearch: {
    title: 'No result found',
    text: 'Try Different Keyword',
  },
	funnelsList: {
    emptySearchText: "Unable to locate any funnels with this name.",
    text: "You do not have any funnels yet.",
    button: "Add Funnel",
  },
  prodsList: {
    emptySearchText: "Unable to locate any products with this name.",
    text: "You do not have any products yet.",
    button: "Add Product",
  },
	upgradeNotice: {
    title: 'Upgrade your plan',
    learn: 'Learn more about our plans',
  },
  modalFiles: {
    title: "Upload the file you want to be in your variant",
    fileText: 'Select existing files:',
    cancel: 'Cancel',
    save: 'Save',
  },
  helpModal: {
    title: 'Help',
    hcTitle: 'Visit our help center',
    hcText: 'Our guide on using Lightfunnels.',
    fbTitle: 'Visit our Facebook group',
    fbText: 'Join our community of Lightfunnelers.',
  },
	imagesComponent: {
    addFile: "Add file",
    addImage: "Add image",
    dropFile: "or drop file here",
    dropImage: "or drop image here",
  },
  library: {
    noSelect: 'No image selected.',
    noSelectText: 'Select the image from the right to see the details.',
    size: 'Size:',
    res: 'Resolution:',
    url: 'URL',
    title: 'Title',
    alt: 'Alt Text',
    done: "Done",
    cancel: "Cancel",
    select: 'Select',
    noImageSelected: 'No image selected',
    deleteSelected: 'Delete Selected Images',
    empty: {
      title: 'No image yet.',
      text: 'You do not have any images yet, Add your images or drop it here to use it.',
    },
    nav: {
      recentTabs: 'Recently Used',
      all: 'All Media',
      imgSelected: "Images Selected:",
      searchPlaceholder: "Search",
      newestFirst: 'Newest First',
      oldestFirst: 'Oldest First',
    },
    import: {
      title: 'Import Image',
      url: "Paste URL",
      cancel: 'Cancel',
      save: 'Save',
    }
  },
	or: 'Or',
	// often used components' content (pagination, search...)
	// alert msgs
} as const;

type ContentType = typeof Content;

export {
	ContentType	
}

// export {Content};
// export default Content;