import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // TEMP: log to confirm it works
    console.log("Interest form submission:", body);

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

