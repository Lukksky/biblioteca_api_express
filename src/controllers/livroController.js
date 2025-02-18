import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    };

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({  message: "criado com sucesso", livro: novoLivro})

        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao cadastrar livro` });

        }
        
    }

};


export default LivroController;