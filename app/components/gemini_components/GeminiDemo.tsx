'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Ad } from '@/types/ad';

export default function GeminiDemo() {
  const [response, setResponse] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  const handleGenerate = async () => {
    setLoading(true);
    try {
        const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count }),
      });
      
      const data = await res.json();
      setResponse(data.results);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 space-y-4 max-w-4xl">
      <div className="space-y-2">
        <Label htmlFor="count">Number of items to generate</Label>
        <Input
          id="count"
          type="number"
          min="1"
          max="10"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value) || 1)}
          className="w-32"
        />
      </div>
      
      <Button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Content'}
      </Button>
      
      {response.length > 0 && (
        <div className="space-y-4">
          {response.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg bg-slate-50 space-y-2">
              <h3 className="font-bold text-lg">{item.headline}</h3>
              <p className="text-sm text-slate-600">{item.imageText}</p>
              <p>{item.introductoryText}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}