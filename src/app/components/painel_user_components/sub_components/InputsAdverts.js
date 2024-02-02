export default function InputsAdverts({ styles, axios, useState, dataUser,  setRender }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [total, setTotal] = useState(0);

    const cadastrarProdutos = async () => {
        const formData = new FormData();
        formData.append("file", image)
        formData.append("name", name)
        formData.append("price", price)
        formData.append("total", total)
        formData.append("description", description)
        formData.append("category", category)
        formData.append("userId", dataUser.id)

        await axios.post("http://localhost:3001/register-product", formData, {
            "headers": {
                "Content-Type": "multipart/form-data",
            }
        })

        setRender((prevState) => !prevState)
    }

    return (
        <div className={ styles.DivInputs }>
            <h1>Cadastrar Produto</h1>
            <input onChange={({ target }) => setName(target.value)} type="text" placeholder="Nome do produto" />
            <input onChange={({ target }) => setPrice(target.value)} type="text" placeholder="Preço" />
            {/* <input onChange={({ target }) => setImage(target.value)} type="text" placeholder="Image" /> */}
            <input onChange={({ target }) => setTotal(target.value)} type="text" placeholder="Quantidade de produtos" />
            <input onChange={({ target }) => setDescription(target.value)} type="text" placeholder="Description" />
            <input onChange={({ target }) => setCategory(target.value)} type="text" placeholder="Categoria" />
            <h3>Insira a imagem do produto</h3>
            <input onChange={ ({ target: { files } }) => setImage(files[0]) } type="file" />
            <button onClick={ cadastrarProdutos } type="button">Enviar</button>
        </div>
    )
}