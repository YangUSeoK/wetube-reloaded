export const trending = (req, res) => res.send("HomePage Videos");
export const see = (req, res) => {
    console.log(req.params);
    res.send("Watch Video");  
} 

export const edit = (req, res) =>  {
    console.log(req.params);
    res.send("Edit Video");
}

export const search = (req, res) => {
    console.log(req.params);
    res.send("Search");
}

export const upload = (req, res)  => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");