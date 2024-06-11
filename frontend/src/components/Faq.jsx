import React from 'react'

const Faq = () => {
    return (
        <div><section class="bg-[#ffffff] text-gray-900 py-32 min-h-screen">
            <div class="container flex flex-col  p-4 mx-auto md:p-8">
                <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary class="py-2 outline-none cursor-pointer focus:underline">What is LIMS software?</summary>
                        <div class="px-4 pb-4">
                            <p>LIMS (Laboratory Information Management System) software is a tool designed to manage, track, and store information related to laboratory operations and experiments.</p>
                        </div>
                    </details>
                    <details>
                        <summary class="py-2 outline-none cursor-pointer focus:underline">Who can benefit from using LIMS software?</summary>
                        <div class="px-4 pb-4">
                            <p>Laboratories across various industries, including healthcare, pharmaceuticals, environmental testing, food and beverage, and academic research, can benefit from using LIMS software.
                            </p>
                        </div>
                    </details>
                    <details>
                        <summary class="py-2 outline-none cursor-pointer focus:underline">What are the main features of LIMS software?</summary>
                        <div class="px-4 pb-4">
                            <p>Sample tracking, data management, workflow automation, compliance management, inventory management, reporting and analytics, and integration with laboratory instruments.</p>
                        </div>
                    </details>
                    <details>
                        <summary class="py-2 outline-none cursor-pointer focus:underline">What are the system requirements for installing LIMS software?</summary>
                        <div class="px-4 pb-4">
                            <p>The specific system requirements can vary, but generally, LIMS software requires a modern operating system (Windows, macOS, or Linux), a database server (such as PostgreSQL or MySQL), and sufficient RAM and disk space to handle laboratory data.<a href="" class="underline">example@gmail.com</a> for assistance.</p>
                        </div>
                    </details>
                    <details>
                        <summary class="py-2 outline-none cursor-pointer focus:underline">Can LIMS software integrate with other laboratory instruments?</summary>
                        <div class="px-4 pb-4">
                            <p>Yes, most LIMS software can integrate with various laboratory instruments through APIs or custom connectors to automate data collection and ensure accuracy.</p>
                        </div>
                    </details>
                    <details>
                        <summary class="py-2 outline-none cursor-pointer focus:underline">What is your customer support contact?</summary>
                        <div class="px-4 pb-4">
                            <p>If you have any questions, concerns, or need assistance, you can reach our customer support team at 9911083755 during our business hours, Monday to Saturday from 10 am to 6 pm. You can also contact us via email at <a href="" class="underline">example@gmail.com</a>.</p>
                        </div>
                    </details>
                    <details>
                        <summary class="py-2 outline-none cursor-pointer focus:underline">What are your terms and conditions?</summary>
                        <div class="px-4 pb-4">
                            <p>You can find our detailed terms and conditions by visiting our
                                <a href="" class="underline">Terms of Service</a>
                                page on our website. It includes information about our policies, user guidelines, and more.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Faq