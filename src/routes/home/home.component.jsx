import AnimeList from "../../components/anime-list/anime-list.component";

const Home = () => {
  const media = [
    {
      id: 1,
      title: {
        romaji: "Cowboy Bebop",
        english: "Cowboy Bebop",
      },
      coverImage: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png",
        color: "#f1785d",
      },
    },
    {
      id: 5,
      title: {
        romaji: "Cowboy Bebop: Tengoku no Tobira",
        english: "Cowboy Bebop: The Movie - Knockin' on Heaven's Door",
      },
      coverImage: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b5-Zs2cbrglTu67.png",
        color: "#ff3500",
      },
    },
    {
      id: 6,
      title: {
        romaji: "TRIGUN",
        english: "Trigun",
      },
      coverImage: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6-Zzun7PHNNgPt.jpg",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6-Zzun7PHNNgPt.jpg",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx6-Zzun7PHNNgPt.jpg",
        color: "#f1e4c9",
      },
    },
    {
      id: 7,
      title: {
        romaji: "Witch Hunter ROBIN",
        english: "Witch Hunter ROBIN",
      },
      coverImage: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx7-6uh1fPvbgS9t.png",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx7-6uh1fPvbgS9t.png",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx7-6uh1fPvbgS9t.png",
        color: "#e4935d",
      },
    },
    {
      id: 8,
      title: {
        romaji: "Bouken Ou Beet",
        english: "Beet the Vandel Buster",
      },
      coverImage: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b8-ReS3TwSgrDDi.jpg",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b8-ReS3TwSgrDDi.jpg",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b8-ReS3TwSgrDDi.jpg",
        color: "#e46b50",
      },
    },
    {
      id: 15,
      title: {
        romaji: "Eyeshield 21",
        english: "Eyeshield 21",
      },
      coverImage: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx15-A4F2t0TgWoi4.png",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx15-A4F2t0TgWoi4.png",
        color: "#d6bb1a",
      },
    },
    {
      id: 16,
      title: {
        romaji: "Hachimitsu to Clover",
        english: "Honey and Clover",
      },
      coverImage: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16-5fJZ2Sy2ThRA.jpg",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16-5fJZ2Sy2ThRA.jpg",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx16-5fJZ2Sy2ThRA.jpg",
        color: "#aee486",
      },
    },
    {
      id: 17,
      title: {
        romaji: "Hungry Heart: Wild Striker",
        english: null,
      },
      coverImage: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx17-6kqIbdUk3dgi.png",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx17-6kqIbdUk3dgi.png",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx17-6kqIbdUk3dgi.png",
        color: "#43aee4",
      },
    },
    {
      id: 18,
      title: {
        romaji: "Initial D FOURTH STAGE",
        english: "Initial D 4th Stage",
      },
      coverImage: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b18-r7IirVmwP89u.jpg",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b18-r7IirVmwP89u.jpg",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b18-r7IirVmwP89u.jpg",
        color: "#e46b50",
      },
    },
    {
      id: 19,
      title: {
        romaji: "MONSTER",
        english: "Monster",
      },
      coverImage: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx19-ham53gnijfiN.jpg",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx19-ham53gnijfiN.jpg",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx19-ham53gnijfiN.jpg",
        color: null,
      },
    },
  ];
  return (
      <AnimeList animeList={media} />
  );
};

export default Home;
