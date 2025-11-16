import { useState } from 'react'

const oneTimePlans = [
    {
        title: 'Basic Gallery',
        price: '$1099',
        originalPrice: '$1499',
        description: 'One-time payment',
        features: [
            'Single Property 3D Gallery',
            'High-Resolution Output',
            'Standard 48-hour Turnaround'
        ],
        buttonText: 'Get Started',
        buttonClass: 'bg-gray-200 dark:bg-card-dark border dark:border-white/20 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700',
        iconColor: 'text-accent-teal'
    },
    {
        title: 'Pro Gallery',
        price: '$2099',
        originalPrice: '$2999',
        description: 'One-time payment',
        features: [
            'Everything in Basic Gallery',
            'AI-Enhanced Virtual Staging',
            'Branded Loading Screens',
            'Priority 24-hour Turnaround'
        ],
        buttonText: 'Get Started',
        buttonClass: 'bg-accent-gold text-deep-navy hover:scale-105',
        iconColor: 'text-accent-gold'
    },
    {
        title: 'AI Video Add-On',
        price: '$25<span class="text-base font-medium text-gray-500">/month</span>',
        originalPrice: null,
        description: 'Subscription service',
        features: [
            '10 AI Video Ads / month',
            'Vertical & Horizontal Formats',
            'Licensed Music Included'
        ],
        buttonText: 'Subscribe Now',
        buttonClass: 'bg-accent-teal text-deep-navy hover:scale-105',
        iconColor: 'text-accent-teal'
    }
]

const subscriptionPlans = [
    {
        title: 'Basic Gallery Subscription',
        price: '$99<span class="text-base font-medium text-gray-500">/month</span>',
        originalPrice: null,
        description: 'Monthly subscription',
        features: [
            'Unlimited Property 3D Galleries',
            'High-Resolution Output',
            'Priority 24-hour Turnaround',
            'Monthly Updates'
        ],
        buttonText: 'Subscribe',
        buttonClass: 'bg-gray-200 dark:bg-card-dark border dark:border-white/20 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700',
        iconColor: 'text-accent-teal'
    },
    {
        title: 'Pro Gallery Subscription',
        price: '$199<span class="text-base font-medium text-gray-500">/month</span>',
        originalPrice: null,
        description: 'Monthly subscription',
        features: [
            'Everything in Basic Subscription',
            'AI-Enhanced Virtual Staging',
            'Branded Loading Screens',
            'Dedicated Account Manager'
        ],
        buttonText: 'Subscribe',
        buttonClass: 'bg-accent-gold text-deep-navy hover:scale-105',
        iconColor: 'text-accent-gold'
    },
    {
        title: 'AI Video Suite',
        price: '$49<span class="text-base font-medium text-gray-500">/month</span>',
        originalPrice: null,
        description: 'Subscription service',
        features: [
            'Unlimited AI Video Ads',
            'All Formats Available',
            'Custom Music Library',
            'Analytics Dashboard'
        ],
        buttonText: 'Subscribe Now',
        buttonClass: 'bg-accent-teal text-deep-navy hover:scale-105',
        iconColor: 'text-accent-teal'
    }
]

export default function PricingSection() {
    const [isSubscription, setIsSubscription] = useState(false)
    const [isFlipping, setIsFlipping] = useState(false)

    const handleToggle = () => {
        setIsFlipping(true)
        setTimeout(() => {
            setIsSubscription(!isSubscription)
            setIsFlipping(false)
        }, 300) // Half of the animation duration
    }

    const currentPlans = isSubscription ? subscriptionPlans : oneTimePlans

    return (
        <section className="w-full max-w-6xl py-24 px-4 md:px-10" id="pricing">
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-gray-900 dark:text-white">Simple, Transparent Pricing</h2>
                <p className="text-center max-w-2xl text-gray-600 dark:text-gray-300">Choose the plan that fits your needs. No hidden fees, cancel anytime.</p>
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
                <span className="font-medium text-accent-teal">One-Time</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" value="" checked={isSubscription} onChange={handleToggle} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-accent-teal"></div>
                </label>
                <span className="font-medium text-gray-700 dark:text-gray-300">Subscription</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 items-start justify-center">
                {currentPlans.map((plan, index) => (
                    <div key={index} className={`pricing-card ${isFlipping ? 'flip' : ''} min-h-[500px]`}>
                        <div className="pricing-content flex flex-col gap-6 p-8 rounded-xl bg-card-light dark:bg-card-dark shadow-lg border border-transparent h-full">
                            <div className="relative">
                                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white">{plan.title}</h3>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-gray-900 dark:text-white" dangerouslySetInnerHTML={{ __html: plan.price }}></span>
                                {plan.originalPrice && <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>}
                            </div>
                            <p className="text-gray-500 text-sm">{plan.description}</p>
                            <ul className="flex flex-col gap-3 text-gray-600 dark:text-gray-300 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className={`material-symbols-outlined ${plan.iconColor} text-lg mt-0.5`}>check_circle</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-base font-bold tracking-wide transition-transform ${plan.buttonClass}`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
