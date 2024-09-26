import React from 'react';
// import { useSearchParams } from 'next/navigation';
import { SearchParamsType } from '@/app/page';

function ShowExercises({ searchParams }: SearchParamsType) {
  // const genre = useSearchParams().get('genre');
  const genreAlt = searchParams?.genre;
  // const selectedKeyList = genre in bannersKeyList ? genre : 'bodyPart';

  //context desde useHook, searchParams genre para extraerlo del query / con el query, puedo seleccion el banner, y mostrar el banner, con context tengo los datos despues vendra una validacion: del query y msj de error, y de los datos msj de error.  con los datos, mostrar cuantos son, y luego, hacer un slice de 20, y utilizando un comp card renderizarlos.
  //asegurar los tipos ts de: exercises, bannerPickUpList, selectedKeyList, no se donde estan definidos los tipo anteriores para importarlos.  En las card, se debe poder capturar el id con un click, para luego poder hacer la busqueda de ese ejercicio en especifico y  mostrar los detalles del exerices selected. El ejercicio seleccionado como detail:
  //como esta en la app de referencia, y montar la busqueda de los videos relacionados con este ejercicio.

  // despues habria que manejar el Explore, y el search.
  // tal vez el search hacerlo tipo filtro

  return <></>;
}

export default ShowExercises;
