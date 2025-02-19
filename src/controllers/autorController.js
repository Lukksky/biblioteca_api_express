import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores (req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);

        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha na requisição` });
        }
        
    };

    static async listarAutorPorId (req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);

        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha na requisição do livro` });
        }
        
    };

    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({  message: "criado com sucesso", autor: novoAutor})

        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao cadastrar livro` });

        }
        
    };

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "autor atualizado" });

        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha na atualização do autor` });
        }
        
    };

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "autor excluído com sucesso" });

        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha na exclusão do autor` });
        }
        
    };



};




export default AutorController;