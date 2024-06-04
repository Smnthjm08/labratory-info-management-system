import React from 'react';
import { useNavigate } from 'react-router-dom';

const DigitalSignature = () => {

    const navigate = useNavigate();

    const handleAddSignatureClick = () => {
        navigate('/admin/add-signature');
    };

    return (
        <div>

            <h2 className="text-xl font-semibold leading-7 text-gray-900">Digital Signatures</h2>
            <p className="mt-1 pb-20 text-base leading-6 text-gray-600">
                List of all the Digital Signatures
            </p>


            <div class="flex justify-end">
                <button type="button" onClick={handleAddSignatureClick} class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                    <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                    Add Signature
                </button>
            </div>
            <br />




            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-zinc-400 uppercase bg-stone-950 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                user-ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Last Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Updated Time
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Sign URL
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td class="px-6 py-4">
                                14
                            </td>
                            <td class="px-6 py-4">
                                Sumanth
                            </td>
                            <td class="px-6 py-4">
                                JM
                            </td>
                            <td class="px-6 py-4">
                                14:26
                            </td>
                            <td class="px-6 py-4">
                                dummyurl.com/img
                            </td>
                            <td class="flex items-center px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DigitalSignature