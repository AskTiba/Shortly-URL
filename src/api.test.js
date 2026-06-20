import { describe, it, expect, vi, beforeEach } from 'vitest';
import { shortenUrl } from './api.js';

describe('shortenUrl', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should return shortened URL on successful API response', async () => {
    const mockResponse = { result_url: 'https://cleanuri.com/abc123' };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await shortenUrl('https://example.com/long/url');

    expect(result).toBe('https://cleanuri.com/abc123');
    expect(fetch).toHaveBeenCalledWith(
      'https://cleanuri.com/api/v1/shorten',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'url=https%3A%2F%2Fexample.com%2Flong%2Furl',
      })
    );
  });

  it('should throw when API returns an error response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ error: 'Invalid URL' }),
    });

    await expect(shortenUrl('not-a-url')).rejects.toThrow('Invalid URL');
  });

  it('should throw on network failure', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    await expect(shortenUrl('https://example.com')).rejects.toThrow('Unable to shorten URL');
  });

  it('should throw on non-ok HTTP response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 429,
    });

    await expect(shortenUrl('https://example.com')).rejects.toThrow('Unable to shorten URL');
  });

  it('should throw when URL is empty', async () => {
    await expect(shortenUrl('')).rejects.toThrow('Please enter a URL');
  });

  it('should throw when URL is just whitespace', async () => {
    await expect(shortenUrl('   ')).rejects.toThrow('Please enter a URL');
  });
});
