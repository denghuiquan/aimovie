import { baseURL as url } from '@/axiosConfig'

export default function movie (req, res) {
  res.status(200).json([
    {
      id: 1,
      vid: 6,
      url: `${url}/api/images/api_movie_1.jpg`,
      title: 'Marvel Mission Recap: Captain Marvel’s Star of Hala'
    },
    {
      id: 2,
      vid: 7,
      url: `${url}/api/images/api_movie_2.jpg`,
      title: 'Make Your Video Calls Worthy With These Backgrounds'
    },
    {
      id: 3,
      vid: 8,
      url: `${url}/api/images/api_movie_3.jpg`,
      title: 'Make Your Video Calls Worthy With These Backgrounds'
    },
    {
      id: 4,
      vid: 9,
      url: `${url}/api/images/api_movie_4.jpg`,
      title:
        'Marvel At Home: Here’s How to Stay Connected With Your Favorite Super Heroes'
    }
  ])
}
