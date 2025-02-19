import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha na requisição` });
        }
        
    };

    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);

        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha na requisição do livro` });
        }
        
    };

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({  message: "criado com sucesso", livro: novoLivro})

        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao cadastrar livro` });

        }
        
    };

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado" });

        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha na atualização do livro` });
        }
        
    };

    static async deletarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "livro excluído com sucesso" });

        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha na exclusão do livro` });
        }
        
    };



};




export default LivroController;