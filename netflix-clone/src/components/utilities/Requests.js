const API_KEY = "7611fcf5e9605dea8ffd4be76f8f3aa6";

const requests = {
  fetchComedy: `discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
  fetchAction: `discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
  fetchRomantic: `discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
  fetchNewRelease: `movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchNetflixPopular: `discover/movie?api_key=${API_KEY}&with_networks=213&language=en-US`,
  fetchKidsFamily: `discover/movie?api_key=${API_KEY}&with_genres=10751&language=en-US`,
  fetchHollywood: `discover/movie?api_key=${API_KEY}&with_companies=4&language=en-US`,
  fetchArabicMoviesTV: `discover/movie?api_key=${API_KEY}&with_original_language=ar&language=en-US`,
  fetchActionThriller: `discover/movie?api_key=${API_KEY}&with_genres=28,53&language=en-US`,
  fetchHorror: `discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
  fetchExciting: `discover/movie?api_key=${API_KEY}&with_keywords=exciting&language=en-US`,
  fetchFamilyAnimation: `discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US`,
  fetchFamilyComedy: `discover/movie?api_key=${API_KEY}&with_genres=35,10751&language=en-US`,
  fetchSciFiFantasy: `discover/movie?api_key=${API_KEY}&with_genres=878,14&language=en-US`,
};

export default requests;
