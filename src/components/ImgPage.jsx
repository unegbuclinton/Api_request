import { useState } from 'react'
import './ImgPage.css'
import looove from '../assets/looove.svg'
import looove_fill from '../assets/looove fill.svg'




function OnePage({data}) {

    const [like, setLike] = useState (false)

    const likeToogle =()=> setLike (!like)

    return (
        <>
            <div className="onepage">
                <div className="img__wrapper">
                    <div className="img__container">
                        <img src={data.img_src} alt="" />
                    </div>
                    <div className="img__description">
                        <h1 className='img__desc'> {data.camera.name} <span className='desc'>{data.rover.name}</span></h1>
                        <h2 className='img__camera'>  {data.camera.full_name}</h2>
                        <p className='img__date'> {data.earth_date}</p>
                    </div>

                    <div className="btn__wrapper">
                        { !like && <img src={looove} alt="" className='heart_btn'/> }
                        { like && <img src={looove_fill} alt="" className='heart_btn'/> }

                        <button className="btn__like" onClick= {likeToogle}> Like  </button>
                    </div>

                        
                </div>
                
               
                

                
                

               
               

            </div>
        </>
    )
}

export default OnePage
