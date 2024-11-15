import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import style from './Register.module.css';

const RegisterUser = () => {
    const [showRegistry, setShowRegistry] = useState(false);
    const navigate = useNavigate();

    const registerUserToBase = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
    
        try {
          const response = await axios.post(
            "http://localhost:3000/users/register",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

        
    
          if (response.status === 200) {
            console.log("Pavyko uzregistruoti");
            navigate("/login"); // Redirect on success
            setShowRegistry(false); // Close the registration form
          }
        } catch (err) {
          console.error("Nepavyko uzregistruoti", err);
          alert("Nepavyko uzregistruoti vartotojo.");
        }
      };
    

    return (
        <div>
            <div>
                <button onClick={() => setShowRegistry(prevState => !prevState)}  >{ showRegistry ? 'Back to Login'  : "Create User"}</button>
            </div>
            <div>
               {showRegistry && 
               <form onSubmit={registerUserToBase}>
                    <ul>
                        <li>
                            <label>Username</label>
                            <input type="text" name="user_name" required />
                        </li>
                        <li>
                            <label>Password</label>
                            <input type="password" name="password" required />
                        </li>
                        <li>
                            <label>Email</label>
                            <input type="email" name="email" required />
                        </li>
                        <li>
                            <label>Things about yourself</label>
                            <input type="text" name="bio"  />
                        </li>
                        <li>
                            <label>Photo</label>
                            <input type="file" name="photo" />
                        </li>
                    </ul>
                    <button className={style.registerUserButton} type="submit" >Register User</button>
                </form>}
            </div>
        </div>
    )

}

export default RegisterUser;