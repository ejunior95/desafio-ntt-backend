import { service } from '@services/index';

interface IProps {
    response: {}
}

module.exports.getMovieInfo = async(req,res) => {
    try {
        const movie = req.params.movie
        const response = await service.getMovieInfo(movie)

        return res.json(response)

    } catch (err) {
        console.error(err);
        return res.json({ message: err });
    }
}