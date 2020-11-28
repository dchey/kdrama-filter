import './App.css';
import FilteredList from './FilteredList.js';

import kbs1 from './img/kbs1.jpg'
import kbs2 from './img/kbs2.jpg'
import kbs3 from './img/kbs3.jpg'
import kbs4 from './img/kbs4.jpg'
import kbs5 from './img/kbs5.jpg'
import kbs6 from './img/kbs6.jpg'
import kbs7 from './img/kbs7.jpg'
import kbs8 from './img/kbs8.jpg'
import kbs9 from './img/kbs9.jpg'
import kbs10 from './img/kbs10.jpg'
import kbs11 from './img/kbs11.jpg'
import kbs12 from './img/kbs12.jpg'
import kbs13 from './img/kbs13.jpg'
import kbs14 from './img/kbs14.jpg'
import kbs15 from './img/kbs15.jpg'
import kbs16 from './img/kbs16.jpg'
import kbs17 from './img/kbs17.jpg'
import kbs18 from './img/kbs18.jpg'

import mbc1 from './img/mbc1.jpg'
import mbc2 from './img/mbc2.jpg'
import mbc3 from './img/mbc3.jpg'
import mbc4 from './img/mbc4.jpg'
import mbc5 from './img/mbc5.jpg'
import mbc6 from './img/mbc6.jpg'
import mbc7 from './img/mbc7.jpg'
import mbc8 from './img/mbc8.jpg'
import mbc9 from './img/mbc9.jpg'
import mbc10 from './img/mbc10.jpg'
import mbc11 from './img/mbc11.jpg'
import mbc12 from './img/mbc12.jpg'

import sbs1 from './img/sbs1.jpg'
import sbs2 from './img/sbs2.jpg'
import sbs3 from './img/sbs3.jpg'
import sbs4 from './img/sbs4.jpg'
import sbs5 from './img/sbs5.jpg'
import sbs6 from './img/sbs6.jpg'
import sbs7 from './img/sbs7.jpg'
import sbs8 from './img/sbs8.jpg'
import sbs9 from './img/sbs9.jpg'
import sbs10 from './img/sbs10.jpg'
import sbs11 from './img/sbs11.jpg'
import sbs12 from './img/sbs12.jpg'
import sbs13 from './img/sbs13.jpg'
import sbs14 from './img/sbs14.jpg'
import sbs15 from './img/sbs15.jpg'
import sbs16 from './img/sbs16.jpg'
import sbs17 from './img/sbs17.jpg'
import sbs18 from './img/sbs18.jpg'
import sbs19 from './img/sbs19.jpg'
import sbs20 from './img/sbs20.jpg'

import tvn1 from './img/tvn1.jpg'
import tvn2 from './img/tvn2.jpg'
import tvn3 from './img/tvn3.jpg'
import tvn4 from './img/tvn4.jpg'
import tvn5 from './img/tvn5.jpg'
import tvn6 from './img/tvn6.jpg'
import tvn7 from './img/tvn7.jpg'
import tvn8 from './img/tvn8.jpg'
import tvn9 from './img/tvn9.jpg'
import tvn10 from './img/tvn10.jpg'
import tvn11 from './img/tvn11.jpg'
import tvn12 from './img/tvn12.jpg'
import tvn13 from './img/tvn13.jpg'


