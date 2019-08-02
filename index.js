var Request = require("request");

Request.get("https://services7.arcgis.com/um8CA8KcKChzWgPS/arcgis/rest/services/DLP_Actual_List_of_Installations/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});