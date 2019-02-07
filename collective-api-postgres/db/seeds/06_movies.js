exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('movies').insert([
        {
          title: 'Star Wars: Episode IV - A New Hope',
          year: '1977',
          rated: 'PG',
          released: '25 May 1977',
          runtime: '121 min',
          genre: 'Action, Adventure, Fantasy, Sci-Fi',
          director: 'George Lucas',
          writer: 'George Lucas',
          actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
          plot:
            "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
          language: 'English',
          country: 'USA',
          awards: 'Won 6 Oscars. Another 50 wins & 28 nominations.',
          poster:
            'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
          rating: '8.6',
          website: 'http://www.starwars.com/episode-iv/'
        },

        {
          title: 'Star Wars: Episode VI - Return of the Jedi',
          year: '1983',
          rated: 'PG',
          released: '25 May 1983',
          runtime: '131 min',
          genre: 'Action, Adventure, Fantasy, Sci-Fi',
          director: 'Richard Marquand',
          writer:
            'Lawrence Kasdan (screenplay by), George Lucas (screenplay by), George Lucas (story by)',
          actors:
            'Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams',
          plot:
            "After a daring mission to rescue Han Solo from Jabba the Hutt, the rebels dispatch to Endor to destroy a more powerful Death Star. Meanwhile, Luke struggles to help Vader back from the dark side without falling into the Emperor's trap.",
          language: 'English',
          country: 'USA',
          awards: 'Nominated for 4 Oscars. Another 20 wins & 16 nominations.',
          poster:
            'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
          rating: '8.3',
          website: 'http://www.starwars.com/episode-vi/'
        },
        {
          title: 'Star Wars: The Force Awakens',
          year: '2015',
          rated: 'PG-13',
          released: '18 Dec 2015',
          runtime: '136 min',
          genre: 'Action, Adventure, Fantasy',
          director: 'J.J. Abrams',
          writer:
            'Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)',
          actors: 'Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver',
          plot:
            "Three decades after the Empire's defeat, a new threat arises in the militant First Order. Stormtrooper defector Finn and the scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker.",
          language: 'English',
          country: 'USA',
          awards: 'Nominated for 5 Oscars. Another 57 wins & 123 nominations.',
          poster:
            'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg',
          rating: '8.0',
          website: 'http://starwars.com/'
        },
        {
          title: 'Star Wars: Episode I - The Phantom Menace',
          year: '1999',
          rated: 'PG',
          released: '19 May 1999',
          runtime: '136 min',
          genre: 'Action, Adventure, Fantasy',
          director: 'George Lucas',
          writer: 'George Lucas',
          actors: 'Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd',
          plot:
            'Two Jedi Knights escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.',
          language: 'English',
          country: 'USA',
          awards: 'Nominated for 3 Oscars. Another 26 wins & 65 nominations.',
          poster:
            'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
          rating: '6.5',
          website: 'http://www.starwars.com/episode-i/'
        },
        {
          title: 'Star Wars: Episode III - Revenge of the Sith',
          year: '2005',
          rated: 'PG-13',
          released: '19 May 2005',
          runtime: '140 min',
          genre: 'Action, Adventure, Fantasy',
          director: 'George Lucas',
          writer: 'George Lucas',
          actors:
            'Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid',
          plot:
            'Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.',
          language: 'English',
          country: 'USA, Italy, Switzerland, Thailand, Tunisia',
          awards: 'Nominated for 1 Oscar. Another 25 wins & 56 nominations.',
          poster:
            'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg',
          rating: '7.6',
          website: 'http://www.starwars.com/'
        },
        {
          title: 'Star Wars: Episode II - Attack of the Clones',
          year: '2002',
          rated: 'PG',
          released: '16 May 2002',
          runtime: '142 min',
          genre: 'Action, Adventure, Fantasy, Sci-Fi',
          director: 'George Lucas',
          writer:
            'George Lucas (screenplay by), Jonathan Hales (screenplay by), George Lucas (story by)',
          actors:
            'Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee',
          plot:
            'Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-wan Kenobi investigates an assassination attempt on the Senator and discovers a secret clone army crafted for the Jedi.',
          language: 'English',
          country: 'USA',
          awards: 'Nominated for 1 Oscar. Another 16 wins & 58 nominations.',
          poster:
            'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
          rating: '6.6',
          website: 'http://www.starwars.com/episode-ii/'
        },
        {
          title: 'Rogue One: A Star Wars Story',
          year: '2016',
          rated: 'PG-13',
          released: '16 Dec 2016',
          runtime: '133 min',
          genre: 'Action, Adventure, Sci-Fi',
          director: 'Gareth Edwards',
          writer:
            'Chris Weitz (screenplay by), Tony Gilroy (screenplay by), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)',
          actors: 'Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen',
          plot:
            'The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.',
          language: 'English',
          country: 'USA',
          awards: 'Nominated for 2 Oscars. Another 23 wins & 78 nominations.',
          poster:
            'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg',
          rating: '7.8',
          website: 'http://www.starwars.com/'
        },
        {
          title: 'Star Wars: The Last Jedi',
          year: '2017',
          rated: 'PG-13',
          released: '15 Dec 2017',
          runtime: '152 min',
          genre: 'Action, Adventure, Fantasy',
          director: 'Rian Johnson',
          writer: 'Rian Johnson, George Lucas (based on characters created by)',
          actors: 'Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley',
          plot:
            'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.',
          language: 'English',
          country: 'USA',
          awards: 'Nominated for 4 Oscars. Another 12 wins & 71 nominations.',
          poster:
            'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
          rating: '7.2',
          website: 'http://www.starwars.com/the-last-jedi/'
        },
        {
          title: 'Solo: A Star Wars Story',
          year: '2018',
          rated: 'PG-13',
          released: '25 May 2018',
          runtime: '135 min',
          genre: 'Action, Adventure, Fantasy',
          director: 'Ron Howard',
          writer:
            'Jonathan Kasdan, Lawrence Kasdan, George Lucas (based on characters created by)',
          actors:
            'Alden Ehrenreich, Joonas Suotamo, Woody Harrelson, Emilia Clarke',
          plot:
            'During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.',
          language: 'English',
          country: 'USA',
          awards: 'N/A',
          poster:
            'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg',
          rating: '7.0',
          website: 'http://www.starwars.com/films/solo'
        }
      ])
    })
}
