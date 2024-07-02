import './Link.css'
// eslint-disable-next-line react/prop-types
export default function Link({ name, href }) {
    console.log(name, href)
    //senza le tondemandare una sola riga di codice
    return <a className='link' href={href}>{name}</a >

    //Con le tonde es.return(elementi html radice) posso mandare un blocco
    //di codiice main es.return(<> </>)
}