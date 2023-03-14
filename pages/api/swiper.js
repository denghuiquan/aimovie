import { baseURL as url } from '@/axiosConfig'

export default function swiper (req, res) {
  res.status(200).json([
    {
      id: 1,
      title: 'Event-Sized Episode!',
      description:
        "Paul Scheer and Steve Wacker are joined by Anthony Carboni of 'The Star Wars Show' for an event sized episode!",
      url: `${url}/api/images/api_swiper_1.jpg`,
      vid: 1
    },
    {
      id: 2,
      title: 'Time Travel Tips',
      description:
        'Traveling back in time is never easy? Let us help by consulting the pros!',
      url: `${url}/api/images/api_swiper_2.jpg`,
      vid: 2
    },
    {
      id: 3,
      title: 'KING IN BLACK',
      description:
        "The next shocking chapter in Donny Cates and Ryan Stegman's Venom Saga is revealed!",
      url: `${url}/api/images/api_swiper_3.jpg`,
      vid: 3
    },
    {
      id: 4,
      title: "LET'S PLAY FORTNITE",
      description:
        'Watch as we stream the brand new Captain America outfit in Fortnite!',
      url: `${url}/api/images/api_swiper_4.jpg`,
      vid: 4
    },
    {
      id: 5,
      title: 'HAPPY ULTRAMAN DAY!',
      description:
        "Celebrate by getting a sneak peek at 'Rise of Ultraman #1'!",
      url: `${url}/api/images/api_swiper_5.jpg`,
      vid: 5
    }
  ])
}
