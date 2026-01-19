const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:4000/api/v1';

export const api = {
    auth: {
        login: async (email: string, password: string) => {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) throw new Error('Login failed');
            return res.json();
        },
        register: async (data: any) => {
            const res = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error('Registration failed');
            return res.json();
        },
    },
    // Add other endpoints as needed
};
