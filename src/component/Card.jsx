import './Card.css';

// eslint-disable-next-line react/prop-types
export default function Card({ name, description, isVisited, imgUrl }) {
    return (
        <div className="card">
            <img className="img" src={imgUrl} alt="foto" />
            <h1 className="title">{name}</h1>

            <p className="description">{description}</p>
            {isVisited ? (
                <span className='isVisited'>V visitata</span>
            ) : (
                <span className='isNotVisited'>X non visitata</span>
            )}

        </div>
    );
}
