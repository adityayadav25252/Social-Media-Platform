import ImageKit from "imagekit";

var imagekit = new ImageKit({
    publicKey : "your_public_api_key",
    privateKey : "your_private_api_key",
    urlEndpoint : "https://ik.imagekit.io/your_imagekit_id/"
});

export async function uploadImage(file,filename) {
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file: file.buffer, 
            fileName: filename,
            folder: "n22-social-application" 
        }, function(error, result) {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}