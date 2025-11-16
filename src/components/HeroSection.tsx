export default function HeroSection() {
    return (
        <section className="w-full max-w-6xl py-24 px-4 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-8 text-center lg:text-left">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">
                            Revolutionize <span className="text-[#02c5cc] font-black"> Real Estate Marketing</span> with AI
                        </h1>
                        <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                            Create stunning 3D property galleries and generate AI-powered video ads in minutes.
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <a className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-teal text-deep-navy text-base font-bold tracking-wide transition-transform hover:scale-105" href="#gallery-showcase">
                            <span className="truncate">Explore Galleries</span>
                        </a>
                        <button
                            onClick={() => window.open('https://calendly.com/ssv6132/30min', '_blank')}
                            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-200 dark:bg-card-dark text-gray-800 dark:text-white text-base font-bold tracking-wide transition-transform hover:scale-105"
                        >
                            <span className="truncate">Book a Call</span>
                        </button>
                    </div>
                </div>
                <div className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg4e5usKVzgVSKeE-NX91WfRSYsTI4mfvHY7J3Au6BMloIbdfx-2jzB83u01Xrwf2a0D8e-SbZ6-bKtZ2Qivg2wyNL06JRUsl4b6yF3rvngssUIUCnKIuS6aDZ3zz7wa7A9l3vsabp0LaVOHXnWU747F3WtjdLU-7_9JL7SMq0rMZJJkgdbMQF5cf5gMlN_C1PpldWeT8bjvXquQX7dH5XHWDvngt1zjvGYY02euQsLy3X_wnudFgcL5c-bnelkN4xszjiscpq4kY")' }}></div>
            </div>
        </section>
    )
}
