import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function GalleryShowcase() {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [selectedProperty, setSelectedProperty] = useState<number | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const properties = [
        {
            id: 0,
            title: 'Modern Villa',
            location: 'Sunnyvale, CA',
            mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr4r2PPPjn7PdVmok7_hx7qeBpXFa1CLfHCpgdgbTo9n7d_Mbr3RZZxrqI3F33RP6Cjcz5QvqO7K_tQAMNQcMuwOgURg62CN_HWekAEwlAS94i79kbECq0oW4k0f0OQW81KJqlZXoUbG8h4EsPu_gdx_DM_d10xpHyciTC5MXaIdHesanlxK26SDQKmn_9s8U392bq6CoVoYg5R-_dx4nir8DnIp6LPP8C5qnfAhe06jn4FDys3YuckYgS1lpuDjRPONcKrP0JvD4',
            images: [
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAr4r2PPPjn7PdVmok7_hx7qeBpXFa1CLfHCpgdgbTo9n7d_Mbr3RZZxrqI3F33RP6Cjcz5QvqO7K_tQAMNQcMuwOgURg62CN_HWekAEwlAS94i79kbECq0oW4k0f0OQW81KJqlZXoUbG8h4EsPu_gdx_DM_d10xpHyciTC5MXaIdHesanlxK26SDQKmn_9s8U392bq6CoVoYg5R-_dx4nir8DnIp6LPP8C5qnfAhe06jn4FDys3YuckYgS1lpuDjRPONcKrP0JvD4',
                'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
            ]
        },
        {
            id: 1,
            title: 'Downtown Loft',
            location: 'Metropolis, USA',
            mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2jUwa2T7h2BmaAUEGS2IAndz3-G3Zj8dJs0ASELgDFHg9co_Q-KHJeV-8wkA7uqSj33V6gvEYTKxqhTRhs5XdRF1KyVqCKQHyuUlPw4-lqhGSVIeua1YGC-c9Cfh_sbvXCJw-iDh6zU2u2KNw1yPtOYYO3nZfyiU5KdOIUsf1eSzLU-C6Rsr0Ge728HwoyiWd_5Nm2sFAKDjitwqtWmiDqDloa4Yk-Q6i_Vti1mEb6KUZjwNepoIIY4FcQ98C61OUzyd9IE92tCg',
            images: [
                'https://lh3.googleusercontent.com/aida-public/AB6AXuD2jUwa2T7h2BmaAUEGS2IAndz3-G3Zj8dJs0ASELgDFHg9co_Q-KHJeV-8wkA7uqSj33V6gvEYTKxqhTRhs5XdRF1KyVqCKQHyuUlPw4-lqhGSVIeua1YGC-c9Cfh_sbvXCJw-iDh6zU2u2KNw1yPtOYYO3nZfyiU5KdOIUsf1eSzLU-C6Rsr0Ge728HwoyiWd_5Nm2sFAKDjitwqtWmiDqDloa4Yk-Q6i_Vti1mEb6KUZjwNepoIIY4FcQ98C61OUzyd9IE92tCg',
                'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop'
            ]
        },
        {
            id: 2,
            title: 'Suburban Family Home',
            location: 'Greenville, SC',
            mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVUPvUYR1d_ufPD8_5mNI4U8RWDxZAaw9loBzTf6i8c4ad-oii5JeKYYyaiZYuxnOU4s9Prly3C3ghzQkYKrhFNEULdB0rp3dHp5batL0j4fnZiNtJ9JKl8JE0zX3W6dAyFrH3c9sRdUAh2JrRdDaTjn5vlzqwjOjbB1BZ5PDLNxFNQMKuuiLTX0CpjcFBWtZLy_z9EScZlapSO3L8FU512bLkRZDaubFS3K82QrTfNE2ddqRrsl4lonz2FOau-M19DCQx5fUbbGk',
            images: [
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBVUPvUYR1d_ufPD8_5mNI4U8RWDxZAaw9loBzTf6i8c4ad-oii5JeKYYyaiZYuxnOU4s9Prly3C3ghzQkYKrhFNEULdB0rp3dHp5batL0j4fnZiNtJ9JKl8JE0zX3W6dAyFrH3c9sRdUAh2JrRdDaTjn5vlzqwjOjbB1BZ5PDLNxFNQMKuuiLTX0CpjcFBWtZLy_z9EScZlapSO3L8FU512bLkRZDaubFS3K82QrTfNE2ddqRrsl4lonz2FOau-M19DCQx5fUbbGk',
                'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop'
            ]
        },
        {
            id: 3,
            title: 'Luxury Penthouse',
            location: 'Skyline City',
            mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg4e5usKVzgVSKeE-NX91WfRSYsTI4mfvHY7J3Au6BMloIbdfx-2jzB83u01Xrwf2a0D8e-SbZ6-bKtZ2Qivg2wyNL06JRUsl4b6yF3rvngssUIUCnKIuS6aDZ3zz7wa7A9l3vsabp0LaVOHXnWU747F3WtjdLU-7_9JL7SMq0rMZJJkgdbMQF5cf5gMlN_C1PpldWeT8bjvXquQX7dH5XHWDvngt1zjvGYY02euQsLy3X_wnudFgcL5c-bnelkN4xszjiscpq4kY',
            images: [
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBg4e5usKVzgVSKeE-NX91WfRSYsTI4mfvHY7J3Au6BMloIbdfx-2jzB83u01Xrwf2a0D8e-SbZ6-bKtZ2Qivg2wyNL06JRUsl4b6yF3rvngssUIUCnKIuS6aDZ3zz7wa7A9l3vsabp0LaVOHXnWU747F3WtjdLU-7_9JL7SMq0rMZJJkgdbMQF5cf5gMlN_C1PpldWeT8bjvXquQX7dH5XHWDvngt1zjvGYY02euQsLy3X_wnudFgcL5c-bnelkN4xszjiscpq4kY',
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop'
            ]
        }
    ]

    const openLightbox = (propertyId: number) => {
        setSelectedProperty(propertyId)
        setCurrentImageIndex(0)
        setLightboxOpen(true)
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
        setSelectedProperty(null)
        setCurrentImageIndex(0)
    }

    const nextImage = () => {
        if (selectedProperty !== null) {
            const images = properties[selectedProperty].images
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }
    }

    const prevImage = () => {
        if (selectedProperty !== null) {
            const images = properties[selectedProperty].images
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
        }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowRight') nextImage()
            if (e.key === 'ArrowLeft') prevImage()
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [lightboxOpen])

    return (
        <>
            <section className="w-full py-24 bg-gradient-to-b from-white/5 to-transparent dark:from-card-dark/20 dark:to-transparent" id="gallery-showcase">
                <div className="max-w-6xl mx-auto px-4 md:px-10">
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-gray-900 dark:text-white">See What's Possible</h2>
                        <p className="text-center max-w-2xl text-gray-600 dark:text-gray-300">Explore our portfolio of interactive 3D galleries. Click on any property to experience the future of listings.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
                        {properties.map((property, index) => (
                            <div key={property.id} className={`h-96 group relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 ${index === 0 || index === 3 ? 'md:col-span-8' : 'md:col-span-4'}`}>
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("${property.mainImage}")` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <h3 className={`font-bold ${index === 0 || index === 3 ? 'text-2xl' : 'text-xl'}`}>{property.title}</h3>
                                    <p className="text-sm">{property.location}</p>
                                </div>
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        onClick={() => openLightbox(property.id)}
                                        className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-teal text-deep-navy text-base font-bold tracking-wide transition-transform hover:scale-105"
                                    >
                                        <span className="material-symbols-outlined">view_in_ar</span>
                                        <span>View Gallery</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="flex justify-center mt-12">
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-gold text-deep-navy text-base font-bold tracking-wide transition-transform hover:scale-105">
                            <span className="truncate">Create My Gallery</span>
                        </button>
                    </div> */}
                </div>
            </section>

            {lightboxOpen && selectedProperty !== null && (
                <div className="fixed inset-0 bg-black/60 z-50 flex flex-col items-center justify-center">
                    <button
                        onClick={closeLightbox}
                        className="absolute cursor-pointer top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors z-60"
                    >
                        <X />
                    </button>
                    <button
                        onClick={prevImage}
                        className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-60"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-60"
                    >
                        <ChevronRight />
                    </button>
                    <div className="relative max-w-5xl max-h-[80vh] p-4 flex flex-col items-center">
                        <img
                            src={properties[selectedProperty].images[currentImageIndex]}
                            alt={`${properties[selectedProperty].title} - Image ${currentImageIndex + 1}`}
                            className="max-w-full max-h-full object-contain mb-4"
                        />
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto">
                        {properties[selectedProperty].images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-20 h-20 object-cover cursor-pointer rounded border-2 ${index === currentImageIndex ? 'border-white' : 'border-gray-500'}`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
