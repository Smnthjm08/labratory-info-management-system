import React, { useState } from 'react';
import axios from 'axios';

const NewPatient = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dob: '',
        age: '',
        gender: '',
        bloodGroup: '',
        emergencyContact: '',
        relation: '',
        streetAddress: '',
        city: '',
        state: '',
        pin: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            const response = await axios.post('http://localhost:8800/api/patients/register', formData);
            setSuccessMessage(response.data.message);
        } catch (error) {
            setLoading(false);
            if (error.response) {
                console.error('Error response:', error.response.data);
                setErrors(error.response.data);
            } else {
                console.error('Error message:', error.message);
            }
        }
        setLoading(false);
    };

    return (
        <div className='px-30 pt-5'>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="pb-12">
                        <h2 className="text-xl font-semibold leading-7 text-gray-900">New Patient Registration</h2>
                        {successMessage && <p>{successMessage}</p>}
                        <p className="mt-1 text-base leading-6 text-gray-600">
                            This information will not be shared with anyone.
                        </p>
                        <br />

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="first-name"
                                        autoComplete="given-name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="last-name"
                                        autoComplete="family-name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                                    Phone Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        id="phone-number"
                                        autoComplete="tel"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                                    Date of Birth (DD/MM/YYYY)
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="dob"
                                        id="dob"
                                        autoComplete="bday"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        placeholder="YYYY-MM-DD"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                            <div className="sm:col-span-1">
                                <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                                    Age
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="age"
                                        id="age"
                                        autoComplete="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                                    Gender
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="gender"
                                        name="gender"
                                        autoComplete="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Select</option>
                                        <option value="MALE">MALE</option>
                                        <option value="FEMALE">FEMALE</option>
                                        <option value="PREFERNOTTOSAY">Prefer Not to Say</option>
                                    </select>

                                </div>
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="blood-group" className="block text-sm font-medium leading-6 text-gray-900">
                                    Blood Group
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="blood-group"
                                        name="bloodGroup"
                                        autoComplete="blood-group"
                                        value={formData.bloodGroup}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >

                                        <option >Select</option>
                                        <option value="A_POS">A+</option>
                                        <option value="A_NEG">A-</option>
                                        <option value="B_POS">B+</option>
                                        <option value="B_NEG">B-</option>
                                        <option value="AB_POS">AB+</option>
                                        <option value="AB_NEG">AB-</option>
                                        <option value="O_POS">O+</option>
                                        <option value="O_NEG">O-</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="emergency-contact" className="block text-sm font-medium leading-6 text-gray-900">
                                    Emergency Contact Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="emergencyContact"
                                        id="emergency-contact"
                                        autoComplete="tel"
                                        value={formData.emergencyContact}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="relation" className="block text-sm font-medium leading-6 text-gray-900">
                                    Relation with Patient
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="relation"
                                        name="relation"
                                        autoComplete="relation"
                                        value={formData.relation}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Select</option>
                                        <option>Parents</option>
                                        <option>Spouse</option>
                                        <option>Guardian</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="streetAddress"
                                        id="street-address"
                                        autoComplete="street-address"
                                        value={formData.streetAddress}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    State
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        autoComplete="address-level1"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="pin"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        value={formData.pin}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* </div> */}


                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                disabled={loading}
                            >
                                {loading ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                        {Object.keys(errors).length > 0 && (
                            <div className="mt-4">
                                <ul>
                                    {Object.keys(errors).map((key) => (
                                        <li key={key} className="text-red-500">{errors[key]}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NewPatient;

