import axios from "axios";
export async function retrieveDistance() {
    const origin = "40.78382,-73.97536";
    const destination = "40.70390,-73.98690";
    const modes = "foot,car";
    const units = "imperial";
    const apiKey = "prj_test_sk_6e67e5421c7aa8e59af46e20f872471dd53096d6";

    const apiUrl = `https://api.radar.io/v1/route/distance?origin=${origin}&destination=${destination}&modes=${modes}&units=${units}`;
    const headers = {
        "Authorization": apiKey,
    };
    const response = await axios.get(apiUrl, { headers });
    console.log(response)
    return response
}
