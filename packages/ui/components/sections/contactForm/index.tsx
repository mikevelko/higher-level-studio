"use client";

import { useState } from "react";
import * as Form from "@radix-ui/react-form";

import { Button } from "../../ui/button";
import { type ButtonVariantProps } from "../../ui/button/types";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    typeOfService: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData(event.currentTarget);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        typeOfService: formData.get("typeOfService"),
        message: formData.get("message"),
      };

      // Send to Telegram bot
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          typeOfService: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form.Root className="w-full px-2" onSubmit={handleSubmit}>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full gap-8">
          <Form.Field name="name" className="w-full">
            <Form.Control asChild className="w-full">
              <input
                type="text"
                className="w-full rounded-lg border border-[var(--text-primary)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="Imię i nazwisko"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </Form.Control>
            <Form.Message className="w-full text-left" match="valueMissing">
              <div>Pole jest wymagane</div>
            </Form.Message>
          </Form.Field>

          <Form.Field name="email" className="w-full">
            <Form.Control asChild className="w-full">
              <input
                type="email"
                className="w-full rounded-lg border border-[var(--text-primary)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="Adres e-mail"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </Form.Control>
            <Form.Message className="w-full text-left" match="valueMissing">
              <div>Pole jest wymagane</div>
            </Form.Message>
            <Form.Message className="w-full text-left" match="typeMismatch">
              <div>Nieprawidłowy adres e-mail</div>
            </Form.Message>
          </Form.Field>
        </div>

        <Form.Field name="phone" className="w-full">
          <Form.Control asChild className="w-full">
            <input
              type="tel"
              pattern="[+]?[0-9\s\-\(\)]{6,20}"
              className="w-full rounded-lg border border-[var(--text-primary)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="Numer telefonu"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          </Form.Control>
          <Form.Message className="w-full text-left" match="valueMissing">
            <div>Pole jest wymagane</div>
          </Form.Message>
          <Form.Message className="w-full text-left" match="patternMismatch">
            <div>Nieprawidłowy numer telefonu</div>
          </Form.Message>
        </Form.Field>

        <Form.Field name="typeOfService" className="w-full">
          <Form.Control asChild className="w-full">
            <input
              type="text"
              className="w-full rounded-lg border border-[var(--text-primary)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="Wpisz nazwę usługi"
              value={formData.typeOfService}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  typeOfService: e.target.value,
                }))
              }
            />
          </Form.Control>
        </Form.Field>

        <Form.Field name="message" className="w-full">
          <Form.Control asChild className="w-full">
            <textarea
              className="min-h-[120px] w-full resize-none rounded-lg border border-[var(--text-primary)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="Wiadomość..."
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
            />
          </Form.Control>
        </Form.Field>

        <span className="text-left text-base">
          Administratorem Twoich danych osobowych jest HIGHER LEVEL STUDIO Sp. z
          o.o., ul. Określona 2, 03-633 Warszawa Warszawa, e-mail:
          kontakt@higherlevelstudio.pl . Dane są przetwarzane w celu obsługi
          przesłanego zapytania (art. 6 ust. 1 lit. a RODO). Dane podajesz
          dobrowolnie, ale są niezbędne do przetworzenia zapytania. Masz prawo
          dostępu do swoich danych, ich poprawiania, usunięcia, ograniczenia
          przetwarzania, cofnięcia zgody i wniesienia skargi do Prezesa UODO.
          Dane będą przechowywane do czasu zakończenia korespondencji lub
          maksymalnie 12 miesięcy. Nie przekazujemy danych innym podmiotom ani
          poza EOG. Klikając „Wyślij”, wyrażasz zgodę na przetwarzanie danych w
          powyższym zakresie.
        </span>

        <Form.Submit asChild>
          <Button
            variant={"primary" as ButtonVariantProps["variant"]}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Wysyłanie..." : "Wyślij"}
          </Button>
        </Form.Submit>

        {submitStatus === "success" && (
          <div className="text-sm text-green-500">
            Dziękujemy! Twoja wiadomość została wysłana.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="text-sm text-red-500">
            Wystąpił błąd podczas wysyłania. Spróbuj ponownie.
          </div>
        )}
      </div>
    </Form.Root>
  );
}