const productList = [
  {title: "It's Okay to Not be Okay", channel: "tvN", genre: "Romance", rating: "11.0", price: 8.99, img: tvn13},
  {title: "Kkondae Intern", channel: "MBC", genre: "Comedy", rating: "7.1", price: 9.99, img: mbc12},
  {title: "The King: Eternal Monarch", channel: "SBS", genre: "Fantasy", rating: "11.6", price: 12.99, img: sbs20},
  {title: "Hospital Playlist", channel: "tvN", genre: "Medical", rating: "14.1", price: 8.99, img: tvn12},
  {title: "Dr. Romantic 2", channel: "SBS", genre: "Medical", rating: "27.1", price: 12.99, img: sbs19},
  {title: "Black Dog", channel: "tvN", genre: "School", rating: "5.5", price: 6.99, img: tvn11},
  {title: "Crash Landing on You", channel: "tvN", genre: "Romance", rating: "21.7", price: 8.99, img: tvn10},
  {title: "The Tale of Nokdu", channel: "KBS", genre: "Historical", rating: "8.3", price: 9.99, img: kbs18},
  {title: "Vagabond", channel: "SBS", genre: "Action", rating: "13.0", price: 12.99, img: sbs18},
  {title: "When the Camellia Blooms", channel: "KBS", genre: "Romance", rating: "23.8", price: 9.99, img: kbs17},
  {title: "Hotel del Luna", channel: "tvN", genre: "Fantasy", rating: "12.0", price: 6.99, img: tvn9},
  {title: "Angel's Last Mission: Love", channel: "KBS", genre: "Fantasy", rating: "9.4", price: 5.99, img: kbs16},
  {title: "The Fiery Priest", channel: "SBS", genre: "Comedy", rating: "22.0", price: 9.99, img: sbs17},
  {title: "Encounter", channel: "tvN", genre: "Melodrama", rating: "10.3", price: 4.99, img: tvn8},
  {title: "My Secret Terrius", channel: "MBC", genre: "Action", rating: "10.5", price: 7.99, img: mbc11},
  {title: "Mr. Sunshine", channel: "tvN", genre: "Historical", rating: "18.1", price: 4.99, img: tvn7},
  {title: "Go Back Couple", channel: "KBS", genre: "Romance", rating: "7.3", price: 5.99, img: kbs15},
  {title: "Witch's Court", channel: "KBS", genre: "Legal", rating: "14.3", price: 5.99, img: kbs14},
  {title: "While You were Sleeping", channel: "SBS", genre: "Legal", rating: "10.0", price: 9.99, img: sbs16},
  {title: "Stranger", channel: "tvN", genre: "Legal", rating: "5.5", price: 3.99, img: tvn6},
  {title: "Fighting For My Way", channel: "KBS", genre: "Romance", rating: "13.8", price: 5.99, img: kbs13},
  {title: "The Emperor: Owner of the Mask", channel: "MBC", genre: "Historical", rating: "14.9", price: 7.99, img: mbc10},
  {title: "Rebel: Thief Who Stole the People", channel: "MBC", genre: "Historical", rating: "14.4", price: 7.99, img: mbc9},
  {title: "Manager Kim", channel: "KBS", genre: "Comedy", rating: "18.4", price: 5.99, img: kbs12},
  {title: "Guardian: The Lonely and Great God", channel: "tvN", genre: "Fantasy", rating: "20.5", price: 3.99, img: tvn5},
  {title: "Legend of the Blue Sea", channel: "SBS", genre: "Fantasy", rating: "21.0", price: 6.99, img: sbs15},
  {title: "Weightlifting Fairy Kim Bok-Joo", channel: "MBC", genre: "School", rating: "5.4", price: 5.99, img: mbc8},
  {title: "Dr. Romantic", channel: "SBS", genre: "Medical", rating: "27.6", price: 6.99, img: sbs14},
  {title: "Moon Lovers: Scarlet Heart Ryeo", channel: "SBS", genre: "Historical", rating: "11.3", price: 6.99, img: sbs13},
  {title: "Moonlight Drawn by Clouds", channel: "KBS", genre: "Historical", rating: "23.3", price: 5.99, img: kbs11},
  {title: "W: Two Worlds", channel: "MBC", genre: "Fantasy", rating: "13.8", price: 5.99, img: mbc7},
  {title: "The Doctors", channel: "SBS", genre: "Medical", rating: "21.3", price: 6.99, img: sbs12},
  {title: "Another Miss Oh", channel: "tvN", genre: "Romance", rating: "10.0", price: 3.99, img: tvn4},
  {title: "Marriage Contract", channel: "MBC", genre: "Melodrama", rating: "22.9", price: 3.99, img: mbc6},
  {title: "Descendants of the Sun", channel: "KBS", genre: "Romance", rating: "38.8", price: 5.99, img: kbs10},
  {title: "Signal", channel: "tvN", genre: "Action", rating: "12.5", price: 3.99, img: tvn3},
  {title: "Remember - War of the Son", channel: "SBS", genre: "Legal", rating: "20.3", price: 6.99, img: sbs11},
  {title: "Reply 1988", channel: "tvN", genre: "Comedy", rating: "18.8", price: 2.99, img: tvn2},
  {title: "The Producers", channel: "KBS", genre: "Comedy", rating: "17.7", price: 2.99, img: kbs9},
  {title: "Who Are You - School 2015", channel: "KBS", genre: "School", rating: "8.2", price: 2.99, img: kbs8},
  {title: "Kill Me, Heal Me", channel: "MBC", genre: "Medical", rating: "11.5", price: 3.99, img: mbc5},
  {title: "Pinocchio", channel: "SBS", genre: "Romance", rating: "13.3", price: 3.99, img: sbs10},
  {title: "It's Okay, that's Love", channel: "SBS", genre: "Melodrama", rating: "12.9", price: 3.99, img: sbs9},
  {title: "A New Leaf", channel: "MBC", genre: "Legal", rating: "10.2", price: 1.99, img: mbc4},
  {title: "My Love from the Stars", channel: "SBS", genre: "Fantasy", rating: "28.1", price: 3.99, img: sbs8},
  {title: "Reply 1994", channel: "tvN", genre: "Comedy", rating: "10.4", price: 0.99, img: tvn1},
  {title: "The Heirs", channel: "SBS", genre: "School", rating: "25.6", price: 3.99, img: sbs7},
  {title: "Master's Sun", channel: "SBS", genre: "Fantasy", rating: "21.8", price: 3.99, img: sbs6},
  {title: "Good Doctor", channel: "KBS", genre: "Medical", rating: "21.5", price: 2.99, img: kbs7},
  {title: "I Can Hear Your Voice", channel: "SBS", genre: "Legal", rating: "24.1", price: 3.99, img: sbs5},
  {title: "Gu Family Book", channel: "MBC", genre: "Historical", rating: "19.5", price: 1.99, img: mbc3},
  {title: "That Winter, the Wind Blows", channel: "SBS", genre: "Melodrama", rating: "15.8", price: 3.99, img: sbs4},
  {title: "School 2013", channel: "KBS", genre: "School", rating: "15.8", price: 2.99, img: kbs6},
  {title: "Seoyoung, My Daughter", channel: "KBS", genre: "Romance", rating: "47.6", price: 2.99, img: kbs5},
  {title: "The Chaser", channel: "SBS", genre: "Action", rating: "22.6", price: 3.99, img: sbs3},
  {title: "Man from the Equator", channel: "KBS", genre: "Melodrama", rating: "15.2", price: 2.99, img: kbs4},
  {title: "Moon Embracing the Sun", channel: "MBC", genre: "Historical", rating: "42.2", price: 1.99, img: mbc2},
  {title: "City Hunter", channel: "SBS", genre: "Action", rating: "19.9", price: 3.99, img: sbs2},
  {title: "The Greatest Love", channel: "MBC", genre: "Romance", rating: "21.0", price: 1.99, img: mbc1},
  {title: "Dream High", channel: "KBS", genre: "School", rating: "17.9", price: 2.99, img: kbs3},
  {title: "Secret Garden", channel: "SBS", genre: "Romance", rating: "35.2", price: 3.99, img: sbs1},
  {title: "The Slave Hunters", channel: "KBS", genre: "Historical", rating: "34.0", price: 2.99, img: kbs2},
  {title: "Iris", channel: "KBS", genre: "Action", rating: "35.5", price: 2.99, img: kbs1}
]

function App() {
  return (
    <div className="app">
        <div className="title">
          <h1>
            Kdrama Filter
          </h1>
        </div>

        <div id="main-container">
          <FilteredList list={productList} />
        </div>
    </div>
  );
} export default App;
