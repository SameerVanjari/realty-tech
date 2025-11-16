export default function HowItWorks() {
    return (
        <section className="w-full max-w-6xl py-24 px-4 md:px-10" id="features">
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-gray-900 dark:text-white">How It Works</h2>
                <p className="text-center max-w-2xl text-gray-600 dark:text-gray-300">Our process is simple and designed to deliver stunning results with minimal effort. Go from property scan to market-ready assets in just three steps.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col gap-4 p-8 rounded-xl bg-card-light dark:bg-card-dark shadow-lg">
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold font-heading text-accent-teal">1</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Scan Your Property</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Easily capture your space using our intuitive technology. Our app guides you through a quick and seamless scanning process.</p>
                </div>
                <div className="flex flex-col gap-4 p-8 rounded-xl bg-card-light dark:bg-card-dark shadow-lg">
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold font-heading text-accent-teal">2</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Generates</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Our powerful AI processes the scan data to automatically build a high-fidelity 3D gallery and create engaging video ads.</p>
                </div>
                <div className="flex flex-col gap-4 p-8 rounded-xl bg-card-light dark:bg-card-dark shadow-lg">
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold font-heading text-accent-teal">3</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Publish &amp; Market</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Instantly share your new assets across all platforms to attract more buyers and sell properties faster than ever before.</p>
                </div>
            </div>
        </section>
    )
}
