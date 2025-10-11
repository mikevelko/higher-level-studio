/* eslint-disable turbo/no-undeclared-env-vars */
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, typeOfService, message } = await request.json();

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      throw new Error("Telegram credentials not configured");
    }

    const telegramMessage = `
📧 Nowe zapytanie kontaktowe

👤 Imię i nazwisko: ${name}
📧 Email: ${email}
📞 Telefon: ${phone}
🔧 Usługa: ${typeOfService}
💬 Wiadomość: ${message}

⏰ Czas: ${new Date().toLocaleString("pl-PL")}
    `;

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: telegramMessage,
          parse_mode: "HTML",
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to send message to Telegram");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
