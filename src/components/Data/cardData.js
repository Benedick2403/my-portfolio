import ProjectCards from '../UI/ProjectCards'; // Adjust the path if needed

const cardData = [
  {
    day: 'October, 2023',
    title: 'Ghibli Trailer',
    description: 'A collection of trailer videos from Ghibli Studio ',
    link: '',
  },
  {
    day: 'December, 2023',
    title: 'Chie-Ken Haus',
    description: 'A mock restaurant page',
    link: '',
  },
  {
    day: 'December, 2023',
    title: 'AutoSpotter',
    description: 'A parking management web app ',
    link: '',
  },
    {
    day: 'December, 2023',
    title: 'Rock-Paper-Scissor',
    description: 'A simple web game of rock-paper-scissor ',
    link: '',
  },  
  {
    day: 'December, 2023',
    title: 'Etch-a-SKetch',
    description: 'A simple grid sketcher ',
    link: '',
  },
  {
    day: 'December, 2023',
    title: 'Infinite Descent',
    description: 'A 2D Game with Enhanced Procedural Dungeon Map Generation Through Wave Function Collapse (WFC) And Assets Generation Using Generative Adversarial Networks (GANs)',
    link: '',
  },
];

export default function CardData() {
  return (
    <div className="h-[500px] overflow-y-auto p-4 rounded-lg border border-gray-200 shadow-inner bg-black">
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
            {cardData.map((card, index) => (
                <ProjectCards
                key={index}
                day={card.day}
                title={card.title}
                description={card.description}
                link={card.link}
                />
            ))}
        </div>
    </div>
  );
}
