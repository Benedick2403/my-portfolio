import ProjectCards from '../UI/ProjectCards'; // Adjust the path if needed

const cardData = [
  {
    image:'/projectImg/GhibliTrailer.png',
    day: 'October, 2023',
    title: 'Ghibli Trailer',
    description: 'A collection of trailer videos from Ghibli Studio ',
    link: 'https://benedick2403.github.io/Ghibli-Trailer/',
    language:'HTMLS, CSS, JavaScript',
  },
  {
    image:'/projectImg/Chie-kenHaus.png',
    day: 'December, 2023',
    title: 'Chie-Ken Haus',
    description: 'A mock restaurant page',
    link: 'https://benedick2403.github.io/Chie-ken-Haus/dist/index.html',
    language:'Tailwind CSS, PHP, MySQL',
  },
  {
    image:'/projectImg/AutoSpotter.png',
    day: 'December, 2023',
    title: 'AutoSpotter',
    description: 'A parking management web app ',
    link: 'https://github.com/JushuaTaduran/AutoSpotter',
    language:'ReactJS, SocketIO, MySQL, Express',

  },
    {
    image:'/projectImg/Rock-Paper-Scissor.png',
    day: 'June, 2024',
    title: 'Rock-Paper-Scissor',
    description: 'A simple web game of rock-paper-scissor ',
    link: 'https://benedick2403.github.io/Rock-Paper-Scissor/',
    language:'HTML, CSS, JavaScript',
  },  
  {
    image:'/projectImg/Etch-a-Sketch.png',
    day: 'June, 2024',
    title: 'Etch-a-Sketch',
    description: 'A simple grid sketcher ',
    link: 'https://benedick2403.github.io/Etch-A-Sketch/',
    language:'HTML, CSS, JavaScript',

  },
  {
    image:'/projectImg/InfiniteDescent.png',
    day: 'April, 2025',
    title: 'Infinite Descent',
    description: 'A 2D Game with Enhanced Procedural Dungeon Map Generation Through Wave Function Collapse (WFC) And Assets Generation Using Generative Adversarial Networks (GANs)',
    link: '',
    language:'Unity, Python, PyTorch, C#',
  },
];

export default function CardData() {
  return (
    <div className="h-full overflow-y-auto rounded-lg">
        <div className="flex flex-col gap-6">
            {cardData.map((card, index) => (
                <ProjectCards
                key={index}
                image={card.image}
                day={card.day}
                title={card.title}
                description={card.description}
                link={card.link}
                language={card.language}
                />
            ))}
        </div>
    </div>
  );
}
