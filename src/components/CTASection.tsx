export default function CTASection() {
    return (
        <section className="w-full max-w-6xl py-24 px-4 md:px-10">
            <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-lg p-8 md:p-16 flex flex-col items-center text-center gap-6">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">Ready to Elevate Your Listings?</h2>
                <p className="max-w-xl text-gray-600 dark:text-gray-300">
                    Join the top agents using RealtyTech to sell properties faster. Schedule a call or register to get started today.
                </p>
                <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md mt-4">
                    <input className="w-full h-12 px-4 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-accent-teal focus:border-accent-teal" placeholder="Enter your email address" type="email" />
                    <button
                        onClick={() => window.open('https://calendly.com/ssv6132/30min', '_blank')}
                        className="w-full sm:w-auto flex-shrink-0 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-teal text-deep-navy text-base font-bold tracking-wide transition-transform hover:scale-105"
                        type="button"
                    >
                        <span className="truncate">Book a Call</span>
                    </button>
                </form>
            </div>
        </section>
    )
}
