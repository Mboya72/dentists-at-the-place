# Dentists @ The Place — Dental Clinic Website

A modern, responsive dental clinic website built with **Next.js, React, TypeScript, and Tailwind CSS**. It helps patients explore dental services, meet the dentists, read testimonials, and request appointments.

## ✨ Features

* Responsive design for mobile, tablet, and desktop
* Modern dental-focused UI
* Responsive navigation with active links
* Dental services showcase
* Dentist profiles
* Patient testimonials
* Appointment request form
* Newsletter subscription
* Contact information and clinic details
* Dedicated About Us, Services, Dentists, and Testimonials pages
* Next.js API routes for forms

## 🛠️ Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* HTML5 / CSS3
* Next.js App Router
* Next.js Image Optimization

## 📁 Structure

```text
dentists-at-the-place/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   └── newsletter/
│   ├── aboutus/
│   ├── dentists/
│   ├── services/
│   ├── testimonials/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── navbar.tsx
├── public/
│   └── images & icons
├── package.json
├── next.config.ts
└── README.md
```

## 🚀 Getting Started

```bash
git clone <repository-url>
cd dentists-at-the-place
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

For production:

```bash
npm run build
npm start
```

## 📬 API Endpoints

### Appointment

```text
POST /api/contact
```

Handles appointment requests including patient details, service, dentist, date, and message.

### Newsletter

```text
POST /api/newsletter
```

Handles newsletter subscriptions.

## 🎨 Design

The website uses CSS variables for its brand colors, making the visual identity easy to customize.

```css
--color1: #ffffff;
--color2: #0399B0;
--color3: #01B3C4;
```

## 🖼️ Images

All website images are stored in the `public/` directory and can be referenced directly:

<Image src="/landingpage.jpg" alt="Dental clinic" fill />


Ensure all referenced images exist in `public/` to avoid 404 errors.

## 🔐 Environment Variables

If external services are added, store credentials in `.env.local` and never commit them to Git.

## 🚀 Deployment

The website is ready for deployment on platforms such as **Vercel**. Configure any required environment variables before deployment.

## 👨‍💻 Author

**Elvis Mboya**
Software Developer & Graphic Designer

Built for **Dentists @ The Place — Nairobi, Kenya**.

## 📄 License

This project is intended for the Dentists @ The Place website. Clinic branding and proprietary assets remain the property of their respective owners.
