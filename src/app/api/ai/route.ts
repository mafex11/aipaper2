import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { text, prompt, userId } = await req.json();
  
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-ai/deepseek-r1-zero',
        messages: [{
          role: 'user',
          content: `${prompt}: ${text}`
        }]
      })
    });

    const data = await response.json();
    return NextResponse.json({ result: data.choices[0].message.content });
  } catch (error) {
    return NextResponse.json(
      { error: 'AI transformation failed' },
      { status: 500 }
    );
  }
}