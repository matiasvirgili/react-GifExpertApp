import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  // const categories = ['One Punch', 'Samurai', 'Goku'];
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   //formas de actualizar o renderizar de nuevo el arreglo con el useState
  //   // setCategories((cats) => [...cats, 'iron man']);
  //   // setCategories([...categories, 'El pitin']);
  // };
  return (
    <>
      <header className="header">
        <h2>Gif Expert App</h2>
      </header>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
          // Asi devuelvo el arreglo en forma de lista
          // return <li key={category}>{category}</li>;
        ))}
      </ol>
    </>
  );
};
