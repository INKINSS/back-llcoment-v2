import Article from '../models/article.models.js'

export const getAllArticles = async(req, res) => {
    try {
        const articles = await Article.find().sort({ createAt: -1})
        res.status(200).json(articles)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getArticleById = async(req, res) => {
    try {
        const article = await Article.findById(req.params.id)
        res.status(200).json(article)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createArticle = async(req, res) => {
    try {
        const { title, content } = req.body
        if(!title || !content) {
            return res.status(400).json({ message: 'title and content are required' })
        }
        const article = new Article({ title, content })
        await article.save()
        res.status(201).json(article)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateArticle = async(req, res) => {
    try {
        const { id } = req.params
        const { title, content } = req.body
        if(!title || !content) {
            return res.status(400).json({ message: 'title and content are required' })
        }
        const article = await Article.findByIdAndUpdate(id, { title, content }, { new: true })
        res.status(200).json(article)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteArticle = async(req, res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id)
        res.status(200).json(article)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
