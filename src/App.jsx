import './App.css'
import MainLayout from "./layouts/MainLayout.jsx";
import {useEffect, useMemo} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


function Hero() {
    return (
        <section id="home" className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
                <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
                    <h1 className="text-xl font-extrabold sm:text-5xl">
                        Optimalkan Bisnismu dengan
                        <strong className="font-extrabold text-teal-700 sm:block"> Solusi ERP Terbaik </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Integrasikan semua aspek bisnis Anda dalam satu platform yang mudah digunakan. Atur inventaris
                        hingga keuangan dengan lancar dan
                        efisien.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button
                            className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
                            onClick={() => loginPopupDialog.showModal()}
                        >
                            Mulai Sekarang
                        </button>

                        <a
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
                            href="#about-us"
                        >
                            Pelajari Lebih Lanjut
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

function AboutUs() {
    const features = useMemo(() => (
        [
            {
                "title": "Mencatat Barang Masuk/Keluar",
                "description": "Pantau dan kelola inventaris dengan mudah, memastikan semua barang tercatat dengan akurat dan real-time."
            },
            {
                "title": "Mencatat Hasil Keuntungan",
                "description": "Catat dan analisa keuntungan bisnis Anda dengan detail, membantu Anda memahami performa keuangan dengan lebih baik."
            },
            {
                "title": "Analisa Hasil Penjualan dengan CHART",
                "description": "Visualisasikan data penjualan Anda menggunakan chart yang interaktif dan mudah dipahami, memudahkan pengambilan keputusan."
            },
            {
                "title": "Support 7x24 Jam",
                "description": "Tim dukungan pelanggan kami siap membantu Anda kapan saja, memastikan bisnis Anda berjalan lancar tanpa hambatan."
            },
            {
                "title": "Export Data ke Excel",
                "description": "Mudahkan pengelolaan dan analisis data dengan fitur export ke Excel, memungkinkan Anda untuk memproses data lebih lanjut sesuai kebutuhan."
            },
            {
                "title": "AI Prediksi Penghasilan",
                "description": "Gunakan teknologi AI untuk memprediksi penghasilan bisnis Anda, membantu Anda merencanakan strategi yang lebih efektif dan mengoptimalkan pendapatan."
            }
        ]
    ), []);

    return (
        <section id="about-us" className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">Fitur Uggulan</h2>

                    <p className="mt-4 text-gray-300">
                        Dengan fitur-fitur canggih dan intuitif, solusi ERP kami dirancang untuk membantu Anda mengelola
                        setiap aspek bisnis dengan lebih mudah dan efisien. Dari pencatatan inventaris hingga analisis
                        penjualan menggunakan teknologi AI, semuanya ada dalam genggaman Anda.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div data-aos="fade-up" data-aos-delay={index + 100} key={feature.title} className="flex items-start gap-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                              <svg
                                  className="h-5 w-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                              </svg>
                            </span>
                            <div>
                                <h2 className="text-lg font-bold">{feature.title}</h2>
                                <p className="mt-1 text-sm text-gray-300">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Pricing() {
    const pricings = useMemo(() => (
        [
            {
                "title": "Basic",
                "price": 'Rp 49.000',
                "description": "",
                "features": [
                    "Mencatat Barang Keluar",
                    "Mencatat Barang Masuk",
                    "Mencatat Keuntungan"
                ]
            },
            {
                "title": "Business",
                "price": 'Rp84.900',
                "description": "",
                "features": [
                    "Fitur Basic",
                    "Laporan hasil penjualan",
                    "Support 24/7"
                ]
            },
            {
                "title": "Entrepreneur",
                "price": 'Rp99.000',
                "description": "",
                "features": [
                    "Fitur Business",
                    "Export laporan ke Excel",
                    "AI Prediksi penghasilan"
                ]
            }
        ]
    ), []);

    return (
        <div id="pricing" className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
                {
                    pricings.map((pricing) => (
                        <div key={pricing.title} data-aos="fade-up"
                             className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="p-6 sm:px-8">
                                <h2 className="text-lg font-medium text-gray-900">
                                    <span className="sr-only">Paket</span>
                                    {pricing.title}
                                </h2>

                                <p className="mt-2 text-gray-700">{pricing.description}</p>

                                <p className="mt-2 sm:mt-4">
                                    <strong
                                        className="text-3xl font-bold text-gray-900 sm:text-4xl">{pricing.price}</strong>

                                    <span className="text-sm font-medium text-gray-700">/bulan</span>
                                </p>

                                <a
                                    className="mt-4 block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 sm:mt-6"
                                    href="#"
                                >
                                    Pilih Paket
                                </a>
                            </div>

                            <div className="p-6 sm:px-8">
                                <p className="text-lg font-medium text-gray-900 sm:text-xl">Fitur tersedia:</p>

                                <ul className="mt-2 space-y-2 sm:mt-4">
                                    {pricing.features.map((feature) => (
                                        <li data-aos="fade-up" key={feature} className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5 text-teal-700"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M4.5 12.75l6 6 9-13.5"/>
                                            </svg>

                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

function ContactUs() {
    return (
        <section id="contact-us" className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg">
                            Kami memahami bahwa setiap bisnis memiliki kebutuhan yang unik. Tim kami siap memberikan
                            solusi terbaik dan menjawab semua pertanyaan Anda. Jangan ragu untuk menghubungi kami kapan
                            saja.
                        </p>

                        <div className="mt-8">
                            <a href="#" className="text-2xl font-bold text-teal-600">+62 123 456 789</a>
                            <div className="">contohemail@email.com</div>
                            <address className="mt-2 not-italic">Jl. Contoh No. 123, Jakarta, Indonesia</address>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="#" className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Nama Lengkap</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Nama Lengkap"
                                    type="text"
                                    id="name"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Nomor Telepon</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Nomor Telepon"
                                        type="tel"
                                        id="phone"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Pesan</label>

                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Pesan"
                                    rows="8"
                                    id="message"
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Kirim Pesan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <MainLayout>
            <Hero/>
            <AboutUs/>
            <Pricing/>
            <ContactUs/>
        </MainLayout>
    );
}

export default App
