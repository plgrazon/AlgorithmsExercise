const canTwoMoviesFillFlight = (flightLength, movieLengths) => {
  const store = {};
  for (let i = 0; i < movieLengths.length; i++) {
    let firstMovie = movieLengths[i];
    if (store[flightLength - firstMovie]) {
      return true;
    }
    store[firstMovie] = true;
  }

  return false;
}

// another solution:

const canTwoMoviesFillFlightAgain = (flightLength, movieLengths) => {
  const moviesSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    let firstMovie = movieLengths[i];
    let secondMovie = flightLength - firstMovie;
    if (moviesSeen.has(secondMovie)) {
      return true;
    }
    moviesSeen.add(firstMovie);
  }
  return false;
}

/*
Time complexity: O(n)
Space complexity: O(n)
*/
