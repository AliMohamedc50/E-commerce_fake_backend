/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Card from '../card/Card';
import axios from 'axios';

const Featurproduct = ({type}) => {
  const  apiToken = "00bbc7a97bb6fe7a9c75f3f912fd52410768fb953f4a563cad3d10418dc2e7b404f40789cde1f150c715632572741a81037df3db4eb7a916729e763f23e5fa167d5de036bd0833bfec7c581b162463098cb3e993e1a85efeb1bffed6cc495963fc3a283a135d03529f31d373317f3d2e9b22a3eb621c6e8ee2fd00eca1a9f3b8"
  const apiUrl = "http://localhost:1337/api";

    const [data, setData] = useState([])

    useEffect(()=> {
      const fechproduct = async () => {
        try {
          const res = await axios.get(apiUrl + `/products?populate=*&[filters] [type] [$eq]=${type}`, {
            headers: {
              Authorization: "bearer " + apiToken,
            },
          });
            setData(res.data.data);
        } catch (error) {
          console.log(error);
        }
      }
      fechproduct();
    },[])

    console.log(data[0]?.attributes.img.data.attributes.url);
  return (
    <div className="my-24 mx-48">
      <div className="top flex justify-center items-center mb-12">
        <h1 style={{ flex: "2" }} className="text-3xl ">
          {type} Product
        </h1>
        <p style={{ flex: "2" }} className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          sapiente quae maxime optio et fugit illum hic at officiis deserunt
          autem, aliquid debitis. Impedit cum ex quo eos alias ut.
        </p>
      </div>
      <div className="bottom flex justify-center gap-12">
        {
            data?.map((item) => (
                <Card item={item} key={item.id} />
            ))
        }
      </div>
    </div>
  );
}

export default Featurproduct
