import './style.scss';
export function TerceiraAula() {
  const components = [
    {
      name: 'Card 01',
      description: 'Lorem ipsum dolor sit amet consectetur',
      image: 'https://opengameart.org/sites/default/files/king_of_hearts2.png',
    },
    {
      name: 'Card 02',
      description: 'Lorem ipsum dolor sit amet consectetur',
      image:
        'https://opengameart.org/sites/default/files/queen_of_diamonds2.png',
    },
    {
      name: 'Card 03',
      description: 'Lorem ipsum dolor sit amet consectetur',
      image: 'https://opengameart.org/sites/default/files/7_of_clubs.png',
    },
  ];

  return (
    <>
      <main>
        <h1>Lista de componentes encontrado em um sistema</h1>
        <ul>
          {components.map((component) => (
            <li>
              <img src={component.image} />
              <h1>{component.name}</h1>
              <p>{component.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
