import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

    static async listarLivros (req, res, next) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        } catch (err) {
            next(err)
        }
        
    };

    static async listarLivroPorId (req, res, next) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);

        } catch (err) {
            next(err)
        }
        
    };

    static async cadastrarLivro (req, res, next) {
        
            const novoLivro = req.body;

            try {
                const autorEncontrado = await autor.findById(novoLivro.autor);
                const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};
                const livroCriado = await livro.create(livroCompleto);
                res.status(201).json({  message: "criado com sucesso", livro: novoLivro})

        } catch (err) {
            next(err)

        }
        
    };

    static async atualizarLivro (req, res, next) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado" });

        } catch (err) {
            next(err)
        }
        
    };

    static async deletarLivro (req, res, next) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "livro excluído com sucesso" });

        } catch (err) {
            next(err)
        }
        
    };

    static async listarLivrosPorEditora (req, res, next) {
        const editora = req.query.editora;

        try {
            const livrosPorEditora = await livro.find({ editora: editora});
            res.status(200).json(livrosPorEditora);
        } catch (err) {
            next(err)

        }
    }



};




export default LivroController;