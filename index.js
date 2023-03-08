function writeCards(namesArray, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      const thankYouMessage = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(thankYouMessage);
    }
  
    return thankYouMessages;
  }
  

