# Wall8 - Your Finance Manager

Wall8 is an AI-powered financial management platform designed to help you track, analyze, and optimize your spending with real-time insights. This project is built using **Next.js** and leverages modern web development practices to deliver a seamless user experience.

---

## Features

- **Transaction Management**: Add, edit, and delete transactions with ease.
- **Recurring Transactions**: Set up recurring transactions with customizable intervals.
- **Budget Tracking**: Monitor your monthly budget and get alerts when nearing limits.
- **AI-Powered Insights**: Receive automated financial insights and recommendations.
- **Multi-Account Support**: Manage multiple accounts and credit cards in one place.
- **Receipt Scanning**: Use AI to scan receipts and automatically populate transaction details.
- **Monthly Reports**: Get detailed monthly financial reports with categorized expenses.
- **Responsive Design**: Fully responsive and optimized for all devices.

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org), React, Tailwind CSS
- **Backend**: Prisma, PostgreSQL
- **Authentication**: Clerk
- **AI Integration**: Google Generative AI
- **Email Templates**: React Email Components
- **Deployment**: Vercel

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/wall8.git
   cd wall8
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_postgresql_database_url
   CLERK_API_KEY=your_clerk_api_key
   GEMINI_API_KEY=your_google_generative_ai_key
   ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Seed the database (optional):
   ```bash
   npm run seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
wall8/
├── app/                     # Next.js app directory
│   ├── (main)/              # Main application pages
│   ├── api/                 # API routes
│   ├── layout.js            # Root layout
│   ├── page.jsx             # Landing page
├── components/              # Reusable UI components
├── data/                    # Static data (e.g., categories, features)
├── actions/                 # Server-side actions (e.g., transactions, accounts)
├── lib/                     # Utility functions and libraries
├── prisma/                  # Prisma schema and migrations
├── public/                  # Static assets
├── styles/                  # Global styles
├── README.md                # Project documentation
└── package.json             # Project configuration
```

---

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run seed`: Seed the database with sample data.
- `npm run lint`: Run ESLint to check for code quality issues.

---

## Deployment

The easiest way to deploy Wall8 is to use [Vercel](https://vercel.com). Follow these steps:

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Add the required environment variables in the Vercel dashboard.
4. Deploy your application.

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://clerk.dev/docs)
- [React Email Components](https://react.email)

---

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- [Next.js](https://nextjs.org)
- [Prisma](https://www.prisma.io)
- [Clerk](https://clerk.dev)
- [Google Generative AI](https://ai.google/tools/)
- [Vercel](https://vercel.com)

---

## Contact

For any inquiries, please reach out to [Prithviraj](https://www.linkedin.com/in/prithviraj44/).
