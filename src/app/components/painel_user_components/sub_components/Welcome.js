export default function Welcome({ dataUser }) {
    return (
        <>
            {
                dataUser ?
                    <h1>Bem vindo {`${dataUser.firstName} ${dataUser.lastName}!`}</h1>
                :
                    <h1>Loading...</h1>
            }
        </>
    )
}