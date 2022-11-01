import { useState } from 'react';
import { SetimaAulaCardProduto } from '../../components/SetimaAulaCardProduto';
import { allProducts, newProduct } from './dados';
import './style.scss';
export function AppLoja() {
  const [allProduct, setallProduct] = useState(allProducts);

  function addProduct() {
    setallProduct([...allProduct, newProduct]);
  }

  return (
    <main className='app-loja-component'>
      <div className='tittle-wrapper'>
        <h1>Produtos</h1>
        <button onClick={addProduct}>Adicionar novo produto</button>
      </div>
      {/* productData={product}  */}
      <section className='products'>
        {allProduct.map((product) => {
          return <SetimaAulaCardProduto productData={product} />;
        })}
      </section>
    </main>
  );
}
