import styles from './Form.module.css'
import Button from '../Buttons/Button';
import { MdMessage } from "react-icons/md"
import { AiOutlinePhone } from "react-icons/ai"
import { AiFillMail } from "react-icons/ai"
const Form = () => {

    const onCall = ()=>{
        console.log ("Received the call")
    }
    return (
        <section className={styles.container}>
            <div className={styles.form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button onClick= {onCall} text="VIA SUPPORT CALL" icon={<AiOutlinePhone fontSize="24px" />} />
                </div>
                <Button
                    isOutline={true} text="VIA MAIL SUPPORT" icon={<AiFillMail fontSize="24px" />} />
                <form>
                    <div className={styles.control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name= "name"/>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name= "email"/>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="text">Text</label>
                        <textarea name= "text" rows="10"/>
                    </div>
                    <div style={{display:"flex",
                    justifyContent: "end"
                    }}><Button text="SUBMIT" /></div>
                    
                </form>



            </div>
            <div className={styles.image}>
                <img src="/images/service.svg" alt="" />
            </div>
        </section>
    );
}

export default Form;
