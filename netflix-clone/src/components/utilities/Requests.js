const API_KEY = "7611fcf5e9605dea8ffd4be76f8f3aa6";

const requests = {
  fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
  fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
  fetchRomantic: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
  fetchNewRelease: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchNetflixPopular: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_networks=213&language=en-US`,
  fetchKidsFamily: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751&language=en-US`,
  fetchHollywood: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_companies=4&language=en-US`,
  fetchArabicMoviesTV: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=ar&language=en-US`,
  fetchActionThriller: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28,53&language=en-US`,
  fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
  fetchExciting: `discover/movie?api_key=${API_KEY}&with_keywords=exciting&language=en-US`,
  fetchFamilyAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US`,
  fetchFamilyComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35,10751&language=en-US`,
  fetchSciFiFantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878,14&language=en-US`,
};

export default requests;
