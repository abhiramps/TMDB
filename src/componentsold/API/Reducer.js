import axios from 'axios';
export default (state, action) => {
    switch (action.type) {
        case 'MOVIES':
            axios.get("https://api.themoviedb.org/3/movie/550/similar?api_key=f5d6924515589bd86df2db0fa179ec08")
                .then((res) => {

                    return { ...state, movies: [state.movies,...res.data.results] }
                })
        case 'SERIES':
            axios.get("https://api.themoviedb.org/3/movie/550/similar?api_key=f5d6924515589bd86df2db0fa179ec08")
                .then((res) => {
                    // return { ...state, series: [res.data.results] }
                })

        default:
            axios.get("https://api.themoviedb.org/3/movie/550/similar?api_key=f5d6924515589bd86df2db0fa179ec08")
            .then((res) => {
                // console.log(res.data)
                return {...res.data.results }
            });

    }
}