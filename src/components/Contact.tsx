import React, { useState, FormEvent } from 'react';

export default function Contact() {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResult('');
    
    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '795ba1e4-93b4-4885-a667-a726cebad788');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        (event.target as HTMLFormElement).reset();
      } else {
        console.error('Error:', data);
        setResult(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('Failed to submit form');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Submit Form'}
        </button>
      </form>
      
      {result && (
        <p className={`mt-4 text-center ${
          result.includes('Successfully') ? 'text-green-600' : 'text-red-600'
        }`}>
          {result}
        </p>
      )}
    </div>
  );
}