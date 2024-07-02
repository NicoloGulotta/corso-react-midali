import './Card.css';

export default function Card({ title, description, isVisited, imgUrl }) {
    return (
        <div className="card">
            <img className="img" src={imgUrl} alt="foto" />
            <h1 className="title">{title ? title : "No Title"}</h1>

            <p className="description">{description}</p>
            {isVisited ? (
                <span className='isVisited'>V visitata</span>
            ) : (
                <span className='isNotVisited'>X non visitata</span>
            )}

        </div>
    );
}
