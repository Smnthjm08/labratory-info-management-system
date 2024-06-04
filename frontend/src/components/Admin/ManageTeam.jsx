import React, { useEffect, useState } from 'react'
import axios from "axios"

const ManageTeam = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await axios.get("http://localhost:8800/api/users");
                setTeam(response.data)
            } catch (error) {
                console.error("Failed to fetch the data")
            }
        };
        fetchTeam();
    }, []);

    // const handleAddSignatureClick = (userId) => {
    //     navigate(`admin/add-signature/${userId}`);
    // };


    return (

        <div>
            <h2 className="text-xl font-semibold leading-7 text-gray-900">Manage Team</h2>
            <p className="mt-1 pb-20 text-base leading-6 text-gray-600">
                Only Admins have Access to this.
            </p>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-zinc-400 uppercase bg-stone-950 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {team.map(member => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <th scope="col" className="px-6 py-3">
                                    {member.id}
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {member.firstName}
                                </th>
                                <td class="px-6 py-4">
                                    {member.email}
                                </td>
                                <td class="px-6 py-4">
                                    {member.phone}
                                </td>
                                <td class="px-6 py-4">
                                    {member.roleId}
                                </td>
                                <td class="px-6 py-4">
                                    Active
                                </td>

                                {/* <button
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    onClick={() => handleAddSignatureClick(member.id)}
                                >
                                    Add Signature
                                </button> */}

                                <td class="flex items-center px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageTeam