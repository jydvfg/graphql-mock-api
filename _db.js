const games = [
    {
      id: "1",
      title: "The Legend of Zelda: Breath of the Wild",
      platform: ["Nintendo Switch"]
    },
    {
      id: "2",
      title: "Cyberpunk 2077",
      platform: ["PC", "PlayStation 4", "Xbox One"]
    },
    {
      id: "3",
      title: "Among Us",
      platform: ["PC", "Mobile"]
    },
    {
      id: "4",
      title: "Minecraft",
      platform: ["PC", "Mobile", "PlayStation", "Xbox"]
    },
    {
      id: "5",
      title: "Animal Crossing: New Horizons",
      platform: ["Nintendo Switch"]
    }
  ];
  
  const authors = [
    {
      id: "1",
      name: "John Doe",
      verified: true
    },
    {
      id: "2",
      name: "Jane Smith",
      verified: false
    },
    {
      id: "3",
      name: "Alice Johnson",
      verified: true
    }
  ];
  
   const reviews = [
    {
      id: "1",
      rating: 5,
      content: "Amazing game with beautiful open world.",
      author_id: "1",
      game_id: "1"
    },
    {
      id: "2",
      rating: 4,
      content: "Great story but lots of bugs.",
      author_id: "2",
      game_id: "2"
    },
    {
      id: "3",
      rating: 3,
      content: "Fun with friends but can get repetitive.",
      author_id: "3",
      game_id: "3"
    },
    {
      id: "4",
      rating: 5,
      content: "Endless possibilities and creativity.",
      author_id: "1",
      game_id: "4"
    },
    {
      id: "5",
      rating: 4,
      content: "Relaxing and charming.",
      author_id: "2",
      game_id: "5"
    },
    {
      id: "6",
      rating: 4,
      content: "Engaging but needs more content.",
      author_id: "3",
      game_id: "5"
    },
    {
      id: "7",
      rating: 2,
      content: "Overhyped and underdelivered.",
      author_id: "1",
      game_id: "2"
    }
  ];

  const  db = {games, authors, reviews};
  export default db;