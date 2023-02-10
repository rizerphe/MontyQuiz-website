import { useEffect } from "react";

const Form = ({ url, id }) => {
    useEffect(() => {
        var script = document.createElement("script");
        script.id = "ff-script";
        script.src = `${url}?div=${id}`;
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
    }, [url, id]);

    return <div id={id} className="ff-form" />;
};

export default Form;
