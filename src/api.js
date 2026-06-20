const API_URL = 'https://cleanuri.com/api/v1/shorten';

export async function shortenUrl(url) {
  const trimmed = url.trim();
  if (!trimmed) {
    throw new Error('Please enter a URL');
  }

  let response;
  try {
    response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `url=${encodeURIComponent(trimmed)}`,
    });
  } catch {
    throw new Error('Unable to shorten URL');
  }

  if (!response.ok) {
    throw new Error('Unable to shorten URL');
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data.result_url;
}
