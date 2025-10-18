"use client";

import { useEffect, useRef } from "react";

import { type IMapsProps } from "./types";

import "./styles.css";

export function Map({
  longitude,
  latitude,
  zoom,
  showTooltip,
  tooltipText,
  tooltipPermanent,
}: IMapsProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Dynamically load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Add Leaflet CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);

      // Add Leaflet JS
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = () => {
        // @ts-ignore - Leaflet is loaded globally
        const L = window.L;

        const map = L.map(mapRef.current!).setView([latitude, longitude], zoom);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        const marker = L.marker([latitude, longitude]).addTo(map);
        if (showTooltip) {
          marker.bindTooltip(
            `
            <div style="padding: 8px; font-size: 14px;">
              <strong>Higher Level Studio</strong><br>
              <span style="color: #666;">${tooltipText}</span>
            </div>
          `,
            {
              permanent: tooltipPermanent,
              direction: "auto",
            },
          );
        }
      };
      document.head.appendChild(script);
    };

    loadLeaflet();
  }, [longitude, latitude]);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div ref={mapRef} className="h-96 w-full rounded-lg shadow-md"></div>
    </div>
  );
}
