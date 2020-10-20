import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoiviedb.org/3",
});

export default instance;