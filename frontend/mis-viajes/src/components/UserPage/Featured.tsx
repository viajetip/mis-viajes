import { AiFillStar } from 'react-icons/ai'

const Featured = () => {
  return (
    <section className="featured">
        <div className="container-medium">
            <h2 className="section-title featured__title">
               <AiFillStar/> Destacados
            </h2>
            <div className="featured__section">
            </div>
        </div>
    </section>
    )
}

export default Featured