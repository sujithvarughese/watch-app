import {NextResponse} from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {messages} = body;

    if (!messages) {
      return NextResponse.json(
        {error: 'Messages are required'},
        {status: 400}
      );
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      {error: 'Internal server error'},
      {status: 500}
    );
  }
}