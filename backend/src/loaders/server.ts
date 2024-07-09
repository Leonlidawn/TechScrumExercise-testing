import config from "../app/config/app";

export default (app:any) => {
    app.listen(config.port, () => {
        console.log(`🌸🌸🌸[server]:Server is running at http://localhost:${config.port} 🌸🌸🌸`);
    }).on('error', (err: any) => {
        console.error("Error", err);
    });
};
