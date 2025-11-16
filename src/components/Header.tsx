export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center py-3 px-4 md:px-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200/20 dark:border-white/10 transition-colors duration-300">
      <nav className="flex items-center justify-between w-full max-w-6xl">
        <div className="flex items-center gap-4 text-white">
          <div className="size-6 text-accent-teal">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">RealtyTech</h2>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-accent-teal transition-colors text-gray-700 dark:text-gray-300" href="#features">Features</a>
          <a className="text-sm font-medium hover:text-accent-teal transition-colors text-gray-700 dark:text-gray-300" href="#pricing">Pricing</a>
          <a className="text-sm font-medium hover:text-accent-teal transition-colors text-gray-700 dark:text-gray-300" href="#gallery-showcase">Gallery</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-accent-teal text-deep-navy text-sm font-bold tracking-wide transition-transform hover:scale-105">
            <span className="truncate">Book a Call</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
