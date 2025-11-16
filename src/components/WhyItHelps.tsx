export default function WhyItHelps() {
    return (
        <section className="w-full max-w-6xl py-24 px-4 md:px-10">
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-gray-900 dark:text-white">Why It Helps</h2>
                <p className="text-center max-w-2xl text-gray-600 dark:text-gray-300">Leverage cutting-edge technology to gain a competitive edge in the real estate market.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-teal/20">
                    <span className="material-symbols-outlined text-4xl text-accent-teal">view_in_ar</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Impress Buyers</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Impress buyers with immersive 3D walkthroughs.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-teal/20">
                    <span className="material-symbols-outlined text-4xl text-accent-teal">schedule</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Save Time</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Save time explaining layouts with interactive tours.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-teal/20">
                    <span className="material-symbols-outlined text-4xl text-accent-teal">star</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Stand Out</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Stand out from traditional listings.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-teal/20">
                    <span className="material-symbols-outlined text-4xl text-accent-teal">emoji_events</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Win More Deals</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Win more deals with a premium visual experience.</p>
                </div>
            </div>
        </section>
    )
}
