const fetchEvents = async (keyword) => {
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=mmsBfHd9j3ILnRlZ21Q1GxO06NY8IVJk&keyword=${keyword}`,{mode:'cors'});
      const data = await response.json();
      const code = data._embedded.attractions[0].id
      const eventResponse = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?attractionId=${code}&apikey=mmsBfHd9j3ILnRlZ21Q1GxO06NY8IVJk`,{mode:'cors'});
      const eventData = await eventResponse.json();

      console.log(eventData)
    
      return data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
};

export {fetchEvents}

