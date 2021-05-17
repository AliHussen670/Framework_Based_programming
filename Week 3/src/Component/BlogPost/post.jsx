import React from "react";
const post=(props)=>{
    return(
        <div className="artikel">
        <div className="gambar-artikel"> 
            <img scr="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>    
        </div>
        <div className="konten-artikel">
            <div className="judul-artikel">Judul Artikel</div>
            <p className="isi-artikel">Isi Artikel</p>
        </div>
        </div>
    
    )
}
export default post;