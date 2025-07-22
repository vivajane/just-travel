import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  const body = await request.json();
  const { email, amount } = body;

  try {
    const response = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email,
        amount ,
        callback_url : 'http://localhost:3000/'
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const { authorization_url } = response.data.data;
    return NextResponse.json({ url: authorization_url });
  } catch (error) {
    console.error(error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Payment initialization failed' },
      { status: 500 }
    );
  }
}
