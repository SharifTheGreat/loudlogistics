export async function POST(request) {
  try {
    const formData = await request.formData();

    const response = await fetch("https://script.google.com/macros/s/AKfycbwRYKU2feRj0MlKTK6he_yM0CRzEjWWuE_rp7Pvdn-BKb456AQsJAbNqqJMgQ8UFRMokg/exec", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Google Script failed");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("API Error:", error);

    return new Response(
      JSON.stringify({ success: false }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}



