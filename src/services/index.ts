import request from 'request-promisse-native'

module.exports.getMovieInfo = async (movie:string):Promise<any> => {
    try {
        const data = request({
            
        })

        return {
            result: data
        }

    } catch (err) {
        
    }
}
