export default function Welcome({ dataUser, styles }) {
    return (
        <div className={ styles.DivContainerWelcome }>
            {
                dataUser ?
                    <>
                        <h1>Bem vindo {`${dataUser.firstName} ${dataUser.lastName}!`}</h1>
                        <img src="http://localhost:3000/icons/introduction.png" />
                    </>
                :
                    <h1>Loading...</h1>
            }
        </div>
    )
}