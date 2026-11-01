# AANGAN FURNITURE (आँगन फर्नीचर) — Official Website & Catalogue

> **AANGAN FURNITURE — रिश्तों का अपना आँगन।**  
> **Location:** Plot No. 149-B, Karni Vatika-2nd, Sirsi, Jaipur, Rajasthan – 302041, India  
> **Founder:** Pankaj Jangir (+91 86903 80190)  
> **Director:** Prem Chand Jangid (+91 79763 90721)  
> **Official Domain:** [https://www.aanganfurniture.in](https://www.aanganfurniture.in)

---

## 1. Overview

This repository contains the official business catalogue and custom furniture enquiry website for **AANGAN FURNITURE**, Jaipur. Built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS**, **React Router**, and **Lucide Icons**, it is designed as a fast, mobile-first, SEO-friendly digital catalogue that connects customers directly via **WhatsApp** (`918690380190`) and structured enquiry forms.

---

## 2. Exact Local Run & Production Build Commands

### Prerequisites
- Node.js `v18+` (or `v20+` recommended)
- `npm`

### Install Dependencies
```bash
npm install
```

### Run Development Server (Port 3000)
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### Run Unit Tests
```bash
npx --yes tsx --test src/utils/catalogueLogic.test.ts
```

### Type-Check & Lint
```bash
npm run lint
```

### Build for Production
```bash
npm run build
```
This outputs the optimized static production bundle into the `dist/` folder.

### Preview Production Build Locally
```bash
npm run preview
```

---

## 3. How to Manage Products & Brand Settings

All business details, phone numbers, WhatsApp templates, and catalogue items are centralized so you never need to edit multiple components:

1. **Brand & Contact Configuration (`src/config/brand.ts`)**:
   - Edit phone numbers, WhatsApp number (`primaryWhatsappNumber: '918690380190'`), address, business hours, and default WhatsApp message templates in one place.
2. **Product Catalogue (`src/data/products.ts`)**:
   - Add, edit, or hide products inside the `PRODUCTS` array.
   - Set `displayStatus: 'active'` or `'hidden'` to toggle visibility.
   - Set `featured: true` to show an item on the Homepage Featured section.
   - Set `isSampleData: false` once you replace a demonstration item with confirmed studio specifications.
3. **Categories (`src/data/categories.ts`)**:
   - Manage the 7 primary categories (`Living Room`, `Bedroom`, `Dining`, `Storage`, `Study and Office`, `Special Collection`, `Custom Furniture`) and their subcategories.

---

## 4. GitHub Deployment Instructions

1. Initialize Git (if not already initialized) and commit your project:
   ```bash
   git init
   git add .
   git commit -m "Initial production release of AANGAN FURNITURE website"
   ```
2. Create a new repository on GitHub (for example, `aangan-furniture-website`).
3. Link and push your local branch to GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/aangan-furniture-website.git
   git push -u origin main
   ```

---

## 5. Vercel Deployment Instructions

1. Go to [https://vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New... → Project** and import your `aangan-furniture-website` repository.
3. Verify the build settings (Vercel detects Vite automatically):
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.
5. Note: `vercel.json` is already included in the root directory so that all clean URLs (`/catalogue`, `/categories`, `/custom-furniture`, `/gallery`, `/about`, `/contact`, `/product/*`) route properly on refresh.

---

## 6. GoDaddy Domain (`aanganfurniture.in`) Connection Instructions

To connect your GoDaddy domain **`aanganfurniture.in`** and **`www.aanganfurniture.in`** to your Vercel deployment:

1. Open your project in the **Vercel Dashboard** → **Settings** → **Domains**.
2. Type `aanganfurniture.in` and click **Add** (choose the option to add both `aanganfurniture.in` and redirect to `www.aanganfurniture.in`, or vice versa).
3. Log in to your **GoDaddy Domain Control Center** → select **aanganfurniture.in** → click **DNS / Manage Zones**.
4. Add or update the following DNS records as shown in your Vercel Domains panel:
   - **A Record (Root Domain):**
     - **Type:** `A`
     - **Name / Host:** `@`
     - **Value / Points to:** `76.76.21.21`
     - **TTL:** `600 seconds` (or Default)
   - **CNAME Record (`www` Subdomain):**
     - **Type:** `CNAME`
     - **Name / Host:** `www`
     - **Value / Points to:** `cname.vercel-dns.com`
     - **TTL:** `1 Hour` (or Default)
5. Save the DNS records in GoDaddy. SSL certificates (`https://www.aanganfurniture.in`) are provisioned automatically by Vercel within 5–30 minutes once DNS propagation completes.
