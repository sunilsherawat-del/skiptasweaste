"use client";
import { useEffect } from "react";
import "animate.css";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wowjs").then((WOWModule) => {
        const wow = new WOWModule.WOW();
        wow.init();
      });
    }
  }, []);
}