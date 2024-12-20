# TargetFit

**Version:** 0.1.0

## Description

TargetFit is a modern fitness application designed to help users optimize their workout routines. The platform provides targeted muscle training exercises and resources to empower fitness enthusiasts of all levels. Users can browse a rich database of exercises, each designed to focus on specific muscle groups, and access valuable tools to maximize their fitness goals efficiently and safely.

---

## Features

- **Dynamic Image Support:** Leveraging Next.js `Image` component for optimized image loading.
- **Suspense Support:** Uses React `Suspense` for smooth and responsive loading states.
- **Dark Mode:** Tailwind CSS-powered theming for better user experience.
- **Targeted Exercises:** Focused content to help users train specific muscle groups effectively.

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or later)
- **NPM** or **Yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project folder:
   ```bash
   cd targetfit
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

- Development mode:
  ```bash
  npm run dev
  ```
- Build for production:
  ```bash
  npm run build
  ```
- Start the production server:
  ```bash
  npm start
  ```

---

## API Integration

### API Keys

- **Private Keys:** Keep sensitive keys in environment variables using `.env.local` files.
- **Public Keys:** Use `NEXT_PUBLIC_` prefix for keys that must be exposed in the browser.

Example of using an API key:

```javascript
const API_KEY_EXERCISE = process.env.NEXT_PUBLIC_API_KEY_EXERCISE;
```

### ExerciseDB API

- **Base URL:** `https://exercisedb.p.rapidapi.com`
- **Headers:**
  ```javascript
  const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-RapidAPI-Key': API_KEY_EXERCISE,
      'x-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  };
  ```

#### Endpoints

1. **Body Part List:** `/exercises/bodyPartList`
2. **Equipment List:** `/exercises/equipmentList`
3. **Target Muscle List:** `/exercises/targetList`
4. **Exercise Detail:** `/exercises/exercise`

### YouTube Search and Download API

- **Base URL:** `https://youtube-search-and-download.p.rapidapi.com`
- **Headers:**
  ```javascript
  const youtubeSearchOptions = {
    method: 'GET',
    headers: {
      'x-RapidAPI-Key': API_KEY_EXERCISE,
      'x-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
  };
  ```

#### Endpoint for YouTube Exercise Search

- **Search:** `/search?query=<exerciseName> exercise`
  ```javascript
  export const endpointYTSD = (exerciseName) => `/search?query=${exerciseName} exercise`;
  ```

---

## Dependencies

### Production

- `next` (v14.2.13)
- `react` (v18)
- `react-dom` (v18)
- `react-horizontal-scrolling-menu` (v7.1.8)
- `react-icons` (v5.3.0)

### Development

- `@types/node` (v20)
- `@types/react` (v18)
- `@types/react-dom` (v18)
- `eslint` (v8)
- `eslint-config-next` (v14.2.12)
- `typescript` (v5)
- `tailwindcss` (v3.4.13)
- `postcss` (v8.4.47)
- `autoprefixer` (v10.4.20)

---

## File Structure

- **Components:** All reusable components.
- **Pages:** Application routing with Next.js.
- **Public:** Static assets like images.
- **Styles:** Tailwind CSS configuration and global styles.

---
Remember to use your own rapidapi keys:
.env.local example:

# Environment Variables for TargetFit

# Public API Key for ExerciseDB
NEXT_PUBLIC_API_KEY_EXERCISE=your_exercisedb_api_key_here

# API Host for ExerciseDB
NEXT_PUBLIC_API_HOST_EXERCISEDB=exercisedb.p.rapidapi.com

# Base URL for ExerciseDB
NEXT_PUBLIC_BASEURL_EXERCISEDB=https://exercisedb.p.rapidapi.com

# Public API Key for YouTube Search and Download
NEXT_PUBLIC_API_KEY_YOUTUBE=your_youtube_api_key_here

# API Host for YouTube Search and Download
NEXT_PUBLIC_API_HOST_YOUTUBE=youtube-search-and-download.p.rapidapi.com

# Base URL for YouTube Search and Download
NEXT_PUBLIC_BASEURL_YOUTUBE=https://youtube-search-and-download.p.rapidapi.com

## License

This project is private and is not licensed for public distribution.

---

##
