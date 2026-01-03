VibeFlixGPT – Project Overview
- Initial Setup
- Created React App (using Create React App / Vite)
- Configured TailwindCSS
- Navigation using react-router-dom
- Authentication using firebase
- Implement Sign In/Sign Up user API
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update store with movies Data
- Planning for MainContainer & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing with Tailwind CSS
- usePopularMovies Custom hook


Features
 - Authentication
 - Sign In / Sign Up Form
 - Redirect to Browse Page after successful login

Browse Page (After Authentication)
 - Header
 - Main Movie Section
    - Background Trailer
    - Title & Description
    - Movie Suggestions
        - Multiple Movie Lists (category-wise, e.g., Trending, Top Rated, etc.)

GPT Integration (VibeFlixGPT)
 - Smart Search Bar
 - GPT-powered Movie Suggestions based on:

    
