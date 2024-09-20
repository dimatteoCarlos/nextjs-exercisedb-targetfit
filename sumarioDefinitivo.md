npx create-next-app@latest app --typescript

work on layout.tsx
importar el font requerido y aplicarlo al body.
el layout por defecto considera los valores de metadata
Head para incluir en el html el author como metadata

> Incluir junto a children en el body, todos los componentes hijos del layout, inclyendo los context providers.

definir el Theme context mediante context.
header:
logo darkModeSwitch link ' about
---------------------
Flujo:
HOME
SearchExercises bodyPart que al principio va a ser igual a 'all';
se obtiene los estados: exercises, bodyPart

en SearchExercises:
estados: search, bodyParts
al inicio en useEffect:
busqueda de los bodyPartList, y se le agrega al estado 'all'
comment: se puede actualizar la lista, pero tener la lista por defecto en caso de error;
osea, que la bodyPartList, es lo primero que se busca, independientemente del flujo

    aqui se esaria manejando la busqueda search,con handleSearchFn():
      se obtienen los 1324 exercises y luego se filtra por el searchTerm, en los campos: name, target, equipment o bodyPart, pero en forma excluyente es decir donde lo consiga (Como seria de forma inclusive, es decir que tiene que estar en todas partes?)

      y luego guarda los resultados de la busqueda en: el estado exercises

      hasta ahora: se tiene todos los bodyPartList dentro de bodyParts y los exercises buscados.

      Renderiza:
        el input para introducir el SearchTerm y asignarselo al estado search o searchTerm

y
el HorizontalScrollbar que recibe la lista en bodyParts como data, bodyPart que al principio es 'all', ya que no ha sido seleccionada por el usuario, y las funciones set del estado bodyPart.

        se define dos funciones: rightArrow, leftArrow, las cuales con un click, ejecutan dos funciones que son scrollNext y Prev, las uales se encuentran en un useContext llamado VisibilityContext, que es importado desde la lib: react-horizontal-scrolling-menu, al igual que la funcion ScrollMenu.

        luego rendeeriza a bodyParts o a exerciseCard dependiento de si existe bodyParts.
            en el caso de bodyPart, al hacer click se actualiza el estado bodyPart, pero no hay Link hacia otra parte.

            en exerciseCard, recibe el item exercise del estado exercises. se renderiza la imagen exercise.gifUrl,  un boton con el estado bodyPart, otro boton con el exercise.target

            pero estos botones no tienen accion, son como un badge con la info.

            y luego exercise.name

            El link tiene como ruta /exercise/exercise.id, el cual dirije el flujo hacia:
              ExerciseDetail, el cual deberia recibir useParams para capturar el id, considerando el esquema de rutas usando react-router-dom.

            en ExerciseDetail, se hacen varias busquedas:
            primero, se busca el exercise/id y se actualiza el estado: exerciseDetail.
            luego se hacen varias busquedas q pudieran ser simultaneas en:

              exericseVideosData.
              con el query: search?query=exerciseDetail.name exercise en youtubeVideo api, y se guarda en el estado targetMuscleExercises.

              targetMuscleExerciesData en exercises/target/exerciseDetailData.target

              equipmentExercisesData:
                exercises/equip;ment/exerciseDetailData.equipment en el estado equipmentExercises.

              luego se rederiza:

              Detail exericseDetail
              ExerciseVideos consdierando exerciseVideos y exerciseDetail.name

              SimilarExercises con equipmentExercises



            

            **********************************








