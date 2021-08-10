export const loginCheck = async (
  username,
  password,
  grant_type,
  client_secret,
  client_id
) => {
  const url = "https://soal.staging.id/oauth/token";
  const data = {
    username,
    password,
    grant_type,
    client_secret,
    client_id,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
