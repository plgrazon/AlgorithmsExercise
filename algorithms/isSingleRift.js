const isSingleRift = (half1, half2, shuffledDeck) => {
  let half1Index = 0;
  let half2Index = 0;
  let half1Len = half1.length;
  let half2Len = half2.length;

  for (let i = 0; i < shuffledDeck.length; i++) {
    let currentCard = shuffledDeck[i];

    if (half1Index < half1Len && half1[half1Index] === currentCard) {
      half1Index++;
    } else if (half2Index < half2Len && half2[half2Index] === currentCard) {
      half2Index++;
    } else {
      return false;
    }
  }
  return true;
}
