
import { Gifitem } from "./Gifitem";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    console.log(isLoading)


  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">

        { images.map( (img) =>(

                < Gifitem 
                    key={ img.id }
                    { ... img }
                />
            ))
        }
      </div>
      
    </>
  );

};
