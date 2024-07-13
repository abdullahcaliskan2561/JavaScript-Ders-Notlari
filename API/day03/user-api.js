const API_URL = ("https://668828a00bc7155dc01aa1b7.mockapi.io/api/v1");

const getAllUsers =async () => {
    const res = await fetch(`${API_URL}/users`)
    const data = await res.json();
    return data;
}

