import logo from './logo.svg';
import './App.css';

function App() {
  
  const brands= [
    {brands:"Android"},
    {brands: "Blackberry"},
     {brands: "iPhone"},
     {brands: "Windows phone"}
    ];

    const manufac= [
      {name: "Samsung"},
      {name: "HTC"},
      {name: "Micromax"},
      {name: "Apple"}
    ]

  return (
    <div>
      <h1>{"Mobile Operating System"}</h1>

      {brands.map((brands) => {
        return <UnorderedComponent brands= {brands.brands} />;
      })}

      <h1>{"Mobile Manufacturers"}</h1>

      {manufac.map((el) => {
        return <UnorderedComponent brands= {el.name} />;
      })}    
    </div>
    
  );
}

function UnorderedComponent({brands}) {
  return (
      <ul>
        <li style={{listStyle: "square"}}>{brands}</li>
        </ul>
  )
}

export default App;
