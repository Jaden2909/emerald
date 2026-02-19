"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // Add this import

const properties = [
  {
    title: "Emerald Rooms",
    slug: "rooms", // This creates /rooms
    location: "Kothanur Main Rd",
    tag: "Serviced Apartments",
    description: "Since 2018. Fully furnished 1 & 2 BHK units for daily, weekly, and monthly stays.",
    image: "/prop-suites.jpg"
  },
  {
    title: "Emerald Grand",
    slug: "grand", // This creates /grand
    location: "Byrathi",
    tag: "Rooms & Suites",
    description: "Corporate-grade luxury near Faith Diagnostic. Ideally suited for business travelers.",
    image: "/prop-grand.jpg"
  },
  {
    title: "Emerald Signature",
    slug: "signature", // This creates /signature
    location: "Kannur",
    tag: "Rooms & Apartments",
    description: "The peak of comfort on Hennur Airport Road. High-end interiors near the Airport.",
    image: "/prop-signature.jpg"
  }
];

// Inside your .map function, wrap the image div like this:
<Link href={`/${prop.slug}`}>
  <div className="relative aspect-[4/5] mb-8 overflow-hidden border border-white/5 cursor-pointer">
     {/* Keep your <img> tag here exactly as it was */}
  </div>
</Link>