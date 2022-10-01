import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import OurTeam from './components/OurTeam';
import Services from './components/Services';
import Work from './components/Work';

const servicesData = [
  {
    id: 1,
    title: 'Graphic Design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
    price: 400,
  },
  {
    id: 2,
    title: 'Product Design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
    price: 350,
  },
  {
    id: 3,
    title: 'Web Design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
    price: 800,
  },
  {
    id: 4,
    title: 'Video Editing',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
    price: 500,
  },
];

const membersData = [
  {
    id: 1,
    name: 'Jhon Doe',
    role: 'Digital Marketing Manager',
    image: '/assets/images/member-1.png',
  },
  {
    id: 2,
    name: 'Jhon Doe',
    role: 'Digital Marketing Manager',
    image: '/assets/images/member-2.png',
  },
  {
    id: 3,
    name: 'Jhon Doe',
    role: 'Digital Marketing Manager',
    image: '/assets/images/member-3.png',
  },
  {
    id: 4,
    name: 'Jhon Doe',
    role: 'Digital Marketing Manager',
    image: '/assets/images/member-4.png',
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Work />
      <Services data={servicesData} />
      <OurTeam data={membersData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
