export default function GalleryShowcase() {
    return (
        <section className="w-full py-24 bg-gradient-to-b from-white/5 to-transparent dark:from-card-dark/20 dark:to-transparent" id="gallery-showcase">
            <div className="max-w-6xl mx-auto px-4 md:px-10">
                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-gray-900 dark:text-white">See What's Possible</h2>
                    <p className="text-center max-w-2xl text-gray-600 dark:text-gray-300">Explore our portfolio of interactive 3D galleries. Click on any property to experience the future of listings.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
                    <div className="md:col-span-8 h-96 group relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAr4r2PPPjn7PdVmok7_hx7qeBpXFa1CLfHCpgdgbTo9n7d_Mbr3RZZxrqI3F33RP6Cjcz5QvqO7K_tQAMNQcMuwOgURg62CN_HWekAEwlAS94i79kbECq0oW4k0f0OQW81KJqlZXoUbG8h4EsPu_gdx_DM_d10xpHyciTC5MXaIdHesanlxK26SDQKmn_9s8U392bq6CoVoYg5R-_dx4nir8DnIp6LPP8C5qnfAhe06jn4FDys3YuckYgS1lpuDjRPONcKrP0JvD4")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">Modern Villa</h3>
                            <p className="text-sm">Sunnyvale, CA</p>
                        </div>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-teal text-deep-navy text-base font-bold tracking-wide transition-transform hover:scale-105">
                                <span className="material-symbols-outlined">view_in_ar</span>
                                <span>View Gallery</span>
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-4 h-96 group relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2jUwa2T7h2BmaAUEGS2IAndz3-G3Zj8dJs0ASELgDFHg9co_Q-KHJeV-8wkA7uqSj33V6gvEYTKxqhTRhs5XdRF1KyVqCKQHyuUlPw4-lqhGSVIeua1YGC-c9Cfh_sbvXCJw-iDh6zU2u2KNw1yPtOYYO3nZfyiU5KdOIUsf1eSzLU-C6Rsr0Ge728HwoyiWd_5Nm2sFAKDjitwqtWmiDqDloa4Yk-Q6i_Vti1mEb6KUZjwNepoIIY4FcQ98C61OUzyd9IE92tCg")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-xl font-bold">Downtown Loft</h3>
                            <p className="text-sm">Metropolis, USA</p>
                        </div>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-teal text-deep-navy text-base font-bold tracking-wide transition-transform hover:scale-105">
                                <span className="material-symbols-outlined">view_in_ar</span>
                                <span>View Gallery</span>
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-4 h-96 group relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVUPvUYR1d_ufPD8_5mNI4U8RWDxZAaw9loBzTf6i8c4ad-oii5JeKYYyaiZYuxnOU4s9Prly3C3ghzQkYKrhFNEULdB0rp3dHp5batL0j4fnZiNtJ9JKl8JE0zX3W6dAyFrH3c9sRdUAh2JrRdDaTjn5vlzqwjOjbB1BZ5PDLNxFNQMKuuiLTX0CpjcFBWtZLy_z9EScZlapSO3L8FU512bLkRZDaubFS3K82QrTfNE2ddqRrsl4lonz2FOau-M19DCQx5fUbbGk")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-xl font-bold">Suburban Family Home</h3>
                            <p className="text-sm">Greenville, SC</p>
                        </div>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-teal text-deep-navy text-base font-bold tracking-wide transition-transform hover:scale-105">
                                <span className="material-symbols-outlined">view_in_ar</span>
                                <span>View Gallery</span>
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-8 h-96 group relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg4e5usKVzgVSKeE-NX91WfRSYsTI4mfvHY7J3Au6BMloIbdfx-2jzB83u01Xrwf2a0D8e-SbZ6-bKtZ2Qivg2wyNL06JRUsl4b6yF3rvngssUIUCnKIuS6aDZ3zz7wa7A9l3vsabp0LaVOHXnWU747F3WtjdLU-7_9JL7SMq0rMZJJkgdbMQF5cf5gMlN_C1PpldWeT8bjvXquQX7dH5XHWDvngt1zjvGYY02euQsLy3X_wnudFgcL5c-bnelkN4xszjiscpq4kY")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">Luxury Penthouse</h3>
                            <p className="text-sm">Skyline City</p>
                        </div>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-teal text-deep-navy text-base font-bold tracking-wide transition-transform hover:scale-105">
                                <span className="material-symbols-outlined">view_in_ar</span>
                                <span>View Gallery</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-gold text-deep-navy text-base font-bold tracking-wide transition-transform hover:scale-105">
                        <span className="truncate">Create My Gallery</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
