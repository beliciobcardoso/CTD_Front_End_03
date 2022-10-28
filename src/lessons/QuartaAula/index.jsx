import './style.scss';
export function QuartaAula() {
  const componentsFinded = [
    {
      title: 'Video Component',
      image: '',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Video Component',
      image: '',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Video Component',
      image: '',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];

  return (
    <>
      <main className='quarta-aula-component'>
        <h1>Componentes Indentificado</h1>
        <ul>
          {componentsFinded.map((component, index) => {
            return (
              <li key={index}>
                <img src={component.image} />
                <h1>{component.title}</h1>
                <p>{component.text}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
