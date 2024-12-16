# TargetfiT

**TargetfiT** is a web application designed to help fitness enthusiasts optimize their workout routines by targeting specific muscle groups with the right exercises. Whether you're aiming to build strength, increase endurance, or sculpt your physique, TargetfiT provides effective guides and instructions to help you reach your goals.

## Features

- **Targeted Muscle Training:** Focus on specific muscle groups with customized exercise routines.
- **Intuitive Layout:** Easily navigate through muscle groups and find exercises that fit your fitness needs.
- **Effective Guidance:** Step-by-step instructions, images, and videos to ensure proper form and technique for each exercise.
- **Community Support:** Engage with a community of fitness enthusiasts for tips, experiences, and encouragement.

## App Details

- **Name:** TargetfiT
- **Version:** 0.1.0
- **Tech Stack:**
  - **Frontend:** React, Next.js, Tailwind CSS, TypeScript
  - **Backend:** ExerciseDb API via RapidAPI
  - **Packages:** react-horizontal-scrolling-menu, react-icons, eslint, postcss

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/targetfit.git
   ```

2. Navigate into the project directory:

   ```bash
   cd targetfit
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`.

## Scripts

- `dev`: Start the development server.
- `build`: Build the production application.
- `start`: Start the production application.
- `lint`: Run ESLint checks.

## Technology Stack

- **Next.js**: React framework for building the app
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **TypeScript**: For type safety and better development experience
- **ExerciseDb RapidAPI**: For exercise data

## App Description

TargetfiT’s mission is to provide an easy-to-use platform for fitness enthusiasts of all levels. Whether you’re just starting your fitness journey or looking to fine-tune your training, we guide you through the most effective exercises for each muscle group.

Thank you for checking out TargetfiT—your partner in fitness training!

### RapidAPI and the API used in TargetfiT

**RapidAPI** is a platform that connects developers with thousands of APIs, making integration into apps easier. In **TargetfiT**, the **ExerciseDb API** is used to access a database of exercises categorized by muscle group, with instructions, images, and videos to help users perform effective and safe workouts.

### Example `.env` File

To use the ExerciseDb API, add your API key in a `.env` file:

```env
NEXT_PUBLIC_RAPIDAPI_KEY=your-rapidapi-key
NEXT_PUBLIC_RAPIDAPI_HOST=exercisedb.p.rapidapi.com
```

Replace `your-rapidapi-key` with the key you get from RapidAPI.

Here are the endpoints required to make requests to the **ExerciseDb API** used in the **TargetfiT** app:

### ExerciseDb API Endpoints

1. **Get all exercises**  
   Endpoint:

   ```
   https://exercisedb.p.rapidapi.com/exercises
   ```

2. **Get exercises by muscle group**  
   Endpoint:

   ```
   https://exercisedb.p.rapidapi.com/exercises/bodyPart/{muscleGroup}
   ```

   Replace `{muscleGroup}` with the desired muscle group, such as `chest`, `back`, `arms`, `legs`, etc.

3. **Get exercises by equipment**  
   Endpoint:

   ```
   https://exercisedb.p.rapidapi.com/exercises/equipment/{equipmentType}
   ```

   Replace `{equipmentType}` with the equipment name, such as `dumbbell`, `barbell`, `machine`, etc.

4. **Get exercises by target muscle**  
   Endpoint:

   ```
   https://exercisedb.p.rapidapi.com/exercises/target/{targetMuscle}
   ```

   Replace `{targetMuscle}` with the specific muscle you want to target, like `biceps`, `triceps`, etc.

5. **Get exercise by ID**  
   Endpoint:
   ```
   https://exercisedb.p.rapidapi.com/exercises/exercise/{exerciseId}
   ```
   Replace `{exerciseId}` with the ID of the specific exercise.

### Example Request Headers

For all of these requests, you'll need to include the following headers to authenticate the API calls:

```javascript
const headers = {
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
};
```

These headers authenticate the request using the API key stored in your `.env` file.

### ExerciseDb API Information

The **ExerciseDb API** is used to fetch various exercise-related data, such as exercise lists by body part, equipment, and target muscles. The base URL and API key are configured as follows:

```javascript
const API_KEY_EXERCISE = process.env.NEXT_PUBLIC_API_KEY_EXERCISE;
const apiHost_exercisedb = 'exercisedb.p.rapidapi.com';
export const BASEURL_EXERCISEDB = 'https://exercisedb.p.rapidapi.com';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-RapidAPI-Key': API_KEY_EXERCISE as string,
    'x-RapidAPI-Host': apiHost_exercisedb as string,
  },
};
```

#### ExerciseDb Endpoints

- **Get Body Part List**  
  Endpoint:

  ```
  /exercises/bodyPartList
  ```

- **Get Equipment List**  
  Endpoint:

  ```
  /exercises/equipmentList
  ```

- **Get Target Muscle List**  
  Endpoint:

  ```
  /exercises/targetList
  ```

- **Get Exercise Detail by ID**  
  Endpoint:
  ```
  /exercises/exercise
  ```

### YouTube Search API Information

The **YouTube Search and Download API** is used to fetch related video content for each exercise. The base URL and API key are configured as follows:

```javascript
const apiHost_youtubeSearch = 'youtube-search-and-download.p.rapidapi.com';
export const BASEURL_youtubeSearch =
  'https://youtube-search-and-download.p.rapidapi.com';

export const youtubeSearchOptions = {
  method: 'GET',
  headers: {
    'x-RapidAPI-Key': API_KEY_EXERCISE as string,
    'x-RapidAPI-Host': apiHost_youtubeSearch as string,
  },
};
```

#### YouTube Search Endpoint

- **Search for Exercise Videos**  
  Endpoint:
  ```
  /search?query={exerciseName} exercise
  ```

This endpoint allows you to search for exercise-related videos on YouTube by appending the exercise name to the query.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
