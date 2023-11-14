import React,{useState} from "react";
function Form(){
    const[formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const handleChange =(e) => {
        const {name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // specify the external URL provided by "formsubmit.com"
        const actionUrl="https://formsubmit.co/fathima2336@gmail.com";

        // create a form element dynamically
        const form = document.createElement("form");
        form.method = "post";
        form.action = actionUrl;

        // Add form fields as hidden input elements
        for (const key in formData){
            if (formData.hasOwnProperty(key)) {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = formData[key];
                form.appendChild(input);
            }
        }
        const x = document.createElement("input");
        x.type = "hidden";
        x.name = "_captcha";
        x.value = "false";
        //append the form to the document body and submit it
        document.body.appendChild(form);
        form.submit();
    };
        return(
            <div className="App">
                <h1>Sample form</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>

        );
}
export default Form;