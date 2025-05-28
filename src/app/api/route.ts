import {NextResponse} from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formattedData } = body;
    const res = await openai.post("", {
      model: "gpt-4.1-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: process.env.AI_INSTRUCTIONS,
        },
        {
          role: "user",
          content: [
            { type: "text", text: "Is this watch authentic?" },
            ...formattedData
          ],
        },
      ],
    });
    const result = JSON.parse(res?.data?.choices[0].message.content);
    return NextResponse.json(result);
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      {error: 'Internal server error'},
      {status: 500}
    );
  }
}

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions',
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.OPENAI_KEY}`,
  },
})
openai.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log(error.response)
    return Promise.reject(error);
  }
);
