import axios from "axios"
import { useState } from "react"

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic here
        axios.post('http://localhost:3000/login',
            { email, password },
            {
                withCredentials: true, // This allows cookies to be sent and received
            }
        )
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-gray-500 text-black"
                />
            </div>
            <div>
                <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-gray-500 text-black"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:border-gray-500"
            >
                Login
            </button>
        </form>
    )
}

