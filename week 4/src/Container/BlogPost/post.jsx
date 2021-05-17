import React from 'react'
const post = (props)=>{
    return(
        <div class ="post-artikel">
        <h2>Daftar Artikel</h2>
        <div class="artikel">
            <div class="gambar-artikel">
                <img scr="http://placeimg.com/88/88/tech" alt="Gambar Tumbnail Artikel"/>

            </div>
            <div class="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p class="isi-"Isi-artikel>{props.isi}</p>
            </div>
            </div>
        </div>

        
    )

    }
    export default post;

