import React,{ useState} from "react";

function SignUp(){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        password: "",
        confirmPassword: "",


    });
    const validateForm = () => {
        let isValid = true;

        if (formData.username.trim() === ''){
            errors.username = 'username is required';
            isValid = false;
        }else{
            errors.username = '';
        }
        if (formData.password.length < 6){
            errors.password = 'password must be at least 6 characters';
            isValid = false;
        }else{
            errors.password = '';
        }

        if (formData.confirmPassword !== formData.password){
            errors.confirmPassword='passwords do not math';
            isValid = false;
        }else{
            errors.confirmPassword = '';
        }
        setErrors({...errors});
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()){
            //form is valid, you can submit the data or perform other actions here
            alert('form submitted scucessfully')
        }
    };

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return(
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                    <button type="submit">submit</button>

                
                
            </form>
        </div>
    );
}

export default SignUp;