export const trending = (req, res) => {
    const videos = []
    res.render("home", { pageTitle: "Home", videos});
};
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("editVideo", { pageTitle: "EditVideo" });
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");